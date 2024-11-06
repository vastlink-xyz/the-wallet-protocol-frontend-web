import { a as S } from "./index-CM3cPNp5.js";
import { a as g } from "./main-DgHGudCI.js";
import { k as v, r as t } from "./vendor-react-CA5sEv1f.js";
const k = (e) => {
  const [o] = v(), [l, c] = t.useState(null), [d, r] = t.useState(null), [i, f] = t.useState(null), [u, w] = t.useState(-1), [x, I] = t.useState(null);
  t.useEffect(() => {
    const n = o.get("flowId") || (e == null ? void 0 : e.flowId), a = o.get("flowIndex") || (e == null ? void 0 : e.flowIndex);
    n && a && (c(n), r(a), m(n, a));
  }, [o]);
  const m = async (n, a) => {
    const s = (await S.post("/marketplace/product/get-flow-product-by-index", {
      flowId: n,
      index: a
    })).data;
    g("flow data", s), f(s.serviceUrl), w(s.nextIndex), I(s.serviceEndingUrl);
  };
  return {
    flowId: l,
    flowIndex: d,
    serviceUrl: i,
    nextIndex: u,
    serviceEndingUrl: x
  };
};
export {
  k as u
};
