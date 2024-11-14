import { j as e } from "./vendor-radix-CXAw23nV.js";
import { r as n } from "./vendor-react-U4DfHahV.js";
import { s as Z, c as q, I as je, B as b, g as c, a as Q, t as ve, L as X, v as Ce } from "./main-OpUhS-4m.js";
import { f as ge, l as ye, W as be, n as Se, o as Te, U as We } from "./vendor-web3-BqNTAT7x.js";
import { D as A, a as U, b as B, c as L, d as F, e as Y } from "./dialog-xDfdpN8K.js";
import { u as ee, B as y } from "./vendor-utils-CQorlrD-.js";
import { u as Ne } from "./useTransaction-DYOvkNm2.js";
function ke({
  onPair: S
}) {
  const { t: i } = ee(), [m, T] = n.useState(""), [g, k] = n.useState(""), {
    isModalOpen: w,
    dappInfo: V,
    setIsModalOpen: j,
    displayUriInput: x
  } = Z(), d = n.useRef(null);
  n.useEffect(() => () => {
    d.current && clearInterval(d.current);
  }, []);
  const E = () => {
    d.current && clearInterval(d.current), d.current = setInterval(async () => {
      try {
        const r = await navigator.clipboard.readText();
        c("clipboard", r), r.startsWith("wc:") && (d.current && clearInterval(d.current), c("exec on pair"), S(r));
      } catch (r) {
        console.error("Failed to read clipboard:", r);
      }
    }, 1e3);
  }, f = async () => {
    try {
      const r = await navigator.clipboard.readText();
      c("read", r), setTimeout(async () => {
        await navigator.clipboard.writeText(""), c("Clipboard cleared"), E(), window.open(V.url, "_blank");
      }, 500);
    } catch (r) {
      c("err", r), k(i("vastWalletConnect.pairModal.clipboardError"));
    }
  };
  return /* @__PURE__ */ e.jsx(
    A,
    {
      open: w,
      onOpenChange: (r) => j(r),
      children: /* @__PURE__ */ e.jsxs(
        U,
        {
          className: "sm:max-w-[500px] text-primary",
          onInteractOutside: (r) => {
            r.preventDefault();
          },
          children: [
            /* @__PURE__ */ e.jsxs(B, { children: [
              /* @__PURE__ */ e.jsx(L, { children: i("vastWalletConnect.pairModal.title") }),
              /* @__PURE__ */ e.jsx(F, {})
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: i("vastWalletConnect.pairModal.instructions") }),
            /* @__PURE__ */ e.jsxs("ol", { className: "list-decimal list-inside mb-4", children: [
              /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.1") }),
              /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.2") }),
              /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.3") }),
              /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.4") }),
              x ? /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.5a") }) : /* @__PURE__ */ e.jsx("li", { children: i("vastWalletConnect.pairModal.steps.5b") })
            ] }),
            g ? /* @__PURE__ */ e.jsx("div", { className: "text-destructive-foreground bg-destructive p-2 rounded", children: g }) : null,
            !x && /* @__PURE__ */ e.jsx(
              "span",
              {
                className: q(
                  "text-blue-600 hover:text-blue-800 mb-4 cursor-pointer inline-block",
                  g && "cursor-not-allowed"
                ),
                onClick: () => f(),
                children: i("vastWalletConnect.pairModal.goToDapp")
              }
            ),
            x && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ e.jsx(
                je,
                {
                  type: "text",
                  onChange: (r) => T(r.target.value),
                  placeholder: i("vastWalletConnect.pairModal.enterUri"),
                  className: "focus-visible:ring-black"
                }
              ),
              /* @__PURE__ */ e.jsx(
                b,
                {
                  type: "button",
                  onClick: () => S(m),
                  children: i("vastWalletConnect.pairModal.pair")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function De({ className: S, buttonClassName: i }) {
  const { t: m } = ee(), T = Q.isAuthenticated(), [g, k] = n.useState(""), [w, V] = n.useState(), [j, x] = n.useState(), [d] = n.useState(ve), [E, f] = n.useState(!1), [r, W] = n.useState(!1), [P, se] = n.useState({ method: "", message: "", topic: "", response: {} }), [l, I] = n.useState(null), _ = n.useRef(null), [te, N] = n.useState(!1), [o, ne] = n.useState(null), { signTransaction: ae, waitForTransactionExection: re, tokenTypeByChainId: oe } = Ne(), {
    setIsModalOpen: $,
    isConnected: H,
    setIsConnected: M,
    web3wallet: t,
    setWeb3Wallet: ce,
    web3walletRef: J,
    setDisplayUriInput: ie
  } = Z(), v = n.useCallback(() => {
    var a;
    const s = (a = J.current) == null ? void 0 : a.getActiveSessions();
    if (s && Object.keys(s).length > 0) {
      const u = Object.values(s)[0];
      x(u), M(!0);
    } else
      M(!1), x(void 0);
  }, []), O = n.useCallback(async (s) => {
    c("event", s);
    const { topic: a, params: u, id: C } = s, { request: p, chainId: D } = u, h = p.params[0];
    p.method === "eth_sendTransaction" ? (ne({
      from: h.from,
      to: h.to,
      value: ge(ye(h.value || "")),
      data: h.data,
      token: oe(D)
    }), N(!0), se({
      message: JSON.stringify(h, null, 2),
      method: p.method,
      topic: a,
      response: { id: C, jsonrpc: "2.0", result: "" }
    })) : p.method === "eth_signTypedData_v4" ? c("transferrequest", h) : c("else");
  }, [w]), z = n.useCallback(async (s) => {
    c("proposal received", s), I(s), _.current = s, f(!0);
  }, []), G = (s) => {
    c("proposal_expire", s), K();
  }, R = n.useCallback(() => {
    c("on session delete"), v();
  }, [v]), le = async () => {
    k(g);
  }, de = async () => {
    const s = new Se({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), a = await Te.init({
      core: s,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    ce(a), v();
  };
  n.useEffect(() => (le(), de(), () => {
    t && (t.off("session_proposal", z), t.off("proposal_expire", G), t.off("session_request", O), t.off("session_delete", R));
  }), []), n.useEffect(() => {
    t && (t.on("session_proposal", z), t.on("proposal_expire", G), t.on("session_request", O), t.on("session_delete", R), v());
  }, [t, O, R, v]);
  const pe = async (s) => {
    if (c("pairing with uri", s), s)
      try {
        await (t == null ? void 0 : t.pair({ uri: s })), f(!0);
      } catch (a) {
        console.error("Error pairing with uri", a), y.error(a.message);
      }
  }, ue = n.useCallback(async () => {
    var C;
    const { address: s } = Q.all();
    if (!_.current || !s)
      return;
    const { id: a, params: u } = _.current;
    try {
      const p = {
        proposal: u,
        supportedNamespaces: {
          eip155: {
            chains: [`eip155:${d.id}`],
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            accounts: [`eip155:${d.id}:${s}`]
          }
        }
      }, D = be(p);
      W(!0);
      const h = await ((C = J.current) == null ? void 0 : C.approveSession({ id: a, namespaces: D }));
      x(h), M(!0), f(!1), $(!1), I(null), y.success(m("toastSuccess.connectSuccess"));
    } catch (p) {
      console.error("Error approving session:", p);
    } finally {
      W(!1);
    }
  }, [t]), me = async () => {
    if (l)
      try {
        await (t == null ? void 0 : t.rejectSession({
          id: l.id,
          reason: We("USER_REJECTED")
        })), f(!1), I(null);
      } catch (s) {
        console.error("Error rejecting session:", s);
      }
  }, he = async () => {
    if (o)
      try {
        W(!0);
        let s = "";
        const a = await ae({
          to: o == null ? void 0 : o.to,
          amount: o.value,
          data: o.data,
          token: o.token,
          transactionType: Ce.SWAP
        });
        a != null && a.needOtp ? s = await re(a.transactionId) : s = a == null ? void 0 : a.hash, c("hash is", s);
        const { topic: u, response: C } = P, p = {
          ...C,
          result: s
        };
        await (t == null ? void 0 : t.respondSessionRequest({
          topic: u,
          response: p
        })), c("successful"), N(!1);
      } catch (s) {
        console.error("Error confirming transfer:", s), y.error("Transfer failed");
      } finally {
        W(!1);
      }
  }, xe = async () => {
    const { topic: s, response: a } = P, { id: u } = a;
    await (t == null ? void 0 : t.respondSessionRequest({
      topic: s,
      response: {
        id: u,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), N(!1), y.info("Transfer rejected");
  }, K = async () => {
    j != null && j.topic && (await (t == null ? void 0 : t.disconnectSession({
      topic: j.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), v(), y.info("Disconnected"));
  }, fe = () => {
    c("open"), ie(!0), $(!0);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: q([
          "h-7 px-4 py-2.5 bg-white rounded-[60px]",
          "justify-center items-center gap-2 flex cursor-pointer",
          !T && "cursor-default",
          S
        ]),
        onClick: () => {
          T && (H ? K() : fe());
        },
        children: /* @__PURE__ */ e.jsx("div", { className: q(
          "text-center text-[#111111] text-sm font-medium  leading-none select-none",
          i
        ), children: m(H ? "vastWalletConnect.disconnectSession" : "vastWalletConnect.connectDApps") })
      }
    ),
    /* @__PURE__ */ e.jsx(
      A,
      {
        open: E,
        onOpenChange: (s) => f(s),
        children: /* @__PURE__ */ e.jsxs(U, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ e.jsxs(B, { children: [
            /* @__PURE__ */ e.jsx(L, { children: m("vastWalletConnect.connectAccount") }),
            /* @__PURE__ */ e.jsx(F, { children: l == null ? void 0 : l.params.proposer.metadata.name })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border mx-auto flex items-center justify-between space-x-4 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ e.jsx("img", { className: "w-[14px]", src: l == null ? void 0 : l.params.proposer.metadata.icons[0], alt: "" }),
            /* @__PURE__ */ e.jsx("p", { children: l == null ? void 0 : l.params.proposer.metadata.url })
          ] }),
          /* @__PURE__ */ e.jsxs(Y, { children: [
            /* @__PURE__ */ e.jsx(b, { onClick: me, variant: "outline", children: m("vastWalletConnect.reject") }),
            /* @__PURE__ */ e.jsx(b, { onClick: ue, children: r ? /* @__PURE__ */ e.jsx(X, {}) : m("vastWalletConnect.approve") })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      A,
      {
        open: te,
        onOpenChange: (s) => N(s),
        children: /* @__PURE__ */ e.jsxs(U, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ e.jsxs(B, { children: [
            /* @__PURE__ */ e.jsx(L, { children: "Confirm Transfer" }),
            /* @__PURE__ */ e.jsx(F, { children: "Please review the transfer details below" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "From:" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: o == null ? void 0 : o.from })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "To:" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: o == null ? void 0 : o.to })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "Amount:" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-sm", children: [
                o == null ? void 0 : o.value,
                " ETH"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(Y, { children: [
            /* @__PURE__ */ e.jsx(b, { onClick: xe, variant: "outline", children: "Reject" }),
            /* @__PURE__ */ e.jsx(b, { onClick: he, disabled: r, children: r ? /* @__PURE__ */ e.jsx(X, {}) : "Confirm" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(ke, { onPair: pe })
  ] });
}
export {
  De as V
};
