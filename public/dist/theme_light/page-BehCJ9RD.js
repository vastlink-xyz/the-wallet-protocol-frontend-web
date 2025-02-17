import { j as t } from "./vendor-radix-nHPuu8ug.js";
import { j as a, k as r, m as s } from "./main-ZrsMs0Kw.js";
import { a as o } from "./vendor-react-DG1r0zWq.js";
function m() {
  const { getAccessTokenSilently: e } = a();
  return o.useEffect(() => {
    r.setTokenGetter(e), s.initSocket();
  }, [e]), /* @__PURE__ */ t.jsx("div", { children: "123" });
}
export {
  m as default
};
