import { r as i, j as e } from "./react-vendor-Bc7KCos-.js";
const Ze = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
    ],
  },
  ft = 7e3,
  qe = (n) => btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
  Qe = (n) => JSON.parse(decodeURIComponent(escape(atob(n.trim())))),
  he = () => Math.random().toString(36).slice(2, 10),
  et = (n) =>
    new Promise((o) => {
      if (n.iceGatheringState === "complete") return o();
      const l = () => {
        n.iceGatheringState === "complete" &&
          (n.removeEventListener("icegatheringstatechange", l), o());
      };
      (n.addEventListener("icegatheringstatechange", l), setTimeout(o, ft));
    }),
  C = 1920,
  S = 1080,
  U = 20,
  fe = (n, o) => {
    const l = n.getBoundingClientRect(),
      d = o.touches ? o.touches[0] : o;
    return {
      x: Math.round(((d.clientX - l.left) / l.width) * C),
      y: Math.round(((d.clientY - l.top) / l.height) * S),
    };
  },
  mt = (n) =>
    n.touches
      ? { x: n.touches[0].clientX, y: n.touches[0].clientY }
      : { x: n.clientX, y: n.clientY },
  Q = (n) => {
    if (!n?.points?.length) return null;
    const o = n.points;
    if (n.tool === "text") {
      const b = n.fontSize || 22,
        x = (n.text?.length || 8) * b * 0.62;
      return { x: o[0].x - 4, y: o[0].y - b - 4, w: x + 8, h: b + 14 };
    }
    let l = 1 / 0,
      d = 1 / 0,
      a = -1 / 0,
      f = -1 / 0;
    for (const b of o)
      (b.x < l && (l = b.x),
        b.y < d && (d = b.y),
        b.x > a && (a = b.x),
        b.y > f && (f = b.y));
    const m = Math.max((n.width || 2) / 2 + 6, 8);
    return {
      x: l - m,
      y: d - m,
      w: Math.max(U, a - l) + m * 2,
      h: Math.max(U, f - d) + m * 2,
    };
  },
  it = (n, o) =>
    o && n.x >= o.x && n.x <= o.x + o.w && n.y >= o.y && n.y <= o.y + o.h,
  pt = (n, o) => {
    for (let l = n.length - 1; l >= 0; l--) {
      const d = Q(n[l]);
      if (it(o, d)) return n[l].id;
    }
    return null;
  },
  bt = (n, o, l, d) => {
    const { x: a, y: f, w: m, h: b } = n,
      x = d.x - l.x,
      j = d.y - l.y;
    let y = a,
      D = f,
      N = m,
      p = b;
    if (o.cx === 0) {
      const E = a + m;
      ((y = a + x), (N = E - y), N < U && ((N = U), (y = E - U)));
    } else o.cx === 1 && (N = Math.max(U, m + x));
    if (o.cy === 0) {
      const E = f + b;
      ((D = f + j), (p = E - D), p < U && ((p = U), (D = E - U)));
    } else o.cy === 1 && (p = Math.max(U, b + j));
    return { x: y, y: D, w: N, h: p };
  },
  gt = (n, o, l) => {
    if (o.w === 0 || o.h === 0) return n;
    const d = l.w / o.w,
      a = l.h / o.h;
    return n.map((f) => ({
      x: l.x + (f.x - o.x) * d,
      y: l.y + (f.y - o.y) * a,
    }));
  },
  ee = (n, o) => {
    if (!o?.points?.length) return;
    const l = o.points,
      d = l[0],
      a = l[l.length - 1];
    if (
      (n.save(),
      (n.lineCap = "round"),
      (n.lineJoin = "round"),
      o.tool === "eraser")
    ) {
      ((n.globalCompositeOperation = "destination-out"),
        (n.lineWidth = o.width),
        n.beginPath(),
        l.length === 1
          ? (n.arc(d.x, d.y, o.width / 2, 0, Math.PI * 2), n.fill())
          : (n.moveTo(d.x, d.y),
            l.slice(1).forEach((f) => n.lineTo(f.x, f.y)),
            n.stroke()),
        n.restore());
      return;
    }
    switch (
      ((n.strokeStyle = o.color),
      (n.fillStyle = o.color),
      (n.lineWidth = o.width),
      o.tool === "highlighter" && (n.globalAlpha = 0.38),
      o.tool)
    ) {
      case "pen":
      case "highlighter":
        if ((n.beginPath(), l.length === 1))
          (n.arc(d.x, d.y, o.width / 2, 0, Math.PI * 2), n.fill());
        else {
          n.moveTo(d.x, d.y);
          for (let f = 1; f < l.length - 1; f++) {
            const m = (l[f].x + l[f + 1].x) / 2,
              b = (l[f].y + l[f + 1].y) / 2;
            n.quadraticCurveTo(l[f].x, l[f].y, m, b);
          }
          (n.lineTo(a.x, a.y), n.stroke());
        }
        break;
      case "line":
        (n.beginPath(), n.moveTo(d.x, d.y), n.lineTo(a.x, a.y), n.stroke());
        break;
      case "rect":
        n.strokeRect(d.x, d.y, a.x - d.x, a.y - d.y);
        break;
      case "circle":
        (n.beginPath(),
          n.ellipse(
            (d.x + a.x) / 2,
            (d.y + a.y) / 2,
            Math.max(1, Math.abs(a.x - d.x) / 2),
            Math.max(1, Math.abs(a.y - d.y) / 2),
            0,
            0,
            Math.PI * 2,
          ),
          n.stroke());
        break;
      case "arrow": {
        const f = a.x - d.x,
          m = a.y - d.y,
          b = Math.sqrt(f * f + m * m),
          x = Math.atan2(m, f),
          j = Math.min(22, b * 0.35);
        (n.beginPath(),
          n.moveTo(d.x, d.y),
          n.lineTo(a.x, a.y),
          n.lineTo(
            a.x - j * Math.cos(x - Math.PI / 6),
            a.y - j * Math.sin(x - Math.PI / 6),
          ),
          n.moveTo(a.x, a.y),
          n.lineTo(
            a.x - j * Math.cos(x + Math.PI / 6),
            a.y - j * Math.sin(x + Math.PI / 6),
          ),
          n.stroke());
        break;
      }
      case "text":
        o.text &&
          ((n.font = `${o.fontSize || 22}px Inter, system-ui, sans-serif`),
          n.fillText(o.text, d.x, d.y));
        break;
    }
    n.restore();
  },
  Ce = (n, o) => {
    if (!n) return;
    const l = n.getContext("2d");
    (l.clearRect(0, 0, C, S), o.forEach((d) => ee(l, d)));
  },
  me = (n, o, l) => {
    if (!n) return;
    const d = n.getContext("2d");
    (d.clearRect(0, 0, C, S),
      o.filter((a) => a.id !== l).forEach((a) => ee(d, a)));
  },
  z = ({ children: n, className: o }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: o,
      children: n,
    }),
  h = {
    Select: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }),
          e.jsx("path", { d: "m13 13 6 6" }),
        ],
      }),
    Pen: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "M12 20h9" }),
          e.jsx("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }),
        ],
      }),
    Marker: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "m9 11-6 6v3h9l3-3" }),
          e.jsx("path", {
            d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
          }),
        ],
      }),
    Eraser: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", {
            d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
          }),
          e.jsx("path", { d: "M22 21H7" }),
          e.jsx("path", { d: "m5 11 9 9" }),
        ],
      }),
    Line: (n) =>
      e.jsx(z, {
        ...n,
        children: e.jsx("line", { x1: "5", y1: "19", x2: "19", y2: "5" }),
      }),
    Rect: (n) =>
      e.jsx(z, {
        ...n,
        children: e.jsx("rect", {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
        }),
      }),
    Circle: (n) =>
      e.jsx(z, {
        ...n,
        children: e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      }),
    Arrow: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
          e.jsx("polyline", { points: "12 5 19 12 12 19" }),
        ],
      }),
    Text: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
          e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
          e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
        ],
      }),
    Undo: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "M3 7v6h6" }),
          e.jsx("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
        ],
      }),
    Trash: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "M3 6h18" }),
          e.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
          e.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
        ],
      }),
    Download: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "7 10 12 15 17 10" }),
          e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
        ],
      }),
    Users: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
          e.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          e.jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
          e.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
        ],
      }),
    Plus: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
          e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
        ],
      }),
    Copy: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2" }),
          e.jsx("path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
          }),
        ],
      }),
    Check: (n) =>
      e.jsx(z, {
        ...n,
        children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
      }),
    X: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
        ],
      }),
    ChevD: (n) =>
      e.jsx(z, { ...n, children: e.jsx("path", { d: "m6 9 6 6 6-6" }) }),
    ChevU: (n) =>
      e.jsx(z, { ...n, children: e.jsx("path", { d: "m18 15-6-6-6 6" }) }),
    Chat: (n) =>
      e.jsx(z, {
        ...n,
        children: e.jsx("path", {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        }),
      }),
    ArrowR: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
          e.jsx("polyline", { points: "12 5 19 12 12 19" }),
        ],
      }),
    Grid: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "7", height: "7" }),
          e.jsx("rect", { x: "14", y: "3", width: "7", height: "7" }),
          e.jsx("rect", { x: "14", y: "14", width: "7", height: "7" }),
          e.jsx("rect", { x: "3", y: "14", width: "7", height: "7" }),
        ],
      }),
    Send: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
          e.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }),
        ],
      }),
    Menu: (n) =>
      e.jsxs(z, {
        ...n,
        children: [
          e.jsx("line", { x1: "4", y1: "8", x2: "20", y2: "8" }),
          e.jsx("line", { x1: "4", y1: "16", x2: "20", y2: "16" }),
        ],
      }),
  },
  ke = [
    { id: "select", icon: h.Select, label: "Select", key: "v" },
    { id: "pen", icon: h.Pen, label: "Pen", key: "p" },
    { id: "highlighter", icon: h.Marker, label: "Highlighter", key: "h" },
    { id: "eraser", icon: h.Eraser, label: "Eraser", key: "e" },
    { id: "line", icon: h.Line, label: "Line", key: "l" },
    { id: "rect", icon: h.Rect, label: "Rect", key: "r" },
    { id: "circle", icon: h.Circle, label: "Circle", key: "c" },
    { id: "arrow", icon: h.Arrow, label: "Arrow", key: "a" },
    { id: "text", icon: h.Text, label: "Text", key: "t" },
  ],
  tt = [
    "#ffffff",
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#3b82f6",
    "#a855f7",
    "#ec4899",
    "#94a3b8",
    "#000000",
  ],
  nt = [2, 4, 8, 16, 28],
  jt = [
    { id: "tl", cx: 0, cy: 0, cursor: "nw-resize" },
    { id: "tc", cx: 0.5, cy: 0, cursor: "n-resize" },
    { id: "tr", cx: 1, cy: 0, cursor: "ne-resize" },
    { id: "ml", cx: 0, cy: 0.5, cursor: "w-resize" },
    { id: "mr", cx: 1, cy: 0.5, cursor: "e-resize" },
    { id: "bl", cx: 0, cy: 1, cursor: "sw-resize" },
    { id: "bc", cx: 0.5, cy: 1, cursor: "s-resize" },
    { id: "br", cx: 1, cy: 1, cursor: "se-resize" },
  ],
  wt = {
    waitAnswer: "Waiting for answer",
    connecting: "Connecting…",
    connected: "Connected",
    failed: "Connection failed",
    disconnected: "Disconnected",
    error: "Error",
  },
  yt = {
    connected: "bg-white",
    failed: "bg-zinc-500",
    error: "bg-zinc-500",
    disconnected: "bg-zinc-600",
    connecting: "bg-zinc-300 animate-pulse",
    waitAnswer: "bg-zinc-600",
  };
function st({ open: n, onClose: o, title: l, children: d, tall: a = !1 }) {
  const f = i.useRef(null),
    m = i.useRef(null),
    [b, x] = i.useState(0);
  i.useEffect(() => {
    n || x(0);
  }, [n]);
  const j = (p) => {
      m.current = p.touches[0].clientY;
    },
    y = (p) => {
      const E = Math.max(0, p.touches[0].clientY - m.current);
      x(E);
    },
    D = () => {
      (b > 90 ? o() : x(0), (m.current = null));
    },
    N = a ? "82svh" : "60svh";
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        onClick: o,
        className:
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
        style: {
          background: "rgba(0,0,0,0.55)",
          opacity: n ? 1 : 0,
          pointerEvents: n ? "auto" : "none",
        },
      }),
      e.jsxs("div", {
        ref: f,
        className:
          "fixed left-0 right-0 bottom-0 z-50 md:hidden bg-zinc-900 border-t border-zinc-800 rounded-t-2xl flex flex-col",
        style: {
          maxHeight: N,
          transform: n ? `translateY(${b}px)` : "translateY(110%)",
          transition:
            b > 0 ? "none" : "transform 0.3s cubic-bezier(0.32,0.72,0,1)",
          willChange: "transform",
        },
        children: [
          e.jsxs("div", {
            className:
              "flex-shrink-0 flex flex-col items-center pt-3 pb-2 cursor-grab active:cursor-grabbing",
            onTouchStart: j,
            onTouchMove: y,
            onTouchEnd: D,
            children: [
              e.jsx("div", { className: "w-9 h-1 rounded-full bg-zinc-700" }),
              l &&
                e.jsx("p", {
                  className: "text-xs font-semibold text-zinc-400 mt-2.5",
                  children: l,
                }),
            ],
          }),
          e.jsx("div", {
            className: "overflow-y-auto flex-1 overscroll-contain",
            style: { WebkitOverflowScrolling: "touch" },
            children: d,
          }),
        ],
      }),
    ],
  });
}
function vt({
  bbox: n,
  onMoveStart: o,
  onResizeStart: l,
  onDelete: d,
  isMobile: a,
}) {
  const { x: f, y: m, w: b, h: x } = n,
    j = (p, E) => `${(p / E) * 100}%`,
    y = a ? 16 : 10,
    D = y / 2,
    N = a ? 14 : 0;
  return e.jsxs("div", {
    className: "absolute inset-0 pointer-events-none",
    style: { zIndex: 25 },
    children: [
      e.jsx("div", {
        className: "absolute",
        style: {
          left: j(f, C),
          top: j(m, S),
          width: j(b, C),
          height: j(x, S),
          border: "1.5px dashed rgba(255,255,255,0.75)",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.35)",
          cursor: "move",
          pointerEvents: "auto",
        },
        onMouseDown: (p) => {
          (p.stopPropagation(), o(p));
        },
        onTouchStart: (p) => {
          (p.stopPropagation(), o(p));
        },
      }),
      jt.map((p) =>
        e.jsx(
          "div",
          {
            style: {
              position: "absolute",
              width: y + N * 2,
              height: y + N * 2,
              left: `calc(${j(f + b * p.cx, C)} - ${D + N}px)`,
              top: `calc(${j(m + x * p.cy, S)} - ${D + N}px)`,
              cursor: p.cursor,
              pointerEvents: "auto",
              zIndex: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            onMouseDown: (E) => {
              (E.stopPropagation(), l(E, p));
            },
            onTouchStart: (E) => {
              (E.stopPropagation(), l(E, p));
            },
            children: e.jsx("div", {
              style: {
                width: y,
                height: y,
                background: "#09090b",
                border: "2px solid white",
                borderRadius: 3,
                pointerEvents: "none",
              },
            }),
          },
          p.id,
        ),
      ),
      e.jsx("button", {
        style: {
          position: "absolute",
          width: a ? 28 : 20,
          height: a ? 28 : 20,
          left: `calc(${j(f + b, C)} + ${a ? 6 : 3}px)`,
          top: `calc(${j(m, S)} - ${a ? 14 : 10}px)`,
          zIndex: 27,
          pointerEvents: "auto",
          background: "#18181b",
          border: "1px solid #3f3f46",
          borderRadius: 5,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: a ? 16 : 13,
          color: "#a1a1aa",
          fontWeight: "bold",
          lineHeight: 1,
        },
        onMouseDown: (p) => {
          (p.stopPropagation(), d());
        },
        onTouchStart: (p) => {
          (p.stopPropagation(), p.preventDefault(), d());
        },
        title: "Delete",
        children: "×",
      }),
      e.jsxs("div", {
        style: {
          position: "absolute",
          left: j(f, C),
          top: `calc(${j(m + x, S)} + 4px)`,
          fontSize: 9,
          fontFamily: "inherit",
          color: "#52525b",
          background: "rgba(9,9,11,0.88)",
          padding: "0 3px",
          borderRadius: 3,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          zIndex: 27,
        },
        children: [Math.round(b), " × ", Math.round(x)],
      }),
    ],
  });
}
function zt({
  cssX: n,
  cssY: o,
  color: l,
  fontSize: d,
  onCommit: a,
  onCancel: f,
}) {
  const [m, b] = i.useState(""),
    x = i.useRef(null);
  i.useEffect(() => {
    x.current?.focus();
  }, []);
  const j = Math.max(16, d);
  return e.jsx("input", {
    ref: x,
    value: m,
    onChange: (y) => b(y.target.value),
    onKeyDown: (y) => {
      (y.key === "Enter" && (y.preventDefault(), a(m)),
        y.key === "Escape" && f());
    },
    onBlur: () => a(m),
    placeholder: "Type…",
    className:
      "absolute z-30 bg-transparent border-b border-white/50 focus:outline-none placeholder:text-white/30",
    style: {
      left: n,
      top: o,
      color: l,
      fontSize: j,
      minWidth: 80,
      maxWidth: "75vw",
      fontFamily: "Inter, system-ui, sans-serif",
      transform: "translateY(-0.85em)",
    },
  });
}
function rt({ messages: n, onSend: o }) {
  const [l, d] = i.useState(""),
    a = i.useRef(null);
  i.useEffect(() => {
    a.current?.scrollIntoView({ behavior: "smooth" });
  }, [n]);
  const f = () => {
    l.trim() && (o(l), d(""));
  };
  return e.jsxs("div", {
    className: "flex flex-col h-full",
    children: [
      e.jsxs("div", {
        className: "flex-1 overflow-y-auto p-3 space-y-2 min-h-0",
        children: [
          n.length === 0 &&
            e.jsx("p", {
              className: "text-[11px] text-zinc-700 text-center pt-8",
              children: "No messages yet",
            }),
          n.map((m, b) => {
            const x = m.from === "me";
            return e.jsxs(
              "div",
              {
                className: `flex flex-col ${x ? "items-end" : "items-start"}`,
                children: [
                  !x &&
                    e.jsx("span", {
                      className: "text-[10px] text-zinc-600 mb-0.5 px-1",
                      children: m.from,
                    }),
                  e.jsx("div", {
                    className: `text-xs px-3 py-1.5 rounded-lg max-w-[85%] break-words
                ${x ? "bg-zinc-700 text-zinc-200" : "bg-zinc-950 border border-zinc-800 text-zinc-300"}`,
                    children: m.text,
                  }),
                ],
              },
              b,
            );
          }),
          e.jsx("div", { ref: a }),
        ],
      }),
      e.jsxs("div", {
        className: "flex border-t border-zinc-800 flex-shrink-0",
        children: [
          e.jsx("input", {
            value: l,
            onChange: (m) => d(m.target.value),
            onKeyDown: (m) => m.key === "Enter" && f(),
            placeholder: "Message…",
            style: { fontSize: 16 },
            className:
              "flex-1 bg-zinc-900 text-zinc-300 placeholder:text-zinc-700 px-3 py-2.5 focus:outline-none",
          }),
          e.jsx("button", {
            "aria-label": "Send",
            onClick: f,
            className:
              "px-3 text-zinc-600 hover:text-zinc-300 active:text-white bg-zinc-900 border-l border-zinc-800 transition-colors",
            children: e.jsx(h.Send, { className: "w-3.5 h-3.5" }),
          }),
        ],
      }),
    ],
  });
}
function ct({
  peers: n,
  activePeer: o,
  setActivePeer: l,
  createPeer: d,
  applyAnswer: a,
  updatePeer: f,
  shareURL: m,
  CopyBtn: b,
}) {
  return e.jsxs("div", {
    className: "p-3 space-y-3",
    children: [
      e.jsxs("button", {
        onClick: d,
        className:
          "w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
        children: [
          e.jsx(h.Plus, { className: "w-3.5 h-3.5" }),
          " Add collaborator",
        ],
      }),
      n.length === 0 &&
        e.jsxs("div", {
          className: "text-center py-8",
          children: [
            e.jsx(h.Users, { className: "w-6 h-6 text-zinc-800 mx-auto mb-2" }),
            e.jsxs("p", {
              className: "text-xs text-zinc-700",
              children: [
                'Click "Add collaborator"',
                e.jsx("br", {}),
                "to invite someone",
              ],
            }),
          ],
        }),
      n.map((x) => {
        const j = o === x.id;
        return e.jsxs(
          "div",
          {
            className: `border rounded-xl overflow-hidden transition-all ${j ? "border-zinc-600" : "border-zinc-800"}`,
            children: [
              e.jsxs("button", {
                onClick: () => l(j ? null : x.id),
                className: "w-full flex items-center gap-3 px-3 py-3 text-left",
                children: [
                  e.jsx("div", {
                    className:
                      "w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0",
                    children: e.jsx(h.Users, {
                      className: "w-3 h-3 text-zinc-500",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsx("p", {
                        className: "text-xs font-medium text-zinc-200",
                        children: x.label,
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5 mt-0.5",
                        children: [
                          e.jsx("span", {
                            className: `w-1.5 h-1.5 rounded-full ${yt[x.status] || "bg-zinc-600"}`,
                          }),
                          e.jsx("p", {
                            className: "text-[11px] text-zinc-500",
                            children: wt[x.status] || x.status,
                          }),
                        ],
                      }),
                    ],
                  }),
                  j
                    ? e.jsx(h.ChevU, { className: "w-3 h-3 text-zinc-600" })
                    : e.jsx(h.ChevD, { className: "w-3 h-3 text-zinc-600" }),
                ],
              }),
              j &&
                e.jsxs("div", {
                  className: "border-t border-zinc-800 p-3 space-y-3",
                  children: [
                    ["waitAnswer", "connecting"].includes(x.status) &&
                      x.offerCode &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-1.5",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] text-zinc-500 uppercase tracking-widest",
                                    children: "Offer code",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(b, {
                                        text: x.offerCode,
                                        id: `oc-${x.id}`,
                                        label: "Code",
                                        small: !0,
                                      }),
                                      e.jsx(b, {
                                        text: m(x.offerCode),
                                        id: `ul-${x.id}`,
                                        label: "Link",
                                        small: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("textarea", {
                                readOnly: !0,
                                value: x.offerCode,
                                rows: 3,
                                className:
                                  "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2 py-1.5 text-[10px] font-mono text-zinc-600 resize-none focus:outline-none",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5",
                                children: "Paste answer",
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  e.jsx("textarea", {
                                    rows: 2,
                                    placeholder: "Paste answer…",
                                    style: { fontSize: 16 },
                                    onChange: (y) =>
                                      f(x.id, { answerInput: y.target.value }),
                                    className:
                                      "flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-2 py-1.5 font-mono text-zinc-300 placeholder:text-zinc-700 resize-none focus:outline-none focus:border-zinc-600 transition-colors",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => a(x.id, x.answerInput),
                                    disabled: !x.answerInput?.trim(),
                                    className:
                                      "px-3 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
                                    children: "Connect",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    x.status === "connected" &&
                      e.jsxs("p", {
                        className:
                          "text-[11px] text-zinc-400 flex items-center gap-1.5",
                        children: [
                          e.jsx(h.Check, { className: "w-3 h-3" }),
                          " Drawing in sync",
                        ],
                      }),
                  ],
                }),
            ],
          },
          x.id,
        );
      }),
    ],
  });
}
function Ct({ showNotification: n }) {
  const o = i.useRef(he()),
    [l, d] = i.useState(() => typeof window < "u" && window.innerWidth < 768);
  i.useEffect(() => {
    const t = window.matchMedia("(max-width: 767px)"),
      r = (s) => d(s.matches);
    return (
      t.addEventListener("change", r),
      () => t.removeEventListener("change", r)
    );
  }, []);
  const [a, f] = i.useState(() =>
      window.location.hash.startsWith("#wb=") ? "join" : "home",
    ),
    [m, b] = i.useState("pen"),
    [x, j] = i.useState("#ffffff"),
    [y, D] = i.useState(4),
    [N, p] = i.useState([]),
    [E, H] = i.useState([]),
    [te, Se] = i.useState(!1),
    [W, M] = i.useState(null),
    [ot, P] = i.useState(null),
    [G, oe] = i.useState(null),
    [pe, Ee] = i.useState([]),
    [Re, be] = i.useState(null),
    [ne, Me] = i.useState(() =>
      window.location.hash.startsWith("#wb=")
        ? window.location.hash.slice(4)
        : "",
    ),
    [le, Te] = i.useState(""),
    [I, J] = i.useState("idle"),
    [lt, Pe] = i.useState({}),
    [De, $e] = i.useState([]),
    [se, V] = i.useState(!1),
    [A, re] = i.useState("peers"),
    [T, Y] = i.useState(null),
    [ae, Le] = i.useState({}),
    _ = i.useRef(null),
    B = i.useRef(null),
    w = i.useRef([]),
    F = i.useRef("pen"),
    ge = i.useRef("#ffffff"),
    ce = i.useRef(4),
    K = i.useRef(!1),
    Z = i.useRef(null),
    v = i.useRef(null),
    $ = i.useRef(null),
    je = i.useRef(null),
    L = i.useRef({}),
    we = i.useRef(null),
    ye = i.useRef(null);
  (i.useEffect(() => {
    w.current = N;
  }, [N]),
    i.useEffect(() => {
      F.current = m;
    }, [m]),
    i.useEffect(() => {
      ge.current = x;
    }, [x]),
    i.useEffect(() => {
      ce.current = y;
    }, [y]),
    i.useEffect(() => {
      v.current = W;
    }, [W]),
    i.useEffect(() => {
      Ce(_.current, N);
    }, [N]),
    i.useEffect(() => {
      window.location.hash.startsWith("#wb=") &&
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
    }, []));
  const R = i.useCallback((t) => {
      if (
        (Object.values(L.current).forEach((r) => {
          if (r.dc?.readyState === "open")
            try {
              r.dc.send(t);
            } catch {}
        }),
        we.current?.readyState === "open")
      )
        try {
          we.current.send(t);
        } catch {}
    }, []),
    Oe = i.useCallback((t, r) => {
      Object.values(L.current).forEach((s) => {
        if (s.id !== r && s.dc?.readyState === "open")
          try {
            s.dc.send(t);
          } catch {}
      });
    }, []),
    Be = i.useCallback((t, r) => {
      const s = B.current;
      if (!s) return { x: 0, y: 0 };
      const c = s.getBoundingClientRect();
      return {
        x: Math.round(((t - c.left) / c.width) * C),
        y: Math.round(((r - c.top) / c.height) * S),
      };
    }, []),
    de = i.useCallback((t) => {
      const r = $.current;
      if (!r) return;
      const s = B.current?.getContext("2d");
      if (!s) return;
      s.clearRect(0, 0, C, S);
      let c;
      if (r.type === "move") {
        const u = t.x - r.startPos.x,
          g = t.y - r.startPos.y;
        c = {
          ...r.origStroke,
          points: r.origStroke.points.map((k) => ({ x: k.x + u, y: k.y + g })),
        };
      } else {
        const u = bt(r.origBBox, r.handle, r.startPos, t);
        c = { ...r.origStroke, points: gt(r.origStroke.points, r.origBBox, u) };
      }
      ((r.currentTransformed = c), ee(s, c), P({ ...c }));
    }, []),
    Ie = i.useCallback(() => {
      const t = $.current;
      $.current = null;
      const r = B.current?.getContext("2d");
      if ((r && r.clearRect(0, 0, C, S), !t?.currentTransformed)) {
        (Ce(_.current, w.current), P(null));
        return;
      }
      const s = t.currentTransformed,
        c = w.current.map((u) => (u.id === s.id ? s : u));
      ((w.current = c),
        Ce(_.current, c),
        p([...c]),
        M(s.id),
        (v.current = s.id),
        P(null),
        R(`UPDATE:${JSON.stringify(s)}`));
    }, [R]);
  i.useEffect(() => {
    const t = (s) => {
        if (!$.current) return;
        const { x: c, y: u } = mt(s);
        de(Be(c, u));
      },
      r = () => {
        $.current && Ie();
      };
    return (
      window.addEventListener("mousemove", t),
      window.addEventListener("mouseup", r),
      window.addEventListener("touchmove", t, { passive: !1 }),
      window.addEventListener("touchend", r),
      () => {
        (window.removeEventListener("mousemove", t),
          window.removeEventListener("mouseup", r),
          window.removeEventListener("touchmove", t),
          window.removeEventListener("touchend", r));
      }
    );
  }, [de, Ie, Be]);
  const Ae = i.useCallback((t) => {
      if ((t.preventDefault(), t.touches?.length > 1)) return;
      const r = B.current;
      if (!r) return;
      const s = fe(r, t);
      if (v.current) {
        const g = w.current.find((k) => k.id === v.current);
        if (g) {
          const k = Q(g);
          if (it(s, k)) {
            (($.current = {
              type: "move",
              startPos: s,
              origStroke: g,
              origBBox: k,
            }),
              me(_.current, w.current, v.current));
            return;
          }
        }
        (M(null), (v.current = null), P(null));
      }
      if (F.current === "select") {
        const g = pt(w.current, s);
        if (g) {
          (M(g), (v.current = g));
          const k = w.current.find((O) => O.id === g);
          (($.current = {
            type: "move",
            startPos: s,
            origStroke: k,
            origBBox: Q(k),
          }),
            me(_.current, w.current, g));
        }
        return;
      }
      if (F.current === "text") {
        const g = r.getBoundingClientRect();
        oe({
          canvasX: s.x,
          canvasY: s.y,
          cssX: (s.x / C) * g.width,
          cssY: (s.y / S) * g.height,
        });
        return;
      }
      K.current = !0;
      const c = {
        id: he(),
        tool: F.current,
        color: F.current === "eraser" ? "#000" : ge.current,
        width: F.current === "eraser" ? ce.current * 3 : ce.current,
        points: [s],
      };
      Z.current = c;
      const u = r.getContext("2d");
      (u.clearRect(0, 0, C, S), ee(u, c));
    }, []),
    Ue = i.useCallback(
      (t) => {
        if ((t.preventDefault(), t.touches?.length > 1)) return;
        const r = B.current;
        if (!r) return;
        const s = fe(r, t);
        if ($.current) {
          de(s);
          return;
        }
        if (!K.current || !Z.current) return;
        const c = Z.current;
        ["pen", "highlighter", "eraser"].includes(c.tool)
          ? c.points.push(s)
          : (c.points = [c.points[0], s]);
        const u = r.getContext("2d");
        (u.clearRect(0, 0, C, S),
          ee(u, c),
          je.current ||
            (R(`CURSOR:${o.current}:${s.x}:${s.y}`),
            (je.current = setTimeout(() => {
              je.current = null;
            }, 60))));
      },
      [de, R],
    ),
    ve = i.useCallback(() => {
      if ($.current || !K.current || !Z.current) return;
      K.current = !1;
      const t = Z.current;
      Z.current = null;
      const r = B.current?.getContext("2d");
      r && r.clearRect(0, 0, C, S);
      const s = [...w.current, t];
      ((w.current = s),
        p([...s]),
        H((c) => [...c, t.id]),
        t.tool !== "eraser" && (M(t.id), (v.current = t.id), P(null)),
        R(`STROKE:${JSON.stringify(t)}`));
    }, [R]),
    at = i.useCallback(
      (t) => {
        if (!G || !t?.trim()) {
          oe(null);
          return;
        }
        const r = {
            id: he(),
            tool: "text",
            color: ge.current,
            width: ce.current,
            fontSize: Math.max(14, ce.current * 5),
            text: t.trim(),
            points: [{ x: G.canvasX, y: G.canvasY }],
          },
          s = [...w.current, r];
        ((w.current = s),
          p([...s]),
          H((c) => [...c, r.id]),
          M(r.id),
          (v.current = r.id),
          R(`STROKE:${JSON.stringify(r)}`),
          oe(null));
      },
      [G, R],
    ),
    dt = i.useCallback((t) => {
      t.preventDefault();
      const r = fe(B.current, t),
        s = w.current.find((u) => u.id === v.current);
      if (!s) return;
      const c = Q(s);
      (($.current = { type: "move", startPos: r, origStroke: s, origBBox: c }),
        me(_.current, w.current, v.current));
    }, []),
    xt = i.useCallback((t, r) => {
      t.preventDefault();
      const s = fe(B.current, t),
        c = w.current.find((g) => g.id === v.current);
      if (!c) return;
      const u = Q(c);
      (($.current = {
        type: "resize",
        handle: r,
        startPos: s,
        origStroke: c,
        origBBox: u,
      }),
        me(_.current, w.current, v.current));
    }, []),
    ie = i.useCallback(() => {
      const t = v.current;
      if (!t) return;
      const r = w.current.filter((s) => s.id !== t);
      ((w.current = r),
        p([...r]),
        H((s) => s.filter((c) => c !== t)),
        M(null),
        (v.current = null),
        P(null),
        R(`DELETE:${t}`),
        n?.("Stroke deleted"));
    }, [R, n]),
    xe = i.useCallback(() => {
      H((t) => {
        if (!t.length) return t;
        const r = t[t.length - 1],
          s = w.current.filter((c) => c.id !== r);
        return (
          (w.current = s),
          p([...s]),
          v.current === r && (M(null), (v.current = null), P(null)),
          R(`UNDO:${r}`),
          t.slice(0, -1)
        );
      });
    }, [R]),
    We = i.useCallback(() => {
      (p([]),
        (w.current = []),
        H([]),
        M(null),
        (v.current = null),
        P(null),
        R("CLEAR"),
        n?.("Canvas cleared"));
    }, [R, n]),
    Ye = i.useCallback(() => {
      const t = document.createElement("canvas");
      ((t.width = C), (t.height = S));
      const r = t.getContext("2d");
      ((r.fillStyle = "#09090b"),
        r.fillRect(0, 0, C, S),
        w.current.forEach((s) => ee(r, s)),
        t.toBlob((s) => {
          if (!s) return;
          const c = URL.createObjectURL(s),
            u = document.createElement("a");
          ((u.href = c),
            (u.download = `whiteboard-${Date.now()}.png`),
            document.body.appendChild(u),
            u.click(),
            setTimeout(() => {
              (document.body.removeChild(u), URL.revokeObjectURL(c));
            }, 1e3),
            n?.("Exported as PNG", "success"));
        }, "image/png"));
    }, [n]),
    ue = i.useCallback((t, r) => {
      if (typeof t == "string") {
        if (t.startsWith("STROKE:")) {
          const s = JSON.parse(t.slice(7));
          p((c) => {
            const u = [...c, s];
            return ((w.current = u), u);
          });
          return;
        }
        if (t.startsWith("UNDO:")) {
          const s = t.slice(5);
          p((c) => {
            const u = c.filter((g) => g.id !== s);
            return ((w.current = u), u);
          });
          return;
        }
        if (t.startsWith("UPDATE:")) {
          const s = JSON.parse(t.slice(7));
          p((c) => {
            const u = c.map((g) => (g.id === s.id ? s : g));
            return ((w.current = u), u);
          });
          return;
        }
        if (t.startsWith("DELETE:")) {
          const s = t.slice(7);
          p((c) => {
            const u = c.filter((g) => g.id !== s);
            return ((w.current = u), u);
          });
          return;
        }
        if (t === "CLEAR") {
          (p([]), (w.current = []), H([]), M(null), (v.current = null));
          return;
        }
        if (t.startsWith("SYNC:")) {
          const s = JSON.parse(t.slice(5));
          (p(s), (w.current = s), M(null), (v.current = null));
          return;
        }
        if (t.startsWith("CURSOR:")) {
          const [, s, c, u] = t.split(":"),
            g = L.current[s]?.label || "Peer";
          (Pe((k) => ({ ...k, [s]: { x: +c, y: +u, label: g } })),
            setTimeout(
              () =>
                Pe((k) => {
                  const O = { ...k };
                  return (delete O[s], O);
                }),
              3e3,
            ));
          return;
        }
        if (t.startsWith("CHAT:")) {
          const s = JSON.parse(t.slice(5)),
            c = L.current[r]?.label || (r === "host" ? "Host" : "Peer");
          $e((u) => [...u, { ...s, from: c }]);
          return;
        }
        if (t === "HELLO") {
          const s = L.current[r];
          s?.dc?.readyState === "open" &&
            s.dc.send(`SYNC:${JSON.stringify(w.current)}`);
          return;
        }
      }
    }, []),
    X = i.useCallback((t, r) => {
      Ee((s) =>
        s.map((c) => {
          if (c.id !== t) return c;
          const u = typeof r == "function" ? r(c) : r;
          return { ...c, ...u };
        }),
      );
    }, []),
    Xe = i.useCallback(async () => {
      const t = he(),
        r = `Peer ${(Object.keys(L.current).length + 1).toString().padStart(2, "0")}`,
        s = new RTCPeerConnection(Ze),
        c = s.createDataChannel("wb", { ordered: !0 }),
        u = {
          id: t,
          label: r,
          pc: s,
          dc: c,
          status: "waitAnswer",
          offerCode: "",
          answerInput: "",
          waitingBC: !1,
        };
      ((L.current[t] = u),
        (c.onopen = () => {
          (X(t, { status: "connected" }),
            c.send(`SYNC:${JSON.stringify(w.current)}`),
            n?.(`${r} connected`, "success"));
        }),
        (c.onclose = () =>
          X(t, (O) =>
            O.status === "connected" ? { status: "disconnected" } : {},
          )),
        (c.onmessage = (O) => {
          (ue(O.data, t), Oe(O.data, t));
        }),
        (s.oniceconnectionstatechange = () => {
          ["failed", "disconnected"].includes(s.iceConnectionState) &&
            X(t, { status: "failed" });
        }));
      const g = await s.createOffer();
      (await s.setLocalDescription(g), await et(s));
      const k = qe(s.localDescription);
      ((L.current[t].offerCode = k), (L.current[t].waitingBC = !0));
      try {
        ye.current?.postMessage({ type: "offer", data: k });
      } catch {}
      (Ee((O) => [...O, { ...u, offerCode: k }]),
        be(t),
        l ? Y("peers") : (V(!0), re("peers")));
    }, [X, ue, Oe, n, l]),
    ze = i.useCallback(
      async (t, r) => {
        const s = L.current[t];
        if (!(!s || !r?.trim())) {
          X(t, { status: "connecting" });
          try {
            (await s.pc.setRemoteDescription(new RTCSessionDescription(Qe(r))),
              (L.current[t].waitingBC = !1));
          } catch {
            X(t, { status: "error" });
          }
        }
      },
      [X],
    ),
    ut = i.useCallback(async () => {
      if (ne.trim()) {
        (J("connecting"), Te(""));
        try {
          const t = new RTCPeerConnection(Ze);
          ((t.ondatachannel = (c) => {
            ((we.current = c.channel),
              (c.channel.onopen = () => {
                (J("connected"),
                  c.channel.send("HELLO"),
                  n?.("Connected!", "success"));
              }),
              (c.channel.onmessage = (u) => ue(u.data, "host")),
              (c.channel.onclose = () => J("disconnected")));
          }),
            (t.oniceconnectionstatechange = () => {
              ["failed", "disconnected"].includes(t.iceConnectionState) &&
                J("failed");
            }),
            await t.setRemoteDescription(new RTCSessionDescription(Qe(ne))));
          const r = await t.createAnswer();
          (await t.setLocalDescription(r), await et(t));
          const s = qe(t.localDescription);
          (Te(s), J("waitConnect"));
          try {
            ye.current?.postMessage({ type: "answer", data: s });
          } catch {}
        } catch {
          J("error");
        }
      }
    }, [ne, ue, n]),
    _e = i.useCallback(
      (t) => {
        if (!t.trim()) return;
        const r = { text: t.trim(), time: Date.now() };
        (R(`CHAT:${JSON.stringify(r)}`),
          $e((s) => [...s, { ...r, from: "me" }]));
      },
      [R],
    );
  (i.useEffect(() => {
    const t = (r) => {
      if (r.target.tagName === "INPUT" || r.target.tagName === "TEXTAREA")
        return;
      if ((r.ctrlKey || r.metaKey) && r.key === "z") {
        (r.preventDefault(), xe());
        return;
      }
      if ((r.key === "Delete" || r.key === "Backspace") && v.current) {
        (r.preventDefault(), ie());
        return;
      }
      if (r.key === "Escape") {
        (M(null), (v.current = null), P(null));
        return;
      }
      const s = ke.find((c) => c.key === r.key.toLowerCase());
      s &&
        (b(s.id), s.id !== "select" && (M(null), (v.current = null), P(null)));
    };
    return (
      window.addEventListener("keydown", t),
      () => window.removeEventListener("keydown", t)
    );
  }, [xe, ie]),
    i.useEffect(() => {
      try {
        const t = new BroadcastChannel("ihatepdf_wb_signal");
        return (
          (ye.current = t),
          (t.onmessage = (r) => {
            const { type: s, data: c } = r.data || {};
            if (
              (s === "offer" &&
                a === "join" &&
                (Me(c), n?.("Offer loaded!", "success")),
              s === "answer")
            ) {
              const u = Object.values(L.current).find((g) => g.waitingBC);
              u && ze(u.id, c);
            }
          }),
          () => t.close()
        );
      } catch {}
    }, [a]));
  const Ge = i.useCallback(async (t, r) => {
      try {
        await navigator.clipboard.writeText(t);
      } catch {
        const c = document.createElement("textarea");
        ((c.value = t),
          document.body.appendChild(c),
          c.select(),
          document.execCommand("copy"),
          document.body.removeChild(c));
      }
      (Le((s) => ({ ...s, [r]: !0 })),
        setTimeout(() => Le((s) => ({ ...s, [r]: !1 })), 2e3));
    }, []),
    He = (t) => `${window.location.origin}${window.location.pathname}#wb=${t}`,
    Ne = i.useCallback(
      ({ text: t, id: r, label: s = "Copy", small: c = !1 }) =>
        e.jsxs("button", {
          "aria-label": "Copy",
          onClick: () => Ge(t, r),
          className: `inline-flex items-center gap-1.5 rounded border transition-all font-medium tracking-tight
        ${c ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs"}
        ${ae[r] ? "bg-white/10 border-white/30 text-white" : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 active:bg-zinc-800"}`,
          children: [
            ae[r]
              ? e.jsx(h.Check, { className: "w-3 h-3" })
              : e.jsx(h.Copy, { className: "w-3 h-3" }),
            ae[r] ? "Copied" : s,
          ],
        }),
      [Ge, ae],
    ),
    Je = ({ n: t, done: r }) =>
      e.jsx("div", {
        className: `w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0
      ${r ? "bg-white border-white" : "bg-transparent border-zinc-700"}`,
        children: r
          ? e.jsx(h.Check, { className: "w-2.5 h-2.5 text-zinc-900" })
          : e.jsx("span", {
              className: "text-[10px] font-bold text-zinc-500",
              children: t,
            }),
      }),
    Ve = ot ?? N.find((t) => t.id === W),
    Fe = W && Ve ? Q(Ve) : null,
    q = pe.filter((t) => t.status === "connected").length,
    ht =
      m === "select"
        ? "default"
        : m === "eraser"
          ? "cell"
          : m === "text"
            ? "text"
            : $.current?.type === "move"
              ? "grabbing"
              : "crosshair",
    Ke = (t) => {
      (b(t), t !== "select" && (M(null), (v.current = null), P(null)));
    };
  return a === "home"
    ? e.jsxs("div", {
        className: "max-w-2xl mx-auto pb-16",
        children: [
          e.jsx("div", {
            className: "flex items-start justify-between mb-8 md:mb-10",
            children: e.jsx("div", {
              children: e.jsx("div", {
                className: "flex items-center gap-3 mb-1.5",
                children: e.jsx("h1", {
                  className:
                    "text-4xl md:text-3xl font-semibold text-white tracking-tight",
                  children: "Collab Whiteboard",
                }),
              }),
            }),
          }),
          e.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4",
            children: [
              {
                icon: h.Pen,
                title: "Create session",
                desc: "Start a new whiteboard and invite others to draw together in real time.",
                tags: [
                  "Select & resize",
                  "Move strokes",
                  "Multi-peer",
                  "Export PNG",
                ],
                action: () => f("draw"),
                cta: "Start drawing",
              },
              {
                icon: h.Users,
                title: "Join session",
                desc: "Paste an invite code or open a shared link to join someone's whiteboard.",
                tags: ["Paste offer", "Auto-link", "Live sync", "Chat"],
                action: () => f("join"),
                cta: "Join board",
              },
            ].map(
              ({ icon: t, title: r, desc: s, tags: c, action: u, cta: g }) =>
                e.jsxs(
                  "button",
                  {
                    onClick: u,
                    className:
                      "group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 active:border-zinc-500 rounded-xl p-5 md:p-6 text-left transition-all duration-200",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg border border-zinc-700 group-hover:border-zinc-500 flex items-center justify-center mb-4 md:mb-5 transition-colors",
                        children: e.jsx(t, {
                          className:
                            "w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors",
                        }),
                      }),
                      e.jsx("h2", {
                        className:
                          "text-sm font-semibold text-white tracking-tight mb-1.5",
                        children: r,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-600 leading-relaxed",
                        children: s,
                      }),
                      e.jsx("div", {
                        className: "mt-4 flex flex-wrap gap-1.5",
                        children: c.map((k) =>
                          e.jsx(
                            "span",
                            {
                              className:
                                "text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-600 font-mono",
                              children: k,
                            },
                            k,
                          ),
                        ),
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-4 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors",
                        children: [
                          e.jsx("span", { children: g }),
                          e.jsx(h.ArrowR, { className: "w-3 h-3 ml-0.5" }),
                        ],
                      }),
                    ],
                  },
                  r,
                ),
            ),
          }),
          e.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
            children: [
              {
                icon: h.Select,
                label: "Select & transform",
                desc: "Move, resize, delete any stroke",
              },
              {
                icon: h.Pen,
                label: "9 draw tools",
                desc: "Pen, shapes, text, eraser",
              },
              {
                icon: h.Users,
                label: "Multi-peer",
                desc: "Mesh via manual handshake",
              },
              {
                icon: h.Download,
                label: "PNG export",
                desc: "Full-res 1920×1080",
              },
            ].map(({ icon: t, label: r, desc: s }) =>
              e.jsxs(
                "div",
                {
                  className:
                    "bg-zinc-950 border border-zinc-800/60 rounded-xl p-3 md:p-3.5",
                  children: [
                    e.jsx(t, {
                      className: "w-3.5 h-3.5 text-zinc-600 mb-2 md:mb-2.5",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[11px] md:text-xs font-medium text-zinc-400",
                      children: r,
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] md:text-[11px] text-zinc-600 mt-0.5",
                      children: s,
                    }),
                  ],
                },
                r,
              ),
            ),
          }),
        ],
      })
    : a === "join" && I !== "connected"
      ? e.jsxs("div", {
          className: "max-w-xl mx-auto pb-16 space-y-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 mb-6 md:mb-8",
              children: [
                e.jsx("button", {
                  "aria-label": "Close",
                  onClick: () => f("home"),
                  className:
                    "text-zinc-600 hover:text-zinc-300 transition-colors p-1 -ml-1",
                  children: e.jsx(h.X, { className: "w-4 h-4" }),
                }),
                e.jsx("h1", {
                  className: "text-sm font-semibold text-white",
                  children: "Join whiteboard session",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2.5 px-4 py-3 border-b border-zinc-800",
                  children: [
                    e.jsx(Je, { n: "1", done: !!le }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-200",
                      children: "Paste offer code",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-4 space-y-3",
                  children: [
                    e.jsx("textarea", {
                      rows: 4,
                      value: ne,
                      onChange: (t) => Me(t.target.value),
                      placeholder: "Paste the offer code from the host…",
                      style: { fontSize: 16 },
                      className:
                        "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 font-mono text-zinc-300 placeholder:text-zinc-700 resize-none focus:outline-none focus:border-zinc-600 transition-colors leading-relaxed",
                    }),
                    e.jsx("button", {
                      onClick: ut,
                      disabled: !ne.trim() || I === "connecting",
                      className:
                        "w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-zinc-100 active:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-600 text-zinc-900 text-sm font-semibold rounded-lg transition-colors",
                      children:
                        I === "connecting" ? "Generating…" : "Generate answer",
                    }),
                  ],
                }),
              ],
            }),
            le &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2.5 px-4 py-3 border-b border-zinc-800",
                    children: [
                      e.jsx(Je, { n: "2", done: I === "connected" }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Send answer to host",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-4 space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-1",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-500 uppercase tracking-widest",
                            children: "Answer code",
                          }),
                          e.jsx(Ne, {
                            text: le,
                            id: "join-ans",
                            label: "Copy answer",
                          }),
                        ],
                      }),
                      e.jsx("textarea", {
                        rows: 4,
                        readOnly: !0,
                        value: le,
                        className:
                          "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-[11px] font-mono text-zinc-500 resize-none focus:outline-none leading-relaxed",
                      }),
                      e.jsxs("div", {
                        className: `flex items-center gap-2 text-xs px-3 py-2 rounded-lg border
                ${I === "connected" ? "text-white bg-white/5 border-zinc-600" : "text-zinc-500 bg-zinc-950 border-zinc-800"}`,
                        children: [
                          e.jsx("span", {
                            className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${I === "connected" ? "bg-white" : "bg-zinc-600 animate-pulse"}`,
                          }),
                          I === "waitConnect" && "Waiting for host to connect…",
                          I === "connected" && "Connected!",
                          I === "failed" && "Connection failed — try again",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      : e.jsxs("div", {
          className: "-m-4 md:-m-8 flex flex-col overflow-hidden bg-zinc-950",
          style: { height: "calc(100svh - 3.5rem)" },
          children: [
            e.jsxs("div", {
              className:
                "hidden md:flex items-center gap-2 px-2 py-1.5 bg-zinc-900 border-b border-zinc-800 flex-shrink-0 flex-wrap z-10",
              children: [
                e.jsx("div", {
                  className:
                    "flex items-center gap-0.5 bg-zinc-950 rounded-lg p-0.5 border border-zinc-800",
                  children: ke.map(({ id: t, icon: r, label: s, key: c }) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => Ke(t),
                        title: `${s} (${c})`,
                        className: `w-7 h-7 rounded-md flex items-center justify-center transition-colors relative
                ${m === t ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"}`,
                        children: [
                          e.jsx(r, { className: "w-3.5 h-3.5" }),
                          t === "select" &&
                            e.jsx("span", {
                              className:
                                "absolute -right-1 top-1 bottom-1 w-px bg-zinc-700",
                            }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                e.jsx("div", { className: "w-px h-5 bg-zinc-800" }),
                e.jsxs("div", {
                  className: "flex items-center gap-0.5",
                  children: [
                    tt.map((t) =>
                      e.jsx(
                        "button",
                        {
                          onClick: () => j(t),
                          title: t,
                          className: `w-4 h-4 rounded-full border transition-all flex-shrink-0
                ${x === t ? "scale-125 border-zinc-300" : "border-zinc-700 hover:scale-110"}`,
                          style: { backgroundColor: t },
                        },
                        t,
                      ),
                    ),
                    e.jsx("input", {
                      type: "color",
                      value: x,
                      onChange: (t) => j(t.target.value),
                      className:
                        "w-4 h-4 rounded-full border border-zinc-700 cursor-pointer ml-0.5",
                      title: "Custom",
                    }),
                  ],
                }),
                e.jsx("div", { className: "w-px h-5 bg-zinc-800" }),
                e.jsx("div", {
                  className:
                    "flex items-center gap-0.5 bg-zinc-950 rounded-lg p-0.5 border border-zinc-800",
                  children: nt.map((t) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => D(t),
                        title: `${t}px`,
                        className: `w-7 h-7 rounded-md flex items-center justify-center transition-colors
                ${y === t ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"}`,
                        children: e.jsx("div", {
                          className: "rounded-full bg-current",
                          style: {
                            width: Math.min(t, 16),
                            height: Math.min(t, 16),
                            opacity: y === t ? 1 : 0.5,
                          },
                        }),
                      },
                      t,
                    ),
                  ),
                }),
                e.jsx("div", { className: "w-px h-5 bg-zinc-800" }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-0.5 bg-zinc-950 rounded-lg p-0.5 border border-zinc-800",
                  children: [
                    e.jsx("button", {
                      onClick: xe,
                      title: "Undo (Ctrl+Z)",
                      disabled: E.length === 0,
                      className:
                        "w-7 h-7 rounded-md flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 disabled:opacity-30 transition-colors",
                      children: e.jsx(h.Undo, { className: "w-3.5 h-3.5" }),
                    }),
                    e.jsx("button", {
                      onClick: We,
                      title: "Clear",
                      className:
                        "w-7 h-7 rounded-md flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors",
                      children: e.jsx(h.Trash, { className: "w-3.5 h-3.5" }),
                    }),
                    e.jsx("button", {
                      onClick: Ye,
                      title: "Export PNG",
                      className:
                        "w-7 h-7 rounded-md flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors",
                      children: e.jsx(h.Download, { className: "w-3.5 h-3.5" }),
                    }),
                    e.jsx("button", {
                      onClick: () => Se(!te),
                      title: "Grid",
                      className: `w-7 h-7 rounded-md flex items-center justify-center transition-colors
              ${te ? "bg-zinc-700 text-white" : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"}`,
                      children: e.jsx(h.Grid, { className: "w-3.5 h-3.5" }),
                    }),
                  ],
                }),
                W &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("div", { className: "w-px h-5 bg-zinc-800" }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[10px] text-zinc-600 font-mono px-1",
                            children: "1 selected",
                          }),
                          e.jsx("button", {
                            onClick: ie,
                            title: "Delete (Del)",
                            className:
                              "w-7 h-7 rounded-md flex items-center justify-center text-zinc-500 hover:text-red-400 hover:bg-zinc-800 transition-colors bg-zinc-950 border border-zinc-800",
                            children: e.jsx(h.Trash, {
                              className: "w-3.5 h-3.5",
                            }),
                          }),
                          e.jsx("button", {
                            onClick: () => {
                              (M(null), (v.current = null), P(null));
                            },
                            title: "Deselect (Esc)",
                            className:
                              "w-7 h-7 rounded-md flex items-center justify-center text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors bg-zinc-950 border border-zinc-800",
                            children: e.jsx(h.X, { className: "w-3.5 h-3.5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", { className: "flex-1" }),
                e.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    I === "connected" &&
                      e.jsxs("span", {
                        className:
                          "text-[11px] text-zinc-400 flex items-center gap-1.5 px-2 py-1 rounded border border-zinc-800",
                        children: [
                          e.jsx("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-white",
                          }),
                          "Live",
                        ],
                      }),
                    e.jsx("button", {
                      "aria-label": "Open chat",
                      onClick: () => {
                        A !== "chat" || !se ? (V(!0), re("chat")) : V(!1);
                      },
                      className: `w-7 h-7 rounded-lg flex items-center justify-center border transition-colors
              ${se && A === "chat" ? "bg-zinc-800 border-zinc-600 text-zinc-200" : "border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700"}`,
                      children: e.jsx(h.Chat, { className: "w-3.5 h-3.5" }),
                    }),
                    a !== "join" &&
                      e.jsxs("button", {
                        onClick: () => {
                          A !== "peers" || !se ? (V(!0), re("peers")) : V(!1);
                        },
                        className: `inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg border text-xs transition-colors
                ${se && A === "peers" ? "bg-zinc-800 border-zinc-600 text-zinc-200" : "border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700"}`,
                        children: [
                          e.jsx(h.Users, { className: "w-3.5 h-3.5" }),
                          e.jsx("span", {
                            className: "font-mono",
                            children: q,
                          }),
                        ],
                      }),
                    e.jsx("button", {
                      "aria-label": "Close",
                      onClick: () => f("home"),
                      className:
                        "w-7 h-7 rounded-lg flex items-center justify-center border border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 transition-colors",
                      children: e.jsx(h.X, { className: "w-3.5 h-3.5" }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex md:hidden items-center gap-0 bg-zinc-900 border-b border-zinc-800 flex-shrink-0 z-10",
              style: { height: 48 },
              children: [
                e.jsx("button", {
                  onClick: () => f("home"),
                  "aria-label": "Close",
                  className:
                    "flex-shrink-0 w-11 h-12 flex items-center justify-center text-zinc-600 active:text-zinc-200 active:bg-zinc-800 transition-colors",
                  children: e.jsx(h.X, { className: "w-4 h-4" }),
                }),
                e.jsx("div", {
                  className: "w-px h-6 bg-zinc-800 flex-shrink-0",
                }),
                e.jsx("div", {
                  className: "flex-1 overflow-x-auto overflow-y-hidden",
                  style: {
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                  },
                  onTouchStart: (t) => t.stopPropagation(),
                  onTouchMove: (t) => t.stopPropagation(),
                  children: e.jsx("div", {
                    className: "flex items-center h-12 px-1 gap-0.5 w-max",
                    children: ke.map(({ id: t, icon: r, label: s }) =>
                      e.jsx(
                        "button",
                        {
                          onClick: () => Ke(t),
                          "aria-label": s,
                          className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors
                  ${m === t ? "bg-zinc-700 text-white" : "text-zinc-500 active:bg-zinc-800 active:text-zinc-200"}`,
                          children: e.jsx(r, { className: "w-4 h-4" }),
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                e.jsx("div", {
                  className: "w-px h-6 bg-zinc-800 flex-shrink-0",
                }),
                e.jsx("button", {
                  onClick: () => Y(T === "style" ? null : "style"),
                  "aria-label": "Colors & style",
                  className: `flex-shrink-0 w-11 h-12 flex items-center justify-center transition-colors
            ${T === "style" ? "bg-zinc-800" : "active:bg-zinc-800"}`,
                  children: e.jsx("div", {
                    className:
                      "w-5 h-5 rounded-full border-2 border-zinc-500 shadow",
                    style: { backgroundColor: x },
                  }),
                }),
                e.jsx("button", {
                  onClick: xe,
                  disabled: E.length === 0,
                  "aria-label": "Undo",
                  className:
                    "flex-shrink-0 w-11 h-12 flex items-center justify-center text-zinc-500 active:text-zinc-200 active:bg-zinc-800 disabled:opacity-30 transition-colors",
                  children: e.jsx(h.Undo, { className: "w-4 h-4" }),
                }),
                e.jsxs("button", {
                  onClick: () =>
                    Y(T === "peers" || T === "chat" ? null : "peers"),
                  "aria-label": "People & chat",
                  className: `flex-shrink-0 w-11 h-12 flex items-center justify-center relative transition-colors
            ${T === "peers" || T === "chat" ? "bg-zinc-800 text-zinc-200" : "text-zinc-500 active:bg-zinc-800 active:text-zinc-200"}`,
                  children: [
                    e.jsx(h.Menu, { className: "w-4 h-4" }),
                    q > 0 &&
                      e.jsx("span", {
                        className:
                          "absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-white",
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-1 min-h-0 overflow-hidden",
              children: [
                e.jsxs("div", {
                  className: "flex-1 relative overflow-hidden bg-zinc-950",
                  style: { cursor: ht },
                  children: [
                    te &&
                      e.jsx("div", {
                        className: "absolute inset-0 pointer-events-none z-0",
                        style: {
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
                          backgroundSize: "40px 40px",
                        },
                      }),
                    e.jsx("canvas", {
                      ref: _,
                      width: C,
                      height: S,
                      className: "absolute inset-0 w-full h-full",
                    }),
                    e.jsx("canvas", {
                      ref: B,
                      width: C,
                      height: S,
                      className: "absolute inset-0 w-full h-full",
                      style: { touchAction: "none" },
                      onMouseDown: Ae,
                      onMouseMove: Ue,
                      onMouseUp: ve,
                      onMouseLeave: ve,
                      onTouchStart: Ae,
                      onTouchMove: Ue,
                      onTouchEnd: ve,
                    }),
                    Fe &&
                      !K.current &&
                      e.jsx(vt, {
                        bbox: Fe,
                        onMoveStart: dt,
                        onResizeStart: xt,
                        onDelete: ie,
                        isMobile: l,
                      }),
                    Object.entries(lt).map(([t, r]) => {
                      const s = B.current;
                      if (!s) return null;
                      const c = s.getBoundingClientRect(),
                        u = (r.x / C) * c.width,
                        g = (r.y / S) * c.height;
                      return e.jsxs(
                        "div",
                        {
                          className: "absolute pointer-events-none z-20",
                          style: {
                            left: u,
                            top: g,
                            transform: "translate(-2px,-2px)",
                          },
                          children: [
                            e.jsx("svg", {
                              width: "14",
                              height: "14",
                              viewBox: "0 0 14 14",
                              children: e.jsx("path", {
                                d: "M0 0 L14 5 L7 7 L5 14 Z",
                                fill: "white",
                                opacity: "0.9",
                              }),
                            }),
                            e.jsx("span", {
                              className:
                                "absolute left-4 top-0 bg-zinc-800 text-white text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 whitespace-nowrap",
                              children: r.label,
                            }),
                          ],
                        },
                        t,
                      );
                    }),
                    G &&
                      e.jsx(zt, {
                        cssX: G.cssX,
                        cssY: G.cssY,
                        color: x,
                        fontSize: Math.max(
                          16,
                          y *
                            5 *
                            ((B.current?.getBoundingClientRect().width || C) /
                              C),
                        ),
                        onCommit: at,
                        onCancel: () => oe(null),
                      }),
                    N.length === 0 &&
                      !K.current &&
                      e.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center pointer-events-none select-none",
                        children: e.jsxs("div", {
                          className: "text-center px-6",
                          children: [
                            e.jsx(h.Pen, {
                              className: "w-8 h-8 text-zinc-800 mx-auto mb-3",
                            }),
                            e.jsx("p", {
                              className: "text-zinc-700 text-sm",
                              children: "Start drawing",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-zinc-800 text-xs mt-1 hidden md:block",
                              children: [
                                "Stroke auto-selects · ",
                                e.jsx("kbd", {
                                  className: "font-mono",
                                  children: "V",
                                }),
                                " to select · ",
                                e.jsx("kbd", {
                                  className: "font-mono",
                                  children: "Del",
                                }),
                                " to delete",
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-zinc-800 text-xs mt-1 md:hidden",
                              children: "Stroke auto-selects after drawing",
                            }),
                          ],
                        }),
                      }),
                    e.jsxs("div", {
                      className:
                        "absolute bottom-2 left-3 hidden md:block pointer-events-none",
                      children: [
                        N.length > 0 &&
                          !W &&
                          e.jsxs("span", {
                            className: "text-[10px] text-zinc-700 font-mono",
                            children: [
                              N.length,
                              " stroke",
                              N.length !== 1 ? "s" : "",
                              " · V=select · Del=delete",
                            ],
                          }),
                        W &&
                          e.jsx("span", {
                            className: "text-[10px] text-zinc-500 font-mono",
                            children:
                              "Drag=move · handles=resize · Del=delete · Esc=deselect",
                          }),
                      ],
                    }),
                    W &&
                      l &&
                      e.jsx("div", {
                        className:
                          "absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-20",
                        children: e.jsx("div", {
                          className:
                            "bg-zinc-900/95 border border-zinc-700 rounded-full px-3 py-1.5 text-[11px] text-zinc-400 whitespace-nowrap shadow-lg",
                          children: "Drag to move · handles to resize",
                        }),
                      }),
                    W &&
                      l &&
                      e.jsx("div", {
                        className:
                          "absolute top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-auto",
                        children: e.jsxs("div", {
                          className:
                            "flex items-center gap-1.5 bg-zinc-900/95 border border-zinc-700 rounded-xl px-2 py-1.5 shadow-lg",
                          children: [
                            e.jsxs("button", {
                              onClick: ie,
                              className:
                                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 active:bg-zinc-700 text-zinc-400 active:text-red-400 text-xs font-medium transition-colors",
                              children: [
                                e.jsx(h.Trash, { className: "w-3.5 h-3.5" }),
                                "Delete",
                              ],
                            }),
                            e.jsxs("button", {
                              onClick: () => {
                                (M(null), (v.current = null), P(null));
                              },
                              className:
                                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 active:bg-zinc-700 text-zinc-400 active:text-zinc-200 text-xs font-medium transition-colors",
                              children: [
                                e.jsx(h.X, { className: "w-3.5 h-3.5" }),
                                "Done",
                              ],
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                se &&
                  e.jsxs("div", {
                    className:
                      "hidden md:flex w-72 bg-zinc-900 border-l border-zinc-800 flex-col flex-shrink-0 overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center border-b border-zinc-800 flex-shrink-0",
                        children: [
                          a !== "join" &&
                            e.jsxs("button", {
                              onClick: () => re("peers"),
                              className: `flex-1 py-2.5 text-xs font-medium transition-colors relative
                    ${A === "peers" ? "text-white" : "text-zinc-600 hover:text-zinc-300"}`,
                              children: [
                                "People ",
                                q > 0 && `(${q})`,
                                A === "peers" &&
                                  e.jsx("span", {
                                    className:
                                      "absolute bottom-0 left-0 right-0 h-px bg-white",
                                  }),
                              ],
                            }),
                          e.jsxs("button", {
                            onClick: () => re("chat"),
                            className: `flex-1 py-2.5 text-xs font-medium transition-colors relative
                  ${A === "chat" ? "text-white" : "text-zinc-600 hover:text-zinc-300"}`,
                            children: [
                              "Chat",
                              A === "chat" &&
                                e.jsx("span", {
                                  className:
                                    "absolute bottom-0 left-0 right-0 h-px bg-white",
                                }),
                            ],
                          }),
                          e.jsx("button", {
                            "aria-label": "Close",
                            onClick: () => V(!1),
                            className:
                              "px-3 text-zinc-700 hover:text-zinc-300 transition-colors flex-shrink-0",
                            children: e.jsx(h.X, { className: "w-3.5 h-3.5" }),
                          }),
                        ],
                      }),
                      A === "peers" &&
                        a !== "join" &&
                        e.jsx("div", {
                          className: "flex-1 overflow-y-auto",
                          children: e.jsx(ct, {
                            peers: pe,
                            activePeer: Re,
                            setActivePeer: be,
                            createPeer: Xe,
                            applyAnswer: ze,
                            updatePeer: X,
                            shareURL: He,
                            CopyBtn: Ne,
                          }),
                        }),
                      A === "chat" &&
                        e.jsx("div", {
                          className: "flex-1 overflow-hidden",
                          children: e.jsx(rt, { messages: De, onSend: _e }),
                        }),
                    ],
                  }),
              ],
            }),
            e.jsx("div", {
              className:
                "hidden md:flex px-3 py-1 bg-zinc-900 border-t border-zinc-800 items-center gap-4 flex-shrink-0",
              children: [
                { key: "V", label: "Select" },
                { key: "P", label: "Pen" },
                { key: "E", label: "Eraser" },
                { key: "R", label: "Rect" },
                { key: "C", label: "Circle" },
                { key: "T", label: "Text" },
                { key: "Ctrl+Z", label: "Undo" },
                { key: "Del", label: "Delete" },
                { key: "Esc", label: "Deselect" },
              ].map(({ key: t, label: r }) =>
                e.jsxs(
                  "span",
                  {
                    className:
                      "text-[10px] text-zinc-700 flex items-center gap-1 whitespace-nowrap",
                    children: [
                      e.jsx("kbd", {
                        className:
                          "font-mono bg-zinc-800 border border-zinc-700 rounded px-1 text-zinc-500",
                        children: t,
                      }),
                      r,
                    ],
                  },
                  t,
                ),
              ),
            }),
            e.jsx(st, {
              open: T === "style",
              onClose: () => Y(null),
              title: "Style",
              children: e.jsxs("div", {
                className: "px-4 pb-6 pt-1 space-y-5",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] text-zinc-500 uppercase tracking-widest mb-3",
                        children: "Color",
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-5 gap-2.5",
                        children: [
                          tt.map((t) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => j(t),
                                className: `h-11 rounded-xl border-2 active:scale-95 transition-all flex items-center justify-center
                    ${x === t ? "border-white ring-1 ring-white/30" : "border-zinc-700 active:border-zinc-500"}`,
                                style: { backgroundColor: t },
                                children:
                                  x === t &&
                                  e.jsx(h.Check, {
                                    className: "w-4 h-4",
                                    style: {
                                      color:
                                        t === "#000000" || t === "#000"
                                          ? "#fff"
                                          : "#000",
                                      mixBlendMode: "difference",
                                    },
                                  }),
                              },
                              t,
                            ),
                          ),
                          e.jsxs("label", {
                            className:
                              "h-11 rounded-xl border-2 border-dashed border-zinc-700 flex items-center justify-center cursor-pointer active:scale-95 transition-all overflow-hidden relative",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] text-zinc-600 font-mono select-none",
                                children: "+",
                              }),
                              e.jsx("input", {
                                type: "color",
                                value: x,
                                onChange: (t) => j(t.target.value),
                                className:
                                  "absolute inset-0 opacity-0 cursor-pointer w-full h-full",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] text-zinc-500 uppercase tracking-widest mb-3",
                        children: "Stroke width",
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-2",
                        children: nt.map((t) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => D(t),
                              className: `flex-1 h-11 rounded-xl border flex items-center justify-center active:scale-95 transition-all
                    ${y === t ? "bg-zinc-700 border-zinc-500" : "border-zinc-800 active:bg-zinc-800"}`,
                              children: e.jsx("div", {
                                className: "rounded-full bg-white",
                                style: {
                                  width: Math.min(t, 20),
                                  height: Math.min(t, 20),
                                  opacity: y === t ? 1 : 0.4,
                                },
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] text-zinc-500 uppercase tracking-widest mb-3",
                        children: "Actions",
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: [
                          e.jsxs("button", {
                            onClick: () => Se(!te),
                            className: `h-12 rounded-xl border flex flex-col items-center justify-center gap-1 text-[11px] active:scale-95 transition-all
                  ${te ? "bg-zinc-700 border-zinc-500 text-white" : "border-zinc-800 text-zinc-500 active:bg-zinc-800"}`,
                            children: [
                              e.jsx(h.Grid, { className: "w-4 h-4" }),
                              "Grid",
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: () => {
                              (Ye(), Y(null));
                            },
                            className:
                              "h-12 rounded-xl border border-zinc-800 flex flex-col items-center justify-center gap-1 text-[11px] text-zinc-500 active:bg-zinc-800 active:text-zinc-200 active:scale-95 transition-all",
                            children: [
                              e.jsx(h.Download, { className: "w-4 h-4" }),
                              "Export",
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: () => {
                              (We(), Y(null));
                            },
                            className:
                              "h-12 rounded-xl border border-zinc-800 flex flex-col items-center justify-center gap-1 text-[11px] text-zinc-500 active:bg-zinc-800 active:text-red-400 active:scale-95 transition-all",
                            children: [
                              e.jsx(h.Trash, { className: "w-4 h-4" }),
                              "Clear",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(st, {
              open: T === "peers" || T === "chat",
              onClose: () => Y(null),
              tall: !0,
              children: [
                e.jsxs("div", {
                  className: "flex border-b border-zinc-800 mx-4 flex-shrink-0",
                  children: [
                    a !== "join" &&
                      e.jsxs("button", {
                        onClick: () => Y("peers"),
                        className: `flex-1 py-2.5 text-xs font-medium transition-colors relative
                ${T === "peers" ? "text-white" : "text-zinc-600"}`,
                        children: [
                          "People ",
                          q > 0 && `(${q})`,
                          T === "peers" &&
                            e.jsx("span", {
                              className:
                                "absolute bottom-0 left-0 right-0 h-px bg-white",
                            }),
                        ],
                      }),
                    e.jsxs("button", {
                      onClick: () => Y("chat"),
                      className: `flex-1 py-2.5 text-xs font-medium transition-colors relative
              ${T === "chat" ? "text-white" : "text-zinc-600"}`,
                      children: [
                        "Chat",
                        T === "chat" &&
                          e.jsx("span", {
                            className:
                              "absolute bottom-0 left-0 right-0 h-px bg-white",
                          }),
                      ],
                    }),
                  ],
                }),
                T === "peers" &&
                  a !== "join" &&
                  e.jsx(ct, {
                    peers: pe,
                    activePeer: Re,
                    setActivePeer: be,
                    createPeer: Xe,
                    applyAnswer: ze,
                    updatePeer: X,
                    shareURL: He,
                    CopyBtn: Ne,
                  }),
                T === "chat" &&
                  e.jsx("div", {
                    style: { height: "50svh" },
                    children: e.jsx(rt, { messages: De, onSend: _e }),
                  }),
              ],
            }),
          ],
        });
}
export { Ct as default };
