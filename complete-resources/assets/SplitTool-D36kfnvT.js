import { r as h, j as e } from "./react-vendor-Bc7KCos-.js";
const O = "ihatepdf-store",
  Pe = "ihatepdf_DB",
  oe = "ihatepdf_history",
  le = 50,
  pe = (a) =>
    new Promise((s, l) => {
      const d = new FileReader();
      ((d.onload = () => s(d.result)), (d.onerror = l), d.readAsArrayBuffer(a));
    }),
  Ce = () =>
    new Promise((a, s) => {
      const l = indexedDB.open(Pe, 1);
      ((l.onupgradeneeded = (d) => {
        const n = d.target.result;
        n.objectStoreNames.contains(O) || n.createObjectStore(O);
      }),
        (l.onsuccess = () => a(l.result)),
        (l.onerror = () => s(l.error)));
    }),
  Re = async (a, s) => {
    const l = await Ce();
    return new Promise((d, n) => {
      const o = l.transaction(O, "readwrite");
      (o.objectStore(O).put(s, a),
        (o.oncomplete = () => d()),
        (o.onerror = () => n(o.error)));
    });
  },
  G = async (a) => {
    const s = JSON.parse(localStorage.getItem(oe) || "[]"),
      l = {
        id: Date.now(),
        name: a.name,
        tool: a.tool,
        timestamp: Date.now(),
        size: a.size,
      };
    if (a.bytes)
      try {
        await Re(`pdf_${l.id}`, a.bytes);
      } catch (d) {
        console.error("Failed to store PDF:", d);
      }
    (s.unshift(l), localStorage.setItem(oe, JSON.stringify(s.slice(0, 50))));
  },
  K = (a, s, l) => {
    try {
      if (typeof window.download == "function")
        return (window.download(a, s, l), !0);
    } catch {}
    try {
      const d = new Blob([a], { type: l });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(d, s), !0);
      const n = URL.createObjectURL(d),
        o = document.createElement("a");
      return (
        (o.href = n),
        (o.download = s),
        o.setAttribute("download", s),
        (o.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(o),
        o.click(),
        setTimeout(() => {
          (document.body.removeChild(o), URL.revokeObjectURL(n));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const n = new Blob([a], { type: l }),
          o = URL.createObjectURL(n);
        return (
          window.open(o, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${s}`),
          setTimeout(() => URL.revokeObjectURL(o), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${s}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  De = () => {
    if (typeof window > "u") return !1;
    const a = window.navigator.userAgent;
    return (
      (!!a.match(/iPad/i) || !!a.match(/iPhone/i)) &&
      !!a.match(/WebKit/i) &&
      !a.match(/CriOS/i)
    );
  },
  Fe = (a, s) => {
    if (!a.trim()) return { valid: [], errors: [] };
    const l = a
        .split(/[,\n]+/)
        .map((o) => o.trim())
        .filter(Boolean),
      d = [],
      n = [];
    for (const o of l) {
      const g = o.match(/^(\d+)\s*[-\u2013\u2014]+\s*(\d+)$/),
        L = o.match(/^(\d+)$/);
      if (g) {
        const u = parseInt(g[1], 10),
          v = parseInt(g[2], 10);
        u < 1
          ? n.push({ part: o, msg: "Page numbers start at 1" })
          : u > v
            ? n.push({ part: o, msg: `Start (${u}) must be ≤ end (${v})` })
            : v > s
              ? n.push({
                  part: o,
                  msg: `Page ${v} exceeds document (${s} pages)`,
                })
              : d.push([u, v]);
      } else if (L) {
        const u = parseInt(L[1], 10);
        u < 1
          ? n.push({ part: o, msg: "Page numbers start at 1" })
          : u > s
            ? n.push({
                part: o,
                msg: `Page ${u} exceeds document (${s} pages)`,
              })
            : d.push([u, u]);
      } else n.push({ part: o, msg: `"${o}" — use 1-20 or a single number` });
    }
    return { valid: d, errors: n };
  },
  We = (a) => {
    const s = [...a].sort((o, g) => o - g);
    if (!s.length) return [];
    const l = [];
    let d = s[0],
      n = s[0];
    for (let o = 1; o < s.length; o++)
      (s[o] === n + 1 || (l.push([d, n]), (d = s[o])), (n = s[o]));
    return (l.push([d, n]), l);
  },
  J = (a = 0) => new Promise((s) => setTimeout(s, a)),
  de = () =>
    De()
      ? e.jsx("div", {
          style: {
            margin: "10px 16px 0",
            padding: "11px 14px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 14,
          },
          children: e.jsxs("p", {
            style: { fontSize: 12, color: "rgba(255,255,255,0.35)", margin: 0 },
            children: [
              "📱",
              " ",
              e.jsx("span", {
                style: { color: "rgba(255,255,255,0.55)", fontWeight: 600 },
                children: "iOS:",
              }),
              " ",
              "Files save to Files app → Downloads",
            ],
          }),
        })
      : null,
  S = ({ children: a, size: s = 16 }) =>
    e.jsx("svg", {
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a,
    }),
  ce = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("circle", { cx: "6", cy: "6", r: "3" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("line", { x1: "20", y1: "4", x2: "8.12", y2: "15.88" }),
        e.jsx("line", { x1: "14.47", y1: "14.48", x2: "20", y2: "20" }),
        e.jsx("line", { x1: "8.12", y1: "8.12", x2: "12", y2: "12" }),
      ],
    }),
  Ie = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.2" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1.2" }),
        e.jsx("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1.2" }),
        e.jsx("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1.2" }),
      ],
    }),
  ge = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
        e.jsx("polyline", { points: "2 17 12 22 22 17" }),
        e.jsx("polyline", { points: "2 12 12 17 22 12" }),
      ],
    }),
  Le = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      ],
    }),
  xe = ({ size: a = 12 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Me = ({ size: a = 16 }) =>
    e.jsx(S, {
      size: a,
      children: e.jsx("polyline", { points: "15 18 9 12 15 6" }),
    }),
  be = ({ size: a = 12 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  he = ({ size: a = 12 }) =>
    e.jsx(S, {
      size: a,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  fe = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("path", { d: "M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3" }),
        e.jsx("path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "21" }),
        e.jsx("polyline", { points: "9 9 12 6 15 9" }),
        e.jsx("polyline", { points: "9 15 12 18 15 15" }),
      ],
    }),
  me = ({ size: a = 16 }) =>
    e.jsxs(S, {
      size: a,
      children: [
        e.jsx("path", {
          d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  Te = ({ pageCount: a, onConfirm: s, onCancel: l }) =>
    e.jsx("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      },
      children: e.jsxs("div", {
        style: {
          width: "100%",
          maxWidth: 380,
          background: "#161616",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          padding: "24px 22px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        },
        children: [
          e.jsxs("div", {
            style: { display: "flex", gap: 12, alignItems: "flex-start" },
            children: [
              e.jsx("div", {
                style: {
                  width: 40,
                  height: 40,
                  minWidth: 40,
                  borderRadius: 12,
                  background: "rgba(251,191,36,0.12)",
                  border: "1px solid rgba(251,191,36,0.25)",
                  color: "#fbbf24",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: e.jsx(me, { size: 18 }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    style: {
                      fontSize: 15,
                      fontWeight: 700,
                      margin: "0 0 5px",
                      letterSpacing: "-0.02em",
                    },
                    children: "Large document detected",
                  }),
                  e.jsxs("p", {
                    style: {
                      fontSize: 13,
                      color: "rgba(255,255,255,0.38)",
                      margin: 0,
                      lineHeight: 1.6,
                    },
                    children: [
                      "Splitting all",
                      " ",
                      e.jsxs("span", {
                        style: {
                          color: "rgba(255,255,255,0.7)",
                          fontWeight: 600,
                        },
                        children: [a, " pages"],
                      }),
                      " ",
                      "into separate files may take a while and can strain your browser.",
                      e.jsx("br", {}),
                      e.jsx("br", {}),
                      "Consider using",
                      " ",
                      e.jsx("span", {
                        style: { color: "#60a5fa", fontWeight: 600 },
                        children: "Type Ranges",
                      }),
                      " ",
                      "to split into chunks (e.g.",
                      " ",
                      e.jsx("code", {
                        style: {
                          background: "rgba(255,255,255,0.07)",
                          padding: "1px 5px",
                          borderRadius: 5,
                          fontSize: 11.5,
                        },
                        children: "1-50, 51-100",
                      }),
                      ") for better reliability.",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            style: { display: "flex", gap: 8 },
            children: [
              e.jsx("button", {
                onClick: l,
                style: {
                  flex: 1,
                  padding: "12px 10px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 13.5,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  cursor: "pointer",
                },
                children: "Cancel",
              }),
              e.jsx("button", {
                onClick: s,
                style: {
                  flex: 1,
                  padding: "12px 10px",
                  borderRadius: 12,
                  border: "none",
                  background: "rgba(251,191,36,0.15)",
                  color: "#fbbf24",
                  fontSize: 13.5,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  cursor: "pointer",
                },
                children: "Continue anyway",
              }),
            ],
          }),
        ],
      }),
    }),
  ue = `
  .sr *, .sr *::before, .sr *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  .sr {
    font-family: inherit;
    background: #0a0a0a;
    color: #efefef;
    min-height: 100vh;
    min-height: 100dvh;
    overflow-x: hidden;
  }

  .upload-screen {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    min-height: 100dvh;
    padding: 32px 20px env(safe-area-inset-bottom, 20px);
  }
  .upload-inner { width: 100%; max-width: 456px; }
  .upload-heading { font-size: 42px; font-weight: 800; letter-spacing: -0.04em; margin: 0 0 10px; line-height: 1.05; }
  .upload-sub { font-size: 14.5px; color: rgba(255,255,255,0.32); margin: 0; line-height: 1.6; }

  .upload-zone {
    border-radius: 26px;
    border: 1.5px dashed rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.022);
    cursor: pointer;
    text-align: center;
    padding: 52px 28px;
    transition: border-color .2s, background .2s, transform .2s;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }
  .upload-zone:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); }
  .upload-zone:active { transform: scale(0.99); }
  .upload-zone.drag { border-color: #3b82f6; background: rgba(59,130,246,0.07); transform: scale(1.01); }

  .topbar {
    position: sticky; top: 0; z-index: 30;
    backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
    background: rgba(10,10,10,0.88);
    border-bottom: 1px solid rgba(255,255,255,0.055);
  }
  .topbar-inner {
    max-width: 600px; margin: 0 auto;
    display: flex; align-items: center; gap: 10px;
    padding: 11px max(16px,env(safe-area-inset-right)) 11px max(16px,env(safe-area-inset-left));
  }
  .back-btn {
    width: 36px; height: 36px; min-width: 36px; border-radius: 50%;
    border: none; cursor: pointer;
    background: rgba(255,255,255,0.08); color: #efefef; font-family: inherit;
    display: flex; align-items: center; justify-content: center;
    transition: background .15s, transform .1s;
    flex-shrink: 0; touch-action: manipulation;
  }
  .back-btn:hover  { background: rgba(255,255,255,0.13); }
  .back-btn:active { transform: scale(0.91); }

  .topbar-filename {
    font-size: 13.5px; font-weight: 700; color: white; margin: 0;
    letter-spacing: -0.015em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .topbar-meta { font-size: 11.5px; color: rgba(255,255,255,0.28); margin: 0; }
  .topbar-badge {
    font-size: 12px; color: rgba(255,255,255,0.28);
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px; padding: 3px 9px; flex-shrink: 0; font-weight: 600; white-space: nowrap;
  }

  .content-wrap {
    max-width: 600px; margin: 0 auto;
    padding: 14px max(16px,env(safe-area-inset-right)) 0 max(16px,env(safe-area-inset-left));
    display: flex; flex-direction: column; gap: 12px;
  }

  .seg-wrap {
    display: flex; gap: 4px; padding: 5px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 18px;
  }
  .seg-btn {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 5px;
    padding: 9px 6px; border-radius: 13px; border: none; outline: none;
    font-family: inherit; font-size: 12.5px; font-weight: 600;
    cursor: pointer; transition: all .17s ease;
    overflow: hidden; touch-action: manipulation; min-height: 44px;
  }
  .seg-btn.on  { background: white; color: #0a0a0a; box-shadow: 0 2px 10px rgba(0,0,0,0.3); }
  .seg-btn.off { background: transparent; color: rgba(255,255,255,0.32); }
  .seg-btn.off:hover  { color: rgba(255,255,255,0.6); }
  .seg-btn.off:active { color: rgba(255,255,255,0.75); }
  .seg-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 22px; overflow: hidden; }
  .card-header {
    padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: space-between; gap: 8px;
  }
  .card-title { font-size: 13.5px; font-weight: 700; margin: 0; letter-spacing: -0.01em; }
  .card-sub   { font-size: 11.5px; color: rgba(255,255,255,0.28); margin: 2px 0 0; }

  .range-field {
    width: 100%; padding: 13px 14px;
    background: rgba(255,255,255,0.04); border: 1.5px solid rgba(255,255,255,0.09);
    border-radius: 14px; color: #efefef; font-family: inherit;
    font-size: 16px; font-weight: 500; line-height: 1.65; resize: none; outline: none;
    transition: border-color .17s, background .17s; letter-spacing: 0.005em;
    -webkit-appearance: none; appearance: none;
  }
  .range-field::placeholder { color: rgba(255,255,255,0.2); font-weight: 400; }
  .range-field:focus { border-color: rgba(59,130,246,0.55); background: rgba(59,130,246,0.035); }
  .range-field.err { border-color: rgba(239,68,68,0.45); }
  .range-field.ok  { border-color: rgba(34,197,94,0.4); }

  .parsed-pill {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 6px 9px 6px 11px; border-radius: 100px;
    background: rgba(59,130,246,0.11); border: 1px solid rgba(59,130,246,0.22);
  }
  .pill-x {
    width: 20px; height: 20px; border-radius: 50%; border: none; cursor: pointer; padding: 0;
    background: rgba(255,255,255,0.09); color: rgba(255,255,255,0.45); font-family: inherit;
    display: flex; align-items: center; justify-content: center; transition: all .12s;
    touch-action: manipulation; flex-shrink: 0;
  }
  .pill-x:hover  { background: rgba(239,68,68,0.3); color: white; }
  .pill-x:active { background: rgba(239,68,68,0.5); color: white; }

  .err-chip {
    display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px;
    border-radius: 100px; font-size: 11.5px; font-weight: 500;
    background: rgba(239,68,68,0.09); border: 1px solid rgba(239,68,68,0.22); color: #f87171;
  }

  .quick-btns-row {
    display: flex; gap: 6px;
    overflow-x: auto; -webkit-overflow-scrolling: touch;
    scrollbar-width: none; padding-bottom: 3px;
  }
  .quick-btns-row::-webkit-scrollbar { display: none; }

  .quick-btn {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 7px 11px; border-radius: 9px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.42);
    font-size: 12px; font-weight: 600; font-family: inherit; cursor: pointer;
    transition: all .13s; white-space: nowrap; flex-shrink: 0;
    touch-action: manipulation; min-height: 34px;
  }
  .quick-btn:hover  { background: rgba(255,255,255,0.09); color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.14); }
  .quick-btn:active { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); }

  .hint-box { padding: 11px 14px; border-radius: 13px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.05); }

  .warn-box {
    padding: 11px 14px; border-radius: 13px;
    background: rgba(251,191,36,0.06); border: 1px solid rgba(251,191,36,0.18);
    display: flex; align-items: flex-start; gap: 9px;
  }

  .page-grid {
    padding: 10px; max-height: 280px; overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: grid; gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
    scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent;
  }
  .page-grid::-webkit-scrollbar { width: 3px; }
  .page-grid::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

  .pg {
    aspect-ratio: 3/4; border-radius: 9px; border: none; cursor: pointer; font-family: inherit;
    display: flex; align-items: center; justify-content: center;
    transition: transform .1s, background .1s, box-shadow .12s;
    user-select: none; -webkit-user-select: none; touch-action: manipulation;
  }
  .pg:active { transform: scale(0.82); }
  .pg.sel {
    background: linear-gradient(145deg, #3b82f6, #1d4ed8);
    border: 1px solid rgba(96,165,250,0.4); box-shadow: 0 3px 10px rgba(59,130,246,0.28);
  }
  .pg.unsel { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.05); }
  .pg.unsel:hover  { background: rgba(255,255,255,0.09); }
  .pg.unsel:active { background: rgba(255,255,255,0.13); }

  .action-wrap {
    position: sticky; bottom: 0; z-index: 20;
    margin: 0 calc(-1 * max(16px,env(safe-area-inset-left)));
    padding: 12px max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));
    backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
    background: rgba(10,10,10,0.9); border-top: 1px solid rgba(255,255,255,0.06);
  }

  .split-btn {
    width: 100%; padding: 16px 12px; border-radius: 15px; border: none; outline: none; cursor: pointer;
    font-size: 15px; font-weight: 700; font-family: inherit; letter-spacing: -0.01em;
    display: flex; align-items: center; justify-content: center; gap: 7px;
    transition: all .14s ease; touch-action: manipulation; min-height: 52px;
  }
  .split-btn:active:not(:disabled) { transform: scale(0.97); }
  .split-btn:disabled { cursor: not-allowed; }

  .progress-wrap { display: flex; flex-direction: column; gap: 10px; }
  .progress-row  { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .progress-label {
    font-size: 13px; color: rgba(255,255,255,0.38);
    display: flex; align-items: center; gap: 7px; min-width: 0; overflow: hidden;
  }
  .progress-label-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .progress-pct { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5); flex-shrink: 0; }
  .progress-track { height: 3px; border-radius: 100px; background: rgba(255,255,255,0.08); overflow: hidden; }
  .progress-fill  { height: 100%; border-radius: 100px; background: linear-gradient(90deg,#60a5fa,#3b82f6); transition: width .4s cubic-bezier(.4,0,.2,1); }

  .link-btn {
    background: none; border: none; cursor: pointer; font-family: inherit;
    padding: 4px 2px; transition: opacity .14s;
    touch-action: manipulation; flex-shrink: 0;
  }
  .link-btn:hover  { opacity: 0.7; }
  .link-btn:active { opacity: 0.5; }

  .merge-toggle-wrap {
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
    padding: 13px 14px; border-radius: 16px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    cursor: pointer; transition: background .15s, border-color .15s;
    user-select: none; -webkit-user-select: none;
    touch-action: manipulation; min-height: 60px;
  }
  .merge-toggle-wrap:hover  { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.11); }
  .merge-toggle-wrap:active { background: rgba(255,255,255,0.07); }
  .merge-toggle-wrap.active { background: rgba(59,130,246,0.07); border-color: rgba(59,130,246,0.28); }
  .merge-toggle-wrap.active:hover { background: rgba(59,130,246,0.1); }

  .merge-icon-box {
    width: 34px; height: 34px; min-width: 34px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    transition: all .18s; flex-shrink: 0;
  }
  .merge-label { font-size: 13px; font-weight: 700; margin: 0; letter-spacing: -0.01em; }
  .merge-desc  { font-size: 11.5px; margin: 2px 0 0; line-height: 1.4; }

  .toggle-pill {
    position: relative; width: 40px; height: 24px; min-width: 40px;
    border-radius: 100px; flex-shrink: 0; transition: background .2s; cursor: pointer;
  }
  .toggle-pill.on  { background: #3b82f6; }
  .toggle-pill.off { background: rgba(255,255,255,0.12); }
  .toggle-knob {
    position: absolute; top: 4px; width: 16px; height: 16px; border-radius: 50%;
    background: white; transition: left .2s cubic-bezier(.4,0,.2,1);
    box-shadow: 0 1px 4px rgba(0,0,0,0.35);
  }
  .toggle-knob.on  { left: 20px; }
  .toggle-knob.off { left: 4px; }

  .export-summary { padding: 11px 14px 13px; border-top: 1px solid rgba(255,255,255,0.05); }
  .export-header  { display: flex; align-items: center; justify-content: space-between; margin-bottom: 9px; gap: 8px; }
  .export-count { font-size: 11.5px; font-weight: 600; color: rgba(255,255,255,0.35); margin: 0; text-transform: uppercase; letter-spacing: 0.04em; }
  .export-pages { font-size: 11.5px; color: rgba(255,255,255,0.22); margin: 0; flex-shrink: 0; }
  .pills-wrap   { display: flex; flex-wrap: wrap; gap: 6px; }

  .all-card { padding: 36px 20px; text-align: center; }
  .all-num   { font-size: 36px; font-weight: 800; letter-spacing: -0.04em; margin: 0 0 5px; }
  .all-label { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.38); margin: 0 0 7px; }
  .all-desc  { font-size: 13px; color: rgba(255,255,255,0.2); line-height: 1.65; margin: 0; }

  .empty-hint {
    padding: 22px 16px; text-align: center;
    border: 1.5px dashed rgba(255,255,255,0.06); border-radius: 16px;
  }

  .page-grid-footer { padding: 8px 14px 10px; border-top: 1px solid rgba(255,255,255,0.04); }
  .page-grid-hint   { font-size: 11px; color: rgba(255,255,255,0.2); margin: 0; }
  .selected-badge {
    font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 100px;
    background: rgba(59,130,246,0.14); color: #60a5fa; white-space: nowrap;
  }
  .icon-sq {
    display: flex; align-items: center; justify-content: center;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 15px;
  }

  @keyframes fi { from { opacity:0; transform:translateY(5px) } to { opacity:1; transform:translateY(0) } }
  .fi { animation: fi .18s ease forwards; }

  @keyframes sp { to { transform:rotate(360deg); } }
  .spin {
    display: inline-block; width: 14px; height: 14px;
    border: 2px solid rgba(255,255,255,0.14); border-top-color: rgba(255,255,255,0.65);
    border-radius: 50%; animation: sp .65s linear infinite; flex-shrink: 0;
  }

  @media (max-width: 430px) {
    .upload-screen   { padding: 24px 16px env(safe-area-inset-bottom, 16px); }
    .upload-heading  { font-size: 34px; }
    .upload-sub      { font-size: 13.5px; }
    .upload-zone     { padding: 36px 18px; border-radius: 20px; }
    .content-wrap    { padding: 12px max(14px,env(safe-area-inset-right)) 0 max(14px,env(safe-area-inset-left)); gap: 10px; }
    .seg-btn         { font-size: 11.5px; padding: 8px 4px; gap: 4px; min-height: 42px; }
    .card            { border-radius: 18px; }
    .card-header     { padding: 11px 13px; }
    .card-title      { font-size: 13px; }
    .card-sub        { font-size: 11px; }
    .range-field     { padding: 12px 13px; }
    .page-grid       { max-height: 252px; padding: 9px; gap: 4px; grid-template-columns: repeat(auto-fill, minmax(42px, 1fr)); }
    .merge-toggle-wrap { padding: 11px 13px; border-radius: 14px; gap: 10px; min-height: 56px; }
    .merge-icon-box  { width: 32px; height: 32px; min-width: 32px; }
    .merge-label     { font-size: 12.5px; }
    .merge-desc      { font-size: 11px; }
    .split-btn       { font-size: 14px; padding: 15px 10px; min-height: 50px; }
    .action-wrap     { margin: 0 calc(-1 * max(14px,env(safe-area-inset-left))); padding-left: max(14px,env(safe-area-inset-left)); padding-right: max(14px,env(safe-area-inset-right)); }
    .all-card        { padding: 28px 16px; }
    .all-num         { font-size: 32px; }
    .hint-box        { padding: 10px 12px; }
    .topbar-inner    { padding: 10px max(14px,env(safe-area-inset-right)) 10px max(14px,env(safe-area-inset-left)); }
    .export-summary  { padding: 10px 13px 12px; }
  }

  @media (max-width: 375px) {
    .upload-heading  { font-size: 30px; }
    .seg-btn         { font-size: 10.5px; padding: 8px 3px; gap: 3px; }
    .seg-btn svg     { display: none; }
    .topbar-filename { font-size: 12.5px; }
    .topbar-meta     { font-size: 11px; }
    .topbar-badge    { font-size: 11px; padding: 3px 7px; }
    .page-grid       { grid-template-columns: repeat(auto-fill, minmax(40px, 1fr)); max-height: 234px; }
    .split-btn       { font-size: 13.5px; }
  }
`;
function Oe({ showNotification: a, showDownloadDialog: s }) {
  const [l, d] = h.useState(null),
    [n, o] = h.useState(0),
    [g, L] = h.useState("type"),
    [u, v] = h.useState(""),
    [m, N] = h.useState(new Set()),
    [E, Q] = h.useState(null),
    [V, X] = h.useState(!1),
    [Z, M] = h.useState(0),
    [ee, T] = h.useState(""),
    [A, B] = h.useState(!1),
    [x, _] = h.useState(!1),
    [ye, q] = h.useState(!1),
    re = h.useRef(null),
    ae = h.useRef(null),
    H = h.useRef(null);
  h.useEffect(() => {}, []);
  const te = async (r) => {
      if (!r || r.type !== "application/pdf") {
        a("Please upload a valid PDF file", "error");
        return;
      }
      try {
        const t = await pe(r),
          { PDFDocument: i } = window.PDFLib,
          c = (await i.load(t, { ignoreEncryption: !1 })).getPageCount();
        ((H.current = t),
          d(r),
          o(c),
          v(""),
          N(new Set()),
          Q(null),
          a(`Loaded — ${c} pages`));
      } catch (t) {
        (console.error(t),
          a("Couldn't read this PDF. Is it password-protected?", "error"));
      }
    },
    je = (r) => {
      (r.preventDefault(), B(!1), te(r.dataTransfer.files?.[0]));
    },
    { valid: f, errors: $ } = Fe(u, n),
    we = (r) => {
      const t = f.filter((i, p) => p !== r);
      v(t.map(([i, p]) => (i === p ? `${i}` : `${i}-${p}`)).join(", "));
    },
    ve = (r) => {
      (v((t) => {
        const i = t.trim().replace(/,\s*$/, "");
        return i ? `${i}, ${r}` : r;
      }),
        setTimeout(() => ae.current?.focus(), 10));
    },
    ke = (r, t) => {
      if (t && E !== null) {
        const i = Math.min(E, r),
          p = Math.max(E, r);
        N((c) => {
          const b = new Set(c);
          for (let y = i; y <= p; y++) b.add(y);
          return b;
        });
      } else
        N((i) => {
          const p = new Set(i);
          return (p.has(r) ? p.delete(r) : p.add(r), p);
        });
      Q(r);
    },
    k = We(m),
    ze = (r) => {
      const [t, i] = k[r];
      N((p) => {
        const c = new Set(p);
        for (let b = t; b <= i; b++) c.delete(b);
        return c;
      });
    },
    ne = (() => {
      if (!n) return [];
      const r = [];
      if (n >= 4) {
        const t = Math.floor(n / 2);
        r.push([1, t], [t + 1, n]);
      }
      if (n >= 9) {
        const t = Math.floor(n / 3);
        r.push([1, t], [t + 1, t * 2], [t * 2 + 1, n]);
      }
      return r.slice(0, 4);
    })(),
    C =
      (g === "type" && f.length > 0 && $.length === 0) ||
      (g === "visual" && m.size > 0) ||
      g === "all",
    R = g !== "all",
    se = () =>
      g === "all"
        ? n
        : (g === "type" ? f : k).reduce((t, [i, p]) => t + (p - i + 1), 0),
    ie = h.useCallback(async () => {
      if (!(!l || !C)) {
        (X(!0), M(0));
        try {
          const { PDFDocument: r } = window.PDFLib,
            t = H.current ?? (await pe(l)),
            i = await r.load(t),
            p = i.getPageCount();
          if (x && R) {
            const c = g === "type" ? f : k;
            T("Merging selected pages…");
            const b = await r.create();
            for (let w = 0; w < c.length; w++) {
              const [D, U] = c[w],
                P = [];
              for (let F = D - 1; F <= U - 1 && F < p; F++) P.push(F);
              ((await b.copyPages(i, P)).forEach((F) => b.addPage(F)),
                M(Math.round(((w + 1) / c.length) * 80)),
                await J());
            }
            T("Saving merged PDF…");
            const y = await b.save();
            M(100);
            const z = `${l.name.replace(/\.pdf$/i, "")}_merged.pdf`;
            K(y, z, "application/pdf") !== !1 &&
              (await G({ name: z, tool: "split", size: y.length, bytes: y }),
              s("1 merged PDF file", y.length));
          } else if (g === "all") {
            let c = 0,
              b = 0;
            const y = String(p).length;
            for (let j = 0; j < p; j++) {
              T(`Saving page ${j + 1} of ${p}…`);
              const z = await r.create(),
                [W] = await z.copyPages(i, [j]);
              z.addPage(W);
              let w = await z.save();
              const D = `page_${String(j + 1).padStart(y, "0")}.pdf`;
              (K(w, D, "application/pdf") !== !1 &&
                (j < 20 &&
                  (await G({
                    name: D,
                    tool: "split",
                    size: w.length,
                    bytes: w,
                  })),
                b++,
                (c += w.length)),
                (w = null),
                M(Math.round(((j + 1) / p) * 100)),
                await J(40));
            }
            b === p
              ? s(`${p} PDF files`, c)
              : a(`Downloaded ${b} of ${p} files`, "error");
          } else {
            const c = g === "type" ? f : k;
            let b = 0,
              y = 0;
            for (let j = 0; j < c.length; j++) {
              const [z, W] = c[j];
              T(`Saving file ${j + 1} of ${c.length}…`);
              const w = await r.create(),
                D = [];
              for (let I = z - 1; I <= W - 1 && I < p; I++) D.push(I);
              (await w.copyPages(i, D)).forEach((I) => w.addPage(I));
              let P = await w.save();
              const Y = z === W ? `page_${z}.pdf` : `pages_${z}-${W}.pdf`;
              (K(P, Y, "application/pdf") !== !1 &&
                (await G({ name: Y, tool: "split", size: P.length, bytes: P }),
                y++,
                (b += P.length)),
                (P = null),
                M(Math.round(((j + 1) / c.length) * 100)),
                await J(c.length > 20 ? 80 : 40));
            }
            y === c.length
              ? s(`${c.length} PDF file${c.length !== 1 ? "s" : ""}`, b)
              : a(`Downloaded ${y} of ${c.length} files`, "error");
          }
        } catch (r) {
          (console.error(r), a("Split failed. Please try again.", "error"));
        } finally {
          (X(!1), T(""));
        }
      }
    }, [l, C, x, R, g, f, k, a, s]),
    Se = () => {
      g === "all" && n > le ? q(!0) : ie();
    },
    Ne = l ? (l.size / 1024 / 1024).toFixed(1) : 0,
    $e = V
      ? ee
      : g === "all"
        ? `Split into ${n} Files`
        : x
          ? g === "type"
            ? f.length > 0 && $.length === 0
              ? `Merge ${se()} Pages into 1 PDF`
              : "Enter Page Ranges Above"
            : m.size > 0
              ? `Merge ${m.size} Pages into 1 PDF`
              : "Select Pages Above"
          : g === "type"
            ? f.length > 0 && $.length === 0
              ? `Split into ${f.length} File${f.length !== 1 ? "s" : ""}`
              : "Enter Page Ranges Above"
            : m.size > 0
              ? `Split into ${k.length} File${k.length !== 1 ? "s" : ""}`
              : "Select Pages Above";
  return l
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsx("style", { children: ue }),
          e.jsxs("div", {
            className: "sr",
            children: [
              ye &&
                e.jsx(Te, {
                  pageCount: n,
                  onConfirm: () => {
                    (q(!1), ie());
                  },
                  onCancel: () => q(!1),
                }),
              e.jsx("div", {
                className: "topbar",
                children: e.jsxs("div", {
                  className: "topbar-inner",
                  children: [
                    e.jsx("button", {
                      "aria-label": "Previous",
                      className: "back-btn",
                      onClick: () => {
                        (d(null),
                          N(new Set()),
                          v(""),
                          _(!1),
                          (H.current = null));
                      },
                      children: e.jsx(Me, { size: 15 }),
                    }),
                    e.jsxs("div", {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        e.jsx("p", {
                          className: "topbar-filename",
                          children: l.name,
                        }),
                        e.jsxs("p", {
                          className: "topbar-meta",
                          children: [n, " pages · ", Ne, " MB"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "topbar-badge",
                      children: [n, "p"],
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "content-wrap",
                children: [
                  e.jsx("div", {
                    className: "seg-wrap",
                    children: [
                      { id: "type", label: "Type Ranges", Icon: ce },
                      { id: "visual", label: "Select Pages", Icon: Ie },
                      { id: "all", label: "Split All", Icon: ge },
                    ].map(({ id: r, label: t, Icon: i }) =>
                      e.jsxs(
                        "button",
                        {
                          className: `seg-btn ${g === r ? "on" : "off"}`,
                          onClick: () => {
                            (L(r), r === "all" && _(!1));
                          },
                          children: [
                            e.jsx(i, { size: 12 }),
                            e.jsx("span", {
                              className: "seg-label",
                              children: t,
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                  R &&
                    e.jsxs("div", {
                      className: `merge-toggle-wrap fi${x ? " active" : ""}`,
                      onClick: () => _((r) => !r),
                      children: [
                        e.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            minWidth: 0,
                            flex: 1,
                          },
                          children: [
                            e.jsx("div", {
                              className: "merge-icon-box",
                              style: {
                                background: x
                                  ? "rgba(59,130,246,0.18)"
                                  : "rgba(255,255,255,0.05)",
                                border: `1px solid ${x ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.08)"}`,
                                color: x ? "#60a5fa" : "rgba(255,255,255,0.3)",
                              },
                              children: e.jsx(fe, { size: 15 }),
                            }),
                            e.jsxs("div", {
                              style: { minWidth: 0 },
                              children: [
                                e.jsx("p", {
                                  className: "merge-label",
                                  style: {
                                    color: x
                                      ? "#efefef"
                                      : "rgba(255,255,255,0.65)",
                                  },
                                  children: "Merge into single PDF",
                                }),
                                e.jsx("p", {
                                  className: "merge-desc",
                                  style: {
                                    color: x
                                      ? "rgba(96,165,250,0.7)"
                                      : "rgba(255,255,255,0.22)",
                                  },
                                  children: x
                                    ? "All selected pages combined into one file"
                                    : "Download each range as a separate file",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: `toggle-pill ${x ? "on" : "off"}`,
                          children: e.jsx("div", {
                            className: `toggle-knob ${x ? "on" : "off"}`,
                          }),
                        }),
                      ],
                    }),
                  g === "type" &&
                    e.jsxs("div", {
                      className: "fi",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      },
                      children: [
                        e.jsxs("div", {
                          className: "card",
                          children: [
                            e.jsxs("div", {
                              className: "card-header",
                              children: [
                                e.jsxs("div", {
                                  style: { minWidth: 0 },
                                  children: [
                                    e.jsx("p", {
                                      className: "card-title",
                                      children: "Page Ranges",
                                    }),
                                    e.jsx("p", {
                                      className: "card-sub",
                                      children:
                                        "Separate multiple ranges with commas",
                                    }),
                                  ],
                                }),
                                u.trim() &&
                                  e.jsx("button", {
                                    className: "link-btn",
                                    style: {
                                      fontSize: 12,
                                      fontWeight: 600,
                                      color: "rgba(255,255,255,0.28)",
                                    },
                                    onClick: () => v(""),
                                    children: "Clear",
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              style: { padding: "12px 13px 11px" },
                              children: [
                                e.jsx("textarea", {
                                  ref: ae,
                                  rows: 3,
                                  className: `range-field${$.length > 0 ? " err" : f.length > 0 && $.length === 0 ? " ok" : ""}`,
                                  placeholder: `e.g.  1-20, 21-40, 41-${n}`,
                                  value: u,
                                  onChange: (r) => v(r.target.value),
                                  autoComplete: "off",
                                  autoCorrect: "off",
                                  autoCapitalize: "off",
                                  spellCheck: !1,
                                }),
                                $.length > 0 &&
                                  e.jsx("div", {
                                    style: {
                                      marginTop: 9,
                                      display: "flex",
                                      flexWrap: "wrap",
                                      gap: 6,
                                    },
                                    children: $.map((r, t) =>
                                      e.jsxs(
                                        "span",
                                        {
                                          className: "err-chip",
                                          children: ["⚠ ", r.msg],
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                !u.trim() &&
                                  ne.length > 0 &&
                                  e.jsxs("div", {
                                    style: { marginTop: 10 },
                                    children: [
                                      e.jsx("p", {
                                        style: {
                                          fontSize: 11,
                                          color: "rgba(255,255,255,0.2)",
                                          margin: "0 0 7px",
                                          fontWeight: 500,
                                          textTransform: "uppercase",
                                          letterSpacing: "0.04em",
                                        },
                                        children: "Quick splits",
                                      }),
                                      e.jsxs("div", {
                                        className: "quick-btns-row",
                                        children: [
                                          ne.map(([r, t], i) =>
                                            e.jsxs(
                                              "button",
                                              {
                                                className: "quick-btn",
                                                onClick: () =>
                                                  ve(
                                                    r === t
                                                      ? `${r}`
                                                      : `${r}-${t}`,
                                                  ),
                                                children: [
                                                  e.jsx(be, { size: 10 }),
                                                  r === t
                                                    ? `p.${r}`
                                                    : `${r}–${t}`,
                                                ],
                                              },
                                              i,
                                            ),
                                          ),
                                          e.jsxs("button", {
                                            className: "quick-btn",
                                            onClick: () => v(`1-${n}`),
                                            children: [
                                              e.jsx(be, { size: 10 }),
                                              "All pages",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            f.length > 0 &&
                              $.length === 0 &&
                              e.jsxs("div", {
                                className: "export-summary",
                                children: [
                                  e.jsxs("div", {
                                    className: "export-header",
                                    children: [
                                      e.jsx("p", {
                                        className: "export-count",
                                        children: x
                                          ? `${se()} pages → 1 file`
                                          : `${f.length} file${f.length !== 1 ? "s" : ""} to export`,
                                      }),
                                      e.jsxs("p", {
                                        className: "export-pages",
                                        children: [
                                          f.reduce(
                                            (r, [t, i]) => r + (i - t + 1),
                                            0,
                                          ),
                                          " ",
                                          "pages",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "pills-wrap",
                                    children: f.map(([r, t], i) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className: "parsed-pill fi",
                                          children: [
                                            e.jsx(he, { size: 11 }),
                                            e.jsx("span", {
                                              style: {
                                                fontSize: 12.5,
                                                fontWeight: 700,
                                                color: "#93c5fd",
                                                letterSpacing: "-0.01em",
                                              },
                                              children:
                                                r === t
                                                  ? `p.${r}`
                                                  : `${r}–${t}`,
                                            }),
                                            e.jsx("span", {
                                              style: {
                                                fontSize: 11,
                                                color: "rgba(255,255,255,0.25)",
                                              },
                                              children:
                                                r === t
                                                  ? "1pg"
                                                  : `${t - r + 1}pg`,
                                            }),
                                            e.jsx("button", {
                                              "aria-label": "Remove",
                                              className: "pill-x",
                                              onClick: () => we(i),
                                              children: e.jsx(xe, { size: 8 }),
                                            }),
                                          ],
                                        },
                                        i,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "hint-box",
                          children: e.jsxs("p", {
                            style: {
                              fontSize: 12,
                              color: "rgba(255,255,255,0.25)",
                              margin: 0,
                              lineHeight: 1.65,
                            },
                            children: [
                              e.jsx("span", {
                                style: {
                                  color: "rgba(255,255,255,0.42)",
                                  fontWeight: 600,
                                },
                                children: "Formats:",
                              }),
                              " ",
                              e.jsx("code", {
                                style: {
                                  background: "rgba(255,255,255,0.07)",
                                  padding: "1px 5px",
                                  borderRadius: 5,
                                  fontSize: 11.5,
                                },
                                children: "1-20",
                              }),
                              " ",
                              "range,",
                              " ",
                              e.jsx("code", {
                                style: {
                                  background: "rgba(255,255,255,0.07)",
                                  padding: "1px 5px",
                                  borderRadius: 5,
                                  fontSize: 11.5,
                                },
                                children: "5",
                              }),
                              " ",
                              "single,",
                              " ",
                              e.jsx("code", {
                                style: {
                                  background: "rgba(255,255,255,0.07)",
                                  padding: "1px 5px",
                                  borderRadius: 5,
                                  fontSize: 11.5,
                                },
                                children: "1-20, 21-40",
                              }),
                              " ",
                              "multiple",
                            ],
                          }),
                        }),
                      ],
                    }),
                  g === "visual" &&
                    e.jsxs("div", {
                      className: "fi",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      },
                      children: [
                        e.jsxs("div", {
                          className: "card",
                          children: [
                            e.jsxs("div", {
                              className: "card-header",
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    minWidth: 0,
                                  },
                                  children: [
                                    e.jsx("span", {
                                      className: "card-title",
                                      children: "Pages",
                                    }),
                                    m.size > 0 &&
                                      e.jsxs("span", {
                                        className: "selected-badge",
                                        children: [m.size, " selected"],
                                      }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  style: {
                                    display: "flex",
                                    gap: 10,
                                    flexShrink: 0,
                                  },
                                  children: [
                                    m.size > 0 &&
                                      m.size < n &&
                                      e.jsx("button", {
                                        className: "link-btn",
                                        style: {
                                          fontSize: 12,
                                          fontWeight: 600,
                                          color: "rgba(255,255,255,0.28)",
                                        },
                                        onClick: () => N(new Set()),
                                        children: "Clear",
                                      }),
                                    e.jsx("button", {
                                      className: "link-btn",
                                      style: {
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: "#60a5fa",
                                      },
                                      onClick: () =>
                                        m.size === n
                                          ? N(new Set())
                                          : N(
                                              new Set(
                                                Array.from(
                                                  { length: n },
                                                  (r, t) => t + 1,
                                                ),
                                              ),
                                            ),
                                      children:
                                        m.size === n
                                          ? "Deselect All"
                                          : "Select All",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "page-grid",
                              children: Array.from({ length: n }, (r, t) => {
                                const i = t + 1,
                                  p = m.has(i);
                                return e.jsx(
                                  "button",
                                  {
                                    className: `pg ${p ? "sel" : "unsel"}`,
                                    onClick: (c) => ke(i, c.shiftKey),
                                    children: e.jsx("span", {
                                      style: {
                                        fontSize:
                                          i > 99 ? 7.5 : i > 9 ? 9 : 10.5,
                                        fontWeight: 700,
                                        color: p
                                          ? "white"
                                          : "rgba(255,255,255,0.3)",
                                        lineHeight: 1,
                                      },
                                      children: i,
                                    }),
                                  },
                                  i,
                                );
                              }),
                            }),
                            e.jsx("div", {
                              className: "page-grid-footer",
                              children: e.jsx("p", {
                                className: "page-grid-hint",
                                children:
                                  "Tap to select · Shift + tap for a range",
                              }),
                            }),
                          ],
                        }),
                        k.length > 0 &&
                          e.jsxs("div", {
                            className: "card fi",
                            style: { padding: "12px 13px 13px" },
                            children: [
                              e.jsxs("div", {
                                className: "export-header",
                                children: [
                                  e.jsx("p", {
                                    className: "export-count",
                                    children: x
                                      ? `${m.size} pages → 1 file`
                                      : `${k.length} file${k.length !== 1 ? "s" : ""} to export`,
                                  }),
                                  e.jsxs("p", {
                                    className: "export-pages",
                                    children: [m.size, " pages"],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "pills-wrap",
                                children: k.map(([r, t], i) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "parsed-pill",
                                      children: [
                                        e.jsx(he, { size: 11 }),
                                        e.jsx("span", {
                                          style: {
                                            fontSize: 12.5,
                                            fontWeight: 700,
                                            color: "#93c5fd",
                                          },
                                          children:
                                            r === t ? `p.${r}` : `${r}–${t}`,
                                        }),
                                        e.jsx("span", {
                                          style: {
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.25)",
                                          },
                                          children:
                                            r === t ? "1pg" : `${t - r + 1}pg`,
                                        }),
                                        e.jsx("button", {
                                          "aria-label": "Remove",
                                          className: "pill-x",
                                          onClick: () => ze(i),
                                          children: e.jsx(xe, { size: 8 }),
                                        }),
                                      ],
                                    },
                                    i,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        m.size === 0 &&
                          e.jsx("div", {
                            className: "empty-hint",
                            children: e.jsx("p", {
                              style: {
                                fontSize: 13.5,
                                color: "rgba(255,255,255,0.2)",
                                margin: 0,
                              },
                              children:
                                "Tap pages above to choose what to extract",
                            }),
                          }),
                      ],
                    }),
                  g === "all" &&
                    e.jsxs("div", {
                      className: "fi",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      },
                      children: [
                        e.jsxs("div", {
                          className: "card all-card",
                          children: [
                            e.jsx("div", {
                              className: "icon-sq",
                              style: {
                                width: 50,
                                height: 50,
                                borderRadius: 15,
                                margin: "0 auto 16px",
                              },
                              children: e.jsx(ge, { size: 21 }),
                            }),
                            e.jsx("p", { className: "all-num", children: n }),
                            e.jsx("p", {
                              className: "all-label",
                              children: "separate files",
                            }),
                            e.jsxs("p", {
                              className: "all-desc",
                              children: [
                                "Every page in",
                                " ",
                                e.jsx("span", {
                                  style: {
                                    color: "rgba(255,255,255,0.42)",
                                    fontWeight: 600,
                                  },
                                  children: l.name,
                                }),
                                e.jsx("br", {}),
                                "saved as its own PDF document",
                              ],
                            }),
                          ],
                        }),
                        n > le &&
                          e.jsxs("div", {
                            className: "warn-box fi",
                            children: [
                              e.jsx("span", {
                                style: {
                                  color: "#fbbf24",
                                  flexShrink: 0,
                                  marginTop: 1,
                                },
                                children: e.jsx(me, { size: 14 }),
                              }),
                              e.jsxs("p", {
                                style: {
                                  fontSize: 12.5,
                                  color: "rgba(255,255,255,0.38)",
                                  margin: 0,
                                  lineHeight: 1.6,
                                },
                                children: [
                                  e.jsxs("span", {
                                    style: {
                                      color: "#fbbf24",
                                      fontWeight: 700,
                                    },
                                    children: [
                                      "Large document (",
                                      n,
                                      " pages).",
                                    ],
                                  }),
                                  " ",
                                  "For reliability, consider using",
                                  " ",
                                  e.jsx("span", {
                                    style: {
                                      color: "#60a5fa",
                                      fontWeight: 600,
                                      cursor: "pointer",
                                      textDecoration: "underline",
                                    },
                                    onClick: () => L("type"),
                                    children: "Type Ranges",
                                  }),
                                  " ",
                                  "to split into chunks instead.",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  e.jsx("div", {
                    className: "action-wrap",
                    children: V
                      ? e.jsxs("div", {
                          className: "progress-wrap",
                          children: [
                            e.jsxs("div", {
                              className: "progress-row",
                              children: [
                                e.jsxs("div", {
                                  className: "progress-label",
                                  children: [
                                    e.jsx("span", { className: "spin" }),
                                    e.jsx("span", {
                                      className: "progress-label-text",
                                      children: ee,
                                    }),
                                  ],
                                }),
                                e.jsxs("span", {
                                  className: "progress-pct",
                                  children: [Z, "%"],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "progress-track",
                              children: e.jsx("div", {
                                className: "progress-fill",
                                style: { width: `${Z}%` },
                              }),
                            }),
                          ],
                        })
                      : e.jsxs("button", {
                          className: "split-btn",
                          onClick: Se,
                          disabled: !C,
                          style: {
                            background: C
                              ? x && R
                                ? "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                                : "white"
                              : "rgba(255,255,255,0.06)",
                            color: C
                              ? x && R
                                ? "white"
                                : "#0a0a0a"
                              : "rgba(255,255,255,0.2)",
                            boxShadow:
                              C && x && R
                                ? "0 4px 18px rgba(59,130,246,0.35)"
                                : "none",
                          },
                          children: [
                            C &&
                              (x && R
                                ? e.jsx(fe, { size: 15 })
                                : e.jsx(ce, { size: 15 })),
                            $e,
                          ],
                        }),
                  }),
                ],
              }),
              e.jsx(de, {}),
            ],
          }),
        ],
      })
    : e.jsxs(e.Fragment, {
        children: [
          e.jsx("style", { children: ue }),
          e.jsx("div", {
            className: "sr upload-screen",
            children: e.jsxs("div", {
              className: "upload-inner",
              children: [
                e.jsxs("div", {
                  style: { textAlign: "center", marginBottom: 28 },
                  children: [
                    e.jsx("h1", {
                      className: "upload-heading",
                      children: "Split PDF",
                    }),
                    e.jsxs("p", {
                      className: "upload-sub",
                      children: [
                        "Type ranges like",
                        " ",
                        e.jsx("span", {
                          style: {
                            color: "rgba(255,255,255,0.55)",
                            fontWeight: 600,
                            fontFamily: "inherit",
                          },
                          children: "1-20, 21-40",
                        }),
                        " ",
                        "or pick pages visually",
                        e.jsx("br", {}),
                        "Everything stays on your device",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: `upload-zone${A ? " drag" : ""}`,
                  onDragOver: (r) => {
                    (r.preventDefault(), B(!0));
                  },
                  onDragLeave: () => B(!1),
                  onDrop: je,
                  onClick: () => re.current?.click(),
                  children: [
                    e.jsx("input", {
                      ref: re,
                      type: "file",
                      accept: "application/pdf",
                      onChange: (r) => te(r.target.files?.[0]),
                      style: { display: "none" },
                    }),
                    e.jsx("div", {
                      className: "icon-sq",
                      style: {
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        margin: "0 auto 14px",
                      },
                      children: e.jsx(Le, { size: 21 }),
                    }),
                    e.jsx("p", {
                      style: {
                        fontSize: 16.5,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        margin: "0 0 6px",
                        color: A ? "#60a5fa" : "white",
                      },
                      children: A ? "Drop it here" : "Choose a PDF file",
                    }),
                    e.jsx("p", {
                      style: {
                        fontSize: 13.5,
                        color: "rgba(255,255,255,0.26)",
                        margin: "0 0 20px",
                      },
                      children: A
                        ? "Release to load"
                        : "or drag and drop it here",
                    }),
                    e.jsx("span", {
                      style: {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: 11.5,
                        color: "rgba(255,255,255,0.2)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 100,
                        padding: "4px 11px",
                      },
                      children: "🔒 No upload · No size limit · No account",
                    }),
                  ],
                }),
                e.jsx(de, {}),
              ],
            }),
          }),
        ],
      });
}
export { Oe as default };
