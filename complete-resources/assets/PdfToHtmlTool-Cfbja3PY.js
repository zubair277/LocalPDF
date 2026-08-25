import { r as S, j as e } from "./react-vendor-Bc7KCos-.js";
const P = ({ children: t, className: n = "w-5 h-5" }) =>
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
  L = {
    Upload: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "17 8 12 3 7 8" }),
          e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
        ],
      }),
    Down: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "7 10 12 15 17 10" }),
          e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
        ],
      }),
    Check: (t) =>
      e.jsx(P, {
        ...t,
        children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
      }),
    Warn: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", {
            d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
          }),
          e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
          e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
        ],
      }),
    Chip: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("rect", { x: "9", y: "9", width: "6", height: "6" }),
          e.jsx("path", {
            d: "M15 9V5h-2M9 9V5h2M15 15v4h-2M9 15v4h2M5 9h4M5 15h4M19 9h-4M19 15h-4",
          }),
        ],
      }),
    Pages: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
          e.jsx("path", {
            d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
          }),
          e.jsx("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }),
        ],
      }),
    Link: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          }),
          e.jsx("path", {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          }),
        ],
      }),
    Image: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
          e.jsx("circle", { cx: "9", cy: "9", r: "2" }),
          e.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
        ],
      }),
    Table: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
          e.jsx("path", { d: "M3 9h18M3 15h18M9 3v18" }),
        ],
      }),
    Text: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
          e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
          e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
        ],
      }),
    Copy: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2" }),
          e.jsx("path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
          }),
        ],
      }),
    ChevL: (t) =>
      e.jsx(P, {
        ...t,
        children: e.jsx("polyline", { points: "15 18 9 12 15 6" }),
      }),
    ChevR: (t) =>
      e.jsx(P, {
        ...t,
        children: e.jsx("polyline", { points: "9 18 15 12 9 6" }),
      }),
    Settings: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
          e.jsx("path", {
            d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
          }),
        ],
      }),
    Layers: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
          e.jsx("polyline", { points: "2 17 12 22 22 17" }),
          e.jsx("polyline", { points: "2 12 12 17 22 12" }),
        ],
      }),
    List: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
          e.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
          e.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
          e.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
          e.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
          e.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" }),
        ],
      }),
    Columns: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "7", height: "18", rx: "1" }),
          e.jsx("rect", { x: "14", y: "3", width: "7", height: "18", rx: "1" }),
        ],
      }),
    Zap: (t) =>
      e.jsx(P, {
        ...t,
        children: e.jsx("polygon", {
          points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
        }),
      }),
    ZoomIn: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
          e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
          e.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
          e.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
        ],
      }),
    ZoomOut: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
          e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
          e.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" }),
        ],
      }),
    Scan: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
          e.jsx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
          e.jsx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
          e.jsx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
          e.jsx("line", { x1: "7", y1: "12", x2: "17", y2: "12" }),
        ],
      }),
    Type: (t) =>
      e.jsxs(P, {
        ...t,
        children: [
          e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
          e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
          e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
        ],
      }),
  },
  Ke = () =>
    new Promise((t, n) => {
      if (window.pdfjsLib) {
        t(window.pdfjsLib);
        return;
      }
      const l = document.createElement("script");
      ((l.src = "https:"),
        (l.onload = () => {
          ((window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https:"),
            t(window.pdfjsLib));
        }),
        (l.onerror = n),
        document.head.appendChild(l));
    }),
  F = {
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
  ie = { MOVETO: 0, LINETO: 1, CLOSEPATH: 5, RECT: 6 },
  We = { 0: 2, 1: 2, 2: 6, 3: 4, 4: 4, 5: 0, 6: 4 },
  Xe = new Set([57, 58, 59, 60]),
  qe = new Set([82, 85, 86]),
  Je = () => [1, 0, 0, 1, 0, 0],
  oe = ([t, n, l, c, a, r], i, u) => [t * i + l * u + a, n * i + c * u + r],
  Qe = (t, n) => [
    t[0] * n[0] + t[2] * n[1],
    t[1] * n[0] + t[3] * n[1],
    t[0] * n[2] + t[2] * n[3],
    t[1] * n[2] + t[3] * n[3],
    t[0] * n[4] + t[2] * n[5] + t[4],
    t[1] * n[4] + t[3] * n[5] + t[5],
  ],
  et = (t) => Math.max(0, Math.min(1, t)),
  ke = (t) =>
    Math.round(et(t) * 255)
      .toString(16)
      .padStart(2, "0"),
  te = (t, n, l) => (ke(t) + ke(n) + ke(l)).toUpperCase(),
  le = (t) => te(t, t, t),
  Me = (t, n, l, c) =>
    te((1 - t) * (1 - c), (1 - n) * (1 - c), (1 - l) * (1 - c)),
  Q = (t) => {
    const n = parseInt(t.slice(0, 2), 16),
      l = parseInt(t.slice(2, 4), 16),
      c = parseInt(t.slice(4, 6), 16);
    return n > 230 && l > 230 && c > 230;
  },
  pe = (t) => {
    const n = parseInt(t.slice(0, 2), 16),
      l = parseInt(t.slice(2, 4), 16),
      c = parseInt(t.slice(4, 6), 16);
    return n < 40 && l < 40 && c < 40;
  },
  tt = (t) => {
    const n = (t || "").toUpperCase();
    return {
      bold: /BOLD|BLACK|HEAVY|DEMI|SEMIBOLD|EXTRABOLD|ULTRABOLD|MEDIUM/.test(n),
      italic: /ITALIC|OBLIQUE|SLANT/.test(n),
    };
  },
  Te = (t) => {
    const n = (t || "").toUpperCase();
    return /TIMES|MINION|PALATINO|GEORGIA|GARAMOND|CASLON|BOOKMAN|CENTURY|SCHOOLBOOK|BODONI|CHARTER|BASKERVILLE/.test(
      n,
    )
      ? "Georgia,'Times New Roman',serif"
      : /COURIER|MONO|CONSOL|TYPEWRITER|LUCIDA CONSOLE|INCONSOLATA|FIRACODE|SOURCECODEMONO/.test(
            n,
          )
        ? "'Courier New',Courier,monospace"
        : /TREBUCHET|CALIBRI|OPTIMA|CANDARA/.test(n)
          ? "'Trebuchet MS',sans-serif"
          : /IMPACT|FRANKLIN|COMPRES/.test(n)
            ? "Impact,sans-serif"
            : /VERDANA/.test(n)
              ? "Verdana,sans-serif"
              : /TAHOMA/.test(n)
                ? "Tahoma,sans-serif"
                : "Arial,Helvetica,sans-serif";
  },
  W = (t) =>
    String(t)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;"),
  X = (t) => String(t).replace(/"/g, "&quot;").replace(/'/g, "&#39;");
function st(t, n) {
  const { fnArray: l, argsArray: c } = t,
    r = [
      {
        fill: "000000",
        stroke: "000000",
        lw: 1,
        ctm: Je(),
        opacity: 1,
        strokeOpacity: 1,
      },
    ],
    i = () => r[r.length - 1],
    u = () => ({ ...i(), ctm: [...i().ctm] });
  let b = [],
    N = [];
  const O = [],
    k = [],
    g = [],
    M = [],
    T = [],
    I = 2,
    R = 2,
    m = (p, s) => {
      const o = i();
      if (s)
        for (const h of b) {
          const [d, y] = oe(o.ctm, h.x1, h.y1),
            [f, j] = oe(o.ctm, h.x2, h.y2),
            w = d,
            $ = n - y,
            v = f,
            E = n - j;
          Math.abs($ - E) <= I
            ? O.push({
                y: ($ + E) / 2,
                x1: Math.min(w, v),
                x2: Math.max(w, v),
                color: o.stroke,
                lw: o.lw,
              })
            : Math.abs(w - v) <= R &&
              k.push({
                x: (w + v) / 2,
                y1: Math.min($, E),
                y2: Math.max($, E),
                color: o.stroke,
                lw: o.lw,
              });
        }
      for (const h of N) {
        const [d, y] = oe(o.ctm, h.x, h.y),
          [f, j] = oe(o.ctm, h.x + h.w, h.y + h.h),
          w = Math.min(d, f),
          $ = Math.min(n - y, n - j),
          v = Math.abs(f - d),
          E = Math.abs(j - y);
        if (
          !(v < 1 || E < 1) &&
          (s &&
            (O.push({ y: $, x1: w, x2: w + v, color: o.stroke, lw: o.lw }),
            O.push({ y: $ + E, x1: w, x2: w + v, color: o.stroke, lw: o.lw }),
            k.push({ x: w, y1: $, y2: $ + E, color: o.stroke, lw: o.lw }),
            k.push({ x: w + v, y1: $, y2: $ + E, color: o.stroke, lw: o.lw })),
          p && !Q(o.fill))
        ) {
          const H = o.opacity || 1;
          g.push({ x: w, y: $, w: v, h: E, color: o.fill, alpha: H });
        }
      }
      ((b = []), (N = []));
    };
  for (let p = 0; p < l.length; p++) {
    const s = l[p],
      o = c[p];
    if (Xe.has(s)) {
      M.push(i().fill);
      continue;
    }
    if (qe.has(s)) {
      const h = i().ctm,
        d = [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 1],
        ].map(([j, w]) => oe(h, j, w)),
        y = d.map((j) => j[0]),
        f = d.map((j) => n - j[1]);
      T.push({
        x: Math.min(...y),
        y: Math.min(...f),
        w: Math.max(...y) - Math.min(...y),
        h: Math.max(...f) - Math.min(...f),
      });
      continue;
    }
    switch (s) {
      case F.save:
        r.push(u());
        break;
      case F.restore:
        r.length > 1 && r.pop();
        break;
      case F.transform:
        i().ctm = Qe(i().ctm, o);
        break;
      case F.setLineWidth:
        i().lw = o[0];
        break;
      case F.setFillRGBColor:
        i().fill = te(o[0], o[1], o[2]);
        break;
      case F.setStrokeRGBColor:
        i().stroke = te(o[0], o[1], o[2]);
        break;
      case F.setFillGray:
        i().fill = le(o[0]);
        break;
      case F.setStrokeGray:
        i().stroke = le(o[0]);
        break;
      case F.setFillCMYKColor:
        i().fill = Me(o[0], o[1], o[2], o[3]);
        break;
      case F.setStrokeCMYKColor:
        i().stroke = Me(o[0], o[1], o[2], o[3]);
        break;
      case F.setFillColor:
      case F.setFillColorN:
        o.length >= 3
          ? (i().fill = te(o[0], o[1], o[2]))
          : o.length === 1 && (i().fill = le(o[0]));
        break;
      case F.setStrokeColor:
      case F.setStrokeColorN:
        o.length >= 3
          ? (i().stroke = te(o[0], o[1], o[2]))
          : o.length === 1 && (i().stroke = le(o[0]));
        break;
      case F.setFillTransparent:
        i().fill = "FFFFFF";
        break;
      case F.setStrokeTransparent:
        i().stroke = "FFFFFF";
        break;
      case F.constructPath: {
        const h = o[0],
          d = o[1];
        let y = 0,
          f = 0,
          j = 0,
          w = 0,
          $ = 0;
        for (const v of h)
          switch (v) {
            case ie.MOVETO:
              ((f = d[y++]), (j = d[y++]), (w = f), ($ = j));
              break;
            case ie.LINETO: {
              const E = d[y++],
                H = d[y++];
              (b.push({ x1: f, y1: j, x2: E, y2: H }), (f = E), (j = H));
              break;
            }
            case ie.CLOSEPATH:
              (b.push({ x1: f, y1: j, x2: w, y2: $ }), (f = w), (j = $));
              break;
            case ie.RECT: {
              const E = d[y++],
                H = d[y++],
                A = d[y++],
                Y = d[y++];
              N.push({ x: E, y: H, w: A, h: Y });
              break;
            }
            default:
              y += We[v] ?? 0;
              break;
          }
        break;
      }
      case F.stroke:
        m(!1, !0);
        break;
      case F.closeStroke:
        m(!1, !0);
        break;
      case F.fill:
      case F.eoFill:
        m(!0, !1);
        break;
      case F.fillStroke:
      case F.eoFillStroke:
        m(!0, !0);
        break;
      case F.closeFillStroke:
      case F.closeEOFillStroke:
        m(!0, !0);
        break;
      case F.endPath:
        ((b = []), (N = []));
        break;
    }
  }
  return {
    hLines: O,
    vLines: k,
    filledRects: g,
    textColors: M,
    imagePlaceholders: T,
  };
}
const J = 3.5,
  Se = 10,
  ce = 4;
function ot(t, n, l) {
  const c = t.filter((m) => m.x2 - m.x1 >= Se),
    a = n.filter((m) => m.y2 - m.y1 >= Se);
  if (c.length < 2 || a.length < 2) return [];
  const r = (m, p) => {
      if (!m.length) return [];
      const s = [...m].sort((h, d) => h - d),
        o = [[s[0]]];
      for (let h = 1; h < s.length; h++)
        s[h] - o[o.length - 1][0] <= p
          ? o[o.length - 1].push(s[h])
          : o.push([s[h]]);
      return o.map((h) => h.reduce((d, y) => d + y, 0) / h.length);
    },
    i = r(
      c.map((m) => m.y),
      J,
    ),
    u = r(
      a.map((m) => m.x),
      J,
    );
  if (i.length < 2 || u.length < 2) return [];
  const b = i.length - 1,
    N = u.length - 1;
  if (b < 1 || N < 1) return [];
  const O = (m, p, s) =>
      c.some((o) => Math.abs(o.y - m) <= J && o.x1 <= p + J && o.x2 >= s - J),
    k = (m, p, s) =>
      a.some((o) => Math.abs(o.x - m) <= J && o.y1 <= p + J && o.y2 >= s - J),
    g = Array.from({ length: b }, () =>
      Array.from({ length: N }, () => ({ rs: 1, cs: 1, skip: !1 })),
    );
  for (let m = 0; m < b; m++)
    for (let p = 0; p < N - 1; p++) {
      if (g[m][p].skip) continue;
      let s = 1;
      for (; p + s < N && !k(u[p + s], i[m], i[m + 1]);)
        ((g[m][p + s].skip = !0), s++);
      g[m][p].cs = s;
    }
  for (let m = 0; m < N; m++)
    for (let p = 0; p < b - 1; p++) {
      if (g[p][m].skip) continue;
      let s = g[p][m].rs;
      for (; p + s < b && !O(i[p + s], u[m], u[m + 1]);)
        ((g[p + s][m].skip = !0), s++);
      g[p][m].rs = s;
    }
  const M = (m, p, s, o) =>
      l
        .filter((h) => h.x >= m && h.x <= s && h.y >= p && h.y <= o)
        .sort((h, d) => h.y - d.y || h.x - d.x)
        .map((h) => h.str)
        .join(" ")
        .trim(),
    T = Array.from({ length: b }, (m, p) =>
      Array.from({ length: N }, (s, o) => {
        const { rs: h, cs: d, skip: y } = g[p][o];
        return y
          ? { text: null, skip: !0, rs: 1, cs: 1 }
          : {
              text: M(u[o] + ce, i[p] + ce, u[o + d] - ce, i[p + h] - ce),
              skip: !1,
              rs: h,
              cs: d,
            };
      }),
    ),
    I = T[0]?.filter((m) => !m.skip).map((m) => m.text || "") || [],
    R = I.filter((m) => /^-?[\d,]+(\.\d+)?%?$/.test(m.trim())).length;
  return [
    {
      x: u[0],
      y: i[0],
      w: u[N] - u[0],
      h: i[b] - i[0],
      rows: T,
      numRows: b,
      numCols: N,
      hasHeader: I.some((m) => m.trim()) && R < I.length * 0.5,
      colWidths: u.slice(0, -1).map((m, p) => u[p + 1] - u[p]),
      rowHeights: i.slice(0, -1).map((m, p) => i[p + 1] - i[p]),
      type: "border",
    },
  ];
}
function nt(t, n) {
  if (t.length < 10) return [{ x: 0, w: n }];
  const l = 40,
    c = n / l,
    a = new Array(l).fill(0);
  for (const M of t) {
    const T = Math.min(l - 1, Math.floor(M.x / c));
    a[T]++;
  }
  const i = Math.max(...a) * 0.08,
    u = a.map((M, T) => {
      const I = [a[T - 1] || 0, M, a[T + 1] || 0];
      return I.reduce((R, m) => R + m, 0) / I.length;
    }),
    b = [];
  let N = !1,
    O = 0;
  for (let M = 0; M < l; M++)
    u[M] <= i && M > 2 && M < l - 2
      ? N || ((N = !0), (O = M))
      : N && (b.push({ start: O * c, end: M * c }), (N = !1));
  if (b.length === 0) return [{ x: 0, w: n }];
  const k = [];
  let g = 0;
  for (const M of b) {
    const T = (M.start + M.end) / 2;
    T - g > n * 0.15 && (k.push({ x: g, w: T - g }), (g = T));
  }
  return (k.push({ x: g, w: n - g }), k.length >= 2 ? k : [{ x: 0, w: n }]);
}
function at(t) {
  if (t.length < 3) return { headerMaxY: 0, footerMinY: 1 / 0 };
  const n = t[0]?.height || 842,
    l = n * 0.08,
    c = n * 0.92,
    a = t.map((u) =>
      u.textItems
        .filter((b) => b.y < l)
        .map((b) => b.str)
        .join("|"),
    ),
    r = t.map((u) =>
      u.textItems
        .filter((b) => b.y > c)
        .map((b) => b.str)
        .join("|"),
    ),
    i = (u) =>
      [...new Set(u.filter(Boolean))].length <= 2 &&
      u.filter(Boolean).length > t.length * 0.6;
  return { headerMaxY: i(a) ? l : 0, footerMinY: i(r) ? c : 1 / 0 };
}
const Fe = /^([•·▸▪▶◆◇○●►▻‣⁃–\-\*]|\d+[.)]\s|\(?[a-zA-Z][.)]\s)/;
function de(t) {
  return Fe.test(t.trimStart());
}
function rt(t) {
  return t.trimStart().replace(Fe, "").trim();
}
function it(t, n = 3) {
  const l = [...t].sort((a, r) => a.y - r.y || a.x - r.x),
    c = [];
  for (const a of l) {
    const r = c[c.length - 1];
    r && Math.abs(a.y - r.baseY) <= n
      ? r.items.push(a)
      : c.push({ baseY: a.y, items: [a] });
  }
  return c.map((a) => ({
    y: a.baseY,
    x: Math.min(...a.items.map((r) => r.x)),
    items: a.items.sort((r, i) => r.x - i.x),
    text: a.items
      .map((r) => r.str)
      .join(" ")
      .trim(),
    maxSize: Math.max(...a.items.map((r) => r.fontSize), 0),
    bold: a.items.some((r) => r.bold),
    italic: a.items.every((r) => r.italic),
    color: a.items[0]?.color || "000000",
    fontFamily: Te(a.items[0]?.fontName || ""),
    superscript: a.items.some((r) => r.superscript),
    subscript: a.items.some((r) => r.subscript),
    width:
      Math.max(...a.items.map((r) => r.x + (r.width || 0))) -
      Math.min(...a.items.map((r) => r.x)),
  }));
}
function lt(t) {
  if (!t.length) return [];
  const n = [];
  for (let i = 1; i < t.length; i++) n.push(t[i].y - t[i - 1].y);
  n.sort((i, u) => i - u);
  const c = (n[Math.floor(n.length / 2)] || 14) * 1.6,
    a = [];
  let r = [t[0]];
  for (let i = 1; i < t.length; i++) {
    const u = t[i].y - t[i - 1].y,
      b = t[i].x > t[i - 1].x + 5;
    u > c || b ? (a.push(r), (r = [t[i]])) : r.push(t[i]);
  }
  return (a.push(r), a);
}
function ct(t) {
  const n = t
    .map((a) => a.maxSize)
    .filter((a) => a > 0)
    .sort((a, r) => a - r);
  if (!n.length) return () => null;
  const l = n[Math.floor(n.length / 2)],
    c = [...new Set(n)].sort((a, r) => r - a);
  return (a) => {
    const r = a.maxSize;
    if ((r <= l * 1.12 && !a.bold) || r <= l * 1.05) return null;
    const i = c.indexOf(r);
    return r > l * 2.2 || i === 0
      ? "h1"
      : i === 1 || r > l * 1.6
        ? "h2"
        : i === 2 || r > l * 1.35
          ? "h3"
          : a.bold && r > l * 1.1
            ? "h4"
            : null;
  };
}
function ve(t, n) {
  return n.some((l) => t >= l.y - 2 && t <= l.y + l.h + 2);
}
function dt(t, n) {
  const l = t
      .map((a) => Math.abs(a.transform[3]))
      .filter((a) => a > 0)
      .sort((a, r) => a - r),
    c = l[Math.floor(l.length / 2)] || 12;
  return t.map((a) => {
    const { bold: r, italic: i } = tt(a.fontName || ""),
      u = Math.abs(a.transform[3]),
      b = n - a.transform[5],
      N = u < c * 0.72 && a.transform[5] > 0,
      O = u < c * 0.72 && !N;
    return {
      str: a.str,
      x: a.transform[4],
      y: b,
      fontSize: u,
      fontName: a.fontName || "",
      fontFamily: Te(a.fontName || ""),
      width: a.width || 0,
      bold: r,
      italic: i,
      superscript: N,
      subscript: O,
      color: "000000",
    };
  });
}
async function xt(t, n) {
  const l = t.getViewport({ scale: 1 }),
    c = l.width,
    a = l.height,
    [r, i, u] = await Promise.all([
      t.getOperatorList(),
      t.getTextContent({ includeMarkedContent: !1 }),
      t.getAnnotations(),
    ]),
    {
      hLines: b,
      vLines: N,
      filledRects: O,
      textColors: k,
      imagePlaceholders: g,
    } = st(r, a),
    M = i.items.filter((f) => f.str && f.str.trim()),
    T = dt(M, a).map((f, j) => ({ ...f, color: k[j] || "000000" })),
    I = ot(b, N, T),
    R = nt(
      T.filter((f) => !ve(f.y, I)),
      c,
    ),
    m = u
      .filter((f) => f.subtype === "Link" && f.url)
      .map((f) => ({
        url: f.url,
        x1: f.rect[0],
        y1: a - f.rect[3],
        x2: f.rect[2],
        y2: a - f.rect[1],
      })),
    p = u
      .filter((f) => f.subtype === "Widget")
      .map((f) => {
        let j = "",
          w = f.fieldType || "Tx";
        return (
          w === "Tx"
            ? (j = String(f.fieldValue || ""))
            : w === "Btn"
              ? (j = f.fieldValue === "Yes" ? "on" : "off")
              : w === "Ch" &&
                (j = Array.isArray(f.fieldValue)
                  ? f.fieldValue.join(", ")
                  : f.fieldValue || ""),
          {
            name: f.fieldName || "",
            type: w,
            value: j,
            x: f.rect[0],
            y: a - f.rect[3],
            w: f.rect[2] - f.rect[0],
            h: f.rect[3] - f.rect[1],
            options: f.options || [],
          }
        );
      }),
    s = M.length,
    o = I.length,
    h = m.length,
    d = g.length,
    y = R.length;
  return {
    pageNum: n,
    width: Math.round(c),
    height: Math.round(a),
    textItems: T,
    filledRects: O,
    hLines: b,
    vLines: N,
    tables: I,
    links: m,
    formFields: p,
    imagePlaceholders: g,
    columns: R,
    lineCount: s,
    tableCount: o,
    linkCount: h,
    imgCount: d,
    columnCount: y,
  };
}
function Ie(t, n) {
  const {
      textItems: l,
      filledRects: c,
      hLines: a,
      tables: r,
      links: i,
      formFields: u,
      imagePlaceholders: b,
      width: N,
      height: O,
    } = t,
    {
      theme: k,
      inclLinks: g,
      inclTables: M,
      inclImages: T,
      inclForms: I,
      inclBackground: R,
    } = n;
  let p = `<div class="page" style="position:relative;width:${N}px;height:${O}px;background:${k === "dark" ? "#111111" : k === "sepia" ? "#fdf6e3" : "#ffffff"};overflow:hidden;">`;
  if (R) {
    for (const s of c) {
      if (Q(s.color) && k !== "dark") continue;
      const o = k === "dark" && Q(s.color) ? "#1e1e1e" : `#${s.color}`,
        h = s.alpha !== void 0 ? s.alpha : 1;
      p += `<div style="position:absolute;left:${s.x.toFixed(1)}px;top:${s.y.toFixed(1)}px;width:${s.w.toFixed(1)}px;height:${s.h.toFixed(1)}px;background:${o};opacity:${h};pointer-events:none;"></div>`;
    }
    for (const s of a) {
      if (
        M &&
        r.some(
          (d) => Math.abs(s.y - d.y) < 2 || Math.abs(s.y - (d.y + d.h)) < 2,
        )
      )
        continue;
      const o = Math.max(0.5, s.lw).toFixed(1),
        h = k === "dark" && pe(s.color) ? "#555555" : `#${s.color}`;
      p += `<div style="position:absolute;left:${s.x1.toFixed(1)}px;top:${s.y.toFixed(1)}px;width:${(s.x2 - s.x1).toFixed(1)}px;height:${o}px;background:${h};pointer-events:none;"></div>`;
    }
  }
  if (T)
    for (const s of b)
      s.w < 4 ||
        s.h < 4 ||
        (p += `<div style="position:absolute;left:${s.x.toFixed(1)}px;top:${s.y.toFixed(1)}px;width:${s.w.toFixed(1)}px;height:${s.h.toFixed(1)}px;background:${k === "dark" ? "#1e2a2a" : "#f0f4f4"};border:1px dashed ${k === "dark" ? "#3a5a5a" : "#a0c0c0"};display:flex;align-items:center;justify-content:center;font-size:11px;color:${k === "dark" ? "#5a8a8a" : "#7aaa9a"};border-radius:2px;">📷</div>`);
  if (M)
    for (const s of r)
      ((p += `<table style="position:absolute;left:${s.x.toFixed(1)}px;top:${s.y.toFixed(1)}px;border-collapse:collapse;table-layout:fixed;font-size:11px;">`),
        s.rows.forEach((o, h) => {
          ((p += "<tr>"),
            o.forEach((d, y) => {
              if (d.skip) return;
              const f = s.hasHeader && h === 0 ? "th" : "td",
                j = d.rs > 1 ? ` rowspan="${d.rs}"` : "",
                w = d.cs > 1 ? ` colspan="${d.cs}"` : "",
                $ = s.colWidths?.[y] || 80,
                v = s.rowHeights?.[h] || 20,
                E =
                  s.hasHeader && h === 0
                    ? k === "dark"
                      ? "background:#222;"
                      : "background:#f8f8f8;"
                    : h % 2 === 0
                      ? ""
                      : k === "dark"
                        ? "background:#161616;"
                        : "background:#fafafa;",
                H = s.hasHeader && h === 0 ? "font-weight:600;" : "",
                A = k === "dark" ? "color:#e0e0e0;" : "color:#111;";
              p += `<${f}${j}${w} style="border:1px solid ${k === "dark" ? "#333" : "#ddd"};padding:3px 6px;width:${$.toFixed(1)}px;height:${v.toFixed(1)}px;vertical-align:top;${E}${H}${A}">${W(d.text || "")}</${f}>`;
            }),
            (p += "</tr>"));
        }),
        (p += "</table>"));
  if (I)
    for (const s of u) {
      const o = `position:absolute;left:${s.x.toFixed(1)}px;top:${s.y.toFixed(1)}px;width:${s.w.toFixed(1)}px;height:${s.h.toFixed(1)}px;font-size:11px;box-sizing:border-box;border:1px solid ${k === "dark" ? "#444" : "#aaa"};background:${k === "dark" ? "#1a1a1a" : "#fff"};color:${k === "dark" ? "#e0e0e0" : "#000"};padding:2px 4px;border-radius:2px;`;
      s.type === "Tx"
        ? (p += `<input type="text" name="${X(s.name)}" value="${X(s.value)}" style="${o}">`)
        : s.type === "Btn"
          ? (p += `<input type="checkbox" name="${X(s.name)}" ${s.value === "on" ? "checked" : ""} style="position:absolute;left:${s.x.toFixed(1)}px;top:${s.y.toFixed(1)}px;">`)
          : s.type === "Ch" &&
            s.options?.length &&
            ((p += `<select name="${X(s.name)}" style="${o}">`),
            s.options.forEach((h) => {
              p += `<option ${s.value === h.exportValue ? "selected" : ""}>${W(h.displayValue || h.exportValue || "")}</option>`;
            }),
            (p += "</select>"));
    }
  for (const s of l) {
    if (!s.str.trim() || (M && ve(s.y, r))) continue;
    const o = (s.y - s.fontSize).toFixed(1),
      h = s.bold ? "bold" : "normal",
      d = s.italic ? "italic" : "normal";
    let y;
    k === "dark"
      ? (y = pe(s.color) ? "#e8e8e8" : Q(s.color) ? "#666666" : `#${s.color}`)
      : k === "sepia"
        ? (y = Q(s.color) ? "#5c4b3a" : `#${s.color}`)
        : (y = Q(s.color) ? "#111111" : `#${s.color}`);
    const f = s.superscript
        ? "vertical-align:super;font-size:smaller;"
        : s.subscript
          ? "vertical-align:sub;font-size:smaller;"
          : "",
      w = `<span style="${`position:absolute;left:${s.x.toFixed(1)}px;top:${o}px;font-size:${s.fontSize.toFixed(1)}px;font-family:${s.fontFamily};font-weight:${h};font-style:${d};color:${y};white-space:pre;line-height:1;${f}`}">${W(s.str)}</span>`;
    if (g) {
      const $ = i.find(
        (v) =>
          s.x >= v.x1 - 3 &&
          s.x <= v.x2 + 3 &&
          s.y >= v.y1 - 3 &&
          s.y <= v.y2 + 3,
      );
      p += $
        ? `<a href="${X($.url)}" target="_blank" rel="noopener" style="text-decoration:none;">${w}</a>`
        : w;
    } else p += w;
  }
  return ((p += "</div>"), p);
}
function pt(t, n, l, c) {
  const {
      textItems: a,
      tables: r,
      links: i,
      imagePlaceholders: u,
      formFields: b,
      columns: N,
      width: O,
    } = t,
    {
      theme: k,
      inclLinks: g,
      inclTables: M,
      inclImages: T,
      inclForms: I,
      removeHeaderFooter: R,
    } = n,
    m = k === "dark" ? "#e0e0e0" : k === "sepia" ? "#5c4b3a" : "#1a1a1a";
  let p = [...a];
  R && c && (p = p.filter((d) => d.y > c.headerMaxY && d.y < c.footerMinY));
  const s = p.filter((d) => !ve(d.y, r));
  let o = l ? "" : '<div class="pdf-page-break" aria-hidden="true"></div>';
  const h = (d) => {
    const y = it(d),
      f = ct(y);
    let j = "";
    const w = lt(y);
    for (const $ of w) {
      if (!$.length) continue;
      const v = $[0],
        E =
          f(v) ||
          ($.length === 1 && v.text.trim().length < 80 && v.bold ? "h4" : "p"),
        H = $.every(
          (A) =>
            de(A.text) || ($.indexOf(A) > 0 && !de(A.text) && A.x > $[0].x + 5),
        );
      if (E !== "p") {
        const A = v.bold ? "font-weight:bold;" : "",
          Y = Q(v.color) || (k === "dark" && pe(v.color)) ? m : `#${v.color}`,
          G = `font-family:${v.fontFamily};`,
          _ = $.map((U) => U.text).join(" ");
        j += `<${E} style="${A}color:${Y};${G}">${W(_)}</${E}>
`;
      } else if (H || $.some((A) => de(A.text))) {
        const Y = /^\d+[.)]\s/.test($[0]?.text?.trimStart() || "")
          ? "ol"
          : "ul";
        j += `<${Y}>
`;
        for (const G of $) {
          if (!G.text.trim()) continue;
          const _ = de(G.text) ? rt(G.text) : G.text;
          j += `<li>${W(_)}</li>
`;
        }
        j += `</${Y}>
`;
      } else {
        const A =
            Q(v.color) || (k === "dark" && pe(v.color)) ? m : `#${v.color}`,
          Y = `font-family:${v.fontFamily};`,
          G =
            v.maxSize > 0
              ? `font-size:${Math.min(v.maxSize, 18).toFixed(1)}px;`
              : "",
          _ = $.map((U) => {
            let B = W(U.text);
            return (
              U.bold && U.italic
                ? (B = `<strong><em>${B}</em></strong>`)
                : U.bold
                  ? (B = `<strong>${B}</strong>`)
                  : U.italic && (B = `<em>${B}</em>`),
              U.superscript && (B = `<sup>${B}</sup>`),
              U.subscript && (B = `<sub>${B}</sub>`),
              B
            );
          }).join(" ");
        j += `<p style="color:${A};${Y}${G}">${_}</p>
`;
      }
    }
    return j;
  };
  if (
    (N.length >= 2 && !n.ignoreColumns
      ? ((o += `<div class="pdf-columns" style="column-count:${N.length};column-gap:2em;">
`),
        (o += h(s)),
        (o += `</div>
`))
      : (o += h(s)),
    M)
  )
    for (const d of r)
      ((o += `<table>
`),
        d.rows.forEach((y, f) => {
          ((o += `<tr>
`),
            y.forEach((j) => {
              if (j.skip) return;
              const w = d.hasHeader && f === 0 ? "th" : "td",
                $ = j.rs > 1 ? ` rowspan="${j.rs}"` : "",
                v = j.cs > 1 ? ` colspan="${j.cs}"` : "";
              o += `<${w}${$}${v}>${W(j.text || "")}</${w}>
`;
            }),
            (o += `</tr>
`));
        }),
        (o += `</table>
`));
  if (T)
    for (const d of u)
      d.w < 10 ||
        d.h < 10 ||
        (o += `<figure class="pdf-img-placeholder" style="width:min(${Math.round(d.w)}px,100%);aspect-ratio:${(d.w / d.h).toFixed(3)};"><figcaption>📷 Image (${Math.round(d.w)}×${Math.round(d.h)}px)</figcaption></figure>
`);
  if (I)
    for (const d of b)
      ((o += `<div class="pdf-field"><label>${W(d.name)}: `),
        d.type === "Tx"
          ? (o += `<input type="text" name="${X(d.name)}" value="${X(d.value)}">`)
          : d.type === "Btn"
            ? (o += `<input type="checkbox" name="${X(d.name)}" ${d.value === "on" ? "checked" : ""}>`)
            : d.type === "Ch" &&
              d.options?.length &&
              ((o += `<select name="${X(d.name)}">`),
              d.options.forEach((y) => {
                o += `<option ${d.value === y.exportValue ? "selected" : ""}>${W(y.displayValue || y.exportValue || "")}</option>`;
              }),
              (o += "</select>")),
        (o += `</label></div>
`));
  return o;
}
function we(t, n) {
  const { layout: l, theme: c, responsive: a, minify: r } = n,
    i = c === "dark" ? "#0d0d0d" : c === "sepia" ? "#f0e8d0" : "#dde0e6",
    u = c === "dark" ? "#111111" : c === "sepia" ? "#fdf6e3" : "#ffffff",
    b = c === "dark" ? "#e0e0e0" : c === "sepia" ? "#4a3a2a" : "#1a1a1a",
    N = c === "dark" ? "#2e2e2e" : "#e0e0e0",
    O = c === "dark" ? "#1e1e1e" : "#f5f5f5",
    k = c === "dark" ? "#7eb3ff" : "#1155cc",
    g = a
      ? '<meta name="viewport" content="width=device-width,initial-scale=1">'
      : '<meta name="viewport" content="width=device-width,initial-scale=0.5">',
    M = `
    *{box-sizing:border-box;}
    html,body{margin:0;padding:0;background:${i};font-family:sans-serif;}
    body{padding:clamp(8px,3vw,24px);}
    .page{margin:0 auto clamp(16px,3vw,28px);box-shadow:0 4px 32px rgba(0,0,0,.28);border-radius:2px;overflow:hidden;}
    a{color:${k};}
    @media(max-width:600px){.page{transform-origin:top left;transform:scale(0.55);margin-bottom:calc((0.55 - 1) * var(--ph, 842px) + 8px);}}
  `,
    T = `
    *{box-sizing:border-box;}
    html{font-size:16px;}
    body{margin:0 auto;max-width:${a ? "100%" : "820px"};padding:clamp(16px,5vw,48px) clamp(12px,4vw,36px);background:${u};color:${b};font-family:Georgia,'Times New Roman',serif;line-height:1.75;-webkit-font-smoothing:antialiased;}
    h1{font-size:clamp(1.5em,4vw,2.2em);margin:1.2em 0 .6em;line-height:1.2;}
    h2{font-size:clamp(1.3em,3vw,1.7em);margin:1em 0 .5em;line-height:1.3;}
    h3{font-size:clamp(1.1em,2.5vw,1.4em);margin:.9em 0 .4em;}
    h4{font-size:1.1em;margin:.8em 0 .35em;}
    p{margin:.6em 0;orphans:3;widows:3;}
    ul,ol{margin:.6em 0 .6em 1.5em;padding:0;}
    li{margin:.25em 0;line-height:1.6;}
    table{border-collapse:collapse;width:100%;margin:1.5em 0;font-family:Arial,Helvetica,sans-serif;font-size:.88em;overflow-x:auto;display:block;}
    th,td{border:1px solid ${N};padding:8px 12px;text-align:left;vertical-align:top;}
    th{background:${O};font-weight:600;letter-spacing:.01em;}
    tr:nth-child(even) td{background:${c === "dark" ? "#141414" : c === "sepia" ? "#f8f0de" : "#f9f9f9"};}
    .pdf-columns{column-gap:2.5em;}
    @media(max-width:600px){.pdf-columns{column-count:1!important;}}
    .pdf-page-break{border-top:2px dashed ${c === "dark" ? "#222" : "#e0e0e0"};margin:3em 0;padding-top:2.5em;}
    figure.pdf-img-placeholder{background:${c === "dark" ? "#1a1a1a" : "#f4f4f4"};border:1.5px dashed ${c === "dark" ? "#333" : "#c8c8c8"};display:flex;align-items:center;justify-content:center;margin:1.5em 0;border-radius:4px;min-height:60px;max-width:100%;}
    figure.pdf-img-placeholder figcaption{font-size:.8em;color:${c === "dark" ? "#555" : "#aaa"};font-family:sans-serif;}
    .pdf-field{margin:.5em 0;font-family:sans-serif;font-size:.9em;}
    .pdf-field input,.pdf-field select{margin-left:.5em;padding:2px 6px;border:1px solid ${c === "dark" ? "#333" : "#ccc"};background:${c === "dark" ? "#1a1a1a" : "#fff"};color:${b};border-radius:3px;}
    a{color:${k};text-decoration:underline;text-underline-offset:2px;}
    sup,sub{font-size:.7em;}
    @media(max-width:500px){body{padding:12px 10px;}table{font-size:.8em;}th,td{padding:5px 7px;}}
    @media print{.pdf-page-break{page-break-before:always;border:none;margin:0;padding:0;}}
  `,
    I = at(t);
  let R = "";
  l === "positioned"
    ? t.forEach((s) => {
        R += Ie(s, n);
      })
    : t.forEach((s, o) => {
        R += pt(s, n, o === 0, I);
      });
  let p = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
${g}
<title>Converted PDF</title>
<style>${l === "positioned" ? M : T}</style>
</head>
<body>
${R}
</body>
</html>`;
  return (
    r &&
      (p = p
        .replace(/>\s+</g, "><")
        .replace(/\n\s*/g, " ")
        .replace(/\s{2,}/g, " ")),
    p
  );
}
const D = ({ label: t, on: n, onClick: l, disabled: c }) =>
    e.jsx("button", {
      onClick: l,
      disabled: c,
      className: `px-3 py-1.5 rounded text-xs font-semibold border transition-all duration-100 ${n ? "bg-white text-black border-white" : "bg-transparent text-[#666] border-[#333] hover:border-[#555] hover:text-[#bbb]"} disabled:opacity-25 disabled:cursor-not-allowed`,
      children: t,
    }),
  xe = ({ label: t, value: n, icon: l }) =>
    e.jsxs("div", {
      className:
        "flex flex-col gap-1.5 p-3 sm:p-4 rounded-xl border border-[#222] bg-[#111]",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-1.5 text-[#555]",
          children: [
            l && e.jsx(l, { className: "w-3 h-3" }),
            e.jsx("span", {
              className: "text-[10px] uppercase tracking-[0.1em] font-bold",
              children: t,
            }),
          ],
        }),
        e.jsx("span", {
          className:
            "text-2xl sm:text-3xl font-black tracking-tighter leading-none text-white",
          children: n,
        }),
      ],
    }),
  Le = ({ children: t }) =>
    e.jsxs("p", {
      className:
        "text-[10px] font-black uppercase tracking-[0.12em] text-[#444] flex items-center gap-2 mb-2.5",
      children: [
        e.jsx("span", { className: "flex-1 h-px bg-[#222]" }),
        t,
        e.jsx("span", { className: "flex-1 h-px bg-[#222]" }),
      ],
    }),
  mt = ({ value: t, size: n = 52 }) => {
    const l = (n - 6) / 2,
      c = 2 * Math.PI * l,
      a = (t / 100) * c;
    return e.jsxs("svg", {
      width: n,
      height: n,
      className: "flex-shrink-0",
      children: [
        e.jsx("circle", {
          cx: n / 2,
          cy: n / 2,
          r: l,
          fill: "none",
          stroke: "#222",
          strokeWidth: "3",
        }),
        e.jsx("circle", {
          cx: n / 2,
          cy: n / 2,
          r: l,
          fill: "none",
          stroke: "#fff",
          strokeWidth: "3",
          strokeDasharray: `${a} ${c}`,
          strokeLinecap: "round",
          transform: `rotate(-90 ${n / 2} ${n / 2})`,
          style: { transition: "stroke-dasharray 0.3s ease" },
        }),
        e.jsxs("text", {
          x: "50%",
          y: "50%",
          textAnchor: "middle",
          dominantBaseline: "central",
          fill: "white",
          fontSize: "11",
          fontWeight: "700",
          fontFamily: "sans-serif",
          children: [Math.round(t), "%"],
        }),
      ],
    });
  },
  ht = ({ pageData: t, opts: n, scale: l = 0.45 }) => {
    const [c, a] = S.useState(""),
      r = S.useRef();
    S.useEffect(() => {
      if (!t) return;
      const b = Ie(t, n),
        N = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>html,body{margin:0;padding:0;}body{zoom:${l};transform-origin:top left;}</style></head><body>${b}</body></html>`;
      a(N);
    }, [t, n, l]);
    const i = Math.round((t?.width || 595) * l),
      u = Math.round((t?.height || 842) * l);
    return e.jsx("div", {
      style: { width: i, height: u },
      className: "overflow-hidden rounded-sm flex-shrink-0",
      children: e.jsx("iframe", {
        ref: r,
        srcDoc: c,
        title: "preview",
        className: "border-none",
        style: { width: i, height: u },
        sandbox: "allow-same-origin",
      }),
    });
  },
  z = {
    IDLE: "idle",
    LOAD: "load",
    READY: "ready",
    EXPORT: "export",
    DONE: "done",
  };
function ut({ showNotification: t, showDownloadDialog: n }) {
  const [l, c] = S.useState(z.IDLE),
    [a, r] = S.useState(0),
    [i, u] = S.useState(""),
    [b, N] = S.useState(""),
    [O, k] = S.useState(null),
    [g, M] = S.useState([]),
    [T, I] = S.useState(""),
    [R, m] = S.useState(!1),
    [p, s] = S.useState(0),
    [o, h] = S.useState(!1),
    [d, y] = S.useState(0.5),
    [f, j] = S.useState(!1),
    [w, $] = S.useState("positioned"),
    [v, E] = S.useState("single"),
    [H, A] = S.useState("light"),
    [Y, G] = S.useState(!0),
    [_, U] = S.useState(!0),
    [B, Ee] = S.useState(!0),
    [me, Oe] = S.useState(!0),
    [he, Pe] = S.useState(!0),
    [fe, Re] = S.useState(!0),
    [ne, Ae] = S.useState(!1),
    [ue, He] = S.useState(!1),
    [ge, De] = S.useState(!1),
    Ne = S.useRef(),
    ae = S.useMemo(
      () => ({
        layout: w,
        theme: H,
        responsive: Y,
        inclLinks: _,
        inclTables: B,
        inclImages: me,
        inclForms: he,
        inclBackground: fe,
        minify: ne,
        removeHeaderFooter: ue,
        ignoreColumns: ge,
      }),
      [w, H, Y, _, B, me, he, fe, ne, ue, ge],
    ),
    be = S.useCallback(async (x) => {
      if (!x || x.type !== "application/pdf") {
        I("Please upload a valid PDF file.");
        return;
      }
      (I(""), k(x), M([]), c(z.LOAD), r(0), s(0));
      try {
        (u("Loading engine…"), N("pdf.js 3.11"));
        const C = await Ke();
        (u("Parsing document…"), N(x.name));
        const q = await x.arrayBuffer(),
          Z = await C.getDocument({ data: q }).promise,
          K = [];
        for (let V = 1; V <= Z.numPages; V++) {
          (r(((V - 1) / Z.numPages) * 92),
            u(`Extracting page ${V} / ${Z.numPages}`),
            N("paths · colours · fonts · tables · annotations"));
          const je = await Z.getPage(V);
          K.push(await xt(je, V));
        }
        (r(100),
          M(K),
          c(z.READY),
          K.some((V) => V.lineCount > 0) ||
            I(
              "No extractable text found — this PDF may be image-based. Use an OCR tool first.",
            ));
      } catch (C) {
        (console.error(C),
          I("Extraction failed: " + (C.message || String(C))),
          c(z.IDLE));
      }
    }, []),
    ze = async () => {
      (c(z.EXPORT), r(0));
      try {
        if (v === "per-page") {
          for (let V = 0; V < g.length; V++) {
            (r(((V + 1) / g.length) * 100),
              u(`Generating page ${V + 1} / ${g.length}…`));
            const je = we([g[V]], ae),
              Ze = new Blob([je], { type: "text/html" }),
              Ce = URL.createObjectURL(Ze),
              se = document.createElement("a");
            ((se.href = Ce),
              (se.download = `${O.name.replace(/\.pdf$/i, "")}_page${V + 1}.html`),
              document.body.appendChild(se),
              se.click(),
              document.body.removeChild(se),
              setTimeout(() => URL.revokeObjectURL(Ce), 1e3));
          }
          (c(z.DONE), t?.(`${g.length} HTML file(s) exported`, "success"));
          return;
        }
        (u("Generating HTML…"), N(`${g.length} pages · ${w} layout`));
        const x = we(g, ae);
        r(90);
        const C = O.name.replace(/\.pdf$/i, "") + ".html",
          q = new Blob([x], { type: "text/html" }),
          Z = URL.createObjectURL(q),
          K = document.createElement("a");
        ((K.href = Z),
          (K.download = C),
          document.body.appendChild(K),
          K.click(),
          document.body.removeChild(K),
          setTimeout(() => URL.revokeObjectURL(Z), 2e3),
          r(100),
          c(z.DONE),
          t?.("HTML exported successfully", "success"),
          n?.(C, q.size, new TextEncoder().encode(x)));
      } catch (x) {
        (console.error(x),
          I("Export failed: " + (x.message || String(x))),
          c(z.READY));
      }
    },
    Be = () => {
      if (!g.length) return;
      const x = we(g, ae);
      navigator.clipboard.writeText(x).then(() => {
        (h(!0),
          setTimeout(() => h(!1), 2500),
          t?.("HTML copied to clipboard", "success"));
      });
    },
    Ve = S.useCallback(
      (x) => {
        (x.preventDefault(), m(!1));
        const C = x.dataTransfer.files?.[0];
        C && be(C);
      },
      [be],
    ),
    Ye = g.reduce((x, C) => x + C.lineCount, 0),
    Ue = g.reduce((x, C) => x + C.tableCount, 0),
    Ge = g.reduce((x, C) => x + C.linkCount, 0),
    ye = g.reduce((x, C) => x + C.imgCount, 0),
    $e = Math.max(...g.map((x) => x.columnCount || 1), 1),
    ee = l === z.LOAD || l === z.EXPORT,
    re = g[p],
    _e = S.useMemo(() => Math.min(d, 500 / (re?.width || 595)), [d, re]);
  return e.jsxs("div", {
    className: "w-full min-h-screen",
    style: {
      background: "#0a0a0a",
      fontFamily: "'DM Sans',system-ui,sans-serif",
      color: "#e0e0e0",
    },
    children: [
      e.jsx("style", {
        children: `
        @import url('https:
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .spin { animation: sp 0.9s linear infinite; }
        @keyframes sp { to { transform: rotate(360deg); } }
        .fade-in { animation: fi 0.35s ease; }
        @keyframes fi { from { opacity:0; transform:translateY(5px); } to { opacity:1; transform:none; } }
        .dzpulse { animation: dzp 1.8s ease-in-out infinite; }
        @keyframes dzp { 0%,100%{opacity:.5} 50%{opacity:1} }
      `,
      }),
      e.jsxs("div", {
        className: "max-w-4xl mx-auto p-3 sm:p-5 lg:p-8",
        children: [
          e.jsxs("div", {
            className: "mb-6 sm:mb-8 fade-in",
            children: [
              e.jsx("div", {
                className: "flex items-center gap-3 mb-3",
                children: e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-xl sm:text-2xl font-black text-white tracking-tight leading-none",
                      children: "PDF → HTML",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[11px] sm:text-xs text-[#555] mt-0.5 font-medium",
                      children:
                        "Advanced extraction · Pixel-accurate or semantic output",
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: [
                  "Multi-column",
                  "Superscript",
                  "List detection",
                  "Header/footer removal",
                  "CMYK/RGB/Gray",
                  "Merged table cells",
                  "Form widgets",
                  "Dark/Sepia themes",
                ].map((x) =>
                  e.jsx(
                    "span",
                    {
                      className:
                        "text-[10px] text-[#555] border border-[#222] rounded-full px-2 py-0.5 font-medium bg-[#111]",
                      children: x,
                    },
                    x,
                  ),
                ),
              }),
            ],
          }),
          (l === z.IDLE || l === z.DONE) &&
            e.jsxs("div", {
              onDragOver: (x) => {
                (x.preventDefault(), m(!0));
              },
              onDragLeave: () => m(!1),
              onDrop: Ve,
              onClick: () => Ne.current?.click(),
              className:
                "relative rounded-2xl cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[256px] mb-5 overflow-hidden fade-in",
              style: {
                border: R ? "2px solid #fff" : "2px dashed #2a2a2a",
                background: R ? "#161616" : "#0d0d0d",
              },
              children: [
                e.jsx("input", {
                  ref: Ne,
                  type: "file",
                  accept: "application/pdf",
                  className: "hidden",
                  onChange: (x) => x.target.files?.[0] && be(x.target.files[0]),
                }),
                e.jsx("div", {
                  className: "absolute inset-0",
                  style: {
                    backgroundImage:
                      "radial-gradient(circle, #222 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    opacity: 0.6,
                  },
                }),
                e.jsx("div", {
                  className: `w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 relative z-10 ${R ? "dzpulse" : ""}`,
                  style: { background: "#181818", border: "1px solid #2e2e2e" },
                  children: e.jsx(L.Upload, {
                    className: "w-6 h-6 text-white",
                  }),
                }),
                e.jsx("p", {
                  className:
                    "text-base sm:text-lg font-bold text-white mb-1 relative z-10",
                  children: R ? "Release to convert" : "Drop your PDF here",
                }),
                e.jsxs("p", {
                  className: "text-sm text-[#555] relative z-10",
                  children: [
                    "or",
                    " ",
                    e.jsx("span", {
                      className:
                        "text-[#aaa] underline underline-offset-2 font-medium",
                      children: "browse file",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-3 gap-6 sm:gap-10 mt-8 relative z-10",
                  children: [
                    { Ic: L.Layers, t: "Pixel-accurate" },
                    { Ic: L.Table, t: "Smart tables" },
                    { Ic: L.Columns, t: "Multi-column" },
                  ].map(({ Ic: x, t: C }) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center gap-1.5",
                        children: [
                          e.jsx(x, { className: "w-4 h-4 text-[#3a3a3a]" }),
                          e.jsx("span", {
                            className: "text-[10px] text-[#3a3a3a] font-medium",
                            children: C,
                          }),
                        ],
                      },
                      C,
                    ),
                  ),
                }),
              ],
            }),
          ee &&
            e.jsxs("div", {
              className: "rounded-2xl p-5 sm:p-6 mb-5 fade-in",
              style: { background: "#0d0d0d", border: "1px solid #1e1e1e" },
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-4 mb-5",
                  children: [
                    e.jsx(mt, { value: a }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm sm:text-base font-bold text-white truncate",
                          children: i,
                        }),
                        O &&
                          e.jsx("p", {
                            className:
                              "text-xs text-[#444] truncate mt-0.5 font-mono",
                            children: O.name,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-3 gap-2",
                  children: [
                    {
                      Ic: L.Chip,
                      t: "Operator parsing",
                      d: "CTM · paths · colours · images",
                    },
                    {
                      Ic: L.Text,
                      t: "Text extraction",
                      d: "Fonts · sizes · sub/superscript",
                    },
                    {
                      Ic: L.Scan,
                      t: "Structure analysis",
                      d: "Tables · columns · annotations",
                    },
                  ].map(({ Ic: x, t: C, d: q }) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-2.5 p-2.5 rounded-lg",
                        style: {
                          background: "#111",
                          border: "1px solid #1e1e1e",
                        },
                        children: [
                          e.jsx(x, {
                            className:
                              "w-3.5 h-3.5 text-[#555] flex-shrink-0 mt-0.5",
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className: "text-xs font-semibold text-[#aaa]",
                                children: C,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-[#444] mt-0.5 truncate",
                                children: q,
                              }),
                            ],
                          }),
                        ],
                      },
                      C,
                    ),
                  ),
                }),
              ],
            }),
          T &&
            e.jsxs("div", {
              className:
                "flex items-start gap-3 rounded-xl px-4 py-3.5 mb-5 fade-in",
              style: { background: "#111", border: "1px solid #333" },
              children: [
                e.jsx(L.Warn, {
                  className: "w-4 h-4 text-[#888] flex-shrink-0 mt-0.5",
                }),
                e.jsx("p", {
                  className: "text-sm text-[#bbb] leading-relaxed",
                  children: T,
                }),
              ],
            }),
          (l === z.READY || l === z.DONE) &&
            g.length > 0 &&
            e.jsxs("div", {
              className: "space-y-4 sm:space-y-5 fade-in",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3",
                  children: [
                    e.jsx(xe, {
                      label: "Pages",
                      value: g.length,
                      icon: L.Pages,
                    }),
                    e.jsx(xe, { label: "Text lines", value: Ye, icon: L.Text }),
                    e.jsx(xe, { label: "Tables", value: Ue, icon: L.Table }),
                    e.jsx(xe, { label: "Links", value: Ge, icon: L.Link }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap gap-2",
                  children: [
                    ye > 0 &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium",
                        style: { background: "#111", border: "1px solid #222" },
                        children: [
                          e.jsx(L.Image, {
                            className: "w-3.5 h-3.5 text-[#555]",
                          }),
                          e.jsxs("span", {
                            className: "text-[#777]",
                            children: [
                              ye,
                              " image",
                              ye !== 1 ? "s" : "",
                              " detected",
                            ],
                          }),
                        ],
                      }),
                    $e >= 2 &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium",
                        style: { background: "#111", border: "1px solid #222" },
                        children: [
                          e.jsx(L.Columns, {
                            className: "w-3.5 h-3.5 text-[#555]",
                          }),
                          e.jsxs("span", {
                            className: "text-[#777]",
                            children: ["Multi-column detected (", $e, " cols)"],
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "rounded-xl overflow-hidden",
                  style: { background: "#0d0d0d", border: "1px solid #1e1e1e" },
                  children: [
                    e.jsx("div", {
                      className: "px-4 py-3 border-b border-[#1a1a1a]",
                      children: e.jsx(Le, { children: "Export Configuration" }),
                    }),
                    e.jsxs("div", {
                      className: "p-4 grid grid-cols-1 sm:grid-cols-2 gap-5",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                              children: "Layout Mode",
                            }),
                            e.jsxs("div", {
                              className: "flex gap-2 flex-wrap",
                              children: [
                                e.jsx(D, {
                                  label: "Positioned",
                                  on: w === "positioned",
                                  onClick: () => $("positioned"),
                                }),
                                e.jsx(D, {
                                  label: "Semantic",
                                  on: w === "semantic",
                                  onClick: () => $("semantic"),
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-[#3a3a3a] mt-1.5",
                              children:
                                w === "positioned"
                                  ? "Pixel-accurate absolute positioning"
                                  : "Clean HTML with headings, paragraphs & lists",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                              children: "Theme",
                            }),
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsx(D, {
                                  label: "Light",
                                  on: H === "light",
                                  onClick: () => A("light"),
                                }),
                                e.jsx(D, {
                                  label: "Dark",
                                  on: H === "dark",
                                  onClick: () => A("dark"),
                                }),
                                e.jsx(D, {
                                  label: "Sepia",
                                  on: H === "sepia",
                                  onClick: () => A("sepia"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                              children: "Output Files",
                            }),
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsx(D, {
                                  label: "Single file",
                                  on: v === "single",
                                  onClick: () => E("single"),
                                }),
                                e.jsx(D, {
                                  label: "Per page",
                                  on: v === "per-page",
                                  onClick: () => E("per-page"),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                              children: "Include",
                            }),
                            e.jsxs("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                e.jsx(D, {
                                  label: "Links",
                                  on: _,
                                  onClick: () => U((x) => !x),
                                }),
                                e.jsx(D, {
                                  label: "Tables",
                                  on: B,
                                  onClick: () => Ee((x) => !x),
                                }),
                                e.jsx(D, {
                                  label: "Images",
                                  on: me,
                                  onClick: () => Oe((x) => !x),
                                }),
                                e.jsx(D, {
                                  label: "Forms",
                                  on: he,
                                  onClick: () => Pe((x) => !x),
                                }),
                                e.jsx(D, {
                                  label: "Background",
                                  on: fe,
                                  onClick: () => Re((x) => !x),
                                }),
                                e.jsx(D, {
                                  label: "Responsive",
                                  on: Y,
                                  onClick: () => G((x) => !x),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "border-t border-[#1a1a1a]",
                      children: [
                        e.jsxs("button", {
                          onClick: () => j((x) => !x),
                          className:
                            "w-full flex items-center justify-between px-4 py-2.5 text-[11px] font-semibold text-[#444] hover:text-[#888] transition-colors",
                          children: [
                            e.jsxs("span", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(L.Settings, { className: "w-3.5 h-3.5" }),
                                "Advanced Options",
                              ],
                            }),
                            e.jsx("span", {
                              className: "font-mono",
                              children: f ? "▲" : "▼",
                            }),
                          ],
                        }),
                        f &&
                          e.jsxs("div", {
                            className:
                              "px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#141414]",
                            children: [
                              e.jsxs("div", {
                                className: "pt-3",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                                    children: "Processing",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                      e.jsx(D, {
                                        label: "Remove headers/footers",
                                        on: ue,
                                        onClick: () => He((x) => !x),
                                      }),
                                      e.jsx(D, {
                                        label: "Single column",
                                        on: ge,
                                        onClick: () => De((x) => !x),
                                        disabled: w !== "semantic",
                                      }),
                                      e.jsx(D, {
                                        label: "Minify HTML",
                                        on: ne,
                                        onClick: () => Ae((x) => !x),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "pt-3",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] font-bold uppercase tracking-[0.1em] text-[#444] mb-2",
                                    children: "Estimated output size",
                                  }),
                                  e.jsxs("p", {
                                    className: "text-xs text-[#444] font-mono",
                                    children: [
                                      "~",
                                      Math.round(
                                        ne
                                          ? g.reduce(
                                              (x, C) => x + C.lineCount * 120,
                                              0,
                                            ) / 1024
                                          : g.reduce(
                                              (x, C) => x + C.lineCount * 180,
                                              0,
                                            ) / 1024,
                                      ),
                                      " ",
                                      "KB",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "rounded-xl overflow-hidden",
                  style: { background: "#0d0d0d", border: "1px solid #1e1e1e" },
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 border-b border-[#1a1a1a]",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-sm font-bold text-[#ccc]",
                              children: "Live Preview",
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-[#3a3a3a] mt-0.5",
                              children: "Updates as you change options",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                e.jsx("button", {
                                  "aria-label": "Zoom out",
                                  onClick: () =>
                                    y((x) => Math.max(0.2, x - 0.1)),
                                  className:
                                    "p-1.5 rounded text-[#555] hover:text-white transition-colors",
                                  style: {
                                    background: "#111",
                                    border: "1px solid #222",
                                  },
                                  children: e.jsx(L.ZoomOut, {
                                    className: "w-3 h-3",
                                  }),
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-[10px] font-mono text-[#444] w-8 text-center",
                                  children: [Math.round(d * 100), "%"],
                                }),
                                e.jsx("button", {
                                  "aria-label": "Zoom in",
                                  onClick: () =>
                                    y((x) => Math.min(1.5, x + 0.1)),
                                  className:
                                    "p-1.5 rounded text-[#555] hover:text-white transition-colors",
                                  style: {
                                    background: "#111",
                                    border: "1px solid #222",
                                  },
                                  children: e.jsx(L.ZoomIn, {
                                    className: "w-3 h-3",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("span", {
                              className: "text-xs text-[#444] font-mono",
                              children: [p + 1, " / ", g.length],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-1",
                              children: [
                                e.jsx("button", {
                                  "aria-label": "Previous",
                                  onClick: () => s((x) => Math.max(0, x - 1)),
                                  disabled: p === 0,
                                  className:
                                    "p-1.5 rounded border border-[#222] text-[#555] hover:text-white hover:border-[#444] disabled:opacity-20 disabled:cursor-not-allowed transition-all",
                                  children: e.jsx(L.ChevL, {
                                    className: "w-3.5 h-3.5",
                                  }),
                                }),
                                e.jsx("button", {
                                  "aria-label": "Next",
                                  onClick: () =>
                                    s((x) => Math.min(g.length - 1, x + 1)),
                                  disabled: p === g.length - 1,
                                  className:
                                    "p-1.5 rounded border border-[#222] text-[#555] hover:text-white hover:border-[#444] disabled:opacity-20 disabled:cursor-not-allowed transition-all",
                                  children: e.jsx(L.ChevR, {
                                    className: "w-3.5 h-3.5",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "p-3 sm:p-4 flex justify-center overflow-auto",
                      style: { background: "#080808", minHeight: 200 },
                      children:
                        re &&
                        e.jsx("div", {
                          className: "rounded overflow-hidden shadow-2xl",
                          style: { border: "1px solid #1e1e1e" },
                          children: e.jsx(ht, {
                            pageData: re,
                            opts: ae,
                            scale: _e,
                          }),
                        }),
                    }),
                    g.length > 1 &&
                      e.jsx("div", {
                        className:
                          "px-3 py-2 border-t border-[#141414] flex gap-1.5 overflow-x-auto",
                        children: g.map((x, C) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => s(C),
                              className: `flex-shrink-0 h-6 min-w-[28px] px-2 rounded text-[10px] font-bold transition-all ${C === p ? "bg-white text-black" : "bg-[#111] text-[#444] border border-[#222] hover:border-[#444] hover:text-[#aaa]"}`,
                              children: C + 1,
                            },
                            C,
                          ),
                        ),
                      }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "sticky bottom-0 pb-3 pt-2 -mx-3 sm:-mx-5 lg:-mx-8 px-3 sm:px-5 lg:px-8 z-10",
                  style: {
                    background:
                      "linear-gradient(to top, #0a0a0a 65%, transparent)",
                  },
                  children: e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-2.5 max-w-4xl mx-auto",
                    children: [
                      e.jsx("button", {
                        onClick: ze,
                        disabled: ee,
                        className:
                          "flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm transition-all duration-150",
                        style: {
                          background: ee ? "#111" : "#fff",
                          color: ee ? "#333" : "#000",
                          border: ee ? "1px solid #1e1e1e" : "1px solid #fff",
                          cursor: ee ? "not-allowed" : "pointer",
                        },
                        children: ee
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-4 h-4 border-2 border-[#333] border-t-[#777] rounded-full spin",
                                }),
                                "Processing…",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(L.Down, { className: "w-4 h-4" }),
                                "Export ",
                                g.length,
                                " page",
                                g.length !== 1 ? "s" : "",
                                " ",
                                "as HTML",
                                v === "per-page" ? " (per page)" : "",
                              ],
                            }),
                      }),
                      e.jsx("button", {
                        onClick: Be,
                        className:
                          "sm:w-auto px-4 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2",
                        style: {
                          background: "#111",
                          border: "1px solid #222",
                          color: o ? "#fff" : "#666",
                        },
                        children: o
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(L.Check, { className: "w-4 h-4" }),
                                "Copied!",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(L.Copy, { className: "w-4 h-4" }),
                                "Copy HTML",
                              ],
                            }),
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          (c(z.IDLE), k(null), M([]), I(""), s(0));
                        },
                        className:
                          "sm:w-auto px-4 py-3.5 rounded-xl text-sm font-semibold transition-all",
                        style: {
                          background: "#0d0d0d",
                          border: "1px solid #1e1e1e",
                          color: "#444",
                        },
                        children: "New file",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          l === z.IDLE &&
            e.jsxs("div", {
              className: "rounded-xl p-4 sm:p-6 mt-4 fade-in",
              style: { background: "#0d0d0d", border: "1px solid #1e1e1e" },
              children: [
                e.jsx(Le, { children: "7-Stage Extraction Pipeline" }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3",
                  children: [
                    {
                      n: "01",
                      Ic: L.Chip,
                      t: "Operator List Parsing",
                      d: "Every path, colour change (RGB/CMYK/gray/transparent) and CTM matrix transform is traced with full graphics state stack.",
                    },
                    {
                      n: "02",
                      Ic: L.Type,
                      t: "Text Colour Tracking",
                      d: "showText operators are intercepted; the active fill colour at that exact point becomes the text colour — per character.",
                    },
                    {
                      n: "03",
                      Ic: L.Table,
                      t: "Border Table Detection",
                      d: "H/V lines are clustered into a grid. Missing interior segments are detected and output as colspan/rowspan.",
                    },
                    {
                      n: "04",
                      Ic: L.Columns,
                      t: "Multi-Column Detection",
                      d: "X-density histogram analysis detects multi-column layouts. Semantic output correctly flows text per column.",
                    },
                    {
                      n: "05",
                      Ic: L.List,
                      t: "List & Paragraph Detection",
                      d: "Bullet characters and numbered patterns are detected. Line spacing analysis groups lines into paragraphs.",
                    },
                    {
                      n: "06",
                      Ic: L.Zap,
                      t: "Superscript & Subscript",
                      d: "Sub/superscript text is detected by font size and Y-position and rendered with correct HTML sup/sub tags.",
                    },
                    {
                      n: "07",
                      Ic: L.Layers,
                      t: "Dual Layout Modes",
                      d: "Positioned: pixel-exact absolute layout. Semantic: headings, paragraphs, lists — clean, accessible, responsive HTML.",
                    },
                  ].map(({ n: x, Ic: C, t: q, d: Z }) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "flex-shrink-0 w-6 h-6 rounded flex items-center justify-center mt-0.5",
                            style: {
                              background: "#111",
                              border: "1px solid #222",
                            },
                            children: e.jsx(C, {
                              className: "w-3 h-3 text-[#555]",
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("p", {
                                className: "text-xs font-bold text-[#888]",
                                children: [
                                  e.jsx("span", {
                                    className: "text-[#333] font-mono mr-1.5",
                                    children: x,
                                  }),
                                  q,
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[11px] text-[#3a3a3a] mt-0.5 leading-relaxed",
                                children: Z,
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
        ],
      }),
    ],
  });
}
export { ut as default };
