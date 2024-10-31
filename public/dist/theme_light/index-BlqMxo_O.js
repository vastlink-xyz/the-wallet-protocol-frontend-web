import { j as t } from "./vendor-radix-C4qF-rbz.js";
import { c as a } from "./main-Cnoo90sq.js";
import { L as n } from "./vendor-react-KTk2TwQ7.js";
function r({ primaryRoute: e, secondaryRoute: s, className: l }) {
  return /* @__PURE__ */ t.jsxs("div", { className: a(
    "h-[22px] justify-start items-center inline-flex",
    "desktop:ml-[50px] desktop:mt-[24px]",
    "laptop:ml-[32px] laptop:mt-[24px]",
    "tablet:ml-[24px] tablet:mt-[24px]",
    "mobile:ml-[16px] mobile:mt-[10px]",
    "ml-[16px] mt-[10px]",
    l
  ), children: [
    /* @__PURE__ */ t.jsx("div", { className: "justify-start items-center gap-1 flex", children: /* @__PURE__ */ t.jsx(
      n,
      {
        to: e.path,
        className: "text-black/40 text-sm font-normal leading-snug hover:text-black/60 cursor-pointer",
        children: e.name
      }
    ) }),
    /* @__PURE__ */ t.jsx("div", { className: "px-2 flex-col justify-start items-center gap-2.5 inline-flex", children: /* @__PURE__ */ t.jsx("div", { className: "text-black/40 text-sm font-normal leading-snug", children: "/" }) }),
    /* @__PURE__ */ t.jsx("div", { className: "justify-start items-center flex", children: /* @__PURE__ */ t.jsx("div", { className: "text-black/90 text-sm font-normal leading-snug", children: s.name }) })
  ] });
}
function p({ children: e, className: s }) {
  return /* @__PURE__ */ t.jsx("div", { className: a([
    "desktop:w-[1224px] laptop:w-[936px] tablet:w-[720px] w-[346px]",
    "mx-auto pb-12",
    s
  ]), children: e });
}
export {
  r as B,
  p as C
};
