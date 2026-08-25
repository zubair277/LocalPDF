import { r as N, j as e } from "./react-vendor-Bc7KCos-.js";
const Rt = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  Ze =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  It = "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js";
function Te(t) {
  return new Promise((n, r) => {
    if (document.querySelector(`script[src="${t}"]`)) return n();
    const i = document.createElement("script");
    ((i.src = t),
      (i.onload = n),
      (i.onerror = () => r(new Error("Failed to load " + t))),
      document.head.appendChild(i));
  });
}
function Qe(t) {
  return new Promise((n, r) => {
    const i = new Image();
    ((i.onload = () => n(i)), (i.onerror = r), (i.src = t));
  });
}
const G = ({ children: t, size: n = 16, className: r = "" }) =>
    e.jsx("svg", {
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: r,
      children: t,
    }),
  Dt = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("polyline", { points: "16 16 12 12 8 16" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" }),
      ],
    }),
  Lt = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("polyline", { points: "8 17 12 21 16 17" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.09" }),
      ],
    }),
  Be = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  je = (t) =>
    e.jsxs(G, {
      ...t,
      className: `animate-spin ${t.className || ""}`,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  et = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }),
        e.jsx("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" }),
        e.jsx("path", { d: "M2 2l7.586 7.586" }),
        e.jsx("circle", { cx: "11", cy: "11", r: "2" }),
      ],
    }),
  tt = (t) =>
    e.jsx(G, {
      ...t,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  Tt = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("path", { d: "M3 7v6h6" }),
        e.jsx("path", { d: "M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" }),
      ],
    }),
  nt = (t) =>
    e.jsx(G, {
      ...t,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  Ft = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
        }),
        e.jsx("circle", { cx: "12", cy: "13", r: "4" }),
      ],
    }),
  At = (t) =>
    e.jsx(G, {
      ...t,
      children: e.jsx("path", {
        d: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z",
      }),
    }),
  Et = (t) =>
    e.jsxs(G, {
      ...t,
      children: [
        e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
        e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
        e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
      ],
    }),
  st = (t) =>
    e.jsxs(G, {
      ...t,
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
  U = 560,
  $e = 0.2,
  Q = 0.72,
  ae = (Q - $e) * U,
  ze = Q * U,
  Wt = {
    Lowercase: "abcdefghijklmnopqrstuvwxyz".split(""),
    Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    Numbers: "0123456789".split(""),
    Punctuation: `. , ' " ! ? ; : - ( ) / & @ # % $ + =`.split(" "),
  },
  V = Object.values(Wt).flat(),
  $t =
    "https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Patrick+Hand&family=Dancing+Script:wght@500&display=swap",
  ke = [
    {
      id: "casual",
      label: "Casual",
      css: "'Caveat', 'Segoe Print', 'Bradley Hand', cursive",
      probe: "32px Caveat",
    },
    {
      id: "neat",
      label: "Neat",
      css: "'Patrick Hand', 'Comic Sans MS', 'Segoe Print', cursive",
      probe: "32px 'Patrick Hand'",
    },
    {
      id: "cursive",
      label: "Cursive",
      css: "'Dancing Script', 'Snell Roundhand', 'Brush Script MT', cursive",
      probe: "32px 'Dancing Script'",
    },
  ];
function Bt() {
  return new Promise((t) => {
    if (!document.querySelector("link[data-hw-fonts]")) {
      const i = document.createElement("link");
      ((i.rel = "stylesheet"),
        (i.href = $t),
        i.setAttribute("data-hw-fonts", "1"),
        document.head.appendChild(i));
    }
    let n = !1;
    const r = () => {
      n || ((n = !0), t());
    };
    (Promise.all(ke.map((i) => document.fonts.load(i.probe).catch(() => {})))
      .then(r)
      .catch(r),
      setTimeout(r, 4e3));
  });
}
const Fe = [
    { id: "blue", label: "Blue", color: "#1a3a8f" },
    { id: "black", label: "Black", color: "#1a1a1a" },
    { id: "darkblue", label: "Navy", color: "#0d1b3e" },
    { id: "teal", label: "Teal", color: "#0f5a52" },
    { id: "red", label: "Red", color: "#9a1b1b" },
  ],
  Ae = [
    { id: "fine", label: "Fine", w: 0 },
    { id: "medium", label: "Medium", w: 5 },
    { id: "bold", label: "Bold", w: 11 },
  ],
  _t = [
    { id: "ruled", label: "Ruled" },
    { id: "yellow", label: "Legal" },
    { id: "plain", label: "Plain" },
    { id: "grid", label: "Grid" },
  ],
  ct = "hw_glyphs_v1",
  _e = 3;
function Ut(t) {
  const n = {};
  for (const r in t) {
    const i = t[r];
    Array.isArray(i)
      ? (n[r] = i.filter(Boolean).slice(0, _e))
      : i && i.img && (n[r] = [i]);
  }
  return n;
}
const Ot = () => {
    try {
      return Ut(JSON.parse(localStorage.getItem(ct)) || {});
    } catch {
      return {};
    }
  },
  Ee = (t) => {
    try {
      localStorage.setItem(ct, JSON.stringify(t));
    } catch {}
  };
function Se(t) {
  const n = t.width,
    r = t.height,
    l = t.getContext("2d").getImageData(0, 0, n, r).data;
  let u = n,
    c = r,
    a = -1,
    h = -1;
  for (let f = 0; f < r; f++)
    for (let m = 0; m < n; m++)
      l[(f * n + m) * 4 + 3] > 12 &&
        (m < u && (u = m),
        m > a && (a = m),
        f < c && (c = f),
        f > h && (h = f));
  if (a < 0) return null;
  const g = a - u + 1,
    b = h - c + 1,
    w = document.createElement("canvas");
  return (
    (w.width = g),
    (w.height = b),
    w.getContext("2d").drawImage(t, u, c, g, b, 0, 0, g, b),
    { canvas: w, w: g, h: b, offsetTop: c }
  );
}
const Ce = {};
function Ht() {
  for (const t in Ce) delete Ce[t];
}
function Gt(t, n) {
  if (t === " ") return null;
  let r = Ce[n];
  if (!r) {
    const c = document.createElement("canvas");
    ((c.width = U), (c.height = U));
    const a = c.getContext("2d");
    let h = ae / 0.68;
    (a.clearRect(0, 0, U, U),
      (a.fillStyle = "#111"),
      (a.textBaseline = "alphabetic"),
      (a.font = `${h}px ${n}`),
      a.fillText("H", 20, ze));
    const g = Se(c);
    (g && (h *= ae / g.h), (r = h), (Ce[n] = r));
  }
  const i = document.createElement("canvas");
  ((i.width = U), (i.height = U));
  const l = i.getContext("2d");
  (l.clearRect(0, 0, U, U),
    (l.fillStyle = "#111"),
    (l.textBaseline = "alphabetic"),
    (l.textAlign = "left"),
    (l.font = `${r}px ${n}`),
    l.fillText(t, 40, ze));
  const u = Se(i);
  return u
    ? { canvas: u.canvas, w: u.w, h: u.h, baseline: ze - u.offsetTop }
    : null;
}
function Xt(t, n, r, i, l = 0) {
  const u = document.createElement("canvas");
  ((u.width = n), (u.height = r));
  const c = u.getContext("2d");
  if (l > 0) {
    const a = l;
    for (const [h, g] of [
      [-a, 0],
      [a, 0],
      [0, -a],
      [0, a],
      [-a, -a],
      [a, a],
      [-a, a],
      [a, -a],
    ])
      c.drawImage(t, h, g, n, r);
  }
  return (
    c.drawImage(t, 0, 0, n, r),
    (c.globalCompositeOperation = "source-in"),
    (c.fillStyle = i),
    c.fillRect(0, 0, n, r),
    u
  );
}
function dt(t, n, r = 0) {
  const i = n + "|" + r;
  return (
    t._c || (t._c = {}),
    t._c[i] || (t._c[i] = Xt(t.raw, t.w, t.h, n, r)),
    t._c[i]
  );
}
const qt = 1240,
  Yt = 1754,
  We = {
    a4: { px: [1240, 1754], pt: [595.28, 841.89], label: "A4" },
    letter: { px: [1275, 1650], pt: [612, 792], label: "Letter" },
    legal: { px: [1275, 2100], pt: [612, 1008], label: "Legal" },
  };
function Jt(t, n, r, i, l, u) {
  if (
    (n === "yellow"
      ? (t.fillStyle = "#fdf6d3")
      : n === "plain"
        ? (t.fillStyle = "#ffffff")
        : (t.fillStyle = "#fffffb"),
    t.fillRect(0, 0, l, u),
    n === "grid")
  ) {
    ((t.strokeStyle = "#d6e4f0"), (t.lineWidth = 1));
    for (let c = 0; c <= l; c += 34)
      (t.beginPath(), t.moveTo(c, 0), t.lineTo(c, u), t.stroke());
    for (let c = 0; c <= u; c += 34)
      (t.beginPath(), t.moveTo(0, c), t.lineTo(l, c), t.stroke());
    return;
  }
  if (n !== "plain") {
    ((t.strokeStyle = n === "yellow" ? "#c8bd7a" : "#cdd9ec"),
      (t.lineWidth = 1.4));
    for (let c = i + 6; c < u - 60; c += r)
      (t.beginPath(), t.moveTo(60, c), t.lineTo(l - 50, c), t.stroke());
    ((t.strokeStyle = "#e7a0a8"),
      (t.lineWidth = 2),
      t.beginPath(),
      t.moveTo(108, 40),
      t.lineTo(108, u - 40),
      t.stroke());
  }
}
function ht(t) {
  let n = t >>> 0;
  return () => ((n = (n * 1664525 + 1013904223) >>> 0), n / 4294967296);
}
function at(t, n, r) {
  const {
      paper: i,
      fontSize: l,
      lineSpacing: u,
      slantDeg: c,
      messiness: a,
    } = r,
    h = r.inkColor || "#1a3a8f",
    g = r.penWeight || 0,
    b = r.pageW || qt,
    w = r.pageH || Yt,
    f = l / ae,
    m = l * u,
    z = 130,
    C = b - 70,
    y = 120,
    x = w - 110,
    v = l * 0.34,
    k = l * 0.03,
    S = (c * Math.PI) / 180,
    P = ht((2654435761 ^ t.length) + (r.seed || 0) * 2654435761),
    A = (I) => {
      const O = n.get(I);
      if (!O) return null;
      const H = O.variants;
      return H[Math.floor(P() * H.length) % H.length];
    },
    T = [];
  let d,
    o,
    j = 0;
  const M = () => {
    ((d = document.createElement("canvas")),
      (d.width = b),
      (d.height = w),
      (o = d.getContext("2d")),
      Jt(o, i, m, y, b, w),
      T.push(d));
  };
  M();
  let p = z,
    R = y + l;
  const W = (I) => {
      if (!I) {
        p += v;
        return;
      }
      const O = I.w * f,
        H = I.h * f,
        ie = S + (P() - 0.5) * a * 0.14,
        K = (P() - 0.5) * a * l * 0.09 + j,
        q = 1 + (P() - 0.5) * a * 0.1;
      (o.save(),
        (o.globalAlpha = 1 - P() * a * 0.22),
        o.translate(p, R + K),
        o.rotate(ie),
        o.scale(q, q),
        o.drawImage(dt(I, h, g), 0, -I.baseline * f, O, H),
        o.restore(),
        (p += O + k + (P() - 0.5) * a * l * 0.05));
    },
    E = (I = 0) => {
      ((p = z),
        (R += m + I),
        (j = (P() - 0.5) * a * l * 0.14),
        R > x && (M(), (R = y + l)));
    };
  j = (P() - 0.5) * a * l * 0.14;
  const X = t
    .replace(
      /\r\n/g,
      `
`,
    )
    .split(/\n{2,}/)
    .map((I) => I.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
  for (let I = 0; I < X.length; I++) {
    const O = X[I].split(/\s+/);
    for (const H of O) {
      const ie = [...H].map(A);
      let K = 0;
      for (const q of ie) K += q ? q.w * f + k : v;
      p > z && p + K > C && E();
      for (const q of ie) W(q);
      ((p += v), p > C && E());
    }
    I < X.length - 1 ? E(m * 0.35) : E();
  }
  return T;
}
const Vt = (t) => {
  let n = 2166136261;
  for (let r = 0; r < t.length; r++)
    ((n ^= t.charCodeAt(r)), (n = Math.imul(n, 16777619)));
  return n >>> 0;
};
function Kt(t, n, r, i, l, u, c, a) {
  const h = t.data,
    g = Math.cos(a),
    b = Math.sin(a),
    w = (C, y) => {
      ((C = C < 0 ? 0 : C >= n ? n - 1 : C | 0),
        (y = y < 0 ? 0 : y >= r ? r - 1 : y | 0));
      const x = (y * n + C) * 4;
      return [h[x], h[x + 1], h[x + 2]];
    },
    f = [
      [i - 5 * g, l - 5 * b],
      [i + (u + 5) * g, l + (u + 5) * b],
      [i + u * 0.5 * g - b * c * 0.55, l + u * 0.5 * b + g * c * 0.55],
      [i + u * 0.25 * g - b * c * 0.55, l + u * 0.25 * b + g * c * 0.55],
    ];
  let m = -1,
    z = [255, 255, 255];
  for (const [C, y] of f) {
    const x = w(C, y),
      v = 0.299 * x[0] + 0.587 * x[1] + 0.114 * x[2];
    v > m && ((m = v), (z = x));
  }
  return z;
}
function Zt(t, n, r, i, l, u, c, a) {
  const h = t.data,
    g = Math.max(0, i | 0),
    b = Math.min(n, (i + u) | 0),
    w = Math.max(0, (l - c * 0.8) | 0),
    f = Math.min(r, (l + c * 0.2) | 0);
  let m = 0,
    z = 0,
    C = 0,
    y = 0;
  for (let x = w; x < f; x++)
    for (let v = g; v < b; v++) {
      const k = (x * n + v) * 4,
        S = h[k] - a[0],
        P = h[k + 1] - a[1],
        A = h[k + 2] - a[2];
      S * S + P * P + A * A > 1600 &&
        ((m += h[k]), (z += h[k + 1]), (C += h[k + 2]), y++);
    }
  return y ? `rgb(${(m / y) | 0},${(z / y) | 0},${(C / y) | 0})` : null;
}
function Qt(t, n, r, i, l, u, c) {
  const a = l / ae,
    h = u.penWeight ? Math.max(1, Math.round(u.penWeight * 0.6)) : 0,
    g = l * 0.05,
    b = l * 0.32,
    w = ht(Vt(n) + (u.seed || 0) * 2654435761),
    f = [...n].map((x) => {
      if (x === " ") return null;
      const v = r.get(x);
      return v
        ? v.variants[Math.floor(w() * v.variants.length) % v.variants.length]
        : null;
    });
  let m = 0;
  for (const x of f) m += x ? x.w * a + g : b;
  const z = Math.max(0.32, Math.min(1.18, i / (m || 1))),
    C = (u.slantDeg * Math.PI) / 180;
  (t.save(), t.scale(z, 1));
  let y = 0;
  for (const x of f) {
    if (!x) {
      y += b;
      continue;
    }
    const v = x.w * a,
      k = x.h * a,
      S = C + (w() - 0.5) * u.messiness * 0.1,
      P = (w() - 0.5) * u.messiness * l * 0.06;
    (t.save(),
      t.translate(y, P),
      t.rotate(S),
      t.drawImage(dt(x, c, h), 0, -x.baseline * a, v, k),
      t.restore(),
      (y += v + g));
  }
  t.restore();
}
async function it(t, n, r, i, l) {
  const { PDFDocument: u } = window.PDFLib,
    c = window.pdfjsLib.Util,
    a = await window.pdfjsLib.getDocument({ data: t.slice() }).promise,
    h = l != null,
    g = h ? Math.min(Math.max(1, l), a.numPages) : 1,
    b = h ? g : a.numPages,
    w = [],
    f = [];
  for (let z = g; z <= b; z++) {
    i?.(z, a.numPages);
    const C = await a.getPage(z),
      y = C.getViewport({ scale: 1 });
    let x = 2;
    Math.max(y.width, y.height) * x > 4e3 &&
      (x = 4e3 / Math.max(y.width, y.height));
    const k = C.getViewport({ scale: x }),
      S = document.createElement("canvas");
    ((S.width = Math.floor(k.width)), (S.height = Math.floor(k.height)));
    const P = S.getContext("2d", { willReadFrequently: !0 });
    ((P.fillStyle = "#ffffff"),
      P.fillRect(0, 0, S.width, S.height),
      await C.render({ canvasContext: P, viewport: k }).promise);
    const A = P.getImageData(0, 0, S.width, S.height),
      T = await C.getTextContent();
    for (const d of T.items) {
      const o = d.str;
      if (!o || !o.trim()) continue;
      const j = c.transform(k.transform, d.transform),
        M = Math.hypot(j[2], j[3]);
      if (M < 4) continue;
      const p = (d.width || 0) * x;
      if (p < 1) continue;
      const R = Math.atan2(j[1], j[0]),
        W = j[4],
        E = j[5],
        X = Kt(A, S.width, S.height, W, E, p, M, R),
        I =
          (r.autoColor && Zt(A, S.width, S.height, W, E, p, M, X)) ||
          r.inkColor;
      (P.save(),
        P.translate(W, E),
        P.rotate(R),
        (P.fillStyle = `rgb(${X[0]},${X[1]},${X[2]})`),
        P.fillRect(-M * 0.12, -M * 0.86, p + M * 0.24, M * 1.12),
        Qt(P, o, n, p, M, r, I),
        P.restore());
    }
    (w.push(S), f.push([y.width, y.height]), C.cleanup?.());
  }
  if (h) return { canvases: w, sizes: f, numPages: a.numPages };
  const m = await u.create();
  for (let z = 0; z < w.length; z++) {
    i?.(w.length + z, w.length);
    const C = await fetch(w[z].toDataURL("image/png")).then((S) =>
        S.arrayBuffer(),
      ),
      y = await m.embedPng(C),
      [x, v] = f[z];
    m.addPage([x, v]).drawImage(y, { x: 0, y: 0, width: x, height: v });
  }
  return { bytes: await m.save(), numPages: a.numPages };
}
async function en(t, n) {
  const r = await window.pdfjsLib.getDocument({ data: t.slice() }).promise;
  let i = "";
  for (let l = 1; l <= r.numPages; l++) {
    n?.(l, r.numPages);
    const u = await r.getPage(l),
      c = await u.getTextContent();
    let a = null;
    for (const h of c.items)
      (!h.str && !h.hasEOL) ||
        (a &&
          Math.abs((h.transform?.[5] ?? 0) - a) > 4 &&
          !i.endsWith(`
`) &&
          (i += `
`),
        (i += h.str),
        h.hasEOL &&
          !i.endsWith(`
`) &&
          (i += `
`),
        (a = h.transform?.[5] ?? a));
    ((i += `

`),
      u.cleanup?.());
  }
  return i
    .replace(
      /\n{3,}/g,
      `

`,
    )
    .trim();
}
function tn({ initialChar: t, glyphs: n, onSaveGlyph: r, onClose: i }) {
  const [l, u] = N.useState(Math.max(0, V.indexOf(t))),
    c = V[l],
    a = N.useRef(null),
    h = N.useRef([]),
    g = N.useRef(null),
    [b, w] = N.useState(0),
    f = 300,
    m = N.useCallback(() => {
      const d = a.current;
      if (!d) return;
      const o = d.getContext("2d");
      (o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, d.width, d.height));
      const j = d.width / f;
      (o.setTransform(j, 0, 0, j, 0, 0),
        (o.strokeStyle = "#111"),
        (o.lineWidth = 4.5),
        (o.lineCap = "round"),
        (o.lineJoin = "round"));
      const M = [...h.current];
      g.current && M.push(g.current);
      for (const p of M) {
        if (p.length < 2) {
          p.length &&
            (o.beginPath(),
            o.arc(p[0].x, p[0].y, 2.2, 0, 7),
            (o.fillStyle = "#111"),
            o.fill());
          continue;
        }
        (o.beginPath(), o.moveTo(p[0].x, p[0].y));
        for (let R = 1; R < p.length - 1; R++) {
          const W = (p[R].x + p[R + 1].x) / 2,
            E = (p[R].y + p[R + 1].y) / 2;
          o.quadraticCurveTo(p[R].x, p[R].y, W, E);
        }
        (o.lineTo(p[p.length - 1].x, p[p.length - 1].y), o.stroke());
      }
    }, []);
  N.useEffect(() => {
    const d = a.current,
      o = window.devicePixelRatio || 1;
    ((d.width = f * o),
      (d.height = f * o),
      (h.current = []),
      (g.current = null),
      m());
  }, [l, m]);
  const z = (d) => {
      const o = a.current.getBoundingClientRect();
      return {
        x: ((d.clientX - o.left) / o.width) * f,
        y: ((d.clientY - o.top) / o.height) * f,
      };
    },
    C = (d) => {
      (d.preventDefault(),
        a.current.setPointerCapture?.(d.pointerId),
        (g.current = [z(d)]),
        m());
    },
    y = (d) => {
      g.current && (g.current.push(z(d)), m());
    },
    x = () => {
      g.current &&
        (h.current.push(g.current),
        (g.current = null),
        w(h.current.length),
        m());
    },
    v = () => {
      (h.current.pop(), w(h.current.length), m());
    },
    k = () => {
      ((h.current = []), (g.current = null), w(0), m());
    },
    S = () => {
      if (!h.current.length) return !1;
      const d = document.createElement("canvas");
      ((d.width = U), (d.height = U));
      const o = d.getContext("2d"),
        j = U / f;
      ((o.strokeStyle = "#111"),
        (o.lineWidth = 4.5 * j),
        (o.lineCap = "round"),
        (o.lineJoin = "round"),
        (o.fillStyle = "#111"));
      for (const p of h.current) {
        if (p.length < 2) {
          p.length &&
            (o.beginPath(),
            o.arc(p[0].x * j, p[0].y * j, 2.2 * j, 0, 7),
            o.fill());
          continue;
        }
        (o.beginPath(), o.moveTo(p[0].x * j, p[0].y * j));
        for (let R = 1; R < p.length - 1; R++) {
          const W = ((p[R].x + p[R + 1].x) / 2) * j,
            E = ((p[R].y + p[R + 1].y) / 2) * j;
          o.quadraticCurveTo(p[R].x * j, p[R].y * j, W, E);
        }
        (o.lineTo(p[p.length - 1].x * j, p[p.length - 1].y * j), o.stroke());
      }
      const M = Se(d);
      return M
        ? (r(c, {
            img: M.canvas.toDataURL("image/png"),
            w: M.w,
            h: M.h,
            baseline: ze - M.offsetTop,
          }),
          !0)
        : !1;
    },
    P = (d) => {
      (w(0), u((o) => Math.max(0, Math.min(V.length - 1, o + d))));
    },
    A = () => {
      (S(), P(1));
    },
    T = V.filter((d) => n[d]).length;
  return e.jsx("div", {
    onClick: i,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      zIndex: 1e3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    children: e.jsxs("div", {
      onClick: (d) => d.stopPropagation(),
      style: {
        background: "#18181b",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 20,
        width: 380,
        maxWidth: "100%",
      },
      children: [
        e.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          },
          children: [
            e.jsx("div", {
              style: { color: "#fff", fontWeight: 800, fontSize: 14 },
              children: "Write this letter",
            }),
            e.jsx("button", {
              "aria-label": "Close",
              onClick: i,
              style: {
                background: "none",
                border: "none",
                color: "#a1a1aa",
                cursor: "pointer",
              },
              children: e.jsx(Be, { size: 18 }),
            }),
          ],
        }),
        e.jsxs("div", {
          style: { color: "#71717a", fontSize: 11, marginBottom: 12 },
          children: [
            T,
            "/",
            V.length,
            " letters personalised · trace the ghost guide",
          ],
        }),
        e.jsxs("div", {
          style: {
            position: "relative",
            width: f,
            height: f,
            margin: "0 auto",
            borderRadius: 12,
            overflow: "hidden",
            background: "#fbfbf7",
            border: "1px solid rgba(0,0,0,0.15)",
          },
          children: [
            e.jsxs("svg", {
              width: f,
              height: f,
              style: { position: "absolute", inset: 0 },
              children: [
                [$e, 0.45, Q, 0.92].map((d, o) =>
                  e.jsx(
                    "line",
                    {
                      x1: "0",
                      x2: f,
                      y1: d * f,
                      y2: d * f,
                      stroke: d === Q ? "#9db7e0" : "#e2e2dc",
                      strokeWidth: d === Q ? 1.5 : 1,
                      strokeDasharray: d === Q ? "0" : "5 5",
                    },
                    o,
                  ),
                ),
                e.jsx("text", {
                  x: f / 2,
                  y: Q * f,
                  textAnchor: "middle",
                  fontSize: (Q - $e) * f * 1.35,
                  fill: "rgba(0,0,0,0.07)",
                  fontFamily: ke[0].css,
                  children: c,
                }),
              ],
            }),
            e.jsx("canvas", {
              ref: a,
              style: {
                position: "absolute",
                inset: 0,
                width: f,
                height: f,
                touchAction: "none",
                cursor: "crosshair",
              },
              onPointerDown: C,
              onPointerMove: y,
              onPointerUp: x,
              onPointerLeave: x,
            }),
            e.jsx("div", {
              style: {
                position: "absolute",
                top: 8,
                left: 10,
                fontSize: 34,
                fontWeight: 800,
                color: "#e4e4e7",
              },
              children: c,
            }),
            n[c] &&
              e.jsx("div", {
                style: {
                  position: "absolute",
                  top: 8,
                  right: 10,
                  fontSize: 10,
                  color: "#16a34a",
                  fontWeight: 700,
                },
                children: "✓ saved",
              }),
          ],
        }),
        e.jsxs("div", {
          style: { display: "flex", gap: 8, marginTop: 12 },
          children: [
            e.jsxs("button", {
              onClick: v,
              disabled: !b,
              style: se(b ? "#3f3f46" : "#27272a", "#e4e4e7"),
              children: [e.jsx(Tt, { size: 13 }), " Undo"],
            }),
            e.jsx("button", {
              onClick: k,
              style: se("#3f3f46", "#e4e4e7"),
              children: "Clear",
            }),
            e.jsx("button", {
              onClick: () => P(-1),
              disabled: l === 0,
              style: se("#3f3f46", "#e4e4e7"),
              children: "‹ Prev",
            }),
          ],
        }),
        e.jsxs("div", {
          style: { display: "flex", gap: 8, marginTop: 8 },
          children: [
            e.jsx("button", {
              onClick: () => P(1),
              style: { ...se("#27272a", "#a1a1aa"), flex: 1 },
              children: "Skip",
            }),
            e.jsx("button", {
              onClick: A,
              style: { ...se("#fafafa", "#18181b"), flex: 2, fontWeight: 800 },
              children: "Save & Next ›",
            }),
          ],
        }),
      ],
    }),
  });
}
const se = (t, n) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    flex: 1,
    height: 36,
    borderRadius: 9,
    border: "none",
    background: t,
    color: n,
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  }),
  ot = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
function nn() {
  return new Promise((t, n) => {
    if (window.Tesseract) return t(window.Tesseract);
    if (document.querySelector(`script[src="${ot}"]`)) {
      const l = setInterval(() => {
        window.Tesseract && (clearInterval(l), t(window.Tesseract));
      }, 100);
      return;
    }
    const i = document.createElement("script");
    ((i.src = ot),
      (i.onload = () => t(window.Tesseract)),
      (i.onerror = () => n(new Error("Failed to load the OCR engine"))),
      document.head.appendChild(i));
  });
}
function sn(t, n) {
  let r = 0;
  for (let a = 0; a < 256; a++) r += a * t[a];
  let i = 0,
    l = 0,
    u = -1,
    c = 127;
  for (let a = 0; a < 256; a++) {
    if (((l += t[a]), !l)) continue;
    const h = n - l;
    if (!h) break;
    i += a * t[a];
    const g = i / l,
      b = (r - i) / h,
      w = l * h * (g - b) * (g - b);
    w >= u && ((u = w), (c = a));
  }
  return c;
}
function an(t) {
  const n = t.width,
    r = t.height,
    i = n * r,
    l = t
      .getContext("2d", { willReadFrequently: !0 })
      .getImageData(0, 0, n, r).data,
    u = new Float32Array(i);
  for (let d = 0, o = 0; d < i; d++, o += 4)
    u[d] = 0.299 * l[o] + 0.587 * l[o + 1] + 0.114 * l[o + 2];
  const c = Math.max(10, Math.min(60, Math.round(Math.max(n, r) / 20))),
    a = Math.ceil(n / c),
    h = Math.ceil(r / c),
    g = new Float32Array(a * h);
  for (let d = 0; d < h; d++)
    for (let o = 0; o < a; o++) {
      let j = 0;
      const M = Math.min(n, (o + 1) * c),
        p = Math.min(r, (d + 1) * c);
      for (let R = d * c; R < p; R++)
        for (let W = o * c; W < M; W++) {
          const E = u[R * n + W];
          E > j && (j = E);
        }
      g[d * a + o] = j;
    }
  const b = new Float32Array(a * h);
  for (let d = 0; d < h; d++)
    for (let o = 0; o < a; o++) {
      let j = 0;
      for (let M = -1; M <= 1; M++) {
        const p = d + M;
        if (!(p < 0 || p >= h))
          for (let R = -1; R <= 1; R++) {
            const W = o + R;
            if (W < 0 || W >= a) continue;
            const E = g[p * a + W];
            E > j && (j = E);
          }
      }
      b[d * a + o] = j;
    }
  const w = (d, o) =>
      b[Math.min(h - 1, (o / c) | 0) * a + Math.min(a - 1, (d / c) | 0)] || 1,
    f = new Float32Array(i),
    m = new Uint32Array(256);
  for (let d = 0; d < r; d++)
    for (let o = 0; o < n; o++) {
      const j = d * n + o;
      let M = 1 - u[j] / Math.max(1, w(o, d));
      ((M = M < 0 ? 0 : M > 1 ? 1 : M), (f[j] = M), m[(M * 255) | 0]++);
    }
  let z = sn(m, i) / 255;
  z = Math.max(0.12, z);
  const C = 0.04,
    y = document.createElement("canvas");
  ((y.width = n), (y.height = r));
  const x = y.getContext("2d"),
    v = x.createImageData(n, r),
    k = v.data,
    S = document.createElement("canvas");
  ((S.width = n), (S.height = r));
  const P = S.getContext("2d"),
    A = P.createImageData(n, r),
    T = A.data;
  for (let d = 0; d < i; d++) {
    let o = (f[d] - (z - C)) / (2 * C);
    o = o < 0 ? 0 : o > 1 ? 1 : o;
    const j = d * 4,
      M = ((1 - o) * 255) | 0;
    ((T[j] = T[j + 1] = T[j + 2] = M),
      (T[j + 3] = 255),
      o > 0.01 && (k[j + 3] = (o * 255) | 0));
  }
  return (
    x.putImageData(v, 0, 0),
    P.putImageData(A, 0, 0),
    { inkCanvas: y, ocrCanvas: S }
  );
}
const rt = /^[A-Za-z0-9.,'"!?;:\-()/&@#%$+=]$/,
  de = (() => {
    const t = {},
      n = (r, i, l) => {
        for (const u of r) t[u] = [i, l];
      };
    return (
      n("acemnorsuvwxz", 0.54, 0.02),
      n("bdfhkl", 1, 0.02),
      n("t", 0.86, 0.02),
      n("i", 0.74, 0.02),
      n("gpqy", 0.54, 0.36),
      n("j", 0.74, 0.36),
      n("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1, 0.02),
      n("0123456789", 1, 0.02),
      n(".", 0.1, 0),
      n(",;", 0.12, 0.16),
      n(`'"`, 1, -0.6),
      n("-", 0.42, -0.3),
      n("()/", 0.92, 0.12),
      n("?!&@#%$+=", 1, 0.02),
      n(":", 0.54, 0),
      t
    );
  })();
function on(t, n, r) {
  const i = t.width,
    l = t.height,
    u = t.getContext("2d"),
    c = u.getImageData(0, 0, i, l),
    a = c.data,
    h = new Uint8Array(i * l),
    g = [];
  let b = !1;
  for (let w = 0; w < l; w++)
    for (let f = 0; f < i; f++) {
      const m = w * i + f;
      if (h[m] || a[m * 4 + 3] <= 12) continue;
      const z = [];
      let C = f,
        y = f;
      for (g.length = 0, g.push(m), h[m] = 1; g.length;) {
        const k = g.pop();
        z.push(k);
        const S = k % i,
          P = (k / i) | 0;
        (S < C && (C = S), S > y && (y = S));
        for (let A = -1; A <= 1; A++)
          for (let T = -1; T <= 1; T++) {
            if (!T && !A) continue;
            const d = S + T,
              o = P + A;
            if (d < 0 || o < 0 || d >= i || o >= l) continue;
            const j = o * i + d;
            !h[j] && a[j * 4 + 3] > 12 && ((h[j] = 1), g.push(j));
          }
      }
      const x = y - C + 1,
        v = Math.min(y, r) - Math.max(C, n) + 1;
      if (v < x * 0.45 && v < (r - n + 1) * 0.3) {
        for (const k of z) a[k * 4 + 3] = 0;
        b = !0;
      }
    }
  b && u.putImageData(c, 0, 0);
}
function lt(t, n, r) {
  const i = de[r];
  if (!i) return null;
  const l = Math.round((n.x1 - n.x0) * 0.18) + 2,
    u = Math.round((n.y1 - n.y0) * 0.18) + 2,
    c = Math.max(0, Math.round(n.x0 - l)),
    a = Math.max(0, Math.round(n.y0 - u)),
    h = Math.min(t.width, Math.round(n.x1 + l)),
    g = Math.min(t.height, Math.round(n.y1 + u)),
    b = h - c,
    w = g - a;
  if (b < 3 || w < 3) return null;
  const f = document.createElement("canvas");
  ((f.width = b),
    (f.height = w),
    f.getContext("2d").drawImage(t, c, a, b, w, 0, 0, b, w),
    on(f, Math.round(n.x0) - c, Math.round(n.x1) - c));
  const m = Se(f);
  if (!m || m.h < 6 || m.w < 2) return null;
  const [z, C] = i,
    x = (Math.max(0.08, z + C) * ae) / m.h;
  if (x > 30 || x < 0.02) return null;
  const v = Math.max(1, Math.round(m.w * x)),
    k = Math.max(1, Math.round(m.h * x));
  if (v > 1400 || k > 900) return null;
  const S = document.createElement("canvas");
  return (
    (S.width = v),
    (S.height = k),
    S.getContext("2d").drawImage(m.canvas, 0, 0, v, k),
    { img: S.toDataURL("image/png"), w: v, h: k, baseline: z * ae }
  );
}
async function rn(t, n) {
  n?.("Preparing image…");
  const i = Math.min(1, 1800 / Math.max(t.naturalWidth, t.naturalHeight)),
    l = Math.max(1, Math.round(t.naturalWidth * i)),
    u = Math.max(1, Math.round(t.naturalHeight * i)),
    c = document.createElement("canvas");
  ((c.width = l),
    (c.height = u),
    c.getContext("2d").drawImage(t, 0, 0, l, u),
    n?.("Cleaning the ink…"));
  const { inkCanvas: a, ocrCanvas: h } = an(c);
  n?.("Reading your handwriting…");
  const b = await (await nn()).createWorker("eng", 1, { logger: () => {} });
  let w;
  try {
    ({ data: w } = await b.recognize(h, {}, { blocks: !0 }));
  } finally {
    await b.terminate();
  }
  n?.("Cutting out letters…");
  const f = [];
  for (const z of w.blocks || [])
    for (const C of z.paragraphs || [])
      for (const y of C.lines || []) f.push(y);
  const m = [];
  for (const z of f) {
    const C = [];
    for (const x of z.words || [])
      for (const v of x.symbols || []) v.bbox && C.push(v);
    const y = C.filter((x) => x.text && rt.test(x.text.trim()));
    if (y.length)
      for (const x of y) {
        if ((x.confidence ?? 0) < 40) continue;
        const v = x.text.trim(),
          k = lt(a, x.bbox, v);
        k && ((k.ch = v), (k.conf = Math.round(x.confidence || 0)), m.push(k));
      }
    else
      for (const x of z.words || []) {
        const k = [...(x.text || "").trim()].filter((o) => rt.test(o));
        if (!k.length || !x.bbox) continue;
        const { x0: S, y0: P, x1: A, y1: T } = x.bbox,
          d = (A - S) / k.length;
        k.forEach((o, j) => {
          const M = lt(
            a,
            { x0: S + j * d, y0: P, x1: S + (j + 1) * d, y1: T },
            o,
          );
          M &&
            ((M.ch = o), (M.conf = Math.round(x.confidence || 0)), m.push(M));
        });
      }
  }
  return m;
}
function ln({ dets: t, onApply: n, onClose: r }) {
  const [i, l] = N.useState(() => t.map((a) => a.ch || "")),
    u = i.filter((a) => a.trim()).length,
    c = () => {
      const a = {};
      t.forEach((h, g) => {
        const b = (i[g] || "").trim().slice(0, 1);
        if (!b) return;
        let { w, h: f, baseline: m } = h;
        if (b !== h.ch && de[b] && de[h.ch]) {
          const [z, C] = de[h.ch],
            [y, x] = de[b],
            v = Math.max(0.08, y + x) / Math.max(0.08, z + C);
          ((w = Math.max(1, Math.round(w * v))),
            (f = Math.max(1, Math.round(f * v))),
            (m = y * ae));
        }
        (a[b] = a[b] || []).push({ img: h.img, w, h: f, baseline: m });
      });
      for (const h in a) a[h] = a[h].slice(0, _e);
      n(a);
    };
  return e.jsx("div", {
    onClick: r,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      zIndex: 1e3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    children: e.jsxs("div", {
      onClick: (a) => a.stopPropagation(),
      style: {
        background: "#18181b",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 16,
        padding: 20,
        width: 560,
        maxWidth: "100%",
        maxHeight: "85vh",
        display: "flex",
        flexDirection: "column",
      },
      children: [
        e.jsxs("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          },
          children: [
            e.jsx("div", {
              style: { color: "#fff", fontWeight: 800, fontSize: 14 },
              children: "Check the detected letters",
            }),
            e.jsx("button", {
              "aria-label": "Close",
              onClick: r,
              style: {
                background: "none",
                border: "none",
                color: "#a1a1aa",
                cursor: "pointer",
              },
              children: e.jsx(Be, { size: 18 }),
            }),
          ],
        }),
        e.jsxs("div", {
          style: { color: "#71717a", fontSize: 11, marginBottom: 14 },
          children: [
            t.length,
            " letters found · fix any wrong labels, clear a box to skip it. ",
            u,
            " will be saved.",
          ],
        }),
        e.jsx("div", {
          style: {
            overflowY: "auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))",
            gap: 10,
            paddingRight: 4,
          },
          children: t.map((a, h) =>
            e.jsxs(
              "div",
              {
                style: {
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  padding: 6,
                  background: "#0c0c0e",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                },
                children: [
                  e.jsx("div", {
                    style: {
                      height: 44,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "repeating-conic-gradient(#27272a 0% 25%, #3f3f46 0% 50%) 50% / 10px 10px",
                      borderRadius: 6,
                      width: "100%",
                    },
                    children: e.jsx("img", {
                      src: a.img,
                      alt: a.ch,
                      style: { maxHeight: 40, maxWidth: "90%" },
                    }),
                  }),
                  e.jsx("input", {
                    value: i[h],
                    onChange: (g) => {
                      const b = g.target.value.slice(-1);
                      l((w) => w.map((f, m) => (m === h ? b : f)));
                    },
                    maxLength: 1,
                    style: {
                      width: 34,
                      height: 30,
                      textAlign: "center",
                      background: i[h] ? "#27272a" : "#3f1d1d",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 6,
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 700,
                    },
                  }),
                ],
              },
              h,
            ),
          ),
        }),
        e.jsxs("div", {
          style: { display: "flex", gap: 8, marginTop: 16 },
          children: [
            e.jsx("button", {
              onClick: r,
              style: { ...se("#3f3f46", "#e4e4e7"), flex: 1 },
              children: "Cancel",
            }),
            e.jsxs("button", {
              onClick: c,
              disabled: !u,
              style: {
                ...se("#fafafa", "#18181b"),
                flex: 2,
                fontWeight: 800,
                opacity: u ? 1 : 0.4,
                cursor: u ? "pointer" : "not-allowed",
              },
              children: [
                "Add ",
                u,
                " letter",
                u === 1 ? "" : "s",
                " to my handwriting",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function dn({ showNotification: t }) {
  const [n, r] = N.useState(!1),
    [i, l] = N.useState(Ot),
    [u, c] = N.useState(null),
    [a, h] = N.useState("casual"),
    [g, b] = N.useState(null),
    [w, f] = N.useState(!1),
    [m, z] = N.useState(""),
    [C, y] = N.useState(!1);
  N.useEffect(() => {
    let s = !0;
    return (
      Bt().then(() => {
        s && (Ht(), y(!0));
      }),
      () => {
        s = !1;
      }
    );
  }, []);
  const [x, v] = N.useState("pdf"),
    [k, S] = N.useState("original"),
    [P, A] = N.useState(null),
    [T, d] = N.useState(""),
    [o, j] = N.useState(""),
    [M, p] = N.useState(!1),
    [R, W] = N.useState("ruled"),
    [E, X] = N.useState("a4"),
    [I, O] = N.useState("auto"),
    [H, ie] = N.useState("#1a3a8f"),
    [K, q] = N.useState("medium"),
    [Ne, ut] = N.useState(34),
    [Me, xt] = N.useState(2),
    [Pe, ft] = N.useState(-3),
    [Re, gt] = N.useState(0.5),
    [Ue, mt] = N.useState(0),
    [Oe, he] = N.useState(null),
    [le, ue] = N.useState(0),
    [oe, ee] = N.useState(0),
    [xe, fe] = N.useState(!1),
    [He, Z] = N.useState(""),
    Ge = N.useRef(),
    te = N.useRef(null),
    Xe = N.useRef(),
    pt = async (s) => {
      if (!s || !s.type.startsWith("image/")) {
        t?.("Please choose a photo of your handwriting", "error");
        return;
      }
      (f(!0), z("Preparing…"));
      try {
        const D = await Qe(URL.createObjectURL(s)),
          F = await rn(D, (L) => z(L));
        F.length
          ? b(F)
          : t?.(
              "Couldn't read any letters — try a clearer, flatter photo with good light.",
              "error",
            );
      } catch (D) {
        t?.("Scan failed: " + D.message, "error");
      } finally {
        (f(!1), z(""));
      }
    };
  N.useEffect(() => {
    Promise.all([Te(Rt), Te(It)])
      .then(() => Te(Ze).catch(() => {}))
      .then(() => {
        (window.pdfjsLib &&
          !window.pdfjsLib.GlobalWorkerOptions.workerSrc &&
          (window.pdfjsLib.GlobalWorkerOptions.workerSrc = Ze),
          r(!!window.pdfjsLib && !!window.PDFLib));
      })
      .catch((s) => t?.("Library load failed: " + s.message, "error"));
  }, [t]);
  const bt = I === "custom" ? H : (Fe.find((s) => s.id === I) || Fe[0]).color,
    qe = ke.find((s) => s.id === a).css,
    Y = x === "pdf" ? T : o,
    J = x === "pdf" && k === "original",
    re = V.filter((s) => i[s] && i[s].length).length,
    wt = (Ae.find((s) => s.id === K) || Ae[1]).w,
    yt = (s, D) => {
      l((F) => {
        const L = { ...F, [s]: [D] };
        return (Ee(L), L);
      });
    },
    jt = (s) => {
      l((D) => {
        const F = { ...D };
        for (const L in s) {
          const $ = s[L];
          !$ || !$.length || (F[L] = [...$, ...(F[L] || [])].slice(0, _e));
        }
        return (Ee(F), F);
      });
    },
    vt = () => {
      (l({}), Ee({}));
    },
    ge = N.useCallback(
      async (s) => {
        const D = new Map(),
          F = [...new Set(s)];
        for (const L of F) {
          if (
            L === " " ||
            L ===
              `
`
          )
            continue;
          const $ = i[L];
          if ($ && $.length) {
            const B = [];
            for (const _ of $) {
              const ne = await Qe(_.img);
              B.push({ raw: ne, w: _.w, h: _.h, baseline: _.baseline });
            }
            D.set(L, { variants: B });
          } else {
            const B = Gt(L, qe);
            B &&
              D.set(L, {
                variants: [
                  { raw: B.canvas, w: B.w, h: B.h, baseline: B.baseline },
                ],
              });
          }
        }
        return D;
      },
      [i, qe],
    ),
    zt = J && I === "auto",
    Ie = We[E] || We.a4,
    me = {
      paper: R,
      fontSize: Ne,
      lineSpacing: Me,
      slantDeg: Pe,
      messiness: Re,
      inkColor: bt,
      autoColor: zt,
      penWeight: wt,
      seed: Ue,
      pageW: Ie.px[0],
      pageH: Ie.px[1],
    };
  N.useEffect(() => {
    let s = !1;
    const D = setTimeout(async () => {
      try {
        if (J) {
          if (!te.current) {
            (he(null), ue(0));
            return;
          }
          const B = await ge(Y || "");
          if (s) return;
          const { canvases: _, numPages: ne } = await it(
            te.current,
            B,
            me,
            null,
            (oe || 0) + 1,
          );
          if (s) return;
          (ue(ne), he(_[0] ? _[0].toDataURL("image/png") : null));
          return;
        }
        if (!Y.trim()) {
          (he(null), ue(0));
          return;
        }
        const F = await ge(Y.slice(0, 8e3));
        if (s) return;
        const L = at(Y, F, me);
        if (s) return;
        ue(L.length);
        const $ = Math.min(oe, L.length - 1);
        he(L[$].toDataURL("image/png"));
      } catch {}
    }, 200);
    return () => {
      ((s = !0), clearTimeout(D));
    };
  }, [Y, x, k, R, E, I, H, K, a, Ne, Me, Pe, Re, Ue, oe, i, C]);
  const Ye = async (s) => {
      if (!s || (s.type !== "application/pdf" && !/\.pdf$/i.test(s.name))) {
        t?.("Please choose a PDF", "error");
        return;
      }
      (A(s), d(""), ee(0), (te.current = null), fe(!0), Z("Extracting text…"));
      try {
        const D = new Uint8Array(await s.arrayBuffer());
        te.current = D;
        const F = await en(D, (L, $) => Z(`Reading page ${L}/${$}…`));
        (F.trim() ||
          t?.(
            "No selectable text found — this PDF looks scanned. Run OCR first, or paste text.",
            "error",
          ),
          d(F));
      } catch (D) {
        t?.("Could not read PDF: " + D.message, "error");
      } finally {
        (fe(!1), Z(""));
      }
    },
    Je = (s, D) => {
      const F = new Blob([s], { type: "application/pdf" }),
        L = URL.createObjectURL(F),
        $ = document.createElement("a"),
        B = P ? P.name.replace(/\.pdf$/i, "") : "notes";
      (($.href = L),
        ($.download = `${B}_handwritten.pdf`),
        $.click(),
        setTimeout(() => URL.revokeObjectURL(L), 4e3),
        t?.(D, "success"));
    },
    kt = async () => {
      (fe(!0), Z("Building your handwriting…"));
      try {
        if (J) {
          if (!te.current) return;
          const _ = await ge(T),
            { bytes: ne, numPages: Le } = await it(
              te.current,
              _,
              me,
              (Ke, ye) => Z(`Rendering page ${Math.min(Ke, ye)}/${ye}…`),
            );
          Je(
            ne,
            `Downloaded ${Le}-page handwritten PDF (original layout kept)`,
          );
          return;
        }
        if (!Y.trim()) return;
        const s = await ge(Y),
          D = at(Y, s, me);
        Z("Assembling PDF…");
        const { PDFDocument: F } = window.PDFLib,
          L = await F.create(),
          [$, B] = Ie.pt;
        for (let _ = 0; _ < D.length; _++) {
          Z(`Adding page ${_ + 1}/${D.length}…`);
          const ne = await fetch(D[_].toDataURL("image/png")).then((ye) =>
              ye.arrayBuffer(),
            ),
            Le = await L.embedPng(ne);
          L.addPage([$, B]).drawImage(Le, { x: 0, y: 0, width: $, height: B });
        }
        Je(await L.save(), `Downloaded ${D.length}-page handwritten PDF`);
      } catch (s) {
        t?.("Error: " + s.message, "error");
      } finally {
        (fe(!1), Z(""));
      }
    },
    pe = (s) =>
      `px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${s ? "bg-zinc-800 border-zinc-500 text-white ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"}`,
    be = "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-5",
    we = "text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-1.5",
    De = ({ n: s, title: D, right: F }) =>
      e.jsxs("div", {
        className: "flex items-center gap-2.5 mb-4",
        children: [
          e.jsx("span", {
            className:
              "w-5 h-5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-black flex items-center justify-center shrink-0",
            children: s,
          }),
          e.jsx("span", {
            className:
              "text-[11px] font-black text-zinc-200 uppercase tracking-[1.5px]",
            children: D,
          }),
          F && e.jsx("span", { className: "ml-auto", children: F }),
        ],
      }),
    ce = ({ children: s }) =>
      e.jsx("span", {
        className:
          "inline-flex items-center gap-1 text-[10px] font-semibold text-zinc-300 bg-zinc-900/70 border border-zinc-800 rounded-full px-2.5 py-1",
        children: s,
      }),
    St = Math.round((re / V.length) * 100),
    Ct = !xe && n && Y.trim(),
    Nt = () => mt((s) => s + 1),
    Mt = () => ee((s) => Math.max(0, s - 1)),
    Pt = () => ee((s) => Math.min((le || 1) - 1, s + 1)),
    Ve = (s) =>
      `w-7 h-7 rounded-full border-2 transition-all ${s ? "border-white scale-110" : "border-zinc-700 hover:scale-105"}`;
  return e.jsxs("div", {
    className: "flex flex-col max-w-5xl mx-auto w-full pb-12",
    children: [
      u &&
        e.jsx(tn, {
          initialChar: u === !0 ? V[0] : u,
          glyphs: i,
          onSaveGlyph: yt,
          onClose: () => c(null),
        }),
      g &&
        e.jsx(ln, {
          dets: g,
          onApply: (s) => {
            (jt(s),
              b(null),
              t?.("Handwriting added from your photo", "success"));
          },
          onClose: () => b(null),
        }),
      e.jsxs("div", {
        className: "mb-7",
        children: [
          e.jsxs("h1", {
            className:
              "text-2xl sm:text-[30px] leading-[1.15] font-black text-white tracking-tight",
            children: [
              "Turn any PDF into",
              " ",
              e.jsx("span", {
                className:
                  "underline decoration-zinc-700 decoration-2 underline-offset-[6px]",
                children: "your handwriting",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-zinc-400 text-sm mt-2.5 max-w-xl leading-relaxed",
            children:
              "Keep the original layout or rewrite on notebook paper. Draw your own letters for a truly personal look. Everything runs in your browser — nothing is ever uploaded.",
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2 mt-4",
            children: [
              e.jsxs(ce, {
                children: [
                  e.jsx(nt, { size: 11, className: "text-emerald-400" }),
                  " 100% private",
                ],
              }),
              e.jsx(ce, { children: "No upload" }),
              e.jsx(ce, { children: "No watermark" }),
              e.jsx(ce, { children: "No sign-up" }),
              e.jsx(ce, { children: "Free" }),
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
                className: be,
                children: [
                  e.jsx(De, {
                    n: "1",
                    title: "Your handwriting",
                    right:
                      re > 0
                        ? e.jsx("button", {
                            onClick: vt,
                            className:
                              "text-[10px] font-semibold text-zinc-500 hover:text-zinc-200 transition-colors",
                            children: "Reset",
                          })
                        : null,
                  }),
                  e.jsxs("div", {
                    className: "mb-3",
                    children: [
                      e.jsx("div", {
                        className: "text-sm font-bold text-zinc-100",
                        children:
                          re > 0
                            ? `${re} of ${V.length} letters are yours`
                            : "Using a handwriting font",
                      }),
                      e.jsx("div", {
                        className:
                          "text-[11px] text-zinc-500 mt-0.5 leading-relaxed",
                        children:
                          "Snap a photo of any note in your handwriting and we'll read your letters automatically — or draw them in.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 mb-1",
                    children: [
                      e.jsx("button", {
                        onClick: () => Xe.current?.click(),
                        disabled: w,
                        className:
                          "px-3 py-2.5 rounded-xl text-xs font-black text-zinc-900 flex items-center justify-center gap-1.5 bg-zinc-100 hover:bg-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: w
                          ? e.jsxs(e.Fragment, {
                              children: [e.jsx(je, { size: 13 }), " Scanning…"],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(Ft, { size: 13 }),
                                " Scan from photo",
                              ],
                            }),
                      }),
                      e.jsxs("button", {
                        onClick: () => c(!0),
                        className:
                          "px-3 py-2.5 rounded-xl text-xs font-bold text-zinc-200 flex items-center justify-center gap-1.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-all active:scale-95",
                        children: [
                          e.jsx(et, { size: 13 }),
                          " ",
                          re > 0 ? "Edit / draw" : "Draw letters",
                        ],
                      }),
                    ],
                  }),
                  e.jsx("input", {
                    ref: Xe,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: (s) => pt(s.target.files[0]),
                  }),
                  w &&
                    m &&
                    e.jsxs("div", {
                      className:
                        "text-[10px] text-zinc-500 mt-2 flex items-center gap-1.5",
                      children: [
                        e.jsx(At, { size: 11, className: "text-zinc-400" }),
                        m,
                      ],
                    }),
                  re > 0 &&
                    e.jsx("div", {
                      className:
                        "h-1.5 rounded-full bg-zinc-800 overflow-hidden mb-3.5",
                      children: e.jsx("div", {
                        className: "h-full bg-zinc-100 transition-all",
                        style: { width: `${St}%` },
                      }),
                    }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [
                      e.jsx("span", {
                        className: "text-[10px] text-zinc-500",
                        children: "Font style:",
                      }),
                      ke.map((s) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => h(s.id),
                            className: pe(a === s.id),
                            style: { fontFamily: s.css, fontSize: 15 },
                            children: s.label,
                          },
                          s.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: be,
                children: [
                  e.jsx(De, { n: "2", title: "Content" }),
                  e.jsx("div", {
                    className:
                      "inline-flex p-1 rounded-xl bg-zinc-800/60 border border-zinc-800 mb-3",
                    children: [
                      { id: "pdf", label: "From PDF", Icon: st },
                      { id: "text", label: "Type / paste", Icon: Et },
                    ].map((s) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => {
                            (v(s.id), ee(0));
                          },
                          className: `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${x === s.id ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-200"}`,
                          children: [e.jsx(s.Icon, { size: 13 }), " ", s.label],
                        },
                        s.id,
                      ),
                    ),
                  }),
                  x === "pdf"
                    ? P
                      ? e.jsxs("div", {
                          className:
                            "flex items-center gap-3 px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0",
                              children: e.jsx(st, {
                                size: 15,
                                className: "text-zinc-300",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-sm font-semibold text-zinc-100 truncate",
                                  children: P.name,
                                }),
                                e.jsx("div", {
                                  className: "text-[10px] text-zinc-500",
                                  children: T
                                    ? `${T.length.toLocaleString()} characters ready`
                                    : "reading…",
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              "aria-label": "Remove file",
                              onClick: () => {
                                (A(null), d(""), (te.current = null), ee(0));
                              },
                              className:
                                "p-1.5 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-700 rounded-lg transition-all",
                              children: e.jsx(Be, { size: 14 }),
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          onDragOver: (s) => {
                            (s.preventDefault(), p(!0));
                          },
                          onDragLeave: () => p(!1),
                          onDrop: (s) => {
                            (s.preventDefault(),
                              p(!1),
                              Ye(s.dataTransfer.files[0]));
                          },
                          onClick: () => Ge.current?.click(),
                          className: `group flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-2xl cursor-pointer transition-all py-12 px-8 ${M ? "border-zinc-400 bg-zinc-800/40" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/60"}`,
                          children: [
                            e.jsx("div", {
                              className:
                                "w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform",
                              children: e.jsx(Dt, {
                                size: 20,
                                className: "text-zinc-300",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "text-center",
                              children: [
                                e.jsx("div", {
                                  className: "text-white font-bold text-sm",
                                  children: "Drop a PDF here",
                                }),
                                e.jsx("div", {
                                  className: "text-zinc-500 text-xs",
                                  children:
                                    "or click to browse — never leaves your device",
                                }),
                              ],
                            }),
                            e.jsx("input", {
                              ref: Ge,
                              type: "file",
                              accept: "application/pdf",
                              className: "hidden",
                              onChange: (s) => Ye(s.target.files[0]),
                            }),
                          ],
                        })
                    : e.jsx("textarea", {
                        value: o,
                        onChange: (s) => {
                          (j(s.target.value), ee(0));
                        },
                        placeholder:
                          "Type or paste the text you want in handwriting…",
                        className:
                          "w-full h-32 bg-zinc-950/60 border border-zinc-800 rounded-xl p-3 text-sm text-zinc-200 placeholder-zinc-600 resize-y focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-600",
                      }),
                  x === "pdf" &&
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3",
                      children: [
                        {
                          id: "original",
                          title: "Keep original design",
                          desc: "Same pages, images & layout — only text becomes handwritten, in place.",
                        },
                        {
                          id: "notebook",
                          title: "Notebook paper",
                          desc: "Reflow the text onto fresh ruled or plain paper.",
                        },
                      ].map((s) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => {
                              (S(s.id),
                                ee(0),
                                s.id === "notebook" &&
                                  I === "auto" &&
                                  O("blue"));
                            },
                            className: `relative text-left p-3 rounded-xl border transition-all ${k === s.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-xs font-black text-zinc-100",
                                    children: s.title,
                                  }),
                                  k === s.id &&
                                    e.jsx(tt, {
                                      size: 12,
                                      className: "text-zinc-100 ml-auto",
                                    }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "text-[9px] text-zinc-500 mt-1 leading-relaxed",
                                children: s.desc,
                              }),
                            ],
                          },
                          s.id,
                        ),
                      ),
                    }),
                ],
              }),
              e.jsxs("div", {
                className: be,
                children: [
                  e.jsx(De, {
                    n: "3",
                    title: "Style",
                    right: e.jsx("button", {
                      onClick: Nt,
                      title: "Re-roll the natural variation",
                      className:
                        "inline-flex items-center gap-1 text-[10px] font-bold text-zinc-400 hover:text-white bg-zinc-800/80 border border-zinc-700 rounded-lg px-2 py-1 transition-colors active:scale-95",
                      children: "↻ Shuffle",
                    }),
                  }),
                  !J &&
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-4 mb-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", { className: we, children: "Paper" }),
                            e.jsx("div", {
                              className: "flex gap-1.5 flex-wrap",
                              children: _t.map((s) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => W(s.id),
                                    className: pe(R === s.id),
                                    children: s.label,
                                  },
                                  s.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: we,
                              children: "Page size",
                            }),
                            e.jsx("div", {
                              className: "flex gap-1.5 flex-wrap",
                              children: Object.entries(We).map(([s, D]) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => X(s),
                                    className: pe(E === s),
                                    children: D.label,
                                  },
                                  s,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs("div", {
                            className: we,
                            children: [
                              "Ink",
                              J &&
                                I === "auto" &&
                                e.jsxs("span", {
                                  className:
                                    "text-zinc-400 normal-case tracking-normal",
                                  children: [" ", "· matching original"],
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-1.5 items-center flex-wrap",
                            children: [
                              J &&
                                e.jsx("button", {
                                  onClick: () => O("auto"),
                                  title: "Match each text's original colour",
                                  className: `h-7 px-2.5 rounded-full border-2 text-[9px] font-black transition-all ${I === "auto" ? "border-white text-white bg-zinc-700" : "border-zinc-700 text-zinc-300 bg-zinc-800"}`,
                                  children: "Auto",
                                }),
                              Fe.map((s) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => O(s.id),
                                    "aria-label": s.label,
                                    className: Ve(I === s.id),
                                    style: { background: s.color },
                                  },
                                  s.id,
                                ),
                              ),
                              e.jsxs("label", {
                                title: "Custom colour",
                                className: `relative ${Ve(I === "custom")} ${I === "custom" ? "" : "border-dashed"} cursor-pointer flex items-center justify-center`,
                                style: { background: H },
                                children: [
                                  e.jsx("input", {
                                    type: "color",
                                    value: H,
                                    onChange: (s) => {
                                      (ie(s.target.value), O("custom"));
                                    },
                                    className:
                                      "absolute inset-0 opacity-0 cursor-pointer",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-white text-[11px] font-black drop-shadow",
                                    children: "+",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("div", {
                            className: we,
                            children: "Pen thickness",
                          }),
                          e.jsx("div", {
                            className: "flex gap-1.5 flex-wrap",
                            children: Ae.map((s) =>
                              e.jsx(
                                "button",
                                {
                                  onClick: () => q(s.id),
                                  className: pe(K === s.id),
                                  children: s.label,
                                },
                                s.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4",
                    children: [
                      !J &&
                        e.jsx(ve, {
                          label: "Size",
                          value: Ne,
                          min: 24,
                          max: 48,
                          step: 1,
                          onChange: ut,
                        }),
                      !J &&
                        e.jsx(ve, {
                          label: "Spacing",
                          value: Me,
                          min: 1.5,
                          max: 2.8,
                          step: 0.1,
                          onChange: xt,
                          fmt: (s) => s.toFixed(1),
                        }),
                      e.jsx(ve, {
                        label: "Slant",
                        value: Pe,
                        min: -10,
                        max: 6,
                        step: 1,
                        onChange: ft,
                        fmt: (s) => `${s}°`,
                      }),
                      e.jsx(ve, {
                        label: "Messiness",
                        value: Re,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        onChange: gt,
                        fmt: (s) => `${Math.round(s * 100)}%`,
                      }),
                    ],
                  }),
                  J &&
                    e.jsxs("div", {
                      className:
                        "text-[10px] text-zinc-500 mt-3 leading-relaxed flex items-start gap-1.5",
                      children: [
                        e.jsx(tt, {
                          size: 12,
                          className: "text-emerald-400 mt-0.5 shrink-0",
                        }),
                        "Size & spacing follow the original document — handwriting is fit to each line so nothing shifts.",
                      ],
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("aside", {
            className: "lg:sticky lg:top-4 flex flex-col gap-3",
            children: [
              e.jsxs("div", {
                className: be + " p-3",
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
                          "Live preview",
                        ],
                      }),
                      le > 1 &&
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            e.jsx("button", {
                              onClick: Mt,
                              disabled: oe === 0,
                              "aria-label": "Previous page",
                              className:
                                "w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm leading-none flex items-center justify-center disabled:opacity-30 hover:bg-zinc-700 transition-colors",
                              children: "‹",
                            }),
                            e.jsxs("span", {
                              className:
                                "text-[10px] text-zinc-400 tabular-nums w-14 text-center",
                              children: [oe + 1, " / ", le],
                            }),
                            e.jsx("button", {
                              onClick: Pt,
                              disabled: oe >= le - 1,
                              "aria-label": "Next page",
                              className:
                                "w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300 text-sm leading-none flex items-center justify-center disabled:opacity-30 hover:bg-zinc-700 transition-colors",
                              children: "›",
                            }),
                          ],
                        }),
                      le === 1 &&
                        e.jsx("span", {
                          className: "text-[10px] text-zinc-500",
                          children: "1 page",
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "rounded-xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-center min-h-[360px] p-4",
                    children: Oe
                      ? e.jsx("img", {
                          src: Oe,
                          alt: "handwritten preview",
                          className:
                            "max-w-full max-h-[560px] w-auto rounded-md ring-1 ring-black/30 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)]",
                        })
                      : e.jsxs("div", {
                          className:
                            "text-zinc-600 text-xs flex flex-col items-center gap-2.5 py-14 text-center px-6",
                          children: [
                            xe
                              ? e.jsx(je, {
                                  size: 20,
                                  className: "text-zinc-400",
                                })
                              : e.jsx(et, {
                                  size: 22,
                                  className: "text-zinc-700",
                                }),
                            xe
                              ? He || "Working…"
                              : "Add a PDF or some text to see your handwriting appear here",
                          ],
                        }),
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: kt,
                disabled: !Ct,
                className:
                  "w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm text-zinc-900 bg-zinc-100 enabled:hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.99]",
                children: xe
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(je, { size: 16 }),
                        " ",
                        He || "Working…",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(Lt, { size: 16 }),
                        " Download Handwritten PDF",
                      ],
                    }),
              }),
              e.jsx("div", {
                className:
                  "text-[10px] text-zinc-600 text-center flex items-center justify-center gap-1.5",
                children: n
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(nt, {
                          size: 11,
                          className: "text-emerald-500/70",
                        }),
                        " PDF · no watermark · never uploaded",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(je, { size: 11 }),
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
function ve({
  label: t,
  value: n,
  min: r,
  max: i,
  step: l,
  onChange: u,
  fmt: c,
}) {
  return e.jsxs("div", {
    children: [
      e.jsxs("div", {
        className: "flex justify-between text-[10px] text-zinc-500 mb-1.5",
        children: [
          e.jsx("span", { className: "font-medium", children: t }),
          e.jsx("span", {
            className: "text-zinc-300 tabular-nums",
            children: c ? c(n) : n,
          }),
        ],
      }),
      e.jsx("input", {
        type: "range",
        min: r,
        max: i,
        step: l,
        value: n,
        onChange: (a) => u(parseFloat(a.target.value)),
        className: "w-full",
        style: { accentColor: "#e4e4e7" },
      }),
    ],
  });
}
export { dn as default };
