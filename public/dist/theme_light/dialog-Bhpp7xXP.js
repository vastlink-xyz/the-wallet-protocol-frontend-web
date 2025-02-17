import { j as t, a7 as l, a8 as d, a9 as f, aa as n, ab as r, ac as p, ad as g } from "./vendor-radix-nHPuu8ug.js";
import { a as i } from "./vendor-react-DG1r0zWq.js";
import { c as o } from "./main-ZrsMs0Kw.js";
import { X as x } from "./vendor-ui-utils-9-Ouo9pm.js";
const z = p, u = g, c = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  l,
  {
    ref: s,
    className: o(
      "fixed inset-0 z-[10000] bg-[#1f2533]/40  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...e
  }
));
c.displayName = l.displayName;
const y = i.forwardRef(({ className: a, children: e, ...s }, m) => /* @__PURE__ */ t.jsxs(u, { children: [
  /* @__PURE__ */ t.jsx(c, {}),
  /* @__PURE__ */ t.jsxs(
    d,
    {
      ref: m,
      className: o(
        "fixed left-[50%] top-[50%] z-[10001] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...s,
      children: [
        e,
        /* @__PURE__ */ t.jsxs(f, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-primary", children: [
          /* @__PURE__ */ t.jsx(x, { className: "h-4 w-4" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
y.displayName = d.displayName;
const N = ({
  className: a,
  ...e
}) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: o(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      a
    ),
    ...e
  }
);
N.displayName = "DialogHeader";
const j = ({
  className: a,
  ...e
}) => /* @__PURE__ */ t.jsx(
  "div",
  {
    className: o(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      a
    ),
    ...e
  }
);
j.displayName = "DialogFooter";
const D = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  n,
  {
    ref: s,
    className: o(
      "text-lg font-semibold leading-none tracking-tight",
      a
    ),
    ...e
  }
));
D.displayName = n.displayName;
const b = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  r,
  {
    ref: s,
    className: o("text-sm text-muted-foreground", a),
    ...e
  }
));
b.displayName = r.displayName;
export {
  z as D,
  y as a,
  N as b,
  D as c,
  b as d,
  j as e
};
