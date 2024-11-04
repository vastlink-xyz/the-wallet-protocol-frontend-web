import { j as e } from "./vendor-radix-DcfHr-b-.js";
import { d as ae, L as re, e as L, f as oe } from "./vendor-ui-utils-D8A1AlyV.js";
import { r } from "./vendor-react-Cqw-pUgZ.js";
import { l as p, e as V } from "./main-69rK11_z.js";
import { c as j } from "./style-JRa9Y8f9.js";
import { f as ne } from "./transaction-CEOvBeKV.js";
import { h as U } from "./error-BOjt9hlf.js";
import { D as ie, a as le, c as de } from "./dialog-DBrRisNr.js";
import { B as q } from "./button-CTahMASr.js";
import { I as P } from "./input-e7uWnFsp.js";
import { u as ce, B as g } from "./vendor-utils-BEOEHg0B.js";
import { T as me } from "./TokenService-hl2efiyX.js";
import { L as ue } from "./index-3BRCbPgh.js";
import { T as fe } from "./transaction-Dz01ddzF.js";
import { k as xe } from "./index-D2MaAw-U.js";
import { a as $ } from "./index-Ds-PW5Mo.js";
import { c as _, p as G } from "./vendor-web3-DM8VQNRv.js";
function Ie({ onClick: i }) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      title: "Send",
      className: "bg-foreground hover:bg-foreground/80 rounded-full w-[48px] h-[48px] flex items-center justify-center mr-4 cursor-pointer text-primary-foreground",
      onClick: i,
      children: /* @__PURE__ */ e.jsx(ae, {})
    }
  );
}
const H = r.forwardRef(
  ({ className: i, ...d }, c) => /* @__PURE__ */ e.jsx(
    "textarea",
    {
      className: j(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      ref: c,
      ...d
    }
  )
);
H.displayName = "Textarea";
function Re({
  open: i,
  setOpen: d,
  balance: c,
  address: J,
  tokenType: y,
  defaultTo: S,
  defaultAmount: M,
  defaultNote: E,
  onClose: z
}) {
  const [l, w] = r.useState(""), [m, N] = r.useState(""), [T, C] = r.useState(""), [D, v] = r.useState(!1), [K, Q] = r.useState(""), F = r.useRef(), [h, I] = r.useState(!1), [b, u] = r.useState(!1), [R, f] = r.useState(""), [o, x] = r.useState(""), { t } = ce();
  r.useEffect(() => {
    if (i) {
      const s = me.getInstance().createToken(y);
      F.current = s, Q(F.current.symbol);
    }
  }, [i]), r.useEffect(() => {
    i && (S && w(S), M && N(M), E && C(E));
  }, [S, M, E, i]), r.useEffect(() => {
    !i && z && z();
  }, [i]);
  const A = r.useMemo(() => !l || !m || D || !b || h || !!o && o !== t("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(m) > parseFloat(c), [l, m, D, b, h, o, c]), W = async (s) => {
    if (_(l))
      u(!0), f(""), x("");
    else {
      I(!0), x("");
      try {
        const a = await $.get("/address/", {
          params: { email: s }
        });
        a.data.success ? (u(!0), f(a.data.address)) : V.test(s) ? (u(!0), f(""), x(t("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (u(!1), f(""), x(t("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        I(!1);
      }
    }
  }, X = () => {
    p("to", l), l ? W(l) : (u(!1), f(""), x(""));
  };
  async function Y(s) {
    try {
      const a = G(m).toString();
      p("amt", a), v(!0);
      const {
        needOtp: n,
        hash: k,
        message: te
      } = await xe.signTransaction({
        toAddress: s,
        amount: a,
        token: y,
        note: T,
        transactionType: fe.TRANSFER
      });
      k ? (d(!1), O(k)) : n && (g.error(te), d(!1));
    } catch (a) {
      const n = U(a);
      p("errorInfo", n), g.error(n.message);
    } finally {
      v(!1);
    }
  }
  const Z = (s) => {
    var n;
    const a = `${(n = F.current) == null ? void 0 : n.openUrl}/${s}`;
    window.open(a, "_blank");
  }, O = (s) => {
    g(
      /* @__PURE__ */ e.jsx("div", { className: "w-full", children: /* @__PURE__ */ e.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e.jsx(L, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ e.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ e.jsx(
            q,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Z(s);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, ee = async (s) => {
    if (s.preventDefault(), !A)
      try {
        v(!0);
        let a, n;
        if (_(l))
          a = l;
        else if (V.test(l) && o === t("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          n = l;
          const k = await $.post("/invite/invite-register", {
            toEmail: n,
            from: J,
            amount: G(m).toString(),
            token: y,
            note: T
          });
          p("res", k), g.success(t("/dashboard.[token].sendModal.emailSentToUnregistered")), B(), d(!1);
          return;
        } else
          a = R;
        await Y(a), B(), d(!1);
      } catch (a) {
        const n = U(a);
        p("errorInfo", n), g.error(t("/dashboard.[token].sendModal.sendError"));
      } finally {
        v(!1);
      }
  }, se = async () => {
    N(c);
  }, B = () => {
    N(""), w(""), C(""), f(""), x(""), u(!1), I(!1);
  };
  return /* @__PURE__ */ e.jsx(ie, { open: i, onOpenChange: (s) => {
    d(s), B();
  }, children: /* @__PURE__ */ e.jsxs(le, { className: "w-[360px] text-primary", children: [
    /* @__PURE__ */ e.jsx(de, { className: "mb-4", children: t("/dashboard.[token].sendModal.title") }),
    /* @__PURE__ */ e.jsxs(
      "form",
      {
        onSubmit: (s) => ee(s),
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ e.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: t("/dashboard.[token].sendModal.to") }),
            /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsx(
                P,
                {
                  value: l,
                  onChange: (s) => w(s.target.value.trim()),
                  onBlur: X,
                  id: "to",
                  required: !0,
                  placeholder: t("/dashboard.[token].sendModal.toPlaceholder"),
                  className: j(
                    b && "border-green-500",
                    o && "border-destructive",
                    o === t("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                    "pr-10"
                  )
                }
              ),
              h && /* @__PURE__ */ e.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ e.jsx(re, { className: "animate-spin", size: 16 }) }),
              b && !h && !o && /* @__PURE__ */ e.jsx(L, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
              o && !h && /* @__PURE__ */ e.jsx(oe, { className: j(
                "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
                o === t("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
              ), size: 16 })
            ] }),
            b && R && /* @__PURE__ */ e.jsx("p", { className: "mt-1 text-xs text-primary/60", children: R }),
            o && /* @__PURE__ */ e.jsx("p", { className: j(
              "mt-1 text-xs text-destructive",
              o === t("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
            ), children: o })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: t("/dashboard.[token].sendModal.amount") }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-xs mb-2 text-primary/60", children: [
                t("/dashboard.[token].sendModal.balance"),
                ": ",
                ne(c),
                " ",
                K
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsx(
                P,
                {
                  value: m,
                  onChange: (s) => N(s.target.value.trim()),
                  type: "number",
                  id: "amount",
                  className: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  required: !0
                }
              ),
              /* @__PURE__ */ e.jsx(
                "p",
                {
                  className: "absolute end-2.5 bottom-2.5 cursor-pointer text-brand-foreground",
                  onClick: () => se(),
                  children: "Max"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ e.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: t("/dashboard.[token].sendModal.note") }),
            /* @__PURE__ */ e.jsx("div", { className: "relative", children: /* @__PURE__ */ e.jsx(
              H,
              {
                className: " focus-visible:ring-0",
                id: "note",
                value: T,
                onChange: (s) => C(s.target.value)
              }
            ) })
          ] }),
          /* @__PURE__ */ e.jsx(
            q,
            {
              className: j(
                "w-full"
              ),
              disabled: A,
              children: D ? /* @__PURE__ */ e.jsx("div", { className: "", children: /* @__PURE__ */ e.jsx(ue, {}) }) : /* @__PURE__ */ e.jsx("span", { children: t("/dashboard.[token].sendModal.title") })
            }
          )
        ]
      }
    )
  ] }) });
}
export {
  Re as S,
  Ie as a
};
