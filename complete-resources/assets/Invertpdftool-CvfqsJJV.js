import { r as p, j as t } from "./react-vendor-Bc7KCos-.js";
const je = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  ae =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",
  we = "https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js",
  ye = "https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js";
function Q(e) {
  return new Promise((c, n) => {
    if (document.querySelector(`script[src="${e}"]`)) {
      c();
      return;
    }
    const s = document.createElement("script");
    ((s.src = e),
      (s.onload = c),
      (s.onerror = () => n(new Error("Failed to load " + e))),
      document.head.appendChild(s));
  });
}
const U = ({ children: e, size: c = 16, className: n = "" }) =>
    t.jsx("svg", {
      width: c,
      height: c,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: n,
      children: e,
    }),
  ve = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("polyline", { points: "16 16 12 12 8 16" }),
        t.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        t.jsx("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" }),
      ],
    }),
  le = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("polyline", { points: "8 17 12 21 16 17" }),
        t.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        t.jsx("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.09" }),
      ],
    }),
  ke = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        t.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Z = (e) =>
    t.jsx(U, {
      ...e,
      children: t.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  ze = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        t.jsx("polyline", { points: "2 17 12 22 22 17" }),
        t.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  ee = (e) =>
    t.jsxs(U, {
      ...e,
      className: `animate-spin ${e.className || ""}`,
      children: [
        t.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        t.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  Ne = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        t.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        t.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  $e = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
        t.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
        t.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
      ],
    }),
  Re = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2",
        }),
        t.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        t.jsx("polyline", { points: "21 15 16 10 5 21" }),
      ],
    }),
  Pe = (e) =>
    t.jsxs(U, {
      ...e,
      children: [
        t.jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
        t.jsx("circle", { cx: "12", cy: "12", r: "3" }),
      ],
    }),
  De = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
  V = (e) => De(e).toFixed(4);
function Fe(e, c, n) {
  const s = Math.max(e, c, n),
    i = Math.min(e, c, n),
    x = (s + i) / 2;
  if (s === i) return [0, 0, x];
  const a = s - i,
    o = x > 0.5 ? a / (2 - s - i) : a / (s + i);
  let l;
  return (
    s === e
      ? (l = (c - n) / a + (c < n ? 6 : 0))
      : s === c
        ? (l = (n - e) / a + 2)
        : (l = (e - c) / a + 4),
    [l / 6, o, x]
  );
}
function te(e, c, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (c - e) * 6 * n
      : n < 1 / 2
        ? c
        : n < 2 / 3
          ? e + (c - e) * (2 / 3 - n) * 6
          : e
  );
}
function Ie(e, c, n) {
  if (c === 0) return [n, n, n];
  const s = n < 0.5 ? n * (1 + c) : n + c - n * c,
    i = 2 * n - s;
  return [te(i, s, e + 1 / 3), te(i, s, e), te(i, s, e - 1 / 3)];
}
const w = [
  [0.393, 0.769, 0.189],
  [0.349, 0.686, 0.168],
  [0.272, 0.534, 0.131],
];
function T(e, c, n, s) {
  switch (s) {
    case "invert":
      return [1 - e, 1 - c, 1 - n];
    case "grayscale": {
      const i = 0.2126 * e + 0.7152 * c + 0.0722 * n;
      return [i, i, i];
    }
    case "sepia":
      return [
        Math.min(1, e * w[0][0] + c * w[0][1] + n * w[0][2]),
        Math.min(1, e * w[1][0] + c * w[1][1] + n * w[1][2]),
        Math.min(1, e * w[2][0] + c * w[2][1] + n * w[2][2]),
      ];
    default: {
      const [i, x, a] = Fe(e, c, n),
        o = 1 - a,
        l = x * 0.88;
      return Ie(i, l, o);
    }
  }
}
function ue(e, c) {
  const n = e.length;
  if (c === "invert")
    for (let s = 0; s < n; s += 4)
      ((e[s] = 255 - e[s]),
        (e[s + 1] = 255 - e[s + 1]),
        (e[s + 2] = 255 - e[s + 2]));
  else if (c === "grayscale")
    for (let s = 0; s < n; s += 4) {
      const i = 0.2126 * e[s] + 0.7152 * e[s + 1] + 0.0722 * e[s + 2];
      e[s] = e[s + 1] = e[s + 2] = i;
    }
  else if (c === "sepia")
    for (let s = 0; s < n; s += 4) {
      const i = e[s],
        x = e[s + 1],
        a = e[s + 2];
      ((e[s] = Math.min(255, i * w[0][0] + x * w[0][1] + a * w[0][2])),
        (e[s + 1] = Math.min(255, i * w[1][0] + x * w[1][1] + a * w[1][2])),
        (e[s + 2] = Math.min(255, i * w[2][0] + x * w[2][1] + a * w[2][2])));
    }
  else
    for (let s = 0; s < n; s += 4) {
      const i = e[s],
        x = e[s + 1],
        a = e[s + 2];
      if (i === x && x === a) {
        e[s] = e[s + 1] = e[s + 2] = 255 - i;
        continue;
      }
      const [o, l, d] = T(i / 255, x / 255, a / 255, "dark");
      ((e[s] = o * 255), (e[s + 1] = l * 255), (e[s + 2] = d * 255));
    }
}
const S = "([-+]?(?:\\d+\\.?\\d*|\\.\\d+))",
  C = "[\\x00\\t\\r\\n\\f ]+",
  K = "[\\x00\\t\\r\\n\\f ()<>\\[\\]{}/%]|$";
function G(e, c, n, s) {
  return `${V(e)} ${V(c)} ${V(n)} ${s}`;
}
function Se(e, c) {
  const n = (a) => new RegExp(`${S}${C}${S}${C}${S}${C}${a}(?=${K})`, "g");
  ((e = e.replace(n("rg"), (a, o, l, d) => G(...T(+o, +l, +d, c), "rg"))),
    (e = e.replace(n("RG"), (a, o, l, d) => G(...T(+o, +l, +d, c), "RG"))));
  const s = (a) => new RegExp(`${S}${C}${S}${C}${S}${C}(${a})(?=${K})`, "g");
  ((e = e.replace(s("scn"), (a, o, l, d, u) => G(...T(+o, +l, +d, c), u))),
    (e = e.replace(s("SCN"), (a, o, l, d, u) => G(...T(+o, +l, +d, c), u))),
    (e = e.replace(s("sc"), (a, o, l, d, u) => G(...T(+o, +l, +d, c), u))),
    (e = e.replace(s("SC"), (a, o, l, d, u) => G(...T(+o, +l, +d, c), u))));
  const i = (a) =>
      new RegExp(`${S}${C}${S}${C}${S}${C}${S}${C}(${a})(?=${K})`, "g"),
    x = (a, o, l, d, u, g) => {
      const $ = (1 - +o) * (1 - +u),
        y = (1 - +l) * (1 - +u),
        m = (1 - +d) * (1 - +u),
        [_, D, v] = T($, y, m, c),
        b = 1 - Math.max(_, D, v);
      if (b >= 1) return `0 0 0 1 ${g}`;
      const F = (1 - _ - b) / (1 - b),
        L = (1 - D - b) / (1 - b),
        M = (1 - v - b) / (1 - b);
      return `${V(F)} ${V(L)} ${V(M)} ${V(b)} ${g}`;
    };
  return (
    (e = e.replace(i("k"), x)),
    (e = e.replace(i("K"), x)),
    (e = e.replace(new RegExp(`${S}${C}g(?=${K})`, "g"), (a, o) =>
      G(...T(+o, +o, +o, c), "rg"),
    )),
    (e = e.replace(new RegExp(`${S}${C}G(?=${K})`, "g"), (a, o) =>
      G(...T(+o, +o, +o, c), "RG"),
    )),
    e
  );
}
const X = (e) =>
  e === void 0 ||
  e === "\0" ||
  e === "	" ||
  e === "\r" ||
  e ===
    `
` ||
  e === "\f" ||
  e === " " ||
  e === "(" ||
  e === ")" ||
  e === "<" ||
  e === ">" ||
  e === "[" ||
  e === "]" ||
  e === "{" ||
  e === "}" ||
  e === "/" ||
  e === "%";
function Ce(e, c) {
  let n = "",
    s = "";
  const i = () => {
      s && ((n += Se(s, c)), (s = ""));
    },
    x = e.length;
  let a = 0;
  for (; a < x;) {
    const o = e[a];
    if (o === "(") {
      i();
      let l = 0,
        d = a;
      for (; d < x; d++) {
        const u = e[d];
        if (u === "\\") {
          d++;
          continue;
        }
        if (u === "(") l++;
        else if (u === ")" && (l--, l === 0)) {
          d++;
          break;
        }
      }
      ((n += e.slice(a, d)), (a = d));
      continue;
    }
    if (o === "<" && e[a + 1] !== "<") {
      i();
      let l = e.indexOf(">", a);
      ((l = l === -1 ? x : l + 1), (n += e.slice(a, l)), (a = l));
      continue;
    }
    if (o === "B" && e[a + 1] === "I" && X(e[a - 1]) && X(e[a + 2])) {
      let l = -1;
      for (let u = a + 2; u < x - 1; u++)
        if (e[u] === "I" && e[u + 1] === "D" && X(e[u - 1]) && X(e[u + 2])) {
          l = u;
          break;
        }
      if (l === -1) {
        ((s += o), a++);
        continue;
      }
      let d = -1;
      for (let u = l + 3; u < x - 1; u++)
        if (e[u] === "E" && e[u + 1] === "I" && X(e[u - 1]) && X(e[u + 2])) {
          d = u + 2;
          break;
        }
      (d === -1 && (d = x), (n += e.slice(a, d)), (a = d));
      continue;
    }
    ((s += o), a++);
  }
  return (i(), n);
}
function Le(e, c, n) {
  const s = c.toFixed(2),
    i = n.toFixed(2);
  switch (e) {
    case "invert":
    case "dark":
      return `q 0.078 0.078 0.086 rg 0 0 ${s} ${i} re f Q
0.92 0.92 0.94 rg 0.92 0.92 0.94 RG
`;
    case "sepia":
      return `q 0.9569 0.9098 0.7569 rg 0 0 ${s} ${i} re f Q
0.2902 0.1725 0.0549 rg 0.2902 0.1725 0.0549 RG
`;
    case "grayscale":
      return `0 0 0 rg 0 0 0 RG
`;
    default:
      return "";
  }
}
const oe = (e) => new TextDecoder("latin1").decode(e),
  Me = (e) => {
    const c = new Uint8Array(e.length);
    for (let n = 0; n < e.length; n++) c[n] = e.charCodeAt(n) & 255;
    return c;
  };
async function Ee(e, c, n) {
  const {
      PDFDocument: s,
      PDFName: i,
      PDFRawStream: x,
      PDFArray: a,
    } = window.PDFLib,
    o = window.pako,
    l = await s.load(e, { ignoreEncryption: !0, updateMetadata: !1 }),
    d = l.context,
    u = l.getPages(),
    g = [];
  let $ = 0;
  for (let m = 0; m < u.length; m++) {
    n(m + 1, u.length);
    const _ = u[m],
      { width: D, height: v } = _.getSize(),
      b = _.node;
    try {
      const R = b.Resources && b.Resources(),
        f =
          R && R.lookup
            ? R.lookup(i.of("XObject"))
            : b.get(i.of("Resources"))?.get?.(i.of("XObject"));
      if (f && f.entries)
        for (const [, E] of f.entries()) {
          const P = d.lookup(E)?.dict?.get(i.of("Subtype"));
          if (P && P.toString() === "/Image") {
            $++;
            break;
          }
        }
    } catch {}
    const F = b.get(i.of("Contents"));
    if (!F) continue;
    let L = [];
    try {
      const R = d.lookup(F);
      if (R instanceof a) for (let f = 0; f < R.size(); f++) L.push(R.get(f));
      else L.push(F);
    } catch {
      g.push(`Page ${m + 1}: could not resolve Contents`);
      continue;
    }
    let M = !1;
    for (const R of L) {
      let f;
      try {
        f = d.lookup(R);
      } catch {
        continue;
      }
      if (!f || !f.contents) continue;
      const E = f.dict.get(i.of("Filter")),
        A = E ? E.toString() : "",
        P = A.includes("FlateDecode") || A === "/Fl";
      if (A && !P) {
        g.push(`Page ${m + 1}: unsupported stream filter ${A} — skipped`);
        continue;
      }
      let I;
      try {
        I = oe(P ? o.inflate(f.contents) : f.contents);
      } catch {
        g.push(`Page ${m + 1}: could not decompress stream`);
        continue;
      }
      ((I = Ce(I, c)), M || ((I = Le(c, D, v) + I), (M = !0)));
      const H = Me(I);
      let W,
        J = !0;
      try {
        W = o.deflate(H);
      } catch {
        ((W = H), (J = !1));
      }
      (J
        ? f.dict.set(i.of("Filter"), i.of("FlateDecode"))
        : f.dict.delete(i.of("Filter")),
        f.dict.delete(i.of("DecodeParms")),
        f.dict.set(i.of("Length"), d.obj(W.length)),
        d.assign(R, x.of(f.dict, W)));
    }
  }
  const y = await l.save();
  return (
    $ > 0 &&
      g.push(
        `${$} page${$ > 1 ? "s" : ""} contain embedded images that stay in their original colours. Switch to Universal mode to recolour them.`,
      ),
    { bytes: y, warnings: g }
  );
}
function Ae(e) {
  const c = e.split(",")[1],
    n = atob(c),
    s = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) s[i] = n.charCodeAt(i);
  return s;
}
async function Be(e, c, n, s) {
  const { PDFDocument: i } = window.PDFLib,
    x = n === "high" ? 2.6 : 1.9,
    a = 4e3,
    o = await window.pdfjsLib.getDocument({
      data: e.slice(),
      useSystemFonts: !0,
      disableFontFace: !1,
    }).promise,
    l = await i.create(),
    d = [];
  for (let g = 1; g <= o.numPages; g++) {
    s(g, o.numPages);
    const $ = await o.getPage(g),
      y = $.getViewport({ scale: 1 });
    let m = x;
    Math.max(y.width, y.height) * m > a &&
      (m = a / Math.max(y.width, y.height));
    const D = $.getViewport({ scale: m }),
      v = document.createElement("canvas");
    ((v.width = Math.floor(D.width)), (v.height = Math.floor(D.height)));
    const b = v.getContext("2d", { willReadFrequently: !0 });
    ((b.fillStyle = "#ffffff"), b.fillRect(0, 0, v.width, v.height));
    try {
      await $.render({ canvasContext: b, viewport: D, intent: "print" })
        .promise;
    } catch (f) {
      d.push(`Page ${g}: render failed (${f.message}) — left blank`);
    }
    const F = b.getImageData(0, 0, v.width, v.height);
    (ue(F.data, c), b.putImageData(F, 0, 0));
    const L = v.toDataURL("image/jpeg", n === "high" ? 0.95 : 0.9),
      M = await l.embedJpg(Ae(L));
    (l
      .addPage([y.width, y.height])
      .drawImage(M, { x: 0, y: 0, width: y.width, height: y.height }),
      $.cleanup?.());
  }
  return { bytes: await l.save(), warnings: d };
}
const de = [
  {
    id: "dark",
    label: "Dark Mode",
    desc: "White pages go near-black. Colours keep their hue — links stay blue. Best for night reading.",
    swatchBg: "#141418",
    swatchText: "#eaeaf0",
    swatchAccent: "#60a5fa",
  },
  {
    id: "invert",
    label: "Full Invert",
    desc: "Raw RGB inversion — the classic photo-negative effect.",
    swatchBg: "#000000",
    swatchText: "#ffffff",
    swatchAccent: "#f472b6",
  },
  {
    id: "sepia",
    label: "Sepia",
    desc: "Warm cream background with brown-toned text. Easy on the eyes.",
    swatchBg: "#f4e8cf",
    swatchText: "#4a2e0e",
    swatchAccent: "#b5651d",
  },
  {
    id: "grayscale",
    label: "Grayscale",
    desc: "Every colour mapped to luminance-accurate grey.",
    swatchBg: "#f2f2f2",
    swatchText: "#222222",
    swatchAccent: "#888888",
  },
];
function Ge({ showNotification: e }) {
  const [c, n] = p.useState(null),
    [s, i] = p.useState("dark"),
    [x, a] = p.useState("universal"),
    [o, l] = p.useState("standard"),
    [d, u] = p.useState(!1),
    [g, $] = p.useState({ cur: 0, total: 0 }),
    [y, m] = p.useState(null),
    [_, D] = p.useState(!1),
    [v, b] = p.useState(!1),
    [F, L] = p.useState(1),
    [M, R] = p.useState(!1),
    [f, E] = p.useState(!1),
    A = p.useRef(null),
    P = p.useRef(null),
    q = p.useRef(),
    I = p.useRef(null),
    H = p.useRef(null),
    W = p.useRef(null);
  p.useEffect(() => {
    let r = !0;
    return (
      Promise.all([Q(ye), Q(we), Q(je)])
        .then(() => Q(ae).catch(() => {}))
        .then(() => {
          r &&
            (window.pdfjsLib &&
              !window.pdfjsLib.GlobalWorkerOptions.workerSrc &&
              (window.pdfjsLib.GlobalWorkerOptions.workerSrc = ae),
            b(!!window.PDFLib && !!window.pako && !!window.pdfjsLib));
        })
        .catch((h) => e?.("Library load failed: " + h.message, "error")),
      () => {
        r = !1;
      }
    );
  }, [e]);
  const J = p.useCallback(() => {
      const r = I.current,
        h = H.current,
        j = W.current;
      if (!r || !h || !j) return;
      const { data: B, width: z, height: k } = r;
      ((h.width = z),
        (h.height = k),
        (j.width = z),
        (j.height = k),
        h
          .getContext("2d")
          .putImageData(new ImageData(new Uint8ClampedArray(B), z, k), 0, 0));
      const O = new Uint8ClampedArray(B);
      (ue(O, s), j.getContext("2d").putImageData(new ImageData(O, z, k), 0, 0));
    }, [s]),
    xe = p.useCallback(async (r) => {
      (E(!1), (I.current = null));
      try {
        const j = await (
            await window.pdfjsLib.getDocument({ data: r.slice() }).promise
          ).getPage(1),
          B = j.getViewport({ scale: 1 }),
          z = Math.min(2, 900 / B.width),
          k = j.getViewport({ scale: z }),
          N = document.createElement("canvas");
        ((N.width = Math.floor(k.width)), (N.height = Math.floor(k.height)));
        const O = N.getContext("2d", { willReadFrequently: !0 });
        ((O.fillStyle = "#fff"),
          O.fillRect(0, 0, N.width, N.height),
          await j.render({ canvasContext: O, viewport: k }).promise,
          (I.current = {
            data: O.getImageData(0, 0, N.width, N.height).data,
            width: N.width,
            height: N.height,
          }),
          E(!0));
      } catch {
        E(!1);
      }
    }, []);
  p.useEffect(() => {
    f && J();
  }, [f, s, J]);
  const se = async (r) => {
      if (r) {
        if (r.type !== "application/pdf" && !/\.pdf$/i.test(r.name)) {
          e?.("Please choose a PDF file", "error");
          return;
        }
        (n(r),
          m(null),
          (P.current = null),
          (A.current = null),
          E(!1),
          (I.current = null));
        try {
          const h = await r.arrayBuffer();
          if (h.byteLength === 0) {
            e?.("That PDF is empty", "error");
            return;
          }
          const j = new Uint8Array(h);
          if (((A.current = j), window.PDFLib)) {
            const { PDFDocument: B, PDFName: z } = window.PDFLib,
              k = await B.load(j.slice(), { ignoreEncryption: !0 });
            L(k.getPageCount());
            let N = !1;
            const O = k.getPages();
            for (let Y = 0; Y < Math.min(O.length, 6) && !N; Y++)
              try {
                const re = O[Y].node
                    .get(z.of("Resources"))
                    ?.get?.(z.of("XObject")),
                  ie = re && k.context.lookup(re);
                if (ie?.entries) {
                  for (const [, be] of ie.entries())
                    if (
                      k.context
                        .lookup(be)
                        ?.dict?.get(z.of("Subtype"))
                        ?.toString() === "/Image"
                    ) {
                      N = !0;
                      break;
                    }
                }
              } catch {}
            (R(N), a(N ? "universal" : "vector"));
          }
          window.pdfjsLib && xe(j);
        } catch (h) {
          e?.("Error loading PDF: " + h.message, "error");
        }
      }
    },
    ne = (r, h, j) => {
      const B = new Blob([r], { type: "application/pdf" }),
        z = URL.createObjectURL(B),
        k = document.createElement("a");
      ((k.href = z),
        (k.download = h.replace(/\.pdf$/i, `_${j}.pdf`)),
        k.click(),
        setTimeout(() => URL.revokeObjectURL(z), 4e3));
    },
    fe = async () => {
      const r = A.current;
      if (!(!c || !v || !r)) {
        (u(!0), m(null), (P.current = null), $({ cur: 0, total: F }));
        try {
          const h = (B, z) => $({ cur: B, total: z }),
            j =
              x === "universal"
                ? await Be(r, s, o, h)
                : await Ee(r.slice(), s, h);
          (m(j),
            (P.current = j),
            ne(j.bytes, c.name, s),
            e?.(
              x === "universal"
                ? "Downloaded — every page recoloured"
                : "Downloaded — text stays selectable",
              "success",
            ));
        } catch (h) {
          (console.error(h), e?.("Error: " + h.message, "error"));
        } finally {
          u(!1);
        }
      }
    },
    he = () => {
      const r = P.current;
      !r || !c || ne(r.bytes, c.name, s);
    },
    pe = () => {
      ((A.current = null),
        (P.current = null),
        (I.current = null),
        n(null),
        m(null),
        L(1),
        R(!1),
        E(!1));
    },
    ce = g.total > 0 ? Math.round((g.cur / g.total) * 100) : 0,
    ge = de.find((r) => r.id === s),
    me = [
      {
        id: "universal",
        label: "Universal",
        Icon: Re,
        desc: "Recolours everything — text, images, scans, gradients. Best fidelity.",
        note: "text becomes non-selectable",
        recommend: M,
      },
      {
        id: "vector",
        label: "Text-Selectable",
        Icon: $e,
        desc: "Rewrites colours in place. Text stays selectable & searchable, tiny file.",
        note: "images keep original colours",
        recommend: !M,
      },
    ];
  return t.jsxs("div", {
    className: "flex flex-col max-w-2xl mx-auto w-full pb-10",
    children: [
      t.jsx("div", {
        className: "flex items-center gap-3 mb-6",
        children: t.jsxs("div", {
          children: [
            t.jsx("div", {
              className: "text-white font-black text-sm",
              children: "Invert PDF Colours",
            }),
            t.jsx("div", {
              className: "text-zinc-600 text-[10px]",
              children:
                "Dark mode, invert, sepia & grayscale · Runs 100% in your browser · No upload",
            }),
          ],
        }),
      }),
      !c &&
        t.jsxs("div", {
          onDragOver: (r) => {
            (r.preventDefault(), D(!0));
          },
          onDragLeave: () => D(!1),
          onDrop: (r) => {
            (r.preventDefault(), D(!1), se(r.dataTransfer.files[0]));
          },
          onClick: () => q.current?.click(),
          className: `flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-2xl cursor-pointer transition-all py-16 px-8
            ${_ ? "border-zinc-400 bg-zinc-800/60" : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/60"}`,
          children: [
            t.jsx("div", {
              className:
                "w-14 h-14 bg-zinc-900 border border-zinc-700 rounded-2xl flex items-center justify-center",
              children: t.jsx(ve, { size: 24, className: "text-zinc-400" }),
            }),
            t.jsxs("div", {
              className: "text-center",
              children: [
                t.jsx("div", {
                  className: "text-white font-bold text-base mb-1",
                  children: "Drop your PDF here",
                }),
                t.jsx("div", {
                  className: "text-zinc-500 text-sm",
                  children: "or click to browse",
                }),
              ],
            }),
            t.jsx("input", {
              ref: q,
              type: "file",
              accept: "application/pdf",
              className: "hidden",
              onChange: (r) => se(r.target.files[0]),
            }),
          ],
        }),
      c &&
        t.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            t.jsxs("div", {
              className:
                "flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl",
              children: [
                t.jsx("div", {
                  className:
                    "w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                  children: t.jsx(ze, { size: 14, className: "text-zinc-400" }),
                }),
                t.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    t.jsx("div", {
                      className: "text-sm font-semibold text-zinc-200 truncate",
                      children: c.name,
                    }),
                    t.jsxs("div", {
                      className: "text-[10px] text-zinc-600",
                      children: [
                        (c.size / 1024 / 1024).toFixed(2),
                        " MB · ",
                        F,
                        " page",
                        F !== 1 ? "s" : "",
                        M ? " · contains images" : "",
                      ],
                    }),
                  ],
                }),
                t.jsx("button", {
                  "aria-label": "Remove file",
                  onClick: pe,
                  className:
                    "p-1.5 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-all",
                  children: t.jsx(ke, { size: 14 }),
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("div", {
                  className: "flex items-center gap-1.5 mb-2.5",
                  children: [
                    t.jsx(Pe, { size: 11, className: "text-zinc-500" }),
                    t.jsx("span", {
                      className:
                        "text-[9px] font-black text-zinc-500 uppercase tracking-[2px]",
                      children: "Live Preview · Page 1",
                    }),
                  ],
                }),
                t.jsx("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: [
                    { label: "Before", ref: H },
                    { label: "After", ref: W },
                  ].map((r) =>
                    t.jsxs(
                      "div",
                      {
                        className:
                          "relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center min-h-[180px]",
                        children: [
                          f
                            ? t.jsx("canvas", {
                                ref: r.ref,
                                className: "w-full h-auto block",
                              })
                            : t.jsxs("div", {
                                className:
                                  "flex flex-col items-center gap-2 py-10 text-zinc-700",
                                children: [
                                  t.jsx(ee, { size: 16 }),
                                  t.jsx("span", {
                                    className: "text-[10px]",
                                    children: "Rendering…",
                                  }),
                                ],
                              }),
                          t.jsx("span", {
                            className:
                              "absolute top-1.5 left-1.5 text-[8px] font-black uppercase tracking-widest text-zinc-400 bg-black/60 backdrop-blur px-1.5 py-0.5 rounded",
                            children: r.label,
                          }),
                        ],
                      },
                      r.label,
                    ),
                  ),
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("div", {
                  className:
                    "text-[9px] font-black text-zinc-500 uppercase tracking-[2px] mb-2.5",
                  children: "Colour Mode",
                }),
                t.jsx("div", {
                  className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                  children: de.map((r) =>
                    t.jsxs(
                      "button",
                      {
                        onClick: () => {
                          (i(r.id), m(null), (P.current = null));
                        },
                        className: `relative text-left p-3 rounded-xl border transition-all
                    ${s === r.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                        children: [
                          t.jsxs("div", {
                            className:
                              "w-full h-6 rounded-md mb-2 flex items-center px-2 gap-1.5",
                            style: { background: r.swatchBg },
                            children: [
                              t.jsx("div", {
                                className: "h-1.5 flex-1 rounded-full",
                                style: { background: r.swatchText },
                              }),
                              t.jsx("div", {
                                className: "h-1.5 w-3 rounded-full",
                                style: { background: r.swatchAccent },
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              t.jsx("div", {
                                className: "text-xs font-black text-zinc-100",
                                children: r.label,
                              }),
                              s === r.id &&
                                t.jsx("div", {
                                  className:
                                    "w-4 h-4 bg-white rounded-full flex items-center justify-center",
                                  children: t.jsx(Z, {
                                    size: 9,
                                    className: "text-black",
                                  }),
                                }),
                            ],
                          }),
                          t.jsx("div", {
                            className:
                              "text-[9px] text-zinc-600 leading-relaxed mt-1 hidden sm:block",
                            children: r.desc,
                          }),
                        ],
                      },
                      r.id,
                    ),
                  ),
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("div", {
                  className:
                    "text-[9px] font-black text-zinc-500 uppercase tracking-[2px] mb-2.5",
                  children: "Engine",
                }),
                t.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                  children: me.map((r) =>
                    t.jsxs(
                      "button",
                      {
                        onClick: () => {
                          (a(r.id), m(null), (P.current = null));
                        },
                        className: `relative text-left p-3 rounded-xl border transition-all
                    ${x === r.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                        children: [
                          t.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [
                              t.jsx(r.Icon, {
                                size: 13,
                                className: "text-zinc-300",
                              }),
                              t.jsx("span", {
                                className: "text-xs font-black text-zinc-100",
                                children: r.label,
                              }),
                              r.recommend &&
                                t.jsx("span", {
                                  className:
                                    "text-[7px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded-full",
                                  children: "Recommended",
                                }),
                              x === r.id &&
                                t.jsx("span", {
                                  className:
                                    "ml-auto w-4 h-4 bg-white rounded-full flex items-center justify-center",
                                  children: t.jsx(Z, {
                                    size: 9,
                                    className: "text-black",
                                  }),
                                }),
                            ],
                          }),
                          t.jsx("div", {
                            className:
                              "text-[9px] text-zinc-500 leading-relaxed",
                            children: r.desc,
                          }),
                          t.jsxs("div", {
                            className: "text-[8px] text-zinc-600 mt-1",
                            children: ["⚠ ", r.note],
                          }),
                        ],
                      },
                      r.id,
                    ),
                  ),
                }),
              ],
            }),
            x === "universal" &&
              t.jsxs("div", {
                children: [
                  t.jsx("div", {
                    className:
                      "text-[9px] font-black text-zinc-500 uppercase tracking-[2px] mb-2.5",
                    children: "Resolution",
                  }),
                  t.jsx("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      {
                        id: "standard",
                        label: "Standard",
                        desc: "~140 DPI · smaller file",
                      },
                      {
                        id: "high",
                        label: "High",
                        desc: "~190 DPI · crisper text",
                      },
                    ].map((r) =>
                      t.jsxs(
                        "button",
                        {
                          onClick: () => {
                            (l(r.id), m(null), (P.current = null));
                          },
                          className: `text-left p-3 rounded-xl border transition-all
                      ${o === r.id ? "bg-zinc-800 border-zinc-500 ring-1 ring-zinc-400" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"}`,
                          children: [
                            t.jsx("div", {
                              className: "text-xs font-black text-zinc-100",
                              children: r.label,
                            }),
                            t.jsx("div", {
                              className: "text-[9px] text-zinc-600 mt-0.5",
                              children: r.desc,
                            }),
                          ],
                        },
                        r.id,
                      ),
                    ),
                  }),
                ],
              }),
            d &&
              t.jsxs("div", {
                className:
                  "px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                      t.jsx("span", {
                        className: "text-xs text-zinc-400 font-semibold",
                        children: g.total
                          ? `Processing page ${g.cur} of ${g.total}…`
                          : "Preparing…",
                      }),
                      t.jsxs("span", {
                        className: "text-xs font-black text-white",
                        children: [ce, "%"],
                      }),
                    ],
                  }),
                  t.jsx("div", {
                    className: "h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                    children: t.jsx("div", {
                      className:
                        "h-full bg-white rounded-full transition-all duration-300",
                      style: { width: `${ce}%` },
                    }),
                  }),
                ],
              }),
            y?.warnings?.length > 0 &&
              t.jsxs("div", {
                className:
                  "px-4 py-3 bg-zinc-900 border border-yellow-800/40 rounded-xl",
                children: [
                  t.jsxs("div", {
                    className: "flex items-center gap-2 mb-2",
                    children: [
                      t.jsx(Ne, {
                        size: 13,
                        className: "text-yellow-500 flex-shrink-0",
                      }),
                      t.jsx("span", {
                        className:
                          "text-[10px] font-black text-yellow-500 uppercase tracking-widest",
                        children: "Note",
                      }),
                    ],
                  }),
                  y.warnings.map((r, h) =>
                    t.jsx(
                      "div",
                      {
                        className: "text-[10px] text-zinc-500 leading-relaxed",
                        children: r,
                      },
                      h,
                    ),
                  ),
                ],
              }),
            t.jsxs("div", {
              className: "flex gap-3",
              children: [
                t.jsx("button", {
                  onClick: fe,
                  disabled: d || !v,
                  className: `flex-1 flex items-center justify-center gap-2 py-3.5 bg-white
                disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100
                text-black rounded-xl font-black text-sm transition-all active:scale-[0.98]`,
                  children: d
                    ? t.jsxs(t.Fragment, {
                        children: [t.jsx(ee, { size: 16 }), "Processing…"],
                      })
                    : t.jsxs(t.Fragment, {
                        children: [t.jsx(le, { size: 16 }), "Apply & Download"],
                      }),
                }),
                y &&
                  t.jsxs("button", {
                    onClick: he,
                    className:
                      "px-5 py-3.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-zinc-300 rounded-xl font-bold text-sm transition-all flex items-center gap-2",
                    children: [t.jsx(le, { size: 14 }), "Again"],
                  }),
              ],
            }),
            y &&
              t.jsxs("div", {
                className:
                  "flex items-center gap-2.5 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-xl",
                children: [
                  t.jsx("div", {
                    className:
                      "w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0",
                    children: t.jsx(Z, { size: 12, className: "text-black" }),
                  }),
                  t.jsxs("div", {
                    children: [
                      t.jsx("div", {
                        className: "text-sm font-bold text-zinc-200",
                        children: "Downloaded successfully",
                      }),
                      t.jsxs("div", {
                        className: "text-[10px] text-zinc-600",
                        children: [
                          ge.label,
                          " ·",
                          " ",
                          x === "universal"
                            ? "all content recoloured"
                            : "text remains selectable",
                          " ",
                          "· No watermark",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            !v &&
              t.jsxs("div", {
                className:
                  "text-center text-xs text-zinc-600 py-2 flex items-center justify-center gap-1.5",
                children: [
                  t.jsx(ee, { size: 12, className: "text-zinc-600" }),
                  "Loading libraries…",
                ],
              }),
          ],
        }),
    ],
  });
}
export { Ge as default };
