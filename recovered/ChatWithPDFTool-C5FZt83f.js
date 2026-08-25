import { r as i, j as e } from "./react-vendor-Bc7KCos-.js";
const de = (t) =>
    new Promise((r, z) => {
      const p = new FileReader();
      ((p.onload = () => r(p.result)), (p.onerror = z), p.readAsArrayBuffer(t));
    }),
  E = (t) =>
    t
      ? t
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>")
          .replace(/`(.+?)`/g, "<code>$1</code>")
          .replace(/^### (.+)$/gm, "<h3>$1</h3>")
          .replace(/^## (.+)$/gm, "<h2>$1</h2>")
          .replace(/^# (.+)$/gm, "<h1>$1</h1>")
          .replace(/^\- (.+)$/gm, "<li>$1</li>")
          .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
          .replace(/\n\n/g, "<br/><br/>")
          .replace(/\n/g, "<br/>")
      : "",
  x = ({ children: t, className: r }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: r,
      children: t,
    }),
  se = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("circle", { cx: "7.5", cy: "15.5", r: "5.5" }),
        e.jsx("path", { d: "m21 2-9.6 9.6" }),
        e.jsx("path", { d: "m15.5 7.5 3 3L22 7l-3-3" }),
      ],
    }),
  k = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", { d: "M12 8V4H8" }),
        e.jsx("rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }),
        e.jsx("path", { d: "M2 14h2" }),
        e.jsx("path", { d: "M20 14h2" }),
        e.jsx("path", { d: "M15 13v2" }),
        e.jsx("path", { d: "M9 13v2" }),
      ],
    }),
  te = (t) =>
    e.jsx(x, {
      ...t,
      children: e.jsx("path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      }),
    }),
  ne = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
        e.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }),
      ],
    }),
  ae = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  T = (t) =>
    e.jsxs(x, {
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
  V = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", {
          d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
        }),
        e.jsx("path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" }),
        e.jsx("path", { d: "M15 2v5h5" }),
      ],
    }),
  xe = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  le = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  me = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("polyline", { points: "3 6 5 6 21 6" }),
        e.jsx("path", {
          d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        }),
        e.jsx("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
        e.jsx("line", { x1: "14", y1: "11", x2: "14", y2: "17" }),
      ],
    }),
  he = (t) =>
    e.jsxs(x, {
      ...t,
      children: [
        e.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        e.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        e.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
      ],
    }),
  pe = ({ showNotification: t }) => {
    const [r, z] = i.useState(""),
      [p, D] = i.useState(!1),
      [n, O] = i.useState([]),
      [R, B] = i.useState({}),
      [d, P] = i.useState(null),
      [$, W] = i.useState(!1),
      [S, C] = i.useState([]),
      [f, A] = i.useState(""),
      [y, Y] = i.useState(!1),
      [v, I] = i.useState(""),
      [q, _] = i.useState(!1),
      [ie, N] = i.useState(!1),
      [m, re] = i.useState(!1),
      [L, j] = i.useState("api-key"),
      K = i.useRef(null);
    (i.useEffect(() => {
      const s = () => re(window.innerWidth < 768);
      return (
        s(),
        window.addEventListener("resize", s),
        () => window.removeEventListener("resize", s)
      );
    }, []),
      i.useEffect(() => {
        const s = localStorage.getItem("gemini_api_key");
        s && (z(s), D(!0), m && j("upload"));
      }, [m]),
      i.useEffect(() => {
        K.current?.scrollIntoView({ behavior: "smooth" });
      }, [S]));
    const J = () => {
        if (!r.trim()) {
          t("Please enter a valid API key", "error");
          return;
        }
        (p
          ? localStorage.setItem("gemini_api_key", r)
          : localStorage.removeItem("gemini_api_key"),
          m
            ? (j("upload"), t("API key saved! Now upload your PDFs"))
            : t("API key saved successfully"));
      },
      Q = () => {
        (z(""),
          D(!1),
          localStorage.removeItem("gemini_api_key"),
          m && j("api-key"),
          t("API key cleared"));
      },
      X = async (s) => {
        const l = Array.from(s.target.files);
        if (n.length + l.length > 10) {
          t("Maximum 10 PDFs allowed at once", "error");
          return;
        }
        const o = l.filter((a) => a.type === "application/pdf");
        (o.length !== l.length &&
          t("Some files were not PDFs and were skipped", "error"),
          W(!0));
        for (const a of o) {
          const c = `pdf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          try {
            const g = await de(a),
              b = await window.pdfjsLib.getDocument({ data: g }).promise;
            let h = "";
            const w = b.numPages;
            t(`Extracting "${a.name}" (${w} pages)...`);
            for (let u = 1; u <= w; u++) {
              const F = (await (await b.getPage(u)).getTextContent()).items
                .map((M) => M.str)
                .join(" ");
              h += `

--- Page ${u} ---
${F}`;
            }
            if (!h.trim()) {
              t(`No text found in "${a.name}"`, "error");
              continue;
            }
            (O((u) => [
              ...u,
              {
                id: c,
                name: a.name,
                size: a.size,
                pageCount: w,
                uploadedAt: Date.now(),
              },
            ]),
              B((u) => ({ ...u, [c]: h })),
              n.length === 0 &&
                (P(c),
                C([
                  {
                    role: "assistant",
                    content: `I've analyzed "${a.name}" (${w} pages). What would you like to know?`,
                    timestamp: Date.now(),
                  },
                ])),
              t(`"${a.name}" loaded successfully`));
          } catch (g) {
            (console.error("PDF extraction error:", g),
              t(`Failed to extract "${a.name}"`, "error"));
          }
        }
        (W(!1),
          m &&
            n.length === 0 &&
            o.length > 0 &&
            setTimeout(() => j("chat"), 500));
      },
      H = async () => {
        if (!f.trim()) return;
        if (!r.trim()) {
          (t("Please enter your Gemini API key first", "error"),
            m && j("api-key"));
          return;
        }
        let s = "",
          l = "";
        if (d) {
          const a = n.find((c) => c.id === d);
          ((s = R[d]), (l = `PDF: "${a.name}"`));
        } else
          ((s = Object.entries(R).map(
            ([a, c]) => `

=== PDF: ${n.find((b) => b.id === a).name} ===
${c}`,
          ).join(`

`)),
            (l = `All ${n.length} PDFs`));
        if (!s) {
          t("Please upload at least one PDF first", "error");
          return;
        }
        const o = {
          role: "user",
          content: f,
          timestamp: Date.now(),
          context: l,
        };
        (C((a) => [...a, o]), A(""), Y(!0), _(!0), I(""));
        try {
          const a = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=${r}&alt=sse`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [
                  {
                    parts: [
                      {
                        text: `You are analyzing ${l}. Here is the content:

${s}

---

User question: ${f}

Provide a detailed answer based on the PDF content.`,
                      },
                    ],
                  },
                ],
                generationConfig: {
                  temperature: 0.7,
                  topK: 40,
                  topP: 0.95,
                  maxOutputTokens: 2048,
                },
              }),
            },
          );
          if (!a.ok) {
            const h = await a.json();
            throw new Error(h.error?.message || `API error: ${a.status}`);
          }
          const c = a.body.getReader(),
            g = new TextDecoder();
          let b = "";
          for (;;) {
            const { done: h, value: w } = await c.read();
            if (h) break;
            const ee = g.decode(w).split(`
`);
            for (const U of ee)
              if (U.startsWith("data: "))
                try {
                  const M = JSON.parse(U.slice(6)).candidates?.[0]?.content
                    ?.parts?.[0]?.text;
                  M && ((b += M), I(b));
                } catch (F) {}
          }
          (C((h) => [
            ...h,
            {
              role: "assistant",
              content: b || "Sorry, I couldn't generate a response.",
              timestamp: Date.now(),
            },
          ]),
            I(""),
            _(!1));
        } catch (a) {
          console.error("Gemini API error:", a);
          let c = "Failed to get response from AI";
          (a.message.includes("API_KEY_INVALID")
            ? ((c = "Invalid API key. Please check your Gemini API key."),
              m && j("api-key"))
            : a.message.includes("QUOTA_EXCEEDED")
              ? (c = "API quota exceeded. Please check your usage limits.")
              : a.message && (c = a.message),
            t(c, "error"),
            C((g) => [
              ...g,
              {
                role: "assistant",
                content: `❌ Error: ${c}`,
                timestamp: Date.now(),
                isError: !0,
              },
            ]),
            I(""),
            _(!1));
        } finally {
          Y(!1);
        }
      },
      Z = (s) => {
        s.key === "Enter" && !s.shiftKey && (s.preventDefault(), H());
      },
      ce = () =>
        e.jsx("div", {
          className: "flex gap-1 mt-2",
          children: [0, 0.2, 0.4].map((s, l) =>
            e.jsx(
              "div",
              {
                className: "w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse",
                style: { animationDelay: `${s}s` },
              },
              l,
            ),
          ),
        }),
      oe = ({ size: s = "sm" }) =>
        e.jsx("div", {
          className: `flex gap-${s === "sm" ? "1.5" : "2"}`,
          children: [0, s === "sm" ? 0.2 : 0.15, s === "sm" ? 0.4 : 0.3].map(
            (l, o) =>
              e.jsx(
                "div",
                {
                  className: `${s === "sm" ? "w-1.5 h-1.5" : "w-2.5 h-2.5"} bg-zinc-400 rounded-full animate-bounce`,
                  style: { animationDelay: `${l}s` },
                },
                o,
              ),
          ),
        }),
      G = ({ size: s = "md" }) =>
        e.jsx("div", {
          className: `${s === "sm" ? "w-8 h-8" : "w-9 h-9 md:w-8 md:h-8"} bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0`,
          children: e.jsx(k, { className: "w-4 h-4 text-zinc-300" }),
        });
    return m && L === "api-key"
      ? e.jsx("div", {
          className:
            "h-full flex flex-col items-center justify-center p-6 bg-zinc-950",
          children: e.jsxs("div", {
            className:
              "w-full max-w-md space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
            children: [
              e.jsxs("div", {
                className: "text-center",
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center mx-auto mb-4",
                    children: e.jsx(se, {
                      className: "w-10 h-10 text-zinc-300",
                    }),
                  }),
                  e.jsx("h2", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: "Enter API Key",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-zinc-400",
                    children:
                      "You'll need a Google Gemini API key to chat with your PDFs",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsx("input", {
                    type: "password",
                    value: r,
                    onChange: (s) => z(s.target.value),
                    placeholder: "Paste your Gemini API key...",
                    className:
                      "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all",
                    autoFocus: !0,
                  }),
                  e.jsx("div", {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-3",
                    children: e.jsxs("label", {
                      className: "flex items-start gap-2 cursor-pointer group",
                      children: [
                        e.jsx("input", {
                          type: "checkbox",
                          checked: p,
                          onChange: (s) => D(s.target.checked),
                          className: "w-4 h-4 rounded mt-0.5",
                        }),
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors block",
                              children: "Save API key locally on this device",
                            }),
                            e.jsx("span", {
                              className:
                                "text-[10px] text-zinc-600 mt-0.5 block",
                              children:
                                "Your key is stored securely in your browser",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx("button", {
                    onClick: J,
                    disabled: !r.trim(),
                    className:
                      "w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-[0.98]",
                    children: "Continue",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                children: [
                  e.jsx("p", {
                    className: "text-xs text-zinc-500 mb-2",
                    children: "Don't have an API key?",
                  }),
                  e.jsx("a", {
                    href: "https://makersuite.google.com/app/apikey",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-sm text-zinc-300 hover:text-white underline flex items-center gap-1",
                    children: "Get free API key from Google AI Studio →",
                  }),
                ],
              }),
            ],
          }),
        })
      : m && L === "upload"
        ? e.jsx("div", {
            className:
              "h-full flex flex-col items-center justify-center p-6 bg-zinc-950",
            children: e.jsxs("div", {
              className:
                "w-full max-w-md space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",
              children: [
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center mx-auto mb-4",
                      children: e.jsx(V, {
                        className: "w-10 h-10 text-zinc-300",
                      }),
                    }),
                    e.jsx("h2", {
                      className: "text-2xl font-bold text-white mb-2",
                      children: "Upload PDFs",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-zinc-400",
                      children: "Upload up to 10 PDF documents to analyze",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("input", {
                      type: "file",
                      accept: "application/pdf",
                      onChange: X,
                      className: "hidden",
                      id: "mobile-pdf-upload",
                      disabled: $ || n.length >= 10,
                      multiple: !0,
                    }),
                    e.jsxs("label", {
                      htmlFor: "mobile-pdf-upload",
                      className: `flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl transition-all cursor-pointer ${$ || n.length >= 10 ? "border-zinc-800 bg-zinc-900/50 cursor-not-allowed" : "border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-600"}`,
                      children: [
                        e.jsx(ae, {
                          className: "w-12 h-12 text-zinc-600 mb-3",
                        }),
                        e.jsx("span", {
                          className: "text-sm font-medium text-zinc-400",
                          children: $
                            ? "Processing..."
                            : n.length >= 10
                              ? "Max reached"
                              : "Tap to select PDFs",
                        }),
                        e.jsxs("span", {
                          className: "text-xs text-zinc-600 mt-1",
                          children: [n.length, "/10 uploaded"],
                        }),
                      ],
                    }),
                    n.length > 0 &&
                      e.jsx("div", {
                        className: "space-y-2 max-h-64 overflow-y-auto",
                        children: n.map((s) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3",
                              children: [
                                e.jsx(T, {
                                  className:
                                    "w-5 h-5 text-zinc-400 flex-shrink-0",
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-sm font-medium text-white truncate",
                                      children: s.name,
                                    }),
                                    e.jsxs("p", {
                                      className: "text-xs text-zinc-500",
                                      children: [
                                        (s.size / 1024 / 1024).toFixed(2),
                                        " MB •",
                                        " ",
                                        s.pageCount,
                                        " pages",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  "aria-label": "Delete",
                                  onClick: () => {
                                    (O((l) => l.filter((o) => o.id !== s.id)),
                                      B((l) => {
                                        const o = { ...l };
                                        return (delete o[s.id], o);
                                      }),
                                      d === s.id && P(n[0]?.id || null));
                                  },
                                  className:
                                    "p-1.5 hover:bg-zinc-700 rounded-lg transition-all",
                                  children: e.jsx(me, {
                                    className: "w-4 h-4 text-zinc-500",
                                  }),
                                }),
                              ],
                            },
                            s.id,
                          ),
                        ),
                      }),
                    n.length > 0 &&
                      e.jsxs("button", {
                        onClick: () => j("chat"),
                        className:
                          "w-full py-3.5 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold rounded-xl transition-all touch-manipulation active:scale-[0.98]",
                        children: [
                          "Start Chatting (",
                          n.length,
                          " PDF",
                          n.length > 1 ? "s" : "",
                          ")",
                        ],
                      }),
                    e.jsx("button", {
                      onClick: Q,
                      className:
                        "w-full py-2.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors",
                      children: "← Change API Key",
                    }),
                  ],
                }),
              ],
            }),
          })
        : m && L === "chat"
          ? e.jsxs("div", {
              className: "h-full flex flex-col bg-zinc-950",
              children: [
                e.jsxs("div", {
                  className:
                    "flex-shrink-0 bg-zinc-900 border-b border-zinc-800 p-4 flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3 flex-1 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-11 h-11 bg-zinc-700 rounded-2xl flex items-center justify-center flex-shrink-0",
                              children: e.jsx(k, {
                                className: "w-5 h-5 text-zinc-300",
                              }),
                            }),
                            e.jsx("div", {
                              className:
                                "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-zinc-400 rounded-full border-2 border-zinc-900",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "flex-1 min-w-0",
                          children: e.jsx("p", {
                            className:
                              "text-sm font-semibold text-white truncate",
                            children: d
                              ? n.find((s) => s.id === d)?.name
                              : `${n.length} Document${n.length > 1 ? "s" : ""}`,
                          }),
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      "aria-label": "Open menu",
                      onClick: () => N(!0),
                      className:
                        "p-2.5 hover:bg-zinc-800 rounded-xl transition-all flex-shrink-0",
                      children: e.jsx(he, {
                        className: "w-5 h-5 text-zinc-400",
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4 space-y-4",
                  children: [
                    S.length === 0
                      ? e.jsxs("div", {
                          className:
                            "h-full flex flex-col items-center justify-center text-center px-6 py-8",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-20 h-20 bg-zinc-800 border border-zinc-700 rounded-3xl flex items-center justify-center mb-6",
                              children: e.jsx(te, {
                                className: "w-10 h-10 text-zinc-400",
                              }),
                            }),
                            e.jsx("h3", {
                              className: "text-xl font-bold text-white mb-2",
                              children: "Ready to Analyze",
                            }),
                            e.jsxs("p", {
                              className: "text-sm text-zinc-400 mb-8 max-w-xs",
                              children: [
                                "Ask anything about your ",
                                n.length,
                                " document",
                                n.length > 1 ? "s" : "",
                                ". I'll provide detailed insights.",
                              ],
                            }),
                            e.jsx("div", {
                              className: "w-full space-y-2.5 max-w-sm",
                              children: [
                                {
                                  emoji: "💡",
                                  title: "Main topic",
                                  sub: "What is this about?",
                                  msg: "What is this document about?",
                                },
                                {
                                  emoji: "📋",
                                  title: "Quick summary",
                                  sub: "Get key points",
                                  msg: "Summarize the key points",
                                },
                                {
                                  emoji: "🔍",
                                  title: "Search content",
                                  sub: "Find specific details",
                                  msg: "Find specific information",
                                },
                              ].map(({ emoji: s, title: l, sub: o, msg: a }) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => A(a),
                                    className:
                                      "w-full p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-zinc-200 text-left hover:border-zinc-600 transition-all touch-manipulation active:scale-[0.98] group",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-xl",
                                          children: s,
                                        }),
                                        e.jsxs("div", {
                                          className: "flex-1",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-medium group-hover:text-white transition-colors",
                                              children: l,
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-zinc-500 mt-0.5",
                                              children: o,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  l,
                                ),
                              ),
                            }),
                          ],
                        })
                      : S.map((s, l) =>
                          e.jsxs(
                            "div",
                            {
                              className: `flex gap-3 ${s.role === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-2 fade-in duration-300`,
                              children: [
                                s.role === "assistant" && e.jsx(G, {}),
                                e.jsxs("div", {
                                  className: `max-w-[80%] rounded-2xl p-4 ${s.role === "user" ? "bg-zinc-700 text-white" : s.isError ? "bg-zinc-900 border border-zinc-700 text-zinc-400" : "bg-zinc-900 border border-zinc-800 text-zinc-100"}`,
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-[15px] leading-relaxed font-normal prose prose-invert max-w-none",
                                      dangerouslySetInnerHTML: {
                                        __html: E(s.content),
                                      },
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[11px] opacity-40 mt-2.5 font-medium",
                                      children: new Date(
                                        s.timestamp,
                                      ).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }),
                                    }),
                                  ],
                                }),
                                s.role === "user" &&
                                  e.jsx("div", {
                                    className:
                                      "w-9 h-9 bg-zinc-700 rounded-2xl flex items-center justify-center flex-shrink-0",
                                    children: e.jsx("span", {
                                      className:
                                        "text-xs font-bold text-zinc-300",
                                      children: "U",
                                    }),
                                  }),
                              ],
                            },
                            l,
                          ),
                        ),
                    q &&
                      v &&
                      e.jsxs("div", {
                        className:
                          "flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-300",
                        children: [
                          e.jsx(G, {}),
                          e.jsxs("div", {
                            className:
                              "max-w-[80%] bg-zinc-900 border border-zinc-800 rounded-2xl p-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-[15px] leading-relaxed font-normal prose prose-invert max-w-none",
                                dangerouslySetInnerHTML: { __html: E(v) },
                              }),
                              e.jsx(ce, {}),
                            ],
                          }),
                        ],
                      }),
                    y &&
                      !v &&
                      e.jsxs("div", {
                        className:
                          "flex gap-3 animate-in slide-in-from-bottom-2 fade-in duration-300",
                        children: [
                          e.jsx(G, {}),
                          e.jsxs("div", {
                            className:
                              "bg-zinc-900 border border-zinc-800 rounded-2xl p-4",
                            children: [
                              e.jsx(oe, {}),
                              e.jsx("p", {
                                className:
                                  "text-[10px] text-zinc-500 mt-2 font-medium",
                                children: "Analyzing...",
                              }),
                            ],
                          }),
                        ],
                      }),
                    e.jsx("div", { ref: K }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "flex-shrink-0 p-4 bg-zinc-900 border-t border-zinc-800",
                  children: e.jsxs("div", {
                    className: "flex gap-2.5 items-end",
                    children: [
                      e.jsxs("div", {
                        className: "flex-1 relative",
                        children: [
                          e.jsx("textarea", {
                            value: f,
                            onChange: (s) => {
                              (A(s.target.value),
                                (s.target.style.height = "auto"),
                                (s.target.style.height =
                                  Math.min(s.target.scrollHeight, 100) + "px"));
                            },
                            onKeyPress: Z,
                            placeholder: "Ask anything about your PDFs...",
                            disabled: y,
                            rows: 1,
                            className:
                              "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-3 text-[15px] text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 resize-none disabled:opacity-50 transition-all",
                            style: { minHeight: "48px", maxHeight: "100px" },
                          }),
                          f.trim() &&
                            !y &&
                            e.jsx("div", {
                              className:
                                "absolute right-3 bottom-3.5 text-[10px] text-zinc-600 font-medium",
                              children: "Press Enter",
                            }),
                        ],
                      }),
                      e.jsx("button", {
                        "aria-label": "Send",
                        onClick: H,
                        disabled: y || !f.trim(),
                        className:
                          "p-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-[0.98] flex items-center justify-center",
                        children: e.jsx(ne, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                }),
                ie &&
                  e.jsxs("div", {
                    className: "fixed inset-0 z-50",
                    children: [
                      e.jsx("div", {
                        className: "absolute inset-0 bg-black/60",
                        onClick: () => N(!1),
                      }),
                      e.jsxs("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 max-h-[70vh] bg-zinc-900 border-t border-zinc-800 rounded-t-3xl p-6",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(V, {
                                    className: "w-5 h-5 text-zinc-400",
                                  }),
                                  e.jsx("h3", {
                                    className: "text-lg font-bold text-white",
                                    children: "Documents",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400",
                                    children: n.length,
                                  }),
                                ],
                              }),
                              e.jsx("button", {
                                "aria-label": "Close",
                                onClick: () => N(!1),
                                className:
                                  "p-2 hover:bg-zinc-800 rounded-lg transition-all",
                                children: e.jsx(le, {
                                  className: "w-5 h-5 text-zinc-400",
                                }),
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "space-y-2 max-h-60 overflow-y-auto mb-4",
                            children: n.map((s) =>
                              e.jsx(
                                "div",
                                {
                                  onClick: () => {
                                    (P(s.id), N(!1));
                                  },
                                  className: `p-3 rounded-xl border transition-all cursor-pointer ${d === s.id ? "bg-zinc-700 border-zinc-600" : "bg-zinc-800 border-zinc-700"}`,
                                  children: e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx(T, {
                                        className: `w-5 h-5 ${d === s.id ? "text-zinc-200" : "text-zinc-500"}`,
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-sm font-medium text-white truncate",
                                            children: s.name,
                                          }),
                                          e.jsxs("p", {
                                            className: "text-xs text-zinc-500",
                                            children: [s.pageCount, " pages"],
                                          }),
                                        ],
                                      }),
                                      d === s.id &&
                                        e.jsx(xe, {
                                          className:
                                            "w-5 h-5 text-zinc-300 flex-shrink-0",
                                        }),
                                    ],
                                  }),
                                },
                                s.id,
                              ),
                            ),
                          }),
                          n.length > 1 &&
                            e.jsxs("button", {
                              onClick: () => {
                                (P(null), N(!1));
                              },
                              className: `w-full py-3 px-4 rounded-xl text-sm font-medium transition-all border ${d === null ? "bg-zinc-700 border-zinc-600 text-zinc-200" : "bg-zinc-800 border-zinc-700 text-zinc-400"}`,
                              children: ["Search All ", n.length, " PDFs"],
                            }),
                          e.jsx("button", {
                            onClick: () => {
                              (j("upload"), N(!1));
                            },
                            className:
                              "w-full mt-3 py-2.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors",
                            children: "+ Add More PDFs",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          : e.jsxs("div", {
              className:
                "h-full flex flex-col md:flex-row gap-4 max-w-7xl mx-auto",
              children: [
                e.jsx("div", {
                  className: "hidden md:block w-80 flex-shrink-0",
                  children: e.jsxs("div", {
                    className: "h-full flex flex-col gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center",
                                children: e.jsx(se, {
                                  className: "w-5 h-5 text-zinc-300",
                                }),
                              }),
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "text-sm font-semibold text-white",
                                    children: "API Key",
                                  }),
                                  e.jsx("p", {
                                    className: "text-xs text-zinc-500",
                                    children: r ? "Configured" : "Not set",
                                  }),
                                ],
                              }),
                              r &&
                                e.jsx("button", {
                                  "aria-label": "Close",
                                  onClick: Q,
                                  className:
                                    "p-2 hover:bg-zinc-800 rounded-lg transition-all",
                                  children: e.jsx(le, {
                                    className: "w-4 h-4 text-zinc-400",
                                  }),
                                }),
                            ],
                          }),
                          !r &&
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsx("input", {
                                  type: "password",
                                  value: r,
                                  onChange: (s) => z(s.target.value),
                                  placeholder: "Enter Gemini API key...",
                                  className:
                                    "w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-all",
                                }),
                                e.jsxs("label", {
                                  className:
                                    "flex items-center gap-2 cursor-pointer",
                                  children: [
                                    e.jsx("input", {
                                      type: "checkbox",
                                      checked: p,
                                      onChange: (s) => D(s.target.checked),
                                      className: "w-4 h-4 rounded",
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs text-zinc-400",
                                      children: "Remember key",
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  onClick: J,
                                  disabled: !r.trim(),
                                  className:
                                    "w-full py-2 bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-semibold rounded-xl disabled:opacity-40 transition-all touch-manipulation active:scale-[0.98]",
                                  children: "Save Key",
                                }),
                                e.jsx("a", {
                                  href: "https://makersuite.google.com/app/apikey",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "block text-xs text-zinc-400 hover:text-zinc-200 underline",
                                  children: "Get API key →",
                                }),
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col min-h-0",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center justify-between mb-4",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(V, {
                                  className: "w-4 h-4 text-zinc-400",
                                }),
                                e.jsx("h4", {
                                  className: "text-sm font-semibold text-white",
                                  children: "PDFs",
                                }),
                                e.jsxs("span", {
                                  className:
                                    "px-2 py-0.5 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400",
                                  children: [n.length, "/10"],
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className: "mb-4",
                            children: [
                              e.jsx("input", {
                                type: "file",
                                accept: "application/pdf",
                                onChange: X,
                                className: "hidden",
                                id: "desktop-pdf-upload",
                                disabled: !r || $ || n.length >= 10,
                                multiple: !0,
                              }),
                              e.jsxs("label", {
                                htmlFor: "desktop-pdf-upload",
                                className: `flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition-all cursor-pointer ${!r || $ || n.length >= 10 ? "opacity-40 cursor-not-allowed" : ""}`,
                                children: [
                                  e.jsx(ae, {
                                    className: "w-4 h-4 text-zinc-400",
                                  }),
                                  e.jsx("span", {
                                    className: "text-sm text-zinc-300",
                                    children: "Upload PDFs",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "flex-1 overflow-y-auto space-y-2",
                            children:
                              n.length === 0
                                ? e.jsxs("div", {
                                    className:
                                      "h-full flex flex-col items-center justify-center text-center p-6",
                                    children: [
                                      e.jsx(T, {
                                        className:
                                          "w-12 h-12 text-zinc-700 mb-3",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm text-zinc-500",
                                        children: "No PDFs uploaded",
                                      }),
                                    ],
                                  })
                                : n.map((s) =>
                                    e.jsx(
                                      "div",
                                      {
                                        onClick: () => P(s.id),
                                        className: `p-3 rounded-xl border transition-all cursor-pointer ${d === s.id ? "bg-zinc-700 border-zinc-600" : "bg-zinc-800 border-zinc-700 hover:bg-zinc-750"}`,
                                        children: e.jsxs("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            e.jsx(T, {
                                              className: `w-5 h-5 ${d === s.id ? "text-zinc-200" : "text-zinc-500"}`,
                                            }),
                                            e.jsxs("div", {
                                              className: "flex-1 min-w-0",
                                              children: [
                                                e.jsx("p", {
                                                  className:
                                                    "text-sm font-medium text-white truncate",
                                                  children: s.name,
                                                }),
                                                e.jsxs("p", {
                                                  className:
                                                    "text-xs text-zinc-500",
                                                  children: [
                                                    s.pageCount,
                                                    " pages",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      },
                                      s.id,
                                    ),
                                  ),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "flex-1 flex flex-col min-h-0",
                  children: [
                    e.jsx("div", {
                      className:
                        "bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4",
                      children: e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center",
                            children: e.jsx(k, {
                              className: "w-5 h-5 text-zinc-300",
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "text-sm font-semibold text-white",
                                children: "Chat with PDF",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-zinc-500",
                                children:
                                  n.length === 0
                                    ? "Upload PDFs to start"
                                    : `${n.length} PDF${n.length > 1 ? "s" : ""} loaded`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex-1 bg-zinc-900 border border-zinc-800 rounded-xl flex flex-col min-h-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1 overflow-y-auto p-4 space-y-4",
                          children: [
                            S.length === 0
                              ? e.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center",
                                  children: e.jsxs("div", {
                                    className: "text-center max-w-md",
                                    children: [
                                      e.jsx(te, {
                                        className:
                                          "w-12 h-12 text-zinc-700 mx-auto mb-4",
                                      }),
                                      e.jsx("h4", {
                                        className:
                                          "text-lg font-semibold text-white mb-2",
                                        children: "Ready to Chat",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm text-zinc-400",
                                        children:
                                          n.length === 0
                                            ? "Upload PDFs to start"
                                            : "Ask me anything",
                                      }),
                                    ],
                                  }),
                                })
                              : S.map((s, l) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: `flex gap-3 ${s.role === "user" ? "justify-end" : "justify-start"}`,
                                      children: [
                                        s.role === "assistant" &&
                                          e.jsx("div", {
                                            className:
                                              "w-8 h-8 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0",
                                            children: e.jsx(k, {
                                              className:
                                                "w-4 h-4 text-zinc-300",
                                            }),
                                          }),
                                        e.jsxs("div", {
                                          className: `max-w-[75%] rounded-xl p-4 ${s.role === "user" ? "bg-zinc-700 text-white" : s.isError ? "bg-zinc-900 border border-zinc-700 text-zinc-400" : "bg-zinc-800 text-zinc-200"}`,
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-sm prose prose-invert max-w-none",
                                              dangerouslySetInnerHTML: {
                                                __html: E(s.content),
                                              },
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs opacity-50 mt-2",
                                              children: new Date(
                                                s.timestamp,
                                              ).toLocaleTimeString(),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    l,
                                  ),
                                ),
                            q &&
                              v &&
                              e.jsxs("div", {
                                className: "flex gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0",
                                    children: e.jsx(k, {
                                      className: "w-4 h-4 text-zinc-300",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "max-w-[75%] bg-zinc-800 rounded-xl p-4",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "text-sm prose prose-invert max-w-none",
                                        dangerouslySetInnerHTML: {
                                          __html: E(v),
                                        },
                                      }),
                                      e.jsx("div", {
                                        className: "flex gap-1 mt-2",
                                        children: [0, 0.2, 0.4].map((s, l) =>
                                          e.jsx(
                                            "div",
                                            {
                                              className:
                                                "w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse",
                                              style: {
                                                animationDelay: `${s}s`,
                                              },
                                            },
                                            l,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            y &&
                              !v &&
                              e.jsxs("div", {
                                className: "flex gap-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-8 h-8 bg-zinc-700 rounded-xl flex items-center justify-center flex-shrink-0",
                                    children: e.jsx(k, {
                                      className: "w-4 h-4 text-zinc-300",
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: "bg-zinc-800 rounded-xl p-4",
                                    children: e.jsx("div", {
                                      className: "flex gap-1.5",
                                      children: [0, 0.1, 0.2].map((s, l) =>
                                        e.jsx(
                                          "div",
                                          {
                                            className:
                                              "w-2 h-2 bg-zinc-400 rounded-full animate-bounce",
                                            style: { animationDelay: `${s}s` },
                                          },
                                          l,
                                        ),
                                      ),
                                    }),
                                  }),
                                ],
                              }),
                            e.jsx("div", { ref: K }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "border-t border-zinc-800 p-4",
                          children: e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("textarea", {
                                value: f,
                                onChange: (s) => A(s.target.value),
                                onKeyPress: Z,
                                placeholder: "Ask anything...",
                                disabled: y || n.length === 0,
                                rows: 1,
                                className:
                                  "flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 resize-none disabled:opacity-50 transition-all",
                              }),
                              e.jsx("button", {
                                "aria-label": "Send",
                                onClick: H,
                                disabled: y || !f.trim(),
                                className:
                                  "px-4 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl disabled:opacity-40 transition-all touch-manipulation active:scale-[0.98]",
                                children: e.jsx(ne, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
  };
export { pe as default };
