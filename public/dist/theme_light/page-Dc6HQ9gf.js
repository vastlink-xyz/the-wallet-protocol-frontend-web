import { j as a } from "./vendor-radix-CPmBDWYo.js";
import { C as w } from "./index-C0mt1d0V.js";
import { l as k, k as j, r as u } from "./vendor-react-BA5A8Axg.js";
import { g as c, h as f } from "./main-D4-Rhh9a.js";
import { B as m, a as p } from "./vendor-utils-DbEkyxvy.js";
import { L as M } from "./index-HmKfL7_P.js";
function $() {
  const [e] = k(), l = j(), [g, i] = u.useState(!1), [d, y] = u.useState(!0), [h, R] = u.useState(!1);
  u.useEffect(() => {
    (async () => {
      const s = e == null ? void 0 : e.get("email"), r = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      s && r && (t === "login" ? b({
        authUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }) : x({
        registerUsername: s,
        otp: r,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function b({
    authUsername: o,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call authenticate", o), i(!0);
    try {
      const t = await v({
        username: o,
        otp: s,
        isRememberMe: r
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
    registerUsername: o,
    otp: s,
    isRememberMe: r = !0
  }) {
    c("call register"), y(!1), i(!0);
    try {
      const t = await S({
        username: o,
        otp: s,
        isRememberMe: r
      });
      t.data && t.data.sub && l("/fireblocks_demo");
    } catch (t) {
      const n = f(t);
      m.error(n.message);
    } finally {
      c("register finally"), i(!1);
    }
  }
  async function S({
    username: o,
    otp: s,
    isRememberMe: r = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
      {
        email: o,
        OTP: s,
        rememberMe: r
      }
    );
  }
  async function v({
    username: o,
    otp: s,
    isRememberMe: r = !0
  }) {
    return await p.post(
      "https://staging.api.vastlink.xyz/auth/verify-login-otp",
      {
        email: o,
        OTP: s,
        rememberMe: r
      }
    );
  }
  return /* @__PURE__ */ a.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: g ? /* @__PURE__ */ a.jsx(M, {}) : h ? /* @__PURE__ */ a.jsx("div", { className: "-mt-[48px]", children: /* @__PURE__ */ a.jsx(
    w,
    {
      title: `${d ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) }) : null });
}
export {
  $ as default
};
