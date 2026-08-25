import { r as m, j as e } from "./react-vendor-Bc7KCos-.js";
const q = (s) =>
    new Promise((a, d) => {
      const r = new FileReader();
      ((r.onload = () => a(r.result)), (r.onerror = d), r.readAsArrayBuffer(s));
    }),
  J = (s) =>
    new Promise((a, d) => {
      const r = new FileReader();
      ((r.onload = () => a(r.result)), (r.onerror = d), r.readAsDataURL(s));
    }),
  X = (s, a, d) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, a, d), !0);
    } catch {}
    try {
      const r = new Blob([s], { type: d });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(r, a), !0);
      const u = URL.createObjectURL(r),
        l = document.createElement("a");
      return (
        (l.href = u),
        (l.download = a),
        l.setAttribute("download", a),
        (l.style.display = "none"),
        (l.style.position = "absolute"),
        (l.style.left = "-9999px"),
        document.body.appendChild(l),
        l.click(),
        setTimeout(() => {
          (document.body.removeChild(l), URL.revokeObjectURL(u));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const u = new Blob([s], { type: d }),
          l = URL.createObjectURL(u);
        return (
          window.open(l, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${a}`),
          setTimeout(() => URL.revokeObjectURL(l), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${a}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  h = ({ children: s, className: a }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: a,
      children: s,
    }),
  P = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  E = (s) =>
    e.jsxs(h, {
      ...s,
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
  D = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  K = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Q = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  Y = (s) =>
    e.jsxs(h, {
      ...s,
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
  M = (s) =>
    e.jsxs(h, {
      ...s,
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
  Z = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 2v6h-6" }),
        e.jsx("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" }),
      ],
    }),
  ee = (s) =>
    e.jsxs(h, {
      ...s,
      children: [
        e.jsx("path", { d: "M12 20h9" }),
        e.jsx("path", {
          d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
        }),
      ],
    }),
  ne = ({ showNotification: s }) => {
    const [a, d] = m.useState(""),
      [r, u] = m.useState(!1),
      [l, p] = m.useState(""),
      [C, j] = m.useState(0),
      [v, I] = m.useState(!1),
      [N, F] = m.useState(""),
      [z, k] = m.useState(!1),
      [A, y] = m.useState(0),
      w = m.useRef(null),
      O = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
    m.useEffect(() => {}, []);
    const L = () =>
        new Promise((t, n) => {
          if (window.Tesseract) return t(window.Tesseract);
          if (document.querySelector(`script[src="${O}"]`)) {
            const o = setInterval(() => {
              window.Tesseract && (clearInterval(o), t(window.Tesseract));
            }, 100);
            return;
          }
          const i = document.createElement("script");
          ((i.src = O),
            (i.onload = () => t(window.Tesseract)),
            (i.onerror = () => n(new Error("Failed to load Tesseract.js"))),
            document.head.appendChild(i));
        }),
      $ = async (t, n, i) => {
        p(`Running OCR on ${i}…`);
        const o = await t.createWorker("eng", 1, {
            logger: (g) => {
              g.status === "recognizing text" &&
                j(Math.round(g.progress * 100));
            },
          }),
          { data: c } = await o.recognize(n);
        return (await o.terminate(), c.text);
      },
      B = async (t, n = 2) => {
        const i = t.getViewport({ scale: n }),
          o = document.createElement("canvas");
        ((o.width = i.width), (o.height = i.height));
        const c = o.getContext("2d");
        return (
          await t.render({ canvasContext: c, viewport: i }).promise,
          o.toDataURL("image/png")
        );
      },
      S = async (t) => {
        if (!t) return;
        (u(!0), d(""), y(0), j(0), F(t.name));
        const n = t.type.startsWith("image/"),
          i = t.type === "application/pdf";
        try {
          if (n) {
            p("Loading OCR engine…");
            const o = await L(),
              c = await J(t);
            p("Running OCR on image…");
            const b = (await $(o, c, t.name)).trim() || "(No text detected)";
            (d(b), y(b.length), s("Text extracted via OCR!"));
          } else if (i) {
            const o = await q(t),
              c = await window.pdfjsLib.getDocument({ data: o }).promise;
            if (v) {
              p("Loading OCR engine…");
              const g = await L();
              let b = "";
              for (let x = 1; x <= c.numPages; x++) {
                (p(`Rendering page ${x} of ${c.numPages}…`),
                  j(Math.round(((x - 1) / c.numPages) * 50)));
                const U = await c.getPage(x),
                  R = await B(U);
                p(`OCR – page ${x} of ${c.numPages}…`);
                const T = await $(g, R, `page ${x}`);
                ((b += `--- Page ${x} ---
${T.trim()}

`),
                  j(Math.round((x / c.numPages) * 100)));
              }
              const f = b.trim() || "(No text detected)";
              (d(f), y(f.length), s("OCR complete!"));
            } else {
              p("Extracting text from PDF…");
              let g = "";
              for (let f = 1; f <= c.numPages; f++) {
                j(Math.round((f / c.numPages) * 100));
                const R = (
                  await (await c.getPage(f)).getTextContent()
                ).items.map((T) => T.str);
                g += `--- Page ${f} ---
${R.join(" ")}

`;
              }
              const b =
                g.trim() ||
                "(No selectable text found, try enabling OCR mode for scanned PDFs)";
              (d(b), y(b.length), s("Text extracted successfully!"));
            }
          } else s("Unsupported file type.", "error");
        } catch (o) {
          (console.error(o),
            s("Failed to extract text: " + o.message, "error"));
        } finally {
          (u(!1), p(""), j(0));
        }
      },
      W = (t) => {
        const n = t.target.files[0];
        (n && S(n), (t.target.value = ""));
      },
      H = (t) => {
        (t.preventDefault(), k(!1));
        const n = t.dataTransfer.files[0];
        n && S(n);
      },
      G = () => {
        (navigator.clipboard.writeText(a), s("Copied to clipboard!"));
      },
      V = () => {
        const t = N ? N.replace(/\.[^.]+$/, "") : "extracted_text";
        X(a, `${t}_extracted.txt`, "text/plain");
      },
      _ = () => {
        (d(""), F(""), y(0), w.current && (w.current.value = ""));
      };
    return e.jsxs("article", {
      className: "w-full max-w-3xl mx-auto pb-10",
      children: [
        e.jsxs("div", {
          className: "text-center mb-5 px-1",
          children: [
            e.jsx("h1", {
              className:
                "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight",
              children: "Extract Text from PDF & Images",
            }),
            e.jsxs("p", {
              className:
                "text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed",
              children: [
                "Works on PDFs, JPG, PNG, scanned docs and more.",
                " ",
                e.jsx("span", {
                  className: "text-white font-semibold",
                  children: "100% private",
                }),
                ", nothing leaves your device.",
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-3 shadow-xl",
          children: [
            e.jsx("input", {
              ref: w,
              type: "file",
              onChange: W,
              accept:
                "application/pdf,image/jpeg,image/png,image/webp,image/tiff,image/bmp,image/gif",
              className: "hidden",
              id: "text-upload",
            }),
            e.jsxs("div", {
              onDragOver: (t) => {
                (t.preventDefault(), k(!0));
              },
              onDragLeave: () => k(!1),
              onDrop: H,
              onClick: () => w.current?.click(),
              className: `relative cursor-pointer select-none transition-all duration-200 px-5 py-8 sm:py-12 text-center ${z ? "bg-zinc-700/20 border-b-2 border-zinc-400" : "border-b border-zinc-800 hover:bg-zinc-800/40 active:bg-zinc-800/70"}`,
              children: [
                e.jsx("div", {
                  className: `w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-colors duration-200 ${z ? "bg-zinc-700" : "bg-zinc-800"}`,
                  children: e.jsx(P, {
                    className: `w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-200 ${z ? "text-white" : "text-zinc-300"}`,
                  }),
                }),
                e.jsx("p", {
                  className:
                    "text-white font-semibold text-base sm:text-lg mb-1",
                  children: z
                    ? "Release to upload"
                    : "Tap here to select a file",
                }),
                e.jsx("p", {
                  className: "text-zinc-500 text-xs sm:text-sm mb-4",
                  children: "or drag & drop on desktop",
                }),
                e.jsx("div", {
                  className: "flex flex-wrap justify-center gap-1.5",
                  children: [
                    "PDF",
                    "JPG",
                    "PNG",
                    "WebP",
                    "TIFF",
                    "GIF",
                    "BMP",
                  ].map((t) =>
                    e.jsx(
                      "span",
                      {
                        className:
                          "px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded-md text-[10px] sm:text-xs font-mono text-zinc-400",
                        children: t,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
            e.jsx("div", {
              className: "px-4 sm:px-5 py-4 bg-zinc-900",
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("button", {
                    type: "button",
                    role: "switch",
                    "aria-checked": v,
                    onClick: () => I((t) => !t),
                    className: `relative flex-shrink-0 w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900 mt-0.5 touch-manipulation ${v ? "bg-white" : "bg-zinc-700"}`,
                    children: e.jsx("span", {
                      className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-sm transition-transform duration-200 ${v ? "translate-x-6 bg-black" : "translate-x-0 bg-zinc-300"}`,
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                          e.jsx("span", {
                            className: "text-sm font-semibold text-zinc-100",
                            children: "OCR Mode",
                          }),
                          e.jsx("span", {
                            className: `text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide ${v ? "bg-white/10 text-white border border-white/20" : "bg-zinc-800 text-zinc-500 border border-zinc-700"}`,
                            children: v ? "ON" : "OFF",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-500 mt-1 leading-relaxed",
                        children:
                          "Enables OCR for scanned PDFs. Images always use OCR automatically.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        r &&
          e.jsx("div", {
            className:
              "bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-3 shadow-lg",
            children: e.jsxs("div", {
              className: "flex flex-col items-center gap-4",
              children: [
                e.jsx("div", {
                  className:
                    "w-12 h-12 border-[3px] border-zinc-700 border-t-zinc-300 rounded-full animate-spin",
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("p", {
                      className: "text-zinc-200 text-sm font-semibold mb-0.5",
                      children: l || "Processing…",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-500 text-xs",
                      children: "Please keep this tab open",
                    }),
                  ],
                }),
                C > 0 &&
                  e.jsxs("div", {
                    className: "w-full max-w-xs",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between text-xs text-zinc-500 mb-2",
                        children: [
                          e.jsx("span", { children: "Progress" }),
                          e.jsxs("span", {
                            className: "font-mono tabular-nums",
                            children: [C, "%"],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "h-2.5 bg-zinc-800 rounded-full overflow-hidden",
                        children: e.jsx("div", {
                          className:
                            "h-full bg-zinc-300 rounded-full transition-all duration-300",
                          style: { width: `${C}%` },
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        !r &&
          !a &&
          e.jsxs("div", {
            onClick: () => w.current?.click(),
            className:
              "cursor-pointer border border-dashed border-zinc-800 rounded-2xl p-8 sm:p-12 mb-3 flex flex-col items-center text-center gap-2 hover:border-zinc-600 hover:bg-zinc-900/40 active:bg-zinc-900/60 transition-all",
            children: [
              e.jsx(E, { className: "w-12 h-12 text-zinc-700" }),
              e.jsx("p", {
                className: "text-zinc-500 font-medium text-sm",
                children: "Extracted text will appear here",
              }),
              e.jsx("p", {
                className: "text-zinc-700 text-xs",
                children: "Tap to pick a file and get started",
              }),
            ],
          }),
        !r &&
          a &&
          e.jsxs("div", {
            className:
              "bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-3 shadow-xl",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between gap-2 px-4 py-3 border-b border-zinc-800",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-7 h-7 bg-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: e.jsx(D, { className: "w-4 h-4 text-white" }),
                      }),
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-sm font-semibold text-white leading-tight",
                            children: "Extracted Text",
                          }),
                          N &&
                            e.jsx("p", {
                              className:
                                "text-[11px] text-zinc-500 truncate max-w-[160px] sm:max-w-xs leading-tight",
                              children: N,
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 flex-shrink-0",
                    children: [
                      e.jsxs("span", {
                        className: "text-[11px] text-zinc-500 tabular-nums",
                        children: [A.toLocaleString(), " chars"],
                      }),
                      e.jsx("button", {
                        onClick: _,
                        className:
                          "p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 active:bg-zinc-700 transition-colors",
                        title: "Clear",
                        children: e.jsx(K, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("textarea", {
                readOnly: !0,
                value: a,
                className:
                  "w-full bg-zinc-950 px-4 py-3 text-zinc-300 font-mono text-xs sm:text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500",
                style: { minHeight: "200px", maxHeight: "50vh" },
              }),
              e.jsxs("div", {
                className:
                  "grid grid-cols-2 gap-2 p-3 border-t border-zinc-800 sm:flex sm:flex-row sm:gap-2",
                children: [
                  e.jsxs("button", {
                    onClick: G,
                    className:
                      "flex items-center justify-center gap-2 py-3 sm:py-2 sm:px-5 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black rounded-xl sm:rounded-lg font-semibold text-sm transition-colors shadow-lg touch-manipulation",
                    children: [
                      e.jsx(D, { className: "w-4 h-4" }),
                      e.jsx("span", { children: "Copy Text" }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: V,
                    className:
                      "flex items-center justify-center gap-2 py-3 sm:py-2 sm:px-5 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 text-white rounded-xl sm:rounded-lg font-semibold text-sm transition-colors shadow-lg touch-manipulation",
                    children: [
                      e.jsx(Q, { className: "w-4 h-4" }),
                      e.jsx("span", { children: "Download .txt" }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => w.current?.click(),
                    className:
                      "col-span-2 sm:col-span-1 sm:ml-auto flex items-center justify-center gap-2 py-3 sm:py-2 sm:px-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 text-zinc-300 rounded-xl sm:rounded-lg font-medium text-sm border border-zinc-700 transition-colors touch-manipulation",
                    children: [
                      e.jsx(P, { className: "w-4 h-4" }),
                      e.jsx("span", { children: "New File" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 mb-3",
          children: [
            e.jsx("h2", {
              className: "text-base sm:text-lg font-bold text-white mb-4",
              children: "How it works",
            }),
            e.jsx("div", {
              className: "space-y-4",
              children: [
                {
                  n: "1",
                  title: "Upload your file",
                  body: "Tap the upload area and pick any PDF or image. Drag-and-drop also works on desktop.",
                },
                {
                  n: "2",
                  title: "Choose OCR if needed",
                  body: "Toggle OCR Mode for scanned PDFs. Images always use OCR automatically. Regular digital PDFs are faster without it.",
                },
                {
                  n: "3",
                  title: "Copy or download",
                  body: "Hit Copy Text or Download .txt to grab your extracted content for use anywhere.",
                },
              ].map(({ n: t, title: n, body: i }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex gap-3 sm:gap-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black text-sm",
                        children: t,
                      }),
                      e.jsxs("div", {
                        className: "pt-0.5",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-sm font-semibold text-white mb-0.5",
                            children: n,
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs sm:text-sm text-zinc-400 leading-relaxed",
                            children: i,
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        e.jsx("div", {
          className: "grid grid-cols-2 gap-2 sm:gap-3 mb-3",
          children: [
            {
              icon: Y,
              title: "100% Private",
              desc: "Files never leave your device.",
            },
            {
              icon: M,
              title: "OCR Support",
              desc: "Reads scanned docs & images.",
            },
            {
              icon: D,
              title: "Totally Free",
              desc: "No sign-up, no limits ever.",
            },
            {
              icon: Z,
              title: "Works Offline",
              desc: "No internet needed after load.",
            },
          ].map(({ icon: t, title: n, desc: i }) =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 hover:border-zinc-700 transition-colors",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 sm:w-9 sm:h-9 bg-zinc-800 rounded-lg flex items-center justify-center mb-2",
                    children: e.jsx(t, { className: "w-4 h-4 text-zinc-300" }),
                  }),
                  e.jsx("p", {
                    className:
                      "text-xs sm:text-sm font-semibold text-white mb-0.5",
                    children: n,
                  }),
                  e.jsx("p", {
                    className:
                      "text-[11px] sm:text-xs text-zinc-500 leading-relaxed",
                    children: i,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 mb-3",
          children: [
            e.jsx("h2", {
              className: "text-base sm:text-lg font-bold text-white mb-3",
              children: "Common use cases",
            }),
            e.jsx("div", {
              className: "space-y-2 sm:space-y-3",
              children: [
                {
                  icon: E,
                  title: "Scanned documents",
                  desc: "Digitise receipts, contracts, invoices and handwritten notes",
                },
                {
                  icon: ee,
                  title: "Content reuse",
                  desc: "Extract quotes and data from research papers or reports",
                },
                {
                  icon: M,
                  title: "Screenshot to text",
                  desc: "Copy text from screenshots, whiteboards or sign photos",
                },
              ].map(({ icon: t, title: n, desc: i }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-start gap-3 bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-3 sm:p-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: e.jsx(t, {
                          className: "w-4 h-4 text-zinc-300",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-sm font-semibold text-white mb-0.5",
                            children: n,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: i,
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
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-700 rounded-2xl p-5 sm:p-6 text-center",
          children: [
            e.jsx("h2", {
              className: "text-base sm:text-lg font-bold text-white mb-1.5",
              children: "Ready to extract text?",
            }),
            e.jsx("p", {
              className: "text-zinc-400 text-xs sm:text-sm mb-4",
              children: "Free, fast & private, no sign-up required.",
            }),
            e.jsxs("button", {
              onClick: () => w.current?.click(),
              className:
                "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black rounded-xl font-semibold text-sm transition-colors shadow-lg touch-manipulation",
              children: [
                e.jsx(P, { className: "w-4 h-4" }),
                "Select PDF or Image",
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ne as default };
