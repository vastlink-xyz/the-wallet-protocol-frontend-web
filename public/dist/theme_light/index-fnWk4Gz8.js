import { j as e } from "./vendor-radix-CXAw23nV.js";
function i({
  text: t,
  imgSrc: s = "/imgs/icons/empty.png",
  className: m
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: `flex flex-col items-center justify-center ${m || ""}`, children: [
    /* @__PURE__ */ e.jsx("img", { className: "w-[186px]", src: s, alt: "empty" }),
    t && /* @__PURE__ */ e.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: t })
  ] });
}
export {
  i as E
};
