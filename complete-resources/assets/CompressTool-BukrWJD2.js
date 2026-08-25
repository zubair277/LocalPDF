import { r as h, j as e } from "./react-vendor-Bc7KCos-.js";
const he =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js",
  ue = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  ge =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  be = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
function T(r) {
  return new Promise((l, m) => {
    if (document.querySelector(`script[src="${r}"]`)) return l();
    const p = document.createElement("script");
    ((p.src = r),
      (p.onload = l),
      (p.onerror = () => m(new Error(`Failed to load ${r}`))),
      document.head.appendChild(p));
  });
}
const F = (r) =>
    r == null
      ? "—"
      : r < 1024 * 1024
        ? `${(r / 1024).toFixed(0)} KB`
        : `${(r / 1024 / 1024).toFixed(2)} MB`,
  Q = {
    light: {
      label: "Light",
      hint: "~20–30% smaller",
      detail: "300 DPI · print quality",
      preset: "/printer",
      color: 300,
      gray: 300,
      jpeg: 80,
    },
    medium: {
      label: "Medium",
      hint: "~40–50% smaller",
      detail: "150 DPI · email & sharing",
      preset: "/ebook",
      color: 150,
      gray: 150,
      jpeg: 60,
    },
    heavy: {
      label: "Heavy",
      hint: "~60–70% smaller",
      detail: "72 DPI · smallest size",
      preset: "/screen",
      color: 72,
      gray: 72,
      jpeg: 40,
    },
  },
  $ = [
    { preset: "/ebook", color: 150, gray: 150, jpeg: 60 },
    { preset: "/screen", color: 110, gray: 110, jpeg: 55 },
    { preset: "/screen", color: 90, gray: 90, jpeg: 45 },
    { preset: "/screen", color: 72, gray: 72, jpeg: 38 },
    { preset: "/screen", color: 60, gray: 60, jpeg: 30 },
    { preset: "/screen", color: 50, gray: 50, jpeg: 22 },
  ],
  fe = [1, 2, 5],
  I = "ihatepdf-store",
  ye = "ihatepdf_DB",
  X = "ihatepdf_history",
  je = () =>
    new Promise((r, l) => {
      const m = indexedDB.open(ye, 1);
      ((m.onupgradeneeded = (p) => {
        const x = p.target.result;
        x.objectStoreNames.contains(I) || x.createObjectStore(I);
      }),
        (m.onsuccess = () => r(m.result)),
        (m.onerror = () => l(m.error)));
    }),
  we = async (r, l) => {
    const m = await je();
    return new Promise((p, x) => {
      const c = m.transaction(I, "readwrite");
      (c.objectStore(I).put(l, r),
        (c.oncomplete = () => p()),
        (c.onerror = () => x(c.error)));
    });
  },
  ve = async (r) => {
    const l = JSON.parse(localStorage.getItem(X) || "[]"),
      m = {
        id: Date.now(),
        name: r.name,
        tool: r.tool,
        timestamp: Date.now(),
        size: r.size,
      };
    if (r.bytes)
      try {
        await we(`pdf_${m.id}`, r.bytes);
      } catch (p) {
        console.error("Failed to store PDF in IndexedDB:", p);
      }
    (l.unshift(m), localStorage.setItem(X, JSON.stringify(l.slice(0, 50))));
  },
  A = (r, l, m) => {
    try {
      if (typeof window.download == "function")
        return (window.download(r, l, m), !0);
    } catch {}
    try {
      const p = new Blob([r], { type: m });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(p, l), !0);
      const x = URL.createObjectURL(p),
        c = document.createElement("a");
      return (
        (c.href = x),
        (c.download = l),
        c.setAttribute("download", l),
        (c.style.display = "none"),
        (c.style.position = "absolute"),
        (c.style.left = "-9999px"),
        document.body.appendChild(c),
        c.click(),
        setTimeout(() => {
          (document.body.removeChild(c), URL.revokeObjectURL(x));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const x = new Blob([r], { type: m }),
          c = URL.createObjectURL(x);
        return (
          window.open(c, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${l}`),
          setTimeout(() => URL.revokeObjectURL(c), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${l}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  ze = () => {
    if (typeof window > "u") return !1;
    const r = window.navigator.userAgent;
    return (
      !!r.match(/iPad/i) ||
      (!!r.match(/iPhone/i) && !!r.match(/WebKit/i) && !r.match(/CriOS/i))
    );
  },
  Ne = () =>
    ze()
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
  y = ({ children: r, className: l }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: l,
      children: r,
    }),
  ee = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("polyline", { points: "4 14 10 14 10 20" }),
        e.jsx("polyline", { points: "20 10 14 10 14 4" }),
        e.jsx("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
        e.jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" }),
      ],
    }),
  Pe = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  Fe = (r) =>
    e.jsxs(y, {
      ...r,
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
  ke = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  De = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  Se = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  Ce = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        e.jsx("polyline", { points: "2 17 12 22 22 17" }),
        e.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  Re = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("path", {
          d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  Me = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("path", { d: "M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" }),
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
      ],
    }),
  Be = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  Le = (r) =>
    e.jsxs(y, {
      ...r,
      children: [
        e.jsx("polyline", { points: "1 4 1 10 7 10" }),
        e.jsx("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }),
      ],
    }),
  Ee = ({ showNotification: r, showDownloadDialog: l }) => {
    const [m, p] = h.useState([]),
      [x, c] = h.useState([]),
      [E, U] = h.useState(!1),
      [C, _] = h.useState(!1),
      [R, se] = h.useState("level"),
      [H, te] = h.useState("medium"),
      [W, re] = h.useState(2),
      [M, q] = h.useState(""),
      [f, k] = h.useState(null),
      [z, D] = h.useState([]),
      [O, S] = h.useState(null),
      [G, V] = h.useState(!1),
      j = h.useRef(null),
      v = h.useRef(null),
      N = h.useRef(!1);
    h.useEffect(
      () => () => {
        if (j.current)
          try {
            j.current.terminate();
          } catch {}
      },
      [],
    );
    const w = m.filter((s) => !x.includes(s.name)),
      ne = async () => (await T(he), window.PDFLib),
      ae = async (s) => {
        try {
          const t = await ne(),
            n = await s.arrayBuffer();
          return (await t.PDFDocument.load(n, { ignoreEncryption: !1 }), !1);
        } catch (t) {
          return /encrypt/i.test(t?.message || "");
        }
      },
      J = async (s) => {
        const t = Array.from(s).filter(
          (a) => a.type === "application/pdf" || /\.pdf$/i.test(a.name),
        );
        if (!t.length) return;
        (D([]),
          S(null),
          p((a) => {
            const i = new Set(a.map((d) => d.name + d.size)),
              o = [...a];
            return (
              t.forEach((d) => {
                i.has(d.name + d.size) || o.push(d);
              }),
              o
            );
          }));
        const n = t.reduce((a, i) => a + i.size, 0) / 1024 / 1024;
        r(
          `${t.length} PDF${t.length > 1 ? "s" : ""} loaded (${n.toFixed(2)} MB)`,
        );
        for (const a of t)
          (await ae(a)) && c((i) => (i.includes(a.name) ? i : [...i, a.name]));
      },
      Z = (s) => {
        (s.target.files?.length && J(s.target.files), (s.target.value = ""));
      },
      ie = (s, t) => {
        (p((n) => n.filter((a) => !(a.name === s && a.size === t))),
          c((n) => n.filter((a) => a !== s)),
          D([]),
          S(null));
      },
      oe = () => {
        (p([]), c([]), D([]), S(null), k(null));
      },
      Y = (s) => ({
        quality: s.preset,
        contentType: "auto",
        colorImageResolution: s.color,
        grayImageResolution: s.gray,
        monoImageResolution: 300,
        downsampling: "Bicubic",
        embedFonts: !0,
        optimizeFonts: !0,
        jpegQuality: s.jpeg,
      }),
      K = (s, t, n) =>
        new Promise((a, i) => {
          const o = new Blob([s], { type: "application/pdf" }),
            d = URL.createObjectURL(o),
            u = new Worker("/background-worker.js");
          ((j.current = u), (v.current = i));
          const g = () => {
            URL.revokeObjectURL(d);
            try {
              u.terminate();
            } catch {}
            (j.current === u && (j.current = null),
              v.current === i && (v.current = null));
          };
          ((u.onmessage = async (b) => {
            if (b.data && b.data.type === "progress") {
              n && n(b.data);
              return;
            }
            try {
              if (b.data.error) throw new Error(b.data.error);
              const P = await (await fetch(b.data.pdfDataURL)).arrayBuffer();
              a({
                bytes: new Uint8Array(P),
                size: P.byteLength,
                wasFallback: b.data.wasFallback,
              });
            } catch (B) {
              i(B);
            } finally {
              g();
            }
          }),
            (u.onerror = () => {
              (g(), i(new Error("Compression worker failed")));
            }),
            u.postMessage({
              data: { psDataURL: d, config: t },
              target: "wasm",
            }));
        }),
      le = async (s, t) => {
        if (R === "target") {
          const o = (M ? parseFloat(M) : W) * 1024 * 1024;
          let d = null;
          for (let u = 0; u < $.length && !N.current; u++) {
            k(
              (b) =>
                b && {
                  ...b,
                  attempt: u + 1,
                  attempts: $.length,
                  page: 0,
                  totalPages: 0,
                },
            );
            const g = await K(s, Y($[u]), t);
            if (((d = g), g.size <= o)) return { ...g, reachedTarget: !0 };
          }
          return { ...d, reachedTarget: !1 };
        }
        const n = Q[H],
          a = { preset: n.preset, color: n.color, gray: n.gray, jpeg: n.jpeg };
        return { ...(await K(s, Y(a), t)), reachedTarget: !0 };
      },
      ce = async () => {
        if (!w.length) return;
        (_(!0), D([]), S(null), (N.current = !1));
        const s = [];
        try {
          for (let n = 0; n < w.length && !N.current; n++) {
            const a = w[n];
            k({
              fileIndex: n,
              totalFiles: w.length,
              name: a.name,
              page: 0,
              totalPages: 0,
              attempt: 0,
            });
            try {
              const i = await le(a, (u) =>
                  k(
                    (g) =>
                      g && {
                        ...g,
                        page: u.page,
                        totalPages: u.total || g.totalPages,
                      },
                  ),
                ),
                o = i.wasFallback || i.size >= a.size,
                d = o ? a.name : `compressed_${a.name}`;
              (s.push({
                name: d,
                originalSize: a.size,
                compressedSize: i.size,
                bytes: i.bytes,
                wasFallback: o,
                reachedTarget: i.reachedTarget,
                status: "done",
              }),
                await ve({
                  name: d,
                  tool: "compress",
                  size: i.size,
                  bytes: i.bytes,
                }));
            } catch (i) {
              if (N.current) break;
              s.push({
                name: a.name,
                originalSize: a.size,
                status: "error",
                error: i.message,
              });
            }
            D([...s]);
          }
          const t = s.filter((n) => n.status === "done");
          if (!N.current && t.length) {
            if (t.length === 1) {
              const o = t[0];
              (A(o.bytes, o.name, "application/pdf"),
                (window._lastDownloadedFile = { name: o.name, bytes: o.bytes }),
                l && l(o.name, o.compressedSize, o.bytes));
            }
            const n = t.reduce((o, d) => o + d.originalSize, 0),
              a = t.reduce((o, d) => o + d.compressedSize, 0),
              i = n ? (((n - a) / n) * 100).toFixed(1) : "0";
            r(
              t.length === 1
                ? t[0].wasFallback
                  ? "Already well-compressed — original returned unchanged"
                  : `Compressed ${F(t[0].originalSize)} → ${F(t[0].compressedSize)} (${i}% smaller) ✓`
                : `Compressed ${t.length} files — ${i}% smaller overall ✓`,
            );
          }
        } finally {
          (_(!1), k(null), (j.current = null), (v.current = null));
        }
      },
      de = () => {
        if (((N.current = !0), j.current)) {
          try {
            j.current.terminate();
          } catch {}
          j.current = null;
        }
        (v.current && (v.current(new Error("cancelled")), (v.current = null)),
          r("Compression cancelled", "error"));
      },
      me = (s) => {
        (A(s.bytes, s.name, "application/pdf"),
          (window._lastDownloadedFile = { name: s.name, bytes: s.bytes }));
      },
      pe = async () => {
        try {
          await T(be);
          const s = new window.JSZip();
          z.filter((n) => n.status === "done").forEach((n) =>
            s.file(n.name, n.bytes),
          );
          const t = await s.generateAsync({ type: "uint8array" });
          (A(t, "compressed_pdfs.zip", "application/zip"),
            r("ZIP downloaded ✓"));
        } catch (s) {
          r(`ZIP failed: ${s.message}`, "error");
        }
      },
      xe = async (s) => {
        const t = w.find(
          (n) => `compressed_${n.name}` === s.name || n.name === s.name,
        );
        if (t) {
          V(!0);
          try {
            (await T(ue),
              window.pdfjsLib &&
                (window.pdfjsLib.GlobalWorkerOptions.workerSrc = ge));
            const n = async (d) => {
                const g = await (
                    await window.pdfjsLib.getDocument({ data: d }).promise
                  ).getPage(1),
                  b = g.getViewport({ scale: 1 }),
                  B = Math.min(1.4, 560 / b.width),
                  P = g.getViewport({ scale: B }),
                  L = document.createElement("canvas");
                return (
                  (L.width = P.width),
                  (L.height = P.height),
                  await g.render({
                    canvasContext: L.getContext("2d"),
                    viewport: P,
                  }).promise,
                  L.toDataURL("image/jpeg", 0.85)
                );
              },
              a = await t.arrayBuffer(),
              i = await n(new Uint8Array(a)),
              o = await n(s.bytes.slice());
            S({ originalUrl: i, compressedUrl: o });
          } catch {
            r("Couldn't render preview", "error");
          } finally {
            V(!1);
          }
        }
      };
    return e.jsxs("div", {
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
                children: "Compress PDF — Reduce File Size Up to 70% Free",
              }),
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-lg font-medium text-white mb-6 flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                      children: e.jsx(ee, {
                        className: "w-4 h-4 text-zinc-300",
                      }),
                    }),
                    "Smart PDF Compression",
                  ],
                }),
                m.length === 0
                  ? e.jsxs("div", {
                      onDragOver: (s) => {
                        (s.preventDefault(), U(!0));
                      },
                      onDragLeave: () => U(!1),
                      onDrop: (s) => {
                        (s.preventDefault(), U(!1), J(s.dataTransfer.files));
                      },
                      className: `border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-colors ${E ? "border-zinc-500 bg-zinc-800/50" : "border-zinc-800 hover:bg-zinc-800/30 hover:border-zinc-700"}`,
                      children: [
                        e.jsx("input", {
                          type: "file",
                          accept: "application/pdf",
                          multiple: !0,
                          onChange: Z,
                          className: "hidden",
                          id: "compress-upload",
                        }),
                        e.jsxs("label", {
                          htmlFor: "compress-upload",
                          className:
                            "cursor-pointer flex flex-col items-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400",
                              children: e.jsx(Pe, { className: "w-6 h-6" }),
                            }),
                            e.jsx("span", {
                              className:
                                "text-zinc-200 font-medium text-sm md:text-base",
                              children: E
                                ? "Drop your PDFs here"
                                : "Select or drop PDFs to compress",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-500 text-xs mt-2",
                              children:
                                "Batch supported • Preserves all links, forms & annotations",
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "space-y-5",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            m.map((s) => {
                              const t = x.includes(s.name),
                                n = z.find(
                                  (a) =>
                                    a.name === s.name ||
                                    a.name === `compressed_${s.name}`,
                                );
                              return e.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "bg-zinc-800 p-2 rounded-lg flex-shrink-0",
                                      children: e.jsx(Fe, {
                                        className: "w-4 h-4 text-zinc-300",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-zinc-200 font-medium truncate text-sm",
                                          children: s.name,
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-zinc-500 text-xs mt-0.5",
                                          children: [
                                            F(s.size),
                                            t &&
                                              e.jsxs("span", {
                                                className: "text-amber-400",
                                                children: [
                                                  " ",
                                                  "• Password-protected",
                                                ],
                                              }),
                                            n?.status === "done" &&
                                              e.jsxs("span", {
                                                className: "text-emerald-400",
                                                children: [
                                                  " ",
                                                  "→ ",
                                                  F(n.compressedSize),
                                                ],
                                              }),
                                            n?.status === "error" &&
                                              e.jsx("span", {
                                                className: "text-red-400",
                                                children: " • failed",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    !C &&
                                      e.jsx("button", {
                                        "aria-label": `Remove ${s.name}`,
                                        onClick: () => ie(s.name, s.size),
                                        className:
                                          "text-zinc-500 hover:text-white transition-colors p-1 flex-shrink-0",
                                        children: e.jsx(ke, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                  ],
                                },
                                s.name + s.size,
                              );
                            }),
                            !C &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("input", {
                                    type: "file",
                                    accept: "application/pdf",
                                    multiple: !0,
                                    onChange: Z,
                                    className: "hidden",
                                    id: "compress-add",
                                  }),
                                  e.jsxs("label", {
                                    htmlFor: "compress-add",
                                    className:
                                      "inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white cursor-pointer transition-colors px-1",
                                    children: [
                                      e.jsx(Be, { className: "w-3.5 h-3.5" }),
                                      " Add more PDFs",
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        x.length > 0 &&
                          e.jsxs("div", {
                            className:
                              "flex items-start gap-2.5 p-3 bg-amber-950/40 border border-amber-900/50 rounded-xl text-xs text-amber-200",
                            children: [
                              e.jsx(Re, {
                                className:
                                  "w-4 h-4 flex-shrink-0 mt-0.5 text-amber-400",
                              }),
                              e.jsxs("p", {
                                className: "leading-relaxed",
                                children: [
                                  x.length,
                                  " file",
                                  x.length > 1 ? "s are" : " is",
                                  " password-protected and can't be compressed directly.",
                                  " ",
                                  e.jsx("a", {
                                    href: "/remove-password",
                                    className:
                                      "underline font-semibold hover:text-white",
                                    children: "Remove the password first →",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        e.jsx(Ne, {}),
                        z.length > 0 && !C
                          ? e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                z.map((s, t) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-sm font-medium text-white truncate mb-2",
                                          children: s.name,
                                        }),
                                        s.status === "error"
                                          ? e.jsx("p", {
                                              className: "text-xs text-red-400",
                                              children: s.error,
                                            })
                                          : e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 text-sm flex-wrap",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-zinc-400",
                                                      children: F(
                                                        s.originalSize,
                                                      ),
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-zinc-600",
                                                      children: "→",
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-white font-semibold",
                                                      children: F(
                                                        s.compressedSize,
                                                      ),
                                                    }),
                                                    !s.wasFallback &&
                                                      e.jsxs("span", {
                                                        className:
                                                          "px-2 py-0.5 bg-emerald-950 text-emerald-300 rounded-full text-xs font-semibold",
                                                        children: [
                                                          (
                                                            ((s.originalSize -
                                                              s.compressedSize) /
                                                              s.originalSize) *
                                                            100
                                                          ).toFixed(1),
                                                          "% smaller",
                                                        ],
                                                      }),
                                                    s.wasFallback &&
                                                      e.jsx("span", {
                                                        className:
                                                          "px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded-full text-xs",
                                                        children:
                                                          "already optimal",
                                                      }),
                                                    R === "target" &&
                                                      !s.reachedTarget &&
                                                      e.jsx("span", {
                                                        className:
                                                          "px-2 py-0.5 bg-amber-950 text-amber-300 rounded-full text-xs",
                                                        children:
                                                          "smallest possible",
                                                      }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 mt-3 flex-wrap",
                                                  children: [
                                                    e.jsxs("button", {
                                                      onClick: () => me(s),
                                                      className:
                                                        "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-semibold transition-colors",
                                                      children: [
                                                        e.jsx(Se, {
                                                          className:
                                                            "w-3.5 h-3.5",
                                                        }),
                                                        " Download",
                                                      ],
                                                    }),
                                                    z.length === 1 &&
                                                      e.jsxs("button", {
                                                        onClick: () => xe(s),
                                                        disabled: G,
                                                        className:
                                                          "inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg transition-colors disabled:opacity-50",
                                                        children: [
                                                          e.jsx(Me, {
                                                            className:
                                                              "w-3.5 h-3.5",
                                                          }),
                                                          G
                                                            ? "Rendering…"
                                                            : "Preview quality",
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                      ],
                                    },
                                    t,
                                  ),
                                ),
                                O &&
                                  e.jsx("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      ["Original", O.originalUrl],
                                      ["Compressed", O.compressedUrl],
                                    ].map(([s, t]) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-zinc-500 mb-1.5 text-center",
                                              children: s,
                                            }),
                                            e.jsx("img", {
                                              src: t,
                                              alt: `${s} page 1`,
                                              className:
                                                "w-full rounded-lg border border-zinc-800",
                                            }),
                                          ],
                                        },
                                        s,
                                      ),
                                    ),
                                  }),
                                z.filter((s) => s.status === "done").length >
                                  1 &&
                                  e.jsxs("button", {
                                    onClick: pe,
                                    className:
                                      "w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 text-sm",
                                    children: [
                                      e.jsx(Ce, { className: "w-4 h-4" }),
                                      " Download all as ZIP",
                                    ],
                                  }),
                                e.jsxs("button", {
                                  onClick: oe,
                                  className:
                                    "w-full py-2.5 bg-transparent border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm",
                                  children: [
                                    e.jsx(Le, { className: "w-4 h-4" }),
                                    " Compress more files",
                                  ],
                                }),
                              ],
                            })
                          : C
                            ? e.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-2",
                                        children: [
                                          e.jsxs("p", {
                                            className:
                                              "text-sm text-zinc-200 font-medium truncate pr-2",
                                            children: [
                                              "Compressing ",
                                              f?.name,
                                              f?.totalFiles > 1 &&
                                                ` (${f.fileIndex + 1}/${f.totalFiles})`,
                                            ],
                                          }),
                                          f?.attempt > 0 &&
                                            e.jsxs("span", {
                                              className:
                                                "text-xs text-zinc-500 flex-shrink-0",
                                              children: [
                                                "attempt ",
                                                f.attempt,
                                                "/",
                                                f.attempts,
                                              ],
                                            }),
                                        ],
                                      }),
                                      f?.totalPages > 0
                                        ? e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "h-2 bg-zinc-800 rounded-full overflow-hidden",
                                                children: e.jsx("div", {
                                                  className:
                                                    "h-full bg-zinc-100 transition-all duration-300",
                                                  style: {
                                                    width: `${Math.min(100, (f.page / f.totalPages) * 100)}%`,
                                                  },
                                                }),
                                              }),
                                              e.jsxs("p", {
                                                className:
                                                  "text-xs text-zinc-500 mt-1.5",
                                                children: [
                                                  "Page ",
                                                  f.page,
                                                  " of ",
                                                  f.totalPages,
                                                ],
                                              }),
                                            ],
                                          })
                                        : e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-xs text-zinc-500",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "w-3.5 h-3.5 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin",
                                              }),
                                              "Optimizing streams, fonts & images…",
                                            ],
                                          }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    onClick: de,
                                    className:
                                      "w-full py-2.5 bg-transparent border border-zinc-800 hover:border-red-900 hover:text-red-300 text-zinc-300 rounded-xl font-medium transition-colors text-sm",
                                    children: "Cancel",
                                  }),
                                ],
                              })
                            : e.jsxs("div", {
                                className: "space-y-5",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "grid grid-cols-2 gap-2 p-1 bg-zinc-950 border border-zinc-800 rounded-xl",
                                    children: [
                                      ["level", "Compression level"],
                                      ["target", "Target file size"],
                                    ].map(([s, t]) =>
                                      e.jsx(
                                        "button",
                                        {
                                          onClick: () => se(s),
                                          className: `py-2 rounded-lg text-xs font-semibold transition-colors ${R === s ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-white"}`,
                                          children: t,
                                        },
                                        s,
                                      ),
                                    ),
                                  }),
                                  R === "level"
                                    ? e.jsx("div", {
                                        className:
                                          "grid grid-cols-1 sm:grid-cols-3 gap-2",
                                        children: Object.entries(Q).map(
                                          ([s, t]) =>
                                            e.jsxs(
                                              "button",
                                              {
                                                onClick: () => te(s),
                                                className: `text-left p-3 rounded-xl border transition-colors ${H === s ? "border-zinc-400 bg-zinc-800" : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"}`,
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "text-sm font-semibold text-white",
                                                    children: t.label,
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs text-zinc-400 mt-0.5",
                                                    children: t.hint,
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs text-zinc-600 mt-1",
                                                    children: t.detail,
                                                  }),
                                                ],
                                              },
                                              s,
                                            ),
                                        ),
                                      })
                                    : e.jsxs("div", {
                                        className: "space-y-3",
                                        children: [
                                          e.jsx("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: fe.map((s) =>
                                              e.jsxs(
                                                "button",
                                                {
                                                  onClick: () => {
                                                    (re(s), q(""));
                                                  },
                                                  className: `py-3 rounded-xl border text-sm font-semibold transition-colors ${!M && W === s ? "border-zinc-400 bg-zinc-800 text-white" : "border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-700"}`,
                                                  children: [
                                                    "Under ",
                                                    s,
                                                    " MB",
                                                  ],
                                                },
                                                s,
                                              ),
                                            ),
                                          }),
                                          e.jsxs("div", {
                                            children: [
                                              e.jsx("label", {
                                                className:
                                                  "text-xs text-zinc-400 block mb-1.5",
                                                children:
                                                  "Or a custom target (MB)",
                                              }),
                                              e.jsx("input", {
                                                type: "number",
                                                min: "0.1",
                                                step: "0.1",
                                                value: M,
                                                onChange: (s) =>
                                                  q(s.target.value),
                                                placeholder: "e.g. 0.5",
                                                className:
                                                  "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200",
                                              }),
                                            ],
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs text-zinc-500 leading-relaxed",
                                            children:
                                              "We'll try progressively stronger compression and stop at the first result under your target.",
                                          }),
                                        ],
                                      }),
                                  e.jsxs("button", {
                                    onClick: ce,
                                    disabled: !w.length,
                                    type: "button",
                                    className:
                                      "w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98] text-sm",
                                    children: [
                                      e.jsx(ee, { className: "w-4 h-4" }),
                                      w.length > 1
                                        ? `Compress ${w.length} PDFs`
                                        : "Compress PDF Now",
                                    ],
                                  }),
                                ],
                              }),
                      ],
                    }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-3",
              children: [
                {
                  title: "Up to 70% Smaller",
                  desc: "Reduce file size dramatically while maintaining quality using advanced compression algorithms.",
                },
                {
                  title: "Quality Preserved",
                  desc: "Smart compression maintains readability and visual quality. Preserves all links, forms, and annotations.",
                },
                {
                  title: "100% Private",
                  desc: "Your PDFs never leave your device. All compression happens locally in your browser.",
                },
              ].map(({ title: s, desc: t }) =>
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
                            children: e.jsx(De, {
                              className: "w-4 h-4 text-zinc-300",
                            }),
                          }),
                          e.jsx("h3", {
                            className: "font-semibold text-white text-sm",
                            children: s,
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 leading-relaxed",
                        children: t,
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
            e.jsxs("p", {
              className: "text-sm md:text-base text-zinc-300 leading-relaxed",
              itemProp: "description",
              children: [
                "Reduce your PDF file size by up to 70% while maintaining excellent quality using our advanced PDF compression tool. Powered by Ghostscript technology, our compressor optimizes images, fonts, and metadata to make your PDFs smaller and faster to share.",
                " ",
                e.jsx("strong", {
                  className: "text-white",
                  children: "100% private",
                }),
                " — compression happens entirely in your browser with no upload required. No file size limits, no watermarks, completely free.",
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
                  className: "text-xl md:text-2xl font-bold text-white mb-4",
                  children: "How to Compress a PDF — Step by Step",
                }),
                e.jsx("div", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6",
                  children: e.jsx("ol", {
                    className: "space-y-4",
                    children: [
                      [
                        "Upload your PDF",
                        "Click the upload area or drag and drop. PDFs up to 150MB are supported — compress large presentations, scanned documents, or image-heavy reports.",
                      ],
                      [
                        "Choose compression level",
                        "Light (20–30%) preserves professional image quality. Medium (40–50%) is perfect for email, sharing, and CVs. Heavy (60–70%) gives maximum size reduction.",
                      ],
                      [
                        "Compress and download",
                        'Click "Compress PDF Now". Most files finish in 5–30 seconds. Download instantly — no watermark ever added.',
                      ],
                      [
                        "Review results",
                        "Compare original vs compressed size. If quality looks fine, you're done. If you need it smaller still, try Heavy compression or split the PDF first.",
                      ],
                    ].map(([s, t], n) =>
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
                            e.jsxs("p", {
                              className: "text-sm text-zinc-300 flex-1 min-w-0",
                              children: [
                                e.jsxs("strong", {
                                  className: "text-white",
                                  children: [s, ":"],
                                }),
                                " ",
                                t,
                              ],
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
                  className: "text-xl md:text-2xl font-bold text-white mb-3",
                  children: "Compression Level Guide",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                  children: [
                    {
                      badge: "Light • 20–30%",
                      title: "Professional Print",
                      desc: "300 DPI images. Output is indistinguishable from the original. Best for portfolios, design work, and documents you'll print.",
                      best: "Portfolios, print-ready documents",
                    },
                    {
                      badge: "Medium • 40–50%",
                      title: "General Use",
                      desc: "150 DPI images. The sweet spot for CVs, reports, contracts, and email attachments. Looks identical on screen.",
                      best: "Email, CV sharing, office use",
                    },
                    {
                      badge: "Heavy • 60–70%",
                      title: "Maximum Compression",
                      desc: "72 DPI images. Smallest possible file size. Text stays perfectly sharp; photos may look slightly softer.",
                      best: "Archiving, upload portals, 1MB targets",
                    },
                  ].map(({ badge: s, title: t, desc: n, best: a }) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: e.jsx("span", {
                              className:
                                "px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded-full text-xs font-mono font-bold",
                              children: s,
                            }),
                          }),
                          e.jsx("h3", {
                            className: "font-semibold text-white text-sm mb-1",
                            children: t,
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-400 mb-2 leading-relaxed",
                            children: n,
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-zinc-600",
                            children: [
                              e.jsx("strong", {
                                className: "text-zinc-500",
                                children: "Best for:",
                              }),
                              " ",
                              a,
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
                  className: "text-xl md:text-2xl font-bold text-white mb-4",
                  children: "Why Compress PDFs?",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                  children: [
                    [
                      "📧 Email size limits",
                      "Gmail caps attachments at 25MB. Outlook at 20MB. Medium compression handles most PDFs in seconds.",
                    ],
                    [
                      "📋 Upload portals & job applications",
                      "Government portals, HR systems, and university forms often impose 2–5MB limits. Heavy compression gets you there.",
                    ],
                    [
                      "☁️ Cloud storage savings",
                      "Cut storage costs 50–70%. Compress archived PDFs in bulk to reclaim gigabytes.",
                    ],
                    [
                      "📱 Faster mobile sharing",
                      "Smaller files open instantly on WhatsApp, Telegram, and email on any mobile connection.",
                    ],
                    [
                      "🔒 Privacy-first",
                      "Unlike other compressors, ihatepdf never uploads your file. Zero server contact. Works offline.",
                    ],
                    [
                      "📊 Scanned document archives",
                      "Turn 15MB scanned documents into 2–3MB files without losing any readable content.",
                    ],
                  ].map(([s, t]) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors",
                        children: [
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white text-sm mb-1.5",
                            children: s,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: t,
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
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-3",
                  children: "How PDF Compression Works",
                }),
                e.jsx("p", {
                  className: "text-sm text-zinc-400 mb-5",
                  children:
                    "Ghostscript applies five simultaneous optimizations to shrink your PDF:",
                }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: [
                    [
                      "Image downsampling",
                      "Photos and raster graphics are resampled from high DPI to optimal screen/print resolution using bicubic interpolation — the highest-quality downsampling algorithm.",
                    ],
                    [
                      "JPEG recompression",
                      "Images are re-encoded at a quality level matched to your chosen compression tier. Light = 92% quality. Medium = 75%. Heavy = 50%.",
                    ],
                    [
                      "Font subsetting",
                      "Embedded fonts are trimmed to include only characters actually used in the document, cutting font data by up to 90%.",
                    ],
                    [
                      "Metadata stripping",
                      "Creation history, author data, thumbnail previews, and hidden identifiers are removed.",
                    ],
                    [
                      "Stream compression",
                      "All content streams are recompressed with the most efficient lossless algorithm. Text and vector graphics are entirely unaffected.",
                    ],
                  ].map(([s, t]) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex gap-3",
                        children: [
                          e.jsx("span", {
                            className: "text-zinc-400 font-bold flex-shrink-0",
                            children: "✓",
                          }),
                          e.jsxs("p", {
                            className: "text-sm text-zinc-300",
                            children: [
                              e.jsxs("strong", {
                                className: "text-white",
                                children: [s, ":"],
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
                  className: "text-xl md:text-2xl font-bold text-white mb-4",
                  children: "Frequently Asked Questions",
                }),
                e.jsx("div", {
                  className: "space-y-4",
                  children: [
                    [
                      "Will compression make my PDF text blurry?",
                      "Never. Text in PDFs is stored as vector data — it is never converted to pixels during compression. Text stays perfectly sharp and fully selectable at every compression level.",
                    ],
                    [
                      "How do I compress a PDF to under 1MB?",
                      "Choose Heavy compression. If still over 1MB, the PDF has many high-resolution images. Split it into sections first, then compress each section.",
                    ],
                    [
                      "How do I compress a PDF for email?",
                      "Most email clients allow up to 25MB. Medium compression handles most PDFs. Switch to Heavy if still over the limit.",
                    ],
                    [
                      "Does this work without uploading my file?",
                      "Yes. Everything runs locally in your browser using WebAssembly. Your PDF never reaches any server. It also works fully offline.",
                    ],
                    [
                      "Can I compress a password-protected PDF?",
                      "Remove the password first (use the Remove Password tool), compress, then re-encrypt if needed.",
                    ],
                    [
                      "Is there a file size limit?",
                      "No artificial limit. Practical constraint is your device RAM — usually 100–150MB on desktop.",
                    ],
                  ].map(([s, t]) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                        children: [
                          e.jsx("h3", {
                            className: "font-semibold text-white text-sm mb-2",
                            children: s,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: t,
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
                  className: "text-xl md:text-2xl font-bold text-white mb-4",
                  children: "Related PDF Tools",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                  children: [
                    {
                      href: "/split-pdf",
                      title: "Split PDF →",
                      desc: "Split a large PDF into sections before compressing for better results.",
                    },
                    {
                      href: "/merge-pdf",
                      title: "Merge PDFs →",
                      desc: "Combine multiple compressed PDFs into one document.",
                    },
                    {
                      href: "/remove-password",
                      title: "Remove Password →",
                      desc: "Unlock a protected PDF before compressing it.",
                    },
                  ].map(({ href: s, title: t, desc: n }) =>
                    e.jsxs(
                      "a",
                      {
                        href: s,
                        className:
                          "bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 transition-all group block",
                        children: [
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white text-sm mb-1.5 group-hover:text-zinc-100 transition-colors",
                            children: t,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: n,
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
export { Ee as default };
