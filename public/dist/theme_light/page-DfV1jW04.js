import { j as s } from "./vendor-radix-BwSYOuH5.js";
import { l as C, i as A, r as n } from "./vendor-react-wyPiRY-L.js";
import { B as r, a as O } from "./vendor-utils-BSjbfJFn.js";
import { f as o, g as V, n as E, B as f, L as u, a as U, h as b, o as W } from "./main-aWh1b37I.js";
import { k as Y } from "./vendor-web3-CFt7IwTK.js";
function H() {
  const [l] = C(), x = A(), [p, I] = n.useState(!1), [h, g] = n.useState(!1), [j, v] = n.useState(!1), [w, y] = n.useState(!1), [t, S] = n.useState(), [m, T] = n.useState("PENDING"), [k, R] = n.useState("");
  n.useEffect(() => {
    G();
  }, [l]), n.useEffect(() => {
    t && T(t.status);
  }, [t]);
  const G = async () => {
    const a = l.get("inviteInfoId"), e = l.get("otp");
    a && e ? (R(e), P(a)) : r.error("inviteInfoId or otp is not existed.");
  }, P = async (a) => {
    try {
      y(!0);
      const e = await c(a);
      if ((await o.get("/address/check", {
        params: { email: e.toEmail }
      })).data.exists && e.status === "PENDING" && !e.to) {
        const d = await o.get("/address/", {
          params: { email: e.toEmail }
        });
        d.data.success && (await N(e.id, {
          status: "REGISTERED",
          to: d.data.address
        }), c(a));
      }
    } catch (e) {
      V("error", e);
    } finally {
      y(!1);
    }
  }, c = async (a) => {
    const e = await o.get(`/invite/invite-info/${a}`);
    if (e.data.success) {
      const i = e.data.inviteInfo;
      return S(i), i;
    }
  }, D = () => h ? /* @__PURE__ */ s.jsx(u, {}) : p ? /* @__PURE__ */ s.jsx(u, {}) : "Click To Sign Up";
  async function B(a, e) {
    const i = W.getVerifyMethod() === "email-by-sendgrid";
    return await O.post(
      "https://staging.api.vastlink.xyz/auth/verify-registration-otp",
      {
        email: a,
        OTP: e,
        fromInvitation: i
      }
    );
  }
  async function F() {
    const a = t == null ? void 0 : t.toEmail;
    if (!a) {
      r.error("username is not exited.");
      return;
    }
    try {
      g(!0);
      const e = await B(a, k);
      if (e.data && e.data.sub) {
        x("/fireblocks_demo");
        const { address: i } = U.all();
        await N(t.id, {
          status: "REGISTERED",
          to: i
        }), c(t.id);
      }
    } catch (e) {
      const i = b(e);
      r.error(i.message);
    } finally {
      g(!1), I(!1);
    }
  }
  const N = async (a, e) => await o.post("/invite/update-invite-info", {
    id: a,
    ...e
  }), L = async () => {
    try {
      v(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (r.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const e = b(a);
      r.error(e.message);
    } finally {
      v(!1);
    }
  };
  return /* @__PURE__ */ s.jsx("div", { className: "min-h-custom-main flex items-center justify-center", children: /* @__PURE__ */ s.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ s.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ s.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    w ? /* @__PURE__ */ s.jsx(E, {}) : /* @__PURE__ */ s.jsx(s.Fragment, { children: t ? /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      m === "PENDING" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ s.jsxs("p", { className: "text-xl font-medium text-primary mb-2", children: [
            "Welcome, ",
            t == null ? void 0 : t.toEmail
          ] }),
          /* @__PURE__ */ s.jsx("p", { className: "text-primary/80", children: "This is your username for Vastlink" })
        ] }),
        /* @__PURE__ */ s.jsx(
          f,
          {
            className: "w-full",
            onClick: () => F(),
            disabled: h || p,
            children: D()
          }
        )
      ] }),
      m === "REGISTERED" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ s.jsx("h2", { className: "text-2xl font-bold mb-4", children: "You have received a crypto transfer!" }),
          /* @__PURE__ */ s.jsxs("p", { className: "mb-2", children: [
            t.fromEmail,
            " sent you"
          ] }),
          /* @__PURE__ */ s.jsxs("p", { className: "text-3xl font-bold mb-2", children: [
            Y(BigInt(t.amount)),
            " ",
            t.token
          ] })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "To accept this transfer, please confirm below." }),
          /* @__PURE__ */ s.jsx(
            f,
            {
              className: "w-full mb-4",
              onClick: () => L(),
              disabled: j,
              children: j ? /* @__PURE__ */ s.jsx(u, {}) : "Accept Transfer"
            }
          )
        ] })
      ] }),
      m === "WAITING" && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "Email sent successfully! Please wait for the inviter to complete the transfer." }),
        /* @__PURE__ */ s.jsx("p", { className: "mb-4", children: "You will receive an email notification once the transfer is complete." }),
        /* @__PURE__ */ s.jsx(
          f,
          {
            className: "w-full",
            onClick: () => x("/dashboard"),
            children: "Go To Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ s.jsx(E, {}) })
  ] }) });
}
export {
  H as default
};
