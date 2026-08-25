# Local Dependency Audit

> Superseded dependency note (2026-08-25): Workflow/Blog, Ghostscript WASM, model runtimes, Kokoro q8 weights/voices, Blog fonts, and bounded PPTX fonts are now local. See `model-runtime-audit.md` and `RECONSTRUCTION-COMPLETION.md`.

Generated from recovered chunks and the assembled runtime on 2026-08-25. “Vendored” means the dependency URL is rewritten only in generated `dist/assets`; files in `recovered/` remain byte-identical.

Dependency keys: `PDF` = PDFLib/PDF.js/worker/CMaps; `DOC` = JSZip/jsPDF/html2canvas/XLSX/docx-preview/marked/Mammoth/pdfmake/downloadjs/pako; `OCR` = Tesseract worker/core/WASM/English language data; `FONT` = recovered known Noto/Word/handwriting/EPUB fonts; `MODEL` = Transformers/Kokoro runtime and model artifacts.

| Route/tool | Core | Runtime dependencies | External URLs/hosts | User data sent | Vendoring | Must remain external | Status | Responsible recovered file |
|---|---|---|---|---|---|---|---|---|
| Text to PDF | Local | DOC | None | No | Complete | No | Local assets | `TextToPdfTool-ibcJ9d-Z.js` |
| Merge PDF | Local | PDF, downloadjs | None | No | Complete | No | Local assets; manually verified offline | `MergeTool-D37TKGAQ.js` |
| Compress PDF | Local | PDF, JSZip | None | No | Complete | No | Local assets | `CompressTool-BukrWJD2.js` |
| Page Numbers | Local | PDF | None | No | Complete | No | Local assets | `PageNumbersTool-2yKGuxHc.js` |
| Encrypt PDF | Local | bundled pdf-utils | None | No | Already local | No | Local | `EncryptPdfTool-vJTbTUBg.js` |
| Watermark | Local | PDF | None | No | Complete | No | Local assets | `WatermarkTool-BUK2Cd8j.js` |
| Split PDF | Local | PDFLib | None | No | Complete | No | Local assets | `SplitTool-D36kfnvT.js` |
| HTML to PDF | Local | DOC | None | No | Complete | No | Local assets | `HtmlToPdfTool-coPFnBN9.js` |
| Word to PDF | Local | DOC, FONT | None | No | Complete for six encoded font families | No | Local assets | `WordToPdfTool-jSC4h7bo.js` |
| Organize Pages | Local | PDF | None | No | Complete | No | Local assets | `OrganizeTool-CwIcl5Gi.js` |
| Images to PDF | Local | PDFLib | None | No | Complete | No | Local assets | `ImagesToPdfTool-Bii0o-2Z.js` |
| Redact PDF | Local | PDF | None | No | Complete | No | Local assets | `RedactTool-CZBB8oP9.js` |
| Markdown to PDF | Local | DOC | None | No | Complete | No | Local assets | `MarkdownToPdfTool-BpOYnmV-.js` |
| Chat with PDF | Extraction local; answers external | PDF, Gemini | `generativelanguage.googleapis.com`, `makersuite.google.com` | Extracted text/prompts to Gemini | PDF complete | Gemini | External API | `ChatWithPDFTool-C5FZt83f.js` |
| PDF to JPG | Local | PDF | None | No | Complete | No | Local assets | `PdfToJpgTool-ClvJKChz.js` |
| Remove Password | Local | PDF | None | No | Complete | No | Local assets | `RemovePasswordTool-lQXb7ptf.js` |
| Unlock PDF | Local | PDF | None | No | Complete | No | Local assets | `UnlockPdfTool-2LYDYYGn.js` |
| Fill PDF Form | Local | PDFLib | None | No | Complete | No | Local assets | `FillFormTool-BkNCoSxb.js` |
| Crop/Resize PDF | Local | PDF | None | No | Complete | No | Local assets | `CropResizeTool-cAJpgg_H.js` |
| Headers/Footers | Local | PDF | None | No | Complete | No | Local assets | `HeadersFootersTool-D9YAMI6v.js` |
| Extract Text | Local | PDF, optional OCR | None | No | Complete for English OCR | Other languages not recovered | Local English path | `ExtractTextTool-B-NIzAnB.js` |
| Edit PDF Text | Local | PDF, OCR, FONT | None | No | Complete for encoded Noto/English OCR | Other OCR languages | Local English path | `EditPdfTextTool-BcfIjsPe.js` |
| PDF to DOCX | Local | PDF, JSZip, optional OCR | None | No | Complete for English OCR | Other languages | Local English path | `PdfToDocxTool-Dz-8nznh.js` |
| Compare PDFs | Local diff; optional browser AI | PDF, OCR, MODEL | `cdn.jsdelivr.net` Transformers/model runtime | No document API upload | PDF/OCR complete | Model runtime/artifacts not bundled | Partial external model feature | `ComparePDFTool-ydBZwG1x.js` |
| OCR PDF | Local | PDF, OCR | None | No | Complete for English OCR | Other language data | Local English path | `OcrTool-DzObGSZ-.js` |
| Repair PDF | Local | PDF | None | No | Complete | No | Local assets | `RepairTool-BPXQ0Wpc.js` |
| PDF to Audio | Local inference | PDF, OCR, LameJS, MODEL | `cdn.jsdelivr.net` Kokoro/model host selected by runtime | No | PDF/OCR/Lame complete | Kokoro runtime/model not bundled | External model assets | `Pdftoaudiotool-BtWE2kwb.js` |
| GST Invoice | Local | DOC | None | No | Complete | No | Local assets | `Gstinvoicetool-CzKJslFt.js` |
| Summarize PDF | Local inference | PDF, OCR, MODEL | `cdn.jsdelivr.net` Transformers/model runtime | No document API upload | PDF/OCR complete | Model runtime/artifacts not bundled | External model assets | `Summarytool-CP1kPdK4.js` |
| Excel to PDF | Local | DOC | None | No | Complete | No | Local assets | `Exceltopdftool-DxjCtU2l.js` |
| Flatten PDF | Local | PDF | None | No | Complete | No | Local assets | `FlattenPdfTool-BvQnprig.js` |
| Fingerprint PDF | Local | Web Crypto | None | No | Already local | No | Local | `FingerprintTool-wE2tkcrc.js` |
| CSV to PDF | Local | PDF, DOC | None | No | Complete | No | Local assets | `CsvPdfTool-CT9RHSHD.js` |
| PDF to EPUB | Local; optional AI cleanup | PDF, JSZip, FONT, MODEL | `cdn.jsdelivr.net` Transformers/model runtime | No document API upload | Core and known fonts complete | Optional model runtime/artifacts | Core local; AI mode external | `Pdftoepubtool-CQQokyDq.js` |
| Privacy Scanner | Local | PDF, jsPDF | None | No | Complete | No | Local assets | `PrivacyRiskScannerTool-CeqwTzn8.js` |
| POS Billing | Local | DOC | None | No | Complete | No | Local assets | `PosBillTool-rbITVoJL.js` |
| Invert PDF | Local | PDF, pako | None | No | Complete | No | Local assets | `Invertpdftool-CvfqsJJV.js` |
| PDF to Handwriting | Local | PDF, OCR, FONT | None | No | Complete for known fonts/English | Other OCR languages | Local English path | `PdfToHandwritingTool-CBmDpWkt.js` |
| Handwriting to PDF | Local | PDF, OCR | None | No | Complete for English | Other OCR languages | Local English path | `HandwritingToPdfTool-CgVCoEGq.js` |
| P2P Share | Peer-to-peer | QRCode, WebRTC/STUN | `stun*.l.google.com` | File directly to chosen peer | QRCode complete | Peer network/STUN | Peer dependent | `P2pShareTool1-PqvH6p8s.js` |
| Collaborative Whiteboard | Solo local; collaboration peer-to-peer | WebRTC/STUN | `stun.l.google.com`, `stun1.l.google.com` | Drawing/session data to peer | N/A | Peer network/STUN | Solo local; collaboration external | `CollabWhiteboardTool-CGqfif1g.js` |
| Document Scan | Local | PDF, optional OCR | None | No | Complete for English | Camera permission; other languages | Local English path | `DocScanTool-CWqsZJfI.js` |
| Ebook to PDF | Local | DOC | None | No | Complete | No | Local assets | `EbookToPdfTool-tLJXDSbJ.js` |
| PPTX to PDF | Local | DOC, dynamic fonts | `fonts.googleapis.com` for presentation-selected fonts | No | Libraries complete | Arbitrary presentation fonts | Local with font fallback; external font enhancement | `PptxToPdfTool-BzdZxGdy.js` |
| PDF to PPTX | Local | PDF, JSZip | None | No | Complete | No | Local assets | `PdfToPptxTool-BR39XzV-.js` |
| PDF to ZIP | Local | JSZip | None | No | Complete | No | Local assets | `Pdftoziptool-CkThroDf.js` |
| Rotate PDF | Local | PDF | None | No | Complete | No | Local assets | `RotatePdfTool-CI_1NABB.js` |
| Audio to PDF | Local inference | jsPDF, MODEL | `cdn.jsdelivr.net` Transformers/model runtime | No document API upload | jsPDF complete | Model runtime/artifacts not bundled | External model assets | `AudioToPdfTool-DklNO93s.js` |
| PDF to Excel | Local | PDF, XLSX | None | No | Complete | No | Local assets | `PdfToExcelTool-D3aMCtq-.js` |
| PDF to HTML | Local | PDF | None | No | Complete | No | Local; malformed worker URL repaired in generated output | `PdfToHtmlTool-Cfbja3PY.js` |
| GST Filing Prep | Local | PDF, JSZip | None | No | Complete | No | Local assets | `GSTFilingPrepTool-BbCSzT3e.js` |

Missing route artifacts remain unchanged: `WorkflowTool-DJnNLXUP.js`, `Blog-GoU6g3km.js`, `BlogPost-C8zx0wrA.js`, `BlogIndex-vf6xaC3P.js`, and `blog-posts-FRy920l-.js`.
