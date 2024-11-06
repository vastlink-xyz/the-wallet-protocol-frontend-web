import { j as t, a6 as l, a7 as d, a8 as f, a9 as n, aa as r, ab as p, ac as g, ad as x } from "./vendor-radix-CjL5_ZCn.js";
import { a as i } from "./vendor-react-D6ZgZFQ5.js";
import "./main-BJkbpKmW.js";
import { c as o } from "./style-CX3mXOu3.js";
import { X as u } from "./vendor-ui-utils-CwlQOkPE.js";
const C = p, T = x, y = g, c = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  l,
  {
    ref: s,
    className: o(
      "fixed inset-0 z-[10000] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...e
  }
));
c.displayName = l.displayName;
const N = i.forwardRef(({ className: a, children: e, ...s }, m) => /* @__PURE__ */ t.jsxs(y, { children: [
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
          /* @__PURE__ */ t.jsx(u, { className: "h-4 w-4" }),
          /* @__PURE__ */ t.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
N.displayName = d.displayName;
const j = ({
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
j.displayName = "DialogHeader";
const D = ({
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
D.displayName = "DialogFooter";
const b = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
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
b.displayName = n.displayName;
const h = i.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  r,
  {
    ref: s,
    className: o("text-sm text-muted-foreground", a),
    ...e
  }
));
h.displayName = r.displayName;
export {
  C as D,
  N as a,
  j as b,
  b as c,
  h as d,
  D as e,
  T as f
};
