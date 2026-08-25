import { r as w, j as e } from "./react-vendor-Bc7KCos-.js";
const F = (r) =>
    new Promise((o, a) => {
      const l = new FileReader();
      ((l.onload = () => o(l.result)), (l.onerror = a), l.readAsArrayBuffer(r));
    }),
  B = (r, o, a) => {
    try {
      if (typeof window.download == "function")
        return (window.download(r, o, a), !0);
    } catch {}
    try {
      const l = new Blob([r], { type: a });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(l, o), !0);
      const c = URL.createObjectURL(l),
        i = document.createElement("a");
      return (
        (i.href = c),
        (i.download = o),
        i.setAttribute("download", o),
        (i.style.display = "none"),
        (i.style.position = "absolute"),
        (i.style.left = "-9999px"),
        document.body.appendChild(i),
        i.click(),
        setTimeout(() => {
          (document.body.removeChild(i), URL.revokeObjectURL(c));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const c = new Blob([r], { type: a }),
          i = URL.createObjectURL(c);
        return (
          window.open(i, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${o}`),
          setTimeout(() => URL.revokeObjectURL(i), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${o}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  re = () => {
    if (typeof window > "u") return !1;
    const r = window.navigator.userAgent,
      o = !!r.match(/iPad/i) || !!r.match(/iPhone/i),
      a = !!r.match(/WebKit/i);
    return o && a && !r.match(/CriOS/i);
  },
  P = "ihatepdf-store",
  ne = "ihatepdf_DB",
  ae = () =>
    new Promise((r, o) => {
      const a = indexedDB.open(ne, 1);
      ((a.onupgradeneeded = (l) => {
        const c = l.target.result;
        c.objectStoreNames.contains(P) || c.createObjectStore(P);
      }),
        (a.onsuccess = () => r(a.result)),
        (a.onerror = () => o(a.error)));
    }),
  oe = async (r, o) => {
    const a = await ae();
    return new Promise((l, c) => {
      const i = a.transaction(P, "readwrite");
      (i.objectStore(P).put(o, r),
        (i.oncomplete = () => l()),
        (i.onerror = () => c(i.error)));
    });
  },
  L = "ihatepdf_history",
  I = async (r) => {
    const o = JSON.parse(localStorage.getItem(L) || "[]"),
      a = {
        id: Date.now(),
        name: r.name,
        tool: r.tool,
        timestamp: Date.now(),
        size: r.size,
      };
    if (r.bytes)
      try {
        await oe(`pdf_${a.id}`, r.bytes);
      } catch (c) {
        console.error("Failed to store PDF in IndexedDB:", c);
      }
    o.unshift(a);
    const l = o.slice(0, 50);
    localStorage.setItem(L, JSON.stringify(l));
  },
  v = ({ children: r, className: o }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: o,
      children: r,
    }),
  ie = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
        e.jsx("path", {
          d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
        }),
        e.jsx("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }),
      ],
    }),
  k = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("polyline", { points: "5 9 2 12 5 15" }),
        e.jsx("polyline", { points: "9 5 12 2 15 5" }),
        e.jsx("polyline", { points: "19 9 22 12 19 15" }),
        e.jsx("polyline", { points: "9 19 12 22 15 19" }),
        e.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "2", x2: "12", y2: "22" }),
      ],
    }),
  C = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", { d: "M3 6h18" }),
        e.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
        e.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
        e.jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
        e.jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
      ],
    }),
  le = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  ce = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("circle", { cx: "6", cy: "6", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("line", { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
        e.jsx("line", { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
        e.jsx("line", { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }),
      ],
    }),
  de = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  me = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  T = (r) =>
    e.jsxs(v, {
      ...r,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  xe = () =>
    re()
      ? e.jsxs("div", {
          className:
            "p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-xs text-zinc-300 animate-in fade-in duration-300",
          children: [
            e.jsxs("p", {
              className: "font-semibold mb-1 flex items-center gap-2",
              children: [
                e.jsx("span", { className: "text-base", children: "📱" }),
                " iOS Safari Detected",
              ],
            }),
            e.jsxs("p", {
              className: "leading-relaxed",
              children: [
                "After download completes, find your file in the",
                " ",
                e.jsx("span", {
                  className: "font-semibold text-white",
                  children: "Files app → Downloads",
                }),
                " ",
                "folder",
              ],
            }),
          ],
        })
      : null,
  pe = ({ showNotification: r, showDownloadDialog: o }) => {
    const [a, l] = w.useState([]),
      [c, i] = w.useState(!1),
      [d, z] = w.useState(null),
      [D, f] = w.useState(null),
      [S, O] = w.useState(!1),
      [h, N] = w.useState([]),
      [M, A] = w.useState(!1);
    w.useEffect(() => {
      const t = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ihatepdf PDF Merger",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web Browser",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Free online PDF merger that combines multiple PDF files into one document. Works entirely in your browser with no upload required.",
        featureList: [
          "Merge unlimited PDF files",
          "100% private - no server upload",
          "Drag and drop to reorder",
          "Organize individual pages",
          "Works offline",
          "No watermarks",
          "No file size limits",
          "Free forever",
        ],
        screenshot: "https://ihatepdf.cv/og-merge-pdf.jpg",
        softwareVersion: "2.0",
        author: { "@type": "Organization", name: "ihatepdf" },
      };
      let s = document.getElementById("merge-tool-schema");
      return (
        s ||
          ((s = document.createElement("script")),
          (s.id = "merge-tool-schema"),
          (s.type = "application/ld+json"),
          document.head.appendChild(s)),
        (s.textContent = JSON.stringify(t)),
        () => {
          s && s.parentNode && s.parentNode.removeChild(s);
        }
      );
    }, []);
    const R = async (t) => {
        const s = Array.from(t.target.files).filter(
          (n) => n.type === "application/pdf",
        );
        l([...a, ...s]);
      },
      U = (t) => {
        const s = a.filter((m, g) => g !== t);
        l(s);
        const x = h
          .filter((m) => m.fileIndex !== t)
          .map((m) => ({
            ...m,
            fileIndex: m.fileIndex > t ? m.fileIndex - 1 : m.fileIndex,
          }));
        N(x);
      },
      _ = (t, s) => {
        (z(s),
          (t.dataTransfer.effectAllowed = "move"),
          t.dataTransfer.setData("text/html", t.target),
          (t.target.style.opacity = "0.4"));
      },
      $ = (t) => {
        ((t.target.style.opacity = "1"), z(null), f(null));
      },
      W = (t) => (t.preventDefault(), (t.dataTransfer.dropEffect = "move"), !1),
      V = (t, s) => {
        (t.preventDefault(), f(s));
      },
      H = (t) => {
        t.currentTarget.contains(t.relatedTarget) || f(null);
      },
      Y = (t, s) => {
        if ((t.preventDefault(), t.stopPropagation(), d === null || d === s)) {
          f(null);
          return;
        }
        const n = [...a],
          x = n[d];
        n.splice(d, 1);
        const m = d < s ? s - 1 : s;
        (n.splice(m, 0, x), l(n), z(null), f(null));
      },
      J = async () => {
        if (a.length !== 0) {
          (O(!0), r("Loading page thumbnails..."));
          try {
            const t = [];
            let s = 0;
            for (let n = 0; n < a.length; n++) {
              const x = a[n],
                m = await F(x),
                g = await window.pdfjsLib.getDocument({ data: m }).promise,
                b = g.numPages;
              for (let y = 1; y <= b; y++) {
                const p = await g.getPage(y),
                  u = p.getViewport({ scale: 0.2 }),
                  j = document.createElement("canvas"),
                  se = j.getContext("2d");
                ((j.height = u.height),
                  (j.width = u.width),
                  await p.render({ canvasContext: se, viewport: u }).promise,
                  t.push({
                    id: `page-${s++}`,
                    fileIndex: n,
                    fileName: x.name,
                    pageIndex: y - 1,
                    rotation: 0,
                    deleted: !1,
                    thumbnail: j.toDataURL(),
                  }));
              }
            }
            (N(t),
              A(!0),
              r(`Loaded ${t.length} pages from ${a.length} PDF(s)`));
          } catch (t) {
            (console.error(t), r("Failed to load thumbnails", "error"));
          } finally {
            O(!1);
          }
        }
      },
      q = (t) => {
        N(
          h.map((s) =>
            s.id === t ? { ...s, rotation: (s.rotation + 90) % 360 } : s,
          ),
        );
      },
      K = (t) => {
        N(h.map((s) => (s.id === t ? { ...s, deleted: !s.deleted } : s)));
      },
      Z = (t, s) => {
        h[s].deleted ||
          (z(s),
          (t.dataTransfer.effectAllowed = "move"),
          (t.target.style.opacity = "0.4"));
      },
      G = (t) => {
        ((t.target.style.opacity = "1"), z(null), f(null));
      },
      Q = (t) => (t.preventDefault(), (t.dataTransfer.dropEffect = "move"), !1),
      X = (t, s) => {
        (t.preventDefault(), f(s));
      },
      ee = (t) => {
        t.currentTarget.contains(t.relatedTarget) || f(null);
      },
      te = (t, s) => {
        if ((t.preventDefault(), t.stopPropagation(), d === null || d === s)) {
          f(null);
          return;
        }
        const n = [...h],
          x = n[d];
        n.splice(d, 1);
        const m = d < s ? s - 1 : s;
        (n.splice(m, 0, x), N(n), z(null), f(null));
      },
      E = async () => {
        if (!M || h.filter((t) => !t.deleted).length === 0) {
          if (a.length < 2) {
            r("Please select at least 2 PDF files.", "error");
            return;
          }
          i(!0);
          try {
            const { PDFDocument: t } = window.PDFLib,
              s = await t.create();
            for (const g of a) {
              const b = await F(g),
                y = await t.load(b);
              (await s.copyPages(y, y.getPageIndices())).forEach((u) =>
                s.addPage(u),
              );
            }
            const n = await s.save(),
              x = "merged_ihatepdf.pdf";
            B(n, x, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: x, bytes: n }),
                await I({ name: x, tool: "merge", size: n.length, bytes: n }),
                o(x, n.length, n))
              : r(
                  "Download may have been blocked. Check your downloads folder.",
                  "error",
                );
          } catch (t) {
            (console.error(t),
              r(
                "Failed to merge. One of the files might be corrupted.",
                "error",
              ));
          } finally {
            i(!1);
          }
          return;
        }
        i(!0);
        try {
          const { PDFDocument: t, degrees: s } = window.PDFLib,
            n = await t.create(),
            x = await Promise.all(
              a.map(async (p) => {
                const u = await F(p);
                return await t.load(u);
              }),
            ),
            m = h.filter((p) => !p.deleted);
          for (const p of m) {
            const u = x[p.fileIndex],
              [j] = await n.copyPages(u, [p.pageIndex]);
            (p.rotation !== 0 &&
              j.setRotation(s(j.getRotation().angle + p.rotation)),
              n.addPage(j));
          }
          const g = await n.save(),
            b = "merged_organized_ihatepdf.pdf";
          B(g, b, "application/pdf") !== !1
            ? ((window._lastDownloadedFile = { name: b, bytes: g }),
              await I({ name: b, tool: "merge", size: g.length, bytes: g }),
              o(b, g.length, g))
            : r(
                "Download may have been blocked. Check your downloads folder.",
                "error",
              );
        } catch (t) {
          (console.error(t), r("Failed to merge organized pages.", "error"));
        } finally {
          i(!1);
        }
      };
    return M
      ? e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between sticky top-0 bg-zinc-950/90 backdrop-blur z-10 p-3 md:p-4 -mx-4 md:-mx-6 -mt-6 border-b border-zinc-800",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("h3", {
                      className:
                        "font-medium text-zinc-300 text-sm md:text-base",
                      children: [
                        "Pages: ",
                        h.filter((t) => !t.deleted).length,
                        " / ",
                        h.length,
                      ],
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-zinc-600 mt-0.5 hidden md:block",
                      children: [
                        e.jsx(k, { className: "w-3 h-3 inline mr-1" }),
                        "Drag pages to reorder across PDFs",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2 md:gap-3",
                  children: [
                    e.jsx("button", {
                      onClick: () => {
                        (A(!1), N([]));
                      },
                      className:
                        "px-3 md:px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors",
                      children: "← Back",
                    }),
                    e.jsx("button", {
                      onClick: E,
                      disabled: c || h.filter((t) => !t.deleted).length === 0,
                      type: "button",
                      className:
                        "px-4 md:px-6 py-2 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-medium touch-manipulation active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2",
                      children: c
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-3.5 h-3.5 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                              }),
                              e.jsx("span", {
                                className: "hidden md:inline",
                                children: "Processing...",
                              }),
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(me, { className: "w-3.5 h-3.5" }),
                              e.jsx("span", {
                                className: "hidden md:inline",
                                children: "Merge Organized Pages",
                              }),
                              e.jsx("span", {
                                className: "md:hidden",
                                children: "Merge",
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4",
              children: h.map((t, s) =>
                e.jsxs(
                  "div",
                  {
                    draggable: !t.deleted,
                    onDragStart: (n) => Z(n, s),
                    onDragEnd: G,
                    onDragOver: Q,
                    onDragEnter: (n) => X(n, s),
                    onDragLeave: ee,
                    onDrop: (n) => te(n, s),
                    className: `relative bg-zinc-900 p-2 rounded-xl border transition-all ${t.deleted ? "border-zinc-700 opacity-40" : D === s && d !== s ? "border-zinc-400 bg-zinc-800 scale-105" : d === s ? "border-zinc-500 scale-95" : "border-zinc-800 hover:border-zinc-600"} ${t.deleted ? "cursor-not-allowed" : "cursor-move"}`,
                    children: [
                      e.jsxs("div", {
                        className:
                          "absolute top-1 right-1 z-10 bg-zinc-800/90 rounded px-1.5 py-0.5 text-[9px] text-zinc-400 font-mono truncate max-w-[70%]",
                        children: [t.fileName.slice(0, 10), "…"],
                      }),
                      e.jsxs("div", {
                        className:
                          "aspect-[3/4] w-full bg-white rounded-lg flex items-center justify-center overflow-hidden mb-2 relative",
                        children: [
                          e.jsx("img", {
                            src: t.thumbnail,
                            className:
                              "w-full h-full object-contain pointer-events-none",
                            style: { transform: `rotate(${t.rotation}deg)` },
                            alt: `${t.fileName} page ${t.pageIndex + 1}`,
                          }),
                          t.deleted &&
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-zinc-900/60 flex items-center justify-center rounded-lg",
                              children: e.jsx(C, {
                                className: "text-zinc-300 w-6 h-6",
                              }),
                            }),
                          D === s &&
                            d !== s &&
                            d !== null &&
                            e.jsx("div", {
                              className: `absolute ${d < s ? "bottom-0" : "top-0"} left-0 right-0 h-1 bg-zinc-300`,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between items-center px-0.5",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-zinc-500 font-mono",
                            children: s + 1,
                          }),
                          e.jsxs("div", {
                            className: "flex gap-0.5",
                            children: [
                              e.jsx("button", {
                                onClick: () => q(t.id),
                                className:
                                  "p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300 transition-colors",
                                title: "Rotate",
                                children: e.jsx(de, { className: "w-3 h-3" }),
                              }),
                              e.jsx("button", {
                                onClick: () => K(t.id),
                                className: `p-1 hover:bg-zinc-800 rounded transition-colors ${t.deleted ? "text-zinc-300 hover:text-white" : "text-zinc-500 hover:text-zinc-300"}`,
                                title: t.deleted ? "Restore" : "Delete",
                                children: e.jsx(C, { className: "w-3 h-3" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        })
      : e.jsxs("div", {
          className: "max-w-5xl mx-auto space-y-8",
          children: [
            e.jsxs("article", {
              className: "space-y-6",
              itemScope: !0,
              itemType: "https://schema.org/Article",
              children: [
                e.jsx("header", {
                  children: e.jsx("h1", {
                    className: "text-2xl md:text-4xl font-bold text-white mb-4",
                    itemProp: "headline",
                    children: "Merge PDF Files Online - Free PDF Combiner Tool",
                  }),
                }),
                e.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-8 md:p-10 text-center hover:bg-zinc-800/50 hover:border-zinc-700 transition-colors",
                      children: [
                        e.jsx("input", {
                          type: "file",
                          multiple: !0,
                          accept: "application/pdf",
                          onChange: R,
                          className: "hidden",
                          id: "merge-upload",
                        }),
                        e.jsxs("label", {
                          htmlFor: "merge-upload",
                          className:
                            "cursor-pointer flex flex-col items-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-4",
                              children: e.jsx(le, { className: "w-6 h-6" }),
                            }),
                            e.jsx("h3", {
                              className:
                                "text-base md:text-lg font-medium text-zinc-200",
                              children: "Upload PDFs to Merge",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-500 text-sm mt-1",
                              children: "Click to browse or drag files here",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.length > 0 &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-xs text-zinc-500 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800",
                        children: [
                          e.jsx(k, { className: "w-3 h-3 flex-shrink-0" }),
                          e.jsx("span", {
                            children: "Drag and drop files to reorder",
                          }),
                        ],
                      }),
                    a.length > 0 &&
                      e.jsx("div", {
                        className: "space-y-2",
                        children: a.map((t, s) =>
                          e.jsxs(
                            "div",
                            {
                              draggable: !0,
                              onDragStart: (n) => _(n, s),
                              onDragEnd: $,
                              onDragOver: W,
                              onDragEnter: (n) => V(n, s),
                              onDragLeave: H,
                              onDrop: (n) => Y(n, s),
                              className: `flex items-center justify-between bg-zinc-900 px-3 md:px-4 py-3 rounded-xl border transition-all cursor-move select-none ${D === s && d !== s ? "border-zinc-400 bg-zinc-800 scale-[1.02]" : d === s ? "border-zinc-500 scale-[0.98]" : "border-zinc-800 hover:border-zinc-600"}`,
                              style: { touchAction: "none" },
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-3 overflow-hidden flex-1 pointer-events-none",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "w-6 h-6 flex-shrink-0 flex items-center justify-center bg-zinc-800 rounded-lg text-zinc-400 text-xs font-mono",
                                      children: s + 1,
                                    }),
                                    e.jsx(k, {
                                      className:
                                        "w-4 h-4 text-zinc-600 flex-shrink-0",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-medium text-zinc-300 truncate",
                                      children: t.name,
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  onClick: () => U(s),
                                  className:
                                    "p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-300 ml-2 transition-colors flex-shrink-0",
                                  style: { pointerEvents: "auto" },
                                  title: "Remove file",
                                  children: e.jsx(C, { className: "w-4 h-4" }),
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    e.jsxs("div", {
                      className: "space-y-3 pt-2",
                      children: [
                        e.jsx(xe, {}),
                        e.jsxs("div", {
                          className: "flex flex-col md:flex-row gap-3",
                          children: [
                            a.length >= 2 &&
                              e.jsx("button", {
                                onClick: J,
                                disabled: S,
                                type: "button",
                                className:
                                  "flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all touch-manipulation bg-zinc-800 hover:bg-zinc-700 text-zinc-200 active:scale-95 disabled:opacity-50",
                                children: S
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-4 h-4 border-2 border-zinc-500 border-t-zinc-200 rounded-full animate-spin",
                                        }),
                                        "Loading Pages...",
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(ce, { className: "w-4 h-4" }),
                                        "Organize Pages Before Merge",
                                      ],
                                    }),
                              }),
                            e.jsx("button", {
                              onClick: E,
                              disabled: a.length < 2 || c,
                              type: "button",
                              className: `flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all touch-manipulation ${a.length < 2 || c ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-zinc-100 hover:bg-white text-zinc-900 active:scale-95"}`,
                              children: c
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                                      }),
                                      "Merging PDFs...",
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx(ie, { className: "w-4 h-4" }),
                                      "Merge PDFs Now",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-3 my-6",
                  children: [
                    {
                      title: "100% Private",
                      desc: "Your PDFs never leave your device. Everything processes in your browser.",
                    },
                    {
                      title: "No Limits",
                      desc: "Merge unlimited PDFs with no file size restrictions. Completely free.",
                    },
                    {
                      title: "Advanced Features",
                      desc: "Drag & drop ordering, page-level organization, rotation, and deletion.",
                    },
                  ].map(({ title: t, desc: s }) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                children: e.jsx(T, {
                                  className: "w-4 h-4 text-zinc-300",
                                }),
                              }),
                              e.jsx("h3", {
                                className: "font-semibold text-white text-sm",
                                children: t,
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: s,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className: "text-base text-zinc-300 leading-relaxed",
                  itemProp: "description",
                  children: [
                    "Combine multiple PDF files into one document with our free online PDF merger. Upload 2 or more PDFs, arrange them in any order using drag & drop, and merge them instantly in your browser.",
                    " ",
                    e.jsx("strong", {
                      className: "text-white",
                      children: "100% private",
                    }),
                    " — your files never leave your device. No file size limits, no watermarks, completely free forever.",
                  ],
                }),
              ],
            }),
            e.jsxs("article", {
              className: "space-y-8 mt-12",
              children: [
                e.jsxs("section", {
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl md:text-2xl font-bold text-white mb-4",
                      children: "How to Merge PDF Files",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-sm mb-4",
                      children:
                        "Combining multiple PDF documents into one file is simple with ihatepdf. Follow these easy steps:",
                    }),
                    e.jsx("div", {
                      className:
                        "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6",
                      children: e.jsx("ol", {
                        className: "space-y-4",
                        children: [
                          [
                            "Upload your PDF files",
                            "Click the upload area or drag and drop 2 or more PDF files you want to combine. There's no limit to the number of files you can merge.",
                          ],
                          [
                            "Arrange in order",
                            "Drag and drop the PDF files to rearrange them in your desired order. The first file will appear at the beginning of your merged PDF.",
                          ],
                          [
                            "Optional — Organize pages",
                            'Click "Organize Pages Before Merge" to see individual pages from all PDFs. You can rotate, delete, or reorder pages across different files.',
                          ],
                          [
                            "Merge and download",
                            'Click "Merge PDFs Now" and your combined PDF will be ready to download instantly. The process takes just seconds, even for large files.',
                          ],
                        ].map(([t, s], n) =>
                          e.jsxs(
                            "li",
                            {
                              className: "flex gap-3",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "flex-shrink-0 w-7 h-7 bg-zinc-700 text-white rounded-full flex items-center justify-center text-xs font-bold",
                                  children: n + 1,
                                }),
                                e.jsx("div", {
                                  className: "flex-1 min-w-0",
                                  children: e.jsxs("p", {
                                    className: "text-sm text-zinc-300",
                                    children: [
                                      e.jsxs("strong", {
                                        className: "text-white",
                                        children: [t, ":"],
                                      }),
                                      " ",
                                      s,
                                    ],
                                  }),
                                }),
                              ],
                            },
                            n,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl md:text-2xl font-bold text-white mb-3",
                      children: "Why Use ihatepdf PDF Merger?",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-zinc-400 mb-5 leading-relaxed",
                      children:
                        "Most online PDF mergers upload your files to remote servers, posing serious privacy and security risks. ihatepdf is different — everything happens locally in your browser using WebAssembly technology.",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        [
                          "Complete Privacy",
                          "Your sensitive documents, confidential contracts, or personal files never leave your device. We literally cannot access your files — they're processed entirely in your browser's memory.",
                        ],
                        [
                          "No Limitations",
                          'Merge unlimited PDF files with no file size restrictions. No daily limits, no "upgrade to premium" prompts. Everything is free and will remain free forever.',
                        ],
                        [
                          "Works Offline",
                          "After the first load, ihatepdf works completely offline. Perfect for airplanes, remote locations, or when you need extra privacy without internet connectivity.",
                        ],
                        [
                          "Advanced Features",
                          "Unlike basic PDF mergers, we offer page-level control: rotate pages, delete unwanted pages, and reorder pages across different PDF files before merging.",
                        ],
                      ].map(([t, s]) =>
                        e.jsxs(
                          "div",
                          {
                            className: "space-y-1.5",
                            children: [
                              e.jsxs("h3", {
                                className:
                                  "text-sm font-semibold text-white flex items-center gap-2",
                                children: [
                                  e.jsx(T, {
                                    className:
                                      "w-4 h-4 text-zinc-400 flex-shrink-0",
                                  }),
                                  t,
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 leading-relaxed pl-6",
                                children: s,
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
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl md:text-2xl font-bold text-white mb-4",
                      children: "Common Use Cases for Merging PDFs",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        [
                          "📄 Business Documents",
                          "Combine invoices, receipts, contracts, and proposals into one organized file for clients or accounting.",
                        ],
                        [
                          "🎓 Academic Papers",
                          "Merge research papers, assignments, or thesis chapters into a single document for submission.",
                        ],
                        [
                          "⚖️ Legal Documents",
                          "Combine legal contracts, court documents, or case files while maintaining complete confidentiality.",
                        ],
                        [
                          "💼 Job Applications",
                          "Merge your resume, cover letter, and certificates into one PDF for easy job application submission.",
                        ],
                        [
                          "📊 Reports",
                          "Combine multiple report sections, charts, or presentations into a comprehensive document.",
                        ],
                        [
                          "📖 eBooks",
                          "Merge book chapters or magazine pages into a single readable PDF file.",
                        ],
                      ].map(([t, s]) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-semibold text-white text-sm mb-1.5",
                                children: t,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 leading-relaxed",
                                children: s,
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
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6",
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl md:text-2xl font-bold text-white mb-4",
                      children: "💡 Pro Tips for Merging PDFs",
                    }),
                    e.jsx("div", {
                      className: "space-y-3",
                      children: [
                        [
                          "Name your files clearly",
                          "Before uploading, rename your PDFs with descriptive names so you can easily identify them during the merge process.",
                        ],
                        [
                          "Use page organization",
                          `For complex merges, use the "Organize Pages" feature to see exactly what you're combining and remove any unwanted pages.`,
                        ],
                        [
                          "Check page orientation",
                          "If some pages appear sideways, use the rotate button in page organization mode to correct them before merging.",
                        ],
                        [
                          "Compress after merging",
                          e.jsxs(e.Fragment, {
                            children: [
                              "If your merged PDF is too large, use our",
                              " ",
                              e.jsx("a", {
                                href: "/compress-pdf",
                                className:
                                  "text-zinc-300 hover:text-white underline",
                                children: "PDF Compressor",
                              }),
                              " ",
                              "tool to reduce file size without quality loss.",
                            ],
                          }),
                        ],
                        [
                          "Add page numbers",
                          e.jsxs(e.Fragment, {
                            children: [
                              "After merging, use our",
                              " ",
                              e.jsx("a", {
                                href: "/page-numbers",
                                className:
                                  "text-zinc-300 hover:text-white underline",
                                children: "Add Page Numbers",
                              }),
                              " ",
                              "tool to number your combined document.",
                            ],
                          }),
                        ],
                      ].map(([t, s]) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-zinc-500 font-bold flex-shrink-0 mt-0.5",
                                children: "→",
                              }),
                              e.jsxs("p", {
                                className: "text-sm text-zinc-400",
                                children: [
                                  e.jsxs("strong", {
                                    className: "text-white",
                                    children: [t, ":"],
                                  }),
                                  " ",
                                  s,
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
                  children: [
                    e.jsx("h2", {
                      className:
                        "text-xl md:text-2xl font-bold text-white mb-4",
                      children: "Related PDF Tools",
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                      children: [
                        {
                          href: "/split-pdf",
                          title: "Split PDF",
                          desc: "Extract specific pages or split a PDF into separate files.",
                        },
                        {
                          href: "/compress-pdf",
                          title: "Compress PDF",
                          desc: "Reduce file size of your merged PDF by up to 70%.",
                        },
                        {
                          href: "/organize-pages",
                          title: "Organize Pages",
                          desc: "Reorder, rotate, or delete pages from your merged PDF.",
                        },
                      ].map(({ href: t, title: s, desc: n }) =>
                        e.jsxs(
                          "a",
                          {
                            href: t,
                            className:
                              "bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 transition-all group block",
                            children: [
                              e.jsxs("h3", {
                                className:
                                  "font-semibold text-white text-sm mb-1.5 group-hover:text-zinc-100 transition-colors",
                                children: [s, " →"],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 leading-relaxed",
                                children: n,
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
          ],
        });
  };
export { pe as default };
