import { r as m, j as e } from "./react-vendor-Bc7KCos-.js";
const g = "ihatepdf-store",
  W = "ihatepdf_DB",
  R = "ihatepdf_history",
  Y = (s) =>
    new Promise((a, r) => {
      const c = new FileReader();
      ((c.onload = () => a(c.result)), (c.onerror = r), c.readAsArrayBuffer(s));
    }),
  $ = () =>
    new Promise((s, a) => {
      const r = indexedDB.open(W, 1);
      ((r.onupgradeneeded = (c) => {
        const i = c.target.result;
        i.objectStoreNames.contains(g) || i.createObjectStore(g);
      }),
        (r.onsuccess = () => s(r.result)),
        (r.onerror = () => a(r.error)));
    }),
  V = async (s, a) => {
    const r = await $();
    return new Promise((c, i) => {
      const o = r.transaction(g, "readwrite");
      (o.objectStore(g).put(a, s),
        (o.oncomplete = () => c()),
        (o.onerror = () => i(o.error)));
    });
  },
  K = async (s) => {
    const a = JSON.parse(localStorage.getItem(R) || "[]"),
      r = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await V(`pdf_${r.id}`, s.bytes);
      } catch (c) {
        console.error("Failed to store PDF in IndexedDB:", c);
      }
    (a.unshift(r), localStorage.setItem(R, JSON.stringify(a.slice(0, 50))));
  },
  q = (s, a, r) => {
    try {
      if (typeof window.download == "function")
        return (window.download(s, a, r), !0);
    } catch {}
    try {
      const c = new Blob([s], { type: r });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(c, a), !0);
      const i = URL.createObjectURL(c),
        o = document.createElement("a");
      return (
        (o.href = i),
        (o.download = a),
        o.setAttribute("download", a),
        (o.style.display = "none"),
        (o.style.position = "absolute"),
        (o.style.left = "-9999px"),
        document.body.appendChild(o),
        o.click(),
        setTimeout(() => {
          (document.body.removeChild(o), URL.revokeObjectURL(i));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const i = new Blob([s], { type: r }),
          o = URL.createObjectURL(i);
        return (
          window.open(o, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${a}`),
          setTimeout(() => URL.revokeObjectURL(o), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${a}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  J = () => {
    if (typeof window > "u") return !1;
    const s = window.navigator.userAgent,
      a = !!s.match(/iPad/i) || !!s.match(/iPhone/i),
      r = !!s.match(/WebKit/i);
    return a && r && !s.match(/CriOS/i);
  },
  Z = () =>
    J()
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
  d = ({ children: s, className: a }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: a,
      children: s,
    }),
  U = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("circle", { cx: "7.5", cy: "15.5", r: "5.5" }),
        e.jsx("path", { d: "m21 2-9.6 9.6" }),
        e.jsx("path", { d: "m15.5 7.5 3 3L22 7l-3-3" }),
      ],
    }),
  E = (s) =>
    e.jsxs(d, {
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
  C = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  O = (s) =>
    e.jsxs(d, {
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
  D = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  G = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  X = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  Q = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 2v6h-6" }),
        e.jsx("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" }),
      ],
    }),
  ee = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("path", { d: "M12 20h9" }),
        e.jsx("path", {
          d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
        }),
      ],
    }),
  se = (s) =>
    e.jsxs(d, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
        }),
        e.jsx("path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" }),
        e.jsx("path", { d: "M15 2v5h5" }),
      ],
    }),
  te = (s) =>
    e.jsx(d, {
      ...s,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  re = (s) =>
    e.jsx(d, {
      ...s,
      children: e.jsx("path", { d: "M13 10V3L4 14h7v7l9-11h-7z" }),
    }),
  ne = [
    {
      Icon: E,
      title: "100% Secure & Private",
      desc: "Your password and PDF are processed entirely in your browser. No data is uploaded or stored anywhere.",
    },
    {
      Icon: D,
      title: "No Password Cracking",
      desc: "This tool requires the correct password. We don't crack or bypass passwords — only legitimate unlocking.",
    },
    {
      Icon: Q,
      title: "Works Offline",
      desc: "After initial page load, decrypt PDFs without an internet connection. Perfect for sensitive documents.",
    },
    {
      Icon: re,
      title: "100% Free Forever",
      desc: "No subscriptions, no file limits, no watermarks. Unlock unlimited PDFs completely free.",
    },
  ],
  oe = [
    {
      Icon: O,
      title: "Document Management",
      desc: "Remove passwords from your own PDFs for easier access and sharing within your organization or team.",
    },
    {
      Icon: ee,
      title: "Editing Access",
      desc: "Unlock PDFs to enable editing, copying text, or extracting content that's restricted by password.",
    },
    {
      Icon: se,
      title: "Archiving",
      desc: "Remove passwords from archived documents for long-term storage without password management hassles.",
    },
  ],
  le = ({ showNotification: s, showDownloadDialog: a }) => {
    const [r, c] = m.useState(null),
      [i, o] = m.useState(""),
      [y, v] = m.useState(!1),
      [w, b] = m.useState(!1),
      [L, P] = m.useState(!1),
      z = m.useRef(null);
    m.useEffect(() => {}, []);
    const I = (t) => {
        const n = t.target.files?.[0];
        n && ((t.target.value = ""), c(n), o(""), b(!1));
      },
      B = (t) => {
        (t.preventDefault(), P(!1));
        const n = t.dataTransfer.files?.[0];
        n?.type === "application/pdf" && (c(n), o(""), b(!1));
      },
      k = () => {
        r || z.current?.click();
      },
      F = async () => {
        if (!r || !i) {
          s("Please enter the password", "error");
          return;
        }
        v(!0);
        try {
          s("Decrypting PDF with password...");
          const t = await Y(r);
          try {
            const l = await window.pdfjsLib.getDocument({
              data: t,
              password: i,
            }).promise;
            s(`PDF unlocked! Processing ${l.numPages} pages...`);
            const { PDFDocument: T } = window.PDFLib,
              N = await T.create();
            for (let h = 1; h <= l.numPages; h++) {
              const S = await l.getPage(h),
                f = 2,
                x = S.getViewport({ scale: f }),
                u = document.createElement("canvas"),
                A = u.getContext("2d", { alpha: !1 });
              ((u.height = x.height),
                (u.width = x.width),
                await S.render({
                  canvasContext: A,
                  viewport: x,
                  intent: "print",
                }).promise);
              const M = u.toDataURL("image/jpeg", 0.95),
                _ = await N.embedJpg(M);
              (N.addPage([x.width / f, x.height / f]).drawImage(_, {
                x: 0,
                y: 0,
                width: x.width / f,
                height: x.height / f,
              }),
                (u.width = 0),
                (u.height = 0),
                (h % 5 === 0 || h === l.numPages) &&
                  s(`Processing page ${h}/${l.numPages}...`),
                await new Promise((H) => setTimeout(H, 50)));
            }
            (b(!0), s("Finalizing unlocked PDF..."));
            const p = await N.save({
                useObjectStreams: !1,
                addDefaultPage: !1,
              }),
              j = `unlocked_${r.name}`;
            q(p, j, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: j, bytes: p }),
                await K({
                  name: j,
                  tool: "removepassword",
                  size: p.length,
                  bytes: p,
                }),
                a(j, p.length, p),
                s("✅ Password removed successfully!", "success"))
              : s(
                  "Download may have been blocked. Check your downloads folder.",
                  "error",
                );
          } catch (n) {
            if (n.name === "PasswordException")
              n.code === 1
                ? s("❌ Incorrect password. Please try again.", "error")
                : n.code === 2
                  ? s("❌ Password required but not provided.", "error")
                  : s("❌ Password authentication failed.", "error");
            else throw n;
            v(!1);
            return;
          }
        } catch (t) {
          console.error("Password removal error:", t);
          let n = "Failed to remove password. ";
          (t.message?.includes("password")
            ? (n += "The password may be incorrect.")
            : t.message?.includes("encrypted")
              ? (n += "This PDF uses unsupported encryption.")
              : t.message?.includes("Invalid PDF")
                ? (n += "The PDF file may be corrupted.")
                : (n +=
                    "The file may be corrupted or use unsupported encryption."),
            s(n, "error"));
        } finally {
          v(!1);
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
                      children: e.jsx(O, {
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
                          children: [
                            (r.size / 1024 / 1024).toFixed(2),
                            " MB",
                            w &&
                              e.jsx("span", {
                                className: "ml-2 text-zinc-300",
                                children: "• Unlocked ✓",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => {
                    (c(null), o(""), b(!1));
                  },
                  className:
                    "self-start md:self-center text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg",
                  title: "Remove file",
                  children: e.jsx(G, { className: "w-4 h-4" }),
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
                    e.jsx(U, { className: "w-4 h-4" }),
                    " Unlock Your PDF",
                  ],
                }),
                !w &&
                  e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs("label", {
                            className:
                              "block text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2",
                            children: [
                              "Enter PDF Password ",
                              e.jsx("span", {
                                className: "text-zinc-400",
                                children: "*",
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "password",
                            value: i,
                            onChange: (t) => o(t.target.value),
                            onKeyPress: (t) => {
                              t.key === "Enter" && F();
                            },
                            placeholder: "Enter the PDF password...",
                            className:
                              "w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700",
                            autoFocus: !0,
                          }),
                          e.jsxs("p", {
                            className:
                              "text-xs text-zinc-700 mt-2 flex items-center gap-1",
                            children: [
                              e.jsx(E, { className: "w-3 h-3" }),
                              "Your password is processed locally and never sent to any server",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                        children: [
                          e.jsxs("h4", {
                            className:
                              "text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2",
                            children: [
                              e.jsx(te, { className: "w-3.5 h-3.5" }),
                              " 100% Secure & Private",
                            ],
                          }),
                          e.jsx("ul", {
                            className: "space-y-2",
                            children: [
                              "Your PDF never leaves your device",
                              "Password is processed locally in your browser",
                              "No data uploaded to any server",
                              "Works completely offline",
                            ].map((t) =>
                              e.jsxs(
                                "li",
                                {
                                  className:
                                    "flex items-center gap-2 text-xs text-zinc-400",
                                  children: [
                                    e.jsx(D, {
                                      className:
                                        "w-3.5 h-3.5 text-zinc-500 flex-shrink-0",
                                    }),
                                    t,
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className: w ? "" : "mt-5",
                  children: e.jsx(Z, {}),
                }),
                e.jsx("button", {
                  onClick: F,
                  disabled: y || !i.trim() || w,
                  type: "button",
                  className:
                    "mt-5 w-full py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 touch-manipulation active:scale-[0.98]",
                  children: y
                    ? e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className:
                              "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                          }),
                          e.jsx("span", { children: "Unlocking PDF..." }),
                        ],
                      })
                    : w
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(D, { className: "w-4 h-4" }),
                            e.jsx("span", {
                              children: "Password Removed Successfully",
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(U, { className: "w-4 h-4" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Remove Password & Download",
                            }),
                            e.jsx("span", {
                              className: "sm:hidden",
                              children: "Remove Password",
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
          itemScope: !0,
          itemType: "https://schema.org/SoftwareApplication",
          children: [
            e.jsx("meta", {
              itemProp: "name",
              content: "Remove PDF Password - ihatepdf",
            }),
            e.jsx("meta", {
              itemProp: "applicationCategory",
              content: "BusinessApplication",
            }),
            e.jsx("meta", {
              itemProp: "operatingSystem",
              content: "Any (Web-based)",
            }),
            e.jsx("meta", {
              itemProp: "offers",
              itemScope: !0,
              itemType: "https://schema.org/Offer",
            }),
            e.jsx("meta", { itemProp: "price", content: "0" }),
            e.jsx("meta", { itemProp: "priceCurrency", content: "USD" }),
            e.jsxs("header", {
              className: "text-center pt-2",
              children: [
                e.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
                  children: "Remove PDF Password Free",
                }),
                e.jsxs("p", {
                  className: "text-base md:text-xl text-zinc-400",
                  itemProp: "description",
                  children: [
                    "Unlock and decrypt password-protected PDFs instantly.",
                    " ",
                    e.jsx("span", {
                      className: "text-zinc-200 font-semibold",
                      children: "100% secure and private",
                    }),
                    " ",
                    "— your password and PDF never leave your device.",
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: e.jsxs("div", {
                className: `border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer ${L ? "border-zinc-600 bg-zinc-800/30" : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/30"}`,
                onDragOver: (t) => {
                  (t.preventDefault(), P(!0));
                },
                onDragLeave: () => P(!1),
                onDrop: B,
                onClick: k,
                role: "button",
                tabIndex: 0,
                onKeyDown: (t) => t.key === "Enter" && k(),
                "aria-label": "Select password-protected PDF to unlock",
                children: [
                  e.jsx("input", {
                    ref: z,
                    type: "file",
                    accept: "application/pdf",
                    onChange: I,
                    className: "hidden",
                    id: "removepassword-upload",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-14 h-14 md:w-20 md:h-20 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-4",
                        children: e.jsx(C, {
                          className: "w-7 h-7 md:w-10 md:h-10",
                        }),
                      }),
                      e.jsx("h3", {
                        className:
                          "text-base md:text-xl font-semibold text-white mb-2",
                        children: "Select Protected PDF",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-zinc-400 mb-3",
                        children:
                          "Upload a password-protected PDF to unlock and remove encryption",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-600",
                        children:
                          "Supports RC4 & AES encryption • No file size limit • 100% private",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",
              children: ne.map(({ Icon: t, title: n, desc: l }) =>
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
                        children: n,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 leading-relaxed",
                        children: l,
                      }),
                    ],
                  },
                  n,
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
                  children: "How to Remove Password from PDF",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8",
                  children: [
                    [
                      "Upload Protected PDF",
                      "Click 'Select Protected PDF' and choose the password-protected PDF file you want to unlock from your device.",
                    ],
                    [
                      "Enter the Password",
                      "Type the correct password for the PDF. Press Enter or click the unlock button. Your password is processed locally and never sent anywhere.",
                    ],
                    [
                      "Remove Encryption",
                      "Our tool decrypts the PDF and creates a new version without password protection. This happens entirely in your browser.",
                    ],
                    [
                      "Download Unlocked PDF",
                      "Download your unlocked PDF without any password protection. You can now freely edit, print, and share the document.",
                    ],
                  ].map(([t, n], l) =>
                    e.jsxs(
                      "div",
                      {
                        className: "text-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-12 h-12 md:w-14 md:h-14 bg-zinc-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-2xl",
                            children: l + 1,
                          }),
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white mb-2 text-sm md:text-base",
                            children: t,
                          }),
                          e.jsx("p", {
                            className: "text-xs md:text-sm text-zinc-400",
                            children: n,
                          }),
                        ],
                      },
                      l,
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
                  children: "Common Use Cases",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4",
                  children: oe.map(({ Icon: t, title: n, desc: l }) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl p-4 md:p-5 hover:border-zinc-700 transition-all",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 flex-shrink-0",
                            children: e.jsx(t, {
                              className: "w-5 h-5 text-zinc-300",
                            }),
                          }),
                          e.jsx("h3", {
                            className:
                              "font-semibold text-white text-sm mb-1.5",
                            children: n,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: l,
                          }),
                        ],
                      },
                      n,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-zinc-300 mb-2 flex items-center gap-2",
                  children: [
                    e.jsx(X, { className: "w-4 h-4 text-zinc-400" }),
                    "Legal & Ethical Use Only",
                  ],
                }),
                e.jsxs("p", {
                  className: "text-xs text-zinc-500 leading-relaxed",
                  children: [
                    "This tool should only be used to unlock PDFs that you own or have legitimate authorization to access. Removing passwords from PDFs you don't own or don't have permission to unlock may violate copyright laws and terms of service.",
                    " ",
                    e.jsxs("span", {
                      className: "text-zinc-300 font-medium",
                      children: ["We cannot crack passwords,", " "],
                    }),
                    "you must know the correct password to unlock the PDF.",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center",
              children: [
                e.jsx("h2", {
                  className: "text-xl font-bold text-white mb-2",
                  children: "Ready to Unlock Your PDF?",
                }),
                e.jsx("p", {
                  className: "text-zinc-400 text-sm mb-5",
                  children:
                    "Secure, private, and free PDF password removal. No registration required.",
                }),
                e.jsxs("button", {
                  type: "button",
                  onClick: () => z.current?.click(),
                  className:
                    "inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-semibold cursor-pointer transition-all touch-manipulation active:scale-[0.98]",
                  children: [
                    e.jsx(C, { className: "w-4 h-4" }),
                    "Get Started — Select PDF",
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { le as default };
