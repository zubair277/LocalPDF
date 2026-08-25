import { r as c, j as e, e as fe } from "./react-vendor-Bc7KCos-.js";
const L = "ihatepdf-store",
  be = "ihatepdf_DB",
  q = "ihatepdf_history",
  J = 50,
  Y = 100,
  X =
    "image/png,image/jpeg,image/jpg,image/webp,image/gif,image/bmp,image/svg+xml",
  ve = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  K = (s) =>
    s < 1024
      ? `${s} B`
      : s < 1024 * 1024
        ? `${(s / 1024).toFixed(1)} KB`
        : `${(s / (1024 * 1024)).toFixed(1)} MB`,
  H = (s) =>
    new Promise((o, r) => {
      const i = new FileReader();
      ((i.onload = () => o(i.result)),
        (i.onerror = () => r(new Error(`Failed to read "${s.name}"`))),
        i.readAsArrayBuffer(s));
    }),
  we = (s) =>
    new Promise((o, r) => {
      const i = URL.createObjectURL(s),
        d = new Image();
      ((d.onload = () => {
        URL.revokeObjectURL(i);
        const x = document.createElement("canvas");
        ((x.width = d.naturalWidth),
          (x.height = d.naturalHeight),
          x.getContext("2d").drawImage(d, 0, 0),
          x.toBlob((j) => {
            if (!j) return r(new Error(`Canvas export failed for "${s.name}"`));
            j.arrayBuffer().then(o).catch(r);
          }, "image/png"));
      }),
        (d.onerror = () => {
          (URL.revokeObjectURL(i),
            r(new Error(`Cannot load image: "${s.name}"`)));
        }),
        (d.src = i));
    });
let R = null;
const je = () =>
    R
      ? Promise.resolve(R)
      : new Promise((s, o) => {
          const r = indexedDB.open(be, 1);
          ((r.onupgradeneeded = (i) => {
            const d = i.target.result;
            d.objectStoreNames.contains(L) || d.createObjectStore(L);
          }),
            (r.onsuccess = () => {
              ((R = r.result), s(R));
            }),
            (r.onerror = () => o(r.error)));
        }),
  ye = async (s, o) => {
    const r = await je();
    return new Promise((i, d) => {
      const x = r.transaction(L, "readwrite");
      (x.objectStore(L).put(o, s),
        (x.oncomplete = i),
        (x.onerror = () => d(x.error)));
    });
  },
  Ne = async (s, o) => {
    try {
      if (o?.aborted) return;
      const r = JSON.parse(localStorage.getItem(q) || "[]"),
        i = {
          id: Date.now(),
          name: s.name,
          tool: s.tool,
          timestamp: Date.now(),
          size: s.size,
        };
      (s.bytes && (await ye(`pdf_${i.id}`, s.bytes)),
        r.unshift(i),
        localStorage.setItem(q, JSON.stringify(r.slice(0, 50))));
    } catch (r) {
      console.warn("History write failed:", r);
    }
  },
  De = (s, o, r) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, o, r), !0);
    } catch {}
    try {
      const i = new Blob([s], { type: r });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(i, o), !0);
      const d = URL.createObjectURL(i),
        x = document.createElement("a");
      return (
        (x.href = d),
        (x.download = o),
        (x.style.cssText = "display:none;position:fixed;left:-9999px"),
        document.body.appendChild(x),
        x.click(),
        setTimeout(() => {
          (document.body.removeChild(x), URL.revokeObjectURL(d));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const i = new Blob([s], { type: r }),
          d = URL.createObjectURL(i);
        return (
          window.open(d, "_blank") ||
            alert(`Download blocked. Allow pop-ups.
File: ${o}`),
          setTimeout(() => URL.revokeObjectURL(d), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${o}. Try a different browser.`), !1);
      }
    }
  },
  Pe = () => {
    if (typeof navigator > "u") return !1;
    const s = navigator.userAgent;
    return /iPad|iPhone/i.test(s) && /WebKit/i.test(s) && !/CriOS/i.test(s);
  },
  z = ({ children: s, className: o, ...r }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: o,
      ...r,
      children: s,
    }),
  M = (s) =>
    e.jsxs(z, {
      ...s,
      children: [
        e.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        e.jsx("circle", { cx: "9", cy: "9", r: "2" }),
        e.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
      ],
    }),
  Z = (s) =>
    e.jsxs(z, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  T = (s) =>
    e.jsx(z, {
      ...s,
      strokeWidth: "0",
      children: [5, 12, 19].flatMap((o) =>
        [9, 15].map((r) =>
          e.jsx(
            "circle",
            { cx: r, cy: o, r: "1.4", fill: "currentColor" },
            `${r}-${o}`,
          ),
        ),
      ),
    }),
  Q = (s) =>
    e.jsxs(z, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  ze = (s) =>
    e.jsxs(z, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Ce = (s) =>
    e.jsxs(z, {
      ...s,
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  V = fe.memo(
    ({
      img: s,
      index: o,
      total: r,
      onRemove: i,
      onDragStart: d,
      onDragOver: x,
      onDrop: b,
      onDragEnd: j,
      onTouchStart: $,
      isDragging: N,
      isDragOver: B,
    }) =>
      e.jsxs("div", {
        "data-card-index": o,
        draggable: !0,
        onDragStart: (p) => d(p, o),
        onDragOver: (p) => x(p, o),
        onDrop: (p) => b(p, o),
        onDragEnd: j,
        onTouchStart: (p) => $(p, o),
        className: `relative group aspect-square rounded-xl overflow-hidden border-2 transition-all duration-150 cursor-grab active:cursor-grabbing select-none touch-none
      ${B ? "border-white scale-[1.04] shadow-lg shadow-white/10 z-10" : N ? "border-zinc-600 opacity-30 scale-95" : "border-zinc-700 hover:border-zinc-500 bg-zinc-900"}`,
        children: [
          e.jsx("img", {
            src: s.preview,
            alt: s.file.name,
            className: "w-full h-full object-cover pointer-events-none",
            draggable: !1,
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150",
          }),
          e.jsx("div", {
            className: "absolute top-1.5 left-1.5",
            children: e.jsx("span", {
              className:
                "bg-black/75 backdrop-blur-sm text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold tabular-nums leading-none",
              children: o + 1,
            }),
          }),
          e.jsx("div", {
            className: "absolute top-1.5 right-1.5",
            children: e.jsx("button", {
              onClick: (p) => {
                (p.stopPropagation(), i(o));
              },
              className:
                "w-6 h-6 sm:w-7 sm:h-7 bg-black/75 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 active:scale-90 touch-manipulation transition-colors sm:opacity-0 sm:group-hover:opacity-100",
              "aria-label": `Remove ${s.file.name}`,
              children: e.jsx(ze, { className: "w-3 h-3", strokeWidth: "2.5" }),
            }),
          }),
          e.jsxs("div", {
            className:
              "absolute bottom-0 left-0 right-0 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none",
            children: [
              e.jsx("p", {
                className:
                  "text-[9px] text-white/80 truncate leading-tight font-medium",
                children: s.file.name,
              }),
              e.jsx("p", {
                className: "text-[9px] text-white/50",
                children: K(s.file.size),
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "absolute bottom-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
            children: e.jsx(T, { className: "w-3.5 h-3.5 text-white/50" }),
          }),
          s.error &&
            e.jsx("div", {
              className:
                "absolute inset-0 bg-red-950/90 flex items-center justify-center p-2",
              children: e.jsxs("div", {
                className: "text-center",
                children: [
                  e.jsx(Q, { className: "w-4 h-4 text-red-400 mx-auto mb-1" }),
                  e.jsx("p", {
                    className: "text-[9px] text-red-300 leading-tight",
                    children: s.error,
                  }),
                ],
              }),
            }),
        ],
      }),
  );
V.displayName = "ImageCard";
const Fe = ({ showNotification: s, showDownloadDialog: o }) => {
  const [r, i] = c.useState([]),
    [d, x] = c.useState(!1),
    [b, j] = c.useState({ current: 0, total: 0 }),
    [$, N] = c.useState(null),
    [B, p] = c.useState(null),
    [F, U] = c.useState(!1),
    [G, W] = c.useState([]),
    I = c.useRef(null),
    C = c.useRef(new Set()),
    E = c.useRef({
      active: !1,
      sourceIndex: null,
      ghostEl: null,
      startOffsetX: 0,
      startOffsetY: 0,
    }),
    S = c.useRef(!0);
  (c.useEffect(
    () => (
      (S.current = !0),
      () => {
        ((S.current = !1),
          C.current.forEach((t) => URL.revokeObjectURL(t)),
          C.current.clear(),
          I.current?.abort());
      }
    ),
    [],
  ),
    c.useEffect(() => {
      let t = document.querySelector('link[rel="canonical"]'),
        n = !1;
      t ||
        ((t = document.createElement("link")),
        (t.rel = "canonical"),
        document.head.appendChild(t),
        (n = !0));
      const a = t.href;
      t.href = "https://www.ihatepdf.cv/images-to-pdf";
      const m = document.createElement("script");
      return (
        (m.type = "application/ld+json"),
        (m.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ihatepdf Image to PDF Converter",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web Browser",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        })),
        document.head.appendChild(m),
        () => {
          (n ? t.parentNode?.removeChild(t) : (t.href = a),
            m.parentNode?.removeChild(m));
        }
      );
    }, []));
  const D = c.useCallback((t, n = "error") => s?.(t, n), [s]),
    O = c.useCallback((t) => {
      const n = Array.from(t).filter((h) => h.type.startsWith("image/"));
      if (!n.length) return;
      const a = [],
        m = [];
      (i((h) => {
        for (const u of n) {
          if (h.length + m.length >= Y) {
            a.push(`Maximum of ${Y} images reached. Some files were skipped.`);
            break;
          }
          if (u.size > J * 1024 * 1024) {
            a.push(`"${u.name}" exceeds ${J} MB and was skipped.`);
            continue;
          }
          if (
            [...h, ...m].some(
              (g) => g.file.name === u.name && g.file.size === u.size,
            )
          ) {
            a.push(`"${u.name}" is already in the list.`);
            continue;
          }
          const v = URL.createObjectURL(u);
          (C.current.add(v),
            m.push({ id: ve(), file: u, preview: v, error: null }));
        }
        return m.length ? [...h, ...m] : h;
      }),
        a.length && W((h) => [...h, ...a]));
    }, []),
    _ = c.useCallback(
      (t) => {
        (O(t.target.files), (t.target.value = ""));
      },
      [O],
    ),
    ee = c.useCallback((t) => {
      (t.preventDefault(), U(!0));
    }, []),
    te = c.useCallback((t) => {
      t.currentTarget.contains(t.relatedTarget) || U(!1);
    }, []),
    se = c.useCallback(
      (t) => {
        (t.preventDefault(), U(!1), O(t.dataTransfer.files));
      },
      [O],
    ),
    ne = c.useCallback((t) => {
      i((n) => {
        const a = [...n],
          [m] = a.splice(t, 1);
        return (URL.revokeObjectURL(m.preview), C.current.delete(m.preview), a);
      });
    }, []),
    re = c.useCallback(() => {
      i(
        (t) => (
          t.forEach((n) => {
            (URL.revokeObjectURL(n.preview), C.current.delete(n.preview));
          }),
          []
        ),
      );
    }, []),
    ae = c.useCallback((t, n) => {
      (N(n),
        (t.dataTransfer.effectAllowed = "move"),
        t.dataTransfer.setData("text/plain", String(n)));
    }, []),
    oe = c.useCallback((t, n) => {
      (t.preventDefault(),
        (t.dataTransfer.dropEffect = "move"),
        p((a) => (a !== n ? n : a)));
    }, []),
    ie = c.useCallback((t, n) => {
      (t.preventDefault(),
        N(
          (a) => (
            a === null ||
              a === n ||
              i((m) => {
                const h = [...m],
                  [u] = h.splice(a, 1);
                return (h.splice(n, 0, u), h);
              }),
            null
          ),
        ),
        p(null));
    }, []),
    le = c.useCallback(() => {
      (N(null), p(null));
    }, []),
    ce = c.useCallback((t, n) => {
      const a = t.touches[0],
        m = t.currentTarget,
        h = m.getBoundingClientRect(),
        u = m.cloneNode(!0);
      ((u.style.cssText = [
        "position:fixed",
        `width:${h.width}px`,
        `height:${h.height}px`,
        `top:${h.top}px`,
        `left:${h.left}px`,
        "opacity:0.85",
        "pointer-events:none",
        "z-index:9999",
        "transform:scale(1.06)",
        "border-radius:12px",
        "overflow:hidden",
        "box-shadow:0 8px 32px rgba(0,0,0,0.5)",
        "transition:none",
      ].join(";")),
        document.body.appendChild(u),
        (E.current = {
          active: !0,
          sourceIndex: n,
          ghostEl: u,
          startOffsetX: a.clientX - h.left,
          startOffsetY: a.clientY - h.top,
        }),
        N(n));
      const y = (g) => {
          const l = E.current;
          if (!l.active) return;
          l.ghostEl?.parentNode && document.body.removeChild(l.ghostEl);
          let f = null;
          const k = g.changedTouches[0];
          l.ghostEl && (l.ghostEl.style.display = "none");
          const P = document
            .elementFromPoint(k.clientX, k.clientY)
            ?.closest("[data-card-index]");
          (P && (f = parseInt(P.dataset.cardIndex, 10)),
            f !== null &&
              !isNaN(f) &&
              f !== l.sourceIndex &&
              i((pe) => {
                const A = [...pe],
                  [ge] = A.splice(l.sourceIndex, 1);
                return (A.splice(f, 0, ge), A);
              }),
            (E.current = {
              active: !1,
              sourceIndex: null,
              ghostEl: null,
              startOffsetX: 0,
              startOffsetY: 0,
            }),
            N(null),
            p(null),
            document.removeEventListener("touchmove", v),
            document.removeEventListener("touchend", y),
            document.removeEventListener("touchcancel", y));
        },
        v = (g) => {
          const l = E.current;
          if (!l.active || !l.ghostEl) return;
          g.preventDefault();
          const f = g.touches[0];
          ((l.ghostEl.style.top = `${f.clientY - l.startOffsetY}px`),
            (l.ghostEl.style.left = `${f.clientX - l.startOffsetX}px`),
            (l.ghostEl.style.display = "none"));
          const k = document.elementFromPoint(f.clientX, f.clientY);
          l.ghostEl.style.display = "";
          const w = k?.closest("[data-card-index]");
          if (w) {
            const P = parseInt(w.dataset.cardIndex, 10);
            !isNaN(P) && P !== l.sourceIndex && p(P);
          }
        };
      (document.addEventListener("touchmove", v, { passive: !1 }),
        document.addEventListener("touchend", y),
        document.addEventListener("touchcancel", y));
    }, []),
    de = async () => {
      if (!r.length || d) return;
      if (!window.PDFLib?.PDFDocument) {
        D(
          "PDF library not loaded. Please refresh the page and try again.",
          "error",
        );
        return;
      }
      I.current = new AbortController();
      const { signal: t } = I.current;
      (x(!0), j({ current: 0, total: r.length }));
      try {
        const { PDFDocument: n } = window.PDFLib,
          a = await n.create(),
          m = [];
        for (let v = 0; v < r.length && !t.aborted; v++) {
          const g = r[v];
          j({ current: v + 1, total: r.length });
          try {
            let l;
            const f = g.file.type;
            if (f === "image/jpeg" || f === "image/jpg") {
              const w = await H(g.file);
              l = await a.embedJpg(w);
            } else if (f === "image/png") {
              const w = await H(g.file);
              l = await a.embedPng(w);
            } else {
              const w = await we(g.file);
              l = await a.embedPng(w);
            }
            a.addPage([l.width, l.height]).drawImage(l, {
              x: 0,
              y: 0,
              width: l.width,
              height: l.height,
            });
          } catch (l) {
            (console.error(`Embed failed for "${g.file.name}":`, l),
              m.push(g.file.name));
          }
        }
        if (t.aborted) {
          D("Conversion cancelled.", "info");
          return;
        }
        if (a.getPageCount() === 0) {
          D(
            "No images could be embedded. Check file formats and try again.",
            "error",
          );
          return;
        }
        const h = await a.save(),
          u = "images_converted.pdf",
          y = De(h, u, "application/pdf");
        (y !== !1 && S.current
          ? (await Ne({ name: u, tool: "images", size: h.length, bytes: h }, t),
            o?.(u, h.length, h))
          : y === !1 &&
            D(
              "Download may have been blocked. Check your downloads folder.",
              "error",
            ),
          m.length &&
            D(
              `${m.length} image${m.length > 1 ? "s" : ""} could not be embedded: ${m.slice(0, 3).join(", ")}${m.length > 3 ? "…" : ""}`,
              "warning",
            ));
      } catch (n) {
        t.aborted ||
          (console.error("Conversion error:", n),
          D(`Conversion failed: ${n.message}`, "error"));
      } finally {
        S.current && (x(!1), j({ current: 0, total: 0 }));
      }
    },
    me = c.useCallback(() => {
      I.current?.abort();
    }, []),
    he = c.useCallback(() => W([]), []),
    xe = r.reduce((t, n) => t + n.file.size, 0),
    ue = b.total ? Math.round((b.current / b.total) * 100) : 0;
  return e.jsxs("div", {
    className: "w-full max-w-5xl mx-auto px-4 sm:px-6 space-y-8",
    children: [
      G.length > 0 &&
        e.jsxs("div", {
          className:
            "flex gap-3 bg-amber-950/40 border border-amber-700/50 rounded-xl p-4",
          children: [
            e.jsx(Q, { className: "w-4 h-4 text-amber-400 shrink-0 mt-0.5" }),
            e.jsx("div", {
              className: "flex-1 space-y-0.5",
              children: G.map((t, n) =>
                e.jsx(
                  "p",
                  { className: "text-sm text-amber-300", children: t },
                  n,
                ),
              ),
            }),
            e.jsx("button", {
              onClick: he,
              className:
                "text-amber-600 hover:text-amber-300 text-xl leading-none shrink-0 touch-manipulation",
              "aria-label": "Dismiss",
              children: "×",
            }),
          ],
        }),
      e.jsxs("article", {
        className: "space-y-6",
        itemScope: !0,
        itemType: "https://schema.org/Article",
        children: [
          e.jsx("header", {
            children: e.jsx("h1", {
              className:
                "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight",
              itemProp: "headline",
              children: "JPG to PDF Converter — Convert Images to PDF Free",
            }),
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              r.length === 0 &&
                e.jsxs("div", {
                  className: `rounded-xl border-2 border-dashed p-6 sm:p-10 text-center transition-all duration-200 ${F ? "bg-zinc-700 border-white" : "bg-zinc-900 border-zinc-600 hover:border-zinc-400 hover:bg-zinc-800"}`,
                  onDragOver: ee,
                  onDragLeave: te,
                  onDrop: se,
                  children: [
                    e.jsx("input", {
                      type: "file",
                      multiple: !0,
                      accept: X,
                      onChange: _,
                      className: "hidden",
                      id: "img-upload",
                    }),
                    e.jsxs("label", {
                      htmlFor: "img-upload",
                      className:
                        "cursor-pointer flex flex-col items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: `w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${F ? "bg-white scale-110" : "bg-zinc-700"}`,
                          children: e.jsx(M, {
                            className: `w-7 h-7 transition-colors ${F ? "text-black" : "text-white"}`,
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-base sm:text-lg font-semibold text-white",
                              children: F
                                ? "Drop images here"
                                : "Upload Images",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-400 text-sm mt-0.5",
                              children:
                                "JPG, PNG, WebP, GIF, BMP — drag & drop or click",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "mt-1 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 active:scale-95 transition-all touch-manipulation",
                          children: "Choose Files",
                        }),
                      ],
                    }),
                  ],
                }),
              r.length > 0 &&
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between gap-2 flex-wrap",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            e.jsxs("p", {
                              className: "text-sm text-zinc-400",
                              children: [
                                e.jsx("span", {
                                  className: "text-white font-semibold",
                                  children: r.length,
                                }),
                                ` image${r.length !== 1 ? "s" : ""} · ${K(xe)}`,
                              ],
                            }),
                            e.jsxs("span", {
                              className:
                                "hidden sm:inline-flex items-center gap-1 text-xs text-zinc-500 bg-zinc-800/80 border border-zinc-700 px-2 py-0.5 rounded-full",
                              children: [
                                e.jsx(T, { className: "w-3 h-3" }),
                                "Drag to reorder",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: re,
                          disabled: d,
                          className:
                            "text-xs text-zinc-500 hover:text-red-400 disabled:opacity-40 transition-colors touch-manipulation",
                          children: "Clear all",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2",
                      children: [
                        r.map((t, n) =>
                          e.jsx(
                            V,
                            {
                              img: t,
                              index: n,
                              total: r.length,
                              onRemove: ne,
                              onDragStart: ae,
                              onDragOver: oe,
                              onDrop: ie,
                              onDragEnd: le,
                              onTouchStart: ce,
                              isDragging: $ === n,
                              isDragOver: B === n,
                            },
                            t.id,
                          ),
                        ),
                        e.jsxs("label", {
                          htmlFor: "img-upload-more",
                          className:
                            "aspect-square bg-zinc-900 border-2 border-dashed border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800 rounded-xl flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 touch-manipulation",
                          "aria-label": "Add more images",
                          children: [
                            e.jsx("input", {
                              type: "file",
                              multiple: !0,
                              accept: X,
                              onChange: _,
                              className: "hidden",
                              id: "img-upload-more",
                            }),
                            e.jsx(Ce, { className: "w-5 h-5 text-zinc-500" }),
                            e.jsx("span", {
                              className:
                                "text-[10px] text-zinc-500 font-medium",
                              children: "Add more",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              Pe() &&
                r.length > 0 &&
                e.jsxs("div", {
                  className:
                    "flex items-start gap-2 p-3 bg-zinc-800 border border-zinc-700 rounded-lg",
                  children: [
                    e.jsx("span", {
                      className: "text-base shrink-0",
                      children: "📱",
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-zinc-300 leading-relaxed",
                      children: [
                        "After download completes, find your file in",
                        " ",
                        e.jsx("span", {
                          className: "font-semibold text-white",
                          children: "Files app → Downloads",
                        }),
                      ],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "space-y-2.5",
                children: [
                  d &&
                    e.jsxs("div", {
                      className: "space-y-1.5",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-full bg-zinc-800 rounded-full h-1 overflow-hidden",
                          children: e.jsx("div", {
                            className:
                              "h-full bg-white rounded-full transition-all duration-300 ease-out",
                            style: { width: `${ue}%` },
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsx("p", {
                              className: "text-xs text-zinc-400",
                              children:
                                b.current < b.total
                                  ? `Embedding image ${b.current} of ${b.total}…`
                                  : "Finalising PDF…",
                            }),
                            e.jsx("button", {
                              onClick: me,
                              className:
                                "text-xs text-red-400 hover:text-red-300 transition-colors touch-manipulation",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsx("button", {
                    onClick: de,
                    disabled: r.length === 0 || d,
                    type: "button",
                    className: `w-full py-3.5 rounded-xl text-sm font-semibold transition-all touch-manipulation flex items-center justify-center gap-2 ${r.length === 0 || d ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" : "bg-white text-black hover:bg-zinc-100 active:scale-[0.98]"}`,
                    children: d
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className:
                                "w-4 h-4 border-2 border-zinc-600 border-t-zinc-200 rounded-full animate-spin",
                            }),
                            "Converting…",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(M, { className: "w-4 h-4" }),
                            r.length > 0
                              ? `Convert ${r.length} Image${r.length !== 1 ? "s" : ""} to PDF`
                              : "Convert to PDF",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2",
            children: [
              {
                icon: e.jsx(M, { className: "w-5 h-5 text-zinc-300" }),
                title: "Any Image Format",
                desc: "Convert JPG, PNG, WebP, GIF, BMP and more to PDF with one click.",
              },
              {
                icon: e.jsx(T, { className: "w-5 h-5 text-zinc-300" }),
                title: "Drag to Reorder",
                desc: "Drag and drop thumbnails to arrange images in any order before converting.",
              },
              {
                icon: e.jsx(Z, { className: "w-5 h-5 text-zinc-300" }),
                title: "Original Quality",
                desc: "Images are embedded at full resolution with no compression or quality degradation.",
              },
            ].map(({ icon: t, title: n, desc: a }) =>
              e.jsxs(
                "div",
                {
                  className:
                    "bg-zinc-900 border border-zinc-700 rounded-xl p-4 flex gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0",
                      children: t,
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", {
                          className: "font-semibold text-white text-sm",
                          children: n,
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs text-zinc-400 mt-1 leading-relaxed",
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
          e.jsxs("p", {
            className: "text-sm sm:text-base text-zinc-300 leading-relaxed",
            itemProp: "description",
            children: [
              "Convert JPG, PNG, WebP, and other image formats to PDF documents instantly.",
              " ",
              e.jsx("strong", {
                className: "text-white",
                children: "Maintains original quality",
              }),
              " — no compression or quality loss.",
              " ",
              e.jsx("strong", {
                className: "text-white",
                children: "100% private",
              }),
              " — all conversion happens in your browser with no upload required.",
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
                className: "text-xl sm:text-2xl font-bold text-white mb-3",
                children: "How to Convert Images to PDF",
              }),
              e.jsx("p", {
                className: "text-zinc-400 text-sm sm:text-base mb-5",
                children:
                  "Converting your images to PDF is simple and fast. Follow these easy steps:",
              }),
              e.jsx("ol", {
                className: "space-y-4",
                children: [
                  {
                    n: "1",
                    title: "Upload images:",
                    body: "Click the upload area or drag and drop JPG, PNG, WebP, GIF, or BMP files. Select multiple images at once — up to 100 files, 50 MB each.",
                  },
                  {
                    n: "2",
                    title: "Arrange order:",
                    body: "Drag thumbnails to reorder them. On mobile, long-press and drag. Remove any you don't need using the × button.",
                  },
                  {
                    n: "3",
                    title: "Convert to PDF:",
                    body: "Click Convert to PDF. A progress bar shows each image being embedded. You can cancel at any point.",
                  },
                  {
                    n: "4",
                    title: "Download your PDF:",
                    body: "Your PDF is ready to download immediately. Original image quality is preserved perfectly.",
                  },
                ].map(({ n: t, title: n, body: a }) =>
                  e.jsxs(
                    "li",
                    {
                      className:
                        "flex gap-3 text-zinc-300 text-sm sm:text-base",
                      children: [
                        e.jsx("span", {
                          className:
                            "flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold mt-0.5",
                          children: t,
                        }),
                        e.jsxs("span", {
                          children: [
                            e.jsx("strong", {
                              className: "text-white",
                              children: n,
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
            className:
              "bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6",
            children: [
              e.jsx("h2", {
                className: "text-xl sm:text-2xl font-bold text-white mb-3",
                children: "Why Convert Images to PDF?",
              }),
              e.jsx("p", {
                className: "text-zinc-400 text-sm sm:text-base mb-5",
                children:
                  "PDF is the universal document format that works on every device and maintains consistent appearance.",
              }),
              e.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  {
                    title: "Easy Sharing",
                    body: "Share multiple images as a single PDF via email or cloud storage.",
                  },
                  {
                    title: "Professional Presentation",
                    body: "Create portfolios, photo albums, or presentations with consistent formatting.",
                  },
                  {
                    title: "Document Archiving",
                    body: "Archive receipts, invoices, and scanned documents as PDFs for long-term storage.",
                  },
                  {
                    title: "Universal Compatibility",
                    body: "PDFs work on Windows, Mac, Linux, iOS, and Android. No special software needed.",
                  },
                ].map(({ title: t, body: n }) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex gap-3",
                      children: [
                        e.jsx(Z, {
                          className: "w-5 h-5 text-zinc-400 shrink-0 mt-0.5",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-sm sm:text-base font-semibold text-white",
                              children: t,
                            }),
                            e.jsx("p", {
                              className:
                                "text-xs sm:text-sm text-zinc-400 mt-1",
                              children: n,
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
            children: [
              e.jsx("h2", {
                className: "text-xl sm:text-2xl font-bold text-white mb-3",
                children: "Popular Uses",
              }),
              e.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                children: [
                  {
                    icon: "📸",
                    title: "Photography Portfolios",
                    body: "Compile your best shots into PDF portfolios for clients or galleries.",
                  },
                  {
                    icon: "📄",
                    title: "Scanned Documents",
                    body: "Convert scanned receipts, contracts, and forms to PDF for digital archiving.",
                  },
                  {
                    icon: "🎨",
                    title: "Design Mockups",
                    body: "Share UI mockups, wireframes, or concept art as PDFs with clients.",
                  },
                  {
                    icon: "📚",
                    title: "Digital Books & Manuals",
                    body: "Create ebooks or instruction manuals from sequential images.",
                  },
                  {
                    icon: "🏡",
                    title: "Real Estate Listings",
                    body: "Combine property photos into PDF brochures for potential buyers.",
                  },
                  {
                    icon: "💼",
                    title: "Business Reports",
                    body: "Include charts, screenshots, and photos in reports with consistent formatting.",
                  },
                ].map(({ icon: t, title: n, body: a }) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "bg-zinc-900 border border-zinc-700 rounded-xl p-4",
                      children: [
                        e.jsxs("h3", {
                          className: "font-semibold text-white text-sm mb-1.5",
                          children: [t, " ", n],
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs sm:text-sm text-zinc-400 leading-relaxed",
                          children: a,
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("section", {
            className:
              "bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6",
            children: [
              e.jsx("h2", {
                className: "text-xl sm:text-2xl font-bold text-white mb-3",
                children: "Supported Image Formats",
              }),
              e.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4",
                children: [
                  {
                    icon: "📷",
                    name: "JPG / JPEG",
                    desc: "Most common photo format. Perfect for photographs and camera images.",
                  },
                  {
                    icon: "🖼️",
                    name: "PNG",
                    desc: "Lossless format ideal for graphics, logos, screenshots, and transparency.",
                  },
                  {
                    icon: "🌐",
                    name: "WebP",
                    desc: "Modern web format offering smaller file sizes with excellent quality.",
                  },
                  {
                    icon: "🎞️",
                    name: "GIF / BMP",
                    desc: "Legacy formats fully supported — first frame used for animated GIFs.",
                  },
                ].map(({ icon: t, name: n, desc: a }) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "bg-zinc-800 border border-zinc-600 rounded-xl p-4",
                      children: [
                        e.jsxs("h3", {
                          className:
                            "font-semibold text-white mb-1 flex items-center gap-2 text-sm",
                          children: [
                            e.jsx("span", {
                              className: "text-lg",
                              children: t,
                            }),
                            " ",
                            n,
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-zinc-400 leading-relaxed",
                          children: a,
                        }),
                      ],
                    },
                    n,
                  ),
                ),
              }),
              e.jsx("div", {
                className: "p-4 bg-zinc-800 border border-zinc-600 rounded-xl",
                children: e.jsxs("p", {
                  className: "text-xs sm:text-sm text-zinc-300",
                  children: [
                    e.jsx("strong", {
                      className: "text-white",
                      children: "Quality guarantee:",
                    }),
                    " JPG and PNG files are embedded natively at full resolution. Other formats are converted via canvas with no visible quality loss.",
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("section", {
            className:
              "bg-zinc-900 border border-zinc-700 rounded-xl p-5 sm:p-6",
            children: [
              e.jsx("h2", {
                className: "text-xl sm:text-2xl font-bold text-white mb-4",
                children: "💡 Pro Tips for Best Results",
              }),
              e.jsx("ul", {
                className: "space-y-3",
                children: [
                  {
                    title: "Resize large images beforehand:",
                    body: "Images over 20 MB can slow conversion. Pre-resize for faster processing and smaller PDFs.",
                  },
                  {
                    title: "Use consistent image sizes:",
                    body: "Similar dimensions or aspect ratios create a more uniform, professional-looking PDF.",
                  },
                  {
                    title: "Name files sequentially:",
                    body: "Name files 001, 002, 003 before uploading so they appear in the correct order.",
                  },
                  {
                    title: "Compress after converting:",
                    body: "If the resulting PDF is too large for email, use our PDF Compressor tool to reduce file size.",
                  },
                ].map(({ title: t, body: n }) =>
                  e.jsxs(
                    "li",
                    {
                      className:
                        "flex gap-3 text-zinc-300 text-sm sm:text-base",
                      children: [
                        e.jsx("span", {
                          className: "text-zinc-500 font-bold shrink-0 mt-0.5",
                          children: "→",
                        }),
                        e.jsxs("span", {
                          children: [
                            e.jsx("strong", {
                              className: "text-white",
                              children: t,
                            }),
                            " ",
                            n,
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
                className: "text-xl sm:text-2xl font-bold text-white mb-3",
                children: "Related PDF Tools",
              }),
              e.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                children: [
                  {
                    href: "/pdf-to-jpg",
                    title: "PDF to JPG →",
                    desc: "Convert PDF pages back to high-quality images.",
                  },
                  {
                    href: "/compress-pdf",
                    title: "Compress PDF →",
                    desc: "Reduce your image-based PDF file size for easier sharing.",
                  },
                  {
                    href: "/merge-pdf",
                    title: "Merge PDFs →",
                    desc: "Combine your image PDF with other documents.",
                  },
                ].map(({ href: t, title: n, desc: a }) =>
                  e.jsxs(
                    "a",
                    {
                      href: t,
                      className:
                        "bg-zinc-900 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-800 rounded-xl p-4 transition-all group block",
                      children: [
                        e.jsx("h3", {
                          className:
                            "font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-zinc-200 transition-colors",
                          children: n,
                        }),
                        e.jsx("p", {
                          className: "text-xs sm:text-sm text-zinc-400",
                          children: a,
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
export { Fe as default };
