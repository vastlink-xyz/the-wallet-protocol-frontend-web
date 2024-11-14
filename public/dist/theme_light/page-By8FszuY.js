import { j as e } from "./vendor-radix-CXAw23nV.js";
import { r } from "./vendor-react-U4DfHahV.js";
import { c as $, I as q, B as u, L as K, f as j, g as b, h as M } from "./main-OpUhS-4m.js";
import { C as v } from "./card-CTwqaMqY.js";
import { L as O } from "./label-dPe_wutl.js";
import { T as te, a as se, b as H, c as y, d as oe, e as U } from "./table-CwZOsDo_.js";
import { B as c } from "./vendor-utils-CQorlrD-.js";
import { S as le } from "./index-CY1UVjU9.js";
import { R as me, E as ue } from "./vendor-ui-utils-DB1608yX.js";
const re = ({ steps: N, currentStep: l }) => /* @__PURE__ */ e.jsx("div", { className: "w-full mb-8", children: /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: N.map((p, o) => /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center flex-1", children: [
  /* @__PURE__ */ e.jsxs("div", { className: "relative w-full", children: [
    o > 0 && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: $(
          "absolute top-1/2 right-1/2 h-0.5 w-[calc(100%-0.75rem)] -translate-x-[0.375rem] -translate-y-1/2",
          o <= l ? "bg-primary" : "bg-primary/20"
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: $(
          "w-3 h-3 rounded-full relative mx-auto",
          o < l ? "bg-primary" : o === l ? "bg-background border-2 border-primary" : "bg-primary/20"
        )
      }
    )
  ] }),
  /* @__PURE__ */ e.jsx(
    "span",
    {
      className: $(
        "mt-2 text-xs font-medium text-center",
        o <= l ? "text-primary" : "text-primary/40"
      ),
      children: p
    }
  )
] }, p)) }) }), ce = (N, l, p) => {
  const o = N.replace(/^data:application\/pdf;base64,/, ""), g = atob(o), C = new Array(g.length);
  for (let w = 0; w < g.length; w++)
    C[w] = g.charCodeAt(w);
  const A = new Uint8Array(C), B = new Blob([A], { type: p }), k = URL.createObjectURL(B), i = document.createElement("a");
  i.href = k, i.download = l || "document.pdf", document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(k);
}, he = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CV", name: "Cape Verde" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, the Democratic Republic of the" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Cote D'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands (Malvinas)" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and Mcdonald Islands" },
  { code: "VA", name: "Holy See (Vatican City State)" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran, Islamic Republic of" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea, Democratic People's Republic of" },
  { code: "KR", name: "Korea, Republic of" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libyan Arab Jamahiriya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia, Federated States of" },
  { code: "MD", name: "Moldova, Republic of" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestinian Territory, Occupied" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Reunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "SH", name: "Saint Helena" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SZ", name: "Swaziland" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan, Province of China" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania, United Republic of" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands, British" },
  { code: "VI", name: "Virgin Islands, U.s." },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "EH", name: "Western Sahara" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
  // United States
  { code: "US-AL", name: "United States - Alabama" },
  { code: "US-AK", name: "United States - Alaska" },
  { code: "US-AZ", name: "United States - Arizona" },
  { code: "US-AR", name: "United States - Arkansas" },
  { code: "US-CA", name: "United States - California" },
  { code: "US-CO", name: "United States - Colorado" },
  { code: "US-CT", name: "United States - Connecticut" },
  { code: "US-DE", name: "United States - Delaware" },
  { code: "US-FL", name: "United States - Florida" },
  { code: "US-GA", name: "United States - Georgia" },
  { code: "US-HI", name: "United States - Hawaii" },
  { code: "US-ID", name: "United States - Idaho" },
  { code: "US-IL", name: "United States - Illinois" },
  { code: "US-IN", name: "United States - Indiana" },
  { code: "US-IA", name: "United States - Iowa" },
  { code: "US-KS", name: "United States - Kansas" },
  { code: "US-KY", name: "United States - Kentucky" },
  { code: "US-LA", name: "United States - Louisiana" },
  { code: "US-ME", name: "United States - Maine" },
  { code: "US-MD", name: "United States - Maryland" },
  { code: "US-MA", name: "United States - Massachusetts" },
  { code: "US-MI", name: "United States - Michigan" },
  { code: "US-MN", name: "United States - Minnesota" },
  { code: "US-MS", name: "United States - Mississippi" },
  { code: "US-MO", name: "United States - Missouri" },
  { code: "US-MT", name: "United States - Montana" },
  { code: "US-NE", name: "United States - Nebraska" },
  { code: "US-NV", name: "United States - Nevada" },
  { code: "US-NH", name: "United States - New Hampshire" },
  { code: "US-NJ", name: "United States - New Jersey" },
  { code: "US-NM", name: "United States - New Mexico" },
  { code: "US-NY", name: "United States - New York" },
  { code: "US-NC", name: "United States - North Carolina" },
  { code: "US-ND", name: "United States - North Dakota" },
  { code: "US-OH", name: "United States - Ohio" },
  { code: "US-OK", name: "United States - Oklahoma" },
  { code: "US-OR", name: "United States - Oregon" },
  { code: "US-PA", name: "United States - Pennsylvania" },
  { code: "US-RI", name: "United States - Rhode Island" },
  { code: "US-SC", name: "United States - South Carolina" },
  { code: "US-SD", name: "United States - South Dakota" },
  { code: "US-TN", name: "United States - Tennessee" },
  { code: "US-TX", name: "United States - Texas" },
  { code: "US-UT", name: "United States - Utah" },
  { code: "US-VT", name: "United States - Vermont" },
  { code: "US-VA", name: "United States - Virginia" },
  { code: "US-WA", name: "United States - Washington" },
  { code: "US-WV", name: "United States - West Virginia" },
  { code: "US-WI", name: "United States - Wisconsin" },
  { code: "US-WY", name: "United States - Wyoming" },
  // Canada
  { code: "CA-ALL", name: "Canada(All)" },
  { code: "CA-AB", name: "Canada - Alberta" },
  { code: "CA-BC", name: "Canada - British Columbia" },
  { code: "CA-MB", name: "Canada - Manitoba" },
  { code: "CA-NB", name: "Canada - New Brunswick" },
  { code: "CA-NL", name: "Canada - Newfoundland and Labrador" },
  { code: "CA-NS", name: "Canada - Nova Scotia" },
  { code: "CA-ON", name: "Canada - Ontario" },
  { code: "CA-PE", name: "Canada - Prince Edward Island" },
  { code: "CA-QC", name: "Canada - Quebec" },
  { code: "CA-SK", name: "Canada - Saskatchewan" },
  { code: "CA-NT", name: "Canada - Northwest Territories" },
  { code: "CA-NU", name: "Canada - Nunavut" },
  { code: "CA-YT", name: "Canada - Yukon" }
];
function pe({
  resetFlow: N
}) {
  const [l, p] = r.useState(!1), [o, g] = r.useState(1), [C, A] = r.useState(""), [B, k] = r.useState([]), [i, w] = r.useState(null), [V, Y] = r.useState(null), [S, R] = r.useState({
    asicExtract: "idle",
    uboReport: "idle"
  }), [I, W] = r.useState({
    asicExtract: null,
    uboReport: null
  }), P = (s) => {
    A(s.target.value);
  }, T = async () => {
    try {
      p(!0);
      const t = (await j.post("/marketplace/product/frankieone/get-token")).data, { data: m } = await j.post("/marketplace/product/frankieone/business-lookup", {
        search: C,
        token: t
      });
      b("data", m), k(m), g(2);
    } catch (s) {
      const t = M(s);
      c.error(t.message);
    } finally {
      p(!1);
    }
  }, Z = (s) => {
    b("business", s), w(s), g(3);
  }, E = async (s, t) => {
    var m, f;
    try {
      const x = await j.get(`/marketplace/product/frankieone/retrieve-document?documentId=${s}`);
      b("response data", x.data);
      const a = (f = (m = x.data) == null ? void 0 : m.document) == null ? void 0 : f.docScan;
      if (a && a.length > 0) {
        const n = a[a.length - 1];
        W((d) => ({ ...d, [t]: n }));
      }
      return;
    } catch (x) {
      const a = M(x);
      c.error(`Failed to fetch ${t} data: ${a.message}`);
    }
  }, D = async (s) => {
    if (i) {
      R((t) => ({ ...t, [s]: "loading" }));
      try {
        let t = "/marketplace/product/frankieone/business-ownership-query";
        const m = {
          abn: i.abn,
          acn: i.acn
        };
        s === "asicExtract" ? t = "/marketplace/product/frankieone/query-asic-report" : s === "uboReport" && (t = "/marketplace/product/frankieone/query-ubo-report");
        const f = await j.post(t, m);
        b("response", f);
        const { data: x } = f;
        b("data", x), Y(x.entityId), c.info(`${s} report generation initiated. This may take a few minutes.`), await z(x.requestId, s);
      } catch (t) {
        const m = M(t);
        c.error(m.message), R((f) => ({ ...f, [s]: "error" }));
      }
    }
  }, z = async (s, t) => {
    let f = 0;
    const x = async () => {
      try {
        const a = await j.get(`/marketplace/product/frankieone/retrieve-response?requestId=${s}`);
        if (b("response", a.data), a.status === 202 || a.data.status === "pending")
          f < 60 ? (f++, setTimeout(x, 5e3)) : (R((n) => ({ ...n, [t]: "error" })), c.error(`Timeout while generating ${t} report`));
        else if (a.data.status === "success") {
          R((d) => ({ ...d, [t]: "complete" }));
          const n = a.data.data.payload;
          n.reportResult && n.reportResult.documentId ? await E(n.reportResult.documentId, t) : c.error(`No document ID found for ${t} report`), c.success(`${t} report is ready`);
        } else
          R((n) => ({ ...n, [t]: "error" })), c.error(`Failed to generate ${t} report: ${a.data.status}`);
      } catch (a) {
        const n = M(a);
        c.error(n.message), R((d) => ({ ...d, [t]: "error" }));
      }
    };
    await x();
  }, F = (s) => {
    const t = I[s];
    if (!t) {
      c.error("Report data is not available");
      return;
    }
    const m = t;
    ce(m.scanData, `${s}-${i == null ? void 0 : i.name}.pdf`, m.scanMIME);
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(re, { steps: ["Search Business", "Select Business", "Generate Reports"], currentStep: o }),
    o === 1 && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search for Business" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mb-4", children: "Enter the business name, ABN, or ACN to search for the company you want to verify." }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(O, { htmlFor: "search", className: "text-sm font-medium", children: "Enter Business Name or ABN / ACN" }),
        /* @__PURE__ */ e.jsx(q, { id: "search", name: "search", placeholder: "Business name or ABN / ACN", onChange: P }),
        /* @__PURE__ */ e.jsx(u, { onClick: T, disabled: l, children: l ? /* @__PURE__ */ e.jsx(K, {}) : "Search" })
      ] })
    ] }),
    o === 2 && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Search Results" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mb-4", children: "Select the correct business from the search results to proceed with report generation." }),
      /* @__PURE__ */ e.jsxs(te, { children: [
        /* @__PURE__ */ e.jsx(se, { children: /* @__PURE__ */ e.jsxs(H, { children: [
          /* @__PURE__ */ e.jsx(y, { children: "Name" }),
          /* @__PURE__ */ e.jsx(y, { children: "ABN" }),
          /* @__PURE__ */ e.jsx(y, { children: "ACN" }),
          /* @__PURE__ */ e.jsx(y, { children: "State" }),
          /* @__PURE__ */ e.jsx(y, { children: "Action" })
        ] }) }),
        /* @__PURE__ */ e.jsx(oe, { children: B.map((s, t) => /* @__PURE__ */ e.jsxs(H, { children: [
          /* @__PURE__ */ e.jsx(U, { children: s.name }),
          /* @__PURE__ */ e.jsx(U, { children: s.abn }),
          /* @__PURE__ */ e.jsx(U, { children: s.acn || "N/A" }),
          /* @__PURE__ */ e.jsx(U, { children: s.state }),
          /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(u, { onClick: () => Z(s), children: "Select" }) })
        ] }, t)) })
      ] })
    ] }),
    o === 3 && i && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsxs("h2", { className: "text-2xl font-bold mb-4", children: [
        "Generate Reports for ",
        i.name
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-primary/80 mb-6 space-y-2", children: [
        /* @__PURE__ */ e.jsx("p", { children: "Choose which reports you'd like to generate for the selected business. You can generate one or both reports." }),
        /* @__PURE__ */ e.jsx("p", { children: "After generating the reports, download and review them carefully for your KYB process." })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "border rounded-lg p-4 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex-grow", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: "ASIC Extract with AML Screening" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mr-4", children: "This report includes a single level business ownership check and AML screening (PEP, sanctions, and adverse media check) on the organisation." })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col space-y-2", children: [
            S.asicExtract !== "complete" && /* @__PURE__ */ e.jsx(
              u,
              {
                onClick: () => D("asicExtract"),
                disabled: S.asicExtract === "loading",
                className: "w-40",
                children: S.asicExtract === "loading" ? "Generating..." : "Generate Report"
              }
            ),
            S.asicExtract === "complete" && I.asicExtract && /* @__PURE__ */ e.jsx(u, { onClick: () => F("asicExtract"), className: "w-40", children: "Download Report" })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "border rounded-lg p-4 flex justify-between items-center", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex-grow", children: [
            /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: "UBO Report" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mr-4", children: "This report will identify the ultimate owner(s) of this company and help you understand what role (direct or indirect) individuals play within simple or complex corporate structures" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col space-y-2", children: [
            S.uboReport !== "complete" && /* @__PURE__ */ e.jsx(
              u,
              {
                onClick: () => D("uboReport"),
                className: "w-40",
                disabled: S.uboReport === "loading",
                children: S.uboReport === "loading" ? "Generating..." : "Generate Report"
              }
            ),
            S.uboReport === "complete" && I.uboReport && /* @__PURE__ */ e.jsx(u, { onClick: () => F("uboReport"), className: "w-40", children: "Download Report" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ e.jsx(u, { onClick: N, children: "Search Another Business" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mt-2", children: "Reset and start a new business search" })
      ] })
    ] })
  ] });
}
const Se = he.map((N) => ({
  value: N.code,
  label: N.name
}));
function xe({
  resetFlow: N
}) {
  const [l, p] = r.useState(!1), [o, g] = r.useState(1), [C, A] = r.useState(""), [B, k] = r.useState([]), [i, w] = r.useState(null), [V, Y] = r.useState(null), [S, R] = r.useState(""), [I, W] = r.useState(""), [P, T] = r.useState([]), [Z, E] = r.useState("idle"), D = (a) => {
    A(a);
  }, z = async () => {
    if (!S && !I) {
      c.error("Please enter either a business name or registration number");
      return;
    }
    try {
      p(!0);
      const { data: a } = await j.post("/marketplace/product/frankieone/international-business-search", {
        country: C,
        organisationName: S || void 0,
        organisationNumber: I || void 0
      });
      b("data", a), k(a.Companies.CompanyDTO), g(2);
    } catch (a) {
      const n = M(a);
      c.error(n.message);
    } finally {
      p(!1);
    }
  }, F = (a) => {
    b("business", a), w(a), g(3), a && s(a);
  }, s = async (a) => {
    try {
      E("loading");
      const { data: n } = await j.post("/marketplace/product/frankieone/international-business-profile", {
        country: C,
        companyCode: a.Code,
        registrationAuthorityCode: a.RegistrationAuthorityCode
      });
      b("data", n);
      const d = n.entityId;
      Y(d);
      const h = await j.get(`/marketplace/product/frankieone/international-business-entity-list?entityId=${d}`);
      b("response", h), T(h.data.reports), E("idle");
    } catch (n) {
      const d = M(n);
      c.error(d.message), E("error");
    }
  }, t = (a, n) => {
    T((d) => {
      const h = [...d];
      return h[a] = { ...h[a], status: n }, h;
    });
  }, m = async (a, n) => {
    if (i)
      try {
        t(n, "loading");
        const d = await j.post("/marketplace/product/frankieone/international-business-entity-report", {
          entityId: V,
          reportCode: a.reportCode
        }), { data: h } = d;
        b("data", h), c.info("Report order initiated. This may take a few minutes."), await f(h.requestId, n);
      } catch (d) {
        const h = M(d);
        c.error(h.message), t(n, "error");
      }
  }, f = async (a, n) => {
    let h = 0;
    const Q = async () => {
      var X, _;
      try {
        const { data: L } = await j.post("/marketplace/product/frankieone/international-business-entity-report-status", {
          entityId: V,
          requestId: a
        });
        if (L.reportStatus !== "Completed")
          h < 60 ? (h++, setTimeout(Q, 1e4)) : (t(n, "error"), c.error("Timeout while generating report"));
        else if (L.reportStatus === "Completed") {
          const G = (_ = (X = (await j.post("/marketplace/product/frankieone/retrieve-document-scan-data-by-url", {
            documentUrl: L.reportUrl
          })).data) == null ? void 0 : X.document) == null ? void 0 : _.docScan;
          if (b("docScan", G), G && G.length > 0) {
            const J = G[G.length - 1], ae = J.scanMIME && J.scanType === "PDF";
            T((ie) => ie.map((ne, de) => de === n ? {
              ...ne,
              ordered: !0,
              doc: J,
              status: ae ? "complete" : "error"
            } : ne)), ae ? c.success("Report is ready") : c.error("Report is not a valid PDF");
          }
        }
      } catch (L) {
        const ee = M(L);
        c.error(ee.message), t(n, "error");
      }
    };
    await Q();
  }, x = (a) => {
    b("report", a);
    const n = a.doc;
    n && ce(n.scanData, `business-profile-${a.reportTitle}.pdf`, n.scanMIME || "");
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx(re, { steps: ["Search Business", "Select Business", "Generate Reports"], currentStep: o }),
    o === 1 && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search for Business" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mb-4", children: "Select a country and enter the business details to start your search. You can use either the business name or registration number, or both for a more precise search." }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(O, { htmlFor: "country", className: "text-sm font-medium", children: "Select Country / Region" }),
          /* @__PURE__ */ e.jsx(
            le,
            {
              options: Se,
              value: C,
              onValueChange: D,
              placeholder: "Select a country/region",
              emptyMessage: "No country found."
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 italic", children: "Please enter either a business name or registration number, or both for a more precise search." }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(O, { htmlFor: "businessName", className: "text-sm font-medium", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            q,
            {
              id: "businessName",
              value: S,
              onChange: (a) => R(a.target.value),
              placeholder: "Enter business name (optional if registration number is provided)"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(O, { htmlFor: "registrationNumber", className: "text-sm font-medium", children: "Registration Number" }),
          /* @__PURE__ */ e.jsx(
            q,
            {
              id: "registrationNumber",
              value: I,
              onChange: (a) => W(a.target.value),
              placeholder: "Enter registration number (optional if business name is provided)"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(
          u,
          {
            onClick: z,
            disabled: l || !C || !S && !I,
            children: l ? /* @__PURE__ */ e.jsx(K, {}) : "Search"
          }
        )
      ] })
    ] }),
    o === 2 && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Search Results" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mb-4", children: "Review the search results and select the correct business to proceed with report generation." }),
      /* @__PURE__ */ e.jsxs(te, { children: [
        /* @__PURE__ */ e.jsx(se, { children: /* @__PURE__ */ e.jsxs(H, { children: [
          /* @__PURE__ */ e.jsx(y, { children: "Name" }),
          /* @__PURE__ */ e.jsx(y, { children: "Code" }),
          /* @__PURE__ */ e.jsx(y, { children: "Company ID" }),
          /* @__PURE__ */ e.jsx(y, { children: "Legal Status" }),
          /* @__PURE__ */ e.jsx(y, { children: "Action" })
        ] }) }),
        /* @__PURE__ */ e.jsx(oe, { children: B.map((a, n) => /* @__PURE__ */ e.jsxs(H, { children: [
          /* @__PURE__ */ e.jsx(U, { children: a.Name }),
          /* @__PURE__ */ e.jsx(U, { children: a.Code }),
          /* @__PURE__ */ e.jsx(U, { children: a.CompanyID }),
          /* @__PURE__ */ e.jsx(U, { children: a.LegalStatus }),
          /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsx(u, { onClick: () => F(a), children: "Select" }) })
        ] }, n)) })
      ] })
    ] }),
    o === 3 && i && /* @__PURE__ */ e.jsxs(v, { className: "p-8", children: [
      /* @__PURE__ */ e.jsxs("h2", { className: "text-2xl font-bold mb-4", children: [
        "Available Reports for ",
        i.Name
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "text-sm text-primary/80 mb-6 space-y-2", children: [
        /* @__PURE__ */ e.jsx("p", { children: "Choose which reports you'd like to generate for the selected business. You can order one or multiple reports." }),
        /* @__PURE__ */ e.jsx("p", { children: "After ordering, the reports will be generated and available for download. Please review them carefully for your KYB process." })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: P.length === 0 ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center", children: Z === "loading" ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e.jsx(K, {}),
        /* @__PURE__ */ e.jsx("p", { children: "Loading available reports..." })
      ] }) : "No reports available" }) : P.map((a, n) => /* @__PURE__ */ e.jsxs("div", { className: "border rounded-lg p-4 flex justify-between items-center", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex-grow", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: a.reportTitle }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-sm text-primary/80 mr-4", children: [
            "Format: ",
            a.availableFormats,
            ", Provider: ",
            a.provider
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "flex flex-col space-y-2", children: a.ordered ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          a.status === "complete" && /* @__PURE__ */ e.jsx(u, { onClick: () => x(a), children: "Download Report" }),
          a.status === "error" && /* @__PURE__ */ e.jsx("p", { className: "text-red-500", children: "Error generating report" })
        ] }) : /* @__PURE__ */ e.jsx(
          u,
          {
            onClick: () => m(a, n),
            disabled: a.status === "loading",
            className: "w-40",
            children: a.status === "loading" ? /* @__PURE__ */ e.jsx(K, {}) : a.status === "error" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx(me, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ] }) : "Order Report"
          }
        ) })
      ] }, a.reportCode)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ e.jsx(u, { onClick: N, children: "Search Another Business" }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/80 mt-2", children: "Reset and start a new business search" })
      ] })
    ] })
  ] });
}
function be({
  showExternalLink: N = !0
}) {
  const [l, p] = r.useState(null), o = (B) => {
    p(B);
  }, g = () => {
    window.open(window.location.href, "_blank");
  }, C = () => /* @__PURE__ */ e.jsxs(v, { className: "p-8 relative", children: [
    N && /* @__PURE__ */ e.jsx(
      u,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2",
        onClick: g,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(ue, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Confirm Business Type" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-primary/60 mb-6", children: "Is your business registered in Australia?" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-x-4", children: [
      /* @__PURE__ */ e.jsx(u, { onClick: () => o(!0), children: "Yes, Australian Business" }),
      /* @__PURE__ */ e.jsx(u, { onClick: () => o(!1), children: "No, International Business" })
    ] })
  ] }), A = () => {
    p(null);
  };
  return l ? /* @__PURE__ */ e.jsx(pe, { resetFlow: A }) : l === !1 ? /* @__PURE__ */ e.jsx(xe, { resetFlow: A }) : C();
}
function Re() {
  return /* @__PURE__ */ e.jsx("div", { className: "bg-background", children: /* @__PURE__ */ e.jsx(be, { showExternalLink: !0 }) });
}
export {
  Re as default
};
