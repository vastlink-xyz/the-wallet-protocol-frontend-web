import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import { C as t, a as r, d as a, b as i } from "./card-CbHBAfSW.js";
import { B as n } from "./button-CQRi4ddT.js";
import { k as o } from "./vendor-react-D6ZgZFQ5.js";
import { p as c } from "./vendor-ui-utils-CwlQOkPE.js";
function u() {
  const s = o();
  return /* @__PURE__ */ e.jsxs(t, { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(r, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ e.jsx(c, { className: "w-16 h-16 text-green-500" }) }),
      /* @__PURE__ */ e.jsx(a, { className: "text-2xl font-bold text-center text-primary", children: "Verification Complete" })
    ] }),
    /* @__PURE__ */ e.jsxs(i, { children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-center text-primary/80", children: "Your business and identity verification process has been successfully completed." }),
      /* @__PURE__ */ e.jsx("p", { className: "text-center text-primary/50 mt-4", children: "Thank you for your cooperation. You may now proceed with using our services." }),
      /* @__PURE__ */ e.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ e.jsx(n, { onClick: () => {
        s("/dashboard");
      }, children: "Back to Dashboard" }) })
    ] })
  ] });
}
export {
  u as default
};
