import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const assets = resolve(dist, "assets");
const vendor = resolve(dist, "vendor");
const copy = async (source, destination) => {
  const target = resolve(dist, destination);
  await mkdir(dirname(target), { recursive: true });
  await cp(resolve(root, source), target, { recursive: true });
};

await rm(dist, { recursive: true, force: true });
await mkdir(assets, { recursive: true });
await copy("public/index.html", "index.html");
await copy("public/favicon.svg", "favicon.svg");
await copy("public/manifest.webmanifest", "manifest.webmanifest");
await copy("recovered", "assets");
await copy("src/app/main.js", "assets/app-main.js");
await copy("src/app/routes.js", "assets/routes.js");
await copy("src/components/AppShell.js", "assets/AppShell.js");
await copy("src/components/DownloadDialog.js", "assets/DownloadDialog.js");
await copy("src/components/Notifications.js", "assets/Notifications.js");
await copy("src/components/RecoveredErrorBoundary.js", "assets/RecoveredErrorBoundary.js");
await copy("src/components/ToolCard.js", "assets/ToolCard.js");
await copy("src/components/WorkspaceComponents.js", "assets/WorkspaceComponents.js");
await copy("src/pages/HomePage.js", "assets/HomePage.js");
await copy("src/pages/WorkspacePage.js", "assets/WorkspacePage.js");
await copy("src/pages/AboutPage.js", "assets/AboutPage.js");
await copy("src/pages/PrivacyPage.js", "assets/PrivacyPage.js");
await copy("src/engine/recovered-tools.js", "assets/recovered-tools.js");
await copy("src/engine/runtime-dependencies.js", "assets/runtime-dependencies.js");
await copy("src/registry/tools.js", "assets/new-tools.js");
await copy("src/styles/new-product.css", "assets/new-product.css");
await copy("src/styles/workspace.css", "assets/workspace.css");
await copy("extracted/assets/Dashboard-C3JB9zw0.js", "assets/Dashboard-C3JB9zw0.js");
await copy("extracted/assets/chevron-down-B25xREwk.js", "assets/chevron-down-B25xREwk.js");
await copy("vendor-src/ghostscript/background-worker.js", "background-worker.js");
await copy("vendor-src/ghostscript/gs-worker.js", "gs-worker.js");
await copy("vendor-src/ghostscript/gs-worker.wasm", "gs-worker.wasm");
await mkdir(resolve(dist, "vendor/badges"), { recursive: true });
await writeFile(resolve(dist, "vendor/badges/external-listing.svg"), `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="54" viewBox="0 0 180 54" role="img" aria-label="External listing"><rect width="180" height="54" rx="8" fill="#18181b"/><rect x="1" y="1" width="178" height="52" rx="7" fill="none" stroke="#3f3f46"/><text x="90" y="32" fill="#a1a1aa" font-family="Arial,sans-serif" font-size="12" text-anchor="middle">External listing</text></svg>`);

const vendorFiles = [
  ["node_modules/pdf-lib/dist/pdf-lib.min.js", "vendor/pdf-lib/pdf-lib.min.js"],
  ["node_modules/pdfjs-dist/build/pdf.min.js", "vendor/pdfjs/pdf.min.js"],
  ["node_modules/pdfjs-dist/build/pdf.worker.min.js", "vendor/pdfjs/pdf.worker.min.js"],
  ["node_modules/pdfjs-dist/cmaps", "vendor/pdfjs/cmaps"],
  ["node_modules/downloadjs/download.min.js", "vendor/downloadjs/download.min.js"],
  ["node_modules/jszip/dist/jszip.min.js", "vendor/jszip/jszip.min.js"],
  ["node_modules/jspdf/dist/jspdf.umd.min.js", "vendor/jspdf/jspdf.umd.min.js"],
  ["node_modules/html2canvas/dist/html2canvas.min.js", "vendor/html2canvas/html2canvas.min.js"],
  ["node_modules/docx-preview/dist/docx-preview.min.js", "vendor/docx-preview/docx-preview.min.js"],
  ["node_modules/marked/marked.min.js", "vendor/marked/marked.min.js"],
  ["node_modules/xlsx/dist/xlsx.full.min.js", "vendor/xlsx/xlsx.full.min.js"],
  ["node_modules/pako/dist/pako.min.js", "vendor/pako/pako.min.js"],
  ["node_modules/mammoth/mammoth.browser.min.js", "vendor/mammoth/mammoth.browser.min.js"],
  ["node_modules/pdfmake/build/pdfmake.min.js", "vendor/pdfmake/pdfmake.min.js"],
  ["node_modules/pdfmake/build/vfs_fonts.js", "vendor/pdfmake/vfs_fonts.js"],
  ["node_modules/html2pdf.js/dist/html2pdf.bundle.min.js", "vendor/html2pdf/html2pdf.bundle.min.js"],
  ["node_modules/qrcodejs/qrcode.min.js", "vendor/qrcode/qrcode.min.js"],
  ["node_modules/lamejs/lame.min.js", "vendor/lamejs/lame.min.js"],
  ["node_modules/tesseract.js/dist/tesseract.min.js", "vendor/tesseract/tesseract.min.js"],
  ["node_modules/tesseract.js/dist/worker.min.js", "vendor/tesseract/worker.min.js"],
  ["node_modules/tesseract.js-core", "vendor/tesseract/core"],
  ["vendor-src/tessdata/eng.traineddata.gz", "vendor/tesseract/lang/eng.traineddata.gz"],
  ["node_modules/@xenova/transformers/dist", "vendor/transformers"],
  ["node_modules/@xenova/transformers/LICENSE", "vendor/transformers/LICENSE"],
  ["node_modules/kokoro-js/dist/kokoro.web.js", "vendor/kokoro/kokoro.web.js"],
  ["node_modules/kokoro-js/LICENSE", "vendor/kokoro/LICENSE"],
  ["node_modules/@huggingface/transformers/dist/ort-wasm-simd-threaded.jsep.mjs", "vendor/kokoro/ort-wasm-simd-threaded.jsep.mjs"],
  ["node_modules/@huggingface/transformers/dist/ort-wasm-simd-threaded.jsep.wasm", "vendor/kokoro/ort-wasm-simd-threaded.jsep.wasm"],
  ["node_modules/kokoro-js/voices", "vendor/kokoro/voices"],
  ["vendor-src/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/1939ad2a8e416c0acfeecc08a694d14ef25f2231", "vendor/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main"],
  ["vendor-src/models/Xenova/distilbart-cnn-6-6/resolve/6b476295a3cf27d5b20e8c8b847a54ab8e5d0df9", "vendor/models/Xenova/distilbart-cnn-6-6/resolve/main"],
  ["vendor-src/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/ac4f4e5e413ba923fd1a0091e2c2234d553d77fb", "vendor/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/main"],
  ["vendor-src/models/Xenova/distilbert-base-uncased-distilled-squad/UPSTREAM-MODEL-CARD.md", "vendor/models/Xenova/distilbert-base-uncased-distilled-squad/UPSTREAM-MODEL-CARD.md"],
];
for (const [source, destination] of vendorFiles) await copy(source, destination);

const fontPackages = [
  "noto-sans", "caveat", "patrick-hand", "dancing-script", "lora", "dm-sans", "dm-mono",
  "carlito", "caladea", "tinos", "arimo", "cousine", "gelasio", "playfair-display",
];
for (const name of fontPackages) await copy(`node_modules/@fontsource/${name}/files`, `vendor/fonts/${name}`);

// Tesseract constructs versioned jsDelivr defaults. Mirror that layout locally.
await copy("node_modules/tesseract.js/dist/worker.min.js", "vendor/npm/tesseract.js@v5.1.0/dist/worker.min.js");
for (const version of ["v5.0.0", "v5.1.0"])
  await copy("node_modules/tesseract.js-core", `vendor/npm/tesseract.js-core@${version}`);
await copy("vendor-src/tessdata/eng.traineddata.gz", "vendor/npm/@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz");

await writeFile(resolve(vendor, "fonts/handwriting.css"), `
@font-face{font-family:Caveat;font-style:normal;font-weight:500;src:url('/vendor/fonts/caveat/caveat-latin-500-normal.woff2') format('woff2')}
@font-face{font-family:'Patrick Hand';font-style:normal;font-weight:400;src:url('/vendor/fonts/patrick-hand/patrick-hand-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'Dancing Script';font-style:normal;font-weight:500;src:url('/vendor/fonts/dancing-script/dancing-script-latin-500-normal.woff2') format('woff2')}
`);
await writeFile(resolve(vendor, "fonts/epub.css"), `
@font-face{font-family:Lora;font-style:normal;font-weight:400;src:url('/vendor/fonts/lora/lora-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:Lora;font-style:normal;font-weight:600;src:url('/vendor/fonts/lora/lora-latin-600-normal.woff2') format('woff2')}
@font-face{font-family:Lora;font-style:italic;font-weight:400;src:url('/vendor/fonts/lora/lora-latin-400-italic.woff2') format('woff2')}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:400;src:url('/vendor/fonts/dm-sans/dm-sans-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:500;src:url('/vendor/fonts/dm-sans/dm-sans-latin-500-normal.woff2') format('woff2')}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:600;src:url('/vendor/fonts/dm-sans/dm-sans-latin-600-normal.woff2') format('woff2')}
@font-face{font-family:'DM Mono';font-style:normal;font-weight:400;src:url('/vendor/fonts/dm-mono/dm-mono-latin-400-normal.woff2') format('woff2')}
`);
await writeFile(resolve(vendor, "fonts/blog.css"), `
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:400;src:url('/vendor/fonts/playfair-display/playfair-display-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'Playfair Display';font-style:normal;font-weight:700;src:url('/vendor/fonts/playfair-display/playfair-display-latin-700-normal.woff2') format('woff2')}
@font-face{font-family:'DM Mono';font-style:normal;font-weight:400;src:url('/vendor/fonts/dm-mono/dm-mono-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:400;src:url('/vendor/fonts/dm-sans/dm-sans-latin-400-normal.woff2') format('woff2')}
@font-face{font-family:'DM Sans';font-style:normal;font-weight:600;src:url('/vendor/fonts/dm-sans/dm-sans-latin-600-normal.woff2') format('woff2')}
`);
const pptxFamilies = [
  ["Arial", "arimo"], ["Calibri", "carlito"], ["Cambria", "caladea"],
  ["Times New Roman", "tinos"], ["Courier New", "cousine"], ["Georgia", "gelasio"],
  ["Noto Sans", "noto-sans"], ["DM Sans", "dm-sans"], ["Lora", "lora"],
  ["Playfair Display", "playfair-display"],
];
const pptxCss = pptxFamilies.flatMap(([family, packageName]) => [400, 700].map(
  (weight) => `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:swap;src:url('/vendor/fonts/${packageName}/${packageName}-latin-${weight}-normal.woff2') format('woff2')}`,
)).join("\n");
await writeFile(resolve(vendor, "fonts/pptx.css"), `${pptxCss}\n`);

const replacements = new Map([
  ["https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js", "/vendor/pdf-lib/pdf-lib.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js", "/vendor/pdf-lib/pdf-lib.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js", "/vendor/pdfjs/pdf.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js", "/vendor/pdfjs/pdf.worker.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/", "/vendor/pdfjs/cmaps/"],
  ["https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js", "/vendor/downloadjs/download.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", "/vendor/jszip/jszip.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js", "/vendor/jspdf/jspdf.umd.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js", "/vendor/html2canvas/html2canvas.min.js"],
  ["https://cdn.jsdelivr.net/npm/docx-preview@0.3.5/dist/docx-preview.min.js", "/vendor/docx-preview/docx-preview.min.js"],
  ["https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js", "/vendor/marked/marked.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js", "/vendor/xlsx/xlsx.full.min.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js", "/vendor/pako/pako.min.js"],
  ["https://cdn.jsdelivr.net/npm/mammoth@1.7.2/mammoth.browser.min.js", "/vendor/mammoth/mammoth.browser.min.js"],
  ["https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/pdfmake.min.js", "/vendor/pdfmake/pdfmake.min.js"],
  ["https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/vfs_fonts.js", "/vendor/pdfmake/vfs_fonts.js"],
  ["https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js", "/vendor/html2pdf/html2pdf.bundle.min.js"],
  ["https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js", "/vendor/qrcode/qrcode.min.js"],
  ["https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js", "/vendor/lamejs/lame.min.js"],
  ["https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js", "/vendor/tesseract/tesseract.min.js"],
  ["https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/tesseract.min.js", "/vendor/tesseract/tesseract.min.js"],
  ["https://unpkg.com/tesseract.js@5.1.1/dist/tesseract.min.js", "/vendor/tesseract/tesseract.min.js"],
  ["https://cdn.jsdelivr.net/npm/tesseract.js@4.1.4/dist/tesseract.min.js", "/vendor/tesseract/tesseract.min.js"],
  ["https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/worker.min.js", "/vendor/tesseract/worker.min.js"],
  ["https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.0/tesseract-core-simd-lstm.wasm.js", "/vendor/tesseract/core/tesseract-core-simd-lstm.wasm.js"],
  ["https://tessdata.projectnaptha.com/4.0.0", "/vendor/tesseract/lang"],
  ["https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Patrick+Hand&family=Dancing+Script:wght@500&display=swap", "/vendor/fonts/handwriting.css"],
  ["https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400&display=swap", "/vendor/fonts/epub.css"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5/files/noto-sans-all-400-normal.woff2", "/vendor/fonts/noto-sans/noto-sans-latin-400-normal.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5/files/noto-sans-all-700-normal.woff2", "/vendor/fonts/noto-sans/noto-sans-latin-700-normal.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5/files/noto-sans-all-400-italic.woff2", "/vendor/fonts/noto-sans/noto-sans-latin-400-italic.woff2"],
  ["https://cdn.jsdelivr.net/npm/@fontsource/noto-sans@5/files/noto-sans-all-700-italic.woff2", "/vendor/fonts/noto-sans/noto-sans-latin-700-italic.woff2"],
  ["https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js", "/vendor/transformers/transformers.min.js"],
  ["https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2", "/vendor/transformers/transformers.min.js"],
  ["https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm", "/vendor/kokoro/kokoro.web.js"],
  ["https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap", "/vendor/fonts/blog.css"],
  ["https://dqy38fnwh4fqs.cloudfront.net/website/project-spotlight/project-week-rank-one-dark.svg", "/vendor/badges/external-listing.svg"],
]);

for (const file of await readdir(assets)) {
  if (!file.endsWith(".js")) continue;
  const path = resolve(assets, file);
  let source = await readFile(path, "utf8");
  for (const [external, local] of replacements) source = source.replaceAll(external, local);
  source = source.replaceAll("https://cdn.jsdelivr.net/npm/@fontsource/${t}@5/files/${t}-latin-${o}-${s}.woff2", "/vendor/fonts/${t}/${t}-latin-${o}-${s}.woff2");
  if (file === "PdfToHtmlTool-Cfbja3PY.js") {
    source = source.replace('(l.src = "https:")', '(l.src = "/vendor/pdfjs/pdf.min.js")');
    source = source.replace('window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https:"', 'window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.js"');
  }
  if (file === "PptxToPdfTool-BzdZxGdy.js") {
    const start = source.indexOf("async function Pt(t) {");
    const end = source.indexOf("function Et(t) {", start);
    if (start < 0 || end < 0) throw new Error("Unable to locate recovered PPTX font loader");
    const localLoader = `async function Pt(t) {
  if (document.querySelector('link[data-ihatepdf-pptx-fonts]')) return document.fonts.ready.catch(() => {});
  return new Promise((resolveFontLoad) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/vendor/fonts/pptx.css';
    link.dataset.ihatepdfPptxFonts = 'true';
    link.onload = () => document.fonts.ready.then(resolveFontLoad).catch(resolveFontLoad);
    link.onerror = resolveFontLoad;
    document.head.appendChild(link);
  });
}
`;
    source = `${source.slice(0, start)}${localLoader}${source.slice(end)}`;
  }
  if (["ComparePDFTool-ydBZwG1x.js", "Summarytool-CP1kPdK4.js", "Pdftoepubtool-CQQokyDq.js"].includes(file)) {
    const before = source;
    source = source.replaceAll(
      "env.allowLocalModels = false;",
      "env.allowLocalModels = false;\nenv.remoteHost = '/vendor/models/';",
    );
    if (source === before) throw new Error(`Unable to configure bundled model host in ${file}`);
  }
  if (file === "index-AX28eR3E.js") {
    const start = source.indexOf("rt = ({ clarityProjectId: o }) => (");
    const end = source.indexOf(";\nconst it =", start);
    if (start < 0 || end < 0) throw new Error("Unable to locate recovered Clarity integration");
    source = `${source.slice(0, start)}rt = () => null${source.slice(end)}`;
    source = source.replace('      e.jsx(rt, { clarityProjectId: "uqgxjgjxao" }),\n', "");
  }
  await writeFile(path, source);
}

for (const script of [
  resolve(vendor, "tesseract/tesseract.min.js"),
  resolve(vendor, "tesseract/worker.min.js"),
  resolve(vendor, "npm/tesseract.js@v5.1.0/dist/worker.min.js"),
]) {
  let source = await readFile(script, "utf8");
  source = source.replaceAll("https://cdn.jsdelivr.net/npm/", "/vendor/npm/");
  await writeFile(script, source);
}

const kokoroPath = resolve(vendor, "kokoro/kokoro.web.js");
let kokoroSource = await readFile(kokoroPath, "utf8");
kokoroSource = kokoroSource.replaceAll(
  'remoteHost:"https://huggingface.co/"',
  'remoteHost:"/vendor/models/"',
);
kokoroSource = kokoroSource.replaceAll(
  "https://cdn.jsdelivr.net/npm/@huggingface/transformers@${n.env.version}/dist/",
  "/vendor/kokoro/",
);
kokoroSource = kokoroSource.replaceAll(
  "https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/voices/${e}.bin",
  "/vendor/kokoro/voices/${e}.bin",
);
await writeFile(kokoroPath, kokoroSource);

const transformersPath = resolve(vendor, "transformers/transformers.min.js");
let transformersSource = await readFile(transformersPath, "utf8");
transformersSource = transformersSource.replaceAll(
  "https://cdn.jsdelivr.net/npm/@xenova/transformers@${l}/dist/",
  "/vendor/transformers/",
);
await writeFile(transformersPath, transformersSource);

const htmlPath = resolve(dist, "index.html");
let html = await readFile(htmlPath, "utf8");
html = html.replace(/^\s*<link rel="(?:preconnect|dns-prefetch)"[^>]+(?:unpkg\.com|cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com)[^>]*>\s*$/gm, "");
html = html.replace(/(<(?:img|image)\b[^>]*\bsrc=["'])https?:\/\/[^"']+(["'])/gi, "$1/vendor/badges/external-listing.svg$2");
await writeFile(htmlPath, html);

console.log(`Recovered production shell assembled at ${dist}`);
console.log("Core PDF/office/OCR dependencies vendored under dist/vendor");
console.log("Microsoft Clarity removed from generated runtime");
console.log("External marketing badge images replaced by a local non-network placeholder");
