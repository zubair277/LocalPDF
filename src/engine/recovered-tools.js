import React from "/assets/react-vendor-Bc7KCos-.js";

const modules = {
  merge: () => import("/assets/MergeTool-D37TKGAQ.js"),
  split: () => import("/assets/SplitTool-D36kfnvT.js"),
  compress: () => import("/assets/CompressTool-BukrWJD2.js"),
  rotate: () => import("/assets/RotatePdfTool-CI_1NABB.js"),
  organize: () => import("/assets/OrganizeTool-CwIcl5Gi.js"),
  watermark: () => import("/assets/WatermarkTool-BUK2Cd8j.js"),
  pagenumbers: () => import("/assets/PageNumbersTool-2yKGuxHc.js"),
  cropresize: () => import("/assets/CropResizeTool-cAJpgg_H.js"),
  redact: () => import("/assets/RedactTool-CZBB8oP9.js"),
  encryptpdf: () => import("/assets/EncryptPdfTool-vJTbTUBg.js"),
  unlockpdf: () => import("/assets/UnlockPdfTool-2LYDYYGn.js"),
  fillform: () => import("/assets/FillFormTool-BkNCoSxb.js"),
  ocr: () => import("/assets/OcrTool-DzObGSZ-.js"),
  extract: () => import("/assets/ExtractTextTool-B-NIzAnB.js"),
  pdftojpg: () => import("/assets/PdfToJpgTool-ClvJKChz.js"),
  images: () => import("/assets/ImagesToPdfTool-Bii0o-2Z.js"),
  pdftodocx: () => import("/assets/PdfToDocxTool-Dz-8nznh.js"),
  pdftoexcel: () => import("/assets/PdfToExcelTool-D3aMCtq-.js"),
  pdftohtml: () => import("/assets/PdfToHtmlTool-Cfbja3PY.js"),
  pdftozip: () => import("/assets/Pdftoziptool-CkThroDf.js"),
  repair: () => import("/assets/RepairTool-BPXQ0Wpc.js"),
  pdftopptx: () => import("/assets/PdfToPptxTool-BR39XzV-.js"),
};

export function RecoveredTool({ id, onNotice }) {
  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    let active = true;
    const loader = modules[id];
    if (!loader) return undefined;
    loader().then((module) => active && setComponent(() => module.default)).catch((reason) => {
      if (active) setError(reason);
    });
    return () => { active = false; };
  }, [id]);
  if (error) return React.createElement("div", { className: "state error" }, "This tool could not be loaded.");
  if (!Component) return React.createElement("div", { className: "state" }, "Loading workspace…");
  return React.createElement(Component, {
    showNotification: onNotice,
    showDownloadDialog: () => {},
  });
}
