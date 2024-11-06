var ce = Object.defineProperty;
var de = (e, t, n) => t in e ? ce(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var h = (e, t, n) => de(e, typeof t != "symbol" ? t + "" : t, n);
import { j as r } from "./vendor-radix-D0lo_cKZ.js";
import { p as ee, a as ue, u as pe, e as me, r as o, f as ge } from "./vendor-react-CA5sEv1f.js";
import { Q as ye, X as he, i as te, a as fe, I as Ce } from "./vendor-utils-C-Nds55G.js";
import { t as we, c as ve } from "./vendor-ui-utils-BGnsFFgj.js";
var Z, f = ue;
if (ee.env.NODE_ENV === "production")
  Z = f.createRoot, f.hydrateRoot;
else {
  var Q = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Z = function(e, t) {
    Q.usingClientEntryPoint = !0;
    try {
      return f.createRoot(e, t);
    } finally {
      Q.usingClientEntryPoint = !1;
    }
  };
}
function be() {
  const e = pe();
  return console.error(e), /* @__PURE__ */ r.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ r.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ r.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ r.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
const xe = me([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-D56q2thZ.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ r.jsx(be, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-BXDYX4yp.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-Cv4h3Dcn.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-cdGZhDBF.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-BI3TEfO8.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-B0k7HG5T.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-D00wTZc2.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-BNpuN4PV.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "marketplace",
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-C5kiQKox.js");
                  return { Component: e };
                }
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-B9W53xpf.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-D8W5BzEJ.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-BfgK1TOr.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-DeNYLtc3.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-CnJPt6TY.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-H6ysuAfr.js");
                  return { Component: e };
                }
              },
              {
                path: "product-flow",
                children: [
                  {
                    path: "kyb",
                    children: [
                      {
                        path: "starting",
                        async lazy() {
                          const { default: e } = await import("./page-BjHqOXiO.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-C-lSOHm4.js");
                          return { Component: e };
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: "invite",
            children: [
              {
                path: "transfer",
                async lazy() {
                  const { default: e } = await import("./page-4p4F7JQB.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-s0fHuYLE.js");
                  return { Component: e };
                }
              }
            ]
          }
        ]
      }
    ]
  }
]), ne = o.createContext(void 0), Se = ({ children: e }) => {
  const [t, n] = o.useState(!1), [a, i] = o.useState(!1), [c, s] = o.useState({ name: "", url: "" }), [l, d] = o.useState(!1), [p, m] = o.useState(), u = o.useRef(), y = (g) => {
    m(g), u.current = g;
  };
  return /* @__PURE__ */ r.jsx(ne.Provider, { value: {
    isModalOpen: t,
    setIsModalOpen: n,
    displayUriInput: a,
    setDisplayUriInput: i,
    dappInfo: c,
    setDappInfo: s,
    isConnected: l,
    setIsConnected: d,
    web3wallet: p,
    setWeb3Wallet: y,
    web3walletRef: u
  }, children: e });
}, dt = () => o.useContext(ne), ae = console.log.bind(console, "🚀");
function Ae(...e) {
  return we(ve(e));
}
class Pe {
  constructor(t) {
    h(this, "isClient");
    h(this, "key");
    this.isClient = typeof window < "u", this.key = t;
  }
  set(t) {
    this.isClient && localStorage.setItem(this.key, t);
  }
  get() {
    return this.isClient ? localStorage.getItem(this.key) : null;
  }
  remove() {
    this.isClient && localStorage.removeItem(this.key);
  }
  setData(t) {
    if (this.isClient)
      try {
        const n = JSON.stringify(t);
        return localStorage.setItem(this.key, n), !0;
      } catch (n) {
        return console.error("Failed to stringify object", n), !1;
      }
    return !1;
  }
  getData() {
    if (this.isClient) {
      const t = localStorage.getItem(this.key);
      if (t)
        try {
          return JSON.parse(t);
        } catch (n) {
          return console.error("Failed to parse JSON", n), null;
        }
    }
    return null;
  }
  // clear(): void {
  //   if (this.isClient) {
  //     localStorage.clear();
  //   }
  // }
}
const oe = new Pe("language"), ut = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, re = ee.env.NODE_ENV === "development";
function ke() {
  const [e, t] = o.useState(!1);
  return o.useEffect(() => {
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(n);
  }, []), /* @__PURE__ */ r.jsx(
    ye,
    {
      position: "top-center",
      autoClose: 5e3,
      hideProgressBar: !0,
      newestOnTop: !1,
      closeOnClick: !1,
      rtl: !1,
      pauseOnFocusLoss: !0,
      draggable: !1,
      pauseOnHover: !0,
      closeButton: !1,
      transition: he,
      toastClassName: Ae(
        "text-sm",
        "mobile:top-[82px]",
        "w-full mobile:w-[375px] tablet:w-[688px]",
        "left-1/2 -translate-x-1/2"
      )
    }
  );
}
var G = "moonpay-react-sdk-embedded-frame", Ee = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: a,
  signature: i
}) => {
  const {
    // params
    currencyCode: c,
    defaultCurrencyCode: s,
    walletAddress: l,
    walletAddressTag: d,
    walletAddresses: p,
    walletAddressTags: m,
    colorCode: u,
    theme: y,
    themeId: g,
    language: w,
    baseCurrencyCode: v,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: x,
    lockAmount: S,
    email: A,
    externalTransactionId: P,
    externalCustomerId: k,
    paymentMethod: E,
    redirectURL: T,
    showAllCurrencies: R,
    showOnlyCurrencies: I,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: M,
    skipUnsupportedRegionScreen: D,
    baseOrigin: O,
    // handlers
    onAuthToken: U,
    onInitiateDeposit: B,
    onKmsWalletsCreated: j,
    onLogin: N,
    onTransactionCompleted: L,
    onUnsupportedRegion: z,
    onSwapsCustomerSetupComplete: F,
    onCloseOverlay: _,
    onTransactionCreated: $,
    // auth
    auth: K,
    useWarnBeforeRefresh: V,
    // other
    overlayNode: Y
  } = e, q = {
    apiKey: t,
    signature: i,
    currencyCode: c,
    defaultCurrencyCode: s,
    walletAddress: l,
    walletAddressTag: d,
    walletAddresses: p,
    walletAddressTags: m,
    colorCode: u,
    theme: y,
    themeId: g,
    language: w,
    baseCurrencyCode: v,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: x,
    lockAmount: S,
    email: A,
    externalTransactionId: P,
    externalCustomerId: k,
    paymentMethod: E,
    redirectURL: T,
    showAllCurrencies: R,
    showOnlyCurrencies: I,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: M,
    skipUnsupportedRegionScreen: D,
    baseOrigin: O
  }, H = {
    onAuthToken: U,
    onInitiateDeposit: B,
    onKmsWalletsCreated: j,
    onLogin: N,
    onTransactionCompleted: L,
    onUnsupportedRegion: z,
    onSwapsCustomerSetupComplete: F,
    onCloseOverlay: _,
    onTransactionCreated: $
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: a,
    params: q,
    debug: n,
    handlers: H,
    auth: K,
    useWarnBeforeRefresh: V,
    containerNodeSelector: `#${G}`,
    overlayNode: Y
  };
}, Te = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: a,
  signature: i
}) => {
  const {
    // params
    quoteCurrencyCode: c,
    defaultCurrencyCode: s,
    defaultBaseCurrencyCode: l,
    walletAddress: d,
    walletAddressTag: p,
    walletAddresses: m,
    walletAddressTags: u,
    colorCode: y,
    theme: g,
    themeId: w,
    language: v,
    baseCurrencyCode: b,
    baseCurrencyAmount: x,
    quoteCurrencyAmount: S,
    lockAmount: A,
    email: P,
    externalTransactionId: k,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: R,
    showAllCurrencies: I,
    showOnlyCurrencies: W,
    showWalletAddressForm: M,
    unsupportedRegionRedirectUrl: D,
    skipUnsupportedRegionScreen: O,
    mpWalletId: U,
    baseOrigin: B,
    // handlers
    onAuthToken: j,
    onInitiateDeposit: N,
    onKmsWalletsCreated: L,
    onLogin: z,
    onTransactionCompleted: F,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: $,
    onCloseOverlay: K,
    onTransactionCreated: V,
    // auth
    auth: Y,
    useWarnBeforeRefresh: q
  } = e, H = {
    apiKey: t,
    signature: i,
    quoteCurrencyCode: c,
    defaultCurrencyCode: s,
    defaultBaseCurrencyCode: l,
    walletAddress: d,
    walletAddressTag: p,
    walletAddresses: m,
    walletAddressTags: u,
    colorCode: y,
    theme: g,
    themeId: w,
    language: v,
    baseCurrencyCode: b,
    baseCurrencyAmount: x,
    quoteCurrencyAmount: S,
    lockAmount: A,
    email: P,
    externalTransactionId: k,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: R,
    showAllCurrencies: I,
    showOnlyCurrencies: W,
    showWalletAddressForm: M,
    unsupportedRegionRedirectUrl: D,
    skipUnsupportedRegionScreen: O,
    mpWalletId: U,
    baseOrigin: B
  }, le = {
    onAuthToken: j,
    onInitiateDeposit: N,
    onKmsWalletsCreated: L,
    onLogin: z,
    onTransactionCompleted: F,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: $,
    onCloseOverlay: K,
    onTransactionCreated: V
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: a,
    params: H,
    debug: n,
    handlers: le,
    auth: Y,
    useWarnBeforeRefresh: q,
    containerNodeSelector: `#${G}`
  };
};
async function Re(e = "v1") {
  return new Promise((t, n) => {
    const a = `https://static.moonpay.com/web-sdk/${e}/moonpay-web-sdk.min.js`, i = document.querySelector(`script[src="${a}"]`), c = (s = 0) => {
      if (window.MoonPayWebSdk) {
        t(window.MoonPayWebSdk.init);
        return;
      }
      if (s > 100) {
        n(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => c(s + 1), 100);
    };
    if (i)
      c();
    else {
      const s = document.createElement("script");
      s.async = !0, s.src = a, s.addEventListener("load", () => {
        var l;
        t((l = window.MoonPayWebSdk) == null ? void 0 : l.init);
      }), s.addEventListener("error", () => {
        n(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(s);
    }
  });
}
function Ie(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var J = () => {
}, We = {
  info: J,
  warn: J,
  error: J
}, Me = class se {
  constructor({
    logger: t,
    prefix: n
  }) {
    h(this, "prefix");
    h(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new se({ logger: We });
  }
  info(...t) {
    this.logger.info(`[${this.prefix}]`, ...t);
  }
  warn(...t) {
    this.logger.warn(`[${this.prefix}]`, ...t);
  }
  error(...t) {
    this.logger.error(`[${this.prefix}]`, ...t);
  }
}, C = o.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), De = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const a = Ie(t), [i, c] = o.useState({
    apiKey: t,
    environment: a,
    debug: n
  }), s = o.useCallback(async () => {
    const l = await Re();
    c((d) => ({ ...d, init: l }));
  }, []);
  return o.useEffect(() => {
    i.init || s();
  }, [s, i.init]), /* @__PURE__ */ r.jsx(C.Provider, { value: i, children: e });
}, Oe = class extends Me {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Ue = (e, t, n) => {
  const a = o.useRef(null), { init: i, debug: c } = o.useContext(C), s = o.useRef(new Oe().if(c || !1)), l = o.useCallback(async () => {
    var d, p;
    if (a.current) {
      if (!n && ("walletAddress" in e || "walletAddresses" in e) && s.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), n) {
        const m = a.current.generateUrlForSigning();
        try {
          const u = await (n == null ? void 0 : n(m));
          if (!u)
            return;
          (d = a.current) == null || d.updateSignature(u);
        } catch (u) {
          s.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            u
          );
        }
      }
      t && ((p = a.current) == null || p.show());
    }
  }, [n, t, e]);
  o.useEffect(() => {
    a.current && a.current.close();
    const d = (i == null ? void 0 : i(e)) || null;
    a.current = d, l();
  }, [i, e, l]);
}, Be = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function ie({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: a,
  style: i
}) {
  return Ue(e, n, t), n ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: G,
      className: a,
      style: e.variant === "embedded" ? {
        ...Be,
        ...i
      } : void 0
    }
  ) : null;
}
function pt(e) {
  const { apiKey: t, environment: n } = o.useContext(C), a = o.useMemo(
    () => Ee({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ r.jsx(
    ie,
    {
      config: a,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function mt(e) {
  const { apiKey: t, environment: n } = o.useContext(C), a = o.useMemo(
    () => Te({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ r.jsx(
    ie,
    {
      config: a,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const je = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function Ne({ children: e }) {
  return /* @__PURE__ */ r.jsx(
    De,
    {
      apiKey: je,
      debug: !0,
      children: e
    }
  );
}
const Le = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, ze = {
  pairModal: {
    title: "Connect Account",
    instructions: "To pair your wallet with the DApp using WalletConnect, please follow these steps:",
    steps: {
      1: "Visit the Dapp website",
      2: 'Look for a "Connect Wallet" or similar option',
      3: 'Choose "WalletConnect" as the connection method',
      4: "Copy the provided WalletConnect URI",
      "5a": "Paste the URI in the input field below",
      "5b": "Return to this page - the URI will be automatically detected and processed"
    },
    clipboardError: "Clipboard access denied. To use this feature, please click the lock icon to the left of the address bar, find the 'Clipboard' option, set it to 'Allow', then refresh the page.",
    goToDapp: "Go to the Dapp",
    enterUri: "Enter URI",
    pair: "Pair"
  },
  connectDApps: "Connect dApps",
  disconnectSession: "Disconnect Session",
  connectAccount: "Connect Account",
  reject: "Reject",
  approve: "Approve",
  confirmTransfer: "Confirm Transfer",
  reviewTransferDetails: "Please review the transfer details below",
  from: "From:",
  to: "To:",
  amount: "Amount:",
  data: "Data:",
  confirm: "Confirm",
  connectionSuccess: "Connected successfully.",
  transferFailed: "Transfer failed",
  transferRejected: "Transfer rejected",
  disconnected: "Disconnected"
}, Fe = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, _e = {
  authenticationError: "Authentication Error. Please sign in again."
}, $e = {
  "/": {
    signinTitle: "Let’s sign in your account",
    signupTitle: "Let’s sign up your account",
    emailLabel: "Email",
    emailPlaceholder: "Email Address",
    emailValidationError: "Email is invalid or not found. Please check and try again.",
    signUpButton: "Sign Up",
    signInButton: "Sign In",
    authenticating: "Authenticating...",
    registering: "Registering...",
    alreadyHaveAccount: "Already have an account? Sign in here",
    signUp: "Don’t have an account yet? Sign up here",
    otpSentMessage: "A sign up link will be sent to your email. Please check your inbox and click the link to sign in.",
    otpLoginSentMessage: "A login link will be sent to your email. Please check your inbox and click the link to sign in.",
    emailAlreadySignedUp: "This email address is already signed up. Please use a different email to sign up."
  },
  "/dashboard": {
    userWallet: {
      syncTitle: "Sync"
    },
    "[token]": {
      balance: "Balance",
      recentTransactions: {
        title: "Recent Transactions",
        seeAll: "See all",
        table: {
          transactionHash: "Transaction Hash",
          time: "Time",
          from: "From",
          to: "To",
          amount: "Amount"
        },
        noTransactions: "No transactions to display"
      },
      sendModal: {
        title: "Send",
        to: "To",
        toPlaceholder: "Address or Email",
        amount: "Amount",
        note: "Note",
        balance: "Balance",
        unregisteredEmailNotice: "The recipient will receive an invitation email.",
        invalidEmailFormat: "Invalid email format",
        emailSentToUnregistered: "An invitation email has been sent",
        sendError: "An error occurred while sending. Please try again."
      },
      receiveModal: {
        title: "Receive",
        Crypto: "Crypto Address",
        Email: "Email Address"
      }
    }
  },
  header: Le,
  "/marketplace": {
    tabs: {
      all: "All Products",
      purchased: "Added Products"
    },
    productCard: {
      status: {
        active: "Active",
        deleted: "Deleted"
      },
      price: "Price",
      currency: "TVWT",
      discount: "Discount",
      purchased: "Added",
      deleted: "Uninstalled",
      buttons: {
        purchase: "Install",
        purchased: "Added",
        delete: "Uninstall",
        deleted: "Uninstalled"
      },
      deleteConfirmation: {
        title: "Confirmation",
        message: "Are you sure you want to uninstall this item?",
        cancel: "Cancel",
        confirm: "Uninstall"
      },
      purchaseSuccess: "Product purchased successfully",
      insufficientBalance: "Insufficient balance",
      dailyLimitExceededOtpRequired: "Daily limit exceeded. Check your email for OTP. DO NOT close this dialog to complete your purchase."
    },
    moonpayRamp: {
      modalTitle: "MoonPay on-ramp / off-ramp",
      buyButton: "Buy Crypto with Fiat",
      sellButton: "Sell Crypto for Fiat",
      buy: "Buy",
      sell: "Sell",
      openCryptoExchange: "Open MoonPay",
      depositConfirmation: {
        title: "Confirm Deposit",
        message: "Are you sure you want to initiate this deposit?",
        confirmButton: "Confirm",
        cancelButton: "Cancel"
      }
    }
  },
  vastWalletConnect: ze,
  toastSuccess: Fe,
  toastError: _e
}, Ke = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Ve = {
  pairModal: {
    title: "连接账户",
    instructions: "要使用 WalletConnect 将您的钱包与 DApp 配对，请按照以下步骤操作：",
    steps: {
      1: "访问 Dapp 网站",
      2: '寻找"连接钱包"或类似选项',
      3: '选择"WalletConnect"作为连接方式',
      4: "复制提供的 WalletConnect URI",
      "5a": "将 URI 粘贴到下面的输入框中",
      "5b": "返回此页面 - URI 将被自动检测和处理"
    },
    clipboardError: '剪贴板访问被拒绝。要使用此功能，请点击地址栏左侧的锁定图标，找到"剪贴板"选项，将其设置为"允许"，然后刷新页面。',
    goToDapp: "前往 Dapp",
    enterUri: "输入 URI",
    pair: "配对"
  },
  connectDApps: "连接 dApps",
  disconnectSession: "断开会话",
  connectAccount: "连接账户",
  reject: "拒绝",
  approve: "批准",
  confirmTransfer: "确认转账",
  reviewTransferDetails: "请检查以下转账详情",
  from: "从：",
  to: "到：",
  amount: "金额：",
  data: "数据：",
  confirm: "确认",
  connectionSuccess: "连接成功。",
  transferFailed: "转账失败",
  transferRejected: "转账被拒绝",
  disconnected: "已断开连接"
}, Ye = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, qe = {
  authenticationError: "认证错误，请重新登录。"
}, He = {
  "/": {
    signinTitle: "让我们登录您的账户",
    signupTitle: "让我们注册您的账户",
    emailLabel: "电子邮箱",
    emailPlaceholder: "请输入电子邮箱地址",
    emailValidationError: "邮箱格式不正确或不存在。请检查后重试。",
    signUpButton: "注册",
    signInButton: "登录",
    authenticating: "正在认证...",
    registering: "正在注册...",
    alreadyHaveAccount: "已有账户？请点击这里登录",
    signUp: "还没有账户？请点击这里注册",
    otpSentMessage: "注册链接将发送至您的电子邮箱。请查收并点击链接以完成注册。",
    otpLoginSentMessage: "登录链接将发送至您的邮箱。请查收并点击链接以完成登录。",
    emailAlreadySignedUp: "该电子邮箱已注册。请使用其他邮箱进行注册。"
  },
  "/dashboard": {
    userWallet: {
      syncTitle: "同步"
    },
    "[token]": {
      balance: "余额",
      recentTransactions: {
        title: "最近交易",
        seeAll: "查看全部",
        table: {
          transactionHash: "交易哈希",
          time: "时间",
          from: "发送方",
          to: "接收方",
          amount: "金额"
        },
        noTransactions: "暂无交易记录"
      },
      sendModal: {
        title: "发送",
        to: "接收方",
        toPlaceholder: "地址或邮箱",
        amount: "金额",
        note: "备注",
        balance: "余额",
        invalidEmailOrAddress: "无效的邮箱或地址格式",
        invalidAddress: "无效地址。请检查后重试",
        unregisteredEmailNotice: "收件人将收到一封邀请邮件。",
        invalidEmailFormat: "邮箱格式不正确",
        emailSentToUnregistered: "已发送邀请邮件",
        sendError: "发送时出错。请重试"
      },
      receiveModal: {
        title: "接收",
        Crypto: "加密货币地址",
        Email: "电子邮件地址"
      }
    }
  },
  header: Ke,
  "/marketplace": {
    tabs: {
      all: "所有产品",
      purchased: "已安装产品"
    },
    productCard: {
      status: {
        active: "已激活",
        deleted: "已卸载"
      },
      price: "价格",
      currency: "TVWT",
      discount: "折扣",
      purchased: "安装时间",
      deleted: "卸载时间",
      buttons: {
        purchase: "安装",
        purchased: "已安装",
        delete: "卸载",
        deleted: "已卸载"
      },
      deleteConfirmation: {
        title: "确认卸载",
        message: "您确定要卸载此项目吗？",
        cancel: "取消",
        confirm: "卸载"
      },
      purchaseSuccess: "购买成功",
      insufficientBalance: "余额不足",
      dailyLimitExceededOtpRequired: "已超出每日限额。请查看邮箱获取验证码。请勿关闭此窗口，以完成购买。"
    },
    moonpayRamp: {
      modalTitle: "加密货币交易",
      buyButton: "用法币购买加密货币",
      sellButton: "出售加密货币换取法币",
      buy: "购买",
      sell: "出售",
      openCryptoExchange: "打开加密货币交易",
      depositConfirmation: {
        title: "确认存款",
        message: "您确定要开始这笔存款吗？",
        confirmButton: "确认",
        cancelButton: "取消"
      }
    }
  },
  vastWalletConnect: Ve,
  toastSuccess: Ye,
  toastError: qe
}, Je = {
  en: {
    translation: $e
  },
  zh: {
    translation: He
  }
};
ae("savedLng", oe);
const Ze = oe.getData();
te.use(fe).init({
  resources: Je,
  lng: Ze || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function Ge() {
  return /* @__PURE__ */ r.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ r.jsx(o.Suspense, { children: /* @__PURE__ */ r.jsx(Ce, { i18n: te, children: /* @__PURE__ */ r.jsxs(Se, { children: [
    /* @__PURE__ */ r.jsx(Ne, { children: /* @__PURE__ */ r.jsx(ge, { router: xe }) }),
    /* @__PURE__ */ r.jsx(ke, {})
  ] }) }) }) });
}
const Qe = "theme_light", Xe = "0.0.0", et = "module", tt = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, nt = {
  "@fontsource/roboto": "^5.1.0",
  "@fontsource/roboto-mono": "^5.1.0",
  "@moonpay/moonpay-react": "^1.8.2",
  "@radix-ui/react-checkbox": "^1.1.2",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.2",
  "@radix-ui/react-label": "^2.1.0",
  "@radix-ui/react-popover": "^1.1.2",
  "@radix-ui/react-select": "^2.1.2",
  "@radix-ui/react-slot": "^1.1.0",
  "@radix-ui/react-tabs": "^1.1.1",
  "@radix-ui/react-tooltip": "^1.1.3",
  "@walletconnect/core": "^2.17.1",
  "@walletconnect/types": "^2.17.1",
  "@walletconnect/utils": "^2.17.1",
  "@walletconnect/web3wallet": "^1.16.1",
  "@web3auth/base": "^9.3.0",
  "@web3auth/ethereum-mpc-provider": "^9.3.0",
  "@web3auth/mpc-core-kit": "^3.2.4",
  axios: "^1.7.7",
  "class-variance-authority": "^0.7.0",
  clsx: "^2.1.1",
  cmdk: "1.0.0",
  "date-fns": "^4.1.0",
  i18next: "^23.16.2",
  "lucide-react": "^0.453.0",
  nprogress: "^0.2.0",
  react: "^18.3.1",
  "react-chatbotify": "2.0.0-beta.21",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.3.1",
  "react-i18next": "^15.1.0",
  "react-qr-code": "^2.0.15",
  "react-router-dom": "^6.27.0",
  "react-toastify": "^10.0.6",
  "tailwind-merge": "^2.5.4",
  "tailwind-scrollbar-hide": "^1.1.7",
  "tailwindcss-animate": "^1.0.7",
  uuid: "^10.0.0",
  viem: "^2.21.32"
}, at = {
  "@eslint/js": "^9.11.1",
  "@types/nprogress": "^0.2.3",
  "@types/react": "^18.3.10",
  "@types/react-copy-to-clipboard": "^5.0.7",
  "@types/react-dom": "^18.3.0",
  "@types/uuid": "^10.0.0",
  "@vitejs/plugin-react": "^4.3.2",
  autoprefixer: "^10.4.20",
  eslint: "^9.11.1",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.12",
  globals: "^15.9.0",
  postcss: "^8.4.47",
  "rollup-plugin-visualizer": "^5.12.0",
  tailwindcss: "^3.4.14",
  typescript: "^5.5.3",
  "typescript-eslint": "^8.7.0",
  vite: "^5.4.8",
  "vite-plugin-node-polyfills": "^0.22.0"
}, ot = {
  name: Qe,
  private: !0,
  version: Xe,
  type: et,
  scripts: tt,
  dependencies: nt,
  devDependencies: at
};
ae("isDev", re);
function X(e) {
  const t = Z(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ r.jsx(Ge, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
re ? X("root") : typeof window < "u" && (window[`mount_${ot.name}`] = X);
export {
  Pe as C,
  pt as M,
  ae as a,
  mt as b,
  Ae as c,
  ut as e,
  oe as l,
  X as m,
  dt as u
};
