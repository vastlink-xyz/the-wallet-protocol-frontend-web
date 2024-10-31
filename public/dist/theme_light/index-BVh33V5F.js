import { j as s } from "./vendor-radix-C4qF-rbz.js";
import { l as B, h as E, a as l } from "./vendor-react-KTk2TwQ7.js";
import { u as L, B as o, a as f } from "./vendor-utils-D1d8vwmL.js";
import { I as $, p as M, B as U, l as p, o as S, h } from "./main-Cnoo90sq.js";
import { C as F, a as H, c as O, d as V } from "./card-73JawrGP.js";
import { L as q } from "./label-PBmWI22N.js";
function Q() {
  const [n] = B(), y = E(), { t: a } = L(), [d, w] = l.useState(""), [m, i] = l.useState(!1), [x, g] = l.useState(!1), [c, b] = l.useState(!0), [N, j] = l.useState(!1);
  l.useEffect(() => {
    (async () => {
      const t = n == null ? void 0 : n.get("email"), r = n == null ? void 0 : n.get("otp"), u = n == null ? void 0 : n.get("type");
      t && r && (w(t), u === "login" ? I(t, r) : k(t, r));
    })();
  }, [n]);
  async function C() {
    p("call register");
    try {
      g(!0);
      const e = await f.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-otp",
        {
          email: d
        }
      );
      p("register res", e), e.status === 200 && (o.info(
        a("/.otpSentMessage"),
        {
          autoClose: 1e4
        }
      ), g(!1));
    } catch (e) {
      const t = h(e);
      o.error(t.message);
    }
  }
  async function v(e, t) {
    return (await f.post(
      "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/verify-otp",
      {
        email: e,
        OTP: t
      }
    )).data;
  }
  async function k(e, t) {
    p("call register"), b(!1), g(!0);
    try {
      const r = await v(e, t);
      await S.signUp({
        username: e,
        idToken: r
      }), j(!0), y("/dashboard");
    } catch (r) {
      const u = h(r);
      o.error(u.message);
    } finally {
      p("register finally"), g(!1), i(!1);
    }
  }
  async function A() {
    try {
      i(!0), (await f.post(
        "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/auth/generate-login-otp",
        {
          email: d
        }
      )).status === 200 && (o.info(
        a("/.otpLoginSentMessage"),
        {
          autoClose: 1e4
        }
      ), i(!1));
    } catch (e) {
      const t = h(e);
      o.error(t.message);
    } finally {
      i(!1);
    }
  }
  async function I(e, t) {
    p("call authenticate", e), i(!0);
    try {
      const r = await v(e, t);
      await S.signIn({
        authUsername: e,
        idToken: r
      }), j(!0), y("/dashboard");
    } catch (r) {
      const u = h(r);
      o.error(u.message);
    } finally {
      i(!1);
    }
  }
  const R = async (e) => {
    if (e.preventDefault(), c)
      await A();
    else {
      try {
        const { data: t } = await f.get("https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com/address/", {
          params: {
            email: d
          }
        });
        if (t.success) {
          o.error(a("/.emailAlreadySignedUp"));
          return;
        }
      } catch {
      }
      await C();
    }
  }, T = () => a(c ? m ? "/.authenticating" : "/.signInButton" : x ? "/.registering" : m ? "/.authenticating" : "/.signUpButton");
  return /* @__PURE__ */ s.jsx("div", { className: "flex flex-grow flex-col items-center justify-center", children: N ? /* @__PURE__ */ s.jsx("div", { className: "text-center", children: /* @__PURE__ */ s.jsx("p", { className: "text-lg", children: "Redirecting to dashboard..." }) }) : /* @__PURE__ */ s.jsxs(F, { className: "sm:w-[360px] py-4 border-none shadow-none mb-12 bg-white", children: [
    /* @__PURE__ */ s.jsx(H, { children: /* @__PURE__ */ s.jsx("p", { className: "mb-4 text-lg md:text-2xl m-0 p-0", children: a(c ? "/.signinTitle" : "/.signupTitle") }) }),
    /* @__PURE__ */ s.jsx(O, { children: /* @__PURE__ */ s.jsxs("form", { onSubmit: (e) => R(e), className: "group", noValidate: !0, children: [
      /* @__PURE__ */ s.jsxs("div", { className: "mb-4 relative", children: [
        /* @__PURE__ */ s.jsx(q, { htmlFor: "email", children: a("/.emailLabel") }),
        /* @__PURE__ */ s.jsx(
          $,
          {
            className: "w-full mb-2 rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 ring-offset-transparent mt-2 appearance-none outline-none text-neutral-800 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer",
            type: "email",
            id: "email",
            value: d,
            onChange: (e) => w(e.target.value.trim()),
            placeholder: a("/.emailPlaceholder"),
            required: !0,
            pattern: M.source,
            disabled: x || m
          }
        ),
        /* @__PURE__ */ s.jsx("span", { className: "absolute -bottom-5 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block", children: a("/.emailValidationError") })
      ] }),
      /* @__PURE__ */ s.jsx(
        U,
        {
          type: "submit",
          className: "w-full mt-2 rounded-full group-invalid:pointer-events-none group-invalid:opacity-30",
          disabled: x || m,
          children: T()
        }
      )
    ] }) }),
    /* @__PURE__ */ s.jsx(V, { children: /* @__PURE__ */ s.jsx("p", { className: "cursor-pointer select-none", onClick: () => b(!c), children: a(c ? "/.signUp" : "/.alreadyHaveAccount") }) })
  ] }) });
}
export {
  Q as A
};
