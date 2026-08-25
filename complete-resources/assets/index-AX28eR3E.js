const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/TextToPdfTool-ibcJ9d-Z.js",
      "assets/react-vendor-Bc7KCos-.js",
      "assets/MergeTool-D37TKGAQ.js",
      "assets/CompressTool-BukrWJD2.js",
      "assets/PageNumbersTool-2yKGuxHc.js",
      "assets/EncryptPdfTool-vJTbTUBg.js",
      "assets/pdf-utils-DHnwt0li.js",
      "assets/WatermarkTool-BUK2Cd8j.js",
      "assets/SplitTool-D36kfnvT.js",
      "assets/HtmlToPdfTool-coPFnBN9.js",
      "assets/WordToPdfTool-jSC4h7bo.js",
      "assets/OrganizeTool-CwIcl5Gi.js",
      "assets/ImagesToPdfTool-Bii0o-2Z.js",
      "assets/RedactTool-CZBB8oP9.js",
      "assets/MarkdownToPdfTool-BpOYnmV-.js",
      "assets/ChatWithPDFTool-C5FZt83f.js",
      "assets/PdfToJpgTool-ClvJKChz.js",
      "assets/RemovePasswordTool-lQXb7ptf.js",
      "assets/UnlockPdfTool-2LYDYYGn.js",
      "assets/FillFormTool-BkNCoSxb.js",
      "assets/CropResizeTool-cAJpgg_H.js",
      "assets/HeadersFootersTool-D9YAMI6v.js",
      "assets/ExtractTextTool-B-NIzAnB.js",
      "assets/EditPdfTextTool-BcfIjsPe.js",
      "assets/PdfToDocxTool-Dz-8nznh.js",
      "assets/ComparePDFTool-ydBZwG1x.js",
      "assets/OcrTool-DzObGSZ-.js",
      "assets/RepairTool-BPXQ0Wpc.js",
      "assets/Pdftoaudiotool-BtWE2kwb.js",
      "assets/Gstinvoicetool-CzKJslFt.js",
      "assets/Summarytool-CP1kPdK4.js",
      "assets/Exceltopdftool-DxjCtU2l.js",
      "assets/FlattenPdfTool-BvQnprig.js",
      "assets/FingerprintTool-wE2tkcrc.js",
      "assets/CsvPdfTool-CT9RHSHD.js",
      "assets/Pdftoepubtool-CQQokyDq.js",
      "assets/PrivacyRiskScannerTool-CeqwTzn8.js",
      "assets/PosBillTool-rbITVoJL.js",
      "assets/Invertpdftool-CvfqsJJV.js",
      "assets/PdfToHandwritingTool-CBmDpWkt.js",
      "assets/HandwritingToPdfTool-CgVCoEGq.js",
      "assets/Dashboard-C3JB9zw0.js",
      "assets/chevron-down-B25xREwk.js",
      "assets/ToolSearchModal-dkdd7EmT.js",
      "assets/P2pShareTool1-PqvH6p8s.js",
      "assets/CollabWhiteboardTool-CGqfif1g.js",
      "assets/DocScanTool-CWqsZJfI.js",
      "assets/EbookToPdfTool-tLJXDSbJ.js",
      "assets/PptxToPdfTool-BzdZxGdy.js",
      "assets/PdfToPptxTool-BR39XzV-.js",
      "assets/Pdftoziptool-CkThroDf.js",
      "assets/RotatePdfTool-CI_1NABB.js",
      "assets/AudioToPdfTool-DklNO93s.js",
      "assets/PdfToExcelTool-D3aMCtq-.js",
      "assets/PdfToHtmlTool-Cfbja3PY.js",
      "assets/GSTFilingPrepTool-BbCSzT3e.js",
      "assets/WorkflowTool-DJnNLXUP.js",
      "assets/Blog-GoU6g3km.js",
      "assets/BlogPost-C8zx0wrA.js",
      "assets/blog-posts-FRy920l-.js",
      "assets/BlogIndex-vf6xaC3P.js",
    ]),
) => i.map((i) => d[i]);
import {
  r as s,
  u as $,
  a as Ye,
  j as e,
  R as Qe,
  B as et,
  b as tt,
  c as i,
} from "./react-vendor-Bc7KCos-.js";
(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) y(h);
  new MutationObserver((h) => {
    for (const b of h)
      if (b.type === "childList")
        for (const j of b.addedNodes)
          j.tagName === "LINK" && j.rel === "modulepreload" && y(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(h) {
    const b = {};
    return (
      h.integrity && (b.integrity = h.integrity),
      h.referrerPolicy && (b.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (b.credentials = "include")
        : h.crossOrigin === "anonymous"
          ? (b.credentials = "omit")
          : (b.credentials = "same-origin"),
      b
    );
  }
  function y(h) {
    if (h.ep) return;
    h.ep = !0;
    const b = t(h);
    fetch(h.href, b);
  }
})();
const ot = "modulepreload",
  st = function (o) {
    return "/" + o;
  },
  Ee = {},
  n = function (f, t, y) {
    let h = Promise.resolve();
    if (t && t.length > 0) {
      let P = function (r) {
        return Promise.all(
          r.map((_) =>
            Promise.resolve(_).then(
              (S) => ({ status: "fulfilled", value: S }),
              (S) => ({ status: "rejected", reason: S }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const j = document.querySelector("meta[property=csp-nonce]"),
        v = j?.nonce || j?.getAttribute("nonce");
      h = P(
        t.map((r) => {
          if (((r = st(r)), r in Ee)) return;
          Ee[r] = !0;
          const _ = r.endsWith(".css"),
            S = _ ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${r}"]${S}`)) return;
          const D = document.createElement("link");
          if (
            ((D.rel = _ ? "stylesheet" : ot),
            _ || (D.as = "script"),
            (D.crossOrigin = ""),
            (D.href = r),
            v && D.setAttribute("nonce", v),
            document.head.appendChild(D),
            _)
          )
            return new Promise((O, ye) => {
              (D.addEventListener("load", O),
                D.addEventListener("error", () =>
                  ye(new Error(`Unable to preload CSS for ${r}`)),
                ));
            });
        }),
      );
    }
    function b(j) {
      const v = new Event("vite:preloadError", { cancelable: !0 });
      if (((v.payload = j), window.dispatchEvent(v), !v.defaultPrevented))
        throw j;
    }
    return h.then((j) => {
      for (const v of j || []) v.status === "rejected" && b(v.reason);
      return f().catch(b);
    });
  },
  rt = ({ clarityProjectId: o }) => (
    s.useEffect(() => {
      if (typeof window < "u" && !window.clarity) {
        const f = document.createElement("script");
        ((f.type = "text/javascript"),
          (f.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${o}");
      `),
          document.head.appendChild(f));
      }
    }, [o]),
    null
  );
const it = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  at = (o) =>
    o.replace(/^([A-Z])|[\s-_]+(\w)/g, (f, t, y) =>
      y ? y.toUpperCase() : t.toLowerCase(),
    ),
  Ie = (o) => {
    const f = at(o);
    return f.charAt(0).toUpperCase() + f.slice(1);
  },
  Ve = (...o) =>
    o
      .filter((f, t, y) => !!f && f.trim() !== "" && y.indexOf(f) === t)
      .join(" ")
      .trim(),
  dt = (o) => {
    for (const f in o)
      if (f.startsWith("aria-") || f === "role" || f === "title") return !0;
  };
var nt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const lt = s.forwardRef(
  (
    {
      color: o = "currentColor",
      size: f = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: y,
      className: h = "",
      children: b,
      iconNode: j,
      ...v
    },
    P,
  ) =>
    s.createElement(
      "svg",
      {
        ref: P,
        ...nt,
        width: f,
        height: f,
        stroke: o,
        strokeWidth: y ? (Number(t) * 24) / Number(f) : t,
        className: Ve("lucide", h),
        ...(!b && !dt(v) && { "aria-hidden": "true" }),
        ...v,
      },
      [
        ...j.map(([r, _]) => s.createElement(r, _)),
        ...(Array.isArray(b) ? b : [b]),
      ],
    ),
);
const We = (o, f) => {
  const t = s.forwardRef(({ className: y, ...h }, b) =>
    s.createElement(lt, {
      ref: b,
      iconNode: f,
      className: Ve(`lucide-${it(Ie(o))}`, `lucide-${o}`, y),
      ...h,
    }),
  );
  return ((t.displayName = Ie(o)), t);
};
const ct = [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ],
  Be = We("layout-dashboard", ct);
const pt = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  oe = We("sparkles", pt),
  ft = s.lazy(() =>
    n(() => import("./TextToPdfTool-ibcJ9d-Z.js"), __vite__mapDeps([0, 1])),
  ),
  xt = s.lazy(() =>
    n(() => import("./MergeTool-D37TKGAQ.js"), __vite__mapDeps([2, 1])),
  ),
  mt = s.lazy(() =>
    n(() => import("./CompressTool-BukrWJD2.js"), __vite__mapDeps([3, 1])),
  ),
  ht = s.lazy(() =>
    n(() => import("./PageNumbersTool-2yKGuxHc.js"), __vite__mapDeps([4, 1])),
  ),
  ut = s.lazy(() =>
    n(() => import("./EncryptPdfTool-vJTbTUBg.js"), __vite__mapDeps([5, 1, 6])),
  ),
  jt = s.lazy(() =>
    n(() => import("./WatermarkTool-BUK2Cd8j.js"), __vite__mapDeps([7, 1])),
  ),
  gt = s.lazy(() =>
    n(() => import("./SplitTool-D36kfnvT.js"), __vite__mapDeps([8, 1])),
  ),
  bt = s.lazy(() =>
    n(() => import("./HtmlToPdfTool-coPFnBN9.js"), __vite__mapDeps([9, 1])),
  ),
  wt = s.lazy(() =>
    n(() => import("./WordToPdfTool-jSC4h7bo.js"), __vite__mapDeps([10, 1])),
  ),
  vt = s.lazy(() =>
    n(() => import("./OrganizeTool-CwIcl5Gi.js"), __vite__mapDeps([11, 1])),
  ),
  yt = s.lazy(() =>
    n(() => import("./ImagesToPdfTool-Bii0o-2Z.js"), __vite__mapDeps([12, 1])),
  ),
  kt = s.lazy(() =>
    n(() => import("./RedactTool-CZBB8oP9.js"), __vite__mapDeps([13, 1])),
  ),
  Pt = s.lazy(() =>
    n(
      () => import("./MarkdownToPdfTool-BpOYnmV-.js"),
      __vite__mapDeps([14, 1]),
    ),
  ),
  _t = s.lazy(() =>
    n(() => import("./ChatWithPDFTool-C5FZt83f.js"), __vite__mapDeps([15, 1])),
  ),
  zt = s.lazy(() =>
    n(() => import("./PdfToJpgTool-ClvJKChz.js"), __vite__mapDeps([16, 1])),
  ),
  Dt = s.lazy(() =>
    n(
      () => import("./RemovePasswordTool-lQXb7ptf.js"),
      __vite__mapDeps([17, 1]),
    ),
  ),
  St = s.lazy(() =>
    n(() => import("./UnlockPdfTool-2LYDYYGn.js"), __vite__mapDeps([18, 1])),
  ),
  Ft = s.lazy(() =>
    n(() => import("./FillFormTool-BkNCoSxb.js"), __vite__mapDeps([19, 1])),
  ),
  Nt = s.lazy(() =>
    n(() => import("./CropResizeTool-cAJpgg_H.js"), __vite__mapDeps([20, 1])),
  ),
  Et = s.lazy(() =>
    n(
      () => import("./HeadersFootersTool-D9YAMI6v.js"),
      __vite__mapDeps([21, 1]),
    ),
  ),
  It = s.lazy(() =>
    n(() => import("./ExtractTextTool-B-NIzAnB.js"), __vite__mapDeps([22, 1])),
  ),
  Le = s.lazy(() =>
    n(() => import("./EditPdfTextTool-BcfIjsPe.js"), __vite__mapDeps([23, 1])),
  ),
  Lt = s.lazy(() =>
    n(() => import("./PdfToDocxTool-Dz-8nznh.js"), __vite__mapDeps([24, 1])),
  ),
  Tt = s.lazy(() =>
    n(() => import("./ComparePDFTool-ydBZwG1x.js"), __vite__mapDeps([25, 1])),
  ),
  Ct = s.lazy(() =>
    n(() => import("./OcrTool-DzObGSZ-.js"), __vite__mapDeps([26, 1])),
  ),
  At = s.lazy(() =>
    n(() => import("./RepairTool-BPXQ0Wpc.js"), __vite__mapDeps([27, 1])),
  ),
  Rt = s.lazy(() =>
    n(() => import("./Pdftoaudiotool-BtWE2kwb.js"), __vite__mapDeps([28, 1])),
  ),
  Mt = s.lazy(() =>
    n(() => import("./Gstinvoicetool-CzKJslFt.js"), __vite__mapDeps([29, 1])),
  ),
  Ot = s.lazy(() =>
    n(() => import("./Summarytool-CP1kPdK4.js"), __vite__mapDeps([30, 1])),
  ),
  Vt = s.lazy(() =>
    n(() => import("./Exceltopdftool-DxjCtU2l.js"), __vite__mapDeps([31, 1])),
  ),
  Wt = s.lazy(() =>
    n(() => import("./FlattenPdfTool-BvQnprig.js"), __vite__mapDeps([32, 1])),
  ),
  Bt = s.lazy(() =>
    n(() => import("./FingerprintTool-wE2tkcrc.js"), __vite__mapDeps([33, 1])),
  ),
  Ht = s.lazy(() =>
    n(() => import("./CsvPdfTool-CT9RHSHD.js"), __vite__mapDeps([34, 1])),
  ),
  Gt = s.lazy(() =>
    n(() => import("./Pdftoepubtool-CQQokyDq.js"), __vite__mapDeps([35, 1])),
  ),
  Te = s.lazy(() =>
    n(
      () => import("./PrivacyRiskScannerTool-CeqwTzn8.js"),
      __vite__mapDeps([36, 1]),
    ),
  ),
  Ut = s.lazy(() =>
    n(() => import("./PosBillTool-rbITVoJL.js"), __vite__mapDeps([37, 1])),
  ),
  $t = s.lazy(() =>
    n(() => import("./Invertpdftool-CvfqsJJV.js"), __vite__mapDeps([38, 1])),
  ),
  qt = s.lazy(() =>
    n(
      () => import("./PdfToHandwritingTool-CBmDpWkt.js"),
      __vite__mapDeps([39, 1]),
    ),
  ),
  Zt = s.lazy(() =>
    n(
      () => import("./HandwritingToPdfTool-CgVCoEGq.js"),
      __vite__mapDeps([40, 1]),
    ),
  ),
  Kt = s.lazy(() =>
    n(() => import("./Dashboard-C3JB9zw0.js"), __vite__mapDeps([41, 1, 42])),
  ),
  Jt = s.lazy(() =>
    n(() => import("./ToolSearchModal-dkdd7EmT.js"), __vite__mapDeps([43, 1])),
  ),
  Xt = s.lazy(() =>
    n(() => import("./P2pShareTool1-PqvH6p8s.js"), __vite__mapDeps([44, 1])),
  ),
  Yt = s.lazy(() =>
    n(
      () => import("./CollabWhiteboardTool-CGqfif1g.js"),
      __vite__mapDeps([45, 1]),
    ),
  ),
  Qt = s.lazy(() =>
    n(() => import("./DocScanTool-CWqsZJfI.js"), __vite__mapDeps([46, 1])),
  ),
  eo = s.lazy(() =>
    n(() => import("./EbookToPdfTool-tLJXDSbJ.js"), __vite__mapDeps([47, 1])),
  ),
  to = s.lazy(() =>
    n(() => import("./PptxToPdfTool-BzdZxGdy.js"), __vite__mapDeps([48, 1])),
  ),
  oo = s.lazy(() =>
    n(() => import("./PdfToPptxTool-BR39XzV-.js"), __vite__mapDeps([49, 1])),
  ),
  so = s.lazy(() =>
    n(() => import("./Pdftoziptool-CkThroDf.js"), __vite__mapDeps([50, 1])),
  ),
  ro = s.lazy(() =>
    n(() => import("./RotatePdfTool-CI_1NABB.js"), __vite__mapDeps([51, 1])),
  ),
  io = s.lazy(() =>
    n(() => import("./AudioToPdfTool-DklNO93s.js"), __vite__mapDeps([52, 1])),
  ),
  ao = s.lazy(() =>
    n(() => import("./PdfToExcelTool-D3aMCtq-.js"), __vite__mapDeps([53, 1])),
  ),
  no = s.lazy(() =>
    n(() => import("./PdfToHtmlTool-Cfbja3PY.js"), __vite__mapDeps([54, 1])),
  ),
  lo = s.lazy(() =>
    n(
      () => import("./GSTFilingPrepTool-BbCSzT3e.js"),
      __vite__mapDeps([55, 1]),
    ),
  ),
  co = s.lazy(() =>
    n(
      () => import("./WorkflowTool-DJnNLXUP.js"),
      __vite__mapDeps([56, 1, 6, 42]),
    ),
  ),
  g = ({ children: o, className: f }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: f,
      children: o,
    }),
  ee = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        e.jsx("polyline", { points: "2 17 12 22 22 17" }),
        e.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  se = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M12 8a2.83 2.83 0 1 0 4 4 4 4 0 0 0-4-4z" }),
        e.jsx("path", { d: "M12 2v2" }),
        e.jsx("path", { d: "M12 20v2" }),
        e.jsx("path", { d: "m4.9 4.9 1.4 1.4" }),
        e.jsx("path", { d: "m17.7 17.7 1.4 1.4" }),
        e.jsx("path", { d: "M2 12h2" }),
        e.jsx("path", { d: "M20 12h2" }),
        e.jsx("path", { d: "m6.3 17.7-1.4 1.4" }),
        e.jsx("path", { d: "m19.1 4.9-1.4 1.4" }),
      ],
    }),
  re = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M3 17c3-1 5-9 7-9s2 6 4 6 3-3 3-3" }),
        e.jsx("path", { d: "M2 21h20" }),
        e.jsx("path", { d: "M15 5l3-3 3 3-3 3z" }),
      ],
    }),
  ie = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        e.jsx("path", { d: "M7 15c2-.6 3-5 4.5-5s1 3.5 2.5 3.5 2-1.8 3-1.8" }),
      ],
    }),
  ae = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("line", { x1: "10", y1: "6", x2: "21", y2: "6" }),
        e.jsx("line", { x1: "10", y1: "12", x2: "21", y2: "12" }),
        e.jsx("line", { x1: "10", y1: "18", x2: "21", y2: "18" }),
        e.jsx("path", { d: "M4 6h1v4" }),
        e.jsx("path", { d: "M4 10h2" }),
        e.jsx("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }),
      ],
    }),
  m = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
        e.jsx("polyline", { points: "10 9 9 9 8 9" }),
      ],
    }),
  de = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("circle", { cx: "3", cy: "12", r: "2" }),
        e.jsx("circle", { cx: "12", cy: "5", r: "2" }),
        e.jsx("circle", { cx: "12", cy: "19", r: "2" }),
        e.jsx("circle", { cx: "21", cy: "12", r: "2" }),
        e.jsx("path", {
          d: "M5 11.2L10 6.5M5 12.8L10 17.5M14 6.5L19 11.2M14 17.5L19 12.8",
          strokeLinecap: "round",
        }),
      ],
    }),
  L = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
        }),
        e.jsx("circle", { cx: "9", cy: "9", r: "2" }),
        e.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
      ],
    }),
  U = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  I = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M12 20h9" }),
        e.jsx("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }),
      ],
    }),
  te = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  po = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  Ce = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  ne = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
        e.jsx("path", {
          d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
        }),
        e.jsx("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }),
      ],
    }),
  le = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
        e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
        e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
      ],
    }),
  M = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "m12 19 7-7 3 3-7 7-3-3z" }),
        e.jsx("path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
        e.jsx("path", { d: "m2 2 7.586 7.586" }),
        e.jsx("circle", { cx: "11", cy: "11", r: "2" }),
      ],
    }),
  ce = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("polyline", { points: "4 14 10 14 10 20" }),
        e.jsx("polyline", { points: "20 10 14 10 14 4" }),
        e.jsx("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
        e.jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" }),
      ],
    }),
  pe = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", {
          d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
        }),
        e.jsx("path", { d: "M22 21H7" }),
        e.jsx("path", { d: "m5 11 9 9" }),
      ],
    }),
  fe = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }),
        e.jsx("path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }),
      ],
    }),
  xe = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M16.5 9.4 7.55 4.24" }),
        e.jsx("path", {
          d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
        }),
        e.jsx("polyline", { points: "3.29 7 12 12 20.71 7" }),
        e.jsx("line", { x1: "12", y1: "22", x2: "12", y2: "12" }),
      ],
    }),
  me = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M6 3v12" }),
        e.jsx("circle", { cx: "6", cy: "6", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("line", { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
        e.jsx("line", { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
      ],
    }),
  he = (o) =>
    e.jsx(g, {
      ...o,
      children: e.jsx("path", { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" }),
    }),
  ue = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
        e.jsx("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
        e.jsx("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
        e.jsx("line", { x1: "16", y1: "3", x2: "14", y2: "21" }),
      ],
    }),
  je = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "18", rx: "1" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "18", rx: "1" }),
      ],
    }),
  ge = (o) =>
    e.jsx(g, {
      ...o,
      children: e.jsx("path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      }),
    }),
  N = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
        e.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }),
      ],
    }),
  T = (o) =>
    e.jsx(g, {
      ...o,
      children: e.jsx("path", {
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
      }),
    }),
  C = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("rect", {
          x: "3",
          y: "11",
          width: "18",
          height: "11",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      ],
    }),
  fo = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        e.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        e.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
      ],
    }),
  be = (o) =>
    e.jsx(g, {
      ...o,
      children: e.jsx("path", {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      }),
    }),
  A = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", {
          d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
        }),
        e.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
        e.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
        e.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" }),
      ],
    }),
  we = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("circle", { cx: "18", cy: "5", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "12", r: "3" }),
        e.jsx("circle", { cx: "18", cy: "19", r: "3" }),
        e.jsx("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
        e.jsx("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }),
      ],
    }),
  R = (o) =>
    e.jsx(g, {
      ...o,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  ve = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("path", {
          d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
        }),
        e.jsx("circle", { cx: "12", cy: "13", r: "4" }),
      ],
    }),
  xo = (o) =>
    e.jsxs(g, {
      ...o,
      children: [
        e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  H = {
    bg: "bg-zinc-950",
    panel: "bg-zinc-900",
    border: "border-zinc-800",
    text: "text-zinc-100",
  },
  Ae = () => {
    if (typeof window > "u") return !1;
    const o = window.navigator.userAgent,
      f = !!o.match(/iPad/i) || !!o.match(/iPhone/i),
      t = !!o.match(/WebKit/i);
    return f && t && !o.match(/CriOS/i);
  },
  Re = () => {
    if (typeof window > "u") return !1;
    const o = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(o);
  },
  Me = () =>
    typeof window > "u"
      ? !1
      : window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === !0,
  mo = {
    merge: ["pdflib", "downloadjs", "pdfjs"],
    split: ["pdflib", "downloadjs"],
    organize: ["pdflib", "downloadjs"],
    watermark: ["pdflib", "downloadjs", "pdfjs"],
    pagenumbers: ["pdflib", "downloadjs", "pdfjs"],
    headerfooter: ["pdflib", "downloadjs"],
    encryptpdf: ["pdflib", "downloadjs"],
    removepassword: ["pdflib", "pdfjs", "downloadjs"],
    redact: ["pdflib", "downloadjs"],
    flatten: ["pdfjs", "pdflib", "downloadjs"],
    cropresize: ["pdflib", "pdfjs", "downloadjs"],
    images: ["pdflib", "downloadjs"],
    editpdftext: ["pdflib", "pdfjs", "downloadjs"],
    compress: ["pdflib", "pdfjs", "downloadjs"],
    gstfilingprep: ["pdflib", "downloadjs"],
    workflow: ["pdflib", "pdfjs", "downloadjs"],
    pdftojpg: ["pdfjs", "downloadjs", "jszip"],
    extract: ["pdfjs"],
    compare: ["pdfjs"],
    chatpdf: ["pdfjs"],
    summary: ["pdfjs"],
    ocr: ["pdfjs"],
    repair: ["pdfjs", "pdflib", "downloadjs"],
    pdftoadudio: ["pdfjs"],
    privacyscanner: ["pdfjs", "pdflib", "downloadjs"],
    invertpdf: ["pdfjs", "pdflib", "downloadjs"],
    pdftohandwriting: ["pdfjs", "pdflib"],
    handwritingtopdf: ["pdflib", "pdfjs"],
    markdownpdf: ["marked", "jspdf", "html2canvas", "downloadjs"],
    htmlpdf: ["jspdf", "html2canvas", "downloadjs"],
    wordtopdf: ["jszip", "docxpreview", "html2canvas", "jspdf", "downloadjs"],
    texttopdf: ["jspdf", "html2canvas", "downloadjs"],
    pdftodocx: ["pdfjs", "jszip", "downloadjs"],
    exceltopdf: ["jspdf", "html2canvas", "downloadjs"],
    csvpdf: ["pdflib", "pdfjs", "jspdf", "downloadjs"],
    pdfttoepub: ["pdfjs"],
    fingerprint: [],
    gstinvoice: ["jspdf", "html2canvas", "downloadjs"],
    posbill: ["jspdf", "html2canvas", "downloadjs"],
    camerascan: ["pdflib", "downloadjs"],
    ebooktopdf: ["jszip", "jspdf", "downloadjs"],
    pptxtopdf: ["jszip", "jspdf", "html2canvas", "downloadjs"],
    pdftopptx: ["pdfjs", "jszip", "downloadjs"],
    pdftozip: ["jszip", "downloadjs"],
    rotatepdf: ["pdflib", "pdfjs"],
    audiotopdf: ["jspdf", "downloadjs"],
    pdftoexcel: ["pdfjs", "downloadjs"],
    pdftohtml: ["pdfjs"],
  },
  Y = {
    pdflib: "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
    downloadjs: "https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js",
    pdfjs: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
    marked: "https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js",
    jspdf:
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    html2canvas:
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
    jszip: "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",
    mammoth:
      "https://cdn.jsdelivr.net/npm/mammoth@1.7.2/mammoth.browser.min.js",
    pdfmake: "https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/pdfmake.min.js",
    pdfmakefonts:
      "https://cdn.jsdelivr.net/npm/pdfmake@0.2.9/build/vfs_fonts.js",
    docxpreview:
      "https://cdn.jsdelivr.net/npm/docx-preview@0.3.5/dist/docx-preview.min.js",
    html2pdf:
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
  },
  G = [
    {
      id: "camerascan",
      title: "Scan Document",
      desc: "Use your camera to scan any document and export it as a PDF. 100% on-device.",
      icon: ve,
      keywords:
        "camera scan, scan document, scan to pdf, mobile scan, photograph document, receipt scan, invoice scan, physical document, capture pdf",
    },
    {
      id: "merge",
      title: "Merge PDFs",
      desc: "Combine multiple PDFs into one document with drag & drop",
      icon: ne,
      keywords:
        "merge pdf, combine pdf, join pdf files, unite pdfs, put together pdfs, concatenate, stitch pdfs, combine multiple pdfs, join documents, fuse pdfs, add pdfs together",
    },
    {
      id: "compress",
      title: "Compress PDF",
      desc: "Reduce PDF file size by up to 70% while maintaining quality",
      icon: ce,
      keywords:
        "compress pdf, reduce pdf size, shrink pdf, make pdf smaller, optimize pdf, minimize pdf size, decrease file size, reduce mb, smaller file",
    },
    {
      id: "split",
      title: "Split PDF",
      desc: "Separate PDF into individual pages or extract specific ranges",
      icon: me,
      keywords:
        "split pdf, extract pdf pages, divide pdf, separate pdf, break pdf, extract pages, remove pages, isolate pages, take out pages, split into parts",
    },
    {
      id: "organize",
      title: "Organize Pages",
      desc: "Rotate, delete, reorder, or rearrange PDF pages easily",
      icon: ae,
      keywords:
        "organize pdf, reorder pdf pages, arrange pdf, rotate pages, delete pages, move pages, rearrange, sort pages, resequence",
    },
    {
      id: "rotatepdf",
      title: "Rotate PDF",
      desc: "Rotate individual pages or the entire PDF — 90°, 180°, 270° — 100% local",
      icon: U,
      keywords:
        "rotate pdf, rotate pages, flip pdf, turn pdf, fix orientation, landscape to portrait, portrait to landscape, upside down pdf, pdf rotation, fix rotated scan",
    },
    {
      id: "cropresize",
      title: "Crop & Resize",
      desc: "Crop margins, resize pages to standard sizes (A4, Letter)",
      icon: fe,
      keywords:
        "crop pdf, resize pdf, trim pdf, change page size, cut margins, adjust size, scale pdf, change dimensions, trim margins",
    },
    {
      id: "pdftozip",
      title: "PDF to ZIP",
      desc: "Bundle multiple PDFs into a single compressed ZIP archive — fully local, zero upload",
      icon: xe,
      keywords:
        "pdf to zip, compress pdfs, bundle pdfs, zip archive, package pdfs, multiple pdf download, pdf bundle, zip file, compress, archive, batch",
    },
    {
      id: "editpdftext",
      title: "Edit PDF & add Signature",
      desc: "Click any text in your PDF and correct it in-place",
      icon: I,
      keywords:
        "edit pdf text, fix typo pdf, correct pdf, change text, update text, modify pdf content, inline edit, text editor",
    },
    {
      id: "signpdf",
      title: "Sign PDF",
      desc: "Draw, type or photograph your signature and place it on any page",
      icon: I,
      keywords:
        "sign pdf, esign pdf, electronic signature, add signature to pdf, sign document online, digital signature free, sign contract",
    },
    {
      id: "redact",
      title: "Redact PDF",
      desc: "Permanently remove sensitive text and information from PDFs",
      icon: pe,
      keywords:
        "redact pdf, remove text, black out pdf, censor pdf, hide information, obscure text, remove sensitive data, blackout, redaction",
    },
    {
      id: "watermark",
      title: "Add Watermark",
      desc: "Protect documents with text or image watermarks",
      icon: he,
      keywords:
        "watermark pdf, add watermark, protect pdf, stamp pdf, brand pdf, mark pdf, overlay text, add logo, watermark document",
    },
    {
      id: "pagenumbers",
      title: "Add Page Numbers",
      desc: "Automatically number PDF pages with custom formatting",
      icon: ue,
      keywords:
        "add page numbers to pdf, number pdf pages, pagination, page numbering, add numbers, number pages, page counter",
    },
    {
      id: "headerfooter",
      title: "Headers & Footers",
      desc: "Add custom headers and footers with text, dates, and page numbers",
      icon: le,
      keywords:
        "pdf headers footers, add header footer pdf, header text, footer text, top text, bottom text, add header, add footer",
    },
    {
      id: "flatten",
      title: "Flatten PDF",
      desc: "Make PDFs permanently non-editable — removes forms, annotations, scripts & metadata",
      icon: C,
      keywords:
        "flatten pdf, make pdf non editable, lock pdf, remove form fields, remove annotations, strip metadata, secure pdf, read only pdf, finalize pdf, permanent pdf, static pdf",
    },
    {
      id: "invertpdf",
      title: "Invert PDF Colours",
      desc: "Convert PDFs to dark mode, light mode, sepia, or high contrast — no upload needed",
      icon: se,
      keywords:
        "invert pdf, dark mode pdf, light mode pdf, pdf colour invert, sepia pdf, high contrast pdf, negative pdf, flip colours, night mode pdf, pdf theme",
    },
    {
      id: "pdftohandwriting",
      title: "PDF to Handwriting",
      desc: "Convert a PDF or text into realistic handwritten notes — in your own handwriting, 100% private",
      icon: re,
      keywords:
        "pdf to handwriting, text to handwriting, handwritten notes, convert pdf to handwriting, handwriting generator, assignment handwriting, my handwriting font, text to handwritten, notes maker, handwriting converter",
    },
    {
      id: "handwritingtopdf",
      title: "Handwriting to PDF",
      desc: "Scan handwritten pages into a clean PDF, or transcribe handwriting to typed text — 100% private",
      icon: ie,
      keywords:
        "handwriting to pdf, convert handwriting to pdf, scan handwritten notes to pdf, handwritten notes to pdf, photo to pdf, handwriting to text, ocr handwriting, transcribe handwriting, handwritten document scanner, notes photo to pdf, handwriting scanner",
    },
    {
      id: "wordtopdf",
      title: "Word to PDF",
      desc: "Convert .doc and .docx files to PDF with perfect formatting",
      icon: m,
      keywords:
        "word to pdf, docx to pdf, doc to pdf, convert word, microsoft word to pdf, office to pdf, word document to pdf, docx converter",
    },
    {
      id: "images",
      title: "Images to PDF",
      desc: "Convert JPG, PNG images to PDF. Batch convert multiple images",
      icon: L,
      keywords:
        "jpg to pdf, png to pdf, image to pdf converter, picture to pdf, photo to pdf, jpeg to pdf, convert images, images to document, pics to pdf",
    },
    {
      id: "exceltopdf",
      title: "Excel to PDF",
      desc: "Convert .xlsx spreadsheets to pixel-perfect PDFs — colors, merged cells & fonts preserved",
      icon: m,
      keywords:
        "excel to pdf, xlsx to pdf, spreadsheet to pdf, xls to pdf, convert excel, csv to pdf, workbook to pdf, table to pdf, excel converter",
    },
    {
      id: "pptxtopdf",
      title: "PowerPoint to PDF",
      desc: "Convert .pptx presentations to PDF — no upload, 100% private",
      icon: m,
      keywords:
        "pptx to pdf, powerpoint to pdf, convert pptx, presentation to pdf, slides to pdf, ppt converter",
    },
    {
      id: "htmlpdf",
      title: "HTML to PDF",
      desc: "Convert HTML files or code to professional PDFs",
      icon: m,
      keywords:
        "html to pdf, convert html, webpage to pdf, html converter, web page to pdf, html file to pdf, save webpage",
    },
    {
      id: "texttopdf",
      title: "Create PDF",
      desc: "Write rich text with formatting, images & styles - export as PDF",
      icon: I,
      keywords:
        "create pdf, text to pdf, write pdf, rich text pdf, word processor, pdf creator, new pdf, blank pdf, document creator, type pdf",
    },
    {
      id: "markdownpdf",
      title: "Markdown to PDF",
      desc: "Convert .md Markdown files to beautifully formatted PDFs instantly - free, no sign-up, no watermark.",
      icon: N,
      keywords:
        "markdown to pdf, md to pdf, convert markdown, markdown converter, markdown document, md file to pdf, .md to pdf, convert md to pdf, md to pdf converter, markdown pdf free",
    },
    {
      id: "csvpdf",
      title: "CSV ↔ PDF Converter",
      desc: "Convert CSV spreadsheets to formatted PDFs, or extract tables from PDFs back to CSV",
      icon: m,
      keywords:
        "csv to pdf, pdf to csv, spreadsheet to pdf, table converter, export csv, import table, data to pdf, csv converter, tabular data",
    },
    {
      id: "audiotopdf",
      title: "Audio to PDF",
      desc: "Transcribe any audio file to an editable PDF using on-device Whisper AI — MP3, WAV, M4A and more",
      icon: A,
      keywords:
        "audio to pdf, transcribe audio, speech to text, whisper, voice to text, mp3 to pdf, wav to text, transcription, meeting notes, lecture notes, podcast transcript, audio transcript, voice transcript, convert audio",
    },
    {
      id: "ebooktopdf",
      title: "eBook to PDF",
      desc: "Convert EPUB, TXT & HTML eBooks to beautifully typeset PDFs — cover, TOC, chapter breaks, images",
      icon: N,
      keywords:
        "epub to pdf, ebook to pdf, epub converter, convert epub, txt to pdf, ebook converter, epub reader, digital book, kindle, epub to document, html to pdf ebook",
    },
    {
      id: "pdftodocx",
      title: "PDF to Word",
      desc: "Convert PDF to editable .docx files — no upload, 100% private",
      icon: m,
      keywords:
        "pdf to word, pdf to docx, convert pdf, editable word, pdf to doc, export word, word document from pdf",
    },
    {
      id: "pdftojpg",
      title: "PDF to JPG",
      desc: "Convert PDF pages to high-quality JPG images (up to 600 DPI)",
      icon: L,
      keywords:
        "pdf to jpg, pdf to image, convert pdf to jpeg, pdf to png, export pdf as image, save pdf as picture, pdf to photo, turn pdf into image, extract images",
    },
    {
      id: "pdftoexcel",
      title: "PDF to Excel",
      desc: "Extract tables from PDF into editable XLSX spreadsheets — 100% local, no upload",
      icon: m,
      keywords:
        "pdf to excel, pdf to xlsx, extract table, table extraction, spreadsheet, xls, csv, convert pdf table",
    },
    {
      id: "pdftopptx",
      title: "PDF to PowerPoint",
      desc: "Convert PDF to editable .pptx presentations — pixel-perfect, 100% local",
      icon: m,
      keywords:
        "pdf to ppt, pdf to powerpoint, pdf to pptx, convert pdf presentation, slides from pdf",
    },
    {
      id: "extract",
      title: "Extract Text",
      desc: "Copy text from PDF documents without formatting issues",
      icon: m,
      keywords:
        "extract text from pdf, copy pdf text, pdf to text, get text, read text, pull text, copy from pdf, text extraction, retrieve text",
    },
    {
      id: "pdftohtml",
      title: "PDF to HTML",
      desc: "Convert PDF to pixel-accurate or semantic HTML — colours, fonts, tables, links, forms preserved",
      icon: m,
      keywords:
        "pdf to html, convert pdf, webpage, html export, web page, html file, pdf to web",
    },
    {
      id: "pdftoadudio",
      title: "PDF to Audio",
      desc: "Listen to any PDF read aloud using your browser's built-in text-to-speech",
      icon: A,
      keywords:
        "pdf to audio, pdf to speech, listen to pdf, text to speech, tts, read pdf aloud, pdf reader, accessibility",
    },
    {
      id: "pdfttoepub",
      title: "PDF to EPUB",
      desc: "Convert PDF documents into portable eBook files for any e-reader",
      icon: N,
      keywords:
        "pdf to epub, pdf to ebook, convert pdf ebook, epub converter, kindle epub, apple books, kobo, google play books, read pdf, epub format",
    },
    {
      id: "encryptpdf",
      title: "Encrypt PDF — Free, No Upload",
      desc: "Password-protect PDFs with strong encryption. 100% free, no upload to any server, no sign-up required.",
      icon: C,
      keywords:
        "encrypt pdf, password protect pdf, secure pdf, lock pdf, add password, protect document, encrypt pdf free, pdf encryption free, password protect pdf free online",
    },
    {
      id: "unlockpdf",
      title: "Unlock PDF",
      desc: "Remove printing, copying and editing restrictions from a PDF you own",
      icon: T,
      keywords:
        "unlock pdf, remove pdf restrictions, enable printing pdf, allow copying pdf, remove owner password, pdf permissions, unrestrict pdf",
    },
    {
      id: "fillform",
      title: "Fill PDF Form",
      desc: "Fill in a fillable PDF and lock the answers so every viewer shows them",
      icon: m,
      keywords:
        "fill pdf form, fillable pdf, complete pdf form online, fill out pdf free, pdf form filler, type in pdf form",
    },
    {
      id: "autoredact",
      title: "Auto-Redact PII",
      desc: "Find and permanently remove Aadhaar, PAN, cards, emails and phone numbers",
      icon: R,
      keywords:
        "auto redact pdf, redact personal information, remove pii from pdf, redact aadhaar pan, hide sensitive data pdf, gdpr redaction",
    },
    {
      id: "removepassword",
      title: "Remove Password",
      desc: "Unlock password-protected PDFs and remove encryption securely",
      icon: T,
      keywords:
        "unlock pdf, remove pdf password, decrypt pdf, unprotect pdf, remove security, unlock document, remove encryption",
    },
    {
      id: "privacyscanner",
      title: "Privacy Risk Scanner",
      desc: "Detect Aadhaar, PAN, cards, emails & hidden metadata — export a redacted PDF. 100% local.",
      icon: R,
      keywords:
        "privacy scanner, pii detection, aadhaar, pan, redact pdf, sensitive data, bank account, credit card, ifsc, gst, email, phone, metadata stripper",
    },
    {
      id: "fingerprint",
      title: "Fingerprint Generator",
      desc: "Generate SHA-256, SHA-1 & MD5 cryptographic hashes to verify file integrity",
      icon: m,
      keywords:
        "fingerprint, hash, sha256, sha1, md5, checksum, integrity, verify, tamper detection, file proof, document certificate, duplicate detect",
    },
    {
      id: "chatpdf",
      title: "Chat with PDF (AI)",
      desc: "Ask questions and get insights from your PDFs using AI",
      icon: ge,
      keywords:
        "ai pdf chat, pdf assistant, ask questions pdf, chat with document, ai analyze, understand pdf, explain pdf, pdf chatbot",
    },
    {
      id: "summary",
      title: "AI PDF Summarizer",
      desc: "Summarize any PDF with on-device AI — no upload, 100% private",
      icon: oe,
      keywords:
        "summarize pdf, ai summary, pdf summary, abstract, key points, distill, tldr, overview, brief",
    },
    {
      id: "ocr",
      title: "Searchable PDF",
      desc: "Extract text from scanned or image-based PDFs using AI recognition",
      icon: m,
      keywords:
        "ocr, scan pdf, scanned document, image to text, extract text from image, make searchable, searchable pdf",
    },
    {
      id: "compare",
      title: "Compare PDFs",
      desc: "View two PDF files side-by-side for easy comparison",
      icon: je,
      keywords:
        "compare pdf, diff pdf, pdf comparison, side by side, contrast pdfs, difference, compare documents, view together",
    },
    {
      id: "repair",
      title: "Repair PDF",
      desc: "Fix corrupted, truncated, or broken PDF files — no upload needed",
      icon: be,
      keywords:
        "repair pdf, fix corrupted pdf, broken pdf, recover pdf, damaged pdf",
    },
    {
      id: "gstinvoice",
      title: "GST Invoice Generator",
      desc: "Create legally compliant GST Tax Invoices — CGST, SGST, IGST, HSN codes, all included",
      icon: m,
      keywords:
        "gst invoice, tax invoice, india invoice, cgst sgst igst, hsn sac code, billing, invoice generator, proforma, bill of supply, e-invoice, tds",
    },
    {
      id: "posbill",
      title: "POS Bill Generator",
      desc: "Create instant GST-compliant bills for any shop — manage products, cart, and print thermal receipts",
      icon: m,
      keywords:
        "pos, billing, invoice, shop, retail, thermal receipt, cashier, point of sale, bill generator, shopkeeper, cart, barcode, payment, gst bill, b2c billing, cash register",
    },
    {
      id: "p2pshare",
      title: "P2P File Share",
      desc: "Send any file directly to another browser — no server, no upload, 100% private",
      icon: we,
      keywords:
        "p2p share, peer to peer, send file, transfer file, share pdf, direct transfer, no upload, private share, webrtc, browser to browser",
    },
    {
      id: "whiteboard",
      title: "Collab Whiteboard",
      desc: "Real-time P2P drawing — no server, no upload",
      icon: M,
      keywords: "whiteboard, draw, collaborate, sketch, p2p, realtime, canvas",
    },
    {
      id: "gstfilingprep",
      title: "GST Filing Prep",
      desc: "Compress & split compiled PDFs to meet GST portal upload limits — SCN Reply (4×5MB) and Appeal (5×5MB).",
      icon: m,
      keywords:
        "gst portal, scn reply, appeal, compress split pdf, gst upload, 5mb limit, show cause notice, filing prep, apl-01, gst filing",
    },
    {
      id: "workflow",
      title: "PDF Workflow Builder",
      desc: "Upload once, chain multiple operations in sequence — compress, watermark, page numbers and more in one click.",
      icon: de,
      keywords:
        "workflow batch pipeline automate compress watermark page numbers sequence chain",
    },
  ],
  Q = {
    "/": "dashboard",
    "/merge-pdf": "merge",
    "/organize-pages": "organize",
    "/images-to-pdf": "images",
    "/extract-text": "extract",
    "/compress-pdf": "compress",
    "/crop-resize-pdf": "cropresize",
    "/split-pdf": "split",
    "/add-watermark": "watermark",
    "/page-numbers": "pagenumbers",
    "/headers-footers": "headerfooter",
    "/compare-pdfs": "compare",
    "/pdf-to-jpg": "pdftojpg",
    "/chat-with-pdf": "chatpdf",
    "/remove-password": "removepassword",
    "/unlock-pdf": "unlockpdf",
    "/fill-pdf-form": "fillform",
    "/auto-redact-pii": "autoredact",
    "/markdown-to-pdf": "markdownpdf",
    "/encrypt-pdf": "encryptpdf",
    "/redact-pdf": "redact",
    "/word-to-pdf": "wordtopdf",
    "/create-pdf": "texttopdf",
    "/edit-pdf-text": "editpdftext",
    "/sign-pdf": "signpdf",
    "/pdf-to-word": "pdftodocx",
    "/ocr-pdf": "ocr",
    "/repair-pdf": "repair",
    "/pdf-to-audio": "pdftoadudio",
    "/gst-invoice": "gstinvoice",
    "/summarize-pdf": "summary",
    "/excel-to-pdf": "exceltopdf",
    "/flatten-pdf": "flatten",
    "/fingerprint-pdf": "fingerprint",
    "/csv-to-pdf": "csvpdf",
    "/pdf-to-epub": "pdfttoepub",
    "/privacy-scanner": "privacyscanner",
    "/pos-billing": "posbill",
    "/invert-pdf": "invertpdf",
    "/pdf-to-handwriting": "pdftohandwriting",
    "/handwriting-to-pdf": "handwritingtopdf",
    "/p2p-share": "p2pshare",
    "/collab-whiteboard": "whiteboard",
    "/scan-to-pdf": "camerascan",
    "/ebook-to-pdf": "ebooktopdf",
    "/pptx-to-pdf": "pptxtopdf",
    "/pdf-to-pptx": "pdftopptx",
    "/pdf-to-zip": "pdftozip",
    "/rotate-pdf": "rotatepdf",
    "/audio-to-pdf": "audiotopdf",
    "/pdf-to-excel": "pdftoexcel",
    "/pdf-to-html": "pdftohtml",
    "/html-to-pdf": "htmlpdf",
    "/gst-filing-prep": "gstfilingprep",
    "/workflow": "workflow",
    "/compress-pdf-to-100kb": "compress",
    "/compress-pdf-to-200kb": "compress",
    "/compress-pdf-to-2mb": "compress",
    "/pdf-to-jpg-300-dpi": "pdftojpg",
    "/pdf-to-jpg-600-dpi": "pdftojpg",
    "/ilovepdf-alternative": "dashboard",
    "/smallpdf-alternative": "dashboard",
    "/adobe-acrobat-alternative": "dashboard",
  },
  ho = {
    dashboard: "/",
    merge: "/merge-pdf",
    organize: "/organize-pages",
    images: "/images-to-pdf",
    extract: "/extract-text",
    compress: "/compress-pdf",
    cropresize: "/crop-resize-pdf",
    split: "/split-pdf",
    watermark: "/add-watermark",
    pagenumbers: "/page-numbers",
    headerfooter: "/headers-footers",
    compare: "/compare-pdfs",
    pdftojpg: "/pdf-to-jpg",
    chatpdf: "/chat-with-pdf",
    removepassword: "/remove-password",
    unlockpdf: "/unlock-pdf",
    fillform: "/fill-pdf-form",
    autoredact: "/auto-redact-pii",
    encryptpdf: "/encrypt-pdf",
    redact: "/redact-pdf",
    htmlpdf: "/html-to-pdf",
    wordtopdf: "/word-to-pdf",
    texttopdf: "/create-pdf",
    markdownpdf: "/markdown-to-pdf",
    editpdftext: "/edit-pdf-text",
    signpdf: "/sign-pdf",
    pdftodocx: "/pdf-to-word",
    ocr: "/ocr-pdf",
    repair: "/repair-pdf",
    pdftoadudio: "/pdf-to-audio",
    gstinvoice: "/gst-invoice",
    summary: "/summarize-pdf",
    exceltopdf: "/excel-to-pdf",
    flatten: "/flatten-pdf",
    fingerprint: "/fingerprint-pdf",
    csvpdf: "/csv-to-pdf",
    pdfttoepub: "/pdf-to-epub",
    privacyscanner: "/privacy-scanner",
    posbill: "/pos-billing",
    invertpdf: "/invert-pdf",
    pdftohandwriting: "/pdf-to-handwriting",
    handwritingtopdf: "/handwriting-to-pdf",
    camerascan: "/scan-to-pdf",
    pptxtopdf: "/pptx-to-pdf",
    pdftopptx: "/pdf-to-pptx",
    pdftozip: "/pdf-to-zip",
    rotatepdf: "/rotate-pdf",
    audiotopdf: "/audio-to-pdf",
    pdftoexcel: "/pdf-to-excel",
    pdftohtml: "/pdf-to-html",
    p2pshare: "/p2p-share",
    whiteboard: "/collab-whiteboard",
    ebooktopdf: "/ebook-to-pdf",
    gstfilingprep: "/gst-filing-prep",
    workflow: "/workflow",
  };
function a() {
  const o = $(),
    f = Ye(),
    [t, y] = s.useState(Q[f.pathname] || "dashboard"),
    [h, b] = s.useState(null),
    [j, v] = s.useState(!1),
    [P, r] = s.useState(null),
    [_, S] = s.useState("unknown"),
    [D, O] = s.useState(!1),
    [ye, ke] = s.useState(!1),
    [V, Pe] = s.useState(null),
    [He, _e] = s.useState(navigator.onLine),
    [Ge, q] = s.useState(!1),
    [ze, Ue] = s.useState(null),
    [De, W] = s.useState(!1),
    [Z, Se] = s.useState(null),
    [B, E] = s.useState(!1),
    [$e, F] = s.useState(!1);
  (s.useEffect(() => {
    "serviceWorker" in navigator &&
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((c) => {
            (c.scope,
              l("App ready for offline use", "success"),
              setInterval(() => {
                c.update();
              }, 1800 * 1e3),
              c.addEventListener("updatefound", () => {
                const w = c.installing;
                w.addEventListener("statechange", () => {
                  w.state === "installed" &&
                    navigator.serviceWorker.controller &&
                    (Ue(w), q(!0));
                });
              }));
          })
          .catch((c) => {
            console.error("❌ Service Worker registration failed:", c);
          });
      });
  }, []),
    s.useEffect(() => {
      if (Me()) return;
      if (Re()) {
        const w = setTimeout(() => {
          W(!0);
        }, 5e3);
        return () => clearTimeout(w);
      }
      const c = (w) => {
        (w.preventDefault(), Pe(w));
        const k = localStorage.getItem("ihatepdf_install_dismissed"),
          z = k ? parseInt(k) : 0,
          Xe = (Date.now() - z) / (1e3 * 60 * 60);
        (!k || Xe > 24) &&
          setTimeout(() => {
            ke(!0);
          }, 5e3);
      };
      return (
        window.addEventListener("beforeinstallprompt", c),
        () => {
          window.removeEventListener("beforeinstallprompt", c);
        }
      );
    }, []),
    s.useEffect(() => {
      const c = () => {
          (_e(!0), l("Back online"));
        },
        w = () => {
          (_e(!1), l("📵 Offline mode - Your work is saved locally", "error"));
        };
      return (
        window.addEventListener("online", c),
        window.addEventListener("offline", w),
        () => {
          (window.removeEventListener("online", c),
            window.removeEventListener("offline", w));
        }
      );
    }, []));
  const qe = async () => {
      if (!V) {
        console.warn("⚠️ No deferred prompt available");
        return;
      }
      try {
        V.prompt();
        const { outcome: c } = await V.userChoice;
        c === "accepted"
          ? localStorage.removeItem("ihatepdf_install_dismissed")
          : localStorage.setItem(
              "ihatepdf_install_dismissed",
              Date.now().toString(),
            );
      } catch (c) {
        console.error("Error showing install prompt:", c);
      } finally {
        (Pe(null), ke(!1));
      }
    },
    Ze = () => {
      ze &&
        (ze.postMessage({ type: "SKIP_WAITING" }),
        q(!1),
        window.location.reload());
    };
  s.useEffect(() => {
    const c = Q[f.pathname];
    c && y(c);
  }, [f.pathname]);
  const K = (c) =>
      new Promise((w, k) => {
        if (document.querySelector(`script[src="${c}"]`)) {
          w();
          return;
        }
        const z = document.createElement("script");
        ((z.src = c),
          (z.onload = w),
          (z.onerror = k),
          document.head.appendChild(z));
      }),
    J = s.useCallback(async (c) => {
      const w = mo[c] || [];
      if (w.length === 0) return;
      const k = w.filter(
        (z) => !document.querySelector(`script[src="${Y[z]}"]`),
      );
      if (k.length === 0) {
        window.pdfjsLib &&
          !window.pdfjsLib.GlobalWorkerOptions.workerSrc &&
          (window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js");
        return;
      }
      if (c === "wordtopdf") for (const z of k) await K(Y[z]);
      else await Promise.all(k.map((z) => K(Y[z])));
      window.pdfjsLib &&
        (window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js");
    }, []);
  s.useEffect(() => {
    const c = Q[f.pathname];
    (c && c !== "dashboard"
      ? (y(c),
        F(!1),
        localStorage.setItem("ihatepdf_active_tool", c),
        J(c)
          .then(() => F(!0))
          .catch(() => F(!0)))
      : f.pathname === "/"
        ? (y("dashboard"),
          F(!0),
          localStorage.removeItem("ihatepdf_active_tool"))
        : F(!0),
      Promise.all([
        K("https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js"),
      ])
        .then(() => {
          (typeof window.download == "function"
            ? S("downloadjs")
            : document.createElement("a").download !== void 0
              ? S("html5")
              : S("fallback"),
            v(!0));
        })
        .catch(() => {
          v(!0);
        }));
  }, []);
  const d = s.useCallback(
      (c) => {
        (y(c),
          F(!1),
          o(ho[c] || "/"),
          setTimeout(() => localStorage.setItem("ihatepdf_active_tool", c), 0),
          c !== "dashboard"
            ? J(c)
                .then(() => F(!0))
                .catch(() => F(!0))
            : F(!0));
      },
      [o, J],
    ),
    [vo, yo] = s.useState(!1),
    Fe = s.useRef(!1);
  s.useEffect(() => {
    if (!Fe.current) {
      Fe.current = !0;
      return;
    }
    const c = G.find((w) => w.id === t);
    t === "dashboard"
      ? (document.title = "Free Online PDF Editor Without Watermark — ihatepdf")
      : c &&
        (document.title = `${c.title} — Free, No Upload, No Watermark | ihatepdf`);
  }, [t]);
  const l = s.useCallback((c, w = "success") => {
      (b({ msg: c, type: w }), setTimeout(() => b(null), 3e3));
    }, []),
    u = (c, w, k) => {
      r({ fileName: c, fileSize: w, fileBytes: k });
    },
    Ne = () => {
      r(null);
    },
    X = (c, w) => {
      Se({ fileName: c, fileBytes: w });
    },
    Ke = () => {
      Se(null);
    };
  (s.useEffect(
    () => (
      (window.showShareDialog = X),
      () => {
        delete window.showShareDialog;
      }
    ),
    [X],
  ),
    s.useEffect(() => {
      let c = null;
      const w = (k) => {
        if (k.key === "Escape" && B) {
          E(!1);
          return;
        }
        if ((k.ctrlKey || k.metaKey) && k.key === "k") {
          if (
            k.target.tagName === "INPUT" ||
            k.target.tagName === "TEXTAREA" ||
            k.target.isContentEditable ||
            k.target.closest('[contenteditable="true"]')
          )
            return;
          (k.preventDefault(),
            c && cancelAnimationFrame(c),
            (c = requestAnimationFrame(() => E(!0))));
        }
      };
      return (
        window.addEventListener("keydown", w),
        () => {
          (window.removeEventListener("keydown", w),
            c && cancelAnimationFrame(c));
        }
      );
    }, [B]),
    s.useEffect(() => {
      const c = () =>
          n(
            () => import("./ToolSearchModal-dkdd7EmT.js"),
            __vite__mapDeps([43, 1]),
          ),
        w =
          typeof requestIdleCallback == "function"
            ? requestIdleCallback(c)
            : setTimeout(c, 1500);
      return () => {
        typeof cancelIdleCallback == "function"
          ? cancelIdleCallback(w)
          : clearTimeout(w);
      };
    }, []));
  const Je = () => {
    if (t === "dashboard")
      return e.jsx(Kt, {
        setActiveTool: d,
        allTools: G,
        deferredPrompt: V,
        handleInstallClick: qe,
        showSafariInstructions: De,
        setShowSafariInstructions: W,
        globalSearchOpen: B,
        setGlobalSearchOpen: E,
      });
    if (!j || !$e)
      return e.jsxs("div", {
        role: "status",
        "aria-live": "polite",
        "aria-label": "Loading tool",
        className:
          "flex flex-col items-center justify-center h-full animate-pulse px-4 min-h-[400px]",
        children: [
          e.jsx("div", {
            "aria-hidden": "true",
            className:
              "w-10 h-10 border-2 border-zinc-600 border-t-blue-500 rounded-full animate-spin mb-4",
          }),
          e.jsx("p", {
            className: "text-zinc-500 text-sm font-medium text-center",
            children: "Loading tool...",
          }),
        ],
      });
    switch (t) {
      case "merge":
        return e.jsx(xt, { showNotification: l, showDownloadDialog: u });
      case "organize":
        return e.jsx(vt, { showNotification: l, showDownloadDialog: u });
      case "images":
        return e.jsx(yt, { showNotification: l, showDownloadDialog: u });
      case "extract":
        return e.jsx(It, { showNotification: l });
      case "compress":
        return e.jsx(mt, { showNotification: l, showDownloadDialog: u });
      case "redact":
        return e.jsx(kt, { showNotification: l, showDownloadDialog: u });
      case "cropresize":
        return e.jsx(Nt, { showNotification: l, showDownloadDialog: u });
      case "split":
        return e.jsx(gt, { showNotification: l, showDownloadDialog: u });
      case "watermark":
        return e.jsx(jt, { showNotification: l, showDownloadDialog: u });
      case "pagenumbers":
        return e.jsx(ht, { showNotification: l, showDownloadDialog: u });
      case "headerfooter":
        return e.jsx(Et, { showNotification: l, showDownloadDialog: u });
      case "compare":
        return e.jsx(Tt, { showNotification: l });
      case "pdftojpg":
        return e.jsx(zt, { showNotification: l, showDownloadDialog: u });
      case "chatpdf":
        return e.jsx(_t, { showNotification: l });
      case "removepassword":
        return e.jsx(Dt, { showNotification: l, showDownloadDialog: u });
      case "unlockpdf":
        return e.jsx(St, { showNotification: l, showDownloadDialog: u });
      case "fillform":
        return e.jsx(Ft, { showNotification: l, showDownloadDialog: u });
      case "encryptpdf":
        return e.jsx(ut, { showNotification: l, showDownloadDialog: u });
      case "markdownpdf":
        return e.jsx(Pt, { showNotification: l, showDownloadDialog: u });
      case "htmlpdf":
        return e.jsx(bt, { showNotification: l, showDownloadDialog: u });
      case "wordtopdf":
        return e.jsx(wt, { showNotification: l, showDownloadDialog: u });
      case "texttopdf":
        return e.jsx(ft, { showNotification: l, showDownloadDialog: u });
      case "editpdftext":
        return e.jsx(Le, { showNotification: l, showDownloadDialog: u });
      case "signpdf":
        return e.jsx(Le, {
          showNotification: l,
          showDownloadDialog: u,
          signatureMode: !0,
        });
      case "pdftodocx":
        return e.jsx(Lt, { showNotification: l, showDownloadDialog: u });
      case "ocr":
        return e.jsx(Ct, { showNotification: l, showDownloadDialog: u });
      case "repair":
        return e.jsx(At, { showNotification: l, showDownloadDialog: u });
      case "pdftoadudio":
        return e.jsx(Rt, { showNotification: l });
      case "gstinvoice":
        return e.jsx(Mt, { showNotification: l });
      case "summary":
        return e.jsx(Ot, { showNotification: l });
      case "exceltopdf":
        return e.jsx(Vt, { showNotification: l, showDownloadDialog: u });
      case "fingerprint":
        return e.jsx(Bt, { showNotification: l });
      case "flatten":
        return e.jsx(Wt, { showNotification: l, showDownloadDialog: u });
      case "csvpdf":
        return e.jsx(Ht, { showNotification: l, showDownloadDialog: u });
      case "pdfttoepub":
        return e.jsx(Gt, { showNotification: l });
      case "privacyscanner":
        return e.jsx(Te, { showNotification: l });
      case "autoredact":
        return e.jsx(Te, { showNotification: l });
      case "posbill":
        return e.jsx(Ut, { showNotification: l });
      case "invertpdf":
        return e.jsx($t, { showNotification: l });
      case "pdftohandwriting":
        return e.jsx(qt, { showNotification: l });
      case "handwritingtopdf":
        return e.jsx(Zt, { showNotification: l });
      case "p2pshare":
        return e.jsx(Xt, { showNotification: l });
      case "whiteboard":
        return e.jsx(Yt, { showNotification: l });
      case "camerascan":
        return e.jsx(Qt, { showNotification: l, showDownloadDialog: u });
      case "ebooktopdf":
        return e.jsx(eo, { showNotification: l, showDownloadDialog: u });
      case "pptxtopdf":
        return e.jsx(to, { showNotification: l, showDownloadDialog: u });
      case "pdftopptx":
        return e.jsx(oo, { showNotification: l, showDownloadDialog: u });
      case "pdftozip":
        return e.jsx(so, { showNotification: l, showDownloadDialog: u });
      case "rotatepdf":
        return e.jsx(ro, { showNotification: l, showDownloadDialog: u });
      case "audiotopdf":
        return e.jsx(io, { showNotification: l, showDownloadDialog: u });
      case "pdftoexcel":
        return e.jsx(ao, { showNotification: l, showDownloadDialog: u });
      case "pdftohtml":
        return e.jsx(no, { showNotification: l, showDownloadDialog: u });
      case "gstfilingprep":
        return e.jsx(lo, { showNotification: l });
      case "workflow":
        return e.jsx(co, { showNotification: l, showDownloadDialog: u });
    }
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rt, { clarityProjectId: "uqgxjgjxao" }),
      e.jsxs("div", {
        className: `flex flex-col md:flex-row h-screen w-full ${H.bg} ${H.text} font-sans overflow-hidden selection:bg-blue-500/30`,
        children: [
          e.jsx("aside", {
            "aria-label": "PDF tools navigation",
            className: `hidden md:flex w-20 lg:w-64 flex-shrink-0 flex-col ${H.panel} border-r ${H.border}`,
            children: e.jsxs("nav", {
              "aria-label": "PDF tools",
              className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
              children: [
                e.jsx(p, {
                  icon: Be,
                  label: "Dashboard",
                  id: "dashboard",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Scan & Wrokflow",
                }),
                e.jsx(p, {
                  icon: ve,
                  label: "Scan Document",
                  id: "camerascan",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: de,
                  label: "Workflow Builder",
                  id: "workflow",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Page Management",
                }),
                e.jsx(p, {
                  icon: ne,
                  label: "Merge PDFs",
                  id: "merge",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: ce,
                  label: "Compress PDF",
                  id: "compress",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: me,
                  label: "Split PDF",
                  id: "split",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: ae,
                  label: "Organize Pages",
                  id: "organize",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: U,
                  label: "Rotate PDF",
                  id: "rotatepdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: fe,
                  label: "Crop & Resize",
                  id: "cropresize",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: xe,
                  label: "PDF to ZIP",
                  id: "pdftozip",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Edit & Annotate",
                }),
                e.jsx(p, {
                  icon: I,
                  label: "Edit PDF & Signature",
                  id: "editpdftext",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: M,
                  label: "Sign PDF",
                  id: "signpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Fill PDF Form",
                  id: "fillform",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: pe,
                  label: "Redact PDF",
                  id: "redact",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: he,
                  label: "Add Watermark",
                  id: "watermark",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: ue,
                  label: "Page Numbers",
                  id: "pagenumbers",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: le,
                  label: "Headers & Footers",
                  id: "headerfooter",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: C,
                  label: "Flatten PDF",
                  id: "flatten",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: se,
                  label: "Invert PDF Colours",
                  id: "invertpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: re,
                  label: "PDF to Handwriting",
                  id: "pdftohandwriting",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: ie,
                  label: "Handwriting to PDF",
                  id: "handwritingtopdf",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Convert → PDF",
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Word to PDF",
                  id: "wordtopdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: L,
                  label: "Images to PDF",
                  id: "images",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Excel to PDF",
                  id: "exceltopdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "PowerPoint to PDF",
                  id: "pptxtopdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "HTML to PDF",
                  id: "htmlpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: I,
                  label: "Create PDF",
                  id: "texttopdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: N,
                  label: "Markdown to PDF",
                  id: "markdownpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "CSV ↔ PDF",
                  id: "csvpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: A,
                  label: "Audio to PDF",
                  id: "audiotopdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: N,
                  label: "eBook to PDF",
                  id: "ebooktopdf",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Convert → Other",
                }),
                e.jsx(p, {
                  icon: m,
                  label: "PDF to Word",
                  id: "pdftodocx",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: L,
                  label: "PDF to JPG",
                  id: "pdftojpg",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "PDF to Excel",
                  id: "pdftoexcel",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "PDF to PowerPoint",
                  id: "pdftopptx",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Extract Text",
                  id: "extract",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "PDF to HTML",
                  id: "pdftohtml",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: A,
                  label: "PDF to Audio",
                  id: "pdftoadudio",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: N,
                  label: "PDF to EPUB",
                  id: "pdfttoepub",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Security & Privacy",
                }),
                e.jsx(p, {
                  icon: C,
                  label: "Encrypt PDF",
                  id: "encryptpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: T,
                  label: "Remove Password",
                  id: "removepassword",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: T,
                  label: "Unlock PDF",
                  id: "unlockpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: R,
                  label: "Auto-Redact PII",
                  id: "autoredact",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: R,
                  label: "Privacy Scanner",
                  id: "privacyscanner",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Fingerprint Generator",
                  id: "fingerprint",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "AI Tools",
                }),
                e.jsx(p, {
                  icon: ge,
                  label: "Chat with PDF",
                  id: "chatpdf",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: oe,
                  label: "AI Summarizer",
                  id: "summary",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "Searchable PDF",
                  id: "ocr",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: je,
                  label: "Compare PDFs",
                  id: "compare",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: be,
                  label: "Repair PDF",
                  id: "repair",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Business",
                }),
                e.jsx(p, {
                  icon: m,
                  label: "GST Invoice",
                  id: "gstinvoice",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "POS Billing",
                  id: "posbill",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: m,
                  label: "GST Filing Prep",
                  id: "gstfilingprep",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Collaborate & Share",
                }),
                e.jsx(p, {
                  icon: we,
                  label: "P2P File Share",
                  id: "p2pshare",
                  active: t,
                  set: d,
                }),
                e.jsx(p, {
                  icon: M,
                  label: "Collab Whiteboard",
                  id: "whiteboard",
                  active: t,
                  set: d,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hidden lg:block",
                  children: "Resources",
                }),
                e.jsxs("a", {
                  href: "/resources",
                  className:
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-zinc-400 hover:text-white hover:bg-zinc-900",
                  children: [
                    e.jsx(m, { className: "w-4 h-4 text-zinc-500" }),
                    e.jsx("span", {
                      className: "hidden lg:block text-sm font-medium",
                      children: "Technical Blog",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("main", {
            "aria-label": "PDF tool workspace",
            className:
              "flex-1 flex flex-col relative overflow-hidden bg-zinc-950",
            children: [
              e.jsxs("header", {
                className:
                  "md:hidden h-14 bg-[#0d0d0d] border-b border-white/[0.06] flex items-center px-1 z-20 flex-shrink-0",
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 flex items-center justify-start flex-shrink-0",
                    children: e.jsx("button", {
                      onClick: () => O(!0),
                      "aria-label": "Open navigation menu",
                      "aria-expanded": D,
                      "aria-controls": "mobile-drawer",
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-xl text-zinc-500 active:bg-white/[0.07] active:text-zinc-200 transition-colors duration-100",
                      children: e.jsx(fo, {
                        "aria-hidden": "true",
                        className: "w-[19px] h-[19px]",
                      }),
                    }),
                  }),
                  e.jsxs("button", {
                    onClick: () => d("dashboard"),
                    "aria-label": "Go to dashboard",
                    className:
                      "flex-1 flex items-center justify-center gap-[7px] h-full active:opacity-50 transition-opacity duration-100 select-none",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-[27px] h-[27px] bg-white/[0.07] rounded-[8px] flex items-center justify-center ring-1 ring-white/[0.09] flex-shrink-0",
                        children: e.jsx(ee, {
                          "aria-hidden": "true",
                          className: "w-[15px] h-[15px] text-white",
                        }),
                      }),
                      e.jsx("span", {
                        className:
                          "text-[15px] font-semibold tracking-[-0.03em] text-white leading-none",
                        children: "ihatepdf.cv",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "w-20 flex items-center justify-end flex-shrink-0",
                    children: [
                      t !== "dashboard" &&
                        e.jsx("button", {
                          onClick: () => E(!0),
                          "aria-label": "Search tools",
                          className: "p-2 text-zinc-400 hover:text-white",
                          children: e.jsx(xo, {
                            "aria-hidden": "true",
                            className: "w-4 h-4",
                          }),
                        }),
                      t !== "dashboard" &&
                        e.jsx("button", {
                          onClick: () => d("dashboard"),
                          "aria-label": "Close tool and go to dashboard",
                          className:
                            "w-10 h-10 flex items-center justify-center rounded-xl text-zinc-500 active:bg-white/[0.07] active:text-zinc-200 transition-colors duration-100",
                          children: e.jsx(te, {
                            "aria-hidden": "true",
                            className: "w-[17px] h-[17px]",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex-1 overflow-y-auto p-4 md:p-8 relative scroll-smooth min-h-0",
                children: e.jsx(s.Suspense, {
                  fallback: e.jsxs("div", {
                    role: "status",
                    "aria-live": "polite",
                    "aria-label": "Loading tool",
                    className:
                      "flex flex-col items-center justify-center h-full animate-pulse px-4 min-h-[400px]",
                    children: [
                      e.jsx("div", {
                        "aria-hidden": "true",
                        className:
                          "w-10 h-10 border-2 border-zinc-600 border-t-blue-500 rounded-full animate-spin mb-4",
                      }),
                      e.jsx("p", {
                        className:
                          "text-zinc-500 text-sm font-medium text-center",
                        children: "Loading tool...",
                      }),
                    ],
                  }),
                  children: Je(),
                }),
              }),
              h &&
                e.jsxs("div", {
                  role: "alert",
                  "aria-live": "assertive",
                  className: `absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-8 w-max max-w-[90vw] px-4 py-3 rounded border shadow-2xl flex items-center gap-3 z-50 animate-in slide-in-from-bottom-5 fade-in duration-200 ${h.type === "error" ? "bg-zinc-900 border-red-900/50 text-red-200" : "bg-zinc-900 border-zinc-700 text-zinc-100"}`,
                  children: [
                    h.type === "error"
                      ? e.jsx(Ce, {
                          "aria-hidden": "true",
                          className: "w-4 h-4 text-red-500",
                        })
                      : e.jsx(po, {
                          "aria-hidden": "true",
                          className: "w-4 h-4 text-emerald-500",
                        }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: h.msg,
                    }),
                  ],
                }),
              B &&
                e.jsx("div", {
                  className:
                    "fixed inset-0 z-[300] flex items-start justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4 pt-4 md:pt-[20vh]",
                  onClick: () => E(!1),
                  children: e.jsx(s.Suspense, {
                    fallback: null,
                    children: e.jsx(Jt, {
                      tools: G,
                      onSelectTool: (c) => {
                        (d(c), E(!1));
                      },
                      onClose: () => E(!1),
                    }),
                  }),
                }),
              P &&
                e.jsx(go, {
                  fileName: P.fileName,
                  fileSize: P.fileSize,
                  onClose: Ne,
                  onShare: () => {
                    (Ne(), X(P.fileName, P.fileBytes));
                  },
                }),
              Z &&
                e.jsx(jo, {
                  fileName: Z.fileName,
                  fileBytes: Z.fileBytes,
                  onClose: Ke,
                }),
              e.jsx(uo, {
                isOpen: D,
                onClose: () => O(!1),
                activeTool: t,
                setActiveTool: d,
                allTools: G,
              }),
            ],
          }),
          De &&
            Re() &&
            !Me() &&
            e.jsxs("div", {
              className:
                "fixed bottom-0 left-0 right-0 md:bottom-4 md:left-auto md:right-4 md:w-96 bg-zinc-900 border border-zinc-800 md:rounded-xl rounded-t-2xl shadow-2xl z-[100] animate-in slide-in-from-bottom-5 duration-300",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between px-5 pt-5 pb-3 border-b border-zinc-800",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                          children: e.jsx(ee, {
                            className: "w-5 h-5 text-white",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-white font-semibold text-base leading-tight",
                              children: "Install ihatepdf.cv",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-500 text-xs mt-0.5",
                              children: Ae() ? "iPhone / iPad" : "Mac Safari",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      "aria-label": "Close",
                      onClick: () => W(!1),
                      className:
                        "p-1.5 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors",
                      children: e.jsx(te, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "px-5 py-4 space-y-3",
                  children: Ae()
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",
                                children: "1",
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-300 text-sm",
                                children: [
                                  "Tap the",
                                  " ",
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: "Share button",
                                  }),
                                  " at the bottom of Safari",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",
                                children: "2",
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-300 text-sm",
                                children: [
                                  "Scroll down and tap",
                                  " ",
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: '"Add to Home Screen"',
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",
                                children: "3",
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-300 text-sm",
                                children: [
                                  "Tap ",
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: '"Add"',
                                  }),
                                  " in the top right corner",
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",
                                children: "1",
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-300 text-sm",
                                children: [
                                  "Click ",
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: "File",
                                  }),
                                  " in the menu bar",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 rounded-full bg-zinc-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0",
                                children: "2",
                              }),
                              e.jsxs("p", {
                                className: "text-zinc-300 text-sm",
                                children: [
                                  "Select",
                                  " ",
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: '"Add to Dock"',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
                e.jsx("div", {
                  className: "px-5 pb-6 pt-1",
                  children: e.jsx("button", {
                    onClick: () => W(!1),
                    className:
                      "w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 rounded-xl transition-colors",
                    children: "Got it",
                  }),
                }),
              ],
            }),
          Ge &&
            e.jsx("div", {
              className:
                "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-zinc-800/60 backdrop-blur-xl border border-zinc-600/40 rounded-xl shadow-2xl p-4 z-[100] animate-in slide-in-from-bottom-5 duration-300",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center flex-shrink-0",
                    children: e.jsx(U, { className: "w-5 h-5 text-white" }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsx("h3", {
                        className: "text-white font-semibold mb-1",
                        children: "Update Available",
                      }),
                      e.jsx("p", {
                        className: "text-zinc-300 text-sm mb-3",
                        children:
                          "A new version of ihatepdf.cv is ready to install",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("button", {
                            onClick: Ze,
                            className:
                              "flex-1 bg-white hover:bg-zinc-100 text-zinc-900 font-medium py-2 px-4 rounded-lg transition-colors shadow-lg",
                            children: "Update Now",
                          }),
                          e.jsx("button", {
                            onClick: () => q(!1),
                            className:
                              "px-4 py-2 text-zinc-400 hover:text-white transition-colors",
                            children: "Later",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          !He &&
            e.jsxs("div", {
              className:
                "fixed top-16 md:top-20 left-1/2 -translate-x-1/2 bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center gap-2 animate-in slide-in-from-top-5 duration-300",
              children: [
                e.jsx(Ce, { className: "w-4 h-4" }),
                e.jsx("span", {
                  className: "text-sm font-medium",
                  children: "Offline Mode - Changes saved locally",
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
const p = ({ icon: o, label: f, id: t, active: y, set: h }) => {
    const b = $(),
      v =
        {
          dashboard: "/",
          merge: "/merge-pdf",
          organize: "/organize-pages",
          images: "/images-to-pdf",
          extract: "/extract-text",
          compress: "/compress-pdf",
          cropresize: "/crop-resize-pdf",
          split: "/split-pdf",
          watermark: "/add-watermark",
          pagenumbers: "/page-numbers",
          headerfooter: "/headers-footers",
          compare: "/compare-pdfs",
          pdftojpg: "/pdf-to-jpg",
          chatpdf: "/chat-with-pdf",
          removepassword: "/remove-password",
          unlockpdf: "/unlock-pdf",
          fillform: "/fill-pdf-form",
          autoredact: "/auto-redact-pii",
          encryptpdf: "/encrypt-pdf",
          redact: "/redact-pdf",
          htmlpdf: "/html-to-pdf",
          wordtopdf: "/word-to-pdf",
          texttopdf: "/create-pdf",
          markdownpdf: "/markdown-to-pdf",
          pdftodocx: "/pdf-to-word",
          editpdftext: "/edit-pdf-text",
          signpdf: "/sign-pdf",
          ocr: "/ocr-pdf",
          repair: "/repair-pdf",
          pdftoadudio: "/pdf-to-audio",
          gstinvoice: "/gst-invoice",
          summary: "/summarize-pdf",
          exceltopdf: "/excel-to-pdf",
          flatten: "/flatten-pdf",
          fingerprint: "/fingerprint-pdf",
          csvpdf: "/csv-to-pdf",
          pdfttoepub: "/pdf-to-epub",
          privacyscanner: "/privacy-scanner",
          posbill: "/pos-billing",
          invertpdf: "/invert-pdf",
          pdftohandwriting: "/pdf-to-handwriting",
          handwritingtopdf: "/handwriting-to-pdf",
          p2pshare: "/p2p-share",
          whiteboard: "/collab-whiteboard",
          camerascan: "/scan-to-pdf",
          ebooktopdf: "/ebook-to-pdf",
          pptxtopdf: "/pptx-to-pdf",
          pdftopptx: "/pdf-to-pptx",
          pdftozip: "/pdf-to-zip",
          rotatepdf: "/rotate-pdf",
          audiotopdf: "/audio-to-pdf",
          pdftoexcel: "/pdf-to-excel",
          pdftohtml: "/pdf-to-html",
          gstfilingprep: "/gst-filing-prep",
          workflow: "/workflow",
        }[t] || "/",
      P = (r) => {
        (r.preventDefault(), h(t), b(v));
      };
    return e.jsxs("a", {
      href: v,
      onClick: P,
      "aria-label": f,
      "aria-current": y === t ? "page" : void 0,
      className: `w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group no-underline ${y === t ? "bg-zinc-800 text-white shadow-inner" : "text-zinc-400 hover:text-white hover:bg-zinc-900"}`,
      children: [
        e.jsx(o, {
          "aria-hidden": "true",
          className: `w-4 h-4 ${y === t ? "text-blue-400" : "text-zinc-500 group-hover:text-zinc-300"}`,
        }),
        e.jsx("span", {
          className: "hidden lg:block text-sm font-medium",
          children: f,
        }),
      ],
    });
  },
  x = ({ icon: o, label: f, toolId: t, activeTool: y, onSelect: h }) => {
    const b = $(),
      v =
        {
          dashboard: "/",
          merge: "/merge-pdf",
          organize: "/organize-pages",
          images: "/images-to-pdf",
          extract: "/extract-text",
          compress: "/compress-pdf",
          cropresize: "/crop-resize-pdf",
          split: "/split-pdf",
          watermark: "/add-watermark",
          pagenumbers: "/page-numbers",
          headerfooter: "/headers-footers",
          compare: "/compare-pdfs",
          pdftojpg: "/pdf-to-jpg",
          chatpdf: "/chat-with-pdf",
          removepassword: "/remove-password",
          unlockpdf: "/unlock-pdf",
          fillform: "/fill-pdf-form",
          autoredact: "/auto-redact-pii",
          encryptpdf: "/encrypt-pdf",
          redact: "/redact-pdf",
          htmlpdf: "/html-to-pdf",
          wordtopdf: "/word-to-pdf",
          texttopdf: "/create-pdf",
          markdownpdf: "/markdown-to-pdf",
          pdftodocx: "/pdf-to-word",
          editpdftext: "/edit-pdf-text",
          signpdf: "/sign-pdf",
          ocr: "/ocr-pdf",
          repair: "/repair-pdf",
          pdftoadudio: "/pdf-to-audio",
          gstinvoice: "/gst-invoice",
          summary: "/summarize-pdf",
          exceltopdf: "/excel-to-pdf",
          flatten: "/flatten-pdf",
          fingerprint: "/fingerprint-pdf",
          csvpdf: "/csv-to-pdf",
          pdfttoepub: "/pdf-to-epub",
          privacyscanner: "/privacy-scanner",
          posbill: "/pos-billing",
          invertpdf: "/invert-pdf",
          pdftohandwriting: "/pdf-to-handwriting",
          handwritingtopdf: "/handwriting-to-pdf",
          p2pshare: "/p2p-share",
          whiteboard: "/collab-whiteboard",
          camerascan: "/scan-to-pdf",
          ebooktopdf: "/ebook-to-pdf",
          pptxtopdf: "/pptx-to-pdf",
          pdftopptx: "/pdf-to-pptx",
          pdftozip: "/pdf-to-zip",
          rotatepdf: "/rotate-pdf",
          audiotopdf: "/audio-to-pdf",
          pdftoexcel: "/pdf-to-excel",
          pdftohtml: "/pdf-to-html",
          gstfilingprep: "/gst-filing-prep",
          workflow: "/workflow",
        }[t] || "/",
      P = y === t,
      r = (_) => {
        (_.preventDefault(), h(t), b(v));
      };
    return e.jsxs("a", {
      href: v,
      onClick: r,
      className: `w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 no-underline ${P ? "bg-zinc-800 text-white shadow-inner" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`,
      children: [
        e.jsx(o, {
          className: `w-4 h-4 ${P ? "text-blue-400" : "text-zinc-500"}`,
        }),
        e.jsx("span", { className: "text-sm font-medium", children: f }),
      ],
    });
  },
  uo = ({
    isOpen: o,
    onClose: f,
    activeTool: t,
    setActiveTool: y,
    allTools: h = [],
    globalSearchOpen: b,
    setGlobalSearchOpen: j,
  }) => {
    const v = $(),
      P = {
        dashboard: "/",
        merge: "/merge-pdf",
        organize: "/organize-pages",
        images: "/images-to-pdf",
        extract: "/extract-text",
        compress: "/compress-pdf",
        cropresize: "/crop-resize-pdf",
        split: "/split-pdf",
        watermark: "/add-watermark",
        pagenumbers: "/page-numbers",
        headerfooter: "/headers-footers",
        compare: "/compare-pdfs",
        pdftojpg: "/pdf-to-jpg",
        chatpdf: "/chat-with-pdf",
        removepassword: "/remove-password",
        unlockpdf: "/unlock-pdf",
        fillform: "/fill-pdf-form",
        autoredact: "/auto-redact-pii",
        encryptpdf: "/encrypt-pdf",
        redact: "/redact-pdf",
        htmlpdf: "/html-to-pdf",
        wordtopdf: "/word-to-pdf",
        texttopdf: "/create-pdf",
        markdownpdf: "/markdown-to-pdf",
        pdftodocx: "/pdf-to-word",
        editpdftext: "/edit-pdf-text",
        signpdf: "/sign-pdf",
        ocr: "/ocr-pdf",
        repair: "/repair-pdf",
        pdftoadudio: "/pdf-to-audio",
        gstinvoice: "/gst-invoice",
        summary: "/summarize-pdf",
        exceltopdf: "/excel-to-pdf",
        flatten: "/flatten-pdf",
        fingerprint: "/fingerprint-pdf",
        csvpdf: "/csv-to-pdf",
        pdfttoepub: "/pdf-to-epub",
        privacyscanner: "/privacy-scanner",
        posbill: "/pos-billing",
        invertpdf: "/invert-pdf",
        pdftohandwriting: "/pdf-to-handwriting",
        handwritingtopdf: "/handwriting-to-pdf",
        p2pshare: "/p2p-share",
        whiteboard: "/collab-whiteboard",
        camerascan: "/scan-to-pdf",
        ebooktopdf: "/ebook-to-pdf",
        pptxtopdf: "/pptx-to-pdf",
        pdftopptx: "/pdf-to-pptx",
        pdftozip: "/pdf-to-zip",
        rotatepdf: "/rotate-pdf",
        audiotopdf: "/audio-to-pdf",
        pdftoexcel: "/pdf-to-excel",
        pdftohtml: "/pdf-to-html",
        gstfilingprep: "/gst-filing-prep",
        workflow: "/workflow",
      },
      r = (_) => {
        (y(_), v(P[_] || "/"), f());
      };
    return e.jsxs(e.Fragment, {
      children: [
        o &&
          e.jsx("div", {
            className:
              "fixed inset-0 bg-black/60 z-[60] md:hidden animate-in fade-in duration-200",
            onClick: f,
          }),
        e.jsxs("div", {
          id: "mobile-drawer",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Navigation menu",
          className: `fixed top-0 left-0 bottom-0 w-72 bg-zinc-900 border-r border-zinc-800 z-[70] md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${o ? "translate-x-0" : "-translate-x-full"}`,
          children: [
            e.jsxs("div", {
              className:
                "p-6 flex items-center justify-between border-b border-zinc-800",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 bg-black-600 rounded flex items-center justify-center shadow-sm",
                      children: e.jsx(ee, { className: "text-white w-5 h-5" }),
                    }),
                    e.jsx("span", {
                      className: "text-lg font-bold tracking-tight text-white",
                      children: "ihatepdf.cv",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: f,
                  "aria-label": "Close navigation menu",
                  className:
                    "p-2 text-zinc-400 hover:text-white transition-colors",
                  children: e.jsx(te, {
                    "aria-hidden": "true",
                    className: "w-5 h-5",
                  }),
                }),
              ],
            }),
            e.jsxs("nav", {
              className: "flex-1 overflow-y-auto py-4 px-3 space-y-1",
              children: [
                e.jsxs("button", {
                  onClick: () => r("dashboard"),
                  className: `w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${t === "dashboard" ? "bg-zinc-800 text-white shadow-inner" : "text-zinc-400 hover:text-white hover:bg-zinc-800"}`,
                  children: [
                    e.jsx(Be, {
                      className: `w-4 h-4 ${t === "dashboard" ? "text-blue-400" : "text-zinc-500"}`,
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "Dashboard",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Scan & Workflow",
                }),
                e.jsx(x, {
                  icon: ve,
                  label: "Scan Document",
                  toolId: "camerascan",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: de,
                  label: "Workflow Builder",
                  toolId: "workflow",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Page Management",
                }),
                e.jsx(x, {
                  icon: ne,
                  label: "Merge PDFs",
                  toolId: "merge",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: ce,
                  label: "Compress PDF",
                  toolId: "compress",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: me,
                  label: "Split PDF",
                  toolId: "split",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: ae,
                  label: "Organize Pages",
                  toolId: "organize",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: U,
                  label: "Rotate PDF",
                  toolId: "rotatepdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: fe,
                  label: "Crop & Resize",
                  toolId: "cropresize",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: xe,
                  label: "PDF to ZIP",
                  toolId: "pdftozip",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Edit & Annotate",
                }),
                e.jsx(x, {
                  icon: I,
                  label: "Edit PDF & Signature",
                  toolId: "editpdftext",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: M,
                  label: "Sign PDF",
                  toolId: "signpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Fill PDF Form",
                  toolId: "fillform",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: pe,
                  label: "Redact PDF",
                  toolId: "redact",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: he,
                  label: "Add Watermark",
                  toolId: "watermark",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: ue,
                  label: "Page Numbers",
                  toolId: "pagenumbers",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: le,
                  label: "Headers & Footers",
                  toolId: "headerfooter",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: C,
                  label: "Flatten PDF",
                  toolId: "flatten",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: se,
                  label: "Invert PDF Colours",
                  toolId: "invertpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: re,
                  label: "PDF to Handwriting",
                  toolId: "pdftohandwriting",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: ie,
                  label: "Handwriting to PDF",
                  toolId: "handwritingtopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Convert → PDF",
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Word to PDF",
                  toolId: "wordtopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: L,
                  label: "Images to PDF",
                  toolId: "images",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Excel to PDF",
                  toolId: "exceltopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "PowerPoint to PDF",
                  toolId: "pptxtopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "HTML to PDF",
                  toolId: "htmlpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: I,
                  label: "Create PDF",
                  toolId: "texttopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: N,
                  label: "Markdown to PDF",
                  toolId: "markdownpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "CSV ↔ PDF",
                  toolId: "csvpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: A,
                  label: "Audio to PDF",
                  toolId: "audiotopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: N,
                  label: "eBook to PDF",
                  toolId: "ebooktopdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Convert → Other",
                }),
                e.jsx(x, {
                  icon: m,
                  label: "PDF to Word",
                  toolId: "pdftodocx",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: L,
                  label: "PDF to JPG",
                  toolId: "pdftojpg",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "PDF to Excel",
                  toolId: "pdftoexcel",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "PDF to PowerPoint",
                  toolId: "pdftopptx",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Extract Text",
                  toolId: "extract",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "PDF to HTML",
                  toolId: "pdftohtml",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: A,
                  label: "PDF to Audio",
                  toolId: "pdftoadudio",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: N,
                  label: "PDF to EPUB",
                  toolId: "pdfttoepub",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Security & Privacy",
                }),
                e.jsx(x, {
                  icon: C,
                  label: "Encrypt PDF",
                  toolId: "encryptpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: T,
                  label: "Remove Password",
                  toolId: "removepassword",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: T,
                  label: "Unlock PDF",
                  toolId: "unlockpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: R,
                  label: "Auto-Redact PII",
                  toolId: "autoredact",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: R,
                  label: "Privacy Scanner",
                  toolId: "privacyscanner",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Fingerprint Generator",
                  toolId: "fingerprint",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "AI Tools",
                }),
                e.jsx(x, {
                  icon: ge,
                  label: "Chat with PDF",
                  toolId: "chatpdf",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: oe,
                  label: "AI Summarizer",
                  toolId: "summary",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "Searchable PDF",
                  toolId: "ocr",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: je,
                  label: "Compare PDFs",
                  toolId: "compare",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: be,
                  label: "Repair PDF",
                  toolId: "repair",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Business",
                }),
                e.jsx(x, {
                  icon: m,
                  label: "GST Invoice",
                  toolId: "gstinvoice",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "POS Billing",
                  toolId: "posbill",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: m,
                  label: "GST Filing Prep",
                  toolId: "gstfilingprep",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Collaborate & Share",
                }),
                e.jsx(x, {
                  icon: we,
                  label: "P2P File Share",
                  toolId: "p2pshare",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx(x, {
                  icon: M,
                  label: "Collab Whiteboard",
                  toolId: "whiteboard",
                  activeTool: t,
                  onSelect: r,
                }),
                e.jsx("div", {
                  className:
                    "pt-6 pb-2 px-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                  children: "Resources",
                }),
                e.jsxs("a", {
                  href: "/resources",
                  onClick: f,
                  className:
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-zinc-400 hover:text-white hover:bg-zinc-800",
                  children: [
                    e.jsx(m, { className: "w-4 h-4 text-zinc-500" }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "Technical Blog",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  jo = ({ fileName: o, fileBytes: f, onClose: t }) => {
    const [y, h] = s.useState(!1),
      b = async () => {
        try {
          if (navigator.share && f) {
            const j = new Blob([f], { type: "application/pdf" }),
              v = new File([j], o || "document.pdf", {
                type: "application/pdf",
              });
            (await navigator.share({ files: [v], title: o || "document.pdf" }),
              h(!0));
          } else
            navigator.share
              ? (await navigator.share({
                  title: o || "document.pdf",
                  url: window.location.href,
                }),
                h(!0))
              : (await navigator.clipboard.writeText(window.location.href),
                h(!0));
        } catch (j) {
          j.name !== "AbortError" && console.error("Share failed:", j);
        }
      };
    return e.jsx("div", {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "share-dialog-title",
      className:
        "fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-0 sm:p-4",
      onClick: t,
      children: e.jsxs("div", {
        className:
          "w-full sm:max-w-sm bg-zinc-950 border border-zinc-800 sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300 overflow-hidden",
        onClick: (j) => j.stopPropagation(),
        children: [
          e.jsx("div", {
            className: "flex justify-center pt-3 pb-1 sm:hidden",
            children: e.jsx("div", {
              className: "w-9 h-1 rounded-full bg-zinc-700",
            }),
          }),
          e.jsxs("div", {
            className:
              "flex items-center justify-between px-5 pt-4 pb-3 sm:pt-6",
            children: [
              e.jsx("h3", {
                id: "share-dialog-title",
                className: "text-white font-semibold text-base",
                children: "Share",
              }),
              e.jsx("button", {
                onClick: t,
                "aria-label": "Close",
                className:
                  "w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors",
                children: e.jsx("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 10 10",
                  fill: "none",
                  children: e.jsx("path", {
                    d: "M2 2L8 8M8 2L2 8",
                    stroke: "#888",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "px-5 pb-5 space-y-2.5",
            children: [
              typeof navigator < "u" &&
                navigator.share &&
                e.jsxs("button", {
                  onClick: b,
                  className:
                    "w-full flex items-center gap-3 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl transition-all duration-150 text-left",
                  children: [
                    e.jsxs("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      children: [
                        e.jsx("circle", {
                          cx: "13",
                          cy: "3",
                          r: "2",
                          stroke: "#71717a",
                          strokeWidth: "1.2",
                        }),
                        e.jsx("circle", {
                          cx: "3",
                          cy: "8",
                          r: "2",
                          stroke: "#71717a",
                          strokeWidth: "1.2",
                        }),
                        e.jsx("circle", {
                          cx: "13",
                          cy: "13",
                          r: "2",
                          stroke: "#71717a",
                          strokeWidth: "1.2",
                        }),
                        e.jsx("path", {
                          d: "M5 7.1L11 4.4M5 8.9L11 11.6",
                          stroke: "#71717a",
                          strokeWidth: "1.2",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "text-zinc-300 text-sm font-medium",
                      children: "Share file",
                    }),
                  ],
                }),
              e.jsx("button", {
                onClick: t,
                className:
                  "w-full bg-white hover:bg-zinc-100 active:scale-[0.98] text-black font-semibold text-sm py-3 rounded-xl transition-all duration-150 mt-1",
                children: "Done",
              }),
            ],
          }),
          e.jsx("div", { className: "pb-1 sm:hidden" }),
        ],
      }),
    });
  },
  go = ({ fileName: o, fileSize: f, onClose: t, onShare: y }) => {
    const h = (j) =>
        j
          ? j < 1048576
            ? `${(j / 1024).toFixed(0)} KB`
            : `${(j / 1024 / 1024).toFixed(2)} MB`
          : null,
      b = (j) => {
        if (!j) return "PDF";
        const v = j.split(".");
        return v.length > 1 ? v[v.length - 1].toUpperCase() : "PDF";
      };
    return e.jsx("div", {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "download-dialog-title",
      className:
        "fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 p-0 sm:p-4",
      onClick: t,
      children: e.jsxs("div", {
        className:
          "w-full sm:max-w-sm bg-zinc-950 border border-zinc-800 sm:rounded-2xl rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300 overflow-hidden",
        onClick: (j) => j.stopPropagation(),
        children: [
          e.jsx("div", {
            className: "flex justify-center pt-3 pb-1 sm:hidden",
            children: e.jsx("div", {
              className: "w-9 h-1 rounded-full bg-zinc-700",
            }),
          }),
          e.jsxs("div", {
            className:
              "flex items-center justify-between px-5 pt-4 pb-3 sm:pt-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0",
                    children: e.jsx("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "none",
                      children: e.jsx("path", {
                        d: "M3 8.5L6.5 12L13 5",
                        stroke: "#000",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        id: "download-dialog-title",
                        className:
                          "text-white font-semibold text-base leading-tight",
                        children: "Download complete",
                      }),
                      e.jsx("p", {
                        className: "text-zinc-500 text-xs mt-0.5 leading-tight",
                        children: "Processed entirely on your device",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: t,
                "aria-label": "Close",
                className:
                  "w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors flex-shrink-0",
                children: e.jsx("svg", {
                  width: "10",
                  height: "10",
                  viewBox: "0 0 10 10",
                  fill: "none",
                  children: e.jsx("path", {
                    d: "M2 2L8 8M8 2L2 8",
                    stroke: "#888",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mx-5 mb-3 mt-1 bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 flex items-center gap-3",
            children: [
              e.jsx("div", {
                className:
                  "w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex flex-col items-center justify-center flex-shrink-0",
                children: e.jsx("span", {
                  className:
                    "text-white font-bold text-[9px] tracking-wide leading-none",
                  children: b(o),
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className:
                      "text-white text-sm font-medium truncate leading-tight",
                    title: o,
                    children: o || "document.pdf",
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mt-0.5",
                    children: [
                      f &&
                        e.jsx("span", {
                          className: "text-zinc-500 text-xs",
                          children: h(f),
                        }),
                      e.jsx("span", {
                        className: "text-zinc-700 text-xs",
                        children: "·",
                      }),
                      e.jsx("span", {
                        className: "text-zinc-500 text-xs",
                        children: "Saved to Downloads",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-shrink-0",
                children: e.jsx("div", {
                  className:
                    "w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center",
                  children: e.jsx("svg", {
                    width: "9",
                    height: "9",
                    viewBox: "0 0 9 9",
                    fill: "none",
                    children: e.jsx("path", {
                      d: "M2 4.5L4 6.5L7 3",
                      stroke: "#52525b",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mx-5 mb-4 flex items-start gap-2",
            children: [
              e.jsx("svg", {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                className: "mt-0.5 flex-shrink-0",
                children: e.jsx("path", {
                  d: "M6 1L1.5 3v3c0 2.5 1.9 4.8 4.5 5.5C8.6 10.8 10.5 8.5 10.5 6V3L6 1z",
                  stroke: "#52525b",
                  strokeWidth: "1",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
              e.jsx("p", {
                className: "text-zinc-600 text-[11px] leading-relaxed",
                children:
                  "Your file never left your device — no servers, no storage, no tracking.",
              }),
            ],
          }),
          e.jsx("div", { className: "border-t border-zinc-800 mx-0" }),
          e.jsxs("div", {
            className: "px-5 py-4 space-y-2.5",
            children: [
              e.jsxs("a", {
                href: "https://razorpay.me/@ihatepdfcv",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-full flex items-center justify-between px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl transition-all duration-150 group no-underline",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-2 h-2 rounded-full bg-[#d4a017] flex-shrink-0",
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[#e8c878] text-sm font-semibold leading-tight",
                            children: "Support ihatepdf.cv",
                          }),
                          e.jsx("p", {
                            className: "text-[#7a6030] text-xs mt-0.5",
                            children: "Help keep this free",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx("span", {
                        className: "text-zinc-600 text-xs",
                        children: "Free forever",
                      }),
                      e.jsx("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        className:
                          "group-hover:translate-x-0.5 transition-transform",
                        children: e.jsx("path", {
                          d: "M2 5h6M5.5 2.5L8 5l-2.5 2.5",
                          stroke: "#52525b",
                          strokeWidth: "1.2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: t,
                className:
                  "w-full bg-white hover:bg-zinc-100 active:scale-[0.98] text-black font-semibold text-sm py-3 rounded-xl transition-all duration-150",
                children: "Done",
              }),
            ],
          }),
          e.jsx("div", {
            className: "h-safe-area-inset-bottom sm:hidden pb-1",
          }),
        ],
      }),
    });
  },
  bo = s.lazy(() =>
    n(() => import("./Blog-GoU6g3km.js"), __vite__mapDeps([57, 1])),
  ),
  wo = s.lazy(() =>
    n(() => import("./BlogPost-C8zx0wrA.js"), __vite__mapDeps([58, 1, 59])),
  ),
  Oe = s.lazy(() =>
    n(() => import("./BlogIndex-vf6xaC3P.js"), __vite__mapDeps([60, 1, 59])),
  );
Qe.createRoot(document.getElementById("root")).render(
  e.jsx(et, {
    children: e.jsx(s.Suspense, {
      fallback: null,
      children: e.jsxs(tt, {
        children: [
          e.jsx(i, { path: "/", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/merge-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/organize-pages", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/images-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/extract-text", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/compress-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/crop-resize-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/split-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/add-watermark", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/page-numbers", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/headers-footers", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/compare-pdfs", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-jpg", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/chat-with-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/resources", element: e.jsx(Oe, {}) }),
          e.jsx(i, { path: "/remove-password", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/unlock-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/fill-pdf-form", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/auto-redact-pii", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/markdown-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/encrypt-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/redact-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/html-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/word-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/create-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/edit-pdf-text", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/sign-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-word", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/blog", element: e.jsx(Oe, {}) }),
          e.jsx(i, { path: "/blog/:slug", element: e.jsx(wo, {}) }),
          e.jsx(i, { path: "/ocr-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/repair-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-audio", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/gst-invoice", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/summarize-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/excel-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/flatten-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/fingerprint-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/csv-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-epub", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/privacy-scanner", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pos-billing", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/invert-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-handwriting", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/handwriting-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/p2p-share", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/collab-whiteboard", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/scan-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/ebook-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pptx-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-pptx", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-zip", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/rotate-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/audio-to-pdf", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-html", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-excel", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/technical-blog", element: e.jsx(bo, {}) }),
          e.jsx(i, { path: "/gst-filing-prep", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/workflow", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/compress-pdf-to-100kb", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/compress-pdf-to-200kb", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/compress-pdf-to-2mb", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-jpg-300-dpi", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/pdf-to-jpg-600-dpi", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/ilovepdf-alternative", element: e.jsx(a, {}) }),
          e.jsx(i, { path: "/smallpdf-alternative", element: e.jsx(a, {}) }),
          e.jsx(i, {
            path: "/adobe-acrobat-alternative",
            element: e.jsx(a, {}),
          }),
        ],
      }),
    }),
  }),
);
export { oe as S, We as c };
