import { j as t, a2 as S, a3 as x, a4 as I, a5 as R } from "./vendor-radix-AvjOLIap.js";
import { a as r } from "./vendor-react-DSEtE0wE.js";
import { c as d, B as E, f as c } from "./main-DuqIT5w7.js";
import { H as o, p as P, q as T, d as _ } from "./vendor-ui-utils-CGOon9_P.js";
import "./dialog-pYRTa9jD.js";
const h = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  o,
  {
    ref: s,
    className: d(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      a
    ),
    ...e
  }
));
h.displayName = o.displayName;
const y = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ t.jsx(P, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ t.jsx(
    o.Input,
    {
      ref: s,
      className: d(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...e
    }
  )
] }));
y.displayName = o.Input.displayName;
const w = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  o.List,
  {
    ref: s,
    className: d("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
    ...e
  }
));
w.displayName = o.List.displayName;
const g = r.forwardRef((a, e) => /* @__PURE__ */ t.jsx(
  o.Empty,
  {
    ref: e,
    className: "py-6 text-center text-sm",
    ...a
  }
));
g.displayName = o.Empty.displayName;
const N = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  o.Group,
  {
    ref: s,
    className: d(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      a
    ),
    ...e
  }
));
N.displayName = o.Group.displayName;
const L = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  o.Separator,
  {
    ref: s,
    className: d("-mx-1 h-px bg-border", a),
    ...e
  }
));
L.displayName = o.Separator.displayName;
const j = r.forwardRef(({ className: a, ...e }, s) => /* @__PURE__ */ t.jsx(
  o.Item,
  {
    ref: s,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      a
    ),
    ...e
  }
));
j.displayName = o.Item.displayName;
const B = I, O = R, b = r.forwardRef(({ className: a, align: e = "center", sideOffset: s = 4, ...i }, n) => /* @__PURE__ */ t.jsx(S, { children: /* @__PURE__ */ t.jsx(
  x,
  {
    ref: n,
    align: e,
    sideOffset: s,
    className: d(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...i
  }
) }));
b.displayName = x.displayName;
function V({
  options: a,
  value: e,
  onValueChange: s,
  placeholder: i = "Select an option...",
  emptyMessage: n = "No option found."
}) {
  var u;
  const [m, p] = r.useState(!1);
  return /* @__PURE__ */ t.jsxs(B, { open: m, onOpenChange: p, children: [
    /* @__PURE__ */ t.jsx(O, { asChild: !0, children: /* @__PURE__ */ t.jsxs(
      E,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": m,
        className: "w-full justify-between",
        children: [
          e ? (u = a.find((l) => l.value === e)) == null ? void 0 : u.label : i,
          /* @__PURE__ */ t.jsx(T, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ t.jsx(b, { className: "w-full p-0", children: /* @__PURE__ */ t.jsxs(h, { children: [
      /* @__PURE__ */ t.jsx(y, { placeholder: i }),
      /* @__PURE__ */ t.jsxs(w, { children: [
        /* @__PURE__ */ t.jsx(g, { children: n }),
        /* @__PURE__ */ t.jsx(N, { children: a.map((l) => /* @__PURE__ */ t.jsxs(
          j,
          {
            value: l.label,
            onSelect: (v) => {
              const f = a.find((C) => C.label === v);
              s(f ? f.value : ""), p(!1);
            },
            children: [
              /* @__PURE__ */ t.jsx(
                _,
                {
                  className: d(
                    "mr-2 h-4 w-4",
                    e === l.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              l.label
            ]
          },
          l.value
        )) })
      ] })
    ] }) })
  ] });
}
const k = async (a) => {
  let e = 0;
  const s = 15, i = async () => {
    if (e >= s)
      throw new Error("Verification timeout: Maximum polling attempts reached");
    e++;
    const { data: n } = await c.get(`/marketplace/product/frankieone/task-status/${a}`);
    if (n.status === "completed")
      return n.result;
    if (n.status === "failed")
      throw new Error(n.error || "Verification failed");
    return await new Promise((m) => setTimeout(m, 1e4)), i();
  };
  return i();
}, $ = async (a) => {
  const { data: { taskId: e } } = await c.post("/marketplace/product/frankieone/international-business-profile", a);
  return { data: await k(e) };
}, q = async (a) => {
  const { data: { taskId: e } } = await c.get(`/marketplace/product/frankieone/international-business-entity-list?entityId=${a}`);
  return { data: await k(e) };
};
export {
  V as S,
  q as g,
  $ as v
};
