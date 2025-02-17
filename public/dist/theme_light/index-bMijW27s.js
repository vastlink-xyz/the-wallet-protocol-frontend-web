import { j as e } from "./vendor-radix-D7Ti2ut_.js";
import { D as f, a as b, b as g, c as W, d as N, e as M } from "./dialog-yHm3c7HJ.js";
import { c as T, I as E, B as m, g as x, L as y } from "./main-BoBlYE1P.js";
import { u as O } from "./MarketplaceProvider-DvLlIR_m.js";
import { r as h, f as R } from "./vendor-react-Bi1rjDlg.js";
import { u as w } from "./vendor-utils-BZIeOlaI.js";
function A({
  onPair: l,
  isModalOpen: d,
  dappInfo: o,
  setIsModalOpen: n,
  displayUriInput: c
}) {
  const { t: a } = w(), [i, u] = h.useState(""), [p, s] = h.useState(""), r = h.useRef(null);
  h.useEffect(() => () => {
    r.current && clearInterval(r.current);
  }, []);
  const j = () => {
    r.current && clearInterval(r.current), r.current = setInterval(async () => {
      try {
        const t = await navigator.clipboard.readText();
        x("clipboard", t), t.startsWith("wc:") && (r.current && clearInterval(r.current), x("exec on pair"), l(t));
      } catch (t) {
        console.error("Failed to read clipboard:", t);
      }
    }, 1e3);
  }, v = async () => {
    try {
      const t = await navigator.clipboard.readText();
      x("read", t), setTimeout(async () => {
        await navigator.clipboard.writeText(""), x("Clipboard cleared"), j(), window.open(o.url, "_blank");
      }, 500);
    } catch (t) {
      x("err", t), s(a("vastWalletConnect.pairModal.clipboardError"));
    }
  };
  return /* @__PURE__ */ e.jsx(
    f,
    {
      open: d,
      onOpenChange: (t) => n(t),
      children: /* @__PURE__ */ e.jsxs(
        b,
        {
          className: "sm:max-w-[500px] text-primary",
          onInteractOutside: (t) => {
            t.preventDefault();
          },
          children: [
            /* @__PURE__ */ e.jsxs(g, { children: [
              /* @__PURE__ */ e.jsx(W, { children: a("vastWalletConnect.pairModal.title") }),
              /* @__PURE__ */ e.jsx(N, {})
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "mb-4", children: a("vastWalletConnect.pairModal.instructions") }),
            /* @__PURE__ */ e.jsxs("ol", { className: "list-decimal list-inside mb-4", children: [
              /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.1") }),
              /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.2") }),
              /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.3") }),
              /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.4") }),
              c ? /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.5a") }) : /* @__PURE__ */ e.jsx("li", { children: a("vastWalletConnect.pairModal.steps.5b") })
            ] }),
            p ? /* @__PURE__ */ e.jsx("div", { className: "text-destructive-foreground bg-destructive p-2 rounded", children: p }) : null,
            !c && /* @__PURE__ */ e.jsx(
              "span",
              {
                className: T(
                  "text-blue-600 hover:text-blue-800 mb-4 cursor-pointer inline-block",
                  p && "cursor-not-allowed"
                ),
                onClick: () => v(),
                children: a("vastWalletConnect.pairModal.goToDapp")
              }
            ),
            c && /* @__PURE__ */ e.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ e.jsx(
                E,
                {
                  type: "text",
                  onChange: (t) => u(t.target.value),
                  placeholder: a("vastWalletConnect.pairModal.enterUri"),
                  className: "focus-visible:ring-black"
                }
              ),
              /* @__PURE__ */ e.jsx(
                m,
                {
                  type: "button",
                  onClick: () => l(i),
                  children: a("vastWalletConnect.pairModal.pair")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function U({ className: l, buttonClassName: d }) {
  const { t: o } = w(), { isAuthenticated: n, isConnected: c, handleConnect: a } = O(), i = R();
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      className: T([
        "h-7 px-4 py-2.5 bg-white rounded-[60px]",
        "justify-center items-center gap-2 flex cursor-pointer",
        !n && "cursor-default",
        l
      ]),
      onClick: () => {
        n ? a() : i("/auth");
      },
      children: /* @__PURE__ */ e.jsx("div", { className: T(
        "text-center text-[#111111] text-sm font-medium leading-none select-none",
        d
      ), children: o(c ? "vastWalletConnect.disconnectSession" : "vastWalletConnect.connectDApps") })
    }
  );
}
function _() {
  const { t: l } = w(), {
    connectOpen: d,
    setConnectOpen: o,
    sessionProposal: n,
    handleRejectSession: c,
    handleApproveSession: a,
    loading: i,
    transferOpen: u,
    setTransferOpen: p,
    transferDetails: s,
    handleRejectTransfer: r,
    handleConfirmTransfer: j,
    pair: v,
    isModalOpen: t,
    dappInfo: k,
    setIsModalOpen: I,
    displayUriInput: D
  } = O();
  return /* @__PURE__ */ e.jsxs("div", { className: "", children: [
    /* @__PURE__ */ e.jsx(
      f,
      {
        open: d,
        onOpenChange: (C) => o(C),
        children: /* @__PURE__ */ e.jsxs(b, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ e.jsxs(g, { children: [
            /* @__PURE__ */ e.jsx(W, { children: l("vastWalletConnect.connectAccount") }),
            /* @__PURE__ */ e.jsx(N, { children: n == null ? void 0 : n.params.proposer.metadata.name })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "border mx-auto flex items-center justify-between space-x-4 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ e.jsx("img", { className: "w-[14px]", src: n == null ? void 0 : n.params.proposer.metadata.icons[0], alt: "" }),
            /* @__PURE__ */ e.jsx("p", { children: n == null ? void 0 : n.params.proposer.metadata.url })
          ] }),
          /* @__PURE__ */ e.jsxs(M, { children: [
            /* @__PURE__ */ e.jsx(m, { onClick: c, variant: "outline", children: l("vastWalletConnect.reject") }),
            /* @__PURE__ */ e.jsx(m, { onClick: a, children: i ? /* @__PURE__ */ e.jsx(y, {}) : l("vastWalletConnect.approve") })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      f,
      {
        open: u,
        onOpenChange: (C) => p(C),
        children: /* @__PURE__ */ e.jsxs(b, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ e.jsxs(g, { children: [
            /* @__PURE__ */ e.jsx(W, { children: "Confirm Transfer" }),
            /* @__PURE__ */ e.jsx(N, { children: "Please review the transfer details below" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "From:" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: s == null ? void 0 : s.from })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "To:" }),
              /* @__PURE__ */ e.jsx("p", { className: "text-sm", children: s == null ? void 0 : s.to })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("label", { className: "font-medium", children: "Amount:" }),
              /* @__PURE__ */ e.jsxs("p", { className: "text-sm", children: [
                s == null ? void 0 : s.value,
                " ETH"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e.jsxs(M, { children: [
            /* @__PURE__ */ e.jsx(m, { onClick: r, variant: "outline", children: "Reject" }),
            /* @__PURE__ */ e.jsx(m, { onClick: j, disabled: i, children: i ? /* @__PURE__ */ e.jsx(y, {}) : "Confirm" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      A,
      {
        onPair: v,
        isModalOpen: t,
        dappInfo: k,
        setIsModalOpen: I,
        displayUriInput: D
      }
    )
  ] });
}
export {
  _ as V,
  U as W
};
