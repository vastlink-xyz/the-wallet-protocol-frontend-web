import { j as e, S as W, g as Y, P as ye, i as Z, I as O, k as ee, l as se, m as ae, n as te, o as oe, p as ve, q as we } from "./vendor-radix-CtBTfL6E.js";
import { r as t, b as ke } from "./vendor-react-lU71vM3H.js";
import { c as d, b as j, e as q, d as U, h as X } from "./main-BiNWeoEw.js";
import { f as _, k as Se } from "./index-DZmehw99.js";
import { B as G } from "./button-ClT0lWkU.js";
import { I as H } from "./input-CnzYCm7W.js";
import { u as Me, B as y } from "./vendor-utils-CKvC_yGz.js";
import { T as ne } from "./TokenService-BJInqoec.js";
import { L as Ee } from "./index-BjYMiP7I.js";
import { T as Te } from "./transaction-Dz01ddzF.js";
import { d as Ce, e as Re, f as Ie, X as De, L as Be, g as J, h as ze, C as Fe } from "./vendor-ui-utils-i3zS6aVb.js";
import { c as K, p as Q } from "./vendor-web3-N5LxOC8E.js";
const Ae = ve, Le = we, Pe = t.forwardRef(({ className: a, inset: o, children: n, ...i }, f) => /* @__PURE__ */ e.jsxs(
  W,
  {
    ref: f,
    className: d(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      o && "pl-8",
      a
    ),
    ...i,
    children: [
      n,
      /* @__PURE__ */ e.jsx(Ce, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Pe.displayName = W.displayName;
const Ve = t.forwardRef(({ className: a, ...o }, n) => /* @__PURE__ */ e.jsx(
  Y,
  {
    ref: n,
    className: d(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...o
  }
));
Ve.displayName = Y.displayName;
const re = t.forwardRef(({ className: a, sideOffset: o = 4, ...n }, i) => /* @__PURE__ */ e.jsx(ye, { children: /* @__PURE__ */ e.jsx(
  Z,
  {
    ref: i,
    sideOffset: o,
    className: d(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a
    ),
    ...n
  }
) }));
re.displayName = Z.displayName;
const le = t.forwardRef(({ className: a, inset: o, ...n }, i) => /* @__PURE__ */ e.jsx(
  O,
  {
    ref: i,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      o && "pl-8",
      a
    ),
    ...n
  }
));
le.displayName = O.displayName;
const $e = t.forwardRef(({ className: a, children: o, checked: n, ...i }, f) => /* @__PURE__ */ e.jsxs(
  ee,
  {
    ref: f,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a
    ),
    checked: n,
    ...i,
    children: [
      /* @__PURE__ */ e.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(se, { children: /* @__PURE__ */ e.jsx(Re, { className: "h-4 w-4" }) }) }),
      o
    ]
  }
));
$e.displayName = ee.displayName;
const qe = t.forwardRef(({ className: a, children: o, ...n }, i) => /* @__PURE__ */ e.jsxs(
  ae,
  {
    ref: i,
    className: d(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a
    ),
    ...n,
    children: [
      /* @__PURE__ */ e.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e.jsx(se, { children: /* @__PURE__ */ e.jsx(Ie, { className: "h-2 w-2 fill-current" }) }) }),
      o
    ]
  }
));
qe.displayName = ae.displayName;
const Ue = t.forwardRef(({ className: a, inset: o, ...n }, i) => /* @__PURE__ */ e.jsx(
  te,
  {
    ref: i,
    className: d(
      "px-2 py-1.5 text-sm font-semibold",
      o && "pl-8",
      a
    ),
    ...n
  }
));
Ue.displayName = te.displayName;
const Xe = t.forwardRef(({ className: a, ...o }, n) => /* @__PURE__ */ e.jsx(
  oe,
  {
    ref: n,
    className: d("-mx-1 my-1 h-px bg-muted", a),
    ...o
  }
));
Xe.displayName = oe.displayName;
const ie = t.forwardRef(
  ({ className: a, ...o }, n) => /* @__PURE__ */ e.jsx(
    "textarea",
    {
      className: d(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ref: n,
      ...o
    }
  )
);
ie.displayName = "Textarea";
const _e = ne.getInstance().getAllTokenTypes();
function ts({
  open: a,
  setOpen: o,
  balance: n,
  address: i,
  tokenType: f,
  defaultTo: k,
  defaultAmount: S,
  defaultNote: M,
  onClose: L
}) {
  const [u, E] = t.useState(""), [p, T] = t.useState(""), [C, R] = t.useState(""), [I, v] = t.useState(!1), [de, ce] = t.useState(""), w = t.useRef(), [D, me] = t.useState(f), [B, ue] = t.useState("0"), [g, z] = t.useState(!1), [N, x] = t.useState(!1), [F, b] = t.useState(""), [m, h] = t.useState(""), { t: l } = Me();
  t.useEffect(() => {
    a ? V(f) : A();
  }, [a]), t.useEffect(() => {
    a && (k && E(k), S && T(S), M && R(M));
  }, [k, S, M, a]), t.useEffect(() => {
    !a && L && L();
  }, [a]);
  const P = t.useMemo(() => !u || !p || I || !N || g || !!m && m !== l("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(p) > parseFloat(B), [u, p, I, N, g, m, B]), V = async (s) => {
    me(s);
    const r = ne.getInstance().createToken(s);
    w.current = r, ce(w.current.symbol);
    let c = await w.current.getBalance(i);
    c = _(c), ue(c);
  }, fe = async (s) => {
    if (K(u))
      x(!0), b(""), h("");
    else {
      z(!0), h("");
      try {
        const r = await U.get("/address/", {
          params: { email: s }
        });
        r.data.success ? (x(!0), b(r.data.address)) : q.test(s) ? (x(!0), b(""), h(l("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (x(!1), b(""), h(l("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        z(!1);
      }
    }
  }, pe = () => {
    j("to", u), u ? fe(u) : (x(!1), b(""), h(""));
  };
  async function xe(s) {
    try {
      const r = Q(p).toString();
      j("amt", r), v(!0);
      const {
        needOtp: c,
        hash: $,
        message: je
      } = await Se.signTransaction({
        toAddress: s,
        amount: r,
        token: D,
        note: C,
        transactionType: Te.TRANSFER
      });
      $ ? (o(!1), he($)) : c && (y.error(je), o(!1));
    } catch (r) {
      const c = X(r);
      j("errorInfo", c), y.error(c.message);
    } finally {
      v(!1);
    }
  }
  const be = (s) => {
    var c;
    const r = `${(c = w.current) == null ? void 0 : c.openUrl}/${s}`;
    window.open(r, "_blank");
  }, he = (s) => {
    y(
      /* @__PURE__ */ e.jsx("div", { className: "w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx(J, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ e.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ e.jsx(
            G,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                be(s);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, ge = async () => {
    if (!P)
      try {
        v(!0);
        let s, r;
        if (K(u))
          s = u;
        else if (q.test(u) && m === l("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          r = u;
          const c = await U.post("/invite/invite-register", {
            toEmail: r,
            from: i,
            amount: Q(p).toString(),
            token: D,
            note: C
          });
          j("res", c), y.success(l("/dashboard.[token].sendModal.emailSentToUnregistered")), A(), o(!1);
          return;
        } else
          s = F;
        await xe(s), A(), o(!1);
      } catch (s) {
        const r = X(s);
        j("errorInfo", r), y.error(l("/dashboard.[token].sendModal.sendError"));
      } finally {
        v(!1);
      }
  }, A = () => {
    T(""), E(""), R(""), b(""), h(""), x(!1), z(!1);
  }, Ne = a ? /* @__PURE__ */ e.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ e.jsx("div", { className: d(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ e.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ e.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ e.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: l("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            onClick: () => o(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ e.jsx(De, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ e.jsxs("form", { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: l("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ e.jsx(
              H,
              {
                value: u,
                onChange: (s) => E(s.target.value.trim()),
                onBlur: pe,
                id: "to",
                required: !0,
                placeholder: l("/dashboard.[token].sendModal.toPlaceholder"),
                className: d(
                  N && "border-green-500",
                  m && "border-destructive",
                  m === l("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            g && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ e.jsx(Be, { className: "animate-spin", size: 16 }) }),
            N && !g && !m && /* @__PURE__ */ e.jsx(J, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            m && !g && /* @__PURE__ */ e.jsx(ze, { className: d(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              m === l("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          N && F && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-primary/60", children: F }),
          m && /* @__PURE__ */ e.jsx("p", { className: d(
            "mt-1 text-xs text-destructive",
            m === l("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: m })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ e.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: l("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ e.jsx(
              H,
              {
                value: p,
                onChange: (s) => T(s.target.value.trim()),
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ e.jsxs(Ae, { children: [
              /* @__PURE__ */ e.jsxs(Le, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ e.jsx("span", { className: "font-medium text-sm", children: D }),
                /* @__PURE__ */ e.jsx(Fe, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ e.jsx(re, { align: "start", className: "bg-white", children: _e.map((s) => /* @__PURE__ */ e.jsx(le, { onClick: () => V(s), children: s }, s)) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: l("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
            ie,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: C,
              onChange: (s) => R(s.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ e.jsxs("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
          "Crypto balance: ",
          _(B),
          " ",
          de
        ] }),
        /* @__PURE__ */ e.jsx(
          G,
          {
            onClick: ge,
            className: d("py-12px"),
            disabled: P,
            children: I ? /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsx(Ee, {}) }) : /* @__PURE__ */ e.jsx("span", { children: l("/dashboard.[token].sendModal.title") })
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return ke.createPortal(
      Ne,
      document.body
    );
}
export {
  Ae as D,
  ts as S,
  Le as a,
  re as b,
  le as c
};
