# Final Release Status

Audit date: 2026-08-25

## Release decision

**PASS for the frozen reconstructed/offline baseline, with documented security, provenance, and network limitations.** No release-blocking regression was found. No dependency, recovered implementation, build script, test, or feature behavior was changed during this audit.

## Build status

- `npm run build`: **PASS**.
- Assembly completed and its mandatory runtime URL policy passed.
- Generated output: 1,430 files, including 63 application assets and 1,363 vendor files; total `dist/` size is approximately 723 MB.
- Every main-bundle relative/lazy import resolves.
- Workflow, Blog routes/data, Ghostscript worker/loader/WASM, OCR assets, fonts, and pinned local models are present.

## Test status

- `npm test`: **PASS**.
- 12 pinned recovered/model/worker artifact hashes match.
- 11 local PDF operation tests pass: Merge, Split, Compress worker/WASM integrity, Rotate, Organize, Watermark, Page Numbers, recovered Encrypt, Fingerprint, PDF conversion, and bundled English OCR.
- `npm run test:http`: **PASS**. All 22 checked routes, chunks, workers, WASM, fonts, OCR files, model graphs, and model metadata URLs return HTTP 200 with expected content types.
- PDF.js prints Node-only DOMMatrix/Path2D polyfill warnings during extraction tests. Assertions pass; this is not a release failure.

## Recovered artifact integrity

- A SHA-256 manifest of every file in `recovered/` was captured before the build and again after all local checks.
- The manifests are byte-identical (`cmp`: **PASS**).
- No file under `recovered/` was modified.

## Offline status

- `npm run audit:runtime`: **PASS**.
- No unexpected external application URL remains.
- No analytics remains; Microsoft Clarity is absent.
- No external dynamic import, CDN library, font, PDF worker, WASM, OCR runtime, OCR language-data, or automatic external HTML image request remains.
- PPTX-to-PDF retains its bounded local font catalogue and deterministic fallback.
- Compare PDFs, Summarize PDF, PDF-to-EPUB AI, and PDF-to-Audio/Kokoro resolve their runtimes, WASM, tokenizers, metadata, and model graphs locally.
- All recovered tools except Chat with PDF, Audio to PDF, P2P Share, and Collaborative Whiteboard can perform their core recovered operation without internet connectivity.

## Remaining intentional network dependencies

| Host / destination | Purpose | Classification |
|---|---|---|
| `generativelanguage.googleapis.com` | Gemini response generation for Chat with PDF | Optional AI API; required only for that feature |
| `huggingface.co` | Five selectable Whisper model families for Audio to PDF | Optional model download; inference remains local |
| `stun.l.google.com`, `stun1.l.google.com`, `stun2.l.google.com` | WebRTC peer discovery/NAT traversal | Intentional peer-to-peer networking |
| `makersuite.google.com` | Gemini API-key management | User-initiated external navigation |
| Razorpay, Peerlist, GitHub, Dev.to, Medium, and directory/product links in `index.html` | Donation, project, article, and listing links | User-initiated external navigation |

Schema, W3C/OOXML namespace, canonical/SEO, and React help URLs are identifiers or metadata, not automatic processing requests.

## Features that send user data externally

- **Chat with PDF:** sends extracted PDF text and the user's prompts directly to Google Gemini after the user invokes the feature.
- **P2P Share:** intentionally sends the selected file directly to the chosen WebRTC peer, not to an application server.
- **Collaborative Whiteboard:** sends drawing/session operations directly to the chosen WebRTC peer.

No other recovered tool contains an evidenced external request carrying user PDF, document, image, audio, or extracted-content data. Audio-to-PDF downloads public model artifacts; it does not upload the user's audio for inference.

## Local model-path verification

The following pinned local graph families are present, non-empty, checksum-verified, and covered by the HTTP 200 test:

- `Xenova/distilbart-cnn-6-6`: quantized encoder and merged decoder.
- `Xenova/distilbert-base-uncased-distilled-squad`: quantized QA graph.
- `onnx-community/Kokoro-82M-v1.0-ONNX`: quantized Kokoro graph and local voices.
- Local Transformers/Kokoro ONNX WASM runtimes.

Whisper is intentionally not bundled: the five recovered choices require approximately 3.61 GB of graphs and about 7.2 GB when duplicated across source inputs and generated output.

## Known security advisories

`npm audit --omit=dev --audit-level=high` completed and reports **15 vulnerabilities: 2 moderate, 10 high, and 3 critical**.

Affected packages/chains:

- Critical: `jspdf`, `protobufjs`, `tar`.
- High: `@huggingface/transformers`, `@mapbox/node-pre-gyp`, `@xenova/transformers`, `html2pdf.js`, `kokoro-js`, `onnx-proto`, `onnxruntime-web`, `pdfjs-dist`, `sharp`, `xlsx`.
- Moderate: `dompurify`, `mammoth`.

Several advertised fixes require breaking compatibility changes; other chains have no current direct fix. Per the freeze instructions, no upgrade or audit fix was applied. These advisories remain a documented release risk requiring a separate compatibility-tested security pass.

## Licensing and provenance limitations

- The pinned Transformers and Kokoro runtime packages declare Apache-2.0; their license files are included locally.
- DistilBART declares Apache-2.0. The DistilBERT ONNX card identifies an upstream model whose official card declares Apache-2.0. Kokoro model metadata declares Apache-2.0.
- The exact recovered Ghostscript worker/loader/WASM does not contain an embedded license notice. Technical recovery is verified, but redistribution clearance is not established by this audit.
- Recovered production chunks are preserved artifacts rather than original source with a complete provenance/license manifest. Public redistribution requires an independent rights review.
- This audit does not make broader legal claims about model training data, generated output, or third-party marketing/navigation content.

## Exact remaining limitations

1. Chat with PDF cannot answer without Gemini connectivity and a user-supplied API key.
2. Audio to PDF needs network access when a selected Whisper model is not already browser-cached.
3. P2P Share and collaborative Whiteboard require another reachable peer and network traversal.
4. The complete Whisper model set is not bundled because of its approximately 7.2 GB source-plus-build footprint.
5. The npm advisory gate is not clean: 15 advisories remain intentionally deferred.
6. Ghostscript WASM and the recovered production artifacts require a redistribution/provenance review.
7. Verification is repository/script based. It does not claim new manual browser testing or comprehensive UI end-to-end coverage.
8. Compress/Workflow browser-worker execution is covered by exact artifact checksums, worker-chain validation, WASM compilation, local delivery tests, and prior recovered runtime evidence—not a new full browser E2E run in this audit.

## Exact commands used

```sh
shasum -a 256 recovered/* > /tmp/ihatepdf-release-recovered-before.sha256
npm run build
npm test
npm run audit:runtime
shasum -a 256 recovered/* > /tmp/ihatepdf-release-recovered-after.sha256
cmp /tmp/ihatepdf-release-recovered-before.sha256 /tmp/ihatepdf-release-recovered-after.sha256
find dist -type f | sort > /tmp/ihatepdf-release-dist-files.txt
wc -l /tmp/ihatepdf-release-dist-files.txt
find dist/assets -maxdepth 1 -type f | wc -l
find dist/vendor -type f | wc -l
du -sh dist
npm run test:http
npm audit --omit=dev --audit-level=high --json
rg -n "fetch\\(|XMLHttpRequest|WebSocket|EventSource|sendBeacon|FormData|navigator\\.sendBeacon" dist/assets --glob '!Blog-GoU6g3km.js' --glob '!blog-posts-FRy920l-.js'
rg -n "generativelanguage\\.googleapis\\.com|huggingface\\.co|stun:|clarity\\.ms|fonts\\.googleapis\\.com|cdnjs\\.cloudflare\\.com|unpkg\\.com|tessdata\\.projectnaptha\\.com" dist/assets dist/index.html
test -s <each required local model/OCR/Ghostscript artifact>
```

The final `test -s` check covered the three local Transformer graph files, Kokoro q8 graph, bundled English OCR data, and Ghostscript WASM.

## Files changed by this audit

- Added: `FINAL_RELEASE_STATUS.md`.
- Regenerated by the required build command: `dist/**` (1,430 generated files). No generated file was manually edited.
- No source, configuration, dependency, lockfile, test, documentation baseline, or recovered artifact was otherwise changed.

