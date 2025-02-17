import { j as e } from "./vendor-radix-D7Ti2ut_.js";
import { f as c, r as d } from "./vendor-react-Bi1rjDlg.js";
import { B as o, L as m } from "./main-Bv5HMVJf.js";
import { u } from "./useFlowData-xkHp3y6X.js";
import { E as x } from "./vendor-ui-utils-CRHGvpNr.js";
function j() {
  const t = c(), { flowId: a, serviceUrl: i, nextIndex: n } = u(), [s, p] = d.useState(!1), r = async () => {
    t(`${i}?flowId=${a}&flowIndex=${n}`);
  }, l = () => {
    window.open(window.location.href, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-3xl mx-auto relative mt-[120px]", children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: "Welcome to the Business Verification Flow" }),
    /* @__PURE__ */ e.jsx(
      o,
      {
        variant: "ghost",
        size: "lg",
        className: "absolute -top-10 right-2",
        onClick: l,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(x, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "px-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "pt-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-6", children: "This flow consists of two main parts: Know Your Business (KYB) and Know Your Customer (KYC). We'll guide you through each part to ensure a smooth verification experience." }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold mb-3", children: "Part 1: Know Your Business (KYB) Flow" }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-8", children: "In this part of the flow, we'll verify your business information. You'll be asked to provide details about your company's registration, structure, and operations." }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold mb-3", children: "Part 2: Know Your Customer (KYC) Flow" }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "After completing the KYB flow, you'll need to provide personal identification for key individuals in your business. This helps us comply with regulatory requirements and ensure the security of our platform." }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-6", children: "The entire flow typically takes 15-20 minutes. You can save your progress and continue later if needed." })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "mt-6", children: /* @__PURE__ */ e.jsx(o, { onClick: r, disabled: s, className: "w-full", children: s ? /* @__PURE__ */ e.jsx(m, {}) : "Start Verification Flow" }) })
    ] })
  ] });
}
export {
  j as default
};
