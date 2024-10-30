import { i as g, l as m } from "./main-BVot_80u.js";
import { k as v, r as t } from "./vendor-react-X5c0QESR.js";
const h = (e) => {
  const [l] = v(), [o, c] = t.useState(null), [d, r] = t.useState(null), [i, f] = t.useState(null), [u, w] = t.useState(-1), [x, I] = t.useState(null);
  t.useEffect(() => {
    const n = l.get("flowId") || (e == null ? void 0 : e.flowId), s = l.get("flowIndex") || (e == null ? void 0 : e.flowIndex);
    n && s && (c(n), r(s), S(n, s));
  }, [l]);
  const S = async (n, s) => {
    const a = (await g.post("/marketplace/product/get-flow-product-by-index", {
      flowId: n,
      index: s
    })).data;
    m("flow data", a), f(a.serviceUrl), w(a.nextIndex), I(a.serviceEndingUrl);
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
  h as u
};
