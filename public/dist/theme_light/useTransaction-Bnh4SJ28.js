import { j as n } from "./vendor-radix-BMBq7gbN.js";
import { r as f } from "./vendor-react-BA5A8Axg.js";
import { T as B, g as d, k as C, h as N, f as S, B as v } from "./main-D5sRvz5I.js";
import { B as c } from "./vendor-utils-7AahqLO2.js";
import { p as I } from "./vendor-web3-CqtRdeC5.js";
import { f as H } from "./vendor-ui-utils-CNDLbdLA.js";
const M = () => {
  const [p, l] = f.useState(!1), m = f.useRef(), h = async ({
    to: e,
    amount: s,
    data: t,
    token: r = "ETH",
    transactionType: i,
    note: k,
    isNotifySubmit: w = !0,
    isNotifyOtp: y = !0,
    isNotifyError: E = !0
  }) => {
    m.current = B.getInstance().createToken(r);
    try {
      const a = I(s).toString();
      d("amt", a), l(!0);
      const o = await C.signTransaction({
        toAddress: e,
        amount: a,
        token: r,
        transactionType: i,
        note: k
      }), {
        needOtp: j,
        hash: u,
        message: b
      } = o;
      return u ? w && g(u) : j && y && c.error(b), o;
    } catch (a) {
      if (E) {
        const o = N(a);
        c.error(o.message);
      } else
        throw a;
    } finally {
      l(!1);
    }
  }, T = async (e) => {
    const s = "/transaction/execution-status";
    let t;
    for (; ; ) {
      const r = await S.post(s, {
        transactionId: e
      });
      if (d("data", r.data), t = r.data, t.hash)
        break;
      await new Promise((i) => setTimeout(i, 5e3));
    }
    return t.hash;
  }, x = (e) => {
    var t;
    const s = `${(t = m.current) == null ? void 0 : t.openUrl}/${e}`;
    window.open(s, "_blank");
  }, g = (e) => {
    c(
      /* @__PURE__ */ n.jsx("div", { className: "w-full", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n.jsx(H, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ n.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ n.jsx(
            v,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => x(e),
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  };
  return { signTransaction: h, sending: p, waitForTransactionExection: T, tokenTypeByChainId: (e) => "ETH" };
};
export {
  M as u
};
