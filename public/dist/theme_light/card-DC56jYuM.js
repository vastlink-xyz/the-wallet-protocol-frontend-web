import { j as s } from "./vendor-radix-nT--cb5B.js";
import { r as d } from "./vendor-react-CwfAKKXk.js";
import { c as t } from "./main-BgKFo9t1.js";
const o = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: t(
      "rounded-3xl bg-card text-card-foreground p-4 shadow-sm",
      a
    ),
    ...e
  }
));
o.displayName = "Card";
const i = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: t("flex flex-col space-y-1.5 md:p-6 px-6 py-2", a),
    ...e
  }
));
i.displayName = "CardHeader";
const m = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "h3",
  {
    ref: r,
    className: t(
      "text-2xl font-semibold leading-none tracking-tight",
      a
    ),
    ...e
  }
));
m.displayName = "CardTitle";
const c = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "p",
  {
    ref: r,
    className: t("text-sm text-muted-foreground", a),
    ...e
  }
));
c.displayName = "CardDescription";
const p = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx("div", { ref: r, className: t("p-6 pt-0", a), ...e }));
p.displayName = "CardContent";
const n = d.forwardRef(({ className: a, ...e }, r) => /* @__PURE__ */ s.jsx(
  "div",
  {
    ref: r,
    className: t("flex items-center p-6 pt-0", a),
    ...e
  }
));
n.displayName = "CardFooter";
export {
  o as C,
  i as a,
  m as b,
  p as c,
  n as d
};
