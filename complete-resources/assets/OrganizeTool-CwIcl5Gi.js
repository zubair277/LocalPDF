import { r as h, j as e } from "./react-vendor-Bc7KCos-.js";
const D = "ihatepdf-store",
  q = "ihatepdf_DB",
  S = "ihatepdf_history",
  C = (a) =>
    new Promise((i, r) => {
      const l = new FileReader();
      ((l.onload = () => i(l.result)), (l.onerror = r), l.readAsArrayBuffer(a));
    }),
  H = () =>
    new Promise((a, i) => {
      const r = indexedDB.open(q, 1);
      ((r.onupgradeneeded = (l) => {
        const c = l.target.result;
        c.objectStoreNames.contains(D) || c.createObjectStore(D);
      }),
        (r.onsuccess = () => a(r.result)),
        (r.onerror = () => i(r.error)));
    }),
  J = async (a, i) => {
    const r = await H();
    return new Promise((l, c) => {
      const n = r.transaction(D, "readwrite");
      (n.objectStore(D).put(i, a),
        (n.oncomplete = () => l()),
        (n.onerror = () => c(n.error)));
    });
  },
  K = async (a) => {
    const i = JSON.parse(localStorage.getItem(S) || "[]"),
      r = {
        id: Date.now(),
        name: a.name,
        tool: a.tool,
        timestamp: Date.now(),
        size: a.size,
      };
    if (a.bytes)
      try {
        await J(`pdf_${r.id}`, a.bytes);
      } catch (l) {
        console.error("Failed to store PDF in IndexedDB:", l);
      }
    (i.unshift(r), localStorage.setItem(S, JSON.stringify(i.slice(0, 50))));
  },
  Y = (a, i, r) => {
    try {
      if (typeof window.download == "function")
        return (window.download(a, i, r), !0);
    } catch {}
    try {
      const l = new Blob([a], { type: r });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(l, i), !0);
      const c = URL.createObjectURL(l),
        n = document.createElement("a");
      return (
        (n.href = c),
        (n.download = i),
        n.setAttribute("download", i),
        (n.style.display = "none"),
        (n.style.position = "absolute"),
        (n.style.left = "-9999px"),
        document.body.appendChild(n),
        n.click(),
        setTimeout(() => {
          (document.body.removeChild(n), URL.revokeObjectURL(c));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const c = new Blob([a], { type: r }),
          n = URL.createObjectURL(c);
        return (
          window.open(n, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${i}`),
          setTimeout(() => URL.revokeObjectURL(n), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${i}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  u = ({ children: a, className: i }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: i,
      children: a,
    }),
  Q = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("circle", { cx: "6", cy: "6", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("line", { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
        e.jsx("line", { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
        e.jsx("line", { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }),
      ],
    }),
  F = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("polyline", { points: "5 9 2 12 5 15" }),
        e.jsx("polyline", { points: "9 5 12 2 15 5" }),
        e.jsx("polyline", { points: "19 9 22 12 19 15" }),
        e.jsx("polyline", { points: "9 19 12 22 15 19" }),
        e.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "2", x2: "12", y2: "22" }),
      ],
    }),
  k = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  z = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("path", { d: "M3 6h18" }),
        e.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        e.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
        e.jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
        e.jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
      ],
    }),
  O = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  X = (a) =>
    e.jsxs(u, {
      ...a,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  ee = ({ showNotification: a, showDownloadDialog: i }) => {
    const [r, l] = h.useState(null),
      [c, n] = h.useState([]),
      [N, j] = h.useState(!1),
      [g, P] = h.useState(null),
      [R, b] = h.useState(null);
    h.useEffect(() => {
      const s = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ihatepdf PDF Page Organizer",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web Browser",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Professional PDF page organizer that lets you reorder, rotate, and delete pages with visual drag & drop interface.",
        featureList: [
          "Drag and drop to reorder pages",
          "Rotate pages 90/180/270 degrees",
          "Delete unwanted pages",
          "Visual page thumbnails",
          "100% private - no server upload",
          "Batch page operations",
          "Works offline",
          "Free forever",
        ],
        screenshot: "https://ihatepdf.cv/og-organize-pages.jpg",
        softwareVersion: "2.0",
        author: { "@type": "Organization", name: "ihatepdf" },
      };
      let t = document.getElementById("organize-tool-schema");
      return (
        t ||
          ((t = document.createElement("script")),
          (t.id = "organize-tool-schema"),
          (t.type = "application/ld+json"),
          document.head.appendChild(t)),
        (t.textContent = JSON.stringify(s)),
        () => {
          t && t.parentNode && t.parentNode.removeChild(t);
        }
      );
    }, []);
    const E = async (s) => {
        j(!0);
        try {
          const t = await window.pdfjsLib.getDocument({ data: s }).promise,
            o = t.numPages,
            m = [];
          for (let d = 1; d <= o; d++) {
            const f = await t.getPage(d),
              y = f.getViewport({ scale: 0.2 }),
              w = document.createElement("canvas"),
              x = w.getContext("2d");
            ((w.height = y.height),
              (w.width = y.width),
              await f.render({ canvasContext: x, viewport: y }).promise,
              m.push({
                id: `page-${d}-${Date.now()}`,
                originalIndex: d - 1,
                rotation: 0,
                deleted: !1,
                thumb: w.toDataURL(),
              }));
          }
          n(m);
        } catch {
          a("Failed to parse PDF.", "error");
        } finally {
          j(!1);
        }
      },
      B = async (s) => {
        const t = s.target.files[0];
        if (t) {
          l(t);
          const o = await C(t);
          E(o);
        }
      },
      T = (s) => {
        const t = [...c];
        ((t[s].rotation = (t[s].rotation + 90) % 360), n(t));
      },
      L = (s) => {
        const t = [...c];
        ((t[s].deleted = !t[s].deleted), n(t));
      },
      A = (s, t) => {
        (P(t),
          (s.dataTransfer.effectAllowed = "move"),
          s.dataTransfer.setData("text/html", s.target),
          (s.target.style.opacity = "0.4"));
      },
      I = (s) => {
        ((s.target.style.opacity = "1"), P(null), b(null));
      },
      M = (s) => (s.preventDefault(), (s.dataTransfer.dropEffect = "move"), !1),
      U = (s, t) => {
        (s.preventDefault(), b(t));
      },
      _ = (s) => {
        s.currentTarget.contains(s.relatedTarget) || b(null);
      },
      $ = (s, t) => {
        if ((s.preventDefault(), s.stopPropagation(), g === null || g === t)) {
          b(null);
          return;
        }
        const o = [...c],
          m = o[g];
        o.splice(g, 1);
        const d = g < t ? t - 1 : t;
        (o.splice(d, 0, m), n(o), P(null), b(null));
      },
      V = async () => {
        if (r) {
          j(!0);
          try {
            const { PDFDocument: s, degrees: t } = window.PDFLib,
              o = await C(r),
              m = await s.load(o),
              d = await s.create(),
              f = c.filter((p) => !p.deleted),
              y = f.map((p) => p.originalIndex);
            (await d.copyPages(m, y)).forEach((p, W) => {
              (p.setRotation(t(p.getRotation().angle + f[W].rotation)),
                d.addPage(p));
            });
            const x = await d.save(),
              v = "organized_ihatepdf.pdf";
            Y(x, v, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: v, bytes: x }),
                K({ name: v, tool: "organize", size: x.length, bytes: x }),
                i(v, x.length, x))
              : a(
                  "Download may have been blocked. Check your downloads folder.",
                  "error",
                );
          } catch {
            a("Error saving PDF.", "error");
          } finally {
            j(!1);
          }
        }
      };
    return r
      ? e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between sticky top-0 bg-zinc-950/90 backdrop-blur z-10 px-4 sm:px-6 py-3 -mx-4 sm:-mx-6 -mt-6 border-b border-zinc-800",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className:
                        "font-medium text-zinc-300 text-sm sm:text-base",
                      children: [
                        "Pages: ",
                        c.filter((s) => !s.deleted).length,
                        " / ",
                        c.length,
                      ],
                    }),
                    e.jsxs("p", {
                      className:
                        "text-xs text-zinc-600 mt-0.5 flex items-center gap-1",
                      children: [
                        e.jsx(F, { className: "w-3 h-3 inline" }),
                        "Drag pages to reorder",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2 sm:gap-3",
                  children: [
                    e.jsx("button", {
                      onClick: () => l(null),
                      className:
                        "px-3 sm:px-4 py-2 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors touch-manipulation",
                      children: "Cancel",
                    }),
                    e.jsx("button", {
                      onClick: V,
                      disabled: N,
                      type: "button",
                      className:
                        "px-4 sm:px-6 py-2 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black rounded-lg text-xs sm:text-sm font-semibold touch-manipulation active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2",
                      children: N
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin",
                              }),
                              "Processing...",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(X, { className: "w-3.5 h-3.5" }),
                              "Save PDF",
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4",
              children: c.map((s, t) =>
                e.jsxs(
                  "div",
                  {
                    draggable: !s.deleted,
                    onDragStart: (o) => A(o, t),
                    onDragEnd: I,
                    onDragOver: M,
                    onDragEnter: (o) => U(o, t),
                    onDragLeave: _,
                    onDrop: (o) => $(o, t),
                    className: `relative bg-zinc-900 p-2 rounded-xl border transition-all ${s.deleted ? "border-zinc-700 opacity-40" : R === t && g !== t ? "border-white bg-white/5 scale-105" : g === t ? "border-zinc-400 scale-95" : "border-zinc-800 hover:border-zinc-500"} ${s.deleted ? "cursor-not-allowed" : "cursor-move"}`,
                    children: [
                      e.jsxs("div", {
                        className:
                          "aspect-[3/4] w-full bg-white rounded-lg flex items-center justify-center overflow-hidden mb-2 relative",
                        children: [
                          e.jsx("img", {
                            src: s.thumb,
                            className:
                              "w-full h-full object-contain pointer-events-none",
                            style: { transform: `rotate(${s.rotation}deg)` },
                            alt: `Page ${t + 1}`,
                          }),
                          s.deleted &&
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-zinc-900/60 flex items-center justify-center",
                              children: e.jsx(z, {
                                className: "text-zinc-300 w-8 h-8",
                              }),
                            }),
                          R === t &&
                            g !== t &&
                            g !== null &&
                            e.jsx("div", {
                              className: `absolute ${g < t ? "bottom-0" : "top-0"} left-0 right-0 h-1 bg-white shadow-lg`,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between items-center px-1",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-zinc-500 font-mono",
                            children: t + 1,
                          }),
                          e.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              e.jsx("button", {
                                onClick: () => T(t),
                                className:
                                  "p-1.5 hover:bg-zinc-700 rounded-lg text-zinc-500 hover:text-zinc-200 transition-colors touch-manipulation",
                                title: "Rotate",
                                children: e.jsx(k, { className: "w-3 h-3" }),
                              }),
                              e.jsx("button", {
                                onClick: () => L(t),
                                className: `p-1.5 hover:bg-zinc-700 rounded-lg transition-colors touch-manipulation ${s.deleted ? "text-zinc-300 hover:text-white" : "text-zinc-500 hover:text-zinc-200"}`,
                                title: s.deleted ? "Restore" : "Delete",
                                children: e.jsx(z, { className: "w-3 h-3" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  s.id,
                ),
              ),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-8",
          children: [
            e.jsxs("article", {
              className: "space-y-6",
              itemScope: !0,
              itemType: "https://schema.org/Article",
              children: [
                e.jsx("header", {
                  children: e.jsx("h1", {
                    className:
                      "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight",
                    itemProp: "headline",
                    children:
                      "Organize PDF Pages — Reorder, Rotate, Delete Pages Free",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "bg-zinc-900 border border-dashed border-zinc-700 rounded-xl p-8 sm:p-12 text-center hover:bg-zinc-800/40 hover:border-zinc-500 transition-all duration-200",
                  children: [
                    e.jsx("input", {
                      type: "file",
                      accept: "application/pdf",
                      onChange: B,
                      className: "hidden",
                      id: "org-upload",
                    }),
                    e.jsxs("label", {
                      htmlFor: "org-upload",
                      className:
                        "cursor-pointer flex flex-col items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center",
                          children: e.jsx(Q, {
                            className: "w-7 h-7 text-zinc-300",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-base sm:text-lg font-semibold text-zinc-200",
                              children: "Open PDF to Organize",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-500 text-sm mt-0.5",
                              children: "Rotate, Delete, or Reorder pages",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "mt-1 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors touch-manipulation",
                          children: "Choose PDF",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                  children: [
                    {
                      icon: F,
                      title: "Drag & Drop Reordering",
                      desc: "Visual interface lets you drag pages to rearrange them. See thumbnails of every page for easy organization.",
                    },
                    {
                      icon: k,
                      title: "Rotate Pages",
                      desc: "Fix page orientation with one click. Rotate pages 90, 180, or 270 degrees individually.",
                    },
                    {
                      icon: z,
                      title: "Delete Pages",
                      desc: "Remove unwanted pages, blank pages, or duplicate pages from your PDF with a single click.",
                    },
                  ].map(({ icon: s, title: t, desc: o }) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0",
                            children: e.jsx(s, {
                              className: "w-5 h-5 text-zinc-300",
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "font-semibold text-white text-sm",
                                children: t,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 mt-1 leading-relaxed",
                                children: o,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className:
                    "text-sm sm:text-base text-zinc-300 leading-relaxed",
                  itemProp: "description",
                  children: [
                    "Easily organize your PDF pages with our visual drag-and-drop interface. Reorder pages in any sequence, rotate pages to fix orientation issues, or delete unwanted pages.",
                    " ",
                    e.jsx("strong", {
                      className: "text-white",
                      children: "100% private",
                    }),
                    " — all organizing happens in your browser with no upload required.",
                  ],
                }),
              ],
            }),
            e.jsxs("article", {
              className: "space-y-8",
              children: [
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-3",
                      children: "How to Organize PDF Pages",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-sm sm:text-base mb-5",
                      children:
                        "Organizing your PDF pages is simple with our visual editor. Follow these easy steps:",
                    }),
                    e.jsx("ol", {
                      className: "space-y-4",
                      children: [
                        {
                          title: "Upload your PDF:",
                          body: "Click the upload area or drag and drop your PDF file. The tool will load and display thumbnails of all pages.",
                        },
                        {
                          title: "Reorder pages (optional):",
                          body: "Drag and drop page thumbnails to rearrange them in any order. Move pages to the beginning, end, or anywhere in between.",
                        },
                        {
                          title: "Rotate pages (optional):",
                          body: "Click the rotate button on any page thumbnail to fix orientation. Pages scanned sideways can be corrected with 90-degree rotations.",
                        },
                        {
                          title: "Delete unwanted pages (optional):",
                          body: "Click the delete button on page thumbnails to remove blank or duplicate pages. Deleted pages are marked clearly so you can review before saving.",
                        },
                        {
                          title: "Save your organized PDF:",
                          body: 'Click "Save PDF" to create a new document with your changes applied. The page counter shows exactly how many pages will be in your final PDF.',
                        },
                      ].map(({ title: s, body: t }, o) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-3 text-zinc-300 text-sm sm:text-base",
                            children: [
                              e.jsx("span", {
                                className:
                                  "flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold mt-0.5",
                                children: o + 1,
                              }),
                              e.jsxs("span", {
                                children: [
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: s,
                                  }),
                                  " ",
                                  t,
                                ],
                              }),
                            ],
                          },
                          o,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-3",
                      children: "Why Organize PDF Pages?",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-sm sm:text-base mb-5",
                      children:
                        "Well-organized PDFs are easier to read, share, and professional-looking. Page organization solves common PDF problems:",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        {
                          title: "Fix Scanning Mistakes",
                          body: "Scanned documents often have pages in the wrong order, upside-down pages, or blank pages between content. Quickly fix these issues before sharing.",
                        },
                        {
                          title: "Remove Unnecessary Pages",
                          body: "Delete cover pages, table of contents, blank pages, or any content you don't want before sharing the document.",
                        },
                        {
                          title: "Restructure Documents",
                          body: "Move executive summaries to the front, rearrange chapters, or restructure presentations to improve flow and readability.",
                        },
                        {
                          title: "Professional Presentation",
                          body: "Well-organized PDFs with correct page orientation and no extraneous pages look more professional and are easier to navigate.",
                        },
                      ].map(({ title: s, body: t }) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex gap-3",
                            children: [
                              e.jsx(O, {
                                className:
                                  "w-5 h-5 text-zinc-400 shrink-0 mt-0.5",
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "text-sm sm:text-base font-semibold text-white",
                                    children: s,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs sm:text-sm text-zinc-400 mt-1",
                                    children: t,
                                  }),
                                ],
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-3",
                      children: "Common PDF Organization Tasks",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-sm sm:text-base mb-5",
                      children:
                        "People use PDF page organization daily for these practical purposes:",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        {
                          icon: "📄",
                          title: "Scanned Documents",
                          body: "Fix pages that were scanned in wrong order, remove blank pages between content, or rotate pages that went through the scanner sideways.",
                        },
                        {
                          icon: "📊",
                          title: "Business Reports",
                          body: "Move executive summary to page 1, delete draft pages, reorder sections for better flow, or remove pages with outdated information.",
                        },
                        {
                          icon: "📑",
                          title: "Legal Documents",
                          body: "Reorder exhibits, remove duplicate pages, rotate signature pages, or delete confidential pages before public filing.",
                        },
                        {
                          icon: "📖",
                          title: "Ebooks & Manuals",
                          body: "Rearrange chapters, delete copyright pages, remove advertisements, or fix page orientation for landscape diagrams.",
                        },
                        {
                          icon: "🎓",
                          title: "Academic Papers",
                          body: "Reorder research sections, delete draft pages, rotate tables or figures, or remove reference pages before submitting excerpts.",
                        },
                        {
                          icon: "📷",
                          title: "Photo Albums",
                          body: "Rearrange photos chronologically, rotate images taken in portrait mode, or delete duplicates from image-to-PDF conversions.",
                        },
                      ].map(({ icon: s, title: t, body: o }) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                            children: [
                              e.jsxs("h3", {
                                className:
                                  "font-semibold text-white text-sm mb-1.5",
                                children: [s, " ", t],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs sm:text-sm text-zinc-400 leading-relaxed",
                                children: o,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-4",
                      children: "Powerful Organization Features",
                    }),
                    e.jsx("div", {
                      className: "space-y-3",
                      children: [
                        {
                          icon: F,
                          title: "Visual Drag & Drop Reordering",
                          body: "See thumbnail previews of every page and drag them to rearrange in any order. Drop indicators show you exactly where the page will land.",
                        },
                        {
                          icon: k,
                          title: "Page Rotation (90° Increments)",
                          body: "Rotate individual pages 90, 180, or 270 degrees. Perfect for fixing scanned documents where some pages went through sideways or upside-down.",
                        },
                        {
                          icon: z,
                          title: "Selective Page Deletion",
                          body: "Mark pages for deletion with a single click. Deleted pages are visually indicated so you can review changes before saving. Easily restore accidentally deleted pages.",
                        },
                        {
                          icon: O,
                          title: "Live Page Counter",
                          body: 'The header displays "Pages: X / Y" showing how many pages remain after deletions. Know exactly what your final PDF will contain before saving.',
                        },
                      ].map(({ icon: s, title: t, body: o }) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 flex gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0",
                                children: e.jsx(s, {
                                  className: "w-4 h-4 text-zinc-300",
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "font-semibold text-white text-sm mb-0.5",
                                    children: t,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs sm:text-sm text-zinc-400 leading-relaxed",
                                    children: o,
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
                e.jsxs("section", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-4",
                      children: "💡 Pro Tips for Organizing PDFs",
                    }),
                    e.jsx("ul", {
                      className: "space-y-3",
                      children: [
                        {
                          title: "Review before saving:",
                          body: `Scroll through all page thumbnails to double-check your changes before clicking "Save PDF." It's easier to fix mistakes now than to re-organize later.`,
                        },
                        {
                          title: "Keep the original:",
                          body: "Always save a copy of your original PDF before organizing, especially for important documents. Organization creates a new file, so your original remains unchanged.",
                        },
                        {
                          title: "Delete in batches:",
                          body: "If you need to remove many pages, mark them all for deletion first, then save once. This is faster than deleting and saving repeatedly.",
                        },
                        {
                          title: "Fix rotation first:",
                          body: "Before reordering pages, rotate any sideways or upside-down pages. It's easier to visualize the correct order when all pages are properly oriented.",
                        },
                        {
                          title: "Add page numbers after:",
                          body: "If you're restructuring a document significantly, use our Add Page Numbers tool afterward to add sequential numbering.",
                        },
                        {
                          title: "Compress after organizing:",
                          body: "If your organized PDF is still too large, use our PDF Compressor to reduce file size.",
                        },
                      ].map(({ title: s, body: t }) =>
                        e.jsxs(
                          "li",
                          {
                            className:
                              "flex gap-3 text-zinc-300 text-sm sm:text-base",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-zinc-400 font-bold shrink-0 mt-0.5",
                                children: "→",
                              }),
                              e.jsxs("span", {
                                children: [
                                  e.jsx("strong", {
                                    className: "text-white",
                                    children: s,
                                  }),
                                  " ",
                                  t,
                                ],
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-3",
                      children: "Related PDF Tools",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-sm sm:text-base mb-4",
                      children:
                        "After organizing your PDF pages, you might need these tools:",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                      children: [
                        {
                          href: "/split-pdf",
                          title: "Split PDF →",
                          desc: "Extract specific pages or split your organized PDF into multiple files.",
                        },
                        {
                          href: "/merge-pdf",
                          title: "Merge PDFs →",
                          desc: "Combine your organized PDF with other documents.",
                        },
                        {
                          href: "/page-numbers",
                          title: "Add Page Numbers →",
                          desc: "Add sequential page numbers after reorganizing your document.",
                        },
                      ].map(({ href: s, title: t, desc: o }) =>
                        e.jsxs(
                          "a",
                          {
                            href: s,
                            className:
                              "bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 rounded-xl p-4 transition-all group block",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-zinc-200 transition-colors",
                                children: t,
                              }),
                              e.jsx("p", {
                                className: "text-xs sm:text-sm text-zinc-400",
                                children: o,
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { ee as default };
