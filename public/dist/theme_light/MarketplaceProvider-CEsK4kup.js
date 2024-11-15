import { j as F } from "./vendor-radix-CNSo_uHA.js";
import { r as s } from "./vendor-react-U4DfHahV.js";
import { a as M, x as he, g as a, v as me, u as Se, f as ye } from "./main-BjushY0K.js";
import { f as ve, n as Ce, W as ge, o as ke, q as xe, U as Te } from "./vendor-web3-Bd_bcm0c.js";
import { u as Ee, B as y } from "./vendor-utils-BclDYac0.js";
import { u as Pe } from "./useTransaction-DJwNUSV7.js";
const $ = s.createContext(void 0);
function Oe({ children: o }) {
  const { t: g } = Ee(), m = M.isAuthenticated(), [k, l] = s.useState(""), [x, T] = s.useState(), [d, p] = s.useState(), [U] = s.useState(he), [V, S] = s.useState(!1), [H, v] = s.useState(!1), [E, K] = s.useState({ method: "", message: "", topic: "", response: {} }), [P, _] = s.useState(null), j = s.useRef(null), [L, C] = s.useState(!1), [i, Q] = s.useState(null), { signTransaction: z, waitForTransactionExection: G, tokenTypeByChainId: X } = Pe(), [Y, w] = s.useState(!1), [Z, A] = s.useState(!1), [ee, se] = s.useState({ name: "", url: "" }), [R, W] = s.useState(!1), [t, te] = s.useState(), b = s.useRef(), ne = (e) => {
    te(e), b.current = e;
  }, f = s.useCallback(() => {
    var n;
    const e = (n = b.current) == null ? void 0 : n.getActiveSessions();
    if (a("activeSessions", e), e && Object.keys(e).length > 0) {
      const c = Object.values(e)[0];
      p(c), W(!0);
    } else
      W(!1), p(void 0);
  }, []), q = s.useCallback(async (e) => {
    a("event", e);
    const { topic: n, params: c, id: h } = e, { request: r, chainId: O } = c, u = r.params[0];
    r.method === "eth_sendTransaction" ? (Q({
      from: u.from,
      to: u.to,
      value: ve(Ce(u.value || "")),
      data: u.data,
      token: X(O)
    }), C(!0), K({
      message: JSON.stringify(u, null, 2),
      method: r.method,
      topic: n,
      response: { id: h, jsonrpc: "2.0", result: "" }
    })) : r.method === "eth_signTypedData_v4" ? a("transferrequest", u) : a("else");
  }, [x]), D = s.useCallback(async (e) => {
    a("proposal received", e), _(e), j.current = e, S(!0);
  }, []), N = (e) => {
    a("proposal_expire", e), B();
  }, I = s.useCallback(() => {
    a("on session delete"), f();
  }, [f]), oe = async () => {
    l(k);
  }, ae = async () => {
    const e = new ke({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), n = await xe.init({
      core: e,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    ne(n), f();
  };
  s.useEffect(() => (oe(), ae(), () => {
    t && (t.off("session_proposal", D), t.off("proposal_expire", N), t.off("session_request", q), t.off("session_delete", I));
  }), []), s.useEffect(() => {
    t && (t.on("session_proposal", D), t.on("proposal_expire", N), t.on("session_request", q), t.on("session_delete", I), f());
  }, [t, q, I, f]);
  const re = async (e) => {
    if (a("pairing with uri", e), e)
      try {
        await (t == null ? void 0 : t.pair({ uri: e })), S(!0);
      } catch (n) {
        console.error("Error pairing with uri", n), y.error(n.message);
      }
  }, ce = s.useCallback(async () => {
    var h;
    const { address: e } = M.all();
    if (!j.current || !e)
      return;
    const { id: n, params: c } = j.current;
    try {
      const r = {
        proposal: c,
        supportedNamespaces: {
          eip155: {
            chains: [`eip155:${U.id}`],
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            accounts: [`eip155:${U.id}:${e}`]
          }
        }
      }, O = ge(r);
      v(!0);
      const u = await ((h = b.current) == null ? void 0 : h.approveSession({ id: n, namespaces: O }));
      p(u), W(!0), S(!1), w(!1), _(null), y.success(g("toastSuccess.connectSuccess"));
    } catch (r) {
      console.error("Error approving session:", r);
    } finally {
      v(!1);
    }
  }, [t]), ie = async () => {
    if (P)
      try {
        await (t == null ? void 0 : t.rejectSession({
          id: P.id,
          reason: Te("USER_REJECTED")
        })), S(!1), _(null);
      } catch (e) {
        console.error("Error rejecting session:", e);
      }
  }, ue = async () => {
    if (i)
      try {
        v(!0);
        let e = "";
        const n = await z({
          to: i == null ? void 0 : i.to,
          amount: i.value,
          data: i.data,
          token: i.token,
          transactionType: me.SWAP
        });
        n != null && n.needOtp ? e = await G(n.transactionId) : e = n == null ? void 0 : n.hash, a("hash is", e);
        const { topic: c, response: h } = E, r = {
          ...h,
          result: e
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: c,
          response: r
        })), a("successful"), C(!1);
      } catch (e) {
        console.error("Error confirming transfer:", e), y.error("Transfer failed");
      } finally {
        v(!1);
      }
  }, le = async () => {
    const { topic: e, response: n } = E, { id: c } = n;
    await (t == null ? void 0 : t.respondSessionRequest({
      topic: e,
      response: {
        id: c,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), C(!1), y.info("Transfer rejected");
  }, B = async () => {
    d != null && d.topic && (await (t == null ? void 0 : t.disconnectSession({
      topic: d.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), f(), y.info("Disconnected"));
  }, de = () => {
    a("open"), A(!0), w(!0);
  }, pe = s.useCallback(() => {
    m && (R ? B() : de());
  }, [m, R]), fe = {
    isAuthenticated: m,
    isConnected: R,
    handleConnect: pe,
    connectOpen: V,
    setConnectOpen: S,
    sessionProposal: P,
    handleRejectSession: ie,
    handleApproveSession: ce,
    loading: H,
    transferOpen: L,
    setTransferOpen: C,
    transferDetails: i,
    requestContent: E,
    handleRejectTransfer: le,
    handleConfirmTransfer: ue,
    pair: re,
    isModalOpen: Y,
    dappInfo: ee,
    setDappInfo: se,
    setIsModalOpen: w,
    displayUriInput: Z,
    setDisplayUriInput: A
  };
  return /* @__PURE__ */ F.jsx($.Provider, { value: fe, children: o });
}
function Me() {
  const o = s.useContext($);
  if (o === void 0)
    throw new Error("useWalletConnect must be used within a WalletConnectProvider");
  return o;
}
const _e = async () => {
  const { data: o } = await ye.get("/user/info");
  return o;
}, je = (o) => Se({
  queryKey: ["userInfo"],
  queryFn: _e,
  enabled: (o == null ? void 0 : o.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...o
}), J = s.createContext(void 0);
function Ue({ children: o }) {
  const { address: g } = M.all(), [m, k] = s.useState(!1), { data: l } = je({
    enabled: !!g
  }), x = s.useCallback(async () => {
    try {
      const d = ((l == null ? void 0 : l.purchasedProducts) || []).some(
        (p) => p.status === "active" && p.unread
      );
      k(d);
    } catch (T) {
      console.error("Failed to check new products:", T);
    }
  }, [l]);
  return /* @__PURE__ */ F.jsx(J.Provider, { value: { checkNewProducts: x, hasNewProducts: m }, children: o });
}
const Ae = () => {
  const o = s.useContext(J);
  if (o === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return o;
};
export {
  Ue as M,
  Oe as W,
  je as a,
  Ae as b,
  Me as u
};
