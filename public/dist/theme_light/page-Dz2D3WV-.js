import { j as e } from "./vendor-radix-hWeKeDdS.js";
import { l as C, k as L, a as r } from "./vendor-react-DM3ZG7W6.js";
import { B as i, a as A } from "./vendor-utils-Ca3Nf2P-.js";
import { f as o, g as O, L as d, B as f, k as U, a as V, h as N } from "./main-8RA78Fbz.js";
import { f as W } from "./vendor-web3-DmEdZR0k.js";
function H() {
  const [l] = C(), b = L(), [u, E] = r.useState(!1), [p, x] = r.useState(!1), [h, g] = r.useState(!1), [w, j] = r.useState(!1), [t, I] = r.useState(), [m, S] = r.useState("PENDING"), [T, k] = r.useState("");
  r.useEffect(() => {
    G();
  }, [l]), r.useEffect(() => {
    t && S(t.status);
  }, [t]);
  const G = async () => {
    const a = l.get("inviteInfoId"), s = l.get("otp");
    a && s ? (k(s), P(a)) : i.error("inviteInfoId or otp is not existed.");
  }, P = async (a) => {
    try {
      j(!0);
      const s = await c(a);
      if ((await o.get("/address/check", {
        params: { email: s.toEmail }
      })).data.exists && s.status === "PENDING" && !s.to) {
        const v = await o.get("/address/", {
          params: { email: s.toEmail }
        });
        v.data.success && (await y(s.id, {
          status: "REGISTERED",
          to: v.data.address
        }), c(a));
      }
    } catch (s) {
      O("error", s);
    } finally {
      j(!1);
    }
  }, c = async (a) => {
    const s = await o.get(`/invite/invite-info/${a}`);
    if (s.data.success) {
      const n = s.data.inviteInfo;
      return I(n), n;
    }
  }, R = () => p ? "registering..." : u ? "authenticating..." : "Click To Sign Up";
  async function D(a, s) {
    return (await A.post(
      "https://api.vastwallet.j-labs.xyz/auth/verify-otp",
      {
        email: a,
        OTP: s
      }
    )).data;
  }
  async function B() {
    const a = t == null ? void 0 : t.toEmail;
    if (!a) {
      i.error("username is not exited.");
      return;
    }
    try {
      x(!0);
      const s = await D(a, T);
      await U.signUp({
        username: a
      });
      const { address: n } = V.all();
      await y(t.id, {
        status: "REGISTERED",
        to: n
      }), c(t.id);
    } catch (s) {
      const n = N(s);
      i.error(n.message);
    } finally {
      x(!1), E(!1);
    }
  }
  const y = async (a, s) => await o.post("/invite/update-invite-info", {
    id: a,
    ...s
  }), F = async () => {
    try {
      g(!0), (await o.post("/invite/send-inviter-transfer-email", {
        inviteInfoId: t == null ? void 0 : t.id
      })).data.success && (i.success("Transfer email sent successfully"), c(t.id));
    } catch (a) {
      const s = N(a);
      i.error(s.message);
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ e.jsx("div", { className: "h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ e.jsx("img", { src: "/logo-alone.png", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ e.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    w ? /* @__PURE__ */ e.jsx(d, { type: "breathe" }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: t ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
            disabled: p || u,
            children: R()
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
            W(BigInt(t.amount)),
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
              disabled: h,
              children: h ? /* @__PURE__ */ e.jsx(d, {}) : "Accept Transfer"
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
    ] }) : /* @__PURE__ */ e.jsx(d, { type: "breathe" }) })
  ] }) });
}
export {
  H as default
};
