var _n = Object.defineProperty;
var fs = (t) => {
  throw TypeError(t);
};
var qn = (t, e, s) => e in t ? _n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var _ = (t, e, s) => qn(t, typeof e != "symbol" ? e + "" : e, s), Pt = (t, e, s) => e.has(t) || fs("Cannot " + s);
var l = (t, e, s) => (Pt(t, e, "read from private field"), s ? s.call(t) : e.get(t)), S = (t, e, s) => e.has(t) ? fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s, n) => (Pt(t, e, "write to private field"), n ? n.call(t, s) : e.set(t, s), s), M = (t, e, s) => (Pt(t, e, "access private method"), s);
var gt = (t, e, s, n) => ({
  set _(o) {
    w(t, e, o, s);
  },
  get _() {
    return l(t, e, n);
  }
});
import { j as u, S as Hn, d as Ws, g as Ks, P as Wn, C as $s, I as Vs, i as Gs, k as Ys, l as Xs, L as Zs, m as Js, n as Kn, T as $n, o as en, p as tn, q as sn, r as Vn } from "./vendor-radix-hWeKeDdS.js";
import { p as Qe, b as nn, a as x, c as rn, R as W, O as Gn, u as Yn, f as Xn, h as Zn } from "./vendor-react-DM3ZG7W6.js";
import { t as Jn, c as er, C as tr, a as sr, b as nr, d as rr, e as ar, X as an, L as ir, f as ps, g as or, h as lr } from "./vendor-ui-utils-CO-kYQvn.js";
import { a as rt, u as es, C as cr, B as be, Q as ur, X as dr, i as on, b as hr, I as fr } from "./vendor-utils-CAOmphX6.js";
import { d as ln, C as ms, c as Rt, f as ts, h as ss, E as pr, m as mr, a as yr, b as ys, i as gs, p as bs } from "./vendor-web3-CyMcXvNw.js";
import "./vendor-walletconnect-CjJn2oVy.js";
var jt, bt = nn;
if (Qe.env.NODE_ENV === "production")
  jt = bt.createRoot, bt.hydrateRoot;
else {
  var vs = bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  jt = function(t, e) {
    vs.usingClientEntryPoint = !0;
    try {
      return bt.createRoot(t, e);
    } finally {
      vs.usingClientEntryPoint = !1;
    }
  };
}
const xe = console.log.bind(console, "🚀");
function N(...t) {
  return Jn(er(t));
}
class le {
  constructor(e) {
    _(this, "isClient");
    _(this, "key");
    this.isClient = typeof window < "u", this.key = e;
  }
  set(e) {
    this.isClient && localStorage.setItem(this.key, e);
  }
  get() {
    return this.isClient ? localStorage.getItem(this.key) : null;
  }
  remove() {
    this.isClient && localStorage.removeItem(this.key);
  }
  setData(e) {
    if (this.isClient)
      try {
        const s = JSON.stringify(e);
        return localStorage.setItem(this.key, s), !0;
      } catch (s) {
        return console.error("Failed to stringify object", s), !1;
      }
    return !1;
  }
  getData() {
    if (this.isClient) {
      const e = localStorage.getItem(this.key);
      if (e)
        try {
          return JSON.parse(e);
        } catch (s) {
          return console.error("Failed to parse JSON", s), null;
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
const cn = new le("language"), xs = new le("hideTotalAsset");
class gr {
  constructor() {
    _(this, "storages");
    this.storages = {
      username: new le("username"),
      displayName: new le("displayName"),
      avatarIndex: new le("avatarIndex"),
      address: new le("address"),
      authenticatedHeader: new le("authenticatedHeader"),
      authenticated: new le("authenticated"),
      desUsername: new le("desUsername"),
      aeskey: new le("aeskey")
    };
  }
  saveAuthDataByKey(e, s) {
    return this.storages[e].setData(s);
  }
  getAuthDataByKey(e) {
    return this.storages[e].getData();
  }
  removeAuthDataByKey(e) {
    this.storages[e].remove();
  }
  clearAllAuthData() {
    for (const e in this.storages)
      this.storages.hasOwnProperty(e) && this.storages[e].remove();
  }
  all() {
    const e = {};
    for (const s in this.storages)
      this.storages.hasOwnProperty(s) && (e[s] = this.storages[s].getData());
    return e;
  }
  isAuthenticated() {
    return !!this.getAuthDataByKey("address");
  }
  getUserRandomAvatar() {
    const e = this.getAuthDataByKey("avatarIndex");
    return e ? `/static/avatars/${e}.svg` : "/static/avatars/1.svg";
  }
}
const $ = new gr(), ns = /* @__PURE__ */ ln({
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
}), un = /* @__PURE__ */ ln({
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
}), ws = (t, e = 6) => parseFloat(t).toFixed(e), br = (t, e = 2) => {
  const n = (typeof t == "string" ? parseFloat(t) : t).toFixed(e), [o, d] = n.split("."), f = o.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return d ? `${f}.${d}` : f;
}, vr = (t) => {
  if (t === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: ms.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: "https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://sepolia.etherscan.io"
    };
  if (t === "MATIC" || t === "TVWT")
    return {
      chainId: "0x13882",
      displayName: "Polygon Amoy Testnet",
      chainNamespace: ms.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function Cs(t) {
  if (t === "ETH")
    return un;
  if (t === "MATIC" || t === "TVWT")
    return ns;
}
const Es = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, dn = Qe.env.NODE_ENV === "development";
function xt(t) {
  var e;
  if (rt.isAxiosError(t)) {
    const s = t;
    return s.response ? { message: `${((e = s.response.data) == null ? void 0 : e.message) || s.message}` } : s.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${s.message}` };
  } else return t instanceof Error ? { message: t.message } : { message: "An unknown error occurred" };
}
function It({
  iconSize: t = 20,
  address: e,
  className: s = "",
  iconClassName: n = "",
  ...o
}) {
  const { t: d } = es();
  return /* @__PURE__ */ u.jsx(cr, { text: e, onCopy: () => {
    be.success(d("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ u.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ u.jsx("span", { ...o, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ u.jsx("span", { className: `text-primary ${s}`, children: e }) }),
    /* @__PURE__ */ u.jsx(
      tr,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${n}`,
        size: t
      }
    )
  ] }) });
}
const xr = sr(
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
), wt = x.forwardRef(
  ({ className: t, variant: e, size: s, asChild: n = !1, ...o }, d) => {
    const f = n ? Hn : "button";
    return /* @__PURE__ */ u.jsx(
      f,
      {
        className: N(xr({ variant: e, size: s, className: t })),
        ref: d,
        ...o
      }
    );
  }
);
wt.displayName = "Button";
const Ot = x.forwardRef(
  ({ className: t, type: e, ...s }, n) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: e,
      className: N(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        t
      ),
      ref: n,
      ...s
    }
  )
);
Ot.displayName = "Input";
const wr = [
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
class rs {
  constructor(e, s, n) {
    _(this, "name");
    _(this, "symbol");
    _(this, "decimals");
    this.name = e, this.symbol = s, this.decimals = n;
  }
}
class Cr extends rs {
  constructor() {
    super("Ethereum", "ETH", 18);
    _(this, "publicClient");
    _(this, "openUrl");
    this.publicClient = Rt({
      chain: un,
      transport: ss("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return ts(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-sepolia.etherscan.io/api", d = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await rt.get(n, {
      params: {
        ...d,
        action: "txlist",
        address: s,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Er extends rs {
  constructor() {
    super("Polygon", "MATIC", 18);
    _(this, "publicClient");
    _(this, "openUrl");
    this.publicClient = Rt({
      chain: ns,
      transport: ss("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return ts(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await rt.get(n, {
      params: {
        ...d,
        action: "txlist",
        address: s,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Sr extends rs {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    _(this, "publicClient");
    _(this, "contractAddress");
    _(this, "contractAbi");
    _(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = wr, this.publicClient = Rt({
      chain: ns,
      transport: ss("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [s]
    });
    return ts(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await rt.get(n, {
      params: {
        ...d,
        action: "tokentx",
        address: s,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const je = class je {
  constructor() {
    _(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", Cr],
      ["MATIC", Er],
      ["TVWT", Sr]
    ]);
  }
  static getInstance() {
    return je.instance || (je.instance = new je()), je.instance;
  }
  createToken(e) {
    const s = this.tokenMap.get(e);
    if (!s)
      throw new Error(`Unsupported token type: ${e}`);
    return new s();
  }
  getAllTokenTypes() {
    return Array.from(this.tokenMap.keys());
  }
};
_(je, "instance");
let Ct = je;
function Ar() {
  const [t, e] = x.useState("/imgs/logos/logo.svg");
  return {
    logoPath: t
  };
}
function Rr({
  size: t = 32,
  className: e = ""
}) {
  const [s, n] = x.useState("");
  return x.useEffect(() => {
    const {
      username: o
    } = $.all();
    if (o) {
      const d = o.length > 0 ? o[0] : "";
      n(d);
    }
  }, []), /* @__PURE__ */ u.jsx(
    "div",
    {
      className: N(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${t}px] h-[${t}px]`,
        e
      ),
      children: /* @__PURE__ */ u.jsx("div", { className: N(
        // 'flex items-center justify-center',
      ), children: s })
    }
  );
}
function Tr({
  size: t = 32,
  className: e,
  type: s = "spin",
  fullscreen: n = !1
}) {
  Ar();
  const [o, d] = x.useState(!1);
  x.useEffect(() => (d(!0), () => d(!1)), []);
  const r = s === "breathe" ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx(Rr, { className: N(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ u.jsx("style", { children: `
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
  ] }) : /* @__PURE__ */ u.jsx("div", { className: N(
    "text-brand-foreground",
    e
  ), children: /* @__PURE__ */ u.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: t,
      height: t,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ u.jsx("g", { children: /* @__PURE__ */ u.jsx(
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
          children: /* @__PURE__ */ u.jsx(
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
  return n && o ? nn.createPortal(
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: r }),
    document.body
  ) : r;
}
const hn = x.forwardRef(
  ({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
    "textarea",
    {
      className: N(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ref: s,
      ...e
    }
  )
);
hn.displayName = "Textarea";
var fn = /* @__PURE__ */ ((t) => (t.PURCHASE = "PURCHASE", t.SELL = "SELL", t.TRANSFER = "TRANSFER", t.SWAP = "SWAP", t.INVITE_TRANSFER = "INVITE_TRANSFER", t))(fn || {}), Tt = /* @__PURE__ */ ((t) => (t.PASSPORT = "PASSPORT", t.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", t))(Tt || {});
class as {
  constructor(e) {
    _(this, "config");
    if (this.constructor === as)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = e;
  }
}
rt.defaults.withCredentials = !0;
const fe = rt.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
fe.interceptors.response.use(
  (t) => t,
  async (t) => {
    var e, s;
    if (((e = t.response) == null ? void 0 : e.status) === 401 || ((s = t.response) == null ? void 0 : s.status) === 403) {
      const n = t.response.data.message || "Authentication error";
      console.log(`${n}, redirecting to login...`), $.clearAllAuthData(), typeof window < "u" && (be.error(n), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(t);
  }
);
class Nr extends as {
  constructor() {
    super({
      serviceType: Tt.WEB3AUTH_WITH_MPC
    });
    _(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: s
  }) {
    const { data: n } = await fe.post("/keymanagement/signup", {
      username: s
    }), { address: o, displayName: d, avatarIndex: f } = n;
    $.saveAuthDataByKey("address", o), $.saveAuthDataByKey("username", s), $.saveAuthDataByKey("avatarIndex", f), d ? $.saveAuthDataByKey("displayName", d) : $.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: s }) {
    const { data: n } = await fe.post("/keymanagement/signin", {
      username: s
    }), { address: o, displayName: d, avatarIndex: f } = n;
    $.saveAuthDataByKey("address", o), $.saveAuthDataByKey("username", s), $.saveAuthDataByKey("avatarIndex", f), d ? $.saveAuthDataByKey("displayName", d) : $.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: s,
    amount: n,
    token: o,
    note: d,
    transactionType: f
  }) {
    const { data: {
      success: p,
      needOtp: r,
      hash: i,
      message: a,
      transactionId: c,
      // not used
      transactionPayload: h,
      userEmail: b,
      toEmail: y
    } } = await fe.post("/transaction/sign", {
      from: $.all().address,
      to: s,
      amount: n,
      token: o,
      note: d,
      transactionType: f
    });
    return {
      success: p,
      needOtp: r,
      hash: i,
      message: a,
      transactionId: c
    };
  }
  async signTransactionWithOTP({
    transactionId: s,
    otp: n
  }) {
    const { data: {
      token: o,
      hash: d,
      // not used
      transactionPayload: f,
      userEmail: p,
      toEmail: r,
      note: i,
      transactionType: a
    } } = await fe.post("/transaction/verify-to-sign", {
      transactionId: s,
      OTP: n
    });
    return {
      success: !0,
      hash: d,
      token: o
    };
  }
  createClientByToken(s) {
    const n = this.coreKitInstance, o = vr(s), d = new pr({ config: { chainConfig: o } });
    d.setupProvider(mr(n));
    const f = yr({
      chain: Cs(s),
      transport: ys(d)
    }), p = Rt({
      chain: Cs(s),
      transport: ys(d)
    });
    return {
      walletClient: f,
      publicClient: p
    };
  }
  async waitForTransactionReceipt(s, n) {
    const { publicClient: o } = this.createClientByToken(n);
    return await o.waitForTransactionReceipt({
      hash: s
    });
  }
  async test() {
    await fe.post("/keymanagement/test-mpc");
  }
}
class Pr {
  static getService(e) {
    switch (e) {
      case Tt.WEB3AUTH_WITH_MPC:
        return new Nr();
      default:
        throw new Error(`Unsupported service type: ${e}`);
    }
  }
}
const Mr = Tt.WEB3AUTH_WITH_MPC, kr = Pr.getService(Mr), pn = Kn, mn = $n, jr = x.forwardRef(({ className: t, inset: e, children: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Ws,
  {
    ref: o,
    className: N(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      s,
      /* @__PURE__ */ u.jsx(nr, { className: "ml-auto h-4 w-4" })
    ]
  }
));
jr.displayName = Ws.displayName;
const Ir = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Ks,
  {
    ref: s,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Ir.displayName = Ks.displayName;
const is = x.forwardRef(({ className: t, sideOffset: e = 4, ...s }, n) => /* @__PURE__ */ u.jsx(Wn, { children: /* @__PURE__ */ u.jsx(
  $s,
  {
    ref: n,
    sideOffset: e,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...s
  }
) }));
is.displayName = $s.displayName;
const os = x.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Vs,
  {
    ref: n,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...s
  }
));
os.displayName = Vs.displayName;
const Or = x.forwardRef(({ className: t, children: e, checked: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Gs,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: s,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Ys, { children: /* @__PURE__ */ u.jsx(rr, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Or.displayName = Gs.displayName;
const Dr = x.forwardRef(({ className: t, children: e, ...s }, n) => /* @__PURE__ */ u.jsxs(
  Xs,
  {
    ref: n,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Ys, { children: /* @__PURE__ */ u.jsx(ar, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Dr.displayName = Xs.displayName;
const Fr = x.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Zs,
  {
    ref: n,
    className: N(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...s
  }
));
Fr.displayName = Zs.displayName;
const Br = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Js,
  {
    ref: s,
    className: N("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Br.displayName = Js.displayName;
const Ur = Ct.getInstance().getAllTokenTypes();
function Lr({
  open: t,
  setOpen: e,
  balance: s,
  address: n,
  tokenType: o,
  defaultTo: d,
  defaultAmount: f,
  defaultNote: p,
  onClose: r
}) {
  const [i, a] = x.useState(""), [c, h] = x.useState(""), [b, y] = x.useState(""), [m, g] = x.useState(!1), [A, C] = x.useState(""), v = x.useRef(), [E, j] = x.useState(o), [F, B] = x.useState("0"), [R, P] = x.useState(!1), [q, O] = x.useState(!1), [Z, ee] = x.useState(""), [U, H] = x.useState(""), [pe, ne] = x.useState(""), { t: L } = es();
  x.useEffect(() => {
    t ? ye(o) : lt();
  }, [t]), x.useEffect(() => {
    t && (d && a(d), f && h(f), p && y(p));
  }, [d, f, p, t]), x.useEffect(() => {
    !t && r && r();
  }, [t]);
  const me = x.useMemo(() => !i || !c || m || !q || R || !!U && U !== L("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(c) > parseFloat(F), [i, c, m, q, R, U, F]), ye = async (D) => {
    j(D);
    const K = Ct.getInstance().createToken(D);
    v.current = K, C(v.current.symbol);
    let te = await v.current.getBalance(n);
    te = ws(te), B(te);
  }, Ne = async (D) => {
    if (gs(i))
      O(!0), ee(""), H("");
    else {
      P(!0), H("");
      try {
        const K = await fe.get("/address/", {
          params: { email: D }
        });
        K.data.success ? (O(!0), ee(K.data.address)) : Es.test(D) ? (O(!0), ee(""), H(L("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (O(!1), ee(""), H(L("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        P(!1);
      }
    }
  }, Pe = () => {
    xe("to", i), i ? Ne(i) : (O(!1), ee(""), H(""));
  };
  async function Me(D) {
    try {
      const K = bs(c).toString();
      xe("amt", K), g(!0);
      const {
        needOtp: te,
        hash: hs,
        message: zn
      } = await kr.signTransaction({
        toAddress: D,
        amount: K,
        token: E,
        note: b,
        transactionType: fn.TRANSFER
      });
      hs ? (e(!1), at(hs)) : te && (be.error(zn), e(!1));
    } catch (K) {
      const te = xt(K);
      xe("errorInfo", te), be.error(te.message);
    } finally {
      g(!1);
    }
  }
  const ke = (D) => {
    var te;
    const K = `${(te = v.current) == null ? void 0 : te.openUrl}/${D}`;
    window.open(K, "_blank");
  }, at = (D) => {
    be(
      /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ u.jsx(ps, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ u.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ u.jsx(
            wt,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                ke(D);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, it = async () => {
    if (!me)
      try {
        g(!0);
        let D, K;
        if (gs(i))
          D = i;
        else if (Es.test(i) && U === L("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          K = i;
          const te = await fe.post("/invite/invite-register", {
            toEmail: K,
            from: n,
            amount: bs(c).toString(),
            token: E,
            note: b
          });
          xe("res", te), be.success(L("/dashboard.[token].sendModal.emailSentToUnregistered")), lt(), e(!1);
          return;
        } else
          D = Z;
        await Me(D), lt(), e(!1);
      } catch (D) {
        const K = xt(D);
        xe("errorInfo", K), be.error(L("/dashboard.[token].sendModal.sendError"));
      } finally {
        g(!1);
      }
  }, ot = () => {
    parseFloat(c) > parseFloat(F) ? ne("Amount exceeded") : ne("");
  }, lt = () => {
    h(""), a(""), y(""), ee(""), H(""), O(!1), P(!1);
  }, Qn = t ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ u.jsx("div", { className: N(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ u.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: L("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => e(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ u.jsx(an, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs("form", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Ot,
              {
                value: i,
                onChange: (D) => a(D.target.value.trim()),
                onBlur: Pe,
                id: "to",
                required: !0,
                placeholder: L("/dashboard.[token].sendModal.toPlaceholder"),
                className: N(
                  q && "border-green-500",
                  U && "border-destructive",
                  U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            R && /* @__PURE__ */ u.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsx(ir, { className: "animate-spin", size: 16 }) }),
            q && !R && !U && /* @__PURE__ */ u.jsx(ps, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            U && !R && /* @__PURE__ */ u.jsx(or, { className: N(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          q && Z && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-primary/60", children: Z }),
          U && /* @__PURE__ */ u.jsx("p", { className: N(
            "mt-1 text-xs text-destructive",
            U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: U })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Ot,
              {
                value: c,
                onChange: (D) => h(D.target.value.trim()),
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0,
                onBlur: ot
              }
            ),
            /* @__PURE__ */ u.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsxs(pn, { children: [
              /* @__PURE__ */ u.jsxs(mn, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ u.jsx("span", { className: "font-medium text-sm", children: E }),
                /* @__PURE__ */ u.jsx(lr, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ u.jsx(is, { align: "start", className: "bg-white", children: Ur.map((D) => /* @__PURE__ */ u.jsx(os, { onClick: () => ye(D), children: D }, D)) })
            ] }) })
          ] }),
          pe && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-destructive", children: pe })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
            hn,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: b,
              onChange: (D) => y(D.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
          "Crypto balance: ",
          ws(F),
          " ",
          A
        ] }),
        /* @__PURE__ */ u.jsx(
          wt,
          {
            onClick: it,
            className: N("py-12px"),
            disabled: me,
            children: m ? /* @__PURE__ */ u.jsx("div", { className: "", children: /* @__PURE__ */ u.jsx(Tr, {}) }) : /* @__PURE__ */ u.jsx("span", { children: L("/dashboard.[token].sendModal.title") })
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return rn.createPortal(
      Qn,
      document.body
    );
}
const Qr = Vn, yn = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  en,
  {
    ref: s,
    className: N(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
yn.displayName = en.displayName;
const Dt = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  tn,
  {
    ref: s,
    className: N(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
Dt.displayName = tn.displayName;
const Ft = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  sn,
  {
    ref: s,
    className: N(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
Ft.displayName = sn.displayName;
var zr = Object.defineProperty, Et = Object.getOwnPropertySymbols, gn = Object.prototype.hasOwnProperty, bn = Object.prototype.propertyIsEnumerable, Ss = (t, e, s) => e in t ? zr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Bt = (t, e) => {
  for (var s in e || (e = {}))
    gn.call(e, s) && Ss(t, s, e[s]);
  if (Et)
    for (var s of Et(e))
      bn.call(e, s) && Ss(t, s, e[s]);
  return t;
}, Ut = (t, e) => {
  var s = {};
  for (var n in t)
    gn.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && Et)
    for (var n of Et(t))
      e.indexOf(n) < 0 && bn.call(t, n) && (s[n] = t[n]);
  return s;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var ze;
((t) => {
  const e = class T {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(r, i, a, c) {
      if (this.version = r, this.errorCorrectionLevel = i, this.modules = [], this.isFunction = [], r < T.MIN_VERSION || r > T.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (c < -1 || c > 7)
        throw new RangeError("Mask value out of range");
      this.size = r * 4 + 17;
      let h = [];
      for (let y = 0; y < this.size; y++)
        h.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(h.slice()), this.isFunction.push(h.slice());
      this.drawFunctionPatterns();
      const b = this.addEccAndInterleave(a);
      if (this.drawCodewords(b), c == -1) {
        let y = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const g = this.getPenaltyScore();
          g < y && (c = m, y = g), this.applyMask(m);
        }
      }
      o(0 <= c && c <= 7), this.mask = c, this.applyMask(c), this.drawFormatBits(c), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(r, i) {
      const a = t.QrSegment.makeSegments(r);
      return T.encodeSegments(a, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(r, i) {
      const a = t.QrSegment.makeBytes(r);
      return T.encodeSegments([a], i);
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
    static encodeSegments(r, i, a = 1, c = 40, h = -1, b = !0) {
      if (!(T.MIN_VERSION <= a && a <= c && c <= T.MAX_VERSION) || h < -1 || h > 7)
        throw new RangeError("Invalid value");
      let y, m;
      for (y = a; ; y++) {
        const v = T.getNumDataCodewords(y, i) * 8, E = f.getTotalBits(r, y);
        if (E <= v) {
          m = E;
          break;
        }
        if (y >= c)
          throw new RangeError("Data too long");
      }
      for (const v of [T.Ecc.MEDIUM, T.Ecc.QUARTILE, T.Ecc.HIGH])
        b && m <= T.getNumDataCodewords(y, v) * 8 && (i = v);
      let g = [];
      for (const v of r) {
        s(v.mode.modeBits, 4, g), s(v.numChars, v.mode.numCharCountBits(y), g);
        for (const E of v.getData())
          g.push(E);
      }
      o(g.length == m);
      const A = T.getNumDataCodewords(y, i) * 8;
      o(g.length <= A), s(0, Math.min(4, A - g.length), g), s(0, (8 - g.length % 8) % 8, g), o(g.length % 8 == 0);
      for (let v = 236; g.length < A; v ^= 253)
        s(v, 8, g);
      let C = [];
      for (; C.length * 8 < g.length; )
        C.push(0);
      return g.forEach((v, E) => C[E >>> 3] |= v << 7 - (E & 7)), new T(y, i, C, h);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(r, i) {
      return 0 <= r && r < this.size && 0 <= i && i < this.size && this.modules[i][r];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const r = this.getAlignmentPatternPositions(), i = r.length;
      for (let a = 0; a < i; a++)
        for (let c = 0; c < i; c++)
          a == 0 && c == 0 || a == 0 && c == i - 1 || a == i - 1 && c == 0 || this.drawAlignmentPattern(r[a], r[c]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(r) {
      const i = this.errorCorrectionLevel.formatBits << 3 | r;
      let a = i;
      for (let h = 0; h < 10; h++)
        a = a << 1 ^ (a >>> 9) * 1335;
      const c = (i << 10 | a) ^ 21522;
      o(c >>> 15 == 0);
      for (let h = 0; h <= 5; h++)
        this.setFunctionModule(8, h, n(c, h));
      this.setFunctionModule(8, 7, n(c, 6)), this.setFunctionModule(8, 8, n(c, 7)), this.setFunctionModule(7, 8, n(c, 8));
      for (let h = 9; h < 15; h++)
        this.setFunctionModule(14 - h, 8, n(c, h));
      for (let h = 0; h < 8; h++)
        this.setFunctionModule(this.size - 1 - h, 8, n(c, h));
      for (let h = 8; h < 15; h++)
        this.setFunctionModule(8, this.size - 15 + h, n(c, h));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let r = this.version;
      for (let a = 0; a < 12; a++)
        r = r << 1 ^ (r >>> 11) * 7973;
      const i = this.version << 12 | r;
      o(i >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const c = n(i, a), h = this.size - 11 + a % 3, b = Math.floor(a / 3);
        this.setFunctionModule(h, b, c), this.setFunctionModule(b, h, c);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(r, i) {
      for (let a = -4; a <= 4; a++)
        for (let c = -4; c <= 4; c++) {
          const h = Math.max(Math.abs(c), Math.abs(a)), b = r + c, y = i + a;
          0 <= b && b < this.size && 0 <= y && y < this.size && this.setFunctionModule(b, y, h != 2 && h != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(r, i) {
      for (let a = -2; a <= 2; a++)
        for (let c = -2; c <= 2; c++)
          this.setFunctionModule(r + c, i + a, Math.max(Math.abs(c), Math.abs(a)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(r, i, a) {
      this.modules[i][r] = a, this.isFunction[i][r] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(r) {
      const i = this.version, a = this.errorCorrectionLevel;
      if (r.length != T.getNumDataCodewords(i, a))
        throw new RangeError("Invalid argument");
      const c = T.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][i], h = T.ECC_CODEWORDS_PER_BLOCK[a.ordinal][i], b = Math.floor(T.getNumRawDataModules(i) / 8), y = c - b % c, m = Math.floor(b / c);
      let g = [];
      const A = T.reedSolomonComputeDivisor(h);
      for (let v = 0, E = 0; v < c; v++) {
        let j = r.slice(E, E + m - h + (v < y ? 0 : 1));
        E += j.length;
        const F = T.reedSolomonComputeRemainder(j, A);
        v < y && j.push(0), g.push(j.concat(F));
      }
      let C = [];
      for (let v = 0; v < g[0].length; v++)
        g.forEach((E, j) => {
          (v != m - h || j >= y) && C.push(E[v]);
        });
      return o(C.length == b), C;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(r) {
      if (r.length != Math.floor(T.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let c = 0; c < this.size; c++)
          for (let h = 0; h < 2; h++) {
            const b = a - h, m = (a + 1 & 2) == 0 ? this.size - 1 - c : c;
            !this.isFunction[m][b] && i < r.length * 8 && (this.modules[m][b] = n(r[i >>> 3], 7 - (i & 7)), i++);
          }
      }
      o(i == r.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(r) {
      if (r < 0 || r > 7)
        throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let a = 0; a < this.size; a++) {
          let c;
          switch (r) {
            case 0:
              c = (a + i) % 2 == 0;
              break;
            case 1:
              c = i % 2 == 0;
              break;
            case 2:
              c = a % 3 == 0;
              break;
            case 3:
              c = (a + i) % 3 == 0;
              break;
            case 4:
              c = (Math.floor(a / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              c = a * i % 2 + a * i % 3 == 0;
              break;
            case 6:
              c = (a * i % 2 + a * i % 3) % 2 == 0;
              break;
            case 7:
              c = ((a + i) % 2 + a * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][a] && c && (this.modules[i][a] = !this.modules[i][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let r = 0;
      for (let h = 0; h < this.size; h++) {
        let b = !1, y = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[h][g] == b ? (y++, y == 5 ? r += T.PENALTY_N1 : y > 5 && r++) : (this.finderPenaltyAddHistory(y, m), b || (r += this.finderPenaltyCountPatterns(m) * T.PENALTY_N3), b = this.modules[h][g], y = 1);
        r += this.finderPenaltyTerminateAndCount(b, y, m) * T.PENALTY_N3;
      }
      for (let h = 0; h < this.size; h++) {
        let b = !1, y = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[g][h] == b ? (y++, y == 5 ? r += T.PENALTY_N1 : y > 5 && r++) : (this.finderPenaltyAddHistory(y, m), b || (r += this.finderPenaltyCountPatterns(m) * T.PENALTY_N3), b = this.modules[g][h], y = 1);
        r += this.finderPenaltyTerminateAndCount(b, y, m) * T.PENALTY_N3;
      }
      for (let h = 0; h < this.size - 1; h++)
        for (let b = 0; b < this.size - 1; b++) {
          const y = this.modules[h][b];
          y == this.modules[h][b + 1] && y == this.modules[h + 1][b] && y == this.modules[h + 1][b + 1] && (r += T.PENALTY_N2);
        }
      let i = 0;
      for (const h of this.modules)
        i = h.reduce((b, y) => b + (y ? 1 : 0), i);
      const a = this.size * this.size, c = Math.ceil(Math.abs(i * 20 - a * 10) / a) - 1;
      return o(0 <= c && c <= 9), r += c * T.PENALTY_N4, o(0 <= r && r <= 2568888), r;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const r = Math.floor(this.version / 7) + 2, i = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (r * 2 - 2)) * 2;
        let a = [6];
        for (let c = this.size - 7; a.length < r; c -= i)
          a.splice(1, 0, c);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(r) {
      if (r < T.MIN_VERSION || r > T.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let i = (16 * r + 128) * r + 64;
      if (r >= 2) {
        const a = Math.floor(r / 7) + 2;
        i -= (25 * a - 10) * a - 55, r >= 7 && (i -= 36);
      }
      return o(208 <= i && i <= 29648), i;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(r, i) {
      return Math.floor(T.getNumRawDataModules(r) / 8) - T.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r] * T.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(r) {
      if (r < 1 || r > 255)
        throw new RangeError("Degree out of range");
      let i = [];
      for (let c = 0; c < r - 1; c++)
        i.push(0);
      i.push(1);
      let a = 1;
      for (let c = 0; c < r; c++) {
        for (let h = 0; h < i.length; h++)
          i[h] = T.reedSolomonMultiply(i[h], a), h + 1 < i.length && (i[h] ^= i[h + 1]);
        a = T.reedSolomonMultiply(a, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(r, i) {
      let a = i.map((c) => 0);
      for (const c of r) {
        const h = c ^ a.shift();
        a.push(0), i.forEach((b, y) => a[y] ^= T.reedSolomonMultiply(b, h));
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(r, i) {
      if (r >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let c = 7; c >= 0; c--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (i >>> c & 1) * r;
      return o(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(r) {
      const i = r[1];
      o(i <= this.size * 3);
      const a = i > 0 && r[2] == i && r[3] == i * 3 && r[4] == i && r[5] == i;
      return (a && r[0] >= i * 4 && r[6] >= i ? 1 : 0) + (a && r[6] >= i * 4 && r[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(r, i, a) {
      return r && (this.finderPenaltyAddHistory(i, a), i = 0), i += this.size, this.finderPenaltyAddHistory(i, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(r, i) {
      i[0] == 0 && (r += this.size), i.pop(), i.unshift(r);
    }
  };
  e.MIN_VERSION = 1, e.MAX_VERSION = 40, e.PENALTY_N1 = 3, e.PENALTY_N2 = 3, e.PENALTY_N3 = 40, e.PENALTY_N4 = 10, e.ECC_CODEWORDS_PER_BLOCK = [
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
  ], e.NUM_ERROR_CORRECTION_BLOCKS = [
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
  ], t.QrCode = e;
  function s(p, r, i) {
    if (r < 0 || r > 31 || p >>> r)
      throw new RangeError("Value out of range");
    for (let a = r - 1; a >= 0; a--)
      i.push(p >>> a & 1);
  }
  function n(p, r) {
    return (p >>> r & 1) != 0;
  }
  function o(p) {
    if (!p)
      throw new Error("Assertion error");
  }
  const d = class Q {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(r, i, a) {
      if (this.mode = r, this.numChars = i, this.bitData = a, i < 0)
        throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(r) {
      let i = [];
      for (const a of r)
        s(a, 8, i);
      return new Q(Q.Mode.BYTE, r.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(r) {
      if (!Q.isNumeric(r))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let a = 0; a < r.length; ) {
        const c = Math.min(r.length - a, 3);
        s(parseInt(r.substring(a, a + c), 10), c * 3 + 1, i), a += c;
      }
      return new Q(Q.Mode.NUMERIC, r.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(r) {
      if (!Q.isAlphanumeric(r))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let i = [], a;
      for (a = 0; a + 2 <= r.length; a += 2) {
        let c = Q.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)) * 45;
        c += Q.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a + 1)), s(c, 11, i);
      }
      return a < r.length && s(Q.ALPHANUMERIC_CHARSET.indexOf(r.charAt(a)), 6, i), new Q(Q.Mode.ALPHANUMERIC, r.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(r) {
      return r == "" ? [] : Q.isNumeric(r) ? [Q.makeNumeric(r)] : Q.isAlphanumeric(r) ? [Q.makeAlphanumeric(r)] : [Q.makeBytes(Q.toUtf8ByteArray(r))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(r) {
      let i = [];
      if (r < 0)
        throw new RangeError("ECI assignment value out of range");
      if (r < 128)
        s(r, 8, i);
      else if (r < 16384)
        s(2, 2, i), s(r, 14, i);
      else if (r < 1e6)
        s(6, 3, i), s(r, 21, i);
      else
        throw new RangeError("ECI assignment value out of range");
      return new Q(Q.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(r) {
      return Q.NUMERIC_REGEX.test(r);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(r) {
      return Q.ALPHANUMERIC_REGEX.test(r);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(r, i) {
      let a = 0;
      for (const c of r) {
        const h = c.mode.numCharCountBits(i);
        if (c.numChars >= 1 << h)
          return 1 / 0;
        a += 4 + h + c.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(r) {
      r = encodeURI(r);
      let i = [];
      for (let a = 0; a < r.length; a++)
        r.charAt(a) != "%" ? i.push(r.charCodeAt(a)) : (i.push(parseInt(r.substring(a + 1, a + 3), 16)), a += 2);
      return i;
    }
  };
  d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let f = d;
  t.QrSegment = d;
})(ze || (ze = {}));
((t) => {
  ((e) => {
    const s = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(o, d) {
        this.ordinal = o, this.formatBits = d;
      }
    };
    s.LOW = new s(0, 1), s.MEDIUM = new s(1, 0), s.QUARTILE = new s(2, 3), s.HIGH = new s(3, 2), e.Ecc = s;
  })(t.QrCode || (t.QrCode = {}));
})(ze || (ze = {}));
((t) => {
  ((e) => {
    const s = class {
      /*-- Constructor and fields --*/
      constructor(o, d) {
        this.modeBits = o, this.numBitsCharCount = d;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(o) {
        return this.numBitsCharCount[Math.floor((o + 7) / 17)];
      }
    };
    s.NUMERIC = new s(1, [10, 12, 14]), s.ALPHANUMERIC = new s(2, [9, 11, 13]), s.BYTE = new s(4, [8, 16, 16]), s.KANJI = new s(8, [8, 10, 12]), s.ECI = new s(7, [0, 0, 0]), e.Mode = s;
  })(t.QrSegment || (t.QrSegment = {}));
})(ze || (ze = {}));
var qe = ze;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var _r = {
  L: qe.QrCode.Ecc.LOW,
  M: qe.QrCode.Ecc.MEDIUM,
  Q: qe.QrCode.Ecc.QUARTILE,
  H: qe.QrCode.Ecc.HIGH
}, vn = 128, xn = "L", wn = "#FFFFFF", Cn = "#000000", En = !1, Sn = 1, qr = 4, Hr = 0, Wr = 0.1;
function An(t, e = 0) {
  const s = [];
  return t.forEach(function(n, o) {
    let d = null;
    n.forEach(function(f, p) {
      if (!f && d !== null) {
        s.push(
          `M${d + e} ${o + e}h${p - d}v1H${d + e}z`
        ), d = null;
        return;
      }
      if (p === n.length - 1) {
        if (!f)
          return;
        d === null ? s.push(`M${p + e},${o + e} h1v1H${p + e}z`) : s.push(
          `M${d + e},${o + e} h${p + 1 - d}v1H${d + e}z`
        );
        return;
      }
      f && d === null && (d = p);
    });
  }), s.join("");
}
function Rn(t, e) {
  return t.slice().map((s, n) => n < e.y || n >= e.y + e.h ? s : s.map((o, d) => d < e.x || d >= e.x + e.w ? o : !1));
}
function Kr(t, e, s, n) {
  if (n == null)
    return null;
  const o = t.length + s * 2, d = Math.floor(e * Wr), f = o / e, p = (n.width || d) * f, r = (n.height || d) * f, i = n.x == null ? t.length / 2 - p / 2 : n.x * f, a = n.y == null ? t.length / 2 - r / 2 : n.y * f, c = n.opacity == null ? 1 : n.opacity;
  let h = null;
  if (n.excavate) {
    let y = Math.floor(i), m = Math.floor(a), g = Math.ceil(p + i - y), A = Math.ceil(r + a - m);
    h = { x: y, y: m, w: g, h: A };
  }
  const b = n.crossOrigin;
  return { x: i, y: a, h: r, w: p, excavation: h, opacity: c, crossOrigin: b };
}
function $r(t, e) {
  return e != null ? Math.max(Math.floor(e), 0) : t ? qr : Hr;
}
function Tn({
  value: t,
  level: e,
  minVersion: s,
  includeMargin: n,
  marginSize: o,
  imageSettings: d,
  size: f,
  boostLevel: p
}) {
  let r = W.useMemo(() => {
    const y = (Array.isArray(t) ? t : [t]).reduce((m, g) => (m.push(...qe.QrSegment.makeSegments(g)), m), []);
    return qe.QrCode.encodeSegments(
      y,
      _r[e],
      s,
      void 0,
      void 0,
      p
    );
  }, [t, e, s, p]);
  const { cells: i, margin: a, numCells: c, calculatedImageSettings: h } = W.useMemo(() => {
    let b = r.getModules();
    const y = $r(n, o), m = b.length + y * 2, g = Kr(
      b,
      f,
      y,
      d
    );
    return {
      cells: b,
      margin: y,
      numCells: m,
      calculatedImageSettings: g
    };
  }, [r, f, d, n, o]);
  return {
    qrcode: r,
    margin: a,
    cells: i,
    numCells: c,
    calculatedImageSettings: h
  };
}
var Vr = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), Gr = W.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = vn,
      level: f = xn,
      bgColor: p = wn,
      fgColor: r = Cn,
      includeMargin: i = En,
      minVersion: a = Sn,
      boostLevel: c,
      marginSize: h,
      imageSettings: b
    } = n, m = Ut(n, [
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
    ]), { style: g } = m, A = Ut(m, ["style"]), C = b == null ? void 0 : b.src, v = W.useRef(null), E = W.useRef(null), j = W.useCallback(
      (U) => {
        v.current = U, typeof s == "function" ? s(U) : s && (s.current = U);
      },
      [s]
    ), [F, B] = W.useState(!1), { margin: R, cells: P, numCells: q, calculatedImageSettings: O } = Tn({
      value: o,
      level: f,
      minVersion: a,
      boostLevel: c,
      includeMargin: i,
      marginSize: h,
      imageSettings: b,
      size: d
    });
    W.useEffect(() => {
      if (v.current != null) {
        const U = v.current, H = U.getContext("2d");
        if (!H)
          return;
        let pe = P;
        const ne = E.current, L = O != null && ne !== null && ne.complete && ne.naturalHeight !== 0 && ne.naturalWidth !== 0;
        L && O.excavation != null && (pe = Rn(
          P,
          O.excavation
        ));
        const me = window.devicePixelRatio || 1;
        U.height = U.width = d * me;
        const ye = d / q * me;
        H.scale(ye, ye), H.fillStyle = p, H.fillRect(0, 0, q, q), H.fillStyle = r, Vr ? H.fill(new Path2D(An(pe, R))) : P.forEach(function(Ne, Pe) {
          Ne.forEach(function(Me, ke) {
            Me && H.fillRect(ke + R, Pe + R, 1, 1);
          });
        }), O && (H.globalAlpha = O.opacity), L && H.drawImage(
          ne,
          O.x + R,
          O.y + R,
          O.w,
          O.h
        );
      }
    }), W.useEffect(() => {
      B(!1);
    }, [C]);
    const Z = Bt({ height: d, width: d }, g);
    let ee = null;
    return C != null && (ee = /* @__PURE__ */ W.createElement(
      "img",
      {
        src: C,
        key: C,
        style: { display: "none" },
        onLoad: () => {
          B(!0);
        },
        ref: E,
        crossOrigin: O == null ? void 0 : O.crossOrigin
      }
    )), /* @__PURE__ */ W.createElement(W.Fragment, null, /* @__PURE__ */ W.createElement(
      "canvas",
      Bt({
        style: Z,
        height: d,
        width: d,
        ref: j,
        role: "img"
      }, A)
    ), ee);
  }
);
Gr.displayName = "QRCodeCanvas";
var Lt = W.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = vn,
      level: f = xn,
      bgColor: p = wn,
      fgColor: r = Cn,
      includeMargin: i = En,
      minVersion: a = Sn,
      boostLevel: c,
      title: h,
      marginSize: b,
      imageSettings: y
    } = n, m = Ut(n, [
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
    ]), { margin: g, cells: A, numCells: C, calculatedImageSettings: v } = Tn({
      value: o,
      level: f,
      minVersion: a,
      boostLevel: c,
      includeMargin: i,
      marginSize: b,
      imageSettings: y,
      size: d
    });
    let E = A, j = null;
    y != null && v != null && (v.excavation != null && (E = Rn(
      A,
      v.excavation
    )), j = /* @__PURE__ */ W.createElement(
      "image",
      {
        href: y.src,
        height: v.h,
        width: v.w,
        x: v.x + g,
        y: v.y + g,
        preserveAspectRatio: "none",
        opacity: v.opacity,
        crossOrigin: v.crossOrigin
      }
    ));
    const F = An(E, g);
    return /* @__PURE__ */ W.createElement(
      "svg",
      Bt({
        height: d,
        width: d,
        viewBox: `0 0 ${C} ${C}`,
        ref: s,
        role: "img"
      }, m),
      !!h && /* @__PURE__ */ W.createElement("title", null, h),
      /* @__PURE__ */ W.createElement(
        "path",
        {
          fill: p,
          d: `M0,0 h${C}v${C}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ W.createElement("path", { fill: r, d: F, shapeRendering: "crispEdges" }),
      j
    );
  }
);
Lt.displayName = "QRCodeSVG";
function Yr({
  address: t,
  open: e,
  setOpen: s,
  onClose: n
}) {
  const { t: o } = es(), [d, f] = x.useState("");
  x.useEffect(() => {
    const { username: i } = $.all();
    f(i);
  }, []);
  const p = async () => {
    try {
      const i = document.querySelector("#qr-code-svg");
      if (!i) return;
      const a = i.querySelector("image");
      if (a) {
        const y = a.getAttribute("href") || "", g = await (await fetch(y)).blob(), A = await new Promise((C) => {
          const v = new FileReader();
          v.onloadend = () => C(v.result), v.readAsDataURL(g);
        });
        a.setAttribute("href", A);
      }
      const c = new XMLSerializer().serializeToString(i), h = new Blob([c], { type: "image/svg+xml;charset=utf-8" }), b = URL.createObjectURL(h);
      await new Promise((y, m) => {
        const g = new Image();
        g.onload = () => {
          const A = document.createElement("canvas"), C = A.getContext("2d");
          A.width = g.width, A.height = g.height, C == null || C.drawImage(g, 0, 0), A.toBlob(async (v) => {
            if (v)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": v })
                ]), be.success(o("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), y(null);
              } catch (E) {
                m(E);
              }
          }, "image/png");
        }, g.onerror = m, g.src = b;
      });
    } catch (i) {
      be.error(i.message);
    }
  }, r = e ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ u.jsx("div", { className: N(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ u.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => n(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ u.jsx(an, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs(Qr, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ u.jsxs(yn, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ u.jsx(
            Dt,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ u.jsx(
            Dt,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs(Ft, { value: "crypto", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(It, { address: t, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Lt,
            {
              id: "qr-code-svg",
              value: t,
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
        /* @__PURE__ */ u.jsxs(Ft, { value: "email", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(It, { address: d, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Lt,
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
      /* @__PURE__ */ u.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ u.jsx(wt, { onClick: p, children: "Share QR code" }) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return rn.createPortal(
      r,
      document.body
    );
}
var yt = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(t) {
    return this.listeners.add(t), this.onSubscribe(), () => {
      this.listeners.delete(t), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, _e = typeof window > "u" || "Deno" in globalThis;
function ae() {
}
function Xr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Qt(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Nn(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function He(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function oe(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function As(t, e) {
  const {
    type: s = "all",
    exact: n,
    fetchStatus: o,
    predicate: d,
    queryKey: f,
    stale: p
  } = t;
  if (f) {
    if (n) {
      if (e.queryHash !== ls(f, e.options))
        return !1;
    } else if (!dt(e.queryKey, f))
      return !1;
  }
  if (s !== "all") {
    const r = e.isActive();
    if (s === "active" && !r || s === "inactive" && r)
      return !1;
  }
  return !(typeof p == "boolean" && e.isStale() !== p || o && o !== e.state.fetchStatus || d && !d(e));
}
function Rs(t, e) {
  const { exact: s, status: n, predicate: o, mutationKey: d } = t;
  if (d) {
    if (!e.options.mutationKey)
      return !1;
    if (s) {
      if (ut(e.options.mutationKey) !== ut(d))
        return !1;
    } else if (!dt(e.options.mutationKey, d))
      return !1;
  }
  return !(n && e.state.status !== n || o && !o(e));
}
function ls(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ut)(t);
}
function ut(t) {
  return JSON.stringify(
    t,
    (e, s) => qt(s) ? Object.keys(s).sort().reduce((n, o) => (n[o] = s[o], n), {}) : s
  );
}
function dt(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((s) => !dt(t[s], e[s])) : !1;
}
function zt(t, e) {
  if (t === e)
    return t;
  const s = Ts(t) && Ts(e);
  if (s || qt(t) && qt(e)) {
    const n = s ? t : Object.keys(t), o = n.length, d = s ? e : Object.keys(e), f = d.length, p = s ? [] : {};
    let r = 0;
    for (let i = 0; i < f; i++) {
      const a = s ? i : d[i];
      (!s && n.includes(a) || s) && t[a] === void 0 && e[a] === void 0 ? (p[a] = void 0, r++) : (p[a] = zt(t[a], e[a]), p[a] === t[a] && t[a] !== void 0 && r++);
    }
    return o === f && r === o ? t : p;
  }
  return e;
}
function _t(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const s in t)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
function Ts(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function qt(t) {
  if (!Ns(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const s = e.prototype;
  return !(!Ns(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Ns(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Zr(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Ht(t, e, s) {
  if (typeof s.structuralSharing == "function")
    return s.structuralSharing(t, e);
  if (s.structuralSharing !== !1) {
    if (Qe.env.NODE_ENV !== "production")
      try {
        return zt(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${s.queryHash}]: ${n}`
        );
      }
    return zt(t, e);
  }
  return e;
}
function Jr(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function ea(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var St = Symbol();
function Pn(t, e) {
  return Qe.env.NODE_ENV !== "production" && t.queryFn === St && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === St ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Ie, we, We, Fs, ta = (Fs = class extends yt {
  constructor() {
    super();
    S(this, Ie);
    S(this, we);
    S(this, We);
    w(this, We, (e) => {
      if (!_e && window.addEventListener) {
        const s = () => e();
        return window.addEventListener("visibilitychange", s, !1), () => {
          window.removeEventListener("visibilitychange", s);
        };
      }
    });
  }
  onSubscribe() {
    l(this, we) || this.setEventListener(l(this, We));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, we)) == null || e.call(this), w(this, we, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, We, e), (s = l(this, we)) == null || s.call(this), w(this, we, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    l(this, Ie) !== e && (w(this, Ie, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((s) => {
      s(e);
    });
  }
  isFocused() {
    var e;
    return typeof l(this, Ie) == "boolean" ? l(this, Ie) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Ie = new WeakMap(), we = new WeakMap(), We = new WeakMap(), Fs), cs = new ta(), Ke, Ce, $e, Bs, sa = (Bs = class extends yt {
  constructor() {
    super();
    S(this, Ke, !0);
    S(this, Ce);
    S(this, $e);
    w(this, $e, (e) => {
      if (!_e && window.addEventListener) {
        const s = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", s, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", s), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    l(this, Ce) || this.setEventListener(l(this, $e));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, Ce)) == null || e.call(this), w(this, Ce, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, $e, e), (s = l(this, Ce)) == null || s.call(this), w(this, Ce, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    l(this, Ke) !== e && (w(this, Ke, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return l(this, Ke);
  }
}, Ke = new WeakMap(), Ce = new WeakMap(), $e = new WeakMap(), Bs), At = new sa();
function Wt() {
  let t, e;
  const s = new Promise((o, d) => {
    t = o, e = d;
  });
  s.status = "pending", s.catch(() => {
  });
  function n(o) {
    Object.assign(s, o), delete s.resolve, delete s.reject;
  }
  return s.resolve = (o) => {
    n({
      status: "fulfilled",
      value: o
    }), t(o);
  }, s.reject = (o) => {
    n({
      status: "rejected",
      reason: o
    }), e(o);
  }, s;
}
function na(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Mn(t) {
  return (t ?? "online") === "online" ? At.isOnline() : !0;
}
var kn = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Mt(t) {
  return t instanceof kn;
}
function jn(t) {
  let e = !1, s = 0, n = !1, o;
  const d = Wt(), f = (m) => {
    var g;
    n || (h(new kn(m)), (g = t.abort) == null || g.call(t));
  }, p = () => {
    e = !0;
  }, r = () => {
    e = !1;
  }, i = () => cs.isFocused() && (t.networkMode === "always" || At.isOnline()) && t.canRun(), a = () => Mn(t.networkMode) && t.canRun(), c = (m) => {
    var g;
    n || (n = !0, (g = t.onSuccess) == null || g.call(t, m), o == null || o(), d.resolve(m));
  }, h = (m) => {
    var g;
    n || (n = !0, (g = t.onError) == null || g.call(t, m), o == null || o(), d.reject(m));
  }, b = () => new Promise((m) => {
    var g;
    o = (A) => {
      (n || i()) && m(A);
    }, (g = t.onPause) == null || g.call(t);
  }).then(() => {
    var m;
    o = void 0, n || (m = t.onContinue) == null || m.call(t);
  }), y = () => {
    if (n)
      return;
    let m;
    const g = s === 0 ? t.initialPromise : void 0;
    try {
      m = g ?? t.fn();
    } catch (A) {
      m = Promise.reject(A);
    }
    Promise.resolve(m).then(c).catch((A) => {
      var F;
      if (n)
        return;
      const C = t.retry ?? (_e ? 0 : 3), v = t.retryDelay ?? na, E = typeof v == "function" ? v(s, A) : v, j = C === !0 || typeof C == "number" && s < C || typeof C == "function" && C(s, A);
      if (e || !j) {
        h(A);
        return;
      }
      s++, (F = t.onFail) == null || F.call(t, s, A), Zr(E).then(() => i() ? void 0 : b()).then(() => {
        e ? h(A) : y();
      });
    });
  };
  return {
    promise: d,
    cancel: f,
    continue: () => (o == null || o(), d),
    cancelRetry: p,
    continueRetry: r,
    canStart: a,
    start: () => (a() ? y() : b().then(y), d)
  };
}
function ra() {
  let t = [], e = 0, s = (p) => {
    p();
  }, n = (p) => {
    p();
  }, o = (p) => setTimeout(p, 0);
  const d = (p) => {
    e ? t.push(p) : o(() => {
      s(p);
    });
  }, f = () => {
    const p = t;
    t = [], p.length && o(() => {
      n(() => {
        p.forEach((r) => {
          s(r);
        });
      });
    });
  };
  return {
    batch: (p) => {
      let r;
      e++;
      try {
        r = p();
      } finally {
        e--, e || f();
      }
      return r;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (p) => (...r) => {
      d(() => {
        p(...r);
      });
    },
    schedule: d,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (p) => {
      s = p;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (p) => {
      n = p;
    },
    setScheduler: (p) => {
      o = p;
    }
  };
}
var V = ra(), Oe, Us, In = (Us = class {
  constructor() {
    S(this, Oe);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Qt(this.gcTime) && w(this, Oe, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (_e ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    l(this, Oe) && (clearTimeout(l(this, Oe)), w(this, Oe, void 0));
  }
}, Oe = new WeakMap(), Us), Ve, Ge, re, G, ht, De, ie, ge, Ls, aa = (Ls = class extends In {
  constructor(e) {
    super();
    S(this, ie);
    S(this, Ve);
    S(this, Ge);
    S(this, re);
    S(this, G);
    S(this, ht);
    S(this, De);
    w(this, De, !1), w(this, ht, e.defaultOptions), this.setOptions(e.options), this.observers = [], w(this, re, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, w(this, Ve, ia(this.options)), this.state = e.state ?? l(this, Ve), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = l(this, G)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...l(this, ht), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && l(this, re).remove(this);
  }
  setData(e, s) {
    const n = Ht(this.state.data, e, this.options);
    return M(this, ie, ge).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), n;
  }
  setState(e, s) {
    M(this, ie, ge).call(this, { type: "setState", state: e, setStateOptions: s });
  }
  cancel(e) {
    var n, o;
    const s = (n = l(this, G)) == null ? void 0 : n.promise;
    return (o = l(this, G)) == null || o.cancel(e), s ? s.then(ae).catch(ae) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(l(this, Ve));
  }
  isActive() {
    return this.observers.some(
      (e) => oe(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === St || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Nn(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var s;
    const e = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (s = l(this, G)) == null || s.continue();
  }
  onOnline() {
    var s;
    const e = this.observers.find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (s = l(this, G)) == null || s.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), l(this, re).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((s) => s !== e), this.observers.length || (l(this, G) && (l(this, De) ? l(this, G).cancel({ revert: !0 }) : l(this, G).cancelRetry()), this.scheduleGc()), l(this, re).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || M(this, ie, ge).call(this, { type: "invalidate" });
  }
  fetch(e, s) {
    var r, i, a;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (l(this, G))
        return l(this, G).continueRetry(), l(this, G).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const c = this.observers.find((h) => h.options.queryFn);
      c && this.setOptions(c.options);
    }
    Qe.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), o = (c) => {
      Object.defineProperty(c, "signal", {
        enumerable: !0,
        get: () => (w(this, De, !0), n.signal)
      });
    }, d = () => {
      const c = Pn(this.options, s), h = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(h), w(this, De, !1), this.options.persister ? this.options.persister(
        c,
        h,
        this
      ) : c(h);
    }, f = {
      fetchOptions: s,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    o(f), (r = this.options.behavior) == null || r.onFetch(
      f,
      this
    ), w(this, Ge, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) && M(this, ie, ge).call(this, { type: "fetch", meta: (a = f.fetchOptions) == null ? void 0 : a.meta });
    const p = (c) => {
      var h, b, y, m;
      Mt(c) && c.silent || M(this, ie, ge).call(this, {
        type: "error",
        error: c
      }), Mt(c) || ((b = (h = l(this, re).config).onError) == null || b.call(
        h,
        c,
        this
      ), (m = (y = l(this, re).config).onSettled) == null || m.call(
        y,
        this.state.data,
        c,
        this
      )), this.scheduleGc();
    };
    return w(this, G, jn({
      initialPromise: s == null ? void 0 : s.initialPromise,
      fn: f.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (c) => {
        var h, b, y, m;
        if (c === void 0) {
          Qe.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), p(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(c);
        } catch (g) {
          p(g);
          return;
        }
        (b = (h = l(this, re).config).onSuccess) == null || b.call(h, c, this), (m = (y = l(this, re).config).onSettled) == null || m.call(
          y,
          c,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: p,
      onFail: (c, h) => {
        M(this, ie, ge).call(this, { type: "failed", failureCount: c, error: h });
      },
      onPause: () => {
        M(this, ie, ge).call(this, { type: "pause" });
      },
      onContinue: () => {
        M(this, ie, ge).call(this, { type: "continue" });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode,
      canRun: () => !0
    })), l(this, G).start();
  }
}, Ve = new WeakMap(), Ge = new WeakMap(), re = new WeakMap(), G = new WeakMap(), ht = new WeakMap(), De = new WeakMap(), ie = new WeakSet(), ge = function(e) {
  const s = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: e.failureCount,
          fetchFailureReason: e.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          ...On(n.data, this.options),
          fetchMeta: e.meta ?? null
        };
      case "success":
        return {
          ...n,
          data: e.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!e.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const o = e.error;
        return Mt(o) && o.revert && l(this, Ge) ? { ...l(this, Ge), fetchStatus: "idle" } : {
          ...n,
          error: o,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: o,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...e.state
        };
    }
  };
  this.state = s(this.state), V.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), l(this, re).notify({ query: this, type: "updated", action: e });
  });
}, Ls);
function On(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Mn(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function ia(t) {
  const e = typeof t.initialData == "function" ? t.initialData() : t.initialData, s = e !== void 0, n = s ? typeof t.initialDataUpdatedAt == "function" ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var ce, Qs, oa = (Qs = class extends yt {
  constructor(e = {}) {
    super();
    S(this, ce);
    this.config = e, w(this, ce, /* @__PURE__ */ new Map());
  }
  build(e, s, n) {
    const o = s.queryKey, d = s.queryHash ?? ls(o, s);
    let f = this.get(d);
    return f || (f = new aa({
      cache: this,
      queryKey: o,
      queryHash: d,
      options: e.defaultQueryOptions(s),
      state: n,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(f)), f;
  }
  add(e) {
    l(this, ce).has(e.queryHash) || (l(this, ce).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const s = l(this, ce).get(e.queryHash);
    s && (e.destroy(), s === e && l(this, ce).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    V.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return l(this, ce).get(e);
  }
  getAll() {
    return [...l(this, ce).values()];
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => As(s, n)
    );
  }
  findAll(e = {}) {
    const s = this.getAll();
    return Object.keys(e).length > 0 ? s.filter((n) => As(e, n)) : s;
  }
  notify(e) {
    V.batch(() => {
      this.listeners.forEach((s) => {
        s(e);
      });
    });
  }
  onFocus() {
    V.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    V.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, ce = new WeakMap(), Qs), ue, Y, Fe, de, ve, zs, la = (zs = class extends In {
  constructor(e) {
    super();
    S(this, de);
    S(this, ue);
    S(this, Y);
    S(this, Fe);
    this.mutationId = e.mutationId, w(this, Y, e.mutationCache), w(this, ue, []), this.state = e.state || ca(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    l(this, ue).includes(e) || (l(this, ue).push(e), this.clearGcTimeout(), l(this, Y).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    w(this, ue, l(this, ue).filter((s) => s !== e)), this.scheduleGc(), l(this, Y).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    l(this, ue).length || (this.state.status === "pending" ? this.scheduleGc() : l(this, Y).remove(this));
  }
  continue() {
    var e;
    return ((e = l(this, Fe)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var o, d, f, p, r, i, a, c, h, b, y, m, g, A, C, v, E, j, F, B;
    w(this, Fe, jn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (R, P) => {
        M(this, de, ve).call(this, { type: "failed", failureCount: R, error: P });
      },
      onPause: () => {
        M(this, de, ve).call(this, { type: "pause" });
      },
      onContinue: () => {
        M(this, de, ve).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => l(this, Y).canRun(this)
    }));
    const s = this.state.status === "pending", n = !l(this, Fe).canStart();
    try {
      if (!s) {
        M(this, de, ve).call(this, { type: "pending", variables: e, isPaused: n }), await ((d = (o = l(this, Y).config).onMutate) == null ? void 0 : d.call(
          o,
          e,
          this
        ));
        const P = await ((p = (f = this.options).onMutate) == null ? void 0 : p.call(f, e));
        P !== this.state.context && M(this, de, ve).call(this, {
          type: "pending",
          context: P,
          variables: e,
          isPaused: n
        });
      }
      const R = await l(this, Fe).start();
      return await ((i = (r = l(this, Y).config).onSuccess) == null ? void 0 : i.call(
        r,
        R,
        e,
        this.state.context,
        this
      )), await ((c = (a = this.options).onSuccess) == null ? void 0 : c.call(a, R, e, this.state.context)), await ((b = (h = l(this, Y).config).onSettled) == null ? void 0 : b.call(
        h,
        R,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, R, null, e, this.state.context)), M(this, de, ve).call(this, { type: "success", data: R }), R;
    } catch (R) {
      try {
        throw await ((A = (g = l(this, Y).config).onError) == null ? void 0 : A.call(
          g,
          R,
          e,
          this.state.context,
          this
        )), await ((v = (C = this.options).onError) == null ? void 0 : v.call(
          C,
          R,
          e,
          this.state.context
        )), await ((j = (E = l(this, Y).config).onSettled) == null ? void 0 : j.call(
          E,
          void 0,
          R,
          this.state.variables,
          this.state.context,
          this
        )), await ((B = (F = this.options).onSettled) == null ? void 0 : B.call(
          F,
          void 0,
          R,
          e,
          this.state.context
        )), R;
      } finally {
        M(this, de, ve).call(this, { type: "error", error: R });
      }
    } finally {
      l(this, Y).runNext(this);
    }
  }
}, ue = new WeakMap(), Y = new WeakMap(), Fe = new WeakMap(), de = new WeakSet(), ve = function(e) {
  const s = (n) => {
    switch (e.type) {
      case "failed":
        return {
          ...n,
          failureCount: e.failureCount,
          failureReason: e.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: e.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: e.isPaused,
          status: "pending",
          variables: e.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: e.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: e.error,
          failureCount: n.failureCount + 1,
          failureReason: e.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = s(this.state), V.batch(() => {
    l(this, ue).forEach((n) => {
      n.onMutationUpdate(e);
    }), l(this, Y).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, zs);
function ca() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var se, ft, _s, ua = (_s = class extends yt {
  constructor(e = {}) {
    super();
    S(this, se);
    S(this, ft);
    this.config = e, w(this, se, /* @__PURE__ */ new Map()), w(this, ft, Date.now());
  }
  build(e, s, n) {
    const o = new la({
      mutationCache: this,
      mutationId: ++gt(this, ft)._,
      options: e.defaultMutationOptions(s),
      state: n
    });
    return this.add(o), o;
  }
  add(e) {
    const s = vt(e), n = l(this, se).get(s) ?? [];
    n.push(e), l(this, se).set(s, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const s = vt(e);
    if (l(this, se).has(s)) {
      const o = (n = l(this, se).get(s)) == null ? void 0 : n.filter((d) => d !== e);
      o && (o.length === 0 ? l(this, se).delete(s) : l(this, se).set(s, o));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const s = (n = l(this, se).get(vt(e))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !s || s === e;
  }
  runNext(e) {
    var n;
    const s = (n = l(this, se).get(vt(e))) == null ? void 0 : n.find((o) => o !== e && o.state.isPaused);
    return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
  }
  clear() {
    V.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...l(this, se).values()].flat();
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Rs(s, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((s) => Rs(e, s));
  }
  notify(e) {
    V.batch(() => {
      this.listeners.forEach((s) => {
        s(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((s) => s.state.isPaused);
    return V.batch(
      () => Promise.all(
        e.map((s) => s.continue().catch(ae))
      )
    );
  }
}, se = new WeakMap(), ft = new WeakMap(), _s);
function vt(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function Ps(t) {
  return {
    onFetch: (e, s) => {
      var a, c, h, b, y;
      const n = e.options, o = (h = (c = (a = e.fetchOptions) == null ? void 0 : a.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : h.direction, d = ((b = e.state.data) == null ? void 0 : b.pages) || [], f = ((y = e.state.data) == null ? void 0 : y.pageParams) || [];
      let p = { pages: [], pageParams: [] }, r = 0;
      const i = async () => {
        let m = !1;
        const g = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
              m = !0;
            }), e.signal)
          });
        }, A = Pn(e.options, e.fetchOptions), C = async (v, E, j) => {
          if (m)
            return Promise.reject();
          if (E == null && v.pages.length)
            return Promise.resolve(v);
          const F = {
            queryKey: e.queryKey,
            pageParam: E,
            direction: j ? "backward" : "forward",
            meta: e.options.meta
          };
          g(F);
          const B = await A(
            F
          ), { maxPages: R } = e.options, P = j ? ea : Jr;
          return {
            pages: P(v.pages, B, R),
            pageParams: P(v.pageParams, E, R)
          };
        };
        if (o && d.length) {
          const v = o === "backward", E = v ? da : Ms, j = {
            pages: d,
            pageParams: f
          }, F = E(n, j);
          p = await C(j, F, v);
        } else {
          const v = t ?? d.length;
          do {
            const E = r === 0 ? f[0] ?? n.initialPageParam : Ms(n, p);
            if (r > 0 && E == null)
              break;
            p = await C(p, E), r++;
          } while (r < v);
        }
        return p;
      };
      e.options.persister ? e.fetchFn = () => {
        var m, g;
        return (g = (m = e.options).persister) == null ? void 0 : g.call(
          m,
          i,
          {
            queryKey: e.queryKey,
            meta: e.options.meta,
            signal: e.signal
          },
          s
        );
      } : e.fetchFn = i;
    }
  };
}
function Ms(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    s[n],
    s
  ) : void 0;
}
function da(t, { pages: e, pageParams: s }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, s[0], s) : void 0;
}
var z, Ee, Se, Ye, Xe, Ae, Ze, Je, qs, ha = (qs = class {
  constructor(t = {}) {
    S(this, z);
    S(this, Ee);
    S(this, Se);
    S(this, Ye);
    S(this, Xe);
    S(this, Ae);
    S(this, Ze);
    S(this, Je);
    w(this, z, t.queryCache || new oa()), w(this, Ee, t.mutationCache || new ua()), w(this, Se, t.defaultOptions || {}), w(this, Ye, /* @__PURE__ */ new Map()), w(this, Xe, /* @__PURE__ */ new Map()), w(this, Ae, 0);
  }
  mount() {
    gt(this, Ae)._++, l(this, Ae) === 1 && (w(this, Ze, cs.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, z).onFocus());
    })), w(this, Je, At.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, z).onOnline());
    })));
  }
  unmount() {
    var t, e;
    gt(this, Ae)._--, l(this, Ae) === 0 && ((t = l(this, Ze)) == null || t.call(this), w(this, Ze, void 0), (e = l(this, Je)) == null || e.call(this), w(this, Je, void 0));
  }
  isFetching(t) {
    return l(this, z).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return l(this, Ee).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = l(this, z).get(e.queryHash)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const s = this.defaultQueryOptions(t), n = l(this, z).build(this, s);
      return t.revalidateIfStale && n.isStaleByTime(He(s.staleTime, n)) && this.prefetchQuery(s), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return l(this, z).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    const n = this.defaultQueryOptions({ queryKey: t }), o = l(this, z).get(
      n.queryHash
    ), d = o == null ? void 0 : o.state.data, f = Xr(e, d);
    if (f !== void 0)
      return l(this, z).build(this, n).setData(f, { ...s, manual: !0 });
  }
  setQueriesData(t, e, s) {
    return V.batch(
      () => l(this, z).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, s)
      ])
    );
  }
  getQueryState(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = l(this, z).get(e.queryHash)) == null ? void 0 : s.state;
  }
  removeQueries(t) {
    const e = l(this, z);
    V.batch(() => {
      e.findAll(t).forEach((s) => {
        e.remove(s);
      });
    });
  }
  resetQueries(t, e) {
    const s = l(this, z), n = {
      type: "active",
      ...t
    };
    return V.batch(() => (s.findAll(t).forEach((o) => {
      o.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const s = { revert: !0, ...e }, n = V.batch(
      () => l(this, z).findAll(t).map((o) => o.cancel(s))
    );
    return Promise.all(n).then(ae).catch(ae);
  }
  invalidateQueries(t = {}, e = {}) {
    return V.batch(() => {
      if (l(this, z).findAll(t).forEach((n) => {
        n.invalidate();
      }), t.refetchType === "none")
        return Promise.resolve();
      const s = {
        ...t,
        type: t.refetchType ?? t.type ?? "active"
      };
      return this.refetchQueries(s, e);
    });
  }
  refetchQueries(t = {}, e) {
    const s = {
      ...e,
      cancelRefetch: (e == null ? void 0 : e.cancelRefetch) ?? !0
    }, n = V.batch(
      () => l(this, z).findAll(t).filter((o) => !o.isDisabled()).map((o) => {
        let d = o.fetch(void 0, s);
        return s.throwOnError || (d = d.catch(ae)), o.state.fetchStatus === "paused" ? Promise.resolve() : d;
      })
    );
    return Promise.all(n).then(ae);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const s = l(this, z).build(this, e);
    return s.isStaleByTime(
      He(e.staleTime, s)
    ) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(ae).catch(ae);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = Ps(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(ae).catch(ae);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = Ps(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return At.isOnline() ? l(this, Ee).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return l(this, z);
  }
  getMutationCache() {
    return l(this, Ee);
  }
  getDefaultOptions() {
    return l(this, Se);
  }
  setDefaultOptions(t) {
    w(this, Se, t);
  }
  setQueryDefaults(t, e) {
    l(this, Ye).set(ut(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...l(this, Ye).values()];
    let s = {};
    return e.forEach((n) => {
      dt(t, n.queryKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  setMutationDefaults(t, e) {
    l(this, Xe).set(ut(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...l(this, Xe).values()];
    let s = {};
    return e.forEach((n) => {
      dt(t, n.mutationKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...l(this, Se).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = ls(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === St && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...l(this, Se).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    l(this, z).clear(), l(this, Ee).clear();
  }
}, z = new WeakMap(), Ee = new WeakMap(), Se = new WeakMap(), Ye = new WeakMap(), Xe = new WeakMap(), Ae = new WeakMap(), Ze = new WeakMap(), Je = new WeakMap(), qs), J, k, pt, X, Be, et, Re, he, mt, tt, st, Ue, Le, Te, nt, I, ct, Kt, $t, Vt, Gt, Yt, Xt, Zt, Dn, Hs, fa = (Hs = class extends yt {
  constructor(e, s) {
    super();
    S(this, I);
    S(this, J);
    S(this, k);
    S(this, pt);
    S(this, X);
    S(this, Be);
    S(this, et);
    S(this, Re);
    S(this, he);
    S(this, mt);
    S(this, tt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    S(this, st);
    S(this, Ue);
    S(this, Le);
    S(this, Te);
    S(this, nt, /* @__PURE__ */ new Set());
    this.options = s, w(this, J, e), w(this, he, null), w(this, Re, Wt()), this.options.experimental_prefetchInRender || l(this, Re).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (l(this, k).addObserver(this), ks(l(this, k), this.options) ? M(this, I, ct).call(this) : this.updateResult(), M(this, I, Gt).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Jt(
      l(this, k),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Jt(
      l(this, k),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), M(this, I, Yt).call(this), M(this, I, Xt).call(this), l(this, k).removeObserver(this);
  }
  setOptions(e, s) {
    const n = this.options, o = l(this, k);
    if (this.options = l(this, J).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof oe(this.options.enabled, l(this, k)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    M(this, I, Zt).call(this), l(this, k).setOptions(this.options), n._defaulted && !_t(this.options, n) && l(this, J).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: l(this, k),
      observer: this
    });
    const d = this.hasListeners();
    d && js(
      l(this, k),
      o,
      this.options,
      n
    ) && M(this, I, ct).call(this), this.updateResult(s), d && (l(this, k) !== o || oe(this.options.enabled, l(this, k)) !== oe(n.enabled, l(this, k)) || He(this.options.staleTime, l(this, k)) !== He(n.staleTime, l(this, k))) && M(this, I, Kt).call(this);
    const f = M(this, I, $t).call(this);
    d && (l(this, k) !== o || oe(this.options.enabled, l(this, k)) !== oe(n.enabled, l(this, k)) || f !== l(this, Te)) && M(this, I, Vt).call(this, f);
  }
  getOptimisticResult(e) {
    const s = l(this, J).getQueryCache().build(l(this, J), e), n = this.createResult(s, e);
    return ma(this, n) && (w(this, X, n), w(this, et, this.options), w(this, Be, l(this, k).state)), n;
  }
  getCurrentResult() {
    return l(this, X);
  }
  trackResult(e, s) {
    const n = {};
    return Object.keys(e).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(o), s == null || s(o), e[o])
      });
    }), n;
  }
  trackProp(e) {
    l(this, nt).add(e);
  }
  getCurrentQuery() {
    return l(this, k);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const s = l(this, J).defaultQueryOptions(e), n = l(this, J).getQueryCache().build(l(this, J), s);
    return n.fetch().then(() => this.createResult(n, s));
  }
  fetch(e) {
    return M(this, I, ct).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), l(this, X)));
  }
  createResult(e, s) {
    var R;
    const n = l(this, k), o = this.options, d = l(this, X), f = l(this, Be), p = l(this, et), i = e !== n ? e.state : l(this, pt), { state: a } = e;
    let c = { ...a }, h = !1, b;
    if (s._optimisticResults) {
      const P = this.hasListeners(), q = !P && ks(e, s), O = P && js(e, n, s, o);
      (q || O) && (c = {
        ...c,
        ...On(a.data, e.options)
      }), s._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: g } = c;
    if (s.select && c.data !== void 0)
      if (d && c.data === (f == null ? void 0 : f.data) && s.select === l(this, mt))
        b = l(this, tt);
      else
        try {
          w(this, mt, s.select), b = s.select(c.data), b = Ht(d == null ? void 0 : d.data, b, s), w(this, tt, b), w(this, he, null);
        } catch (P) {
          w(this, he, P);
        }
    else
      b = c.data;
    if (s.placeholderData !== void 0 && b === void 0 && g === "pending") {
      let P;
      if (d != null && d.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData))
        P = d.data;
      else if (P = typeof s.placeholderData == "function" ? s.placeholderData(
        (R = l(this, st)) == null ? void 0 : R.state.data,
        l(this, st)
      ) : s.placeholderData, s.select && P !== void 0)
        try {
          P = s.select(P), w(this, he, null);
        } catch (q) {
          w(this, he, q);
        }
      P !== void 0 && (g = "success", b = Ht(
        d == null ? void 0 : d.data,
        P,
        s
      ), h = !0);
    }
    l(this, he) && (y = l(this, he), b = l(this, tt), m = Date.now(), g = "error");
    const A = c.fetchStatus === "fetching", C = g === "pending", v = g === "error", E = C && A, j = b !== void 0, B = {
      status: g,
      fetchStatus: c.fetchStatus,
      isPending: C,
      isSuccess: g === "success",
      isError: v,
      isInitialLoading: E,
      isLoading: E,
      data: b,
      dataUpdatedAt: c.dataUpdatedAt,
      error: y,
      errorUpdatedAt: m,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > i.dataUpdateCount || c.errorUpdateCount > i.errorUpdateCount,
      isFetching: A,
      isRefetching: A && !C,
      isLoadingError: v && !j,
      isPaused: c.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: v && j,
      isStale: us(e, s),
      refetch: this.refetch,
      promise: l(this, Re)
    };
    if (this.options.experimental_prefetchInRender) {
      const P = (Z) => {
        B.status === "error" ? Z.reject(B.error) : B.data !== void 0 && Z.resolve(B.data);
      }, q = () => {
        const Z = w(this, Re, B.promise = Wt());
        P(Z);
      }, O = l(this, Re);
      switch (O.status) {
        case "pending":
          e.queryHash === n.queryHash && P(O);
          break;
        case "fulfilled":
          (B.status === "error" || B.data !== O.value) && q();
          break;
        case "rejected":
          (B.status !== "error" || B.error !== O.reason) && q();
          break;
      }
    }
    return B;
  }
  updateResult(e) {
    const s = l(this, X), n = this.createResult(l(this, k), this.options);
    if (w(this, Be, l(this, k).state), w(this, et, this.options), l(this, Be).data !== void 0 && w(this, st, l(this, k)), _t(n, s))
      return;
    w(this, X, n);
    const o = {}, d = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: f } = this.options, p = typeof f == "function" ? f() : f;
      if (p === "all" || !p && !l(this, nt).size)
        return !0;
      const r = new Set(
        p ?? l(this, nt)
      );
      return this.options.throwOnError && r.add("error"), Object.keys(l(this, X)).some((i) => {
        const a = i;
        return l(this, X)[a] !== s[a] && r.has(a);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && d() && (o.listeners = !0), M(this, I, Dn).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && M(this, I, Gt).call(this);
  }
}, J = new WeakMap(), k = new WeakMap(), pt = new WeakMap(), X = new WeakMap(), Be = new WeakMap(), et = new WeakMap(), Re = new WeakMap(), he = new WeakMap(), mt = new WeakMap(), tt = new WeakMap(), st = new WeakMap(), Ue = new WeakMap(), Le = new WeakMap(), Te = new WeakMap(), nt = new WeakMap(), I = new WeakSet(), ct = function(e) {
  M(this, I, Zt).call(this);
  let s = l(this, k).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(ae)), s;
}, Kt = function() {
  M(this, I, Yt).call(this);
  const e = He(
    this.options.staleTime,
    l(this, k)
  );
  if (_e || l(this, X).isStale || !Qt(e))
    return;
  const n = Nn(l(this, X).dataUpdatedAt, e) + 1;
  w(this, Ue, setTimeout(() => {
    l(this, X).isStale || this.updateResult();
  }, n));
}, $t = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(l(this, k)) : this.options.refetchInterval) ?? !1;
}, Vt = function(e) {
  M(this, I, Xt).call(this), w(this, Te, e), !(_e || oe(this.options.enabled, l(this, k)) === !1 || !Qt(l(this, Te)) || l(this, Te) === 0) && w(this, Le, setInterval(() => {
    (this.options.refetchIntervalInBackground || cs.isFocused()) && M(this, I, ct).call(this);
  }, l(this, Te)));
}, Gt = function() {
  M(this, I, Kt).call(this), M(this, I, Vt).call(this, M(this, I, $t).call(this));
}, Yt = function() {
  l(this, Ue) && (clearTimeout(l(this, Ue)), w(this, Ue, void 0));
}, Xt = function() {
  l(this, Le) && (clearInterval(l(this, Le)), w(this, Le, void 0));
}, Zt = function() {
  const e = l(this, J).getQueryCache().build(l(this, J), this.options);
  if (e === l(this, k))
    return;
  const s = l(this, k);
  w(this, k, e), w(this, pt, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, Dn = function(e) {
  V.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(l(this, X));
    }), l(this, J).getQueryCache().notify({
      query: l(this, k),
      type: "observerResultsUpdated"
    });
  });
}, Hs);
function pa(t, e) {
  return oe(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function ks(t, e) {
  return pa(t, e) || t.state.data !== void 0 && Jt(t, e, e.refetchOnMount);
}
function Jt(t, e, s) {
  if (oe(e.enabled, t) !== !1) {
    const n = typeof s == "function" ? s(t) : s;
    return n === "always" || n !== !1 && us(t, e);
  }
  return !1;
}
function js(t, e, s, n) {
  return (t !== e || oe(n.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && us(t, s);
}
function us(t, e) {
  return oe(e.enabled, t) !== !1 && t.isStaleByTime(He(e.staleTime, t));
}
function ma(t, e) {
  return !_t(t.getCurrentResult(), e);
}
var Fn = x.createContext(
  void 0
), ya = (t) => {
  const e = x.useContext(Fn);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, ga = ({
  client: t,
  children: e
}) => (x.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ u.jsx(Fn.Provider, { value: t, children: e })), Bn = x.createContext(!1), ba = () => x.useContext(Bn);
Bn.Provider;
function va() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var xa = x.createContext(va()), wa = () => x.useContext(xa);
function Ca(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Ea() {
}
var Sa = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, Aa = (t) => {
  x.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Ra = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ca(s, [t.error, n]), Ta = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Na = (t, e) => t.isLoading && t.isFetching && !e, Pa = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Is = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function Ma(t, e, s) {
  var a, c, h, b, y;
  if (Qe.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = ya(), o = ba(), d = wa(), f = n.defaultQueryOptions(t);
  (c = (a = n.getDefaultOptions().queries) == null ? void 0 : a._experimental_beforeQuery) == null || c.call(
    a,
    f
  ), f._optimisticResults = o ? "isRestoring" : "optimistic", Ta(f), Sa(f, d), Aa(d);
  const p = !n.getQueryCache().get(f.queryHash), [r] = x.useState(
    () => new e(
      n,
      f
    )
  ), i = r.getOptimisticResult(f);
  if (x.useSyncExternalStore(
    x.useCallback(
      (m) => {
        const g = o ? () => {
        } : r.subscribe(V.batchCalls(m));
        return r.updateResult(), g;
      },
      [r, o]
    ),
    () => r.getCurrentResult(),
    () => r.getCurrentResult()
  ), x.useEffect(() => {
    r.setOptions(f, { listeners: !1 });
  }, [f, r]), Pa(f, i))
    throw Is(f, r, d);
  if (Ra({
    result: i,
    errorResetBoundary: d,
    throwOnError: f.throwOnError,
    query: n.getQueryCache().get(f.queryHash)
  }))
    throw i.error;
  if ((b = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) == null || b.call(
    h,
    f,
    i
  ), f.experimental_prefetchInRender && !_e && Na(i, o)) {
    const m = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Is(f, r, d)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (y = n.getQueryCache().get(f.queryHash)) == null ? void 0 : y.promise
    );
    m == null || m.catch(Ea).finally(() => {
      r.updateResult();
    });
  }
  return f.notifyOnChangeProps ? i : r.trackResult(i);
}
function ka(t, e) {
  return Ma(t, fa);
}
const ja = ["totalAsset"], Ia = async (t) => {
  try {
    const s = (await fe.get("/user-assets/total-assets", {
      params: { address: t }
    })).data.totalAssets;
    return {
      raw: s,
      formatted: br(s, 2),
      isZero: s === 0
    };
  } catch (e) {
    throw xt(e);
  }
};
function Oa(t) {
  const { address: e } = $.all();
  return ka({
    queryKey: [...ja, e],
    queryFn: () => Ia(e),
    enabled: (t == null ? void 0 : t.enabled) && !!e,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30,
    // cache for 30 minutes
    retry: 1
    // retry 1 time
  });
}
const Os = [
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
function Da() {
  const t = $.getUserRandomAvatar(), { address: e } = $.all(), { data: s, refetch: n } = Oa({
    enabled: !!e
  }), [o, d] = x.useState(!1), [f, p] = x.useState(!1), [r, i] = x.useState("ETH"), [a, c] = x.useState(xs.getData() ?? !0);
  x.useEffect(() => {
    b(r);
  }, []);
  const h = () => {
    var m;
    return (m = Os.find((g) => g.name === r)) == null ? void 0 : m.icon;
  }, b = async (m) => {
    i(m);
  }, y = () => {
    c(!a), xs.setData(!a);
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: N(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ u.jsx(
          "div",
          {
            className: N(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${t})`
            }
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: N(
          "relative z-10",
          "tablet:flex tablet:flex-wrap tablet:justify-between",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("div", { className: N(
              'text-white font-bold leading-tight font-["Asap"]',
              "text-lg tablet:text-[32px]",
              "mb-[25px] tablet:mb-[50px]"
            ), children: "Total asset" }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ u.jsx(
                "img",
                {
                  src: t,
                  alt: "avatar",
                  className: N(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ u.jsx("div", { className: N(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ u.jsxs("div", { className: N(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: [
                  /* @__PURE__ */ u.jsx("span", { className: "flex items-center", children: a ? "******" : `$${s == null ? void 0 : s.formatted} USD` }),
                  /* @__PURE__ */ u.jsx(
                    "img",
                    {
                      src: a ? "/imgs/icons/close_eye.svg" : "/imgs/icons/open_eye.svg",
                      alt: "",
                      className: N(
                        "w-[30px] h-[30px]",
                        "cursor-pointer"
                      ),
                      onClick: y
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: N(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ u.jsxs("div", { className: N(
              "flex items-center gap-3 mb-[28px]",
              "justify-center tablet:justify-end"
            ), children: [
              /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: " bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => d(!0),
                  children: [
                    /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/send.svg", alt: "" }),
                    /* @__PURE__ */ u.jsx("span", { className: "text-black text-xs font-bold", children: "Send" })
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(
                "div",
                {
                  className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => p(!0),
                  children: [
                    /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/receive.svg", alt: "" }),
                    /* @__PURE__ */ u.jsx("span", { className: "text-black text-xs font-bold", children: "Receive" })
                  ]
                }
              ),
              /* @__PURE__ */ u.jsxs(pn, { children: [
                /* @__PURE__ */ u.jsxs(mn, { className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ u.jsx(
                    "img",
                    {
                      src: h(),
                      className: "w-[16px] h-[16px]",
                      alt: ""
                    }
                  ),
                  /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/arrow_down.svg", alt: "" })
                ] }),
                /* @__PURE__ */ u.jsx(is, { className: "bg-white", children: Os.map((m) => /* @__PURE__ */ u.jsx(
                  os,
                  {
                    onClick: () => b(m.name),
                    children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ u.jsx(
                        "img",
                        {
                          src: m.icon,
                          className: "w-[16px] h-[16px]",
                          alt: ""
                        }
                      ),
                      /* @__PURE__ */ u.jsx("span", { className: N(
                        r === m.name ? "text-brand-foreground" : "text-black"
                      ), children: m.name }),
                      r === m.name && /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
                    ] })
                  },
                  m.name
                )) })
              ] })
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ u.jsx(
                It,
                {
                  address: e,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              /* @__PURE__ */ u.jsx(
                "img",
                {
                  className: "w-[14px] h-[14px] cursor-pointer",
                  src: "/imgs/icons/qrcode.svg",
                  alt: "",
                  onClick: () => p(!0)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(
          Lr,
          {
            open: o,
            setOpen: d,
            address: e,
            tokenType: r,
            onClose: () => d(!1)
          }
        ),
        /* @__PURE__ */ u.jsx(
          Yr,
          {
            address: e,
            open: f,
            setOpen: p,
            onClose: () => p(!1)
          }
        )
      ]
    }
  );
}
function Fa() {
  return /* @__PURE__ */ u.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ u.jsx(Da, {}),
    /* @__PURE__ */ u.jsx("div", { className: N(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ u.jsx(Gn, {}) })
  ] });
}
function Ba() {
  const t = Yn();
  return console.error(t), /* @__PURE__ */ u.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ u.jsx("p", { className: "text-lg text-gray-600 italic", children: t.statusText || t.message })
  ] }) });
}
function Mi({
  total: t = 0,
  pageSize: e = 30
} = {}) {
  const [s, n] = x.useState({
    current: 1,
    total: t,
    pageSize: e
  });
  return {
    pagination: s,
    handlePageChange: (p) => {
      xe("handlePageChange", p), n((r) => ({
        ...r,
        current: p
      }));
    },
    updateTotal: (p) => {
      n((r) => ({
        ...r,
        total: p
      }));
    },
    updatePageSize: (p) => {
      n((r) => ({
        ...r,
        pageSize: p,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const Ua = 30, La = async () => {
  try {
    const t = await fe.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: Ua
    });
    return {
      products: t.data.products,
      total: t.data.total
    };
  } catch (t) {
    const e = xt(t);
    throw new Error(e.message);
  }
}, Qa = Xn([
  {
    path: "/",
    async lazy() {
      const { RootLayout: t } = await import("./root-layout-2R7TGehN.js");
      return { Component: t };
    },
    errorElement: /* @__PURE__ */ u.jsx(Ba, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: t } = await import("./main-layout-DOCqIgbO.js");
          return { Component: t };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: t } = await import("./page-CgCmOwrh.js");
              return { Component: t };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: t } = await import("./page-BIKrz7it.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: t } = await import("./page-C9uNrO3d.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: t } = await import("./page-9ZcEg2gA.js");
              return { Component: t };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ u.jsx(Fa, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: t } = await import("./page-DnhaLZ7n.js");
                  return { Component: t };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: t } = await import("./page-buGeEuj7.js");
                  return { Component: t };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: t } = await import("./page-BOS0n7RO.js");
                  return { Component: t };
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
                  const { default: t } = await import("./page-D3s3mSKd.js");
                  return { Component: t };
                },
                loader: La
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: t } = await import("./page-DmDn9MNE.js");
                  return { Component: t };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: t } = await import("./page-BHknsuI-.js");
                  return { Component: t };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: t } = await import("./page-CuU2g43I.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: t } = await import("./page-D4ZjaiCS.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: t } = await import("./page-DwZp7j3b.js");
                  return { Component: t };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: t } = await import("./page-DAPG0YFc.js");
                  return { Component: t };
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
                          const { default: t } = await import("./page-BXpwuGJ4.js");
                          return { Component: t };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: t } = await import("./page-CwmjGDxV.js");
                          return { Component: t };
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
                  const { default: t } = await import("./page-Ct3ZMP0d.js");
                  return { Component: t };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: t } = await import("./page-CMIgLpOD.js");
                  return { Component: t };
                }
              }
            ]
          }
        ]
      }
    ]
  }
]);
function za() {
  const [t, e] = x.useState(!1);
  return x.useEffect(() => {
    const s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    e(s);
  }, []), /* @__PURE__ */ u.jsx(
    ur,
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
      transition: dr,
      toastClassName: N(
        "text-sm",
        "mobile:top-[82px]",
        "max-w-full mobile:max-w-[375px] tablet:max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var ds = "moonpay-react-sdk-embedded-frame", _a = ({
  props: t,
  apiKey: e,
  debug: s,
  environment: n,
  signature: o
}) => {
  const {
    // params
    currencyCode: d,
    defaultCurrencyCode: f,
    walletAddress: p,
    walletAddressTag: r,
    walletAddresses: i,
    walletAddressTags: a,
    colorCode: c,
    theme: h,
    themeId: b,
    language: y,
    baseCurrencyCode: m,
    baseCurrencyAmount: g,
    quoteCurrencyAmount: A,
    lockAmount: C,
    email: v,
    externalTransactionId: E,
    externalCustomerId: j,
    paymentMethod: F,
    redirectURL: B,
    showAllCurrencies: R,
    showOnlyCurrencies: P,
    showWalletAddressForm: q,
    unsupportedRegionRedirectUrl: O,
    skipUnsupportedRegionScreen: Z,
    baseOrigin: ee,
    // handlers
    onAuthToken: U,
    onInitiateDeposit: H,
    onKmsWalletsCreated: pe,
    onLogin: ne,
    onTransactionCompleted: L,
    onUnsupportedRegion: me,
    onSwapsCustomerSetupComplete: ye,
    onCloseOverlay: Ne,
    onTransactionCreated: Pe,
    // auth
    auth: Me,
    useWarnBeforeRefresh: ke,
    // other
    overlayNode: at
  } = t, it = {
    apiKey: e,
    signature: o,
    currencyCode: d,
    defaultCurrencyCode: f,
    walletAddress: p,
    walletAddressTag: r,
    walletAddresses: i,
    walletAddressTags: a,
    colorCode: c,
    theme: h,
    themeId: b,
    language: y,
    baseCurrencyCode: m,
    baseCurrencyAmount: g,
    quoteCurrencyAmount: A,
    lockAmount: C,
    email: v,
    externalTransactionId: E,
    externalCustomerId: j,
    paymentMethod: F,
    redirectURL: B,
    showAllCurrencies: R,
    showOnlyCurrencies: P,
    showWalletAddressForm: q,
    unsupportedRegionRedirectUrl: O,
    skipUnsupportedRegionScreen: Z,
    baseOrigin: ee
  }, ot = {
    onAuthToken: U,
    onInitiateDeposit: H,
    onKmsWalletsCreated: pe,
    onLogin: ne,
    onTransactionCompleted: L,
    onUnsupportedRegion: me,
    onSwapsCustomerSetupComplete: ye,
    onCloseOverlay: Ne,
    onTransactionCreated: Pe
  };
  return {
    flow: "buy",
    variant: t.variant,
    environment: n,
    params: it,
    debug: s,
    handlers: ot,
    auth: Me,
    useWarnBeforeRefresh: ke,
    containerNodeSelector: `#${ds}`,
    overlayNode: at
  };
}, qa = ({
  props: t,
  apiKey: e,
  debug: s,
  environment: n,
  signature: o
}) => {
  const {
    // params
    quoteCurrencyCode: d,
    defaultCurrencyCode: f,
    defaultBaseCurrencyCode: p,
    walletAddress: r,
    walletAddressTag: i,
    walletAddresses: a,
    walletAddressTags: c,
    colorCode: h,
    theme: b,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: C,
    lockAmount: v,
    email: E,
    externalTransactionId: j,
    externalCustomerId: F,
    paymentMethod: B,
    redirectURL: R,
    showAllCurrencies: P,
    showOnlyCurrencies: q,
    showWalletAddressForm: O,
    unsupportedRegionRedirectUrl: Z,
    skipUnsupportedRegionScreen: ee,
    mpWalletId: U,
    baseOrigin: H,
    // handlers
    onAuthToken: pe,
    onInitiateDeposit: ne,
    onKmsWalletsCreated: L,
    onLogin: me,
    onTransactionCompleted: ye,
    onUnsupportedRegion: Ne,
    onSwapsCustomerSetupComplete: Pe,
    onCloseOverlay: Me,
    onTransactionCreated: ke,
    // auth
    auth: at,
    useWarnBeforeRefresh: it
  } = t, ot = {
    apiKey: e,
    signature: o,
    quoteCurrencyCode: d,
    defaultCurrencyCode: f,
    defaultBaseCurrencyCode: p,
    walletAddress: r,
    walletAddressTag: i,
    walletAddresses: a,
    walletAddressTags: c,
    colorCode: h,
    theme: b,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: C,
    lockAmount: v,
    email: E,
    externalTransactionId: j,
    externalCustomerId: F,
    paymentMethod: B,
    redirectURL: R,
    showAllCurrencies: P,
    showOnlyCurrencies: q,
    showWalletAddressForm: O,
    unsupportedRegionRedirectUrl: Z,
    skipUnsupportedRegionScreen: ee,
    mpWalletId: U,
    baseOrigin: H
  }, lt = {
    onAuthToken: pe,
    onInitiateDeposit: ne,
    onKmsWalletsCreated: L,
    onLogin: me,
    onTransactionCompleted: ye,
    onUnsupportedRegion: Ne,
    onSwapsCustomerSetupComplete: Pe,
    onCloseOverlay: Me,
    onTransactionCreated: ke
  };
  return {
    flow: "sell",
    variant: t.variant,
    environment: n,
    params: ot,
    debug: s,
    handlers: lt,
    auth: at,
    useWarnBeforeRefresh: it,
    containerNodeSelector: `#${ds}`
  };
};
async function Ha(t = "v1") {
  return new Promise((e, s) => {
    const n = `https://static.moonpay.com/web-sdk/${t}/moonpay-web-sdk.min.js`, o = document.querySelector(`script[src="${n}"]`), d = (f = 0) => {
      if (window.MoonPayWebSdk) {
        e(window.MoonPayWebSdk.init);
        return;
      }
      if (f > 100) {
        s(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => d(f + 1), 100);
    };
    if (o)
      d();
    else {
      const f = document.createElement("script");
      f.async = !0, f.src = n, f.addEventListener("load", () => {
        var p;
        e((p = window.MoonPayWebSdk) == null ? void 0 : p.init);
      }), f.addEventListener("error", () => {
        s(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(f);
    }
  });
}
function Wa(t) {
  return t.startsWith("pk_live") || t.startsWith("sk_live") ? "production" : "sandbox";
}
var kt = () => {
}, Ka = {
  info: kt,
  warn: kt,
  error: kt
}, $a = class Un {
  constructor({
    logger: e,
    prefix: s
  }) {
    _(this, "prefix");
    _(this, "logger");
    this.logger = e, this.prefix = s ?? ["Logger"];
  }
  if(e) {
    return e ? this : new Un({ logger: Ka });
  }
  info(...e) {
    this.logger.info(`[${this.prefix}]`, ...e);
  }
  warn(...e) {
    this.logger.warn(`[${this.prefix}]`, ...e);
  }
  error(...e) {
    this.logger.error(`[${this.prefix}]`, ...e);
  }
}, Nt = x.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), Va = ({
  children: t,
  apiKey: e,
  debug: s = !1
}) => {
  const n = Wa(e), [o, d] = x.useState({
    apiKey: e,
    environment: n,
    debug: s
  }), f = x.useCallback(async () => {
    const p = await Ha();
    d((r) => ({ ...r, init: p }));
  }, []);
  return x.useEffect(() => {
    o.init || f();
  }, [f, o.init]), /* @__PURE__ */ u.jsx(Nt.Provider, { value: o, children: t });
}, Ga = class extends $a {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Ya = (t, e, s) => {
  const n = x.useRef(null), { init: o, debug: d } = x.useContext(Nt), f = x.useRef(new Ga().if(d || !1)), p = x.useCallback(async () => {
    var r, i;
    if (n.current) {
      if (!s && ("walletAddress" in t || "walletAddresses" in t) && f.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), s) {
        const a = n.current.generateUrlForSigning();
        try {
          const c = await (s == null ? void 0 : s(a));
          if (!c)
            return;
          (r = n.current) == null || r.updateSignature(c);
        } catch (c) {
          f.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            c
          );
        }
      }
      e && ((i = n.current) == null || i.show());
    }
  }, [s, e, t]);
  x.useEffect(() => {
    n.current && n.current.close();
    const r = (o == null ? void 0 : o(t)) || null;
    n.current = r, p();
  }, [o, t, p]);
}, Xa = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Ln({
  config: t,
  onUrlSignatureRequested: e,
  visible: s = !0,
  className: n,
  style: o
}) {
  return Ya(t, s, e), s ? /* @__PURE__ */ u.jsx(
    "div",
    {
      id: ds,
      className: n,
      style: t.variant === "embedded" ? {
        ...Xa,
        ...o
      } : void 0
    }
  ) : null;
}
function ki(t) {
  const { apiKey: e, environment: s } = x.useContext(Nt), n = x.useMemo(
    () => _a({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    Ln,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
function ji(t) {
  const { apiKey: e, environment: s } = x.useContext(Nt), n = x.useMemo(
    () => qa({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    Ln,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
const Za = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function Ja({ children: t }) {
  return /* @__PURE__ */ u.jsx(
    Va,
    {
      apiKey: Za,
      debug: !0,
      children: t
    }
  );
}
const ei = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, ti = {
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
}, si = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, ni = {
  authenticationError: "Authentication Error. Please sign in again."
}, ri = {
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
  header: ei,
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
  vastWalletConnect: ti,
  toastSuccess: si,
  toastError: ni
}, ai = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, ii = {
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
}, oi = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, li = {
  authenticationError: "认证错误，请重新登录。"
}, ci = {
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
  header: ai,
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
  vastWalletConnect: ii,
  toastSuccess: oi,
  toastError: li
}, ui = {
  en: {
    translation: ri
  },
  zh: {
    translation: ci
  }
};
xe("savedLng", cn);
const di = cn.getData();
on.use(hr).init({
  resources: ui,
  lng: di || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
const hi = new ha({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1e3 * 60 * 5,
      // data is fresh within 5 minutes
      gcTime: 1e3 * 60 * 30
      // cache for 30 minutes
    }
  }
});
function fi() {
  return /* @__PURE__ */ u.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ u.jsx(x.Suspense, { children: /* @__PURE__ */ u.jsx(ga, { client: hi, children: /* @__PURE__ */ u.jsxs(fr, { i18n: on, children: [
    /* @__PURE__ */ u.jsx(Ja, { children: /* @__PURE__ */ u.jsx(Zn, { router: Qa }) }),
    /* @__PURE__ */ u.jsx(za, {})
  ] }) }) }) });
}
const pi = "theme_light", mi = "0.0.0", yi = "module", gi = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, bi = {
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
  "@tanstack/react-query": "^5.59.20",
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
}, vi = {
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
}, xi = {
  name: pi,
  private: !0,
  version: mi,
  type: yi,
  scripts: gi,
  dependencies: bi,
  devDependencies: vi
};
xe("isDev", dn);
function Ds(t) {
  const e = jt(document.getElementById(t));
  return e.render(
    /* @__PURE__ */ u.jsx(fi, {})
    // <StrictMode>
    // </StrictMode>
  ), () => e.unmount();
}
dn ? Ds("root") : typeof window < "u" && (window[`mount_${xi.name}`] = Ds);
export {
  wt as B,
  It as C,
  pn as D,
  Ot as I,
  Tr as L,
  ki as M,
  Yr as R,
  Lr as S,
  Ct as T,
  $ as a,
  mn as b,
  N as c,
  is as d,
  os as e,
  fe as f,
  xe as g,
  xt as h,
  ws as i,
  Es as j,
  kr as k,
  cn as l,
  br as m,
  Qr as n,
  yn as o,
  Dt as p,
  Oa as q,
  Mi as r,
  Ua as s,
  ji as t,
  ka as u,
  fn as v,
  ya as w,
  un as x,
  Ds as y
};
