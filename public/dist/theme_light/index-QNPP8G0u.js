import { j as s } from "./vendor-radix-B8_5rGTC.js";
import { u as t, C as c, B as l } from "./vendor-utils-avI_LICu.js";
import { h as p } from "./vendor-ui-utils-5hin2QBi.js";
function x({
  iconSize: e = 20,
  address: r,
  ...o
}) {
  const { t: a } = t();
  return /* @__PURE__ */ s.jsx(c, { text: r, onCopy: () => {
    l.success(a("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ s.jsxs("span", { className: "flex text-primary", children: [
    /* @__PURE__ */ s.jsx("span", { ...o, style: { wordBreak: "break-all", display: "block" }, children: /* @__PURE__ */ s.jsx("span", { className: "text-primary", children: r }) }),
    /* @__PURE__ */ s.jsx(p, { className: "cursor-pointer hover:scale-105 ml-2", size: e })
  ] }) });
}
export {
  x as C
};
