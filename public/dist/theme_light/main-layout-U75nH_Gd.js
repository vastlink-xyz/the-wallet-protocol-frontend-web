import { j as m } from "./vendor-radix-CtBTfL6E.js";
import { a as Ps, c as We, l as Kl, u as hA, b as dt, d as JA } from "./main-BiNWeoEw.js";
import { i as Ul, j as pA, L as $l, r as D, a as KA, p as zl, O as $A } from "./vendor-react-lU71vM3H.js";
import { D as vA, a as gA, b as mA, c as Qi, S as qA } from "./SendModal-CJ4L05nS.js";
import { C as eu, X as tu } from "./vendor-ui-utils-i3zS6aVb.js";
import { B as La } from "./button-ClT0lWkU.js";
import { u as Is, B as Mi } from "./vendor-utils-CKvC_yGz.js";
import { f as nu, h as ru, W as ou, b as au, i as iu, U as su } from "./vendor-web3-N5LxOC8E.js";
import { D as Ql, a as jl, b as Ol, c as Fl, d as Ll, e as ql } from "./dialog-PXNU6LFt.js";
import { u as lu } from "./useTransaction-BRdQ32DR.js";
import { I as Au } from "./input-CnzYCm7W.js";
import { L as eA } from "./index-BjYMiP7I.js";
import { T as uu } from "./transaction-Dz01ddzF.js";
import { s as cu, f as du } from "./index-DZmehw99.js";
import { T as fu } from "./TokenService-BJInqoec.js";
import { S as hu } from "./SendButton-CH8UNjN2.js";
import { M as pu } from "./MarketplaceProvider-BusqmB03.js";
function vu({ routes: f, currentRouteName: A }) {
  const { pathname: h } = Ul(), y = pA(), s = Ps.isAuthenticated();
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx("div", { className: We(
      "hidden tablet:flex",
      "justify-start items-center gap-6"
    ), children: f.map((w) => {
      const T = h.startsWith(w.href);
      return /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: We(
            "py-2 justify-start items-center gap-2 flex relative",
            T && "text-white"
          ),
          children: [
            /* @__PURE__ */ m.jsx(
              $l,
              {
                className: We(
                  "text-[#a1a1a1] text-base font-medium leading-none cursor-pointer",
                  T && "text-white",
                  !s && "cursor-default"
                ),
                to: w.href,
                onClick: (x) => {
                  s || x.preventDefault();
                },
                children: w.name
              }
            ),
            T && /* @__PURE__ */ m.jsx("div", { className: "absolute -bottom-2 left-0 w-full h-0.5 bg-white" })
          ]
        },
        w.name
      );
    }) }),
    /* @__PURE__ */ m.jsx("div", { className: We("flex tablet:hidden"), children: /* @__PURE__ */ m.jsxs(vA, { children: [
      /* @__PURE__ */ m.jsx(gA, { asChild: !0, children: /* @__PURE__ */ m.jsxs("div", { className: We(
        "h-7 justify-start items-center gap-1 inline-flex text-[#fafafa]",
        !s && "text-[#a1a1a1]"
      ), children: [
        /* @__PURE__ */ m.jsx("div", { className: We(
          "text-base font-medium leading-none",
          !s && "text-[#979797]"
        ), children: A }),
        /* @__PURE__ */ m.jsx(
          eu,
          {
            className: We(
              "w-4 h-4"
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ m.jsx(mA, { className: "bg-white", children: f.map((w) => {
        const T = h.startsWith(w.href);
        return /* @__PURE__ */ m.jsx(
          Qi,
          {
            onClick: (x) => {
              if (!s) {
                x.preventDefault(), y("/auth");
                return;
              }
              y(w.href);
            },
            children: T ? /* @__PURE__ */ m.jsxs($l, { to: w.href, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ m.jsx("div", { className: "text-brand-foreground", children: w.name }),
              /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ] }) : /* @__PURE__ */ m.jsx("div", { className: "", children: w.name })
          },
          w.name
        );
      }) })
    ] }) })
  ] });
}
function tA({
  onLanguageChange: f
}) {
  const { i18n: A } = Is(), [h, y] = D.useState(!1);
  D.useEffect(() => {
    const T = Kl.getData();
    T && A.changeLanguage(T);
  }, [A]);
  const s = (T) => {
    A.changeLanguage(T), Kl.setData(T), y(!1), f == null || f();
  }, w = /* @__PURE__ */ m.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ m.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ m.jsx("div", { className: We(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ m.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ m.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ m.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Choose your language" }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            onClick: () => y(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ m.jsx(tu, {})
          }
        )
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "p-6 border-b border-[#EBEBEB] flex justify-center gap-[82px]", children: [
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            onClick: () => s("en"),
            className: We(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              A.language === "en" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "English",
              A.language === "en" && /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            onClick: () => s("zh"),
            className: We(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              A.language === "zh" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "简体中文",
              A.language === "zh" && /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ m.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[30px]" })
    ] }) }),
    /* @__PURE__ */ m.jsx("div", { className: We(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ m.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ m.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Choose your language" }),
        /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              onClick: () => s("en"),
              className: We(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                A.language === "en" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "English",
                A.language === "en" && /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            "div",
            {
              onClick: () => s("zh"),
              className: We(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                A.language === "zh" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "简体中文",
                A.language === "zh" && /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("footer", { className: "", children: /* @__PURE__ */ m.jsx(
        La,
        {
          variant: "ghost",
          className: We(
            "w-full text-[15px] rounded-none",
            "hover:bg-black/5"
          ),
          onClick: () => y(!1),
          children: "Cancel"
        }
      ) })
    ] }) })
  ] });
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ m.jsx(
        "img",
        {
          className: We(
            "w-[24px] h-[24px] cursor-pointer",
            "hidden laptop:flex"
          ),
          src: "/imgs/icons/language.svg",
          onClick: () => y(!0)
        }
      ),
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "flex laptop:hidden cursor-pointer",
          onClick: () => y(!0),
          children: "Language"
        }
      )
    ] }),
    h && KA.createPortal(
      /* @__PURE__ */ m.jsx(
        "div",
        {
          className: "fixed inset-0 z-[100] flex items-center justify-center font-['Roboto']",
          style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0 },
          children: w
        }
      ),
      document.body
      // mount to body to avoid layout shift
    )
  ] });
}
function gu({
  onPair: f
}) {
  const { t: A } = Is(), [h, y] = D.useState(""), [s, w] = D.useState(""), {
    isModalOpen: T,
    dappInfo: x,
    setIsModalOpen: b,
    displayUriInput: E
  } = hA(), N = D.useRef(null);
  D.useEffect(() => () => {
    N.current && clearInterval(N.current);
  }, []);
  const B = () => {
    N.current && clearInterval(N.current), N.current = setInterval(async () => {
      try {
        const L = await navigator.clipboard.readText();
        dt("clipboard", L), L.startsWith("wc:") && (N.current && clearInterval(N.current), dt("exec on pair"), f(L));
      } catch (L) {
        console.error("Failed to read clipboard:", L);
      }
    }, 1e3);
  }, j = async () => {
    try {
      const L = await navigator.clipboard.readText();
      dt("read", L), setTimeout(async () => {
        await navigator.clipboard.writeText(""), dt("Clipboard cleared"), B(), window.open(x.url, "_blank");
      }, 500);
    } catch (L) {
      dt("err", L), w(A("vastWalletConnect.pairModal.clipboardError"));
    }
  };
  return /* @__PURE__ */ m.jsx(
    Ql,
    {
      open: T,
      onOpenChange: (L) => b(L),
      children: /* @__PURE__ */ m.jsxs(
        jl,
        {
          className: "sm:max-w-[500px] text-primary",
          onInteractOutside: (L) => {
            L.preventDefault();
          },
          children: [
            /* @__PURE__ */ m.jsxs(Ol, { children: [
              /* @__PURE__ */ m.jsx(Fl, { children: A("vastWalletConnect.pairModal.title") }),
              /* @__PURE__ */ m.jsx(Ll, {})
            ] }),
            /* @__PURE__ */ m.jsx("p", { className: "mb-4", children: A("vastWalletConnect.pairModal.instructions") }),
            /* @__PURE__ */ m.jsxs("ol", { className: "list-decimal list-inside mb-4", children: [
              /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.1") }),
              /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.2") }),
              /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.3") }),
              /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.4") }),
              E ? /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.5a") }) : /* @__PURE__ */ m.jsx("li", { children: A("vastWalletConnect.pairModal.steps.5b") })
            ] }),
            s ? /* @__PURE__ */ m.jsx("div", { className: "text-destructive-foreground bg-destructive p-2 rounded", children: s }) : null,
            !E && /* @__PURE__ */ m.jsx(
              "span",
              {
                className: We(
                  "text-blue-600 hover:text-blue-800 mb-4 cursor-pointer inline-block",
                  s && "cursor-not-allowed"
                ),
                onClick: () => j(),
                children: A("vastWalletConnect.pairModal.goToDapp")
              }
            ),
            E && /* @__PURE__ */ m.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ m.jsx(
                Au,
                {
                  type: "text",
                  onChange: (L) => y(L.target.value),
                  placeholder: A("vastWalletConnect.pairModal.enterUri"),
                  className: "focus-visible:ring-black"
                }
              ),
              /* @__PURE__ */ m.jsx(
                La,
                {
                  type: "button",
                  onClick: () => f(h),
                  children: A("vastWalletConnect.pairModal.pair")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function nA({ className: f }) {
  const { t: A } = Is(), h = Ps.isAuthenticated(), [y, s] = D.useState(""), [w, T] = D.useState(), [x, b] = D.useState(), [E] = D.useState(cu), [N, B] = D.useState(!1), [j, L] = D.useState(!1), [H, _] = D.useState({ method: "", message: "", topic: "", response: {} }), [I, k] = D.useState(null), V = D.useRef(null), [re, X] = D.useState(!1), [z, $] = D.useState(null), { signTransaction: Z, waitForTransactionExection: ie, tokenTypeByChainId: oe } = lu(), {
    setIsModalOpen: ce,
    isConnected: se,
    setIsConnected: Ae,
    web3wallet: ee,
    setWeb3Wallet: he,
    web3walletRef: Re,
    setDisplayUriInput: Pe
  } = hA(), q = D.useCallback(() => {
    var we;
    const ne = (we = Re.current) == null ? void 0 : we.getActiveSessions();
    if (ne && Object.keys(ne).length > 0) {
      const be = Object.values(ne)[0];
      b(be), Ae(!0);
    } else
      Ae(!1), b(void 0);
  }, []), le = D.useCallback(async (ne) => {
    dt("event", ne);
    const { topic: we, params: be, id: De } = ne, { request: Oe, chainId: Ve } = be, Qe = Oe.params[0];
    Oe.method === "eth_sendTransaction" ? ($({
      from: Qe.from,
      to: Qe.to,
      value: nu(ru(Qe.value || "")),
      data: Qe.data,
      token: oe(Ve)
    }), X(!0), _({
      message: JSON.stringify(Qe, null, 2),
      method: Oe.method,
      topic: we,
      response: { id: De, jsonrpc: "2.0", result: "" }
    })) : Oe.method === "eth_signTypedData_v4" ? dt("transferrequest", Qe) : dt("else");
  }, [w]), pe = D.useCallback(async (ne) => {
    dt("proposal received", ne), k(ne), V.current = ne, B(!0);
  }, []), xe = (ne) => {
    dt("proposal_expire", ne), $e();
  }, ae = D.useCallback(() => {
    dt("on session delete"), q();
  }, [q]), me = async () => {
    s(y);
  }, Fe = async () => {
    const ne = new au({ projectId: "b3feb6b7c0ea5530a6eaa11d45fb4293" }), we = await iu.init({
      core: ne,
      metadata: { name: "Vastlink", description: "Vastlink", url: "www.walletconnect.com", icons: [] }
    });
    he(we), q();
  };
  D.useEffect(() => (me(), Fe(), () => {
    ee && (ee.off("session_proposal", pe), ee.off("proposal_expire", xe), ee.off("session_request", le), ee.off("session_delete", ae));
  }), []), D.useEffect(() => {
    ee && (ee.on("session_proposal", pe), ee.on("proposal_expire", xe), ee.on("session_request", le), ee.on("session_delete", ae), q());
  }, [ee, le, ae, q]);
  const Ce = async (ne) => {
    if (dt("pairing with uri", ne), ne)
      try {
        await (ee == null ? void 0 : ee.pair({ uri: ne })), B(!0);
      } catch (we) {
        console.error("Error pairing with uri", we), Mi.error(we.message);
      }
  }, ue = D.useCallback(async () => {
    var De;
    const { address: ne } = Ps.all();
    if (!V.current || !ne)
      return;
    const { id: we, params: be } = V.current;
    try {
      const Oe = {
        proposal: be,
        supportedNamespaces: {
          eip155: {
            chains: [`eip155:${E.id}`],
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData_v4"],
            events: ["accountsChanged", "chainChanged"],
            accounts: [`eip155:${E.id}:${ne}`]
          }
        }
      }, Ve = ou(Oe);
      L(!0);
      const Qe = await ((De = Re.current) == null ? void 0 : De.approveSession({ id: we, namespaces: Ve }));
      b(Qe), Ae(!0), B(!1), ce(!1), k(null), Mi.success(A("toastSuccess.connectSuccess"));
    } catch (Oe) {
      console.error("Error approving session:", Oe);
    } finally {
      L(!1);
    }
  }, [ee]), He = async () => {
    if (I)
      try {
        await (ee == null ? void 0 : ee.rejectSession({
          id: I.id,
          reason: su("USER_REJECTED")
        })), B(!1), k(null);
      } catch (ne) {
        console.error("Error rejecting session:", ne);
      }
  }, xt = async () => {
    if (z)
      try {
        L(!0);
        let ne = "";
        const we = await Z({
          to: z == null ? void 0 : z.to,
          amount: z.value,
          data: z.data,
          token: z.token,
          transactionType: uu.SWAP
        });
        we != null && we.needOtp ? ne = await ie(we.transactionId) : ne = we == null ? void 0 : we.hash, dt("hash is", ne);
        const { topic: be, response: De } = H, Oe = {
          ...De,
          result: ne
        };
        await (ee == null ? void 0 : ee.respondSessionRequest({
          topic: be,
          response: Oe
        })), dt("successful"), X(!1);
      } catch (ne) {
        console.error("Error confirming transfer:", ne), Mi.error("Transfer failed");
      } finally {
        L(!1);
      }
  }, Et = async () => {
    const { topic: ne, response: we } = H, { id: be } = we;
    await (ee == null ? void 0 : ee.respondSessionRequest({
      topic: ne,
      response: {
        id: be,
        jsonrpc: "2.0",
        error: {
          code: 5e3,
          message: "User rejected."
        }
      }
    })), X(!1), Mi.info("Transfer rejected");
  }, $e = async () => {
    x != null && x.topic && (await (ee == null ? void 0 : ee.disconnectSession({
      topic: x.topic,
      reason: {
        code: 5e3,
        message: "User disconnected"
      }
    })), q(), Mi.info("Disconnected"));
  }, at = () => {
    dt("open"), Pe(!0), ce(!0);
  };
  return /* @__PURE__ */ m.jsxs("div", { className: "", children: [
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: We([
          "h-7 px-4 py-2.5 bg-white rounded-[60px]",
          "justify-center items-center gap-2 flex cursor-pointer",
          !h && "cursor-default",
          f
        ]),
        onClick: () => {
          h && (se ? $e() : at());
        },
        children: /* @__PURE__ */ m.jsx("div", { className: "text-center text-[#111111] text-sm font-medium  leading-none select-none", children: A(se ? "vastWalletConnect.disconnectSession" : "vastWalletConnect.connectDApps") })
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ql,
      {
        open: N,
        onOpenChange: (ne) => B(ne),
        children: /* @__PURE__ */ m.jsxs(jl, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ m.jsxs(Ol, { children: [
            /* @__PURE__ */ m.jsx(Fl, { children: A("vastWalletConnect.connectAccount") }),
            /* @__PURE__ */ m.jsx(Ll, { children: I == null ? void 0 : I.params.proposer.metadata.name })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "border mx-auto flex items-center justify-between space-x-4 rounded-full px-4 py-2", children: [
            /* @__PURE__ */ m.jsx("img", { className: "w-[14px]", src: I == null ? void 0 : I.params.proposer.metadata.icons[0], alt: "" }),
            /* @__PURE__ */ m.jsx("p", { children: I == null ? void 0 : I.params.proposer.metadata.url })
          ] }),
          /* @__PURE__ */ m.jsxs(ql, { children: [
            /* @__PURE__ */ m.jsx(La, { onClick: He, variant: "outline", children: A("vastWalletConnect.reject") }),
            /* @__PURE__ */ m.jsx(La, { onClick: ue, children: j ? /* @__PURE__ */ m.jsx(eA, {}) : A("vastWalletConnect.approve") })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ql,
      {
        open: re,
        onOpenChange: (ne) => X(ne),
        children: /* @__PURE__ */ m.jsxs(jl, { className: "sm:max-w-[425px] text-primary", children: [
          /* @__PURE__ */ m.jsxs(Ol, { children: [
            /* @__PURE__ */ m.jsx(Fl, { children: "Confirm Transfer" }),
            /* @__PURE__ */ m.jsx(Ll, { children: "Please review the transfer details below" })
          ] }),
          /* @__PURE__ */ m.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("label", { className: "font-medium", children: "From:" }),
              /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: z == null ? void 0 : z.from })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("label", { className: "font-medium", children: "To:" }),
              /* @__PURE__ */ m.jsx("p", { className: "text-sm", children: z == null ? void 0 : z.to })
            ] }),
            /* @__PURE__ */ m.jsxs("div", { children: [
              /* @__PURE__ */ m.jsx("label", { className: "font-medium", children: "Amount:" }),
              /* @__PURE__ */ m.jsxs("p", { className: "text-sm", children: [
                z == null ? void 0 : z.value,
                " ETH"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ m.jsxs(ql, { children: [
            /* @__PURE__ */ m.jsx(La, { onClick: Et, variant: "outline", children: "Reject" }),
            /* @__PURE__ */ m.jsx(La, { onClick: xt, disabled: j, children: j ? /* @__PURE__ */ m.jsx(eA, {}) : "Confirm" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ m.jsx(gu, { onPair: Ce })
  ] });
}
function mu() {
  const [f, A] = D.useState(!1);
  return /* @__PURE__ */ m.jsxs("div", { className: "justify-start items-center gap-[21px] flex", children: [
    /* @__PURE__ */ m.jsx("div", { className: "hidden tablet:flex", children: /* @__PURE__ */ m.jsx(nA, {}) }),
    /* @__PURE__ */ m.jsxs("div", { className: "justify-start items-center gap-7 flex", children: [
      /* @__PURE__ */ m.jsx("div", { className: We(
        "hidden tablet:flex",
        "justify-start items-center gap-6"
      ) }),
      /* @__PURE__ */ m.jsx("div", { className: "laptop:hidden", children: /* @__PURE__ */ m.jsxs(
        vA,
        {
          modal: !1,
          open: f,
          onOpenChange: A,
          children: [
            /* @__PURE__ */ m.jsx(gA, { asChild: !0, children: /* @__PURE__ */ m.jsx("button", { className: "w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ m.jsx("img", { src: "/imgs/icons/menu.svg", className: "w-6 h-6" }) }) }),
            /* @__PURE__ */ m.jsxs(mA, { className: "bg-white border-none", children: [
              /* @__PURE__ */ m.jsx(
                Qi,
                {
                  className: We("flex tablet:hidden"),
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ m.jsx(nA, { className: "p-0 bg-transparent" })
                }
              ),
              /* @__PURE__ */ m.jsx(
                Qi,
                {
                  className: We("hidden tablet:flex"),
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ m.jsx("div", { children: "Profile" })
                }
              ),
              /* @__PURE__ */ m.jsx(
                Qi,
                {
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ m.jsx("div", { children: "Notification" })
                }
              ),
              /* @__PURE__ */ m.jsx(
                Qi,
                {
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ m.jsx(tA, { onLanguageChange: () => A(!1) })
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ m.jsx("div", { className: We(
        "flex tablet:hidden laptop:flex",
        "justify-start items-center gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ m.jsx("img", { className: "w-[24px] h-[24px] flex-shrink-0", src: "/imgs/icons/profile.png" }) }),
      /* @__PURE__ */ m.jsx("div", { className: We(
        "hidden laptop:block",
        "w-[2px] h-[20px] bg-[#404040]"
      ) }),
      /* @__PURE__ */ m.jsx("div", { className: We(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ m.jsx("img", { className: "w-[24px] h-[24px] flex-shrink-0", src: "/imgs/icons/message.svg" }) }),
      /* @__PURE__ */ m.jsx("div", { className: We(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0 cursor-pointer"
      ), children: /* @__PURE__ */ m.jsx(tA, {}) })
    ] })
  ] });
}
function yu() {
  const { pathname: f } = Ul(), { t: A } = Is(), h = pA(), y = [
    {
      name: A("header.dashboard"),
      href: "/dashboard"
    },
    {
      name: A("header.marketplace"),
      href: "/marketplace"
    },
    {
      name: A("header.community"),
      href: "/community"
    }
  ], s = y.find((T) => f.startsWith(T.href)), w = (s == null ? void 0 : s.name) || "Home";
  return /* @__PURE__ */ m.jsxs("div", { className: We(
    "w-full h-[60px] bg-[#111111] shadow justify-between items-center inline-flex",
    "tablet:px-10 px-4"
  ), children: [
    /* @__PURE__ */ m.jsxs("div", { className: "items-center flex", children: [
      /* @__PURE__ */ m.jsxs(
        "div",
        {
          className: We(
            "items-center gap-2 flex mr-[46px]",
            "mr-[20px] tablet:mr-[46px]",
            "cursor-pointer"
          ),
          onClick: () => h("/"),
          children: [
            /* @__PURE__ */ m.jsx("img", { src: "/imgs/logos/logo.svg" }),
            /* @__PURE__ */ m.jsx("div", { className: We(
              'text-white text-xl font-bold font-["Roboto_Mono"] leading-4',
              "hidden tablet:block"
            ), children: "Vastlink" })
          ]
        }
      ),
      /* @__PURE__ */ m.jsx(
        vu,
        {
          routes: y,
          currentRouteName: w
        }
      )
    ] }),
    /* @__PURE__ */ m.jsx(mu, {})
  ] });
}
var Lo = {}, Qo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rA;
function wu() {
  if (rA) return Qo;
  rA = 1;
  var f = D;
  function A(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, s = {}, w = {};
  function T(a) {
    return h.call(w, a) ? !0 : h.call(s, a) ? !1 : y.test(a) ? w[a] = !0 : (s[a] = !0, !1);
  }
  function x(a, c, g, C, O, R, U) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = C, this.attributeNamespace = O, this.mustUseProperty = g, this.propertyName = a, this.type = c, this.sanitizeURL = R, this.removeEmptyString = U;
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    b[a] = new x(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    b[c] = new x(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    b[a] = new x(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    b[a] = new x(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    b[a] = new x(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    b[a] = new x(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    b[a] = new x(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    b[a] = new x(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    b[a] = new x(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var E = /[\-:]([a-z])/g;
  function N(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var c = a.replace(
      E,
      N
    );
    b[c] = new x(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(E, N);
    b[c] = new x(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(E, N);
    b[c] = new x(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    b[a] = new x(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), b.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    b[a] = new x(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var B = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function(a) {
    j.forEach(function(c) {
      c = c + a.charAt(0).toUpperCase() + a.substring(1), B[c] = B[a];
    });
  });
  var L = /["'&<>]/;
  function H(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var c = L.exec(a);
    if (c) {
      var g = "", C, O = 0;
      for (C = c.index; C < a.length; C++) {
        switch (a.charCodeAt(C)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        O !== C && (g += a.substring(O, C)), O = C + 1, g += c;
      }
      a = O !== C ? g + a.substring(O, C) : g;
    }
    return a;
  }
  var _ = /([A-Z])/g, I = /^ms-/, k = Array.isArray;
  function V(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function re(a, c, g) {
    switch (c) {
      case "select":
        return V(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return V(2, null);
      case "math":
        return V(3, null);
      case "foreignObject":
        return V(1, null);
      case "table":
        return V(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return V(5, null);
      case "colgroup":
        return V(7, null);
      case "tr":
        return V(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? V(1, null) : a;
  }
  var X = /* @__PURE__ */ new Map();
  function z(a, c, g) {
    if (typeof g != "object") throw Error(A(62));
    c = !0;
    for (var C in g) if (h.call(g, C)) {
      var O = g[C];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (C.indexOf("--") === 0) {
          var R = H(C);
          O = H(("" + O).trim());
        } else {
          R = C;
          var U = X.get(R);
          U !== void 0 || (U = H(R.replace(_, "-$1").toLowerCase().replace(I, "-ms-")), X.set(R, U)), R = U, O = typeof O == "number" ? O === 0 || h.call(B, C) ? "" + O : O + "px" : H(("" + O).trim());
        }
        c ? (c = !1, a.push(' style="', R, ":", O)) : a.push(";", R, ":", O);
      }
    }
    c || a.push('"');
  }
  function $(a, c, g, C) {
    switch (g) {
      case "style":
        z(a, c, C);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = b.hasOwnProperty(g) ? b[g] : null, c !== null) {
        switch (typeof C) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            C && a.push(" ", g, '=""');
            break;
          case 4:
            C === !0 ? a.push(" ", g, '=""') : C !== !1 && a.push(" ", g, '="', H(C), '"');
            break;
          case 5:
            isNaN(C) || a.push(" ", g, '="', H(C), '"');
            break;
          case 6:
            !isNaN(C) && 1 <= C && a.push(" ", g, '="', H(C), '"');
            break;
          default:
            c.sanitizeURL && (C = "" + C), a.push(" ", g, '="', H(C), '"');
        }
      } else if (T(g)) {
        switch (typeof C) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        a.push(" ", g, '="', H(C), '"');
      }
    }
  }
  function Z(a, c, g) {
    if (c != null) {
      if (g != null) throw Error(A(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(A(61));
      c = c.__html, c != null && a.push("" + c);
    }
  }
  function ie(a) {
    var c = "";
    return f.Children.forEach(a, function(g) {
      g != null && (c += g);
    }), c;
  }
  function oe(a, c, g, C) {
    a.push(Ae(g));
    var O = g = null, R;
    for (R in c) if (h.call(c, R)) {
      var U = c[R];
      if (U != null) switch (R) {
        case "children":
          g = U;
          break;
        case "dangerouslySetInnerHTML":
          O = U;
          break;
        default:
          $(a, C, R, U);
      }
    }
    return a.push(">"), Z(a, O, g), typeof g == "string" ? (a.push(H(g)), null) : g;
  }
  var ce = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, se = /* @__PURE__ */ new Map();
  function Ae(a) {
    var c = se.get(a);
    if (c === void 0) {
      if (!ce.test(a)) throw Error(A(65, a));
      c = "<" + a, se.set(a, c);
    }
    return c;
  }
  function ee(a, c, g, C, O) {
    switch (c) {
      case "select":
        a.push(Ae("select"));
        var R = null, U = null;
        for (fe in g) if (h.call(g, fe)) {
          var J = g[fe];
          if (J != null) switch (fe) {
            case "children":
              R = J;
              break;
            case "dangerouslySetInnerHTML":
              U = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              $(a, C, fe, J);
          }
        }
        return a.push(">"), Z(a, U, R), R;
      case "option":
        U = O.selectedValue, a.push(Ae("option"));
        var de = J = null, ve = null, fe = null;
        for (R in g) if (h.call(g, R)) {
          var ke = g[R];
          if (ke != null) switch (R) {
            case "children":
              J = ke;
              break;
            case "selected":
              ve = ke;
              break;
            case "dangerouslySetInnerHTML":
              fe = ke;
              break;
            case "value":
              de = ke;
            default:
              $(a, C, R, ke);
          }
        }
        if (U != null) if (g = de !== null ? "" + de : ie(J), k(U)) {
          for (C = 0; C < U.length; C++)
            if ("" + U[C] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + U === g && a.push(' selected=""');
        else ve && a.push(' selected=""');
        return a.push(">"), Z(a, fe, J), J;
      case "textarea":
        a.push(Ae("textarea")), fe = U = R = null;
        for (J in g) if (h.call(g, J) && (de = g[J], de != null)) switch (J) {
          case "children":
            fe = de;
            break;
          case "value":
            R = de;
            break;
          case "defaultValue":
            U = de;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(91));
          default:
            $(
              a,
              C,
              J,
              de
            );
        }
        if (R === null && U !== null && (R = U), a.push(">"), fe != null) {
          if (R != null) throw Error(A(92));
          if (k(fe) && 1 < fe.length) throw Error(A(93));
          R = "" + fe;
        }
        return typeof R == "string" && R[0] === `
` && a.push(`
`), R !== null && a.push(H("" + R)), null;
      case "input":
        a.push(Ae("input")), de = fe = J = R = null;
        for (U in g) if (h.call(g, U) && (ve = g[U], ve != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, "input"));
          case "defaultChecked":
            de = ve;
            break;
          case "defaultValue":
            J = ve;
            break;
          case "checked":
            fe = ve;
            break;
          case "value":
            R = ve;
            break;
          default:
            $(a, C, U, ve);
        }
        return fe !== null ? $(a, C, "checked", fe) : de !== null && $(a, C, "checked", de), R !== null ? $(a, C, "value", R) : J !== null && $(a, C, "value", J), a.push("/>"), null;
      case "menuitem":
        a.push(Ae("menuitem"));
        for (var At in g) if (h.call(g, At) && (R = g[At], R != null)) switch (At) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(400));
          default:
            $(a, C, At, R);
        }
        return a.push(">"), null;
      case "title":
        a.push(Ae("title")), R = null;
        for (ke in g) if (h.call(g, ke) && (U = g[ke], U != null)) switch (ke) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(434));
          default:
            $(a, C, ke, U);
        }
        return a.push(">"), R;
      case "listing":
      case "pre":
        a.push(Ae(c)), U = R = null;
        for (de in g) if (h.call(g, de) && (J = g[de], J != null)) switch (de) {
          case "children":
            R = J;
            break;
          case "dangerouslySetInnerHTML":
            U = J;
            break;
          default:
            $(a, C, de, J);
        }
        if (a.push(">"), U != null) {
          if (R != null) throw Error(A(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(A(61));
          g = U.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof R == "string" && R[0] === `
` && a.push(`
`), R;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(Ae(c));
        for (var ut in g) if (h.call(g, ut) && (R = g[ut], R != null)) switch (ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, c));
          default:
            $(a, C, ut, R);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return oe(
          a,
          g,
          c,
          C
        );
      case "html":
        return O.insertionMode === 0 && a.push("<!DOCTYPE html>"), oe(a, g, c, C);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return oe(a, g, c, C);
        a.push(Ae(c)), U = R = null;
        for (ve in g) if (h.call(g, ve) && (J = g[ve], J != null)) switch (ve) {
          case "children":
            R = J;
            break;
          case "dangerouslySetInnerHTML":
            U = J;
            break;
          case "style":
            z(a, C, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            T(ve) && typeof J != "function" && typeof J != "symbol" && a.push(" ", ve, '="', H(J), '"');
        }
        return a.push(">"), Z(a, U, R), R;
    }
  }
  function he(a, c, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(A(395));
    return a.push(g), a.push('"></template>');
  }
  function Re(a, c, g, C) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(c.segmentPrefix), c = C.toString(16), a.push(c), a.push('">');
      default:
        throw Error(A(397));
    }
  }
  function Pe(a, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(A(397));
    }
  }
  var q = /[<\u2028\u2029]/g;
  function le(a) {
    return JSON.stringify(a).replace(q, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function pe(a, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function xe(a, c, g, C) {
    return g.generateStaticMarkup ? (a.push(H(c)), !1) : (c === "" ? a = C : (C && a.push("<!-- -->"), a.push(H(c)), a = !0), a);
  }
  var ae = Object.assign, me = Symbol.for("react.element"), Fe = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), He = Symbol.for("react.profiler"), xt = Symbol.for("react.provider"), Et = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), at = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), we = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), De = Symbol.for("react.scope"), Oe = Symbol.for("react.debug_trace_mode"), Ve = Symbol.for("react.legacy_hidden"), Qe = Symbol.for("react.default_value"), qe = Symbol.iterator;
  function ht(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Ce:
        return "Fragment";
      case Fe:
        return "Portal";
      case He:
        return "Profiler";
      case ue:
        return "StrictMode";
      case at:
        return "Suspense";
      case ne:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Et:
        return (a.displayName || "Context") + ".Consumer";
      case xt:
        return (a._context.displayName || "Context") + ".Provider";
      case $e:
        var c = a.render;
        return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case we:
        return c = a.displayName || null, c !== null ? c : ht(a.type) || "Memo";
      case be:
        c = a._payload, a = a._init;
        try {
          return ht(a(c));
        } catch {
        }
    }
    return null;
  }
  var jt = {};
  function mr(a, c) {
    if (a = a.contextTypes, !a) return jt;
    var g = {}, C;
    for (C in a) g[C] = c[C];
    return g;
  }
  var Ct = null;
  function nt(a, c) {
    if (a !== c) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = c.parent;
      if (a === null) {
        if (g !== null) throw Error(A(401));
      } else {
        if (g === null) throw Error(A(401));
        nt(a, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function Je(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Je(a);
  }
  function _n(a) {
    var c = a.parent;
    c !== null && _n(c), a.context._currentValue2 = a.value;
  }
  function Yn(a, c) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(A(402));
    a.depth === c.depth ? nt(a, c) : Yn(a, c);
  }
  function Xn(a, c) {
    var g = c.parent;
    if (g === null) throw Error(A(402));
    a.depth === g.depth ? nt(a, g) : Xn(a, g), c.context._currentValue2 = c.value;
  }
  function Ge(a) {
    var c = Ct;
    c !== a && (c === null ? _n(a) : a === null ? Je(c) : c.depth === a.depth ? nt(c, a) : c.depth > a.depth ? Yn(c, a) : Xn(c, a), Ct = a);
  }
  var Vn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function yr(a, c, g, C) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = Vn, a.props = g, a.state = O;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var U = c.contextType;
    if (a.context = typeof U == "object" && U !== null ? U._currentValue2 : C, U = c.getDerivedStateFromProps, typeof U == "function" && (U = U(g, O), O = U == null ? O : ae({}, O, U), a.state = O), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Vn.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (c = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && c.length === 1) a.state = c[0];
    else {
      for (R = U ? c[0] : a.state, O = !0, U = U ? 1 : 0; U < c.length; U++) {
        var J = c[U];
        J = typeof J == "function" ? J.call(a, R, g, C) : J, J != null && (O ? (O = !1, R = ae({}, R, J)) : ae(R, J));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function Jn(a, c, g) {
    var C = a.id;
    a = a.overflow;
    var O = 32 - Dn(C) - 1;
    C &= ~(1 << O), g += 1;
    var R = 32 - Dn(c) + O;
    if (30 < R) {
      var U = O - O % 5;
      return R = (C & (1 << U) - 1).toString(32), C >>= U, O -= U, { id: 1 << 32 - Dn(c) + O | g << O | C, overflow: R + a };
    }
    return { id: 1 << R | g << O | C, overflow: a };
  }
  var Dn = Math.clz32 ? Math.clz32 : qt, $r = Math.log, Kn = Math.LN2;
  function qt(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - ($r(a) / Kn | 0) | 0;
  }
  function $n(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var br = typeof Object.is == "function" ? Object.is : $n, it = null, Ot = null, en = null, je = null, tn = !1, Pn = !1, pn = 0, Ft = null, Tn = 0;
  function Yt() {
    if (it === null) throw Error(A(321));
    return it;
  }
  function et() {
    if (0 < Tn) throw Error(A(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function qn() {
    return je === null ? en === null ? (tn = !1, en = je = et()) : (tn = !0, je = en) : je.next === null ? (tn = !1, je = je.next = et()) : (tn = !0, je = je.next), je;
  }
  function er() {
    Ot = it = null, Pn = !1, en = null, Tn = 0, je = Ft = null;
  }
  function Sr(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function _e(a, c, g) {
    if (it = Yt(), je = qn(), tn) {
      var C = je.queue;
      if (c = C.dispatch, Ft !== null && (g = Ft.get(C), g !== void 0)) {
        Ft.delete(C), C = je.memoizedState;
        do
          C = a(C, g.action), g = g.next;
        while (g !== null);
        return je.memoizedState = C, [C, c];
      }
      return [je.memoizedState, c];
    }
    return a = a === Sr ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, je.memoizedState = a, a = je.queue = { last: null, dispatch: null }, a = a.dispatch = qr.bind(null, it, a), [je.memoizedState, a];
  }
  function tr(a, c) {
    if (it = Yt(), je = qn(), c = c === void 0 ? null : c, je !== null) {
      var g = je.memoizedState;
      if (g !== null && c !== null) {
        var C = g[1];
        e: if (C === null) C = !1;
        else {
          for (var O = 0; O < C.length && O < c.length; O++) if (!br(c[O], C[O])) {
            C = !1;
            break e;
          }
          C = !0;
        }
        if (C) return g[0];
      }
    }
    return a = a(), je.memoizedState = [a, c], a;
  }
  function qr(a, c, g) {
    if (25 <= Tn) throw Error(A(301));
    if (a === it) if (Pn = !0, a = { action: g, next: null }, Ft === null && (Ft = /* @__PURE__ */ new Map()), g = Ft.get(c), g === void 0) Ft.set(c, a);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = a;
    }
  }
  function eo() {
    throw Error(A(394));
  }
  function Lt() {
  }
  var nr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return Yt(), a._currentValue2;
  }, useMemo: tr, useReducer: _e, useRef: function(a) {
    it = Yt(), je = qn();
    var c = je.memoizedState;
    return c === null ? (a = { current: a }, je.memoizedState = a) : c;
  }, useState: function(a) {
    return _e(Sr, a);
  }, useInsertionEffect: Lt, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return tr(function() {
      return a;
    }, c);
  }, useImperativeHandle: Lt, useEffect: Lt, useDebugValue: Lt, useDeferredValue: function(a) {
    return Yt(), a;
  }, useTransition: function() {
    return Yt(), [
      !1,
      eo
    ];
  }, useId: function() {
    var a = Ot.treeContext, c = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Dn(a) - 1)).toString(32) + c;
    var g = Bn;
    if (g === null) throw Error(A(404));
    return c = pn++, a = ":" + g.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return Yt(), c(a._source);
  }, useSyncExternalStore: function(a, c, g) {
    if (g === void 0) throw Error(A(407));
    return g();
  } }, Bn = null, nn = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function pt(a) {
    return console.error(a), null;
  }
  function Ht() {
  }
  function kn(a, c, g, C, O, R, U, J, de) {
    var ve = [], fe = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: C === void 0 ? 12800 : C, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: fe, pingedTasks: ve, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? pt : O, onAllReady: Ht, onShellReady: U === void 0 ? Ht : U, onShellError: Ht, onFatalError: Ht }, g = on(c, 0, null, g, !1, !1), g.parentFlushed = !0, a = rn(c, a, null, g, fe, jt, null, wr), ve.push(a), c;
  }
  function rn(a, c, g, C, O, R, U, J) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var de = { node: c, ping: function() {
      var ve = a.pingedTasks;
      ve.push(de), ve.length === 1 && st(a);
    }, blockedBoundary: g, blockedSegment: C, abortSet: O, legacyContext: R, context: U, treeContext: J };
    return O.add(de), de;
  }
  function on(a, c, g, C, O, R) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: C, boundary: g, lastPushedText: O, textEmbedded: R };
  }
  function Nt(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function an(a, c) {
    var g = a.onShellError;
    g(c), g = a.onFatalError, g(c), a.destination !== null ? (a.status = 2, a.destination.destroy(c)) : (a.status = 1, a.fatalError = c);
  }
  function vt(a, c, g, C, O) {
    for (it = {}, Ot = c, pn = 0, a = g(C, O); Pn; ) Pn = !1, pn = 0, Tn += 1, je = null, a = g(C, O);
    return er(), a;
  }
  function xr(a, c, g, C) {
    var O = g.render(), R = C.childContextTypes;
    if (R != null) {
      var U = c.legacyContext;
      if (typeof g.getChildContext != "function") C = U;
      else {
        g = g.getChildContext();
        for (var J in g) if (!(J in R)) throw Error(A(108, ht(C) || "Unknown", J));
        C = ae({}, U, g);
      }
      c.legacyContext = C, Ye(a, c, O), c.legacyContext = U;
    } else Ye(a, c, O);
  }
  function Er(a, c) {
    if (a && a.defaultProps) {
      c = ae({}, c), a = a.defaultProps;
      for (var g in a) c[g] === void 0 && (c[g] = a[g]);
      return c;
    }
    return c;
  }
  function Xt(a, c, g, C, O) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      O = mr(g, c.legacyContext);
      var R = g.contextType;
      R = new g(C, typeof R == "object" && R !== null ? R._currentValue2 : O), yr(R, g, C, O), xr(a, c, R, g);
    } else {
      R = mr(g, c.legacyContext), O = vt(a, c, g, C, R);
      var U = pn !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) yr(O, g, C, R), xr(a, c, O, g);
      else if (U) {
        C = c.treeContext, c.treeContext = Jn(C, 1, 0);
        try {
          Ye(a, c, O);
        } finally {
          c.treeContext = C;
        }
      } else Ye(a, c, O);
    }
    else if (typeof g == "string") {
      switch (O = c.blockedSegment, R = ee(O.chunks, g, C, a.responseState, O.formatContext), O.lastPushedText = !1, U = O.formatContext, O.formatContext = re(U, g, C), zt(a, c, R), O.formatContext = U, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          O.chunks.push("</", g, ">");
      }
      O.lastPushedText = !1;
    } else {
      switch (g) {
        case Ve:
        case Oe:
        case ue:
        case He:
        case Ce:
          Ye(a, c, C.children);
          return;
        case ne:
          Ye(a, c, C.children);
          return;
        case De:
          throw Error(A(343));
        case at:
          e: {
            g = c.blockedBoundary, O = c.blockedSegment, R = C.fallback, C = C.children, U = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, de = on(a, O.chunks.length, J, O.formatContext, !1, !1);
            O.children.push(de), O.lastPushedText = !1;
            var ve = on(a, 0, null, O.formatContext, !1, !1);
            ve.parentFlushed = !0, c.blockedBoundary = J, c.blockedSegment = ve;
            try {
              if (zt(
                a,
                c,
                C
              ), a.responseState.generateStaticMarkup || ve.lastPushedText && ve.textEmbedded && ve.chunks.push("<!-- -->"), ve.status = 1, Dt(J, ve), J.pendingTasks === 0) break e;
            } catch (fe) {
              ve.status = 4, J.forceClientRender = !0, J.errorDigest = Nt(a, fe);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = O;
            }
            c = rn(a, R, g, de, U, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case $e:
          if (C = vt(a, c, g.render, C, O), pn !== 0) {
            g = c.treeContext, c.treeContext = Jn(g, 1, 0);
            try {
              Ye(a, c, C);
            } finally {
              c.treeContext = g;
            }
          } else Ye(a, c, C);
          return;
        case we:
          g = g.type, C = Er(g, C), Xt(a, c, g, C, O);
          return;
        case xt:
          if (O = C.children, g = g._context, C = C.value, R = g._currentValue2, g._currentValue2 = C, U = Ct, Ct = C = { parent: U, depth: U === null ? 0 : U.depth + 1, context: g, parentValue: R, value: C }, c.context = C, Ye(a, c, O), a = Ct, a === null) throw Error(A(403));
          C = a.parentValue, a.context._currentValue2 = C === Qe ? a.context._defaultValue : C, a = Ct = a.parent, c.context = a;
          return;
        case Et:
          C = C.children, C = C(g._currentValue2), Ye(a, c, C);
          return;
        case be:
          O = g._init, g = O(g._payload), C = Er(g, C), Xt(
            a,
            c,
            g,
            C,
            void 0
          );
          return;
      }
      throw Error(A(130, g == null ? g : typeof g, ""));
    }
  }
  function Ye(a, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case me:
          Xt(a, c, g.type, g.props, g.ref);
          return;
        case Fe:
          throw Error(A(257));
        case be:
          var C = g._init;
          g = C(g._payload), Ye(a, c, g);
          return;
      }
      if (k(g)) {
        Ut(a, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? C = null : (C = qe && g[qe] || g["@@iterator"], C = typeof C == "function" ? C : null), C && (C = C.call(g))) {
        if (g = C.next(), !g.done) {
          var O = [];
          do
            O.push(g.value), g = C.next();
          while (!g.done);
          Ut(a, c, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(A(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (C = c.blockedSegment, C.lastPushedText = xe(c.blockedSegment.chunks, g, a.responseState, C.lastPushedText)) : typeof g == "number" && (C = c.blockedSegment, C.lastPushedText = xe(c.blockedSegment.chunks, "" + g, a.responseState, C.lastPushedText));
  }
  function Ut(a, c, g) {
    for (var C = g.length, O = 0; O < C; O++) {
      var R = c.treeContext;
      c.treeContext = Jn(R, C, O);
      try {
        zt(a, c, g[O]);
      } finally {
        c.treeContext = R;
      }
    }
  }
  function zt(a, c, g) {
    var C = c.blockedSegment.formatContext, O = c.legacyContext, R = c.context;
    try {
      return Ye(a, c, g);
    } catch (de) {
      if (er(), typeof de == "object" && de !== null && typeof de.then == "function") {
        g = de;
        var U = c.blockedSegment, J = on(a, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(J), U.lastPushedText = !1, a = rn(a, c.node, c.blockedBoundary, J, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(a, a), c.blockedSegment.formatContext = C, c.legacyContext = O, c.context = R, Ge(R);
      } else throw c.blockedSegment.formatContext = C, c.legacyContext = O, c.context = R, Ge(R), de;
    }
  }
  function sn(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Wt(this, c, a);
  }
  function In(a, c, g) {
    var C = a.blockedBoundary;
    a.blockedSegment.status = 3, C === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (C.pendingTasks--, C.forceClientRender || (C.forceClientRender = !0, a = g === void 0 ? Error(A(432)) : g, C.errorDigest = c.onError(a), C.parentFlushed && c.clientRenderedBoundaries.push(C)), C.fallbackAbortableTasks.forEach(function(O) {
      return In(O, c, g);
    }), C.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (C = c.onAllReady, C()));
  }
  function Dt(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && Dt(a, g);
    } else a.completedSegments.push(c);
  }
  function Wt(a, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(A(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Ht, c = a.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && Dt(c, g), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(sn, a), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (Dt(c, g), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function st(a) {
    if (a.status !== 2) {
      var c = Ct, g = nn.current;
      nn.current = nr;
      var C = Bn;
      Bn = a.responseState;
      try {
        var O = a.pingedTasks, R;
        for (R = 0; R < O.length; R++) {
          var U = O[R], J = a, de = U.blockedSegment;
          if (de.status === 0) {
            Ge(U.context);
            try {
              Ye(J, U, U.node), J.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), U.abortSet.delete(U), de.status = 1, Wt(J, U.blockedBoundary, de);
            } catch (ct) {
              if (er(), typeof ct == "object" && ct !== null && typeof ct.then == "function") {
                var ve = U.ping;
                ct.then(ve, ve);
              } else {
                U.abortSet.delete(U), de.status = 4;
                var fe = U.blockedBoundary, ke = ct, At = Nt(J, ke);
                if (fe === null ? an(J, ke) : (fe.pendingTasks--, fe.forceClientRender || (fe.forceClientRender = !0, fe.errorDigest = At, fe.parentFlushed && J.clientRenderedBoundaries.push(fe))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var ut = J.onAllReady;
                  ut();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, R), a.destination !== null && lt(a, a.destination);
      } catch (ct) {
        Nt(a, ct), an(a, ct);
      } finally {
        Bn = C, nn.current = g, g === nr && Ge(c);
      }
    }
  }
  function ln(a, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var C = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, c.push('<template id="'), c.push(a.placeholderPrefix), a = C.toString(16), c.push(a), c.push('"></template>');
      case 1:
        g.status = 2;
        var O = !0;
        C = g.chunks;
        var R = 0;
        g = g.children;
        for (var U = 0; U < g.length; U++) {
          for (O = g[U]; R < O.index; R++) c.push(C[R]);
          O = vn(a, c, O);
        }
        for (; R < C.length - 1; R++) c.push(C[R]);
        return R < C.length && (O = c.push(C[R])), O;
      default:
        throw Error(A(390));
    }
  }
  function vn(a, c, g) {
    var C = g.boundary;
    if (C === null) return ln(a, c, g);
    if (C.parentFlushed = !0, C.forceClientRender) return a.responseState.generateStaticMarkup || (C = C.errorDigest, c.push("<!--$!-->"), c.push("<template"), C && (c.push(' data-dgst="'), C = H(C), c.push(C), c.push('"')), c.push("></template>")), ln(a, c, g), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
    if (0 < C.pendingTasks) {
      C.rootSegmentID = a.nextSegmentId++, 0 < C.completedSegments.length && a.partialBoundaries.push(C);
      var O = a.responseState, R = O.nextSuspenseID++;
      return O = O.boundaryPrefix + R.toString(16), C = C.id = O, he(c, a.responseState, C), ln(a, c, g), c.push("<!--/$-->");
    }
    if (C.byteSize > a.progressiveChunkSize) return C.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(C), he(c, a.responseState, C.id), ln(a, c, g), c.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || c.push("<!--$-->"), g = C.completedSegments, g.length !== 1) throw Error(A(391));
    return vn(a, c, g[0]), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
  }
  function Rn(a, c, g) {
    return Re(c, a.responseState, g.formatContext, g.id), vn(a, c, g), Pe(c, g.formatContext);
  }
  function bt(a, c, g) {
    for (var C = g.completedSegments, O = 0; O < C.length; O++) Zt(a, c, g, C[O]);
    if (C.length = 0, a = a.responseState, C = g.id, g = g.rootSegmentID, c.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? c.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), C === null) throw Error(A(395));
    return g = g.toString(16), c.push(C), c.push('","'), c.push(a.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function Zt(a, c, g, C) {
    if (C.status === 2) return !0;
    var O = C.id;
    if (O === -1) {
      if ((C.id = g.rootSegmentID) === -1) throw Error(A(392));
      return Rn(a, c, C);
    }
    return Rn(a, c, C), a = a.responseState, c.push(a.startInlineScript), a.sentCompleteSegmentFunction ? c.push('$RS("') : (a.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(a.segmentPrefix), O = O.toString(16), c.push(O), c.push('","'), c.push(a.placeholderPrefix), c.push(O), c.push('")<\/script>');
  }
  function lt(a, c) {
    try {
      var g = a.completedRootSegment;
      if (g !== null && a.pendingRootTasks === 0) {
        vn(a, c, g), a.completedRootSegment = null;
        var C = a.responseState.bootstrapChunks;
        for (g = 0; g < C.length - 1; g++) c.push(C[g]);
        g < C.length && c.push(C[g]);
      }
      var O = a.clientRenderedBoundaries, R;
      for (R = 0; R < O.length; R++) {
        var U = O[R];
        C = c;
        var J = a.responseState, de = U.id, ve = U.errorDigest, fe = U.errorMessage, ke = U.errorComponentStack;
        if (C.push(J.startInlineScript), J.sentClientRenderFunction ? C.push('$RX("') : (J.sentClientRenderFunction = !0, C.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(A(395));
        if (C.push(de), C.push('"'), ve || fe || ke) {
          C.push(",");
          var At = le(ve || "");
          C.push(At);
        }
        if (fe || ke) {
          C.push(",");
          var ut = le(fe || "");
          C.push(ut);
        }
        if (ke) {
          C.push(",");
          var ct = le(ke);
          C.push(ct);
        }
        if (!C.push(")<\/script>")) {
          a.destination = null, R++, O.splice(0, R);
          return;
        }
      }
      O.splice(0, R);
      var An = a.completedBoundaries;
      for (R = 0; R < An.length; R++) if (!bt(a, c, An[R])) {
        a.destination = null, R++, An.splice(0, R);
        return;
      }
      An.splice(0, R);
      var Gt = a.partialBoundaries;
      for (R = 0; R < Gt.length; R++) {
        var Qn = Gt[R];
        e: {
          O = a, U = c;
          var un = Qn.completedSegments;
          for (J = 0; J < un.length; J++) if (!Zt(O, U, Qn, un[J])) {
            J++, un.splice(0, J);
            var gn = !1;
            break e;
          }
          un.splice(0, J), gn = !0;
        }
        if (!gn) {
          a.destination = null, R++, Gt.splice(0, R);
          return;
        }
      }
      Gt.splice(0, R);
      var Vt = a.completedBoundaries;
      for (R = 0; R < Vt.length; R++) if (!bt(a, c, Vt[R])) {
        a.destination = null, R++, Vt.splice(0, R);
        return;
      }
      Vt.splice(0, R);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function Mn(a, c) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(C) {
        return In(C, a, c);
      }), g.clear(), a.destination !== null && lt(a, a.destination);
    } catch (C) {
      Nt(a, C), an(a, C);
    }
  }
  function tt() {
  }
  function gt(a, c, g, C) {
    var O = !1, R = null, U = "", J = { push: function(ve) {
      return ve !== null && (U += ve), !0;
    }, destroy: function(ve) {
      O = !0, R = ve;
    } }, de = !1;
    if (a = kn(a, pe(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, tt, void 0, function() {
      de = !0;
    }), st(a), Mn(a, C), a.status === 1) a.status = 2, J.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = J;
      try {
        lt(a, J);
      } catch (ve) {
        Nt(a, ve), an(a, ve);
      }
    }
    if (O) throw R;
    if (!de) throw Error(A(426));
    return U;
  }
  return Qo.renderToNodeStream = function() {
    throw Error(A(207));
  }, Qo.renderToStaticMarkup = function(a, c) {
    return gt(a, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Qo.renderToStaticNodeStream = function() {
    throw Error(A(208));
  }, Qo.renderToString = function(a, c) {
    return gt(a, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Qo.version = "18.3.1", Qo;
}
var Ss = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oA;
function bu() {
  if (oA) return Ss;
  oA = 1;
  var f = D;
  function A(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = null, y = 0;
  function s(i, u) {
    if (u.length !== 0) if (512 < u.length) 0 < y && (i.enqueue(new Uint8Array(h.buffer, 0, y)), h = new Uint8Array(512), y = 0), i.enqueue(u);
    else {
      var p = h.length - y;
      p < u.length && (p === 0 ? i.enqueue(h) : (h.set(u.subarray(0, p), y), i.enqueue(h), u = u.subarray(p)), h = new Uint8Array(512), y = 0), h.set(u, y), y += u.length;
    }
  }
  function w(i, u) {
    return s(i, u), !0;
  }
  function T(i) {
    h && 0 < y && (i.enqueue(new Uint8Array(h.buffer, 0, y)), h = null, y = 0);
  }
  var x = new TextEncoder();
  function b(i) {
    return x.encode(i);
  }
  function E(i) {
    return x.encode(i);
  }
  function N(i, u) {
    typeof i.error == "function" ? i.error(u) : i.close();
  }
  var B = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, L = {}, H = {};
  function _(i) {
    return B.call(H, i) ? !0 : B.call(L, i) ? !1 : j.test(i) ? H[i] = !0 : (L[i] = !0, !1);
  }
  function I(i, u, p, S, F, Q, W) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = S, this.attributeNamespace = F, this.mustUseProperty = p, this.propertyName = i, this.type = u, this.sanitizeURL = Q, this.removeEmptyString = W;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    k[i] = new I(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    k[u] = new I(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    k[i] = new I(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    k[i] = new I(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    k[i] = new I(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    k[i] = new I(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    k[i] = new I(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    k[i] = new I(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    k[i] = new I(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function re(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      V,
      re
    );
    k[u] = new I(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(V, re);
    k[u] = new I(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(V, re);
    k[u] = new I(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    k[i] = new I(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    k[i] = new I(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var X = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, z = ["Webkit", "ms", "Moz", "O"];
  Object.keys(X).forEach(function(i) {
    z.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), X[u] = X[i];
    });
  });
  var $ = /["'&<>]/;
  function Z(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = $.exec(i);
    if (u) {
      var p = "", S, F = 0;
      for (S = u.index; S < i.length; S++) {
        switch (i.charCodeAt(S)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        F !== S && (p += i.substring(F, S)), F = S + 1, p += u;
      }
      i = F !== S ? p + i.substring(F, S) : p;
    }
    return i;
  }
  var ie = /([A-Z])/g, oe = /^ms-/, ce = Array.isArray, se = E("<script>"), Ae = E("<\/script>"), ee = E('<script src="'), he = E('<script type="module" src="'), Re = E('" async=""><\/script>'), Pe = /(<\/|<)(s)(cript)/gi;
  function q(i, u, p, S) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + S;
  }
  function le(i, u, p, S, F) {
    i = i === void 0 ? "" : i, u = u === void 0 ? se : E('<script nonce="' + Z(u) + '">');
    var Q = [];
    if (p !== void 0 && Q.push(u, b(("" + p).replace(Pe, q)), Ae), S !== void 0) for (p = 0; p < S.length; p++) Q.push(ee, b(Z(S[p])), Re);
    if (F !== void 0) for (S = 0; S < F.length; S++) Q.push(he, b(Z(F[S])), Re);
    return { bootstrapChunks: Q, startInlineScript: u, placeholderPrefix: E(i + "P:"), segmentPrefix: E(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function pe(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function xe(i) {
    return pe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ae(i, u, p) {
    switch (u) {
      case "select":
        return pe(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return pe(2, null);
      case "math":
        return pe(3, null);
      case "foreignObject":
        return pe(1, null);
      case "table":
        return pe(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return pe(5, null);
      case "colgroup":
        return pe(7, null);
      case "tr":
        return pe(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? pe(1, null) : i;
  }
  var me = E("<!-- -->");
  function Fe(i, u, p, S) {
    return u === "" ? S : (S && i.push(me), i.push(b(Z(u))), !0);
  }
  var Ce = /* @__PURE__ */ new Map(), ue = E(' style="'), He = E(":"), xt = E(";");
  function Et(i, u, p) {
    if (typeof p != "object") throw Error(A(62));
    u = !0;
    for (var S in p) if (B.call(p, S)) {
      var F = p[S];
      if (F != null && typeof F != "boolean" && F !== "") {
        if (S.indexOf("--") === 0) {
          var Q = b(Z(S));
          F = b(Z(("" + F).trim()));
        } else {
          Q = S;
          var W = Ce.get(Q);
          W !== void 0 || (W = E(Z(Q.replace(ie, "-$1").toLowerCase().replace(oe, "-ms-"))), Ce.set(Q, W)), Q = W, F = typeof F == "number" ? F === 0 || B.call(X, S) ? b("" + F) : b(F + "px") : b(Z(("" + F).trim()));
        }
        u ? (u = !1, i.push(ue, Q, He, F)) : i.push(xt, Q, He, F);
      }
    }
    u || i.push(ne);
  }
  var $e = E(" "), at = E('="'), ne = E('"'), we = E('=""');
  function be(i, u, p, S) {
    switch (p) {
      case "style":
        Et(i, u, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = k.hasOwnProperty(p) ? k[p] : null, u !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = b(u.attributeName), u.type) {
          case 3:
            S && i.push($e, p, we);
            break;
          case 4:
            S === !0 ? i.push($e, p, we) : S !== !1 && i.push($e, p, at, b(Z(S)), ne);
            break;
          case 5:
            isNaN(S) || i.push($e, p, at, b(Z(S)), ne);
            break;
          case 6:
            !isNaN(S) && 1 <= S && i.push($e, p, at, b(Z(S)), ne);
            break;
          default:
            u.sanitizeURL && (S = "" + S), i.push($e, p, at, b(Z(S)), ne);
        }
      } else if (_(p)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push($e, b(p), at, b(Z(S)), ne);
      }
    }
  }
  var De = E(">"), Oe = E("/>");
  function Ve(i, u, p) {
    if (u != null) {
      if (p != null) throw Error(A(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(A(61));
      u = u.__html, u != null && i.push(b("" + u));
    }
  }
  function Qe(i) {
    var u = "";
    return f.Children.forEach(i, function(p) {
      p != null && (u += p);
    }), u;
  }
  var qe = E(' selected=""');
  function ht(i, u, p, S) {
    i.push(nt(p));
    var F = p = null, Q;
    for (Q in u) if (B.call(u, Q)) {
      var W = u[Q];
      if (W != null) switch (Q) {
        case "children":
          p = W;
          break;
        case "dangerouslySetInnerHTML":
          F = W;
          break;
        default:
          be(i, S, Q, W);
      }
    }
    return i.push(De), Ve(i, F, p), typeof p == "string" ? (i.push(b(Z(p))), null) : p;
  }
  var jt = E(`
`), mr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ct = /* @__PURE__ */ new Map();
  function nt(i) {
    var u = Ct.get(i);
    if (u === void 0) {
      if (!mr.test(i)) throw Error(A(65, i));
      u = E("<" + i), Ct.set(i, u);
    }
    return u;
  }
  var Je = E("<!DOCTYPE html>");
  function _n(i, u, p, S, F) {
    switch (u) {
      case "select":
        i.push(nt("select"));
        var Q = null, W = null;
        for (Se in p) if (B.call(p, Se)) {
          var K = p[Se];
          if (K != null) switch (Se) {
            case "children":
              Q = K;
              break;
            case "dangerouslySetInnerHTML":
              W = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              be(i, S, Se, K);
          }
        }
        return i.push(De), Ve(i, W, Q), Q;
      case "option":
        W = F.selectedValue, i.push(nt("option"));
        var ge = K = null, Ee = null, Se = null;
        for (Q in p) if (B.call(p, Q)) {
          var Ne = p[Q];
          if (Ne != null) switch (Q) {
            case "children":
              K = Ne;
              break;
            case "selected":
              Ee = Ne;
              break;
            case "dangerouslySetInnerHTML":
              Se = Ne;
              break;
            case "value":
              ge = Ne;
            default:
              be(i, S, Q, Ne);
          }
        }
        if (W != null) if (p = ge !== null ? "" + ge : Qe(K), ce(W)) {
          for (S = 0; S < W.length; S++)
            if ("" + W[S] === p) {
              i.push(qe);
              break;
            }
        } else "" + W === p && i.push(qe);
        else Ee && i.push(qe);
        return i.push(De), Ve(i, Se, K), K;
      case "textarea":
        i.push(nt("textarea")), Se = W = Q = null;
        for (K in p) if (B.call(p, K) && (ge = p[K], ge != null)) switch (K) {
          case "children":
            Se = ge;
            break;
          case "value":
            Q = ge;
            break;
          case "defaultValue":
            W = ge;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(91));
          default:
            be(i, S, K, ge);
        }
        if (Q === null && W !== null && (Q = W), i.push(De), Se != null) {
          if (Q != null) throw Error(A(92));
          if (ce(Se) && 1 < Se.length) throw Error(A(93));
          Q = "" + Se;
        }
        return typeof Q == "string" && Q[0] === `
` && i.push(jt), Q !== null && i.push(b(Z("" + Q))), null;
      case "input":
        i.push(nt("input")), ge = Se = K = Q = null;
        for (W in p) if (B.call(p, W) && (Ee = p[W], Ee != null)) switch (W) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, "input"));
          case "defaultChecked":
            ge = Ee;
            break;
          case "defaultValue":
            K = Ee;
            break;
          case "checked":
            Se = Ee;
            break;
          case "value":
            Q = Ee;
            break;
          default:
            be(i, S, W, Ee);
        }
        return Se !== null ? be(
          i,
          S,
          "checked",
          Se
        ) : ge !== null && be(i, S, "checked", ge), Q !== null ? be(i, S, "value", Q) : K !== null && be(i, S, "value", K), i.push(Oe), null;
      case "menuitem":
        i.push(nt("menuitem"));
        for (var yt in p) if (B.call(p, yt) && (Q = p[yt], Q != null)) switch (yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(400));
          default:
            be(i, S, yt, Q);
        }
        return i.push(De), null;
      case "title":
        i.push(nt("title")), Q = null;
        for (Ne in p) if (B.call(p, Ne) && (W = p[Ne], W != null)) switch (Ne) {
          case "children":
            Q = W;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(A(434));
          default:
            be(i, S, Ne, W);
        }
        return i.push(De), Q;
      case "listing":
      case "pre":
        i.push(nt(u)), W = Q = null;
        for (ge in p) if (B.call(p, ge) && (K = p[ge], K != null)) switch (ge) {
          case "children":
            Q = K;
            break;
          case "dangerouslySetInnerHTML":
            W = K;
            break;
          default:
            be(i, S, ge, K);
        }
        if (i.push(De), W != null) {
          if (Q != null) throw Error(A(60));
          if (typeof W != "object" || !("__html" in W)) throw Error(A(61));
          p = W.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? i.push(jt, b(p)) : i.push(b("" + p)));
        }
        return typeof Q == "string" && Q[0] === `
` && i.push(jt), Q;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(nt(u));
        for (var Tt in p) if (B.call(p, Tt) && (Q = p[Tt], Q != null)) switch (Tt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(A(399, u));
          default:
            be(i, S, Tt, Q);
        }
        return i.push(Oe), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ht(i, p, u, S);
      case "html":
        return F.insertionMode === 0 && i.push(Je), ht(i, p, u, S);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return ht(i, p, u, S);
        i.push(nt(u)), W = Q = null;
        for (Ee in p) if (B.call(p, Ee) && (K = p[Ee], K != null)) switch (Ee) {
          case "children":
            Q = K;
            break;
          case "dangerouslySetInnerHTML":
            W = K;
            break;
          case "style":
            Et(i, S, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            _(Ee) && typeof K != "function" && typeof K != "symbol" && i.push($e, b(Ee), at, b(Z(K)), ne);
        }
        return i.push(De), Ve(i, W, Q), Q;
    }
  }
  var Yn = E("</"), Xn = E(">"), Ge = E('<template id="'), Vn = E('"></template>'), yr = E("<!--$-->"), wr = E('<!--$?--><template id="'), Jn = E('"></template>'), Dn = E("<!--$!-->"), $r = E("<!--/$-->"), Kn = E("<template"), qt = E('"'), $n = E(' data-dgst="');
  E(' data-msg="'), E(' data-stck="');
  var br = E("></template>");
  function it(i, u, p) {
    if (s(i, wr), p === null) throw Error(A(395));
    return s(i, p), w(i, Jn);
  }
  var Ot = E('<div hidden id="'), en = E('">'), je = E("</div>"), tn = E('<svg aria-hidden="true" style="display:none" id="'), Pn = E('">'), pn = E("</svg>"), Ft = E('<math aria-hidden="true" style="display:none" id="'), Tn = E('">'), Yt = E("</math>"), et = E('<table hidden id="'), qn = E('">'), er = E("</table>"), Sr = E('<table hidden><tbody id="'), _e = E('">'), tr = E("</tbody></table>"), qr = E('<table hidden><tr id="'), eo = E('">'), Lt = E("</tr></table>"), nr = E('<table hidden><colgroup id="'), Bn = E('">'), nn = E("</colgroup></table>");
  function pt(i, u, p, S) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return s(i, Ot), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, en);
      case 2:
        return s(i, tn), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, Pn);
      case 3:
        return s(i, Ft), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, Tn);
      case 4:
        return s(i, et), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, qn);
      case 5:
        return s(i, Sr), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, _e);
      case 6:
        return s(i, qr), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, eo);
      case 7:
        return s(
          i,
          nr
        ), s(i, u.segmentPrefix), s(i, b(S.toString(16))), w(i, Bn);
      default:
        throw Error(A(397));
    }
  }
  function Ht(i, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return w(i, je);
      case 2:
        return w(i, pn);
      case 3:
        return w(i, Yt);
      case 4:
        return w(i, er);
      case 5:
        return w(i, tr);
      case 6:
        return w(i, Lt);
      case 7:
        return w(i, nn);
      default:
        throw Error(A(397));
    }
  }
  var kn = E('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), rn = E('$RS("'), on = E('","'), Nt = E('")<\/script>'), an = E('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), vt = E('$RC("'), xr = E('","'), Er = E('")<\/script>'), Xt = E('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ye = E('$RX("'), Ut = E('"'), zt = E(")<\/script>"), sn = E(","), In = /[<\u2028\u2029]/g;
  function Dt(i) {
    return JSON.stringify(i).replace(In, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Wt = Object.assign, st = Symbol.for("react.element"), ln = Symbol.for("react.portal"), vn = Symbol.for("react.fragment"), Rn = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), lt = Symbol.for("react.context"), Mn = Symbol.for("react.forward_ref"), tt = Symbol.for("react.suspense"), gt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), C = Symbol.for("react.debug_trace_mode"), O = Symbol.for("react.legacy_hidden"), R = Symbol.for("react.default_value"), U = Symbol.iterator;
  function J(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case vn:
        return "Fragment";
      case ln:
        return "Portal";
      case bt:
        return "Profiler";
      case Rn:
        return "StrictMode";
      case tt:
        return "Suspense";
      case gt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case lt:
        return (i.displayName || "Context") + ".Consumer";
      case Zt:
        return (i._context.displayName || "Context") + ".Provider";
      case Mn:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return u = i.displayName || null, u !== null ? u : J(i.type) || "Memo";
      case c:
        u = i._payload, i = i._init;
        try {
          return J(i(u));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function ve(i, u) {
    if (i = i.contextTypes, !i) return de;
    var p = {}, S;
    for (S in i) p[S] = u[S];
    return p;
  }
  var fe = null;
  function ke(i, u) {
    if (i !== u) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var p = u.parent;
      if (i === null) {
        if (p !== null) throw Error(A(401));
      } else {
        if (p === null) throw Error(A(401));
        ke(i, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function At(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && At(i);
  }
  function ut(i) {
    var u = i.parent;
    u !== null && ut(u), i.context._currentValue = i.value;
  }
  function ct(i, u) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(A(402));
    i.depth === u.depth ? ke(i, u) : ct(i, u);
  }
  function An(i, u) {
    var p = u.parent;
    if (p === null) throw Error(A(402));
    i.depth === p.depth ? ke(i, p) : An(i, p), u.context._currentValue = u.value;
  }
  function Gt(i) {
    var u = fe;
    u !== i && (u === null ? ut(i) : i === null ? At(u) : u.depth === i.depth ? ke(u, i) : u.depth > i.depth ? ct(u, i) : An(u, i), fe = i);
  }
  var Qn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function un(i, u, p, S) {
    var F = i.state !== void 0 ? i.state : null;
    i.updater = Qn, i.props = p, i.state = F;
    var Q = { queue: [], replace: !1 };
    i._reactInternals = Q;
    var W = u.contextType;
    if (i.context = typeof W == "object" && W !== null ? W._currentValue : S, W = u.getDerivedStateFromProps, typeof W == "function" && (W = W(p, F), F = W == null ? F : Wt({}, F, W), i.state = F), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Qn.enqueueReplaceState(i, i.state, null), Q.queue !== null && 0 < Q.queue.length) if (u = Q.queue, W = Q.replace, Q.queue = null, Q.replace = !1, W && u.length === 1) i.state = u[0];
    else {
      for (Q = W ? u[0] : i.state, F = !0, W = W ? 1 : 0; W < u.length; W++) {
        var K = u[W];
        K = typeof K == "function" ? K.call(i, Q, p, S) : K, K != null && (F ? (F = !1, Q = Wt({}, Q, K)) : Wt(Q, K));
      }
      i.state = Q;
    }
    else Q.queue = null;
  }
  var gn = { id: 1, overflow: "" };
  function Vt(i, u, p) {
    var S = i.id;
    i = i.overflow;
    var F = 32 - mn(S) - 1;
    S &= ~(1 << F), p += 1;
    var Q = 32 - mn(u) + F;
    if (30 < Q) {
      var W = F - F % 5;
      return Q = (S & (1 << W) - 1).toString(32), S >>= W, F -= W, { id: 1 << 32 - mn(u) + F | p << F | S, overflow: Q + i };
    }
    return { id: 1 << Q | p << F | S, overflow: i };
  }
  var mn = Math.clz32 ? Math.clz32 : Cr, za = Math.log, Wa = Math.LN2;
  function Cr(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (za(i) / Wa | 0) | 0;
  }
  function _t(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var Za = typeof Object.is == "function" ? Object.is : _t, Jt = null, to = null, Dr = null, Le = null, yn = !1, Pr = !1, wn = 0, cn = null, Tr = 0;
  function dn() {
    if (Jt === null) throw Error(A(321));
    return Jt;
  }
  function Pt() {
    if (0 < Tr) throw Error(A(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function no() {
    return Le === null ? Dr === null ? (yn = !1, Dr = Le = Pt()) : (yn = !0, Le = Dr) : Le.next === null ? (yn = !1, Le = Le.next = Pt()) : (yn = !0, Le = Le.next), Le;
  }
  function rr() {
    to = Jt = null, Pr = !1, Dr = null, Tr = 0, Le = cn = null;
  }
  function No(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function Br(i, u, p) {
    if (Jt = dn(), Le = no(), yn) {
      var S = Le.queue;
      if (u = S.dispatch, cn !== null && (p = cn.get(S), p !== void 0)) {
        cn.delete(S), S = Le.memoizedState;
        do
          S = i(S, p.action), p = p.next;
        while (p !== null);
        return Le.memoizedState = S, [S, u];
      }
      return [Le.memoizedState, u];
    }
    return i = i === No ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Le.memoizedState = i, i = Le.queue = { last: null, dispatch: null }, i = i.dispatch = Ga.bind(null, Jt, i), [Le.memoizedState, i];
  }
  function Uo(i, u) {
    if (Jt = dn(), Le = no(), u = u === void 0 ? null : u, Le !== null) {
      var p = Le.memoizedState;
      if (p !== null && u !== null) {
        var S = p[1];
        e: if (S === null) S = !1;
        else {
          for (var F = 0; F < S.length && F < u.length; F++) if (!Za(u[F], S[F])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return p[0];
      }
    }
    return i = i(), Le.memoizedState = [i, u], i;
  }
  function Ga(i, u, p) {
    if (25 <= Tr) throw Error(A(301));
    if (i === Jt) if (Pr = !0, i = { action: p, next: null }, cn === null && (cn = /* @__PURE__ */ new Map()), p = cn.get(u), p === void 0) cn.set(u, i);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function _a() {
    throw Error(A(394));
  }
  function kr() {
  }
  var zo = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return dn(), i._currentValue;
  }, useMemo: Uo, useReducer: Br, useRef: function(i) {
    Jt = dn(), Le = no();
    var u = Le.memoizedState;
    return u === null ? (i = { current: i }, Le.memoizedState = i) : u;
  }, useState: function(i) {
    return Br(No, i);
  }, useInsertionEffect: kr, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return Uo(function() {
      return i;
    }, u);
  }, useImperativeHandle: kr, useEffect: kr, useDebugValue: kr, useDeferredValue: function(i) {
    return dn(), i;
  }, useTransition: function() {
    return dn(), [!1, _a];
  }, useId: function() {
    var i = to.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - mn(i) - 1)).toString(32) + u;
    var p = or;
    if (p === null) throw Error(A(404));
    return u = wn++, i = ":" + p.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return dn(), u(i._source);
  }, useSyncExternalStore: function(i, u, p) {
    if (p === void 0) throw Error(A(407));
    return p();
  } }, or = null, ro = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ya(i) {
    return console.error(i), null;
  }
  function jn() {
  }
  function oo(i, u, p, S, F, Q, W, K, ge) {
    var Ee = [], Se = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Se, pingedTasks: Ee, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: F === void 0 ? Ya : F, onAllReady: Q === void 0 ? jn : Q, onShellReady: W === void 0 ? jn : W, onShellError: K === void 0 ? jn : K, onFatalError: ge === void 0 ? jn : ge }, p = On(u, 0, null, p, !1, !1), p.parentFlushed = !0, i = ao(u, i, null, p, Se, de, null, gn), Ee.push(i), u;
  }
  function ao(i, u, p, S, F, Q, W, K) {
    i.allPendingTasks++, p === null ? i.pendingRootTasks++ : p.pendingTasks++;
    var ge = { node: u, ping: function() {
      var Ee = i.pingedTasks;
      Ee.push(ge), Ee.length === 1 && Vo(i);
    }, blockedBoundary: p, blockedSegment: S, abortSet: F, legacyContext: Q, context: W, treeContext: K };
    return F.add(ge), ge;
  }
  function On(i, u, p, S, F, Q) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: p, lastPushedText: F, textEmbedded: Q };
  }
  function ar(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Ir(i, u) {
    var p = i.onShellError;
    p(u), p = i.onFatalError, p(u), i.destination !== null ? (i.status = 2, N(i.destination, u)) : (i.status = 1, i.fatalError = u);
  }
  function Wo(i, u, p, S, F) {
    for (Jt = {}, to = u, wn = 0, i = p(S, F); Pr; ) Pr = !1, wn = 0, Tr += 1, Le = null, i = p(S, F);
    return rr(), i;
  }
  function Zo(i, u, p, S) {
    var F = p.render(), Q = S.childContextTypes;
    if (Q != null) {
      var W = u.legacyContext;
      if (typeof p.getChildContext != "function") S = W;
      else {
        p = p.getChildContext();
        for (var K in p) if (!(K in Q)) throw Error(A(108, J(S) || "Unknown", K));
        S = Wt({}, W, p);
      }
      u.legacyContext = S, mt(i, u, F), u.legacyContext = W;
    } else mt(i, u, F);
  }
  function Go(i, u) {
    if (i && i.defaultProps) {
      u = Wt({}, u), i = i.defaultProps;
      for (var p in i) u[p] === void 0 && (u[p] = i[p]);
      return u;
    }
    return u;
  }
  function Rr(i, u, p, S, F) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      F = ve(p, u.legacyContext);
      var Q = p.contextType;
      Q = new p(S, typeof Q == "object" && Q !== null ? Q._currentValue : F), un(Q, p, S, F), Zo(i, u, Q, p);
    } else {
      Q = ve(p, u.legacyContext), F = Wo(i, u, p, S, Q);
      var W = wn !== 0;
      if (typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0) un(F, p, S, Q), Zo(i, u, F, p);
      else if (W) {
        S = u.treeContext, u.treeContext = Vt(S, 1, 0);
        try {
          mt(i, u, F);
        } finally {
          u.treeContext = S;
        }
      } else mt(i, u, F);
    }
    else if (typeof p == "string") {
      switch (F = u.blockedSegment, Q = _n(F.chunks, p, S, i.responseState, F.formatContext), F.lastPushedText = !1, W = F.formatContext, F.formatContext = ae(W, p, S), Mr(i, u, Q), F.formatContext = W, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          F.chunks.push(Yn, b(p), Xn);
      }
      F.lastPushedText = !1;
    } else {
      switch (p) {
        case O:
        case C:
        case Rn:
        case bt:
        case vn:
          mt(i, u, S.children);
          return;
        case gt:
          mt(i, u, S.children);
          return;
        case g:
          throw Error(A(343));
        case tt:
          e: {
            p = u.blockedBoundary, F = u.blockedSegment, Q = S.fallback, S = S.children, W = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: W, errorDigest: null }, ge = On(i, F.chunks.length, K, F.formatContext, !1, !1);
            F.children.push(ge), F.lastPushedText = !1;
            var Ee = On(i, 0, null, F.formatContext, !1, !1);
            Ee.parentFlushed = !0, u.blockedBoundary = K, u.blockedSegment = Ee;
            try {
              if (Mr(
                i,
                u,
                S
              ), Ee.lastPushedText && Ee.textEmbedded && Ee.chunks.push(me), Ee.status = 1, Qr(K, Ee), K.pendingTasks === 0) break e;
            } catch (Se) {
              Ee.status = 4, K.forceClientRender = !0, K.errorDigest = ar(i, Se);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = F;
            }
            u = ao(i, Q, p, ge, W, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case Mn:
          if (S = Wo(i, u, p.render, S, F), wn !== 0) {
            p = u.treeContext, u.treeContext = Vt(p, 1, 0);
            try {
              mt(i, u, S);
            } finally {
              u.treeContext = p;
            }
          } else mt(i, u, S);
          return;
        case a:
          p = p.type, S = Go(p, S), Rr(i, u, p, S, F);
          return;
        case Zt:
          if (F = S.children, p = p._context, S = S.value, Q = p._currentValue, p._currentValue = S, W = fe, fe = S = { parent: W, depth: W === null ? 0 : W.depth + 1, context: p, parentValue: Q, value: S }, u.context = S, mt(i, u, F), i = fe, i === null) throw Error(A(403));
          S = i.parentValue, i.context._currentValue = S === R ? i.context._defaultValue : S, i = fe = i.parent, u.context = i;
          return;
        case lt:
          S = S.children, S = S(p._currentValue), mt(i, u, S);
          return;
        case c:
          F = p._init, p = F(p._payload), S = Go(p, S), Rr(i, u, p, S, void 0);
          return;
      }
      throw Error(A(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function mt(i, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case st:
          Rr(i, u, p.type, p.props, p.ref);
          return;
        case ln:
          throw Error(A(257));
        case c:
          var S = p._init;
          p = S(p._payload), mt(i, u, p);
          return;
      }
      if (ce(p)) {
        _o(i, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? S = null : (S = U && p[U] || p["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(p))) {
        if (p = S.next(), !p.done) {
          var F = [];
          do
            F.push(p.value), p = S.next();
          while (!p.done);
          _o(i, u, F);
        }
        return;
      }
      throw i = Object.prototype.toString.call(p), Error(A(31, i === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : i));
    }
    typeof p == "string" ? (S = u.blockedSegment, S.lastPushedText = Fe(u.blockedSegment.chunks, p, i.responseState, S.lastPushedText)) : typeof p == "number" && (S = u.blockedSegment, S.lastPushedText = Fe(u.blockedSegment.chunks, "" + p, i.responseState, S.lastPushedText));
  }
  function _o(i, u, p) {
    for (var S = p.length, F = 0; F < S; F++) {
      var Q = u.treeContext;
      u.treeContext = Vt(Q, S, F);
      try {
        Mr(i, u, p[F]);
      } finally {
        u.treeContext = Q;
      }
    }
  }
  function Mr(i, u, p) {
    var S = u.blockedSegment.formatContext, F = u.legacyContext, Q = u.context;
    try {
      return mt(i, u, p);
    } catch (ge) {
      if (rr(), typeof ge == "object" && ge !== null && typeof ge.then == "function") {
        p = ge;
        var W = u.blockedSegment, K = On(i, W.chunks.length, null, W.formatContext, W.lastPushedText, !0);
        W.children.push(K), W.lastPushedText = !1, i = ao(i, u.node, u.blockedBoundary, K, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(i, i), u.blockedSegment.formatContext = S, u.legacyContext = F, u.context = Q, Gt(Q);
      } else throw u.blockedSegment.formatContext = S, u.legacyContext = F, u.context = Q, Gt(Q), ge;
    }
  }
  function Xa(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Xo(this, u, i);
  }
  function Yo(i, u, p) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = p === void 0 ? Error(A(432)) : p, S.errorDigest = u.onError(i), S.parentFlushed && u.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(F) {
      return Yo(F, u, p);
    }), S.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (S = u.onAllReady, S()));
  }
  function Qr(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Qr(i, p);
    } else i.completedSegments.push(u);
  }
  function Xo(i, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(A(389));
        i.completedRootSegment = p;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = jn, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Qr(u, p), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(Xa, i), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Qr(u, p), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Vo(i) {
    if (i.status !== 2) {
      var u = fe, p = ro.current;
      ro.current = zo;
      var S = or;
      or = i.responseState;
      try {
        var F = i.pingedTasks, Q;
        for (Q = 0; Q < F.length; Q++) {
          var W = F[Q], K = i, ge = W.blockedSegment;
          if (ge.status === 0) {
            Gt(W.context);
            try {
              mt(K, W, W.node), ge.lastPushedText && ge.textEmbedded && ge.chunks.push(me), W.abortSet.delete(W), ge.status = 1, Xo(K, W.blockedBoundary, ge);
            } catch (Bt) {
              if (rr(), typeof Bt == "object" && Bt !== null && typeof Bt.then == "function") {
                var Ee = W.ping;
                Bt.then(Ee, Ee);
              } else {
                W.abortSet.delete(W), ge.status = 4;
                var Se = W.blockedBoundary, Ne = Bt, yt = ar(K, Ne);
                if (Se === null ? Ir(K, Ne) : (Se.pendingTasks--, Se.forceClientRender || (Se.forceClientRender = !0, Se.errorDigest = yt, Se.parentFlushed && K.clientRenderedBoundaries.push(Se))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Tt = K.onAllReady;
                  Tt();
                }
              }
            } finally {
            }
          }
        }
        F.splice(0, Q), i.destination !== null && io(i, i.destination);
      } catch (Bt) {
        ar(i, Bt), Ir(i, Bt);
      } finally {
        or = S, ro.current = p, p === zo && Gt(u);
      }
    }
  }
  function jr(i, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var S = p.id = i.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, i = i.responseState, s(u, Ge), s(u, i.placeholderPrefix), i = b(S.toString(16)), s(u, i), w(u, Vn);
      case 1:
        p.status = 2;
        var F = !0;
        S = p.chunks;
        var Q = 0;
        p = p.children;
        for (var W = 0; W < p.length; W++) {
          for (F = p[W]; Q < F.index; Q++) s(u, S[Q]);
          F = Or(i, u, F);
        }
        for (; Q < S.length - 1; Q++) s(u, S[Q]);
        return Q < S.length && (F = w(u, S[Q])), F;
      default:
        throw Error(A(390));
    }
  }
  function Or(i, u, p) {
    var S = p.boundary;
    if (S === null) return jr(i, u, p);
    if (S.parentFlushed = !0, S.forceClientRender) S = S.errorDigest, w(u, Dn), s(u, Kn), S && (s(u, $n), s(u, b(Z(S))), s(u, qt)), w(u, br), jr(i, u, p);
    else if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var F = i.responseState, Q = F.nextSuspenseID++;
      F = E(F.boundaryPrefix + Q.toString(16)), S = S.id = F, it(u, i.responseState, S), jr(i, u, p);
    } else if (S.byteSize > i.progressiveChunkSize) S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), it(u, i.responseState, S.id), jr(i, u, p);
    else {
      if (w(u, yr), p = S.completedSegments, p.length !== 1) throw Error(A(391));
      Or(i, u, p[0]);
    }
    return w(u, $r);
  }
  function Jo(i, u, p) {
    return pt(u, i.responseState, p.formatContext, p.id), Or(i, u, p), Ht(u, p.formatContext);
  }
  function Ko(i, u, p) {
    for (var S = p.completedSegments, F = 0; F < S.length; F++) $o(i, u, p, S[F]);
    if (S.length = 0, i = i.responseState, S = p.id, p = p.rootSegmentID, s(u, i.startInlineScript), i.sentCompleteBoundaryFunction ? s(u, vt) : (i.sentCompleteBoundaryFunction = !0, s(u, an)), S === null) throw Error(A(395));
    return p = b(p.toString(16)), s(u, S), s(u, xr), s(u, i.segmentPrefix), s(u, p), w(u, Er);
  }
  function $o(i, u, p, S) {
    if (S.status === 2) return !0;
    var F = S.id;
    if (F === -1) {
      if ((S.id = p.rootSegmentID) === -1) throw Error(A(392));
      return Jo(i, u, S);
    }
    return Jo(i, u, S), i = i.responseState, s(u, i.startInlineScript), i.sentCompleteSegmentFunction ? s(u, rn) : (i.sentCompleteSegmentFunction = !0, s(u, kn)), s(u, i.segmentPrefix), F = b(F.toString(16)), s(u, F), s(u, on), s(u, i.placeholderPrefix), s(u, F), w(u, Nt);
  }
  function io(i, u) {
    h = new Uint8Array(512), y = 0;
    try {
      var p = i.completedRootSegment;
      if (p !== null && i.pendingRootTasks === 0) {
        Or(i, u, p), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (p = 0; p < S.length - 1; p++) s(u, S[p]);
        p < S.length && w(u, S[p]);
      }
      var F = i.clientRenderedBoundaries, Q;
      for (Q = 0; Q < F.length; Q++) {
        var W = F[Q];
        S = u;
        var K = i.responseState, ge = W.id, Ee = W.errorDigest, Se = W.errorMessage, Ne = W.errorComponentStack;
        if (s(S, K.startInlineScript), K.sentClientRenderFunction ? s(S, Ye) : (K.sentClientRenderFunction = !0, s(
          S,
          Xt
        )), ge === null) throw Error(A(395));
        s(S, ge), s(S, Ut), (Ee || Se || Ne) && (s(S, sn), s(S, b(Dt(Ee || "")))), (Se || Ne) && (s(S, sn), s(S, b(Dt(Se || "")))), Ne && (s(S, sn), s(S, b(Dt(Ne)))), w(S, zt);
      }
      F.splice(0, Q);
      var yt = i.completedBoundaries;
      for (Q = 0; Q < yt.length; Q++) Ko(i, u, yt[Q]);
      yt.splice(0, Q), T(u), h = new Uint8Array(512), y = 0;
      var Tt = i.partialBoundaries;
      for (Q = 0; Q < Tt.length; Q++) {
        var Bt = Tt[Q];
        e: {
          F = i, W = u;
          var Fr = Bt.completedSegments;
          for (K = 0; K < Fr.length; K++) if (!$o(
            F,
            W,
            Bt,
            Fr[K]
          )) {
            K++, Fr.splice(0, K);
            var ea = !1;
            break e;
          }
          Fr.splice(0, K), ea = !0;
        }
        if (!ea) {
          i.destination = null, Q++, Tt.splice(0, Q);
          return;
        }
      }
      Tt.splice(0, Q);
      var ir = i.completedBoundaries;
      for (Q = 0; Q < ir.length; Q++) Ko(i, u, ir[Q]);
      ir.splice(0, Q);
    } finally {
      T(u), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.close();
    }
  }
  function qo(i, u) {
    try {
      var p = i.abortableTasks;
      p.forEach(function(S) {
        return Yo(S, i, u);
      }), p.clear(), i.destination !== null && io(i, i.destination);
    } catch (S) {
      ar(i, S), Ir(i, S);
    }
  }
  return Ss.renderToReadableStream = function(i, u) {
    return new Promise(function(p, S) {
      var F, Q, W = new Promise(function(Se, Ne) {
        Q = Se, F = Ne;
      }), K = oo(i, le(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), xe(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, Q, function() {
        var Se = new ReadableStream({ type: "bytes", pull: function(Ne) {
          if (K.status === 1) K.status = 2, N(Ne, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = Ne;
            try {
              io(K, Ne);
            } catch (yt) {
              ar(K, yt), Ir(K, yt);
            }
          }
        }, cancel: function() {
          qo(K);
        } }, { highWaterMark: 0 });
        Se.allReady = W, p(Se);
      }, function(Se) {
        W.catch(function() {
        }), S(Se);
      }, F);
      if (u && u.signal) {
        var ge = u.signal, Ee = function() {
          qo(K, ge.reason), ge.removeEventListener("abort", Ee);
        };
        ge.addEventListener("abort", Ee);
      }
      Vo(K);
    });
  }, Ss.version = "18.3.1", Ss;
}
var jo = {}, aA;
function Su() {
  return aA || (aA = 1, zl.env.NODE_ENV !== "production" && function() {
    var f = D, A = "18.3.1", h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        w("warn", e, n);
      }
    }
    function s(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        w("error", e, n);
      }
    }
    function w(e, t, n) {
      {
        var o = h.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", n = n.concat([l]));
        var d = n.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    function T(e) {
      e();
    }
    function x(e) {
    }
    function b(e, t) {
      E(e, t);
    }
    function E(e, t) {
      return e.push(t);
    }
    function N(e) {
    }
    function B(e) {
      e.push(null);
    }
    function j(e) {
      return e;
    }
    function L(e) {
      return e;
    }
    function H(e, t) {
      e.destroy(t);
    }
    function _(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function I(e) {
      try {
        return k(e), !1;
      } catch {
        return !0;
      }
    }
    function k(e) {
      return "" + e;
    }
    function V(e, t) {
      if (I(e))
        return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), k(e);
    }
    function re(e, t) {
      if (I(e))
        return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), k(e);
    }
    function X(e) {
      if (I(e))
        return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(e)), k(e);
    }
    var z = Object.prototype.hasOwnProperty, $ = 0, Z = 1, ie = 2, oe = 3, ce = 4, se = 5, Ae = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Re = new RegExp("^[" + ee + "][" + he + "]*$"), Pe = {}, q = {};
    function le(e) {
      return z.call(q, e) ? !0 : z.call(Pe, e) ? !1 : Re.test(e) ? (q[e] = !0, !0) : (Pe[e] = !0, s("Invalid attribute name: `%s`", e), !1);
    }
    function pe(e, t, n, o) {
      if (n !== null && n.type === $)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function xe(e) {
      return me.hasOwnProperty(e) ? me[e] : null;
    }
    function ae(e, t, n, o, l, d, v) {
      this.acceptsBooleans = t === ie || t === oe || t === ce, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var me = {}, Fe = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Fe.forEach(function(e) {
      me[e] = new ae(
        e,
        $,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      me[t] = new ae(
        t,
        Z,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      me[e] = new ae(
        e,
        ie,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      me[e] = new ae(
        e,
        ie,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      me[e] = new ae(
        e,
        oe,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new ae(
        e,
        oe,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new ae(
        e,
        ce,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new ae(
        e,
        Ae,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      me[e] = new ae(
        e,
        se,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ce = /[\-\:]([a-z])/g, ue = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ce, ue);
      me[t] = new ae(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ce, ue);
      me[t] = new ae(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Ce, ue);
      me[t] = new ae(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      me[e] = new ae(
        e,
        Z,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var He = "xlinkHref";
    me[He] = new ae(
      "xlinkHref",
      Z,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      me[e] = new ae(
        e,
        Z,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var xt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Et(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var $e = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xt).forEach(function(e) {
      $e.forEach(function(t) {
        xt[Et(t, e)] = xt[e];
      });
    });
    var at = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ne(e, t) {
      at[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function we(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var be = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, De = {}, Oe = new RegExp("^(aria)-[" + he + "]*$"), Ve = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function Qe(e, t) {
      {
        if (z.call(De, t) && De[t])
          return !0;
        if (Ve.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = be.hasOwnProperty(n) ? n : null;
          if (o == null)
            return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), De[t] = !0, !0;
          if (t !== o)
            return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), De[t] = !0, !0;
        }
        if (Oe.test(t)) {
          var l = t.toLowerCase(), d = be.hasOwnProperty(l) ? l : null;
          if (d == null)
            return De[t] = !0, !1;
          if (t !== d)
            return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), De[t] = !0, !0;
        }
      }
      return !0;
    }
    function qe(e, t) {
      {
        var n = [];
        for (var o in t) {
          var l = Qe(e, o);
          l || n.push(o);
        }
        var d = n.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        n.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : n.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function ht(e, t) {
      we(e, t) || qe(e, t);
    }
    var jt = !1;
    function mr(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !jt && (jt = !0, e === "select" && t.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ct = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, nt = function() {
    };
    {
      var Je = {}, _n = /^on./, Yn = /^on[^A-Z]/, Xn = new RegExp("^(aria)-[" + he + "]*$"), Ge = new RegExp("^(aria)[A-Z][" + he + "]*$");
      nt = function(e, t, n, o) {
        if (z.call(Je, t) && Je[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Je[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var P = v.hasOwnProperty(l) ? v[l] : null;
          if (P != null)
            return s("Invalid event handler property `%s`. Did you mean `%s`?", t, P), Je[t] = !0, !0;
          if (_n.test(t))
            return s("Unknown event handler property `%s`. It will be ignored.", t), Je[t] = !0, !0;
        } else if (_n.test(t))
          return Yn.test(t) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Je[t] = !0, !0;
        if (Xn.test(t) || Ge.test(t))
          return !0;
        if (l === "innerhtml")
          return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Je[t] = !0, !0;
        if (l === "aria")
          return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Je[t] = !0, !0;
        if (l === "is" && n !== null && n !== void 0 && typeof n != "string")
          return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Je[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Je[t] = !0, !0;
        var M = xe(t), G = M !== null && M.type === $;
        if (Ct.hasOwnProperty(l)) {
          var Y = Ct[l];
          if (Y !== t)
            return s("Invalid DOM property `%s`. Did you mean `%s`?", t, Y), Je[t] = !0, !0;
        } else if (!G && t !== l)
          return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Je[t] = !0, !0;
        return typeof n == "boolean" && pe(t, n, M) ? (n ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Je[t] = !0, !0) : G ? !0 : pe(t, n, M) ? (Je[t] = !0, !1) : ((n === "false" || n === "true") && M !== null && M.type === oe && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Je[t] = !0), !0);
      };
    }
    var Vn = function(e, t, n) {
      {
        var o = [];
        for (var l in t) {
          var d = nt(e, l, t[l], n);
          d || o.push(l);
        }
        var v = o.map(function(P) {
          return "`" + P + "`";
        }).join(", ");
        o.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : o.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function yr(e, t, n) {
      we(e, t) || Vn(e, t, n);
    }
    var wr = function() {
    };
    {
      var Jn = /^(?:webkit|moz|o)[A-Z]/, Dn = /^-ms-/, $r = /-(.)/g, Kn = /;\s*$/, qt = {}, $n = {}, br = !1, it = !1, Ot = function(e) {
        return e.replace($r, function(t, n) {
          return n.toUpperCase();
        });
      }, en = function(e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, s(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Ot(e.replace(Dn, "ms-"))
        ));
      }, je = function(e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, tn = function(e, t) {
        $n.hasOwnProperty(t) && $n[t] || ($n[t] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kn, "")));
      }, Pn = function(e, t) {
        br || (br = !0, s("`NaN` is an invalid value for the `%s` css style property.", e));
      }, pn = function(e, t) {
        it || (it = !0, s("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      wr = function(e, t) {
        e.indexOf("-") > -1 ? en(e) : Jn.test(e) ? je(e) : Kn.test(t) && tn(e, t), typeof t == "number" && (isNaN(t) ? Pn(e, t) : isFinite(t) || pn(e, t));
      };
    }
    var Ft = wr, Tn = /["'&<>]/;
    function Yt(e) {
      X(e);
      var t = "" + e, n = Tn.exec(t);
      if (!n)
        return t;
      var o, l = "", d, v = 0;
      for (d = n.index; d < t.length; d++) {
        switch (t.charCodeAt(d)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        v !== d && (l += t.substring(v, d)), v = d + 1, l += o;
      }
      return v !== d ? l + t.substring(v, d) : l;
    }
    function et(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : Yt(e);
    }
    var qn = /([A-Z])/g, er = /^ms-/;
    function Sr(e) {
      return e.replace(qn, "-$1").toLowerCase().replace(er, "-ms-");
    }
    var _e = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tr = !1;
    function qr(e) {
      !tr && _e.test(e) && (tr = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var eo = Array.isArray;
    function Lt(e) {
      return eo(e);
    }
    var nr = "<script>";
    function Bn(e, t, n, o, l) {
      var d = e === void 0 ? "" : e, v = nr, P = [];
      return {
        bootstrapChunks: P,
        startInlineScript: v,
        placeholderPrefix: d + "P:",
        segmentPrefix: d + "S:",
        boundaryPrefix: d + "B:",
        idPrefix: d,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var nn = 0, pt = 1, Ht = 2, kn = 3, rn = 4, on = 5, Nt = 6, an = 7;
    function vt(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function xr(e, t, n) {
      switch (t) {
        case "select":
          return vt(pt, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return vt(Ht, null);
        case "math":
          return vt(kn, null);
        case "foreignObject":
          return vt(pt, null);
        case "table":
          return vt(rn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return vt(on, null);
        case "colgroup":
          return vt(an, null);
        case "tr":
          return vt(Nt, null);
      }
      return e.insertionMode >= rn || e.insertionMode === nn ? vt(pt, null) : e;
    }
    var Er = null;
    function Xt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Ye(e, t, n) {
      var o = e.idPrefix, l = ":" + o + "R" + t;
      return n > 0 && (l += "H" + n.toString(32)), l + ":";
    }
    function Ut(e) {
      return et(e);
    }
    var zt = "<!-- -->";
    function sn(e, t, n, o) {
      return t === "" ? o : (o && e.push(zt), e.push(Ut(t)), !0);
    }
    function In(e, t, n, o) {
      n && o && e.push(zt);
    }
    var Dt = /* @__PURE__ */ new Map();
    function Wt(e) {
      var t = Dt.get(e);
      if (t !== void 0)
        return t;
      var n = et(Sr(e));
      return Dt.set(e, n), n;
    }
    var st = ' style="', ln = ":", vn = ";";
    function Rn(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var l in n)
        if (z.call(n, l)) {
          var d = n[l];
          if (!(d == null || typeof d == "boolean" || d === "")) {
            var v = void 0, P = void 0, M = l.indexOf("--") === 0;
            M ? (v = et(l), re(d, l), P = et(("" + d).trim())) : (Ft(l, d), v = Wt(l), typeof d == "number" ? d !== 0 && !z.call(xt, l) ? P = d + "px" : P = "" + d : (re(d, l), P = et(("" + d).trim()))), o ? (o = !1, e.push(st, v, ln, P)) : e.push(vn, v, ln, P);
          }
        }
      o || e.push(lt);
    }
    var bt = " ", Zt = '="', lt = '"', Mn = '=""';
    function tt(e, t, n, o) {
      switch (n) {
        case "style": {
          Rn(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var l = xe(n);
        if (l !== null) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!l.acceptsBooleans)
                return;
          }
          var d = l.attributeName, v = d;
          switch (l.type) {
            case oe:
              o && e.push(bt, v, Mn);
              return;
            case ce:
              o === !0 ? e.push(bt, v, Mn) : o === !1 || e.push(bt, v, Zt, et(o), lt);
              return;
            case se:
              isNaN(o) || e.push(bt, v, Zt, et(o), lt);
              break;
            case Ae:
              !isNaN(o) && o >= 1 && e.push(bt, v, Zt, et(o), lt);
              break;
            default:
              l.sanitizeURL && (V(o, d), o = "" + o, qr(o)), e.push(bt, v, Zt, et(o), lt);
          }
        } else if (le(n)) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var P = n.toLowerCase().slice(0, 5);
              if (P !== "data-" && P !== "aria-")
                return;
            }
          }
          e.push(bt, n, Zt, et(o), lt);
        }
      }
    }
    var gt = ">", a = "/>";
    function c(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (X(o), e.push("" + o));
      }
    }
    var g = !1, C = !1, O = !1, R = !1, U = !1, J = !1, de = !1;
    function ve(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = Lt(n);
          e.multiple && !o ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function fe(e, t, n) {
      ne("select", t), ve(t, "value"), ve(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !O && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), O = !0), e.push(_t("select"));
      var o = null, l = null;
      for (var d in t)
        if (z.call(t, d)) {
          var v = t[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              tt(e, n, d, v);
              break;
          }
        }
      return e.push(gt), c(e, l, o), o;
    }
    function ke(e) {
      var t = "";
      return f.Children.forEach(e, function(n) {
        n != null && (t += n, !U && typeof n != "string" && typeof n != "number" && (U = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var At = ' selected=""';
    function ut(e, t, n, o) {
      var l = o.selectedValue;
      e.push(_t("option"));
      var d = null, v = null, P = null, M = null;
      for (var G in t)
        if (z.call(t, G)) {
          var Y = t[G];
          if (Y == null)
            continue;
          switch (G) {
            case "children":
              d = Y;
              break;
            case "selected":
              P = Y, de || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), de = !0);
              break;
            case "dangerouslySetInnerHTML":
              M = Y;
              break;
            case "value":
              v = Y;
            default:
              tt(e, n, G, Y);
              break;
          }
        }
      if (l != null) {
        var te;
        if (v !== null ? (V(v, "value"), te = "" + v) : (M !== null && (J || (J = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), te = ke(d)), Lt(l))
          for (var ye = 0; ye < l.length; ye++) {
            V(l[ye], "value");
            var Me = "" + l[ye];
            if (Me === te) {
              e.push(At);
              break;
            }
          }
        else
          V(l, "select.value"), "" + l === te && e.push(At);
      } else P && e.push(At);
      return e.push(gt), c(e, M, d), d;
    }
    function ct(e, t, n) {
      ne("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !C && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), C = !0), t.value !== void 0 && t.defaultValue !== void 0 && !g && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), e.push(_t("input"));
      var o = null, l = null, d = null, v = null;
      for (var P in t)
        if (z.call(t, P)) {
          var M = t[P];
          if (M == null)
            continue;
          switch (P) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              v = M;
              break;
            case "defaultValue":
              l = M;
              break;
            case "checked":
              d = M;
              break;
            case "value":
              o = M;
              break;
            default:
              tt(e, n, P, M);
              break;
          }
        }
      return d !== null ? tt(e, n, "checked", d) : v !== null && tt(e, n, "checked", v), o !== null ? tt(e, n, "value", o) : l !== null && tt(e, n, "value", l), e.push(a), null;
    }
    function An(e, t, n) {
      ne("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !R && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), R = !0), e.push(_t("textarea"));
      var o = null, l = null, d = null;
      for (var v in t)
        if (z.call(t, v)) {
          var P = t[v];
          if (P == null)
            continue;
          switch (v) {
            case "children":
              d = P;
              break;
            case "value":
              o = P;
              break;
            case "defaultValue":
              l = P;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              tt(e, n, v, P);
              break;
          }
        }
      if (o === null && l !== null && (o = l), e.push(gt), d != null) {
        if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Lt(d)) {
          if (d.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          X(d[0]), o = "" + d[0];
        }
        X(d), o = "" + d;
      }
      return typeof o == "string" && o[0] === `
` && e.push(mn), o !== null && (V(o, "value"), e.push(Ut("" + o))), null;
    }
    function Gt(e, t, n, o) {
      e.push(_t(n));
      for (var l in t)
        if (z.call(t, l)) {
          var d = t[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              tt(e, o, l, d);
              break;
          }
        }
      return e.push(a), null;
    }
    function Qn(e, t, n) {
      e.push(_t("menuitem"));
      for (var o in t)
        if (z.call(t, o)) {
          var l = t[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              tt(e, n, o, l);
              break;
          }
        }
      return e.push(gt), null;
    }
    function un(e, t, n) {
      e.push(_t("title"));
      var o = null;
      for (var l in t)
        if (z.call(t, l)) {
          var d = t[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              tt(e, n, l, d);
              break;
          }
        }
      e.push(gt);
      {
        var v = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : v != null && v.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : v != null && typeof v != "string" && typeof v != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function gn(e, t, n, o) {
      e.push(_t(n));
      var l = null, d = null;
      for (var v in t)
        if (z.call(t, v)) {
          var P = t[v];
          if (P == null)
            continue;
          switch (v) {
            case "children":
              l = P;
              break;
            case "dangerouslySetInnerHTML":
              d = P;
              break;
            default:
              tt(e, o, v, P);
              break;
          }
        }
      return e.push(gt), c(e, d, l), typeof l == "string" ? (e.push(Ut(l)), null) : l;
    }
    function Vt(e, t, n, o) {
      e.push(_t(n));
      var l = null, d = null;
      for (var v in t)
        if (z.call(t, v)) {
          var P = t[v];
          if (P == null)
            continue;
          switch (v) {
            case "children":
              l = P;
              break;
            case "dangerouslySetInnerHTML":
              d = P;
              break;
            case "style":
              Rn(e, o, P);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              le(v) && typeof P != "function" && typeof P != "symbol" && e.push(bt, v, Zt, et(P), lt);
              break;
          }
        }
      return e.push(gt), c(e, d, l), l;
    }
    var mn = `
`;
    function za(e, t, n, o) {
      e.push(_t(n));
      var l = null, d = null;
      for (var v in t)
        if (z.call(t, v)) {
          var P = t[v];
          if (P == null)
            continue;
          switch (v) {
            case "children":
              l = P;
              break;
            case "dangerouslySetInnerHTML":
              d = P;
              break;
            default:
              tt(e, o, v, P);
              break;
          }
        }
      if (e.push(gt), d != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof d != "object" || !("__html" in d))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var M = d.__html;
        M != null && (typeof M == "string" && M.length > 0 && M[0] === `
` ? e.push(mn, M) : (X(M), e.push("" + M)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(mn), l;
    }
    var Wa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Cr = /* @__PURE__ */ new Map();
    function _t(e) {
      var t = Cr.get(e);
      if (t === void 0) {
        if (!Wa.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Cr.set(e, t);
      }
      return t;
    }
    var Za = "<!DOCTYPE html>";
    function Jt(e, t, n, o, l) {
      switch (ht(t, n), mr(t, n), yr(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), l.insertionMode !== Ht && l.insertionMode !== kn && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return fe(e, n, o);
        case "option":
          return ut(e, n, o, l);
        case "textarea":
          return An(e, n, o);
        case "input":
          return ct(e, n, o);
        case "menuitem":
          return Qn(e, n, o);
        case "title":
          return un(e, n, o);
        case "listing":
        case "pre":
          return za(e, n, t, o);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Gt(e, n, t, o);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return gn(e, n, t, o);
        case "html":
          return l.insertionMode === nn && e.push(Za), gn(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? gn(e, n, t, o) : Vt(e, n, t, o);
      }
    }
    var to = "</", Dr = ">";
    function Le(e, t, n) {
      switch (t) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(to, t, Dr);
      }
    }
    function yn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        b(e, n[o]);
      return o < n.length ? E(e, n[o]) : !0;
    }
    var Pr = '<template id="', wn = '"></template>';
    function cn(e, t, n) {
      b(e, Pr), b(e, t.placeholderPrefix);
      var o = n.toString(16);
      return b(e, o), E(e, wn);
    }
    var Tr = "<!--$-->", dn = '<!--$?--><template id="', Pt = '"></template>', no = "<!--$!-->", rr = "<!--/$-->", No = "<template", Br = '"', Uo = ' data-dgst="', Ga = ' data-msg="', _a = ' data-stck="', kr = "></template>";
    function zo(e, t) {
      return E(e, Tr);
    }
    function or(e, t, n) {
      if (b(e, dn), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, n), E(e, Pt);
    }
    function ro(e, t, n, o, l) {
      var d;
      return d = E(e, no), b(e, No), n && (b(e, Uo), b(e, et(n)), b(e, Br)), o && (b(e, Ga), b(e, et(o)), b(e, Br)), l && (b(e, _a), b(e, et(l)), b(e, Br)), d = E(e, kr), d;
    }
    function Ya(e, t) {
      return E(e, rr);
    }
    function jn(e, t) {
      return E(e, rr);
    }
    function oo(e, t) {
      return E(e, rr);
    }
    var ao = '<div hidden id="', On = '">', ar = "</div>", Ir = '<svg aria-hidden="true" style="display:none" id="', Wo = '">', Zo = "</svg>", Go = '<math aria-hidden="true" style="display:none" id="', Rr = '">', mt = "</math>", _o = '<table hidden id="', Mr = '">', Xa = "</table>", Yo = '<table hidden><tbody id="', Qr = '">', Xo = "</tbody></table>", Vo = '<table hidden><tr id="', jr = '">', Or = "</tr></table>", Jo = '<table hidden><colgroup id="', Ko = '">', $o = "</colgroup></table>";
    function io(e, t, n, o) {
      switch (n.insertionMode) {
        case nn:
        case pt:
          return b(e, ao), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, On);
        case Ht:
          return b(e, Ir), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, Wo);
        case kn:
          return b(e, Go), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, Rr);
        case rn:
          return b(e, _o), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, Mr);
        case on:
          return b(e, Yo), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, Qr);
        case Nt:
          return b(e, Vo), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, jr);
        case an:
          return b(e, Jo), b(e, t.segmentPrefix), b(e, o.toString(16)), E(e, Ko);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function qo(e, t) {
      switch (t.insertionMode) {
        case nn:
        case pt:
          return E(e, ar);
        case Ht:
          return E(e, Zo);
        case kn:
          return E(e, mt);
        case rn:
          return E(e, Xa);
        case on:
          return E(e, Xo);
        case Nt:
          return E(e, Or);
        case an:
          return E(e, $o);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", u = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', p = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', S = i + ';$RS("', F = '$RS("', Q = '","', W = '")<\/script>';
    function K(e, t, n) {
      b(e, t.startInlineScript), t.sentCompleteSegmentFunction ? b(e, F) : (t.sentCompleteSegmentFunction = !0, b(e, S)), b(e, t.segmentPrefix);
      var o = n.toString(16);
      return b(e, o), b(e, Q), b(e, t.placeholderPrefix), b(e, o), E(e, W);
    }
    var ge = u + ';$RC("', Ee = '$RC("', Se = '","', Ne = '")<\/script>';
    function yt(e, t, n, o) {
      if (b(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? b(e, Ee) : (t.sentCompleteBoundaryFunction = !0, b(e, ge)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var l = o.toString(16);
      return b(e, n), b(e, Se), b(e, t.segmentPrefix), b(e, l), E(e, Ne);
    }
    var Tt = p + ';$RX("', Bt = '$RX("', Fr = '"', ea = ")<\/script>", ir = ",";
    function js(e, t, n, o, l, d) {
      if (b(e, t.startInlineScript), t.sentClientRenderFunction ? b(e, Bt) : (t.sentClientRenderFunction = !0, b(e, Tt)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return b(e, n), b(e, Fr), (o || l || d) && (b(e, ir), b(e, Va(o || ""))), (l || d) && (b(e, ir), b(e, Va(l || ""))), d && (b(e, ir), b(e, Va(d))), E(e, ea);
    }
    var Os = /[<\u2028\u2029]/g;
    function Va(e) {
      var t = JSON.stringify(e);
      return t.replace(Os, function(n) {
        switch (n) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fs(e, t) {
      var n = Bn(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function Ls() {
      return {
        insertionMode: pt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Oi(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(et(t)), !1) : sn(e, t, n, o);
    }
    function Fi(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return In(e, t, n, o);
    }
    function Hs(e, t) {
      return t.generateStaticMarkup ? !0 : zo(e);
    }
    function Ns(e, t, n, o, l) {
      return t.generateStaticMarkup ? !0 : ro(e, t, n, o, l);
    }
    function Us(e, t) {
      return t.generateStaticMarkup ? !0 : Ya(e);
    }
    function zs(e, t) {
      return t.generateStaticMarkup ? !0 : oo(e);
    }
    var St = Object.assign, Ws = Symbol.for("react.element"), Li = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), kt = Symbol.for("react.strict_mode"), Hi = Symbol.for("react.profiler"), na = Symbol.for("react.provider"), ra = Symbol.for("react.context"), oa = Symbol.for("react.forward_ref"), aa = Symbol.for("react.suspense"), so = Symbol.for("react.suspense_list"), lo = Symbol.for("react.memo"), Lr = Symbol.for("react.lazy"), Ja = Symbol.for("react.scope"), Ka = Symbol.for("react.debug_trace_mode"), $a = Symbol.for("react.legacy_hidden"), ia = Symbol.for("react.default_value"), Ni = Symbol.iterator, Zs = "@@iterator";
    function Gs(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ni && e[Ni] || e[Zs];
      return typeof t == "function" ? t : null;
    }
    function _s(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function qa(e) {
      return e.displayName || "Context";
    }
    function Ze(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ta:
          return "Fragment";
        case Li:
          return "Portal";
        case Hi:
          return "Profiler";
        case kt:
          return "StrictMode";
        case aa:
          return "Suspense";
        case so:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ra:
            var t = e;
            return qa(t) + ".Consumer";
          case na:
            var n = e;
            return qa(n._context) + ".Provider";
          case oa:
            return _s(e, e.render, "ForwardRef");
          case lo:
            var o = e.displayName || null;
            return o !== null ? o : Ze(e.type) || "Memo";
          case Lr: {
            var l = e, d = l._payload, v = l._init;
            try {
              return Ze(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ao = 0, Ui, ei, ze, Hr, ti, ni, ri;
    function oi() {
    }
    oi.__reactDisabledLog = !0;
    function zi() {
      {
        if (Ao === 0) {
          Ui = console.log, ei = console.info, ze = console.warn, Hr = console.error, ti = console.group, ni = console.groupCollapsed, ri = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: oi,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ao++;
      }
    }
    function Wi() {
      {
        if (Ao--, Ao === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: St({}, e, {
              value: Ui
            }),
            info: St({}, e, {
              value: ei
            }),
            warn: St({}, e, {
              value: ze
            }),
            error: St({}, e, {
              value: Hr
            }),
            group: St({}, e, {
              value: ti
            }),
            groupCollapsed: St({}, e, {
              value: ni
            }),
            groupEnd: St({}, e, {
              value: ri
            })
          });
        }
        Ao < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var sa = h.ReactCurrentDispatcher, la;
    function uo(e, t, n) {
      {
        if (la === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            la = o && o[1] || "";
          }
        return `
` + la + e;
      }
    }
    var ai = !1, Nr;
    {
      var ii = typeof WeakMap == "function" ? WeakMap : Map;
      Nr = new ii();
    }
    function sr(e, t) {
      if (!e || ai)
        return "";
      {
        var n = Nr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ai = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = sa.current, sa.current = null, zi();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (rt) {
              o = rt;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (rt) {
              o = rt;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            o = rt;
          }
          e();
        }
      } catch (rt) {
        if (rt && o && typeof rt.stack == "string") {
          for (var P = rt.stack.split(`
`), M = o.stack.split(`
`), G = P.length - 1, Y = M.length - 1; G >= 1 && Y >= 0 && P[G] !== M[Y]; )
            Y--;
          for (; G >= 1 && Y >= 0; G--, Y--)
            if (P[G] !== M[Y]) {
              if (G !== 1 || Y !== 1)
                do
                  if (G--, Y--, Y < 0 || P[G] !== M[Y]) {
                    var te = `
` + P[G].replace(" at new ", " at ");
                    return e.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", e.displayName)), typeof e == "function" && Nr.set(e, te), te;
                  }
                while (G >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ai = !1, sa.current = d, Wi(), Error.prepareStackTrace = l;
      }
      var ye = e ? e.displayName || e.name : "", Me = ye ? uo(ye) : "";
      return typeof e == "function" && Nr.set(e, Me), Me;
    }
    function si(e, t, n) {
      return sr(e, !0);
    }
    function co(e, t, n) {
      return sr(e, !1);
    }
    function Ys(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fo(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return sr(e, Ys(e));
      if (typeof e == "string")
        return uo(e);
      switch (e) {
        case aa:
          return uo("Suspense");
        case so:
          return uo("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case oa:
            return co(e.render);
          case lo:
            return fo(e.type, t, n);
          case Lr: {
            var o = e, l = o._payload, d = o._init;
            try {
              return fo(d(l), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Zi = {}, li = h.ReactDebugCurrentFrame;
    function Aa(e) {
      if (e) {
        var t = e._owner, n = fo(e.type, e._source, t ? t.type : null);
        li.setExtraStackFrame(n);
      } else
        li.setExtraStackFrame(null);
    }
    function ua(e, t, n, o, l) {
      {
        var d = Function.call.bind(z);
        for (var v in e)
          if (d(e, v)) {
            var P = void 0;
            try {
              if (typeof e[v] != "function") {
                var M = Error((o || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              P = e[v](t, v, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (G) {
              P = G;
            }
            P && !(P instanceof Error) && (Aa(l), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, v, typeof P), Aa(null)), P instanceof Error && !(P.message in Zi) && (Zi[P.message] = !0, Aa(l), s("Failed %s type: %s", n, P.message), Aa(null));
          }
      }
    }
    var ca;
    ca = {};
    var ho = {};
    Object.freeze(ho);
    function po(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return ho;
        var o = {};
        for (var l in n)
          o[l] = t[l];
        {
          var d = Ze(e) || "Unknown";
          ua(n, o, "context", d);
        }
        return o;
      }
    }
    function Gi(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var l = Ze(t) || "Unknown";
            ca[l] || (ca[l] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", l, l));
          }
          return n;
        }
        var d = e.getChildContext();
        for (var v in d)
          if (!(v in o))
            throw new Error((Ze(t) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var P = Ze(t) || "Unknown";
          ua(o, d, "child context", P);
        }
        return St({}, n, d);
      }
    }
    var lr;
    lr = {};
    var da = null, Fn = null;
    function Ai(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Ar(e) {
      e.context._currentValue2 = e.value;
    }
    function fa(e, t) {
      if (e !== t) {
        Ai(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          fa(n, o);
        }
        Ar(t);
      }
    }
    function Ln(e) {
      Ai(e);
      var t = e.parent;
      t !== null && Ln(t);
    }
    function ha(e) {
      var t = e.parent;
      t !== null && ha(t), Ar(e);
    }
    function pa(e, t) {
      Ai(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? fa(n, t) : pa(n, t);
    }
    function vo(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? fa(e, n) : vo(e, n), Ar(t);
    }
    function go(e) {
      var t = Fn, n = e;
      t !== n && (t === null ? ha(n) : n === null ? Ln(t) : t.depth === n.depth ? fa(t, n) : t.depth > n.depth ? pa(t, n) : vo(t, n), Fn = n);
    }
    function _i(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== lr && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = lr;
      var o = Fn, l = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return Fn = l, l;
    }
    function Yi(e) {
      var t = Fn;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && s("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === ia ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== lr && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = lr;
      }
      return Fn = t.parent;
    }
    function Xi() {
      return Fn;
    }
    function Hn(e) {
      var t = e._currentValue2;
      return t;
    }
    function ui(e) {
      return e._reactInternals;
    }
    function Xs(e, t) {
      e._reactInternals = t;
    }
    var Vi = {}, Ur = {}, mo, ci, va, ga, ma, zr, yo, wo, ya;
    {
      mo = /* @__PURE__ */ new Set(), ci = /* @__PURE__ */ new Set(), va = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set(), ya = /* @__PURE__ */ new Set();
      var bo = /* @__PURE__ */ new Set();
      zr = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          bo.has(n) || (bo.add(n), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ma = function(e, t) {
        if (t === void 0) {
          var n = Ze(e) || "Component";
          ga.has(n) || (ga.add(n), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function wa(e, t) {
      {
        var n = e.constructor, o = n && Ze(n) || "ReactClass", l = o + "." + t;
        if (Vi[l])
          return;
        s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Vi[l] = !0;
      }
    }
    var ba = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = ui(e);
        o.queue === null ? wa(e, "setState") : (o.queue.push(t), n != null && zr(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = ui(e);
        o.replace = !0, o.queue = [t], n != null && zr(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = ui(e);
        n.queue === null ? wa(e, "forceUpdate") : t != null && zr(t, "setState");
      }
    };
    function di(e, t, n, o, l) {
      var d = n(l, o);
      ma(t, d);
      var v = d == null ? o : St({}, o, d);
      return v;
    }
    function Ji(e, t, n) {
      var o = ho, l = e.contextType;
      if ("contextType" in e) {
        var d = (
          // Allow null for conditional declaration
          l === null || l !== void 0 && l.$$typeof === ra && l._context === void 0
        );
        if (!d && !ya.has(e)) {
          ya.add(e);
          var v = "";
          l === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof l != "object" ? v = " However, it is set to a " + typeof l + "." : l.$$typeof === na ? v = " Did you accidentally pass the Context.Provider instead?" : l._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(l).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ze(e) || "Component", v);
        }
      }
      typeof l == "object" && l !== null ? o = Hn(l) : o = n;
      var P = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (P.state === null || P.state === void 0)) {
          var M = Ze(e) || "Component";
          mo.has(M) || (mo.add(M), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", M, P.state === null ? "null" : "undefined", M));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof P.getSnapshotBeforeUpdate == "function") {
          var G = null, Y = null, te = null;
          if (typeof P.componentWillMount == "function" && P.componentWillMount.__suppressDeprecationWarning !== !0 ? G = "componentWillMount" : typeof P.UNSAFE_componentWillMount == "function" && (G = "UNSAFE_componentWillMount"), typeof P.componentWillReceiveProps == "function" && P.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof P.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof P.componentWillUpdate == "function" && P.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof P.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), G !== null || Y !== null || te !== null) {
            var ye = Ze(e) || "Component", Me = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            va.has(ye) || (va.add(ye), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ye, Me, G !== null ? `
  ` + G : "", Y !== null ? `
  ` + Y : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return P;
    }
    function Ki(e, t, n) {
      {
        var o = Ze(t) || "Component", l = e.render;
        l || (t.prototype && typeof t.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !wo.has(t) && (wo.add(t), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ze(t) || "A pure component"), typeof e.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = e.props !== n;
        e.props !== void 0 && d && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !ci.has(t) && (ci.add(t), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ze(t))), typeof e.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var v = e.state;
        v && (typeof v != "object" || Lt(v)) && s("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function $i(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = Ze(e) || "Unknown";
          Ur[o] || (y(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Ur[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ze(e) || "Component"), ba.enqueueReplaceState(t, t.state, null));
    }
    function Vs(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var l = e.queue, d = e.replace;
        if (e.queue = null, e.replace = !1, d && l.length === 1)
          t.state = l[0];
        else {
          for (var v = d ? l[0] : t.state, P = !0, M = d ? 1 : 0; M < l.length; M++) {
            var G = l[M], Y = typeof G == "function" ? G.call(t, v, n, o) : G;
            Y != null && (P ? (P = !1, v = St({}, v, Y)) : St(v, Y));
          }
          t.state = v;
        }
      } else
        e.queue = null;
    }
    function qi(e, t, n, o) {
      Ki(e, t, n);
      var l = e.state !== void 0 ? e.state : null;
      e.updater = ba, e.props = n, e.state = l;
      var d = {
        queue: [],
        replace: !1
      };
      Xs(e, d);
      var v = t.contextType;
      if (typeof v == "object" && v !== null ? e.context = Hn(v) : e.context = o, e.state === n) {
        var P = Ze(t) || "Component";
        yo.has(P) || (yo.add(P), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", P));
      }
      var M = t.getDerivedStateFromProps;
      typeof M == "function" && (e.state = di(e, t, M, l, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && ($i(t, e), Vs(d, e, n, o));
    }
    var Js = {
      id: 1,
      overflow: ""
    };
    function Ks(e) {
      var t = e.overflow, n = e.id, o = n & ~$s(n);
      return o.toString(32) + t;
    }
    function fi(e, t, n) {
      var o = e.id, l = e.overflow, d = So(o) - 1, v = o & ~(1 << d), P = n + 1, M = So(t) + d;
      if (M > 30) {
        var G = d - d % 5, Y = (1 << G) - 1, te = (v & Y).toString(32), ye = v >> G, Me = d - G, rt = So(t) + Me, vr = P << Me, gr = vr | ye, Cn = te + l;
        return {
          id: 1 << rt | gr,
          overflow: Cn
        };
      } else {
        var Vr = P << d, kl = Vr | v, VA = l;
        return {
          id: 1 << M | kl,
          overflow: VA
        };
      }
    }
    function So(e) {
      return 32 - qs(e);
    }
    function $s(e) {
      return 1 << So(e) - 1;
    }
    var qs = Math.clz32 ? Math.clz32 : el, hi = Math.log, Sa = Math.LN2;
    function el(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (hi(t) / Sa | 0) | 0;
    }
    function tl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var nl = typeof Object.is == "function" ? Object.is : tl, bn = null, pi = null, xa = null, Ue = null, It = !1, Wr = !1, ur = 0, Ie = null, Nn = 0, Ea = 25, Rt = !1, Mt;
    function fn() {
      if (bn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Rt && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), bn;
    }
    function rl(e, t) {
      if (t === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Mt), !1;
      e.length !== t.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Mt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!nl(e[n], t[n]))
          return !1;
      return !0;
    }
    function Kt() {
      if (Nn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Un() {
      return Ue === null ? xa === null ? (It = !1, xa = Ue = Kt()) : (It = !0, Ue = xa) : Ue.next === null ? (It = !1, Ue = Ue.next = Kt()) : (It = !0, Ue = Ue.next), Ue;
    }
    function cr(e, t) {
      bn = t, pi = e, Rt = !1, ur = 0;
    }
    function ol(e, t, n, o) {
      for (; Wr; )
        Wr = !1, ur = 0, Nn += 1, Ue = null, n = e(t, o);
      return xo(), n;
    }
    function vi() {
      var e = ur !== 0;
      return e;
    }
    function xo() {
      Rt = !1, bn = null, pi = null, Wr = !1, xa = null, Nn = 0, Ie = null, Ue = null;
    }
    function al(e) {
      return Rt && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Hn(e);
    }
    function il(e) {
      return Mt = "useContext", fn(), Hn(e);
    }
    function Ca(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function gi(e) {
      return Mt = "useState", es(
        Ca,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function es(e, t, n) {
      if (e !== Ca && (Mt = "useReducer"), bn = fn(), Ue = Un(), It) {
        var o = Ue.queue, l = o.dispatch;
        if (Ie !== null) {
          var d = Ie.get(o);
          if (d !== void 0) {
            Ie.delete(o);
            var v = Ue.memoizedState, P = d;
            do {
              var M = P.action;
              Rt = !0, v = e(v, M), Rt = !1, P = P.next;
            } while (P !== null);
            return Ue.memoizedState = v, [v, l];
          }
        }
        return [Ue.memoizedState, l];
      } else {
        Rt = !0;
        var G;
        e === Ca ? G = typeof t == "function" ? t() : t : G = n !== void 0 ? n(t) : t, Rt = !1, Ue.memoizedState = G;
        var Y = Ue.queue = {
          last: null,
          dispatch: null
        }, te = Y.dispatch = ns.bind(null, bn, Y);
        return [Ue.memoizedState, te];
      }
    }
    function ts(e, t) {
      bn = fn(), Ue = Un();
      var n = t === void 0 ? null : t;
      if (Ue !== null) {
        var o = Ue.memoizedState;
        if (o !== null && n !== null) {
          var l = o[1];
          if (rl(n, l))
            return o[0];
        }
      }
      Rt = !0;
      var d = e();
      return Rt = !1, Ue.memoizedState = [d, n], d;
    }
    function mi(e) {
      bn = fn(), Ue = Un();
      var t = Ue.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), Ue.memoizedState = n, n;
      } else
        return t;
    }
    function sl(e, t) {
      Mt = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ns(e, t, n) {
      if (Nn >= Ea)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === bn) {
        Wr = !0;
        var o = {
          action: n,
          next: null
        };
        Ie === null && (Ie = /* @__PURE__ */ new Map());
        var l = Ie.get(t);
        if (l === void 0)
          Ie.set(t, o);
        else {
          for (var d = l; d.next !== null; )
            d = d.next;
          d.next = o;
        }
      }
    }
    function rs(e, t) {
      return ts(function() {
        return e;
      }, t);
    }
    function ll(e, t, n) {
      return fn(), t(e._source);
    }
    function Al(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function ul(e) {
      return fn(), e;
    }
    function cl() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function dl() {
      return fn(), [!1, cl];
    }
    function fl() {
      var e = pi, t = Ks(e.treeContext), n = yi;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = ur++;
      return Ye(n, t, o);
    }
    function Da() {
    }
    var os = {
      readContext: al,
      useContext: il,
      useMemo: ts,
      useReducer: es,
      useRef: mi,
      useState: gi,
      useInsertionEffect: Da,
      useLayoutEffect: sl,
      useCallback: rs,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Da,
      // Effects are not run in the server environment.
      useEffect: Da,
      // Debugging effect
      useDebugValue: Da,
      useDeferredValue: ul,
      useTransition: dl,
      useId: fl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ll,
      useSyncExternalStore: Al
    }, yi = null;
    function as(e) {
      yi = e;
    }
    function Pa(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += uo(n.type, null, null);
              break;
            case 1:
              t += co(n.type, null, null);
              break;
            case 2:
              t += si(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var Ta = h.ReactCurrentDispatcher, Eo = h.ReactDebugCurrentFrame, Ba = 0, Zr = 1, ka = 2, Ia = 3, Ra = 4, Gr = 0, wi = 1, dr = 2, is = 12800;
    function hl(e) {
      return console.error(e), null;
    }
    function _r() {
    }
    function Yr(e, t, n, o, l, d, v, P, M) {
      var G = [], Y = /* @__PURE__ */ new Set(), te = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? is : o,
        status: Gr,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Y,
        pingedTasks: G,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: l === void 0 ? hl : l,
        onAllReady: _r,
        onShellReady: v === void 0 ? _r : v,
        onShellError: _r,
        onFatalError: _r
      }, ye = Ma(
        te,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ye.parentFlushed = !0;
      var Me = fr(te, e, null, ye, Y, ho, da, Js);
      return G.push(Me), te;
    }
    function pl(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && T(function() {
        return ki(e);
      });
    }
    function vl(e, t) {
      return {
        id: Er,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function fr(e, t, n, o, l, d, v, P) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var M = {
        node: t,
        ping: function() {
          return pl(e, M);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: l,
        legacyContext: d,
        context: v,
        treeContext: P
      };
      return M.componentStack = null, l.add(M), M;
    }
    function Ma(e, t, n, o, l, d) {
      return {
        status: Ba,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: l,
        textEmbedded: d
      };
    }
    var Sn = null;
    function bi() {
      return Sn === null || Sn.componentStack === null ? "" : Pa(Sn.componentStack);
    }
    function hr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function Co(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function xn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function hn(e) {
      e.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var En = null;
    function Qa(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = En || bi();
        En = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function Do(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function $t(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = dr, H(e.destination, t)) : (e.status = wi, e.fatalError = t);
    }
    function Po(e, t, n) {
      hr(t, "Suspense");
      var o = t.blockedBoundary, l = t.blockedSegment, d = n.fallback, v = n.children, P = /* @__PURE__ */ new Set(), M = vl(e, P), G = l.chunks.length, Y = Ma(
        e,
        G,
        M,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.children.push(Y), l.lastPushedText = !1;
      var te = Ma(
        e,
        0,
        null,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      te.parentFlushed = !0, t.blockedBoundary = M, t.blockedSegment = te;
      try {
        if (wt(e, t, v), Fi(te.chunks, e.responseState, te.lastPushedText, te.textEmbedded), te.status = Zr, Xr(M, te), M.pendingTasks === 0) {
          hn(t);
          return;
        }
      } catch (Me) {
        te.status = Ra, M.forceClientRender = !0, M.errorDigest = Do(e, Me), Qa(M, Me);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = l;
      }
      var ye = fr(e, d, o, Y, P, t.legacyContext, t.context, t.treeContext);
      ye.componentStack = t.componentStack, e.pingedTasks.push(ye), hn(t);
    }
    function Si(e, t, n, o) {
      hr(t, n);
      var l = t.blockedSegment, d = Jt(l.chunks, n, o, e.responseState, l.formatContext);
      l.lastPushedText = !1;
      var v = l.formatContext;
      l.formatContext = xr(v, n, o), wt(e, t, d), l.formatContext = v, Le(l.chunks, n), l.lastPushedText = !1, hn(t);
    }
    function To(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Bo(e, t, n, o, l) {
      var d = {};
      cr(t, d);
      var v = n(o, l);
      return ol(n, o, v, l);
    }
    function ss(e, t, n, o, l) {
      var d = n.render();
      n.props !== l && (Ei || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ze(o) || "a component"), Ei = !0);
      {
        var v = o.childContextTypes;
        if (v != null) {
          var P = t.legacyContext, M = Gi(n, o, P, v);
          t.legacyContext = M, Qt(e, t, d), t.legacyContext = P;
          return;
        }
      }
      Qt(e, t, d);
    }
    function gl(e, t, n, o) {
      xn(t, n);
      var l = po(n, t.legacyContext), d = Ji(n, o, l);
      qi(d, n, o, l), ss(e, t, d, n, o), hn(t);
    }
    var ls = {}, ko = {}, xi = {}, As = {}, Ei = !1, Io = {}, Ci = !1, Di = !1, Pi = !1;
    function us(e, t, n, o) {
      var l;
      if (l = po(n, t.legacyContext), Co(t, n), n.prototype && typeof n.prototype.render == "function") {
        var d = Ze(n) || "Unknown";
        ls[d] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), ls[d] = !0);
      }
      var v = Bo(e, t, n, o, l), P = vi();
      if (typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var M = Ze(n) || "Unknown";
        ko[M] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), ko[M] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var G = Ze(n) || "Unknown";
          ko[G] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", G, G, G), ko[G] = !0);
        }
        qi(v, n, o, l), ss(e, t, v, n, o);
      } else if (cs(n), P) {
        var Y = t.treeContext, te = 1, ye = 0;
        t.treeContext = fi(Y, te, ye);
        try {
          Qt(e, t, v);
        } finally {
          t.treeContext = Y;
        }
      } else
        Qt(e, t, v);
      hn(t);
    }
    function cs(e) {
      {
        if (e && e.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = Ze(e) || "Unknown";
          Io[t] || (s("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), Io[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = Ze(e) || "Unknown";
          As[n] || (s("%s: Function components do not support getDerivedStateFromProps.", n), As[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = Ze(e) || "Unknown";
          xi[o] || (s("%s: Function components do not support contextType.", o), xi[o] = !0);
        }
      }
    }
    function Ti(e, t) {
      if (e && e.defaultProps) {
        var n = St({}, t), o = e.defaultProps;
        for (var l in o)
          n[l] === void 0 && (n[l] = o[l]);
        return n;
      }
      return t;
    }
    function ds(e, t, n, o, l) {
      Co(t, n.render);
      var d = Bo(e, t, n.render, o, l), v = vi();
      if (v) {
        var P = t.treeContext, M = 1, G = 0;
        t.treeContext = fi(P, M, G);
        try {
          Qt(e, t, d);
        } finally {
          t.treeContext = P;
        }
      } else
        Qt(e, t, d);
      hn(t);
    }
    function ml(e, t, n, o, l) {
      var d = n.type, v = Ti(d, o);
      Bi(e, t, d, v, l);
    }
    function yl(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (Pi || (Pi = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var l = o.children;
      typeof l != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var d = Hn(n), v = l(d);
      Qt(e, t, v);
    }
    function fs(e, t, n, o) {
      var l = n._context, d = o.value, v = o.children, P;
      P = t.context, t.context = _i(l, d), Qt(e, t, v), t.context = Yi(l), P !== t.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function wl(e, t, n, o, l) {
      hr(t, "Lazy");
      var d = n._payload, v = n._init, P = v(d), M = Ti(P, o);
      Bi(e, t, P, M, l), hn(t);
    }
    function Bi(e, t, n, o, l) {
      if (typeof n == "function")
        if (To(n)) {
          gl(e, t, n, o);
          return;
        } else {
          us(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        Si(e, t, n, o);
        return;
      }
      switch (n) {
        case $a:
        case Ka:
        case kt:
        case Hi:
        case ta: {
          Qt(e, t, o.children);
          return;
        }
        case so: {
          hr(t, "SuspenseList"), Qt(e, t, o.children), hn(t);
          return;
        }
        case Ja:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case aa: {
          Po(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case oa: {
            ds(e, t, n, o, l);
            return;
          }
          case lo: {
            ml(e, t, n, o, l);
            return;
          }
          case na: {
            fs(e, t, n, o);
            return;
          }
          case ra: {
            yl(e, t, n, o);
            return;
          }
          case Lr: {
            wl(e, t, n, o);
            return;
          }
        }
      var d = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + d));
    }
    function bl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (Ci || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ci = !0), e.entries === t && (Di || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Di = !0);
    }
    function Qt(e, t, n) {
      try {
        return Sl(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (En = En !== null ? En : bi()), o;
      }
    }
    function Sl(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case Ws: {
            var o = n, l = o.type, d = o.props, v = o.ref;
            Bi(e, t, l, d, v);
            return;
          }
          case Li:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Lr: {
            var P = n, M = P._payload, G = P._init, Y;
            try {
              Y = G(M);
            } catch (Vr) {
              throw typeof Vr == "object" && Vr !== null && typeof Vr.then == "function" && hr(t, "Lazy"), Vr;
            }
            Qt(e, t, Y);
            return;
          }
        }
        if (Lt(n)) {
          ja(e, t, n);
          return;
        }
        var te = Gs(n);
        if (te) {
          bl(n, te);
          var ye = te.call(n);
          if (ye) {
            var Me = ye.next();
            if (!Me.done) {
              var rt = [];
              do
                rt.push(Me.value), Me = ye.next();
              while (!Me.done);
              ja(e, t, rt);
              return;
            }
            return;
          }
        }
        var vr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (vr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : vr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var gr = t.blockedSegment;
        gr.lastPushedText = Oi(t.blockedSegment.chunks, n, e.responseState, gr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var Cn = t.blockedSegment;
        Cn.lastPushedText = Oi(t.blockedSegment.chunks, "" + n, e.responseState, Cn.lastPushedText);
        return;
      }
      typeof n == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function ja(e, t, n) {
      for (var o = n.length, l = 0; l < o; l++) {
        var d = t.treeContext;
        t.treeContext = fi(d, o, l);
        try {
          wt(e, t, n[l]);
        } finally {
          t.treeContext = d;
        }
      }
    }
    function xl(e, t, n) {
      var o = t.blockedSegment, l = o.chunks.length, d = Ma(
        e,
        l,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(d), o.lastPushedText = !1;
      var v = fr(e, t.node, t.blockedBoundary, d, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (v.componentStack = t.componentStack.parent);
      var P = v.ping;
      n.then(P, P);
    }
    function wt(e, t, n) {
      var o = t.blockedSegment.formatContext, l = t.legacyContext, d = t.context, v = null;
      v = t.componentStack;
      try {
        return Qt(e, t, n);
      } catch (P) {
        if (xo(), typeof P == "object" && P !== null && typeof P.then == "function") {
          xl(e, t, P), t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, go(d), t.componentStack = v;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, go(d), t.componentStack = v, P;
      }
    }
    function El(e, t, n, o) {
      var l = Do(e, o);
      if (t === null ? $t(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = l, Qa(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function hs(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = Ia, vs(t, n, o);
    }
    function ps(e, t, n) {
      var o = e.blockedBoundary, l = e.blockedSegment;
      if (l.status = Ia, o === null)
        t.allPendingTasks--, t.status !== dr && (t.status = dr, t.destination !== null && B(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var d = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(d);
          {
            var v = "The server did not finish this Suspense boundary: ";
            d && typeof d.message == "string" ? d = v + d.message : d = v + String(d);
            var P = Sn;
            Sn = e;
            try {
              Qa(o, d);
            } finally {
              Sn = P;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(G) {
          return ps(G, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var M = t.onAllReady;
          M();
        }
      }
    }
    function Xr(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Zr && Xr(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function vs(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = _r;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Zr && Xr(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(hs, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Zr) {
          Xr(t, n);
          var l = t.completedSegments;
          l.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function Cl(e, t) {
      var n = t.blockedSegment;
      if (n.status === Ba) {
        go(t.context);
        var o = null;
        o = Sn, Sn = t;
        try {
          Qt(e, t, t.node), Fi(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Zr, vs(e, t.blockedBoundary, n);
        } catch (d) {
          if (xo(), typeof d == "object" && d !== null && typeof d.then == "function") {
            var l = t.ping;
            d.then(l, l);
          } else
            t.abortSet.delete(t), n.status = Ra, El(e, t.blockedBoundary, n, d);
        } finally {
          Sn = o;
        }
      }
    }
    function ki(e) {
      if (e.status !== dr) {
        var t = Xi(), n = Ta.current;
        Ta.current = os;
        var o;
        o = Eo.getCurrentStack, Eo.getCurrentStack = bi;
        var l = yi;
        as(e.responseState);
        try {
          var d = e.pingedTasks, v;
          for (v = 0; v < d.length; v++) {
            var P = d[v];
            Cl(e, P);
          }
          d.splice(0, v), e.destination !== null && Fa(e, e.destination);
        } catch (M) {
          Do(e, M), $t(e, M);
        } finally {
          as(l), Ta.current = n, Eo.getCurrentStack = o, n === os && go(t);
        }
      }
    }
    function pr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Ba: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, cn(t, e.responseState, o);
        }
        case Zr: {
          n.status = ka;
          for (var l = !0, d = n.chunks, v = 0, P = n.children, M = 0; M < P.length; M++) {
            for (var G = P[M]; v < G.index; v++)
              b(t, d[v]);
            l = Ro(e, t, G);
          }
          for (; v < d.length - 1; v++)
            b(t, d[v]);
          return v < d.length && (l = E(t, d[v])), l;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ro(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return pr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return Ns(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), pr(e, t, n), zs(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var l = o.id = Xt(e.responseState);
        return or(t, e.responseState, l), pr(e, t, n), jn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), or(t, e.responseState, o.id), pr(e, t, n), jn(t, e.responseState);
        Hs(t, e.responseState);
        var d = o.completedSegments;
        if (d.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var v = d[0];
        return Ro(e, t, v), Us(t, e.responseState);
      }
    }
    function Dl(e, t, n) {
      return js(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function Ii(e, t, n) {
      return io(t, e.responseState, n.formatContext, n.id), Ro(e, t, n), qo(t, n.formatContext);
    }
    function Mo(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        gs(e, t, n, d);
      }
      return o.length = 0, yt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Oa(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        if (!gs(e, t, n, d))
          return l++, o.splice(0, l), !1;
      }
      return o.splice(0, l), !0;
    }
    function gs(e, t, n, o) {
      if (o.status === ka)
        return !0;
      var l = o.id;
      if (l === -1) {
        var d = o.id = n.rootSegmentID;
        if (d === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Ii(e, t, o);
      } else
        return Ii(e, t, o), K(t, e.responseState, l);
    }
    function Fa(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (Ro(e, t, n), e.completedRootSegment = null, yn(t, e.responseState));
        var o = e.clientRenderedBoundaries, l;
        for (l = 0; l < o.length; l++) {
          var d = o[l];
          if (!Dl(e, t, d)) {
            e.destination = null, l++, o.splice(0, l);
            return;
          }
        }
        o.splice(0, l);
        var v = e.completedBoundaries;
        for (l = 0; l < v.length; l++) {
          var P = v[l];
          if (!Mo(e, t, P)) {
            e.destination = null, l++, v.splice(0, l);
            return;
          }
        }
        v.splice(0, l);
        var M = e.partialBoundaries;
        for (l = 0; l < M.length; l++) {
          var G = M[l];
          if (!Oa(e, t, G)) {
            e.destination = null, l++, M.splice(0, l);
            return;
          }
        }
        M.splice(0, l);
        var Y = e.completedBoundaries;
        for (l = 0; l < Y.length; l++) {
          var te = Y[l];
          if (!Mo(e, t, te)) {
            e.destination = null, l++, Y.splice(0, l);
            return;
          }
        }
        Y.splice(0, l);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), B(t));
      }
    }
    function ms(e) {
      T(function() {
        return ki(e);
      });
    }
    function Pl(e, t) {
      if (e.status === wi) {
        e.status = dr, H(t, e.fatalError);
        return;
      }
      if (e.status !== dr && e.destination === null) {
        e.destination = t;
        try {
          Fa(e, t);
        } catch (n) {
          Do(e, n), $t(e, n);
        }
      }
    }
    function ys(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return ps(o, e, t);
        }), n.clear(), e.destination !== null && Fa(e, e.destination);
      } catch (o) {
        Do(e, o), $t(e, o);
      }
    }
    function Ri() {
    }
    function ws(e, t, n, o) {
      var l = !1, d = null, v = "", P = {
        push: function(te) {
          return te !== null && (v += te), !0;
        },
        destroy: function(te) {
          l = !0, d = te;
        }
      }, M = !1;
      function G() {
        M = !0;
      }
      var Y = Yr(e, Fs(n, t ? t.identifierPrefix : void 0), Ls(), 1 / 0, Ri, void 0, G);
      if (ms(Y), ys(Y, o), Pl(Y, P), l)
        throw d;
      if (!M)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return v;
    }
    function Tl(e, t) {
      return ws(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function bs(e, t) {
      return ws(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Bl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    jo.renderToNodeStream = Bl, jo.renderToStaticMarkup = bs, jo.renderToStaticNodeStream = r, jo.renderToString = Tl, jo.version = A;
  }()), jo;
}
var xs = {}, iA;
function xu() {
  return iA || (iA = 1, zl.env.NODE_ENV !== "production" && function() {
    var f = D, A = "18.3.1", h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        w("warn", r, t);
      }
    }
    function s(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        w("error", r, t);
      }
    }
    function w(r, e, t) {
      {
        var n = h.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var l = t.map(function(d) {
          return String(d);
        });
        l.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, l);
      }
    }
    function T(r) {
      r();
    }
    var x = 512, b = null, E = 0;
    function N(r) {
      b = new Uint8Array(x), E = 0;
    }
    function B(r, e) {
      if (e.length !== 0) {
        if (e.length > x) {
          E > 0 && (r.enqueue(new Uint8Array(b.buffer, 0, E)), b = new Uint8Array(x), E = 0), r.enqueue(e);
          return;
        }
        var t = e, n = b.length - E;
        n < t.length && (n === 0 ? r.enqueue(b) : (b.set(t.subarray(0, n), E), r.enqueue(b), t = t.subarray(n)), b = new Uint8Array(x), E = 0), b.set(t, E), E += t.length;
      }
    }
    function j(r, e) {
      return B(r, e), !0;
    }
    function L(r) {
      b && E > 0 && (r.enqueue(new Uint8Array(b.buffer, 0, E)), b = null, E = 0);
    }
    function H(r) {
      r.close();
    }
    var _ = new TextEncoder();
    function I(r) {
      return _.encode(r);
    }
    function k(r) {
      return _.encode(r);
    }
    function V(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function re(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function X(r) {
      try {
        return z(r), !1;
      } catch {
        return !0;
      }
    }
    function z(r) {
      return "" + r;
    }
    function $(r, e) {
      if (X(r))
        return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, re(r)), z(r);
    }
    function Z(r, e) {
      if (X(r))
        return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, re(r)), z(r);
    }
    function ie(r) {
      if (X(r))
        return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", re(r)), z(r);
    }
    var oe = Object.prototype.hasOwnProperty, ce = 0, se = 1, Ae = 2, ee = 3, he = 4, Re = 5, Pe = 6, q = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = q + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", pe = new RegExp("^[" + q + "][" + le + "]*$"), xe = {}, ae = {};
    function me(r) {
      return oe.call(ae, r) ? !0 : oe.call(xe, r) ? !1 : pe.test(r) ? (ae[r] = !0, !0) : (xe[r] = !0, s("Invalid attribute name: `%s`", r), !1);
    }
    function Fe(r, e, t, n) {
      if (t !== null && t.type === ce)
        return !1;
      switch (typeof e) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = r.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ce(r) {
      return He.hasOwnProperty(r) ? He[r] : null;
    }
    function ue(r, e, t, n, o, l, d) {
      this.acceptsBooleans = e === Ae || e === ee || e === he, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = l, this.removeEmptyString = d;
    }
    var He = {}, xt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    xt.forEach(function(r) {
      He[r] = new ue(
        r,
        ce,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
      var e = r[0], t = r[1];
      He[e] = new ue(
        e,
        se,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
      He[r] = new ue(
        r,
        Ae,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
      He[r] = new ue(
        r,
        Ae,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(r) {
      He[r] = new ue(
        r,
        ee,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      He[r] = new ue(
        r,
        ee,
        !0,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      He[r] = new ue(
        r,
        he,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      He[r] = new ue(
        r,
        Pe,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(r) {
      He[r] = new ue(
        r,
        Re,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Et = /[\-\:]([a-z])/g, $e = function(r) {
      return r[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Et, $e);
      He[e] = new ue(
        e,
        se,
        !1,
        // mustUseProperty
        r,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Et, $e);
      He[e] = new ue(
        e,
        se,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Et, $e);
      He[e] = new ue(
        e,
        se,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      He[r] = new ue(
        r,
        se,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var at = "xlinkHref";
    He[at] = new ue(
      "xlinkHref",
      se,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      He[r] = new ue(
        r,
        se,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ne = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function we(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var be = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ne).forEach(function(r) {
      be.forEach(function(e) {
        ne[we(e, r)] = ne[r];
      });
    });
    var De = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Oe(r, e) {
      De[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ve(r, e) {
      if (r.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Qe = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, qe = {}, ht = new RegExp("^(aria)-[" + le + "]*$"), jt = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function mr(r, e) {
      {
        if (oe.call(qe, e) && qe[e])
          return !0;
        if (jt.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = Qe.hasOwnProperty(t) ? t : null;
          if (n == null)
            return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), qe[e] = !0, !0;
          if (e !== n)
            return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), qe[e] = !0, !0;
        }
        if (ht.test(e)) {
          var o = e.toLowerCase(), l = Qe.hasOwnProperty(o) ? o : null;
          if (l == null)
            return qe[e] = !0, !1;
          if (e !== l)
            return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, l), qe[e] = !0, !0;
        }
      }
      return !0;
    }
    function Ct(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = mr(r, n);
          o || t.push(n);
        }
        var l = t.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        t.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r) : t.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r);
      }
    }
    function nt(r, e) {
      Ve(r, e) || Ct(r, e);
    }
    var Je = !1;
    function _n(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !Je && (Je = !0, r === "select" && e.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var Yn = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Xn = function() {
    };
    {
      var Ge = {}, Vn = /^on./, yr = /^on[^A-Z]/, wr = new RegExp("^(aria)-[" + le + "]*$"), Jn = new RegExp("^(aria)[A-Z][" + le + "]*$");
      Xn = function(r, e, t, n) {
        if (oe.call(Ge, e) && Ge[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ge[e] = !0, !0;
        if (n != null) {
          var l = n.registrationNameDependencies, d = n.possibleRegistrationNames;
          if (l.hasOwnProperty(e))
            return !0;
          var v = d.hasOwnProperty(o) ? d[o] : null;
          if (v != null)
            return s("Invalid event handler property `%s`. Did you mean `%s`?", e, v), Ge[e] = !0, !0;
          if (Vn.test(e))
            return s("Unknown event handler property `%s`. It will be ignored.", e), Ge[e] = !0, !0;
        } else if (Vn.test(e))
          return yr.test(e) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Ge[e] = !0, !0;
        if (wr.test(e) || Jn.test(e))
          return !0;
        if (o === "innerhtml")
          return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ge[e] = !0, !0;
        if (o === "aria")
          return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ge[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Ge[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Ge[e] = !0, !0;
        var P = Ce(e), M = P !== null && P.type === ce;
        if (Yn.hasOwnProperty(o)) {
          var G = Yn[o];
          if (G !== e)
            return s("Invalid DOM property `%s`. Did you mean `%s`?", e, G), Ge[e] = !0, !0;
        } else if (!M && e !== o)
          return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Ge[e] = !0, !0;
        return typeof t == "boolean" && Fe(e, t, P) ? (t ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Ge[e] = !0, !0) : M ? !0 : Fe(e, t, P) ? (Ge[e] = !0, !1) : ((t === "false" || t === "true") && P !== null && P.type === ee && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Ge[e] = !0), !0);
      };
    }
    var Dn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var l = Xn(r, o, e[o], t);
          l || n.push(o);
        }
        var d = n.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        n.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r) : n.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r);
      }
    };
    function $r(r, e, t) {
      Ve(r, e) || Dn(r, e, t);
    }
    var Kn = function() {
    };
    {
      var qt = /^(?:webkit|moz|o)[A-Z]/, $n = /^-ms-/, br = /-(.)/g, it = /;\s*$/, Ot = {}, en = {}, je = !1, tn = !1, Pn = function(r) {
        return r.replace(br, function(e, t) {
          return t.toUpperCase();
        });
      }, pn = function(r) {
        Ot.hasOwnProperty(r) && Ot[r] || (Ot[r] = !0, s(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Pn(r.replace($n, "ms-"))
        ));
      }, Ft = function(r) {
        Ot.hasOwnProperty(r) && Ot[r] || (Ot[r] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, Tn = function(r, e) {
        en.hasOwnProperty(e) && en[e] || (en[e] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(it, "")));
      }, Yt = function(r, e) {
        je || (je = !0, s("`NaN` is an invalid value for the `%s` css style property.", r));
      }, et = function(r, e) {
        tn || (tn = !0, s("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Kn = function(r, e) {
        r.indexOf("-") > -1 ? pn(r) : qt.test(r) ? Ft(r) : it.test(e) && Tn(r, e), typeof e == "number" && (isNaN(e) ? Yt(r, e) : isFinite(e) || et(r, e));
      };
    }
    var qn = Kn, er = /["'&<>]/;
    function Sr(r) {
      ie(r);
      var e = "" + r, t = er.exec(e);
      if (!t)
        return e;
      var n, o = "", l, d = 0;
      for (l = t.index; l < e.length; l++) {
        switch (e.charCodeAt(l)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        d !== l && (o += e.substring(d, l)), d = l + 1, o += n;
      }
      return d !== l ? o + e.substring(d, l) : o;
    }
    function _e(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : Sr(r);
    }
    var tr = /([A-Z])/g, qr = /^ms-/;
    function eo(r) {
      return r.replace(tr, "-$1").toLowerCase().replace(qr, "-ms-");
    }
    var Lt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, nr = !1;
    function Bn(r) {
      !nr && Lt.test(r) && (nr = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var nn = Array.isArray;
    function pt(r) {
      return nn(r);
    }
    var Ht = k("<script>"), kn = k("<\/script>"), rn = k('<script src="'), on = k('<script type="module" src="'), Nt = k('" async=""><\/script>');
    function an(r) {
      return ie(r), ("" + r).replace(vt, xr);
    }
    var vt = /(<\/|<)(s)(cript)/gi, xr = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Er(r, e, t, n, o) {
      var l = r === void 0 ? "" : r, d = e === void 0 ? Ht : k('<script nonce="' + _e(e) + '">'), v = [];
      if (t !== void 0 && v.push(d, I(an(t)), kn), n !== void 0)
        for (var P = 0; P < n.length; P++)
          v.push(rn, I(_e(n[P])), Nt);
      if (o !== void 0)
        for (var M = 0; M < o.length; M++)
          v.push(on, I(_e(o[M])), Nt);
      return {
        bootstrapChunks: v,
        startInlineScript: d,
        placeholderPrefix: k(l + "P:"),
        segmentPrefix: k(l + "S:"),
        boundaryPrefix: l + "B:",
        idPrefix: l,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Xt = 0, Ye = 1, Ut = 2, zt = 3, sn = 4, In = 5, Dt = 6, Wt = 7;
    function st(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function ln(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Ut : r === "http://www.w3.org/1998/Math/MathML" ? zt : Xt;
      return st(e, null);
    }
    function vn(r, e, t) {
      switch (e) {
        case "select":
          return st(Ye, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return st(Ut, null);
        case "math":
          return st(zt, null);
        case "foreignObject":
          return st(Ye, null);
        case "table":
          return st(sn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return st(In, null);
        case "colgroup":
          return st(Wt, null);
        case "tr":
          return st(Dt, null);
      }
      return r.insertionMode >= sn || r.insertionMode === Xt ? st(Ye, null) : r;
    }
    var Rn = null;
    function bt(r) {
      var e = r.nextSuspenseID++;
      return k(r.boundaryPrefix + e.toString(16));
    }
    function Zt(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function lt(r) {
      return _e(r);
    }
    var Mn = k("<!-- -->");
    function tt(r, e, t, n) {
      return e === "" ? n : (n && r.push(Mn), r.push(I(lt(e))), !0);
    }
    function gt(r, e, t, n) {
      t && n && r.push(Mn);
    }
    var a = /* @__PURE__ */ new Map();
    function c(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = k(_e(eo(r)));
      return a.set(r, t), t;
    }
    var g = k(' style="'), C = k(":"), O = k(";");
    function R(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (oe.call(t, o)) {
          var l = t[o];
          if (!(l == null || typeof l == "boolean" || l === "")) {
            var d = void 0, v = void 0, P = o.indexOf("--") === 0;
            P ? (d = I(_e(o)), Z(l, o), v = I(_e(("" + l).trim()))) : (qn(o, l), d = c(o), typeof l == "number" ? l !== 0 && !oe.call(ne, o) ? v = I(l + "px") : v = I("" + l) : (Z(l, o), v = I(_e(("" + l).trim())))), n ? (n = !1, r.push(g, d, C, v)) : r.push(O, d, C, v);
          }
        }
      n || r.push(de);
    }
    var U = k(" "), J = k('="'), de = k('"'), ve = k('=""');
    function fe(r, e, t, n) {
      switch (t) {
        case "style": {
          R(r, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = Ce(t);
        if (o !== null) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var l = o.attributeName, d = I(l);
          switch (o.type) {
            case ee:
              n && r.push(U, d, ve);
              return;
            case he:
              n === !0 ? r.push(U, d, ve) : n === !1 || r.push(U, d, J, I(_e(n)), de);
              return;
            case Re:
              isNaN(n) || r.push(U, d, J, I(_e(n)), de);
              break;
            case Pe:
              !isNaN(n) && n >= 1 && r.push(U, d, J, I(_e(n)), de);
              break;
            default:
              o.sanitizeURL && ($(n, l), n = "" + n, Bn(n)), r.push(U, d, J, I(_e(n)), de);
          }
        } else if (me(t)) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var v = t.toLowerCase().slice(0, 5);
              if (v !== "data-" && v !== "aria-")
                return;
            }
          }
          r.push(U, I(t), J, I(_e(n)), de);
        }
      }
    }
    var ke = k(">"), At = k("/>");
    function ut(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (ie(n), r.push(I("" + n)));
      }
    }
    var ct = !1, An = !1, Gt = !1, Qn = !1, un = !1, gn = !1, Vt = !1;
    function mn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = pt(t);
          r.multiple && !n ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function za(r, e, t) {
      Oe("select", e), mn(e, "value"), mn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !Gt && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Gt = !0), r.push(Pt("select"));
      var n = null, o = null;
      for (var l in e)
        if (oe.call(e, l)) {
          var d = e[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
              n = d;
              break;
            case "dangerouslySetInnerHTML":
              o = d;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              fe(r, t, l, d);
              break;
          }
        }
      return r.push(ke), ut(r, o, n), n;
    }
    function Wa(r) {
      var e = "";
      return f.Children.forEach(r, function(t) {
        t != null && (e += t, !un && typeof t != "string" && typeof t != "number" && (un = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Cr = k(' selected=""');
    function _t(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Pt("option"));
      var l = null, d = null, v = null, P = null;
      for (var M in e)
        if (oe.call(e, M)) {
          var G = e[M];
          if (G == null)
            continue;
          switch (M) {
            case "children":
              l = G;
              break;
            case "selected":
              v = G, Vt || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Vt = !0);
              break;
            case "dangerouslySetInnerHTML":
              P = G;
              break;
            case "value":
              d = G;
            default:
              fe(r, t, M, G);
              break;
          }
        }
      if (o != null) {
        var Y;
        if (d !== null ? ($(d, "value"), Y = "" + d) : (P !== null && (gn || (gn = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Y = Wa(l)), pt(o))
          for (var te = 0; te < o.length; te++) {
            $(o[te], "value");
            var ye = "" + o[te];
            if (ye === Y) {
              r.push(Cr);
              break;
            }
          }
        else
          $(o, "select.value"), "" + o === Y && r.push(Cr);
      } else v && r.push(Cr);
      return r.push(ke), ut(r, P, l), l;
    }
    function Za(r, e, t) {
      Oe("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !An && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), An = !0), e.value !== void 0 && e.defaultValue !== void 0 && !ct && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), ct = !0), r.push(Pt("input"));
      var n = null, o = null, l = null, d = null;
      for (var v in e)
        if (oe.call(e, v)) {
          var P = e[v];
          if (P == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              d = P;
              break;
            case "defaultValue":
              o = P;
              break;
            case "checked":
              l = P;
              break;
            case "value":
              n = P;
              break;
            default:
              fe(r, t, v, P);
              break;
          }
        }
      return l !== null ? fe(r, t, "checked", l) : d !== null && fe(r, t, "checked", d), n !== null ? fe(r, t, "value", n) : o !== null && fe(r, t, "value", o), r.push(At), null;
    }
    function Jt(r, e, t) {
      Oe("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Qn && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Qn = !0), r.push(Pt("textarea"));
      var n = null, o = null, l = null;
      for (var d in e)
        if (oe.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              l = v;
              break;
            case "value":
              n = v;
              break;
            case "defaultValue":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              fe(r, t, d, v);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(ke), l != null) {
        if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (pt(l)) {
          if (l.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          ie(l[0]), n = "" + l[0];
        }
        ie(l), n = "" + l;
      }
      return typeof n == "string" && n[0] === `
` && r.push(wn), n !== null && ($(n, "value"), r.push(I(lt("" + n)))), null;
    }
    function to(r, e, t, n) {
      r.push(Pt(t));
      for (var o in e)
        if (oe.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              fe(r, n, o, l);
              break;
          }
        }
      return r.push(At), null;
    }
    function Dr(r, e, t) {
      r.push(Pt("menuitem"));
      for (var n in e)
        if (oe.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              fe(r, t, n, o);
              break;
          }
        }
      return r.push(ke), null;
    }
    function Le(r, e, t) {
      r.push(Pt("title"));
      var n = null;
      for (var o in e)
        if (oe.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
              n = l;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              fe(r, t, o, l);
              break;
          }
        }
      r.push(ke);
      {
        var d = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && d.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && typeof d != "string" && typeof d != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function yn(r, e, t, n) {
      r.push(Pt(t));
      var o = null, l = null;
      for (var d in e)
        if (oe.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            default:
              fe(r, n, d, v);
              break;
          }
        }
      return r.push(ke), ut(r, l, o), typeof o == "string" ? (r.push(I(lt(o))), null) : o;
    }
    function Pr(r, e, t, n) {
      r.push(Pt(t));
      var o = null, l = null;
      for (var d in e)
        if (oe.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            case "style":
              R(r, n, v);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              me(d) && typeof v != "function" && typeof v != "symbol" && r.push(U, I(d), J, I(_e(v)), de);
              break;
          }
        }
      return r.push(ke), ut(r, l, o), o;
    }
    var wn = k(`
`);
    function cn(r, e, t, n) {
      r.push(Pt(t));
      var o = null, l = null;
      for (var d in e)
        if (oe.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            default:
              fe(r, n, d, v);
              break;
          }
        }
      if (r.push(ke), l != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof l != "object" || !("__html" in l))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var P = l.__html;
        P != null && (typeof P == "string" && P.length > 0 && P[0] === `
` ? r.push(wn, I(P)) : (ie(P), r.push(I("" + P))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(wn), o;
    }
    var Tr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, dn = /* @__PURE__ */ new Map();
    function Pt(r) {
      var e = dn.get(r);
      if (e === void 0) {
        if (!Tr.test(r))
          throw new Error("Invalid tag: " + r);
        e = k("<" + r), dn.set(r, e);
      }
      return e;
    }
    var no = k("<!DOCTYPE html>");
    function rr(r, e, t, n, o) {
      switch (nt(e, t), _n(e, t), $r(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Ut && o.insertionMode !== zt && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return za(r, t, n);
        case "option":
          return _t(r, t, n, o);
        case "textarea":
          return Jt(r, t, n);
        case "input":
          return Za(r, t, n);
        case "menuitem":
          return Dr(r, t, n);
        case "title":
          return Le(r, t, n);
        case "listing":
        case "pre":
          return cn(r, t, e, n);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return to(r, t, e, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return yn(r, t, e, n);
        case "html":
          return o.insertionMode === Xt && r.push(no), yn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? yn(r, t, e, n) : Pr(r, t, e, n);
      }
    }
    var No = k("</"), Br = k(">");
    function Uo(r, e, t) {
      switch (e) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.push(No, I(e), Br);
      }
    }
    function Ga(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        B(r, t[n]);
      return n < t.length ? j(r, t[n]) : !0;
    }
    var _a = k('<template id="'), kr = k('"></template>');
    function zo(r, e, t) {
      B(r, _a), B(r, e.placeholderPrefix);
      var n = I(t.toString(16));
      return B(r, n), j(r, kr);
    }
    var or = k("<!--$-->"), ro = k('<!--$?--><template id="'), Ya = k('"></template>'), jn = k("<!--$!-->"), oo = k("<!--/$-->"), ao = k("<template"), On = k('"'), ar = k(' data-dgst="'), Ir = k(' data-msg="'), Wo = k(' data-stck="'), Zo = k("></template>");
    function Go(r, e) {
      return j(r, or);
    }
    function Rr(r, e, t) {
      if (B(r, ro), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(r, t), j(r, Ya);
    }
    function mt(r, e, t, n, o) {
      var l;
      return l = j(r, jn), B(r, ao), t && (B(r, ar), B(r, I(_e(t))), B(r, On)), n && (B(r, Ir), B(r, I(_e(n))), B(r, On)), o && (B(r, Wo), B(r, I(_e(o))), B(r, On)), l = j(r, Zo), l;
    }
    function _o(r, e) {
      return j(r, oo);
    }
    function Mr(r, e) {
      return j(r, oo);
    }
    function Xa(r, e) {
      return j(r, oo);
    }
    var Yo = k('<div hidden id="'), Qr = k('">'), Xo = k("</div>"), Vo = k('<svg aria-hidden="true" style="display:none" id="'), jr = k('">'), Or = k("</svg>"), Jo = k('<math aria-hidden="true" style="display:none" id="'), Ko = k('">'), $o = k("</math>"), io = k('<table hidden id="'), qo = k('">'), i = k("</table>"), u = k('<table hidden><tbody id="'), p = k('">'), S = k("</tbody></table>"), F = k('<table hidden><tr id="'), Q = k('">'), W = k("</tr></table>"), K = k('<table hidden><colgroup id="'), ge = k('">'), Ee = k("</colgroup></table>");
    function Se(r, e, t, n) {
      switch (t.insertionMode) {
        case Xt:
        case Ye:
          return B(r, Yo), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, Qr);
        case Ut:
          return B(r, Vo), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, jr);
        case zt:
          return B(r, Jo), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, Ko);
        case sn:
          return B(r, io), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, qo);
        case In:
          return B(r, u), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, p);
        case Dt:
          return B(r, F), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, Q);
        case Wt:
          return B(r, K), B(r, e.segmentPrefix), B(r, I(n.toString(16))), j(r, ge);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ne(r, e) {
      switch (e.insertionMode) {
        case Xt:
        case Ye:
          return j(r, Xo);
        case Ut:
          return j(r, Or);
        case zt:
          return j(r, $o);
        case sn:
          return j(r, i);
        case In:
          return j(r, S);
        case Dt:
          return j(r, W);
        case Wt:
          return j(r, Ee);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var yt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Tt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Bt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Fr = k(yt + ';$RS("'), ea = k('$RS("'), ir = k('","'), js = k('")<\/script>');
    function Os(r, e, t) {
      B(r, e.startInlineScript), e.sentCompleteSegmentFunction ? B(r, ea) : (e.sentCompleteSegmentFunction = !0, B(r, Fr)), B(r, e.segmentPrefix);
      var n = I(t.toString(16));
      return B(r, n), B(r, ir), B(r, e.placeholderPrefix), B(r, n), j(r, js);
    }
    var Va = k(Tt + ';$RC("'), Fs = k('$RC("'), Ls = k('","'), Oi = k('")<\/script>');
    function Fi(r, e, t, n) {
      if (B(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? B(r, Fs) : (e.sentCompleteBoundaryFunction = !0, B(r, Va)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = I(n.toString(16));
      return B(r, t), B(r, Ls), B(r, e.segmentPrefix), B(r, o), j(r, Oi);
    }
    var Hs = k(Bt + ';$RX("'), Ns = k('$RX("'), Us = k('"'), zs = k(")<\/script>"), St = k(",");
    function Ws(r, e, t, n, o, l) {
      if (B(r, e.startInlineScript), e.sentClientRenderFunction ? B(r, Ns) : (e.sentClientRenderFunction = !0, B(r, Hs)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(r, t), B(r, Us), (n || o || l) && (B(r, St), B(r, I(ta(n || "")))), (o || l) && (B(r, St), B(r, I(ta(o || "")))), l && (B(r, St), B(r, I(ta(l)))), j(r, zs);
    }
    var Li = /[<\u2028\u2029]/g;
    function ta(r) {
      var e = JSON.stringify(r);
      return e.replace(Li, function(t) {
        switch (t) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var kt = Object.assign, Hi = Symbol.for("react.element"), na = Symbol.for("react.portal"), ra = Symbol.for("react.fragment"), oa = Symbol.for("react.strict_mode"), aa = Symbol.for("react.profiler"), so = Symbol.for("react.provider"), lo = Symbol.for("react.context"), Lr = Symbol.for("react.forward_ref"), Ja = Symbol.for("react.suspense"), Ka = Symbol.for("react.suspense_list"), $a = Symbol.for("react.memo"), ia = Symbol.for("react.lazy"), Ni = Symbol.for("react.scope"), Zs = Symbol.for("react.debug_trace_mode"), Gs = Symbol.for("react.legacy_hidden"), _s = Symbol.for("react.default_value"), qa = Symbol.iterator, Ze = "@@iterator";
    function Ao(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = qa && r[qa] || r[Ze];
      return typeof e == "function" ? e : null;
    }
    function Ui(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ei(r) {
      return r.displayName || "Context";
    }
    function ze(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case ra:
          return "Fragment";
        case na:
          return "Portal";
        case aa:
          return "Profiler";
        case oa:
          return "StrictMode";
        case Ja:
          return "Suspense";
        case Ka:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case lo:
            var e = r;
            return ei(e) + ".Consumer";
          case so:
            var t = r;
            return ei(t._context) + ".Provider";
          case Lr:
            return Ui(r, r.render, "ForwardRef");
          case $a:
            var n = r.displayName || null;
            return n !== null ? n : ze(r.type) || "Memo";
          case ia: {
            var o = r, l = o._payload, d = o._init;
            try {
              return ze(d(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Hr = 0, ti, ni, ri, oi, zi, Wi, sa;
    function la() {
    }
    la.__reactDisabledLog = !0;
    function uo() {
      {
        if (Hr === 0) {
          ti = console.log, ni = console.info, ri = console.warn, oi = console.error, zi = console.group, Wi = console.groupCollapsed, sa = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: la,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Hr++;
      }
    }
    function ai() {
      {
        if (Hr--, Hr === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: kt({}, r, {
              value: ti
            }),
            info: kt({}, r, {
              value: ni
            }),
            warn: kt({}, r, {
              value: ri
            }),
            error: kt({}, r, {
              value: oi
            }),
            group: kt({}, r, {
              value: zi
            }),
            groupCollapsed: kt({}, r, {
              value: Wi
            }),
            groupEnd: kt({}, r, {
              value: sa
            })
          });
        }
        Hr < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Nr = h.ReactCurrentDispatcher, ii;
    function sr(r, e, t) {
      {
        if (ii === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            ii = n && n[1] || "";
          }
        return `
` + ii + r;
      }
    }
    var si = !1, co;
    {
      var Ys = typeof WeakMap == "function" ? WeakMap : Map;
      co = new Ys();
    }
    function fo(r, e) {
      if (!r || si)
        return "";
      {
        var t = co.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      si = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = Nr.current, Nr.current = null, uo();
      try {
        if (e) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (Me) {
              n = Me;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (Me) {
              n = Me;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            n = Me;
          }
          r();
        }
      } catch (Me) {
        if (Me && n && typeof Me.stack == "string") {
          for (var v = Me.stack.split(`
`), P = n.stack.split(`
`), M = v.length - 1, G = P.length - 1; M >= 1 && G >= 0 && v[M] !== P[G]; )
            G--;
          for (; M >= 1 && G >= 0; M--, G--)
            if (v[M] !== P[G]) {
              if (M !== 1 || G !== 1)
                do
                  if (M--, G--, G < 0 || v[M] !== P[G]) {
                    var Y = `
` + v[M].replace(" at new ", " at ");
                    return r.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", r.displayName)), typeof r == "function" && co.set(r, Y), Y;
                  }
                while (M >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        si = !1, Nr.current = l, ai(), Error.prepareStackTrace = o;
      }
      var te = r ? r.displayName || r.name : "", ye = te ? sr(te) : "";
      return typeof r == "function" && co.set(r, ye), ye;
    }
    function Zi(r, e, t) {
      return fo(r, !0);
    }
    function li(r, e, t) {
      return fo(r, !1);
    }
    function Aa(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function ua(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fo(r, Aa(r));
      if (typeof r == "string")
        return sr(r);
      switch (r) {
        case Ja:
          return sr("Suspense");
        case Ka:
          return sr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Lr:
            return li(r.render);
          case $a:
            return ua(r.type, e, t);
          case ia: {
            var n = r, o = n._payload, l = n._init;
            try {
              return ua(l(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ca = {}, ho = h.ReactDebugCurrentFrame;
    function po(r) {
      if (r) {
        var e = r._owner, t = ua(r.type, r._source, e ? e.type : null);
        ho.setExtraStackFrame(t);
      } else
        ho.setExtraStackFrame(null);
    }
    function Gi(r, e, t, n, o) {
      {
        var l = Function.call.bind(oe);
        for (var d in r)
          if (l(r, d)) {
            var v = void 0;
            try {
              if (typeof r[d] != "function") {
                var P = Error((n || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              v = r[d](e, d, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              v = M;
            }
            v && !(v instanceof Error) && (po(o), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, d, typeof v), po(null)), v instanceof Error && !(v.message in ca) && (ca[v.message] = !0, po(o), s("Failed %s type: %s", t, v.message), po(null));
          }
      }
    }
    var lr;
    lr = {};
    var da = {};
    Object.freeze(da);
    function Fn(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return da;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var l = ze(r) || "Unknown";
          Gi(t, n, "context", l);
        }
        return n;
      }
    }
    function Ai(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = ze(e) || "Unknown";
            lr[o] || (lr[o] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var l = r.getChildContext();
        for (var d in l)
          if (!(d in n))
            throw new Error((ze(e) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var v = ze(e) || "Unknown";
          Gi(n, l, "child context", v);
        }
        return kt({}, t, l);
      }
    }
    var Ar;
    Ar = {};
    var fa = null, Ln = null;
    function ha(r) {
      r.context._currentValue = r.parentValue;
    }
    function pa(r) {
      r.context._currentValue = r.value;
    }
    function vo(r, e) {
      if (r !== e) {
        ha(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          vo(t, n);
        }
        pa(e);
      }
    }
    function go(r) {
      ha(r);
      var e = r.parent;
      e !== null && go(e);
    }
    function _i(r) {
      var e = r.parent;
      e !== null && _i(e), pa(r);
    }
    function Yi(r, e) {
      ha(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? vo(t, e) : Yi(t, e);
    }
    function Xi(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? vo(r, t) : Xi(r, t), pa(e);
    }
    function Hn(r) {
      var e = Ln, t = r;
      e !== t && (e === null ? _i(t) : t === null ? go(e) : e.depth === t.depth ? vo(e, t) : e.depth > t.depth ? Yi(e, t) : Xi(e, t), Ln = t);
    }
    function ui(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Ar && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Ar;
      var n = Ln, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return Ln = o, o;
    }
    function Xs(r) {
      var e = Ln;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && s("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === _s ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Ar && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Ar;
      }
      return Ln = e.parent;
    }
    function Vi() {
      return Ln;
    }
    function Ur(r) {
      var e = r._currentValue;
      return e;
    }
    function mo(r) {
      return r._reactInternals;
    }
    function ci(r, e) {
      r._reactInternals = e;
    }
    var va = {}, ga = {}, ma, zr, yo, wo, ya, bo, wa, ba, di;
    {
      ma = /* @__PURE__ */ new Set(), zr = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set(), wo = /* @__PURE__ */ new Set(), ba = /* @__PURE__ */ new Set(), di = /* @__PURE__ */ new Set();
      var Ji = /* @__PURE__ */ new Set();
      bo = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Ji.has(t) || (Ji.add(t), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ya = function(r, e) {
        if (e === void 0) {
          var t = ze(r) || "Component";
          wo.has(t) || (wo.add(t), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Ki(r, e) {
      {
        var t = r.constructor, n = t && ze(t) || "ReactClass", o = n + "." + e;
        if (va[o])
          return;
        s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), va[o] = !0;
      }
    }
    var $i = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = mo(r);
        n.queue === null ? Ki(r, "setState") : (n.queue.push(e), t != null && bo(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = mo(r);
        n.replace = !0, n.queue = [e], t != null && bo(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = mo(r);
        t.queue === null ? Ki(r, "forceUpdate") : e != null && bo(e, "setState");
      }
    };
    function Vs(r, e, t, n, o) {
      var l = t(o, n);
      ya(e, l);
      var d = l == null ? n : kt({}, n, l);
      return d;
    }
    function qi(r, e, t) {
      var n = da, o = r.contextType;
      if ("contextType" in r) {
        var l = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === lo && o._context === void 0
        );
        if (!l && !di.has(r)) {
          di.add(r);
          var d = "";
          o === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? d = " However, it is set to a " + typeof o + "." : o.$$typeof === so ? d = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ze(r) || "Component", d);
        }
      }
      typeof o == "object" && o !== null ? n = Ur(o) : n = t;
      var v = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (v.state === null || v.state === void 0)) {
          var P = ze(r) || "Component";
          ma.has(P) || (ma.add(P), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", P, v.state === null ? "null" : "undefined", P));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function") {
          var M = null, G = null, Y = null;
          if (typeof v.componentWillMount == "function" && v.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof v.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof v.componentWillReceiveProps == "function" && v.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? G = "componentWillReceiveProps" : typeof v.UNSAFE_componentWillReceiveProps == "function" && (G = "UNSAFE_componentWillReceiveProps"), typeof v.componentWillUpdate == "function" && v.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof v.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), M !== null || G !== null || Y !== null) {
            var te = ze(r) || "Component", ye = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yo.has(te) || (yo.add(te), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, te, ye, M !== null ? `
  ` + M : "", G !== null ? `
  ` + G : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return v;
    }
    function Js(r, e, t) {
      {
        var n = ze(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !ba.has(e) && (ba.add(e), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ze(e) || "A pure component"), typeof r.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var l = r.props !== t;
        r.props !== void 0 && l && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !zr.has(e) && (zr.add(e), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ze(e))), typeof r.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var d = r.state;
        d && (typeof d != "object" || pt(d)) && s("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function Ks(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = ze(r) || "Unknown";
          ga[n] || (y(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), ga[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ze(r) || "Component"), $i.enqueueReplaceState(e, e.state, null));
    }
    function fi(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, l = r.replace;
        if (r.queue = null, r.replace = !1, l && o.length === 1)
          e.state = o[0];
        else {
          for (var d = l ? o[0] : e.state, v = !0, P = l ? 1 : 0; P < o.length; P++) {
            var M = o[P], G = typeof M == "function" ? M.call(e, d, t, n) : M;
            G != null && (v ? (v = !1, d = kt({}, d, G)) : kt(d, G));
          }
          e.state = d;
        }
      } else
        r.queue = null;
    }
    function So(r, e, t, n) {
      Js(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = $i, r.props = t, r.state = o;
      var l = {
        queue: [],
        replace: !1
      };
      ci(r, l);
      var d = e.contextType;
      if (typeof d == "object" && d !== null ? r.context = Ur(d) : r.context = n, r.state === t) {
        var v = ze(e) || "Component";
        wa.has(v) || (wa.add(v), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
      }
      var P = e.getDerivedStateFromProps;
      typeof P == "function" && (r.state = Vs(r, e, P, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (Ks(e, r), fi(l, r, t, n));
    }
    var $s = {
      id: 1,
      overflow: ""
    };
    function qs(r) {
      var e = r.overflow, t = r.id, n = t & ~el(t);
      return n.toString(32) + e;
    }
    function hi(r, e, t) {
      var n = r.id, o = r.overflow, l = Sa(n) - 1, d = n & ~(1 << l), v = t + 1, P = Sa(e) + l;
      if (P > 30) {
        var M = l - l % 5, G = (1 << M) - 1, Y = (d & G).toString(32), te = d >> M, ye = l - M, Me = Sa(e) + ye, rt = v << ye, vr = rt | te, gr = Y + o;
        return {
          id: 1 << Me | vr,
          overflow: gr
        };
      } else {
        var Cn = v << l, Vr = Cn | d, kl = o;
        return {
          id: 1 << P | Vr,
          overflow: kl
        };
      }
    }
    function Sa(r) {
      return 32 - tl(r);
    }
    function el(r) {
      return 1 << Sa(r) - 1;
    }
    var tl = Math.clz32 ? Math.clz32 : pi, nl = Math.log, bn = Math.LN2;
    function pi(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (nl(e) / bn | 0) | 0;
    }
    function xa(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var Ue = typeof Object.is == "function" ? Object.is : xa, It = null, Wr = null, ur = null, Ie = null, Nn = !1, Ea = !1, Rt = 0, Mt = null, fn = 0, rl = 25, Kt = !1, Un;
    function cr() {
      if (It === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Kt && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), It;
    }
    function ol(r, e) {
      if (e === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Un), !1;
      r.length !== e.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Un, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!Ue(r[t], e[t]))
          return !1;
      return !0;
    }
    function vi() {
      if (fn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function xo() {
      return Ie === null ? ur === null ? (Nn = !1, ur = Ie = vi()) : (Nn = !0, Ie = ur) : Ie.next === null ? (Nn = !1, Ie = Ie.next = vi()) : (Nn = !0, Ie = Ie.next), Ie;
    }
    function al(r, e) {
      It = e, Wr = r, Kt = !1, Rt = 0;
    }
    function il(r, e, t, n) {
      for (; Ea; )
        Ea = !1, Rt = 0, fn += 1, Ie = null, t = r(e, n);
      return gi(), t;
    }
    function Ca() {
      var r = Rt !== 0;
      return r;
    }
    function gi() {
      Kt = !1, It = null, Wr = null, Ea = !1, ur = null, fn = 0, Mt = null, Ie = null;
    }
    function es(r) {
      return Kt && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ur(r);
    }
    function ts(r) {
      return Un = "useContext", cr(), Ur(r);
    }
    function mi(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function sl(r) {
      return Un = "useState", ns(
        mi,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function ns(r, e, t) {
      if (r !== mi && (Un = "useReducer"), It = cr(), Ie = xo(), Nn) {
        var n = Ie.queue, o = n.dispatch;
        if (Mt !== null) {
          var l = Mt.get(n);
          if (l !== void 0) {
            Mt.delete(n);
            var d = Ie.memoizedState, v = l;
            do {
              var P = v.action;
              Kt = !0, d = r(d, P), Kt = !1, v = v.next;
            } while (v !== null);
            return Ie.memoizedState = d, [d, o];
          }
        }
        return [Ie.memoizedState, o];
      } else {
        Kt = !0;
        var M;
        r === mi ? M = typeof e == "function" ? e() : e : M = t !== void 0 ? t(e) : e, Kt = !1, Ie.memoizedState = M;
        var G = Ie.queue = {
          last: null,
          dispatch: null
        }, Y = G.dispatch = ul.bind(null, It, G);
        return [Ie.memoizedState, Y];
      }
    }
    function rs(r, e) {
      It = cr(), Ie = xo();
      var t = e === void 0 ? null : e;
      if (Ie !== null) {
        var n = Ie.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (ol(t, o))
            return n[0];
        }
      }
      Kt = !0;
      var l = r();
      return Kt = !1, Ie.memoizedState = [l, t], l;
    }
    function ll(r) {
      It = cr(), Ie = xo();
      var e = Ie.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Ie.memoizedState = t, t;
      } else
        return e;
    }
    function Al(r, e) {
      Un = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ul(r, e, t) {
      if (fn >= rl)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === It) {
        Ea = !0;
        var n = {
          action: t,
          next: null
        };
        Mt === null && (Mt = /* @__PURE__ */ new Map());
        var o = Mt.get(e);
        if (o === void 0)
          Mt.set(e, n);
        else {
          for (var l = o; l.next !== null; )
            l = l.next;
          l.next = n;
        }
      }
    }
    function cl(r, e) {
      return rs(function() {
        return r;
      }, e);
    }
    function dl(r, e, t) {
      return cr(), e(r._source);
    }
    function fl(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function Da(r) {
      return cr(), r;
    }
    function os() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function yi() {
      return cr(), [!1, os];
    }
    function as() {
      var r = Wr, e = qs(r.treeContext), t = Eo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = Rt++;
      return Zt(t, e, n);
    }
    function Pa() {
    }
    var Ta = {
      readContext: es,
      useContext: ts,
      useMemo: rs,
      useReducer: ns,
      useRef: ll,
      useState: sl,
      useInsertionEffect: Pa,
      useLayoutEffect: Al,
      useCallback: cl,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Pa,
      // Effects are not run in the server environment.
      useEffect: Pa,
      // Debugging effect
      useDebugValue: Pa,
      useDeferredValue: Da,
      useTransition: yi,
      useId: as,
      // Subscriptions are not setup in a server environment.
      useMutableSource: dl,
      useSyncExternalStore: fl
    }, Eo = null;
    function Ba(r) {
      Eo = r;
    }
    function Zr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += sr(t.type, null, null);
              break;
            case 1:
              e += li(t.type, null, null);
              break;
            case 2:
              e += Zi(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var ka = h.ReactCurrentDispatcher, Ia = h.ReactDebugCurrentFrame, Ra = 0, Gr = 1, wi = 2, dr = 3, is = 4, hl = 0, _r = 1, Yr = 2, pl = 12800;
    function vl(r) {
      return console.error(r), null;
    }
    function fr() {
    }
    function Ma(r, e, t, n, o, l, d, v, P) {
      var M = [], G = /* @__PURE__ */ new Set(), Y = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? pl : n,
        status: hl,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: G,
        pingedTasks: M,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? vl : o,
        onAllReady: l === void 0 ? fr : l,
        onShellReady: d === void 0 ? fr : d,
        onShellError: v === void 0 ? fr : v,
        onFatalError: P === void 0 ? fr : P
      }, te = Co(
        Y,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      te.parentFlushed = !0;
      var ye = hr(Y, r, null, te, G, da, fa, $s);
      return M.push(ye), Y;
    }
    function Sn(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && T(function() {
        return Ii(r);
      });
    }
    function bi(r, e) {
      return {
        id: Rn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function hr(r, e, t, n, o, l, d, v) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var P = {
        node: e,
        ping: function() {
          return Sn(r, P);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: l,
        context: d,
        treeContext: v
      };
      return P.componentStack = null, o.add(P), P;
    }
    function Co(r, e, t, n, o, l) {
      return {
        status: Ra,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: o,
        textEmbedded: l
      };
    }
    var xn = null;
    function hn() {
      return xn === null || xn.componentStack === null ? "" : Zr(xn.componentStack);
    }
    function En(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function Qa(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function Do(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function $t(r) {
      r.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var Po = null;
    function Si(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = Po || hn();
        Po = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function To(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function Bo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = Yr, V(r.destination, e)) : (r.status = _r, r.fatalError = e);
    }
    function ss(r, e, t) {
      En(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, l = t.fallback, d = t.children, v = /* @__PURE__ */ new Set(), P = bi(r, v), M = o.chunks.length, G = Co(
        r,
        M,
        P,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(G), o.lastPushedText = !1;
      var Y = Co(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Y.parentFlushed = !0, e.blockedBoundary = P, e.blockedSegment = Y;
      try {
        if (Xr(r, e, d), gt(Y.chunks, r.responseState, Y.lastPushedText, Y.textEmbedded), Y.status = Gr, pr(P, Y), P.pendingTasks === 0) {
          $t(e);
          return;
        }
      } catch (ye) {
        Y.status = is, P.forceClientRender = !0, P.errorDigest = To(r, ye), Si(P, ye);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var te = hr(r, l, n, G, v, e.legacyContext, e.context, e.treeContext);
      te.componentStack = e.componentStack, r.pingedTasks.push(te), $t(e);
    }
    function gl(r, e, t, n) {
      En(e, t);
      var o = e.blockedSegment, l = rr(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var d = o.formatContext;
      o.formatContext = vn(d, t, n), Xr(r, e, l), o.formatContext = d, Uo(o.chunks, t), o.lastPushedText = !1, $t(e);
    }
    function ls(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function ko(r, e, t, n, o) {
      var l = {};
      al(e, l);
      var d = t(n, o);
      return il(t, n, d, o);
    }
    function xi(r, e, t, n, o) {
      var l = t.render();
      t.props !== o && (Pi || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ze(n) || "a component"), Pi = !0);
      {
        var d = n.childContextTypes;
        if (d != null) {
          var v = e.legacyContext, P = Ai(t, n, v, d);
          e.legacyContext = P, wt(r, e, l), e.legacyContext = v;
          return;
        }
      }
      wt(r, e, l);
    }
    function As(r, e, t, n) {
      Do(e, t);
      var o = Fn(t, e.legacyContext), l = qi(t, n, o);
      So(l, t, n, o), xi(r, e, l, t, n), $t(e);
    }
    var Ei = {}, Io = {}, Ci = {}, Di = {}, Pi = !1, us = {}, cs = !1, Ti = !1, ds = !1;
    function ml(r, e, t, n) {
      var o;
      if (o = Fn(t, e.legacyContext), Qa(e, t), t.prototype && typeof t.prototype.render == "function") {
        var l = ze(t) || "Unknown";
        Ei[l] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), Ei[l] = !0);
      }
      var d = ko(r, e, t, n, o), v = Ca();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var P = ze(t) || "Unknown";
        Io[P] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", P, P, P), Io[P] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var M = ze(t) || "Unknown";
          Io[M] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Io[M] = !0);
        }
        So(d, t, n, o), xi(r, e, d, t, n);
      } else if (yl(t), v) {
        var G = e.treeContext, Y = 1, te = 0;
        e.treeContext = hi(G, Y, te);
        try {
          wt(r, e, d);
        } finally {
          e.treeContext = G;
        }
      } else
        wt(r, e, d);
      $t(e);
    }
    function yl(r) {
      {
        if (r && r.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = ze(r) || "Unknown";
          us[e] || (s("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), us[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = ze(r) || "Unknown";
          Di[t] || (s("%s: Function components do not support getDerivedStateFromProps.", t), Di[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = ze(r) || "Unknown";
          Ci[n] || (s("%s: Function components do not support contextType.", n), Ci[n] = !0);
        }
      }
    }
    function fs(r, e) {
      if (r && r.defaultProps) {
        var t = kt({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function wl(r, e, t, n, o) {
      Qa(e, t.render);
      var l = ko(r, e, t.render, n, o), d = Ca();
      if (d) {
        var v = e.treeContext, P = 1, M = 0;
        e.treeContext = hi(v, P, M);
        try {
          wt(r, e, l);
        } finally {
          e.treeContext = v;
        }
      } else
        wt(r, e, l);
      $t(e);
    }
    function Bi(r, e, t, n, o) {
      var l = t.type, d = fs(l, n);
      ja(r, e, l, d, o);
    }
    function bl(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (ds || (ds = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var l = Ur(t), d = o(l);
      wt(r, e, d);
    }
    function Qt(r, e, t, n) {
      var o = t._context, l = n.value, d = n.children, v;
      v = e.context, e.context = ui(o, l), wt(r, e, d), e.context = Xs(o), v !== e.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Sl(r, e, t, n, o) {
      En(e, "Lazy");
      var l = t._payload, d = t._init, v = d(l), P = fs(v, n);
      ja(r, e, v, P, o), $t(e);
    }
    function ja(r, e, t, n, o) {
      if (typeof t == "function")
        if (ls(t)) {
          As(r, e, t, n);
          return;
        } else {
          ml(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        gl(r, e, t, n);
        return;
      }
      switch (t) {
        case Gs:
        case Zs:
        case oa:
        case aa:
        case ra: {
          wt(r, e, n.children);
          return;
        }
        case Ka: {
          En(e, "SuspenseList"), wt(r, e, n.children), $t(e);
          return;
        }
        case Ni:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ja: {
          ss(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Lr: {
            wl(r, e, t, n, o);
            return;
          }
          case $a: {
            Bi(r, e, t, n, o);
            return;
          }
          case so: {
            Qt(r, e, t, n);
            return;
          }
          case lo: {
            bl(r, e, t, n);
            return;
          }
          case ia: {
            Sl(r, e, t, n);
            return;
          }
        }
      var l = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + l));
    }
    function xl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (cs || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cs = !0), r.entries === e && (Ti || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ti = !0);
    }
    function wt(r, e, t) {
      try {
        return El(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (Po = Po !== null ? Po : hn()), n;
      }
    }
    function El(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Hi: {
            var n = t, o = n.type, l = n.props, d = n.ref;
            ja(r, e, o, l, d);
            return;
          }
          case na:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ia: {
            var v = t, P = v._payload, M = v._init, G;
            try {
              G = M(P);
            } catch (Cn) {
              throw typeof Cn == "object" && Cn !== null && typeof Cn.then == "function" && En(e, "Lazy"), Cn;
            }
            wt(r, e, G);
            return;
          }
        }
        if (pt(t)) {
          hs(r, e, t);
          return;
        }
        var Y = Ao(t);
        if (Y) {
          xl(t, Y);
          var te = Y.call(t);
          if (te) {
            var ye = te.next();
            if (!ye.done) {
              var Me = [];
              do
                Me.push(ye.value), ye = te.next();
              while (!ye.done);
              hs(r, e, Me);
              return;
            }
            return;
          }
        }
        var rt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (rt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : rt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var vr = e.blockedSegment;
        vr.lastPushedText = tt(e.blockedSegment.chunks, t, r.responseState, vr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var gr = e.blockedSegment;
        gr.lastPushedText = tt(e.blockedSegment.chunks, "" + t, r.responseState, gr.lastPushedText);
        return;
      }
      typeof t == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function hs(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var l = e.treeContext;
        e.treeContext = hi(l, n, o);
        try {
          Xr(r, e, t[o]);
        } finally {
          e.treeContext = l;
        }
      }
    }
    function ps(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, l = Co(
        r,
        o,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(l), n.lastPushedText = !1;
      var d = hr(r, e.node, e.blockedBoundary, l, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (d.componentStack = e.componentStack.parent);
      var v = d.ping;
      t.then(v, v);
    }
    function Xr(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, l = e.context, d = null;
      d = e.componentStack;
      try {
        return wt(r, e, t);
      } catch (v) {
        if (gi(), typeof v == "object" && v !== null && typeof v.then == "function") {
          ps(r, e, v), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Hn(l), e.componentStack = d;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Hn(l), e.componentStack = d, v;
      }
    }
    function vs(r, e, t, n) {
      var o = To(r, n);
      if (e === null ? Bo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, Si(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function Cl(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = dr, Ro(e, t, n);
    }
    function ki(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = dr, n === null)
        e.allPendingTasks--, e.status !== Yr && (e.status = Yr, e.destination !== null && H(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var l = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(l);
          {
            var d = "The server did not finish this Suspense boundary: ";
            l && typeof l.message == "string" ? l = d + l.message : l = d + String(l);
            var v = xn;
            xn = r;
            try {
              Si(n, l);
            } finally {
              xn = v;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(M) {
          return ki(M, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var P = e.onAllReady;
          P();
        }
      }
    }
    function pr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Gr && pr(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function Ro(r, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (r.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          r.completedRootSegment = t;
        }
        if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
          r.onShellError = fr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Gr && pr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(Cl, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Gr) {
          pr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function Dl(r, e) {
      var t = e.blockedSegment;
      if (t.status === Ra) {
        Hn(e.context);
        var n = null;
        n = xn, xn = e;
        try {
          wt(r, e, e.node), gt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Gr, Ro(r, e.blockedBoundary, t);
        } catch (l) {
          if (gi(), typeof l == "object" && l !== null && typeof l.then == "function") {
            var o = e.ping;
            l.then(o, o);
          } else
            e.abortSet.delete(e), t.status = is, vs(r, e.blockedBoundary, t, l);
        } finally {
          xn = n;
        }
      }
    }
    function Ii(r) {
      if (r.status !== Yr) {
        var e = Vi(), t = ka.current;
        ka.current = Ta;
        var n;
        n = Ia.getCurrentStack, Ia.getCurrentStack = hn;
        var o = Eo;
        Ba(r.responseState);
        try {
          var l = r.pingedTasks, d;
          for (d = 0; d < l.length; d++) {
            var v = l[d];
            Dl(r, v);
          }
          l.splice(0, d), r.destination !== null && Ri(r, r.destination);
        } catch (P) {
          To(r, P), Bo(r, P);
        } finally {
          Ba(o), ka.current = t, Ia.getCurrentStack = n, t === Ta && Hn(e);
        }
      }
    }
    function Mo(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Ra: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, zo(e, r.responseState, n);
        }
        case Gr: {
          t.status = wi;
          for (var o = !0, l = t.chunks, d = 0, v = t.children, P = 0; P < v.length; P++) {
            for (var M = v[P]; d < M.index; d++)
              B(e, l[d]);
            o = Oa(r, e, M);
          }
          for (; d < l.length - 1; d++)
            B(e, l[d]);
          return d < l.length && (o = j(e, l[d])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Oa(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Mo(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return mt(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Mo(r, e, t), Xa(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = bt(r.responseState);
        return Rr(e, r.responseState, o), Mo(r, e, t), Mr(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Rr(e, r.responseState, n.id), Mo(r, e, t), Mr(e, r.responseState);
        Go(e, r.responseState);
        var l = n.completedSegments;
        if (l.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = l[0];
        return Oa(r, e, d), _o(e, r.responseState);
      }
    }
    function gs(r, e, t) {
      return Ws(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Fa(r, e, t) {
      return Se(e, r.responseState, t.formatContext, t.id), Oa(r, e, t), Ne(e, t.formatContext);
    }
    function ms(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        ys(r, e, t, l);
      }
      return n.length = 0, Fi(e, r.responseState, t.id, t.rootSegmentID);
    }
    function Pl(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        if (!ys(r, e, t, l))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function ys(r, e, t, n) {
      if (n.status === wi)
        return !0;
      var o = n.id;
      if (o === -1) {
        var l = n.id = t.rootSegmentID;
        if (l === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Fa(r, e, n);
      } else
        return Fa(r, e, n), Os(e, r.responseState, o);
    }
    function Ri(r, e) {
      N();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Oa(r, e, t), r.completedRootSegment = null, Ga(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var l = n[o];
          gs(r, e, l);
        }
        n.splice(0, o);
        var d = r.completedBoundaries;
        for (o = 0; o < d.length; o++) {
          var v = d[o];
          ms(r, e, v);
        }
        d.splice(0, o), L(e), N(e);
        var P = r.partialBoundaries;
        for (o = 0; o < P.length; o++) {
          var M = P[o];
          if (!Pl(r, e, M)) {
            r.destination = null, o++, P.splice(0, o);
            return;
          }
        }
        P.splice(0, o);
        var G = r.completedBoundaries;
        for (o = 0; o < G.length; o++) {
          var Y = G[o];
          ms(r, e, Y);
        }
        G.splice(0, o);
      } finally {
        L(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), H(e));
      }
    }
    function ws(r) {
      T(function() {
        return Ii(r);
      });
    }
    function Tl(r, e) {
      if (r.status === _r) {
        r.status = Yr, V(e, r.fatalError);
        return;
      }
      if (r.status !== Yr && r.destination === null) {
        r.destination = e;
        try {
          Ri(r, e);
        } catch (t) {
          To(r, t), Bo(r, t);
        }
      }
    }
    function bs(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return ki(n, r, e);
        }), t.clear(), r.destination !== null && Ri(r, r.destination);
      } catch (n) {
        To(r, n), Bo(r, n);
      }
    }
    function Bl(r, e) {
      return new Promise(function(t, n) {
        var o, l, d = new Promise(function(te, ye) {
          l = te, o = ye;
        });
        function v() {
          var te = new ReadableStream(
            {
              type: "bytes",
              pull: function(ye) {
                Tl(M, ye);
              },
              cancel: function(ye) {
                bs(M);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          te.allReady = d, t(te);
        }
        function P(te) {
          d.catch(function() {
          }), n(te);
        }
        var M = Ma(r, Er(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), ln(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, l, v, P, o);
        if (e && e.signal) {
          var G = e.signal, Y = function() {
            bs(M, G.reason), G.removeEventListener("abort", Y);
          };
          G.addEventListener("abort", Y);
        }
        ws(M);
      });
    }
    xs.renderToReadableStream = Bl, xs.version = A;
  }()), xs;
}
var Fo, Hl;
zl.env.NODE_ENV === "production" ? (Fo = wu(), Hl = bu()) : (Fo = Su(), Hl = xu());
Lo.version = Fo.version;
Lo.renderToString = Fo.renderToString;
Lo.renderToStaticMarkup = Fo.renderToStaticMarkup;
Lo.renderToNodeStream = Fo.renderToNodeStream;
Lo.renderToStaticNodeStream = Fo.renderToStaticNodeStream;
Lo.renderToReadableStream = Hl.renderToReadableStream;
const Ke = {
  AUDIO_BUTTON: "audio-button",
  NOTIFICATION_BUTTON: "notification-button",
  CLOSE_CHAT_BUTTON: "close-chat-button",
  SEND_MESSAGE_BUTTON: "send-button",
  VOICE_MESSAGE_BUTTON: "voice-button",
  FILE_ATTACHMENT_BUTTON: "file-attachment-button",
  EMOJI_PICKER_BUTTON: "emoji-button"
}, Eu = (f, A) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, viewBox: "0 0 42 42", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M17 9a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8Zm0 0", transform: "rotate(.086) scale(1.77778)" }), /* @__PURE__ */ D.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 10
}, d: "M14.66 14.66 3.34 3.34", transform: "rotate(.086) scale(1.77778)" }));
D.forwardRef(Eu);
const Cu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTojYjAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NCIgZD0iTTE3IDlhOCA4IDAgMCAxLTggOCA4IDggMCAwIDEtOC04IDggOCAwIDAgMSA4LTggOCA4IDAgMCAxIDggOFptMCAwIiB0cmFuc2Zvcm09InJvdGF0ZSguMDg2KSBzY2FsZSgxLjc3Nzc4KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOiNiMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTE0LjY2IDE0LjY2IDMuMzQgMy4zNCIgdHJhbnNmb3JtPSJyb3RhdGUoLjA4Nikgc2NhbGUoMS43Nzc3OCkiLz48L3N2Zz4=", Du = (f, A) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 1000 1000", ref: A, ...f }, /* @__PURE__ */ D.createElement("rect", { width: "100%", height: "100%", fill: "#fff" }), /* @__PURE__ */ D.createElement("g", null, /* @__PURE__ */ D.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -99 362) scale(3.4003)" }), /* @__PURE__ */ D.createElement("path", { d: "M0 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(180 106 386) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -46 282) scale(3.4003)" }), /* @__PURE__ */ D.createElement("path", { d: "M19 65h4l5 4v1H14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -3 240) scale(3.4003)" }), /* @__PURE__ */ D.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(236 175) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 139 600) scale(3.4003)" }), /* @__PURE__ */ D.createElement("path", { d: "M184 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 219 548) scale(3.4003)" }), /* @__PURE__ */ D.createElement("path", { d: "M175 65h4l5 4v1h-14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 262 505) scale(3.4003)" }), /* @__PURE__ */ D.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(767 175) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 116.7, height: 70, x: -58.4, y: -35, rx: 31.5, ry: 31.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 877) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 60, height: 20, x: -30, y: -10, rx: 3, ry: 3, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 728) scale(3.4003)" }), /* @__PURE__ */ D.createElement("circle", { r: 75, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 473) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 129.4, height: 82.3, x: -64.7, y: -41.1, rx: 37, ry: 37, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#fff",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 108, height: 68.6, x: -54, y: -34.3, rx: 30.9, ry: 30.9, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ D.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(415 464) scale(3.4003)" }), /* @__PURE__ */ D.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(591 464) scale(3.4003)" }), /* @__PURE__ */ D.createElement("rect", { width: 96, height: 53.2, x: -48, y: -26.6, rx: 23.9, ry: 23.9, style: {
  stroke: "#162334",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(503 875) scale(3.4003)" }), /* @__PURE__ */ D.createElement("path", { strokeLinecap: "round", d: "m68 215 7-15M81 222l-7-22M81 222l7-14M101 208H87M114 219l-7-24M113 219l13-22M131 214l-5-17M148 214h-18M69 214H51M100 209l7-15", style: {
  stroke: "#a478fc",
  strokeWidth: 3,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 10,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "none",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" })));
D.forwardRef(Du);
const sA = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48Zz48cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIHg9Ii0yMi41IiB5PSItMTUiIHJ4PSIxLjUiIHJ5PSIxLjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzM3NTQ3YTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC05OSAzNjIpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTA2IDM4Nikgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSI0IiB4PSItMTIuNSIgeT0iLTIiIHJ4PSIuMiIgcnk9Ii4yIiBzdHlsZT0ic3Ryb2tlOiM0NjY0OGM7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAtNDYgMjgyKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE5IDY1aDRsNSA0djFIMTR2LTFaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjIiIHg9Ii0xMi41IiB5PSItMSIgcng9Ii4xIiByeT0iLjEiIHN0eWxlPSJzdHJva2U6Izk4YjBjYTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6Izk4YjBjYTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC0zIDI0MCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNy41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYgMTc1KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiB4PSItMjIuNSIgeT0iLTE1IiByeD0iMS41IiByeT0iMS41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMzNzU0N2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzkgNjAwKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE4NCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjQiIHg9Ii0xMi41IiB5PSItMiIgcng9Ii4yIiByeT0iLjIiIHN0eWxlPSJzdHJva2U6IzQ2NjQ4YztzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzQ2NjQ4YztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIxOSA1NDgpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMTc1IDY1aDRsNSA0djFoLTE0di0xWiIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNDY2NDhjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1IDE1MCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyIiB4PSItMTIuNSIgeT0iLTEiIHJ4PSIuMSIgcnk9Ii4xIiBzdHlsZT0ic3Ryb2tlOiM5OGIwY2E7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNjIgNTA1KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSI3LjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6I2E0NzhmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NyAxNzUpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTE2LjciIGhlaWdodD0iNzAiIHg9Ii01OC40IiB5PSItMzUiIHJ4PSIzMS41IiByeT0iMzEuNSIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNzFjOWZjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDg3Nykgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgeD0iLTMwIiB5PSItMTAiIHJ4PSIzIiByeT0iMyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMzc1NDdhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDcyOCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzcxYzlmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMiA0NzMpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTI5LjQiIGhlaWdodD0iODIuMyIgeD0iLTY0LjciIHk9Ii00MS4xIiByeD0iMzciIHJ5PSIzNyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDQ2NCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iNjguNiIgeD0iLTU0IiB5PSItMzQuMyIgcng9IjMwLjkiIHJ5PSIzMC45IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMxNjIzMzQ7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTEgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjUzLjIiIHg9Ii00OCIgeT0iLTI2LjYiIHJ4PSIyMy45IiByeT0iMjMuOSIgc3R5bGU9InN0cm9rZTojMTYyMzM0O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMTYyMzM0O2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDg3NSkgc2NhbGUoMy40MDAzKSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0ibTY4IDIxNSA3LTE1TTgxIDIyMmwtNy0yMk04MSAyMjJsNy0xNE0xMDEgMjA4SDg3TTExNCAyMTlsLTctMjRNMTEzIDIxOWwxMy0yMk0xMzEgMjE0bC01LTE3TTE0OCAyMTRoLTE4TTY5IDIxNEg1MU0xMDAgMjA5bDctMTUiIHN0eWxlPSJzdHJva2U6I2E0NzhmYztzdHJva2Utd2lkdGg6MztzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PC9nPjwvc3ZnPg==", Pu = (f, A) => /* @__PURE__ */ D.createElement("svg", { width: 140, height: 140, xmlns: "http://www.w3.org/2000/svg", ref: A, ...f }, /* @__PURE__ */ D.createElement("circle", { cy: 60.044, cx: 70, fill: "#5c5c5c", r: 29 }), /* @__PURE__ */ D.createElement("path", { d: "m16.36 156.186-.01-30.5c-.005-16.844 24.168-30.507 53.991-30.516 29.823-.009 54.004 13.64 54.01 30.484l.008 30.5-108 .032z", fill: "#5c5c5c" }));
D.forwardRef(Pu);
const Tu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN5PSI2MC4wNDQiIGN4PSI3MCIgZmlsbD0iIzVjNWM1YyIgcj0iMjkiLz48cGF0aCBkPSJtMTYuMzYgMTU2LjE4Ni0uMDEtMzAuNWMtLjAwNS0xNi44NDQgMjQuMTY4LTMwLjUwNyA1My45OTEtMzAuNTE2IDI5LjgyMy0uMDA5IDU0LjAwNCAxMy42NCA1NC4wMSAzMC40ODRsLjAwOCAzMC41LTEwOCAuMDMyeiIgZmlsbD0iIzVjNWM1YyIvPjwvc3ZnPg==", Bu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 0 637 637", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20", fill: "#fff", fillRule: "evenodd" }), /* @__PURE__ */ D.createElement("path", { d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1" })), lA = D.forwardRef(Bu), ku = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M765-321q0 117-84 196-83 80-200 80-118 0-200-80t-83-196v-392q0-85 61-144 61-58 146-58 86 0 147 58 61 59 61 144v374q0 54-39 92-39 37-93 37-55 0-93-37-38-38-38-92v-372h110v372q0 9 6 14t15 5q8 0 15-5t7-14v-374q0-39-29-66t-68-27q-40 0-69 27t-29 66v392q0 71 51 119t122 48q71 0 122-48t51-119v-426h111v426Z" })), AA = D.forwardRef(ku), Iu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M125-165v-113h77v-273q0-93 55-167 56-75 146-100v-19q0-32 22-55 23-23 55-23t55 23q22 23 22 55v19q90 25 146 99 56 73 56 168v273h77v113H125ZM480-32q-38 0-66-27-27-27-27-66h186q0 39-27 66t-66 27Z" })), Ru = D.forwardRef(Iu), Mu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M137-190v-113h78v-253q0-41 11-79 11-39 35-71l-9 150h10L17-802l74-74L873-92l-74 74-175-172H137Zm609-149L319-769q20-15 41-25t44-16v-28q0-32 22-54t54-22q32 0 55 22t22 54v28q85 23 137 94t52 160v217ZM481-47q-38 0-65-27t-27-65h184q0 38-27 65t-65 27Z" })), Qu = D.forwardRef(Mu), ju = (f, A) => /* @__PURE__ */ D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", ref: A, ...f }, /* @__PURE__ */ D.createElement("g", { strokeLinecap: "round", strokeWidth: 10 }, /* @__PURE__ */ D.createElement("path", { d: "m19 19 61 61M80 19 19 80" }))), Ou = D.forwardRef(ju), Fu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M94-136v-255l351-93-351-92v-253l816 346L94-136Z" })), Lu = D.forwardRef(Fu), Hu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M480-372q-61 0-105-43-43-43-43-105v-240q0-61 43-105 43-43 105-43 61 0 105 43 43 44 43 105v240q0 62-43 105t-105 43ZM425-76v-122q-121-16-197-108t-76-214h109q0 91 64 154t155 63q91 0 155-63t64-154h109q0 122-77 214T534-198v122H425Z" })), Nu = D.forwardRef(Hu), Uu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "m763-343-80-79q8-20 13-44 5-23 5-54h109q0 49-11 95t-36 82ZM625-482 336-770v-2q3-56 45-96t101-40q62 0 105 43t43 105v249l-1 17q-1 7-4 12ZM427-76v-122q-120-16-196-108-77-92-77-214h109q0 91 64 154t155 63q43 0 80-14 37-15 67-41l78 79q-35 32-78 53t-93 28v122H427Zm362 27L41-796l75-75 748 748-75 74Z" })), zu = D.forwardRef(Uu), Wu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M625-511q29 0 50-21t20-50q0-29-20-50-21-20-50-20t-50 20-20 50q0 29 20 50 21 21 50 21Zm-290 0q29 0 50-21t20-49q0-30-20-50t-50-21q-29 0-50 20-20 21-20 50 0 30 20 50 21 21 50 21Zm145 268q75 0 137-43t85-115H258q24 72 85 115 62 43 137 43Zm0 198q-90 0-170-34-79-34-138-93T79-310q-34-80-34-170t34-170q34-79 93-138t138-93q80-34 170-34t170 34q79 34 138 93t93 138q34 80 34 170t-34 170q-34 79-93 138T650-79q-80 34-170 34Zm0-435Zm0 322q134 0 228-94t94-228q0-134-94-228t-228-94q-134 0-228 94t-94 228q0 134 94 228t228 94Z" })), uA = D.forwardRef(Wu), Zu = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M553-64v-108q107-27 173-113 67-87 67-197 0-109-67-195T553-789v-108q152 26 249 144 97 117 97 271 0 155-97 273T553-64ZM61-335v-290h176l236-237v764L237-335H61Zm492 28v-346q51 23 82 70t31 103-31 103q-31 47-82 70Z" })), Gu = D.forwardRef(Zu), _u = (f, A) => /* @__PURE__ */ D.createElement("svg", { viewBox: "0 -960 960 960", ref: A, ...f }, /* @__PURE__ */ D.createElement("path", { d: "M807-15 700-123q-33 21-71 37-38 15-80 22v-108q20-4 38-12l35-17-153-154v257L234-335H57v-290h144L10-818l74-75L882-90l-75 75Zm37-264-80-79q13-30 19-60 7-31 7-64 0-109-68-195-67-86-173-112v-108q152 26 249 144 98 117 98 271 0 55-14 107-13 51-38 96ZM661-462 549-575v-78q51 23 83 70 31 47 31 103l-1 9-1 9ZM469-655 366-759l103-103v207Z" })), Yu = D.forwardRef(_u), Xu = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", yA = {
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: Cu,
    embedded: !1,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: lA
  },
  header: {
    title: /* @__PURE__ */ m.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: sA,
    buttons: [Ke.NOTIFICATION_BUTTON, Ke.AUDIO_BUTTON, Ke.CLOSE_CHAT_BUTTON],
    closeChatIcon: Ou
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: Ru,
    iconDisabled: Qu,
    sound: Xu,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: Gu,
    iconDisabled: Yu
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: Lu,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    buttons: [Ke.VOICE_MESSAGE_BUTTON, Ke.SEND_MESSAGE_BUTTON]
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30,
    defaultOpen: !1
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Tu,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: sA,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    sendAsAudio: !1,
    icon: Nu,
    iconDisabled: zu
  },
  footer: {
    text: /* @__PURE__ */ m.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.com"),
        children: [
          /* @__PURE__ */ m.jsx("span", { children: "Powered By " }, 0),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              style: {
                borderRadius: "50%",
                width: 14,
                height: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #42b0c5, #491d8d)"
              },
              children: /* @__PURE__ */ m.jsx(lA, { style: { width: "80%", height: "80%", fill: "#fff" } })
            },
            1
          ),
          /* @__PURE__ */ m.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" }, 2)
        ]
      }
    ),
    buttons: [Ke.FILE_ATTACHMENT_BUTTON, Ke.EMOJI_PICKER_BUTTON]
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: AA,
    iconDisabled: AA,
    sendFileName: !0,
    showMediaDisplay: !1
  },
  emoji: {
    disabled: !1,
    icon: uA,
    iconDisabled: uA,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  toast: {
    maxCount: 3,
    forbidOnMax: !1,
    dismissOnClick: !0
  },
  event: {
    rcbPreInjectMessage: !1,
    rcbPostInjectMessage: !1,
    rcbStartStreamMessage: !1,
    rcbChunkStreamMessage: !1,
    rcbStopStreamMessage: !1,
    rcbRemoveMessage: !1,
    rcbLoadChatHistory: !1,
    rcbToggleChatWindow: !1,
    rcbToggleAudio: !1,
    rcbToggleNotifications: !1,
    rcbToggleVoice: !1,
    rcbChangePath: !1,
    rcbShowToast: !1,
    rcbDismissToast: !1,
    rcbUserSubmitText: !1,
    rcbUserUploadFile: !1,
    rcbTextAreaChangeValue: !1,
    rcbPreLoadChatBot: !1,
    rcbPostLoadChatBot: !1
  },
  ariaLabel: {
    chatButton: "open chat",
    audioButton: "toggle audio",
    closeChatButton: "close chat",
    emojiButton: "emoji picker",
    fileAttachmentButton: "upload file",
    notificationButton: "toggle notifications",
    sendButton: "send message",
    voiceButton: "toggle voice",
    inputTextArea: "input text area"
  },
  device: {
    desktopEnabled: !0,
    mobileEnabled: !0,
    applyMobileOptimizations: !0
  }
}, wA = D.createContext({ settings: {}, setSettings: () => null }), Be = () => D.useContext(wA), Vu = ({
  children: f,
  settings: A = yA,
  setSettings: h
}) => /* @__PURE__ */ m.jsx(wA.Provider, { value: { settings: A, setSettings: h }, children: f }), bA = {
  tooltipStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {},
  mediaDisplayContainerStyle: {},
  chatButtonStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  sendButtonDisabledStyle: {},
  audioButtonStyle: {},
  audioButtonDisabledStyle: {},
  closeChatButtonStyle: {},
  emojiButtonStyle: {},
  emojiButtonDisabledStyle: {},
  fileAttachmentButtonStyle: {},
  fileAttachmentButtonDisabledStyle: {},
  notificationButtonStyle: {},
  notificationButtonDisabledStyle: {},
  voiceButtonStyle: {},
  voiceButtonDisabledStyle: {},
  chatIconStyle: {},
  audioIconStyle: {},
  audioIconDisabledStyle: {},
  closeChatIconStyle: {},
  emojiIconStyle: {},
  emojiIconDisabledStyle: {},
  fileAttachmentIconStyle: {},
  fileAttachmentIconDisabledStyle: {},
  notificationIconStyle: {},
  notificationIconDisabledStyle: {},
  voiceIconStyle: {},
  voiceIconDisabledStyle: {},
  sendIconStyle: {},
  sendIconDisabledStyle: {},
  sendIconHoveredStyle: {},
  rcbTypingIndicatorContainerStyle: {},
  rcbTypingIndicatorDotStyle: {},
  toastPromptContainerStyle: {},
  toastPromptStyle: {},
  toastPromptHoveredStyle: {}
}, SA = D.createContext({ styles: {}, setStyles: () => null }), Xe = () => D.useContext(SA), Ju = ({
  children: f,
  styles: A = bA,
  setStyles: h
}) => /* @__PURE__ */ m.jsx(SA.Provider, { value: { styles: A, setStyles: h }, children: f }), Ku = ({ buttons: f }) => {
  var A, h, y, s, w;
  const { settings: T } = Be(), { styles: x } = Xe(), b = {
    backgroundImage: `linear-gradient(to right, ${(A = T.general) == null ? void 0 : A.secondaryColor},
			${(h = T.general) == null ? void 0 : h.primaryColor})`,
    ...x.headerStyle
  };
  return /* @__PURE__ */ m.jsxs("div", { style: b, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "rcb-chat-header", children: [
      ((y = T.header) == null ? void 0 : y.showAvatar) && /* @__PURE__ */ m.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(s = T.header) == null ? void 0 : s.avatar})` },
          className: "rcb-bot-avatar"
        }
      ),
      (w = T.header) == null ? void 0 : w.title
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "rcb-chat-header", children: f == null ? void 0 : f.map(
      (E, N) => /* @__PURE__ */ m.jsx(D.Fragment, { children: E }, N)
    ) })
  ] });
}, xA = D.createContext({}), ot = () => D.useContext(xA), $u = ({
  children: f,
  botIdRef: A,
  flowRef: h
}) => {
  const y = D.useRef(null), s = D.useRef(""), w = D.useRef(/* @__PURE__ */ new Map()), T = D.useRef(null), x = D.useRef(""), b = D.useRef(!1), E = D.useRef(null), N = D.useRef(null), B = D.useRef(null);
  return /* @__PURE__ */ m.jsx(xA.Provider, { value: {
    botIdRef: A,
    flowRef: h,
    inputRef: y,
    streamMessageMap: w,
    chatBodyRef: T,
    paramsInputRef: x,
    keepVoiceOnRef: b,
    audioContextRef: E,
    audioBufferRef: N,
    gainNodeRef: B,
    prevInputRef: s
  }, children: f });
}, EA = D.createContext({}), ft = () => D.useContext(EA), qu = ({
  children: f,
  settings: A
}) => {
  var h, y, s, w, T, x;
  const [b, E] = D.useState(!1), [N, B] = D.useState(((h = A == null ? void 0 : A.chatWindow) == null ? void 0 : h.defaultOpen) ?? !1), [j, L] = D.useState(((y = A == null ? void 0 : A.audio) == null ? void 0 : y.defaultToggledOn) ?? !1), [H, _] = D.useState(((s = A == null ? void 0 : A.voice) == null ? void 0 : s.defaultToggledOn) ?? !1), [I, k] = D.useState(
    ((w = A == null ? void 0 : A.notification) == null ? void 0 : w.defaultToggledOn) ?? !0
  ), [V, re] = D.useState(!1), [X, z] = D.useState(!1), [$, Z] = D.useState(!0), [ie, oe] = D.useState(!1), [ce, se] = D.useState(!1), [Ae, ee] = D.useState(!1), [he, Re] = D.useState(0), [Pe, q] = D.useState(0), [le, pe] = D.useState(!1), [xe, ae] = D.useState(null), [me, Fe] = D.useState(((T = window.visualViewport) == null ? void 0 : T.height) ?? window.innerHeight), [Ce, ue] = D.useState(((x = window.visualViewport) == null ? void 0 : x.width) ?? window.innerWidth);
  return /* @__PURE__ */ m.jsx(EA.Provider, { value: {
    isBotTyping: b,
    setIsBotTyping: E,
    isChatWindowOpen: N,
    setIsChatWindowOpen: B,
    audioToggledOn: j,
    setAudioToggledOn: L,
    voiceToggledOn: H,
    setVoiceToggledOn: _,
    notificationsToggledOn: I,
    setNotificationsToggledOn: k,
    isLoadingChatHistory: V,
    setIsLoadingChatHistory: re,
    isScrolling: X,
    setIsScrolling: z,
    textAreaDisabled: $,
    setTextAreaDisabled: Z,
    textAreaSensitiveMode: ie,
    setTextAreaSensitiveMode: oe,
    hasInteractedPage: ce,
    setHasInteractedPage: se,
    hasFlowStarted: Ae,
    setHasFlowStarted: ee,
    unreadCount: he,
    setUnreadCount: Re,
    inputLength: Pe,
    setInputLength: q,
    blockAllowsAttachment: le,
    setBlockAllowsAttachment: pe,
    timeoutId: xe,
    setTimeoutId: ae,
    viewportHeight: me,
    setViewportHeight: Fe,
    viewportWidth: Ce,
    setViewportWidth: ue
  }, children: f });
}, ec = () => {
  var f, A, h;
  const { settings: y } = Be(), { styles: s } = Xe(), { unreadCount: w, isScrolling: T, setIsScrolling: x } = ft(), { chatBodyRef: b } = ot(), [E, N] = D.useState(!1), B = {
    color: (f = y.general) == null ? void 0 : f.primaryColor,
    borderColor: (A = y.general) == null ? void 0 : A.primaryColor,
    ...s.chatMessagePromptHoveredStyle
  }, j = () => {
    N(!0);
  }, L = () => {
    N(!1);
  };
  function H(I) {
    if (!b.current)
      return;
    const k = b.current.scrollTop, V = b.current.scrollHeight - b.current.clientHeight - k, re = 20;
    let X = 0;
    function z() {
      if (!b.current)
        return;
      X += re;
      const $ = _(X, k, V, I);
      b.current.scrollTop = $, X < I ? requestAnimationFrame(z) : x(!1);
    }
    z();
  }
  const _ = (I, k, V, re) => (I /= re / 2, I < 1 ? V / 2 * I * I + k : (I--, -V / 2 * (I * (I - 2) - 1) + k));
  return /* @__PURE__ */ m.jsx("div", { className: `rcb-message-prompt-container ${(() => {
    var I;
    return b.current && ((I = y.chatWindow) != null && I.showMessagePrompt) && T && w > 0 ? "visible" : "hidden";
  })()}`, children: /* @__PURE__ */ m.jsx(
    "div",
    {
      onMouseEnter: j,
      onMouseLeave: L,
      style: E ? B : s.chatMessagePromptStyle,
      onMouseDown: (I) => {
        I.preventDefault(), H(600);
      },
      className: "rcb-message-prompt-text",
      children: (h = y.chatWindow) == null ? void 0 : h.messagePromptText
    }
  ) });
}, Ts = () => {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    throw new Error("crypto.randomUUID not available");
  } catch {
    if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(f) {
        const A = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
        return (f === "x" ? A : A & 3 | 8).toString(16);
      });
    throw new Error("crypto.getRandomValues is also not available");
  }
}, Te = {
  // audio
  TOGGLE_AUDIO: "rcb-toggle-audio",
  // notifications:
  TOGGLE_NOTIFICATIONS: "rcb-toggle-notifications",
  // voice
  TOGGLE_VOICE: "rcb-toggle-voice",
  // chat window
  TOGGLE_CHAT_WINDOW: "rcb-toggle-chat-window",
  // messages:
  PRE_INJECT_MESSAGE: "rcb-pre-inject-message",
  POST_INJECT_MESSAGE: "rcb-post-inject-message",
  START_STREAM_MESSAGE: "rcb-start-stream-message",
  CHUNK_STREAM_MESSAGE: "rcb-chunk-stream-message",
  STOP_STREAM_MESSAGE: "rcb-stop-stream-message",
  REMOVE_MESSAGE: "rcb-remove-message",
  // chat history
  LOAD_CHAT_HISTORY: "rcb-load-chat-history",
  // path
  CHANGE_PATH: "rcb-change-path",
  // toast
  SHOW_TOAST: "rcb-show-toast",
  DISMISS_TOAST: "rcb-dismiss-toast",
  // user input submission
  USER_SUBMIT_TEXT: "rcb-user-submit-text",
  USER_UPLOAD_FILE: "rcb-user-upload-file",
  // text area value change
  TEXT_AREA_CHANGE_VALUE: "rcb-text-area-change-value",
  // chatbot loading
  PRE_LOAD_CHATBOT: "rcb-pre-load-chatbot",
  POST_LOAD_CHATBOT: "rcb-post-load-chatbot"
}, tc = {
  [Te.TOGGLE_AUDIO]: !0,
  [Te.TOGGLE_VOICE]: !0,
  [Te.TOGGLE_NOTIFICATIONS]: !0,
  [Te.TOGGLE_CHAT_WINDOW]: !0,
  [Te.PRE_INJECT_MESSAGE]: !0,
  [Te.POST_INJECT_MESSAGE]: !1,
  [Te.PRE_LOAD_CHATBOT]: !0,
  [Te.POST_LOAD_CHATBOT]: !1,
  [Te.START_STREAM_MESSAGE]: !0,
  [Te.CHUNK_STREAM_MESSAGE]: !0,
  [Te.STOP_STREAM_MESSAGE]: !0,
  [Te.LOAD_CHAT_HISTORY]: !0,
  [Te.CHANGE_PATH]: !0,
  [Te.SHOW_TOAST]: !0,
  [Te.DISMISS_TOAST]: !0,
  [Te.USER_SUBMIT_TEXT]: !0,
  [Te.USER_UPLOAD_FILE]: !0,
  [Te.TEXT_AREA_CHANGE_VALUE]: !0
}, Bs = (f, A, h) => {
  const y = new CustomEvent(f, {
    detail: A,
    cancelable: tc[f]
  });
  return y.data = h, window.dispatchEvent(y), y;
}, CA = D.createContext({ paths: [], setPaths: () => null }), Wl = () => D.useContext(CA), nc = ({ children: f }) => {
  const [A, h] = D.useState([]);
  return /* @__PURE__ */ m.jsx(CA.Provider, { value: { paths: A, setPaths: h }, children: f });
}, ji = () => {
  const { settings: f } = Be(), { paths: A, setPaths: h } = Wl(), {
    setIsBotTyping: y,
    setTextAreaDisabled: s,
    setTextAreaSensitiveMode: w,
    blockAllowsAttachment: T,
    setBlockAllowsAttachment: x
  } = ft(), { botIdRef: b } = ot(), E = D.useCallback(() => A.length > 0 ? A[A.length - 1] : null, [A]), N = D.useCallback(() => A.length > 1 ? A[A.length - 2] : null, [A]), B = D.useCallback((j) => {
    var L, H;
    if ((L = f.event) != null && L.rcbChangePath) {
      const _ = E(), I = N(), k = { botId: b.current, currPath: _, prevPath: I };
      if (event = Bs(Te.CHANGE_PATH, k, { currPath: _, prevPath: I, nextPath: j }), event.defaultPrevented)
        return !1;
    }
    return y(!0), (H = f.chatInput) != null && H.blockSpam && s(!0), w(!1), h((_) => [..._, j]), !0;
  }, [A, h, f]);
  return {
    getCurrPath: E,
    getPrevPath: N,
    goToPath: B,
    blockAllowsAttachment: T,
    setBlockAllowsAttachment: x,
    paths: A,
    replacePaths: (j) => {
      h(j);
    }
  };
}, DA = () => {
  const {
    getCurrPath: f,
    getPrevPath: A,
    goToPath: h,
    paths: y,
    replacePaths: s
  } = ji();
  return {
    getCurrPath: f,
    getPrevPath: A,
    goToPath: h,
    paths: y,
    replacePaths: s
  };
}, Zn = () => {
  const { getCurrPath: f, getPrevPath: A, paths: h } = DA(), { botIdRef: y } = ot();
  return { callRcbEvent: D.useCallback((s, w) => {
    const T = { botId: y.current, currPath: f(), prevPath: A() };
    return Bs(s, T, w);
  }, [h]) };
}, PA = D.createContext({ toasts: [], setToasts: () => null }), TA = () => D.useContext(PA), rc = ({ children: f }) => {
  const [A, h] = D.useState([]);
  return /* @__PURE__ */ m.jsx(PA.Provider, { value: { toasts: A, setToasts: h }, children: f });
}, Ha = () => {
  const { settings: f } = Be(), { toasts: A, setToasts: h } = TA(), { callRcbEvent: y } = Zn(), s = D.useRef(A);
  D.useEffect(() => {
    s.current = A;
  }, [A]);
  const w = D.useCallback((x, b) => {
    var E, N, B, j;
    let L = null;
    if (s.current.length >= (((E = f.toast) == null ? void 0 : E.maxCount) ?? 3)) {
      if ((N = f.toast) != null && N.forbidOnMax)
        return null;
      L = Ts();
      let _ = { id: L, content: x, timeout: b };
      if ((B = f.event) != null && B.rcbShowToast) {
        const I = y(Te.SHOW_TOAST, { toast: _ });
        if (I.defaultPrevented)
          return null;
        _ = I.data.toast;
      }
      return h((I) => [...I.slice(1), _]), L;
    }
    L = Ts();
    let H = { id: L, content: x, timeout: b };
    if ((j = f.event) != null && j.rcbShowToast) {
      const _ = y(Te.SHOW_TOAST, { toast: H });
      if (_.defaultPrevented)
        return null;
      H = _.data.toast;
    }
    return h((_) => [..._, H]), L;
  }, [f, y, h]), T = D.useCallback((x) => {
    var b;
    const E = A.find((N) => N.id === x);
    return !E || (b = f.event) != null && b.rcbDismissToast && y(Te.DISMISS_TOAST, { toast: E }).defaultPrevented ? null : (h((N) => N.filter((B) => B.id !== x)), x);
  }, [y, h]);
  return {
    showToast: w,
    dismissToast: T,
    toasts: A,
    replaceToasts: (x) => {
      h(x);
    }
  };
}, oc = ({
  id: f,
  content: A,
  timeout: h
}) => {
  var y, s;
  const { settings: w } = Be(), { styles: T } = Xe(), { dismissToast: x } = Ha(), [b, E] = D.useState(!1), N = {
    color: (y = w.general) == null ? void 0 : y.primaryColor,
    borderColor: (s = w.general) == null ? void 0 : s.primaryColor,
    ...T.toastPromptHoveredStyle
  };
  return D.useEffect(() => {
    if (h) {
      const B = setTimeout(() => {
        x(f);
      }, h);
      return () => clearTimeout(B);
    }
  }, [f, x, h]), typeof A == "string" ? /* @__PURE__ */ m.jsx(
    "div",
    {
      onMouseEnter: () => {
        E(!0);
      },
      onMouseLeave: () => {
        E(!1);
      },
      style: b ? N : T.toastPromptStyle,
      onMouseDown: (B) => {
        var j;
        (j = w.toast) != null && j.dismissOnClick && (B.preventDefault(), x(f));
      },
      className: "rcb-toast-prompt",
      children: A
    }
  ) : /* @__PURE__ */ m.jsx(m.Fragment, { children: A });
}, Gn = () => {
  const { settings: f } = Be(), {
    isChatWindowOpen: A,
    setIsChatWindowOpen: h,
    viewportHeight: y,
    setViewportHeight: s,
    viewportWidth: w,
    setViewportWidth: T,
    setUnreadCount: x
  } = ft(), { callRcbEvent: b } = Zn(), [E, N] = D.useState(0), B = D.useCallback(() => {
    var L;
    (L = f.event) != null && L.rcbToggleChatWindow && b(
      Te.TOGGLE_CHAT_WINDOW,
      { currState: A, newState: !A }
    ).defaultPrevented || h((H) => (H || x(0), !H));
  }, []), j = D.useCallback((L) => {
    A !== L && B();
  }, [A]);
  return {
    isChatWindowOpen: A,
    setIsChatWindowOpen: h,
    toggleChatWindow: B,
    openChat: j,
    chatScrollHeight: E,
    setChatScrollHeight: N,
    viewportHeight: y,
    setViewportHeight: s,
    viewportWidth: w,
    setViewportWidth: T
  };
}, BA = D.createContext({ messages: [], setMessages: () => null }), Zl = () => D.useContext(BA), ac = ({ children: f }) => {
  const [A, h] = D.useState([]);
  return /* @__PURE__ */ m.jsx(BA.Provider, { value: { messages: A, setMessages: h }, children: f });
}, ic = ({
  setChatScrollHeight: f
}) => {
  var A, h, y, s, w, T, x, b, E, N, B, j;
  const { settings: L } = Be(), { styles: H } = Xe(), { messages: _ } = Zl(), { toasts: I } = TA(), { isChatWindowOpen: k } = Gn(), {
    isBotTyping: V,
    isScrolling: re,
    setIsScrolling: X,
    setUnreadCount: z
  } = ft(), { chatBodyRef: $ } = ot(), Z = {
    ...H == null ? void 0 : H.bodyStyle,
    scrollbarWidth: (A = L.chatWindow) != null && A.showScrollbar ? "auto" : "none"
  }, ie = {
    backgroundColor: (h = L.general) == null ? void 0 : h.primaryColor,
    color: "#fff",
    maxWidth: (y = L.userBubble) != null && y.showAvatar ? "65%" : "70%",
    ...H.userBubbleStyle
  }, oe = (s = L.userBubble) != null && s.animate ? "rcb-user-message-entry" : "", ce = {
    backgroundColor: (w = L.general) == null ? void 0 : w.secondaryColor,
    color: "#fff",
    maxWidth: (T = L.botBubble) != null && T.showAvatar ? "65%" : "70%",
    ...H.botBubbleStyle
  }, se = (x = L.botBubble) != null && x.animate ? "rcb-bot-message-entry" : "", Ae = {
    bottom: 20,
    width: 300,
    minWidth: (((b = H.chatWindowStyle) == null ? void 0 : b.width) ?? 375) / 2,
    maxWidth: (((E = H.chatWindowStyle) == null ? void 0 : E.width) ?? 375) - 50,
    ...H.toastPromptContainerStyle
  };
  D.useEffect(() => {
    $.current && (f($.current.scrollHeight), re || ($.current.scrollTop = $.current.scrollHeight));
  }, [(N = $.current) == null ? void 0 : N.scrollHeight]);
  const ee = () => {
    var q;
    if (!$.current)
      return;
    f($.current.scrollHeight);
    const { scrollTop: le, clientHeight: pe, scrollHeight: xe } = $.current, ae = le + pe < xe - (((q = L.chatWindow) == null ? void 0 : q.messagePromptOffset) ?? 30);
    X(ae), ae || (le + pe >= xe - 1 && ($.current.scrollTop = xe - pe - 1), k && z(0));
  }, he = (q) => q === 0 ? !0 : _[q].sender !== _[q - 1].sender, Re = (q, le) => {
    var pe, xe, ae, me;
    const Fe = he(le), Ce = ((pe = L.userBubble) == null ? void 0 : pe.showAvatar) && Fe;
    let ue = "rcb-user-message";
    return !Fe && (xe = L.userBubble) != null && xe.showAvatar && (ue += " rcb-user-message-offset"), /* @__PURE__ */ m.jsxs("div", { className: "rcb-user-message-container", children: [
      typeof q.content == "string" ? (ae = L == null ? void 0 : L.userBubble) != null && ae.dangerouslySetInnerHtml ? /* @__PURE__ */ m.jsx(
        "div",
        {
          style: { ...ie, display: "inline" },
          className: `${ue} ${oe}`,
          dangerouslySetInnerHTML: { __html: q.content }
        }
      ) : /* @__PURE__ */ m.jsx(
        "div",
        {
          style: ie,
          className: `${ue} ${oe}`,
          children: q.content
        }
      ) : q.content,
      Ce && /* @__PURE__ */ m.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(me = L.userBubble) == null ? void 0 : me.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, Pe = (q, le) => {
    var pe, xe, ae, me;
    const Fe = he(le), Ce = ((pe = L.botBubble) == null ? void 0 : pe.showAvatar) && Fe;
    let ue = "rcb-bot-message";
    return !Fe && (xe = L.botBubble) != null && xe.showAvatar && (ue += " rcb-bot-message-offset"), /* @__PURE__ */ m.jsxs("div", { className: "rcb-bot-message-container", children: [
      Ce && /* @__PURE__ */ m.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(ae = L.botBubble) == null ? void 0 : ae.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      typeof q.content == "string" ? (me = L == null ? void 0 : L.botBubble) != null && me.dangerouslySetInnerHtml ? /* @__PURE__ */ m.jsx(
        "div",
        {
          style: { ...ce, display: "inline" },
          className: `${ue} ${se}`,
          dangerouslySetInnerHTML: { __html: q.content }
        }
      ) : /* @__PURE__ */ m.jsx(
        "div",
        {
          style: ce,
          className: `${ue} ${se}`,
          children: q.content
        }
      ) : q.content
    ] });
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      style: Z,
      className: "rcb-chat-body-container",
      ref: $,
      onScroll: ee,
      children: [
        _.map((q, le) => q.sender === "system" ? /* @__PURE__ */ m.jsx("div", { children: q.content }, le) : /* @__PURE__ */ m.jsx("div", { children: q.sender === "user" ? Re(q, le) : Pe(q, le) }, le)),
        V && /* @__PURE__ */ m.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((B = L.botBubble) == null ? void 0 : B.showAvatar) && /* @__PURE__ */ m.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(j = L.botBubble) == null ? void 0 : j.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              onMouseDown: (q) => {
                q.preventDefault();
              },
              className: `rcb-bot-message ${se}`,
              children: /* @__PURE__ */ m.jsxs("div", { className: "rcb-typing-indicator", style: { ...H == null ? void 0 : H.rcbTypingIndicatorContainerStyle }, children: [
                /* @__PURE__ */ m.jsx("span", { className: "rcb-dot", style: { ...H == null ? void 0 : H.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ m.jsx("span", { className: "rcb-dot", style: { ...H == null ? void 0 : H.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ m.jsx("span", { className: "rcb-dot", style: { ...H == null ? void 0 : H.rcbTypingIndicatorDotStyle } })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ m.jsx(ec, {}),
        /* @__PURE__ */ m.jsx("div", { className: "rcb-toast-prompt-container", style: Ae, children: I.map((q) => /* @__PURE__ */ m.jsx(
          oc,
          {
            id: q.id,
            content: q.content,
            timeout: q.timeout
          },
          q.id
        )) })
      ]
    }
  );
}, sc = ({
  checkboxes: f,
  checkedItems: A,
  path: h
}) => {
  var y, s, w, T, x, b, E, N, B, j, L;
  const { settings: H } = Be(), { styles: _ } = Xe(), { paths: I } = Wl(), { handleSubmitText: k } = Ua(), [V, re] = D.useState(/* @__PURE__ */ new Set()), [X, z] = D.useState(!1), $ = {
    cursor: X ? `url(${(y = H.general) == null ? void 0 : y.actionDisabledIcon}), auto` : "pointer",
    color: (s = H.general) == null ? void 0 : s.primaryColor,
    borderColor: (w = H.general) == null ? void 0 : w.primaryColor,
    ..._.botCheckboxRowStyle
  }, Z = {
    cursor: X || V.size < f.min ? `url(${(T = H.general) == null ? void 0 : T.actionDisabledIcon}), auto` : "pointer",
    color: (x = H.general) == null ? void 0 : x.primaryColor,
    borderColor: (b = H.general) == null ? void 0 : b.primaryColor,
    ..._.botCheckboxNextStyle
  }, ie = {
    cursor: X ? `url(${(E = H.general) == null ? void 0 : E.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ..._.botCheckMarkStyle
  }, oe = {
    cursor: X ? `url(${(N = H.general) == null ? void 0 : N.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (B = H.general) == null ? void 0 : B.primaryColor,
    backgroundColor: (j = H.general) == null ? void 0 : j.primaryColor,
    ..._.botCheckMarkSelectedStyle
  };
  D.useEffect(() => {
    I.length > 0 && I[I.length - 1] !== h && z(!f.reusable);
  }, [I]);
  const ce = (se) => {
    X || re((Ae) => {
      const ee = new Set(Ae);
      if (ee.has(se))
        A.delete(se), ee.delete(se);
      else {
        if (V.size == f.max)
          return Ae;
        A.add(se), ee.add(se);
      }
      return ee;
    });
  };
  return /* @__PURE__ */ m.jsxs("div", { className: `rcb-checkbox-container ${(L = H.botBubble) != null && L.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    f.items.map((se) => /* @__PURE__ */ m.jsx(
      "div",
      {
        onMouseDown: (Ae) => {
          Ae.preventDefault(), ce(se);
        },
        style: $,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ m.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ m.jsx(
            "div",
            {
              style: V.has(se) ? oe : ie,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ m.jsx("div", { className: "rcb-checkbox-label", children: se })
        ] })
      },
      se
    )),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        style: Z,
        className: "rcb-checkbox-next-button",
        onMouseDown: (se) => {
          var Ae;
          if (se.preventDefault(), X || V.size < f.min)
            return;
          const ee = Array.from(A).join(", ");
          z(!f.reusable);
          let he;
          f.sendOutput != null ? he = f.sendOutput : he = ((Ae = H.chatInput) == null ? void 0 : Ae.sendCheckboxOutput) ?? !0, k(ee, he);
        }
      }
    )
  ] });
}, lc = async (f, A, h, y) => {
  const s = A.checkboxes;
  if (!s)
    return;
  let w;
  if (typeof s == "function" ? (w = s(y), w instanceof Promise && (w = await w)) : w = s, Array.isArray(w) && (w = { items: w }), !("items" in w) || w.items.length == 0)
    return;
  w.min == null && (w.min = 1), w.max == null && (w.max = w.items.length), w.min > w.max && (w.min = w.max), w.reusable == null && (w.reusable = !1);
  const T = /* @__PURE__ */ m.jsx(sc, { checkboxes: w, checkedItems: /* @__PURE__ */ new Set(), path: h });
  await y.injectMessage(T);
}, Ac = async (f, A) => {
  const h = f.function;
  if (!h)
    return;
  const y = h(A);
  return y instanceof Promise ? await y : y;
}, uc = async (f, A) => {
  const h = f.message;
  if (!h)
    return;
  if (typeof h == "string") {
    h.trim() !== "" && await A.injectMessage(h);
    return;
  }
  let y = h(A);
  y instanceof Promise && (y = await y), y && y.trim() !== "" && await A.injectMessage(y);
}, cc = ({
  options: f,
  path: A
}) => {
  var h, y, s, w, T, x;
  const { settings: b } = Be(), { styles: E } = Xe(), { paths: N } = Wl(), { handleSubmitText: B } = Ua(), [j, L] = D.useState([]), [H, _] = D.useState(!1), I = {
    cursor: H ? `url(${(h = b.general) == null ? void 0 : h.actionDisabledIcon}), auto` : "pointer",
    color: (y = b.general) == null ? void 0 : y.primaryColor,
    borderColor: (s = b.general) == null ? void 0 : s.primaryColor,
    backgroundColor: "#fff",
    ...E.botOptionStyle
  }, k = {
    color: "#fff",
    borderColor: (w = b.general) == null ? void 0 : w.primaryColor,
    backgroundColor: (T = b.general) == null ? void 0 : T.primaryColor,
    ...E.botOptionHoveredStyle
  };
  D.useEffect(() => {
    N.length > 0 && N[N.length - 1] !== A && _(!f.reusable);
  }, [N]);
  const V = (X) => {
    L((z) => {
      const $ = [...z];
      return $[X] = !0, $;
    });
  }, re = (X) => {
    L((z) => {
      const $ = [...z];
      return $[X] = !1, $;
    });
  };
  return /* @__PURE__ */ m.jsx("div", { className: `rcb-options-container ${(x = b.botBubble) != null && x.showAvatar ? "rcb-options-offset" : ""}`, children: f.items.map((X, z) => {
    const $ = j[z] && !H;
    return /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "rcb-options",
        style: $ ? k : I,
        onMouseEnter: () => V(z),
        onMouseLeave: () => re(z),
        onMouseDown: (Z) => {
          var ie;
          if (Z.preventDefault(), H)
            return;
          _(!f.reusable);
          let oe;
          f.sendOutput != null ? oe = f.sendOutput : oe = ((ie = b.chatInput) == null ? void 0 : ie.sendOptionOutput) ?? !0, B(X, oe);
        },
        children: X
      },
      X
    );
  }) });
}, dc = async (f, A, h, y) => {
  const s = A.options;
  if (!s)
    return;
  let w;
  if (typeof s == "function" ? (w = s(y), w instanceof Promise && (w = await w)) : w = s, Array.isArray(w) && (w = { items: w }), !("items" in w) || w.items.length == 0)
    return;
  w.reusable == null && (w.reusable = !1);
  const T = /* @__PURE__ */ m.jsx(cc, { options: w, path: h });
  await y.injectMessage(T);
}, fc = async (f, A, h) => {
  const y = f.path;
  if (!y)
    return !1;
  if (typeof y == "string")
    return h(y);
  let s = y(A);
  return s instanceof Promise && (s = await s), s ? h(s) : !1;
}, hc = async (f, A) => {
  const h = f.component;
  if (h) {
    if (typeof h == "function") {
      let y = h(A);
      if (y instanceof Promise && (y = await y), !y)
        return;
      await A.injectMessage(y);
      return;
    }
    await A.injectMessage(h);
  }
}, pc = async (f, A, h, y, s) => {
  const w = f[A];
  if (!w)
    throw new Error("block is not valid.");
  const T = w.transition;
  let x;
  if (typeof T == "function" ? (x = T(h), x instanceof Promise && (x = await x)) : x = T, typeof x == "number" && (x = { duration: x }), !x || x instanceof Promise || x.duration == null || typeof x.duration != "number")
    return;
  x.interruptable == null && (x.interruptable = !1);
  const b = setTimeout(async () => {
    await IA(f, A, h, y);
  }, x.duration);
  x.interruptable && s(b);
}, vc = async (f, A, h) => {
  const y = f.chatDisabled;
  if (y == null)
    return;
  let s;
  typeof y == "function" ? (s = y(h), s instanceof Promise && (s = await s)) : s = y, A(s);
}, kA = async (f, A, h) => {
  const y = f.isSensitive;
  if (!y) {
    A(!1);
    return;
  }
  let s;
  typeof y == "function" ? (s = y(h), s instanceof Promise && (s = await s)) : s = y, A(s);
}, gc = async (f, A, h, y, s, w, T) => {
  const x = f[A];
  if (!x)
    throw new Error("Block is not valid.");
  for (const b of Object.keys(x))
    switch (b) {
      case "message":
        await uc(x, h);
        break;
      case "options":
        await dc(f, x, A, h);
        break;
      case "checkboxes":
        await lc(f, x, A, h);
        break;
      case "component":
        await hc(x, h);
        break;
      case "chatDisabled":
        await vc(x, y, h);
        break;
      case "isSensitive":
        await kA(x, s, h);
        break;
      case "transition":
        await pc(f, A, h, w, T);
    }
}, IA = async (f, A, h, y) => {
  const s = f[A];
  if (!s)
    throw new Error("Block is not valid.");
  const w = Object.keys(s);
  for (const T of w)
    T === "function" && await Ac(s, h);
  return w.includes("path") ? await fc(s, h, y) : !1;
}, mc = (f) => {
  const A = [];
  let h = "", y = !1;
  for (let s = 0; s < f.length; s++) {
    const w = f[s];
    w === "<" ? y ? (A.push(h), h = w) : (y = !0, h = w) : w === ">" ? (h += w, A.push(h), h = "", y = !1) : y ? h += w : A.push(w);
  }
  return h !== "" && A.push(h), A;
}, yc = (f) => typeof window.DOMParser < "u" ? new DOMParser().parseFromString(f, "text/html").body.textContent || "" : f.replace(/<\/?[^>]+(>|$)/g, ""), wc = (f, A, h, y, s) => {
  const w = new SpeechSynthesisUtterance();
  w.text = f, w.lang = A, w.rate = y, w.volume = s;
  let T = !1;
  for (const x of h)
    if (window.speechSynthesis.getVoices().find((b) => {
      if (b.name === x) {
        w.voice = b, window.speechSynthesis.speak(w), T = !0;
        return;
      }
    }), T)
      break;
  T || window.speechSynthesis.speak(w);
}, bc = (f, A, h, y, s) => {
  var w, T, x, b, E, N;
  if ((w = f.audio) != null && w.disabled || y.sender === "user" || typeof y.content != "string" || !h && !((T = f.general) != null && T.embedded) || !A || y.content.trim() === "")
    return;
  let B = y.content;
  s && (B = yc(y.content)), wc(
    B,
    (x = f.audio) == null ? void 0 : x.language,
    (b = f.audio) == null ? void 0 : b.voiceNames,
    (E = f.audio) == null ? void 0 : E.rate,
    (N = f.audio) == null ? void 0 : N.volume
  );
}, Sc = () => {
  var f;
  const { settings: A } = Be(), { styles: h } = Xe();
  return /* @__PURE__ */ m.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ m.jsx(
    "div",
    {
      style: h.chatHistoryLineBreakStyle,
      className: "rcb-line-break-text",
      "data-testid": "chat-history-line-break-text",
      children: (f = A.chatHistory) == null ? void 0 : f.chatHistoryLineBreakText
    }
  ) });
}, xc = () => {
  var f;
  const { settings: A } = Be(), { styles: h } = Xe(), y = {
    borderTop: `4px solid ${(f = A.general) == null ? void 0 : f.primaryColor}`,
    ...h.loadingSpinnerStyle
  };
  return /* @__PURE__ */ m.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ m.jsx("div", { style: y, className: "rcb-spinner" }) });
}, Oo = (f, A) => ({
  id: Ts(),
  content: f,
  sender: A,
  type: typeof f == "string" ? "string" : "object",
  timestamp: (/* @__PURE__ */ new Date()).toUTCString()
});
let RA = !1, Nl = "rcb-history", Es = 30, MA = !1, ks = [];
const Cs = async (f) => {
  if (MA)
    return;
  const A = [], h = RA ? ks.length : 0;
  for (let s = f.length - 1; s >= h; s--) {
    const w = f[s];
    if (w.sender === "system" || (w.content !== "" && A.unshift(w), A.length === Es))
      break;
  }
  let y = A.map(Dc);
  if (y.length < Es) {
    const s = Es - y.length;
    y = [...ks.slice(-s), ...y];
  }
  jA(y);
}, Ec = (f) => {
  if (f != null)
    try {
      return JSON.parse(f);
    } catch {
      return [];
    }
  return [];
}, QA = () => ks, jA = (f) => {
  localStorage.setItem(Nl, JSON.stringify(f));
}, Cc = (f) => {
  var A, h, y;
  Nl = (A = f.chatHistory) == null ? void 0 : A.storageKey, Es = (h = f.chatHistory) == null ? void 0 : h.maxEntries, MA = (y = f.chatHistory) == null ? void 0 : y.disabled, ks = Ec(localStorage.getItem(Nl));
}, Dc = (f) => D.isValidElement(f.content) ? structuredClone({
  id: f.id,
  content: Lo.renderToString(f.content),
  type: f.type,
  sender: f.sender,
  timestamp: f.timestamp
}) : f, Pc = (f, A, h, y, s, w, T) => {
  var x;
  if (RA = !0, h != null)
    try {
      y((E) => {
        const N = Oo(/* @__PURE__ */ m.jsx(xc, {}), "system");
        return E.shift(), [N, ...E];
      });
      const b = h.map((E) => {
        if (E.type === "object") {
          const N = OA(E.content, f, A);
          return { ...E, content: N };
        }
        return E;
      });
      setTimeout(() => {
        y((E) => {
          var N;
          E.shift();
          let B;
          return (N = f.chatHistory) != null && N.autoLoad ? B = Oo(/* @__PURE__ */ m.jsx(m.Fragment, {}), "system") : B = Oo(/* @__PURE__ */ m.jsx(Sc, {}), "system"), [...b, B, ...E];
        });
      }, 500), setTimeout(() => {
        if (!s.current)
          return;
        const { scrollHeight: E } = s.current, N = E - w;
        s.current.scrollTop = s.current.scrollTop + N, T(!1);
      }, 510);
    } catch {
      localStorage.removeItem((x = f.chatHistory) == null ? void 0 : x.storageKey);
    }
}, OA = (f, A, h) => {
  const y = new DOMParser().parseFromString(f, "text/html");
  return Array.from(y.body.childNodes).map((s, w) => {
    var T;
    if (s.nodeType === Node.TEXT_NODE)
      return s.textContent;
    {
      const x = s.tagName.toLowerCase();
      let b = Array.from(s.attributes).reduce((N, B) => {
        const j = B.name.toLowerCase();
        if (j === "style") {
          const L = B.value.split(";").filter((_) => _.trim() !== ""), H = {};
          L.forEach((_) => {
            const [I, k] = _.split(":").map((re) => re.trim()), V = I.replace(/-([a-z])/g, (re, X) => X.toUpperCase());
            H[V] = k;
          }), N[j] = H;
        } else
          (x === "audio" || x === "video") && j === "controls" && B.value === "" ? N[j] = "true" : N[j] = B.value;
        return N;
      }, {});
      const E = s.classList;
      if ((T = A.botBubble) != null && T.showAvatar && (b = Tc(E, b)), b = Bc(E, b, A, h), b = kc(E, b, A, h), b = Ic(E, b, A, h), b = Rc(E, b, A, h), [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "source",
        "track",
        "wbr"
      ].includes(x))
        return D.createElement(x, { key: w, ...b });
      {
        const N = OA(s.innerHTML, A, h);
        return D.createElement(x, { key: w, ...b }, ...N);
      }
    }
  });
}, Tc = (f, A) => ((f.contains("rcb-options-container") || f.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(A, "class") ? A.class = `${f.toString()} rcb-options-offset` : A.class = "rcb-options-offset"), A), Bc = (f, A, h, y) => {
  var s, w, T, x, b;
  return f.contains("rcb-options") && (A.style = {
    ...A.style,
    color: ((s = y.botOptionStyle) == null ? void 0 : s.color) ?? ((w = h.general) == null ? void 0 : w.primaryColor),
    borderColor: ((T = y.botOptionStyle) == null ? void 0 : T.color) ?? ((x = h.general) == null ? void 0 : x.primaryColor),
    cursor: `url(${(b = h.general) == null ? void 0 : b.actionDisabledIcon}), auto`,
    ...y.botOptionStyle
  }), A;
}, kc = (f, A, h, y) => {
  var s, w, T, x, b;
  return f.contains("rcb-checkbox-row-container") && (A.style = {
    ...A.style,
    color: ((s = y.botCheckboxRowStyle) == null ? void 0 : s.color) ?? ((w = h.general) == null ? void 0 : w.primaryColor),
    borderColor: ((T = y.botCheckboxRowStyle) == null ? void 0 : T.color) ?? ((x = h.general) == null ? void 0 : x.primaryColor),
    cursor: `url(${(b = h.general) == null ? void 0 : b.actionDisabledIcon}), auto`,
    ...y.botCheckboxRowStyle
  }), A;
}, Ic = (f, A, h, y) => {
  var s, w, T, x, b;
  return f.contains("rcb-checkbox-next-button") && (A.style = {
    ...A.style,
    color: ((s = y.botCheckboxNextStyle) == null ? void 0 : s.color) ?? ((w = h.general) == null ? void 0 : w.primaryColor),
    borderColor: ((T = y.botCheckboxNextStyle) == null ? void 0 : T.color) ?? ((x = h.general) == null ? void 0 : x.primaryColor),
    cursor: `url(${(b = h.general) == null ? void 0 : b.actionDisabledIcon}), auto`,
    ...y.botCheckboxNextStyle
  }), A;
}, Rc = (f, A, h, y) => {
  var s, w;
  return (f.contains("rcb-media-display-image-container") || f.contains("rcb-media-display-video-container")) && (A.style = {
    ...A.style,
    backgroundColor: (s = h.general) == null ? void 0 : s.primaryColor,
    maxWidth: (w = h.userBubble) != null && w.showAvatar ? "65%" : "70%",
    ...y.mediaDisplayContainerStyle
  }), A;
}, FA = (f) => {
  if (!f)
    return !1;
  const A = f.getBoundingClientRect(), h = window.innerHeight ?? document.documentElement.clientHeight, y = window.innerWidth ?? document.documentElement.clientWidth;
  return A.top >= 0 && A.left >= 0 && A.bottom <= h && A.right <= y;
}, Gl = () => {
  const { settings: f } = Be(), {
    notificationsToggledOn: A,
    setNotificationsToggledOn: h,
    hasInteractedPage: y,
    unreadCount: s,
    setUnreadCount: w
  } = ft(), { audioBufferRef: T, audioContextRef: x, gainNodeRef: b } = ot(), { callRcbEvent: E } = Zn(), N = D.useCallback(async () => {
    var L, H;
    const _ = (L = f.notification) == null ? void 0 : L.sound;
    x.current = new AudioContext();
    const I = x.current.createGain();
    I.gain.value = ((H = f.notification) == null ? void 0 : H.volume) ?? 0.2, b.current = I;
    let k;
    if (_ != null && _.startsWith("data:audio")) {
      const V = atob(_.split(",")[1]), re = new ArrayBuffer(V.length), X = new Uint8Array(re);
      for (let z = 0; z < V.length; z++)
        X[z] = V.charCodeAt(z);
      k = re;
    } else
      k = await (await fetch(_)).arrayBuffer();
    T.current = await x.current.decodeAudioData(k);
  }, [f.notification]), B = D.useCallback(() => {
    var L;
    if ((L = f.notification) != null && L.disabled || !A || !y || !x.current || !T.current)
      return;
    const H = x.current.createBufferSource();
    H.buffer = T.current, H.connect(b.current).connect(x.current.destination), H.start();
  }, [
    f.notification,
    A,
    y,
    x,
    T,
    b
  ]), j = D.useCallback(() => {
    var L;
    (L = f.event) != null && L.rcbToggleNotifications && E(
      Te.TOGGLE_NOTIFICATIONS,
      { currState: A, newState: !A }
    ).defaultPrevented || h((H) => !H);
  }, []);
  return {
    unreadCount: s,
    setUnreadCount: w,
    notificationsToggledOn: A,
    toggleNotifications: j,
    playNotificationSound: B,
    setUpNotifications: N
  };
}, Na = () => {
  var f, A, h, y;
  const { settings: s } = Be(), { messages: w, setMessages: T } = Zl(), {
    audioToggledOn: x,
    isChatWindowOpen: b,
    isScrolling: E,
    setIsBotTyping: N,
    setUnreadCount: B
  } = ft(), { streamMessageMap: j, chatBodyRef: L } = ot(), { callRcbEvent: H } = Zn(), { playNotificationSound: _ } = Gl(), I = D.useCallback(async (Z, ie, oe) => {
    N(!1), T((ee) => {
      const he = [...ee, Z];
      return $(he), he;
    }), j.current.set("bot", Z.id);
    let ce = Z.content;
    oe && (ce = mc(ce));
    let se = 0;
    const Ae = ce.length;
    Z.content = "", await new Promise((ee) => {
      const he = setInterval(() => {
        if (se >= Ae) {
          clearInterval(he), ee();
          return;
        }
        T((Re) => {
          const Pe = [...Re];
          for (let q = Pe.length - 1; q >= 0; q--)
            if (Pe[q].sender === Z.sender && typeof Pe[q].content == "string") {
              const le = ce[se];
              le && (Z.content += le, Pe[q] = Z), se++;
              break;
            }
          return Pe;
        });
      }, ie);
    }), j.current.delete("bot"), Cs(w);
  }, [w, j]), k = D.useCallback(async (Z, ie = "bot") => {
    var oe, ce, se, Ae, ee, he, Re, Pe;
    let q = Oo(Z, ie);
    if ((oe = s.event) != null && oe.rcbPreInjectMessage) {
      const ae = H(Te.PRE_INJECT_MESSAGE, { message: q });
      if (ae.defaultPrevented)
        return null;
      q = ae.data.message;
    }
    let le = !1;
    ie === "bot" ? le = (ce = s.botBubble) == null ? void 0 : ce.dangerouslySetInnerHtml : ie === "user" && (le = (se = s.userBubble) == null ? void 0 : se.dangerouslySetInnerHtml), bc(s, x, b, q, le);
    const pe = typeof q.content == "string" && q.sender === "bot" && ((Ae = s == null ? void 0 : s.botBubble) == null ? void 0 : Ae.simStream), xe = typeof q.content == "string" && q.sender === "user" && ((ee = s == null ? void 0 : s.userBubble) == null ? void 0 : ee.simStream);
    if (B((ae) => ae + 1), (he = s.event) != null && he.rcbPostInjectMessage && H(Te.POST_INJECT_MESSAGE, { message: q }), pe) {
      const ae = (Re = s.botBubble) == null ? void 0 : Re.streamSpeed;
      await I(q, ae, le);
    } else if (xe) {
      const ae = (Pe = s.userBubble) == null ? void 0 : Pe.streamSpeed;
      await I(q, ae, le);
    } else
      T((ae) => {
        const me = [...ae, q];
        return $(me), me;
      });
    return q.id;
  }, [s, x, b, H, I]), V = D.useCallback(async (Z) => {
    var ie;
    const oe = w.find((ce) => ce.id === Z);
    return !oe || (ie = s.event) != null && ie.rcbRemoveMessage && H(Te.REMOVE_MESSAGE, { message: oe }).defaultPrevented ? null : (T((ce) => {
      const se = ce.filter((Ae) => Ae.id !== Z);
      return $(se), se;
    }), B((ce) => Math.max(ce - 1, 0)), Z);
  }, [H, w, (f = s.event) == null ? void 0 : f.rcbRemoveMessage]), re = D.useCallback(async (Z, ie = "bot") => {
    var oe, ce;
    if (!j.current.has(ie)) {
      const Ae = Oo(Z, ie);
      return (oe = s.event) != null && oe.rcbStartStreamMessage && H(Te.START_STREAM_MESSAGE, { message: Ae }).defaultPrevented ? null : (N(!1), T((ee) => {
        const he = [...ee, Ae];
        return $(he), [...ee, Ae];
      }), B((ee) => ee + 1), j.current.set(ie, Ae.id), Ae.id);
    }
    const se = { ...Oo(Z, ie), id: j.current.get(ie) };
    return (ce = s.event) != null && ce.rcbChunkStreamMessage && H(
      Te.CHUNK_STREAM_MESSAGE,
      { ...se, id: j.current.get(ie) }
    ).defaultPrevented ? null : (T((Ae) => {
      const ee = [...Ae];
      for (let he = ee.length - 1; he >= 0; he--)
        if (ee[he].sender === ie && typeof ee[he].content == typeof Z) {
          ee[he] = se;
          break;
        }
      return $(ee), ee;
    }), j.current.get(ie) ?? null);
  }, [H, (A = s.event) == null ? void 0 : A.rcbChunkStreamMessage, (h = s.event) == null ? void 0 : h.rcbStartStreamMessage, j]), X = D.useCallback(async (Z = "bot") => {
    var ie;
    if (!j.current.has(Z))
      return !0;
    const oe = j.current.get(Z), ce = w.find((se) => se.id === oe);
    return (ie = s.event) != null && ie.rcbStopStreamMessage && H(Te.STOP_STREAM_MESSAGE, { messageToEndStreamFor: ce }).defaultPrevented ? !1 : (j.current.delete(Z), Cs(w), !0);
  }, [H, w, (y = s.event) == null ? void 0 : y.rcbStopStreamMessage, j]), z = (Z) => {
    $(Z), T(Z);
  }, $ = (Z) => {
    var ie, oe;
    Cs(Z);
    let ce = !0;
    (Z.length === 0 || b && !E) && (ce = !1), (ie = s.general) != null && ie.embedded && FA(L.current) && (ce = !1);
    const se = Z[Z.length - 1];
    (!se || se.sender === "user") && (ce = !1), ce && _(), ((oe = s.chatWindow) != null && oe.autoJumpToBottom || !E) && setTimeout(() => {
      L.current && (L.current.scrollTop = L.current.scrollHeight);
    }, 1);
  };
  return {
    endStreamMessage: X,
    injectMessage: k,
    removeMessage: V,
    streamMessage: re,
    messages: w,
    replaceMessages: z
  };
};
let Il, zn, Ds, Kr = !1, Wn = null;
const _l = () => {
  if (!Il) {
    const f = window.SpeechRecognition || window.webkitSpeechRecognition;
    Il = f != null ? new f() : null;
  }
  return Il;
}, Mc = (f, A, h, y, s, w, T) => {
  var x;
  (x = f.voice) != null && x.sendAsAudio ? jc(h, w) : Qc(
    f,
    A,
    h,
    y,
    s,
    T
  );
}, Qc = (f, A, h, y, s, w) => {
  var T, x, b;
  const E = _l();
  if (!E)
    return;
  if (!Kr)
    try {
      Kr = !0, E.lang = (T = f.voice) == null ? void 0 : T.language, E.start();
    } catch {
    }
  const N = (x = f.voice) == null ? void 0 : x.timeoutPeriod, B = (b = f.voice) == null ? void 0 : b.autoSendPeriod;
  E.onresult = (j) => {
    var L, H;
    clearTimeout(zn), zn = null, clearTimeout(Ds);
    const _ = j.results[j.results.length - 1][0].transcript;
    if (w.current) {
      const I = (L = f.chatInput) == null ? void 0 : L.characterLimit, k = w.current.value + _;
      I != null && I >= 0 && k.length > I ? y(k.slice(0, I)) : y(k), s(w.current.value.length);
    }
    zn = setTimeout(() => Rl(A, w), N), (H = f.voice) != null && H.autoSendDisabled || (Ds = setTimeout(h, B));
  }, E.onend = () => {
    Kr ? (E.start(), zn || (zn = setTimeout(() => Rl(A, w), N))) : (clearTimeout(zn), zn = null, clearTimeout(Ds));
  }, zn = setTimeout(() => Rl(A, w), N);
}, jc = (f, A) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((h) => {
    if (Wn = new MediaRecorder(h), !Kr)
      try {
        Kr = !0, Wn.start();
      } catch {
      }
    Wn.ondataavailable = (y) => {
      A.current && A.current.push(y.data);
    }, Wn.onstop = () => {
      f(), h.getTracks().forEach((y) => y.stop());
    };
  }).catch((h) => {
    console.error("Unable to use microphone:", h);
  });
}, Yl = () => {
  const f = _l();
  f && (Kr = !1, f && f.stop(), Wn && Wn.state !== "inactive" && (Wn.stop(), Wn = null), clearTimeout(zn), zn = null, clearTimeout(Ds));
}, Oc = (f, A) => {
  var h, y, s;
  const w = _l();
  (h = A.voice) != null && h.disabled || !((y = A.chatInput) != null && y.blockSpam) || !w || (f && !Kr ? (Kr = !0, (s = A.voice) != null && s.sendAsAudio ? Wn == null || Wn.start() : w.start()) : f || Yl());
}, Rl = (f, A) => {
  var h;
  (h = A.current) != null && h.disabled || f(), Yl();
}, Rs = () => {
  const { settings: f } = Be(), { voiceToggledOn: A, setVoiceToggledOn: h } = ft(), { callRcbEvent: y } = Zn(), s = D.useCallback(() => {
    var T;
    (T = f.event) != null && T.rcbToggleVoice && y(Te.TOGGLE_VOICE, { currState: A, newState: !A }).defaultPrevented || h((x) => !x);
  }, []), w = D.useCallback((T) => {
    Oc(T, f);
  }, [f]);
  return {
    voiceToggledOn: A,
    toggleVoice: s,
    syncVoice: w
  };
}, Ho = () => {
  const { settings: f } = Be(), {
    inputLength: A,
    setInputLength: h,
    textAreaDisabled: y,
    setTextAreaDisabled: s,
    textAreaSensitiveMode: w,
    setTextAreaSensitiveMode: T
  } = ft(), { inputRef: x, chatBodyRef: b, prevInputRef: E } = ot(), { callRcbEvent: N } = Zn(), B = (_) => {
    var I, k, V;
    if (y && x.current) {
      x.current.value = "";
      return;
    }
    if (x.current && E.current !== null) {
      const re = (I = f.chatInput) == null ? void 0 : I.characterLimit, X = (k = f.chatInput) != null && k.allowNewline ? _ : _.replace(/\n/g, " ");
      if (re != null && re >= 0 && X.length > re ? x.current.value = X.slice(0, re) : x.current.value = X, (V = f.event) != null && V.rcbTextAreaChangeValue && N(
        Te.TEXT_AREA_CHANGE_VALUE,
        { currValue: x.current.value, prevValue: E.current }
      ).defaultPrevented) {
        x.current.value = E.current;
        return;
      }
      E.current = x.current.value;
    }
  }, j = D.useCallback((_) => {
    var I;
    (I = x.current) != null && I.disabled || setTimeout(() => {
      var k, V, re;
      (k = f.general) != null && k.embedded ? FA(b == null ? void 0 : b.current) && ((V = x.current) == null || V.focus()) : _ !== "start" && ((re = x.current) == null || re.focus());
    }, 100);
  }, []), L = D.useCallback(() => {
    !y && x.current && x.current.focus();
  }, [y]), H = D.useCallback(() => x && x.current ? x.current.value : "", []);
  return {
    textAreaDisabled: y,
    setTextAreaDisabled: s,
    textAreaSensitiveMode: w,
    setTextAreaSensitiveMode: T,
    inputLength: A,
    setInputLength: h,
    getTextAreaValue: H,
    setTextAreaValue: B,
    updateTextAreaFocus: j,
    focusTextArea: L,
    toggleTextAreaDisabled: () => {
      s((_) => !_);
    },
    toggleTextAreaSensitiveMode: () => {
      T((_) => !_);
    }
  };
}, Ua = () => {
  var f, A, h, y;
  const { settings: s } = Be(), { endStreamMessage: w, injectMessage: T, removeMessage: x, streamMessage: b } = Na(), { getCurrPath: E, getPrevPath: N, goToPath: B } = ji(), {
    timeoutId: j,
    voiceToggledOn: L,
    setTextAreaSensitiveMode: H,
    textAreaSensitiveMode: _,
    setTextAreaDisabled: I,
    setIsBotTyping: k,
    setBlockAllowsAttachment: V,
    setInputLength: re
  } = ft(), { flowRef: X, chatBodyRef: z, inputRef: $, keepVoiceOnRef: Z, paramsInputRef: ie } = ot(), { showToast: oe, dismissToast: ce } = Ha(), { callRcbEvent: se } = Zn(), { syncVoice: Ae } = Rs(), { setTextAreaValue: ee } = Ho(), { openChat: he } = Gn(), Re = D.useCallback(async (q) => {
    var le, pe, xe;
    const ae = E();
    if (!(!ae || !X.current[ae])) {
      if (_) {
        if ((le = s == null ? void 0 : s.sensitiveInput) != null && le.hideInUserBubble)
          return;
        if ((pe = s == null ? void 0 : s.sensitiveInput) != null && pe.maskInUserBubble) {
          await T("*".repeat(((xe = s.sensitiveInput) == null ? void 0 : xe.asterisksCount) ?? 10), "user");
          return;
        }
      }
      await T(q, "user");
    }
  }, [X, E, s, T, _]), Pe = D.useCallback(async (q, le, pe = !0) => {
    var xe, ae;
    le = le.trim(), le !== "" && (pe && await Re(le), j && clearTimeout(j), ie.current = le, z.current && (z.current.scrollTop = z.current.scrollHeight), $.current && (ee(""), re(0)), (xe = s.chatInput) != null && xe.blockSpam && I(!0), Z.current = L, Ae(!1), setTimeout(() => {
      k(!0);
    }, 400), H(!1), setTimeout(async () => {
      var me;
      const Fe = {
        prevPath: N(),
        currPath: E(),
        goToPath: B,
        setTextAreaValue: ee,
        userInput: le,
        injectMessage: T,
        streamMessage: b,
        removeMessage: x,
        endStreamMessage: w,
        openChat: he,
        showToast: oe,
        dismissToast: ce
      };
      if (!await IA(X.current, q, Fe, B)) {
        const Ce = E();
        if (!Ce)
          return;
        const ue = X.current[Ce];
        if (!ue)
          return;
        ue.chatDisabled || I((me = s.chatInput) == null ? void 0 : me.disabled), kA(ue, H, Fe), V(typeof ue.file == "function"), Ae(Z.current), k(!1);
      }
    }, (ae = s.chatInput) == null ? void 0 : ae.botDelay));
  }, [
    j,
    (f = s.chatInput) == null ? void 0 : f.blockSpam,
    (A = s.chatInput) == null ? void 0 : A.botDelay,
    (h = s.chatInput) == null ? void 0 : h.disabled,
    Z,
    L,
    Ae,
    Re,
    N,
    E,
    B,
    T,
    b,
    x,
    w,
    he,
    oe,
    ce,
    X
  ]);
  return { handleSubmitText: D.useCallback(async (q, le = !0) => {
    var pe, xe;
    if (q = q ?? ((pe = $.current) == null ? void 0 : pe.value), (xe = s.event) != null && xe.rcbUserSubmitText && se(Te.USER_SUBMIT_TEXT, { inputText: q, sendInChat: le }).defaultPrevented)
      return;
    const ae = E();
    ae && Pe(ae, q, le);
  }, [se, E, Pe, $, (y = s.event) == null ? void 0 : y.rcbUserSubmitText]) };
}, Ms = () => {
  var f;
  const { settings: A } = Be();
  return D.useMemo(() => {
    var h;
    if (typeof window > "u" || !window.navigator)
      return !1;
    if (!((h = A.device) != null && h.applyMobileOptimizations))
      return !0;
    const y = navigator.userAgent, s = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(y), w = window.innerWidth >= 768;
    return s && w;
  }, [(f = A.device) == null ? void 0 : f.applyMobileOptimizations]);
}, Fc = ({ buttons: f }) => {
  var A, h, y, s, w, T, x, b, E, N, B;
  const j = Ms(), { settings: L } = Be(), { styles: H } = Xe(), {
    textAreaDisabled: _,
    textAreaSensitiveMode: I,
    inputLength: k,
    hasFlowStarted: V,
    setHasFlowStarted: re,
    setInputLength: X
  } = ft(), { inputRef: z } = ot(), [$, Z] = D.useState(!1), [ie, oe] = D.useState(!1), { handleSubmitText: ce } = Ua(), { setTextAreaValue: se } = Ho(), Ae = {
    boxSizing: j ? "content-box" : "border-box",
    ...H.chatInputAreaStyle
  }, ee = {
    outline: _ ? "" : "none",
    boxShadow: _ ? "" : `0 0 5px ${(A = L.general) == null ? void 0 : A.primaryColor}`,
    boxSizing: j ? "content-box" : "border-box",
    ...H.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...H.chatInputAreaFocusedStyle
  }, he = {
    cursor: `url(${(h = L.general) == null ? void 0 : h.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: j ? "content-box" : "border-box",
    ...H.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...H.chatInputAreaDisabledStyle
  }, Re = {
    color: "#989898",
    ...H.characterLimitStyle
  }, Pe = {
    color: "#ff0000",
    ...H.characterLimitReachedStyle
  }, q = _ ? (y = L.chatInput) == null ? void 0 : y.disabledPlaceholderText : (s = L.chatInput) == null ? void 0 : s.enabledPlaceholderText, le = () => {
    _ || Z(!0);
  }, pe = () => {
    Z(!1);
  }, xe = () => {
    oe(!0);
  }, ae = () => {
    oe(!1);
  }, me = async (Ce) => {
    var ue;
    if (!ie && Ce.key === "Enter") {
      if (Ce.shiftKey) {
        (ue = L.chatInput) != null && ue.allowNewline || Ce.preventDefault();
        return;
      }
      Ce.preventDefault(), await ce();
    }
  }, Fe = (Ce) => {
    z.current && (se(Ce.target.value), X(z.current.value.length));
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      "aria-label": ((w = L.ariaLabel) == null ? void 0 : w.inputTextArea) ?? "input text area",
      role: "textbox",
      onMouseDown: (Ce) => {
        var ue;
        Ce.stopPropagation(), !V && ((ue = L.general) == null ? void 0 : ue.flowStartTrigger) === "ON_CHATBOT_INTERACT" && re(!0);
      },
      style: H.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        I && (T = L.sensitiveInput) != null && T.maskInTextArea ? /* @__PURE__ */ m.jsx(
          "input",
          {
            ref: z,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: _ ? he : $ ? ee : Ae,
            placeholder: q,
            onChange: Fe,
            onKeyDown: me,
            onFocus: le,
            onBlur: pe,
            onCompositionStart: xe,
            onCompositionEnd: ae
          }
        ) : /* @__PURE__ */ m.jsx(
          "textarea",
          {
            ref: z,
            style: _ ? he : $ ? ee : Ae,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: q,
            onChange: Fe,
            onKeyDown: me,
            onFocus: le,
            onBlur: pe,
            onCompositionStart: xe,
            onCompositionEnd: ae
          }
        ),
        /* @__PURE__ */ m.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          f == null ? void 0 : f.map(
            (Ce, ue) => /* @__PURE__ */ m.jsx(D.Fragment, { children: Ce }, ue)
          ),
          ((x = L.chatInput) == null ? void 0 : x.showCharacterCount) && ((b = L.chatInput) == null ? void 0 : b.characterLimit) != null && ((E = L.chatInput) == null ? void 0 : E.characterLimit) > 0 && /* @__PURE__ */ m.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: k >= ((N = L.chatInput) == null ? void 0 : N.characterLimit) ? Pe : Re,
              children: [
                k,
                "/",
                (B = L.chatInput) == null ? void 0 : B.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
}, Lc = ({ buttons: f }) => {
  var A;
  const { settings: h } = Be(), { styles: y } = Xe();
  return /* @__PURE__ */ m.jsxs("div", { "data-testid": "chatbot-footer-container", style: y.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ m.jsx("div", { className: "rcb-chat-footer", children: f == null ? void 0 : f.map(
      (s, w) => /* @__PURE__ */ m.jsx(D.Fragment, { children: s }, w)
    ) }),
    /* @__PURE__ */ m.jsx("span", { children: (A = h.footer) == null ? void 0 : A.text })
  ] });
}, Hc = () => {
  var f, A, h, y, s, w, T;
  const { settings: x } = Be(), { styles: b } = Xe(), { unreadCount: E } = ft(), { isChatWindowOpen: N, toggleChatWindow: B } = Gn(), j = {
    backgroundImage: `linear-gradient(to right, ${(f = x.general) == null ? void 0 : f.secondaryColor},
			${(A = x.general) == null ? void 0 : A.primaryColor})`,
    ...b.chatButtonStyle
  }, L = {
    backgroundImage: `url(${(h = x.chatButton) == null ? void 0 : h.icon})`,
    fill: "#fff",
    width: 75,
    height: 75,
    ...b.chatIconStyle
  }, H = () => {
    var _;
    const I = (_ = x.chatButton) == null ? void 0 : _.icon;
    return !I || typeof I == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-toggle-icon",
        style: L
      }
    ) : I && /* @__PURE__ */ m.jsx("span", { className: "rcb-toggle-icon", children: /* @__PURE__ */ m.jsx(I, { style: L }) });
  };
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: !((y = x.general) != null && y.embedded) && /* @__PURE__ */ m.jsxs(
    "div",
    {
      "aria-label": ((s = x.ariaLabel) == null ? void 0 : s.chatButton) ?? "open chat",
      role: "button",
      style: j,
      className: `rcb-toggle-button ${N ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: B,
      children: [
        H(),
        !((w = x.notification) != null && w.disabled) && ((T = x.notification) == null ? void 0 : T.showCount) && /* @__PURE__ */ m.jsx("span", { style: b.notificationBadgeStyle, className: "rcb-badge", children: E })
      ]
    }
  ) });
}, Nc = () => {
  var f, A, h, y;
  const s = Ms(), { settings: w } = Be(), { styles: T } = Xe(), { isChatWindowOpen: x, openChat: b } = Gn(), [E, N] = D.useState(!1), [B, j] = D.useState(!1), [L, H] = D.useState(0);
  D.useEffect(() => {
    var k, V, re;
    const X = (k = w.tooltip) == null ? void 0 : k.mode;
    if (X === "ALWAYS")
      if (s) {
        let z;
        x ? z = (((V = T.chatWindowStyle) == null ? void 0 : V.width) ?? 375) - (((re = T.chatButtonStyle) == null ? void 0 : re.width) ?? 75) : z = 0, H(z), N(!0);
      } else
        N(!x);
    else
      X === "NEVER" ? N(!1) : X === "START" ? B ? N(!1) : (j(!0), N(!0)) : X === "CLOSE" && N(!x);
  }, [x]);
  const _ = {
    transform: `translateX(-${L}px)`,
    right: (((f = T.chatButtonStyle) == null ? void 0 : f.width) ?? 75) + 40,
    bottom: 30,
    backgroundColor: (A = w.general) == null ? void 0 : A.secondaryColor,
    color: "#fff",
    ...T.tooltipStyle
  }, I = {
    borderColor: `transparent transparent transparent ${_.backgroundColor}`
  };
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: !((h = w.general) != null && h.embedded) && /* @__PURE__ */ m.jsxs(
    "div",
    {
      "data-testid": "chat-tooltip",
      style: _,
      className: `rcb-chat-tooltip ${E ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => b(!0),
      children: [
        /* @__PURE__ */ m.jsx("span", { children: (y = w.tooltip) == null ? void 0 : y.text }),
        /* @__PURE__ */ m.jsx("span", { className: "rcb-chat-tooltip-tail", style: I })
      ]
    }
  ) });
}, LA = ({
  file: f,
  fileType: A,
  fileUrl: h
}) => {
  var y, s, w;
  const { settings: T } = Be(), { styles: x } = Xe(), b = {
    backgroundColor: (y = T.general) == null ? void 0 : y.primaryColor,
    maxWidth: (s = T.userBubble) != null && s.showAvatar ? "65%" : "70%",
    ...x.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: h ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    A === "image" && h && /* @__PURE__ */ m.jsx(
      "div",
      {
        style: b,
        className: "rcb-media-display-image-container rcb-media-entry",
        "data-testid": "media-display-image-container",
        children: /* @__PURE__ */ m.jsx("img", { src: h, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    A === "video" && h && /* @__PURE__ */ m.jsx(
      "div",
      {
        style: b,
        className: "rcb-media-display-video-container rcb-media-entry",
        "data-testid": "media-display-video-container",
        children: /* @__PURE__ */ m.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ m.jsx("source", { src: h, type: f.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    A === "audio" && h && /* @__PURE__ */ m.jsxs(
      "audio",
      {
        "data-testid": "media-display-audio-container",
        style: {
          maxWidth: (w = T.userBubble) != null && w.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ m.jsx("source", { src: h, type: f.type }),
          "Your browser does not support the audio tag."
        ]
      }
    )
  ] }) : /* @__PURE__ */ m.jsx(m.Fragment, {}) });
}, HA = async (f) => {
  if (!f)
    return { fileType: null, fileUrl: null };
  const A = f.type.split("/")[0];
  if (!["image", "video", "audio"].includes(A))
    return { fileType: null, fileUrl: null };
  try {
    const h = await new Promise((y, s) => {
      const w = new FileReader();
      w.onload = () => y(w.result), w.onerror = () => s(new Error("File reading failed")), w.readAsDataURL(f);
    });
    return { fileType: A, fileUrl: h };
  } catch {
    return { fileType: null, fileUrl: null };
  }
}, Uc = () => {
  var f, A, h, y, s, w;
  const { settings: T } = Be(), { styles: x } = Xe(), { injectMessage: b, streamMessage: E, removeMessage: N, endStreamMessage: B } = Na(), { getCurrPath: j, getPrevPath: L, goToPath: H, blockAllowsAttachment: _ } = ji(), { flowRef: I, inputRef: k } = ot(), V = I.current, { showToast: re, dismissToast: X } = Ha(), { callRcbEvent: z } = Zn(), { openChat: $ } = Gn(), { setTextAreaValue: Z } = Ho(), { handleSubmitText: ie } = Ua(), oe = {
    cursor: `url(${(f = T.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...x.fileAttachmentButtonStyle,
    // by default inherit the base style
    ...x.fileAttachmentButtonDisabledStyle
  }, ce = {
    backgroundImage: `url(${(A = T.fileAttachment) == null ? void 0 : A.icon})`,
    fill: "#a6a6a6",
    ...x.fileAttachmentIconStyle
  }, se = {
    backgroundImage: `url(${(h = T.fileAttachment) == null ? void 0 : h.icon})`,
    fill: "#a6a6a6",
    ...x.fileAttachmentIconStyle,
    // by default inherit the base style
    ...x.fileAttachmentIconDisabledStyle
  }, Ae = async (he) => {
    var Re, Pe, q, le;
    const pe = he.target.files;
    if (!pe || (Re = T.event) != null && Re.rcbUserUploadFile && z(Te.USER_UPLOAD_FILE, { files: pe }).defaultPrevented)
      return;
    const xe = j();
    if (!xe)
      return;
    const ae = V[xe];
    if (!ae)
      return;
    const me = ae.file;
    if (me != null) {
      const Fe = [];
      for (let Ce = 0; Ce < pe.length; Ce++) {
        if (Fe.push(pe[Ce].name), !((Pe = T.fileAttachment) != null && Pe.showMediaDisplay))
          continue;
        const ue = await HA(pe[Ce]);
        !ue.fileType || !ue.fileUrl || await b(/* @__PURE__ */ m.jsx(
          LA,
          {
            file: pe[Ce],
            fileType: ue.fileType,
            fileUrl: ue.fileUrl
          }
        ), "user");
      }
      await ie("📄 " + Fe.join(", "), (q = T.fileAttachment) == null ? void 0 : q.sendFileName), await me({
        userInput: (le = k.current) == null ? void 0 : le.value,
        prevPath: L(),
        currPath: j(),
        goToPath: H,
        setTextAreaValue: Z,
        injectMessage: b,
        streamMessage: E,
        removeMessage: N,
        endStreamMessage: B,
        openChat: $,
        showToast: re,
        dismissToast: X,
        files: pe
      });
    }
  }, ee = () => {
    var he, Re;
    const Pe = _ ? (he = T.fileAttachment) == null ? void 0 : he.icon : (Re = T.fileAttachment) == null ? void 0 : Re.iconDisabled;
    return !Pe || typeof Pe == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled",
        style: _ ? ce : se
      }
    ) : Pe && /* @__PURE__ */ m.jsx("span", { className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled", children: /* @__PURE__ */ m.jsx(
      Pe,
      {
        style: _ ? ce : se
      }
    ) });
  };
  return /* @__PURE__ */ m.jsxs(
    "label",
    {
      "aria-label": ((y = T.ariaLabel) == null ? void 0 : y.fileAttachmentButton) ?? "upload file",
      role: "button",
      className: _ ? "rcb-attach-button-enabled" : "rcb-attach-button-disabled",
      style: _ ? x.fileAttachmentButtonStyle : oe,
      children: [
        /* @__PURE__ */ m.jsx(
          "input",
          {
            className: "rcb-attach-input",
            type: "file",
            onChange: Ae,
            multiple: (s = T.fileAttachment) == null ? void 0 : s.multiple,
            accept: (w = T.fileAttachment) == null ? void 0 : w.accept,
            disabled: !_
          }
        ),
        ee()
      ]
    }
  );
}, zc = () => {
  var f, A, h, y, s, w;
  const { settings: T } = Be(), { styles: x } = Xe(), { inputRef: b } = ot(), { textAreaDisabled: E, setTextAreaValue: N } = Ho(), B = D.useRef(null), j = D.useRef(null), [L, H] = D.useState(!1), _ = {
    cursor: `url(${(f = T.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...x.emojiButtonStyle,
    // by default inherit the base style
    ...x.emojiButtonDisabledStyle
  }, I = {
    backgroundImage: `url(${(A = T.emoji) == null ? void 0 : A.icon})`,
    fill: "#a6a6a6",
    ...x.emojiIconStyle
  }, k = {
    backgroundImage: `url(${(h = T.emoji) == null ? void 0 : h.icon})`,
    fill: "#a6a6a6",
    ...x.emojiIconStyle,
    // by default inherit the base style
    ...x.emojiIconDisabledStyle
  };
  D.useEffect(() => {
    const z = (ie) => {
      const oe = ie.composedPath();
      B.current && !oe.includes(B.current) && j.current && !oe.includes(j.current) && H(!1);
    }, $ = () => {
      if (B.current && j.current) {
        const ie = j.current.getBoundingClientRect(), oe = B.current.offsetHeight, ce = ie.top - oe - 8;
        B.current.style.left = `${ie.left}px`, B.current.style.top = `${ce}px`;
      }
    }, Z = () => {
      $();
    };
    return document.addEventListener("mousedown", z), window.addEventListener("resize", Z), () => {
      document.removeEventListener("mousedown", z), window.removeEventListener("resize", Z);
    };
  }, []);
  const V = (z, $) => {
    z.preventDefault(), b.current && (N(b.current.value + $), setTimeout(() => {
      const Z = b.current;
      if (Z) {
        Z.focus();
        const ie = Z.value.length;
        Z.setSelectionRange(ie, ie);
      }
    }, 50)), H(!1);
  }, re = (z) => {
    z.preventDefault(), H(E ? !1 : !L);
  }, X = () => {
    var z, $;
    const Z = E ? (z = T.emoji) == null ? void 0 : z.iconDisabled : ($ = T.emoji) == null ? void 0 : $.icon;
    return !Z || typeof Z == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: `${E ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`,
        style: E ? k : I
      }
    ) : Z && /* @__PURE__ */ m.jsx("span", { className: `${E ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`, children: /* @__PURE__ */ m.jsx(Z, { style: E ? k : I }) });
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      "div",
      {
        "aria-label": ((y = T.ariaLabel) == null ? void 0 : y.emojiButton) ?? "emoji picker",
        role: "button",
        ref: j,
        className: `${E ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        style: E ? _ : x.emojiButtonStyle,
        onMouseDown: re,
        children: X()
      }
    ),
    L && /* @__PURE__ */ m.jsx("div", { className: "rcb-emoji-button-popup", ref: B, children: (w = (s = T.emoji) == null ? void 0 : s.list) == null ? void 0 : w.map((z, $) => /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (Z) => V(Z, z),
        children: z
      },
      $
    )) })
  ] });
}, NA = () => {
  const { settings: f } = Be(), { audioToggledOn: A, setAudioToggledOn: h } = ft(), { callRcbEvent: y } = Zn(), s = D.useCallback(() => {
    var w;
    (w = f.event) != null && w.rcbToggleAudio && y(Te.TOGGLE_AUDIO, { currState: A, newState: !A }).defaultPrevented || h((T) => !T);
  }, []);
  return {
    audioToggledOn: A,
    toggleAudio: s
  };
}, Wc = () => {
  var f, A, h;
  const { settings: y } = Be(), { styles: s } = Xe(), { audioToggledOn: w, toggleAudio: T } = NA(), x = {
    backgroundImage: `url(${(f = y.audio) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...s.audioIconStyle
  }, b = {
    backgroundImage: `url(${(A = y.audio) == null ? void 0 : A.iconDisabled})`,
    fill: "#e8eaed",
    ...s.audioIconStyle,
    // by default inherit the base style
    ...s.audioIconDisabledStyle
  }, E = () => {
    var N, B;
    const j = w ? (N = y.audio) == null ? void 0 : N.icon : (B = y.audio) == null ? void 0 : B.iconDisabled;
    return !j || typeof j == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-audio-icon",
        "data-testid": "rcb-audio-icon",
        style: w ? x : b
      }
    ) : j && /* @__PURE__ */ m.jsx("span", { className: "rcb-audio-icon", "data-testid": "rcb-audio-icon", children: /* @__PURE__ */ m.jsx(
      j,
      {
        style: w ? x : b,
        "data-testid": "rcb-audio-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "aria-label": ((h = y.ariaLabel) == null ? void 0 : h.audioButton) ?? "toggle audio",
      role: "button",
      onMouseDown: (N) => {
        N.preventDefault(), T();
      },
      style: w ? s.audioButtonStyle : { ...s.audioButtonStyle, ...s.audioButtonDisabledStyle },
      children: E()
    }
  );
}, Zc = () => {
  var f, A;
  const { settings: h } = Be(), { styles: y } = Xe(), { openChat: s } = Gn(), w = {
    backgroundImage: `url(${(f = h.header) == null ? void 0 : f.closeChatIcon})`,
    fill: "#e8eaed",
    stroke: "#e8eaed",
    ...y.closeChatIconStyle
  }, T = () => {
    var x;
    const b = (x = h.header) == null ? void 0 : x.closeChatIcon;
    return !b || typeof b == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-close-chat-icon",
        "data-testid": "rcb-close-chat-icon",
        style: w
      }
    ) : b && /* @__PURE__ */ m.jsx("span", { className: "rcb-close-chat-icon", "data-testid": "rcb-close-chat-icon", children: /* @__PURE__ */ m.jsx(b, { style: w }) });
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "aria-label": ((A = h.ariaLabel) == null ? void 0 : A.closeChatButton) ?? "close chat",
      role: "button",
      onMouseDown: (x) => {
        x.stopPropagation(), s(!1);
      },
      style: y.closeChatButtonStyle,
      children: T()
    }
  );
}, UA = () => {
  const { notificationsToggledOn: f, toggleNotifications: A, playNotificationSound: h } = Gl();
  return {
    notificationsToggledOn: f,
    toggleNotifications: A,
    playNotificationSound: h
  };
}, Gc = () => {
  var f, A, h;
  const { settings: y } = Be(), { styles: s } = Xe(), { notificationsToggledOn: w, toggleNotifications: T } = UA(), x = {
    backgroundImage: `url(${(f = y.notification) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...s.notificationIconStyle
  }, b = {
    backgroundImage: `url(${(A = y.notification) == null ? void 0 : A.iconDisabled})`,
    fill: "#e8eaed",
    ...s.notificationIconStyle,
    // by default inherit the base style
    ...s.notificationIconDisabledStyle
  }, E = () => {
    var N, B;
    const j = w ? (N = y.notification) == null ? void 0 : N.icon : (B = y.notification) == null ? void 0 : B.iconDisabled;
    return !j || typeof j == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-notification-icon",
        "data-testid": "rcb-notification-icon",
        style: w ? x : b
      }
    ) : j && /* @__PURE__ */ m.jsx("span", { className: "rcb-notification-icon", "data-testid": "rcb-notification-icon", children: /* @__PURE__ */ m.jsx(
      j,
      {
        style: w ? x : b,
        "data-testid": "rcb-notification-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "aria-label": ((h = y.ariaLabel) == null ? void 0 : h.notificationButton) ?? "toggle notifications",
      role: "button",
      onMouseDown: (N) => {
        N.preventDefault(), T();
      },
      style: w ? s.notificationButtonStyle : { ...s.notificationButtonStyle, ...s.notificationButtonDisabledStyle },
      children: E()
    }
  );
}, _c = () => {
  var f, A, h;
  const { settings: y } = Be(), { styles: s } = Xe(), { injectMessage: w } = Na(), { inputRef: T } = ot(), { voiceToggledOn: x, toggleVoice: b } = Rs(), { setInputLength: E, setTextAreaValue: N, textAreaDisabled: B } = Ho(), { handleSubmitText: j } = Ua(), L = D.useRef([]), [H, _] = D.useState(!1);
  D.useEffect(() => {
    var z;
    (z = y.voice) != null && z.sendAsAudio ? (re(), L.current = []) : j();
  }, [H]), D.useEffect(() => {
    x ? Mc(
      y,
      b,
      V,
      N,
      E,
      L,
      T
    ) : Yl();
  }, [x]);
  const I = {
    backgroundImage: `url(${(f = y.voice) == null ? void 0 : f.icon})`,
    fill: "#9aa0a6",
    ...s.voiceIconStyle
  }, k = {
    backgroundImage: `url(${(A = y.voice) == null ? void 0 : A.iconDisabled})`,
    fill: "#9aa0a6",
    ...s.voiceIconStyle,
    // by default inherit the base style
    ...s.voiceIconDisabledStyle
  }, V = () => {
    _((z) => !z);
  }, re = async () => {
    const z = new Blob(L.current, { type: "audio/wav" }), $ = new File([z], "voice-input.wav", { type: "audio/wav" }), Z = await HA($);
    !Z.fileType || !Z.fileUrl || await w(/* @__PURE__ */ m.jsx(
      LA,
      {
        file: $,
        fileType: Z.fileType,
        fileUrl: Z.fileUrl
      }
    ), "user");
  }, X = () => {
    var z, $;
    const Z = x ? (z = y.voice) == null ? void 0 : z.icon : ($ = y.voice) == null ? void 0 : $.iconDisabled;
    return !Z || typeof Z == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: `rcb-voice-icon${x && !B ? "-on" : ""}`,
        style: x && !B ? I : k
      }
    ) : Z && /* @__PURE__ */ m.jsx("span", { className: `rcb-voice-icon ${x && !B ? "on" : ""}`, children: /* @__PURE__ */ m.jsx(Z, { style: x && !B ? I : k }) });
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "aria-label": ((h = y.ariaLabel) == null ? void 0 : h.voiceButton) ?? "toggle voice",
      role: "button",
      onMouseDown: (z) => {
        z.preventDefault(), !B && b();
      },
      style: x && !B ? s.voiceButtonStyle : { ...s.voiceButtonStyle, ...s.voiceButtonDisabledStyle },
      className: x && !B ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: X()
    }
  );
}, Yc = () => {
  var f, A, h, y, s, w, T, x;
  const { settings: b } = Be(), { styles: E } = Xe(), { textAreaDisabled: N } = ft(), [B, j] = D.useState(!1), { handleSubmitText: L } = Ua(), H = {
    backgroundColor: (f = b.general) == null ? void 0 : f.primaryColor,
    ...E.sendButtonStyle
  }, _ = {
    cursor: `url(${(A = b.general) == null ? void 0 : A.actionDisabledIcon}), auto`,
    backgroundColor: (h = b.general) == null ? void 0 : h.primaryColor,
    ...E.sendButtonStyle,
    // by default inherit the base style
    ...E.sendButtonDisabledStyle
  }, I = {
    backgroundColor: (y = b.general) == null ? void 0 : y.secondaryColor,
    ...E.sendButtonStyle,
    // by default inherit the base style
    ...E.sendButtonHoveredStyle
  }, k = {
    backgroundImage: `url(${(s = b.chatInput) == null ? void 0 : s.sendButtonIcon})`,
    fill: "#fff",
    ...E.sendIconStyle
  }, V = {
    backgroundImage: `url(${(w = b.chatInput) == null ? void 0 : w.sendButtonIcon})`,
    fill: "#fff",
    ...E.sendIconStyle,
    // by default inherit the base style
    ...E.sendIconDisabledStyle
  }, re = {
    backgroundImage: `url(${(T = b.chatInput) == null ? void 0 : T.sendButtonIcon})`,
    fill: "#fff",
    ...E.sendIconStyle,
    // by default inherit the base style
    ...E.sendIconHoveredStyle
  }, X = () => {
    j(!0);
  }, z = () => {
    j(!1);
  }, $ = () => {
    var Z;
    const ie = (Z = b.chatInput) == null ? void 0 : Z.sendButtonIcon;
    return !ie || typeof ie == "string" ? /* @__PURE__ */ m.jsx(
      "span",
      {
        className: "rcb-send-icon",
        "data-testid": "rcb-send-icon",
        style: N ? V : B ? re : k
      }
    ) : ie && /* @__PURE__ */ m.jsx("span", { className: "rcb-send-icon", "data-testid": "rcb-send-icon", children: /* @__PURE__ */ m.jsx(
      ie,
      {
        style: N ? V : B ? re : k
      }
    ) });
  };
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      "aria-label": ((x = b.ariaLabel) == null ? void 0 : x.sendButton) ?? "send message",
      role: "button",
      onMouseEnter: X,
      onMouseLeave: z,
      onMouseDown: async (Z) => {
        Z == null || Z.preventDefault(), !N && await L();
      },
      style: N ? _ : B ? I : H,
      className: "rcb-send-button",
      children: $()
    }
  );
}, Xc = (f) => Object.values(Ke).includes(f), Vc = (f, A) => {
  var h, y, s, w, T, x, b, E, N;
  const B = {
    [Ke.AUDIO_BUTTON]: (h = f.audio) == null ? void 0 : h.disabled,
    [Ke.CLOSE_CHAT_BUTTON]: (y = f.general) == null ? void 0 : y.embedded,
    [Ke.EMOJI_PICKER_BUTTON]: (s = f.emoji) == null ? void 0 : s.disabled,
    [Ke.FILE_ATTACHMENT_BUTTON]: (w = f.fileAttachment) == null ? void 0 : w.disabled,
    [Ke.NOTIFICATION_BUTTON]: (T = f.notification) == null ? void 0 : T.disabled,
    [Ke.SEND_MESSAGE_BUTTON]: !1,
    [Ke.VOICE_MESSAGE_BUTTON]: (x = f.voice) == null ? void 0 : x.disabled
  }, j = {}, L = (k) => k ? k.map((V) => {
    if (typeof V == "string") {
      if (Xc(V) && !B[V]) {
        if (j[V])
          return j[V];
        const re = A[V];
        if (typeof re == "function") {
          const X = re();
          return j[V] = X, X;
        }
        return null;
      }
      return null;
    }
    return V;
  }).filter((V) => V !== null) : [], H = L((b = f.header) == null ? void 0 : b.buttons), _ = L((E = f.chatInput) == null ? void 0 : E.buttons), I = L((N = f.footer) == null ? void 0 : N.buttons);
  return { header: H, chatInput: _, footer: I };
}, Jc = () => /* @__PURE__ */ m.jsx(Wc, {}), Kc = () => /* @__PURE__ */ m.jsx(Gc, {}), $c = () => /* @__PURE__ */ m.jsx(Zc, {}), qc = () => /* @__PURE__ */ m.jsx(_c, {}), ed = () => /* @__PURE__ */ m.jsx(Yc, {}), td = () => /* @__PURE__ */ m.jsx(Uc, {}), nd = () => /* @__PURE__ */ m.jsx(zc, {}), rd = () => {
  const { settings: f } = Be(), A = D.useMemo(() => ({
    [Ke.CLOSE_CHAT_BUTTON]: () => $c(),
    [Ke.AUDIO_BUTTON]: () => Jc(),
    [Ke.NOTIFICATION_BUTTON]: () => Kc(),
    [Ke.EMOJI_PICKER_BUTTON]: () => nd(),
    [Ke.FILE_ATTACHMENT_BUTTON]: () => td(),
    [Ke.SEND_MESSAGE_BUTTON]: () => ed(),
    [Ke.VOICE_MESSAGE_BUTTON]: () => qc()
  }), []), { header: h, chatInput: y, footer: s } = D.useMemo(() => Vc(f, A), [f, A]), w = D.useMemo(() => h, [h]), T = D.useMemo(() => y, [y]), x = D.useMemo(() => s, [s]);
  return { headerButtons: w, chatInputButtons: T, footerButtons: x };
}, Xl = () => {
  const { settings: f } = Be(), { styles: A } = Xe(), { setMessages: h } = Zl(), {
    isLoadingChatHistory: y,
    setIsLoadingChatHistory: s
  } = ft(), { chatBodyRef: w } = ot(), { callRcbEvent: T } = Zn(), { chatScrollHeight: x } = Gn(), b = D.useCallback(() => {
    var E;
    const N = QA();
    N && ((E = f.event) != null && E.rcbLoadChatHistory && T(Te.LOAD_CHAT_HISTORY, {}).defaultPrevented || (s(!0), Pc(
      f,
      A,
      N,
      h,
      w,
      x,
      s
    )));
  }, [f, A, h]);
  return { isLoadingChatHistory: y, setIsLoadingChatHistory: s, showChatHistory: b };
}, od = () => {
  var f, A, h;
  const { settings: y } = Be(), { styles: s } = Xe(), { showChatHistory: w } = Xl(), [T, x] = D.useState(!1), b = {
    color: (f = y.general) == null ? void 0 : f.primaryColor,
    borderColor: (A = y.general) == null ? void 0 : A.primaryColor,
    ...s.chatHistoryButtonStyle,
    // by default inherit the base style
    ...s.chatHistoryButtonHoveredStyle
  };
  return /* @__PURE__ */ m.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ m.jsx(
    "div",
    {
      onMouseEnter: () => {
        x(!0);
      },
      onMouseLeave: () => {
        x(!1);
      },
      style: T ? b : s.chatHistoryButtonStyle,
      onMouseDown: (E) => {
        E.preventDefault(), w();
      },
      className: "rcb-view-history-button",
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ m.jsx("p", { children: (h = y.chatHistory) == null ? void 0 : h.viewChatHistoryButtonText })
    }
  ) });
}, zA = () => {
  var f;
  const { settings: A } = Be(), { hasInteractedPage: h, setHasInteractedPage: y, hasFlowStarted: s, setHasFlowStarted: w } = ft(), T = D.useCallback(() => {
    var x;
    y(!0), !s && ((x = A.general) == null ? void 0 : x.flowStartTrigger) === "ON_PAGE_INTERACT" && w(!0);
    const b = new SpeechSynthesisUtterance();
    b.text = "", b.onend = () => {
      window.removeEventListener("click", T), window.removeEventListener("keydown", T), window.removeEventListener("touchstart", T);
    }, window.speechSynthesis.speak(b);
  }, [s, (f = A.general) == null ? void 0 : f.flowStartTrigger]);
  return {
    hasInteractedPage: h,
    handleFirstInteraction: T
  };
}, ad = () => {
  var f, A, h, y;
  const s = Ms(), { settings: w } = Be(), {
    endStreamMessage: T,
    injectMessage: x,
    removeMessage: b,
    streamMessage: E,
    messages: N,
    replaceMessages: B
  } = Na(), { getCurrPath: j, getPrevPath: L, goToPath: H, paths: _ } = ji(), { showToast: I, dismissToast: k } = Ha(), {
    isBotTyping: V,
    isChatWindowOpen: re,
    isScrolling: X,
    hasFlowStarted: z,
    setIsChatWindowOpen: $,
    setTextAreaDisabled: Z,
    setAudioToggledOn: ie,
    setVoiceToggledOn: oe,
    setIsBotTyping: ce,
    setTextAreaSensitiveMode: se,
    setBlockAllowsAttachment: Ae,
    setTimeoutId: ee
  } = ft(), { chatBodyRef: he, flowRef: Re, streamMessageMap: Pe, paramsInputRef: q, keepVoiceOnRef: le } = ot(), pe = Re.current, { viewportHeight: xe, setViewportHeight: ae, setViewportWidth: me, openChat: Fe } = Gn(), { setUpNotifications: Ce } = Gl(), { handleFirstInteraction: ue } = zA(), { showChatHistory: He } = Xl(), { updateTextAreaFocus: xt, setTextAreaValue: Et } = Ho(), { syncVoice: $e } = Rs(), at = D.useRef(0);
  D.useEffect(() => (window.addEventListener("click", ue), window.addEventListener("keydown", ue), window.addEventListener("touchstart", ue), () => {
    window.removeEventListener("click", ue), window.removeEventListener("keydown", ue), window.removeEventListener("touchstart", ue);
  }), []), D.useEffect(() => {
    var ne, we, be;
    Ce(), Z((ne = w.chatInput) == null ? void 0 : ne.disabled), $((we = w.chatWindow) == null ? void 0 : we.defaultOpen), ie((be = w.audio) == null ? void 0 : be.defaultToggledOn), setTimeout(() => {
      var De;
      oe((De = w.voice) == null ? void 0 : De.defaultToggledOn);
    }, 1);
  }, []), D.useEffect(() => {
    !X && he != null && he.current && (he.current.scrollTop = he.current.scrollHeight);
  }, [V]), D.useEffect(() => {
    var ne, we, be, De;
    if ((ne = w.chatHistory) != null && ne.disabled)
      localStorage.removeItem((we = w.chatHistory) == null ? void 0 : we.storageKey);
    else if (Cc(w), localStorage.getItem((be = w.chatHistory) == null ? void 0 : be.storageKey) != null) {
      const Oe = Oo(/* @__PURE__ */ m.jsx(od, {}), "system");
      B([Oe]), (De = w.chatHistory) != null && De.autoLoad && He();
    }
  }, [(f = w.chatHistory) == null ? void 0 : f.storageKey, (A = w.chatHistory) == null ? void 0 : A.maxEntries, (h = w.chatHistory) == null ? void 0 : h.disabled]), D.useEffect(() => {
    var ne;
    s || (ne = w.general) != null && ne.embedded || !navigator.virtualKeyboard || (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (we) => {
      if (!we.target)
        return;
      const { x: be, y: De, width: Oe, height: Ve } = we.target.boundingRect;
      be == 0 && De == 0 && Oe == 0 && Ve == 0 ? (setTimeout(() => {
        var Qe;
        ae((Qe = window.visualViewport) == null ? void 0 : Qe.height);
      }, 101), setTimeout(() => {
        var Qe, qe;
        xe != ((Qe = window.visualViewport) == null ? void 0 : Qe.height) && ae((qe = window.visualViewport) == null ? void 0 : qe.height);
      }, 1001)) : setTimeout(() => {
        var Qe;
        ae(((Qe = window.visualViewport) == null ? void 0 : Qe.height) - Ve);
      }, 101);
    }));
  }, [s]), D.useEffect(() => {
    var ne, we, be, De;
    if (s)
      return;
    re && (ae((ne = window.visualViewport) == null ? void 0 : ne.height), me((we = window.visualViewport) == null ? void 0 : we.width));
    const Oe = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), Ve = () => at.current = window.scrollY, Qe = () => {
      var ht, jt;
      ae((ht = window.visualViewport) == null ? void 0 : ht.height), me((jt = window.visualViewport) == null ? void 0 : jt.width);
    }, qe = () => {
      var ht;
      window.removeEventListener("scroll", Oe), window.removeEventListener("scroll", Ve), (ht = window.visualViewport) == null || ht.removeEventListener("resize", Qe);
    };
    return re ? (qe(), document.body.style.position = "fixed", window.addEventListener("scroll", Oe), (be = window.visualViewport) == null || be.addEventListener("resize", Qe)) : (document.body.style.position = "static", qe(), window.scrollTo({ top: at.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", Ve), (De = window.visualViewport) == null || De.removeEventListener("resize", Qe)), qe;
  }, [re, s]), D.useEffect(() => {
    const ne = j();
    if (!ne)
      return;
    const we = pe[ne];
    if (!we) {
      ce(!1);
      return;
    }
    const be = {
      prevPath: L(),
      currPath: j(),
      goToPath: H,
      setTextAreaValue: Et,
      userInput: q.current,
      endStreamMessage: T,
      injectMessage: x,
      removeMessage: b,
      streamMessage: E,
      openChat: Fe,
      showToast: I,
      dismissToast: k
    };
    (async (De, Oe, Ve) => {
      var Qe;
      await gc(
        pe,
        De,
        Ve,
        Z,
        se,
        H,
        ee
      ), ce(!1), "chatDisabled" in Oe || Z((Qe = w.chatInput) == null ? void 0 : Qe.disabled), Ae(typeof Oe.file == "function"), xt(De), $e(le.current && !Oe.chatDisabled), Pe.current.clear(), Cs(N);
    })(ne, we, be);
  }, [_]), D.useEffect(() => {
    var ne;
    (z || ((ne = w.general) == null ? void 0 : ne.flowStartTrigger) === "ON_LOAD") && H("start");
  }, [z, (y = w.general) == null ? void 0 : y.flowStartTrigger]);
}, id = ({
  plugins: f
}) => {
  var A, h, y, s;
  f == null || f.map((X) => X());
  const w = Ms(), { settings: T } = Be(), { styles: x } = Xe(), { hasFlowStarted: b, setHasFlowStarted: E } = ft(), { inputRef: N } = ot(), {
    setChatScrollHeight: B,
    viewportHeight: j,
    viewportWidth: L,
    isChatWindowOpen: H
  } = Gn(), { headerButtons: _, chatInputButtons: I, footerButtons: k } = rd();
  ad();
  const V = D.useMemo(() => {
    var X;
    const z = "rcb-chatbot-global ";
    return (X = T.general) != null && X.embedded ? z + "rcb-window-embedded" : H ? z + "rcb-window-open" : z + "rcb-window-close";
  }, [T, H]), re = () => {
    var X;
    return !w && !((X = T.general) != null && X.embedded) ? {
      ...x.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${L}px`,
      height: `${j}px`
    } : x.chatWindowStyle;
  };
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: (() => {
    var X, z;
    return w && ((X = T.device) == null ? void 0 : X.desktopEnabled) || !w && ((z = T.device) == null ? void 0 : z.mobileEnabled);
  })() && /* @__PURE__ */ m.jsxs(
    "div",
    {
      onMouseDown: (X) => {
        var z, $;
        !b && ((z = T.general) == null ? void 0 : z.flowStartTrigger) === "ON_CHATBOT_INTERACT" && E(!0), w ? ($ = N.current) == null || $.blur() : X == null || X.preventDefault();
      },
      className: V,
      children: [
        /* @__PURE__ */ m.jsx(Nc, {}),
        /* @__PURE__ */ m.jsx(Hc, {}),
        H && !w && !((A = T.general) != null && A.embedded) && /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
          /* @__PURE__ */ m.jsx("style", { children: `
									html {
										overflow: hidden !important;
										touch-action: none !important;
										scroll-behavior: auto !important;
									}
								` }),
          /* @__PURE__ */ m.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ m.jsxs("div", { style: re(), className: "rcb-chat-window", children: [
          ((h = T.general) == null ? void 0 : h.showHeader) && /* @__PURE__ */ m.jsx(Ku, { buttons: _ }),
          /* @__PURE__ */ m.jsx(ic, { setChatScrollHeight: B }),
          ((y = T.general) == null ? void 0 : y.showInputRow) && /* @__PURE__ */ m.jsx(Fc, { buttons: I }),
          ((s = T.general) == null ? void 0 : s.showFooter) && /* @__PURE__ */ m.jsx(Lc, { buttons: k })
        ] })
      ]
    }
  ) });
}, Vl = {
  DEFAULT_URL: "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes",
  DEFAULT_EXPIRATION: "2592000",
  CACHE_KEY_PREFIX: "RCB_THEME_CACHE_DATA"
}, sd = Vl.DEFAULT_URL, ld = Vl.DEFAULT_EXPIRATION, WA = Vl.CACHE_KEY_PREFIX, Ad = (f, A, h) => {
  const y = localStorage.getItem(`${WA}_${f}_${A}`);
  if (!y)
    return null;
  try {
    const s = JSON.parse(y), w = (/* @__PURE__ */ new Date()).getTime(), T = Math.floor(w / 1e3);
    return s.cacheDate + h >= T ? s : null;
  } catch (s) {
    return console.error(`Unable to fetch cache for ${f}`, s), null;
  }
}, ud = (f, A, h, y, s) => {
  const w = (/* @__PURE__ */ new Date()).getTime(), T = Math.floor(w / 1e3), x = {
    settings: h,
    inlineStyles: y,
    cssStylesText: s,
    cacheDate: T
  };
  localStorage.setItem(`${WA}_${f}_${A}`, JSON.stringify(x));
}, cd = async (f, A) => {
  const h = `${A}/${f}/meta.json`;
  try {
    const y = await fetch(h);
    return y.ok ? (await y.json()).version : (console.error(`Failed to fetch meta.json from ${h}`), null);
  } catch (y) {
    return console.error(`Failed to fetch meta.json from ${h}`, y), null;
  }
}, cA = async (f, A) => {
  const { id: h, version: y, baseUrl: s = sd, cacheDuration: w = ld } = A, T = y || await cd(h, s);
  if (!T)
    return console.error(`Unable to find version for theme: ${h}`), { settings: {}, inlineStyles: {}, cssStylesText: "" };
  const x = Ad(h, T, w);
  if (x) {
    const V = dA(f, x.cssStylesText);
    return { settings: x.settings, inlineStyles: x.inlineStyles, cssStylesText: V };
  }
  const b = `${s}/${h}/${T}/styles.css`, E = `${s}/${h}/${T}/settings.json`, N = `${s}/${h}/${T}/styles.json`;
  let B = "";
  const j = await fetch(b);
  j.ok ? B = await j.text() : console.info(`Could not fetch styles.css from ${b}`);
  const L = await fetch(E);
  let H = {};
  L.ok ? H = await L.json() : console.info(`Could not fetch settings.json from ${E}`);
  const _ = await fetch(N);
  let I = {};
  _.ok ? I = await _.json() : console.info(`Could not fetch styles.json from ${N}`), ud(h, T, H, I, B);
  const k = dA(f, B);
  return { settings: H, inlineStyles: I, cssStylesText: k };
}, dA = (f, A) => A.split(new RegExp("(?<=})")).map((h) => {
  const y = h.trim();
  return y.startsWith("@import") || y.startsWith("@keyframes") || y.startsWith("@media") ? y : y ? `#${f} ${y}` : "";
}).join(`
`), Jl = () => Qs(yA), ZA = () => Qs(bA), dd = async (f, A, h, y) => {
  var s, w;
  let T = Jl(), x = ZA(), b = "";
  if (y != null)
    if (Array.isArray(y))
      for (const E of y) {
        const N = await cA(f, E);
        T = Jr(N.settings, T), x = Jr(N.inlineStyles, x), b += N.cssStylesText;
      }
    else {
      const E = await cA(f, y);
      T = Jr(E.settings, T), x = Jr(E.inlineStyles, x), b += E.cssStylesText;
    }
  return A != null && (T = Jr(A, T)), h != null && (x = Jr(h, x)), ((s = T.chatInput) == null ? void 0 : s.botDelay) != null && ((w = T.chatInput) == null ? void 0 : w.botDelay) < 500 && (T.chatInput.botDelay = 500), { settings: T, inlineStyles: x, cssStylesText: b };
}, Jr = (f, A) => {
  const h = [{ source: f, target: A }];
  for (; h.length; ) {
    const y = h.pop();
    if (y == null)
      continue;
    const { source: s, target: w } = y;
    for (const T of Object.keys(s)) {
      const x = T;
      if (D.isValidElement(s[x]))
        w[x] = s[x];
      else if (typeof s[x] == "object" && s[x] !== null && !Array.isArray(s[x]))
        h.push({ source: s[x], target: w[x] });
      else
        try {
          w[x] = s[x];
        } catch {
        }
    }
  }
  return A;
}, Qs = (f) => {
  if (f === null || typeof f != "object")
    return f;
  const A = Array.isArray(f) ? [] : {}, h = [{ source: f, target: A }], y = /* @__PURE__ */ new WeakMap();
  for (y.set(f, A); h.length; ) {
    const s = h.pop();
    if (s == null)
      continue;
    const { source: w, target: T } = s;
    for (const x in w)
      if (Object.prototype.hasOwnProperty.call(w, x)) {
        const b = w[x];
        if (b && typeof b == "object")
          if (y.has(b))
            T[x] = y.get(b);
          else {
            const E = Array.isArray(b) ? [] : {};
            y.set(b, E), T[x] = E, h.push({ source: b, target: E });
          }
        else
          T[x] = b;
      }
  }
  return A;
}, GA = D.createContext(void 0), _A = () => D.useContext(GA), YA = ({
  children: f
}) => {
  var A;
  const h = D.useRef(""), y = D.useRef({}), [s, w] = D.useState({}), [T, x] = D.useState({}), [b, E] = D.useState(!1);
  D.useEffect(() => {
    E(!0);
  }, []);
  const N = async (B, j, L, H, _, I) => {
    h.current = B, y.current = j;
    const k = await dd(B, L, H, _);
    I.current && (I.current.textContent = k.cssStylesText), w(k.settings), x(k.inlineStyles);
  };
  return b ? /* @__PURE__ */ m.jsx("div", { style: { fontFamily: (A = s.general) == null ? void 0 : A.fontFamily }, children: /* @__PURE__ */ m.jsx(GA.Provider, { value: { loadConfig: N }, children: /* @__PURE__ */ m.jsx(Vu, { settings: s, setSettings: w, children: /* @__PURE__ */ m.jsx(Ju, { styles: T, setStyles: x, children: /* @__PURE__ */ m.jsx(rc, { children: /* @__PURE__ */ m.jsx($u, { botIdRef: h, flowRef: y, children: /* @__PURE__ */ m.jsx(nc, { children: /* @__PURE__ */ m.jsx(qu, { settings: s, children: /* @__PURE__ */ m.jsx(ac, { children: f }) }) }) }) }) }) }) }) }) : null;
}, fd = ({
  id: f,
  flow: A,
  settings: h,
  styles: y,
  themes: s,
  plugins: w,
  setConfigLoaded: T,
  styleRootRef: x
}) => {
  const b = D.useMemo(() => f, []), E = _A(), { flowRef: N } = ot();
  N && N.current !== A && (N.current = A);
  const B = async () => {
    var j, L;
    (j = h.event) != null && j.rcbPreLoadChatBot && Bs(
      Te.PRE_LOAD_CHATBOT,
      { botId: b, currPath: null, prevPath: null },
      {
        flow: A,
        settings: h,
        styles: y,
        themes: s,
        plugins: w
      }
    ).defaultPrevented || (E != null && E.loadConfig && (await E.loadConfig(b, A, h, y, s, x), T(!0)), (L = h.event) != null && L.rcbPostLoadChatBot && Bs(
      Te.POST_LOAD_CHATBOT,
      { botId: b, currPath: null, prevPath: null },
      {
        flow: A,
        settings: h,
        styles: y,
        themes: s,
        plugins: w
      }
    ));
  };
  return D.useEffect(() => {
    B();
  }, [s]), null;
}, Ml = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], hd = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: Ml,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: Ml,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: Ml,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (f) => {
      let A = "";
      switch (f.userInput) {
        case "Quickstart":
          A = "https://react-chatbotify.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          A = "https://react-chatbotify.com/docs/api/bot_options";
          break;
        case "Examples":
          A = "https://react-chatbotify.com/docs/examples/basic_form";
          break;
        case "Github":
          A = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          A = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return f.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(A);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, pd = ({
  id: f,
  flow: A,
  settings: h,
  styles: y,
  themes: s,
  plugins: w
}) => {
  const T = D.useMemo(() => f || "rcb-" + Ts(), []), x = !A || Object.keys(A).length === 0 ? hd : A, b = h || {}, E = y || {}, N = w || [], [B, j] = D.useState(!1), L = _A(), H = D.useRef(null), [_, I] = D.useState(s || []);
  D.useEffect(() => {
    s && I(s);
  }, [s]);
  const k = () => /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      fd,
      {
        styleRootRef: H,
        id: T,
        flow: x,
        settings: b,
        styles: E,
        themes: _,
        plugins: N,
        setConfigLoaded: j
      }
    ),
    B && /* @__PURE__ */ m.jsx(id, { plugins: w })
  ] });
  return L == null ? /* @__PURE__ */ m.jsxs(YA, { children: [
    /* @__PURE__ */ m.jsx("style", { ref: H }),
    /* @__PURE__ */ m.jsx("div", { id: T, children: k() })
  ] }) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx("style", { ref: H }),
    /* @__PURE__ */ m.jsx("div", { id: T, children: k() })
  ] });
}, vd = () => {
  const { audioToggledOn: f, toggleAudio: A } = NA();
  return {
    audioToggledOn: f,
    toggleAudio: A
  };
}, gd = () => {
  const { botIdRef: f } = ot();
  return {
    getBotId: () => f.current
  };
}, md = () => {
  const { getBotId: f } = gd();
  return {
    getBotId: f
  };
}, yd = () => {
  const { isChatWindowOpen: f, toggleChatWindow: A } = Gn();
  return {
    isChatWindowOpen: f,
    toggleChatWindow: A
  };
}, wd = () => {
  const { hasInteractedPage: f } = zA();
  return {
    hasInteractedPage: f
  };
}, bd = () => {
  const { replaceMessages: f } = Na(), { replacePaths: A } = ji(), { replaceToasts: h } = Ha(), { hasFlowStarted: y } = ft(), { flowRef: s } = ot();
  return {
    hasFlowStarted: y,
    restartFlow: () => {
      f([]), h([]), A(["start"]);
    },
    getFlow: () => s.current ?? {}
  };
}, Sd = () => {
  const { hasFlowStarted: f, restartFlow: A, getFlow: h } = bd();
  return {
    hasFlowStarted: f,
    restartFlow: A,
    getFlow: h
  };
}, xd = () => {
  const {
    endStreamMessage: f,
    injectMessage: A,
    removeMessage: h,
    streamMessage: y,
    messages: s,
    replaceMessages: w
  } = Na();
  return {
    endStreamMessage: f,
    injectMessage: A,
    removeMessage: h,
    streamMessage: y,
    messages: s,
    replaceMessages: w
  };
}, Ed = () => {
  const { settings: f, setSettings: A } = Be();
  return {
    settings: f,
    replaceSettings: (h) => {
      A(h);
    },
    updateSettings: (h) => {
      A(Qs(Jr(h, f)));
    }
  };
}, Cd = () => {
  const { settings: f, replaceSettings: A, updateSettings: h } = Ed();
  return {
    settings: f,
    replaceSettings: A,
    updateSettings: h
  };
}, Dd = () => {
  const { styles: f, setStyles: A } = Xe();
  return {
    styles: f,
    replaceStyles: (h) => {
      A(h);
    },
    updateStyles: (h) => {
      A(Qs(Jr(h, f)));
    }
  };
}, Pd = () => {
  const { styles: f, replaceStyles: A, updateStyles: h } = Dd();
  return {
    styles: f,
    replaceStyles: A,
    updateStyles: h
  };
}, Td = () => {
  ot();
  const {
    textAreaDisabled: f,
    toggleTextAreaDisabled: A,
    textAreaSensitiveMode: h,
    toggleTextAreaSensitiveMode: y,
    getTextAreaValue: s,
    setTextAreaValue: w,
    focusTextArea: T
  } = Ho();
  return {
    textAreaDisabled: f,
    toggleTextAreaDisabled: A,
    textAreaSensitiveMode: h,
    toggleTextAreaSensitiveMode: y,
    getTextAreaValue: s,
    setTextAreaValue: w,
    focusTextArea: T
  };
}, Bd = () => {
  const { showToast: f, dismissToast: A, toasts: h, replaceToasts: y } = Ha();
  return {
    showToast: f,
    dismissToast: A,
    toasts: h,
    replaceToasts: y
  };
}, kd = () => {
  const { voiceToggledOn: f, toggleVoice: A } = Rs();
  return {
    voiceToggledOn: f,
    toggleVoice: A
  };
}, Id = () => {
  const { showChatHistory: f } = Xl();
  return {
    showChatHistory: f,
    getHistoryMessages: QA,
    setHistoryMessages: jA
  };
}, Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ke,
  ChatBotProvider: YA,
  default: pd,
  getDefaultSettings: Jl,
  getDefaultStyles: ZA,
  useAudio: vd,
  useBotId: md,
  useChatHistory: Id,
  useChatWindow: yd,
  useFirstInteraction: wd,
  useFlow: Sd,
  useMessages: xd,
  useNotifications: UA,
  usePaths: DA,
  useSettings: Cd,
  useStyles: Pd,
  useTextArea: Td,
  useToasts: Bd,
  useVoice: kd
}, Symbol.toStringTag, { value: "Module" })), Md = D.lazy(() => Promise.resolve().then(() => Rd)), XA = Jl(), Qd = D.createContext({
  settings: XA,
  setSettings: () => {
  }
});
function jd() {
  const [f, A] = D.useState(""), [h, y] = D.useState(""), [s, w] = D.useState(!1), [T, x] = D.useState(!1), [b, E] = D.useState({
    ...XA,
    voice: {
      disabled: !0
    },
    fileAttachment: {
      disabled: !0
    },
    emoji: {
      disabled: !0
    },
    chatHistory: {
      disabled: !0
    },
    header: {
      title: "Vastlink Bot",
      avatar: "/imgs/logos/logo.svg"
    },
    notification: {
      disabled: !0
    },
    tooltip: {
      mode: "NEVER",
      text: "Talk to me 🚀"
    },
    general: {
      showFooter: !1
    },
    chatButton: {
      icon: "/imgs/logos/chatbot.svg"
    }
  }), [N, B] = D.useState(!1), [j, L] = D.useState({});
  D.useEffect(() => {
    B(!0);
  }, []);
  const H = async (V) => {
    const { address: re } = Ps.all();
    A(re);
    let z = await fu.getInstance().createToken(V).getBalance(re);
    z = du(z), y(z);
  }, _ = async (V) => {
    dt("handleQuestion params", V);
    const re = await JA.post("/ai/chat", {
      question: V.userInput
    }), {
      action: X,
      coin: z,
      amount: $,
      to: Z
    } = re.data;
    X ? (L({
      action: X,
      toEmail: Z,
      token: z,
      amount: $
    }), await H(z), x(!0)) : L({
      action: "other",
      answer: re.data
    });
  }, I = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send ETH, MATIC, or TVWT to any email address. For example, you can say: 'Send 0.01 ETH to example@gmail.com'. How can I assist you today?",
      function: _,
      path: "transfer"
    },
    transfer: {
      message: (V) => {
        if (dt("end", j), j.action === "transfer")
          return "Your transfer request has been processed. Click the button below to open the transfer confirmation dialog.";
        if (j.action === "other")
          return j.answer;
      },
      function: _,
      component: (V) => {
        if (j.action === "transfer")
          return dt(T, f, h, j.token, j.toEmail, j.amount), /* @__PURE__ */ m.jsx("div", { className: "pl-4 pt-2", children: T && f && h && j.token && j.toEmail && j.amount && /* @__PURE__ */ m.jsx(hu, { onClick: () => w(!0) }) });
      },
      // chatDisabled: true,
      path: "transfer"
    }
  }, k = {
    botBubbleStyle: {
      backgroundColor: "#333"
    },
    headerStyle: {
      backgroundImage: "linear-gradient(to right, #333, rgb(66, 176, 197))"
    },
    chatButtonStyle: {
      background: "#fff",
      borderRadius: "50%",
      width: "44px",
      height: "44px"
    },
    chatIconStyle: {
      // backgroundImage: `url('/imgs/logos/chatbot.png')`,
      width: "44px",
      height: "44px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain"
    },
    tooltipStyle: {
      background: "rgb(66, 176, 197)"
    },
    sendButtonHoveredStyle: {
      background: "rgba(66, 176, 197, 0.8)"
    }
  };
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: N && /* @__PURE__ */ m.jsx(D.Suspense, { fallback: null, children: /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(Qd.Provider, { value: { settings: b, setSettings: E }, children: /* @__PURE__ */ m.jsx(Md, { settings: b, flow: I, styles: k }) }),
    /* @__PURE__ */ m.jsx(
      qA,
      {
        open: s,
        setOpen: w,
        balance: h,
        address: f,
        tokenType: j.token,
        defaultTo: j.toEmail,
        defaultAmount: j.amount,
        defaultNote: "",
        onClose: () => {
          A(""), y("");
        }
      }
    )
  ] }) }) });
}
function fA(f) {
  const { pathname: A } = Ul();
  return f.some((y) => {
    var s;
    switch (y.match) {
      case "exact":
        return A === y.path;
      case "startsWith":
        return A.startsWith(y.path);
      case "endsWith":
        return A.endsWith(y.path);
      case "includes":
        return A.includes(y.path);
      case "pattern":
        return (s = y.pattern) == null ? void 0 : s.test(A);
      default:
        return !1;
    }
  });
}
const Od = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
], Fd = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
];
function Ld() {
  const f = fA(Od), A = fA(Fd);
  return {
    hideChatbot: f,
    disableHeader: A
  };
}
function nf() {
  const { hideChatbot: f } = Ld();
  return /* @__PURE__ */ m.jsxs("section", { className: "bg-background w-full flex flex-col min-h-screen", children: [
    /* @__PURE__ */ m.jsx(yu, {}),
    /* @__PURE__ */ m.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ m.jsx(pu, { children: /* @__PURE__ */ m.jsx($A, {}) }) }),
    !f && /* @__PURE__ */ m.jsx(jd, {})
  ] });
}
export {
  nf as default
};
