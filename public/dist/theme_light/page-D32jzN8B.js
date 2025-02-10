import { j as t } from "./vendor-radix-CPmBDWYo.js";
import { l as P, k as R, r as i } from "./vendor-react-BA5A8Axg.js";
import { f as x, t as B, B as g, L as M, V as D, ah as F, g as p, o as A, k as G, h as W } from "./main-D4-Rhh9a.js";
import { B as c } from "./vendor-utils-DbEkyxvy.js";
import { u as Y } from "./useTransaction-ZQWCUC8x.js";
import { L as z } from "./index-HmKfL7_P.js";
import { k as v } from "./vendor-web3-DbPIok2u.js";
function U() {
  const [o] = P(), I = R(), { signTransaction: y, waitForTransactionExection: T } = Y(), [e, j] = i.useState(), [l, N] = i.useState("PENDING"), [f, d] = i.useState(!1), E = i.useRef(), [k, r] = i.useState(!1), [w, m] = i.useState(!1), [u, S] = i.useState(null);
  i.useEffect(() => {
    b();
  }, [o]), i.useEffect(() => {
    e && N(e.status);
  }, [e]);
  const b = async () => {
    const s = o == null ? void 0 : o.get("inviteInfoId");
    s && h(s);
  }, h = async (s) => {
    const a = await x.get(`/invite/invite-info/${s}`);
    if (a.data.success) {
      j(a.data.inviteInfo);
      const n = B.getToken(a.data.inviteInfo.token);
      E.current = n;
    }
  }, C = async () => {
    try {
      L();
    } catch {
    }
  }, L = async () => {
    if (e)
      try {
        d(!0);
        const s = v(BigInt(e.amount));
        let a = "";
        const n = await y({
          to: e.to,
          amount: s,
          token: e.token,
          data: "",
          transactionType: F.INVITE_TRANSFER
        });
        p("result", n), n != null && n.needOtp ? (A.getVerifyMethod() === "email-by-sendgrid" && (S(n.transactionId), r(!0)), a = await T(n.transactionId)) : a = n == null ? void 0 : n.hash, await O(e.id, {
          status: "COMPLETED"
        }), h(e.id), p("hash is", a);
      } catch (s) {
        console.error("Error confirming transfer:", s), c.error("Transfer failed");
      } finally {
        d(!1);
      }
  }, V = async (s) => {
    if (!u) {
      c.error("No transaction id");
      return;
    }
    try {
      m(!0);
      const { hash: a } = await G.signTransactionWithOTP({
        transactionId: u,
        otp: s
      });
      a && r(!1);
    } catch (a) {
      const n = W(a);
      c.error(n.message);
    } finally {
      m(!1);
    }
  }, O = async (s, a) => await x.post("/invite/update-invite-info", {
    id: s,
    ...a
  });
  return /* @__PURE__ */ t.jsxs("div", { className: "min-h-custom-main flex items-center justify-center", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-2xl px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex items-center mb-8", children: [
        /* @__PURE__ */ t.jsx("img", { src: "/imgs/logos/logo.svg", className: "w-[32px] mr-2", alt: "logo" }),
        /* @__PURE__ */ t.jsx("p", { className: "font-bold", children: "Vastlink" })
      ] }),
      e ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        l === "WAITING" && /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("h1", { className: "text-2xl mb-2", children: "Confirm Crypto Transfer" }),
          /* @__PURE__ */ t.jsxs("p", { className: "text-primary/80 mb-4", children: [
            "You are about to send ",
            v(BigInt(e.amount)),
            " ",
            e.token,
            " to ",
            e.toEmail
          ] }),
          /* @__PURE__ */ t.jsxs("p", { children: [
            "From: ",
            e.fromEmail
          ] }),
          /* @__PURE__ */ t.jsx(
            g,
            {
              className: "w-full mt-4",
              onClick: () => C(),
              disabled: f,
              children: f ? /* @__PURE__ */ t.jsx(M, {}) : "Confirm Transfer"
            }
          )
        ] }),
        l === "COMPLETED" && /* @__PURE__ */ t.jsxs("div", { children: [
          /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Transfer Completed!" }),
          /* @__PURE__ */ t.jsx("p", { className: "text-primary/80", children: "The transaction has been submitted to the network" }),
          /* @__PURE__ */ t.jsx(
            g,
            {
              className: "w-full mt-6",
              onClick: () => I("/dashboard"),
              children: "Return to Dashboard"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ t.jsx(z, {})
    ] }),
    /* @__PURE__ */ t.jsx(
      D,
      {
        isOpen: k,
        onClose: () => r(!1),
        loading: w,
        onVerify: V,
        modalClassName: "z-[10004]",
        message: "Your transaction exceeds the daily limit. Please enter the verification code we sent to your email to proceed."
      }
    )
  ] });
}
export {
  U as default
};
