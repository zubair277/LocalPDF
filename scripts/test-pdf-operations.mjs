import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import {
  PDFDocument,
  StandardFonts,
  degrees,
  rgb,
} from "pdf-lib";
import { jsPDF } from "jspdf";

const require = createRequire(import.meta.url);
const pdfjs = require("pdfjs-dist/legacy/build/pdf.js");
const { createWorker } = require("tesseract.js");
const run = promisify(execFile);
const root = resolve(import.meta.dirname, "..");
const scratch = await mkdtemp(resolve(tmpdir(), "ihatepdf-tests-"));
const completed = [];

const test = async (name, operation) => {
  await operation();
  completed.push(name);
  console.log(`PASS: ${name}`);
};

const load = (bytes) => PDFDocument.load(bytes);
const assertPdf = async (bytes, pages) => {
  assert.equal(Buffer.from(bytes).subarray(0, 5).toString(), "%PDF-");
  const document = await load(bytes);
  assert.equal(document.getPageCount(), pages);
  return document;
};

const fixture = async (labels, sizes = []) => {
  const document = await PDFDocument.create();
  const font = await document.embedFont(StandardFonts.Helvetica);
  labels.forEach((label, index) => {
    const page = document.addPage(sizes[index] || [400, 240]);
    page.drawText(label, { x: 32, y: 120, size: 24, font });
  });
  return document.save();
};

const extractText = async (bytes) => {
  const document = await pdfjs.getDocument({
    data: new Uint8Array(bytes),
    disableWorker: true,
    standardFontDataUrl: `${resolve(root, "node_modules/pdfjs-dist/standard_fonts")}/`,
  }).promise;
  const text = [];
  for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber += 1) {
    const page = await document.getPage(pageNumber);
    const content = await page.getTextContent();
    text.push(content.items.map((item) => item.str).join(" "));
  }
  await document.destroy();
  return text.join("\n");
};

try {
  const first = await fixture(["MERGE ONE"]);
  const second = await fixture(["MERGE TWO", "MERGE THREE"]);

  await test("Merge: two local PDFs produce a valid three-page PDF", async () => {
    const output = await PDFDocument.create();
    for (const bytes of [first, second]) {
      const source = await load(bytes);
      const pages = await output.copyPages(source, source.getPageIndices());
      pages.forEach((page) => output.addPage(page));
    }
    const bytes = await output.save();
    await writeFile(resolve(scratch, "merged.pdf"), bytes);
    await assertPdf(bytes, 3);
  });

  await test("Split: each selected page is emitted as a valid one-page PDF", async () => {
    const source = await load(second);
    const outputs = [];
    for (const index of source.getPageIndices()) {
      const output = await PDFDocument.create();
      const [page] = await output.copyPages(source, [index]);
      output.addPage(page);
      outputs.push(await output.save());
    }
    assert.equal(outputs.length, 2);
    for (const bytes of outputs) await assertPdf(bytes, 1);
  });

  await test("Compress: recovered Ghostscript worker/WASM chain is intact and compilable", async () => {
    const background = await readFile(resolve(root, "dist/background-worker.js"), "utf8");
    const loader = await readFile(resolve(root, "dist/gs-worker.js"), "utf8");
    const wasm = await readFile(resolve(root, "dist/gs-worker.wasm"));
    assert.match(background, /importScripts\("\.\/gs-worker\.js"\)/);
    assert.match(background, /_GSPS2PDF/);
    assert.match(loader, /gs-worker\.wasm/);
    assert.equal(wasm.subarray(0, 4).toString("hex"), "0061736d");
    await WebAssembly.compile(wasm);
  });

  await test("Rotate: page rotation survives serialization", async () => {
    const document = await load(first);
    document.getPage(0).setRotation(degrees(90));
    const output = await assertPdf(await document.save(), 1);
    assert.equal(output.getPage(0).getRotation().angle, 90);
  });

  await test("Organize: page order and rotations survive copy", async () => {
    const source = await load(await fixture(["A", "B", "C"], [[300, 200], [320, 210], [340, 220]]));
    const output = await PDFDocument.create();
    const pages = await output.copyPages(source, [2, 0]);
    pages[0].setRotation(degrees(180));
    pages.forEach((page) => output.addPage(page));
    const result = await assertPdf(await output.save(), 2);
    assert.equal(result.getPage(0).getWidth(), 340);
    assert.equal(result.getPage(1).getWidth(), 300);
    assert.equal(result.getPage(0).getRotation().angle, 180);
  });

  await test("Watermark: text watermark is embedded in every page", async () => {
    const document = await load(second);
    const font = await document.embedFont(StandardFonts.HelveticaBold);
    document.getPages().forEach((page) => page.drawText("OFFLINE WATERMARK", {
      x: 70, y: 70, size: 18, font, color: rgb(0.7, 0.1, 0.1), opacity: 0.5,
    }));
    const bytes = await document.save();
    assert.equal((await extractText(bytes)).match(/OFFLINE WATERMARK/g)?.length, 2);
  });

  await test("Page Numbers: deterministic page labels are embedded", async () => {
    const document = await load(second);
    const font = await document.embedFont(StandardFonts.Helvetica);
    document.getPages().forEach((page, index) => page.drawText(`Page ${index + 1} of 2`, {
      x: 150, y: 20, size: 10, font,
    }));
    const text = await extractText(await document.save());
    assert.match(text, /Page 1 of 2/);
    assert.match(text, /Page 2 of 2/);
  });

  await test("Encrypt: recovered PDF utility produces a password-encrypted PDF", async () => {
    const moduleDir = resolve(scratch, "recovered-module");
    await import("node:fs/promises").then(({ mkdir }) => mkdir(moduleDir, { recursive: true }));
    let utility = await readFile(resolve(root, "dist/assets/pdf-utils-DHnwt0li.js"), "utf8");
    const vendor = await readFile(resolve(root, "dist/assets/react-vendor-Bc7KCos-.js"), "utf8");
    utility = utility.replace("./react-vendor-Bc7KCos-.js", "./react-vendor.mjs");
    await writeFile(resolve(moduleDir, "pdf-utils.mjs"), utility);
    await writeFile(resolve(moduleDir, "react-vendor.mjs"), vendor);
    const { e: encryptPdf } = await import(`${new URL(`file://${resolve(moduleDir, "pdf-utils.mjs")}`).href}?test=1`);
    const encrypted = await encryptPdf(new Blob([first], { type: "application/pdf" }), {
      userPassword: "offline-test", ownerPassword: "offline-test",
    });
    assert.equal(Buffer.from(encrypted).subarray(0, 5).toString(), "%PDF-");
    assert.match(Buffer.from(encrypted).toString("latin1"), /\/Encrypt\b/);
    await assert.rejects(() => PDFDocument.load(encrypted));
  });

  await test("Fingerprint: SHA-256 is stable and content-sensitive", async () => {
    const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
    assert.equal(digest(first), digest(first));
    assert.notEqual(digest(first), digest(second));
    assert.equal(digest(first).length, 64);
  });

  await test("PDF conversion: local jsPDF output is readable by local PDF.js", async () => {
    const generated = new jsPDF({ unit: "pt", format: "a4" });
    generated.text("LOCAL CONVERSION", 40, 60);
    const bytes = new Uint8Array(generated.output("arraybuffer"));
    await assertPdf(bytes, 1);
    assert.match(await extractText(bytes), /LOCAL CONVERSION/);
  });

  await test("OCR: bundled English worker/core/language data recognizes a local fixture", async () => {
    const input = await fixture(["HELLO OFFLINE OCR"], [[400, 200]]);
    const pdfPath = resolve(scratch, "ocr.pdf");
    const imageBase = resolve(scratch, "ocr-fixture");
    await writeFile(pdfPath, input);
    await run("pdftoppm", ["-f", "1", "-singlefile", "-png", "-r", "150", pdfPath, imageBase], {
      env: { ...process.env, XDG_CACHE_HOME: scratch },
    });
    const worker = await createWorker("eng", 1, {
      langPath: resolve(root, "vendor-src/tessdata"),
      cachePath: resolve(scratch, "tesseract-cache"),
      gzip: true,
    });
    const result = await worker.recognize(`${imageBase}.png`);
    await worker.terminate();
    assert.match(result.data.text, /HELLO OFFLINE OCR/i);
  });

  console.log(`PASS: ${completed.length} local PDF operation tests completed`);
} finally {
  await rm(scratch, { recursive: true, force: true });
}
