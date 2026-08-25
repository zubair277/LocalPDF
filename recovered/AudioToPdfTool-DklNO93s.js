import { r as n, j as e } from "./react-vendor-Bc7KCos-.js";
const St = `
  let pipe = null;
  let currentModel = null;
  
  async function loadPipeline(modelId) {
    if (pipe && currentModel === modelId) return pipe;
    pipe = null;
  
    const { pipeline, env } = await import(
      'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js'
    );
    env.allowLocalModels  = false;
    env.useBrowserCache   = true;
  
    pipe = await pipeline('automatic-speech-recognition', modelId, {
      quantized: true,
      progress_callback: (p) => {
        postMessage({ type: 'progress', status: p.status, file: p.file || '', pct: Math.round(p.progress || 0) });
      },
    });
    currentModel = modelId;
    postMessage({ type: 'model_ready', modelId });
    return pipe;
  }
  
  onmessage = async ({ data }) => {
    if (data.type === 'load') {
      try { await loadPipeline(data.modelId); }
      catch(e) { postMessage({ type: 'model_error', msg: e.message }); }
      return;
    }
  
    if (data.type === 'transcribe') {
      try {
        const p = await loadPipeline(data.modelId);
        let audio = new Float32Array(data.audio);
  
        const MIN_SAMPLES = 16000 * 30;
        if (audio.length < MIN_SAMPLES) {
          const padded = new Float32Array(MIN_SAMPLES);
          padded.set(audio);
          audio = padded;
        }
  
        const durationSecs = audio.length / 16000;
        const useChunking  = durationSecs > 35;
  
        const toPlain = (arr) => {
          if (!arr) return [];
          const list = Array.isArray(arr) ? arr : Array.from(arr);
          return list.map((c) => ({
            text:      String(c.text || ''),
            timestamp: Array.isArray(c.timestamp)
              ? [c.timestamp[0] ?? null, c.timestamp[1] ?? null]
              : (c.timestamp != null ? [c.timestamp, null] : null),
          }));
        };
  
        const finalize = (result) => {
          let safeChunks = [];
          if (result?.chunks && result.chunks.length > 0) {
            safeChunks = toPlain(result.chunks);
          } else if (result?.text) {
            safeChunks = [{ text: String(result.text), timestamp: null }];
          }
          postMessage({ type: 'done', result: { chunks: safeChunks, text: result?.text || '' } });
        };
  
        const baseOpts = {
          language:            data.language || null,
          task:                'transcribe',
          temperature:         0,
          no_speech_threshold: 0.6,
          compression_ratio_threshold: 2.4,
          callback_function: (partial) => {
            try { postMessage({ type: 'partial', chunks: toPlain(partial) }); } catch(_) {}
          },
        };
  
        try {
          const result = await p(audio, {
            ...baseOpts,
            return_timestamps: 'word',
            chunk_length_s:    useChunking ? 30  : undefined,
            stride_length_s:   useChunking ? 4   : undefined,
            num_beams:         1,
          });
          return finalize(result);
        } catch (e1) {
          if (!e1.message?.includes('out of bounds') && !e1.message?.includes('offset')) throw e1;
          postMessage({ type: 'partial_retry' });
        }
  
        try {
          const result = await p(audio, {
            ...baseOpts,
            return_timestamps: true,
            chunk_length_s:    useChunking ? 30 : undefined,
            stride_length_s:   useChunking ? 5  : undefined,
            num_beams:         3,
          });
          return finalize(result);
        } catch (e2) {
          if (!e2.message?.includes('out of bounds') && !e2.message?.includes('offset')) throw e2;
        }
  
        const result = await p(audio, {
          ...baseOpts,
          return_timestamps: false,
          num_beams:         1,
        });
        finalize(result);
  
      } catch(e) {
        postMessage({ type: 'error', msg: e.message });
      }
    }
  };
  `,
  Ae = [
    {
      id: "Xenova/whisper-small.en",
      label: "Small · EN",
      size: "~244 MB",
      desc: "Fast & accurate · English only ★",
    },
    {
      id: "Xenova/whisper-medium.en",
      label: "Medium · EN",
      size: "~769 MB",
      desc: "High accuracy · English only ★★",
    },
    {
      id: "Xenova/whisper-large-v3",
      label: "Large v3",
      size: "~1.5 GB",
      desc: "Best accuracy · multilingual ★★★",
    },
    {
      id: "Xenova/whisper-small",
      label: "Small · Multi",
      size: "~244 MB",
      desc: "Multilingual · decent accuracy",
    },
    {
      id: "Xenova/whisper-medium",
      label: "Medium · Multi",
      size: "~769 MB",
      desc: "Multilingual · high accuracy ★★",
    },
  ],
  Ct = [
    { code: null, label: "Auto-detect" },
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "it", label: "Italian" },
    { code: "pt", label: "Portuguese" },
    { code: "zh", label: "Chinese" },
    { code: "ja", label: "Japanese" },
    { code: "ko", label: "Korean" },
    { code: "ar", label: "Arabic" },
    { code: "ru", label: "Russian" },
    { code: "hi", label: "Hindi" },
    { code: "nl", label: "Dutch" },
  ],
  Tt = [
    {
      id: "minimal",
      label: "Minimal",
      icon: "◻",
      desc: "Clean prose · inline timestamps",
    },
    {
      id: "professional",
      label: "Professional",
      icon: "▣",
      desc: "Black cover page · formatted body",
    },
    {
      id: "transcript",
      label: "Transcript",
      icon: "≡",
      desc: "Gutter timestamps · readable",
    },
  ],
  Mt = ".mp3,.wav,.m4a,.ogg,.flac,.webm,.aac,.opus,audio",
  ne = (s) =>
    !s && s !== 0
      ? "—"
      : s < 0
        ? "0:00"
        : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`,
  he = (s) =>
    !s || s < 0
      ? "—"
      : s < 60
        ? `${Math.round(s)}s`
        : `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`,
  rt = (s) =>
    s < 1024
      ? `${s} B`
      : s < 1048576
        ? `${(s / 1024).toFixed(1)} KB`
        : `${(s / 1048576).toFixed(1)} MB`,
  Ft = ({ children: s, className: d }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: d,
      children: s,
    }),
  z = (s) =>
    function ({ className: u }) {
      return e.jsx(Ft, { className: u, children: s });
    },
  pe = z(
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
  Rt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "17 8 12 3 7 8" }),
        e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
      ],
    }),
  ),
  Pt = z(
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
  At = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", {
          d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        }),
        e.jsx("polyline", { points: "14 2 14 8 20 8" }),
      ],
    }),
  ),
  It = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  ),
  Xe = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }),
      ],
    }),
  ),
  at = z(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  ),
  Lt = z(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    }),
  ),
  Dt = z(
    e.jsx(e.Fragment, {
      children: e.jsx("polyline", { points: "18 15 12 9 6 15" }),
    }),
  ),
  Et = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  ),
  _t = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
        e.jsx("path", {
          d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
        }),
      ],
    }),
  ),
  $t = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("path", { d: "M12 20h9" }),
        e.jsx("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" }),
      ],
    }),
  ),
  Bt = z(
    e.jsx(e.Fragment, {
      children: e.jsx("path", {
        d: "M2 12h2M6 8v8M10 6v12M14 9v6M18 7v10M22 12h2",
      }),
    }),
  ),
  Ut = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        e.jsx("path", {
          d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41",
        }),
      ],
    }),
  ),
  Wt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polyline", { points: "4 7 4 4 20 4 20 7" }),
        e.jsx("line", { x1: "9", y1: "20", x2: "15", y2: "20" }),
        e.jsx("line", { x1: "12", y1: "4", x2: "12", y2: "20" }),
      ],
    }),
  ),
  Ot = z(
    e.jsx(e.Fragment, {
      children: e.jsx("polygon", { points: "5 3 19 12 5 21 5 3" }),
    }),
  ),
  Ht = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("rect", { x: "6", y: "4", width: "4", height: "16" }),
        e.jsx("rect", { x: "14", y: "4", width: "4", height: "16" }),
      ],
    }),
  ),
  it = z(
    e.jsx(e.Fragment, {
      children: e.jsx("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
      }),
    }),
  ),
  Xt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        e.jsx("path", {
          d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        }),
      ],
    }),
  ),
  Gt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }),
        e.jsx("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
        e.jsx("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
      ],
    }),
  ),
  qt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("polyline", { points: "12 6 12 12 16 14" }),
      ],
    }),
  ),
  Kt = z(
    e.jsxs(e.Fragment, {
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
  ),
  Vt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polyline", { points: "23 4 23 10 17 10" }),
        e.jsx("path", { d: "M20.49 15a9 9 0 1 1-.49-3.96" }),
      ],
    }),
  ),
  Yt = z(
    e.jsxs(e.Fragment, {
      children: [
        e.jsx("polyline", { points: "1 4 1 10 7 10" }),
        e.jsx("path", { d: "M3.51 15a9 9 0 1 0 .49-3.96" }),
      ],
    }),
  ),
  J = ({ className: s }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      className: `animate-spin ${s || ""}`,
      children: e.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }),
    });
async function Zt(s) {
  const d = await s.arrayBuffer(),
    u = new (window.AudioContext || window.webkitAudioContext)(),
    c = await u.decodeAudioData(d);
  await u.close();
  const l = 16e3,
    k = new OfflineAudioContext(1, Math.ceil(c.duration * l), l),
    j = k.createBufferSource();
  return (
    (j.buffer = c),
    j.connect(k.destination),
    j.start(0),
    {
      audio: (await k.startRendering()).getChannelData(0),
      sampleRate: l,
      duration: c.duration,
    }
  );
}
function Jt(s, d = 300) {
  const u = Math.max(1, Math.floor(s.length / d)),
    c = new Float32Array(d);
  for (let l = 0; l < d; l++) {
    let k = 0;
    const j = l * u,
      S = Math.min(j + u, s.length);
    for (let P = j; P < S; P++) {
      const A = Math.abs(s[P]);
      A > k && (k = A);
    }
    c[l] = k;
  }
  return c;
}
function Qt(s, d = 1.2) {
  if (!Array.isArray(s) || !s.length) return [];
  const u = [];
  let c = [s[0]];
  for (let l = 1; l < s.length; l++) {
    const k = s[l - 1].timestamp?.[1] ?? 0;
    (s[l].timestamp?.[0] ?? 0) - k >= d
      ? (u.push(c), (c = [s[l]]))
      : c.push(s[l]);
  }
  return (c.length && u.push(c), u);
}
function es(s) {
  return s
    .map((d) => d.text || "")
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}
function lt(s, d = {}) {
  const {
      peaks: u = null,
      playPct: c = 0,
      fftData: l = null,
      isRecording: k = !1,
      isPlaying: j = !1,
      isAnalyzing: S = !1,
      recordingFft: P = null,
    } = d,
    A = Math.min(window.devicePixelRatio || 1, 2),
    r = s.getBoundingClientRect(),
    N = r.width,
    m = r.height;
  if (!N || !m || !isFinite(N) || !isFinite(m)) return;
  (s.width !== Math.round(N * A) || s.height !== Math.round(m * A)) &&
    ((s.width = Math.round(N * A)), (s.height = Math.round(m * A)));
  const a = s.getContext("2d");
  (a.clearRect(0, 0, s.width, s.height),
    a.save(),
    a.scale(A, A),
    (a.fillStyle = "#000"),
    a.fillRect(0, 0, N, m),
    (a.strokeStyle = "rgba(255,255,255,0.04)"),
    (a.lineWidth = 1),
    [0.25, 0.5, 0.75].forEach((h) => {
      (a.beginPath(), a.moveTo(0, m * h), a.lineTo(N, m * h), a.stroke());
    }));
  const L = Math.max(60, Math.floor(N / 2.8)),
    _ = Math.max(1.5, (N * 0.72) / L),
    C = (N - L * _) / Math.max(L - 1, 1),
    v = Date.now() / 1e3;
  for (let h = 0; h < L; h++) {
    const G = h / (L - 1),
      x = h * (_ + C);
    let q = 0.03;
    if (k && P) {
      const y = Math.floor((h / L) * P.length * 0.7);
      q = Math.max(0.04, (P[y] / 255) * 0.9);
    } else if (S) q = 0.055 + 0.1 * Math.abs(Math.sin(v * 4 + h * 0.25));
    else if (j && l) {
      const y = Math.floor((h / L) * l.length * 0.75);
      q = Math.max(0.03, l[y] / 255);
    } else if (u) {
      const y = Math.floor(G * u.length);
      q = Math.max(0.022, u[y]);
    }
    const T = Math.max(3, q * m * 0.92),
      g = (m - T) / 2;
    if (!isFinite(T) || !isFinite(g) || !isFinite(x)) continue;
    const te = u && G < (c || 0);
    let B;
    if (k) {
      const y = 0.5 + 0.5 * Math.sin(v * 5 + h * 0.18),
        w = Math.round(160 + 80 * y);
      B = `rgb(${w},${w},${w})`;
    } else if (S) {
      const y = Math.round(40 + 80 * Math.abs(Math.sin(v * 3 + h * 0.3)));
      B = `rgb(${y},${y},${y})`;
    } else if (te) {
      const y = a.createLinearGradient(0, g, 0, g + T);
      (y.addColorStop(0, "#ffffff"),
        y.addColorStop(0.4, "#e0e0e0"),
        y.addColorStop(1, "#666"),
        (B = y));
    } else if (u) {
      const y = a.createLinearGradient(0, g, 0, g + T);
      (y.addColorStop(0, "#555"), y.addColorStop(1, "#1e1e1e"), (B = y));
    } else B = "#1e1e1e";
    a.fillStyle = B;
    const F = Math.min(_ / 2, 2.5);
    (a.beginPath(),
      a.moveTo(x + F, g),
      a.lineTo(x + _ - F, g),
      a.arcTo(x + _, g, x + _, g + F, F),
      a.lineTo(x + _, g + T - F),
      a.arcTo(x + _, g + T, x + _ - F, g + T, F),
      a.lineTo(x + F, g + T),
      a.arcTo(x, g + T, x, g + T - F, F),
      a.lineTo(x, g + F),
      a.arcTo(x, g, x + F, g, F),
      a.closePath(),
      a.fill());
  }
  a.fillStyle = "rgba(0,0,0,0.10)";
  for (let h = 0; h < m; h += 3) a.fillRect(0, h, N, 1);
  if (c > 0.005 && c < 0.995 && !k) {
    const h = c * N;
    ((a.shadowColor = "#fff"),
      (a.shadowBlur = 16),
      (a.fillStyle = "rgba(255,255,255,0.08)"),
      a.fillRect(h - 5, 0, 10, m),
      (a.shadowBlur = 8),
      (a.fillStyle = "#fff"),
      a.fillRect(h - 0.75, 0, 1.5, m),
      (a.shadowBlur = 0));
  }
  if (k) {
    const h = 0.3 + 0.3 * Math.sin(v * 3.5);
    ((a.strokeStyle = `rgba(255,255,255,${h.toFixed(2)})`),
      (a.lineWidth = 1.5),
      a.strokeRect(0.75, 0.75, N - 1.5, m - 1.5));
  }
  a.restore();
}
function ts(s) {
  const {
      paragraphs: d,
      fileName: u = "transcript",
      style: c = "professional",
      fontSize: l = 11,
      showTimestamps: k = !0,
      showPageNums: j = !0,
      language: S = null,
      duration: P = 0,
    } = s,
    { jsPDF: A } = window.jspdf,
    r = new A({ unit: "pt", format: "a4" }),
    N = r.internal.pageSize.getWidth(),
    m = r.internal.pageSize.getHeight(),
    a = 56,
    L = N - a * 2,
    _ = c === "transcript" ? 72 : 0;
  let C = 1,
    v = a;
  const h = new Set(),
    G = () => h.add(r.getCurrentPageInfo().pageNumber),
    x = (w) => {
      j &&
        (r.setFont("helvetica", "normal"),
        r.setFontSize(8),
        r.setTextColor(160, 160, 160),
        r.text(`${w}`, N / 2, m - 24, { align: "center" }));
    },
    q = () => {
      (x(C++), r.addPage(), (v = a));
    },
    T = (w) => {
      v + w > m - a - 10 && h.has(r.getCurrentPageInfo().pageNumber) && q();
    };
  if (c === "professional") {
    (r.setFillColor(0, 0, 0), r.rect(0, 0, N, m, "F"), G());
    const w = u.replace(/\.[^/.]+$/, "");
    (r.setFont("helvetica", "bold"),
      r.setFontSize(32),
      r.setTextColor(255, 255, 255));
    const $ = r.splitTextToSize(w, L);
    (r.text($, a, m * 0.28),
      r.setFontSize(13),
      r.setFont("helvetica", "normal"),
      r.setTextColor(130, 130, 130),
      r.text("Audio Transcript", a, m * 0.28 + $.length * 40 + 18));
    const D = d.reduce(
        (R, X) => R + X.text.split(/\s+/).filter(Boolean).length,
        0,
      ),
      H = m - a - 90;
    (r.setDrawColor(55, 55, 55),
      r.setLineWidth(0.5),
      r.line(a, H - 18, N - a, H - 18),
      r.setFontSize(8.5),
      r.setTextColor(100, 100, 100),
      [
        P ? `Duration: ${he(P)}` : null,
        `Transcribed: ${new Date().toLocaleDateString("en-IN")}`,
        S ? `Language: ${S.toUpperCase()}` : "Language: Auto-detected",
        `Words: ${D.toLocaleString()}`,
        `Paragraphs: ${d.length}`,
      ]
        .filter(Boolean)
        .forEach((R, X) => {
          r.text(R, a, H + X * 14);
        }),
      x(C++),
      r.addPage(),
      (v = a));
  }
  if (c !== "professional") {
    const w = u.replace(/\.[^/.]+$/, "");
    (r.setFont("helvetica", "bold"),
      r.setFontSize(20),
      r.setTextColor(20, 20, 20));
    const $ = r.splitTextToSize(w, L);
    (r.text($, a, v),
      (v += $.length * 26 + 8),
      G(),
      r.setFont("helvetica", "normal"),
      r.setFontSize(8),
      r.setTextColor(150, 150, 150));
    const D = [
      P ? `Duration: ${he(P)}` : null,
      `Transcribed: ${new Date().toLocaleDateString("en-IN")}`,
      S ? `Language: ${S.toUpperCase()}` : null,
    ].filter(Boolean);
    (r.text(D.join("  ·  "), a, v),
      (v += 12),
      r.setDrawColor(210, 210, 210),
      r.setLineWidth(0.5),
      r.line(a, v, N - a, v),
      (v += 20));
  }
  const g = a + _,
    te = L - _,
    B = l * 1.5;
  (d
    .filter((w) => w.text.trim().length > 0)
    .forEach((w, $) => {
      const D = r.splitTextToSize(w.text, te),
        H = D.length * B + ($ > 0 ? 12 : 0);
      (T(H + 10), $ > 0 && (v += 12));
      const K = k && w.startTime != null ? ne(w.startTime) : null;
      (c === "transcript" &&
        K &&
        (r.setFont("courier", "normal"),
        r.setFontSize(7.5),
        r.setTextColor(140, 140, 140),
        r.text(K, a, v + l * 0.9),
        G()),
        r.setFont("helvetica", "normal"),
        r.setFontSize(l),
        r.setTextColor(30, 30, 30));
      let R = v;
      (D.forEach((X) => {
        (R + B > m - a && (x(C++), r.addPage(), (R = a)),
          c === "minimal" && K && R === v
            ? (r.setFont("courier", "normal"),
              r.setFontSize(7),
              r.setTextColor(180, 180, 180),
              r.text(`[${K}]`, g, R + l * 0.9),
              r.setFont("helvetica", "normal"),
              r.setFontSize(l),
              r.setTextColor(30, 30, 30),
              r.text(X, g + 38, R + l * 0.9))
            : c === "professional" && K && R === v
              ? (r.setFont("courier", "normal"),
                r.setFontSize(7.5),
                r.setTextColor(140, 140, 140),
                r.text(`[${K}]`, g, R + l * 0.9),
                r.setFont("helvetica", "normal"),
                r.setFontSize(l),
                r.setTextColor(50, 50, 50),
                r.text(X, g + 38, R + l * 0.9))
              : (r.setFont("helvetica", "normal"),
                r.setFontSize(l),
                r.setTextColor(
                  c === "professional" ? 50 : 30,
                  c === "professional" ? 50 : 30,
                  c === "professional" ? 50 : 30,
                ),
                r.text(X, g, R + l * 0.9)),
          G(),
          (R += B));
      }),
        (v = R));
    }),
    x(C));
  const y = r.getNumberOfPages();
  for (let w = y; w >= 1; w--)
    if (!h.has(w))
      try {
        r.deletePage(w);
      } catch {}
  return r;
}
const ss = n.memo(
  ({
    para: s,
    index: d,
    onTextChange: u,
    isActive: c,
    onTimestampClick: l,
    showTimestamps: k,
  }) => {
    const j = n.useRef(null),
      S = n.useRef(c);
    n.useEffect(() => {
      S.current = c;
    }, [c]);
    const P = n.useCallback(() => {
      j.current && u(d, j.current.innerText);
    }, [d, u]);
    return e.jsxs("div", {
      className: `group relative flex gap-0 sm:gap-3 transition-colors duration-100 ${c ? "bg-zinc-800/70 border-l-2 border-white" : "border-l-2 border-transparent hover:bg-zinc-900/50"}`,
      children: [
        k &&
          e.jsx("button", {
            onClick: () => l?.(s.startTime),
            disabled: s.startTime == null,
            className: `flex-shrink-0 w-14 pt-3 pb-1 pl-4 text-right text-[10px] font-mono tabular-nums transition-colors disabled:cursor-default ${s.startTime != null ? (c ? "text-zinc-300 hover:text-white" : "text-zinc-600 hover:text-zinc-400") : "text-zinc-800 cursor-default"}`,
            children: s.startTime != null ? ne(s.startTime) : "",
          }),
        e.jsx("div", {
          ref: j,
          contentEditable: !0,
          suppressContentEditableWarning: !0,
          onInput: P,
          className:
            "flex-1 px-4 py-3 text-sm leading-7 focus:outline-none break-words min-h-[2.5rem] text-zinc-200 focus:text-white",
          dangerouslySetInnerHTML: void 0,
          children: s.text,
        }),
      ],
    });
  },
  (s, d) => {
    const u = document.activeElement;
    return s.index === d.index &&
      s.isActive !== d.isActive &&
      u?.contentEditable === "true"
      ? !0
      : s.para.text === d.para.text &&
          s.para.startTime === d.para.startTime &&
          s.isActive === d.isActive &&
          s.showTimestamps === d.showTimestamps &&
          s.index === d.index;
  },
);
function ct({ value: s, onChange: d, label: u }) {
  return e.jsxs("div", {
    onClick: () => d(!s),
    role: "button",
    tabIndex: 0,
    onKeyDown: (c) => c.key === " " && d(!s),
    className: `flex items-center justify-between w-full px-3 py-3 rounded-xl cursor-pointer select-none transition-all duration-150 touch-manipulation ${s ? "bg-white text-black" : "bg-zinc-800/80 border border-zinc-700/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"}`,
    children: [
      e.jsx("span", { className: "text-xs font-semibold", children: u }),
      e.jsx("div", {
        style: {
          flexShrink: 0,
          width: 36,
          height: 20,
          borderRadius: 10,
          padding: 2,
          backgroundColor: s ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.12)",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: s ? "flex-end" : "flex-start",
          transition: "background-color 0.2s",
          marginLeft: 10,
        },
        children: e.jsx("div", {
          style: {
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: s ? "#000" : "#71717a",
            flexShrink: 0,
            transition: "background-color 0.2s",
          },
        }),
      }),
    ],
  });
}
function as({ showNotification: s, showDownloadDialog: d }) {
  const u = n.useRef(null),
    c = n.useRef(null),
    [l, k] = n.useState(Ae[0].id),
    [j, S] = n.useState("idle"),
    [P, A] = n.useState(""),
    [r, N] = n.useState(0),
    [m, a] = n.useState(null),
    [L, _] = n.useState("upload"),
    [C, v] = n.useState(null),
    [h, G] = n.useState(null),
    [x, q] = n.useState(0),
    [T, g] = n.useState(null),
    [te, B] = n.useState(!1),
    [F, y] = n.useState(null),
    w = n.useRef(null),
    $ = n.useRef(null),
    D = n.useRef(null),
    [H, K] = n.useState(!1),
    [R, X] = n.useState(0),
    Ie = n.useRef(null),
    Ge = n.useRef(null),
    Le = n.useRef([]),
    re = n.useRef(null),
    ae = n.useRef(null),
    fe = n.useRef(null),
    [V, De] = n.useState(!1),
    [ge, ie] = n.useState(0),
    [qe, Ee] = n.useState(null),
    [Ke, be] = n.useState(!1),
    [ot, je] = n.useState([]),
    [E, ye] = n.useState([]),
    [dt, Ve] = n.useState(-1),
    [Q, le] = n.useState("idle"),
    [ns, we] = n.useState(0),
    [ut, ve] = n.useState(0),
    p = n.useRef(null),
    ze = n.useRef(null),
    Y = n.useRef(null),
    ce = n.useRef(null),
    oe = n.useRef(null),
    _e = n.useRef(null),
    [Ne, xt] = n.useState("professional"),
    [W, $e] = n.useState(!0),
    [ke, mt] = n.useState(!0),
    [Se, pt] = n.useState(11),
    [Ye, ht] = n.useState(!1),
    [Ze, Je] = n.useState(!1),
    Ce = n.useMemo(
      () =>
        E.reduce((t, i) => t + i.text.split(/\s+/).filter(Boolean).length, 0),
      [E],
    ),
    Te = n.useCallback(
      (t) => {
        (u.current && u.current.terminate(),
          c.current && URL.revokeObjectURL(c.current));
        const i = new Blob([St], { type: "application/javascript" }),
          o = URL.createObjectURL(i);
        c.current = o;
        const f = new Worker(o, { type: "module" });
        return (
          (u.current = f),
          (f.onmessage = ({ data: b }) => {
            switch (b.type) {
              case "progress":
                (S("loading"),
                  b.file && A(b.file.split("/").pop()),
                  N(b.pct || 0));
                break;
              case "model_ready":
                (S("ready"),
                  A(""),
                  s?.("Whisper ready — drop an audio file or record!"));
                break;
              case "model_error":
                (S("error"), s?.("Model failed: " + b.msg, "error"));
                break;
              case "partial":
                (ie((U) => Math.min(U + 2, 94)),
                  Array.isArray(b.chunks) && je(b.chunks));
                break;
              case "partial_retry":
                (ie(20), je([]), be(!0));
                break;
              case "done": {
                const U = b.result?.chunks || [],
                  O = Qt(U)
                    .map((I) => ({
                      text: es(I),
                      startTime: I[0]?.timestamp?.[0] ?? null,
                      endTime: I[I.length - 1]?.timestamp?.[1] ?? null,
                    }))
                    .filter((I) => I.text.trim().length > 1);
                (ye(O), De(!1), be(!1), ie(100));
                const se = O.reduce(
                  (I, Z) => I + Z.text.split(/\s+/).filter(Boolean).length,
                  0,
                );
                s?.(
                  `Done! ${O.length} paragraphs · ${se.toLocaleString()} words`,
                );
                break;
              }
              case "error":
                (De(!1),
                  be(!1),
                  Ee(b.msg),
                  s?.("Transcription failed: " + b.msg, "error"));
                break;
            }
          }),
          (f.onerror = (b) => {
            (S("error"), console.error("[Whisper]", b));
          }),
          f
        );
      },
      [s],
    ),
    Be = n.useCallback(
      (t) => {
        const i = t || l;
        (S("loading"),
          N(0),
          A("Initialising…"),
          Te(i).postMessage({ type: "load", modelId: i }));
      },
      [l, Te],
    );
  n.useEffect(() => {
    Be();
  }, []);
  const ft = n.useCallback(
      (t) => {
        k(t);
        const i = t;
        (S("loading"),
          N(0),
          A("Initialising…"),
          Te(i).postMessage({ type: "load", modelId: i }));
      },
      [Te],
    ),
    Ue = n.useCallback(() => {
      (D.current && URL.revokeObjectURL(D.current),
        (D.current = null),
        p.current &&
          (p.current.pause(),
          (p.current.src = ""),
          (p.current.onended = null),
          (p.current = null)),
        Y.current?.close().catch(() => {}),
        (Y.current = null),
        (ce.current = null),
        (oe.current = null),
        v(null),
        G(null),
        g(null),
        q(0),
        ye([]),
        je([]),
        Ee(null),
        y(null),
        ie(0),
        le("idle"),
        we(0),
        ve(0),
        Ve(-1));
    }, []),
    Me = n.useCallback(
      async (t) => {
        if (!t) return;
        if (
          !["audio/", "video/webm"].some((f) => t.type.startsWith(f)) &&
          !t.name.match(/\.(mp3|wav|m4a|ogg|flac|webm|aac|opus)$/i)
        ) {
          s?.("Please provide a valid audio file.", "error");
          return;
        }
        (Ue(),
          v(t),
          B(!0),
          t.size > 150 * 1024 * 1024 &&
            s?.(
              "Large file detected (>150 MB) — decoding may take a moment.",
              "info",
            ),
          p.current &&
            (p.current.pause(),
            (p.current.src = ""),
            (p.current.onended = null),
            (p.current = null)),
          Y.current?.close().catch(() => {}),
          (Y.current = null),
          (ce.current = null),
          (oe.current = null),
          (D.current = URL.createObjectURL(t)));
        const o = new Audio(D.current);
        ((o.preload = "auto"),
          (o.onended = () => {
            (le("idle"), we(0), ve(0));
          }),
          (p.current = o));
        try {
          const { audio: f, duration: b } = await Zt(t);
          await new Promise((M) => setTimeout(M, 0));
          const U = Jt(f, 300);
          (g(f), G(U), q(b), s?.(`Ready · ${he(b)} · ${rt(t.size)}`));
        } catch (f) {
          (y(f.message), s?.("Could not decode: " + f.message, "error"));
        } finally {
          B(!1);
        }
      },
      [Ue, s],
    ),
    gt = n.useCallback(async () => {
      try {
        const t = await navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: !0, noiseSuppression: !0 },
          }),
          i = new (window.AudioContext || window.webkitAudioContext)(),
          o = i.createMediaStreamSource(t),
          f = i.createAnalyser();
        ((f.fftSize = 512),
          (f.smoothingTimeConstant = 0.75),
          o.connect(f),
          (fe.current = i),
          (re.current = f),
          (ae.current = new Uint8Array(f.frequencyBinCount)));
        const b =
            [
              "audio/webm;codecs=opus",
              "audio/webm",
              "audio/ogg;codecs=opus",
              "audio/mp4",
            ].find((M) => MediaRecorder.isTypeSupported(M)) || "",
          U = new MediaRecorder(t, b ? { mimeType: b } : {});
        ((Ge.current = U),
          (Le.current = []),
          (U.ondataavailable = (M) => {
            M.data.size > 0 && Le.current.push(M.data);
          }),
          (U.onstop = async () => {
            (t.getTracks().forEach((I) => I.stop()),
              fe.current?.close(),
              (fe.current = null),
              clearInterval(Ie.current));
            const M = b.includes("ogg")
                ? "ogg"
                : b.includes("mp4")
                  ? "mp4"
                  : "webm",
              O = new Blob(Le.current, { type: b || "audio/webm" }),
              se = new File([O], `recording_${Date.now()}.${M}`, {
                type: O.type,
              });
            (K(!1), X(0), await Me(se));
          }),
          U.start(100),
          K(!0),
          X(0),
          (Ie.current = setInterval(() => X((M) => M + 1), 1e3)));
      } catch (t) {
        s?.("Microphone denied: " + t.message, "error");
      }
    }, [Me, s]),
    bt = n.useCallback(() => {
      Ge.current?.stop();
    }, []),
    Qe = n.useCallback(() => {
      !T ||
        !u.current ||
        j !== "ready" ||
        (ye([]),
        je([]),
        Ee(null),
        be(!1),
        De(!0),
        ie(1),
        u.current.postMessage(
          {
            type: "transcribe",
            modelId: l,
            language: m,
            audio: T.buffer.slice(0),
          },
          [],
        ));
    }, [T, j, l, m]),
    et = n.useCallback(() => {
      if (!(Y.current || !p.current))
        try {
          const t = new (window.AudioContext || window.webkitAudioContext)(),
            i = t.createMediaElementSource(p.current),
            o = t.createAnalyser();
          ((o.fftSize = 1024),
            (o.smoothingTimeConstant = 0.8),
            i.connect(o),
            o.connect(t.destination),
            (Y.current = t),
            (ce.current = o),
            (oe.current = new Uint8Array(o.frequencyBinCount)));
        } catch (t) {
          console.warn("[AudioToPDF] FFT connect failed:", t.message);
        }
    }, []),
    de = n.useRef(null),
    ue = n.useCallback(() => {
      if (!p.current || !D.current) return;
      (Y.current?.state === "suspended" && Y.current.resume().catch(() => {}),
        et());
      const t = p.current.play();
      t !== void 0
        ? ((de.current = t),
          t
            .then(() => {
              ((de.current = null), le("playing"));
            })
            .catch((i) => {
              ((de.current = null),
                i.name !== "AbortError" &&
                  console.warn("[AudioToPDF] play error:", i));
            }))
        : le("playing");
    }, [et]),
    We = n.useCallback(() => {
      const t = () => {
        (p.current?.pause(), le("paused"));
      };
      de.current ? de.current.then(t).catch(t) : t();
    }, []),
    jt = n.useCallback(
      (t) => {
        if (!p.current || !x) return;
        const i = t.currentTarget.getBoundingClientRect(),
          o = Math.max(0, Math.min(1, (t.clientX - i.left) / i.width));
        ((p.current.currentTime = o * x), ve(o * x), we(o));
      },
      [x],
    ),
    xe = n.useCallback(
      (t) => {
        if (!p.current || !x) return;
        const i = Math.max(0, Math.min(x, (p.current.currentTime || 0) + t));
        p.current.currentTime = i;
      },
      [x],
    ),
    Fe = n.useRef("idle"),
    me = n.useRef(!1),
    Oe = n.useRef(!1),
    tt = n.useRef(0),
    He = n.useRef(null),
    st = n.useRef([]);
  (n.useEffect(() => {
    Fe.current = Q;
  }, [Q]),
    n.useEffect(() => {
      me.current = H;
    }, [H]),
    n.useEffect(() => {
      Oe.current = V;
    }, [V]),
    n.useEffect(() => {
      tt.current = x;
    }, [x]),
    n.useEffect(() => {
      He.current = h;
    }, [h]),
    n.useEffect(() => {
      st.current = E;
    }, [E]),
    n.useEffect(() => {
      let t = 0;
      const i = 80,
        o = (f) => {
          ze.current = requestAnimationFrame(o);
          const b = tt.current,
            U = p.current;
          if (U && b > 0) {
            const M = U.currentTime,
              O = M / b;
            if (f - t > i) {
              ((t = f), ve(M), we(O));
              const I = st.current;
              let Z = -1;
              for (let Pe = I.length - 1; Pe >= 0; Pe--)
                if (M >= (I[Pe].startTime ?? 1 / 0)) {
                  Z = Pe;
                  break;
                }
              Z >= 0 && Ve(Z);
            }
            const se = _e.current;
            if (se) {
              let I = null;
              ce.current &&
                Fe.current === "playing" &&
                (ce.current.getByteFrequencyData(oe.current), (I = oe.current));
              let Z = null;
              (re.current &&
                me.current &&
                (re.current.getByteFrequencyData(ae.current), (Z = ae.current)),
                lt(se, {
                  peaks: He.current,
                  playPct: O,
                  fftData: I,
                  isRecording: me.current,
                  isPlaying: Fe.current === "playing",
                  isAnalyzing: Oe.current,
                  recordingFft: Z,
                }));
            }
          } else {
            const M = _e.current;
            if (!M) return;
            let O = null;
            (re.current &&
              me.current &&
              (re.current.getByteFrequencyData(ae.current), (O = ae.current)),
              lt(M, {
                peaks: He.current,
                playPct: 0,
                isRecording: me.current,
                isAnalyzing: Oe.current,
                recordingFft: O,
              }));
          }
        };
      return (
        (ze.current = requestAnimationFrame(o)),
        () => cancelAnimationFrame(ze.current)
      );
    }, []),
    n.useEffect(() => {
      const t = (i) => {
        const o = document.activeElement?.tagName;
        o === "INPUT" ||
          o === "TEXTAREA" ||
          document.activeElement?.contentEditable === "true" ||
          (i.code === "Space" &&
            (i.preventDefault(),
            Fe.current === "playing" ? We() : p.current && ue()),
          i.code === "ArrowLeft" && p.current && (i.preventDefault(), xe(-10)),
          i.code === "ArrowRight" && p.current && (i.preventDefault(), xe(10)));
      };
      return (
        window.addEventListener("keydown", t),
        () => window.removeEventListener("keydown", t)
      );
    }, [ue, We, xe]));
  const yt = n.useCallback((t, i) => {
      ye((o) => o.map((f, b) => (b === t ? { ...f, text: i } : f)));
    }, []),
    wt = n.useCallback(
      (t) => {
        !p.current ||
          t == null ||
          ((p.current.currentTime = t), Q !== "playing" && ue());
      },
      [Q, ue],
    ),
    vt = n.useCallback(async () => {
      if (E.length) {
        if (!window.jspdf) {
          s?.("jsPDF not loaded. Make sure TOOL_LIBS includes jspdf.", "error");
          return;
        }
        Je(!0);
        try {
          const t = ts({
              paragraphs: E,
              fileName: C?.name || "transcript",
              style: Ne,
              fontSize: Se,
              showTimestamps: W,
              showPageNums: ke,
              language: m ? String(m) : null,
              duration: x,
            }),
            i =
              (C?.name || "transcript").replace(/\.[^/.]+$/, "") +
              "_transcript.pdf";
          (t.save(i), d?.(i, null, null), s?.("PDF exported!"));
        } catch (t) {
          s?.("PDF export failed: " + t.message, "error");
        } finally {
          Je(!1);
        }
      }
    }, [E, C, Ne, Se, W, ke, m, x, d, s]),
    zt = n.useCallback(() => {
      const t = E.map(
        (i) =>
          (W && i.startTime != null ? `[${ne(i.startTime)}] ` : "") + i.text,
      ).join(`

`);
      navigator.clipboard.writeText(t).then(() => s?.("Copied!"));
    }, [E, W, s]),
    Nt = n.useCallback(() => {
      const t = E.map(
          (f) =>
            (W && f.startTime != null ? `[${ne(f.startTime)}] ` : "") + f.text,
        ).join(`

`),
        i = URL.createObjectURL(new Blob([t], { type: "text/plain" })),
        o = document.createElement("a");
      ((o.href = i),
        (o.download =
          (C?.name || "transcript").replace(/\.[^/.]+$/, "") +
          "_transcript.txt"),
        document.body.appendChild(o),
        o.click(),
        document.body.removeChild(o),
        setTimeout(() => URL.revokeObjectURL(i), 5e3),
        s?.("TXT downloaded!"));
    }, [E, W, C, s]);
  n.useEffect(
    () => () => {
      (u.current?.terminate(),
        c.current && URL.revokeObjectURL(c.current),
        D.current && URL.revokeObjectURL(D.current),
        p.current && (p.current.pause(), (p.current.src = "")),
        Y.current?.close().catch(() => {}),
        fe.current?.close().catch(() => {}),
        clearInterval(Ie.current),
        cancelAnimationFrame(ze.current));
    },
    [],
  );
  const Re = !!C && !te,
    ee = E.length > 0,
    kt = Re && !!T && j === "ready" && !V,
    nt = (ot || [])
      .map((t) => t.text || "")
      .join("")
      .slice(-300);
  return e.jsxs("div", {
    className: "max-w-2xl mx-auto pb-20 space-y-3 px-0",
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
                children: e.jsx(pe, { className: "w-5 h-5 text-black" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h2", {
                    className: "text-base font-bold text-white leading-none",
                    children: "Audio to PDF",
                  }),
                  e.jsx("p", {
                    className: "text-zinc-400 text-[11px] mt-0.5",
                    children: "Whisper ASR · Word timestamps · 100% on-device",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex-shrink-0",
            children: [
              j === "idle" &&
                e.jsx("button", {
                  onClick: () => Be(),
                  className:
                    "text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors touch-manipulation",
                  children: "Load",
                }),
              j === "loading" &&
                e.jsxs("span", {
                  className:
                    "flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300",
                  children: [e.jsx(J, { className: "w-3 h-3" }), r, "%"],
                }),
              j === "ready" &&
                e.jsxs("span", {
                  className:
                    "flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-white",
                  children: [
                    e.jsx("span", {
                      className:
                        "w-1.5 h-1.5 rounded-full bg-white inline-block",
                    }),
                    Ae.find((t) => t.id === l)?.label ?? "Ready",
                  ],
                }),
              j === "error" &&
                e.jsx("button", {
                  onClick: () => Be(),
                  className:
                    "text-[11px] px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-red-400 hover:text-white transition-colors touch-manipulation",
                  children: "Retry",
                }),
            ],
          }),
        ],
      }),
      j === "loading" &&
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
                    e.jsx(J, { className: "w-3.5 h-3.5" }),
                    P || "Downloading Whisper…",
                  ],
                }),
                e.jsxs("span", {
                  className: "font-mono text-white font-semibold",
                  children: [r, "%"],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "relative h-1.5 bg-zinc-800 rounded-full overflow-hidden",
              children: e.jsx("div", {
                className:
                  "absolute inset-y-0 left-0 bg-white rounded-full transition-all duration-500",
                style: { width: `${r}%` },
              }),
            }),
            e.jsx("p", {
              className: "text-[10px] text-zinc-500",
              children:
                "Model cached after first download · runs entirely in your browser",
            }),
          ],
        }),
      e.jsxs("div", {
        className:
          "bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden",
        children: [
          e.jsxs("button", {
            onClick: () => ht((t) => !t),
            className:
              "w-full flex items-center justify-between px-4 py-3.5 hover:bg-zinc-800/50 transition-colors touch-manipulation",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [
                  e.jsx(Ut, { className: "w-4 h-4 text-zinc-400" }),
                  e.jsx("span", {
                    className: "text-sm font-semibold text-white",
                    children: "Model & Language",
                  }),
                  e.jsxs("span", {
                    className: "text-xs text-zinc-500 hidden sm:inline",
                    children: [
                      Ae.find((t) => t.id === l)?.label,
                      m ? ` · ${m.toUpperCase()}` : " · Auto",
                    ],
                  }),
                ],
              }),
              Ye
                ? e.jsx(Dt, { className: "w-4 h-4 text-zinc-400" })
                : e.jsx(Lt, { className: "w-4 h-4 text-zinc-400" }),
            ],
          }),
          Ye &&
            e.jsxs("div", {
              className: "px-4 pb-5 pt-2 space-y-5 border-t border-zinc-800",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs("label", {
                      className:
                        "text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5",
                      children: [
                        e.jsx(Gt, { className: "w-3 h-3" }),
                        "Whisper Model",
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-start gap-2.5 px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl",
                      children: [
                        e.jsx(it, {
                          className:
                            "w-3.5 h-3.5 text-zinc-300 flex-shrink-0 mt-0.5",
                        }),
                        e.jsxs("p", {
                          className:
                            "text-[11px] text-zinc-300 leading-relaxed",
                          children: [
                            e.jsx("span", {
                              className: "font-bold text-white",
                              children: "Small · EN",
                            }),
                            " is the recommended default — fast, accurate, and only 244 MB. For significantly better results use",
                            " ",
                            e.jsx("span", {
                              className: "text-white font-semibold",
                              children: "Medium",
                            }),
                            ". All models download once and run entirely in your browser.",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-1.5",
                      children: Ae.map((t) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => ft(t.id),
                            className: `flex items-start gap-3 px-3.5 py-3 rounded-xl text-left transition-all touch-manipulation active:scale-[0.98] ${l === t.id ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700"}`,
                            children: [
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between gap-2",
                                    children: [
                                      e.jsx("span", {
                                        className: "text-xs font-bold truncate",
                                        children: t.label,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-1.5 flex-shrink-0",
                                        children: [
                                          t.id === "Xenova/whisper-small.en" &&
                                            e.jsx("span", {
                                              className: `text-[9px] font-bold px-1.5 py-0.5 rounded-full ${l === t.id ? "bg-black/20 text-black" : "bg-zinc-700 text-zinc-300"}`,
                                              children: "DEFAULT",
                                            }),
                                          t.id === "Xenova/whisper-medium.en" &&
                                            e.jsx("span", {
                                              className: `text-[9px] font-bold px-1.5 py-0.5 rounded-full ${l === t.id ? "bg-black/20 text-black" : "bg-zinc-700 text-zinc-300"}`,
                                              children: "BEST",
                                            }),
                                          t.id === "Xenova/whisper-large-v3" &&
                                            e.jsx("span", {
                                              className: `text-[9px] font-bold px-1.5 py-0.5 rounded-full ${l === t.id ? "bg-black/20 text-black" : "bg-zinc-700 text-zinc-300"}`,
                                              children: "MAX",
                                            }),
                                          e.jsx("span", {
                                            className: `text-[10px] font-mono ${(l === t.id, "text-zinc-500")}`,
                                            children: t.size,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: `text-[10px] mt-0.5 ${(l === t.id, "text-zinc-500")}`,
                                    children: t.desc,
                                  }),
                                ],
                              }),
                              l === t.id &&
                                e.jsx(at, {
                                  className: "w-3.5 h-3.5 flex-shrink-0 mt-0.5",
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
                    e.jsxs("label", {
                      className:
                        "text-[10px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5",
                      children: [
                        e.jsx(Xt, { className: "w-3 h-3" }),
                        "Language",
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-1.5",
                      children: Ct.map((t) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => a(t.code),
                            className: `px-3 py-1.5 rounded-full text-xs font-medium transition-all touch-manipulation active:scale-95 ${m === t.code ? "bg-white text-black" : "bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700"}`,
                            children: t.label,
                          },
                          String(t.code),
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      !C &&
        !H &&
        e.jsx("div", {
          className: "flex gap-2",
          children: [
            { id: "upload", label: "Upload File", Icon: Rt },
            { id: "record", label: "Record Mic", Icon: pe },
          ].map(({ id: t, label: i, Icon: o }) =>
            e.jsxs(
              "button",
              {
                onClick: () => _(t),
                className: `flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all touch-manipulation ${L === t ? "bg-white text-black" : "bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white"}`,
                children: [e.jsx(o, { className: "w-4 h-4" }), i],
              },
              t,
            ),
          ),
        }),
      !C &&
        !H &&
        L === "upload" &&
        e.jsxs("div", {
          ref: $,
          onClick: () => w.current?.click(),
          onDrop: (t) => {
            (t.preventDefault(),
              Me(t.dataTransfer.files[0]),
              $.current?.classList.remove("border-zinc-500"));
          },
          onDragOver: (t) => t.preventDefault(),
          onDragEnter: (t) => {
            (t.preventDefault(), $.current?.classList.add("border-zinc-500"));
          },
          onDragLeave: () => $.current?.classList.remove("border-zinc-500"),
          className:
            "border border-dashed border-zinc-700 hover:border-zinc-500 bg-zinc-900/40 rounded-2xl p-10 sm:p-14 text-center cursor-pointer transition-all duration-200 group active:scale-[0.99] touch-manipulation",
          children: [
            e.jsx("div", {
              className:
                "w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-zinc-700 transition-all",
              children: e.jsx(Bt, {
                className:
                  "w-6 h-6 text-zinc-300 group-hover:text-white transition-colors",
              }),
            }),
            e.jsx("p", {
              className: "text-white font-semibold text-sm mb-1.5",
              children: "Drop an audio file or tap to upload",
            }),
            e.jsx("p", {
              className:
                "text-zinc-400 text-xs leading-relaxed max-w-xs mx-auto",
              children: "MP3 · WAV · M4A · OGG · FLAC · WebM · AAC · OPUS",
            }),
            e.jsx("p", {
              className: "text-zinc-600 text-[11px] mt-3",
              children: "Any length — processing happens fully on your device",
            }),
            e.jsx("input", {
              ref: w,
              type: "file",
              accept: Mt,
              className: "hidden",
              onChange: (t) => {
                (Me(t.target.files[0]), (t.target.value = ""));
              },
            }),
          ],
        }),
      !C &&
        L === "record" &&
        e.jsx("div", {
          className:
            "bg-zinc-900 border border-zinc-700 rounded-2xl p-8 flex flex-col items-center gap-5",
          children: H
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className:
                      "relative w-24 h-24 flex items-center justify-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "absolute inset-0 rounded-full border-2 border-white/20 animate-ping",
                        style: { animationDuration: "1.8s" },
                      }),
                      e.jsx("div", {
                        className:
                          "absolute inset-2 rounded-full border border-white/10 animate-ping",
                        style: {
                          animationDuration: "1.8s",
                          animationDelay: "0.4s",
                        },
                      }),
                      e.jsx("div", {
                        className:
                          "w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center z-10",
                        children: e.jsx(pe, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-center space-y-1",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-zinc-400 text-xs uppercase tracking-widest font-bold",
                        children: "Recording",
                      }),
                      e.jsx("p", {
                        className:
                          "text-3xl font-mono font-bold text-white tabular-nums",
                        children: he(R),
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: bt,
                    className:
                      "flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-sm active:scale-95 transition-all touch-manipulation shadow-[0_0_30px_rgba(255,255,255,0.10)]",
                    children: [
                      e.jsx(Pt, { className: "w-4 h-4" }),
                      "Stop & Process",
                    ],
                  }),
                ],
              })
            : e.jsxs(e.Fragment, {
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center",
                    children: e.jsx(pe, { className: "w-8 h-8 text-zinc-400" }),
                  }),
                  e.jsxs("div", {
                    className: "text-center space-y-1",
                    children: [
                      e.jsx("p", {
                        className: "text-white font-semibold text-sm",
                        children: "Ready to record",
                      }),
                      e.jsx("p", {
                        className: "text-zinc-500 text-xs",
                        children: "Uses your microphone · fully on-device",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: gt,
                    className:
                      "flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-black font-bold text-sm active:scale-95 transition-all touch-manipulation",
                    children: [
                      e.jsx(pe, { className: "w-4 h-4" }),
                      "Start Recording",
                    ],
                  }),
                ],
              }),
        }),
      te &&
        e.jsxs("div", {
          className:
            "flex items-center justify-center gap-3 py-8 text-zinc-400 bg-zinc-900 border border-zinc-700 rounded-2xl",
          children: [
            e.jsx(J, { className: "w-5 h-5" }),
            e.jsx("span", {
              className: "text-sm",
              children: "Decoding audio to 16 kHz PCM…",
            }),
          ],
        }),
      F &&
        e.jsxs("div", {
          className:
            "flex items-start gap-3 p-4 bg-zinc-900 border border-zinc-700 rounded-2xl",
          children: [
            e.jsx(Xe, {
              className: "w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5",
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-sm font-medium text-white",
                  children: "Decode failed",
                }),
                e.jsx("p", {
                  className: "text-zinc-400 text-xs mt-0.5",
                  children: F,
                }),
              ],
            }),
          ],
        }),
      Re &&
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
                      children: e.jsx(At, {
                        className: "w-3.5 h-3.5 text-zinc-300",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-white truncate",
                          children: C.name,
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-zinc-400",
                          children: [
                            rt(C.size),
                            " · ",
                            he(x),
                            Ce > 0 && ` · ${Ce.toLocaleString()} words`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("button", {
                  "aria-label": "Close",
                  onClick: Ue,
                  className:
                    "p-2 text-zinc-500 hover:text-white hover:bg-zinc-700 rounded-xl transition-colors flex-shrink-0 touch-manipulation",
                  children: e.jsx(It, { className: "w-4 h-4" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-black rounded-2xl overflow-hidden border border-zinc-800",
              children: [
                e.jsx("div", {
                  className: "relative cursor-pointer select-none",
                  onClick: jt,
                  title: "Click to seek",
                  children: e.jsx("canvas", {
                    ref: _e,
                    className: "w-full h-28 sm:h-36 block",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex justify-between items-center px-4 py-2 border-t border-zinc-900",
                  children: [
                    e.jsx("span", {
                      className: "text-xs font-mono text-zinc-400",
                      children: ne(ut),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[10px] text-zinc-600 tracking-wider uppercase",
                      children:
                        Q === "playing"
                          ? "▶ playing"
                          : Q === "paused"
                            ? "⏸ paused"
                            : "",
                    }),
                    e.jsx("span", {
                      className: "text-xs font-mono text-zinc-400",
                      children: ne(x),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center justify-center gap-4 pb-5 pt-2",
                  children: [
                    e.jsx("button", {
                      onClick: () => xe(-10),
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all touch-manipulation active:scale-95",
                      title: "Back 10s",
                      children: e.jsx(Yt, { className: "w-4 h-4" }),
                    }),
                    Q === "playing"
                      ? e.jsx("button", {
                          "aria-label": "Pause",
                          onClick: We,
                          className:
                            "w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all active:scale-95 flex-shrink-0 touch-manipulation",
                          children: e.jsx(Ht, { className: "w-6 h-6" }),
                        })
                      : e.jsx("button", {
                          "aria-label": "Play",
                          onClick: ue,
                          disabled: !Re,
                          className:
                            "w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] disabled:bg-zinc-800 disabled:border disabled:border-zinc-700 disabled:text-zinc-600 disabled:shadow-none transition-all active:scale-95 disabled:cursor-not-allowed flex-shrink-0 touch-manipulation",
                          children: e.jsx(Ot, { className: "w-6 h-6 ml-1" }),
                        }),
                    e.jsx("button", {
                      onClick: () => xe(10),
                      className:
                        "w-10 h-10 flex items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all touch-manipulation active:scale-95",
                      title: "Forward 10s",
                      children: e.jsx(Vt, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between gap-2 flex-wrap",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2.5",
                      children: [
                        e.jsx("span", {
                          className: "text-sm font-semibold text-white",
                          children: "Transcription",
                        }),
                        V &&
                          e.jsxs("span", {
                            className:
                              "text-xs text-zinc-400 flex items-center gap-1.5",
                            children: [
                              e.jsx(J, { className: "w-3 h-3" }),
                              ge < 5 ? "Starting…" : `${ge}%`,
                            ],
                          }),
                        ee &&
                          !V &&
                          e.jsxs("span", {
                            className:
                              "flex items-center gap-1 text-xs text-zinc-300 font-medium",
                            children: [
                              e.jsx(at, {
                                className: "w-3.5 h-3.5 text-white",
                              }),
                              E.length,
                              " paragraphs ·",
                              " ",
                              Ce.toLocaleString(),
                              " words",
                            ],
                          }),
                      ],
                    }),
                    ee &&
                      !V &&
                      e.jsx("button", {
                        onClick: Qe,
                        className:
                          "text-xs px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors touch-manipulation",
                        children: "Re-transcribe",
                      }),
                  ],
                }),
                ge > 0 &&
                  e.jsxs("div", {
                    className:
                      "relative h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className: `absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${ee ? "bg-white" : "bg-zinc-300"}`,
                        style: { width: `${ge}%` },
                      }),
                      V &&
                        e.jsx("div", {
                          className:
                            "absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/20 to-transparent animate-pulse",
                        }),
                    ],
                  }),
                V &&
                  (Ke || nt) &&
                  e.jsx("div", {
                    className:
                      "px-3 py-2.5 bg-zinc-950 rounded-xl border border-zinc-800",
                    children: Ke
                      ? e.jsxs("p", {
                          className:
                            "text-xs text-zinc-500 italic flex items-center gap-1.5",
                          children: [
                            e.jsx(J, { className: "w-3 h-3 flex-shrink-0" }),
                            "Adjusting settings, retrying…",
                          ],
                        })
                      : e.jsxs("p", {
                          className:
                            "text-xs text-zinc-400 italic leading-relaxed line-clamp-3",
                          children: [
                            nt,
                            e.jsx("span", {
                              className: "animate-pulse ml-0.5",
                              children: "▍",
                            }),
                          ],
                        }),
                  }),
                qe &&
                  e.jsxs("div", {
                    className:
                      "flex items-start gap-2.5 p-3 bg-zinc-950 rounded-xl border border-zinc-800",
                    children: [
                      e.jsx(Xe, {
                        className: "w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-300",
                        children: qe,
                      }),
                    ],
                  }),
                !ee &&
                  !V &&
                  e.jsx("button", {
                    onClick: Qe,
                    disabled: !kt,
                    className:
                      "w-full flex items-center justify-center gap-2 text-sm font-bold px-5 py-3.5 rounded-xl bg-white text-black hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-[0.98]",
                    children:
                      j !== "ready"
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(J, { className: "w-4 h-4" }),
                              "Loading Whisper model…",
                            ],
                          })
                        : T
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(it, { className: "w-4 h-4" }),
                                "Transcribe Audio",
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(J, { className: "w-4 h-4" }),
                                "Decoding audio…",
                              ],
                            }),
                  }),
              ],
            }),
            ee &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-4 py-3.5 border-b border-zinc-800",
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
                            className:
                              "text-[10px] text-zinc-600 hidden sm:inline",
                            children:
                              "click text to edit · click timestamp to seek",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsxs("button", {
                            onClick: zt,
                            className:
                              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors touch-manipulation",
                            children: [
                              e.jsx(_t, { className: "w-3 h-3" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Copy",
                              }),
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: Nt,
                            className:
                              "flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors touch-manipulation",
                            children: [
                              e.jsx(Et, { className: "w-3 h-3" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "TXT",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-3 px-4 py-2.5 border-b border-zinc-800/50 bg-zinc-950/40",
                    children: [
                      e.jsx(qt, { className: "w-3.5 h-3.5 text-zinc-500" }),
                      e.jsx("span", {
                        className: "text-[11px] text-zinc-500 flex-1",
                        children: "Show timestamps",
                      }),
                      e.jsx("div", {
                        role: "button",
                        tabIndex: 0,
                        onClick: () => $e((t) => !t),
                        onKeyDown: (t) => t.key === " " && $e((i) => !i),
                        style: {
                          flexShrink: 0,
                          width: 36,
                          height: 20,
                          borderRadius: 10,
                          padding: 2,
                          backgroundColor: W
                            ? "#ffffff"
                            : "rgba(255,255,255,0.12)",
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: W ? "flex-end" : "flex-start",
                          transition: "background-color 0.2s",
                          cursor: "pointer",
                        },
                        children: e.jsx("div", {
                          style: {
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: W ? "#000" : "#71717a",
                            flexShrink: 0,
                            transition: "background-color 0.2s",
                          },
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "divide-y divide-zinc-800/30 max-h-[560px] overflow-y-auto",
                    children: E.map((t, i) =>
                      e.jsx(
                        ss,
                        {
                          para: t,
                          index: i,
                          onTextChange: yt,
                          isActive: i === dt,
                          onTimestampClick: wt,
                          showTimestamps: W,
                        },
                        i,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-4 py-2.5 border-t border-zinc-800 bg-zinc-950/30",
                    children: [
                      e.jsxs("span", {
                        className: "text-[10px] text-zinc-600 font-mono",
                        children: [
                          E.length,
                          " paras · ",
                          Ce.toLocaleString(),
                          " words",
                        ],
                      }),
                      e.jsx("span", {
                        className: "text-[10px] text-zinc-600",
                        children: "Editable · Timestamps seekable",
                      }),
                    ],
                  }),
                ],
              }),
            ee &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-700 rounded-2xl p-4 space-y-4",
                children: [
                  e.jsx("h3", {
                    className:
                      "text-xs font-bold text-zinc-300 uppercase tracking-widest",
                    children: "Export PDF",
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("label", {
                        className:
                          "text-[10px] font-bold text-zinc-500 uppercase tracking-widest",
                        children: "Layout Style",
                      }),
                      e.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: Tt.map((t) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => xt(t.id),
                              className: `flex flex-col items-center gap-1.5 py-4 px-2 rounded-xl transition-all touch-manipulation active:scale-95 ${Ne === t.id ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-700"}`,
                              children: [
                                e.jsx("span", {
                                  className: "text-xl font-mono leading-none",
                                  children: t.icon,
                                }),
                                e.jsx("span", {
                                  className: "text-[11px] font-bold",
                                  children: t.label,
                                }),
                                e.jsx("span", {
                                  className: `text-[9px] text-center leading-tight ${Ne === t.id ? "text-zinc-600" : "text-zinc-500"}`,
                                  children: t.desc,
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
                    className: "grid grid-cols-2 gap-2",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                            children: "Timestamps",
                          }),
                          e.jsx(ct, {
                            value: W,
                            onChange: $e,
                            label: W ? "Included" : "Hidden",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[10px] font-bold text-zinc-600 uppercase tracking-widest",
                            children: "Page Numbers",
                          }),
                          e.jsx(ct, {
                            value: ke,
                            onChange: mt,
                            label: ke ? "Shown" : "Hidden",
                          }),
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
                              "text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5",
                            children: [
                              e.jsx(Wt, { className: "w-3 h-3" }),
                              "Font Size",
                            ],
                          }),
                          e.jsxs("span", {
                            className:
                              "text-xs font-mono text-white font-semibold",
                            children: [Se, "pt"],
                          }),
                        ],
                      }),
                      e.jsx("input", {
                        type: "range",
                        min: "9",
                        max: "14",
                        step: "1",
                        value: Se,
                        onChange: (t) => pt(parseInt(t.target.value)),
                        className:
                          "w-full h-1.5 accent-white cursor-pointer rounded-full",
                      }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between text-[10px] text-zinc-600",
                        children: [
                          e.jsx("span", { children: "9pt compact" }),
                          e.jsx("span", { children: "14pt large" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: vt,
                    disabled: !ee || Ze,
                    className:
                      "w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed transition-all touch-manipulation active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.06)]",
                    children: Ze
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(J, { className: "w-4 h-4" }),
                            "Building PDF…",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(Kt, { className: "w-4 h-4" }),
                            "Export Transcript as PDF",
                          ],
                        }),
                  }),
                  e.jsxs("p", {
                    className:
                      "text-[10px] text-zinc-600 flex items-start gap-1.5",
                    children: [
                      e.jsx(Xe, { className: "w-3 h-3 flex-shrink-0 mt-0.5" }),
                      "100% on-device — no audio or text ever leaves your browser.",
                    ],
                  }),
                ],
              }),
          ],
        }),
      Re &&
        e.jsx("p", {
          className: "hidden sm:block text-center text-[10px] text-zinc-700",
          children:
            "Space play/pause · ←/→ skip 10s · Click waveform to seek · Click timestamp to jump",
        }),
    ],
  });
}
export { as as default };
