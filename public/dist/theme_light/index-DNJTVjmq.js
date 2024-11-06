import { j as e } from "./vendor-radix-D0lo_cKZ.js";
import { c as n } from "./main-B77raCsP.js";
import { j as s } from "./vendor-react-CA5sEv1f.js";
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
