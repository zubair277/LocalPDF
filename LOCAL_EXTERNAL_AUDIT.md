# Local vs External Dependency Audit

> Historical snapshot: the formerly missing Workflow/Blog artifacts have since been recovered exactly. Core CDN libraries, OCR English assets, model runtimes, Kokoro q8 weights/voices, Workflow Ghostscript WASM, Blog fonts, and a bounded PPTX font catalogue are now local. See `docs/RECONSTRUCTION-COMPLETION.md` for the current result.

Audit date: 2026-08-25

Scope: the 51 present recovered tool chunks, the dashboard/search surfaces, and the five known missing route artifacts. Conclusions come from inspecting executable paths in each recovered chunk plus the main router's per-tool dependency loader. The manually verified Merge result is included as runtime evidence: two local PDFs merged and downloaded with network disabled, with no file/API upload; only Clarity requests failed.

## Interpretation

- **Core processing local** means document transformation is performed by browser JavaScript, Canvas, Web Workers, Web Crypto, IndexedDB, or WebRTC—not by an ihatepdf server.
- **Offline: Yes** is used only when the recovered code needs no external runtime dependency for the core operation.
- **Conditional** means it works after the named CDN scripts/workers/fonts/models are already loaded or cached. A fresh homepage load does not guarantee this: the main app eagerly attempts only downloadjs, while tool libraries are injected when a tool is selected and some workers/models load only when processing begins.
- `data:`/blob fetches, `window.open()` for local generated files/print windows, `srcDoc` iframes, XML namespace strings, JSON-LD/schema URLs, and hyperlinks embedded in output documents are not uploads.
- The global Microsoft Clarity loader is **ANALYTICS** and is not required by any PDF operation. Its failure does not block the verified Merge workflow.

## Tool Audit

| Tool | Core processing local? | External runtime dependencies? | API/backend? | User file uploaded externally? | Offline after initial load? | External URLs | Notes |
|---|---|---|---|---|---|---|---|
| Text to PDF | Yes | **CDN LIBRARY:** jsPDF, html2canvas, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Libraries load when route is selected. Entered hyperlinks are output content, not fetched uploads. |
| Merge PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker for preview | No | No | **Verified conditional** | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Manually verified with two PDFs and network disabled; merge/download succeeded and no upload occurred. Result proves cached/already-loaded path, not a clean-cache install. |
| Compress PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, JSZip, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | `fetch(pdfDataURL)` reads a generated data URL locally. Chunk also has fallback CDN loaders. |
| Page Numbers | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local PDF mutation; route loader supplies globals. |
| Encrypt PDF | Yes | None for core operation; bundled `pdf-utils` | No | No | **Yes** | None required | Uses recovered local PDF utility chunk and browser APIs. |
| Watermark | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local mutation/preview. |
| Split PDF | Yes | **CDN LIBRARY:** PDFLib, downloadjs | No | No | Conditional | unpkg.com; cdn.jsdelivr.net | Local page copying. |
| HTML to PDF | Yes | **CDN LIBRARY:** jsPDF, html2canvas, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Iframe is a local preview/render surface, not an external frame. |
| Word to PDF | Yes | **CDN LIBRARY:** JSZip, docx-preview, html2canvas, jsPDF, downloadjs; possible remote fonts | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | DOCX is parsed/rendered locally; dependencies load on route selection. |
| Organize Pages | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local reorder/delete/rotate. SEO image URLs are metadata, not processing requests. |
| Images to PDF | Yes | **CDN LIBRARY:** PDFLib, downloadjs | No | No | Conditional | unpkg.com; cdn.jsdelivr.net | Images are read with FileReader and embedded locally. Canonical/schema URLs are metadata. |
| Redact PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local preview and PDF rewrite. |
| Markdown to PDF | Yes | **CDN LIBRARY:** marked, jsPDF, html2canvas, downloadjs | No | No | Conditional | cdn.jsdelivr.net; cdnjs.cloudflare.com | Preview iframe/print window is local. |
| Chat with PDF | Partly: extraction local; answer generation external | **CDN LIBRARY:** PDF.js; **WORKER/WASM:** PDF.js worker; **AI API:** Gemini | Direct Google Gemini API | **Yes — extracted document text and prompts are sent to Google** | **No** | generativelanguage.googleapis.com; makersuite.google.com; cdnjs.cloudflare.com | API key stored locally, then used in direct browser request. No ihatepdf backend. |
| PDF to JPG | Yes | **CDN LIBRARY:** PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Canvas rendering and image generation are local. |
| Remove Password | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local encrypted-PDF load/re-save. |
| Unlock PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Chunk can inject PDFLib/PDF.js itself if absent. |
| Fill PDF Form | Yes | **CDN LIBRARY:** PDFLib, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Local AcroForm read/write. |
| Crop/Resize PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local page-box mutation/preview. |
| Headers/Footers | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local text drawing. |
| Extract Text | Yes | **CDN LIBRARY:** PDF.js, downloadjs; optional Tesseract; **WORKER/WASM:** PDF.js/Tesseract workers, WASM and language data for OCR | No | No | Conditional; OCR requires cached assets | cdnjs.cloudflare.com; cdn.jsdelivr.net; tessdata.projectnaptha.com (runtime-resolved) | Text-layer extraction is local; scanned-image fallback invokes browser OCR downloads. |
| Edit PDF Text | Yes | **CDN LIBRARY:** PDFLib, PDF.js, Tesseract; **FONT:** four Noto Sans WOFF2 files; **WORKER/WASM:** PDF.js/Tesseract assets | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Font files are fetched during editing/embedding; OCR path loads Tesseract. |
| PDF to DOCX | Yes | **CDN LIBRARY:** PDF.js, JSZip, downloadjs; optional Tesseract; **WORKER/WASM:** PDF.js/Tesseract assets | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net; unpkg.com | DOCX ZIP/XML generation is local. OCR fallback downloads Tesseract. XML namespace URLs are not network calls. |
| Compare PDFs | Yes | **CDN LIBRARY:** PDF.js, Tesseract, Transformers; **WORKER/WASM:** explicit Tesseract worker/core; **MODEL:** browser summarization model; language data | No | No | Conditional; AI/OCR modes require cached assets/models | cdnjs.cloudflare.com; cdn.jsdelivr.net; tessdata.projectnaptha.com | Comparison and inference run in browser workers; no document API upload. |
| OCR PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, Tesseract; **WORKER/WASM:** PDF.js/Tesseract worker, WASM and language data | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net; Tesseract-resolved language hosts | OCR and PDF generation are local after assets load. |
| Repair PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, downloadjs | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Local parse/re-save/copy recovery. |
| PDF to Audio | Yes | **CDN LIBRARY:** PDF.js, Tesseract, LameJS; **WORKER/WASM:** PDF.js/Tesseract; **MODEL:** Kokoro JS plus ONNX q8/WASM model | No | No | Conditional; model must be cached | cdnjs.cloudflare.com; cdn.jsdelivr.net; model files resolved by kokoro-js | Text extraction, TTS inference and encoding occur locally. Dynamic import/model download occurs when feature boots. |
| GST Invoice | Yes | **CDN LIBRARY:** jsPDF, html2canvas, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Invoice generation stays in browser. |
| Summarize PDF | Yes | **CDN LIBRARY:** PDF.js, Tesseract, Transformers; **WORKER/WASM:** OCR assets; **MODEL:** browser summarization model | No | No | Conditional; model/OCR assets must be cached | cdnjs.cloudflare.com; cdn.jsdelivr.net; model host resolved by Transformers | Summarization pipeline is created inside a browser worker; no AI API. |
| Excel to PDF | Yes | **CDN LIBRARY:** XLSX, jsPDF, JSZip, html2canvas, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Workbook parse/render/export is local. |
| Flatten PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js; **WORKER/WASM:** PDF.js worker; **OTHER:** PDF.js CMaps | No | No | Conditional | cdnjs.cloudflare.com | CMaps and worker may be requested during document rendering. |
| Fingerprint PDF | Yes | None for core operation | No | No | **Yes** | None required | Uses FileReader/Web Crypto/browser APIs; no network-capable operation found. |
| CSV to PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, jsPDF, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | CSV parsing and PDF creation are local. |
| PDF to EPUB | Yes | **CDN LIBRARY:** PDF.js/JSZip; **FONT:** Google Fonts embedded in generated EPUB styling; **MODEL:** optional Transformers pipeline | No | No | Conditional; AI mode/fonts require cache | cdnjs.cloudflare.com; cdn.jsdelivr.net; fonts.googleapis.com; model host resolved by Transformers | EPUB ZIP/XML creation is local. Remote font CSS may remain referenced by produced EPUB. |
| Privacy Scanner | Yes | **CDN LIBRARY:** PDF.js, PDFLib, jsPDF, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Pattern/risk analysis is local; report generation uses jsPDF. |
| POS Billing | Yes | **CDN LIBRARY:** jsPDF, html2canvas, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Print window and billing state are local. |
| Invert PDF | Yes | **CDN LIBRARY:** PDF.js, PDFLib, pako, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | cdnjs.cloudflare.com; unpkg.com; cdn.jsdelivr.net | Local stream/image/PDF transformation. |
| PDF to Handwriting | Yes | **CDN LIBRARY:** PDF.js, PDFLib, Tesseract; **FONT:** Google Fonts; **WORKER/WASM:** PDF.js/Tesseract assets | No | No | Conditional | cdnjs.cloudflare.com; unpkg.com; cdn.jsdelivr.net; fonts.googleapis.com | Canvas/data-URL fetches are local. OCR is optional but externally bootstrapped. |
| Handwriting to PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js, Tesseract; **WORKER/WASM:** PDF.js/Tesseract assets | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Font byte fetch is from a selected/generated URL; document/image processing remains local. |
| P2P Share | Yes, peer-to-peer | **CDN LIBRARY:** QRCode; **WEBRTC:** Google STUN and a remote peer | No application backend | **Yes — intentionally sent directly to the selected peer, not a server** | **No for its intended transfer function** | cdn.jsdelivr.net; stun.l.google.com; stun1.l.google.com; stun2.l.google.com | Manual offer/answer signaling; no WebSocket/signaling server found. QR generation library is external. |
| Collaborative Whiteboard | Yes, peer-to-peer | **WEBRTC:** Google STUN and a remote peer | No application backend | **Yes — whiteboard operations/session data go to the selected peer** | **No for collaboration** | stun.l.google.com; stun1.l.google.com | Local solo drawing can work offline; collaboration inherently needs peer connectivity. No signaling server found. |
| Document Scan | Yes | **CDN LIBRARY:** PDFLib, downloadjs, optional Tesseract; **WORKER/WASM:** OCR assets | No | No | Conditional | unpkg.com; cdn.jsdelivr.net | Camera capture, enhancement and PDF generation are local; OCR mode downloads Tesseract. |
| Ebook to PDF | Yes | **CDN LIBRARY:** JSZip, jsPDF, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | EPUB/archive/XML parsing and rendering are local. Source-book iframes/scripts are filtered, not loaded remotely by the parser. |
| PPTX to PDF | Yes | **CDN LIBRARY:** JSZip, jsPDF, html2canvas, downloadjs; **FONT:** dynamically generated Google Fonts CSS | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net; fonts.googleapis.com | PPTX ZIP/XML/render/export is local; fonts may download based on presentation fonts. |
| PDF to PPTX | Yes | **CDN LIBRARY:** PDF.js, JSZip, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | PPTX package is generated locally. OOXML namespace URLs are identifiers only. |
| PDF to ZIP | Yes | **CDN LIBRARY:** JSZip, downloadjs | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Archive creation is local. |
| Rotate PDF | Yes | **CDN LIBRARY:** PDFLib, PDF.js; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com | Chunk explicitly injects dependencies on mount. |
| Audio to PDF | Yes | **CDN LIBRARY:** jsPDF/downloadjs/Transformers; **MODEL:** browser speech-recognition model | No | No | Conditional; model must be cached | cdnjs.cloudflare.com; cdn.jsdelivr.net; model host resolved by Transformers | Dynamic Transformers import and ASR model download occur in a worker; transcription stays local. |
| PDF to Excel | Yes | **CDN LIBRARY:** PDF.js, XLSX, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | cdnjs.cloudflare.com; cdn.jsdelivr.net | Table extraction and workbook generation are local. |
| PDF to HTML | Yes | **CDN LIBRARY:** PDF.js; **WORKER/WASM:** intended PDF.js worker | No | No | Conditional, with a code concern | cdnjs.cloudflare.com | Chunk dynamically loads PDF.js but assigns worker source to the suspicious literal `https:`; runtime worker behavior must be tested. Preview iframe is local. |
| GST Filing Prep | Yes | **CDN LIBRARY:** PDFLib, PDF.js, JSZip, downloadjs; **WORKER/WASM:** PDF.js worker | No | No | Conditional | unpkg.com; cdnjs.cloudflare.com; cdn.jsdelivr.net | Generated data-URL fetch is local; file preparation, splitting, merging and ZIP creation are local. |

## Non-tool and Missing Routes

| Tool | Core processing local? | External runtime dependencies? | API/backend? | User file uploaded externally? | Offline after initial load? | External URLs | Notes |
|---|---|---|---|---|---|---|---|
| Dashboard/home | Yes | **ANALYTICS:** Microsoft Clarity; optional downloadjs startup attempt | No | No | Yes for UI; analytics unavailable | clarity.ms; cdn.jsdelivr.net | Clarity failure is non-blocking, matching the manual offline Merge test. Dashboard chunk is local. |
| Tool Search | Yes | None | No | No | Yes | None | Search index/UI is contained in recovered chunk. |
| Workflow | Unknown | Unknown | Unknown | Unknown | No conclusion | Missing chunk | `WorkflowTool-DJnNLXUP.js` is absent; no capability claim is possible. |
| Blog / Blog Post / Technical Blog | Unknown | Unknown | No evidence available | No evidence available | No conclusion | Missing chunks | Four blog artifacts are absent. |

## Searched Network-capable Constructs

The complete recovered tree was searched for `fetch(`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `navigator.sendBeacon`, `script.src`, `import(`, `iframe`, `window.open`, `location.href`, `https://`, `http://`, `stun:`, `wss:`, and `ws:`.

Findings:

- No application `XMLHttpRequest`, WebSocket endpoint, EventSource object, `navigator.sendBeacon`, `ws:`, or `wss:` endpoint was found.
- `fetch()` is used for Gemini, Vite module preloads, remote font bytes, and local data URLs. Only Gemini sends document-derived user data to an external service.
- `script.src`/script injection loads the CDN libraries listed above and Microsoft Clarity.
- Dynamic remote `import()` occurs for Xenova Transformers and Kokoro.
- Iframes are local `srcDoc`/preview surfaces or sanitized document parsing surfaces; no recovered tool iframe uploads a file.
- Most `window.open()` calls open local blob URLs, generated documents, or print windows. Makersuite and payment links are user-initiated external navigation.
- WebRTC uses public STUN servers. No TURN server or application signaling backend is present.

## Classified External Dependencies

- **ANALYTICS:** `www.clarity.ms` (loader/collect/ping paths determined by Clarity at runtime).
- **CDN LIBRARY:** `unpkg.com`, `cdnjs.cloudflare.com`, `cdn.jsdelivr.net`.
- **WORKER/WASM:** `cdnjs.cloudflare.com` (PDF.js worker/CMaps), `cdn.jsdelivr.net` (Tesseract worker/core), Tesseract runtime-resolved assets.
- **FONT:** `cdn.jsdelivr.net` (`@fontsource`), `fonts.googleapis.com`, and transitively `fonts.gstatic.com` when Google Font CSS is used.
- **MODEL:** model files resolved by Xenova Transformers/Hugging Face-compatible runtime and Kokoro; explicit model identifier `onnx-community/Kokoro-82M-v1.0-ONNX`.
- **AI API:** `generativelanguage.googleapis.com`; key-management link `makersuite.google.com`.
- **WEBRTC:** `stun.l.google.com`, `stun1.l.google.com`, `stun2.l.google.com`.
- **PAYMENT/EXTERNAL LINK:** `razorpay.me/@ihatepdfcv`.
- **OTHER:** `tessdata.projectnaptha.com` for OCR language data. Static schema/XML namespaces and SEO/canonical URLs are not runtime dependencies.

## Final Counts and Conclusions

Counts use the **51 present recovered tool chunks** and exclude Dashboard, Tool Search, Workflow, and Blog.

### A. Tools fully local

**2:** Encrypt PDF and Fingerprint PDF require no external runtime asset for their core recovered operation.

Merge PDF is additionally **verified to operate offline in the tested cached/already-loaded environment**, but it is not counted as dependency-free because its route declares PDFLib/PDF.js/downloadjs CDN dependencies and preview can require the external PDF.js worker.

### B. Tools requiring external libraries/assets

**48** require at least one CDN library, worker, WASM file, language file, font, or model. Collaborative Whiteboard is the remaining non-local tool: it has no CDN library asset, but its collaboration purpose requires WebRTC/STUN/peer connectivity.

### C. Tools requiring external APIs

**1:** Chat with PDF fundamentally requires the Google Gemini API for answers. No recovered tool requires an ihatepdf-owned backend.

### D. Tools sending user files/data externally

**3:**

1. Chat with PDF sends extracted document text and user prompts to Google Gemini.
2. P2P Share intentionally sends the selected file directly to the chosen peer over WebRTC; it is not uploaded to an application server.
3. Collaborative Whiteboard sends session/drawing data directly to the chosen peer.

No other recovered tool contains an external request carrying user document bytes or extracted content.

### E. Complete external host list

Runtime/service hosts evidenced directly or transitively required by declared font/model runtimes:

- `www.clarity.ms`
- `unpkg.com`
- `cdnjs.cloudflare.com`
- `cdn.jsdelivr.net`
- `fonts.googleapis.com`
- `fonts.gstatic.com` (resolved by Google Fonts CSS)
- `tessdata.projectnaptha.com`
- `generativelanguage.googleapis.com`
- `makersuite.google.com`
- `stun.l.google.com`
- `stun1.l.google.com`
- `stun2.l.google.com`
- `razorpay.me`
- Model artifact hosts selected internally by `@xenova/transformers` and `kokoro-js` are not literal in the recovered chunks; exact hostnames cannot be proven from these files alone.

Static `ihatepdf.cv` SEO/canonical image URLs, `schema.org`, W3C/OOXML namespace URLs, and arbitrary hyperlinks embedded by users are excluded because the executable paths do not treat them as processing dependencies.

### F. Tools that can be made 100% offline by vendoring dependencies

All tools except Chat with PDF, P2P Share, and Collaborative Whiteboard can be made self-contained for their recovered core operation by vendoring and repointing the exact CDN libraries, workers, CMaps, WASM, OCR language data, fonts, and AI model artifacts. This includes browser-inference tools such as Compare, Summary, PDF to EPUB, PDF to Audio, and Audio to PDF, subject to storage/browser capability.

P2P Share and Collaborative Whiteboard can have their JavaScript dependencies vendored, but their intended multi-device functions still require peer networking; replacing public STUN with a local/network-reachable STUN arrangement is an infrastructure change, not simple asset vendoring.

### G. Tools that fundamentally require an external service

- **Chat with PDF:** Google Gemini AI API.
- **P2P Share:** another reachable WebRTC peer and connectivity/STUN for typical NAT traversal.
- **Collaborative Whiteboard:** another reachable WebRTC peer and connectivity/STUN for collaboration.

Microsoft Clarity and the Razorpay link are optional and never required for document processing.
