import { j as t } from "./vendor-radix-CXAw23nV.js";
import { k as w, j as k, r as o } from "./vendor-react-U4DfHahV.js";
import { f as m, T as C, B as d, L as u, v as S, g as h } from "./main-OpUhS-4m.js";
import { B as R } from "./vendor-utils-CQorlrD-.js";
import { u as B } from "./useTransaction-DYOvkNm2.js";
import { f as x } from "./vendor-web3-BqNTAT7x.js";
function G() {
  const [i] = w(), p = k(), { signTransaction: g, waitForTransactionExection: I } = B(), [e, v] = o.useState(), [r, j] = o.useState("PENDING"), [c, l] = o.useState(!1), T = o.useRef();
  o.useEffect(() => {
    y();
  }, [i]), o.useEffect(() => {
    e && j(e.status);
  }, [e]);
  const y = async () => {
    const s = i == null ? void 0 : i.get("inviteInfoId");
    s && f(s);
  }, f = async (s) => {
    const a = await m.get(`/invite/invite-info/${s}`);
    if (a.data.success) {
      v(a.data.inviteInfo);
      const n = C.getInstance().createToken(a.data.inviteInfo.token);
      T.current = n;
    }
  }, N = async () => {
    try {
      b();
    } catch {
    }
  }, b = async () => {
    if (e)
      try {
        l(!0);
        const s = x(BigInt(e.amount));
        let a = "";
        const n = await g({
          to: e.to,
          amount: s,
          token: e.token,
          data: "",
          transactionType: S.INVITE_TRANSFER
        });
        h("result", n), n != null && n.needOtp ? a = await I(n.transactionId) : a = n == null ? void 0 : n.hash, await E(e.id, {
          status: "COMPLETED"
        }), f(e.id), h("hash is", a);
      } catch (s) {
        console.error("Error confirming transfer:", s), R.error("Transfer failed");
      } finally {
        l(!1);
      }
  }, E = async (s, a) => await m.post("/invite/update-invite-info", {
    id: s,
    ...a
  });
  return /* @__PURE__ */ t.jsx("div", { className: "h-screen bg-cool-frosted-aqua-80 bg-opacity-20 flex items-center justify-center", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-2xl shadow-lg px-4 md:px-12 py-8 mx-6 max-w-md w-full", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ t.jsx("img", { src: "/logo-alone.png", className: "w-[32px] mr-2", alt: "logo" }),
      /* @__PURE__ */ t.jsx("p", { className: "font-bold", children: "Vastlink" })
    ] }),
    e ? /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      r === "WAITING" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h1", { className: "text-2xl mb-2", children: "Confirm Crypto Transfer" }),
        /* @__PURE__ */ t.jsxs("p", { className: "text-primary/80 mb-4", children: [
          "You are about to send ",
          x(BigInt(e.amount)),
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
          d,
          {
            className: "w-full mt-4",
            onClick: () => N(),
            disabled: c,
            children: c ? /* @__PURE__ */ t.jsx(u, {}) : "Confirm Transfer"
          }
        )
      ] }),
      r === "COMPLETED" && /* @__PURE__ */ t.jsxs("div", { children: [
        /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-bold mb-2", children: "Transfer Completed!" }),
        /* @__PURE__ */ t.jsx("p", { className: "text-primary/80", children: "The transaction has been submitted to the network" }),
        /* @__PURE__ */ t.jsx(
          d,
          {
            className: "w-full mt-6",
            onClick: () => p("/dashboard"),
            children: "Return to Dashboard"
          }
        )
      ] })
    ] }) : /* @__PURE__ */ t.jsx(u, { type: "breathe" })
  ] }) });
}
export {
  G as default
};
