import { j as a } from "./vendor-radix-DcfHr-b-.js";
import { r as f } from "./vendor-react-Cqw-pUgZ.js";
import { l as u } from "./main-69rK11_z.js";
import { h as w } from "./error-BOjt9hlf.js";
import { B as c } from "./vendor-utils-BEOEHg0B.js";
import { B as E } from "./button-CTahMASr.js";
import { T as j } from "./TokenService-hl2efiyX.js";
import { a as b } from "./index-Ds-PW5Mo.js";
import { k as B } from "./index-D2MaAw-U.js";
import { p as C } from "./vendor-web3-DM8VQNRv.js";
import { e as N } from "./vendor-ui-utils-D8A1AlyV.js";
const O = () => {
  const [d, m] = f.useState(!1), l = f.useRef(), h = async ({
    to: e,
    amount: r,
    data: t,
    token: s = "ETH",
    transactionType: i
  }) => {
    l.current = j.getInstance().createToken(s);
    try {
      const n = C(r).toString();
      u("amt", n), m(!0);
      const o = await B.signTransaction({
        toAddress: e,
        amount: n,
        token: s,
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
    const r = "/transaction/execution-status";
    let t;
    for (; ; ) {
      const s = await b.post(r, {
        transactionId: e
      });
      if (u("data", s.data), t = s.data, t.hash)
        break;
      await new Promise((i) => setTimeout(i, 5e3));
    }
    return t.hash;
  }, x = (e) => {
    var t;
    const r = `${(t = l.current) == null ? void 0 : t.openUrl}/${e}`;
    window.open(r, "_blank");
  }, g = (e) => {
    c(
      /* @__PURE__ */ a.jsx("div", { className: "w-full", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ a.jsx(N, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ a.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ a.jsx(
            E,
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
  return { signTransaction: h, sending: d, waitForTransactionExection: T, tokenTypeByChainId: (e) => "ETH" };
};
export {
  O as u
};
