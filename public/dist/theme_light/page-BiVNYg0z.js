import { j as e } from "./vendor-radix-AvjOLIap.js";
import { m as C, l as A, a as r } from "./vendor-react-DSEtE0wE.js";
import { B as n, a as O } from "./vendor-utils-Q0yJ_o1H.js";
import { f as o, g as U, B as f, L as u, k as V, a as M, h as N, o as W } from "./main-93vrANEB.js";
import { L as E } from "./index-DzC3OD7r.js";
import { k as Y } from "./vendor-web3-CQEmmIwE.js";
function Q() {
  const [l] = C(), b = A(), [x, w] = r.useState(!1), [p, h] = r.useState(!1), [g, j] = r.useState(!1), [I, v] = r.useState(!1), [t, S] = r.useState(), [m, T] = r.useState("PENDING"), [k, R] = r.useState("");
  r.useEffect(() => {
    G();
  }, [l]), r.useEffect(() => {
    t && T(t.status);
  }, [t]);
  const G = async () => {
    const a = l.get("inviteInfoId"), s = l.get("otp");
    a && s ? (R(s), P(a)) : n.error("inviteInfoId or otp is not existed.");
  }, P = async (a) => {
    try {
      v(!0);
      const s = await c(a);
      if ((await o.get("/address/check", {
        params: { email: s.toEmail }
      })).data.exists && s.status === "PENDING" && !s.to) {
        const d = await o.get("/address/", {
          params: { email: s.toEmail }
        });
        d.data.success && (await y(s.id, {
          status: "REGISTERED",
          to: d.data.address
        }), c(a));
      }
    } catch (s) {
      U("error", s);
    } finally {
      v(!1);
    }
  }, c = async (a) => {
    const s = await o.get(`/invite/invite-info/${a}`);
    if (s.data.success) {
      const i = s.data.inviteInfo;
      return S(i), i;
    }
  }, D = () => p ? /* @__PURE__ */ e.jsx(u, {}) : x ? /* @__PURE__ */ e.jsx(u, {}) : "Click To Sign Up";
  async function L(a, s) {
    const i = W.getVerifyMethod() === "email-by-sendgrid";
    return (await O.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-registration-otp",
      {
        email: a,
        OTP: s,
        fromInvitation: i
      }
    )).data;
  }
  async function B() {
    const a = t == null ? void 0 : t.toEmail;
    if (!a) {
      n.error("username is not exited.");
      return;
    }
    try {
      h(!0), await L(a, k), await V.signUp({
        username: a
      });
      const { address: s } = M.all();
      await y(t.id, {
        status: "REGISTERED",
        to: s
      }), c(t.id);
    } catch (s) {
      const i = N(s);
      n.error(i.message);
    } finally {
      h(!1), w(!1);
    }
  }
  const y = async (a, s) => await o.post("/invite/update-invite-info", {
    id: a,
    ...s
  }), F = async () => {
    try {
      j(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (n.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const s = N(a);
      n.error(s.message);
    } finally {
      j(!1);
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ e.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ e.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    I ? /* @__PURE__ */ e.jsx(E, {}) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      m === "PENDING" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ e.jsxs("p", { className: "text-xl font-medium text-primary mb-2", children: [
            "Welcome, ",
            t == null ? void 0 : t.toEmail
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: "text-primary/80", children: "This is your username for Vastlink" })
        ] }),
        /* @__PURE__ */ e.jsx(
          f,
          {
            className: "w-full",
            onClick: () => B(),
            disabled: p || x,
            children: D()
          }
        )
      ] }),
      m === "REGISTERED" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ e.jsx("h2", { className: "text-2xl font-bold mb-4", children: "You have received a crypto transfer!" }),
          /* @__PURE__ */ e.jsxs("p", { className: "mb-2", children: [
            t.fromEmail,
            " sent you"
          ] }),
          /* @__PURE__ */ e.jsxs("p", { className: "text-3xl font-bold mb-2", children: [
            Y(BigInt(t.amount)),
            " ",
            t.token
          ] })
        ] }),
        /* @__PURE__ */ e.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "To accept this transfer, please confirm below." }),
          /* @__PURE__ */ e.jsx(
            f,
            {
              className: "w-full mb-4",
              onClick: () => F(),
              disabled: g,
              children: g ? /* @__PURE__ */ e.jsx(u, {}) : "Accept Transfer"
            }
          )
        ] })
      ] }),
      m === "WAITING" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "Email sent successfully! Please wait for the inviter to complete the transfer." }),
        /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: "You will receive an email notification once the transfer is complete." }),
        /* @__PURE__ */ e.jsx(
          f,
          {
            className: "w-full",
            onClick: () => b("/dashboard"),
            children: "Go To Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e.jsx(E, {}) })
  ] }) });
}
export {
  Q as default
};
