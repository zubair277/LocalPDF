import { r as m, j as e } from "./react-vendor-Bc7KCos-.js";
const ze = () => (
    m.useEffect(() => {
      if (document.getElementById("docscan-styles")) return;
      const t = document.createElement("style");
      ((t.id = "docscan-styles"),
        (t.textContent = `
      .ds-root { font-family: inherit; }
      .ds-display { font-family: inherit; }
      .ds-mono { font-family: inherit; }
      .ds-btn-primary {
        background: #fff; color: #000;
        font-family: inherit;
        font-weight: 700; letter-spacing: -0.01em;
        border-radius: 16px; border: none;
        transition: all 0.15s cubic-bezier(0.4,0,0.2,1);
        -webkit-tap-highlight-color: transparent;
      }
      .ds-btn-primary:active { background: #e5e5e5; transform: scale(0.985); }
      .ds-btn-ghost {
        background: #222; color: #fff;
        font-family: inherit;
        font-weight: 500;
        border: 1px solid #333;
        border-radius: 16px;
        transition: all 0.15s cubic-bezier(0.4,0,0.2,1);
        -webkit-tap-highlight-color: transparent;
      }
      .ds-btn-ghost:active { background: #2a2a2a; transform: scale(0.985); }
      .ds-card {
        background: #1c1c1c;
        border: 1px solid #2e2e2e;
        border-radius: 16px;
      }
      .ds-card-hover:hover { border-color: #444; }
      @keyframes ds-pulse-ring {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.4); opacity: 0; }
      }
      @keyframes ds-fade-up {
        from { opacity: 0; transform: translateY(8px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes ds-shimmer {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .ds-fade-up { animation: ds-fade-up 0.25s cubic-bezier(0.4,0,0.2,1) both; }
      .ds-stagger-1 { animation-delay: 0.04s; }
      .ds-stagger-2 { animation-delay: 0.08s; }
      .ds-stagger-3 { animation-delay: 0.12s; }
      .ds-stagger-4 { animation-delay: 0.16s; }
      input[type=range] {
        -webkit-appearance: none; appearance: none;
        height: 2px; border-radius: 1px;
        background: #3a3a3a; outline: none;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none; appearance: none;
        width: 16px; height: 16px;
        border-radius: 50%; background: #fff;
        cursor: pointer; border: none;
        box-shadow: 0 0 0 3px #000, 0 0 0 4px #666;
      }
      select { cursor: pointer; }
      * { -webkit-tap-highlight-color: transparent; }
    `),
        document.head.appendChild(t));
    }, []),
    null
  ),
  O = ({
    d: t,
    children: l,
    className: i = "w-5 h-5",
    strokeWidth: s = 1.75,
  }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: i,
      children: l,
    }),
  tt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
        }),
        e.jsx("circle", { cx: "12", cy: "13", r: "4" }),
      ],
    }),
  Ms = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M1 4v6h6" }),
        e.jsx("path", { d: "M23 20v-6h-6" }),
        e.jsx("path", {
          d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15",
        }),
      ],
    }),
  vn = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
      }),
    }),
  pt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  nt = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  zs = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  It = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
        e.jsx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
        e.jsx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
        e.jsx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
        e.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
      ],
    }),
  Nn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 2v6h-6" }),
        e.jsx("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" }),
      ],
    }),
  Zt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("polyline", { points: "3 6 5 6 21 6" }),
        e.jsx("path", { d: "M19 6l-1 14H6L5 6" }),
        e.jsx("path", { d: "M10 11v6" }),
        e.jsx("path", { d: "M14 11v6" }),
        e.jsx("path", { d: "M9 6V4h6v2" }),
      ],
    }),
  Is = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  Rs = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  Ps = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        e.jsx("path", {
          d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        }),
      ],
    }),
  Xt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  Ss = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("rect", {
          x: "9",
          y: "9",
          width: "13",
          height: "13",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", {
          d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
        }),
      ],
    }),
  Ds = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  kn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("circle", { cx: "12", cy: "12", r: "6" }),
        e.jsx("circle", { cx: "12", cy: "12", r: "2" }),
      ],
    }),
  An = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "m15 5 4 4" }),
        e.jsx("path", {
          d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",
        }),
        e.jsx("path", { d: "m8 6 2-2" }),
        e.jsx("path", {
          d: "m2 22 5.5-1.5L21 7a2.83 2.83 0 0 0-4-4L3.5 16.5Z",
        }),
      ],
    }),
  Cn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  Fs = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("line", { x1: "3", y1: "9", x2: "21", y2: "9" }),
        e.jsx("line", { x1: "3", y1: "15", x2: "21", y2: "15" }),
        e.jsx("line", { x1: "9", y1: "3", x2: "9", y2: "21" }),
        e.jsx("line", { x1: "15", y1: "3", x2: "15", y2: "21" }),
      ],
    }),
  Ts = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("line", { x1: "12", y1: "2", x2: "12", y2: "22" }),
        e.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
      ],
    }),
  Ls = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", {
          cx: "9",
          cy: "6",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "15",
          cy: "6",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "9",
          cy: "12",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "15",
          cy: "12",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "9",
          cy: "18",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "15",
          cy: "18",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
      ],
    }),
  Mn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M23 4v6h-6" }),
        e.jsx("path", { d: "M1 20v-6h6" }),
        e.jsx("path", {
          d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15",
        }),
      ],
    }),
  Bn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "9", y1: "13", x2: "15", y2: "13" }),
        e.jsx("line", { x1: "9", y1: "17", x2: "12", y2: "17" }),
      ],
    }),
  As = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", {
          cx: "12",
          cy: "5",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "12",
          cy: "12",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
        e.jsx("circle", {
          cx: "12",
          cy: "19",
          r: "1",
          fill: "currentColor",
          stroke: "none",
        }),
      ],
    }),
  zn = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("polyline", { points: "15 3 21 3 21 9" }),
        e.jsx("polyline", { points: "9 21 3 21 3 15" }),
        e.jsx("line", { x1: "21", y1: "3", x2: "14", y2: "10" }),
        e.jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" }),
      ],
    }),
  Bs = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", { cx: "18", cy: "5", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "12", r: "3" }),
        e.jsx("circle", { cx: "18", cy: "19", r: "3" }),
        e.jsx("line", { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" }),
        e.jsx("line", { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" }),
      ],
    }),
  Es = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M8 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3",
        }),
        e.jsx("rect", { x: "8", y: "2", width: "8", height: "8", rx: "1" }),
      ],
    }),
  $s = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
        }),
        e.jsx("rect", {
          x: "8",
          y: "2",
          width: "8",
          height: "4",
          rx: "1",
          ry: "1",
        }),
      ],
    }),
  Jt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M3 3v5h5" }),
        e.jsx("path", { d: "M3.05 13A9 9 0 1 0 6 5.3L3 8" }),
        e.jsx("path", { d: "M12 7v5l4 2" }),
      ],
    }),
  Os = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("polyline", { points: "12 6 12 12 16 14" }),
      ],
    }),
  In = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
      }),
    }),
  Rt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        e.jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        e.jsx("polyline", { points: "21 15 16 10 5 21" }),
      ],
    }),
  Tt = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
        e.jsx("path", { d: "M2 17l10 5 10-5" }),
        e.jsx("path", { d: "M2 12l10 5 10-5" }),
      ],
    }),
  Us = (t) =>
    e.jsxs(O, {
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
  Hs = (t) =>
    e.jsxs(O, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        }),
        e.jsx("polyline", { points: "15 3 21 3 21 9" }),
        e.jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" }),
      ],
    }),
  _s = (t) =>
    e.jsxs(O, {
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
  Rn = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polyline", { points: "15 18 9 12 15 6" }),
    }),
  Pn = (t) =>
    e.jsx(O, {
      ...t,
      children: e.jsx("polyline", { points: "9 18 15 12 9 6" }),
    }),
  te = (t = 12) => {
    try {
      navigator.vibrate?.(t);
    } catch {}
  },
  Sn = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js",
  En = 1600,
  Dn = "docscan_onboarded_v1",
  Fe = [
    {
      id: "original",
      label: "Original",
      enhance: { greyscale: !1, brightness: 100, contrast: 100 },
    },
    {
      id: "document",
      label: "Document",
      enhance: { greyscale: !1, brightness: 112, contrast: 148 },
    },
    {
      id: "bw",
      label: "B&W",
      enhance: { greyscale: !0, brightness: 108, contrast: 158 },
    },
    {
      id: "whiteboard",
      label: "Board",
      enhance: { greyscale: !0, brightness: 130, contrast: 195 },
    },
    {
      id: "photo",
      label: "Photo",
      enhance: { greyscale: !1, brightness: 106, contrast: 108 },
    },
  ],
  Ys = ({ greyscale: t, brightness: l, contrast: i }) =>
    [t ? "grayscale(100%)" : "", `brightness(${l}%)`, `contrast(${i}%)`]
      .filter(Boolean)
      .join(" "),
  $n = [
    { id: "original", label: "Original", w: null, h: null },
    { id: "a4", label: "A4", w: 595.28, h: 841.89 },
    { id: "letter", label: "Letter", w: 612, h: 792 },
  ],
  Xs = {
    Latin: "eng",
    Devanagari: "hin",
    Arabic: "ara",
    Cyrillic: "rus",
    Han: "chi_sim",
    Hangul: "kor",
    Japanese: "jpn",
    Greek: "ell",
    Hebrew: "heb",
    Thai: "tha",
  },
  Wt = [
    { code: "auto", label: "Auto-detect" },
    { code: "eng", label: "English" },
    { code: "hin", label: "Hindi" },
    { code: "fra", label: "French" },
    { code: "deu", label: "German" },
    { code: "spa", label: "Spanish" },
    { code: "por", label: "Portuguese" },
    { code: "ita", label: "Italian" },
    { code: "chi_sim", label: "Chinese (Simplified)" },
    { code: "chi_tra", label: "Chinese (Traditional)" },
    { code: "jpn", label: "Japanese" },
    { code: "kor", label: "Korean" },
    { code: "ara", label: "Arabic" },
    { code: "rus", label: "Russian" },
    { code: "ell", label: "Greek" },
    { code: "heb", label: "Hebrew" },
    { code: "tha", label: "Thai" },
    { code: "tur", label: "Turkish" },
    { code: "pol", label: "Polish" },
    { code: "nld", label: "Dutch" },
  ],
  ye = () => new Promise((t) => setTimeout(t, 16));
function Ws({ children: t, className: l = "" }) {
  return e.jsx("div", { className: `ds-fade-up ${l}`, children: t });
}
function Gs({ onDismiss: t }) {
  const l = [
    {
      icon: An,
      title: "Drag corner handles",
      desc: "A loupe magnifies exact pixel position while dragging.",
    },
    {
      icon: Ls,
      title: "Drag thumbnails to reorder",
      desc: "Hold and drag any thumbnail to rearrange page order.",
    },
    {
      icon: As,
      title: "Long-press for options",
      desc: "Hold a thumbnail for rotate, replace, move, delete.",
    },
  ];
  return e.jsx("div", {
    className: "fixed inset-0 z-[100] flex flex-col items-end justify-end",
    style: { background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" },
    onClick: t,
    children: e.jsxs("div", {
      className: "w-full max-w-sm mx-auto p-4 space-y-2 ds-fade-up",
      style: { paddingBottom: "max(28px,env(safe-area-inset-bottom))" },
      onClick: (i) => i.stopPropagation(),
      children: [
        e.jsxs("div", {
          className: "text-center pb-2",
          children: [
            e.jsx("p", {
              className:
                "ds-display text-white font-bold text-base tracking-tight",
              children: "Quick tips",
            }),
            e.jsx("p", {
              className: "text-zinc-400 text-xs mt-1",
              style: { fontFamily: "inherit" },
              children: "Hidden interactions worth knowing",
            }),
          ],
        }),
        l.map(({ icon: i, title: s, desc: c }, h) =>
          e.jsxs(
            "div",
            {
              className: "flex items-start gap-3 ds-card p-3.5",
              style: {
                animation: "ds-fade-up 0.25s both",
                animationDelay: `${h * 0.07}s`,
              },
              children: [
                e.jsx("div", {
                  className:
                    "w-9 h-9 rounded-xl border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5",
                  style: { background: "#252525" },
                  children: e.jsx(i, { className: "w-4 h-4 text-zinc-300" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-white text-sm font-semibold leading-tight ds-display",
                      children: s,
                    }),
                    e.jsx("p", {
                      className: "text-zinc-400 text-xs mt-0.5 leading-relaxed",
                      style: { fontFamily: "inherit" },
                      children: c,
                    }),
                  ],
                }),
              ],
            },
            s,
          ),
        ),
        e.jsx("button", {
          onClick: t,
          className: "ds-btn-primary w-full py-3.5 text-sm mt-1",
          children: "Got it",
        }),
      ],
    }),
  });
}
function qs({
  captures: t,
  onEdit: l,
  onDeleteCapture: i,
  onConfirmAll: s,
  onDismiss: c,
}) {
  return e.jsxs("div", {
    className: "fixed inset-0 z-[110] flex flex-col bg-black",
    style: { paddingBottom: "env(safe-area-inset-bottom)" },
    children: [
      e.jsxs("div", {
        className:
          "flex items-center justify-between px-4 border-b border-zinc-800",
        style: {
          paddingTop: "max(16px,env(safe-area-inset-top))",
          paddingBottom: 14,
        },
        children: [
          e.jsxs("button", {
            onClick: c,
            className:
              "flex items-center gap-2 text-zinc-400 active:text-white transition-colors",
            children: [
              e.jsx(pt, { className: "w-4 h-4" }),
              e.jsx("span", {
                className: "text-sm",
                style: { fontFamily: "inherit" },
                children: "Back",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "text-center",
            children: [
              e.jsx("p", {
                className:
                  "ds-display text-white font-bold text-sm tracking-tight",
                children: "Batch Review",
              }),
              e.jsxs("p", {
                className: "ds-mono text-zinc-500 text-[10px] mt-0.5",
                children: [t.length, " captured"],
              }),
            ],
          }),
          e.jsx("button", {
            onClick: s,
            disabled: t.length === 0,
            className: "ds-btn-primary px-4 py-2 text-xs disabled:opacity-30",
            children: "Use all",
          }),
        ],
      }),
      e.jsx("div", {
        className: "px-4 py-2 border-b border-zinc-800/80",
        style: { background: "#111111" },
        children: e.jsxs("p", {
          className: "text-[11px] text-zinc-500 text-center",
          style: { fontFamily: "inherit" },
          children: [
            "Tap ",
            e.jsx("span", {
              className: "text-zinc-300 font-semibold",
              children: "Edit",
            }),
            " to adjust corners ·",
            e.jsx("span", {
              className: "text-zinc-300 font-semibold",
              children: " ×",
            }),
            " to discard ·",
            e.jsx("span", {
              className: "text-zinc-300 font-semibold",
              children: " Use all",
            }),
            " ",
            "auto-warps everything",
          ],
        }),
      }),
      t.length === 0
        ? e.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: e.jsx("p", {
              className: "text-zinc-500 text-sm",
              style: { fontFamily: "inherit" },
              children: "No captures remaining",
            }),
          })
        : e.jsx("div", {
            className: "flex-1 overflow-y-auto p-3",
            children: e.jsx("div", {
              className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
              children: t.map((h, f) =>
                e.jsxs(
                  "div",
                  {
                    className: "relative rounded-2xl overflow-hidden ds-card",
                    children: [
                      e.jsx("img", {
                        src: h.dataUrl,
                        alt: `Capture ${f + 1}`,
                        className: "w-full object-cover",
                        style: { aspectRatio: "3/4" },
                      }),
                      e.jsx("div", {
                        className:
                          "absolute top-2 left-2 ds-mono text-[9px] font-medium text-white px-2 py-0.5 rounded-full",
                        style: {
                          background: "rgba(0,0,0,0.75)",
                          backdropFilter: "blur(8px)",
                        },
                        children: f + 1,
                      }),
                      e.jsx("button", {
                        "aria-label": "Close",
                        onClick: () => i(h.id),
                        className:
                          "absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full text-zinc-300 active:text-red-400 transition-colors",
                        style: {
                          background: "rgba(0,0,0,0.75)",
                          backdropFilter: "blur(8px)",
                        },
                        children: e.jsx(pt, { className: "w-3 h-3" }),
                      }),
                      e.jsx("div", {
                        className: "absolute bottom-0 left-0 right-0 p-2",
                        style: {
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                        },
                        children: e.jsxs("button", {
                          onClick: () => l(f),
                          className:
                            "w-full flex items-center justify-center gap-1.5 py-2.5 ds-btn-primary text-xs rounded-xl",
                          children: [
                            e.jsx(Us, { className: "w-3 h-3" }),
                            " Edit corners",
                          ],
                        }),
                      }),
                    ],
                  },
                  h.id,
                ),
              ),
            }),
          }),
      t.length > 0 &&
        e.jsx("div", {
          className: "px-4 pt-3 pb-4 border-t border-zinc-800",
          children: e.jsxs("button", {
            onClick: s,
            className:
              "ds-btn-primary w-full flex items-center justify-center gap-2.5 py-4 text-base",
            children: [
              e.jsx(Tt, { className: "w-5 h-5" }),
              "Add ",
              t.length,
              " page",
              t.length !== 1 ? "s" : "",
              " to document",
            ],
          }),
        }),
    ],
  });
}
const Vs = "docscan_session_db",
  We = "session",
  en = "active",
  tn = (() => {
    let t = null;
    return () =>
      new Promise((l, i) => {
        if (t) return l(t);
        const s = indexedDB.open(Vs, 1);
        ((s.onupgradeneeded = (c) => c.target.result.createObjectStore(We)),
          (s.onsuccess = (c) => {
            ((t = c.target.result), l(t));
          }),
          (s.onerror = () => i(s.error)));
      });
  })();
async function Zs(t, l, i) {
  try {
    const s = await tn(),
      c = t.map((h) => ({
        id: h.id,
        filterId: h.filterId,
        enhance: h.enhance,
        thumb: h.thumb,
        preview: h.preview,
        dataUrl: h.canvas.toDataURL("image/jpeg", 0.88),
      }));
    await new Promise((h, f) => {
      const b = s.transaction(We, "readwrite");
      (b
        .objectStore(We)
        .put({ pages: c, phase: l, selectedIdx: i, ts: Date.now() }, en),
        (b.oncomplete = h),
        (b.onerror = () => f(b.error)));
    });
  } catch {}
}
async function Js() {
  try {
    const t = await tn();
    return await new Promise((l, i) => {
      const c = t.transaction(We, "readonly").objectStore(We).get(en);
      ((c.onsuccess = () => l(c.result ?? null)),
        (c.onerror = () => i(c.error)));
    });
  } catch {
    return null;
  }
}
async function Pt() {
  try {
    const t = await tn();
    await new Promise((l, i) => {
      const s = t.transaction(We, "readwrite");
      (s.objectStore(We).delete(en),
        (s.oncomplete = l),
        (s.onerror = () => i(s.error)));
    });
  } catch {}
}
function Ks(t) {
  return new Promise((l, i) => {
    const s = new Image(),
      c = setTimeout(() => i(new Error("Image load timeout")), 8e3);
    ((s.onload = () => {
      clearTimeout(c);
      const h = pe(s.width, s.height);
      (fe(h).drawImage(s, 0, 0), l(h));
    }),
      (s.onerror = () => {
        (clearTimeout(c), i(new Error("Image load failed")));
      }),
      (s.src = t));
  });
}
const Qs = "docscan_history_db",
  Ge = "pdfs",
  On = "docscan_history_meta",
  Kt = 20,
  nn = (() => {
    let t = null;
    return () =>
      new Promise((l, i) => {
        if (t) return l(t);
        const s = indexedDB.open(Qs, 1);
        ((s.onupgradeneeded = (c) => c.target.result.createObjectStore(Ge)),
          (s.onsuccess = (c) => {
            ((t = c.target.result), l(t));
          }),
          (s.onerror = () => i(s.error)));
      });
  })();
function Ie() {
  try {
    return JSON.parse(localStorage.getItem(On) || "[]");
  } catch {
    return [];
  }
}
function sn(t) {
  localStorage.setItem(On, JSON.stringify(t));
}
async function er(t, l) {
  const i = await nn();
  return new Promise((s, c) => {
    const h = i.transaction(Ge, "readwrite");
    (h.objectStore(Ge).put(l, t),
      (h.oncomplete = s),
      (h.onerror = () => c(h.error)));
  });
}
async function tr(t) {
  const l = await nn();
  return new Promise((i, s) => {
    const h = l.transaction(Ge, "readonly").objectStore(Ge).get(t);
    ((h.onsuccess = () => i(h.result ?? null)), (h.onerror = () => s(h.error)));
  });
}
async function Un(t) {
  const l = await nn();
  return new Promise((i, s) => {
    const c = l.transaction(Ge, "readwrite");
    (c.objectStore(Ge).delete(t),
      (c.oncomplete = i),
      (c.onerror = () => s(c.error)));
  });
}
async function nr(t, l) {
  const i = `scan_${Date.now()}`,
    s = Ie();
  if (s.length >= Kt) {
    const c = s.splice(Kt - 1);
    await Promise.all(c.map((h) => Un(h.id).catch(() => {})));
  }
  return (
    s.unshift({
      id: i,
      name: l.name || "Untitled scan",
      pageCount: l.pageCount || 1,
      size: t.byteLength,
      savedAt: Date.now(),
    }),
    sn(s),
    await er(i, t),
    i
  );
}
async function Gt(t) {
  (sn(Ie().filter((l) => l.id !== t)), await Un(t).catch(() => {}));
}
function sr(t, l) {
  const i = Ie(),
    s = i.findIndex((c) => c.id === t);
  s !== -1 && ((i[s] = { ...i[s], name: l.trim() || i[s].name }), sn(i));
}
function rr(t) {
  return t >= 1024 * 1024
    ? `${(t / 1024 / 1024).toFixed(1)} MB`
    : `${Math.round(t / 1024)} KB`;
}
function ar(t) {
  const l = new Date(t),
    s = Math.floor((new Date() - l) / 864e5);
  return s === 0
    ? `${l.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : s === 1
      ? "Yesterday"
      : l.toLocaleDateString([], { day: "numeric", month: "short" });
}
function ir({ refreshToken: t }) {
  const [l, i] = m.useState(() => Ie()),
    [s, c] = m.useState(null),
    [h, f] = m.useState(""),
    [b, C] = m.useState(null),
    [y, w] = m.useState(null),
    j = m.useRef(null);
  if (
    (m.useEffect(() => {
      i(Ie());
    }, [t]),
    m.useEffect(() => {
      s && j.current?.focus();
    }, [s]),
    l.length === 0)
  )
    return null;
  const k = (o) => {
      (c(o.id), f(o.name));
    },
    T = (o) => {
      (h.trim() && (sr(o, h), i(Ie())), c(null), f(""));
    },
    M = async (o) => {
      (w(o), await Gt(o), i(Ie()), w(null));
    },
    S = async (o) => {
      C(o.id);
      try {
        const z = await tr(o.id);
        if (!z) {
          (alert("PDF not found — it may have been cleared by the browser."),
            await Gt(o.id),
            i(Ie()));
          return;
        }
        const v = URL.createObjectURL(
          new Blob([z], { type: "application/pdf" }),
        );
        (window.open(v, "_blank") ||
          alert("Pop-up blocked — please allow pop-ups to view PDFs."),
          setTimeout(() => URL.revokeObjectURL(v), 1e4));
      } catch (z) {
        alert("Failed to open PDF: " + z.message);
      } finally {
        C(null);
      }
    };
  return e.jsxs("div", {
    className: "w-full space-y-2 ds-fade-up ds-stagger-4",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Jt, { className: "w-3.5 h-3.5 text-zinc-500" }),
              e.jsx("span", {
                className:
                  "ds-display text-zinc-400 text-xs font-semibold uppercase tracking-widest",
                children: "Recent",
              }),
            ],
          }),
          e.jsxs("span", {
            className: "ds-mono text-zinc-600 text-[10px]",
            children: [l.length, "/", Kt],
          }),
        ],
      }),
      e.jsx("div", {
        className: "space-y-1",
        children: l.map((o, z) =>
          e.jsxs(
            "div",
            {
              className:
                "ds-card ds-card-hover flex items-center gap-3 px-3.5 py-3 transition-colors",
              style: {
                animation: "ds-fade-up 0.2s both",
                animationDelay: `${z * 0.04}s`,
              },
              children: [
                e.jsxs("div", {
                  className:
                    "w-8 h-10 rounded-lg border border-zinc-700 flex flex-col items-center justify-center flex-shrink-0 gap-0.5",
                  style: { background: "#252525" },
                  children: [
                    e.jsx(Bn, { className: "w-3.5 h-3.5 text-zinc-500" }),
                    o.pageCount > 1 &&
                      e.jsx("span", {
                        className:
                          "ds-mono text-[8px] font-medium text-zinc-500 leading-none",
                        children: o.pageCount,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    s === o.id
                      ? e.jsx("input", {
                          ref: j,
                          value: h,
                          onChange: (v) => f(v.target.value),
                          onBlur: () => T(o.id),
                          onKeyDown: (v) => {
                            (v.key === "Enter" && T(o.id),
                              v.key === "Escape" && (c(null), f("")));
                          },
                          className:
                            "w-full rounded-lg px-2 py-1 text-white text-sm font-medium focus:outline-none",
                          style: {
                            background: "#2a2a2a",
                            border: "1px solid #444",
                            fontFamily: "inherit",
                          },
                          maxLength: 60,
                        })
                      : e.jsx("p", {
                          className:
                            "text-white text-sm font-medium truncate leading-tight",
                          style: { fontFamily: "inherit" },
                          children: o.name,
                        }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5 mt-0.5",
                      children: [
                        e.jsx("span", {
                          className: "ds-mono text-zinc-500 text-[10px]",
                          children: ar(o.savedAt),
                        }),
                        e.jsx("span", {
                          className: "text-zinc-600 text-[10px]",
                          children: "·",
                        }),
                        e.jsx("span", {
                          className: "ds-mono text-zinc-500 text-[10px]",
                          children: rr(o.size),
                        }),
                        o.pageCount > 1 &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("span", {
                                className: "text-zinc-600 text-[10px]",
                                children: "·",
                              }),
                              e.jsxs("span", {
                                className: "ds-mono text-zinc-500 text-[10px]",
                                children: [o.pageCount, "pp"],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1 flex-shrink-0",
                  children: [
                    e.jsx("button", {
                      "aria-label": "Open document",
                      onClick: () => S(o),
                      disabled: b === o.id,
                      className:
                        "w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 active:text-white transition-colors disabled:opacity-40",
                      style: { background: "#252525" },
                      children:
                        b === o.id
                          ? e.jsx("div", {
                              className:
                                "w-3 h-3 border border-zinc-600 border-t-white rounded-full animate-spin",
                            })
                          : e.jsx(Hs, { className: "w-3 h-3" }),
                    }),
                    e.jsx("button", {
                      "aria-label": "Edit",
                      onClick: () => k(o),
                      className:
                        "w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 active:text-white transition-colors",
                      style: { background: "#252525" },
                      children: e.jsx(_s, { className: "w-3 h-3" }),
                    }),
                    e.jsx("button", {
                      "aria-label": "Delete document",
                      onClick: () => M(o.id),
                      disabled: y === o.id,
                      className:
                        "w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-700 text-zinc-500 active:text-red-400 transition-colors disabled:opacity-40",
                      style: { background: "#252525" },
                      children:
                        y === o.id
                          ? e.jsx("div", {
                              className:
                                "w-3 h-3 border border-zinc-600 border-t-red-400 rounded-full animate-spin",
                            })
                          : e.jsx(Zt, { className: "w-3 h-3" }),
                    }),
                  ],
                }),
              ],
            },
            o.id,
          ),
        ),
      }),
      l.length > 1 &&
        e.jsx("button", {
          onClick: async () => {
            window.confirm(`Delete all ${l.length} saved scans?`) &&
              (await Promise.all(l.map((o) => Gt(o.id).catch(() => {}))),
              i([]));
          },
          className:
            "w-full py-2 text-[11px] font-medium text-zinc-500 active:text-red-500 transition-colors",
          style: { fontFamily: "inherit" },
          children: "Clear all history",
        }),
    ],
  });
}
const lr = () =>
  new Promise((t, l) => {
    if (window.Tesseract) return t(window.Tesseract);
    if (document.querySelector(`script[src="${Sn}"]`)) {
      const s = setInterval(() => {
        window.Tesseract && (clearInterval(s), t(window.Tesseract));
      }, 100);
      return;
    }
    const i = document.createElement("script");
    ((i.src = Sn),
      (i.onload = () => t(window.Tesseract)),
      (i.onerror = () => l(new Error("Failed to load Tesseract.js"))),
      document.head.appendChild(i));
  });
function qt(t) {
  return [
    { x: t.width * 0.05, y: t.height * 0.05 },
    { x: t.width * (1 - 0.05), y: t.height * 0.05 },
    { x: t.width * (1 - 0.05), y: t.height * (1 - 0.05) },
    { x: t.width * 0.05, y: t.height * (1 - 0.05) },
  ];
}
async function St(t) {
  await ye();
  try {
    const i = Math.min(1, 480 / Math.max(t.width, t.height)),
      s = Math.round(t.width * i),
      c = Math.round(t.height * i),
      h = pe(s, c);
    fe(h).drawImage(t, 0, 0, s, c);
    const { data: f } = fe(h).getImageData(0, 0, s, c),
      b = new Float32Array(s * c);
    for (let x = 0; x < s * c; x++) {
      const p = x * 4;
      b[x] = (f[p] * 77 + f[p + 1] * 150 + f[p + 2] * 29) >> 8;
    }
    const C = [
        2, 4, 5, 4, 2, 4, 9, 12, 9, 4, 5, 12, 15, 12, 5, 4, 9, 12, 9, 4, 2, 4,
        5, 4, 2,
      ],
      y = new Float32Array(s * c);
    for (let x = 2; x < c - 2; x++)
      for (let p = 2; p < s - 2; p++) {
        let N = 0;
        for (let R = -2; R <= 2; R++)
          for (let L = -2; L <= 2; L++)
            N += b[(x + R) * s + (p + L)] * C[(R + 2) * 5 + (L + 2)];
        y[x * s + p] = N / 159;
      }
    const w = new Float32Array(s * c);
    let j = 0;
    for (let x = 1; x < c - 1; x++)
      for (let p = 1; p < s - 1; p++) {
        const N =
            -y[(x - 1) * s + (p - 1)] -
            2 * y[x * s + (p - 1)] -
            y[(x + 1) * s + (p - 1)] +
            y[(x - 1) * s + (p + 1)] +
            2 * y[x * s + (p + 1)] +
            y[(x + 1) * s + (p + 1)],
          R =
            -y[(x - 1) * s + (p - 1)] -
            2 * y[(x - 1) * s + p] -
            y[(x - 1) * s + (p + 1)] +
            y[(x + 1) * s + (p - 1)] +
            2 * y[(x + 1) * s + p] +
            y[(x + 1) * s + (p + 1)],
          L = Math.sqrt(N * N + R * R);
        ((w[x * s + p] = L), L > j && (j = L));
      }
    if (j < 5) return qt(t);
    const k = j * 0.15,
      T = 8,
      M = [],
      S = [],
      o = [],
      z = [];
    for (let x = 0; x < c; x++)
      for (let p = 0; p < s; p++) {
        if (w[x * s + p] < k) continue;
        const N = p + x,
          R = p - x,
          L = (q, A, H) => {
            (q.push({ x: p, y: x, s: A }),
              q.length > T * 4 &&
                (q.sort((G, u) => (H ? G.s - u.s : u.s - G.s)),
                (q.length = T)));
          };
        (L(M, N, !0), L(S, R, !1), L(o, N, !1), L(z, R, !0));
      }
    if (!M.length || !S.length || !o.length || !z.length) return qt(t);
    const v = (x, p) => {
        x.sort((R, L) => (p ? R.s - L.s : L.s - R.s));
        const N = x.slice(0, Math.min(T, x.length));
        return {
          x: N.reduce((R, L) => R + L.x, 0) / N.length,
          y: N.reduce((R, L) => R + L.y, 0) / N.length,
        };
      },
      E = v(M, !0),
      ne = v(S, !1),
      F = v(o, !1),
      P = v(z, !0);
    return [
      { x: E.x / i, y: E.y / i },
      { x: ne.x / i, y: ne.y / i },
      { x: F.x / i, y: F.y / i },
      { x: P.x / i, y: P.y / i },
    ];
  } catch {
    return qt(t);
  }
}
function cr(t) {
  try {
    const l = t.width,
      i = t.height,
      s = l * i;
    if (s < 16) return null;
    const { data: c } = t
        .getContext("2d", { willReadFrequently: !0 })
        .getImageData(0, 0, l, i),
      h = new Float32Array(s);
    for (let F = 0; F < s; F++) {
      const P = F * 4;
      h[F] = (c[P] * 77 + c[P + 1] * 150 + c[P + 2] * 29) >> 8;
    }
    let f = 0;
    const b = new Float32Array(s);
    for (let F = 1; F < i - 1; F++)
      for (let P = 1; P < l - 1; P++) {
        const x = F * l + P,
          p =
            -h[x - l - 1] -
            2 * h[x - 1] -
            h[x + l - 1] +
            h[x - l + 1] +
            2 * h[x + 1] +
            h[x + l + 1],
          N =
            -h[x - l - 1] -
            2 * h[x - l] -
            h[x - l + 1] +
            h[x + l - 1] +
            2 * h[x + l] +
            h[x + l + 1],
          R = Math.abs(p) + Math.abs(N);
        ((b[x] = R), R > f && (f = R));
      }
    if (f < 60) return null;
    const C = f * 0.33;
    let y = null,
      w = null,
      j = null,
      k = null,
      T = 1 / 0,
      M = -1 / 0,
      S = -1 / 0,
      o = 1 / 0,
      z = 0;
    for (let F = 0; F < i; F++)
      for (let P = 0; P < l; P++) {
        if (b[F * l + P] < C) continue;
        z++;
        const x = P + F,
          p = P - F;
        (x < T && ((T = x), (y = { x: P, y: F })),
          x > M && ((M = x), (j = { x: P, y: F })),
          p > S && ((S = p), (w = { x: P, y: F })),
          p < o && ((o = p), (k = { x: P, y: F })));
      }
    if (!y || !w || !j || !k || z < s * 0.008) return null;
    const v = [y, w, j, k];
    let E = 0;
    for (let F = 0; F < 4; F++) {
      const P = v[F],
        x = v[(F + 1) % 4];
      E += P.x * x.y - x.x * P.y;
    }
    const ne = Math.abs(E) / 2 / s;
    return ne < 0.1 || ne > 0.985 ? null : { corners: v, area: ne };
  } catch {
    return null;
  }
}
function or(t, l) {
  const i = l.length,
    s = t.map((c, h) => [...c, l[h]]);
  for (let c = 0; c < i; c++) {
    let h = c;
    for (let f = c + 1; f < i; f++)
      Math.abs(s[f][c]) > Math.abs(s[h][c]) && (h = f);
    if ((([s[c], s[h]] = [s[h], s[c]]), Math.abs(s[c][c]) < 1e-12)) return null;
    for (let f = 0; f < i; f++) {
      if (f === c) continue;
      const b = s[f][c] / s[c][c];
      for (let C = c; C <= i; C++) s[f][C] -= b * s[c][C];
    }
  }
  return s.map((c, h) => c[i] / c[h]);
}
function dr(t, l) {
  const i = [],
    s = [];
  for (let h = 0; h < 4; h++) {
    const { x: f, y: b } = t[h],
      { x: C, y } = l[h];
    (i.push([f, b, 1, 0, 0, 0, -C * f, -C * b]),
      s.push(C),
      i.push([0, 0, 0, f, b, 1, -y * f, -y * b]),
      s.push(y));
  }
  const c = or(i, s);
  return c ? [...c, 1] : null;
}
function xr(t) {
  const [l, i, s, c, h, f, b, C, y] = t,
    w = l * (h * y - f * C) - i * (c * y - f * b) + s * (c * C - h * b);
  if (Math.abs(w) < 1e-12) return null;
  const j = 1 / w;
  return [
    (h * y - f * C) * j,
    (s * C - i * y) * j,
    (i * f - s * h) * j,
    (f * b - c * y) * j,
    (l * y - s * b) * j,
    (s * c - l * f) * j,
    (c * C - h * b) * j,
    (i * b - l * C) * j,
    (l * h - i * c) * j,
  ];
}
async function Dt(t, l) {
  await ye();
  try {
    const [i, s, c, h] = l,
      f = Math.round(
        Math.max(
          Math.hypot(s.x - i.x, s.y - i.y),
          Math.hypot(c.x - h.x, c.y - h.y),
        ),
      ),
      b = Math.round(
        Math.max(
          Math.hypot(h.x - i.x, h.y - i.y),
          Math.hypot(c.x - s.x, c.y - s.y),
        ),
      );
    if (f < 20 || b < 20) return t;
    const C = 1500,
      y = Math.min(1, C / Math.max(f, b)),
      w = Math.round(f * y),
      j = Math.round(b * y),
      k = dr(
        [i, s, c, h],
        [
          { x: 0, y: 0 },
          { x: w - 1, y: 0 },
          { x: w - 1, y: j - 1 },
          { x: 0, y: j - 1 },
        ],
      );
    if (!k) return t;
    const T = xr(k);
    if (!T) return t;
    const [M, S, o, z, v, E, ne, F, P] = T,
      x = t.width,
      p = t.height,
      N = fe(t).getImageData(0, 0, x, p).data,
      R = pe(w, j),
      L = fe(R),
      q = L.createImageData(w, j),
      A = q.data;
    for (let H = 0; H < j; H++) {
      H > 0 && H % 250 === 0 && (await ye());
      for (let G = 0; G < w; G++) {
        const u = ne * G + F * H + P,
          ce = (M * G + S * H + o) / u,
          se = (z * G + v * H + E) / u,
          B = ce | 0,
          Y = se | 0,
          he = B + 1,
          me = Y + 1,
          K = (H * w + G) * 4;
        if (B < 0 || Y < 0 || he >= x || me >= p) {
          ((A[K] = A[K + 1] = A[K + 2] = 255), (A[K + 3] = 255));
          continue;
        }
        const oe = ce - B,
          $ = se - Y,
          _ = (1 - oe) * (1 - $),
          Q = oe * (1 - $),
          U = (1 - oe) * $,
          W = oe * $,
          ae = (Y * x + B) * 4,
          V = (Y * x + he) * 4,
          ie = (me * x + B) * 4,
          Re = (me * x + he) * 4;
        ((A[K] = _ * N[ae] + Q * N[V] + U * N[ie] + W * N[Re]),
          (A[K + 1] =
            _ * N[ae + 1] + Q * N[V + 1] + U * N[ie + 1] + W * N[Re + 1]),
          (A[K + 2] =
            _ * N[ae + 2] + Q * N[V + 2] + U * N[ie + 2] + W * N[Re + 2]),
          (A[K + 3] = 255));
      }
    }
    return (L.putImageData(q, 0, 0), R);
  } catch {
    return t;
  }
}
function fe(t) {
  return t.getContext("2d", { alpha: !1, willReadFrequently: !0 });
}
function pe(t, l) {
  const i = document.createElement("canvas");
  return ((i.width = t), (i.height = l), i);
}
function ur(t) {
  const l = t.width,
    i = t.height,
    s = pe(l, i),
    c = fe(s);
  c.drawImage(t, 0, 0);
  const h = c.getImageData(0, 0, l, i),
    f = h.data,
    b = l * i;
  let C = 255,
    y = 0;
  for (let M = 0; M < b; M++) {
    const S = M * 4,
      o = (f[S] * 77 + f[S + 1] * 150 + f[S + 2] * 29) >> 8;
    (o < C && (C = o), o > y && (y = o));
  }
  const w = Math.max(y - C, 1),
    j = 255 / w;
  for (let M = 0; M < b; M++) {
    const S = M * 4;
    for (let o = 0; o < 3; o++) {
      let z = (f[S + o] - C) * j;
      ((z = z * 1.08 - 10), (f[S + o] = z < 0 ? 0 : z > 255 ? 255 : z));
    }
    f[S + 3] = 255;
  }
  c.putImageData(h, 0, 0);
  const k = c.getImageData(0, 0, l, i).data,
    T = new Uint8ClampedArray(k.length);
  for (let M = 1; M < i - 1; M++)
    for (let S = 1; S < l - 1; S++) {
      const o = (M * l + S) * 4,
        z = ((M - 1) * l + S) * 4,
        v = ((M + 1) * l + S) * 4,
        E = (M * l + (S - 1)) * 4,
        ne = (M * l + (S + 1)) * 4;
      for (let F = 0; F < 3; F++) {
        const P = k[o + F] * 5 - k[z + F] - k[v + F] - k[E + F] - k[ne + F];
        T[o + F] = P < 0 ? 0 : P > 255 ? 255 : P;
      }
      T[o + 3] = 255;
    }
  for (let M = 0; M < l; M++) {
    const S = M * 4,
      o = ((i - 1) * l + M) * 4;
    for (let z = 0; z < 4; z++) ((T[S + z] = k[S + z]), (T[o + z] = k[o + z]));
  }
  for (let M = 0; M < i; M++) {
    const S = M * l * 4,
      o = (M * l + l - 1) * 4;
    for (let z = 0; z < 4; z++) ((T[S + z] = k[S + z]), (T[o + z] = k[o + z]));
  }
  return (c.putImageData(new ImageData(T, l, i), 0, 0), s);
}
function hr(t) {
  const l = pe(t.width, t.height),
    i = fe(l);
  i.drawImage(t, 0, 0);
  const s = i.getImageData(0, 0, l.width, l.height),
    c = s.data;
  for (let h = 0; h < c.length; h += 4) {
    const f = (c[h] * 77 + c[h + 1] * 150 + c[h + 2] * 29) >> 8 > 145 ? 255 : 0;
    ((c[h] = c[h + 1] = c[h + 2] = f), (c[h + 3] = 255));
  }
  return (i.putImageData(s, 0, 0), l);
}
function Te(t, { greyscale: l, brightness: i, contrast: s }) {
  if (!l && i === 100 && s === 100) {
    const w = pe(t.width, t.height);
    return (fe(w).drawImage(t, 0, 0), w);
  }
  const c = pe(t.width, t.height),
    h = fe(c);
  h.drawImage(t, 0, 0);
  const f = h.getImageData(0, 0, c.width, c.height),
    b = f.data,
    C = i / 100,
    y = s / 100;
  for (let w = 0; w < b.length; w += 4) {
    let j = b[w] * C,
      k = b[w + 1] * C,
      T = b[w + 2] * C;
    if (
      ((j = y * (j - 128) + 128),
      (k = y * (k - 128) + 128),
      (T = y * (T - 128) + 128),
      (j = j < 0 ? 0 : j > 255 ? 255 : j),
      (k = k < 0 ? 0 : k > 255 ? 255 : k),
      (T = T < 0 ? 0 : T > 255 ? 255 : T),
      l)
    ) {
      const M = (j * 77 + k * 150 + T * 29) >> 8;
      b[w] = b[w + 1] = b[w + 2] = M;
    } else ((b[w] = j), (b[w + 1] = k), (b[w + 2] = T));
    b[w + 3] = 255;
  }
  return (h.putImageData(f, 0, 0), c);
}
async function mr(t, l) {
  try {
    const i = await t.createWorker("osd", 1, { logger: () => {} }),
      { data: s } = await i.detect(l.toDataURL("image/png"));
    return (await i.terminate(), Xs[s?.script] || "eng");
  } catch {
    return "eng";
  }
}
function Lt(t) {
  const l = atob(t),
    i = new Uint8Array(l.length);
  for (let s = 0; s < l.length; s++) i[s] = l.charCodeAt(s);
  return i;
}
const Qt = 0.82;
async function pr(t, l = "original") {
  const { PDFDocument: i, rgb: s, StandardFonts: c } = window.PDFLib,
    h = await i.create();
  let f;
  try {
    f = await h.embedFont(c.Helvetica);
  } catch {}
  const b = $n.find((C) => C.id === l);
  for (const { canvas: C, ocrData: y, ocrScale: w } of t) {
    const j = C.width,
      k = C.height;
    let T, M, S, o, z, v, E;
    if (b?.w) {
      const F = j > k,
        [P, x] = F && b.w < b.h ? [b.h, b.w] : [b.w, b.h];
      ((T = P),
        (M = x),
        (E = Math.min(P / j, x / k)),
        (z = j * E),
        (v = k * E),
        (S = (P - z) / 2),
        (o = (x - v) / 2));
    } else ((T = j), (M = k), (E = 1), (S = 0), (o = 0), (z = j), (v = k));
    const ne = h.addPage([T, M]);
    if (f) {
      const F = y.lines?.flatMap((P) => P.words || []) ?? y.words ?? [];
      for (const P of F) {
        if (!P.text?.trim() || P.confidence < 10) continue;
        const x = (P.bbox.x0 / w) * E + S,
          p = ((P.bbox.y1 - P.bbox.y0) / w) * E,
          N = ((P.bbox.x1 - P.bbox.x0) / w) * E,
          R = o + v - (P.bbox.y1 / w) * E,
          L = Math.max(3, Math.min(p * 0.95, 200));
        try {
          ne.drawText(P.text, {
            x: Math.max(0, Math.min(x, T - 1)),
            y: Math.max(0, Math.min(R, M - 1)),
            size: L,
            font: f,
            color: s(1, 1, 1),
            maxWidth: N + 2,
          });
        } catch {}
      }
    }
    try {
      const F = Lt(C.toDataURL("image/jpeg", Qt).split(",")[1]),
        P = await h.embedJpg(F);
      ne.drawImage(P, { x: S, y: o, width: z, height: v });
    } catch {
      try {
        const F = Lt(C.toDataURL("image/png").split(",")[1]),
          P = await h.embedPng(F);
        ne.drawImage(P, { x: S, y: o, width: z, height: v });
      } catch {}
    }
  }
  return h.save();
}
function fr(t, l) {
  if (l <= 1) return t;
  const i = pe(Math.round(t.width * l), Math.round(t.height * l));
  return (fe(i).drawImage(t, 0, 0, i.width, i.height), i);
}
function gr(t) {
  return Math.min(
    2,
    Math.max(1, Math.ceil(1800 / Math.max(t.width, t.height))),
  );
}
function Me(t, l = 80) {
  const i = pe(l, Math.round((l * t.height) / t.width));
  return (
    fe(i).drawImage(t, 0, 0, i.width, i.height),
    i.toDataURL("image/jpeg", 0.75)
  );
}
function mt(t) {
  return Me(t, 120);
}
function Ft(t) {
  try {
    const i = Math.min(1, 160 / Math.max(t.width, t.height)),
      s = Math.round(t.width * i),
      c = Math.round(t.height * i),
      h = pe(s, c);
    fe(h).drawImage(t, 0, 0, s, c);
    const f = h
        .getContext("2d", { willReadFrequently: !0 })
        .getImageData(0, 0, s, c).data,
      b = new Float32Array(s * c);
    for (let w = 0; w < s * c; w++)
      b[w] = (f[w * 4] * 77 + f[w * 4 + 1] * 150 + f[w * 4 + 2] * 29) >> 8;
    let C = 0,
      y = 0;
    for (let w = 1; w < c - 1; w++)
      for (let j = 1; j < s - 1; j++) {
        const k =
          b[w * s + j] * 4 -
          b[(w - 1) * s + j] -
          b[(w + 1) * s + j] -
          b[w * s + (j - 1)] -
          b[w * s + (j + 1)];
        ((C += k * k), y++);
      }
    return Math.min(100, Math.round(C / y / 8));
  } catch {
    return 100;
  }
}
function Fn(t) {
  if (!t) return "scanned-document";
  const l = t
    .split(
      `
`,
    )
    .map((s) => s.trim())
    .find(
      (s) => s.length > 3 && s.length < 80 && /[a-zA-Z\u0900-\u097F]/.test(s),
    );
  return (
    (l &&
      l
        .replace(/[^a-zA-Z0-9\s\u0900-\u097F\-_]/g, " ")
        .trim()
        .replace(/\s+/g, "_")
        .substring(0, 45)) ||
    "scanned-document"
  );
}
function br(t) {
  return new Promise((l, i) => {
    const s = URL.createObjectURL(t),
      c = new Image();
    ((c.onload = () => {
      URL.revokeObjectURL(s);
      const h = Math.min(1, En / Math.max(c.width, c.height)),
        f = Math.round(c.width * h),
        b = Math.round(c.height * h),
        C = pe(f, b);
      (fe(C).drawImage(c, 0, 0, f, b), l(C));
    }),
      (c.onerror = () => {
        (URL.revokeObjectURL(s), i(new Error("Failed to load image")));
      }),
      (c.src = s));
  });
}
function Be(t, l) {
  return { x: (t.x + l.x) / 2, y: (t.y + l.y) / 2 };
}
function Vt(t, l, i, s, c) {
  return (
    (t = Math.max(1, Math.min(5, t))),
    (l = Math.max(s * (1 - t), Math.min(0, l))),
    (i = Math.max(c * (1 - t), Math.min(0, i))),
    { zoom: t, ox: l, oy: i }
  );
}
function Tn({ srcCanvas: t, corners: l, onChange: i, onHaptic: s }) {
  const c = m.useRef(null),
    h = m.useRef(null),
    f = m.useRef({ w: 1, h: 1, dpr: 1 }),
    b = m.useRef(l),
    C = m.useRef(null),
    y = m.useRef(null),
    w = m.useRef({ zoom: 1, ox: 0, oy: 0 }),
    j = m.useRef(new Map()),
    k = m.useRef(null),
    T = m.useRef(null);
  m.useEffect(() => {
    b.current = l;
  }, [l]);
  const M = m.useCallback(() => {
    const x = h.current;
    if (!x || !t) return;
    const { w: p, h: N, dpr: R } = f.current,
      L = Math.round(p * R),
      q = Math.round(N * R);
    (x.width !== L || x.height !== q) &&
      ((x.width = L),
      (x.height = q),
      (x.style.width = p + "px"),
      (x.style.height = N + "px"));
    const { zoom: A, ox: H, oy: G } = w.current,
      u = x.getContext("2d", { alpha: !1 });
    (u.setTransform(1, 0, 0, 1, 0, 0),
      u.clearRect(0, 0, L, q),
      u.save(),
      u.scale(R, R),
      u.transform(A, 0, 0, A, H, G));
    const ce = p / t.width,
      se = N / t.height,
      B = b.current.map(($) => ({ x: $.x * ce, y: $.y * se }));
    (T.current && T.current.width === L && T.current.height === q
      ? u.drawImage(T.current, 0, 0, p, N)
      : u.drawImage(t, 0, 0, p, N),
      (u.fillStyle = "rgba(0,0,0,0.52)"),
      u.beginPath(),
      u.rect(-H / A, -G / A, p / A + 1, N / A + 1),
      u.moveTo(B[0].x, B[0].y));
    for (let $ = 1; $ < 4; $++) u.lineTo(B[$].x, B[$].y);
    (u.closePath(),
      u.fill("evenodd"),
      u.save(),
      (u.shadowColor = "rgba(0,0,0,0.5)"),
      (u.shadowBlur = 8 / A),
      u.beginPath(),
      u.moveTo(B[0].x, B[0].y));
    for (let $ = 1; $ < 4; $++) u.lineTo(B[$].x, B[$].y);
    (u.closePath(),
      (u.strokeStyle = "rgba(255,255,255,0.9)"),
      (u.lineWidth = 1.5 / A),
      u.stroke(),
      u.restore(),
      [Be(B[0], B[1]), Be(B[1], B[2]), Be(B[2], B[3]), Be(B[3], B[0])].forEach(
        ($, _) => {
          const Q = C.current?.type === "edge" && C.current?.idx === _,
            U = (Q ? 6 : 4.5) / A;
          (u.save(),
            (u.shadowColor = "rgba(0,0,0,0.6)"),
            (u.shadowBlur = (Q ? 12 : 8) / A),
            u.beginPath(),
            u.arc($.x, $.y, U, 0, Math.PI * 2),
            (u.fillStyle = Q
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0.75)"),
            u.fill(),
            (u.shadowBlur = 0),
            (u.strokeStyle = "rgba(0,0,0,0.15)"),
            (u.lineWidth = 0.6 / A),
            u.stroke(),
            u.restore());
        },
      ));
    const he = 20 / A,
      me = 3 / A,
      K = 3.5 / A,
      oe = [
        { dx: 1, dy: 1 },
        { dx: -1, dy: 1 },
        { dx: -1, dy: -1 },
        { dx: 1, dy: -1 },
      ];
    if (
      (B.forEach(($, _) => {
        const Q = C.current?.type === "corner" && C.current?.idx === _,
          { dx: U, dy: W } = oe[_],
          ae = Q ? he * 1.2 : he;
        (u.save(),
          (u.lineCap = "round"),
          (u.lineJoin = "round"),
          (u.shadowColor = "rgba(0,0,0,0.65)"),
          (u.shadowBlur = (Q ? 16 : 10) / A),
          (u.strokeStyle = Q ? "#fff" : "rgba(255,255,255,0.94)"),
          (u.lineWidth = me),
          u.beginPath(),
          u.moveTo($.x, $.y),
          u.lineTo($.x + U * ae, $.y),
          u.stroke(),
          u.beginPath(),
          u.moveTo($.x, $.y),
          u.lineTo($.x, $.y + W * ae),
          u.stroke(),
          (u.shadowBlur = 0),
          (u.fillStyle = Q ? "#fff" : "rgba(255,255,255,0.9)"),
          u.beginPath(),
          u.arc($.x, $.y, K, 0, Math.PI * 2),
          u.fill(),
          u.restore());
      }),
      u.restore(),
      u.setTransform(R, 0, 0, R, 0, 0),
      C.current?.type === "corner")
    ) {
      const $ = C.current.idx,
        _ = b.current[$],
        Q = _.x * ce * A + H,
        U = _.y * se * A + G,
        W = 66,
        ae = 50;
      let V = Q,
        ie = U - W - 48;
      (ie < W + 12 && (ie = U + W + 48),
        (V = Math.max(W + 10, Math.min(p - W - 10, V))),
        (ie = Math.max(W + 10, Math.min(N - W - 10, ie))),
        u.save(),
        (u.shadowColor = "rgba(0,0,0,0.8)"),
        (u.shadowBlur = 28),
        u.beginPath(),
        u.arc(V, ie, W, 0, Math.PI * 2),
        (u.fillStyle = "#000"),
        u.fill(),
        u.restore(),
        u.save(),
        u.beginPath(),
        u.arc(V, ie, W, 0, Math.PI * 2),
        u.clip(),
        (u.fillStyle = "#fff"),
        u.fillRect(V - W, ie - W, W * 2, W * 2));
      const Re = Math.max(0, _.x - ae),
        st = Math.max(0, _.y - ae),
        ft = Math.min(ae * 2, t.width - Re),
        gt = Math.min(ae * 2, t.height - st);
      (u.drawImage(t, Re, st, ft, gt, V - W, ie - W, W * 2, W * 2),
        u.restore(),
        u.save(),
        u.beginPath(),
        u.arc(V, ie, W, 0, Math.PI * 2),
        (u.strokeStyle = "rgba(255,255,255,0.85)"),
        (u.lineWidth = 2),
        u.stroke(),
        u.restore(),
        u.save(),
        (u.strokeStyle = "rgba(255,55,55,0.85)"),
        (u.lineWidth = 1.5),
        (u.lineCap = "round"));
      const Ee = 13;
      (u.beginPath(),
        u.moveTo(V - Ee, ie),
        u.lineTo(V + Ee, ie),
        u.moveTo(V, ie - Ee),
        u.lineTo(V, ie + Ee),
        u.stroke(),
        u.beginPath(),
        u.arc(V, ie, 2.5, 0, Math.PI * 2),
        (u.fillStyle = "rgba(255,55,55,0.9)"),
        u.fill(),
        u.restore());
    }
  }, [t]);
  (m.useEffect(() => {
    const x = c.current,
      p = h.current;
    if (!x || !p || !t) return;
    const N = () => {
        const L = Math.max(1, Math.min(window.devicePixelRatio || 1, 3)),
          q = Math.min(x.clientWidth / t.width, x.clientHeight / t.height),
          A = Math.round(t.width * q),
          H = Math.round(t.height * q);
        ((f.current = { w: A, h: H, dpr: L }),
          (w.current = Vt(w.current.zoom, w.current.ox, w.current.oy, A, H)));
        const G = Math.round(A * L),
          u = Math.round(H * L),
          ce = pe(G, u);
        (fe(ce).drawImage(t, 0, 0, G, u),
          (T.current = ce),
          y.current && cancelAnimationFrame(y.current),
          (y.current = requestAnimationFrame(M)));
      },
      R = new ResizeObserver(N);
    return (
      R.observe(x),
      N(),
      () => {
        (R.disconnect(), y.current && cancelAnimationFrame(y.current));
      }
    );
  }, [t, M]),
    m.useEffect(() => {
      (y.current && cancelAnimationFrame(y.current),
        (y.current = requestAnimationFrame(M)));
    }, [l, M]));
  const S = (x, p) => {
      const N = h.current;
      if (!N) return { x: 0, y: 0 };
      const R = N.getBoundingClientRect(),
        { zoom: L, ox: q, oy: A } = w.current,
        { w: H, h: G } = f.current;
      return {
        x: ((x - R.left - q) / L / H) * t.width,
        y: ((p - R.top - A) / L / G) * t.height,
      };
    },
    o = (x) =>
      S(
        x.touches ? x.touches[0].clientX : x.clientX,
        x.touches ? x.touches[0].clientY : x.clientY,
      ),
    z = (x) => {
      const p = h.current;
      if (!p) return null;
      const N = p.getBoundingClientRect(),
        { zoom: R, ox: L, oy: q } = w.current,
        { w: A } = f.current,
        H = x.touches ? x.touches[0].clientX : x.clientX,
        G = x.touches ? x.touches[0].clientY : x.clientY,
        u = (H - N.left - L) / R,
        ce = (G - N.top - q) / R,
        se = A / t.width,
        B = f.current.h / t.height,
        Y = b.current.map((_) => ({ x: _.x * se, y: _.y * B })),
        he = 48 / R,
        me = 32 / R;
      let K = -1,
        oe = 1 / 0;
      if (
        (Y.forEach((_, Q) => {
          const U = Math.hypot(_.x - u, _.y - ce);
          U < he && U < oe && ((oe = U), (K = Q));
        }),
        K >= 0)
      )
        return { type: "corner", idx: K };
      const $ = [
        Be(Y[0], Y[1]),
        Be(Y[1], Y[2]),
        Be(Y[2], Y[3]),
        Be(Y[3], Y[0]),
      ];
      return (
        (K = -1),
        (oe = 1 / 0),
        $.forEach((_, Q) => {
          const U = Math.hypot(_.x - u, _.y - ce);
          U < me && U < oe && ((oe = U), (K = Q));
        }),
        K >= 0 ? { type: "edge", idx: K } : null
      );
    },
    v = (x) => {
      const p = h.current;
      if (p) {
        j.current.set(x.pointerId, { x: x.clientX, y: x.clientY });
        try {
          p.setPointerCapture(x.pointerId);
        } catch {}
        if (j.current.size === 1) {
          const N = z(x);
          N &&
            (x.preventDefault(),
            s?.(8),
            (C.current = { ...N, startPt: o(x), startCorners: [...b.current] }),
            y.current && cancelAnimationFrame(y.current),
            (y.current = requestAnimationFrame(M)));
        } else if (j.current.size >= 2) {
          C.current = null;
          const [N, R] = [...j.current.values()],
            L = p.getBoundingClientRect(),
            q = (N.x + R.x) / 2 - L.left,
            A = (N.y + R.y) / 2 - L.top,
            { zoom: H, ox: G, oy: u } = w.current;
          k.current = {
            startDist: Math.hypot(R.x - N.x, R.y - N.y),
            startZoom: H,
            imgAnchorX: (q - G) / H,
            imgAnchorY: (A - u) / H,
          };
        }
      }
    },
    E = (x) => {
      if (
        (j.current.set(x.pointerId, { x: x.clientX, y: x.clientY }),
        j.current.size >= 2 && k.current)
      ) {
        x.preventDefault();
        const [se, B] = [...j.current.values()],
          Y = h.current;
        if (!Y) return;
        const he = Y.getBoundingClientRect(),
          me = Math.hypot(B.x - se.x, B.y - se.y),
          K = (se.x + B.x) / 2 - he.left,
          oe = (se.y + B.y) / 2 - he.top,
          {
            startDist: $,
            startZoom: _,
            imgAnchorX: Q,
            imgAnchorY: U,
          } = k.current,
          { w: W, h: ae } = f.current,
          V = (_ * me) / $;
        ((w.current = Vt(V, K - Q * V, oe - U * V, W, ae)),
          y.current && cancelAnimationFrame(y.current),
          (y.current = requestAnimationFrame(M)));
        return;
      }
      if (!C.current) return;
      x.preventDefault();
      const p = o(x),
        { type: N, idx: R, startPt: L, startCorners: q } = C.current,
        A = p.x - L.x,
        H = p.y - L.y,
        G = t.width,
        u = t.height,
        ce = (se, B, Y) => Math.max(B, Math.min(Y, se));
      if (N === "corner")
        i(
          b.current.map((se, B) =>
            B === R ? { x: ce(p.x, 0, G), y: ce(p.y, 0, u) } : se,
          ),
        );
      else {
        const se = [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 0],
        ][R];
        i(
          q.map((B, Y) =>
            Y === se[0] || Y === se[1]
              ? { x: ce(B.x + A, 0, G), y: ce(B.y + H, 0, u) }
              : B,
          ),
        );
      }
    },
    ne = (x) => {
      (j.current.delete(x.pointerId),
        j.current.size < 2 && (k.current = null),
        j.current.size === 0 && (C.current = null),
        y.current && cancelAnimationFrame(y.current),
        (y.current = requestAnimationFrame(M)));
    },
    F = m.useRef(0),
    P = () => {
      const x = Date.now();
      if (x - F.current < 300) {
        const { w: p, h: N } = f.current;
        ((w.current = Vt(1, 0, 0, p, N)),
          y.current && cancelAnimationFrame(y.current),
          (y.current = requestAnimationFrame(M)));
      }
      F.current = x;
    };
  return e.jsx("div", {
    ref: c,
    className: "w-full h-full flex items-center justify-center",
    children: e.jsx("canvas", {
      ref: h,
      style: {
        touchAction: "none",
        cursor: "crosshair",
        display: "block",
        userSelect: "none",
      },
      onPointerDown: v,
      onPointerMove: E,
      onPointerUp: ne,
      onPointerCancel: ne,
      onClick: P,
    }),
  });
}
function yr({ mode: t }) {
  return t === "none"
    ? null
    : t === "thirds"
      ? e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none",
          children: [
            e.jsx("div", {
              className: "absolute left-0 right-0 border-t border-white/20",
              style: { top: "33.33%" },
            }),
            e.jsx("div", {
              className: "absolute left-0 right-0 border-t border-white/20",
              style: { top: "66.66%" },
            }),
            e.jsx("div", {
              className: "absolute top-0 bottom-0 border-l border-white/20",
              style: { left: "33.33%" },
            }),
            e.jsx("div", {
              className: "absolute top-0 bottom-0 border-l border-white/20",
              style: { left: "66.66%" },
            }),
          ],
        })
      : e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none",
          children: [
            e.jsx("div", {
              className: "absolute left-0 right-0 border-t border-white/20",
              style: { top: "50%" },
            }),
            e.jsx("div", {
              className: "absolute top-0 bottom-0 border-l border-white/20",
              style: { left: "50%" },
            }),
          ],
        });
}
const Ln = ({ title: t, sub: l }) =>
  e.jsxs("div", {
    className:
      "fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-5 ds-root",
    children: [
      e.jsxs("div", {
        className: "relative w-12 h-12",
        children: [
          e.jsx("div", {
            className: "absolute inset-0 border border-zinc-700 rounded-full",
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 border border-transparent border-t-white rounded-full animate-spin",
            style: { animationDuration: "0.9s" },
          }),
          e.jsx("div", {
            className:
              "absolute inset-[4px] border border-transparent border-t-zinc-500 rounded-full animate-spin",
            style: {
              animationDuration: "0.55s",
              animationDirection: "reverse",
            },
          }),
        ],
      }),
      e.jsxs("div", {
        className: "text-center space-y-1",
        children: [
          e.jsx("p", {
            className:
              "ds-display text-white font-semibold text-sm tracking-tight",
            children: t,
          }),
          l &&
            e.jsx("p", {
              className: "text-zinc-400 text-[11px]",
              style: { fontFamily: "inherit" },
              children: l,
            }),
        ],
      }),
    ],
  });
function Xe({
  onClick: t,
  children: l,
  active: i,
  className: s = "",
  title: c,
}) {
  return e.jsx("button", {
    onClick: t,
    title: c,
    className: `w-10 h-10 flex items-center justify-center rounded-2xl transition-all active:scale-90 ${i ? "bg-white text-black" : "text-white/80 active:text-white"} ${s}`,
    style: i
      ? {}
      : {
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
        },
    children: l,
  });
}
function jr({ showNotification: t, showDownloadDialog: l }) {
  const [i, s] = m.useState("idle"),
    [c, h] = m.useState("environment"),
    [f, b] = m.useState(!1),
    [C, y] = m.useState(!1),
    [w, j] = m.useState(null),
    [k, T] = m.useState(null),
    [M, S] = m.useState(null),
    [o, z] = m.useState([]),
    [v, E] = m.useState(null),
    [ne, F] = m.useState("auto"),
    [P, x] = m.useState({
      status: "idle",
      msg: "",
      sub: "",
      progress: 0,
      done: 0,
      total: 0,
    }),
    [p, N] = m.useState(null),
    [R, L] = m.useState(!1),
    [q, A] = m.useState(!1),
    [H, G] = m.useState("none"),
    [u, ce] = m.useState(-1),
    [se, B] = m.useState(-1),
    Y = m.useRef({
      active: !1,
      fromIdx: -1,
      overIdx: -1,
      startX: 0,
      startY: 0,
      moved: !1,
    }),
    he = m.useRef(null),
    [me, K] = m.useState(null),
    [oe, $] = m.useState("original"),
    _ = m.useRef({ active: !1, startX: 0, startY: 0 }),
    Q = m.useRef(null),
    [U, W] = m.useState(null),
    ae = m.useRef(null),
    V = m.useRef(!1),
    [ie] = m.useState(() => !!navigator.share),
    [Re, st] = m.useState(!1),
    [ft, gt] = m.useState(!1),
    Ee = m.useRef(null),
    [rn, an] = m.useState(!1),
    [bt, At] = m.useState(null),
    [$e, Hn] = m.useState(0),
    [we, rt] = m.useState(null),
    yt = m.useRef(null),
    [at, ln] = m.useState(!1),
    ee = m.useRef({ scale: 1, ox: 0, oy: 0 }),
    Pe = m.useRef(new Map()),
    it = m.useRef(null),
    Se = m.useRef(null),
    [Oe, lt] = m.useState(1),
    [cn, qe] = m.useState({ x: 0, y: 0 }),
    [Ve, ct] = m.useState({}),
    [_n, on] = m.useState(!1),
    dn = m.useRef(!1),
    [Bt, Ue] = m.useState(null),
    He = m.useRef(null),
    [Ze, xn] = m.useState(!1),
    [je, Et] = m.useState(!1),
    [le, ot] = m.useState([]),
    [Yn, _e] = m.useState(!1),
    [wt, jt] = m.useState(null),
    [Xn, Wn] = m.useState(0),
    [dt, Gn] = m.useState(() => {
      try {
        return localStorage.getItem("docscan_autocap") === "1";
      } catch {
        return !1;
      }
    }),
    un = m.useRef(dt);
  m.useEffect(() => {
    un.current = dt;
  }, [dt]);
  const [ve, xt] = m.useState(null),
    hn = m.useRef(null),
    Je = m.useRef(null),
    Ne = m.useRef(null),
    ut = m.useRef(null),
    Ke = m.useRef(null),
    ge = m.useRef(!1),
    xe = m.useCallback((n) => x((r) => ({ ...r, ...n })), []);
  (m.useEffect(
    () => () => {
      ((ge.current = !0), Ne.current?.getTracks().forEach((n) => n.stop()));
    },
    [],
  ),
    m.useEffect(() => {
      i === "review" &&
        o.length > 0 &&
        !dn.current &&
        ((dn.current = !0),
        localStorage.getItem(Dn) || setTimeout(() => on(!0), 400));
    }, [i, o.length]));
  const qn = m.useCallback(() => {
    (on(!1), localStorage.setItem(Dn, "1"));
  }, []);
  (m.useEffect(() => {
    if (i !== "review") return;
    const n = (r) => {
      const a = document.activeElement?.tagName;
      if (
        !(a === "INPUT" || a === "TEXTAREA" || a === "SELECT") &&
        !(r.metaKey || r.ctrlKey)
      )
        switch (r.key) {
          case "ArrowLeft":
            (r.preventDefault(), E((d) => Math.max((d ?? 0) - 1, 0)), te(8));
            break;
          case "ArrowRight":
            (r.preventDefault(),
              E((d) => Math.min((d ?? 0) + 1, o.length - 1)),
              te(8));
            break;
          case "r":
          case "R":
            v !== null && Ht(v);
            break;
          case "Delete":
          case "Backspace":
            v !== null && (r.preventDefault(), kt(v));
            break;
          case "f":
          case "F": {
            if (v === null) break;
            const d = o[v]?.filterId,
              g = Fe.findIndex((I) => I.id === d);
            _t(v, Fe[(g + 1) % Fe.length].id);
            break;
          }
        }
    };
    return (
      window.addEventListener("keydown", n),
      () => window.removeEventListener("keydown", n)
    );
  }, [i, o, v]),
    m.useEffect(() => {
      Js().then((n) => {
        if (!n || !n.pages?.length) return;
        if ((Date.now() - n.ts) / 6e4 > 120) {
          Pt();
          return;
        }
        At(n);
      });
    }, []));
  const vt = m.useRef(null);
  m.useEffect(() => {
    if (o.length === 0) {
      Pt();
      return;
    }
    return (
      clearTimeout(vt.current),
      (vt.current = setTimeout(() => Zs(o, i, v), 1500)),
      () => clearTimeout(vt.current)
    );
  }, [o, i, v]);
  const Le = m.useCallback(
      async (n) => {
        const r = n ?? c;
        (j(null),
          Ne.current &&
            (Ne.current.getTracks().forEach((a) => {
              try {
                a.stop();
              } catch {}
            }),
            (Ne.current = null)),
          Je.current && (Je.current.srcObject = null),
          s("camera"),
          await new Promise((a) => setTimeout(a, 320)));
        try {
          const a = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: { ideal: r },
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
            audio: !1,
          });
          Ne.current = a;
          const d = Je.current;
          if (d) {
            ((d.srcObject = a),
              (d.playsInline = !0),
              (d.muted = !0),
              d.readyState < 2 &&
                (await new Promise((I) => {
                  const D = setTimeout(I, 4e3);
                  d.onloadedmetadata = () => {
                    (clearTimeout(D), I());
                  };
                })));
            try {
              await d.play();
            } catch {}
          }
          const g = a.getVideoTracks()[0];
          y(!!g?.getCapabilities?.()?.torch);
        } catch (a) {
          (Ne.current?.getTracks().forEach((d) => d.stop()),
            (Ne.current = null),
            s("idle"),
            j(
              a.name === "NotAllowedError"
                ? "Camera permission denied. Please allow access."
                : a.name === "NotFoundError"
                  ? "No camera found on this device."
                  : `Camera error: ${a.message}`,
            ));
        }
      },
      [c],
    ),
    Ye = m.useCallback(() => {
      (Ne.current?.getTracks().forEach((n) => n.stop()),
        (Ne.current = null),
        b(!1));
    }, []),
    mn = async () => {
      if (!C || !Ne.current) return;
      const n = Ne.current.getVideoTracks()[0],
        r = !f;
      (await n.applyConstraints({ advanced: [{ torch: r }] }), b(r));
    },
    Vn = () => {
      const n = c === "environment" ? "user" : "environment";
      (h(n), Le(n));
    },
    Zn = () =>
      G((n) => (n === "none" ? "thirds" : n === "thirds" ? "cross" : "none")),
    Jn = () =>
      Gn((n) => {
        const r = !n;
        try {
          localStorage.setItem("docscan_autocap", r ? "1" : "0");
        } catch {}
        return (te(10), t(r ? "Auto-capture on" : "Auto-capture off"), r);
      }),
    Nt = m.useCallback(async () => {
      const n = Je.current;
      if (!n || !n.videoWidth) return;
      (ut.current &&
        ((ut.current.style.opacity = "0.85"),
        setTimeout(() => {
          ut.current && (ut.current.style.opacity = "0");
        }, 90)),
        te(18));
      const r = n.videoWidth,
        a = n.videoHeight,
        d = Math.min(1, En / Math.max(r, a)),
        g = Math.round(r * d),
        I = Math.round(a * d),
        D = pe(g, I);
      if (
        (D.getContext("2d", { alpha: !1, willReadFrequently: !1 }).drawImage(
          n,
          0,
          0,
          g,
          I,
        ),
        je)
      ) {
        const J = D.toDataURL("image/jpeg", 0.82);
        (ot((re) => [...re, { id: Date.now(), canvas: D, dataUrl: J }]),
          t(`Frame ${le.length + 1} captured`),
          te(15));
        return;
      }
      (xt(null), T(D), s("detect"), await ye(), await ye());
      const Z = await St(D);
      (S(Z), s("adjust"));
    }, [je, le.length, t]);
  ((hn.current = Nt),
    m.useEffect(() => {
      if (i !== "camera") {
        xt(null);
        return;
      }
      let n = 0,
        r = 0,
        a = 0,
        d = null,
        g = !0;
      const I = pe(2, 2),
        D = (Z) => {
          n = requestAnimationFrame(D);
          const J = Je.current;
          if (!J || !J.videoWidth || Z - r < 110) return;
          if (((r = Z), we !== null)) {
            xt(null);
            return;
          }
          const re = J.videoWidth,
            X = J.videoHeight,
            ue = Math.min(1, 240 / Math.max(re, X)),
            ke = Math.max(2, Math.round(re * ue)),
            Ce = Math.max(2, Math.round(X * ue));
          ((I.width !== ke || I.height !== Ce) &&
            ((I.width = ke), (I.height = Ce)),
            I.getContext("2d", { willReadFrequently: !0 }).drawImage(
              J,
              0,
              0,
              ke,
              Ce,
            ));
          const be = cr(I);
          if (!be) {
            ((a = 0), (d = null), (g = !0), xt(null));
            return;
          }
          const Ae = J.clientWidth,
            ht = J.clientHeight,
            et = Math.max(Ae / re, ht / X),
            Ct = (Ae - re * et) / 2,
            Cs = (ht - X * et) / 2,
            Mt = be.corners.map((De) => ({
              x: Ct + (De.x / ue) * et,
              y: Cs + (De.y / ue) * et,
            }));
          let zt = 1 / 0;
          if (d) {
            zt = 0;
            for (let De = 0; De < 4; De++)
              zt += Math.hypot(Mt[De].x - d[De].x, Mt[De].y - d[De].y);
            zt /= 4;
          }
          ((d = Mt),
            zt < Math.max(6, Ae * 0.012) ? (a += 1) : (a = Math.max(0, a - 1)),
            xt({ pts: Mt, locked: a >= 4, area: be.area }),
            un.current &&
              g &&
              a >= 6 &&
              be.area > 0.18 &&
              ((g = !1), hn.current?.()));
        };
      return ((n = requestAnimationFrame(D)), () => cancelAnimationFrame(n));
    }, [i, we]));
  const Kn = () => Hn((n) => (n === 0 ? 3 : n === 3 ? 5 : 0)),
    Qn = m.useCallback(() => {
      if ($e === 0) {
        Nt();
        return;
      }
      (te(8), rt($e));
      let n = $e;
      yt.current = setInterval(() => {
        ((n -= 1),
          n <= 0
            ? (clearInterval(yt.current), rt(null), Nt())
            : (te(6), rt(n)));
      }, 1e3);
    }, [$e, Nt]),
    pn = () => {
      (clearInterval(yt.current), rt(null));
    },
    es = () => {
      le.length !== 0 && (Ye(), _e(!0));
    },
    ts = () => {
      (_e(!1), jt(null));
    },
    ns = (n) => ot((r) => r.filter((a) => a.id !== n)),
    ss = m.useCallback(
      (n) => {
        (jt(n), _e(!1));
        const r = le[n];
        St(r.canvas).then((a) => {
          (T(r.canvas), S(a), s("batchAdjust"));
        });
      },
      [le],
    ),
    rs = async () => {
      if (!k || !M || wt === null) return;
      (s("warping"), await ye());
      const n = await Dt(k, M);
      (ot((r) => {
        const a = [...r];
        return (
          (a[wt] = {
            ...a[wt],
            canvas: n,
            dataUrl: n.toDataURL("image/jpeg", 0.82),
          }),
          a
        );
      }),
        T(null),
        S(null),
        jt(null),
        s("idle"),
        _e(!0));
    },
    as = async () => {
      if (le.length === 0) return;
      (_e(!1), s("detect"));
      const n = [];
      for (let r = 0; r < le.length; r++) {
        const a = le[r],
          d = await St(a.canvas);
        await ye();
        const g = await Dt(a.canvas, d),
          I = Fe.find((Z) => Z.id === "document"),
          D = {
            id: Date.now() + r,
            canvas: g,
            filterId: "document",
            enhance: { ...I.enhance },
            thumb: Me(g, 80),
            filterThumb: mt(g),
            preview: Me(Te(g, I.enhance), 600),
          };
        (n.push(D),
          setTimeout(() => {
            const Z = Ft(g);
            ct((J) => ({ ...J, [D.id]: Z }));
          }, 50 * r));
      }
      (z((r) => {
        const a = [...r, ...n];
        return (E(a.length - 1), a);
      }),
        ot([]),
        Et(!1),
        s("review"),
        t(`${n.length} pages added from batch`),
        te(20));
    },
    is = async () => {
      if (!k || !M) return;
      (Ye(), s("warping"), await ye());
      const n = await Dt(k, M),
        r = Fe.find((d) => d.id === "document"),
        a = {
          id: Date.now(),
          canvas: n,
          filterId: "document",
          enhance: { ...r.enhance },
          thumb: Me(n, 80),
          filterThumb: mt(n),
          preview: Me(Te(n, r.enhance), 600),
        };
      if (me !== null) {
        const d = me;
        (z((I) => {
          const D = [...I];
          return (
            (D[d] = {
              ...a,
              filterId: I[d].filterId,
              enhance: { ...I[d].enhance },
            }),
            D
          );
        }),
          E(d),
          K(null),
          te(15));
        const g = Ft(n);
        (ct((I) => ({ ...I, [a.id]: g })), t(`Page ${d + 1} replaced`));
      } else
        (z((d) => {
          const g = [...d, a];
          return (E(g.length - 1), g);
        }),
          t(`Page ${o.length + 1} added`),
          te(15),
          setTimeout(() => {
            const d = Ft(n);
            ct((g) => ({ ...g, [a.id]: d }));
          }, 100));
      (T(null), S(null), s("review"));
    },
    ls = () => {
      (T(null), S(null), Le());
    },
    $t = m.useCallback(
      (n) => {
        (K(n), Le());
      },
      [Le],
    );
  m.useEffect(() => {
    if (
      ((ee.current = { scale: 1, ox: 0, oy: 0 }),
      (Se.current = null),
      lt(1),
      qe({ x: 0, y: 0 }),
      v === null || !he.current)
    )
      return;
    he.current.querySelector(`[data-thumb-idx="${v}"]`)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [v]);
  const Ot = m.useCallback((n, r, a) => {
      const d = Q.current;
      if (!d || a <= 1) return { x: 0, y: 0 };
      const g = d.getBoundingClientRect(),
        I = (g.width * (a - 1)) / 2 / a,
        D = (g.height * (a - 1)) / 2 / a;
      return {
        x: Math.max(-I, Math.min(I, n)),
        y: Math.max(-D, Math.min(D, r)),
      };
    }, []),
    Ut = m.useCallback(() => {
      ((ee.current = { scale: 1, ox: 0, oy: 0 }),
        (Se.current = null),
        lt(1),
        qe({ x: 0, y: 0 }));
    }, []),
    cs = m.useCallback(
      (n) => {
        if (!U) {
          Pe.current.set(n.pointerId, { x: n.clientX, y: n.clientY });
          try {
            Q.current?.setPointerCapture(n.pointerId);
          } catch {}
          if (Pe.current.size === 2) {
            const [r, a] = [...Pe.current.values()];
            ((it.current = {
              startDist: Math.hypot(a.x - r.x, a.y - r.y),
              startScale: ee.current.scale,
            }),
              (Se.current = null));
          } else
            ee.current.scale > 1.02
              ? ((Se.current = {
                  startX: n.clientX,
                  startY: n.clientY,
                  baseX: ee.current.ox,
                  baseY: ee.current.oy,
                  moved: !1,
                }),
                (_.current = { active: !1, startX: 0, startY: 0 }))
              : (_.current = {
                  active: !0,
                  startX: n.clientX,
                  startY: n.clientY,
                });
        }
      },
      [U],
    ),
    os = m.useCallback(
      (n) => {
        if (
          (Pe.current.set(n.pointerId, { x: n.clientX, y: n.clientY }),
          Pe.current.size >= 2 && it.current)
        ) {
          n.preventDefault();
          const [r, a] = [...Pe.current.values()],
            d = Math.hypot(a.x - r.x, a.y - r.y),
            g = Math.max(
              1,
              Math.min(4, (it.current.startScale * d) / it.current.startDist),
            );
          ee.current.scale = g;
          const I = Ot(ee.current.ox, ee.current.oy, g);
          ((ee.current.ox = I.x), (ee.current.oy = I.y), lt(g), qe(I));
          return;
        }
        if (Se.current) {
          n.preventDefault();
          const r = Se.current,
            a = ee.current.scale,
            d = Ot(
              r.baseX + (n.clientX - r.startX) / a,
              r.baseY + (n.clientY - r.startY) / a,
              a,
            );
          ((Math.abs(n.clientX - r.startX) > 4 ||
            Math.abs(n.clientY - r.startY) > 4) &&
            (r.moved = !0),
            (ee.current.ox = d.x),
            (ee.current.oy = d.y),
            qe(d));
        }
      },
      [Ot],
    ),
    fn = m.useCallback(
      (n) => {
        if (
          (Pe.current.delete(n.pointerId),
          Pe.current.size < 2 && (it.current = null),
          Pe.current.size > 0)
        )
          return;
        const r = Se.current;
        Se.current = null;
        const a = Date.now();
        if (ee.current._lastTap && a - ee.current._lastTap < 280) {
          ((ee.current._lastTap = 0),
            ee.current.scale > 1.02
              ? Ut()
              : ((ee.current.scale = 2.5),
                (ee.current.ox = 0),
                (ee.current.oy = 0),
                lt(2.5),
                qe({ x: 0, y: 0 })),
            te(8));
          return;
        }
        if (
          ((ee.current._lastTap = a),
          r?.moved || !_.current.active || ee.current.scale > 1.05)
        )
          return;
        _.current.active = !1;
        const d = n.clientX - _.current.startX,
          g = n.clientY - _.current.startY;
        Math.abs(d) < 40 ||
          Math.abs(g) > Math.abs(d) * 0.7 ||
          (E((I) =>
            I === null
              ? 0
              : d < 0
                ? Math.min(I + 1, o.length - 1)
                : Math.max(I - 1, 0),
          ),
          te(8));
      },
      [o.length, Ut],
    ),
    Qe = m.useCallback(() => W(null), []),
    kt = (n) => {
      (z((r) => r.filter((a, d) => d !== n)),
        E((r) => {
          if (r === null) return null;
          const a = o.length - 1;
          if (a <= 0) return null;
          let d = r > n ? r - 1 : r;
          return (d >= a && (d = a - 1), d);
        }));
    },
    Ht = (n) => {
      z((r) => {
        const a = [...r],
          { canvas: d } = a[n],
          g = pe(d.height, d.width),
          I = fe(g);
        return (
          I.translate(g.width / 2, g.height / 2),
          I.rotate(Math.PI / 2),
          I.drawImage(d, -d.width / 2, -d.height / 2),
          (a[n] = {
            ...a[n],
            canvas: g,
            thumb: Me(g, 80),
            filterThumb: mt(g),
            preview: Me(g, 600),
          }),
          a
        );
      });
    },
    gn = m.useCallback((n, r) => Me(Te(n, r), 600), []),
    bn = m.useRef({}),
    ds = (n, r) => {
      (z((a) => {
        const d = [...a];
        return ((d[n] = { ...d[n], enhance: { ...d[n].enhance, ...r } }), d);
      }),
        clearTimeout(bn.current[n]),
        (bn.current[n] = setTimeout(() => {
          z((a) => {
            const d = [...a];
            return d[n]
              ? ((d[n] = { ...d[n], preview: gn(d[n].canvas, d[n].enhance) }),
                d)
              : a;
          });
        }, 200)));
    },
    _t = (n, r) => {
      const a = Fe.find((d) => d.id === r);
      a &&
        z((d) => {
          const g = [...d];
          return (
            (g[n] = {
              ...g[n],
              filterId: r,
              enhance: { ...a.enhance },
              preview: gn(g[n].canvas, a.enhance),
            }),
            g
          );
        });
    },
    xs = m.useCallback(
      (n) => {
        const r = Fe.find((a) => a.id === n);
        !r ||
          o.length <= 1 ||
          (z((a) =>
            a.map((d) => ({
              ...d,
              filterId: n,
              enhance: { ...r.enhance },
              preview: Me(Te(d.canvas, r.enhance), 600),
            })),
          ),
          t(`"${r.label}" applied to all ${o.length} pages`));
      },
      [o.length, t],
    ),
    us = m.useCallback((n, r) => {
      if (!n.target.closest("[data-action]")) {
        try {
          n.currentTarget.setPointerCapture(n.pointerId);
        } catch {}
        ((V.current = !1),
          clearTimeout(ae.current),
          (Y.current = {
            active: !1,
            fromIdx: r,
            overIdx: r,
            startX: n.clientX,
            startY: n.clientY,
            moved: !1,
          }),
          (ae.current = setTimeout(() => {
            if (Y.current.moved) return;
            ((V.current = !0), te(22));
            const a = n.currentTarget?.getBoundingClientRect?.() ?? {
              left: n.clientX,
              top: n.clientY,
            };
            W({
              idx: r,
              x: Math.min(a.left, window.innerWidth - 168),
              y: Math.min(a.bottom + 8, window.innerHeight - 200),
            });
          }, 480)));
      }
    }, []),
    hs = m.useCallback((n) => {
      const r = Y.current;
      if (r.fromIdx < 0) return;
      const a = n.clientX - r.startX,
        d = n.clientY - r.startY;
      if (
        (Math.sqrt(a * a + d * d) > 6 &&
          (clearTimeout(ae.current), (ae.current = null)),
        !r.active &&
          !V.current &&
          Math.abs(a) > 10 &&
          Math.abs(a) > Math.abs(d) * 1.4 &&
          ((r.active = !0), (r.moved = !0), ce(r.fromIdx), B(r.fromIdx)),
        r.active)
      ) {
        const I = document.elementFromPoint(n.clientX, n.clientY),
          D = I?.closest("[data-thumb-idx]");
        if (D) {
          const Z = parseInt(D.dataset.thumbIdx, 10);
          Z !== r.overIdx && ((r.overIdx = Z), B(Z));
        }
      }
    }, []),
    yn = m.useCallback(
      (n) => {
        (clearTimeout(ae.current), (ae.current = null));
        const { active: r, fromIdx: a, overIdx: d, moved: g } = Y.current;
        (!g && !V.current && a >= 0 && E(a),
          r &&
            a !== d &&
            a >= 0 &&
            d >= 0 &&
            (z((I) => {
              const D = [...I],
                [Z] = D.splice(a, 1);
              return (D.splice(d, 0, Z), D);
            }),
            E(d),
            te(12),
            t(`Page moved to position ${d + 1}`)),
          (Y.current = {
            active: !1,
            fromIdx: -1,
            overIdx: -1,
            startX: 0,
            startY: 0,
            moved: !1,
          }),
          ce(-1),
          B(-1),
          (V.current = !1));
      },
      [t],
    ),
    Yt = async (n) => {
      const r = Array.from(n.target.files || []);
      if (r.length) {
        ((n.target.value = ""), xn(!0));
        try {
          const a = [];
          for (const d of r) {
            if (!d.type.startsWith("image/")) {
              t(`Skipped ${d.name} — not an image`);
              continue;
            }
            try {
              const g = await br(d),
                I = await St(g),
                D = await Dt(g, I),
                Z = Fe.find((re) => re.id === "document"),
                J = {
                  id: Date.now() + a.length,
                  canvas: D,
                  filterId: "document",
                  enhance: { ...Z.enhance },
                  thumb: Me(D, 80),
                  filterThumb: mt(D),
                  preview: Me(Te(D, Z.enhance), 600),
                };
              (a.push(J),
                setTimeout(() => {
                  const re = Ft(D);
                  ct((X) => ({ ...X, [J.id]: re }));
                }, 80 * a.length));
            } catch (g) {
              t(`Failed: ${g.message}`);
            }
          }
          a.length > 0 &&
            (z((d) => {
              const g = [...d, ...a];
              return (E(g.length - 1), g);
            }),
            s("review"),
            t(`${a.length} image${a.length > 1 ? "s" : ""} imported`));
        } finally {
          xn(!1);
        }
      }
    },
    wn = m.useCallback(async (n, r, a) => {
      try {
        (await nr(n, { name: r, pageCount: a }), Wn((d) => d + 1));
      } catch {}
    }, []),
    ms = async () => {
      if (o.length) {
        if (!window.PDFLib) {
          t("PDF library not ready", "error");
          return;
        }
        ((ge.current = !1),
          s("ocr"),
          xe({
            status: "ocr",
            msg: "Building PDF…",
            sub: "Embedding images (no OCR)",
            progress: 10,
            done: 0,
            total: o.length,
          }));
        try {
          const { PDFDocument: n } = window.PDFLib,
            r = await n.create();
          for (let D = 0; D < o.length && !ge.current; D++) {
            (Ue(D),
              xe({
                msg: `Adding page ${D + 1} of ${o.length}…`,
                progress: 10 + Math.round((D / o.length) * 80),
                done: D,
              }),
              await ye());
            const Z = Te(o[D].canvas, o[D].enhance),
              J = Lt(Z.toDataURL("image/jpeg", Qt).split(",")[1]),
              re = await r.embedJpg(J);
            r.addPage([re.width, re.height]).drawImage(re, {
              x: 0,
              y: 0,
              width: re.width,
              height: re.height,
            });
          }
          (Ue(null), xe({ progress: 95, msg: "Saving…", sub: "" }), await ye());
          const a = await r.save(),
            d = Fn("") || "scanned-document",
            g = `${d}.pdf`,
            I = URL.createObjectURL(new Blob([a], { type: "application/pdf" }));
          (Object.assign(document.createElement("a"), {
            href: I,
            download: g,
          }).click(),
            URL.revokeObjectURL(I),
            l?.(g, a.byteLength, a),
            await wn(a, d, o.length),
            xe({ status: "done", progress: 100, msg: "Done!", sub: "" }),
            t(`✓ ${o.length} page PDF saved`),
            s("review"));
        } catch (n) {
          (t("Failed: " + n.message), s("review"), xe({ status: "idle" }));
        }
      }
    },
    ps = async () => {
      if (o.length) {
        if (!window.PDFLib) {
          t("PDF library not ready");
          return;
        }
        ((ge.current = !1),
          s("ocr"),
          Ue(null),
          xe({
            status: "ocr",
            msg: "Loading OCR engine…",
            sub: "Downloading Tesseract.js",
            progress: 2,
            done: 0,
            total: o.length,
          }),
          N(null));
        try {
          const n = await lr();
          if (ge.current) return;
          let r = ne;
          if (ne === "auto") {
            if (
              (xe({
                msg: "Detecting language…",
                sub: "Analysing script",
                progress: 5,
              }),
              (r = await mr(n, o[0].canvas)),
              ge.current)
            )
              return;
            xe({
              sub: `Detected: ${Wt.find((X) => X.code === r)?.label ?? r}`,
            });
          }
          xe({
            msg: "Loading language model…",
            sub: `"${Wt.find((X) => X.code === r)?.label ?? r}"`,
            progress: 8,
          });
          const a = await n.createWorker(r, 1, { logger: () => {} });
          if (
            ((Ke.current = a),
            await a.setParameters({
              tessedit_pageseg_mode: "1",
              preserve_interword_spaces: "1",
              user_defined_dpi: "300",
            }),
            ge.current)
          ) {
            await a.terminate();
            return;
          }
          const d = [];
          for (let X = 0; X < o.length && !ge.current; X++) {
            (Ue(X),
              xe({
                msg: `Scanning page ${X + 1} of ${o.length}`,
                sub: "Enhancement + Tesseract…",
                progress: 8 + Math.round((X / o.length) * 70),
                done: X,
              }),
              await ye());
            const ue = Te(o[X].canvas, o[X].enhance),
              ke = gr(ue),
              Ce = fr(ue, ke);
            await ye();
            const be = ur(Ce),
              { data: Ae } = await a.recognize(be.toDataURL("image/png"));
            let ht = Ae;
            if (Ae.confidence < 55) {
              const et = hr(be),
                Ct = await a.recognize(et.toDataURL("image/png"));
              Ct.data.confidence > Ae.confidence && (ht = Ct.data);
            }
            d.push({ canvas: ue, ocrData: ht, ocrScale: ke });
          }
          if (
            (Ue(null),
            await a.terminate(),
            (Ke.current = null),
            ge.current || !d.length)
          ) {
            s("review");
            return;
          }
          (xe({
            status: "building",
            msg: "Building searchable PDF…",
            sub: "Embedding text layer",
            progress: 82,
          }),
            await ye());
          const g = await pr(d, oe);
          if (ge.current) {
            s("review");
            return;
          }
          xe({ progress: 98, msg: "Finalising…", sub: "" });
          let I = "",
            D = 0,
            Z = 0;
          d.forEach(({ ocrData: X }, ue) => {
            ((I += `--- Page ${ue + 1} ---
${X.text.trim()}

`),
              (D += X.confidence));
            const ke =
              X.lines?.flatMap((Ce) => Ce.words || []) ?? X.words ?? [];
            Z +=
              ke.length ||
              (X.text ? X.text.trim().split(/\s+/).filter(Boolean).length : 0);
          });
          const J = Fn(d[0]?.ocrData?.text),
            re = {
              pdfBytes: g,
              text: I.trim(),
              avgConf: Math.round(D / d.length),
              wordCount: Z,
              pages: d.length,
              detectedLang: r,
              filename: J,
              pageSizeId: oe,
            };
          (N(re),
            await wn(g, J, d.length),
            xe({
              status: "done",
              msg: "Done!",
              sub: "",
              progress: 100,
              done: d.length,
            }),
            s("done"),
            t(`✓ ${d.length} page${d.length > 1 ? "s" : ""} made searchable`));
        } catch (n) {
          ge.current ||
            (xe({ status: "error", msg: n.message, sub: "" }),
            t("OCR failed: " + n.message),
            s("review"));
        }
      }
    },
    fs = async () => {
      ge.current = !0;
      try {
        await Ke.current?.terminate();
      } catch {}
      ((Ke.current = null), Ue(null), s("review"), xe({ status: "idle" }));
    },
    gs = () => {
      if (!p?.pdfBytes) return;
      const n = `${p.filename || "scanned-document"}.pdf`,
        r = URL.createObjectURL(
          new Blob([p.pdfBytes], { type: "application/pdf" }),
        );
      (Object.assign(document.createElement("a"), {
        href: r,
        download: n,
      }).click(),
        URL.revokeObjectURL(r),
        l?.(n, p.pdfBytes.byteLength, p.pdfBytes));
    },
    bs = () => {
      if (!p?.text) return;
      const n = `${p.filename || "scanned-document"}.txt`,
        r = URL.createObjectURL(new Blob([p.text], { type: "text/plain" }));
      (Object.assign(document.createElement("a"), {
        href: r,
        download: n,
      }).click(),
        URL.revokeObjectURL(r));
    },
    ys = async () => {
      p?.text &&
        (await navigator.clipboard.writeText(p.text),
        A(!0),
        setTimeout(() => A(!1), 2e3),
        t("Copied!"));
    },
    ws = async () => {
      if (!(!p?.pdfBytes || !navigator.share)) {
        st(!0);
        try {
          const n = `${p.filename || "scanned-document"}.pdf`,
            r = new File([p.pdfBytes], n, { type: "application/pdf" });
          if (navigator.canShare?.({ files: [r] }))
            await navigator.share({ files: [r], title: n });
          else {
            const a = URL.createObjectURL(
              new Blob([p.pdfBytes], { type: "application/pdf" }),
            );
            (await navigator.share({ title: n, url: a }),
              setTimeout(() => URL.revokeObjectURL(a), 5e3));
          }
        } catch (n) {
          n.name !== "AbortError" && t("Share failed: " + n.message);
        } finally {
          st(!1);
        }
      }
    },
    js = async (n, r) => {
      if (!n || !window.PDFLib) {
        t("PDF library not ready");
        return;
      }
      gt(!0);
      try {
        const { PDFDocument: a } = window.PDFLib,
          d = await n.arrayBuffer(),
          g = await a.load(d, { ignoreEncryption: !0 }),
          I = await a.create();
        for (const ue of o) {
          const ke = Te(ue.canvas, ue.enhance),
            Ce = Lt(ke.toDataURL("image/jpeg", Qt).split(",")[1]),
            be = await I.embedJpg(Ce);
          I.addPage([be.width, be.height]).drawImage(be, {
            x: 0,
            y: 0,
            width: be.width,
            height: be.height,
          });
        }
        const D = await a.create(),
          Z = r === "before" ? [I, g] : [g, I];
        for (const ue of Z)
          (await D.copyPages(ue, ue.getPageIndices())).forEach((Ce) =>
            D.addPage(Ce),
          );
        const J = await D.save(),
          re = `merged-${p?.filename || "document"}.pdf`,
          X = URL.createObjectURL(new Blob([J], { type: "application/pdf" }));
        (Object.assign(document.createElement("a"), {
          href: X,
          download: re,
        }).click(),
          URL.revokeObjectURL(X),
          l?.(re, J.byteLength, J),
          t(`Merged: ${g.getPageCount() + o.length} pages total`));
      } catch (a) {
        t("Merge failed: " + a.message);
      } finally {
        gt(!1);
      }
    },
    vs = (n) => {
      const r = n.target.files?.[0];
      if (!r) return;
      n.target.value = "";
      const a =
        window.confirm(`Merge "${r.name}" with your ${o.length} scanned page${o.length > 1 ? "s" : ""}.

OK = existing PDF BEFORE scans.
Cancel = existing PDF AFTER scans.`);
      js(r, a ? "before" : "after");
    },
    Ns = async () => {
      const n = v !== null ? o[v] : null;
      if (n)
        try {
          Te(n.canvas, n.enhance).toBlob(async (a) => {
            try {
              (await navigator.clipboard.write([
                new ClipboardItem({ "image/png": a }),
              ]),
                an(!0),
                setTimeout(() => an(!1), 2e3),
                t("Page image copied"));
            } catch {
              const d = URL.createObjectURL(a);
              (window.open(d, "_blank"),
                setTimeout(() => URL.revokeObjectURL(d), 5e3));
            }
          }, "image/png");
        } catch (r) {
          t("Copy failed: " + r.message);
        }
    },
    ks = async (n) => {
      At(null);
      try {
        const r = await Promise.all(
          n.pages.map(async (a) => {
            const d = await Ks(a.dataUrl);
            return { ...a, canvas: d, filterThumb: mt(d) };
          }),
        );
        (z(r),
          E(n.selectedIdx ?? 0),
          s("review"),
          t(`Session restored — ${r.length} page${r.length > 1 ? "s" : ""}`));
      } catch {
        t("Could not restore session");
      }
    },
    jn = () => {
      ((ge.current = !0),
        clearTimeout(vt.current),
        clearInterval(yt.current),
        rt(null));
      try {
        Ke.current?.terminate();
      } catch {}
      ((Ke.current = null),
        Ye(),
        s("idle"),
        z([]),
        E(null),
        T(null),
        S(null),
        N(null),
        K(null),
        $("original"),
        ct({}),
        Ue(null),
        lt(1),
        qe({ x: 0, y: 0 }),
        (ee.current = { scale: 1, ox: 0, oy: 0 }),
        (Se.current = null),
        ot([]),
        Et(!1),
        _e(!1),
        jt(null),
        Pt(),
        xe({
          status: "idle",
          msg: "",
          sub: "",
          progress: 0,
          done: 0,
          total: 0,
        }));
    };
  if (Yn)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsx(qs, {
          captures: le,
          onEdit: ss,
          onDeleteCapture: ns,
          onConfirmAll: as,
          onDismiss: () => {
            (ts(), Le());
          },
        }),
      ],
    });
  if (i === "batchAdjust" && k && M)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs("div", {
          className: "fixed inset-0 z-50 bg-black flex flex-col ds-root",
          style: { touchAction: "none" },
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-4 border-b border-zinc-800",
              style: {
                paddingTop: "max(16px,env(safe-area-inset-top))",
                paddingBottom: 12,
                background: "#111111",
              },
              children: [
                e.jsxs("button", {
                  onClick: () => {
                    (T(null), S(null), s("idle"), _e(!0));
                  },
                  className:
                    "flex items-center gap-2 text-zinc-400 active:text-white transition-colors",
                  children: [
                    e.jsx(pt, { className: "w-4 h-4" }),
                    e.jsx("span", {
                      className: "text-sm ds-display",
                      children: "Cancel",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("p", {
                      className: "ds-display text-white font-bold text-sm",
                      children: "Adjust Corners",
                    }),
                    e.jsxs("p", {
                      className: "ds-mono text-zinc-500 text-[10px] mt-0.5",
                      children: ["Frame ", (wt ?? 0) + 1, "/", le.length],
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: () => {
                    k &&
                      (S([
                        { x: 0, y: 0 },
                        { x: k.width, y: 0 },
                        { x: k.width, y: k.height },
                        { x: 0, y: k.height },
                      ]),
                      te(10));
                  },
                  className:
                    "flex items-center gap-1.5 text-zinc-400 active:text-white transition-colors",
                  children: [
                    e.jsx(zn, { className: "w-4 h-4" }),
                    e.jsx("span", {
                      className: "text-sm ds-display",
                      children: "Full",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex-1 min-h-0 bg-black overflow-visible px-2 py-2",
              children: e.jsx(Tn, {
                srcCanvas: k,
                corners: M,
                onChange: S,
                onHaptic: te,
              }),
            }),
            e.jsx("div", {
              className: "px-4 pt-3",
              style: {
                paddingBottom: "max(24px,env(safe-area-inset-bottom))",
                background: "#111111",
                borderTop: "1px solid #282828",
              },
              children: e.jsxs("button", {
                onClick: rs,
                className:
                  "ds-btn-primary w-full flex items-center justify-center gap-2 py-4 text-base",
                children: [e.jsx(nt, { className: "w-5 h-5" }), "Confirm"],
              }),
            }),
          ],
        }),
      ],
    });
  if (i === "idle")
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs("div", {
          className:
            "ds-root flex flex-col items-center w-full max-w-sm mx-auto px-4 pb-10 pt-1 gap-5",
          children: [
            e.jsx("input", {
              ref: He,
              type: "file",
              accept: "image/*",
              multiple: !0,
              className: "hidden",
              onChange: Yt,
            }),
            bt &&
              e.jsxs("div", {
                className:
                  "ds-card w-full flex items-start gap-3 p-4 ds-fade-up border-zinc-600",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-xl border border-zinc-700 flex items-center justify-center flex-shrink-0 mt-0.5",
                    style: { background: "#252525" },
                    children: e.jsx(Jt, {
                      className: "w-3.5 h-3.5 text-zinc-300",
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsx("p", {
                        className:
                          "ds-display text-white text-sm font-bold leading-tight",
                        children: "Unsaved session",
                      }),
                      e.jsxs("p", {
                        className: "text-zinc-400 text-xs mt-0.5",
                        style: { fontFamily: "inherit" },
                        children: [
                          bt.pages.length,
                          " page",
                          bt.pages.length > 1 ? "s" : "",
                          " from last scan",
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2 mt-2.5",
                        children: [
                          e.jsx("button", {
                            onClick: () => ks(bt),
                            className: "ds-btn-primary px-4 py-2 text-xs",
                            children: "Restore",
                          }),
                          e.jsx("button", {
                            onClick: () => {
                              (At(null), Pt());
                            },
                            className:
                              "px-4 py-2 border border-zinc-700 text-zinc-400 rounded-xl text-xs transition-colors active:text-white",
                            style: { fontFamily: "inherit" },
                            children: "Discard",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "w-full ds-fade-up",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-11 h-11 rounded-2xl border border-zinc-700 flex items-center justify-center flex-shrink-0",
                      style: { background: "#1c1c1c" },
                      children: e.jsx(tt, { className: "w-5 h-5 text-white" }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className:
                            "ds-display text-white font-bold text-lg tracking-tight leading-tight",
                          children: "DocScan",
                        }),
                        e.jsx("p", {
                          className: "text-zinc-500 text-xs leading-tight",
                          style: { fontFamily: "inherit" },
                          children: "On-device · No upload",
                        }),
                      ],
                    }),
                    Ie().length > 0 &&
                      e.jsxs("div", {
                        className:
                          "ml-auto ds-mono text-zinc-500 text-[10px] border border-zinc-700 rounded-lg px-2 py-1",
                        style: { background: "#1c1c1c" },
                        children: [Ie().length, " saved"],
                      }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-1.5 mb-5",
                  children: [
                    "Live edge tracking",
                    "Auto-capture",
                    "Perspective fix",
                    "Multi-page",
                    "OCR → PDF",
                    "Batch capture",
                    "Gallery import",
                  ].map((n) =>
                    e.jsx(
                      "span",
                      {
                        className:
                          "ds-mono text-zinc-500 text-[10px] border border-zinc-700 rounded-lg px-2 py-1",
                        style: { background: "#181818" },
                        children: n,
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            w &&
              e.jsxs("div", {
                className:
                  "ds-card w-full flex items-start gap-3 p-3.5 ds-fade-up",
                style: { borderColor: "#444" },
                children: [
                  e.jsx(Xt, {
                    className: "w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5",
                    strokeWidth: 1.5,
                  }),
                  e.jsx("p", {
                    className: "text-zinc-300 text-xs leading-relaxed",
                    style: { fontFamily: "inherit" },
                    children: w,
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "w-full space-y-2.5 ds-fade-up ds-stagger-1",
              children: [
                e.jsxs("button", {
                  onClick: () => Le(),
                  className:
                    "ds-btn-primary w-full flex items-center justify-center gap-2.5 py-4 text-sm",
                  children: [
                    e.jsx(tt, { className: "w-4.5 h-4.5" }),
                    " Open Camera",
                  ],
                }),
                e.jsx("button", {
                  onClick: () => He.current?.click(),
                  disabled: Ze,
                  className:
                    "ds-btn-ghost w-full flex items-center justify-center gap-2.5 py-3.5 text-sm disabled:opacity-40",
                  children: Ze
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "w-3.5 h-3.5 border border-zinc-600 border-t-white rounded-full animate-spin",
                          }),
                          "Importing…",
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(Rt, { className: "w-4 h-4 text-zinc-300" }),
                          " Import from Gallery",
                        ],
                      }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "w-full grid grid-cols-3 gap-2 ds-fade-up ds-stagger-2",
              children: [
                { icon: kn, t: "Auto-edge", d: "Sobel detect" },
                { icon: An, t: "De-skew", d: "Homography" },
                { icon: It, t: "OCR PDF", d: "Searchable" },
              ].map(({ icon: n, t: r, d: a }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "ds-card flex flex-col items-center gap-2 py-3 px-2",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 rounded-xl border border-zinc-700 flex items-center justify-center",
                        style: { background: "#252525" },
                        children: e.jsx(n, {
                          className: "w-3.5 h-3.5 text-zinc-200",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "text-center",
                        children: [
                          e.jsx("p", {
                            className:
                              "ds-display text-white text-[11px] font-semibold leading-tight",
                            children: r,
                          }),
                          e.jsx("p", {
                            className:
                              "ds-mono text-zinc-500 text-[9px] mt-0.5",
                            children: a,
                          }),
                        ],
                      }),
                    ],
                  },
                  r,
                ),
              ),
            }),
            e.jsx("div", {
              className: "w-full ds-fade-up ds-stagger-3",
              children: e.jsx(ir, { refreshToken: Xn }),
            }),
          ],
        }),
      ],
    });
  if (i === "camera")
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs("div", {
          className: "fixed inset-0 z-50 bg-black flex flex-col ds-root",
          style: { touchAction: "none" },
          children: [
            e.jsx("input", {
              ref: He,
              type: "file",
              accept: "image/*",
              multiple: !0,
              className: "hidden",
              onChange: (n) => {
                (Ye(), s("idle"), Yt(n));
              },
            }),
            e.jsx("div", {
              ref: ut,
              className:
                "absolute inset-0 bg-white pointer-events-none z-30 transition-opacity duration-100",
              style: { opacity: 0 },
            }),
            e.jsx("video", {
              ref: Je,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              className: "absolute inset-0 w-full h-full object-cover",
            }),
            e.jsx(yr, { mode: H }),
            ve &&
              we === null &&
              e.jsxs("svg", {
                className:
                  "absolute inset-0 w-full h-full pointer-events-none z-[15]",
                style: { overflow: "visible" },
                children: [
                  e.jsx("polygon", {
                    points: ve.pts.map((n) => `${n.x},${n.y}`).join(" "),
                    fill: ve.locked
                      ? "rgba(52,211,153,0.16)"
                      : "rgba(255,255,255,0.08)",
                    stroke: ve.locked
                      ? "rgba(52,211,153,0.95)"
                      : "rgba(255,255,255,0.9)",
                    strokeWidth: ve.locked ? 3 : 2,
                    strokeLinejoin: "round",
                    style: {
                      transition: "fill 0.15s linear, stroke 0.15s linear",
                    },
                  }),
                  ve.pts.map((n, r) =>
                    e.jsx(
                      "circle",
                      {
                        cx: n.x,
                        cy: n.y,
                        r: ve.locked ? 6 : 4.5,
                        fill: ve.locked ? "#34d399" : "#fff",
                      },
                      r,
                    ),
                  ),
                ],
              }),
            e.jsx("div", {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background:
                  "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 55%, rgba(0,0,0,0.65) 100%)",
              },
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 flex items-center justify-center pointer-events-none",
              children: e.jsxs("div", {
                className: "relative",
                style: { width: "80%", height: "70%" },
                children: [
                  [
                    "top-0 left-0 border-t-[2px] border-l-[2px]",
                    "top-0 right-0 border-t-[2px] border-r-[2px]",
                    "bottom-0 left-0 border-b-[2px] border-l-[2px]",
                    "bottom-0 right-0 border-b-[2px] border-r-[2px]",
                  ].map((n, r) =>
                    e.jsx(
                      "div",
                      {
                        className: `absolute w-7 h-7 border-white/80 ${n}`,
                        style: { borderRadius: "2px" },
                      },
                      r,
                    ),
                  ),
                  e.jsx("p", {
                    className: `absolute bottom-[-32px] left-0 right-0 text-center ds-mono text-[10px] font-medium transition-colors ${ve?.locked ? "text-emerald-400" : "text-white/40"}`,
                    children: ve?.locked
                      ? dt
                        ? "hold steady — capturing…"
                        : "document locked — tap shutter"
                      : ve
                        ? "document detected"
                        : je
                          ? `BATCH · ${le.length} captured`
                          : "align document within frame",
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className:
                "absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 gap-2",
              style: {
                paddingTop: "max(14px,env(safe-area-inset-top))",
                paddingBottom: 10,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
              },
              children: [
                e.jsx(Xe, {
                  onClick: () => {
                    (Ye(), s(o.length > 0 ? "review" : "idle"));
                  },
                  children: e.jsx(pt, { className: "w-4.5 h-4.5" }),
                }),
                e.jsxs("button", {
                  onClick: () => Et((n) => !n),
                  className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ds-mono ${je ? "bg-white text-black" : "border border-white/20 text-white/70"}`,
                  style: je
                    ? {}
                    : {
                        background: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(12px)",
                      },
                  children: [
                    e.jsx(Tt, { className: "w-3.5 h-3.5" }),
                    je ? `Batch · ${le.length}` : "Batch",
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-1.5",
                  children: [
                    e.jsx(Xe, {
                      onClick: Jn,
                      active: dt,
                      title: "Auto-capture when document is steady",
                      children: e.jsx(kn, { className: "w-4 h-4" }),
                    }),
                    e.jsx(Xe, {
                      onClick: () => He.current?.click(),
                      title: "Import from gallery",
                      children: e.jsx(Rt, { className: "w-4 h-4" }),
                    }),
                    e.jsx(Xe, {
                      onClick: Kn,
                      active: $e > 0,
                      title: "Countdown timer",
                      children: e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx(Os, { className: "w-4 h-4" }),
                          $e > 0 &&
                            e.jsx("span", {
                              className:
                                "absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white text-black rounded-full ds-mono text-[8px] font-bold flex items-center justify-center",
                              children: $e,
                            }),
                        ],
                      }),
                    }),
                    e.jsx(Xe, {
                      onClick: Zn,
                      active: H !== "none",
                      title: "Grid overlay",
                      children:
                        H === "cross"
                          ? e.jsx(Ts, { className: "w-4 h-4" })
                          : e.jsx(Fs, { className: "w-4 h-4" }),
                    }),
                    C &&
                      e.jsx(Xe, {
                        onClick: mn,
                        active: f,
                        title: "Torch",
                        children: e.jsx(vn, { className: "w-4 h-4" }),
                      }),
                    e.jsx(Xe, {
                      onClick: Vn,
                      title: "Flip camera",
                      children: e.jsx(Ms, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),
            we !== null &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className:
                      "absolute inset-0 z-[25] flex flex-col items-center justify-center pointer-events-none gap-8",
                    children: [
                      e.jsx(
                        "span",
                        {
                          className:
                            "ds-display text-white font-black tabular-nums select-none",
                          style: {
                            fontSize: 128,
                            lineHeight: 1,
                            textShadow: "0 4px 64px rgba(0,0,0,0.95)",
                            opacity: 0.96,
                            animation: "ds-fade-up 0.15s both",
                          },
                          children: we,
                        },
                        we,
                      ),
                      e.jsx("div", {
                        className: "flex gap-1.5",
                        children: Array.from({ length: we }).map((n, r) =>
                          e.jsx(
                            "div",
                            {
                              className: "w-1.5 h-1.5 rounded-full bg-white/40",
                            },
                            r,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "absolute inset-0 z-[24]",
                    onClick: pn,
                  }),
                ],
              }),
            je &&
              le.length > 0 &&
              e.jsx("div", {
                className:
                  "absolute left-0 right-0 z-20 flex justify-center px-4 pointer-events-none",
                style: { bottom: 130 },
                children: e.jsxs("div", {
                  className: "flex gap-1.5 overflow-x-auto",
                  style: { pointerEvents: "auto" },
                  children: [
                    le.slice(-6).map((n, r) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "relative flex-shrink-0 rounded-xl overflow-hidden border border-white/15",
                          style: { width: 34, height: 44 },
                          children: [
                            e.jsx("img", {
                              src: n.dataUrl,
                              alt: "",
                              className: "w-full h-full object-cover",
                            }),
                            e.jsx("div", {
                              className:
                                "absolute bottom-0.5 left-0 right-0 flex justify-center",
                              children: e.jsx("span", {
                                className:
                                  "ds-mono text-white text-[8px] font-bold",
                                children:
                                  le.length - le.slice(-6).length + r + 1,
                              }),
                            }),
                          ],
                        },
                        n.id,
                      ),
                    ),
                    le.length > 6 &&
                      e.jsx("div", {
                        className:
                          "flex-shrink-0 w-[34px] h-[44px] rounded-xl border border-white/15 flex items-center justify-center",
                        style: { background: "rgba(0,0,0,0.6)" },
                        children: e.jsxs("span", {
                          className:
                            "text-white/50 ds-mono text-[10px] font-bold",
                          children: ["+", le.length - 6],
                        }),
                      }),
                  ],
                }),
              }),
            e.jsxs("div", {
              className:
                "absolute bottom-0 left-0 right-0 z-20 flex items-center px-4",
              style: {
                paddingBottom: "max(28px,env(safe-area-inset-bottom))",
                paddingTop: 14,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
              },
              children: [
                e.jsx("div", {
                  className: "flex-1 flex items-center justify-start",
                  children: e.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      o.slice(-3).map((n, r, a) =>
                        e.jsx(
                          "div",
                          {
                            className:
                              "relative rounded-xl overflow-hidden border-[1.5px] border-white/25 flex-shrink-0",
                            style: {
                              width: 40,
                              height: 52,
                              marginLeft: r > 0 ? -8 : 0,
                              zIndex: a.length - r,
                            },
                            onClick: () => {
                              (Ye(), E(o.length - a.length + r), s("review"));
                            },
                            children: e.jsx("img", {
                              src: n.thumb,
                              alt: "",
                              className: "w-full h-full object-cover",
                            }),
                          },
                          n.id,
                        ),
                      ),
                      o.length > 3 &&
                        e.jsx("div", {
                          className:
                            "ml-2 w-6 h-6 rounded-full flex items-center justify-center",
                          style: { background: "rgba(255,255,255,0.15)" },
                          children: e.jsxs("span", {
                            className:
                              "text-white ds-mono text-[9px] font-bold",
                            children: ["+", o.length - 3],
                          }),
                        }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "flex items-center justify-center flex-1",
                  children: e.jsxs("button", {
                    "aria-label": "Capture photo",
                    onClick: we !== null ? pn : Qn,
                    className:
                      "relative flex items-center justify-center active:scale-90 transition-all",
                    style: { width: 72, height: 72 },
                    children: [
                      e.jsx("div", {
                        className: `absolute inset-0 rounded-full border-2 transition-all ${we !== null ? "border-red-400" : je ? "border-white/50" : "border-white/60"}`,
                      }),
                      e.jsx("div", {
                        className: `rounded-full transition-all ${we !== null ? "bg-red-400" : "bg-white"}`,
                        style: { width: 56, height: 56 },
                        children:
                          je &&
                          we === null &&
                          e.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center",
                            children: e.jsx(Tt, {
                              className: "w-5 h-5 text-black/60",
                            }),
                          }),
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "flex-1 flex items-center justify-end gap-2",
                  children:
                    je && le.length > 0
                      ? e.jsxs("button", {
                          onClick: es,
                          className:
                            "flex flex-col items-center gap-0.5 px-3 py-2 rounded-2xl",
                          style: {
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.15)",
                          },
                          children: [
                            e.jsx("span", {
                              className:
                                "ds-display text-white font-black text-xl leading-none",
                              children: le.length,
                            }),
                            e.jsx("span", {
                              className:
                                "ds-mono text-white/60 text-[9px] uppercase tracking-wider",
                              children: "Review",
                            }),
                          ],
                        })
                      : e.jsx("button", {
                          onClick: () => {
                            (Ye(), E(o.length > 0 ? 0 : null), s("review"));
                          },
                          disabled: o.length === 0,
                          className:
                            "px-4 py-2 rounded-xl text-sm font-semibold text-white disabled:opacity-30 transition-colors",
                          style: {
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            fontFamily: "inherit",
                          },
                          children: "Review",
                        }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  if (i === "detect")
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsx(Ln, {
          title: "Detecting edges…",
          sub: "Pure-JS Sobel · no library",
        }),
      ],
    });
  if (i === "warping")
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsx(Ln, {
          title: "Perspective correction…",
          sub: "Homography backward-mapping",
        }),
      ],
    });
  if (i === "adjust" && k && M)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs("div", {
          className: "fixed inset-0 z-50 bg-black flex flex-col ds-root",
          style: { touchAction: "none" },
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between px-4 border-b border-zinc-800",
              style: {
                paddingTop: "max(16px,env(safe-area-inset-top))",
                paddingBottom: 12,
                background: "#111111",
              },
              children: [
                e.jsxs("button", {
                  onClick: ls,
                  className:
                    "flex items-center gap-2 text-zinc-400 active:text-white transition-colors",
                  children: [
                    e.jsx(tt, { className: "w-4 h-4" }),
                    e.jsx("span", {
                      className: "ds-display text-sm",
                      children: "Retake",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("p", {
                      className: "ds-display text-white font-bold text-sm",
                      children:
                        me !== null
                          ? `Replace Page ${me + 1}`
                          : "Adjust Corners",
                    }),
                    e.jsx("p", {
                      className: "ds-mono text-zinc-500 text-[10px] mt-0.5",
                      children: "drag handles · loupe assists",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    C &&
                      e.jsx("button", {
                        "aria-label": "Toggle flash",
                        onClick: mn,
                        className: `w-8 h-8 flex items-center justify-center rounded-xl transition-all ${f ? "bg-white text-black" : "border border-zinc-700 text-zinc-400"}`,
                        style: f ? {} : { background: "#252525" },
                        children: e.jsx(vn, { className: "w-3.5 h-3.5" }),
                      }),
                    e.jsxs("button", {
                      onClick: () => {
                        k &&
                          (S([
                            { x: 0, y: 0 },
                            { x: k.width, y: 0 },
                            { x: k.width, y: k.height },
                            { x: 0, y: k.height },
                          ]),
                          te(10));
                      },
                      className:
                        "flex items-center gap-1.5 text-zinc-400 active:text-white transition-colors",
                      children: [
                        e.jsx(zn, { className: "w-4 h-4" }),
                        e.jsx("span", {
                          className: "ds-display text-sm",
                          children: "Full",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex-1 min-h-0 bg-black overflow-visible p-2",
              children: e.jsx(Tn, {
                srcCanvas: k,
                corners: M,
                onChange: S,
                onHaptic: te,
              }),
            }),
            e.jsx("div", {
              className: "px-4 pt-3",
              style: {
                paddingBottom: "max(24px,env(safe-area-inset-bottom))",
                background: "#111111",
                borderTop: "1px solid #282828",
              },
              children: e.jsxs("button", {
                onClick: is,
                className:
                  "ds-btn-primary w-full flex items-center justify-center gap-2 py-4 text-base",
                children: [
                  e.jsx(nt, { className: "w-5 h-5" }),
                  me !== null ? "Confirm Replace" : `Add Page ${o.length + 1}`,
                ],
              }),
            }),
          ],
        }),
      ],
    });
  if (i === "ocr") {
    const { msg: n, sub: r, progress: a, done: d, total: g } = P;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs("div", {
          className:
            "ds-root flex flex-col items-center justify-center w-full px-6 gap-6",
          style: { minHeight: "calc(100dvh - 80px)" },
          children: [
            e.jsxs("div", {
              className: "relative w-14 h-14",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 border border-zinc-700 rounded-full",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 border border-transparent border-t-white rounded-full animate-spin",
                  style: { animationDuration: "0.85s" },
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-[4px] border border-transparent border-t-zinc-500 rounded-full animate-spin",
                  style: {
                    animationDuration: "0.5s",
                    animationDirection: "reverse",
                  },
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  children: e.jsx(It, {
                    className: "w-4.5 h-4.5 text-zinc-500",
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center w-full max-w-xs space-y-0.5",
              children: [
                e.jsx("p", {
                  className: "ds-display text-white font-bold text-base",
                  children: n || "Processing…",
                }),
                r &&
                  e.jsx("p", {
                    className: "ds-mono text-zinc-500 text-[11px]",
                    children: r,
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "w-full max-w-xs space-y-2",
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-between ds-mono text-[10px] text-zinc-500",
                  children: [
                    e.jsx("span", {
                      children:
                        P.status === "building"
                          ? "Building PDF"
                          : g > 0
                            ? `${d + 1}/${g} pages`
                            : "Processing",
                    }),
                    e.jsxs("span", { children: [a, "%"] }),
                  ],
                }),
                e.jsx("div", {
                  className: "h-[2px] rounded-full overflow-hidden",
                  style: { background: "#2e2e2e" },
                  children: e.jsx("div", {
                    className:
                      "h-full bg-white rounded-full transition-all duration-500",
                    style: { width: `${a}%` },
                  }),
                }),
              ],
            }),
            o.length > 0 &&
              e.jsx("div", {
                className: "w-full max-w-xs",
                children: e.jsx("div", {
                  className: "flex gap-1.5 justify-center flex-wrap",
                  children: o.map((I, D) => {
                    const Z = Bt === D,
                      J = Bt !== null ? D < Bt : !1;
                    return e.jsxs(
                      "div",
                      {
                        className: "relative flex-shrink-0",
                        style: { width: 32, height: 41 },
                        children: [
                          e.jsx("div", {
                            className: `w-full h-full rounded-lg overflow-hidden border transition-all duration-200 ${Z ? "border-white scale-110" : J ? "border-zinc-600 opacity-40" : "border-zinc-700 opacity-30"}`,
                            children: e.jsx("img", {
                              src: I.thumb,
                              alt: "",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          J &&
                            e.jsx("div", {
                              className:
                                "absolute -top-0.5 -right-0.5 w-3 h-3 bg-zinc-600 rounded-full flex items-center justify-center",
                              children: e.jsx(nt, {
                                className: "w-1.5 h-1.5 text-white",
                              }),
                            }),
                        ],
                      },
                      I.id,
                    );
                  }),
                }),
              }),
            e.jsx("button", {
              onClick: fs,
              className:
                "px-6 py-2.5 border border-zinc-700 rounded-xl ds-mono text-zinc-400 active:text-white text-xs transition-colors",
              style: { background: "#1c1c1c" },
              children: "Cancel",
            }),
          ],
        }),
      ],
    });
  }
  if (i === "done" && p)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(ze, {}),
        e.jsxs(Ws, {
          className:
            "ds-root w-full max-w-sm mx-auto px-4 pb-10 space-y-3 pt-1",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2.5",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 rounded-xl border border-zinc-700 flex items-center justify-center",
                      style: { background: "#1c1c1c" },
                      children: e.jsx(zs, { className: "w-4 h-4 text-white" }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className:
                            "ds-display text-white font-bold text-sm tracking-tight leading-none",
                          children: "Scan complete",
                        }),
                        e.jsxs("p", {
                          className: "ds-mono text-zinc-500 text-[10px] mt-0.5",
                          children: [p.filename, ".pdf"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: jn,
                  className:
                    "text-xs text-zinc-500 active:text-zinc-300 transition-colors",
                  style: { fontFamily: "inherit" },
                  children: "Start over",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-2",
              children: [
                { n: p.pages, l: "Pages" },
                { n: `${p.avgConf}%`, l: "Confidence" },
                { n: p.wordCount.toLocaleString(), l: "Words" },
              ].map(({ n, l: r }) =>
                e.jsxs(
                  "div",
                  {
                    className: "ds-card py-3.5 text-center",
                    children: [
                      e.jsx("p", {
                        className:
                          "ds-mono text-white text-xl font-medium tabular-nums leading-none",
                        children: n,
                      }),
                      e.jsx("p", {
                        className: "ds-mono text-zinc-500 text-[10px] mt-1",
                        children: r,
                      }),
                    ],
                  },
                  r,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "ds-card flex items-center gap-2.5 px-3.5 py-3",
              children: [
                e.jsx(Jt, {
                  className: "w-3.5 h-3.5 text-zinc-500 flex-shrink-0",
                }),
                e.jsxs("p", {
                  className: "text-xs text-zinc-400",
                  style: { fontFamily: "inherit" },
                  children: [
                    "Saved to history ·",
                    " ",
                    e.jsx("span", {
                      className: "text-zinc-200 ds-mono",
                      children: p.filename,
                    }),
                  ],
                }),
              ],
            }),
            p.avgConf < 65 &&
              e.jsxs("div", {
                className: "ds-card flex items-start gap-2.5 p-3.5",
                style: { borderColor: "#444" },
                children: [
                  e.jsx(Xt, {
                    className: "w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className:
                          "ds-display text-white text-sm font-semibold",
                        children: ["Low confidence (", p.avgConf, "%)"],
                      }),
                      e.jsx("p", {
                        className: "text-zinc-400 text-xs mt-0.5",
                        style: { fontFamily: "inherit" },
                        children:
                          "Try better lighting or select language manually.",
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "ds-card p-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs("button", {
                      onClick: gs,
                      className:
                        "ds-btn-primary flex-1 flex items-center justify-center gap-2 py-3.5 text-sm",
                      children: [
                        e.jsx(Is, { className: "w-4 h-4" }),
                        " Download PDF",
                      ],
                    }),
                    ie &&
                      e.jsx("button", {
                        onClick: ws,
                        disabled: Re,
                        className:
                          "ds-btn-ghost w-12 flex items-center justify-center rounded-2xl disabled:opacity-40",
                        children: Re
                          ? e.jsx("div", {
                              className:
                                "w-3.5 h-3.5 border border-zinc-600 border-t-white rounded-full animate-spin",
                            })
                          : e.jsx(Bs, { className: "w-4 h-4 text-zinc-300" }),
                      }),
                    e.jsx("button", {
                      "aria-label": "Capture photo",
                      onClick: () => {
                        (N(null), s("review"));
                      },
                      className:
                        "ds-btn-ghost w-12 flex items-center justify-center rounded-2xl",
                      children: e.jsx(tt, {
                        className: "w-4 h-4 text-zinc-300",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  style: { borderTop: "1px solid #2e2e2e", paddingTop: 12 },
                  children: [
                    e.jsx("input", {
                      ref: Ee,
                      type: "file",
                      accept: "application/pdf",
                      onChange: vs,
                      className: "hidden",
                    }),
                    e.jsxs("button", {
                      onClick: () => Ee.current?.click(),
                      disabled: ft,
                      className:
                        "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs text-zinc-400 active:text-zinc-200 transition-colors border border-zinc-700 disabled:opacity-40",
                      style: { background: "#181818", fontFamily: "inherit" },
                      children: [
                        e.jsx(Es, { className: "w-3.5 h-3.5" }),
                        ft ? "Merging…" : "Merge with existing PDF…",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "ds-card overflow-hidden",
              children: [
                e.jsxs("button", {
                  onClick: () => L((n) => !n),
                  className:
                    "w-full flex items-center justify-between px-4 py-3.5 active:bg-zinc-800/50 transition-colors",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        e.jsx(Cn, { className: "w-3.5 h-3.5 text-zinc-500" }),
                        e.jsx("span", {
                          className:
                            "ds-display text-white text-sm font-semibold",
                          children: "Extracted text",
                        }),
                        e.jsxs("span", {
                          className: "ds-mono text-zinc-500 text-[10px]",
                          children: [p.wordCount.toLocaleString(), "w"],
                        }),
                      ],
                    }),
                    e.jsx(Ds, {
                      className: `w-4 h-4 text-zinc-500 transition-transform duration-200 ${R ? "rotate-180" : ""}`,
                    }),
                  ],
                }),
                R &&
                  e.jsxs("div", {
                    style: { borderTop: "1px solid #2e2e2e" },
                    children: [
                      e.jsxs("div", {
                        className: "flex gap-2 px-3 py-2",
                        style: { borderBottom: "1px solid #222" },
                        children: [
                          e.jsxs("button", {
                            "aria-label": "Copy",
                            onClick: ys,
                            className:
                              "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-colors active:opacity-70 ds-btn-ghost",
                            children: [
                              q
                                ? e.jsx(nt, { className: "w-3 h-3" })
                                : e.jsx(Ss, {
                                    className: "w-3 h-3 text-zinc-400",
                                  }),
                              e.jsx("span", {
                                style: { fontFamily: "inherit" },
                                children: q ? "Copied" : "Copy",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: bs,
                            className:
                              "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-colors active:opacity-70 ds-btn-ghost",
                            children: [
                              e.jsx(Cn, { className: "w-3 h-3 text-zinc-400" }),
                              e.jsx("span", {
                                style: { fontFamily: "inherit" },
                                children: ".txt",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("textarea", {
                        readOnly: !0,
                        value: p.text,
                        spellCheck: !1,
                        className:
                          "w-full px-4 py-3 ds-mono text-zinc-400 text-xs leading-relaxed resize-y focus:outline-none",
                        style: {
                          background: "#141414",
                          minHeight: 140,
                          maxHeight: "40vh",
                        },
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  const de = v !== null ? o[v] : null;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(ze, {}),
      e.jsxs("div", {
        className:
          "ds-root flex flex-col w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto px-3",
        style: { height: "calc(100dvh - 56px - 1.5rem)", minHeight: 520 },
        children: [
          _n && e.jsx(Gs, { onDismiss: qn }),
          e.jsx("input", {
            ref: He,
            type: "file",
            accept: "image/*",
            multiple: !0,
            className: "hidden",
            onChange: Yt,
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between pb-2.5 flex-shrink-0",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [
                  e.jsx("h3", {
                    className:
                      "ds-display text-white font-bold text-sm tracking-tight",
                    children:
                      o.length > 0
                        ? `${o.length} page${o.length > 1 ? "s" : ""}`
                        : "No pages",
                  }),
                  u >= 0 &&
                    e.jsx("span", {
                      className:
                        "ds-mono text-zinc-500 text-[10px] animate-pulse",
                      children: "Reordering…",
                    }),
                ],
              }),
              e.jsx("div", {
                className: "flex items-center gap-3",
                children: e.jsx("button", {
                  onClick: jn,
                  className:
                    "text-xs text-zinc-500 active:text-zinc-300 transition-colors",
                  style: { fontFamily: "inherit" },
                  children: "Start over",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            ref: he,
            className: "flex-shrink-0 pb-2.5 overflow-x-auto",
            style: { touchAction: "pan-x" },
            children: [
              e.jsxs("div", {
                className: "flex gap-2 items-center min-w-min select-none",
                children: [
                  o.map((n, r) => {
                    const a = u === r,
                      d = se === r && u >= 0 && u !== r;
                    return e.jsxs(
                      "div",
                      {
                        "data-thumb-idx": r,
                        className: `relative flex-shrink-0 rounded-xl overflow-visible cursor-grab active:cursor-grabbing transition-all duration-150 ${a ? "opacity-25 scale-90" : ""}`,
                        style: { width: 48, height: 62 },
                        onPointerDown: (g) => us(g, r),
                        onPointerMove: hs,
                        onPointerUp: yn,
                        onPointerCancel: yn,
                        children: [
                          d &&
                            e.jsx("div", {
                              className:
                                "absolute -inset-0.5 rounded-xl border border-white/60 z-10 pointer-events-none",
                            }),
                          e.jsx("div", {
                            className: `w-full h-full rounded-xl overflow-hidden border-[1.5px] transition-all ${v === r ? "border-white" : "border-zinc-700"}`,
                            children: e.jsx("img", {
                              src: n.thumb,
                              alt: "",
                              className:
                                "w-full h-full object-cover pointer-events-none",
                              draggable: !1,
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute bottom-1 left-0 right-0 flex justify-center pointer-events-none",
                            children: e.jsx("span", {
                              className:
                                "ds-mono text-white text-[8px] font-medium px-1 rounded",
                              style: { background: "rgba(0,0,0,0.7)" },
                              children: r + 1,
                            }),
                          }),
                          Ve[n.id] !== void 0 &&
                            e.jsx("div", {
                              className:
                                "absolute top-1 left-1 w-1.5 h-1.5 rounded-full pointer-events-none border border-black/20",
                              style: {
                                background:
                                  Ve[n.id] >= 70
                                    ? "#22c55e"
                                    : Ve[n.id] >= 35
                                      ? "#f59e0b"
                                      : "#ef4444",
                              },
                            }),
                          e.jsx("button", {
                            "aria-label": "Close",
                            "data-action": "delete",
                            onClick: (g) => {
                              (g.stopPropagation(), kt(r));
                            },
                            className:
                              "absolute top-0.5 right-0.5 w-5 h-5 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20",
                            style: { background: "rgba(0,0,0,0.8)" },
                            children: e.jsx(pt, {
                              className: "w-2.5 h-2.5 text-white",
                            }),
                          }),
                        ],
                      },
                      n.id,
                    );
                  }),
                  e.jsxs("button", {
                    onClick: () => He.current?.click(),
                    disabled: Ze,
                    className:
                      "flex-shrink-0 rounded-xl border border-dashed border-zinc-700 flex flex-col items-center justify-center gap-0.5 text-zinc-500 active:text-zinc-300 transition-all disabled:opacity-40",
                    style: { width: 48, height: 62, background: "#181818" },
                    children: [
                      Ze
                        ? e.jsx("div", {
                            className:
                              "w-3.5 h-3.5 border border-zinc-700 border-t-zinc-300 rounded-full animate-spin",
                          })
                        : e.jsx(Rt, { className: "w-3.5 h-3.5" }),
                      e.jsx("span", {
                        className: "ds-mono text-[8px]",
                        children: Ze ? "…" : "IMG",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => Le(),
                    className:
                      "flex-shrink-0 rounded-xl border border-dashed border-zinc-700 flex flex-col items-center justify-center gap-0.5 text-zinc-500 active:text-zinc-400 transition-all",
                    style: { width: 48, height: 62, background: "#141414" },
                    children: [
                      e.jsx(Rs, { className: "w-3.5 h-3.5" }),
                      e.jsx("span", {
                        className: "ds-mono text-[8px]",
                        children: "ADD",
                      }),
                    ],
                  }),
                ],
              }),
              o.length > 1 &&
                u < 0 &&
                !U &&
                e.jsx("p", {
                  className: "ds-mono text-zinc-600 text-[9px] mt-1.5 pl-0.5",
                  children: "hold + drag to reorder · long-press for options",
                }),
            ],
          }),
          e.jsx("div", {
            ref: Q,
            className:
              "flex-1 min-h-0 flex items-center justify-center rounded-2xl overflow-hidden border border-zinc-700 relative select-none",
            style: {
              background: "#141414",
              touchAction: Oe > 1 ? "none" : "pan-y",
            },
            onPointerDown: cs,
            onPointerMove: os,
            onPointerUp: fn,
            onPointerCancel: fn,
            children: de
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("img", {
                      src: de.preview || de.thumb,
                      alt: `Page ${(v ?? 0) + 1}`,
                      draggable: !1,
                      className: "max-w-full max-h-full object-contain",
                      style: {
                        transform:
                          Oe > 1
                            ? `translate(${cn.x}px, ${cn.y}px) scale(${Oe})`
                            : void 0,
                        transition:
                          Oe === 1 ? "transform 0.2s ease-out" : "none",
                        willChange: Oe > 1 ? "transform" : void 0,
                      },
                    }),
                    e.jsx("div", {
                      className: "absolute top-2 right-2 flex gap-1.5",
                      children: [
                        { onClick: Ns, icon: rn ? nt : $s, active: rn },
                        { onClick: () => v !== null && $t(v), icon: Mn },
                        { onClick: () => v !== null && Ht(v), icon: Nn },
                        {
                          onClick: () => v !== null && kt(v),
                          icon: Zt,
                          danger: !0,
                        },
                      ].map(
                        ({ onClick: n, icon: r, active: a, danger: d }, g) =>
                          e.jsx(
                            "button",
                            {
                              onClick: n,
                              className: `w-8 h-8 flex items-center justify-center rounded-xl transition-all active:scale-90 ${a ? "text-white" : "text-zinc-300 active:text-white"}`,
                              style: {
                                background: "rgba(0,0,0,0.7)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              },
                              children: e.jsx(r, {
                                className: `w-3.5 h-3.5 ${d ? "active:text-red-400" : ""}`,
                              }),
                            },
                            g,
                          ),
                      ),
                    }),
                    e.jsx("div", {
                      className: "absolute bottom-2 left-2",
                      children: e.jsxs("span", {
                        className:
                          "ds-mono text-white/60 text-[10px] px-1.5 py-0.5 rounded-lg",
                        style: { background: "rgba(0,0,0,0.55)" },
                        children: [(v ?? 0) + 1, " / ", o.length],
                      }),
                    }),
                    Oe > 1.02 &&
                      e.jsxs("button", {
                        onClick: Ut,
                        className:
                          "absolute bottom-2 right-2 flex items-center gap-1.5 ds-mono text-white/80 text-[10px] px-2 py-1 rounded-lg active:scale-95 transition-transform",
                        style: {
                          background: "rgba(0,0,0,0.6)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                        },
                        children: [
                          Oe.toFixed(1),
                          "×",
                          e.jsx("span", {
                            className: "text-white/40",
                            children: "· reset",
                          }),
                        ],
                      }),
                    Ve[de.id] !== void 0 &&
                      Ve[de.id] < 35 &&
                      e.jsx("div", {
                        className: "absolute bottom-10 left-2 right-2",
                        children: e.jsxs("div", {
                          className:
                            "ds-card flex items-center gap-2.5 px-3 py-2.5",
                          style: {
                            backdropFilter: "blur(10px)",
                            borderColor: "#444",
                          },
                          children: [
                            e.jsx(Xt, {
                              className:
                                "w-3.5 h-3.5 text-zinc-400 flex-shrink-0",
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "ds-display text-white text-xs font-semibold leading-none",
                                  children: "Blurry page",
                                }),
                                e.jsxs("p", {
                                  className:
                                    "ds-mono text-zinc-500 text-[9px] mt-0.5",
                                  children: ["Score: ", Ve[de.id], "%"],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: () => v !== null && $t(v),
                              className:
                                "ds-btn-primary px-3 py-1.5 text-xs rounded-xl flex-shrink-0",
                              children: "Retake",
                            }),
                          ],
                        }),
                      }),
                    o.length > 1 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          (v ?? 0) > 0 &&
                            e.jsx("button", {
                              "aria-label": "Previous",
                              onClick: () => {
                                (E((n) => Math.max((n ?? 0) - 1, 0)), te(8));
                              },
                              className:
                                "absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-xl transition-all active:scale-90",
                              style: {
                                background: "rgba(0,0,0,0.6)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              },
                              children: e.jsx(Rn, {
                                className: "w-3.5 h-3.5 text-white/70",
                              }),
                            }),
                          (v ?? 0) < o.length - 1 &&
                            e.jsx("button", {
                              "aria-label": "Next",
                              onClick: () => {
                                (E((n) => Math.min((n ?? 0) + 1, o.length - 1)),
                                  te(8));
                              },
                              className:
                                "absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-xl transition-all active:scale-90",
                              style: {
                                background: "rgba(0,0,0,0.6)",
                                backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              },
                              children: e.jsx(Pn, {
                                className: "w-3.5 h-3.5 text-white/70",
                              }),
                            }),
                        ],
                      }),
                  ],
                })
              : e.jsxs("div", {
                  className: "flex flex-col items-center gap-3 p-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-2xl border border-zinc-700 flex items-center justify-center",
                      style: { background: "#1c1c1c" },
                      children: e.jsx(tt, {
                        className: "w-5 h-5 text-zinc-500",
                      }),
                    }),
                    e.jsx("p", {
                      className: "ds-mono text-zinc-500 text-xs text-center",
                      children:
                        o.length === 0
                          ? "Scan a document or import from gallery"
                          : "Select a page above",
                    }),
                    o.length === 0 &&
                      e.jsxs("div", {
                        className: "flex flex-col gap-2 w-full max-w-[180px]",
                        children: [
                          e.jsxs("button", {
                            onClick: () => Le(),
                            className:
                              "ds-btn-primary flex items-center justify-center gap-2 py-2.5 text-sm",
                            children: [
                              e.jsx(tt, { className: "w-4 h-4" }),
                              " Open Camera",
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: () => He.current?.click(),
                            disabled: Ze,
                            className:
                              "ds-btn-ghost flex items-center justify-center gap-2 py-2.5 text-sm disabled:opacity-40",
                            children: [
                              e.jsx(Rt, { className: "w-4 h-4 text-zinc-400" }),
                              " Import",
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
          }),
          de &&
            v !== null &&
            e.jsxs("div", {
              className: "flex-shrink-0 mt-2 space-y-2",
              children: [
                e.jsxs("div", {
                  className: "flex items-end gap-2",
                  children: [
                    e.jsx("div", {
                      className: "flex-1 overflow-x-auto pb-1 min-w-0",
                      style: { scrollbarWidth: "none" },
                      children: e.jsx("div", {
                        className: "flex gap-2 min-w-min",
                        children: Fe.map((n) => {
                          const r = de.filterId === n.id;
                          return e.jsxs(
                            "button",
                            {
                              onClick: () => _t(v, n.id),
                              className:
                                "flex-shrink-0 flex flex-col items-center gap-1 group",
                              children: [
                                e.jsxs("div", {
                                  className: `relative rounded-xl overflow-hidden transition-all duration-150 ${r ? "ring-[1.5px] ring-white ring-offset-1 ring-offset-black" : "ring-1 ring-zinc-700"}`,
                                  style: { width: 46, height: 60 },
                                  children: [
                                    e.jsx("img", {
                                      src: de.filterThumb || de.thumb,
                                      alt: n.label,
                                      className: "w-full h-full object-cover",
                                      style: { filter: Ys(n.enhance) },
                                    }),
                                    r &&
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 flex items-center justify-center",
                                        style: {
                                          background: "rgba(0,0,0,0.3)",
                                        },
                                        children: e.jsx("div", {
                                          className:
                                            "w-4 h-4 rounded-full bg-white flex items-center justify-center",
                                          children: e.jsx(nt, {
                                            className: "w-2.5 h-2.5 text-black",
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: `ds-mono text-[9px] font-medium transition-colors ${r ? "text-white" : "text-zinc-500 group-active:text-zinc-300"}`,
                                  children: n.label,
                                }),
                              ],
                            },
                            n.id,
                          );
                        }),
                      }),
                    }),
                    o.length > 1 &&
                      e.jsx("div", {
                        className: "flex-shrink-0 pb-1 self-center",
                        children: e.jsxs("button", {
                          onClick: () => de && xs(de.filterId),
                          disabled: de.filterId === "original",
                          className:
                            "flex flex-col items-center gap-1 group disabled:opacity-25 disabled:cursor-not-allowed",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-9 h-9 rounded-xl border border-zinc-700 flex items-center justify-center transition-colors group-active:border-zinc-500",
                              style: { background: "#1c1c1c" },
                              children: e.jsx(Tt, {
                                className:
                                  "w-3.5 h-3.5 text-zinc-500 group-active:text-zinc-300",
                              }),
                            }),
                            e.jsx("span", {
                              className:
                                "ds-mono text-[9px] text-zinc-600 whitespace-nowrap",
                              children: "All",
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                de.filterId !== "original" &&
                  e.jsxs("div", {
                    className: "ds-card px-3.5 py-3 space-y-2.5",
                    style: { transition: "all 0.2s" },
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsx("span", {
                            className:
                              "ds-mono text-zinc-500 text-[10px] uppercase tracking-wider",
                            children: "Fine-tune",
                          }),
                          e.jsx("button", {
                            onClick: () => _t(v, de.filterId),
                            className:
                              "ds-mono text-zinc-500 active:text-zinc-300 text-[10px] transition-colors",
                            children: "Reset",
                          }),
                        ],
                      }),
                      ["brightness", "contrast"].map((n) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "ds-mono text-zinc-500 text-[10px] capitalize w-14 flex-shrink-0",
                                children: n,
                              }),
                              e.jsx("input", {
                                type: "range",
                                min: 50,
                                max: 200,
                                step: 5,
                                value: de.enhance[n],
                                onChange: (r) =>
                                  ds(v, { [n]: Number(r.target.value) }),
                                className: "flex-1",
                              }),
                              e.jsx("span", {
                                className:
                                  "ds-mono text-zinc-500 text-[10px] w-8 text-right flex-shrink-0",
                                children: de.enhance[n],
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
          e.jsxs("div", {
            className: "flex-shrink-0 mt-2 space-y-2",
            children: [
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsxs("div", {
                    className: "relative flex-1",
                    children: [
                      e.jsx(Ps, {
                        className:
                          "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-500 pointer-events-none",
                      }),
                      e.jsx("select", {
                        value: ne,
                        onChange: (n) => F(n.target.value),
                        className:
                          "w-full rounded-xl py-2.5 pl-8 pr-3 ds-mono text-zinc-300 text-[11px] focus:outline-none border border-zinc-700 appearance-none",
                        style: { background: "#1c1c1c" },
                        children: Wt.map((n) =>
                          e.jsx(
                            "option",
                            { value: n.code, children: n.label },
                            n.code,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "relative flex-shrink-0",
                    children: [
                      e.jsx(Bn, {
                        className:
                          "absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-zinc-500 pointer-events-none",
                      }),
                      e.jsx("select", {
                        value: oe,
                        onChange: (n) => $(n.target.value),
                        className:
                          "rounded-xl py-2.5 pl-8 pr-3 ds-mono text-zinc-300 text-[11px] focus:outline-none border border-zinc-700 appearance-none",
                        style: { background: "#1c1c1c", minWidth: 88 },
                        children: $n.map((n) =>
                          e.jsx(
                            "option",
                            { value: n.id, children: n.label },
                            n.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex rounded-xl overflow-hidden border border-zinc-700",
                style: { background: "#181818" },
                children: [
                  e.jsxs("button", {
                    onClick: () => ln(!1),
                    className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 ds-mono text-[11px] font-medium transition-colors ${at ? "text-zinc-500 active:text-zinc-300" : "bg-zinc-700 text-white"}`,
                    children: [
                      e.jsx(It, { className: "w-3.5 h-3.5" }),
                      " Searchable PDF",
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => ln(!0),
                    className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 ds-mono text-[11px] font-medium transition-colors ${at ? "bg-zinc-700 text-white" : "text-zinc-500 active:text-zinc-300"}`,
                    children: [
                      e.jsx(In, { className: "w-3.5 h-3.5" }),
                      " Image only",
                    ],
                  }),
                ],
              }),
              e.jsxs("button", {
                onClick: at ? ms : ps,
                disabled: o.length === 0,
                className:
                  "ds-btn-primary w-full flex items-center justify-center gap-2.5 py-4 text-sm disabled:opacity-25 disabled:cursor-not-allowed",
                children: [
                  at
                    ? e.jsx(In, { className: "w-4 h-4" })
                    : e.jsx(It, { className: "w-4 h-4" }),
                  at ? "Save as PDF" : "Scan & Extract Text",
                  e.jsxs("span", {
                    className: "ds-mono text-zinc-500 text-[10px] font-normal",
                    children: ["(", o.length, "p)"],
                  }),
                ],
              }),
            ],
          }),
          U !== null &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", {
                  className: "fixed inset-0 z-[80]",
                  onPointerDown: (n) => {
                    (n.stopPropagation(), Qe());
                  },
                }),
                e.jsx("div", {
                  className: "fixed z-[90] ds-fade-up",
                  style: {
                    left: Math.min(U.x, window.innerWidth - 164),
                    top: Math.min(U.y, window.innerHeight - 180),
                    width: 156,
                  },
                  children: e.jsxs("div", {
                    className: "rounded-2xl overflow-hidden shadow-2xl",
                    style: { background: "#222", border: "1px solid #3a3a3a" },
                    children: [
                      e.jsx("div", {
                        className: "px-3 py-2",
                        style: { borderBottom: "1px solid #2e2e2e" },
                        children: e.jsxs("p", {
                          className:
                            "ds-mono text-zinc-500 text-[10px] uppercase tracking-wider",
                          children: ["Page ", U.idx + 1],
                        }),
                      }),
                      [
                        {
                          label: "Replace",
                          icon: Mn,
                          onClick: () => {
                            const n = U.idx;
                            (Qe(), $t(n));
                          },
                        },
                        {
                          label: "Rotate 90°",
                          icon: Nn,
                          onClick: () => {
                            const n = U.idx;
                            (Qe(), Ht(n), te(10));
                          },
                        },
                        ...(U.idx > 0
                          ? [
                              {
                                label: "Move left",
                                icon: Rn,
                                onClick: () => {
                                  const n = U.idx;
                                  (Qe(),
                                    z((r) => {
                                      const a = [...r];
                                      return (
                                        ([a[n - 1], a[n]] = [a[n], a[n - 1]]),
                                        a
                                      );
                                    }),
                                    E(n - 1),
                                    te(10));
                                },
                              },
                            ]
                          : []),
                        ...(U.idx < o.length - 1
                          ? [
                              {
                                label: "Move right",
                                icon: Pn,
                                onClick: () => {
                                  const n = U.idx;
                                  (Qe(),
                                    z((r) => {
                                      const a = [...r];
                                      return (
                                        ([a[n], a[n + 1]] = [a[n + 1], a[n]]),
                                        a
                                      );
                                    }),
                                    E(n + 1),
                                    te(10));
                                },
                              },
                            ]
                          : []),
                        {
                          label: "Delete",
                          icon: Zt,
                          onClick: () => {
                            const n = U.idx;
                            (Qe(), kt(n), te([8, 60, 8]));
                          },
                          danger: !0,
                        },
                      ].map(({ label: n, icon: r, onClick: a, danger: d }) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: a,
                            className: `w-full flex items-center gap-3 px-3 py-3 text-sm font-medium transition-colors active:bg-zinc-800 ${d ? "text-red-500" : "text-zinc-200"}`,
                            style: {
                              borderTop: "1px solid #2e2e2e",
                              fontFamily: "inherit",
                            },
                            children: [
                              e.jsx(r, {
                                className:
                                  "w-3.5 h-3.5 flex-shrink-0 text-zinc-500",
                              }),
                              " ",
                              n,
                            ],
                          },
                          n,
                        ),
                      ),
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
export { jr as default };
