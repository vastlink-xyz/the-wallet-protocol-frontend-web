import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import "./main-BJkbpKmW.js";
import { c as n } from "./style-CX3mXOu3.js";
import { k as r } from "./vendor-react-D6ZgZFQ5.js";
function m({ children: t, className: a }) {
  return /* @__PURE__ */ e.jsx("div", { className: n([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12",
    a
  ]), children: t });
}
function x({ className: t }) {
  const a = r(), o = () => {
    a(-1);
  };
  return /* @__PURE__ */ e.jsx("div", { className: n([
    "flex items-center text-black text-base font-normal leading-tight",
    "cursor-pointer",
    t
  ]), onClick: o, children: "← Back" });
}
export {
  x as B,
  m as C
};
