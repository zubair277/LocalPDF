# Recovery Report

> Historical pre-completion report. Current verified status is in `docs/RECONSTRUCTION-COMPLETION.md`.

Date: 2026-08-25

## Recovery Status

| Area | Status | Evidence |
|---|---|---|
| Application boot | **FAIL — browser verification unavailable** | Production shell and main module return HTTP 200, but React mount could not be observed because the in-app browser connection was rejected by the workspace. |
| Routing | **PASS at server level** | `/`, `/merge-pdf`, `/split-pdf`, `/compress-pdf`, and `/dashboard` all return the SPA HTML shell with HTTP 200. Client-side navigation remains unverified. |
| CSS | **PASS for delivery** | `/assets/index-C7wPnfL7.css` returns HTTP 200 with `text/css`. Visual application is unverified. |
| Dashboard | **FAIL — not interactively verified** | Dashboard and chevron chunks are present, resolve, and return HTTP 200. Rendering was not observed. |
| Tool search | **FAIL — not interactively verified** | Search chunk is present and resolves; opening/interacting was not observable. |
| Merge PDF | **FAIL — not functionally verified** | Route fallback and chunk/import graph pass; upload, preview, merge, and download were not run. |
| Split PDF | **FAIL — not functionally verified** | Route fallback and chunk/import graph pass; upload, preview, split, and download were not run. |
| Compress PDF | **FAIL — not functionally verified** | Route fallback and chunk/import graph pass; upload, preview, compression, and download were not run. |

The FAIL values above mean the requested runtime acceptance test was not completed; they do not indicate a demonstrated application defect. No functionality is claimed without an observed browser test.

## Changes Made

- Added `scripts/assemble-recovered.mjs`, which builds `dist/` from the captured production HTML and recovered chunks.
- Added `scripts/serve-recovered.mjs`, a minimal static server with SPA history fallback and correct JS/CSS/WASM/font MIME types.
- Added `scripts/verify-recovered.mjs` for recovered import/layout checks.
- Added `build`, `dev`, `start`, and `test` package scripts.
- Generated `dist/index.html` and `dist/assets/*`.
- Did not edit, rename, replace, or reformat any recovered production file. Pre/post SHA-256 checks passed for all 56 files in `recovered/`.

`npm run build` passes. `npm test` passes with 58 assembled assets and no unexpected missing recovered relative import.

## Dependency Status

Local dependencies:

- React, ReactDOM, React Router and JSX runtime in `react-vendor-Bc7KCos-.js`.
- Main application/router, 51 recovered tool chunks, search modal, PDF utility code, and CSS.
- Dashboard and chevron helper restored from `extracted/assets`.

CDN dependencies:

- PDFLib, PDF.js, pako, JSZip, jsPDF, XLSX, html2canvas/html2pdf, downloadjs, marked, Mammoth, pdfmake, docx-preview, Tesseract, QRCode, LameJS, remote fonts, Transformers, and Kokoro.

Missing dependencies/assets:

- No required recovered relative dependency is missing for normal/home/tool routes other than Workflow.
- No local CDN dependency copies, workers, WASM, model weights, fonts, PDF.js CMaps, Tesseract language data, manifest, icons, or OG image are present.
- Network access is therefore required for first use of many tools.

Workers and models:

- PDF.js and Tesseract workers/WASM are external.
- Transformers and Kokoro runtimes/models are external and browser-downloaded.
- Details and URLs are in `DEPENDENCY_ANALYSIS.md`.

## Missing Code

| File | Criticality | Effect |
|---|---|---|
| `WorkflowTool-DJnNLXUP.js` | Optional for startup; critical for `/workflow` | Workflow route will fail its lazy import. |
| `Blog-GoU6g3km.js` | Optional | One blog UI route/component unavailable. |
| `BlogPost-C8zx0wrA.js` | Optional | Blog post route unavailable. |
| `BlogIndex-vf6xaC3P.js` | Optional | Technical blog index unavailable. |
| `blog-posts-FRy920l-.js` | Optional | Data dependency for missing blog chunks. |

The main bundle does not eagerly import these files, so no JavaScript patch or fabricated fallback was needed to boot the normal shell. The static server intentionally returns 404 for missing `/assets/*` instead of returning HTML with a JavaScript MIME mismatch.

## Backend Status

The recovered application is primarily client-side. PDF operations use browser FileReader/ArrayBuffer/Canvas, IndexedDB/localStorage, Web Workers, PDFLib, PDF.js, and related libraries.

Actual services/endpoints found:

- Google Gemini streaming API for Chat with PDF; user key supplied in the frontend.
- Microsoft Clarity analytics.
- Public Google STUN servers for WebRTC P2P/whiteboard.
- Third-party CDNs, fonts, workers, model registries/data, a payment link, and static SEO/external links.

No recovered first-party backend API, upload endpoint, authentication service, database, server route, WebSocket server, Supabase, Firebase, or cloud function exists in the project.

## Failure Classification

- Browser acceptance suite unavailable: **E — browser/runtime limitation**.
- Workflow/blog routes: **A — missing recovered code**.
- Missing local workers/models/fonts and tools that need their CDNs: **B/C — external dependency or worker/model**.
- The former direct-route 404 behavior is fixed: **D — incorrect asset/server path**.
- Gemini Chat requires an external API but not an ihatepdf backend: external service, not **F**.
- No demonstrated failure requires a first-party backend.

## Next Steps

The smallest remaining tasks are:

1. Run the requested browser acceptance suite in a workspace where the in-app browser is trusted: verify React mount, search/dashboard navigation, then upload a tiny two-page fixture through Merge, Split, and Compress and confirm previews/downloads.
2. Recover `WorkflowTool-DJnNLXUP.js`; recover the four blog artifacts only if those optional routes matter.
3. Vendor or reliably cache the exact CDN workers/libraries/fonts/models needed for offline/reproducible operation, starting with PDF.js, PDFLib, JSZip, and Tesseract.

Do not begin source-level rewriting until step 1 records the actual browser console/network failures.
