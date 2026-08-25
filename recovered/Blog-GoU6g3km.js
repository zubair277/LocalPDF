import{j as e,r as p}from"./react-vendor-Bc7KCos-.js";function f(){const[i,a]=p.useState(0);return p.useEffect(()=>{const t=()=>{const o=document.documentElement.scrollHeight-window.innerHeight;a(o>0?window.scrollY/o*100:0)};return window.addEventListener("scroll",t,{passive:!0}),()=>window.removeEventListener("scroll",t)},[]),i}function u(i){const[a,t]=p.useState(i[0]);return p.useEffect(()=>{const o=i.map(l=>{const h=document.getElementById(l);if(!h)return null;const m=new IntersectionObserver(([x])=>{x.isIntersecting&&t(l)},{rootMargin:"-30% 0px -60% 0px"});return m.observe(h),m});return()=>o.forEach(l=>l&&l.disconnect())},[i]),a}function r({children:i,lang:a=""}){const[t,o]=p.useState(!1),l=()=>{navigator.clipboard.writeText(i.trim()).then(()=>{o(!0),setTimeout(()=>o(!1),2e3)})};return e.jsxs("div",{style:{position:"relative",margin:"28px 0",borderRadius:"4px",border:"1px solid #222",background:"#0a0a0a",overflow:"hidden"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",borderBottom:"1px solid #1a1a1a",background:"#0f0f0f"},children:[e.jsx("span",{style:{fontSize:"11px",color:"#444",fontFamily:"'DM Mono', monospace",letterSpacing:"0.06em",textTransform:"uppercase"},children:a}),e.jsx("button",{onClick:l,style:{fontSize:"11px",color:t?"#888":"#333",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Mono', monospace",letterSpacing:"0.05em",transition:"color 0.2s"},children:t?"COPIED":"COPY"})]}),e.jsx("pre",{style:{margin:0,padding:"20px",overflow:"auto",fontSize:"12.5px",lineHeight:"1.8",fontFamily:"'DM Mono', monospace",color:"#aaa",whiteSpace:"pre"},children:e.jsx("code",{children:i.trim()})})]})}function d({label:i,children:a}){return e.jsxs("div",{style:{margin:"28px 0",padding:"20px 24px",borderLeft:"2px solid #333",background:"#0d0d0d"},children:[e.jsx("div",{style:{fontSize:"10px",color:"#555",fontFamily:"'DM Mono', monospace",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"10px"},children:i}),e.jsx("p",{style:{margin:0,fontSize:"14px",color:"#888",lineHeight:"1.8"},children:a})]})}function y({left:i,right:a}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",margin:"28px 0",background:"#1a1a1a"},children:[i,a].map((t,o)=>e.jsxs("div",{style:{background:"#0a0a0a",padding:"24px"},children:[e.jsx("div",{style:{fontSize:"10px",color:o===0?"#444":"#666",fontFamily:"'DM Mono', monospace",letterSpacing:"0.1em",marginBottom:"16px"},children:o===0?"✕  SERVER-SIDE":"✓  CLIENT-SIDE"}),e.jsx("ul",{style:{margin:0,padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:"10px"},children:t.map((l,h)=>e.jsxs("li",{style:{fontSize:"13px",color:o===0?"#555":"#888",lineHeight:"1.6",paddingLeft:"16px",position:"relative"},children:[e.jsx("span",{style:{position:"absolute",left:0,color:o===0?"#3a3a3a":"#555"},children:"—"}),l]},h))})]},o))})}function b({stats:i}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i.length}, 1fr)`,gap:"1px",margin:"28px 0",background:"#1a1a1a"},children:i.map((a,t)=>e.jsxs("div",{style:{background:"#0a0a0a",padding:"24px 20px"},children:[e.jsx("div",{style:{fontSize:"28px",fontWeight:700,color:"#ddd",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-0.02em",marginBottom:"6px"},children:a.value}),e.jsx("div",{style:{fontSize:"11px",color:"#444",fontFamily:"'DM Mono', monospace",letterSpacing:"0.07em",textTransform:"uppercase"},children:a.label})]},t))})}function v(){const i=[{device:"Smartphone",ram:"50 MB",dpi:"300",batch:"10 pages",scale:"0.6 – 0.8×"},{device:"Tablet",ram:"75 MB",dpi:"450",batch:"25 pages",scale:"0.8 – 1.2×"},{device:"Desktop",ram:"150 MB",dpi:"600",batch:"50 pages",scale:"1.0 – 2.0×"}];return e.jsx("div",{style:{margin:"28px 0",overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px"},children:[e.jsx("thead",{children:e.jsx("tr",{style:{borderBottom:"1px solid #222"},children:["Device","Max File","Max DPI","Batch Size","Scale"].map(a=>e.jsx("th",{style:{padding:"10px 16px",textAlign:"left",fontFamily:"'DM Mono', monospace",fontSize:"10px",color:"#444",letterSpacing:"0.08em",textTransform:"uppercase",fontWeight:400},children:a},a))})}),e.jsx("tbody",{children:i.map((a,t)=>e.jsxs("tr",{style:{borderBottom:"1px solid #111"},children:[e.jsx("td",{style:{padding:"14px 16px",color:"#ccc",fontWeight:500},children:a.device}),e.jsx("td",{style:{padding:"14px 16px",color:"#777",fontFamily:"'DM Mono', monospace",fontSize:"12px"},children:a.ram}),e.jsx("td",{style:{padding:"14px 16px",color:"#777",fontFamily:"'DM Mono', monospace",fontSize:"12px"},children:a.dpi}),e.jsx("td",{style:{padding:"14px 16px",color:"#777",fontFamily:"'DM Mono', monospace",fontSize:"12px"},children:a.batch}),e.jsx("td",{style:{padding:"14px 16px",color:"#777",fontFamily:"'DM Mono', monospace",fontSize:"12px"},children:a.scale})]},t))})]})})}function c({number:i,children:a}){return e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"20px",margin:"64px 0 28px"},children:[e.jsx("span",{style:{fontFamily:"'DM Mono', monospace",fontSize:"11px",color:"#333",letterSpacing:"0.1em",flexShrink:0,paddingTop:"4px"},children:String(i).padStart(2,"0")}),e.jsx("h2",{style:{margin:0,fontSize:"22px",fontWeight:700,color:"#e8e8e8",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-0.01em",lineHeight:1.3},children:a})]})}function s({children:i}){return e.jsx("h3",{style:{margin:"36px 0 14px",fontSize:"15px",fontWeight:600,color:"#bbb",letterSpacing:"-0.01em"},children:i})}function n({children:i}){return e.jsx("p",{style:{margin:"0 0 16px",fontSize:"15px",color:"#777",lineHeight:"1.85"},children:i})}const g=[{id:"intro",label:"The Challenge"},{id:"architecture",label:"Architecture"},{id:"memory",label:"Memory"},{id:"features",label:"Features"},{id:"ai",label:"AI & Chat"},{id:"device",label:"Device Adapt."},{id:"security",label:"Security"}];function j(){const i=f(),a=u(g.map(t=>t.id));return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080808; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::selection { background: #333; color: #fff; }
      `}),e.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,height:"2px",background:"#111",zIndex:100},children:e.jsx("div",{style:{height:"100%",width:`${i}%`,background:"#888",transition:"width 0.1s linear"}})}),e.jsx("div",{style:{position:"fixed",top:"28px",left:"32px",zIndex:50},children:e.jsxs("a",{href:"/",style:{display:"inline-flex",alignItems:"center",gap:"8px",fontSize:"11px",color:"#444",fontFamily:"'DM Mono', monospace",letterSpacing:"0.08em",textDecoration:"none",textTransform:"uppercase",transition:"color 0.2s"},onMouseEnter:t=>t.currentTarget.style.color="#999",onMouseLeave:t=>t.currentTarget.style.color="#444",children:[e.jsx("svg",{width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back"]})}),e.jsx("nav",{style:{position:"fixed",left:"32px",top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",gap:"6px",zIndex:40},children:g.map(t=>e.jsxs("a",{href:`#${t.id}`,style:{display:"flex",alignItems:"center",gap:"10px",textDecoration:"none",transition:"all 0.2s",opacity:a===t.id?1:.3},onMouseEnter:o=>o.currentTarget.style.opacity="0.8",onMouseLeave:o=>o.currentTarget.style.opacity=a===t.id?"1":"0.3",children:[e.jsx("div",{style:{width:a===t.id?"20px":"8px",height:"1px",background:a===t.id?"#999":"#555",transition:"all 0.3s ease"}}),e.jsx("span",{style:{fontSize:"10px",fontFamily:"'DM Mono', monospace",color:a===t.id?"#aaa":"#555",letterSpacing:"0.07em",whiteSpace:"nowrap",display:a===t.id?"inline":"none"},children:t.label})]},t.id))}),e.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",background:"#080808",minHeight:"100vh",color:"#777"},children:[e.jsxs("header",{style:{maxWidth:"720px",margin:"0 auto",padding:"140px 32px 80px",borderBottom:"1px solid #111"},children:[e.jsx("div",{style:{fontSize:"10px",fontFamily:"'DM Mono', monospace",color:"#333",letterSpacing:"0.15em",textTransform:"uppercase",marginBottom:"32px"},children:"Engineering — ihatepdf"}),e.jsxs("h1",{style:{fontSize:"clamp(32px, 5vw, 52px)",fontWeight:900,color:"#f0f0f0",fontFamily:"'Playfair Display', Georgia, serif",letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:"28px"},children:["Building a Client‑Side",e.jsx("br",{}),e.jsx("span",{style:{color:"#555"},children:"PDF Engine"})]}),e.jsx("p",{style:{fontSize:"16px",color:"#666",lineHeight:"1.85",maxWidth:"560px",marginBottom:"48px"},children:"How ihatepdf processes 150 MB+ documents entirely in your browser — zero server uploads, zero privacy exposure — using WebAssembly, intelligent memory management, and device-adaptive processing."}),e.jsx(b,{stats:[{value:"0",label:"Server uploads"},{value:"70%",label:"Max compression"},{value:"600",label:"Max DPI export"},{value:"150 MB",label:"Max file size"}]}),e.jsx("div",{style:{display:"flex",gap:"24px",marginTop:"8px"},children:[{icon:"◎",label:"100% Private"},{icon:"◈",label:"Works Offline"},{icon:"◇",label:"No Watermark"}].map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{color:"#444",fontSize:"14px"},children:t.icon}),e.jsx("span",{style:{fontSize:"12px",color:"#555",fontFamily:"'DM Mono', monospace",letterSpacing:"0.04em"},children:t.label})]},t.label))})]}),e.jsxs("main",{style:{maxWidth:"720px",margin:"0 auto",padding:"0 32px 120px"},children:[e.jsxs("section",{id:"intro",children:[e.jsx(c,{number:1,children:"The Challenge"}),e.jsx(n,{children:"Processing PDFs in the browser is notoriously difficult. Traditional web apps upload files to servers, process them remotely, and return results. This approach has critical flaws for privacy-sensitive documents: contracts, medical records, financial statements."}),e.jsx(n,{children:"The core problem — PDFs are complex binary formats requiring significant RAM. A 50 MB PDF with images needs 200–300 MB to process. Multiply across concurrent users and server costs skyrocket. More importantly, sensitive documents shouldn't leave your device at all."}),e.jsx(y,{left:["Privacy risk — files travel over the network","Upload/download bandwidth waste","Server costs and scaling problems","Network latency on every operation","Single point of failure for breaches"],right:["Complete privacy — bytes never leave device","Instant — no network round-trip","Zero infrastructure cost","Works fully offline after first load","No server = no server breach possible"]}),e.jsx(d,{label:"The core insight",children:`JavaScript wasn't designed for heavy binary processing. A single PDF operation can block the main thread, freeze the UI, or crash the tab if memory isn't carefully managed. This is why most "free" tools either cap file sizes severely or require paid subscriptions.`})]}),e.jsxs("section",{id:"architecture",children:[e.jsx(c,{number:2,children:"Technical Architecture"}),e.jsx(s,{children:"Core Libraries"}),e.jsx(n,{children:"Two WebAssembly-powered engines handle all processing. Both run entirely inside the browser tab — no native installation, no server dependency."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"#1a1a1a",margin:"28px 0"},children:[{name:"pdf-lib",version:"v1.17.1 · ~400 KB",desc:"PDF manipulation engine. Merges, splits, adds pages, edits metadata. Works at the PDF structure level — copies pages without re-rendering, making merges instant.",why:"Handles PDF internals: form fields, annotations, encryption — that most libraries skip entirely."},{name:"pdf.js",version:"v3.11.174 · ~2 MB",desc:"Mozilla's PDF rendering engine — the same one Firefox uses natively. Converts pages to Canvas for pixel-perfect previews and high-DPI image export.",why:"Worker architecture offloads heavy parsing to a separate thread, keeping the UI thread responsive."}].map(t=>e.jsxs("div",{style:{background:"#0a0a0a",padding:"24px"},children:[e.jsx("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:"14px",color:"#ccc",marginBottom:"8px"},children:t.name}),e.jsx("div",{style:{fontFamily:"'DM Mono', monospace",fontSize:"10px",color:"#333",marginBottom:"14px",letterSpacing:"0.05em"},children:t.version}),e.jsx("p",{style:{fontSize:"13px",color:"#666",lineHeight:"1.75",marginBottom:"14px"},children:t.desc}),e.jsx("p",{style:{fontSize:"12px",color:"#555",lineHeight:"1.7",fontStyle:"italic"},children:t.why})]},t.name))}),e.jsx(s,{children:"Storage Strategy"}),e.jsx(n,{children:"Three-tier storage solves different problems. The key rule: keep data as ArrayBuffer as long as possible — converting to strings increases memory 3–5×."}),e.jsx(r,{lang:"javascript",children:`
// ── Tier 1: IndexedDB — large binary files ────────────────
const dbSet = async (key, val) => {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('ihatepdf-store', 'readwrite');
    tx.objectStore('ihatepdf-store').put(val, key);
    tx.oncomplete = () => resolve();
    tx.onerror   = () => reject(tx.error);
  });
};

// ── Tier 2: localStorage — metadata only (no file bytes) ─
localStorage.setItem('ihatepdf_history', JSON.stringify(history));

// ── Tier 3: RAM — active processing (volatile) ───────────
const pdfDoc = await PDFDocument.load(arrayBuffer);
            `}),e.jsx(d,{label:"Why IndexedDB for files",children:"localStorage has a 5–10 MB limit and stores data as strings, doubling memory usage. IndexedDB stores binary data natively and can handle gigabytes. The trade-off: async API requiring Promise handling everywhere — but the capacity difference is non-negotiable for large PDFs."})]}),e.jsxs("section",{id:"memory",children:[e.jsx(c,{number:3,children:"Memory Management"}),e.jsx(n,{children:"The app dynamically adjusts limits based on device type and available memory. A 4 GB RAM phone typically has 1–1.5 GB available for browser tabs. A single 100 MB PDF can consume 300–400 MB during processing — 3–4× overhead for rendering."}),e.jsx(r,{lang:"javascript",children:`
const getDeviceCapabilities = () => {
  const isMobile   = /Android|iPhone/i.test(navigator.userAgent);
  const deviceMem  = navigator.deviceMemory || 4; // GB (not in Safari)

  if (isMobile && screen.width < 768) {
    return {
      maxFileSize:       50  * 1024 * 1024,  // 50 MB
      maxDPI:            300,
      maxPagesPerBatch:  10,
      warningThreshold:  30  * 1024 * 1024,
    };
  }
  if (deviceMem < 4) {
    return { maxFileSize: 100 * 1024 * 1024, maxDPI: 450, maxPagesPerBatch: 30 };
  }
  return {
    maxFileSize:       150 * 1024 * 1024,  // 150 MB — high-end desktop
    maxDPI:            600,
    maxPagesPerBatch:  50,
  };
};
            `}),e.jsx(v,{}),e.jsx(s,{children:"Memory Estimation Algorithm"}),e.jsx(n,{children:"Before any heavy operation, the app estimates RAM consumption. Memory scales quadratically with scale — 2× scale means 4× memory usage — and PNG needs ~1.5× more than JPEG."}),e.jsx(r,{lang:"javascript",children:`
const estimateMemoryUsage = (fileSize, pageCount, scale, format) => {
  const basePerPage    = 5 * 1024 * 1024;       // ~5 MB at scale 1.0
  const scaleFactor    = Math.pow(scale, 2);     // quadratic growth
  const fmtMultiplier  = format === 'png' ? 1.5 : 1.0;
  const estimated      = pageCount * basePerPage * scaleFactor * fmtMultiplier;
  return { estimated, withSafety: estimated * 1.5 }; // 50% safety margin
};

// Warn user before starting if this will exhaust device memory
if (estimate.withSafety > (navigator.deviceMemory || 4) * 1e9 * 0.5) {
  alert('⚠ Reduce DPI or page count before continuing.');
}
            `}),e.jsx(s,{children:"Canvas Memory — The Hidden Cost"}),e.jsxs(n,{children:["Each canvas element allocates GPU texture memory in addition to RAM. A 4000×6000 canvas uses 96 MB of RAM ",e.jsx("em",{children:"plus"})," 96 MB of VRAM. On devices with shared memory (most mobile), that's 192 MB gone per page."]}),e.jsx(r,{lang:"javascript",children:`
// ✕ BAD — memory leak, canvas stays allocated indefinitely
const canvas = document.createElement('canvas');
canvas.width  = 4000;
canvas.height = 6000;
// ... use canvas, then forget it

// ✓ GOOD — explicit GPU + RAM release
const canvas = document.createElement('canvas');
canvas.width  = 4000;
canvas.height = 6000;

const blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.95));
await processBlob(blob);

canvas.width  = 0;   // ← triggers immediate GPU memory release
canvas.height = 0;
canvas = null;
            `}),e.jsx(s,{children:"Batch Processing"}),e.jsx(n,{children:"When converting 100+ pages, processing all at once crashes the browser. The solution: intelligent batching with deliberate pauses for garbage collection."}),e.jsx(r,{lang:"javascript",children:`
const processBatches = async (allPages, batchSize) => {
  const batches = [];
  for (let i = 0; i < allPages.length; i += batchSize)
    batches.push(allPages.slice(i, i + batchSize));

  for (let b = 0; b < batches.length; b++) {
    for (const page of batches[b]) {
      const canvas = await renderPage(page);
      await downloadImage(canvas);
      canvas.width = canvas.height = 0;   // free immediately
    }

    if (b < batches.length - 1) {
      // 2 s pause — Chrome GC triggers after ~1–1.5 s idle
      await new Promise(r => setTimeout(r, 2000));
      if (window.gc) window.gc(); // hint only — browser may ignore
    }
  }
};
            `})]}),e.jsxs("section",{id:"features",children:[e.jsx(c,{number:4,children:"Feature Implementation"}),e.jsx(s,{children:"PDF Compression — Ghostscript via WebAssembly"}),e.jsx(n,{children:"The compression engine uses Ghostscript compiled to WebAssembly — the same tool used by professional PDF software. Unlike simple image re-compression, Ghostscript optimizes the entire PDF structure: font subsetting, object-stream compression, and intelligent image downsampling."}),e.jsx(r,{lang:"javascript",children:`
const qualityPresets = {
  '/screen':   { dpi: 72,  jpeg: 40 },  // Screen viewing
  '/ebook':    { dpi: 150, jpeg: 60 },  // Tablets, e-readers
  '/printer':  { dpi: 300, jpeg: 80 },  // Office printing
  '/prepress': { dpi: 300, jpeg: 92 },  // Professional print
};

// Runs in a Web Worker — UI stays responsive during 10–30 s compression
const worker = new Worker('/background-worker.js');
worker.postMessage({ data: { psDataURL: blobUrl, config }, target: 'wasm' });
worker.onmessage = async (e) => {
  const response      = await fetch(e.data);
  const compressedBlob = await response.blob();
};
            `}),e.jsx(d,{label:"What Ghostscript actually does",children:"Five simultaneous optimisations: (1) image downsampling via bicubic interpolation, (2) JPEG recompression at the target quality level, (3) font subsetting — trims embedded fonts to only characters used (up to 90% reduction), (4) metadata stripping, (5) stream recompression with the most efficient lossless algorithm. Text and vector graphics are entirely unaffected."}),e.jsx(s,{children:"High-DPI PDF → Image Conversion"}),e.jsx(n,{children:"The converter supports up to 600 DPI with automatic device-aware limits, a canvas size clamp at 16 384 px, and batch mode for large documents."}),e.jsx(r,{lang:"javascript",children:`
// 72 DPI is the browser's base resolution (1 CSS px = 1 device px @ 1× zoom)
// All DPI targets are expressed as a scale multiplier from this base.
const dpiToScale = (dpi) => dpi / 72;
// 300 DPI → 4.17×   |   600 DPI → 8.33×

const getOptimalScale = (viewport, requested) => {
  const MAX = 16384; // hard browser canvas limit
  const w   = viewport.width  * requested;
  const h   = viewport.height * requested;
  if (w > MAX || h > MAX) {
    const safe = Math.min(MAX / viewport.width, MAX / viewport.height);
    return safe * 0.95; // 5 % margin — some browsers enforce 16383
  }
  return requested;
};

const renderPageToCanvas = async (page, scale) => {
  const viewport    = page.getViewport({ scale });
  const pixelRatio  = Math.min(window.devicePixelRatio || 1, 2); // cap at 2×
  const canvas      = document.createElement('canvas');

  canvas.width  = Math.floor(viewport.width  * pixelRatio);
  canvas.height = Math.floor(viewport.height * pixelRatio);

  const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: false });
  ctx.fillStyle = 'white';   // PDF has no background — JPEG has no alpha
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingEnabled  = true;
  ctx.imageSmoothingQuality  = 'high';

  await page.render({ canvasContext: ctx, viewport, intent: 'print' }).promise;
  return canvas;
};
            `}),e.jsx(s,{children:"Safari-Compatible Downloads"}),e.jsx(n,{children:"Safari's security model blocks programmatic downloads. Three-method fallback: download.js → HTML5 anchor → window.open() which triggers iOS's share sheet."}),e.jsx(r,{lang:"javascript",children:`
const safariCompatibleDownload = (data, filename, mimeType) => {
  // Method 1 — download.js library
  if (typeof window.download === 'function') {
    window.download(data, filename, mimeType); return;
  }
  // Method 2 — HTML5 download attribute
  const blob = new Blob([data], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), {
    href: url, download: filename, style: 'display:none',
  });
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 1000);
};
            `})]}),e.jsxs("section",{id:"ai",children:[e.jsx(c,{number:5,children:"AI-Powered Chat with PDF"}),e.jsx(n,{children:"The Chat with PDF feature combines local text extraction with Google's Gemini 2.5 Flash API. The PDF binary never reaches Google's servers — pdf.js extracts plain text locally, which is sent as the prompt context. This balances privacy (no file uploads) with AI capability."}),e.jsx(r,{lang:"javascript",children:`
// Step 1 — Extract text locally with pdf.js
const extractText = async (file) => {
  const buffer = await readFileAsArrayBuffer(file);
  const pdf    = await window.pdfjsLib.getDocument({ data: buffer }).promise;
  let text     = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page    = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += \`\\n\\n--- Page \${i} ---\\n\${content.items.map(x => x.str).join(' ')}\`;
  }
  return text;
};

// Step 2 — Stream response from Gemini API
const res = await fetch(
  \`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?key=\${key}&alt=sse\`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: \`Document:\\n\${extractedText}\\n\\nQ: \${userQuery}\` }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
    }),
  }
);

// Step 3 — Parse SSE stream for real-time token output
const reader  = res.body.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  decoder.decode(value).split('\\n')
    .filter(l => l.startsWith('data: '))
    .forEach(l => {
      const token = JSON.parse(l.slice(6)).candidates?.[0]?.content?.parts?.[0]?.text;
      if (token) appendToUI(token);
    });
}
            `}),e.jsx(d,{label:"Why Gemini 2.5 Flash",children:'Handles 100-page PDFs (~50 000 tokens) in under 3 seconds. Costs 1/10th of GPT-4. Supports streaming responses so the UI feels instantaneous. Up to 10 PDFs can be loaded simultaneously with concatenated text and document separators — enabling cross-document queries like "Compare pricing between contracts A and B."'})]}),e.jsxs("section",{id:"device",children:[e.jsx(c,{number:6,children:"Adaptive Processing"}),e.jsx(n,{children:"The same codebase runs on a 2 GB RAM phone and a 32 GB workstation. Rather than blocking features on low-end devices, the app scales quality down automatically. A phone user still converts PDFs to images — just at 150 DPI instead of 600 DPI."}),e.jsx(r,{lang:"javascript",children:`
// Before any heavy operation, check device memory in real time
const memoryEstimate = estimateMemoryUsage(fileSize, pageCount, scale, format);
const availableGB    = navigator.deviceMemory || 4;
const estimatedGB    = memoryEstimate.withSafety / (1024 ** 3);

if (estimatedGB > availableGB * 0.5) {
  const proceed = confirm([
    \`⚠ This will use ~\${estimatedGB.toFixed(1)} GB.\`,
    \`Your device has ~\${availableGB} GB available.\`,
    'Recommendations:',
    '  • Reduce DPI or quality',
    '  • Process fewer pages',
    '  • Use JPEG instead of PNG',
    'Continue anyway?',
  ].join('\\n'));
  if (!proceed) return;
}

// Auto-enable batch mode for jobs that exceed per-device page limits
if (pageCount > deviceCaps.maxPagesPerBatch) {
  await processBatches(pagesToConvert, deviceCaps.maxPagesPerBatch);
}
            `}),e.jsx(d,{label:"What happens without these safeguards",children:"A user converting a 50-page PDF to 600 DPI on a phone would freeze the browser for 5+ minutes, consume 2–3 GB of RAM crashing the tab, potentially reboot the device on older phones, and lose all progress with no error message. With adaptive processing, the app either reduces quality automatically, enables batch mode, or warns the user upfront."})]}),e.jsxs("section",{id:"security",children:[e.jsx(c,{number:7,children:"Security & Privacy"}),e.jsx(n,{children:"ihatepdf operates on a simple principle: we can't leak what we never see. Files never touch our servers, third-party APIs, or external services. All processing happens in the browser's sandboxed environment."}),e.jsx(s,{children:"Data Flow Verification"}),e.jsx(n,{children:"Open DevTools → Network tab during any PDF operation. You will see zero upload requests to any external domain. Every byte of your document stays inside the browser tab."}),e.jsx(r,{lang:"javascript",children:`
// The complete data lifecycle — nothing external
FileReader.readAsArrayBuffer(file)   // → browser memory only
  → PDFDocument.load(arrayBuffer)    // → WebAssembly execution (local)
  → pdfDoc.save()                    // → new ArrayBuffer (local)
  → new Blob([bytes])                // → browser memory
  → URL.createObjectURL(blob)        // → local object URL
  → anchor.click()                   // → device storage
// No network request anywhere in this chain
            `}),e.jsx(s,{children:"Offline-First via Service Worker"}),e.jsx(n,{children:"After the first page load, all tools function without any internet connection. Enable airplane mode and process PDFs normally — the WebAssembly libraries are cached locally."}),e.jsx(r,{lang:"javascript",children:`
// sw.js — cache-first strategy
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ihatepdf-v1').then((cache) => cache.addAll([
      '/',
      'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
// Test: DevTools → Application → Service Workers → check "Offline" → reload
            `}),e.jsx(s,{children:"Three-Tier Storage Security"}),e.jsx("div",{style:{margin:"28px 0",display:"flex",flexDirection:"column",gap:"1px",background:"#1a1a1a"},children:[{tier:"RAM",type:"Volatile",detail:"Active PDFs, processing buffers. Wiped on tab close. Zero persistence.",code:"const pdfDoc = await PDFDocument.load(arrayBuffer);"},{tier:"IndexedDB",type:"Session",detail:"Large file buffers for resume capability. Same-origin isolated. Manual clear available.",code:"await dbSet('editor_file_buffer', arrayBuffer);"},{tier:"localStorage",type:"Metadata only",detail:"Filenames, timestamps, sizes. NO file content. Non-sensitive only.",code:"localStorage.setItem('ihatepdf_history', JSON.stringify(meta));"}].map(t=>e.jsxs("div",{style:{background:"#0a0a0a",padding:"20px 24px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"16px",marginBottom:"10px"},children:[e.jsx("span",{style:{fontFamily:"'DM Mono', monospace",fontSize:"12px",color:"#ccc"},children:t.tier}),e.jsx("span",{style:{fontFamily:"'DM Mono', monospace",fontSize:"10px",color:"#333",letterSpacing:"0.08em",textTransform:"uppercase"},children:t.type})]}),e.jsx("p",{style:{fontSize:"13px",color:"#666",lineHeight:"1.65",marginBottom:"12px"},children:t.detail}),e.jsx("code",{style:{fontSize:"11.5px",color:"#555",fontFamily:"'DM Mono', monospace"},children:t.code})]},t.tier))}),e.jsx(d,{label:"Privacy note",children:"All storage is origin-isolated and client-side. Clearing your browser data removes everything completely — no cloud sync, no backup, no recovery. The trade-off for absolute privacy is that there is no undo for deleted history."})]}),e.jsxs("div",{style:{marginTop:"96px",paddingTop:"48px",borderTop:"1px solid #111",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"10px",fontFamily:"'DM Mono', monospace",color:"#333",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"8px"},children:"ihatepdf — Engineering"}),e.jsx("p",{style:{fontSize:"13px",color:"#444"},children:"Performance · Privacy · Accessibility"})]}),e.jsx("a",{href:"/",style:{display:"inline-block",padding:"10px 24px",border:"1px solid #222",color:"#777",fontSize:"12px",fontFamily:"'DM Mono', monospace",letterSpacing:"0.06em",textDecoration:"none",textTransform:"uppercase",transition:"all 0.2s"},onMouseEnter:t=>{t.currentTarget.style.borderColor="#555",t.currentTarget.style.color="#ccc"},onMouseLeave:t=>{t.currentTarget.style.borderColor="#222",t.currentTarget.style.color="#777"},children:"Try all tools →"})]})]})]})]})}export{j as default};
