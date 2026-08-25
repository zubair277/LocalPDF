import { r as a, j as e } from "./react-vendor-Bc7KCos-.js";
const r = ({ children: t, className: p }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: p,
      children: t,
    }),
  d = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
        e.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }),
      ],
    }),
  B = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  z = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        e.jsx("path", {
          d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
        }),
      ],
    }),
  y = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("rect", {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
        }),
        e.jsx("circle", { cx: "9", cy: "9", r: "2" }),
        e.jsx("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
      ],
    }),
  k = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
        e.jsx("polyline", { points: "10 9 9 9 8 9" }),
      ],
    }),
  h = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  E = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("rect", {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      ],
    }),
  R = (t) =>
    e.jsxs(r, {
      ...t,
      children: [
        e.jsx("path", { d: "M12 20h9" }),
        e.jsx("path", {
          d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
        }),
      ],
    }),
  q = ({ showNotification: t, showDownloadDialog: p }) => {
    const [o, l] = a.useState(""),
      [c, g] = a.useState(!1),
      [N, P] = a.useState(!1),
      [b, S] = a.useState(""),
      [m, F] = a.useState(11),
      [x, M] = a.useState(1.4),
      [u, C] = a.useState(72),
      [f, D] = a.useState(72),
      [w, I] = a.useState(72),
      [j, T] = a.useState(72);
    a.useEffect(() => {}, []);
    const v = `# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
  * Item 2a
  * Item 2b

### Ordered

1. Item 1
2. Item 2
3. Item 3

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax.

## Blocks of code

\`\`\`javascript
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.

---

**Generated with ihatepdf**`,
      H = () => `
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6; color: #333; background: white;
        padding: 40px; max-width: 900px; margin: 0 auto;
      }
      h1 { font-size: 2.5em; font-weight: 700; margin: 1em 0 0.5em 0; padding-bottom: 0.3em; border-bottom: 2px solid #eee; color: #111; }
      h2 { font-size: 2em; font-weight: 600; margin: 0.8em 0 0.4em 0; padding-bottom: 0.3em; border-bottom: 1px solid #eee; color: #111; }
      h3 { font-size: 1.5em; font-weight: 600; margin: 0.7em 0 0.3em 0; color: #111; }
      h4 { font-size: 1.25em; font-weight: 600; margin: 0.6em 0 0.3em 0; color: #111; }
      h5 { font-size: 1.1em; font-weight: 600; margin: 0.5em 0 0.3em 0; color: #111; }
      h6 { font-size: 1em; font-weight: 600; margin: 0.5em 0 0.3em 0; color: #555; }
      p { margin: 0.8em 0; line-height: 1.6; }
      code { background: #f6f8fa; padding: 0.2em 0.4em; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 0.9em; color: #333; }
      pre { background: #f6f8fa; padding: 16px; border-radius: 6px; overflow-x: auto; margin: 1em 0; border: 1px solid #e1e4e8; }
      pre code { background: none; padding: 0; color: #333; }
      blockquote { border-left: 4px solid #ddd; padding: 0 1em; margin: 1em 0; color: #6a737d; }
      ul, ol { margin: 1em 0; padding-left: 2em; }
      li { margin: 0.3em 0; line-height: 1.6; }
      hr { border: none; border-top: 2px solid #e1e4e8; margin: 2em 0; }
      table { border-collapse: collapse; width: 100%; margin: 1em 0; }
      th, td { border: 1px solid #dfe2e5; padding: 8px 13px; text-align: left; }
      th { background: #f6f8fa; font-weight: 600; }
      tr:nth-child(even) { background: #f6f8fa; }
      a { color: #333; text-decoration: underline; }
      strong { font-weight: 600; }
      em { font-style: italic; }
      img { max-width: 100%; height: auto; margin: 1em 0; }
    </style>
  `,
      L = () => {
        if (!o.trim()) {
          t("Please enter some markdown text", "error");
          return;
        }
        if (typeof window.marked > "u") {
          t("Markdown library not loaded yet. Please wait...", "error");
          return;
        }
        try {
          const s = window.marked.parse(o),
            n = `<!DOCTYPE html><html><head><meta charset="UTF-8">${H()}</head><body>${s}</body></html>`;
          (S(n), P(!0), t("Preview generated!"));
        } catch {
          t("Failed to generate preview", "error");
        }
      },
      A = async () => {
        if (!o.trim()) {
          t("Please enter some markdown text", "error");
          return;
        }
        if (typeof window.marked > "u") {
          t("Markdown library not loaded. Please refresh the page.", "error");
          return;
        }
        g(!0);
        try {
          t("Converting markdown to HTML...");
          const s = window.marked.parse(o);
          t("Rendering PDF...");
          const n = window.open("", "_blank");
          if (!n)
            throw new Error(
              "Popup blocked. Please allow popups for this site.",
            );
          const i = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Markdown Document</title><style>
        @page { size: A4; margin: ${u}pt ${j}pt ${f}pt ${w}pt; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: ${m}pt; line-height: ${x}; color: #333; background: white; }
        h1 { font-size: 2.2em; font-weight: 700; margin: 0.8em 0 0.4em 0; page-break-after: avoid; color: #111; }
        h2 { font-size: 1.8em; font-weight: 600; margin: 0.7em 0 0.3em 0; page-break-after: avoid; color: #111; }
        h3 { font-size: 1.4em; font-weight: 600; margin: 0.6em 0 0.3em 0; page-break-after: avoid; color: #111; }
        h4, h5, h6 { font-size: 1.1em; font-weight: 600; margin: 0.5em 0 0.2em 0; page-break-after: avoid; color: #333; }
        p { margin: 0.6em 0; orphans: 3; widows: 3; }
        code { background: #f0f0f0; padding: 2px 4px; border-radius: 3px; font-family: 'Courier New', monospace; font-size: 0.9em; }
        pre { background: #f5f5f5; padding: 12px; border-radius: 4px; margin: 0.8em 0; page-break-inside: avoid; border: 1px solid #ddd; }
        pre code { background: none; padding: 0; font-size: 0.85em; }
        blockquote { border-left: 4px solid #ddd; padding: 0 1em; margin: 0.8em 0; color: #666; page-break-inside: avoid; }
        ul, ol { margin: 0.6em 0; padding-left: 2em; }
        li { margin: 0.3em 0; }
        hr { border: none; border-top: 1px solid #ddd; margin: 1.5em 0; }
        table { border-collapse: collapse; width: 100%; margin: 0.8em 0; page-break-inside: avoid; }
        th, td { border: 1px solid #ddd; padding: 6px 10px; text-align: left; }
        th { background: #f5f5f5; font-weight: 600; }
        a { color: #333; text-decoration: none; }
        strong { font-weight: 600; }
        em { font-style: italic; }
        img { max-width: 100%; height: auto; page-break-inside: avoid; }
        @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
      </style></head><body>${s}</body></html>`;
          (n.document.write(i),
            n.document.close(),
            (n.onload = () => {
              setTimeout(() => {
                (n.print(),
                  t("✅ Print dialog opened! Save as PDF to download."));
              }, 250);
            }));
        } catch (s) {
          t(`Failed to generate PDF: ${s.message}`, "error");
        } finally {
          g(!1);
        }
      };
    return e.jsxs("article", {
      className: "max-w-7xl mx-auto space-y-6 md:space-y-8 pb-10",
      itemScope: !0,
      itemType: "https://schema.org/SoftwareApplication",
      children: [
        e.jsx("meta", {
          itemProp: "name",
          content: "Markdown to PDF Converter - ihatepdf",
        }),
        e.jsx("meta", {
          itemProp: "applicationCategory",
          content: "BusinessApplication",
        }),
        e.jsx("meta", {
          itemProp: "operatingSystem",
          content: "Any (Web-based)",
        }),
        e.jsxs("header", {
          className: "text-center pt-2",
          children: [
            e.jsx("h1", {
              className:
                "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
              children: "Markdown to PDF Converter Free",
            }),
            e.jsxs("p", {
              className: "text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto",
              children: [
                "Convert markdown to beautifully formatted PDFs instantly.",
                " ",
                e.jsx("span", {
                  className: "text-zinc-200 font-semibold",
                  children: "100% private — no upload required.",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6",
          children: [
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 md:gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center",
                              children: e.jsx(d, {
                                className:
                                  "w-4 h-4 md:w-5 md:h-5 text-zinc-300",
                              }),
                            }),
                            e.jsx("h2", {
                              className:
                                "text-base md:text-xl font-semibold text-white",
                              children: "Markdown Editor",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: () => l(v),
                          className:
                            "px-2.5 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors border border-zinc-700 touch-manipulation",
                          children: "Load Sample",
                        }),
                      ],
                    }),
                    e.jsx("textarea", {
                      value: o,
                      onChange: (s) => l(s.target.value),
                      placeholder:
                        "Enter your markdown here... (supports all standard markdown syntax)",
                      className:
                        "w-full h-64 md:h-96 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 font-mono resize-none",
                    }),
                    e.jsxs("div", {
                      className: "mt-4 flex gap-2 md:gap-3",
                      children: [
                        e.jsxs("button", {
                          onClick: L,
                          disabled: c || !o.trim(),
                          className:
                            "flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium disabled:opacity-50 transition-colors flex items-center justify-center gap-2 text-sm border border-zinc-700 touch-manipulation active:scale-[0.98]",
                          children: [
                            e.jsx(y, { className: "w-4 h-4" }),
                            "Preview",
                          ],
                        }),
                        e.jsx("button", {
                          onClick: A,
                          disabled: c || !o.trim(),
                          className:
                            "flex-1 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-semibold disabled:opacity-50 transition-all flex items-center justify-center gap-2 text-sm touch-manipulation active:scale-[0.98]",
                          children: c
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                                  }),
                                  e.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Processing...",
                                  }),
                                  e.jsx("span", {
                                    className: "sm:hidden",
                                    children: "...",
                                  }),
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(B, { className: "w-4 h-4" }),
                                  "Save as PDF",
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-6",
                  children: [
                    e.jsxs("h3", {
                      className:
                        "text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2",
                      children: [
                        e.jsx(z, { className: "w-4 h-4" }),
                        "PDF Formatting Settings",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("label", {
                              className: "block text-xs text-zinc-500 mb-2",
                              children: ["Font Size: ", m, "pt"],
                            }),
                            e.jsx("input", {
                              type: "range",
                              min: "8",
                              max: "16",
                              value: m,
                              onChange: (s) => F(parseInt(s.target.value)),
                              className: "w-full accent-zinc-400",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-zinc-600 mt-1",
                              children: [
                                e.jsx("span", { children: "8pt" }),
                                e.jsx("span", { children: "16pt" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("label", {
                              className: "block text-xs text-zinc-500 mb-2",
                              children: ["Line Spacing: ", x],
                            }),
                            e.jsx("input", {
                              type: "range",
                              min: "1",
                              max: "2",
                              step: "0.1",
                              value: x,
                              onChange: (s) => M(parseFloat(s.target.value)),
                              className: "w-full accent-zinc-400",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-zinc-600 mt-1",
                              children: [
                                e.jsx("span", { children: "1.0" }),
                                e.jsx("span", { children: "2.0" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("label", {
                              className: "block text-xs text-zinc-500 mb-2",
                              children: "Page Margins (points)",
                            }),
                            e.jsx("div", {
                              className: "grid grid-cols-2 gap-2 md:gap-3",
                              children: [
                                { label: "Top", val: u, set: C },
                                { label: "Bottom", val: f, set: D },
                                { label: "Left", val: w, set: I },
                                { label: "Right", val: j, set: T },
                              ].map(({ label: s, val: n, set: i }) =>
                                e.jsxs(
                                  "div",
                                  {
                                    children: [
                                      e.jsxs("label", {
                                        className:
                                          "block text-xs text-zinc-600 mb-1",
                                        children: [s, ": ", n, "pt"],
                                      }),
                                      e.jsx("input", {
                                        type: "number",
                                        value: n,
                                        onChange: (_) =>
                                          i(parseInt(_.target.value) || 72),
                                        className:
                                          "w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-2 text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600",
                                      }),
                                    ],
                                  },
                                  s,
                                ),
                              ),
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
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 shadow-lg",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2",
                  children: [
                    e.jsx(y, { className: "w-4 h-4" }),
                    "Live Preview",
                  ],
                }),
                N && b
                  ? e.jsx("iframe", {
                      srcDoc: b,
                      className:
                        "w-full bg-white rounded-lg border border-zinc-700",
                      style: {
                        height: "calc(100vh - 200px)",
                        minHeight: "400px",
                        border: "1px solid #3f3f46",
                      },
                      sandbox: "allow-same-origin",
                      title: "Markdown Preview",
                    })
                  : e.jsx("div", {
                      className:
                        "flex items-center justify-center text-zinc-600 bg-zinc-950 rounded-lg border border-zinc-800",
                      style: { minHeight: "320px" },
                      children: e.jsxs("div", {
                        className: "text-center p-6 md:p-8",
                        children: [
                          e.jsx(k, {
                            className:
                              "w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-20",
                          }),
                          e.jsx("p", {
                            className: "text-sm mb-2",
                            children: "No preview yet",
                          }),
                          e.jsx("p", {
                            className: "text-xs opacity-60",
                            children: "Write markdown and click Preview",
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          ],
        }),
        e.jsxs("section", {
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-4",
              children: "Why Use Our Markdown to PDF Converter?",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
              children: [
                {
                  Icon: d,
                  title: "Live Preview",
                  desc: "See your markdown rendered in real-time before converting to PDF. WYSIWYG experience for perfect results.",
                },
                {
                  Icon: h,
                  title: "Full Markdown Support",
                  desc: "Supports all standard markdown: headers, lists, tables, code blocks, blockquotes, images, and links.",
                },
                {
                  Icon: z,
                  title: "Customizable Styling",
                  desc: "Adjust font size, line spacing, and page margins to match your document requirements perfectly.",
                },
                {
                  Icon: E,
                  title: "100% Private & Secure",
                  desc: "All processing happens in your browser. Your markdown content never leaves your device — guaranteed privacy.",
                },
              ].map(({ Icon: s, title: n, desc: i }) =>
                e.jsx(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-5 hover:border-zinc-700 transition-colors",
                    children: e.jsxs("div", {
                      className: "flex items-start gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-9 h-9 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center flex-shrink-0",
                          children: e.jsx(s, {
                            className: "w-4 h-4 md:w-5 md:h-5 text-zinc-300",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className:
                                "font-semibold text-white mb-1 text-sm md:text-base",
                              children: n,
                            }),
                            e.jsx("p", {
                              className: "text-xs md:text-sm text-zinc-400",
                              children: i,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("section", {
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-4",
              children: "How to Convert Markdown to PDF",
            }),
            e.jsx("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-6",
              children: e.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6",
                children: [
                  [
                    "Write or Paste Markdown",
                    'Type your markdown in the editor or paste existing content. Click "Load Sample" to see example syntax.',
                  ],
                  [
                    "Preview Your Document",
                    'Click "Preview" to see how your markdown will look when converted. Make any adjustments needed.',
                  ],
                  [
                    "Customize PDF Settings",
                    "Adjust font size, line spacing, and page margins in the settings panel below the editor.",
                  ],
                  [
                    "Save as PDF",
                    'Click "Save as PDF" to open the print dialog. Choose "Save as PDF" as your printer to download.',
                  ],
                ].map(([s, n], i) =>
                  e.jsxs(
                    "div",
                    {
                      className:
                        "flex gap-3 md:flex-col md:text-center md:items-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-8 h-8 md:w-10 md:h-10 bg-zinc-700 border border-zinc-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base",
                          children: i + 1,
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className:
                                "font-semibold text-white mb-1 text-sm",
                              children: s,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-zinc-400",
                              children: n,
                            }),
                          ],
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            }),
          ],
        }),
        e.jsxs("section", {
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-4",
              children: "Supported Markdown Syntax",
            }),
            e.jsx("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-6",
              children: e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-semibold text-white mb-3 text-sm md:text-base",
                        children: "Text Formatting",
                      }),
                      e.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          ["Headers", "# H1 through ###### H6"],
                          ["Bold", "**text** or __text__"],
                          ["Italic", "*text* or _text_"],
                          ["Strikethrough", "~~text~~"],
                          ["Inline code", "`code`"],
                        ].map(([s, n]) =>
                          e.jsxs(
                            "li",
                            {
                              className:
                                "flex items-start gap-2 text-sm text-zinc-400",
                              children: [
                                e.jsx(h, {
                                  className:
                                    "w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0",
                                }),
                                e.jsxs("span", {
                                  children: [
                                    e.jsx("strong", {
                                      className: "text-zinc-300",
                                      children: s,
                                    }),
                                    " —",
                                    " ",
                                    n,
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className:
                          "font-semibold text-white mb-3 text-sm md:text-base",
                        children: "Content Elements",
                      }),
                      e.jsx("ul", {
                        className: "space-y-2",
                        children: [
                          ["Links", "[text](url)"],
                          ["Images", "![alt](url)"],
                          ["Lists", "Ordered and unordered"],
                          ["Blockquotes", "> quote"],
                          ["Code blocks", "```language"],
                          ["Tables", "Full support"],
                          ["Horizontal rules", "---"],
                        ].map(([s, n]) =>
                          e.jsxs(
                            "li",
                            {
                              className:
                                "flex items-start gap-2 text-sm text-zinc-400",
                              children: [
                                e.jsx(h, {
                                  className:
                                    "w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0",
                                }),
                                e.jsxs("span", {
                                  children: [
                                    e.jsx("strong", {
                                      className: "text-zinc-300",
                                      children: s,
                                    }),
                                    " —",
                                    " ",
                                    n,
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsxs("section", {
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-4",
              children: "Common Use Cases",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4",
              children: [
                {
                  Icon: k,
                  title: "Documentation",
                  desc: "Convert README files, technical docs, and API documentation from markdown to professional PDF format.",
                },
                {
                  Icon: d,
                  title: "Blog Posts & Articles",
                  desc: "Save blog posts and articles written in markdown as PDFs for offline reading or archiving.",
                },
                {
                  Icon: R,
                  title: "Reports & Notes",
                  desc: "Create formatted reports, meeting notes, or study guides from markdown and export as PDFs.",
                },
              ].map(({ Icon: s, title: n, desc: i }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-lg p-4 md:p-5 hover:border-zinc-700 transition-colors",
                    children: [
                      e.jsxs("h3", {
                        className:
                          "font-semibold text-white mb-2 flex items-center gap-2 text-sm md:text-base",
                        children: [
                          e.jsx(s, { className: "w-4 h-4 text-zinc-400" }),
                          n,
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs md:text-sm text-zinc-400",
                        children: i,
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("section", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 text-center",
          children: [
            e.jsx("h2", {
              className: "text-lg md:text-xl font-bold text-white mb-2",
              children: "Ready to Convert Markdown to PDF?",
            }),
            e.jsx("p", {
              className: "text-zinc-400 text-sm mb-4",
              children:
                "Professional PDF documents from your markdown. Free, instant, and private.",
            }),
            e.jsxs("button", {
              onClick: () => l(v),
              className:
                "inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-semibold cursor-pointer transition-all text-sm touch-manipulation active:scale-[0.98]",
              children: [
                e.jsx(d, { className: "w-4 h-4" }),
                "Try Sample Markdown",
              ],
            }),
          ],
        }),
      ],
    });
  };
export { q as default };
