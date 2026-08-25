import { r as d, j as e } from "./react-vendor-Bc7KCos-.js";
import { e as L } from "./pdf-utils-DHnwt0li.js";
const f = "ihatepdf-store",
  M = "ihatepdf_DB",
  P = "ihatepdf_history",
  B = () =>
    new Promise((s, n) => {
      const r = indexedDB.open(M, 1);
      ((r.onupgradeneeded = (i) => {
        const c = i.target.result;
        c.objectStoreNames.contains(f) || c.createObjectStore(f);
      }),
        (r.onsuccess = () => s(r.result)),
        (r.onerror = () => n(r.error)));
    }),
  T = async (s, n) => {
    const r = await B();
    return new Promise((i, c) => {
      const o = r.transaction(f, "readwrite");
      (o.objectStore(f).put(n, s),
        (o.oncomplete = () => i()),
        (o.onerror = () => c(o.error)));
    });
  },
  _ = async (s) => {
    const n = JSON.parse(localStorage.getItem(P) || "[]"),
      r = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await T(`pdf_${r.id}`, s.bytes);
      } catch (i) {
        console.error("Failed to store PDF:", i);
      }
    (n.unshift(r), localStorage.setItem(P, JSON.stringify(n.slice(0, 50))));
  },
  $ = (s, n, r) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, n, r), !0);
    } catch {}
    try {
      const i = new Blob([s], { type: r });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(i, n), !0);
      const c = URL.createObjectURL(i),
        o = document.createElement("a");
      return (
        (o.href = c),
        (o.download = n),
        o.setAttribute("download", n),
        (o.style.cssText = "display:none;position:absolute;left:-9999px"),
        document.body.appendChild(o),
        o.click(),
        setTimeout(() => {
          (document.body.removeChild(o), URL.revokeObjectURL(c));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const c = new Blob([s], { type: r }),
          o = URL.createObjectURL(c);
        return (
          window.open(o, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${n}`),
          setTimeout(() => URL.revokeObjectURL(o), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${n}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  H = () => {
    if (typeof window > "u") return !1;
    const s = window.navigator.userAgent;
    return (
      (!!s.match(/iPad/i) || !!s.match(/iPhone/i)) &&
      !!s.match(/WebKit/i) &&
      !s.match(/CriOS/i)
    );
  },
  V = () =>
    H()
      ? e.jsxs("div", {
          className:
            "p-3 bg-zinc-800 border border-zinc-700 rounded-xl text-xs text-zinc-300 animate-in fade-in duration-300",
          children: [
            e.jsxs("p", {
              className: "font-semibold mb-1 flex items-center gap-2",
              children: [
                e.jsx("span", { className: "text-base", children: "📱" }),
                " iOS Safari Detected",
              ],
            }),
            e.jsxs("p", {
              className: "leading-relaxed",
              children: [
                "After download completes, find your file in the",
                " ",
                e.jsx("span", {
                  className: "font-semibold text-white",
                  children: "Files app → Downloads",
                }),
                " ",
                "folder",
              ],
            }),
          ],
        })
      : null,
  x = ({ children: s, className: n }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: n,
      children: s,
    }),
  w = (s) =>
    e.jsxs(x, {
      ...s,
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
  q = (s) =>
    e.jsxs(x, {
      ...s,
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
  S = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  W = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Z = (s) =>
    e.jsx(x, {
      ...s,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  Y = (s) =>
    e.jsx(x, {
      ...s,
      children: e.jsx("path", { d: "M13 10V3L4 14h7v7l9-11h-7z" }),
    }),
  D = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94",
        }),
        e.jsx("path", {
          d: "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19",
        }),
        e.jsx("path", { d: "M14.12 14.12a3 3 0 1 1-4.24-4.24" }),
        e.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
      ],
    }),
  k = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
      ],
    }),
  K = (s) => {
    if (!s) return { strength: "weak", score: 0 };
    let n = 0;
    return (
      s.length >= 8 && n++,
      s.length >= 12 && n++,
      /[a-z]/.test(s) && n++,
      /[A-Z]/.test(s) && n++,
      /[0-9]/.test(s) && n++,
      /[^a-zA-Z0-9]/.test(s) && n++,
      n <= 2
        ? { strength: "weak", score: n }
        : n <= 4
          ? { strength: "medium", score: n }
          : { strength: "strong", score: n }
    );
  },
  J = [
    {
      Icon: w,
      title: "AES-256 Encryption",
      desc: "Industry-standard Advanced Encryption Standard with 256-bit keys. Virtually unbreakable and used by governments worldwide for top-secret documents.",
    },
    {
      Icon: Z,
      title: "Client-Side Encryption",
      desc: "All encryption happens locally in your browser. Your PDF file and password never travel over the internet — completely private on your device.",
    },
    {
      Icon: S,
      title: "Password Strength Validation",
      desc: "Real-time password strength meter analyzes your password for length, complexity, and common patterns to ensure maximum security against attacks.",
    },
    {
      Icon: Y,
      title: "Instant Processing",
      desc: "Fast encryption process completes in seconds. No waiting, no queues — your encrypted PDF is ready to download immediately after processing.",
    },
  ],
  G = [
    {
      icon: "🏢",
      title: "Business Documents",
      desc: "Protect contracts, proposals, and confidential business plans",
    },
    {
      icon: "💰",
      title: "Financial Records",
      desc: "Secure tax documents, bank statements, and financial reports",
    },
    {
      icon: "⚖️",
      title: "Legal Files",
      desc: "Encrypt legal agreements, court documents, and attorney communications",
    },
    {
      icon: "🏥",
      title: "Medical Records",
      desc: "Protect patient information and comply with HIPAA privacy requirements",
    },
    {
      icon: "🎓",
      title: "Academic Work",
      desc: "Secure research papers, dissertations, and unpublished manuscripts",
    },
    {
      icon: "🔐",
      title: "Personal Documents",
      desc: "Protect IDs, passports, social security documents, and private information",
    },
  ],
  X = [
    {
      title: "Use 12+ Characters",
      body: "Longer passwords are exponentially harder to crack. Aim for at least 12 characters, 16+ is even better.",
    },
    {
      title: "Mix Character Types",
      body: "Combine uppercase letters, lowercase letters, numbers, and special symbols (!@#$%^&*) for maximum strength.",
    },
    {
      title: "Avoid Common Words",
      body: "Don't use dictionary words, names, dates of birth, or predictable patterns. These are easily guessed by attackers.",
    },
    {
      title: "Use Unique Passwords",
      body: "Create a unique password for each important document. Don't reuse passwords across multiple files or accounts.",
    },
    {
      title: "Store Passwords Safely",
      body: "Use a password manager to securely store your passwords. Never write them down or save them in plain text files.",
    },
  ],
  se = ({ showNotification: s, showDownloadDialog: n }) => {
    const [r, i] = d.useState(null),
      [c, o] = d.useState(!1),
      [l, m] = d.useState(""),
      [p, h] = d.useState(""),
      [y, F] = d.useState(!1),
      [g, C] = d.useState(!1),
      [E, j] = d.useState(!1),
      z = d.useRef(null),
      u = K(l),
      v = p && l === p,
      O = p && l !== p,
      A = !!l && !!v && !c,
      R = (t) => {
        const a = t.target.files?.[0];
        a &&
          ((t.target.value = ""),
          i(a),
          m(""),
          h(""),
          s(`PDF loaded: ${a.name}`));
      },
      I = (t) => {
        (t.preventDefault(), j(!1));
        const a = t.dataTransfer.files?.[0];
        a?.type === "application/pdf" &&
          (i(a), m(""), h(""), s(`PDF loaded: ${a.name}`));
      },
      N = () => {
        r || z.current?.click();
      },
      U = async () => {
        if (!r) {
          s("Please select a PDF file", "error");
          return;
        }
        if (!l) {
          s("Please enter a password", "error");
          return;
        }
        if (!v) {
          s("Passwords do not match", "error");
          return;
        }
        o(!0);
        try {
          s("Encrypting your PDF securely...");
          const t = await L(r, { userPassword: l, ownerPassword: l }),
            a = `encrypted_${r.name}`;
          $(t, a, "application/pdf") !== !1
            ? ((window._lastDownloadedFile = { name: a, bytes: t }),
              await _({ name: a, tool: "encrypt", size: t.length, bytes: t }),
              n(a, t.length, t),
              s("PDF encrypted successfully! ✓"),
              setTimeout(() => {
                (i(null), m(""), h(""));
              }, 2e3))
            : s(
                "Download may have been blocked. Check your downloads folder.",
                "error",
              );
        } catch (t) {
          (console.error("Encryption process error:", t),
            s(
              `Failed to encrypt PDF: ${t.message || "Unknown error"}`,
              "error",
            ));
        } finally {
          o(!1);
        }
      };
    return r
      ? e.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 space-y-4",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 md:p-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0 flex-1",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
                      children: e.jsx(q, {
                        className: "w-4 h-4 text-zinc-300",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-sm font-medium text-zinc-200 truncate",
                          children: r.name,
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-zinc-500",
                          children: [(r.size / 1024 / 1024).toFixed(2), " MB"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => {
                    (i(null), m(""), h(""));
                  },
                  className:
                    "self-start md:self-center text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg",
                  title: "Remove file",
                  children: e.jsx(W, { className: "w-4 h-4" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-zinc-400 mb-6 flex items-center gap-2",
                  children: [
                    e.jsx(w, { className: "w-4 h-4" }),
                    " Encrypt PDF",
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2",
                          children: [
                            "Create Password ",
                            e.jsx("span", {
                              className: "text-zinc-400",
                              children: "*",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("input", {
                              type: y ? "text" : "password",
                              value: l,
                              onChange: (t) => m(t.target.value),
                              placeholder: "Enter a strong password",
                              className:
                                "w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 pr-12 transition-colors placeholder:text-zinc-700",
                            }),
                            e.jsx("button", {
                              "aria-label": "Toggle password visibility",
                              type: "button",
                              onClick: () => F(!y),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors p-1",
                              children: y
                                ? e.jsx(D, { className: "w-4 h-4" })
                                : e.jsx(k, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                        l &&
                          e.jsxs("div", {
                            className: "mt-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                                    children: e.jsx("div", {
                                      className: `h-full rounded-full transition-all duration-300 ${u.strength === "weak" ? "w-1/3 bg-zinc-600" : u.strength === "medium" ? "w-2/3 bg-zinc-400" : "w-full bg-zinc-200"}`,
                                    }),
                                  }),
                                  e.jsx("span", {
                                    className: `text-xs font-bold uppercase tracking-widest ${u.strength === "weak" ? "text-zinc-600" : u.strength === "medium" ? "text-zinc-400" : "text-zinc-200"}`,
                                    children: u.strength,
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-xs text-zinc-700",
                                children:
                                  "Use 12+ characters with mixed case, numbers & symbols",
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("label", {
                          className:
                            "block text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2",
                          children: [
                            "Confirm Password ",
                            e.jsx("span", {
                              className: "text-zinc-400",
                              children: "*",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("input", {
                              type: g ? "text" : "password",
                              value: p,
                              onChange: (t) => h(t.target.value),
                              placeholder: "Re-enter your password",
                              className:
                                "w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 pr-12 transition-colors placeholder:text-zinc-700",
                            }),
                            e.jsx("button", {
                              "aria-label": "Toggle password visibility",
                              type: "button",
                              onClick: () => C(!g),
                              className:
                                "absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-300 transition-colors p-1",
                              children: g
                                ? e.jsx(D, { className: "w-4 h-4" })
                                : e.jsx(k, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                        O &&
                          e.jsx("p", {
                            className: "mt-2 text-xs text-zinc-500 font-medium",
                            children: "⚠ Passwords do not match",
                          }),
                        v &&
                          e.jsx("p", {
                            className: "mt-2 text-xs text-zinc-400 font-medium",
                            children: "✓ Passwords match",
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", { className: "mt-5", children: e.jsx(V, {}) }),
                e.jsx("button", {
                  onClick: U,
                  disabled: !A,
                  type: "button",
                  className:
                    "mt-5 w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]",
                  children: c
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                          }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Encrypting...",
                          }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(w, { className: "w-4 h-4" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Encrypt PDF",
                          }),
                          e.jsx("span", {
                            className: "sm:hidden",
                            children: "Encrypt",
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        })
      : e.jsxs("div", {
          className: "max-w-6xl mx-auto pb-10 space-y-6 md:space-y-8",
          children: [
            e.jsxs("header", {
              className: "text-center pt-2",
              children: [
                e.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
                  children: "Encrypt PDF Online Free",
                }),
                e.jsx("p", {
                  className: "text-base md:text-xl text-zinc-400",
                  children:
                    "Password-protect your PDFs with military-grade AES-256 encryption",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: e.jsxs("div", {
                className: `border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer ${E ? "border-zinc-600 bg-zinc-800/30" : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/30"}`,
                onDragOver: (t) => {
                  (t.preventDefault(), j(!0));
                },
                onDragLeave: () => j(!1),
                onDrop: I,
                onClick: N,
                role: "button",
                tabIndex: 0,
                onKeyDown: (t) => t.key === "Enter" && N(),
                "aria-label": "Select PDF file to encrypt",
                children: [
                  e.jsx("input", {
                    ref: z,
                    type: "file",
                    accept: "application/pdf",
                    onChange: R,
                    className: "hidden",
                    id: "encrypt-upload",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-14 h-14 md:w-20 md:h-20 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-4",
                        children: e.jsx(w, {
                          className: "w-7 h-7 md:w-10 md:h-10",
                        }),
                      }),
                      e.jsx("h3", {
                        className:
                          "text-base md:text-xl font-semibold text-white mb-2",
                        children: "Select PDF to Encrypt",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-zinc-400 mb-3",
                        children:
                          "Click to browse or drag and drop your PDF file here",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-600",
                        children:
                          "AES-256 encryption • Password protection • 100% secure",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",
              children: J.map(({ Icon: t, title: a, desc: b }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 hover:border-zinc-700 transition-all",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 flex-shrink-0",
                        children: e.jsx(t, {
                          className: "w-5 h-5 text-zinc-300",
                        }),
                      }),
                      e.jsx("h3", {
                        className: "font-semibold text-white text-sm mb-1.5",
                        children: a,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 leading-relaxed",
                        children: b,
                      }),
                    ],
                  },
                  a,
                ),
              ),
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className:
                    "text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center",
                  children: "How to Encrypt PDF with Password",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8",
                  children: [
                    [
                      "Upload PDF",
                      "Select the PDF file you want to password protect",
                    ],
                    [
                      "Create Password",
                      "Enter a strong password — use 12+ characters with mixed case, numbers & symbols",
                    ],
                    [
                      "Confirm Password",
                      "Re-enter your password to prevent typos",
                    ],
                    [
                      "Download Encrypted PDF",
                      "Get your password-protected PDF file instantly",
                    ],
                  ].map(([t, a], b) =>
                    e.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 md:w-14 md:h-14 bg-zinc-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-2xl",
                            children: b + 1,
                          }),
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white mb-2 text-sm md:text-base",
                            children: t,
                          }),
                          e.jsx("p", {
                            className: "text-xs md:text-sm text-zinc-400",
                            children: a,
                          }),
                        ],
                      },
                      b,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "When to Encrypt Your PDFs",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                  children: G.map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all",
                        children: [
                          e.jsx("div", {
                            className: "text-2xl mb-2",
                            children: t.icon,
                          }),
                          e.jsx("h4", {
                            className: "font-semibold text-white text-sm mb-1",
                            children: t.title,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-500 leading-relaxed",
                            children: t.desc,
                          }),
                        ],
                      },
                      t.title,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "Creating Strong Passwords",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                  children: X.map(({ title: t, body: a }) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx(S, {
                            className:
                              "w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-white text-sm",
                                children: t,
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-400 leading-relaxed",
                                children: a,
                              }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
  };
export { se as default };
