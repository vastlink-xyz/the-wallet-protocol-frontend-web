import { j as e } from "./vendor-radix-nT--cb5B.js";
import { c as r, B as d } from "./main-Gzb6y-w8.js";
import { j as p, r as n } from "./vendor-react-CwfAKKXk.js";
function g({
  title: c,
  buttonText: o,
  redirectUrl: a,
  description: x
}) {
  const t = p(), [s, l] = n.useState(10);
  return n.useEffect(() => {
    const i = setInterval(() => {
      l((m) => m - 1);
    }, 1e3);
    return () => clearInterval(i);
  }, []), n.useEffect(() => {
    s === 0 && t(a);
  }, [s, t]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: c }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 flex justify-center items-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: x }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
        " ",
        s,
        " s "
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: r([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto",
      "flex flex-col items-center"
    ]), children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/success_added.png", alt: "success" }),
      /* @__PURE__ */ e.jsx(
        d,
        {
          className: "w-full mt-[46px]",
          onClick: () => t(a),
          children: o
        }
      )
    ] })
  ] });
}
export {
  g as C
};
