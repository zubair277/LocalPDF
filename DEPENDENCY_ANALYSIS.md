# Static Dependency Analysis

> Historical pre-completion analysis. The five formerly missing artifacts, Workflow Ghostscript worker/WASM, Transformers/Kokoro runtimes, Kokoro q8 model/voices, and bounded PPTX/Blog fonts have since been restored locally. See `docs/RECONSTRUCTION-COMPLETION.md`.

Analysis was completed before the production shell was assembled. `recovered/` was checksummed before and after the work; all 56 files remained byte-identical.

## Import Graph

- Every recovered tool imports `./react-vendor-Bc7KCos-.js`.
- `EncryptPdfTool-vJTbTUBg.js` additionally imports `./pdf-utils-DHnwt0li.js`.
- `pdf-utils-DHnwt0li.js` imports the React vendor chunk.
- `index-AX28eR3E.js` has one static vendor import and 58 unique lazy chunk targets.
- All required recovered imports resolve in `dist/assets`.
- Unresolved lazy targets: `WorkflowTool-DJnNLXUP.js`, `Blog-GoU6g3km.js`, `BlogPost-C8zx0wrA.js`, and `BlogIndex-vf6xaC3P.js`. The missing blog chunks also reference `blog-posts-FRy920l-.js` through the Vite preload map.
- Dashboard's additional `chevron-down-B25xREwk.js` dependency is restored from `extracted/assets`.

The per-module dependency matrix is in `RECOVERED_MODULES.md`. The following groups cover every recovered JavaScript file.

## Browser Globals by File

| Global/dependency | Recovered files using it |
|---|---|
| `window.PDFLib` / pdf-lib | Compress, CropResize, CsvPdf, DocScan, EditPdfText, FillForm, Flatten, GSTFilingPrep, HandwritingToPdf, HeadersFooters, ImagesToPdf, Invert, Merge, OCR, Organize, PageNumbers, PdfToHandwriting, Redact, RemovePassword, Repair, Rotate, Split, Unlock, Watermark |
| `window.pdfjsLib` / PDF.js | ChatWithPDF, ComparePDF, Compress, CropResize, CsvPdf, EditPdfText, ExtractText, Flatten, GSTFilingPrep, HandwritingToPdf, HeadersFooters, Invert, Merge, OCR, Organize, PageNumbers, PdfToDocx, PdfToExcel, PdfToHandwriting, PdfToHtml, PdfToJpg, PdfToPptx, PdfToAudio, PdfToEpub, PrivacyScanner, Redact, RemovePassword, Rotate, Summary, Unlock |
| `window.pako` | Invert PDF; pako-derived code is also embedded in the local PDF utility chunk |
| jsPDF | AudioToPdf, EbookToPdf, ExcelToPdf, GSTInvoice, HtmlToPdf, PPTXToPDF, PrivacyScanner, TextToPdf, WordToPdf |
| XLSX | ExcelToPdf, PdfToExcel; the search metadata also contains XLSX terms but does not execute XLSX |
| JSZip | Compress, CsvPdf, EbookToPdf, ExcelToPdf, GSTFilingPrep, PdfToDocx, PdfToPptx, PdfToAudio, PdfToEpub, PdfToZip, PPTXToPDF |
| Tesseract | ComparePDF, DocScan, EditPdfText, ExtractText, HandwritingToPdf, OCR, PdfToDocx, PdfToHandwriting, PdfToAudio, Summary |
| Transformers/Xenova | AudioToPdf, ComparePDF, PdfToEpub, Summary |
| Mammoth | Loaded by the main runtime for Word conversion |
| Kokoro | PdfToAudio worker |
| WebRTC | P2PShare and CollabWhiteboard |

Files not listed against a special global use React/browser APIs only: CollabWhiteboard, Fingerprint, MarkdownToPdf, P2PShare, PosBill, ToolSearchModal, the vendor chunk, and portions of the main application. `EncryptPdfTool` uses the local PDF utility chunk rather than a global.

## CDN and External Library URLs

- `https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/`
- `https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js`
- `https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js`
- `https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js`
- `https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js`
- `https://cdn.jsdelivr.net/npm/mammoth@1.7.2/mammoth.browser.min.js`
- `https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/pdfmake.min.js` and `vfs_fonts.js`
- `https://cdn.jsdelivr.net/npm/docx-preview@0.3.5/dist/docx-preview.min.js`
- Tesseract scripts from jsDelivr/unpkg, including 4.1.4, 5, 5.1.0, and 5.1.1 URLs
- `https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js`
- `https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js`
- Noto font files from `@fontsource/noto-sans@5` and Google Fonts for handwriting/PPTX rendering

## Workers, WASM, and Models

- PDF.js worker: external `pdf.worker.min.js` 3.11.174.
- Tesseract worker: external `tesseract.js@5.1.0/dist/worker.min.js` in Compare PDF; other tools let the Tesseract runtime resolve its worker.
- Tesseract core: external `tesseract-core-simd-lstm.wasm.js` plus language data from `https://tessdata.projectnaptha.com/4.0.0`.
- Transformers runtime: external Xenova Transformers 2.17.2. Model identifiers are resolved/downloaded by that runtime in browser workers.
- Audio transcription/summarization uses browser-downloaded model resources; none are local.
- Kokoro: external `kokoro-js@1.2.1/+esm`, model `onnx-community/Kokoro-82M-v1.0-ONNX` with q8/WASM execution.
- No local worker, WASM, ONNX, font, or model file was found.

## Actual Application Network Endpoints

- Gemini: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=...&alt=sse` in Chat with PDF. This is a direct browser-to-Google API call using the user's key.
- Microsoft Clarity: `https://www.clarity.ms/tag/...` analytics loader in the main bundle.
- WebRTC STUN: `stun:stun.l.google.com:19302`, `stun:stun1.l.google.com:19302`, and `stun:stun2.l.google.com:19302`.
- `https://razorpay.me/@ihatepdfcv` is a payment/donation link, not an application API.

Other `fetch()` calls operate on data URLs, blob-like generated URLs, CDN fonts, or Vite module-preload resources. No application-owned backend, upload API, authentication service, database, Supabase, Firebase, Express server, WebSocket endpoint, or cloud function was found.
