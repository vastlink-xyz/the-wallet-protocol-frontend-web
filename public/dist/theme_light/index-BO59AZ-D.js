import { j as e } from "./vendor-radix-CjL5_ZCn.js";
import { a as s, b as m } from "./vendor-react-D6ZgZFQ5.js";
import "./main-DrvVrxeO.js";
import { c as n } from "./style-CX3mXOu3.js";
import { a as u } from "./auth-D53HHgot.js";
function d() {
  const [t, o] = s.useState("/imgs/logos/logo.svg");
  return {
    logoPath: t
  };
}
function f({
  size: t = 32,
  className: o = ""
}) {
  const [i, c] = s.useState("");
  return s.useEffect(() => {
    const {
      username: r
    } = u.all();
    if (r) {
      const a = r.length > 0 ? r[0] : "";
      c(a);
    }
  }, []), /* @__PURE__ */ e.jsx(
    "div",
    {
      className: n(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${t}px] h-[${t}px]`,
        o
      ),
      children: /* @__PURE__ */ e.jsx("div", { className: n(
        // 'flex items-center justify-center',
      ), children: i })
    }
  );
}
function v({
  size: t = 32,
  className: o,
  type: i = "spin",
  fullscreen: c = !1
}) {
  d();
  const [r, a] = s.useState(!1);
  s.useEffect(() => (a(!0), () => a(!1)), []);
  const l = i === "breathe" ? /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ e.jsx(f, { className: n(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ e.jsx("style", { children: `
          @keyframes breathe {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.9);
            }
            20% {
              opacity: 1;
              transform: scale(1.1);
            }
            30% {
              opacity: 0.9;
              transform: scale(1.05);
            }
            50% {
              opacity: 0.5;
              transform: scale(0.95);
            }
            70% {
              opacity: 0.8;
              transform: scale(1.03);
            }
          }
        ` })
  ] }) : /* @__PURE__ */ e.jsx("div", { className: n(
    "text-brand-foreground",
    o
  ), children: /* @__PURE__ */ e.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: t,
      height: t,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ e.jsx("g", { children: /* @__PURE__ */ e.jsx(
        "circle",
        {
          strokeLinecap: "round",
          fill: "none",
          strokeDasharray: "50.26548245743669 50.26548245743669",
          stroke: "currentColor",
          strokeWidth: "8",
          r: "32",
          cy: "50",
          cx: "50",
          children: /* @__PURE__ */ e.jsx(
            "animateTransform",
            {
              values: "0 50 50;360 50 50",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              type: "rotate",
              attributeName: "transform"
            }
          )
        }
      ) })
    }
  ) });
  return c && r ? m.createPortal(
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: l }),
    document.body
  ) : l;
}
export {
  v as L,
  d as u
};
