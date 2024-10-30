import { j as t } from "./vendor-radix-B8_5rGTC.js";
import { k, f as w, r as o } from "./vendor-react-X5c0QESR.js";
import { k as C, i as f, T as S, B as m, L as u, n as R, l as h } from "./main-BVot_80u.js";
import { B } from "./vendor-utils-avI_LICu.js";
import { f as x } from "./vendor-web3-A0hL30sH.js";
function A() {
  const [i] = k(), p = w(), { signTransaction: g, waitForTransactionExection: I } = C(), [e, v] = o.useState(), [r, T] = o.useState("PENDING"), [c, l] = o.useState(!1), j = o.useRef();
  o.useEffect(() => {
    y();
  }, [i]), o.useEffect(() => {
    e && T(e.status);
  }, [e]);
  const y = async () => {
    const n = i == null ? void 0 : i.get("inviteInfoId");
    n && d(n);
  }, d = async (n) => {
    const a = await f.get(`/invite/invite-info/${n}`);
    if (a.data.success) {
      v(a.data.inviteInfo);
      const s = S.getInstance().createToken(a.data.inviteInfo.token);
      j.current = s;
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
        const n = x(BigInt(e.amount));
        let a = "";
        const s = await g({
          to: e.to,
          amount: n,
          token: e.token,
          data: "",
          transactionType: R.INVITE_TRANSFER
        });
        h("result", s), s != null && s.needOtp ? a = await I(s.transactionId) : a = s == null ? void 0 : s.hash, await E(e.id, {
          status: "COMPLETED"
        }), d(e.id), h("hash is", a);
      } catch (n) {
        console.error("Error confirming transfer:", n), B.error("Transfer failed");
      } finally {
        l(!1);
      }
  }, E = async (n, a) => await f.post("/invite/update-invite-info", {
    id: n,
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
          m,
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
          m,
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
  A as default
};
