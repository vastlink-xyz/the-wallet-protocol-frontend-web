import { x as B, y as M, A as O, j as n, B as w, D as P, E as H, F as K, G as L } from "./vendor-radix-D0lo_cKZ.js";
import { r as s } from "./vendor-react-CA5sEv1f.js";
import { c as j } from "./main-B77raCsP.js";
import { a as q } from "./vendor-ui-utils-BGnsFFgj.js";
var g = "Checkbox", [z, W] = B(g), [F, T] = z(g), N = s.forwardRef(
  (e, i) => {
    const {
      __scopeCheckbox: t,
      name: u,
      checked: p,
      defaultChecked: o,
      required: h,
      disabled: d,
      value: m = "on",
      onCheckedChange: x,
      form: l,
      ...C
    } = e, [a, k] = s.useState(null), v = M(i, (r) => k(r)), y = s.useRef(!1), R = a ? l || !!a.closest("form") : !0, [f = !1, E] = O({
      prop: p,
      defaultProp: o,
      onChange: x
    }), A = s.useRef(f);
    return s.useEffect(() => {
      const r = a == null ? void 0 : a.form;
      if (r) {
        const b = () => E(A.current);
        return r.addEventListener("reset", b), () => r.removeEventListener("reset", b);
      }
    }, [a, E]), /* @__PURE__ */ n.jsxs(F, { scope: t, state: f, disabled: d, children: [
      /* @__PURE__ */ n.jsx(
        w.button,
        {
          type: "button",
          role: "checkbox",
          "aria-checked": c(f) ? "mixed" : f,
          "aria-required": h,
          "data-state": D(f),
          "data-disabled": d ? "" : void 0,
          disabled: d,
          value: m,
          ...C,
          ref: v,
          onKeyDown: P(e.onKeyDown, (r) => {
            r.key === "Enter" && r.preventDefault();
          }),
          onClick: P(e.onClick, (r) => {
            E((b) => c(b) ? !0 : !b), R && (y.current = r.isPropagationStopped(), y.current || r.stopPropagation());
          })
        }
      ),
      R && /* @__PURE__ */ n.jsx(
        X,
        {
          control: a,
          bubbles: !y.current,
          name: u,
          value: m,
          checked: f,
          required: h,
          disabled: d,
          form: l,
          style: { transform: "translateX(-100%)" },
          defaultChecked: c(o) ? !1 : o
        }
      )
    ] });
  }
);
N.displayName = g;
var S = "CheckboxIndicator", I = s.forwardRef(
  (e, i) => {
    const { __scopeCheckbox: t, forceMount: u, ...p } = e, o = T(S, t);
    return /* @__PURE__ */ n.jsx(H, { present: u || c(o.state) || o.state === !0, children: /* @__PURE__ */ n.jsx(
      w.span,
      {
        "data-state": D(o.state),
        "data-disabled": o.disabled ? "" : void 0,
        ...p,
        ref: i,
        style: { pointerEvents: "none", ...e.style }
      }
    ) });
  }
);
I.displayName = S;
var X = (e) => {
  const { control: i, checked: t, bubbles: u = !0, defaultChecked: p, ...o } = e, h = s.useRef(null), d = K(t), m = L(i);
  s.useEffect(() => {
    const l = h.current, C = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(C, "checked").set;
    if (d !== t && k) {
      const v = new Event("click", { bubbles: u });
      l.indeterminate = c(t), k.call(l, c(t) ? !1 : t), l.dispatchEvent(v);
    }
  }, [d, t, u]);
  const x = s.useRef(c(t) ? !1 : t);
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      type: "checkbox",
      "aria-hidden": !0,
      defaultChecked: p ?? x.current,
      ...o,
      tabIndex: -1,
      ref: h,
      style: {
        ...e.style,
        ...m,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function c(e) {
  return e === "indeterminate";
}
function D(e) {
  return c(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var _ = N, G = I;
const $ = s.forwardRef(({ className: e, ...i }, t) => /* @__PURE__ */ n.jsx(
  _,
  {
    ref: t,
    className: j(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...i,
    children: /* @__PURE__ */ n.jsx(
      G,
      {
        className: j("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ n.jsx(q, { className: "h-4 w-4" })
      }
    )
  }
));
$.displayName = _.displayName;
export {
  $ as C
};
