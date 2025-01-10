import { j as n } from "./vendor-radix-BYJ0AyiX.js";
import { r as d } from "./vendor-react-CuOkI7kW.js";
import { t as v, g as p, k as B, h as C, a4 as c, f as N, B as H } from "./main-B1SHNhU7.js";
import { B as l } from "./vendor-utils-BfzDPiRN.js";
import { u as I } from "./vendor-web3-DDgB3Js4.js";
import { f as P } from "./vendor-ui-utils-2_WY-nJY.js";
const M = () => {
  const [h, m] = d.useState(!1), u = d.useRef(), T = async ({
    to: e,
    amount: s,
    data: t,
    token: a = c.ETH,
    transactionType: i,
    note: w,
    isNotifySubmit: y = !0,
    isNotifyOtp: E = !0,
    isNotifyError: j = !0
  }) => {
    u.current = v.getToken(a);
    try {
      const r = I(s).toString();
      p("amt", r), m(!0);
      const o = await B.signTransaction({
        toAddress: e,
        amount: r,
        token: a,
        transactionType: i,
        note: w
      }), {
        needOtp: S,
        hash: f,
        message: b
      } = o;
      return f ? y && k(f) : S && E && l.error(b), o;
    } catch (r) {
      if (j) {
        const o = C(r);
        l.error(o.message);
      } else
        throw r;
    } finally {
      m(!1);
    }
  }, x = async (e) => {
    const s = "/transaction/execution-status";
    let t;
    for (; ; ) {
      const a = await N.post(s, {
        transactionId: e
      });
      if (p("data", a.data), t = a.data, t.hash)
        break;
      await new Promise((i) => setTimeout(i, 5e3));
    }
    return t.hash;
  }, g = (e) => {
    var t;
    const s = `${(t = u.current) == null ? void 0 : t.scanTransactionUrl}/${e}`;
    window.open(s, "_blank");
  }, k = (e) => {
    l(
      /* @__PURE__ */ n.jsx("div", { className: "w-full", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n.jsx(P, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ n.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ n.jsx(
            H,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => g(e),
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  };
  return { signTransaction: T, sending: h, waitForTransactionExection: x, tokenTypeByChainId: (e) => e === "eip155:11155111" ? c.ETH : c.ETH };
};
export {
  M as u
};
