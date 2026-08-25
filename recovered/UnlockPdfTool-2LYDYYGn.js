import { r as a, j as e } from "./react-vendor-Bc7KCos-.js";
const L =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js",
  C = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  U =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
function z(t) {
  return new Promise((i, m) => {
    if (document.querySelector(`script[src="${t}"]`)) return i();
    const c = document.createElement("script");
    ((c.src = t),
      (c.onload = i),
      (c.onerror = () => m(new Error("Failed to load " + t))),
      document.head.appendChild(c));
  });
}
const E = [
    { flag: 4, id: "print", label: "Printing" },
    { flag: 8, id: "modify", label: "Editing content" },
    { flag: 16, id: "copy", label: "Copying text" },
    { flag: 32, id: "annotate", label: "Adding annotations" },
    { flag: 256, id: "forms", label: "Filling form fields" },
    { flag: 512, id: "a11y", label: "Screen-reader access" },
    { flag: 1024, id: "assemble", label: "Rearranging pages" },
    { flag: 2048, id: "printHq", label: "High-quality printing" },
  ],
  x = ({ children: t, size: i = 16, className: m = "" }) =>
    e.jsx("svg", {
      width: i,
      height: i,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: m,
      children: t,
    }),
  I = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0110 0v4" }),
      ],
    }),
  O = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
        e.jsx("path", { d: "M7 11V7a5 5 0 019.9-1" }),
      ],
    }),
  T = (t) =>
    e.jsx(x, {
      ...t,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  P = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  R = (t) =>
    e.jsxs(x, {
      ...t,
      className: `animate-spin ${t.className || ""}`,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  A = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("polyline", { points: "8 17 12 21 16 17" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.09" }),
      ],
    });
function M({ showNotification: t, showDownloadDialog: i }) {
  const [m, c] = a.useState(!1),
    [p, j] = a.useState(null),
    [v, g] = a.useState(null),
    [r, b] = a.useState(null),
    [h, u] = a.useState(!1),
    [D, y] = a.useState(!1),
    N = a.useRef();
  a.useEffect(() => {
    Promise.all([z(L), z(C)])
      .then(() => {
        (window.pdfjsLib && (window.pdfjsLib.GlobalWorkerOptions.workerSrc = U),
          c(!0));
      })
      .catch((s) => t?.(s.message, "error"));
  }, [t]);
  const k = a.useCallback(
      async (s) => {
        (u(!0), b(null));
        try {
          const n = new Uint8Array(await s.arrayBuffer());
          (g(n), j(s));
          let o = !1,
            l = null;
          try {
            l = await (
              await window.pdfjsLib.getDocument({ data: n.slice() }).promise
            ).getPermissions();
          } catch (d) {
            if (String(d?.name || "").includes("Password")) o = !0;
            else throw d;
          }
          b({
            needsPassword: o,
            restricted: !o && Array.isArray(l),
            granted: new Set(l || []),
          });
        } catch (n) {
          (t?.("Could not read that PDF: " + n.message, "error"),
            j(null),
            g(null));
        } finally {
          u(!1);
        }
      },
      [t],
    ),
    S = async () => {
      if (v) {
        u(!0);
        try {
          const { PDFDocument: s } = window.PDFLib,
            o = await (
              await s.load(v, { ignoreEncryption: !0 })
            ).save({ useObjectStreams: !1 }),
            l =
              (p?.name || "document").replace(/\.pdf$/i, "") + "_unlocked.pdf";
          if (i)
            ((window._lastDownloadedFile = { name: l, bytes: o }),
              i(l, o.length, o));
          else {
            const d = URL.createObjectURL(
                new Blob([o], { type: "application/pdf" }),
              ),
              w = document.createElement("a");
            ((w.href = d),
              (w.download = l),
              w.click(),
              setTimeout(() => URL.revokeObjectURL(d), 4e3));
          }
          t?.("Restrictions removed", "success");
        } catch (s) {
          t?.("Could not unlock: " + s.message, "error");
        } finally {
          u(!1);
        }
      }
    },
    F = () => {
      (j(null), g(null), b(null));
    },
    f = "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-5";
  return p
    ? e.jsxs("div", {
        className: "max-w-2xl mx-auto space-y-4 px-3 sm:px-0 py-2",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between gap-3",
            children: [
              e.jsxs("div", {
                className: "min-w-0",
                children: [
                  e.jsx("h1", {
                    className: "text-lg font-bold text-white truncate",
                    children: p.name,
                  }),
                  e.jsxs("p", {
                    className: "text-zinc-500 text-xs",
                    children: [(p.size / 1024).toFixed(0), " KB"],
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: F,
                "aria-label": "Choose a different file",
                className:
                  "p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500",
                children: e.jsx(P, { size: 16 }),
              }),
            ],
          }),
          h &&
            !r &&
            e.jsxs("div", {
              className: `${f} flex items-center gap-2 text-zinc-300 text-sm`,
              children: [
                e.jsx(R, { size: 16 }),
                " Checking what this document restricts…",
              ],
            }),
          r?.needsPassword &&
            e.jsxs("div", {
              className: f,
              children: [
                e.jsx("p", {
                  className: "text-sm text-amber-300 font-semibold mb-1",
                  children: "This PDF needs a password to open",
                }),
                e.jsx("p", {
                  className: "text-[12px] text-zinc-400 leading-relaxed",
                  children:
                    "That is a user password, not a permissions restriction, and it genuinely encrypts the content — it cannot be stripped without the password. Use the Remove Password tool and enter the password there.",
                }),
                e.jsx("a", {
                  href: "/remove-password",
                  className:
                    "inline-block mt-3 text-[12px] font-semibold text-indigo-400 hover:text-indigo-300",
                  children: "Go to Remove Password →",
                }),
              ],
            }),
          r &&
            !r.needsPassword &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: f,
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-semibold text-white mb-3",
                      children: r.restricted
                        ? "This document restricts:"
                        : "This document has no restrictions set",
                    }),
                    r.restricted
                      ? e.jsx("ul", {
                          className: "space-y-1.5",
                          children: E.map((s) => {
                            const n = r.granted.has(s.flag);
                            return e.jsxs(
                              "li",
                              {
                                className:
                                  "flex items-center gap-2 text-[13px]",
                                children: [
                                  n
                                    ? e.jsx(T, {
                                        size: 14,
                                        className: "text-emerald-400",
                                      })
                                    : e.jsx(P, {
                                        size: 14,
                                        className: "text-red-400",
                                      }),
                                  e.jsx("span", {
                                    className: n
                                      ? "text-zinc-400"
                                      : "text-zinc-200 font-medium",
                                    children: s.label,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-zinc-600 text-[11px] ml-auto",
                                    children: n ? "allowed" : "blocked",
                                  }),
                                ],
                              },
                              s.id,
                            );
                          }),
                        })
                      : e.jsx("p", {
                          className:
                            "text-[12px] text-zinc-500 leading-relaxed",
                          children:
                            "Nothing is blocked, so there is nothing to remove. If an application is still refusing to let you print or copy, the limitation is coming from that application rather than from the file.",
                        }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: S,
                  disabled: h,
                  className:
                    "w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm flex items-center justify-center gap-2",
                  children: [
                    h ? e.jsx(R, { size: 16 }) : e.jsx(A, { size: 16 }),
                    h ? "Working…" : "Remove restrictions & download",
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-[11px] text-zinc-600 text-center leading-relaxed",
                  children:
                    "Processed entirely in your browser — the document is never uploaded.",
                }),
              ],
            }),
        ],
      })
    : e.jsxs("div", {
        className: "max-w-2xl mx-auto space-y-5 px-3 sm:px-0 py-2",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("h1", {
                className:
                  "text-xl sm:text-2xl font-bold text-white mb-1 flex items-center gap-2",
                children: [
                  e.jsx(O, { className: "w-5 h-5 text-indigo-400" }),
                  "Unlock PDF",
                ],
              }),
              e.jsx("p", {
                className: "text-zinc-400 text-sm",
                children:
                  "Remove printing, copying and editing restrictions from a PDF you own.",
              }),
            ],
          }),
          e.jsxs("div", {
            onDragOver: (s) => {
              (s.preventDefault(), y(!0));
            },
            onDragLeave: () => y(!1),
            onDrop: (s) => {
              (s.preventDefault(), y(!1));
              const n = s.dataTransfer.files?.[0];
              n && k(n);
            },
            onClick: () => N.current?.click(),
            className: `border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${D ? "border-indigo-400 bg-indigo-500/5" : "border-zinc-700 hover:border-zinc-500"}`,
            children: [
              e.jsx(I, { size: 30, className: "mx-auto text-zinc-500 mb-3" }),
              e.jsx("p", {
                className: "text-zinc-200 font-semibold",
                children: "Drop your PDF here",
              }),
              e.jsx("p", {
                className: "text-zinc-500 text-sm mt-1",
                children: "or click to choose a file",
              }),
              e.jsx("input", {
                ref: N,
                type: "file",
                accept: "application/pdf,.pdf",
                className: "hidden",
                onChange: (s) => {
                  const n = s.target.files?.[0];
                  n && k(n);
                },
              }),
            ],
          }),
          e.jsxs("div", {
            className: f,
            children: [
              e.jsx("p", {
                className: "text-[13px] text-zinc-300 font-semibold mb-1",
                children:
                  "Use this only on documents you have the right to unlock",
              }),
              e.jsx("p", {
                className: "text-[12px] text-zinc-500 leading-relaxed",
                children:
                  "Removing restrictions from a document you own, or have permission to use, is a normal thing to need — restrictions are routinely applied by software you no longer have, by a colleague who has left, or by a supplier who did not intend to block you. Circumventing protection on material you have no rights to may be unlawful where you live. This tool does not remove a password that stops a file opening; for that you need the password itself.",
              }),
            ],
          }),
        ],
      });
}
export { M as default };
