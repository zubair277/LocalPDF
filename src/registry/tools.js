export const categories = ["PDF Management", "Edit & Protect", "Extract & OCR", "Convert"];

export const tools = [
  { id: "merge", title: "Merge PDF", description: "Combine files into one document", path: "/tool/merge-pdf", category: "PDF Management", glyph: "↔" },
  { id: "split", title: "Split PDF", description: "Extract pages or ranges", path: "/tool/split-pdf", category: "PDF Management", glyph: "⌁" },
  { id: "compress", title: "Compress PDF", description: "Reduce file size locally", path: "/tool/compress-pdf", category: "PDF Management", glyph: "↓" },
  { id: "rotate", title: "Rotate PDF", description: "Turn pages to the right angle", path: "/tool/rotate-pdf", category: "PDF Management", glyph: "⟳" },
  { id: "organize", title: "Organize PDF", description: "Reorder and remove pages", path: "/tool/organize-pages", category: "PDF Management", glyph: "☷" },
  { id: "repair", title: "Repair PDF", description: "Recover a damaged file", path: "/tool/repair-pdf", category: "PDF Management", glyph: "⌁" },
  { id: "watermark", title: "Watermark", description: "Stamp pages with text", path: "/tool/add-watermark", category: "Edit & Protect", glyph: "✦" },
  { id: "pagenumbers", title: "Page Numbers", description: "Number every page", path: "/tool/page-numbers", category: "Edit & Protect", glyph: "#" },
  { id: "cropresize", title: "Crop / Resize", description: "Adjust page boundaries", path: "/tool/crop-resize-pdf", category: "Edit & Protect", glyph: "□" },
  { id: "redact", title: "Redact", description: "Permanently hide sensitive content", path: "/tool/redact-pdf", category: "Edit & Protect", glyph: "▰" },
  { id: "encryptpdf", title: "Encrypt PDF", description: "Protect a document with a password", path: "/tool/encrypt-pdf", category: "Edit & Protect", glyph: "⌑" },
  { id: "unlockpdf", title: "Unlock PDF", description: "Remove document restrictions", path: "/tool/unlock-pdf", category: "Edit & Protect", glyph: "⌑" },
  { id: "fillform", title: "Fill PDF", description: "Complete interactive forms", path: "/tool/fill-pdf-form", category: "Edit & Protect", glyph: "✎" },
  { id: "ocr", title: "OCR PDF", description: "Make scanned pages searchable", path: "/tool/ocr-pdf", category: "Extract & OCR", glyph: "◎" },
  { id: "extract", title: "Extract Text", description: "Pull text from a PDF", path: "/tool/extract-text", category: "Extract & OCR", glyph: "≡" },
  { id: "pdftojpg", title: "PDF to JPG", description: "Render pages as images", path: "/tool/pdf-to-jpg", category: "Convert", glyph: "▧" },
  { id: "images", title: "Images to PDF", description: "Bundle images into a PDF", path: "/tool/images-to-pdf", category: "Convert", glyph: "▨" },
  { id: "pdftodocx", title: "PDF to Word", description: "Create an editable document", path: "/tool/pdf-to-word", category: "Convert", glyph: "W" },
  { id: "pdftoexcel", title: "PDF to Excel", description: "Extract tables to a workbook", path: "/tool/pdf-to-excel", category: "Convert", glyph: "▦" },
  { id: "pdftohtml", title: "PDF to HTML", description: "Export a web document", path: "/tool/pdf-to-html", category: "Convert", glyph: "<>" },
  { id: "pdftozip", title: "PDF to ZIP", description: "Package page exports", path: "/tool/pdf-to-zip", category: "Convert", glyph: "⌘" },
  { id: "pdftopptx", title: "PDF to PPTX", description: "Create editable slides", path: "/tool/pdf-to-pptx", category: "Convert", glyph: "P" },
];

export const toolById = Object.fromEntries(tools.map((tool) => [tool.id, tool]));
export const toolByPath = Object.fromEntries(tools.map((tool) => [tool.path, tool]));
export const toolsInCategory = (category) => tools.filter((tool) => tool.category === category);
