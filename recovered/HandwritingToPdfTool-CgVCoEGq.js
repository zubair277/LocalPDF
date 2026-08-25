import { r as b, j as e } from "./react-vendor-Bc7KCos-.js";
const Ae = "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
  Ee = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  Ne =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  ke = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
function me(s) {
  return new Promise((c, l) => {
    if (document.querySelector(`script[src="${s}"]`)) return c();
    const n = document.createElement("script");
    ((n.src = s),
      (n.onload = c),
      (n.onerror = () => l(new Error("Failed to load " + s))),
      document.head.appendChild(n));
  });
}
function Se() {
  return new Promise((s, c) => {
    if (window.Tesseract) return s(window.Tesseract);
    if (document.querySelector(`script[src="${ke}"]`)) {
      const r = setInterval(() => {
        window.Tesseract && (clearInterval(r), s(window.Tesseract));
      }, 100);
      return;
    }
    const n = document.createElement("script");
    ((n.src = ke),
      (n.onload = () => s(window.Tesseract)),
      (n.onerror = () => c(new Error("Failed to load the OCR engine"))),
      document.head.appendChild(n));
  });
}
function Pe(s) {
  return new Promise((c, l) => {
    const n = new Image();
    ((n.onload = () => c(n)), (n.onerror = l), (n.src = s));
  });
}
let Oe = 0;
const De = () => `p${Date.now()}_${Oe++}`,
  X = ({ children: s, size: c = 16, className: l = "" }) =>
    e.jsx("svg", {
      width: c,
      height: c,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: l,
      children: s,
    }),
  _e = (s) =>
    e.jsxs(X, {
      ...s,
      children: [
        e.jsx("polyline", { points: "16 16 12 12 8 16" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" }),
      ],
    }),
  We = (s) =>
    e.jsxs(X, {
      ...s,
      children: [
        e.jsx("polyline", { points: "8 17 12 21 16 17" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.09" }),
      ],
    }),
  Ue = (s) =>
    e.jsxs(X, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  ue = (s) =>
    e.jsxs(X, {
      ...s,
      className: `animate-spin ${s.className || ""}`,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  Fe = (s) =>
    e.jsx(X, {
      ...s,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  Ce = (s) =>
    e.jsxs(X, {
      ...s,
      children: [
        e.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2",
        }),
        e.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        e.jsx("polyline", { points: "21 15 16 10 5 21" }),
      ],
    }),
  re = (s) =>
    e.jsxs(X, {
      ...s,
      children: [
        e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
        e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
        e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
      ],
    }),
  Be = (s) =>
    e.jsx(X, {
      ...s,
      children: e.jsx("polyline", { points: "18 15 12 9 6 15" }),
    }),
  Ge = (s) =>
    e.jsx(X, {
      ...s,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  He = [
    {
      id: "bw",
      label: "B&W scan",
      desc: "Crisp black ink on white — the classic scanned look.",
    },
    {
      id: "gray",
      label: "Grayscale",
      desc: "Keeps soft tones — best for pencil.",
    },
    {
      id: "color",
      label: "Colour",
      desc: "Whitens paper, keeps coloured ink.",
    },
    {
      id: "whiteboard",
      label: "Whiteboard",
      desc: "For marker on a whiteboard.",
    },
  ],
  se = {
    auto: { label: "Fit image", pt: null },
    a4: { label: "A4", pt: [595.28, 841.89] },
    letter: { label: "Letter", pt: [612, 792] },
    legal: { label: "Legal", pt: [612, 1008] },
  },
  Q = [
    {
      id: "sans",
      label: "Sans",
      std: "Helvetica",
      css: "Helvetica, Arial, sans-serif",
    },
    {
      id: "serif",
      label: "Serif",
      std: "TimesRoman",
      css: "Georgia, 'Times New Roman', serif",
    },
    {
      id: "mono",
      label: "Mono",
      std: "Courier",
      css: "'Courier New', monospace",
    },
  ];
function ce(s, c, l, n) {
  const r = Math.ceil(s / l),
    d = Math.ceil(c / l),
    p = new Float32Array(r * d);
  for (let h = 0; h < d; h++)
    for (let g = 0; g < r; g++) {
      let F = 1;
      const I = Math.min(s, (g + 1) * l),
        q = Math.min(c, (h + 1) * l);
      for (let u = h * l; u < q; u++)
        for (let C = g * l; C < I; C++) {
          const P = n(u * s + C);
          P > F && (F = P);
        }
      p[h * r + g] = F;
    }
  const E = new Float32Array(r * d);
  for (let h = 0; h < d; h++)
    for (let g = 0; g < r; g++) {
      let F = 1;
      for (let I = -1; I <= 1; I++) {
        const q = h + I;
        if (!(q < 0 || q >= d))
          for (let u = -1; u <= 1; u++) {
            const C = g + u;
            if (C < 0 || C >= r) continue;
            const P = p[q * r + C];
            P > F && (F = P);
          }
      }
      E[h * r + g] = F;
    }
  return (h, g) =>
    E[Math.min(d - 1, (g / l) | 0) * r + Math.min(r - 1, (h / l) | 0)] || 1;
}
const fe = (s) => (s < 0 ? 0 : s > 255 ? 255 : s);
function oe(s, c, l, n) {
  const r = s.width,
    d = s.height,
    h = s
      .getContext("2d", { willReadFrequently: !0 })
      .getImageData(0, 0, r, d).data,
    g = Math.max(12, Math.min(70, Math.round(Math.max(r, d) / 18))),
    F = document.createElement("canvas");
  ((F.width = r), (F.height = d));
  const I = F.getContext("2d"),
    q = I.createImageData(r, d),
    u = q.data;
  if (c === "color" || c === "whiteboard") {
    const C = ce(r, d, g, (v) => h[v * 4]),
      P = ce(r, d, g, (v) => h[v * 4 + 1]),
      Y = ce(r, d, g, (v) => h[v * 4 + 2]),
      O = 1 + n * 0.9,
      Z = c === "whiteboard" ? 1.5 : 1.12,
      H = l * 40;
    for (let v = 0; v < d; v++)
      for (let S = 0; S < r; S++) {
        const R = v * r + S,
          D = R * 4;
        let _ = (h[D] / C(S, v)) * 255,
          M = (h[D + 1] / P(S, v)) * 255,
          W = (h[D + 2] / Y(S, v)) * 255;
        ((_ = (_ - 255) * O + 255 + H),
          (M = (M - 255) * O + 255 + H),
          (W = (W - 255) * O + 255 + H));
        const w = 0.299 * _ + 0.587 * M + 0.114 * W;
        ((_ = w + (_ - w) * Z),
          (M = w + (M - w) * Z),
          (W = w + (W - w) * Z),
          (u[D] = fe(_)),
          (u[D + 1] = fe(M)),
          (u[D + 2] = fe(W)),
          (u[D + 3] = 255));
      }
  } else {
    const C = (R) =>
        0.299 * h[R * 4] + 0.587 * h[R * 4 + 1] + 0.114 * h[R * 4 + 2],
      P = ce(r, d, g, C),
      Y = c === "bw" ? [0.55, 0.9] : [0.32, 0.98],
      O = (Y[0] + Y[1]) / 2,
      Z = ((Y[1] - Y[0]) / 2) * (1 - n * 0.6),
      H = O - Z - l * 0.12,
      v = O + Z - l * 0.12,
      S = 1 / Math.max(0.02, v - H);
    for (let R = 0; R < d; R++)
      for (let D = 0; D < r; D++) {
        const _ = R * r + D,
          M = _ * 4;
        let w = (C(_) / P(D, R) - H) * S;
        ((w = w < 0 ? 0 : w > 1 ? 1 : w),
          c === "bw" && (w = w * w * (3 - 2 * w)));
        const U = (w * 255) | 0;
        ((u[M] = u[M + 1] = u[M + 2] = U), (u[M + 3] = 255));
      }
  }
  return (I.putImageData(q, 0, 0), F);
}
async function qe(s, c) {
  const n = await (
    await Se()
  ).createWorker("eng", 1, {
    logger: (d) => {
      d.status === "recognizing text" && c && c(Math.round(d.progress * 100));
    },
  });
  let r = "";
  try {
    const { data: d } = await n.recognize(s);
    r = d.text || "";
  } finally {
    await n.terminate();
  }
  return r
    .replace(
      /\n{3,}/g,
      `

`,
    )
    .trim();
}
const Je = {
  "‘": "'",
  "’": "'",
  "“": '"',
  "”": '"',
  "–": "-",
  "—": "-",
  "…": "...",
  " ": " ",
  "•": "-",
};
function Ke(s) {
  const c = (s || "").replace(
    /[\u2018\u2019\u201C\u201D\u2013\u2014\u2026\u00A0\u2022]/g,
    (n) => Je[n],
  );
  let l = "";
  for (const n of c) n.charCodeAt(0) <= 255 && (l += n);
  return l;
}
function Ve(s) {
  if (Array.isArray(s?.words) && s.words.length) return s.words;
  const c = [];
  for (const l of s?.blocks || [])
    for (const n of l.paragraphs || [])
      for (const r of n.lines || []) for (const d of r.words || []) c.push(d);
  return c;
}
async function Xe(s, c) {
  const n = await (
    await Se()
  ).createWorker("eng", 1, {
    logger: (r) => {
      r.status === "recognizing text" && c && c(Math.round(r.progress * 100));
    },
  });
  try {
    const { data: r } = await n.recognize(s, {}, { blocks: !0, text: !0 });
    return {
      words: Ve(r)
        .map((p) => ({
          text: Ke(p.text || "").trim(),
          conf: p.confidence ?? 100,
          x0: p.bbox?.x0,
          y0: p.bbox?.y0,
          x1: p.bbox?.x1,
          y1: p.bbox?.y1,
        }))
        .filter(
          (p) =>
            p.text &&
            Number.isFinite(p.x0) &&
            Number.isFinite(p.y0) &&
            p.x1 > p.x0 &&
            p.y1 > p.y0,
        ),
      width: s.width,
      height: s.height,
    };
  } finally {
    await n.terminate();
  }
}
function Ze({ showNotification: s }) {
  const [c, l] = b.useState(!1),
    [n, r] = b.useState([]),
    [d, p] = b.useState(!1),
    [E, h] = b.useState("digital"),
    [g, F] = b.useState("bw"),
    [I, q] = b.useState("sans"),
    [u, C] = b.useState(12),
    [P, Y] = b.useState(0),
    [O, Z] = b.useState(0.15),
    [H, v] = b.useState("auto"),
    [S, R] = b.useState(0),
    [D, _] = b.useState(null),
    [M, W] = b.useState(!1),
    [w, U] = b.useState(""),
    [we, Me] = b.useState(""),
    le = b.useRef();
  b.useEffect(() => {
    Promise.all([me(Ae), me(Ee)])
      .then(() => me(Ne).catch(() => {}))
      .then(() => {
        (window.pdfjsLib &&
          !window.pdfjsLib.GlobalWorkerOptions.workerSrc &&
          (window.pdfjsLib.GlobalWorkerOptions.workerSrc = Ne),
          l(!!window.PDFLib));
      })
      .catch((t) => s?.("Library load failed: " + t.message, "error"));
  }, [s]);
  const je = async (t) => {
      const i = (a) => a.type === "application/pdf" || /\.pdf$/i.test(a.name),
        o = [];
      W(!0);
      try {
        for (const a of t)
          if (i(a)) {
            if (!window.pdfjsLib) continue;
            U(`Opening ${a.name}…`);
            const x = await a.arrayBuffer(),
              f = await window.pdfjsLib.getDocument({ data: new Uint8Array(x) })
                .promise;
            for (let L = 1; L <= f.numPages; L++) {
              U(`Loading ${a.name} — page ${L}/${f.numPages}…`);
              const T = await f.getPage(L),
                j = T.getViewport({ scale: 1 }),
                B = Math.min(2.5, 2e3 / Math.max(j.width, j.height)),
                G = T.getViewport({ scale: B }),
                z = document.createElement("canvas");
              ((z.width = Math.floor(G.width)),
                (z.height = Math.floor(G.height)));
              const y = z.getContext("2d");
              ((y.fillStyle = "#fff"),
                y.fillRect(0, 0, z.width, z.height),
                await T.render({ canvasContext: y, viewport: G }).promise);
              const N = await Pe(z.toDataURL("image/png"));
              (o.push({ id: De(), name: `${a.name} · p${L}`, img: N }),
                T.cleanup?.());
            }
          } else if (a.type.startsWith("image/")) {
            const x = await Pe(URL.createObjectURL(a));
            o.push({ id: De(), name: a.name, img: x });
          }
      } catch (a) {
        s?.("Couldn't read that file: " + a.message, "error");
      } finally {
        (W(!1), U(""));
      }
      if (!o.length) {
        s?.("Please choose a PDF or image files", "error");
        return;
      }
      r((a) => [...a, ...o]);
    },
    Le = (t) =>
      r((i) => {
        const o = i.filter((a) => a.id !== t);
        return (R((a) => Math.max(0, Math.min(a, o.length - 1))), o);
      }),
    ye = (t, i) =>
      r((o) => {
        const a = t + i;
        if (a < 0 || a >= o.length) return o;
        const x = [...o];
        return (([x[t], x[a]] = [x[a], x[t]]), x);
      }),
    ee = b.useCallback((t, i = 2200) => {
      const o = Math.min(1, i / Math.max(t.naturalWidth, t.naturalHeight)),
        a = Math.max(1, Math.round(t.naturalWidth * o)),
        x = Math.max(1, Math.round(t.naturalHeight * o)),
        f = document.createElement("canvas");
      return (
        (f.width = a),
        (f.height = x),
        f.getContext("2d").drawImage(t, 0, 0, a, x),
        f
      );
    }, []);
  b.useEffect(() => {
    if (E !== "scan" || !n[S]) {
      _(null);
      return;
    }
    let t = !1;
    const i = setTimeout(() => {
      try {
        const o = ee(n[S].img, 1400),
          a = oe(o, g, P, O);
        t || _(a.toDataURL("image/jpeg", 0.9));
      } catch {}
    }, 160);
    return () => {
      ((t = !0), clearTimeout(i));
    };
  }, [n, S, g, P, O, E, ee]);
  const $e = async () => {
      const { PDFDocument: t } = window.PDFLib,
        i = await t.create(),
        o = se[H].pt;
      for (let a = 0; a < n.length; a++) {
        U(`Enhancing page ${a + 1} of ${n.length}…`);
        const x = ee(n[a].img),
          f = oe(x, g, P, O),
          L = g === "bw" || g === "gray",
          T = f.toDataURL(L ? "image/png" : "image/jpeg", 0.92),
          j = await fetch(T).then((y) => y.arrayBuffer()),
          B = L ? await i.embedPng(j) : await i.embedJpg(j),
          G = f.width,
          z = f.height;
        if (o) {
          const [y, N] = o,
            $ = i.addPage([y, N]),
            K = 24,
            V = Math.min((y - 2 * K) / G, (N - 2 * K) / z),
            A = G * V,
            m = z * V;
          $.drawImage(B, {
            x: (y - A) / 2,
            y: (N - m) / 2,
            width: A,
            height: m,
          });
        } else {
          const y = (G * 72) / 150,
            N = (z * 72) / 150;
          i.addPage([y, N]).drawImage(B, { x: 0, y: 0, width: y, height: N });
        }
      }
      return i.save();
    },
    Ie = async (t) => {
      const { PDFDocument: i, StandardFonts: o, rgb: a } = window.PDFLib,
        x = await i.create(),
        f = (Q.find((A) => A.id === I) || Q[0]).std,
        L = await x.embedFont(o[f]),
        [T, j] = se[H].pt || se.a4.pt,
        B = 56,
        G = u,
        z = u * 1.5,
        y = T - 2 * B;
      let N = x.addPage([T, j]),
        $ = j - B;
      const K = () => {
          ((N = x.addPage([T, j])), ($ = j - B));
        },
        V = (A) => {
          ($ < B && K(),
            N.drawText(A, {
              x: B,
              y: $,
              size: G,
              font: L,
              color: a(0.1, 0.1, 0.12),
            }),
            ($ -= z));
        };
      for (const A of t.split(`
`)) {
        if (!A.trim()) {
          $ -= z * 0.6;
          continue;
        }
        let m = "";
        for (const te of A.split(/\s+/)) {
          const k = m ? m + " " + te : te;
          L.widthOfTextAtSize(k, G) > y && m ? (V(m), (m = te)) : (m = k);
        }
        m && V(m);
      }
      return x.save();
    },
    Re = async () => {
      const { PDFDocument: t, StandardFonts: i, rgb: o } = window.PDFLib,
        a = await t.create(),
        x = (Q.find((j) => j.id === I) || Q[0]).std,
        f = await a.embedFont(i[x]),
        L = se[H].pt;
      let T = 0;
      for (let j = 0; j < n.length; j++) {
        U(`Reading page ${j + 1} of ${n.length}…`);
        const B = ee(n[j].img),
          G = oe(B, "bw", P, Math.max(O, 0.2)),
          {
            words: z,
            width: y,
            height: N,
          } = await Xe(G, (k) =>
            U(`Reading page ${j + 1} of ${n.length}… ${k}%`),
          );
        T += z.length;
        let $, K, V, A, m;
        if (!L) ((m = 72 / 150), ($ = y * m), (K = N * m), (V = 0), (A = 0));
        else {
          [$, K] = L;
          const k = 24;
          ((m = Math.min(($ - 2 * k) / y, (K - 2 * k) / N)),
            (V = ($ - y * m) / 2),
            (A = (K - N * m) / 2));
        }
        const te = a.addPage([$, K]);
        for (const k of z) {
          const he = (k.x1 - k.x0) * m,
            ze = (k.y1 - k.y0) * m;
          if (he <= 0 || ze <= 0) continue;
          let ie = Math.max(4, ze / 0.72);
          const ge = f.widthOfTextAtSize(k.text, ie);
          (ge > he && ge > 0 && (ie *= he / ge),
            te.drawText(k.text, {
              x: V + k.x0 * m,
              y: A + (N - k.y1) * m + ie * 0.2,
              size: ie,
              font: f,
              color: o(0.1, 0.1, 0.12),
            }));
        }
      }
      return { bytes: await a.save(), recognised: T };
    },
    de = (t, i) => {
      const o = new Blob([t], { type: "application/pdf" }),
        a = URL.createObjectURL(o),
        x = document.createElement("a");
      ((x.href = a),
        (x.download = `handwriting_${i}.pdf`),
        x.click(),
        setTimeout(() => URL.revokeObjectURL(a), 4e3));
    },
    Te = async () => {
      if (!(!n.length || !c)) {
        W(!0);
        try {
          if (E === "digital") {
            const { bytes: t, recognised: i } = await Re();
            if (!i) {
              s?.(
                "No text recognised — the handwriting may be too faint, too cursive, or the scan too low-resolution.",
                "error",
              );
              return;
            }
            (de(t, "digital"),
              s?.(
                `Converted ${i} words to digital text, layout preserved`,
                "success",
              ));
          } else if (E === "transcribe") {
            let t = "";
            for (let i = 0; i < n.length; i++) {
              U(`Reading page ${i + 1} of ${n.length}…`);
              const o = ee(n[i].img),
                a = oe(o, "bw", 0, 0.2),
                x = await qe(a, (f) =>
                  U(`Reading page ${i + 1} of ${n.length}… ${f}%`),
                );
              t +=
                (t
                  ? `

`
                  : "") + x;
            }
            if ((Me(t), U("Building PDF…"), !t.trim())) {
              s?.(
                "No text recognised — the handwriting may be too faint or cursive.",
                "error",
              );
              return;
            }
            (de(await Ie(t), "text"),
              s?.("Downloaded transcribed text PDF", "success"));
          } else {
            const t = await $e();
            (de(t, "scan"), s?.(`Downloaded ${n.length}-page PDF`, "success"));
          }
        } catch (t) {
          s?.("Error: " + t.message, "error");
        } finally {
          (W(!1), U(""));
        }
      }
    },
    ve = (t) =>
      `px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${t ? "bg-zinc-800 border-zinc-500 text-white ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"}`,
    ne = "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-5",
    xe = "text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5",
    pe = ({ n: t, title: i, right: o }) =>
      e.jsxs("div", {
        className: "flex items-center gap-2.5 mb-4",
        children: [
          e.jsx("span", {
            className:
              "w-5 h-5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-black flex items-center justify-center shrink-0",
            children: t,
          }),
          e.jsx("span", {
            className:
              "text-[11px] font-black text-zinc-200 uppercase tracking-[1.5px]",
            children: i,
          }),
          o && e.jsx("span", { className: "ml-auto", children: o }),
        ],
      }),
    ae = ({ children: t }) =>
      e.jsx("span", {
        className:
          "inline-flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-zinc-900/70 border border-zinc-800 rounded-full px-2.5 py-1",
        children: t,
      }),
    J = E === "scan";
  return e.jsxs("div", {
    className: "flex flex-col max-w-5xl mx-auto w-full pb-12",
    children: [
      e.jsxs("div", {
        className: "mb-7",
        children: [
          e.jsxs("div", {
            className:
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] font-black uppercase tracking-wider mb-3.5",
            children: [e.jsx(re, { size: 11 }), " Handwriting Digitiser"],
          }),
          e.jsxs("h1", {
            className:
              "text-2xl sm:text-[30px] leading-[1.15] font-black text-white tracking-tight",
            children: [
              "Handwritten PDF to",
              " ",
              e.jsx("span", {
                className:
                  "underline decoration-zinc-700 decoration-2 underline-offset-[6px]",
                children: "digital text",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-zinc-400 text-sm mt-2.5 max-w-xl leading-relaxed",
            children:
              "Upload a handwritten PDF (or photos) and get back a clean PDF typed in real computer fonts — the handwriting is read and re-typeset. Or keep the handwriting and just clean up the scan. Everything runs in your browser.",
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2 mt-4",
            children: [
              e.jsxs(ae, {
                children: [
                  e.jsx(Fe, { size: 11, className: "text-emerald-400" }),
                  " 100% private",
                ],
              }),
              e.jsx(ae, { children: "No upload" }),
              e.jsx(ae, { children: "No watermark" }),
              e.jsx(ae, { children: "Multi-page" }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid lg:grid-cols-[1fr_390px] gap-5 items-start",
        children: [
          e.jsxs("div", {
            className: "flex flex-col gap-4 min-w-0",
            children: [
              e.jsxs("div", {
                className: ne,
                children: [
                  e.jsx(pe, {
                    n: "1",
                    title: "Your pages",
                    right: n.length
                      ? e.jsx("button", {
                          onClick: () => le.current?.click(),
                          className:
                            "text-[10px] font-bold text-zinc-300 hover:text-white",
                          children: "+ Add more",
                        })
                      : null,
                  }),
                  n.length
                    ? e.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: n.map((t, i) =>
                          e.jsxs(
                            "div",
                            {
                              onClick: () => R(i),
                              className: `flex items-center gap-3 p-2 rounded-xl border cursor-pointer transition-all ${S === i ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-12 rounded-md bg-zinc-950 border border-zinc-800 overflow-hidden shrink-0 flex items-center justify-center",
                                  children: e.jsx("img", {
                                    src: t.img.src,
                                    alt: "",
                                    className:
                                      "max-w-full max-h-full object-cover",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "text-xs font-semibold text-zinc-200 truncate",
                                      children: ["Page ", i + 1],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[10px] text-zinc-600 truncate",
                                      children: t.name,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx("button", {
                                      "aria-label": "Move up",
                                      onClick: (o) => {
                                        (o.stopPropagation(), ye(i, -1));
                                      },
                                      disabled: i === 0,
                                      className:
                                        "p-1 text-zinc-500 hover:text-zinc-200 disabled:opacity-25",
                                      children: e.jsx(Be, { size: 13 }),
                                    }),
                                    e.jsx("button", {
                                      "aria-label": "Move down",
                                      onClick: (o) => {
                                        (o.stopPropagation(), ye(i, 1));
                                      },
                                      disabled: i === n.length - 1,
                                      className:
                                        "p-1 text-zinc-500 hover:text-zinc-200 disabled:opacity-25",
                                      children: e.jsx(Ge, { size: 13 }),
                                    }),
                                    e.jsx("button", {
                                      "aria-label": "Remove page",
                                      onClick: (o) => {
                                        (o.stopPropagation(), Le(t.id));
                                      },
                                      className:
                                        "p-1 text-zinc-500 hover:text-red-400",
                                      children: e.jsx(Ue, { size: 13 }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t.id,
                          ),
                        ),
                      })
                    : e.jsxs("div", {
                        onDragOver: (t) => {
                          (t.preventDefault(), p(!0));
                        },
                        onDragLeave: () => p(!1),
                        onDrop: (t) => {
                          (t.preventDefault(),
                            p(!1),
                            je([...t.dataTransfer.files]));
                        },
                        onClick: () => le.current?.click(),
                        className: `group flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-2xl cursor-pointer transition-all py-12 px-8 ${d ? "border-zinc-400 bg-zinc-800/40" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/60"}`,
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform",
                            children: e.jsx(_e, {
                              size: 20,
                              className: "text-zinc-300",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("div", {
                                className: "text-white font-bold text-sm",
                                children: "Drop a handwritten PDF or photos",
                              }),
                              e.jsx("div", {
                                className: "text-zinc-500 text-xs",
                                children:
                                  "or click to browse — PDF, JPG or PNG, multiple pages",
                              }),
                            ],
                          }),
                        ],
                      }),
                  e.jsx("input", {
                    ref: le,
                    type: "file",
                    accept: "application/pdf,image/*",
                    multiple: !0,
                    className: "hidden",
                    onChange: (t) => je([...t.target.files]),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: ne,
                children: [
                  e.jsx(pe, { n: "2", title: "Output" }),
                  e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                    children: [
                      {
                        id: "digital",
                        Icon: re,
                        title: "Digital text — same layout",
                        desc: "Replace the handwriting with a computer font, keeping every word in its original place.",
                      },
                      {
                        id: "transcribe",
                        Icon: re,
                        title: "Digital text — reflowed",
                        desc: "Re-typeset the text as clean paragraphs on a fresh page. Layout is not preserved.",
                      },
                      {
                        id: "scan",
                        Icon: Ce,
                        title: "Clean scan",
                        desc: "Keep the handwriting — just enhance and bundle into a PDF.",
                      },
                    ].map((t) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => h(t.id),
                          className: `text-left p-3 rounded-xl border transition-all ${E === t.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5 mb-1",
                              children: [
                                e.jsx(t.Icon, {
                                  size: 13,
                                  className: "text-zinc-300",
                                }),
                                e.jsx("span", {
                                  className: "text-xs font-black text-zinc-100",
                                  children: t.title,
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "text-[9px] text-zinc-500 leading-relaxed",
                              children: t.desc,
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: ne,
                children: [
                  e.jsx(pe, { n: "3", title: J ? "Enhance" : "Layout" }),
                  J &&
                    e.jsxs("div", {
                      className: "mb-4",
                      children: [
                        e.jsx("div", {
                          className: xe,
                          children: "Colour mode",
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                          children: He.map((t) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => F(t.id),
                                title: t.desc,
                                className: `p-2.5 rounded-xl border text-left transition-all ${g === t.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                                children: e.jsx("div", {
                                  className:
                                    "text-[11px] font-black text-zinc-100",
                                  children: t.label,
                                }),
                              },
                              t.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: e.jsxs("div", {
                      children: [
                        e.jsx("div", { className: xe, children: "Page size" }),
                        e.jsx("div", {
                          className: "flex gap-1.5 flex-wrap",
                          children: Object.entries(se).map(([t, i]) =>
                            !J && t === "auto"
                              ? null
                              : e.jsx(
                                  "button",
                                  {
                                    onClick: () => v(t),
                                    className: ve(H === t),
                                    children: i.label,
                                  },
                                  t,
                                ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  J &&
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-4 mt-4",
                      children: [
                        e.jsx(be, {
                          label: "Brightness",
                          value: P,
                          min: -1,
                          max: 1,
                          step: 0.05,
                          onChange: Y,
                          fmt: (t) =>
                            `${t > 0 ? "+" : ""}${Math.round(t * 100)}`,
                        }),
                        e.jsx(be, {
                          label: "Contrast",
                          value: O,
                          min: -1,
                          max: 1,
                          step: 0.05,
                          onChange: Z,
                          fmt: (t) =>
                            `${t > 0 ? "+" : ""}${Math.round(t * 100)}`,
                        }),
                      ],
                    }),
                  !J &&
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-4 mt-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: xe,
                              children: "Output font",
                            }),
                            e.jsx("div", {
                              className: "flex gap-1.5 flex-wrap",
                              children: Q.map((t) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => q(t.id),
                                    className: ve(I === t.id),
                                    style: { fontFamily: t.css },
                                    children: t.label,
                                  },
                                  t.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsx(be, {
                          label: "Font size",
                          value: u,
                          min: 9,
                          max: 18,
                          step: 1,
                          onChange: C,
                          fmt: (t) => `${t}pt`,
                        }),
                      ],
                    }),
                  !J &&
                    e.jsx("div", {
                      className:
                        "text-[10px] text-zinc-500 mt-3 leading-relaxed",
                      children:
                        "The handwriting is read and re-typeset in your chosen font. Works best on clear, printed-style writing; heavy cursive may need a quick review.",
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("aside", {
            className: "lg:sticky lg:top-4 flex flex-col gap-3",
            children: [
              e.jsxs("div", {
                className: ne + " p-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between px-1 mb-2",
                    children: [
                      e.jsxs("span", {
                        className:
                          "text-[11px] font-black text-zinc-300 uppercase tracking-wider flex items-center gap-1.5",
                        children: [
                          e.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse",
                          }),
                          J ? "Preview" : "Convert",
                        ],
                      }),
                      n.length > 0 &&
                        J &&
                        e.jsxs("span", {
                          className: "text-[10px] text-zinc-500",
                          children: ["Page ", S + 1, " of ", n.length],
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center min-h-[360px] p-4",
                    children: n.length
                      ? J
                        ? D
                          ? e.jsx("img", {
                              src: D,
                              alt: "cleaned preview",
                              className:
                                "max-w-full max-h-[560px] w-auto rounded-md ring-1 ring-black/30 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]",
                            })
                          : e.jsx(ue, { size: 20, className: "text-zinc-400" })
                        : we
                          ? e.jsx("div", {
                              className:
                                "w-full max-h-[520px] overflow-auto bg-white text-zinc-900 rounded-md p-5 text-[13px] whitespace-pre-wrap leading-relaxed shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]",
                              style: {
                                fontFamily: (Q.find((t) => t.id === I) || Q[0])
                                  .css,
                              },
                              children: we,
                            })
                          : e.jsxs("div", {
                              className:
                                "text-zinc-600 text-xs flex flex-col items-center gap-2.5 py-14 text-center px-6",
                              children: [
                                e.jsx(re, {
                                  size: 22,
                                  className: "text-zinc-700",
                                }),
                                "Click download to OCR your pages into a text PDF — the transcript appears here.",
                              ],
                            })
                      : e.jsxs("div", {
                          className:
                            "text-zinc-600 text-xs flex flex-col items-center gap-2.5 py-14 text-center px-6",
                          children: [
                            e.jsx(Ce, { size: 22, className: "text-zinc-700" }),
                            "Add a handwritten PDF or photos to get started",
                          ],
                        }),
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: Te,
                disabled: M || !c || !n.length,
                className:
                  "w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm text-zinc-900 bg-zinc-100 enabled:hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.99]",
                children: M
                  ? e.jsxs(e.Fragment, {
                      children: [e.jsx(ue, { size: 16 }), " ", w || "Working…"],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(We, { size: 16 }),
                        J ? "Download PDF" : "Convert & download",
                      ],
                    }),
              }),
              e.jsx("div", {
                className:
                  "text-[10px] text-zinc-600 text-center flex items-center justify-center gap-1.5",
                children: c
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(Fe, {
                          size: 11,
                          className: "text-emerald-500/70",
                        }),
                        " PDF · no watermark · never uploaded",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(ue, { size: 11 }),
                        " Loading libraries…",
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function be({
  label: s,
  value: c,
  min: l,
  max: n,
  step: r,
  onChange: d,
  fmt: p,
}) {
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "flex justify-between text-[10px] text-zinc-500 mb-1.5",
        children: [
          e.jsx("span", { className: "font-medium", children: s }),
          e.jsx("span", {
            className: "text-zinc-300 tabular-nums",
            children: p ? p(c) : c,
          }),
        ],
      }),
      e.jsx("input", {
        type: "range",
        min: l,
        max: n,
        step: r,
        value: c,
        onChange: (E) => d(parseFloat(E.target.value)),
        className: "w-full",
        style: { accentColor: "#e4e4e7" },
      }),
    ],
  });
}
export { Ze as default };
