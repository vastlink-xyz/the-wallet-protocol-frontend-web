import { j as r } from "./vendor-radix-nT--cb5B.js";
import { r as d } from "./vendor-react-CwfAKKXk.js";
import { T as w, g as f, k as E, h as j, f as b, B } from "./main-CzeqDVqm.js";
import { B as c } from "./vendor-utils-DOORVzle.js";
import { p as C } from "./vendor-web3-VgZtbLWg.js";
import { f as N } from "./vendor-ui-utils-ERHZUJ9g.js";
const F = () => {
  const [p, l] = d.useState(!1), m = d.useRef(), h = async ({
    to: e,
    amount: s,
    data: t,
    token: a = "ETH",
    transactionType: i
  }) => {
    m.current = w.getInstance().createToken(a);
    try {
      const n = C(s).toString();
      f("amt", n), l(!0);
      const o = await E.signTransaction({
        toAddress: e,
        amount: n,
        token: a,
        transactionType: i
      }), {
        needOtp: k,
        hash: u,
        message: y
      } = o;
      return u ? g(u) : k && c.error(y), o;
    } catch (n) {
      const o = j(n);
      c.error(o.message);
    } finally {
      l(!1);
    }
  }, T = async (e) => {
    const s = "/transaction/execution-status";
    let t;
    for (; ; ) {
      const a = await b.post(s, {
        transactionId: e
      });
      if (f("data", a.data), t = a.data, t.hash)
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
      /* @__PURE__ */ r.jsx("div", { className: "w-full", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ r.jsx(N, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ r.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ r.jsx(
            B,
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
  F as u
};
