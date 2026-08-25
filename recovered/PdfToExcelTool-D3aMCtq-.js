import { r as S, j as e, e as ue } from "./react-vendor-Bc7KCos-.js";
const X = ({ children: t, className: n = "w-5 h-5" }) =>
    e.jsx("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.75",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: n,
      children: t,
    }),
  O = {
    Upload: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "17 8 12 3 7 8" }),
          e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
        ],
      }),
    Down: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "7 10 12 15 17 10" }),
          e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
        ],
      }),
    Check: (t) =>
      e.jsx(X, {
        ...t,
        children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
      }),
    Edit: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("path", {
            d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
          }),
          e.jsx("path", {
            d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
          }),
        ],
      }),
    Warn: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("path", {
            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
          }),
          e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
          e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
        ],
      }),
    Table: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
          e.jsx("path", { d: "M3 9h18M3 15h18M9 3v18" }),
        ],
      }),
    Rows: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
          e.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
          e.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
        ],
      }),
    Merge: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("rect", { x: "2", y: "3", width: "20", height: "18", rx: "2" }),
          e.jsx("path", { d: "M2 9h20M2 15h20M8 3v6M16 15v6" }),
        ],
      }),
    Form: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
          e.jsx("path", { d: "M8 7h8M8 12h4M8 17h6" }),
        ],
      }),
    Chip: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("rect", { x: "9", y: "9", width: "6", height: "6" }),
          e.jsx("path", {
            d: "M15 9V5h-2M9 9V5h2M15 15v4h-2M9 15v4h2M5 9h4M5 15h4M19 9h-4M19 15h-4",
          }),
        ],
      }),
    Excel: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("rect", { x: "2", y: "3", width: "20", height: "18", rx: "2" }),
          e.jsx("path", { d: "M8 3v18M2 9h20M2 15h20" }),
        ],
      }),
    Reset: (t) =>
      e.jsxs(X, {
        ...t,
        children: [
          e.jsx("polyline", { points: "1 4 1 10 7 10" }),
          e.jsx("path", { d: "M3.51 15a9 9 0 1 0 .49-4.95" }),
        ],
      }),
  },
  Le = () =>
    new Promise((t, n) => {
      if (window.pdfjsLib) {
        t(window.pdfjsLib);
        return;
      }
      const a = document.createElement("script");
      ((a.src =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"),
        (a.onload = () => {
          ((window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"),
            t(window.pdfjsLib));
        }),
        (a.onerror = n),
        document.head.appendChild(a));
    }),
  De = () =>
    new Promise((t, n) => {
      if (window.XLSX) {
        t(window.XLSX);
        return;
      }
      const a = document.createElement("script");
      ((a.src =
        "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"),
        (a.onload = () => t(window.XLSX)),
        (a.onerror = n),
        document.head.appendChild(a));
    }),
  M = {
    save: 21,
    restore: 22,
    transform: 23,
    constructPath: 91,
    fill: 33,
    eoFill: 34,
    stroke: 31,
    closeStroke: 32,
    fillStroke: 35,
    eoFillStroke: 36,
    closeFillStroke: 37,
    closeEOFillStroke: 38,
    endPath: 39,
    setLineWidth: 13,
    setFillRGBColor: 70,
    setStrokeRGBColor: 69,
    setFillGray: 68,
    setStrokeGray: 67,
    setFillColor: 65,
    setFillColorN: 66,
    setStrokeColor: 63,
    setStrokeColorN: 64,
    setFillCMYKColor: 72,
    setStrokeCMYKColor: 71,
    setFillTransparent: 93,
    setStrokeTransparent: 92,
  },
  re = { MOVETO: 0, LINETO: 1, CLOSEPATH: 5, RECT: 6 },
  Re = { 0: 2, 1: 2, 2: 6, 3: 4, 4: 4, 5: 0, 6: 4 },
  Oe = () => [1, 0, 0, 1, 0, 0],
  ne = ([t, n, a, i, p, m], o, d) => [t * o + a * d + p, n * o + i * d + m],
  $e = (t, n) => [
    t[0] * n[0] + t[2] * n[1],
    t[1] * n[0] + t[3] * n[1],
    t[0] * n[2] + t[2] * n[3],
    t[1] * n[2] + t[3] * n[3],
    t[0] * n[4] + t[2] * n[5] + t[4],
    t[1] * n[4] + t[3] * n[5] + t[5],
  ],
  Pe = (t) => Math.max(0, Math.min(1, t)),
  he = (t) =>
    Math.round(Pe(t) * 255)
      .toString(16)
      .padStart(2, "0"),
  Q = (t, n, a) => (he(t) + he(n) + he(a)).toUpperCase(),
  le = (t) => Q(t, t, t),
  be = (t, n, a, i) =>
    Q((1 - t) * (1 - i), (1 - n) * (1 - i), (1 - a) * (1 - i)),
  _e = (t) => {
    const n = parseInt(t.slice(0, 2), 16),
      a = parseInt(t.slice(2, 4), 16),
      i = parseInt(t.slice(4, 6), 16);
    return n > 230 && a > 230 && i > 230;
  },
  Ae = (t = "") => {
    const n = t.toUpperCase();
    return {
      bold: /BOLD|BLACK|HEAVY|DEMI|SEMIBOLD|EXTRABOLD|ULTRABOLD|MEDIUM/.test(n),
      italic: /ITALIC|OBLIQUE|SLANT/.test(n),
    };
  },
  Ie = [
    /^\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{2,4}$/,
    /^\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2}$/,
    /^\d{1,2}\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$/i,
    /^(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}$/i,
  ],
  He = /^(yes|no|true|false|✓|✗|×|√|y|n)$/i,
  Be = /^[₹$€£¥₩฿₺₽]|[₹$€£¥₩฿₺₽]$/;
function Xe(t) {
  const n = (t || "").trim();
  if (!n) return { t: "s", v: "" };
  if (He.test(n)) return { t: "b", v: /yes|true|✓|√|^y$/i.test(n) };
  const a = n.match(/^-?\s*([\d,]+(?:\.\d+)?)\s*%$/);
  if (a) {
    const o = parseFloat(a[1].replace(/,/g, "")) / 100;
    if (!isNaN(o)) return { t: "n", v: o, z: "0.00%" };
  }
  for (const o of Ie)
    if (o.test(n)) {
      const d = n
          .replace(/\./g, "/")
          .replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, "$3/$2/$1"),
        z = new Date(d);
      if (!isNaN(z)) return { t: "d", v: z, z: "dd/mm/yyyy" };
    }
  const i = Be.test(n),
    m = (i ? n.replace(/[₹$€£¥₩฿₺₽\s]/g, "") : n)
      .replace(/,/g, "")
      .match(/^(-?)([\d]+(?:\.\d+)?)([a-zA-Z]{0,3})$/);
  if (m) {
    const o = parseFloat(m[1] + m[2]);
    if (!isNaN(o)) {
      const d = (m[2].split(".")[1] || "").length,
        z = i
          ? d > 0
            ? `#,##0.${"0".repeat(d)}`
            : "#,##0"
          : d > 0
            ? `0.${"0".repeat(Math.min(d, 4))}`
            : "0";
      return { t: "n", v: o, z };
    }
  }
  return { t: "s", v: n };
}
function ce(t, n) {
  if (!t.length) return [];
  const a = [...t].sort((p, m) => p - m),
    i = [[a[0]]];
  for (let p = 1; p < a.length; p++)
    a[p] - i[i.length - 1][0] <= n
      ? i[i.length - 1].push(a[p])
      : i.push([a[p]]);
  return i.map((p) => p.reduce((m, o) => m + o, 0) / p.length);
}
function Ve(t, n) {
  const { fnArray: a, argsArray: i } = t,
    m = [{ fill: "FFFFFF", stroke: "000000", lw: 1, ctm: Oe() }],
    o = () => m[m.length - 1],
    d = () => ({ ...o(), ctm: [...o().ctm] });
  let z = [],
    k = [];
  const N = [],
    C = [],
    g = [],
    L = 2,
    E = 2,
    b = (f, y) => {
      const r = o();
      if (y)
        for (const w of z) {
          const [v, s] = ne(r.ctm, w.x1, w.y1),
            [c, u] = ne(r.ctm, w.x2, w.y2),
            h = v,
            j = n - s,
            F = c,
            T = n - u;
          Math.abs(j - T) <= L
            ? N.push({
                y: (j + T) / 2,
                x1: Math.min(h, F),
                x2: Math.max(h, F),
                color: r.stroke,
                lw: r.lw,
              })
            : Math.abs(h - F) <= E &&
              C.push({
                x: (h + F) / 2,
                y1: Math.min(j, T),
                y2: Math.max(j, T),
                color: r.stroke,
                lw: r.lw,
              });
        }
      for (const w of k) {
        const [v, s] = ne(r.ctm, w.x, w.y),
          [c, u] = ne(r.ctm, w.x + w.w, w.y + w.h),
          h = Math.min(v, c),
          j = Math.min(n - s, n - u),
          F = Math.abs(c - v),
          T = Math.abs(u - s);
        F < 1 ||
          T < 1 ||
          (y &&
            (N.push({ y: j, x1: h, x2: h + F, color: r.stroke, lw: r.lw }),
            N.push({ y: j + T, x1: h, x2: h + F, color: r.stroke, lw: r.lw }),
            C.push({ x: h, y1: j, y2: j + T, color: r.stroke, lw: r.lw }),
            C.push({ x: h + F, y1: j, y2: j + T, color: r.stroke, lw: r.lw })),
          f &&
            !_e(r.fill) &&
            g.push({ x: h, y: j, w: F, h: T, color: r.fill }));
      }
      ((z = []), (k = []));
    };
  for (let f = 0; f < a.length; f++) {
    const y = a[f],
      r = i[f];
    switch (y) {
      case M.save:
        m.push(d());
        break;
      case M.restore:
        m.length > 1 && m.pop();
        break;
      case M.transform:
        o().ctm = $e(o().ctm, r);
        break;
      case M.setLineWidth:
        o().lw = r[0];
        break;
      case M.setFillRGBColor:
        o().fill = Q(r[0], r[1], r[2]);
        break;
      case M.setStrokeRGBColor:
        o().stroke = Q(r[0], r[1], r[2]);
        break;
      case M.setFillGray:
        o().fill = le(r[0]);
        break;
      case M.setStrokeGray:
        o().stroke = le(r[0]);
        break;
      case M.setFillCMYKColor:
        o().fill = be(r[0], r[1], r[2], r[3]);
        break;
      case M.setStrokeCMYKColor:
        o().stroke = be(r[0], r[1], r[2], r[3]);
        break;
      case M.setFillColor:
      case M.setFillColorN:
        r.length >= 3
          ? (o().fill = Q(r[0], r[1], r[2]))
          : r.length === 1 && (o().fill = le(r[0]));
        break;
      case M.setStrokeColor:
      case M.setStrokeColorN:
        r.length >= 3
          ? (o().stroke = Q(r[0], r[1], r[2]))
          : r.length === 1 && (o().stroke = le(r[0]));
        break;
      case M.setFillTransparent:
        o().fill = "FFFFFF";
        break;
      case M.setStrokeTransparent:
        o().stroke = "FFFFFF";
        break;
      case M.constructPath: {
        const w = r[0],
          v = r[1];
        let s = 0,
          c = 0,
          u = 0,
          h = 0,
          j = 0;
        for (const F of w)
          switch (F) {
            case re.MOVETO:
              ((c = v[s++]), (u = v[s++]), (h = c), (j = u));
              break;
            case re.LINETO: {
              const T = v[s++],
                _ = v[s++];
              (z.push({ x1: c, y1: u, x2: T, y2: _ }), (c = T), (u = _));
              break;
            }
            case re.CLOSEPATH:
              (z.push({ x1: c, y1: u, x2: h, y2: j }), (c = h), (u = j));
              break;
            case re.RECT: {
              const T = v[s++],
                _ = v[s++],
                Z = v[s++],
                J = v[s++];
              k.push({ x: T, y: _, w: Z, h: J });
              break;
            }
            default:
              s += Re[F] ?? 0;
              break;
          }
        break;
      }
      case M.stroke:
        b(!1, !0);
        break;
      case M.closeStroke:
        b(!1, !0);
        break;
      case M.fill:
      case M.eoFill:
        b(!0, !1);
        break;
      case M.fillStroke:
      case M.eoFillStroke:
        b(!0, !0);
        break;
      case M.closeFillStroke:
      case M.closeEOFillStroke:
        b(!0, !0);
        break;
      case M.endPath:
        ((z = []), (k = []));
        break;
    }
  }
  return { hLines: N, vLines: C, filledRects: g };
}
const G = 3.5,
  ge = 10,
  oe = 4;
function Ye(t, n, a, i) {
  const p = t.filter((s) => s.x2 - s.x1 >= ge),
    m = n.filter((s) => s.y2 - s.y1 >= ge);
  if (p.length < 2 || m.length < 2) return [];
  const o = ce(
      p.map((s) => s.y),
      G,
    ),
    d = ce(
      m.map((s) => s.x),
      G,
    );
  if (o.length < 3 || d.length < 3) return [];
  const z = o.length - 1,
    k = d.length - 1,
    N = (s, c, u) =>
      p.some((h) => Math.abs(h.y - s) <= G && h.x1 <= c + G && h.x2 >= u - G),
    C = (s, c, u) =>
      m.some((h) => Math.abs(h.x - s) <= G && h.y1 <= c + G && h.y2 >= u - G),
    g = Array.from({ length: z }, () =>
      Array.from({ length: k }, () => ({ rs: 1, cs: 1, skip: !1 })),
    );
  for (let s = 0; s < z; s++)
    for (let c = 0; c < k - 1; c++) {
      if (g[s][c].skip) continue;
      let u = 1;
      for (; c + u < k && !C(d[c + u], o[s], o[s + 1]);)
        ((g[s][c + u].skip = !0), u++);
      g[s][c].cs = u;
    }
  for (let s = 0; s < k; s++)
    for (let c = 0; c < z - 1; c++) {
      if (g[c][s].skip) continue;
      let u = g[c][s].rs;
      for (; c + u < z && !N(o[c + u], d[s], d[s + 1]);)
        ((g[c + u][s].skip = !0), u++);
      g[c][s].rs = u;
    }
  const L = [];
  for (let s = 0; s < z; s++)
    for (let c = 0; c < k; c++) {
      const { rs: u, cs: h, skip: j } = g[s][c];
      !j &&
        (u > 1 || h > 1) &&
        L.push({ s: { r: s, c }, e: { r: s + u - 1, c: c + h - 1 } });
    }
  const E = (s, c, u, h) =>
      a
        .filter((j) => j.x >= s && j.x <= u && j.y >= c && j.y <= h)
        .sort((j, F) => j.y - F.y || j.x - F.x)
        .map((j) => j.str)
        .join(" ")
        .trim(),
    b = (s, c) => {
      const u = d[c],
        h = o[s],
        j = d[c + 1] - u,
        F = o[s + 1] - h,
        T = i.find(
          (_) =>
            _.x <= u + 5 &&
            _.y <= h + 5 &&
            _.x + _.w >= u + j - 5 &&
            _.y + _.h >= h + F - 5,
        );
      return T ? T.color : null;
    },
    f = Array.from({ length: z }, (s, c) =>
      Array.from({ length: k }, (u, h) => {
        const { rs: j, cs: F, skip: T } = g[c][h];
        if (T) return { text: null, bg: null, skip: !0, rs: 1, cs: 1 };
        const _ = d[h] + oe,
          Z = o[c] + oe,
          J = d[h + F] - oe,
          ie = o[c + j] - oe;
        return { text: E(_, Z, J, ie), bg: b(c, h), skip: !1, rs: j, cs: F };
      }),
    ),
    y = f[0]?.filter((s) => !s.skip).map((s) => s.text || "") || [],
    r = y.filter((s) => /^-?[\d,]+(\.\d+)?%?$/.test(s.trim())).length,
    w = y.some((s) => s.trim()) && r < y.length * 0.5,
    v = d.slice(0, -1).map((s, c) => (d[c + 1] - d[c]) / 5.5);
  return [
    {
      source: "border",
      rows: f,
      merges: L,
      numRows: z,
      numCols: k,
      hasHeader: w,
      colWidths: v,
    },
  ];
}
function We(t) {
  if (t.length < 4) return [];
  const n = 3,
    a = 12,
    p = ce(
      t.map((b) => b.y),
      n,
    ).map((b) =>
      t.filter((f) => Math.abs(f.y - b) <= n).sort((f, y) => f.x - y.x),
    ),
    m = p.flatMap((b) => b.map((f) => f.x)),
    o = ce(m, a).sort((b, f) => b - f);
  if (o.length < 2) return [];
  const d = (b) => {
      let f = 0,
        y = 1 / 0;
      for (let r = 0; r < o.length; r++) {
        const w = Math.abs(b - o[r]);
        w < y && ((y = w), (f = r));
      }
      return f;
    },
    k = p
      .map((b) => {
        const f = o.map(() => ({ texts: [], sizes: [], fonts: [] }));
        for (const y of b) {
          const r = d(y.x);
          (f[r].texts.push(y.str),
            f[r].sizes.push(y.fontSize),
            f[r].fonts.push(y.fontName));
        }
        return f.map((y) => ({
          text: y.texts.join(" ").trim(),
          fontSize: y.sizes.length ? Math.max(...y.sizes) : 0,
          fontName: y.fonts[0] || "",
        }));
      })
      .filter((b) => b.some((f) => f.text));
  if (k.length < 2) return [];
  let N = 0;
  for (const b of k)
    for (let f = b.length - 1; f >= 0; f--)
      if (b[f].text) {
        N = Math.max(N, f);
        break;
      }
  const C = k.map((b) =>
      b
        .slice(0, N + 1)
        .map((f) => ({ ...f, bg: null, skip: !1, rs: 1, cs: 1 })),
    ),
    g = C[0] || [],
    L = g.filter((b) => /^-?[\d,]+(\.\d+)?%?$/.test(b.text.trim())).length,
    E = g.some((b) => b.text) && L < g.length * 0.5;
  return [
    {
      source: "coord",
      rows: C,
      merges: [],
      numRows: C.length,
      numCols: N + 1,
      hasHeader: E,
      colWidths: o.slice(0, N + 1).map(() => 15),
    },
  ];
}
function Ue(t, n, a) {
  return t
    .filter((i) => i.subtype === "Widget")
    .map((i) => {
      let p = "";
      return (
        i.fieldType === "Tx"
          ? (p = String(i.fieldValue || ""))
          : i.fieldType === "Btn"
            ? (p = i.fieldValue === "Yes" ? "YES" : "NO")
            : i.fieldType === "Ch" &&
              (p = Array.isArray(i.fieldValue)
                ? i.fieldValue.join(", ")
                : i.fieldValue || ""),
        {
          page: n,
          name: i.fieldName || "Field",
          type: i.fieldType || "Tx",
          value: p,
          label: i.alternativeText || i.fieldName || "",
        }
      );
    });
}
async function Ge(t, n) {
  const i = t.getViewport({ scale: 1 }).height,
    [p, m, o] = await Promise.all([
      t.getOperatorList(),
      t.getTextContent({ includeMarkedContent: !1 }),
      t.getAnnotations(),
    ]),
    { hLines: d, vLines: z, filledRects: k } = Ve(p, i),
    N = m.items
      .filter((g) => g.str && g.str.trim())
      .map((g) => ({
        str: g.str.trim(),
        x: g.transform[4],
        y: i - g.transform[5],
        fontSize: Math.abs(g.transform[3]),
        fontName: g.fontName || "",
        width: g.width || 0,
      }));
  let C = Ye(d, z, N, k);
  return (C.length || (C = We(N)), { tables: C, formFields: Ue(o, n) });
}
function Je(t, n, a) {
  const { rows: i, merges: p, numCols: m, colWidths: o, hasHeader: d } = n,
    { inclHeaders: z, freeze: k, autoFilter: N, styles: C } = a,
    g = i.flatMap((f) => f.map((y) => y.fontSize || 0)),
    L = Math.max(...g, 1),
    E = {},
    b = [];
  return (
    i.forEach((f, y) => {
      if (y === 0 && d && !z) return;
      const r = d && y === 0,
        w = [];
      (f.forEach((v) => {
        if (v.skip) {
          w.push(null);
          return;
        }
        const s = Xe(v.text || ""),
          c = { t: s.t, v: s.v };
        if ((s.z && (c.z = s.z), C)) {
          const { bold: u, italic: h } = Ae(v.fontName || ""),
            j = L > 0 ? (v.fontSize || 0) / L : 0,
            F = r || u || j > 0.82;
          c.s = {
            font: {
              bold: F,
              italic: h,
              sz: Math.max(8, Math.min(Math.round(v.fontSize || 10), 36)),
              color: { rgb: "E8E8E8" },
            },
            fill: v.bg
              ? { patternType: "solid", fgColor: { rgb: v.bg } }
              : r
                ? { patternType: "solid", fgColor: { rgb: "1A1A1A" } }
                : { patternType: "none" },
            alignment: { wrapText: !0, vertical: "top" },
            border: {
              top: { style: "thin", color: { rgb: "2D2D2D" } },
              bottom: { style: "thin", color: { rgb: "2D2D2D" } },
              left: { style: "thin", color: { rgb: "2D2D2D" } },
              right: { style: "thin", color: { rgb: "2D2D2D" } },
            },
          };
        }
        w.push(c);
      }),
        b.push(w));
    }),
    b.forEach((f, y) =>
      f.forEach((r, w) => {
        r !== null && (E[t.utils.encode_cell({ r: y, c: w })] = r);
      }),
    ),
    (E["!ref"] = t.utils.encode_range({
      s: { r: 0, c: 0 },
      e: { r: Math.max(0, b.length - 1), c: m - 1 },
    })),
    p && p.length && (E["!merges"] = p),
    (E["!cols"] = Array.from({ length: m }, (f, y) => {
      const r = b.reduce(
        (w, v) => Math.max(w, String(v[y]?.v ?? "").length),
        4,
      );
      return { wch: Math.max(8, Math.min(40, o?.[y] ?? r + 2)) };
    })),
    k && d && (E["!freeze"] = { xSplit: 0, ySplit: 1, topLeftCell: "A2" }),
    N &&
      d &&
      b.length > 1 &&
      (E["!autofilter"] = {
        ref: t.utils.encode_range({ s: { r: 0, c: 0 }, e: { r: 0, c: m - 1 } }),
      }),
    E
  );
}
const Ke = ({ value: t, label: n, sub: a }) =>
    e.jsxs("div", {
      className: "space-y-2",
      children: [
        e.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            e.jsx("span", {
              className: "text-sm font-semibold text-zinc-200",
              children: n,
            }),
            e.jsxs("span", {
              className: "text-sm font-mono text-zinc-300",
              children: [Math.round(t), "%"],
            }),
          ],
        }),
        e.jsx("div", {
          className: "h-1.5 bg-zinc-700 rounded-full overflow-hidden",
          children: e.jsx("div", {
            className:
              "h-full bg-white rounded-full transition-all duration-300",
            style: { width: `${t}%` },
          }),
        }),
        a &&
          e.jsx("p", {
            className: "text-xs text-zinc-400 font-mono truncate",
            children: a,
          }),
      ],
    }),
  ae = ({ label: t, value: n, icon: a }) =>
    e.jsxs("div", {
      className:
        "flex flex-col gap-2 p-4 rounded-xl border border-zinc-700 bg-zinc-800",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 text-zinc-400",
          children: [
            a && e.jsx(a, { className: "w-3.5 h-3.5" }),
            e.jsx("span", {
              className: "text-xs uppercase tracking-widest font-bold",
              children: t,
            }),
          ],
        }),
        e.jsx("span", {
          className:
            "text-3xl font-black text-white tracking-tighter leading-none",
          children: n,
        }),
      ],
    }),
  U = ({ label: t, on: n, onClick: a }) =>
    e.jsx("button", {
      onClick: a,
      className: `px-3.5 py-2 rounded-lg text-xs font-bold border tracking-wide transition-all duration-150 ${n ? "bg-white text-black border-white" : "bg-zinc-800 text-zinc-300 border-zinc-600 hover:border-zinc-400 hover:text-white"}`,
      children: t,
    }),
  je = ({ value: t, onChange: n }) => {
    const [a, i] = S.useState(!1),
      [p, m] = S.useState(t),
      o = S.useRef();
    return (
      ue.useEffect(() => m(t), [t]),
      ue.useEffect(() => {
        a && o.current && o.current.focus();
      }, [a]),
      a
        ? e.jsx("input", {
            ref: o,
            value: p,
            onChange: (d) => m(d.target.value),
            onBlur: () => {
              (i(!1), n(p));
            },
            onKeyDown: (d) =>
              ["Enter", "Escape"].includes(d.key) && (i(!1), n(p)),
            className:
              "w-full text-xs bg-zinc-700 text-white px-2 py-1 rounded outline-none border border-zinc-400",
          })
        : e.jsxs("div", {
            onClick: () => i(!0),
            className:
              "group cursor-pointer relative min-h-[20px] text-xs leading-relaxed text-zinc-100",
            children: [
              p || e.jsx("span", { className: "text-zinc-600", children: "—" }),
              e.jsx("span", {
                className: "absolute top-0 right-0 hidden group-hover:block",
                children: e.jsx(O.Edit, { className: "w-3 h-3 text-zinc-500" }),
              }),
            ],
          })
    );
  },
  Qe = ({ tbl: t, onToggle: n, onCell: a, onHeader: i }) => {
    const [p, m] = S.useState(!0),
      o = 6,
      d = t.hasHeader ? t.rows[0] : null,
      z = t.hasHeader ? t.rows.slice(1) : t.rows;
    return e.jsxs("div", {
      className: `rounded-xl border-2 transition-all duration-200 overflow-hidden ${t.selected ? "border-zinc-500 bg-zinc-800" : "border-zinc-800 bg-zinc-900 opacity-50"}`,
      children: [
        e.jsxs("div", {
          className:
            "flex items-center gap-3 px-4 py-3.5 border-b border-zinc-700",
          children: [
            e.jsx("button", {
              "aria-label": "Select table",
              onClick: () => n(t.id),
              className: `w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${t.selected ? "bg-white border-white" : "border-zinc-500 bg-transparent"}`,
              children:
                t.selected &&
                e.jsx(O.Check, { className: "w-3 h-3 text-black" }),
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 flex-wrap",
                  children: [
                    e.jsxs("span", {
                      className: "text-sm font-black text-white tracking-tight",
                      children: ["Table ", t.tableIndex],
                    }),
                    e.jsx("span", {
                      className: "text-zinc-500",
                      children: "·",
                    }),
                    e.jsxs("span", {
                      className: "text-sm text-zinc-300",
                      children: ["Page ", t.page],
                    }),
                    t.source === "border" &&
                      e.jsx("span", {
                        className:
                          "text-[10px] px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300 font-bold uppercase tracking-wider",
                        children: "Border",
                      }),
                    t.merges?.length > 0 &&
                      e.jsxs("span", {
                        className:
                          "text-[10px] px-2 py-0.5 rounded-full bg-zinc-700 text-zinc-300 font-bold uppercase tracking-wider",
                        children: [t.merges.length, " merged"],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3 mt-0.5",
                  children: [
                    e.jsxs("span", {
                      className: "text-xs text-zinc-400",
                      children: [t.numRows, " rows"],
                    }),
                    e.jsxs("span", {
                      className: "text-xs text-zinc-400",
                      children: [t.numCols, " columns"],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => m((k) => !k),
              className: "text-zinc-400 hover:text-white transition-colors p-1",
              children: e.jsx("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.5",
                className: "w-4 h-4",
                children: p
                  ? e.jsx("polyline", { points: "18 15 12 9 6 15" })
                  : e.jsx("polyline", { points: "6 9 12 15 18 9" }),
              }),
            }),
          ],
        }),
        p &&
          e.jsx("div", {
            className: "overflow-x-auto",
            children: e.jsxs("table", {
              className: "w-full border-collapse text-left",
              style: { minWidth: Math.max(360, t.numCols * 90) },
              children: [
                d &&
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "bg-zinc-700",
                      children: [
                        e.jsx("th", {
                          className:
                            "px-3 py-2 w-8 border-r border-zinc-600 text-xs text-zinc-400 font-mono",
                          children: "#",
                        }),
                        d
                          .filter((k) => !k.skip)
                          .map((k, N) =>
                            e.jsx(
                              "th",
                              {
                                className:
                                  "px-3 py-2 border-r border-zinc-600 last:border-r-0 min-w-[80px]",
                                children: e.jsx(je, {
                                  value: k.text || "",
                                  onChange: (C) => i(t.id, N, C),
                                }),
                              },
                              N,
                            ),
                          ),
                      ],
                    }),
                  }),
                e.jsxs("tbody", {
                  children: [
                    z
                      .slice(0, o)
                      .map((k, N) =>
                        e.jsxs(
                          "tr",
                          {
                            className:
                              "border-t border-zinc-700 hover:bg-zinc-700/40 transition-colors",
                            children: [
                              e.jsx("td", {
                                className:
                                  "px-3 py-2 border-r border-zinc-700 text-xs text-zinc-500 font-mono",
                                children: N + 1,
                              }),
                              k
                                .filter((C) => !C.skip)
                                .map((C, g) =>
                                  e.jsx(
                                    "td",
                                    {
                                      className:
                                        "px-3 py-2 border-r border-zinc-700 last:border-r-0 max-w-[200px]",
                                      style: C.bg
                                        ? { backgroundColor: `#${C.bg}33` }
                                        : {},
                                      children: e.jsx(je, {
                                        value: C.text || "",
                                        onChange: (L) =>
                                          a(
                                            t.id,
                                            N + (t.hasHeader ? 1 : 0),
                                            g,
                                            L,
                                          ),
                                      }),
                                    },
                                    g,
                                  ),
                                ),
                            ],
                          },
                          N,
                        ),
                      ),
                    z.length > o &&
                      e.jsx("tr", {
                        className: "border-t border-zinc-700",
                        children: e.jsxs("td", {
                          colSpan: t.numCols + 1,
                          className:
                            "px-4 py-2.5 text-xs text-zinc-400 text-center font-medium",
                          children: [
                            "+ ",
                            z.length - o,
                            " more rows — all exported in full",
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  P = {
    IDLE: "idle",
    LOAD: "load",
    READY: "ready",
    EXPORT: "export",
    DONE: "done",
  };
function qe({ showNotification: t, showDownloadDialog: n }) {
  const [a, i] = S.useState(P.IDLE),
    [p, m] = S.useState(0),
    [o, d] = S.useState(""),
    [z, k] = S.useState(""),
    [N, C] = S.useState(null),
    [g, L] = S.useState([]),
    [E, b] = S.useState([]),
    [f, y] = S.useState(0),
    [r, w] = S.useState(""),
    [v, s] = S.useState(!1),
    [c, u] = S.useState("per-table"),
    [h, j] = S.useState(!0),
    [F, T] = S.useState(!0),
    [_, Z] = S.useState(!0),
    [J, ie] = S.useState(!0),
    [te, ye] = S.useState(!0),
    [K, pe] = S.useState("xlsx"),
    me = S.useRef(),
    se = S.useCallback(async (l) => {
      if (!l || l.type !== "application/pdf") {
        w("Please upload a valid PDF file.");
        return;
      }
      (w(""), C(l), L([]), b([]), i(P.LOAD), m(0));
      try {
        (d("Loading pdf.js…"), k("cdnjs.cloudflare.com"));
        const x = await Le();
        (d("Parsing PDF…"), k(l.name));
        const R = await l.arrayBuffer(),
          V = await x.getDocument({ data: R }).promise;
        y(V.numPages);
        const H = [],
          I = [];
        for (let A = 1; A <= V.numPages; A++) {
          (m(((A - 1) / V.numPages) * 92),
            d(`Analysing page ${A} of ${V.numPages}`),
            k(
              "operator list · border detection · text clustering · annotations",
            ));
          const W = await V.getPage(A),
            B = await Ge(W, A);
          (B.tables.forEach((D, $) =>
            H.push({
              ...D,
              id: `p${A}t${$}`,
              page: A,
              tableIndex: $ + 1,
              selected: !0,
            }),
          ),
            I.push(...B.formFields));
        }
        (m(100),
          L(H),
          b(I),
          i(P.READY),
          !H.length &&
            !I.length &&
            w(
              "No extractable tables found. The PDF may use raster/image-based tables — try the OCR tool first to make it text-selectable.",
            ));
      } catch (x) {
        (console.error(x),
          w("Extraction failed: " + (x.message || String(x))),
          i(P.IDLE));
      }
    }, []),
    we = S.useCallback(
      (l, x, R, V) =>
        L((H) =>
          H.map((I) =>
            I.id !== l
              ? I
              : {
                  ...I,
                  rows: I.rows.map((A, W) =>
                    W !== x
                      ? A
                      : A.map((B, D) => (D !== R ? B : { ...B, text: V })),
                  ),
                },
          ),
        ),
      [],
    ),
    ke = S.useCallback(
      (l, x, R) =>
        L((V) =>
          V.map((H) =>
            H.id !== l
              ? H
              : {
                  ...H,
                  rows: H.rows.map((I, A) =>
                    A !== 0
                      ? I
                      : I.map((W, B) => (B !== x ? W : { ...W, text: R })),
                  ),
                },
          ),
        ),
      [],
    ),
    Ne = S.useCallback(
      (l) =>
        L((x) =>
          x.map((R) => (R.id === l ? { ...R, selected: !R.selected } : R)),
        ),
      [],
    ),
    ze = async () => {
      const l = g.filter((x) => x.selected);
      if (!l.length && !(te && E.length)) {
        w("Select at least one table to export.");
        return;
      }
      (i(P.EXPORT), m(0));
      try {
        d("Loading SheetJS…");
        const x = await De();
        if (K === "csv") {
          for (let D = 0; D < l.length; D++) {
            (m(((D + 1) / l.length) * 100),
              d(`Writing CSV ${D + 1} of ${l.length}…`));
            const $ = l[D],
              Y = $.rows.map((Ee) => Ee.map((Te) => Te.text || "")),
              xe = x.utils.aoa_to_sheet(Y),
              Fe = x.utils.sheet_to_csv(xe),
              Me = new Blob([Fe], { type: "text/csv" }),
              fe = URL.createObjectURL(Me),
              ee = document.createElement("a");
            ((ee.href = fe),
              (ee.download = `${N.name.replace(/\.pdf$/i, "")}_t${$.tableIndex}_p${$.page}.csv`),
              document.body.appendChild(ee),
              ee.click(),
              document.body.removeChild(ee),
              setTimeout(() => URL.revokeObjectURL(fe), 1e3));
          }
          (i(P.DONE), t?.(`${l.length} CSV file(s) exported`, "success"));
          return;
        }
        const R = x.utils.book_new(),
          V = { inclHeaders: h, freeze: F, autoFilter: _, styles: J };
        if (c === "per-table")
          l.forEach((D, $) => {
            (m((($ + 1) / l.length) * 80),
              d(`Building sheet ${$ + 1} of ${l.length}…`));
            const Y = Je(x, D, V);
            x.utils.book_append_sheet(
              R,
              Y,
              `T${D.tableIndex}_P${D.page}`.slice(0, 31),
            );
          });
        else {
          const D = [];
          (l.forEach(($) => {
            (D.push([
              `▸ Table ${$.tableIndex} — Page ${$.page} (${$.numRows}r × ${$.numCols}c)`,
            ]),
              $.rows.forEach((Y) => D.push(Y.map((xe) => xe.text || ""))),
              D.push([], []));
          }),
            x.utils.book_append_sheet(
              R,
              x.utils.aoa_to_sheet(D),
              "All Tables",
            ));
        }
        if (te && E.length) {
          d("Writing form fields sheet…");
          const D = [
              ["Page", "Field Name", "Type", "Value", "Label"],
              ...E.map((Y) => [Y.page, Y.name, Y.type, Y.value, Y.label]),
            ],
            $ = x.utils.aoa_to_sheet(D);
          (($["!cols"] = [
            { wch: 6 },
            { wch: 24 },
            { wch: 8 },
            { wch: 30 },
            { wch: 30 },
          ]),
            x.utils.book_append_sheet(R, $, "Form Fields"));
        }
        (m(95), d("Serialising workbook…"));
        const H = x.write(R, {
            bookType: "xlsx",
            type: "array",
            cellStyles: J,
          }),
          I = new Blob([H], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          }),
          A = N.name.replace(/\.pdf$/i, "") + "_extracted.xlsx",
          W = URL.createObjectURL(I),
          B = document.createElement("a");
        ((B.href = W),
          (B.download = A),
          document.body.appendChild(B),
          B.click(),
          document.body.removeChild(B),
          setTimeout(() => URL.revokeObjectURL(W), 2e3),
          m(100),
          i(P.DONE),
          t?.("Excel exported successfully", "success"),
          n?.(A, I.size, H));
      } catch (x) {
        (console.error(x),
          w("Export failed: " + (x.message || String(x))),
          i(P.READY));
      }
    },
    ve = S.useCallback(
      (l) => {
        (l.preventDefault(), s(!1));
        const x = l.dataTransfer.files?.[0];
        x && se(x);
      },
      [se],
    ),
    q = g.filter((l) => l.selected).length,
    Ce = g.filter((l) => l.selected).reduce((l, x) => l + x.numRows, 0),
    Se = g
      .filter((l) => l.selected)
      .reduce((l, x) => l + (x.merges?.length || 0), 0),
    de = a === P.LOAD || a === P.EXPORT;
  return e.jsxs("div", {
    className: "min-h-full w-full text-white",
    children: [
      e.jsxs("div", {
        className: "mb-8",
        children: [
          e.jsxs("div", {
            className: "flex items-start gap-4",
            children: [
              e.jsx("div", {
                className:
                  "w-11 h-11 rounded-xl bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center flex-shrink-0",
                children: e.jsx(O.Excel, { className: "w-5 h-5 text-white" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-2xl font-black text-white tracking-tight",
                    children: "PDF to Excel",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-zinc-400 mt-1 leading-relaxed",
                    children:
                      "Operator-list parsing · Border detection · Merged cells · Font styles · Form fields",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex flex-wrap gap-2 mt-4 ml-15",
            children: [
              "No rasterization",
              "Border-first",
              "Merged cells",
              "Cell colours",
              "CMYK/RGB",
              "Bold & italic",
              "Form fields",
              "Auto types",
              "Freeze + filter",
            ].map((l) =>
              e.jsx(
                "span",
                {
                  className:
                    "text-xs text-zinc-400 border border-zinc-600 rounded-full px-2.5 py-0.5 font-medium",
                  children: l,
                },
                l,
              ),
            ),
          }),
        ],
      }),
      (a === P.IDLE || a === P.DONE) &&
        e.jsxs("div", {
          onDragOver: (l) => {
            (l.preventDefault(), s(!0));
          },
          onDragLeave: () => s(!1),
          onDrop: ve,
          onClick: () => me.current?.click(),
          className: `relative border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[240px] sm:min-h-[280px] px-6 py-12 mb-6 text-center
            ${v ? "border-zinc-300 bg-zinc-700/50" : "border-zinc-600 bg-zinc-900 hover:border-zinc-400 hover:bg-zinc-800/60"}`,
          children: [
            e.jsx("input", {
              ref: me,
              type: "file",
              accept: "application/pdf",
              className: "hidden",
              onChange: (l) => l.target.files?.[0] && se(l.target.files[0]),
            }),
            e.jsx("div", {
              className: `w-14 h-14 rounded-2xl border-2 flex items-center justify-center mb-5 transition-all ${v ? "border-zinc-200 bg-zinc-600" : "border-zinc-500 bg-zinc-800"}`,
              children: e.jsx(O.Upload, { className: "w-6 h-6 text-zinc-200" }),
            }),
            e.jsx("p", {
              className: "text-lg font-bold text-white mb-1.5",
              children: v ? "Release to extract tables" : "Drop your PDF here",
            }),
            e.jsxs("p", {
              className: "text-sm text-zinc-400",
              children: [
                "or",
                " ",
                e.jsx("span", {
                  className:
                    "text-zinc-200 underline underline-offset-2 font-medium",
                  children: "browse file",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-8 mt-9 opacity-70",
              children: [
                { Ic: O.Table, t: "Tables" },
                { Ic: O.Merge, t: "Merged cells" },
                { Ic: O.Form, t: "Form fields" },
              ].map(({ Ic: l, t: x }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center gap-2",
                    children: [
                      e.jsx(l, { className: "w-5 h-5 text-zinc-400" }),
                      e.jsx("span", {
                        className: "text-xs text-zinc-400 font-medium",
                        children: x,
                      }),
                    ],
                  },
                  x,
                ),
              ),
            }),
          ],
        }),
      de &&
        e.jsxs("div", {
          className:
            "border-2 border-zinc-700 rounded-xl bg-zinc-800 p-7 mb-6 space-y-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx("div", {
                  className:
                    "w-8 h-8 border-2 border-zinc-500 border-t-white rounded-full animate-spin flex-shrink-0",
                }),
                e.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-base font-bold text-white",
                      children: o,
                    }),
                    N &&
                      e.jsx("p", {
                        className: "text-sm text-zinc-400 truncate mt-0.5",
                        children: N.name,
                      }),
                  ],
                }),
              ],
            }),
            e.jsx(Ke, { value: p, label: "", sub: z }),
            a === P.LOAD &&
              e.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-zinc-700",
                children: [
                  {
                    Ic: O.Chip,
                    t: "Operator list",
                    d: "Path ops, colours, CTM transforms",
                  },
                  {
                    Ic: O.Table,
                    t: "Border detection",
                    d: "H/V line clustering → grid cells",
                  },
                  {
                    Ic: O.Form,
                    t: "Annotations",
                    d: "Form widgets, values, labels",
                  },
                ].map(({ Ic: l, t: x, d: R }) =>
                  e.jsxs(
                    "div",
                    {
                      className: "flex gap-3 p-3 rounded-lg bg-zinc-700/50",
                      children: [
                        e.jsx(l, {
                          className:
                            "w-4 h-4 text-zinc-300 flex-shrink-0 mt-0.5",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-semibold text-zinc-200",
                              children: x,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-zinc-400 mt-0.5",
                              children: R,
                            }),
                          ],
                        }),
                      ],
                    },
                    x,
                  ),
                ),
              }),
          ],
        }),
      r &&
        e.jsxs("div", {
          className:
            "flex items-start gap-3 border-2 border-zinc-600 bg-zinc-800 rounded-xl px-4 py-4 mb-6",
          children: [
            e.jsx(O.Warn, {
              className: "w-5 h-5 text-zinc-300 flex-shrink-0 mt-0.5",
            }),
            e.jsx("p", {
              className: "text-sm text-zinc-200 leading-relaxed",
              children: r,
            }),
          ],
        }),
      (a === P.READY || a === P.DONE) &&
        g.length > 0 &&
        e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
              children: [
                e.jsx(ae, { label: "Tables", value: g.length, icon: O.Table }),
                e.jsx(ae, { label: "Selected", value: q, icon: O.Check }),
                e.jsx(ae, { label: "Total rows", value: Ce, icon: O.Rows }),
                e.jsx(ae, { label: "Merged cells", value: Se, icon: O.Merge }),
              ],
            }),
            E.length > 0 &&
              e.jsxs("div", {
                className:
                  "flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-zinc-600 bg-zinc-800",
                children: [
                  e.jsx(O.Form, {
                    className: "w-5 h-5 text-zinc-300 flex-shrink-0",
                  }),
                  e.jsxs("p", {
                    className: "text-sm text-zinc-200",
                    children: [
                      e.jsxs("strong", {
                        className: "text-white font-bold",
                        children: [
                          E.length,
                          " form field",
                          E.length !== 1 ? "s" : "",
                        ],
                      }),
                      " ",
                      "detected — exported to a dedicated sheet",
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className:
                "border-2 border-zinc-700 rounded-xl bg-zinc-800 p-5 space-y-5",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs font-black uppercase tracking-widest text-zinc-300 flex items-center gap-2",
                  children: [
                    e.jsx(O.Chip, { className: "w-3.5 h-3.5" }),
                    "Export Options",
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-xs uppercase tracking-widest text-zinc-400 font-bold",
                          children: "Format",
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx(U, {
                              label: "XLSX",
                              on: K === "xlsx",
                              onClick: () => pe("xlsx"),
                            }),
                            e.jsx(U, {
                              label: "CSV",
                              on: K === "csv",
                              onClick: () => pe("csv"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    K === "xlsx" &&
                      e.jsxs("div", {
                        className: "space-y-2.5",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-widest text-zinc-400 font-bold",
                            children: "Sheets",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(U, {
                                label: "Per table",
                                on: c === "per-table",
                                onClick: () => u("per-table"),
                              }),
                              e.jsx(U, {
                                label: "Combined",
                                on: c === "single",
                                onClick: () => u("single"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    K === "xlsx" &&
                      e.jsxs("div", {
                        className: "space-y-2.5 col-span-1 sm:col-span-2",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs uppercase tracking-widest text-zinc-400 font-bold",
                            children: "Features",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              e.jsx(U, {
                                label: "Headers",
                                on: h,
                                onClick: () => j((l) => !l),
                              }),
                              e.jsx(U, {
                                label: "Freeze row",
                                on: F,
                                onClick: () => T((l) => !l),
                              }),
                              e.jsx(U, {
                                label: "Auto-filter",
                                on: _,
                                onClick: () => Z((l) => !l),
                              }),
                              e.jsx(U, {
                                label: "Cell styles",
                                on: J,
                                onClick: () => ie((l) => !l),
                              }),
                              E.length > 0 &&
                                e.jsx(U, {
                                  label: "Form fields",
                                  on: te,
                                  onClick: () => ye((l) => !l),
                                }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex flex-wrap gap-2 pt-3 border-t border-zinc-700",
                  children: [
                    e.jsx("button", {
                      onClick: () =>
                        L((l) => l.map((x) => ({ ...x, selected: !0 }))),
                      className:
                        "text-sm text-zinc-300 hover:text-white border border-zinc-600 hover:border-zinc-400 rounded-lg px-3.5 py-2 transition-all font-medium",
                      children: "Select all",
                    }),
                    e.jsx("button", {
                      onClick: () =>
                        L((l) => l.map((x) => ({ ...x, selected: !1 }))),
                      className:
                        "text-sm text-zinc-300 hover:text-white border border-zinc-600 hover:border-zinc-400 rounded-lg px-3.5 py-2 transition-all font-medium",
                      children: "Deselect all",
                    }),
                    e.jsxs("button", {
                      onClick: () => se(N),
                      className:
                        "text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded-lg px-3.5 py-2 transition-all flex items-center gap-2 ml-auto font-medium",
                      children: [
                        e.jsx(O.Reset, { className: "w-3.5 h-3.5" }),
                        "Re-extract",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("p", {
                  className:
                    "text-sm font-bold text-zinc-300 uppercase tracking-widest",
                  children: [
                    "Detected Tables",
                    " ",
                    e.jsx("span", {
                      className:
                        "text-zinc-500 normal-case font-normal tracking-normal",
                      children:
                        "— click any cell or header to edit before exporting",
                    }),
                  ],
                }),
                g.map((l) =>
                  e.jsx(
                    Qe,
                    { tbl: l, onToggle: Ne, onCell: we, onHeader: ke },
                    l.id,
                  ),
                ),
              ],
            }),
            e.jsx("div", {
              className:
                "sticky bottom-0 pb-4 pt-3 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent -mx-4 sm:-mx-8 px-4 sm:px-8 z-10",
              children: e.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [
                  e.jsxs("button", {
                    onClick: ze,
                    disabled: q === 0 || de,
                    className: `flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-200 ${q > 0 && !de ? "bg-white text-black hover:bg-zinc-100 shadow-xl shadow-white/10" : "bg-zinc-800 text-zinc-500 cursor-not-allowed border-2 border-zinc-700"}`,
                    children: [
                      e.jsx(O.Down, { className: "w-5 h-5" }),
                      "Export ",
                      q,
                      " table",
                      q !== 1 ? "s" : "",
                      te && E.length ? ` + ${E.length} fields` : "",
                      ` as ${K.toUpperCase()}`,
                    ],
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      (i(P.IDLE), C(null), L([]), b([]), w(""));
                    },
                    className:
                      "sm:w-auto px-6 py-4 border-2 border-zinc-600 hover:border-zinc-400 rounded-xl text-sm font-bold text-zinc-300 hover:text-white transition-all",
                    children: "New file",
                  }),
                ],
              }),
            }),
          ],
        }),
      a === P.IDLE &&
        e.jsxs("div", {
          className: "mt-4 border-2 border-zinc-700 rounded-xl p-6 bg-zinc-900",
          children: [
            e.jsx("p", {
              className:
                "text-sm font-black uppercase tracking-widest text-zinc-400 mb-5",
              children: "7-Stage Extraction Pipeline",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5",
              children: [
                {
                  n: "01",
                  t: "Operator List Parsing",
                  d: "Every path op, colour change (RGB/CMYK/gray) and CTM matrix transform is traced — no rasterization needed.",
                },
                {
                  n: "02",
                  t: "Border-first Detection",
                  d: "H and V line segments are extracted, tolerance-clustered into a grid, and intersected to find cell bounding boxes precisely.",
                },
                {
                  n: "03",
                  t: "Merged Cell Detection",
                  d: "Each expected interior border segment is checked for existence. Missing ones produce XLSX !merges entries automatically.",
                },
                {
                  n: "04",
                  t: "Cell Background Colours",
                  d: "Filled rectangles whose bounds match a cell are mapped to Excel cell fills, preserving colour coding from the original PDF.",
                },
                {
                  n: "05",
                  t: "Coordinate Fallback",
                  d: "For borderless tables, items are row-clustered by Y-tolerance then column-histogramed by X — robust to ragged alignments.",
                },
                {
                  n: "06",
                  t: "Data Type Inference",
                  d: "Every cell is tested for boolean, date (8 patterns), percentage, currency (₹$€£¥…), number with format, or plain string.",
                },
                {
                  n: "07",
                  t: "Form Field Extraction",
                  d: "AcroForm widgets (Tx, Btn, Ch) are read from page annotations and exported to a dedicated Form Fields sheet with labels.",
                },
              ].map(({ n: l, t: x, d: R }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex gap-4",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-sm font-mono font-bold text-zinc-500 w-6 flex-shrink-0 mt-0.5",
                        children: l,
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-bold text-zinc-200",
                            children: x,
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-500 mt-1 leading-relaxed",
                            children: R,
                          }),
                        ],
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
export { qe as default };
