import { r as x, j as e, e as Ct } from "./react-vendor-Bc7KCos-.js";
const q = 5 * 1024 * 1024,
  Nn = q * 0.92,
  je = {
    scn: {
      label: "SCN Reply",
      sublabel: "Show Cause Notice",
      code: "SCN",
      maxFiles: 4,
      portalPath: "Services → User Services → My Applications → SCN Reply",
    },
    appeal: {
      label: "Appeal",
      sublabel: "APL-01 / APL-03",
      code: "APL",
      maxFiles: 5,
      portalPath: "Services → User Services → My Applications → Appeals",
    },
  },
  ee = [
    {
      id: "balanced",
      value: "/ebook",
      label: "Balanced",
      tag: "Recommended",
      desc: "150 DPI · ~40–55% smaller",
      jpegQuality: 60,
      colorRes: 150,
      grayRes: 150,
      monoRes: 300,
    },
    {
      id: "maximum",
      value: "/screen",
      label: "Maximum",
      tag: "Smallest",
      desc: "72 DPI · ~60–75% smaller",
      jpegQuality: 40,
      colorRes: 72,
      grayRes: 72,
      monoRes: 150,
    },
  ],
  Xe = {
    yellow: {
      bg: [1, 0.97, 0.74],
      border: [0.7, 0.48, 0.05],
      text: [0.12, 0.06, 0],
    },
    red: {
      bg: [1, 0.92, 0.92],
      border: [0.75, 0.1, 0.1],
      text: [0.6, 0.05, 0.05],
    },
    blue: {
      bg: [0.92, 0.95, 1],
      border: [0.1, 0.3, 0.75],
      text: [0.08, 0.2, 0.65],
    },
    green: {
      bg: [0.92, 1, 0.92],
      border: [0.1, 0.6, 0.1],
      text: [0.05, 0.45, 0.05],
    },
    white: { bg: [1, 1, 1], border: [0.4, 0.4, 0.4], text: [0, 0, 0] },
  },
  ce = [
    { v: "yellow", hex: "#fef08a", border: "#ca8a04", label: "Yellow" },
    { v: "red", hex: "#fecaca", border: "#dc2626", label: "Red" },
    { v: "blue", hex: "#bfdbfe", border: "#2563eb", label: "Blue" },
    { v: "green", hex: "#bbf7d0", border: "#16a34a", label: "Green" },
    { v: "white", hex: "#ffffff", border: "#71717a", label: "White" },
  ],
  Se = () => Math.random().toString(36).slice(2, 9),
  I = (s) =>
    s == null
      ? "—"
      : s < 1024
        ? `${s} B`
        : s < 1048576
          ? `${(s / 1024).toFixed(1)} KB`
          : `${(s / 1048576).toFixed(2)} MB`,
  ze = (s, a) => (a > 0 ? `${(((a - s) / a) * 100).toFixed(0)}%` : "—"),
  ve = () => {
    const s = new Date();
    return `${s.getFullYear()}${String(s.getMonth() + 1).padStart(2, "0")}${String(s.getDate()).padStart(2, "0")}`;
  },
  xs = (s, a, l) => Math.max(a, Math.min(l, s)),
  we = (s, a) => {
    const l = URL.createObjectURL(new Blob([s], { type: "application/pdf" })),
      r = Object.assign(document.createElement("a"), {
        href: l,
        download: a,
        style: "display:none;position:absolute;left:-9999px",
      });
    (document.body.appendChild(r),
      r.click(),
      setTimeout(() => {
        (document.body.removeChild(r), URL.revokeObjectURL(l));
      }, 1e3));
  },
  ps = () =>
    new Promise((s, a) => {
      if (window.JSZip) return s(window.JSZip);
      const l = document.createElement("script");
      ((l.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"),
        (l.onload = () => s(window.JSZip)),
        (l.onerror = () => a(new Error("Failed to load JSZip"))),
        document.head.appendChild(l));
    }),
  on = async (s, a, l, r) => {
    l?.();
    try {
      const c = await ps(),
        i = new c();
      s.forEach((b) => i.file(b.name, b.bytes));
      const m = await i.generateAsync({ type: "blob" }),
        f = URL.createObjectURL(m),
        u = Object.assign(document.createElement("a"), {
          href: f,
          download: a,
          style: "display:none;position:absolute;left:-9999px",
        });
      (document.body.appendChild(u),
        u.click(),
        setTimeout(() => {
          (document.body.removeChild(u), URL.revokeObjectURL(f));
        }, 1e3));
    } finally {
      r?.();
    }
  },
  ms = () =>
    new Promise((s, a) => {
      if (window.pdfjsLib) return s(window.pdfjsLib);
      const l = document.createElement("script");
      ((l.src =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"),
        (l.onload = () => {
          if (!window.pdfjsLib) return a(new Error("pdf.js unavailable"));
          ((window.pdfjsLib.GlobalWorkerOptions.workerSrc =
            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"),
            s(window.pdfjsLib));
        }),
        (l.onerror = () => a(new Error("Failed to load pdf.js"))),
        document.head.appendChild(l));
    }),
  dn = (s) => {
    const a = new Set(),
      l = String(s)
        .split(/[,;\s]+/)
        .map((r) => r.trim())
        .filter(Boolean);
    for (const r of l) {
      const c = r.match(/^(\d+)\s*[-–—]\s*(\d+)$/);
      if (c) {
        const i = Math.min(parseInt(c[1]), parseInt(c[2])),
          m = Math.max(parseInt(c[1]), parseInt(c[2]));
        for (let f = i; f <= m && f <= i + 9; f++) a.add(f);
      } else {
        const i = parseInt(r);
        !isNaN(i) && i > 0 && a.add(i);
      }
    }
    return [...a].sort((r, c) => r - c);
  },
  hs = async (s, a) => {
    const r = await (
      await s.getPage(a)
    ).getTextContent({ normalizeWhitespace: !1 });
    if (!r.items || r.items.length === 0) return "";
    const c = 2.5,
      i = r.items
        .filter((b) => b.str && b.str.length > 0)
        .map((b) => ({
          x: b.transform[4],
          y: b.transform[5],
          w: b.width || 0,
          text: b.str,
          fontName: b.fontName || "",
        }));
    if (i.length === 0) return "";
    const m = new Map();
    for (const b of i) {
      const k = Math.round(b.y / c) * c;
      let z = null;
      for (const [v] of m)
        if (Math.abs(v - k) <= c) {
          z = v;
          break;
        }
      const P = z !== null ? z : k;
      (m.has(P) || m.set(P, []), m.get(P).push(b));
    }
    return [...m.entries()]
      .sort((b, k) => k[0] - b[0])
      .map(([, b]) => {
        const k = b.sort((v, S) => v.x - S.x);
        let z = "",
          P = -1 / 0;
        for (const v of k) {
          if (P > -1 / 0) {
            const S = v.x - P;
            S > 20
              ? (z += "    ")
              : (S > 5 || (S > 0 && !z.endsWith(" "))) && (z += " ");
          }
          ((z += v.text), (P = v.x + v.w));
        }
        return z.trim();
      })
      .filter((b) => b.length > 0).join(`
`);
  },
  xn = async (s, a) => {
    const l = await ms(),
      r = await s.arrayBuffer(),
      c = await l.getDocument({ data: new Uint8Array(r) }).promise,
      i = c.numPages,
      m = [];
    for (const f of a) {
      const u = Math.min(Math.max(f, 1), i),
        b = await hs(c, u);
      b.trim() && m.push(b);
    }
    return {
      text: m.join(`

`),
      totalPages: i,
    };
  },
  us = (s) =>
    s
      .replace(
        /\r\n?/g,
        `
`,
      )
      .replace(
        /[\u00AD\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D]/g,
        "-",
      )
      .replace(/[\u00A0\u00B7\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, " ")
      .replace(/\.{3,}/g, "   ")
      .replace(/_{3,}/g, "   ")
      .replace(/-{4,}/g, "   ")
      .replace(/\|/g, " ")
      .replace(/ {2,}/g, " "),
  pn = (s) => {
    const a = us(s),
      l = a
        .split(
          `
`,
        )
        .map((p) => p.trim())
        .filter((p) => p.length > 1),
      r = [],
      c = new Set(),
      i = (p) => {
        const j = p.trim();
        return /^\d+$/.test(j)
          ? `Annexure ${parseInt(j)}`
          : /^[IVXivx]+$/.test(j)
            ? `Annexure ${j.toUpperCase()}`
            : `Annexure ${j.toUpperCase()}`;
      },
      m = (p, j) => {
        const g = parseInt(String(j).replace(/[^0-9]/g, "") || "0"),
          w = p
            .trim()
            .toUpperCase()
            .replace(/[\s\-–—.()\[\]]/g, "");
        return !c.has(w) && p.trim().length > 0
          ? (c.add(w),
            r.push({ id: Se(), label: p.trim(), page: g > 0 ? String(g) : "" }),
            !0)
          : !1;
      },
      f =
        /^(?:sr\.?\s*no\.?|s\.?\s*no\.?|sno|description|page\s*no\.?|particulars|details|documents?|items?|enclosures?|list\s*of|index|table\s*of|contents?|exhibit\s*(?:no|list)|sl\.?\s*no\.?)\s*$/i,
      u = (p) => {
        if (!p) return 0;
        const j = p.match(/(\d{1,6})\s*(?:[-–—]\s*\d{1,6})?\s*$/);
        if (j) return parseInt(j[1]);
        const g = p.match(/\bpg?[.\s]*(?:no[.\s]*)?\s*(\d{1,6})\b/i);
        return g ? parseInt(g[1]) : 0;
      },
      b = /^(?:and|the|of|in|to|for|or|is|at|by|an|as|no|not|yes)$/i,
      k = [
        /\bann(?:ex(?:ure)?|x(?:ure)?)?\.?\s*[-–—:#/\\]?\s*([0-9]{1,3}|[IVXivx]{1,5}|[A-Z]{1,3})\b/i,
        /\bann(?:ex(?:ure)?|x(?:ure)?)?\.?\s*(?:no\.?|number|num\.?|#)?\s*[-–—]?\s*([0-9]{1,3}|[IVXivx]{1,5}|[A-Z]{1,3})\b/i,
        /\bexhibit\s*[-–—:#]?\s*([0-9]{1,3}|[A-Z]{1,3})\b/i,
        /\benclosure\s*[-–—:#]?\s*([0-9]{1,3}|[A-Z]{1,3})\b/i,
        /\bdocument\s*[-–—:#]?\s*([0-9]{1,3}|[A-Z]{1,3})\b/i,
        /\bexbt\.?\s*[-–—:#]?\s*([0-9]{1,3}|[A-Z]{1,3})\b/i,
      ],
      z = (p) => {
        for (const j of k) {
          const g = p.match(j);
          if (!g) continue;
          const w = g[1];
          if (b.test(w) || (/^[a-z]+$/i.test(w) && w.length > 4)) continue;
          const y = g.index,
            D = y > 0 ? p[y - 1] : " ";
          if (!(/[a-z]/i.test(D) && !/[\s\-–—:#/\\(\[]/i.test(D))) return w;
        }
        return null;
      },
      P = new Set();
    for (let p = 0; p < l.length; p++) {
      const j = l[p];
      if (f.test(j)) continue;
      const g = z(j);
      if (!g) continue;
      const w = i(g);
      let y = u(j);
      if (!y)
        for (let D = p + 1; D <= Math.min(p + 3, l.length - 1); D++) {
          const L = l[D];
          if (z(L)) break;
          const T = u(L);
          if (T > 0) {
            y = T;
            break;
          }
        }
      (m(w, y), P.add(p));
    }
    if (r.length < 3)
      for (let p = 0; p < l.length; p++) {
        if (P.has(p)) continue;
        const j = l[p];
        if (f.test(j)) continue;
        const g = j.match(
          /^(\d{1,2})[.):\-\s]\s*\S.{4,120}?\s+(\d{1,5})(?:\s*[-–—]\s*\d+)?\s*$/,
        );
        if (g) {
          const w = parseInt(g[1]),
            y = parseInt(g[2]);
          w !== y && w <= 40 && y > 0 && m(`Annexure ${w}`, y);
        }
      }
    if (r.length === 0) {
      const p =
        /\bann(?:ex(?:ure)?|x(?:ure)?)?\s*[-–—.:/\\#\s]*([0-9]{1,3}|[IVXivx]{1,5}|[A-Za-z]{1,3})\b[^\n]{0,200}?(\d{1,6})(?:\s*[-–—]\s*\d+)?/gi;
      let j;
      for (; (j = p.exec(a)) !== null;) {
        const g = j[1];
        if (b.test(g)) continue;
        const w = i(g),
          y = parseInt(j[2]);
        y > 0 && m(w, y);
      }
    }
    const v = r.filter((p) => parseInt(p.page) > 0),
      S = r.filter((p) => !parseInt(p.page));
    return (
      v.sort((p, j) => parseInt(p.page) - parseInt(j.page)),
      [...v, ...S]
    );
  },
  mn = async (s, a, l, r, c = 10, i = !0, m = "yellow") => {
    const f = await s.arrayBuffer(),
      u = await window.PDFLib.PDFDocument.load(f, { ignoreEncryption: !0 }),
      b = i
        ? window.PDFLib.StandardFonts.HelveticaBold
        : window.PDFLib.StandardFonts.Helvetica,
      k = await u.embedFont(b),
      z = u.getPages(),
      P = [...a]
        .filter((p) => parseInt(p.page) > 0)
        .sort((p, j) => parseInt(p.page) - parseInt(j.page)),
      v = Xe[m] || Xe.yellow,
      S = window.PDFLib.rgb;
    for (const p of P) {
      const j = parseInt(p.page) - 1;
      if (j < 0 || j >= z.length) continue;
      const g = z[j],
        { width: w, height: y } = g.getSize(),
        D = p.label,
        L = c,
        T = k.widthOfTextAtSize(D, L),
        H = Math.max(4, Math.round(L * 0.4)),
        te = T + H * 2,
        X = L + H * 2,
        G = 10,
        J = l === "top-right" ? w - te - G : G,
        R = y - X - G;
      (r === "box" &&
        g.drawRectangle({
          x: J,
          y: R,
          width: te,
          height: X,
          color: S(...v.bg),
          borderColor: S(...v.border),
          borderWidth: 1,
        }),
        g.drawText(D, {
          x: J + (r === "box" ? H : 0),
          y: R + H,
          size: L,
          font: k,
          color: S(...v.text),
        }));
    }
    return u.save();
  },
  We = async (s) => {
    try {
      const a = await s.arrayBuffer(),
        r = (
          new TextDecoder("latin1")
            .decode(new Uint8Array(a.slice(0, Math.min(a.byteLength, 6e5))))
            .match(/\bBT\b/g) || []
        ).length,
        i = (
          await window.PDFLib.PDFDocument.load(a, { ignoreEncryption: !0 })
        ).getPageCount();
      return { type: i > 0 && r / i < 1.5 ? "scanned" : "text", pages: i };
    } catch {
      return { type: "unknown", pages: 0 };
    }
  },
  hn = async (s) => {
    try {
      return (
        await window.PDFLib.PDFDocument.load(await s.arrayBuffer(), {
          ignoreEncryption: !0,
        })
      ).getPageCount();
    } catch {
      return null;
    }
  },
  bs = async (s, a) => {
    const l = await window.PDFLib.PDFDocument.create();
    for (let r = 0; r < s.length; r++) {
      const c = await window.PDFLib.PDFDocument.load(await s[r].arrayBuffer(), {
        ignoreEncryption: !0,
      });
      (await l.copyPages(c, c.getPageIndices())).forEach((i) => l.addPage(i));
    }
    return l.save();
  },
  Ge = async (s, a, l) => {
    const r = await window.PDFLib.PDFDocument.load(s),
      c = r.getPageCount(),
      i = [];
    let m = 0;
    for (; m < c && i.length < a;) {
      const f = i.length === a - 1,
        u = c - m,
        b = a - i.length;
      if (f || u <= b) {
        const g = await window.PDFLib.PDFDocument.create(),
          w = Array.from({ length: u }, (D, L) => m + L);
        (await g.copyPages(r, w)).forEach((D) => g.addPage(D));
        const y = await g.save();
        (i.push({
          bytes: y,
          size: y.length,
          startPage: m + 1,
          endPage: c,
          pageCount: u,
          ok: y.length <= q,
        }),
          l?.(i.length / a));
        break;
      }
      const k = u - (b - 1);
      let z = 1,
        P = Math.min(k, Math.ceil(c / a) * 3),
        v = 1;
      for (; z <= P;) {
        const g = Math.floor((z + P) / 2),
          w = await window.PDFLib.PDFDocument.create(),
          y = Array.from({ length: g }, (L, T) => m + T);
        ((await w.copyPages(r, y)).forEach((L) => w.addPage(L)),
          (await w.save()).length <= Nn ? ((v = g), (z = g + 1)) : (P = g - 1));
      }
      const S = await window.PDFLib.PDFDocument.create(),
        p = Array.from({ length: v }, (g, w) => m + w);
      (await S.copyPages(r, p)).forEach((g) => S.addPage(g));
      const j = await S.save();
      (i.push({
        bytes: j,
        size: j.length,
        startPage: m + 1,
        endPage: m + v,
        pageCount: v,
        ok: j.length <= q,
      }),
        (m += v),
        l?.(i.length / a));
    }
    return { parts: i, total: c };
  },
  gs = async (s, a, l) => {
    const r = await window.PDFLib.PDFDocument.load(s),
      c = [0, ...a, l],
      i = [];
    for (let m = 0; m < c.length - 1; m++) {
      const [f, u] = [c[m], c[m + 1]];
      if (u <= f) continue;
      const b = await window.PDFLib.PDFDocument.create();
      (
        await b.copyPages(
          r,
          Array.from({ length: u - f }, (z, P) => f + P),
        )
      ).forEach((z) => b.addPage(z));
      const k = await b.save();
      i.push({
        bytes: k,
        size: k.length,
        startPage: f + 1,
        endPage: u,
        pageCount: u - f,
        ok: k.length <= q,
      });
    }
    return i;
  },
  un = (s, a) =>
    new Promise((l, r) => {
      const c = URL.createObjectURL(new Blob([s], { type: "application/pdf" })),
        i = new Worker("/background-worker.js");
      (i.postMessage({ data: { psDataURL: c, config: a }, target: "wasm" }),
        (i.onmessage = async (m) => {
          try {
            if (m.data?.error) throw new Error(m.data.error);
            const f = await (await fetch(m.data)).arrayBuffer();
            (URL.revokeObjectURL(c), i.terminate(), l(new Uint8Array(f)));
          } catch (f) {
            (URL.revokeObjectURL(c), i.terminate(), r(f));
          }
        }),
        (i.onerror = (m) => {
          (URL.revokeObjectURL(c), i.terminate(), r(new Error(m.message)));
        }));
    }),
  B =
    (s) =>
    ({ c: a }) =>
      e.jsx("svg", {
        className: a,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        dangerouslySetInnerHTML: { __html: s },
      }),
  Ve = B(
    '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>',
  ),
  He = B(
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  ),
  he = B(
    '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  ),
  ye = B('<polyline points="20 6 9 17 4 12"/>'),
  ke = B(
    '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  ),
  Je = B('<polyline points="6 9 12 15 18 9"/>'),
  Nt = B('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  St = B(
    '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  ),
  Ne = B(
    '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  ),
  kt = B(
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  ),
  re = B(
    '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  ),
  bn = B(
    '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"/><polyline points="2.32 6.16 12 11 21.68 6.16"/><line x1="12" y1="22.76" x2="12" y2="11"/>',
  ),
  fs = B(
    '<polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/>',
  ),
  js = B(
    '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  ),
  gn = B(
    '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
  ),
  ie = B(
    '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  ),
  zs = B(
    '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  ),
  vs = B(
    '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>',
  ),
  N = ({ children: s, className: a = "" }) =>
    e.jsx("p", {
      className: `text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 ${a}`,
      children: s,
    }),
  Pe = ({ children: s, v: a = "neutral" }) => {
    const l =
      {
        neutral: "bg-zinc-800 text-zinc-400 border-zinc-700",
        success: "bg-emerald-950 text-emerald-400 border-emerald-800",
        warn: "bg-amber-950 text-amber-400 border-amber-800",
        white: "bg-white text-black border-white",
      }[a] || "bg-zinc-800 text-zinc-400 border-zinc-700";
    return e.jsx("span", {
      className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide border ${l}`,
      children: s,
    });
  },
  fn = ({ value: s, className: a = "" }) =>
    e.jsx("div", {
      className: `h-0.5 bg-zinc-800 rounded-full overflow-hidden ${a}`,
      children: e.jsx("div", {
        className:
          "h-full bg-white rounded-full transition-all duration-500 ease-out",
        style: { width: `${Math.min(s, 100)}%` },
      }),
    }),
  ws = ({ bytes: s }) => {
    const a = Math.min((s / q) * 100, 100),
      l = s > q,
      r = a > 80 && !l,
      c = l ? "bg-red-500" : r ? "bg-amber-500" : "bg-emerald-500",
      i = l ? "text-red-400" : r ? "text-amber-400" : "text-zinc-400";
    return e.jsxs("div", {
      className: "flex items-center gap-2.5 w-full",
      children: [
        e.jsx("div", {
          className:
            "flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden min-w-0",
          children: e.jsx("div", {
            className: `h-full rounded-full ${c} transition-all duration-300`,
            style: { width: `${a}%` },
          }),
        }),
        e.jsx("span", {
          className: `text-[10px] font-mono font-bold tabular-nums flex-shrink-0 ${i}`,
          children: I(s),
        }),
        l &&
          e.jsx("span", {
            className: "text-[9px] font-bold text-red-500 flex-shrink-0",
            children: "OVER",
          }),
        !l &&
          e.jsxs("span", {
            className: "text-[9px] text-zinc-700 font-mono flex-shrink-0",
            children: [a.toFixed(0), "%"],
          }),
      ],
    });
  },
  ys = ({ steps: s, current: a }) =>
    e.jsx("div", {
      className: "flex items-center",
      children: s.map((l, r) => {
        const c = a > r,
          i = a === r;
        return e.jsxs(
          Ct.Fragment,
          {
            children: [
              e.jsxs("div", {
                className: "flex flex-col items-center gap-1.5 flex-shrink-0",
                children: [
                  e.jsx("div", {
                    className: `w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black border transition-all duration-300 ${c ? "bg-white border-white text-black" : i ? "bg-transparent border-zinc-400 text-zinc-300" : "bg-transparent border-zinc-800 text-zinc-700"}`,
                    children: c ? "✓" : r + 1,
                  }),
                  e.jsx("span", {
                    className: `text-[9px] font-semibold uppercase tracking-wide whitespace-nowrap hidden sm:block transition-colors ${i ? "text-zinc-300" : c ? "text-zinc-600" : "text-zinc-800"}`,
                    children: l,
                  }),
                ],
              }),
              r < s.length - 1 &&
                e.jsx("div", {
                  className: `flex-1 h-px mx-2 transition-colors duration-300 ${c ? "bg-zinc-600" : "bg-zinc-800"}`,
                }),
            ],
          },
          l,
        );
      }),
    }),
  Sn = ({ info: s }) =>
    !s || s.type === "unknown"
      ? null
      : s.type === "scanned"
        ? e.jsx(Pe, { v: "warn", children: "⚠ Scanned" })
        : e.jsx(Pe, { v: "success", children: "✓ Text PDF" }),
  Ns = (s) => {
    if (!s) return null;
    const a = new Date(s).setHours(23, 59, 59, 0) - Date.now(),
      l = a / 36e5;
    return a < 0
      ? "overdue"
      : l <= 24
        ? "critical"
        : l <= 48
          ? "urgent"
          : l <= 120
            ? "soon"
            : "ok";
  },
  Ss = (s) => {
    if (!s) return null;
    const a = new Date(s).setHours(23, 59, 59, 0) - Date.now(),
      l = a / 36e5,
      r = Math.floor(l / 24);
    return a < 0
      ? "Deadline has passed"
      : l < 1
        ? "Due in under 1 hour"
        : l < 24
          ? `Due in ${Math.floor(l)} hours`
          : r === 1
            ? "Due tomorrow"
            : `Due in ${r} days`;
  },
  jn = ({ deadline: s }) => {
    const a = Ns(s),
      l = Ss(s);
    if (!a || a === "ok") return null;
    const r = {
      overdue: {
        bg: "bg-red-950/60 border-red-700/40",
        icon: "text-red-400 animate-pulse",
        text: "text-red-300",
        note: "File immediately",
      },
      critical: {
        bg: "bg-red-950/30 border-red-800/30",
        icon: "text-red-400 animate-pulse",
        text: "text-red-300",
        note: "Urgent",
      },
      urgent: {
        bg: "bg-amber-950/30 border-amber-700/30",
        icon: "text-amber-400",
        text: "text-amber-300",
        note: "48 h window",
      },
      soon: {
        bg: "bg-zinc-900 border-zinc-700/40",
        icon: "text-zinc-500",
        text: "text-zinc-400",
        note: "",
      },
    }[a];
    return e.jsxs("div", {
      className: `flex items-center gap-3 px-4 py-3.5 rounded-2xl border ${r.bg}`,
      children: [
        e.jsx(js, { c: `w-4 h-4 flex-shrink-0 ${r.icon}` }),
        e.jsx("span", {
          className: `text-sm font-semibold flex-1 ${r.text}`,
          children: l,
        }),
        r.note &&
          e.jsx("span", {
            className: "text-[10px] font-mono text-zinc-600 flex-shrink-0",
            children: r.note,
          }),
      ],
    });
  },
  zn = ({ f: s, onDownload: a }) => {
    const l = s.name.replace(/\.pdf$/i, "").split("_"),
      r = l.find((m) => m.startsWith("Part")) || l[0],
      c = l.filter((m) => !m.startsWith("Part")).join("_") + ".pdf",
      i = !s.ok;
    return e.jsxs("div", {
      className:
        "px-4 py-4 hover:bg-zinc-900/40 active:bg-zinc-900/60 transition-colors",
      children: [
        e.jsxs("div", {
          className: "flex items-start gap-3",
          children: [
            e.jsxs("div", {
              className: `w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border ${i ? "bg-red-950/50 border-red-800/50" : "bg-zinc-900 border-zinc-800"}`,
              children: [
                e.jsxs("span", {
                  className: `text-[9px] font-black font-mono leading-none ${i ? "text-red-400" : "text-zinc-400"}`,
                  children: [s.index, "/", s.total],
                }),
                i &&
                  e.jsx("span", {
                    className: "text-[7px] text-red-500 font-bold mt-0.5",
                    children: "OVER",
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                e.jsx("p", {
                  className:
                    "text-white text-sm font-black font-mono leading-tight",
                  children: r,
                }),
                e.jsx("p", {
                  className:
                    "text-zinc-600 text-[10px] font-mono truncate mt-0.5",
                  children: c,
                }),
                e.jsxs("p", {
                  className: "text-zinc-700 text-[10px] mt-1",
                  children: [
                    "pp.",
                    s.startPage,
                    "–",
                    s.endPage,
                    " · ",
                    s.pageCount,
                    " pages",
                  ],
                }),
              ],
            }),
            e.jsxs("button", {
              onClick: a,
              className:
                "flex items-center gap-1.5 px-3 h-10 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold rounded-xl transition-all flex-shrink-0 touch-manipulation",
              children: [
                e.jsx(He, { c: "w-3.5 h-3.5" }),
                e.jsx("span", {
                  className: "hidden sm:inline",
                  children: "Save",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "mt-3 pl-13",
          children: e.jsx(ws, { bytes: s.size }),
        }),
      ],
    });
  },
  ks = ({
    totalPages: s,
    splitPoints: a,
    setSplitPoints: l,
    outputFiles: r,
    onReapply: c,
    reapplying: i,
  }) => {
    const m = x.useRef(null),
      f = x.useRef(null),
      [u, b] = Ct.useState(a);
    Ct.useEffect(() => b(a), [JSON.stringify(a)]);
    const k = (S) => (S.touches ? S.touches[0].clientX : S.clientX),
      z = (S, p) => {
        (S.preventDefault(),
          (f.current = { idx: p, startX: k(S), origPoint: u[p] }));
        const j = (w) => {
            if (!f.current || !m.current) return;
            const { idx: y, startX: D, origPoint: L } = f.current,
              T = m.current.getBoundingClientRect().width,
              H = Math.round(((k(w) - D) / T) * s),
              te = y > 0 ? u[y - 1] + 1 : 1,
              X = u[y + 1] != null ? u[y + 1] - 1 : s - 1;
            b((G) => G.map((J, R) => (R === y ? xs(L + H, te, X) : J)));
          },
          g = () => {
            ((f.current = null),
              window.removeEventListener("mousemove", j),
              window.removeEventListener("touchmove", j),
              window.removeEventListener("mouseup", g),
              window.removeEventListener("touchend", g));
          };
        (window.addEventListener("mousemove", j),
          window.addEventListener("touchmove", j, { passive: !1 }),
          window.addEventListener("mouseup", g),
          window.addEventListener("touchend", g));
      },
      P = JSON.stringify(u) !== JSON.stringify(a),
      v = [0, ...u, s];
    return e.jsxs("div", {
      className:
        "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
      children: [
        e.jsxs("div", {
          className:
            "px-4 py-3.5 flex items-center justify-between gap-3 border-b border-zinc-800",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(N, { children: "Page Split Map" }),
                e.jsxs("p", {
                  className: "text-[10px] text-zinc-600 mt-0.5",
                  children: ["Drag dividers to adjust · ", s, " total pages"],
                }),
              ],
            }),
            P &&
              e.jsx("button", {
                onClick: () => {
                  (l(u), c(u));
                },
                disabled: i,
                className:
                  "flex items-center gap-1.5 px-3 h-9 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-xs font-black rounded-xl transition-all disabled:opacity-40 touch-manipulation flex-shrink-0",
                children: i
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(re, { c: "w-3 h-3 animate-spin" }),
                        " Splitting…",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [e.jsx(fs, { c: "w-3 h-3" }), " Apply"],
                    }),
              }),
          ],
        }),
        e.jsxs("div", {
          className: "p-4 space-y-4",
          children: [
            e.jsx("div", {
              ref: m,
              className:
                "relative h-14 flex rounded-xl overflow-hidden border border-zinc-800 select-none touch-none",
              children: v.slice(0, -1).map((S, p) => {
                const j = v[p + 1],
                  g = ((j - S) / s) * 100,
                  w = r?.[p],
                  y = w && !w.ok;
                return e.jsxs(
                  "div",
                  {
                    className: `relative flex flex-col items-center justify-center text-center ${y ? "bg-red-950/50" : p % 2 === 0 ? "bg-zinc-800/70" : "bg-zinc-700/40"}`,
                    style: { width: `${g}%`, minWidth: 0 },
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[9px] font-black text-zinc-300 font-mono leading-none",
                        children: p + 1,
                      }),
                      w &&
                        e.jsx("span", {
                          className: `text-[8px] font-mono leading-none mt-0.5 ${y ? "text-red-400" : "text-zinc-500"}`,
                          children: I(w.size),
                        }),
                      e.jsxs("span", {
                        className:
                          "text-[8px] text-zinc-600 leading-none mt-0.5",
                        children: [j - S, "p"],
                      }),
                      p < v.length - 2 &&
                        e.jsx("div", {
                          onMouseDown: (D) => z(D, p),
                          onTouchStart: (D) => z(D, p),
                          className:
                            "absolute right-0 top-0 bottom-0 w-5 cursor-col-resize z-10 flex items-center justify-center group touch-manipulation",
                          children: e.jsx("div", {
                            className:
                              "w-px h-8 bg-white/25 group-hover:bg-white/70 group-active:bg-white transition-colors",
                          }),
                        }),
                    ],
                  },
                  p,
                );
              }),
            }),
            e.jsx("div", {
              className: "flex flex-wrap gap-x-4 gap-y-1.5",
              children: v.slice(0, -1).map((S, p) => {
                const j = v[p + 1],
                  g = r?.[p];
                return e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 text-[10px]",
                    children: [
                      e.jsxs("span", {
                        className: "font-black text-zinc-400 font-mono",
                        children: ["P", p + 1],
                      }),
                      e.jsxs("span", {
                        className: "text-zinc-600 font-mono",
                        children: ["pp.", S + 1, "–", j],
                      }),
                      g &&
                        e.jsxs("span", {
                          className: `font-mono ${g.ok ? "text-zinc-700" : "text-red-400 font-bold"}`,
                          children: ["(", I(g.size), ")"],
                        }),
                    ],
                  },
                  p,
                );
              }),
            }),
          ],
        }),
      ],
    });
  },
  vn = ({
    item: s,
    idx: a,
    onRemove: l,
    onMoveUp: r,
    onMoveDown: c,
    isFirst: i,
    isLast: m,
  }) =>
    e.jsxs("div", {
      className: "flex items-center gap-3 px-4 py-3.5",
      children: [
        e.jsxs("div", {
          className: "flex flex-col flex-shrink-0",
          children: [
            e.jsx("button", {
              "aria-label": "Chev",
              onClick: r,
              disabled: i,
              className:
                "p-1.5 text-zinc-700 hover:text-zinc-400 disabled:opacity-20 transition-colors touch-manipulation",
              children: e.jsx(Je, { c: "w-3.5 h-3.5 rotate-180" }),
            }),
            e.jsx("button", {
              "aria-label": "Chev",
              onClick: c,
              disabled: m,
              className:
                "p-1.5 text-zinc-700 hover:text-zinc-400 disabled:opacity-20 transition-colors touch-manipulation",
              children: e.jsx(Je, { c: "w-3.5 h-3.5" }),
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "w-7 h-7 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0",
          children: e.jsx("span", {
            className: "text-[9px] font-black text-zinc-600 font-mono",
            children: a + 1,
          }),
        }),
        e.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [
            e.jsx("p", {
              className: "text-zinc-300 text-xs font-semibold truncate",
              children: s.file.name,
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5",
              children: [
                e.jsx("span", {
                  className: "text-zinc-600 text-[10px] font-mono",
                  children: I(s.file.size),
                }),
                s.pages != null &&
                  e.jsxs("span", {
                    className: "text-zinc-700 text-[10px]",
                    children: [s.pages, "p"],
                  }),
                s.pdfInfo && e.jsx(Sn, { info: s.pdfInfo }),
              ],
            }),
          ],
        }),
        e.jsx("button", {
          "aria-label": "Close",
          onClick: l,
          className:
            "w-8 h-8 flex items-center justify-center text-zinc-700 hover:text-zinc-400 hover:bg-zinc-800 rounded-lg transition-all flex-shrink-0 touch-manipulation",
          children: e.jsx(ke, { c: "w-3.5 h-3.5" }),
        }),
      ],
    }),
  Pt = (s) =>
    ({
      success: "text-emerald-400",
      warn: "text-amber-400",
      error: "text-red-400",
    })[s] || "text-zinc-500",
  Ps = ({ value: s, onChange: a }) =>
    e.jsx("div", {
      className: "flex items-center gap-2",
      children: ce.map(({ v: l, hex: r, border: c, label: i }) =>
        e.jsx(
          "button",
          {
            onClick: () => a(l),
            title: i,
            className: `w-7 h-7 rounded-full border-2 transition-all touch-manipulation flex items-center justify-center ${s === l ? "scale-110 ring-2 ring-white ring-offset-1 ring-offset-zinc-900" : "opacity-70 hover:opacity-100"}`,
            style: { backgroundColor: r, borderColor: c },
            children:
              s === l &&
              e.jsx("span", {
                style: { color: c },
                className: "text-[8px] font-black",
                children: "✓",
              }),
          },
          l,
        ),
      ),
    }),
  Cs = ({
    style: s,
    color: a,
    bold: l,
    fontSize: r,
    label: c = "Annexure 1",
  }) => {
    const i = ce.find((u) => u.v === a) || ce[0],
      m = Xe[a] || Xe.yellow,
      f = {
        fontSize: `${r * 0.85}px`,
        fontWeight: l ? "800" : "400",
        fontFamily: "Helvetica, Arial, sans-serif",
        color: `rgb(${m.text.map((u) => Math.round(u * 255)).join(",")})`,
        padding: s === "box" ? "2px 6px" : "0",
        background: s === "box" ? i.hex : "transparent",
        border: s === "box" ? `1px solid ${i.border}` : "none",
        borderRadius: "3px",
        whiteSpace: "nowrap",
        display: "inline-block",
      };
    return e.jsxs("div", {
      className: "flex items-center gap-3 bg-zinc-900 rounded-xl px-3.5 py-3",
      children: [
        e.jsx("span", {
          className: "text-[10px] text-zinc-600 flex-shrink-0",
          children: "Preview:",
        }),
        e.jsx("span", { style: f, children: c }),
        e.jsx("div", {
          className: "flex-1 min-w-0",
          children: e.jsxs("p", {
            className: "text-[10px] text-zinc-400 leading-snug",
            children: [
              r,
              "pt · ",
              l ? "Bold" : "Regular",
              " ·",
              " ",
              ce.find((u) => u.v === a)?.label || a,
            ],
          }),
        }),
      ],
    });
  },
  $s = ({ list: s, setList: a, totalPages: l }) => {
    const r = (c, i, m) =>
      a((f) => f.map((u, b) => (b === c ? { ...u, [i]: m } : u)));
    return e.jsxs("div", {
      className:
        "bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800",
      children: [
        e.jsxs("div", {
          className:
            "grid grid-cols-[20px_1fr_72px_28px] items-center gap-0 px-3 py-2 border-b border-zinc-800/60",
          children: [
            e.jsx("span", {
              className: "text-[9px] text-zinc-700 font-mono",
              children: "#",
            }),
            e.jsx("span", {
              className: "text-[9px] text-zinc-700 font-mono",
              children: "Label",
            }),
            e.jsx("span", {
              className: "text-[9px] text-zinc-700 font-mono text-center",
              children: "Page",
            }),
            e.jsx("span", {}),
          ],
        }),
        e.jsx("div", {
          className: "divide-y divide-zinc-800/40 max-h-56 overflow-y-auto",
          children: s.map((c, i) => {
            const m = parseInt(c.page),
              f = c.page !== "" && (!m || m < 1 || (l > 0 && m > l));
            return e.jsxs(
              "div",
              {
                className:
                  "grid grid-cols-[20px_1fr_72px_28px] items-center gap-2 px-3 py-2",
                children: [
                  e.jsx("span", {
                    className: "text-[9px] font-mono text-zinc-700",
                    children: i + 1,
                  }),
                  e.jsx("input", {
                    value: c.label,
                    onChange: (u) => r(i, "label", u.target.value),
                    className:
                      "h-8 bg-zinc-800 border border-zinc-700 focus:border-zinc-500 rounded-lg px-2 text-xs text-zinc-300 outline-none font-mono min-w-0 w-full",
                  }),
                  e.jsx("input", {
                    type: "number",
                    value: c.page,
                    onChange: (u) => r(i, "page", u.target.value),
                    className: `h-8 bg-zinc-800 border rounded-lg px-2 text-xs outline-none font-mono text-center w-full ${f ? "border-red-700 text-red-400" : c.page ? "border-zinc-700 focus:border-zinc-500 text-zinc-300" : "border-amber-700/60 text-amber-600"}`,
                    placeholder: "pg",
                  }),
                  e.jsx("button", {
                    "aria-label": "Close",
                    onClick: () => a((u) => u.filter((b, k) => k !== i)),
                    className:
                      "w-7 h-7 flex items-center justify-center text-zinc-700 hover:text-zinc-400 touch-manipulation",
                    children: e.jsx(ke, { c: "w-3 h-3" }),
                  }),
                ],
              },
              c.id,
            );
          }),
        }),
        e.jsx("div", {
          className: "px-3 py-2.5 border-t border-zinc-800/60",
          children: e.jsxs("button", {
            onClick: () =>
              a((c) => [
                ...c,
                { id: Se(), label: `Annexure ${c.length + 1}`, page: "" },
              ]),
            className:
              "text-[10px] text-zinc-600 hover:text-zinc-400 font-semibold flex items-center gap-1.5 transition-colors touch-manipulation",
            children: [e.jsx(Ne, { c: "w-3 h-3" }), " Add Row"],
          }),
        }),
      ],
    });
  },
  wn = ({ value: s, onChange: a, placeholder: l = "e.g. 1 or 1,2 or 1-3" }) =>
    e.jsxs("div", {
      children: [
        e.jsx("input", {
          type: "text",
          value: s,
          onChange: (r) => a(r.target.value),
          placeholder: l,
          className:
            "w-full h-10 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none font-mono transition-colors",
        }),
        e.jsx("p", {
          className: "text-[9px] text-zinc-700 mt-1 font-mono",
          children:
            'Single: "1" · Multiple: "1,2" · Range: "1-3" · Combined: "1,3-5"',
        }),
      ],
    }),
  yn = ({
    pos: s,
    setPos: a,
    style: l,
    setStyle: r,
    fontSize: c,
    setFontSize: i,
    bold: m,
    setBold: f,
    color: u,
    setColor: b,
    previewLabel: k,
  }) =>
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className: "grid grid-cols-2 gap-3",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(N, { className: "mb-2", children: "Position" }),
                e.jsx("div", {
                  className: "flex gap-1.5",
                  children: [
                    { v: "top-right", l: "Top-right" },
                    { v: "top-left", l: "Top-left" },
                  ].map(({ v: z, l: P }) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => a(z),
                        className: `flex-1 py-2.5 rounded-xl text-[11px] font-bold border transition-all touch-manipulation ${s === z ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                        children: P,
                      },
                      z,
                    ),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(N, { className: "mb-2", children: "Style" }),
                e.jsx("div", {
                  className: "flex gap-1.5",
                  children: [
                    { v: "box", l: "Box" },
                    { v: "text", l: "Text" },
                  ].map(({ v: z, l: P }) =>
                    e.jsx(
                      "button",
                      {
                        onClick: () => r(z),
                        className: `flex-1 py-2.5 rounded-xl text-[11px] font-bold border transition-all touch-manipulation ${l === z ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                        children: P,
                      },
                      z,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          children: [
            e.jsx(N, { className: "mb-2", children: "Font Size" }),
            e.jsx("div", {
              className: "flex gap-1.5",
              children: [8, 10, 12, 14, 16].map((z) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => i(z),
                    className: `flex-1 py-2.5 rounded-xl text-[11px] font-bold border transition-all touch-manipulation ${c === z ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                    children: [z, "pt"],
                  },
                  z,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-2 gap-3",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(N, { className: "mb-2", children: "Weight" }),
                e.jsxs("button", {
                  onClick: () => f(!m),
                  className: `w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[11px] font-bold border transition-all touch-manipulation ${m ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                  children: [
                    e.jsx(vs, { c: "w-3.5 h-3.5" }),
                    " ",
                    m ? "Bold" : "Regular",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(N, { className: "mb-2", children: "Color" }),
                e.jsx("div", {
                  className: "flex items-center h-9 gap-1.5",
                  children: e.jsx(Ps, { value: u, onChange: b }),
                }),
              ],
            }),
          ],
        }),
        k && e.jsx(Cs, { style: l, color: u, bold: m, fontSize: c, label: k }),
      ],
    });
function Is({ showNotification: s }) {
  const [a, l] = x.useState("single"),
    [r, c] = x.useState("upload"),
    [i, m] = x.useState(null),
    [f, u] = x.useState(null),
    [b, k] = x.useState(""),
    [z, P] = x.useState(""),
    [v, S] = x.useState("scn"),
    [p, j] = x.useState(!0),
    [g, w] = x.useState("/ebook"),
    [y, D] = x.useState(!1),
    [L, T] = x.useState([]),
    [H, te] = x.useState(!1),
    [X, G] = x.useState([]),
    [J, R] = x.useState(0),
    [kn, Ce] = x.useState(""),
    [$t, Ft] = x.useState(null),
    [Pn, $e] = x.useState([]),
    [qe, It] = x.useState(0),
    [V, Fe] = x.useState([]),
    [$, Ke] = x.useState(null),
    [Cn, Ye] = x.useState([]),
    [ne, Ie] = x.useState([]),
    [$n, Dt] = x.useState(!1),
    [Lt, et] = x.useState(!1),
    [De, At] = x.useState(!1),
    [A, K] = x.useState([]),
    [Le, Fn] = x.useState("scn"),
    [tt, nt] = x.useState("queue"),
    [oe, In] = x.useState({ current: 0, total: 0, file: "" }),
    [Dn, st] = x.useState([]),
    [Ae, Mt] = x.useState(!1),
    [de, Bt] = x.useState(null),
    [ue, Me] = x.useState(0),
    [at, Be] = x.useState("upload"),
    [lt, Rt] = x.useState("1"),
    [Et, it] = x.useState(!1),
    [rt, be] = x.useState(""),
    [ct, Re] = x.useState(""),
    [U, se] = x.useState([]),
    [Tt, Ln] = x.useState("top-right"),
    [Ee, An] = x.useState("box"),
    [ot, Mn] = x.useState(10),
    [dt, Bn] = x.useState(!0),
    [Te, Rn] = x.useState("yellow"),
    [Ot, _t] = x.useState(!1),
    [xt, Oe] = x.useState(null),
    [pt, Ut] = x.useState(""),
    [mt, Zt] = x.useState(""),
    [Qt, En] = x.useState("numeric"),
    [Tn, ht] = x.useState(!1),
    [Y, ut] = x.useState(!1),
    [ae, xe] = x.useState([]),
    [bt, On] = x.useState("top-right"),
    [Wt, _n] = x.useState("box"),
    [_e, Un] = x.useState(14),
    [gt, Zn] = x.useState(!0),
    [Gt, Qn] = x.useState("yellow"),
    [ft, Wn] = x.useState("1"),
    [Vt, Ht] = x.useState(!1),
    [Xt, ge] = x.useState(""),
    [jt, Jt] = x.useState(""),
    [zt, qt] = x.useState(""),
    [Kt, Gn] = x.useState("numeric"),
    Yt = x.useRef(null),
    en = x.useRef(null),
    tn = x.useRef(null),
    nn = x.useRef(null),
    E = je[v],
    Ue = je[Le],
    O = (t, n = "info") => G((d) => [...d, { msg: t, type: n }]),
    fe = i
      ? {
          balanced: { est: i.size * 0.5, limit: E.maxFiles * q },
          maximum: { est: i.size * 0.35, limit: E.maxFiles * q },
        }
      : null,
    vt = x.useCallback(
      async (t) => {
        if (t) {
          if (t.type !== "application/pdf") {
            s("Please select a PDF file", "error");
            return;
          }
          (m(t),
            u(null),
            c("configure"),
            Fe([]),
            Ye([]),
            Ke(null),
            G([]),
            et(!1),
            Ie([]),
            ut(!1),
            xe([]),
            ge(""),
            window.PDFLib && We(t).then(u));
        }
      },
      [s],
    ),
    Vn = x.useCallback(
      (t) => {
        (t.preventDefault(), D(!1), vt(t.dataTransfer.files[0]));
      },
      [vt],
    ),
    Hn = async (t) => {
      const n = Array.from(t).filter((o) => o.type === "application/pdf"),
        d = await Promise.all(
          n.map(async (o) => ({
            id: Math.random().toString(36).slice(2),
            file: o,
            pages: window.PDFLib ? await hn(o) : null,
            pdfInfo: window.PDFLib ? await We(o) : null,
          })),
        );
      T((o) => [...o, ...d]);
    },
    Xn = async () => {
      if (L.length < 2) {
        s("Add at least 2 PDFs to merge", "error");
        return;
      }
      te(!0);
      try {
        const t = await bs(L.map((d) => d.file)),
          n = new File(
            [new Blob([t], { type: "application/pdf" })],
            "merged_document.pdf",
            { type: "application/pdf" },
          );
        (m(n), window.PDFLib && u(await We(n)), T([]), c("configure"));
      } catch (t) {
        s(`Merge failed: ${t.message}`, "error");
      } finally {
        te(!1);
      }
    },
    sn = (t) => ({
      quality: t.value,
      contentType: "auto",
      colorImageResolution: t.colorRes,
      grayImageResolution: t.grayRes,
      monoImageResolution: t.monoRes,
      downsampling: "Bicubic",
      embedFonts: !0,
      optimizeFonts: !0,
      jpegQuality: t.jpegQuality,
    }),
    Jn = async () => {
      const t = dn(ft);
      if (!(t.length === 0 || !i)) {
        (Ht(!0), ge(""));
        try {
          const { text: n } = await xn(i, t),
            d = pn(n);
          if (d.length > 0) {
            xe(d);
            const o = d.filter((F) => parseInt(F.page) > 0).length,
              h = d.length - o;
            let M = `Detected ${d.length} annexure${d.length !== 1 ? "s" : ""}`;
            (h > 0 && (M += ` · ${h} need page numbers`),
              (M += " — review before processing"),
              s(M));
          } else
            ge(
              `No annexures detected. The page may be scanned or use a format the extractor doesn't recognise. Try adding more pages (e.g. "1,2") or use Quick Setup below.`,
            );
        } catch (n) {
          ge(
            `Could not read page(s): ${n.message}. Use Quick Setup or add rows manually.`,
          );
        } finally {
          Ht(!1);
        }
      }
    },
    qn = () => {
      const t = parseInt(jt),
        n = parseInt(zt);
      if (!t || t < 1 || !n || n < 1) {
        s("Enter valid count and start page", "error");
        return;
      }
      const d = Array.from({ length: t }, (o, h) => ({
        id: Se(),
        label: `Annexure ${Kt === "alpha" ? String.fromCharCode(65 + h) : String(h + 1)}`,
        page: String(n + h),
      }));
      (xe(d), s(`Generated ${t} annexure rows`));
    },
    Kn = async () => {
      if (!i) return;
      (c("processing"), R(3), G([]));
      let t = i;
      const n = ae.filter((h) => h.label.trim() && parseInt(h.page) > 0);
      if (Y && n.length > 0) {
        (Ce("Stamping annexure labels…"),
          O(`Stamping ${n.length} annexure label(s) at ${bt}…`));
        try {
          const h = await mn(t, n, bt, Wt, _e, gt, Gt);
          ((t = new File([new Blob([h], { type: "application/pdf" })], i.name, {
            type: "application/pdf",
          })),
            O(
              `✓ ${n.length} label(s) applied (${_e}pt${gt ? " Bold" : ""})`,
              "success",
            ));
        } catch (h) {
          O(`Label stamp skipped: ${h.message}`, "warn");
        }
      }
      const d = async (h) => (O(`Compressing — ${h.label}…`), un(t, sn(h))),
        o = [];
      try {
        let h, M;
        if ((Ce("Compressing…"), R(8), p)) {
          O("Auto-Optimize: trying Balanced first…");
          const C = await d(ee[0]);
          (O(
            `Balanced: ${I(t.size)} → ${I(C.length)} (${ze(C.length, t.size)} smaller)`,
          ),
            R(40));
          const { parts: _ } = await Ge(C, E.maxFiles, (W) => R(40 + W * 10));
          if (_.every((W) => W.ok))
            (O("✓ Balanced is sufficient", "success"), (h = C), (M = ee[0]));
          else {
            (O(
              `${_.filter((yt) => !yt.ok).length} part(s) over 5 MB — escalating to Maximum…`,
              "warn",
            ),
              o.push(
                "Auto-Optimize applied Maximum compression — Balanced was insufficient.",
              ),
              R(52));
            const W = await d(ee[1]);
            (O(
              `Maximum: ${I(W.length)} (${ze(W.length, C.length)} further)`,
              "success",
            ),
              (h = W),
              (M = ee[1]));
          }
        } else {
          const C = ee.find((_) => _.value === g);
          ((h = await d(C)),
            (M = C),
            O(`${C.label}: ${I(t.size)} → ${I(h.length)}`));
        }
        (R(63),
          h.length > E.maxFiles * q &&
            o.push(
              `Total compressed size (${I(h.length)}) still exceeds ${E.maxFiles}×5 MB.`,
            ),
          Ce("Smart splitting…"),
          R(66),
          O(`Smart split: targeting ≤${I(Nn)} per part…`));
        const { parts: F, total: Q } = await Ge(h, E.maxFiles, (C) =>
          R(66 + C * 22),
        );
        (O(`Split into ${F.length} parts across ${Q} pages`),
          Ce("Verifying…"),
          R(94));
        const Z = F.filter((C) => !C.ok);
        Z.length === 0
          ? O("✓ All parts within 5 MB", "success")
          : (O(`⚠ ${Z.length} part(s) still exceed 5 MB`, "warn"),
            o.length ||
              o.push(
                `${Z.length} part(s) exceed 5 MB. Try rescanning at 200 DPI.`,
              ));
        const wt = [
            "GST",
            b ? b.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase() : null,
            E.code,
          ]
            .filter(Boolean)
            .join("_"),
          Qe = F.map((C, _) => ({
            ...C,
            name: `${wt}_Part${_ + 1}of${F.length}_${ve()}.pdf`,
            index: _ + 1,
            total: F.length,
          })),
          me = F.slice(0, -1).map((C, _) =>
            F.slice(0, _ + 1).reduce((W, yt) => W + yt.pageCount, 0),
          );
        (Fe(Qe),
          Ft(h),
          $e(me),
          It(Q),
          Ye(o),
          Ke({
            originalSize: i.size,
            compSize: h.length,
            total: Q,
            partsCount: F.length,
            usedPreset: M.label,
            allOk: Z.length === 0,
            labelsApplied: Y && n.length > 0 ? n.length : 0,
          }),
          Ie(Qe.map(() => !1)),
          R(100),
          c("preview"),
          s(
            Z.length === 0
              ? `✓ ${F.length} files ready for ${E.label}`
              : `Files created — ${Z.length} part(s) need review`,
          ));
      } catch (h) {
        (O(`Error: ${h.message}`, "error"),
          s(`Processing failed: ${h.message}`, "error"),
          c("configure"));
      }
    },
    Yn = async (t) => {
      if ($t) {
        Dt(!0);
        try {
          const n = await gs($t, t, qe),
            d = [
              "GST",
              b ? b.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase() : null,
              E.code,
            ]
              .filter(Boolean)
              .join("_");
          (Fe(
            n.map((o, h) => ({
              ...o,
              name: `${d}_Part${h + 1}of${n.length}_${ve()}.pdf`,
              index: h + 1,
              total: n.length,
            })),
          ),
            $e(t),
            s("Split points applied"));
        } catch {
          s("Re-split failed", "error");
        } finally {
          Dt(!1);
        }
      }
    },
    Ze = () => {
      (m(null),
        c("upload"),
        u(null),
        Fe([]),
        Ye([]),
        Ke(null),
        G([]),
        et(!1),
        Ie([]),
        Ft(null),
        $e([]),
        It(0),
        R(0),
        T([]),
        P(""),
        ut(!1),
        xe([]),
        ge(""),
        Jt(""),
        qt(""));
    },
    es = async (t) => {
      const n = Array.from(t).filter((o) => o.type === "application/pdf"),
        d = await Promise.all(
          n.map(async (o) => ({
            id: Math.random().toString(36).slice(2),
            file: o,
            status: "pending",
            result: null,
            pages: window.PDFLib ? await hn(o) : null,
            pdfInfo: window.PDFLib ? await We(o) : null,
          })),
        );
      K((o) => [...o, ...d]);
    },
    ts = async () => {
      if (!A.length) return;
      (nt("processing"), st([]));
      const t = (n, d = "info") => st((o) => [...o, { msg: n, type: d }]);
      for (let n = 0; n < A.length; n++) {
        const d = A[n];
        (In({ current: n + 1, total: A.length, file: d.file.name }),
          t(`[${n + 1}/${A.length}] ${d.file.name}`),
          K((o) =>
            o.map((h, M) => (M === n ? { ...h, status: "processing" } : h)),
          ));
        try {
          const o = async (C) => un(d.file, sn(C)),
            h = await o(ee[0]),
            { parts: M } = await Ge(h, Ue.maxFiles);
          let F = h,
            Q = "Balanced";
          M.every((C) => C.ok) ||
            (t("  ↑ Escalating to Maximum", "warn"),
            (F = await o(ee[1])),
            (Q = "Maximum"));
          const { parts: Z } = await Ge(F, Ue.maxFiles),
            wt = d.file.name
              .replace(/\.pdf$/i, "")
              .replace(/[^a-zA-Z0-9]/g, "_")
              .slice(0, 28),
            Qe = Z.map((C, _) => ({
              ...C,
              name: `GST_${Ue.code}_${wt}_Part${_ + 1}of${Z.length}_${ve()}.pdf`,
              index: _ + 1,
              total: Z.length,
            })),
            me = Z.filter((C) => !C.ok).length;
          (t(
            `  ✓ ${Z.length} parts · ${Q} · ${ze(F.length, d.file.size)} smaller${me ? ` · ⚠ ${me} over 5 MB` : ""}`,
            me ? "warn" : "success",
          ),
            K((C) =>
              C.map((_, W) =>
                W === n
                  ? {
                      ..._,
                      status: "done",
                      result: {
                        output: Qe,
                        compSize: F.length,
                        usedPreset: Q,
                        allOk: me === 0,
                      },
                    }
                  : _,
              ),
            ));
        } catch (o) {
          (t(`  ✗ ${o.message}`, "error"),
            K((h) =>
              h.map((M, F) => (F === n ? { ...M, status: "error" } : M)),
            ));
        }
      }
      (nt("results"),
        s(
          `Batch complete — ${A.filter((n) => n.status === "done").length}/${A.length} processed`,
        ));
    },
    ns = () => {
      let t = 0;
      A.forEach((n) => {
        (n.result?.output || []).forEach((d) => {
          (setTimeout(() => we(d.bytes, d.name), t), (t += 380));
        });
      });
    },
    an = () => A.flatMap((t) => t.result?.output || []),
    ln = x.useCallback(
      async (t) => {
        if (t) {
          if (t.type !== "application/pdf") {
            s("Please select a PDF file", "error");
            return;
          }
          if (
            (Bt(t),
            Be("configure"),
            se([]),
            Re(""),
            be(""),
            Oe(null),
            Me(0),
            window.PDFLib)
          )
            try {
              const n = await window.PDFLib.PDFDocument.load(
                await t.arrayBuffer(),
                { ignoreEncryption: !0 },
              );
              Me(n.getPageCount());
            } catch {}
        }
      },
      [s],
    ),
    ss = async () => {
      const t = dn(lt);
      if (t.length !== 0) {
        (it(!0), be(""), Re(""));
        try {
          const { text: n, totalPages: d } = await xn(de, t);
          (Me(d), Re(n));
          const o = pn(n);
          if (o.length > 0) {
            se(o);
            const h = o.filter((Q) => parseInt(Q.page) > 0).length,
              M = o.length - h;
            let F = `Detected ${o.length} annexure${o.length !== 1 ? "s" : ""}`;
            (M > 0 && (F += ` · ${M} need page numbers`),
              (F += " — review and confirm"),
              s(F));
          } else
            be(
              'No annexures detected automatically. The page may be scanned or use an unusual format. Try adding more pages (e.g. "1,2" or "1-3") or use Quick Setup below.',
            );
        } catch (n) {
          be(
            `Could not read page(s): ${n.message}. Try Quick Setup or manual entry.`,
          );
        } finally {
          it(!1);
        }
      }
    },
    as = () => {
      const t = parseInt(pt),
        n = parseInt(mt);
      if (!t || t < 1 || !n || n < 1) {
        s("Enter valid count and start page", "error");
        return;
      }
      const d = Array.from({ length: t }, (o, h) => ({
        id: Se(),
        label: `Annexure ${Qt === "alpha" ? String.fromCharCode(65 + h) : String(h + 1)}`,
        page: n + h,
      }));
      (se(d), s(`Generated ${t} annexure rows`));
    },
    ls = () => {
      const t = U.length + 1;
      se((n) => [...n, { id: Se(), label: `Annexure ${t}`, page: "" }]);
    },
    rn = (t, n, d) =>
      se((o) => o.map((h) => (h.id === t ? { ...h, [n]: d } : h))),
    is = (t) => se((n) => n.filter((d) => d.id !== t)),
    rs = async () => {
      const t = U.filter((n) => n.label.trim() && parseInt(n.page) > 0);
      if (!t.length) {
        s("Add at least one valid annexure with label and page", "error");
        return;
      }
      _t(!0);
      try {
        const n = await mn(de, t, Tt, Ee, ot, dt, Te);
        (Oe(n),
          Be("done"),
          s(`✓ ${t.length} annexure label${t.length > 1 ? "s" : ""} stamped`));
      } catch (n) {
        s(`Stamp failed: ${n.message}`, "error");
      } finally {
        _t(!1);
      }
    },
    cn = () => {
      (Bt(null),
        Be("upload"),
        Me(0),
        Rt("1"),
        it(!1),
        be(""),
        Re(""),
        se([]),
        Oe(null),
        Ut(""),
        Zt(""));
    },
    cs =
      { upload: 0, merge: 0, configure: 1, processing: 2, preview: 3 }[r] ?? 0,
    os = new Date().toISOString().split("T")[0],
    ds = () =>
      `${["GST", b ? b.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase() : null, E.code].filter(Boolean).join("_")}_${ve()}.zip`,
    le = U.filter((t) => t.label.trim() && parseInt(t.page) > 0).length,
    pe = ae.filter((t) => t.label.trim() && parseInt(t.page) > 0).length;
  return e.jsxs("div", {
    className: "w-full max-w-xl mx-auto pb-20 space-y-3",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between gap-3 pt-1",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [
              e.jsx("div", {
                className:
                  "w-8 h-8 bg-white rounded-xl flex items-center justify-center flex-shrink-0",
                children: e.jsx(St, { c: "w-4 h-4 text-black" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className:
                      "text-base font-black text-white tracking-tight leading-none",
                    children: "GST Filing Prep",
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] text-zinc-600 font-mono mt-0.5 hidden sm:block",
                    children:
                      "Compress · Split · Verify · Merge · Batch · Label",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex gap-1.5",
            children: Object.values(je).map((t) =>
              e.jsxs(
                "div",
                {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl px-2.5 py-1.5 text-center",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[8px] text-zinc-700 font-mono uppercase tracking-wider leading-none",
                      children: t.code,
                    }),
                    e.jsxs("p", {
                      className:
                        "text-white font-black text-xs font-mono leading-tight mt-0.5",
                      children: [t.maxFiles, "×5MB"],
                    }),
                  ],
                },
                t.code,
              ),
            ),
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex gap-1 bg-zinc-950 border border-zinc-800 rounded-2xl p-1",
        children: [
          { id: "single", label: "Single", Icon: Ve },
          { id: "batch", label: "Batch", Icon: bn },
          { id: "label", label: "Annexure", Icon: ie },
        ].map(({ id: t, label: n, Icon: d }) =>
          e.jsxs(
            "button",
            {
              onClick: () => l(t),
              className: `flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-bold transition-all touch-manipulation ${a === t ? "bg-white text-black" : "text-zinc-600 hover:text-zinc-300 active:text-zinc-200"}`,
              children: [e.jsx(d, { c: "w-4 h-4" }), n],
            },
            t,
          ),
        ),
      }),
      a === "single" &&
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsx(ys, {
              steps: ["Upload", "Configure", "Processing", "Results"],
              current: cs,
            }),
            r === "upload" &&
              e.jsxs("div", {
                className: "space-y-2.5",
                children: [
                  e.jsxs("div", {
                    onDragOver: (t) => {
                      (t.preventDefault(), D(!0));
                    },
                    onDragLeave: () => D(!1),
                    onDrop: Vn,
                    onClick: () => Yt.current?.click(),
                    className: `relative border-2 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all duration-200 touch-manipulation ${y ? "border-zinc-500 bg-zinc-900/50" : "border-zinc-800 hover:border-zinc-600 active:bg-zinc-900/30"}`,
                    children: [
                      e.jsx("input", {
                        ref: Yt,
                        type: "file",
                        accept: "application/pdf",
                        className: "hidden",
                        onChange: (t) => vt(t.target.files[0]),
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col items-center gap-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center",
                            children: e.jsx(Ve, { c: "w-7 h-7 text-zinc-500" }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-white font-bold text-base",
                                children: "Drop your PDF here",
                              }),
                              e.jsx("p", {
                                className: "text-zinc-500 text-sm mt-0.5",
                                children: "or tap to browse",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-zinc-700 text-[10px] font-mono mt-3",
                                children: "100% local · no upload · any size",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: () => c("merge"),
                    className:
                      "w-full flex items-center justify-center gap-2 py-4 bg-zinc-950 hover:bg-zinc-900 active:bg-zinc-800 border border-zinc-800 rounded-2xl text-sm text-zinc-500 hover:text-zinc-300 font-semibold transition-all touch-manipulation",
                    children: [
                      e.jsx(Ne, { c: "w-4 h-4" }),
                      " Merge multiple PDFs first",
                    ],
                  }),
                ],
              }),
            r === "merge" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx(N, { children: "Merge PDFs" }),
                      e.jsx("button", {
                        onClick: () => c("upload"),
                        className:
                          "text-xs text-zinc-600 hover:text-zinc-400 transition-colors py-2 px-1 touch-manipulation",
                        children: "← Back",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    onClick: () => en.current?.click(),
                    className:
                      "border-2 border-dashed border-zinc-800 hover:border-zinc-600 active:border-zinc-500 rounded-2xl p-8 text-center cursor-pointer transition-all touch-manipulation",
                    children: [
                      e.jsx("input", {
                        ref: en,
                        type: "file",
                        accept: "application/pdf",
                        multiple: !0,
                        className: "hidden",
                        onChange: (t) => Hn(t.target.files),
                      }),
                      e.jsx(Ne, { c: "w-6 h-6 text-zinc-600 mx-auto mb-2.5" }),
                      e.jsx("p", {
                        className: "text-zinc-400 text-sm font-semibold",
                        children: "Tap to add PDFs",
                      }),
                      e.jsx("p", {
                        className: "text-zinc-700 text-[10px] font-mono mt-1",
                        children: "Main submission · Annexures · Case law",
                      }),
                    ],
                  }),
                  L.length > 0 &&
                    e.jsxs("div", {
                      className:
                        "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          className:
                            "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                          children: [
                            e.jsxs(N, {
                              children: ["Files to merge (", L.length, ")"],
                            }),
                            e.jsxs("span", {
                              className: "text-[10px] text-zinc-600 font-mono",
                              children: [
                                I(L.reduce((t, n) => t + n.file.size, 0)),
                                " ",
                                "total",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "divide-y divide-zinc-800/50",
                          children: L.map((t, n) =>
                            e.jsx(
                              vn,
                              {
                                item: t,
                                idx: n,
                                isFirst: n === 0,
                                isLast: n === L.length - 1,
                                onRemove: () =>
                                  T((d) => d.filter((o, h) => h !== n)),
                                onMoveUp: () =>
                                  T((d) => {
                                    const o = [...d];
                                    return (
                                      ([o[n - 1], o[n]] = [o[n], o[n - 1]]),
                                      o
                                    );
                                  }),
                                onMoveDown: () =>
                                  T((d) => {
                                    const o = [...d];
                                    return (
                                      ([o[n], o[n + 1]] = [o[n + 1], o[n]]),
                                      o
                                    );
                                  }),
                              },
                              t.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  e.jsx("button", {
                    onClick: Xn,
                    disabled: L.length < 2 || H,
                    className:
                      "w-full py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-sm font-black rounded-2xl transition-all disabled:opacity-40 flex items-center justify-center gap-2 touch-manipulation",
                    children: H
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(re, { c: "w-4 h-4 animate-spin" }),
                            " Merging…",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(St, { c: "w-4 h-4" }),
                            " Merge & Continue →",
                          ],
                        }),
                  }),
                ],
              }),
            r === "configure" &&
              i &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0",
                        children: e.jsx(Ve, { c: "w-5 h-5 text-zinc-400" }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-zinc-200 text-sm font-semibold truncate",
                            children: i.name,
                          }),
                          e.jsxs("div", {
                            className:
                              "flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mt-0.5",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-zinc-600 text-[10px] font-mono",
                                children: I(i.size),
                              }),
                              f?.pages &&
                                e.jsxs("span", {
                                  className: "text-zinc-700 text-[10px]",
                                  children: [f.pages, " pages"],
                                }),
                              f && e.jsx(Sn, { info: f }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        "aria-label": "Close",
                        onClick: Ze,
                        className:
                          "w-9 h-9 flex items-center justify-center text-zinc-700 hover:text-zinc-400 hover:bg-zinc-800 rounded-xl transition-all touch-manipulation",
                        children: e.jsx(ke, { c: "w-4 h-4" }),
                      }),
                    ],
                  }),
                  f?.type === "scanned" &&
                    e.jsxs("div", {
                      className:
                        "flex gap-3 bg-amber-950/20 border border-amber-800/30 rounded-2xl p-4",
                      children: [
                        e.jsx(kt, {
                          c: "w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5",
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-amber-400 text-xs font-bold mb-0.5",
                              children: "Scanned PDF detected",
                            }),
                            e.jsx("p", {
                              className:
                                "text-amber-500/70 text-[10px] leading-relaxed",
                              children:
                                "Compression will be limited. Best results at ≤300 DPI source scan.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs(N, {
                            className: "mb-2",
                            children: [
                              "Case Reference",
                              " ",
                              e.jsx("span", {
                                className:
                                  "normal-case text-zinc-700 font-normal",
                                children: "(optional)",
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "text",
                            value: b,
                            onChange: (t) => k(t.target.value),
                            placeholder: "GSTIN12345 or Appeal-2024-001",
                            className:
                              "w-full h-12 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none transition-colors font-mono",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs(N, {
                            className: "mb-2",
                            children: [
                              "Filing Deadline",
                              " ",
                              e.jsx("span", {
                                className:
                                  "normal-case text-zinc-700 font-normal",
                                children: "(optional)",
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "date",
                            value: z,
                            min: os,
                            onChange: (t) => P(t.target.value),
                            className:
                              "w-full h-12 bg-zinc-950 border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 text-sm text-zinc-300 outline-none transition-colors font-mono [color-scheme:dark]",
                          }),
                        ],
                      }),
                    ],
                  }),
                  z && e.jsx(jn, { deadline: z }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(N, {
                        className: "mb-2.5",
                        children: "Filing Type",
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-2 gap-2.5",
                        children: Object.entries(je).map(([t, n]) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => S(t),
                              className: `p-4 rounded-2xl border text-left transition-all touch-manipulation ${v === t ? "bg-white border-white" : "bg-zinc-950 border-zinc-800 hover:border-zinc-600 active:border-zinc-500"}`,
                              children: [
                                e.jsx("p", {
                                  className: `font-black text-sm leading-tight ${v === t ? "text-black" : "text-white"}`,
                                  children: n.label,
                                }),
                                e.jsx("p", {
                                  className: `text-[10px] mt-0.5 ${v === t ? "text-zinc-500" : "text-zinc-600"}`,
                                  children: n.sublabel,
                                }),
                                e.jsxs("p", {
                                  className: `text-[11px] font-mono font-bold mt-3 ${v === t ? "text-zinc-600" : "text-zinc-700"}`,
                                  children: ["Max ", n.maxFiles, " × 5 MB"],
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
                      "bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-start gap-3.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => j(!p),
                        className: `relative flex-shrink-0 w-11 h-6 rounded-full transition-colors mt-0.5 touch-manipulation ${p ? "bg-white" : "bg-zinc-700"}`,
                        children: e.jsx("div", {
                          className: `absolute top-1 w-4 h-4 rounded-full transition-all ${p ? "bg-black left-6" : "bg-zinc-400 left-1"}`,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2 mb-1",
                            children: [
                              e.jsx("p", {
                                className: "text-sm font-bold text-white",
                                children: "Auto-Optimize",
                              }),
                              e.jsx(Pe, { v: "white", children: "Smart" }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-zinc-500 leading-relaxed",
                            children:
                              "Tries Balanced first. Escalates to Maximum automatically if any part exceeds 5 MB.",
                          }),
                        ],
                      }),
                      e.jsx(Nt, {
                        c: "w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5",
                      }),
                    ],
                  }),
                  !p &&
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(N, { children: "Compression Quality" }),
                        ee.map((t) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => w(t.value),
                              className: `w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all touch-manipulation ${g === t.value ? "bg-zinc-800 border-zinc-600" : "bg-zinc-950 border-zinc-800 hover:border-zinc-700 active:border-zinc-600"}`,
                              children: [
                                e.jsx("div", {
                                  className: `w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${g === t.value ? "border-white" : "border-zinc-600"}`,
                                  children:
                                    g === t.value &&
                                    e.jsx("div", {
                                      className:
                                        "w-1.5 h-1.5 rounded-full bg-white",
                                    }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 mb-0.5",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-sm font-bold text-white",
                                          children: t.label,
                                        }),
                                        e.jsx(Pe, { children: t.tag }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className: "text-[11px] text-zinc-500",
                                      children: t.desc,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t.value,
                          ),
                        ),
                      ],
                    }),
                  fe &&
                    e.jsxs("div", {
                      className:
                        "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          className:
                            "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                          children: [
                            e.jsx(N, { children: "Size Estimate" }),
                            e.jsx("span", {
                              className: "text-[9px] text-zinc-700 font-mono",
                              children: "Approximate only",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "p-4 space-y-4",
                          children: [
                            [
                              {
                                label: "Balanced",
                                est: fe.balanced.est,
                                limit: fe.balanced.limit,
                              },
                              {
                                label: "Maximum",
                                est: fe.maximum.est,
                                limit: fe.maximum.limit,
                              },
                            ].map(({ label: t, est: n, limit: d }) => {
                              const o = n <= d;
                              return e.jsxs(
                                "div",
                                {
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-2",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[11px] text-zinc-500",
                                          children: t,
                                        }),
                                        e.jsxs("span", {
                                          className: `text-[10px] font-mono font-bold ${o ? "text-emerald-400" : "text-amber-400"}`,
                                          children: [
                                            "~",
                                            I(n),
                                            " ",
                                            o ? "✓" : "⚠",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                                      children: e.jsx("div", {
                                        className: `h-full rounded-full ${o ? "bg-emerald-600" : "bg-amber-600"}`,
                                        style: {
                                          width: `${Math.min((n / d) * 100, 100)}%`,
                                        },
                                      }),
                                    }),
                                  ],
                                },
                                t,
                              );
                            }),
                            e.jsx("p", {
                              className: "text-[9px] text-zinc-700 font-mono",
                              children:
                                "Auto-Optimize handles escalation automatically",
                            }),
                          ],
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className: "px-4 py-4 flex items-start gap-3.5",
                        children: [
                          e.jsx("button", {
                            onClick: () => ut(!Y),
                            className: `relative flex-shrink-0 w-11 h-6 rounded-full transition-colors mt-0.5 touch-manipulation ${Y ? "bg-white" : "bg-zinc-700"}`,
                            children: e.jsx("div", {
                              className: `absolute top-1 w-4 h-4 rounded-full transition-all ${Y ? "bg-black left-6" : "bg-zinc-400 left-1"}`,
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm font-bold text-white",
                                    children: "Stamp Annexure Labels",
                                  }),
                                  e.jsx(Pe, { children: "Auto" }),
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-500 leading-relaxed",
                                children:
                                  "Stamps the annexure identifier on the first page of each annexure before compression.",
                              }),
                            ],
                          }),
                          e.jsx(ie, {
                            c: "w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5",
                          }),
                        ],
                      }),
                      Y &&
                        e.jsxs("div", {
                          className: "border-t border-zinc-800 p-4 space-y-4",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx(N, {
                                  className: "mb-1.5",
                                  children: "Auto-detect from Index Page(s)",
                                }),
                                e.jsx("p", {
                                  className: "text-[10px] text-zinc-600 mb-2",
                                  children:
                                    "Enter the page(s) listing your annexures — supports multi-page index.",
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-2 items-start",
                                  children: [
                                    e.jsx("div", {
                                      className: "flex-1",
                                      children: e.jsx(wn, {
                                        value: ft,
                                        onChange: Wn,
                                      }),
                                    }),
                                    e.jsx("button", {
                                      onClick: Jn,
                                      disabled: Vt || !ft,
                                      className:
                                        "h-10 px-4 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-300 hover:text-white text-xs font-bold rounded-xl transition-all disabled:opacity-40 flex items-center gap-1.5 touch-manipulation flex-shrink-0",
                                      children: Vt
                                        ? e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(re, {
                                                c: "w-3.5 h-3.5 animate-spin",
                                              }),
                                              " Reading…",
                                            ],
                                          })
                                        : e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(kt, { c: "w-3.5 h-3.5" }),
                                              " Extract",
                                            ],
                                          }),
                                    }),
                                    ae.length > 0 &&
                                      e.jsx("button", {
                                        onClick: () => xe([]),
                                        className:
                                          "h-10 px-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-600 hover:text-zinc-400 text-xs font-semibold rounded-xl transition-all touch-manipulation",
                                        children: "Clear",
                                      }),
                                  ],
                                }),
                                Xt &&
                                  e.jsxs("div", {
                                    className:
                                      "flex gap-2 mt-2 bg-amber-950/20 border border-amber-800/30 rounded-xl p-3",
                                    children: [
                                      e.jsx(he, {
                                        c: "w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-px",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-[11px] text-amber-400/80 leading-relaxed",
                                        children: Xt,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsxs(N, {
                                  className: "mb-2",
                                  children: [
                                    "Quick Setup",
                                    " ",
                                    e.jsx("span", {
                                      className:
                                        "normal-case text-zinc-700 font-normal tracking-normal",
                                      children: "— consecutive pages",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex gap-2 items-center flex-wrap",
                                  children: [
                                    e.jsx("input", {
                                      type: "number",
                                      value: jt,
                                      min: "1",
                                      onChange: (t) => Jt(t.target.value),
                                      placeholder: "Count",
                                      className:
                                        "w-20 h-10 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none font-mono transition-colors",
                                    }),
                                    e.jsx("input", {
                                      type: "number",
                                      value: zt,
                                      min: "1",
                                      onChange: (t) => qt(t.target.value),
                                      placeholder: "Start pg",
                                      className:
                                        "w-20 h-10 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none font-mono transition-colors",
                                    }),
                                    ["numeric", "alpha"].map((t) =>
                                      e.jsx(
                                        "button",
                                        {
                                          onClick: () => Gn(t),
                                          className: `h-10 px-3 rounded-xl text-xs font-bold border transition-all touch-manipulation ${Kt === t ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                                          children:
                                            t === "numeric"
                                              ? "1, 2, 3"
                                              : "A, B, C",
                                        },
                                        t,
                                      ),
                                    ),
                                    e.jsx("button", {
                                      onClick: qn,
                                      disabled: !jt || !zt,
                                      className:
                                        "h-10 px-3 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-300 hover:text-white text-xs font-bold rounded-xl border border-zinc-700 transition-all disabled:opacity-40 touch-manipulation",
                                      children: "Generate",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            ae.length > 0 &&
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-2",
                                    children: [
                                      e.jsx(N, { children: "Annexure List" }),
                                      e.jsxs("span", {
                                        className:
                                          "text-[10px] font-mono text-zinc-500",
                                        children: [
                                          pe,
                                          "/",
                                          ae.length,
                                          " valid",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx($s, {
                                    list: ae,
                                    setList: xe,
                                    totalPages: f?.pages || 0,
                                  }),
                                ],
                              }),
                            e.jsx(yn, {
                              pos: bt,
                              setPos: On,
                              style: Wt,
                              setStyle: _n,
                              fontSize: _e,
                              setFontSize: Un,
                              bold: gt,
                              setBold: Zn,
                              color: Gt,
                              setColor: Qn,
                              previewLabel:
                                pe > 0
                                  ? ae.find((t) => parseInt(t.page) > 0)
                                      ?.label || "Annexure 1"
                                  : null,
                            }),
                            pe === 0 &&
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2.5 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-3",
                                children: [
                                  e.jsx(he, {
                                    c: "w-3.5 h-3.5 text-zinc-600 flex-shrink-0",
                                  }),
                                  e.jsx("p", {
                                    className: "text-[11px] text-zinc-600",
                                    children:
                                      "Add at least one valid annexure above to enable stamping",
                                  }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: Kn,
                    disabled: Y && pe === 0,
                    className:
                      "w-full py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-base font-black rounded-2xl transition-all disabled:opacity-40 flex items-center justify-center gap-2 touch-manipulation",
                    children: [
                      e.jsx(Nt, { c: "w-4 h-4" }),
                      Y && pe > 0
                        ? `Label ${pe} + Make Portal-Ready →`
                        : "Make Portal-Ready →",
                    ],
                  }),
                ],
              }),
            r === "processing" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-3xl px-6 py-10 flex flex-col items-center gap-6",
                    children: [
                      e.jsxs("div", {
                        className: "relative w-14 h-14",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border border-zinc-800",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border border-transparent border-t-white animate-spin",
                            style: { animationDuration: "0.9s" },
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center",
                            children: e.jsx(St, { c: "w-6 h-6 text-zinc-600" }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "text-center",
                        children: [
                          e.jsx("p", {
                            className: "text-white font-bold text-base",
                            children: kn || "Initialising…",
                          }),
                          e.jsxs("p", {
                            className: "text-zinc-600 text-xs font-mono mt-1",
                            children: [I(i?.size), " · in-browser · no upload"],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "w-full max-w-xs space-y-2.5",
                        children: [
                          e.jsx(fn, { value: J }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className: "flex gap-3",
                                children: [
                                  { l: "Label", t: 5 },
                                  { l: "Compress", t: 63 },
                                  { l: "Split", t: 88 },
                                  { l: "Verify", t: 100 },
                                ].map(({ l: t, t: n }) =>
                                  e.jsxs(
                                    "span",
                                    {
                                      className: `text-[9px] font-mono transition-colors ${J >= n ? "text-zinc-400" : "text-zinc-800"}`,
                                      children: [J >= n ? "✓" : "·", " ", t],
                                    },
                                    t + n,
                                  ),
                                ),
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-[10px] text-zinc-700 font-mono tabular-nums",
                                children: [J.toFixed(0), "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  X.length > 0 &&
                    e.jsxs("div", {
                      className:
                        "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          className:
                            "px-4 py-3 flex items-center gap-2 border-b border-zinc-800",
                          children: [
                            e.jsx(N, { children: "Activity" }),
                            e.jsx("div", {
                              className:
                                "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "p-4 space-y-2 max-h-44 overflow-y-auto",
                          children: X.map((t, n) =>
                            e.jsxs(
                              "div",
                              {
                                className: "flex items-start gap-2.5",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-zinc-800 text-[9px] font-mono flex-shrink-0 mt-px tabular-nums",
                                    children: String(n + 1).padStart(2, "0"),
                                  }),
                                  e.jsx("span", {
                                    className: `text-[11px] font-mono leading-relaxed ${Pt(t.type)}`,
                                    children: t.msg,
                                  }),
                                ],
                              },
                              n,
                            ),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            r === "preview" &&
              $ &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  Lt &&
                    e.jsxs("div", {
                      className:
                        "bg-zinc-950 border border-emerald-800/30 rounded-3xl px-6 py-14 text-center space-y-5",
                      children: [
                        e.jsxs("div", {
                          className: "relative inline-flex",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-20 h-20 bg-emerald-950/50 border border-emerald-800/40 rounded-full flex items-center justify-center",
                              children: e.jsx(ye, {
                                c: "w-10 h-10 text-emerald-400",
                              }),
                            }),
                            e.jsx("div", {
                              className:
                                "absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce",
                              children: e.jsx("span", {
                                className: "text-[9px] font-black text-black",
                                children: "✓",
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-white font-black text-2xl mb-1",
                              children: "All Done!",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-emerald-400 text-sm font-semibold",
                              children: [
                                V.length,
                                " file",
                                V.length > 1 ? "s" : "",
                                " uploaded",
                              ],
                            }),
                            e.jsxs("p", {
                              className: "text-zinc-600 text-xs mt-1",
                              children: [
                                E.label,
                                " ready to submit on the GST Portal",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: Ze,
                          className:
                            "px-8 py-3.5 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-sm font-black rounded-xl transition-all touch-manipulation",
                          children: "Process Another File",
                        }),
                      ],
                    }),
                  !Lt &&
                    e.jsxs(e.Fragment, {
                      children: [
                        z && e.jsx(jn, { deadline: z }),
                        e.jsxs("div", {
                          className: `rounded-2xl border p-4 flex items-start gap-3 ${$.allOk ? "bg-emerald-950/20 border-emerald-800/30" : "bg-amber-950/20 border-amber-800/30"}`,
                          children: [
                            e.jsx("div", {
                              className: `w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${$.allOk ? "bg-emerald-900/50" : "bg-amber-900/50"}`,
                              children: $.allOk
                                ? e.jsx(ye, { c: "w-5 h-5 text-emerald-400" })
                                : e.jsx(he, { c: "w-5 h-5 text-amber-400" }),
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-white font-bold text-sm leading-snug",
                                  children: $.allOk
                                    ? `${V.length} files ready — upload to ${E.label}`
                                    : "Files created — review warnings below",
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-zinc-500 text-[10px] mt-1 font-mono break-words",
                                  children: [
                                    I($.originalSize),
                                    " → ",
                                    I($.compSize),
                                    " ·",
                                    " ",
                                    ze($.compSize, $.originalSize),
                                    " smaller · ",
                                    $.usedPreset,
                                    " · ",
                                    $.total,
                                    " pages",
                                    $.labelsApplied > 0 &&
                                      ` · ${$.labelsApplied} labels stamped`,
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              onClick: Ze,
                              className:
                                "text-[10px] text-zinc-600 hover:text-zinc-400 font-semibold transition-colors flex-shrink-0 py-1 touch-manipulation",
                              children: "Reset",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            {
                              l: "Original",
                              v: I($.originalSize),
                              s: "source file",
                            },
                            {
                              l: "Compressed",
                              v: I($.compSize),
                              s: `${ze($.compSize, $.originalSize)} saved`,
                            },
                            {
                              l: "Pages",
                              v: $.total,
                              s: `~${Math.ceil($.total / $.partsCount)} per part`,
                            },
                            {
                              l: "Parts",
                              v: `${$.partsCount}/${E.maxFiles}`,
                              s: `${E.maxFiles - $.partsCount} slots free`,
                            },
                          ].map(({ l: t, v: n, s: d }) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "bg-zinc-950 border border-zinc-800 rounded-2xl p-4",
                                children: [
                                  e.jsx(N, { className: "mb-2", children: t }),
                                  e.jsx("p", {
                                    className:
                                      "text-white font-black text-xl font-mono leading-none tabular-nums",
                                    children: n,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-zinc-600 text-[10px] font-mono mt-1.5",
                                    children: d,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                        $.labelsApplied > 0 &&
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-3 bg-amber-950/10 border border-amber-800/20 rounded-2xl px-4 py-3",
                            children: [
                              e.jsx(ie, {
                                c: "w-4 h-4 text-amber-400 flex-shrink-0",
                              }),
                              e.jsxs("p", {
                                className: "text-[11px] text-amber-400/80",
                                children: [
                                  e.jsxs("span", {
                                    className: "font-bold text-amber-400",
                                    children: [
                                      $.labelsApplied,
                                      " annexure label",
                                      $.labelsApplied > 1 ? "s" : "",
                                    ],
                                  }),
                                  " ",
                                  "were stamped before compression at ",
                                  _e,
                                  "pt",
                                ],
                              }),
                            ],
                          }),
                        Cn.map((t, n) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex gap-3 bg-zinc-950 border border-amber-800/30 rounded-2xl p-4",
                              children: [
                                e.jsx(he, {
                                  c: "w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-zinc-400 leading-relaxed",
                                  children: t,
                                }),
                              ],
                            },
                            n,
                          ),
                        ),
                        qe > 0 &&
                          e.jsx(ks, {
                            totalPages: qe,
                            splitPoints: Pn,
                            setSplitPoints: $e,
                            outputFiles: V,
                            onReapply: Yn,
                            reapplying: $n,
                          }),
                        e.jsxs("div", {
                          className:
                            "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                          children: [
                            e.jsxs("div", {
                              className:
                                "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                              children: [
                                e.jsxs(N, {
                                  children: ["Output Files (", V.length, ")"],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () =>
                                        on(
                                          V,
                                          ds(),
                                          () => At(!0),
                                          () => At(!1),
                                        ),
                                      disabled: De,
                                      className:
                                        "flex items-center gap-1.5 px-3 h-8 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold rounded-lg transition-all touch-manipulation disabled:opacity-50",
                                      children: [
                                        De
                                          ? e.jsx(re, {
                                              c: "w-3.5 h-3.5 animate-spin",
                                            })
                                          : e.jsx(gn, { c: "w-3.5 h-3.5" }),
                                        e.jsx("span", {
                                          className: "hidden sm:inline",
                                          children: De
                                            ? "Zipping…"
                                            : "Download ZIP",
                                        }),
                                        e.jsx("span", {
                                          className: "sm:hidden",
                                          children: De ? "…" : "ZIP",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      onClick: () =>
                                        V.forEach((t, n) =>
                                          setTimeout(
                                            () => we(t.bytes, t.name),
                                            n * 380,
                                          ),
                                        ),
                                      className:
                                        "flex items-center gap-1.5 px-3 h-8 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-xs font-black rounded-lg transition-all touch-manipulation",
                                      children: [
                                        e.jsx(He, { c: "w-3.5 h-3.5" }),
                                        e.jsx("span", {
                                          className: "hidden sm:inline",
                                          children: "Download All",
                                        }),
                                        e.jsx("span", {
                                          className: "sm:hidden",
                                          children: "All",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "divide-y divide-zinc-800/50",
                              children: V.map((t, n) =>
                                e.jsx(
                                  zn,
                                  {
                                    f: t,
                                    onDownload: () => we(t.bytes, t.name),
                                  },
                                  n,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                          children: [
                            e.jsxs("div", {
                              className:
                                "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                              children: [
                                e.jsx(N, { children: "Upload Checklist" }),
                                ne.length > 0 &&
                                  e.jsxs("span", {
                                    className:
                                      "text-[10px] font-mono text-zinc-600",
                                    children: [
                                      ne.filter(Boolean).length,
                                      "/",
                                      ne.length,
                                    ],
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-4 space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "bg-zinc-900 rounded-xl px-3.5 py-3",
                                  children: [
                                    e.jsx(N, {
                                      className: "mb-1.5",
                                      children: "Portal Path",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] text-zinc-400 font-mono leading-relaxed break-all",
                                      children: E.portalPath,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "space-y-0.5",
                                  children: [
                                    `Login → ${E.portalPath}`,
                                    "Open your case and navigate to document upload",
                                    ...V.map((t) => `Upload ${t.name}`),
                                    "Verify all parts · Submit response",
                                  ].map((t, n) => {
                                    const d = n >= 2 && n < 2 + V.length,
                                      o = d ? n - 2 : null,
                                      h = o !== null && ne[o];
                                    return e.jsxs(
                                      "div",
                                      {
                                        onClick:
                                          d && o !== null
                                            ? () => {
                                                const M = ne.map((F, Q) =>
                                                  Q === o ? !F : F,
                                                );
                                                (Ie(M),
                                                  M.every(Boolean) && et(!0));
                                              }
                                            : void 0,
                                        className: `flex items-start gap-3 px-3.5 py-3 rounded-xl transition-colors ${d ? "cursor-pointer hover:bg-zinc-900 active:bg-zinc-800" : ""}`,
                                        children: [
                                          e.jsx("div", {
                                            className: `w-5 h-5 rounded-md border flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${d ? (h ? "bg-white border-white" : "border-zinc-600") : "border-zinc-800 bg-zinc-900"}`,
                                            children:
                                              d && h
                                                ? e.jsx(ye, {
                                                    c: "w-3 h-3 text-black",
                                                  })
                                                : e.jsx("span", {
                                                    className:
                                                      "text-[8px] font-mono font-bold text-zinc-700",
                                                    children: n + 1,
                                                  }),
                                          }),
                                          e.jsx("span", {
                                            className: `text-[11px] leading-relaxed flex-1 break-words ${h ? "line-through text-zinc-600" : "text-zinc-400"}`,
                                            children: t,
                                          }),
                                        ],
                                      },
                                      n,
                                    );
                                  }),
                                }),
                                ne.length > 0 &&
                                  ne.every(Boolean) &&
                                  e.jsx("div", {
                                    className:
                                      "bg-emerald-950/30 border border-emerald-800/30 rounded-xl p-3 text-center",
                                    children: e.jsx("span", {
                                      className:
                                        "text-emerald-400 text-xs font-bold",
                                      children:
                                        "✓ All uploaded — ready to submit!",
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        X.length > 0 &&
                          e.jsxs("details", {
                            className: "group",
                            children: [
                              e.jsxs("summary", {
                                className:
                                  "flex items-center justify-between px-4 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl cursor-pointer list-none touch-manipulation",
                                children: [
                                  e.jsx(N, { children: "Processing Log" }),
                                  e.jsx(Je, {
                                    c: "w-4 h-4 text-zinc-600 group-open:rotate-180 transition-transform",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "mt-2 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2 max-h-48 overflow-y-auto",
                                children: X.map((t, n) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "flex items-start gap-2.5",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-zinc-800 text-[9px] font-mono flex-shrink-0 mt-px tabular-nums",
                                          children: String(n + 1).padStart(
                                            2,
                                            "0",
                                          ),
                                        }),
                                        e.jsx("span", {
                                          className: `text-[11px] font-mono leading-relaxed ${Pt(t.type)}`,
                                          children: t.msg,
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
                          className: "flex gap-2.5",
                          children: [
                            e.jsx("button", {
                              onClick: () => c("configure"),
                              className:
                                "flex-1 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-sm font-semibold rounded-2xl transition-all touch-manipulation",
                              children: "Change Settings",
                            }),
                            e.jsx("button", {
                              onClick: Ze,
                              className:
                                "px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-800 text-zinc-600 hover:text-zinc-400 text-sm font-semibold rounded-2xl transition-all touch-manipulation",
                              children: "New File",
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
          ],
        }),
      a === "batch" &&
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            tt === "queue" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    onClick: () => tn.current?.click(),
                    className:
                      "border-2 border-dashed border-zinc-800 hover:border-zinc-600 active:border-zinc-500 rounded-2xl p-8 text-center cursor-pointer transition-all touch-manipulation",
                    children: [
                      e.jsx("input", {
                        ref: tn,
                        type: "file",
                        accept: "application/pdf",
                        multiple: !0,
                        className: "hidden",
                        onChange: (t) => es(t.target.files),
                      }),
                      e.jsx(Ne, { c: "w-7 h-7 text-zinc-600 mx-auto mb-3" }),
                      e.jsx("p", {
                        className: "text-zinc-400 text-sm font-semibold",
                        children: "Tap to add PDFs",
                      }),
                      e.jsx("p", {
                        className: "text-zinc-700 text-[10px] font-mono mt-1",
                        children: "Each PDF processed independently",
                      }),
                    ],
                  }),
                  A.length > 0 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                          children: [
                            e.jsxs("div", {
                              className:
                                "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                              children: [
                                e.jsxs(N, {
                                  children: ["Queue (", A.length, ")"],
                                }),
                                e.jsxs("span", {
                                  className:
                                    "text-[10px] text-zinc-600 font-mono",
                                  children: [
                                    I(A.reduce((t, n) => t + n.file.size, 0)),
                                    " ",
                                    "total",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "divide-y divide-zinc-800/50",
                              children: A.map((t, n) =>
                                e.jsx(
                                  vn,
                                  {
                                    item: t,
                                    idx: n,
                                    isFirst: n === 0,
                                    isLast: n === A.length - 1,
                                    onRemove: () =>
                                      K((d) => d.filter((o, h) => h !== n)),
                                    onMoveUp: () =>
                                      K((d) => {
                                        const o = [...d];
                                        return (
                                          ([o[n - 1], o[n]] = [o[n], o[n - 1]]),
                                          o
                                        );
                                      }),
                                    onMoveDown: () =>
                                      K((d) => {
                                        const o = [...d];
                                        return (
                                          ([o[n], o[n + 1]] = [o[n + 1], o[n]]),
                                          o
                                        );
                                      }),
                                  },
                                  t.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(N, {
                              className: "mb-2.5",
                              children: "Filing Type (all files)",
                            }),
                            e.jsx("div", {
                              className: "grid grid-cols-2 gap-2.5",
                              children: Object.entries(je).map(([t, n]) =>
                                e.jsxs(
                                  "button",
                                  {
                                    onClick: () => Fn(t),
                                    className: `p-4 rounded-2xl border text-left transition-all touch-manipulation ${Le === t ? "bg-white border-white" : "bg-zinc-950 border-zinc-800 hover:border-zinc-600 active:border-zinc-500"}`,
                                    children: [
                                      e.jsx("p", {
                                        className: `font-black text-sm leading-tight ${Le === t ? "text-black" : "text-white"}`,
                                        children: n.label,
                                      }),
                                      e.jsxs("p", {
                                        className: `text-[10px] mt-0.5 font-mono ${Le === t ? "text-zinc-600" : "text-zinc-700"}`,
                                        children: ["Max ", n.maxFiles, "×5 MB"],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: ts,
                          className:
                            "w-full py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-base font-black rounded-2xl transition-all flex items-center justify-center gap-2 touch-manipulation",
                          children: [
                            e.jsx(Nt, { c: "w-4 h-4" }),
                            " Process ",
                            A.length,
                            " File",
                            A.length > 1 ? "s" : "",
                            " →",
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            tt === "processing" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-3xl px-6 py-10 flex flex-col items-center gap-5",
                    children: [
                      e.jsxs("div", {
                        className: "relative w-14 h-14",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border border-zinc-800",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full border border-transparent border-t-white animate-spin",
                            style: { animationDuration: "0.9s" },
                          }),
                          e.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center",
                            children: e.jsx(bn, { c: "w-6 h-6 text-zinc-600" }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "text-center",
                        children: [
                          e.jsxs("p", {
                            className: "text-white font-bold text-base",
                            children: [
                              "Processing ",
                              oe.current,
                              " of ",
                              oe.total,
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-zinc-600 text-xs font-mono mt-1 max-w-xs truncate",
                            children: oe.file,
                          }),
                        ],
                      }),
                      e.jsx(fn, {
                        value: oe.total > 0 ? (oe.current / oe.total) * 100 : 0,
                        className: "w-full max-w-xs",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className:
                          "px-4 py-3 flex items-center gap-2 border-b border-zinc-800",
                        children: [
                          e.jsx(N, { children: "Batch Log" }),
                          e.jsx("div", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "p-4 space-y-1.5 max-h-52 overflow-y-auto",
                        children: Dn.map((t, n) =>
                          e.jsx(
                            "p",
                            {
                              className: `text-[11px] font-mono leading-relaxed ${Pt(t.type)}`,
                              children: t.msg,
                            },
                            n,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden divide-y divide-zinc-800/50",
                    children: A.map((t) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-3 px-4 py-3.5",
                          children: [
                            e.jsx("div", {
                              className: `w-2.5 h-2.5 rounded-full flex-shrink-0 ${t.status === "done" ? "bg-emerald-500" : t.status === "processing" ? "bg-white animate-pulse" : t.status === "error" ? "bg-red-500" : "bg-zinc-700"}`,
                            }),
                            e.jsx("p", {
                              className:
                                "flex-1 min-w-0 text-[11px] text-zinc-500 truncate font-mono",
                              children: t.file.name,
                            }),
                            e.jsx("span", {
                              className:
                                "text-[10px] text-zinc-600 font-mono w-4 text-right flex-shrink-0",
                              children:
                                t.status === "done"
                                  ? "✓"
                                  : t.status === "error"
                                    ? "✗"
                                    : t.status === "processing"
                                      ? "…"
                                      : "—",
                            }),
                          ],
                        },
                        t.id,
                      ),
                    ),
                  }),
                ],
              }),
            tt === "results" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-emerald-800/30 rounded-2xl p-4 flex items-center justify-between gap-3",
                    children: [
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsxs("p", {
                            className: "text-white font-bold text-sm",
                            children: [
                              A.filter((t) => t.status === "done").length,
                              "/",
                              A.length,
                              " files processed",
                            ],
                          }),
                          e.jsxs("p", {
                            className:
                              "text-zinc-500 text-[10px] font-mono mt-0.5",
                            children: [
                              A.filter((t) => t.result?.output).reduce(
                                (t, n) => t + (n.result?.output?.length || 0),
                                0,
                              ),
                              " ",
                              "output files total",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                          e.jsxs("button", {
                            onClick: () =>
                              on(
                                an(),
                                `GST_${Ue.code}_Batch_${ve()}.zip`,
                                () => Mt(!0),
                                () => Mt(!1),
                              ),
                            disabled: Ae || an().length === 0,
                            className:
                              "flex items-center gap-1.5 px-3 h-9 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-semibold rounded-xl transition-all touch-manipulation disabled:opacity-50",
                            children: [
                              Ae
                                ? e.jsx(re, { c: "w-3.5 h-3.5 animate-spin" })
                                : e.jsx(gn, { c: "w-3.5 h-3.5" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: Ae ? "Zipping…" : "Download ZIP",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: Ae ? "…" : "ZIP",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: ns,
                            className:
                              "flex items-center gap-1.5 px-3 h-9 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-xs font-black rounded-xl transition-all touch-manipulation",
                            children: [
                              e.jsx(He, { c: "w-3.5 h-3.5" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Download All",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: "All",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  A.map((t) =>
                    e.jsxs(
                      "details",
                      {
                        className:
                          "group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                        children: [
                          e.jsxs("summary", {
                            className:
                              "px-4 py-4 cursor-pointer list-none flex items-center gap-3 touch-manipulation",
                            children: [
                              e.jsx("div", {
                                className: `w-2.5 h-2.5 rounded-full flex-shrink-0 ${t.status === "done" ? "bg-emerald-500" : "bg-red-500"}`,
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-zinc-300 text-sm font-semibold truncate",
                                    children: t.file.name,
                                  }),
                                  t.result &&
                                    e.jsxs("p", {
                                      className:
                                        "text-zinc-600 text-[10px] font-mono mt-0.5",
                                      children: [
                                        I(t.file.size),
                                        " → ",
                                        I(t.result.compSize),
                                        " ·",
                                        " ",
                                        t.result.output?.length,
                                        " parts ·",
                                        " ",
                                        t.result.usedPreset,
                                      ],
                                    }),
                                ],
                              }),
                              e.jsx(Je, {
                                c: "w-4 h-4 text-zinc-600 group-open:rotate-180 transition-transform flex-shrink-0",
                              }),
                            ],
                          }),
                          t.result?.output &&
                            e.jsx("div", {
                              className:
                                "border-t border-zinc-800 divide-y divide-zinc-800/50",
                              children: t.result.output.map((n, d) =>
                                e.jsx(
                                  zn,
                                  {
                                    f: n,
                                    onDownload: () => we(n.bytes, n.name),
                                  },
                                  d,
                                ),
                              ),
                            }),
                          t.status === "error" &&
                            e.jsxs("div", {
                              className:
                                "border-t border-zinc-800 px-4 py-4 flex gap-3",
                              children: [
                                e.jsx(he, {
                                  c: "w-4 h-4 text-red-500 flex-shrink-0 mt-0.5",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[11px] text-zinc-500 leading-relaxed",
                                  children:
                                    "Processing failed. Try this file in Single File mode for more control.",
                                }),
                              ],
                            }),
                        ],
                      },
                      t.id,
                    ),
                  ),
                  e.jsx("button", {
                    onClick: () => {
                      (nt("queue"), K([]), st([]));
                    },
                    className:
                      "w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-800 text-zinc-500 hover:text-zinc-300 text-sm font-semibold rounded-2xl transition-all touch-manipulation",
                    children: "Clear & Start New Batch",
                  }),
                ],
              }),
          ],
        }),
      a === "label" &&
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            at === "upload" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800/60 rounded-2xl p-4 space-y-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-8 h-8 bg-amber-950/50 border border-amber-800/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
                            children: e.jsx(ie, {
                              c: "w-4 h-4 text-amber-400",
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-zinc-200 text-sm font-bold",
                                children: "Annexure Auto-Labeler",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-zinc-500 text-xs leading-relaxed mt-0.5",
                                children:
                                  "Reads your index page to detect annexures and stamps each label directly on the page — no manual marking needed.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "pl-11 space-y-1.5",
                        children: [
                          "Multi-page index support (e.g. pages 1,2 or 1-3)",
                          "Detects Annexure 1/A/B, Annexure-1, Ann. 1, Exbt. 1 formats",
                          "Font size, bold, color and position options",
                          "Yellow box label, 100% local, no upload",
                        ].map((t) =>
                          e.jsxs(
                            "div",
                            {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0",
                                }),
                                e.jsx("p", {
                                  className: "text-[10px] text-zinc-600",
                                  children: t,
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
                    onDragOver: (t) => {
                      (t.preventDefault(), ht(!0));
                    },
                    onDragLeave: () => ht(!1),
                    onDrop: (t) => {
                      (t.preventDefault(), ht(!1), ln(t.dataTransfer.files[0]));
                    },
                    onClick: () => nn.current?.click(),
                    className: `border-2 border-dashed rounded-3xl p-10 text-center cursor-pointer transition-all duration-200 touch-manipulation ${Tn ? "border-zinc-500 bg-zinc-900/50" : "border-zinc-800 hover:border-zinc-600 active:bg-zinc-900/30"}`,
                    children: [
                      e.jsx("input", {
                        ref: nn,
                        type: "file",
                        accept: "application/pdf",
                        className: "hidden",
                        onChange: (t) => ln(t.target.files[0]),
                      }),
                      e.jsxs("div", {
                        className: "flex flex-col items-center gap-4",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center",
                            children: e.jsx(ie, { c: "w-7 h-7 text-zinc-500" }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-white font-bold text-base",
                                children: "Drop your merged PDF",
                              }),
                              e.jsx("p", {
                                className: "text-zinc-500 text-sm mt-0.5",
                                children: "or tap to browse",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-zinc-700 text-[10px] font-mono mt-3",
                                children: "Appeal · SCN Reply · Writ petition",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            at === "configure" &&
              de &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0",
                        children: e.jsx(Ve, { c: "w-5 h-5 text-zinc-400" }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-zinc-200 text-sm font-semibold truncate",
                            children: de.name,
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2.5 mt-0.5",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-zinc-600 text-[10px] font-mono",
                                children: I(de.size),
                              }),
                              ue > 0 &&
                                e.jsxs("span", {
                                  className:
                                    "text-zinc-700 text-[10px] font-mono",
                                  children: [ue, " pages"],
                                }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        "aria-label": "Close",
                        onClick: cn,
                        className:
                          "w-9 h-9 flex items-center justify-center text-zinc-700 hover:text-zinc-400 hover:bg-zinc-800 rounded-xl transition-all touch-manipulation",
                        children: e.jsx(ke, { c: "w-4 h-4" }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className: "px-4 py-3.5 border-b border-zinc-800",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-5 h-5 bg-zinc-800 rounded-md flex items-center justify-center flex-shrink-0",
                                children: e.jsx("span", {
                                  className:
                                    "text-[9px] font-black text-zinc-400",
                                  children: "1",
                                }),
                              }),
                              e.jsx(N, {
                                children: "Auto-extract from Index Page(s)",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-zinc-600 mt-1 pl-7",
                            children:
                              'Supports multi-page index — single page, range, or mixed (e.g. "1,3-5")',
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-4 space-y-3",
                        children: [
                          e.jsxs("div", {
                            className: "flex gap-2 items-end",
                            children: [
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[10px] text-zinc-600 mb-1.5",
                                    children:
                                      "Index / list of documents page(s)",
                                  }),
                                  e.jsx(wn, { value: lt, onChange: Rt }),
                                ],
                              }),
                              e.jsx("button", {
                                onClick: ss,
                                disabled: Et || !lt,
                                className:
                                  "h-10 px-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-xs font-black rounded-xl transition-all disabled:opacity-40 flex items-center gap-1.5 flex-shrink-0 touch-manipulation mb-4",
                                children: Et
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(re, {
                                          c: "w-3.5 h-3.5 animate-spin",
                                        }),
                                        " Reading…",
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(kt, { c: "w-3.5 h-3.5" }),
                                        " Extract",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                          rt &&
                            e.jsxs("div", {
                              className:
                                "flex gap-2 bg-amber-950/20 border border-amber-800/30 rounded-xl p-3",
                              children: [
                                e.jsx(he, {
                                  c: "w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-px",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[11px] text-amber-400/80 leading-relaxed",
                                  children: rt,
                                }),
                              ],
                            }),
                          ct &&
                            !rt &&
                            e.jsxs("details", {
                              children: [
                                e.jsx("summary", {
                                  className:
                                    "text-[10px] text-zinc-600 cursor-pointer hover:text-zinc-400 transition-colors py-1 select-none",
                                  children: "View extracted raw text",
                                }),
                                e.jsxs("pre", {
                                  className:
                                    "mt-2 text-[9px] text-zinc-600 font-mono bg-zinc-900 rounded-xl p-3 max-h-32 overflow-y-auto whitespace-pre-wrap break-all border border-zinc-800",
                                  children: [
                                    ct.slice(0, 1800),
                                    ct.length > 1800
                                      ? `
…`
                                      : "",
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
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className: "px-4 py-3.5 border-b border-zinc-800",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-5 h-5 bg-zinc-800 rounded-md flex items-center justify-center flex-shrink-0",
                                children: e.jsx("span", {
                                  className:
                                    "text-[9px] font-black text-zinc-400",
                                  children: "2",
                                }),
                              }),
                              e.jsx(N, { children: "Quick Setup" }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-zinc-600 mt-1 pl-7",
                            children:
                              "For consecutive pages — ideal for scanned documents or when auto-extract misses entries",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "p-4 space-y-3",
                        children: e.jsxs("div", {
                          className: "flex gap-2 items-center flex-wrap",
                          children: [
                            e.jsxs("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[9px] text-zinc-700 font-mono",
                                  children: "Count",
                                }),
                                e.jsx("input", {
                                  type: "number",
                                  value: pt,
                                  min: "1",
                                  onChange: (t) => Ut(t.target.value),
                                  placeholder: "e.g. 6",
                                  className:
                                    "w-20 h-10 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none font-mono transition-colors",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col gap-1",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[9px] text-zinc-700 font-mono",
                                  children: "Start page",
                                }),
                                e.jsx("input", {
                                  type: "number",
                                  value: mt,
                                  min: "1",
                                  onChange: (t) => Zt(t.target.value),
                                  placeholder: "e.g. 4",
                                  className:
                                    "w-20 h-10 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-xl px-3 text-sm text-zinc-300 placeholder:text-zinc-700 outline-none font-mono transition-colors",
                                }),
                              ],
                            }),
                            ["numeric", "alpha"].map((t) =>
                              e.jsx(
                                "button",
                                {
                                  onClick: () => En(t),
                                  className: `h-10 px-3 rounded-xl text-xs font-bold border transition-all touch-manipulation self-end ${Qt === t ? "bg-white text-black border-white" : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-600"}`,
                                  children:
                                    t === "numeric" ? "1, 2, 3…" : "A, B, C…",
                                },
                                t,
                              ),
                            ),
                            e.jsx("button", {
                              onClick: as,
                              disabled: !pt || !mt,
                              className:
                                "h-10 px-4 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-zinc-300 hover:text-white text-xs font-bold rounded-xl border border-zinc-700 transition-all disabled:opacity-40 touch-manipulation self-end",
                              children: "Generate",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className:
                          "px-4 py-3.5 flex items-center justify-between border-b border-zinc-800",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-5 h-5 bg-zinc-800 rounded-md flex items-center justify-center flex-shrink-0",
                                children: e.jsx("span", {
                                  className:
                                    "text-[9px] font-black text-zinc-400",
                                  children: "3",
                                }),
                              }),
                              e.jsx(N, { children: "Review & Edit List" }),
                            ],
                          }),
                          U.length > 0 &&
                            e.jsxs("span", {
                              className:
                                "text-[10px] font-mono text-zinc-500 flex-shrink-0",
                              children: [le, "/", U.length, " valid"],
                            }),
                        ],
                      }),
                      U.length === 0
                        ? e.jsxs("div", {
                            className: "px-4 py-10 text-center space-y-2",
                            children: [
                              e.jsx(zs, { c: "w-8 h-8 text-zinc-800 mx-auto" }),
                              e.jsx("p", {
                                className: "text-zinc-700 text-xs",
                                children: "No annexures yet",
                              }),
                              e.jsx("p", {
                                className: "text-zinc-800 text-[10px]",
                                children:
                                  "Use auto-extract above, Quick Setup, or add rows manually",
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            children: [
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-[auto_1fr_auto_auto] items-center gap-0 border-b border-zinc-800/50 px-4 py-2",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] text-zinc-700 font-mono w-5",
                                    children: "#",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] text-zinc-700 font-mono",
                                    children: "Label text",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] text-zinc-700 font-mono text-center w-20",
                                    children: "Page",
                                  }),
                                  e.jsx("span", { className: "w-8" }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "divide-y divide-zinc-800/40 max-h-72 overflow-y-auto",
                                children: U.map((t, n) => {
                                  const d = parseInt(t.page),
                                    o =
                                      t.page !== "" &&
                                      (!d || d < 1 || (ue > 0 && d > ue));
                                  return e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "flex items-center gap-2 px-4 py-2.5",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[9px] font-mono text-zinc-700 w-5 flex-shrink-0",
                                          children: n + 1,
                                        }),
                                        e.jsx("input", {
                                          value: t.label,
                                          onChange: (h) =>
                                            rn(t.id, "label", h.target.value),
                                          className:
                                            "flex-1 h-9 bg-zinc-900 border border-zinc-800 focus:border-zinc-600 rounded-lg px-3 text-xs text-zinc-300 outline-none font-mono transition-colors min-w-0",
                                          placeholder: "Annexure 1",
                                        }),
                                        e.jsx("input", {
                                          type: "number",
                                          value: t.page,
                                          onChange: (h) =>
                                            rn(t.id, "page", h.target.value),
                                          min: "1",
                                          max: ue || void 0,
                                          className: `w-16 h-9 bg-zinc-900 border rounded-lg px-2 text-xs outline-none font-mono text-center transition-colors ${o ? "border-red-700 text-red-400" : "border-zinc-800 focus:border-zinc-600 text-zinc-300"}`,
                                          placeholder: "pg",
                                        }),
                                        e.jsx("button", {
                                          "aria-label": "Close",
                                          onClick: () => is(t.id),
                                          className:
                                            "w-8 h-8 flex items-center justify-center text-zinc-700 hover:text-zinc-400 hover:bg-zinc-800 rounded-lg transition-all flex-shrink-0 touch-manipulation",
                                          children: e.jsx(ke, {
                                            c: "w-3.5 h-3.5",
                                          }),
                                        }),
                                      ],
                                    },
                                    t.id,
                                  );
                                }),
                              }),
                            ],
                          }),
                      e.jsx("div", {
                        className: "px-4 py-3 border-t border-zinc-800/60",
                        children: e.jsxs("button", {
                          onClick: ls,
                          className:
                            "w-full py-2.5 border border-dashed border-zinc-700 hover:border-zinc-500 text-zinc-600 hover:text-zinc-400 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 touch-manipulation",
                          children: [
                            e.jsx(Ne, { c: "w-3.5 h-3.5" }),
                            " Add Row",
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsxs("div", {
                        className: "px-4 py-3.5 border-b border-zinc-800",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-5 h-5 bg-zinc-800 rounded-md flex items-center justify-center flex-shrink-0",
                                children: e.jsx("span", {
                                  className:
                                    "text-[9px] font-black text-zinc-400",
                                  children: "4",
                                }),
                              }),
                              e.jsx(N, { children: "Stamp Options" }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-[10px] text-zinc-600 mt-1 pl-7",
                            children:
                              "Customize position, size, weight, and color of your labels",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "p-4",
                        children: e.jsx(yn, {
                          pos: Tt,
                          setPos: Ln,
                          style: Ee,
                          setStyle: An,
                          fontSize: ot,
                          setFontSize: Mn,
                          bold: dt,
                          setBold: Bn,
                          color: Te,
                          setColor: Rn,
                          previewLabel:
                            U.find((t) => parseInt(t.page) > 0)?.label ||
                            (U.length > 0 ? "Annexure 1" : null),
                        }),
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: rs,
                    disabled: Ot || le === 0,
                    className:
                      "w-full py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-base font-black rounded-2xl transition-all disabled:opacity-40 flex items-center justify-center gap-2 touch-manipulation",
                    children: Ot
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(re, { c: "w-4 h-4 animate-spin" }),
                            " Stamping",
                            " ",
                            le,
                            " label",
                            le > 1 ? "s" : "",
                            "…",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(ie, { c: "w-4 h-4" }),
                            " Stamp",
                            " ",
                            le > 0 ? `${le} ` : "",
                            "Annexure",
                            le !== 1 ? "s" : "",
                            " →",
                          ],
                        }),
                  }),
                ],
              }),
            at === "done" &&
              xt &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-emerald-800/30 rounded-3xl px-6 py-12 text-center space-y-5",
                    children: [
                      e.jsxs("div", {
                        className: "relative inline-flex",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-16 h-16 bg-emerald-950/50 border border-emerald-800/40 rounded-full flex items-center justify-center",
                            children: e.jsx(ye, {
                              c: "w-8 h-8 text-emerald-400",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce",
                            children: e.jsx(ie, { c: "w-3 h-3 text-black" }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-white font-black text-xl mb-1",
                            children: "Labels Stamped!",
                          }),
                          e.jsxs("p", {
                            className: "text-emerald-400 text-sm font-semibold",
                            children: [
                              U.filter((t) => parseInt(t.page) > 0).length,
                              " ",
                              "annexure label",
                              U.filter((t) => parseInt(t.page) > 0).length !== 1
                                ? "s"
                                : "",
                              " ",
                              "applied",
                            ],
                          }),
                          e.jsxs("p", {
                            className: "text-zinc-600 text-xs font-mono mt-1.5",
                            children: [
                              I(xt.length),
                              " · ",
                              ot,
                              "pt",
                              dt ? " Bold" : "",
                              " ·",
                              " ",
                              ce.find((t) => t.v === Te)?.label,
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("button", {
                        onClick: () => we(xt, `Labeled_${de.name}`),
                        className:
                          "flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-black text-sm font-black rounded-xl transition-all mx-auto touch-manipulation",
                        children: [
                          e.jsx(He, { c: "w-4 h-4" }),
                          " Download Labeled PDF",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className: "px-4 py-3.5 border-b border-zinc-800",
                        children: e.jsx(N, {
                          children: "Stamped Labels Summary",
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "divide-y divide-zinc-800/50 max-h-64 overflow-y-auto",
                        children: U.filter((t) => parseInt(t.page) > 0).map(
                          (t) => {
                            const n = ce.find((d) => d.v === Te) || ce[0];
                            return e.jsxs(
                              "div",
                              {
                                className: "flex items-center gap-3 px-4 py-3",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-14 h-6 rounded flex items-center justify-center flex-shrink-0 px-1",
                                    style: {
                                      background:
                                        Ee === "box" ? n.hex : "transparent",
                                      border:
                                        Ee === "box"
                                          ? `1px solid ${n.border}`
                                          : "none",
                                    },
                                    children: e.jsx("span", {
                                      className:
                                        "text-[8px] font-black font-mono truncate",
                                      style: { color: n.border },
                                      children: t.label
                                        .replace("Annexure ", "")
                                        .slice(0, 5),
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: "flex-1 min-w-0",
                                    children: e.jsx("p", {
                                      className:
                                        "text-zinc-300 text-sm font-semibold",
                                      children: t.label,
                                    }),
                                  }),
                                  e.jsxs("span", {
                                    className:
                                      "text-zinc-600 text-[10px] font-mono flex-shrink-0",
                                    children: ["Page ", t.page],
                                  }),
                                  e.jsx(ye, {
                                    c: "w-3.5 h-3.5 text-emerald-500 flex-shrink-0",
                                  }),
                                ],
                              },
                              t.id,
                            );
                          },
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-zinc-950 border border-zinc-800 rounded-2xl p-4",
                    children: [
                      e.jsx(N, { className: "mb-3", children: "Next Steps" }),
                      e.jsx("div", {
                        className: "space-y-2.5",
                        children: [
                          "Download the labeled PDF above",
                          "Use Single tab to compress & split for portal upload",
                          "Upload split files via GST Portal",
                        ].map((t, n) =>
                          e.jsxs(
                            "div",
                            {
                              className: "flex items-start gap-3",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-5 h-5 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5",
                                  children: e.jsx("span", {
                                    className:
                                      "text-[8px] font-mono font-bold text-zinc-700",
                                    children: n + 1,
                                  }),
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[11px] text-zinc-500 leading-relaxed",
                                  children: t,
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
                    className: "flex gap-2.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => {
                          (Be("configure"), Oe(null));
                        },
                        className:
                          "flex-1 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-800 text-zinc-400 hover:text-zinc-200 text-sm font-semibold rounded-2xl transition-all touch-manipulation",
                        children: "Edit & Re-stamp",
                      }),
                      e.jsx("button", {
                        onClick: cn,
                        className:
                          "px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-700 border border-zinc-800 text-zinc-600 hover:text-zinc-400 text-sm font-semibold rounded-2xl transition-all touch-manipulation",
                        children: "New File",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
export { Is as default };
