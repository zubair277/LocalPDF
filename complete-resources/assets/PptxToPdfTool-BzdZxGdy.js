import { r as V, i as $e, j as u } from "./react-vendor-Bc7KCos-.js";
const he = 9525,
  Z = (t) => Math.round((parseInt(t) || 0) / he),
  Ct = (t) => parseFloat(t) / 100,
  g = (t) => t * 0.75,
  $t = (t) => new DOMParser().parseFromString(t, "text/xml"),
  h = (t, e) =>
    t
      ? Array.from(t.getElementsByTagName("*")).find((n) => n.localName === e)
      : null,
  tt = (t, e) =>
    t
      ? Array.from(t.getElementsByTagName("*")).filter((n) => n.localName === e)
      : [],
  f = (t, e) => (t && t.getAttribute(e)) || "",
  Gt = (t) =>
    (t &&
      (t.getAttributeNS(
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "embed",
      ) ||
        t.getAttributeNS(
          "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          "id",
        ) ||
        t.getAttribute("r:embed") ||
        t.getAttribute("r:id"))) ||
    "",
  me = {
    calibri: '"Calibri","Carlito","Noto Sans",Arial,sans-serif',
    "calibri light": '"Calibri Light","Noto Sans",Arial,sans-serif',
    arial: 'Arial,"Liberation Sans",Helvetica,sans-serif',
    "arial narrow": '"Arial Narrow",Arial,sans-serif',
    "arial black": '"Arial Black",Gadget,sans-serif',
    helvetica: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    "helvetica neue": '"Helvetica Neue",Helvetica,Arial,sans-serif',
    "times new roman":
      '"Times New Roman","Liberation Serif","Noto Serif",Georgia,serif',
    georgia: 'Georgia,"Times New Roman","Noto Serif",serif',
    "trebuchet ms": '"Trebuchet MS",Helvetica,Arial,sans-serif',
    verdana: 'Verdana,Geneva,"DejaVu Sans",sans-serif',
    tahoma: 'Tahoma,Verdana,"DejaVu Sans",sans-serif',
    "comic sans ms": '"Comic Sans MS","Chalkboard SE",cursive',
    "courier new": '"Courier New",Courier,"Noto Sans Mono",monospace',
    impact: 'Impact,"Franklin Gothic Bold","Arial Narrow Bold",sans-serif',
    palatino: '"Palatino Linotype","Book Antiqua",Palatino,"Noto Serif",serif',
    garamond: '"EB Garamond","Cormorant Garamond",Garamond,Georgia,serif',
    bookman: '"Bookman Old Style","URW Bookman L","Noto Serif",serif',
    "century gothic": '"Century Gothic","Apple Gothic",Futura,sans-serif',
    "franklin gothic medium": '"Franklin Gothic Medium",Impact,sans-serif',
    "gill sans": '"Gill Sans","Gill Sans MT",Calibri,Arial,sans-serif',
    "lucida sans": '"Lucida Sans","Lucida Grande",Verdana,sans-serif',
    "lucida console": '"Lucida Console","Courier New",monospace',
    "segoe ui": '"Segoe UI",Tahoma,Geneva,Verdana,sans-serif',
    candara: "Candara,Calibri,Arial,sans-serif",
    constantia: 'Constantia,Georgia,"Noto Serif",serif',
    corbel: 'Corbel,"Gill Sans",Calibri,Arial,sans-serif',
    cambria: 'Cambria,Georgia,"Noto Serif",serif',
    "cambria math": "Cambria,Georgia,serif",
    consolas: 'Consolas,"Courier New","Noto Sans Mono",monospace',
    monaco: 'Monaco,Consolas,"Courier New",monospace',
    futura: 'Futura,"Century Gothic","Apple Gothic",sans-serif',
    "myriad pro": '"Myriad Pro","Gill Sans",Calibri,Arial,sans-serif',
    "minion pro": '"Minion Pro","Palatino","Noto Serif",serif',
    optima: "Optima,Segoe,Candara,Calibri,sans-serif",
    century: '"Book Antiqua",Palatino,Georgia,serif',
    "open sans": '"Open Sans",Arial,sans-serif',
    roboto: "Roboto,Arial,sans-serif",
    lato: "Lato,Arial,sans-serif",
    montserrat: "Montserrat,Arial,sans-serif",
    oswald: "Oswald,Impact,sans-serif",
    raleway: "Raleway,Arial,sans-serif",
    "pt sans": '"PT Sans",Arial,sans-serif',
    "pt serif": '"PT Serif",Georgia,serif',
    "source sans pro": '"Source Sans Pro",Arial,sans-serif',
    "source serif pro": '"Source Serif Pro",Georgia,serif',
    ubuntu: "Ubuntu,Arial,sans-serif",
    nunito: "Nunito,Arial,sans-serif",
    poppins: "Poppins,Arial,sans-serif",
    merriweather: "Merriweather,Georgia,serif",
    "playfair display": '"Playfair Display",Georgia,serif',
    "josefin sans": '"Josefin Sans",Arial,sans-serif',
    "noto sans": '"Noto Sans",Arial,sans-serif',
    "noto serif": '"Noto Serif",Georgia,serif',
    inter: "Inter,Arial,sans-serif",
    "work sans": '"Work Sans",Arial,sans-serif',
    "dm sans": '"DM Sans",Arial,sans-serif',
    "fira sans": '"Fira Sans",Arial,sans-serif',
    karla: "Karla,Arial,sans-serif",
    mulish: "Mulish,Arial,sans-serif",
    quicksand: "Quicksand,Arial,sans-serif",
    "exo 2": '"Exo 2",Arial,sans-serif',
    barlow: "Barlow,Arial,sans-serif",
    "titillium web": '"Titillium Web",Arial,sans-serif',
  },
  be = new Set([
    "open sans",
    "roboto",
    "lato",
    "montserrat",
    "oswald",
    "raleway",
    "pt sans",
    "pt serif",
    "source sans pro",
    "ubuntu",
    "nunito",
    "poppins",
    "merriweather",
    "playfair display",
    "josefin sans",
    "noto sans",
    "noto serif",
    "inter",
    "work sans",
    "dm sans",
    "fira sans",
    "karla",
    "mulish",
    "quicksand",
    "exo 2",
    "barlow",
    "titillium web",
    "eb garamond",
  ]),
  qt = new Set();
async function Pt(t) {
  const e = t
    .map((r) => (r || "").toLowerCase().trim())
    .filter((r) => be.has(r) && !qt.has(r));
  if (!e.length) return;
  e.forEach((r) => qt.add(r));
  const s = `https://fonts.googleapis.com/css2?${e
    .map(
      (r) =>
        r
          .split(" ")
          .map((i) => i[0].toUpperCase() + i.slice(1))
          .join("+") + ":ital,wght@0,400;0,700;1,400;1,700",
    )
    .map((r) => `family=${r}`)
    .join("&")}&display=swap`;
  return new Promise((r) => {
    const i = document.createElement("link");
    ((i.rel = "stylesheet"),
      (i.href = s),
      (i.onload = () => document.fonts.ready.then(r).catch(r)),
      (i.onerror = r),
      document.head.appendChild(i));
  });
}
function Et(t) {
  if (!t) return 'Calibri,"Noto Sans",Arial,sans-serif';
  const e = t.toLowerCase().trim();
  return me[e] || `"${t}",Calibri,Arial,sans-serif`;
}
function xe(t, e, n) {
  const s = (t || "").toLowerCase(),
    r = e && n ? "bolditalic" : e ? "bold" : n ? "italic" : "normal";
  return /time|georgia|garamond|cambria|palatino|book antiqua|constantia|merriweather|playfair|pt serif|noto serif|source serif/.test(
    s,
  )
    ? { fam: "times", style: r }
    : /courier|consol|mono|lucida console|source code|fira code|jetbrains|monaco/.test(
          s,
        )
      ? { fam: "courier", style: r }
      : { fam: "helvetica", style: r };
}
let Tt = null;
const ye = () => (
  Tt || (Tt = document.createElement("canvas").getContext("2d")),
  Tt
);
function wt(t, e, n, s, r) {
  if (!t) return 0;
  try {
    const i = ye(),
      a = n ? (s ? "italic bold" : "bold") : s ? "italic" : "normal";
    return ((i.font = `${a} ${e}pt ${Et(r)}`), i.measureText(t).width);
  } catch {
    return t.length * e * 0.55;
  }
}
const ve = {
    white: "#ffffff",
    black: "#000000",
    red: "#ff0000",
    green: "#008000",
    blue: "#0000ff",
    yellow: "#ffff00",
    cyan: "#00ffff",
    magenta: "#ff00ff",
    orange: "#ffa500",
    purple: "#800080",
    gray: "#808080",
    grey: "#808080",
    darkGray: "#404040",
    lightGray: "#d3d3d3",
    navy: "#000080",
    lime: "#00ff00",
    aqua: "#00ffff",
    fuchsia: "#ff00ff",
    coral: "#ff7f50",
    silver: "#c0c0c0",
    maroon: "#800000",
    teal: "#008080",
  },
  dt = (t, e, n) => Math.max(e, Math.min(n, t)),
  Le = (t) => (
    (t = t.replace("#", "")),
    t.length === 3 &&
      (t = t
        .split("")
        .map((e) => e + e)
        .join("")),
    {
      r: parseInt(t.slice(0, 2), 16),
      g: parseInt(t.slice(2, 4), 16),
      b: parseInt(t.slice(4, 6), 16),
    }
  ),
  Bt = (t, e, n) =>
    "#" +
    [t, e, n]
      .map((s) => dt(Math.round(s), 0, 255).toString(16).padStart(2, "0"))
      .join("");
function ut(t, e, n) {
  ((t /= 255), (e /= 255), (n /= 255));
  const s = Math.max(t, e, n),
    r = Math.min(t, e, n);
  let i,
    a,
    c = (s + r) / 2;
  if (s === r) i = a = 0;
  else {
    const p = s - r;
    switch (((a = c > 0.5 ? p / (2 - s - r) : p / (s + r)), s)) {
      case t:
        i = ((e - n) / p + (e < n ? 6 : 0)) / 6;
        break;
      case e:
        i = ((n - t) / p + 2) / 6;
        break;
      default:
        i = ((t - e) / p + 4) / 6;
    }
  }
  return { h: i, s: a, l: c };
}
function gt(t, e, n) {
  if (e === 0) return { r: n * 255, g: n * 255, b: n * 255 };
  const s = n < 0.5 ? n * (1 + e) : n + e - n * e,
    r = 2 * n - s,
    i = (a, c, p) => (
      p < 0 && (p += 1),
      p > 1 && (p -= 1),
      p < 1 / 6
        ? a + (c - a) * 6 * p
        : p < 0.5
          ? c
          : p < 2 / 3
            ? a + (c - a) * (2 / 3 - p) * 6
            : a
    );
  return {
    r: i(r, s, t + 1 / 3) * 255,
    g: i(r, s, t) * 255,
    b: i(r, s, t - 1 / 3) * 255,
  };
}
function yt(t, e) {
  if (!e || !t || !t.startsWith("#")) return t;
  let { r: n, g: s, b: r } = Le(t),
    i = 1;
  for (const c of Array.from(e.children)) {
    const p = parseInt(f(c, "val") || "100000") / 1e5;
    switch (c.localName) {
      case "alpha":
        i = p;
        break;
      case "shade":
        ((n *= p), (s *= p), (r *= p));
        break;
      case "tint":
        ((n = n + (255 - n) * (1 - p)),
          (s = s + (255 - s) * (1 - p)),
          (r = r + (255 - r) * (1 - p)));
        break;
      case "lumMod":
      case "lum": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt(d, o, dt(l * p, 0, 1));
        ((n = $), (s = m), (r = L));
        break;
      }
      case "lumOff": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt(d, o, dt(l + (p - 1) * 0.5, 0, 1));
        ((n = $), (s = m), (r = L));
        break;
      }
      case "satMod": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt(d, dt(o * p, 0, 1), l);
        ((n = $), (s = m), (r = L));
        break;
      }
      case "satOff": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt(d, dt(o + (p - 1) * 0.5, 0, 1), l);
        ((n = $), (s = m), (r = L));
        break;
      }
      case "hueMod": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt((d * p) % 1, o, l);
        ((n = $), (s = m), (r = L));
        break;
      }
      case "hueOff": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt((((d + p - 1) % 1) + 1) % 1, o, l);
        ((n = $), (s = m), (r = L));
        break;
      }
      case "gamma": {
        ((n = Math.pow(n / 255, 1 / 2.2) * 255),
          (s = Math.pow(s / 255, 1 / 2.2) * 255),
          (r = Math.pow(r / 255, 1 / 2.2) * 255));
        break;
      }
      case "invGamma": {
        ((n = Math.pow(n / 255, 2.2) * 255),
          (s = Math.pow(s / 255, 2.2) * 255),
          (r = Math.pow(r / 255, 2.2) * 255));
        break;
      }
      case "inv":
        ((n = 255 - n), (s = 255 - s), (r = 255 - r));
        break;
      case "gray": {
        n = s = r = 0.2126 * n + 0.7152 * s + 0.0722 * r;
        break;
      }
      case "comp": {
        const { h: d, s: o, l } = ut(n, s, r),
          { r: $, g: m, b: L } = gt((d + 0.5) % 1, o, l);
        ((n = $), (s = m), (r = L));
        break;
      }
    }
  }
  const a = Bt(n, s, r);
  return i < 1
    ? `rgba(${dt(Math.round(n), 0, 255)},${dt(Math.round(s), 0, 255)},${dt(Math.round(r), 0, 255)},${i.toFixed(3)})`
    : a;
}
function Y(t, e) {
  if (!t) return null;
  const n = h(t, "srgbClr");
  if (n) return yt("#" + f(n, "val"), n);
  const s = h(t, "sysClr");
  if (s) return yt("#" + f(s, "lastClr"), s);
  const r = h(t, "prstClr");
  if (r) return yt(ve[f(r, "val")] || "#888888", r);
  const i = h(t, "scrgbClr");
  if (i) {
    const c = (l) => {
        const $ = parseInt(l) / 1e5;
        return Math.round(
          $ <= 0.0031308
            ? $ * 12.92
            : (1.055 * Math.pow($, 0.4166666666666667) - 0.055) * 255,
        );
      },
      p = c(f(i, "r")),
      d = c(f(i, "g")),
      o = c(f(i, "b"));
    return yt(Bt(p, d, o), i);
  }
  const a = h(t, "schemeClr");
  if (a) {
    const c = f(a, "val");
    return yt(
      e?.[
        {
          dk1: "dk1",
          lt1: "lt1",
          dk2: "dk2",
          lt2: "lt2",
          bg1: "lt1",
          bg2: "lt2",
          tx1: "dk1",
          tx2: "dk2",
        }[c] || c
      ] || "#888888",
      a,
    );
  }
  return null;
}
function Rt(t, e, n) {
  if (!t) return { type: "none" };
  if (h(t, "noFill")) return { type: "none" };
  const s = h(t, "solidFill");
  if (s) return { type: "solid", color: Y(s, e) || "transparent" };
  const r = h(t, "gradFill");
  if (r) {
    const p = tt(r, "gs")
        .sort((S, b) => parseInt(f(S, "pos") || 0) - parseInt(f(b, "pos") || 0))
        .map((S) => ({
          pos: parseInt(f(S, "pos")) / 1e5,
          color: Y(S, e) || "transparent",
        })),
      d = h(r, "lin"),
      o = h(r, "path"),
      l = d ? parseInt(f(d, "ang") || 0) / 6e4 : 90;
    d && f(d, "scaled");
    const $ = o ? f(o, "path") : "",
      m = $ === "circle" || $ === "shape",
      L = $ === "rect",
      y = o ? h(o, "fillToRect") : null,
      x = y ? parseInt(f(y, "r") || 1e5) / 1e5 : 0.5,
      v = y ? parseInt(f(y, "b") || 1e5) / 1e5 : 0.5;
    return {
      type: "gradient",
      stops: p,
      angle: (450 - l) % 360,
      isRadial: m || L,
      cx: x,
      cy: v,
    };
  }
  const i = h(t, "blipFill");
  if (i) {
    const c = h(i, "blip"),
      p = h(i, "srcRect"),
      d = h(i, "stretch"),
      o = d ? h(d, "fillRect") : null,
      l = h(i, "tile");
    return (
      c && parseInt((f(c, "cstate") === "print", "0")),
      {
        type: "image",
        src: n?.[Gt(c)] || null,
        stretch: !!d,
        tile: !!l,
        srcRect: p
          ? {
              l: parseInt(f(p, "l") || 0) / 1e5,
              t: parseInt(f(p, "t") || 0) / 1e5,
              r: parseInt(f(p, "r") || 0) / 1e5,
              b: parseInt(f(p, "b") || 0) / 1e5,
            }
          : null,
        fillRect: o
          ? {
              l: parseInt(f(o, "l") || 0) / 1e5,
              t: parseInt(f(o, "t") || 0) / 1e5,
              r: parseInt(f(o, "r") || 0) / 1e5,
              b: parseInt(f(o, "b") || 0) / 1e5,
            }
          : null,
      }
    );
  }
  const a = h(t, "pattFill");
  if (a) {
    const c = h(a, "fgClr"),
      p = h(a, "bgClr"),
      d = (c && Y(c, e)) || "#888",
      o = (p && Y(p, e)) || "#fff",
      l = f(a, "prst");
    return {
      type: "solid",
      color:
        l.includes("dk") || l.includes("horiz") || l.includes("vert") ? d : o,
    };
  }
  return { type: "none" };
}
function ht(t, e) {
  if (!t) return { color: null, width: 0, dash: "solid" };
  if (h(t, "noFill")) return { color: null, width: 0, dash: "solid" };
  const n = f(t, "w"),
    s = n ? Math.max(0.5, Z(n)) : 1,
    r = h(t, "solidFill"),
    i = (r && Y(r, e)) || "#000",
    a = h(t, "prstDash"),
    c = a ? f(a, "val") : "",
    p =
      c.includes("dash") || c.includes("dot")
        ? "dashed"
        : c.includes("dot")
          ? "dotted"
          : "solid",
    d =
      c === "dash"
        ? "8,4"
        : c === "lgDash"
          ? "12,4"
          : c === "dot"
            ? "2,3"
            : c === "dashDot"
              ? "8,3,2,3"
              : c === "lgDashDot"
                ? "12,3,2,3"
                : c === "sysDash"
                  ? "5,3"
                  : null,
    o = h(t, "tailEnd"),
    l = h(t, "headEnd"),
    $ = f(t, "cap");
  return {
    color: i,
    width: s,
    dash: p,
    dashArr: d,
    cap: $ === "rnd" ? "round" : $ === "sq" ? "square" : "butt",
    join: f(t, "cmpd") === "miter" ? "miter" : "round",
    tail: f(o || {}, "type") || "none",
    tailSz: f(o || {}, "w") || "med",
    head: f(l || {}, "type") || "none",
    headSz: f(l || {}, "w") || "med",
  };
}
function ee(t, e) {
  const n = t ? h(t, "effectLst") : null,
    s = t ? h(t, "effectDag") : null,
    r = { filters: [], boxShadow: [], textShadow: [] },
    i = n || s;
  if (!i) return r;
  const a = h(i, "outerShdw");
  if (a) {
    const o = Z(f(a, "blurRad") || 0),
      l = Z(f(a, "dist") || 0),
      m = ((parseFloat(f(a, "dir") || 0) / 6e4) * Math.PI) / 180,
      L = (l * Math.cos(m)).toFixed(1),
      y = (l * Math.sin(m)).toFixed(1);
    parseFloat(f(a, "algn") || "");
    const x = Y(a, e) || "rgba(0,0,0,0.35)";
    (r.boxShadow.push(`${L}px ${y}px ${o}px ${x}`),
      r.filters.push(`drop-shadow(${L}px ${y}px ${o}px ${x})`));
  }
  const c = h(i, "innerShdw");
  if (c) {
    const o = Z(f(c, "blurRad") || 0),
      l = Z(f(c, "dist") || 0),
      m = ((parseFloat(f(c, "dir") || 0) / 6e4) * Math.PI) / 180,
      L = (l * Math.cos(m)).toFixed(1),
      y = (l * Math.sin(m)).toFixed(1),
      x = Y(c, e) || "rgba(0,0,0,0.25)";
    r.boxShadow.push(`inset ${L}px ${y}px ${o}px ${x}`);
  }
  const p = h(i, "glow");
  if (p) {
    const o = Z(f(p, "rad") || 0),
      l = Y(p, e) || "rgba(255,255,255,0.5)";
    r.filters.push(`drop-shadow(0 0 ${o}px ${l})`);
  }
  const d = h(i, "blur") || h(i, "softEdge");
  if (d) {
    const o = Z(f(d, "rad") || 0);
    o > 0 && r.filters.push(`blur(${(o * 0.5).toFixed(1)}px)`);
  }
  return r;
}
function Lt(t) {
  const e = h(t, "xfrm");
  if (!e) return null;
  const n = h(e, "off"),
    s = h(e, "ext");
  return {
    x: Z(f(n, "x")),
    y: Z(f(n, "y")),
    w: Math.max(1, Z(f(s, "cx"))),
    h: Math.max(1, Z(f(s, "cy"))),
    rot: f(e, "rot") ? parseFloat(f(e, "rot")) / 6e4 : 0,
    flipH: f(e, "flipH") === "1",
    flipV: f(e, "flipV") === "1",
  };
}
function jt(t, e, n, s = -90) {
  return `M${Array.from({ length: t }, (i, a) => {
    const c = ((s + a * (360 / t)) * Math.PI) / 180;
    return `${(e / 2 + (e / 2) * Math.cos(c)).toFixed(2)},${(n / 2 + (n / 2) * Math.sin(c)).toFixed(2)}`;
  }).join("L")}Z`;
}
function rt(t, e, n, s = 0.4, r = -90) {
  const i = [];
  for (let a = 0; a < t * 2; a++) {
    const c = ((r + a * (180 / t)) * Math.PI) / 180,
      p = a % 2 === 0 ? 0.5 : s * 0.5;
    i.push(
      `${(e / 2 + e * p * Math.cos(c)).toFixed(2)},${(n / 2 + n * p * Math.sin(c)).toFixed(2)}`,
    );
  }
  return `M${i.join("L")}Z`;
}
function vt(t, e, n) {
  return (
    (n = Math.min(n, Math.min(t, e) / 2)),
    `M${n},0H${t - n}Q${t},0,${t},${n}V${e - n}Q${t},${e},${t - n},${e}H${n}Q0,${e},0,${e - n}V${n}Q0,0,${n},0Z`
  );
}
const Se = {
  rect: null,
  ellipse: null,
  circle: null,
  roundRect: (t, e, n) =>
    vt(t, e, Math.min(t, e) * (parseInt(n?.[0] || 16667) / 1e5)),
  snip1Rect: (t, e, n) =>
    `M${Math.min(t, e) * (parseInt(n?.[0] || 16667) / 1e5)},0H${t}V${e}H0V0Z`,
  snipRoundRect: (t, e, n) =>
    vt(t, e, Math.min(t, e) * (parseInt(n?.[0] || 16667) / 1e5)),
  round1Rect: (t, e, n) =>
    vt(t, e, Math.min(t, e) * (parseInt(n?.[0] || 16667) / 1e5)),
  triangle: (t, e) => `M${t / 2},0L${t},${e}L0,${e}Z`,
  rtTriangle: (t, e) => `M0,0L${t},${e}L0,${e}Z`,
  diamond: (t, e) => `M${t / 2},0L${t},${e / 2}L${t / 2},${e}L0,${e / 2}Z`,
  parallelogram: (t, e) => `M${t * 0.25},0L${t},0L${t * 0.75},${e}L0,${e}Z`,
  trapezoid: (t, e) => `M${t * 0.2},0L${t * 0.8},0L${t},${e}L0,${e}Z`,
  pentagon: (t, e) => jt(5, t, e, -90),
  hexagon: (t, e) =>
    `M${t * 0.25},0L${t * 0.75},0L${t},${e * 0.5}L${t * 0.75},${e}L${t * 0.25},${e}L0,${e * 0.5}Z`,
  heptagon: (t, e) => jt(7, t, e, -90),
  octagon: (t, e) => {
    const n = Math.min(t, e) * 0.29;
    return `M${n},0L${t - n},0L${t},${n}L${t},${e - n}L${t - n},${e}L${n},${e}L0,${e - n}L0,${n}Z`;
  },
  decagon: (t, e) => jt(10, t, e, -90),
  dodecagon: (t, e) => jt(12, t, e, -90),
  pie: (t, e) =>
    `M${t / 2},${e / 2}L${t},${e / 2}A${t / 2},${e / 2},0,1,1,${t / 2},0Z`,
  chord: (t, e) => `M0,${e / 2}A${t / 2},${e / 2},0,1,1,${t},${e / 2}Z`,
  teardrop: (t, e) =>
    `M${t * 0.5},${e}C${t * 0.1},${e},0,${e * 0.5},${t * 0.5},0C${t},${e * 0.5},${t * 0.9},${e},${t * 0.5},${e}Z`,
  donut: (t, e) =>
    `M${t / 2},0A${t / 2},${e / 2},0,1,0,${t / 2},${e}A${t / 2},${e / 2},0,1,0,${t / 2},0ZM${t / 2},${e * 0.2}A${t * 0.3},${e * 0.3},0,1,1,${t / 2},${e * 0.8}A${t * 0.3},${e * 0.3},0,1,1,${t / 2},${e * 0.2}Z`,
  arc: (t, e) => `M0,${e / 2}A${t / 2},${e / 2},0,0,1,${t},${e / 2}`,
  halfFrame: (t, e) =>
    `M0,0L${t},0L${t},${e * 0.2}L${t * 0.2},${e * 0.2}L${t * 0.2},${e}L0,${e}Z`,
  frame: (t, e) => {
    const n = Math.min(t, e) * 0.15;
    return `M0,0L${t},0L${t},${e}L0,${e}ZM${n},${n}L${n},${e - n}L${t - n},${e - n}L${t - n},${n}Z`;
  },
  corner: (t, e) =>
    `M0,0L${t},0L${t},${e * 0.2}L${t * 0.2},${e * 0.2}L${t * 0.2},${e}L0,${e}Z`,
  diagStripe: (t, e) => `M0,${e}L${t},0L${t},${e * 0.25}L${t * 0.25},${e}Z`,
  chevron: (t, e) =>
    `M0,0L${t * 0.75},0L${t},${e * 0.5}L${t * 0.75},${e}L0,${e}L${t * 0.25},${e * 0.5}Z`,
  rightArrow: (t, e) =>
    `M0,${e * 0.3}L${t * 0.65},${e * 0.3}L${t * 0.65},0L${t},${e * 0.5}L${t * 0.65},${e}L${t * 0.65},${e * 0.7}L0,${e * 0.7}Z`,
  leftArrow: (t, e) =>
    `M${t},${e * 0.3}L${t * 0.35},${e * 0.3}L${t * 0.35},0L0,${e * 0.5}L${t * 0.35},${e}L${t * 0.35},${e * 0.7}L${t},${e * 0.7}Z`,
  upArrow: (t, e) =>
    `M${t * 0.3},${e}L${t * 0.3},${e * 0.35}L0,${e * 0.35}L${t * 0.5},0L${t},${e * 0.35}L${t * 0.7},${e * 0.35}L${t * 0.7},${e}Z`,
  downArrow: (t, e) =>
    `M${t * 0.3},0L${t * 0.3},${e * 0.65}L0,${e * 0.65}L${t * 0.5},${e}L${t},${e * 0.65}L${t * 0.7},${e * 0.65}L${t * 0.7},0Z`,
  leftRightArrow: (t, e) =>
    `M0,${e * 0.5}L${t * 0.25},0L${t * 0.25},${e * 0.3}L${t * 0.75},${e * 0.3}L${t * 0.75},0L${t},${e * 0.5}L${t * 0.75},${e}L${t * 0.75},${e * 0.7}L${t * 0.25},${e * 0.7}L${t * 0.25},${e}Z`,
  upDownArrow: (t, e) =>
    `M${t * 0.5},0L${t},${e * 0.25}L${t * 0.7},${e * 0.25}L${t * 0.7},${e * 0.75}L${t},${e * 0.75}L${t * 0.5},${e}L0,${e * 0.75}L${t * 0.3},${e * 0.75}L${t * 0.3},${e * 0.25}L0,${e * 0.25}Z`,
  bentArrow: (t, e) =>
    `M${t * 0.2},0L${t * 0.2},${e * 0.6}L0,${e * 0.6}L${t * 0.35},${e}L${t * 0.7},${e * 0.6}L${t * 0.5},${e * 0.6}L${t * 0.5},${e * 0.2}L${t},${e * 0.2}L${t},0Z`,
  star4: (t, e) => rt(4, t, e, 0.35),
  star5: (t, e) => rt(5, t, e, 0.38),
  star6: (t, e) => rt(6, t, e, 0.35, 0),
  star7: (t, e) => rt(7, t, e, 0.38),
  star8: (t, e) => rt(8, t, e, 0.38, -90),
  star10: (t, e) => rt(10, t, e, 0.4),
  star12: (t, e) => rt(12, t, e, 0.4),
  star16: (t, e) => rt(16, t, e, 0.4),
  star24: (t, e) => rt(24, t, e, 0.45),
  star32: (t, e) => rt(32, t, e, 0.45),
  cross: (t, e) =>
    `M${t * 0.33},0L${t * 0.67},0L${t * 0.67},${e * 0.33}L${t},${e * 0.33}L${t},${e * 0.67}L${t * 0.67},${e * 0.67}L${t * 0.67},${e}L${t * 0.33},${e}L${t * 0.33},${e * 0.67}L0,${e * 0.67}L0,${e * 0.33}L${t * 0.33},${e * 0.33}Z`,
  heart: (t, e) =>
    `M${t * 0.5},${e * 0.3}C${t * 0.5},${e * 0.1},${t * 0.3},0,${t * 0.15},${e * 0.15}C0,${e * 0.3},0,${e * 0.55},${t * 0.5},${e}C${t},${e * 0.55},${t},${e * 0.3},${t * 0.85},${e * 0.15}C${t * 0.7},0,${t * 0.5},${e * 0.1},${t * 0.5},${e * 0.3}Z`,
  cloud: (t, e) =>
    `M${t * 0.15},${e * 0.65}Q${t * 0.05},${e * 0.45},${t * 0.2},${e * 0.35}Q${t * 0.1},${e * 0.1},${t * 0.4},${e * 0.15}Q${t * 0.4},0,${t * 0.6},${e * 0.1}Q${t * 0.8},0,${t * 0.85},${e * 0.25}Q${t},${e * 0.2},${t * 0.95},${e * 0.5}Q${t},${e * 0.65},${t * 0.85},${e * 0.7}Z`,
  wedgeRectCallout: (t, e) =>
    `M0,0L${t},0L${t},${e * 0.7}L${t * 0.6},${e * 0.7}L${t * 0.5},${e}L${t * 0.4},${e * 0.7}L0,${e * 0.7}Z`,
  wedgeEllipseCallout: (t, e) =>
    `M${t * 0.5},${e * 0.2}A${t * 0.4},${e * 0.3},0,1,0,${t * 0.5},${e * 0.2}ZM${t * 0.5},${e * 0.5}L${t * 0.5},${e}`,
  cloudCallout: (t, e) =>
    `M${t * 0.15},${e * 0.5}Q${t * 0.05},${e * 0.35},${t * 0.2},${e * 0.25}Q${t * 0.1},${e * 0.05},${t * 0.4},${e * 0.1}Q${t * 0.4},0,${t * 0.6},${e * 0.08}Q${t * 0.8},0,${t * 0.85},${e * 0.18}Q${t},${e * 0.15},${t * 0.95},${e * 0.38}Q${t},${e * 0.5},${t * 0.85},${e * 0.55}L${t * 0.3},${e * 0.55}L${t * 0.2},${e}L${t * 0.12},${e * 0.55}Z`,
  ribbon: (t, e) =>
    `M0,${e * 0.2}L${t * 0.15},0L${t * 0.85},0L${t},${e * 0.2}L${t},${e}L${t * 0.5},${e * 0.75}L0,${e}Z`,
  ribbon2: (t, e) =>
    `M0,${e * 0.8}L${t * 0.15},${e}L${t * 0.85},${e}L${t},${e * 0.8}L${t},0L${t * 0.5},${e * 0.25}L0,0Z`,
  ellipseRibbon: (t, e) =>
    `M0,${e * 0.3}Q${t / 2},0,${t},${e * 0.3}L${t},${e}Q${t / 2},${e * 0.7},0,${e}Z`,
  noSmoking: (t, e) =>
    `M${t / 2},0A${t / 2},${e / 2},0,1,0,${t / 2},${e}A${t / 2},${e / 2},0,1,0,${t / 2},0ZM${t * 0.15},${e * 0.85}L${t * 0.85},${e * 0.15}`,
  bevel: (t, e) => {
    const n = Math.min(t, e) * 0.15;
    return `M${n},${n}L${t - n},${n}L${t - n},${e - n}L${n},${e - n}ZM0,0L${n},${n}M${t},0L${t - n},${n}M${t},${e}L${t - n},${e - n}M0,${e}L${n},${e - n}M0,0L${t},0L${t},${e}L0,${e}Z`;
  },
  cube: (t, e) => {
    const n = Math.min(t, e) * 0.2;
    return `M${n},0L${t},0L${t},${e - n}L${t - n},${e}L0,${e}L0,${n}ZM${n},0L0,${n}M${t},0L${n},0L0,${n}`;
  },
  can: (t, e) =>
    `M0,${e * 0.1}Q${t / 2},-${e * 0.05},${t},${e * 0.1}L${t},${e * 0.9}Q${t / 2},${e * 1.05},0,${e * 0.9}ZM0,${e * 0.1}Q${t / 2},${e * 0.25},${t},${e * 0.1}`,
  lightningBolt: (t, e) =>
    `M${t * 0.6},0L${t * 0.2},${e * 0.5}L${t * 0.5},${e * 0.5}L${t * 0.4},${e}L${t * 0.8},${e * 0.5}L${t * 0.5},${e * 0.5}Z`,
  moon: (t, e) =>
    `M${t * 0.7},0A${t * 0.5},${e * 0.5},0,1,0,${t * 0.7},${e}A${t * 0.3},${e * 0.4},0,1,1,${t * 0.7},0Z`,
  smileyFace: (t, e) =>
    `M${t / 2},0A${t / 2},${e / 2},0,1,0,${t / 2},${e}A${t / 2},${e / 2},0,1,0,${t / 2},0Z`,
  sun: (t, e) => rt(16, t, e, 0.6),
  flowChartProcess: (t, e) => null,
  flowChartAlternateProcess: (t, e) => vt(t, e, Math.min(t, e) * 0.15),
  flowChartDecision: (t, e) =>
    `M${t / 2},0L${t},${e / 2}L${t / 2},${e}L0,${e / 2}Z`,
  flowChartInputOutput: (t, e) =>
    `M${t * 0.2},0L${t},0L${t * 0.8},${e}L0,${e}Z`,
  flowChartPredefinedProcess: (t, e) =>
    `M0,0L${t},0L${t},${e}L0,${e}ZM${t * 0.1},0L${t * 0.1},${e}M${t * 0.9},0L${t * 0.9},${e}`,
  flowChartManualInput: (t, e) => `M0,${e * 0.2}L${t},0L${t},${e}L0,${e}Z`,
  flowChartPreparation: (t, e) =>
    `M${t * 0.2},0L${t * 0.8},0L${t},${e / 2}L${t * 0.8},${e}L${t * 0.2},${e}L0,${e / 2}Z`,
  flowChartDocument: (t, e) =>
    `M0,0L${t},0L${t},${e * 0.8}Q${t * 0.75},${e * 1.1},${t / 2},${e * 0.8}Q${t * 0.25},${e * 0.5},0,${e * 0.8}Z`,
  flowChartTerminator: (t, e) => vt(t, e, Math.min(t, e) * 0.45),
  flowChartDatabase: (t, e) =>
    `M0,${e * 0.1}Q${t / 2},-${e * 0.05},${t},${e * 0.1}L${t},${e * 0.9}Q${t / 2},${e * 1.05},0,${e * 0.9}ZM0,${e * 0.1}Q${t / 2},${e * 0.25},${t},${e * 0.1}`,
  leftBracket: (t, e) =>
    `M${t * 0.7},0L${t * 0.3},0Q0,0,0,${e * 0.1}L0,${e * 0.9}Q0,${e},${t * 0.3},${e}L${t * 0.7},${e}`,
  rightBracket: (t, e) =>
    `M${t * 0.3},0L${t * 0.7},0Q${t},0,${t},${e * 0.1}L${t},${e * 0.9}Q${t},${e},${t * 0.7},${e}L${t * 0.3},${e}`,
  leftBrace: (t, e) =>
    `M${t * 0.7},0Q${t * 0.35},0,${t * 0.35},${e * 0.2}L${t * 0.35},${e * 0.4}Q${t * 0.35},${e / 2},0,${e / 2}Q${t * 0.35},${e / 2},${t * 0.35},${e * 0.6}L${t * 0.35},${e * 0.8}Q${t * 0.35},${e},${t * 0.7},${e}`,
  rightBrace: (t, e) =>
    `M${t * 0.3},0Q${t * 0.65},0,${t * 0.65},${e * 0.2}L${t * 0.65},${e * 0.4}Q${t * 0.65},${e / 2},${t},${e / 2}Q${t * 0.65},${e / 2},${t * 0.65},${e * 0.6}L${t * 0.65},${e * 0.8}Q${t * 0.65},${e},${t * 0.3},${e}`,
};
function Ft(t, e, n, s) {
  const r = Se[t];
  if (r === null || !r) return null;
  const i = (s || []).map((a) =>
    parseInt(
      f(a, "fmla")?.match(/\d+/)?.[0] || a.getAttribute?.("val") || "16667",
    ),
  );
  return r(e, n, i);
}
function ne(t, e, n) {
  if (!t) return null;
  const s = h(t, "pathLst");
  if (!s) return null;
  const r = tt(s, "path").filter((a) => a.parentElement === s);
  if (!r.length) return null;
  const i = [];
  for (const a of r) {
    const c = parseInt(f(a, "w") || e) || e,
      p = parseInt(f(a, "h") || n) || n,
      d = e / c,
      o = n / p,
      l = (y, x) => {
        const v = parseFloat(y) || 0;
        return ((x ? o : d) * v).toFixed(2);
      };
    let $ = "",
      m = 0,
      L = 0;
    for (const y of Array.from(a.children)) {
      const x = y.localName;
      if (x === "moveTo") {
        const v = h(y, "pt");
        ((m = parseFloat(l(f(v, "x"), !1))),
          (L = parseFloat(l(f(v, "y"), !0))),
          ($ += `M${m},${L}`));
      } else if (x === "lnTo") {
        const v = h(y, "pt");
        ((m = parseFloat(l(f(v, "x"), !1))),
          (L = parseFloat(l(f(v, "y"), !0))),
          ($ += `L${m},${L}`));
      } else if (x === "arcTo") {
        const v = parseFloat(l(f(y, "wR"), !1)),
          S = parseFloat(l(f(y, "hR"), !0)),
          b = parseFloat(f(y, "stAng") || 0) / 6e4,
          j = parseFloat(f(y, "swAng") || 0) / 6e4,
          M = b + j,
          w = m + v * Math.cos((M * Math.PI) / 180),
          F = L + S * Math.sin((M * Math.PI) / 180),
          A = Math.abs(j) > 180 ? 1 : 0,
          R = j > 0 ? 1 : 0;
        (($ += `A${v},${S},0,${A},${R},${w.toFixed(2)},${F.toFixed(2)}`),
          (m = w),
          (L = F));
      } else if (x === "quadBezTo") {
        const v = tt(y, "pt");
        if (v.length >= 2) {
          const S = l(f(v[0], "x"), !1),
            b = l(f(v[0], "y"), !0);
          ((m = parseFloat(l(f(v[1], "x"), !1))),
            (L = parseFloat(l(f(v[1], "y"), !0))),
            ($ += `Q${S},${b},${m},${L}`));
        }
      } else if (x === "cubicBezTo") {
        const v = tt(y, "pt");
        v.length >= 3 &&
          (($ += `C${l(f(v[0], "x"), !1)},${l(f(v[0], "y"), !0)},${l(f(v[1], "x"), !1)},${l(f(v[1], "y"), !0)},${l(f(v[2], "x"), !1)},${l(f(v[2], "y"), !0)}`),
          (m = parseFloat(l(f(v[2], "x"), !1))),
          (L = parseFloat(l(f(v[2], "y"), !0))));
      } else x === "close" && ($ += "Z");
    }
    $ && i.push($);
  }
  return i.join(" ") || null;
}
function Dt(t, e, n) {
  if (!t) return {};
  const s = f(t, "sz"),
    r = f(t, "b"),
    i = r === "1" || r === "true",
    a = r === "0" || r === "false",
    c = f(t, "i"),
    p = c === "1" || c === "true",
    d = f(t, "u"),
    o = !!d && d !== "none" && d !== "0",
    l = d && d !== "none" ? d : null,
    $ = f(t, "strike") && f(t, "strike") !== "noStrike",
    m = f(t, "cap"),
    L = { all: "uppercase", small: "smallCaps" }[m] || null,
    y = h(t, "latin"),
    x = h(t, "ea") || h(t, "cs"),
    v = h(t, "sym");
  let S = y ? f(y, "typeface") : null;
  (S === "+mj-lt" || S === "+mj-cs"
    ? (S = n?.major || "Calibri")
    : S === "+mn-lt" || S === "+mn-cs"
      ? (S = n?.minor || "Calibri")
      : !S && x
        ? (S = f(x, "typeface") || null)
        : !S && v && (S = f(v, "typeface") || null),
    S === "Calibri Light" && (S = n?.major || "Calibri"),
    h(t, "solidFill") || h(t, "srgbClr"));
  const b = h(t, "solidFill"),
    j = (b && Y(b, e)) || null,
    M = h(t, "highlight"),
    w = M ? Y(M, e) : null,
    F = f(t, "spc"),
    A = F ? parseFloat(F) / 100 : 0,
    R = f(t, "baseline"),
    P = R ? parseInt(R) / 1e5 : 0,
    G = h(t, "hlinkClick"),
    H = G ? Gt(G) : null,
    N = h(t, "effectLst"),
    I = N ? h(N, "outerShdw") : null;
  let z = null;
  if (I) {
    const C = Z(f(I, "blurRad") || 0),
      k = Z(f(I, "dist") || 0),
      D = ((parseFloat(f(I, "dir") || 0) / 6e4) * Math.PI) / 180,
      E = (k * Math.cos(D)).toFixed(1),
      W = (k * Math.sin(D)).toFixed(1),
      et = Y(I, e) || "rgba(0,0,0,0.3)";
    z = `${E}px ${W}px ${C}px ${et}`;
  }
  const U = N ? h(N, "glow") : null;
  if (U) {
    const C = Z(f(U, "rad") || 0),
      k = Y(U, e) || "rgba(255,255,255,0.5)";
    z = `${z ? z + ", " : ""}0 0 ${C}px ${k}`;
  }
  return {
    fontSize: s ? Ct(s) : null,
    bold: a ? !1 : i || void 0,
    italic: p || void 0,
    underline: o || void 0,
    underlineStyle: l,
    strike: $ || void 0,
    cap: L,
    fontFamily: S || void 0,
    color: j || void 0,
    highlight: w || void 0,
    charSpacing: A || void 0,
    baselineShift: P || void 0,
    hlinkId: H || void 0,
    textShadow: z || void 0,
  };
}
function Me(t, e, n) {
  const s = h(t, "pPr"),
    r = s ? f(s, "algn") : null,
    i = { l: "left", r: "right", ctr: "center", just: "justify" }[r] || "left",
    a = s && f(s, "marL") ? Z(f(s, "marL")) : 0,
    c = s && f(s, "indent") ? Z(f(s, "indent")) : 0,
    p = parseInt(f(s, "lvl") || "0"),
    d = s ? h(s, "spcBef") : null,
    o = s ? h(s, "spcAft") : null,
    l = d ? h(d, "spcPts") : null,
    $ = d ? h(d, "spcPct") : null,
    m = l ? Ct(f(l, "val")) / 1.5 : $ ? (parseInt(f($, "val")) / 1e5) * 0.3 : 0,
    L = o ? h(o, "spcPts") : null,
    y = o ? h(o, "spcPct") : null,
    x = L ? Ct(f(L, "val")) / 1.5 : y ? (parseInt(f(y, "val")) / 1e5) * 0.3 : 0,
    v = s ? h(s, "lnSpc") : null,
    S = v ? h(v, "spcPts") : null,
    b = v ? h(v, "spcPct") : null,
    j = S ? `${Ct(f(S, "val"))}pt` : b ? parseInt(f(b, "val")) / 1e5 : 1.2,
    M = s ? h(s, "buNone") : null,
    w = s ? h(s, "buChar") : null,
    F = s ? h(s, "buAutoNum") : null,
    A = s ? h(s, "buClr") : null;
  s && h(s, "buClrTx");
  const R = s ? h(s, "buSzPct") : null;
  s && h(s, "buSzPts");
  const P = R ? parseInt(f(R, "val")) / 1e5 : 1,
    G = s ? h(s, "buFont") : null,
    H = F ? f(F, "type") : "",
    I =
      !M &&
      (w
        ? {
            char: f(w, "char") || "•",
            color: A ? Y(A, e) : null,
            sizeFactor: P,
            fontFamily: G ? f(G, "typeface") : null,
          }
        : F
          ? {
              char: "•",
              autoNum: H,
              autoFn:
                {
                  arabicPeriod: (k) => `${k}.`,
                  arabicParenR: (k) => `${k})`,
                  romanLcPeriod: (k) =>
                    [
                      "i",
                      "ii",
                      "iii",
                      "iv",
                      "v",
                      "vi",
                      "vii",
                      "viii",
                      "ix",
                      "x",
                    ][k - 1] + ".",
                  alphaLcParenR: (k) => String.fromCharCode(96 + k) + ")",
                  alphaUcParenR: (k) => String.fromCharCode(64 + k) + ")",
                }[H] || null,
              color: null,
              sizeFactor: P,
            }
          : null),
    z = s ? h(s, "defRPr") : null,
    U = z ? Dt(z, e, n) : {},
    C = [];
  for (const k of Array.from(t.children)) {
    const T = k.localName;
    if (T === "r") {
      const D = h(k, "rPr"),
        E = h(k, "t"),
        W = E ? E.textContent : "";
      if (!W && !C.length) continue;
      C.push({ text: W, style: { ...U, ...Dt(D, e, n) } });
    } else if (T === "br")
      C.push({ br: !0, style: { ...U, ...Dt(h(k, "rPr"), e, n) } });
    else if (T === "fld") {
      const D = h(k, "t");
      D && C.push({ text: D.textContent, style: U });
    }
  }
  return {
    textAlign: i,
    marL: a,
    indent: c,
    lvl: p,
    marginTop: m,
    marginBottom: x,
    lineHeight: j,
    bullet: I,
    runs: C,
  };
}
function se(t, e, n, s = !1) {
  if (!t) return null;
  const r = h(t, "bodyPr"),
    i = f(r, "anchor") || "t",
    a = s ? 0 : 4,
    c = s ? 0 : 9,
    p = f(r, "lIns") ? Z(f(r, "lIns")) : c,
    d = f(r, "rIns") ? Z(f(r, "rIns")) : c,
    o = f(r, "tIns") ? Z(f(r, "tIns")) : a,
    l = f(r, "bIns") ? Z(f(r, "bIns")) : a,
    $ = f(r, "vert"),
    m = $ === "vert" || $ === "eaVert",
    L = { t: "flex-start", ctr: "center", b: "flex-end" }[i] || "flex-start",
    y = h(t, "normAutofit"),
    x = h(t, "spAutoFit"),
    v = y ? parseInt(f(y, "fontScale") || "100000") / 1e5 : 1,
    S = x ? "sp" : y ? "norm" : "none",
    b = h(t, "lstStyle"),
    j = tt(t, "p")
      .filter((M) => M.parentElement === t)
      .map((M) => Me(M, e, n));
  return {
    justifyContent: L,
    lIns: p,
    rIns: d,
    tIns: o,
    bIns: l,
    isVert: m,
    paragraphs: j,
    fontScale: v,
    autoFit: S,
    lstStyle: b,
  };
}
function je(t, e, n) {
  const s = h(t, "tbl");
  if (!s) return null;
  const r = Lt(t);
  if (!r) return null;
  const i = h(s, "tblPr"),
    a = f(i, "bandRow") === "1",
    c = f(i, "bandCol") === "1",
    p = f(i, "firstRow") === "1",
    d = f(i, "lastRow") === "1",
    o = f(i, "firstCol") === "1",
    l = f(i, "lastCol") === "1",
    $ = tt(s, "tr")
      .filter((y) => y.parentElement === s)
      .map((y, x) => {
        const v = f(y, "h") ? Z(f(y, "h")) : 44,
          S = tt(y, "tc")
            .filter((b) => b.parentElement === y)
            .map((b, j) => {
              const M = h(b, "tcPr"),
                w = parseInt(f(b, "gridSpan") || 1),
                F = parseInt(f(b, "rowSpan") || 1),
                A = f(b, "hMerge") === "1",
                R = f(b, "vMerge") === "1",
                P = M ? Rt(M, e, null) : { type: "none" },
                G = M ? h(M, "lnB") : null,
                H = M ? h(M, "lnT") : null,
                N = M ? h(M, "lnL") : null,
                I = M ? h(M, "lnR") : null;
              return {
                fill: P,
                borderBottom: ht(G, e),
                borderTop: ht(H, e),
                borderLeft: ht(N, e),
                borderRight: ht(I, e),
                text: se(h(b, "txBody"), e, n),
                gridSpan: w,
                rowSpan: F,
                hMerge: A,
                vMerge: R,
                isHeader: p && x === 0,
                isLastRow: d && x === -1,
                isFirstCol: o && j === 0,
              };
            });
        return { h: v, cells: S };
      }),
    m = h(s, "tblGrid"),
    L = m ? tt(m, "gridCol").map((y) => Z(f(y, "w"))) : [];
  return {
    kind: "table",
    pos: r,
    rows: $,
    colWidths: L,
    bandRow: a,
    bandCol: c,
    firstRow: p,
    lastRow: d,
    firstCol: o,
    lastCol: l,
  };
}
function ke(t, e, n, s) {
  const r = Lt(t);
  if (!r) return null;
  const i = h(t, "spPr"),
    a = h(t, "nvSpPr") || h(t, "nvCxnSpPr"),
    c = a ? h(a, "cNvSpPr") : null,
    p = c ? f(c, "txBox") === "1" : !1,
    d = a ? h(a, "nvPr") : null,
    o = d ? h(d, "ph") : null,
    l = o ? f(o, "type") || "body" : null,
    $ = o ? f(o, "idx") : null,
    m = Rt(i, e, s),
    L = i ? h(i, "ln") : null,
    y = ht(L, e),
    x = i ? h(i, "prstGeom") : null,
    v = i ? h(i, "custGeom") : null,
    S = x ? f(x, "prst") : v ? "__cust__" : "rect",
    b = x ? tt(x, "gd") : [],
    j = v ? ne(v, r.w, r.h) : null,
    M = ee(i, e),
    w = (() => {
      const F = i ? h(i, "solidFill") : null;
      if (!F) return null;
      const A = h(F, "alpha");
      return A ? parseInt(f(A, "val") || 1e5) / 1e5 : null;
    })();
  return {
    kind: "shape",
    pos: r,
    fill: m,
    border: y,
    prst: S,
    avLst: b,
    custPath: j,
    effects: M,
    opacity: w,
    phType: l,
    phIdx: $,
    text: se(h(t, "txBody"), e, n, p),
  };
}
function Ce(t, e, n) {
  const s = Lt(t);
  if (!s) return null;
  const r = h(t, "blipFill"),
    i = r ? h(r, "blip") : null,
    a = Gt(i),
    c = h(t, "spPr"),
    p = c ? h(c, "prstGeom") : null,
    d = c ? h(c, "custGeom") : null,
    o = p ? f(p, "prst") : null,
    l = p ? tt(p, "gd") : [],
    $ = d ? ne(d, s.w, s.h) : null,
    m =
      o === "ellipse"
        ? "50%"
        : o === "roundRect"
          ? `${Math.min(s.w, s.h) * 0.12}px`
          : "0",
    L = c ? h(c, "ln") : null,
    y = ee(c, e),
    x = r ? h(r, "srcRect") : null,
    v = x
      ? {
          l: parseInt(f(x, "l") || 0) / 1e5,
          t: parseInt(f(x, "t") || 0) / 1e5,
          r: parseInt(f(x, "r") || 0) / 1e5,
          b: parseInt(f(x, "b") || 0) / 1e5,
        }
      : null;
  return (
    i && h(i, "lumMod"),
    i && h(i, "lumOff"),
    {
      kind: "pic",
      pos: s,
      src: n?.[a] || null,
      stretch: r ? !!h(r, "stretch") : !0,
      clipR: m,
      prst: o,
      avLst: l,
      custPath: $,
      effects: y,
      srcRect: v,
      border: ht(L, e),
    }
  );
}
function we(t, e) {
  const n = Lt(t);
  if (!n) return null;
  const s = h(t, "spPr"),
    r = s ? h(s, "ln") : null,
    i = s ? h(s, "prstGeom") : null,
    a = i ? f(i, "prst") : "line";
  return { kind: "connector", pos: n, line: ht(r, e), prst: a };
}
function Fe(t, e, n, s) {
  return {
    kind: "group",
    pos: Lt(t) || { x: 0, y: 0, w: 0, h: 0, rot: 0, flipH: !1, flipV: !1 },
    children: It(t, e, n, s),
  };
}
function It(t, e, n, s) {
  const r = [];
  for (const i of Array.from(t.children)) {
    const a = i.localName;
    if (a === "sp") {
      const c = ke(i, e, n, s);
      c && r.push(c);
    } else if (a === "pic") {
      const c = Ce(i, e, s);
      c && r.push(c);
    } else if (a === "cxnSp") {
      const c = we(i, e);
      c && r.push(c);
    } else if (a === "graphicFrame") {
      const c = je(i, e, n);
      c && r.push(c);
    } else if (a === "grpSp") {
      const c = Fe(i, e, n, s);
      c && r.push(c);
    } else if (a === "AlternateContent") {
      const c = Array.from(i.children).find((p) => p.localName === "Fallback");
      if (c) {
        const p = It(c, e, n, s);
        r.push(...p);
      }
    }
  }
  return r;
}
function Jt(t, e, n, s) {
  if (!t) return { bg: { type: "none" }, shapes: [] };
  const i = $t(t).documentElement,
    a = h(i, "bg");
  let c = { type: "none" };
  if (a) {
    const p = h(a, "bgPr");
    p && (c = Rt(p, e, s));
    const d = h(a, "bgRef");
    if (d && c.type === "none") {
      const o = Y(d, e);
      o && (c = { type: "solid", color: o });
    }
  }
  return { bg: c, shapes: It(h(i, "spTree") || { children: [] }, e, n, s) };
}
function Re(t, e, n, s, r, i) {
  const c = $t(t).documentElement;
  let p = r?.bg || { type: "none" };
  const d = h(c, "bg");
  if (d) {
    const l = h(d, "bgPr");
    if (l) {
      const m = Rt(l, e, s);
      m.type !== "none" && (p = m);
    }
    const $ = h(d, "bgRef");
    if ($) {
      const m = Y($, e);
      m && (p = { type: "solid", color: m });
    }
  } else i?.bg?.type !== "none" && (p = i.bg);
  const o = h(c, "spTree");
  return { bg: p, shapes: o ? It(o, e, n, s) : [], theme: e, fonts: n };
}
function Ie(t) {
  const e = {},
    n = {};
  if (!t) return { colors: e, fonts: n };
  const s = $t(t),
    r = h(s.documentElement, "clrScheme");
  r &&
    [
      "dk1",
      "lt1",
      "dk2",
      "lt2",
      "accent1",
      "accent2",
      "accent3",
      "accent4",
      "accent5",
      "accent6",
      "hlink",
      "folHlink",
    ].forEach((a) => {
      const c = Array.from(r.children).find((d) => d.localName === a);
      if (!c) return;
      const p = c.firstElementChild;
      p &&
        (p.localName === "srgbClr"
          ? (e[a] = "#" + f(p, "val"))
          : p.localName === "sysClr" && (e[a] = "#" + f(p, "lastClr")));
    });
  const i = h(s.documentElement, "fontScheme");
  if (i) {
    const a = h(i, "majorFont"),
      c = h(i, "minorFont");
    if (a) {
      const p = h(a, "latin");
      p && (n.major = f(p, "typeface"));
    }
    if (c) {
      const p = h(c, "latin");
      p && (n.minor = f(p, "typeface"));
    }
  }
  return { colors: e, fonts: n };
}
async function Ht(t) {
  if (!t) return null;
  const e = (t.split(";")[0] || "").split(":")[1] || "";
  return e === "image/jpeg" || e === "image/jpg"
    ? { url: t, fmt: "JPEG" }
    : e === "image/svg+xml" ||
        e === "image/tiff" ||
        e === "image/tif" ||
        e === "image/bmp" ||
        e === "image/webp"
      ? new Promise((n) => {
          const s = new Image();
          if (
            ((s.onload = () => {
              const r = document.createElement("canvas");
              ((r.width = Math.max(s.naturalWidth || 400, 1)),
                (r.height = Math.max(s.naturalHeight || 300, 1)),
                r.getContext("2d").drawImage(s, 0, 0),
                n({ url: r.toDataURL("image/png"), fmt: "PNG" }));
            }),
            (s.onerror = () => n(null)),
            e === "image/svg+xml")
          ) {
            const r = new Blob([atob(t.split(",")[1])], {
              type: "image/svg+xml",
            });
            s.src = URL.createObjectURL(r);
          } else s.src = t;
        })
      : { url: t, fmt: "PNG" };
}
function Wt(t) {
  if (!t || t.type === "none") return { background: "transparent" };
  if (t.type === "solid") return { background: t.color };
  if (t.type === "gradient" && t.stops?.length) {
    if (t.isRadial) {
      const e = ((t.cx ?? 0.5) * 100).toFixed(0) + "%",
        n = ((t.cy ?? 0.5) * 100).toFixed(0) + "%";
      return {
        background: `radial-gradient(ellipse at ${e} ${n},${t.stops.map((s) => `${s.color} ${(s.pos * 100).toFixed(1)}%`).join(",")})`,
      };
    }
    return {
      background: `linear-gradient(${t.angle}deg,${t.stops.map((e) => `${e.color} ${(e.pos * 100).toFixed(1)}%`).join(",")})`,
    };
  }
  if (t.type === "image" && t.src) {
    if (t.srcRect) {
      const { l: e, t: n, r: s, b: r } = t.srcRect,
        i = 100 / (1 - e - s),
        a = 100 / (1 - n - r),
        c = -(e * i).toFixed(2) + "%",
        p = -(n * a).toFixed(2) + "%";
      return {
        backgroundImage: `url(${t.src})`,
        backgroundSize: `${i.toFixed(2)}% ${a.toFixed(2)}%`,
        backgroundPosition: `${c} ${p}`,
        backgroundRepeat: "no-repeat",
      };
    }
    return {
      backgroundImage: `url(${t.src})`,
      backgroundSize: t.tile ? "auto" : "100% 100%",
      backgroundRepeat: t.tile ? "repeat" : "no-repeat",
      backgroundPosition: "center",
    };
  }
  return { background: "transparent" };
}
function re(t) {
  if (!t) return {};
  const e = {};
  return (
    t.filters?.length && (e.filter = t.filters.join(" ")),
    t.boxShadow?.length && (e.boxShadow = t.boxShadow.join(", ")),
    e
  );
}
function zt({ text: t }) {
  if (!t?.paragraphs?.length) return null;
  const {
      justifyContent: e,
      lIns: n,
      rIns: s,
      tIns: r,
      bIns: i,
      isVert: a,
      paragraphs: c,
      fontScale: p,
    } = t,
    d = p || 1,
    o = {};
  return u.jsx("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: a ? "row" : "column",
      justifyContent: e,
      padding: `${r}px ${s}px ${i}px ${n}px`,
      overflow: "hidden",
      writingMode: a ? "vertical-rl" : void 0,
      boxSizing: "border-box",
    },
    children: c.map((l, $) => {
      const m = l.lvl || 0,
        L = l.marL ? l.marL : m * 18,
        y = l.indent || 0;
      l.bullet?.autoNum &&
        ((o[m] = (o[m] || 0) + 1),
        Object.keys(o).forEach((v) => {
          parseInt(v) > m && delete o[v];
        }));
      const x = l.bullet
        ? l.bullet.autoFn
          ? l.bullet.autoFn(o[m] || 1)
          : l.bullet.char
        : null;
      return u.jsxs(
        "p",
        {
          style: {
            margin: 0,
            marginTop: $ > 0 ? l.marginTop : 0,
            marginBottom: l.marginBottom,
            textAlign: l.textAlign,
            lineHeight: l.lineHeight,
            paddingLeft: L > 0 ? `${L}px` : void 0,
            textIndent: y ? `${y}px` : void 0,
            wordBreak: "break-word",
            overflowWrap: "break-word",
            minHeight: l.runs.some((v) => !v.br && v.text) ? void 0 : "0.5em",
            whiteSpace: "pre-wrap",
            position: "relative",
          },
          children: [
            x &&
              l.runs.some((v) => !v.br && v.text) &&
              u.jsx("span", {
                style: {
                  position: "absolute",
                  left: `-${L > 0 ? Math.min(L, 28) : 16}px`,
                  color: l.bullet.color || "inherit",
                  fontFamily: l.bullet.fontFamily
                    ? Et(l.bullet.fontFamily)
                    : "inherit",
                  fontSize: l.runs[0]?.style?.fontSize
                    ? `${l.runs[0].style.fontSize * d * (l.bullet.sizeFactor || 1)}pt`
                    : "inherit",
                  userSelect: "none",
                  lineHeight: l.lineHeight,
                },
                children: x,
              }),
            l.runs.map((v, S) => {
              if (v.br) return u.jsx("br", {}, S);
              const b = v.style || {},
                j = b.fontSize ? b.fontSize * d : null,
                M = b.baselineShift || 0,
                w = M > 0.3,
                F = M < -0.1,
                A = w ? "super" : F ? "sub" : void 0,
                R = w || F ? 0.65 : 1,
                P =
                  [b.underline && "underline", b.strike && "line-through"]
                    .filter(Boolean)
                    .join(" ") || "none";
              return u.jsx(
                "span",
                {
                  style: {
                    fontWeight:
                      b.bold === !0 ? "700" : b.bold === !1 ? "400" : void 0,
                    fontStyle: b.italic ? "italic" : void 0,
                    textDecoration: P !== "none" ? P : void 0,
                    textDecorationStyle:
                      b.underlineStyle === "dbl"
                        ? "double"
                        : b.underlineStyle === "dotted" ||
                            b.underlineStyle === "dotDotDash"
                          ? "dotted"
                          : b.underlineStyle === "dash" ||
                              b.underlineStyle === "dashHeavy"
                            ? "dashed"
                            : b.underlineStyle === "wavy" ||
                                b.underlineStyle === "wavyHeavy"
                              ? "wavy"
                              : void 0,
                    fontSize: j ? `${j * R}pt` : void 0,
                    color: b.color || void 0,
                    backgroundColor: b.highlight || void 0,
                    fontFamily: b.fontFamily ? Et(b.fontFamily) : void 0,
                    textTransform:
                      b.cap === "uppercase"
                        ? "uppercase"
                        : b.cap === "smallCaps"
                          ? "none"
                          : void 0,
                    fontVariant: b.cap === "smallCaps" ? "small-caps" : void 0,
                    verticalAlign: A,
                    whiteSpace: "pre-wrap",
                    letterSpacing: b.charSpacing
                      ? `${b.charSpacing * 0.1}pt`
                      : void 0,
                    textShadow: b.textShadow || void 0,
                  },
                  children:
                    b.cap === "uppercase" ? v.text.toUpperCase() : v.text,
                },
                S,
              );
            }),
          ],
        },
        $,
      );
    }),
  });
}
function Ae({ shape: t }) {
  const {
      pos: e,
      fill: n,
      border: s,
      prst: r,
      avLst: i,
      custPath: a,
      text: c,
      effects: p,
      opacity: d,
    } = t,
    { x: o, y: l, w: $, h: m, rot: L, flipH: y, flipV: x } = e,
    v = a || (r && r !== "__cust__" ? Ft(r, $, m, i) : null),
    S = r === "ellipse" || r === "circle",
    b = [];
  (L && b.push(`rotate(${L}deg)`),
    y && b.push("scaleX(-1)"),
    x && b.push("scaleY(-1)"));
  const j = b.join(" ") || void 0,
    M = `sh${Math.abs(Math.round(o * 13 + l * 7 + $))}`,
    w = n.type === "gradient" && n.stops?.length,
    F = n.type === "image" && n.src,
    A = n.type === "solid",
    R = re(p),
    P =
      s.color && s.width
        ? `${s.width}px ${s.dash === "dashed" ? "dashed" : "solid"} ${s.color}`
        : "none";
  if (!v && !S) {
    const z =
      r === "roundRect" && i?.length
        ? Math.min($, m) *
          (parseInt(
            i[0]?.getAttribute?.("fmla")?.match(/\d+/)?.[0] || "16667",
          ) /
            1e5)
        : 0;
    return u.jsx("div", {
      style: {
        position: "absolute",
        left: o,
        top: l,
        width: $,
        height: m,
        transform: j,
        transformOrigin: "center center",
        ...Wt(n),
        border: P,
        borderRadius: z > 0 ? `${z}px` : void 0,
        overflow: "hidden",
        boxSizing: "border-box",
        opacity: d ?? void 0,
        ...R,
      },
      children: c && u.jsx(zt, { text: c }),
    });
  }
  const G = s.color && s.width ? s.color : "none",
    H = s.dashArr || void 0,
    N = w ? `url(#${M}g)` : F ? `url(#${M}i)` : A ? n.color : "none",
    I = w
      ? n.isRadial
        ? u.jsx("radialGradient", {
            id: `${M}g`,
            cx: `${(n.cx ?? 0.5) * 100}%`,
            cy: `${(n.cy ?? 0.5) * 100}%`,
            r: "70%",
            fx: `${(n.cx ?? 0.5) * 100}%`,
            fy: `${(n.cy ?? 0.5) * 100}%`,
            children: n.stops.map((z, U) =>
              u.jsx(
                "stop",
                { offset: `${(z.pos * 100).toFixed(1)}%`, stopColor: z.color },
                U,
              ),
            ),
          })
        : u.jsx("linearGradient", {
            id: `${M}g`,
            x1:
              n.angle === 0 || n.angle <= 90 ? "0%" : (n.angle <= 180, "100%"),
            y1:
              n.angle === 0
                ? "0%"
                : n.angle <= 90 || n.angle <= 180
                  ? "100%"
                  : "0%",
            x2:
              n.angle === 0 || n.angle <= 90 ? "100%" : (n.angle <= 180, "0%"),
            y2:
              n.angle === 0 || n.angle <= 90 || n.angle <= 180 ? "0%" : "100%",
            gradientUnits: "objectBoundingBox",
            children: n.stops.map((z, U) =>
              u.jsx(
                "stop",
                { offset: `${(z.pos * 100).toFixed(1)}%`, stopColor: z.color },
                U,
              ),
            ),
          })
      : null;
  return u.jsxs("div", {
    style: {
      position: "absolute",
      left: o,
      top: l,
      width: $,
      height: m,
      transform: j,
      transformOrigin: "center center",
      overflow: "visible",
      opacity: d ?? void 0,
      ...R,
    },
    children: [
      u.jsxs("svg", {
        width: $,
        height: m,
        viewBox: `0 0 ${$} ${m}`,
        style: { position: "absolute", top: 0, left: 0, overflow: "visible" },
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          u.jsxs("defs", {
            children: [
              I,
              F &&
                u.jsx("pattern", {
                  id: `${M}i`,
                  width: "100%",
                  height: "100%",
                  patternUnits: "objectBoundingBox",
                  children: n.srcRect
                    ? u.jsx("image", {
                        href: n.src,
                        x: `${(-n.srcRect.l * 100) / (1 - n.srcRect.l - n.srcRect.r)}%`,
                        y: `${(-n.srcRect.t * 100) / (1 - n.srcRect.t - n.srcRect.b)}%`,
                        width: `${100 / (1 - n.srcRect.l - n.srcRect.r)}%`,
                        height: `${100 / (1 - n.srcRect.t - n.srcRect.b)}%`,
                        preserveAspectRatio: "none",
                      })
                    : u.jsx("image", {
                        href: n.src,
                        width: "100%",
                        height: "100%",
                        preserveAspectRatio: "xMidYMid slice",
                      }),
                }),
            ],
          }),
          S
            ? u.jsx("ellipse", {
                cx: $ / 2,
                cy: m / 2,
                rx: $ / 2 - (s.width || 0) / 2,
                ry: m / 2 - (s.width || 0) / 2,
                fill: N,
                stroke: G,
                strokeWidth: s.width || 0,
                strokeDasharray: H,
              })
            : u.jsx("path", {
                d: v,
                fill: N,
                stroke: G,
                strokeWidth: s.width || 0,
                strokeDasharray: H,
                strokeLinecap: s.cap || "butt",
                strokeLinejoin: s.join || "miter",
              }),
        ],
      }),
      c &&
        u.jsx("div", {
          style: { position: "absolute", inset: 0, overflow: "hidden" },
          children: u.jsx(zt, { text: c }),
        }),
    ],
  });
}
function Pe({ shape: t }) {
  const {
      pos: e,
      src: n,
      clipR: s,
      border: r,
      srcRect: i,
      effects: a,
      prst: c,
      avLst: p,
      custPath: d,
    } = t,
    { x: o, y: l, w: $, h: m, rot: L, flipH: y, flipV: x } = e,
    v = [];
  (L && v.push(`rotate(${L}deg)`),
    y && v.push("scaleX(-1)"),
    x && v.push("scaleY(-1)"));
  const S = v.join(" ") || void 0,
    b = re(a),
    M =
      d || (c && c !== "rect" && c !== "roundRect" && Ft(c, $, m, p || []))
        ? `clip${Math.abs(Math.round(o + l + $))}`
        : null,
    w = M ? d || Ft(c, $, m, p || []) : null;
  if (!n)
    return u.jsx("div", {
      style: {
        position: "absolute",
        left: o,
        top: l,
        width: $,
        height: m,
        background: "#e5e5e5",
        transform: S,
        transformOrigin: "center center",
        borderRadius: s,
        ...b,
        border: r.color && r.width ? `${r.width}px solid ${r.color}` : "none",
      },
    });
  let F = {
    width: "100%",
    height: "100%",
    display: "block",
    pointerEvents: "none",
  };
  if (i) {
    const { l: A, t: R, r: P, b: G } = i,
      H = 1 / (1 - A - P),
      N = 1 / (1 - R - G);
    F = {
      ...F,
      width: `${H * 100}%`,
      height: `${N * 100}%`,
      marginLeft: `${-A * H * 100}%`,
      marginTop: `${-R * N * 100}%`,
      objectFit: "fill",
    };
  } else F.objectFit = "fill";
  return u.jsx("div", {
    style: {
      position: "absolute",
      left: o,
      top: l,
      width: $,
      height: m,
      overflow: "hidden",
      borderRadius: s || void 0,
      border: r.color && r.width ? `${r.width}px solid ${r.color}` : "none",
      transform: S,
      transformOrigin: "center center",
      ...b,
      ...(M ? {} : {}),
    },
    children: w
      ? u.jsxs("svg", {
          width: $,
          height: m,
          style: { position: "absolute", top: 0, left: 0 },
          children: [
            u.jsx("defs", {
              children: u.jsx("clipPath", {
                id: M,
                children: u.jsx("path", { d: w }),
              }),
            }),
            u.jsx("image", {
              href: n,
              width: $,
              height: m,
              clipPath: `url(#${M})`,
              preserveAspectRatio: "xMidYMid slice",
            }),
          ],
        })
      : u.jsx("img", { src: n, alt: "", style: F }),
  });
}
function Te({ shape: t }) {
  const { pos: e, line: n, prst: s } = t,
    { x: r, y: i, w: a, h: c, rot: p, flipH: d, flipV: o } = e,
    l = n.width || 1,
    $ = n.color || "#333",
    m = Math.max(l * 2, Math.abs(a) + l * 2),
    L = Math.max(l * 2, Math.abs(c) + l * 2),
    y = l,
    x = d ? Math.abs(a) + y : y,
    v = o ? Math.abs(c) + y : y,
    S = d ? y : Math.abs(a) + y,
    b = o ? y : Math.abs(c) + y,
    j = s && (s.includes("bent") || s.includes("elbow") || s.includes("Elbow")),
    M = s && s.includes("curved");
  let w = "";
  if (j) {
    const P = (x + S) / 2;
    w = `M${x},${v} L${P},${v} L${P},${b} L${S},${b}`;
  } else if (M) {
    const P = (x + S) / 2;
    w = `M${x},${v} C${P},${v} ${P},${b} ${S},${b}`;
  } else w = `M${x},${v} L${S},${b}`;
  const F = Math.max(6, l * 3),
    A = Math.atan2(b - v, S - x),
    R = (P, G, H) => {
      const N = H + Math.PI * 0.8,
        I = H - Math.PI * 0.8;
      return `M${P},${G} L${(P + F * Math.cos(N)).toFixed(1)},${(G + F * Math.sin(N)).toFixed(1)} L${(P + F * Math.cos(I)).toFixed(1)},${(G + F * Math.sin(I)).toFixed(1)} Z`;
    };
  return u.jsxs("svg", {
    style: {
      position: "absolute",
      left: r - y,
      top: i - y,
      overflow: "visible",
    },
    width: m,
    height: L,
    children: [
      u.jsx("path", {
        d: w,
        fill: "none",
        stroke: $,
        strokeWidth: l,
        strokeDasharray: n.dashArr || (n.dash === "dashed" ? "8,4" : void 0),
        strokeLinecap: n.cap || "round",
        strokeLinejoin: "round",
      }),
      n.tail &&
        n.tail !== "none" &&
        u.jsx("path", { d: R(S, b, A), fill: $, stroke: "none" }),
      n.head &&
        n.head !== "none" &&
        u.jsx("path", { d: R(x, v, A + Math.PI), fill: $, stroke: "none" }),
    ],
  });
}
function De({ shape: t }) {
  const {
      pos: e,
      rows: n,
      colWidths: s,
      bandRow: r,
      bandCol: i,
      firstRow: a,
      lastRow: c,
      firstCol: p,
      lastCol: d,
    } = t,
    { x: o, y: l } = e,
    $ = s.reduce((L, y) => L + y, 0),
    m = n.reduce((L, y) => L + y.h, 0);
  return u.jsx("div", {
    style: { position: "absolute", left: o, top: l, width: $, height: m },
    children: u.jsxs("table", {
      style: { borderCollapse: "collapse", tableLayout: "fixed", width: $ },
      children: [
        u.jsx("colgroup", {
          children: s.map((L, y) => u.jsx("col", { style: { width: L } }, y)),
        }),
        u.jsx("tbody", {
          children: n.map((L, y) =>
            u.jsx(
              "tr",
              {
                style: { height: L.h },
                children: L.cells.map((x, v) => {
                  if (x.hMerge || x.vMerge) return null;
                  const S = Wt(x.fill),
                    b = x.fill?.type !== "none",
                    j = a && y === 0;
                  c && n.length - 1;
                  const M = r && y % 2 === 1 && !j,
                    w = i && v % 2 === 1;
                  let F = "transparent";
                  b
                    ? (F = S.background || "transparent")
                    : j
                      ? (F = "rgba(0,0,0,0.8)")
                      : M
                        ? (F = "rgba(0,0,0,0.05)")
                        : w && (F = "rgba(0,0,0,0.03)");
                  const A = (R) =>
                    R?.color && R.width > 0
                      ? `${R.width}px ${R.dash === "dashed" ? "dashed" : "solid"} ${R.color}`
                      : "none";
                  return u.jsx(
                    "td",
                    {
                      colSpan: x.gridSpan || 1,
                      rowSpan: x.rowSpan || 1,
                      style: {
                        background: F,
                        borderTop: A(x.borderTop),
                        borderBottom: A(x.borderBottom),
                        borderLeft: A(x.borderLeft),
                        borderRight: A(x.borderRight),
                        verticalAlign:
                          x.text?.justifyContent === "flex-end"
                            ? "bottom"
                            : x.text?.justifyContent === "center"
                              ? "middle"
                              : "top",
                        padding: 0,
                        position: "relative",
                        overflow: "hidden",
                        height: L.h,
                      },
                      children:
                        x.text &&
                        u.jsx("div", {
                          style: { position: "relative", height: L.h },
                          children: u.jsx(zt, {
                            text: {
                              ...x.text,
                              paragraphs: x.text.paragraphs.map((R) => ({
                                ...R,
                                runs: R.runs.map((P) => ({
                                  ...P,
                                  style: {
                                    ...P.style,
                                    color:
                                      P.style?.color ||
                                      (j ? "#ffffff" : void 0),
                                  },
                                })),
                              })),
                            },
                          }),
                        }),
                    },
                    v,
                  );
                }),
              },
              y,
            ),
          ),
        }),
      ],
    }),
  });
}
function Ne({ shape: t }) {
  const { pos: e, children: n } = t,
    { x: s, y: r, w: i, h: a, rot: c, flipH: p, flipV: d } = e,
    o = [c && `rotate(${c}deg)`, p && "scaleX(-1)", d && "scaleY(-1)"]
      .filter(Boolean)
      .join(" ");
  return u.jsx("div", {
    style: {
      position: "absolute",
      left: s,
      top: r,
      width: i,
      height: a,
      transform: o || void 0,
      transformOrigin: "center center",
    },
    children: n.map((l, $) => u.jsx(oe, { shape: l }, $)),
  });
}
function oe({ shape: t }) {
  return t
    ? t.kind === "shape"
      ? u.jsx(Ae, { shape: t })
      : t.kind === "pic"
        ? u.jsx(Pe, { shape: t })
        : t.kind === "connector"
          ? u.jsx(Te, { shape: t })
          : t.kind === "table"
            ? u.jsx(De, { shape: t })
            : t.kind === "group"
              ? u.jsx(Ne, { shape: t })
              : null
    : null;
}
function kt({ slide: t, width: e, height: n, className: s = "" }) {
  const r = t?.bg ? Wt(t.bg) : { background: "#ffffff" };
  return u.jsx("div", {
    className: `pptx-slide${s ? " " + s : ""}`,
    style: {
      position: "relative",
      width: e,
      height: n,
      overflow: "hidden",
      flexShrink: 0,
      fontFamily: "Calibri,'Segoe UI',Arial,sans-serif",
      fontSize: "14pt",
      color: "#000",
      ...r,
      boxSizing: "border-box",
    },
    children: t?.shapes?.map((i, a) => u.jsx(oe, { shape: i }, a)),
  });
}
function _(t) {
  if (!t) return null;
  if (t.startsWith("rgba") || t.startsWith("rgb")) {
    const e = t.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return e ? { r: +e[1], g: +e[2], b: +e[3] } : null;
  }
  if (t.startsWith("#")) {
    let e = t.slice(1);
    return (
      e.length === 3 &&
        (e = e
          .split("")
          .map((n) => n + n)
          .join("")),
      e.length < 6
        ? null
        : {
            r: parseInt(e.slice(0, 2), 16),
            g: parseInt(e.slice(2, 4), 16),
            b: parseInt(e.slice(4, 6), 16),
          }
    );
  }
  return null;
}
function Ee(t, e) {
  if (!t?.length) return "#000000";
  if (e <= t[0].pos) return t[0].color;
  if (e >= t[t.length - 1].pos) return t[t.length - 1].color;
  for (let n = 1; n < t.length; n++)
    if (e <= t[n].pos) {
      const s = t[n - 1],
        r = t[n],
        i = (e - s.pos) / Math.max(1e-4, r.pos - s.pos),
        a = _(s.color) || { r: 0, g: 0, b: 0 },
        c = _(r.color) || { r: 0, g: 0, b: 0 };
      return Bt(
        a.r + (c.r - a.r) * i,
        a.g + (c.g - a.g) * i,
        a.b + (c.b - a.b) * i,
      );
    }
  return t[t.length - 1].color;
}
function Zt(t, e, n, s, r, i) {
  const { stops: a, angle: c } = e;
  if (!a?.length) return;
  const p = 120,
    d = (c * Math.PI) / 180,
    o = Math.abs(Math.cos(d)) > Math.abs(Math.sin(d));
  for (let l = 0; l < p; l++) {
    const $ = (l + 0.5) / p,
      m = _(Ee(a, $));
    m &&
      (t.setFillColor(m.r, m.g, m.b),
      o
        ? t.rect(g(n + (r * l) / p), g(s), g(r / p + 0.5), g(i), "F")
        : t.rect(g(n), g(s + (i * l) / p), g(r), g(i / p + 0.5), "F"));
  }
}
function ze(t, e, n, s, r) {
  try {
    t.internal.write(
      `${g(e).toFixed(3)} ${g(n).toFixed(3)} ${g(s).toFixed(3)} ${g(r).toFixed(3)} re W n`,
    );
  } catch {}
}
function ie(t, e, n, s) {
  const r = [];
  let i = [],
    a = 0;
  const c = s || 1,
    p = () => {
      if (!i.length) return;
      const d = i.reduce(
        (o, l) => Math.max(o, (l.style?.fontSize || n) * c),
        n * c,
      );
      (r.push({ runs: i, lineH: d * 1.35 }), (i = []), (a = 0));
    };
  for (const d of t.runs) {
    if (d.br) {
      p();
      continue;
    }
    const { text: o = "", style: l = {} } = d;
    if (!o) continue;
    const $ = (l?.fontSize || n) * c,
      m = o.split(/(\s+)/).filter(Boolean);
    for (const L of m) {
      const y = wt(L, $, l?.bold, l?.italic, l?.fontFamily);
      (a + y > e && i.length > 0 && L.trim() && p(),
        i.push({ text: L, style: { ...l, fontSize: $ } }),
        (a += y));
    }
  }
  return (p(), r.length ? r : [{ runs: [], lineH: n * 1.35 }]);
}
function Ge(t) {
  if (!t?.paragraphs?.length) return 0;
  const { tIns: e, bIns: n, paragraphs: s, fontScale: r } = t,
    i = 18;
  let a = e + n;
  for (const c of s) {
    const p = c.runs.find(($) => $.style?.fontSize)?.style?.fontSize || i,
      d = c.lineHeight,
      o = typeof d == "number" ? d : 1.2,
      l = ie(c, 400, p, r || 1);
    a += l.reduce(($, m) => $ + m.lineH * o, 0) + c.marginTop + c.marginBottom;
  }
  return a;
}
function Be(t, e) {
  if (!t?.paragraphs?.length || !e) return 1;
  let n = 1;
  for (let s = 1; s >= 0.4; s -= 0.05) {
    const r = { ...t, fontScale: s };
    if (Ge(r) <= e) {
      n = s;
      break;
    }
  }
  return n;
}
function ae(t, e, n) {
  if (!e?.paragraphs?.length) return;
  const {
      justifyContent: s,
      lIns: r,
      rIns: i,
      tIns: a,
      bIns: c,
      paragraphs: p,
      fontScale: d,
      autoFit: o,
    } = e,
    l = n.x + r,
    $ = n.w - r - i,
    m = n.h - a - c;
  if ($ <= 0 || m <= 0) return;
  const L = 18;
  let y = d || 1;
  (o === "sp" && (y = Be(e, n.h)),
    t.saveGraphicsState(),
    ze(t, n.x, n.y, n.w, n.h));
  const x = p.map((b) => {
      const j =
          (b.runs.find((R) => R.style?.fontSize)?.style?.fontSize || L) * y,
        M = b.lineHeight,
        w =
          typeof M == "number"
            ? M
            : typeof M == "string" && M.endsWith("pt")
              ? (parseFloat(M) / j) * 1.2
              : 1.2,
        F = ie(b, $, L, y),
        A =
          F.reduce((R, P) => R + P.lineH * w, 0) + b.marginTop + b.marginBottom;
      return { para: b, vlines: F, paraH: A, defFs: j, lhFactor: w };
    }),
    v = x.reduce((b, j) => b + j.paraH, 0);
  let S;
  s === "center"
    ? (S = n.y + a + Math.max(0, (m - v) / 2))
    : s === "flex-end"
      ? (S = n.y + n.h - c - v)
      : (S = n.y + a);
  for (const { para: b, vlines: j, lhFactor: M, defFs: w } of x) {
    S += b.marginTop;
    for (let F = 0; F < j.length; F++) {
      const A = j[F],
        R = A.lineH,
        P = A.runs.reduce(
          (N, I) =>
            N +
            wt(
              I.text,
              I.style?.fontSize || w,
              I.style?.bold,
              I.style?.italic,
              I.style?.fontFamily,
            ),
          0,
        );
      let G;
      if (
        (b.textAlign === "center"
          ? (G = l + ($ - P) / 2)
          : b.textAlign === "right"
            ? (G = l + $ - P)
            : (G = l + (b.marL || 0)),
        b.bullet && F === 0 && A.runs.length > 0)
      ) {
        const N = w * (b.bullet.sizeFactor || 1),
          I = b.bullet.color ? _(b.bullet.color) : null;
        (I ? t.setTextColor(I.r, I.g, I.b) : t.setTextColor(0, 0, 0),
          t.setFont("helvetica", "normal"),
          t.setFontSize(N));
        const z = b.bullet.char || "•",
          U = wt(z + " ", N, !1, !1, null);
        (t.text(z, g(G), g(S + R), { baseline: "bottom" }), (G += U));
      }
      let H = G;
      for (const N of A.runs) {
        if (!N.text) continue;
        const I = N.style || {},
          z = I.fontSize || w,
          { fam: U, style: C } = xe(I.fontFamily, I.bold, I.italic);
        (t.setFont(U, C), t.setFontSize(z));
        const k = I.color ? _(I.color) : null;
        k ? t.setTextColor(k.r, k.g, k.b) : t.setTextColor(0, 0, 0);
        const T = I.cap === "uppercase" ? N.text.toUpperCase() : N.text,
          D = (I.baselineShift || 0) * R;
        t.text(T, g(H), g(S + R - D), { baseline: "bottom" });
        const E = wt(N.text, z, I.bold, I.italic, I.fontFamily);
        if (I.underline) {
          const W = k || { r: 0, g: 0, b: 0 };
          (t.setDrawColor(W.r, W.g, W.b),
            t.setLineWidth(Math.max(0.3, g(z * 0.07))),
            t.line(g(H), g(S + R + 1), g(H + E), g(S + R + 1)));
        }
        if (I.strike) {
          const W = k || { r: 0, g: 0, b: 0 };
          (t.setDrawColor(W.r, W.g, W.b),
            t.setLineWidth(Math.max(0.3, g(z * 0.07))),
            t.line(g(H), g(S + R * 0.45), g(H + E), g(S + R * 0.45)));
        }
        H += E;
      }
      S += R * M;
    }
    S += b.marginBottom;
  }
  t.restoreGraphicsState();
}
function He(t) {
  const e = [];
  let n = 0,
    s = 0;
  const r = /([MLHVCSQTAZmlhvcsqtaz])\s*([-\d.e,\s]*)/g;
  let i;
  for (; (i = r.exec(t));) {
    const a = i[1],
      c = a.toUpperCase(),
      p = a !== c,
      d = i[2]
        .trim()
        .split(/[\s,]+/)
        .filter(Boolean)
        .map(Number);
    switch (c) {
      case "M":
        for (let o = 0; o < d.length; o += 2)
          ((n = p ? n + d[o] : d[o]),
            (s = p ? s + d[o + 1] : d[o + 1]),
            e.push([n, s]));
        break;
      case "L":
        for (let o = 0; o < d.length; o += 2)
          ((n = p ? n + d[o] : d[o]),
            (s = p ? s + d[o + 1] : d[o + 1]),
            e.push([n, s]));
        break;
      case "H":
        d.forEach((o) => {
          ((n = p ? n + o : o), e.push([n, s]));
        });
        break;
      case "V":
        d.forEach((o) => {
          ((s = p ? s + o : o), e.push([n, s]));
        });
        break;
      case "C":
        for (let o = 0; o < d.length; o += 6) {
          const [l, $, m, L, y, x] = [
            p ? n + d[o] : d[o],
            p ? s + d[o + 1] : d[o + 1],
            p ? n + d[o + 2] : d[o + 2],
            p ? s + d[o + 3] : d[o + 3],
            p ? n + d[o + 4] : d[o + 4],
            p ? s + d[o + 5] : d[o + 5],
          ];
          for (let v = 0.1; v <= 1.01; v += 0.1) {
            const S = 1 - v;
            e.push([
              S ** 3 * n + 3 * S ** 2 * v * l + 3 * S * v ** 2 * m + v ** 3 * y,
              S ** 3 * s + 3 * S ** 2 * v * $ + 3 * S * v ** 2 * L + v ** 3 * x,
            ]);
          }
          ((n = y), (s = x));
        }
        break;
      case "Q":
        for (let o = 0; o < d.length; o += 4) {
          const [l, $, m, L] = [
            p ? n + d[o] : d[o],
            p ? s + d[o + 1] : d[o + 1],
            p ? n + d[o + 2] : d[o + 2],
            p ? s + d[o + 3] : d[o + 3],
          ];
          for (let y = 0.15; y <= 1.01; y += 0.15) {
            const x = 1 - y;
            e.push([
              x ** 2 * n + 2 * x * y * l + y ** 2 * m,
              x ** 2 * s + 2 * x * y * $ + y ** 2 * L,
            ]);
          }
          ((n = m), (s = L));
        }
        break;
      case "A":
        {
          const o = p ? n + d[5] : d[5],
            l = p ? s + d[6] : d[6];
          for (let $ = 1; $ <= 10; $++) {
            const m = $ / 10;
            e.push([n + (o - n) * m, s + (l - s) * m]);
          }
          ((n = o), (s = l));
        }
        break;
    }
  }
  return e;
}
function Xt(t, e, n) {
  if (e.length < 2) return;
  const [s, r] = e[0],
    i = [];
  let a = s,
    c = r;
  for (let p = 1; p < e.length; p++)
    (i.push([e[p][0] - a, e[p][1] - c]), (a = e[p][0]), (c = e[p][1]));
  t.lines(i, s, r, [1, 1], n, !0);
}
function Yt(t, e, n, s, r, i, a, c) {
  const p = e && e.type !== "none",
    d = n && n.color && n.width > 0;
  if (!(!p && !d)) {
    if (e?.type === "gradient") {
      if ((Zt(t, e, r, i, a, c), d)) {
        const o = _(n.color);
        (o && t.setDrawColor(o.r, o.g, o.b),
          t.setLineWidth(g(n.width)),
          s("S"));
      }
      return;
    }
    if (e?.type === "image" && e.src) {
      if (d) {
        const o = _(n.color);
        (o && t.setDrawColor(o.r, o.g, o.b),
          t.setLineWidth(g(n.width)),
          s("S"));
      }
      return;
    }
    if (p) {
      const o = _(e.color) || { r: 255, g: 255, b: 255 };
      t.setFillColor(o.r, o.g, o.b);
    }
    if (d) {
      const o = _(n.color) || { r: 0, g: 0, b: 0 };
      (t.setDrawColor(o.r, o.g, o.b), t.setLineWidth(g(n.width)));
    }
    s(p && d ? "FD" : p ? "F" : "S");
  }
}
function Kt(t, e, n, s, r, i, a = 8) {
  const c = Math.atan2(r - n, s - e),
    p = c + Math.PI * 0.8,
    d = c - Math.PI * 0.8,
    o = g(s + a * Math.cos(p)),
    l = g(r + a * Math.sin(p)),
    $ = g(s + a * Math.cos(d)),
    m = g(r + a * Math.sin(d)),
    L = _(i) || { r: 0, g: 0, b: 0 };
  (t.setFillColor(L.r, L.g, L.b),
    t.setDrawColor(L.r, L.g, L.b),
    t.lines(
      [
        [o - g(s), l - g(r)],
        [$ - o, m - l],
        [g(s) - $, g(r) - m],
      ],
      g(s),
      g(r),
      [1, 1],
      "F",
      !0,
    ));
}
async function We(t, e, n) {
  const { pos: s, fill: r, border: i, prst: a, avLst: c, text: p } = e,
    { x: d, y: o, w: l, h: $, rot: m } = s,
    L = a ? Ft(a, l, $, c) : null,
    y = a === "ellipse" || a === "circle";
  let x = r;
  if (r?.type === "image" && r.src) {
    n.has(r.src) || n.set(r.src, await Ht(r.src));
    const S = n.get(r.src);
    S && (x = { ...r, ...S });
  }
  let v = null;
  if (m) {
    const S = (m * Math.PI) / 180,
      b = Math.cos(S),
      j = Math.sin(S),
      M = g(d + l / 2),
      w = g(o + $ / 2),
      F = M - M * b + w * j,
      A = w - M * j - w * b;
    try {
      t.setCurrentTransformationMatrix &&
        t.setCurrentTransformationMatrix({
          a: b,
          b: j,
          c: -j,
          d: b,
          e: F,
          f: A,
        });
    } catch {}
    v = () => {
      try {
        t.setCurrentTransformationMatrix &&
          t.setCurrentTransformationMatrix({
            a: b,
            b: -j,
            c: j,
            d: b,
            e: M * (1 - b) - w * j + M,
            f: w * (1 - b) + M * j + w,
          });
      } catch {}
    };
  }
  if (y) {
    if (
      (Yt(
        t,
        x,
        i,
        (S) => t.ellipse(g(d + l / 2), g(o + $ / 2), g(l / 2), g($ / 2), S),
        d,
        o,
        l,
        $,
      ),
      x?.fmt && x?.url)
    )
      try {
        t.addImage(x.url, x.fmt, g(d), g(o), g(l), g($));
      } catch {}
  } else if (L) {
    const S = He(L);
    if (S.length >= 2) {
      const b = S.map(([j, M]) => [g(d + j), g(o + M)]);
      if (x?.type === "gradient") {
        if ((Zt(t, x, d, o, l, $), i?.color && i?.width)) {
          const j = _(i.color);
          (j && t.setDrawColor(j.r, j.g, j.b),
            t.setLineWidth(g(i.width)),
            Xt(t, b, "S"));
        }
      } else {
        const j = x && x.type !== "none",
          M = i && i.color && i.width > 0;
        if (j) {
          const w = _(x.color) || { r: 255, g: 255, b: 255 };
          t.setFillColor(w.r, w.g, w.b);
        }
        if (M) {
          const w = _(i.color) || { r: 0, g: 0, b: 0 };
          (t.setDrawColor(w.r, w.g, w.b), t.setLineWidth(g(i.width)));
        }
        (j || M) && Xt(t, b, j && M ? "FD" : j ? "F" : "S");
      }
    }
  } else {
    const S = a === "roundRect" && c?.length,
      b = (c || []).map((M) =>
        parseInt(f(M, "fmla")?.match(/\d+/)?.[0] || "16667"),
      ),
      j = S ? g(Math.min(l, $) * (parseInt(b[0] || 16667) / 1e5)) : 0;
    if (
      (Yt(
        t,
        x,
        i,
        (M) => {
          if (S && j > 0)
            try {
              t.roundedRect(g(d), g(o), g(l), g($), j, j, M);
            } catch {
              t.rect(g(d), g(o), g(l), g($), M);
            }
          else t.rect(g(d), g(o), g(l), g($), M);
        },
        d,
        o,
        l,
        $,
      ),
      x?.fmt && x?.url)
    )
      try {
        t.addImage(x.url, x.fmt, g(d), g(o), g(l), g($));
      } catch {}
  }
  (p && ae(t, p, s), v && v());
}
async function Ze(t, e, n) {
  const { pos: s, src: r, border: i } = e,
    { x: a, y: c, w: p, h: d } = s;
  if (r) {
    n.has(r) || n.set(r, await Ht(r));
    const o = n.get(r);
    if (o)
      try {
        t.addImage(o.url, o.fmt, g(a), g(c), g(p), g(d));
      } catch {}
  }
  if (i?.color && i?.width) {
    const o = _(i.color);
    (o && t.setDrawColor(o.r, o.g, o.b),
      t.setLineWidth(g(i.width)),
      t.rect(g(a), g(c), g(p), g(d), "S"));
  }
}
function Qe(t, e) {
  const { pos: n, line: s, prst: r } = e,
    { x: i, y: a, w: c, h: p } = n;
  if (!s?.color) return;
  const d = _(s.color);
  if (
    (d && t.setDrawColor(d.r, d.g, d.b),
    t.setLineWidth(g(s.width || 1)),
    t.setLineCap(1),
    t.setLineJoin(1),
    s.dash === "dashed" && t.setLineDashPattern([g(6), g(3)], 0),
    r && (r.includes("bent") || r.includes("elbow")))
  ) {
    const o = i + c / 2,
      l = a + p / 2;
    t.lines(
      [
        [g(o) - g(i), 0],
        [0, g(a + p) - g(l)],
        [g(i + c) - g(o), 0],
      ],
      g(i),
      g(a),
      [1, 1],
      "S",
      !1,
    );
  } else
    r && r.includes("curved")
      ? t.lines(
          [
            [g(c) * 0.5, 0],
            [g(c) * 0.5, g(p)],
          ],
          g(i),
          g(a),
          [1, 1],
          "S",
          !1,
        )
      : t.line(g(i), g(a), g(i + c), g(a + p));
  (s.dash === "dashed" && t.setLineDashPattern([], 0),
    t.setLineCap(0),
    t.setLineJoin(0),
    s.tail && s.tail !== "none" && Kt(t, i, a, i + c, a + p, s.color),
    s.head && s.head !== "none" && Kt(t, i + c, a + p, i, a, s.color));
}
function Oe(t, e) {
  const {
      pos: n,
      rows: s,
      colWidths: r,
      bandRow: i,
      bandCol: a,
      firstRow: c,
    } = e,
    { x: p, y: d } = n;
  let o = d;
  for (let l = 0; l < s.length; l++) {
    const $ = s[l];
    let m = p;
    for (let L = 0; L < $.cells.length; L++) {
      const y = $.cells[L];
      if (y.hMerge || y.vMerge) {
        m += r[L] || 0;
        continue;
      }
      const x = r.slice(L, L + (y.gridSpan || 1)).reduce((M, w) => M + w, 0),
        v = $.h,
        S = y.fill;
      let b = null;
      if (
        (S?.type === "solid"
          ? (b = S.color)
          : c && l === 0
            ? (b = "#1a1a1a")
            : i && l % 2 === 1
              ? (b = "#f0f0f0")
              : a && L % 2 === 1 && (b = "#f5f5f5"),
        b)
      ) {
        const M = _(b);
        M &&
          (t.setFillColor(M.r, M.g, M.b), t.rect(g(m), g(o), g(x), g(v), "F"));
      }
      const j = (M) => {
        const w = M?.color ? _(M.color) : null;
        (t.setDrawColor(w?.r ?? 200, w?.g ?? 200, w?.b ?? 200),
          t.setLineWidth(g(M?.width || 0.5)));
      };
      (j(y.borderBottom),
        t.line(g(m), g(o + v), g(m + x), g(o + v)),
        j(y.borderRight),
        t.line(g(m + x), g(o), g(m + x), g(o + v)),
        l === 0 && (j(y.borderTop), t.line(g(m), g(o), g(m + x), g(o))),
        L === 0 && (j(y.borderLeft), t.line(g(m), g(o), g(m), g(o + v))),
        y.text && ae(t, y.text, { x: m, y: o, w: x, h: v }),
        (m += x));
    }
    o += $.h;
  }
}
function Ve(t, e, n) {
  for (const s of e.children || []) le(t, s, n);
}
async function le(t, e, n) {
  if (e)
    try {
      (t.saveGraphicsState(),
        e.kind === "shape"
          ? await We(t, e, n)
          : e.kind === "pic"
            ? await Ze(t, e, n)
            : e.kind === "connector"
              ? Qe(t, e)
              : e.kind === "table"
                ? Oe(t, e)
                : e.kind === "group" && (await Ve(t, e, n)),
        t.restoreGraphicsState());
    } catch {
      try {
        t.restoreGraphicsState();
      } catch {}
    }
}
async function _e(t, e, n, s, r) {
  const i = e?.bg;
  if (i?.type === "solid") {
    const a = _(i.color);
    a && (t.setFillColor(a.r, a.g, a.b), t.rect(0, 0, g(n), g(s), "F"));
  } else if (i?.type === "gradient") Zt(t, i, 0, 0, n, s);
  else if (i?.type === "image" && i.src) {
    const a = r.get(i.src) || (await Ht(i.src));
    if (a) {
      r.set(i.src, a);
      try {
        t.addImage(a.url, a.fmt, 0, 0, g(n), g(s));
      } catch {}
    }
  } else (t.setFillColor(255, 255, 255), t.rect(0, 0, g(n), g(s), "F"));
  for (const a of e?.shapes || []) await le(t, a, r);
}
function Nt(t) {
  const e = new Set(),
    n = (r) => {
      if (r?.paragraphs)
        for (const i of r.paragraphs)
          for (const a of i.runs)
            a.style?.fontFamily && e.add(a.style.fontFamily.toLowerCase());
    },
    s = (r) => {
      r &&
        (r.text && n(r.text),
        r.children && r.children.forEach(s),
        r.rows &&
          r.rows.forEach((i) => i.cells.forEach((a) => a.text && n(a.text))));
    };
  return (t.forEach((r) => r.shapes?.forEach(s)), [...e]);
}
function qe({ showNotification: t, showDownloadDialog: e }) {
  const [n, s] = V.useState(null),
    [r, i] = V.useState([]),
    [a, c] = V.useState({ w: 960, h: 540 }),
    [p, d] = V.useState(!1),
    [o, l] = V.useState({ busy: !1, text: "", pct: 0, current: 0, total: 0 }),
    [$, m] = V.useState(0),
    [L, y] = V.useState("grid"),
    [x, v] = V.useState("hifi"),
    S = V.useRef();
  V.useRef(null);
  const b = V.useRef(null),
    [j, M] = V.useState(860);
  V.useEffect(() => {
    const C = b.current;
    if (!C) return;
    const k = new ResizeObserver(([T]) => {
      M(T.contentRect.width || 1);
    });
    return (
      k.observe(C),
      M(C.getBoundingClientRect().width || 860),
      () => k.disconnect()
    );
  }, [r, L]);
  const w = (C, k = 0, T = 0, D = 0) =>
      l({ busy: !0, text: C, pct: k, current: T, total: D }),
    F = async (C, k, T) => {
      const D = {},
        E = C.file(k);
      if (!E) return D;
      const W = $t(await E.async("text"));
      for (const et of tt(W.documentElement, "Relationship")) {
        const ot = f(et, "Type"),
          K = f(et, "Id"),
          Q = f(et, "Target");
        if (!ot.includes("image")) continue;
        const nt = Q.startsWith("../")
            ? "ppt/" + Q.slice(3)
            : Q.startsWith("/")
              ? Q.slice(1)
              : `${T}${Q}`,
          mt = C.file(nt);
        if (!mt) continue;
        const bt = nt.split(".").pop().toLowerCase(),
          J =
            {
              png: "image/png",
              jpg: "image/jpeg",
              jpeg: "image/jpeg",
              gif: "image/gif",
              svg: "image/svg+xml",
              webp: "image/webp",
              bmp: "image/bmp",
              tiff: "image/tiff",
              tif: "image/tiff",
              emf: "image/x-emf",
              wmf: "image/x-wmf",
            }[bt] || "image/png";
        D[K] = `data:${J};base64,${await mt.async("base64")}`;
      }
      return D;
    },
    A = V.useCallback(async (C) => {
      const k = window.JSZip;
      if (!k) throw new Error("JSZip not loaded");
      w("Unpacking…", 3);
      const T = await k.loadAsync(C);
      w("Parsing theme…", 6);
      let D = { colors: {}, fonts: {} };
      const E = T.file(/ppt\/theme\/theme\d+\.xml/)[0];
      E && (D = Ie(await E.async("text")));
      const { colors: W, fonts: et } = D,
        ot = T.file("ppt/presentation.xml");
      if (!ot) throw new Error("Invalid PPTX");
      const K = await ot.async("text"),
        Q = $t(K),
        nt = h(Q.documentElement, "sldSz"),
        mt = nt ? Math.max(100, Z(f(nt, "cx"))) : 960,
        bt = nt ? Math.max(100, Z(f(nt, "cy"))) : 540;
      c({ w: mt, h: bt });
      const J = {},
        it = T.file("ppt/_rels/presentation.xml.rels");
      if (it) {
        const B = $t(await it.async("text"));
        tt(B.documentElement, "Relationship").forEach(
          (O) => (J[f(O, "Id")] = f(O, "Target")),
        );
      }
      const st = {};
      for (const B of T.file(/ppt\/media\//)) {
        const O = B.name.split(".").pop().toLowerCase(),
          q =
            {
              png: "image/png",
              jpg: "image/jpeg",
              jpeg: "image/jpeg",
              gif: "image/gif",
              svg: "image/svg+xml",
              webp: "image/webp",
              bmp: "image/bmp",
            }[O] || "image/png";
        st[B.name] = `data:${q};base64,${await B.async("base64")}`;
      }
      w("Parsing master…", 10);
      let ct = { bg: { type: "none" } };
      const at = T.file(/ppt\/slideMasters\/slideMaster\d+\.xml/)[0];
      if (at) {
        const B = at.name,
          O = B.substring(0, B.lastIndexOf("/") + 1),
          q = await F(T, `${O}_rels/${B.split("/").pop()}.rels`, O);
        ct = Jt(await at.async("text"), W, et, { ...st, ...q });
      }
      const X = {},
        St = h(Q.documentElement, "sldIdLst");
      let lt = [];
      (St &&
        (lt = tt(St, "sldId")
          .map((B) => {
            const O =
                B.getAttributeNS(
                  "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
                  "id",
                ) || B.getAttribute("r:id"),
              q = J[O] || "";
            return q
              ? q.startsWith("slides/")
                ? `ppt/${q}`
                : `ppt/slides/${q.split("/").pop()}`
              : null;
          })
          .filter(Boolean)),
        lt.length ||
          (lt = T.file(/ppt\/slides\/slide\d+\.xml/)
            .sort(
              (B, O) =>
                parseInt((B.name.match(/\d+/) || ["0"])[0]) -
                parseInt((O.name.match(/\d+/) || ["0"])[0]),
            )
            .map((B) => B.name)),
        w("Parsing slides…", 12, 0, lt.length));
      const ft = [];
      for (let B = 0; B < lt.length; B++) {
        const O = lt[B];
        w(
          `Slide ${B + 1} / ${lt.length}`,
          12 + Math.round(((B + 1) / lt.length) * 82),
          B + 1,
          lt.length,
        );
        const q = T.file(O);
        if (!q) continue;
        const ce = await q.async("text"),
          Mt = O.substring(0, O.lastIndexOf("/") + 1),
          Qt = O.substring(O.lastIndexOf("/") + 1),
          pe = await F(T, `${Mt}_rels/${Qt}.rels`, Mt),
          de = { ...st, ...pe };
        let At = { bg: { type: "none" }, shapes: [] };
        const Ot = T.file(`${Mt}_rels/${Qt}.rels`);
        if (Ot) {
          const fe = $t(await Ot.async("text")),
            Vt = tt(fe.documentElement, "Relationship").find((xt) =>
              f(xt, "Type").includes("slideLayout"),
            );
          if (Vt) {
            const xt = f(Vt, "Target"),
              pt = xt.startsWith("../") ? "ppt/" + xt.slice(3) : `${Mt}${xt}`;
            if (!X[pt]) {
              const _t = T.file(pt);
              if (_t) {
                const Ut = pt.substring(0, pt.lastIndexOf("/") + 1),
                  ue = pt.substring(pt.lastIndexOf("/") + 1),
                  ge = await F(T, `${Ut}_rels/${ue}.rels`, Ut);
                X[pt] = Jt(await _t.async("text"), W, et, { ...st, ...ge });
              }
            }
            At = X[pt] || At;
          }
        }
        ft.push(Re(ce, W, et, de, ct, At));
      }
      return ft;
    }, []),
    R = V.useCallback(
      async (C) => {
        if (C) {
          if (!/\.pptx?$/i.test(C.name)) {
            t("Please upload a .pptx file", "error");
            return;
          }
          (s(C),
            i([]),
            m(0),
            l({ busy: !0, text: "Loading…", pct: 0, current: 0, total: 0 }));
          try {
            const k = await A(C),
              T = Nt(k);
            (T.length &&
              (l({
                busy: !0,
                text: "Loading fonts…",
                pct: 95,
                current: 0,
                total: 0,
              }),
              await Pt(T)),
              i(k),
              l({ busy: !1, text: "", pct: 0, current: 0, total: 0 }),
              t(`${k.length} slide${k.length !== 1 ? "s" : ""} loaded`));
          } catch (k) {
            (console.error(k),
              t("Parse error: " + k.message, "error"),
              l({ busy: !1, text: "", pct: 0, current: 0, total: 0 }));
          }
        }
      },
      [A, t],
    ),
    P = V.useCallback(async () => {
      if (!r.length) return;
      const C = window.jspdf,
        k = window.html2canvas;
      if (!C || !k) {
        t("Libraries not ready — please wait a moment", "error");
        return;
      }
      l({
        busy: !0,
        text: "Loading fonts…",
        pct: 2,
        current: 0,
        total: r.length,
      });
      const T = Nt(r);
      (await Pt(T),
        await document.fonts.ready.catch(() => {}),
        await new Promise((J) => setTimeout(J, 100)),
        l({
          busy: !0,
          text: "Preparing…",
          pct: 5,
          current: 0,
          total: r.length,
        }));
      const { w: D, h: E } = a,
        { jsPDF: W } = C,
        et = 3,
        ot = window.scrollY || document.documentElement.scrollTop || 0,
        K = document.createElement("div");
      ((K.style.cssText = [
        "position:absolute",
        "left:0",
        `top:${ot}px`,
        `width:${D}px`,
        `height:${E}px`,
        "overflow:hidden",
        "z-index:9998",
        "background:#ffffff",
        "-webkit-font-smoothing:antialiased",
        "-moz-osx-font-smoothing:grayscale",
      ].join(";")),
        document.body.appendChild(K));
      const Q = $e.createRoot(K),
        nt = new W({
          orientation: D >= E ? "landscape" : "portrait",
          unit: "pt",
          format: [g(D), g(E)],
          compress: !0,
        }),
        mt = async (J) => {
          const it = J.querySelectorAll("img");
          it.length &&
            (await Promise.all(
              Array.from(it).map((st) =>
                st.complete && st.naturalWidth > 0
                  ? Promise.resolve()
                  : new Promise((ct) => {
                      const at = setTimeout(ct, 8e3);
                      ((st.onload = () => {
                        (clearTimeout(at), ct());
                      }),
                        (st.onerror = () => {
                          (clearTimeout(at), ct());
                        }));
                    }),
              ),
            ));
        },
        bt = async () => {
          try {
            await document.fonts.ready;
          } catch {}
        };
      try {
        for (let X = 0; X < r.length; X++) {
          (l({
            busy: !0,
            text: `Rendering slide ${X + 1} of ${r.length}…`,
            pct: 5 + Math.round(((X + 1) / r.length) * 93),
            current: X + 1,
            total: r.length,
          }),
            await new Promise((q) => {
              (Q.render(u.jsx(kt, { slide: r[X], width: D, height: E })),
                requestAnimationFrame(() =>
                  requestAnimationFrame(() => setTimeout(q, 60)),
                ));
            }),
            await Promise.all([mt(K), bt()]),
            await new Promise((q) => setTimeout(q, 80)),
            window.scrollTo(0, 0));
          const St = await k(K, {
              scale: et,
              useCORS: !0,
              allowTaint: !0,
              backgroundColor: "#ffffff",
              logging: !1,
              width: D,
              height: E,
              windowWidth: D,
              windowHeight: E,
              imageTimeout: 1e4,
              removeContainer: !1,
              foreignObjectRendering: !1,
            }),
            ft = !(r[X]?.bg?.type === "image"),
            B = St.toDataURL(ft ? "image/jpeg" : "image/png", ft ? 0.97 : 1),
            O = ft ? "JPEG" : "PNG";
          (X > 0 && nt.addPage([g(D), g(E)], D >= E ? "landscape" : "portrait"),
            nt.addImage(
              B,
              O,
              0,
              0,
              g(D),
              g(E),
              `slide${X}`,
              ft ? "FAST" : "NONE",
            ),
            await new Promise((q) => setTimeout(q, 0)));
        }
        (Q.unmount(),
          document.body.removeChild(K),
          l({
            busy: !0,
            text: "Compressing PDF…",
            pct: 99,
            current: r.length,
            total: r.length,
          }),
          await new Promise((X) => setTimeout(X, 0)));
        const J = nt.output("arraybuffer"),
          it = (n?.name || "presentation").replace(/\.pptx?$/i, "") + ".pdf",
          st = new Blob([J], { type: "application/pdf" }),
          ct = URL.createObjectURL(st),
          at = document.createElement("a");
        ((at.href = ct),
          (at.download = it),
          at.click(),
          setTimeout(() => URL.revokeObjectURL(ct), 1e4),
          e?.(it, J.byteLength, new Uint8Array(J)),
          t("PDF exported — pixel-perfect quality!"));
      } catch (J) {
        console.error(J);
        try {
          Q.unmount();
        } catch {}
        try {
          document.body.removeChild(K);
        } catch {}
        t("Export failed: " + J.message, "error");
      } finally {
        l({ busy: !1, text: "", pct: 0, current: 0, total: 0 });
      }
    }, [r, a, n, t, e]),
    G = V.useCallback(async () => {
      if (!r.length) return;
      const C = window.jspdf;
      if (!C) {
        t("jsPDF not ready", "error");
        return;
      }
      const k = Nt(r);
      (await Pt(k),
        await document.fonts.ready.catch(() => {}),
        l({
          busy: !0,
          text: "Building PDF…",
          pct: 0,
          current: 0,
          total: r.length,
        }));
      try {
        const { jsPDF: T } = C,
          { w: D, h: E } = a,
          W = new T({
            orientation: D >= E ? "landscape" : "portrait",
            unit: "pt",
            format: [g(D), g(E)],
            compress: !0,
          }),
          et = new Map();
        for (let Q = 0; Q < r.length; Q++)
          (l({
            busy: !0,
            text: `Writing slide ${Q + 1} of ${r.length}…`,
            pct: Math.round(((Q + 1) / r.length) * 100),
            current: Q + 1,
            total: r.length,
          }),
            Q > 0 && W.addPage([g(D), g(E)], D >= E ? "landscape" : "portrait"),
            await _e(W, r[Q], D, E, et),
            await new Promise((nt) => setTimeout(nt, 0)));
        const ot = W.output("arraybuffer"),
          K = (n?.name || "presentation").replace(/\.pptx?$/i, "") + ".pdf";
        (typeof window.download == "function" &&
          window.download(new Uint8Array(ot), K, "application/pdf"),
          e?.(K, ot.byteLength, new Uint8Array(ot)),
          t("Vector PDF exported!"));
      } catch (T) {
        (console.error(T), t("Export failed: " + T.message, "error"));
      } finally {
        l({ busy: !1, text: "", pct: 0, current: 0, total: 0 });
      }
    }, [r, a, n, t, e]),
    H = V.useCallback(
      (C) => {
        (C.preventDefault(), d(!1), R(C.dataTransfer.files[0]));
      },
      [R],
    ),
    N = 0.22,
    I = Math.round(a.w * N),
    z = Math.round(a.h * N),
    U = j > 0 ? j / a.w : 1;
  return u.jsxs("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      fontFamily: "-apple-system,'Helvetica Neue',Helvetica,sans-serif",
    },
    children: [
      u.jsx("style", {
        children: `
        /* ── Base ─────────────────────────────────────────────────────── */
        .pp-tool { color: #f0f0f0; }
        .pp-drop { border: 1.5px dashed #222; border-radius: 18px; background: #090909; cursor: pointer; transition: border-color .2s, background .2s; position: relative; overflow: hidden; }
        .pp-drop:hover, .pp-drop.drag { border-color: #444; background: #0f0f0f; }
        .pp-grid-bg { position: absolute; inset: 0; background-image: radial-gradient(#252525 1.5px, transparent 1.5px); background-size: 32px 32px; pointer-events: none; }
        .pp-thumb { border: 1px solid #1a1a1a; border-radius: 9px; overflow: hidden; cursor: pointer; transition: border-color .15s, transform .15s; flex-shrink: 0; }
        .pp-thumb:hover { border-color: #383838; transform: translateY(-1px); }
        .pp-thumb.sel { border-color: #555; box-shadow: 0 0 0 1px #555; }
        .pp-btn { background: #f0f0f0; color: #0a0a0a; border: none; border-radius: 10px; padding: 10px 24px; font-size: 13px; font-weight: 500; cursor: pointer; letter-spacing: .01em; transition: background .15s, transform .1s; white-space: nowrap; box-sizing: border-box; }
        .pp-btn:hover { background: #fff; transform: translateY(-1px); }
        .pp-btn:active { transform: translateY(0); }
        .pp-ghost { background: transparent; color: #555; border: 1.5px solid #1e1e1e; border-radius: 10px; padding: 9px 18px; font-size: 13px; cursor: pointer; transition: all .15s; white-space: nowrap; box-sizing: border-box; }
        .pp-ghost:hover { border-color: #333; color: #aaa; }
        .pp-tab { padding: 6px 16px; border: none; border-radius: 7px; font-size: 12px; cursor: pointer; transition: all .15s; }
        .pp-tab.on { background: #222; color: #f0f0f0; }
        .pp-tab.off { background: transparent; color: #444; }
        .pp-tab.off:hover { color: #888; }
        .pp-strip { overflow-y: auto; scrollbar-width: thin; scrollbar-color: #222 transparent; }
        .pp-strip::-webkit-scrollbar { width: 3px; }
        .pp-strip::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
        .pp-nav { width: 30px; height: 30px; border-radius: 8px; border: 1px solid #1e1e1e; background: #0f0f0f; color: #555; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; transition: all .15s; }
        .pp-nav:hover:not(:disabled) { border-color: #333; color: #ccc; }
        .pp-nav:disabled { cursor: default; opacity: .3; }
        .pp-pill { display: inline-flex; align-items: center; gap: 6px; background: #111; border: 1px solid #1a1a1a; border-radius: 8px; padding: 5px 12px; font-size: 11px; color: #555; font-variant-numeric: tabular-nums; }
        .pp-feat { font-size: 11px; color: #2e2e2e; background: #0f0f0f; border: 1px solid #1a1a1a; border-radius: 6px; padding: 4px 10px; }
        .pp-badge { display: inline-flex; align-items: center; gap: 5px; background: #0f1a0f; border: 1px solid #1a2e1a; border-radius: 8px; padding: 5px 12px; font-size: 11px; color: #3a6e3a; white-space: nowrap; }

        /* ── Slide grid — responsive columns ─────────────────────────── */
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(${I}px, 44%), 1fr));
          gap: 14px;
        }

        /* ── Horizontal thumbnail strip (sidebar in single-view) ──────── */
        .pp-sstrip {
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow-y: auto;
          max-height: 580px;
          width: ${I + 16}px;
          flex-shrink: 0;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: #222 transparent;
        }
        .pp-sstrip::-webkit-scrollbar { width: 3px; }
        .pp-sstrip::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

        /* ── ≤ 640 px (phones) ───────────────────────────────────────── */
        @media (max-width: 640px) {
          /* Header stack */
          .pp-header { flex-direction: column !important; align-items: stretch !important; gap: 12px !important; }
          .pp-header-left { flex-wrap: wrap !important; }

          /* Badge — hide text-only part on very small */
          .pp-badge-text { display: none; }

          /* Actions stack */
          .pp-ctrls { flex-direction: column !important; align-items: stretch !important; width: 100%; }
          .pp-btn, .pp-ghost { width: 100% !important; text-align: center !important; }

          /* Drop zone */
          .pp-drop-pad { padding: 36px 16px !important; }
          .pp-feats { gap: 5px !important; }
          .pp-feat { font-size: 10px !important; padding: 3px 8px !important; }

          /* Grid thumbnails — fill width, 2 cols min */
          .pp-grid {
            grid-template-columns: repeat(auto-fill, minmax(min(${I}px, 42%), 1fr)) !important;
            gap: 10px !important;
          }

          /* Single-view: stack vertically */
          .pp-single-layout { flex-direction: column !important; }

          /* Strip goes horizontal at top */
          .pp-sstrip {
            flex-direction: row !important;
            overflow-x: auto !important;
            overflow-y: hidden !important;
            max-height: none !important;
            width: 100% !important;
            padding-right: 0 !important;
            padding-bottom: 4px !important;
            gap: 8px !important;
          }
          .pp-sstrip::-webkit-scrollbar { height: 3px; width: auto; }

          /* Single-view controls */
          .pp-single-controls { flex-direction: column-reverse !important; gap: 8px !important; }
          .pp-single-controls .pp-btn { width: 100% !important; text-align: center !important; }
          .pp-kbd-hint { display: none !important; }

          /* Info bar */
          .pp-info-bar { flex-direction: column !important; align-items: flex-start !important; gap: 8px !important; }
          .pp-info-bar .pp-badge { align-self: flex-start; }

          /* Progress */
          .pp-progress-box { padding: 28px 16px !important; }

          /* Mode tabs  */
          .pp-tab { padding: 6px 12px !important; font-size: 11px !important; }

          /* Nav row */
          .pp-nav-row { flex-wrap: wrap !important; gap: 8px !important; }
        }

        /* ── ≤ 400 px (very small) ───────────────────────────────────── */
        @media (max-width: 400px) {
          .pp-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .pp-pill { display: none !important; }
          .pp-badge { font-size: 10px !important; padding: 4px 8px !important; }
        }

        /* ── 641–900 px (tablet portrait) ────────────────────────────── */
        @media (min-width: 641px) and (max-width: 900px) {
          .pp-sstrip {
            width: ${Math.round(I * 0.8) + 16}px !important;
            max-height: 500px !important;
          }
          .pp-ctrls { flex-wrap: wrap !important; }
        }
      `,
      }),
      u.jsxs("div", {
        className: "pp-tool",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 20,
          maxWidth: 1080,
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        },
        children: [
          u.jsxs("div", {
            className: "pp-header",
            style: {
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            },
            children: [
              u.jsxs("div", {
                style: { display: "flex", flexDirection: "column", gap: 6 },
                children: [
                  u.jsxs("div", {
                    className: "pp-header-left",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexWrap: "wrap",
                    },
                    children: [
                      u.jsx("div", {
                        style: {
                          width: 34,
                          height: 34,
                          borderRadius: 9,
                          background: "#0f0f0f",
                          border: "1px solid #1e1e1e",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        },
                        children: u.jsx(te, { size: 18 }),
                      }),
                      u.jsx("h1", {
                        style: {
                          margin: 0,
                          fontSize: 18,
                          fontWeight: 500,
                          color: "#ebebeb",
                          letterSpacing: "-.02em",
                        },
                        children: "PowerPoint to PDF",
                      }),
                      u.jsxs("span", {
                        className: "pp-badge",
                        children: [
                          u.jsx("svg", {
                            width: "8",
                            height: "8",
                            viewBox: "0 0 8 8",
                            children: u.jsx("circle", {
                              cx: "4",
                              cy: "4",
                              r: "3",
                              fill: "#3a6e3a",
                            }),
                          }),
                          u.jsx("span", {
                            className: "pp-badge-text",
                            children: "Hi-Fi · Pixel-perfect · Vector fallback",
                          }),
                          u.jsx("span", {
                            style: { display: "none" },
                            className: "pp-badge-short",
                            children: "Hi-Fi",
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    style: { margin: 0, fontSize: 12, color: "#3a3a3a" },
                    children:
                      "Shapes · Gradients · Tables · Images · Auto-fit · Clipping · Zero upload",
                  }),
                ],
              }),
              r.length > 0 &&
                !o.busy &&
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    flexWrap: "wrap",
                    width: "100%",
                  },
                  className: "pp-ctrls",
                  children: [
                    u.jsxs("span", {
                      className: "pp-pill",
                      children: [
                        u.jsx("span", {
                          style: {
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#2e2e2e",
                            display: "inline-block",
                          },
                        }),
                        r.length,
                        " slides",
                      ],
                    }),
                    u.jsxs("span", {
                      className: "pp-pill",
                      children: [a.w, "×", a.h, "px"],
                    }),
                    u.jsx("button", {
                      className: "pp-ghost",
                      onClick: () => {
                        (i([]), s(null), m(0));
                      },
                      children: "Change file",
                    }),
                    u.jsx("div", {
                      style: {
                        display: "flex",
                        gap: 2,
                        background: "#0d0d0d",
                        border: "1px solid #1a1a1a",
                        borderRadius: 10,
                        padding: 2,
                        flexShrink: 0,
                      },
                      children: [
                        ["hifi", "Hi-Fi"],
                        ["vector", "Vector"],
                      ].map(([C, k]) =>
                        u.jsx(
                          "button",
                          {
                            onClick: () => v(C),
                            className: `pp-tab ${x === C ? "on" : "off"}`,
                            title:
                              C === "hifi"
                                ? "Pixel-perfect render — captures every visual element including shadows, effects, and complex shapes"
                                : "Vector PDF — smaller file size, selectable text, may differ slightly from original",
                            children: k,
                          },
                          C,
                        ),
                      ),
                    }),
                    u.jsx("button", {
                      className: "pp-btn",
                      onClick: x === "hifi" ? P : G,
                      children: "↓ Export PDF",
                    }),
                  ],
                }),
            ],
          }),
          !r.length &&
            !o.busy &&
            u.jsxs("div", {
              className: `pp-drop${p ? " drag" : ""}`,
              onDrop: H,
              onDragOver: (C) => {
                (C.preventDefault(), d(!0));
              },
              onDragLeave: () => d(!1),
              onClick: () => S.current?.click(),
              children: [
                u.jsx("div", { className: "pp-grid-bg" }),
                u.jsx("div", {
                  className: "pp-drop-pad",
                  style: {
                    padding: "64px 24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 18,
                    position: "relative",
                    zIndex: 1,
                  },
                  children: u.jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 16,
                    },
                    children: [
                      u.jsxs("div", {
                        style: {
                          width: 60,
                          height: 60,
                          borderRadius: 14,
                          background: "#111",
                          border: "1px solid #1e1e1e",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        },
                        children: [
                          u.jsx(te, { size: 26 }),
                          u.jsx("div", {
                            style: {
                              position: "absolute",
                              bottom: -6,
                              right: -6,
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: "#f0f0f0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                            children: u.jsx("svg", {
                              width: "10",
                              height: "10",
                              viewBox: "0 0 10 10",
                              fill: "none",
                              children: u.jsx("path", {
                                d: "M5 2v6M2 5l3-3 3 3",
                                stroke: "#0a0a0a",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        style: { textAlign: "center" },
                        children: [
                          u.jsx("p", {
                            style: {
                              margin: "0 0 6px",
                              fontSize: 15,
                              fontWeight: 500,
                              color: "#d8d8d8",
                              letterSpacing: "-.01em",
                            },
                            children: "Drop your presentation here",
                          }),
                          u.jsxs("p", {
                            style: {
                              margin: 0,
                              fontSize: 13,
                              color: "#3a3a3a",
                            },
                            children: [
                              "or",
                              " ",
                              u.jsx("span", {
                                style: {
                                  color: "#555",
                                  textDecoration: "underline",
                                  textUnderlineOffset: 3,
                                },
                                children: "browse files",
                              }),
                              " ",
                              "— .pptx supported",
                            ],
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "pp-feats",
                        style: {
                          display: "flex",
                          gap: 8,
                          flexWrap: "wrap",
                          justifyContent: "center",
                        },
                        children: [
                          "Pixel-perfect",
                          "2× Resolution",
                          "Gradients",
                          "Images",
                          "Tables",
                          "Shadows & Effects",
                          "60+ Shapes",
                          "All Fonts",
                        ].map((C) =>
                          u.jsx(
                            "span",
                            { className: "pp-feat", children: C },
                            C,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
                u.jsx("input", {
                  ref: S,
                  type: "file",
                  accept: ".pptx,.ppt",
                  style: { display: "none" },
                  onChange: (C) => R(C.target.files?.[0]),
                }),
              ],
            }),
          o.busy &&
            u.jsxs("div", {
              className: "pp-progress-box",
              style: {
                background: "#090909",
                border: "1px solid #161616",
                borderRadius: 16,
                padding: "40px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              },
              children: [
                u.jsxs("div", {
                  style: { position: "relative", width: 52, height: 52 },
                  children: [
                    u.jsxs("svg", {
                      width: "52",
                      height: "52",
                      viewBox: "0 0 52 52",
                      style: { transform: "rotate(-90deg)" },
                      children: [
                        u.jsx("circle", {
                          cx: "26",
                          cy: "26",
                          r: "22",
                          fill: "none",
                          stroke: "#161616",
                          strokeWidth: "2",
                        }),
                        u.jsx("circle", {
                          cx: "26",
                          cy: "26",
                          r: "22",
                          fill: "none",
                          stroke: "#e0e0e0",
                          strokeWidth: "2",
                          strokeDasharray: `${2 * Math.PI * 22}`,
                          strokeDashoffset: `${2 * Math.PI * 22 * (1 - o.pct / 100)}`,
                          strokeLinecap: "round",
                          style: { transition: "stroke-dashoffset 0.35s ease" },
                        }),
                      ],
                    }),
                    u.jsxs("span", {
                      style: {
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                        color: "#666",
                        fontVariantNumeric: "tabular-nums",
                      },
                      children: [o.pct, "%"],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  style: { textAlign: "center" },
                  children: [
                    u.jsx("p", {
                      style: {
                        margin: "0 0 4px",
                        fontSize: 14,
                        color: "#d0d0d0",
                      },
                      children: o.text,
                    }),
                    o.total > 0 &&
                      u.jsxs("p", {
                        style: {
                          margin: 0,
                          fontSize: 12,
                          color: "#3a3a3a",
                          fontVariantNumeric: "tabular-nums",
                        },
                        children: [o.current, " / ", o.total, " slides"],
                      }),
                  ],
                }),
                u.jsx("div", {
                  style: {
                    width: "100%",
                    maxWidth: 280,
                    height: "1px",
                    background: "#161616",
                    overflow: "hidden",
                  },
                  children: u.jsx("div", {
                    style: {
                      height: "100%",
                      background: "#e0e0e0",
                      width: `${o.pct}%`,
                      transition: "width 0.3s ease",
                    },
                  }),
                }),
              ],
            }),
          r.length > 0 &&
            !o.busy &&
            u.jsxs("div", {
              style: { display: "flex", flexDirection: "column", gap: 14 },
              children: [
                u.jsxs("div", {
                  className: "pp-nav-row",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  },
                  children: [
                    u.jsx("div", {
                      style: {
                        display: "flex",
                        gap: 2,
                        background: "#0d0d0d",
                        border: "1px solid #1a1a1a",
                        borderRadius: 10,
                        padding: 2,
                        flexShrink: 0,
                      },
                      children: [
                        ["grid", "Grid"],
                        ["single", "Preview"],
                      ].map(([C, k]) =>
                        u.jsx(
                          "button",
                          {
                            onClick: () => y(C),
                            className: `pp-tab ${L === C ? "on" : "off"}`,
                            children: k,
                          },
                          C,
                        ),
                      ),
                    }),
                    L === "single" &&
                      u.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        },
                        children: [
                          u.jsx("button", {
                            "aria-label": "Previous",
                            className: "pp-nav",
                            onClick: () => m((C) => Math.max(0, C - 1)),
                            disabled: $ === 0,
                            children: "‹",
                          }),
                          u.jsxs("span", {
                            style: {
                              fontSize: 12,
                              color: "#444",
                              minWidth: 56,
                              textAlign: "center",
                              fontVariantNumeric: "tabular-nums",
                            },
                            children: [$ + 1, " / ", r.length],
                          }),
                          u.jsx("button", {
                            "aria-label": "Next",
                            className: "pp-nav",
                            onClick: () =>
                              m((C) => Math.min(r.length - 1, C + 1)),
                            disabled: $ === r.length - 1,
                            children: "›",
                          }),
                        ],
                      }),
                  ],
                }),
                L === "grid" &&
                  u.jsx("div", {
                    className: "pp-grid",
                    children: r.map((C, k) =>
                      u.jsxs(
                        "div",
                        {
                          onClick: () => {
                            (m(k), y("single"));
                          },
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                            cursor: "pointer",
                          },
                          children: [
                            u.jsx("div", {
                              className: `pp-thumb${$ === k ? " sel" : ""}`,
                              style: {
                                width: "100%",
                                aspectRatio: `${a.w}/${a.h}`,
                                background: "#111",
                                position: "relative",
                                overflow: "hidden",
                              },
                              children: u.jsx("div", {
                                style: {
                                  position: "absolute",
                                  inset: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  overflow: "hidden",
                                },
                                children: u.jsx("div", {
                                  style: {
                                    transformOrigin: "top left",
                                    transform: `scale(${N})`,
                                    width: a.w,
                                    height: a.h,
                                    pointerEvents: "none",
                                    userSelect: "none",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                  },
                                  children: u.jsx(kt, {
                                    slide: C,
                                    width: a.w,
                                    height: a.h,
                                  }),
                                }),
                              }),
                            }),
                            u.jsx("span", {
                              style: {
                                fontSize: 10,
                                color: "#2e2e2e",
                                textAlign: "center",
                                fontVariantNumeric: "tabular-nums",
                              },
                              children: k + 1,
                            }),
                          ],
                        },
                        k,
                      ),
                    ),
                  }),
                L === "single" &&
                  u.jsxs("div", {
                    className: "pp-single-layout",
                    style: {
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    },
                    children: [
                      u.jsx("div", {
                        className: "pp-sstrip",
                        children: r.map((C, k) =>
                          u.jsxs(
                            "div",
                            {
                              onClick: () => m(k),
                              style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                flexShrink: 0,
                              },
                              children: [
                                u.jsx("div", {
                                  className: `pp-thumb${$ === k ? " sel" : ""}`,
                                  style: {
                                    width: I,
                                    height: z,
                                    background: "#111",
                                    position: "relative",
                                  },
                                  children: u.jsx("div", {
                                    style: {
                                      transformOrigin: "top left",
                                      transform: `scale(${N})`,
                                      width: a.w,
                                      height: a.h,
                                      pointerEvents: "none",
                                      userSelect: "none",
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                    },
                                    children: u.jsx(kt, {
                                      slide: C,
                                      width: a.w,
                                      height: a.h,
                                    }),
                                  }),
                                }),
                                u.jsx("span", {
                                  style: {
                                    fontSize: 10,
                                    color: $ === k ? "#555" : "#222",
                                    textAlign: "center",
                                    fontVariantNumeric: "tabular-nums",
                                  },
                                  children: k + 1,
                                }),
                              ],
                            },
                            k,
                          ),
                        ),
                      }),
                      u.jsxs("div", {
                        style: {
                          flex: 1,
                          minWidth: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        },
                        children: [
                          u.jsx("div", {
                            ref: b,
                            style: {
                              borderRadius: 12,
                              overflow: "hidden",
                              border: "1px solid #161616",
                              background: "#0a0a0a",
                              position: "relative",
                              width: "100%",
                              aspectRatio: `${a.w}/${a.h}`,
                            },
                            children: u.jsx("div", {
                              style: {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transformOrigin: "top left",
                                transform: `scale(${U})`,
                                width: a.w,
                                height: a.h,
                                pointerEvents: "none",
                                userSelect: "none",
                              },
                              children: u.jsx(kt, {
                                slide: r[$],
                                width: a.w,
                                height: a.h,
                              }),
                            }),
                          }),
                          u.jsxs("div", {
                            className: "pp-single-controls",
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              flexWrap: "wrap",
                              gap: 8,
                            },
                            children: [
                              u.jsxs("div", {
                                className: "pp-kbd-hint",
                                style: {
                                  display: "flex",
                                  gap: 5,
                                  alignItems: "center",
                                },
                                children: [
                                  ["←", "→"].map((C) =>
                                    u.jsx(
                                      "span",
                                      {
                                        style: {
                                          width: 22,
                                          height: 22,
                                          borderRadius: 5,
                                          border: "1px solid #1a1a1a",
                                          background: "#0f0f0f",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          fontSize: 11,
                                          color: "#333",
                                        },
                                        children: C,
                                      },
                                      C,
                                    ),
                                  ),
                                  u.jsx("span", {
                                    style: {
                                      fontSize: 11,
                                      color: "#2a2a2a",
                                      marginLeft: 4,
                                    },
                                    children: "navigate",
                                  }),
                                ],
                              }),
                              u.jsx("button", {
                                className: "pp-btn",
                                onClick: x === "hifi" ? P : G,
                                children: "Export PDF",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                u.jsxs("div", {
                  className: "pp-info-bar",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "11px 14px",
                    background: "#090909",
                    border: "1px solid #111",
                    borderRadius: 10,
                    flexWrap: "wrap",
                  },
                  children: [
                    u.jsxs("svg", {
                      width: "13",
                      height: "13",
                      viewBox: "0 0 13 13",
                      fill: "none",
                      style: { flexShrink: 0 },
                      children: [
                        u.jsx("circle", {
                          cx: "6.5",
                          cy: "6.5",
                          r: "5.5",
                          stroke: "#2a2a2a",
                        }),
                        u.jsx("path", {
                          d: "M6.5 5.5v4M6.5 4v.5",
                          stroke: "#333",
                          strokeWidth: "1.1",
                          strokeLinecap: "round",
                        }),
                      ],
                    }),
                    u.jsx("span", {
                      style: {
                        fontSize: 11,
                        color: "#333",
                        flex: 1,
                        minWidth: 0,
                      },
                      children:
                        x === "hifi"
                          ? "Hi-Fi mode: every slide is rendered by the browser layout engine and captured at 2× resolution — pixel-perfect shadows, gradients, fonts, effects, and images. Animations omitted."
                          : "Vector mode: shapes and text drawn as PDF primitives — smaller file with selectable text. Fonts map to Helvetica/Times/Courier. Use Hi-Fi for complex slides.",
                    }),
                    u.jsxs("span", {
                      className: "pp-badge",
                      style: { flexShrink: 0, fontSize: 10 },
                      children: [
                        u.jsx("svg", {
                          width: "8",
                          height: "8",
                          viewBox: "0 0 8 8",
                          children: u.jsx("circle", {
                            cx: "4",
                            cy: "4",
                            r: "3",
                            fill: "#3a6e3a",
                          }),
                        }),
                        x === "hifi" ? "Pixel-perfect" : "Vector PDF",
                      ],
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
function te({ size: t = 24 }) {
  return u.jsxs("svg", {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#e97316",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      u.jsx("path", {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14 2z",
      }),
      u.jsx("polyline", { points: "14 2 14 8 20 8" }),
      u.jsx("rect", { x: "8", y: "12", width: "3", height: "4", rx: "0.5" }),
      u.jsx("path", { d: "M11 13.5h1.5a1.5 1.5 0 0 1 0 3H11" }),
    ],
  });
}
export { qe as default };
