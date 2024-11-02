import { a as S } from "./index-Dr7PNsrq.js";
import { l as g } from "./main-DrvVrxeO.js";
import { j as v, a as t } from "./vendor-react-D6ZgZFQ5.js";
const y = (e) => {
  const [l] = v(), [o, c] = t.useState(null), [d, r] = t.useState(null), [i, f] = t.useState(null), [u, w] = t.useState(-1), [x, I] = t.useState(null);
  t.useEffect(() => {
    const n = l.get("flowId") || (e == null ? void 0 : e.flowId), a = l.get("flowIndex") || (e == null ? void 0 : e.flowIndex);
    n && a && (c(n), r(a), m(n, a));
  }, [l]);
  const m = async (n, a) => {
    const s = (await S.post("/marketplace/product/get-flow-product-by-index", {
      flowId: n,
      index: a
    })).data;
    g("flow data", s), f(s.serviceUrl), w(s.nextIndex), I(s.serviceEndingUrl);
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
