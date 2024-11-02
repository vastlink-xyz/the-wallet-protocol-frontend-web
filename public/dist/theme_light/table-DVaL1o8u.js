import { j as o } from "./vendor-radix-CjL5_ZCn.js";
import { a as s } from "./vendor-react-D6ZgZFQ5.js";
import "./main-DrvVrxeO.js";
import { c as r } from "./style-CX3mXOu3.js";
const l = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ o.jsx(
  "table",
  {
    ref: t,
    className: r("w-full caption-bottom text-sm", a),
    ...e
  }
) }));
l.displayName = "Table";
const d = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx("thead", { ref: t, className: r("[&_tr]:border-b", a), ...e }));
d.displayName = "TableHeader";
const m = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "tbody",
  {
    ref: t,
    className: r("[&_tr:last-child]:border-0", a),
    ...e
  }
));
m.displayName = "TableBody";
const b = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "tfoot",
  {
    ref: t,
    className: r(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      a
    ),
    ...e
  }
));
b.displayName = "TableFooter";
const c = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "tr",
  {
    ref: t,
    className: r(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      a
    ),
    ...e
  }
));
c.displayName = "TableRow";
const i = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "th",
  {
    ref: t,
    className: r(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      a
    ),
    ...e
  }
));
i.displayName = "TableHead";
const f = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "td",
  {
    ref: t,
    className: r("p-4 align-middle [&:has([role=checkbox])]:pr-0", a),
    ...e
  }
));
f.displayName = "TableCell";
const n = s.forwardRef(({ className: a, ...e }, t) => /* @__PURE__ */ o.jsx(
  "caption",
  {
    ref: t,
    className: r("mt-4 text-sm text-muted-foreground", a),
    ...e
  }
));
n.displayName = "TableCaption";
export {
  l as T,
  d as a,
  c as b,
  i as c,
  m as d,
  f as e
};
