import { J as A, K as G, V as L, j as e, M as g, N as M, O as j, Q as N, U as Y, W as y, X as _, Y as w, Z as S, $, a0 as q, a1 as b } from "./vendor-radix-AvjOLIap.js";
import { a as n } from "./vendor-react-DSEtE0wE.js";
import { c as d, a as J, I as K, B as p, f as h, g as f } from "./main-BuTZCSfy.js";
import { C as O } from "./card-BOtAAOIG.js";
import { h as v, m as Q, d as W, T as X, n as Z } from "./vendor-ui-utils-CGOon9_P.js";
import { v as x } from "./vendor-utils-BPVAmMsZ.js";
const F = A, H = G, ee = L, C = n.forwardRef(({ className: s, children: r, ...l }, c) => /* @__PURE__ */ e.jsxs(
  g,
  {
    ref: c,
    className: d(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      s
    ),
    ...l,
    children: [
      r,
      /* @__PURE__ */ e.jsx(M, { asChild: !0, children: /* @__PURE__ */ e.jsx(v, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
C.displayName = g.displayName;
const V = n.forwardRef(({ className: s, ...r }, l) => /* @__PURE__ */ e.jsx(
  j,
  {
    ref: l,
    className: d(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...r,
    children: /* @__PURE__ */ e.jsx(Q, { className: "h-4 w-4" })
  }
));
V.displayName = j.displayName;
const R = n.forwardRef(({ className: s, ...r }, l) => /* @__PURE__ */ e.jsx(
  N,
  {
    ref: l,
    className: d(
      "flex cursor-default items-center justify-center py-1",
      s
    ),
    ...r,
    children: /* @__PURE__ */ e.jsx(v, { className: "h-4 w-4" })
  }
));
R.displayName = N.displayName;
const B = n.forwardRef(({ className: s, children: r, position: l = "popper", ...c }, m) => /* @__PURE__ */ e.jsx(Y, { children: /* @__PURE__ */ e.jsxs(
  y,
  {
    ref: m,
    className: d(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      l === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      s
    ),
    position: l,
    ...c,
    children: [
      /* @__PURE__ */ e.jsx(V, {}),
      /* @__PURE__ */ e.jsx(
        _,
        {
          className: d(
            "p-1",
            l === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ e.jsx(R, {})
    ]
  }
) }));
B.displayName = y.displayName;
const se = n.forwardRef(({ className: s, ...r }, l) => /* @__PURE__ */ e.jsx(
  w,
  {
    ref: l,
    className: d("py-1.5 pl-8 pr-2 text-sm font-semibold", s),
    ...r
  }
));
se.displayName = w.displayName;
const I = n.forwardRef(({ className: s, children: r, ...l }, c) => /* @__PURE__ */ e.jsxs(
  S,
  {
    ref: c,
    className: d(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      s
    ),
    ...l,
    children: [
      /* @__PURE__ */ e.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx($, { children: /* @__PURE__ */ e.jsx(W, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ e.jsx(q, { children: r })
    ]
  }
));
I.displayName = S.displayName;
const ae = n.forwardRef(({ className: s, ...r }, l) => /* @__PURE__ */ e.jsx(
  b,
  {
    ref: l,
    className: d("-mx-1 my-1 h-px bg-muted", s),
    ...r
  }
));
ae.displayName = b.displayName;
function de() {
  const [s, r] = n.useState([]), [l, c] = n.useState(1);
  n.useState(!1), n.useEffect(() => {
    m();
  }, []);
  const m = async () => {
    const { address: a, username: t } = J.all();
    r([{
      id: x(),
      email: t,
      address: a,
      isValid: !0
    }]);
  }, T = () => {
    const a = {
      address: "",
      email: "",
      id: x(),
      isValid: !0
    }, t = [...s, a];
    r(t);
  }, k = (a, t) => {
    const i = [...s], o = i[a];
    o.email = t, r(i);
  }, z = async () => {
    try {
      const a = await h.post("/multisig/create", {
        signers: s.map((t) => ({ email: t.email, address: t.address })),
        threshold: l
      });
      f("res", a.data);
    } catch (a) {
      f("err", a);
    }
  }, D = async (a, t) => {
    if (!t)
      return;
    const i = [...s], o = i[a];
    try {
      const u = await h.get("/address/", {
        params: { email: t }
      });
      if (u.data.success) {
        const P = u.data.address;
        o.address = P, o.isValid = !0;
      } else
        o.address = "Not found", o.isValid = !1;
    } catch {
      o.isValid = !1, o.address = "Not found";
    } finally {
      r(i);
    }
  }, U = (a) => {
    if (s.length <= 1) {
      alert("You must have at least one signer.");
      return;
    }
    const t = s.filter((i, o) => o !== a);
    r(t);
  }, E = (a) => {
    c(Number(a));
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs(O, { className: "p-8", children: [
    /* @__PURE__ */ e.jsx("p", { className: "text-primary/60 mb-12", children: "Set the signer wallets of your multisig wallet account and how many need to confirm to execute a valid transaction." }),
    /* @__PURE__ */ e.jsx("h2", { className: "mb-6 font-bold text-2xl", children: "Signers" }),
    s.map((a, t) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "flex items-center mb-8",
        children: [
          /* @__PURE__ */ e.jsxs("p", { className: "w-[120px]", children: [
            "Singer ",
            t + 1
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative w-1/2", children: [
            /* @__PURE__ */ e.jsx(
              K,
              {
                value: a.email,
                onBlur: (i) => D(t, i.target.value),
                onChange: (i) => k(t, i.target.value),
                required: !0
              }
            ),
            /* @__PURE__ */ e.jsx("p", { className: "absolute mt-1 text-xs text-primary/60", children: a.address }),
            /* @__PURE__ */ e.jsx("p", { className: `absolute mt-1 text-xs ${a.isValid === !1 ? "text-destructive" : "text-primary/60"}`, children: a.address })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "ml-4 cursor-pointer text-destructive", onClick: () => U(t), children: /* @__PURE__ */ e.jsx(X, { size: 20, className: "hover:scale-105" }) })
        ]
      },
      a.id
    )),
    /* @__PURE__ */ e.jsxs(p, { onClick: () => T(), size: "sm", children: [
      /* @__PURE__ */ e.jsx(Z, { className: "mr-2", size: 18 }),
      "Add New Signer"
    ] }),
    /* @__PURE__ */ e.jsx("h2", { className: "mb-4 mt-10 font-bold text-2xl", children: "Threshold" }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ e.jsxs(F, { onValueChange: E, value: l.toString(), children: [
        /* @__PURE__ */ e.jsx(C, { className: "w-[60px]", children: /* @__PURE__ */ e.jsx(ee, { placeholder: "Select threshold" }) }),
        /* @__PURE__ */ e.jsx(B, { children: /* @__PURE__ */ e.jsx(H, { children: s.map((a, t) => /* @__PURE__ */ e.jsx(I, { value: (t + 1).toString(), children: t + 1 }, t + 1)) }) })
      ] }),
      /* @__PURE__ */ e.jsxs("p", { className: "ml-4", children: [
        "out of ",
        s.length,
        " signer(s)"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-end items-center mt-8", children: /* @__PURE__ */ e.jsx(p, { onClick: () => z(), children: "Save" }) })
  ] }) });
}
export {
  de as default
};
