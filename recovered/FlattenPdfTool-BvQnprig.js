import { r as d, j as e } from "./react-vendor-Bc7KCos-.js";
const de =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js",
  ce = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  pe =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  ge = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/";
function q(t) {
  return new Promise((r, i) => {
    if (document.querySelector(`script[src="${t}"]`)) {
      r();
      return;
    }
    const s = document.createElement("script");
    ((s.src = t),
      (s.onload = r),
      (s.onerror = () => i(new Error(`Failed: ${t}`))),
      document.head.appendChild(s));
  });
}
async function ue() {
  (await q(de),
    await q(ce),
    window.pdfjsLib && (window.pdfjsLib.GlobalWorkerOptions.workerSrc = pe));
}
const k = "inherit",
  D = "inherit",
  a = {
    black: "#000000",
    s1: "#111111",
    b0: "rgba(255,255,255,0.03)",
    muted: "#48484A",
    dim: "#636366",
    sub: "#8E8E93",
    sec: "#AEAEB2",
    text: "#D1D1D6",
    hi: "#F5F5F7",
    white: "#FFFFFF",
  },
  K = [
    {
      id: "standard",
      label: "Standard",
      tag: "Recommended",
      desc: "Vector-preserving flatten. Merges all form fields, AcroForms, and annotations into static page content. Visually identical to original — text remains fully searchable.",
      features: [
        "Form fields & AcroForms",
        "Annotations & comments",
        "JavaScript actions",
        "Sticky notes & markup",
      ],
      raster: !1,
      searchable: !0,
    },
    {
      id: "full",
      label: "Full Flatten",
      tag: "Max Security",
      desc: "Renders every page to a high-resolution image at your chosen DPI. Guarantees zero interactive or hidden content remains. Output is non-searchable.",
      features: [
        "Everything in Standard",
        "Document layers (OCGs)",
        "Vector & path data",
        "All embedded scripts",
      ],
      raster: !0,
      searchable: !1,
    },
    {
      id: "metadata",
      label: "Strip + Flatten",
      tag: "Privacy",
      desc: "Full rasterization plus complete removal of hidden metadata — author, timestamps, creator fields, and custom XMP properties. Non-searchable.",
      features: [
        "Everything in Full",
        "Author & creator fields",
        "Creation & modified dates",
        "Custom XMP metadata",
      ],
      raster: !0,
      searchable: !1,
    },
    {
      id: "stealth",
      label: "Stealth",
      tag: "Ghost Mode",
      desc: "Maximum anonymization. Lossless PNG rasterization at enforced min 200 DPI, total metadata annihilation including XMP streams. Zero recoverable origin information.",
      features: [
        "Everything in Strip",
        "XMP metadata streams",
        "Document info dictionary",
        "All traceable identifiers",
      ],
      raster: !0,
      searchable: !1,
      ghost: !0,
    },
  ],
  he = [
    { v: 96, label: "96", sub: "Screen" },
    { v: 150, label: "150", sub: "Default" },
    { v: 200, label: "200", sub: "High" },
    { v: 300, label: "300", sub: "Print" },
    { v: 400, label: "400", sub: "Ultra" },
  ],
  Z = (t) =>
    t
      ? t < 1024
        ? `${t} B`
        : t < 1048576
          ? `${(t / 1024).toFixed(1)} KB`
          : `${(t / 1048576).toFixed(2)} MB`
      : "0 B",
  fe = (t, r) => {
    if (!t || !r) return null;
    const i = ((t - r) / t) * 100;
    return i > 0
      ? { label: `−${i.toFixed(1)}%`, shrink: !0 }
      : { label: `+${Math.abs(i).toFixed(1)}%`, shrink: !1 };
  };
async function re(t) {
  if (t.byteLength < 8) throw new Error("File too small to be a valid PDF.");
  if (!new TextDecoder().decode(t.slice(0, 5)).startsWith("%PDF-"))
    throw new Error("Not a valid PDF — missing %PDF- header.");
}
function xe(t) {
  const { PDFName: r } = window.PDFLib,
    i = t.catalog;
  for (const s of [
    "AA",
    "OpenAction",
    "URI",
    "Collection",
    "NeedsRendering",
    "Perms",
    "Legal",
    "Requirements",
    "StructTreeRoot",
    "MarkInfo",
    "SpiderInfo",
  ])
    try {
      i.has(r.of(s)) && i.delete(r.of(s));
    } catch {}
  if (i.has(r.of("Names")))
    try {
      const s = t.context.lookup(i.get(r.of("Names")));
      for (const u of [
        "JavaScript",
        "EmbeddedFiles",
        "AlternatePresentations",
        "Renditions",
      ])
        try {
          s?.has?.(r.of(u)) && s.delete(r.of(u));
        } catch {}
    } catch {}
}
function me(t) {
  const { PDFName: r } = window.PDFLib;
  try {
    const i = t.catalog,
      s = r.of("AcroForm");
    if (!i.has(s)) return;
    try {
      const u = t.context.lookup(i.get(s));
      for (const c of ["XFA", "CO", "DR", "SigFlags", "Fields"])
        try {
          u?.has?.(r.of(c)) && u.delete(r.of(c));
        } catch {}
    } catch {}
    i.delete(s);
  } catch {}
}
function be(t) {
  const { PDFName: r } = window.PDFLib,
    i = t.node;
  for (const s of [
    "AA",
    "Annots",
    "Tabs",
    "PresSteps",
    "B",
    "PieceInfo",
    "Metadata",
    "SeparationInfo",
  ])
    try {
      i.delete(r.of(s));
    } catch {}
}
function ye(t) {
  const { PDFName: r } = window.PDFLib;
  try {
    t.catalog.has(r.of("Metadata")) && t.catalog.delete(r.of("Metadata"));
  } catch {}
}
function je(t, r = !1) {
  try {
    t.setAuthor("");
  } catch {}
  try {
    t.setCreator(r ? "" : "FlattenPDF");
  } catch {}
  try {
    t.setProducer(r ? "" : "FlattenPDF");
  } catch {}
  try {
    t.setKeywords([]);
  } catch {}
  try {
    t.setSubject("");
  } catch {}
  try {
    t.setTitle("");
  } catch {}
  try {
    t.setCreationDate(new Date(0));
  } catch {}
  try {
    t.setModificationDate(new Date(0));
  } catch {}
}
async function we(t, r) {
  const { PDFDocument: i } = window.PDFLib;
  (r(3, "Validating document…"),
    await re(t),
    r(8, "Parsing document structure…"));
  let s;
  try {
    s = await i.load(t, { ignoreEncryption: !0, updateMetadata: !1 });
  } catch (c) {
    throw new Error(`Cannot parse PDF: ${c.message}`);
  }
  r(20, "Flattening form fields…");
  try {
    const c = s.getForm();
    if (c.getFields().length > 0)
      try {
        c.flatten({ updateFieldAppearances: !0 });
      } catch (p) {
        if (
          String(p?.message ?? "")
            .toLowerCase()
            .includes("xfa")
        )
          throw new Error(
            "XFA forms detected — please switch to Full Flatten mode.",
          );
        try {
          c.flatten({ updateFieldAppearances: !1 });
        } catch (y) {
          if (
            String(y?.message ?? "")
              .toLowerCase()
              .includes("xfa")
          )
            throw new Error(
              "XFA forms detected — please switch to Full Flatten mode.",
            );
        }
      }
  } catch (c) {
    if (c.message.includes("XFA") || c.message.includes("Full Flatten"))
      throw c;
  }
  r(42, "Removing annotations & widgets…");
  for (const c of s.getPages()) be(c);
  (r(58, "Purging catalog actions…"),
    xe(s),
    r(72, "Removing AcroForm…"),
    me(s),
    r(86, "Saving output…"));
  const u = await s.save({ useObjectStreams: !1 });
  return (r(100, "Complete"), u);
}
async function ke(t, r, i, s) {
  const { dpi: u, stripMeta: c, stealth: p } = r,
    { PDFDocument: W } = window.PDFLib,
    y = window.pdfjsLib;
  (s(2, "Validating document…"), await re(t), s(6, "Loading document…"));
  let z;
  try {
    z = await y.getDocument({
      data: new Uint8Array(t),
      cMapUrl: ge,
      cMapPacked: !0,
      disableFontFace: !1,
      verbosity: 0,
    }).promise;
  } catch (g) {
    throw new Error(`Cannot load PDF for rendering: ${g.message}`);
  }
  const h = z.numPages,
    f = await W.create(),
    _ = u / 72,
    F = p ? "image/png" : "image/jpeg",
    N = p ? void 0 : 0.95;
  for (let g = 1; g <= h; g++) {
    if (i.current)
      throw (await z.destroy().catch(() => {}), new Error("__CANCELLED__"));
    s(6 + Math.round(((g - 1) / h) * 84), `Rendering page ${g} of ${h}…`);
    const b = await z.getPage(g),
      R = b.getViewport({ scale: 1 }),
      C = b.getViewport({ scale: _ }),
      x = document.createElement("canvas");
    ((x.width = Math.ceil(C.width)), (x.height = Math.ceil(C.height)));
    let j;
    try {
      j = x.getContext("2d", { alpha: !1, willReadFrequently: !1 });
    } catch {
      j = x.getContext("2d");
    }
    ((j.fillStyle = "#ffffff"), j.fillRect(0, 0, x.width, x.height));
    const E = b.render({ canvasContext: j, viewport: C, intent: "print" });
    try {
      await E.promise;
    } catch (P) {
      if (
        ((x.width = 1),
        (x.height = 1),
        b.cleanup(),
        P?.name === "RenderingCancelledException")
      )
        break;
      throw new Error(`Page ${g} render failed: ${P.message}`);
    }
    b.cleanup();
    const m = await (
      await new Promise((P, L) =>
        x.toBlob(
          (w) => (w ? P(w) : L(new Error(`Page ${g}: encoding failed.`))),
          F,
          N,
        ),
      )
    ).arrayBuffer();
    ((x.width = 1), (x.height = 1));
    const $ = p ? await f.embedPng(m) : await f.embedJpg(m);
    (f
      .addPage([R.width, R.height])
      .drawImage($, { x: 0, y: 0, width: R.width, height: R.height }),
      s(6 + Math.round((g / h) * 84), `Processed page ${g} of ${h}`));
  }
  (await z.destroy().catch(() => {}),
    (c || p) && (je(f, p), p && ye(f)),
    s(93, "Saving output PDF…"));
  const v = await f.save({ useObjectStreams: !1 });
  return (s(100, "Complete"), v);
}
function S({ size: t = 20, stroke: r = 1.6, children: i }) {
  return e.jsx("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: r,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: { display: "block", flexShrink: 0 },
    children: i,
  });
}
const Q = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0110 0v4" }),
      ],
    }),
  Se = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("polyline", { points: "16 16 12 12 8 16" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" }),
      ],
    }),
  Fe = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("path", {
          d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
      ],
    }),
  ve = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Ce = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  De = ({ size: t, stroke: r }) =>
    e.jsx(S, {
      size: t,
      stroke: r,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  ee = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("path", {
          d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  ze = ({ size: t, stroke: r }) =>
    e.jsx(S, {
      size: t,
      stroke: r,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  Pe = ({ size: t, stroke: r }) =>
    e.jsxs(S, {
      size: t,
      stroke: r,
      children: [
        e.jsx("path", {
          d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94",
        }),
        e.jsx("path", {
          d: "M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19",
        }),
        e.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      ],
    });
function Ie({ message: t, kind: r, onDone: i }) {
  return (
    d.useEffect(() => {
      const s = setTimeout(i, 3800);
      return () => clearTimeout(s);
    }, [i]),
    e.jsxs("div", {
      style: {
        position: "fixed",
        bottom: 36,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "11px 20px",
        borderRadius: 100,
        background: "rgba(24,24,24,0.9)",
        border: "1px solid rgba(255,255,255,0.13)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        fontSize: 13,
        fontFamily: k,
        color: a.hi,
        whiteSpace: "nowrap",
        userSelect: "none",
        animation: "toastIn 0.32s cubic-bezier(0.16,1,0.3,1)",
        letterSpacing: "-0.01em",
      },
      children: [
        e.jsx("span", {
          style: {
            width: 6,
            height: 6,
            borderRadius: "50%",
            flexShrink: 0,
            backgroundColor:
              r === "error" ? a.sec : r === "warn" ? a.sub : a.white,
          },
        }),
        t,
      ],
    })
  );
}
function te({ children: t }) {
  return e.jsx("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: a.muted,
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 100,
      padding: "3px 10px",
      fontFamily: D,
      backgroundColor: "rgba(255,255,255,0.03)",
    },
    children: t,
  });
}
function I({ children: t, bright: r }) {
  return e.jsx("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 10,
      padding: "3px 9px",
      borderRadius: 5,
      border: r
        ? "1px solid rgba(255,255,255,0.18)"
        : "1px solid rgba(255,255,255,0.09)",
      color: r ? a.hi : a.sub,
      fontFamily: D,
      letterSpacing: "0.03em",
      backgroundColor: r ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
    },
    children: t,
  });
}
function Ee() {
  const [t, r] = d.useState("loading"),
    [i, s] = d.useState(null),
    [u, c] = d.useState(null),
    [p, W] = d.useState("standard"),
    [y, z] = d.useState(150),
    [h, f] = d.useState("idle"),
    [_, F] = d.useState(0),
    [N, v] = d.useState(""),
    [g, b] = d.useState(null),
    [R, C] = d.useState(""),
    [x, j] = d.useState(!1),
    [E, T] = d.useState(null),
    [m, $] = d.useState(!1),
    [X, P] = d.useState(!1),
    L = d.useRef(),
    w = d.useRef(!1),
    A = d.useCallback((n, o = "success") => {
      T({ message: n, kind: o, id: Date.now() });
    }, []);
  (d.useEffect(() => {
    P(!0);
    const n = () => $(window.innerWidth < 700);
    return (
      n(),
      window.addEventListener("resize", n, { passive: !0 }),
      () => window.removeEventListener("resize", n)
    );
  }, []),
    d.useEffect(() => {
      ue()
        .then(() => r("ready"))
        .catch(() => r("error"));
    }, []));
  const V = d.useCallback(async (n) => {
      if (window.pdfjsLib)
        try {
          const o = await n.arrayBuffer(),
            l = await window.pdfjsLib.getDocument({
              data: new Uint8Array(o),
              verbosity: 0,
            }).promise;
          (c(l.numPages), l.destroy().catch(() => {}));
        } catch {
          c(null);
        }
    }, []),
    B = d.useCallback(
      (n) => {
        if (n) {
          if (
            n.type !== "application/pdf" &&
            !n.name.toLowerCase().endsWith(".pdf")
          ) {
            A("Please upload a valid PDF file.", "error");
            return;
          }
          (s(n), f("idle"), b(null), C(""), c(null), F(0), v(""), V(n));
        }
      },
      [V, A],
    ),
    ae = d.useCallback(
      (n) => {
        (n.preventDefault(), j(!1));
        const o = n.dataTransfer.files[0];
        o && B(o);
      },
      [B],
    ),
    H = async () => {
      if (!i || h === "processing") return;
      if (t !== "ready") {
        A("Engine still loading — please wait.", "warn");
        return;
      }
      ((w.current = !1),
        f("processing"),
        F(0),
        v("Initializing…"),
        C(""),
        b(null));
      const n = (o, l) => {
        (F(o), l && v(l));
      };
      try {
        const o = await i.arrayBuffer();
        let l;
        if (p === "standard") l = await we(o, n);
        else {
          const le = p === "stealth" ? Math.max(y, 200) : y;
          l = await ke(
            o,
            {
              dpi: le,
              stripMeta: p === "metadata" || p === "stealth",
              stealth: p === "stealth",
            },
            w,
            n,
          );
        }
        if (w.current) {
          (f("idle"), F(0), v(""));
          return;
        }
        const oe = `${i.name.replace(/\.pdf$/i, "")}${p === "stealth" ? "_ghost" : "_flattened"}.pdf`;
        (b({ bytes: l, name: oe, size: l.byteLength }),
          f("done"),
          A("PDF flattened successfully"));
      } catch (o) {
        if (w.current || o?.message === "__CANCELLED__") {
          (f("idle"), F(0), v(""));
          return;
        }
        const l = o?.message ?? "Unknown error.";
        (f("error"), C(l), A(l, "error"));
      }
    },
    ne = () => {
      w.current = !0;
    },
    ie = () => {
      if (!g) return;
      const n = new Blob([g.bytes], { type: "application/pdf" }),
        o = URL.createObjectURL(n),
        l = document.createElement("a");
      ((l.href = o),
        (l.download = g.name),
        document.body.appendChild(l),
        l.click(),
        document.body.removeChild(l),
        setTimeout(() => URL.revokeObjectURL(o), 1e4));
    },
    G = () => {
      ((w.current = !0),
        s(null),
        f("idle"),
        b(null),
        F(0),
        v(""),
        C(""),
        c(null));
    },
    J = K.find((n) => n.id === p),
    se = J?.raster ?? !1,
    U = g ? fe(i?.size, g.size) : null,
    O = p === "stealth",
    Y = m ? 16 : 28;
  return e.jsxs("div", {
    style: {
      minHeight: "100%",
      backgroundColor: a.black,
      fontFamily: k,
      color: a.text,
      position: "relative",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      opacity: X ? 1 : 0,
      transition: "opacity 0.4s ease",
    },
    children: [
      e.jsx("div", {
        style: {
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.028) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 0,
        },
      }),
      e.jsxs("div", {
        style: {
          position: "relative",
          zIndex: 1,
          maxWidth: 980,
          margin: "0 auto",
          padding: m ? `28px ${Y}px 72px` : `52px ${Y}px 88px`,
        },
        children: [
          e.jsxs("header", {
            style: { marginBottom: m ? 28 : 44 },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                },
                children: [
                  e.jsxs("div", {
                    style: { display: "flex", alignItems: "center", gap: 14 },
                    children: [
                      e.jsx("div", {
                        style: {
                          width: 42,
                          height: 42,
                          borderRadius: 12,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: a.white,
                          flexShrink: 0,
                        },
                        children: e.jsx(Q, { size: 17, stroke: 1.8 }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h1", {
                            style: {
                              margin: 0,
                              fontSize: m ? 21 : 23,
                              fontWeight: 700,
                              letterSpacing: "-0.035em",
                              color: a.white,
                              lineHeight: 1.15,
                            },
                            children: "Flatten PDF",
                          }),
                          e.jsx("p", {
                            style: {
                              margin: "3px 0 0",
                              fontSize: 13,
                              color: a.dim,
                              letterSpacing: "-0.01em",
                            },
                            children:
                              "Permanently non-editable · 100% on-device",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !m &&
                    e.jsx("div", {
                      style: {
                        display: "flex",
                        gap: 6,
                        flexWrap: "wrap",
                        paddingTop: 2,
                      },
                      children: [
                        "Local Processing",
                        "No Upload",
                        "Zero Telemetry",
                      ].map((n) => e.jsx(te, { children: n }, n)),
                    }),
                ],
              }),
              t === "loading" &&
                e.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 16,
                    padding: "10px 14px",
                    borderRadius: 11,
                    background: a.b0,
                    border: "1px solid rgba(255,255,255,0.07)",
                  },
                  children: [
                    e.jsx("span", {
                      style: {
                        width: 13,
                        height: 13,
                        flexShrink: 0,
                        border: "1.5px solid rgba(255,255,255,0.13)",
                        borderTopColor: a.white,
                        borderRadius: "50%",
                        animation: "spin 0.75s linear infinite",
                        display: "block",
                      },
                    }),
                    e.jsx("span", {
                      style: {
                        fontSize: 13,
                        color: a.sub,
                        letterSpacing: "-0.01em",
                      },
                      children: "Loading PDF engine…",
                    }),
                  ],
                }),
              t === "error" &&
                e.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 16,
                    padding: "10px 14px",
                    borderRadius: 11,
                    background: a.b0,
                    border: "1px solid rgba(255,255,255,0.1)",
                  },
                  children: [
                    e.jsx(ee, { size: 14, stroke: 1.8 }),
                    e.jsx("span", {
                      style: { fontSize: 13, color: a.sec },
                      children:
                        "Failed to load PDF engine — check network and refresh.",
                    }),
                  ],
                }),
            ],
          }),
          e.jsxs("div", {
            style: {
              display: "grid",
              gridTemplateColumns: m ? "1fr" : "1fr 1.05fr",
              gap: m ? 14 : 18,
              alignItems: "start",
            },
            children: [
              e.jsxs("div", {
                style: { display: "flex", flexDirection: "column", gap: 11 },
                children: [
                  i
                    ? e.jsxs("div", {
                        style: {
                          borderRadius: 16,
                          border: "1px solid rgba(255,255,255,0.1)",
                          background: a.s1,
                          overflow: "hidden",
                          transition: "all 0.2s ease",
                        },
                        children: [
                          e.jsxs("div", {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              gap: 12,
                              padding: "15px 15px",
                            },
                            children: [
                              e.jsx("div", {
                                style: {
                                  width: 36,
                                  height: 36,
                                  borderRadius: 9,
                                  border: "1px solid rgba(255,255,255,0.08)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: a.sub,
                                  flexShrink: 0,
                                  background: "rgba(255,255,255,0.04)",
                                },
                                children: e.jsx(Fe, { size: 15, stroke: 1.8 }),
                              }),
                              e.jsxs("div", {
                                style: { flex: 1, minWidth: 0 },
                                children: [
                                  e.jsx("p", {
                                    style: {
                                      margin: 0,
                                      fontSize: 13,
                                      fontWeight: 600,
                                      color: a.hi,
                                      wordBreak: "break-all",
                                      letterSpacing: "-0.015em",
                                      lineHeight: 1.3,
                                    },
                                    children: i.name,
                                  }),
                                  e.jsxs("p", {
                                    style: {
                                      margin: "3px 0 0",
                                      fontSize: 11,
                                      color: a.dim,
                                      fontFamily: D,
                                    },
                                    children: [
                                      Z(i.size),
                                      u != null &&
                                        e.jsxs("span", {
                                          style: { color: a.muted },
                                          children: [
                                            " ",
                                            "· ",
                                            u,
                                            " page",
                                            u !== 1 ? "s" : "",
                                          ],
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              h !== "processing" &&
                                e.jsx("button", {
                                  className: "icon-btn",
                                  style: {
                                    background: "none",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: 7,
                                    padding: "7px",
                                    cursor: "pointer",
                                    color: a.muted,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    transition: "all 0.15s",
                                  },
                                  onClick: G,
                                  "aria-label": "Remove",
                                  children: e.jsx(ve, { size: 13, stroke: 2 }),
                                }),
                            ],
                          }),
                          h === "processing" &&
                            e.jsxs("div", {
                              style: { padding: "0 15px 15px" },
                              children: [
                                e.jsx("div", {
                                  style: {
                                    height: 2,
                                    backgroundColor: "rgba(255,255,255,0.07)",
                                    borderRadius: 99,
                                    overflow: "hidden",
                                    marginBottom: 9,
                                  },
                                  children: e.jsx("div", {
                                    style: {
                                      height: "100%",
                                      width: `${_}%`,
                                      background:
                                        "linear-gradient(90deg, rgba(255,255,255,0.7), rgba(255,255,255,1))",
                                      borderRadius: 99,
                                      transition:
                                        "width 0.28s cubic-bezier(0.25,0.46,0.45,0.94)",
                                    },
                                  }),
                                }),
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  },
                                  children: [
                                    e.jsx("span", {
                                      style: {
                                        fontSize: 12,
                                        color: a.muted,
                                        letterSpacing: "-0.01em",
                                      },
                                      children: N,
                                    }),
                                    e.jsxs("span", {
                                      style: {
                                        fontSize: 11,
                                        color: a.dim,
                                        fontFamily: D,
                                      },
                                      children: [_, "%"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          h === "done" &&
                            g &&
                            e.jsxs("div", {
                              style: {
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                                padding: "13px 15px",
                              },
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 11,
                                    marginBottom: 12,
                                    flexWrap: "wrap",
                                  },
                                  children: [
                                    e.jsx("div", {
                                      style: {
                                        width: 28,
                                        height: 28,
                                        borderRadius: 7,
                                        border:
                                          "1px solid rgba(255,255,255,0.13)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: a.white,
                                        background: "rgba(255,255,255,0.07)",
                                        flexShrink: 0,
                                      },
                                      children: e.jsx(De, {
                                        size: 13,
                                        stroke: 2.5,
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      style: { flex: 1, minWidth: 0 },
                                      children: [
                                        e.jsx("p", {
                                          style: {
                                            margin: 0,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: a.hi,
                                            wordBreak: "break-all",
                                            letterSpacing: "-0.015em",
                                          },
                                          children: g.name,
                                        }),
                                        e.jsxs("p", {
                                          style: {
                                            margin: "2px 0 0",
                                            fontSize: 11,
                                            color: a.dim,
                                            fontFamily: D,
                                          },
                                          children: [
                                            Z(g.size),
                                            U &&
                                              e.jsx("span", {
                                                style: {
                                                  marginLeft: 7,
                                                  color: U.shrink
                                                    ? a.sec
                                                    : a.muted,
                                                },
                                                children: U.label,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      className: "dl-btn",
                                      style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        padding: "8px 14px",
                                        background: a.white,
                                        color: a.black,
                                        border: "none",
                                        borderRadius: 8,
                                        fontSize: 12,
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        fontFamily: k,
                                        letterSpacing: "-0.02em",
                                        flexShrink: 0,
                                        transition: "all 0.15s",
                                      },
                                      onClick: ie,
                                      children: [
                                        e.jsx(Ce, { size: 12, stroke: 2.2 }),
                                        "Save",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    gap: 6,
                                    flexWrap: "wrap",
                                  },
                                  children: [
                                    e.jsx(I, { children: "Non-editable" }),
                                    !J?.searchable &&
                                      e.jsx(I, { children: "Non-searchable" }),
                                    O &&
                                      e.jsx(I, {
                                        bright: !0,
                                        children: "Metadata wiped",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          h === "error" &&
                            e.jsxs("div", {
                              style: {
                                borderTop: "1px solid rgba(255,255,255,0.06)",
                                padding: "12px 15px",
                                display: "flex",
                                gap: 9,
                                alignItems: "flex-start",
                              },
                              children: [
                                e.jsx("span", {
                                  style: {
                                    color: a.sec,
                                    flexShrink: 0,
                                    marginTop: 1,
                                  },
                                  children: e.jsx(ee, {
                                    size: 14,
                                    stroke: 1.8,
                                  }),
                                }),
                                e.jsx("span", {
                                  style: {
                                    fontSize: 13,
                                    color: a.sec,
                                    lineHeight: 1.5,
                                    flex: 1,
                                  },
                                  children: R || "Unknown error.",
                                }),
                              ],
                            }),
                        ],
                      })
                    : e.jsxs("div", {
                        className: "drop-zone",
                        style: {
                          border: `1.5px dashed ${x ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.1)"}`,
                          borderRadius: 18,
                          padding: m ? "48px 24px" : "60px 36px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 14,
                          cursor: "pointer",
                          backgroundColor: x
                            ? "rgba(255,255,255,0.025)"
                            : "transparent",
                          transition: "all 0.22s ease",
                          textAlign: "center",
                          userSelect: "none",
                        },
                        onDragOver: (n) => {
                          (n.preventDefault(), j(!0));
                        },
                        onDragLeave: () => j(!1),
                        onDrop: ae,
                        onClick: () => L.current?.click(),
                        role: "button",
                        tabIndex: 0,
                        onKeyDown: (n) =>
                          n.key === "Enter" && L.current?.click(),
                        "aria-label": "Upload PDF",
                        children: [
                          e.jsx("input", {
                            ref: L,
                            type: "file",
                            accept: "application/pdf,.pdf",
                            style: { display: "none" },
                            onChange: (n) => B(n.target.files[0]),
                          }),
                          e.jsx("div", {
                            style: {
                              width: 56,
                              height: 56,
                              borderRadius: 16,
                              border: "1px solid rgba(255,255,255,0.1)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: a.dim,
                              background:
                                "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                              marginBottom: 2,
                            },
                            children: e.jsx(Se, { size: 22, stroke: 1.5 }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                style: {
                                  margin: 0,
                                  fontSize: 16,
                                  fontWeight: 600,
                                  color: a.hi,
                                  letterSpacing: "-0.025em",
                                },
                                children: "Drop your PDF here",
                              }),
                              e.jsx("p", {
                                style: {
                                  margin: "5px 0 0",
                                  fontSize: 13,
                                  color: a.dim,
                                },
                                children: "or tap to browse",
                              }),
                            ],
                          }),
                          e.jsx(te, { children: "PDF only" }),
                        ],
                      }),
                  se &&
                    e.jsxs("div", {
                      style: {
                        borderRadius: 14,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: a.s1,
                        padding: "14px 15px",
                      },
                      children: [
                        e.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 11,
                          },
                          children: [
                            e.jsx("p", {
                              style: {
                                margin: 0,
                                fontSize: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.09em",
                                color: a.muted,
                                fontWeight: 600,
                              },
                              children: "Render Quality",
                            }),
                            e.jsxs("span", {
                              style: {
                                fontSize: 11,
                                color: a.dim,
                                fontFamily: D,
                              },
                              children: [
                                p === "stealth" ? Math.max(y, 200) : y,
                                " DPI",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: 6,
                          },
                          children: he.map(({ v: n, label: o, sub: l }) => {
                            const M = y === n;
                            return e.jsxs(
                              "button",
                              {
                                className: "dpi-btn",
                                "aria-pressed": M,
                                style: {
                                  padding: "9px 3px",
                                  border: `1px solid ${M ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.07)"}`,
                                  borderRadius: 9,
                                  background: M
                                    ? "rgba(255,255,255,0.08)"
                                    : "none",
                                  color: M ? a.white : a.muted,
                                  cursor: "pointer",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  gap: 2,
                                  transition: "all 0.15s",
                                  fontFamily: k,
                                },
                                onClick: () => z(n),
                                children: [
                                  e.jsx("span", {
                                    style: {
                                      fontSize: 12,
                                      fontWeight: 600,
                                      fontFamily: D,
                                    },
                                    children: o,
                                  }),
                                  e.jsx("span", {
                                    style: {
                                      fontSize: 9,
                                      color: M ? a.sub : a.muted,
                                    },
                                    children: l,
                                  }),
                                ],
                              },
                              n,
                            );
                          }),
                        }),
                        O &&
                          e.jsx("p", {
                            style: {
                              margin: "10px 0 0",
                              fontSize: 11,
                              color: a.muted,
                              lineHeight: 1.5,
                            },
                            children:
                              "Stealth uses lossless PNG, minimum 200 DPI enforced.",
                          }),
                      ],
                    }),
                  i &&
                    h === "idle" &&
                    e.jsxs("button", {
                      className: "btn-primary",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        width: "100%",
                        padding: "15px 0",
                        background:
                          t !== "ready" ? "rgba(255,255,255,0.3)" : a.white,
                        color: a.black,
                        border: "none",
                        borderRadius: 13,
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: t !== "ready" ? "not-allowed" : "pointer",
                        letterSpacing: "-0.025em",
                        fontFamily: k,
                        opacity: t !== "ready" ? 0.35 : 1,
                        transition: "all 0.15s",
                      },
                      onClick: H,
                      disabled: t !== "ready",
                      children: [
                        e.jsx(Q, { size: 15, stroke: 2 }),
                        O ? "Stealth Flatten" : "Flatten PDF",
                      ],
                    }),
                  i &&
                    h === "error" &&
                    e.jsx("button", {
                      className: "btn-primary",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        width: "100%",
                        padding: "15px 0",
                        background: a.white,
                        color: a.black,
                        border: "none",
                        borderRadius: 13,
                        fontSize: 15,
                        fontWeight: 700,
                        cursor: "pointer",
                        letterSpacing: "-0.025em",
                        fontFamily: k,
                        transition: "all 0.15s",
                      },
                      onClick: H,
                      children: "Retry",
                    }),
                  h === "processing" &&
                    e.jsx("button", {
                      className: "btn-cancel",
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        width: "100%",
                        padding: "14px 0",
                        background: "transparent",
                        color: a.sub,
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 13,
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontFamily: k,
                        transition: "all 0.15s",
                      },
                      onClick: ne,
                      children: "Cancel",
                    }),
                  h === "done" &&
                    e.jsx("button", {
                      className: "btn-secondary",
                      style: {
                        width: "100%",
                        padding: "13px 0",
                        background: "none",
                        border: "1px solid rgba(255,255,255,0.09)",
                        borderRadius: 13,
                        color: a.dim,
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        fontFamily: k,
                        letterSpacing: "-0.01em",
                        transition: "all 0.15s",
                      },
                      onClick: G,
                      children: "Flatten another PDF",
                    }),
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      gap: 10,
                      padding: "12px 13px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.02)",
                    },
                    children: [
                      e.jsx("span", {
                        style: { color: a.muted, flexShrink: 0, marginTop: 1 },
                        children: e.jsx(ze, { size: 13, stroke: 1.4 }),
                      }),
                      e.jsxs("p", {
                        style: {
                          margin: 0,
                          fontSize: 12,
                          color: a.muted,
                          lineHeight: 1.65,
                        },
                        children: [
                          e.jsx("span", {
                            style: { color: a.dim, fontWeight: 500 },
                            children: "Fully local.",
                          }),
                          " ",
                          "Your PDF never leaves this device. All processing runs in-browser via WebAssembly — no server, no upload, no telemetry.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                style: { display: "flex", flexDirection: "column", gap: 8 },
                children: [
                  e.jsx("p", {
                    style: {
                      margin: "0 0 4px 1px",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "0.09em",
                      color: a.muted,
                      fontWeight: 600,
                    },
                    children: "Flatten Mode",
                  }),
                  K.map((n) => {
                    const o = p === n.id;
                    return e.jsx(
                      "button",
                      {
                        className: "mode-card",
                        "aria-pressed": o,
                        style: {
                          textAlign: "left",
                          background: o
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(255,255,255,0.015)",
                          border: `1px solid ${o ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)"}`,
                          borderRadius: 14,
                          padding: "14px 14px",
                          cursor: "pointer",
                          fontFamily: k,
                          color: a.text,
                          width: "100%",
                          transition:
                            "all 0.18s cubic-bezier(0.25,0.46,0.45,0.94)",
                        },
                        onClick: () => W(n.id),
                        children: e.jsxs("div", {
                          style: {
                            display: "flex",
                            gap: 11,
                            alignItems: "flex-start",
                          },
                          children: [
                            e.jsx("div", {
                              style: {
                                width: 16,
                                height: 16,
                                flexShrink: 0,
                                border: `1.5px solid ${o ? a.white : "rgba(255,255,255,0.18)"}`,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 1.5,
                                transition: "border-color 0.15s",
                              },
                              children:
                                o &&
                                e.jsx("div", {
                                  style: {
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    backgroundColor: a.white,
                                    animation:
                                      "dotIn 0.2s cubic-bezier(0.16,1,0.3,1)",
                                  },
                                }),
                            }),
                            e.jsxs("div", {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: o ? 6 : 0,
                                    flexWrap: "wrap",
                                  },
                                  children: [
                                    e.jsx("span", {
                                      style: {
                                        fontSize: 14,
                                        fontWeight: 600,
                                        color: o ? a.white : a.sec,
                                        letterSpacing: "-0.02em",
                                        transition: "color 0.15s",
                                      },
                                      children: n.label,
                                    }),
                                    e.jsx("span", {
                                      style: {
                                        fontSize: 9,
                                        letterSpacing: "0.07em",
                                        textTransform: "uppercase",
                                        border: `1px solid ${o ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)"}`,
                                        borderRadius: 4,
                                        padding: "2px 6px",
                                        color: o ? a.sub : a.muted,
                                        fontFamily: D,
                                        transition: "all 0.15s",
                                      },
                                      children: n.tag,
                                    }),
                                  ],
                                }),
                                o &&
                                  e.jsxs("div", {
                                    style: {
                                      animation:
                                        "expandIn 0.25s cubic-bezier(0.16,1,0.3,1)",
                                    },
                                    children: [
                                      e.jsx("p", {
                                        style: {
                                          margin: "0 0 10px",
                                          fontSize: 12,
                                          color: a.muted,
                                          lineHeight: 1.6,
                                          letterSpacing: "-0.005em",
                                        },
                                        children: n.desc,
                                      }),
                                      e.jsx("div", {
                                        style: {
                                          display: "flex",
                                          flexWrap: "wrap",
                                          gap: "5px 18px",
                                          marginBottom: 11,
                                        },
                                        children: n.features.map((l) =>
                                          e.jsxs(
                                            "span",
                                            {
                                              style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontSize: 11,
                                                color: a.muted,
                                              },
                                              children: [
                                                e.jsx("span", {
                                                  style: {
                                                    width: 3,
                                                    height: 3,
                                                    borderRadius: "50%",
                                                    backgroundColor:
                                                      "rgba(255,255,255,0.18)",
                                                    display: "inline-block",
                                                    flexShrink: 0,
                                                  },
                                                }),
                                                l,
                                              ],
                                            },
                                            l,
                                          ),
                                        ),
                                      }),
                                      e.jsxs("div", {
                                        style: {
                                          display: "flex",
                                          gap: 6,
                                          flexWrap: "wrap",
                                        },
                                        children: [
                                          n.searchable
                                            ? e.jsx(I, {
                                                children: "Searchable",
                                              })
                                            : e.jsxs(I, {
                                                children: [
                                                  e.jsx(Pe, {
                                                    size: 9,
                                                    stroke: 1.6,
                                                  }),
                                                  "Non-searchable",
                                                ],
                                              }),
                                          e.jsx(I, {
                                            children: "Non-editable",
                                          }),
                                          n.ghost &&
                                            e.jsx(I, {
                                              bright: !0,
                                              children: "Anonymous",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      },
                      n.id,
                    );
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      E &&
        e.jsx(
          Ie,
          { message: E.message, kind: E.kind, onDone: () => T(null) },
          E.id,
        ),
      e.jsx("style", {
        children: `
        @keyframes spin      { to { transform: rotate(360deg); } }
        @keyframes toastIn   { from { opacity: 0; transform: translateX(-50%) translateY(14px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        @keyframes dotIn     { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes expandIn  { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        button:focus-visible { outline: 2px solid rgba(255,255,255,0.45); outline-offset: 2px; }
        @media (hover: hover) {
          .btn-primary:hover:not(:disabled)  { background: #E8E8E8 !important; transform: scale(0.995); }
          .btn-secondary:hover               { border-color: rgba(255,255,255,0.16) !important; color: #8E8E93 !important; }
          .btn-cancel:hover                  { border-color: rgba(255,255,255,0.16) !important; color: #8E8E93 !important; }
          .dl-btn:hover                      { background: #E0E0E0 !important; }
          .icon-btn:hover                    { border-color: rgba(255,255,255,0.18) !important; color: #8E8E93 !important; }
          .mode-card:not([aria-pressed=true]):hover { background: rgba(255,255,255,0.03) !important; border-color: rgba(255,255,255,0.1) !important; }
          .dpi-btn:not([aria-pressed=true]):hover   { border-color: rgba(255,255,255,0.14) !important; color: #AEAEB2 !important; }
          .drop-zone:hover                   { border-color: rgba(255,255,255,0.22) !important; background: rgba(255,255,255,0.02) !important; }
        }
        button:active { transform: scale(0.97); }
        .btn-primary:active { transform: scale(0.98) !important; }
      `,
      }),
    ],
  });
}
export { Ee as default };
