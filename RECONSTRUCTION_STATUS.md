# Reconstruction Status

> Superseded status note (2026-08-25): all five artifacts previously listed as missing were recovered exactly from the deployed application, including Workflow's Ghostscript worker/WASM chain. See `docs/RECONSTRUCTION-COMPLETION.md` for current verified status.

Investigation date: 2026-08-25

Classification: **B — runnable after restoring missing deployment structure/assets**, with a small partially recoverable area. The captured production JavaScript is largely intact, but this directory is not an original Vite source project and cannot currently be rebuilt from source.

## 1. Current Project Structure

- `package.json` / `package-lock.json`: present, but belong to the recovery scripts, not the recovered application. The only dependency is `playwright`; the only script is the intentionally failing placeholder `test` script.
- `node_modules/`: present for the recovery package.
- `vite.config.*`, `tsconfig.*`, root `index.html`, `src/`, `public/`, root `assets/`: absent.
- `recovered/`: 55 JavaScript files plus one CSS file (about 5 MB). It contains the main chunk, React/vendor chunk, PDF utility chunk, search modal, and 51 functional tool chunks.
- `extracted/`: captured production `index.html`, main/vendor/CSS chunks, Dashboard and chevron chunks.
- `complete-resources/`: second crawl containing route snapshots and 55 production assets; it does not contain a deployable root `index.html`.
- `reconstructed-src/`: empty.
- `crawl.js`, `extract.js`, `endpoints.txt`: recovery/crawling utilities and crawl output.
- Backend/server directories, API route directories, database configuration, and environment files: absent.
- No project files were installed, rewritten, or modified during testing. Runtime staging was created under `/tmp`.

## 2. Recovered Components

- Production HTML shell and SEO content: present in `extracted/index.html`.
- Main React application/router bundle: present.
- React, ReactDOM, React Router 7.11.0, and supporting vendor code: bundled in `react-vendor-Bc7KCos-.js`.
- PDF utility bundle: present; includes PDF manipulation/compression code.
- Main stylesheet: present.
- Dashboard and chevron chunks: present only in `extracted/assets/`, not `recovered/`.
- Tool search modal: present.
- Relative production imports use `./chunk.js`; the Vite preload map uses `assets/chunk.js`. These paths are restorable by placing all chunks together under `/assets` and serving the captured HTML at the web root.
- The original Vite **output layout** can be reconstructed. The original Vite **source project** cannot be reconstructed exactly from these minified/reformatted production chunks because source modules, source maps, configuration, and package manifest are absent.

The main bundle references 58 unique lazy-loaded chunks: 51 recovered tool chunks, Dashboard, ToolSearchModal, WorkflowTool, three blog UI chunks, and one blog data chunk. Dashboard and ToolSearchModal are present; Workflow and all four blog chunks are missing.

## 3. Recovered PDF Tools

There are **51 recovered functional tool bundles**. They cover merge, split, compress, organize, rotate, watermark, page numbers, encryption/unlock, forms, crop/resize, headers/footers, extraction, editing, conversion, OCR, repair, redaction, scanning, privacy analysis, local AI workflows, P2P sharing, GST/POS utilities, and related tools. See `RECOVERED_MODULES.md` for the complete table.

One additional tool, `WorkflowTool-DJnNLXUP.js`, is referenced by the main bundle but absent. Several route names share a bundle (for example sign/add-watermark behaviors), so route count and bundle count are not identical.

## 4. Dependencies Found

Bundled locally:

- React / ReactDOM / React Router and JSX runtime.
- PDF utility code, including pako-derived compression code, in `pdf-utils-DHnwt0li.js`.

Loaded at runtime from CDNs or exposed as browser globals:

- `pdf-lib` 1.17.1 (`window.PDFLib`)
- PDF.js 3.11.174 and its worker (`window.pdfjsLib`)
- pako 2.1.0 (`window.pako`) for the invert workflow
- downloadjs 1.4.7, marked 11.1.1, jsPDF 2.5.1, html2canvas 1.4.1, JSZip 3.10.1
- Mammoth 1.7.2, pdfmake 0.2.9, docx-preview 0.3.5, html2pdf.js 0.10.1
- Tesseract.js (several 4.x/5.x URLs), XLSX 0.18.5, QRCode.js
- Noto font files from jsDelivr
- Xenova Transformers 2.17.2 and Kokoro JS/model resources for browser-side AI/audio tools

The main bundle contains a runtime loader for the common globals. Several individual tool chunks also load their own CDN scripts. These libraries are not stored locally in the recovery, so offline claims are not currently reproducible from this directory and first use requires network access/cache.

## 5. External APIs / Backend Evidence

No evidence of an original application backend was found: no Express/server code, API routes, database client/configuration, Supabase, Firebase, authentication implementation, upload endpoint, cloud function, WebSocket server, or `/api/` application calls.

Observed network use is limited to:

- CDN library/model/font downloads.
- Microsoft Clarity analytics in the main bundle.
- `ChatWithPDFTool` calling Google Gemini directly from the browser at `generativelanguage.googleapis.com`, using a user-supplied API key stored in `localStorage`. This is an external API dependency, not evidence of an ihatepdf backend.
- P2P Share and Collab Whiteboard use browser WebRTC with public Google STUN servers. Session descriptions appear designed for manual/QR exchange; no recovered signaling backend was found.
- `fetch()` calls to data/blob URLs or font/CDN resources. React Router/vendor-internal fetch code is also present and is not an application API.

Most PDF processing is explicitly implemented client-side using FileReader, ArrayBuffer, Canvas, IndexedDB/localStorage, Web Workers, PDF.js, and PDFLib.

## 6. Missing Components

- Original `src/`, source maps, original `package.json`, Vite configuration, TypeScript configuration, and build scripts.
- Deployable root layout (`index.html` plus a unified `/assets` directory) in one directory.
- `WorkflowTool-DJnNLXUP.js`.
- `Blog-GoU6g3km.js`, `BlogPost-C8zx0wrA.js`, `BlogIndex-vf6xaC3P.js`, and `blog-posts-FRy920l-.js`.
- PWA/static assets referenced by HTML: `icon-512x512.png`, `icon-192x192.png`, `apple-touch-icon.png`, `favicon.ico`, `manifest.json`, and `og-image.png` were not found.
- A history-fallback-capable static server configuration. Direct requests to client routes return 404 with a plain file server.
- Locally vendored copies of CDN dependencies/workers/models/fonts.

## 7. Build Results

- `npm test`: fails by design with `Error: no test specified` because the recovery package has only the default placeholder script.
- There is no `build` or `dev` script and no Vite dependency/configuration, so no source compilation can be attempted without creating a new build project (outside this investigation's scope).
- Safe syntax validation: all 55 recovered JavaScript files plus the two supplemental extracted chunks passed `node --input-type=module --check` (57/57, zero syntax failures).
- No recovered module was rewritten, reformatted, or replaced.

Error classification:

- Missing source file/build configuration: original source tree and Vite configuration.
- Missing asset/chunk: Workflow and blog chunks; PWA/image assets.
- Incorrect deployment path: captured HTML and assets are split across directories rather than assembled at root plus `/assets`.
- Incorrect server routing: direct SPA route requests need history fallback.
- Browser-only/global dependency: PDFLib, pdfjsLib, pako, JSZip, jsPDF, etc.; runtime loaders exist but rely on external CDNs.
- Genuinely missing functionality: workflow UI and blog pages/data represented by absent chunks.
- Broken import: only when navigating to one of the missing lazy chunks; recovered tool chunk imports are otherwise present.
- Missing dependency: no npm build dependencies exist because these are production artifacts, not source.
- Unknown: full semantic correctness for complex conversion/repair tools cannot be established without interactive file tests.

## 8. Runtime Results

A temporary deployment was assembled under `/tmp` using the captured `index.html`, all `recovered/` assets, and the extracted Dashboard/chevron chunks. The repository itself was not changed.

- Local static server: started successfully on `127.0.0.1:4173`.
- `/`: HTTP 200; captured HTML served.
- `/assets/index-AX28eR3E.js`: HTTP 200; JavaScript served.
- `/merge-pdf`, `/split-pdf`, `/compress-pdf`: HTTP 404 when requested directly because the test server has no SPA fallback. This is a hosting configuration issue, not a missing tool chunk.
- In-app browser automation could not connect because the workspace rejected the browser client as untrusted. Therefore DOM render, file upload, PDF output, and console/network behavior could not be interactively verified.
- Homepage startup is verified only to HTTP/module-delivery level, not visual React render.
- A simple tool, Merge, Split, and Compress were verified for chunk presence, valid syntax, resolved local imports, and router registration; end-to-end processing was not executable without browser automation and test PDFs.

## 9. Errors

1. `npm test` — intentional placeholder failure; classification: **missing test/build configuration**.
2. Initial local server bind inside the restricted sandbox — `PermissionError: Operation not permitted`; resolved by approved local-server execution; classification: **environment restriction**, not application error.
3. Direct tool-route HTTP 404 — classification: **incorrect server path/fallback configuration**.
4. Browser connection rejected as untrusted — classification: **test environment limitation**.
5. Missing Workflow/blog lazy chunks — classification: **missing asset / genuinely missing functionality**.
6. Missing icons/manifest/OG image — classification: **missing asset**.

No JavaScript syntax errors were found in the recovered chunks.

## 10. What Can Be Reused Directly

- All 51 recovered tool production chunks.
- Main application, vendor, PDF utility, CSS, Dashboard, chevron, and search-modal chunks.
- Captured HTML/SEO shell.
- Existing relative import graph and hashed filenames.
- Client-side PDF logic, IndexedDB/localStorage history, Web Worker logic, and runtime CDN loaders.

These can be reused most directly as a recovered static production build. They should not be treated as maintainable original source yet.

## 11. What Needs Reconstruction

- First, a minimal static deployment directory and SPA fallback configuration, without changing bundle contents.
- Restore or deliberately exclude the missing Workflow and blog chunks/routes.
- Recover/copy icons, manifest, OG image, and optionally vendor CDN assets for reliable/offline operation.
- Only after behavior is captured and tested, reconstruct maintainable source, package dependencies, and Vite configuration module by module. Exact original source cannot be derived automatically from the bundles.

## 12. Recommended Next Step

Create a minimal **static recovery harness** (not a clone/rewrite): copy the captured HTML to a deployment root, combine all known assets under `/assets`, configure SPA history fallback, and add a repeatable browser smoke-test fixture with tiny sample PDFs. Run root, Text-to-PDF, Merge, Split, and Compress tests while recording console/network errors. In parallel, recrawl only the five missing lazy chunks and the missing PWA assets from any available origin/cache. Do not begin source reconstruction until that artifact-level runtime baseline passes.
