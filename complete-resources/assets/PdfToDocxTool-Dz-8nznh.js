import { r as W, j as c } from "./react-vendor-Bc7KCos-.js";
const G = ({ children: e, className: n }) =>
    c.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: n,
      children: e,
    }),
  Re = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        c.jsx("polyline", { points: "14 2 14 8 20 8" }),
        c.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        c.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      ],
    }),
  De = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        c.jsx("polyline", { points: "17 8 12 3 7 8" }),
        c.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  Le = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        c.jsx("polyline", { points: "7 10 12 15 17 10" }),
        c.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  Ee = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        c.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Be = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        c.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  Oe = (e) =>
    c.jsx(G, {
      ...e,
      children: c.jsx("path", { d: "M21 12a9 9 0 1 1-6.22-8.56" }),
    }),
  He = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        c.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
        c.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
      ],
    }),
  Ae = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        c.jsx("circle", { cx: "9", cy: "9", r: "2" }),
        c.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
      ],
    }),
  We = (e) =>
    c.jsxs(G, {
      ...e,
      children: [
        c.jsx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
        c.jsx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
        c.jsx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
        c.jsx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
        c.jsx("line", { x1: "7", y1: "12", x2: "17", y2: "12" }),
      ],
    }),
  le = (e) =>
    c.jsx(G, {
      ...e,
      children: c.jsx("polygon", {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      }),
    }),
  B = 12700,
  H = 20,
  J = (e) =>
    String(e)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
async function re(e) {
  return e.arrayBuffer
    ? new Uint8Array(await e.arrayBuffer())
    : new Promise((n, o) => {
        const s = new FileReader();
        ((s.onload = () => n(new Uint8Array(s.result))),
          (s.onerror = o),
          s.readAsArrayBuffer(e));
      });
}
async function _e(e) {
  try {
    const n = await e.getTextContent({ includeMarkedContent: !1 }),
      o = e.getViewport({ scale: 1 }),
      s = [];
    for (const t of n.items) {
      if (!t.str || !t.str.trim()) continue;
      const [a, r, , , l, i] = t.transform,
        p = Math.sqrt(a * a + r * r),
        m = l,
        d = o.height - i,
        f = t.width || p * t.str.length * 0.6,
        w = t.height || p * 1.2;
      s.push({
        str: t.str,
        x: m,
        y: d,
        w: f,
        h: w,
        fontSize: p,
        fontId: t.fontName || "",
        fontName: "",
        transform: t.transform,
        hasEOL: t.hasEOL || !1,
      });
    }
    return {
      items: s,
      styles: n.styles || {},
      pageW: o.width,
      pageH: o.height,
      method: "native",
    };
  } catch {
    return null;
  }
}
function ce(e, n) {
  const o = (e?.fontFamily || "").toLowerCase();
  return o.includes("mono")
    ? "Courier New"
    : o.includes("serif") && !o.includes("sans")
      ? "Times New Roman"
      : o.includes("sans")
        ? "Arial"
        : n || "Calibri";
}
function Ge(e, n, o, s) {
  const t = {},
    a = (r) => {
      if (r in t) return t[r];
      let l = null;
      try {
        e.commonObjs?.has?.(r) && (l = e.commonObjs.get(r));
      } catch {
        l = null;
      }
      return ((t[r] = l), l);
    };
  for (const r of n) {
    const l = a(r.fontId),
      i = o[r.fontId],
      p = l && l.name ? String(l.name) : "",
      m = Ve(p);
    ((r.isBold = !!(l && (l.bold || l.black)) || m.isBold),
      (r.isItalic = !!(l && l.italic) || m.isItalic),
      (r.fontName = p),
      (r.resolvedFont = p ? qe(p, ce(i, s)) : ce(i, s)),
      (r.ascent = i && i.ascent ? i.ascent : 0.8),
      (r.iconFont =
        /fontawe|awesome|glyphicon|wingding|webding|dingbat|academicon|entypo|ionicon|materialicon|octicon|^fa[5]?[-\s]/i.test(
          p,
        )));
  }
  return n;
}
let ee = null;
async function ue() {
  return window.Tesseract
    ? window.Tesseract
    : ee ||
        ((ee = new Promise((e, n) => {
          const o = document.createElement("script");
          ((o.src =
            "https://unpkg.com/tesseract.js@5.1.1/dist/tesseract.min.js"),
            (o.onload = () =>
              window.Tesseract
                ? e(window.Tesseract)
                : n(new Error("Tesseract not on window"))),
            (o.onerror = () => {
              const s = document.createElement("script");
              ((s.src =
                "https://cdn.jsdelivr.net/npm/tesseract.js@4.1.4/dist/tesseract.min.js"),
                (s.onload = () =>
                  window.Tesseract
                    ? e(window.Tesseract)
                    : n(new Error("v4 fail"))),
                (s.onerror = () => n(new Error("Tesseract unavailable"))),
                document.head.appendChild(s));
            }),
            document.head.appendChild(o));
        })),
        ee);
}
async function Xe(e, n, o) {
  const s = await ue();
  let t;
  try {
    t = await s.createWorker(n, 1, {
      logger: (r) =>
        r.status === "recognizing text" && o?.(Math.round(r.progress * 100)),
    });
  } catch {
    ((t = await s.createWorker({
      logger: (r) =>
        r.status === "recognizing text" && o?.(Math.round(r.progress * 100)),
    })),
      await t.loadLanguage(n),
      await t.initialize(n));
  }
  await t.setParameters({
    tessedit_pageseg_mode: "1",
    preserve_interword_spaces: "1",
  });
  const { data: a } = await t.recognize(e);
  return (await t.terminate(), a);
}
function Ue(e, n) {
  const o = [];
  for (const s of e.blocks || [])
    for (const t of s.paragraphs || [])
      for (const a of t.lines || []) {
        const r = (a.bbox.y1 - a.bbox.y0) / n,
          l = Math.max(6, r / 1.18);
        for (const i of a.words || []) {
          const p = (i.text || "").trim();
          if (!p || i.confidence < 15) continue;
          const { x0: m, y0: d, x1: f, y1: w } = i.bbox;
          o.push({
            str: p,
            x: m / n,
            y: d / n,
            w: (f - m) / n,
            h: (w - d) / n,
            fontSize: l,
            fontName: "",
            isBold: !1,
            isItalic: !1,
            confidence: i.confidence,
          });
        }
      }
  return o;
}
function Ve(e = "") {
  const n = e.toLowerCase(),
    o = /bold|heavy|black|semibold|demi|cmbx|cmb\d|bx\d|-b\b|bd\b/i.test(n),
    s = /italic|oblique|slanted|cmti|cmmi|cmsl|cmitt|-it\b|ti\d/i.test(n);
  return { isBold: o, isItalic: s };
}
function ge(e) {
  if (!e.length) return [];
  const n = [...e].sort((t, a) => (t.y !== a.y ? t.y - a.y : t.x - a.x)),
    o = [];
  let s = [n[0]];
  for (let t = 1; t < n.length; t++) {
    const a = s[s.length - 1],
      r = n[t],
      l = a.y + a.h / 2,
      i = r.y + r.h / 2,
      p = Math.min(a.y + a.h, r.y + r.h) - Math.max(a.y, r.y),
      m = Math.min(a.h, r.h),
      d =
        Math.max(a.fontSize, r.fontSize) /
        Math.max(0.1, Math.min(a.fontSize, r.fontSize)),
      f = Math.abs(r.y - a.y) < m * 0.5;
    d < 2.2 && (f || Math.abs(l - i) < m * 0.65 || p > m * 0.4)
      ? s.push(r)
      : (o.push(s.sort((w, x) => w.x - x.x)), (s = [r]));
  }
  return (s.length && o.push(s.sort((t, a) => t.x - a.x)), o);
}
function Ye(e, n) {
  const {
      xEmu: o,
      yEmu: s,
      wEmu: t,
      hEmu: a,
      runs: r,
      pageWEmu: l,
      pageHEmu: i,
    } = e,
    p = Math.max(0, Math.min(o, l - 91440)),
    m = Math.max(0, Math.min(s, i - 91440)),
    d = Math.max(91440, Math.min(t, l - p)),
    f = Math.max(91440, Math.min(a, i - m)),
    w = r.map((x) => Je(x)).join("");
  return (
    `<w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="${251658240 + n}" behindDoc="0" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>${p}</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>${m}</wp:posOffset></wp:positionV><wp:extent cx="${d}" cy="${f}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapNone/><wp:docPr id="${n}" name="tb${n}"/><wp:cNvGraphicFramePr/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"><wps:wsp xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"><wps:cNvSpPr txBx="1"><a:spLocks noChangeArrowheads="1"/></wps:cNvSpPr><wps:spPr><a:xfrm><a:off x="${p}" y="${m}"/><a:ext cx="${d}" cy="${f}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></wps:spPr><wps:txbx><w:txbxContent><w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>` +
    w +
    '</w:p></w:txbxContent></wps:txbx><wps:bodyPr rot="0" vert="horz" wrap="none" lIns="0" tIns="0" rIns="0" bIns="0" anchor="t" anchorCtr="0"><a:noAutofit/></wps:bodyPr></wps:wsp></a:graphicData></a:graphic></wp:anchor></w:drawing></w:r>'
  );
}
function Je({
  text: e,
  fontName: n,
  fontSize: o,
  isBold: s,
  isItalic: t,
  isUnderline: a,
  isStrike: r,
  vert: l,
  color: i,
}) {
  const p = J(n || "Calibri"),
    m = J(e),
    d = Math.max(12, Math.round(o * 2));
  return (
    `<w:r><w:rPr><w:rFonts w:ascii="${p}" w:hAnsi="${p}" w:cs="${p}"/>` +
    (s ? "<w:b/><w:bCs/>" : "") +
    (t ? "<w:i/><w:iCs/>" : "") +
    (r ? "<w:strike/>" : "") +
    "<w:noProof/>" +
    (i ? `<w:color w:val="${i}"/>` : "") +
    `<w:sz w:val="${d}"/><w:szCs w:val="${d}"/>` +
    (a ? '<w:u w:val="single"/>' : "") +
    (l ? `<w:vertAlign w:val="${l}"/>` : "") +
    `</w:rPr><w:t xml:space="preserve">${m}</w:t></w:r>`
  );
}
const Ze = [
  [/lmmono|lmtt|cmtt|cmtype|txtt|inconsolata|mono/i, "Courier New"],
  [/lmsans|cmss|lmss|helvet|^phv/i, "Arial"],
  [
    /lmroman|lmodern|latin\s*modern|computer\s*modern|cmr\d|cmbx|cmti|cmmi|cmsl|cmcsc|cmu\s*serif|nimbus\s*rom|^ptm|^pnc|stix|newtx|kpmath|tgtermes|tgpagella/i,
    "Times New Roman",
  ],
  [/times|tmnr/i, "Times New Roman"],
  [/arial|helvetica|swiss/i, "Arial"],
  [/courier/i, "Courier New"],
  [/georgia/i, "Georgia"],
  [/verdana/i, "Verdana"],
  [/trebuchet/i, "Trebuchet MS"],
  [/garamond/i, "Garamond"],
  [/calibri/i, "Calibri"],
  [/cambria/i, "Cambria"],
  [/palatino|palladio|tgpagella/i, "Palatino Linotype"],
  [/futura|gill.*sans/i, "Arial"],
  [/comic/i, "Comic Sans MS"],
];
function qe(e, n) {
  if (!e) return n;
  for (const [s, t] of Ze) if (s.test(e)) return t;
  return (
    e
      .replace(/^[A-Z]{6}\+/, "")
      .replace(/[-_,]/g, " ")
      .replace(
        /\b(bold|italic|oblique|regular|roman|medium|light|semibold|demibold|demi|black|heavy|thin|book|condensed|narrow|MT|PS|Std|Pro)\b/gi,
        "",
      )
      .replace(/\s+/g, " ")
      .trim() || n
  );
}
async function Qe(e, n = 2) {
  const o = e.getViewport({ scale: 1 }),
    s = e.getViewport({ scale: n }),
    t = document.createElement("canvas");
  ((t.width = Math.round(s.width)), (t.height = Math.round(s.height)));
  const a = t.getContext("2d", { alpha: !1 });
  return (
    (a.fillStyle = "#FFFFFF"),
    a.fillRect(0, 0, t.width, t.height),
    await e.render({ canvasContext: a, viewport: s }).promise,
    { canvas: t, widthPt: o.width, heightPt: o.height }
  );
}
async function Ke(e, n = 0.93) {
  const o = await new Promise((t) => e.toBlob(t, "image/jpeg", n)),
    s = await re(o);
  return ((e.width = e.height = 0), s);
}
function be(e, n, o, s) {
  return `<w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${o}" cy="${s}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${n}" name="pg${n}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${n}" name="pg${n}"/><pic:cNvPicPr><a:picLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></pic:cNvPicPr></pic:nvPicPr><pic:blipFill><a:blip xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" r:embed="${e}"/><a:stretch xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:off x="0" y="0"/><a:ext cx="${o}" cy="${s}"/></a:xfrm><a:prstGeom xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing>`;
}
async function et(e) {
  window.JSZip ||
    (await new Promise((l, i) => {
      const p = document.createElement("script");
      ((p.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"),
        (p.onload = l),
        (p.onerror = i),
        document.head.appendChild(p));
    }));
  const n = new window.JSZip(),
    o = e[0],
    s = Math.round(o.widthPt * H),
    t = Math.round(o.heightPt * H),
    a = e.map(
      (l, i) => `<Relationship Id="rId${i + 2}"
      Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"
      Target="media/page${i + 1}.jpeg"/>`,
    ).join(`
  `);
  let r = "";
  for (let l = 0; l < e.length; l++) {
    const { bytes: i, widthPt: p, heightPt: m } = e[l];
    (l > 0 &&
      (r += `<w:p><w:r><w:br w:type="page"/></w:r></w:p>
`),
      (r += `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:before="0" w:after="0"/></w:pPr><w:r>${be(`rId${l + 2}`, l + 1, Math.round(p * B), Math.round(m * B))}</w:r></w:p>
`),
      n.file(`word/media/page${l + 1}.jpeg`, i));
  }
  return (
    n.file(
      "[Content_Types].xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels"  ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml"   ContentType="application/xml"/>
  <Default Extension="jpeg"  ContentType="image/jpeg"/>
  <Override PartName="/word/document.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml"
    ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`,
    ),
    n.file(
      "_rels/.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"
    Target="word/document.xml"/>
</Relationships>`,
    ),
    n.file(
      "word/document.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
  xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"
  xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
${r}
    <w:sectPr>
      <w:pgSz w:w="${s}" w:h="${t}"/>
      <w:pgMar w:top="0" w:right="0" w:bottom="0" w:left="0" w:header="0" w:footer="0" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`,
    ),
    n.file(
      "word/styles.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:style w:type="paragraph" w:styleId="Normal" w:default="1">
    <w:name w:val="Normal"/>
  </w:style>
</w:styles>`,
    ),
    n.file(
      "word/_rels/document.xml.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
    Target="styles.xml"/>
  ${a}
</Relationships>`,
    ),
    n.generateAsync({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    })
  );
}
async function tt(e, n, o) {
  const s = window.pdfjsLib;
  if (!s) throw new Error("pdf.js not loaded");
  const t = await s.getDocument({ data: e }).promise,
    a = t.numPages,
    r = [];
  for (let l = 1; l <= a; l++) {
    o?.(Math.round(((l - 1) / a) * 85), `Rendering page ${l}/${a}…`);
    const i = await t.getPage(l),
      { canvas: p, widthPt: m, heightPt: d } = await Qe(i, 2),
      f = await Ke(p, n);
    r.push({ bytes: f, widthPt: m, heightPt: d });
  }
  return r;
}
const st = (e) => Math.max(0, Math.min(255, Math.round(e)));
function q(e, n, o) {
  return [e, n, o]
    .map((s) => st(s).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}
function pe(e) {
  let n = e[0],
    o = e[1],
    s = e[2],
    t = e[3];
  return (
    (n > 1 || o > 1 || s > 1 || t > 1) &&
      ((n /= 255), (o /= 255), (s /= 255), (t /= 255)),
    q(255 * (1 - n) * (1 - t), 255 * (1 - o) * (1 - t), 255 * (1 - s) * (1 - t))
  );
}
function ye(e) {
  return [
    parseInt(e.slice(0, 2), 16),
    parseInt(e.slice(2, 4), 16),
    parseInt(e.slice(4, 6), 16),
  ];
}
function Q(e) {
  const [n, o, s] = ye(e);
  return n > 245 && o > 245 && s > 245;
}
function ve(e) {
  const [n, o, s] = ye(e);
  return n < 46 && o < 46 && s < 46;
}
function V(e, n) {
  return [
    e[0] * n[0] + e[2] * n[1],
    e[1] * n[0] + e[3] * n[1],
    e[0] * n[2] + e[2] * n[3],
    e[1] * n[2] + e[3] * n[3],
    e[0] * n[4] + e[2] * n[5] + e[4],
    e[1] * n[4] + e[3] * n[5] + e[5],
  ];
}
function K(e, n, o) {
  return [e[0] * n + e[2] * o + e[4], e[1] * n + e[3] * o + e[5]];
}
async function nt(e, n) {
  const o = window.pdfjsLib.OPS,
    s = {
      fills: [],
      hlines: [],
      vlines: [],
      rects: [],
      images: [],
      colorStamps: [],
    };
  if (!o) return s;
  const t = {};
  for (const h in o) t[o[h]] = h;
  let a;
  try {
    a = await e.getOperatorList();
  } catch {
    return s;
  }
  let r = [1, 0, 0, 1, 0, 0];
  const l = [];
  let i = "000000",
    p = "000000",
    m = 1,
    d = !1;
  const f = [],
    w = [],
    x = [],
    u = [],
    g = [],
    M = [],
    $ = [];
  let N = [1, 0, 0, 1, 0, 0],
    z = [1, 0, 0, 1, 0, 0],
    S = 12,
    F = 0,
    y = 0,
    T = 0,
    k = 1,
    C = 0;
  const I = (h) => {
      const j = [
          K(r, h[0], h[2]),
          K(r, h[1], h[2]),
          K(r, h[1], h[3]),
          K(r, h[0], h[3]),
        ],
        v = j.map((X) => X[0]),
        b = j.map((X) => X[1]),
        L = Math.min(...v),
        A = Math.max(...v),
        E = Math.min(...b),
        O = Math.max(...b);
      return { x: L, yTop: n - O, w: A - L, h: O - E };
    },
    R = (h, j) => {
      Q(j) ||
        (h.h <= 2.2 && h.w > 3
          ? u.push({
              x1: h.x,
              x2: h.x + h.w,
              y: h.yTop + h.h / 2,
              color: j,
              width: Math.max(0.6, h.h),
              dashed: d,
            })
          : h.w <= 2.2 && h.h > 3
            ? g.push({
                y1: h.yTop,
                y2: h.yTop + h.h,
                x: h.x + h.w / 2,
                color: j,
                width: Math.max(0.6, h.w),
                dashed: d,
              })
            : w.push({ x: h.x, y: h.yTop, w: h.w, h: h.h, color: j }));
    },
    P = (h, j, v) => {
      const b = Math.max(0.4, Math.abs(v)),
        L = Math.max(2.2, b * 1.6);
      h.h <= L && h.w > 3
        ? u.push({
            x1: h.x,
            x2: h.x + h.w,
            y: h.yTop + h.h / 2,
            color: j,
            width: b,
            dashed: d,
          })
        : h.w <= L && h.h > 3
          ? g.push({
              y1: h.yTop,
              y2: h.yTop + h.h,
              x: h.x + h.w / 2,
              color: j,
              width: b,
              dashed: d,
            })
          : (x.push({
              x: h.x,
              y: h.yTop,
              w: h.w,
              h: h.h,
              color: j,
              width: b,
              dashed: d,
            }),
            u.push({
              x1: h.x,
              x2: h.x + h.w,
              y: h.yTop,
              color: j,
              width: b,
              dashed: d,
            }),
            u.push({
              x1: h.x,
              x2: h.x + h.w,
              y: h.yTop + h.h,
              color: j,
              width: b,
              dashed: d,
            }),
            g.push({
              y1: h.yTop,
              y2: h.yTop + h.h,
              x: h.x,
              color: j,
              width: b,
              dashed: d,
            }),
            g.push({
              y1: h.yTop,
              y2: h.yTop + h.h,
              x: h.x + h.w,
              color: j,
              width: b,
              dashed: d,
            }));
    },
    D = (h) => {
      if (C !== 3) {
        const v = K(V(r, N), 0, 0);
        $.push({
          x: v[0],
          yTop: n - v[1],
          color: C === 1 || C === 5 ? p : i,
          mode: C,
        });
      }
      if (!Array.isArray(h)) return;
      let j = 0;
      for (const v of h) {
        if (typeof v == "number") {
          j -= (v / 1e3) * S;
          continue;
        }
        if (!v) continue;
        const b = (v.width || 0) / 1e3;
        j += b * S + y + (v.isSpace ? T : 0);
      }
      N = V(N, [1, 0, 0, 1, j * k, 0]);
    };
  for (let h = 0; h < a.fnArray.length; h++) {
    const j = t[a.fnArray[h]],
      v = a.argsArray[h];
    switch (j) {
      case "save":
        l.push({ m: r.slice(), fill: i, stroke: p, lineW: m, dashed: d });
        break;
      case "restore": {
        const b = l.pop();
        b &&
          ((r = b.m),
          (i = b.fill),
          (p = b.stroke),
          (m = b.lineW),
          (d = b.dashed));
        break;
      }
      case "transform":
        r = V(r, v);
        break;
      case "setLineWidth":
        m = v[0] || 1;
        break;
      case "setDash":
        d = Array.isArray(v[0]) && v[0].length > 0;
        break;
      case "setFillRGBColor":
        i = q(v[0], v[1], v[2]);
        break;
      case "setStrokeRGBColor":
        p = q(v[0], v[1], v[2]);
        break;
      case "setFillGray": {
        let b = v[0];
        (b <= 1 && (b *= 255), (i = q(b, b, b)));
        break;
      }
      case "setStrokeGray": {
        let b = v[0];
        (b <= 1 && (b *= 255), (p = q(b, b, b)));
        break;
      }
      case "setFillCMYKColor":
        i = pe(v);
        break;
      case "setStrokeCMYKColor":
        p = pe(v);
        break;
      case "constructPath": {
        const b = v[2];
        if (b && b.length === 4 && isFinite(b[0])) {
          const L = Math.abs(r[0] * r[3] - r[1] * r[2]) || 1;
          f.push({ r: I(b), fill: i, stroke: p, lineW: m * Math.sqrt(L) });
        }
        break;
      }
      case "fill":
      case "eoFill": {
        for (const b of f) R(b.r, b.fill);
        f.length = 0;
        break;
      }
      case "stroke":
      case "closeStroke": {
        for (const b of f) P(b.r, b.stroke, b.lineW);
        f.length = 0;
        break;
      }
      case "fillStroke":
      case "eoFillStroke":
      case "closeFillStroke":
      case "closeEOFillStroke": {
        for (const b of f) (R(b.r, b.fill), P(b.r, b.stroke, b.lineW));
        f.length = 0;
        break;
      }
      case "clip":
      case "eoClip":
        break;
      case "endPath":
        f.length = 0;
        break;
      case "paintImageXObject":
      case "paintInlineImageXObject": {
        const b = I([0, 1, 0, 1]);
        b.w > 8 && b.h > 8 && M.push(b);
        break;
      }
      case "beginText":
        ((N = [1, 0, 0, 1, 0, 0]), (z = [1, 0, 0, 1, 0, 0]));
        break;
      case "setFont":
        S = v[1] || S;
        break;
      case "setTextMatrix":
        ((N = v.slice()), (z = v.slice()));
        break;
      case "setCharSpacing":
        y = v[0] || 0;
        break;
      case "setWordSpacing":
        T = v[0] || 0;
        break;
      case "setHScale":
        k = (v[0] || 100) / 100;
        break;
      case "setLeading":
        F = v[0] || 0;
        break;
      case "setTextRise":
        break;
      case "setTextRenderingMode":
        C = v[0] || 0;
        break;
      case "moveText":
        ((z = V(z, [1, 0, 0, 1, v[0] || 0, v[1] || 0])), (N = z.slice()));
        break;
      case "setLeadingMoveText":
        ((F = -(v[1] || 0)),
          (z = V(z, [1, 0, 0, 1, v[0] || 0, v[1] || 0])),
          (N = z.slice()));
        break;
      case "nextLine":
        ((z = V(z, [1, 0, 0, 1, 0, -F])), (N = z.slice()));
        break;
      case "showText":
        D(v[0]);
        break;
      case "showSpacedText":
        D(v[0]);
        break;
      case "nextLineShowText":
        ((z = V(z, [1, 0, 0, 1, 0, -F])), (N = z.slice()), D(v[0]));
        break;
      case "nextLineSetSpacingShowText":
        ((T = v[0] || 0),
          (y = v[1] || 0),
          (z = V(z, [1, 0, 0, 1, 0, -F])),
          (N = z.slice()),
          D(v[2]));
        break;
    }
  }
  return {
    fills: w,
    hlines: u,
    vlines: g,
    rects: x,
    images: M,
    colorStamps: $,
  };
}
async function ot(e, n, o) {
  let s;
  try {
    s = await e.getAnnotations();
  } catch {
    return;
  }
  const t = [];
  for (const a of s || []) {
    if (a.subtype !== "Link") continue;
    const r = a.url || a.unsafeUrl;
    if (!r || !a.rect) continue;
    const [l, i, p, m] = a.rect;
    t.push({
      url: r,
      x: Math.min(l, p),
      y: o - Math.max(i, m),
      w: Math.abs(p - l),
      h: Math.abs(m - i),
    });
  }
  if (t.length)
    for (const a of n) {
      const r = a.x + a.w / 2,
        l = a.y - a.h * 0.3;
      for (const i of t)
        if (
          r >= i.x - 1 &&
          r <= i.x + i.w + 1 &&
          l >= i.y - 1 &&
          l <= i.y + i.h + 1
        ) {
          a.link = i.url;
          break;
        }
    }
}
function at(e, n, o) {
  for (const s of e) {
    let t = null,
      a = 1 / 0;
    const r = s.x,
      l = s.y;
    for (const p of n) {
      const m = p.x - r,
        d = p.yTop - l,
        f = m * m + d * d;
      f < a && ((a = f), (t = p));
    }
    const i = Math.max(s.fontSize * 1.5, 6);
    t && Math.sqrt(a) <= i
      ? ((s.color = ve(t.color) ? null : t.color), (s.invisible = t.mode === 3))
      : o && (s.color = o(s));
  }
  return e;
}
function me(e, n, o, s, t) {
  const a = Math.max(0, Math.floor(t.x * s)),
    r = Math.min(n, Math.ceil((t.x + t.w) * s)),
    l = Math.max(0, Math.floor((t.y - t.h * 0.85) * s)),
    i = Math.min(o, Math.ceil((t.y + t.h * 0.15) * s));
  if (r <= a || i <= l) return null;
  const p = new Map(),
    m = Math.max(1, Math.floor((r - a) / 50)),
    d = Math.max(1, Math.floor((i - l) / 26));
  for (let M = l; M < i; M += d)
    for (let $ = a; $ < r; $ += m) {
      const N = (M * n + $) * 4,
        z = e[N],
        S = e[N + 1],
        F = e[N + 2];
      if (0.299 * z + 0.587 * S + 0.114 * F < 200) {
        const T = (z >> 4) + "," + (S >> 4) + "," + (F >> 4),
          k = p.get(T) || { r: 0, g: 0, b: 0, n: 0 };
        ((k.r += z), (k.g += S), (k.b += F), k.n++, p.set(T, k));
      }
    }
  if (!p.size) return null;
  let f = null;
  for (const M of p.values()) (!f || M.n > f.n) && (f = M);
  const w = f.r / f.n,
    x = f.g / f.n,
    u = f.b / f.n,
    g = q(w, x, u);
  return ve(g) ? null : g;
}
async function rt(e, n, o, s) {
  let t = Math.round(o.x * n),
    a = Math.round(o.yTop * n),
    r = Math.round(o.w * n),
    l = Math.round(o.h * n);
  if (
    ((t = Math.max(0, Math.min(t, e.width - 1))),
    (a = Math.max(0, Math.min(a, e.height - 1))),
    (r = Math.min(r, e.width - t)),
    (l = Math.min(l, e.height - a)),
    r <= 0 || l <= 0)
  )
    return null;
  const i = document.createElement("canvas");
  ((i.width = r),
    (i.height = l),
    i.getContext("2d").drawImage(e, t, a, r, l, 0, 0, r, l));
  const p = await new Promise((d) => i.toBlob(d, "image/jpeg", s)),
    m = await re(p);
  return ((i.width = i.height = 0), m);
}
function Pe(e, n) {
  const o = new Set();
  for (const s of e) {
    const t = s.x,
      a = s.x + s.w,
      r = s.y,
      l = s.fontSize;
    for (let m = 0; m < n.hlines.length; m++) {
      const d = n.hlines[m];
      d.x1 === void 0 ||
        Math.min(a, d.x2) - Math.max(t, d.x1) <= s.w * 0.4 ||
        (d.y >= r - l * 0.12 && d.y <= r + l * 0.42
          ? ((s.underline = !0), o.add(m))
          : d.y >= r - l * 0.62 &&
            d.y <= r - l * 0.22 &&
            ((s.strike = !0), o.add(m)));
    }
    const i = r - s.h * 0.9,
      p = r + s.h * 0.1;
    for (const m of n.fills) {
      if (Q(m.color)) continue;
      const d = Math.min(a, m.x + m.w) - Math.max(t, m.x),
        f = Math.min(p, m.y + m.h) - Math.max(i, m.y);
      if (d > s.w * 0.4 && f > s.h * 0.3) {
        ((s.shade = m.color), (m.__used = !0));
        break;
      }
    }
  }
  return ((n.hlines = n.hlines.filter((s, t) => !o.has(t))), n);
}
function it(e, n, o) {
  const s = { hlines: [], vlines: [], rects: [], fills: [] };
  for (const t of e.hlines) t.__used || s.hlines.push(t);
  for (const t of e.vlines) t.__used || s.vlines.push(t);
  for (const t of e.rects) t.__used || s.rects.push(t);
  for (const t of e.fills)
    t.__used || Q(t.color) || (t.w * t.h) / (n * o) > 0.85 || s.fills.push(t);
  return s;
}
function je(e) {
  for (const n of e) {
    const o = n.items;
    if (o.length < 2) continue;
    const s = o.map((l) => l.fontSize).sort((l, i) => l - i),
      t = s[Math.floor(s.length / 2)],
      a = o.map((l) => l.y).sort((l, i) => l - i),
      r = a[Math.floor(a.length / 2)];
    for (const l of o) {
      if (l.fontSize > t * 0.86) continue;
      const i = l.y - r;
      i < -t * 0.22 ? (l.superscript = !0) : i > t * 0.12 && (l.subscript = !0);
    }
  }
}
function Me(e, n) {
  return (
    e.font === n.font &&
    Math.abs(e.size - n.size) < 0.6 &&
    e.bold === n.bold &&
    e.italic === n.italic &&
    e.underline === n.underline &&
    !!e.strike == !!n.strike &&
    (e.vert || null) === (n.vert || null) &&
    (e.link || null) === (n.link || null) &&
    (e.color || null) === (n.color || null) &&
    (e.shade || null) === (n.shade || null)
  );
}
function Y(e) {
  const n = [];
  let o = null;
  for (const s of e) {
    if (!s.str) continue;
    const t = {
      font: s.resolvedFont || "Calibri",
      size: (s.superscript || s.subscript, s.fontSize),
      bold: !!s.isBold,
      italic: !!s.isItalic,
      underline: !!s.underline,
      strike: !!s.strike,
      vert: s.superscript ? "superscript" : s.subscript ? "subscript" : null,
      link: s.link || null,
      color: s.color || null,
      shade: s.shade || null,
    };
    let a = "";
    o !== null && s.x - o > s.fontSize * 0.18 && (a = " ");
    const r = n[n.length - 1];
    (r && Me(r, t) && !/\s$/.test(r.text)
      ? (r.text += a + s.str)
      : n.push({ ...t, text: a + s.str }),
      (o = s.x + s.w));
  }
  return n;
}
function de(e) {
  const n = [];
  return (
    e.forEach((o, s) =>
      o.forEach((t, a) => {
        let r = s > 0 && a === 0 ? " " : "";
        if (r === " ") {
          const i = n.length ? n[n.length - 1].text : "";
          /[a-z]-$/.test(i) && /^[a-z]/.test(t.text) && (r = "");
        }
        const l = n[n.length - 1];
        l && Me(l, t)
          ? (l.text += r + t.text)
          : n.push({ ...t, text: r + t.text });
      }),
    ),
    n
  );
}
function ne(e) {
  const n = e.map((t) => t.x),
    o = e.map((t) => t.x + t.w),
    s = e.map((t) => t.fontSize).sort((t, a) => t - a);
  return {
    left: Math.min(...n),
    right: Math.max(...o),
    size: s[Math.floor(s.length / 2)] || 10,
    maxSize: Math.max(...s),
    top: Math.min(...e.map((t) => t.y - t.h * 0.8)),
    baseline: Math.max(...e.map((t) => t.y)),
    text: e.map((t) => t.str).join(""),
    bold: e.filter((t) => t.isBold).length > e.length / 2,
  };
}
const lt = /^[•‣◦⁃∙▪●·◾▸►◦‣*✦❖–—-]$/,
  ct = /^[•‣◦⁃∙▪●·∙◾▸►]/,
  pt = /^\s*[•‣◦⁃∙▪●·∙◾▸►*–—-]\s*/;
function mt(e) {
  const n = e.items;
  if (!n.length) return null;
  const o = (n[0].str || "").trim();
  return lt.test(o)
    ? { type: "bullet", markerCount: 1 }
    : ct.test(o)
      ? { type: "bullet", markerCount: 0, strip: pt }
      : /^\d{1,2}[.)]$/.test(o) &&
          n.length > 1 &&
          n[1].x - (n[0].x + n[0].w) > n[0].fontSize * 0.25
        ? { type: "number", markerCount: 1 }
        : n.length > 1 &&
            o.length <= 2 &&
            !/[\w]/.test(o) &&
            n[1].x - (n[0].x + n[0].w) > n[0].fontSize * 0.3
          ? { type: "bullet", markerCount: 1 }
          : null;
}
function dt(e, n, o) {
  return e >= n * 1.8
    ? 1
    : e >= n * 1.45
      ? 2
      : e >= n * 1.22
        ? 3
        : o && e >= n * 1.08
          ? 4
          : 0;
}
function ht(e, n, o) {
  const s = Math.min(...e.map((p) => p.meta.left)),
    t = Math.max(...e.map((p) => p.meta.right)),
    a = Math.max(1, o - n);
  if (
    e.length >= 2 &&
    e
      .slice(0, -1)
      .every((m) => o - m.meta.right < a * 0.06 && m.meta.left - n < a * 0.06)
  )
    return "both";
  const r = Math.max(6, a * 0.04),
    l = s - n,
    i = o - t;
  return l > r && Math.abs(l - i) < r * 1.8
    ? "center"
    : l > r * 1.8 && i < r
      ? "right"
      : "left";
}
function wt(e) {
  const n = [];
  let o = null;
  for (let s = 0; s < e.length; s++) {
    const t = e[s].meta;
    let a = !o;
    if (o) {
      const r = e[s - 1].meta;
      (t.top - r.baseline > t.size * 1.2 * 0.85 && (a = !0),
        Math.abs(t.size - r.size) > 1.5 && (a = !0),
        e[s].bullet && (a = !0),
        t.left - r.left > t.size * 1.5 && (a = !0));
    }
    a ? ((o = { lines: [e[s]] }), n.push(o)) : o.lines.push(e[s]);
  }
  return n;
}
function ke(e) {
  if (!e.length) return [];
  const n = [];
  let o = [e[0]];
  for (let s = 1; s < e.length; s++) {
    const t = e[s - 1],
      a = e[s];
    a.x - (t.x + t.w) > Math.max(t.fontSize, a.fontSize) * 1.6
      ? (n.push(o), (o = [a]))
      : o.push(a);
  }
  return (n.push(o), n.map((s) => ({ items: s, x0: s[0].x })));
}
function ft(e, n) {
  const o = [...e].sort((t, a) => t - a),
    s = [];
  for (const t of o) {
    const a = s[s.length - 1];
    a && t - a.mean < n
      ? (a.vals.push(t),
        (a.mean = a.vals.reduce((r, l) => r + l, 0) / a.vals.length))
      : s.push({ mean: t, vals: [t] });
  }
  return s.map((t) => t.mean);
}
function xt(e, n) {
  const o = e.map((r) => ke(r.items)),
    s = e.map(
      (r, l) =>
        o[l].length >= 2 && r.meta.maxSize <= n * 1.35 && r.items.length >= 2,
    ),
    t = [];
  let a = 0;
  for (; a < e.length;) {
    if (!s[a]) {
      a++;
      continue;
    }
    let r = a;
    for (; r + 1 < e.length && s[r + 1];) r++;
    if (r - a + 1 >= 3) {
      const l = [];
      for (let m = a; m <= r; m++) o[m].forEach((d) => l.push(d.x0));
      const i = ft(l, Math.max(12, n * 1.4)),
        p = o.slice(a, r + 1).filter((m) => m.length >= 2).length;
      i.length >= 2 &&
        p >= (r - a + 1) * 0.7 &&
        t.push({ start: a, end: r, columns: i });
    }
    a = r + 1;
  }
  return t;
}
function he(e, n) {
  const o = [...e].sort((t, a) => t - a),
    s = [];
  for (const t of o) {
    const a = s[s.length - 1];
    a && t - a.v < n
      ? ((a.v = (a.v * a.n + t) / (a.n + 1)), a.n++)
      : s.push({ v: t, n: 1 });
  }
  return s.map((t) => t.v);
}
function ut(e, n, o) {
  const s = Math.max(2.5, o * 0.3),
    t = e.hlines,
    a = e.vlines;
  if (t.length < 2 || a.length < 2) return { tables: [], consumed: new Set() };
  const r = (w, x) =>
      x.x >= w.x1 - s && x.x <= w.x2 + s && w.y >= x.y1 - s && w.y <= x.y2 + s,
    l = [...Array(t.length + a.length)].map((w, x) => x),
    i = (w) => {
      for (; l[w] !== w;) ((l[w] = l[l[w]]), (w = l[w]));
      return w;
    },
    p = (w, x) => {
      l[i(w)] = i(x);
    };
  for (let w = 0; w < t.length; w++)
    for (let x = 0; x < a.length; x++) r(t[w], a[x]) && p(w, t.length + x);
  const m = new Map();
  for (let w = 0; w < t.length; w++) {
    const x = i(w);
    (m.get(x) || m.set(x, { h: [], v: [] }).get(x)).h.push(t[w]);
  }
  for (let w = 0; w < a.length; w++) {
    const x = i(t.length + w);
    (m.get(x) || m.set(x, { h: [], v: [] }).get(x)).v.push(a[w]);
  }
  const d = [],
    f = new Set();
  for (const w of m.values()) {
    if (w.h.length < 2 || w.v.length < 2) continue;
    const x = he(
        w.h.map((P) => P.y),
        s,
      ),
      u = he(
        w.v.map((P) => P.x),
        s,
      );
    if (x.length < 2 || u.length < 2) continue;
    const g = u[0],
      M = u[u.length - 1],
      $ = x[0],
      N = x[x.length - 1];
    if (M - g < 20 || N - $ < 12) continue;
    const z = x.length - 1,
      S = u.length - 1,
      F = Array.from({ length: z }, () => Array.from({ length: S }, () => []));
    for (const P of n) {
      const D = P.x + P.w / 2,
        h = P.y - P.h * 0.3;
      if (D < g - s || D > M + s || h < $ - s || h > N + s) continue;
      let j = -1,
        v = -1;
      for (let b = 0; b < z; b++)
        if (h >= x[b] - s && h <= x[b + 1] + s) {
          j = b;
          break;
        }
      for (let b = 0; b < S; b++)
        if (D >= u[b] - s && D <= u[b + 1] + s) {
          v = b;
          break;
        }
      j >= 0 && v >= 0 && (F[j][v].push(P), f.add(P));
    }
    const y = F.map((P) =>
        P.map(
          (D) => (
            D.sort((h, j) => (Math.abs(h.y - j.y) > 4 ? h.y - j.y : h.x - j.x)),
            D.length
              ? Y(D)
              : [
                  {
                    text: "",
                    font: "Calibri",
                    size: o,
                    bold: !1,
                    italic: !1,
                    underline: !1,
                    color: null,
                    shade: null,
                  },
                ]
          ),
        ),
      ),
      T = F.map((P, D) =>
        P.map((h, j) => {
          const v = (u[j] + u[j + 1]) / 2,
            b = (x[D] + x[D + 1]) / 2;
          for (const L of e.fills)
            if (
              !Q(L.color) &&
              v >= L.x &&
              v <= L.x + L.w &&
              b >= L.y &&
              b <= L.y + L.h
            )
              return ((L.__used = !0), L.color);
          return null;
        }),
      ),
      k = [];
    for (let P = 0; P < S; P++) k.push(Math.max(12, u[P + 1] - u[P]));
    let C = "000000";
    const I = w.h.concat(w.v).find((P) => !Q(P.color));
    I && (C = I.color);
    const R =
      w.h.concat(w.v).some((P) => P.dashed) &&
      w.h.concat(w.v).every((P) => P.dashed);
    (w.h.forEach((P) => {
      P.__used = !0;
    }),
      w.v.forEach((P) => {
        P.__used = !0;
      }));
    for (const P of e.rects)
      P.x >= g - s &&
        P.x + P.w <= M + s &&
        P.y >= $ - s &&
        P.y + P.h <= N + s &&
        (P.__used = !0);
    d.push({
      type: "table",
      y: $,
      cx: (g + M) / 2,
      rows: y,
      shades: T,
      widths: k,
      borderColor: C,
      dashed: R,
      ruled: !0,
    });
  }
  return { tables: d, consumed: f };
}
function gt(e, n, o) {
  const s = o - n;
  if (e.length < 12 || s <= 60) return null;
  const t = 80,
    a = s / t,
    r = new Array(t).fill(0);
  for (const u of e) {
    const g = Math.max(0, Math.floor((u.x - n) / a)),
      M = Math.min(t - 1, Math.floor((u.x + u.w - n) / a));
    for (let $ = g; $ <= M; $++) r[$]++;
  }
  const l = Math.floor(t / 3),
    i = Math.max(...r.slice(0, l), 0),
    p = Math.max(...r.slice(t - l), 0),
    m = Math.min(i, p);
  if (m < 4) return null;
  const d = m * 0.5;
  let f = null,
    w = Math.floor(t * 0.2);
  const x = Math.ceil(t * 0.8);
  for (; w < x;)
    if (r[w] <= d) {
      let u = w;
      for (; u < x && r[u] <= d;) u++;
      const g = Math.max(...r.slice(0, w), 0),
        M = Math.max(...r.slice(u), 0);
      (g >= m * 0.7 &&
        M >= m * 0.7 &&
        (!f || u - w > f.w) &&
        (f = { i: w, j: u, w: u - w }),
        (w = u + 1));
    } else w++;
  return f && f.w * a >= Math.max(10, s * 0.02)
    ? n + ((f.i + f.j) / 2) * a
    : null;
}
function bt(e, n) {
  const o = [];
  for (const s of e) {
    if (s.meta.left < n - 6 && s.meta.right > n + 6) {
      const t = s.items;
      let a = -1;
      for (let r = 1; r < t.length; r++) {
        const l = t[r - 1].x + t[r - 1].w,
          i = t[r].x;
        if (l <= n + 2 && i >= n - 2 && i - l > 4) {
          a = r;
          break;
        }
      }
      if (a > 0) {
        const r = t.slice(0, a),
          l = t.slice(a);
        (o.push({ items: r, meta: ne(r) }), o.push({ items: l, meta: ne(l) }));
        continue;
      }
    }
    o.push(s);
  }
  return o;
}
function yt(e, n) {
  const o = [...e].sort((r, l) => r.meta.top - l.meta.top),
    s = [];
  let t = [];
  const a = () => {
    if (!t.length) return;
    const r = t
        .filter((i) => (i.meta.left + i.meta.right) / 2 < n)
        .sort((i, p) => i.meta.top - p.meta.top),
      l = t
        .filter((i) => (i.meta.left + i.meta.right) / 2 >= n)
        .sort((i, p) => i.meta.top - p.meta.top);
    (s.push(...r, ...l), (t = []));
  };
  for (const r of o)
    r.meta.left < n - 6 && r.meta.right > n + 6 ? (a(), s.push(r)) : t.push(r);
  return (a(), s);
}
function vt(e, n, o) {
  if (e.length < 2) return null;
  const s = o - n;
  if (s <= 0) return null;
  const t = (x) => /^[.·•‥…\s]*[.·•‥…][.·•‥…\s]*$/.test((x || "").trim());
  let a = -1,
    r = -1,
    l = -1;
  for (let x = 0; x < e.length; x++)
    t(e[x].str)
      ? (a < 0 && (a = x), x - a >= l - r && ((r = a), (l = x)))
      : (a = -1);
  if (r > 0 && l < e.length - 1) {
    const x = e
        .slice(r, l + 1)
        .reduce(($, N) => $ + (N.str || "").replace(/\s/g, "").length, 0),
      u = e.slice(0, r),
      g = e.slice(l + 1),
      M = g
        .map(($) => $.str)
        .join("")
        .trim();
    if (
      x >= 3 &&
      u.length &&
      (/^\d+$/.test(M) || (g.length <= 2 && M.length <= 6))
    )
      return { left: u, right: g, dotLeader: !0 };
  }
  let i = -1,
    p = 0;
  for (let x = 1; x < e.length; x++) {
    const u = e[x].x - (e[x - 1].x + e[x - 1].w);
    u > p && ((p = u), (i = x));
  }
  if (i < 1) return null;
  const m = e[i - 1].fontSize,
    d = e.slice(0, i),
    f = e.slice(i),
    w = f[f.length - 1].x + f[f.length - 1].w;
  return p > Math.max(m * 3, s * 0.12) &&
    w >= o - s * 0.07 &&
    f[0].x > n + s * 0.42 &&
    d[0].x < n + s * 0.25
    ? { left: d, right: f }
    : null;
}
function Pt(e, n, o, s, t = []) {
  if (!e.length && !t.length) return [];
  const a = [];
  let r = [];
  if (e.length) {
    Pe(e, n);
    const i = jt(e.map((d) => d.fontSize)) || 10,
      p = ut(n, e, i);
    r = p.tables.map((d) => ({ ...d, cx: d.cx ?? d.y, top: d.y }));
    const m = e.filter((d) => !p.consumed.has(d));
    if (m.length) {
      let f = ge(m).map((h) => ({
        items: h.slice().sort((j, v) => j.x - v.x),
        meta: ne(h),
      }));
      const w = f.map((h) => h.meta.size).sort((h, j) => h - j),
        x = w[Math.floor(w.length / 2)] || 10,
        u = f.map((h) => h.meta.left).sort((h, j) => h - j),
        g = f.map((h) => h.meta.right).sort((h, j) => h - j),
        M = (h, j) =>
          h[Math.min(h.length - 1, Math.max(0, Math.floor(h.length * j)))],
        $ = M(u, 0.05),
        N = Math.max(M(g, 0.95), o * 0.4),
        z = gt(m, $, N);
      (z != null && (f = bt(f, z)),
        je(f),
        f.forEach((h) => {
          h.bullet = mt(h);
        }));
      const S = z == null ? f : yt(f, z),
        F = f
          .filter((h) => h.bullet)
          .map((h) => h.meta.left)
          .sort((h, j) => h - j),
        y = F.length ? F[0] : $,
        T = Math.max(12, x * 1.4),
        k = (h) => Math.max(0, Math.min(2, Math.round((h - y) / T)));
      let C = [];
      try {
        C = xt(S, x);
      } catch {
        C = [];
      }
      const I = new Map(C.map((h) => [h.start, h])),
        R = new Array(S.length).fill(!1);
      C.forEach((h) => {
        for (let j = h.start; j <= h.end; j++) R[j] = !0;
      });
      let P = 0,
        D = 0;
      for (; D < S.length;) {
        const h = I.get(D);
        if (h) {
          const A = Mt(h, S, N, x);
          ((A.ord = P++), (A.top = A.y), a.push(A), (D = h.end + 1));
          continue;
        }
        let j = D;
        for (; j < S.length && !R[j];) j++;
        const v = Math.round((N - $) * H),
          b = (A) => {
            for (const E of wt(A)) {
              const O = E.lines[0].bullet,
                X = Math.max(...E.lines.map((_) => _.meta.maxSize)),
                Se =
                  E.lines.filter((_) => _.meta.bold).length >
                  E.lines.length / 2;
              let ie = 0,
                se = null,
                Z;
              (O
                ? ((Z = de(
                    E.lines.map((_, Ie) =>
                      Y(
                        Ie === 0 && O.markerCount
                          ? _.items.slice(O.markerCount)
                          : _.items,
                      ),
                    ),
                  )),
                  O.strip &&
                    Z[0] &&
                    (Z[0].text = Z[0].text.replace(O.strip, "")),
                  (se = { type: O.type, level: k(E.lines[0].meta.left) }))
                : ((Z = de(E.lines.map((_) => Y(_.items)))),
                  (ie = dt(X, x, Se))),
                a.push({
                  type: "p",
                  y: E.lines[0].meta.top,
                  top: E.lines[0].meta.top,
                  ord: P++,
                  runs: Z.filter((_) => _.text !== ""),
                  heading: ie,
                  list: se,
                  align: ht(E.lines, $, N),
                  indentPt: se ? 0 : Math.max(0, E.lines[0].meta.left - $),
                }));
            }
          };
        let L = [];
        for (let A = D; A < j; A++) {
          const E = S[A];
          if (!E.bullet) {
            const O = vt(E.items, $, N);
            if (O) {
              (b(L),
                (L = []),
                a.push({
                  type: "psplit",
                  y: E.meta.top,
                  top: E.meta.top,
                  ord: P++,
                  leftRuns: Y(O.left).filter((X) => X.text !== ""),
                  rightRuns: Y(O.right).filter((X) => X.text !== ""),
                  tabPos: v,
                  dotLeader: !!O.dotLeader,
                }));
              continue;
            }
          }
          L.push(E);
        }
        (b(L), (D = j));
      }
    }
  }
  const l = (i) => {
    let p = -1,
      m = -1 / 0;
    for (const d of a)
      d.top <= i.top && d.top > m && ((m = d.top), (p = d.ord));
    i.ord = p + 0.5;
  };
  for (const i of r) l(i);
  for (const i of t) ((i.top = i.y), l(i));
  return [...a, ...r, ...t].sort((i, p) => i.ord - p.ord);
}
function jt(e) {
  const n = [...e].sort((o, s) => o - s);
  return n[Math.floor(n.length / 2)];
}
function Mt(e, n, o, s) {
  const t = e.columns,
    a = t.length,
    r = [];
  for (let p = e.start; p <= e.end; p++) {
    const m = ke(n[p].items),
      d = Array.from({ length: a }, () => []);
    for (const f of m) {
      let w = 0,
        x = 1 / 0;
      for (let u = 0; u < a; u++) {
        const g = Math.abs(f.x0 - t[u]);
        g < x && ((x = g), (w = u));
      }
      d[w].push(...f.items);
    }
    r.push(
      d.map((f) =>
        f.length
          ? Y(f.sort((w, x) => w.x - x.x))
          : [
              {
                text: "",
                font: "Calibri",
                size: s,
                bold: !1,
                italic: !1,
                underline: !1,
                color: null,
                shade: null,
              },
            ],
      ),
    );
  }
  const l = [...t, o],
    i = [];
  for (let p = 0; p < a; p++) i.push(Math.max(16, l[p + 1] - l[p]));
  return {
    type: "table",
    y: n[e.start].meta.top,
    rows: r,
    shades: null,
    widths: i,
    borderColor: "BFBFBF",
    ruled: !1,
  };
}
function kt(e, n, o) {
  if (!e.length) return { top: 720, left: 720, right: 720, bottom: 720 };
  const s = (m) => m.sort((d, f) => d - f),
    t = s(e.map((m) => m.x)),
    a = s(e.map((m) => m.x + m.w)),
    r = s(e.map((m) => m.y - m.h * 0.8)),
    l = s(e.map((m) => m.y)),
    i = (m, d) =>
      m[Math.min(m.length - 1, Math.max(0, Math.floor(m.length * d)))],
    p = (m) => Math.round(Math.max(0, Math.min(m, 180)) * H);
  return {
    top: p(i(r, 0.01)),
    left: p(i(t, 0.02)),
    right: p(n - i(a, 0.98)),
    bottom: p(o - i(l, 0.99)),
  };
}
async function $e(e, n, o, s) {
  const t = e.getViewport({ scale: 1 }),
    a = t.width,
    r = t.height,
    l = e.getViewport({ scale: o }),
    i = document.createElement("canvas");
  ((i.width = Math.round(l.width)), (i.height = Math.round(l.height)));
  const p = i.getContext("2d", { alpha: !1, willReadFrequently: !0 });
  ((p.fillStyle = "#FFFFFF"),
    p.fillRect(0, 0, i.width, i.height),
    await e.render({ canvasContext: p, viewport: l }).promise);
  let m = null;
  try {
    m = p.getImageData(0, 0, i.width, i.height).data;
  } catch {
    m = null;
  }
  let d = [],
    f = "native",
    w = {
      fills: [],
      hlines: [],
      vlines: [],
      rects: [],
      images: [],
      colorStamps: [],
    };
  const x = await _e(e);
  if (x && x.items.length > 3) {
    ((w = await nt(e, r)), (d = Ge(e, x.items, x.styles, n.font)));
    const u = m ? (g) => me(m, i.width, i.height, o, g) : null;
    (at(d, w.colorStamps, u), await ot(e, d, r));
  } else {
    await ue();
    const u = await Xe(i, n.ocrLang, s);
    if (
      ((d = Ue(u, o).map((g) => ({ ...g, resolvedFont: n.font }))),
      (f = "ocr"),
      m)
    )
      for (const g of d) g.color = me(m, i.width, i.height, o, g);
  }
  return (
    (d = d.filter(
      (u) =>
        !(
          u.iconFont &&
          (u.str || "").trim().length <= 2 &&
          !/[a-z0-9@]/i.test((u.str || "").trim())
        ),
    )),
    {
      items: d,
      graphics: w,
      pageW: a,
      pageH: r,
      method: f,
      canvas: i,
      scale: o,
    }
  );
}
async function Te(e, n, o, s, t, a, r) {
  const l = [];
  let i = r;
  for (const p of o.images) {
    if ((p.w * p.h) / (s * t) > 0.88) continue;
    const d = await rt(e, n, p, 0.9);
    if (!d) continue;
    i++;
    const f = `image${i}.jpeg`;
    (a.push({ name: f, bytes: d }),
      l.push({
        type: "image",
        y: p.yTop,
        x: p.x,
        wPt: p.w,
        hPt: p.h,
        mediaName: f,
      }));
  }
  return { blocks: l, nextId: i };
}
async function $t(e, n) {
  if (n < 3) return null;
  const o = (m) =>
      m
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\d+\b/g, "#")
        .toLowerCase(),
    s = new Map(),
    t = new Map(),
    a = Math.min(n, 15);
  for (let m = 1; m <= a; m++) {
    let d, f, w;
    try {
      ((d = await e.getPage(m)),
        (w = d.getViewport({ scale: 1 }).height),
        (f = await d.getTextContent({ includeMarkedContent: !1 })));
    } catch {
      continue;
    }
    let x = "",
      u = "";
    for (const $ of f.items) {
      if (!$.str || !$.str.trim()) continue;
      const N = w - $.transform[5];
      N < w * 0.08 ? (x += $.str + " ") : N > w * 0.94 && (u += $.str + " ");
    }
    const g = o(x),
      M = o(u);
    (g && s.set(g, (s.get(g) || 0) + 1),
      M && t.set(M, (t.get(M) || 0) + 1),
      d.cleanup?.());
  }
  const r = Math.max(2, Math.ceil(a * 0.5)),
    l = (m) => {
      let d = null;
      for (const [f, w] of m)
        w >= r && (!d || w > d.v) && (d = { sig: f, v: w });
      return d ? d.sig : null;
    },
    i = l(s),
    p = l(t);
  return !i && !p
    ? null
    : { headerSig: i, footerSig: p, topZone: 0.08, botZone: 0.94, norm: o };
}
function we(e, n) {
  const o = e.slice().sort((p, m) => p.x - m.x),
    s = o
      .map((p) => p.str)
      .join("")
      .trim(),
    t = Y(o).filter((p) => p.text !== ""),
    a = Math.min(...o.map((p) => p.x)),
    r = Math.max(...o.map((p) => p.x + p.w)),
    l = (a + r) / 2;
  let i = "left";
  return (
    l > n * 0.4 && l < n * 0.6 ? (i = "center") : a > n * 0.55 && (i = "right"),
    { runs: t, align: i, pageNum: /^\d+$/.test(s) }
  );
}
async function Tt(e, n, o) {
  const s = window.pdfjsLib;
  if (!s) throw new Error("pdf.js not loaded");
  o?.(2, "Opening PDF…");
  const t = await s.getDocument({ data: e }).promise,
    a = t.numPages,
    r = [],
    l = [];
  let i = 0,
    p = null;
  try {
    const w = await t.getMetadata();
    p = w && w.info ? { title: w.info.Title, author: w.info.Author } : null;
  } catch {
    p = null;
  }
  let m = null;
  if (n.headersFooters !== !1)
    try {
      m = await $t(t, a);
    } catch {
      m = null;
    }
  let d = null,
    f = null;
  for (let w = 1; w <= a; w++) {
    const x = 5 + Math.round(((w - 1) / a) * 88);
    o?.(x, `Page ${w}/${a}: analysing layout…`);
    const u = await t.getPage(w),
      g = await $e(u, n, 2, (F) =>
        o?.(
          x + Math.round((F / 100) * (88 / a) * 0.8),
          `Page ${w}/${a}: OCR ${F}%`,
        ),
      );
    let M = [];
    if (n.images !== !1 && g.method === "native")
      try {
        const F = await Te(
          g.canvas,
          g.scale,
          g.graphics,
          g.pageW,
          g.pageH,
          l,
          i,
        );
        ((M = F.blocks), (i = F.nextId));
      } catch {
        M = [];
      }
    if (m) {
      const F = g.pageH,
        y = (P) => P.y < F * m.topZone,
        T = (P) => P.y > F * m.botZone,
        k = g.items.filter(y),
        C = g.items.filter(T),
        I =
          m.headerSig &&
          k.length &&
          m.norm(k.map((P) => P.str).join(" ")) === m.headerSig,
        R =
          m.footerSig &&
          C.length &&
          m.norm(C.map((P) => P.str).join(" ")) === m.footerSig;
      (I || R) &&
        ((g.items = g.items.filter((P) => !(I && y(P)) && !(R && T(P)))),
        I && !d && (d = we(k, g.pageW)),
        R && !f && (f = we(C, g.pageW)));
    }
    const $ = kt(g.items, g.pageW, g.pageH);
    if (((g.canvas.width = g.canvas.height = 0), M.length)) {
      const F = $.left / H;
      M.forEach((y) => {
        y.indentPt = Math.max(0, y.x - F);
      });
    }
    const N = Pt(g.items, g.graphics, g.pageW, g.pageH, M),
      z = Ne(g.graphics, g.pageW, g.pageH),
      S = n.decorations === !1 ? null : it(g.graphics, g.pageW, g.pageH);
    (r.push({
      blocks: N,
      pageWPt: g.pageW,
      pageHPt: g.pageH,
      margins: $,
      pageBg: z,
      decorations: S,
      method: g.method,
    }),
      u.cleanup?.());
  }
  return { pages: r, media: l, headerRuns: d, footerRuns: f, meta: p };
}
function Nt(e, n) {
  let o = n,
    s = "";
  if (!e) return { xml: s, nextId: o };
  for (const t of e.fills) s += U(o++, t.x, t.y, t.w, t.h, t.color, null, 0);
  for (const t of e.rects)
    s += U(o++, t.x, t.y, t.w, t.h, null, t.color, t.width, t.dashed);
  for (const t of e.hlines)
    s += U(
      o++,
      t.x1,
      t.y - t.width / 2,
      t.x2 - t.x1,
      Math.max(0.5, t.width),
      t.color,
      null,
      0,
    );
  for (const t of e.vlines)
    s += U(
      o++,
      t.x - t.width / 2,
      t.y1,
      Math.max(0.5, t.width),
      t.y2 - t.y1,
      t.color,
      null,
      0,
    );
  return { xml: s, nextId: o };
}
function Ne(e, n, o) {
  let s = null;
  for (const t of e.fills) {
    if (Q(t.color)) continue;
    const a = (t.w * t.h) / (n * o);
    a > 0.85 &&
      (!s || a > s.area) &&
      (s = { fill: t, color: t.color, area: a });
  }
  return (s && (s.fill.__used = !0), s ? s.color : null);
}
function oe(e) {
  const n = J(e.font || "Calibri"),
    o = Math.max(8, Math.round((e.size || 11) * 2)),
    s = e.link;
  return (
    `<w:r><w:rPr><w:rFonts w:ascii="${n}" w:hAnsi="${n}" w:cs="${n}"/>` +
    (e.bold ? "<w:b/><w:bCs/>" : "") +
    (e.italic ? "<w:i/><w:iCs/>" : "") +
    (e.strike ? "<w:strike/>" : "") +
    (s
      ? '<w:color w:val="0563C1"/>'
      : e.color
        ? `<w:color w:val="${e.color}"/>`
        : "") +
    `<w:sz w:val="${o}"/><w:szCs w:val="${o}"/>` +
    (e.underline || s ? '<w:u w:val="single"/>' : "") +
    (e.shade
      ? `<w:shd w:val="clear" w:color="auto" w:fill="${e.shade}"/>`
      : "") +
    (e.vert ? `<w:vertAlign w:val="${e.vert}"/>` : "") +
    `</w:rPr><w:t xml:space="preserve">${J(e.text)}</w:t></w:r>`
  );
}
function te(e, n) {
  let o = "",
    s = 0;
  for (; s < e.length;) {
    const t = e[s].link;
    if (t && n && n.has(t)) {
      let a = s;
      for (; a < e.length && e[a].link === t;) a++;
      ((o += `<w:hyperlink r:id="${n.get(t)}">${e.slice(s, a).map(oe).join("")}</w:hyperlink>`),
        (s = a));
    } else ((o += oe(e[s])), s++);
  }
  return o;
}
function zt(e, n) {
  let o = "";
  return (
    e.heading && (o += `<w:pStyle w:val="Heading${Math.min(e.heading, 4)}"/>`),
    e.list &&
      (o += `<w:numPr><w:ilvl w:val="${e.list.level || 0}"/><w:numId w:val="${e.list.type === "bullet" ? 1 : 2}"/></w:numPr>`),
    (o += '<w:spacing w:after="100" w:line="240" w:lineRule="auto"/>'),
    !e.list &&
      e.indentPt > 3 &&
      (o += `<w:ind w:left="${Math.round(e.indentPt * H)}"/>`),
    e.align && e.align !== "left" && (o += `<w:jc w:val="${e.align}"/>`),
    `<w:p><w:pPr>${o}</w:pPr>${te(e.runs || [], n)}</w:p>`
  );
}
function Ct(e, n) {
  return (
    `<w:p><w:pPr>${`<w:tabs><w:tab w:val="right" w:pos="${e.tabPos}" w:leader="${e.dotLeader ? "dot" : "none"}"/></w:tabs><w:spacing w:after="40" w:line="240" w:lineRule="auto"/>`}</w:pPr>` +
    te(e.leftRuns || [], n) +
    "<w:r><w:tab/></w:r>" +
    te(e.rightRuns || [], n) +
    "</w:p>"
  );
}
function Ft(e, n) {
  const o = e.borderColor || "BFBFBF",
    s = e.dashed ? "dashed" : "single",
    t = e.widths.reduce((i, p) => i + p, 0),
    a = e.widths.map((i) => `<w:gridCol w:w="${Math.round(i * H)}"/>`).join(""),
    r = e.rows
      .map(
        (i, p) =>
          `<w:tr>${i
            .map((d, f) => {
              const w =
                  te(
                    d.filter((g) => g.text !== ""),
                    n,
                  ) || '<w:r><w:t xml:space="preserve"></w:t></w:r>',
                x =
                  e.shades && e.shades[p] && e.shades[p][f]
                    ? `<w:shd w:val="clear" w:color="auto" w:fill="${e.shades[p][f]}"/>`
                    : "";
              return `<w:tc><w:tcPr><w:tcW w:w="${Math.round((e.widths[f] || 16) * H)}" w:type="dxa"/>${x}</w:tcPr><w:p><w:pPr><w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>${w}</w:p></w:tc>`;
            })
            .join("")}</w:tr>`,
      )
      .join(""),
    l = (i) => `<w:${i} w:val="${s}" w:sz="4" w:space="0" w:color="${o}"/>`;
  return `<w:tbl><w:tblPr><w:tblStyle w:val="TableGrid"/><w:tblW w:w="${Math.round(t * H)}" w:type="dxa"/><w:tblBorders>${l("top")}${l("left")}${l("bottom")}${l("right")}${l("insideH")}${l("insideV")}</w:tblBorders><w:tblLook w:val="04A0"/></w:tblPr><w:tblGrid>${a}</w:tblGrid>${r}</w:tbl><w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>`;
}
function St(e, n) {
  const o = Math.round(e.wPt * B),
    s = Math.round(e.hPt * B);
  return `<w:p><w:pPr>${e.indentPt > 3 ? `<w:ind w:left="${Math.round(e.indentPt * H)}"/>` : ""}<w:spacing w:after="120"/></w:pPr><w:r>${be(n, e.docPrId, o, s)}</w:r></w:p>`;
}
async function ze() {
  window.JSZip ||
    (await new Promise((e, n) => {
      const o = document.createElement("script");
      ((o.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"),
        (o.onload = e),
        (o.onerror = n),
        document.head.appendChild(o));
    }));
}
function It() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:rPrDefault></w:docDefaults>
  <w:style w:type="paragraph" w:styleId="Normal" w:default="1"><w:name w:val="Normal"/><w:pPr><w:spacing w:after="100" w:line="240" w:lineRule="auto"/></w:pPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="120"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="200" w:after="100"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading3"><w:name w:val="heading 3"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="160" w:after="80"/><w:outlineLvl w:val="2"/></w:pPr><w:rPr><w:b/></w:rPr></w:style>
  <w:style w:type="paragraph" w:styleId="Heading4"><w:name w:val="heading 4"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="120" w:after="60"/><w:outlineLvl w:val="3"/></w:pPr><w:rPr><w:b/></w:rPr></w:style>
  <w:style w:type="table" w:styleId="TableGrid"><w:name w:val="Table Grid"/><w:tblPr><w:tblBorders><w:top w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/><w:left w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/><w:bottom w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/><w:right w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/><w:insideH w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/><w:insideV w:val="single" w:sz="4" w:space="0" w:color="BFBFBF"/></w:tblBorders></w:tblPr></w:style>
</w:styles>`;
}
function Rt() {
  const e = ["&#8226;", "o", "&#9642;"],
    n = [
      ["decimal", "%1."],
      ["lowerLetter", "%2."],
      ["lowerRoman", "%3."],
    ],
    o = [0, 1, 2]
      .map(
        (t) =>
          `<w:lvl w:ilvl="${t}"><w:start w:val="1"/><w:numFmt w:val="bullet"/><w:lvlText w:val="${e[t]}"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="${720 + t * 360}" w:hanging="360"/></w:pPr><w:rPr><w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/></w:rPr></w:lvl>`,
      )
      .join(""),
    s = [0, 1, 2]
      .map(
        (t) =>
          `<w:lvl w:ilvl="${t}"><w:start w:val="1"/><w:numFmt w:val="${n[t][0]}"/><w:lvlText w:val="${n[t][1]}"/><w:lvlJc w:val="left"/><w:pPr><w:ind w:left="${720 + t * 360}" w:hanging="360"/></w:pPr></w:lvl>`,
      )
      .join("");
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:abstractNum w:abstractNumId="0"><w:multiLevelType w:val="hybridMultilevel"/>${o}</w:abstractNum>
  <w:abstractNum w:abstractNumId="1"><w:multiLevelType w:val="hybridMultilevel"/>${s}</w:abstractNum>
  <w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
  <w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num>
</w:numbering>`;
}
const ae = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;
function Dt(e, n) {
  for (const o of e)
    if (o.type === "table")
      for (const s of o.rows)
        for (const t of s) for (const a of t) a.link && n.add(a.link);
    else if (o.type === "psplit")
      for (const s of [...(o.leftRuns || []), ...(o.rightRuns || [])])
        s.link && n.add(s.link);
    else if (o.runs) for (const s of o.runs) s.link && n.add(s.link);
}
function fe(e) {
  if (!e || !e.runs.length) return "<w:p/>";
  const n = e.align !== "left" ? `<w:jc w:val="${e.align}"/>` : "",
    o = e.pageNum
      ? '<w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r><w:fldChar w:fldCharType="separate"/></w:r><w:r><w:t>1</w:t></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r>'
      : e.runs.map(oe).join("");
  return `<w:p><w:pPr>${n}<w:spacing w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>${o}</w:p>`;
}
const xe =
  'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"';
async function Ce({
  pages: e,
  media: n,
  headerRuns: o,
  footerRuns: s,
  meta: t,
}) {
  await ze();
  const a = new window.JSZip(),
    r = new Map();
  n.forEach((k, C) => r.set(k.name, `rId${C + 4}`));
  const l = new Set();
  e.forEach((k) => Dt(k.blocks, l));
  const i = new Map();
  let p = n.length + 4;
  for (const k of l) i.set(k, `rId${p++}`);
  const m = o ? `rId${p++}` : null,
    d = s ? `rId${p++}` : null;
  let f = 1,
    w = "";
  e.forEach((k, C) => {
    const I = Nt(k.decorations, f);
    ((f = I.nextId),
      C > 0
        ? (w += `<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr><w:r><w:br w:type="page"/></w:r>${I.xml}</w:p>
`)
        : I.xml &&
          (w += `<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="20" w:lineRule="exact"/></w:pPr>${I.xml}</w:p>
`));
    for (const R of k.blocks)
      R.type === "table"
        ? (w += Ft(R, i))
        : R.type === "image"
          ? ((R.docPrId = f++), (w += St(R, r.get(R.mediaName))))
          : R.type === "psplit"
            ? (w += Ct(R, i))
            : (w += zt(R, i));
  });
  const x = [...i.entries()]
      .map(
        ([k, C]) =>
          `<Relationship Id="${C}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" Target="${J(k)}" TargetMode="External"/>`,
      )
      .join(""),
    u = e[0]?.margins || { top: 720, left: 720, right: 720, bottom: 720 },
    g = Math.round((e[0]?.pageWPt || 612) * H),
    M = Math.round((e[0]?.pageHPt || 792) * H),
    N = `<w:sectPr>${(m ? `<w:headerReference w:type="default" r:id="${m}"/>` : "") + (d ? `<w:footerReference w:type="default" r:id="${d}"/>` : "")}<w:pgSz w:w="${g}" w:h="${M}"/><w:pgMar w:top="${u.top}" w:right="${u.right}" w:bottom="${u.bottom}" w:left="${u.left}" w:header="${Math.min(u.top, 708)}" w:footer="${Math.min(u.bottom, 708)}" w:gutter="0"/></w:sectPr>`;
  for (const k of n) a.file(`word/media/${k.name}`, k.bytes);
  const z = t && (t.title || t.author);
  (a.file(
    "[Content_Types].xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="jpeg" ContentType="image/jpeg"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
  <Override PartName="/word/numbering.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml"/>
  ${m ? '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>' : ""}
  ${d ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : ""}
  ${z ? '<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>' : ""}
</Types>`,
  ),
    a.file(
      "_rels/.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>${z ? '<Relationship Id="rIdCore" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>' : ""}</Relationships>`,
    ));
  const S = n
      .map(
        (k) =>
          `<Relationship Id="${r.get(k.name)}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${k.name}"/>`,
      )
      .join(""),
    F =
      (m
        ? `<Relationship Id="${m}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>`
        : "") +
      (d
        ? `<Relationship Id="${d}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>`
        : "");
  (a.file(
    "word/_rels/document.xml.rels",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering" Target="numbering.xml"/>
  ${S}${x}${F}
</Relationships>`,
  ),
    m &&
      a.file(
        "word/header1.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:hdr ${xe}>${fe(o)}</w:hdr>`,
      ),
    d &&
      a.file(
        "word/footer1.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:ftr ${xe}>${fe(s)}</w:ftr>`,
      ),
    z &&
      a.file(
        "docProps/core.xml",
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${t.title ? `<dc:title>${J(t.title)}</dc:title>` : ""}${t.author ? `<dc:creator>${J(t.author)}</dc:creator>` : ""}</cp:coreProperties>`,
      ));
  const y = e.find((k) => k.pageBg)?.pageBg || null,
    T = y ? `<w:background w:color="${y}"/>` : "";
  return (
    a.file(
      "word/document.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" mc:Ignorable="w14">${T}<w:body>
${w}
${N}
</w:body></w:document>`,
    ),
    a.file("word/styles.xml", It()),
    a.file("word/numbering.xml", Rt()),
    a.file(
      "word/settings.xml",
      y
        ? ae.replace("<w:compat>", "<w:displayBackgroundShape/><w:compat>")
        : ae,
    ),
    a.generateAsync({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    })
  );
}
function U(e, n, o, s, t, a, r, l, i) {
  const p = Math.round(n * B),
    m = Math.round(o * B),
    d = Math.max(1, Math.round(s * B)),
    f = Math.max(1, Math.round(t * B)),
    w = a
      ? `<a:solidFill><a:srgbClr val="${a}"/></a:solidFill>`
      : "<a:noFill/>",
    x = i ? '<a:prstDash val="dash"/>' : "",
    u = r
      ? `<a:ln w="${Math.max(1, Math.round((l || 1) * B))}"><a:solidFill><a:srgbClr val="${r}"/></a:solidFill>${x}</a:ln>`
      : "<a:ln><a:noFill/></a:ln>";
  return `<w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="${100 + e}" behindDoc="1" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>${p}</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>${m}</wp:posOffset></wp:positionV><wp:extent cx="${d}" cy="${f}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapNone/><wp:docPr id="${e}" name="sh${e}"/><wp:cNvGraphicFramePr/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"><wps:wsp xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape"><wps:cNvSpPr/><wps:spPr><a:xfrm><a:off x="${p}" y="${m}"/><a:ext cx="${d}" cy="${f}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom>${w}${u}</wps:spPr><wps:bodyPr/></wps:wsp></a:graphicData></a:graphic></wp:anchor></w:drawing></w:r>`;
}
function Lt(e, n, o, s, t, a) {
  const r = Math.round(o * B),
    l = Math.round(s * B),
    i = Math.max(1, Math.round(t * B)),
    p = Math.max(1, Math.round(a * B));
  return `<w:r><w:rPr><w:noProof/></w:rPr><w:drawing><wp:anchor distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="${50 + e}" behindDoc="1" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>${r}</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>${l}</wp:posOffset></wp:positionV><wp:extent cx="${i}" cy="${p}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:wrapNone/><wp:docPr id="${e}" name="img${e}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${e}" name="img${e}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${n}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="${r}" y="${l}"/><a:ext cx="${i}" cy="${p}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:anchor></w:drawing></w:r>`;
}
async function Et(e, n, o) {
  const s = window.pdfjsLib;
  if (!s) throw new Error("pdf.js not loaded");
  o?.(2, "Opening PDF…");
  const t = await s.getDocument({ data: e }).promise,
    a = t.numPages,
    r = [],
    l = [];
  let i = 0;
  for (let p = 1; p <= a; p++) {
    const m = 5 + Math.round(((p - 1) / a) * 88);
    o?.(m, `Page ${p}/${a}: extracting…`);
    const d = await t.getPage(p),
      f = await $e(d, n, 2, (g) =>
        o?.(
          m + Math.round((g / 100) * (88 / a) * 0.8),
          `Page ${p}/${a}: OCR ${g}%`,
        ),
      );
    Pe(f.items, f.graphics);
    let w = [];
    if (n.images !== !1 && f.method === "native")
      try {
        const g = await Te(
          f.canvas,
          f.scale,
          f.graphics,
          f.pageW,
          f.pageH,
          l,
          i,
        );
        ((w = g.blocks), (i = g.nextId));
      } catch {
        w = [];
      }
    f.canvas.width = f.canvas.height = 0;
    const x = ge(f.items).map((g) => ({
      items: g.slice().sort((M, $) => M.x - $.x),
    }));
    je(x);
    const u = x.map((g) => g.items);
    (r.push({
      lines: u,
      graphics: f.graphics,
      images: w,
      pageWPt: f.pageW,
      pageHPt: f.pageH,
    }),
      d.cleanup?.());
  }
  return { pages: r, media: l };
}
async function Fe({ pages: e, media: n }) {
  await ze();
  const o = new window.JSZip(),
    s = new Map();
  n.forEach((l, i) => s.set(l.name, `rId${i + 3}`));
  let t = 1,
    a = "";
  for (let l = 0; l < e.length; l++) {
    const i = e[l],
      p = Math.round(i.pageWPt * H),
      m = Math.round(i.pageHPt * H);
    let d = "";
    const f = Ne(i.graphics, i.pageWPt, i.pageHPt);
    f && (d += U(t++, 0, 0, i.pageWPt, i.pageHPt, f, null, 0));
    for (const u of i.graphics.fills)
      (u.w * u.h) / (i.pageWPt * i.pageHPt) > 0.85 ||
        (d += U(t++, u.x, u.y, u.w, u.h, u.color, null, 0));
    for (const u of i.images)
      d += Lt(t++, s.get(u.mediaName), u.x, u.y, u.wPt, u.hPt);
    for (const u of i.graphics.rects)
      d += U(t++, u.x, u.y, u.w, u.h, null, u.color, u.width, u.dashed);
    for (const u of i.graphics.hlines)
      d += U(
        t++,
        u.x1,
        u.y - u.width / 2,
        u.x2 - u.x1,
        Math.max(0.5, u.width),
        u.color,
        null,
        0,
      );
    for (const u of i.graphics.vlines)
      d += U(
        t++,
        u.x - u.width / 2,
        u.y1,
        Math.max(0.5, u.width),
        u.y2 - u.y1,
        u.color,
        null,
        0,
      );
    let w = "";
    for (const u of i.lines)
      for (const g of u) {
        if (!g.str || !g.str.trim()) continue;
        const M = g.ascent || 0.8,
          $ = g.x,
          N = g.y - g.fontSize * M;
        w += Ye(
          {
            xEmu: Math.round($ * B),
            yEmu: Math.round(N * B),
            wEmu: Math.round((g.w + g.fontSize) * B),
            hEmu: Math.round(g.fontSize * 1.5 * B),
            pageWEmu: Math.round(i.pageWPt * B),
            pageHEmu: Math.round(i.pageHPt * B),
            runs: [
              {
                text: g.str,
                fontName: g.resolvedFont || "Calibri",
                fontSize: g.fontSize,
                isBold: g.isBold,
                isItalic: g.isItalic,
                isUnderline: g.underline,
                isStrike: g.strike,
                vert: g.superscript
                  ? "superscript"
                  : g.subscript
                    ? "subscript"
                    : null,
                color: g.color || null,
              },
            ],
          },
          t++,
        );
      }
    const x = `<w:sectPr><w:pgSz w:w="${p}" w:h="${m}"/><w:pgMar w:top="0" w:right="0" w:bottom="0" w:left="0" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr>`;
    l < e.length - 1
      ? (a += `<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/><w:sectPr><w:pgSz w:w="${p}" w:h="${m}"/><w:pgMar w:top="0" w:right="0" w:bottom="0" w:left="0" w:header="0" w:footer="0" w:gutter="0"/></w:sectPr></w:pPr>${d}${w}</w:p>
`)
      : (a += `<w:p><w:pPr><w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>${d}${w}</w:p>
${x}`);
  }
  for (const l of n) o.file(`word/media/${l.name}`, l.bytes);
  (o.file(
    "[Content_Types].xml",
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="jpeg" ContentType="image/jpeg"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/>
</Types>`,
  ),
    o.file(
      "_rels/.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
    ));
  const r = n
    .map(
      (l) =>
        `<Relationship Id="${s.get(l.name)}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${l.name}"/>`,
    )
    .join("");
  return (
    o.file(
      "word/_rels/document.xml.rels",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>
  ${r}
</Relationships>`,
    ),
    o.file(
      "word/document.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14">
  <w:body>
${a}
  </w:body>
</w:document>`,
    ),
    o.file(
      "word/styles.xml",
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:style w:type="paragraph" w:styleId="Normal" w:default="1"><w:name w:val="Normal"/><w:pPr><w:spacing w:after="0"/></w:pPr></w:style></w:styles>`,
    ),
    o.file("word/settings.xml", ae),
    o.generateAsync({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
    })
  );
}
const Bt = [
  { code: "eng", label: "English" },
  { code: "fra", label: "French" },
  { code: "deu", label: "German" },
  { code: "spa", label: "Spanish" },
  { code: "ita", label: "Italian" },
  { code: "por", label: "Portuguese" },
  { code: "rus", label: "Russian" },
  { code: "ara", label: "Arabic" },
  { code: "hin", label: "Hindi" },
  { code: "chi_sim", label: "Chinese (Simplified)" },
  { code: "jpn", label: "Japanese" },
  { code: "kor", label: "Korean" },
];
typeof window < "u" &&
  (window.__docxDebug = { buildFlowingDocx: Ce, buildExactDocx: Fe });
function Ht({ showNotification: e, showDownloadDialog: n }) {
  const [o, s] = W.useState(null),
    [t, a] = W.useState(!1),
    [r, l] = W.useState(!1),
    [i, p] = W.useState(0),
    [m, d] = W.useState(""),
    [f, w] = W.useState(null),
    [x, u] = W.useState("flow"),
    [g, M] = W.useState({
      jpegQ: "high",
      ocrLang: "eng",
      font: "Calibri",
      images: !0,
    }),
    $ = W.useRef(),
    N = W.useCallback(
      (y) => {
        if (!y || y.type !== "application/pdf") {
          e?.("Please select a PDF file", "error");
          return;
        }
        (s(y), w(null));
      },
      [e],
    ),
    z = W.useCallback(
      (y) => {
        (y.preventDefault(), a(!1), N(y.dataTransfer.files[0]));
      },
      [N],
    ),
    S = (y, T) => {
      const k = URL.createObjectURL(y),
        C = Object.assign(document.createElement("a"), {
          href: k,
          download: T,
        });
      (document.body.appendChild(C),
        C.click(),
        setTimeout(() => {
          (document.body.removeChild(C), URL.revokeObjectURL(k));
        }, 1500));
    },
    F = async () => {
      if (!o) return;
      if (!window.pdfjsLib) {
        e?.("pdf.js not loaded — please refresh", "error");
        return;
      }
      (l(!0), p(0), d("Reading PDF…"), w(null));
      const y = (T, k) => {
        (p(T), d(k));
      };
      try {
        const T = new Uint8Array(await o.arrayBuffer()),
          k = o.name.replace(/\.pdf$/i, "") + ".docx";
        let C;
        if (x === "pixel") {
          const R = await tt(
            T,
            { high: 0.93, medium: 0.82, max: 0.97 }[g.jpegQ] ?? 0.93,
            y,
          );
          (y(88, "Assembling DOCX…"), (C = await et(R)));
        } else if (x === "exact") {
          const I = await Et(T, g, y);
          (y(95, "Building precision DOCX…"), (C = await Fe(I)));
        } else {
          const I = await Tt(T, g, y);
          (y(95, "Building editable Word document…"), (C = await Ce(I)));
        }
        if (
          (y(100, "Done!"),
          w({ name: k, blob: C }),
          e?.("Conversion complete!", "success"),
          S(C, k),
          n)
        ) {
          const I = await re(C);
          n(k, C.size, I.buffer);
        }
      } catch (T) {
        (console.error("[PdfToDocx]", T),
          e?.(`Conversion failed: ${T.message}`, "error"));
      } finally {
        l(!1);
      }
    };
  return c.jsxs("div", {
    className: "max-w-3xl mx-auto space-y-6",
    children: [
      c.jsxs("div", {
        children: [
          c.jsx("h2", {
            className: "text-xl sm:text-2xl font-bold text-white mb-1",
            children: "PDF to Word (DOCX)",
          }),
          c.jsx("p", {
            className: "text-zinc-400 text-xs sm:text-sm",
            children:
              "Convert any PDF to a Word document — 100% in your browser, nothing uploaded.",
          }),
        ],
      }),
      c.jsxs("div", {
        className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
        children: [
          c.jsxs("button", {
            onClick: () => u("flow"),
            className: `flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all text-left ${x === "flow" ? "border-blue-500 bg-blue-500/10" : "border-zinc-700 bg-zinc-900 hover:border-zinc-600"}`,
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2 w-full",
                children: [
                  c.jsx(le, {
                    className: `w-5 h-5 flex-shrink-0 ${x === "flow" ? "text-blue-400" : "text-zinc-400"}`,
                  }),
                  c.jsx("span", {
                    className: `font-semibold text-sm ${x === "flow" ? "text-white" : "text-zinc-300"}`,
                    children: "All-in-One",
                  }),
                  c.jsx("span", {
                    className:
                      "ml-auto text-[10px] px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-300 font-bold whitespace-nowrap",
                    children: "BEST",
                  }),
                ],
              }),
              c.jsxs("p", {
                className: "text-xs text-zinc-500 leading-relaxed",
                children: [
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "Best of both worlds.",
                  }),
                  " ",
                  "Fully-editable paragraphs, headings, lists &",
                  " ",
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "tables",
                  }),
                  " — plus the PDF's complete ",
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "graphics layer",
                  }),
                  " ",
                  "(rule lines, borders, shapes, fills, images). Looks like the PDF, edits like a doc.",
                ],
              }),
            ],
          }),
          c.jsxs("button", {
            onClick: () => u("exact"),
            className: `flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all text-left ${x === "exact" ? "border-blue-500 bg-blue-500/10" : "border-zinc-700 bg-zinc-900 hover:border-zinc-600"}`,
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2 w-full",
                children: [
                  c.jsx(We, {
                    className: `w-5 h-5 flex-shrink-0 ${x === "exact" ? "text-blue-400" : "text-zinc-400"}`,
                  }),
                  c.jsx("span", {
                    className: `font-semibold text-sm ${x === "exact" ? "text-white" : "text-zinc-300"}`,
                    children: "Exact Layout",
                  }),
                ],
              }),
              c.jsxs("p", {
                className: "text-xs text-zinc-500 leading-relaxed",
                children: [
                  "Every word at its exact X/Y, over a vector layer of the PDF's",
                  " ",
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "lines, borders, fills & images",
                  }),
                  ". Pixel-accurate ",
                  c.jsx("em", { children: "and" }),
                  " editable.",
                ],
              }),
            ],
          }),
          c.jsxs("button", {
            onClick: () => u("pixel"),
            className: `flex flex-col items-start gap-2 p-4 rounded-xl border-2 transition-all text-left ${x === "pixel" ? "border-blue-500 bg-blue-500/10" : "border-zinc-700 bg-zinc-900 hover:border-zinc-600"}`,
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2 w-full",
                children: [
                  c.jsx(Ae, {
                    className: `w-5 h-5 flex-shrink-0 ${x === "pixel" ? "text-blue-400" : "text-zinc-400"}`,
                  }),
                  c.jsx("span", {
                    className: `font-semibold text-sm ${x === "pixel" ? "text-white" : "text-zinc-300"}`,
                    children: "Pixel Perfect",
                  }),
                ],
              }),
              c.jsxs("p", {
                className: "text-xs text-zinc-500 leading-relaxed",
                children: [
                  "Every page → high-res JPEG inside DOCX.",
                  " ",
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "100% visual accuracy.",
                  }),
                  " ",
                  "Text is not editable — best for visual fidelity only.",
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        onDrop: z,
        onDragOver: (y) => {
          (y.preventDefault(), a(!0));
        },
        onDragLeave: () => a(!1),
        onClick: () => !o && $.current?.click(),
        className: `border-2 border-dashed rounded-xl p-6 sm:p-10 flex flex-col items-center justify-center gap-4 transition-all ${t ? "border-blue-400 bg-blue-500/10 cursor-copy" : o ? "border-zinc-700 bg-zinc-900" : "border-zinc-700 bg-zinc-900 hover:border-zinc-500 hover:bg-zinc-800/50 cursor-pointer"}`,
        children: [
          c.jsx("input", {
            ref: $,
            type: "file",
            accept: ".pdf,application/pdf",
            className: "hidden",
            onChange: (y) => y.target.files[0] && N(y.target.files[0]),
          }),
          o
            ? c.jsxs("div", {
                className: "flex items-center gap-4 w-full",
                children: [
                  c.jsx("div", {
                    className:
                      "w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0",
                    children: c.jsx(Re, { className: "w-7 h-7 text-blue-400" }),
                  }),
                  c.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      c.jsx("p", {
                        className: "text-white font-medium truncate",
                        children: o.name,
                      }),
                      c.jsxs("p", {
                        className: "text-zinc-500 text-sm",
                        children: [(o.size / 1024 / 1024).toFixed(2), " MB"],
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    "aria-label": "Close",
                    onClick: (y) => {
                      (y.stopPropagation(), s(null), w(null));
                    },
                    className:
                      "p-2 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors",
                    children: c.jsx(Ee, { className: "w-5 h-5" }),
                  }),
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx("div", {
                    className:
                      "w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center",
                    children: c.jsx(De, { className: "w-7 h-7 text-zinc-400" }),
                  }),
                  c.jsxs("div", {
                    className: "text-center",
                    children: [
                      c.jsx("p", {
                        className: "text-white font-medium",
                        children: "Drop your PDF here",
                      }),
                      c.jsx("p", {
                        className: "text-zinc-500 text-sm mt-1",
                        children: "or click to browse · PDF only",
                      }),
                    ],
                  }),
                ],
              }),
        ],
      }),
      o &&
        !r &&
        c.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-4",
          children: [
            c.jsx("h3", {
              className: "text-sm font-semibold text-zinc-300",
              children: "Options",
            }),
            x === "pixel" &&
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "block text-xs text-zinc-400 mb-2",
                    children: "Image Quality",
                  }),
                  c.jsx("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: [
                      { k: "medium", l: "Balanced", s: "Smaller file" },
                      { k: "high", l: "High", s: "Recommended" },
                      { k: "max", l: "Maximum", s: "Largest file" },
                    ].map((y) =>
                      c.jsxs(
                        "button",
                        {
                          onClick: () => M((T) => ({ ...T, jpegQ: y.k })),
                          className: `flex flex-col items-center py-2 px-3 rounded-lg border text-xs transition-all ${g.jpegQ === y.k ? "border-blue-500 bg-blue-500/10 text-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`,
                          children: [
                            c.jsx("span", {
                              className: "font-semibold",
                              children: y.l,
                            }),
                            c.jsx("span", {
                              className: "text-[10px] mt-0.5 opacity-70",
                              children: y.s,
                            }),
                          ],
                        },
                        y.k,
                      ),
                    ),
                  }),
                ],
              }),
            x !== "pixel" &&
              c.jsxs("div", {
                className: "space-y-4",
                children: [
                  x !== "pixel" &&
                    c.jsxs("label", {
                      className:
                        "flex items-start gap-3 cursor-pointer select-none",
                      children: [
                        c.jsx("input", {
                          type: "checkbox",
                          checked: g.images,
                          onChange: (y) =>
                            M((T) => ({ ...T, images: y.target.checked })),
                          className: "mt-0.5 w-4 h-4 accent-blue-500",
                        }),
                        c.jsxs("span", {
                          className: "text-xs text-zinc-300",
                          children: [
                            "Extract & embed images",
                            c.jsx("span", {
                              className:
                                "block text-[10px] text-zinc-600 mt-0.5",
                              children:
                                "Pulls logos, photos & figures out of the PDF and places them in reading order",
                            }),
                          ],
                        }),
                      ],
                    }),
                  x === "flow" &&
                    c.jsxs("label", {
                      className:
                        "flex items-start gap-3 cursor-pointer select-none",
                      children: [
                        c.jsx("input", {
                          type: "checkbox",
                          checked: g.decorations !== !1,
                          onChange: (y) =>
                            M((T) => ({ ...T, decorations: y.target.checked })),
                          className: "mt-0.5 w-4 h-4 accent-blue-500",
                        }),
                        c.jsxs("span", {
                          className: "text-xs text-zinc-300",
                          children: [
                            "Preserve graphics layer",
                            c.jsx("span", {
                              className:
                                "block text-[10px] text-zinc-600 mt-0.5",
                              children:
                                "Redraws rule lines, dividers, borders, boxes & coloured shapes behind the editable text",
                            }),
                          ],
                        }),
                      ],
                    }),
                  x === "flow" &&
                    c.jsxs("label", {
                      className:
                        "flex items-start gap-3 cursor-pointer select-none",
                      children: [
                        c.jsx("input", {
                          type: "checkbox",
                          checked: g.headersFooters !== !1,
                          onChange: (y) =>
                            M((T) => ({
                              ...T,
                              headersFooters: y.target.checked,
                            })),
                          className: "mt-0.5 w-4 h-4 accent-blue-500",
                        }),
                        c.jsxs("span", {
                          className: "text-xs text-zinc-300",
                          children: [
                            "Detect headers, footers & page numbers",
                            c.jsx("span", {
                              className:
                                "block text-[10px] text-zinc-600 mt-0.5",
                              children:
                                "Repeating top/bottom text becomes real Word headers & footers, with live page-number fields",
                            }),
                          ],
                        }),
                      ],
                    }),
                  c.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: [
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", {
                            className: "block text-xs text-zinc-400 mb-1.5",
                            children: "Fallback OCR Language",
                          }),
                          c.jsx("select", {
                            value: g.ocrLang,
                            onChange: (y) =>
                              M((T) => ({ ...T, ocrLang: y.target.value })),
                            className:
                              "w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: Bt.map((y) =>
                              c.jsx(
                                "option",
                                { value: y.code, children: y.label },
                                y.code,
                              ),
                            ),
                          }),
                          c.jsx("p", {
                            className: "text-[10px] text-zinc-600 mt-1",
                            children: "Used only for scanned / image PDFs",
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("label", {
                            className: "block text-xs text-zinc-400 mb-1.5",
                            children: "Fallback Word Font",
                          }),
                          c.jsx("select", {
                            value: g.font,
                            onChange: (y) =>
                              M((T) => ({ ...T, font: y.target.value })),
                            className:
                              "w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                              "Calibri",
                              "Arial",
                              "Times New Roman",
                              "Georgia",
                              "Verdana",
                              "Cambria",
                              "Courier New",
                            ].map((y) =>
                              c.jsx("option", { value: y, children: y }, y),
                            ),
                          }),
                          c.jsx("p", {
                            className: "text-[10px] text-zinc-600 mt-1",
                            children: "Used when font can't be detected",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "bg-zinc-950/60 border border-zinc-800 rounded-lg p-4",
                    children: [
                      c.jsxs("p", {
                        className:
                          "text-xs text-zinc-400 font-semibold mb-3 flex items-center gap-1.5",
                        children: [
                          c.jsx(le, { className: "w-3.5 h-3.5 text-blue-400" }),
                          " ",
                          x === "flow"
                            ? "All-in-One Reconstruction Engine"
                            : "Exact-Layout Conversion Engine",
                        ],
                      }),
                      x === "flow"
                        ? c.jsxs("ol", {
                            className:
                              "text-xs text-zinc-500 space-y-2 list-decimal list-inside leading-relaxed",
                            children: [
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Character-level extraction",
                                  }),
                                  " ",
                                  "— PDF.js reads every glyph's transform matrix for exact position, rendered font size & font family",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "True colour recovery",
                                  }),
                                  " ",
                                  "— the page is rendered and each word's ink colour is sampled back, so coloured text & headings survive",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Paragraph & line reflow",
                                  }),
                                  " ",
                                  "— lines are clustered into real paragraphs with detected left / centre / right / justified alignment & indents",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Headings & nested lists",
                                  }),
                                  " ",
                                  "— font-size hierarchy maps to Word heading styles; bullet & numbered lists become native multi-level Word lists",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Headers, footers & page numbers",
                                  }),
                                  " ",
                                  "— text repeating in the top/bottom margin becomes real Word headers/footers with live page-number fields",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Table detection",
                                  }),
                                  " ",
                                  "— aligned columns across rows are rebuilt as real, editable Word tables with borders",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Multi-column reading order",
                                  }),
                                  " ",
                                  "— column gutters are detected so two-column pages read top-to-bottom per column, not interleaved",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Graphics + image layer",
                                  }),
                                  " ",
                                  "— embedded images plus every leftover rule line, divider, border, box & coloured shape are redrawn behind the text",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Tesseract OCR fallback",
                                  }),
                                  " ",
                                  "— scanned / image-only pages are OCR'd and reconstructed into the same editable structure",
                                ],
                              }),
                            ],
                          })
                        : c.jsxs("ol", {
                            className:
                              "text-xs text-zinc-500 space-y-2 list-decimal list-inside leading-relaxed",
                            children: [
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Character-exact positioning",
                                  }),
                                  " ",
                                  "— every word placed as a text box at its exact X/Y from the PDF transform matrix (1 pt = 12700 EMU)",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Vector graphics layer",
                                  }),
                                  " ",
                                  "— the content stream is interpreted to redraw table ruling lines, cell borders & rule lines as real shapes",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Fills, highlights & underlines",
                                  }),
                                  " ",
                                  "— coloured background rectangles and underline strokes are reproduced behind / on the text",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Image layer",
                                  }),
                                  " — embedded images are located and placed behind the text at their exact size & position",
                                ],
                              }),
                              c.jsxs("li", {
                                children: [
                                  c.jsx("strong", {
                                    className: "text-zinc-300",
                                    children: "Page geometry preserved",
                                  }),
                                  " ",
                                  "— each page's exact size drives a zero-margin DOCX section → zero layout shift. Scanned PDFs fall back to OCR",
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                    children: (x === "flow"
                      ? [
                          ["✅", "Editable paragraphs"],
                          ["✅", "Real tables"],
                          ["✅", "Headings & nested lists"],
                          ["✅", "Exact text colour"],
                          ["✅", "Bold / Italic / U / S̶"],
                          ["✅", "Super & subscript"],
                          ["✅", "Hyperlinks"],
                          ["✅", "Headers / footers / page #"],
                          ["✅", "Highlights & shapes"],
                          ["✅", "Multi-column order"],
                          ["✅", "Images & TOC leaders"],
                          ["🔒", "100% local"],
                        ]
                      : [
                          ["✅", "Exact X/Y coords"],
                          ["✅", "Table & rule lines"],
                          ["✅", "Borders & fills"],
                          ["✅", "Underline & strike"],
                          ["✅", "Super & subscript"],
                          ["✅", "Dashed lines"],
                          ["✅", "Images"],
                          ["✅", "Exact colour"],
                          ["✅", "Bold / Italic"],
                          ["✅", "Scanned PDFs"],
                          ["🔒", "100% local"],
                        ]
                    ).map(([y, T]) =>
                      c.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-1.5 text-xs text-zinc-500",
                          children: [
                            c.jsx("span", { children: y }),
                            c.jsx("span", { children: T }),
                          ],
                        },
                        T,
                      ),
                    ),
                  }),
                ],
              }),
          ],
        }),
      r &&
        c.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                c.jsx(Oe, {
                  className: "w-5 h-5 text-blue-400 animate-spin flex-shrink-0",
                }),
                c.jsx("span", {
                  className: "text-sm text-zinc-300",
                  children: m,
                }),
              ],
            }),
            c.jsx("div", {
              className: "h-2 bg-zinc-800 rounded-full overflow-hidden",
              children: c.jsx("div", {
                className:
                  "h-full bg-blue-500 rounded-full transition-all duration-300",
                style: { width: `${i}%` },
              }),
            }),
            c.jsxs("div", {
              className:
                "flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between",
              children: [
                c.jsxs("p", {
                  className: "text-xs text-zinc-500",
                  children: [i, "% complete"],
                }),
                x !== "pixel" &&
                  c.jsx("p", {
                    className: "text-xs text-zinc-600",
                    children: "Native PDFs: fast · Scanned: ~10–30s/page",
                  }),
              ],
            }),
          ],
        }),
      f &&
        !r &&
        c.jsxs("div", {
          className:
            "bg-emerald-900/20 border border-emerald-800/50 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-3 min-w-0",
              children: [
                c.jsx(Be, {
                  className: "w-6 h-6 text-emerald-400 flex-shrink-0",
                }),
                c.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    c.jsx("p", {
                      className: "text-white font-medium text-sm truncate",
                      children: f.name,
                    }),
                    c.jsxs("p", {
                      className: "text-zinc-400 text-xs",
                      children: [
                        (f.blob.size / 1024).toFixed(1),
                        " KB · Saved to Downloads",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("button", {
              onClick: () => S(f.blob, f.name),
              className:
                "flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors flex-shrink-0 w-full sm:w-auto",
              children: [
                c.jsx(Le, { className: "w-4 h-4" }),
                " Download again",
              ],
            }),
          ],
        }),
      o &&
        !r &&
        c.jsx("button", {
          onClick: F,
          className:
            "w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-900/30 text-base",
          children: "Convert to Word",
        }),
      c.jsxs("div", {
        className:
          "bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-2",
        children: [
          c.jsxs("p", {
            className:
              "text-xs font-semibold text-zinc-400 flex items-center gap-1.5",
            children: [
              c.jsx(He, { className: "w-3.5 h-3.5" }),
              " Mode comparison",
            ],
          }),
          x === "pixel"
            ? c.jsxs("p", {
                className: "text-xs text-zinc-500 leading-relaxed",
                children: [
                  c.jsx("strong", {
                    className: "text-zinc-400",
                    children: "Pixel Perfect",
                  }),
                  " — pages become JPEG images inside the DOCX. Looks identical to the PDF. Text is not selectable or editable.",
                ],
              })
            : x === "exact"
              ? c.jsxs("p", {
                  className: "text-xs text-zinc-500 leading-relaxed",
                  children: [
                    c.jsx("strong", {
                      className: "text-zinc-400",
                      children: "Exact Layout",
                    }),
                    " — every word is placed as a text box at its exact page coordinates, layered over a faithful vector reproduction of the PDF's table lines, cell borders, coloured fills, underlines and images (interpreted straight from the content stream). The page looks identical to the PDF and every element stays editable. Best when placement must match the PDF to the point.",
                  ],
                })
              : c.jsxs("p", {
                  className: "text-xs text-zinc-500 leading-relaxed",
                  children: [
                    c.jsx("strong", {
                      className: "text-zinc-400",
                      children: "All-in-One",
                    }),
                    " — the best of both worlds in one file. It reconstructs real flowing paragraphs, headings, lists, editable tables and multi-column reading order (font, size, bold, italic, underline, strike, colour, super/subscript, highlights & hyperlinks all preserved) — and on top of that redraws the PDF's complete graphics layer (rule lines, dividers, borders, boxes, coloured shapes, page background & images) behind the text. It looks like the PDF yet stays fully editable. Scanned PDFs fall back to OCR into the same structure.",
                  ],
                }),
        ],
      }),
    ],
  });
}
export { Ht as default };
