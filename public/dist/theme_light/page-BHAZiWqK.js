import { j as a } from "./vendor-radix-D7Ti2ut_.js";
import { C as v } from "./index-Dflckhq5.js";
import { l as j, f as M, r as c } from "./vendor-react-Bi1rjDlg.js";
import { g as u, h as f } from "./main-Bv5HMVJf.js";
import { B as m, a as p } from "./vendor-utils-BZIeOlaI.js";
import { L as k } from "./index-CghDsl9s.js";
function $() {
  const [e] = j(), l = M(), [d, i] = c.useState(!1), [g, y] = c.useState(!0), [h, R] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), o = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && o && (t === "login" ? b({
        authUsername: s,
        otp: o,
        isRememberMe: n === "true"
      }) : x({
        registerUsername: s,
        otp: o,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: r,
    otp: s,
    isRememberMe: o = !0
  }) {
    u("call authenticate", r), i(!0);
    try {
      const t = await w({
        username: r,
        otp: s,
        isRememberMe: o
      });
      t.data && t.data.sub && l("/fireblocks_demo");
    } catch (t) {
      const n = f(t);
      m.error(n.message);
    } finally {
      i(!1);
    }
  }
  async function x({
    registerUsername: r,
    otp: s,
    isRememberMe: o = !0
  }) {
    u("call register"), y(!1), i(!0);
    try {
      const t = await S({
        username: r,
        otp: s,
        isRememberMe: o
      });
      t.data && t.data.sub && l("/fireblocks_demo");
    } catch (t) {
      const n = f(t);
      m.error(n.message);
    } finally {
      u("register finally"), i(!1);
    }
  }
  async function S({
    username: r,
    otp: s,
    isRememberMe: o = !0
  }) {
    return await p.post(
      "http://localhost:5001/auth/verify-registration-otp",
      {
        email: r,
        OTP: s,
        rememberMe: o
      }
    );
  }
  async function w({
    username: r,
    otp: s,
    isRememberMe: o = !0
  }) {
    return await p.post(
      "http://localhost:5001/auth/verify-login-otp",
      {
        email: r,
        OTP: s,
        rememberMe: o
      }
    );
  }
  return /* @__PURE__ */ a.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: d ? /* @__PURE__ */ a.jsx(k, {}) : h ? /* @__PURE__ */ a.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ a.jsx(
    v,
    {
      title: `${g ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) }) : null });
}
export {
  $ as default
};
