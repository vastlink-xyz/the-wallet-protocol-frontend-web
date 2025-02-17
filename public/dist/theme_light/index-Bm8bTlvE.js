import { j as s } from "./vendor-radix-DUwj-Z7L.js";
import { c as n } from "./main-DvSwU80m.js";
import { j as o } from "./vendor-react-DV6Kf_ot.js";
function l({
  className: e,
  onClick: t
}) {
  const a = o(), r = () => {
    t ? t() : a(-1);
  };
  return /* @__PURE__ */ s.jsx("div", { className: n([
    "flex items-center text-black text-base font-normal leading-tight",
    "cursor-pointer",
    e
  ]), onClick: r, children: "← Back" });
}
export {
  l as B
};
