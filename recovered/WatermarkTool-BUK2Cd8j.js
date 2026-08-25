import { r as c, j as e } from "./react-vendor-Bc7KCos-.js";
const U = "ihatepdf-store",
  ge = "ihatepdf_DB",
  le = "ihatepdf_history",
  ie = (n) =>
    new Promise((l, s) => {
      const i = new FileReader();
      ((i.onload = () => l(i.result)), (i.onerror = s), i.readAsArrayBuffer(n));
    }),
  be = () =>
    new Promise((n, l) => {
      const s = indexedDB.open(ge, 1);
      ((s.onupgradeneeded = (i) => {
        const o = i.target.result;
        o.objectStoreNames.contains(U) || o.createObjectStore(U);
      }),
        (s.onsuccess = () => n(s.result)),
        (s.onerror = () => l(s.error)));
    }),
  fe = async (n, l) => {
    const s = await be();
    return new Promise((i, o) => {
      const a = s.transaction(U, "readwrite");
      (a.objectStore(U).put(l, n),
        (a.oncomplete = i),
        (a.onerror = () => o(a.error)));
    });
  },
  we = async (n) => {
    const l = JSON.parse(localStorage.getItem(le) || "[]"),
      s = {
        id: Date.now(),
        name: n.name,
        tool: n.tool,
        timestamp: Date.now(),
        size: n.size,
      };
    if (n.bytes)
      try {
        await fe(`pdf_${s.id}`, n.bytes);
      } catch {}
    (l.unshift(s), localStorage.setItem(le, JSON.stringify(l.slice(0, 50))));
  },
  je = (n, l, s) => {
    try {
      if (typeof window.download == "function")
        return (window.download(n, l, s), !0);
    } catch {}
    try {
      const i = new Blob([n], { type: s });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(i, l), !0);
      const o = URL.createObjectURL(i),
        a = document.createElement("a");
      return (
        (a.href = o),
        (a.download = l),
        (a.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(a),
        a.click(),
        setTimeout(() => {
          (a.parentNode && document.body.removeChild(a),
            URL.revokeObjectURL(o));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const i = URL.createObjectURL(new Blob([n], { type: s }));
        return (
          window.open(i, "_blank") ||
            alert(`Download blocked.

File: ${l}`),
          setTimeout(() => URL.revokeObjectURL(i), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${l}.`), !1);
      }
    }
  },
  ve = (n) => ({
    r: parseInt(n.slice(1, 3), 16) / 255,
    g: parseInt(n.slice(3, 5), 16) / 255,
    b: parseInt(n.slice(5, 7), 16) / 255,
  }),
  oe = [
    { label: "Grey", hex: "#808080" },
    { label: "Black", hex: "#000000" },
    { label: "Red", hex: "#e53e3e" },
    { label: "Blue", hex: "#3182ce" },
    { label: "Green", hex: "#38a169" },
    { label: "Purple", hex: "#805ad5" },
    { label: "Orange", hex: "#dd6b20" },
  ],
  ze = { single: "Single", "diagonal-tile": "Diagonal", grid: "Grid" },
  F = ({ children: n }) =>
    e.jsx("p", {
      className:
        "text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",
      children: n,
    }),
  Ne = ({ offCanvas: n, width: l, height: s, config: i }) => {
    const o = c.useRef(null);
    return (
      c.useEffect(() => {
        const a = o.current;
        if (!a || !n) return;
        ((a.width = l), (a.height = s));
        const r = a.getContext("2d");
        r.drawImage(n, 0, 0);
        const {
          text: z,
          pattern: E,
          colour: y,
          opacity: I,
          fontSize: A,
          spacingX: k,
          spacingY: H,
        } = i;
        if (!z.trim()) return;
        const x = parseInt(y.slice(1, 3), 16),
          $ = parseInt(y.slice(3, 5), 16),
          u = parseInt(y.slice(5, 7), 16);
        (r.save(),
          (r.globalAlpha = I),
          (r.fillStyle = `rgb(${x},${$},${u})`),
          (r.font = `bold ${A}px Helvetica, Arial, sans-serif`),
          (r.textAlign = "center"),
          (r.textBaseline = "middle"));
        const L = -Math.PI / 4,
          m = (k / 595) * l,
          S = (H / 842) * s;
        if (E === "single")
          (r.save(),
            r.translate(l / 2, s / 2),
            r.rotate(L),
            r.fillText(z, 0, 0),
            r.restore());
        else if (E === "diagonal-tile") {
          const h = Math.ceil(l / m) + 4,
            D = Math.ceil(s / S) + 4;
          for (let d = -2; d < D; d++)
            for (let g = -2; g < h; g++) {
              const p = (((d % 2) + 2) % 2) * (m / 2);
              (r.save(),
                r.translate(g * m + p, d * S),
                r.rotate(L),
                r.fillText(z, 0, 0),
                r.restore());
            }
        } else {
          const h = Math.ceil(l / m) + 2,
            D = Math.ceil(s / S) + 2;
          for (let d = -1; d < D; d++)
            for (let g = -1; g < h; g++)
              (r.save(),
                r.translate(g * m, d * S),
                r.rotate(L),
                r.fillText(z, 0, 0),
                r.restore());
        }
        r.restore();
      }, [n, l, s, i]),
      e.jsx("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden",
        children: e.jsx("canvas", {
          ref: o,
          style: { width: "100%", height: "auto", display: "block" },
        }),
      })
    );
  },
  ye = ({ onFile: n }) => {
    const [l, s] = c.useState(!1),
      i = (o) => {
        (o.preventDefault(), s(!1));
        const a = o.dataTransfer.files[0];
        a?.type === "application/pdf" && n(a);
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
              children: "Add Watermark to PDF",
            }),
            e.jsx("p", {
              className: "text-sm sm:text-base text-zinc-400",
              children:
                "Custom text, patterns & colours — 100% free, no upload",
            }),
          ],
        }),
        e.jsx("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-8",
          children: e.jsxs("div", {
            onDragOver: (o) => {
              (o.preventDefault(), s(!0));
            },
            onDragLeave: () => s(!1),
            onDrop: i,
            className: `border-2 border-dashed rounded-xl p-8 sm:p-14 text-center transition-all cursor-pointer ${l ? "border-zinc-400 bg-zinc-800/60" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/40"}`,
            children: [
              e.jsx("input", {
                type: "file",
                accept: "application/pdf",
                onChange: (o) => {
                  const a = o.target.files[0];
                  a && n(a);
                },
                className: "hidden",
                id: "watermark-upload",
              }),
              e.jsxs("label", {
                htmlFor: "watermark-upload",
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
                        d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z",
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-lg sm:text-xl font-semibold text-white mb-1",
                        children: "Select PDF to Watermark",
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
  Ce = ({ showNotification: n, showDownloadDialog: l }) => {
    const [s, i] = c.useState(null),
      [o, a] = c.useState([]),
      [r, z] = c.useState(0),
      [E, y] = c.useState(!1),
      [I, A] = c.useState(!1),
      [k, H] = c.useState(!1),
      [x, $] = c.useState("CONFIDENTIAL"),
      [u, L] = c.useState("diagonal-tile"),
      [m, S] = c.useState(0.15),
      [h, D] = c.useState(48),
      [d, g] = c.useState("#808080"),
      [p, ce] = c.useState(200),
      [w, de] = c.useState(200),
      xe = c.useMemo(
        () => ({
          text: x,
          pattern: u,
          colour: d,
          opacity: m,
          fontSize: h,
          spacingX: p,
          spacingY: w,
        }),
        [x, u, d, m, h, p, w],
      );
    (c.useEffect(() => {}, []),
      c.useEffect(() => {
        if (!s) {
          (a([]), z(0));
          return;
        }
        let t = !1;
        return (
          y(!0),
          a([]),
          (async () => {
            try {
              if (!window.pdfjsLib) throw new Error("PDF.js not loaded");
              const N = await ie(s),
                T = await window.pdfjsLib.getDocument({ data: N }).promise;
              if (t) return;
              z(T.numPages);
              const Y = Math.min(T.numPages, 5),
                V = 900,
                C = [];
              for (let j = 1; j <= Y; j++) {
                if (t) return;
                const O = await T.getPage(j),
                  G = O.getViewport({ scale: 1 }),
                  W = V / G.width,
                  M = O.getViewport({ scale: W }),
                  v = document.createElement("canvas");
                ((v.width = Math.round(M.width)),
                  (v.height = Math.round(M.height)),
                  await O.render({
                    canvasContext: v.getContext("2d"),
                    viewport: M,
                  }).promise,
                  C.push({
                    offCanvas: v,
                    width: v.width,
                    height: v.height,
                    scale: W,
                    pageIndex: j - 1,
                  }));
              }
              t || a(C);
            } catch (N) {
              t ||
                (console.error(N), n?.("Failed to load PDF preview", "error"));
            } finally {
              t || y(!1);
            }
          })(),
          () => {
            t = !0;
          }
        );
      }, [s]));
    const me = async () => {
      if (s) {
        if (!x.trim()) {
          n?.("Please enter watermark text.", "error");
          return;
        }
        A(!0);
        try {
          const {
              PDFDocument: t,
              rgb: N,
              degrees: T,
              StandardFonts: Y,
            } = window.PDFLib,
            V = await ie(s),
            C = await t.load(V),
            j = await C.embedFont(Y.HelveticaBold),
            O = C.getPages(),
            { r: G, g: W, b: M } = ve(d),
            v = N(G, W, M);
          for (const ae of O) {
            const { width: X, height: J } = ae.getSize(),
              K = (B, R) => {
                const b = j.widthOfTextAtSize(x, h),
                  f = j.heightAtSize(h);
                ae.drawText(x, {
                  x: B - b / 2,
                  y: R - f / 2,
                  size: h,
                  font: j,
                  color: v,
                  opacity: m,
                  rotate: T(45),
                });
              };
            if (u === "single") K(X / 2, J / 2);
            else if (u === "diagonal-tile") {
              const B = Math.ceil(X / p) + 2,
                R = Math.ceil(J / w) + 2;
              for (let b = -1; b < R; b++)
                for (let f = -1; f < B; f++)
                  K(f * p + (b % 2) * (p / 2), b * w);
            } else {
              const B = Math.ceil(X / p) + 1,
                R = Math.ceil(J / w) + 1;
              for (let b = 0; b < R; b++)
                for (let f = 0; f < B; f++) K(f * p, b * w);
            }
          }
          const P = await C.save(),
            _ = `watermarked_${s.name}`;
          je(P, _, "application/pdf") !== !1
            ? ((window._lastDownloadedFile = { name: _, bytes: P }),
              we({ name: _, tool: "watermark", size: P.length, bytes: P }),
              l?.(_, P.length, P))
            : n?.("Download may have been blocked.", "error");
        } catch (t) {
          (console.error(t), n?.("Failed to apply watermark.", "error"));
        } finally {
          A(!1);
        }
      }
    };
    if (!s) return e.jsx(ye, { onFile: i });
    const q = e.jsx("div", {
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
                  children: s.name,
                }),
                e.jsxs("p", {
                  className: "text-xs text-zinc-500",
                  children: [
                    (s.size / 1024).toFixed(0),
                    " KB",
                    r > 0 ? ` · ${r} page${r !== 1 ? "s" : ""}` : "",
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
      Q = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          e.jsx(F, { children: "Watermark Text" }),
          e.jsx("input", {
            type: "text",
            value: x,
            onChange: (t) => $(t.target.value),
            placeholder: "e.g. CONFIDENTIAL, DRAFT…",
            className:
              "w-full border border-zinc-200 rounded-lg px-3 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white",
          }),
          e.jsx("div", {
            className: "flex flex-wrap gap-1.5 mt-2",
            children: ["CONFIDENTIAL", "DRAFT", "COPY", "© 2025"].map((t) =>
              e.jsx(
                "button",
                {
                  onClick: () => $(t),
                  className: `px-2 py-0.5 text-xs rounded-md border font-mono transition-colors ${x === t ? "bg-zinc-900 border-zinc-900 text-white" : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400"}`,
                  children: t,
                },
                t,
              ),
            ),
          }),
        ],
      }),
      Z = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          e.jsx(F, { children: "Pattern" }),
          e.jsx("div", {
            className: "grid grid-cols-3 gap-2",
            children: [
              { id: "single", icon: "▣", label: "Single", sub: "Centre" },
              {
                id: "diagonal-tile",
                icon: "⊞",
                label: "Diagonal",
                sub: "Tiled",
              },
              { id: "grid", icon: "⊟", label: "Grid", sub: "Aligned" },
            ].map((t) =>
              e.jsxs(
                "button",
                {
                  onClick: () => L(t.id),
                  className: `py-2.5 px-2 rounded-lg border text-center transition-all ${u === t.id ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"}`,
                  children: [
                    e.jsx("div", {
                      className: "text-lg mb-0.5",
                      children: t.icon,
                    }),
                    e.jsx("div", {
                      className: "text-xs font-semibold",
                      children: t.label,
                    }),
                    e.jsx("div", {
                      className: "text-[10px] text-zinc-400",
                      children: t.sub,
                    }),
                  ],
                },
                t.id,
              ),
            ),
          }),
        ],
      }),
      ee = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          e.jsxs(F, { children: ["Opacity — ", Math.round(m * 100), "%"] }),
          e.jsx("input", {
            type: "range",
            min: "0.03",
            max: "1",
            step: "0.01",
            value: m,
            onChange: (t) => S(parseFloat(t.target.value)),
            className: "w-full accent-zinc-900",
          }),
          e.jsxs("div", {
            className: "flex justify-between text-xs text-zinc-400 mt-1",
            children: [
              e.jsx("span", { children: "3%" }),
              e.jsx("span", { children: "50%" }),
              e.jsx("span", { children: "100%" }),
            ],
          }),
        ],
      }),
      te =
        (u === "diagonal-tile" || u === "grid") &&
        e.jsxs("div", {
          className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
          children: [
            e.jsx(F, { children: "Tile Spacing" }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("p", {
                      className: "text-xs text-zinc-500 mb-1",
                      children: ["Horizontal — ", p, "px"],
                    }),
                    e.jsx("input", {
                      type: "range",
                      min: "50",
                      max: "500",
                      value: p,
                      onChange: (t) => ce(parseInt(t.target.value)),
                      className: "w-full accent-zinc-900",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsxs("p", {
                      className: "text-xs text-zinc-500 mb-1",
                      children: ["Vertical — ", w, "px"],
                    }),
                    e.jsx("input", {
                      type: "range",
                      min: "50",
                      max: "500",
                      value: w,
                      onChange: (t) => de(parseInt(t.target.value)),
                      className: "w-full accent-zinc-900",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      se = e.jsxs("div", {
        className:
          "bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx(F, { children: "Colour" }),
              e.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  oe.map((t) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => g(t.hex),
                        title: t.label,
                        className: `w-8 h-8 rounded-full border-2 transition-all ${d === t.hex ? "border-zinc-900 scale-110 shadow-md" : "border-zinc-200 hover:border-zinc-400"}`,
                        style: { background: t.hex },
                      },
                      t.hex,
                    ),
                  ),
                  e.jsx("label", {
                    className: `w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer overflow-hidden ${oe.some((t) => t.hex === d) ? "border-zinc-200 hover:border-zinc-400" : "border-zinc-900 scale-110 shadow-md"}`,
                    style: {
                      background:
                        "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
                    },
                    children: e.jsx("input", {
                      type: "color",
                      className: "opacity-0 w-0 h-0 absolute",
                      value: d,
                      onChange: (t) => g(t.target.value),
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsxs(F, { children: ["Font size — ", h, "pt"] }),
              e.jsx("input", {
                type: "range",
                min: "12",
                max: "120",
                step: "2",
                value: h,
                onChange: (t) => D(Number(t.target.value)),
                className: "w-full accent-zinc-900",
              }),
              e.jsxs("div", {
                className: "flex justify-between text-xs text-zinc-400 mt-1",
                children: [
                  e.jsx("span", { children: "12pt" }),
                  e.jsx("span", { children: "66pt" }),
                  e.jsx("span", { children: "120pt" }),
                ],
              }),
            ],
          }),
        ],
      }),
      ne = e.jsx("button", {
        onClick: me,
        disabled: I || !x.trim(),
        type: "button",
        className:
          "w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 active:scale-[0.98]",
        children: I
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
                "Apply Watermark",
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
      he = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          ne,
          !x.trim() &&
            e.jsx("p", {
              className: "text-center text-xs text-amber-600 mt-2",
              children: "Enter watermark text above to continue.",
            }),
          x.trim() &&
            e.jsx("p", {
              className: "text-center text-xs text-zinc-400 mt-2",
              children: "100% local · Files never uploaded",
            }),
        ],
      }),
      re = e.jsxs("div", {
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
              r > 0 &&
                e.jsx("span", {
                  className: "text-xs text-zinc-500",
                  children:
                    r > 5
                      ? `Showing 5 of ${r} pages · Watermark applied to all`
                      : `${r} page${r !== 1 ? "s" : ""} · Watermark applied to all`,
                }),
            ],
          }),
          E
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
                  children: o.map((t, N) =>
                    e.jsx(
                      Ne,
                      {
                        offCanvas: t.offCanvas,
                        width: t.width,
                        height: t.height,
                        config: xe,
                      },
                      N,
                    ),
                  ),
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
      pe = e.jsxs("div", {
        className: "flex items-center gap-2 flex-wrap",
        children: [
          e.jsx("span", {
            className:
              "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: ze[u],
          }),
          e.jsxs("span", {
            className:
              "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: [Math.round(m * 100), "% opacity"],
          }),
          e.jsxs("span", {
            className:
              "inline-flex items-center gap-1.5 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: [
              e.jsx("span", {
                className:
                  "w-2.5 h-2.5 rounded-full border border-zinc-300 flex-shrink-0",
                style: { background: d },
              }),
              h,
              "pt",
            ],
          }),
        ],
      }),
      ue = e.jsx("div", {
        className:
          "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-zinc-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]",
        children: e.jsxs("div", {
          className: "max-w-lg mx-auto",
          children: [
            e.jsxs("button", {
              onClick: () => H((t) => !t),
              className:
                "w-full flex items-center justify-between px-4 py-3 border-b border-zinc-100 transition-colors hover:bg-zinc-50 active:bg-zinc-100",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col gap-1.5 min-w-0 flex-1 mr-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-sm font-semibold text-zinc-900 leading-none",
                      children: "Watermark Settings",
                    }),
                    !k && e.jsx("div", { className: "mt-0.5", children: pe }),
                  ],
                }),
                e.jsx("div", {
                  className: `w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${k ? "bg-zinc-900" : "bg-zinc-100"}`,
                  children: e.jsx("svg", {
                    className: `w-4 h-4 transition-transform duration-200 ${k ? "rotate-180 text-white" : "text-zinc-500"}`,
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
              style: { maxHeight: k ? "55vh" : "0px" },
              children: e.jsxs("div", {
                className: "p-3 space-y-3",
                children: [Q, Z, ee, te, se],
              }),
            }),
            e.jsxs("div", {
              className: "px-3 py-3",
              children: [
                ne,
                !x.trim() &&
                  e.jsx("p", {
                    className: "text-center text-xs text-amber-600 mt-1.5",
                    children: "Enter watermark text above to continue.",
                  }),
                x.trim() &&
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
                  children: re,
                }),
                e.jsxs("div", {
                  className:
                    "w-full sm:max-w-lg sm:mx-auto lg:mx-0 lg:w-80 xl:w-96 flex-shrink-0 order-1 lg:order-2 lg:sticky lg:top-4 space-y-3",
                  children: [q, he, Q, Z, ee, te, se],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "lg:hidden flex flex-col gap-3 pb-44",
              children: [q, re],
            }),
          ],
        }),
        ue,
      ],
    });
  };
export { Ce as default };
