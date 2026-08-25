import { r as h, j as e } from "./react-vendor-Bc7KCos-.js";
const O = "ihatepdf-store",
  me = "ihatepdf_DB",
  K = "ihatepdf_history",
  xe = (a) =>
    new Promise((c, r) => {
      const l = new FileReader();
      ((l.onload = () => c(l.result)), (l.onerror = r), l.readAsArrayBuffer(a));
    }),
  he = () =>
    new Promise((a, c) => {
      const r = indexedDB.open(me, 1);
      ((r.onupgradeneeded = (l) => {
        const m = l.target.result;
        m.objectStoreNames.contains(O) || m.createObjectStore(O);
      }),
        (r.onsuccess = () => a(r.result)),
        (r.onerror = () => c(r.error)));
    }),
  pe = async (a, c) => {
    const r = await he();
    return new Promise((l, m) => {
      const i = r.transaction(O, "readwrite");
      (i.objectStore(O).put(c, a),
        (i.oncomplete = () => l()),
        (i.onerror = () => m(i.error)));
    });
  },
  ue = async (a) => {
    const c = JSON.parse(localStorage.getItem(K) || "[]"),
      r = {
        id: Date.now(),
        name: a.name,
        tool: a.tool,
        timestamp: Date.now(),
        size: a.size,
      };
    if (a.bytes)
      try {
        await pe(`pdf_${r.id}`, a.bytes);
      } catch (l) {
        console.error("Failed to store PDF in IndexedDB:", l);
      }
    (c.unshift(r), localStorage.setItem(K, JSON.stringify(c.slice(0, 50))));
  },
  fe = (a, c, r) => {
    try {
      if (typeof window.download == "function")
        return (window.download(a, c, r), !0);
    } catch {}
    try {
      const l = new Blob([a], { type: r });
      if (window.navigator && window.navigator.msSaveOrOpenBlob)
        return (window.navigator.msSaveOrOpenBlob(l, c), !0);
      const m = URL.createObjectURL(l),
        i = document.createElement("a");
      return (
        (i.href = m),
        (i.download = c),
        i.setAttribute("download", c),
        (i.style.display = "none"),
        (i.style.position = "absolute"),
        (i.style.left = "-9999px"),
        document.body.appendChild(i),
        i.click(),
        setTimeout(() => {
          (document.body.removeChild(i), URL.revokeObjectURL(m));
        }, 1e3),
        !0
      );
    } catch {
      try {
        const m = new Blob([a], { type: r }),
          i = URL.createObjectURL(m);
        return (
          window.open(i, "_blank") ||
            alert(`Download blocked. Please allow pop-ups.

File: ${c}`),
          setTimeout(() => URL.revokeObjectURL(i), 5e3),
          !1
        );
      } catch {
        return (
          alert(`Unable to download ${c}. Please try a different browser.`),
          !1
        );
      }
    }
  },
  v = ({ children: a, className: c }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: c,
      children: a,
    }),
  D = (a) =>
    e.jsxs(v, {
      ...a,
      children: [
        e.jsx("path", {
          d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
        }),
        e.jsx("path", { d: "M22 21H7" }),
        e.jsx("path", { d: "m5 11 9 9" }),
      ],
    }),
  B = (a) =>
    e.jsxs(v, {
      ...a,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  ge = (a) =>
    e.jsxs(v, {
      ...a,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  Z = (a) =>
    e.jsxs(v, {
      ...a,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  L = (a) =>
    e.jsxs(v, {
      ...a,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  be = (a) =>
    e.jsxs(v, {
      ...a,
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
  ye = (a) =>
    e.jsx(v, {
      ...a,
      children: e.jsx("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    }),
  we = [
    {
      Icon: D,
      title: "Permanent Removal",
      desc: "Content is permanently deleted, not just covered. Redacted information cannot be recovered or revealed by anyone.",
    },
    {
      Icon: B,
      title: "Easy to Use",
      desc: "Simply drag and select areas to redact. Works on any device with touch or mouse support — no software needed.",
    },
    {
      Icon: be,
      title: "100% Private",
      desc: "Your sensitive documents never leave your device. All processing happens locally in your browser with no upload.",
    },
    {
      Icon: ye,
      title: "GDPR & HIPAA Ready",
      desc: "Meets technical safeguards for data protection. Helps comply with GDPR Article 17 and HIPAA requirements.",
    },
  ],
  ve = [
    {
      title: "Personal Information",
      desc: "Remove Social Security numbers, passport numbers, credit card details, birth dates, addresses, phone numbers, and email addresses before sharing documents.",
    },
    {
      title: "Legal Documents",
      desc: "Redact witness names, minor's identities, sealed information, trade secrets, or privileged attorney-client communications in court filings.",
    },
    {
      title: "Medical Records (HIPAA)",
      desc: "Remove patient names, medical record numbers, diagnosis codes, and protected health information (PHI) from medical documents before sharing.",
    },
    {
      title: "Financial Information",
      desc: "Black out bank account numbers, salary details, financial statements, tax information, or proprietary business data in contracts and reports.",
    },
    {
      title: "Government Documents",
      desc: "Comply with FOIA requests by redacting classified information, national security data, or personal privacy details from official documents.",
    },
    {
      title: "Corporate Documents",
      desc: "Remove confidential business strategies, employee information, merger details, or proprietary technology from externally shared documents.",
    },
  ],
  je = [
    {
      icon: "⚖️",
      title: "Legal Professionals",
      desc: "Lawyers and paralegals redact privileged communications, witness identities, sealed testimony, and sensitive case information before filing court documents or responding to discovery requests.",
    },
    {
      icon: "🏥",
      title: "Healthcare Providers",
      desc: "Hospitals and clinics redact patient names, medical record numbers, and PHI from case studies, research papers, insurance claims, and medical records shared for second opinions.",
    },
    {
      icon: "🏛️",
      title: "Government Agencies",
      desc: "Public sector employees redact classified information, personal privacy details, and exempt content when responding to FOIA requests or publishing official documents.",
    },
    {
      icon: "💼",
      title: "HR Departments",
      desc: "Human resources teams redact salary information, Social Security numbers, performance reviews, and personal employee data when sharing organizational documents or reports.",
    },
    {
      icon: "🔬",
      title: "Researchers",
      desc: "Academic and clinical researchers redact participant identities, contact information, and identifying details from study documents to maintain anonymity and comply with IRB requirements.",
    },
    {
      icon: "📊",
      title: "Financial Services",
      desc: "Banks and financial advisors redact account numbers, SSNs, credit scores, and sensitive financial data from statements, loan applications, and audit reports before external sharing.",
    },
  ],
  Ne = [
    {
      title: "Review every page",
      body: "Don't assume sensitive information only appears once. Names, SSNs, and addresses often repeat in headers, footers, or throughout multi-page documents.",
    },
    {
      title: "Redact more than less",
      body: "When in doubt, redact it. It's better to over-redact than accidentally expose sensitive information. You can't add data back after sharing.",
    },
    {
      title: "Check metadata too",
      body: "PDF redaction removes visible content, but consider using our other tools to remove metadata that might contain author names, company information, or edit history.",
    },
    {
      title: "Keep original copies",
      body: "Always save your original unredacted PDF in a secure location before redacting. Once applied, redactions cannot be reversed.",
    },
    {
      title: "Be thorough with context",
      body: "Redact enough surrounding text to prevent reconstruction. For example, redacting 'XXX-XX-1234' still reveals the last 4 digits of an SSN.",
    },
    {
      title: "Test before sharing",
      body: "After redacting, try copying text from the black areas. If you can still copy text, the redaction didn't work properly (though our tool prevents this).",
    },
  ],
  ke = ({ showNotification: a, showDownloadDialog: c }) => {
    const [r, l] = h.useState(null),
      [m, i] = h.useState(null),
      [d, N] = h.useState(1),
      [R, Q] = h.useState(0),
      [k, S] = h.useState(!1),
      [z, ee] = h.useState(null),
      [H, te] = h.useState(null),
      [C, se] = h.useState(null),
      [F, g] = h.useState({}),
      [T, V] = h.useState(!1),
      [u, G] = h.useState(null),
      [ne, E] = h.useState(!1);
    h.useEffect(() => {
      const t = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "ihatepdf PDF Redaction Tool",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web Browser",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Professional PDF redaction tool that permanently removes sensitive information from documents. Works entirely in your browser with no upload required.",
        featureList: [
          "Permanent redaction",
          "Drag and select to redact",
          "100% private - no server upload",
          "Multi-page redaction",
          "Preview before applying",
          "Works offline",
          "GDPR compliant",
          "Free forever",
        ],
        softwareVersion: "2.0",
        author: { "@type": "Organization", name: "ihatepdf" },
      };
      let s = document.getElementById("redact-tool-schema");
      return (
        s ||
          ((s = document.createElement("script")),
          (s.id = "redact-tool-schema"),
          (s.type = "application/ld+json"),
          document.head.appendChild(s)),
        (s.textContent = JSON.stringify(t)),
        () => {
          s && s.parentNode && s.parentNode.removeChild(s);
        }
      );
    }, []);
    const _ = async (t) => {
        const s = t.target.files[0];
        if (s) {
          S(!0);
          try {
            const n = await xe(s),
              o = new Uint8Array(n),
              p = new Uint8Array(o),
              x = await window.pdfjsLib.getDocument({ data: o }).promise;
            (l(p), i(x), Q(x.numPages), N(1), g({}));
          } catch {
            a("Invalid PDF", "error");
          }
          S(!1);
        }
      },
      ae = (t) => {
        (t.preventDefault(), E(!1));
        const s = t.dataTransfer.files?.[0];
        s?.type === "application/pdf" && _({ target: { files: [s] } });
      };
    h.useEffect(() => {
      (async () => {
        if (!m || !z) return;
        const s =
            window.innerWidth < 768
              ? window.innerWidth - 32
              : Math.min(window.innerWidth * 0.7, 1200),
          n = await m.getPage(d),
          o = n.getViewport({ scale: 1 }),
          p = s / o.width,
          x = n.getViewport({ scale: p });
        se(x);
        const f = z.getContext("2d");
        ((z.height = x.height),
          (z.width = x.width),
          await n.render({ canvasContext: f, viewport: x }).promise);
      })();
    }, [m, d, z]);
    const U = (t) => {
        if (!H) return null;
        const s = H.getBoundingClientRect(),
          n = t.clientX ?? t.touches?.[0]?.clientX ?? 0,
          o = t.clientY ?? t.touches?.[0]?.clientY ?? 0;
        return { x: n - s.left, y: o - s.top };
      },
      ie = (t) => {
        const s = U(t);
        s && (V(!0), G(s));
      },
      re = (t) => {
        if (!T || !u) return;
        const s = U(t);
        if (!s) return;
        const n = {
          id: "temp",
          x: Math.min(u.x, s.x),
          y: Math.min(u.y, s.y),
          width: Math.abs(s.x - u.x),
          height: Math.abs(s.y - u.y),
        };
        g((o) => {
          const p = (o[d] || []).filter((x) => x.id !== "temp");
          return { ...o, [d]: [...p, n] };
        });
      },
      Y = (t) => {
        if (!T || !u) return;
        const s = U(t);
        if (!s) return;
        const n = Math.abs(s.x - u.x),
          o = Math.abs(s.y - u.y);
        if (n > 5 && o > 5) {
          const p = {
            id: Date.now(),
            x: Math.min(u.x, s.x),
            y: Math.min(u.y, s.y),
            width: n,
            height: o,
          };
          g((x) => {
            const f = (x[d] || []).filter((b) => b.id !== "temp");
            return { ...x, [d]: [...f, p] };
          });
        } else
          g((p) => {
            const x = (p[d] || []).filter((f) => f.id !== "temp");
            return { ...p, [d]: x };
          });
        (V(!1), G(null));
      },
      oe = (t) => {
        g((s) => {
          const n = (s[d] || []).filter((o) => o.id !== t);
          return { ...s, [d]: n };
        });
      },
      q = () => {
        confirm("Clear all redactions on this page?") &&
          g((t) => ({ ...t, [d]: [] }));
      },
      X = async () => {
        if (r) {
          S(!0);
          try {
            const { PDFDocument: t } = window.PDFLib,
              s = await t.load(r),
              n = await t.create(),
              o =
                window.innerWidth < 768
                  ? window.innerWidth - 32
                  : Math.min(window.innerWidth * 0.7, 1200),
              x = (await m.getPage(1)).getViewport({ scale: 1 }),
              f = o / x.width;
            for (let I = 0; I < m.numPages; I++) {
              const $ = I + 1,
                J = F[$] || [];
              if (J.some((j) => j.id !== "temp")) {
                const j = await m.getPage($),
                  P = 3,
                  y = j.getViewport({ scale: P }),
                  M = document.createElement("canvas"),
                  W = M.getContext("2d");
                ((M.height = y.height),
                  (M.width = y.width),
                  await j.render({ canvasContext: W, viewport: y }).promise,
                  (W.fillStyle = "black"));
                for (const w of J)
                  w.id !== "temp" &&
                    W.fillRect(
                      (w.x / f) * P,
                      (w.y / f) * P,
                      (w.width / f) * P,
                      (w.height / f) * P,
                    );
                const ce = M.toDataURL("image/jpeg", 0.95),
                  le = Uint8Array.from(atob(ce.split(",")[1]), (w) =>
                    w.charCodeAt(0),
                  ),
                  de = await n.embedJpg(le);
                n.addPage([y.width, y.height]).drawImage(de, {
                  x: 0,
                  y: 0,
                  width: y.width,
                  height: y.height,
                });
              } else {
                const [j] = await n.copyPages(s, [I]);
                n.addPage(j);
              }
            }
            const b = await n.save(),
              A = "redacted_ihatepdf.pdf";
            fe(b, A, "application/pdf") !== !1
              ? ((window._lastDownloadedFile = { name: A, bytes: b }),
                await ue({ name: A, tool: "redact", size: b.length, bytes: b }),
                c(A, b.length, b))
              : a(
                  "Download may have been blocked. Check your downloads folder.",
                  "error",
                );
          } catch (t) {
            (console.error(t), a("Error applying redactions", "error"));
          } finally {
            S(!1);
          }
        }
      };
    if (r) {
      const t = F[d] || [],
        s = Object.keys(F).some(
          (n) => F[n].filter((o) => o.id !== "temp").length > 0,
        );
      return e.jsxs("div", {
        className: "flex flex-col h-full -m-4 md:-m-8",
        children: [
          e.jsxs("div", {
            className: "bg-zinc-900 border-b border-zinc-800 shrink-0 z-20",
            children: [
              e.jsxs("div", {
                className:
                  "hidden md:flex h-16 items-center justify-between px-4 md:px-6",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5",
                        children: [
                          e.jsx(D, { className: "w-4 h-4 text-zinc-400" }),
                          e.jsx("span", {
                            className: "text-sm text-zinc-400",
                            children:
                              "Drag to mark areas for permanent removal",
                          }),
                        ],
                      }),
                      t.filter((n) => n.id !== "temp").length > 0 &&
                        e.jsxs("button", {
                          onClick: q,
                          className:
                            "text-sm text-zinc-500 hover:text-zinc-200 transition-colors",
                          children: [
                            "Clear Page (",
                            t.filter((n) => n.id !== "temp").length,
                            ")",
                          ],
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center bg-zinc-950 rounded px-2 py-1 border border-zinc-800",
                        children: [
                          e.jsx("button", {
                            disabled: d <= 1,
                            onClick: () => N((n) => n - 1),
                            className:
                              "p-1 hover:text-white text-zinc-500 disabled:opacity-30",
                            children: "<",
                          }),
                          e.jsxs("span", {
                            className: "text-xs font-mono mx-2 text-zinc-400",
                            children: [d, " / ", R],
                          }),
                          e.jsx("button", {
                            disabled: d >= R,
                            onClick: () => N((n) => n + 1),
                            className:
                              "p-1 hover:text-white text-zinc-500 disabled:opacity-30",
                            children: ">",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: X,
                        disabled: k || !s,
                        className:
                          "px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 touch-manipulation active:scale-[0.98]",
                        children: k
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                                }),
                                "Processing...",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(Z, { className: "w-4 h-4" }),
                                "Apply Redactions",
                              ],
                            }),
                      }),
                      e.jsx("button", {
                        "aria-label": "Close",
                        onClick: () => {
                          (l(null), i(null), g({}));
                        },
                        className:
                          "text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-lg",
                        children: e.jsx(L, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "md:hidden",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-3 py-2 border-b border-zinc-800",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-zinc-800 border border-zinc-700 rounded px-2 py-1",
                        children: [
                          e.jsx(D, { className: "w-3 h-3 text-zinc-400" }),
                          e.jsx("span", {
                            className: "text-xs text-zinc-400",
                            children: "Drag to redact",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        "aria-label": "Close",
                        onClick: () => {
                          (l(null), i(null), g({}));
                        },
                        className:
                          "text-zinc-500 hover:text-white transition-colors p-1",
                        children: e.jsx(L, { className: "w-5 h-5" }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-3 py-2 gap-2",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center bg-zinc-950 rounded px-2 py-1.5 border border-zinc-800",
                        children: [
                          e.jsx("button", {
                            disabled: d <= 1,
                            onClick: () => N((n) => n - 1),
                            className:
                              "p-1 hover:text-white text-zinc-500 disabled:opacity-30",
                            children: "<",
                          }),
                          e.jsxs("span", {
                            className:
                              "text-xs font-mono mx-2 text-zinc-400 min-w-[60px] text-center",
                            children: [d, " / ", R],
                          }),
                          e.jsx("button", {
                            disabled: d >= R,
                            onClick: () => N((n) => n + 1),
                            className:
                              "p-1 hover:text-white text-zinc-500 disabled:opacity-30",
                            children: ">",
                          }),
                        ],
                      }),
                      t.filter((n) => n.id !== "temp").length > 0 &&
                        e.jsxs("button", {
                          onClick: q,
                          className:
                            "text-xs text-zinc-500 hover:text-zinc-200 transition-colors px-2 py-1.5 bg-zinc-950 rounded border border-zinc-800",
                          children: [
                            "Clear (",
                            t.filter((n) => n.id !== "temp").length,
                            ")",
                          ],
                        }),
                      e.jsx("button", {
                        onClick: X,
                        disabled: k || !s,
                        className:
                          "px-3 py-1.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg text-xs font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 flex-shrink-0 touch-manipulation active:scale-[0.98]",
                        children: k
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-3 h-3 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                                }),
                                e.jsx("span", {
                                  className: "hidden sm:inline",
                                  children: "Processing...",
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(Z, { className: "w-3 h-3" }),
                                e.jsx("span", { children: "Apply" }),
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className:
              "flex-1 overflow-auto bg-zinc-950 flex justify-center items-start p-2 md:p-12",
            children: e.jsxs("div", {
              className: "relative shadow-2xl ring-1 ring-black max-w-full",
              style: { width: C ? C.width : 0, height: C ? C.height : 0 },
              children: [
                e.jsx("canvas", {
                  ref: ee,
                  className: "absolute inset-0 z-0 bg-white",
                }),
                e.jsx("div", {
                  ref: te,
                  onPointerDown: ie,
                  onPointerMove: re,
                  onPointerUp: Y,
                  onPointerCancel: Y,
                  className:
                    "absolute inset-0 z-10 cursor-crosshair touch-none",
                  style: { touchAction: "none" },
                  children: t.map((n) =>
                    e.jsx(
                      "div",
                      {
                        className:
                          "absolute bg-black/80 border-2 border-zinc-400 group",
                        style: {
                          left: `${n.x}px`,
                          top: `${n.y}px`,
                          width: `${n.width}px`,
                          height: `${n.height}px`,
                        },
                        children:
                          n.id !== "temp" &&
                          e.jsx("button", {
                            "aria-label": "Close",
                            onClick: (o) => {
                              (o.stopPropagation(), oe(n.id));
                            },
                            className:
                              "absolute -top-2 -right-2 bg-zinc-200 hover:bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-20",
                            children: e.jsx(L, {
                              className: "w-3 h-3 text-zinc-900",
                            }),
                          }),
                      },
                      n.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    }
    return e.jsxs("div", {
      className: "max-w-6xl mx-auto pb-10 space-y-6 md:space-y-8",
      children: [
        e.jsxs("header", {
          className: "text-center pt-2",
          children: [
            e.jsx("h1", {
              className:
                "text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3",
              children: "Redact PDF Free",
            }),
            e.jsxs("p", {
              className: "text-base md:text-xl text-zinc-400 max-w-2xl mx-auto",
              children: [
                "Permanently remove sensitive information from PDF documents. Black out confidential text, personal data, and private information —",
                " ",
                e.jsx("span", {
                  className: "text-zinc-200 font-semibold",
                  children: "100% private, no upload required.",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: e.jsxs("div", {
            className: `border-2 border-dashed rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer ${ne ? "border-zinc-600 bg-zinc-800/30" : "border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/30"}`,
            onDragOver: (t) => {
              (t.preventDefault(), E(!0));
            },
            onDragLeave: () => E(!1),
            onDrop: ae,
            onClick: () => document.getElementById("redact-upload")?.click(),
            role: "button",
            tabIndex: 0,
            onKeyDown: (t) =>
              t.key === "Enter" &&
              document.getElementById("redact-upload")?.click(),
            "aria-label": "Select PDF to redact",
            children: [
              e.jsx("input", {
                type: "file",
                accept: "application/pdf",
                onChange: _,
                className: "hidden",
                id: "redact-upload",
              }),
              e.jsxs("label", {
                htmlFor: "redact-upload",
                className: "cursor-pointer flex flex-col items-center",
                children: [
                  e.jsx("div", {
                    className:
                      "w-14 h-14 md:w-20 md:h-20 bg-zinc-800 text-zinc-400 rounded-full flex items-center justify-center mb-4",
                    children: e.jsx(D, {
                      className: "w-7 h-7 md:w-10 md:h-10",
                    }),
                  }),
                  e.jsx("h3", {
                    className:
                      "text-base md:text-xl font-semibold text-white mb-2",
                    children: "Upload PDF to Redact",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-zinc-400 mb-3",
                    children:
                      "Click to browse or drag and drop your PDF file here",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-zinc-600",
                    children:
                      "Permanent redaction • Multi-page support • 100% private • GDPR compliant",
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",
          children: we.map(({ Icon: t, title: s, desc: n }) =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 hover:border-zinc-700 transition-all",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center mb-3 flex-shrink-0",
                    children: e.jsx(t, { className: "w-5 h-5 text-zinc-300" }),
                  }),
                  e.jsx("h3", {
                    className: "font-semibold text-white text-sm mb-1.5",
                    children: s,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-zinc-400 leading-relaxed",
                    children: n,
                  }),
                ],
              },
              s,
            ),
          ),
        }),
        e.jsxs("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-4",
              children: "What is PDF Redaction?",
            }),
            e.jsxs("p", {
              className: "text-sm text-zinc-400 leading-relaxed mb-6",
              children: [
                "PDF redaction is the permanent removal of sensitive information from documents. Unlike highlighting or covering text with shapes, true redaction completely deletes the underlying content from the PDF file structure. Our tool is",
                " ",
                e.jsx("span", {
                  className: "text-zinc-200 font-semibold",
                  children: "permanent and irreversible",
                }),
                " ",
                "— the content is completely removed from the file.",
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                  children: [
                    e.jsxs("h3", {
                      className:
                        "text-sm font-semibold text-zinc-200 mb-3 flex items-center gap-2",
                      children: [
                        e.jsx(B, { className: "w-4 h-4 text-zinc-400" }),
                        " True Redaction (Our Tool)",
                      ],
                    }),
                    e.jsx("ul", {
                      className: "space-y-2",
                      children: [
                        "Content is permanently deleted from the PDF",
                        "Information cannot be recovered or revealed",
                        "GDPR and HIPAA compliant for legal use",
                        "Safe to share publicly or with third parties",
                      ].map((t) =>
                        e.jsxs(
                          "li",
                          {
                            className: "flex gap-2 text-xs text-zinc-400",
                            children: [
                              e.jsx("span", {
                                className: "text-zinc-400 flex-shrink-0",
                                children: "✓",
                              }),
                              e.jsx("span", { children: t }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                  children: [
                    e.jsxs("h3", {
                      className:
                        "text-sm font-semibold text-zinc-500 mb-3 flex items-center gap-2",
                      children: [
                        e.jsx(ge, { className: "w-4 h-4 text-zinc-600" }),
                        " Fake Redaction (Insecure)",
                      ],
                    }),
                    e.jsx("ul", {
                      className: "space-y-2",
                      children: [
                        "Simply covers text with black boxes or shapes",
                        "Original text remains in the PDF and can be copied",
                        "Can be revealed by moving or deleting the overlay",
                        "Not compliant for legal or regulatory purposes",
                      ].map((t) =>
                        e.jsxs(
                          "li",
                          {
                            className: "flex gap-2 text-xs text-zinc-600",
                            children: [
                              e.jsx("span", {
                                className: "flex-shrink-0",
                                children: "✗",
                              }),
                              e.jsx("span", { children: t }),
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
              className:
                "mt-4 bg-zinc-950 border border-zinc-800 rounded-xl p-4",
              children: e.jsxs("p", {
                className: "text-xs text-zinc-500 leading-relaxed",
                children: [
                  e.jsx("span", {
                    className: "text-zinc-300 font-medium",
                    children: "Warning:",
                  }),
                  " Many PDF editors only add black boxes over text without actually removing it. This is dangerous for sensitive documents — the original text can still be copied, searched, or revealed. Always use proper redaction tools for confidential information.",
                ],
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className:
                "text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center",
              children: "How to Redact PDF Documents",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8",
              children: [
                [
                  "Upload your PDF",
                  "Click the upload area or drag and drop the PDF file containing sensitive information you need to redact. Your document stays on your device throughout.",
                ],
                [
                  "Select areas to redact",
                  "Use your mouse or finger to drag and select rectangular areas over text, images, or data you want to permanently remove. A black preview box shows what will be redacted.",
                ],
                [
                  "Redact multiple pages",
                  "Navigate through all pages using the page controls. Add redactions to any pages that contain sensitive information before applying.",
                ],
                [
                  "Apply and download",
                  "Click 'Apply Redactions' to permanently remove all marked content. The redacted information is completely deleted. Download your secure PDF immediately.",
                ],
              ].map(([t, s], n) =>
                e.jsxs(
                  "div",
                  {
                    className: "text-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 md:w-14 md:h-14 bg-zinc-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg md:text-2xl",
                        children: n + 1,
                      }),
                      e.jsx("h3", {
                        className:
                          "font-semibold text-white mb-2 text-sm md:text-base",
                        children: t,
                      }),
                      e.jsx("p", {
                        className: "text-xs md:text-sm text-zinc-400",
                        children: s,
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
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-5",
              children: "When to Redact PDF Documents",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4",
              children: ve.map(({ title: t, desc: s }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx(B, {
                        className: "w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0",
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h4", {
                            className: "font-medium text-white text-sm",
                            children: t,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: s,
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
        e.jsxs("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-5",
              children: "🔒 Privacy & Security Guarantee",
            }),
            e.jsx("p", {
              className: "text-sm text-zinc-400 leading-relaxed mb-5",
              children:
                "When dealing with sensitive information, security is paramount. Here's why ihatepdf is the safest choice for PDF redaction:",
            }),
            e.jsx("div", {
              className: "space-y-4",
              children: [
                {
                  title: "No Server Upload",
                  body: "Your confidential documents never leave your device. All redaction processing happens locally in your web browser using JavaScript, so we literally cannot access your files.",
                },
                {
                  title: "Permanent Deletion",
                  body: "Redacted content is completely removed from the PDF file structure, not just covered with black boxes. The original data cannot be recovered by anyone.",
                },
                {
                  title: "GDPR Compliant",
                  body: "Our tool helps you comply with GDPR Article 17 (Right to Erasure) by permanently removing personal data from documents before sharing or archiving.",
                },
                {
                  title: "HIPAA Compatible",
                  body: "Suitable for healthcare providers and insurance companies handling protected health information (PHI). Meets technical safeguards for data protection.",
                },
                {
                  title: "Works Offline",
                  body: "After initial page load, the tool functions completely offline. No internet connection needed — perfect for highly classified or confidential work.",
                },
              ].map(({ title: t, body: s }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex gap-3",
                    children: [
                      e.jsx(B, {
                        className: "w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0",
                      }),
                      e.jsxs("p", {
                        className: "text-sm text-zinc-400",
                        children: [
                          e.jsxs("span", {
                            className: "text-zinc-200 font-semibold",
                            children: [t, ":"],
                          }),
                          " ",
                          s,
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
        e.jsxs("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-5",
              children: "Real-World Redaction Examples",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4",
              children: je.map(({ icon: t, title: s, desc: n }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all",
                    children: [
                      e.jsxs("h3", {
                        className: "font-semibold text-white text-sm mb-1.5",
                        children: [t, " ", s],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-400 leading-relaxed",
                        children: n,
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
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-5",
              children: "💡 Pro Tips for Effective Redaction",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
              children: Ne.map(({ title: t, body: s }) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-zinc-500 font-bold mt-0.5 flex-shrink-0",
                        children: "→",
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h4", {
                            className: "font-medium text-white text-sm",
                            children: t,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400 leading-relaxed",
                            children: s,
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
        e.jsxs("div", {
          className: "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
          children: [
            e.jsx("h2", {
              className: "text-xl md:text-2xl font-bold text-white mb-5",
              children: "Related PDF Privacy Tools",
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4",
              children: [
                {
                  href: "/encrypt-pdf",
                  title: "Encrypt PDF",
                  desc: "Password-protect your redacted documents for extra security.",
                },
                {
                  href: "/split-pdf",
                  title: "Split PDF",
                  desc: "Extract specific pages before redacting sensitive sections.",
                },
                {
                  href: "/compress-pdf",
                  title: "Compress PDF",
                  desc: "Reduce file size after redaction for easier sharing.",
                },
              ].map(({ href: t, title: s, desc: n }) =>
                e.jsxs(
                  "a",
                  {
                    href: t,
                    className:
                      "bg-zinc-950 border border-zinc-800 hover:border-zinc-600 rounded-xl p-4 transition-all group",
                    children: [
                      e.jsxs("h3", {
                        className:
                          "font-semibold text-white text-sm mb-1.5 group-hover:text-zinc-200 transition-colors",
                        children: [s, " →"],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-500 leading-relaxed",
                        children: n,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center",
          children: [
            e.jsx("h2", {
              className: "text-xl font-bold text-white mb-2",
              children: "Ready to Redact Your PDF?",
            }),
            e.jsx("p", {
              className: "text-zinc-400 text-sm mb-5",
              children:
                "Secure, private, and free PDF redaction. No registration required.",
            }),
            e.jsxs("label", {
              htmlFor: "redact-upload",
              className:
                "inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-900 rounded-xl text-sm font-semibold cursor-pointer transition-all touch-manipulation active:scale-[0.98]",
              children: [
                e.jsx(D, { className: "w-4 h-4" }),
                "Get Started — Upload PDF",
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ke as default };
