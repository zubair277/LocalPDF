import { r as c, j as e, e as Le } from "./react-vendor-Bc7KCos-.js";
const se = "ihatepdf-store",
  Ae = "ihatepdf_DB",
  ke = "ihatepdf_history",
  Pe = (t) =>
    new Promise((o, n) => {
      const h = new FileReader();
      ((h.onload = () => o(h.result)), (h.onerror = n), h.readAsArrayBuffer(t));
    }),
  Ee = () =>
    new Promise((t, o) => {
      const n = indexedDB.open(Ae, 1);
      ((n.onupgradeneeded = (h) => {
        const x = h.target.result;
        x.objectStoreNames.contains(se) || x.createObjectStore(se);
      }),
        (n.onsuccess = () => t(n.result)),
        (n.onerror = () => o(n.error)));
    }),
  Ie = async (t, o) => {
    const n = await Ee();
    return new Promise((h, x) => {
      const p = n.transaction(se, "readwrite");
      (p.objectStore(se).put(o, t),
        (p.oncomplete = h),
        (p.onerror = () => x(p.error)));
    });
  },
  Te = async (t) => {
    const o = JSON.parse(localStorage.getItem(ke) || "[]"),
      n = {
        id: Date.now(),
        name: t.name,
        tool: t.tool,
        timestamp: Date.now(),
        size: t.size,
      };
    if (t.bytes)
      try {
        await Ie(`pdf_${n.id}`, t.bytes);
      } catch {}
    (o.unshift(n), localStorage.setItem(ke, JSON.stringify(o.slice(0, 50))));
  },
  Be = (t, o, n) => {
    try {
      if (typeof window.download == "function")
        return (window.download(t, o, n), !0);
    } catch {}
    try {
      const h = new Blob([t], { type: n });
      if (window.navigator?.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(h, o), !0);
      const x = URL.createObjectURL(h),
        p = document.createElement("a");
      return (
        (p.href = x),
        (p.download = o),
        (p.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(p),
        p.click(),
        setTimeout(() => {
          (document.body.removeChild(p), URL.revokeObjectURL(x));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const h = URL.createObjectURL(new Blob([t], { type: n }));
        return (
          window.open(h, "_blank") ||
            alert(`Download blocked.

File: ${o}`),
          setTimeout(() => URL.revokeObjectURL(h), 5e3),
          !1
        );
      } catch {
        return (alert(`Unable to download ${o}.`), !1);
      }
    }
  },
  xe = () => {
    if (typeof window > "u") return !1;
    const t = window.navigator.userAgent;
    return (
      !!t.match(/iPad|iPhone/i) && !!t.match(/WebKit/i) && !t.match(/CriOS/i)
    );
  },
  M = ({ children: t, className: o }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: o,
      children: t,
    }),
  _ = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }),
        e.jsx("path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }),
      ],
    }),
  J = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("polyline", { points: "15 3 21 3 21 9" }),
        e.jsx("polyline", { points: "9 21 3 21 3 15" }),
        e.jsx("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
        e.jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" }),
      ],
    }),
  Oe = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  Se = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      ],
    }),
  he = (t) =>
    e.jsxs(M, {
      ...t,
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
  $e = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  He = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Ue = (t) =>
    e.jsx(M, {
      ...t,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  me = (t) =>
    e.jsx(M, {
      ...t,
      children: e.jsx("polyline", { points: "15 18 9 12 15 6" }),
    }),
  We = (t) =>
    e.jsx(M, {
      ...t,
      children: e.jsx("polyline", { points: "9 18 15 12 9 6" }),
    }),
  _e = (t) =>
    e.jsxs(M, {
      ...t,
      children: [
        e.jsx("polyline", { points: "1 4 1 10 7 10" }),
        e.jsx("path", { d: "M3.51 15a9 9 0 1 0 .49-3.08" }),
      ],
    }),
  Me = ({ checked: t, onChange: o }) =>
    e.jsx("button", {
      type: "button",
      role: "switch",
      "aria-checked": t,
      onClick: () => o(!t),
      className: `relative flex-shrink-0 w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${t ? "bg-white" : "bg-zinc-700"}`,
      children: e.jsx("span", {
        className: `absolute top-0.5 w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${t ? "translate-x-5 bg-zinc-900" : "translate-x-0.5 bg-zinc-400"}`,
      }),
    }),
  I = ({ label: t, value: o, max: n = 40, onChange: h }) =>
    e.jsxs("div", {
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between mb-1.5",
          children: [
            e.jsx("span", {
              className: "text-[11px] text-zinc-500",
              children: t,
            }),
            e.jsxs("span", {
              className:
                "text-[11px] text-zinc-300 font-mono tabular-nums w-6 text-right",
              children: [o, "%"],
            }),
          ],
        }),
        e.jsx("input", {
          type: "range",
          min: 0,
          max: n,
          value: o,
          onChange: (x) => h(parseInt(x.target.value)),
          className: "w-full h-1 rounded-full appearance-none cursor-pointer",
          style: {
            accentColor: "white",
            background: `linear-gradient(to right, white ${(o / n) * 100}%, #3f3f46 ${(o / n) * 100}%)`,
          },
        }),
      ],
    }),
  T = 0.05,
  Ye = ({ cropRect: t, onCropChange: o, canvasW: n, canvasH: h }) => {
    const x = c.useRef(null),
      p = c.useRef(null),
      u = (l, a) => l * a,
      H = (l, a) => {
        const r = a.getBoundingClientRect(),
          d = l.touches ? l.touches[0].clientX : l.clientX,
          w = l.touches ? l.touches[0].clientY : l.clientY;
        return { fx: (d - r.left) / r.width, fy: (w - r.top) / r.height };
      },
      R = (l) => {
        const { x: a, y: r, w: d, h: w } = l;
        return {
          nw: [a, r],
          n: [a + d / 2, r],
          ne: [a + d, r],
          w: [a, r + w / 2],
          e: [a + d, r + w / 2],
          sw: [a, r + w],
          s: [a + d / 2, r + w],
          se: [a + d, r + w],
        };
      },
      Y = 0.04,
      k = (l, a) => {
        for (const [z, [g, v]] of Object.entries(R(t)))
          if (Math.abs(l - g) < Y && Math.abs(a - v) < Y)
            return { type: "handle", name: z };
        const { x: r, y: d, w, h: F } = t;
        return l > r && l < r + w && a > d && a < d + F
          ? { type: "move" }
          : null;
      },
      V = {
        nw: "nw-resize",
        n: "n-resize",
        ne: "ne-resize",
        w: "w-resize",
        e: "e-resize",
        sw: "sw-resize",
        s: "s-resize",
        se: "se-resize",
      },
      U = (l) => {
        l.preventDefault();
        const { fx: a, fy: r } = H(l, x.current),
          d = k(a, r);
        p.current = d
          ? { ...d, sfx: a, sfy: r, orig: { ...t } }
          : { type: "new", sfx: a, sfy: r };
      },
      B = c.useCallback(
        (l) => {
          if (!p.current || (l.preventDefault(), !x.current)) return;
          const { fx: a, fy: r } = H(l, x.current),
            d = p.current,
            w = a - d.sfx,
            F = r - d.sfy;
          let { x: z, y: g, w: v, h: O } = d.orig || t,
            y = z,
            N = g,
            P = v,
            $ = O;
          if (d.type === "new")
            ((y = Math.min(d.sfx, a)),
              (N = Math.min(d.sfy, r)),
              (P = Math.abs(a - d.sfx)),
              ($ = Math.abs(r - d.sfy)));
          else if (d.type === "move")
            ((y = Math.max(0, Math.min(1 - v, z + w))),
              (N = Math.max(0, Math.min(1 - O, g + F))));
          else {
            const b = d.name;
            (b.includes("w") &&
              ((y = Math.min(z + v - T, z + w)), (P = v - (y - z))),
              b.includes("e") && (P = Math.max(T, v + w)),
              b.includes("n") &&
                ((N = Math.min(g + O - T, g + F)), ($ = O - (N - g))),
              b.includes("s") && ($ = Math.max(T, O + F)));
          }
          ((y = Math.max(0, y)),
            (N = Math.max(0, N)),
            y + P > 1 && (P = 1 - y),
            N + $ > 1 && ($ = 1 - N),
            o({ x: y, y: N, w: P, h: $ }));
        },
        [t, o],
      ),
      L = c.useCallback(() => {
        p.current = null;
      }, []);
    c.useEffect(
      () => (
        window.addEventListener("mousemove", B, { passive: !1 }),
        window.addEventListener("mouseup", L),
        window.addEventListener("touchmove", B, { passive: !1 }),
        window.addEventListener("touchend", L),
        () => {
          (window.removeEventListener("mousemove", B),
            window.removeEventListener("mouseup", L),
            window.removeEventListener("touchmove", B),
            window.removeEventListener("touchend", L));
        }
      ),
      [B, L],
    );
    const { x: ne, y: G, w: ie, h: Q } = t,
      q = u(ne, n),
      D = u(G, h),
      Z = u(ie, n),
      A = u(Q, h),
      W = 9;
    return e.jsxs("div", {
      ref: x,
      className: "absolute inset-0 select-none",
      style: { cursor: "crosshair", touchAction: "none" },
      onMouseDown: U,
      onTouchStart: U,
      children: [
        e.jsx("div", {
          className: "absolute pointer-events-none bg-black/60",
          style: { left: 0, top: 0, width: "100%", height: D },
        }),
        e.jsx("div", {
          className: "absolute pointer-events-none bg-black/60",
          style: { left: 0, top: D + A, width: "100%", height: h - D - A },
        }),
        e.jsx("div", {
          className: "absolute pointer-events-none bg-black/60",
          style: { left: 0, top: D, width: q, height: A },
        }),
        e.jsx("div", {
          className: "absolute pointer-events-none bg-black/60",
          style: { left: q + Z, top: D, right: 0, height: A },
        }),
        e.jsx("div", {
          className: "absolute pointer-events-none",
          style: {
            left: q,
            top: D,
            width: Z,
            height: A,
            outline: "1.5px solid rgba(255,255,255,0.85)",
          },
          children: [1 / 3, 2 / 3].map((l) =>
            e.jsxs(
              Le.Fragment,
              {
                children: [
                  e.jsx("div", {
                    className: "absolute bg-white/20",
                    style: {
                      left: `${l * 100}%`,
                      top: 0,
                      width: 1,
                      height: "100%",
                    },
                  }),
                  e.jsx("div", {
                    className: "absolute bg-white/20",
                    style: {
                      top: `${l * 100}%`,
                      left: 0,
                      height: 1,
                      width: "100%",
                    },
                  }),
                ],
              },
              l,
            ),
          ),
        }),
        Object.entries(R(t)).map(([l, [a, r]]) =>
          e.jsx(
            "div",
            {
              className: "absolute pointer-events-none rounded-[2px]",
              style: {
                left: u(a, n) - W / 2,
                top: u(r, h) - W / 2,
                width: W,
                height: W,
                background: "white",
                boxShadow: "0 0 0 1.5px rgba(0,0,0,0.5)",
                cursor: V[l],
              },
            },
            l,
          ),
        ),
      ],
    });
  },
  qe = ({ showNotification: t, showDownloadDialog: o }) => {
    const [n, h] = c.useState(null),
      [x, p] = c.useState(0),
      [u, H] = c.useState(1),
      [R, Y] = c.useState(!1),
      [k, V] = c.useState("crop"),
      [U, B] = c.useState("preset"),
      [L, ne] = c.useState("a4"),
      [G, ie] = c.useState(595),
      [Q, q] = c.useState(842),
      [D, Z] = c.useState(!0),
      [A, W] = c.useState(!0),
      [l, a] = c.useState({}),
      [r, d] = c.useState(!1),
      w = c.useRef(null),
      F = c.useRef(null),
      z = c.useRef(null),
      g = c.useRef(null),
      [v, O] = c.useState({ w: 0, h: 0 }),
      [y, N] = c.useState(!1),
      P = { x: 0.02, y: 0.02, w: 0.96, h: 0.96 },
      b = ((s) => l[s] || P)(u),
      pe = {
        a4: { width: 595, height: 842, label: "A4 (210×297 mm)" },
        letter: { width: 612, height: 792, label: "Letter (8.5×11 in)" },
        legal: { width: 612, height: 1008, label: "Legal (8.5×14 in)" },
        a3: { width: 842, height: 1191, label: "A3 (297×420 mm)" },
        a5: { width: 420, height: 595, label: "A5 (148×210 mm)" },
        tabloid: { width: 792, height: 1224, label: "Tabloid (11×17 in)" },
      };
    c.useEffect(() => {}, []);
    const Re = async (s) => {
        const i = s.target.files?.[0];
        if (i)
          try {
            const m = await Pe(i),
              f = await window.pdfjsLib.getDocument({ data: m }).promise;
            ((z.current = f),
              h(i),
              p(f.numPages),
              H(1),
              a({}),
              t?.(
                `PDF loaded: ${f.numPages} page${f.numPages > 1 ? "s" : ""}`,
              ));
          } catch (m) {
            (console.error(m), t?.("Failed to load PDF", "error"));
          }
      },
      ee = c.useCallback(
        async (s) => {
          if (!(!z.current || !w.current)) {
            if (g.current) {
              try {
                g.current.cancel();
              } catch {}
              g.current = null;
            }
            N(!0);
            try {
              const i = await z.current.getPage(s),
                m = F.current;
              if (!m) return;
              const f = m.clientWidth || 600,
                K = i.getViewport({ scale: 1 }),
                ye = f / K.width,
                j = i.getViewport({ scale: ye }),
                C = w.current;
              ((C.width = j.width), (C.height = j.height));
              const S = C.getContext("2d", { alpha: !1 });
              ((S.fillStyle = "#ffffff"), S.fillRect(0, 0, C.width, C.height));
              const E = i.render({ canvasContext: S, viewport: j });
              ((g.current = E),
                await E.promise,
                (g.current = null),
                O({ w: j.width, h: j.height }));
            } catch (i) {
              i?.name !== "RenderingCancelledException" &&
                (console.error("Page render error:", i),
                t?.("Failed to render page", "error"));
            } finally {
              N(!1);
            }
          }
        },
        [t],
      );
    (c.useEffect(() => {
      n && k === "crop" && ee(u);
    }, [n, k, u, ee]),
      c.useEffect(() => {
        if (!n || k !== "crop") return;
        const s = new ResizeObserver(() => ee(u));
        return (F.current && s.observe(F.current), () => s.disconnect());
      }, [n, k, u, ee]),
      c.useEffect(
        () => () => {
          if (g.current)
            try {
              g.current.cancel();
            } catch {}
        },
        [],
      ));
    const X = c.useCallback(
        (s) => {
          if (r) {
            const i = {};
            for (let m = 1; m <= x; m++) i[m] = s;
            a(i);
          } else a((i) => ({ ...i, [u]: s }));
        },
        [r, u, x],
      ),
      Fe = () => {
        if (r) {
          const s = {};
          for (let i = 1; i <= x; i++) s[i] = P;
          a(s);
        } else a((s) => ({ ...s, [u]: P }));
      },
      ae = Math.round(b.x * 100),
      re = Math.round(b.y * 100),
      le = Math.round((1 - b.x - b.w) * 100),
      ce = Math.round((1 - b.y - b.h) * 100),
      ue = Math.round(b.w * 100),
      ge = Math.round(b.h * 100),
      be = (s) =>
        X({ ...b, x: s / 100, w: Math.max(T, 1 - s / 100 - le / 100) }),
      fe = (s) =>
        X({ ...b, y: s / 100, h: Math.max(T, 1 - s / 100 - ce / 100) }),
      we = (s) => X({ ...b, w: Math.max(T, 1 - ae / 100 - s / 100) }),
      je = (s) => X({ ...b, h: Math.max(T, 1 - re / 100 - s / 100) }),
      te = async () => {
        if (n) {
          Y(!0);
          try {
            const { PDFDocument: s } = window.PDFLib,
              i = await Pe(n),
              m = await s.load(i);
            if (k === "resize") {
              const j = U === "preset" ? pe[L] : { width: G, height: Q };
              for (const C of m.getPages()) {
                if (A) {
                  const { width: S } = C.getSize(),
                    E = j.width / S;
                  C.scale(E, D ? E : j.height / C.getSize().height);
                }
                C.setSize(j.width, j.height);
              }
            } else
              m.getPages().forEach((j, C) => {
                const S = l[C + 1] || P,
                  { width: E, height: ze } = j.getSize(),
                  oe = S.x * E,
                  de = (1 - S.y - S.h) * ze,
                  Ne = S.w * E,
                  Ce = S.h * ze;
                j.setCropBox(oe, de, Ne, Ce);
                try {
                  const { PDFName: De } = window.PDFLib;
                  j.node.set(
                    De.of("MediaBox"),
                    j.doc.context.obj([oe, de, oe + Ne, de + Ce]),
                  );
                } catch {}
              });
            const f = await m.save(),
              K = `${k === "resize" ? "resized" : "cropped"}_${n.name}`;
            Be(f, K, "application/pdf") !== !1
              ? (Te({ name: K, tool: "cropresize", size: f.length, bytes: f }),
                o?.(K, f.length, f))
              : t?.("Download may have been blocked.", "error");
          } catch (s) {
            (console.error(s), t?.(`Failed to ${k} PDF`, "error"));
          } finally {
            Y(!1);
          }
        }
      },
      ve = () => {
        if (g.current) {
          try {
            g.current.cancel();
          } catch {}
          g.current = null;
        }
        ((z.current = null), h(null), p(0), a({}));
      };
    return n
      ? k === "resize"
        ? e.jsx("div", {
            className: "max-w-2xl mx-auto",
            children: e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-lg space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("button", {
                      "aria-label": "Previous",
                      onClick: () => V("crop"),
                      className:
                        "p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors",
                      children: e.jsx(me, { className: "w-4 h-4" }),
                    }),
                    e.jsx(J, { className: "w-5 h-5 text-zinc-300" }),
                    e.jsx("h2", {
                      className: "text-lg font-semibold text-white flex-1",
                      children: "Resize PDF Pages",
                    }),
                    e.jsx("button", {
                      "aria-label": "Close",
                      onClick: ve,
                      className:
                        "text-zinc-500 hover:text-white transition-colors",
                      children: e.jsx(He, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 bg-zinc-950 px-4 py-3 rounded-lg border border-zinc-800",
                  children: [
                    e.jsx(Se, {
                      className: "w-4 h-4 text-zinc-500 flex-shrink-0",
                    }),
                    e.jsx("span", {
                      className: "text-zinc-300 text-sm truncate flex-1",
                      children: n.name,
                    }),
                    e.jsxs("span", {
                      className: "text-zinc-600 text-xs",
                      children: [x, "p • ", (n.size / 1024).toFixed(0), " KB"],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: ["preset", "custom"].map((s) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => B(s),
                        className: `p-3 rounded-lg border text-left text-sm transition-all ${U === s ? "bg-white/10 border-white/30 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600"}`,
                        children: [
                          e.jsx("div", {
                            className: "font-medium",
                            children:
                              s === "preset"
                                ? "Standard Sizes"
                                : "Custom Dimensions",
                          }),
                          e.jsx("div", {
                            className: "text-[10px] opacity-60 mt-0.5",
                            children:
                              s === "preset"
                                ? "A4, Letter, Legal…"
                                : "Set width & height",
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                U === "preset"
                  ? e.jsx("div", {
                      className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                      children: Object.entries(pe).map(([s, i]) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => ne(s),
                            className: `p-3 rounded-lg border text-left text-xs transition-all ${L === s ? "bg-white/10 border-white/30 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600"}`,
                            children: [
                              e.jsx("div", {
                                className: "font-medium",
                                children: i.label,
                              }),
                              e.jsxs("div", {
                                className:
                                  "text-[9px] opacity-50 mt-0.5 font-mono",
                                children: [i.width, "×", i.height, " pt"],
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    })
                  : e.jsx("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        ["Width (pt)", G, ie],
                        ["Height (pt)", Q, q],
                      ].map(([s, i, m]) =>
                        e.jsxs(
                          "div",
                          {
                            children: [
                              e.jsx("label", {
                                className: "block text-xs text-zinc-500 mb-1",
                                children: s,
                              }),
                              e.jsx("input", {
                                type: "number",
                                value: i,
                                onChange: (f) =>
                                  m(parseInt(f.target.value) || 0),
                                className:
                                  "w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-500",
                              }),
                            ],
                          },
                          s,
                        ),
                      ),
                    }),
                e.jsx("div", {
                  className: "space-y-3",
                  children: [
                    ["Maintain aspect ratio", D, Z],
                    ["Scale content to fit", A, W],
                  ].map(([s, i, m]) =>
                    e.jsxs(
                      "label",
                      {
                        className: "flex items-center gap-3 cursor-pointer",
                        children: [
                          e.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: (f) => m(f.target.checked),
                            className: "w-4 h-4 accent-white",
                          }),
                          e.jsx("span", {
                            className: "text-sm text-zinc-400",
                            children: s,
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                xe() &&
                  e.jsxs("div", {
                    className:
                      "p-3 bg-blue-900/20 border border-blue-800 rounded text-xs text-blue-300",
                    children: [
                      "📱 iOS: Find your file in ",
                      e.jsx("strong", { children: "Files app → Downloads" }),
                    ],
                  }),
                e.jsx("button", {
                  onClick: te,
                  disabled: R,
                  className:
                    "w-full py-3.5 bg-white hover:bg-zinc-100 text-black rounded-lg font-semibold text-sm disabled:opacity-40 transition-all flex items-center justify-center gap-2 shadow-lg",
                  children: R
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin",
                          }),
                          "Processing…",
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(J, { className: "w-4 h-4" }),
                          "Resize All ",
                          x,
                          " Pages",
                        ],
                      }),
                }),
              ],
            }),
          })
        : e.jsxs("div", {
            className: "flex flex-col lg:flex-row bg-[#161616]",
            style: { minHeight: "calc(100vh - 64px)" },
            children: [
              e.jsxs("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-zinc-800 bg-[#1e1e1e] flex-shrink-0 sticky top-0 z-10",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [
                          e.jsxs("button", {
                            onClick: ve,
                            className:
                              "flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors",
                            children: [
                              e.jsx(me, { className: "w-4 h-4" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Back",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "w-px h-4 bg-zinc-700 hidden sm:block",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(_, {
                                className: "w-3.5 h-3.5 text-zinc-400",
                              }),
                              e.jsx("span", {
                                className: "text-white font-semibold text-sm",
                                children: "Crop PDF",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5 sm:gap-2",
                        children: [
                          e.jsx("button", {
                            "aria-label": "Previous",
                            onClick: () => H((s) => Math.max(1, s - 1)),
                            disabled: u <= 1,
                            className:
                              "p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                            children: e.jsx(me, { className: "w-3.5 h-3.5" }),
                          }),
                          e.jsxs("span", {
                            className:
                              "text-zinc-300 text-xs sm:text-sm font-medium tabular-nums px-1 whitespace-nowrap",
                            children: ["Page ", u, " / ", x],
                          }),
                          e.jsx("button", {
                            "aria-label": "Next",
                            onClick: () => H((s) => Math.min(x, s + 1)),
                            disabled: u >= x,
                            className:
                              "p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                            children: e.jsx(We, { className: "w-3.5 h-3.5" }),
                          }),
                          e.jsx("div", {
                            className: "w-px h-4 bg-zinc-700 mx-0.5",
                          }),
                          e.jsxs("button", {
                            onClick: Fe,
                            className:
                              "flex items-center gap-1 px-2.5 py-1.5 rounded border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 text-xs transition-colors",
                            children: [
                              e.jsx(_e, { className: "w-3 h-3" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Reset",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "flex-1 flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-auto",
                    style: { background: "#111" },
                    children: e.jsxs("div", {
                      ref: F,
                      className: "relative w-full max-w-2xl mx-auto shadow-2xl",
                      style: {
                        aspectRatio: v.h > 0 ? `${v.w}/${v.h}` : "0.77",
                      },
                      children: [
                        y &&
                          e.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center bg-zinc-900 rounded z-20",
                            children: e.jsx("div", {
                              className:
                                "w-6 h-6 border-2 border-zinc-700 border-t-white rounded-full animate-spin",
                            }),
                          }),
                        e.jsx("canvas", {
                          ref: w,
                          className: "block w-full h-auto rounded",
                          style: { visibility: y ? "hidden" : "visible" },
                        }),
                        !y &&
                          v.w > 0 &&
                          e.jsx(Ye, {
                            cropRect: b,
                            onCropChange: X,
                            canvasW: v.w,
                            canvasH: v.h,
                          }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className:
                      "lg:hidden border-t border-zinc-800 bg-[#1e1e1e] p-4 flex-shrink-0 space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-zinc-500 uppercase tracking-wider mb-1",
                                children: "Crop Area",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "text-white font-bold text-2xl tabular-nums",
                                        children: [ue, "%"],
                                      }),
                                      e.jsx("span", {
                                        className: "text-zinc-500 text-xs ml-1",
                                        children: "W",
                                      }),
                                    ],
                                  }),
                                  e.jsx("span", {
                                    className: "text-zinc-700 font-light",
                                    children: "×",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "text-white font-bold text-2xl tabular-nums",
                                        children: [ge, "%"],
                                      }),
                                      e.jsx("span", {
                                        className: "text-zinc-500 text-xs ml-1",
                                        children: "H",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                              e.jsx(Me, { checked: r, onChange: d }),
                              e.jsx("span", {
                                className: "text-zinc-400 text-xs",
                                children: "All pages",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-x-5 gap-y-3",
                        children: [
                          e.jsx(I, {
                            label: "Left margin",
                            value: ae,
                            onChange: be,
                          }),
                          e.jsx(I, {
                            label: "Top margin",
                            value: re,
                            onChange: fe,
                          }),
                          e.jsx(I, {
                            label: "Right margin",
                            value: le,
                            onChange: we,
                          }),
                          e.jsx(I, {
                            label: "Bottom margin",
                            value: ce,
                            onChange: je,
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: te,
                        disabled: R,
                        className:
                          "w-full py-3.5 bg-white text-black rounded-xl font-semibold text-sm disabled:opacity-40 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg",
                        children: R
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin",
                                }),
                                "Processing…",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(_, { className: "w-4 h-4" }),
                                r ? `Crop All ${x} Pages` : "Crop This Page",
                              ],
                            }),
                      }),
                      xe() &&
                        e.jsx("p", {
                          className: "text-blue-300 text-xs text-center",
                          children: "📱 Files app → Downloads",
                        }),
                      e.jsxs("p", {
                        className:
                          "text-zinc-700 text-[10px] text-center flex items-center justify-center gap-1",
                        children: [
                          e.jsx(he, { className: "w-2.5 h-2.5" }),
                          "100% local • Files never uploaded",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "hidden lg:flex flex-col w-64 xl:w-72 border-l border-zinc-800 bg-[#1e1e1e] flex-shrink-0",
                children: [
                  e.jsxs("div", {
                    className:
                      "px-5 py-4 border-b border-zinc-800 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 bg-zinc-800 rounded flex items-center justify-center flex-shrink-0",
                        children: e.jsx(Se, {
                          className: "w-4 h-4 text-zinc-400",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-zinc-200 text-xs font-medium truncate",
                            children: n.name,
                          }),
                          e.jsxs("p", {
                            className: "text-zinc-600 text-[10px] mt-0.5",
                            children: [(n.size / 1024).toFixed(2), " KB"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "px-5 py-5 border-b border-zinc-800",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3",
                        children: "Crop Area",
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                          e.jsxs("div", {
                            className:
                              "bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-white font-bold text-2xl tabular-nums leading-none",
                                children: [ue, "%"],
                              }),
                              e.jsx("p", {
                                className: "text-zinc-500 text-[11px] mt-1.5",
                                children: "Width",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-3",
                            children: [
                              e.jsxs("p", {
                                className:
                                  "text-white font-bold text-2xl tabular-nums leading-none",
                                children: [ge, "%"],
                              }),
                              e.jsx("p", {
                                className: "text-zinc-500 text-[11px] mt-1.5",
                                children: "Height",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "px-5 py-5 border-b border-zinc-800 space-y-5",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] font-semibold text-zinc-500 uppercase tracking-widest",
                        children: "Fine Tune",
                      }),
                      e.jsx(I, {
                        label: "Left margin",
                        value: ae,
                        onChange: be,
                      }),
                      e.jsx(I, {
                        label: "Top margin",
                        value: re,
                        onChange: fe,
                      }),
                      e.jsx(I, {
                        label: "Right margin",
                        value: le,
                        onChange: we,
                      }),
                      e.jsx(I, {
                        label: "Bottom margin",
                        value: ce,
                        onChange: je,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "px-5 py-4 border-b border-zinc-800 flex items-center justify-between",
                    children: [
                      e.jsx("span", {
                        className: "text-sm text-zinc-400",
                        children: "Apply to all pages",
                      }),
                      e.jsx(Me, { checked: r, onChange: d }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "px-5 pt-4",
                    children: e.jsxs("button", {
                      onClick: () => V("resize"),
                      className:
                        "w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 text-xs transition-colors",
                      children: [
                        e.jsx(J, { className: "w-3 h-3" }),
                        "Switch to Resize mode",
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "mt-auto px-5 pb-6 pt-4 space-y-2.5",
                    children: [
                      xe() &&
                        e.jsx("p", {
                          className: "text-blue-300 text-xs text-center",
                          children: "📱 Files app → Downloads",
                        }),
                      e.jsx("button", {
                        onClick: te,
                        disabled: R,
                        className:
                          "w-full py-3.5 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black rounded-xl font-semibold text-sm disabled:opacity-40 transition-all flex items-center justify-center gap-2 shadow-lg",
                        children: R
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin",
                                }),
                                "Processing…",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(_, { className: "w-4 h-4" }),
                                "Crop This Page",
                              ],
                            }),
                      }),
                      x > 1 &&
                        e.jsxs("button", {
                          onClick: () => {
                            (d(!0), setTimeout(te, 80));
                          },
                          disabled: R,
                          className:
                            "w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-xl text-xs font-medium disabled:opacity-40 transition-all flex items-center justify-center gap-2",
                          children: ["Apply to All ", x, " Pages →"],
                        }),
                      e.jsxs("p", {
                        className:
                          "text-zinc-700 text-[10px] text-center flex items-center justify-center gap-1 pt-1",
                        children: [
                          e.jsx(he, { className: "w-2.5 h-2.5" }),
                          "100% local • Files never uploaded",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
      : e.jsxs("article", {
          className: "max-w-5xl mx-auto space-y-8",
          children: [
            e.jsxs("div", {
              className: "text-center",
              children: [
                e.jsx("h1", {
                  className:
                    "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight",
                  children: "Crop & Resize PDF Free",
                }),
                e.jsx("p", {
                  className: "text-zinc-500 text-sm",
                  children:
                    "Trim margins • Resize to standard sizes • 100% local, never uploaded",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-6 sm:p-8 shadow-lg",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 mb-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center",
                      children: e.jsx(_, {
                        className: "w-5 h-5 text-zinc-300",
                      }),
                    }),
                    e.jsx("h2", {
                      className: "text-lg font-semibold text-white",
                      children: "PDF Crop & Resize Tool",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-2 gap-3 mb-6",
                  children: [
                    {
                      id: "crop",
                      Icon: _,
                      title: "Crop Margins",
                      sub: "Drag handles on the live preview to trim",
                    },
                    {
                      id: "resize",
                      Icon: J,
                      title: "Resize Pages",
                      sub: "Change dimensions to A4, Letter, and more",
                    },
                  ].map(({ id: s, Icon: i, title: m, sub: f }) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => V(s),
                        className: `p-4 rounded-lg border text-left transition-all touch-manipulation ${k === s ? "bg-white/10 border-white/30 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600"}`,
                        children: [
                          e.jsx(i, { className: "w-5 h-5 mb-2" }),
                          e.jsx("div", {
                            className: "font-medium text-sm mb-0.5",
                            children: m,
                          }),
                          e.jsx("div", {
                            className: "text-[10px] opacity-60 leading-relaxed",
                            children: f,
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                e.jsxs("div", {
                  className:
                    "border-2 border-dashed border-zinc-700 rounded-xl p-10 sm:p-14 text-center hover:bg-zinc-800/40 hover:border-zinc-600 transition-all duration-200",
                  children: [
                    e.jsx("input", {
                      type: "file",
                      accept: "application/pdf",
                      onChange: Re,
                      className: "hidden",
                      id: "upload-input",
                    }),
                    e.jsxs("label", {
                      htmlFor: "upload-input",
                      className: "cursor-pointer block",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-400",
                          children: e.jsx(Oe, { className: "w-7 h-7" }),
                        }),
                        e.jsx("span", {
                          className:
                            "text-zinc-200 font-semibold text-base block mb-1",
                          children: "Select PDF File",
                        }),
                        e.jsx("span", {
                          className: "text-zinc-500 text-sm",
                          children: "Click or drag & drop",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              children: [
                {
                  Icon: J,
                  title: "Standard Sizes",
                  desc: "Resize to A4, Letter, Legal, A3, A5, or Tabloid in one click.",
                },
                {
                  Icon: _,
                  title: "Drag-to-Crop",
                  desc: "Drag handles on the live PDF preview for pixel-perfect results.",
                },
                {
                  Icon: he,
                  title: "100% Private",
                  desc: "Everything runs in your browser — files never leave your device.",
                },
                {
                  Icon: $e,
                  title: "Batch Processing",
                  desc: "Apply the same crop settings to all pages at once.",
                },
              ].map(({ Icon: s, title: i, desc: m }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-start gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                        children: e.jsx(s, {
                          className: "w-4 h-4 text-zinc-300",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white text-sm mb-0.5",
                            children: i,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: m,
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            e.jsx("div", {
              className: "space-y-2",
              children: [
                {
                  q: "What's the difference between crop and resize?",
                  a: "Cropping removes the edges of each page, shrinking its dimensions. Resizing changes the page size while optionally scaling the content to fit.",
                },
                {
                  q: "Are my files uploaded to your servers?",
                  a: "No — all processing runs locally in your browser using pdf-lib and PDF.js. Your files never leave your device.",
                },
                {
                  q: "Will resizing blur my text?",
                  a: "No. PDFs use vector graphics so text stays crisp at any size. Only raster images may show quality changes when significantly enlarged.",
                },
                {
                  q: "Can I set custom dimensions?",
                  a: 'Yes. In Resize mode, choose "Custom Dimensions" and enter width/height in points (1 inch = 72 pt).',
                },
              ].map(({ q: s, a: i }) =>
                e.jsxs(
                  "details",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group",
                    children: [
                      e.jsxs("summary", {
                        className:
                          "px-5 py-4 cursor-pointer font-semibold text-white hover:bg-zinc-800 transition-colors flex items-center justify-between gap-3 text-sm list-none",
                        children: [
                          e.jsx("span", { children: s }),
                          e.jsx(Ue, {
                            className:
                              "w-4 h-4 text-zinc-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "px-5 pb-4 text-xs text-zinc-400 border-t border-zinc-800 pt-3 leading-relaxed",
                        children: i,
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
          ],
        });
  };
export { qe as default };
