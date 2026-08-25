import { r as h, j as e } from "./react-vendor-Bc7KCos-.js";
const y = "ihatepdf-store",
  W = "ihatepdf_DB",
  P = "ihatepdf_history",
  B = (t) =>
    new Promise((o, s) => {
      const n = new FileReader();
      ((n.onload = () => o(n.result)), (n.onerror = s), n.readAsArrayBuffer(t));
    }),
  I = () =>
    new Promise((t, o) => {
      const s = indexedDB.open(W, 1);
      ((s.onupgradeneeded = (n) => {
        const i = n.target.result;
        i.objectStoreNames.contains(y) || i.createObjectStore(y);
      }),
        (s.onsuccess = () => t(s.result)),
        (s.onerror = () => o(s.error)));
    }),
  $ = async (t, o) => {
    const s = await I();
    return new Promise((n, i) => {
      const l = s.transaction(y, "readwrite");
      (l.objectStore(y).put(o, t),
        (l.oncomplete = n),
        (l.onerror = () => i(l.error)));
    });
  },
  H = async (t) => {
    const o = JSON.parse(localStorage.getItem(P) || "[]"),
      s = {
        id: Date.now(),
        name: t.name,
        tool: t.tool,
        timestamp: Date.now(),
        size: t.size,
      };
    if (t.bytes)
      try {
        await $(`pdf_${s.id}`, t.bytes);
      } catch {}
    (o.unshift(s), localStorage.setItem(P, JSON.stringify(o.slice(0, 50))));
  },
  M = (t, o, s) => {
    try {
      if (typeof window.download == "function")
        return (window.download(t, o, s), !0);
    } catch {}
    try {
      const n = new Blob([t], { type: s });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(n, o), !0);
      const i = URL.createObjectURL(n),
        l = document.createElement("a");
      return (
        (l.href = i),
        (l.download = o),
        (l.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(l),
        l.click(),
        setTimeout(() => {
          (document.body.removeChild(l), URL.revokeObjectURL(i));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const n = new Blob([t], { type: s }),
          i = URL.createObjectURL(n);
        return (
          window.open(i, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${o}`),
          setTimeout(() => URL.revokeObjectURL(i), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${o}.`), !1);
      }
    }
  },
  _ = () => {
    if (typeof window > "u") return !1;
    const t = window.navigator.userAgent;
    return (
      (!!t.match(/iPad/i) || !!t.match(/iPhone/i)) &&
      !!t.match(/WebKit/i) &&
      !t.match(/CriOS/i)
    );
  },
  v = ({ children: t, className: o }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: o,
      children: t,
    }),
  z = (t) =>
    e.jsxs(v, {
      ...t,
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
  D = (t) =>
    e.jsxs(v, {
      ...t,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  U = (t) =>
    e.jsxs(v, {
      ...t,
      children: [
        e.jsx("rect", {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      ],
    }),
  Y = (t) =>
    e.jsxs(v, {
      ...t,
      children: [
        e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        e.jsx("polyline", { points: "2 17 12 22 22 17" }),
        e.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  k = {
    className: "docx",
    inWrapper: !0,
    ignoreWidth: !1,
    ignoreHeight: !1,
    ignoreFonts: !1,
    breakPages: !0,
    ignoreLastRenderedPageBreak: !1,
    experimental: !0,
    trimXmlDeclaration: !0,
    useBase64URL: !0,
    renderHeaders: !0,
    renderFooters: !0,
    renderFootnotes: !0,
    renderEndnotes: !0,
    renderChanges: !1,
    debug: !1,
  },
  q = [
    { names: ["Calibri", "Calibri Light"], pkg: "carlito" },
    { names: ["Cambria"], pkg: "caladea" },
    { names: ["Times New Roman", "Times", "Liberation Serif"], pkg: "tinos" },
    { names: ["Arial", "Helvetica", "Liberation Sans"], pkg: "arimo" },
    { names: ["Courier New", "Liberation Mono"], pkg: "cousine" },
    { names: ["Georgia"], pkg: "gelasio" },
  ],
  G = (t, o, s) =>
    `https://cdn.jsdelivr.net/npm/@fontsource/${t}@5/files/${t}-latin-${o}-${s}.woff2`,
  X = () => {
    const t = [];
    for (const { names: o, pkg: s } of q)
      for (const n of o)
        for (const [i, l] of [
          ["400", "normal"],
          ["700", "bold"],
        ])
          for (const u of ["normal", "italic"])
            t.push(
              `@font-face{font-family:"${n}";font-weight:${l};font-style:${u};font-display:swap;src:url(${G(s, i, u)}) format("woff2");}`,
            );
    return t.join("");
  };
let F = !1;
const S = () => {
    if (F || typeof document > "u") return;
    const t = document.createElement("style");
    ((t.id = "wtp-metric-fonts"),
      (t.textContent = X()),
      document.head.appendChild(t),
      (F = !0));
  },
  J = (t) => (t > 30 ? 2 : t > 12 ? 2.5 : 3),
  V = async (t) => {
    await new Promise((s) => setTimeout(s, 0));
    try {
      document.fonts?.ready &&
        (await Promise.race([
          document.fonts.ready,
          new Promise((s) => setTimeout(s, 8e3)),
        ]));
    } catch {}
    const o = Array.from(t.querySelectorAll("img"));
    (await Promise.all(
      o.map((s) =>
        s.complete && s.naturalWidth > 0
          ? Promise.resolve()
          : new Promise((n) => {
              ((s.onload = n), (s.onerror = n), setTimeout(n, 3e3));
            }),
      ),
    ),
      await new Promise((s) => setTimeout(s, 80)));
  },
  K = (t) => {
    let o = Array.from(t.querySelectorAll("section.docx"));
    if (
      (o.length === 0 &&
        (o = Array.from(t.querySelectorAll(".docx-wrapper > section"))),
      o.length === 0)
    ) {
      const s = t.querySelector(".docx-wrapper") || t;
      o = Array.from(s.children).filter(
        (n) => n.tagName === "SECTION" || n.classList.contains("docx"),
      );
    }
    return o;
  },
  Q = async (t, o) => {
    if (!window.docx?.renderAsync)
      throw new Error("docx-preview not loaded — please refresh");
    if (!window.html2canvas)
      throw new Error("html2canvas not loaded — please refresh");
    if (!window.jspdf?.jsPDF)
      throw new Error("jsPDF not loaded — please refresh");
    const { jsPDF: s } = window.jspdf;
    S();
    const n = document.createElement("div");
    ((n.style.cssText =
      "position:fixed;left:-100000px;top:0;background:#ffffff;z-index:-1;width:2400px;pointer-events:none"),
      document.body.appendChild(n));
    try {
      (await window.docx.renderAsync(t, n, n, k), await V(n));
      const i = K(n);
      if (i.length === 0) throw new Error("Document appears to be empty");
      const l = 72 / 96,
        u = J(i.length);
      let p = null;
      for (let m = 0; m < i.length; m++) {
        const w = i[m];
        o?.(m + 1, i.length);
        const d = w.getBoundingClientRect(),
          c = Math.max(d.width * l, 1),
          x = Math.max(d.height * l, 1),
          f = await window.html2canvas(w, {
            scale: u,
            backgroundColor: "#ffffff",
            useCORS: !0,
            allowTaint: !1,
            logging: !1,
            imageTimeout: 15e3,
            width: Math.ceil(d.width),
            height: Math.ceil(d.height),
            windowWidth: Math.ceil(d.width),
            windowHeight: Math.ceil(d.height),
          }),
          b = c > x ? "landscape" : "portrait";
        m === 0
          ? (p = new s({
              unit: "pt",
              format: [c, x],
              orientation: b,
              compress: !0,
            }))
          : p.addPage([c, x], b);
        const N = f.toDataURL("image/png");
        (p.addImage(N, "PNG", 0, 0, c, x, void 0, "FAST"),
          (f.width = 0),
          (f.height = 0));
      }
      const j = p.output("arraybuffer");
      return new Uint8Array(j);
    } finally {
      n.parentNode && n.parentNode.removeChild(n);
    }
  },
  ee = ({ showNotification: t, showDownloadDialog: o }) => {
    const [s, n] = h.useState(null),
      [i, l] = h.useState(!1),
      [u, p] = h.useState(!1),
      [j, m] = h.useState(!1),
      [w, d] = h.useState(!1),
      c = h.useRef(null),
      x = h.useRef(null),
      f = async (r) => {
        if (r) {
          if (!/\.(docx?)$/i.test(r.name)) {
            t("Please upload a .doc or .docx file", "error");
            return;
          }
          if (/\.doc$/i.test(r.name)) {
            t(
              "Legacy .doc isn't supported — please save as .docx in Word first",
              "error",
            );
            return;
          }
          (n(r), p(!1), m(!0));
          try {
            if (!window.docx?.renderAsync)
              throw new Error("docx-preview not loaded — please refresh");
            S();
            const a = await B(r);
            ((x.current = a.slice(0)),
              c.current &&
                ((c.current.innerHTML = ""),
                await window.docx.renderAsync(a, c.current, c.current, k)),
              m(!1),
              p(!0),
              t("Document rendered — preview matches the PDF exactly"));
          } catch (a) {
            (console.error(a),
              m(!1),
              t(`Preview failed: ${a.message}`, "error"));
          }
        }
      },
      b = (r) => f(r.target.files[0]),
      N = (r) => {
        (r.preventDefault(), r.stopPropagation(), d(!0));
      },
      C = (r) => {
        (r.preventDefault(), r.stopPropagation(), d(!0));
      },
      T = (r) => {
        (r.preventDefault(), r.stopPropagation(), d(!1));
      },
      L = (r) => {
        (r.preventDefault(), r.stopPropagation(), d(!1));
        const a = r.dataTransfer.files[0];
        a && f(a);
      },
      R = async () => {
        if (!(!s || !x.current)) {
          (l(!0), t("Laying out document…"));
          try {
            const r = await Q(x.current.slice(0), (A, E) =>
                t(`Rendering page ${A} of ${E}…`),
              ),
              a = s.name.replace(/\.(docx?)$/i, ".pdf");
            M(r, a, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: a, bytes: r }),
                await H({
                  name: a,
                  tool: "wordtopdf",
                  size: r.byteLength,
                  bytes: r,
                }),
                t("✅ PDF generated successfully!"),
                o(a, r.byteLength, r))
              : t(
                  "Download may have been blocked. Check your downloads folder.",
                  "error",
                );
          } catch (r) {
            (console.error(r), t(`Failed to convert: ${r.message}`, "error"));
          } finally {
            l(!1);
          }
        }
      },
      O = () => {
        (n(null),
          p(!1),
          m(!1),
          (x.current = null),
          c.current && (c.current.innerHTML = ""));
      };
    return s
      ? e.jsxs("div", {
          className: "max-w-5xl mx-auto space-y-4 px-4",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0 flex-1",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                      children: e.jsx(z, {
                        className: "w-4 h-4 text-zinc-300",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm font-medium text-zinc-200 truncate",
                          children: s.name,
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-zinc-500",
                          children: [(s.size / 1024 / 1024).toFixed(2), " MB"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 flex-shrink-0",
                  children: [
                    e.jsx("button", {
                      onClick: O,
                      className:
                        "px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors",
                      children: "← New File",
                    }),
                    e.jsx("button", {
                      onClick: R,
                      disabled: i || !u,
                      className:
                        "px-4 md:px-6 py-2 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 touch-manipulation active:scale-[0.98]",
                      children: i
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-3.5 h-3.5 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                              }),
                              e.jsx("span", {
                                className: "hidden md:inline",
                                children: "Converting…",
                              }),
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(z, { className: "w-3.5 h-3.5" }),
                              e.jsx("span", {
                                className: "hidden md:inline",
                                children: "Convert to PDF",
                              }),
                              e.jsx("span", {
                                className: "md:hidden",
                                children: "Convert",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
            j &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 border-4 border-zinc-700 border-t-zinc-300 rounded-full animate-spin mx-auto mb-4",
                  }),
                  e.jsx("p", {
                    className: "text-zinc-400 text-sm",
                    children: "Rendering document…",
                  }),
                ],
              }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 rounded-xl p-4 md:p-6 border border-zinc-800",
              style: { display: u ? "block" : "none" },
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-sm font-semibold text-zinc-400",
                      children: "Document Preview",
                    }),
                    e.jsx("span", {
                      className: "text-[11px] text-zinc-500 hidden sm:inline",
                      children: "This is exactly how your PDF will look",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "rounded-xl overflow-auto shadow-inner",
                  style: { maxHeight: "700px", background: "#525659" },
                  children: e.jsx("div", {
                    ref: c,
                    className: "docx-preview-container",
                  }),
                }),
              ],
            }),
            _() &&
              e.jsxs("div", {
                className:
                  "p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-xs text-zinc-300",
                children: [
                  e.jsx("p", {
                    className: "font-semibold mb-1",
                    children: "📱 iOS Safari Detected",
                  }),
                  e.jsxs("p", {
                    children: [
                      "Find your file in",
                      " ",
                      e.jsx("span", {
                        className: "font-semibold text-white",
                        children: "Files app → Downloads",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      : e.jsxs("div", {
          className: "max-w-6xl mx-auto pb-10 space-y-6 md:space-y-8",
          children: [
            e.jsxs("header", {
              className: "text-center pt-2",
              children: [
                e.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
                  children: "Word to PDF Converter Online Free",
                }),
                e.jsx("p", {
                  className: "text-base md:text-xl text-zinc-400",
                  children:
                    "Convert DOCX Files to PDF with Pixel-Perfect Formatting",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: e.jsxs("div", {
                className: `border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer ${w ? "border-zinc-500 bg-zinc-800/60" : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/30"}`,
                onDragOver: N,
                onDragEnter: C,
                onDragLeave: T,
                onDrop: L,
                children: [
                  e.jsx("input", {
                    type: "file",
                    accept:
                      ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    onChange: b,
                    className: "hidden",
                    id: "word-upload",
                  }),
                  e.jsxs("label", {
                    htmlFor: "word-upload",
                    className: "cursor-pointer flex flex-col items-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-14 h-14 md:w-20 md:h-20 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-4",
                        children: e.jsx(z, {
                          className: "w-7 h-7 md:w-10 md:h-10",
                        }),
                      }),
                      e.jsx("h3", {
                        className:
                          "text-base md:text-xl font-semibold text-white mb-2",
                        children: "Select Word Document",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-zinc-400 mb-3",
                        children:
                          "Click to browse or drag and drop your .docx file here",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-600",
                        children:
                          "Supports .docx (Word 2007+) • No file size limit",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4",
              children: [
                {
                  icon: D,
                  title: "Pixel-Perfect Fidelity",
                  desc: "A true Word-grade layout engine reproduces page sizes, margins, headers, footers, columns, fonts, spacing, lists and tables exactly as in your document.",
                },
                {
                  icon: U,
                  title: "100% Secure",
                  desc: "All conversions happen in your browser. Your files never leave your device — complete privacy guaranteed.",
                },
                {
                  icon: Y,
                  title: "WYSIWYG Preview",
                  desc: "The on-screen preview is the exact source of your PDF — what you see is precisely what you download, page for page.",
                },
              ].map(({ icon: r, title: a, desc: g }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 hover:border-zinc-700 transition-all",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 flex-shrink-0",
                        children: e.jsx(r, {
                          className: "w-5 h-5 text-zinc-300",
                        }),
                      }),
                      e.jsx("h3", {
                        className: "font-semibold text-white text-sm mb-1.5",
                        children: a,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 leading-relaxed",
                        children: g,
                      }),
                    ],
                  },
                  a,
                ),
              ),
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className:
                    "text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center",
                  children: "How to Convert Word to PDF",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
                  children: [
                    [
                      "Upload Word File",
                      "Click the upload area or drag and drop your .docx file",
                    ],
                    [
                      "Preview Document",
                      "Review the exact, page-accurate render of your document",
                    ],
                    [
                      "Download PDF",
                      "Click convert and download your pixel-perfect PDF instantly",
                    ],
                  ].map(([r, a], g) =>
                    e.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 md:w-14 md:h-14 bg-zinc-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-2xl",
                            children: g + 1,
                          }),
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white mb-2 text-sm md:text-base",
                            children: r,
                          }),
                          e.jsx("p", {
                            className: "text-xs md:text-sm text-zinc-400",
                            children: a,
                          }),
                        ],
                      },
                      g,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "Supported Word Features",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                  children: [
                    [
                      "Text & Run Formatting",
                      "Bold, italic, underline, strikethrough, color, highlight, superscript, subscript, caps — with the document's real fonts",
                    ],
                    [
                      "Headings, Styles & Numbering",
                      "H1–H6, Title, Subtitle, Quote, Caption and multi-level list numbering (1.1, a., i.) rendered exactly",
                    ],
                    [
                      "Headers, Footers & Sections",
                      "Page headers and footers, page numbers, multiple sections, columns and landscape pages",
                    ],
                    [
                      "Images, Shapes & Charts",
                      "Embedded images, text boxes, drawing shapes and chart previews preserved in place",
                    ],
                    [
                      "Tables",
                      "Borders, merged cells (colSpan & rowSpan), background colors, cell shading and vertical alignment",
                    ],
                    [
                      "Page Layout",
                      "Exact page size (A4/Letter/etc.), margins, orientation and page breaks from the document",
                    ],
                  ].map(([r, a]) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx(D, {
                            className:
                              "w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-white text-sm",
                                children: r,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 leading-relaxed",
                                children: a,
                              }),
                            ],
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "Frequently Asked Questions",
                }),
                e.jsx("div", {
                  className: "space-y-2",
                  children: [
                    [
                      "Is this Word to PDF converter really free?",
                      "Yes, completely free — no watermarks, no sign-up, no file limits. Convert as many documents as you need.",
                    ],
                    [
                      "How accurate is the conversion?",
                      "It uses a Word-grade layout engine that reproduces your document page-for-page — headers, footers, fonts, columns, numbering and tables. The on-screen preview is the exact source of the PDF, so what you see is what you get.",
                    ],
                    [
                      "Will formatting like bold, tables, and headings be preserved?",
                      "Yes. The document is laid out exactly as Word would, including multi-level numbered lists, merged table cells, shading, headers/footers and page breaks.",
                    ],
                    [
                      "Is it safe? Does my file get uploaded anywhere?",
                      "100% private. Everything runs in your browser using JavaScript. No servers, no uploads, no tracking.",
                    ],
                    [
                      "Do you support old .doc files?",
                      "The converter targets modern .docx (Word 2007 and newer). If you have a legacy .doc, open it in Word or Google Docs and re-save as .docx first.",
                    ],
                  ].map(([r, a]) =>
                    e.jsxs(
                      "details",
                      {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden group",
                        children: [
                          e.jsxs("summary", {
                            className:
                              "px-4 py-3.5 cursor-pointer font-semibold text-white text-sm hover:bg-zinc-800 transition-colors flex items-center justify-between gap-3 list-none",
                            children: [
                              e.jsx("span", { children: r }),
                              e.jsx("span", {
                                className:
                                  "text-zinc-500 group-open:rotate-180 transition-transform duration-200 flex-shrink-0",
                                children: "▾",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "px-4 pb-4 pt-3 border-t border-zinc-800",
                            children: e.jsx("p", {
                              className:
                                "text-xs text-zinc-400 leading-relaxed",
                              children: a,
                            }),
                          }),
                        ],
                      },
                      r,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
  };
export { ee as default };
