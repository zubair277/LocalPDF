# Offline Baseline

Date: 2026-08-25

## Runtime request classification

| Request / host | Classification | Why it remains | User document data sent? |
|---|---|---|---|
| `generativelanguage.googleapis.com` | Optional feature / AI API | Chat with PDF's recovered behavior requires Gemini. | **Yes**, extracted PDF text and prompts, only when the user invokes Chat. |
| `huggingface.co` | Optional feature / model download | Audio to PDF exposes five Whisper choices totaling about 3.61 GB of quantized graphs; duplicating them into source inputs and `dist` would add about 7.2 GB. Runtime and WASM are local. | No; only public model artifacts are downloaded. Audio remains in-browser. |
| `stun.l.google.com`, `stun1.l.google.com`, `stun2.l.google.com` | Peer-to-peer networking | P2P Share and Collaborative Whiteboard need peer discovery/NAT traversal. | P2P Share sends the selected file directly to the chosen peer; Whiteboard sends session operations to the peer. No application server upload. |
| `makersuite.google.com` | External navigation | User opens API-key management from Chat. | No automatic request/upload. |
| `razorpay.me`, `peerlist.io`, `dev.to`, `medium.com`, `github.com`, and directory/product links retained in `index.html` | External navigation | Explicit hyperlinks only. | No automatic request/upload. |
| `schema.org`, W3C/OOXML namespaces, `ihatepdf.cv` canonical/SEO URLs, React/React Router help URLs | Static identifier/metadata | Not processing requests. | No. |

Analytics: **none**. Microsoft Clarity remains removed. External scripts, dynamic imports, fonts, workers, WASM, OCR data, and automatic marketing images: **none** in generated application runtime.

## Newly vendored in this pass

- `Xenova/distilbart-cnn-6-6`, pinned revision `6b476295…`: 128,819,737-byte quantized encoder and 155,102,167-byte quantized merged decoder plus tokenizer/configuration. SHA-256: `14d9b2d8…` and `7a584dce…`.
- `Xenova/distilbert-base-uncased-distilled-squad`, pinned revision `ac4f4e5e…`: 66,983,594-byte quantized graph plus tokenizer/configuration. SHA-256: `6394ab81…`.
- Exact model cards are retained with the packs. DistilBART declares Apache-2.0; the DistilBERT ONNX card points to an upstream model whose official card explicitly declares Apache-2.0.
- Compare PDFs, Summarize PDF, and PDF-to-EPUB AI workers are redirected to `/vendor/models/` only in generated output. Recovered chunks remain byte-identical.
- All external marketing badge image sources are replaced in generated output with a local SVG placeholder. Their hyperlinks remain user navigation.

## Completely offline features

All recovered tools except Chat with PDF, Audio to PDF, P2P Share, and Collaborative Whiteboard can execute their core recovered operation without internet connectivity. This includes Compare PDFs, Summarize PDF, PDF-to-EPUB AI, PDF-to-Audio/Kokoro, Workflow/Compress, OCR English, and PPTX-to-PDF with bounded local fonts.

Audio to PDF remains browser-local for processing but needs network access the first time each chosen Whisper model is downloaded; browser caching may permit later offline reuse. Chat fundamentally needs Gemini. P2P/Whiteboard fundamentally need peer connectivity.

## Audit enforcement

`npm run build` now assembles the recovered production layout and immediately runs the runtime URL policy. The build fails for an unexpected external application URL, external HTML image/script subresource, external dynamic import, analytics host, CDN/font/OCR host, or model-route regression. `npm run audit:runtime` runs the same policy directly.

## Files changed

- `vendor-src/models/Xenova/distilbart-cnn-6-6/**`
- `vendor-src/models/Xenova/distilbert-base-uncased-distilled-squad/**`
- `scripts/assemble-recovered.mjs`
- `scripts/verify-recovered.mjs`
- `scripts/audit-local-runtime.mjs`
- `scripts/test-http-runtime.mjs`
- `package.json`
- `docs/model-runtime-audit.md`
- `docs/runtime-external-hosts.md`
- `docs/OFFLINE-BASELINE.md`
- Generated `dist/**`

No file under `recovered/` was modified.

## Verification results

- `npm run build`: **PASS**. Assembly and runtime URL enforcement both pass.
- `npm test`: **PASS**. Import/artifact checks, runtime audit, and 11 local PDF operation/OCR tests pass. PDF.js prints expected Node-only DOMMatrix/Path2D warnings; assertions pass.
- `npm run audit:runtime`: **PASS**.
- `npm run test:http`: **PASS**, 22 local routes/chunks/workers/WASM/fonts/model graphs and metadata URLs return HTTP 200 with expected content types.
- Recovered checksum comparison: **PASS**, byte-identical before and after this pass.
- `npm audit --omit=dev --audit-level=high`: completed with a nonzero advisory result: **15 vulnerabilities — 2 moderate, 10 high, 3 critical**. No dependency was upgraded. Affected compatibility dependencies remain jsPDF/DOMPurify/html2pdf, Mammoth, PDF.js, Transformers/ONNX/protobuf/sharp, transitive tar, and XLSX. Fixes include breaking changes or are unavailable and therefore remain deferred to the separate compatibility-security pass.
