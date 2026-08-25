import { r, j as e } from "./react-vendor-Bc7KCos-.js";
const A =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js";
function G(t) {
  return new Promise((i, g) => {
    if (document.querySelector(`script[src="${t}"]`)) return i();
    const p = document.createElement("script");
    ((p.src = t),
      (p.onload = i),
      (p.onerror = () => g(new Error("Failed to load " + t))),
      document.head.appendChild(p));
  });
}
const j = ({ children: t, size: i = 16, className: g = "" }) =>
    e.jsx("svg", {
      width: i,
      height: i,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: g,
      children: t,
    }),
  O = (t) =>
    e.jsxs(j, {
      ...t,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
        e.jsx("line", { x1: "7", y1: "8", x2: "17", y2: "8" }),
        e.jsx("line", { x1: "7", y1: "12", x2: "17", y2: "12" }),
        e.jsx("line", { x1: "7", y1: "16", x2: "13", y2: "16" }),
      ],
    }),
  _ = (t) =>
    e.jsxs(j, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  $ = (t) =>
    e.jsxs(j, {
      ...t,
      className: `animate-spin ${t.className || ""}`,
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
        }),
        e.jsx("path", { d: "M21 3v5h-5" }),
      ],
    }),
  M = (t) =>
    e.jsxs(j, {
      ...t,
      children: [
        e.jsx("polyline", { points: "8 17 12 21 16 17" }),
        e.jsx("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
        e.jsx("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.09" }),
      ],
    });
function W(t) {
  const i = window.PDFLib || {};
  return i.PDFTextField && t instanceof i.PDFTextField
    ? "text"
    : i.PDFCheckBox && t instanceof i.PDFCheckBox
      ? "checkbox"
      : i.PDFRadioGroup && t instanceof i.PDFRadioGroup
        ? "radio"
        : i.PDFDropdown && t instanceof i.PDFDropdown
          ? "dropdown"
          : i.PDFOptionList && t instanceof i.PDFOptionList
            ? "optionlist"
            : i.PDFButton && t instanceof i.PDFButton
              ? "button"
              : typeof t.setText == "function"
                ? "text"
                : typeof t.isChecked == "function"
                  ? "checkbox"
                  : typeof t.getOptions == "function" &&
                      typeof t.select == "function"
                    ? "dropdown"
                    : "unsupported";
}
function q(t) {
  return (String(t).split(/[.\]]/).filter(Boolean).pop() || t)
    .replace(/[_\-[\]]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim();
}
function V({ showNotification: t, showDownloadDialog: i }) {
  const [g, p] = r.useState(!1),
    [k, P] = r.useState(null),
    [z, C] = r.useState(null),
    [d, w] = r.useState(null),
    [b, L] = r.useState({}),
    [S, E] = r.useState(!0),
    [u, y] = r.useState(!1),
    [I, v] = r.useState(!1),
    R = r.useRef();
  r.useEffect(() => {
    G(A)
      .then(() => p(!0))
      .catch((n) => t?.(n.message, "error"));
  }, [t]);
  const T = r.useCallback(
      async (n) => {
        (y(!0), w(null));
        try {
          const s = new Uint8Array(await n.arrayBuffer()),
            { PDFDocument: c } = window.PDFLib,
            f = (await c.load(s, { ignoreEncryption: !0 })).getForm(),
            l = [],
            o = {};
          for (const a of f.getFields()) {
            const x = W(a);
            if (x === "button" || x === "unsupported") continue;
            const m = a.getName(),
              N = { name: m, kind: x, options: [] };
            try {
              x === "text"
                ? (o[m] = a.getText() || "")
                : x === "checkbox"
                  ? (o[m] = a.isChecked())
                  : x === "radio"
                    ? ((N.options = a.getOptions()),
                      (o[m] = a.getSelected() || ""))
                    : (x === "dropdown" || x === "optionlist") &&
                      ((N.options = a.getOptions()),
                      (o[m] = (a.getSelected() || [])[0] || ""));
            } catch {
              o[m] = "";
            }
            l.push(N);
          }
          (C(s),
            P(n),
            w(l),
            L(o),
            l.length ||
              t?.(
                "This PDF has no fillable form fields — use the PDF editor to type onto it instead.",
                "error",
              ));
        } catch (s) {
          t?.("Could not read that PDF: " + s.message, "error");
        } finally {
          y(!1);
        }
      },
      [t],
    ),
    U = async () => {
      if (z) {
        y(!0);
        try {
          const { PDFDocument: n } = window.PDFLib,
            s = await n.load(z, { ignoreEncryption: !0 }),
            c = s.getForm();
          for (const l of d) {
            const o = b[l.name];
            try {
              if (l.kind === "text")
                c.getTextField(l.name).setText(String(o ?? ""));
              else if (l.kind === "checkbox") {
                const a = c.getCheckBox(l.name);
                o ? a.check() : a.uncheck();
              } else
                l.kind === "radio" && o
                  ? c.getRadioGroup(l.name).select(o)
                  : l.kind === "dropdown" && o
                    ? c.getDropdown(l.name).select(o)
                    : l.kind === "optionlist" &&
                      o &&
                      c.getOptionList(l.name).select(o);
            } catch {}
          }
          if (S)
            try {
              c.flatten();
            } catch {
              t?.(
                "Filled, but this form could not be flattened — the values are still set.",
                "error",
              );
            }
          const h = await s.save(),
            f = (k?.name || "form").replace(/\.pdf$/i, "") + "_filled.pdf";
          if (i)
            ((window._lastDownloadedFile = { name: f, bytes: h }),
              i(f, h.length, h));
          else {
            const l = URL.createObjectURL(
                new Blob([h], { type: "application/pdf" }),
              ),
              o = document.createElement("a");
            ((o.href = l),
              (o.download = f),
              o.click(),
              setTimeout(() => URL.revokeObjectURL(l), 4e3));
          }
          t?.("Form filled", "success");
        } catch (n) {
          t?.("Could not save: " + n.message, "error");
        } finally {
          y(!1);
        }
      }
    },
    F = (n, s) => L((c) => ({ ...c, [n]: s })),
    D = "bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 sm:p-5",
    B =
      "w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:border-indigo-500 focus:outline-none";
  return k
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
                    children: k.name,
                  }),
                  e.jsx("p", {
                    className: "text-zinc-500 text-xs",
                    children: d?.length
                      ? `${d.length} fillable field${d.length > 1 ? "s" : ""}`
                      : "No fillable fields",
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => {
                  (P(null), w(null), C(null));
                },
                "aria-label": "Choose a different file",
                className:
                  "p-2 rounded-lg border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500",
                children: e.jsx(_, { size: 16 }),
              }),
            ],
          }),
          d &&
            d.length === 0 &&
            e.jsxs("div", {
              className: D,
              children: [
                e.jsx("p", {
                  className: "text-sm text-amber-300 font-semibold mb-1",
                  children: "This PDF has no fillable fields",
                }),
                e.jsx("p", {
                  className: "text-[12px] text-zinc-400 leading-relaxed",
                  children:
                    "It is a flat document that looks like a form — very common with scanned or printed-then-digitised paperwork. There are no fields to fill, but you can type directly onto it with the PDF editor, placing text wherever it needs to go.",
                }),
                e.jsx("a", {
                  href: "/edit-pdf-text",
                  className:
                    "inline-block mt-3 text-[12px] font-semibold text-indigo-400 hover:text-indigo-300",
                  children: "Open in the PDF editor →",
                }),
              ],
            }),
          d &&
            d.length > 0 &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", {
                  className: `${D} space-y-3.5`,
                  children: d.map((n) =>
                    e.jsxs(
                      "div",
                      {
                        children: [
                          e.jsx("label", {
                            className:
                              "block text-[12px] font-medium text-zinc-300 mb-1",
                            children: q(n.name),
                          }),
                          n.kind === "text" &&
                            e.jsx("input", {
                              type: "text",
                              className: B,
                              value: b[n.name] ?? "",
                              onChange: (s) => F(n.name, s.target.value),
                            }),
                          n.kind === "checkbox" &&
                            e.jsxs("label", {
                              className:
                                "flex items-center gap-2 text-sm text-zinc-300 cursor-pointer",
                              children: [
                                e.jsx("input", {
                                  type: "checkbox",
                                  checked: !!b[n.name],
                                  onChange: (s) => F(n.name, s.target.checked),
                                  className: "w-4 h-4 accent-indigo-500",
                                }),
                                "Tick to select",
                              ],
                            }),
                          (n.kind === "radio" ||
                            n.kind === "dropdown" ||
                            n.kind === "optionlist") &&
                            e.jsxs("select", {
                              className: B,
                              value: b[n.name] ?? "",
                              onChange: (s) => F(n.name, s.target.value),
                              children: [
                                e.jsx("option", {
                                  value: "",
                                  children: "— not set —",
                                }),
                                n.options.map((s) =>
                                  e.jsx("option", { value: s, children: s }, s),
                                ),
                              ],
                            }),
                        ],
                      },
                      n.name,
                    ),
                  ),
                }),
                e.jsxs("label", {
                  className: "flex items-start gap-2.5 cursor-pointer px-1",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: S,
                      onChange: (n) => E(n.target.checked),
                      className: "w-4 h-4 mt-0.5 accent-indigo-500",
                    }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("span", {
                          className:
                            "block text-[13px] text-zinc-200 font-medium",
                          children: "Lock the answers into the page",
                        }),
                        e.jsx("span", {
                          className:
                            "block text-[11px] text-zinc-500 leading-relaxed",
                          children:
                            "Recommended. Guarantees every viewer shows your answers. Untick only if the form needs to stay editable.",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: U,
                  disabled: u,
                  className:
                    "w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm flex items-center justify-center gap-2",
                  children: [
                    u ? e.jsx($, { size: 16 }) : e.jsx(M, { size: 16 }),
                    u ? "Saving…" : "Fill & download",
                  ],
                }),
                e.jsx("p", {
                  className:
                    "text-[11px] text-zinc-600 text-center leading-relaxed",
                  children:
                    "Processed entirely in your browser — the form is never uploaded.",
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
                  "Fill PDF Form",
                ],
              }),
              e.jsx("p", {
                className: "text-zinc-400 text-sm",
                children:
                  "Fill in a fillable PDF and lock the answers so they always show.",
              }),
            ],
          }),
          e.jsxs("div", {
            onDragOver: (n) => {
              (n.preventDefault(), v(!0));
            },
            onDragLeave: () => v(!1),
            onDrop: (n) => {
              (n.preventDefault(), v(!1));
              const s = n.dataTransfer.files?.[0];
              s && T(s);
            },
            onClick: () => R.current?.click(),
            className: `border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors ${I ? "border-indigo-400 bg-indigo-500/5" : "border-zinc-700 hover:border-zinc-500"}`,
            children: [
              u
                ? e.jsx($, {
                    size: 30,
                    className: "mx-auto text-zinc-400 mb-3",
                  })
                : e.jsx(O, {
                    size: 30,
                    className: "mx-auto text-zinc-500 mb-3",
                  }),
              e.jsx("p", {
                className: "text-zinc-200 font-semibold",
                children: u
                  ? "Reading form fields…"
                  : "Drop your PDF form here",
              }),
              e.jsx("p", {
                className: "text-zinc-500 text-sm mt-1",
                children: "or click to choose a file",
              }),
              e.jsx("input", {
                ref: R,
                type: "file",
                accept: "application/pdf,.pdf",
                className: "hidden",
                onChange: (n) => {
                  const s = n.target.files?.[0];
                  s && T(s);
                },
              }),
            ],
          }),
          e.jsxs("div", {
            className: D,
            children: [
              e.jsx("p", {
                className: "text-[13px] text-zinc-300 font-semibold mb-1",
                children: "Why filled forms so often arrive blank",
              }),
              e.jsx("p", {
                className: "text-[12px] text-zinc-500 leading-relaxed",
                children:
                  'A filled form field stores your answer as editable field data, not as page content, and several PDF viewers do not render those values back — which is why a form you carefully completed can reach the recipient looking empty. Leaving "Lock the answers" switched on writes the values into the page itself, so what you filled in is what everyone sees, in every application, on every printout.',
              }),
            ],
          }),
        ],
      });
}
export { V as default };
