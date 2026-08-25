# Final Local Status

> Superseded by `RECONSTRUCTION-COMPLETION.md`: Workflow/Blog are now recovered exactly; Transformers/Kokoro runtimes are local; Kokoro q8 weights/voices are bundled; PPTX fonts use a bounded local catalogue.

Evidence date: 2026-08-25. “Fully offline” means all recovered feature dependencies are local; it does not imply every format/edge case has an automated end-to-end test.

| Tool | Processing | External dependency | File upload external | Fully offline | Status |
|---|---|---|---|---|---|
| Merge PDF | Local | None after vendoring | No | Yes | **Manual offline PASS** |
| Split PDF | Local | None | No | Yes | Static/asset PASS |
| Compress PDF | Local | None | No | Yes | Static/asset PASS |
| Rotate / Organize / Watermark / Page Numbers | Local | None | No | Yes | Static/asset PASS |
| Remove/Unlock Password; Crop; Headers; Redact; Repair; Flatten; Invert | Local | None | No | Yes | Static/asset PASS |
| Fingerprint / Encrypt | Local | None | No | Yes | Already local; static PASS |
| PDF to JPG/DOCX/Excel/HTML/ZIP/PPTX | Local | None for recovered core | No | Yes | Static/asset PASS |
| Extract Text / OCR PDF | Local | Other OCR languages not bundled | No | Yes for English | Local English assets |
| Images/HTML/Word/Excel/CSV/PPTX/Ebook/Markdown to PDF | Local | PPTX arbitrary fonts optional external | No | Yes except arbitrary PPTX font enhancement | Static/asset PASS |
| Document Scan / GST Invoice / GST Filing / POS | Local | Camera permission for Scan | No | Yes | Static/asset PASS |
| Edit Text / Handwriting conversions | Local | Other OCR languages not bundled | No | Yes for encoded fonts/English | Local English assets |
| Compare PDFs | Local core/browser inference | Transformers/model external for AI feature | No | Partial | Core dependencies local; model unverified |
| PDF to EPUB | Local core | Optional Transformers/model external | No | Partial | Core/fonts local; AI mode external |
| Summarize PDF | Browser inference | Transformers/model external | No | No | Model not bundled |
| PDF to Audio | Browser inference | Kokoro runtime/model external | No | No | Model not bundled |
| Audio to PDF | Browser inference | Transformers/model external | No | No | Model not bundled |
| Chat with PDF | Extraction local; answers via Gemini | Gemini API | **Extracted text/prompts: Yes** | No | External API required |
| P2P Share | Browser peer-to-peer | Peer network/STUN | Directly to chosen peer | No | Peer/network dependent |
| Collaborative Whiteboard | Solo local; peer collaboration | Peer network/STUN | Drawing/session data to peer | Solo only | Peer/network dependent |
| Workflow / Blog | Unknown | Missing chunks | Unknown | Unknown | Not reconstructed |

## Totals

- Recovered tool chunks: **51**.
- Fully local for all recovered functionality after vendoring: **42** (2 were already dependency-local; 40 were converted).
- Partially local with optional/external AI or dynamic-font feature: **3** (Compare, PDF to EPUB, PPTX to PDF).
- External model-required tools: **3** (Summarize, PDF to Audio, Audio to PDF).
- External API-required tools: **1** (Chat with PDF).
- Peer-network-dependent tools: **2** (P2P Share, Collaborative Whiteboard).
- User document-derived content sent to a service: **1** (Chat with PDF). P2P intentionally sends a selected file directly to its peer.

## Verification

- `npm run build`: PASS.
- `npm test`: PASS, including import/layout verification and unexpected-runtime-URL audit.
- 1,175 local vendor files assembled; every extracted local `/vendor/*` URL returned HTTP 200.
- Root, Merge, Split, Compress, Rotate, and OCR routes returned the SPA shell; main JS/CSS, PDFLib, PDF.js worker, and English OCR data returned HTTP 200 with local paths.
- Recovered-file SHA-256 verification: PASS for all 56 files.
- Microsoft Clarity: absent from generated runtime.
- Merge: prior manual fresh network-disabled processing/download evidence retained as PASS.
- Automated browser TEST A/TEST B: blocked because the required in-app browser connection is rejected as untrusted in this workspace. No unexecuted tool is labeled end-to-end PASS.

## Remaining blockers

1. Recover Workflow/blog chunks.
2. Decide whether model licenses, sizes and redistribution terms permit local bundling; the recovered project itself does not establish that. No unsupported licensing claim is made.
3. Vendor a bounded PPTX font catalogue or accept fallback fonts; arbitrary font names cannot be exhaustively bundled.
4. Run fresh-profile offline browser fixtures when the trusted in-app browser is available.

## Dependency security note

`npm audit --omit=dev --audit-level=high` completed and reports 8 advisories (2 moderate, 4 high, 2 critical). Notable shipped-runtime findings affect the exact recovered-compatible versions of PDF.js 3.11.174, XLSX 0.18.5 (no npm fix), Mammoth 1.7.2, and the jsPDF/html2pdf DOMPurify chain. The critical `tar` findings are in a transitive install/build dependency. Suggested PDF.js/jsPDF fixes require breaking major-version upgrades, so this recovery pass did not silently change API shapes. Treat untrusted PDFs/spreadsheets as a security risk until targeted compatibility upgrades are separately tested.
