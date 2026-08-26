const dependencySources = {
  pdflib: "/vendor/pdf-lib/pdf-lib.min.js",
  pdfjs: "/vendor/pdfjs/pdf.min.js",
  downloadjs: "/vendor/downloadjs/download.min.js",
  jszip: "/vendor/jszip/jszip.min.js",
  tesseract: "/vendor/tesseract/tesseract.min.js",
  xlsx: "/vendor/xlsx/xlsx.full.min.js",
};

const toolDependencies = {
  merge: ["pdflib", "downloadjs", "pdfjs"],
  split: ["pdflib", "downloadjs"],
  compress: ["pdflib", "pdfjs", "downloadjs", "jszip"],
  rotate: ["pdflib", "pdfjs"],
  organize: ["pdflib", "downloadjs", "pdfjs"],
  watermark: ["pdflib", "downloadjs", "pdfjs"],
  pagenumbers: ["pdflib", "downloadjs", "pdfjs"],
  cropresize: ["pdflib", "downloadjs", "pdfjs"],
  redact: ["pdflib", "downloadjs", "pdfjs"],
  encryptpdf: ["downloadjs"],
  unlockpdf: ["pdflib", "pdfjs"],
  fillform: ["pdflib"],
  ocr: ["pdfjs", "pdflib", "tesseract"],
  extract: ["pdfjs", "tesseract", "downloadjs"],
  pdftojpg: ["pdfjs", "downloadjs", "jszip"],
  images: ["pdflib", "downloadjs"],
  pdftodocx: ["pdfjs", "jszip", "tesseract"],
  pdftoexcel: ["pdfjs", "xlsx"],
  pdftohtml: ["pdfjs"],
  pdftozip: ["jszip"],
  repair: ["pdflib"],
  pdftopptx: ["pdfjs", "jszip"],
};

const loading = new Map();

function configureTesseract() {
  if (!window.Tesseract || window.Tesseract.__documentDeskConfigured) return;
  const createWorker = window.Tesseract.createWorker.bind(window.Tesseract);
  const localOptions = {
    workerPath: `${location.origin}/vendor/tesseract/worker.min.js`,
    corePath: `${location.origin}/vendor/tesseract/core`,
    langPath: `${location.origin}/vendor/tesseract/lang`,
  };

  window.Tesseract.createWorker = (...args) => {
    if (args[0] && typeof args[0] === "object") {
      args[0] = { ...localOptions, ...args[0] };
    } else {
      args[2] = { ...localOptions, ...(args[2] || {}) };
    }
    return createWorker(...args);
  };
  window.Tesseract.__documentDeskConfigured = true;
}

function loadScript(source) {
  if (loading.has(source)) return loading.get(source);

  const existing = document.querySelector(`script[src="${source}"]`);
  if (existing?.dataset.loaded === "true") return Promise.resolve();

  const promise = new Promise((resolve, reject) => {
    const script = existing || document.createElement("script");
    const onLoad = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    const onError = () => reject(new Error(`Unable to load local runtime dependency: ${source}`));

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });
    if (!existing) {
      script.src = source;
      script.async = true;
      document.head.appendChild(script);
    }
  });

  loading.set(source, promise);
  promise.catch(() => loading.delete(source));
  return promise;
}

export async function loadToolDependencies(toolId) {
  const dependencies = toolDependencies[toolId] || [];
  await Promise.all(dependencies.map((name) => loadScript(dependencySources[name])));

  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "/vendor/pdfjs/pdf.worker.min.js";
  }
  configureTesseract();
}
