import { j as e } from "./vendor-radix-DcfHr-b-.js";
import { j as se, r as n } from "./vendor-react-Cqw-pUgZ.js";
import { B as x } from "./button-CTahMASr.js";
import { C as te } from "./card-BEbVCKL7.js";
import { I as a } from "./input-e7uWnFsp.js";
import { L as W } from "./label-BsHZ7DxT.js";
import { a as y } from "./index-Ds-PW5Mo.js";
import { l as v } from "./main-69rK11_z.js";
import { h as R } from "./error-BOjt9hlf.js";
import { B as g } from "./vendor-utils-BEOEHg0B.js";
import { L as C } from "./index-3BRCbPgh.js";
import { K as J, c as le } from "./helper-C3A8L7vk.js";
import { u as ae } from "./useFlowData-CzwEmS4L.js";
import { h as ne, E as re, l as oe } from "./vendor-ui-utils-D8A1AlyV.js";
import { S as ce } from "./index-Dj_Xspqs.js";
import { c as de } from "./style-JRa9Y8f9.js";
const Z = {
  registered_name: "",
  ABN: "",
  ACN: "",
  date_registered_with_asic: "",
  state_registered_with_asic: ""
};
function me() {
  const j = se(), [h, N] = n.useState(1), [k, S] = n.useState(""), [w, B] = n.useState(!1), [d, u] = n.useState(!1), [l, F] = n.useState(null), [m, f] = n.useState(Z), [i, I] = n.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [r, Y] = n.useState(null), { flowId: b, flowIndex: P, serviceUrl: q, nextIndex: V } = ae(), E = () => {
    N(h - 1);
  }, T = (t) => {
    const o = t.target.value.replace(/\D/g, "");
    S(o);
  }, A = (t) => t.length === 11 || t.length === 9, $ = async () => {
    if (!A(k)) {
      g.error("Please enter a valid ABN (11 digits) or ACN (9 digits)");
      return;
    }
    try {
      B(!0);
      const o = (await y.post("/marketplace/product/frankieone/get-token")).data, { data: s } = await y.post("/marketplace/product/frankieone/business-lookup", {
        search: k,
        token: o
      });
      v("lookup business response data", s), s.length > 0 && F(s[0]);
    } catch (t) {
      const o = R(t);
      g.error(o.message);
    } finally {
      B(!1);
    }
  }, D = (t) => {
    const { name: o, value: s } = t.target;
    f((c) => ({ ...c, [o]: s }));
  }, _ = (t) => {
    const { name: o, value: s } = t.target;
    I((c) => ({ ...c, [o]: s }));
  }, L = async () => {
    try {
      u(!0);
      const { data: t } = await y.post("/marketplace/product/frankieone/query-asic-report", {
        abn: l == null ? void 0 : l.abn,
        acn: l == null ? void 0 : l.acn,
        resultLevel: "summary"
      });
      Y(t.entityId), await G(t.requestId);
    } catch (t) {
      const o = R(t);
      g.error(o.message), u(!1);
    }
  }, z = async () => {
    N(3);
  }, G = async (t) => {
    let s = 0;
    const c = async () => {
      var O, M, Q;
      try {
        const p = await y.get(`/marketplace/product/frankieone/retrieve-response?requestId=${t}`);
        if (v("response retrieve", p.data), p.status === 202 || p.data.status === "pending")
          s < 60 ? (s++, setTimeout(c, 5e3)) : g.error("Timeout while generating report");
        else if (p.data.status === "success") {
          v("report complete", p.data.data.payload);
          const K = (M = (O = p == null ? void 0 : p.data) == null ? void 0 : O.data) == null ? void 0 : M.payload, X = (Q = K == null ? void 0 : K.uboResponse) == null ? void 0 : Q.business_details;
          X && f((ie) => ({ ...ie, ...X })), u(!1), N(2);
        } else
          g.error(`Failed to generate report: ${p.data.status}`);
      } catch (p) {
        const K = R(p);
        g.error(K.message), u(!1);
      }
    };
    await c();
  }, H = async () => {
    try {
      u(!0);
      const { data: t } = await y.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: m.registered_name,
        countryCode: "AU",
        status: J.VERIFIED,
        entityId: r,
        ...i
      });
      v("save kyb data", t), N(4);
    } catch (t) {
      const o = R(t);
      g.error(o.message);
    } finally {
      u(!1);
    }
    v("additional business detail", i);
  }, U = async () => {
    if (b && P) {
      const t = new URLSearchParams();
      t.set("flowId", b), t.set("flowIndex", P), V > 0 && t.set("nextIndex", V.toString()), j(`${q}?${t.toString()}`);
    } else
      j("/dashboard"), S(""), F(null), f(Z), I({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(te, { className: "p-8 pt-6", children: [
    h > 1 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs mb-4 cursor-pointer", onClick: () => E(), children: [
      /* @__PURE__ */ e.jsx(ne, { size: 14 }),
      /* @__PURE__ */ e.jsx("span", { children: "Back" })
    ] }),
    h === 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search Business" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsx(W, { htmlFor: "search", className: "text-sm font-medium", children: "Enter ABN or ACN" }),
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "search",
              name: "search",
              placeholder: "Enter 11-digit ABN or 9-digit ACN",
              value: k,
              onChange: T,
              maxLength: 11
            }
          ),
          /* @__PURE__ */ e.jsx(x, { onClick: $, disabled: w || !A(k), children: w ? /* @__PURE__ */ e.jsx(C, {}) : "Search" })
        ] })
      ] }),
      l && /* @__PURE__ */ e.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-2 text-sm font-medium text-primary/50", children: "We've found the following:" }),
        /* @__PURE__ */ e.jsx("div", { className: "border border-primary/20 rounded-md p-6", children: /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "Name" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: l.name })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "ABN" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: l.abn })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("p", { className: "text-sm font-medium text-primary/50", children: "ACN" }),
            /* @__PURE__ */ e.jsx("p", { className: "text-base font-semibold text-primary/80", children: l.acn || "N/A" })
          ] })
        ] }) })
      ] }),
      l && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => L(), disabled: !l || d, children: d ? /* @__PURE__ */ e.jsx(C, {}) : "Continue" }) })
    ] }),
    h === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "registered_name", className: "block mb-2 font-medium text-lg", children: "Full registered business name" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "registered_name",
              name: "registered_name",
              value: m.registered_name,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "ABN", className: "block mb-2 font-medium text-lg", children: "ABN" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "ABN",
              name: "ABN",
              value: m.ABN,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "ACN", className: "block mb-2 font-medium text-lg", children: "ACN" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "ACN",
              name: "ACN",
              value: m.ACN,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "date_registered_with_asic", className: "block mb-2 font-medium text-lg", children: "Date registered with ASIC" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "date_registered_with_asic",
              name: "date_registered_with_asic",
              value: m.date_registered_with_asic,
              onChange: D
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "state_registered_with_asic", className: "block mb-2 font-medium text-lg", children: "State registered with ASIC" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "state_registered_with_asic",
              name: "state_registered_with_asic",
              value: m.state_registered_with_asic,
              onChange: D
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => z(), disabled: d, children: d ? /* @__PURE__ */ e.jsx(C, {}) : "Continue" }) })
    ] }),
    h === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "sourceOfCapital",
              name: "sourceOfCapital",
              value: i.sourceOfCapital,
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "industry", className: "block mb-2 font-medium text-lg", children: "Industry" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "industry",
              name: "industry",
              value: i.industry,
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "websiteUrl", className: "block mb-2 font-medium text-lg", children: "Website URL" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "websiteUrl",
              name: "websiteUrl",
              value: i.websiteUrl,
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "socialMediaUrl", className: "block mb-2 font-medium text-lg", children: "Social Media URL" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "socialMediaUrl",
              name: "socialMediaUrl",
              value: i.socialMediaUrl,
              onChange: _
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "officePhone", className: "block mb-2 font-medium text-lg", children: "Office Phone" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "officePhone",
              name: "officePhone",
              value: i.officePhone,
              onChange: _
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => H(), disabled: d, children: d ? /* @__PURE__ */ e.jsx(C, {}) : "Submit" }) })
    ] }),
    h === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => U(), children: b && P ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
}
const ue = le.map((j) => ({
  value: j.code,
  label: j.name
})), ee = {
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
}, xe = () => {
  const j = se(), { flowId: h, flowIndex: N, serviceUrl: k, nextIndex: S } = ae(), [w, B] = n.useState(!1), [d, u] = n.useState(1), [l, F] = n.useState(""), [m, f] = n.useState(!1), [i, I] = n.useState(null), [r, Y] = n.useState(ee), [b, P] = n.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [q, V] = n.useState(null), [E, T] = n.useState(""), [A, $] = n.useState(""), D = () => {
    u(d - 1);
  }, _ = (s) => {
    F(s);
  }, L = (s) => {
    const { name: c, value: O } = s.target;
    Y((M) => ({ ...M, [c]: O }));
  }, z = async () => {
    if (!E && !A) {
      g.error("Please enter either a business name or registration number");
      return;
    }
    try {
      B(!0);
      const { data: s } = await y.post("/marketplace/product/frankieone/international-business-search", {
        country: l,
        organisationName: E || void 0,
        organisationNumber: A || void 0
      });
      v("data", s), I(s.Companies.CompanyDTO[0]);
    } catch (s) {
      const c = R(s);
      g.error(c.message);
    } finally {
      B(!1);
    }
  }, G = async () => {
    try {
      f(!0);
      const { data: s } = await y.post("/marketplace/product/frankieone/international-business-profile", {
        country: l,
        companyCode: i == null ? void 0 : i.Code,
        registrationAuthorityCode: i == null ? void 0 : i.RegistrationAuthorityCode
      });
      v("data", s), Y(s.CompanyProfile), V(s.entityId), f(!1), u(2);
    } catch (s) {
      const c = R(s);
      g.error(c.message), f(!1);
    }
  }, H = async () => {
    u(3);
  }, U = (s) => {
    const { name: c, value: O } = s.target;
    P((M) => ({ ...M, [c]: O }));
  }, t = async () => {
    try {
      f(!0);
      const { data: s } = await y.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: r.Name,
        countryCode: l,
        status: J.VERIFIED,
        entityId: q,
        ...b
      });
      v("save kyb data", s), u(4);
    } catch (s) {
      const c = R(s);
      g.error(c.message);
    } finally {
      f(!1);
    }
    v("additional business detail", b);
  }, o = async () => {
    if (h && N) {
      const s = new URLSearchParams();
      s.set("flowId", h), s.set("flowIndex", N), S > 0 && s.set("nextIndex", S.toString()), j(`${k}?${s.toString()}`);
    } else
      j("/dashboard"), F(""), T(""), $(""), I(null), Y(ee), P({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(te, { className: "p-8 pt-6", children: [
    d > 1 && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-1 text-xs mb-4 cursor-pointer", onClick: () => D(), children: [
      /* @__PURE__ */ e.jsx(ne, { size: 14 }),
      /* @__PURE__ */ e.jsx("span", { children: "Back" })
    ] }),
    d === 1 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Search for Business" }),
      /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(W, { htmlFor: "country", className: "text-sm font-medium", children: "Select Country / Region" }),
          /* @__PURE__ */ e.jsx(
            ce,
            {
              options: ue,
              value: l,
              onValueChange: _,
              placeholder: "Select a country/region",
              emptyMessage: "No country found."
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(W, { htmlFor: "businessName", className: "text-sm font-medium", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "businessName",
              value: E,
              onChange: (s) => T(s.target.value),
              placeholder: "Enter business name"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx(W, { htmlFor: "registrationNumber", className: "text-sm font-medium", children: "Registration Number" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "registrationNumber",
              value: A,
              onChange: (s) => $(s.target.value),
              placeholder: "Enter registration number"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "text-right", children: /* @__PURE__ */ e.jsx(
          x,
          {
            onClick: z,
            disabled: w || !l || !E && !A,
            children: w ? /* @__PURE__ */ e.jsx(C, {}) : "Search"
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
      i && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => G(), disabled: !i || m, children: m ? /* @__PURE__ */ e.jsx(C, {}) : "Continue" }) })
    ] }),
    d === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "Name", className: "block mb-2 font-medium text-lg", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "Name",
              name: "Name",
              value: r.Name,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "FoundationDate", className: "block mb-2 font-medium text-lg", children: "Foundation Date" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "FoundationDate",
              name: "FoundationDate",
              value: r.FoundationDate,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "LegalForm", className: "block mb-2 font-medium text-lg", children: "Legal Form" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "LegalForm",
              name: "LegalForm",
              value: r.LegalForm,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "LegalStatus", className: "block mb-2 font-medium text-lg", children: "Legal Status" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "LegalStatus",
              name: "LegalStatus",
              value: r.LegalStatus,
              onChange: L
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "RegistrationNumber", className: "block mb-2 font-medium text-lg", children: "Registration Number" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "RegistrationNumber",
              name: "RegistrationNumber",
              value: r.RegistrationNumber,
              onChange: L
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => H(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(C, {}) : "Continue" }) })
    ] }),
    d === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "sourceOfCapital",
              name: "sourceOfCapital",
              value: b.sourceOfCapital,
              onChange: U
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "industry", className: "block mb-2 font-medium text-lg", children: "Industry" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "industry",
              name: "industry",
              value: b.industry,
              onChange: U
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "websiteUrl", className: "block mb-2 font-medium text-lg", children: "Website URL" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "websiteUrl",
              name: "websiteUrl",
              value: b.websiteUrl,
              onChange: U
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "socialMediaUrl", className: "block mb-2 font-medium text-lg", children: "Social Media URL" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "socialMediaUrl",
              name: "socialMediaUrl",
              value: b.socialMediaUrl,
              onChange: U
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "officePhone", className: "block mb-2 font-medium text-lg", children: "Office Phone" }),
          /* @__PURE__ */ e.jsx(
            a,
            {
              id: "officePhone",
              name: "officePhone",
              value: b.officePhone,
              onChange: U
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => t(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(C, {}) : "Submit" }) })
    ] }),
    d === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => o(), children: h && N ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
};
function he({
  showExternalLink: j = !0
}) {
  const [h, N] = n.useState(null), [k, S] = n.useState(!1), [w, B] = n.useState(null), [d, u] = n.useState(!1);
  n.useEffect(() => {
    l();
  }, []);
  const l = async () => {
    try {
      u(!0);
      const { data: r } = await y.get("/marketplace/product/frankieone/get-kyb-status");
      r && r.status === J.VERIFIED && (S(!0), B(r));
    } catch (r) {
      v("kyb status error", r);
    } finally {
      u(!1);
    }
  }, F = (r) => {
    N(r);
  }, m = () => {
    window.open(window.location.href, "_blank");
  }, f = () => {
    S(!1);
  }, i = () => /* @__PURE__ */ e.jsxs("div", { className: "p-0 relative", children: [
    j && /* @__PURE__ */ e.jsx(
      x,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2",
        onClick: m,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(re, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Confirm Business Type" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-primary/60 mb-6", children: "Is your business registered in Australia?" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-x-4", children: [
      /* @__PURE__ */ e.jsx(x, { onClick: () => F(!0), children: "Yes, Australian Business" }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => F(!1), children: "No, International Business" })
    ] })
  ] }), I = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: "Verification Complete" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 flex justify-center items-center", children: /* @__PURE__ */ e.jsx("p", { className: "text-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: "Your business has been successfully verified." }) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-4 text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: [
      /* @__PURE__ */ e.jsxs("p", { className: "text-center mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Business Name:" }),
        " ",
        w.businessName
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Verification Time:" }),
        " ",
        w.verificationTimestamp
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: de([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto",
      "flex flex-col items-center"
    ]), children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/success_added.png", alt: "success" }),
      /* @__PURE__ */ e.jsxs(
        x,
        {
          className: "w-full mt-[46px]",
          onClick: () => f(),
          children: [
            /* @__PURE__ */ e.jsx(oe, { className: "mr-2 h-4 w-4" }),
            " Re-verify Business"
          ]
        }
      )
    ] })
  ] });
  return d ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e.jsx(C, { type: "breathe" }) }) : h ? /* @__PURE__ */ e.jsx(me, {}) : h === !1 ? /* @__PURE__ */ e.jsx(xe, {}) : /* @__PURE__ */ e.jsx("div", { children: k ? I() : i() });
}
function De() {
  return /* @__PURE__ */ e.jsx("div", { className: "mt-[120px]", children: /* @__PURE__ */ e.jsx(he, {}) });
}
export {
  De as default
};
