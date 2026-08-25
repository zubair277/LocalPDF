import { r as d, j as e } from "./react-vendor-Bc7KCos-.js";
const x = ({ children: t, className: r = "w-5 h-5", ...i }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: r,
      ...i,
      children: t,
    }),
  R = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  B = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        }),
        e.jsx("path", { d: "M3 3v5h5" }),
      ],
    }),
  U = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", { d: "M12 3v18" }),
        e.jsx("path", { d: "M8 7 4 3 4 7" }),
        e.jsx("path", { d: "M16 7l4-4v4" }),
        e.jsx("path", { d: "M8 17l-4 4v-4" }),
        e.jsx("path", { d: "M16 17l4 4v-4" }),
      ],
    }),
  Q = (t) =>
    e.jsx(x, {
      ...t,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  K = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  q = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  de = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "16" }),
        e.jsx("line", { x1: "8", y1: "12", x2: "16", y2: "12" }),
      ],
    }),
  xe = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
        e.jsx("path", {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        }),
        e.jsx("path", { d: "M3 21v-5h5" }),
      ],
    }),
  me = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
        e.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }),
        e.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" }),
      ],
    }),
  X = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5Z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "8", y1: "13", x2: "16", y2: "13" }),
        e.jsx("line", { x1: "8", y1: "17", x2: "16", y2: "17" }),
        e.jsx("line", { x1: "8", y1: "9", x2: "10", y2: "9" }),
      ],
    }),
  pe = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      ],
    }),
  he = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        e.jsx("polyline", { points: "2 17 12 22 22 17" }),
        e.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  Z = (t) =>
    new Promise((r, i) => {
      if (document.querySelector(`script[src="${t}"]`)) return r();
      const c = document.createElement("script");
      ((c.src = t),
        (c.onload = r),
        (c.onerror = i),
        document.head.appendChild(c));
    }),
  J = async () => {
    (await Promise.all([
      Z("https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"),
      Z("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"),
    ]),
      window.pdfjsLib &&
        !window.pdfjsLib.GlobalWorkerOptions.workerSrc &&
        (window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"));
  },
  ue = (t) =>
    t < 1024
      ? `${t} B`
      : t < 1048576
        ? `${(t / 1024).toFixed(1)} KB`
        : `${(t / 1048576).toFixed(2)} MB`,
  j = (t) => ((t % 360) + 360) % 360,
  be = { 0: "0°", 90: "90°", 180: "180°", 270: "270°" },
  ge = async (t, r, i = 0.4) => {
    const c = await t.getPage(r),
      l = c.getViewport({ scale: i }),
      o = document.createElement("canvas");
    ((o.width = l.width), (o.height = l.height));
    const b = o.getContext("2d");
    return (
      await c.render({ canvasContext: b, viewport: l }).promise,
      { dataUrl: o.toDataURL("image/jpeg", 0.7), origRotation: c.rotate }
    );
  };
function je({
  page: t,
  index: r,
  isSelected: i,
  onToggle: c,
  onRotateCW: l,
  onRotateCCW: o,
  onFlip: b,
}) {
  const g = j(t.userRotation),
    f = t.userRotation !== 0;
  return e.jsxs("div", {
    className: `relative flex flex-col rounded-xl border overflow-hidden transition-all duration-200 ${i ? "border-zinc-400 bg-zinc-800/80 shadow-lg shadow-black/30" : "border-zinc-800 bg-zinc-900/60 hover:border-zinc-700"}`,
    children: [
      e.jsx("button", {
        onClick: c,
        "aria-label": `${i ? "Deselect" : "Select"} page ${r + 1}`,
        className:
          "absolute top-2 left-2 z-10 w-6 h-6 rounded-md border transition-all duration-150 flex items-center justify-center flex-shrink-0",
        style: {
          background: i ? "#e4e4e7" : "rgba(0,0,0,0.6)",
          borderColor: i ? "#e4e4e7" : "#52525b",
        },
        children: i && e.jsx(Q, { className: "w-3.5 h-3.5 text-zinc-950" }),
      }),
      f &&
        e.jsx("div", {
          className:
            "absolute top-2 right-2 z-10 px-1.5 py-0.5 rounded bg-zinc-700 border border-zinc-600 text-[10px] font-bold text-zinc-200 leading-none",
          children: be[g],
        }),
      e.jsx("div", {
        className:
          "relative flex items-center justify-center bg-zinc-950 overflow-hidden",
        style: { aspectRatio: "3/4", minHeight: "100px" },
        children: t.dataUrl
          ? e.jsx("img", {
              src: t.dataUrl,
              alt: `Page ${r + 1}`,
              draggable: !1,
              style: {
                transform: `rotate(${t.userRotation}deg)`,
                transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                ...(j(t.userRotation) === 90 || j(t.userRotation) === 270
                  ? { width: "75%", height: "auto" }
                  : {}),
              },
            })
          : e.jsx("div", {
              className: "flex flex-col items-center gap-2 p-4",
              children: e.jsx("div", {
                className:
                  "w-5 h-5 rounded-full border-2 border-zinc-700 border-t-zinc-400 animate-spin",
              }),
            }),
      }),
      e.jsxs("div", {
        className:
          "px-2 py-1.5 border-t border-zinc-800 flex items-center justify-between gap-1",
        children: [
          e.jsxs("span", {
            className: "text-[11px] text-zinc-500 font-medium truncate",
            children: ["p.", r + 1],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-0.5",
            children: [
              e.jsx("button", {
                onClick: o,
                title: "Rotate left 90°",
                className:
                  "w-7 h-7 flex items-center justify-center rounded-md transition-colors active:bg-zinc-700 hover:bg-zinc-700 text-zinc-500 hover:text-zinc-200 active:text-zinc-200",
                children: e.jsx(B, { className: "w-3.5 h-3.5" }),
              }),
              e.jsx("button", {
                onClick: b,
                title: "Flip 180°",
                className:
                  "w-7 h-7 flex items-center justify-center rounded-md transition-colors active:bg-zinc-700 hover:bg-zinc-700 text-zinc-500 hover:text-zinc-200 active:text-zinc-200",
                children: e.jsx(U, { className: "w-3.5 h-3.5" }),
              }),
              e.jsx("button", {
                onClick: l,
                title: "Rotate right 90°",
                className:
                  "w-7 h-7 flex items-center justify-center rounded-md transition-colors active:bg-zinc-700 hover:bg-zinc-700 text-zinc-500 hover:text-zinc-200 active:text-zinc-200",
                children: e.jsx(R, { className: "w-3.5 h-3.5" }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function u({ icon: t, label: r, onClick: i, disabled: c, mobileLabel: l }) {
  return e.jsxs("button", {
    onClick: i,
    disabled: c,
    title: r,
    className: `flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-150 min-h-[36px] ${c ? "border-zinc-800 bg-zinc-900/40 text-zinc-700 cursor-not-allowed" : "border-zinc-700 bg-zinc-800/60 text-zinc-300 hover:bg-zinc-700 hover:text-white active:bg-zinc-600 active:text-white"}`,
    children: [
      e.jsx(t, { className: "w-3.5 h-3.5 flex-shrink-0" }),
      e.jsx("span", {
        className: "hidden sm:inline whitespace-nowrap",
        children: r,
      }),
      l &&
        e.jsx("span", {
          className: "sm:hidden whitespace-nowrap",
          children: l,
        }),
    ],
  });
}
function O({ label: t, value: r }) {
  return e.jsxs("div", {
    className:
      "flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl border border-zinc-800 bg-zinc-900/40 min-w-[56px]",
    children: [
      e.jsx("span", {
        className: "text-sm sm:text-base font-bold tabular-nums text-zinc-200",
        children: r,
      }),
      e.jsx("span", {
        className:
          "text-[9px] sm:text-[10px] text-zinc-600 uppercase tracking-wider",
        children: t,
      }),
    ],
  });
}
function we({ showNotification: t, showDownloadDialog: r }) {
  const [i, c] = d.useState(null),
    [l, o] = d.useState([]),
    [b, g] = d.useState(new Set()),
    [f, W] = d.useState(!1),
    [E, H] = d.useState(0),
    [w, v] = d.useState("idle"),
    [_, y] = d.useState(0),
    [C, S] = d.useState(!1),
    V = d.useRef(null),
    D = d.useRef(null),
    p = d.useMemo(() => l.filter((s) => s.userRotation !== 0).length, [l]),
    z = b.size,
    F = l.length > 0 && z === l.length,
    A = d.useCallback(
      async (s) => {
        if (
          !s ||
          (s.type !== "application/pdf" &&
            !s.name.toLowerCase().endsWith(".pdf"))
        ) {
          t("Please upload a PDF file", "error");
          return;
        }
        (c(s), o([]), g(new Set()), v("idle"), W(!0), H(0));
        try {
          await J();
          const n = await s.arrayBuffer(),
            a = await window.pdfjsLib.getDocument({ data: n }).promise,
            m = a.numPages,
            N = [];
          for (let h = 1; h <= m; h++) {
            const { dataUrl: L, origRotation: P } = await ge(a, h, 0.45);
            (N.push({ dataUrl: L, origRotation: P, userRotation: 0 }),
              H(Math.round((h / m) * 100)));
          }
          o(N);
        } catch (n) {
          (console.error(n),
            t("Failed to load PDF: " + n.message, "error"),
            c(null));
        } finally {
          W(!1);
        }
      },
      [t],
    ),
    Y = d.useCallback(
      (s) => {
        (s.preventDefault(), S(!1));
        const n = s.dataTransfer.files[0];
        n && A(n);
      },
      [A],
    ),
    ee = (s) => {
      (s.preventDefault(), S(!0));
    },
    te = (s) => {
      V.current?.contains(s.relatedTarget) || S(!1);
    },
    se = (s) =>
      g((n) => {
        const a = new Set(n);
        return (a.has(s) ? a.delete(s) : a.add(s), a);
      }),
    ne = () => g(new Set(l.map((s, n) => n))),
    ie = () => g(new Set()),
    $ = (s, n) =>
      o((a) =>
        a.map((m, N) =>
          N === s ? { ...m, userRotation: j(m.userRotation + n) } : m,
        ),
      ),
    M = (s) => {
      if (!z) {
        t("Select pages first", "error");
        return;
      }
      o((n) =>
        n.map((a, m) =>
          b.has(m) ? { ...a, userRotation: j(a.userRotation + s) } : a,
        ),
      );
    },
    I = (s) =>
      o((n) => n.map((a) => ({ ...a, userRotation: j(a.userRotation + s) }))),
    ae = () => {
      (o((s) => s.map((n) => ({ ...n, userRotation: 0 }))),
        t("All rotations reset", "success"));
    },
    G = async () => {
      if (!(!i || !l.length)) {
        (v("applying"), y(0));
        try {
          await J();
          const s = await i.arrayBuffer(),
            n = await window.PDFLib.PDFDocument.load(s),
            a = n.getPages();
          for (let k = 0; k < a.length; k++) {
            const { origRotation: re, userRotation: ce } = l[k],
              oe = j(re + ce);
            (a[k].setRotation(window.PDFLib.degrees(oe)),
              y(Math.round(((k + 1) / a.length) * 85)));
          }
          y(90);
          const m = await n.save();
          (y(100), v("done"));
          const h = `${i.name.replace(/\.pdf$/i, "")}_rotated.pdf`,
            L = new Blob([m], { type: "application/pdf" }),
            P = URL.createObjectURL(L),
            T = Object.assign(document.createElement("a"), {
              href: P,
              download: h,
            });
          (document.body.appendChild(T),
            T.click(),
            setTimeout(() => {
              (document.body.removeChild(T), URL.revokeObjectURL(P));
            }, 1e3),
            t(`${h} downloaded!`, "success"),
            r && r(h, L.size));
        } catch (s) {
          (console.error(s),
            v("error"),
            t("Failed to apply rotations: " + s.message, "error"));
        }
      }
    },
    le = () => {
      (c(null), o([]), g(new Set()), v("idle"), y(0));
    };
  return e.jsxs("div", {
    className: "max-w-4xl mx-auto space-y-4 sm:space-y-6 pb-24 sm:pb-20",
    children: [
      e.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          e.jsx("div", {
            className:
              "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0",
            children: e.jsx(R, { className: "w-5 h-5 text-zinc-200" }),
          }),
          e.jsxs("div", {
            className: "min-w-0",
            children: [
              e.jsx("h1", {
                className:
                  "text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight",
                children: "Rotate PDF",
              }),
              e.jsx("p", {
                className: "text-xs sm:text-sm text-zinc-500 mt-0.5",
                children:
                  "Rotate individual pages or the entire document — 100 % local, zero uploads.",
              }),
            ],
          }),
        ],
      }),
      !i &&
        !f &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              ref: V,
              onDrop: Y,
              onDragOver: ee,
              onDragLeave: te,
              onClick: () => D.current?.click(),
              role: "button",
              tabIndex: 0,
              "aria-label": "Drop a PDF or tap to browse",
              onKeyDown: (s) => s.key === "Enter" && D.current?.click(),
              className: `relative rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 overflow-hidden ${C ? "border-zinc-400 bg-zinc-800/50" : "border-zinc-700 hover:border-zinc-600 active:border-zinc-500"}`,
              style: { minHeight: "220px" },
              children: [
                e.jsxs("div", {
                  className:
                    "absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center pointer-events-none",
                  children: [
                    e.jsx("div", {
                      className: `w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 ${C ? "bg-zinc-600 scale-110" : "bg-zinc-800"}`,
                      children: e.jsx(de, {
                        className: `w-7 h-7 transition-colors duration-200 ${C ? "text-white" : "text-zinc-500"}`,
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: `font-semibold text-sm transition-colors duration-200 ${C ? "text-white" : "text-zinc-400"}`,
                          children: "Tap to choose a PDF",
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs text-zinc-600 mt-0.5 hidden sm:block",
                          children: "or drag & drop · one PDF at a time",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-zinc-700",
                      children: [
                        "All page counts",
                        "Runs in browser",
                        "No data uploaded",
                      ].map((s) =>
                        e.jsxs(
                          "span",
                          {
                            className:
                              "flex items-center gap-1.5 whitespace-nowrap",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-1 h-1 rounded-full bg-zinc-700 inline-block",
                              }),
                              s,
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsx("input", {
                  ref: D,
                  type: "file",
                  accept: ".pdf,application/pdf",
                  className: "sr-only",
                  onChange: (s) => {
                    (s.target.files[0] && A(s.target.files[0]),
                      (s.target.value = ""));
                  },
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3",
              children: [
                {
                  icon: he,
                  title: "Per-page control",
                  desc: "Rotate individual pages independently — mix portrait and landscape in one document.",
                },
                {
                  icon: R,
                  title: "Any angle",
                  desc: "Rotate 90°, 180°, or 270° clockwise or counter-clockwise with a single tap.",
                },
                {
                  icon: pe,
                  title: "100% Private",
                  desc: "Everything runs in your browser using pdf-lib. Nothing ever leaves your device.",
                },
              ].map(({ icon: s, title: n, desc: a }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/40 p-3.5 sm:p-4 flex sm:flex-col items-start gap-3 sm:gap-0",
                    children: [
                      e.jsx(s, {
                        className:
                          "w-4 h-4 text-zinc-500 flex-shrink-0 sm:mb-3",
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-sm font-semibold text-zinc-300 sm:mb-1",
                            children: n,
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-600 leading-relaxed hidden sm:block",
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      f &&
        e.jsx("div", {
          className:
            "rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8",
          children: e.jsxs("div", {
            className: "flex flex-col items-center gap-4 text-center",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center",
                children: e.jsx(X, { className: "w-6 h-6 text-zinc-400" }),
              }),
              e.jsxs("div", {
                className: "w-full max-w-xs",
                children: [
                  e.jsx("p", {
                    className:
                      "text-sm font-medium text-zinc-300 mb-1 truncate px-2",
                    children: i?.name,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-zinc-500 mb-3",
                    children: "Rendering page previews…",
                  }),
                  e.jsx("div", {
                    className: "h-1.5 rounded-full bg-zinc-800 overflow-hidden",
                    children: e.jsx("div", {
                      className:
                        "h-full rounded-full bg-zinc-300 transition-all duration-200",
                      style: { width: `${E}%` },
                    }),
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-zinc-600 mt-2 tabular-nums",
                    children: [E, "%"],
                  }),
                ],
              }),
            ],
          }),
        }),
      !f &&
        l.length > 0 &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              className:
                "flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-zinc-800 bg-zinc-900/40",
              children: [
                e.jsx("div", {
                  className:
                    "w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0",
                  children: e.jsx(X, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-zinc-400",
                  }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-medium text-zinc-200 truncate",
                      children: i?.name,
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-zinc-600 mt-0.5",
                      children: [l.length, " pages · ", ue(i?.size || 0)],
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: le,
                  className:
                    "flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800/60 text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-700 active:bg-zinc-600 transition-colors",
                  children: [
                    e.jsx(K, { className: "w-3.5 h-3.5" }),
                    e.jsx("span", {
                      className: "hidden sm:inline",
                      children: "Replace",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-3 gap-2",
              children: [
                e.jsx(O, { label: "Pages", value: l.length }),
                e.jsx(O, { label: "Selected", value: z }),
                e.jsx(O, { label: "Rotated", value: p }),
              ],
            }),
            e.jsxs("div", {
              className:
                "rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-wrap items-center gap-2 p-3 border-b border-zinc-800",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[11px] font-semibold text-zinc-600 uppercase tracking-wider mr-1 hidden sm:block",
                      children: "All pages",
                    }),
                    e.jsx(u, {
                      icon: B,
                      label: "Rotate All Left",
                      mobileLabel: "All ↺",
                      onClick: () => I(-90),
                    }),
                    e.jsx(u, {
                      icon: R,
                      label: "Rotate All Right",
                      mobileLabel: "All ↻",
                      onClick: () => I(90),
                    }),
                    e.jsx(u, {
                      icon: U,
                      label: "Flip All 180°",
                      mobileLabel: "All 180°",
                      onClick: () => I(180),
                    }),
                    e.jsx("div", {
                      className: "h-5 w-px bg-zinc-800 mx-0.5 hidden sm:block",
                    }),
                    e.jsx(u, {
                      icon: xe,
                      label: "Reset All",
                      mobileLabel: "Reset",
                      onClick: ae,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2 p-3",
                  children: [
                    e.jsx("span", {
                      className:
                        "text-[11px] font-semibold text-zinc-600 uppercase tracking-wider mr-1 hidden sm:block",
                      children: "Selection",
                    }),
                    e.jsx(u, {
                      icon: me,
                      label: F ? "Deselect All" : "Select All",
                      mobileLabel: F ? "Deselect" : "Select",
                      onClick: F ? ie : ne,
                    }),
                    e.jsx(u, {
                      icon: B,
                      label: "Rotate Selected Left",
                      mobileLabel: "Sel ↺",
                      onClick: () => M(-90),
                      disabled: !z,
                    }),
                    e.jsx(u, {
                      icon: R,
                      label: "Rotate Selected Right",
                      mobileLabel: "Sel ↻",
                      onClick: () => M(90),
                      disabled: !z,
                    }),
                    e.jsx(u, {
                      icon: U,
                      label: "Flip Selected 180°",
                      mobileLabel: "Sel 180°",
                      onClick: () => M(180),
                      disabled: !z,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-[11px] text-zinc-700 mb-2 sm:hidden",
                  children:
                    "Tap a page thumbnail to select it, then use the toolbar above.",
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3",
                  children: l.map((s, n) =>
                    e.jsx(
                      je,
                      {
                        page: s,
                        index: n,
                        isSelected: b.has(n),
                        onToggle: () => se(n),
                        onRotateCW: () => $(n, 90),
                        onRotateCCW: () => $(n, -90),
                        onFlip: () => $(n, 180),
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            w === "applying" &&
              e.jsx("div", {
                className:
                  "rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:p-5",
                children: e.jsxs("div", {
                  className: "flex items-center gap-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0",
                      children: e.jsx("span", {
                        className:
                          "w-4 h-4 rounded-full border-2 border-zinc-600 border-t-zinc-300 animate-spin block",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-zinc-200",
                          children: "Applying rotations…",
                        }),
                        e.jsx("div", {
                          className:
                            "mt-2 h-1.5 rounded-full bg-zinc-800 overflow-hidden",
                          children: e.jsx("div", {
                            className:
                              "h-full rounded-full bg-zinc-300 transition-all duration-200",
                            style: { width: `${_}%` },
                          }),
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-zinc-600 mt-1 tabular-nums",
                          children: [_, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            w === "done" &&
              e.jsx("div", {
                className:
                  "rounded-2xl border border-zinc-600 bg-zinc-800/50 p-4 sm:p-5",
                children: e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3 flex-1 min-w-0",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-9 h-9 rounded-xl bg-zinc-700 flex items-center justify-center flex-shrink-0",
                          children: e.jsx(Q, {
                            className: "w-4 h-4 text-white",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("p", {
                              className: "font-semibold text-white text-sm",
                              children: "Rotations applied!",
                            }),
                            e.jsxs("p", {
                              className: "text-xs text-zinc-400 mt-0.5",
                              children: [
                                p,
                                " page",
                                p !== 1 ? "s" : "",
                                " rotated · ",
                                i?.name.replace(/\.pdf$/i, "_rotated.pdf"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("button", {
                      onClick: G,
                      className:
                        "w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 text-zinc-200 text-xs font-medium transition-colors",
                      children: [
                        e.jsx(q, { className: "w-3.5 h-3.5" }),
                        "Re-download",
                      ],
                    }),
                  ],
                }),
              }),
            w === "error" &&
              e.jsxs("div", {
                className:
                  "rounded-2xl border border-zinc-700 bg-zinc-900 p-4 flex items-start gap-3",
                children: [
                  e.jsx(K, {
                    className: "w-5 h-5 text-zinc-400 flex-shrink-0 mt-0.5",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Failed to apply rotations",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-500 mt-0.5",
                        children: "Try re-uploading the PDF and trying again.",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      !f &&
        l.length > 0 &&
        e.jsx("div", {
          className:
            "fixed sm:static bottom-0 left-0 right-0 sm:bottom-auto sm:left-auto sm:right-auto p-3 sm:p-0 bg-zinc-950/90 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border-t border-zinc-800 sm:border-0 z-30",
          children: e.jsx("button", {
            onClick: G,
            disabled: w === "applying" || p === 0,
            className: `w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 sm:gap-3 ${w === "applying" || p === 0 ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" : "bg-white text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200 active:scale-[0.99] shadow-lg shadow-black/40"}`,
            children:
              w === "applying"
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("span", {
                        className:
                          "w-4 h-4 rounded-full border-2 border-zinc-600 border-t-zinc-300 animate-spin",
                      }),
                      "Applying rotations…",
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(q, {
                        className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0",
                      }),
                      e.jsx("span", {
                        className: "truncate",
                        children:
                          p === 0
                            ? "Rotate pages to enable download"
                            : "Apply & Download PDF",
                      }),
                      p > 0 &&
                        e.jsxs("span", {
                          className:
                            "text-xs font-normal opacity-40 hidden sm:inline whitespace-nowrap",
                          children: [
                            "(",
                            p,
                            " page",
                            p !== 1 ? "s" : "",
                            " rotated)",
                          ],
                        }),
                    ],
                  }),
          }),
        }),
    ],
  });
}
export { we as default };
