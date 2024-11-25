import { j as t } from "./vendor-radix-nT--cb5B.js";
import { r as o } from "./vendor-react-CwfAKKXk.js";
import { c as r } from "./main-Gzb6y-w8.js";
const l = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ t.jsx(
  "table",
  {
    ref: s,
    className: r("w-full caption-bottom text-sm", e),
    ...a
  }
) }));
l.displayName = "Table";
const d = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx("thead", { ref: s, className: r("[&_tr]:border-b", e), ...a }));
d.displayName = "TableHeader";
const m = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "tbody",
  {
    ref: s,
    className: r("[&_tr:last-child]:border-0", e),
    ...a
  }
));
m.displayName = "TableBody";
const b = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "tfoot",
  {
    ref: s,
    className: r(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...a
  }
));
b.displayName = "TableFooter";
const c = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "tr",
  {
    ref: s,
    className: r(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...a
  }
));
c.displayName = "TableRow";
const f = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "th",
  {
    ref: s,
    className: r(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...a
  }
));
f.displayName = "TableHead";
const i = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "td",
  {
    ref: s,
    className: r("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...a
  }
));
i.displayName = "TableCell";
const n = o.forwardRef(({ className: e, ...a }, s) => /* @__PURE__ */ t.jsx(
  "caption",
  {
    ref: s,
    className: r("mt-4 text-sm text-muted-foreground", e),
    ...a
  }
));
n.displayName = "TableCaption";
export {
  l as T,
  d as a,
  c as b,
  f as c,
  m as d,
  i as e
};
