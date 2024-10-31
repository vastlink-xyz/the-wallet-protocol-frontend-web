import { j as e } from "./vendor-radix-C4qF-rbz.js";
import { h as c, a as d } from "./vendor-react-KTk2TwQ7.js";
import { B as o } from "./main-Cnoo90sq.js";
import { C as m, c as u, d as h } from "./card-73JawrGP.js";
import { u as f } from "./useFlowData-Dx_Ip_yf.js";
import { E as p } from "./vendor-ui-utils-C5-iOwQy.js";
function v() {
  const t = c(), { flowId: a, serviceUrl: n, nextIndex: i } = f(), [s, x] = d.useState(!1), r = async () => {
    t(`${n}?flowId=${a}&flowIndex=${i}`);
  }, l = () => {
    window.open(window.location.href, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
    /* @__PURE__ */ e.jsx("h1", { className: "text-2xl font-bold mb-4", children: "Welcome to the Business Verification Flow" }),
    /* @__PURE__ */ e.jsx(
      o,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-0 right-2",
        onClick: l,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(p, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsxs(m, { children: [
      /* @__PURE__ */ e.jsxs(u, { className: "pt-6", children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-6", children: "This flow consists of two main parts: Know Your Business (KYB) and Know Your Customer (KYC). We'll guide you through each part to ensure a smooth verification experience." }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold mb-3", children: "Part 1: Know Your Business (KYB) Flow" }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-8", children: "In this part of the flow, we'll verify your business information. You'll be asked to provide details about your company's registration, structure, and operations." }),
        /* @__PURE__ */ e.jsx("h2", { className: "text-xl font-semibold mb-3", children: "Part 2: Know Your Customer (KYC) Flow" }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "After completing the KYB flow, you'll need to provide personal identification for key individuals in your business. This helps us comply with regulatory requirements and ensure the security of our platform." }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-6", children: "The entire flow typically takes 15-20 minutes. You can save your progress and continue later if needed." })
      ] }),
      /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsx(o, { onClick: r, disabled: s, className: "w-full", children: s ? "Preparing..." : "Start Verification Flow" }) })
    ] })
  ] });
}
export {
  v as default
};
