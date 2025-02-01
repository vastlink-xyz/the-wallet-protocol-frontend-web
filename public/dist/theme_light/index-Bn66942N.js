import { j as e } from "./vendor-radix-AvjOLIap.js";
import { c as p, B as j } from "./main-CXGbnggO.js";
import { l as g, a as n } from "./vendor-react-DSEtE0wE.js";
function v({
  title: l,
  buttonText: i,
  redirectUrl: t,
  description: x,
  defaultCountdown: m = 10,
  openInNewTab: a = !1
}) {
  const c = g(), [o, d] = n.useState(m), [s, f] = n.useState(!1);
  return n.useEffect(() => {
    const r = setInterval(() => {
      s || d((u) => u - 1);
    }, 1e3);
    return () => clearInterval(r);
  }, [s]), n.useEffect(() => {
    o === 0 && !s && (a ? (window.open(t, "_blank"), f(!0)) : c(t));
  }, [o, c, t, a, s]), /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { className: "mt-[48px] mb-[27px] text-center text-black text-[28px] font-bold leading-[36.96px]", children: l }),
    /* @__PURE__ */ e.jsx("div", { className: "h-4 flex justify-center items-center", children: /* @__PURE__ */ e.jsxs("p", { className: "text-center", children: [
      /* @__PURE__ */ e.jsx("span", { className: "text-[#979797] text-sm font-medium font-['Roboto'] leading-none", children: x }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
        " ",
        o,
        " s "
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: p([
      "tablet:w-[548px] w-[334px]",
      "tablet:px-4 px-0",
      "mt-[56px] mx-auto",
      "flex flex-col items-center"
    ]), children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/icons/success_added.png", alt: "success" }),
      /* @__PURE__ */ e.jsx(
        j,
        {
          className: "w-full mt-[46px]",
          onClick: () => {
            a ? window.open(t, "_blank") : c(t);
          },
          children: i
        }
      )
    ] })
  ] });
}
export {
  v as C
};
