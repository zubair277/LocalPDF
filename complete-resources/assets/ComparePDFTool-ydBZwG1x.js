import { r as f, j as e } from "./react-vendor-Bc7KCos-.js";
const he = (s) =>
    new Promise((o, u) => {
      const a = new FileReader();
      ((a.onload = () => o(a.result)), (a.onerror = u), a.readAsArrayBuffer(s));
    }),
  ye = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/tesseract.min.js",
  H = () => new Promise((s) => setTimeout(s, 0)),
  xe = `
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js';

let pipe = null;

self.onmessage = async ({ data }) => {
  if (data.type === 'LOAD') {
    try {
      env.allowLocalModels = false;
      pipe = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6', {
        progress_callback: (d) => {
          if (d.status === 'progress' && d.total)
            postMessage({ type: 'PROGRESS', pct: Math.round((d.loaded / d.total) * 100) });
        },
      });
      postMessage({ type: 'READY' });
    } catch (e) {
      postMessage({ type: 'ERROR', msg: e.message });
    }
  }

  if (data.type === 'SUMMARISE') {
    try {
      const [out] = await pipe(data.text.slice(0, 1024), { max_new_tokens: 130, min_new_tokens: 30 });
      postMessage({ type: 'SUMMARY', idx: data.idx, text: out?.summary_text?.trim() || '[Could not summarise]' });
    } catch (e) {
      postMessage({ type: 'ERROR', msg: e.message });
    }
  }
};
`,
  ae = () => {
    if (!window.__cmpMLWorker) {
      const s = new Blob([xe], { type: "application/javascript" });
      window.__cmpMLWorker = new Worker(URL.createObjectURL(s), {
        type: "module",
      });
    }
    return window.__cmpMLWorker;
  },
  we = (s) =>
    new Promise((o, u) => {
      if (window.__cmpModelReady) return o();
      const a = ae(),
        m = ({ data: c }) => {
          c.type === "READY"
            ? (a.removeEventListener("message", m),
              (window.__cmpModelReady = !0),
              o())
            : c.type === "PROGRESS"
              ? s(c.pct)
              : c.type === "ERROR" &&
                (a.removeEventListener("message", m), u(new Error(c.msg)));
        };
      (a.addEventListener("message", m), a.postMessage({ type: "LOAD" }));
    }),
  te = (s, o) =>
    new Promise((u, a) => {
      const m = ae(),
        c = ({ data: h }) => {
          h.type === "SUMMARY" && h.idx === o
            ? (m.removeEventListener("message", c), u(h.text))
            : h.type === "ERROR" &&
              (m.removeEventListener("message", c), a(new Error(h.msg)));
        };
      (m.addEventListener("message", c),
        m.postMessage({ type: "SUMMARISE", text: s, idx: o }));
    });
let E = null;
const be = (s) =>
    new Promise((o, u) => {
      if (document.querySelector(`script[src="${s}"]`)) return o();
      const a = document.createElement("script");
      ((a.src = s),
        (a.onload = o),
        (a.onerror = u),
        document.head.appendChild(a));
    }),
  je = (s, o = 5e3) =>
    new Promise((u, a) => {
      if (window[s]) return u(window[s]);
      const m = Date.now(),
        c = setInterval(() => {
          window[s]
            ? (clearInterval(c), u(window[s]))
            : Date.now() - m > o &&
              (clearInterval(c), a(new Error(`${s} did not initialise`)));
        }, 50);
    }),
  ve = async () => {
    await be(ye);
    const s = await je("Tesseract");
    return (
      E ||
        (E = await s.createWorker("eng", 1, {
          workerPath:
            "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.0/dist/worker.min.js",
          langPath: "https://tessdata.projectnaptha.com/4.0.0",
          corePath:
            "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.0/tesseract-core-simd-lstm.wasm.js",
        })),
      E
    );
  },
  Se = async (s, o) => {
    const u = await s.getPage(o),
      a = u.getViewport({ scale: 2 }),
      m = document.createElement("canvas");
    return (
      (m.width = a.width),
      (m.height = a.height),
      await u.render({ canvasContext: m.getContext("2d"), viewport: a })
        .promise,
      m
    );
  },
  re = async (s, o) => {
    const u = Math.min(s.numPages, 8);
    let a = "";
    o("Reading text…");
    for (let c = 1; c <= u; c++) {
      await H();
      const w = await (await s.getPage(c)).getTextContent();
      if (((a += w.items.map((b) => b.str).join(" ") + " "), a.length > 1800))
        break;
    }
    const m = a.trim();
    if (m.length / u > 50) return m.slice(0, 1800);
    o("Scanned PDF — running OCR…");
    try {
      const c = await ve();
      let h = "";
      const w = Math.min(u, 4);
      for (let b = 1; b <= w; b++) {
        (o(`OCR page ${b} / ${w}…`), await H());
        const g = await Se(s, b),
          {
            data: { text: T },
          } = await c.recognize(g);
        if (((h += T + " "), h.length > 1800)) break;
      }
      return h.trim().slice(0, 1800) || "[No text extracted]";
    } catch (c) {
      return (console.error("OCR:", c), m.slice(0, 1800) || "[OCR failed]");
    }
  },
  ke = (s, o) => {
    const u = s
        .split(/(?<=[.!?])\s+/)
        .map((g) => g.trim())
        .filter(Boolean),
      a = o
        .split(/(?<=[.!?])\s+/)
        .map((g) => g.trim())
        .filter(Boolean),
      m = new Set(a.map((g) => g.toLowerCase())),
      c = new Set(u.map((g) => g.toLowerCase())),
      h = u.filter((g) => !m.has(g.toLowerCase())),
      w = a.filter((g) => !c.has(g.toLowerCase())),
      b = u.filter((g) => m.has(g.toLowerCase()));
    return { onlyA: h, onlyB: w, overlap: b };
  },
  y = {
    IDLE: "idle",
    EXTRACTING: "extracting",
    DOWNLOADING: "downloading",
    INFERRING: "inferring",
    DONE: "done",
    ERROR: "error",
  },
  r = {
    bg: "#1c1c1e",
    panel: "#252528",
    border: "#3a3a3c",
    borderSub: "#2c2c2e",
    canvas: "#141416",
    aiPanel: "#202022",
    t1: "#f5f5f5",
    t2: "#c0c0c0",
    t3: "#888",
    t4: "#555",
    t5: "#383838",
  },
  Re = `
  @keyframes cmpBounce {
    0%,80%,100%{transform:translateY(0);opacity:.3}
    40%{transform:translateY(-5px);opacity:1}
  }
  @keyframes cmpFadeIn {
    from{opacity:0;transform:translateY(-4px)}
    to{opacity:1;transform:translateY(0)}
  }
  .cmpScroll::-webkit-scrollbar{width:3px;height:3px}
  .cmpScroll::-webkit-scrollbar-track{background:transparent}
  .cmpScroll::-webkit-scrollbar-thumb{background:#444;border-radius:2px}
  .cmpBtn:hover:not(:disabled){background:#e8e8e8!important}
  .cmpGhost:hover{border-color:#666!important;color:#ccc!important}
  .cmpClose:hover{color:#e0e0e0!important}
  .cmpNav:hover:not(:disabled){border-color:#666!important;color:#fff!important}
  .cmpDrop:hover{background:rgba(255,255,255,0.05)!important}
`,
  _ = ({ d: s }) =>
    e.jsx("span", {
      style: {
        display: "inline-block",
        width: 3.5,
        height: 3.5,
        borderRadius: "50%",
        background: "#888",
        animation: "cmpBounce 1.2s ease-in-out infinite",
        animationDelay: s,
      },
    }),
  ne = () =>
    e.jsxs("span", {
      style: { display: "inline-flex", gap: 4, alignItems: "center" },
      children: [
        e.jsx(_, { d: "0s" }),
        e.jsx(_, { d: "0.2s" }),
        e.jsx(_, { d: "0.4s" }),
      ],
    }),
  se = () =>
    e.jsxs("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", {
          d: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z",
        }),
        e.jsx("path", {
          d: "M5 3l.75 2.25L8 6l-2.25.75L5 9l-.75-2.25L2 6l2.25-.75z",
        }),
      ],
    }),
  Ce = ({ open: s }) =>
    e.jsx("svg", {
      width: "9",
      height: "9",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: s ? "rotate(180deg)" : "none",
        transition: "transform 0.2s",
      },
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  oe = ({ left: s }) =>
    e.jsx("svg", {
      width: "11",
      height: "11",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: s
        ? e.jsx("polyline", { points: "15 18 9 12 15 6" })
        : e.jsx("polyline", { points: "9 18 15 12 9 6" }),
    }),
  G = ({ label: s, items: o, color: u }) =>
    !o || o.length === 0
      ? null
      : e.jsxs("div", {
          style: { marginBottom: "1rem" },
          children: [
            e.jsx("p", {
              style: {
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: u || r.t1,
                marginBottom: "0.4rem",
              },
              children: s,
            }),
            o.map((a, m) =>
              e.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "0.25rem",
                  },
                  children: [
                    e.jsx("span", {
                      style: {
                        color: r.t4,
                        flexShrink: 0,
                        fontSize: "0.75rem",
                        lineHeight: 1.65,
                      },
                      children: "–",
                    }),
                    e.jsx("span", {
                      style: {
                        fontSize: "0.75rem",
                        color: r.t2,
                        lineHeight: 1.65,
                      },
                      children: a,
                    }),
                  ],
                },
                m,
              ),
            ),
          ],
        });
function Le({ showNotification: s }) {
  const [o, u] = f.useState([null, null]),
    [a, m] = f.useState([null, null]),
    [c, h] = f.useState([1, 1]),
    [w, b] = f.useState([0, 0]),
    [g, T] = f.useState(!1),
    [B, ie] = f.useState(0),
    [W, O] = f.useState([!1, !1]),
    [k, L] = f.useState(y.IDLE),
    [P, R] = f.useState(""),
    [$, Y] = f.useState(0),
    [j, I] = f.useState(null),
    [D, N] = f.useState(null),
    [U, X] = f.useState(!1),
    [A, le] = f.useState(!1),
    [V, ce] = f.useState(!!window.__cmpModelReady),
    M = f.useRef([null, null]),
    q = f.useRef([null, null]),
    C = f.useRef([]),
    z = f.useRef(!1),
    F = f.useRef(!1);
  f.useEffect(() => {
    const t = () => le(window.innerWidth < 620);
    return (
      t(),
      window.addEventListener("resize", t),
      () => window.removeEventListener("resize", t)
    );
  }, []);
  const K = f.useCallback(async () => {
      if (!(z.current || C.current.length === 0)) {
        for (z.current = !0; C.current.length > 0;) {
          const { doc: t, pageNum: d, canvas: i, idx: n } = C.current.shift();
          if (!(!i || !t)) {
            try {
              await H();
              const l = await t.getPage(d),
                p = window.innerWidth < 620 ? 0.72 : 1.3,
                x = l.getViewport({ scale: p }),
                v = i.getContext("2d", { alpha: !1 });
              ((i.height = x.height),
                (i.width = x.width),
                v.clearRect(0, 0, x.width, x.height),
                await l.render({ canvasContext: v, viewport: x }).promise);
            } catch (l) {
              console.error("render err", n, l);
            }
            await new Promise((l) => setTimeout(l, 80));
          }
        }
        z.current = !1;
      }
    }, []),
    Q = f.useCallback(
      (t, d, i) => {
        const n = M.current[t];
        !n ||
          !d ||
          ((C.current = C.current.filter((l) => l.idx !== t)),
          C.current.push({ idx: t, doc: d, pageNum: i, canvas: n }),
          K());
      },
      [K],
    );
  (f.useEffect(() => {
    a.forEach((t, d) => {
      t && M.current[d] && Q(d, t, c[d]);
    });
  }, [a, c, Q]),
    f.useEffect(() => {
      if (!g) return;
      const t = q.current,
        d = (n) => (l) => {
          if (F.current) return;
          const p = t[n === 0 ? 1 : 0];
          if (!p) return;
          F.current = !0;
          const x = l.currentTarget,
            v = x.scrollHeight - x.clientHeight,
            ee = x.scrollWidth - x.clientWidth;
          ((p.scrollTop =
            v > 0 ? (x.scrollTop / v) * (p.scrollHeight - p.clientHeight) : 0),
            (p.scrollLeft =
              ee > 0
                ? (x.scrollLeft / ee) * (p.scrollWidth - p.clientWidth)
                : 0),
            requestAnimationFrame(() => {
              F.current = !1;
            }));
        },
        i = t.map((n, l) => {
          if (!n) return null;
          const p = d(l);
          return (n.addEventListener("scroll", p, { passive: !0 }), p);
        });
      return () =>
        t.forEach((n, l) => n && i[l] && n.removeEventListener("scroll", i[l]));
    }, [g, a]),
    f.useEffect(
      () => () => {
        E && (E.terminate().catch(() => {}), (E = null));
      },
      [],
    ));
  const J = async (t, d) => {
      if (!t || t.type !== "application/pdf") {
        s("Please upload a valid PDF", "error");
        return;
      }
      try {
        const i = await he(t),
          n = await window.pdfjsLib.getDocument({ data: i }).promise;
        (u((l) => {
          const p = [...l];
          return ((p[d] = t), p);
        }),
          m((l) => {
            const p = [...l];
            return ((p[d] = n), p);
          }),
          b((l) => {
            const p = [...l];
            return ((p[d] = n.numPages), p);
          }),
          h((l) => {
            const p = [...l];
            return ((p[d] = 1), p);
          }),
          I(null),
          N(null),
          s(`${n.numPages} page${n.numPages !== 1 ? "s" : ""} loaded`));
      } catch {
        s("Failed to load PDF", "error");
      }
    },
    de = (t) => {
      (u((i) => {
        const n = [...i];
        return ((n[t] = null), n);
      }),
        m((i) => {
          const n = [...i];
          return ((n[t] = null), n);
        }),
        b((i) => {
          const n = [...i];
          return ((n[t] = 0), n);
        }),
        h((i) => {
          const n = [...i];
          return ((n[t] = 1), n);
        }),
        I(null),
        N(null));
      const d = M.current[t];
      d && d.getContext("2d").clearRect(0, 0, d.width, d.height);
    },
    Z = (t, d) => {
      h((i) => {
        const n = [...i],
          l = n[t] + d;
        return (l >= 1 && l <= w[t] && (n[t] = l), n);
      });
    },
    pe = async () => {
      if (!(!a[0] || !a[1])) {
        (L(y.EXTRACTING), I(null), N(null), X(!0));
        try {
          R("Extracting text from both documents…");
          const [t, d] = await Promise.all([
            re(a[0], (v) => R(v + " · Doc 1")),
            re(a[1], (v) => R(v + " · Doc 2")),
          ]);
          (window.__cmpModelReady ||
            (L(y.DOWNLOADING),
            Y(0),
            R("Downloading summarisation model (~230 MB)…"),
            await we((v) => Y(v)),
            ce(!0)),
            L(y.INFERRING),
            R("Summarising document 1…"));
          const i = await te(t, 0);
          R("Summarising document 2…");
          const n = await te(d, 1),
            { onlyA: l, onlyB: p, overlap: x } = ke(i, n);
          (I({ sumA: i, sumB: n, onlyA: l, onlyB: p, overlap: x }), L(y.DONE));
        } catch (t) {
          console.error(t);
          const d = t.message || "";
          (N(
            d.includes("fetch") || d.includes("network")
              ? "Model download failed. Check your connection and try again."
              : d || "Comparison failed. Please try again.",
          ),
            L(y.ERROR));
        }
      }
    },
    S = k === y.EXTRACTING || k === y.DOWNLOADING || k === y.INFERRING,
    me = !!(o[0] && o[1]),
    ue = A && (o[0] || o[1]),
    fe = () =>
      k === y.EXTRACTING
        ? P || "Extracting…"
        : k === y.DOWNLOADING
          ? `Downloading ${$}%`
          : k === y.INFERRING
            ? P || "Analysing…"
            : "Compare with AI",
    ge = {
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.55rem 1rem",
      borderBottom: `1px solid ${r.border}`,
      background: r.panel,
      flexWrap: "wrap",
      rowGap: "0.5rem",
    };
  return e.jsxs("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      margin: A ? "-1rem" : "-2rem",
      background: r.bg,
      fontFamily: "-apple-system,'Helvetica Neue',sans-serif",
      overflow: "hidden",
    },
    children: [
      e.jsx("style", { children: Re }),
      me &&
        e.jsxs("div", {
          style: ge,
          children: [
            e.jsxs("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                flexWrap: "wrap",
              },
              children: [
                e.jsxs("button", {
                  className: "cmpBtn",
                  onClick: pe,
                  disabled: S,
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.42rem 0.9rem",
                    background: S ? "transparent" : "#f0f0f0",
                    color: S ? r.t4 : "#111",
                    border: `1px solid ${S ? r.border : "#f0f0f0"}`,
                    borderRadius: 5,
                    fontSize: "0.73rem",
                    fontWeight: 600,
                    cursor: S ? "not-allowed" : "pointer",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                  },
                  children: [
                    S ? e.jsx(ne, {}) : e.jsx(se, {}),
                    e.jsx("span", { children: fe() }),
                  ],
                }),
                !V &&
                  !S &&
                  e.jsx("span", {
                    style: {
                      fontSize: "0.63rem",
                      color: r.t4,
                      letterSpacing: "0.03em",
                    },
                    children: "Runs locally · 100% private",
                  }),
                V &&
                  !S &&
                  e.jsx("span", {
                    style: {
                      fontSize: "0.63rem",
                      color: r.t4,
                      letterSpacing: "0.03em",
                    },
                    children: "Model ready · 100% private",
                  }),
                k === y.DOWNLOADING &&
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    },
                    children: [
                      e.jsx("div", {
                        style: {
                          width: 72,
                          height: 2,
                          background: r.borderSub,
                          borderRadius: 1,
                          overflow: "hidden",
                        },
                        children: e.jsx("div", {
                          style: {
                            height: "100%",
                            background: "#666",
                            borderRadius: 1,
                            transition: "width 0.4s",
                            width: `${$}%`,
                          },
                        }),
                      }),
                      e.jsxs("span", {
                        style: {
                          fontSize: "0.63rem",
                          color: r.t3,
                          fontVariantNumeric: "tabular-nums",
                        },
                        children: [$, "%"],
                      }),
                    ],
                  }),
                (j || D) &&
                  e.jsxs("button", {
                    className: "cmpGhost",
                    onClick: () => X((t) => !t),
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      padding: "0.38rem 0.625rem",
                      background: "transparent",
                      border: `1px solid ${r.border}`,
                      borderRadius: 5,
                      color: r.t3,
                      fontSize: "0.63rem",
                      cursor: "pointer",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "all 0.15s",
                    },
                    children: ["Summary ", e.jsx(Ce, { open: U })],
                  }),
              ],
            }),
            e.jsxs("div", {
              style: { display: "flex", alignItems: "center", gap: "0.5rem" },
              children: [
                e.jsx("span", {
                  style: {
                    fontSize: "0.6rem",
                    color: r.t4,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  },
                  children: "Sync",
                }),
                e.jsx("button", {
                  onClick: () => T((t) => !t),
                  style: {
                    position: "relative",
                    width: 34,
                    height: 20,
                    borderRadius: 10,
                    border: `1px solid ${g ? "#d0d0d0" : r.border}`,
                    background: g ? "#d0d0d0" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    padding: 0,
                    flexShrink: 0,
                  },
                  children: e.jsx("span", {
                    style: {
                      position: "absolute",
                      top: 3,
                      left: g ? 15 : 3,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: g ? "#111" : r.t5,
                      transition: "left 0.2s, background 0.2s",
                    },
                  }),
                }),
              ],
            }),
          ],
        }),
      U &&
        (j || D || (S && k === y.INFERRING)) &&
        e.jsx("div", {
          className: "cmpScroll",
          style: {
            flexShrink: 0,
            borderBottom: `1px solid ${r.border}`,
            background: r.aiPanel,
            maxHeight: 300,
            overflowY: "auto",
            animation: "cmpFadeIn 0.2s ease",
          },
          children: e.jsxs("div", {
            style: { padding: "0.9rem 1rem" },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.875rem",
                },
                children: [
                  e.jsx(se, {}),
                  e.jsx("span", {
                    style: {
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      color: r.t1,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    },
                    children: "AI Analysis",
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: "0.58rem",
                      color: r.t5,
                      marginLeft: "auto",
                      letterSpacing: "0.03em",
                    },
                    children: "distilbart · Transformers.js · off-thread",
                  }),
                ],
              }),
              S &&
                k === y.INFERRING &&
                !j &&
                e.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  },
                  children: [
                    e.jsx(ne, {}),
                    e.jsx("span", {
                      style: { fontSize: "0.73rem", color: r.t3 },
                      children: P,
                    }),
                  ],
                }),
              j &&
                e.jsxs("div", {
                  style: { animation: "cmpFadeIn 0.3s ease" },
                  children: [
                    e.jsxs("div", {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.875rem",
                        marginBottom: "1rem",
                      },
                      children: [
                        e.jsxs("div", {
                          style: {
                            padding: "0.75rem",
                            background: r.bg,
                            borderRadius: 6,
                            border: `1px solid ${r.border}`,
                          },
                          children: [
                            e.jsx("p", {
                              style: {
                                fontSize: "0.6rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: r.t3,
                                marginBottom: "0.4rem",
                              },
                              children:
                                o[0]?.name
                                  ?.replace(/\.pdf$/i, "")
                                  .slice(0, 22) || "Doc 1",
                            }),
                            e.jsx("p", {
                              style: {
                                fontSize: "0.75rem",
                                color: r.t2,
                                lineHeight: 1.65,
                              },
                              children: j.sumA,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          style: {
                            padding: "0.75rem",
                            background: r.bg,
                            borderRadius: 6,
                            border: `1px solid ${r.border}`,
                          },
                          children: [
                            e.jsx("p", {
                              style: {
                                fontSize: "0.6rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: r.t3,
                                marginBottom: "0.4rem",
                              },
                              children:
                                o[1]?.name
                                  ?.replace(/\.pdf$/i, "")
                                  .slice(0, 22) || "Doc 2",
                            }),
                            e.jsx("p", {
                              style: {
                                fontSize: "0.75rem",
                                color: r.t2,
                                lineHeight: 1.65,
                              },
                              children: j.sumB,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(G, {
                      label: "Shared content",
                      items: j.overlap,
                      color: "#888",
                    }),
                    e.jsx(G, {
                      label: `Only in ${o[0]?.name?.replace(/\.pdf$/i, "").slice(0, 18) || "Doc 1"}`,
                      items: j.onlyA,
                      color: r.t2,
                    }),
                    e.jsx(G, {
                      label: `Only in ${o[1]?.name?.replace(/\.pdf$/i, "").slice(0, 18) || "Doc 2"}`,
                      items: j.onlyB,
                      color: r.t2,
                    }),
                    j.onlyA.length === 0 &&
                      j.onlyB.length === 0 &&
                      e.jsx("p", {
                        style: {
                          fontSize: "0.75rem",
                          color: r.t3,
                          fontStyle: "italic",
                        },
                        children:
                          "The summaries are closely similar — no significant sentence-level differences detected.",
                      }),
                  ],
                }),
              D &&
                e.jsx("div", {
                  style: {
                    borderRadius: 5,
                    border: "1px solid #4a2020",
                    background: "#1a0c0c",
                    padding: "0.625rem 0.75rem",
                  },
                  children: e.jsx("p", {
                    style: {
                      fontSize: "0.73rem",
                      color: "#c07a7a",
                      lineHeight: 1.55,
                    },
                    children: D,
                  }),
                }),
            ],
          }),
        }),
      ue &&
        e.jsx("div", {
          style: {
            flexShrink: 0,
            display: "flex",
            borderBottom: `1px solid ${r.border}`,
            background: r.panel,
          },
          children: [0, 1].map((t) =>
            e.jsx(
              "button",
              {
                onClick: () => ie(t),
                style: {
                  flex: 1,
                  padding: "0.55rem 0.5rem",
                  fontSize: "0.63rem",
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  borderBottom: `1px solid ${B === t ? r.t1 : "transparent"}`,
                  color: B === t ? r.t1 : r.t4,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s, border-color 0.15s",
                },
                children: o[t]
                  ? o[t].name.replace(/\.pdf$/i, "").slice(0, 18)
                  : `Document ${t + 1}`,
              },
              t,
            ),
          ),
        }),
      e.jsx("div", {
        style: {
          flex: 1,
          display: "grid",
          gridTemplateColumns: A ? "1fr" : "1fr 1fr",
          gap: "1px",
          background: r.border,
          overflow: "hidden",
        },
        children: [0, 1].map((t) => {
          const d = !A || B === t;
          return e.jsxs(
            "div",
            {
              style: {
                display: d ? "flex" : "none",
                flexDirection: "column",
                background: r.bg,
                overflow: "hidden",
              },
              children: [
                e.jsx("div", {
                  style: {
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.5rem 0.875rem",
                    borderBottom: `1px solid ${r.border}`,
                    background: r.panel,
                    minHeight: 44,
                  },
                  children: o[t]
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            style: { flex: 1, minWidth: 0 },
                            children: [
                              e.jsx("p", {
                                style: {
                                  fontSize: "0.78rem",
                                  fontWeight: 500,
                                  color: r.t1,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                },
                                children: o[t].name,
                              }),
                              e.jsxs("p", {
                                style: {
                                  fontSize: "0.62rem",
                                  color: r.t3,
                                  marginTop: "0.1rem",
                                  fontVariantNumeric: "tabular-nums",
                                },
                                children: [
                                  (o[t].size / 1024 / 1024).toFixed(1),
                                  " MB ·",
                                  " ",
                                  w[t],
                                  "p",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            "aria-label": "Action",
                            className: "cmpClose",
                            onClick: () => de(t),
                            style: {
                              marginLeft: "0.5rem",
                              padding: "0.25rem",
                              color: r.t4,
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              transition: "color 0.15s",
                              borderRadius: 3,
                            },
                            children: e.jsxs("svg", {
                              width: "12",
                              height: "12",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "1.75",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: [
                                e.jsx("line", {
                                  x1: "18",
                                  y1: "6",
                                  x2: "6",
                                  y2: "18",
                                }),
                                e.jsx("line", {
                                  x1: "6",
                                  y1: "6",
                                  x2: "18",
                                  y2: "18",
                                }),
                              ],
                            }),
                          }),
                        ],
                      })
                    : e.jsxs("p", {
                        style: {
                          fontSize: "0.6rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: r.t4,
                        },
                        children: ["Document ", t + 1],
                      }),
                }),
                o[t]
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          ref: (i) => {
                            q.current[t] = i;
                          },
                          className: "cmpScroll",
                          style: {
                            flex: 1,
                            overflow: "auto",
                            background: r.canvas,
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            padding: "1.25rem 1rem",
                          },
                          children: e.jsx("canvas", {
                            ref: (i) => {
                              M.current[t] = i;
                            },
                            style: {
                              display: "block",
                              maxWidth: "100%",
                              height: "auto",
                              boxShadow: `0 0 0 1px ${r.border}, 0 8px 40px rgba(0,0,0,0.6)`,
                            },
                          }),
                        }),
                        e.jsxs("div", {
                          style: {
                            flexShrink: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                            padding: "0.5rem 0.875rem",
                            borderTop: `1px solid ${r.border}`,
                            background: r.panel,
                          },
                          children: [
                            e.jsx("button", {
                              "aria-label": "Arrow",
                              className: "cmpNav",
                              onClick: () => Z(t, -1),
                              disabled: c[t] <= 1,
                              style: {
                                width: 28,
                                height: 28,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `1px solid ${r.border}`,
                                borderRadius: 4,
                                background: "transparent",
                                color: c[t] <= 1 ? r.t5 : r.t3,
                                cursor: c[t] <= 1 ? "not-allowed" : "pointer",
                                transition: "all 0.15s",
                              },
                              children: e.jsx(oe, { left: !0 }),
                            }),
                            e.jsxs("span", {
                              style: {
                                fontSize: "0.7rem",
                                fontVariantNumeric: "tabular-nums",
                                color: r.t3,
                                minWidth: 56,
                                textAlign: "center",
                                letterSpacing: "0.06em",
                              },
                              children: [
                                c[t],
                                " ",
                                e.jsx("span", {
                                  style: { color: r.t5 },
                                  children: "/",
                                }),
                                " ",
                                w[t],
                              ],
                            }),
                            e.jsx("button", {
                              "aria-label": "Arrow",
                              className: "cmpNav",
                              onClick: () => Z(t, 1),
                              disabled: c[t] >= w[t],
                              style: {
                                width: 28,
                                height: 28,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: `1px solid ${r.border}`,
                                borderRadius: 4,
                                background: "transparent",
                                color: c[t] >= w[t] ? r.t5 : r.t3,
                                cursor:
                                  c[t] >= w[t] ? "not-allowed" : "pointer",
                                transition: "all 0.15s",
                              },
                              children: e.jsx(oe, {}),
                            }),
                          ],
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "cmpDrop",
                      onDragOver: (i) => {
                        (i.preventDefault(),
                          O((n) => {
                            const l = [...n];
                            return ((l[t] = !0), l);
                          }));
                      },
                      onDragLeave: () =>
                        O((i) => {
                          const n = [...i];
                          return ((n[t] = !1), n);
                        }),
                      onDrop: (i) => {
                        (i.preventDefault(),
                          O((l) => {
                            const p = [...l];
                            return ((p[t] = !1), p);
                          }));
                        const n = i.dataTransfer.files[0];
                        n && J(n, t);
                      },
                      onClick: () =>
                        document.getElementById(`cu-${t}`)?.click(),
                      style: {
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2.5rem 1.5rem",
                        background: W[t]
                          ? "rgba(255,255,255,0.04)"
                          : "transparent",
                        transition: "background 0.2s",
                        cursor: "pointer",
                      },
                      children: [
                        e.jsx("input", {
                          id: `cu-${t}`,
                          type: "file",
                          accept: "application/pdf",
                          style: { display: "none" },
                          onChange: (i) =>
                            i.target.files[0] && J(i.target.files[0], t),
                        }),
                        e.jsx("div", {
                          style: {
                            width: 46,
                            height: 46,
                            borderRadius: "50%",
                            border: `1px solid ${r.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "1.25rem",
                            background: r.panel,
                          },
                          children: e.jsxs("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: r.t4,
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                              e.jsx("path", {
                                d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                              }),
                              e.jsx("polyline", { points: "17 8 12 3 7 8" }),
                              e.jsx("line", {
                                x1: "12",
                                y1: "3",
                                x2: "12",
                                y2: "15",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("p", {
                          style: {
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: W[t] ? r.t2 : r.t3,
                            marginBottom: "0.35rem",
                            transition: "color 0.2s",
                          },
                          children: W[t] ? "Release to load" : "Drop PDF here",
                        }),
                        e.jsx("p", {
                          style: {
                            fontSize: "0.63rem",
                            color: r.t4,
                            letterSpacing: "0.04em",
                          },
                          children: "or click to browse · max 150 MB",
                        }),
                      ],
                    }),
              ],
            },
            t,
          );
        }),
      }),
    ],
  });
}
export { Le as default };
