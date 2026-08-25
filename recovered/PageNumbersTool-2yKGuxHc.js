import { r as a, j as e } from "./react-vendor-Bc7KCos-.js";
const T = "ihatepdf-store",
  ve = "ihatepdf_DB",
  ie = "ihatepdf_history",
  le = (s) =>
    new Promise((r, n) => {
      const i = new FileReader();
      ((i.onload = () => r(i.result)), (i.onerror = n), i.readAsArrayBuffer(s));
    }),
  Ne = () =>
    new Promise((s, r) => {
      const n = indexedDB.open(ve, 1);
      ((n.onupgradeneeded = (i) => {
        const o = i.target.result;
        o.objectStoreNames.contains(T) || o.createObjectStore(T);
      }),
        (n.onsuccess = () => s(n.result)),
        (n.onerror = () => r(n.error)));
    }),
  ze = async (s, r) => {
    const n = await Ne();
    return new Promise((i, o) => {
      const l = n.transaction(T, "readwrite");
      (l.objectStore(T).put(r, s),
        (l.oncomplete = i),
        (l.onerror = () => o(l.error)));
    });
  },
  ye = async (s) => {
    const r = JSON.parse(localStorage.getItem(ie) || "[]"),
      n = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await ze(`pdf_${n.id}`, s.bytes);
      } catch {}
    (r.unshift(n), localStorage.setItem(ie, JSON.stringify(r.slice(0, 50))));
  },
  ke = (s, r, n) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, r, n), !0);
    } catch {}
    try {
      const i = new Blob([s], { type: n });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(i, r), !0);
      const o = URL.createObjectURL(i),
        l = document.createElement("a");
      return (
        (l.href = o),
        (l.download = r),
        (l.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(l),
        l.click(),
        setTimeout(() => {
          (l.parentNode && document.body.removeChild(l),
            URL.revokeObjectURL(o));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const i = URL.createObjectURL(new Blob([s], { type: n }));
        return (
          window.open(i, "_blank") ||
            alert(`Download blocked.

File: ${r}`),
          setTimeout(() => URL.revokeObjectURL(i), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${r}.`), !1);
      }
    }
  },
  Se = (s) => {
    const r = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      n = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ];
    let i = "";
    for (let o = 0; o < r.length; o++)
      for (; s >= r[o];) ((i += n[o]), (s -= r[o]));
    return i.toLowerCase();
  },
  Ce = (s) => {
    let r = "";
    for (; s > 0;)
      (s--,
        (r = String.fromCharCode(65 + (s % 26)) + r),
        (s = Math.floor(s / 26)));
    return r;
  },
  ce = (s, r, n) =>
    n === "roman"
      ? Se(s)
      : n === "letter"
        ? Ce(s)
        : n === "page-x"
          ? `Page ${s}`
          : n === "x-of-total"
            ? `${s} / ${r}`
            : `${s}`,
  Pe = (s) => ({
    r: parseInt(s.slice(1, 3), 16) / 255,
    g: parseInt(s.slice(3, 5), 16) / 255,
    b: parseInt(s.slice(5, 7), 16) / 255,
  }),
  Le = [
    { id: "top-left", row: 0, col: 0 },
    { id: "top-center", row: 0, col: 1 },
    { id: "top-right", row: 0, col: 2 },
    { id: "bottom-left", row: 1, col: 0 },
    { id: "bottom-center", row: 1, col: 1 },
    { id: "bottom-right", row: 1, col: 2 },
  ],
  H = {
    "top-left": "Top left",
    "top-center": "Top center",
    "top-right": "Top right",
    "bottom-left": "Bottom left",
    "bottom-center": "Bottom center",
    "bottom-right": "Bottom right",
  },
  ae = [
    { label: "Dark Grey", hex: "#4d4d4d" },
    { label: "Black", hex: "#000000" },
    { label: "Red", hex: "#e53e3e" },
    { label: "Blue", hex: "#3182ce" },
    { label: "Green", hex: "#38a169" },
    { label: "Purple", hex: "#805ad5" },
    { label: "Orange", hex: "#dd6b20" },
  ],
  Be = {
    number: "1, 2, 3",
    roman: "i, ii, iii",
    letter: "A, B, C",
    "page-x": "Page 1",
    "x-of-total": "1 / 10",
  },
  y = ({ children: s }) =>
    e.jsx("p", {
      className:
        "text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",
      children: s,
    }),
  Fe = ({
    offCanvas: s,
    width: r,
    height: n,
    scale: i,
    displayNum: o,
    totalNums: l,
    skip: x,
    config: C,
  }) => {
    const D = a.useRef(null);
    return (
      a.useEffect(() => {
        const f = D.current;
        if (!f || !s) return;
        ((f.width = r), (f.height = n));
        const c = f.getContext("2d");
        if ((c.drawImage(s, 0, 0), x)) return;
        const {
            position: P,
            format: w,
            fontSize: E,
            fontBold: j,
            numberColour: _,
          } = C,
          b = ce(o, l, w),
          $ = Math.max(E * i, 1),
          d = 20 * i;
        (c.save(),
          (c.font = `${j ? "bold" : "normal"} ${$}px Helvetica, Arial, sans-serif`),
          (c.fillStyle = _));
        const L = c.measureText(b).width,
          k = P.includes("left")
            ? d
            : P.includes("right")
              ? r - d - L
              : (r - L) / 2,
          A = P.includes("top") ? d + $ : n - d;
        (c.fillText(b, k, A), c.restore());
      }, [s, r, n, i, o, l, x, C]),
      e.jsx("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden",
        children: e.jsx("canvas", {
          ref: D,
          style: { width: "100%", height: "auto", display: "block" },
        }),
      })
    );
  },
  De = ({ onFile: s }) => {
    const [r, n] = a.useState(!1),
      i = (o) => {
        (o.preventDefault(), n(!1));
        const l = o.dataTransfer.files[0];
        l?.type === "application/pdf" && s(l);
      };
    return e.jsxs("div", {
      className: "w-full max-w-3xl mx-auto px-4 sm:px-6 pb-10",
      children: [
        e.jsxs("header", {
          className: "text-center mb-8 sm:mb-10",
          children: [
            e.jsx("h1", {
              className:
                "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight",
              children: "Add Page Numbers to PDF",
            }),
            e.jsx("p", {
              className: "text-sm sm:text-base text-zinc-400",
              children:
                "Custom formats, colours & positions — 100% free, no upload",
            }),
          ],
        }),
        e.jsx("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-8",
          children: e.jsxs("div", {
            onDragOver: (o) => {
              (o.preventDefault(), n(!0));
            },
            onDragLeave: () => n(!1),
            onDrop: i,
            className: `border-2 border-dashed rounded-xl p-8 sm:p-14 text-center transition-all cursor-pointer ${r ? "border-zinc-400 bg-zinc-800/60" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/40"}`,
            children: [
              e.jsx("input", {
                type: "file",
                accept: "application/pdf",
                onChange: (o) => {
                  const l = o.target.files[0];
                  l && s(l);
                },
                className: "hidden",
                id: "pagenum-upload",
              }),
              e.jsxs("label", {
                htmlFor: "pagenum-upload",
                className: "cursor-pointer flex flex-col items-center gap-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center",
                    children: e.jsx("svg", {
                      className: "w-8 h-8 text-zinc-300",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14",
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-white mb-1",
                        children: "Select your PDF",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-zinc-400",
                        children: "Click to browse or drag & drop here",
                      }),
                    ],
                  }),
                  e.jsx("span", {
                    className:
                      "px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors",
                    children: "Choose PDF",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Re = ({ showNotification: s, showDownloadDialog: r }) => {
    const [n, i] = a.useState(null),
      [o, l] = a.useState([]),
      [x, C] = a.useState(0),
      [D, f] = a.useState(!1),
      [c, P] = a.useState("bottom-center"),
      [w, E] = a.useState("number"),
      [j, _] = a.useState(1),
      [b, $] = a.useState(!1),
      [d, L] = a.useState(10),
      [k, A] = a.useState(!1),
      [v, W] = a.useState("#4d4d4d"),
      [V, X] = a.useState(!1),
      [O, de] = a.useState(!1),
      xe = a.useMemo(
        () => ({
          position: c,
          format: w,
          fontSize: d,
          fontBold: k,
          numberColour: v,
          startNumber: j,
        }),
        [c, w, d, k, v, j],
      );
    (a.useEffect(() => {}, []),
      a.useEffect(() => {
        if (!n) {
          (l([]), C(0));
          return;
        }
        let t = !1;
        return (
          f(!0),
          l([]),
          (async () => {
            try {
              if (!window.pdfjsLib) throw new Error("PDF.js not loaded");
              const h = await le(n),
                m = await window.pdfjsLib.getDocument({ data: h }).promise;
              if (t) return;
              C(m.numPages);
              const p = Math.min(m.numPages, 5),
                N = 900,
                z = [];
              for (let g = 1; g <= p; g++) {
                if (t) return;
                const B = await m.getPage(g),
                  U = B.getViewport({ scale: 1 }),
                  R = N / U.width,
                  F = B.getViewport({ scale: R }),
                  u = document.createElement("canvas");
                ((u.width = Math.round(F.width)),
                  (u.height = Math.round(F.height)),
                  await B.render({
                    canvasContext: u.getContext("2d"),
                    viewport: F,
                  }).promise,
                  z.push({
                    offCanvas: u,
                    width: u.width,
                    height: u.height,
                    scale: R,
                    pageIndex: g - 1,
                  }));
              }
              t || l(z);
            } catch (h) {
              t ||
                (console.error(h), s?.("Failed to load PDF preview", "error"));
            } finally {
              t || f(!1);
            }
          })(),
          () => {
            t = !0;
          }
        );
      }, [n]));
    const me = async () => {
      if (n) {
        X(!0);
        try {
          const { PDFDocument: t, rgb: h, StandardFonts: m } = window.PDFLib,
            p = await le(n),
            N = await t.load(p),
            z = N.getPages(),
            g = b ? 1 : 0,
            B = z.length - g,
            { r: U, g: R, b: F } = Pe(v),
            u = await N.embedFont(k ? m.HelveticaBold : m.Helvetica);
          z.forEach((te, se) => {
            if (se < g) return;
            const { width: ne, height: ge } = te.getSize(),
              fe = se - g + j,
              re = ce(fe, B, w),
              oe = u.widthOfTextAtSize(re, d),
              I = 20,
              we = c.includes("left")
                ? I
                : c.includes("right")
                  ? ne - I - oe
                  : (ne - oe) / 2,
              je = c.includes("top") ? ge - I - d : I;
            te.drawText(re, {
              x: we,
              y: je,
              size: d,
              color: h(U, R, F),
              font: u,
            });
          });
          const S = await N.save(),
            M = `numbered_${n.name}`;
          ke(S, M, "application/pdf") !== !1
            ? ((window._lastDownloadedFile = { name: M, bytes: S }),
              ye({ name: M, tool: "pagenumbers", size: S.length, bytes: S }),
              r?.(M, S.length, S))
            : s?.("Download may have been blocked.", "error");
        } catch (t) {
          (console.error(t), s?.("Failed to add page numbers.", "error"));
        } finally {
          X(!1);
        }
      }
    };
    if (!n) return e.jsx(De, { onFile: i });
    const G = b ? 1 : 0,
      he = x - G,
      J = e.jsx("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm",
        children: e.jsxs("div", {
          className: "flex items-center gap-3 px-4 py-3",
          children: [
            e.jsx("div", {
              className:
                "w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center flex-shrink-0",
              children: e.jsx("svg", {
                className: "w-4 h-4 text-zinc-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                }),
              }),
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsx("p", {
                  className: "text-sm font-semibold text-zinc-900 truncate",
                  children: n.name,
                }),
                e.jsxs("p", {
                  className: "text-xs text-zinc-500",
                  children: [
                    (n.size / 1024).toFixed(0),
                    " KB",
                    x > 0 ? ` · ${x} page${x !== 1 ? "s" : ""}` : "",
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => i(null),
              className:
                "w-7 h-7 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors flex-shrink-0",
              children: e.jsx("svg", {
                className: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: e.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12",
                }),
              }),
            }),
          ],
        }),
      }),
      K = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          e.jsx(y, { children: "Number Format" }),
          e.jsx("div", {
            className:
              "grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-2",
            children: [
              { id: "number", label: "1, 2, 3" },
              { id: "roman", label: "i, ii, iii" },
              { id: "letter", label: "A, B, C" },
              { id: "page-x", label: "Page 1" },
              { id: "x-of-total", label: "1 / 10" },
            ].map((t) =>
              e.jsx(
                "button",
                {
                  onClick: () => E(t.id),
                  className: `py-2 px-1 rounded-lg border text-xs font-semibold transition-all ${w === t.id ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"}`,
                  children: t.label,
                },
                t.id,
              ),
            ),
          }),
        ],
      }),
      Y = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          e.jsx(y, { children: "Position" }),
          e.jsx("div", {
            className:
              "relative rounded-xl border border-zinc-200 bg-zinc-50 overflow-hidden",
            style: { paddingTop: "58%" },
            children: e.jsx("div", {
              className: "absolute inset-0 p-3",
              children: e.jsxs("div", {
                className:
                  "relative w-full h-full border border-zinc-300 rounded-lg bg-white shadow-sm",
                children: [
                  Le.map(({ id: t, row: h, col: m }) => {
                    const p = c === t,
                      N = h === 0 ? { top: 8 } : { bottom: 8 },
                      z =
                        m === 0
                          ? { left: 8 }
                          : m === 1
                            ? { left: "50%", transform: "translateX(-50%)" }
                            : { right: 8 };
                    return e.jsx(
                      "button",
                      {
                        onClick: () => P(t),
                        title: H[t],
                        className: `absolute w-8 h-8 rounded-md flex items-center justify-center transition-all ${p ? "bg-zinc-900 shadow-md" : "bg-zinc-100 border border-zinc-300 hover:bg-zinc-200"}`,
                        style: { ...N, ...z },
                        children: e.jsx("span", {
                          className: `block w-2 h-2 rounded-sm ${p ? "bg-white" : "bg-zinc-400"}`,
                        }),
                      },
                      t,
                    );
                  }),
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none",
                    children: e.jsx("span", {
                      className: "text-xs text-zinc-400 font-medium",
                      children: H[c],
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      q = e.jsxs("div", {
        className:
          "bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-3",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx(y, { children: "Start at" }),
                  e.jsx("input", {
                    type: "number",
                    min: "1",
                    value: j,
                    onChange: (t) =>
                      _(Math.max(parseInt(t.target.value) || 1, 1)),
                    className:
                      "w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white",
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(y, { children: "Font size (pt)" }),
                  e.jsx("input", {
                    type: "number",
                    min: "6",
                    max: "72",
                    value: d,
                    onChange: (t) =>
                      L(Math.max(parseInt(t.target.value) || 6, 1)),
                    className:
                      "w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("label", {
            className:
              "flex items-center gap-3 cursor-pointer group select-none",
            children: [
              e.jsx("div", {
                onClick: () => $((t) => !t),
                className: `w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${b ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-300 group-hover:border-zinc-500"}`,
                children:
                  b &&
                  e.jsx("svg", {
                    className: "w-3 h-3 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 3,
                      d: "M5 13l4 4L19 7",
                    }),
                  }),
              }),
              e.jsx("span", {
                className: "text-sm text-zinc-700",
                children: "Skip first page (cover)",
              }),
            ],
          }),
        ],
      }),
      Q = e.jsxs("div", {
        className:
          "bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx(y, { children: "Colour" }),
              e.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  ae.map((t) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => W(t.hex),
                        title: t.label,
                        className: `w-8 h-8 rounded-full border-2 transition-all ${v === t.hex ? "border-zinc-900 scale-110 shadow-md" : "border-zinc-200 hover:border-zinc-400"}`,
                        style: { background: t.hex },
                      },
                      t.hex,
                    ),
                  ),
                  e.jsx("label", {
                    className: `w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer overflow-hidden ${ae.some((t) => t.hex === v) ? "border-zinc-200 hover:border-zinc-400" : "border-zinc-900 scale-110 shadow-md"}`,
                    style: {
                      background:
                        "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
                    },
                    children: e.jsx("input", {
                      type: "color",
                      className: "opacity-0 w-0 h-0 absolute",
                      value: v,
                      onChange: (t) => W(t.target.value),
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx(y, { children: "Font weight" }),
              e.jsx("div", {
                className: "flex gap-2",
                children: [
                  { id: !1, label: "Regular" },
                  { id: !0, label: "Bold" },
                ].map((t) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => A(t.id),
                      className: `flex-1 py-2 rounded-lg border text-sm transition-all ${t.id ? "font-bold" : "font-normal"} ${k === t.id ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"}`,
                      children: t.label,
                    },
                    String(t.id),
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsxs(y, { children: ["Font size — ", d, "pt"] }),
              e.jsx("input", {
                type: "range",
                min: "6",
                max: "48",
                step: "1",
                value: d,
                onChange: (t) => L(Number(t.target.value)),
                className: "w-full accent-zinc-900",
              }),
              e.jsxs("div", {
                className: "flex justify-between text-xs text-zinc-400 mt-1",
                children: [
                  e.jsx("span", { children: "6pt" }),
                  e.jsx("span", { children: "24pt" }),
                  e.jsx("span", { children: "48pt" }),
                ],
              }),
            ],
          }),
        ],
      }),
      Z = e.jsx("button", {
        onClick: me,
        disabled: V,
        type: "button",
        className:
          "w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 active:scale-[0.98]",
        children: V
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", {
                  className:
                    "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                }),
                "Processing…",
              ],
            })
          : e.jsxs(e.Fragment, {
              children: [
                "Add Numbers",
                e.jsx("svg", {
                  className: "w-4 h-4",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M14 5l7 7m0 0l-7 7m7-7H3",
                  }),
                }),
              ],
            }),
      }),
      ue = e.jsx("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: Z,
      }),
      ee = e.jsxs("div", {
        className: "min-w-0",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-3",
            children: [
              e.jsx("span", {
                className:
                  "text-xs font-bold uppercase tracking-widest text-zinc-500",
                children: "Live Preview",
              }),
              x > 0 &&
                e.jsx("span", {
                  className: "text-xs text-zinc-500",
                  children:
                    x > 5
                      ? `Showing 5 of ${x} pages · All will be numbered`
                      : `${x} page${x !== 1 ? "s" : ""}`,
                }),
            ],
          }),
          D
            ? e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center py-20 bg-zinc-900/50 border border-zinc-800 rounded-xl",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin mb-3",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-zinc-500",
                    children: "Rendering pages…",
                  }),
                ],
              })
            : o.length > 0
              ? e.jsx("div", {
                  className: "space-y-4",
                  children: o.map((t, h) => {
                    const m = b && h === 0,
                      p = m ? 1 : h - G + j;
                    return e.jsx(
                      Fe,
                      {
                        offCanvas: t.offCanvas,
                        width: t.width,
                        height: t.height,
                        scale: t.scale,
                        displayNum: p,
                        totalNums: he,
                        skip: m,
                        config: xe,
                      },
                      h,
                    );
                  }),
                })
              : e.jsx("div", {
                  className:
                    "flex items-center justify-center py-16 bg-zinc-900/50 border border-zinc-800 rounded-xl",
                  children: e.jsx("p", {
                    className: "text-sm text-zinc-500",
                    children: "Preview unavailable",
                  }),
                }),
        ],
      }),
      be = e.jsxs("div", {
        className: "flex items-center gap-2 flex-wrap",
        children: [
          e.jsx("span", {
            className:
              "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: Be[w],
          }),
          e.jsx("span", {
            className:
              "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: H[c],
          }),
          e.jsxs("span", {
            className:
              "inline-flex items-center gap-1.5 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: [
              e.jsx("span", {
                className:
                  "w-2.5 h-2.5 rounded-full border border-zinc-300 flex-shrink-0",
                style: { background: v },
              }),
              d,
              "pt",
            ],
          }),
        ],
      }),
      pe = e.jsx("div", {
        className:
          "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-zinc-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]",
        children: e.jsxs("div", {
          className: "max-w-lg mx-auto",
          children: [
            e.jsxs("button", {
              onClick: () => de((t) => !t),
              className:
                "w-full flex items-center justify-between px-4 py-3 border-b border-zinc-100 transition-colors hover:bg-zinc-50 active:bg-zinc-100",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col gap-1.5 min-w-0 flex-1 mr-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-sm font-semibold text-zinc-900 leading-none",
                      children: "Formatting Settings",
                    }),
                    !O && e.jsx("div", { className: "mt-0.5", children: be }),
                  ],
                }),
                e.jsx("div", {
                  className: `w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${O ? "bg-zinc-900" : "bg-zinc-100"}`,
                  children: e.jsx("svg", {
                    className: `w-4 h-4 transition-transform duration-200 ${O ? "rotate-180 text-white" : "text-zinc-500"}`,
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "overflow-y-auto transition-all duration-300 ease-in-out",
              style: { maxHeight: O ? "55vh" : "0px" },
              children: e.jsxs("div", {
                className: "p-3 space-y-3",
                children: [K, Y, q, Q],
              }),
            }),
            e.jsxs("div", {
              className: "px-3 py-3",
              children: [
                Z,
                e.jsx("p", {
                  className: "text-center text-xs text-zinc-400 mt-1.5",
                  children: "100% local · Files never uploaded",
                }),
              ],
            }),
          ],
        }),
      });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "w-full max-w-7xl mx-auto px-3 sm:px-5 pb-10",
          children: [
            e.jsxs("div", {
              className:
                "hidden lg:flex flex-col lg:flex-row gap-5 lg:gap-6 items-start",
              children: [
                e.jsx("div", {
                  className: "w-full lg:flex-1 min-w-0 order-2 lg:order-1",
                  children: ee,
                }),
                e.jsxs("div", {
                  className:
                    "w-full sm:max-w-lg sm:mx-auto lg:mx-0 lg:w-80 xl:w-96 flex-shrink-0 order-1 lg:order-2 lg:sticky lg:top-4 space-y-3",
                  children: [J, ue, K, Y, q, Q],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "lg:hidden flex flex-col gap-3 pb-44",
              children: [J, ee],
            }),
          ],
        }),
        pe,
      ],
    });
  };
export { Re as default };
