import { j as e } from "./vendor-radix-CtBTfL6E.js";
import { c as n } from "./main-BiNWeoEw.js";
import { j as s } from "./vendor-react-lU71vM3H.js";
function p({ children: t, className: a }) {
  return /* @__PURE__ */ e.jsx("div", { className: n([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12",
    a
  ]), children: t });
}
function x({ className: t }) {
  const a = s(), o = () => {
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
  p as C
};
