import { j as e } from "./vendor-radix-B8_5rGTC.js";
import { f as ne, r as t } from "./vendor-react-X5c0QESR.js";
import { I as s, B as x, L as U, i as j, l as C, h as R } from "./main-BVot_80u.js";
import { C as W, a as oe, b as de, c as ce, d as re } from "./card-fI06gMpa.js";
import { L as H } from "./label-fc6Up90H.js";
import { B as g } from "./vendor-utils-avI_LICu.js";
import { u as se } from "./useFlowData-B-P6DXjC.js";
import { i as te, E as le, m as me, n as ue } from "./vendor-ui-utils-5hin2QBi.js";
import { S as he } from "./index-BlCEweJj.js";
const xe = [
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
var z = /* @__PURE__ */ ((u) => (u.VERIFIED = "VERIFIED", u.UNVERIFIED = "UNVERIFIED", u))(z || {});
const ee = {
  registered_name: "",
  ABN: "",
  ACN: "",
  date_registered_with_asic: "",
  state_registered_with_asic: ""
};
function be() {
  const u = ne(), [b, p] = t.useState(1), [y, v] = t.useState(""), [A, B] = t.useState(!1), [l, h] = t.useState(!1), [o, I] = t.useState(null), [m, N] = t.useState(ee), [i, M] = t.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [d, K] = t.useState(null), { flowId: S, flowIndex: T, serviceUrl: Z, nextIndex: V } = se(), P = () => {
    p(b - 1);
  }, _ = (n) => {
    const c = n.target.value.replace(/\D/g, "");
    v(c);
  }, k = (n) => n.length === 11 || n.length === 9, Y = async () => {
    if (!k(y)) {
      g.error("Please enter a valid ABN (11 digits) or ACN (9 digits)");
      return;
    }
    try {
      B(!0);
      const c = (await j.post("/marketplace/product/frankieone/get-token")).data, { data: a } = await j.post("/marketplace/product/frankieone/business-lookup", {
        search: y,
        token: c
      });
      C("lookup business response data", a), a.length > 0 && I(a[0]);
    } catch (n) {
      const c = R(n);
      g.error(c.message);
    } finally {
      B(!1);
    }
  }, w = (n) => {
    const { name: c, value: a } = n.target;
    N((r) => ({ ...r, [c]: a }));
  }, F = (n) => {
    const { name: c, value: a } = n.target;
    M((r) => ({ ...r, [c]: a }));
  }, D = async () => {
    try {
      h(!0);
      const { data: n } = await j.post("/marketplace/product/frankieone/query-asic-report", {
        abn: o == null ? void 0 : o.abn,
        acn: o == null ? void 0 : o.acn,
        resultLevel: "summary"
      });
      K(n.entityId), await q(n.requestId);
    } catch (n) {
      const c = R(n);
      g.error(c.message), h(!1);
    }
  }, J = async () => {
    p(3);
  }, q = async (n) => {
    let a = 0;
    const r = async () => {
      var E, G, $;
      try {
        const f = await j.get(`/marketplace/product/frankieone/retrieve-response?requestId=${n}`);
        if (C("response retrieve", f.data), f.status === 202 || f.data.status === "pending")
          a < 60 ? (a++, setTimeout(r, 5e3)) : g.error("Timeout while generating report");
        else if (f.data.status === "success") {
          C("report complete", f.data.data.payload);
          const O = (G = (E = f == null ? void 0 : f.data) == null ? void 0 : E.data) == null ? void 0 : G.payload, X = ($ = O == null ? void 0 : O.uboResponse) == null ? void 0 : $.business_details;
          X && N((ie) => ({ ...ie, ...X })), h(!1), p(2);
        } else
          g.error(`Failed to generate report: ${f.data.status}`);
      } catch (f) {
        const O = R(f);
        g.error(O.message), h(!1);
      }
    };
    await r();
  }, Q = async () => {
    try {
      h(!0);
      const { data: n } = await j.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: m.registered_name,
        countryCode: "AU",
        status: z.VERIFIED,
        entityId: d,
        ...i
      });
      C("save kyb data", n), p(4);
    } catch (n) {
      const c = R(n);
      g.error(c.message);
    } finally {
      h(!1);
    }
    C("additional business detail", i);
  }, L = async () => {
    if (S && T) {
      const n = new URLSearchParams();
      n.set("flowId", S), n.set("flowIndex", T), V > 0 && n.set("nextIndex", V.toString()), u(`${Z}?${n.toString()}`);
    } else
      u("/dashboard"), v(""), I(null), N(ee), M({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(W, { className: "p-8 pt-6", children: [
    b > 1 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs mb-4 cursor-pointer", onClick: () => P(), children: [
      /* @__PURE__ */ e.jsx(te, { size: 14 }),
      /* @__PURE__ */ e.jsx("span", { children: "Back" })
    ] }),
    b === 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search Business" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(H, { htmlFor: "search", className: "text-sm font-medium", children: "Enter ABN or ACN" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "search",
              name: "search",
              placeholder: "Enter 11-digit ABN or 9-digit ACN",
              value: y,
              onChange: _,
              maxLength: 11
            }
          ),
          /* @__PURE__ */ e.jsx(x, { onClick: Y, disabled: A || !k(y), children: A ? /* @__PURE__ */ e.jsx(U, {}) : "Search" })
        ] })
      ] }),
      o && /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-2 text-sm font-medium text-primary/50", children: "We've found the following:" }),
        /* @__PURE__ */ e.jsx("div", { className: "border border-primary/20 rounded-md p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "Name" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: o.name })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "ABN" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: o.abn })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "ACN" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: o.acn || "N/A" })
          ] })
        ] }) })
      ] }),
      o && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => D(), disabled: !o || l, children: l ? /* @__PURE__ */ e.jsx(U, {}) : "Continue" }) })
    ] }),
    b === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "registered_name", className: "block mb-2 font-medium text-lg", children: "Full registered business name" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "registered_name",
              name: "registered_name",
              value: m.registered_name,
              onChange: w
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "ABN", className: "block mb-2 font-medium text-lg", children: "ABN" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "ABN",
              name: "ABN",
              value: m.ABN,
              onChange: w
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "ACN", className: "block mb-2 font-medium text-lg", children: "ACN" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "ACN",
              name: "ACN",
              value: m.ACN,
              onChange: w
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "date_registered_with_asic", className: "block mb-2 font-medium text-lg", children: "Date registered with ASIC" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "date_registered_with_asic",
              name: "date_registered_with_asic",
              value: m.date_registered_with_asic,
              onChange: w
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "state_registered_with_asic", className: "block mb-2 font-medium text-lg", children: "State registered with ASIC" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "state_registered_with_asic",
              name: "state_registered_with_asic",
              value: m.state_registered_with_asic,
              onChange: w
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => J(), disabled: l, children: l ? /* @__PURE__ */ e.jsx(U, {}) : "Continue" }) })
    ] }),
    b === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "sourceOfCapital",
              name: "sourceOfCapital",
              value: i.sourceOfCapital,
              onChange: F
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "industry", className: "block mb-2 font-medium text-lg", children: "Industry" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "industry",
              name: "industry",
              value: i.industry,
              onChange: F
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "websiteUrl", className: "block mb-2 font-medium text-lg", children: "Website URL" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "websiteUrl",
              name: "websiteUrl",
              value: i.websiteUrl,
              onChange: F
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "socialMediaUrl", className: "block mb-2 font-medium text-lg", children: "Social Media URL" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "socialMediaUrl",
              name: "socialMediaUrl",
              value: i.socialMediaUrl,
              onChange: F
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "officePhone", className: "block mb-2 font-medium text-lg", children: "Office Phone" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "officePhone",
              name: "officePhone",
              value: i.officePhone,
              onChange: F
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => Q(), disabled: l, children: l ? /* @__PURE__ */ e.jsx(U, {}) : "Submit" }) })
    ] }),
    b === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => L(), children: S && T ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
}
const Ne = xe.map((u) => ({
  value: u.code,
  label: u.name
})), ae = {
  Code: "",
  Date: "",
  FoundationDate: "",
  LegalForm: "",
  LegalStatus: "",
  Name: "",
  NormalisedLegalStatus: "",
  RegistrationDate: "",
  RegistrationNumber: "",
  VatNumber: ""
}, Se = () => {
  const u = ne(), { flowId: b, flowIndex: p, serviceUrl: y, nextIndex: v } = se(), [A, B] = t.useState(!1), [l, h] = t.useState(1), [o, I] = t.useState(""), [m, N] = t.useState(!1), [i, M] = t.useState(null), [d, K] = t.useState(ae), [S, T] = t.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [Z, V] = t.useState(null), [P, _] = t.useState(""), [k, Y] = t.useState(""), w = () => {
    h(l - 1);
  }, F = (a) => {
    I(a);
  }, D = (a) => {
    const { name: r, value: E } = a.target;
    K((G) => ({ ...G, [r]: E }));
  }, J = async () => {
    if (!P && !k) {
      g.error("Please enter either a business name or registration number");
      return;
    }
    try {
      B(!0);
      const { data: a } = await j.post("/marketplace/product/frankieone/international-business-search", {
        country: o,
        organisationName: P || void 0,
        organisationNumber: k || void 0
      });
      C("data", a), M(a.Companies.CompanyDTO[0]);
    } catch (a) {
      const r = R(a);
      g.error(r.message);
    } finally {
      B(!1);
    }
  }, q = async () => {
    try {
      N(!0);
      const { data: a } = await j.post("/marketplace/product/frankieone/international-business-profile", {
        country: o,
        companyCode: i == null ? void 0 : i.Code,
        registrationAuthorityCode: i == null ? void 0 : i.RegistrationAuthorityCode
      });
      C("data", a), K(a.CompanyProfile), V(a.entityId), N(!1), h(2);
    } catch (a) {
      const r = R(a);
      g.error(r.message), N(!1);
    }
  }, Q = async () => {
    h(3);
  }, L = (a) => {
    const { name: r, value: E } = a.target;
    T((G) => ({ ...G, [r]: E }));
  }, n = async () => {
    try {
      N(!0);
      const { data: a } = await j.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: d.Name,
        countryCode: o,
        status: z.VERIFIED,
        entityId: Z,
        ...S
      });
      C("save kyb data", a), h(4);
    } catch (a) {
      const r = R(a);
      g.error(r.message);
    } finally {
      N(!1);
    }
    C("additional business detail", S);
  }, c = async () => {
    if (b && p) {
      const a = new URLSearchParams();
      a.set("flowId", b), a.set("flowIndex", p), v > 0 && a.set("nextIndex", v.toString()), u(`${y}?${a.toString()}`);
    } else
      u("/dashboard"), I(""), _(""), Y(""), M(null), K(ae), T({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(W, { className: "p-8 pt-6", children: [
    l > 1 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs mb-4 cursor-pointer", onClick: () => w(), children: [
      /* @__PURE__ */ e.jsx(te, { size: 14 }),
      /* @__PURE__ */ e.jsx("span", { children: "Back" })
    ] }),
    l === 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search for Business" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(H, { htmlFor: "country", className: "text-sm font-medium", children: "Select Country / Region" }),
          /* @__PURE__ */ e.jsx(
            he,
            {
              options: Ne,
              value: o,
              onValueChange: F,
              placeholder: "Select a country/region",
              emptyMessage: "No country found."
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(H, { htmlFor: "businessName", className: "text-sm font-medium", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "businessName",
              value: P,
              onChange: (a) => _(a.target.value),
              placeholder: "Enter business name"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(H, { htmlFor: "registrationNumber", className: "text-sm font-medium", children: "Registration Number" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "registrationNumber",
              value: k,
              onChange: (a) => Y(a.target.value),
              placeholder: "Enter registration number"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-right", children: /* @__PURE__ */ e.jsx(
          x,
          {
            onClick: J,
            disabled: A || !o || !P && !k,
            children: A ? /* @__PURE__ */ e.jsx(U, {}) : "Search"
          }
        ) })
      ] }),
      i && /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-2 text-sm font-medium text-primary/50", children: "We've found the following:" }),
        /* @__PURE__ */ e.jsx("div", { className: "border border-primary/20 rounded-md p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "Name" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: i.Name })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "Company ID" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: i.CompanyID })
          ] })
        ] }) })
      ] }),
      i && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => q(), disabled: !i || m, children: m ? /* @__PURE__ */ e.jsx(U, {}) : "Continue" }) })
    ] }),
    l === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "Name", className: "block mb-2 font-medium text-lg", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "Name",
              name: "Name",
              value: d.Name,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "FoundationDate", className: "block mb-2 font-medium text-lg", children: "Foundation Date" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "FoundationDate",
              name: "FoundationDate",
              value: d.FoundationDate,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "LegalForm", className: "block mb-2 font-medium text-lg", children: "Legal Form" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "LegalForm",
              name: "LegalForm",
              value: d.LegalForm,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "LegalStatus", className: "block mb-2 font-medium text-lg", children: "Legal Status" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "LegalStatus",
              name: "LegalStatus",
              value: d.LegalStatus,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "RegistrationNumber", className: "block mb-2 font-medium text-lg", children: "Registration Number" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "RegistrationNumber",
              name: "RegistrationNumber",
              value: d.RegistrationNumber,
              onChange: D
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => Q(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(U, {}) : "Continue" }) })
    ] }),
    l === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "sourceOfCapital",
              name: "sourceOfCapital",
              value: S.sourceOfCapital,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "industry", className: "block mb-2 font-medium text-lg", children: "Industry" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "industry",
              name: "industry",
              value: S.industry,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "websiteUrl", className: "block mb-2 font-medium text-lg", children: "Website URL" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "websiteUrl",
              name: "websiteUrl",
              value: S.websiteUrl,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "socialMediaUrl", className: "block mb-2 font-medium text-lg", children: "Social Media URL" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "socialMediaUrl",
              name: "socialMediaUrl",
              value: S.socialMediaUrl,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "officePhone", className: "block mb-2 font-medium text-lg", children: "Office Phone" }),
          /* @__PURE__ */ e.jsx(
            s,
            {
              id: "officePhone",
              name: "officePhone",
              value: S.officePhone,
              onChange: L
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => n(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(U, {}) : "Submit" }) })
    ] }),
    l === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => c(), children: b && p ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
};
function fe({
  showExternalLink: u = !0
}) {
  const [b, p] = t.useState(null), [y, v] = t.useState(!1), [A, B] = t.useState(null), [l, h] = t.useState(!1);
  t.useEffect(() => {
    o();
  }, []);
  const o = async () => {
    try {
      h(!0);
      const { data: d } = await j.get("/marketplace/product/frankieone/get-kyb-status");
      d && d.status === z.VERIFIED && (v(!0), B(d));
    } catch (d) {
      C("kyb status error", d);
    } finally {
      h(!1);
    }
  }, I = (d) => {
    p(d);
  }, m = () => {
    window.open(window.location.href, "_blank");
  }, N = () => {
    v(!1);
  }, i = () => /* @__PURE__ */ e.jsxs(W, { className: "p-8 relative", children: [
    u && /* @__PURE__ */ e.jsx(
      x,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2",
        onClick: m,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(le, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Confirm Business Type" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-primary/60 mb-6", children: "Is your business registered in Australia?" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-x-4", children: [
      /* @__PURE__ */ e.jsx(x, { onClick: () => I(!0), children: "Yes, Australian Business" }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => I(!1), children: "No, International Business" })
    ] })
  ] }), M = () => /* @__PURE__ */ e.jsxs(W, { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(oe, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ e.jsx(me, { className: "w-16 h-16 text-green-500" }) }),
      /* @__PURE__ */ e.jsx(de, { className: "text-2xl font-bold text-center text-primary", children: "Verification Complete" })
    ] }),
    /* @__PURE__ */ e.jsxs(ce, { children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-center text-primary/80 mb-4", children: "Your business has been successfully verified." }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center text-primary/80 mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: "Business Name:" }),
        " ",
        A.businessName
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center text-primary/80", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: "Verification Time:" }),
        " ",
        A.verificationTimestamp
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(re, { className: "flex justify-center", children: /* @__PURE__ */ e.jsxs(
      x,
      {
        onClick: () => N(),
        className: "flex items-center justify-center",
        children: [
          /* @__PURE__ */ e.jsx(ue, { className: "mr-2 h-4 w-4" }),
          " Re-verify Business"
        ]
      }
    ) })
  ] });
  return l ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e.jsx(U, { type: "breathe" }) }) : b ? /* @__PURE__ */ e.jsx(be, {}) : b === !1 ? /* @__PURE__ */ e.jsx(Se, {}) : /* @__PURE__ */ e.jsx("div", { children: y ? M() : i() });
}
function Be() {
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(fe, {}) });
}
export {
  Be as default
};
