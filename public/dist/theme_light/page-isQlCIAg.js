import { j as t } from "./vendor-radix-BwSYOuH5.js";
import { l as P, i as R, r as i } from "./vendor-react-wyPiRY-L.js";
import { f as x, t as B, B as g, L as M, n as D, V as F, ah as A, g as p, o as G, m as W, h as Y } from "./main-CPzCMQxT.js";
import { B as c } from "./vendor-utils-BSjbfJFn.js";
import { u as z } from "./useTransaction-15OHkkS7.js";
import { k as v } from "./vendor-web3-CFt7IwTK.js";
function Q() {
  const [o] = P(), I = R(), { signTransaction: y, waitForTransactionExection: T } = z(), [e, j] = i.useState(), [l, N] = i.useState("PENDING"), [f, d] = i.useState(!1), E = i.useRef(), [w, r] = i.useState(!1), [S, m] = i.useState(!1), [u, b] = i.useState(null);
  i.useEffect(() => {
    k();
  }, [o]), i.useEffect(() => {
    e && N(e.status);
  }, [e]);
  const k = async () => {
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
      V();
    } catch {
    }
  }, V = async () => {
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
          transactionType: A.INVITE_TRANSFER
        });
        p("result", n), n != null && n.needOtp ? (G.getVerifyMethod() === "email-by-sendgrid" && (b(n.transactionId), r(!0)), a = await T(n.transactionId)) : a = n == null ? void 0 : n.hash, await O(e.id, {
          status: "COMPLETED"
        }), h(e.id), p("hash is", a);
      } catch (s) {
        console.error("Error confirming transfer:", s), c.error("Transfer failed");
      } finally {
        d(!1);
      }
  }, L = async (s) => {
    if (!u) {
      c.error("No transaction id");
      return;
    }
    try {
      m(!0);
      const { hash: a } = await W.signTransactionWithOTP({
        transactionId: u,
        otp: s
      });
      a && r(!1);
    } catch (a) {
      const n = Y(a);
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
      ] }) : /* @__PURE__ */ t.jsx(D, {})
    ] }),
    /* @__PURE__ */ t.jsx(
      F,
      {
        isOpen: w,
        onClose: () => r(!1),
        loading: S,
        onVerify: L,
        modalClassName: "z-[10004]",
        message: "Your transaction exceeds the daily limit. Please enter the verification code we sent to your email to proceed."
      }
    )
  ] });
}
export {
  Q as default
};
