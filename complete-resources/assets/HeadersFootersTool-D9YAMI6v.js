import { r as a, j as e } from "./react-vendor-Bc7KCos-.js";
const te = "ihatepdf-store",
  Be = "ihatepdf_DB",
  pe = "ihatepdf_history",
  ge = (s) =>
    new Promise((r, n) => {
      const o = new FileReader();
      ((o.onload = () => r(o.result)), (o.onerror = n), o.readAsArrayBuffer(s));
    }),
  $e = () =>
    new Promise((s, r) => {
      const n = indexedDB.open(Be, 1);
      ((n.onupgradeneeded = (o) => {
        const l = o.target.result;
        l.objectStoreNames.contains(te) || l.createObjectStore(te);
      }),
        (n.onsuccess = () => s(n.result)),
        (n.onerror = () => r(n.error)));
    }),
  Ee = async (s, r) => {
    const n = await $e();
    return new Promise((o, l) => {
      const i = n.transaction(te, "readwrite");
      (i.objectStore(te).put(r, s),
        (i.oncomplete = o),
        (i.onerror = () => l(i.error)));
    });
  },
  Te = async (s) => {
    const r = JSON.parse(localStorage.getItem(pe) || "[]"),
      n = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await Ee(`pdf_${n.id}`, s.bytes);
      } catch {}
    (r.unshift(n), localStorage.setItem(pe, JSON.stringify(r.slice(0, 50))));
  },
  He = (s, r, n) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, r, n), !0);
    } catch {}
    try {
      const o = new Blob([s], { type: n });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(o, r), !0);
      const l = URL.createObjectURL(o),
        i = document.createElement("a");
      return (
        (i.href = l),
        (i.download = r),
        (i.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(i),
        i.click(),
        setTimeout(() => {
          (i.parentNode && document.body.removeChild(i),
            URL.revokeObjectURL(l));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const o = URL.createObjectURL(new Blob([s], { type: n }));
        return (
          window.open(o, "_blank") ||
            alert(`Download blocked.

File: ${r}`),
          setTimeout(() => URL.revokeObjectURL(o), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${r}.`), !1);
      }
    }
  },
  Me = (s) => ({
    r: parseInt(s.slice(1, 3), 16) / 255,
    g: parseInt(s.slice(3, 5), 16) / 255,
    b: parseInt(s.slice(5, 7), 16) / 255,
  }),
  je = (s, r, n, o) => {
    const l = new Date();
    return s
      .replace(/{page}/g, r.toString())
      .replace(/{pages}/g, n.toString())
      .replace(/{date}/g, l.toLocaleDateString())
      .replace(/{time}/g, l.toLocaleTimeString())
      .replace(/{filename}/g, o.replace(".pdf", ""));
  },
  be = [
    { label: "Dark Grey", hex: "#666666" },
    { label: "Black", hex: "#000000" },
    { label: "Red", hex: "#e53e3e" },
    { label: "Blue", hex: "#3182ce" },
    { label: "Green", hex: "#38a169" },
    { label: "Purple", hex: "#805ad5" },
    { label: "Orange", hex: "#dd6b20" },
  ],
  G = ({ children: s }) =>
    e.jsx("p", {
      className:
        "text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",
      children: s,
    }),
  Oe = ({ checked: s, onChange: r }) =>
    e.jsx("button", {
      type: "button",
      onClick: r,
      className: `relative inline-flex h-5 w-9 items-center rounded-full transition-colors flex-shrink-0 ${s ? "bg-zinc-900" : "bg-zinc-300"}`,
      children: e.jsx("span", {
        className: `inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform ${s ? "translate-x-4" : "translate-x-0.5"}`,
      }),
    }),
  Ie = ({
    offCanvas: s,
    width: r,
    height: n,
    scale: o,
    pageNum: l,
    totalPages: i,
    fileName: c,
    config: P,
  }) => {
    const T = a.useRef(null);
    return (
      a.useEffect(() => {
        const z = T.current;
        if (!z || !s) return;
        ((z.width = r), (z.height = n));
        const g = z.getContext("2d");
        g.drawImage(s, 0, 0);
        const {
            headerEnabled: H,
            headerLeft: m,
            headerCenter: J,
            headerRight: R,
            footerEnabled: K,
            footerLeft: f,
            footerCenter: se,
            footerRight: M,
            colour: ne,
            fontSize: O,
            fontBold: q,
            margin: I,
          } = P,
          Q = Math.max(O * o, 1),
          d = I * o;
        (g.save(),
          (g.font = `${q ? "bold" : "normal"} ${Q}px Helvetica, Arial, sans-serif`),
          (g.fillStyle = ne));
        const k = (h, X, _) => {
          if (!h) return;
          const Y = je(h, l, i, c),
            D = g.measureText(Y).width;
          let A;
          (X === "left"
            ? (A = d)
            : X === "right"
              ? (A = r - d - D)
              : (A = (r - D) / 2),
            g.fillText(Y, A, _));
        };
        if (H) {
          const h = d;
          (k(m, "left", h), k(J, "center", h), k(R, "right", h));
        }
        if (K) {
          const h = n - d + Q;
          (k(f, "left", h), k(se, "center", h), k(M, "right", h));
        }
        g.restore();
      }, [s, r, n, o, l, i, c, P]),
      e.jsx("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden",
        children: e.jsx("canvas", {
          ref: T,
          style: { width: "100%", height: "auto", display: "block" },
        }),
      })
    );
  },
  _e = ({ onFile: s }) => {
    const [r, n] = a.useState(!1),
      o = (l) => {
        (l.preventDefault(), n(!1));
        const i = l.dataTransfer.files[0];
        i?.type === "application/pdf" && s(i);
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
              children: "Add Headers & Footers to PDF",
            }),
            e.jsx("p", {
              className: "text-sm sm:text-base text-zinc-400",
              children:
                "Custom text, page numbers, dates & filenames — 100% free, no upload",
            }),
          ],
        }),
        e.jsx("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-8",
          children: e.jsxs("div", {
            onDragOver: (l) => {
              (l.preventDefault(), n(!0));
            },
            onDragLeave: () => n(!1),
            onDrop: o,
            className: `border-2 border-dashed rounded-xl p-8 sm:p-14 text-center transition-all cursor-pointer ${r ? "border-zinc-400 bg-zinc-800/60" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/40"}`,
            children: [
              e.jsx("input", {
                type: "file",
                accept: "application/pdf",
                onChange: (l) => {
                  const i = l.target.files[0];
                  i && s(i);
                },
                className: "hidden",
                id: "hf-upload",
              }),
              e.jsxs("label", {
                htmlFor: "hf-upload",
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
                        d: "M4 7V4h16v3M9 20h6M12 4v16",
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
  we = ({
    section: s,
    enabled: r,
    onToggle: n,
    left: o,
    onLeft: l,
    center: i,
    onCenter: c,
    right: P,
    onRight: T,
    onInsert: z,
  }) => {
    const g = s === "header" ? "Header" : "Footer",
      H = ["page", "pages", "date", "time", "filename"];
    return e.jsxs("div", {
      className: `rounded-xl border transition-all ${r ? "border-zinc-200 bg-white shadow-sm" : "border-zinc-200 bg-zinc-50"}`,
      children: [
        e.jsxs("div", {
          className:
            "flex items-center justify-between px-4 py-3 border-b border-zinc-100",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(Oe, { checked: r, onChange: n }),
                e.jsx("span", {
                  className: `text-sm font-bold ${r ? "text-zinc-900" : "text-zinc-400"}`,
                  children: g,
                }),
              ],
            }),
            r &&
              e.jsx("div", {
                className: "flex gap-1 flex-wrap justify-end",
                children: H.map((m) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => z(m),
                      className:
                        "px-2 py-0.5 text-xs bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md border border-zinc-200 font-mono transition-colors",
                      title: `Insert {${m}}`,
                      children: `{${m}}`,
                    },
                    m,
                  ),
                ),
              }),
          ],
        }),
        r &&
          e.jsx("div", {
            className: "grid grid-cols-3 gap-2 p-4",
            children: [
              { lbl: "Left", val: o, onChange: l },
              { lbl: "Center", val: i, onChange: c },
              { lbl: "Right", val: P, onChange: T },
            ].map(({ lbl: m, val: J, onChange: R }) =>
              e.jsxs(
                "div",
                {
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-zinc-400 font-semibold mb-1",
                      children: m,
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: J,
                      onChange: (K) => R(K.target.value),
                      placeholder: "{page}, text…",
                      className:
                        "w-full border border-zinc-200 rounded-lg px-2.5 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white",
                    }),
                  ],
                },
                m,
              ),
            ),
          }),
      ],
    });
  },
  Ue = ({ showNotification: s, showDownloadDialog: r }) => {
    const [n, o] = a.useState(null),
      [l, i] = a.useState([]),
      [c, P] = a.useState(0),
      [T, z] = a.useState(!1),
      [g, H] = a.useState(!1),
      [m, J] = a.useState(!1),
      [R, K] = a.useState("content"),
      [f, se] = a.useState(!1),
      [M, ne] = a.useState(""),
      [O, q] = a.useState(""),
      [I, Q] = a.useState(""),
      [d, k] = a.useState(!0),
      [h, X] = a.useState(""),
      [_, Y] = a.useState("{page}"),
      [D, A] = a.useState(""),
      [S, ve] = a.useState(10),
      [Z, ze] = a.useState(!1),
      [B, ae] = a.useState("#666666"),
      [oe, Ne] = a.useState(1),
      [ie, le] = a.useState(0),
      [re, ye] = a.useState(!1),
      [N, ke] = a.useState(30),
      Se = a.useMemo(
        () => ({
          headerEnabled: f,
          headerLeft: M,
          headerCenter: O,
          headerRight: I,
          footerEnabled: d,
          footerLeft: h,
          footerCenter: _,
          footerRight: D,
          colour: B,
          fontSize: S,
          fontBold: Z,
          margin: N,
        }),
        [f, M, O, I, d, h, _, D, B, S, Z, N],
      );
    (a.useEffect(() => {}, []),
      a.useEffect(() => {
        if (!n) {
          (i([]), P(0));
          return;
        }
        let t = !1;
        return (
          z(!0),
          i([]),
          (async () => {
            try {
              if (!window.pdfjsLib) throw new Error("PDF.js not loaded");
              const x = await ge(n),
                w = await window.pdfjsLib.getDocument({ data: x }).promise;
              if (t) return;
              const p = w.numPages;
              (P(p), le(p));
              const b = Math.min(p, 5),
                $ = 900,
                C = [];
              for (let F = 1; F <= b; F++) {
                if (t) return;
                const E = await w.getPage(F),
                  j = E.getViewport({ scale: 1 }),
                  v = $ / j.width,
                  L = E.getViewport({ scale: v }),
                  u = document.createElement("canvas");
                ((u.width = Math.round(L.width)),
                  (u.height = Math.round(L.height)),
                  await E.render({
                    canvasContext: u.getContext("2d"),
                    viewport: L,
                  }).promise,
                  C.push({
                    offCanvas: u,
                    width: u.width,
                    height: u.height,
                    scale: v,
                    pageIndex: F - 1,
                  }));
              }
              t || i(C);
            } catch (x) {
              t ||
                (console.error(x), s?.("Failed to load PDF preview", "error"));
            } finally {
              t || z(!1);
            }
          })(),
          () => {
            t = !0;
          }
        );
      }, [n]));
    const U = (t, x, w, p, b, $) => {
        if (!x.trim()) return;
        const { rgb: C } = window.PDFLib,
          { r: F, g: E, b: j } = Me(B),
          v = $.widthOfTextAtSize(x, S);
        let L = w === "left" ? N : w === "right" ? b - N - v : (b - v) / 2;
        ((L = Math.max(N, L)),
          t.drawText(x, { x: L, y: p, size: S, color: C(F, E, j), font: $ }));
      },
      Ce = async () => {
        if (n) {
          if (!f && !d) {
            s?.("Please enable at least header or footer.", "error");
            return;
          }
          H(!0);
          try {
            const { PDFDocument: t, StandardFonts: x } = window.PDFLib,
              w = await ge(n),
              p = await t.load(w),
              b = await p.embedFont(Z ? x.HelveticaBold : x.Helvetica),
              $ = p.getPages(),
              C = $.length,
              F = Math.max(1, oe),
              E = Math.min(ie || C, C);
            $.forEach((u, Re) => {
              const ee = Re + 1;
              if (ee < F || ee > E || (re && ee === 1)) return;
              const { width: V, height: De } = u.getSize(),
                W = (y) => je(y, ee, C, n.name);
              if (f) {
                const y = De - N;
                (U(u, W(M), "left", y, V, b),
                  U(u, W(O), "center", y, V, b),
                  U(u, W(I), "right", y, V, b));
              }
              if (d) {
                const y = N - S;
                (U(u, W(h), "left", y, V, b),
                  U(u, W(_), "center", y, V, b),
                  U(u, W(D), "right", y, V, b));
              }
            });
            const j = await p.save(),
              v = `header_footer_${n.name}`;
            He(j, v, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: v, bytes: j }),
                Te({ name: v, tool: "headerfooter", size: j.length, bytes: j }),
                r?.(v, j.length, j))
              : s?.("Download may have been blocked.", "error");
          } catch (t) {
            (console.error(t), s?.("Failed to add headers/footers.", "error"));
          } finally {
            H(!1);
          }
        }
      },
      ce = (t, x) => {
        const w = `{${t}}`;
        x === "header" ? q((p) => p + w) : Y((p) => p + w);
      };
    if (!n) return e.jsx(_e, { onFile: o });
    const de = e.jsx("div", {
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
                    c > 0 ? ` · ${c} page${c !== 1 ? "s" : ""}` : "",
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => o(null),
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
      xe = e.jsxs("div", {
        className: "space-y-3",
        children: [
          e.jsx(we, {
            section: "header",
            enabled: f,
            onToggle: () => se((t) => !t),
            left: M,
            onLeft: ne,
            center: O,
            onCenter: q,
            right: I,
            onRight: Q,
            onInsert: (t) => ce(t, "header"),
          }),
          e.jsx(we, {
            section: "footer",
            enabled: d,
            onToggle: () => k((t) => !t),
            left: h,
            onLeft: X,
            center: _,
            onCenter: Y,
            right: D,
            onRight: A,
            onInsert: (t) => ce(t, "footer"),
          }),
          e.jsxs("div", {
            className:
              "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
            children: [
              e.jsx(G, { children: "Dynamic Variables" }),
              e.jsx("div", {
                className: "grid grid-cols-2 gap-1.5",
                children: [
                  ["{page}", "Current page #"],
                  ["{pages}", "Total pages"],
                  ["{date}", "Today's date"],
                  ["{time}", "Current time"],
                  ["{filename}", "File name"],
                ].map(([t, x]) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx("code", {
                          className:
                            "bg-zinc-50 border border-zinc-200 px-1.5 py-0.5 rounded text-xs font-mono text-zinc-700 flex-shrink-0",
                          children: t,
                        }),
                        e.jsx("span", {
                          className: "text-xs text-zinc-400 truncate",
                          children: x,
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      he = e.jsxs("div", {
        className: "space-y-3",
        children: [
          e.jsxs("div", {
            className:
              "bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-4",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx(G, { children: "Text Colour" }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      be.map((t) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => ae(t.hex),
                            title: t.label,
                            className: `w-8 h-8 rounded-full border-2 transition-all ${B === t.hex ? "border-zinc-900 scale-110 shadow-md" : "border-zinc-200 hover:border-zinc-400"}`,
                            style: { background: t.hex },
                          },
                          t.hex,
                        ),
                      ),
                      e.jsx("label", {
                        className: `w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer overflow-hidden ${be.some((t) => t.hex === B) ? "border-zinc-200 hover:border-zinc-400" : "border-zinc-900 scale-110 shadow-md"}`,
                        style: {
                          background:
                            "conic-gradient(red, yellow, lime, cyan, blue, magenta, red)",
                        },
                        children: e.jsx("input", {
                          type: "color",
                          className: "opacity-0 w-0 h-0 absolute",
                          value: B,
                          onChange: (t) => ae(t.target.value),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx(G, { children: "Font Weight" }),
                  e.jsx("div", {
                    className: "flex gap-2",
                    children: [
                      { id: !1, label: "Regular" },
                      { id: !0, label: "Bold" },
                    ].map((t) =>
                      e.jsx(
                        "button",
                        {
                          onClick: () => ze(t.id),
                          className: `flex-1 py-2 rounded-lg border text-sm transition-all ${t.id ? "font-bold" : "font-normal"} ${Z === t.id ? "bg-zinc-900 border-zinc-900 text-white" : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"}`,
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
                  e.jsxs(G, { children: ["Font size — ", S, "pt"] }),
                  e.jsx("input", {
                    type: "range",
                    min: "6",
                    max: "32",
                    step: "1",
                    value: S,
                    onChange: (t) => ve(Number(t.target.value)),
                    className: "w-full accent-zinc-900",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-zinc-400 mt-1",
                    children: [
                      e.jsx("span", { children: "6pt" }),
                      e.jsx("span", { children: "18pt" }),
                      e.jsx("span", { children: "32pt" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs(G, { children: ["Margin — ", N, "px"] }),
                  e.jsx("input", {
                    type: "range",
                    min: "10",
                    max: "80",
                    step: "2",
                    value: N,
                    onChange: (t) => ke(Number(t.target.value)),
                    className: "w-full accent-zinc-900",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-zinc-400 mt-1",
                    children: [
                      e.jsx("span", { children: "10px" }),
                      e.jsx("span", { children: "45px" }),
                      e.jsx("span", { children: "80px" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-3",
            children: [
              e.jsx(G, { children: "Page Range" }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-zinc-500 mb-1",
                        children: "From page",
                      }),
                      e.jsx("input", {
                        type: "number",
                        value: oe,
                        min: 1,
                        max: c || 9999,
                        onChange: (t) => Ne(parseInt(t.target.value) || 1),
                        className:
                          "w-full border border-zinc-200 rounded-lg px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 bg-white",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-zinc-500 mb-1",
                        children: "To page",
                      }),
                      e.jsx("input", {
                        type: "number",
                        value: ie,
                        min: 1,
                        max: c || 9999,
                        onChange: (t) => le(parseInt(t.target.value) || 1),
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
                    onClick: () => ye((t) => !t),
                    className: `w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${re ? "bg-zinc-900 border-zinc-900" : "bg-white border-zinc-300 group-hover:border-zinc-500"}`,
                    children:
                      re &&
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
        ],
      }),
      me = e.jsx("div", {
        className: "flex gap-1 rounded-xl p-1 bg-zinc-100",
        children: [
          { id: "content", label: "Content" },
          { id: "style", label: "Style" },
        ].map((t) =>
          e.jsx(
            "button",
            {
              onClick: () => K(t.id),
              className: `flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${R === t.id ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"}`,
              children: t.label,
            },
            t.id,
          ),
        ),
      }),
      ue = e.jsx("button", {
        onClick: Ce,
        disabled: g || (!f && !d),
        type: "button",
        className:
          "w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold text-sm hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 active:scale-[0.98]",
        children: g
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
                "Apply Headers & Footers",
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
      Fe = e.jsxs("div", {
        className: "bg-white border border-zinc-200 rounded-xl shadow-sm p-4",
        children: [
          ue,
          !f &&
            !d &&
            e.jsx("p", {
              className: "text-center text-xs text-amber-600 mt-2",
              children: "Enable at least one of Header or Footer above.",
            }),
          (f || d) &&
            e.jsx("p", {
              className: "text-center text-xs text-zinc-400 mt-2",
              children: "100% local · Files never uploaded",
            }),
        ],
      }),
      fe = e.jsxs("div", {
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
              c > 0 &&
                e.jsx("span", {
                  className: "text-xs text-zinc-500",
                  children:
                    c > 5
                      ? `Showing 5 of ${c} pages · Applied to all`
                      : `${c} page${c !== 1 ? "s" : ""}`,
                }),
            ],
          }),
          T
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
            : l.length > 0
              ? e.jsx("div", {
                  className: "space-y-4",
                  children: l.map((t, x) =>
                    e.jsx(
                      Ie,
                      {
                        offCanvas: t.offCanvas,
                        width: t.width,
                        height: t.height,
                        scale: t.scale,
                        pageNum: t.pageIndex + 1,
                        totalPages: c,
                        fileName: n.name,
                        config: Se,
                      },
                      x,
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
      Le = e.jsxs("div", {
        className: "flex items-center gap-2 flex-wrap",
        children: [
          f &&
            e.jsx("span", {
              className:
                "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
              children: "Header on",
            }),
          d &&
            e.jsx("span", {
              className:
                "inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
              children: "Footer on",
            }),
          e.jsxs("span", {
            className:
              "inline-flex items-center gap-1.5 px-2 py-0.5 bg-zinc-100 rounded-full text-xs font-medium text-zinc-600",
            children: [
              e.jsx("span", {
                className:
                  "w-2.5 h-2.5 rounded-full border border-zinc-300 flex-shrink-0",
                style: { background: B },
              }),
              S,
              "pt",
            ],
          }),
        ],
      }),
      Pe = e.jsx("div", {
        className:
          "lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-zinc-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]",
        children: e.jsxs("div", {
          className: "max-w-lg mx-auto",
          children: [
            e.jsxs("button", {
              onClick: () => J((t) => !t),
              className:
                "w-full flex items-center justify-between px-4 py-3 border-b border-zinc-100 transition-colors hover:bg-zinc-50 active:bg-zinc-100",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col gap-1.5 min-w-0 flex-1 mr-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-sm font-semibold text-zinc-900 leading-none",
                      children: "Header & Footer Settings",
                    }),
                    !m && e.jsx("div", { className: "mt-0.5", children: Le }),
                  ],
                }),
                e.jsx("div", {
                  className: `w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${m ? "bg-zinc-900" : "bg-zinc-100"}`,
                  children: e.jsx("svg", {
                    className: `w-4 h-4 transition-transform duration-200 ${m ? "rotate-180 text-white" : "text-zinc-500"}`,
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
              style: { maxHeight: m ? "55vh" : "0px" },
              children: e.jsxs("div", {
                className: "p-3 space-y-3",
                children: [
                  e.jsx("div", { className: "px-1", children: me }),
                  R === "content" ? xe : he,
                ],
              }),
            }),
            e.jsxs("div", {
              className: "px-3 py-3",
              children: [
                ue,
                !f &&
                  !d &&
                  e.jsx("p", {
                    className: "text-center text-xs text-amber-600 mt-1.5",
                    children: "Enable at least one of Header or Footer above.",
                  }),
                (f || d) &&
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
                  children: fe,
                }),
                e.jsxs("div", {
                  className:
                    "w-full sm:max-w-lg sm:mx-auto lg:mx-0 lg:w-80 xl:w-96 flex-shrink-0 order-1 lg:order-2 lg:sticky lg:top-4 space-y-3",
                  children: [de, Fe, me, R === "content" ? xe : he],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "lg:hidden flex flex-col gap-3 pb-44",
              children: [de, fe],
            }),
          ],
        }),
        Pe,
      ],
    });
  };
export { Ue as default };
