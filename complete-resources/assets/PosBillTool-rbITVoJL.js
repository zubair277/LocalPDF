import { r as a, j as e } from "./react-vendor-Bc7KCos-.js";
const xe = [0, 5, 12, 18, 28],
  he = [
    {
      id: "c1",
      name: "Cotton T-Shirt",
      price: 499,
      gstRate: 12,
      category: "Clothing",
      hsnSac: "6109",
    },
    {
      id: "c2",
      name: "Denim Jeans",
      price: 1299,
      gstRate: 12,
      category: "Clothing",
      hsnSac: "6203",
    },
    {
      id: "c3",
      name: "Casual Sneakers",
      price: 1899,
      gstRate: 18,
      category: "Footwear",
      hsnSac: "6402",
    },
    {
      id: "c4",
      name: "Leather Belt",
      price: 399,
      gstRate: 12,
      category: "Accessories",
      hsnSac: "4205",
    },
    {
      id: "c5",
      name: "Stainless Steel Bottle",
      price: 349,
      gstRate: 18,
      category: "Accessories",
      hsnSac: "7323",
    },
    {
      id: "c6",
      name: "Notebook A5",
      price: 89,
      gstRate: 12,
      category: "Stationery",
      hsnSac: "4820",
    },
    {
      id: "c7",
      name: "Ballpoint Pen (Pack 10)",
      price: 60,
      gstRate: 12,
      category: "Stationery",
      hsnSac: "9608",
    },
    {
      id: "c8",
      name: "Hand Sanitizer 500ml",
      price: 199,
      gstRate: 18,
      category: "Health",
      hsnSac: "3808",
    },
    {
      id: "c9",
      name: "Sunglasses",
      price: 799,
      gstRate: 18,
      category: "Accessories",
      hsnSac: "9004",
    },
    {
      id: "c10",
      name: "Backpack 20L",
      price: 1199,
      gstRate: 18,
      category: "Bags",
      hsnSac: "4202",
    },
  ],
  pe = {
    name: "My Shop",
    tagline: "Quality You Can Trust",
    address: "123 Main Street, City – 400001",
    phone: "+91 98765 43210",
    gstin: "",
    upiId: "",
    fssai: "",
  },
  U = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n || 0),
  ze = () => {
    const n = new Date();
    return `B${n.getFullYear().toString().slice(2)}${String(n.getMonth() + 1).padStart(2, "0")}${String(n.getDate()).padStart(2, "0")}${Math.floor(Math.random() * 900 + 100)}`;
  },
  V = (n, o) => {
    const m = n
        .map((p) => {
          const r = o.find((v) => v.id === p.id);
          if (!r) return null;
          const x = r.price * p.qty,
            b = (x * r.gstRate) / 100;
          return {
            ...r,
            qty: p.qty,
            note: p.note,
            subtotal: x,
            gstAmt: b,
            total: x + b,
          };
        })
        .filter(Boolean),
      g = m.reduce((p, r) => p + r.subtotal, 0),
      C = m.reduce((p, r) => p + r.gstAmt, 0),
      z = g + C;
    return { items: m, subtotal: g, totalGst: C, grand: z };
  },
  ve = ({
    store: n,
    cart: o,
    catalog: m,
    billNo: g,
    billDate: C,
    customerName: z,
    customerPhone: p,
    orderRef: r,
    paymentMethod: x,
    docRef: b,
  }) => {
    const v = V(o, m),
      j = {};
    return (
      v.items.forEach((l) => {
        (j[l.gstRate] ||
          (j[l.gstRate] = { rate: l.gstRate, taxable: 0, tax: 0 }),
          (j[l.gstRate].taxable += l.subtotal),
          (j[l.gstRate].tax += l.gstAmt));
      }),
      e.jsxs("div", {
        ref: b,
        style: {
          width: "320px",
          background: "#fff",
          color: "#111",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "12px",
          padding: "20px 16px",
          boxSizing: "border-box",
        },
        children: [
          e.jsxs("div", {
            style: { textAlign: "center", marginBottom: "12px" },
            children: [
              e.jsx("div", {
                style: {
                  fontWeight: "900",
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                },
                children: n.name,
              }),
              n.tagline &&
                e.jsx("div", {
                  style: { fontSize: "10px", color: "#666", marginTop: "2px" },
                  children: n.tagline,
                }),
              e.jsx("div", {
                style: {
                  fontSize: "10px",
                  color: "#555",
                  marginTop: "6px",
                  lineHeight: "1.5",
                },
                children: n.address,
              }),
              n.phone &&
                e.jsxs("div", {
                  style: { fontSize: "10px", color: "#555" },
                  children: ["Ph: ", n.phone],
                }),
              n.gstin &&
                e.jsxs("div", {
                  style: {
                    fontSize: "10px",
                    fontWeight: "bold",
                    marginTop: "4px",
                  },
                  children: ["GSTIN: ", n.gstin],
                }),
              n.fssai &&
                e.jsxs("div", {
                  style: { fontSize: "9px", color: "#888" },
                  children: ["FSSAI: ", n.fssai],
                }),
            ],
          }),
          e.jsx("div", {
            style: { borderTop: "1px dashed #ccc", margin: "10px 0" },
          }),
          e.jsxs("div", {
            style: { fontSize: "11px", marginBottom: "8px" },
            children: [
              e.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  e.jsx("span", { children: "Bill No:" }),
                  e.jsx("span", { style: { fontWeight: "bold" }, children: g }),
                ],
              }),
              e.jsxs("div", {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  e.jsx("span", { children: "Date:" }),
                  e.jsx("span", {
                    children: new Date(C).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  }),
                ],
              }),
              r &&
                e.jsxs("div", {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    e.jsx("span", { children: "Order Ref:" }),
                    e.jsx("span", {
                      style: { fontWeight: "bold" },
                      children: r,
                    }),
                  ],
                }),
              z &&
                e.jsxs("div", {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    e.jsx("span", { children: "Customer:" }),
                    e.jsx("span", { children: z }),
                  ],
                }),
              p &&
                e.jsxs("div", {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    e.jsx("span", { children: "Phone:" }),
                    e.jsx("span", { children: p }),
                  ],
                }),
            ],
          }),
          e.jsx("div", {
            style: { borderTop: "1px dashed #ccc", margin: "10px 0" },
          }),
          e.jsxs("div", {
            style: {
              display: "flex",
              fontSize: "10px",
              fontWeight: "bold",
              color: "#666",
              marginBottom: "6px",
            },
            children: [
              e.jsx("span", { style: { flex: 1 }, children: "ITEM" }),
              e.jsx("span", {
                style: { width: "30px", textAlign: "center" },
                children: "QTY",
              }),
              e.jsx("span", {
                style: { width: "54px", textAlign: "right" },
                children: "RATE",
              }),
              e.jsx("span", {
                style: { width: "64px", textAlign: "right" },
                children: "AMT",
              }),
            ],
          }),
          v.items.map((l) =>
            e.jsxs(
              "div",
              {
                style: { marginBottom: "5px" },
                children: [
                  e.jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "flex-start",
                      fontSize: "11px",
                    },
                    children: [
                      e.jsx("span", {
                        style: {
                          flex: 1,
                          fontWeight: "600",
                          lineHeight: "1.3",
                          wordBreak: "break-word",
                        },
                        children: l.name,
                      }),
                      e.jsx("span", {
                        style: {
                          width: "30px",
                          textAlign: "center",
                          flexShrink: 0,
                        },
                        children: l.qty,
                      }),
                      e.jsx("span", {
                        style: {
                          width: "54px",
                          textAlign: "right",
                          flexShrink: 0,
                        },
                        children: l.price.toFixed(0),
                      }),
                      e.jsx("span", {
                        style: {
                          width: "64px",
                          textAlign: "right",
                          flexShrink: 0,
                        },
                        children: l.subtotal.toFixed(2),
                      }),
                    ],
                  }),
                  l.note &&
                    e.jsxs("div", {
                      style: {
                        fontSize: "9px",
                        color: "#888",
                        marginLeft: "4px",
                      },
                      children: [" ", "↳ ", l.note],
                    }),
                  e.jsxs("div", {
                    style: {
                      fontSize: "9px",
                      color: "#aaa",
                      textAlign: "right",
                    },
                    children: ["GST@", l.gstRate, "%: ", l.gstAmt.toFixed(2)],
                  }),
                ],
              },
              l.id,
            ),
          ),
          e.jsx("div", {
            style: { borderTop: "1px dashed #ccc", margin: "10px 0" },
          }),
          e.jsxs("div", {
            style: { fontSize: "11px" },
            children: [
              e.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "3px",
                },
                children: [
                  e.jsx("span", { children: "Subtotal" }),
                  e.jsx("span", { children: v.subtotal.toFixed(2) }),
                ],
              }),
              Object.values(j).map((l) =>
                e.jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "3px",
                      color: "#666",
                    },
                    children: [
                      e.jsxs("span", {
                        children: [
                          "CGST@",
                          l.rate / 2,
                          "% + SGST@",
                          l.rate / 2,
                          "%",
                        ],
                      }),
                      e.jsx("span", { children: l.tax.toFixed(2) }),
                    ],
                  },
                  l.rate,
                ),
              ),
              e.jsxs("div", {
                style: {
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "900",
                  fontSize: "14px",
                  marginTop: "8px",
                  borderTop: "2px solid #111",
                  paddingTop: "8px",
                },
                children: [
                  e.jsx("span", { children: "TOTAL" }),
                  e.jsxs("span", {
                    children: ["₹", Math.round(v.grand).toFixed(2)],
                  }),
                ],
              }),
              x &&
                e.jsxs("div", {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "6px",
                    fontSize: "11px",
                    color: "#555",
                  },
                  children: [
                    e.jsx("span", { children: "Paid via" }),
                    e.jsx("span", {
                      style: { fontWeight: "bold" },
                      children: x,
                    }),
                  ],
                }),
            ],
          }),
          n.upiId &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx("div", {
                  style: { borderTop: "1px dashed #ccc", margin: "10px 0" },
                }),
                e.jsxs("div", {
                  style: { textAlign: "center", fontSize: "10px" },
                  children: [
                    e.jsx("div", {
                      style: { color: "#666" },
                      children: "Pay via UPI",
                    }),
                    e.jsx("div", {
                      style: { fontWeight: "bold" },
                      children: n.upiId,
                    }),
                  ],
                }),
              ],
            }),
          e.jsx("div", {
            style: { borderTop: "1px dashed #ccc", margin: "10px 0" },
          }),
          e.jsxs("div", {
            style: {
              textAlign: "center",
              fontSize: "10px",
              color: "#888",
              lineHeight: "1.8",
            },
            children: [
              e.jsx("div", {
                style: { fontWeight: "bold", color: "#333", fontSize: "11px" },
                children: "Thank you! Come Again 🙏",
              }),
              e.jsx("div", { children: "Subject to local court jurisdiction" }),
              n.gstin &&
                e.jsx("div", { children: "This is a computer-generated bill" }),
            ],
          }),
        ],
      })
    );
  },
  y = ({ children: n, size: o = 16 }) =>
    e.jsx("svg", {
      width: o,
      height: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: n,
    }),
  K = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  Ne = (n) =>
    e.jsx(y, {
      ...n,
      children: e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    }),
  Y = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("polyline", { points: "3 6 5 6 21 6" }),
        e.jsx("path", { d: "M19 6l-1 14H6L5 6" }),
        e.jsx("path", { d: "M10 11v6M14 11v6" }),
      ],
    }),
  we = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("polyline", { points: "6 9 6 2 18 2 18 9" }),
        e.jsx("path", {
          d: "M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2",
        }),
        e.jsx("rect", { x: "6", y: "14", width: "12", height: "8" }),
      ],
    }),
  Se = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        e.jsx("path", {
          d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
        }),
      ],
    }),
  me = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  ke = (n) =>
    e.jsx(y, {
      ...n,
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  Ce = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("rect", { x: "3", y: "3", width: "7", height: "7" }),
        e.jsx("rect", { x: "14", y: "3", width: "7", height: "7" }),
        e.jsx("rect", { x: "3", y: "14", width: "7", height: "7" }),
        e.jsx("rect", { x: "14", y: "14", width: "7", height: "7" }),
      ],
    }),
  Ae = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("polyline", { points: "1 4 1 10 7 10" }),
        e.jsx("path", { d: "M3.51 15a9 9 0 102.13-9.36L1 10" }),
      ],
    }),
  Ie = (n) =>
    e.jsxs(y, {
      ...n,
      children: [
        e.jsx("path", { d: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" }),
        e.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        e.jsx("path", { d: "M16 10a4 4 0 01-8 0" }),
      ],
    }),
  Re = (n) =>
    e.jsx(y, {
      ...n,
      children: e.jsx("polyline", { points: "18 15 12 9 6 15" }),
    }),
  Te = (n) =>
    e.jsx(y, {
      ...n,
      children: e.jsx("polyline", { points: "6 9 12 15 18 9" }),
    });
function Be({ showNotification: n }) {
  const [o, m] = a.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("pos_catalog") || "null") || he;
      } catch {
        return he;
      }
    }),
    [g, C] = a.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("pos_store") || "null") || pe;
      } catch {
        return pe;
      }
    }),
    [z, p] = a.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("pos_history") || "[]");
      } catch {
        return [];
      }
    }),
    [r, x] = a.useState([]),
    [b, v] = a.useState("All"),
    [j, l] = a.useState(""),
    [q, B] = a.useState(""),
    [G, I] = a.useState(""),
    [R, T] = a.useState("Cash"),
    [D, S] = a.useState("pos"),
    [u, i] = a.useState(null),
    [k, $] = a.useState(""),
    [N, A] = a.useState(null),
    [M, X] = a.useState(""),
    [Q, Z] = a.useState(!1),
    [ge, H] = a.useState(!1),
    [h, F] = a.useState({ name: "", price: "", gstRate: 18, hsnSac: "" }),
    [ee, L] = a.useState(null),
    [te, se] = a.useState({ ...g }),
    [f, O] = a.useState({
      name: "",
      price: "",
      gstRate: 18,
      category: "",
      hsnSac: "",
    }),
    ne = a.useRef(null),
    ie = ["All", ...Array.from(new Set(o.map((t) => t.category)))],
    E = o.filter((t) => {
      const s = b === "All" || t.category === b,
        c = !k || t.name.toLowerCase().includes(k.toLowerCase());
      return s && c;
    }),
    W = V(r, o);
  (a.useEffect(() => {
    localStorage.setItem("pos_catalog", JSON.stringify(o));
  }, [o]),
    a.useEffect(() => {
      localStorage.setItem("pos_store", JSON.stringify(g));
    }, [g]),
    a.useEffect(() => {
      localStorage.setItem("pos_history", JSON.stringify(z));
    }, [z]));
  const le = (t) => {
      x((s) =>
        s.find((d) => d.id === t.id)
          ? s.map((d) => (d.id === t.id ? { ...d, qty: d.qty + 1 } : d))
          : [...s, { id: t.id, qty: 1, note: "" }],
      );
    },
    ae = (t, s) => {
      x((c) => {
        const d = c.find((w) => w.id === t);
        return d
          ? d.qty + s <= 0
            ? c.filter((w) => w.id !== t)
            : c.map((w) => (w.id === t ? { ...w, qty: w.qty + s } : w))
          : c;
      });
    },
    re = (t) => x((s) => s.filter((c) => c.id !== t)),
    _ = () => {
      (x([]), l(""), B(""), I(""));
    },
    ce = () => {
      if (r.length === 0) return;
      const t = {
        id: ze(),
        date: new Date().toISOString(),
        store: g,
        cart: [...r],
        customerName: j,
        customerPhone: q,
        orderRef: G,
        paymentMethod: R,
        calc: V(r, o),
        catalog: [...o],
      };
      (i(t), p((s) => [t, ...s.slice(0, 49)]), Z(!1), S("receipt"));
    },
    be = () => {
      const t = ne.current;
      if (!t) return;
      const s = window.open("", "_blank", "width=380,height=700");
      (s.document.write(
        "<html><head><title>Bill</title><style>body{margin:0;padding:0;background:#fff;}</style></head><body>",
      ),
        s.document.write(t.innerHTML),
        s.document.write("</body></html>"),
        s.document.close(),
        s.focus(),
        setTimeout(() => {
          s.print();
        }, 400));
    },
    fe = () => {
      (_(), i(null), S("pos"));
    },
    je = () => {
      if (!f.name || !f.price) return;
      const t = {
        id: `c${Date.now()}`,
        name: f.name.trim(),
        price: parseFloat(f.price),
        gstRate: parseInt(f.gstRate),
        category: f.category.trim() || "General",
        hsnSac: f.hsnSac,
      };
      (m((s) => [...s, t]),
        O({
          name: "",
          price: "",
          gstRate: 18,
          category: f.category,
          hsnSac: "",
        }),
        n?.("Item added"));
    },
    J = (t) => {
      (m((s) => s.filter((c) => c.id !== t)),
        L(null),
        x((s) => s.filter((c) => c.id !== t)));
    },
    oe = () => {
      (F({
        name: "",
        price: "",
        gstRate: 18,
        hsnSac: "",
        category: b === "All" ? "" : b,
      }),
        H(!0));
    },
    de = () => {
      if (!h.name.trim() || !h.price) return;
      const t = {
        id: `c${Date.now()}`,
        name: h.name.trim(),
        price: parseFloat(h.price),
        gstRate: parseInt(h.gstRate),
        category: h.category.trim() || "General",
        hsnSac: h.hsnSac,
      };
      (m((s) => [...s, t]), H(!1), n?.(`"${t.name}" added to catalog`));
    },
    ye = () => {
      (C({ ...te }), n?.("Store profile saved"));
    },
    P = r.reduce((t, s) => t + s.qty, 0);
  return D === "receipt" && u
    ? e.jsx("div", {
        className:
          "flex flex-col items-center min-h-screen bg-zinc-950 py-6 px-4",
        children: e.jsxs("div", {
          className: "w-full max-w-sm mb-6",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between mb-4 flex-wrap gap-2",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0",
                      children: e.jsx(ke, { size: 16 }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className: "text-white font-bold text-sm",
                          children: "Bill Generated",
                        }),
                        e.jsx("div", {
                          className: "text-zinc-500 text-xs",
                          children: u.id,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsxs("button", {
                      onClick: be,
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-zinc-100 transition-all",
                      children: [e.jsx(we, { size: 14 }), " Print"],
                    }),
                    e.jsx("button", {
                      onClick: fe,
                      className:
                        "px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-xs font-bold hover:bg-zinc-700 transition-all",
                      children: "New Bill",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "bg-white rounded-xl shadow-2xl overflow-hidden",
              children: e.jsx(ve, {
                store: u.store,
                cart: u.cart,
                catalog: u.catalog,
                billNo: u.id,
                billDate: u.date,
                customerName: u.customerName,
                customerPhone: u.customerPhone,
                orderRef: u.orderRef,
                paymentMethod: u.paymentMethod,
                docRef: ne,
              }),
            }),
          ],
        }),
      })
    : D === "settings"
      ? e.jsxs("div", {
          className: "max-w-2xl mx-auto pb-10 px-2",
          children: [
            e.jsxs("div", {
              className:
                "flex items-center justify-between mb-6 flex-wrap gap-2",
              children: [
                e.jsx("h2", {
                  className: "text-white font-black text-xl",
                  children: "Settings",
                }),
                e.jsx("button", {
                  onClick: () => S("pos"),
                  className:
                    "px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-all",
                  children: "← Back to POS",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-4",
              children: [
                e.jsx("div", {
                  className:
                    "text-xs font-black text-zinc-400 uppercase tracking-widest mb-4",
                  children: "Store Profile",
                }),
                e.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                  children: [
                    {
                      label: "Store Name",
                      key: "name",
                      placeholder: "My Shop",
                    },
                    {
                      label: "Tagline",
                      key: "tagline",
                      placeholder: "Quality You Can Trust",
                    },
                    {
                      label: "Address",
                      key: "address",
                      placeholder: "123 Main St, City",
                    },
                    {
                      label: "Phone",
                      key: "phone",
                      placeholder: "+91 98765 43210",
                    },
                    {
                      label: "GSTIN",
                      key: "gstin",
                      placeholder: "27AAAAA0000A1Z5",
                    },
                    { label: "UPI ID", key: "upiId", placeholder: "shop@upi" },
                    {
                      label: "FSSAI No (if applicable)",
                      key: "fssai",
                      placeholder: "FSSAI License Number",
                    },
                  ].map(({ label: t, key: s, placeholder: c }) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex flex-col gap-1.5",
                        children: [
                          e.jsx("label", {
                            className:
                              "text-[9px] font-black text-zinc-500 uppercase tracking-[1.5px]",
                            children: t,
                          }),
                          e.jsx("input", {
                            value: te[s] || "",
                            onChange: (d) =>
                              se((w) => ({ ...w, [s]: d.target.value })),
                            placeholder: c,
                            className:
                              "bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-all",
                          }),
                        ],
                      },
                      s,
                    ),
                  ),
                }),
                e.jsx("button", {
                  onClick: ye,
                  className:
                    "mt-4 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-bold hover:bg-zinc-100 transition-all",
                  children: "Save Profile",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-4",
              children: [
                e.jsxs("div", {
                  className:
                    "text-xs font-black text-zinc-400 uppercase tracking-widest mb-4",
                  children: ["Product Catalog (", o.length, " items)"],
                }),
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 mb-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3",
                      children: "Add New Product",
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 sm:grid-cols-3 gap-2 mb-2",
                      children: [
                        e.jsx("input", {
                          value: f.name,
                          onChange: (t) =>
                            O((s) => ({ ...s, name: t.target.value })),
                          placeholder: "Product name *",
                          className:
                            "col-span-2 sm:col-span-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500",
                        }),
                        e.jsx("input", {
                          type: "number",
                          value: f.price,
                          onChange: (t) =>
                            O((s) => ({ ...s, price: t.target.value })),
                          placeholder: "Price (₹) *",
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500",
                        }),
                        e.jsx("select", {
                          value: f.gstRate,
                          onChange: (t) =>
                            O((s) => ({
                              ...s,
                              gstRate: parseInt(t.target.value),
                            })),
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500",
                          children: xe.map((t) =>
                            e.jsxs(
                              "option",
                              { value: t, children: ["GST ", t, "%"] },
                              t,
                            ),
                          ),
                        }),
                        e.jsx("input", {
                          value: f.category,
                          onChange: (t) =>
                            O((s) => ({ ...s, category: t.target.value })),
                          placeholder: "Category",
                          list: "cats",
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500",
                        }),
                        e.jsx("datalist", {
                          id: "cats",
                          children: Array.from(
                            new Set(o.map((t) => t.category)),
                          ).map((t) => e.jsx("option", { value: t }, t)),
                        }),
                        e.jsx("input", {
                          value: f.hsnSac,
                          onChange: (t) =>
                            O((s) => ({ ...s, hsnSac: t.target.value })),
                          placeholder: "HSN/SAC code",
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 font-mono",
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      onClick: je,
                      className:
                        "px-4 py-2 bg-white text-black rounded-lg text-xs font-black hover:bg-zinc-100 transition-all",
                      children: "+ Add Product",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-1.5",
                  children: o.map((t) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center gap-3 px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg",
                        children: [
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsx("div", {
                                className:
                                  "text-sm font-semibold text-zinc-200 truncate",
                                children: t.name,
                              }),
                              e.jsxs("div", {
                                className: "text-[10px] text-zinc-600",
                                children: [
                                  t.category,
                                  " · GST ",
                                  t.gstRate,
                                  "%",
                                  t.hsnSac ? ` · HSN ${t.hsnSac}` : "",
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "text-sm font-bold text-zinc-300 flex-shrink-0",
                            children: ["₹", t.price],
                          }),
                          e.jsx("button", {
                            "aria-label": "Delete",
                            onClick: () => J(t.id),
                            className:
                              "p-1.5 text-zinc-700 hover:text-zinc-400 rounded-lg hover:bg-zinc-800 transition-all flex-shrink-0",
                            children: e.jsx(Y, { size: 14 }),
                          }),
                        ],
                      },
                      t.id,
                    ),
                  ),
                }),
              ],
            }),
          ],
        })
      : D === "history"
        ? e.jsxs("div", {
            className: "max-w-2xl mx-auto pb-10 px-2",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between mb-6 flex-wrap gap-2",
                children: [
                  e.jsx("h2", {
                    className: "text-white font-black text-xl",
                    children: "Bill History",
                  }),
                  e.jsx("button", {
                    onClick: () => S("pos"),
                    className:
                      "px-4 py-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-all",
                    children: "← Back to POS",
                  }),
                ],
              }),
              z.length === 0
                ? e.jsx("div", {
                    className: "text-center py-16 text-zinc-700",
                    children: "No bills yet",
                  })
                : e.jsx("div", {
                    className: "space-y-2",
                    children: z.map((t) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer hover:border-zinc-600 transition-all",
                          onClick: () => {
                            (i(t), S("receipt"));
                          },
                          children: e.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-2 flex-wrap",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "text-sm font-bold text-zinc-200",
                                    children: t.id,
                                  }),
                                  e.jsxs("div", {
                                    className: "text-xs text-zinc-600 mt-0.5",
                                    children: [
                                      new Date(t.date).toLocaleString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }),
                                      t.customerName && ` · ${t.customerName}`,
                                      t.orderRef && ` · Ref: ${t.orderRef}`,
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "text-right",
                                children: [
                                  e.jsxs("div", {
                                    className: "text-sm font-black text-white",
                                    children: ["₹", Math.round(t.calc.grand)],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-[10px] text-zinc-600",
                                    children: [
                                      t.cart.reduce((s, c) => s + c.qty, 0),
                                      " items ·",
                                      " ",
                                      t.paymentMethod,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t.id,
                      ),
                    ),
                  }),
            ],
          })
        : e.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between mb-3 flex-shrink-0",
                children: [
                  e.jsx("div", {
                    className: "flex items-center gap-2 min-w-0",
                    children: e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsx("div", {
                          className:
                            "text-white font-black text-sm leading-tight truncate",
                          children: g.name,
                        }),
                        e.jsx("div", {
                          className: "text-zinc-600 text-[10px]",
                          children: "POS · Quick Billing",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2 flex-shrink-0",
                    children: [
                      e.jsx("button", {
                        "aria-label": "History",
                        onClick: () => S("history"),
                        className:
                          "p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-200 hover:border-zinc-600 transition-all",
                        title: "Bill History",
                        children: e.jsx(Ae, { size: 15 }),
                      }),
                      e.jsx("button", {
                        "aria-label": "Settings",
                        onClick: () => {
                          (se({ ...g }), S("settings"));
                        },
                        className:
                          "p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 hover:text-zinc-200 hover:border-zinc-600 transition-all",
                        title: "Settings",
                        children: e.jsx(Se, { size: 15 }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "hidden md:flex gap-3 flex-1 min-h-0",
                style: { maxHeight: "calc(100vh - 100px)" },
                children: [
                  e.jsxs("div", {
                    className: "flex-1 flex flex-col min-w-0",
                    children: [
                      e.jsx("div", {
                        className: "mb-2 flex-shrink-0",
                        children: e.jsx("input", {
                          value: k,
                          onChange: (t) => $(t.target.value),
                          placeholder: "Search products…",
                          className:
                            "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all",
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "flex gap-1.5 overflow-x-auto pb-1 mb-2 flex-shrink-0",
                        children: ie.map((t) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => v(t),
                              className: `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${b === t ? "bg-white text-black" : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600"}`,
                              children: t,
                            },
                            t,
                          ),
                        ),
                      }),
                      e.jsx("div", {
                        className: "flex-1 overflow-y-auto",
                        children: e.jsxs("div", {
                          className:
                            "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2",
                          children: [
                            E.map((t) => {
                              const s = r.find((d) => d.id === t.id),
                                c = ee === t.id;
                              return e.jsxs(
                                "div",
                                {
                                  className: "relative group",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => {
                                        c || le(t);
                                      },
                                      className: `w-full text-left p-3 rounded-xl border transition-all duration-150 active:scale-95 ${s ? "bg-zinc-800 border-zinc-600" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60"}`,
                                      children: [
                                        s &&
                                          e.jsx("div", {
                                            className:
                                              "absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center z-10",
                                            children: e.jsx("span", {
                                              className:
                                                "text-[10px] font-black text-black",
                                              children: s.qty,
                                            }),
                                          }),
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-semibold text-zinc-100 leading-tight mb-1 pr-6",
                                          children: t.name,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-xs font-black text-white",
                                          children: ["₹", t.price],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-[9px] text-zinc-600 mt-0.5",
                                          children: ["GST ", t.gstRate, "%"],
                                        }),
                                      ],
                                    }),
                                    c
                                      ? e.jsxs("div", {
                                          className:
                                            "absolute inset-0 rounded-xl bg-zinc-950/90 border border-red-800/60 flex flex-col items-center justify-center gap-2 z-20 p-2",
                                          children: [
                                            e.jsxs("p", {
                                              className:
                                                "text-[10px] text-red-300 font-semibold text-center",
                                              children: [
                                                'Delete "',
                                                t.name,
                                                '"?',
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "flex gap-1.5",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () => J(t.id),
                                                  className:
                                                    "px-2.5 py-1 bg-red-700 hover:bg-red-600 text-white text-[10px] font-bold rounded-lg transition-all",
                                                  children: "Delete",
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => L(null),
                                                  className:
                                                    "px-2.5 py-1 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 text-[10px] font-bold rounded-lg transition-all",
                                                  children: "Cancel",
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : e.jsx("button", {
                                          "aria-label": "Delete",
                                          onClick: (d) => {
                                            (d.stopPropagation(), L(t.id));
                                          },
                                          className:
                                            "absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg bg-zinc-700/80 hover:bg-red-900/70 text-zinc-400 hover:text-red-300",
                                          title: "Delete item",
                                          children: e.jsx(Y, { size: 11 }),
                                        }),
                                  ],
                                },
                                t.id,
                              );
                            }),
                            e.jsxs("button", {
                              onClick: oe,
                              className:
                                "text-left p-3 rounded-xl border-2 border-dashed border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/60 transition-all duration-150 flex flex-col items-center justify-center gap-1.5 min-h-[80px] group",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-7 h-7 rounded-full bg-zinc-800 group-hover:bg-zinc-700 flex items-center justify-center transition-all",
                                  children: e.jsx(K, {
                                    size: 14,
                                    className:
                                      "text-zinc-400 group-hover:text-zinc-200",
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold text-zinc-600 group-hover:text-zinc-400 transition-all",
                                  children: "Add Item",
                                }),
                              ],
                            }),
                            E.length === 0 &&
                              e.jsx("div", {
                                className:
                                  "col-span-full text-center py-8 text-zinc-700 text-sm",
                                children: "No products in this category",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "w-72 xl:w-80 flex-shrink-0 flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden",
                    children: e.jsx(ue, {
                      cart: r,
                      catalog: o,
                      calc: W,
                      customerName: j,
                      setCustomerName: l,
                      customerPhone: q,
                      setCustomerPhone: B,
                      orderRef: G,
                      setOrderRef: I,
                      paymentMethod: R,
                      setPaymentMethod: T,
                      cartItemCount: P,
                      updateQty: ae,
                      removeFromCart: re,
                      clearCart: _,
                      noteItem: N,
                      setNoteItem: A,
                      noteText: M,
                      setNoteText: X,
                      setCart: x,
                      checkout: ce,
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex md:hidden flex-col flex-1 min-h-0 relative",
                children: [
                  e.jsxs("div", {
                    className: "flex flex-col flex-1 min-h-0",
                    children: [
                      e.jsx("div", {
                        className: "mb-2 flex-shrink-0",
                        children: e.jsx("input", {
                          value: k,
                          onChange: (t) => $(t.target.value),
                          placeholder: "Search products…",
                          className:
                            "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all",
                        }),
                      }),
                      e.jsx("div", {
                        className:
                          "flex gap-1.5 overflow-x-auto pb-1 mb-2 flex-shrink-0",
                        children: ie.map((t) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => v(t),
                              className: `px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${b === t ? "bg-white text-black" : "bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600"}`,
                              children: t,
                            },
                            t,
                          ),
                        ),
                      }),
                      e.jsx("div", {
                        className: "flex-1 overflow-y-auto pb-28",
                        children: e.jsxs("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            E.map((t) => {
                              const s = r.find((d) => d.id === t.id),
                                c = ee === t.id;
                              return e.jsxs(
                                "div",
                                {
                                  className: "relative",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => {
                                        c || le(t);
                                      },
                                      className: `w-full text-left p-3 rounded-xl border transition-all duration-150 active:scale-95 ${s ? "bg-zinc-800 border-zinc-600" : "bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60"}`,
                                      children: [
                                        s &&
                                          e.jsx("div", {
                                            className:
                                              "absolute top-2 right-2 w-5 h-5 bg-white rounded-full flex items-center justify-center z-10",
                                            children: e.jsx("span", {
                                              className:
                                                "text-[10px] font-black text-black",
                                              children: s.qty,
                                            }),
                                          }),
                                        e.jsx("div", {
                                          className:
                                            "text-sm font-semibold text-zinc-100 leading-tight mb-1 pr-6",
                                          children: t.name,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-xs font-black text-white",
                                          children: ["₹", t.price],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "text-[9px] text-zinc-600 mt-0.5",
                                          children: ["GST ", t.gstRate, "%"],
                                        }),
                                      ],
                                    }),
                                    c
                                      ? e.jsxs("div", {
                                          className:
                                            "absolute inset-0 rounded-xl bg-zinc-950/92 border border-red-800/60 flex flex-col items-center justify-center gap-2 z-20 p-2",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-[10px] text-red-300 font-semibold text-center leading-tight",
                                              children: "Delete?",
                                            }),
                                            e.jsxs("div", {
                                              className: "flex gap-1.5",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () => J(t.id),
                                                  className:
                                                    "px-2 py-1 bg-red-700 hover:bg-red-600 text-white text-[10px] font-bold rounded-lg",
                                                  children: "Delete",
                                                }),
                                                e.jsx("button", {
                                                  onClick: () => L(null),
                                                  className:
                                                    "px-2 py-1 bg-zinc-700 text-zinc-200 text-[10px] font-bold rounded-lg",
                                                  children: "Cancel",
                                                }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : e.jsx("button", {
                                          "aria-label": "Delete",
                                          onClick: (d) => {
                                            (d.stopPropagation(), L(t.id));
                                          },
                                          className:
                                            "absolute bottom-2 right-2 p-1 rounded-lg bg-zinc-700/60 hover:bg-red-900/70 text-zinc-500 hover:text-red-300 transition-all",
                                          title: "Delete item",
                                          children: e.jsx(Y, { size: 10 }),
                                        }),
                                  ],
                                },
                                t.id,
                              );
                            }),
                            e.jsxs("button", {
                              onClick: oe,
                              className:
                                "text-left p-3 rounded-xl border-2 border-dashed border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900/60 transition-all duration-150 flex flex-col items-center justify-center gap-1.5 min-h-[80px]",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center",
                                  children: e.jsx(K, {
                                    size: 14,
                                    className: "text-zinc-400",
                                  }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold text-zinc-600",
                                  children: "Add Item",
                                }),
                              ],
                            }),
                            E.length === 0 &&
                              e.jsx("div", {
                                className:
                                  "col-span-full text-center py-8 text-zinc-700 text-sm",
                                children: "No products in this category",
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "fixed bottom-0 left-0 right-0 z-50 flex flex-col bg-zinc-900 border-t border-zinc-800 transition-all duration-300 ease-in-out",
                    style: {
                      maxHeight: Q ? "80vh" : "64px",
                      borderRadius: "20px 20px 0 0",
                    },
                    children: [
                      e.jsxs("button", {
                        onClick: () => Z((t) => !t),
                        className:
                          "flex items-center justify-between px-4 py-3 w-full flex-shrink-0",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsxs("div", {
                                className: "relative",
                                children: [
                                  e.jsx(Ie, {
                                    size: 18,
                                    className: "text-zinc-300",
                                  }),
                                  P > 0 &&
                                    e.jsx("div", {
                                      className:
                                        "absolute -top-1.5 -right-1.5 w-4 h-4 bg-white rounded-full flex items-center justify-center",
                                      children: e.jsx("span", {
                                        className:
                                          "text-[9px] font-black text-black",
                                        children: P,
                                      }),
                                    }),
                                ],
                              }),
                              e.jsx("span", {
                                className: "text-sm font-black text-zinc-200",
                                children:
                                  P > 0
                                    ? `${P} item${P > 1 ? "s" : ""} in cart`
                                    : "Your cart is empty",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              W.grand > 0 &&
                                e.jsxs("span", {
                                  className: "text-sm font-black text-white",
                                  children: ["₹", Math.round(W.grand)],
                                }),
                              Q
                                ? e.jsx(Te, { size: 16 })
                                : e.jsx(Re, { size: 16 }),
                            ],
                          }),
                        ],
                      }),
                      Q &&
                        e.jsx("div", {
                          className: "flex flex-col flex-1 overflow-hidden",
                          children: e.jsx("div", {
                            className: "flex-1 overflow-y-auto",
                            children: e.jsx(ue, {
                              cart: r,
                              catalog: o,
                              calc: W,
                              customerName: j,
                              setCustomerName: l,
                              customerPhone: q,
                              setCustomerPhone: B,
                              orderRef: G,
                              setOrderRef: I,
                              paymentMethod: R,
                              setPaymentMethod: T,
                              cartItemCount: P,
                              updateQty: ae,
                              removeFromCart: re,
                              clearCart: _,
                              noteItem: N,
                              setNoteItem: A,
                              noteText: M,
                              setNoteText: X,
                              setCart: x,
                              checkout: ce,
                              mobileMode: !0,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              ge &&
                e.jsx("div", {
                  className:
                    "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4",
                  onClick: () => H(!1),
                  children: e.jsxs("div", {
                    className:
                      "w-full max-w-sm bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-5",
                    onClick: (t) => t.stopPropagation(),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("div", {
                                className: "text-white font-black text-base",
                                children: "Add New Item",
                              }),
                              e.jsx("div", {
                                className: "text-zinc-500 text-[10px] mt-0.5",
                                children: h.category
                                  ? `Adding to "${h.category}"`
                                  : "Will create a new category",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            "aria-label": "Close",
                            onClick: () => H(!1),
                            className:
                              "p-1.5 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-all",
                            children: e.jsx(me, { size: 14 }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2.5",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("label", {
                                className:
                                  "text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 block",
                                children: "Product Name *",
                              }),
                              e.jsx("input", {
                                autoFocus: !0,
                                value: h.name,
                                onChange: (t) =>
                                  F((s) => ({ ...s, name: t.target.value })),
                                onKeyDown: (t) => t.key === "Enter" && de(),
                                placeholder: "e.g. Leather Wallet",
                                className:
                                  "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-all",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 block",
                                    children: "Price (₹) *",
                                  }),
                                  e.jsx("input", {
                                    type: "number",
                                    value: h.price,
                                    onChange: (t) =>
                                      F((s) => ({
                                        ...s,
                                        price: t.target.value,
                                      })),
                                    placeholder: "0",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-all",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 block",
                                    children: "GST Rate",
                                  }),
                                  e.jsx("select", {
                                    value: h.gstRate,
                                    onChange: (t) =>
                                      F((s) => ({
                                        ...s,
                                        gstRate: parseInt(t.target.value),
                                      })),
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 transition-all",
                                    children: xe.map((t) =>
                                      e.jsxs(
                                        "option",
                                        {
                                          value: t,
                                          children: ["GST ", t, "%"],
                                        },
                                        t,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 block",
                                    children: "Category",
                                  }),
                                  e.jsx("input", {
                                    value: h.category,
                                    onChange: (t) =>
                                      F((s) => ({
                                        ...s,
                                        category: t.target.value,
                                      })),
                                    placeholder: "e.g. Accessories",
                                    list: "qa-cats",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 transition-all",
                                  }),
                                  e.jsx("datalist", {
                                    id: "qa-cats",
                                    children: Array.from(
                                      new Set(o.map((t) => t.category)),
                                    ).map((t) =>
                                      e.jsx("option", { value: t }, t),
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    className:
                                      "text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 block",
                                    children: "HSN/SAC",
                                  }),
                                  e.jsx("input", {
                                    value: h.hsnSac,
                                    onChange: (t) =>
                                      F((s) => ({
                                        ...s,
                                        hsnSac: t.target.value,
                                      })),
                                    placeholder: "Optional",
                                    className:
                                      "w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 font-mono transition-all",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2 mt-4",
                        children: [
                          e.jsx("button", {
                            onClick: de,
                            disabled: !h.name.trim() || !h.price,
                            className:
                              "flex-1 py-2.5 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 text-black rounded-xl font-black text-sm transition-all",
                            children: "+ Add to Catalog",
                          }),
                          e.jsx("button", {
                            onClick: () => H(!1),
                            className:
                              "px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl font-semibold text-sm transition-all",
                            children: "Cancel",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          });
}
function ue({
  cart: n,
  catalog: o,
  calc: m,
  customerName: g,
  setCustomerName: C,
  customerPhone: z,
  setCustomerPhone: p,
  orderRef: r,
  setOrderRef: x,
  paymentMethod: b,
  setPaymentMethod: v,
  cartItemCount: j,
  updateQty: l,
  removeFromCart: q,
  clearCart: B,
  noteItem: G,
  setNoteItem: I,
  noteText: R,
  setNoteText: T,
  setCart: D,
  checkout: S,
  mobileMode: u = !1,
}) {
  return e.jsxs(e.Fragment, {
    children: [
      !u &&
        e.jsxs("div", {
          className:
            "flex items-center justify-between px-4 py-3 border-b border-zinc-800 flex-shrink-0",
          children: [
            e.jsxs("div", {
              className:
                "text-xs font-black text-zinc-400 uppercase tracking-widest",
              children: [
                "Current Bill",
                j > 0 &&
                  e.jsx("span", {
                    className:
                      "ml-2 px-1.5 py-0.5 bg-zinc-700 rounded-full text-zinc-300",
                    children: j,
                  }),
              ],
            }),
            n.length > 0 &&
              e.jsx("button", {
                onClick: B,
                className:
                  "text-[10px] text-zinc-700 hover:text-zinc-400 font-semibold transition-all",
                children: "Clear",
              }),
          ],
        }),
      e.jsxs("div", {
        className: "px-3 py-2 border-b border-zinc-800 flex-shrink-0",
        children: [
          u &&
            n.length > 0 &&
            e.jsx("div", {
              className: "flex justify-end mb-1.5",
              children: e.jsx("button", {
                onClick: B,
                className:
                  "text-[10px] text-zinc-700 hover:text-zinc-400 font-semibold transition-all",
                children: "Clear cart",
              }),
            }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-1.5 mb-1.5",
            children: [
              e.jsx("input", {
                value: g,
                onChange: (i) => C(i.target.value),
                placeholder: "Customer name",
                className:
                  "bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all",
              }),
              e.jsx("input", {
                value: z,
                onChange: (i) => p(i.target.value),
                placeholder: "Phone",
                inputMode: "numeric",
                className:
                  "bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-1.5",
            children: [
              e.jsx("input", {
                value: r,
                onChange: (i) => x(i.target.value),
                placeholder: "Order ref / No.",
                className:
                  "bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-all",
              }),
              e.jsx("select", {
                value: b,
                onChange: (i) => v(i.target.value),
                className:
                  "bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 focus:outline-none focus:border-zinc-600 transition-all",
                children: ["Cash", "UPI", "Card", "Credit", "Other"].map((i) =>
                  e.jsx("option", { value: i, children: i }, i),
                ),
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: `${u ? "" : "flex-1"} overflow-y-auto px-3 py-2`,
        children:
          n.length === 0
            ? e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center py-8 gap-2 text-zinc-700",
                children: [
                  e.jsx(Ce, { size: 28 }),
                  e.jsx("div", {
                    className: "text-xs text-center",
                    children: "Tap products to add them here",
                  }),
                ],
              })
            : e.jsx("div", {
                className: "space-y-1.5",
                children: n.map((i) => {
                  const k = o.find((N) => N.id === i.id);
                  if (!k) return null;
                  const $ = k.price * i.qty;
                  return e.jsxs(
                    "div",
                    {
                      className:
                        "bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 px-3 py-2",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-1 flex-shrink-0",
                              children: [
                                e.jsx("button", {
                                  "aria-label": "Decrease quantity",
                                  onClick: () => l(i.id, -1),
                                  className:
                                    "w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all",
                                  children: e.jsx(Ne, { size: 10 }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "w-5 text-center text-xs font-black text-zinc-200",
                                  children: i.qty,
                                }),
                                e.jsx("button", {
                                  "aria-label": "Increase quantity",
                                  onClick: () => l(i.id, 1),
                                  className:
                                    "w-6 h-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-all",
                                  children: e.jsx(K, { size: 10 }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "text-xs font-semibold text-zinc-200 truncate",
                                  children: k.name,
                                }),
                                e.jsxs("div", {
                                  className: "text-[9px] text-zinc-600",
                                  children: ["₹", k.price, " × ", i.qty],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "text-xs font-black text-zinc-200 flex-shrink-0",
                              children: ["₹", $],
                            }),
                            e.jsx("button", {
                              "aria-label": "Remove item",
                              onClick: () => q(i.id),
                              className:
                                "p-1 text-zinc-700 hover:text-zinc-400 transition-all flex-shrink-0",
                              children: e.jsx(me, { size: 12 }),
                            }),
                          ],
                        }),
                        G === i.id
                          ? e.jsxs("div", {
                              className: "px-3 pb-2 flex gap-1.5",
                              children: [
                                e.jsx("input", {
                                  autoFocus: !0,
                                  value: R,
                                  onChange: (N) => T(N.target.value),
                                  onKeyDown: (N) => {
                                    N.key === "Enter" &&
                                      (D((A) =>
                                        A.map((M) =>
                                          M.id === i.id ? { ...M, note: R } : M,
                                        ),
                                      ),
                                      I(null),
                                      T(""));
                                  },
                                  placeholder: "Special instruction…",
                                  className:
                                    "flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-2 py-1 text-[10px] text-zinc-300 placeholder:text-zinc-700 focus:outline-none",
                                }),
                                e.jsx("button", {
                                  onClick: () => {
                                    (D((N) =>
                                      N.map((A) =>
                                        A.id === i.id ? { ...A, note: R } : A,
                                      ),
                                    ),
                                      I(null),
                                      T(""));
                                  },
                                  className:
                                    "px-2 bg-zinc-700 rounded-lg text-[10px] text-zinc-300 hover:bg-zinc-600",
                                  children: "OK",
                                }),
                              ],
                            })
                          : e.jsx("button", {
                              onClick: () => {
                                (I(i.id), T(i.note || ""));
                              },
                              className:
                                "px-3 pb-2 text-[9px] text-zinc-700 hover:text-zinc-500 transition-all text-left",
                              children: i.note ? `📝 ${i.note}` : "+ Add note",
                            }),
                      ],
                    },
                    i.id,
                  );
                }),
              }),
      }),
      e.jsxs("div", {
        className: "border-t border-zinc-800 px-4 py-3 flex-shrink-0",
        children: [
          e.jsxs("div", {
            className: "space-y-1 mb-3",
            children: [
              e.jsxs("div", {
                className: "flex justify-between text-xs text-zinc-500",
                children: [
                  e.jsx("span", { children: "Subtotal" }),
                  e.jsx("span", { children: U(m.subtotal) }),
                ],
              }),
              e.jsxs("div", {
                className: "flex justify-between text-xs text-zinc-500",
                children: [
                  e.jsx("span", { children: "GST" }),
                  e.jsx("span", { children: U(m.totalGst) }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex justify-between text-sm font-black text-white pt-1 border-t border-zinc-800 mt-1",
                children: [
                  e.jsx("span", { children: "TOTAL" }),
                  e.jsx("span", { children: U(m.grand) }),
                ],
              }),
            ],
          }),
          e.jsx("button", {
            onClick: S,
            disabled: n.length === 0,
            className:
              "w-full py-3.5 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 text-black rounded-xl font-black text-sm transition-all active:scale-[0.98]",
            children:
              n.length === 0
                ? "Add products to bill"
                : `Generate Bill · ₹${Math.round(m.grand)}`,
          }),
        ],
      }),
    ],
  });
}
export { Be as default };
