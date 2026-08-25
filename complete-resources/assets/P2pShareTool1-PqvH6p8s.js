import { r as l, j as e } from "./react-vendor-Bc7KCos-.js";
const g = ({ d: s, children: a, className: x, vb: f = "0 0 24 24" }) =>
    e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: f,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: x,
      children: s ? e.jsx("path", { d: s }) : a,
    }),
  d = {
    Upload: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "17 8 12 3 7 8" }),
          e.jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" }),
        ],
      }),
    Download: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
          e.jsx("polyline", { points: "7 10 12 15 17 10" }),
          e.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
        ],
      }),
    Copy: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2" }),
          e.jsx("path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
          }),
        ],
      }),
    Check: (s) => e.jsx(g, { d: "M20 6 9 17l-5-5", ...s }),
    X: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
        ],
      }),
    Link: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
          }),
          e.jsx("path", {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
          }),
        ],
      }),
    Lock: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("rect", {
            x: "3",
            y: "11",
            width: "18",
            height: "11",
            rx: "2",
          }),
          e.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
        ],
      }),
    Zap: (s) => e.jsx(g, { d: "M13 2 3 14h9l-1 8 10-12h-9l1-8z", ...s }),
    Users: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
          e.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          e.jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
          e.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
        ],
      }),
    Plus: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
          e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
        ],
      }),
    Trash: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", { d: "M3 6h18" }),
          e.jsx("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
          e.jsx("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
        ],
      }),
    Msg: (s) =>
      e.jsx(g, {
        ...s,
        children: e.jsx("path", {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        }),
      }),
    Send: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
          e.jsx("polygon", { points: "22 2 15 22 11 13 2 9 22 2" }),
        ],
      }),
    Pause: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("rect", { x: "6", y: "4", width: "4", height: "16" }),
          e.jsx("rect", { x: "14", y: "4", width: "4", height: "16" }),
        ],
      }),
    Play: (s) => e.jsx(g, { d: "m5 3 14 9-14 9V3z", ...s }),
    QR: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("rect", { x: "3", y: "3", width: "7", height: "7" }),
          e.jsx("rect", { x: "14", y: "3", width: "7", height: "7" }),
          e.jsx("rect", { x: "3", y: "14", width: "7", height: "7" }),
          e.jsx("rect", {
            x: "3",
            y: "3",
            width: "3",
            height: "3",
            fill: "currentColor",
            stroke: "none",
          }),
          e.jsx("rect", {
            x: "14",
            y: "3",
            width: "3",
            height: "3",
            fill: "currentColor",
            stroke: "none",
          }),
          e.jsx("rect", {
            x: "3",
            y: "14",
            width: "3",
            height: "3",
            fill: "currentColor",
            stroke: "none",
          }),
          e.jsx("line", { x1: "14", y1: "14", x2: "17", y2: "14" }),
          e.jsx("line", { x1: "14", y1: "17", x2: "14", y2: "20" }),
          e.jsx("line", { x1: "17", y1: "17", x2: "20", y2: "17" }),
          e.jsx("line", { x1: "20", y1: "14", x2: "20", y2: "17" }),
          e.jsx("line", { x1: "17", y1: "20", x2: "20", y2: "20" }),
        ],
      }),
    Shield: (s) =>
      e.jsx(g, { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", ...s }),
    History: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
          }),
          e.jsx("path", { d: "M3 3v5h5" }),
          e.jsx("path", { d: "M12 7v5l4 2" }),
        ],
      }),
    Wifi: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }),
          e.jsx("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }),
          e.jsx("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
          e.jsx("circle", {
            cx: "12",
            cy: "20",
            r: "1",
            fill: "currentColor",
            stroke: "none",
          }),
        ],
      }),
    Compress: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("polyline", { points: "4 14 10 14 10 20" }),
          e.jsx("polyline", { points: "20 10 14 10 14 4" }),
          e.jsx("line", { x1: "14", y1: "10", x2: "21", y2: "3" }),
          e.jsx("line", { x1: "3", y1: "21", x2: "10", y2: "14" }),
        ],
      }),
    ChevronDown: (s) => e.jsx(g, { d: "m6 9 6 6 6-6", ...s }),
    ChevronUp: (s) => e.jsx(g, { d: "m18 15-6-6-6 6", ...s }),
    ArrowRight: (s) =>
      e.jsxs(g, {
        ...s,
        children: [
          e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
          e.jsx("polyline", { points: "12 5 19 12 12 19" }),
        ],
      }),
  },
  Me = 65536,
  xt = 7e3,
  Pe = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" },
      { urls: "stun:stun2.l.google.com:19302" },
    ],
  },
  te = "ihatepdf_p2p_history",
  ut = 30,
  Te = (s) => btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
  De = (s) => JSON.parse(decodeURIComponent(escape(atob(s.trim())))),
  ge = () => Math.random().toString(36).slice(2, 10),
  fe = (s) => s.split(".").pop()?.toLowerCase() || "",
  H = (s) =>
    s
      ? s < 1024
        ? s + " B"
        : s < 1048576
          ? (s / 1024).toFixed(1) + " KB"
          : s < 1073741824
            ? (s / 1048576).toFixed(2) + " MB"
            : (s / 1073741824).toFixed(2) + " GB"
      : "0 B",
  ht = (s) =>
    !isFinite(s) || s <= 0 || s > 86400
      ? "—"
      : s < 60
        ? Math.ceil(s) + "s"
        : s < 3600
          ? Math.floor(s / 60) + "m " + Math.ceil(s % 60) + "s"
          : Math.floor(s / 3600) + "h " + Math.floor((s % 3600) / 60) + "m",
  je = (s) =>
    `${window.location.origin + window.location.pathname.replace(/\/p2p-share.*$/, "")}/p2p-share#o=${s}`,
  Be = (s) => {
    try {
      const a = JSON.parse(localStorage.getItem(te) || "[]");
      (a.unshift({ ...s, id: ge(), ts: Date.now() }),
        localStorage.setItem(te, JSON.stringify(a.slice(0, ut))));
    } catch {}
  },
  ee = () => {
    try {
      return JSON.parse(localStorage.getItem(te) || "[]");
    } catch {
      return [];
    }
  },
  Ue = async (s, a) => {
    const x = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(s),
      "PBKDF2",
      !1,
      ["deriveKey"],
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: a, iterations: 2e5, hash: "SHA-256" },
      x,
      { name: "AES-GCM", length: 256 },
      !1,
      ["encrypt", "decrypt"],
    );
  },
  pt = async (s, a) => {
    const x = crypto.getRandomValues(new Uint8Array(16)),
      f = crypto.getRandomValues(new Uint8Array(12)),
      w = await Ue(a, x),
      p = await crypto.subtle.encrypt({ name: "AES-GCM", iv: f }, w, s),
      y = new Uint8Array(28 + p.byteLength);
    return (y.set(x, 0), y.set(f, 16), y.set(new Uint8Array(p), 28), y.buffer);
  },
  mt = async (s, a) => {
    const x = new Uint8Array(s);
    return crypto.subtle.decrypt(
      { name: "AES-GCM", iv: x.slice(16, 28) },
      await Ue(a, x.slice(0, 16)),
      x.slice(28),
    );
  },
  ft = async (s) => {
    if (!window.CompressionStream) return { buf: s, compressed: !1 };
    try {
      const a = new CompressionStream("gzip"),
        x = a.writable.getWriter();
      (x.write(s), x.close());
      const f = a.readable.getReader(),
        w = [];
      for (;;) {
        const { done: y, value: se } = await f.read();
        if (y) break;
        w.push(se);
      }
      const p = await new Blob(w).arrayBuffer();
      return p.byteLength < s.byteLength
        ? { buf: p, compressed: !0 }
        : { buf: s, compressed: !1 };
    } catch {
      return { buf: s, compressed: !1 };
    }
  },
  jt = async (s) => {
    if (!window.DecompressionStream) return s;
    const a = new DecompressionStream("gzip"),
      x = a.writable.getWriter();
    (x.write(s), x.close());
    const f = a.readable.getReader(),
      w = [];
    for (;;) {
      const { done: p, value: y } = await f.read();
      if (p) break;
      w.push(y);
    }
    return new Blob(w).arrayBuffer();
  },
  Le = async (s) => {
    const a = await crypto.subtle.digest("SHA-256", s);
    return Array.from(new Uint8Array(a))
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  },
  gt = () =>
    new Promise((s) => {
      if (window.QRCode) return s(!0);
      const a = document.createElement("script");
      ((a.src = "https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"),
        (a.onload = () => s(!0)),
        (a.onerror = () => s(!1)),
        document.head.appendChild(a));
    }),
  He = (s) =>
    new Promise((a) => {
      if (s.iceGatheringState === "complete") return a();
      const x = () => {
        s.iceGatheringState === "complete" &&
          (s.removeEventListener("icegatheringstatechange", x), a());
      };
      (s.addEventListener("icegatheringstatechange", x), setTimeout(a, xt));
    });
class bt {
  constructor() {
    this.samples = [];
  }
  record(a) {
    const x = Date.now();
    (this.samples.push({ t: x, b: a }),
      (this.samples = this.samples.filter((f) => x - f.t < 3e3)));
  }
  speed() {
    if (this.samples.length < 2) return 0;
    const a = Date.now(),
      x = this.samples.find((p) => a - p.t >= 3e3) || this.samples[0],
      f = this.samples.reduce((p, y) => p + y.b, 0) - (x?.b || 0),
      w = (a - (x?.t || a)) / 1e3;
    return w > 0 ? f / w : 0;
  }
}
function Nt({ showNotification: s }) {
  const [a, x] = l.useState(() =>
      window.location.hash.startsWith("#o=") ? "receive" : "home",
    ),
    [f, w] = l.useState([]),
    [p, y] = l.useState([]),
    [se, ne] = l.useState(null),
    [D, Oe] = l.useState(!1),
    [re, Ie] = l.useState(""),
    [q, _e] = l.useState(!0),
    [ce, V] = l.useState(!1),
    [U, be] = l.useState(null),
    [$e, ie] = l.useState([]),
    [zt, Fe] = l.useState(""),
    [O, ae] = l.useState(() =>
      window.location.hash.startsWith("#o=")
        ? window.location.hash.slice(3)
        : "",
    ),
    [I, oe] = l.useState(""),
    [_, $] = l.useState([]),
    [ze, F] = l.useState([]),
    [Ge, le] = l.useState([]),
    [yt, wt] = l.useState(""),
    [C, M] = l.useState("idle"),
    [ye, We] = l.useState(""),
    [de, X] = l.useState(ee),
    [xe, Ke] = l.useState(!1),
    [ue, we] = l.useState({}),
    b = l.useRef({}),
    B = l.useRef(null),
    G = l.useRef(null),
    W = l.useRef(null),
    he = l.useRef(null),
    Y = l.useRef([]),
    ve = l.useRef(!1),
    pe = l.useRef(""),
    Ne = l.useRef(!0),
    T = l.useRef(null);
  (l.useEffect(() => {
    Y.current = f;
  }, [f]),
    l.useEffect(() => {
      ve.current = D;
    }, [D]),
    l.useEffect(() => {
      pe.current = re;
    }, [re]),
    l.useEffect(() => {
      Ne.current = q;
    }, [q]),
    l.useEffect(() => {
      window.location.hash.startsWith("#o=") &&
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
    }, []),
    l.useEffect(() => {
      try {
        const t = new BroadcastChannel("ihatepdf_p2p_signal");
        return (
          (he.current = t),
          (t.onmessage = (n) => {
            const { type: r, data: i } = n.data || {};
            if (
              (r === "offer" &&
                a === "receive" &&
                (ae(i),
                s?.("Offer auto-received from same browser!", "success")),
              r === "answer" && a === "send")
            ) {
              const o = Object.values(b.current).find((c) => c.waitingBC);
              o && Se(o.id, i);
            }
          }),
          () => t.close()
        );
      } catch {}
    }, [a]),
    l.useEffect(() => {
      if (!ce || !W.current) return;
      const t = p.find((n) => n.id === U);
      t?.offerCode &&
        gt().then((n) => {
          !n ||
            !window.QRCode ||
            !W.current ||
            ((W.current.innerHTML = ""),
            new window.QRCode(W.current, {
              text: je(t.offerCode),
              width: 192,
              height: 192,
              colorDark: "#ffffff",
              colorLight: "#09090b",
              correctLevel: window.QRCode.CorrectLevel?.M,
            }));
        });
    }, [ce, U, p]));
  const Je = async (t, n) => {
      try {
        await navigator.clipboard.writeText(t);
      } catch {
        const i = document.createElement("textarea");
        ((i.value = t),
          document.body.appendChild(i),
          i.select(),
          document.execCommand("copy"),
          document.body.removeChild(i));
      }
      (we((r) => ({ ...r, [n]: !0 })),
        setTimeout(() => we((r) => ({ ...r, [n]: !1 })), 2e3));
    },
    Ce = (t) => {
      const n = Array.from(t);
      w((r) => {
        const i = new Set(r.map((o) => o.name + o.size));
        return [...r, ...n.filter((o) => !i.has(o.name + o.size))];
      });
    },
    Qe = (t) => w((n) => n.filter((r, i) => i !== t)),
    qe = f.reduce((t, n) => t + n.size, 0),
    v = (t, n) => {
      y((r) =>
        r.map((i) => {
          if (i.id !== t) return i;
          const o = typeof n == "function" ? n(i) : n;
          return { ...i, ...o };
        }),
      );
    },
    K = (t, n, r) => {
      y((i) =>
        i.map((o) =>
          o.id !== t
            ? o
            : {
                ...o,
                transfers: o.transfers.map((c) =>
                  c.id === n ? { ...c, ...r } : c,
                ),
              },
        ),
      );
    },
    Ve = async (t, n) => {
      const r = b.current[t],
        i = r?.dc;
      if (!i || i.readyState !== "open") return;
      const o = Y.current[n.fileIdx];
      if (!o) return;
      let c = await o.arrayBuffer(),
        u = !1;
      if (Ne.current) {
        const k = await ft(c);
        ((c = k.buf), (u = k.compressed));
      }
      let m = !1;
      ve.current && pe.current && ((c = await pt(c, pe.current)), (m = !0));
      const z = await o.arrayBuffer(),
        j = await Le(z);
      i.send(
        "META:" +
          JSON.stringify({
            tid: n.id,
            name: o.name,
            size: o.size,
            finalSize: c.byteLength,
            type: o.type,
            compressed: u,
            encrypted: m,
            hash: j,
          }),
      );
      const h = c.byteLength;
      let N = 0;
      const S = r.speedTracker,
        E = () => {
          const k = b.current[t];
          if (!(!k || k.paused)) {
            for (; N < h;) {
              if (i.bufferedAmount > Me * 32) {
                setTimeout(E, 50);
                return;
              }
              const J = Math.min(N + Me, h);
              i.send(c.slice(N, J));
              const Q = J - N;
              ((N = J), S.record(Q));
              const me = S.speed(),
                dt = me > 0 ? (h - N) / me : 1 / 0;
              K(t, n.id, {
                progress: Math.round((N / h) * 100),
                sentBytes: N,
                speed: me,
                eta: dt,
              });
            }
            i.send("EOF:" + n.id);
          }
        };
      E();
    },
    Xe = (t) => {
      const n = b.current[t];
      if (!n || n.paused || !n.txStatuses) return;
      const r = n.transfers.find((i) => n.txStatuses[i.id] === "queued");
      if (!r) {
        (v(t, { status: "done" }),
          Be({
            role: "sent",
            files: n.transfers.map((i) => i.name),
            totalBytes: n.transfers.reduce((i, o) => i + o.size, 0),
          }),
          X(ee()));
        return;
      }
      ((n.txStatuses[r.id] = "sending"),
        K(t, r.id, { status: "sending" }),
        Ve(t, r));
    };
  T.current = Xe;
  const Ye = async () => {
      if (Y.current.length === 0) return;
      const t = ge(),
        n = `Receiver ${(p.length + 1).toString().padStart(2, "0")}`,
        r = new RTCPeerConnection(Pe),
        i = r.createDataChannel("ihatepdf_p2p", { ordered: !0 }),
        o = Y.current.map((j, h) => ({
          id: ge(),
          fileIdx: h,
          name: j.name,
          size: j.size,
          progress: 0,
          speed: 0,
          eta: 0,
          status: "queued",
          sentBytes: 0,
          hash: null,
        })),
        c = {};
      o.forEach((j) => {
        c[j.id] = "queued";
      });
      const u = {
        id: t,
        label: n,
        pc: r,
        dc: i,
        status: "waitAnswer",
        offerCode: "",
        answerInput: "",
        transfers: o,
        txStatuses: c,
        chat: [],
        speedTracker: new bt(),
        paused: !1,
        waitingBC: !1,
      };
      ((b.current[t] = u),
        (i.onopen = () => v(t, { status: "connected" })),
        (i.onclose = () =>
          v(t, (j) =>
            j.status === "connected" ? { status: "disconnected" } : {},
          )),
        (i.onmessage = (j) => {
          if (typeof j.data != "string") return;
          const h = j.data,
            N = b.current[t];
          if (h.startsWith("ACK:")) {
            const S = h.slice(4);
            (N?.txStatuses && (N.txStatuses[S] = "done"),
              K(t, S, { status: "done", progress: 100 }),
              T.current(t));
            return;
          }
          if (h.startsWith("HASH_OK:")) {
            (K(t, h.slice(8), { verified: !0 }),
              s?.("File integrity verified ✓", "success"));
            return;
          }
          if (h.startsWith("HASH_FAIL:")) {
            (K(t, h.slice(10), { verified: !1 }),
              s?.("Integrity check failed!", "error"));
            return;
          }
          if (h.startsWith("CHAT:")) {
            const S = JSON.parse(h.slice(5)),
              E = b.current[t]?.label || "Receiver";
            ie((k) => [...k, { ...S, from: E }]);
            return;
          }
          if (h === "REJECT") {
            (v(t, { status: "rejected" }),
              s?.("Receiver rejected the transfer", "error"));
            return;
          }
          if (h === "ACCEPT") {
            (v(t, { status: "accepted" }), setTimeout(() => T.current(t), 200));
            return;
          }
          (h === "PAUSE" && v(t, { remotePaused: !0 }),
            h === "RESUME" && (v(t, { remotePaused: !1 }), T.current(t)));
        }),
        (r.oniceconnectionstatechange = () => {
          ["failed", "disconnected"].includes(r.iceConnectionState) &&
            v(t, { status: "failed" });
        }));
      const m = await r.createOffer();
      (await r.setLocalDescription(m), await He(r));
      const z = Te(r.localDescription);
      ((b.current[t].offerCode = z), (b.current[t].waitingBC = !0));
      try {
        he.current?.postMessage({ type: "offer", data: z });
      } catch {}
      (y((j) => [...j, { ...u, offerCode: z, txStatuses: c }]), ne(t));
    },
    Se = async (t, n) => {
      const r = b.current[t];
      if (!(!r || !n?.trim())) {
        v(t, { status: "connecting" });
        try {
          (await r.pc.setRemoteDescription(new RTCSessionDescription(De(n))),
            (b.current[t].waitingBC = !1));
        } catch {
          v(t, { status: "error" });
        }
      }
    },
    Ze = (t) => {
      const n = b.current[t];
      n &&
        ((n.paused = !n.paused),
        n.dc?.readyState === "open" && n.dc.send(n.paused ? "PAUSE" : "RESUME"),
        v(t, { paused: n.paused }),
        n.paused || T.current(t));
    },
    et = (t) => {
      if (!t.trim()) return;
      const n = { text: t.trim(), time: Date.now() };
      (Object.values(b.current).forEach((r) => {
        r.dc?.readyState === "open" && r.dc.send("CHAT:" + JSON.stringify(n));
      }),
        ie((r) => [...r, { ...n, from: "me" }]));
    },
    tt = async () => {
      if (O.trim()) {
        if (B.current)
          try {
            B.current.close();
          } catch {}
        (M("connecting"), oe(""), $([]), F([]));
        try {
          const t = new RTCPeerConnection(Pe);
          ((B.current = t),
            (t.ondatachannel = (i) => {
              ((G.current = i.channel), st(i.channel));
            }),
            (t.oniceconnectionstatechange = () => {
              ["failed", "disconnected"].includes(t.iceConnectionState) &&
                M("failed");
            }),
            await t.setRemoteDescription(new RTCSessionDescription(De(O))));
          const n = await t.createAnswer();
          (await t.setLocalDescription(n), await He(t));
          const r = Te(t.localDescription);
          (oe(r), M("waitConnect"));
          try {
            he.current?.postMessage({ type: "answer", data: r });
          } catch {}
        } catch {
          M("error");
        }
      }
    },
    st = (t) => {
      const n = {},
        r = {},
        i = {};
      ((t.onopen = () => M("connected")),
        (t.onmessage = async (o) => {
          if (typeof o.data == "string") {
            if (o.data.startsWith("META:")) {
              const c = JSON.parse(o.data.slice(5));
              ((r[c.tid] = c),
                (n[c.tid] = []),
                (i[c.tid] = 0),
                $((u) =>
                  u.find((m) => m.tid === c.tid)
                    ? u
                    : [...u, { ...c, accepted: null }],
                ));
              return;
            }
            if (o.data.startsWith("EOF:")) {
              const c = o.data.slice(4),
                u = r[c];
              if (!u) return;
              let m = await new Blob(n[c]).arrayBuffer();
              if (u.encrypted) {
                const E = ye || prompt("Enter decryption password:");
                if (!E) {
                  t.send("REJECT");
                  return;
                }
                try {
                  m = await mt(m, E);
                } catch {
                  (s?.("Decryption failed", "error"),
                    F((J) =>
                      J.map((Q) =>
                        Q.tid === c ? { ...Q, status: "error" } : Q,
                      ),
                    ));
                  return;
                }
              }
              u.compressed && (m = await jt(m));
              const z = await Le(m),
                j = z === u.hash;
              t.send(j ? "HASH_OK:" + c : "HASH_FAIL:" + c);
              const h = new Blob([m], {
                  type: u.type || "application/octet-stream",
                }),
                N = URL.createObjectURL(h),
                S = document.createElement("a");
              ((S.href = N),
                (S.download = u.name),
                document.body.appendChild(S),
                S.click(),
                setTimeout(() => {
                  (document.body.removeChild(S), URL.revokeObjectURL(N));
                }, 2e3),
                t.send("ACK:" + c),
                F((E) =>
                  E.map((k) =>
                    k.tid === c
                      ? { ...k, status: "done", progress: 100, verified: j }
                      : k,
                  ),
                ),
                Be({ role: "received", files: [u.name], totalBytes: u.size }),
                X(ee()),
                s?.(`${u.name} received${j ? " · verified" : ""}`, "success"));
              return;
            }
            if (o.data.startsWith("CHAT:")) {
              le((c) => [
                ...c,
                { ...JSON.parse(o.data.slice(5)), from: "them" },
              ]);
              return;
            }
            (o.data === "PAUSE" && M("paused"),
              o.data === "RESUME" && M("connected"));
          }
          if (o.data instanceof ArrayBuffer) {
            const c = Object.keys(r).find((z) => (i[z] || 0) < r[z].finalSize);
            if (!c) return;
            (n[c].push(o.data), (i[c] = (i[c] || 0) + o.data.byteLength));
            const u = r[c],
              m = Math.round((i[c] / u.finalSize) * 100);
            F((z) =>
              z.find((h) => h.tid === c)
                ? z.map((h) => (h.tid === c ? { ...h, progress: m } : h))
                : [
                    ...z,
                    {
                      tid: c,
                      name: u.name,
                      size: u.size,
                      progress: m,
                      status: "receiving",
                    },
                  ],
            );
          }
        }));
    },
    nt = (t) => {
      ($((n) => n.map((r) => (r.tid === t ? { ...r, accepted: !0 } : r))),
        G.current?.send("ACCEPT"));
    },
    rt = (t) => {
      ($((n) => n.map((r) => (r.tid === t ? { ...r, accepted: !1 } : r))),
        G.current?.send("REJECT"));
    },
    ct = (t) => {
      const n = G.current;
      if (!n || n.readyState !== "open" || !t.trim()) return;
      const r = { text: t.trim(), time: Date.now() };
      (n.send("CHAT:" + JSON.stringify(r)),
        le((i) => [...i, { ...r, from: "me" }]));
    },
    it = () => {
      if (
        (Object.values(b.current).forEach((t) => {
          try {
            t.pc.close();
          } catch {}
        }),
        (b.current = {}),
        B.current)
      ) {
        try {
          B.current.close();
        } catch {}
        B.current = null;
      }
      ((G.current = null),
        w([]),
        y([]),
        ne(null),
        ie([]),
        Fe(""),
        ae(""),
        oe(""),
        $([]),
        F([]),
        le([]),
        M("idle"),
        V(!1),
        be(null),
        x("home"));
    },
    at = (t) =>
      ({
        offering: "Generating offer…",
        waitAnswer: "Waiting for answer",
        connecting: "Connecting…",
        connected: "Connected",
        accepted: "Transfer ready",
        sending: "Sending…",
        done: "Complete",
        failed: "Connection failed",
        rejected: "Rejected",
        error: "Error",
        disconnected: "Disconnected",
      })[t] || t,
    ke = (t) =>
      ["connected", "done", "accepted"].includes(t)
        ? "bg-white"
        : ["failed", "rejected", "error"].includes(t)
          ? "bg-zinc-500"
          : ["sending", "connecting"].includes(t)
            ? "bg-zinc-300 animate-pulse"
            : "bg-zinc-600",
    Z = ({ text: t, id: n, label: r = "Copy", small: i = !1 }) =>
      e.jsxs("button", {
        "aria-label": "Copy",
        onClick: () => Je(t, n),
        className: `inline-flex items-center gap-1.5 rounded border transition-all duration-150 font-medium tracking-tight
        ${i ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs"}
        ${ue[n] ? "bg-white/10 border-white/30 text-white" : "bg-transparent border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"}`,
        children: [
          ue[n]
            ? e.jsx(d.Check, { className: "w-3 h-3" })
            : e.jsx(d.Copy, { className: "w-3 h-3" }),
          ue[n] ? "Copied" : r,
        ],
      }),
    ot = ({ pct: t, status: n }) =>
      e.jsx("div", {
        className: "h-px bg-zinc-800 rounded-full overflow-hidden w-full",
        children: e.jsx("div", {
          className: `h-full rounded-full transition-all duration-300 ${n === "done" ? "bg-white" : n === "error" ? "bg-zinc-500" : "bg-zinc-300"}`,
          style: { width: `${t}%` },
        }),
      }),
    Re = ({ tx: t, peerId: n, canPause: r, peerPaused: i }) =>
      e.jsxs("div", {
        className:
          "group py-3 px-4 bg-zinc-950 rounded-lg border border-zinc-800/80 hover:border-zinc-700 transition-colors",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3 mb-2",
            children: [
              e.jsx("span", {
                className:
                  "text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded flex-shrink-0",
                children: fe(t.name) || "?",
              }),
              e.jsx("p", {
                className: "text-sm text-zinc-200 font-medium truncate flex-1",
                children: t.name,
              }),
              e.jsx("span", {
                className: "text-xs text-zinc-600 flex-shrink-0 font-mono",
                children: H(t.size),
              }),
              r &&
                t.status === "sending" &&
                e.jsx("button", {
                  "aria-label": "Play or pause",
                  onClick: () => Ze(n),
                  className:
                    "opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-zinc-300 transition-all ml-1",
                  children: i
                    ? e.jsx(d.Play, { className: "w-3.5 h-3.5" })
                    : e.jsx(d.Pause, { className: "w-3.5 h-3.5" }),
                }),
            ],
          }),
          e.jsx(ot, { pct: t.progress, status: t.status }),
          e.jsxs("div", {
            className: "flex items-center justify-between mt-1.5",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  t.status === "sending" &&
                    t.speed > 0 &&
                    e.jsxs("span", {
                      className: "text-[11px] text-zinc-400 font-mono",
                      children: [H(t.speed), "/s"],
                    }),
                  t.status === "sending" &&
                    t.eta &&
                    isFinite(t.eta) &&
                    e.jsxs("span", {
                      className: "text-[11px] text-zinc-600",
                      children: [ht(t.eta), " left"],
                    }),
                  t.status === "queued" &&
                    e.jsx("span", {
                      className: "text-[11px] text-zinc-600",
                      children: "Queued",
                    }),
                  t.status === "error" &&
                    e.jsx("span", {
                      className: "text-[11px] text-zinc-500",
                      children: "Error",
                    }),
                ],
              }),
              t.status === "done" &&
                e.jsxs("span", {
                  className:
                    "text-[11px] text-zinc-300 flex items-center gap-1",
                  children: [
                    e.jsx(d.Check, { className: "w-3 h-3" }),
                    t.verified === !0
                      ? "Verified"
                      : t.verified === !1
                        ? "Unverified"
                        : "Done",
                  ],
                }),
              t.status === "sending" &&
                e.jsxs("span", {
                  className: "text-[11px] text-zinc-500 font-mono",
                  children: [t.progress, "%"],
                }),
            ],
          }),
        ],
      }),
    Ae = ({
      messages: t,
      onSend: n,
      placeholder: r = "Message…",
      title: i = "Chat",
    }) => {
      const o = l.useRef(null),
        [c, u] = l.useState("");
      return (
        l.useEffect(
          () => o.current?.scrollIntoView({ behavior: "smooth" }),
          [t],
        ),
        e.jsxs("div", {
          className: "border border-zinc-800 rounded-xl overflow-hidden",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center gap-2 px-3 py-2 border-b border-zinc-800 bg-zinc-900",
              children: [
                e.jsx(d.Msg, { className: "w-3 h-3 text-zinc-600" }),
                e.jsx("span", {
                  className:
                    "text-[11px] font-medium text-zinc-500 tracking-wider uppercase",
                  children: i,
                }),
                e.jsx("span", {
                  className: "ml-auto text-[11px] text-zinc-700",
                  children: t.length,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "h-36 overflow-y-auto p-3 bg-zinc-950 space-y-2",
              children: [
                t.length === 0 &&
                  e.jsx("p", {
                    className: "text-[11px] text-zinc-700 text-center pt-6",
                    children: "No messages yet",
                  }),
                t.map((m, z) => {
                  const j = m.from === "me";
                  return e.jsxs(
                    "div",
                    {
                      className: `flex flex-col ${j ? "items-end" : "items-start"}`,
                      children: [
                        !j &&
                          e.jsx("span", {
                            className: "text-[10px] text-zinc-600 mb-0.5 px-1",
                            children: m.from,
                          }),
                        e.jsx("div", {
                          className: `text-xs px-3 py-1.5 rounded-lg max-w-[80%] ${j ? "bg-zinc-700 text-zinc-200" : "bg-zinc-900 border border-zinc-800 text-zinc-300"}`,
                          children: m.text,
                        }),
                      ],
                    },
                    z,
                  );
                }),
                e.jsx("div", { ref: o }),
              ],
            }),
            e.jsxs("div", {
              className: "flex border-t border-zinc-800",
              children: [
                e.jsx("input", {
                  value: c,
                  onChange: (m) => u(m.target.value),
                  onKeyDown: (m) => {
                    m.key === "Enter" && c.trim() && (n(c), u(""));
                  },
                  placeholder: r,
                  className:
                    "flex-1 bg-zinc-900 text-xs text-zinc-300 placeholder:text-zinc-700 px-3 py-2 focus:outline-none",
                }),
                e.jsx("button", {
                  "aria-label": "Send",
                  onClick: () => {
                    c.trim() && (n(c), u(""));
                  },
                  className:
                    "px-3 text-zinc-600 hover:text-zinc-300 bg-zinc-900 border-l border-zinc-800 transition-colors",
                  children: e.jsx(d.Send, { className: "w-3.5 h-3.5" }),
                }),
              ],
            }),
          ],
        })
      );
    },
    Ee = ({ on: t, onClick: n }) =>
      e.jsx("button", {
        onClick: n,
        className: `relative w-8 h-4 rounded-full border transition-colors flex-shrink-0 ${t ? "bg-white border-zinc-400" : "bg-zinc-800 border-zinc-700"}`,
        children: e.jsx("span", {
          className: `absolute top-0.5 w-3 h-3 rounded-full transition-all ${t ? "left-4 bg-zinc-900" : "left-0.5 bg-zinc-500"}`,
        }),
      }),
    L = ({ n: t, done: n }) =>
      e.jsx("div", {
        className: `w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0 transition-colors
      ${n ? "bg-white border-white" : "bg-transparent border-zinc-700"}`,
        children: n
          ? e.jsx(d.Check, { className: "w-2.5 h-2.5 text-zinc-900" })
          : e.jsx("span", {
              className: "text-[10px] font-bold text-zinc-500",
              children: t,
            }),
      }),
    R = ({ children: t, className: n = "" }) =>
      e.jsx("div", {
        className: `bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden ${n}`,
        children: t,
      }),
    A = ({ children: t, className: n = "" }) =>
      e.jsx("div", {
        className: `flex items-center gap-2.5 px-4 py-3 border-b border-zinc-800 ${n}`,
        children: t,
      }),
    P = ({ children: t, className: n = "" }) =>
      e.jsx("div", { className: `p-4 ${n}`, children: t }),
    lt = ({ peer: t }) => {
      const n = se === t.id,
        r = t.transfers?.every((c) => c.status === "done"),
        i = t.transfers?.some((c) => c.status === "sending"),
        o = t.transfers?.filter((c) => c.status === "done").length || 0;
      return e.jsxs("div", {
        className: `border rounded-xl transition-all duration-200 overflow-hidden
        ${n ? "border-zinc-600 bg-zinc-900" : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"}`,
        children: [
          e.jsxs("button", {
            onClick: () => ne(n ? null : t.id),
            className: "w-full flex items-center gap-3 px-4 py-3.5 text-left",
            children: [
              e.jsx("div", {
                className:
                  "w-7 h-7 rounded-full border border-zinc-700 flex items-center justify-center flex-shrink-0",
                children: e.jsx(d.Users, {
                  className: "w-3 h-3 text-zinc-500",
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className:
                      "text-sm font-medium text-zinc-200 tracking-tight",
                    children: t.label,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5 mt-0.5",
                    children: [
                      e.jsx("span", {
                        className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${ke(t.status)}`,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-zinc-500",
                        children: at(t.status),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  t.transfers?.length > 0 &&
                    e.jsxs("span", {
                      className: "text-xs text-zinc-600 font-mono",
                      children: [o, "/", t.transfers.length],
                    }),
                  n
                    ? e.jsx(d.ChevronUp, {
                        className: "w-3.5 h-3.5 text-zinc-600",
                      })
                    : e.jsx(d.ChevronDown, {
                        className: "w-3.5 h-3.5 text-zinc-600",
                      }),
                ],
              }),
            ],
          }),
          n &&
            e.jsxs("div", {
              className: "border-t border-zinc-800 px-4 pb-4 pt-4 space-y-4",
              children: [
                ["waitAnswer", "connecting"].includes(t.status) &&
                  t.offerCode &&
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs text-zinc-500 uppercase tracking-widest",
                                children: "Offer code",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                  e.jsx(Z, {
                                    text: t.offerCode,
                                    id: `offer-${t.id}`,
                                    label: "Code",
                                    small: !0,
                                  }),
                                  e.jsx(Z, {
                                    text: je(t.offerCode),
                                    id: `url-${t.id}`,
                                    label: "Link",
                                    small: !0,
                                  }),
                                  e.jsxs("button", {
                                    onClick: () => {
                                      (be(t.id), V(!0));
                                    },
                                    className:
                                      "inline-flex items-center gap-1 px-2 py-1 text-[11px] rounded border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors",
                                    children: [
                                      e.jsx(d.QR, { className: "w-3 h-3" }),
                                      " QR",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("textarea", {
                            readOnly: !0,
                            value: t.offerCode,
                            rows: 3,
                            className:
                              "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-[11px] font-mono text-zinc-500 resize-none focus:outline-none leading-relaxed",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-500 uppercase tracking-widest mb-2",
                            children: "Paste receiver answer",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx("textarea", {
                                rows: 2,
                                placeholder: "Paste answer code from receiver…",
                                onChange: (c) =>
                                  v(t.id, { answerInput: c.target.value }),
                                className:
                                  "flex-1 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-[11px] font-mono text-zinc-300 placeholder:text-zinc-700 resize-none focus:outline-none focus:border-zinc-600 transition-colors",
                              }),
                              e.jsx("button", {
                                onClick: () => Se(t.id, t.answerInput),
                                disabled: !t.answerInput?.trim(),
                                className:
                                  "px-4 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
                                children: "Connect",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (["connected", "accepted", "done"].includes(t.status) ||
                  i ||
                  r) &&
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs text-zinc-500 uppercase tracking-widest",
                        children: "Files",
                      }),
                      t.transfers?.map((c) =>
                        e.jsx(
                          Re,
                          {
                            tx: c,
                            peerId: t.id,
                            canPause: i,
                            peerPaused: t.paused,
                          },
                          c.id,
                        ),
                      ),
                      t.status === "connected" &&
                        t.transfers?.every((c) => c.status === "queued") &&
                        e.jsx("button", {
                          onClick: () => {
                            (v(t.id, { status: "accepted" }),
                              b.current[t.id]?.dc?.send("ACCEPT"),
                              setTimeout(() => T.current(t.id), 200));
                          },
                          className:
                            "w-full mt-2 py-2.5 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
                          children: "Send all files",
                        }),
                    ],
                  }),
                t.status === "rejected" &&
                  e.jsx("div", {
                    className:
                      "text-xs text-zinc-500 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2",
                    children: "Receiver rejected this transfer.",
                  }),
              ],
            }),
        ],
      });
    };
  return e.jsxs("div", {
    className: "max-w-2xl mx-auto pb-20 relative",
    children: [
      ce &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm",
          onClick: () => V(!1),
          children: e.jsxs("div", {
            className:
              "bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-72",
            onClick: (t) => t.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-5",
                children: [
                  e.jsx("p", {
                    className:
                      "text-sm font-semibold text-white tracking-tight",
                    children: "Scan to receive",
                  }),
                  e.jsx("button", {
                    "aria-label": "Close",
                    onClick: () => V(!1),
                    className:
                      "text-zinc-600 hover:text-white transition-colors",
                    children: e.jsx(d.X, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex justify-center mb-4",
                children: e.jsx("div", {
                  ref: W,
                  className:
                    "p-3 bg-zinc-950 border border-zinc-800 rounded-xl",
                }),
              }),
              e.jsx("p", {
                className: "text-xs text-zinc-600 text-center mb-4",
                children: "Receiver scans this on their device",
              }),
              U &&
                (() => {
                  const t = p.find((n) => n.id === U);
                  return t?.offerCode
                    ? e.jsx(Z, {
                        text: je(t.offerCode),
                        id: `qr-url-${U}`,
                        label: "Copy share link",
                      })
                    : null;
                })(),
            ],
          }),
        }),
      e.jsxs("div", {
        className: "flex items-start justify-between mb-10",
        children: [
          e.jsx("div", {
            children: e.jsx("div", {
              className: "flex items-center gap-3 mb-1.5",
              children: e.jsx("h1", {
                className: "text-4xl font-semibold text-white tracking-tight",
                children: "P2P File Share",
              }),
            }),
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsxs("button", {
                onClick: () => {
                  (Ke(!xe), X(ee()));
                },
                className: `inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs transition-colors
              ${xe ? "bg-zinc-800 border-zinc-700 text-zinc-300" : "bg-transparent border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700"}`,
                children: [
                  e.jsx(d.History, { className: "w-3.5 h-3.5" }),
                  e.jsx("span", {
                    className: "font-mono",
                    children: de.length,
                  }),
                ],
              }),
              a !== "home" &&
                e.jsxs("button", {
                  onClick: it,
                  className:
                    "inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-700 text-xs transition-colors",
                  children: [
                    e.jsx(d.X, { className: "w-3.5 h-3.5" }),
                    " Reset",
                  ],
                }),
            ],
          }),
        ],
      }),
      xe &&
        e.jsxs(R, {
          className: "mb-6",
          children: [
            e.jsxs(A, {
              children: [
                e.jsx("span", {
                  className:
                    "text-[11px] font-semibold text-zinc-400 uppercase tracking-widest",
                  children: "Transfer History",
                }),
                e.jsx("button", {
                  onClick: () => {
                    (localStorage.removeItem(te), X([]));
                  },
                  className:
                    "ml-auto text-[11px] text-zinc-700 hover:text-zinc-400 transition-colors",
                  children: "Clear",
                }),
              ],
            }),
            de.length === 0 &&
              e.jsx("div", {
                className: "text-center py-8 text-xs text-zinc-700",
                children: "No transfers recorded",
              }),
            e.jsx("div", {
              className: "divide-y divide-zinc-800/60 max-h-52 overflow-y-auto",
              children: de.map((t) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 px-4 py-3",
                    children: [
                      t.role === "sent"
                        ? e.jsx(d.Upload, {
                            className:
                              "w-3.5 h-3.5 text-zinc-500 flex-shrink-0",
                          })
                        : e.jsx(d.Download, {
                            className:
                              "w-3.5 h-3.5 text-zinc-400 flex-shrink-0",
                          }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className: "text-xs text-zinc-300 truncate",
                            children: t.files?.join(", "),
                          }),
                          e.jsxs("p", {
                            className: "text-[11px] text-zinc-600",
                            children: [
                              H(t.totalBytes),
                              " · ",
                              new Date(t.ts).toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  t.id,
                ),
              ),
            }),
          ],
        }),
      a === "home" &&
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
              children: [
                e.jsxs("button", {
                  onClick: () => x("send"),
                  className:
                    "group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 text-left transition-all duration-200 hover:bg-zinc-900/80",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-lg border border-zinc-700 group-hover:border-zinc-500 flex items-center justify-center mb-5 transition-colors",
                      children: e.jsx(d.Upload, {
                        className:
                          "w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "text-sm font-semibold text-white tracking-tight mb-1.5",
                      children: "Send files",
                    }),
                    e.jsx("p", {
                      className: "text-xs text-zinc-600 leading-relaxed",
                      children:
                        "Share to one or many receivers. Multi-file, group transfers, live chat, encryption.",
                    }),
                    e.jsx("div", {
                      className: "mt-5 flex flex-wrap gap-1.5",
                      children: [
                        "Multi-file",
                        "Group share",
                        "QR code",
                        "AES-256",
                      ].map((t) =>
                        e.jsx(
                          "span",
                          {
                            className:
                              "text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-600 font-mono",
                            children: t,
                          },
                          t,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-4 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors",
                      children: [
                        e.jsx("span", { children: "Start sending" }),
                        e.jsx(d.ArrowRight, { className: "w-3 h-3 ml-0.5" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: () => x("receive"),
                  className:
                    "group bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-xl p-6 text-left transition-all duration-200 hover:bg-zinc-900/80",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-lg border border-zinc-700 group-hover:border-zinc-500 flex items-center justify-center mb-5 transition-colors",
                      children: e.jsx(d.Download, {
                        className:
                          "w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition-colors",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "text-sm font-semibold text-white tracking-tight mb-1.5",
                      children: "Receive files",
                    }),
                    e.jsx("p", {
                      className: "text-xs text-zinc-600 leading-relaxed",
                      children:
                        "Accept or reject incoming files. SHA-256 integrity verified. Auto-decrypted.",
                    }),
                    e.jsx("div", {
                      className: "mt-5 flex flex-wrap gap-1.5",
                      children: [
                        "Accept/reject",
                        "SHA-256 verify",
                        "Auto-decrypt",
                        "Chat",
                      ].map((t) =>
                        e.jsx(
                          "span",
                          {
                            className:
                              "text-[10px] px-2 py-0.5 rounded border border-zinc-800 text-zinc-600 font-mono",
                            children: t,
                          },
                          t,
                        ),
                      ),
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-4 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors",
                      children: [
                        e.jsx("span", { children: "Start receiving" }),
                        e.jsx(d.ArrowRight, { className: "w-3 h-3 ml-0.5" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
              children: [
                {
                  icon: d.Shield,
                  label: "E2E Encrypted",
                  desc: "AES-256-GCM + PBKDF2",
                },
                {
                  icon: d.Zap,
                  label: "SHA-256 Verify",
                  desc: "Every file checked",
                },
                {
                  icon: d.Compress,
                  label: "Compressed",
                  desc: "Gzip, browser-native",
                },
                {
                  icon: d.Wifi,
                  label: "WebRTC Direct",
                  desc: "True peer-to-peer",
                },
              ].map(({ icon: t, label: n, desc: r }) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-950 border border-zinc-800/60 rounded-xl p-3.5",
                    children: [
                      e.jsx(t, {
                        className: "w-3.5 h-3.5 text-zinc-600 mb-2.5",
                      }),
                      e.jsx("p", {
                        className: "text-xs font-medium text-zinc-400",
                        children: n,
                      }),
                      e.jsx("p", {
                        className: "text-[11px] text-zinc-600 mt-0.5",
                        children: r,
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          ],
        }),
      a === "send" &&
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs(R, {
              children: [
                e.jsxs(A, {
                  children: [
                    e.jsx(L, { n: "1", done: f.length > 0 }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-200",
                      children: "Add files",
                    }),
                    f.length > 0 &&
                      e.jsxs("span", {
                        className: "ml-auto text-xs text-zinc-600 font-mono",
                        children: [
                          f.length,
                          " file",
                          f.length !== 1 ? "s" : "",
                          " · ",
                          H(qe),
                        ],
                      }),
                  ],
                }),
                e.jsxs(P, {
                  children: [
                    e.jsxs("div", {
                      onDragOver: (t) => t.preventDefault(),
                      onDrop: (t) => {
                        (t.preventDefault(), Ce(t.dataTransfer.files));
                      },
                      onClick: () => document.getElementById("p2p-fi").click(),
                      className:
                        "border border-dashed border-zinc-800 hover:border-zinc-600 rounded-xl py-10 text-center cursor-pointer transition-colors group",
                      children: [
                        e.jsx(d.Upload, {
                          className:
                            "w-5 h-5 text-zinc-700 group-hover:text-zinc-400 mx-auto mb-2 transition-colors",
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors",
                          children: "Drop files or click to browse",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-zinc-700 mt-0.5",
                          children: "Any file type · Multiple files",
                        }),
                      ],
                    }),
                    e.jsx("input", {
                      id: "p2p-fi",
                      type: "file",
                      multiple: !0,
                      className: "hidden",
                      onChange: (t) => Ce(t.target.files),
                    }),
                    f.length > 0 &&
                      e.jsx("div", {
                        className: "mt-3 space-y-1.5 max-h-48 overflow-y-auto",
                        children: f.map((t, n) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "group/item flex items-center gap-2.5 bg-zinc-950 border border-zinc-800/60 rounded-lg px-3 py-2.5",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-mono uppercase tracking-wider text-zinc-600 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded flex-shrink-0",
                                  children: fe(t.name) || "?",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-zinc-300 flex-1 min-w-0 truncate",
                                  children: t.name,
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[11px] text-zinc-600 font-mono flex-shrink-0",
                                  children: H(t.size),
                                }),
                                e.jsx("button", {
                                  "aria-label": "Delete",
                                  onClick: () => Qe(n),
                                  className:
                                    "opacity-0 group-hover/item:opacity-100 text-zinc-700 hover:text-zinc-400 transition-all flex-shrink-0",
                                  children: e.jsx(d.Trash, {
                                    className: "w-3 h-3",
                                  }),
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
            e.jsxs(R, {
              children: [
                e.jsxs(A, {
                  children: [
                    e.jsx(L, { n: "2", done: !1 }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-200",
                      children: "Options",
                    }),
                  ],
                }),
                e.jsxs(P, {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3 cursor-pointer",
                      onClick: () => _e(!q),
                      children: [
                        e.jsx(Ee, { on: q, onClick: () => {} }),
                        e.jsx(d.Compress, {
                          className: "w-3.5 h-3.5 text-zinc-600 flex-shrink-0",
                        }),
                        e.jsx("span", {
                          className: "text-sm text-zinc-300",
                          children: "Compress",
                        }),
                        e.jsx("span", {
                          className: "text-xs text-zinc-600",
                          children: "— gzip, browser-native",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3 cursor-pointer",
                          onClick: () => Oe(!D),
                          children: [
                            e.jsx(Ee, { on: D, onClick: () => {} }),
                            e.jsx(d.Lock, {
                              className:
                                "w-3.5 h-3.5 text-zinc-600 flex-shrink-0",
                            }),
                            e.jsx("span", {
                              className: "text-sm text-zinc-300",
                              children: "Encrypt",
                            }),
                            e.jsx("span", {
                              className: "text-xs text-zinc-600",
                              children: "— AES-256-GCM",
                            }),
                          ],
                        }),
                        D &&
                          e.jsx("div", {
                            className: "mt-2.5 ml-11",
                            children: e.jsx("input", {
                              value: re,
                              onChange: (t) => Ie(t.target.value),
                              type: "password",
                              placeholder:
                                "Shared password — tell the receiver separately",
                              className:
                                "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(R, {
              children: [
                e.jsxs(A, {
                  children: [
                    e.jsx(L, {
                      n: "3",
                      done: p.some((t) => t.status === "done"),
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-200",
                      children: "Receivers",
                    }),
                    e.jsx("span", {
                      className: "text-xs text-zinc-700",
                      children: "— add one per person",
                    }),
                    e.jsxs("div", {
                      className: "ml-auto flex items-center gap-2",
                      children: [
                        p.length > 1 &&
                          p.some(
                            (t) =>
                              t.status === "connected" &&
                              t.transfers?.every((n) => n.status === "queued"),
                          ) &&
                          e.jsxs("button", {
                            onClick: () => {
                              p.forEach((t) => {
                                t.status === "connected" &&
                                  t.transfers?.every(
                                    (n) => n.status === "queued",
                                  ) &&
                                  (v(t.id, { status: "accepted" }),
                                  b.current[t.id]?.dc?.send("ACCEPT"),
                                  setTimeout(() => T.current(t.id), 200));
                              });
                            },
                            className:
                              "inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg transition-colors",
                            children: [
                              e.jsx(d.Send, { className: "w-3 h-3" }),
                              " Send to all",
                            ],
                          }),
                        e.jsxs("button", {
                          onClick: Ye,
                          disabled: f.length === 0,
                          className:
                            "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
                          children: [
                            e.jsx(d.Plus, { className: "w-3.5 h-3.5" }),
                            " Add receiver",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(P, {
                  className: "space-y-2",
                  children: [
                    p.length === 0 &&
                      e.jsx("div", {
                        className: "text-center py-8",
                        children: e.jsx("p", {
                          className: "text-xs text-zinc-700",
                          children: "Add files first, then add receivers",
                        }),
                      }),
                    p.map((t) => e.jsx(lt, { peer: t }, t.id)),
                  ],
                }),
              ],
            }),
            p.some((t) =>
              ["connected", "accepted", "sending", "done"].includes(t.status),
            ) &&
              e.jsxs(R, {
                children: [
                  e.jsxs(A, {
                    children: [
                      e.jsx(d.Users, {
                        className: "w-3.5 h-3.5 text-zinc-600",
                      }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Group chat",
                      }),
                      e.jsx("span", {
                        className: "text-xs text-zinc-700 ml-1",
                        children: "— visible to all receivers",
                      }),
                      e.jsxs("span", {
                        className:
                          "ml-auto text-[11px] text-zinc-700 font-mono",
                        children: [
                          p.filter((t) =>
                            [
                              "connected",
                              "accepted",
                              "sending",
                              "done",
                            ].includes(t.status),
                          ).length,
                          " connected",
                        ],
                      }),
                    ],
                  }),
                  e.jsx(P, {
                    className: "p-0",
                    children: e.jsx(Ae, {
                      messages: $e,
                      onSend: et,
                      title: "Group",
                      placeholder: "Send to all receivers…",
                    }),
                  }),
                ],
              }),
          ],
        }),
      a === "receive" &&
        e.jsxs("div", {
          className: "space-y-3",
          children: [
            e.jsxs(R, {
              children: [
                e.jsxs(A, {
                  children: [
                    e.jsx(L, { n: "1", done: !!I }),
                    e.jsx("span", {
                      className: "text-sm font-medium text-zinc-200",
                      children: "Enter offer code",
                    }),
                  ],
                }),
                e.jsxs(P, {
                  className: "space-y-3",
                  children: [
                    O &&
                      !I &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-xs text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2",
                        children: [
                          e.jsx(d.Link, {
                            className:
                              "w-3.5 h-3.5 flex-shrink-0 text-zinc-600",
                          }),
                          "Offer code loaded from shared link",
                        ],
                      }),
                    e.jsx("textarea", {
                      rows: 4,
                      value: O,
                      onChange: (t) => ae(t.target.value),
                      placeholder:
                        "Paste the offer code from the sender, or open the shared link…",
                      className:
                        "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-[11px] font-mono text-zinc-300 placeholder:text-zinc-700 resize-none focus:outline-none focus:border-zinc-600 transition-colors leading-relaxed",
                    }),
                    D &&
                      e.jsx("input", {
                        value: ye,
                        onChange: (t) => We(t.target.value),
                        type: "password",
                        placeholder: "Decryption password (if encrypted)",
                        className:
                          "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors",
                      }),
                    e.jsx("button", {
                      onClick: tt,
                      disabled: !O.trim() || C === "connecting",
                      className:
                        "px-4 py-2.5 bg-white hover:bg-zinc-100 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-zinc-900 text-sm font-semibold rounded-lg transition-colors",
                      children:
                        C === "connecting" ? "Generating…" : "Generate answer",
                    }),
                  ],
                }),
              ],
            }),
            I &&
              e.jsxs(R, {
                children: [
                  e.jsxs(A, {
                    children: [
                      e.jsx(L, {
                        n: "2",
                        done: ["connected", "done"].includes(C),
                      }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Send answer to sender",
                      }),
                    ],
                  }),
                  e.jsxs(P, {
                    className: "space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-1",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs text-zinc-500 uppercase tracking-widest",
                            children: "Answer code",
                          }),
                          e.jsx(Z, {
                            text: I,
                            id: "answer",
                            label: "Copy answer",
                          }),
                        ],
                      }),
                      e.jsx("textarea", {
                        rows: 4,
                        readOnly: !0,
                        value: I,
                        className:
                          "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-[11px] font-mono text-zinc-500 resize-none focus:outline-none leading-relaxed",
                      }),
                      e.jsxs("div", {
                        className: `flex items-center gap-2 text-xs px-3 py-2 rounded-lg border
                  ${["connected", "done"].includes(C) ? "text-white bg-white/5 border-zinc-600" : "text-zinc-500 bg-zinc-950 border-zinc-800"}`,
                        children: [
                          e.jsx("span", {
                            className: `w-1.5 h-1.5 rounded-full flex-shrink-0 ${ke(C)}`,
                          }),
                          C === "waitConnect" &&
                            "Waiting for sender to connect…",
                          C === "connected" && "Connected",
                          C === "receiving" && "Receiving files…",
                          C === "done" && "All transfers complete",
                          C === "failed" && "Connection failed — try again",
                          C === "paused" && "Sender paused",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            _.length > 0 &&
              e.jsxs(R, {
                children: [
                  e.jsxs(A, {
                    children: [
                      e.jsx(L, {
                        n: "3",
                        done: _.every((t) => t.accepted !== null),
                      }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Incoming files",
                      }),
                      e.jsxs("span", {
                        className: "ml-auto text-xs text-zinc-600",
                        children: [
                          _.length,
                          " file",
                          _.length !== 1 ? "s" : "",
                        ],
                      }),
                    ],
                  }),
                  e.jsx(P, {
                    className: "space-y-2",
                    children: _.map((t) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-3 bg-zinc-950 border border-zinc-800/60 rounded-lg px-3 py-3",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-mono uppercase tracking-wider text-zinc-600 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded flex-shrink-0",
                              children: fe(t.name) || "?",
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-sm text-zinc-200 font-medium truncate",
                                  children: t.name,
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mt-0.5",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[11px] text-zinc-600 font-mono",
                                      children: H(t.size),
                                    }),
                                    t.encrypted &&
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 text-zinc-500 font-mono",
                                        children: "enc",
                                      }),
                                    t.compressed &&
                                      e.jsx("span", {
                                        className:
                                          "text-[10px] px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-600 font-mono",
                                        children: "gz",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            t.accepted === null &&
                              e.jsxs("div", {
                                className: "flex gap-2 flex-shrink-0",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => nt(t.tid),
                                    className:
                                      "px-3 py-1.5 bg-white hover:bg-zinc-100 text-zinc-900 text-xs font-semibold rounded-lg transition-colors",
                                    children: "Accept",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => rt(t.tid),
                                    className:
                                      "px-3 py-1.5 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-500 hover:text-zinc-300 text-xs rounded-lg transition-colors",
                                    children: "Reject",
                                  }),
                                ],
                              }),
                            t.accepted === !0 &&
                              e.jsxs("span", {
                                className:
                                  "text-xs text-zinc-400 flex items-center gap-1 flex-shrink-0",
                                children: [
                                  e.jsx(d.Check, { className: "w-3 h-3" }),
                                  "Accepted",
                                ],
                              }),
                            t.accepted === !1 &&
                              e.jsx("span", {
                                className:
                                  "text-xs text-zinc-600 flex-shrink-0",
                                children: "Rejected",
                              }),
                          ],
                        },
                        t.tid,
                      ),
                    ),
                  }),
                ],
              }),
            ze.length > 0 &&
              e.jsxs(R, {
                children: [
                  e.jsxs(A, {
                    children: [
                      e.jsx(d.Download, {
                        className: "w-3.5 h-3.5 text-zinc-500",
                      }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-zinc-200",
                        children: "Downloads",
                      }),
                    ],
                  }),
                  e.jsx(P, {
                    className: "space-y-2",
                    children: ze.map((t) =>
                      e.jsx(
                        Re,
                        { tx: { ...t, id: t.tid }, peerId: null, canPause: !1 },
                        t.tid,
                      ),
                    ),
                  }),
                ],
              }),
            C === "connected" &&
              e.jsx(Ae, {
                messages: Ge,
                onSend: ct,
                placeholder: "Reply to sender…",
              }),
          ],
        }),
      a !== "home" &&
        e.jsx("div", {
          className: "mt-8 flex items-center gap-6 px-1",
          children: [
            { icon: d.Link, label: "Share via URL or QR" },
            { icon: d.Wifi, label: "Direct WebRTC channel" },
            { icon: d.Shield, label: "SHA-256 verified" },
          ].map(({ icon: t, label: n }) =>
            e.jsxs(
              "div",
              {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(t, {
                    className: "w-3 h-3 text-zinc-700 flex-shrink-0",
                  }),
                  e.jsx("p", {
                    className: "text-[11px] text-zinc-700",
                    children: n,
                  }),
                ],
              },
              n,
            ),
          ),
        }),
    ],
  });
}
export { Nt as default };
