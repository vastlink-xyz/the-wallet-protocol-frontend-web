import { j as e } from "./vendor-radix-BwSYOuH5.js";
import { i as se, r as n } from "./vendor-react-wyPiRY-L.js";
import { I as t, B as x, L as B, f as w, g as v, h as R, n as le, c as re } from "./main-aWh1b37I.js";
import { C as ae } from "./card-BLIRcNf2.js";
import { L as W } from "./label-D3ghrMGA.js";
import { B as j } from "./vendor-utils-BSjbfJFn.js";
import { K as J, c as oe } from "./helper-C3A8L7vk.js";
import { u as te } from "./useFlowData-W_rs8mq8.js";
import { l as ne, E as ce, o as de } from "./vendor-ui-utils-BbSwUILz.js";
import { S as me, v as ue } from "./frankieone-eLP95xYj.js";
const Z = {
  registered_name: "",
  ABN: "",
  ACN: "",
  date_registered_with_asic: "",
  state_registered_with_asic: ""
};
function xe() {
  const p = se(), [h, N] = n.useState(1), [y, C] = n.useState(""), [S, F] = n.useState(!1), [d, u] = n.useState(!1), [l, k] = n.useState(null), [m, f] = n.useState(Z), [i, I] = n.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [r, Y] = n.useState(null), { flowId: b, flowIndex: P, serviceUrl: q, nextIndex: V } = te(), E = () => {
    N(h - 1);
  }, T = (a) => {
    const o = a.target.value.replace(/\D/g, "");
    C(o);
  }, A = (a) => a.length === 11 || a.length === 9, $ = async () => {
    if (!A(y)) {
      j.error("Please enter a valid ABN (11 digits) or ACN (9 digits)");
      return;
    }
    try {
      F(!0);
      const o = (await w.post("/marketplace/product/frankieone/get-token")).data, { data: s } = await w.post("/marketplace/product/frankieone/business-lookup", {
        search: y,
        token: o
      });
      v("lookup business response data", s), s.length > 0 && k(s[0]);
    } catch (a) {
      const o = R(a);
      j.error(o.message);
    } finally {
      F(!1);
    }
  }, D = (a) => {
    const { name: o, value: s } = a.target;
    f((c) => ({ ...c, [o]: s }));
  }, _ = (a) => {
    const { name: o, value: s } = a.target;
    I((c) => ({ ...c, [o]: s }));
  }, L = async () => {
    try {
      u(!0);
      const { data: a } = await w.post("/marketplace/product/frankieone/query-asic-report", {
        abn: l == null ? void 0 : l.abn,
        acn: l == null ? void 0 : l.acn,
        resultLevel: "summary"
      });
      Y(a.entityId), await G(a.requestId);
    } catch (a) {
      const o = R(a);
      j.error(o.message), u(!1);
    }
  }, z = async () => {
    N(3);
  }, G = async (a) => {
    let s = 0;
    const c = async () => {
      var O, M, Q;
      try {
        const g = await w.get(`/marketplace/product/frankieone/retrieve-response?requestId=${a}`);
        if (v("response retrieve", g.data), g.status === 202 || g.data.status === "pending")
          s < 60 ? (s++, setTimeout(c, 5e3)) : j.error("Timeout while generating report");
        else if (g.data.status === "success") {
          v("report complete", g.data.data.payload);
          const K = (M = (O = g == null ? void 0 : g.data) == null ? void 0 : O.data) == null ? void 0 : M.payload, X = (Q = K == null ? void 0 : K.uboResponse) == null ? void 0 : Q.business_details;
          X && f((ie) => ({ ...ie, ...X })), u(!1), N(2);
        } else
          j.error(`Failed to generate report: ${g.data.status}`);
      } catch (g) {
        const K = R(g);
        j.error(K.message), u(!1);
      }
    };
    await c();
  }, H = async () => {
    try {
      u(!0);
      const { data: a } = await w.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: m.registered_name,
        countryCode: "AU",
        status: J.VERIFIED,
        entityId: r,
        ...i
      });
      v("save kyb data", a), N(4);
    } catch (a) {
      const o = R(a);
      j.error(o.message);
    } finally {
      u(!1);
    }
    v("additional business detail", i);
  }, U = async () => {
    if (b && P) {
      const a = new URLSearchParams();
      a.set("flowId", b), a.set("flowIndex", P), V > 0 && a.set("nextIndex", V.toString()), p(`${q}?${a.toString()}`);
    } else
      p("/dashboard"), C(""), k(null), f(Z), I({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(ae, { className: "p-8 pt-6", children: [
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
            t,
            {
              id: "search",
              name: "search",
              placeholder: "Enter 11-digit ABN or 9-digit ACN",
              value: y,
              onChange: T,
              maxLength: 11
            }
          ),
          /* @__PURE__ */ e.jsx(x, { onClick: $, disabled: S || !A(y), children: S ? /* @__PURE__ */ e.jsx(B, {}) : "Search" })
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
      l && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => L(), disabled: !l || d, children: d ? /* @__PURE__ */ e.jsx(B, {}) : "Continue" }) })
    ] }),
    h === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "registered_name", className: "block mb-2 font-medium text-lg", children: "Full registered business name" }),
          /* @__PURE__ */ e.jsx(
            t,
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
            t,
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
            t,
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
            t,
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
            t,
            {
              id: "state_registered_with_asic",
              name: "state_registered_with_asic",
              value: m.state_registered_with_asic,
              onChange: D
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => z(), disabled: d, children: d ? /* @__PURE__ */ e.jsx(B, {}) : "Continue" }) })
    ] }),
    h === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            t,
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
            t,
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
            t,
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
            t,
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
            t,
            {
              id: "officePhone",
              name: "officePhone",
              value: i.officePhone,
              onChange: _
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => H(), disabled: d, children: d ? /* @__PURE__ */ e.jsx(B, {}) : "Submit" }) })
    ] }),
    h === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => U(), children: b && P ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
}
const he = oe.map((p) => ({
  value: p.code,
  label: p.name
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
}, fe = () => {
  const p = se(), { flowId: h, flowIndex: N, serviceUrl: y, nextIndex: C } = te(), [S, F] = n.useState(!1), [d, u] = n.useState(1), [l, k] = n.useState(""), [m, f] = n.useState(!1), [i, I] = n.useState(null), [r, Y] = n.useState(ee), [b, P] = n.useState({
    sourceOfCapital: "",
    industry: "",
    websiteUrl: "",
    socialMediaUrl: "",
    officePhone: ""
  }), [q, V] = n.useState(null), [E, T] = n.useState(""), [A, $] = n.useState(""), D = () => {
    u(d - 1);
  }, _ = (s) => {
    k(s);
  }, L = (s) => {
    const { name: c, value: O } = s.target;
    Y((M) => ({ ...M, [c]: O }));
  }, z = async () => {
    if (!E && !A) {
      j.error("Please enter either a business name or registration number");
      return;
    }
    try {
      F(!0);
      const { data: s } = await w.post("/marketplace/product/frankieone/international-business-search", {
        country: l,
        organisationName: E || void 0,
        organisationNumber: A || void 0
      });
      v("data", s), I(s.Companies.CompanyDTO[0]);
    } catch (s) {
      const c = R(s);
      j.error(c.message);
    } finally {
      F(!1);
    }
  }, G = async () => {
    try {
      f(!0);
      const { data: s } = await ue({
        country: l,
        companyCode: i == null ? void 0 : i.Code,
        registrationAuthorityCode: i == null ? void 0 : i.RegistrationAuthorityCode
      });
      v("data", s), Y(s.CompanyProfile), V(s.entityId), f(!1), u(2);
    } catch (s) {
      const c = R(s);
      j.error(c.message), f(!1);
    }
  }, H = async () => {
    u(3);
  }, U = (s) => {
    const { name: c, value: O } = s.target;
    P((M) => ({ ...M, [c]: O }));
  }, a = async () => {
    try {
      f(!0);
      const { data: s } = await w.post("/marketplace/product/frankieone/save-kyb-data", {
        businessName: r.Name,
        countryCode: l,
        status: J.VERIFIED,
        entityId: q,
        ...b
      });
      v("save kyb data", s), u(4);
    } catch (s) {
      const c = R(s);
      j.error(c.message);
    } finally {
      f(!1);
    }
    v("additional business detail", b);
  }, o = async () => {
    if (h && N) {
      const s = new URLSearchParams();
      s.set("flowId", h), s.set("flowIndex", N), C > 0 && s.set("nextIndex", C.toString()), p(`${y}?${s.toString()}`);
    } else
      p("/dashboard"), k(""), T(""), $(""), I(null), Y(ee), P({
        sourceOfCapital: "",
        industry: "",
        websiteUrl: "",
        socialMediaUrl: "",
        officePhone: ""
      });
  };
  return /* @__PURE__ */ e.jsx("div", { className: "light", children: /* @__PURE__ */ e.jsxs(ae, { className: "p-8 pt-6", children: [
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
            me,
            {
              options: he,
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
            t,
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
            t,
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
            disabled: S || !l || !E && !A,
            children: S ? /* @__PURE__ */ e.jsx(B, {}) : "Search"
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
      i && /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => G(), disabled: !i || m, children: m ? /* @__PURE__ */ e.jsx(B, {}) : "Continue" }) })
    ] }),
    d === 2 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Business Detail" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-sm text-primary/50 mb-4", children: "We've imported some of your business information from the ASIC registry. Please review and update any information that is incorrect." }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "Name", className: "block mb-2 font-medium text-lg", children: "Business Name" }),
          /* @__PURE__ */ e.jsx(
            t,
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
            t,
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
            t,
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
            t,
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
            t,
            {
              id: "RegistrationNumber",
              name: "RegistrationNumber",
              value: r.RegistrationNumber,
              onChange: L
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => H(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(B, {}) : "Continue" }) })
    ] }),
    d === 3 && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Additional Business Detail" }),
      /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "sourceOfCapital", className: "block mb-2 font-medium text-lg", children: "Source of Capital" }),
          /* @__PURE__ */ e.jsx(
            t,
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
            t,
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
            t,
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
            t,
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
            t,
            {
              id: "officePhone",
              name: "officePhone",
              value: b.officePhone,
              onChange: U
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-4 text-right", children: /* @__PURE__ */ e.jsx(x, { className: "", onClick: () => a(), disabled: m, children: m ? /* @__PURE__ */ e.jsx(B, {}) : "Submit" }) })
    ] }),
    d === 4 && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "KYB Completed Successfully" }),
      /* @__PURE__ */ e.jsx("p", { className: "text-lg text-green-600 mb-6", children: "Your business verification process has been completed successfully." }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => o(), children: h && N ? "Continue to KYC" : "Return to Dashboard" })
    ] }) })
  ] }) });
};
function be({
  showExternalLink: p = !0
}) {
  const [h, N] = n.useState(null), [y, C] = n.useState(!1), [S, F] = n.useState(null), [d, u] = n.useState(!1);
  n.useEffect(() => {
    l();
  }, []);
  const l = async () => {
    try {
      u(!0);
      const { data: r } = await w.get("/marketplace/product/frankieone/get-kyb-status");
      r && r.status === J.VERIFIED && (C(!0), F(r));
    } catch (r) {
      v("kyb status error", r);
    } finally {
      u(!1);
    }
  }, k = (r) => {
    N(r);
  }, m = () => {
    window.open(window.location.href, "_blank");
  }, f = () => {
    C(!1);
  }, i = () => /* @__PURE__ */ e.jsxs("div", { className: "p-0 relative", children: [
    p && /* @__PURE__ */ e.jsx(
      x,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-2 right-2",
        onClick: m,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(ce, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Confirm Business Type" }),
    /* @__PURE__ */ e.jsx("p", { className: "text-primary/60 mb-6", children: "Is your business registered in Australia?" }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-x-4", children: [
      /* @__PURE__ */ e.jsx(x, { onClick: () => k(!0), children: "Yes, Australian Business" }),
      /* @__PURE__ */ e.jsx(x, { onClick: () => k(!1), children: "No, International Business" })
    ] })
  ] }), I = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: "Verification Complete" }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 flex justify-center items-center", children: /* @__PURE__ */ e.jsx("p", { className: "text-center", children: /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: "Your business has been successfully verified." }) }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "p-4 text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: [
      /* @__PURE__ */ e.jsxs("p", { className: "text-center mb-2", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Business Name:" }),
        " ",
        S.businessName
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Verification Time:" }),
        " ",
        S.verificationTimestamp
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: re([
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
            /* @__PURE__ */ e.jsx(de, { className: "mr-2 h-4 w-4" }),
            " Re-verify Business"
          ]
        }
      )
    ] })
  ] });
  return d ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ e.jsx(le, {}) }) : h ? /* @__PURE__ */ e.jsx(xe, {}) : h === !1 ? /* @__PURE__ */ e.jsx(fe, {}) : /* @__PURE__ */ e.jsx("div", { children: y ? I() : i() });
}
function Be() {
  return /* @__PURE__ */ e.jsx("div", { className: "mt-[120px]", children: /* @__PURE__ */ e.jsx(be, {}) });
}
export {
  Be as default
};
