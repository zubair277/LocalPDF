import { r as l, j as e } from "./react-vendor-Bc7KCos-.js";
const on = `
let tts = null;
async function boot() {
  const { KokoroTTS } = await import(
    'https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm'
  );
  const MODEL = 'onnx-community/Kokoro-82M-v1.0-ONNX';
  const progress_callback = ({ status, file, progress }) =>
    postMessage({ type:'dl', status, file: file||'', progress: progress||0 });
  // CPU/wasm with q8 weights — verified to produce clean, full-precision audio.
  // (A WebGPU fp16 path was tried but fp16 inference yields NaN/garbage samples
  // on many GPU drivers — destroyed audio + waveform crashes — so it's disabled.)
  tts = await KokoroTTS.from_pretrained(MODEL, {
    dtype: 'q8',
    device: 'wasm',
    progress_callback,
  });
  postMessage({ type:'ready', device:'wasm' });
}
onmessage = async ({ data }) => {
  if (data.type === 'init') {
    try { await boot(); } catch(e) { postMessage({ type:'init_err', msg:e.message }); }
    return;
  }
  if (data.type === 'synth') {
    if (!tts) { postMessage({ type:'synth_err', id:data.id, msg:'Not initialised' }); return; }
    try {
      const out = await tts.generate(data.text, { voice: data.voice || 'af_heart' });
      const arr = out.audio instanceof Float32Array ? out.audio : new Float32Array(out.audio);
      postMessage({ type:'synth_ok', id:data.id, sr:out.sampling_rate||24000, buf:arr.buffer }, [arr.buffer]);
    } catch(e) { postMessage({ type:'synth_err', id:data.id, msg:e.message }); }
  }
};
`,
  ce = [
    { id: "af_heart", label: "Aria", icon: "●", sub: "Warm US female" },
    { id: "am_michael", label: "Michael", icon: "▼", sub: "Natural US male" },
    { id: "af_bella", label: "Bella", icon: "✦", sub: "Expressive female" },
    { id: "bf_emma", label: "Emma", icon: "◈", sub: "British female" },
    { id: "bm_george", label: "George", icon: "◎", sub: "British male" },
  ],
  Et = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
function un() {
  return new Promise((n, s) => {
    if (window.Tesseract) return n(window.Tesseract);
    if (document.querySelector(`script[src="${Et}"]`)) {
      const c = setInterval(() => {
        window.Tesseract && (clearInterval(c), n(window.Tesseract));
      }, 100);
      return;
    }
    const a = document.createElement("script");
    ((a.src = Et),
      (a.onload = () => n(window.Tesseract)),
      (a.onerror = () => s(new Error("Failed to load Tesseract.js"))),
      document.head.appendChild(a));
  });
}
async function dn(n, s, a) {
  const c = await n.createWorker("eng", 1, {
      logger: (x) => {
        x.status === "recognizing text" && a?.(Math.round(x.progress * 100));
      },
    }),
    { data: o } = await c.recognize(s);
  return (await c.terminate(), o.text);
}
async function hn(n, s = 2) {
  const a = n.getViewport({ scale: s }),
    c = document.createElement("canvas");
  return (
    (c.width = a.width),
    (c.height = a.height),
    await n.render({ canvasContext: c.getContext("2d"), viewport: a }).promise,
    c.toDataURL("image/png")
  );
}
const xn = ({ ch: n, cls: s }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: s || "w-5 h-5",
      children: n,
    }),
  P =
    (n) =>
    ({ className: s }) =>
      e.jsx(xn, { ch: n, cls: s }),
  fn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  ),
  St = P(
    e.jsx(e.Fragment, {
      children: e.jsx("polygon", { points: "5 3 19 12 5 21 5 3" }),
    }),
  ),
  pn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("rect", { x: "6", y: "4", width: "4", height: "16" }),
        e.jsx("rect", { x: "14", y: "4", width: "4", height: "16" }),
      ],
    }),
  ),
  Ct = P(
    e.jsx(e.Fragment, {
      children: e.jsx("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
      }),
    }),
  ),
  Pt = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polygon", { points: "5 4 15 12 5 20 5 4" }),
        e.jsx("line", { x1: "19", y1: "5", x2: "19", y2: "19" }),
      ],
    }),
  ),
  mn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polygon", { points: "19 20 9 12 19 4 19 20" }),
        e.jsx("line", { x1: "5", y1: "19", x2: "5", y2: "5" }),
      ],
    }),
  ),
  gn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  ),
  bn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
      ],
    }),
  ),
  wn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  ),
  Tt = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  ),
  It = P(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  ),
  yn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
        e.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }),
      ],
    }),
  ),
  jn = P(
    e.jsx(e.Fragment, {
      children: e.jsx("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
      }),
    }),
  ),
  At = P(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  ),
  Ft = P(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "18 15 12 9 6 15" }),
    }),
  ),
  vn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polyline", { points: "21 8 21 21 3 21 3 8" }),
        e.jsx("rect", { x: "1", y: "3", width: "22", height: "5" }),
        e.jsx("line", { x1: "10", y1: "12", x2: "14", y2: "12" }),
      ],
    }),
  ),
  $t = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
        e.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
        e.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
      ],
    }),
  ),
  Nn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        e.jsx("path", {
          d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41",
        }),
      ],
    }),
  ),
  zn = P(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", {
          d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
        }),
        e.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
        e.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23" }),
        e.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23" }),
      ],
    }),
  ),
  ee = ({ className: n }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: `animate-spin ${n || ""}`,
      children: e.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }),
    });
function kn(n, s) {
  const a = new ArrayBuffer(44 + n.length * 2),
    c = new DataView(a),
    o = (h, p) => [...p].forEach((w, g) => c.setUint8(h + g, w.charCodeAt(0)));
  (o(0, "RIFF"),
    c.setUint32(4, a.byteLength - 8, !0),
    o(8, "WAVE"),
    o(12, "fmt "),
    c.setUint32(16, 16, !0),
    c.setUint16(20, 1, !0),
    c.setUint16(22, 1, !0),
    c.setUint32(24, s, !0),
    c.setUint32(28, s * 2, !0),
    c.setUint16(32, 2, !0),
    c.setUint16(34, 16, !0),
    o(36, "data"),
    c.setUint32(40, n.length * 2, !0));
  let x = 44;
  for (const h of n) {
    const p = Math.max(-1, Math.min(1, h));
    (c.setInt16(x, p < 0 ? p * 32768 : p * 32767, !0), (x += 2));
  }
  return a;
}
function Rn(n) {
  const s = n.reduce((o, x) => o + x.length, 0),
    a = new Float32Array(s);
  let c = 0;
  for (const o of n) (a.set(o, c), (c += o.length));
  return a;
}
function Dt(n, s = 24e3) {
  const a = n.length;
  if (!a) return n;
  for (let g = 0; g < a; g++) {
    const d = n[g];
    Number.isFinite(d) || (n[g] = 0);
  }
  const c = 0.012;
  let o = 0,
    x = a - 1;
  for (; o < a && Math.abs(n[o]) < c;) o++;
  for (; x > o && Math.abs(n[x]) < c;) x--;
  if (x <= o) return n.slice(0, Math.min(a, Math.round(0.04 * s)));
  const h = Math.round(0.01 * s);
  ((o = Math.max(0, o - h)), (x = Math.min(a - 1, x + h)));
  const p = n.slice(o, x + 1),
    w = Math.min(Math.round(0.004 * s), Math.floor(p.length / 2));
  for (let g = 0; g < w; g++) {
    const d = g / w;
    ((p[g] *= d), (p[p.length - 1 - g] *= d));
  }
  return p;
}
function ct(n, s = 24e3) {
  let a = 0;
  const c = n.map((h, p) => {
      const w =
        p < n.length - 1 ? Math.round(((h.pauseMs ?? 120) / 1e3) * s) : 0;
      return ((a += h.audio.length + w), w);
    }),
    o = new Float32Array(a);
  let x = 0;
  return (
    n.forEach((h, p) => {
      (o.set(h.audio, x), (x += h.audio.length + c[p]));
    }),
    o
  );
}
function lt(n, s, a = "audio/wav") {
  const c = n instanceof Blob ? n : new Blob([n], { type: a }),
    o = URL.createObjectURL(c);
  (Object.assign(document.createElement("a"), { href: o, download: s }).click(),
    setTimeout(() => URL.revokeObjectURL(o), 1e4));
}
const _t = "https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js";
function Mn() {
  return new Promise((n, s) => {
    if (window.lamejs) return n(window.lamejs);
    if (document.querySelector(`script[src="${_t}"]`)) {
      const c = setInterval(() => {
        window.lamejs && (clearInterval(c), n(window.lamejs));
      }, 100);
      return;
    }
    const a = document.createElement("script");
    ((a.src = _t),
      (a.onload = () => n(window.lamejs)),
      (a.onerror = () => s(new Error("Failed to load MP3 encoder"))),
      document.head.appendChild(a));
  });
}
async function En(n, s = 24e3, a = 128) {
  const c = await Mn(),
    o = new c.Mp3Encoder(1, s, a),
    x = new Int16Array(n.length);
  for (let g = 0; g < n.length; g++) {
    const d = Math.max(-1, Math.min(1, n[g]));
    x[g] = d < 0 ? d * 32768 : d * 32767;
  }
  const h = 1152,
    p = [];
  for (let g = 0; g < x.length; g += h) {
    const d = o.encodeBuffer(x.subarray(g, g + h));
    d.length && p.push(new Int8Array(d));
  }
  const w = o.flush();
  return (
    w.length && p.push(new Int8Array(w)),
    new Blob(p, { type: "audio/mpeg" })
  );
}
const it = (n) => {
    if (!n || n < 0) return "0:00";
    const s = Math.floor(n / 1e3);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  },
  ot = (n) =>
    n < 1024
      ? `${n}B`
      : n < 1048576
        ? `${(n / 1024).toFixed(1)}KB`
        : `${(n / 1048576).toFixed(1)}MB`;
async function Sn(n, s = "auto", a) {
  const c = await window.pdfjsLib.getDocument({ data: await n.arrayBuffer() })
      .promise,
    o = [];
  let x = null;
  const h = async () => (
    x || (a?.({ phase: "loading OCR engine", pct: 0 }), (x = await un())),
    x
  );
  for (let p = 1; p <= c.numPages; p++) {
    const w = await c.getPage(p);
    let g = "",
      d = !1;
    s !== "ocr" && (g = await Cn(w));
    const y = (g.match(/[A-Za-z0-9]/g) || []).length;
    if (s === "ocr" || (s !== "text" && y < 16)) {
      a?.({
        phase: `Scanning page ${p}/${c.numPages}`,
        pct: Math.round(((p - 1) / c.numPages) * 100),
      });
      const v = await h(),
        Y = await hn(w, 2);
      ((g = await dn(v, Y, (z) =>
        a?.({
          phase: `OCR p.${p} — ${z}%`,
          pct: Math.round(
            ((p - 1) / c.numPages + z / (100 * c.numPages)) * 100,
          ),
        }),
      )),
        (d = !0));
    }
    o.push({ pageNum: p, raw: (g || "").trim(), ocr: d });
  }
  return Pn(o);
}
function ut(n) {
  const s = n.slice().sort((h, p) => {
    const w = Math.round(h.transform[5] / 3),
      g = Math.round(p.transform[5] / 3);
    return g !== w ? g - w : h.transform[4] - p.transform[4];
  });
  let a = "",
    c = null,
    o = null,
    x = 0;
  for (const h of s) {
    const p = h.transform[4],
      w = h.transform[5],
      g = h.width || 0,
      d = Math.abs(h.transform[3]) || h.height || 10;
    if (((x = x ? x * 0.7 + d * 0.3 : d), c !== null)) {
      const y = Math.abs(w - c);
      y > x * 1.6
        ? (a += `

`)
        : y > x * 0.5
          ? (a += `
`)
          : o !== null && p - o > x * 0.25 && (/\s$/.test(a) || (a += " "));
    }
    ((a += h.str),
      h.hasEOL &&
        (a += `
`),
      (c = w),
      (o = p + g));
  }
  return a;
}
async function Cn(n) {
  const a = (await n.getTextContent()).items.filter(
    (d) => typeof d.str == "string" && d.str.length,
  );
  if (!a.length) return "";
  const c = n.getViewport({ scale: 1 }).width,
    o = c / 2,
    x = c * 0.04;
  let h = 0,
    p = 0,
    w = 0;
  for (const d of a) {
    const y = d.transform[4];
    y + (d.width || 0) < o - x ? h++ : y > o + x ? p++ : w++;
  }
  if (h > a.length * 0.25 && p > a.length * 0.25 && w < a.length * 0.1) {
    const d = (y) => y.transform[4] + (y.width || 0) / 2 < o;
    return (
      ut(a.filter(d)) +
      `

` +
      ut(a.filter((y) => !d(y)))
    );
  }
  return ut(a);
}
function Pn(n) {
  if (n.length < 4) return n;
  const s = (h) =>
      h.replace(/\d+/g, "#").replace(/\s+/g, " ").trim().toLowerCase(),
    a = {},
    c = {};
  n.forEach((h) => {
    const p = h.raw
        .split(
          `
`,
        )
        .map((d) => d.trim())
        .filter(Boolean),
      w = p[0],
      g = p[p.length - 1];
    (w && (a[s(w)] = (a[s(w)] || 0) + 1), g && (c[s(g)] = (c[s(g)] || 0) + 1));
  });
  const o = Math.max(3, Math.ceil(n.length * 0.4)),
    x = (h) => /^(page\s+)?\d+$/i.test(h.trim());
  return n.map((h) => {
    if (h.ocr) return h;
    let p = h.raw.split(`
`);
    for (; p.length;) {
      const w = p[0].trim();
      if (w && (a[s(w)] >= o || x(w))) p = p.slice(1);
      else break;
    }
    for (; p.length;) {
      const w = p[p.length - 1].trim();
      if (w && (c[s(w)] >= o || x(w))) p = p.slice(0, -1);
      else break;
    }
    return {
      ...h,
      raw: p
        .join(
          `
`,
        )
        .trim(),
    };
  });
}
const xe = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ],
  Tn = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ],
  In = ["", " thousand", " million", " billion", " trillion"];
function Fe(n) {
  let s = "";
  const a = Math.floor(n / 100),
    c = n % 100;
  return (
    a && (s += xe[a] + " hundred" + (c ? " " : "")),
    c &&
      (c < 20
        ? (s += xe[c])
        : ((s += Tn[Math.floor(c / 10)]), c % 10 && (s += "-" + xe[c % 10]))),
    s
  );
}
function He(n) {
  let s = parseInt(n, 10);
  if (isNaN(s)) return n;
  if (s === 0) return "zero";
  const a = s < 0;
  s = Math.abs(s);
  const c = [];
  for (; s > 0;) (c.push(s % 1e3), (s = Math.floor(s / 1e3)));
  const o = [];
  for (let x = c.length - 1; x >= 0; x--) c[x] && o.push(Fe(c[x]) + In[x]);
  return (a ? "minus " : "") + o.join(" ");
}
function An(n) {
  const s = parseInt(n, 10);
  if (s >= 1100 && s <= 1999) {
    const a = Math.floor(s / 100),
      c = s % 100;
    return c === 0
      ? Fe(a) + " hundred"
      : Fe(a) + " " + (c < 10 ? "oh " + xe[c] : Fe(c));
  }
  if (s >= 2e3 && s <= 2099) {
    const a = s % 100;
    return a === 0
      ? "two thousand"
      : a < 10
        ? "two thousand " + xe[a]
        : "twenty " + Fe(a);
  }
  return He(n);
}
function Ae(n) {
  const s = String(n).replace(/,/g, "");
  if (/^\d+\.\d+$/.test(s)) {
    const [a, c] = s.split(".");
    return (
      He(a) +
      " point " +
      c
        .split("")
        .map((o) => xe[+o])
        .join(" ")
    );
  }
  return /^\d{4}$/.test(s) ? An(s) : He(s);
}
function Fn(n) {
  const s = parseInt(String(n).replace(/,/g, ""), 10),
    a = {
      one: "first",
      two: "second",
      three: "third",
      five: "fifth",
      eight: "eighth",
      nine: "ninth",
      twelve: "twelfth",
    };
  let c = He(String(s));
  const o = c.match(/([a-z]+)$/);
  if (o) {
    const x = o[1];
    let h;
    (a[x]
      ? (h = a[x])
      : x.endsWith("y")
        ? (h = x.slice(0, -1) + "ieth")
        : (h = x + "th"),
      (c = c.slice(0, o.index) + h));
  }
  return c;
}
const $n = {
  "Mr.": "Mister",
  "Mrs.": "Misses",
  "Ms.": "Miss",
  "Dr.": "Doctor",
  "Prof.": "Professor",
  "St.": "Saint",
  "Mt.": "Mount",
  "vs.": "versus",
  "etc.": "et cetera",
  "e.g.": "for example",
  "i.e.": "that is",
  "approx.": "approximately",
  "dept.": "department",
  "Inc.": "Incorporated",
  "Ltd.": "Limited",
  "Corp.": "Corporation",
  "Co.": "Company",
  "Jr.": "Junior",
  "Sr.": "Senior",
  "No.": "number",
  "Fig.": "Figure",
  "Eq.": "Equation",
  "Vol.": "Volume",
  "pp.": "pages",
};
function Dn(n) {
  let s = n.replace(/\r/g, "");
  ((s = s.replace(/([A-Za-z])-[ \t]*\n[ \t]*([a-z])/g, "$1$2")),
    (s = s
      .replace(/[‘’‚‛]/g, "'")
      .replace(/[“”„‟]/g, '"')
      .replace(/[–—―]/g, ", ")
      .replace(/…/g, ". ")
      .replace(/[•▪◦‣·∙]/g, ", ")),
    (s = s
      .replace(/https?:\/\/\S+/gi, " ")
      .replace(/www\.\S+/gi, " ")
      .replace(/\b[\w.+-]+@[\w-]+\.[\w.-]+\b/g, " ")));
  for (const [a, c] of Object.entries($n))
    s = s.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), c);
  return (
    (s = s
      .replace(/&/g, " and ")
      .replace(/%/g, " percent ")
      .replace(/\$\s?([\d,]+(?:\.\d+)?)/g, (a, c) => Ae(c) + " dollars")
      .replace(/£\s?([\d,]+(?:\.\d+)?)/g, (a, c) => Ae(c) + " pounds")
      .replace(/€\s?([\d,]+(?:\.\d+)?)/g, (a, c) => Ae(c) + " euros")
      .replace(/₹\s?([\d,]+(?:\.\d+)?)/g, (a, c) => Ae(c) + " rupees")
      .replace(/#/g, " number ")
      .replace(/[*_~^`<>{}[\]|\\/]/g, " ")),
    (s = s.replace(/\b\d[\d,]*(?:\.\d+)?(st|nd|rd|th)?\b/g, (a, c) => {
      const o = a.replace(/(st|nd|rd|th)$/, ""),
        x = o.replace(/[^\d]/g, "");
      return c
        ? Fn(o)
        : x.length >= 7 && !o.includes(".")
          ? x
              .split("")
              .map((h) => xe[+h])
              .join(" ")
          : Ae(o);
    })),
    (s = s.replace(/(?<!\n)\n(?!\n)/g, " ").replace(
      /\n{2,}/g,
      `
`,
    )),
    (s = s.replace(/[^\x20-\x7E\n]/g, " ")),
    (s = s
      .replace(/[ \t]{2,}/g, " ")
      .replace(/ +([,.;:!?])/g, "$1")
      .replace(/([,.;:!?]){2,}/g, "$1")
      .replace(
        /[ \t]*\n[ \t]*/g,
        `
`,
      )
      .trim()),
    s
  );
}
function _n(n) {
  const s = /[^.!?]*[.!?]+|[^.!?]+$/g,
    a = [];
  let c;
  for (; (c = s.exec(n)) !== null;) {
    const x = c[0].trim();
    x && a.push(x);
  }
  const o = [];
  for (const x of a) {
    const h = o[o.length - 1];
    h && /(^|\s)[A-Z]\.$/.test(h) ? (o[o.length - 1] = h + " " + x) : o.push(x);
  }
  return o;
}
function Ln(n, s) {
  const a = n.split(/(?<=[,;:])\s+/),
    c = [];
  let o = "";
  const x = (h) => {
    h.trim() && c.push(h.trim());
  };
  for (const h of a)
    if ((o + " " + h).trim().length <= s) o = (o ? o + " " : "") + h;
    else if ((x(o), (o = ""), h.length <= s)) o = h;
    else {
      let p = "";
      for (const w of h.split(/\s+/))
        (p + " " + w).trim().length <= s
          ? (p = (p ? p + " " : "") + w)
          : (x(p), (p = w));
      o = p;
    }
  return (x(o), c);
}
function Bn(n, { maxChars: s = 240 } = {}) {
  if (!n) return [];
  const a = n.split(/\n/),
    c = [];
  return (
    a.forEach((o) => {
      const x = o.trim();
      if (!x) return;
      const h = _n(x);
      h.forEach((p, w) => {
        const g = w === h.length - 1,
          d = p.length <= s ? [p] : Ln(p, s);
        d.forEach((y, I) => {
          const v = y.trim();
          if (!v || !/[A-Za-z0-9]/.test(v)) return;
          const z = I === d.length - 1 ? (g ? 360 : 240) : 90;
          c.push({ text: v, pauseMs: z });
        });
      });
    }),
    c
  );
}
function Un(
  n,
  { fftData: s, audioData: a, playPct: c, isPlaying: o, isBuffering: x },
) {
  const h = Math.min(window.devicePixelRatio || 1, 2),
    p = n.getBoundingClientRect(),
    w = p.width,
    g = p.height;
  if (!w || !g) return;
  (n.width !== Math.round(w * h) || n.height !== Math.round(g * h)) &&
    ((n.width = Math.round(w * h)), (n.height = Math.round(g * h)));
  const d = n.getContext("2d");
  (d.clearRect(0, 0, n.width, n.height),
    d.save(),
    d.scale(h, h),
    (d.fillStyle = "#000"),
    d.fillRect(0, 0, w, g),
    (d.strokeStyle = "rgba(255,255,255,0.04)"),
    (d.lineWidth = 1),
    [0.25, 0.5, 0.75].forEach((z) => {
      (d.beginPath(), d.moveTo(0, g * z), d.lineTo(w, g * z), d.stroke());
    }));
  const y = Math.max(55, Math.floor(w / 3)),
    I = Math.max(1.5, (w * 0.75) / y),
    v = (w - y * I) / (y - 1),
    Y = Date.now() / 1e3;
  for (let z = 0; z < y; z++) {
    const ve = z / (y - 1),
      A = z * (I + v);
    let _ = 0.028 + Math.sin(z * 0.85) * 0.01;
    if (x) _ = 0.055 + 0.09 * Math.abs(Math.sin(Y * 3 + z * 0.21));
    else if (s && o) {
      const k = Math.floor((z / y) * s.length * 0.75);
      _ = Math.max(0.028, s[k] / 255);
    } else if (a) {
      const k = Math.floor(ve * a.length),
        C = Math.min(a.length, Math.floor(((z + 1) / y) * a.length));
      let U = 0;
      for (let T = k; T < C; T++) {
        const O = Math.abs(a[T]);
        O > U && (U = O);
      }
      _ = Math.max(0.025, U);
    }
    (Number.isFinite(_) || (_ = 0.028), (_ = Math.min(1, Math.max(0, _))));
    const L = Math.max(2, _ * g * 0.92),
      M = (g - L) / 2,
      le = ve < (c || 0);
    let B;
    if (x) {
      const k = 25 + 35 * Math.abs(Math.sin(Y * 2.5 + z * 0.3));
      B = `rgb(${Math.round(k)},${Math.round(k)},${Math.round(k)})`;
    } else if (le) {
      const k = d.createLinearGradient(0, M, 0, M + L);
      (k.addColorStop(0, "#fff"),
        k.addColorStop(0.4, "#e5e5e5"),
        k.addColorStop(1, "#737373"),
        (B = k));
    } else if (o) {
      const k = d.createLinearGradient(0, M, 0, M + L);
      (k.addColorStop(0, "#525252"), k.addColorStop(1, "#1a1a1a"), (B = k));
    } else if (a) {
      const k = d.createLinearGradient(0, M, 0, M + L);
      (k.addColorStop(0, "#616161"), k.addColorStop(1, "#232323"), (B = k));
    } else B = "#222";
    d.fillStyle = B;
    const F = Math.min(I / 2, 2.5);
    (d.beginPath(),
      d.moveTo(A + F, M),
      d.lineTo(A + I - F, M),
      d.arcTo(A + I, M, A + I, M + F, F),
      d.lineTo(A + I, M + L - F),
      d.arcTo(A + I, M + L, A + I - F, M + L, F),
      d.lineTo(A + F, M + L),
      d.arcTo(A, M + L, A, M + L - F, F),
      d.lineTo(A, M + F),
      d.arcTo(A, M, A + F, M, F),
      d.closePath(),
      d.fill());
  }
  d.fillStyle = "rgba(0,0,0,0.12)";
  for (let z = 0; z < g; z += 3) d.fillRect(0, z, w, 1);
  if (c > 0.005 && c < 0.995) {
    const z = c * w;
    ((d.shadowColor = "#fff"),
      (d.shadowBlur = 18),
      (d.fillStyle = "rgba(255,255,255,0.10)"),
      d.fillRect(z - 6, 0, 12, g),
      (d.shadowBlur = 8),
      (d.fillStyle = "#fff"),
      d.fillRect(z - 0.75, 0, 1.5, g),
      (d.shadowBlur = 0));
  }
  d.restore();
}
const R = {
    PENDING: "pending",
    GEN: "generating",
    READY: "ready",
    ERROR: "error",
  },
  On = 0.6,
  qn = 80;
function Gn(n = 3) {
  const s = new Blob([on], { type: "application/javascript" }),
    a = URL.createObjectURL(s);
  return {
    workers: Array.from({ length: n }, () => ({
      w: new Worker(a, { type: "module" }),
      busy: !1,
    })),
    blobUrl: a,
  };
}
function Wn({ showNotification: n }) {
  const [s, a] = l.useState("idle"),
    [c, o] = l.useState(""),
    [x, h] = l.useState(0),
    [p, w] = l.useState(""),
    g = l.useRef(null),
    d = l.useRef({}),
    [y, I] = l.useState(null),
    [v, Y] = l.useState([]),
    [z, ve] = l.useState(!1),
    [A, _] = l.useState(null),
    [L, M] = l.useState(!1),
    [le, B] = l.useState(null),
    F = l.useRef(null),
    k = l.useRef(null),
    [C, U] = l.useState([]),
    T = l.useRef([]);
  l.useEffect(() => {
    T.current = C;
  }, [C]);
  const [O, $e] = l.useState(!1),
    Z = l.useRef(!1),
    ie = l.useRef(!1),
    Ne = l.useRef(0),
    [N, K] = l.useState("idle"),
    [Ye, fe] = l.useState(0),
    [Ze, pe] = l.useState(0),
    [E, oe] = l.useState(0),
    te = l.useRef(0),
    V = l.useRef(0),
    De = l.useRef(!1),
    $ = l.useRef(null),
    me = l.useRef(null),
    _e = l.useRef(null),
    dt = l.useRef(null),
    Ke = l.useRef(null),
    ht = l.useRef(null),
    xt = l.useRef(null),
    ft = l.useRef(null),
    Lt = l.useRef(null),
    ne = l.useRef(null),
    se = l.useRef(0),
    X = l.useRef(0),
    J = l.useRef(0),
    D = l.useRef([]),
    ge = l.useRef("idle"),
    Le = l.useRef(!1),
    pt = l.useRef(null),
    Be = l.useRef(null),
    be = l.useRef(null),
    [re, Bt] = l.useState(1),
    [we, Ut] = l.useState(1),
    [q, Ot] = l.useState("af_heart"),
    [mt, qt] = l.useState(!1),
    Ue = l.useRef(1),
    Xe = l.useRef(1),
    gt = l.useRef(ce[0]);
  (l.useEffect(() => {
    Ue.current = re;
  }, [re]),
    l.useEffect(() => {
      Xe.current = we;
    }, [we]),
    l.useEffect(() => {
      gt.current = ce.find((t) => t.id === q) || ce[0];
    }, [q]),
    l.useEffect(() => {
      ge.current = N;
    }, [N]));
  const [ue, de] = l.useState(null),
    [ae, Gt] = l.useState("mp3"),
    [Vt, Je] = l.useState(null),
    ze = l.useRef(null),
    Qe = l.useRef(null),
    et = l.useRef(!1),
    [Oe, Wt] = l.useState(!0),
    bt = l.useRef(null),
    tt = l.useMemo(() => C.filter((t) => t.status === R.READY), [C]),
    ke = tt.length,
    Re = C.length,
    nt = l.useMemo(() => C.filter((t) => t.status === R.ERROR).length, [C]),
    st = l.useMemo(
      () => v.reduce((t, r) => t + r.raw.split(/\s+/).length, 0),
      [v],
    ),
    G = l.useMemo(
      () => tt.reduce((t, r) => t + (r.audio.length / r.sampleRate) * 1e3, 0),
      [tt],
    ),
    Ht = l.useMemo(
      () => (v.length ? (st / (130 * re)) * 60 * 1e3 : 0),
      [st, v, re],
    ),
    qe = Re > 0 && ke >= Re - nt && ke > 0,
    Yt = l.useMemo(
      () =>
        v.map((t, r) => {
          const i = C.filter((b) => b.pageIdx === r),
            f = i.filter((b) => b.status === R.READY).length,
            u = i.filter((b) => b.status === R.GEN).length;
          return {
            pi: r,
            total: i.length,
            ready: f,
            gen: u,
            done: f === i.length && i.length > 0,
            active: u > 0,
          };
        }),
      [v, C],
    ),
    wt = l.useCallback(
      (t, r) => {
        ((t.w.onmessage = ({ data: i }) => {
          if (i.type === "dl" && r) {
            i.status === "progress" || i.status === "downloading"
              ? (i.file && o(i.file.split("/").pop()),
                h(Math.round(i.progress || 0)))
              : i.status === "initiate" || i.status === "download"
                ? i.file && o(i.file.split("/").pop())
                : i.status === "loading" && (o("Compiling model…"), h(98));
            return;
          }
          if (i.type === "ready" && r) {
            (a("ready"),
              o(""),
              i.device && w(i.device),
              n?.("Neural TTS ready — tap Generate!"));
            return;
          }
          if (i.type === "init_err" && r) {
            (a("error"), n?.("TTS failed: " + i.msg, "error"));
            return;
          }
          if (i.type === "synth_ok") {
            t.busy = !1;
            const f = d.current[i.id];
            f &&
              (f.resolve({ audio: new Float32Array(i.buf), sampleRate: i.sr }),
              delete d.current[i.id]);
            return;
          }
          if (i.type === "synth_err") {
            t.busy = !1;
            const f = d.current[i.id];
            f && (f.reject(new Error(i.msg)), delete d.current[i.id]);
          }
        }),
          (t.w.onerror = (i) => {
            ((t.busy = !1), console.error("[Worker]", i.message));
          }));
      },
      [n],
    ),
    yt = l.useCallback(
      () => g.current?.workers.find((t) => !t.busy) || null,
      [],
    ),
    Ge = l.useCallback(
      (t, r, i) =>
        new Promise((f, u) => {
          const b = yt();
          if (!b) {
            u(new Error("No free worker"));
            return;
          }
          ((b.busy = !0),
            (d.current[t] = { resolve: f, reject: u }),
            b.w.postMessage({
              type: "synth",
              id: t,
              text: r.slice(0, 600),
              voice: i || gt.current.id,
            }));
        }),
      [yt],
    ),
    Me = l.useCallback(() => {
      (Object.values(d.current).forEach(({ reject: t }) =>
        t(new Error("Stopped")),
      ),
        (d.current = {}),
        g.current?.workers.forEach((t) => {
          t.busy = !1;
        }));
    }, []),
    rt = l.useCallback(() => {
      if (s === "ready" || s === "loading") return;
      (a("loading"),
        o("Starting workers…"),
        h(0),
        g.current &&
          (g.current.workers.forEach((r) => r.w.terminate()),
          URL.revokeObjectURL(g.current.blobUrl),
          (g.current = null)));
      const t = Gn(2);
      ((g.current = t),
        t.workers.forEach((r, i) => {
          (wt(r, i === 0), r.w.postMessage({ type: "init" }));
        }));
    }, [s, wt]);
  l.useEffect(() => {
    rt();
  }, []);
  const ye = l.useCallback(() => {
      ((De.current = !0),
        (ie.current = !0),
        (Z.current = !1),
        Me(),
        clearInterval(ne.current),
        (ne.current = null),
        D.current.forEach((t) => {
          try {
            t.src.stop();
          } catch {}
        }),
        (D.current = []));
      try {
        ze.current?.stop?.();
      } catch {}
      try {
        ft.current?.stop?.();
      } catch {}
      ($.current?.close().catch(() => {}),
        ($.current = null),
        (me.current = null),
        (_e.current = null),
        (dt.current = null),
        (Ke.current = null),
        (ht.current = null),
        (xt.current = null),
        clearInterval(Lt.current),
        cancelAnimationFrame(Be.current),
        (se.current = 0),
        (X.current = 0),
        (J.current = 0),
        K("idle"),
        $e(!1),
        (V.current = 0),
        pe(0));
    }, [Me]),
    jt = l.useCallback(
      async (t) => {
        if (!t || t.type !== "application/pdf") {
          n?.("Please upload a valid PDF.", "error");
          return;
        }
        (ye(), I(t), Y([]), U([]), _(null), B(null), M(!1), ve(!0), oe(0));
        try {
          if (!window.pdfjsLib)
            throw new Error("PDF.js not loaded yet — please retry.");
          const r = await Sn(t, "auto", (u) => B(u));
          if ((B(null), !r.some((u) => u.raw.length > 10)))
            throw new Error(
              "No readable text found — this PDF may be empty or corrupted.",
            );
          M(r.some((u) => u.ocr));
          const i = r.map((u) => ({ ...u, cleaned: Dn(u.raw) }));
          Y(i);
          const f = [];
          (i.forEach((u, b) => {
            Bn(u.cleaned).forEach((m, j) => {
              f.push({
                id: `${b}_${j}`,
                pageIdx: b,
                sentIdx: j,
                text: m.text,
                pauseMs: m.pauseMs,
                status: R.PENDING,
                audio: null,
                sampleRate: 24e3,
              });
            });
          }),
            U(f),
            (Ne.current = 0),
            (Le.current = !0),
            n?.(`${r.length} pages · ${f.length} segments queued.`));
        } catch (r) {
          (_(r.message), n?.(r.message, "error"), B(null));
        } finally {
          ve(!1);
        }
      },
      [ye, n],
    );
  function Zt(t = 24e3) {
    if (!$.current || $.current.state === "closed") {
      const r = new AudioContext({ sampleRate: t }),
        i = r.createBiquadFilter();
      ((i.type = "highpass"), (i.frequency.value = 50), (i.Q.value = 0.7));
      const f = r.createBiquadFilter();
      ((f.type = "highshelf"),
        (f.frequency.value = 5500),
        (f.gain.value = 2.5));
      const u = r.createBiquadFilter();
      ((u.type = "peaking"),
        (u.frequency.value = 7200),
        (u.Q.value = 3),
        (u.gain.value = -2.5));
      const b = r.createGain();
      b.gain.value = Xe.current;
      const m = r.createDynamicsCompressor();
      ((m.threshold.value = -18),
        (m.knee.value = 12),
        (m.ratio.value = 2),
        (m.attack.value = 0.005),
        (m.release.value = 0.25));
      const j = r.createAnalyser();
      ((j.fftSize = 1024),
        (j.smoothingTimeConstant = 0.8),
        (be.current = new Uint8Array(j.frequencyBinCount)),
        i.connect(f),
        f.connect(u),
        u.connect(b),
        b.connect(m),
        m.connect(j),
        j.connect(r.destination),
        (Ke.current = i),
        (dt.current = f),
        (ht.current = u),
        (_e.current = b),
        (xt.current = m),
        (me.current = j),
        ($.current = r));
    }
    return ($.current.state === "suspended" && $.current.resume(), $.current);
  }
  l.useEffect(() => {
    _e.current &&
      $.current &&
      _e.current.gain.setValueAtTime(we, $.current.currentTime);
  }, [we]);
  const vt = l.useRef("af_heart");
  l.useEffect(() => {
    vt.current !== q &&
      ((vt.current = q),
      T.current.length &&
        (D.current.forEach((t) => {
          try {
            t.src.stop();
          } catch {}
        }),
        (D.current = []),
        clearInterval(ne.current),
        (ne.current = null),
        (De.current = !0),
        (ie.current = !0),
        (Z.current = !1),
        Me(),
        U((t) => t.map((r) => ({ ...r, status: R.PENDING, audio: null }))),
        (Ne.current = 0),
        (se.current = 0),
        (X.current = 0),
        (J.current = 0),
        K("idle"),
        fe(0),
        (te.current = 0),
        pe(0),
        (V.current = 0),
        oe(0),
        (Le.current = !0),
        n?.(
          `Switching to ${ce.find((t) => t.id === q)?.label || "voice"} — re-synthesising…`,
        )));
  }, [q, Me, n]);
  const Ee = l.useCallback(
    async (t = 0) => {
      if (Z.current) return;
      if (s !== "ready") {
        n?.("Model not ready yet.", "error");
        return;
      }
      ((Z.current = !0), (ie.current = !1), $e(!0));
      const r = g.current?.workers.length || 2;
      let i = t;
      try {
        for (; i < T.current.length && !ie.current;) {
          const f = [];
          let u = i;
          for (; u < T.current.length && f.length < r && !ie.current;) {
            const m = T.current[u];
            (m && m.status === R.PENDING && f.push({ ...m, scanIdx: u }), u++);
          }
          if (!f.length) {
            i = u;
            continue;
          }
          const b = f.map((m) => m.id);
          (U((m) =>
            m.map((j) => (b.includes(j.id) ? { ...j, status: R.GEN } : j)),
          ),
            (Ne.current = u),
            await Promise.all(
              f.map(async (m) => {
                try {
                  const { audio: j, sampleRate: S } = await Ge(m.id, m.text),
                    W = Dt(j, S);
                  U((H) =>
                    H.map((Ie) =>
                      Ie.id === m.id
                        ? { ...Ie, status: R.READY, audio: W, sampleRate: S }
                        : Ie,
                    ),
                  );
                } catch (j) {
                  if (j.message === "Stopped") return;
                  U((S) =>
                    S.map((W) =>
                      W.id === m.id ? { ...W, status: R.ERROR } : W,
                    ),
                  );
                }
              }),
            ),
            (i = u),
            await new Promise((m) => setTimeout(m, 0)));
        }
      } finally {
        ((Z.current = !1),
          $e(!1),
          ie.current || n?.("All segments synthesised ✓"));
      }
    },
    [s, Ge, n],
  );
  l.useEffect(() => {
    Le.current &&
      s === "ready" &&
      !Z.current &&
      C.some((t) => t.status === R.PENDING) &&
      ((Le.current = !1), Ee(0));
  }, [C, s, Ee]);
  const Nt = (t) => {
      const r = T.current;
      let i = 0;
      for (let f = 0; f < t && f < r.length; f++) {
        const u = r[f];
        u.status === R.READY &&
          u.audio &&
          (i += (u.audio.length / u.sampleRate) * 1e3 + (u.pauseMs ?? 120));
      }
      return i;
    },
    zt = l.useCallback(() => {
      (clearInterval(ne.current),
        (ne.current = null),
        (D.current = []),
        (se.current = 0),
        (X.current = 0),
        (J.current = 0),
        K("idle"),
        fe(0),
        (te.current = 0),
        oe(0),
        pe(0),
        (V.current = 0),
        n?.("Playback complete ✓"));
    }, [n]),
    at = l.useCallback(() => {
      const t = $.current;
      if (!t || t.state !== "running" || De.current) return;
      const r = T.current,
        i = t.currentTime;
      for (
        D.current = D.current.filter((f) => f.tEnd > i - 1);
        X.current <= i + On;
      ) {
        let f = se.current;
        for (; f < r.length && r[f]?.status === R.ERROR;) f++;
        if (((se.current = f), f >= r.length)) {
          const an = D.current.reduce((cn, ln) => Math.max(cn, ln.tEnd), 0);
          !Z.current && i >= an && zt();
          return;
        }
        const u = r[f];
        if (u.status !== R.READY || !u.audio) {
          i + 0.05 >= X.current &&
            ge.current !== "buffering" &&
            (K("buffering"), fe(f), (te.current = f), oe(u?.pageIdx ?? 0));
          return;
        }
        const b = u.sampleRate || 24e3,
          m = Math.max(X.current, i + 0.04),
          j = t.createBuffer(1, u.audio.length, b);
        j.copyToChannel(u.audio, 0);
        const S = t.createBufferSource();
        ((S.buffer = j),
          (S.playbackRate.value = Ue.current),
          S.connect(Ke.current),
          S.start(m),
          (ft.current = S));
        const W = Ue.current,
          H = u.audio.length / b,
          Ie = (u.pauseMs ?? 120) / 1e3 / Ue.current,
          Mt = m + H / W + Ie;
        (D.current.push({
          idx: f,
          pageIdx: u.pageIdx,
          src: S,
          tStart: m,
          tEnd: Mt,
          effRate: W,
          audioDurSec: H,
          contentStartMs: J.current,
        }),
          (J.current += H * 1e3 + (u.pauseMs ?? 120)),
          (X.current = Mt),
          (se.current = f + 1),
          ge.current !== "playing" && K("playing"));
      }
    }, [zt]),
    Se = l.useCallback(() => {
      ne.current || (at(), (ne.current = setInterval(at, qn)));
    }, [at]),
    Ce = l.useCallback(() => {
      if (N === "playing") return;
      De.current = !1;
      const t = Zt(24e3);
      if ((t.resume?.(), N === "paused" || N === "buffering")) {
        (K("playing"), Se());
        return;
      }
      const r = Math.max(0, te.current || 0);
      (D.current.forEach((i) => {
        try {
          i.src.stop();
        } catch {}
      }),
        (D.current = []),
        (se.current = r),
        (J.current = Nt(r)),
        (V.current = J.current),
        pe(V.current),
        (X.current = t.currentTime + 0.08),
        K("playing"),
        Se(),
        !Z.current && s === "ready" && Ee(Ne.current));
    }, [N, s, Ee, Se]),
    he = l.useCallback(() => {
      N === "playing" && ($.current?.suspend?.(), K("paused"));
    }, [N]),
    Pe = l.useCallback(() => {
      (ye(), fe(0), (te.current = 0), oe(0));
    }, [ye]),
    Te = l.useCallback(
      (t) => {
        const r = T.current;
        if (!r.length) return;
        const i = Math.max(0, Math.min(r.length - 1, t)),
          f = r[i]?.pageIdx ?? 0,
          u = ge.current === "playing" || ge.current === "buffering";
        (D.current.forEach((m) => {
          try {
            m.src.stop();
          } catch {}
        }),
          (D.current = []),
          (se.current = i),
          (J.current = Nt(i)),
          (V.current = J.current),
          pe(V.current),
          fe(i),
          (te.current = i),
          oe(f));
        const b = $.current;
        b &&
          u &&
          (b.resume?.(),
          (X.current = b.currentTime + 0.06),
          K("playing"),
          Se());
      },
      [Se],
    ),
    Q = l.useCallback(
      (t) => {
        const r = T.current.findIndex((i) => i.pageIdx === t);
        r !== -1 && Te(r);
      },
      [Te],
    ),
    Ve = l.useCallback(
      (t) => {
        const r = T.current;
        if (!r.length) return;
        const i = Math.max(0, t);
        let f = 0,
          u = 0;
        for (let b = 0; b < r.length; b++) {
          const m = r[b];
          if (m.status !== R.READY || !m.audio) {
            u = b;
            break;
          }
          const j = (m.audio.length / m.sampleRate) * 1e3 + (m.pauseMs ?? 120);
          if (f + j > i) {
            u = b;
            break;
          }
          ((f += j), (u = b + 1));
        }
        Te(Math.min(u, r.length - 1));
      },
      [Te],
    ),
    We = l.useCallback((t) => Ve(V.current + t * 1e3), [Ve]),
    Kt =
      "Hi, this is how I sound reading your document. Clear, natural, and easy to follow.",
    Xt = l.useCallback(
      async (t) => {
        if (s === "ready") {
          ge.current === "playing" && he();
          try {
            ze.current?.stop();
          } catch {}
          Je(t);
          try {
            const { audio: r, sampleRate: i } = await Ge(
                "preview_" + t + "_" + Date.now(),
                Kt,
                t,
              ),
              f = Dt(r, i);
            let u = Qe.current;
            ((!u || u.state === "closed") &&
              ((u = new AudioContext()), (Qe.current = u)),
              u.resume?.());
            try {
              ze.current?.stop();
            } catch {}
            const b = u.createBuffer(1, f.length, i);
            b.copyToChannel(f, 0);
            const m = u.createBufferSource();
            m.buffer = b;
            const j = u.createGain();
            ((j.gain.value = Xe.current),
              m.connect(j),
              j.connect(u.destination),
              (m.onended = () => Je((S) => (S === t ? null : S))),
              (ze.current = m),
              m.start());
          } catch {
            (Je(null), n?.("Preview unavailable — workers busy.", "error"));
          }
        }
      },
      [s, Ge, n, he],
    );
  (l.useEffect(() => {
    const t = (r) => {
      if (!(
        ["INPUT", "TEXTAREA"].includes(r.target.tagName) ||
        r.target.isContentEditable
      )) {
        if (
          ((r.key === " " || r.code === "Space") &&
            (r.preventDefault(), N === "playing" ? he() : Ce()),
          r.key === "ArrowRight")
        ) {
          r.preventDefault();
          const i = Math.min(v.length - 1, E + 1);
          i !== E && Q(i);
        }
        if (r.key === "ArrowLeft") {
          r.preventDefault();
          const i = Math.max(0, E - 1);
          i !== E && Q(i);
        }
        r.key === "Escape" && (r.preventDefault(), Pe());
      }
    };
    return (
      window.addEventListener("keydown", t),
      () => window.removeEventListener("keydown", t)
    );
  }, [N, he, Ce, Pe, Q, v.length, E]),
    l.useEffect(() => {
      if (!("mediaSession" in navigator)) return;
      if (!y) {
        navigator.mediaSession.metadata = null;
        return;
      }
      try {
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: (y.name || "Document").replace(/\.pdf$/i, ""),
          artist:
            (ce.find((r) => r.id === q)?.label || "Narrator") +
            " · PDF to Audio",
          album: v.length ? `Page ${E + 1} of ${v.length}` : "",
        });
      } catch {}
      navigator.mediaSession.playbackState =
        N === "playing" ? "playing" : N === "paused" ? "paused" : "none";
      const t = (r, i) => {
        try {
          navigator.mediaSession.setActionHandler(r, i);
        } catch {}
      };
      (t("play", () => Ce()),
        t("pause", () => he()),
        t("stop", () => Pe()),
        t("previoustrack", () => Q(Math.max(0, E - 1))),
        t("nexttrack", () => Q(Math.min(v.length - 1, E + 1))),
        t("seekbackward", () => We(-15)),
        t("seekforward", () => We(15)));
    }, [y, q, N, E, v.length, Ce, he, Pe, Q, We]),
    l.useEffect(() => {
      Oe &&
        N === "playing" &&
        bt.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }, [Ye, Oe, N]),
    l.useEffect(() => {
      const t = () => {
        Be.current = requestAnimationFrame(t);
        const r = pt.current;
        if (!r) return;
        if ($.current && N === "playing") {
          const b = $.current.currentTime,
            m = D.current.find((j) => b >= j.tStart && b < j.tEnd);
          if (m) {
            m.idx !== te.current &&
              ((te.current = m.idx), fe(m.idx), oe(m.pageIdx));
            const j = Math.min(
                m.audioDurSec,
                Math.max(0, b - m.tStart) * m.effRate,
              ),
              S = m.contentStartMs + j * 1e3;
            Math.abs(S - V.current) > 60 && ((V.current = S), pe(S));
          }
        }
        let i = null;
        me.current &&
          (N === "playing" || N === "buffering") &&
          ((!be.current ||
            be.current.length !== me.current.frequencyBinCount) &&
            (be.current = new Uint8Array(me.current.frequencyBinCount)),
          me.current.getByteFrequencyData(be.current),
          (i = be.current));
        const f = T.current.filter(
            (b) => b.pageIdx === E && b.status === R.READY,
          ),
          u = f.length > 0 ? Rn(f.map((b) => b.audio)) : null;
        Un(r, {
          fftData: i,
          audioData: u,
          playPct: G > 0 ? Math.min(1, Ze / G) : 0,
          isPlaying: N === "playing",
          isBuffering: N === "buffering",
        });
      };
      return (
        (Be.current = requestAnimationFrame(t)),
        () => cancelAnimationFrame(Be.current)
      );
    }, [N, E, Ze, G]));
  const je = l.useCallback(
      async (t, r) => {
        if (ae === "mp3") {
          const f = await En(t, r);
          return { data: f, ext: "mp3", size: f.size };
        }
        const i = kn(t, r);
        return { data: i, ext: "wav", size: i.byteLength };
      },
      [ae],
    ),
    Jt = l.useCallback(
      async (t = E) => {
        const r = T.current.filter(
          (m) => m.pageIdx === t && m.status === R.READY,
        );
        if (!r.length) {
          n?.("No audio for this page yet.", "error");
          return;
        }
        de({ cur: 0, total: 1, label: "Encoding…" });
        const i = ct(
            r.map((m) => ({ audio: m.audio, pauseMs: m.pauseMs })),
            r[0].sampleRate,
          ),
          { data: f, ext: u, size: b } = await je(i, r[0].sampleRate);
        (de(null),
          lt(
            f,
            `${(y?.name || "doc").replace(/\.pdf$/i, "")}_page${t + 1}.${u}`,
          ),
          n?.(`Page ${t + 1} exported (${ot(b)})`));
      },
      [E, y, n, je],
    ),
    Qt = l.useCallback(async () => {
      const t = T.current.filter((b) => b.status === R.READY);
      if (!t.length) {
        n?.("Generate audio first.", "error");
        return;
      }
      de({ cur: 0, total: 1, label: "Encoding…" });
      const r = ct(
          t.map((b) => ({ audio: b.audio, pauseMs: b.pauseMs })),
          t[0].sampleRate,
        ),
        { data: i, ext: f, size: u } = await je(r, t[0].sampleRate);
      (lt(i, `${(y?.name || "doc").replace(/\.pdf$/i, "")}_full.${f}`),
        de(null),
        n?.(`Exported (${ot(u)})`));
    }, [y, n, je]),
    en = l.useCallback(async () => {
      if (!window.JSZip) {
        n?.("JSZip not loaded.", "error");
        return;
      }
      const t = v
        .map((u, b) => ({
          pi: b,
          cs: T.current.filter((m) => m.pageIdx === b && m.status === R.READY),
        }))
        .filter((u) => u.cs.length);
      if (!t.length) {
        n?.("Generate audio first.", "error");
        return;
      }
      de({ cur: 0, total: t.length, label: "Building ZIP…" });
      const r = new window.JSZip(),
        i = (y?.name || "doc").replace(/\.pdf$/i, "");
      for (let u = 0; u < t.length; u++) {
        const { pi: b, cs: m } = t[u],
          j = ct(
            m.map((H) => ({ audio: H.audio, pauseMs: H.pauseMs })),
            m[0].sampleRate,
          ),
          { data: S, ext: W } = await je(j, m[0].sampleRate);
        (r.file(`${i}_page${b + 1}.${W}`, S),
          de({ cur: u + 1, total: t.length, label: `Packing page ${b + 1}…` }),
          await new Promise((H) => setTimeout(H, 0)));
      }
      const f = await r.generateAsync({ type: "blob", compression: "STORE" });
      (lt(f, `${i}_audio_${ae}.zip`, "application/zip"),
        de(null),
        n?.(`ZIP: ${t.length} files (${ot(f.size)})`));
    }, [v, y, n, je, ae]);
  l.useEffect(
    () => () => {
      ye();
      try {
        ze.current?.stop();
      } catch {}
      (Qe.current?.close().catch(() => {}),
        g.current &&
          (g.current.workers.forEach((t) => t.w.terminate()),
          URL.revokeObjectURL(g.current.blobUrl)));
    },
    [],
  );
  const tn = s === "ready" && C.some((t) => t.status === R.PENDING) && !O,
    nn = C.some((t) => t.status === R.READY) && N !== "playing",
    sn = C.some((t) => t.status === R.READY),
    rn = Re > 0 ? ke / Re : 0,
    kt = C[Ye]?.text || v[E]?.cleaned?.slice(0, 200) || "",
    Rt = ce.find((t) => t.id === q) || ce[0];
  return e.jsxs("div", {
    className: "max-w-2xl mx-auto pb-16 space-y-3 px-0",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between gap-3 pt-1",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className:
                  "w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0",
                children: e.jsx(zn, { className: "w-5 h-5 text-black" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h2", {
                    className: "text-base font-bold text-white leading-none",
                    children: "PDF to Audio",
                  }),
                  e.jsx("p", {
                    className: "text-zinc-400 text-[11px] mt-0.5",
                    children:
                      "Kokoro 24 kHz · studio quality · seamless playback",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-shrink-0",
            children: [
              s === "idle" &&
                e.jsx("button", {
                  onClick: rt,
                  className:
                    "text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors touch-manipulation",
                  children: "Load model",
                }),
              s === "loading" &&
                e.jsxs("span", {
                  className:
                    "flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300",
                  children: [
                    e.jsx(ee, { className: "w-3 h-3" }),
                    "Init ",
                    x,
                    "%",
                  ],
                }),
              s === "ready" &&
                e.jsxs("span", {
                  className:
                    "flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-white",
                  children: [
                    e.jsx("span", {
                      className:
                        "w-1.5 h-1.5 rounded-full bg-white inline-block",
                    }),
                    "Ready",
                  ],
                }),
              s === "error" &&
                e.jsx("button", {
                  onClick: rt,
                  className:
                    "text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors touch-manipulation",
                  children: "Retry",
                }),
            ],
          }),
        ],
      }),
      s === "loading" &&
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex justify-between items-center text-xs",
              children: [
                e.jsxs("span", {
                  className: "flex items-center gap-2 text-zinc-300",
                  children: [
                    e.jsx(ee, { className: "w-3.5 h-3.5" }),
                    c || "Downloading model…",
                  ],
                }),
                e.jsxs("span", {
                  className: "font-mono text-white font-semibold",
                  children: [x, "%"],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "relative h-1.5 bg-zinc-800 rounded-full overflow-hidden",
              children: e.jsx("div", {
                className:
                  "absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-500",
                style: { width: `${x}%` },
              }),
            }),
            e.jsx("p", {
              className: "text-[10px] text-zinc-500",
              children:
                "Kokoro-82M (~86 MB, quantised) · cached after first download",
            }),
          ],
        }),
      !y &&
        e.jsx("div", {
          className: "space-y-2",
          children: e.jsxs("div", {
            ref: k,
            onClick: () => F.current?.click(),
            onDrop: (t) => {
              (t.preventDefault(), jt(t.dataTransfer.files[0]));
            },
            onDragOver: (t) => t.preventDefault(),
            onDragEnter: (t) => {
              (t.preventDefault(), k.current?.classList.add("border-zinc-500"));
            },
            onDragLeave: () => k.current?.classList.remove("border-zinc-500"),
            className:
              "border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-900/50 rounded-2xl p-10 sm:p-14 text-center cursor-pointer transition-all duration-200 group active:scale-[0.99] touch-manipulation",
            children: [
              e.jsx("div", {
                className:
                  "w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-700 transition-all",
                children: e.jsx(fn, {
                  className:
                    "w-6 h-6 text-zinc-300 group-hover:text-white transition-colors",
                }),
              }),
              e.jsx("p", {
                className: "text-white font-semibold text-sm mb-1.5",
                children: "Drop a PDF or tap to upload",
              }),
              e.jsx("p", {
                className:
                  "text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto",
                children:
                  "All PDFs supported — text-based and scanned documents.",
              }),
              " ",
              e.jsx("input", {
                ref: F,
                type: "file",
                accept: "application/pdf",
                className: "hidden",
                onChange: (t) => {
                  (jt(t.target.files[0]), (t.target.value = ""));
                },
              }),
            ],
          }),
        }),
      z &&
        le &&
        e.jsxs("div", {
          className:
            "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between text-xs",
              children: [
                e.jsxs("span", {
                  className: "flex items-center gap-2 text-zinc-300",
                  children: [
                    e.jsx(ee, { className: "w-3.5 h-3.5" }),
                    "Tesseract OCR — ",
                    le.phase,
                  ],
                }),
                e.jsxs("span", {
                  className: "font-mono text-white font-semibold",
                  children: [le.pct, "%"],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "relative h-1.5 bg-zinc-800 rounded-full overflow-hidden",
              children: e.jsx("div", {
                className:
                  "absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-300",
                style: { width: `${le.pct}%` },
              }),
            }),
          ],
        }),
      z &&
        !le &&
        e.jsxs("div", {
          className:
            "flex items-center justify-center gap-3 py-10 text-zinc-400",
          children: [
            e.jsx(ee, { className: "w-5 h-5" }),
            e.jsx("span", {
              className: "text-sm",
              children: "Reading PDF pages…",
            }),
          ],
        }),
      A &&
        e.jsxs("div", {
          className:
            "flex items-start gap-3 p-4 bg-zinc-900 border border-zinc-700 rounded-2xl",
          children: [
            e.jsx(Tt, {
              className: "w-4 h-4 flex-shrink-0 mt-0.5 text-zinc-400",
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-sm font-medium text-white",
                  children: "Extraction failed",
                }),
                e.jsx("p", {
                  className: "text-zinc-400 text-xs mt-0.5",
                  children: A,
                }),
                e.jsx("button", {
                  onClick: () => {
                    (I(null), _(null));
                  },
                  className:
                    "mt-2 text-xs text-zinc-400 hover:text-white underline touch-manipulation",
                  children: "Try another file",
                }),
              ],
            }),
          ],
        }),
      v.length > 0 &&
        !z &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between gap-3 bg-zinc-900 border border-zinc-700 rounded-2xl px-4 py-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0",
                      children: e.jsx(bn, {
                        className: "w-3.5 h-3.5 text-zinc-300",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-white truncate",
                          children: y?.name,
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-zinc-400",
                          children: [
                            v.length,
                            " pages · ",
                            st.toLocaleString(),
                            " words",
                            G > 0 && ` · ~${it(G / re)}`,
                            L &&
                              e.jsx("span", {
                                className:
                                  "ml-1.5 text-[10px] bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded font-mono",
                                children: "OCR",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  "aria-label": "Close",
                  onClick: () => {
                    (ye(), I(null), Y([]), U([]), _(null));
                  },
                  className:
                    "p-2 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded-xl transition-colors flex-shrink-0 touch-manipulation",
                  children: e.jsx(wn, { className: "w-4 h-4" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-black rounded-2xl overflow-hidden border border-zinc-800",
              children: [
                e.jsx("canvas", {
                  ref: pt,
                  onPointerDown: (t) => {
                    if (!G) return;
                    (t.currentTarget.setPointerCapture?.(t.pointerId),
                      (et.current = !0));
                    const r = t.currentTarget.getBoundingClientRect();
                    Ve(
                      Math.min(1, Math.max(0, (t.clientX - r.left) / r.width)) *
                        G,
                    );
                  },
                  onPointerMove: (t) => {
                    if (!et.current || !G) return;
                    const r = t.currentTarget.getBoundingClientRect();
                    Ve(
                      Math.min(1, Math.max(0, (t.clientX - r.left) / r.width)) *
                        G,
                    );
                  },
                  onPointerUp: () => {
                    et.current = !1;
                  },
                  className:
                    "w-full h-28 sm:h-36 block cursor-pointer touch-none",
                  title: "Click or drag to seek",
                }),
                e.jsxs("div", {
                  className:
                    "flex justify-between items-center px-4 py-2 border-t border-zinc-900",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-mono text-zinc-400",
                      children: it(Ze),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[10px] text-zinc-600 tracking-widest uppercase",
                      children:
                        N === "playing"
                          ? "▶ playing"
                          : N === "paused"
                            ? "⏸ paused"
                            : N === "buffering"
                              ? "⌛ buffering"
                              : "",
                    }),
                    e.jsx("span", {
                      className: "text-xs font-mono text-zinc-400",
                      children: it(G > 0 ? G : Ht),
                    }),
                  ],
                }),
                v.length > 1 &&
                  e.jsx("div", {
                    className: "flex justify-center pt-3 pb-1",
                    children: e.jsxs("div", {
                      className:
                        "flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800",
                      children: [
                        e.jsx("button", {
                          "aria-label": "Rewind",
                          onClick: () => Q(Math.max(0, E - 1)),
                          disabled: E === 0,
                          className:
                            "text-zinc-500 hover:text-white disabled:opacity-20 transition-colors touch-manipulation p-0.5",
                          children: e.jsx(mn, { className: "w-3 h-3" }),
                        }),
                        e.jsxs("span", {
                          className:
                            "text-[11px] font-mono text-zinc-400 tabular-nums min-w-[3rem] text-center",
                          children: [E + 1, " / ", v.length],
                        }),
                        e.jsx("button", {
                          "aria-label": "Forward",
                          onClick: () => Q(Math.min(v.length - 1, E + 1)),
                          disabled: E >= v.length - 1,
                          className:
                            "text-zinc-500 hover:text-white disabled:opacity-20 transition-colors touch-manipulation p-0.5",
                          children: e.jsx(Pt, { className: "w-3 h-3" }),
                        }),
                      ],
                    }),
                  }),
                e.jsxs("div", {
                  className:
                    "flex items-center justify-center gap-4 px-4 pb-5 pt-3",
                  children: [
                    e.jsx("button", {
                      "aria-label": "Stop",
                      onClick: Pe,
                      disabled: N === "idle",
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-95",
                      children: e.jsx(Ct, { className: "w-3.5 h-3.5" }),
                    }),
                    N === "playing"
                      ? e.jsx("button", {
                          "aria-label": "Pause",
                          onClick: he,
                          className:
                            "w-[4.5rem] h-[4.5rem] rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.18)] transition-all active:scale-95 flex-shrink-0 touch-manipulation",
                          children: e.jsx(pn, { className: "w-6 h-6" }),
                        })
                      : N === "buffering"
                        ? e.jsx("button", {
                            "aria-label": "Refresh",
                            disabled: !0,
                            className:
                              "w-[4.5rem] h-[4.5rem] rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 flex items-center justify-center flex-shrink-0 cursor-not-allowed",
                            children: e.jsx(ee, { className: "w-6 h-6" }),
                          })
                        : e.jsx("button", {
                            "aria-label": "Play",
                            onClick: Ce,
                            disabled: !nn && !O,
                            className:
                              "w-[4.5rem] h-[4.5rem] rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.18)] disabled:bg-zinc-800 disabled:border disabled:border-zinc-700 disabled:text-zinc-600 disabled:shadow-none transition-all active:scale-95 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation",
                            children: e.jsx(St, { className: "w-6 h-6 ml-1" }),
                          }),
                    e.jsx("button", {
                      "aria-label": "Forward 15 seconds",
                      onClick: () => We(15),
                      disabled: N === "idle",
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-95",
                      children: e.jsx(Pt, { className: "w-3.5 h-3.5" }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex justify-center pb-1 sm:hidden",
                  children: e.jsxs("span", {
                    className: "text-xs font-mono text-zinc-500",
                    children: ["Page ", E + 1, " / ", v.length],
                  }),
                }),
                kt &&
                  e.jsx("div", {
                    className:
                      "mx-4 mb-4 px-3 py-2.5 bg-zinc-950 rounded-xl border border-zinc-800 min-h-[2.5rem]",
                    children: e.jsx("p", {
                      className:
                        "text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2",
                      children: kt,
                    }),
                  }),
              ],
            }),
            C.length > 0 &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden",
                children: [
                  e.jsxs("button", {
                    onClick: () => Wt((t) => !t),
                    className:
                      "w-full flex items-center justify-between px-4 py-4 hover:bg-zinc-800/50 transition-colors touch-manipulation",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                          e.jsx($t, { className: "w-4 h-4 text-zinc-400" }),
                          e.jsx("span", {
                            className: "text-sm font-semibold text-white",
                            children: "Transcript",
                          }),
                          e.jsx("span", {
                            className: "text-xs text-zinc-400 hidden sm:inline",
                            children: "tap a line to jump",
                          }),
                        ],
                      }),
                      Oe
                        ? e.jsx(Ft, { className: "w-4 h-4 text-zinc-400" })
                        : e.jsx(At, { className: "w-4 h-4 text-zinc-400" }),
                    ],
                  }),
                  Oe &&
                    e.jsx("div", {
                      className:
                        "max-h-72 overflow-y-auto px-3 pb-3 space-y-0.5 border-t border-zinc-700/50",
                      children: C.map((t, r) => {
                        const i = r === Ye;
                        return e.jsx(
                          "p",
                          {
                            ref: i ? bt : null,
                            onClick: () => Te(r),
                            className: `px-3 py-2 rounded-lg text-xs sm:text-sm leading-relaxed cursor-pointer transition-colors ${i ? "bg-white text-black font-medium" : t.status === R.ERROR ? "text-zinc-600 line-through hover:bg-zinc-800" : t.status === R.READY ? "text-zinc-300 hover:bg-zinc-800" : "text-zinc-500 hover:bg-zinc-800"}`,
                            children: t.text,
                          },
                          t.id,
                        );
                      }),
                    }),
                ],
              }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between gap-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        e.jsx("span", {
                          className: "text-sm font-semibold text-white",
                          children: "Synthesis",
                        }),
                        O &&
                          e.jsxs("span", {
                            className:
                              "text-xs text-zinc-400 flex items-center gap-1.5",
                            children: [
                              e.jsx(ee, { className: "w-3 h-3" }),
                              "Synthesising",
                            ],
                          }),
                        qe &&
                          !O &&
                          e.jsxs("span", {
                            className:
                              "flex items-center gap-1 text-xs text-white font-medium",
                            children: [
                              e.jsx(It, { className: "w-3.5 h-3.5" }),
                              "Complete",
                            ],
                          }),
                        nt > 0 &&
                          e.jsxs("span", {
                            className:
                              "text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-600",
                            children: [nt, " errors"],
                          }),
                      ],
                    }),
                    e.jsxs("span", {
                      className:
                        "text-xs font-mono text-zinc-300 font-semibold",
                      children: [ke, "/", Re],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "relative h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className: `absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${qe ? "bg-white" : "bg-zinc-300"}`,
                      style: { width: `${rn * 100}%` },
                    }),
                    O &&
                      !qe &&
                      e.jsx("div", {
                        className:
                          "absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent animate-pulse",
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2 flex-wrap",
                  children: [
                    qe && !O
                      ? e.jsxs("span", {
                          className:
                            "flex items-center gap-1.5 text-xs text-zinc-400 px-3 py-2",
                          children: [
                            e.jsx(It, { className: "w-3.5 h-3.5 text-white" }),
                            "All audio ready",
                          ],
                        })
                      : e.jsx("button", {
                          onClick: () => Ee(Ne.current),
                          disabled: !tn,
                          className:
                            "flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-95",
                          children: O
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(ee, { className: "w-4 h-4" }),
                                  "Synthesising…",
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(jn, { className: "w-4 h-4" }),
                                  ke > 0 ? "Continue" : "Generate All",
                                ],
                              }),
                        }),
                    O &&
                      e.jsxs("button", {
                        onClick: () => {
                          ((ie.current = !0), (Z.current = !1), Me(), $e(!1));
                        },
                        className:
                          "flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl bg-zinc-800 border border-zinc-600 text-zinc-200 hover:text-white hover:bg-zinc-700 transition-all touch-manipulation active:scale-95",
                        children: [
                          e.jsx(Ct, { className: "w-4 h-4" }),
                          "Pause",
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden",
              children: [
                e.jsxs("button", {
                  onClick: () => qt((t) => !t),
                  className:
                    "w-full flex items-center justify-between px-4 py-4 hover:bg-zinc-800/50 transition-colors touch-manipulation",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        e.jsx(Nn, { className: "w-4 h-4 text-zinc-400" }),
                        e.jsx("span", {
                          className: "text-sm font-semibold text-white",
                          children: "Voice & Playback",
                        }),
                        e.jsxs("span", {
                          className: "text-xs text-zinc-400 hidden sm:inline",
                          children: [
                            Rt.icon,
                            " ",
                            Rt.label,
                            " · ",
                            re.toFixed(1),
                            "×",
                          ],
                        }),
                      ],
                    }),
                    mt
                      ? e.jsx(Ft, { className: "w-4 h-4 text-zinc-400" })
                      : e.jsx(At, { className: "w-4 h-4 text-zinc-400" }),
                  ],
                }),
                mt &&
                  e.jsxs("div", {
                    className:
                      "px-4 pb-5 space-y-6 border-t border-zinc-700/50",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-3 pt-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-xs font-bold text-zinc-300 uppercase tracking-widest",
                                children: "Voice Character",
                              }),
                              e.jsx("span", {
                                className: "text-[11px] text-zinc-500",
                                children: "Switching re-synthesises",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "flex gap-2 overflow-x-auto pb-1 sm:grid sm:grid-cols-5 sm:overflow-visible",
                            children: ce.map((t) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "relative flex-shrink-0 w-24 sm:w-auto",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => Ot(t.id),
                                      className: `w-full flex flex-col items-center gap-1.5 px-2 py-3 rounded-xl font-medium transition-all touch-manipulation active:scale-95
                        ${q === t.id ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700 hover:border-zinc-600"}`,
                                      children: [
                                        e.jsx("span", {
                                          className: "text-lg leading-none",
                                          children: t.icon,
                                        }),
                                        e.jsxs("div", {
                                          className: "text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[11px] font-bold leading-none",
                                              children: t.label,
                                            }),
                                            e.jsx("div", {
                                              className: `text-[10px] leading-tight mt-0.5 ${q === t.id ? "text-zinc-600" : "text-zinc-500"}`,
                                              children: t.sub,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("button", {
                                      "aria-label": `Preview ${t.label} voice`,
                                      title: `Preview ${t.label}`,
                                      onClick: (r) => {
                                        (r.stopPropagation(), Xt(t.id));
                                      },
                                      disabled: s !== "ready",
                                      className:
                                        "absolute top-1 right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 disabled:opacity-30 transition-colors touch-manipulation",
                                      children:
                                        Vt === t.id
                                          ? e.jsx(ee, { className: "w-3 h-3" })
                                          : e.jsx(St, {
                                              className: "w-2.5 h-2.5 ml-px",
                                            }),
                                    }),
                                  ],
                                },
                                t.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-xs font-bold text-zinc-300 uppercase tracking-widest",
                                children: "Playback Speed",
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-sm font-mono text-white font-semibold",
                                children: [re.toFixed(1), "×"],
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "range",
                            min: "0.5",
                            max: "2",
                            step: "0.1",
                            value: re,
                            onChange: (t) => Bt(parseFloat(t.target.value)),
                            className:
                              "w-full h-1.5 accent-white cursor-pointer rounded-full",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex justify-between text-[10px] text-zinc-500",
                            children: [
                              e.jsx("span", { children: "0.5× slow" }),
                              e.jsx("span", { children: "1× normal" }),
                              e.jsx("span", { children: "2× fast" }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              e.jsxs("label", {
                                className:
                                  "text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center gap-1.5",
                                children: [
                                  e.jsx(yn, { className: "w-3.5 h-3.5" }),
                                  "Volume",
                                ],
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-sm font-mono text-white font-semibold",
                                children: [Math.round(we * 100), "%"],
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            type: "range",
                            min: "0",
                            max: "1",
                            step: "0.05",
                            value: we,
                            onChange: (t) => Ut(parseFloat(t.target.value)),
                            className:
                              "w-full h-1.5 accent-white cursor-pointer rounded-full",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex justify-between text-[10px] text-zinc-500",
                            children: [
                              e.jsx("span", { children: "Silent" }),
                              e.jsx("span", { children: "100%" }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "px-3 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl",
                        children: e.jsxs("span", {
                          className:
                            "text-zinc-300 text-[11px] leading-relaxed",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-white",
                              children: "Audio chain:",
                            }),
                            " ",
                            "HPF 50 Hz → presence lift → de-esser → gain → compressor (2:1) → analyser. 24 kHz Kokoro source, gapless scheduled playback. Changing voice re-synthesises the document.",
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            v.length > 1 &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx("h3", {
                        className:
                          "text-xs font-bold text-zinc-300 uppercase tracking-widest",
                        children: "Pages",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2.5 text-[11px] text-zinc-500",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-white inline-block",
                              }),
                              "current",
                            ],
                          }),
                          e.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-zinc-400 inline-block",
                              }),
                              "done",
                            ],
                          }),
                          e.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [
                              e.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-zinc-700 inline-block",
                              }),
                              "pending",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: Yt.map(
                      ({
                        pi: t,
                        total: r,
                        ready: i,
                        gen: f,
                        done: u,
                        active: b,
                      }) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => Q(t),
                            title: `Page ${t + 1}: ${i}/${r} ready`,
                            className: `relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-xs font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 touch-manipulation
                    ${t === E ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.12)]" : u ? "bg-zinc-700 border border-zinc-600 text-zinc-200" : b ? "bg-zinc-800 border border-zinc-600 text-zinc-300" : "bg-zinc-800 border border-zinc-700 text-zinc-500 hover:text-white hover:bg-zinc-700"}`,
                            children: [
                              t + 1,
                              b &&
                                f > 0 &&
                                e.jsx("span", {
                                  className:
                                    "absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-pulse",
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
                "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-xs font-bold text-zinc-300 uppercase tracking-widest",
                      children: "Export Audio",
                    }),
                    e.jsx("div", {
                      className:
                        "flex items-center gap-1 bg-zinc-800 border border-zinc-700 rounded-full p-0.5",
                      children: ["mp3", "wav"].map((t) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => Gt(t),
                            className: `text-[10px] font-bold uppercase px-2.5 py-1 rounded-full transition-colors touch-manipulation ${ae === t ? "bg-white text-black" : "text-zinc-400 hover:text-white"}`,
                            children: t,
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                ue &&
                  e.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between text-xs text-zinc-300",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-1.5",
                            children: [
                              e.jsx(ee, { className: "w-3 h-3" }),
                              ue.label,
                            ],
                          }),
                          e.jsxs("span", {
                            className: "font-mono",
                            children: [ue.cur, "/", ue.total],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "h-1.5 bg-zinc-800 overflow-hidden rounded-full",
                        children: e.jsx("div", {
                          className:
                            "h-full bg-white transition-all duration-300 rounded-full",
                          style: { width: `${(ue.cur / ue.total) * 100}%` },
                        }),
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: [
                    {
                      label: "This Page",
                      sub: ae.toUpperCase(),
                      Icon: gn,
                      fn: () => Jt(E),
                    },
                    {
                      label: "Full Doc",
                      sub: ae.toUpperCase(),
                      Icon: $t,
                      fn: Qt,
                    },
                    { label: "All Pages", sub: "ZIP", Icon: vn, fn: en },
                  ].map(({ label: t, sub: r, Icon: i, fn: f }) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: f,
                        disabled: !sn || !!ue,
                        className:
                          "flex flex-col items-center gap-2 py-4 px-2 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-95",
                        children: [
                          e.jsx(i, { className: "w-4 h-4" }),
                          e.jsx("span", {
                            className: "text-xs font-semibold",
                            children: t,
                          }),
                          e.jsx("span", {
                            className: "text-[10px] text-zinc-500 font-mono",
                            children: r,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className:
                    "text-[10px] text-zinc-500 flex items-start gap-1.5",
                  children: [
                    e.jsx(Tt, { className: "w-3 h-3 flex-shrink-0 mt-0.5" }),
                    ae === "mp3"
                      ? "MP3 128 kbps · 24 kHz · mono"
                      : "16-bit PCM WAV · 24 kHz · mono",
                    " ",
                    "· export covers generated pages only",
                  ],
                }),
              ],
            }),
            e.jsx("p", {
              className:
                "hidden sm:block text-center text-[10px] text-zinc-600",
              children: "Space · play/pause  ·  ←/→ · pages  ·  Esc · stop",
            }),
          ],
        }),
    ],
  });
}
export { Wn as default };
