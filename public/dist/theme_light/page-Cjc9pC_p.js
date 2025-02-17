import { j as t } from "./vendor-radix-D7Ti2ut_.js";
import { j as r, k as s, m as a } from "./main-Bv5HMVJf.js";
import { r as o } from "./vendor-react-Bi1rjDlg.js";
function m() {
  const { getAccessTokenSilently: e } = r();
  return o.useEffect(() => {
    s.setTokenGetter(e), a.initSocket();
  }, [e]), /* @__PURE__ */ t.jsx("div", { children: "123" });
}
export {
  m as default
};
