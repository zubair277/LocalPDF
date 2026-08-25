import { r as d, j as e } from "./react-vendor-Bc7KCos-.js";
const y = "ihatepdf-store",
  re = "ihatepdf_DB",
  V = "ihatepdf_history",
  ne = () =>
    new Promise((s, l) => {
      const r = indexedDB.open(re, 1);
      ((r.onupgradeneeded = (a) => {
        const c = a.target.result;
        c.objectStoreNames.contains(y) || c.createObjectStore(y);
      }),
        (r.onsuccess = () => s(r.result)),
        (r.onerror = () => l(r.error)));
    }),
  ae = async (s, l) => {
    const r = await ne();
    return new Promise((a, c) => {
      const m = r.transaction(y, "readwrite");
      (m.objectStore(y).put(l, s),
        (m.oncomplete = () => a()),
        (m.onerror = () => c(m.error)));
    });
  },
  le = async (s) => {
    const l = JSON.parse(localStorage.getItem(V) || "[]"),
      r = {
        id: Date.now(),
        name: s.name,
        tool: s.tool,
        timestamp: Date.now(),
        size: s.size,
      };
    if (s.bytes)
      try {
        await ae(`pdf_${r.id}`, s.bytes);
      } catch (a) {
        console.error("Failed to store PDF in IndexedDB:", a);
      }
    (l.unshift(r), localStorage.setItem(V, JSON.stringify(l.slice(0, 50))));
  },
  oe = () => {
    if (typeof window > "u") return !1;
    const s = window.navigator.userAgent,
      l = !!s.match(/iPad/i) || !!s.match(/iPhone/i),
      r = !!s.match(/WebKit/i);
    return l && r && !s.match(/CriOS/i);
  },
  de = () =>
    oe()
      ? e.jsxs("div", {
          className:
            "p-3 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300 mt-4",
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
                  className: "font-semibold",
                  children: "Files app → Downloads",
                }),
                " folder",
              ],
            }),
          ],
        })
      : null,
  x = ({ children: s, className: l }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: l,
      children: s,
    }),
  g = (s) =>
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
  I = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        e.jsx("polyline", { points: "22 4 12 14.01 9 11.01" }),
      ],
    }),
  ce = (s) =>
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
  me = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", {
          d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
        }),
        e.jsx("polyline", { points: "17 21 17 13 7 13 7 21" }),
        e.jsx("polyline", { points: "7 3 7 8 15 8" }),
      ],
    }),
  Y = (s) =>
    e.jsxs(x, {
      ...s,
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
  xe = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  he = (s) =>
    e.jsxs(x, {
      ...s,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  ue = ({ showNotification: s, showDownloadDialog: l }) => {
    const [r, a] = d.useState(""),
      [c, m] = d.useState(!1),
      [A, E] = d.useState(!1),
      [z, O] = d.useState(""),
      [N, h] = d.useState("code"),
      [P, B] = d.useState(null),
      [R, Q] = d.useState("a4"),
      [S, J] = d.useState("portrait"),
      [H, K] = d.useState("high"),
      X = d.useRef(null);
    d.useEffect(() => {
      const t =
        document.querySelector('meta[name="description"]') ||
        document.createElement("meta");
      ((t.name = "description"),
        (t.content =
          "Free online HTML to PDF converter. Convert HTML files, code, and webpages to PDF format with perfect CSS styling. Supports gradients, shadows, flexbox, and modern layouts. No watermarks, no registration required."),
        t.parentElement || document.head.appendChild(t));
    }, []);
    const u = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Professional HTML to PDF Sample</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6; color: #1a202c; padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;
        }
        .container {
            background: white; border-radius: 12px; padding: 40px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-width: 850px; margin: 0 auto;
        }
        h1 {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            background-clip: text; font-size: 36px; font-weight: 800; margin-bottom: 10px;
        }
        .subtitle { color: #718096; font-size: 18px; margin-bottom: 30px; }
        h2 { color: #2d3748; font-size: 24px; margin-top: 35px; margin-bottom: 15px; padding-left: 15px; border-left: 5px solid #667eea; font-weight: 700; }
        p { color: #4a5568; margin-bottom: 15px; font-size: 16px; }
        .alert-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; margin: 25px 0; border-radius: 10px; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0; }
        .feature-card { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; text-align: center; }
        .feature-card h3 { font-size: 20px; margin-bottom: 10px; font-weight: 700; }
        .feature-card p { font-size: 14px; color: rgba(255,255,255,0.95); margin: 0; }
        table { width: 100%; border-collapse: collapse; margin: 25px 0; border-radius: 10px; overflow: hidden; }
        th, td { padding: 15px; text-align: left; }
        th { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 700; }
        tbody tr:nth-child(even) { background: #f7fafc; }
        td { border-bottom: 1px solid #e2e8f0; color: #4a5568; }
        .footer { margin-top: 50px; padding-top: 30px; border-top: 3px solid #e2e8f0; text-align: center; }
        .footer h3 { color: #2d3748; font-size: 20px; margin-bottom: 10px; }
        .footer p { color: #718096; font-size: 14px; margin: 5px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Advanced HTML to PDF Conversion</h1>
        <p class="subtitle">Professional-grade document generation with preserved styling</p>
        <p>This sample demonstrates enterprise-level PDF generation capabilities with complete preservation of complex HTML structures and advanced CSS styling.</p>
        <h2>✨ Core Capabilities</h2>
        <div class="alert-box">
            <strong>✓ Pixel-Perfect Rendering</strong>
            Every element, style, and layout is captured exactly as it appears in your browser.
        </div>
        <div class="features-grid">
            <div class="feature-card"><h3>🎨 Styling</h3><p>CSS3 gradients, shadows, & effects</p></div>
            <div class="feature-card"><h3>📐 Layout</h3><p>Grid, Flexbox, & responsive</p></div>
            <div class="feature-card"><h3>🖼️ Media</h3><p>Images, SVG, canvas support</p></div>
        </div>
        <h2>📊 Technical Specifications</h2>
        <table>
            <thead><tr><th>Feature</th><th>Support</th><th>Quality</th></tr></thead>
            <tbody>
                <tr><td>CSS Gradients</td><td>✓ Full Support</td><td>Excellent</td></tr>
                <tr><td>Box Shadows</td><td>✓ Supported</td><td>High Quality</td></tr>
                <tr><td>Grid & Flexbox</td><td>✓ Full Support</td><td>Preserved</td></tr>
                <tr><td>Images</td><td>✓ High-Res</td><td>2x Scaling</td></tr>
            </tbody>
        </table>
        <div class="footer">
            <h3>Generated with ihatepdf</h3>
            <p>🔒 Privacy-First PDF Tools • Client-Side Processing</p>
        </div>
    </div>
</body>
</html>`,
      G = {
        a4: { width: 210, height: 297, label: "A4 (210 × 297 mm)" },
        letter: { width: 216, height: 279, label: "Letter (8.5 × 11 in)" },
        legal: { width: 216, height: 356, label: "Legal (8.5 × 14 in)" },
        a3: { width: 297, height: 420, label: "A3 (297 × 420 mm)" },
      },
      C = {
        low: { scale: 1, label: "Low (Faster)", dpi: 96 },
        medium: { scale: 1.5, label: "Medium", dpi: 144 },
        high: { scale: 2, label: "High (Recommended)", dpi: 192 },
        ultra: { scale: 3, label: "Ultra (Best Quality)", dpi: 288 },
      },
      Z = async (t) => {
        const i = t.target.files[0];
        if (i) {
          if (!i.name.endsWith(".html") && !i.name.endsWith(".htm")) {
            s("Please upload an HTML file (.html or .htm)", "error");
            return;
          }
          try {
            const n = await i.text();
            (a(n), B(i.name), s(`Loaded ${i.name}`));
          } catch {
            s("Failed to read HTML file", "error");
          }
        }
      },
      U = (t) => {
        if (!t.trim()) throw new Error("HTML content is empty");
        let i = t;
        return (
          t.toLowerCase().includes("<!doctype") ||
            (i = `<!DOCTYPE html>
${t}`),
          t.toLowerCase().includes("<html") ||
            (i = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
${t}
</body>
</html>`),
          i
        );
      },
      ee = () => {
        if (!r.trim()) {
          s("Please enter HTML code or upload a file", "error");
          return;
        }
        try {
          const t = U(r);
          (O(t), E(!0), s("Preview loaded!"));
        } catch (t) {
          s(t.message, "error");
        }
      },
      te = async () => {
        if (!r.trim()) {
          s("Please enter HTML code or upload a file", "error");
          return;
        }
        if (!window.html2canvas || !window.jspdf) {
          s("PDF libraries not loaded. Please refresh the page.", "error");
          return;
        }
        m(!0);
        let t = null;
        try {
          s("Preparing HTML...");
          const i = U(r),
            n = G[R],
            se = C[H],
            F = S === "landscape",
            T = P
              ? P.replace(/\.(html|htm)$/i, ".pdf")
              : "converted_document.pdf";
          ((t = document.createElement("iframe")),
            (t.style.cssText = `position:fixed;top:0;left:-9999px;width:${F ? n.height : n.width}mm;height:auto;border:none;background:white;z-index:-1;visibility:hidden;`),
            document.body.appendChild(t),
            (t.srcdoc = i),
            await new Promise((o) => {
              ((t.onload = o), setTimeout(o, 100));
            }),
            s("Loading resources..."),
            await new Promise((o) => setTimeout(o, 800)));
          const p = (t.contentDocument || t.contentWindow.document).body,
            L = p.querySelectorAll("img");
          (L.length > 0 &&
            (s(`Loading ${L.length} images...`),
            await Promise.all(
              Array.from(L).map((o) =>
                o.complete
                  ? Promise.resolve()
                  : new Promise((f) => {
                      ((o.onload = f), (o.onerror = f), setTimeout(f, 3e3));
                    }),
              ),
            )),
            s("Rendering pages..."));
          const W = F ? n.height : n.width,
            q = F ? n.width : n.height,
            D = await window.html2canvas(p, {
              scale: se.scale,
              useCORS: !0,
              allowTaint: !1,
              backgroundColor: "#ffffff",
              logging: !1,
              width: p.scrollWidth,
              height: p.scrollHeight,
              windowWidth: p.scrollWidth,
              windowHeight: p.scrollHeight,
            });
          s("Creating PDF...");
          const { jsPDF: ie } = window.jspdf,
            b = new ie({
              orientation: S,
              unit: "mm",
              format: [W, q],
              compress: !0,
            }),
            M = W - 20,
            j = (D.height * M) / D.width,
            $ = q - 20;
          let v = j,
            k = 10;
          const _ = D.toDataURL("image/jpeg", 0.95);
          for (b.addImage(_, "JPEG", 10, k, M, j), v -= $; v > 0;)
            ((k = v - j + 10),
              b.addPage(),
              b.addImage(_, "JPEG", 10, k, M, j),
              (v -= $));
          (b.save(T),
            document.body.removeChild(t),
            (t = null),
            s("✅ PDF generated successfully!"),
            setTimeout(async () => {
              try {
                const f = await b.output("blob").arrayBuffer(),
                  w = new Uint8Array(f);
                (await le({
                  name: T,
                  tool: "htmlpdf",
                  size: w.length,
                  bytes: w,
                }),
                  l && l(T, w.length, w));
              } catch (o) {
                console.warn("Failed to add to history:", o);
              }
            }, 300));
        } catch (i) {
          if (
            (console.error("PDF generation error:", i),
            s(`Failed to generate PDF: ${i.message}`, "error"),
            t && t.parentNode)
          )
            try {
              document.body.removeChild(t);
            } catch {}
        } finally {
          m(!1);
        }
      };
    return r
      ? e.jsxs("div", {
          className: "max-w-7xl mx-auto pb-10 space-y-4 md:space-y-6",
          children: [
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
                          className:
                            "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 md:gap-3",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-8 h-8 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center",
                                  children: e.jsx(g, {
                                    className:
                                      "w-4 h-4 md:w-5 md:h-5 text-zinc-300",
                                  }),
                                }),
                                e.jsx("h3", {
                                  className:
                                    "text-base md:text-xl font-semibold text-white",
                                  children: "HTML to PDF",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsx("button", {
                                  onClick: () => h("code"),
                                  className: `px-3 py-1.5 text-xs rounded-lg transition-colors touch-manipulation ${N === "code" ? "bg-zinc-100 text-zinc-900 font-semibold" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border border-zinc-700"}`,
                                  children: "Code",
                                }),
                                e.jsx("button", {
                                  onClick: () => h("file"),
                                  className: `px-3 py-1.5 text-xs rounded-lg transition-colors touch-manipulation ${N === "file" ? "bg-zinc-100 text-zinc-900 font-semibold" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 border border-zinc-700"}`,
                                  children: "Upload",
                                }),
                              ],
                            }),
                          ],
                        }),
                        N === "code"
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-3",
                                  children: [
                                    e.jsx("label", {
                                      className: "text-xs text-zinc-500",
                                      children: "HTML Code",
                                    }),
                                    e.jsx("button", {
                                      onClick: () => a(u),
                                      className:
                                        "px-2.5 py-1.5 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors border border-zinc-700 touch-manipulation",
                                      children: "Load Sample",
                                    }),
                                  ],
                                }),
                                e.jsx("textarea", {
                                  value: r,
                                  onChange: (t) => a(t.target.value),
                                  placeholder: "Paste your HTML code here...",
                                  className:
                                    "w-full h-64 md:h-96 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs md:text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 font-mono resize-none",
                                  spellCheck: !1,
                                }),
                              ],
                            })
                          : e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsx("input", {
                                  type: "file",
                                  accept: ".html,.htm",
                                  onChange: Z,
                                  className: "hidden",
                                  id: "html-file-upload",
                                }),
                                e.jsxs("label", {
                                  htmlFor: "html-file-upload",
                                  className:
                                    "flex flex-col items-center justify-center w-full h-40 md:h-48 border-2 border-dashed border-zinc-800 hover:border-zinc-700 rounded-xl transition-colors cursor-pointer bg-zinc-950",
                                  children: [
                                    e.jsx(xe, {
                                      className:
                                        "w-10 h-10 md:w-12 md:h-12 text-zinc-600 mb-3",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-medium text-zinc-400 text-center px-4",
                                      children:
                                        P || "Click to upload HTML file",
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs text-zinc-600 mt-1",
                                      children: "Supports .html and .htm files",
                                    }),
                                  ],
                                }),
                                r &&
                                  r.trim() &&
                                  e.jsxs("div", {
                                    className:
                                      "bg-zinc-950 border border-zinc-800 rounded-lg p-4",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-2",
                                        children: [
                                          e.jsx("span", {
                                            className: "text-xs text-zinc-500",
                                            children: "File preview",
                                          }),
                                          e.jsx("button", {
                                            onClick: () => {
                                              (a(""), B(null));
                                            },
                                            className:
                                              "text-xs text-zinc-500 hover:text-zinc-300 transition-colors",
                                            children: "Clear",
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "max-h-32 md:max-h-40 overflow-auto",
                                        children: e.jsxs("pre", {
                                          className:
                                            "text-xs text-zinc-400 font-mono whitespace-pre-wrap break-words",
                                          children: [
                                            r.substring(0, 500),
                                            r.length > 500 ? "..." : "",
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        e.jsxs("div", {
                          className: "mt-4 flex gap-2 md:gap-3",
                          children: [
                            e.jsxs("button", {
                              onClick: ee,
                              disabled: c || !r.trim(),
                              className:
                                "flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium disabled:opacity-50 transition-colors flex items-center justify-center gap-2 text-sm border border-zinc-700 touch-manipulation active:scale-[0.98]",
                              children: [
                                e.jsx(Y, { className: "w-4 h-4" }),
                                "Preview",
                              ],
                            }),
                            e.jsx("button", {
                              onClick: te,
                              disabled: c || !r.trim(),
                              className:
                                "flex-1 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-sm touch-manipulation active:scale-[0.98]",
                              children: c
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin",
                                      }),
                                      e.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "Generating...",
                                      }),
                                      e.jsx("span", {
                                        className: "sm:hidden",
                                        children: "...",
                                      }),
                                    ],
                                  })
                                : e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx(me, { className: "w-4 h-4" }),
                                      e.jsx("span", {
                                        className: "hidden sm:inline",
                                        children: "Generate PDF",
                                      }),
                                      e.jsx("span", {
                                        className: "sm:hidden",
                                        children: "PDF",
                                      }),
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
                        e.jsxs("h4", {
                          className:
                            "text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2",
                          children: [
                            e.jsxs("svg", {
                              className: "w-4 h-4",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: [
                                e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
                                e.jsx("path", {
                                  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
                                }),
                              ],
                            }),
                            "PDF Settings",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className: "grid grid-cols-2 gap-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "block text-xs text-zinc-500 mb-2",
                                      children: "Page Size",
                                    }),
                                    e.jsx("select", {
                                      value: R,
                                      onChange: (t) => Q(t.target.value),
                                      className:
                                        "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs md:text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600",
                                      children: Object.entries(G).map(
                                        ([t, i]) =>
                                          e.jsx(
                                            "option",
                                            { value: t, children: i.label },
                                            t,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("label", {
                                      className:
                                        "block text-xs text-zinc-500 mb-2",
                                      children: "Orientation",
                                    }),
                                    e.jsxs("select", {
                                      value: S,
                                      onChange: (t) => J(t.target.value),
                                      className:
                                        "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs md:text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600",
                                      children: [
                                        e.jsx("option", {
                                          value: "portrait",
                                          children: "Portrait",
                                        }),
                                        e.jsx("option", {
                                          value: "landscape",
                                          children: "Landscape",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsxs("label", {
                                  className: "block text-xs text-zinc-500 mb-2",
                                  children: ["Quality (", C[H].dpi, " DPI)"],
                                }),
                                e.jsx("select", {
                                  value: H,
                                  onChange: (t) => K(t.target.value),
                                  className:
                                    "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs md:text-sm text-zinc-200 focus:outline-none focus:ring-1 focus:ring-zinc-600",
                                  children: Object.entries(C).map(([t, i]) =>
                                    e.jsx(
                                      "option",
                                      { value: t, children: i.label },
                                      t,
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
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("h4", {
                          className:
                            "text-sm font-medium text-zinc-300 flex items-center gap-2",
                          children: [
                            e.jsx(Y, { className: "w-4 h-4" }),
                            "Live Preview",
                          ],
                        }),
                        A &&
                          z &&
                          e.jsx("button", {
                            onClick: () => {
                              (E(!1), O(""));
                            },
                            className:
                              "text-xs text-zinc-500 hover:text-zinc-300 transition-colors",
                            children: "Clear",
                          }),
                      ],
                    }),
                    A && z
                      ? e.jsx("iframe", {
                          ref: X,
                          srcDoc: z,
                          className:
                            "w-full bg-white rounded-lg border border-zinc-700",
                          style: {
                            height: "calc(100vh - 200px)",
                            minHeight: "400px",
                            maxHeight: "800px",
                          },
                          sandbox: "allow-same-origin",
                          title: "HTML Preview",
                        })
                      : e.jsx("div", {
                          className:
                            "flex items-center justify-center text-zinc-600 bg-zinc-950 rounded-lg border border-zinc-800",
                          style: { minHeight: "400px" },
                          children: e.jsxs("div", {
                            className: "text-center p-6 md:p-8",
                            children: [
                              e.jsx(g, {
                                className:
                                  "w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-20",
                              }),
                              e.jsx("p", {
                                className: "text-sm mb-2",
                                children: "No preview yet",
                              }),
                              e.jsx("p", {
                                className: "text-xs opacity-60",
                                children: "Add HTML and click Preview",
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5",
              children: [
                e.jsxs("h4", {
                  className:
                    "text-sm font-medium text-zinc-300 mb-3 flex items-center gap-2",
                  children: [
                    e.jsx(he, { className: "w-4 h-4 text-zinc-400" }),
                    "Professional HTML to PDF Conversion",
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                  children: [
                    [
                      "Advanced Engine",
                      "Uses jsPDF + html2canvas for reliable, high-quality conversion",
                    ],
                    [
                      "Complex CSS",
                      "Gradients, shadows, flexbox, grid, and modern layouts preserved",
                    ],
                    [
                      "High Resolution",
                      "Up to 3x scaling (288 DPI) for ultra-sharp text and images",
                    ],
                    [
                      "Multi-Page",
                      "Automatically splits long content across multiple pages",
                    ],
                    [
                      "Image Loading",
                      "Waits for all images to load before PDF generation",
                    ],
                    [
                      "100% Private",
                      "All processing happens locally in your browser",
                    ],
                  ].map(([t, i]) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-start gap-2 text-xs text-zinc-400",
                        children: [
                          e.jsx(I, {
                            className:
                              "w-3.5 h-3.5 text-zinc-500 mt-0.5 flex-shrink-0",
                          }),
                          e.jsxs("span", {
                            children: [
                              e.jsxs("strong", {
                                className: "text-zinc-300",
                                children: [t, ":"],
                              }),
                              " ",
                              i,
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
            e.jsx(de, {}),
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
                  children: "HTML to PDF Converter Online Free",
                }),
                e.jsxs("p", {
                  className:
                    "text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto",
                  children: [
                    "Convert HTML files, code, and webpages to PDF with perfect CSS preservation.",
                    " ",
                    e.jsx("span", {
                      className: "text-zinc-200 font-semibold",
                      children: "No watermarks, 100% private.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-8 h-8 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center",
                          children: e.jsx(g, {
                            className: "w-4 h-4 md:w-5 md:h-5 text-zinc-300",
                          }),
                        }),
                        e.jsx("h3", {
                          className:
                            "text-base md:text-lg font-semibold text-white",
                          children: "Get Started",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("button", {
                          onClick: () => {
                            (h("code"), a(u));
                          },
                          className:
                            "px-3 py-1.5 bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-semibold rounded-lg transition-colors touch-manipulation active:scale-[0.98]",
                          children: "Try Sample HTML",
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            (h("file"), a(" "));
                          },
                          className:
                            "px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-lg transition-colors border border-zinc-700 touch-manipulation active:scale-[0.98]",
                          children: "Upload File",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "border-2 border-dashed border-zinc-800 hover:border-zinc-700 rounded-xl p-8 md:p-12 text-center transition-all cursor-pointer",
                  onClick: () => {
                    (h("code"), a(u));
                  },
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (t) => t.key === "Enter" && a(u),
                  children: [
                    e.jsx("div", {
                      className:
                        "w-14 h-14 md:w-20 md:h-20 bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-full flex items-center justify-center mx-auto mb-4",
                      children: e.jsx(g, {
                        className: "w-7 h-7 md:w-10 md:h-10",
                      }),
                    }),
                    e.jsx("h3", {
                      className:
                        "text-base md:text-xl font-semibold text-white mb-2",
                      children: "Paste HTML Code or Upload File",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-zinc-400 mb-3",
                      children:
                        'Click "Try Sample HTML" to see a demo, or upload your own HTML file',
                    }),
                    e.jsx("p", {
                      className: "text-xs text-zinc-600",
                      children:
                        "Supports complete HTML documents • Perfect CSS preservation • No limits",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4",
              children: [
                {
                  Icon: g,
                  title: "Perfect CSS Styling",
                  desc: "Preserves gradients, shadows, flexbox, grid, fonts, and all modern CSS3 features in your PDF.",
                },
                {
                  Icon: I,
                  title: "High Resolution Output",
                  desc: "Up to 288 DPI (3x scaling) for ultra-sharp text and images. Perfect for print and professional use.",
                },
                {
                  Icon: ce,
                  title: "100% Private",
                  desc: "All conversion happens in your browser. Your HTML never gets uploaded — complete privacy guaranteed.",
                },
              ].map(({ Icon: t, title: i, desc: n }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-6 hover:border-zinc-700 transition-all",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-9 h-9 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center mb-3",
                        children: e.jsx(t, {
                          className: "w-4 h-4 md:w-5 md:h-5 text-zinc-300",
                        }),
                      }),
                      e.jsx("h3", {
                        className:
                          "font-semibold text-white mb-1.5 text-sm md:text-base",
                        children: i,
                      }),
                      e.jsx("p", {
                        className: "text-xs md:text-sm text-zinc-400",
                        children: n,
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className:
                    "text-xl md:text-2xl font-bold text-white mb-6 text-center",
                  children: "How to Convert HTML to PDF",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8",
                  children: [
                    [
                      "Add HTML Code",
                      "Paste your HTML code, upload an HTML file, or try our sample to see it in action.",
                    ],
                    [
                      "Preview & Adjust",
                      "Preview your HTML and adjust page size, orientation, and quality settings.",
                    ],
                    [
                      "Generate PDF",
                      "Click generate and download your high-quality PDF with perfect styling preserved.",
                    ],
                  ].map(([t, i], n) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex gap-3 md:flex-col md:text-center md:items-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-8 h-8 md:w-10 md:h-10 bg-zinc-700 border border-zinc-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm md:text-base",
                            children: n + 1,
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-semibold text-white mb-1 text-sm",
                                children: t,
                              }),
                              e.jsx("p", {
                                className: "text-xs text-zinc-400",
                                children: i,
                              }),
                            ],
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
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "Advanced CSS & HTML Support",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4",
                  children: [
                    [
                      "CSS3 Gradients",
                      "Linear, radial, and conic gradients fully supported",
                    ],
                    [
                      "Box Shadows & Effects",
                      "Shadows, blur effects, and opacity preserved",
                    ],
                    ["Flexbox & Grid", "Modern layout systems work perfectly"],
                    ["Web Fonts", "Google Fonts and custom fonts supported"],
                    [
                      "Responsive Images",
                      "High-resolution images with proper scaling",
                    ],
                    [
                      "Tables & Forms",
                      "Complex tables and form layouts preserved",
                    ],
                  ].map(([t, i]) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx(I, {
                            className:
                              "w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0",
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h4", {
                                className: "font-medium text-white text-sm",
                                children: t,
                              }),
                              e.jsx("p", {
                                className: "text-xs text-zinc-400",
                                children: i,
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
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-8",
              children: [
                e.jsx("h2", {
                  className: "text-xl md:text-2xl font-bold text-white mb-5",
                  children: "Perfect For",
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4",
                  children: [
                    {
                      icon: "📧",
                      title: "Email Templates",
                      desc: "Convert HTML email templates to PDF for archiving or printing",
                    },
                    {
                      icon: "🌐",
                      title: "Save Webpages",
                      desc: "Save entire webpages as PDF documents with all styling intact",
                    },
                    {
                      icon: "📄",
                      title: "Reports & Invoices",
                      desc: "Generate professional reports and invoices from HTML templates",
                    },
                    {
                      icon: "📱",
                      title: "Responsive Designs",
                      desc: "Convert responsive HTML designs to printable PDF format",
                    },
                    {
                      icon: "📊",
                      title: "Data Visualizations",
                      desc: "Export charts, graphs, and data visualizations to PDF",
                    },
                    {
                      icon: "🎨",
                      title: "Design Mockups",
                      desc: "Convert HTML/CSS design mockups to shareable PDFs",
                    },
                  ].map(({ icon: t, title: i, desc: n }) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-all",
                        children: [
                          e.jsx("div", {
                            className: "text-2xl mb-2",
                            children: t,
                          }),
                          e.jsx("h4", {
                            className: "font-semibold text-white text-sm mb-1",
                            children: i,
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-400",
                            children: n,
                          }),
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-5 md:p-6 text-center",
              children: [
                e.jsx("h2", {
                  className: "text-lg md:text-xl font-bold text-white mb-2",
                  children: "Ready to Convert HTML to PDF?",
                }),
                e.jsx("p", {
                  className: "text-zinc-400 text-sm mb-4",
                  children:
                    "Professional PDFs from your HTML. Free, instant, and private.",
                }),
                e.jsxs("button", {
                  onClick: () => {
                    (h("code"), a(u));
                  },
                  className:
                    "inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-semibold text-sm cursor-pointer transition-all touch-manipulation active:scale-[0.98]",
                  children: [
                    e.jsx(g, { className: "w-4 h-4" }),
                    "Try Sample HTML",
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { ue as default };
