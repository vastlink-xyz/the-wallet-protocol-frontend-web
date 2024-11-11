var me = Object.defineProperty;
var ge = (e, t, n) => t in e ? me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => ge(e, typeof t != "symbol" ? t + "" : t, n);
import { j as s } from "./vendor-radix-CtBTfL6E.js";
import { p as ae, a as he, u as ye, r, e as fe, f as we } from "./vendor-react-lU71vM3H.js";
import { a as re, B as Ce, Q as ve, X as be, i as oe, b as xe, I as Ae } from "./vendor-utils-CKvC_yGz.js";
import { t as Se, c as Pe } from "./vendor-ui-utils-i3zS6aVb.js";
var G, w = he;
if (ae.env.NODE_ENV === "production")
  G = w.createRoot, w.hydrateRoot;
else {
  var te = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  G = function(e, t) {
    te.usingClientEntryPoint = !0;
    try {
      return w.createRoot(e, t);
    } finally {
      te.usingClientEntryPoint = !1;
    }
  };
}
function ke() {
  const e = ye();
  return console.error(e), /* @__PURE__ */ s.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ s.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ s.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ s.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ s.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
const Q = console.log.bind(console, "🚀");
function Ee(...e) {
  return Se(Pe(e));
}
class p {
  constructor(t) {
    y(this, "isClient");
    y(this, "key");
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
const se = new p("language");
class Te {
  constructor() {
    y(this, "storages");
    this.storages = {
      idToken: new p("idToken"),
      username: new p("username"),
      displayName: new p("displayName"),
      avatarIndex: new p("avatarIndex"),
      address: new p("address"),
      authenticatedHeader: new p("authenticatedHeader"),
      authenticated: new p("authenticated"),
      desUsername: new p("desUsername"),
      aeskey: new p("aeskey")
    };
  }
  saveAuthDataByKey(t, n) {
    return this.storages[t].setData(n);
  }
  getAuthDataByKey(t) {
    return this.storages[t].getData();
  }
  removeAuthDataByKey(t) {
    this.storages[t].remove();
  }
  clearAllAuthData() {
    for (const t in this.storages)
      this.storages.hasOwnProperty(t) && this.storages[t].remove();
  }
  all() {
    const t = {};
    for (const n in this.storages)
      this.storages.hasOwnProperty(n) && (t[n] = this.storages[n].getData());
    return t;
  }
  isAuthenticated() {
    return !!this.getAuthDataByKey("idToken");
  }
  getUserRandomAvatar() {
    const t = this.getAuthDataByKey("avatarIndex");
    return t ? `/static/avatars/${t}.svg` : "/static/avatars/1.svg";
  }
}
const ie = new Te(), wt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ce = ae.env.NODE_ENV === "development";
function Re(e) {
  var t;
  if (re.isAxiosError(e)) {
    const n = e;
    return n.response ? { message: `${((t = n.response.data) == null ? void 0 : t.message) || n.message}` } : n.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${n.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
function Ct({
  total: e = 0,
  pageSize: t = 30
} = {}) {
  const [n, a] = r.useState({
    current: 1,
    total: e,
    pageSize: t
  });
  return {
    pagination: n,
    handlePageChange: (i) => {
      Q("handlePageChange", i), a((l) => ({
        ...l,
        current: i
      }));
    },
    updateTotal: (i) => {
      a((l) => ({
        ...l,
        total: i
      }));
    },
    updatePageSize: (i) => {
      a((l) => ({
        ...l,
        pageSize: i,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const De = 30, X = re.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com"
});
X.interceptors.request.use(
  (e) => {
    const t = ie.all().idToken;
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
X.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const a = e.response.data.message || "Authentication error";
      console.log(`${a}, redirecting to login...`), ie.clearAllAuthData(), typeof window < "u" && (Ce.error(a), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
const Ie = async () => {
  try {
    const e = await X.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: De
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = Re(e);
    throw new Error(t.message);
  }
}, We = fe([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-anyOBwaT.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ s.jsx(ke, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-U75nH_Gd.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-Dwb2tF1E.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-CWkPzlbP.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-dyBGtH9t.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-CsrA1O9d.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-B6kwdP28.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-DL0upXs3.js");
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
                  const { default: e } = await import("./page-5ew8pjqt.js");
                  return { Component: e };
                },
                loader: Ie
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-B03B8tdi.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-DFJmQ0gO.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-IOaJYgzd.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-fDT3i8ea.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-6Iwzke8a.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-DjwyZpuc.js");
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
                          const { default: e } = await import("./page-CxA_4SS4.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-1mQYHZYG.js");
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
                  const { default: e } = await import("./page-BUmGT9wu.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-C2hSdam5.js");
                  return { Component: e };
                }
              }
            ]
          }
        ]
      }
    ]
  }
]), le = r.createContext(void 0), Me = ({ children: e }) => {
  const [t, n] = r.useState(!1), [a, c] = r.useState(!1), [u, o] = r.useState({ name: "", url: "" }), [i, l] = r.useState(!1), [m, g] = r.useState(), d = r.useRef(), f = (h) => {
    g(h), d.current = h;
  };
  return /* @__PURE__ */ s.jsx(le.Provider, { value: {
    isModalOpen: t,
    setIsModalOpen: n,
    displayUriInput: a,
    setDisplayUriInput: c,
    dappInfo: u,
    setDappInfo: o,
    isConnected: i,
    setIsConnected: l,
    web3wallet: m,
    setWeb3Wallet: f,
    web3walletRef: d
  }, children: e });
}, vt = () => r.useContext(le);
function Be() {
  const [e, t] = r.useState(!1);
  return r.useEffect(() => {
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(n);
  }, []), /* @__PURE__ */ s.jsx(
    ve,
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
      transition: be,
      toastClassName: Ee(
        "text-sm",
        "mobile:top-[82px]",
        "max-w-full mobile:max-w-[375px] tablet:max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var ee = "moonpay-react-sdk-embedded-frame", Ue = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: a,
  signature: c
}) => {
  const {
    // params
    currencyCode: u,
    defaultCurrencyCode: o,
    walletAddress: i,
    walletAddressTag: l,
    walletAddresses: m,
    walletAddressTags: g,
    colorCode: d,
    theme: f,
    themeId: h,
    language: v,
    baseCurrencyCode: b,
    baseCurrencyAmount: x,
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: P,
    externalTransactionId: k,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: R,
    showAllCurrencies: D,
    showOnlyCurrencies: I,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: M,
    skipUnsupportedRegionScreen: B,
    baseOrigin: U,
    // handlers
    onAuthToken: O,
    onInitiateDeposit: N,
    onKmsWalletsCreated: j,
    onLogin: L,
    onTransactionCompleted: z,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: F,
    onCloseOverlay: $,
    onTransactionCreated: K,
    // auth
    auth: q,
    useWarnBeforeRefresh: H,
    // other
    overlayNode: V
  } = e, Y = {
    apiKey: t,
    signature: c,
    currencyCode: u,
    defaultCurrencyCode: o,
    walletAddress: i,
    walletAddressTag: l,
    walletAddresses: m,
    walletAddressTags: g,
    colorCode: d,
    theme: f,
    themeId: h,
    language: v,
    baseCurrencyCode: b,
    baseCurrencyAmount: x,
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: P,
    externalTransactionId: k,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: R,
    showAllCurrencies: D,
    showOnlyCurrencies: I,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: M,
    skipUnsupportedRegionScreen: B,
    baseOrigin: U
  }, J = {
    onAuthToken: O,
    onInitiateDeposit: N,
    onKmsWalletsCreated: j,
    onLogin: L,
    onTransactionCompleted: z,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: F,
    onCloseOverlay: $,
    onTransactionCreated: K
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: a,
    params: Y,
    debug: n,
    handlers: J,
    auth: q,
    useWarnBeforeRefresh: H,
    containerNodeSelector: `#${ee}`,
    overlayNode: V
  };
}, Oe = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: a,
  signature: c
}) => {
  const {
    // params
    quoteCurrencyCode: u,
    defaultCurrencyCode: o,
    defaultBaseCurrencyCode: i,
    walletAddress: l,
    walletAddressTag: m,
    walletAddresses: g,
    walletAddressTags: d,
    colorCode: f,
    theme: h,
    themeId: v,
    language: b,
    baseCurrencyCode: x,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: P,
    email: k,
    externalTransactionId: E,
    externalCustomerId: T,
    paymentMethod: R,
    redirectURL: D,
    showAllCurrencies: I,
    showOnlyCurrencies: W,
    showWalletAddressForm: M,
    unsupportedRegionRedirectUrl: B,
    skipUnsupportedRegionScreen: U,
    mpWalletId: O,
    baseOrigin: N,
    // handlers
    onAuthToken: j,
    onInitiateDeposit: L,
    onKmsWalletsCreated: z,
    onLogin: _,
    onTransactionCompleted: F,
    onUnsupportedRegion: $,
    onSwapsCustomerSetupComplete: K,
    onCloseOverlay: q,
    onTransactionCreated: H,
    // auth
    auth: V,
    useWarnBeforeRefresh: Y
  } = e, J = {
    apiKey: t,
    signature: c,
    quoteCurrencyCode: u,
    defaultCurrencyCode: o,
    defaultBaseCurrencyCode: i,
    walletAddress: l,
    walletAddressTag: m,
    walletAddresses: g,
    walletAddressTags: d,
    colorCode: f,
    theme: h,
    themeId: v,
    language: b,
    baseCurrencyCode: x,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: P,
    email: k,
    externalTransactionId: E,
    externalCustomerId: T,
    paymentMethod: R,
    redirectURL: D,
    showAllCurrencies: I,
    showOnlyCurrencies: W,
    showWalletAddressForm: M,
    unsupportedRegionRedirectUrl: B,
    skipUnsupportedRegionScreen: U,
    mpWalletId: O,
    baseOrigin: N
  }, pe = {
    onAuthToken: j,
    onInitiateDeposit: L,
    onKmsWalletsCreated: z,
    onLogin: _,
    onTransactionCompleted: F,
    onUnsupportedRegion: $,
    onSwapsCustomerSetupComplete: K,
    onCloseOverlay: q,
    onTransactionCreated: H
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: a,
    params: J,
    debug: n,
    handlers: pe,
    auth: V,
    useWarnBeforeRefresh: Y,
    containerNodeSelector: `#${ee}`
  };
};
async function Ne(e = "v1") {
  return new Promise((t, n) => {
    const a = `https://static.moonpay.com/web-sdk/${e}/moonpay-web-sdk.min.js`, c = document.querySelector(`script[src="${a}"]`), u = (o = 0) => {
      if (window.MoonPayWebSdk) {
        t(window.MoonPayWebSdk.init);
        return;
      }
      if (o > 100) {
        n(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => u(o + 1), 100);
    };
    if (c)
      u();
    else {
      const o = document.createElement("script");
      o.async = !0, o.src = a, o.addEventListener("load", () => {
        var i;
        t((i = window.MoonPayWebSdk) == null ? void 0 : i.init);
      }), o.addEventListener("error", () => {
        n(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(o);
    }
  });
}
function je(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var Z = () => {
}, Le = {
  info: Z,
  warn: Z,
  error: Z
}, ze = class ue {
  constructor({
    logger: t,
    prefix: n
  }) {
    y(this, "prefix");
    y(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new ue({ logger: Le });
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
}, C = r.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), _e = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const a = je(t), [c, u] = r.useState({
    apiKey: t,
    environment: a,
    debug: n
  }), o = r.useCallback(async () => {
    const i = await Ne();
    u((l) => ({ ...l, init: i }));
  }, []);
  return r.useEffect(() => {
    c.init || o();
  }, [o, c.init]), /* @__PURE__ */ s.jsx(C.Provider, { value: c, children: e });
}, Fe = class extends ze {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, $e = (e, t, n) => {
  const a = r.useRef(null), { init: c, debug: u } = r.useContext(C), o = r.useRef(new Fe().if(u || !1)), i = r.useCallback(async () => {
    var l, m;
    if (a.current) {
      if (!n && ("walletAddress" in e || "walletAddresses" in e) && o.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), n) {
        const g = a.current.generateUrlForSigning();
        try {
          const d = await (n == null ? void 0 : n(g));
          if (!d)
            return;
          (l = a.current) == null || l.updateSignature(d);
        } catch (d) {
          o.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            d
          );
        }
      }
      t && ((m = a.current) == null || m.show());
    }
  }, [n, t, e]);
  r.useEffect(() => {
    a.current && a.current.close();
    const l = (c == null ? void 0 : c(e)) || null;
    a.current = l, i();
  }, [c, e, i]);
}, Ke = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function de({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: a,
  style: c
}) {
  return $e(e, n, t), n ? /* @__PURE__ */ s.jsx(
    "div",
    {
      id: ee,
      className: a,
      style: e.variant === "embedded" ? {
        ...Ke,
        ...c
      } : void 0
    }
  ) : null;
}
function bt(e) {
  const { apiKey: t, environment: n } = r.useContext(C), a = r.useMemo(
    () => Ue({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ s.jsx(
    de,
    {
      config: a,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function xt(e) {
  const { apiKey: t, environment: n } = r.useContext(C), a = r.useMemo(
    () => Oe({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ s.jsx(
    de,
    {
      config: a,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const qe = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function He({ children: e }) {
  return /* @__PURE__ */ s.jsx(
    _e,
    {
      apiKey: qe,
      debug: !0,
      children: e
    }
  );
}
const Ve = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, Ye = {
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
}, Je = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, Ze = {
  authenticationError: "Authentication Error. Please sign in again."
}, Ge = {
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
        to: "Crypto address or email address",
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
  header: Ve,
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
  vastWalletConnect: Ye,
  toastSuccess: Je,
  toastError: Ze
}, Qe = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Xe = {
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
}, et = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, tt = {
  authenticationError: "认证错误，请重新登录。"
}, nt = {
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
          to: "加密货币地址或邮箱地址",
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
  header: Qe,
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
  vastWalletConnect: Xe,
  toastSuccess: et,
  toastError: tt
}, at = {
  en: {
    translation: Ge
  },
  zh: {
    translation: nt
  }
};
Q("savedLng", se);
const rt = se.getData();
oe.use(xe).init({
  resources: at,
  lng: rt || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function ot() {
  return /* @__PURE__ */ s.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ s.jsx(r.Suspense, { children: /* @__PURE__ */ s.jsx(Ae, { i18n: oe, children: /* @__PURE__ */ s.jsxs(Me, { children: [
    /* @__PURE__ */ s.jsx(He, { children: /* @__PURE__ */ s.jsx(we, { router: We }) }),
    /* @__PURE__ */ s.jsx(Be, {})
  ] }) }) }) });
}
const st = "theme_light", it = "0.0.0", ct = "module", lt = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, ut = {
  "@fontsource/asap": "^5.0.0",
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
  antd: "^5.21.6",
  axios: "^1.7.7",
  "class-variance-authority": "^0.7.0",
  clsx: "^2.1.1",
  cmdk: "1.0.0",
  "date-fns": "^4.1.0",
  i18next: "^23.16.2",
  "lucide-react": "^0.453.0",
  nprogress: "^0.2.0",
  "qrcode.react": "^4.1.0",
  react: "^18.3.1",
  "react-chatbotify": "2.0.0-beta.21",
  "react-copy-to-clipboard": "^5.1.0",
  "react-dom": "^18.3.1",
  "react-i18next": "^15.1.0",
  "react-qr-code": "^2.0.15",
  "react-router-dom": "^6.27.0",
  "react-toastify": "^10.0.6",
  recharts: "^2.13.3",
  "tailwind-merge": "^2.5.4",
  "tailwind-scrollbar-hide": "^1.1.7",
  "tailwindcss-animate": "^1.0.7",
  uuid: "^10.0.0",
  viem: "^2.21.32"
}, dt = {
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
  "vite-plugin-imp": "^2.4.0",
  "vite-plugin-node-polyfills": "^0.22.0"
}, pt = {
  name: st,
  private: !0,
  version: it,
  type: ct,
  scripts: lt,
  dependencies: ut,
  devDependencies: dt
};
Q("isDev", ce);
function ne(e) {
  const t = G(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ s.jsx(ot, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
ce ? ne("root") : typeof window < "u" && (window[`mount_${pt.name}`] = ne);
export {
  De as D,
  bt as M,
  ie as a,
  Q as b,
  Ee as c,
  X as d,
  wt as e,
  Ct as f,
  xt as g,
  Re as h,
  se as l,
  ne as m,
  vt as u
};
