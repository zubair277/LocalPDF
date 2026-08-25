import { r as m, j as e } from "./react-vendor-Bc7KCos-.js";
const X = "ihatepdf-store",
  Ee = "ihatepdf_DB",
  ve = "ihatepdf_history",
  Te = (s) =>
    new Promise((r, n) => {
      const i = new FileReader();
      ((i.onload = () => r(i.result)), (i.onerror = n), i.readAsArrayBuffer(s));
    }),
  Ge = () =>
    new Promise((s, r) => {
      const n = indexedDB.open(Ee, 1);
      ((n.onupgradeneeded = (i) => {
        const x = i.target.result;
        x.objectStoreNames.contains(X) || x.createObjectStore(X);
      }),
        (n.onsuccess = () => s(n.result)),
        (n.onerror = () => r(n.error)));
    }),
  qe = async (s, r) => {
    const n = await Ge();
    return new Promise((i, x) => {
      const o = n.transaction(X, "readwrite");
      (o.objectStore(X).put(r, s),
        (o.oncomplete = () => i()),
        (o.onerror = () => x(o.error)));
    });
  },
  we = async (s) => {
    const r = JSON.parse(localStorage.getItem(ve) || "[]"),
      n = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await qe(`pdf_${n.id}`, s.bytes);
      } catch (i) {
        console.error("Failed to store PDF in IndexedDB:", i);
      }
    (r.unshift(n), localStorage.setItem(ve, JSON.stringify(r.slice(0, 50))));
  },
  je = (s, r, n) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, r, n), !0);
    } catch {}
    try {
      const i = new Blob([s], { type: n });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(i, r), !0);
      const x = URL.createObjectURL(i),
        o = document.createElement("a");
      return (
        (o.href = x),
        (o.download = r),
        o.setAttribute("download", r),
        (o.style.display = "none"),
        (o.style.position = "absolute"),
        (o.style.left = "-9999px"),
        document.body.appendChild(o),
        o.click(),
        setTimeout(() => {
          (document.body.removeChild(o), URL.revokeObjectURL(x));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const x = new Blob([s], { type: n }),
          o = URL.createObjectURL(x);
        return (
          window.open(o, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${r}`),
          setTimeout(() => URL.revokeObjectURL(o), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${r}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  Oe = () => {
    if (typeof window > "u") return !1;
    const s = window.navigator.userAgent,
      r = !!s.match(/iPad/i) || !!s.match(/iPhone/i),
      n = !!s.match(/WebKit/i);
    return r && n && !s.match(/CriOS/i);
  },
  Re = () =>
    Oe()
      ? e.jsxs("div", {
          className:
            "p-3 bg-blue-900/20 border border-blue-800 rounded-xl text-xs text-blue-300",
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
                  className: "font-semibold",
                  children: "Files app → Downloads",
                }),
                " folder",
              ],
            }),
          ],
        })
      : null,
  F = ({ children: s, className: r }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: r,
      children: s,
    }),
  Y = (s) =>
    e.jsxs(F, {
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
  ye = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  Pe = (s) =>
    e.jsxs(F, {
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
  We = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  Ue = (s) =>
    e.jsxs(F, {
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
  Le = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Je = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
        }),
        e.jsx("path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" }),
        e.jsx("path", { d: "M15 2v5h5" }),
      ],
    }),
  He = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  ze = (s) =>
    e.jsx(F, {
      ...s,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  _e = (s) =>
    e.jsxs(F, {
      ...s,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        e.jsx("path", {
          d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
        }),
      ],
    }),
  Ve = () => {
    const s =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ),
      r = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
        navigator.userAgent,
      ),
      n = window.screen.width,
      i = navigator.deviceMemory || 4;
    let x = "desktop",
      o = 150 * 1024 * 1024,
      P = 600,
      g = 300,
      I = 50,
      O = 100 * 1024 * 1024;
    return (
      s && !r && n < 768
        ? ((x = "mobile"),
          (o = 50 * 1024 * 1024),
          (P = 300),
          (g = 150),
          (I = 10),
          (O = 30 * 1024 * 1024))
        : r || (s && n >= 768)
          ? ((x = "tablet"),
            (o = 75 * 1024 * 1024),
            (P = 450),
            (g = 300),
            (I = 25),
            (O = 60 * 1024 * 1024))
          : i < 4 &&
            ((o = 100 * 1024 * 1024),
            (P = 450),
            (g = 300),
            (I = 30),
            (O = 75 * 1024 * 1024)),
      {
        deviceType: x,
        maxFileSize: o,
        maxDPI: P,
        recommendedDPI: g,
        maxPagesPerBatch: I,
        warningThreshold: O,
        deviceMemory: i,
        isMobile: x === "mobile",
        isTablet: x === "tablet",
      }
    );
  },
  Q = (s, r, n, i) => {
    const o = Math.pow(n, 2),
      P = i === "png" ? 1.5 : 1,
      g = r * 5242880 * o * P;
    return { estimated: g, withSafety: g * 1.5, perPage: 5242880 * o * P };
  },
  K = (s) => {
    if (s === 0) return "0 Bytes";
    const r = 1024,
      n = ["Bytes", "KB", "MB", "GB"],
      i = Math.floor(Math.log(s) / Math.log(r));
    return Math.round((s / Math.pow(r, i)) * 100) / 100 + " " + n[i];
  },
  it = ({ showNotification: s, showDownloadDialog: r }) => {
    const n = Ve(),
      [i, x] = m.useState(null),
      [o, P] = m.useState(null),
      [g, I] = m.useState(0),
      [O, Ne] = m.useState(!1),
      [Ye, Qe] = m.useState(null),
      [Ke, Z] = m.useState(!1),
      [Xe, ie] = m.useState(0),
      [Ze, re] = m.useState(0),
      [R, oe] = m.useState(95),
      [S, L] = m.useState(3),
      [ee, J] = m.useState(!1),
      [te, E] = m.useState(0),
      [D, Se] = m.useState("all"),
      [W, De] = m.useState(""),
      [et, le] = m.useState([]),
      [tt, ce] = m.useState(!1),
      [u, Ce] = m.useState("jpeg"),
      [C, de] = m.useState("custom"),
      [w, me] = m.useState(300),
      [xe, Fe] = m.useState(!1);
    m.useEffect(() => {}, []);
    const Me = Object.entries({
        web: {
          quality: 85,
          scale: 2,
          dpi: 150,
          label: "Web",
          desc: "Optimized for web/screen viewing",
          deviceSupport: ["mobile", "tablet", "desktop"],
        },
        print: {
          quality: 95,
          scale: 4.17,
          dpi: 300,
          label: "Print",
          desc: "Standard print resolution (300 DPI)",
          deviceSupport: ["mobile", "tablet", "desktop"],
        },
        professional: {
          quality: 98,
          scale: 6.94,
          dpi: 500,
          label: "Pro",
          desc: "High-end printing (500 DPI)",
          deviceSupport: ["tablet", "desktop"],
        },
        archival: {
          quality: 100,
          scale: 8.33,
          dpi: 600,
          label: "Archival",
          desc: "Maximum quality preservation (600 DPI)",
          deviceSupport: ["desktop"],
        },
      }).filter(
        ([t, a]) => a.deviceSupport.includes(n.deviceType) && a.dpi <= n.maxDPI,
      ),
      Ie = async (t) => {
        const a = t.target.files[0];
        if (a) {
          if (a.size > n.maxFileSize) {
            const l = K(n.maxFileSize),
              d = K(a.size);
            s(
              `File too large for ${n.deviceType} (${d}). Maximum: ${l}`,
              "error",
            );
            return;
          }
          a.size > n.warningThreshold && Ne(!0);
          try {
            const l = await Te(a),
              d = await window.pdfjsLib.getDocument({
                data: l,
                useSystemFonts: !0,
                disableFontFace: !1,
              }).promise;
            (x(a),
              P(d),
              I(d.numPages),
              le([]),
              ce(!1),
              s(`PDF loaded: ${d.numPages} pages`));
          } catch (l) {
            (console.error(l),
              s("Failed to load PDF. File may be corrupted.", "error"));
          }
        }
      },
      se = (t) => {
        if (!t.trim()) return [];
        const a = new Set(),
          l = t.split(",").map((d) => d.trim());
        for (const d of l)
          if (d.includes("-")) {
            const [h, b] = d.split("-").map((z) => parseInt(z.trim()));
            if (!isNaN(h) && !isNaN(b) && h <= b && h >= 1 && b <= g)
              for (let z = h; z <= b; z++) a.add(z);
          } else {
            const h = parseInt(d);
            !isNaN(h) && h >= 1 && h <= g && a.add(h);
          }
        return Array.from(a).sort((d, h) => d - h);
      },
      T = (t) => t / 72,
      he = (t, a) => {
        const d = t.width * a,
          h = t.height * a;
        return d > 16384 || h > 16384
          ? Math.min(16384 / t.width, 16384 / t.height) * 0.95
          : a;
      },
      pe = async (t, a) => {
        const l = t.getViewport({ scale: a }),
          d = document.createElement("canvas"),
          h = Math.min(window.devicePixelRatio || 1, 2),
          b = 16384;
        let z = Math.floor(l.width * h),
          c = Math.floor(l.height * h),
          f = h;
        ((z > b || c > b) &&
          ((f = Math.min(b / l.width, b / l.height)),
          (z = Math.floor(l.width * f)),
          (c = Math.floor(l.height * f))),
          (d.width = z),
          (d.height = c));
        const v = d.getContext("2d", { alpha: !1, willReadFrequently: !1 });
        if (!v) throw new Error("Failed to get canvas context");
        ((v.fillStyle = "white"),
          v.fillRect(0, 0, d.width, d.height),
          v.scale(f, f),
          (v.imageSmoothingEnabled = !0),
          (v.imageSmoothingQuality = "high"));
        const j = {
          canvasContext: v,
          viewport: l,
          intent: "print",
          enableWebGL: !1,
          renderInteractiveForms: !1,
        };
        try {
          await t.render(j).promise;
        } catch (N) {
          throw new Error(`Failed to render page: ${N.message}`);
        }
        return d;
      },
      Be = async () => {
        if (!o) return;
        let t = [];
        if (D === "all") t = Array.from({ length: g }, (c, f) => f + 1);
        else if (D === "first") t = [1];
        else if (D === "custom" && ((t = se(W)), t.length === 0)) {
          s("No valid pages selected", "error");
          return;
        }
        const a = C === "dpi" ? T(w) : S,
          l = Q(i.size, t.length, a, u),
          d = t.length > n.maxPagesPerBatch,
          h = l.withSafety / (1024 * 1024 * 1024),
          b = n.deviceMemory;
        if (
          h > b * 0.5 &&
          !window.confirm(`⚠️ Memory Warning

This conversion may use ~${h.toFixed(1)}GB of memory.
Your device has ~${b}GB available.

Recommendations:
• Reduce DPI/Scale (currently ${C === "dpi" ? w : Math.round(a * 72)} DPI)
• Convert fewer pages at once
• Use JPEG instead of PNG

Continue anyway? This may cause browser slowdown or crashes.`)
        )
          return;
        const z = async (c, f) => {
          (J(!0), E(0));
          const v = n.maxPagesPerBatch,
            j = [];
          for (let p = 0; p < c.length; p += v) j.push(c.slice(p, p + v));
          let N = 0,
            B = 0;
          const k = c.length;
          try {
            for (let p = 0; p < j.length; p++) {
              ie(p + 1);
              const $ = j[p];
              s(`Processing batch ${p + 1}/${j.length} (${$.length} pages)...`);
              for (const y of $)
                try {
                  const A = await o.getPage(y),
                    H = A.getViewport({ scale: 1 }),
                    _ = he(H, f),
                    M = await pe(A, _);
                  if (!M || M.width === 0 || M.height === 0)
                    throw new Error(`Invalid canvas for page ${y}`);
                  const V = await new Promise((ne, ue) => {
                      const fe = (be) => {
                        be
                          ? ne(be)
                          : ue(new Error("Canvas toBlob returned null"));
                      };
                      (u === "png"
                        ? M.toBlob(fe, "image/png")
                        : M.toBlob(fe, "image/jpeg", R / 100),
                        setTimeout(() => ue(new Error("Timeout")), 3e4));
                    }),
                    ge = u === "png" ? "png" : "jpg",
                    G = `${i.name.replace(".pdf", "")}_page_${y}.${ge}`,
                    U = await V.arrayBuffer(),
                    q = new Uint8Array(U);
                  (je(q, G, u === "png" ? "image/png" : "image/jpeg") !== !1 &&
                    (we({
                      name: G,
                      tool: "pdftojpg",
                      size: V.size,
                      bytes: null,
                    }),
                    N++,
                    (B += V.size)),
                    (M.width = 0),
                    (M.height = 0),
                    E(Math.round((N / k) * 100)),
                    await new Promise((ne) => setTimeout(ne, 100)));
                } catch (A) {
                  (console.error(`Error converting page ${y}:`, A),
                    s(`Skipped page ${y}: ${A.message}`, "error"));
                }
              p < j.length - 1 &&
                (s(`Batch ${p + 1} complete. Preparing next batch...`),
                await new Promise((y) => setTimeout(y, 2e3)),
                window.gc && window.gc());
            }
            N === k
              ? (r(
                  `${k} ${u === "png" ? "PNG" : "JPG"} image${k > 1 ? "s" : ""}`,
                  B,
                ),
                s(
                  `✅ Successfully converted all ${k} pages in ${j.length} batches!`,
                ))
              : s(`Converted ${N} of ${k} pages. Check downloads.`, "error");
          } catch (p) {
            (console.error("Batch processing error:", p),
              s(`Batch processing failed: ${p.message}`, "error"));
          } finally {
            (J(!1), E(0), Z(!1), ie(0), re(0));
          }
        };
        if (d) {
          const c = Math.ceil(t.length / n.maxPagesPerBatch);
          if (
            !window.confirm(`📦 Batch Processing Recommended

Converting ${t.length} pages in ${c} batches of ~${n.maxPagesPerBatch} pages.

This prevents memory issues and browser crashes.

Continue with batch processing?`)
          )
            return;
          (Z(!0), re(c), await z(t, a));
          return;
        }
        (J(!0), E(0), Z(!1));
        try {
          const c = t.length;
          let f = 0,
            v = 0;
          const j = u === "png" ? "PNG" : "JPG";
          s(`Converting ${c} page${c > 1 ? "s" : ""} to ${j}...`);
          for (const N of t)
            try {
              const B = await o.getPage(N),
                k = B.getViewport({ scale: 1 }),
                p = he(k, a),
                $ = await pe(B, p),
                y = await new Promise((G, U) => {
                  try {
                    const q = (ae) => {
                      ae ? G(ae) : U(new Error("Canvas toBlob returned null"));
                    };
                    (u === "png"
                      ? $.toBlob(q, "image/png")
                      : $.toBlob(q, "image/jpeg", R / 100),
                      setTimeout(
                        () => U(new Error("Canvas conversion timeout")),
                        3e4,
                      ));
                  } catch (q) {
                    U(q);
                  }
                });
              if (!y) throw new Error("Failed to create image blob");
              const A = u === "png" ? "png" : "jpg",
                H = `${i.name.replace(".pdf", "")}_page_${N}.${A}`,
                _ = await y.arrayBuffer();
              if (!_) throw new Error("Failed to convert blob to array buffer");
              const M = new Uint8Array(_);
              (je(M, H, u === "png" ? "image/png" : "image/jpeg") !== !1 &&
                (we({ name: H, tool: "pdftojpg", size: y.size, bytes: null }),
                f++,
                (v += y.size)),
                E(Math.round((f / c) * 100)),
                ($.width = 0),
                ($.height = 0),
                f < c && (await new Promise((G) => setTimeout(G, 150))));
            } catch (B) {
              (console.error(`Error converting page ${N}:`, B),
                s(`Failed to convert page ${N}: ${B.message}`, "error"));
              continue;
            }
          f === c
            ? (r(`${c} ${j} image${c > 1 ? "s" : ""}`, v),
              s(`Successfully converted ${c} page${c > 1 ? "s" : ""} to ${j}`))
            : s(
                `Converted ${f} of ${c} pages. Check your downloads folder.`,
                "error",
              );
        } catch (c) {
          (console.error(c),
            s("Conversion failed. Please try again.", "error"));
        } finally {
          (J(!1), E(0));
        }
      },
      ke = (t) => {
        (oe(t.quality), L(t.scale), me(t.dpi), de("custom"));
      },
      $e = (t) => {
        (de(t), t === "dpi" && L(T(w)));
      },
      Ae = (t) => {
        (me(t), C === "dpi" && L(T(t)));
      };
    return e.jsxs("article", {
      className: "w-full max-w-2xl mx-auto space-y-5 px-3 sm:px-4 md:px-0",
      itemScope: !0,
      itemType: "https://schema.org/SoftwareApplication",
      children: [
        e.jsx("meta", {
          itemProp: "name",
          content: "PDF to JPG Converter - ihatepdf",
        }),
        e.jsx("meta", {
          itemProp: "applicationCategory",
          content: "BusinessApplication",
        }),
        e.jsx("meta", {
          itemProp: "operatingSystem",
          content: "Any (Web-based)",
        }),
        e.jsx("meta", {
          itemProp: "offers",
          itemScope: !0,
          itemType: "https://schema.org/Offer",
        }),
        e.jsx("meta", { itemProp: "price", content: "0" }),
        e.jsx("meta", { itemProp: "priceCurrency", content: "USD" }),
        !i &&
          e.jsx("div", {
            className: "text-center mb-4",
            children: e.jsx("h1", {
              className:
                "text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2",
              children: "PDF to JPG Converter Free",
            }),
          }),
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-lg",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 mb-5",
              children: [
                e.jsx("div", {
                  className:
                    "w-8 h-8 sm:w-9 sm:h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                  children: e.jsx(Y, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 text-zinc-300",
                  }),
                }),
                e.jsx("h2", {
                  className:
                    "text-base sm:text-lg font-semibold text-white leading-tight",
                  children: i
                    ? "Convert PDF Pages to Images"
                    : "PDF to Image Converter",
                }),
              ],
            }),
            i
              ? e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800",
                      children: [
                        e.jsx("div", {
                          className: "bg-zinc-800 p-2 rounded-lg flex-shrink-0",
                          children: e.jsx(Pe, {
                            className: "w-4 h-4 text-zinc-300",
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-zinc-200 font-medium truncate text-sm",
                              children: i.name,
                            }),
                            e.jsxs("p", {
                              className: "text-zinc-500 text-xs mt-0.5",
                              children: [
                                g,
                                " page",
                                g !== 1 ? "s" : "",
                                " •",
                                " ",
                                (i.size / 1024 / 1024).toFixed(2),
                                " MB",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (x(null), P(null), I(0), le([]), ce(!1));
                          },
                          className:
                            "text-zinc-500 hover:text-white transition-colors p-1.5 flex-shrink-0 rounded-lg hover:bg-zinc-800 active:bg-zinc-700",
                          title: "Remove file",
                          children: e.jsx(Le, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "block text-xs sm:text-sm font-medium text-zinc-400 mb-2.5",
                          children: "Output Format",
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 gap-2 sm:gap-3",
                          children: [
                            {
                              val: "jpeg",
                              label: "JPEG",
                              desc: "Smaller files • Best for photos",
                            },
                            {
                              val: "png",
                              label: "PNG",
                              desc: "Lossless • Perfect quality",
                            },
                          ].map(({ val: t, label: a, desc: l }) =>
                            e.jsxs(
                              "button",
                              {
                                onClick: () => Ce(t),
                                className: `p-3 sm:p-4 rounded-xl border text-left transition-all active:scale-[0.97] ${u === t ? "bg-zinc-700 border-zinc-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: [
                                  e.jsx("div", {
                                    className: "font-semibold text-sm mb-0.5",
                                    children: a,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] sm:text-xs opacity-70 leading-relaxed",
                                    children: l,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("label", {
                          className:
                            "block text-xs sm:text-sm font-medium text-zinc-400 mb-2.5",
                          children: "Pages to Convert",
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-3 gap-2 mb-3",
                          children: [
                            { val: "all", label: "All Pages" },
                            { val: "first", label: "First Page" },
                            { val: "custom", label: "Custom" },
                          ].map(({ val: t, label: a }) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => Se(t),
                                className: `py-2.5 px-2 rounded-xl border text-center transition-all active:scale-[0.97] ${D === t ? "bg-zinc-700 border-zinc-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: e.jsx("div", {
                                  className:
                                    "font-medium text-xs sm:text-sm leading-tight",
                                  children: a,
                                }),
                              },
                              t,
                            ),
                          ),
                        }),
                        D === "custom" &&
                          e.jsxs("div", {
                            children: [
                              e.jsx("input", {
                                type: "text",
                                value: W,
                                onChange: (t) => De(t.target.value),
                                placeholder: "e.g., 1-5, 7, 10-12",
                                className:
                                  "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-3 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-600 text-sm",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-zinc-600 mt-1.5",
                                children:
                                  "Enter page numbers or ranges (e.g., 1-5, 7, 10-12)",
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "border border-zinc-800 rounded-xl overflow-hidden",
                      children: [
                        e.jsxs("button", {
                          onClick: () => Fe((t) => !t),
                          className:
                            "w-full flex items-center justify-between px-4 py-3.5 bg-zinc-950 hover:bg-zinc-900 active:bg-zinc-800 transition-colors",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-2 text-zinc-400",
                              children: [
                                e.jsx(_e, {
                                  className: "w-4 h-4 flex-shrink-0",
                                }),
                                e.jsx("span", {
                                  className: "font-medium text-sm",
                                  children: "Advanced Settings",
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-zinc-600 text-xs hidden xs:inline",
                                  children: [
                                    C === "dpi"
                                      ? `${w} DPI`
                                      : `${S.toFixed(1)}x scale`,
                                    u === "jpeg" ? ` • ${R}%` : "",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(ze, {
                              className: `w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-200 ${xe ? "rotate-180" : ""}`,
                            }),
                          ],
                        }),
                        xe &&
                          e.jsxs("div", {
                            className: "p-4 space-y-5 border-t border-zinc-800",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-xs sm:text-sm font-medium text-zinc-400 mb-2.5",
                                    children: "Quality Preset",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                    children: Me.map(([t, a]) =>
                                      e.jsxs(
                                        "button",
                                        {
                                          onClick: () => ke(a),
                                          className: `p-2.5 sm:p-3 rounded-xl border text-left transition-all active:scale-[0.97] ${Math.abs(w - a.dpi) < 10 ? "bg-zinc-700 border-zinc-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "font-medium text-xs sm:text-sm mb-0.5",
                                              children: a.label,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "text-[10px] font-mono opacity-60",
                                              children: [a.dpi, " DPI"],
                                            }),
                                          ],
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "block text-xs sm:text-sm font-medium text-zinc-400 mb-2.5",
                                    children: "Resolution Control",
                                  }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-2 gap-2 mb-3",
                                    children: [
                                      { val: "custom", label: "Scale Mode" },
                                      { val: "dpi", label: "DPI Mode" },
                                    ].map(({ val: t, label: a }) =>
                                      e.jsx(
                                        "button",
                                        {
                                          onClick: () => $e(t),
                                          className: `py-2.5 px-3 rounded-xl border text-center transition-all active:scale-[0.97] ${C === t ? "bg-zinc-700 border-zinc-500 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                          children: e.jsx("div", {
                                            className:
                                              "font-medium text-xs sm:text-sm",
                                            children: a,
                                          }),
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                  C === "dpi"
                                    ? e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "block text-xs sm:text-sm font-medium text-zinc-400 mb-2",
                                            children: [
                                              "Target DPI: ",
                                              w,
                                              " ",
                                              e.jsxs("span", {
                                                className: "text-zinc-600",
                                                children: [
                                                  "(Scale: ",
                                                  S.toFixed(2),
                                                  "x)",
                                                ],
                                              }),
                                              w > n.recommendedDPI &&
                                                e.jsx("span", {
                                                  className:
                                                    "ml-1 text-xs text-zinc-400",
                                                  children: "⚠️ High",
                                                }),
                                            ],
                                          }),
                                          e.jsx("input", {
                                            type: "range",
                                            min: "72",
                                            max: n.maxDPI,
                                            step: "1",
                                            value: Math.min(w, n.maxDPI),
                                            onChange: (t) =>
                                              Ae(parseInt(t.target.value)),
                                            className:
                                              "w-full accent-zinc-400 h-5",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex justify-between text-xs text-zinc-600 mt-1",
                                            children: [
                                              e.jsx("span", { children: "72" }),
                                              e.jsx("span", {
                                                children: "150",
                                              }),
                                              e.jsx("span", {
                                                children: "300",
                                              }),
                                              e.jsx("span", {
                                                children: "600",
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : e.jsxs("div", {
                                        children: [
                                          e.jsxs("label", {
                                            className:
                                              "block text-xs sm:text-sm font-medium text-zinc-400 mb-2",
                                            children: [
                                              "Scale: ",
                                              S.toFixed(2),
                                              "x",
                                              " ",
                                              e.jsxs("span", {
                                                className: "text-zinc-600",
                                                children: [
                                                  "(≈",
                                                  Math.round(S * 72),
                                                  " DPI)",
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsx("input", {
                                            type: "range",
                                            min: "1",
                                            max: "10",
                                            step: "0.1",
                                            value: S,
                                            onChange: (t) =>
                                              L(parseFloat(t.target.value)),
                                            className:
                                              "w-full accent-zinc-400 h-5",
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs text-zinc-600 mt-1",
                                            children:
                                              "Higher = sharper images, larger file sizes",
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                              u === "jpeg" &&
                                e.jsxs("div", {
                                  children: [
                                    e.jsxs("label", {
                                      className:
                                        "block text-xs sm:text-sm font-medium text-zinc-400 mb-2",
                                      children: ["JPEG Quality: ", R, "%"],
                                    }),
                                    e.jsx("input", {
                                      type: "range",
                                      min: "60",
                                      max: "100",
                                      value: R,
                                      onChange: (t) =>
                                        oe(parseInt(t.target.value)),
                                      className: "w-full accent-zinc-400 h-5",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between text-xs text-zinc-600 mt-1",
                                      children: [
                                        e.jsx("span", {
                                          children: "60% (Smaller)",
                                        }),
                                        e.jsx("span", { children: "85%" }),
                                        e.jsx("span", {
                                          children: "100% (Max)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              i &&
                                g > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "bg-zinc-950 border border-zinc-800 rounded-xl p-3",
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-xs font-medium text-zinc-500 mb-2",
                                      children: "Estimated Resource Usage",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex justify-between xs:block",
                                          children: [
                                            e.jsx("span", {
                                              className: "text-zinc-600",
                                              children: "Memory / page:",
                                            }),
                                            e.jsxs("span", {
                                              className:
                                                "text-zinc-300 ml-2 font-mono",
                                              children: [
                                                "~",
                                                K(
                                                  Q(
                                                    i.size,
                                                    1,
                                                    C === "dpi" ? T(w) : S,
                                                    u,
                                                  ).perPage,
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex justify-between xs:block",
                                          children: [
                                            e.jsx("span", {
                                              className: "text-zinc-600",
                                              children: "Total:",
                                            }),
                                            e.jsxs("span", {
                                              className:
                                                "text-zinc-300 ml-2 font-mono",
                                              children: [
                                                "~",
                                                K(
                                                  Q(
                                                    i.size,
                                                    D === "all"
                                                      ? g
                                                      : D === "first"
                                                        ? 1
                                                        : se(W).length,
                                                    C === "dpi" ? T(w) : S,
                                                    u,
                                                  ).withSafety,
                                                ),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Q(
                                      i.size,
                                      D === "all"
                                        ? g
                                        : D === "first"
                                          ? 1
                                          : se(W).length,
                                      C === "dpi" ? T(w) : S,
                                      u,
                                    ).withSafety >
                                      n.deviceMemory *
                                        0.5 *
                                        1024 *
                                        1024 *
                                        1024 &&
                                      e.jsx("p", {
                                        className: "text-xs text-zinc-400 mt-2",
                                        children:
                                          "⚠️ High memory usage. Consider reducing DPI or batch size.",
                                      }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                    ee &&
                      te > 0 &&
                      e.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs sm:text-sm",
                            children: [
                              e.jsxs("span", {
                                className: "text-zinc-400",
                                children: [
                                  "Converting at",
                                  " ",
                                  C === "dpi"
                                    ? `${w} DPI`
                                    : `${S.toFixed(2)}x scale`,
                                  "...",
                                ],
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-zinc-400 font-mono tabular-nums",
                                children: [te, "%"],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden",
                            children: e.jsx("div", {
                              className:
                                "bg-zinc-400 h-full transition-all duration-300 ease-out",
                              style: { width: `${te}%` },
                            }),
                          }),
                        ],
                      }),
                    e.jsx(Re, {}),
                    e.jsx("button", {
                      onClick: Be,
                      disabled: ee || (D === "custom" && !W.trim()),
                      type: "button",
                      className:
                        "w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 touch-manipulation active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base",
                      children: ee
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                              }),
                              "Converting...",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(Y, { className: "w-4 h-4" }),
                              "Convert to ",
                              u === "png" ? "PNG" : "JPG",
                            ],
                          }),
                    }),
                  ],
                })
              : e.jsx("div", {
                  children: e.jsxs("div", {
                    className:
                      "border-2 border-dashed border-zinc-800 rounded-xl p-6 sm:p-10 text-center hover:bg-zinc-800/30 hover:border-zinc-700 transition-all duration-200 active:bg-zinc-800/40",
                    children: [
                      e.jsx("input", {
                        type: "file",
                        accept: "application/pdf",
                        onChange: Ie,
                        className: "hidden",
                        id: "pdftojpg-upload",
                      }),
                      e.jsxs("label", {
                        htmlFor: "pdftojpg-upload",
                        className: "cursor-pointer block",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 sm:w-14 sm:h-14 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-3 text-zinc-400",
                            children: e.jsx(ye, {
                              className: "w-6 h-6 sm:w-7 sm:h-7",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-zinc-200 font-semibold text-sm sm:text-base block mb-1.5",
                            children: "Select PDF File",
                          }),
                          e.jsx("span", {
                            className:
                              "text-zinc-500 text-xs sm:text-sm leading-relaxed",
                            children:
                              "Professional-grade conversion • Up to 600 DPI • Lossless PNG support",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          ],
        }),
        !i &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs("section", {
                children: [
                  e.jsx("h2", {
                    className:
                      "text-lg sm:text-xl md:text-2xl font-bold text-white mb-3",
                    children: "Why Use Our PDF to Image Converter?",
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                    children: [
                      {
                        icon: Y,
                        title: "Up to 600 DPI Quality",
                        desc: "Professional-grade conversion with resolution up to 600 DPI. Perfect for printing, archiving, and professional use.",
                      },
                      {
                        icon: We,
                        title: "JPEG & PNG Support",
                        desc: "Choose between JPEG (smaller files, adjustable quality) or PNG (lossless, perfect quality) formats.",
                      },
                      {
                        icon: Je,
                        title: "Batch Convert All Pages",
                        desc: "Convert entire PDFs to images at once, or select specific pages. Smart batch processing prevents memory issues.",
                      },
                      {
                        icon: Ue,
                        title: "100% Private & Secure",
                        desc: "All processing happens in your browser. Your PDF never leaves your device - guaranteed privacy.",
                      },
                    ].map(({ icon: t, title: a, desc: l }) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 sm:p-4 hover:border-zinc-700 transition-colors",
                          children: e.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-8 h-8 sm:w-9 sm:h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                                children: e.jsx(t, {
                                  className: "w-4 h-4 text-zinc-300",
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "font-semibold text-white text-xs sm:text-sm mb-1",
                                    children: a,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-zinc-400 leading-relaxed",
                                    children: l,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        a,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h2", {
                    className:
                      "text-lg sm:text-xl md:text-2xl font-bold text-white mb-3",
                    children: "How to Convert PDF to JPG or PNG",
                  }),
                  e.jsx("div", {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6",
                    children: e.jsx("ol", {
                      className: "space-y-4",
                      children: [
                        {
                          title: "Upload Your PDF",
                          desc: 'Click "Select PDF File" and choose the PDF you want to convert to images. Supports any PDF file.',
                        },
                        {
                          title: "Choose Format & Quality",
                          desc: "Select JPEG or PNG format. Choose a quality preset (Web, Print, Professional, Archival) or customize DPI manually.",
                        },
                        {
                          title: "Select Pages",
                          desc: "Convert all pages, first page only, or enter custom page ranges (e.g., 1-5, 7, 10-12).",
                        },
                        {
                          title: "Download Images",
                          desc: 'Click "Convert to JPG" or "Convert to PNG" and download your high-quality images. Each page becomes a separate image file.',
                        },
                      ].map(({ title: t, desc: a }, l) =>
                        e.jsxs(
                          "li",
                          {
                            className: "flex gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-6 h-6 sm:w-7 sm:h-7 bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-xs",
                                children: l + 1,
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("h3", {
                                    className:
                                      "font-semibold text-white text-xs sm:text-sm mb-0.5",
                                    children: t,
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
                          l,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h2", {
                    className:
                      "text-lg sm:text-xl md:text-2xl font-bold text-white mb-3",
                    children: "Common Use Cases",
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-2.5",
                    children: [
                      {
                        icon: Y,
                        title: "Web & Social Media",
                        desc: "Convert PDF pages to JPG for sharing on social media, websites, or email. Optimized web quality preset.",
                      },
                      {
                        icon: Pe,
                        title: "Printing & Publishing",
                        desc: "300 DPI print quality perfect for brochures, posters, and professional printing projects.",
                      },
                      {
                        icon: He,
                        title: "Archiving & Preservation",
                        desc: "600 DPI PNG for archival purposes, ensuring maximum quality preservation for important documents.",
                      },
                    ].map(({ icon: t, title: a, desc: l }) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 sm:p-4 hover:border-zinc-700 transition-colors",
                          children: [
                            e.jsxs("h3", {
                              className:
                                "font-semibold text-white text-xs sm:text-sm mb-1.5 flex items-center gap-2",
                              children: [
                                e.jsx(t, {
                                  className:
                                    "w-4 h-4 text-zinc-400 flex-shrink-0",
                                }),
                                a,
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "text-xs text-zinc-400 leading-relaxed",
                              children: l,
                            }),
                          ],
                        },
                        a,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h2", {
                    className:
                      "text-lg sm:text-xl md:text-2xl font-bold text-white mb-3",
                    children: "Frequently Asked Questions",
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children: [
                      {
                        q: "What's the difference between JPEG and PNG?",
                        a: "JPEG uses lossy compression, creating smaller files with adjustable quality (60-100%). Best for photos and images where some quality loss is acceptable. PNG uses lossless compression, preserving perfect quality but creating larger files. Best for documents, text, diagrams, or when you need exact reproduction.",
                      },
                      {
                        q: "What DPI should I use for different purposes?",
                        a: "72-150 DPI: Perfect for web, social media, and screen viewing. Small file sizes, fast loading. 300 DPI: Standard for professional printing, business cards, brochures. 500-600 DPI: High-end printing, archival storage, large format printing, or when maximum detail is essential.",
                      },
                      {
                        q: "Can I convert specific pages instead of the entire PDF?",
                        a: 'Yes! You can convert all pages, just the first page, or enter custom page ranges. Use the "Custom Range" option and enter page numbers like "1-5, 7, 10-12" to convert specific pages. This saves time and reduces file downloads.',
                      },
                      {
                        q: "What happens to large PDFs? Will my browser crash?",
                        a: "Our tool includes intelligent batch processing to prevent crashes. Large PDFs are automatically split into smaller batches with memory management between batches. You'll see warnings if a conversion might use excessive memory, with recommendations to reduce DPI or convert fewer pages at once.",
                      },
                      {
                        q: "Will converted images look the same as the PDF?",
                        a: "Yes! At 300 DPI or higher, images will look identical to the PDF when printed or viewed at normal sizes. The tool uses high-quality rendering with anti-aliasing and device pixel ratio optimization for crisp results on all displays.",
                      },
                      {
                        q: "Is there a file size limit for PDFs?",
                        a: "The limit depends on your device's memory. Desktop computers typically handle PDFs up to 150MB, tablets up to 75MB, and smartphones up to 50MB. For best performance, we recommend files under 50MB.",
                      },
                      {
                        q: "Are my PDF files uploaded to your servers?",
                        a: "No! All PDF to image conversion happens locally in your web browser using JavaScript and Canvas API. Your PDF files never leave your device, and we cannot see or access your documents. Works completely offline after initial page load.",
                      },
                    ].map(({ q: t, a }, l) =>
                      e.jsxs(
                        "details",
                        {
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group",
                          children: [
                            e.jsxs("summary", {
                              className:
                                "px-4 py-3.5 cursor-pointer font-semibold text-white text-xs sm:text-sm hover:bg-zinc-800 active:bg-zinc-800 transition-colors flex items-center justify-between gap-3 list-none",
                              children: [
                                e.jsx("span", {
                                  className: "leading-snug",
                                  children: t,
                                }),
                                e.jsx(ze, {
                                  className:
                                    "w-4 h-4 text-zinc-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200",
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "px-4 pb-4 pt-3 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800",
                              children: a,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("section", {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 text-center",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-base sm:text-lg md:text-xl font-bold text-white mb-1.5",
                    children: "Ready to Convert PDF to Images?",
                  }),
                  e.jsx("p", {
                    className: "text-zinc-400 mb-4 text-xs sm:text-sm",
                    children:
                      "Professional-grade conversion up to 600 DPI. Free and private.",
                  }),
                  e.jsxs("label", {
                    htmlFor: "pdftojpg-upload",
                    className:
                      "inline-flex items-center gap-2 px-5 py-3 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 text-white rounded-xl font-semibold cursor-pointer transition-colors text-sm touch-manipulation",
                    children: [
                      e.jsx(ye, { className: "w-4 h-4" }),
                      "Get Started - Select PDF",
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  };
export { it as default };
