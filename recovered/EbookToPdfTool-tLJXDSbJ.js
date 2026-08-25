import { r as E, j as e } from "./react-vendor-Bc7KCos-.js";
const M = 0.352778,
  le = {
    A4: [210, 297],
    A5: [148, 210],
    Letter: [215.9, 279.4],
    B5: [176, 250],
    Digest: [139.7, 215.9],
  },
  ye = new Set([
    "jpg",
    "jpeg",
    "png",
    "gif",
    "webp",
    "bmp",
    "tiff",
    "tif",
    "svg",
    "avif",
  ]),
  ve = new Set([
    "a",
    "abbr",
    "acronym",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "cite",
    "code",
    "data",
    "del",
    "dfn",
    "em",
    "font",
    "i",
    "img",
    "ins",
    "kbd",
    "label",
    "mark",
    "q",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "tt",
    "u",
    "var",
    "wbr",
  ]);
function ee(n) {
  if (!n) return "";
  const h = [];
  for (const s of n.split("/"))
    s === ".." ? h.pop() : s && s !== "." && h.push(s);
  return h.join("/");
}
function we(n, h, s) {
  if (!n) return [];
  const o = (a) => a.split("#")[0].split("?")[0].trim(),
    u = o(n),
    x = o(decodeURIComponent(n));
  if (!u && !x) return [];
  if (u.startsWith("data:") || u.includes("://")) return [];
  const c = new Set(),
    r = (a) => {
      if (a) {
        const t = ee(a);
        t && c.add(t);
      }
    };
  for (const a of [u, x]) {
    if (!a) continue;
    const t = a.replace(/^\//, "");
    (r(t),
      h && r(h.replace(/\/$/, "") + "/" + t),
      s && s !== h && r(s.replace(/\/$/, "") + "/" + t));
    const d = t.split("/").pop();
    (r(d), s && r(s.replace(/\/$/, "") + "/" + d));
  }
  return [...c];
}
function je(n) {
  try {
    const s = new DOMParser().parseFromString(
      n,
      "image/svg+xml",
    ).documentElement;
    let o = parseFloat(s.getAttribute("width") || "0"),
      u = parseFloat(s.getAttribute("height") || "0");
    if (!o || !u) {
      const x = s.getAttribute("viewBox");
      if (x) {
        const c = x.trim().split(/[\s,]+/);
        ((o = parseFloat(c[2]) || 800), (u = parseFloat(c[3]) || 600));
      }
    }
    return { w: o || 800, h: u || 600 };
  } catch {
    return { w: 800, h: 600 };
  }
}
function he(n, h) {
  return new Promise((s, o) => {
    const u = atob(n),
      x = je(u),
      c = Math.max(x.w, 32),
      r = Math.max(x.h, 32),
      a = u
        .replace(/<svg([^>]*)width="[^"]*"/, `<svg$1width="${c}"`)
        .replace(/<svg([^>]*)height="[^"]*"/, `<svg$1height="${r}"`)
        .replace(
          /<svg([^>]*)(?!.*width=)/,
          `<svg$1 width="${c}" height="${r}" `,
        ),
      t = new Blob([a], { type: "image/svg+xml" }),
      d = URL.createObjectURL(t),
      p = new Image();
    ((p.onload = () => {
      const m = document.createElement("canvas");
      ((m.width = p.naturalWidth || c), (m.height = p.naturalHeight || r));
      const y = m.getContext("2d");
      ((y.fillStyle = "#ffffff"),
        y.fillRect(0, 0, m.width, m.height),
        y.drawImage(p, 0, 0),
        URL.revokeObjectURL(d));
      try {
        s({
          dataUrl: m.toDataURL("image/jpeg", 0.92),
          w: m.width,
          h: m.height,
        });
      } catch (l) {
        (URL.revokeObjectURL(d), o(l));
      }
    }),
      (p.onerror = () => {
        (URL.revokeObjectURL(d), o(new Error("SVG render failed")));
      }),
      (p.src = d));
  });
}
function xe(n) {
  return new Promise((h, s) => {
    const o = URL.createObjectURL(n),
      u = new Image();
    ((u.onload = () => {
      const x = document.createElement("canvas");
      ((x.width = u.naturalWidth), (x.height = u.naturalHeight));
      const c = x.getContext("2d");
      ((c.fillStyle = "#ffffff"),
        c.fillRect(0, 0, x.width, x.height),
        c.drawImage(u, 0, 0),
        URL.revokeObjectURL(o));
      try {
        h({
          dataUrl: x.toDataURL("image/jpeg", 0.92),
          w: x.width,
          h: x.height,
        });
      } catch (r) {
        (URL.revokeObjectURL(o), s(r));
      }
    }),
      (u.onerror = () => {
        (URL.revokeObjectURL(o), s(new Error("Image decode failed")));
      }),
      (u.src = o));
  });
}
function ce(n, h) {
  return new Promise((s) => {
    const o = new Image();
    ((o.onload = () => s({ w: o.naturalWidth || 0, h: o.naturalHeight || 0 })),
      (o.onerror = () => s({ w: 0, h: 0 })),
      (o.src = `data:${h};base64,${n}`));
  });
}
async function Ce(n, h) {
  const s = new Map(),
    o = [];
  n.forEach((u, x) => {
    if (x.dir) return;
    const c = u.split(".").pop().toLowerCase().split("?")[0];
    ye.has(c) && o.push({ relPath: u, entry: x, ext: c });
  });
  for (let u = 0; u < o.length; u++) {
    const { relPath: x, entry: c, ext: r } = o[u];
    try {
      const a = await c.async("uint8array");
      let t, d, p, m, y;
      if (r === "svg") {
        const g = new TextDecoder().decode(a),
          P = btoa(unescape(encodeURIComponent(g)));
        try {
          const { dataUrl: A, w: B, h: v } = await he(P);
          ((t = A.split(",")[1]),
            (d = "image/jpeg"),
            (p = "JPEG"),
            (m = B),
            (y = v));
        } catch {
          continue;
        }
      } else if (r === "png")
        ((t = de(a)),
          (d = "image/png"),
          (p = "PNG"),
          ({ w: m, h: y } = await ce(t, d)));
      else if (r === "jpg" || r === "jpeg")
        ((t = de(a)),
          (d = "image/jpeg"),
          (p = "JPEG"),
          ({ w: m, h: y } = await ce(t, d)));
      else {
        const g =
            r === "gif"
              ? "image/gif"
              : r === "webp"
                ? "image/webp"
                : r === "bmp"
                  ? "image/bmp"
                  : r === "avif"
                    ? "image/avif"
                    : "image/jpeg",
          P = new Blob([a], { type: g });
        try {
          const { dataUrl: A, w: B, h: v } = await xe(P);
          ((t = A.split(",")[1]),
            (d = "image/jpeg"),
            (p = "JPEG"),
            (m = B),
            (y = v));
        } catch {
          continue;
        }
      }
      if (!t) continue;
      Ne(s, x, { b64: t, mime: d, jsPdfType: p, w: m || 0, h: y || 0 });
    } catch {}
    h && h(Math.round(((u + 1) / o.length) * 100));
  }
  return s;
}
function de(n) {
  let h = "";
  for (let o = 0; o < n.length; o += 8192)
    h += String.fromCharCode(...n.subarray(o, o + 8192));
  return btoa(h);
}
function Ne(n, h, s) {
  const o = new Set(),
    u = (r) => {
      r && (o.add(r), o.add(r.toLowerCase()));
    },
    x = ee(h),
    c = h.split("/").pop();
  (u(x), u(c));
  try {
    (u(ee(decodeURIComponent(h))), u(decodeURIComponent(c)));
  } catch {}
  try {
    u(ee(encodeURIComponent(c)));
  } catch {}
  for (const r of o) n.has(r) || n.set(r, s);
}
function Se(n, h, s, o) {
  if (!h) return null;
  if (h.startsWith("data:")) {
    const r = h.match(/^data:([^;]+);base64,(.+)$/);
    if (!r) return null;
    const [, a, t] = r,
      d = a === "image/png" ? "PNG" : "JPEG";
    return {
      b64: t,
      mime: a.includes("png") ? "image/png" : "image/jpeg",
      jsPdfType: d,
      w: 0,
      h: 0,
    };
  }
  const u = we(h, s, o);
  for (const r of u) {
    if (n.has(r)) return n.get(r);
    const a = r.toLowerCase();
    if (n.has(a)) return n.get(a);
  }
  const c = h.split("/").pop().split("#")[0].split("?")[0].toLowerCase();
  for (const [r, a] of n) if (r.toLowerCase() === c) return a;
  return null;
}
async function oe(n) {
  try {
    const h = new XMLSerializer().serializeToString(n),
      s = btoa(unescape(encodeURIComponent(h))),
      { dataUrl: o, w: u, h: x } = await he(s);
    return {
      b64: o.split(",")[1],
      mime: "image/jpeg",
      jsPdfType: "JPEG",
      w: u,
      h: x,
    };
  } catch {
    return null;
  }
}
function V(n, h) {
  const s = h || { bold: !1, italic: !1, code: !1 },
    o = [];
  if (!n) return o;
  if (n.nodeType === 3) {
    const c = n.textContent || "";
    return (
      c && o.push({ text: c, bold: s.bold, italic: s.italic, code: s.code }),
      o
    );
  }
  if (n.nodeType !== 1) return o;
  const u = n.tagName.toLowerCase();
  if (
    ["script", "style", "head", "nav", "noscript", "iframe", "svg"].includes(u)
  )
    return o;
  if (u === "br")
    return (
      o.push({
        text: `
`,
        bold: s.bold,
        italic: s.italic,
        code: s.code,
      }),
      o
    );
  const x = { ...s };
  ((u === "strong" || u === "b") && (x.bold = !0),
    (u === "em" || u === "i") && (x.italic = !0),
    ["code", "kbd", "samp", "tt"].includes(u) && (x.code = !0));
  try {
    const c = n.style?.fontWeight;
    ((c === "bold" || parseInt(c) >= 600) && (x.bold = !0),
      n.style?.fontStyle === "italic" && (x.italic = !0),
      n.style?.fontFamily?.includes("monospace") && (x.code = !0));
  } catch {}
  for (const c of n.childNodes) o.push(...V(c, x));
  return o;
}
function Z(n) {
  const h = [];
  for (const s of n) {
    const o = s.text
      .replace(
        /\r\n?/g,
        `
`,
      )
      .replace(/[ \t]{2,}/g, " ");
    if (!o) continue;
    const u = h[h.length - 1];
    u && u.bold === s.bold && u.italic === s.italic && u.code === s.code
      ? (u.text += o)
      : h.push({ ...s, text: o });
  }
  return h.filter((s) => s.text.replace(/\n/g, "").trim() || s.text === " ");
}
function ie(n) {
  return (n || [])
    .map((h) => h.text || "")
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}
async function re(n, h) {
  const s = [];
  let o = [];
  const u = () => {
      if (!o.length) return;
      const r = Z(o);
      ((o = []),
        r.some((a) => a.text.replace(/\n/g, "").trim()) &&
          s.push({ type: "paragraph", runs: r }));
    },
    x = (r) => {
      let a = r.getAttribute("src") || "";
      return (
        (!a || a.startsWith("data:image/gif;") || a === "#") &&
          (a =
            r.getAttribute("data-src") ||
            r.getAttribute("data-original") ||
            r.getAttribute("data-lazy") ||
            r.getAttribute("data-lazy-src") ||
            a),
        a ||
          (a =
            (r.getAttribute("srcset") || "")
              .split(",")[0]
              ?.trim()
              ?.split(/\s+/)[0] || ""),
        a.trim()
      );
    },
    c = async (r) => {
      if (!r) return;
      if (r.nodeType === 3) {
        const t = r.textContent || "";
        /\S/.test(t) && o.push({ text: t, bold: !1, italic: !1, code: !1 });
        return;
      }
      if (r.nodeType !== 1) return;
      const a = r.tagName.toLowerCase();
      if (!["script", "style", "head", "noscript", "iframe"].includes(a)) {
        if (ve.has(a) && a !== "img" && a !== "svg") {
          o.push(...V(r, { bold: !1, italic: !1, code: !1 }));
          return;
        }
        if ((u(), /^h[1-6]$/.test(a))) {
          const t = Z(V(r, {})),
            d = ie(t);
          d.trim() &&
            s.push({
              type: "heading",
              level: parseInt(a[1]),
              runs: t,
              text: d,
            });
          return;
        }
        if (a === "p") {
          for (const p of r.querySelectorAll("img")) {
            const m = x(p);
            m &&
              s.push({
                type: "image",
                src: m,
                alt: p.getAttribute("alt") || "",
                itemDir: h,
                caption: "",
              });
          }
          for (const p of r.querySelectorAll("picture")) {
            const m = x(
                p.querySelector("source") || p.querySelector("img") || p,
              ),
              y = p.querySelector("img")?.getAttribute("alt") || "";
            m &&
              s.push({
                type: "image",
                src: m,
                alt: y,
                itemDir: h,
                caption: "",
              });
          }
          for (const p of r.querySelectorAll("svg")) {
            const m = await oe(p);
            m && s.push({ type: "rasterImage", ...m, caption: "" });
          }
          const t = r.cloneNode(!0);
          t.querySelectorAll("img,picture,svg,video,audio,canvas").forEach(
            (p) => p.remove(),
          );
          const d = Z(V(t, {}));
          d.some((p) => p.text.replace(/\n/g, "").trim()) &&
            s.push({ type: "paragraph", runs: d });
          return;
        }
        if (a === "blockquote") {
          const t = await re(r, h);
          for (const d of t)
            s.push(d.type === "paragraph" ? { ...d, type: "blockquote" } : d);
          return;
        }
        if (a === "pre") {
          const t = r.textContent
            .replace(
              /\r\n/g,
              `
`,
            )
            .trim();
          t && s.push({ type: "pre", text: t });
          return;
        }
        if (a === "img") {
          const t = x(r);
          t &&
            s.push({
              type: "image",
              src: t,
              alt: r.getAttribute("alt") || "",
              itemDir: h,
              caption: "",
            });
          return;
        }
        if (a === "picture") {
          const t = r.querySelector("source") || r.querySelector("img");
          if (t) {
            const d = x(t),
              p = r.querySelector("img")?.getAttribute("alt") || "";
            d &&
              s.push({
                type: "image",
                src: d,
                alt: p,
                itemDir: h,
                caption: "",
              });
          }
          return;
        }
        if (a === "svg") {
          const t = await oe(r);
          t && s.push({ type: "rasterImage", ...t, caption: "" });
          return;
        }
        if (a === "figure") {
          const t =
              r
                .querySelector("figcaption")
                ?.textContent?.trim()
                .substring(0, 160) || "",
            d = r.querySelector("img"),
            p = r.querySelector("picture"),
            m = r.querySelector("svg");
          if (d) {
            const y = x(d);
            y &&
              s.push({
                type: "image",
                src: y,
                alt: d.getAttribute("alt") || "",
                itemDir: h,
                caption: t,
              });
          } else if (p) {
            const y = p.querySelector("source") || p.querySelector("img"),
              l = y ? x(y) : "",
              g = p.querySelector("img")?.getAttribute("alt") || "";
            l &&
              s.push({ type: "image", src: l, alt: g, itemDir: h, caption: t });
          } else if (m) {
            const y = await oe(m);
            y && s.push({ type: "rasterImage", ...y, caption: t });
          } else {
            for (const y of r.childNodes) await c(y);
            t &&
              s.push({
                type: "paragraph",
                runs: [{ text: t, bold: !1, italic: !0, code: !1 }],
              });
          }
          return;
        }
        if (a === "hr") {
          s.push({ type: "hr" });
          return;
        }
        if (a === "ul" || a === "ol") {
          const t = [];
          for (const d of r.querySelectorAll(":scope > li")) {
            const p = d.cloneNode(!0);
            p.querySelectorAll("ul,ol").forEach((g) => g.remove());
            const m = Z(V(p, {})),
              y = d.querySelector("ul,ol"),
              l = y ? await re(y, h) : [];
            t.push({ runs: m, nested: l });
          }
          t.length && s.push({ type: "list", ordered: a === "ol", items: t });
          return;
        }
        if (a === "dl") {
          for (const t of r.children) {
            const d = t.tagName.toLowerCase(),
              p = t.textContent.trim();
            p &&
              (d === "dt"
                ? s.push({
                    type: "paragraph",
                    runs: [{ text: p, bold: !0, italic: !1, code: !1 }],
                  })
                : d === "dd" &&
                  s.push({
                    type: "paragraph",
                    runs: [{ text: p, bold: !1, italic: !1, code: !1 }],
                    indent: 8,
                  }));
          }
          return;
        }
        if (a === "table") {
          const t = [],
            d = [];
          for (const p of r.querySelectorAll("thead tr")) {
            const m = [];
            for (const y of p.querySelectorAll("th,td"))
              m.push({ runs: Z(V(y, {})), isHeader: !0 });
            m.length && t.push(m);
          }
          for (const p of r.querySelectorAll("tbody tr, tr")) {
            if (p.closest("thead")) continue;
            const m = [];
            for (const y of p.querySelectorAll("td,th"))
              m.push({
                runs: Z(V(y, {})),
                isHeader: y.tagName.toLowerCase() === "th",
              });
            m.length && d.push(m);
          }
          (t.length || d.length) &&
            s.push({ type: "table", header: t, rows: d });
          return;
        }
        for (const t of r.childNodes) await c(t);
        u();
      }
    };
  for (const r of n.childNodes) await c(r);
  return (u(), s);
}
async function ze(n, h, s) {
  if (!window.JSZip)
    throw new Error("JSZip not loaded — please reload the page.");
  h("Opening archive…");
  const o = await window.JSZip.loadAsync(await n.arrayBuffer()),
    u = await o.file("META-INF/container.xml")?.async("text");
  if (!u) throw new Error("Invalid EPUB: missing META-INF/container.xml");
  const c = new DOMParser()
    .parseFromString(u, "text/xml")
    .querySelector("rootfile")
    ?.getAttribute("full-path");
  if (!c) throw new Error("Invalid EPUB: cannot locate OPF root file");
  const r = await o.file(c)?.async("text");
  if (!r) throw new Error("Invalid EPUB: cannot read OPF document");
  const a = new DOMParser().parseFromString(r, "text/xml"),
    t = c.includes("/") ? c.substring(0, c.lastIndexOf("/") + 1) : "",
    d = (v) =>
      a
        .getElementsByTagNameNS("http://purl.org/dc/elements/1.1/", v)[0]
        ?.textContent?.trim() ||
      a.querySelector(`dc\\:${v}`)?.textContent?.trim() ||
      a.querySelector(v)?.textContent?.trim() ||
      "",
    p = {
      title: d("title") || n.name.replace(/\.epub$/i, ""),
      author: d("creator") || "",
      publisher: d("publisher") || "",
      language: d("language") || "en",
      description: d("description") || "",
      date: d("date") || "",
      rights: d("rights") || "",
    },
    m = {};
  a.querySelectorAll("manifest > item").forEach((v) => {
    const T = v.getAttribute("id"),
      z = v.getAttribute("href") || "";
    try {
      m[T] = {
        id: T,
        href: z,
        hrefDecoded: decodeURIComponent(z),
        fullPath: ee(t + decodeURIComponent(z)),
        mediaType: v.getAttribute("media-type") || "",
        properties: v.getAttribute("properties") || "",
      };
    } catch {
      m[T] = {
        id: T,
        href: z,
        hrefDecoded: z,
        fullPath: ee(t + z),
        mediaType: v.getAttribute("media-type") || "",
        properties: v.getAttribute("properties") || "",
      };
    }
  });
  const y = [];
  a.querySelectorAll("spine > itemref").forEach((v) => {
    const T = v.getAttribute("idref");
    m[T] && y.push(m[T]);
  });
  let l = null;
  try {
    const v = a.querySelector('meta[name="cover"]')?.getAttribute("content"),
      T =
        (v && m[v]) ||
        Object.values(m).find(
          (z) =>
            z.properties.includes("cover-image") &&
            z.mediaType.startsWith("image/"),
        );
    if (T) {
      const z = await o.file(T.fullPath)?.async("uint8array");
      if (z)
        if (T.mediaType === "image/svg+xml" || T.fullPath.endsWith(".svg")) {
          const b = new TextDecoder().decode(z),
            F = btoa(unescape(encodeURIComponent(b))),
            { dataUrl: L, w, h: f } = await he(F);
          l = {
            b64: L.split(",")[1],
            mime: "image/jpeg",
            jsPdfType: "JPEG",
            w,
            h: f,
          };
        } else if (T.mediaType === "image/png") {
          const b = de(z),
            { w: F, h: L } = await ce(b, "image/png");
          l = { b64: b, mime: "image/png", jsPdfType: "PNG", w: F, h: L };
        } else {
          const b = new Blob([z], { type: T.mediaType || "image/jpeg" }),
            { dataUrl: F, w: L, h: w } = await xe(b);
          l = {
            b64: F.split(",")[1],
            mime: "image/jpeg",
            jsPdfType: "JPEG",
            w: L,
            h: w,
          };
        }
    }
  } catch {}
  h("Preloading images…");
  const g = await Ce(o, s),
    P = [],
    A = Object.values(m).find(
      (v) =>
        v.properties.includes("nav") &&
        (v.mediaType.includes("html") || v.mediaType.includes("xml")),
    );
  if (A) {
    const v = await o.file(A.fullPath)?.async("text");
    if (v) {
      const T = new DOMParser().parseFromString(v, "text/html"),
        z =
          T.querySelector('nav[epub\\:type="toc"]') ||
          T.querySelector('nav[role="doc-toc"]') ||
          T.querySelector("nav");
      z &&
        z.querySelectorAll("a").forEach(($) => {
          const b = $.textContent.trim();
          b &&
            !P.find((F) => F.title === b) &&
            P.push({ title: b, href: $.getAttribute("href") || "" });
        });
    }
  }
  if (!P.length) {
    const v = Object.values(m).find(
      (T) => T.mediaType === "application/x-dtbncx+xml",
    );
    if (v) {
      const T = await o.file(v.fullPath)?.async("text");
      T &&
        new DOMParser()
          .parseFromString(T, "text/xml")
          .querySelectorAll("navPoint")
          .forEach(($) => {
            const b =
                $.querySelector("navLabel text")?.textContent?.trim() || "",
              F = $.querySelector("content")?.getAttribute("src") || "";
            b && P.push({ title: b, href: F });
          });
    }
  }
  h("Parsing chapters…");
  const B = [];
  for (const v of y) {
    if (!v.mediaType.includes("html") && !v.mediaType.includes("xml")) continue;
    const T = await o.file(v.fullPath)?.async("text");
    if (!T) continue;
    const z = new DOMParser().parseFromString(T, "text/html");
    z.querySelectorAll("script,style,nav").forEach((N) => N.remove());
    const $ = z.body || z.documentElement,
      b = $.textContent || "";
    if (b.trim().length < 20) continue;
    const F = v.fullPath.includes("/")
        ? v.fullPath.substring(0, v.fullPath.lastIndexOf("/") + 1)
        : "",
      w = (
        P.find((N) => {
          const S = decodeURIComponent(N.href.split("#")[0]);
          return (
            S &&
            (v.href.endsWith(S) ||
              v.hrefDecoded.endsWith(S) ||
              v.fullPath.endsWith(S))
          );
        })?.title ||
        z.querySelector("title")?.textContent?.trim() ||
        z.querySelector("h1,h2,h3")?.textContent?.trim() ||
        `Section ${B.length + 1}`
      )
        .trim()
        .substring(0, 100),
      f = await re($, F),
      j = b.trim().split(/\s+/).filter(Boolean).length,
      C = f.filter(
        (N) => N.type === "image" || N.type === "rasterImage",
      ).length;
    B.push({
      id: v.id,
      index: B.length,
      title: w,
      fullPath: v.fullPath,
      itemDir: F,
      blocks: f,
      wordCount: j,
      imgCount: C,
      estimatedPages: Math.max(1, Math.ceil(j / 250 + C * 0.6)),
    });
  }
  if (!B.length) throw new Error("No readable chapters found in this EPUB.");
  return {
    metadata: p,
    coverImage: l,
    chapters: B,
    tocItems: P,
    imageCache: g,
    opfDir: t,
    sourceFormat: "epub",
    stats: { totalImages: g.size, totalChapters: B.length },
  };
}
function Te(n, h) {
  const s = n
      .replace(
        /\r\n/g,
        `
`,
      )
      .replace(
        /\r/g,
        `
`,
      ).split(`
`),
    o = [];
  let u = [],
    x = h.replace(/\.txt$/i, "");
  const c =
      /^(chapter|ch\.?\s|section|part\s|book\s|epilogue|prologue|introduction|conclusion|preface|afterword)\s*[\dIVXivx:.\-–—]*/i,
    r = () => {
      if (!u.length) return;
      const a = u.reduce(
        (t, d) =>
          t +
          ie(d.runs || [])
            .split(/\s+/)
            .filter(Boolean).length,
        0,
      );
      (o.push({
        id: `ch-${o.length}`,
        index: o.length,
        title: x.trim().substring(0, 100),
        itemDir: "",
        blocks: [...u],
        wordCount: a,
        imgCount: 0,
        estimatedPages: Math.max(1, Math.ceil(a / 250)),
      }),
        (u = []));
    };
  for (const a of s) {
    const t = a.trim();
    if (!t) continue;
    const d = c.test(t),
      p = /^[A-Z][A-Z\s\d:—–\-]{3,65}$/.test(t) && t.length < 66;
    (d || p) && u.length > 30
      ? (r(),
        (x = t),
        u.push({
          type: "heading",
          level: 1,
          runs: [{ text: t, bold: !0, italic: !1, code: !1 }],
          text: t,
        }))
      : u.push({
          type: "paragraph",
          runs: [{ text: t, bold: !1, italic: !1, code: !1 }],
        });
  }
  if ((r(), !o.length)) {
    const a = n.split(/\s+/).filter(Boolean).length;
    o.push({
      id: "ch-0",
      index: 0,
      title: x,
      itemDir: "",
      blocks: [
        {
          type: "paragraph",
          runs: [{ text: n, bold: !1, italic: !1, code: !1 }],
        },
      ],
      wordCount: a,
      imgCount: 0,
      estimatedPages: Math.max(1, Math.ceil(a / 250)),
    });
  }
  return {
    metadata: {
      title: h.replace(/\.txt$/i, ""),
      author: "",
      publisher: "",
      language: "en",
      description: "",
      date: "",
    },
    coverImage: null,
    chapters: o,
    tocItems: o.map((a) => ({ title: a.title, href: "" })),
    imageCache: new Map(),
    opfDir: "",
    sourceFormat: "txt",
    stats: { totalImages: 0, totalChapters: o.length },
  };
}
async function ke(n, h) {
  const s = new DOMParser().parseFromString(n, "text/html");
  s.querySelectorAll("script,style,nav,header,footer").forEach((t) =>
    t.remove(),
  );
  const o =
      s.querySelector("title")?.textContent?.trim() ||
      h.replace(/\.html?$/i, ""),
    u = s.body || s.documentElement,
    x = u.textContent || "",
    c = await re(u, ""),
    r = x.trim().split(/\s+/).filter(Boolean).length,
    a = c.filter((t) => t.type === "image" || t.type === "rasterImage").length;
  return {
    metadata: {
      title: o,
      author:
        s.querySelector('meta[name="author"]')?.getAttribute("content") || "",
      publisher: "",
      language: s.querySelector("html")?.getAttribute("lang") || "en",
      description:
        s.querySelector('meta[name="description"]')?.getAttribute("content") ||
        "",
      date: "",
    },
    coverImage: null,
    chapters: [
      {
        id: "ch-0",
        index: 0,
        title: o,
        itemDir: "",
        blocks: c,
        wordCount: r,
        imgCount: a,
        estimatedPages: Math.max(1, Math.ceil(r / 250 + a * 0.6)),
      },
    ],
    tocItems: [{ title: o, href: "" }],
    imageCache: new Map(),
    opfDir: "",
    sourceFormat: "html",
    stats: { totalImages: a, totalChapters: 1 },
  };
}
function fe(n, h, s) {
  n.setFont(
    h.code ? "courier" : s,
    h.bold && h.italic
      ? "bolditalic"
      : h.bold
        ? "bold"
        : h.italic
          ? "italic"
          : "normal",
  );
}
function Y(n, h, s, o, u) {
  const x = [];
  for (const d of h) {
    const p = (d.text || "")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .split(" ");
    for (const m of p)
      m && x.push({ word: m, bold: d.bold, italic: d.italic, code: d.code });
  }
  if (!x.length) return [];
  (n.setFontSize(o), n.setFont(s, "normal"));
  const c = n.getStringUnitWidth(" ") * o * M,
    r = [];
  let a = [],
    t = 0;
  for (const d of x) {
    (fe(n, d, s), n.setFontSize(o));
    const p = n.getStringUnitWidth(d.word) * o * M,
      m = a.length ? c + p : p;
    a.length && t + m > u + 0.01
      ? (r.push(a), (a = [d]), (t = p))
      : (a.push(d), (t += m));
  }
  return (a.length && r.push(a), r);
}
function K(n, h, s, o, u, x, c) {
  (n.setFontSize(x), n.setFont(u, "normal"));
  const r = n.getStringUnitWidth(" ") * x * M;
  for (const a of h) {
    let t = s;
    for (let d = 0; d < a.length; d++) {
      const p = a[d];
      (fe(n, p, u),
        n.setFontSize(x),
        n.setTextColor(30, 30, 30),
        n.text(p.word, t, o),
        (t += n.getStringUnitWidth(p.word) * x * M),
        d < a.length - 1 && (t += r));
    }
    o += c;
  }
  return o;
}
function be(n, h, s, o) {
  const u = Math.min(s, 80),
    x = Math.min(o, 60);
  if (!n || !h) return { w: u, h: x };
  const c = n * 0.264583,
    r = h * 0.264583;
  let a = Math.min(c, s),
    t = a * (r / c);
  return (
    t > o && ((t = o), (a = t * (c / r))),
    a > s && ((a = s), (t = a * (r / c))),
    a < 1 && ((a = u), (t = Math.min(x, o))),
    { w: Math.round(a * 100) / 100, h: Math.round(t * 100) / 100 }
  );
}
const ue = {
  pageSize: "A4",
  fontFamily: "helvetica",
  fontSize: 12,
  marginTop: 22,
  marginBottom: 22,
  marginLeft: 25,
  marginRight: 20,
  lineSpacing: 1.6,
  includeCover: !0,
  includeTOC: !0,
  chapterBreaks: !0,
  pageNumbers: !0,
  pageNumberStyle: "alternating",
  runningHeader: !0,
  embedImages: !0,
  justifyText: !1,
  imageQuality: "high",
};
function me(n, h, s, o, u, x, c) {
  if (!h || !h.b64) return s;
  const r = Math.min(x - o.t - o.b - 20, 115),
    { w: a, h: t } = be(h.w, h.h, u, r),
    d = o.l + (u - a) / 2,
    p = c === "high" ? "NONE" : "FAST";
  try {
    return (
      n.addImage(
        `data:${h.mime};base64,${h.b64}`,
        h.jsPdfType,
        d,
        s,
        a,
        t,
        "",
        p,
      ),
      s + t + 2
    );
  } catch {
    return s;
  }
}
async function Fe(n, h, s, o, u) {
  const { jsPDF: x } = window.jspdf;
  if (!x) throw new Error("jsPDF not loaded — please reload the page.");
  const c = n.chapters.filter((b) => h.includes(b.id));
  if (!c.length) throw new Error("No chapters selected.");
  const [r, a] = le[s.pageSize] || le.A4,
    t = {
      t: s.marginTop,
      b: s.marginBottom,
      l: s.marginLeft,
      r: s.marginRight,
    },
    d = r - t.l - t.r,
    p = s.fontFamily,
    m = s.fontSize,
    y = m * s.lineSpacing * M,
    l = new x({ unit: "mm", format: [r, a], compress: !0 });
  let g = t.t;
  const P = () => {
      (l.addPage(), (g = t.t));
    },
    A = (b) => {
      g + b > a - t.b && P();
    },
    B = (b = m) => {
      (l.setFont(p, "normal"), l.setFontSize(b), l.setTextColor(30, 30, 30));
    },
    v = (b = m) => {
      (l.setFont(p, "bold"), l.setFontSize(b), l.setTextColor(10, 10, 10));
    },
    T = (b = m) => {
      (l.setFont(p, "italic"), l.setFontSize(b), l.setTextColor(60, 60, 60));
    },
    z = (b = 8) => {
      (l.setFont(p, "normal"), l.setFontSize(b), l.setTextColor(150, 150, 150));
    },
    $ = (b = m - 1.5) => {
      (l.setFont("courier", "normal"),
        l.setFontSize(b),
        l.setTextColor(50, 50, 50));
    };
  if (s.includeCover) {
    if ((u("Building cover page…"), n.coverImage))
      try {
        const { b64: b, mime: F, jsPdfType: L, w, h: f } = n.coverImage,
          { w: j, h: C } = be(w, f, r, a);
        l.addImage(
          `data:${F};base64,${b}`,
          L,
          (r - j) / 2,
          (a - C) / 2,
          j,
          C,
          "",
          s.imageQuality === "high" ? "NONE" : "FAST",
        );
      } catch {
        pe(l, p, n.metadata, r, a, t, d);
      }
    else pe(l, p, n.metadata, r, a, t, d);
    P();
  }
  s.includeTOC &&
    c.length > 1 &&
    (u("Generating table of contents…"),
    v(16),
    l.text("Contents", t.l, g),
    (g += 16 * M * 1.5 + 2),
    l.setDrawColor(185),
    l.setLineWidth(0.15),
    l.line(t.l, g, t.l + d, g),
    (g += 5),
    c.forEach((b, F) => {
      (A(y * 1.8), B(m - 0.5));
      const L = `${F + 1}`,
        w = b.title.substring(0, 66);
      (l.text(w, t.l, g), l.text(L, t.l + d, g, { align: "right" }));
      const f = l.getStringUnitWidth(w) * (m - 0.5) * M,
        j = l.getStringUnitWidth(L) * (m - 0.5) * M + 2,
        C = d - f - j;
      if (C > 4) {
        (z(m - 2.5), l.setTextColor(200, 200, 200));
        const N = l.getStringUnitWidth(".") * (m - 2.5) * M,
          S = Math.max(0, Math.floor(C / N) - 3);
        S > 0 && l.text(".".repeat(S), t.l + f + N, g);
      }
      g += y * 1.8;
    }),
    P());
  for (let b = 0; b < c.length; b++) {
    const F = c[b];
    (o(Math.round(((b + 0.1) / c.length) * 100)),
      u(`Chapter ${b + 1}/${c.length}: "${F.title.substring(0, 40)}"`),
      b > 0 && s.chapterBreaks && P(),
      (g += 4));
    const L = (m + 7) * M * 1.3,
      w = Y(
        l,
        [{ text: F.title, bold: !0, italic: !1, code: !1 }],
        p,
        m + 7,
        d,
      );
    (A(w.length * L + 8),
      v(m + 7),
      K(l, w, t.l, g, p, m + 7, L),
      (g += w.length * L + 2),
      l.setDrawColor(40),
      l.setLineWidth(0.35),
      l.line(t.l, g, t.l + Math.min(26, d * 0.18), g),
      (g += 6));
    for (const f of F.blocks) {
      if (f.type === "heading") {
        const C = [m + 5, m + 3.5, m + 2, m + 1, m, m - 0.5][
            Math.min((f.level || 1) - 1, 5)
          ],
          N = C * M * 1.3,
          S = f.runs?.length
            ? f.runs
            : [{ text: f.text || "", bold: !0, italic: !1, code: !1 }],
          U = Y(l, S, p, C, d);
        ((g += 3),
          A(U.length * N + 4),
          v(C),
          K(l, U, t.l, g, p, C, N),
          (g += U.length * N + 2));
        continue;
      }
      if (f.type === "paragraph") {
        if (!f.runs?.some((N) => N.text.replace(/\n/g, "").trim())) {
          g += y * 0.3;
          continue;
        }
        const j = f.indent || 0,
          C = Y(l, f.runs, p, m, d - j);
        if (!C.length) continue;
        (A(C.length * y), B(), (g = K(l, C, t.l + j, g, p, m, y)), (g += 0.8));
        continue;
      }
      if (f.type === "blockquote") {
        if (!f.runs?.some((U) => U.text.replace(/\n/g, "").trim())) continue;
        g += 2;
        const j = m - 1,
          C = j * s.lineSpacing * M,
          N = Y(l, f.runs, p, j, d - 10),
          S = N.length * C + 4;
        (A(S),
          l.setFillColor(165, 165, 165),
          l.rect(t.l + 1.5, g - j * M * 0.85, 2.2, S - 3, "F"),
          T(j),
          l.setTextColor(65, 65, 65),
          K(l, N, t.l + 7, g, p, j, C),
          (g += S));
        continue;
      }
      if (f.type === "pre") {
        const j = Math.max(m - 2, 7),
          C = j * 1.4 * M,
          N = l.splitTextToSize(f.text, d - 8),
          S = N.length * C + 6;
        (A(S),
          l.setFillColor(243, 243, 243),
          l.setDrawColor(210),
          l.setLineWidth(0.12),
          l.roundedRect(t.l, g - C * 0.85, d, S, 1.5, 1.5, "FD"),
          $(j),
          l.text(N, t.l + 4, g),
          (g += S + 2));
        continue;
      }
      if (f.type === "hr") {
        ((g += 4), A(8));
        const j = t.l + d / 2;
        (l.setDrawColor(185),
          l.setLineWidth(0.12),
          l.line(j - 14, g, j + 14, g),
          (g += 5));
        continue;
      }
      if (f.type === "list") {
        for (let j = 0; j < f.items.length; j++) {
          const C = f.items[j],
            N = f.ordered ? `${j + 1}.` : "•",
            S = Y(l, C.runs, p, m, d - 6);
          if (S.length) {
            (A(S.length * y),
              B(),
              l.setTextColor(85, 85, 85),
              l.text(N, t.l + 1, g),
              l.setTextColor(30, 30, 30),
              K(l, S, t.l + 5.5, g, p, m, y),
              (g += S.length * y + 0.3));
            for (const U of C.nested || [])
              if (U.type === "list")
                for (let q = 0; q < U.items.length; q++) {
                  const R = U.items[q],
                    H = U.ordered ? `${q + 1}.` : "◦",
                    W = Y(l, R.runs, p, m - 0.5, d - 11);
                  W.length &&
                    (A(W.length * y),
                    B(m - 0.5),
                    l.setTextColor(100, 100, 100),
                    l.text(H, t.l + 6, g),
                    l.setTextColor(50, 50, 50),
                    K(l, W, t.l + 10, g, p, m - 0.5, y),
                    (g += W.length * y + 0.2));
                }
          }
        }
        g += 1.5;
        continue;
      }
      if (f.type === "table") {
        const j = [...(f.header || []), ...(f.rows || [])];
        if (!j.length) continue;
        const C = Math.max(...j.map((R) => R.length), 1),
          N = (d - C * 0.3) / C,
          S = 2,
          U = Math.max(m - 2, 7),
          q = U * 1.35 * M;
        g += 3;
        for (let R = 0; R < j.length; R++) {
          const H = j[R],
            W = R < (f.header || []).length;
          let O = q + S * 2;
          for (const D of H) {
            (l.setFont(p, W || D.isHeader ? "bold" : "normal"),
              l.setFontSize(U));
            const J = l.splitTextToSize(ie(D.runs), N - S * 2);
            O = Math.max(O, J.length * q + S * 2);
          }
          A(O + 0.5);
          for (let D = 0; D < C; D++) {
            const J = H[D] || { runs: [], isHeader: !1 },
              _ = t.l + D * (N + 0.3);
            (W
              ? (l.setFillColor(233, 233, 233),
                l.rect(_, g - q * 0.85, N, O, "F"))
              : R % 2 === 1 &&
                (l.setFillColor(249, 249, 249),
                l.rect(_, g - q * 0.85, N, O, "F")),
              l.setDrawColor(205),
              l.setLineWidth(0.12),
              l.rect(_, g - q * 0.85, N, O),
              W || J.isHeader ? v(U) : B(U));
            const te = l.splitTextToSize(ie(J.runs), N - S * 2);
            l.text(te, _ + S, g);
          }
          g += O + 0.3;
        }
        g += 4;
        continue;
      }
      if (f.type === "image" && s.embedImages) {
        const j = Se(n.imageCache, f.src, f.itemDir || F.itemDir, n.opfDir);
        if (!j) continue;
        A(40);
        const C = me(l, j, g, t, d, a, s.imageQuality);
        if (C === g) continue;
        g = C;
        const N = f.caption || (f.alt?.trim() ? f.alt.trim() : "");
        if (N) {
          z(m - 2);
          const S = l.splitTextToSize(N.substring(0, 160), d);
          (l.text(S, t.l + d / 2, g, { align: "center" }),
            (g += S.length * (m - 2) * M * 1.3 + 1));
        }
        g += 3;
        continue;
      }
      if (f.type === "rasterImage" && s.embedImages) {
        A(40);
        const j = me(l, f, g, t, d, a, s.imageQuality);
        if (j === g) continue;
        if (((g = j), f.caption)) {
          z(m - 2);
          const C = l.splitTextToSize(f.caption.substring(0, 160), d);
          (l.text(C, t.l + d / 2, g, { align: "center" }),
            (g += C.length * (m - 2) * M * 1.3 + 1));
        }
        g += 3;
        continue;
      }
    }
    o(Math.round(((b + 1) / c.length) * 100));
  }
  if (s.pageNumbers) {
    u("Adding page numbers…");
    const b = l.getNumberOfPages(),
      F = (s.includeCover ? 1 : 0) + (s.includeTOC && c.length > 1 ? 1 : 0);
    for (let L = F + 1; L <= b; L++) {
      (l.setPage(L), z(8));
      const w = `${L - F}`;
      s.pageNumberStyle === "centred"
        ? l.text(w, r / 2, a - 5, { align: "center" })
        : L % 2 === 0
          ? l.text(w, t.l, a - 5)
          : l.text(w, t.l + d, a - 5, { align: "right" });
    }
  }
  if (s.runningHeader) {
    u("Adding running headers…");
    const b = l.getNumberOfPages(),
      F = n.metadata.title.substring(0, 58);
    for (let L = 2; L <= b; L++)
      (l.setPage(L),
        l.setFont(p, "italic"),
        l.setFontSize(7.5),
        l.setTextColor(155, 155, 155),
        l.text(F, r / 2, t.t - 5, { align: "center" }),
        l.setDrawColor(210),
        l.setLineWidth(0.1),
        l.line(t.l, t.t - 3, t.l + d, t.t - 3));
  }
  return l;
}
function pe(n, h, s, o, u, x, c) {
  const r = o / 2;
  (n.setFillColor(247, 247, 247),
    n.rect(0, 0, o, u * 0.06, "F"),
    n.rect(0, u * 0.94, o, u * 0.06, "F"));
  const a = u * 0.37;
  (n.setFont(h, "bold"), n.setFontSize(20), n.setTextColor(10, 10, 10));
  const t = n.splitTextToSize(s.title, c - 10);
  t.forEach((p, m) => n.text(p, r, a + m * 20 * M * 1.35, { align: "center" }));
  const d = a + t.length * 20 * M * 1.35 + 6;
  (n.setDrawColor(30),
    n.setLineWidth(0.45),
    n.line(r - 18, d, r + 18, d),
    s.author &&
      (n.setFont(h, "normal"),
      n.setFontSize(13),
      n.setTextColor(70, 70, 70),
      n.text(s.author, r, d + 9, { align: "center" })),
    s.publisher &&
      (n.setFont(h, "normal"),
      n.setFontSize(9),
      n.setTextColor(150, 150, 150),
      n.text(s.publisher, r, u - x.b - 9, { align: "center" })),
    s.date &&
      (n.setFontSize(8),
      n.setTextColor(170, 170, 170),
      n.text(s.date.substring(0, 10), r, u - x.b - 4, { align: "center" })));
}
function Le({ showNotification: n, showDownloadDialog: h }) {
  const [s, o] = E.useState(!1),
    [u, x] = E.useState(null),
    [c, r] = E.useState(null),
    [a, t] = E.useState(!1),
    [d, p] = E.useState(""),
    [m, y] = E.useState(""),
    [l, g] = E.useState(0),
    [P, A] = E.useState([]),
    [B, v] = E.useState(!1),
    [T, z] = E.useState(0),
    [$, b] = E.useState(""),
    [F, L] = E.useState("chapters"),
    [w, f] = E.useState(ue),
    [j, C] = E.useState("layout"),
    N = E.useRef(null),
    S = E.useCallback(
      async (i) => {
        if (!i) return;
        const k = i.name.toLowerCase();
        if (!/\.(epub|txt|html?|htm)$/.test(k)) {
          n("Unsupported format. Use EPUB, TXT, or HTML.", "error");
          return;
        }
        (y(""),
          t(!0),
          r(null),
          A([]),
          g(0),
          x({ name: i.name, size: i.size }),
          p("Opening file…"));
        try {
          let I;
          (k.endsWith(".epub")
            ? (I = await ze(i, p, g))
            : k.endsWith(".txt")
              ? (I = Te(await i.text(), i.name))
              : (I = await ke(await i.text(), i.name)),
            r(I),
            A(I.chapters.map((G) => G.id)),
            n(
              `"${I.metadata.title}" · ${I.chapters.length} chapters · ${I.stats.totalImages} images`,
              "success",
            ));
        } catch (I) {
          const G = I.message || "Failed to parse file";
          (y(G), n(G, "error"));
        } finally {
          (t(!1), p(""));
        }
      },
      [n],
    ),
    U = E.useCallback(
      (i) => {
        (i.preventDefault(), o(!1), S(i.dataTransfer.files[0]));
      },
      [S],
    ),
    q = E.useCallback(
      (i) => {
        (S(i.target.files[0]), (i.target.value = ""));
      },
      [S],
    ),
    R = E.useCallback(
      (i) => A((k) => (k.includes(i) ? k.filter((I) => I !== i) : [...k, i])),
      [],
    ),
    H = E.useCallback(() => A(c?.chapters.map((i) => i.id) || []), [c]),
    W = E.useCallback(() => A([]), []),
    O = E.useCallback(async () => {
      if (!(!c || !P.length)) {
        (v(!0), z(0), b("Initialising…"));
        try {
          if (!window.jspdf)
            throw new Error("jsPDF not available — please reload the page.");
          const i = await Fe(c, P, w, z, b);
          b("Saving…");
          const I = `${(c.metadata.title || "ebook").replace(/[^\w\s\-]/g, "").trim() || "ebook"}.pdf`;
          i.save(I);
          const G = i.output("arraybuffer");
          (z(100),
            b("Done!"),
            n(`${I} saved successfully`, "success"),
            h && h(I, G.byteLength, new Uint8Array(G)),
            setTimeout(() => {
              (v(!1), z(0), b(""));
            }, 2500));
        } catch (i) {
          (n(i.message || "Conversion failed", "error"), v(!1), z(0), b(""));
        }
      }
    }, [c, P, w, n, h]),
    D = c?.chapters.filter((i) => P.includes(i.id)) || [],
    J = D.reduce((i, k) => i + k.wordCount, 0),
    _ = D.reduce((i, k) => i + k.imgCount, 0),
    te =
      D.reduce((i, k) => i + k.estimatedPages, 0) +
      (w.includeCover ? 1 : 0) +
      (w.includeTOC && D.length > 1 ? 1 : 0),
    ae = (i) => (i >= 1e3 ? `${(i / 1e3).toFixed(1)}k` : `${i}`);
  return e.jsxs("div", {
    className: "max-w-5xl mx-auto space-y-5 pb-12",
    children: [
      e.jsxs("div", {
        className: "flex items-start justify-between gap-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "text-2xl font-bold text-white tracking-tight",
                children: "eBook to PDF",
              }),
              e.jsx("p", {
                className: "text-zinc-500 text-sm mt-1",
                children:
                  "EPUB · TXT · HTML → typeset PDF — images, tables, rich text — 100% local",
              }),
            ],
          }),
          c &&
            e.jsx("div", {
              className: "flex items-center gap-1.5 flex-shrink-0 pt-1",
              children: ["epub", "txt", "html"].map((i) =>
                e.jsxs(
                  "span",
                  {
                    className: `text-[10px] font-mono px-2 py-1 rounded border ${c.sourceFormat === i ? "bg-zinc-700 border-zinc-500 text-zinc-200" : "border-zinc-800 text-zinc-600"}`,
                    children: [".", i],
                  },
                  i,
                ),
              ),
            }),
        ],
      }),
      !c &&
        !a &&
        e.jsxs("div", {
          className: `relative border-2 border-dashed rounded-2xl cursor-pointer select-none transition-all duration-200 ${s ? "border-zinc-400 bg-zinc-800/70" : "border-zinc-700/60 hover:border-zinc-600 bg-zinc-900/40"}`,
          style: { minHeight: 320 },
          onDragOver: (i) => {
            (i.preventDefault(), o(!0));
          },
          onDragLeave: () => o(!1),
          onDrop: U,
          onClick: () => N.current?.click(),
          children: [
            e.jsx("input", {
              ref: N,
              type: "file",
              accept: ".epub,.txt,.html,.htm",
              className: "hidden",
              onChange: q,
            }),
            e.jsxs("div", {
              className:
                "absolute inset-0 flex flex-col items-center justify-center gap-5 p-8",
              children: [
                e.jsx("div", {
                  className: `w-20 h-20 rounded-2xl border flex items-center justify-center transition-all ${s ? "border-zinc-400 bg-zinc-700 scale-110" : "border-zinc-700 bg-zinc-800/70"}`,
                  children: e.jsx("svg", {
                    className: "w-9 h-9 text-zinc-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: e.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 1.4,
                      d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx("p", {
                      className: "text-white font-semibold text-lg",
                      children: s ? "Release to load" : "Drop your eBook here",
                    }),
                    e.jsx("p", {
                      className: "text-zinc-500 text-sm mt-1",
                      children: "or click to browse",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex items-center gap-3 flex-wrap justify-center",
                  children: [
                    ["EPUB", "Full EPUB 2 & 3"],
                    ["TXT", "Plain text"],
                    ["HTML", "Web pages"],
                  ].map(([i, k]) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex flex-col items-center gap-1",
                        children: [
                          e.jsxs("span", {
                            className:
                              "px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-300 text-xs font-mono font-semibold",
                            children: [".", i.toLowerCase()],
                          }),
                          e.jsx("span", {
                            className: "text-[10px] text-zinc-600",
                            children: k,
                          }),
                        ],
                      },
                      i,
                    ),
                  ),
                }),
                e.jsx("div", {
                  className:
                    "flex flex-wrap justify-center gap-x-4 gap-y-1 mt-1 max-w-md",
                  children: [
                    "JPEG/PNG/GIF/WebP/SVG",
                    "Inline SVG",
                    "<picture> elements",
                    "Bold & italic",
                    "Tables",
                    "Definition lists",
                    "Nested lists",
                    "Captions",
                    "100% local",
                  ].map((i) =>
                    e.jsxs(
                      "span",
                      {
                        className:
                          "flex items-center gap-1.5 text-xs text-zinc-500",
                        children: [
                          e.jsx("span", {
                            className:
                              "w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0 inline-block",
                          }),
                          i,
                        ],
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
      a &&
        e.jsxs("div", {
          className:
            "border border-zinc-800 rounded-2xl bg-zinc-900/60 flex flex-col items-center justify-center gap-5 py-16 px-8",
          children: [
            e.jsxs("div", {
              className: "relative w-12 h-12",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 border-2 border-zinc-700 rounded-full",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 border-2 border-t-white rounded-full animate-spin",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center w-full max-w-xs",
              children: [
                e.jsx("p", {
                  className: "text-white font-medium",
                  children: d || "Parsing…",
                }),
                l > 0 &&
                  l < 100 &&
                  e.jsxs("div", {
                    className: "mt-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between text-xs text-zinc-500 mb-1.5",
                        children: [
                          e.jsx("span", { children: "Normalising images" }),
                          e.jsxs("span", { children: [l, "%"] }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "h-1 bg-zinc-800 rounded-full overflow-hidden",
                        children: e.jsx("div", {
                          className:
                            "h-full bg-zinc-400 rounded-full transition-all duration-300",
                          style: { width: `${l}%` },
                        }),
                      }),
                    ],
                  }),
                e.jsx("p", {
                  className: "text-zinc-600 text-xs mt-2",
                  children:
                    "Extracting content, converting images, building structure…",
                }),
              ],
            }),
          ],
        }),
      m &&
        !a &&
        e.jsxs("div", {
          className:
            "border border-red-900/40 bg-red-950/20 rounded-xl p-5 flex items-start gap-4",
          children: [
            e.jsx("svg", {
              className: "w-5 h-5 text-red-400 flex-shrink-0 mt-0.5",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: e.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              }),
            }),
            e.jsxs("div", {
              className: "flex-1",
              children: [
                e.jsx("p", {
                  className: "text-red-300 font-medium",
                  children: "Could not parse file",
                }),
                e.jsx("p", {
                  className: "text-red-400/60 text-sm mt-0.5",
                  children: m,
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => {
                (y(""), x(null));
              },
              className:
                "text-xs text-zinc-400 hover:text-white border border-zinc-700 px-3 py-1.5 rounded-lg transition-colors",
              children: "Try again",
            }),
          ],
        }),
      c &&
        !a &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsxs("div", {
              className:
                "flex items-start gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-xl",
              children: [
                e.jsx("div", {
                  className:
                    "w-14 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800 flex items-center justify-center",
                  children: c.coverImage
                    ? e.jsx("img", {
                        src: `data:${c.coverImage.mime};base64,${c.coverImage.b64}`,
                        alt: "Cover",
                        className: "w-full h-full object-cover",
                      })
                    : e.jsx("svg", {
                        className: "w-5 h-5 text-zinc-600",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: e.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1.5,
                          d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                        }),
                      }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("h2", {
                      className: "text-white font-bold text-base leading-tight",
                      children: c.metadata.title,
                    }),
                    c.metadata.author &&
                      e.jsx("p", {
                        className: "text-zinc-400 text-sm mt-0.5",
                        children: c.metadata.author,
                      }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-x-4 gap-y-1 mt-2",
                      children: [
                        e.jsxs("span", {
                          className: "text-zinc-500 text-xs",
                          children: [c.chapters.length, " chapters"],
                        }),
                        e.jsxs("span", {
                          className: "text-zinc-500 text-xs",
                          children: [c.stats.totalImages, " images"],
                        }),
                        c.metadata.publisher &&
                          e.jsx("span", {
                            className: "text-zinc-500 text-xs",
                            children: c.metadata.publisher,
                          }),
                        e.jsxs("span", {
                          className: "text-zinc-600 text-xs",
                          children: [
                            ((u?.size || 0) / 1024 / 1024).toFixed(2),
                            " MB",
                          ],
                        }),
                        e.jsx("span", {
                          className: `text-[10px] font-mono px-1.5 py-0.5 rounded border ${c.coverImage ? "border-zinc-700 text-zinc-400" : "border-zinc-800 text-zinc-600"}`,
                          children: c.coverImage ? "✓ Cover" : "No cover",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] font-mono px-1.5 py-0.5 rounded border border-zinc-800 text-zinc-600 capitalize",
                          children: c.sourceFormat,
                        }),
                      ],
                    }),
                    c.metadata.description &&
                      e.jsx("p", {
                        className: "text-zinc-600 text-xs mt-2 line-clamp-2",
                        children: c.metadata.description,
                      }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => {
                    (r(null), x(null), y(""), A([]));
                  },
                  className:
                    "flex-shrink-0 text-xs text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-3 py-1.5 rounded-lg transition-colors",
                  children: "Change file",
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "flex gap-0.5 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 w-fit",
              children: [
                { id: "chapters", label: "Chapters", badge: c.chapters.length },
                { id: "settings", label: "Settings" },
              ].map((i) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => L(i.id),
                    className: `flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all ${F === i.id ? "bg-white text-zinc-900 shadow" : "text-zinc-400 hover:text-zinc-200"}`,
                    children: [
                      i.label,
                      i.badge !== void 0 &&
                        e.jsx("span", {
                          className: `text-[11px] font-mono px-1.5 py-0.5 rounded-full ${F === i.id ? "bg-zinc-200 text-zinc-600" : "bg-zinc-800 text-zinc-500"}`,
                          children: i.badge,
                        }),
                    ],
                  },
                  i.id,
                ),
              ),
            }),
            F === "chapters" &&
              e.jsxs("div", {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between px-5 py-3 border-b border-zinc-800",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx(ge, {
                            checked: P.length === c.chapters.length,
                            indeterminate:
                              P.length > 0 && P.length < c.chapters.length,
                            onChange: () =>
                              P.length === c.chapters.length ? W() : H(),
                          }),
                          e.jsxs("span", {
                            className: "text-zinc-300 text-sm font-medium",
                            children: [
                              P.length,
                              " / ",
                              c.chapters.length,
                              " ",
                              "selected",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          e.jsxs("div", {
                            className:
                              "hidden sm:flex items-center gap-4 text-xs text-zinc-500",
                            children: [
                              e.jsxs("span", { children: [ae(J), " words"] }),
                              e.jsxs("span", { children: [_, " images"] }),
                              e.jsxs("span", { children: ["~", te, " pages"] }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-1",
                            children: [
                              e.jsx("button", {
                                onClick: H,
                                className:
                                  "text-xs text-zinc-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-800 transition-colors",
                                children: "All",
                              }),
                              e.jsx("button", {
                                onClick: W,
                                className:
                                  "text-xs text-zinc-400 hover:text-white px-2 py-1 rounded hover:bg-zinc-800 transition-colors",
                                children: "None",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "divide-y divide-zinc-800/40 max-h-72 overflow-y-auto",
                    children: c.chapters.map((i, k) => {
                      const I = P.includes(i.id);
                      return e.jsxs(
                        "div",
                        {
                          onClick: () => R(i.id),
                          className: `flex items-center gap-4 px-5 py-3 cursor-pointer transition-colors ${I ? "hover:bg-zinc-800/40" : "opacity-40 hover:opacity-60 hover:bg-zinc-800/20"}`,
                          children: [
                            e.jsx(ge, { checked: I, onChange: () => R(i.id) }),
                            e.jsx("span", {
                              className:
                                "text-zinc-600 text-xs w-7 font-mono flex-shrink-0 tabular-nums",
                              children: k + 1,
                            }),
                            e.jsx("span", {
                              className:
                                "text-zinc-200 text-sm flex-1 truncate",
                              children: i.title,
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 text-xs text-zinc-600 flex-shrink-0",
                              children: [
                                i.imgCount > 0 &&
                                  e.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsxs("svg", {
                                        className: "w-3 h-3",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: [
                                          e.jsx("rect", {
                                            width: "18",
                                            height: "18",
                                            x: "3",
                                            y: "3",
                                            rx: "2",
                                          }),
                                          e.jsx("circle", {
                                            cx: "9",
                                            cy: "9",
                                            r: "2",
                                          }),
                                          e.jsx("path", {
                                            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
                                          }),
                                        ],
                                      }),
                                      i.imgCount,
                                    ],
                                  }),
                                e.jsxs("span", {
                                  className: "hidden sm:block",
                                  children: [ae(i.wordCount), "w"],
                                }),
                                e.jsxs("span", {
                                  className: "tabular-nums",
                                  children: ["~", i.estimatedPages, "p"],
                                }),
                              ],
                            }),
                          ],
                        },
                        i.id,
                      );
                    }),
                  }),
                ],
              }),
            F === "settings" &&
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx(se, {
                    title: "Page Layout",
                    open: j === "layout",
                    onToggle: () => C((i) => (i === "layout" ? "" : "layout")),
                    children: e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(X, { children: "Page Size" }),
                            e.jsx("div", {
                              className: "grid grid-cols-5 gap-2",
                              children: Object.keys(le).map((i) =>
                                e.jsx(
                                  ne,
                                  {
                                    active: w.pageSize === i,
                                    onClick: () =>
                                      f((k) => ({ ...k, pageSize: i })),
                                    children: i,
                                  },
                                  i,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            ["marginTop", "Top (mm)"],
                            ["marginBottom", "Bottom (mm)"],
                            ["marginLeft", "Left (mm)"],
                            ["marginRight", "Right (mm)"],
                          ].map(([i, k]) =>
                            e.jsxs(
                              "div",
                              {
                                children: [
                                  e.jsx(X, { children: k }),
                                  e.jsx("input", {
                                    type: "number",
                                    min: "5",
                                    max: "60",
                                    value: w[i],
                                    onChange: (I) =>
                                      f((G) => ({
                                        ...G,
                                        [i]: Number(I.target.value),
                                      })),
                                    className:
                                      "w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-zinc-500",
                                  }),
                                ],
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(se, {
                    title: "Typography",
                    open: j === "typography",
                    onToggle: () =>
                      C((i) => (i === "typography" ? "" : "typography")),
                    children: e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(X, { children: "Font Family" }),
                            e.jsx("div", {
                              className: "grid grid-cols-3 gap-2",
                              children: [
                                ["helvetica", "Sans-serif"],
                                ["times", "Serif"],
                                ["courier", "Monospace"],
                              ].map(([i, k]) =>
                                e.jsx(
                                  ne,
                                  {
                                    active: w.fontFamily === i,
                                    onClick: () =>
                                      f((I) => ({ ...I, fontFamily: i })),
                                    children: k,
                                  },
                                  i,
                                ),
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(X, {
                              right: e.jsxs("span", {
                                className: "font-mono text-zinc-300",
                                children: [w.fontSize, "pt"],
                              }),
                              children: "Body Font Size",
                            }),
                            e.jsx("input", {
                              type: "range",
                              min: "9",
                              max: "18",
                              value: w.fontSize,
                              onChange: (i) =>
                                f((k) => ({
                                  ...k,
                                  fontSize: Number(i.target.value),
                                })),
                              className: "w-full accent-white mt-1",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-zinc-600 text-[11px] mt-1",
                              children: [
                                e.jsx("span", { children: "9pt compact" }),
                                e.jsx("span", { children: "18pt large" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(X, {
                              right: e.jsxs("span", {
                                className: "font-mono text-zinc-300",
                                children: [w.lineSpacing, "×"],
                              }),
                              children: "Line Spacing",
                            }),
                            e.jsx("input", {
                              type: "range",
                              min: "1.0",
                              max: "2.5",
                              step: "0.1",
                              value: w.lineSpacing,
                              onChange: (i) =>
                                f((k) => ({
                                  ...k,
                                  lineSpacing: Number(i.target.value),
                                })),
                              className: "w-full accent-white mt-1",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex justify-between text-zinc-600 text-[11px] mt-1",
                              children: [
                                e.jsx("span", { children: "Tight 1.0×" }),
                                e.jsx("span", { children: "Spacious 2.5×" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(Q, {
                          checked: w.justifyText,
                          onChange: () =>
                            f((i) => ({ ...i, justifyText: !i.justifyText })),
                          label: "Justify text",
                          desc: "Full-width word spacing on body paragraphs",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(se, {
                    title: "Document Structure",
                    open: j === "structure",
                    onToggle: () =>
                      C((i) => (i === "structure" ? "" : "structure")),
                    children: e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsx(Q, {
                          checked: w.includeCover,
                          onChange: () =>
                            f((i) => ({ ...i, includeCover: !i.includeCover })),
                          label: "Cover page",
                          desc: c.coverImage
                            ? "Extracted cover image"
                            : "Auto-generated title page",
                        }),
                        e.jsx(Q, {
                          checked: w.includeTOC,
                          onChange: () =>
                            f((i) => ({ ...i, includeTOC: !i.includeTOC })),
                          label: "Table of contents",
                          desc: "Auto-generated TOC with dot leaders",
                        }),
                        e.jsx(Q, {
                          checked: w.chapterBreaks,
                          onChange: () =>
                            f((i) => ({
                              ...i,
                              chapterBreaks: !i.chapterBreaks,
                            })),
                          label: "Chapter page breaks",
                          desc: "Each chapter begins on a new page",
                        }),
                        e.jsx(Q, {
                          checked: w.pageNumbers,
                          onChange: () =>
                            f((i) => ({ ...i, pageNumbers: !i.pageNumbers })),
                          label: "Page numbers",
                          desc: "Footer pagination",
                        }),
                        e.jsx(Q, {
                          checked: w.runningHeader,
                          onChange: () =>
                            f((i) => ({
                              ...i,
                              runningHeader: !i.runningHeader,
                            })),
                          label: "Running headers",
                          desc: "Book title at top of every page",
                        }),
                        w.pageNumbers &&
                          e.jsxs("div", {
                            className: "pt-1",
                            children: [
                              e.jsx(X, { children: "Page Number Position" }),
                              e.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [
                                  ["alternating", "Alternating L/R"],
                                  ["centred", "Centred"],
                                ].map(([i, k]) =>
                                  e.jsx(
                                    ne,
                                    {
                                      active: w.pageNumberStyle === i,
                                      onClick: () =>
                                        f((I) => ({
                                          ...I,
                                          pageNumberStyle: i,
                                        })),
                                      children: k,
                                    },
                                    i,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  e.jsx(se, {
                    title: "Images",
                    open: j === "images",
                    onToggle: () => C((i) => (i === "images" ? "" : "images")),
                    children: e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsx(Q, {
                          checked: w.embedImages,
                          onChange: () =>
                            f((i) => ({ ...i, embedImages: !i.embedImages })),
                          label: "Embed images",
                          desc: "Include all images from the eBook",
                        }),
                        w.embedImages &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(X, { children: "Image Quality" }),
                                  e.jsx("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                      ["high", "High fidelity"],
                                      ["compressed", "Smaller file"],
                                    ].map(([i, k]) =>
                                      e.jsx(
                                        ne,
                                        {
                                          active: w.imageQuality === i,
                                          onClick: () =>
                                            f((I) => ({
                                              ...I,
                                              imageQuality: i,
                                            })),
                                          children: k,
                                        },
                                        i,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "p-3 bg-zinc-800/40 rounded-lg border border-zinc-700/40 text-xs text-zinc-400 space-y-0.5",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "font-medium text-zinc-300 mb-1.5",
                                    children: "Complete image support",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• JPEG & PNG — embedded natively at natural resolution",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• SVG — parsed for correct dimensions, rasterised to JPEG",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• GIF / WebP / BMP / TIFF — canvas-converted to JPEG",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• Inline <svg> elements — serialised & rasterised",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• <picture> elements — best <source> selected",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• data-src / srcset lazy-load attributes honoured",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• Aspect ratios always preserved · images centred",
                                  }),
                                  e.jsx("p", {
                                    children:
                                      "• figcaption / alt text rendered as caption below",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                  e.jsx("button", {
                    onClick: () => f(ue),
                    className:
                      "text-xs text-zinc-600 hover:text-zinc-300 transition-colors py-1",
                    children: "Reset to defaults",
                  }),
                ],
              }),
            e.jsx("div", {
              className: "sticky bottom-4 mt-2",
              children: e.jsx("div", {
                className:
                  "bg-zinc-900 border border-zinc-700 rounded-xl p-4 shadow-2xl shadow-black/70",
                children: B
                  ? e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-zinc-200 text-sm font-medium truncate max-w-sm",
                              children: $,
                            }),
                            e.jsxs("span", {
                              className:
                                "text-zinc-400 font-mono text-sm tabular-nums",
                              children: [T, "%"],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "h-1.5 bg-zinc-800 rounded-full overflow-hidden",
                          children: e.jsx("div", {
                            className:
                              "h-full bg-white rounded-full transition-all duration-500",
                            style: { width: `${T}%` },
                          }),
                        }),
                        e.jsx("p", {
                          className: "text-zinc-600 text-xs",
                          children: "Processing locally — nothing is uploaded",
                        }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "flex items-center justify-between gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            e.jsx("p", {
                              className: "text-white font-semibold text-sm",
                              children: "Ready to convert",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-zinc-500 text-xs mt-0.5 truncate",
                              children: [
                                P.length,
                                " chapter",
                                P.length !== 1 ? "s" : "",
                                " ·",
                                " ",
                                ae(J),
                                " words · ",
                                _,
                                " images · ~",
                                te,
                                " pages · ",
                                w.pageSize,
                                " ·",
                                " ",
                                w.fontFamily === "helvetica"
                                  ? "Sans"
                                  : w.fontFamily === "times"
                                    ? "Serif"
                                    : "Mono",
                                " ",
                                w.fontSize,
                                "pt",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: O,
                          disabled: !P.length,
                          className: `flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${P.length ? "bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg active:scale-95" : "bg-zinc-700/50 text-zinc-500 cursor-not-allowed"}`,
                          children: [
                            e.jsx("svg", {
                              className: "w-4 h-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2.2,
                                d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
                              }),
                            }),
                            "Export PDF",
                          ],
                        }),
                      ],
                    }),
              }),
            }),
          ],
        }),
    ],
  });
}
function ge({ checked: n, indeterminate: h, onChange: s }) {
  return e.jsxs("div", {
    onClick: (o) => {
      (o.stopPropagation(), s());
    },
    className: `w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors ${n || h ? "bg-white border-white" : "border-zinc-600 hover:border-zinc-400"}`,
    children: [
      n &&
        e.jsx("svg", {
          className: "w-2.5 h-2.5 text-zinc-900",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 10 10",
          children: e.jsx("path", {
            d: "M1.5 5L4 7.5 8.5 2.5",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        }),
      !n && h && e.jsx("div", { className: "w-2 h-0.5 bg-zinc-900" }),
    ],
  });
}
function se({ title: n, open: h, onToggle: s, children: o }) {
  return e.jsxs("div", {
    className: "bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden",
    children: [
      e.jsxs("button", {
        onClick: s,
        className:
          "w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-800/30 transition-colors",
        children: [
          e.jsx("span", {
            className: "text-white font-medium text-sm",
            children: n,
          }),
          e.jsx("svg", {
            className: `w-4 h-4 text-zinc-500 transition-transform duration-200 ${h ? "rotate-180" : ""}`,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: e.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M19 9l-7 7-7-7",
            }),
          }),
        ],
      }),
      h &&
        e.jsx("div", {
          className: "px-5 pb-5 border-t border-zinc-800/50 pt-4",
          children: o,
        }),
    ],
  });
}
function X({ children: n, right: h }) {
  return e.jsxs("div", {
    className: "flex items-center justify-between mb-1.5",
    children: [
      e.jsx("label", {
        className: "text-zinc-400 text-xs font-medium",
        children: n,
      }),
      h && e.jsx("span", { className: "text-zinc-400 text-xs", children: h }),
    ],
  });
}
function ne({ active: n, onClick: h, children: s }) {
  return e.jsx("button", {
    onClick: h,
    className: `py-2 px-3 rounded-lg text-sm font-medium transition-all text-center ${n ? "bg-white text-zinc-900 shadow-sm" : "bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700"}`,
    children: s,
  });
}
function Q({ checked: n, onChange: h, label: s, desc: o }) {
  return e.jsxs("div", {
    className: "flex items-start gap-3 cursor-pointer group",
    onClick: h,
    children: [
      e.jsx("div", {
        className: `mt-0.5 w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${n ? "bg-white border-white" : "border-zinc-600 group-hover:border-zinc-400"}`,
        children:
          n &&
          e.jsx("svg", {
            className: "w-2.5 h-2.5 text-zinc-900",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 10 10",
            children: e.jsx("path", {
              d: "M1.5 5L4 7.5 8.5 2.5",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
          }),
      }),
      e.jsxs("div", {
        children: [
          e.jsx("span", {
            className: "text-zinc-200 text-sm block select-none",
            children: s,
          }),
          o &&
            e.jsx("span", {
              className: "text-zinc-500 text-xs select-none",
              children: o,
            }),
        ],
      }),
    ],
  });
}
export { Le as default };
