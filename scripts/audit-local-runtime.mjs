import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "../dist");
const allowed = [
  /https:\/\/generativelanguage\.googleapis\.com\//,
  /https:\/\/makersuite\.google\.com(?:\/|$)/,
  /https:\/\/razorpay\.me\//,
  /https:\/\/schema\.org(?:\/[^\s"'`<>\\)]*)?/,
  /https:\/\/(?:www\.)?ihatepdf\.cv\//,
  /https:\/\/react\.dev\/errors\//,
  /https:\/\/reactrouter\.com\//,
  /https:\/\/github\.com\/Hopding\/pdf-lib/,
  /https:\/\/peerlist\.io\//,
];
const files = [];
const walk = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (/\.(?:html|js|css)$/.test(entry.name)) files.push(path);
  }
};
await walk(resolve(root, "assets"));
files.push(resolve(root, "index.html"));

const unexpected = [];
for (const file of files) {
  const source = await readFile(file, "utf8");
  if (file.endsWith("index.html")) {
    for (const match of source.matchAll(/\b(?:src|srcset)=["'](https?:\/\/[^"']+)/gi))
      unexpected.push(`${file.slice(root.length + 1)} external subresource: ${match[1]}`);
    continue;
  }
  for (const match of source.matchAll(/https:\/\/[^\s"'`<>\\)]+/g))
    if (!allowed.some((pattern) => pattern.test(match[0])))
      unexpected.push(`${file.slice(root.length + 1)}: ${match[0]}`);
}
if (unexpected.length) {
  console.error("Unexpected external runtime URLs:");
  console.error(unexpected.join("\n"));
  process.exit(1);
}

const clarityHits = [];
for (const file of files) {
  const source = await readFile(file, "utf8");
  if (/clarity(?:\.ms|ProjectId)|Microsoft Clarity/i.test(source)) clarityHits.push(file);
}
if (clarityHits.length) {
  console.error(`Clarity remains in generated runtime: ${clarityHits.join(", ")}`);
  process.exit(1);
}
console.log("PASS: no unexpected external runtime URL remains");
console.log("PASS: Microsoft Clarity is absent from generated runtime");

const transformers = await readFile(resolve(root, "vendor/transformers/transformers.min.js"), "utf8");
const kokoro = await readFile(resolve(root, "vendor/kokoro/kokoro.web.js"), "utf8");
if (/cdn\.jsdelivr\.net/.test(transformers) || /cdn\.jsdelivr\.net/.test(kokoro)) {
  console.error("A vendored model runtime still contains a CDN runtime/WASM fallback");
  process.exit(1);
}
if (!transformers.includes('remoteHost:"https://huggingface.co/"')) {
  console.error("Expected external Transformers model-weight host classification was not found");
  process.exit(1);
}
if (!kokoro.includes('remoteHost:"/vendor/models/"') || kokoro.includes('remoteHost:"https://huggingface.co/"')) {
  console.error("Kokoro is not configured to use the bundled model");
  process.exit(1);
}
console.log("PASS: Transformers/Kokoro JavaScript and WASM resolve locally");
console.log("PASS: Kokoro q8 model and voices resolve locally");
for (const file of ["ComparePDFTool-ydBZwG1x.js", "Summarytool-CP1kPdK4.js", "Pdftoepubtool-CQQokyDq.js"]) {
  const source = await readFile(resolve(root, "assets", file), "utf8");
  if (!source.includes("env.remoteHost = '/vendor/models/';")) {
    console.error(`${file} is not configured for bundled models`);
    process.exit(1);
  }
}
const audioToPdf = await readFile(resolve(root, "assets/AudioToPdfTool-DklNO93s.js"), "utf8");
if (audioToPdf.includes("env.remoteHost = '/vendor/models/';")) {
  console.error("Audio to PDF was incorrectly redirected to an incomplete local Whisper model set");
  process.exit(1);
}
const assetSources = await Promise.all(files.filter((file) => file.endsWith(".js")).map((file) => readFile(file, "utf8")));
const joinedAssets = assetSources.join("\n");
if (/import\(\s*["']https?:\/\//.test(joinedAssets)) {
  console.error("External dynamic import remains in generated application chunks");
  process.exit(1);
}
if (/\b(?:XMLHttpRequest|WebSocket|EventSource|navigator\.sendBeacon)\b/.test(joinedAssets)) {
  console.error("Unexpected network-capable browser API remains in generated application chunks");
  process.exit(1);
}
for (const host of ["unpkg.com", "cdnjs.cloudflare.com", "fonts.googleapis.com", "fonts.gstatic.com", "tessdata.projectnaptha.com", "www.clarity.ms"]) {
  if (joinedAssets.includes(`https://${host}`)) {
    console.error(`Unexpected runtime dependency host remains: ${host}`);
    process.exit(1);
  }
}
console.log("PASS: Compare, Summary, and PDF-to-EPUB AI models resolve locally");
console.log("PASS: no external dynamic import, CDN/font/OCR host, analytics, or external HTML subresource remains");
console.log("INFO: Whisper weights for Audio to PDF remain explicitly hosted by huggingface.co");
