import { r as v, j as e } from "./react-vendor-Bc7KCos-.js";
const t = {
    bg: "#09090b",
    panel: "#18181b",
    border: "#27272a",
    borderSoft: "#3f3f46",
    text: "#fafafa",
    textDim: "#a1a1aa",
    textFaint: "#52525b",
  },
  k = ({ children: r, className: n, style: o, vb: a = "0 0 24 24" }) =>
    e.jsx("svg", {
      viewBox: a,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: n,
      style: o,
      children: r,
    }),
  ee = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  te = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  K = (r) =>
    e.jsx(k, {
      ...r,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  re = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  ie = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z",
        }),
        e.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" }),
      ],
    }),
  W = (r) =>
    e.jsx(k, {
      ...r,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  ne = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("rect", {
          x: "3",
          y: "11",
          width: "18",
          height: "11",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      ],
    }),
  ae = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("rect", {
          x: "3",
          y: "11",
          width: "18",
          height: "11",
          rx: "2",
          ry: "2",
        }),
        e.jsx("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }),
      ],
    }),
  se = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
      ],
    }),
  oe = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
        e.jsx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
        e.jsx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
        e.jsx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
        e.jsx("line", { x1: "7", y1: "12", x2: "17", y2: "12" }),
      ],
    }),
  le = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
        e.jsx("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
        e.jsx("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" }),
      ],
    }),
  de = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
      ],
    }),
  pe = (r) =>
    e.jsxs(k, {
      ...r,
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("path", { d: "M9 13h6M9 17h4" }),
      ],
    }),
  F = {
    CRITICAL: {
      dot: "#fafafa",
      bg: "#fafafa",
      text: "#09090b",
      strip: "#e4e4e7",
      label: "CRITICAL",
    },
    HIGH: {
      dot: "#a1a1aa",
      bg: "#3f3f46",
      text: "#fafafa",
      strip: "#52525b",
      label: "HIGH",
    },
    MEDIUM: {
      dot: "#71717a",
      bg: "#27272a",
      text: "#d4d4d8",
      strip: "#3f3f46",
      label: "MEDIUM",
    },
    LOW: {
      dot: "#52525b",
      bg: "#18181b",
      text: "#71717a",
      strip: "#27272a",
      label: "LOW",
    },
  },
  Z = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 },
  $ = {
    AADHAAR: {
      id: "AADHAAR",
      label: "Aadhaar Number",
      severity: "CRITICAL",
      description: "12-digit Aadhaar UID — national identity number",
      regex: /\b[2-9]\d{3}[\s\-]?\d{4}[\s\-]?\d{4}\b/g,
      validate: (r) => r.replace(/[\s\-]/g, "").length === 12,
    },
    PAN: {
      id: "PAN",
      label: "PAN Number",
      severity: "CRITICAL",
      description: "Permanent Account Number — Indian tax identifier",
      regex: /\b[A-Z]{5}[0-9]{4}[A-Z]\b/g,
      validate: () => !0,
    },
    PASSPORT: {
      id: "PASSPORT",
      label: "Passport Number",
      severity: "CRITICAL",
      description: "Indian passport number",
      regex: /\b[A-PR-WY-Z][1-9]\d\s?\d{4}[1-9]\b/g,
      validate: () => !0,
    },
    CREDIT_CARD: {
      id: "CREDIT_CARD",
      label: "Credit / Debit Card",
      severity: "CRITICAL",
      description: "Payment card number — Luhn-validated",
      regex:
        /\b(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}|6[0-9]{15})\b/g,
      validate: (r) => xe(r.replace(/\s/g, "")),
    },
    BANK_ACCOUNT: {
      id: "BANK_ACCOUNT",
      label: "Bank Account Number",
      severity: "CRITICAL",
      description: "Bank account number detected near banking keywords",
      regex: /\b\d{9,18}\b/g,
      validate: (r, n) =>
        /account|a\/c|acc\.?|bank|saving|current|neft|rtgs|imps|ifsc/i.test(n),
    },
    EMAIL: {
      id: "EMAIL",
      label: "Email Address",
      severity: "HIGH",
      description: "Email address — personal contact information",
      regex: /\b[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}\b/g,
      validate: (r) => r.includes("@"),
    },
    PHONE: {
      id: "PHONE",
      label: "Phone Number",
      severity: "HIGH",
      description: "Mobile or landline number (India-aware)",
      regex: /(?<!\d)(?:\+91[\s\-]?|91[\s\-]?|0)?[6-9]\d{9}(?!\d)/g,
      validate: (r) => r.replace(/\D/g, "").length >= 10,
    },
    IFSC: {
      id: "IFSC",
      label: "IFSC Code",
      severity: "HIGH",
      description: "Indian Financial System Code — bank branch identifier",
      regex: /\b[A-Z]{4}0[A-Z0-9]{6}\b/g,
      validate: () => !0,
    },
    GST: {
      id: "GST",
      label: "GST Number",
      severity: "HIGH",
      description: "Goods & Services Tax Identification Number",
      regex: /\b\d{2}[A-Z]{5}\d{4}[A-Z][A-Z\d]Z[A-Z\d]\b/g,
      validate: () => !0,
    },
    URL: {
      id: "URL",
      label: "Embedded URL",
      severity: "MEDIUM",
      description: "Hyperlink — may expose tracking links or internal services",
      regex: /https?:\/\/[^\s<>"')\]]+/g,
      validate: () => !0,
    },
    IP_ADDRESS: {
      id: "IP_ADDRESS",
      label: "IP Address",
      severity: "MEDIUM",
      description: "IPv4 address — may reveal network or server details",
      regex:
        /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\b/g,
      validate: (r) => !r.startsWith("0.") && r !== "0.0.0.0",
    },
    DATE_OF_BIRTH: {
      id: "DATE_OF_BIRTH",
      label: "Date of Birth",
      severity: "MEDIUM",
      description: "DOB pattern — personal biographical data",
      regex:
        /\b(?:d\.?o\.?b\.?|date\s+of\s+birth|born\s+on|dob)\s*[:\-]?\s*(\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{2,4})/gi,
      validate: () => !0,
    },
  };
function xe(r) {
  const n = r.replace(/\D/g, "");
  if (n.length < 13 || n.length > 19) return !1;
  let o = 0,
    a = !1;
  for (let x = n.length - 1; x >= 0; x--) {
    let d = parseInt(n[x], 10);
    (a && ((d *= 2), d > 9 && (d -= 9)), (o += d), (a = !a));
  }
  return o % 10 === 0;
}
function ce(r, n, o, a = 90) {
  const x = Math.max(0, n - a),
    d = Math.min(r.length, n + o + a);
  let b = r.slice(x, d).replace(/\n+/g, " ").replace(/\s+/g, " ");
  return (x > 0 ? "…" : "") + b + (d < r.length ? "…" : "");
}
const he = (r) =>
    r
      ? r < 1024
        ? `${r} B`
        : r < 1048576
          ? `${(r / 1024).toFixed(1)} KB`
          : `${(r / 1048576).toFixed(2)} MB`
      : "—",
  ge = (r) =>
    new Promise((n, o) => {
      if (document.querySelector(`script[src="${r}"]`)) {
        n();
        return;
      }
      const a = document.createElement("script");
      ((a.src = r),
        (a.onload = n),
        (a.onerror = o),
        document.head.appendChild(a));
    }),
  fe = (r, n) => {
    const o = URL.createObjectURL(r),
      a = document.createElement("a");
    ((a.href = o),
      (a.download = n),
      (a.style.display = "none"),
      document.body.appendChild(a),
      a.click(),
      setTimeout(() => {
        (document.body.removeChild(a), URL.revokeObjectURL(o));
      }, 2500));
  };
async function be(r, n) {
  const o = window.pdfjsLib;
  if (!o) throw new Error("PDF.js not loaded — please refresh.");
  const a = await o.getDocument({
      data: await r.arrayBuffer(),
      useSystemFonts: !0,
    }).promise,
    x = a.numPages;
  let d = {},
    b = [];
  try {
    const { info: s } = await a.getMetadata();
    ((d = { ...s }),
      [
        "Author",
        "Creator",
        "Producer",
        "Keywords",
        "Subject",
        "Title",
        "ModDate",
        "CreationDate",
      ].forEach((h) => {
        s[h] &&
          b.push({
            id: `meta_${h}`,
            type: "METADATA",
            label: `Metadata · ${h}`,
            severity: h === "Author" ? "HIGH" : "MEDIUM",
            value: String(s[h]),
            context: `Document metadata "${h}" = "${s[h]}"`,
            page: null,
            redact: !0,
            confirmed: !0,
            occurrences: 1,
          });
      }));
  } catch {}
  n(8);
  const D = [],
    g = [],
    T = [];
  for (let s = 1; s <= x; s++) {
    const h = await a.getPage(s),
      R = h.getViewport({ scale: 1 }),
      I = await h.getTextContent({ normalizeWhitespace: !1 });
    let j = "",
      y = 0;
    const S = [];
    for (const p of I.items) {
      if (!p.str) continue;
      const C = Math.abs(p.transform[3]) || Math.abs(p.transform[0]) || 0;
      (C < 0.5 && p.str.trim().length > 2 && y++,
        S.push({
          str: p.str,
          x: p.transform[4],
          y: p.transform[5],
          w: p.width || 0,
          h: C,
          pageH: R.height,
        }),
        (j += p.str + " "));
    }
    (D.push({ pageNum: s, text: j }),
      g.push({ pageNum: s, items: S, vpW: R.width, vpH: R.height }),
      y > 3 &&
        T.push({
          id: `invis_p${s}`,
          type: "INVISIBLE_TEXT",
          label: "Invisible Text Layer",
          severity: "HIGH",
          value: `~${y} hidden chars`,
          context: `Page ${s}: ${y} invisible/near-invisible text items detected.`,
          page: s,
          redact: !0,
          confirmed: !0,
          occurrences: 1,
        }),
      n(8 + Math.round((s / x) * 55)));
  }
  const u = D.map((s) => s.text).join(`
`);
  n(66);
  const c = [],
    w = new Set();
  for (const [s, h] of Object.entries($)) {
    const R = new RegExp(h.regex.source, h.regex.flags);
    let I;
    for (; (I = R.exec(u)) !== null;) {
      const j = I[0].trim(),
        y = ce(u, I.index, I[0].length);
      if (!h.validate(j, y)) continue;
      const S = `${s}::${j.replace(/[\s\-]/g, "").toLowerCase()}`,
        p = !w.has(S);
      p && w.add(S);
      let C = null,
        M = 0;
      for (const A of D)
        if (((M += A.text.length + 1), I.index < M)) {
          C = A.pageNum;
          break;
        }
      if (p)
        c.push({
          id: `${s}_${c.length}`,
          type: s,
          label: h.label,
          severity: h.severity,
          value: j,
          context: y,
          page: C,
          redact: !0,
          confirmed: !0,
          occurrences: 1,
        });
      else {
        const A = c.find(
          (E) =>
            E.type === s &&
            E.value.replace(/[\s\-]/g, "").toLowerCase() ===
              j.replace(/[\s\-]/g, "").toLowerCase(),
        );
        A && (A.occurrences = (A.occurrences || 1) + 1);
      }
    }
  }
  n(90);
  const m = [...b, ...T, ...c].sort(
    (s, h) => (Z[s.severity] ?? 9) - (Z[h.severity] ?? 9),
  );
  return (
    n(100),
    {
      findings: m,
      metadata: d,
      numPages: x,
      pageItemData: g,
      scannedAt: new Date().toISOString(),
    }
  );
}
async function ue(r, n, o, a) {
  window.jspdf ||
    (await ge(
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
    ));
  const { jsPDF: x } = window.jspdf,
    b = await window.pdfjsLib.getDocument({
      data: await r.arrayBuffer(),
      useSystemFonts: !0,
    }).promise,
    D = b.numPages,
    g = 2.5,
    T = n.filter(
      (c) =>
        c.redact &&
        c.confirmed &&
        c.type !== "METADATA" &&
        c.type !== "INVISIBLE_TEXT",
    );
  let u = null;
  for (let c = 1; c <= D; c++) {
    const w = await b.getPage(c),
      m = w.getViewport({ scale: 1 }),
      s = w.getViewport({ scale: g }),
      h = document.createElement("canvas");
    ((h.width = Math.floor(s.width)), (h.height = Math.floor(s.height)));
    const R = h.getContext("2d");
    await w.render({ canvasContext: R, viewport: s }).promise;
    const I = T.filter((S) => S.page === c).map((S) => ({
      norm: S.value.replace(/[\s\-\(\)\.]/g, "").toLowerCase(),
      raw: S.value,
    }));
    if (I.length > 0) {
      const S = o.find((p) => p.pageNum === c);
      if (S) {
        R.fillStyle = "#000000";
        for (const p of S.items) {
          if (!p.str || p.str.trim().length < 2) continue;
          const C = p.str.replace(/[\s\-\(\)\.]/g, "").toLowerCase();
          if (
            !I.some(
              ({ norm: H, raw: z }) =>
                C.length >= 2 &&
                (H.includes(C) ||
                  C.includes(H) ||
                  p.str.replace(/\s/g, "") === z.replace(/\s/g, "")),
            )
          )
            continue;
          const A = p.x * g,
            E = (p.pageH - p.y) * g,
            L = Math.max(p.h * g, 6),
            N = p.w > 0 ? p.w * g : L * 0.6 * p.str.length,
            P = 4;
          R.fillRect(A - P, E - L * 1.1 - P, N + P * 2, L * 1.4 + P * 2);
        }
      }
    }
    const j = m.width,
      y = m.height;
    (u
      ? u.addPage([j, y], j > y ? "l" : "p")
      : (u = new x({
          orientation: j > y ? "l" : "p",
          unit: "pt",
          format: [j, y],
        })),
      u.addImage(h.toDataURL("image/jpeg", 0.93), "JPEG", 0, 0, j, y),
      a(Math.round((c / D) * 100)));
  }
  return u ? u.output("blob") : null;
}
function me({ sev: r, small: n }) {
  const o = F[r] || F.LOW;
  return e.jsx("span", {
    style: {
      background: o.bg,
      color: o.text,
      fontSize: n ? "9px" : "10px",
      fontWeight: 700,
      letterSpacing: "0.11em",
      padding: n ? "1px 5px" : "2px 7px",
      borderRadius: "3px",
      fontFamily: "inherit",
      flexShrink: 0,
      border: `1px solid ${o.strip}`,
    },
    children: o.label,
  });
}
function ye({ score: r }) {
  const o = 2 * Math.PI * 44,
    a = o * (Math.min(r, 100) / 100),
    x =
      r >= 80
        ? "#fafafa"
        : r >= 50
          ? "#a1a1aa"
          : r >= 25
            ? "#71717a"
            : "#52525b",
    d =
      r >= 80
        ? "CRITICAL"
        : r >= 50
          ? "HIGH RISK"
          : r >= 25
            ? "MODERATE"
            : "CLEAN";
  return e.jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px",
    },
    children: [
      e.jsxs("svg", {
        width: "116",
        height: "116",
        viewBox: "0 0 116 116",
        children: [
          e.jsx("circle", {
            cx: "58",
            cy: "58",
            r: 44,
            fill: "none",
            stroke: "#27272a",
            strokeWidth: "8",
          }),
          e.jsx("circle", {
            cx: "58",
            cy: "58",
            r: 44,
            fill: "none",
            stroke: "#fafafa",
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeDasharray: `${a} ${o - a}`,
            strokeDashoffset: o * 0.25,
            style: {
              transition: "stroke-dasharray 1s cubic-bezier(.4,0,.2,1)",
            },
          }),
          e.jsx("text", {
            x: "58",
            y: "53",
            textAnchor: "middle",
            fill: "#fafafa",
            style: { fontSize: "24px", fontFamily: "inherit", fontWeight: 700 },
            children: r,
          }),
          e.jsx("text", {
            x: "58",
            y: "69",
            textAnchor: "middle",
            fill: "#52525b",
            style: {
              fontSize: "8px",
              fontFamily: "inherit",
              letterSpacing: "0.12em",
            },
            children: "RISK SCORE",
          }),
        ],
      }),
      e.jsx("span", {
        style: {
          fontSize: "10px",
          color: x,
          fontFamily: "inherit",
          letterSpacing: "0.12em",
          fontWeight: 700,
        },
        children: d,
      }),
    ],
  });
}
function je({ finding: r, onToggleRedact: n, expanded: o, onToggleExpand: a }) {
  const x = F[r.severity] || F.LOW,
    d = r.type === "METADATA" || r.type === "INVISIBLE_TEXT",
    b = d
      ? r.value
      : r.value.length <= 4
        ? "█".repeat(r.value.length)
        : r.value.slice(0, 2) +
          "█".repeat(Math.max(2, r.value.length - 4)) +
          r.value.slice(-2),
    D = (g, T) => {
      if (!T || d) return g;
      try {
        const u = T.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return g
          .split(new RegExp(`(${u})`, "gi"))
          .map((c, w) =>
            new RegExp(`^${u}$`, "i").test(c)
              ? e.jsx(
                  "mark",
                  {
                    style: {
                      background: "#3f3f46",
                      color: "#fafafa",
                      borderRadius: "2px",
                      padding: "0 2px",
                    },
                    children: c,
                  },
                  w,
                )
              : c,
          );
      } catch {
        return g;
      }
    };
  return e.jsxs("div", {
    style: {
      background: t.panel,
      border: `1px solid ${t.border}`,
      borderLeft: `3px solid ${r.redact ? x.strip : t.border}`,
      borderRadius: "0 10px 10px 0",
      overflow: "hidden",
      transition: "box-shadow 0.18s, border-left-color 0.18s",
      boxShadow: r.redact ? "0 2px 12px rgba(0,0,0,0.4)" : "none",
    },
    children: [
      e.jsxs("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "11px",
          padding: "13px 14px",
        },
        children: [
          e.jsx("div", {
            style: {
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: x.dot,
              flexShrink: 0,
              marginTop: "5px",
            },
          }),
          e.jsxs("div", {
            style: { flex: 1, minWidth: 0 },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  flexWrap: "wrap",
                  marginBottom: "3px",
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: t.text,
                      lineHeight: 1.3,
                    },
                    children: r.label,
                  }),
                  e.jsx(me, { sev: r.severity, small: !0 }),
                  r.page &&
                    e.jsxs("span", {
                      style: {
                        fontSize: "10px",
                        color: t.textFaint,
                        fontFamily: "inherit",
                      },
                      children: ["p.", r.page],
                    }),
                  (r.occurrences || 0) > 1 &&
                    e.jsxs("span", {
                      style: {
                        fontSize: "10px",
                        background: t.border,
                        border: `1px solid ${t.borderSoft}`,
                        color: t.textDim,
                        padding: "1px 7px",
                        borderRadius: "20px",
                      },
                      children: ["×", r.occurrences],
                    }),
                ],
              }),
              e.jsx("div", {
                style: {
                  fontFamily: "inherit",
                  fontSize: "11.5px",
                  color: r.redact ? x.dot : t.textFaint,
                  letterSpacing: "0.04em",
                  wordBreak: "break-all",
                },
                children: r.redact ? b : r.value,
              }),
            ],
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flexShrink: 0,
            },
            children: [
              e.jsx("button", {
                onClick: a,
                style: {
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: t.textFaint,
                  padding: "3px",
                  transition: "color 0.15s",
                },
                onMouseEnter: (g) => (g.currentTarget.style.color = t.textDim),
                onMouseLeave: (g) =>
                  (g.currentTarget.style.color = t.textFaint),
                children: e.jsx(K, {
                  style: {
                    width: "14px",
                    height: "14px",
                    transform: o ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  },
                }),
              }),
              e.jsx("button", {
                onClick: n,
                style: {
                  padding: "4px 11px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  fontFamily: "inherit",
                  background: r.redact ? x.bg : t.border,
                  border: `1px solid ${r.redact ? x.strip : t.borderSoft}`,
                  color: r.redact ? x.text : t.textDim,
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                },
                children: r.redact ? "✓ REDACT" : "KEEP",
              }),
            ],
          }),
        ],
      }),
      o &&
        e.jsxs("div", {
          style: {
            borderTop: `1px solid ${t.border}`,
            background: "#111113",
            padding: "12px 14px 14px 32px",
          },
          children: [
            e.jsx("p", {
              style: {
                fontSize: "10px",
                color: t.textFaint,
                fontFamily: "inherit",
                letterSpacing: "0.1em",
                marginBottom: "7px",
              },
              children: "CONTEXT",
            }),
            e.jsx("p", {
              style: {
                fontSize: "12px",
                color: t.textDim,
                lineHeight: "1.65",
                fontStyle: "italic",
                margin: "0 0 8px",
              },
              children: D(r.context, r.value),
            }),
            $[r.type]?.description &&
              e.jsxs("p", {
                style: {
                  fontSize: "11px",
                  color: t.textFaint,
                  margin: 0,
                  lineHeight: 1.5,
                },
                children: ["ℹ ", $[r.type].description],
              }),
          ],
        }),
    ],
  });
}
function Se({ progress: r, msg: n }) {
  const o = [
    { t: 8, label: "Parsing document structure" },
    { t: 25, label: "Extracting metadata fields" },
    { t: 45, label: "Reading text layers" },
    { t: 65, label: "Detecting invisible content" },
    { t: 80, label: "Matching PII patterns" },
    { t: 95, label: "Computing risk scores" },
  ];
  return e.jsxs("div", {
    style: {
      background: t.panel,
      border: `1px solid ${t.border}`,
      borderRadius: "20px",
      padding: "28px 24px",
      boxShadow: "0 4px 40px rgba(0,0,0,0.4)",
    },
    children: [
      e.jsxs("div", {
        style: { marginBottom: "28px" },
        children: [
          e.jsxs("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "10px",
            },
            children: [
              e.jsx("span", {
                style: {
                  fontSize: "11px",
                  fontFamily: "inherit",
                  color: t.textFaint,
                  letterSpacing: "0.1em",
                },
                children: "SCANNING",
              }),
              e.jsxs("span", {
                style: {
                  fontSize: "22px",
                  fontWeight: 800,
                  fontFamily: "inherit",
                  color: t.text,
                },
                children: [Math.round(r), "%"],
              }),
            ],
          }),
          e.jsx("div", {
            style: {
              height: "3px",
              background: t.border,
              borderRadius: "2px",
              overflow: "hidden",
            },
            children: e.jsx("div", {
              style: {
                height: "100%",
                borderRadius: "2px",
                transition: "width 0.4s ease",
                background: "#fafafa",
                width: `${r}%`,
              },
            }),
          }),
        ],
      }),
      e.jsx("div", {
        style: { display: "flex", flexDirection: "column", gap: "10px" },
        children: o.map(({ t: a, label: x }) => {
          const d = r > a,
            b = r >= a && r < a + 18;
          return e.jsxs(
            "div",
            {
              style: { display: "flex", alignItems: "center", gap: "12px" },
              children: [
                e.jsxs("div", {
                  style: {
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    border: d
                      ? "none"
                      : `1.5px solid ${b ? t.textDim : t.border}`,
                    background: d ? t.text : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                  },
                  children: [
                    d &&
                      e.jsx(W, {
                        style: {
                          width: "10px",
                          height: "10px",
                          color: t.bg,
                          strokeWidth: 2.5,
                        },
                      }),
                    b &&
                      !d &&
                      e.jsx("div", {
                        style: {
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: t.textDim,
                          animation: "prsScanAnim 0.8s ease-in-out infinite",
                        },
                      }),
                  ],
                }),
                e.jsx("span", {
                  style: {
                    fontSize: "13px",
                    color: d ? t.text : b ? t.textDim : t.textFaint,
                    transition: "color 0.3s",
                    fontWeight: d ? 500 : 400,
                  },
                  children: x,
                }),
              ],
            },
            x,
          );
        }),
      }),
      n &&
        e.jsx("div", {
          style: {
            marginTop: "18px",
            padding: "9px 13px",
            background: "#111113",
            border: `1px solid ${t.border}`,
            borderRadius: "8px",
          },
          children: e.jsxs("p", {
            style: {
              fontSize: "11px",
              fontFamily: "inherit",
              color: t.textDim,
              margin: 0,
            },
            children: [
              n,
              e.jsx("span", {
                style: { animation: "prsScanBlink 1s infinite" },
                children: "▌",
              }),
            ],
          }),
        }),
    ],
  });
}
function ve({ progress: r }) {
  return e.jsx("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(9,9,11,0.85)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    children: e.jsxs("div", {
      style: {
        background: t.panel,
        border: `1px solid ${t.border}`,
        borderRadius: "22px",
        padding: "38px 36px",
        maxWidth: "320px",
        width: "100%",
        textAlign: "center",
        boxShadow: "0 16px 60px rgba(0,0,0,0.6)",
      },
      children: [
        e.jsx("div", {
          style: {
            width: "54px",
            height: "54px",
            borderRadius: "50%",
            margin: "0 auto 18px",
            background: "#fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          },
          children: e.jsx(pe, {
            style: { width: "20px", height: "20px", color: t.bg },
          }),
        }),
        e.jsx("h3", {
          style: {
            fontSize: "17px",
            fontWeight: 800,
            color: t.text,
            margin: "0 0 7px",
            letterSpacing: "-0.02em",
          },
          children: "Building Redacted PDF",
        }),
        e.jsx("p", {
          style: {
            fontSize: "12px",
            color: t.textDim,
            margin: "0 0 22px",
            lineHeight: 1.55,
          },
          children: "Rendering pages & painting redaction boxes…",
        }),
        e.jsx("div", {
          style: {
            background: t.border,
            borderRadius: "8px",
            height: "5px",
            overflow: "hidden",
            marginBottom: "10px",
          },
          children: e.jsx("div", {
            style: {
              height: "100%",
              borderRadius: "8px",
              background: "#fafafa",
              width: `${r}%`,
              transition: "width 0.3s ease",
            },
          }),
        }),
        e.jsxs("p", {
          style: {
            fontFamily: "inherit",
            fontSize: "15px",
            fontWeight: 800,
            color: t.text,
            margin: 0,
          },
          children: [Math.round(r), "%"],
        }),
        r >= 98 &&
          e.jsxs("p", {
            style: {
              fontSize: "11.5px",
              color: t.textDim,
              marginTop: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            },
            children: [
              e.jsx(W, { style: { width: "14px", height: "14px" } }),
              "Download starting…",
            ],
          }),
      ],
    }),
  });
}
function ke({ showNotification: r }) {
  const [n, o] = v.useState(null),
    [a, x] = v.useState(!1),
    [d, b] = v.useState("idle"),
    [D, g] = v.useState(0),
    [T, u] = v.useState(""),
    [c, w] = v.useState(null),
    [m, s] = v.useState([]),
    [h, R] = v.useState(null),
    [I, j] = v.useState("ALL"),
    [y, S] = v.useState("ALL"),
    [p, C] = v.useState(!1),
    [M, A] = v.useState(null),
    E = v.useRef(null);
  v.useEffect(() => {
    const i = document.createElement("style");
    return (
      (i.id = "prs-dark-styles"),
      (i.textContent = `
      @keyframes prsScanBlink{0%,100%{opacity:1}50%{opacity:0}}
      @keyframes prsScanAnim{0%,100%{opacity:.35;transform:scale(.7)}50%{opacity:1;transform:scale(1)}}
      @keyframes prsScanFade{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}
      .prs-dark-fade{animation:prsScanFade .3s ease both}
      .prs-dark-card{transition:transform .15s ease}
      .prs-dark-card:hover{transform:translateX(3px)}
      .prs-dark-btn{transition:all .15s ease;cursor:pointer}
      .prs-dark-btn:hover{filter:brightness(1.15)}
      .prs-dark-btn:active{transform:scale(.975)}
    `),
      document.head.appendChild(i),
      () => {
        const l = document.getElementById("prs-dark-styles");
        l && l.remove();
      }
    );
  }, []);
  const L = v.useCallback(
      (i) => {
        if (!i || i.type !== "application/pdf") {
          r?.("Please select a PDF file", "error");
          return;
        }
        (o(i), b("ready"), w(null), s([]));
      },
      [r],
    ),
    N = v.useCallback(
      (i) => {
        (i.preventDefault(), x(!1), L(i.dataTransfer.files[0]));
      },
      [L],
    ),
    P = async () => {
      if (n) {
        (b("scanning"), g(0));
        try {
          const i = await be(n, (l) => {
            (g(l),
              u(
                l < 15
                  ? "Parsing document…"
                  : l < 55
                    ? "Extracting text layers…"
                    : l < 85
                      ? "Running PII detection…"
                      : "Finalising…",
              ));
          });
          (w(i), s(i.findings), b("results"), u(""));
        } catch (i) {
          (b("error"), r?.(i.message || "Scan failed", "error"));
        }
      }
    },
    H = async () => {
      if (!(!c || !n)) {
        A(0);
        try {
          const i = await ue(n, m, c.pageItemData, (l) => A(l));
          i &&
            (fe(
              i,
              (n.name.replace(/\.pdf$/i, "") || "document") + "_redacted.pdf",
            ),
            r?.("Redacted PDF downloaded!", "success"));
        } catch (i) {
          r?.("Export failed: " + i.message, "error");
        } finally {
          setTimeout(() => A(null), 1400);
        }
      }
    },
    z = () => {
      (o(null),
        b("idle"),
        g(0),
        u(""),
        w(null),
        s([]),
        R(null),
        j("ALL"),
        S("ALL"),
        C(!1),
        E.current && (E.current.value = ""));
    },
    X = (i) =>
      s((l) => l.map((f) => (f.id === i ? { ...f, redact: !f.redact } : f))),
    Y = () => s((i) => i.map((l) => ({ ...l, redact: !0 }))),
    q = () => s((i) => i.map((l) => ({ ...l, redact: !1 }))),
    O = m.filter((i) => i.severity === "CRITICAL").length,
    B = m.filter((i) => i.severity === "HIGH").length,
    U = m.filter((i) => i.severity === "MEDIUM").length,
    G = m.filter((i) => i.redact).length,
    J = Math.min(100, Math.round(O * 25 + B * 12 + U * 5)),
    Q = ["ALL", ...new Set(m.map((i) => i.type))],
    _ = m.filter(
      (i) => (I === "ALL" || i.severity === I) && (y === "ALL" || i.type === y),
    );
  return e.jsxs("div", {
    style: {
      fontFamily: "inherit",
      background: t.bg,
      minHeight: "100%",
      color: t.text,
    },
    className: "w-full max-w-2xl mx-auto px-3 py-6 sm:px-5 sm:py-10",
    children: [
      M !== null && e.jsx(ve, { progress: M }),
      e.jsxs("div", {
        style: { marginBottom: "30px" },
        children: [
          e.jsxs("div", {
            style: {
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
            },
            children: [
              e.jsxs("div", {
                style: { flex: 1 },
                children: [
                  e.jsx("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "14px",
                    },
                  }),
                  e.jsx("h1", {
                    style: {
                      fontSize: "clamp(1.9rem,7vw,2.5rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      lineHeight: 1.05,
                      margin: 0,
                      color: "#fafafa",
                    },
                    children: "Privacy Risk Scanner",
                  }),
                  e.jsx("span", {
                    style: {
                      fontSize: "9.5px",
                      fontFamily: "inherit",
                      color: t.textFaint,
                      letterSpacing: "0.18em",
                      fontWeight: 600,
                    },
                    children: "PRIVACY · RISK · SCANNER",
                  }),
                  e.jsx("p", {
                    style: {
                      fontSize: "13px",
                      color: t.textDim,
                      marginTop: "10px",
                      lineHeight: 1.65,
                      maxWidth: "390px",
                    },
                    children:
                      "Detect Aadhaar, PAN, cards, emails, IFSC, hidden metadata & invisible text — download a pixel-perfect redacted PDF, fully client-side.",
                  }),
                ],
              }),
              d !== "idle" &&
                e.jsx("button", {
                  onClick: z,
                  className: "prs-dark-btn",
                  style: {
                    flexShrink: 0,
                    marginTop: "2px",
                    background: t.panel,
                    border: `1px solid ${t.border}`,
                    borderRadius: "8px",
                    padding: "7px 14px",
                    fontSize: "11px",
                    fontFamily: "inherit",
                    color: t.textDim,
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  },
                  children: "↺ RESET",
                }),
            ],
          }),
          e.jsx("div", {
            style: { height: "1px", marginTop: "22px", background: t.border },
          }),
        ],
      }),
      d === "idle" &&
        e.jsxs("div", {
          className: "prs-dark-fade",
          children: [
            e.jsxs("div", {
              style: {
                border: `2px dashed ${a ? t.borderSoft : t.border}`,
                borderRadius: "20px",
                background: a ? "#111113" : t.panel,
                padding: "clamp(32px,9vw,60px) 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: a
                  ? `0 0 0 4px ${t.borderSoft}33 inset, 0 4px 20px rgba(0,0,0,0.4)`
                  : "0 2px 16px rgba(0,0,0,0.3)",
              },
              onDragOver: (i) => {
                (i.preventDefault(), x(!0));
              },
              onDragLeave: () => x(!1),
              onDrop: N,
              onClick: () => E.current?.click(),
              children: [
                e.jsx("input", {
                  ref: E,
                  type: "file",
                  accept: ".pdf",
                  onChange: (i) => L(i.target.files[0]),
                  className: "hidden",
                }),
                e.jsx("div", {
                  style: {
                    width: "58px",
                    height: "58px",
                    borderRadius: "17px",
                    marginBottom: "18px",
                    background: "#fafafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 5px 22px rgba(0,0,0,0.5)",
                  },
                  children: e.jsx(ee, {
                    style: {
                      width: "24px",
                      height: "24px",
                      color: t.bg,
                      strokeWidth: 1.8,
                    },
                  }),
                }),
                e.jsx("p", {
                  style: {
                    fontWeight: 700,
                    fontSize: "16px",
                    color: t.text,
                    margin: "0 0 5px",
                  },
                  children: "Drop your PDF here",
                }),
                e.jsx("p", {
                  style: {
                    fontSize: "13px",
                    color: t.textFaint,
                    margin: "0 0 18px",
                  },
                  children: "or tap to browse",
                }),
                e.jsx("div", {
                  style: {
                    background: t.border,
                    border: `1px solid ${t.borderSoft}`,
                    padding: "5px 14px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    color: t.textDim,
                    fontFamily: "inherit",
                    letterSpacing: "0.08em",
                  },
                  children: "ZERO UPLOAD · RUNS IN YOUR BROWSER",
                }),
              ],
            }),
            e.jsx("div", {
              style: {
                marginTop: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
                gap: "7px",
              },
              children: [
                ["CRITICAL", "Aadhaar Number"],
                ["CRITICAL", "PAN Number"],
                ["CRITICAL", "Credit / Debit Card"],
                ["CRITICAL", "Bank Account"],
                ["CRITICAL", "Passport Number"],
                ["HIGH", "Email Address"],
                ["HIGH", "Phone Number"],
                ["HIGH", "IFSC & GST Codes"],
                ["HIGH", "Hidden Metadata"],
                ["MEDIUM", "Embedded URLs & IPs"],
                ["MEDIUM", "Invisible Text Layers"],
                ["MEDIUM", "Date of Birth"],
              ].map(([i, l]) =>
                e.jsxs(
                  "div",
                  {
                    style: {
                      background: t.panel,
                      border: `1px solid ${t.border}`,
                      borderLeft: `3px solid ${F[i].strip}`,
                      borderRadius: "0 9px 9px 0",
                      padding: "9px 11px",
                      display: "flex",
                      alignItems: "center",
                      gap: "9px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                    },
                    children: [
                      e.jsx("div", {
                        style: {
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: F[i].dot,
                          flexShrink: 0,
                        },
                      }),
                      e.jsx("span", {
                        style: {
                          fontSize: "12px",
                          color: t.textDim,
                          fontWeight: 500,
                        },
                        children: l,
                      }),
                    ],
                  },
                  l,
                ),
              ),
            }),
          ],
        }),
      d === "ready" &&
        n &&
        e.jsxs("div", {
          className: "prs-dark-fade",
          style: { display: "flex", flexDirection: "column", gap: "12px" },
          children: [
            e.jsxs("div", {
              style: {
                background: t.panel,
                border: `1px solid ${t.border}`,
                borderRadius: "14px",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
              },
              children: [
                e.jsx("div", {
                  style: {
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: t.border,
                    border: `1px solid ${t.borderSoft}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  },
                  children: e.jsx(se, {
                    style: { width: "16px", height: "16px", color: t.textDim },
                  }),
                }),
                e.jsxs("div", {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    e.jsx("p", {
                      style: {
                        fontSize: "13px",
                        fontWeight: 600,
                        color: t.text,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        margin: 0,
                      },
                      children: n.name,
                    }),
                    e.jsx("p", {
                      style: {
                        fontSize: "11px",
                        color: t.textFaint,
                        fontFamily: "inherit",
                        margin: "2px 0 0",
                      },
                      children: he(n.size),
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: z,
                  style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: t.textFaint,
                    padding: "4px",
                    transition: "color .15s",
                  },
                  onMouseEnter: (i) => (i.currentTarget.style.color = t.text),
                  onMouseLeave: (i) =>
                    (i.currentTarget.style.color = t.textFaint),
                  children: e.jsx(te, {
                    style: { width: "16px", height: "16px" },
                  }),
                }),
              ],
            }),
            e.jsxs("button", {
              onClick: P,
              className: "prs-dark-btn",
              style: {
                width: "100%",
                padding: "17px 20px",
                borderRadius: "14px",
                background: "#fafafa",
                border: "none",
                color: t.bg,
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                boxShadow: "0 4px 28px rgba(250,250,250,0.08)",
              },
              children: [
                e.jsx(oe, { style: { width: "16px", height: "16px" } }),
                "INITIATE PRIVACY SCAN",
              ],
            }),
            e.jsx("p", {
              style: {
                textAlign: "center",
                fontSize: "11px",
                color: t.textFaint,
                fontFamily: "inherit",
                letterSpacing: "0.06em",
                margin: 0,
              },
              children: "Your file never leaves this device",
            }),
          ],
        }),
      d === "scanning" &&
        e.jsx("div", {
          className: "prs-dark-fade",
          children: e.jsx(Se, { progress: D, msg: T }),
        }),
      d === "error" &&
        e.jsxs("div", {
          className: "prs-dark-fade",
          style: {
            background: t.panel,
            border: `1px solid ${t.border}`,
            borderRadius: "20px",
            padding: "44px 24px",
            textAlign: "center",
            boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
          },
          children: [
            e.jsx("div", {
              style: {
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: t.border,
                border: `1px solid ${t.borderSoft}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              },
              children: e.jsx(ie, {
                style: { width: "20px", height: "20px", color: t.textDim },
              }),
            }),
            e.jsx("p", {
              style: {
                fontSize: "16px",
                fontWeight: 700,
                margin: "0 0 8px",
                color: t.text,
              },
              children: "Scan failed",
            }),
            e.jsx("p", {
              style: {
                fontSize: "13px",
                color: t.textDim,
                margin: "0 0 22px",
                lineHeight: 1.6,
              },
              children:
                "Ensure PDF.js is loaded. Image-only/scanned PDFs require OCR preprocessing.",
            }),
            e.jsx("button", {
              onClick: z,
              className: "prs-dark-btn",
              style: {
                background: t.text,
                color: t.bg,
                border: "none",
                padding: "11px 30px",
                borderRadius: "9px",
                fontSize: "13px",
                fontWeight: 700,
              },
              children: "Try Again",
            }),
          ],
        }),
      d === "results" &&
        c &&
        e.jsxs("div", {
          className: "prs-dark-fade",
          style: { display: "flex", flexDirection: "column", gap: "12px" },
          children: [
            e.jsxs("div", {
              style: {
                background: t.panel,
                border: `1px solid ${t.border}`,
                borderRadius: "20px",
                padding: "22px 20px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "18px",
              },
              children: [
                e.jsx(ye, { score: J }),
                e.jsxs("div", {
                  style: { flex: "1 1 180px" },
                  children: [
                    e.jsxs("p", {
                      style: {
                        fontSize: "10px",
                        fontFamily: "inherit",
                        letterSpacing: "0.12em",
                        color: t.textFaint,
                        margin: "0 0 12px",
                      },
                      children: [
                        c.numPages,
                        " PAGES · ",
                        m.length,
                        " FINDINGS",
                      ],
                    }),
                    e.jsx("div", {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(3,1fr)",
                        gap: "7px",
                        marginBottom: "11px",
                      },
                      children: [
                        ["Critical", O, F.CRITICAL],
                        ["High", B, F.HIGH],
                        ["Medium", U, F.MEDIUM],
                      ].map(([i, l, f]) =>
                        e.jsxs(
                          "div",
                          {
                            style: {
                              border: `1px solid ${t.border}`,
                              borderTop: `2px solid ${l > 0 ? f.dot : t.border}`,
                              borderRadius: "8px",
                              padding: "9px 6px",
                              textAlign: "center",
                              background: l > 0 ? "#111113" : t.panel,
                            },
                            children: [
                              e.jsx("div", {
                                style: {
                                  fontFamily: "inherit",
                                  fontSize: "clamp(18px,5vw,24px)",
                                  fontWeight: 800,
                                  color: l > 0 ? f.dot : t.textFaint,
                                  lineHeight: 1,
                                },
                                children: l,
                              }),
                              e.jsx("div", {
                                style: {
                                  fontSize: "9px",
                                  letterSpacing: "0.1em",
                                  fontFamily: "inherit",
                                  fontWeight: 700,
                                  color: l > 0 ? f.dot : t.textFaint,
                                  marginTop: "4px",
                                },
                                children: i.toUpperCase(),
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      style: {
                        background: "#111113",
                        border: `1px solid ${t.border}`,
                        borderRadius: "8px",
                        padding: "9px 12px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      },
                      children: [
                        e.jsx("span", {
                          style: { fontSize: "12px", color: t.textDim },
                          children: "Marked for redaction",
                        }),
                        e.jsxs("span", {
                          style: {
                            fontFamily: "inherit",
                            fontSize: "15px",
                            fontWeight: 800,
                            color: G > 0 ? t.text : t.textFaint,
                          },
                          children: [
                            G,
                            e.jsxs("span", {
                              style: {
                                fontSize: "11px",
                                color: t.textFaint,
                                fontWeight: 400,
                              },
                              children: [" ", "/ ", m.length],
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
              style: { display: "flex", flexWrap: "wrap", gap: "8px" },
              children: [
                e.jsxs("button", {
                  onClick: H,
                  className: "prs-dark-btn",
                  style: {
                    flex: "2 1 190px",
                    padding: "13px 16px",
                    borderRadius: "12px",
                    background: "#fafafa",
                    border: "none",
                    color: t.bg,
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: "0 4px 18px rgba(250,250,250,0.08)",
                  },
                  children: [
                    e.jsx(re, { style: { width: "14px", height: "14px" } }),
                    "EXPORT REDACTED PDF",
                  ],
                }),
                e.jsxs("button", {
                  onClick: Y,
                  className: "prs-dark-btn",
                  style: {
                    flex: "1 1 90px",
                    padding: "13px 12px",
                    borderRadius: "12px",
                    background: t.text,
                    border: "none",
                    color: t.bg,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    boxShadow: "0 2px 8px rgba(250,250,250,0.1)",
                  },
                  children: [
                    e.jsx(ne, { style: { width: "14px", height: "14px" } }),
                    " ALL",
                  ],
                }),
                e.jsxs("button", {
                  onClick: q,
                  className: "prs-dark-btn",
                  style: {
                    flex: "1 1 90px",
                    padding: "13px 12px",
                    borderRadius: "12px",
                    background: t.panel,
                    border: `1px solid ${t.border}`,
                    color: t.textDim,
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  },
                  children: [
                    e.jsx(ae, { style: { width: "14px", height: "14px" } }),
                    " KEEP ALL",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              style: {
                background: t.panel,
                border: `1px solid ${t.border}`,
                borderLeft: `3px solid ${t.text}`,
                borderRadius: "0 10px 10px 0",
                padding: "11px 14px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
              },
              children: [
                e.jsx(de, {
                  style: {
                    width: "16px",
                    height: "16px",
                    color: t.textDim,
                    flexShrink: 0,
                    marginTop: "1px",
                  },
                }),
                e.jsxs("p", {
                  style: {
                    fontSize: "11.5px",
                    color: t.textDim,
                    margin: 0,
                    lineHeight: 1.6,
                  },
                  children: [
                    e.jsx("strong", {
                      style: { color: t.text },
                      children: "Export builds a real redacted PDF.",
                    }),
                    " ",
                    "Each page renders to canvas; selected values are replaced with solid ■ blocks. Metadata is automatically stripped from the output file.",
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              style: {
                background: t.panel,
                border: `1px solid ${t.border}`,
                borderRadius: "11px",
                padding: "10px 14px",
                boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
              },
              children: e.jsxs("div", {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  alignItems: "center",
                },
                children: [
                  e.jsx("span", {
                    style: {
                      fontSize: "9.5px",
                      fontFamily: "inherit",
                      color: t.textFaint,
                      letterSpacing: "0.12em",
                      marginRight: "3px",
                    },
                    children: "FILTER",
                  }),
                  ["ALL", "CRITICAL", "HIGH", "MEDIUM"].map((i) => {
                    const l = I === i,
                      f = i !== "ALL" ? F[i] : null;
                    return e.jsx(
                      "button",
                      {
                        onClick: () => j(i),
                        style: {
                          padding: "3px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          fontFamily: "inherit",
                          background: l ? (f ? f.bg : t.text) : t.border,
                          border: `1px solid ${l && f ? f.strip : t.borderSoft}`,
                          color: l ? (f ? f.text : t.bg) : t.textDim,
                          transition: "all .15s",
                        },
                        children: i,
                      },
                      i,
                    );
                  }),
                  e.jsx("div", {
                    style: {
                      width: "1px",
                      height: "14px",
                      background: t.border,
                      margin: "0 2px",
                    },
                  }),
                  e.jsx("select", {
                    value: y,
                    onChange: (i) => S(i.target.value),
                    style: {
                      background: t.border,
                      border: `1px solid ${t.borderSoft}`,
                      color: t.textDim,
                      fontSize: "10px",
                      fontFamily: "inherit",
                      padding: "3px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      letterSpacing: "0.06em",
                    },
                    children: Q.map((i) =>
                      e.jsx(
                        "option",
                        { value: i, children: i.replace(/_/g, " ") },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              style: { display: "flex", flexDirection: "column", gap: "7px" },
              children:
                _.length === 0
                  ? e.jsxs("div", {
                      style: {
                        background: t.panel,
                        border: `1px solid ${t.border}`,
                        borderRadius: "14px",
                        padding: "36px 20px",
                        textAlign: "center",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
                      },
                      children: [
                        e.jsx(W, {
                          style: {
                            width: "32px",
                            height: "32px",
                            margin: "0 auto 12px",
                            display: "block",
                            color: t.textFaint,
                          },
                        }),
                        e.jsx("p", {
                          style: {
                            fontSize: "15px",
                            fontWeight: 700,
                            color: t.text,
                            margin: "0 0 6px",
                          },
                          children:
                            m.length === 0
                              ? "No privacy risks detected"
                              : "No findings match filter",
                        }),
                        e.jsx("p", {
                          style: {
                            fontSize: "12px",
                            color: t.textDim,
                            margin: 0,
                          },
                          children:
                            m.length === 0
                              ? "This document appears clean."
                              : "Try adjusting the filter above.",
                        }),
                      ],
                    })
                  : _.map((i, l) =>
                      e.jsx(
                        "div",
                        {
                          className: "prs-dark-card",
                          style: { animationDelay: `${l * 0.02}s` },
                          children: e.jsx(je, {
                            finding: i,
                            onToggleRedact: () => X(i.id),
                            onToggleExpand: () => R(h === i.id ? null : i.id),
                            expanded: h === i.id,
                          }),
                        },
                        i.id,
                      ),
                    ),
            }),
            Object.keys(c.metadata).filter((i) => !i.startsWith("_")).length >
              0 &&
              e.jsxs("div", {
                style: {
                  background: t.panel,
                  border: `1px solid ${t.border}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
                },
                children: [
                  e.jsxs("button", {
                    onClick: () => C((i) => !i),
                    style: {
                      width: "100%",
                      padding: "13px 16px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: t.textDim,
                      transition: "background .15s",
                    },
                    onMouseEnter: (i) =>
                      (i.currentTarget.style.background = "#111113"),
                    onMouseLeave: (i) =>
                      (i.currentTarget.style.background = "none"),
                    children: [
                      e.jsxs("div", {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          flexWrap: "wrap",
                        },
                        children: [
                          e.jsx(le, {
                            style: {
                              width: "14px",
                              height: "14px",
                              color: t.textFaint,
                            },
                          }),
                          e.jsx("span", {
                            style: {
                              fontSize: "12px",
                              fontWeight: 700,
                              fontFamily: "inherit",
                              letterSpacing: "0.08em",
                              color: t.textDim,
                            },
                            children: "DOCUMENT METADATA",
                          }),
                          e.jsxs("span", {
                            style: {
                              fontSize: "10px",
                              background: t.border,
                              border: `1px solid ${t.borderSoft}`,
                              color: t.textDim,
                              padding: "1px 8px",
                              borderRadius: "20px",
                            },
                            children: [
                              Object.keys(c.metadata).filter(
                                (i) => !i.startsWith("_"),
                              ).length,
                              " ",
                              "fields",
                            ],
                          }),
                          e.jsx("span", {
                            style: {
                              fontSize: "9.5px",
                              background: t.text,
                              color: t.bg,
                              padding: "2px 8px",
                              borderRadius: "20px",
                              fontFamily: "inherit",
                              letterSpacing: "0.06em",
                              fontWeight: 700,
                            },
                            children: "STRIPPED ON EXPORT",
                          }),
                        ],
                      }),
                      e.jsx(K, {
                        style: {
                          width: "16px",
                          height: "16px",
                          color: t.textFaint,
                          flexShrink: 0,
                          transform: p ? "rotate(180deg)" : "none",
                          transition: "transform .2s",
                        },
                      }),
                    ],
                  }),
                  p &&
                    e.jsx("div", {
                      style: {
                        borderTop: `1px solid ${t.border}`,
                        padding: "13px 16px",
                      },
                      children: Object.entries(c.metadata)
                        .filter(([i]) => !i.startsWith("_"))
                        .map(([i, l]) => {
                          const f = m.some(
                            (V) => V.type === "METADATA" && V.label.includes(i),
                          );
                          return e.jsxs(
                            "div",
                            {
                              style: {
                                display: "flex",
                                gap: "10px",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                padding: "6px 9px",
                                borderRadius: "6px",
                                flexWrap: "wrap",
                                background: f ? "#111113" : "transparent",
                                border: `1px solid ${f ? t.border : "transparent"}`,
                                marginBottom: "5px",
                              },
                              children: [
                                e.jsx("span", {
                                  style: {
                                    color: t.textFaint,
                                    minWidth: "110px",
                                    flexShrink: 0,
                                  },
                                  children: i,
                                }),
                                e.jsx("span", {
                                  style: {
                                    color: f ? t.text : t.textDim,
                                    wordBreak: "break-all",
                                    flex: 1,
                                  },
                                  children: String(l),
                                }),
                                f &&
                                  e.jsx("span", {
                                    style: {
                                      fontSize: "9.5px",
                                      background: t.text,
                                      color: t.bg,
                                      padding: "1px 7px",
                                      borderRadius: "4px",
                                      fontWeight: 700,
                                      flexShrink: 0,
                                    },
                                    children: "FLAGGED",
                                  }),
                              ],
                            },
                            i,
                          );
                        }),
                    }),
                ],
              }),
            e.jsx("div", {
              style: {
                background: t.panel,
                border: `1px solid ${t.border}`,
                borderRadius: "10px",
                padding: "12px 16px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
              },
              children: e.jsxs("p", {
                style: {
                  fontSize: "11px",
                  color: t.textFaint,
                  margin: 0,
                  lineHeight: 1.7,
                  fontFamily: "inherit",
                },
                children: [
                  e.jsx("span", {
                    style: { color: t.textDim, fontWeight: 600 },
                    children: "NOTE · ",
                  }),
                  "Operates on the PDF text layer. Image-embedded data in scanned PDFs requires OCR first. Original file is never modified or uploaded — all processing is local.",
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
export { ke as default };
