import { r as React } from "/assets/react-vendor-Bc7KCos-.js";

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

export function RecoveredTool({ id, onNotice, onDownload, onBack }) {
  const [Component, setComponent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [attempt, setAttempt] = React.useState(0);
  React.useEffect(() => {
    let active = true;
    const loader = modules[id];
    setComponent(null);
    setError(null);
    if (!loader) {
      setError(new Error(`No recovered module is mapped for ${id}`));
      return () => { active = false; };
    }
    loader().then((module) => active && setComponent(() => module.default)).catch((reason) => {
      if (active) setError(reason);
    });
    return () => { active = false; };
  }, [id, attempt]);
  if (error) return React.createElement("div", { className: "state state-error", role: "alert" },
    React.createElement("strong", null, "This tool could not be loaded."),
    React.createElement("p", null, "The local module may be unavailable. You can retry without leaving the workspace."),
    React.createElement("div", { className: "state-actions" },
      React.createElement("button", { className: "button-primary", type: "button", onClick: () => setAttempt((value) => value + 1) }, "Retry"),
      React.createElement("button", { className: "button-secondary", type: "button", onClick: onBack }, "Back to tools"),
    ),
  );
  if (!Component) return React.createElement("div", { className: "state state-loading", role: "status" },
    React.createElement("span", { className: "loading-spinner", "aria-hidden": "true" }),
    React.createElement("span", null, "Loading workspace…"),
  );
  return React.createElement(Component, {
    showNotification: onNotice,
    showDownloadDialog: onDownload,
  });
}
