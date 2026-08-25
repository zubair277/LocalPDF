import { r as y, j as e } from "./react-vendor-Bc7KCos-.js";
const P = [
    { code: "01", name: "Jammu & Kashmir" },
    { code: "02", name: "Himachal Pradesh" },
    { code: "03", name: "Punjab" },
    { code: "04", name: "Chandigarh" },
    { code: "05", name: "Uttarakhand" },
    { code: "06", name: "Haryana" },
    { code: "07", name: "Delhi" },
    { code: "08", name: "Rajasthan" },
    { code: "09", name: "Uttar Pradesh" },
    { code: "10", name: "Bihar" },
    { code: "11", name: "Sikkim" },
    { code: "12", name: "Arunachal Pradesh" },
    { code: "13", name: "Nagaland" },
    { code: "14", name: "Manipur" },
    { code: "15", name: "Mizoram" },
    { code: "16", name: "Tripura" },
    { code: "17", name: "Meghalaya" },
    { code: "18", name: "Assam" },
    { code: "19", name: "West Bengal" },
    { code: "20", name: "Jharkhand" },
    { code: "21", name: "Odisha" },
    { code: "22", name: "Chhattisgarh" },
    { code: "23", name: "Madhya Pradesh" },
    { code: "24", name: "Gujarat" },
    { code: "26", name: "Dadra & Nagar Haveli and Daman & Diu" },
    { code: "27", name: "Maharashtra" },
    { code: "29", name: "Karnataka" },
    { code: "30", name: "Goa" },
    { code: "31", name: "Lakshadweep" },
    { code: "32", name: "Kerala" },
    { code: "33", name: "Tamil Nadu" },
    { code: "34", name: "Puducherry" },
    { code: "35", name: "Andaman & Nicobar Islands" },
    { code: "36", name: "Telangana" },
    { code: "37", name: "Andhra Pradesh" },
    { code: "38", name: "Ladakh" },
    { code: "97", name: "Other Territory" },
  ],
  Q = [0, 0.1, 0.25, 1, 1.5, 3, 5, 7.5, 12, 18, 28],
  ce = [
    "NOS",
    "PCS",
    "KGS",
    "LTR",
    "MTR",
    "SQM",
    "CFT",
    "HRS",
    "DAYS",
    "SET",
    "PAIR",
    "BOX",
    "PKT",
    "BAG",
    "ROLL",
    "SHEET",
    "TON",
    "QTL",
  ],
  le = [
    { value: "TAX_INVOICE", label: "Tax Invoice" },
    { value: "BILL_OF_SUPPLY", label: "Bill of Supply" },
    { value: "EXPORT_INVOICE", label: "Export Invoice" },
    { value: "DEBIT_NOTE", label: "Debit Note" },
    { value: "CREDIT_NOTE", label: "Credit Note" },
  ],
  de = [
    { value: "B2B", label: "B2B — Business to Business" },
    { value: "B2C", label: "B2C — Business to Consumer" },
    { value: "EXPORT", label: "Export" },
    { value: "SEZ", label: "SEZ Supply" },
  ],
  xe = (s) =>
    s
      ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
          s.toUpperCase(),
        )
        ? { valid: !0, msg: "Valid GSTIN" }
        : { valid: !1, msg: "Invalid GSTIN (e.g. 27AAPFU0939F1ZV)" }
      : { valid: !0, msg: "" },
  w = (s) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(s || 0),
  se = (s) => {
    const l = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
      ],
      p = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
      ];
    if (s === 0) return "Zero";
    const x = (h) =>
        h < 20
          ? l[h]
          : h < 100
            ? p[Math.floor(h / 10)] + (h % 10 ? " " + l[h % 10] : "")
            : h < 1e3
              ? l[Math.floor(h / 100)] +
                " Hundred" +
                (h % 100 ? " and " + x(h % 100) : "")
              : h < 1e5
                ? x(Math.floor(h / 1e3)) +
                  " Thousand" +
                  (h % 1e3 ? " " + x(h % 1e3) : "")
                : h < 1e7
                  ? x(Math.floor(h / 1e5)) +
                    " Lakh" +
                    (h % 1e5 ? " " + x(h % 1e5) : "")
                  : x(Math.floor(h / 1e7)) +
                    " Crore" +
                    (h % 1e7 ? " " + x(h % 1e7) : ""),
      v = Math.floor(s),
      f = Math.round((s - v) * 100);
    return (
      x(v) + " Rupees" + (f > 0 ? " and " + x(f) + " Paise" : "") + " Only"
    );
  },
  ae = () => {
    const s = new Date().getFullYear();
    return `INV/${`${String(s).slice(2)}-${String(s + 1).slice(2)}`}/${Math.floor(Math.random() * 9e3) + 1e3}`;
  },
  ee = (s) =>
    P.find((l) => l.name.toLowerCase() === s?.toLowerCase())?.code || "",
  pe = (s, l) => !!(s && l && s.toLowerCase() !== l.toLowerCase()),
  ne = () => ({
    id: Date.now() + Math.random(),
    description: "",
    hsnSac: "",
    unit: "NOS",
    quantity: 1,
    rate: 0,
    discount: 0,
    discountType: "percent",
    gstRate: 18,
    isService: !1,
  }),
  Y = () => ({
    invoiceType: "TAX_INVOICE",
    invoiceNumber: ae(),
    invoiceDate: new Date().toISOString().split("T")[0],
    dueDate: "",
    placeOfSupply: "",
    reverseCharge: !1,
    supplyType: "B2B",
    notes: "Thank you for your business!",
    termsAndConditions: `1. Payment is due within 30 days of invoice date.
2. Goods once sold will not be taken back.
3. Interest @ 18% p.a. will be charged on overdue payments.
4. Subject to jurisdiction of local courts.`,
    seller: {
      tradeName: "",
      legalName: "",
      gstin: "",
      pan: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      email: "",
      website: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      upiId: "",
      logo: null,
    },
    buyer: {
      tradeName: "",
      legalName: "",
      gstin: "",
      pan: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
      email: "",
      poNumber: "",
      poDate: "",
    },
    lineItems: [ne()],
    shipping: 0,
    shippingTaxRate: 0,
    otherCharges: 0,
    otherChargesDesc: "",
    roundOff: !0,
    showSignature: !0,
    signatureLabel: "Authorized Signatory",
  }),
  he = (s) => {
    const l = pe(s.seller.state, s.placeOfSupply || s.buyer.state),
      p = s.invoiceType === "BILL_OF_SUPPLY",
      x = s.lineItems.map((m) => {
        const c = parseFloat(m.quantity) || 0,
          i = parseFloat(m.rate) || 0,
          j = c * i,
          O =
            m.discountType === "percent"
              ? (j * (parseFloat(m.discount) || 0)) / 100
              : parseFloat(m.discount) || 0,
          F = j - O,
          $ = parseFloat(m.gstRate) || 0,
          k = p ? 0 : (F * $) / 100,
          W = !p && !l ? k / 2 : 0,
          E = !p && !l ? k / 2 : 0;
        return {
          ...m,
          gross: j,
          disc: O,
          taxable: F,
          totalTax: k,
          cgst: W,
          sgst: E,
          igst: !p && l ? k : 0,
          lineTotal: F + k,
        };
      }),
      v = x.reduce((m, c) => m + c.taxable, 0),
      f = x.reduce((m, c) => m + c.cgst, 0),
      h = x.reduce((m, c) => m + c.sgst, 0),
      a = x.reduce((m, c) => m + c.igst, 0),
      g = x.reduce((m, c) => m + c.disc, 0),
      z = parseFloat(s.shipping) || 0,
      B = (z * (parseFloat(s.shippingTaxRate) || 0)) / 100,
      T = parseFloat(s.otherCharges) || 0,
      D = v + f + h + a + z + B + T,
      A = s.roundOff ? Math.round(D) - D : 0,
      R = D + A;
    return {
      items: x,
      subTotal: v,
      totalCGST: f,
      totalSGST: h,
      totalIGST: a,
      totalDiscount: g,
      ship: z,
      shipTax: B,
      other: T,
      roundOff: A,
      grand: R,
      inter: l,
      isBOS: p,
      totalTax: f + h + a + B,
    };
  },
  ue = (s) => {
    const l = {};
    return (
      s.forEach((p) => {
        const x = `${p.hsnSac || "N/A"}_${p.gstRate}`;
        (l[x] ||
          (l[x] = {
            hsnSac: p.hsnSac || "N/A",
            rate: p.gstRate,
            taxable: 0,
            cgst: 0,
            sgst: 0,
            igst: 0,
          }),
          (l[x].taxable += p.taxable),
          (l[x].cgst += p.cgst),
          (l[x].sgst += p.sgst),
          (l[x].igst += p.igst));
      }),
      Object.values(l)
    );
  },
  te = ({ inv: s, taxes: l, docRef: p }) => {
    const x = ue(l.items),
      v = ee(s.seller.state),
      f = ee(s.buyer.state || s.placeOfSupply),
      h = le.find((a) => a.value === s.invoiceType)?.label || "Tax Invoice";
    return e.jsxs("div", {
      ref: p,
      id: "gst-invoice-doc",
      style: {
        background: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "'Arial', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: "11px",
        lineHeight: "1.5",
        padding: "0",
        minWidth: "720px",
        maxWidth: "960px",
        margin: "0 auto",
        boxSizing: "border-box",
      },
      children: [
        e.jsxs("div", {
          style: {
            background: "#111111",
            color: "#ffffff",
            padding: "18px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("div", {
                  style: {
                    fontWeight: "900",
                    fontSize: "22px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  },
                  children: h,
                }),
                s.reverseCharge &&
                  e.jsx("div", {
                    style: {
                      fontSize: "9px",
                      color: "#aaa",
                      marginTop: "3px",
                      letterSpacing: "1px",
                    },
                    children: "REVERSE CHARGE APPLICABLE",
                  }),
              ],
            }),
            e.jsxs("div", {
              style: { textAlign: "right" },
              children: [
                e.jsx("div", {
                  style: {
                    fontSize: "14px",
                    fontWeight: "800",
                    letterSpacing: "0.5px",
                    fontFamily: "monospace",
                  },
                  children: s.invoiceNumber || "—",
                }),
                e.jsx("div", {
                  style: { fontSize: "10px", color: "#bbb", marginTop: "4px" },
                  children: s.invoiceDate
                    ? new Date(s.invoiceDate + "T00:00:00").toLocaleDateString(
                        "en-IN",
                        { day: "2-digit", month: "long", year: "numeric" },
                      )
                    : "Date not set",
                }),
                s.dueDate &&
                  e.jsxs("div", {
                    style: { fontSize: "9px", color: "#888", marginTop: "2px" },
                    children: [
                      "Due:",
                      " ",
                      new Date(s.dueDate + "T00:00:00").toLocaleDateString(
                        "en-IN",
                        { day: "2-digit", month: "short", year: "numeric" },
                      ),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          style: { display: "flex", borderBottom: "2px solid #111" },
          children: [
            e.jsxs("div", {
              style: {
                flex: 1,
                padding: "20px 24px",
                borderRight: "1px solid #e0e0e0",
              },
              children: [
                s.seller.logo &&
                  e.jsx("img", {
                    src: s.seller.logo,
                    alt: "Logo",
                    style: {
                      maxHeight: "60px",
                      maxWidth: "160px",
                      objectFit: "contain",
                      marginBottom: "12px",
                      display: "block",
                    },
                  }),
                e.jsx("div", {
                  style: {
                    fontWeight: "900",
                    fontSize: "16px",
                    color: "#111",
                    marginBottom: "3px",
                  },
                  children:
                    s.seller.tradeName || s.seller.legalName || "Your Company",
                }),
                s.seller.legalName &&
                  s.seller.legalName !== s.seller.tradeName &&
                  e.jsxs("div", {
                    style: {
                      fontSize: "10px",
                      color: "#777",
                      marginBottom: "6px",
                    },
                    children: ["Legal: ", s.seller.legalName],
                  }),
                e.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "#555",
                    lineHeight: "1.65",
                  },
                  children: [
                    [s.seller.address1, s.seller.address2]
                      .filter(Boolean)
                      .join(", "),
                    (s.seller.city || s.seller.state) &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("br", {}),
                          [s.seller.city, s.seller.state, s.seller.pincode]
                            .filter(Boolean)
                            .join(", "),
                        ],
                      }),
                  ],
                }),
                s.seller.phone &&
                  e.jsxs("div", {
                    style: {
                      fontSize: "10px",
                      color: "#666",
                      marginTop: "4px",
                    },
                    children: ["Ph: ", s.seller.phone],
                  }),
                s.seller.email &&
                  e.jsx("div", {
                    style: { fontSize: "10px", color: "#666" },
                    children: s.seller.email,
                  }),
                s.seller.website &&
                  e.jsx("div", {
                    style: { fontSize: "10px", color: "#666" },
                    children: s.seller.website,
                  }),
                e.jsxs("div", {
                  style: {
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px dashed #ddd",
                  },
                  children: [
                    s.seller.gstin &&
                      e.jsxs("div", {
                        style: { marginBottom: "4px" },
                        children: [
                          e.jsx("span", {
                            style: {
                              fontSize: "9px",
                              color: "#999",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                            },
                            children: "GSTIN ",
                          }),
                          e.jsx("span", {
                            style: {
                              fontWeight: "800",
                              fontSize: "11px",
                              color: "#111",
                              fontFamily: "monospace",
                              letterSpacing: "0.8px",
                            },
                            children: s.seller.gstin.toUpperCase(),
                          }),
                        ],
                      }),
                    s.seller.pan &&
                      e.jsxs("div", {
                        style: { marginBottom: "4px" },
                        children: [
                          e.jsx("span", {
                            style: {
                              fontSize: "9px",
                              color: "#999",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase",
                            },
                            children: "PAN ",
                          }),
                          e.jsx("span", {
                            style: {
                              fontWeight: "700",
                              fontSize: "11px",
                              color: "#333",
                              fontFamily: "monospace",
                            },
                            children: s.seller.pan.toUpperCase(),
                          }),
                        ],
                      }),
                    v &&
                      e.jsxs("div", {
                        style: { fontSize: "10px", color: "#777" },
                        children: [
                          "State Code:",
                          " ",
                          e.jsx("span", {
                            style: { fontWeight: "700", color: "#333" },
                            children: v,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              style: {
                flex: 1,
                padding: "20px 24px",
                background: "#fafafa",
                borderRight: "1px solid #e0e0e0",
              },
              children: [
                e.jsx("div", {
                  style: {
                    fontSize: "8px",
                    fontWeight: "800",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "10px",
                  },
                  children: "Bill To",
                }),
                e.jsx("div", {
                  style: {
                    fontWeight: "900",
                    fontSize: "15px",
                    color: "#111",
                    marginBottom: "3px",
                  },
                  children:
                    s.buyer.tradeName || s.buyer.legalName || "Customer Name",
                }),
                s.buyer.legalName &&
                  s.buyer.legalName !== s.buyer.tradeName &&
                  e.jsxs("div", {
                    style: {
                      fontSize: "10px",
                      color: "#777",
                      marginBottom: "6px",
                    },
                    children: ["Legal: ", s.buyer.legalName],
                  }),
                e.jsxs("div", {
                  style: {
                    fontSize: "11px",
                    color: "#555",
                    lineHeight: "1.65",
                  },
                  children: [
                    [s.buyer.address1, s.buyer.address2]
                      .filter(Boolean)
                      .join(", "),
                    (s.buyer.city || s.buyer.state) &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("br", {}),
                          [s.buyer.city, s.buyer.state, s.buyer.pincode]
                            .filter(Boolean)
                            .join(", "),
                        ],
                      }),
                  ],
                }),
                s.buyer.phone &&
                  e.jsxs("div", {
                    style: {
                      fontSize: "10px",
                      color: "#666",
                      marginTop: "4px",
                    },
                    children: ["Ph: ", s.buyer.phone],
                  }),
                s.buyer.email &&
                  e.jsx("div", {
                    style: { fontSize: "10px", color: "#666" },
                    children: s.buyer.email,
                  }),
                e.jsxs("div", {
                  style: {
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px dashed #ddd",
                  },
                  children: [
                    s.buyer.gstin &&
                      e.jsxs("div", {
                        style: { marginBottom: "4px" },
                        children: [
                          e.jsx("span", {
                            style: {
                              fontSize: "9px",
                              color: "#999",
                              textTransform: "uppercase",
                            },
                            children: "GSTIN ",
                          }),
                          e.jsx("span", {
                            style: {
                              fontWeight: "800",
                              fontSize: "11px",
                              color: "#111",
                              fontFamily: "monospace",
                              letterSpacing: "0.8px",
                            },
                            children: s.buyer.gstin.toUpperCase(),
                          }),
                        ],
                      }),
                    (s.buyer.state || f) &&
                      e.jsxs("div", {
                        style: { fontSize: "10px", color: "#777" },
                        children: [
                          "State: ",
                          s.buyer.state,
                          f &&
                            e.jsxs("span", {
                              children: [
                                " ",
                                "| Code:",
                                " ",
                                e.jsx("span", {
                                  style: { fontWeight: "700", color: "#333" },
                                  children: f,
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
              style: {
                width: "190px",
                flexShrink: 0,
                padding: "20px 18px",
                background: "#f2f2f2",
              },
              children: [
                e.jsx("div", {
                  style: {
                    fontSize: "8px",
                    fontWeight: "800",
                    color: "#aaa",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "14px",
                  },
                  children: "Invoice Details",
                }),
                [
                  { l: "Invoice No", v: s.invoiceNumber },
                  {
                    l: "Date",
                    v: s.invoiceDate
                      ? new Date(
                          s.invoiceDate + "T00:00:00",
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "—",
                  },
                  s.dueDate
                    ? {
                        l: "Due Date",
                        v: new Date(s.dueDate + "T00:00:00").toLocaleDateString(
                          "en-IN",
                          { day: "2-digit", month: "short", year: "numeric" },
                        ),
                      }
                    : null,
                  s.buyer.poNumber
                    ? { l: "P.O. No", v: s.buyer.poNumber }
                    : null,
                  {
                    l: "Place of Supply",
                    v: s.placeOfSupply || s.buyer.state || "—",
                  },
                  { l: "Rev. Charge", v: s.reverseCharge ? "Yes" : "No" },
                  { l: "Supply Type", v: s.supplyType },
                ]
                  .filter(Boolean)
                  .map(({ l: a, v: g }) =>
                    e.jsxs(
                      "div",
                      {
                        style: { marginBottom: "10px" },
                        children: [
                          e.jsx("div", {
                            style: {
                              fontSize: "8px",
                              color: "#aaa",
                              textTransform: "uppercase",
                              letterSpacing: "0.8px",
                              marginBottom: "2px",
                            },
                            children: a,
                          }),
                          e.jsx("div", {
                            style: {
                              fontSize: "10px",
                              fontWeight: "700",
                              color: "#222",
                              wordBreak: "break-word",
                              lineHeight: "1.4",
                            },
                            children: g,
                          }),
                        ],
                      },
                      a,
                    ),
                  ),
              ],
            }),
          ],
        }),
        e.jsxs("table", {
          style: {
            width: "100%",
            borderCollapse: "collapse",
            borderBottom: "1px solid #ddd",
          },
          children: [
            e.jsx("thead", {
              children: e.jsx("tr", {
                style: { background: "#222", color: "#fff" },
                children: [
                  { t: "#", a: "center", w: "30px" },
                  { t: "Description of Goods / Services", a: "left" },
                  { t: "HSN/SAC", a: "center", w: "70px" },
                  { t: "Unit", a: "center", w: "44px" },
                  { t: "Qty", a: "right", w: "44px" },
                  { t: "Rate (₹)", a: "right", w: "74px" },
                  { t: "Disc.", a: "right", w: "56px" },
                  { t: "Taxable (₹)", a: "right", w: "84px" },
                  ...(!l.isBOS && l.inter
                    ? [{ t: "IGST", a: "right", w: "70px" }]
                    : []),
                  ...(!l.isBOS && !l.inter
                    ? [
                        { t: "CGST", a: "right", w: "64px" },
                        { t: "SGST/UTGST", a: "right", w: "72px" },
                      ]
                    : []),
                  { t: "Total (₹)", a: "right", w: "88px" },
                ].map((a, g) =>
                  e.jsx(
                    "th",
                    {
                      style: {
                        padding: "10px 9px",
                        textAlign: a.a,
                        fontWeight: "700",
                        fontSize: "8.5px",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        color: "#ccc",
                        width: a.w || "auto",
                        whiteSpace: "nowrap",
                      },
                      children: a.t,
                    },
                    g,
                  ),
                ),
              }),
            }),
            e.jsx("tbody", {
              children: l.items.map((a, g) =>
                e.jsxs(
                  "tr",
                  {
                    style: {
                      background: g % 2 === 0 ? "#fff" : "#fafafa",
                      borderBottom: "1px solid #ebebeb",
                    },
                    children: [
                      e.jsx("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "center",
                          color: "#bbb",
                          fontSize: "10px",
                        },
                        children: g + 1,
                      }),
                      e.jsxs("td", {
                        style: { padding: "10px 9px" },
                        children: [
                          e.jsx("div", {
                            style: {
                              fontWeight: "600",
                              color: "#111",
                              fontSize: "11px",
                            },
                            children: a.description || "—",
                          }),
                          !l.isBOS &&
                            e.jsxs("div", {
                              style: {
                                fontSize: "9px",
                                color: "#aaa",
                                marginTop: "2px",
                              },
                              children: [
                                "GST ",
                                a.gstRate,
                                "%",
                                a.isService ? " (Service)" : " (Goods)",
                              ],
                            }),
                        ],
                      }),
                      e.jsx("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "center",
                          color: "#555",
                          fontFamily: "monospace",
                          fontSize: "10px",
                        },
                        children: a.hsnSac || "—",
                      }),
                      e.jsx("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "center",
                          color: "#555",
                          fontSize: "10px",
                        },
                        children: a.unit,
                      }),
                      e.jsx("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "right",
                          fontSize: "11px",
                        },
                        children: a.quantity,
                      }),
                      e.jsxs("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "right",
                          fontSize: "11px",
                        },
                        children: [
                          "₹",
                          parseFloat(a.rate || 0).toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                          }),
                        ],
                      }),
                      e.jsx("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "right",
                          color: "#777",
                          fontSize: "10px",
                        },
                        children: a.discount
                          ? a.discountType === "percent"
                            ? `${a.discount}%`
                            : `₹${parseFloat(a.discount).toFixed(2)}`
                          : "—",
                      }),
                      e.jsxs("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "right",
                          fontWeight: "600",
                          fontSize: "11px",
                        },
                        children: ["₹", a.taxable.toFixed(2)],
                      }),
                      !l.isBOS &&
                        l.inter &&
                        e.jsxs("td", {
                          style: { padding: "10px 9px", textAlign: "right" },
                          children: [
                            e.jsxs("div", {
                              style: { fontWeight: "600", fontSize: "11px" },
                              children: ["₹", a.igst.toFixed(2)],
                            }),
                            e.jsxs("div", {
                              style: { fontSize: "9px", color: "#aaa" },
                              children: [a.gstRate, "%"],
                            }),
                          ],
                        }),
                      !l.isBOS &&
                        !l.inter &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("td", {
                              style: {
                                padding: "10px 9px",
                                textAlign: "right",
                              },
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    fontWeight: "600",
                                    fontSize: "11px",
                                  },
                                  children: ["₹", a.cgst.toFixed(2)],
                                }),
                                e.jsxs("div", {
                                  style: { fontSize: "9px", color: "#aaa" },
                                  children: [a.gstRate / 2, "%"],
                                }),
                              ],
                            }),
                            e.jsxs("td", {
                              style: {
                                padding: "10px 9px",
                                textAlign: "right",
                              },
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    fontWeight: "600",
                                    fontSize: "11px",
                                  },
                                  children: ["₹", a.sgst.toFixed(2)],
                                }),
                                e.jsxs("div", {
                                  style: { fontSize: "9px", color: "#aaa" },
                                  children: [a.gstRate / 2, "%"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      e.jsxs("td", {
                        style: {
                          padding: "10px 9px",
                          textAlign: "right",
                          fontWeight: "800",
                          fontSize: "11px",
                          color: "#111",
                        },
                        children: ["₹", a.lineTotal.toFixed(2)],
                      }),
                    ],
                  },
                  a.id,
                ),
              ),
            }),
          ],
        }),
        e.jsxs("div", {
          style: { display: "flex", borderBottom: "2px solid #111" },
          children: [
            e.jsxs("div", {
              style: {
                flex: 1,
                padding: "18px 22px",
                borderRight: "1px solid #ddd",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              },
              children: [
                !l.isBOS &&
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        style: {
                          fontSize: "8px",
                          fontWeight: "800",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "8px",
                        },
                        children: "HSN / SAC Summary",
                      }),
                      e.jsxs("table", {
                        style: {
                          width: "100%",
                          borderCollapse: "collapse",
                          fontSize: "10px",
                        },
                        children: [
                          e.jsx("thead", {
                            children: e.jsx("tr", {
                              style: { borderBottom: "1.5px solid #333" },
                              children: [
                                "HSN/SAC",
                                "Taxable (₹)",
                                l.inter ? "IGST (₹)" : "CGST (₹)",
                                ...(l.inter ? [] : ["SGST (₹)"]),
                                "Total Tax (₹)",
                              ].map((a, g) =>
                                e.jsx(
                                  "th",
                                  {
                                    style: {
                                      padding: "4px 6px",
                                      textAlign: g === 0 ? "left" : "right",
                                      fontWeight: "700",
                                      color: "#555",
                                      fontSize: "9px",
                                      letterSpacing: "0.3px",
                                    },
                                    children: a,
                                  },
                                  g,
                                ),
                              ),
                            }),
                          }),
                          e.jsx("tbody", {
                            children: x.map((a, g) =>
                              e.jsxs(
                                "tr",
                                {
                                  style: { borderBottom: "1px solid #eee" },
                                  children: [
                                    e.jsxs("td", {
                                      style: { padding: "5px 6px" },
                                      children: [
                                        e.jsx("span", {
                                          style: {
                                            fontWeight: "700",
                                            fontFamily: "monospace",
                                          },
                                          children: a.hsnSac,
                                        }),
                                        e.jsxs("span", {
                                          style: {
                                            color: "#aaa",
                                            marginLeft: "4px",
                                          },
                                          children: ["@", a.rate, "%"],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("td", {
                                      style: {
                                        padding: "5px 6px",
                                        textAlign: "right",
                                      },
                                      children: ["₹", a.taxable.toFixed(2)],
                                    }),
                                    l.inter
                                      ? e.jsxs("td", {
                                          style: {
                                            padding: "5px 6px",
                                            textAlign: "right",
                                          },
                                          children: ["₹", a.igst.toFixed(2)],
                                        })
                                      : e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsxs("td", {
                                              style: {
                                                padding: "5px 6px",
                                                textAlign: "right",
                                              },
                                              children: [
                                                "₹",
                                                a.cgst.toFixed(2),
                                              ],
                                            }),
                                            e.jsxs("td", {
                                              style: {
                                                padding: "5px 6px",
                                                textAlign: "right",
                                              },
                                              children: [
                                                "₹",
                                                a.sgst.toFixed(2),
                                              ],
                                            }),
                                          ],
                                        }),
                                    e.jsxs("td", {
                                      style: {
                                        padding: "5px 6px",
                                        textAlign: "right",
                                        fontWeight: "700",
                                      },
                                      children: [
                                        "₹",
                                        (a.cgst + a.sgst + a.igst).toFixed(2),
                                      ],
                                    }),
                                  ],
                                },
                                g,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                (s.seller.bankName ||
                  s.seller.accountNumber ||
                  s.seller.upiId) &&
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        style: {
                          fontSize: "8px",
                          fontWeight: "800",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "8px",
                        },
                        children: "Bank Details",
                      }),
                      e.jsx("div", {
                        style: {
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "3px 20px",
                          fontSize: "10px",
                        },
                        children: [
                          { l: "Bank", v: s.seller.bankName },
                          { l: "Account No", v: s.seller.accountNumber },
                          { l: "IFSC", v: s.seller.ifscCode?.toUpperCase() },
                          { l: "UPI", v: s.seller.upiId },
                        ]
                          .filter((a) => a.v)
                          .map(({ l: a, v: g }) =>
                            e.jsxs(
                              "div",
                              {
                                children: [
                                  e.jsxs("span", {
                                    style: { color: "#aaa" },
                                    children: [a, ": "],
                                  }),
                                  e.jsx("span", {
                                    style: {
                                      fontWeight: "700",
                                      color: "#222",
                                      fontFamily:
                                        a === "Account No" || a === "IFSC"
                                          ? "monospace"
                                          : "inherit",
                                    },
                                    children: g,
                                  }),
                                ],
                              },
                              a,
                            ),
                          ),
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  style: { borderTop: "1px dashed #ddd", paddingTop: "14px" },
                  children: [
                    e.jsx("div", {
                      style: {
                        fontSize: "8px",
                        fontWeight: "800",
                        color: "#999",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "6px",
                      },
                      children: "Amount in Words",
                    }),
                    e.jsx("div", {
                      style: {
                        fontSize: "11px",
                        fontWeight: "700",
                        color: "#222",
                        fontStyle: "italic",
                        lineHeight: "1.6",
                      },
                      children: se(Math.round(l.grand)),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              style: { width: "270px", flexShrink: 0, padding: "18px 20px" },
              children: [
                e.jsx("div", {
                  style: {
                    fontSize: "8px",
                    fontWeight: "800",
                    color: "#999",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "14px",
                  },
                  children: "Summary",
                }),
                e.jsx("table", {
                  style: { width: "100%", fontSize: "11px" },
                  children: e.jsx("tbody", {
                    children: [
                      { label: "Subtotal (Taxable Value)", value: l.subTotal },
                      l.totalDiscount > 0
                        ? {
                            label: "Total Discount",
                            value: -l.totalDiscount,
                            dim: !0,
                          }
                        : null,
                      !l.isBOS && l.inter
                        ? { label: "IGST", value: l.totalIGST }
                        : null,
                      !l.isBOS && !l.inter
                        ? { label: "CGST", value: l.totalCGST }
                        : null,
                      !l.isBOS && !l.inter
                        ? { label: "SGST / UTGST", value: l.totalSGST }
                        : null,
                      l.ship > 0
                        ? { label: "Shipping Charges", value: l.ship }
                        : null,
                      l.shipTax > 0
                        ? { label: "GST on Shipping", value: l.shipTax }
                        : null,
                      l.other > 0
                        ? {
                            label: s.otherChargesDesc || "Other Charges",
                            value: l.other,
                          }
                        : null,
                      s.roundOff && l.roundOff !== 0
                        ? { label: "Round Off", value: l.roundOff, dim: !0 }
                        : null,
                    ]
                      .filter(Boolean)
                      .map((a, g) =>
                        e.jsxs(
                          "tr",
                          {
                            style: { borderBottom: "1px solid #eee" },
                            children: [
                              e.jsx("td", {
                                style: {
                                  padding: "6px 0",
                                  color: a.dim ? "#aaa" : "#555",
                                  fontSize: "11px",
                                },
                                children: a.label,
                              }),
                              e.jsx("td", {
                                style: {
                                  padding: "6px 0",
                                  textAlign: "right",
                                  fontWeight: "600",
                                  color: a.dim ? "#aaa" : "#222",
                                },
                                children:
                                  a.value >= 0
                                    ? `₹${a.value.toFixed(2)}`
                                    : `-₹${Math.abs(a.value).toFixed(2)}`,
                              }),
                            ],
                          },
                          g,
                        ),
                      ),
                  }),
                }),
                e.jsxs("div", {
                  style: {
                    marginTop: "10px",
                    background: "#111",
                    color: "#fff",
                    padding: "13px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                  children: [
                    e.jsx("span", {
                      style: {
                        fontWeight: "900",
                        fontSize: "13px",
                        letterSpacing: "2px",
                      },
                      children: "TOTAL",
                    }),
                    e.jsxs("span", {
                      style: { fontWeight: "900", fontSize: "18px" },
                      children: ["₹", l.grand.toFixed(2)],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          style: { display: "flex", borderBottom: "2px solid #111" },
          children: [
            e.jsxs("div", {
              style: {
                flex: 1,
                padding: "18px 22px",
                borderRight: "1px solid #ddd",
              },
              children: [
                s.notes &&
                  e.jsxs("div", {
                    style: { marginBottom: "14px" },
                    children: [
                      e.jsx("div", {
                        style: {
                          fontSize: "8px",
                          fontWeight: "800",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "6px",
                        },
                        children: "Notes",
                      }),
                      e.jsx("div", {
                        style: {
                          fontSize: "10px",
                          color: "#555",
                          whiteSpace: "pre-line",
                          lineHeight: "1.65",
                        },
                        children: s.notes,
                      }),
                    ],
                  }),
                s.termsAndConditions &&
                  e.jsxs("div", {
                    children: [
                      e.jsx("div", {
                        style: {
                          fontSize: "8px",
                          fontWeight: "800",
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "1.5px",
                          marginBottom: "6px",
                        },
                        children: "Terms & Conditions",
                      }),
                      e.jsx("div", {
                        style: {
                          fontSize: "9.5px",
                          color: "#777",
                          whiteSpace: "pre-line",
                          lineHeight: "1.65",
                        },
                        children: s.termsAndConditions,
                      }),
                    ],
                  }),
              ],
            }),
            s.showSignature &&
              e.jsx("div", {
                style: {
                  width: "220px",
                  flexShrink: 0,
                  padding: "18px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                },
                children: e.jsxs("div", {
                  style: { textAlign: "center" },
                  children: [
                    e.jsx("div", {
                      style: {
                        height: "48px",
                        borderBottom: "1.5px solid #444",
                        marginBottom: "8px",
                      },
                    }),
                    e.jsxs("div", {
                      style: {
                        fontSize: "10px",
                        fontWeight: "800",
                        color: "#222",
                      },
                      children: [
                        "For ",
                        s.seller.tradeName || s.seller.legalName || "Company",
                      ],
                    }),
                    e.jsx("div", {
                      style: {
                        fontSize: "9px",
                        color: "#888",
                        marginTop: "3px",
                      },
                      children: s.signatureLabel,
                    }),
                  ],
                }),
              }),
          ],
        }),
        e.jsxs("div", {
          style: {
            background: "#f5f5f5",
            borderTop: "1px solid #e0e0e0",
            padding: "8px 22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          children: [
            e.jsx("div", {
              style: {
                fontSize: "8.5px",
                color: "#bbb",
                letterSpacing: "0.3px",
              },
              children:
                "Computer-generated invoice. No signature required. | GST Act, 2017",
            }),
            e.jsx("div", {
              style: { fontSize: "8.5px", color: "#bbb" },
              children: "Generated via ihatepdf.cv",
            }),
          ],
        }),
      ],
    });
  },
  o = ({ label: s, required: l, error: p, hint: x, children: v }) =>
    e.jsxs("div", {
      className: "flex flex-col gap-1.5",
      children: [
        e.jsxs("label", {
          className:
            "text-[9px] font-black text-zinc-500 uppercase tracking-[1.5px]",
          children: [
            s,
            l &&
              e.jsx("span", {
                className: "text-zinc-400 ml-0.5",
                children: "*",
              }),
          ],
        }),
        v,
        x &&
          !p &&
          e.jsx("p", {
            className: "text-[10px] text-zinc-700 leading-tight",
            children: x,
          }),
        p &&
          e.jsxs("p", {
            className:
              "text-[10px] text-zinc-400 leading-tight flex items-center gap-1",
            children: [e.jsx("span", { children: "⚠" }), " ", p],
          }),
      ],
    }),
  d = ({ className: s = "", ...l }) =>
    e.jsx("input", {
      className: `w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all duration-150 ${s}`,
      ...l,
    }),
  C = ({ className: s = "", children: l, ...p }) =>
    e.jsx("select", {
      className: `w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all duration-150 cursor-pointer ${s}`,
      ...p,
      children: l,
    }),
  J = ({ className: s = "", ...l }) =>
    e.jsx("textarea", {
      className: `w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-500 focus:bg-zinc-800/80 transition-all duration-150 resize-none ${s}`,
      ...l,
    }),
  N = ({ label: s }) =>
    e.jsxs("div", {
      className: "flex items-center gap-3 my-1",
      children: [
        e.jsx("div", { className: "flex-1 h-px bg-zinc-800" }),
        e.jsx("span", {
          className:
            "text-[8px] font-black text-zinc-700 uppercase tracking-[2px] whitespace-nowrap",
          children: s,
        }),
        e.jsx("div", { className: "flex-1 h-px bg-zinc-800" }),
      ],
    }),
  K = ({ label: s, sublabel: l, checked: p, onChange: x }) =>
    e.jsxs("label", {
      className: "flex items-start gap-3 cursor-pointer group py-0.5",
      onClick: x,
      children: [
        e.jsx("div", {
          className:
            "mt-0.5 flex-shrink-0 w-4 h-4 rounded border-2 border-zinc-700 group-hover:border-zinc-500 flex items-center justify-center transition-all",
          style: {
            background: p ? "#fff" : "transparent",
            borderColor: p ? "#fff" : void 0,
          },
          children:
            p &&
            e.jsx("svg", {
              className: "w-2.5 h-2.5 text-black",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 3,
              children: e.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5 13l4 4L19 7",
              }),
            }),
        }),
        e.jsxs("div", {
          children: [
            e.jsx("div", {
              className: "text-sm text-zinc-200 font-semibold leading-tight",
              children: s,
            }),
            l &&
              e.jsx("div", {
                className: "text-[10px] text-zinc-600 mt-0.5 leading-snug",
                children: l,
              }),
          ],
        }),
      ],
    });
function me({ showNotification: s }) {
  const [l, p] = y.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("gst_draft") || "null") || Y();
      } catch {
        return Y();
      }
    }),
    [x, v] = y.useState("seller"),
    [f, h] = y.useState(!1),
    [a, g] = y.useState(!1),
    [z, B] = y.useState({ seller: "", buyer: "" }),
    [T, D] = y.useState(() => {
      try {
        return JSON.parse(localStorage.getItem("gst_templates") || "[]");
      } catch {
        return [];
      }
    }),
    A = y.useRef(null),
    R = y.useRef(null),
    m = y.useRef(null),
    c = he(l);
  y.useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem("gst_draft", JSON.stringify(l));
      } catch {}
    }, 600);
    return () => clearTimeout(t);
  }, [l]);
  const i = y.useCallback((t, n) => {
      p((u) => {
        const r = t.split("."),
          b = { ...u };
        let S = b;
        for (let I = 0; I < r.length - 1; I++)
          ((S[r[I]] = { ...S[r[I]] }), (S = S[r[I]]));
        return ((S[r[r.length - 1]] = n), b);
      });
    }, []),
    j = y.useCallback((t, n, u) => {
      p((r) => ({
        ...r,
        lineItems: r.lineItems.map((b) => (b.id === t ? { ...b, [n]: u } : b)),
      }));
    }, []),
    O = () => p((t) => ({ ...t, lineItems: [...t.lineItems, ne()] })),
    F = (t) =>
      p((n) => ({ ...n, lineItems: n.lineItems.filter((u) => u.id !== t) })),
    $ = (t) =>
      p((n) => {
        const u = n.lineItems.findIndex((S) => S.id === t);
        if (u === -1) return n;
        const r = { ...n.lineItems[u], id: Date.now() + Math.random() },
          b = [...n.lineItems];
        return (b.splice(u + 1, 0, r), { ...n, lineItems: b });
      }),
    k = (t) => {
      const n = t.target.files?.[0];
      if (!n) return;
      if (n.size > 2 * 1024 * 1024) {
        s("Logo must be under 2MB", "error");
        return;
      }
      const u = new FileReader();
      ((u.onload = (r) => i("seller.logo", r.target.result)),
        u.readAsDataURL(n));
    },
    W = (t, n) => {
      i(`${t}.gstin`, n);
      const u = xe(n);
      if (
        (B((r) => ({ ...r, [t]: u.valid ? "" : u.msg })),
        t === "seller" && n.length >= 2)
      ) {
        const r = n.substring(0, 2),
          b = P.find((S) => S.code === r);
        b && i("seller.state", b.name);
      }
    },
    E = () => {
      const t = prompt("Template name:");
      if (!t) return;
      const n = {
          id: Date.now(),
          name: t,
          seller: l.seller,
          notes: l.notes,
          terms: l.termsAndConditions,
        },
        u = [...T, n];
      (D(u),
        localStorage.setItem("gst_templates", JSON.stringify(u)),
        s("Template saved"));
    },
    q = (t) => {
      (p((n) => ({
        ...n,
        seller: t.seller,
        notes: t.notes,
        termsAndConditions: t.terms,
      })),
        s(`"${t.name}" loaded`));
    },
    re = (t) => {
      const n = T.filter((u) => u.id !== t);
      (D(n), localStorage.setItem("gst_templates", JSON.stringify(n)));
    },
    M = y.useCallback(async () => {
      const t = A.current || R.current;
      if (!t) {
        (h(!0), setTimeout(M, 500));
        return;
      }
      if (!window.html2canvas || !window.jspdf) {
        s("PDF library not ready yet", "error");
        return;
      }
      g(!0);
      try {
        const n = await window.html2canvas(t, {
            scale: 2.5,
            useCORS: !0,
            backgroundColor: "#ffffff",
            logging: !1,
          }),
          { jsPDF: u } = window.jspdf,
          r = new u({ orientation: "portrait", unit: "mm", format: "a4" }),
          b = r.internal.pageSize.getWidth(),
          S = r.internal.pageSize.getHeight(),
          I = n.toDataURL("image/jpeg", 0.97),
          oe = n.height / n.width,
          G = b * oe;
        if (G <= S) r.addImage(I, "JPEG", 0, 0, b, G);
        else {
          let X = 0,
            V = G;
          for (; V > 0;) {
            const U = Math.min(S, V),
              Z = (U / G) * n.height,
              H = document.createElement("canvas");
            ((H.width = n.width),
              (H.height = Z),
              H.getContext("2d").drawImage(
                n,
                0,
                (X / G) * n.height,
                n.width,
                Z,
                0,
                0,
                n.width,
                Z,
              ),
              X > 0 && r.addPage(),
              r.addImage(H.toDataURL("image/jpeg", 0.97), "JPEG", 0, 0, b, U),
              (X += U),
              (V -= U));
          }
        }
        (r.save(`${l.invoiceNumber.replace(/\//g, "_")}.pdf`),
          s("Invoice PDF downloaded!"));
      } catch (n) {
        (console.error(n), s("PDF generation failed. Try again.", "error"));
      } finally {
        g(!1);
      }
    }, [l, s]),
    L = [
      { label: "Invoice Type", ok: !!l.invoiceType },
      { label: "Invoice Number", ok: !!l.invoiceNumber },
      { label: "Invoice Date", ok: !!l.invoiceDate },
      {
        label: "Supplier GSTIN",
        ok: l.seller.gstin.length === 15 && !z.seller,
      },
      { label: "Supplier State", ok: !!l.seller.state },
      { label: "Buyer Name", ok: !!(l.buyer.tradeName || l.buyer.legalName) },
      { label: "Place of Supply", ok: !!l.placeOfSupply },
      {
        label: "HSN/SAC on all items",
        ok: l.lineItems.every((t) => !!t.hsnSac),
      },
    ],
    _ = L.filter((t) => t.ok).length,
    ie = [
      { id: "seller", label: "Seller" },
      { id: "buyer", label: "Buyer" },
      { id: "invoice", label: "Invoice" },
      { id: "items", label: "Items" },
      { id: "other", label: "Other" },
    ];
  return e.jsxs("div", {
    className: "w-full max-w-[1440px] mx-auto pb-10",
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("div", {
                className: "flex items-center gap-2.5 mb-1",
                children: e.jsx("h1", {
                  className:
                    "text-xl sm:text-2xl font-black text-white tracking-tight",
                  children: "GST Invoice Generator",
                }),
              }),
              e.jsx("p", {
                className: "text-zinc-600 text-xs pl-0.5",
                children:
                  "Tax Invoice · Bill of Supply · CGST/SGST/IGST · HSN/SAC · 100% local, no upload",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex flex-wrap gap-2",
            children: [
              T.length > 0 &&
                e.jsxs("select", {
                  onChange: (t) => {
                    (t.target.value !== "" && q(T[+t.target.value]),
                      (t.target.value = ""));
                  },
                  className:
                    "bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-400 focus:outline-none focus:border-zinc-600 transition-all",
                  children: [
                    e.jsx("option", { value: "", children: "Load Template" }),
                    T.map((t, n) =>
                      e.jsx("option", { value: n, children: t.name }, t.id),
                    ),
                  ],
                }),
              e.jsx("button", {
                onClick: E,
                className:
                  "px-3 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-zinc-200 rounded-lg text-xs font-semibold transition-all",
                children: "Save Template",
              }),
              e.jsx("button", {
                onClick: () => h(!0),
                className:
                  "px-4 py-2 bg-white hover:bg-zinc-100 text-black rounded-lg text-xs font-black tracking-wide transition-all",
                children: "Preview",
              }),
              e.jsx("button", {
                onClick: M,
                disabled: a,
                className:
                  "px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg text-xs font-bold transition-all",
                children: a ? "Generating…" : "Download PDF",
              }),
            ],
          }),
        ],
      }),
      l.seller.state &&
        (l.buyer.state || l.placeOfSupply) &&
        e.jsxs("div", {
          className:
            "mb-4 flex items-center gap-3 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs",
          children: [
            e.jsx("div", {
              className: `w-2 h-2 rounded-full flex-shrink-0 ${c.inter ? "bg-zinc-300" : "bg-zinc-600"}`,
            }),
            e.jsx("span", {
              className: c.inter
                ? "text-zinc-300 font-semibold"
                : "text-zinc-500",
              children: c.inter
                ? `Inter-State Supply → IGST applies   (${l.seller.state} → ${l.placeOfSupply || l.buyer.state})`
                : `Intra-State Supply → CGST + SGST applies   (${l.seller.state})`,
            }),
          ],
        }),
      e.jsxs("div", {
        className:
          "grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4 xl:gap-5 items-start",
        children: [
          e.jsxs("div", {
            className: "space-y-4 min-w-0",
            children: [
              e.jsx("div", {
                className:
                  "bg-zinc-900 border border-zinc-800 rounded-xl p-1 flex gap-0.5 overflow-x-auto",
                children: ie.map((t) =>
                  e.jsx(
                    "button",
                    {
                      onClick: () => v(t.id),
                      className: `flex-1 min-w-[52px] py-2 px-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${x === t.id ? "bg-white text-black shadow-sm" : "text-zinc-600 hover:text-zinc-300"}`,
                      children: t.label,
                    },
                    t.id,
                  ),
                ),
              }),
              x === "seller" &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-5",
                  children: [
                    e.jsxs("div", {
                      className: "flex gap-4 items-start",
                      children: [
                        e.jsx("input", {
                          ref: m,
                          type: "file",
                          accept: "image/*",
                          className: "hidden",
                          onChange: k,
                        }),
                        e.jsx("div", {
                          onClick: () => m.current?.click(),
                          className:
                            "w-[76px] h-[76px] sm:w-[88px] sm:h-[88px] flex-shrink-0 border-2 border-dashed border-zinc-800 hover:border-zinc-600 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden",
                          children: l.seller.logo
                            ? e.jsx("img", {
                                src: l.seller.logo,
                                alt: "logo",
                                className: "w-full h-full object-contain p-1.5",
                              })
                            : e.jsxs("div", {
                                className: "text-center px-2",
                                children: [
                                  e.jsx("svg", {
                                    className:
                                      "w-5 h-5 text-zinc-700 group-hover:text-zinc-500 mx-auto mb-1 transition-colors",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: e.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 1.5,
                                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "text-[9px] text-zinc-700 group-hover:text-zinc-500 font-bold uppercase tracking-wide transition-colors",
                                    children: "Logo",
                                  }),
                                ],
                              }),
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0 space-y-3",
                          children: [
                            e.jsx(o, {
                              label: "Trade / Brand Name",
                              required: !0,
                              children: e.jsx(d, {
                                value: l.seller.tradeName,
                                onChange: (t) =>
                                  i("seller.tradeName", t.target.value),
                                placeholder: "Your Brand or Trade Name",
                              }),
                            }),
                            e.jsx(o, {
                              label: "Legal Name (as per GST Registration)",
                              children: e.jsx(d, {
                                value: l.seller.legalName,
                                onChange: (t) =>
                                  i("seller.legalName", t.target.value),
                                placeholder: "Full legal business name",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.seller.logo &&
                      e.jsx("button", {
                        onClick: () => i("seller.logo", null),
                        className:
                          "text-[10px] text-zinc-700 hover:text-zinc-400 transition-colors",
                        children: "Remove logo",
                      }),
                    e.jsx(N, { label: "GST Registration" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "GSTIN",
                          required: !0,
                          error: z.seller,
                          hint: "15-character ID e.g. 27AAPFU0939F1ZV",
                          children: e.jsx(d, {
                            value: l.seller.gstin,
                            onChange: (t) =>
                              W("seller", t.target.value.toUpperCase()),
                            placeholder: "27AAPFU0939F1ZV",
                            maxLength: 15,
                            className: `font-mono tracking-wider ${z.seller ? "border-zinc-500" : l.seller.gstin.length === 15 && !z.seller ? "border-zinc-600" : ""}`,
                          }),
                        }),
                        e.jsx(o, {
                          label: "PAN",
                          hint: "Auto-filled from GSTIN (chars 3–12)",
                          children: e.jsx(d, {
                            value: l.seller.pan,
                            onChange: (t) =>
                              i("seller.pan", t.target.value.toUpperCase()),
                            placeholder: "AAPFU0939F",
                            maxLength: 10,
                            className: "font-mono tracking-wider",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Business Address" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Address Line 1",
                          required: !0,
                          children: e.jsx(d, {
                            value: l.seller.address1,
                            onChange: (t) =>
                              i("seller.address1", t.target.value),
                            placeholder: "Building / Street",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Address Line 2",
                          children: e.jsx(d, {
                            value: l.seller.address2,
                            onChange: (t) =>
                              i("seller.address2", t.target.value),
                            placeholder: "Area / Locality",
                          }),
                        }),
                        e.jsx(o, {
                          label: "City",
                          required: !0,
                          children: e.jsx(d, {
                            value: l.seller.city,
                            onChange: (t) => i("seller.city", t.target.value),
                            placeholder: "Mumbai",
                          }),
                        }),
                        e.jsx(o, {
                          label: "State",
                          required: !0,
                          children: e.jsxs(C, {
                            value: l.seller.state,
                            onChange: (t) => i("seller.state", t.target.value),
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "Select State",
                              }),
                              P.map((t) =>
                                e.jsxs(
                                  "option",
                                  {
                                    value: t.name,
                                    children: [t.code, " — ", t.name],
                                  },
                                  t.code,
                                ),
                              ),
                            ],
                          }),
                        }),
                        e.jsx(o, {
                          label: "PIN Code",
                          children: e.jsx(d, {
                            value: l.seller.pincode,
                            onChange: (t) =>
                              i("seller.pincode", t.target.value),
                            placeholder: "400001",
                            maxLength: 6,
                            inputMode: "numeric",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Phone",
                          children: e.jsx(d, {
                            value: l.seller.phone,
                            onChange: (t) => i("seller.phone", t.target.value),
                            placeholder: "+91 98765 43210",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Email",
                          children: e.jsx(d, {
                            value: l.seller.email,
                            type: "email",
                            onChange: (t) => i("seller.email", t.target.value),
                            placeholder: "billing@company.com",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Website",
                          children: e.jsx(d, {
                            value: l.seller.website,
                            onChange: (t) =>
                              i("seller.website", t.target.value),
                            placeholder: "www.company.com",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Bank Details" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Bank Name",
                          children: e.jsx(d, {
                            value: l.seller.bankName,
                            onChange: (t) =>
                              i("seller.bankName", t.target.value),
                            placeholder: "HDFC Bank",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Account Number",
                          children: e.jsx(d, {
                            value: l.seller.accountNumber,
                            onChange: (t) =>
                              i("seller.accountNumber", t.target.value),
                            placeholder: "Account number",
                            className: "font-mono",
                          }),
                        }),
                        e.jsx(o, {
                          label: "IFSC Code",
                          children: e.jsx(d, {
                            value: l.seller.ifscCode,
                            onChange: (t) =>
                              i(
                                "seller.ifscCode",
                                t.target.value.toUpperCase(),
                              ),
                            placeholder: "HDFC0001234",
                            maxLength: 11,
                            className: "font-mono",
                          }),
                        }),
                        e.jsx(o, {
                          label: "UPI ID",
                          children: e.jsx(d, {
                            value: l.seller.upiId,
                            onChange: (t) => i("seller.upiId", t.target.value),
                            placeholder: "business@upi",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              x === "buyer" &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-5",
                  children: [
                    e.jsx(N, { label: "Customer Details" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Trade / Business Name",
                          required: !0,
                          children: e.jsx(d, {
                            value: l.buyer.tradeName,
                            onChange: (t) =>
                              i("buyer.tradeName", t.target.value),
                            placeholder: "Customer Business Name",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Legal Name",
                          children: e.jsx(d, {
                            value: l.buyer.legalName,
                            onChange: (t) =>
                              i("buyer.legalName", t.target.value),
                            placeholder: "Full Legal Name",
                          }),
                        }),
                        e.jsx(o, {
                          label: "GSTIN",
                          hint: "Required for B2B invoices",
                          error: z.buyer,
                          children: e.jsx(d, {
                            value: l.buyer.gstin,
                            onChange: (t) =>
                              W("buyer", t.target.value.toUpperCase()),
                            placeholder: "27XXXXX0000X1ZX",
                            maxLength: 15,
                            className: `font-mono tracking-wider ${z.buyer ? "border-zinc-500" : ""}`,
                          }),
                        }),
                        e.jsx(o, {
                          label: "PAN",
                          children: e.jsx(d, {
                            value: l.buyer.pan,
                            onChange: (t) =>
                              i("buyer.pan", t.target.value.toUpperCase()),
                            placeholder: "XXXXX0000X",
                            maxLength: 10,
                            className: "font-mono",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Billing Address" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Address Line 1",
                          required: !0,
                          children: e.jsx(d, {
                            value: l.buyer.address1,
                            onChange: (t) =>
                              i("buyer.address1", t.target.value),
                            placeholder: "Building / Street",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Address Line 2",
                          children: e.jsx(d, {
                            value: l.buyer.address2,
                            onChange: (t) =>
                              i("buyer.address2", t.target.value),
                            placeholder: "Area / Locality",
                          }),
                        }),
                        e.jsx(o, {
                          label: "City",
                          required: !0,
                          children: e.jsx(d, {
                            value: l.buyer.city,
                            onChange: (t) => i("buyer.city", t.target.value),
                            placeholder: "City",
                          }),
                        }),
                        e.jsx(o, {
                          label: "State",
                          required: !0,
                          children: e.jsxs(C, {
                            value: l.buyer.state,
                            onChange: (t) => i("buyer.state", t.target.value),
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "Select State",
                              }),
                              P.map((t) =>
                                e.jsxs(
                                  "option",
                                  {
                                    value: t.name,
                                    children: [t.code, " — ", t.name],
                                  },
                                  t.code,
                                ),
                              ),
                            ],
                          }),
                        }),
                        e.jsx(o, {
                          label: "PIN Code",
                          children: e.jsx(d, {
                            value: l.buyer.pincode,
                            onChange: (t) => i("buyer.pincode", t.target.value),
                            placeholder: "400001",
                            maxLength: 6,
                          }),
                        }),
                        e.jsx(o, {
                          label: "Phone",
                          children: e.jsx(d, {
                            value: l.buyer.phone,
                            onChange: (t) => i("buyer.phone", t.target.value),
                            placeholder: "+91 98765 43210",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Email",
                          children: e.jsx(d, {
                            value: l.buyer.email,
                            type: "email",
                            onChange: (t) => i("buyer.email", t.target.value),
                            placeholder: "customer@email.com",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Purchase Order (Optional)" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "P.O. Number",
                          children: e.jsx(d, {
                            value: l.buyer.poNumber,
                            onChange: (t) =>
                              i("buyer.poNumber", t.target.value),
                            placeholder: "PO-2025-001",
                          }),
                        }),
                        e.jsx(o, {
                          label: "P.O. Date",
                          children: e.jsx(d, {
                            type: "date",
                            value: l.buyer.poDate,
                            onChange: (t) => i("buyer.poDate", t.target.value),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              x === "invoice" &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-5",
                  children: [
                    e.jsx(N, { label: "Invoice Configuration" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Invoice Type",
                          required: !0,
                          children: e.jsx(C, {
                            value: l.invoiceType,
                            onChange: (t) => i("invoiceType", t.target.value),
                            children: le.map((t) =>
                              e.jsx(
                                "option",
                                { value: t.value, children: t.label },
                                t.value,
                              ),
                            ),
                          }),
                        }),
                        e.jsx(o, {
                          label: "Supply Type",
                          children: e.jsx(C, {
                            value: l.supplyType,
                            onChange: (t) => i("supplyType", t.target.value),
                            children: de.map((t) =>
                              e.jsx(
                                "option",
                                { value: t.value, children: t.label },
                                t.value,
                              ),
                            ),
                          }),
                        }),
                        e.jsx(o, {
                          label: "Invoice Number",
                          required: !0,
                          hint: "Max 16 characters as per CGST Rule 46",
                          children: e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(d, {
                                value: l.invoiceNumber,
                                onChange: (t) =>
                                  i("invoiceNumber", t.target.value),
                                placeholder: "INV/25-26/0001",
                                maxLength: 16,
                                className: "flex-1 font-mono",
                              }),
                              e.jsx("button", {
                                onClick: () => i("invoiceNumber", ae()),
                                className:
                                  "px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-all",
                                children: "Auto",
                              }),
                            ],
                          }),
                        }),
                        e.jsx(o, {
                          label: "Invoice Date",
                          required: !0,
                          children: e.jsx(d, {
                            type: "date",
                            value: l.invoiceDate,
                            onChange: (t) => i("invoiceDate", t.target.value),
                          }),
                        }),
                        e.jsx(o, {
                          label: "Payment Due Date",
                          children: e.jsx(d, {
                            type: "date",
                            value: l.dueDate,
                            onChange: (t) => i("dueDate", t.target.value),
                          }),
                        }),
                        e.jsx(o, {
                          label: "Place of Supply",
                          required: !0,
                          hint: "State where goods/services are consumed",
                          children: e.jsxs(C, {
                            value: l.placeOfSupply,
                            onChange: (t) => i("placeOfSupply", t.target.value),
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "Select Place of Supply",
                              }),
                              P.map((t) =>
                                e.jsxs(
                                  "option",
                                  {
                                    value: t.name,
                                    children: [t.code, " — ", t.name],
                                  },
                                  t.code,
                                ),
                              ),
                            ],
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "bg-zinc-900 border border-zinc-800 rounded-xl p-4",
                      children: e.jsx(K, {
                        label: "Reverse Charge Applicable",
                        sublabel:
                          "Section 9(3)/9(4) CGST Act — buyer is liable to pay GST directly",
                        checked: l.reverseCharge,
                        onChange: () => i("reverseCharge", !l.reverseCharge),
                      }),
                    }),
                    e.jsx(N, { label: "Display Options" }),
                    e.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: e.jsx(o, {
                        label: "Signature Block Label",
                        children: e.jsx(d, {
                          value: l.signatureLabel,
                          onChange: (t) => i("signatureLabel", t.target.value),
                          placeholder: "Authorized Signatory",
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col gap-3 pt-1",
                      children: [
                        e.jsx(K, {
                          label: "Show Signature Block",
                          checked: l.showSignature,
                          onChange: () => i("showSignature", !l.showSignature),
                        }),
                        e.jsx(K, {
                          label: "Round Off Grand Total",
                          sublabel:
                            "Rounds to nearest rupee and shows the adjustment as a line item",
                          checked: l.roundOff,
                          onChange: () => i("roundOff", !l.roundOff),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Notes & Terms" }),
                    e.jsx(o, {
                      label: "Notes (shown on invoice)",
                      children: e.jsx(J, {
                        value: l.notes,
                        onChange: (t) => i("notes", t.target.value),
                        rows: 3,
                        placeholder: "Thank you for your business!",
                      }),
                    }),
                    e.jsx(o, {
                      label: "Terms & Conditions",
                      children: e.jsx(J, {
                        value: l.termsAndConditions,
                        onChange: (t) =>
                          i("termsAndConditions", t.target.value),
                        rows: 6,
                        placeholder: "1. Payment due in 30 days...",
                      }),
                    }),
                  ],
                }),
              x === "items" &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-sm font-black text-zinc-200",
                              children: "Line Items",
                            }),
                            e.jsx("div", {
                              className: "text-[10px] text-zinc-700 mt-0.5",
                              children:
                                "HSN codes are mandatory as per GST Act, 2017",
                            }),
                          ],
                        }),
                        e.jsx("button", {
                          onClick: O,
                          className:
                            "px-4 py-2 bg-white hover:bg-zinc-100 text-black text-xs font-black rounded-lg transition-all",
                          children: "+ Add Item",
                        }),
                      ],
                    }),
                    l.lineItems.map((t, n) => {
                      const u = c.items[n];
                      return e.jsxs(
                        "div",
                        {
                          className:
                            "border border-zinc-800 rounded-xl overflow-hidden",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "text-[9px] font-black text-zinc-600 uppercase tracking-[2px]",
                                  children: [
                                    "Item ",
                                    String(n + 1).padStart(2, "0"),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-1.5",
                                  children: [
                                    e.jsx("button", {
                                      onClick: () => $(t.id),
                                      className:
                                        "px-2.5 py-1 text-[10px] font-semibold text-zinc-600 hover:text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded transition-all",
                                      children: "Duplicate",
                                    }),
                                    l.lineItems.length > 1 &&
                                      e.jsx("button", {
                                        onClick: () => F(t.id),
                                        className:
                                          "px-2.5 py-1 text-[10px] font-semibold text-zinc-700 hover:text-zinc-400 bg-zinc-800 hover:bg-zinc-700 rounded transition-all",
                                        children: "Remove",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "p-4 space-y-3 bg-zinc-950",
                              children: [
                                e.jsx(o, {
                                  label: "Description of Goods / Services",
                                  required: !0,
                                  children: e.jsx(J, {
                                    value: t.description,
                                    onChange: (r) =>
                                      j(t.id, "description", r.target.value),
                                    placeholder:
                                      "Full description of goods or service…",
                                    rows: 2,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-2 sm:grid-cols-3 gap-3",
                                  children: [
                                    e.jsx(o, {
                                      label: t.isService
                                        ? "SAC Code"
                                        : "HSN Code",
                                      hint: "Required for turnover > ₹1.5 Cr",
                                      children: e.jsx(d, {
                                        value: t.hsnSac,
                                        onChange: (r) =>
                                          j(t.id, "hsnSac", r.target.value),
                                        placeholder: t.isService
                                          ? "998313"
                                          : "8471",
                                        maxLength: 8,
                                        className: "font-mono",
                                      }),
                                    }),
                                    e.jsx(o, {
                                      label: "Unit",
                                      children: e.jsx(C, {
                                        value: t.unit,
                                        onChange: (r) =>
                                          j(t.id, "unit", r.target.value),
                                        children: ce.map((r) =>
                                          e.jsx(
                                            "option",
                                            { value: r, children: r },
                                            r,
                                          ),
                                        ),
                                      }),
                                    }),
                                    e.jsx(o, {
                                      label: "Quantity",
                                      required: !0,
                                      children: e.jsx(d, {
                                        type: "number",
                                        min: "0",
                                        step: "any",
                                        value: t.quantity,
                                        onChange: (r) =>
                                          j(t.id, "quantity", r.target.value),
                                      }),
                                    }),
                                    e.jsx(o, {
                                      label: "Rate per Unit (₹)",
                                      required: !0,
                                      children: e.jsx(d, {
                                        type: "number",
                                        min: "0",
                                        step: "any",
                                        value: t.rate,
                                        onChange: (r) =>
                                          j(t.id, "rate", r.target.value),
                                        placeholder: "0.00",
                                      }),
                                    }),
                                    e.jsx(o, {
                                      label: "Discount",
                                      children: e.jsxs("div", {
                                        className: "flex gap-1.5",
                                        children: [
                                          e.jsx(d, {
                                            type: "number",
                                            min: "0",
                                            step: "any",
                                            value: t.discount,
                                            onChange: (r) =>
                                              j(
                                                t.id,
                                                "discount",
                                                r.target.value,
                                              ),
                                            placeholder: "0",
                                            className: "flex-1 min-w-0",
                                          }),
                                          e.jsxs(C, {
                                            value: t.discountType,
                                            onChange: (r) =>
                                              j(
                                                t.id,
                                                "discountType",
                                                r.target.value,
                                              ),
                                            className: "w-14 px-1.5 text-xs",
                                            children: [
                                              e.jsx("option", {
                                                value: "percent",
                                                children: "%",
                                              }),
                                              e.jsx("option", {
                                                value: "flat",
                                                children: "₹",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx(o, {
                                      label: "GST Rate (%)",
                                      children: e.jsx(C, {
                                        value: t.gstRate,
                                        onChange: (r) =>
                                          j(
                                            t.id,
                                            "gstRate",
                                            parseFloat(r.target.value),
                                          ),
                                        disabled:
                                          l.invoiceType === "BILL_OF_SUPPLY",
                                        children: Q.map((r) =>
                                          e.jsxs(
                                            "option",
                                            { value: r, children: [r, "%"] },
                                            r,
                                          ),
                                        ),
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsxs("label", {
                                  className:
                                    "flex items-center gap-2 cursor-pointer",
                                  onClick: () =>
                                    j(t.id, "isService", !t.isService),
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-4 h-4 rounded border-2 border-zinc-700 flex items-center justify-center transition-all",
                                      style: {
                                        background: t.isService
                                          ? "#fff"
                                          : "transparent",
                                        borderColor: t.isService
                                          ? "#fff"
                                          : void 0,
                                      },
                                      children:
                                        t.isService &&
                                        e.jsx("svg", {
                                          className: "w-2.5 h-2.5 text-black",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: 3,
                                          children: e.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7",
                                          }),
                                        }),
                                    }),
                                    e.jsx("span", {
                                      className: "text-[11px] text-zinc-500",
                                      children:
                                        "Service item (SAC code applies)",
                                    }),
                                  ],
                                }),
                                u &&
                                  e.jsx("div", {
                                    className:
                                      "grid grid-cols-3 gap-2 pt-3 border-t border-zinc-800",
                                    children: [
                                      { l: "Taxable", v: u.taxable },
                                      { l: "Tax", v: u.totalTax },
                                      { l: "Line Total", v: u.lineTotal },
                                    ].map(({ l: r, v: b }) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 text-center",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "text-[8px] text-zinc-600 uppercase tracking-[1.5px] font-bold",
                                              children: r,
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "text-xs font-black text-zinc-200 mt-1",
                                              children: w(b),
                                            }),
                                          ],
                                        },
                                        r,
                                      ),
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
                    e.jsx("button", {
                      onClick: O,
                      className:
                        "w-full py-3.5 border-2 border-dashed border-zinc-800 hover:border-zinc-600 text-zinc-700 hover:text-zinc-400 rounded-xl text-sm font-semibold transition-all",
                      children: "+ Add Another Item",
                    }),
                  ],
                }),
              x === "other" &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 space-y-5",
                  children: [
                    e.jsx(N, { label: "Additional Charges" }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsx(o, {
                          label: "Shipping Charges (₹)",
                          children: e.jsx(d, {
                            type: "number",
                            min: "0",
                            step: "any",
                            value: l.shipping,
                            onChange: (t) => i("shipping", t.target.value),
                            placeholder: "0.00",
                          }),
                        }),
                        e.jsx(o, {
                          label: "GST on Shipping (%)",
                          children: e.jsx(C, {
                            value: l.shippingTaxRate,
                            onChange: (t) =>
                              i("shippingTaxRate", t.target.value),
                            children: Q.map((t) =>
                              e.jsxs(
                                "option",
                                { value: t, children: [t, "%"] },
                                t,
                              ),
                            ),
                          }),
                        }),
                        e.jsx(o, {
                          label: "Other Charges (₹)",
                          children: e.jsx(d, {
                            type: "number",
                            min: "0",
                            step: "any",
                            value: l.otherCharges,
                            onChange: (t) => i("otherCharges", t.target.value),
                            placeholder: "0.00",
                          }),
                        }),
                        e.jsx(o, {
                          label: "Other Charges Label",
                          children: e.jsx(d, {
                            value: l.otherChargesDesc,
                            onChange: (t) =>
                              i("otherChargesDesc", t.target.value),
                            placeholder: "Packaging, Handling…",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(N, { label: "Invoice Summary" }),
                    e.jsxs("div", {
                      className:
                        "border border-zinc-800 rounded-xl overflow-hidden",
                      children: [
                        [
                          { l: "Subtotal (Taxable Value)", v: c.subTotal },
                          c.totalDiscount > 0
                            ? {
                                l: "Total Discount",
                                v: -c.totalDiscount,
                                dim: !0,
                              }
                            : null,
                          !c.isBOS && c.inter
                            ? { l: "IGST", v: c.totalIGST }
                            : null,
                          !c.isBOS && !c.inter
                            ? { l: "CGST", v: c.totalCGST }
                            : null,
                          !c.isBOS && !c.inter
                            ? { l: "SGST / UTGST", v: c.totalSGST }
                            : null,
                          c.ship > 0
                            ? { l: "Shipping Charges", v: c.ship }
                            : null,
                          c.shipTax > 0
                            ? { l: "GST on Shipping", v: c.shipTax }
                            : null,
                          c.other > 0
                            ? {
                                l: l.otherChargesDesc || "Other Charges",
                                v: c.other,
                              }
                            : null,
                          l.roundOff && c.roundOff !== 0
                            ? { l: "Round Off", v: c.roundOff, dim: !0 }
                            : null,
                        ]
                          .filter(Boolean)
                          .map((t, n) =>
                            e.jsxs(
                              "div",
                              {
                                className: `flex justify-between items-center px-4 py-3 border-b border-zinc-800 ${t.dim ? "opacity-50" : ""}`,
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm text-zinc-500",
                                    children: t.l,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-sm font-bold text-zinc-200",
                                    children:
                                      t.v >= 0
                                        ? w(t.v)
                                        : `-${w(Math.abs(t.v))}`,
                                  }),
                                ],
                              },
                              n,
                            ),
                          ),
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-center px-4 py-4 bg-zinc-900",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-sm font-black text-white uppercase tracking-widest",
                              children: "Grand Total",
                            }),
                            e.jsx("span", {
                              className: "text-2xl font-black text-white",
                              children: w(c.grand),
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className:
                            "px-4 py-3 bg-zinc-950 border-t border-zinc-800",
                          children: e.jsx("div", {
                            className:
                              "text-[10px] text-zinc-600 italic leading-relaxed",
                            children: se(Math.round(c.grand)),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[10px] font-black text-zinc-400 uppercase tracking-widest",
                        children: "GST Compliance",
                      }),
                      e.jsxs("span", {
                        className: `text-[10px] font-black px-2.5 py-0.5 rounded-full ${_ === L.length ? "bg-white text-black" : "bg-zinc-800 text-zinc-400"}`,
                        children: [_, "/", L.length],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "h-0.5 bg-zinc-800 rounded-full mb-4 overflow-hidden",
                    children: e.jsx("div", {
                      className:
                        "h-full bg-white rounded-full transition-all duration-500",
                      style: { width: `${(_ / L.length) * 100}%` },
                    }),
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children: L.map(({ label: t, ok: n }) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2.5",
                          children: [
                            e.jsx("div", {
                              className: `w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center ${n ? "bg-white" : "border border-zinc-700"}`,
                              children:
                                n &&
                                e.jsx("svg", {
                                  className: "w-2 h-2 text-black",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  strokeWidth: 3,
                                  children: e.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M5 13l4 4L19 7",
                                  }),
                                }),
                            }),
                            e.jsx("span", {
                              className: `text-[10px] leading-tight ${n ? "text-zinc-500" : "text-zinc-700"}`,
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
                className: "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                children: [
                  e.jsx("div", {
                    className:
                      "text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3",
                    children: "Quick Summary",
                  }),
                  e.jsxs("div", {
                    className: "space-y-2.5",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-zinc-600",
                            children: "Subtotal",
                          }),
                          e.jsx("span", {
                            className: "text-xs font-bold text-zinc-400",
                            children: w(c.subTotal),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          e.jsx("span", {
                            className: "text-xs text-zinc-600",
                            children: "Total Tax",
                          }),
                          e.jsx("span", {
                            className: "text-xs font-bold text-zinc-400",
                            children: w(c.totalTax),
                          }),
                        ],
                      }),
                      c.totalDiscount > 0 &&
                        e.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            e.jsx("span", {
                              className: "text-xs text-zinc-600",
                              children: "Discount",
                            }),
                            e.jsxs("span", {
                              className: "text-xs font-bold text-zinc-500",
                              children: ["-", w(c.totalDiscount)],
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className:
                          "flex justify-between pt-2.5 border-t border-zinc-800",
                        children: [
                          e.jsx("span", {
                            className: "text-sm font-black text-white",
                            children: "Grand Total",
                          }),
                          e.jsx("span", {
                            className: "text-sm font-black text-white",
                            children: w(c.grand),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2",
                children: [
                  e.jsx("div", {
                    className:
                      "text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3",
                    children: "Actions",
                  }),
                  e.jsx("button", {
                    onClick: () => h(!0),
                    className:
                      "w-full py-3 bg-white hover:bg-zinc-50 text-black text-sm font-black rounded-lg transition-all",
                    children: "Preview Invoice",
                  }),
                  e.jsx("button", {
                    onClick: M,
                    disabled: a,
                    className:
                      "w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 border border-zinc-700 text-white text-xs font-bold rounded-lg transition-all",
                    children: a ? "Generating PDF…" : "Download PDF",
                  }),
                  e.jsx("button", {
                    onClick: () => window.print(),
                    className:
                      "w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-500 hover:text-zinc-300 text-xs font-semibold rounded-lg transition-all",
                    children: "Print",
                  }),
                  e.jsx("button", {
                    onClick: E,
                    className:
                      "w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-500 hover:text-zinc-300 text-xs font-semibold rounded-lg transition-all",
                    children: "Save as Template",
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      confirm("Reset all data? This cannot be undone.") &&
                        p(Y());
                    },
                    className:
                      "w-full py-2 text-zinc-700 hover:text-zinc-500 text-[11px] font-semibold transition-all",
                    children: "Reset Invoice",
                  }),
                ],
              }),
              T.length > 0 &&
                e.jsxs("div", {
                  className:
                    "bg-zinc-950 border border-zinc-800 rounded-xl p-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3",
                      children: "Saved Templates",
                    }),
                    e.jsx("div", {
                      className: "space-y-2",
                      children: T.map((t) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-xs text-zinc-300 truncate flex-1",
                                children: t.name,
                              }),
                              e.jsxs("div", {
                                className: "flex gap-2 flex-shrink-0",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => q(t),
                                    className:
                                      "text-[10px] text-zinc-500 hover:text-zinc-200 font-bold transition-all",
                                    children: "Load",
                                  }),
                                  e.jsx("span", {
                                    className: "text-zinc-700 text-[10px]",
                                    children: "·",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => re(t.id),
                                    className:
                                      "text-[10px] text-zinc-700 hover:text-zinc-500 font-bold transition-all",
                                    children: "Del",
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
            ],
          }),
        ],
      }),
      f &&
        e.jsxs("div", {
          className: "fixed inset-0 z-[700] flex flex-col bg-black/95",
          children: [
            e.jsxs("div", {
              className:
                "flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-zinc-950 border-b border-zinc-800",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "w-2 h-2 rounded-full bg-white animate-pulse",
                    }),
                    e.jsx("span", {
                      className: "text-sm font-black text-white",
                      children: "Invoice Preview",
                    }),
                    e.jsx("span", {
                      className:
                        "hidden sm:inline-block px-2 py-0.5 bg-zinc-800 rounded text-[10px] font-mono text-zinc-500",
                      children: l.invoiceNumber,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx("button", {
                      onClick: M,
                      disabled: a,
                      className:
                        "px-4 py-2 bg-white hover:bg-zinc-100 disabled:opacity-50 text-black text-xs sm:text-sm font-black rounded-lg transition-all",
                      children: a ? "Generating…" : "Download PDF",
                    }),
                    e.jsx("button", {
                      onClick: () => h(!1),
                      className:
                        "px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-xs sm:text-sm font-semibold rounded-lg transition-all",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex-1 overflow-auto bg-zinc-900 p-4 sm:p-8 lg:p-12",
              children: e.jsx("div", {
                className: "shadow-2xl mx-auto",
                style: { maxWidth: "960px" },
                children: e.jsx(te, { inv: l, taxes: c, docRef: A }),
              }),
            }),
          ],
        }),
      !f &&
        e.jsx("div", {
          "aria-hidden": "true",
          style: {
            position: "fixed",
            left: "-9999px",
            top: 0,
            opacity: 0,
            pointerEvents: "none",
            zIndex: -1,
            width: "960px",
          },
          children: e.jsx(te, { inv: l, taxes: c, docRef: R }),
        }),
    ],
  });
}
export { me as default };
