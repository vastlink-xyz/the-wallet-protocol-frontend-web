import { j as n } from "./vendor-radix-DAGGyvqc.js";
import { a as d } from "./vendor-react-BNvQ9I2c.js";
import { T as w, g as f, k as E, h as j, f as b, B } from "./main-C7od9bzF.js";
import { B as c } from "./vendor-utils-B-eF5hYT.js";
import { p as C } from "./vendor-web3-DanlmASa.js";
import { f as N } from "./vendor-ui-utils-CsaM-dHT.js";
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
      const r = C(s).toString();
      f("amt", r), l(!0);
      const o = await E.signTransaction({
        toAddress: e,
        amount: r,
        token: a,
        transactionType: i
      }), {
        needOtp: k,
        hash: u,
        message: y
      } = o;
      return u ? g(u) : k && c.error(y), o;
    } catch (r) {
      const o = j(r);
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
      /* @__PURE__ */ n.jsx("div", { className: "w-full", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ n.jsx(N, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ n.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ n.jsx(
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
