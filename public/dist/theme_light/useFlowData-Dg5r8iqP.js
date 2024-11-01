import { a as S } from "./index-DEOj28UY.js";
import { l as g } from "./main-BQRn5y6W.js";
import { i as v, r as t } from "./vendor-react-Cqw-pUgZ.js";
const y = (e) => {
  const [l] = v(), [o, c] = t.useState(null), [d, r] = t.useState(null), [i, f] = t.useState(null), [u, w] = t.useState(-1), [x, I] = t.useState(null);
  t.useEffect(() => {
    const n = l.get("flowId") || (e == null ? void 0 : e.flowId), s = l.get("flowIndex") || (e == null ? void 0 : e.flowIndex);
    n && s && (c(n), r(s), m(n, s));
  }, [l]);
  const m = async (n, s) => {
    const a = (await S.post("/marketplace/product/get-flow-product-by-index", {
      flowId: n,
      index: s
    })).data;
    g("flow data", a), f(a.serviceUrl), w(a.nextIndex), I(a.serviceEndingUrl);
  };
  return {
    flowId: o,
    flowIndex: d,
    serviceUrl: i,
    nextIndex: u,
    serviceEndingUrl: x
  };
};
export {
  y as u
};
