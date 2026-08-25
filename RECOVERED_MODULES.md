# Recovered Modules

“Likely Runnable” means the production module is present and its static imports resolve when assets are assembled together. CDN/API/network requirements are noted separately; it does not claim completed end-to-end browser testing.

| Module | File | Present | Dependencies | Likely Runnable | Notes |
|---|---|---:|---|---:|---|
| Main application/router | `index-AX28eR3E.js` | Yes | React vendor, lazy chunks, CDN globals | Yes, with restored layout | Registers tools/routes; preload paths expect `/assets`. |
| React/vendor | `react-vendor-Bc7KCos-.js` | Yes | Browser | Yes | Bundles React, ReactDOM, React Router 7.11.0. |
| PDF utilities | `pdf-utils-DHnwt0li.js` | Yes | React vendor | Yes | Bundled PDF/compression utility code. |
| Styles | `index-C7wPnfL7.css` | Yes | Browser | Yes | Main production CSS. |
| Dashboard | `Dashboard-C3JB9zw0.js` | Yes, extracted only | React vendor, main, chevron | Yes | Must be copied from `extracted/assets`. |
| Chevron helper | `chevron-down-B25xREwk.js` | Yes, extracted only | Main | Yes | Dashboard dependency. |
| Tool search | `ToolSearchModal-dkdd7EmT.js` | Yes | React vendor | Yes | Search metadata/UI. |
| Text to PDF | `TextToPdfTool-ibcJ9d-Z.js` | Yes | React, jsPDF global | Yes, CDN needed | Client-side. |
| Merge PDF | `MergeTool-D37TKGAQ.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side merge/preview. |
| Compress PDF | `CompressTool-BukrWJD2.js` | Yes | React, PDFLib, PDF.js, JSZip | Yes, CDN needed | Client-side; fetch is for data URLs. |
| Page Numbers | `PageNumbersTool-2yKGuxHc.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Encrypt PDF | `EncryptPdfTool-vJTbTUBg.js` | Yes | React, bundled PDF utils | Yes | Uses local PDF utility chunk. |
| Watermark | `WatermarkTool-BUK2Cd8j.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Split PDF | `SplitTool-D36kfnvT.js` | Yes | React, PDFLib | Yes, CDN needed | Client-side. |
| HTML to PDF | `HtmlToPdfTool-coPFnBN9.js` | Yes | React, jsPDF/html tooling | Yes, CDN needed | Client-side rendering. |
| Word to PDF | `WordToPdfTool-jSC4h7bo.js` | Yes | React, Mammoth/jsPDF/font CDN | Yes, CDN needed | Client-side conversion. |
| Organize Pages | `OrganizeTool-CwIcl5Gi.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Images to PDF | `ImagesToPdfTool-Bii0o-2Z.js` | Yes | React, PDFLib | Yes, CDN needed | Client-side. |
| Redact PDF | `RedactTool-CZBB8oP9.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side permanent redaction. |
| Markdown to PDF | `MarkdownToPdfTool-BpOYnmV-.js` | Yes | React, marked/jsPDF globals | Yes, CDN needed | Client-side. |
| Chat with PDF | `ChatWithPDFTool-C5FZt83f.js` | Yes | React, PDF.js, Gemini REST API | Conditional | Requires user API key and Google service. |
| PDF to JPG | `PdfToJpgTool-ClvJKChz.js` | Yes | React, PDF.js | Yes, CDN needed | Client-side canvas rendering. |
| Remove Password | `RemovePasswordTool-lQXb7ptf.js` | Yes | React, PDFLib, PDF.js | Likely | Browser libraries; encrypted-PDF edge cases need testing. |
| Unlock PDF | `UnlockPdfTool-2LYDYYGn.js` | Yes | React, PDFLib, PDF.js | Likely | Browser libraries; permission semantics need testing. |
| Fill PDF Form | `FillFormTool-BkNCoSxb.js` | Yes | React, PDFLib | Yes, CDN needed | Client-side AcroForm handling. |
| Crop/Resize PDF | `CropResizeTool-cAJpgg_H.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Headers/Footers | `HeadersFootersTool-D9YAMI6v.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Extract Text | `ExtractTextTool-B-NIzAnB.js` | Yes | React, PDF.js, Tesseract | Yes, CDN needed | OCR fallback downloads Tesseract. |
| Edit PDF Text | `EditPdfTextTool-BcfIjsPe.js` | Yes | React, PDFLib, PDF.js, Tesseract, fonts | Likely | Complex client-side editor; needs semantic testing. |
| PDF to DOCX | `PdfToDocxTool-Dz-8nznh.js` | Yes | React, PDF.js, Tesseract, JSZip | Likely | Client-side; fidelity needs testing. |
| Compare PDFs | `ComparePDFTool-ydBZwG1x.js` | Yes | React, PDF.js, Tesseract, Transformers | Likely, CDN/model needed | AI inference occurs in browser worker. |
| OCR PDF | `OcrTool-DzObGSZ-.js` | Yes | React, PDFLib, PDF.js, Tesseract | Yes, CDN needed | Browser OCR. |
| Repair PDF | `RepairTool-BPXQ0Wpc.js` | Yes | React, PDFLib | Likely | Client-side; corruption cases need testing. |
| PDF to Audio | `Pdftoaudiotool-BtWE2kwb.js` | Yes | React, PDF.js, Tesseract, Kokoro/model | Likely, CDN/model needed | Browser-side TTS/model download. |
| GST Invoice | `Gstinvoicetool-CzKJslFt.js` | Yes | React, jsPDF | Yes, CDN needed | Client-side generator. |
| Summarize PDF | `Summarytool-CP1kPdK4.js` | Yes | React, PDF.js, Tesseract, Transformers | Likely, CDN/model needed | Browser-side model inference. |
| Excel to PDF | `Exceltopdftool-DxjCtU2l.js` | Yes | React, XLSX, jsPDF, JSZip | Yes, CDN needed | Client-side. |
| Flatten PDF | `FlattenPdfTool-BvQnprig.js` | Yes | React, PDFLib, PDF.js | Likely | Client-side; annotation/form variants need testing. |
| Fingerprint PDF | `FingerprintTool-wE2tkcrc.js` | Yes | React, Web Crypto/browser APIs | Yes | Client-side hashing/metadata. |
| CSV to PDF | `CsvPdfTool-CT9RHSHD.js` | Yes | React, PDFLib/PDF.js/JSZip | Yes, CDN needed | Client-side. |
| PDF to EPUB | `Pdftoepubtool-CQQokyDq.js` | Yes | React, PDF.js, JSZip, Transformers | Likely, CDN/model needed | Browser-side conversion/model. |
| Privacy Scanner | `PrivacyRiskScannerTool-CeqwTzn8.js` | Yes | React, PDF.js, jsPDF | Likely | Client-side pattern analysis. |
| POS Billing | `PosBillTool-rbITVoJL.js` | Yes | React, browser print/PDF tooling | Yes | Client-side billing UI. |
| Invert PDF | `Invertpdftool-CvfqsJJV.js` | Yes | React, PDFLib, PDF.js, pako | Yes, CDN needed | Client-side. |
| PDF to Handwriting | `PdfToHandwritingTool-CBmDpWkt.js` | Yes | React, PDFLib, PDF.js, Tesseract | Likely | Complex client-side raster/text workflow. |
| Handwriting to PDF | `HandwritingToPdfTool-CgVCoEGq.js` | Yes | React, PDFLib, PDF.js, Tesseract | Likely | Browser OCR and PDF generation. |
| P2P Share | `P2pShareTool1-PqvH6p8s.js` | Yes | React, WebRTC, Google STUN, QRCode | Conditional | No app server found; peer/network and manual signaling required. |
| Collaborative Whiteboard | `CollabWhiteboardTool-CGqfif1g.js` | Yes | React, WebRTC, Google STUN | Conditional | No app signaling server found; peer/network required. |
| Document Scan | `DocScanTool-CWqsZJfI.js` | Yes | React, camera APIs, PDFLib, Tesseract | Conditional | Requires camera permission/device; client-side. |
| Ebook to PDF | `EbookToPdfTool-tLJXDSbJ.js` | Yes | React, JSZip, jsPDF | Likely, CDN needed | Client-side parser/converter. |
| PPTX to PDF | `PptxToPdfTool-BzdZxGdy.js` | Yes | React, JSZip, jsPDF | Likely, CDN needed | Client-side; fidelity needs testing. |
| PDF to PPTX | `PdfToPptxTool-BR39XzV-.js` | Yes | React, PDF.js, JSZip | Likely, CDN needed | Client-side; fidelity needs testing. |
| PDF to ZIP | `Pdftoziptool-CkThroDf.js` | Yes | React, JSZip | Yes, CDN needed | Client-side archive generation. |
| Rotate PDF | `RotatePdfTool-CI_1NABB.js` | Yes | React, PDFLib, PDF.js | Yes, CDN needed | Client-side. |
| Audio to PDF | `AudioToPdfTool-DklNO93s.js` | Yes | React, jsPDF, Transformers/model | Likely, CDN/model needed | Browser speech recognition/model. |
| PDF to Excel | `PdfToExcelTool-D3aMCtq-.js` | Yes | React, PDF.js, XLSX | Likely, CDN needed | Client-side extraction/conversion. |
| PDF to HTML | `PdfToHtmlTool-Cfbja3PY.js` | Yes | React, PDF.js | Likely, CDN needed | Contains a suspicious reconstructed worker URL assignment (`"https:"`); runtime test required. |
| GST Filing Prep | `GSTFilingPrepTool-BbCSzT3e.js` | Yes | React, PDFLib, PDF.js, JSZip | Likely, CDN needed | Client-side preparation/packaging. |
| Workflow | `WorkflowTool-DJnNLXUP.js` | Yes | React vendor, main, PDF utils, JSZip, Ghostscript worker/WASM | Yes | Exact deployed chunk and its worker/loader/WASM chain recovered; compression path is local. |
| Blog | `Blog-GoU6g3km.js` | Yes | React vendor, main, local blog fonts | Yes | Exact deployed chunk recovered. |
| Blog post | `BlogPost-C8zx0wrA.js` | Yes | React vendor, blog data | Yes | Exact deployed chunk recovered. |
| Blog index | `BlogIndex-vf6xaC3P.js` | Yes | React vendor, blog data | Yes | Exact deployed chunk recovered. |
| Blog data | `blog-posts-FRy920l-.js` | Yes | React vendor | Yes | Exact deployed data chunk recovered. |
