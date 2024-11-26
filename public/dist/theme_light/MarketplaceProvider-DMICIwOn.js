import { j as F } from "./vendor-radix-nT--cb5B.js";
import { r as s } from "./vendor-react-CwfAKKXk.js";
import { a as O, x as Ce, g as c, v as ge, u as ke, f as xe } from "./main-DtxzRDTa.js";
import { W as Te, h as Ee, i as Pe, U as we } from "./vendor-walletconnect-CwfKDfL-.js";
import { u as _e, B as y } from "./vendor-utils-DOORVzle.js";
import { u as je } from "./useTransaction-BD5FqpZY.js";
import { f as Re, l as We } from "./vendor-web3-VgZtbLWg.js";
const $ = s.createContext(void 0);
function Be({ children: o }) {
  const { t: k } = _e(), m = O.isAuthenticated(), [x, l] = s.useState(""), [T, E] = s.useState(), [p, d] = s.useState(), [V] = s.useState(Ce), [H, S] = s.useState(!1), [K, v] = s.useState(!1), [P, L] = s.useState({ method: "", message: "", topic: "", response: {} }), [w, _] = s.useState(null), j = s.useRef(null), [Q, C] = s.useState(!1), [u, z] = s.useState(null), { signTransaction: G, waitForTransactionExection: X, tokenTypeByChainId: Y } = je(), [Z, R] = s.useState(!1), [ee, M] = s.useState(!1), [se, te] = s.useState({ name: "", url: "" }), [W, b] = s.useState(!1), [t, ne] = s.useState(), q = s.useRef(), oe = (e) => {
    ne(e), q.current = e;
  }, f = s.useCallback(() => {
    var n;
    const e = (n = q.current) == null ? void 0 : n.getActiveSessions();
    if (c("activeSessions", e), e && Object.keys(e).length > 0) {
      const a = Object.values(e)[0];
      d(a), b(!0);
    } else
      b(!1), d(void 0);
  }, []), I = s.useCallback(async (e) => {
    c("event", e);
    const { topic: n, params: a, id: h } = e, { request: i, chainId: g } = a, r = i.params[0];
    i.method === "eth_sendTransaction" ? (z({
      from: r.from,
      to: r.to,
      value: Re(We(r.value || "")),
      data: r.data,
      token: Y(g)
    }), C(!0), L({
      message: JSON.stringify(r, null, 2),
      method: i.method,
      topic: n,
      response: { id: h, jsonrpc: "2.0", result: "" }
    })) : i.method === "eth_signTypedData_v4" ? c("transferrequest", r) : c("else");
  }, [T]), U = s.useCallback(async (e) => {
    c("proposal received", e), _(e), j.current = e, S(!0);
  }, []), A = (e) => {
    c("proposal_expire", e), D();
  }, N = s.useCallback(() => {
    c("on session delete"), f();
  }, [f]), ae = async () => {
    l(x);
  }, re = async () => {
    const e = new Ee({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), n = await Pe.init({
      core: e,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    oe(n), f();
  };
  s.useEffect(() => (ae(), re(), () => {
    t && (t.off("session_proposal", U), t.off("proposal_expire", A), t.off("session_request", I), t.off("session_delete", N));
  }), []), s.useEffect(() => {
    t && (t.on("session_proposal", U), t.on("proposal_expire", A), t.on("session_request", I), t.on("session_delete", N), f());
  }, [t, I, N, f]);
  const ce = async (e) => {
    if (c("pairing with uri", e), e)
      try {
        await (t == null ? void 0 : t.pair({ uri: e })), S(!0);
      } catch (n) {
        console.error("Error pairing with uri", n), y.error(n.message);
      }
  }, ie = s.useCallback(async () => {
    var h, i, g;
    const { address: e } = O.all();
    if (!j.current || !e)
      return;
    const { id: n, params: a } = j.current;
    try {
      const r = ((h = a.requiredNamespaces) == null ? void 0 : h.eip155) || ((i = a.optionalNamespaces) == null ? void 0 : i.eip155);
      if (!r)
        throw new Error("No EIP155 namespace found in proposal");
      const B = r.chains || [`eip155:${V.id}`], me = {
        proposal: a,
        supportedNamespaces: {
          eip155: {
            // chains: [`eip155:${chain.id}`],
            chains: B,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            // accounts: [`eip155:${chain.id}:${address}`],
            accounts: B.map((ve) => `${ve}:${e}`)
          }
        }
      }, Se = Te(me);
      v(!0);
      const ye = await ((g = q.current) == null ? void 0 : g.approveSession({ id: n, namespaces: Se }));
      d(ye), b(!0), S(!1), R(!1), _(null), y.success(k("toastSuccess.connectSuccess"));
    } catch (r) {
      console.error("Error approving session:", r);
    } finally {
      v(!1);
    }
  }, [t]), ue = async () => {
    if (w)
      try {
        await (t == null ? void 0 : t.rejectSession({
          id: w.id,
          reason: we("USER_REJECTED")
        })), S(!1), _(null);
      } catch (e) {
        console.error("Error rejecting session:", e);
      }
  }, le = async () => {
    if (u)
      try {
        v(!0);
        let e = "";
        const n = await G({
          to: u == null ? void 0 : u.to,
          amount: u.value,
          data: u.data,
          token: u.token,
          transactionType: ge.SWAP
        });
        n != null && n.needOtp ? e = await X(n.transactionId) : e = n == null ? void 0 : n.hash, c("hash is", e);
        const { topic: a, response: h } = P, i = {
          ...h,
          result: e
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: a,
          response: i
        })), c("successful"), C(!1);
      } catch (e) {
        console.error("Error confirming transfer:", e), y.error("Transfer failed");
      } finally {
        v(!1);
      }
  }, pe = async () => {
    const { topic: e, response: n } = P, { id: a } = n;
    await (t == null ? void 0 : t.respondSessionRequest({
      topic: e,
      response: {
        id: a,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), C(!1), y.info("Transfer rejected");
  }, D = async () => {
    p != null && p.topic && (await (t == null ? void 0 : t.disconnectSession({
      topic: p.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), f(), y.info("Disconnected"));
  }, de = () => {
    c("open"), M(!0), R(!0);
  }, fe = s.useCallback(() => {
    m && (W ? D() : de());
  }, [m, W]), he = {
    isAuthenticated: m,
    isConnected: W,
    handleConnect: fe,
    connectOpen: H,
    setConnectOpen: S,
    sessionProposal: w,
    handleRejectSession: ue,
    handleApproveSession: ie,
    loading: K,
    transferOpen: Q,
    setTransferOpen: C,
    transferDetails: u,
    requestContent: P,
    handleRejectTransfer: pe,
    handleConfirmTransfer: le,
    pair: ce,
    isModalOpen: Z,
    dappInfo: se,
    setDappInfo: te,
    setIsModalOpen: R,
    displayUriInput: ee,
    setDisplayUriInput: M
  };
  return /* @__PURE__ */ F.jsx($.Provider, { value: he, children: o });
}
function Fe() {
  const o = s.useContext($);
  if (o === void 0)
    throw new Error("useWalletConnect must be used within a WalletConnectProvider");
  return o;
}
const be = async () => {
  const { data: o } = await xe.get("/user/info");
  return o;
}, qe = (o) => ke({
  queryKey: ["userInfo"],
  queryFn: be,
  enabled: (o == null ? void 0 : o.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...o
}), J = s.createContext(void 0);
function $e({ children: o }) {
  const { address: k } = O.all(), [m, x] = s.useState(!1), { data: l } = qe({
    enabled: !!k
  }), T = s.useCallback(async () => {
    try {
      const p = ((l == null ? void 0 : l.purchasedProducts) || []).some(
        (d) => d.status === "active" && d.unread
      );
      x(p);
    } catch (E) {
      console.error("Failed to check new products:", E);
    }
  }, [l]);
  return /* @__PURE__ */ F.jsx(J.Provider, { value: { checkNewProducts: T, hasNewProducts: m }, children: o });
}
const Je = () => {
  const o = s.useContext(J);
  if (o === void 0)
    throw new Error("useMarketplace must be used within a MarketplaceProvider");
  return o;
};
export {
  $e as M,
  Be as W,
  qe as a,
  Je as b,
  Fe as u
};
