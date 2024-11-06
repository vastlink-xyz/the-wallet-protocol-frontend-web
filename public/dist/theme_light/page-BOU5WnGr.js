import { j as i } from "./vendor-radix-D0lo_cKZ.js";
import { C as b } from "./index-DHoXFG02.js";
import { k as j, r as c } from "./vendor-react-CA5sEv1f.js";
import { a as l } from "./main-DgHGudCI.js";
import { h as p } from "./error-EuuGdfel.js";
import { B as f, b as k } from "./vendor-utils-C-Nds55G.js";
import { k as d } from "./index-N9v62Kbs.js";
function I() {
  const [e] = j(), [g, a] = c.useState(!1), [h, x] = c.useState(!0), [y, u] = c.useState(!1);
  c.useEffect(() => {
    (async () => {
      const o = e == null ? void 0 : e.get("email"), r = e == null ? void 0 : e.get("otp"), t = e == null ? void 0 : e.get("type"), n = e == null ? void 0 : e.get("rememberMe");
      o && r && (t === "login" ? w({
        authUsername: o,
        otp: r,
        isRememberMe: n === "true"
      }) : S({
        registerUsername: o,
        otp: r,
        isRememberMe: n === "true"
      }));
    })();
  }, [e]);
  async function w({
    authUsername: s,
    otp: o,
    isRememberMe: r = !0
  }) {
    l("call authenticate", s), a(!0);
    try {
      const t = await m({
        username: s,
        otp: o,
        isRememberMe: r
      });
      await d.signIn({
        authUsername: s,
        idToken: t
      }), u(!0);
    } catch (t) {
      const n = p(t);
      f.error(n.message);
    } finally {
      a(!1);
    }
  }
  async function S({
    registerUsername: s,
    otp: o,
    isRememberMe: r = !0
  }) {
    l("call register"), x(!1), a(!0);
    try {
      const t = await m({
        username: s,
        otp: o,
        isRememberMe: r
      });
      await d.signUp({
        username: s,
        idToken: t
      }), u(!0);
    } catch (t) {
      const n = p(t);
      f.error(n.message);
    } finally {
      l("register finally"), a(!1);
    }
  }
  async function m({
    username: s,
    otp: o,
    isRememberMe: r = !0
  }) {
    return (await k.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: s,
        OTP: o,
        rememberMe: r
      }
    )).data;
  }
  return g ? /* @__PURE__ */ i.jsx("div", { className: "flex justify-center items-center mt-[200px]", children: /* @__PURE__ */ i.jsx(
    "img",
    {
      src: "/imgs/icons/loading.svg",
      alt: "loading",
      className: "h-[100px] w-[100px] animate-spin mt-[100px]"
    }
  ) }) : y ? /* @__PURE__ */ i.jsx(
    b,
    {
      title: `${h ? "Sign in" : "Sign up"} successfully`,
      buttonText: "Take me to the dashboard",
      redirectUrl: "/dashboard",
      description: "Start exploring you Vastlink dashboard to unlock all features. You will be directed to Dashboard in"
    }
  ) : /* @__PURE__ */ i.jsx("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ i.jsx("p", { className: "text-lg", children: "Something went wrong" }) });
}
export {
  I as default
};
