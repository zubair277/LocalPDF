import { r as o, j as e, e as oe } from "./react-vendor-Bc7KCos-.js";
const z = ({ size: t = 16, children: i, className: d = "" }) =>
    e.jsx("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: d,
      children: i,
    }),
  de = (t) =>
    e.jsx(z, {
      ...t,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  xe = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
      ],
    }),
  pe = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
        e.jsx("path", {
          d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
        }),
      ],
    }),
  L = (t) =>
    e.jsx(z, {
      ...t,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  P = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Z = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  W = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "18", rx: "1" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "18", rx: "1" }),
      ],
    }),
  X = (t) =>
    e.jsx(z, {
      ...t,
      children: e.jsx("path", {
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
      }),
    }),
  se = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("polyline", { points: "12 6 12 12 16 14" }),
      ],
    }),
  me = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  he = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  ue = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  J = (t) =>
    e.jsxs(z, {
      ...t,
      children: [
        e.jsx("polyline", { points: "23 4 23 10 17 10" }),
        e.jsx("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }),
      ],
    }),
  H = (t) =>
    t
      ? t < 1024
        ? `${t} B`
        : t < 1048576
          ? `${(t / 1024).toFixed(1)} KB`
          : `${(t / 1048576).toFixed(2)} MB`
      : "—",
  M = (t) =>
    new Date(t).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !1,
      timeZoneName: "short",
    }),
  Y = (t) =>
    Array.from(new Uint8Array(t))
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
function fe(t) {
  const i = Array.from(
      { length: 64 },
      (r, k) => Math.floor(Math.abs(Math.sin(k + 1)) * 4294967296) >>> 0,
    ),
    d = [
      7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20,
      5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4,
      11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6,
      10, 15, 21,
    ],
    m = typeof t == "string" ? new TextEncoder().encode(t) : new Uint8Array(t),
    u = m.length,
    a = u * 8,
    g = (56 - ((u + 1) % 64) + 64) % 64,
    w = new Uint8Array(u + 1 + g + 8);
  (w.set(m), (w[u] = 128));
  const n = new DataView(w.buffer);
  (n.setUint32(u + 1 + g, a & 4294967295, !0),
    n.setUint32(u + 1 + g + 4, Math.floor(a / 2 ** 32), !0));
  let S = 1732584193,
    D = 4023233417,
    A = 2562383102,
    $ = 271733878;
  for (let r = 0; r < w.length; r += 64) {
    const k = Array.from({ length: 16 }, (p, j) => n.getUint32(r + j * 4, !0));
    let I = S,
      b = D,
      v = A,
      f = $;
    for (let p = 0; p < 64; p++) {
      let j, y;
      (p < 16
        ? ((j = (b & v) | (~b & f)), (y = p))
        : p < 32
          ? ((j = (f & b) | (~f & v)), (y = (5 * p + 1) % 16))
          : p < 48
            ? ((j = b ^ v ^ f), (y = (3 * p + 5) % 16))
            : ((j = v ^ (b | ~f)), (y = (7 * p) % 16)),
        (j = (j + I + i[p] + k[y]) >>> 0));
      const B = (j << d[p]) | (j >>> (32 - d[p]));
      ((I = f), (f = v), (v = b), (b = (b + B) >>> 0));
    }
    ((S = (S + I) >>> 0),
      (D = (D + b) >>> 0),
      (A = (A + v) >>> 0),
      ($ = ($ + f) >>> 0));
  }
  const x = new Uint8Array(16),
    T = new DataView(x.buffer);
  return ([S, D, A, $].forEach((r, k) => T.setUint32(k * 4, r, !0)), Y(x));
}
async function E(t) {
  const i = await t.arrayBuffer(),
    [d, m] = await Promise.all([
      crypto.subtle.digest("SHA-256", i),
      crypto.subtle.digest("SHA-1", i),
    ]);
  return {
    sha256: Y(d),
    sha1: Y(m),
    md5: fe(i),
    size: t.size,
    name: t.name,
    ts: Date.now(),
  };
}
function O({ label: t, file: i, onFile: d, disabled: m }) {
  const [u, a] = o.useState(!1),
    g = o.useRef(),
    w = (n) => {
      n && d(n);
    };
  return e.jsxs("div", {
    onDragEnter: (n) => {
      (n.preventDefault(), m || a(!0));
    },
    onDragOver: (n) => {
      (n.preventDefault(), m || a(!0));
    },
    onDragLeave: (n) => {
      (n.preventDefault(), a(!1));
    },
    onDrop: (n) => {
      (n.preventDefault(), a(!1), w(n.dataTransfer?.files?.[0]));
    },
    onClick: () => !m && g.current?.click(),
    className: `relative rounded-xl border-2 border-dashed transition-all duration-200 cursor-pointer
        ${m ? "opacity-40 cursor-not-allowed" : ""}
        ${u ? "border-zinc-400 bg-zinc-800/40" : i ? "border-zinc-600 bg-zinc-900/60" : "border-zinc-700 hover:border-zinc-500 bg-zinc-900/30 hover:bg-zinc-900/50"}`,
    children: [
      e.jsx("input", {
        ref: g,
        type: "file",
        className: "hidden",
        onChange: (n) => w(n.target.files?.[0]),
        disabled: m,
      }),
      e.jsxs("div", {
        className: "p-4 flex items-center gap-3",
        children: [
          e.jsx("div", {
            className: `w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all
          ${i ? "bg-zinc-700 text-zinc-200" : "bg-zinc-800 text-zinc-500"}`,
            children: i ? e.jsx(xe, { size: 16 }) : e.jsx(he, { size: 16 }),
          }),
          e.jsx("div", {
            className: "flex-1 min-w-0",
            children: i
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("p", {
                      className:
                        "text-sm font-mono font-medium text-zinc-200 truncate",
                      children: i.name,
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-zinc-600 mt-0.5",
                      children: H(i.size),
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-semibold text-zinc-400",
                      children: t,
                    }),
                    e.jsx("p", {
                      className: "text-[10px] text-zinc-600 mt-0.5",
                      children: "Click or drag any file",
                    }),
                  ],
                }),
          }),
          i &&
            e.jsx("button", {
              "aria-label": "Close",
              onClick: (n) => {
                (n.stopPropagation(), d(null));
              },
              className:
                "p-1 text-zinc-600 hover:text-zinc-300 transition-colors flex-shrink-0",
              children: e.jsx(P, { size: 12 }),
            }),
        ],
      }),
    ],
  });
}
function V({ algo: t, value: i, match: d, showStatus: m = !1 }) {
  const [u, a] = o.useState(!1),
    g = async () => {
      (await navigator.clipboard.writeText(i),
        a(!0),
        setTimeout(() => a(!1), 1800));
    };
  return e.jsxs("div", {
    className:
      "group grid grid-cols-[56px_1fr_auto] items-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80",
    children: [
      e.jsx("span", {
        className:
          "text-[9px] font-black uppercase tracking-widest text-zinc-600",
        children: t,
      }),
      e.jsx("span", {
        className:
          "font-mono text-[11px] text-zinc-300 break-all leading-tight select-all",
        children: i,
      }),
      e.jsxs("div", {
        className: "flex items-center gap-1.5 flex-shrink-0",
        children: [
          m &&
            e.jsxs("span", {
              className: d === !0 ? "text-white" : "text-zinc-600",
              children: [
                d === !0 && e.jsx(L, { size: 13 }),
                d === !1 && e.jsx(P, { size: 13 }),
              ],
            }),
          e.jsx("button", {
            "aria-label": "Copy",
            onClick: g,
            className:
              "p-1 text-zinc-700 hover:text-zinc-300 transition-colors opacity-0 group-hover:opacity-100",
            children: u ? e.jsx(L, { size: 12 }) : e.jsx(pe, { size: 12 }),
          }),
        ],
      }),
    ],
  });
}
function te({ pass: t, title: i, subtitle: d }) {
  return e.jsxs("div", {
    className: `flex items-center gap-3 px-4 py-3.5 rounded-xl border ${t ? "bg-white/5 border-zinc-600" : "bg-zinc-900/60 border-zinc-700"}`,
    children: [
      e.jsx("div", {
        className: `w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${t ? "bg-white/10 text-white" : "bg-zinc-800 text-zinc-400"}`,
        children: t ? e.jsx(L, { size: 16 }) : e.jsx(ue, { size: 16 }),
      }),
      e.jsxs("div", {
        children: [
          e.jsx("div", {
            className: `text-sm font-black ${t ? "text-white" : "text-zinc-400"}`,
            children: i,
          }),
          e.jsx("div", {
            className: "text-[10px] text-zinc-500 mt-0.5",
            children: d,
          }),
        ],
      }),
    ],
  });
}
function je({ result: t }) {
  return e.jsxs("div", {
    className:
      "relative rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent",
      }),
      e.jsxs("div", {
        className: "p-4",
        children: [
          e.jsxs("div", {
            className: "flex items-start justify-between gap-3 mb-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center",
                    children: e.jsx(de, {
                      size: 15,
                      className: "text-zinc-300",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        className:
                          "text-[9px] font-black text-zinc-600 uppercase tracking-widest",
                        children: "Integrity Certificate",
                      }),
                      e.jsx("div", {
                        className:
                          "text-xs font-semibold text-zinc-200 mt-0.5 truncate max-w-[220px]",
                        children: t.name,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-right flex-shrink-0",
                children: [
                  e.jsx("div", {
                    className:
                      "text-[9px] text-zinc-600 uppercase tracking-wider",
                    children: "Certified",
                  }),
                  e.jsx("div", {
                    className:
                      "text-[10px] font-mono text-zinc-500 mt-0.5 whitespace-nowrap",
                    children: M(t.ts),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-1.5 mb-4",
            children: [
              e.jsx(V, { algo: "SHA-256", value: t.sha256 }),
              e.jsx(V, { algo: "SHA-1", value: t.sha1 }),
              e.jsx(V, { algo: "MD5", value: t.md5 }),
            ],
          }),
          e.jsx("div", {
            className:
              "grid grid-cols-3 gap-2 py-3 border-t border-zinc-800/60",
            children: [
              ["File Size", H(t.size)],
              ["Algorithms", "SHA-256 · SHA-1 · MD5"],
              ["Processed", "In-browser · No upload"],
            ].map(([i, d]) =>
              e.jsxs(
                "div",
                {
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[8px] font-black uppercase tracking-widest text-zinc-600",
                      children: i,
                    }),
                    e.jsx("div", {
                      className:
                        "text-[10px] text-zinc-400 mt-0.5 leading-tight",
                      children: d,
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
  });
}
const ge = [
  { id: "fingerprint", label: "Fingerprint", icon: X },
  { id: "compare", label: "Compare", icon: W },
  { id: "verify", label: "Verify Hash", icon: Z },
];
function ze({ showNotification: t }) {
  const [i, d] = o.useState("fingerprint"),
    [m, u] = o.useState(null),
    [a, g] = o.useState(null),
    [w, n] = o.useState(!1),
    [S, D] = o.useState(null),
    [A, $] = o.useState(null),
    [x, T] = o.useState(null),
    [r, k] = o.useState(null),
    [I, b] = o.useState(!1),
    [v, f] = o.useState(!1),
    [p, j] = o.useState(null),
    [y, B] = o.useState(""),
    [h, ie] = o.useState("sha256"),
    [C, U] = o.useState(null),
    [_, K] = o.useState(!1),
    [N, R] = o.useState(null),
    [q, Q] = o.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("integrity_history") || "[]");
      } catch {
        return [];
      }
    }),
    G = (s) => {
      Q((l) => {
        const c = [s, ...l].slice(0, 10);
        return (
          localStorage.setItem("integrity_history", JSON.stringify(c)),
          c
        );
      });
    },
    ne = () => {
      (u(null),
        g(null),
        n(!1),
        D(null),
        $(null),
        T(null),
        k(null),
        b(!1),
        f(!1),
        j(null),
        B(""),
        U(null),
        K(!1),
        R(null));
    },
    ae = async () => {
      if (m) {
        n(!0);
        try {
          const s = await E(m);
          (g(s),
            G({
              mode: "fingerprint",
              name: s.name,
              sha256: s.sha256,
              ts: s.ts,
            }),
            t?.("Fingerprint generated", "success"));
        } catch (s) {
          t?.(s.message, "error");
        } finally {
          n(!1);
        }
      }
    },
    re = async () => {
      if (!(!S || !A)) {
        b(!0);
        try {
          const [s, l] = await Promise.all([E(S), E(A)]);
          (T(s), k(l), f(!0));
          const c = s.sha256 !== l.sha256;
          (G({
            mode: "compare",
            nameA: s.name,
            nameB: l.name,
            tampered: c,
            ts: s.ts,
          }),
            t?.(
              c ? "Tampering detected!" : "Files match",
              c ? "error" : "success",
            ));
        } catch (s) {
          t?.(s.message, "error");
        } finally {
          b(!1);
        }
      }
    },
    le = async () => {
      if (!(!p || !y.trim())) {
        K(!0);
        try {
          const s = await E(p);
          U(s);
          const l = s[h].toLowerCase() === y.trim().toLowerCase();
          (R(l),
            G({ mode: "verify", name: s.name, algo: h, match: l, ts: s.ts }),
            t?.(
              l ? "File is authentic" : "Hash mismatch",
              l ? "success" : "error",
            ));
        } catch (s) {
          t?.(s.message, "error");
        } finally {
          K(!1);
        }
      }
    },
    ce = () => {
      const s = [];
      (s.push("DOCUMENT INTEGRITY REPORT"),
        s.push("Generated by ihatepdf · " + M(Date.now())),
        s.push("=".repeat(60)),
        a &&
          (s.push(`
FINGERPRINT`),
          s.push(`File     : ${a.name}`),
          s.push(`Size     : ${H(a.size)}`),
          s.push(`Time     : ${M(a.ts)}`),
          s.push(`SHA-256  : ${a.sha256}`),
          s.push(`SHA-1    : ${a.sha1}`),
          s.push(`MD5      : ${a.md5}`)),
        v &&
          x &&
          r &&
          (s.push(`
COMPARISON`),
          s.push(`File A   : ${x.name} (${H(x.size)})`),
          s.push(`File B   : ${r.name} (${H(r.size)})`),
          s.push(`SHA-256 A: ${x.sha256}`),
          s.push(`SHA-256 B: ${r.sha256}`),
          s.push(
            `VERDICT  : ${x.sha256 === r.sha256 ? "MATCH — Files are identical" : "MISMATCH — Tampering detected"}`,
          )),
        N !== null &&
          C &&
          (s.push(`
VERIFICATION`),
          s.push(`File     : ${C.name}`),
          s.push(`Algorithm: ${h.toUpperCase()}`),
          s.push(`Known    : ${y.trim()}`),
          s.push(`Computed : ${C[h]}`),
          s.push(
            `VERDICT  : ${N ? "PASS — Authentic" : "FAIL — Hash mismatch"}`,
          )),
        s.push(
          `
` + "=".repeat(60),
        ),
        s.push("All processing done locally. No files were uploaded."));
      const l = new Blob(
          [
            s.join(`
`),
          ],
          { type: "text/plain" },
        ),
        c = URL.createObjectURL(l),
        F = document.createElement("a");
      ((F.href = c),
        (F.download = `integrity-report-${Date.now()}.txt`),
        document.body.appendChild(F),
        F.click(),
        setTimeout(() => {
          (document.body.removeChild(F), URL.revokeObjectURL(c));
        }, 1e3),
        t?.("Report downloaded"));
    },
    ee = a || v || N !== null;
  return e.jsxs("div", {
    className: "max-w-2xl mx-auto pb-16 flex flex-col gap-5",
    children: [
      e.jsxs("div", {
        className: "flex items-start justify-between gap-3 flex-wrap",
        children: [
          e.jsx("div", {
            className: "flex items-center gap-3",
            children: e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className: "text-4xl font-bold text-white leading-tight",
                  children: "Document Integrity Verifier",
                }),
                e.jsx("p", {
                  className: "text-[11px] text-zinc-500 mt-0.5",
                  children:
                    "Fingerprint · Compare · Tamper Detection · Verify — 100% local",
                }),
              ],
            }),
          }),
          ee &&
            e.jsxs("button", {
              onClick: ce,
              className:
                "flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold transition-all",
              children: [e.jsx(me, { size: 13 }), " Export Report"],
            }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl",
        children: ge.map(({ id: s, label: l, icon: c }) =>
          e.jsxs(
            "button",
            {
              onClick: () => {
                (d(s), ne());
              },
              className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${i === s ? "bg-white text-black shadow" : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/40"}`,
              children: [
                e.jsx(c, { size: 14 }),
                e.jsx("span", { children: l }),
              ],
            },
            s,
          ),
        ),
      }),
      i === "fingerprint" &&
        e.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            e.jsx(O, {
              label: "Drop any file to fingerprint",
              file: m,
              onFile: (s) => {
                (u(s), g(null));
              },
            }),
            m &&
              !a &&
              e.jsxs("button", {
                onClick: ae,
                disabled: w,
                className:
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-100 active:scale-[0.99] transition-all disabled:opacity-50",
                children: [
                  w
                    ? e.jsx(J, { size: 15, className: "animate-spin" })
                    : e.jsx(X, { size: 15 }),
                  w ? "Computing hashes…" : "Generate Fingerprint",
                ],
              }),
            a &&
              e.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  e.jsx(je, { result: a }),
                  e.jsx("button", {
                    onClick: () => {
                      (u(null), g(null));
                    },
                    className:
                      "self-center text-xs text-zinc-600 hover:text-zinc-400 transition-colors",
                    children: "← Fingerprint another file",
                  }),
                ],
              }),
          ],
        }),
      i === "compare" &&
        e.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1.5",
                      children: "Original / Reference",
                    }),
                    e.jsx(O, {
                      label: "File A (original)",
                      file: S,
                      onFile: (s) => {
                        (D(s), T(null), f(!1));
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1.5",
                      children: "Suspect / Modified",
                    }),
                    e.jsx(O, {
                      label: "File B (to verify)",
                      file: A,
                      onFile: (s) => {
                        ($(s), k(null), f(!1));
                      },
                    }),
                  ],
                }),
              ],
            }),
            S &&
              A &&
              !v &&
              e.jsxs("button", {
                onClick: re,
                disabled: I,
                className:
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-100 active:scale-[0.99] transition-all disabled:opacity-50",
                children: [
                  I
                    ? e.jsx(J, { size: 15, className: "animate-spin" })
                    : e.jsx(W, { size: 15 }),
                  I ? "Comparing files…" : "Compare & Detect Tampering",
                ],
              }),
            v &&
              x &&
              r &&
              (() => {
                const s = x.sha256 === r.sha256;
                return e.jsxs("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    e.jsx(te, {
                      pass: s,
                      title: s
                        ? "Files are Identical — No Tampering Detected"
                        : "Tampering Detected — Files Differ",
                      subtitle: s
                        ? "All cryptographic hashes match. The files are byte-for-byte identical."
                        : "Hash mismatch confirmed. The files have different content.",
                    }),
                    e.jsx("div", {
                      className:
                        "rounded-xl border border-zinc-800 overflow-hidden",
                      children: e.jsxs("div", {
                        className: "grid grid-cols-[60px_1fr_1fr_24px]",
                        children: [
                          e.jsx("div", {
                            className:
                              "px-3 py-2 bg-zinc-900 border-b border-zinc-800",
                          }),
                          [
                            { label: "File A", name: x.name },
                            { label: "File B", name: r.name },
                          ].map(({ label: l, name: c }) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "px-3 py-2 bg-zinc-900 border-b border-zinc-800",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-[9px] font-black text-zinc-500 uppercase tracking-widest",
                                    children: l,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[10px] text-zinc-400 truncate",
                                    children: c,
                                  }),
                                ],
                              },
                              l,
                            ),
                          ),
                          e.jsx("div", {
                            className:
                              "px-2 py-2 bg-zinc-900 border-b border-zinc-800",
                          }),
                          [
                            ["SHA-256", "sha256"],
                            ["SHA-1", "sha1"],
                            ["MD5", "md5"],
                          ].map(([l, c]) => {
                            const F = x[c] === r[c];
                            return e.jsxs(
                              oe.Fragment,
                              {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "px-3 py-3 border-b border-zinc-800/60 flex items-center",
                                    children: e.jsx("span", {
                                      className:
                                        "text-[9px] font-black uppercase tracking-widest text-zinc-600",
                                      children: l,
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: `px-3 py-3 border-b border-zinc-800/60 font-mono text-[10px] break-all leading-relaxed ${F ? "text-zinc-500" : "text-zinc-200 bg-zinc-800/20"}`,
                                    children: x[c],
                                  }),
                                  e.jsx("div", {
                                    className: `px-3 py-3 border-b border-zinc-800/60 font-mono text-[10px] break-all leading-relaxed ${F ? "text-zinc-500" : "text-zinc-200 bg-zinc-800/20"}`,
                                    children: r[c],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "px-2 py-3 border-b border-zinc-800/60 flex items-center justify-center",
                                    children: F
                                      ? e.jsx(L, {
                                          size: 12,
                                          className: "text-zinc-500",
                                        })
                                      : e.jsx(P, {
                                          size: 12,
                                          className: "text-white",
                                        }),
                                  }),
                                ],
                              },
                              c,
                            );
                          }),
                          e.jsx("div", {
                            className: "px-3 py-2.5 flex items-center",
                            children: e.jsx("span", {
                              className:
                                "text-[9px] font-black uppercase tracking-widest text-zinc-600",
                              children: "Size",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "px-3 py-2.5 font-mono text-[10px] text-zinc-500",
                            children: H(x.size),
                          }),
                          e.jsxs("div", {
                            className: `px-3 py-2.5 font-mono text-[10px] ${x.size !== r.size ? "text-zinc-200" : "text-zinc-500"}`,
                            children: [
                              H(r.size),
                              x.size !== r.size &&
                                e.jsx("span", {
                                  className: "ml-1.5 text-zinc-500",
                                  children: "(differs)",
                                }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "px-2 py-2.5 flex items-center justify-center",
                            children:
                              x.size === r.size
                                ? e.jsx(L, {
                                    size: 12,
                                    className: "text-zinc-500",
                                  })
                                : e.jsx(P, {
                                    size: 12,
                                    className: "text-white",
                                  }),
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center justify-between flex-wrap gap-2",
                      children: [
                        e.jsxs("div", {
                          className:
                            "text-[10px] text-zinc-600 flex items-center gap-1.5",
                          children: [
                            e.jsx(se, { size: 11 }),
                            " Analysed ",
                            M(x.ts),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (D(null), $(null), T(null), k(null), f(!1));
                          },
                          className:
                            "text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors",
                          children: "← Compare new files",
                        }),
                      ],
                    }),
                  ],
                });
              })(),
          ],
        }),
      i === "verify" &&
        e.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            e.jsx(O, {
              label: "Drop the file to verify",
              file: p,
              onFile: (s) => {
                (j(s), U(null), R(null));
              },
            }),
            e.jsxs("div", {
              children: [
                e.jsx("div", {
                  className:
                    "text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1.5",
                  children: "Known / Expected Hash",
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs("select", {
                      value: h,
                      onChange: (s) => {
                        (ie(s.target.value), R(null));
                      },
                      className:
                        "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500 flex-shrink-0",
                      children: [
                        e.jsx("option", {
                          value: "sha256",
                          children: "SHA-256",
                        }),
                        e.jsx("option", { value: "sha1", children: "SHA-1" }),
                        e.jsx("option", { value: "md5", children: "MD5" }),
                      ],
                    }),
                    e.jsx("input", {
                      value: y,
                      onChange: (s) => {
                        (B(s.target.value), R(null));
                      },
                      placeholder: "Paste the expected hash here…",
                      className:
                        "flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs font-mono text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-all",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-[9px] text-zinc-700 mt-1.5",
                  children:
                    "Provided by the publisher, certificate authority, or original sender",
                }),
              ],
            }),
            p &&
              y.trim() &&
              N === null &&
              e.jsxs("button", {
                onClick: le,
                disabled: _,
                className:
                  "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-100 active:scale-[0.99] transition-all disabled:opacity-50",
                children: [
                  _
                    ? e.jsx(J, { size: 15, className: "animate-spin" })
                    : e.jsx(Z, { size: 15 }),
                  _ ? "Verifying…" : "Verify File Integrity",
                ],
              }),
            N !== null &&
              C &&
              e.jsxs("div", {
                className: "flex flex-col gap-3",
                children: [
                  e.jsx(te, {
                    pass: N,
                    title: N
                      ? "Verified — File is Authentic"
                      : "Verification Failed — Hash Mismatch",
                    subtitle: N
                      ? `The ${h.toUpperCase()} hash matches. This file has not been modified.`
                      : `The ${h.toUpperCase()} hash does not match. The file may be corrupted or tampered.`,
                  }),
                  e.jsxs("div", {
                    className:
                      "rounded-xl border border-zinc-800 overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "px-4 py-2.5 bg-zinc-900 border-b border-zinc-800",
                        children: e.jsxs("span", {
                          className:
                            "text-[9px] font-black text-zinc-500 uppercase tracking-widest",
                          children: [h.toUpperCase(), " Comparison"],
                        }),
                      }),
                      e.jsxs("div", {
                        className: "p-3 space-y-2",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1",
                                children: "Known (expected)",
                              }),
                              e.jsx("div", {
                                className:
                                  "font-mono text-[10px] text-zinc-400 bg-zinc-950/60 border border-zinc-800 rounded-lg px-3 py-2 break-all",
                                children: y.trim().toLowerCase(),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1",
                                children: "Computed (actual)",
                              }),
                              e.jsx("div", {
                                className: `font-mono text-[10px] bg-zinc-950/60 border rounded-lg px-3 py-2 break-all ${N ? "text-white border-zinc-600" : "text-zinc-400 border-zinc-700"}`,
                                children: C[h],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "rounded-xl border border-zinc-800 overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className:
                          "px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[9px] font-black text-zinc-500 uppercase tracking-widest",
                            children: "All Computed Hashes",
                          }),
                          e.jsx("span", {
                            className: "text-[9px] text-zinc-600",
                            children: C.name,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-2 space-y-1",
                        children: [
                          e.jsx(V, {
                            algo: "SHA-256",
                            value: C.sha256,
                            match: h === "sha256" ? N : void 0,
                            showStatus: h === "sha256",
                          }),
                          e.jsx(V, {
                            algo: "SHA-1",
                            value: C.sha1,
                            match: h === "sha1" ? N : void 0,
                            showStatus: h === "sha1",
                          }),
                          e.jsx(V, {
                            algo: "MD5",
                            value: C.md5,
                            match: h === "md5" ? N : void 0,
                            showStatus: h === "md5",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between flex-wrap gap-2",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-[10px] text-zinc-600 flex items-center gap-1.5",
                        children: [
                          e.jsx(se, { size: 11 }),
                          " Verified ",
                          M(C.ts),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          (j(null), B(""), U(null), R(null));
                        },
                        className:
                          "text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors",
                        children: "← Verify another file",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      q.length > 0 &&
        !ee &&
        e.jsxs("div", {
          className: "mt-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                e.jsx("div", {
                  className:
                    "text-[9px] font-black text-zinc-600 uppercase tracking-widest",
                  children: "Recent Audits",
                }),
                e.jsx("button", {
                  onClick: () => {
                    (Q([]), localStorage.removeItem("integrity_history"));
                  },
                  className:
                    "text-[9px] text-zinc-700 hover:text-zinc-500 transition-colors",
                  children: "Clear history",
                }),
              ],
            }),
            e.jsx("div", {
              className: "space-y-1.5",
              children: q.map((s, l) => {
                const c = s.tampered === !1 || s.match === !0;
                return e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center gap-3 px-3 py-2.5 bg-zinc-900/50 border border-zinc-800/60 rounded-lg",
                    children: [
                      e.jsxs("div", {
                        className: `w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${s.mode === "fingerprint" ? "bg-zinc-800 text-zinc-400" : c ? "bg-zinc-700 text-white" : "bg-zinc-800 text-zinc-500"}`,
                        children: [
                          s.mode === "fingerprint" && e.jsx(X, { size: 11 }),
                          s.mode === "compare" && e.jsx(W, { size: 11 }),
                          s.mode === "verify" && e.jsx(Z, { size: 11 }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsxs("div", {
                            className:
                              "text-[11px] font-medium text-zinc-300 truncate",
                            children: [
                              s.mode === "fingerprint" && s.name,
                              s.mode === "compare" &&
                                `${s.nameA} vs ${s.nameB}`,
                              s.mode === "verify" && s.name,
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-[9px] text-zinc-600 mt-0.5",
                            children: [
                              s.mode === "fingerprint" && "Fingerprinted",
                              s.mode === "compare" &&
                                (s.tampered ? "Tampered" : "Identical"),
                              s.mode === "verify" &&
                                (s.match ? "Verified" : "Failed"),
                              " · ",
                              M(s.ts),
                            ],
                          }),
                        ],
                      }),
                      s.sha256 &&
                        e.jsxs("span", {
                          className:
                            "font-mono text-[9px] text-zinc-700 truncate max-w-[80px] hidden sm:block",
                          children: [s.sha256.slice(0, 8), "…"],
                        }),
                    ],
                  },
                  l,
                );
              }),
            }),
          ],
        }),
      e.jsx("p", {
        className: "text-center text-[10px] text-zinc-700",
        children:
          "All hashing runs locally in your browser · No files are uploaded · No data is sent to any server",
      }),
    ],
  });
}
export { ze as default };
