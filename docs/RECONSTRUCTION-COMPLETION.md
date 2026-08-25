# Reconstruction Completion Report

> Baseline completion snapshot. The later, more self-contained freeze is documented in `OFFLINE-BASELINE.md`.

Date: 2026-08-25

Repository note: `ihatepdf-code/` is currently an untracked directory inside a broader parent Git worktree. A project-scoped historical diff is therefore unavailable; the unrelated parent worktree changes were inspected and left untouched. The exact files changed by this pass are listed below.

## Recovery status

| Area | Result | Evidence |
|---|---|---|
| Production build | **PASS** | `npm run build` assembles 63 application assets and 1,344 vendor files. |
| Static import/lazy routes | **PASS** | Every main-bundle relative import resolves. |
| Workflow | **PASS (artifact/contract)** | Exact 147,541-byte production chunk recovered with exact background worker, Ghostscript loader, and 13,987,253-byte WASM. |
| Blog routes/data | **PASS** | All four exact route/data chunks recovered; no substitute content was invented. |
| Runtime dependency audit | **PASS** | Core libraries, OCR, fonts, model runtimes, Kokoro model, and Workflow WASM resolve locally; Clarity is absent. |
| Automated PDF operations | **PASS** | 11 local tests: Merge, Split, Compress worker/WASM integrity, Rotate, Organize, Watermark, Page Numbers, recovered Encrypt, Fingerprint, PDF conversion, and English OCR. |
| Local HTTP delivery | **PASS** | 15 root/SPA/chunk/worker/WASM/font/model URLs return HTTP 200 with expected MIME types. |
| Manual browser testing | Not performed | Explicitly excluded by the task. Merge's earlier verified offline result remains accepted evidence. |

## Completed features

- Restored the exact Workflow, Blog, Blog Post, Blog Index, and blog-data production artifacts.
- Restored Workflow/Compress Ghostscript assets from the deployed application without modifying the recovered implementation.
- Vendored Transformers.js 2.17.2 and Kokoro JS 1.2.1 runtime/WASM assets with their package license files.
- Bundled the pinned Kokoro q8 model, metadata, and voices for offline PDF-to-Audio inference.
- Kept bundled English Tesseract worker/core/language data and verified actual offline OCR recognition.
- Replaced PPTX's open-ended Google Fonts request in generated output with a bounded local catalogue: Arial/Arimo, Calibri/Carlito, Cambria/Caladea, Times New Roman/Tinos, Courier New/Cousine, Georgia/Gelasio, Noto Sans, DM Sans, Lora, and Playfair Display. The recovered family mapping supplies deterministic fallback for other names.
- Added exact SHA-256 verification for the five late-recovered chunks, three Ghostscript assets, and the pinned Kokoro graph.

## Remaining external dependencies

- Chat with PDF fundamentally uses `generativelanguage.googleapis.com` and sends extracted text/prompts to Gemini when the user invokes it.
- Compare/Summary/PDF-to-EPUB AI/Audio-to-PDF model weights remain on `huggingface.co`; their runtime and WASM are local. Browser inference remains local after download/cache.
- P2P Share and Collaborative Whiteboard intentionally need reachable peers and Google STUN for their collaborative function.
- Makersuite and Razorpay are user-initiated external navigation. Marketing images/links retained in HTML are not processing dependencies.

## Remaining unknowns and limitations

- Source maps and original unbundled React source are not recovered; the production chunks are the authoritative implementation.
- The exact deployed Ghostscript worker/loader/WASM contains no embedded license notice in the recovered files. Technical recovery is complete, but redistribution clearance is **not established by this audit**; obtain provenance/license documentation before public distribution.
- The five large Whisper choices and DistilBART/DistilBERT weights are not bundled. One DistilBERT model card lacks explicit license metadata; no license was inferred.
- Compress/Workflow Ghostscript is verified by exact artifact hashes, worker-chain checks, valid WASM compilation, local HTTP delivery, and the existing offline Merge evidence. This run did not automate a browser Worker execution.
- PDF.js emits Node-only DOMMatrix/Path2D polyfill warnings in extraction tests because rendering canvases are browser APIs; the extraction assertions pass.

## Security audit

`npm audit --omit=dev --audit-level=high` completes but reports **15 advisories: 2 moderate, 10 high, 3 critical**. Principal affected exact compatibility dependencies are jsPDF/DOMPurify/html2pdf, PDF.js 3.11.174, XLSX 0.18.5, Mammoth 1.7.2, Transformers transitive ONNX/protobuf/sharp packages, and transitive `tar`. Available fixes generally require changing the recovered runtime's major/version contract; XLSX and parts of the model stack report no direct fix. No major upgrade was applied silently. Security modernization should be a separate compatibility-tested change.

## Files changed in this completion pass

- Exact recovered artifacts: `recovered/WorkflowTool-DJnNLXUP.js`, `Blog-GoU6g3km.js`, `BlogPost-C8zx0wrA.js`, `BlogIndex-vf6xaC3P.js`, `blog-posts-FRy920l-.js`.
- Exact/pinned binary inputs: `vendor-src/ghostscript/*`; `vendor-src/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/1939ad2…/*`.
- Build/test configuration: `package.json`, `package-lock.json`, `scripts/assemble-recovered.mjs`, `scripts/verify-recovered.mjs`, `scripts/audit-local-runtime.mjs`.
- New automation: `scripts/test-pdf-operations.mjs`, `scripts/test-http-runtime.mjs`.
- Reports/inventory: `RECOVERED_MODULES.md`, `LOCAL_EXTERNAL_AUDIT.md`, `RECONSTRUCTION_STATUS.md`, `docs/runtime-external-hosts.md`, `docs/model-runtime-audit.md`, this report.
- Generated output: `dist/` is rebuilt from the inputs above; recovered originals are not rewritten during build.

## Recommended next step

Freeze this artifact-level baseline. The next change should be an isolated security-compatibility branch that tests newer PDF.js/jsPDF/html2pdf/Mammoth versions against the recovered chunks. Large optional Transformer weights should be offered only as an explicit offline model pack, not added implicitly to the base application.
