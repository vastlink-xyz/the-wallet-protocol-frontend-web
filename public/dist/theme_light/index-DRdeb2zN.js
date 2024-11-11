import { j as s } from "./vendor-radix-CtBTfL6E.js";
import { u as l, C as i, B as p } from "./vendor-utils-CKvC_yGz.js";
import { b as n } from "./vendor-ui-utils-i3zS6aVb.js";
function d({
  iconSize: r = 20,
  address: e,
  className: a = "",
  iconClassName: o = "",
  ...t
}) {
  const { t: c } = l();
  return /* @__PURE__ */ s.jsx(i, { text: e, onCopy: () => {
    p.success(c("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ s.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ s.jsx("span", { ...t, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ s.jsx("span", { className: `text-primary ${a}`, children: e }) }),
    /* @__PURE__ */ s.jsx(
      n,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${o}`,
        size: r
      }
    )
  ] }) });
}
export {
  d as C
};
