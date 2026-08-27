# Document Desk — 22-Tool Functional Acceptance

Date: 2026-08-26  
Branch: `new-product-ui`

## Result

- **PASS:** 21
- **FAIL:** 1
- **BLOCKED:** 0

All 22 canonical routes load their recovered interface, expose the expected file input and controls, survive a direct URL refresh, and return to `/` through the Document Desk shell. Every primary operation produced an explicit result and a downloadable file. Compress PDF is marked FAIL only because its recovered Ghostscript worker writes informational processing diagnostics through `console.error`; its compression operation and download both succeed.

## Acceptance matrix

| Tool | Route | Loads | Primary operation | Output | Download | Console | Status |
|---|---|---:|---|---|---|---|---|
| Merge PDF | `/tool/merge-pdf` | PASS | Merged a three-page PDF with a second one-page PDF | Combined PDF | PASS | Clean | PASS |
| Split PDF | `/tool/split-pdf` | PASS | Split a three-page PDF into individual files | Three page PDFs | PASS | Clean | PASS |
| Compress PDF | `/tool/compress-pdf` | PASS | Ran default local compression | Compressed PDF | PASS | Recovered Ghostscript diagnostics use error severity | **FAIL** |
| Rotate PDF | `/tool/rotate-pdf` | PASS | Rotated all pages right by 90° | Rotated PDF | PASS | Clean | PASS |
| Organize PDF | `/tool/organize-pages` | PASS | Saved the loaded three-page organization | Organized PDF | PASS | Clean | PASS |
| Watermark | `/tool/add-watermark` | PASS | Applied the default `CONFIDENTIAL` watermark | Watermarked PDF | PASS | Clean | PASS |
| Page Numbers | `/tool/page-numbers` | PASS | Added default page numbering | Numbered PDF | PASS | Clean | PASS |
| Crop / Resize | `/tool/crop-resize-pdf` | PASS | Applied the configured crop to all pages | Cropped PDF | PASS | Clean | PASS |
| Redact | `/tool/redact-pdf` | PASS | Drew and applied a redaction rectangle | Redacted PDF | PASS | Clean | PASS |
| Encrypt PDF | `/tool/encrypt-pdf` | PASS | Applied a password to a PDF | Encrypted PDF | PASS | Clean | PASS |
| Unlock PDF | `/tool/unlock-pdf` | PASS | Ran the restrictions-removal path on an unrestricted PDF | Unlocked/re-saved PDF | PASS via product dialog | Clean | PASS |
| Fill PDF | `/tool/fill-pdf-form` | PASS | Loaded and flattened a one-field AcroForm | Filled PDF | PASS via product dialog | Clean | PASS |
| OCR PDF | `/tool/ocr-pdf` | PASS | OCR'd a one-page image PDF with bundled English data | Searchable PDF; confidence/result shown | PASS | Clean | PASS |
| Extract Text | `/tool/extract-text` | PASS | Extracted text from a three-page digital PDF | 252 characters | PASS (`.txt`) | Clean | PASS |
| PDF to JPG | `/tool/pdf-to-jpg` | PASS | Rendered PDF page output as JPEG | JPEG page image | PASS | Clean | PASS |
| Images to PDF | `/tool/images-to-pdf` | PASS | Converted a PNG fixture | Image-based PDF | PASS | Clean | PASS |
| PDF to Word | `/tool/pdf-to-word` | PASS | Ran All-in-One conversion | DOCX | PASS via product dialog | Clean | PASS |
| PDF to Excel | `/tool/pdf-to-excel` | PASS | Detected and exported a bordered 3×3 table | XLSX with one table | PASS via product dialog | Clean | PASS |
| PDF to HTML | `/tool/pdf-to-html` | PASS | Exported one page in positioned mode | HTML | PASS via product dialog | Clean | PASS |
| PDF to ZIP | `/tool/pdf-to-zip` | PASS | Archived two PDFs | ZIP with two files | PASS | Clean | PASS |
| Repair PDF | `/tool/repair-pdf` | PASS | Ran the recovered structural repair strategy | Three-page repaired PDF | PASS | Clean | PASS |
| PDF to PPTX | `/tool/pdf-to-pptx` | PASS | Ran Smart Hybrid conversion | One-slide PPTX | PASS | Clean | PASS |

## Fixtures and navigation checks

Testing used small, locally generated PDF fixtures: multi-page text, a second one-page document, a bordered table, a fillable AcroForm, a raster scan, and a PNG image. An encrypted fixture was also checked against Unlock PDF; the recovered tool correctly identifies a user-password-encrypted PDF as outside its restrictions-removal scope.

- Direct refresh: 22/22 routes reopened successfully.
- Back to overview: 22/22 routes returned to `/`.
- Startup/module/asset errors: none across the route matrix.
- Source-owned download dialog: verified with Fill PDF, Unlock PDF, PDF to Word, PDF to Excel, and PDF to HTML.

## Integration issues and fixes

1. The source-owned adapter imported recovered components without preloading the browser globals that the original shell supplied. A source-owned dependency loader now loads each tool's required local runtime from `/vendor` before mounting it and configures the local PDF.js worker.
2. Tesseract's rewritten root-relative defaults are invalid when evaluated from its blob-backed worker. The source-owned adapter now supplies absolute same-origin `workerPath`, `corePath`, and `langPath` options. OCR and PDF-to-Word subsequently completed with no console errors.

No recovered implementation was changed. The remaining Compress PDF console issue is inside the preserved recovered Ghostscript logging behavior and was not modified.

## Automated verification

- `npm run build`: PASS
- `npm test`: PASS (11 operation tests; 12 pinned artifact hashes)
- `npm run audit:runtime`: PASS
- `npm run test:http`: PASS (22 HTTP routes/assets)
