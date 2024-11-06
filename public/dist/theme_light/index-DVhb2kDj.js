import { j as e, a1 as C, a2 as u, a3 as R, a4 as S } from "./vendor-radix-D0lo_cKZ.js";
import { r } from "./vendor-react-CA5sEv1f.js";
import { c as d } from "./main-DgHGudCI.js";
import { B as k } from "./button-CWSBR28Y.js";
import { H as s, m as I, n as E, a as _ } from "./vendor-ui-utils-BGnsFFgj.js";
import "./dialog-DvZU10Ze.js";
const x = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsx(
  s,
  {
    ref: o,
    className: d(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      a
    ),
    ...t
  }
));
x.displayName = s.displayName;
const h = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ e.jsx(I, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ e.jsx(
    s.Input,
    {
      ref: o,
      className: d(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...t
    }
  )
] }));
h.displayName = s.Input.displayName;
const y = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsx(
  s.List,
  {
    ref: o,
    className: d("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
    ...t
  }
));
y.displayName = s.List.displayName;
const N = r.forwardRef((a, t) => /* @__PURE__ */ e.jsx(
  s.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...a
  }
));
N.displayName = s.Empty.displayName;
const g = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsx(
  s.Group,
  {
    ref: o,
    className: d(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      a
    ),
    ...t
  }
));
g.displayName = s.Group.displayName;
const P = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsx(
  s.Separator,
  {
    ref: o,
    className: d("-mx-1 h-px bg-border", a),
    ...t
  }
));
P.displayName = s.Separator.displayName;
const j = r.forwardRef(({ className: a, ...t }, o) => /* @__PURE__ */ e.jsx(
  s.Item,
  {
    ref: o,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      a
    ),
    ...t
  }
));
j.displayName = s.Item.displayName;
const z = R, G = S, w = r.forwardRef(({ className: a, align: t = "center", sideOffset: o = 4, ...l }, m) => /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx(
  u,
  {
    ref: m,
    align: t,
    sideOffset: o,
    className: d(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...l
  }
) }));
w.displayName = u.displayName;
function U({
  options: a,
  value: t,
  onValueChange: o,
  placeholder: l = "Select an option...",
  emptyMessage: m = "No option found."
}) {
  var c;
  const [i, p] = r.useState(!1);
  return /* @__PURE__ */ e.jsxs(z, { open: i, onOpenChange: p, children: [
    /* @__PURE__ */ e.jsx(G, { asChild: !0, children: /* @__PURE__ */ e.jsxs(
      k,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": i,
        className: "w-full justify-between",
        children: [
          t ? (c = a.find((n) => n.value === t)) == null ? void 0 : c.label : l,
          /* @__PURE__ */ e.jsx(E, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e.jsx(w, { className: "w-full p-0", children: /* @__PURE__ */ e.jsxs(x, { children: [
      /* @__PURE__ */ e.jsx(h, { placeholder: l }),
      /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx(N, { children: m }),
        /* @__PURE__ */ e.jsx(g, { children: a.map((n) => /* @__PURE__ */ e.jsxs(
          j,
          {
            value: n.label,
            onSelect: (b) => {
              const f = a.find((v) => v.label === b);
              o(f ? f.value : ""), p(!1);
            },
            children: [
              /* @__PURE__ */ e.jsx(
                _,
                {
                  className: d(
                    "mr-2 h-4 w-4",
                    t === n.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              n.label
            ]
          },
          n.value
        )) })
      ] })
    ] }) })
  ] });
}
export {
  U as S
};
