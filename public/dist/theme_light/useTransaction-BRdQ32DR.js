import { j as a } from "./vendor-radix-CtBTfL6E.js";
import { r as u } from "./vendor-react-lU71vM3H.js";
import { b as d, h as w, d as E } from "./main-BiNWeoEw.js";
import { B as c } from "./vendor-utils-CKvC_yGz.js";
import { B as j } from "./button-ClT0lWkU.js";
import { T as b } from "./TokenService-BJInqoec.js";
import { k as B } from "./index-DZmehw99.js";
import { p as C } from "./vendor-web3-N5LxOC8E.js";
import { g as N } from "./vendor-ui-utils-i3zS6aVb.js";
const D = () => {
  const [f, m] = u.useState(!1), l = u.useRef(), h = async ({
    to: e,
    amount: s,
    data: t,
    token: r = "ETH",
    transactionType: i
  }) => {
    l.current = b.getInstance().createToken(r);
    try {
      const n = C(s).toString();
      d("amt", n), m(!0);
      const o = await B.signTransaction({
        toAddress: e,
        amount: n,
        token: r,
        transactionType: i
      }), {
        needOtp: k,
        hash: p,
        message: y
      } = o;
      return p ? g(p) : k && c.error(y), o;
    } catch (n) {
      const o = w(n);
      c.error(o.message);
    } finally {
      m(!1);
    }
  }, T = async (e) => {
    const s = "/transaction/execution-status";
    let t;
    for (; ; ) {
      const r = await E.post(s, {
        transactionId: e
      });
      if (d("data", r.data), t = r.data, t.hash)
        break;
      await new Promise((i) => setTimeout(i, 5e3));
    }
    return t.hash;
  }, x = (e) => {
    var t;
    const s = `${(t = l.current) == null ? void 0 : t.openUrl}/${e}`;
    window.open(s, "_blank");
  }, g = (e) => {
    c(
      /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ a.jsx(N, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ a.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ a.jsx(
            j,
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
  return { signTransaction: h, sending: f, waitForTransactionExection: T, tokenTypeByChainId: (e) => "ETH" };
};
export {
  D as u
};
