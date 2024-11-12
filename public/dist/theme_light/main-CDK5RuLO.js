var Bt = Object.defineProperty;
var Dt = (e, t, a) => t in e ? Bt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a;
var R = (e, t, a) => Dt(e, typeof t != "symbol" ? t + "" : t, a);
import { j as o, S as Lt, d as Qe, g as Ye, P as Ot, C as Ge, I as qe, i as Xe, k as Ze, l as Je, L as et, m as tt, n as Ut, T as zt, o as at, p as st, q as nt, r as Ft } from "./vendor-radix-BcySUdtt.js";
import { p as rt, b as ot, a as f, c as it, R as B, O as Wt, u as _t, f as Ht, h as $t } from "./vendor-react-BdtkaT_f.js";
import { t as Vt, c as Kt, C as Qt, a as Yt, b as Gt, d as qt, e as Xt, X as lt, L as Zt, f as De, g as Jt, h as ea } from "./vendor-ui-utils-D5jysYH4.js";
import { a as ie, u as Ae, C as ta, B as ae, Q as aa, X as sa, i as ct, b as na, I as ra } from "./vendor-utils-CISROZyj.js";
import { d as dt, C as Le, c as pe, f as Te, h as Se, E as oa, m as ia, a as la, b as Oe, i as Ue, p as ze } from "./vendor-web3-CfO0z015.js";
var ge, le = ot;
if (rt.env.NODE_ENV === "production")
  ge = le.createRoot, le.hydrateRoot;
else {
  var Fe = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ge = function(e, t) {
    Fe.usingClientEntryPoint = !0;
    try {
      return le.createRoot(e, t);
    } finally {
      Fe.usingClientEntryPoint = !1;
    }
  };
}
const q = console.log.bind(console, "🚀");
function w(...e) {
  return Vt(Kt(e));
}
class $ {
  constructor(t) {
    R(this, "isClient");
    R(this, "key");
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
        const a = JSON.stringify(t);
        return localStorage.setItem(this.key, a), !0;
      } catch (a) {
        return console.error("Failed to stringify object", a), !1;
      }
    return !1;
  }
  getData() {
    if (this.isClient) {
      const t = localStorage.getItem(this.key);
      if (t)
        try {
          return JSON.parse(t);
        } catch (a) {
          return console.error("Failed to parse JSON", a), null;
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
const ut = new $("language");
class ca {
  constructor() {
    R(this, "storages");
    this.storages = {
      idToken: new $("idToken"),
      username: new $("username"),
      displayName: new $("displayName"),
      avatarIndex: new $("avatarIndex"),
      address: new $("address"),
      authenticatedHeader: new $("authenticatedHeader"),
      authenticated: new $("authenticated"),
      desUsername: new $("desUsername"),
      aeskey: new $("aeskey")
    };
  }
  saveAuthDataByKey(t, a) {
    return this.storages[t].setData(a);
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
    for (const a in this.storages)
      this.storages.hasOwnProperty(a) && (t[a] = this.storages[a].getData());
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
const I = new ca(), Me = /* @__PURE__ */ dt({
  id: 80002,
  name: "Polygon Amoy",
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc-amoy.polygon.technology"]
    }
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://amoy.polygonscan.com",
      apiUrl: "https://api-amoy.polygonscan.com/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 3127388
    }
  },
  testnet: !0
}), pt = /* @__PURE__ */ dt({
  id: 11155111,
  name: "Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
      apiUrl: "https://api-sepolia.etherscan.io/api"
    }
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 751532
    },
    ensRegistry: { address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e" },
    ensUniversalResolver: {
      address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
      blockCreated: 5317080
    }
  },
  testnet: !0
}), We = (e, t = 6) => parseFloat(e).toFixed(t), da = (e, t = 2) => {
  const i = (typeof e == "string" ? parseFloat(e) : e).toFixed(t), [u, d] = i.split("."), m = u.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return d ? `${m}.${d}` : m;
}, ua = (e) => {
  if (e === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: Le.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: "https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://sepolia.etherscan.io"
    };
  if (e === "MATIC" || e === "TVWT")
    return {
      chainId: "0x13882",
      displayName: "Polygon Amoy Testnet",
      chainNamespace: Le.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function _e(e) {
  if (e === "ETH")
    return pt;
  if (e === "MATIC" || e === "TVWT")
    return Me;
}
const He = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, mt = rt.env.NODE_ENV === "development";
function ye(e) {
  var t;
  if (ie.isAxiosError(e)) {
    const a = e;
    return a.response ? { message: `${((t = a.response.data) == null ? void 0 : t.message) || a.message}` } : a.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${a.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
function be({
  iconSize: e = 20,
  address: t,
  className: a = "",
  iconClassName: i = "",
  ...u
}) {
  const { t: d } = Ae();
  return /* @__PURE__ */ o.jsx(ta, { text: t, onCopy: () => {
    ae.success(d("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ o.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ o.jsx("span", { ...u, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ o.jsx("span", { className: `text-primary ${a}`, children: t }) }),
    /* @__PURE__ */ o.jsx(
      Qt,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${i}`,
        size: e
      }
    )
  ] }) });
}
const pa = Yt(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-3 rounded-full disabled:bg-[#f5f5f5] disabled:text-[#bdbdbd] disabled:border disabled:border-[#d7d7d7] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground disabled:bg-transparent disabled:text-[#bdbdbd] disabled:cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ce = f.forwardRef(
  ({ className: e, variant: t, size: a, asChild: i = !1, ...u }, d) => {
    const m = i ? Lt : "button";
    return /* @__PURE__ */ o.jsx(
      m,
      {
        className: w(pa({ variant: t, size: a, className: e })),
        ref: d,
        ...u
      }
    );
  }
);
ce.displayName = "Button";
const xe = f.forwardRef(
  ({ className: e, type: t, ...a }, i) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      className: w(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        e
      ),
      ref: i,
      ...a
    }
  )
);
xe.displayName = "Input";
const ma = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ke {
  constructor(t, a, i) {
    R(this, "name");
    R(this, "symbol");
    R(this, "decimals");
    this.name = t, this.symbol = a, this.decimals = i;
  }
}
class fa extends ke {
  constructor() {
    super("Ethereum", "ETH", 18);
    R(this, "publicClient");
    R(this, "openUrl");
    this.publicClient = pe({
      chain: pt,
      transport: Se("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(a) {
    const i = await this.publicClient.getBalance({
      address: a
    });
    return Te(i);
  }
  async getRecentTransactions(a) {
    const i = "https://api-sepolia.etherscan.io/api", d = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ie.get(i, {
      params: {
        ...d,
        action: "txlist",
        address: a,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class ha extends ke {
  constructor() {
    super("Polygon", "MATIC", 18);
    R(this, "publicClient");
    R(this, "openUrl");
    this.publicClient = pe({
      chain: Me,
      transport: Se("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(a) {
    const i = await this.publicClient.getBalance({
      address: a
    });
    return Te(i);
  }
  async getRecentTransactions(a) {
    const i = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ie.get(i, {
      params: {
        ...d,
        action: "txlist",
        address: a,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class ga extends ke {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    R(this, "publicClient");
    R(this, "contractAddress");
    R(this, "contractAbi");
    R(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = ma, this.publicClient = pe({
      chain: Me,
      transport: Se("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(a) {
    const i = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [a]
    });
    return Te(i);
  }
  async getRecentTransactions(a) {
    const i = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ie.get(i, {
      params: {
        ...d,
        action: "tokentx",
        address: a,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const se = class se {
  constructor() {
    R(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", fa],
      ["MATIC", ha],
      ["TVWT", ga]
    ]);
  }
  static getInstance() {
    return se.instance || (se.instance = new se()), se.instance;
  }
  createToken(t) {
    const a = this.tokenMap.get(t);
    if (!a)
      throw new Error(`Unsupported token type: ${t}`);
    return new a();
  }
  getAllTokenTypes() {
    return Array.from(this.tokenMap.keys());
  }
};
R(se, "instance");
let de = se;
function ya() {
  const [e, t] = f.useState("/imgs/logos/logo.svg");
  return {
    logoPath: e
  };
}
function ba({
  size: e = 32,
  className: t = ""
}) {
  const [a, i] = f.useState("");
  return f.useEffect(() => {
    const {
      username: u
    } = I.all();
    if (u) {
      const d = u.length > 0 ? u[0] : "";
      i(d);
    }
  }, []), /* @__PURE__ */ o.jsx(
    "div",
    {
      className: w(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${e}px] h-[${e}px]`,
        t
      ),
      children: /* @__PURE__ */ o.jsx("div", { className: w(
        // 'flex items-center justify-center',
      ), children: a })
    }
  );
}
function xa({
  size: e = 32,
  className: t,
  type: a = "spin",
  fullscreen: i = !1
}) {
  ya();
  const [u, d] = f.useState(!1);
  f.useEffect(() => (d(!0), () => d(!1)), []);
  const s = a === "breathe" ? /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ o.jsx(ba, { className: w(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ o.jsx("style", { children: `
          @keyframes breathe {
            0%, 100% {
              opacity: 0.2;
              transform: scale(0.9);
            }
            20% {
              opacity: 1;
              transform: scale(1.1);
            }
            30% {
              opacity: 0.9;
              transform: scale(1.05);
            }
            50% {
              opacity: 0.5;
              transform: scale(0.95);
            }
            70% {
              opacity: 0.8;
              transform: scale(1.03);
            }
          }
        ` })
  ] }) : /* @__PURE__ */ o.jsx("div", { className: w(
    "text-brand-foreground",
    t
  ), children: /* @__PURE__ */ o.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: e,
      height: e,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ o.jsx("g", { children: /* @__PURE__ */ o.jsx(
        "circle",
        {
          strokeLinecap: "round",
          fill: "none",
          strokeDasharray: "50.26548245743669 50.26548245743669",
          stroke: "currentColor",
          strokeWidth: "8",
          r: "32",
          cy: "50",
          cx: "50",
          children: /* @__PURE__ */ o.jsx(
            "animateTransform",
            {
              values: "0 50 50;360 50 50",
              keyTimes: "0;1",
              dur: "1s",
              repeatCount: "indefinite",
              type: "rotate",
              attributeName: "transform"
            }
          )
        }
      ) })
    }
  ) });
  return i && u ? ot.createPortal(
    /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: s }),
    document.body
  ) : s;
}
const ft = f.forwardRef(
  ({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
    "textarea",
    {
      className: w(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: a,
      ...t
    }
  )
);
ft.displayName = "Textarea";
var ht = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(ht || {}), me = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(me || {});
class Re {
  constructor(t) {
    R(this, "config");
    if (this.constructor === Re)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
const H = ie.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com"
});
H.interceptors.request.use(
  (e) => {
    const t = I.all().idToken;
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  },
  (e) => Promise.reject(e)
);
H.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, a;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((a = e.response) == null ? void 0 : a.status) === 403) {
      const i = e.response.data.message || "Authentication error";
      console.log(`${i}, redirecting to login...`), I.clearAllAuthData(), typeof window < "u" && (ae.error(i), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
class va extends Re {
  constructor() {
    super({
      serviceType: me.WEB3AUTH_WITH_MPC
    });
    R(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: a,
    idToken: i
  }) {
    const { data: u } = await H.post("/keymanagement/signup", {
      username: a,
      idToken: i
    }), { address: d, displayName: m, avatarIndex: h } = u;
    I.saveAuthDataByKey("idToken", i), I.saveAuthDataByKey("address", d), I.saveAuthDataByKey("username", a), I.saveAuthDataByKey("avatarIndex", h), m ? I.saveAuthDataByKey("displayName", m) : I.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: a, idToken: i }) {
    const { data: u } = await H.post("/keymanagement/signin", {
      username: a,
      idToken: i
    }), { address: d, displayName: m, avatarIndex: h } = u;
    I.saveAuthDataByKey("idToken", i), I.saveAuthDataByKey("address", d), I.saveAuthDataByKey("username", a), I.saveAuthDataByKey("avatarIndex", h), m ? I.saveAuthDataByKey("displayName", m) : I.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: a,
    amount: i,
    token: u,
    note: d,
    transactionType: m
  }) {
    const { data: {
      success: h,
      needOtp: s,
      hash: n,
      message: r,
      transactionId: l,
      // not used
      transactionPayload: c,
      userEmail: y,
      toEmail: p
    } } = await H.post("/transaction/sign", {
      from: I.all().address,
      to: a,
      amount: i,
      token: u,
      note: d,
      transactionType: m
    });
    return {
      success: h,
      needOtp: s,
      hash: n,
      message: r,
      transactionId: l
    };
  }
  async signTransactionWithOTP({
    transactionId: a,
    otp: i
  }) {
    const { data: {
      token: u,
      hash: d,
      // not used
      transactionPayload: m,
      userEmail: h,
      toEmail: s,
      note: n,
      transactionType: r
    } } = await H.post("/transaction/verify-to-sign", {
      transactionId: a,
      OTP: i
    });
    return {
      success: !0,
      hash: d,
      token: u
    };
  }
  createClientByToken(a) {
    const i = this.coreKitInstance, u = ua(a), d = new oa({ config: { chainConfig: u } });
    d.setupProvider(ia(i));
    const m = la({
      chain: _e(a),
      transport: Oe(d)
    }), h = pe({
      chain: _e(a),
      transport: Oe(d)
    });
    return {
      walletClient: m,
      publicClient: h
    };
  }
  async waitForTransactionReceipt(a, i) {
    const { publicClient: u } = this.createClientByToken(i);
    return await u.waitForTransactionReceipt({
      hash: a
    });
  }
  async test() {
    await H.post("/keymanagement/test-mpc");
  }
}
class wa {
  static getService(t) {
    switch (t) {
      case me.WEB3AUTH_WITH_MPC:
        return new va();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const Ca = me.WEB3AUTH_WITH_MPC, Ea = wa.getService(Ca), gt = Ut, yt = zt, Na = f.forwardRef(({ className: e, inset: t, children: a, ...i }, u) => /* @__PURE__ */ o.jsxs(
  Qe,
  {
    ref: u,
    className: w(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...i,
    children: [
      a,
      /* @__PURE__ */ o.jsx(Gt, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Na.displayName = Qe.displayName;
const Aa = f.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  Ye,
  {
    ref: a,
    className: w(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Aa.displayName = Ye.displayName;
const Pe = f.forwardRef(({ className: e, sideOffset: t = 4, ...a }, i) => /* @__PURE__ */ o.jsx(Ot, { children: /* @__PURE__ */ o.jsx(
  Ge,
  {
    ref: i,
    sideOffset: t,
    className: w(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...a
  }
) }));
Pe.displayName = Ge.displayName;
const je = f.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  qe,
  {
    ref: i,
    className: w(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...a
  }
));
je.displayName = qe.displayName;
const Ta = f.forwardRef(({ className: e, children: t, checked: a, ...i }, u) => /* @__PURE__ */ o.jsxs(
  Xe,
  {
    ref: u,
    className: w(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: a,
    ...i,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(Ze, { children: /* @__PURE__ */ o.jsx(qt, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ta.displayName = Xe.displayName;
const Sa = f.forwardRef(({ className: e, children: t, ...a }, i) => /* @__PURE__ */ o.jsxs(
  Je,
  {
    ref: i,
    className: w(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...a,
    children: [
      /* @__PURE__ */ o.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ o.jsx(Ze, { children: /* @__PURE__ */ o.jsx(Xt, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Sa.displayName = Je.displayName;
const Ma = f.forwardRef(({ className: e, inset: t, ...a }, i) => /* @__PURE__ */ o.jsx(
  et,
  {
    ref: i,
    className: w(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...a
  }
));
Ma.displayName = et.displayName;
const ka = f.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  tt,
  {
    ref: a,
    className: w("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
ka.displayName = tt.displayName;
const Ra = de.getInstance().getAllTokenTypes();
function Pa({
  open: e,
  setOpen: t,
  balance: a,
  address: i,
  tokenType: u,
  defaultTo: d,
  defaultAmount: m,
  defaultNote: h,
  onClose: s
}) {
  const [n, r] = f.useState(""), [l, c] = f.useState(""), [y, p] = f.useState(""), [b, g] = f.useState(!1), [T, N] = f.useState(""), x = f.useRef(), [E, D] = f.useState(u), [F, Q] = f.useState("0"), [L, _] = f.useState(!1), [O, S] = f.useState(!1), [V, U] = f.useState(""), [A, P] = f.useState(""), { t: M } = Ae();
  f.useEffect(() => {
    e ? K(u) : te();
  }, [e]), f.useEffect(() => {
    e && (d && r(d), m && c(m), h && p(h));
  }, [d, m, h, e]), f.useEffect(() => {
    !e && s && s();
  }, [e]);
  const W = f.useMemo(() => !n || !l || b || !O || L || !!A && A !== M("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(l) > parseFloat(F), [n, l, b, O, L, A, F]), K = async (C) => {
    D(C);
    const j = de.getInstance().createToken(C);
    x.current = j, N(x.current.symbol);
    let z = await x.current.getBalance(i);
    z = We(z), Q(z);
  }, Y = async (C) => {
    if (Ue(n))
      S(!0), U(""), P("");
    else {
      _(!0), P("");
      try {
        const j = await H.get("/address/", {
          params: { email: C }
        });
        j.data.success ? (S(!0), U(j.data.address)) : He.test(C) ? (S(!0), U(""), P(M("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (S(!1), U(""), P(M("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        _(!1);
      }
    }
  }, G = () => {
    q("to", n), n ? Y(n) : (S(!1), U(""), P(""));
  };
  async function X(C) {
    try {
      const j = ze(l).toString();
      q("amt", j), g(!0);
      const {
        needOtp: z,
        hash: Be,
        message: It
      } = await Ea.signTransaction({
        toAddress: C,
        amount: j,
        token: E,
        note: y,
        transactionType: ht.TRANSFER
      });
      Be ? (t(!1), J(Be)) : z && (ae.error(It), t(!1));
    } catch (j) {
      const z = ye(j);
      q("errorInfo", z), ae.error(z.message);
    } finally {
      g(!1);
    }
  }
  const Z = (C) => {
    var z;
    const j = `${(z = x.current) == null ? void 0 : z.openUrl}/${C}`;
    window.open(j, "_blank");
  }, J = (C) => {
    ae(
      /* @__PURE__ */ o.jsx("div", { className: "w-full", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ o.jsx(De, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ o.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ o.jsx(
            ce,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Z(C);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, ee = async () => {
    if (!W)
      try {
        g(!0);
        let C, j;
        if (Ue(n))
          C = n;
        else if (He.test(n) && A === M("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          j = n;
          const z = await H.post("/invite/invite-register", {
            toEmail: j,
            from: i,
            amount: ze(l).toString(),
            token: E,
            note: y
          });
          q("res", z), ae.success(M("/dashboard.[token].sendModal.emailSentToUnregistered")), te(), t(!1);
          return;
        } else
          C = V;
        await X(C), te(), t(!1);
      } catch (C) {
        const j = ye(C);
        q("errorInfo", j), ae.error(M("/dashboard.[token].sendModal.sendError"));
      } finally {
        g(!1);
      }
  }, te = () => {
    c(""), r(""), p(""), U(""), P(""), S(!1), _(!1);
  }, oe = e ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ o.jsx("div", { className: w(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ o.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ o.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ o.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: M("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => t(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ o.jsx(lt, {})
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ o.jsxs("form", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ o.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: M("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              xe,
              {
                value: n,
                onChange: (C) => r(C.target.value.trim()),
                onBlur: G,
                id: "to",
                required: !0,
                placeholder: M("/dashboard.[token].sendModal.toPlaceholder"),
                className: w(
                  O && "border-green-500",
                  A && "border-destructive",
                  A === M("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            L && /* @__PURE__ */ o.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ o.jsx(Zt, { className: "animate-spin", size: 16 }) }),
            O && !L && !A && /* @__PURE__ */ o.jsx(De, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            A && !L && /* @__PURE__ */ o.jsx(Jt, { className: w(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              A === M("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          O && V && /* @__PURE__ */ o.jsx("p", { className: "mt-1 text-xs text-primary/60", children: V }),
          A && /* @__PURE__ */ o.jsx("p", { className: w(
            "mt-1 text-xs text-destructive",
            A === M("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: A })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ o.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: M("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ o.jsx(
              xe,
              {
                value: l,
                onChange: (C) => c(C.target.value.trim()),
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0
              }
            ),
            /* @__PURE__ */ o.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ o.jsxs(gt, { children: [
              /* @__PURE__ */ o.jsxs(yt, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ o.jsx("span", { className: "font-medium text-sm", children: E }),
                /* @__PURE__ */ o.jsx(ea, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ o.jsx(Pe, { align: "start", className: "bg-white", children: Ra.map((C) => /* @__PURE__ */ o.jsx(je, { onClick: () => K(C), children: C }, C)) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ o.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: M("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ o.jsx("div", { className: "relative", children: /* @__PURE__ */ o.jsx(
            ft,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: y,
              onChange: (C) => p(C.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
          "Crypto balance: ",
          We(F),
          " ",
          T
        ] }),
        /* @__PURE__ */ o.jsx(
          ce,
          {
            onClick: ee,
            className: w("py-12px"),
            disabled: W,
            children: b ? /* @__PURE__ */ o.jsx("div", { className: "", children: /* @__PURE__ */ o.jsx(xa, {}) }) : /* @__PURE__ */ o.jsx("span", { children: M("/dashboard.[token].sendModal.title") })
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return it.createPortal(
      oe,
      document.body
    );
}
const ja = Ft, bt = f.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  at,
  {
    ref: a,
    className: w(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
bt.displayName = at.displayName;
const ve = f.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  st,
  {
    ref: a,
    className: w(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
ve.displayName = st.displayName;
const we = f.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ o.jsx(
  nt,
  {
    ref: a,
    className: w(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
we.displayName = nt.displayName;
var Ia = Object.defineProperty, ue = Object.getOwnPropertySymbols, xt = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, $e = (e, t, a) => t in e ? Ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Ce = (e, t) => {
  for (var a in t || (t = {}))
    xt.call(t, a) && $e(e, a, t[a]);
  if (ue)
    for (var a of ue(t))
      vt.call(t, a) && $e(e, a, t[a]);
  return e;
}, Ee = (e, t) => {
  var a = {};
  for (var i in e)
    xt.call(e, i) && t.indexOf(i) < 0 && (a[i] = e[i]);
  if (e != null && ue)
    for (var i of ue(e))
      t.indexOf(i) < 0 && vt.call(e, i) && (a[i] = e[i]);
  return a;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var ne;
((e) => {
  const t = class v {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, n, r, l) {
      if (this.version = s, this.errorCorrectionLevel = n, this.modules = [], this.isFunction = [], s < v.MIN_VERSION || s > v.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (l < -1 || l > 7)
        throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let c = [];
      for (let p = 0; p < this.size; p++)
        c.push(!1);
      for (let p = 0; p < this.size; p++)
        this.modules.push(c.slice()), this.isFunction.push(c.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(r);
      if (this.drawCodewords(y), l == -1) {
        let p = 1e9;
        for (let b = 0; b < 8; b++) {
          this.applyMask(b), this.drawFormatBits(b);
          const g = this.getPenaltyScore();
          g < p && (l = b, p = g), this.applyMask(b);
        }
      }
      u(0 <= l && l <= 7), this.mask = l, this.applyMask(l), this.drawFormatBits(l), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(s, n) {
      const r = e.QrSegment.makeSegments(s);
      return v.encodeSegments(r, n);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, n) {
      const r = e.QrSegment.makeBytes(s);
      return v.encodeSegments([r], n);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(s, n, r = 1, l = 40, c = -1, y = !0) {
      if (!(v.MIN_VERSION <= r && r <= l && l <= v.MAX_VERSION) || c < -1 || c > 7)
        throw new RangeError("Invalid value");
      let p, b;
      for (p = r; ; p++) {
        const x = v.getNumDataCodewords(p, n) * 8, E = m.getTotalBits(s, p);
        if (E <= x) {
          b = E;
          break;
        }
        if (p >= l)
          throw new RangeError("Data too long");
      }
      for (const x of [v.Ecc.MEDIUM, v.Ecc.QUARTILE, v.Ecc.HIGH])
        y && b <= v.getNumDataCodewords(p, x) * 8 && (n = x);
      let g = [];
      for (const x of s) {
        a(x.mode.modeBits, 4, g), a(x.numChars, x.mode.numCharCountBits(p), g);
        for (const E of x.getData())
          g.push(E);
      }
      u(g.length == b);
      const T = v.getNumDataCodewords(p, n) * 8;
      u(g.length <= T), a(0, Math.min(4, T - g.length), g), a(0, (8 - g.length % 8) % 8, g), u(g.length % 8 == 0);
      for (let x = 236; g.length < T; x ^= 253)
        a(x, 8, g);
      let N = [];
      for (; N.length * 8 < g.length; )
        N.push(0);
      return g.forEach((x, E) => N[E >>> 3] |= x << 7 - (E & 7)), new v(p, n, N, c);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(s, n) {
      return 0 <= s && s < this.size && 0 <= n && n < this.size && this.modules[n][s];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let r = 0; r < this.size; r++)
        this.setFunctionModule(6, r, r % 2 == 0), this.setFunctionModule(r, 6, r % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), n = s.length;
      for (let r = 0; r < n; r++)
        for (let l = 0; l < n; l++)
          r == 0 && l == 0 || r == 0 && l == n - 1 || r == n - 1 && l == 0 || this.drawAlignmentPattern(s[r], s[l]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const n = this.errorCorrectionLevel.formatBits << 3 | s;
      let r = n;
      for (let c = 0; c < 10; c++)
        r = r << 1 ^ (r >>> 9) * 1335;
      const l = (n << 10 | r) ^ 21522;
      u(l >>> 15 == 0);
      for (let c = 0; c <= 5; c++)
        this.setFunctionModule(8, c, i(l, c));
      this.setFunctionModule(8, 7, i(l, 6)), this.setFunctionModule(8, 8, i(l, 7)), this.setFunctionModule(7, 8, i(l, 8));
      for (let c = 9; c < 15; c++)
        this.setFunctionModule(14 - c, 8, i(l, c));
      for (let c = 0; c < 8; c++)
        this.setFunctionModule(this.size - 1 - c, 8, i(l, c));
      for (let c = 8; c < 15; c++)
        this.setFunctionModule(8, this.size - 15 + c, i(l, c));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let s = this.version;
      for (let r = 0; r < 12; r++)
        s = s << 1 ^ (s >>> 11) * 7973;
      const n = this.version << 12 | s;
      u(n >>> 18 == 0);
      for (let r = 0; r < 18; r++) {
        const l = i(n, r), c = this.size - 11 + r % 3, y = Math.floor(r / 3);
        this.setFunctionModule(c, y, l), this.setFunctionModule(y, c, l);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, n) {
      for (let r = -4; r <= 4; r++)
        for (let l = -4; l <= 4; l++) {
          const c = Math.max(Math.abs(l), Math.abs(r)), y = s + l, p = n + r;
          0 <= y && y < this.size && 0 <= p && p < this.size && this.setFunctionModule(y, p, c != 2 && c != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, n) {
      for (let r = -2; r <= 2; r++)
        for (let l = -2; l <= 2; l++)
          this.setFunctionModule(s + l, n + r, Math.max(Math.abs(l), Math.abs(r)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, n, r) {
      this.modules[n][s] = r, this.isFunction[n][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const n = this.version, r = this.errorCorrectionLevel;
      if (s.length != v.getNumDataCodewords(n, r))
        throw new RangeError("Invalid argument");
      const l = v.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n], c = v.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n], y = Math.floor(v.getNumRawDataModules(n) / 8), p = l - y % l, b = Math.floor(y / l);
      let g = [];
      const T = v.reedSolomonComputeDivisor(c);
      for (let x = 0, E = 0; x < l; x++) {
        let D = s.slice(E, E + b - c + (x < p ? 0 : 1));
        E += D.length;
        const F = v.reedSolomonComputeRemainder(D, T);
        x < p && D.push(0), g.push(D.concat(F));
      }
      let N = [];
      for (let x = 0; x < g[0].length; x++)
        g.forEach((E, D) => {
          (x != b - c || D >= p) && N.push(E[x]);
        });
      return u(N.length == y), N;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(v.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let n = 0;
      for (let r = this.size - 1; r >= 1; r -= 2) {
        r == 6 && (r = 5);
        for (let l = 0; l < this.size; l++)
          for (let c = 0; c < 2; c++) {
            const y = r - c, b = (r + 1 & 2) == 0 ? this.size - 1 - l : l;
            !this.isFunction[b][y] && n < s.length * 8 && (this.modules[b][y] = i(s[n >>> 3], 7 - (n & 7)), n++);
          }
      }
      u(n == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7)
        throw new RangeError("Mask value out of range");
      for (let n = 0; n < this.size; n++)
        for (let r = 0; r < this.size; r++) {
          let l;
          switch (s) {
            case 0:
              l = (r + n) % 2 == 0;
              break;
            case 1:
              l = n % 2 == 0;
              break;
            case 2:
              l = r % 3 == 0;
              break;
            case 3:
              l = (r + n) % 3 == 0;
              break;
            case 4:
              l = (Math.floor(r / 3) + Math.floor(n / 2)) % 2 == 0;
              break;
            case 5:
              l = r * n % 2 + r * n % 3 == 0;
              break;
            case 6:
              l = (r * n % 2 + r * n % 3) % 2 == 0;
              break;
            case 7:
              l = ((r + n) % 2 + r * n % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[n][r] && l && (this.modules[n][r] = !this.modules[n][r]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let c = 0; c < this.size; c++) {
        let y = !1, p = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[c][g] == y ? (p++, p == 5 ? s += v.PENALTY_N1 : p > 5 && s++) : (this.finderPenaltyAddHistory(p, b), y || (s += this.finderPenaltyCountPatterns(b) * v.PENALTY_N3), y = this.modules[c][g], p = 1);
        s += this.finderPenaltyTerminateAndCount(y, p, b) * v.PENALTY_N3;
      }
      for (let c = 0; c < this.size; c++) {
        let y = !1, p = 0, b = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[g][c] == y ? (p++, p == 5 ? s += v.PENALTY_N1 : p > 5 && s++) : (this.finderPenaltyAddHistory(p, b), y || (s += this.finderPenaltyCountPatterns(b) * v.PENALTY_N3), y = this.modules[g][c], p = 1);
        s += this.finderPenaltyTerminateAndCount(y, p, b) * v.PENALTY_N3;
      }
      for (let c = 0; c < this.size - 1; c++)
        for (let y = 0; y < this.size - 1; y++) {
          const p = this.modules[c][y];
          p == this.modules[c][y + 1] && p == this.modules[c + 1][y] && p == this.modules[c + 1][y + 1] && (s += v.PENALTY_N2);
        }
      let n = 0;
      for (const c of this.modules)
        n = c.reduce((y, p) => y + (p ? 1 : 0), n);
      const r = this.size * this.size, l = Math.ceil(Math.abs(n * 20 - r * 10) / r) - 1;
      return u(0 <= l && l <= 9), s += l * v.PENALTY_N4, u(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const s = Math.floor(this.version / 7) + 2, n = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (s * 2 - 2)) * 2;
        let r = [6];
        for (let l = this.size - 7; r.length < s; l -= n)
          r.splice(1, 0, l);
        return r;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(s) {
      if (s < v.MIN_VERSION || s > v.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let n = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const r = Math.floor(s / 7) + 2;
        n -= (25 * r - 10) * r - 55, s >= 7 && (n -= 36);
      }
      return u(208 <= n && n <= 29648), n;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, n) {
      return Math.floor(v.getNumRawDataModules(s) / 8) - v.ECC_CODEWORDS_PER_BLOCK[n.ordinal][s] * v.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let n = [];
      for (let l = 0; l < s - 1; l++)
        n.push(0);
      n.push(1);
      let r = 1;
      for (let l = 0; l < s; l++) {
        for (let c = 0; c < n.length; c++)
          n[c] = v.reedSolomonMultiply(n[c], r), c + 1 < n.length && (n[c] ^= n[c + 1]);
        r = v.reedSolomonMultiply(r, 2);
      }
      return n;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, n) {
      let r = n.map((l) => 0);
      for (const l of s) {
        const c = l ^ r.shift();
        r.push(0), n.forEach((y, p) => r[p] ^= v.reedSolomonMultiply(y, c));
      }
      return r;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, n) {
      if (s >>> 8 || n >>> 8)
        throw new RangeError("Byte out of range");
      let r = 0;
      for (let l = 7; l >= 0; l--)
        r = r << 1 ^ (r >>> 7) * 285, r ^= (n >>> l & 1) * s;
      return u(r >>> 8 == 0), r;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const n = s[1];
      u(n <= this.size * 3);
      const r = n > 0 && s[2] == n && s[3] == n * 3 && s[4] == n && s[5] == n;
      return (r && s[0] >= n * 4 && s[6] >= n ? 1 : 0) + (r && s[6] >= n * 4 && s[0] >= n ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, n, r) {
      return s && (this.finderPenaltyAddHistory(n, r), n = 0), n += this.size, this.finderPenaltyAddHistory(n, r), this.finderPenaltyCountPatterns(r);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, n) {
      n[0] == 0 && (s += this.size), n.pop(), n.unshift(s);
    }
  };
  t.MIN_VERSION = 1, t.MAX_VERSION = 40, t.PENALTY_N1 = 3, t.PENALTY_N2 = 3, t.PENALTY_N3 = 40, t.PENALTY_N4 = 10, t.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ], t.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ], e.QrCode = t;
  function a(h, s, n) {
    if (s < 0 || s > 31 || h >>> s)
      throw new RangeError("Value out of range");
    for (let r = s - 1; r >= 0; r--)
      n.push(h >>> r & 1);
  }
  function i(h, s) {
    return (h >>> s & 1) != 0;
  }
  function u(h) {
    if (!h)
      throw new Error("Assertion error");
  }
  const d = class k {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, n, r) {
      if (this.mode = s, this.numChars = n, this.bitData = r, n < 0)
        throw new RangeError("Invalid argument");
      this.bitData = r.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(s) {
      let n = [];
      for (const r of s)
        a(r, 8, n);
      return new k(k.Mode.BYTE, s.length, n);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!k.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let n = [];
      for (let r = 0; r < s.length; ) {
        const l = Math.min(s.length - r, 3);
        a(parseInt(s.substring(r, r + l), 10), l * 3 + 1, n), r += l;
      }
      return new k(k.Mode.NUMERIC, s.length, n);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!k.isAlphanumeric(s))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let n = [], r;
      for (r = 0; r + 2 <= s.length; r += 2) {
        let l = k.ALPHANUMERIC_CHARSET.indexOf(s.charAt(r)) * 45;
        l += k.ALPHANUMERIC_CHARSET.indexOf(s.charAt(r + 1)), a(l, 11, n);
      }
      return r < s.length && a(k.ALPHANUMERIC_CHARSET.indexOf(s.charAt(r)), 6, n), new k(k.Mode.ALPHANUMERIC, s.length, n);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : k.isNumeric(s) ? [k.makeNumeric(s)] : k.isAlphanumeric(s) ? [k.makeAlphanumeric(s)] : [k.makeBytes(k.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let n = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128)
        a(s, 8, n);
      else if (s < 16384)
        a(2, 2, n), a(s, 14, n);
      else if (s < 1e6)
        a(6, 3, n), a(s, 21, n);
      else
        throw new RangeError("ECI assignment value out of range");
      return new k(k.Mode.ECI, 0, n);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return k.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return k.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, n) {
      let r = 0;
      for (const l of s) {
        const c = l.mode.numCharCountBits(n);
        if (l.numChars >= 1 << c)
          return 1 / 0;
        r += 4 + c + l.bitData.length;
      }
      return r;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let n = [];
      for (let r = 0; r < s.length; r++)
        s.charAt(r) != "%" ? n.push(s.charCodeAt(r)) : (n.push(parseInt(s.substring(r + 1, r + 3), 16)), r += 2);
      return n;
    }
  };
  d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let m = d;
  e.QrSegment = d;
})(ne || (ne = {}));
((e) => {
  ((t) => {
    const a = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(u, d) {
        this.ordinal = u, this.formatBits = d;
      }
    };
    a.LOW = new a(0, 1), a.MEDIUM = new a(1, 0), a.QUARTILE = new a(2, 3), a.HIGH = new a(3, 2), t.Ecc = a;
  })(e.QrCode || (e.QrCode = {}));
})(ne || (ne = {}));
((e) => {
  ((t) => {
    const a = class {
      /*-- Constructor and fields --*/
      constructor(u, d) {
        this.modeBits = u, this.numBitsCharCount = d;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(u) {
        return this.numBitsCharCount[Math.floor((u + 7) / 17)];
      }
    };
    a.NUMERIC = new a(1, [10, 12, 14]), a.ALPHANUMERIC = new a(2, [9, 11, 13]), a.BYTE = new a(4, [8, 16, 16]), a.KANJI = new a(8, [8, 10, 12]), a.ECI = new a(7, [0, 0, 0]), t.Mode = a;
  })(e.QrSegment || (e.QrSegment = {}));
})(ne || (ne = {}));
var re = ne;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var Ba = {
  L: re.QrCode.Ecc.LOW,
  M: re.QrCode.Ecc.MEDIUM,
  Q: re.QrCode.Ecc.QUARTILE,
  H: re.QrCode.Ecc.HIGH
}, wt = 128, Ct = "L", Et = "#FFFFFF", Nt = "#000000", At = !1, Tt = 1, Da = 4, La = 0, Oa = 0.1;
function St(e, t = 0) {
  const a = [];
  return e.forEach(function(i, u) {
    let d = null;
    i.forEach(function(m, h) {
      if (!m && d !== null) {
        a.push(
          `M${d + t} ${u + t}h${h - d}v1H${d + t}z`
        ), d = null;
        return;
      }
      if (h === i.length - 1) {
        if (!m)
          return;
        d === null ? a.push(`M${h + t},${u + t} h1v1H${h + t}z`) : a.push(
          `M${d + t},${u + t} h${h + 1 - d}v1H${d + t}z`
        );
        return;
      }
      m && d === null && (d = h);
    });
  }), a.join("");
}
function Mt(e, t) {
  return e.slice().map((a, i) => i < t.y || i >= t.y + t.h ? a : a.map((u, d) => d < t.x || d >= t.x + t.w ? u : !1));
}
function Ua(e, t, a, i) {
  if (i == null)
    return null;
  const u = e.length + a * 2, d = Math.floor(t * Oa), m = u / t, h = (i.width || d) * m, s = (i.height || d) * m, n = i.x == null ? e.length / 2 - h / 2 : i.x * m, r = i.y == null ? e.length / 2 - s / 2 : i.y * m, l = i.opacity == null ? 1 : i.opacity;
  let c = null;
  if (i.excavate) {
    let p = Math.floor(n), b = Math.floor(r), g = Math.ceil(h + n - p), T = Math.ceil(s + r - b);
    c = { x: p, y: b, w: g, h: T };
  }
  const y = i.crossOrigin;
  return { x: n, y: r, h: s, w: h, excavation: c, opacity: l, crossOrigin: y };
}
function za(e, t) {
  return t != null ? Math.max(Math.floor(t), 0) : e ? Da : La;
}
function kt({
  value: e,
  level: t,
  minVersion: a,
  includeMargin: i,
  marginSize: u,
  imageSettings: d,
  size: m,
  boostLevel: h
}) {
  let s = B.useMemo(() => {
    const p = (Array.isArray(e) ? e : [e]).reduce((b, g) => (b.push(...re.QrSegment.makeSegments(g)), b), []);
    return re.QrCode.encodeSegments(
      p,
      Ba[t],
      a,
      void 0,
      void 0,
      h
    );
  }, [e, t, a, h]);
  const { cells: n, margin: r, numCells: l, calculatedImageSettings: c } = B.useMemo(() => {
    let y = s.getModules();
    const p = za(i, u), b = y.length + p * 2, g = Ua(
      y,
      m,
      p,
      d
    );
    return {
      cells: y,
      margin: p,
      numCells: b,
      calculatedImageSettings: g
    };
  }, [s, m, d, i, u]);
  return {
    qrcode: s,
    margin: r,
    cells: n,
    numCells: l,
    calculatedImageSettings: c
  };
}
var Fa = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), Wa = B.forwardRef(
  function(t, a) {
    const i = t, {
      value: u,
      size: d = wt,
      level: m = Ct,
      bgColor: h = Et,
      fgColor: s = Nt,
      includeMargin: n = At,
      minVersion: r = Tt,
      boostLevel: l,
      marginSize: c,
      imageSettings: y
    } = i, b = Ee(i, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]), { style: g } = b, T = Ee(b, ["style"]), N = y == null ? void 0 : y.src, x = B.useRef(null), E = B.useRef(null), D = B.useCallback(
      (A) => {
        x.current = A, typeof a == "function" ? a(A) : a && (a.current = A);
      },
      [a]
    ), [F, Q] = B.useState(!1), { margin: L, cells: _, numCells: O, calculatedImageSettings: S } = kt({
      value: u,
      level: m,
      minVersion: r,
      boostLevel: l,
      includeMargin: n,
      marginSize: c,
      imageSettings: y,
      size: d
    });
    B.useEffect(() => {
      if (x.current != null) {
        const A = x.current, P = A.getContext("2d");
        if (!P)
          return;
        let M = _;
        const W = E.current, K = S != null && W !== null && W.complete && W.naturalHeight !== 0 && W.naturalWidth !== 0;
        K && S.excavation != null && (M = Mt(
          _,
          S.excavation
        ));
        const Y = window.devicePixelRatio || 1;
        A.height = A.width = d * Y;
        const G = d / O * Y;
        P.scale(G, G), P.fillStyle = h, P.fillRect(0, 0, O, O), P.fillStyle = s, Fa ? P.fill(new Path2D(St(M, L))) : _.forEach(function(X, Z) {
          X.forEach(function(J, ee) {
            J && P.fillRect(ee + L, Z + L, 1, 1);
          });
        }), S && (P.globalAlpha = S.opacity), K && P.drawImage(
          W,
          S.x + L,
          S.y + L,
          S.w,
          S.h
        );
      }
    }), B.useEffect(() => {
      Q(!1);
    }, [N]);
    const V = Ce({ height: d, width: d }, g);
    let U = null;
    return N != null && (U = /* @__PURE__ */ B.createElement(
      "img",
      {
        src: N,
        key: N,
        style: { display: "none" },
        onLoad: () => {
          Q(!0);
        },
        ref: E,
        crossOrigin: S == null ? void 0 : S.crossOrigin
      }
    )), /* @__PURE__ */ B.createElement(B.Fragment, null, /* @__PURE__ */ B.createElement(
      "canvas",
      Ce({
        style: V,
        height: d,
        width: d,
        ref: D,
        role: "img"
      }, T)
    ), U);
  }
);
Wa.displayName = "QRCodeCanvas";
var Ne = B.forwardRef(
  function(t, a) {
    const i = t, {
      value: u,
      size: d = wt,
      level: m = Ct,
      bgColor: h = Et,
      fgColor: s = Nt,
      includeMargin: n = At,
      minVersion: r = Tt,
      boostLevel: l,
      title: c,
      marginSize: y,
      imageSettings: p
    } = i, b = Ee(i, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]), { margin: g, cells: T, numCells: N, calculatedImageSettings: x } = kt({
      value: u,
      level: m,
      minVersion: r,
      boostLevel: l,
      includeMargin: n,
      marginSize: y,
      imageSettings: p,
      size: d
    });
    let E = T, D = null;
    p != null && x != null && (x.excavation != null && (E = Mt(
      T,
      x.excavation
    )), D = /* @__PURE__ */ B.createElement(
      "image",
      {
        href: p.src,
        height: x.h,
        width: x.w,
        x: x.x + g,
        y: x.y + g,
        preserveAspectRatio: "none",
        opacity: x.opacity,
        crossOrigin: x.crossOrigin
      }
    ));
    const F = St(E, g);
    return /* @__PURE__ */ B.createElement(
      "svg",
      Ce({
        height: d,
        width: d,
        viewBox: `0 0 ${N} ${N}`,
        ref: a,
        role: "img"
      }, b),
      !!c && /* @__PURE__ */ B.createElement("title", null, c),
      /* @__PURE__ */ B.createElement(
        "path",
        {
          fill: h,
          d: `M0,0 h${N}v${N}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ B.createElement("path", { fill: s, d: F, shapeRendering: "crispEdges" }),
      D
    );
  }
);
Ne.displayName = "QRCodeSVG";
function _a({
  address: e,
  open: t,
  setOpen: a,
  onClose: i
}) {
  const { t: u } = Ae(), [d, m] = f.useState("");
  f.useEffect(() => {
    const { username: s } = I.all();
    m(s);
  }, []);
  const h = t ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ o.jsx("div", { className: w(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ o.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ o.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ o.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => i(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ o.jsx(lt, {})
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ o.jsxs(ja, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ o.jsxs(bt, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ o.jsx(
            ve,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: u("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ o.jsx(
            ve,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: u("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs(we, { value: "crypto", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ o.jsx(be, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ o.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ o.jsx(
            Ne,
            {
              value: e,
              size: 320,
              level: "H",
              fgColor: "#000",
              bgColor: "#fff",
              imageSettings: {
                src: "/static/imgs/logos/vastlink.png",
                height: 60,
                width: 60,
                excavate: !0
              },
              style: { width: "196px", height: "196px" }
            }
          ) })
        ] }),
        /* @__PURE__ */ o.jsxs(we, { value: "email", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ o.jsx(be, { address: d, iconSize: 14 }) }),
          /* @__PURE__ */ o.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ o.jsx(
            Ne,
            {
              value: d,
              size: 320,
              level: "H",
              fgColor: "#000",
              bgColor: "#fff",
              imageSettings: {
                src: "/static/imgs/logos/vastlink.png",
                height: 60,
                width: 60,
                excavate: !0
              },
              style: { width: "196px", height: "196px" }
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ o.jsx(
        ce,
        {
          onClick: () => i(!1),
          children: "Share QR code"
        }
      ) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return it.createPortal(
      h,
      document.body
    );
}
const Ve = [
  {
    name: "ETH",
    icon: "/imgs/logos/eth.png"
  },
  {
    name: "MATIC",
    icon: "/imgs/logos/matic.png"
  },
  {
    name: "TVWT",
    icon: "/imgs/logos/tvwt.png"
  }
];
function Ha() {
  const e = I.getUserRandomAvatar(), { address: t } = I.all(), [a, i] = f.useState(!1), [u, d] = f.useState(!1), [m, h] = f.useState("ETH"), [s, n] = f.useState(""), [r, l] = f.useState(!0);
  f.useEffect(() => {
    p(m);
  }, []);
  const c = async () => {
    const g = await H.get("/user-assets/total-assets", {
      params: {
        address: t
      }
    }), T = da(g.data.totalAssets, 2);
    n(T);
  }, y = () => {
    var g;
    return (g = Ve.find((T) => T.name === m)) == null ? void 0 : g.icon;
  }, p = async (g) => {
    h(g);
  }, b = () => {
    l(!r), r && c();
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: w(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: w(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${e})`
            }
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: w(
          "relative z-10",
          "tablet:flex tablet:flex-wrap tablet:justify-between",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("div", { className: w(
              'text-white font-bold leading-tight font-["Asap"]',
              "text-lg tablet:text-[32px]",
              "mb-[25px] tablet:mb-[50px]"
            ), children: "Total asset" }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: e,
                  alt: "avatar",
                  className: w(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ o.jsx("div", { className: w(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ o.jsxs("div", { className: w(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: [
                  /* @__PURE__ */ o.jsx("span", { className: "flex items-center", children: r ? "******" : `$${s} USD` }),
                  /* @__PURE__ */ o.jsx(
                    "img",
                    {
                      src: r ? "/imgs/icons/close_eye.svg" : "/imgs/icons/open_eye.svg",
                      alt: "",
                      className: w(
                        "w-[30px] h-[30px]",
                        "cursor-pointer"
                      ),
                      onClick: b
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: w(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ o.jsxs("div", { className: w(
              "flex items-center gap-3 mb-[28px]",
              "justify-center tablet:justify-end"
            ), children: [
              /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: " bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => i(!0),
                  children: [
                    /* @__PURE__ */ o.jsx("img", { src: "/imgs/icons/send.svg", alt: "" }),
                    /* @__PURE__ */ o.jsx("span", { className: "text-black text-xs font-bold", children: "Send" })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "div",
                {
                  className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => d(!0),
                  children: [
                    /* @__PURE__ */ o.jsx("img", { src: "/imgs/icons/receive.svg", alt: "" }),
                    /* @__PURE__ */ o.jsx("span", { className: "text-black text-xs font-bold", children: "Receive" })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(gt, { children: [
                /* @__PURE__ */ o.jsxs(yt, { className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ o.jsx(
                    "img",
                    {
                      src: y(),
                      className: "w-[16px] h-[16px]",
                      alt: ""
                    }
                  ),
                  /* @__PURE__ */ o.jsx("img", { src: "/imgs/icons/arrow_down.svg", alt: "" })
                ] }),
                /* @__PURE__ */ o.jsx(Pe, { className: "bg-white", children: Ve.map((g) => /* @__PURE__ */ o.jsx(
                  je,
                  {
                    onClick: () => p(g.name),
                    children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ o.jsx(
                        "img",
                        {
                          src: g.icon,
                          className: "w-[16px] h-[16px]",
                          alt: ""
                        }
                      ),
                      /* @__PURE__ */ o.jsx("span", { className: w(
                        m === g.name ? "text-brand-foreground" : "text-black"
                      ), children: g.name }),
                      m === g.name && /* @__PURE__ */ o.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
                    ] })
                  },
                  g.name
                )) })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(
              be,
              {
                address: t,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsx(
          Pa,
          {
            open: a,
            setOpen: i,
            address: t,
            tokenType: m,
            onClose: () => i(!1)
          }
        ),
        /* @__PURE__ */ o.jsx(
          _a,
          {
            address: t,
            open: u,
            setOpen: d,
            onClose: () => d(!1)
          }
        )
      ]
    }
  );
}
function $a() {
  return /* @__PURE__ */ o.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ o.jsx(Ha, {}),
    /* @__PURE__ */ o.jsx("div", { className: w(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ o.jsx(Wt, {}) })
  ] });
}
function Va() {
  const e = _t();
  return console.error(e), /* @__PURE__ */ o.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ o.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ o.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ o.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ o.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
function Os({
  total: e = 0,
  pageSize: t = 30
} = {}) {
  const [a, i] = f.useState({
    current: 1,
    total: e,
    pageSize: t
  });
  return {
    pagination: a,
    handlePageChange: (h) => {
      q("handlePageChange", h), i((s) => ({
        ...s,
        current: h
      }));
    },
    updateTotal: (h) => {
      i((s) => ({
        ...s,
        total: h
      }));
    },
    updatePageSize: (h) => {
      i((s) => ({
        ...s,
        pageSize: h,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const Ka = 30, Qa = async () => {
  try {
    const e = await H.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: Ka
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = ye(e);
    throw new Error(t.message);
  }
}, Ya = Ht([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-BPAnzSbR.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ o.jsx(Va, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-DXnTo41F.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-DhXGcjv9.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-BoiDs7LR.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-Db6GBqZz.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-6VsKQ2Cs.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ o.jsx($a, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-BukYVmjn.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-oLqxGJah.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-Dl70dH_a.js");
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
                  const { default: e } = await import("./page-BDqeJEOU.js");
                  return { Component: e };
                },
                loader: Qa
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-Bv72Yexf.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-BGZMwYiS.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-DsfCpV6_.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-_soC0omo.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-DUp-MK68.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-BV2oWg9W.js");
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
                          const { default: e } = await import("./page-DGu67Ng1.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-D0jAga4V.js");
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
                  const { default: e } = await import("./page-DCNUUlu0.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-xCp8lxXv.js");
                  return { Component: e };
                }
              }
            ]
          }
        ]
      }
    ]
  }
]), Rt = f.createContext(void 0), Ga = ({ children: e }) => {
  const [t, a] = f.useState(!1), [i, u] = f.useState(!1), [d, m] = f.useState({ name: "", url: "" }), [h, s] = f.useState(!1), [n, r] = f.useState(), l = f.useRef(), c = (y) => {
    r(y), l.current = y;
  };
  return /* @__PURE__ */ o.jsx(Rt.Provider, { value: {
    isModalOpen: t,
    setIsModalOpen: a,
    displayUriInput: i,
    setDisplayUriInput: u,
    dappInfo: d,
    setDappInfo: m,
    isConnected: h,
    setIsConnected: s,
    web3wallet: n,
    setWeb3Wallet: c,
    web3walletRef: l
  }, children: e });
}, Us = () => f.useContext(Rt);
function qa() {
  const [e, t] = f.useState(!1);
  return f.useEffect(() => {
    const a = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(a);
  }, []), /* @__PURE__ */ o.jsx(
    aa,
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
      transition: sa,
      toastClassName: w(
        "text-sm",
        "mobile:top-[82px]",
        "max-w-full mobile:max-w-[375px] tablet:max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var Ie = "moonpay-react-sdk-embedded-frame", Xa = ({
  props: e,
  apiKey: t,
  debug: a,
  environment: i,
  signature: u
}) => {
  const {
    // params
    currencyCode: d,
    defaultCurrencyCode: m,
    walletAddress: h,
    walletAddressTag: s,
    walletAddresses: n,
    walletAddressTags: r,
    colorCode: l,
    theme: c,
    themeId: y,
    language: p,
    baseCurrencyCode: b,
    baseCurrencyAmount: g,
    quoteCurrencyAmount: T,
    lockAmount: N,
    email: x,
    externalTransactionId: E,
    externalCustomerId: D,
    paymentMethod: F,
    redirectURL: Q,
    showAllCurrencies: L,
    showOnlyCurrencies: _,
    showWalletAddressForm: O,
    unsupportedRegionRedirectUrl: S,
    skipUnsupportedRegionScreen: V,
    baseOrigin: U,
    // handlers
    onAuthToken: A,
    onInitiateDeposit: P,
    onKmsWalletsCreated: M,
    onLogin: W,
    onTransactionCompleted: K,
    onUnsupportedRegion: Y,
    onSwapsCustomerSetupComplete: G,
    onCloseOverlay: X,
    onTransactionCreated: Z,
    // auth
    auth: J,
    useWarnBeforeRefresh: ee,
    // other
    overlayNode: te
  } = e, oe = {
    apiKey: t,
    signature: u,
    currencyCode: d,
    defaultCurrencyCode: m,
    walletAddress: h,
    walletAddressTag: s,
    walletAddresses: n,
    walletAddressTags: r,
    colorCode: l,
    theme: c,
    themeId: y,
    language: p,
    baseCurrencyCode: b,
    baseCurrencyAmount: g,
    quoteCurrencyAmount: T,
    lockAmount: N,
    email: x,
    externalTransactionId: E,
    externalCustomerId: D,
    paymentMethod: F,
    redirectURL: Q,
    showAllCurrencies: L,
    showOnlyCurrencies: _,
    showWalletAddressForm: O,
    unsupportedRegionRedirectUrl: S,
    skipUnsupportedRegionScreen: V,
    baseOrigin: U
  }, C = {
    onAuthToken: A,
    onInitiateDeposit: P,
    onKmsWalletsCreated: M,
    onLogin: W,
    onTransactionCompleted: K,
    onUnsupportedRegion: Y,
    onSwapsCustomerSetupComplete: G,
    onCloseOverlay: X,
    onTransactionCreated: Z
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: i,
    params: oe,
    debug: a,
    handlers: C,
    auth: J,
    useWarnBeforeRefresh: ee,
    containerNodeSelector: `#${Ie}`,
    overlayNode: te
  };
}, Za = ({
  props: e,
  apiKey: t,
  debug: a,
  environment: i,
  signature: u
}) => {
  const {
    // params
    quoteCurrencyCode: d,
    defaultCurrencyCode: m,
    defaultBaseCurrencyCode: h,
    walletAddress: s,
    walletAddressTag: n,
    walletAddresses: r,
    walletAddressTags: l,
    colorCode: c,
    theme: y,
    themeId: p,
    language: b,
    baseCurrencyCode: g,
    baseCurrencyAmount: T,
    quoteCurrencyAmount: N,
    lockAmount: x,
    email: E,
    externalTransactionId: D,
    externalCustomerId: F,
    paymentMethod: Q,
    redirectURL: L,
    showAllCurrencies: _,
    showOnlyCurrencies: O,
    showWalletAddressForm: S,
    unsupportedRegionRedirectUrl: V,
    skipUnsupportedRegionScreen: U,
    mpWalletId: A,
    baseOrigin: P,
    // handlers
    onAuthToken: M,
    onInitiateDeposit: W,
    onKmsWalletsCreated: K,
    onLogin: Y,
    onTransactionCompleted: G,
    onUnsupportedRegion: X,
    onSwapsCustomerSetupComplete: Z,
    onCloseOverlay: J,
    onTransactionCreated: ee,
    // auth
    auth: te,
    useWarnBeforeRefresh: oe
  } = e, C = {
    apiKey: t,
    signature: u,
    quoteCurrencyCode: d,
    defaultCurrencyCode: m,
    defaultBaseCurrencyCode: h,
    walletAddress: s,
    walletAddressTag: n,
    walletAddresses: r,
    walletAddressTags: l,
    colorCode: c,
    theme: y,
    themeId: p,
    language: b,
    baseCurrencyCode: g,
    baseCurrencyAmount: T,
    quoteCurrencyAmount: N,
    lockAmount: x,
    email: E,
    externalTransactionId: D,
    externalCustomerId: F,
    paymentMethod: Q,
    redirectURL: L,
    showAllCurrencies: _,
    showOnlyCurrencies: O,
    showWalletAddressForm: S,
    unsupportedRegionRedirectUrl: V,
    skipUnsupportedRegionScreen: U,
    mpWalletId: A,
    baseOrigin: P
  }, j = {
    onAuthToken: M,
    onInitiateDeposit: W,
    onKmsWalletsCreated: K,
    onLogin: Y,
    onTransactionCompleted: G,
    onUnsupportedRegion: X,
    onSwapsCustomerSetupComplete: Z,
    onCloseOverlay: J,
    onTransactionCreated: ee
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: i,
    params: C,
    debug: a,
    handlers: j,
    auth: te,
    useWarnBeforeRefresh: oe,
    containerNodeSelector: `#${Ie}`
  };
};
async function Ja(e = "v1") {
  return new Promise((t, a) => {
    const i = `https://static.moonpay.com/web-sdk/${e}/moonpay-web-sdk.min.js`, u = document.querySelector(`script[src="${i}"]`), d = (m = 0) => {
      if (window.MoonPayWebSdk) {
        t(window.MoonPayWebSdk.init);
        return;
      }
      if (m > 100) {
        a(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => d(m + 1), 100);
    };
    if (u)
      d();
    else {
      const m = document.createElement("script");
      m.async = !0, m.src = i, m.addEventListener("load", () => {
        var h;
        t((h = window.MoonPayWebSdk) == null ? void 0 : h.init);
      }), m.addEventListener("error", () => {
        a(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(m);
    }
  });
}
function es(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var he = () => {
}, ts = {
  info: he,
  warn: he,
  error: he
}, as = class Pt {
  constructor({
    logger: t,
    prefix: a
  }) {
    R(this, "prefix");
    R(this, "logger");
    this.logger = t, this.prefix = a ?? ["Logger"];
  }
  if(t) {
    return t ? this : new Pt({ logger: ts });
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
}, fe = f.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), ss = ({
  children: e,
  apiKey: t,
  debug: a = !1
}) => {
  const i = es(t), [u, d] = f.useState({
    apiKey: t,
    environment: i,
    debug: a
  }), m = f.useCallback(async () => {
    const h = await Ja();
    d((s) => ({ ...s, init: h }));
  }, []);
  return f.useEffect(() => {
    u.init || m();
  }, [m, u.init]), /* @__PURE__ */ o.jsx(fe.Provider, { value: u, children: e });
}, ns = class extends as {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, rs = (e, t, a) => {
  const i = f.useRef(null), { init: u, debug: d } = f.useContext(fe), m = f.useRef(new ns().if(d || !1)), h = f.useCallback(async () => {
    var s, n;
    if (i.current) {
      if (!a && ("walletAddress" in e || "walletAddresses" in e) && m.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), a) {
        const r = i.current.generateUrlForSigning();
        try {
          const l = await (a == null ? void 0 : a(r));
          if (!l)
            return;
          (s = i.current) == null || s.updateSignature(l);
        } catch (l) {
          m.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            l
          );
        }
      }
      t && ((n = i.current) == null || n.show());
    }
  }, [a, t, e]);
  f.useEffect(() => {
    i.current && i.current.close();
    const s = (u == null ? void 0 : u(e)) || null;
    i.current = s, h();
  }, [u, e, h]);
}, os = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function jt({
  config: e,
  onUrlSignatureRequested: t,
  visible: a = !0,
  className: i,
  style: u
}) {
  return rs(e, a, t), a ? /* @__PURE__ */ o.jsx(
    "div",
    {
      id: Ie,
      className: i,
      style: e.variant === "embedded" ? {
        ...os,
        ...u
      } : void 0
    }
  ) : null;
}
function zs(e) {
  const { apiKey: t, environment: a } = f.useContext(fe), i = f.useMemo(
    () => Xa({
      props: e,
      apiKey: t,
      environment: a,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, a]
  );
  return /* @__PURE__ */ o.jsx(
    jt,
    {
      config: i,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function Fs(e) {
  const { apiKey: t, environment: a } = f.useContext(fe), i = f.useMemo(
    () => Za({
      props: e,
      apiKey: t,
      environment: a,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, a]
  );
  return /* @__PURE__ */ o.jsx(
    jt,
    {
      config: i,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const is = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function ls({ children: e }) {
  return /* @__PURE__ */ o.jsx(
    ss,
    {
      apiKey: is,
      debug: !0,
      children: e
    }
  );
}
const cs = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, ds = {
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
}, us = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, ps = {
  authenticationError: "Authentication Error. Please sign in again."
}, ms = {
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
  header: cs,
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
  vastWalletConnect: ds,
  toastSuccess: us,
  toastError: ps
}, fs = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, hs = {
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
}, gs = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, ys = {
  authenticationError: "认证错误，请重新登录。"
}, bs = {
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
  header: fs,
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
  vastWalletConnect: hs,
  toastSuccess: gs,
  toastError: ys
}, xs = {
  en: {
    translation: ms
  },
  zh: {
    translation: bs
  }
};
q("savedLng", ut);
const vs = ut.getData();
ct.use(na).init({
  resources: xs,
  lng: vs || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function ws() {
  return /* @__PURE__ */ o.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ o.jsx(f.Suspense, { children: /* @__PURE__ */ o.jsx(ra, { i18n: ct, children: /* @__PURE__ */ o.jsxs(Ga, { children: [
    /* @__PURE__ */ o.jsx(ls, { children: /* @__PURE__ */ o.jsx($t, { router: Ya }) }),
    /* @__PURE__ */ o.jsx(qa, {})
  ] }) }) }) });
}
const Cs = "theme_light", Es = "0.0.0", Ns = "module", As = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, Ts = {
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
  dayjs: "^1.11.13",
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
}, Ss = {
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
}, Ms = {
  name: Cs,
  private: !0,
  version: Es,
  type: Ns,
  scripts: As,
  dependencies: Ts,
  devDependencies: Ss
};
q("isDev", mt);
function Ke(e) {
  const t = ge(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ o.jsx(ws, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
mt ? Ke("root") : typeof window < "u" && (window[`mount_${Ms.name}`] = Ke);
export {
  ce as B,
  be as C,
  gt as D,
  xe as I,
  xa as L,
  zs as M,
  Pa as S,
  de as T,
  I as a,
  yt as b,
  w as c,
  Pe as d,
  je as e,
  q as f,
  H as g,
  We as h,
  He as i,
  ye as j,
  Ea as k,
  ut as l,
  da as m,
  ja as n,
  bt as o,
  ve as p,
  ht as q,
  Os as r,
  pt as s,
  Ka as t,
  Us as u,
  Fs as v,
  Ke as w
};
