var Ln = Object.defineProperty;
var ds = (t) => {
  throw TypeError(t);
};
var Qn = (t, e, s) => e in t ? Ln(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var _ = (t, e, s) => Qn(t, typeof e != "symbol" ? e + "" : e, s), Rt = (t, e, s) => e.has(t) || ds("Cannot " + s);
var l = (t, e, s) => (Rt(t, e, "read from private field"), s ? s.call(t) : e.get(t)), C = (t, e, s) => e.has(t) ? ds("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s, n) => (Rt(t, e, "write to private field"), n ? n.call(t, s) : e.set(t, s), s), M = (t, e, s) => (Rt(t, e, "access private method"), s);
var mt = (t, e, s, n) => ({
  set _(o) {
    w(t, e, o, s);
  },
  get _() {
    return l(t, e, n);
  }
});
import { j as u, S as zn, d as _s, g as Hs, P as _n, C as Ws, I as qs, i as Ks, k as $s, l as Vs, L as Gs, m as Ys, n as Hn, T as Wn, o as Zs, p as Xs, q as Js, r as qn } from "./vendor-radix-CXAw23nV.js";
import { p as ze, a as en, r as v, b as tn, R as $, O as Kn, u as $n, e as Vn, f as Gn } from "./vendor-react-U4DfHahV.js";
import { t as Yn, c as Zn, C as Xn, a as Jn, b as ea, d as ta, e as sa, X as sn, L as na, f as hs, g as aa, h as ra } from "./vendor-ui-utils-DB1608yX.js";
import { a as ft, u as Xt, C as ia, B as je, Q as oa, X as la, i as nn, b as ca, I as ua } from "./vendor-utils-y1QZaLEY.js";
import { d as an, C as fs, c as St, f as Jt, h as es, E as da, m as ha, a as fa, b as ps, i as ms, p as ys } from "./vendor-web3-BOznxXNv.js";
var Mt, yt = en;
if (ze.env.NODE_ENV === "production")
  Mt = yt.createRoot, yt.hydrateRoot;
else {
  var gs = yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Mt = function(t, e) {
    gs.usingClientEntryPoint = !0;
    try {
      return yt.createRoot(t, e);
    } finally {
      gs.usingClientEntryPoint = !1;
    }
  };
}
const ve = console.log.bind(console, "🚀");
function N(...t) {
  return Yn(Zn(t));
}
class ce {
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
const rn = new ce("language");
class pa {
  constructor() {
    _(this, "storages");
    this.storages = {
      idToken: new ce("idToken"),
      username: new ce("username"),
      displayName: new ce("displayName"),
      avatarIndex: new ce("avatarIndex"),
      address: new ce("address"),
      authenticatedHeader: new ce("authenticatedHeader"),
      authenticated: new ce("authenticated"),
      desUsername: new ce("desUsername"),
      aeskey: new ce("aeskey")
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
    return !!this.getAuthDataByKey("idToken");
  }
  getUserRandomAvatar() {
    const e = this.getAuthDataByKey("avatarIndex");
    return e ? `/static/avatars/${e}.svg` : "/static/avatars/1.svg";
  }
}
const q = new pa(), ts = /* @__PURE__ */ an({
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
}), on = /* @__PURE__ */ an({
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
}), bs = (t, e = 6) => parseFloat(t).toFixed(e), ma = (t, e = 2) => {
  const n = (typeof t == "string" ? parseFloat(t) : t).toFixed(e), [o, d] = n.split("."), h = o.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return d ? `${h}.${d}` : h;
}, ya = (t) => {
  if (t === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: fs.EIP155,
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
      chainNamespace: fs.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function vs(t) {
  if (t === "ETH")
    return on;
  if (t === "MATIC" || t === "TVWT")
    return ts;
}
const xs = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ln = ze.env.NODE_ENV === "development";
function bt(t) {
  var e;
  if (ft.isAxiosError(t)) {
    const s = t;
    return s.response ? { message: `${((e = s.response.data) == null ? void 0 : e.message) || s.message}` } : s.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${s.message}` };
  } else return t instanceof Error ? { message: t.message } : { message: "An unknown error occurred" };
}
function kt({
  iconSize: t = 20,
  address: e,
  className: s = "",
  iconClassName: n = "",
  ...o
}) {
  const { t: d } = Xt();
  return /* @__PURE__ */ u.jsx(ia, { text: e, onCopy: () => {
    je.success(d("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ u.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ u.jsx("span", { ...o, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ u.jsx("span", { className: `text-primary ${s}`, children: e }) }),
    /* @__PURE__ */ u.jsx(
      Xn,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${n}`,
        size: t
      }
    )
  ] }) });
}
const ga = Jn(
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
), vt = v.forwardRef(
  ({ className: t, variant: e, size: s, asChild: n = !1, ...o }, d) => {
    const h = n ? zn : "button";
    return /* @__PURE__ */ u.jsx(
      h,
      {
        className: N(ga({ variant: e, size: s, className: t })),
        ref: d,
        ...o
      }
    );
  }
);
vt.displayName = "Button";
const jt = v.forwardRef(
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
jt.displayName = "Input";
const ba = [
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
class ss {
  constructor(e, s, n) {
    _(this, "name");
    _(this, "symbol");
    _(this, "decimals");
    this.name = e, this.symbol = s, this.decimals = n;
  }
}
class va extends ss {
  constructor() {
    super("Ethereum", "ETH", 18);
    _(this, "publicClient");
    _(this, "openUrl");
    this.publicClient = St({
      chain: on,
      transport: es("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return Jt(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-sepolia.etherscan.io/api", d = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ft.get(n, {
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
class xa extends ss {
  constructor() {
    super("Polygon", "MATIC", 18);
    _(this, "publicClient");
    _(this, "openUrl");
    this.publicClient = St({
      chain: ts,
      transport: es("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return Jt(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ft.get(n, {
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
class wa extends ss {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    _(this, "publicClient");
    _(this, "contractAddress");
    _(this, "contractAbi");
    _(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = ba, this.publicClient = St({
      chain: ts,
      transport: es("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [s]
    });
    return Jt(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await ft.get(n, {
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
const Ie = class Ie {
  constructor() {
    _(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", va],
      ["MATIC", xa],
      ["TVWT", wa]
    ]);
  }
  static getInstance() {
    return Ie.instance || (Ie.instance = new Ie()), Ie.instance;
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
_(Ie, "instance");
let xt = Ie;
function Ca() {
  const [t, e] = v.useState("/imgs/logos/logo.svg");
  return {
    logoPath: t
  };
}
function Ea({
  size: t = 32,
  className: e = ""
}) {
  const [s, n] = v.useState("");
  return v.useEffect(() => {
    const {
      username: o
    } = q.all();
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
function Sa({
  size: t = 32,
  className: e,
  type: s = "spin",
  fullscreen: n = !1
}) {
  Ca();
  const [o, d] = v.useState(!1);
  v.useEffect(() => (d(!0), () => d(!1)), []);
  const a = s === "breathe" ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx(Ea, { className: N(
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
  return n && o ? en.createPortal(
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: a }),
    document.body
  ) : a;
}
const cn = v.forwardRef(
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
cn.displayName = "Textarea";
var un = /* @__PURE__ */ ((t) => (t.PURCHASE = "PURCHASE", t.SELL = "SELL", t.TRANSFER = "TRANSFER", t.SWAP = "SWAP", t.INVITE_TRANSFER = "INVITE_TRANSFER", t))(un || {}), At = /* @__PURE__ */ ((t) => (t.PASSPORT = "PASSPORT", t.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", t))(At || {});
class ns {
  constructor(e) {
    _(this, "config");
    if (this.constructor === ns)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = e;
  }
}
const le = ft.create({
  baseURL: "https://the-wallet-protocol-poc-422ad9d857ec.herokuapp.com"
});
le.interceptors.request.use(
  (t) => {
    const e = q.all().idToken;
    return e && (t.headers.Authorization = `Bearer ${e}`), t;
  },
  (t) => Promise.reject(t)
);
le.interceptors.response.use(
  (t) => t,
  async (t) => {
    var e, s;
    if (((e = t.response) == null ? void 0 : e.status) === 401 || ((s = t.response) == null ? void 0 : s.status) === 403) {
      const n = t.response.data.message || "Authentication error";
      console.log(`${n}, redirecting to login...`), q.clearAllAuthData(), typeof window < "u" && (je.error(n), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(t);
  }
);
class Aa extends ns {
  constructor() {
    super({
      serviceType: At.WEB3AUTH_WITH_MPC
    });
    _(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: s,
    idToken: n
  }) {
    const { data: o } = await le.post("/keymanagement/signup", {
      username: s,
      idToken: n
    }), { address: d, displayName: h, avatarIndex: p } = o;
    q.saveAuthDataByKey("idToken", n), q.saveAuthDataByKey("address", d), q.saveAuthDataByKey("username", s), q.saveAuthDataByKey("avatarIndex", p), h ? q.saveAuthDataByKey("displayName", h) : q.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: s, idToken: n }) {
    const { data: o } = await le.post("/keymanagement/signin", {
      username: s,
      idToken: n
    }), { address: d, displayName: h, avatarIndex: p } = o;
    q.saveAuthDataByKey("idToken", n), q.saveAuthDataByKey("address", d), q.saveAuthDataByKey("username", s), q.saveAuthDataByKey("avatarIndex", p), h ? q.saveAuthDataByKey("displayName", h) : q.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: s,
    amount: n,
    token: o,
    note: d,
    transactionType: h
  }) {
    const { data: {
      success: p,
      needOtp: a,
      hash: i,
      message: r,
      transactionId: c,
      // not used
      transactionPayload: f,
      userEmail: y,
      toEmail: g
    } } = await le.post("/transaction/sign", {
      from: q.all().address,
      to: s,
      amount: n,
      token: o,
      note: d,
      transactionType: h
    });
    return {
      success: p,
      needOtp: a,
      hash: i,
      message: r,
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
      transactionPayload: h,
      userEmail: p,
      toEmail: a,
      note: i,
      transactionType: r
    } } = await le.post("/transaction/verify-to-sign", {
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
    const n = this.coreKitInstance, o = ya(s), d = new da({ config: { chainConfig: o } });
    d.setupProvider(ha(n));
    const h = fa({
      chain: vs(s),
      transport: ps(d)
    }), p = St({
      chain: vs(s),
      transport: ps(d)
    });
    return {
      walletClient: h,
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
    await le.post("/keymanagement/test-mpc");
  }
}
class Ta {
  static getService(e) {
    switch (e) {
      case At.WEB3AUTH_WITH_MPC:
        return new Aa();
      default:
        throw new Error(`Unsupported service type: ${e}`);
    }
  }
}
const Ra = At.WEB3AUTH_WITH_MPC, Na = Ta.getService(Ra), dn = Hn, hn = Wn, Pa = v.forwardRef(({ className: t, inset: e, children: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  _s,
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
      /* @__PURE__ */ u.jsx(ea, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Pa.displayName = _s.displayName;
const Ma = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Hs,
  {
    ref: s,
    className: N(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Ma.displayName = Hs.displayName;
const as = v.forwardRef(({ className: t, sideOffset: e = 4, ...s }, n) => /* @__PURE__ */ u.jsx(_n, { children: /* @__PURE__ */ u.jsx(
  Ws,
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
as.displayName = Ws.displayName;
const rs = v.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  qs,
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
rs.displayName = qs.displayName;
const ka = v.forwardRef(({ className: t, children: e, checked: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Ks,
  {
    ref: o,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: s,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx($s, { children: /* @__PURE__ */ u.jsx(ta, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
ka.displayName = Ks.displayName;
const ja = v.forwardRef(({ className: t, children: e, ...s }, n) => /* @__PURE__ */ u.jsxs(
  Vs,
  {
    ref: n,
    className: N(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx($s, { children: /* @__PURE__ */ u.jsx(sa, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
ja.displayName = Vs.displayName;
const Ia = v.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Gs,
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
Ia.displayName = Gs.displayName;
const Oa = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Ys,
  {
    ref: s,
    className: N("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Oa.displayName = Ys.displayName;
const Da = xt.getInstance().getAllTokenTypes();
function Fa({
  open: t,
  setOpen: e,
  balance: s,
  address: n,
  tokenType: o,
  defaultTo: d,
  defaultAmount: h,
  defaultNote: p,
  onClose: a
}) {
  const [i, r] = v.useState(""), [c, f] = v.useState(""), [y, g] = v.useState(""), [m, b] = v.useState(!1), [A, S] = v.useState(""), x = v.useRef(), [E, j] = v.useState(o), [F, B] = v.useState("0"), [T, P] = v.useState(!1), [H, D] = v.useState(!1), [X, ee] = v.useState(""), [U, W] = v.useState(""), { t: L } = Xt();
  v.useEffect(() => {
    t ? pe(o) : ke();
  }, [t]), v.useEffect(() => {
    t && (d && r(d), h && f(h), p && g(p));
  }, [d, h, p, t]), v.useEffect(() => {
    !t && a && a();
  }, [t]);
  const ne = v.useMemo(() => !i || !c || m || !H || T || !!U && U !== L("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(c) > parseFloat(F), [i, c, m, H, T, U, F]), pe = async (I) => {
    j(I);
    const K = xt.getInstance().createToken(I);
    x.current = K, S(x.current.symbol);
    let te = await x.current.getBalance(n);
    te = bs(te), B(te);
  }, ye = async (I) => {
    if (ms(i))
      D(!0), ee(""), W("");
    else {
      P(!0), W("");
      try {
        const K = await le.get("/address/", {
          params: { email: I }
        });
        K.data.success ? (D(!0), ee(K.data.address)) : xs.test(I) ? (D(!0), ee(""), W(L("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (D(!1), ee(""), W(L("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        P(!1);
      }
    }
  }, ge = () => {
    ve("to", i), i ? ye(i) : (D(!1), ee(""), W(""));
  };
  async function Re(I) {
    try {
      const K = ys(c).toString();
      ve("amt", K), b(!0);
      const {
        needOtp: te,
        hash: us,
        message: Un
      } = await Na.signTransaction({
        toAddress: I,
        amount: K,
        token: E,
        note: y,
        transactionType: un.TRANSFER
      });
      us ? (e(!1), Pe(us)) : te && (je.error(Un), e(!1));
    } catch (K) {
      const te = bt(K);
      ve("errorInfo", te), je.error(te.message);
    } finally {
      b(!1);
    }
  }
  const Ne = (I) => {
    var te;
    const K = `${(te = x.current) == null ? void 0 : te.openUrl}/${I}`;
    window.open(K, "_blank");
  }, Pe = (I) => {
    je(
      /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ u.jsx(hs, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ u.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ u.jsx(
            vt,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Ne(I);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, Me = async () => {
    if (!ne)
      try {
        b(!0);
        let I, K;
        if (ms(i))
          I = i;
        else if (xs.test(i) && U === L("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          K = i;
          const te = await le.post("/invite/invite-register", {
            toEmail: K,
            from: n,
            amount: ys(c).toString(),
            token: E,
            note: y
          });
          ve("res", te), je.success(L("/dashboard.[token].sendModal.emailSentToUnregistered")), ke(), e(!1);
          return;
        } else
          I = X;
        await Re(I), ke(), e(!1);
      } catch (I) {
        const K = bt(I);
        ve("errorInfo", K), je.error(L("/dashboard.[token].sendModal.sendError"));
      } finally {
        b(!1);
      }
  }, ke = () => {
    f(""), r(""), g(""), ee(""), W(""), D(!1), P(!1);
  }, rt = t ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
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
            children: /* @__PURE__ */ u.jsx(sn, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs("form", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              jt,
              {
                value: i,
                onChange: (I) => r(I.target.value.trim()),
                onBlur: ge,
                id: "to",
                required: !0,
                placeholder: L("/dashboard.[token].sendModal.toPlaceholder"),
                className: N(
                  H && "border-green-500",
                  U && "border-destructive",
                  U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            T && /* @__PURE__ */ u.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsx(na, { className: "animate-spin", size: 16 }) }),
            H && !T && !U && /* @__PURE__ */ u.jsx(hs, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            U && !T && /* @__PURE__ */ u.jsx(aa, { className: N(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          H && X && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-primary/60", children: X }),
          U && /* @__PURE__ */ u.jsx("p", { className: N(
            "mt-1 text-xs text-destructive",
            U === L("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: U })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              jt,
              {
                value: c,
                onChange: (I) => f(I.target.value.trim()),
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0
              }
            ),
            /* @__PURE__ */ u.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsxs(dn, { children: [
              /* @__PURE__ */ u.jsxs(hn, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ u.jsx("span", { className: "font-medium text-sm", children: E }),
                /* @__PURE__ */ u.jsx(ra, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ u.jsx(as, { align: "start", className: "bg-white", children: Da.map((I) => /* @__PURE__ */ u.jsx(rs, { onClick: () => pe(I), children: I }, I)) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: L("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
            cn,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: y,
              onChange: (I) => g(I.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: [
        /* @__PURE__ */ u.jsxs("div", { className: "text-black text-sm font-medium font-['Roboto'] leading-none", children: [
          "Crypto balance: ",
          bs(F),
          " ",
          A
        ] }),
        /* @__PURE__ */ u.jsx(
          vt,
          {
            onClick: Me,
            className: N("py-12px"),
            disabled: ne,
            children: m ? /* @__PURE__ */ u.jsx("div", { className: "", children: /* @__PURE__ */ u.jsx(Sa, {}) }) : /* @__PURE__ */ u.jsx("span", { children: L("/dashboard.[token].sendModal.title") })
          }
        )
      ] })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return tn.createPortal(
      rt,
      document.body
    );
}
const Ba = qn, fn = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Zs,
  {
    ref: s,
    className: N(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
fn.displayName = Zs.displayName;
const It = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Xs,
  {
    ref: s,
    className: N(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
It.displayName = Xs.displayName;
const Ot = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Js,
  {
    ref: s,
    className: N(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
Ot.displayName = Js.displayName;
var Ua = Object.defineProperty, wt = Object.getOwnPropertySymbols, pn = Object.prototype.hasOwnProperty, mn = Object.prototype.propertyIsEnumerable, ws = (t, e, s) => e in t ? Ua(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Dt = (t, e) => {
  for (var s in e || (e = {}))
    pn.call(e, s) && ws(t, s, e[s]);
  if (wt)
    for (var s of wt(e))
      mn.call(e, s) && ws(t, s, e[s]);
  return t;
}, Ft = (t, e) => {
  var s = {};
  for (var n in t)
    pn.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && wt)
    for (var n of wt(t))
      e.indexOf(n) < 0 && mn.call(t, n) && (s[n] = t[n]);
  return s;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var _e;
((t) => {
  const e = class R {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(a, i, r, c) {
      if (this.version = a, this.errorCorrectionLevel = i, this.modules = [], this.isFunction = [], a < R.MIN_VERSION || a > R.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (c < -1 || c > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let f = [];
      for (let g = 0; g < this.size; g++)
        f.push(!1);
      for (let g = 0; g < this.size; g++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(r);
      if (this.drawCodewords(y), c == -1) {
        let g = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const b = this.getPenaltyScore();
          b < g && (c = m, g = b), this.applyMask(m);
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
    static encodeText(a, i) {
      const r = t.QrSegment.makeSegments(a);
      return R.encodeSegments(r, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(a, i) {
      const r = t.QrSegment.makeBytes(a);
      return R.encodeSegments([r], i);
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
    static encodeSegments(a, i, r = 1, c = 40, f = -1, y = !0) {
      if (!(R.MIN_VERSION <= r && r <= c && c <= R.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let g, m;
      for (g = r; ; g++) {
        const x = R.getNumDataCodewords(g, i) * 8, E = h.getTotalBits(a, g);
        if (E <= x) {
          m = E;
          break;
        }
        if (g >= c)
          throw new RangeError("Data too long");
      }
      for (const x of [R.Ecc.MEDIUM, R.Ecc.QUARTILE, R.Ecc.HIGH])
        y && m <= R.getNumDataCodewords(g, x) * 8 && (i = x);
      let b = [];
      for (const x of a) {
        s(x.mode.modeBits, 4, b), s(x.numChars, x.mode.numCharCountBits(g), b);
        for (const E of x.getData())
          b.push(E);
      }
      o(b.length == m);
      const A = R.getNumDataCodewords(g, i) * 8;
      o(b.length <= A), s(0, Math.min(4, A - b.length), b), s(0, (8 - b.length % 8) % 8, b), o(b.length % 8 == 0);
      for (let x = 236; b.length < A; x ^= 253)
        s(x, 8, b);
      let S = [];
      for (; S.length * 8 < b.length; )
        S.push(0);
      return b.forEach((x, E) => S[E >>> 3] |= x << 7 - (E & 7)), new R(g, i, S, f);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(a, i) {
      return 0 <= a && a < this.size && 0 <= i && i < this.size && this.modules[i][a];
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
      const a = this.getAlignmentPatternPositions(), i = a.length;
      for (let r = 0; r < i; r++)
        for (let c = 0; c < i; c++)
          r == 0 && c == 0 || r == 0 && c == i - 1 || r == i - 1 && c == 0 || this.drawAlignmentPattern(a[r], a[c]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(a) {
      const i = this.errorCorrectionLevel.formatBits << 3 | a;
      let r = i;
      for (let f = 0; f < 10; f++)
        r = r << 1 ^ (r >>> 9) * 1335;
      const c = (i << 10 | r) ^ 21522;
      o(c >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, n(c, f));
      this.setFunctionModule(8, 7, n(c, 6)), this.setFunctionModule(8, 8, n(c, 7)), this.setFunctionModule(7, 8, n(c, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, n(c, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, n(c, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, n(c, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let a = this.version;
      for (let r = 0; r < 12; r++)
        a = a << 1 ^ (a >>> 11) * 7973;
      const i = this.version << 12 | a;
      o(i >>> 18 == 0);
      for (let r = 0; r < 18; r++) {
        const c = n(i, r), f = this.size - 11 + r % 3, y = Math.floor(r / 3);
        this.setFunctionModule(f, y, c), this.setFunctionModule(y, f, c);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(a, i) {
      for (let r = -4; r <= 4; r++)
        for (let c = -4; c <= 4; c++) {
          const f = Math.max(Math.abs(c), Math.abs(r)), y = a + c, g = i + r;
          0 <= y && y < this.size && 0 <= g && g < this.size && this.setFunctionModule(y, g, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(a, i) {
      for (let r = -2; r <= 2; r++)
        for (let c = -2; c <= 2; c++)
          this.setFunctionModule(a + c, i + r, Math.max(Math.abs(c), Math.abs(r)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(a, i, r) {
      this.modules[i][a] = r, this.isFunction[i][a] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(a) {
      const i = this.version, r = this.errorCorrectionLevel;
      if (a.length != R.getNumDataCodewords(i, r))
        throw new RangeError("Invalid argument");
      const c = R.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][i], f = R.ECC_CODEWORDS_PER_BLOCK[r.ordinal][i], y = Math.floor(R.getNumRawDataModules(i) / 8), g = c - y % c, m = Math.floor(y / c);
      let b = [];
      const A = R.reedSolomonComputeDivisor(f);
      for (let x = 0, E = 0; x < c; x++) {
        let j = a.slice(E, E + m - f + (x < g ? 0 : 1));
        E += j.length;
        const F = R.reedSolomonComputeRemainder(j, A);
        x < g && j.push(0), b.push(j.concat(F));
      }
      let S = [];
      for (let x = 0; x < b[0].length; x++)
        b.forEach((E, j) => {
          (x != m - f || j >= g) && S.push(E[x]);
        });
      return o(S.length == y), S;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(a) {
      if (a.length != Math.floor(R.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let r = this.size - 1; r >= 1; r -= 2) {
        r == 6 && (r = 5);
        for (let c = 0; c < this.size; c++)
          for (let f = 0; f < 2; f++) {
            const y = r - f, m = (r + 1 & 2) == 0 ? this.size - 1 - c : c;
            !this.isFunction[m][y] && i < a.length * 8 && (this.modules[m][y] = n(a[i >>> 3], 7 - (i & 7)), i++);
          }
      }
      o(i == a.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(a) {
      if (a < 0 || a > 7)
        throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let r = 0; r < this.size; r++) {
          let c;
          switch (a) {
            case 0:
              c = (r + i) % 2 == 0;
              break;
            case 1:
              c = i % 2 == 0;
              break;
            case 2:
              c = r % 3 == 0;
              break;
            case 3:
              c = (r + i) % 3 == 0;
              break;
            case 4:
              c = (Math.floor(r / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              c = r * i % 2 + r * i % 3 == 0;
              break;
            case 6:
              c = (r * i % 2 + r * i % 3) % 2 == 0;
              break;
            case 7:
              c = ((r + i) % 2 + r * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][r] && c && (this.modules[i][r] = !this.modules[i][r]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let a = 0;
      for (let f = 0; f < this.size; f++) {
        let y = !1, g = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[f][b] == y ? (g++, g == 5 ? a += R.PENALTY_N1 : g > 5 && a++) : (this.finderPenaltyAddHistory(g, m), y || (a += this.finderPenaltyCountPatterns(m) * R.PENALTY_N3), y = this.modules[f][b], g = 1);
        a += this.finderPenaltyTerminateAndCount(y, g, m) * R.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let y = !1, g = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[b][f] == y ? (g++, g == 5 ? a += R.PENALTY_N1 : g > 5 && a++) : (this.finderPenaltyAddHistory(g, m), y || (a += this.finderPenaltyCountPatterns(m) * R.PENALTY_N3), y = this.modules[b][f], g = 1);
        a += this.finderPenaltyTerminateAndCount(y, g, m) * R.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let y = 0; y < this.size - 1; y++) {
          const g = this.modules[f][y];
          g == this.modules[f][y + 1] && g == this.modules[f + 1][y] && g == this.modules[f + 1][y + 1] && (a += R.PENALTY_N2);
        }
      let i = 0;
      for (const f of this.modules)
        i = f.reduce((y, g) => y + (g ? 1 : 0), i);
      const r = this.size * this.size, c = Math.ceil(Math.abs(i * 20 - r * 10) / r) - 1;
      return o(0 <= c && c <= 9), a += c * R.PENALTY_N4, o(0 <= a && a <= 2568888), a;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const a = Math.floor(this.version / 7) + 2, i = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (a * 2 - 2)) * 2;
        let r = [6];
        for (let c = this.size - 7; r.length < a; c -= i)
          r.splice(1, 0, c);
        return r;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(a) {
      if (a < R.MIN_VERSION || a > R.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let i = (16 * a + 128) * a + 64;
      if (a >= 2) {
        const r = Math.floor(a / 7) + 2;
        i -= (25 * r - 10) * r - 55, a >= 7 && (i -= 36);
      }
      return o(208 <= i && i <= 29648), i;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(a, i) {
      return Math.floor(R.getNumRawDataModules(a) / 8) - R.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a] * R.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(a) {
      if (a < 1 || a > 255)
        throw new RangeError("Degree out of range");
      let i = [];
      for (let c = 0; c < a - 1; c++)
        i.push(0);
      i.push(1);
      let r = 1;
      for (let c = 0; c < a; c++) {
        for (let f = 0; f < i.length; f++)
          i[f] = R.reedSolomonMultiply(i[f], r), f + 1 < i.length && (i[f] ^= i[f + 1]);
        r = R.reedSolomonMultiply(r, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(a, i) {
      let r = i.map((c) => 0);
      for (const c of a) {
        const f = c ^ r.shift();
        r.push(0), i.forEach((y, g) => r[g] ^= R.reedSolomonMultiply(y, f));
      }
      return r;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(a, i) {
      if (a >>> 8 || i >>> 8)
        throw new RangeError("Byte out of range");
      let r = 0;
      for (let c = 7; c >= 0; c--)
        r = r << 1 ^ (r >>> 7) * 285, r ^= (i >>> c & 1) * a;
      return o(r >>> 8 == 0), r;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(a) {
      const i = a[1];
      o(i <= this.size * 3);
      const r = i > 0 && a[2] == i && a[3] == i * 3 && a[4] == i && a[5] == i;
      return (r && a[0] >= i * 4 && a[6] >= i ? 1 : 0) + (r && a[6] >= i * 4 && a[0] >= i ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(a, i, r) {
      return a && (this.finderPenaltyAddHistory(i, r), i = 0), i += this.size, this.finderPenaltyAddHistory(i, r), this.finderPenaltyCountPatterns(r);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(a, i) {
      i[0] == 0 && (a += this.size), i.pop(), i.unshift(a);
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
  function s(p, a, i) {
    if (a < 0 || a > 31 || p >>> a)
      throw new RangeError("Value out of range");
    for (let r = a - 1; r >= 0; r--)
      i.push(p >>> r & 1);
  }
  function n(p, a) {
    return (p >>> a & 1) != 0;
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
    constructor(a, i, r) {
      if (this.mode = a, this.numChars = i, this.bitData = r, i < 0)
        throw new RangeError("Invalid argument");
      this.bitData = r.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(a) {
      let i = [];
      for (const r of a)
        s(r, 8, i);
      return new Q(Q.Mode.BYTE, a.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(a) {
      if (!Q.isNumeric(a))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let r = 0; r < a.length; ) {
        const c = Math.min(a.length - r, 3);
        s(parseInt(a.substring(r, r + c), 10), c * 3 + 1, i), r += c;
      }
      return new Q(Q.Mode.NUMERIC, a.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(a) {
      if (!Q.isAlphanumeric(a))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let i = [], r;
      for (r = 0; r + 2 <= a.length; r += 2) {
        let c = Q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)) * 45;
        c += Q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r + 1)), s(c, 11, i);
      }
      return r < a.length && s(Q.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)), 6, i), new Q(Q.Mode.ALPHANUMERIC, a.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(a) {
      return a == "" ? [] : Q.isNumeric(a) ? [Q.makeNumeric(a)] : Q.isAlphanumeric(a) ? [Q.makeAlphanumeric(a)] : [Q.makeBytes(Q.toUtf8ByteArray(a))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(a) {
      let i = [];
      if (a < 0)
        throw new RangeError("ECI assignment value out of range");
      if (a < 128)
        s(a, 8, i);
      else if (a < 16384)
        s(2, 2, i), s(a, 14, i);
      else if (a < 1e6)
        s(6, 3, i), s(a, 21, i);
      else
        throw new RangeError("ECI assignment value out of range");
      return new Q(Q.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(a) {
      return Q.NUMERIC_REGEX.test(a);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(a) {
      return Q.ALPHANUMERIC_REGEX.test(a);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(a, i) {
      let r = 0;
      for (const c of a) {
        const f = c.mode.numCharCountBits(i);
        if (c.numChars >= 1 << f)
          return 1 / 0;
        r += 4 + f + c.bitData.length;
      }
      return r;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(a) {
      a = encodeURI(a);
      let i = [];
      for (let r = 0; r < a.length; r++)
        a.charAt(r) != "%" ? i.push(a.charCodeAt(r)) : (i.push(parseInt(a.substring(r + 1, r + 3), 16)), r += 2);
      return i;
    }
  };
  d.NUMERIC_REGEX = /^[0-9]*$/, d.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, d.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let h = d;
  t.QrSegment = d;
})(_e || (_e = {}));
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
})(_e || (_e = {}));
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
})(_e || (_e = {}));
var We = _e;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var La = {
  L: We.QrCode.Ecc.LOW,
  M: We.QrCode.Ecc.MEDIUM,
  Q: We.QrCode.Ecc.QUARTILE,
  H: We.QrCode.Ecc.HIGH
}, yn = 128, gn = "L", bn = "#FFFFFF", vn = "#000000", xn = !1, wn = 1, Qa = 4, za = 0, _a = 0.1;
function Cn(t, e = 0) {
  const s = [];
  return t.forEach(function(n, o) {
    let d = null;
    n.forEach(function(h, p) {
      if (!h && d !== null) {
        s.push(
          `M${d + e} ${o + e}h${p - d}v1H${d + e}z`
        ), d = null;
        return;
      }
      if (p === n.length - 1) {
        if (!h)
          return;
        d === null ? s.push(`M${p + e},${o + e} h1v1H${p + e}z`) : s.push(
          `M${d + e},${o + e} h${p + 1 - d}v1H${d + e}z`
        );
        return;
      }
      h && d === null && (d = p);
    });
  }), s.join("");
}
function En(t, e) {
  return t.slice().map((s, n) => n < e.y || n >= e.y + e.h ? s : s.map((o, d) => d < e.x || d >= e.x + e.w ? o : !1));
}
function Ha(t, e, s, n) {
  if (n == null)
    return null;
  const o = t.length + s * 2, d = Math.floor(e * _a), h = o / e, p = (n.width || d) * h, a = (n.height || d) * h, i = n.x == null ? t.length / 2 - p / 2 : n.x * h, r = n.y == null ? t.length / 2 - a / 2 : n.y * h, c = n.opacity == null ? 1 : n.opacity;
  let f = null;
  if (n.excavate) {
    let g = Math.floor(i), m = Math.floor(r), b = Math.ceil(p + i - g), A = Math.ceil(a + r - m);
    f = { x: g, y: m, w: b, h: A };
  }
  const y = n.crossOrigin;
  return { x: i, y: r, h: a, w: p, excavation: f, opacity: c, crossOrigin: y };
}
function Wa(t, e) {
  return e != null ? Math.max(Math.floor(e), 0) : t ? Qa : za;
}
function Sn({
  value: t,
  level: e,
  minVersion: s,
  includeMargin: n,
  marginSize: o,
  imageSettings: d,
  size: h,
  boostLevel: p
}) {
  let a = $.useMemo(() => {
    const g = (Array.isArray(t) ? t : [t]).reduce((m, b) => (m.push(...We.QrSegment.makeSegments(b)), m), []);
    return We.QrCode.encodeSegments(
      g,
      La[e],
      s,
      void 0,
      void 0,
      p
    );
  }, [t, e, s, p]);
  const { cells: i, margin: r, numCells: c, calculatedImageSettings: f } = $.useMemo(() => {
    let y = a.getModules();
    const g = Wa(n, o), m = y.length + g * 2, b = Ha(
      y,
      h,
      g,
      d
    );
    return {
      cells: y,
      margin: g,
      numCells: m,
      calculatedImageSettings: b
    };
  }, [a, h, d, n, o]);
  return {
    qrcode: a,
    margin: r,
    cells: i,
    numCells: c,
    calculatedImageSettings: f
  };
}
var qa = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), Ka = $.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = yn,
      level: h = gn,
      bgColor: p = bn,
      fgColor: a = vn,
      includeMargin: i = xn,
      minVersion: r = wn,
      boostLevel: c,
      marginSize: f,
      imageSettings: y
    } = n, m = Ft(n, [
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
    ]), { style: b } = m, A = Ft(m, ["style"]), S = y == null ? void 0 : y.src, x = $.useRef(null), E = $.useRef(null), j = $.useCallback(
      (U) => {
        x.current = U, typeof s == "function" ? s(U) : s && (s.current = U);
      },
      [s]
    ), [F, B] = $.useState(!1), { margin: T, cells: P, numCells: H, calculatedImageSettings: D } = Sn({
      value: o,
      level: h,
      minVersion: r,
      boostLevel: c,
      includeMargin: i,
      marginSize: f,
      imageSettings: y,
      size: d
    });
    $.useEffect(() => {
      if (x.current != null) {
        const U = x.current, W = U.getContext("2d");
        if (!W)
          return;
        let L = P;
        const ne = E.current, pe = D != null && ne !== null && ne.complete && ne.naturalHeight !== 0 && ne.naturalWidth !== 0;
        pe && D.excavation != null && (L = En(
          P,
          D.excavation
        ));
        const ye = window.devicePixelRatio || 1;
        U.height = U.width = d * ye;
        const ge = d / H * ye;
        W.scale(ge, ge), W.fillStyle = p, W.fillRect(0, 0, H, H), W.fillStyle = a, qa ? W.fill(new Path2D(Cn(L, T))) : P.forEach(function(Re, Ne) {
          Re.forEach(function(Pe, Me) {
            Pe && W.fillRect(Me + T, Ne + T, 1, 1);
          });
        }), D && (W.globalAlpha = D.opacity), pe && W.drawImage(
          ne,
          D.x + T,
          D.y + T,
          D.w,
          D.h
        );
      }
    }), $.useEffect(() => {
      B(!1);
    }, [S]);
    const X = Dt({ height: d, width: d }, b);
    let ee = null;
    return S != null && (ee = /* @__PURE__ */ $.createElement(
      "img",
      {
        src: S,
        key: S,
        style: { display: "none" },
        onLoad: () => {
          B(!0);
        },
        ref: E,
        crossOrigin: D == null ? void 0 : D.crossOrigin
      }
    )), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(
      "canvas",
      Dt({
        style: X,
        height: d,
        width: d,
        ref: j,
        role: "img"
      }, A)
    ), ee);
  }
);
Ka.displayName = "QRCodeCanvas";
var Bt = $.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = yn,
      level: h = gn,
      bgColor: p = bn,
      fgColor: a = vn,
      includeMargin: i = xn,
      minVersion: r = wn,
      boostLevel: c,
      title: f,
      marginSize: y,
      imageSettings: g
    } = n, m = Ft(n, [
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
    ]), { margin: b, cells: A, numCells: S, calculatedImageSettings: x } = Sn({
      value: o,
      level: h,
      minVersion: r,
      boostLevel: c,
      includeMargin: i,
      marginSize: y,
      imageSettings: g,
      size: d
    });
    let E = A, j = null;
    g != null && x != null && (x.excavation != null && (E = En(
      A,
      x.excavation
    )), j = /* @__PURE__ */ $.createElement(
      "image",
      {
        href: g.src,
        height: x.h,
        width: x.w,
        x: x.x + b,
        y: x.y + b,
        preserveAspectRatio: "none",
        opacity: x.opacity,
        crossOrigin: x.crossOrigin
      }
    ));
    const F = Cn(E, b);
    return /* @__PURE__ */ $.createElement(
      "svg",
      Dt({
        height: d,
        width: d,
        viewBox: `0 0 ${S} ${S}`,
        ref: s,
        role: "img"
      }, m),
      !!f && /* @__PURE__ */ $.createElement("title", null, f),
      /* @__PURE__ */ $.createElement(
        "path",
        {
          fill: p,
          d: `M0,0 h${S}v${S}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ $.createElement("path", { fill: a, d: F, shapeRendering: "crispEdges" }),
      j
    );
  }
);
Bt.displayName = "QRCodeSVG";
function $a({
  address: t,
  open: e,
  setOpen: s,
  onClose: n
}) {
  const { t: o } = Xt(), [d, h] = v.useState("");
  v.useEffect(() => {
    const { username: a } = q.all();
    h(a);
  }, []);
  const p = e ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
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
            children: /* @__PURE__ */ u.jsx(sn, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs(Ba, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ u.jsxs(fn, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ u.jsx(
            It,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ u.jsx(
            It,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs(Ot, { value: "crypto", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(kt, { address: t, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Bt,
            {
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
        /* @__PURE__ */ u.jsxs(Ot, { value: "email", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(kt, { address: d, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Bt,
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
      /* @__PURE__ */ u.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ u.jsx(
        vt,
        {
          onClick: () => n(!1),
          children: "Share QR code"
        }
      ) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return tn.createPortal(
      p,
      document.body
    );
}
var pt = class {
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
}, He = typeof window > "u" || "Deno" in globalThis;
function re() {
}
function Va(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ut(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function An(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function qe(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function oe(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Cs(t, e) {
  const {
    type: s = "all",
    exact: n,
    fetchStatus: o,
    predicate: d,
    queryKey: h,
    stale: p
  } = t;
  if (h) {
    if (n) {
      if (e.queryHash !== is(h, e.options))
        return !1;
    } else if (!lt(e.queryKey, h))
      return !1;
  }
  if (s !== "all") {
    const a = e.isActive();
    if (s === "active" && !a || s === "inactive" && a)
      return !1;
  }
  return !(typeof p == "boolean" && e.isStale() !== p || o && o !== e.state.fetchStatus || d && !d(e));
}
function Es(t, e) {
  const { exact: s, status: n, predicate: o, mutationKey: d } = t;
  if (d) {
    if (!e.options.mutationKey)
      return !1;
    if (s) {
      if (ot(e.options.mutationKey) !== ot(d))
        return !1;
    } else if (!lt(e.options.mutationKey, d))
      return !1;
  }
  return !(n && e.state.status !== n || o && !o(e));
}
function is(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ot)(t);
}
function ot(t) {
  return JSON.stringify(
    t,
    (e, s) => zt(s) ? Object.keys(s).sort().reduce((n, o) => (n[o] = s[o], n), {}) : s
  );
}
function lt(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((s) => !lt(t[s], e[s])) : !1;
}
function Lt(t, e) {
  if (t === e)
    return t;
  const s = Ss(t) && Ss(e);
  if (s || zt(t) && zt(e)) {
    const n = s ? t : Object.keys(t), o = n.length, d = s ? e : Object.keys(e), h = d.length, p = s ? [] : {};
    let a = 0;
    for (let i = 0; i < h; i++) {
      const r = s ? i : d[i];
      (!s && n.includes(r) || s) && t[r] === void 0 && e[r] === void 0 ? (p[r] = void 0, a++) : (p[r] = Lt(t[r], e[r]), p[r] === t[r] && t[r] !== void 0 && a++);
    }
    return o === h && a === o ? t : p;
  }
  return e;
}
function Qt(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const s in t)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
function Ss(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function zt(t) {
  if (!As(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const s = e.prototype;
  return !(!As(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function As(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Ga(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function _t(t, e, s) {
  if (typeof s.structuralSharing == "function")
    return s.structuralSharing(t, e);
  if (s.structuralSharing !== !1) {
    if (ze.env.NODE_ENV !== "production")
      try {
        return Lt(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${s.queryHash}]: ${n}`
        );
      }
    return Lt(t, e);
  }
  return e;
}
function Ya(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function Za(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var Ct = Symbol();
function Tn(t, e) {
  return ze.env.NODE_ENV !== "production" && t.queryFn === Ct && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === Ct ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Oe, xe, Ke, Is, Xa = (Is = class extends pt {
  constructor() {
    super();
    C(this, Oe);
    C(this, xe);
    C(this, Ke);
    w(this, Ke, (e) => {
      if (!He && window.addEventListener) {
        const s = () => e();
        return window.addEventListener("visibilitychange", s, !1), () => {
          window.removeEventListener("visibilitychange", s);
        };
      }
    });
  }
  onSubscribe() {
    l(this, xe) || this.setEventListener(l(this, Ke));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, xe)) == null || e.call(this), w(this, xe, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, Ke, e), (s = l(this, xe)) == null || s.call(this), w(this, xe, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    l(this, Oe) !== e && (w(this, Oe, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((s) => {
      s(e);
    });
  }
  isFocused() {
    var e;
    return typeof l(this, Oe) == "boolean" ? l(this, Oe) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Oe = new WeakMap(), xe = new WeakMap(), Ke = new WeakMap(), Is), os = new Xa(), $e, we, Ve, Os, Ja = (Os = class extends pt {
  constructor() {
    super();
    C(this, $e, !0);
    C(this, we);
    C(this, Ve);
    w(this, Ve, (e) => {
      if (!He && window.addEventListener) {
        const s = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", s, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", s), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    l(this, we) || this.setEventListener(l(this, Ve));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, we)) == null || e.call(this), w(this, we, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, Ve, e), (s = l(this, we)) == null || s.call(this), w(this, we, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    l(this, $e) !== e && (w(this, $e, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return l(this, $e);
  }
}, $e = new WeakMap(), we = new WeakMap(), Ve = new WeakMap(), Os), Et = new Ja();
function Ht() {
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
function er(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function Rn(t) {
  return (t ?? "online") === "online" ? Et.isOnline() : !0;
}
var Nn = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function Nt(t) {
  return t instanceof Nn;
}
function Pn(t) {
  let e = !1, s = 0, n = !1, o;
  const d = Ht(), h = (m) => {
    var b;
    n || (f(new Nn(m)), (b = t.abort) == null || b.call(t));
  }, p = () => {
    e = !0;
  }, a = () => {
    e = !1;
  }, i = () => os.isFocused() && (t.networkMode === "always" || Et.isOnline()) && t.canRun(), r = () => Rn(t.networkMode) && t.canRun(), c = (m) => {
    var b;
    n || (n = !0, (b = t.onSuccess) == null || b.call(t, m), o == null || o(), d.resolve(m));
  }, f = (m) => {
    var b;
    n || (n = !0, (b = t.onError) == null || b.call(t, m), o == null || o(), d.reject(m));
  }, y = () => new Promise((m) => {
    var b;
    o = (A) => {
      (n || i()) && m(A);
    }, (b = t.onPause) == null || b.call(t);
  }).then(() => {
    var m;
    o = void 0, n || (m = t.onContinue) == null || m.call(t);
  }), g = () => {
    if (n)
      return;
    let m;
    const b = s === 0 ? t.initialPromise : void 0;
    try {
      m = b ?? t.fn();
    } catch (A) {
      m = Promise.reject(A);
    }
    Promise.resolve(m).then(c).catch((A) => {
      var F;
      if (n)
        return;
      const S = t.retry ?? (He ? 0 : 3), x = t.retryDelay ?? er, E = typeof x == "function" ? x(s, A) : x, j = S === !0 || typeof S == "number" && s < S || typeof S == "function" && S(s, A);
      if (e || !j) {
        f(A);
        return;
      }
      s++, (F = t.onFail) == null || F.call(t, s, A), Ga(E).then(() => i() ? void 0 : y()).then(() => {
        e ? f(A) : g();
      });
    });
  };
  return {
    promise: d,
    cancel: h,
    continue: () => (o == null || o(), d),
    cancelRetry: p,
    continueRetry: a,
    canStart: r,
    start: () => (r() ? g() : y().then(g), d)
  };
}
function tr() {
  let t = [], e = 0, s = (p) => {
    p();
  }, n = (p) => {
    p();
  }, o = (p) => setTimeout(p, 0);
  const d = (p) => {
    e ? t.push(p) : o(() => {
      s(p);
    });
  }, h = () => {
    const p = t;
    t = [], p.length && o(() => {
      n(() => {
        p.forEach((a) => {
          s(a);
        });
      });
    });
  };
  return {
    batch: (p) => {
      let a;
      e++;
      try {
        a = p();
      } finally {
        e--, e || h();
      }
      return a;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (p) => (...a) => {
      d(() => {
        p(...a);
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
var V = tr(), De, Ds, Mn = (Ds = class {
  constructor() {
    C(this, De);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ut(this.gcTime) && w(this, De, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (He ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    l(this, De) && (clearTimeout(l(this, De)), w(this, De, void 0));
  }
}, De = new WeakMap(), Ds), Ge, Ye, ae, G, ct, Fe, ie, me, Fs, sr = (Fs = class extends Mn {
  constructor(e) {
    super();
    C(this, ie);
    C(this, Ge);
    C(this, Ye);
    C(this, ae);
    C(this, G);
    C(this, ct);
    C(this, Fe);
    w(this, Fe, !1), w(this, ct, e.defaultOptions), this.setOptions(e.options), this.observers = [], w(this, ae, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, w(this, Ge, nr(this.options)), this.state = e.state ?? l(this, Ge), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = l(this, G)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...l(this, ct), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && l(this, ae).remove(this);
  }
  setData(e, s) {
    const n = _t(this.state.data, e, this.options);
    return M(this, ie, me).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), n;
  }
  setState(e, s) {
    M(this, ie, me).call(this, { type: "setState", state: e, setStateOptions: s });
  }
  cancel(e) {
    var n, o;
    const s = (n = l(this, G)) == null ? void 0 : n.promise;
    return (o = l(this, G)) == null || o.cancel(e), s ? s.then(re).catch(re) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(l(this, Ge));
  }
  isActive() {
    return this.observers.some(
      (e) => oe(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ct || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !An(this.state.dataUpdatedAt, e);
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
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), l(this, ae).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((s) => s !== e), this.observers.length || (l(this, G) && (l(this, Fe) ? l(this, G).cancel({ revert: !0 }) : l(this, G).cancelRetry()), this.scheduleGc()), l(this, ae).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || M(this, ie, me).call(this, { type: "invalidate" });
  }
  fetch(e, s) {
    var a, i, r;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (l(this, G))
        return l(this, G).continueRetry(), l(this, G).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const c = this.observers.find((f) => f.options.queryFn);
      c && this.setOptions(c.options);
    }
    ze.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), o = (c) => {
      Object.defineProperty(c, "signal", {
        enumerable: !0,
        get: () => (w(this, Fe, !0), n.signal)
      });
    }, d = () => {
      const c = Tn(this.options, s), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(f), w(this, Fe, !1), this.options.persister ? this.options.persister(
        c,
        f,
        this
      ) : c(f);
    }, h = {
      fetchOptions: s,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: d
    };
    o(h), (a = this.options.behavior) == null || a.onFetch(
      h,
      this
    ), w(this, Ye, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = h.fetchOptions) == null ? void 0 : i.meta)) && M(this, ie, me).call(this, { type: "fetch", meta: (r = h.fetchOptions) == null ? void 0 : r.meta });
    const p = (c) => {
      var f, y, g, m;
      Nt(c) && c.silent || M(this, ie, me).call(this, {
        type: "error",
        error: c
      }), Nt(c) || ((y = (f = l(this, ae).config).onError) == null || y.call(
        f,
        c,
        this
      ), (m = (g = l(this, ae).config).onSettled) == null || m.call(
        g,
        this.state.data,
        c,
        this
      )), this.scheduleGc();
    };
    return w(this, G, Pn({
      initialPromise: s == null ? void 0 : s.initialPromise,
      fn: h.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (c) => {
        var f, y, g, m;
        if (c === void 0) {
          ze.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), p(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(c);
        } catch (b) {
          p(b);
          return;
        }
        (y = (f = l(this, ae).config).onSuccess) == null || y.call(f, c, this), (m = (g = l(this, ae).config).onSettled) == null || m.call(
          g,
          c,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: p,
      onFail: (c, f) => {
        M(this, ie, me).call(this, { type: "failed", failureCount: c, error: f });
      },
      onPause: () => {
        M(this, ie, me).call(this, { type: "pause" });
      },
      onContinue: () => {
        M(this, ie, me).call(this, { type: "continue" });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode,
      canRun: () => !0
    })), l(this, G).start();
  }
}, Ge = new WeakMap(), Ye = new WeakMap(), ae = new WeakMap(), G = new WeakMap(), ct = new WeakMap(), Fe = new WeakMap(), ie = new WeakSet(), me = function(e) {
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
          ...kn(n.data, this.options),
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
        return Nt(o) && o.revert && l(this, Ye) ? { ...l(this, Ye), fetchStatus: "idle" } : {
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
    }), l(this, ae).notify({ query: this, type: "updated", action: e });
  });
}, Fs);
function kn(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Rn(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function nr(t) {
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
var ue, Bs, ar = (Bs = class extends pt {
  constructor(e = {}) {
    super();
    C(this, ue);
    this.config = e, w(this, ue, /* @__PURE__ */ new Map());
  }
  build(e, s, n) {
    const o = s.queryKey, d = s.queryHash ?? is(o, s);
    let h = this.get(d);
    return h || (h = new sr({
      cache: this,
      queryKey: o,
      queryHash: d,
      options: e.defaultQueryOptions(s),
      state: n,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(h)), h;
  }
  add(e) {
    l(this, ue).has(e.queryHash) || (l(this, ue).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const s = l(this, ue).get(e.queryHash);
    s && (e.destroy(), s === e && l(this, ue).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    V.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return l(this, ue).get(e);
  }
  getAll() {
    return [...l(this, ue).values()];
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Cs(s, n)
    );
  }
  findAll(e = {}) {
    const s = this.getAll();
    return Object.keys(e).length > 0 ? s.filter((n) => Cs(e, n)) : s;
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
}, ue = new WeakMap(), Bs), de, Y, Be, he, be, Us, rr = (Us = class extends Mn {
  constructor(e) {
    super();
    C(this, he);
    C(this, de);
    C(this, Y);
    C(this, Be);
    this.mutationId = e.mutationId, w(this, Y, e.mutationCache), w(this, de, []), this.state = e.state || ir(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    l(this, de).includes(e) || (l(this, de).push(e), this.clearGcTimeout(), l(this, Y).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    w(this, de, l(this, de).filter((s) => s !== e)), this.scheduleGc(), l(this, Y).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    l(this, de).length || (this.state.status === "pending" ? this.scheduleGc() : l(this, Y).remove(this));
  }
  continue() {
    var e;
    return ((e = l(this, Be)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var o, d, h, p, a, i, r, c, f, y, g, m, b, A, S, x, E, j, F, B;
    w(this, Be, Pn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (T, P) => {
        M(this, he, be).call(this, { type: "failed", failureCount: T, error: P });
      },
      onPause: () => {
        M(this, he, be).call(this, { type: "pause" });
      },
      onContinue: () => {
        M(this, he, be).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => l(this, Y).canRun(this)
    }));
    const s = this.state.status === "pending", n = !l(this, Be).canStart();
    try {
      if (!s) {
        M(this, he, be).call(this, { type: "pending", variables: e, isPaused: n }), await ((d = (o = l(this, Y).config).onMutate) == null ? void 0 : d.call(
          o,
          e,
          this
        ));
        const P = await ((p = (h = this.options).onMutate) == null ? void 0 : p.call(h, e));
        P !== this.state.context && M(this, he, be).call(this, {
          type: "pending",
          context: P,
          variables: e,
          isPaused: n
        });
      }
      const T = await l(this, Be).start();
      return await ((i = (a = l(this, Y).config).onSuccess) == null ? void 0 : i.call(
        a,
        T,
        e,
        this.state.context,
        this
      )), await ((c = (r = this.options).onSuccess) == null ? void 0 : c.call(r, T, e, this.state.context)), await ((y = (f = l(this, Y).config).onSettled) == null ? void 0 : y.call(
        f,
        T,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (g = this.options).onSettled) == null ? void 0 : m.call(g, T, null, e, this.state.context)), M(this, he, be).call(this, { type: "success", data: T }), T;
    } catch (T) {
      try {
        throw await ((A = (b = l(this, Y).config).onError) == null ? void 0 : A.call(
          b,
          T,
          e,
          this.state.context,
          this
        )), await ((x = (S = this.options).onError) == null ? void 0 : x.call(
          S,
          T,
          e,
          this.state.context
        )), await ((j = (E = l(this, Y).config).onSettled) == null ? void 0 : j.call(
          E,
          void 0,
          T,
          this.state.variables,
          this.state.context,
          this
        )), await ((B = (F = this.options).onSettled) == null ? void 0 : B.call(
          F,
          void 0,
          T,
          e,
          this.state.context
        )), T;
      } finally {
        M(this, he, be).call(this, { type: "error", error: T });
      }
    } finally {
      l(this, Y).runNext(this);
    }
  }
}, de = new WeakMap(), Y = new WeakMap(), Be = new WeakMap(), he = new WeakSet(), be = function(e) {
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
    l(this, de).forEach((n) => {
      n.onMutationUpdate(e);
    }), l(this, Y).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, Us);
function ir() {
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
var se, ut, Ls, or = (Ls = class extends pt {
  constructor(e = {}) {
    super();
    C(this, se);
    C(this, ut);
    this.config = e, w(this, se, /* @__PURE__ */ new Map()), w(this, ut, Date.now());
  }
  build(e, s, n) {
    const o = new rr({
      mutationCache: this,
      mutationId: ++mt(this, ut)._,
      options: e.defaultMutationOptions(s),
      state: n
    });
    return this.add(o), o;
  }
  add(e) {
    const s = gt(e), n = l(this, se).get(s) ?? [];
    n.push(e), l(this, se).set(s, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const s = gt(e);
    if (l(this, se).has(s)) {
      const o = (n = l(this, se).get(s)) == null ? void 0 : n.filter((d) => d !== e);
      o && (o.length === 0 ? l(this, se).delete(s) : l(this, se).set(s, o));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const s = (n = l(this, se).get(gt(e))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !s || s === e;
  }
  runNext(e) {
    var n;
    const s = (n = l(this, se).get(gt(e))) == null ? void 0 : n.find((o) => o !== e && o.state.isPaused);
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
      (n) => Es(s, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((s) => Es(e, s));
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
        e.map((s) => s.continue().catch(re))
      )
    );
  }
}, se = new WeakMap(), ut = new WeakMap(), Ls);
function gt(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function Ts(t) {
  return {
    onFetch: (e, s) => {
      var r, c, f, y, g;
      const n = e.options, o = (f = (c = (r = e.fetchOptions) == null ? void 0 : r.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : f.direction, d = ((y = e.state.data) == null ? void 0 : y.pages) || [], h = ((g = e.state.data) == null ? void 0 : g.pageParams) || [];
      let p = { pages: [], pageParams: [] }, a = 0;
      const i = async () => {
        let m = !1;
        const b = (x) => {
          Object.defineProperty(x, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? m = !0 : e.signal.addEventListener("abort", () => {
              m = !0;
            }), e.signal)
          });
        }, A = Tn(e.options, e.fetchOptions), S = async (x, E, j) => {
          if (m)
            return Promise.reject();
          if (E == null && x.pages.length)
            return Promise.resolve(x);
          const F = {
            queryKey: e.queryKey,
            pageParam: E,
            direction: j ? "backward" : "forward",
            meta: e.options.meta
          };
          b(F);
          const B = await A(
            F
          ), { maxPages: T } = e.options, P = j ? Za : Ya;
          return {
            pages: P(x.pages, B, T),
            pageParams: P(x.pageParams, E, T)
          };
        };
        if (o && d.length) {
          const x = o === "backward", E = x ? lr : Rs, j = {
            pages: d,
            pageParams: h
          }, F = E(n, j);
          p = await S(j, F, x);
        } else {
          const x = t ?? d.length;
          do {
            const E = a === 0 ? h[0] ?? n.initialPageParam : Rs(n, p);
            if (a > 0 && E == null)
              break;
            p = await S(p, E), a++;
          } while (a < x);
        }
        return p;
      };
      e.options.persister ? e.fetchFn = () => {
        var m, b;
        return (b = (m = e.options).persister) == null ? void 0 : b.call(
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
function Rs(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    s[n],
    s
  ) : void 0;
}
function lr(t, { pages: e, pageParams: s }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, s[0], s) : void 0;
}
var z, Ce, Ee, Ze, Xe, Se, Je, et, Qs, cr = (Qs = class {
  constructor(t = {}) {
    C(this, z);
    C(this, Ce);
    C(this, Ee);
    C(this, Ze);
    C(this, Xe);
    C(this, Se);
    C(this, Je);
    C(this, et);
    w(this, z, t.queryCache || new ar()), w(this, Ce, t.mutationCache || new or()), w(this, Ee, t.defaultOptions || {}), w(this, Ze, /* @__PURE__ */ new Map()), w(this, Xe, /* @__PURE__ */ new Map()), w(this, Se, 0);
  }
  mount() {
    mt(this, Se)._++, l(this, Se) === 1 && (w(this, Je, os.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, z).onFocus());
    })), w(this, et, Et.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, z).onOnline());
    })));
  }
  unmount() {
    var t, e;
    mt(this, Se)._--, l(this, Se) === 0 && ((t = l(this, Je)) == null || t.call(this), w(this, Je, void 0), (e = l(this, et)) == null || e.call(this), w(this, et, void 0));
  }
  isFetching(t) {
    return l(this, z).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return l(this, Ce).findAll({ ...t, status: "pending" }).length;
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
      return t.revalidateIfStale && n.isStaleByTime(qe(s.staleTime, n)) && this.prefetchQuery(s), Promise.resolve(e);
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
    ), d = o == null ? void 0 : o.state.data, h = Va(e, d);
    if (h !== void 0)
      return l(this, z).build(this, n).setData(h, { ...s, manual: !0 });
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
    return Promise.all(n).then(re).catch(re);
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
        return s.throwOnError || (d = d.catch(re)), o.state.fetchStatus === "paused" ? Promise.resolve() : d;
      })
    );
    return Promise.all(n).then(re);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const s = l(this, z).build(this, e);
    return s.isStaleByTime(
      qe(e.staleTime, s)
    ) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(re).catch(re);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = Ts(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(re).catch(re);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = Ts(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return Et.isOnline() ? l(this, Ce).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return l(this, z);
  }
  getMutationCache() {
    return l(this, Ce);
  }
  getDefaultOptions() {
    return l(this, Ee);
  }
  setDefaultOptions(t) {
    w(this, Ee, t);
  }
  setQueryDefaults(t, e) {
    l(this, Ze).set(ot(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...l(this, Ze).values()];
    let s = {};
    return e.forEach((n) => {
      lt(t, n.queryKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  setMutationDefaults(t, e) {
    l(this, Xe).set(ot(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...l(this, Xe).values()];
    let s = {};
    return e.forEach((n) => {
      lt(t, n.mutationKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...l(this, Ee).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = is(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === Ct && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...l(this, Ee).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    l(this, z).clear(), l(this, Ce).clear();
  }
}, z = new WeakMap(), Ce = new WeakMap(), Ee = new WeakMap(), Ze = new WeakMap(), Xe = new WeakMap(), Se = new WeakMap(), Je = new WeakMap(), et = new WeakMap(), Qs), J, k, dt, Z, Ue, tt, Ae, fe, ht, st, nt, Le, Qe, Te, at, O, it, Wt, qt, Kt, $t, Vt, Gt, Yt, jn, zs, ur = (zs = class extends pt {
  constructor(e, s) {
    super();
    C(this, O);
    C(this, J);
    C(this, k);
    C(this, dt);
    C(this, Z);
    C(this, Ue);
    C(this, tt);
    C(this, Ae);
    C(this, fe);
    C(this, ht);
    C(this, st);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    C(this, nt);
    C(this, Le);
    C(this, Qe);
    C(this, Te);
    C(this, at, /* @__PURE__ */ new Set());
    this.options = s, w(this, J, e), w(this, fe, null), w(this, Ae, Ht()), this.options.experimental_prefetchInRender || l(this, Ae).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (l(this, k).addObserver(this), Ns(l(this, k), this.options) ? M(this, O, it).call(this) : this.updateResult(), M(this, O, $t).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Zt(
      l(this, k),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Zt(
      l(this, k),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), M(this, O, Vt).call(this), M(this, O, Gt).call(this), l(this, k).removeObserver(this);
  }
  setOptions(e, s) {
    const n = this.options, o = l(this, k);
    if (this.options = l(this, J).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof oe(this.options.enabled, l(this, k)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    M(this, O, Yt).call(this), l(this, k).setOptions(this.options), n._defaulted && !Qt(this.options, n) && l(this, J).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: l(this, k),
      observer: this
    });
    const d = this.hasListeners();
    d && Ps(
      l(this, k),
      o,
      this.options,
      n
    ) && M(this, O, it).call(this), this.updateResult(s), d && (l(this, k) !== o || oe(this.options.enabled, l(this, k)) !== oe(n.enabled, l(this, k)) || qe(this.options.staleTime, l(this, k)) !== qe(n.staleTime, l(this, k))) && M(this, O, Wt).call(this);
    const h = M(this, O, qt).call(this);
    d && (l(this, k) !== o || oe(this.options.enabled, l(this, k)) !== oe(n.enabled, l(this, k)) || h !== l(this, Te)) && M(this, O, Kt).call(this, h);
  }
  getOptimisticResult(e) {
    const s = l(this, J).getQueryCache().build(l(this, J), e), n = this.createResult(s, e);
    return hr(this, n) && (w(this, Z, n), w(this, tt, this.options), w(this, Ue, l(this, k).state)), n;
  }
  getCurrentResult() {
    return l(this, Z);
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
    l(this, at).add(e);
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
    return M(this, O, it).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), l(this, Z)));
  }
  createResult(e, s) {
    var T;
    const n = l(this, k), o = this.options, d = l(this, Z), h = l(this, Ue), p = l(this, tt), i = e !== n ? e.state : l(this, dt), { state: r } = e;
    let c = { ...r }, f = !1, y;
    if (s._optimisticResults) {
      const P = this.hasListeners(), H = !P && Ns(e, s), D = P && Ps(e, n, s, o);
      (H || D) && (c = {
        ...c,
        ...kn(r.data, e.options)
      }), s._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
    }
    let { error: g, errorUpdatedAt: m, status: b } = c;
    if (s.select && c.data !== void 0)
      if (d && c.data === (h == null ? void 0 : h.data) && s.select === l(this, ht))
        y = l(this, st);
      else
        try {
          w(this, ht, s.select), y = s.select(c.data), y = _t(d == null ? void 0 : d.data, y, s), w(this, st, y), w(this, fe, null);
        } catch (P) {
          w(this, fe, P);
        }
    else
      y = c.data;
    if (s.placeholderData !== void 0 && y === void 0 && b === "pending") {
      let P;
      if (d != null && d.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData))
        P = d.data;
      else if (P = typeof s.placeholderData == "function" ? s.placeholderData(
        (T = l(this, nt)) == null ? void 0 : T.state.data,
        l(this, nt)
      ) : s.placeholderData, s.select && P !== void 0)
        try {
          P = s.select(P), w(this, fe, null);
        } catch (H) {
          w(this, fe, H);
        }
      P !== void 0 && (b = "success", y = _t(
        d == null ? void 0 : d.data,
        P,
        s
      ), f = !0);
    }
    l(this, fe) && (g = l(this, fe), y = l(this, st), m = Date.now(), b = "error");
    const A = c.fetchStatus === "fetching", S = b === "pending", x = b === "error", E = S && A, j = y !== void 0, B = {
      status: b,
      fetchStatus: c.fetchStatus,
      isPending: S,
      isSuccess: b === "success",
      isError: x,
      isInitialLoading: E,
      isLoading: E,
      data: y,
      dataUpdatedAt: c.dataUpdatedAt,
      error: g,
      errorUpdatedAt: m,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > i.dataUpdateCount || c.errorUpdateCount > i.errorUpdateCount,
      isFetching: A,
      isRefetching: A && !S,
      isLoadingError: x && !j,
      isPaused: c.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: x && j,
      isStale: ls(e, s),
      refetch: this.refetch,
      promise: l(this, Ae)
    };
    if (this.options.experimental_prefetchInRender) {
      const P = (X) => {
        B.status === "error" ? X.reject(B.error) : B.data !== void 0 && X.resolve(B.data);
      }, H = () => {
        const X = w(this, Ae, B.promise = Ht());
        P(X);
      }, D = l(this, Ae);
      switch (D.status) {
        case "pending":
          e.queryHash === n.queryHash && P(D);
          break;
        case "fulfilled":
          (B.status === "error" || B.data !== D.value) && H();
          break;
        case "rejected":
          (B.status !== "error" || B.error !== D.reason) && H();
          break;
      }
    }
    return B;
  }
  updateResult(e) {
    const s = l(this, Z), n = this.createResult(l(this, k), this.options);
    if (w(this, Ue, l(this, k).state), w(this, tt, this.options), l(this, Ue).data !== void 0 && w(this, nt, l(this, k)), Qt(n, s))
      return;
    w(this, Z, n);
    const o = {}, d = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: h } = this.options, p = typeof h == "function" ? h() : h;
      if (p === "all" || !p && !l(this, at).size)
        return !0;
      const a = new Set(
        p ?? l(this, at)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(l(this, Z)).some((i) => {
        const r = i;
        return l(this, Z)[r] !== s[r] && a.has(r);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && d() && (o.listeners = !0), M(this, O, jn).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && M(this, O, $t).call(this);
  }
}, J = new WeakMap(), k = new WeakMap(), dt = new WeakMap(), Z = new WeakMap(), Ue = new WeakMap(), tt = new WeakMap(), Ae = new WeakMap(), fe = new WeakMap(), ht = new WeakMap(), st = new WeakMap(), nt = new WeakMap(), Le = new WeakMap(), Qe = new WeakMap(), Te = new WeakMap(), at = new WeakMap(), O = new WeakSet(), it = function(e) {
  M(this, O, Yt).call(this);
  let s = l(this, k).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(re)), s;
}, Wt = function() {
  M(this, O, Vt).call(this);
  const e = qe(
    this.options.staleTime,
    l(this, k)
  );
  if (He || l(this, Z).isStale || !Ut(e))
    return;
  const n = An(l(this, Z).dataUpdatedAt, e) + 1;
  w(this, Le, setTimeout(() => {
    l(this, Z).isStale || this.updateResult();
  }, n));
}, qt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(l(this, k)) : this.options.refetchInterval) ?? !1;
}, Kt = function(e) {
  M(this, O, Gt).call(this), w(this, Te, e), !(He || oe(this.options.enabled, l(this, k)) === !1 || !Ut(l(this, Te)) || l(this, Te) === 0) && w(this, Qe, setInterval(() => {
    (this.options.refetchIntervalInBackground || os.isFocused()) && M(this, O, it).call(this);
  }, l(this, Te)));
}, $t = function() {
  M(this, O, Wt).call(this), M(this, O, Kt).call(this, M(this, O, qt).call(this));
}, Vt = function() {
  l(this, Le) && (clearTimeout(l(this, Le)), w(this, Le, void 0));
}, Gt = function() {
  l(this, Qe) && (clearInterval(l(this, Qe)), w(this, Qe, void 0));
}, Yt = function() {
  const e = l(this, J).getQueryCache().build(l(this, J), this.options);
  if (e === l(this, k))
    return;
  const s = l(this, k);
  w(this, k, e), w(this, dt, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, jn = function(e) {
  V.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(l(this, Z));
    }), l(this, J).getQueryCache().notify({
      query: l(this, k),
      type: "observerResultsUpdated"
    });
  });
}, zs);
function dr(t, e) {
  return oe(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Ns(t, e) {
  return dr(t, e) || t.state.data !== void 0 && Zt(t, e, e.refetchOnMount);
}
function Zt(t, e, s) {
  if (oe(e.enabled, t) !== !1) {
    const n = typeof s == "function" ? s(t) : s;
    return n === "always" || n !== !1 && ls(t, e);
  }
  return !1;
}
function Ps(t, e, s, n) {
  return (t !== e || oe(n.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && ls(t, s);
}
function ls(t, e) {
  return oe(e.enabled, t) !== !1 && t.isStaleByTime(qe(e.staleTime, t));
}
function hr(t, e) {
  return !Qt(t.getCurrentResult(), e);
}
var In = v.createContext(
  void 0
), fr = (t) => {
  const e = v.useContext(In);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, pr = ({
  client: t,
  children: e
}) => (v.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ u.jsx(In.Provider, { value: t, children: e })), On = v.createContext(!1), mr = () => v.useContext(On);
On.Provider;
function yr() {
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
var gr = v.createContext(yr()), br = () => v.useContext(gr);
function vr(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function xr() {
}
var wr = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, Cr = (t) => {
  v.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Er = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && vr(s, [t.error, n]), Sr = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Ar = (t, e) => t.isLoading && t.isFetching && !e, Tr = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Ms = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function Rr(t, e, s) {
  var r, c, f, y, g;
  if (ze.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = fr(), o = mr(), d = br(), h = n.defaultQueryOptions(t);
  (c = (r = n.getDefaultOptions().queries) == null ? void 0 : r._experimental_beforeQuery) == null || c.call(
    r,
    h
  ), h._optimisticResults = o ? "isRestoring" : "optimistic", Sr(h), wr(h, d), Cr(d);
  const p = !n.getQueryCache().get(h.queryHash), [a] = v.useState(
    () => new e(
      n,
      h
    )
  ), i = a.getOptimisticResult(h);
  if (v.useSyncExternalStore(
    v.useCallback(
      (m) => {
        const b = o ? () => {
        } : a.subscribe(V.batchCalls(m));
        return a.updateResult(), b;
      },
      [a, o]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), v.useEffect(() => {
    a.setOptions(h, { listeners: !1 });
  }, [h, a]), Tr(h, i))
    throw Ms(h, a, d);
  if (Er({
    result: i,
    errorResetBoundary: d,
    throwOnError: h.throwOnError,
    query: n.getQueryCache().get(h.queryHash)
  }))
    throw i.error;
  if ((y = (f = n.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || y.call(
    f,
    h,
    i
  ), h.experimental_prefetchInRender && !He && Ar(i, o)) {
    const m = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ms(h, a, d)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (g = n.getQueryCache().get(h.queryHash)) == null ? void 0 : g.promise
    );
    m == null || m.catch(xr).finally(() => {
      a.updateResult();
    });
  }
  return h.notifyOnChangeProps ? i : a.trackResult(i);
}
function Nr(t, e) {
  return Rr(t, ur);
}
const Pr = ["totalAsset"], Mr = async (t) => {
  try {
    const s = (await le.get("/user-assets/total-assets", {
      params: { address: t }
    })).data.totalAssets;
    return {
      raw: s,
      formatted: ma(s, 2),
      isZero: s === 0
    };
  } catch (e) {
    throw bt(e);
  }
};
function kr(t) {
  const { address: e } = q.all();
  return Nr({
    queryKey: [...Pr, e],
    queryFn: () => Mr(e),
    enabled: (t == null ? void 0 : t.enabled) && !!e,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30,
    // cache for 30 minutes
    retry: 1
    // retry 1 time
  });
}
const ks = [
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
function jr() {
  const t = q.getUserRandomAvatar(), { address: e } = q.all(), { data: s, refetch: n } = kr({
    enabled: !!e
  }), [o, d] = v.useState(!1), [h, p] = v.useState(!1), [a, i] = v.useState("ETH"), [r, c] = v.useState(!0);
  v.useEffect(() => {
    y(a);
  }, []);
  const f = () => {
    var m;
    return (m = ks.find((b) => b.name === a)) == null ? void 0 : m.icon;
  }, y = async (m) => {
    i(m);
  }, g = () => {
    c(!r);
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
                  /* @__PURE__ */ u.jsx("span", { className: "flex items-center", children: r ? "******" : `$${s == null ? void 0 : s.formatted} USD` }),
                  /* @__PURE__ */ u.jsx(
                    "img",
                    {
                      src: r ? "/imgs/icons/close_eye.svg" : "/imgs/icons/open_eye.svg",
                      alt: "",
                      className: N(
                        "w-[30px] h-[30px]",
                        "cursor-pointer"
                      ),
                      onClick: g
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
              /* @__PURE__ */ u.jsxs(dn, { children: [
                /* @__PURE__ */ u.jsxs(hn, { className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer", children: [
                  /* @__PURE__ */ u.jsx(
                    "img",
                    {
                      src: f(),
                      className: "w-[16px] h-[16px]",
                      alt: ""
                    }
                  ),
                  /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/arrow_down.svg", alt: "" })
                ] }),
                /* @__PURE__ */ u.jsx(as, { className: "bg-white", children: ks.map((m) => /* @__PURE__ */ u.jsx(
                  rs,
                  {
                    onClick: () => y(m.name),
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
                        a === m.name ? "text-brand-foreground" : "text-black"
                      ), children: m.name }),
                      a === m.name && /* @__PURE__ */ u.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
                    ] })
                  },
                  m.name
                )) })
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(
              kt,
              {
                address: e,
                className: "text-white text-xs",
                iconClassName: "text-white",
                iconSize: 14
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(
          Fa,
          {
            open: o,
            setOpen: d,
            address: e,
            tokenType: a,
            onClose: () => d(!1)
          }
        ),
        /* @__PURE__ */ u.jsx(
          $a,
          {
            address: e,
            open: h,
            setOpen: p,
            onClose: () => p(!1)
          }
        )
      ]
    }
  );
}
function Ir() {
  return /* @__PURE__ */ u.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ u.jsx(jr, {}),
    /* @__PURE__ */ u.jsx("div", { className: N(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ u.jsx(Kn, {}) })
  ] });
}
function Or() {
  const t = $n();
  return console.error(t), /* @__PURE__ */ u.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ u.jsx("p", { className: "text-lg text-gray-600 italic", children: t.statusText || t.message })
  ] }) });
}
function Ri({
  total: t = 0,
  pageSize: e = 30
} = {}) {
  const [s, n] = v.useState({
    current: 1,
    total: t,
    pageSize: e
  });
  return {
    pagination: s,
    handlePageChange: (p) => {
      ve("handlePageChange", p), n((a) => ({
        ...a,
        current: p
      }));
    },
    updateTotal: (p) => {
      n((a) => ({
        ...a,
        total: p
      }));
    },
    updatePageSize: (p) => {
      n((a) => ({
        ...a,
        pageSize: p,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const Dr = 30, Fr = async () => {
  try {
    const t = await le.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: Dr
    });
    return {
      products: t.data.products,
      total: t.data.total
    };
  } catch (t) {
    const e = bt(t);
    throw new Error(e.message);
  }
}, Br = Vn([
  {
    path: "/",
    async lazy() {
      const { RootLayout: t } = await import("./root-layout-GB7m11D7.js");
      return { Component: t };
    },
    errorElement: /* @__PURE__ */ u.jsx(Or, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: t } = await import("./main-layout-CI7Bma-t.js");
          return { Component: t };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: t } = await import("./page-5b0mROH4.js");
              return { Component: t };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: t } = await import("./page-C0himpM5.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: t } = await import("./page-DaTENtXx.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: t } = await import("./page-v-GJ-Sth.js");
              return { Component: t };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ u.jsx(Ir, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: t } = await import("./page-B4bgd1dx.js");
                  return { Component: t };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: t } = await import("./page-DmIJ8GPr.js");
                  return { Component: t };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: t } = await import("./page-BVq8880y.js");
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
                  const { default: t } = await import("./page-C2_4aMzJ.js");
                  return { Component: t };
                },
                loader: Fr
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: t } = await import("./page-BVI2D1gn.js");
                  return { Component: t };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: t } = await import("./page-CMTjMP3A.js");
                  return { Component: t };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: t } = await import("./page-JJYFrnCm.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: t } = await import("./page-Bx3wLrAE.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: t } = await import("./page-BUxktdhr.js");
                  return { Component: t };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: t } = await import("./page-S62KgZel.js");
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
                          const { default: t } = await import("./page-Cva9qbab.js");
                          return { Component: t };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: t } = await import("./page-zgTnZYXZ.js");
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
                  const { default: t } = await import("./page-nW13Y9lw.js");
                  return { Component: t };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: t } = await import("./page-g5qpCZd2.js");
                  return { Component: t };
                }
              }
            ]
          }
        ]
      }
    ]
  }
]), Dn = v.createContext(void 0), Ur = ({ children: t }) => {
  const [e, s] = v.useState(!1), [n, o] = v.useState(!1), [d, h] = v.useState({ name: "", url: "" }), [p, a] = v.useState(!1), [i, r] = v.useState(), c = v.useRef(), f = (y) => {
    r(y), c.current = y;
  };
  return /* @__PURE__ */ u.jsx(Dn.Provider, { value: {
    isModalOpen: e,
    setIsModalOpen: s,
    displayUriInput: n,
    setDisplayUriInput: o,
    dappInfo: d,
    setDappInfo: h,
    isConnected: p,
    setIsConnected: a,
    web3wallet: i,
    setWeb3Wallet: f,
    web3walletRef: c
  }, children: t });
}, Ni = () => v.useContext(Dn);
function Lr() {
  const [t, e] = v.useState(!1);
  return v.useEffect(() => {
    const s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    e(s);
  }, []), /* @__PURE__ */ u.jsx(
    oa,
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
      transition: la,
      toastClassName: N(
        "text-sm",
        "mobile:top-[82px]",
        "max-w-full mobile:max-w-[375px] tablet:max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var cs = "moonpay-react-sdk-embedded-frame", Qr = ({
  props: t,
  apiKey: e,
  debug: s,
  environment: n,
  signature: o
}) => {
  const {
    // params
    currencyCode: d,
    defaultCurrencyCode: h,
    walletAddress: p,
    walletAddressTag: a,
    walletAddresses: i,
    walletAddressTags: r,
    colorCode: c,
    theme: f,
    themeId: y,
    language: g,
    baseCurrencyCode: m,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: x,
    externalTransactionId: E,
    externalCustomerId: j,
    paymentMethod: F,
    redirectURL: B,
    showAllCurrencies: T,
    showOnlyCurrencies: P,
    showWalletAddressForm: H,
    unsupportedRegionRedirectUrl: D,
    skipUnsupportedRegionScreen: X,
    baseOrigin: ee,
    // handlers
    onAuthToken: U,
    onInitiateDeposit: W,
    onKmsWalletsCreated: L,
    onLogin: ne,
    onTransactionCompleted: pe,
    onUnsupportedRegion: ye,
    onSwapsCustomerSetupComplete: ge,
    onCloseOverlay: Re,
    onTransactionCreated: Ne,
    // auth
    auth: Pe,
    useWarnBeforeRefresh: Me,
    // other
    overlayNode: ke
  } = t, rt = {
    apiKey: e,
    signature: o,
    currencyCode: d,
    defaultCurrencyCode: h,
    walletAddress: p,
    walletAddressTag: a,
    walletAddresses: i,
    walletAddressTags: r,
    colorCode: c,
    theme: f,
    themeId: y,
    language: g,
    baseCurrencyCode: m,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: x,
    externalTransactionId: E,
    externalCustomerId: j,
    paymentMethod: F,
    redirectURL: B,
    showAllCurrencies: T,
    showOnlyCurrencies: P,
    showWalletAddressForm: H,
    unsupportedRegionRedirectUrl: D,
    skipUnsupportedRegionScreen: X,
    baseOrigin: ee
  }, I = {
    onAuthToken: U,
    onInitiateDeposit: W,
    onKmsWalletsCreated: L,
    onLogin: ne,
    onTransactionCompleted: pe,
    onUnsupportedRegion: ye,
    onSwapsCustomerSetupComplete: ge,
    onCloseOverlay: Re,
    onTransactionCreated: Ne
  };
  return {
    flow: "buy",
    variant: t.variant,
    environment: n,
    params: rt,
    debug: s,
    handlers: I,
    auth: Pe,
    useWarnBeforeRefresh: Me,
    containerNodeSelector: `#${cs}`,
    overlayNode: ke
  };
}, zr = ({
  props: t,
  apiKey: e,
  debug: s,
  environment: n,
  signature: o
}) => {
  const {
    // params
    quoteCurrencyCode: d,
    defaultCurrencyCode: h,
    defaultBaseCurrencyCode: p,
    walletAddress: a,
    walletAddressTag: i,
    walletAddresses: r,
    walletAddressTags: c,
    colorCode: f,
    theme: y,
    themeId: g,
    language: m,
    baseCurrencyCode: b,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: E,
    externalTransactionId: j,
    externalCustomerId: F,
    paymentMethod: B,
    redirectURL: T,
    showAllCurrencies: P,
    showOnlyCurrencies: H,
    showWalletAddressForm: D,
    unsupportedRegionRedirectUrl: X,
    skipUnsupportedRegionScreen: ee,
    mpWalletId: U,
    baseOrigin: W,
    // handlers
    onAuthToken: L,
    onInitiateDeposit: ne,
    onKmsWalletsCreated: pe,
    onLogin: ye,
    onTransactionCompleted: ge,
    onUnsupportedRegion: Re,
    onSwapsCustomerSetupComplete: Ne,
    onCloseOverlay: Pe,
    onTransactionCreated: Me,
    // auth
    auth: ke,
    useWarnBeforeRefresh: rt
  } = t, I = {
    apiKey: e,
    signature: o,
    quoteCurrencyCode: d,
    defaultCurrencyCode: h,
    defaultBaseCurrencyCode: p,
    walletAddress: a,
    walletAddressTag: i,
    walletAddresses: r,
    walletAddressTags: c,
    colorCode: f,
    theme: y,
    themeId: g,
    language: m,
    baseCurrencyCode: b,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: E,
    externalTransactionId: j,
    externalCustomerId: F,
    paymentMethod: B,
    redirectURL: T,
    showAllCurrencies: P,
    showOnlyCurrencies: H,
    showWalletAddressForm: D,
    unsupportedRegionRedirectUrl: X,
    skipUnsupportedRegionScreen: ee,
    mpWalletId: U,
    baseOrigin: W
  }, K = {
    onAuthToken: L,
    onInitiateDeposit: ne,
    onKmsWalletsCreated: pe,
    onLogin: ye,
    onTransactionCompleted: ge,
    onUnsupportedRegion: Re,
    onSwapsCustomerSetupComplete: Ne,
    onCloseOverlay: Pe,
    onTransactionCreated: Me
  };
  return {
    flow: "sell",
    variant: t.variant,
    environment: n,
    params: I,
    debug: s,
    handlers: K,
    auth: ke,
    useWarnBeforeRefresh: rt,
    containerNodeSelector: `#${cs}`
  };
};
async function _r(t = "v1") {
  return new Promise((e, s) => {
    const n = `https://static.moonpay.com/web-sdk/${t}/moonpay-web-sdk.min.js`, o = document.querySelector(`script[src="${n}"]`), d = (h = 0) => {
      if (window.MoonPayWebSdk) {
        e(window.MoonPayWebSdk.init);
        return;
      }
      if (h > 100) {
        s(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => d(h + 1), 100);
    };
    if (o)
      d();
    else {
      const h = document.createElement("script");
      h.async = !0, h.src = n, h.addEventListener("load", () => {
        var p;
        e((p = window.MoonPayWebSdk) == null ? void 0 : p.init);
      }), h.addEventListener("error", () => {
        s(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(h);
    }
  });
}
function Hr(t) {
  return t.startsWith("pk_live") || t.startsWith("sk_live") ? "production" : "sandbox";
}
var Pt = () => {
}, Wr = {
  info: Pt,
  warn: Pt,
  error: Pt
}, qr = class Fn {
  constructor({
    logger: e,
    prefix: s
  }) {
    _(this, "prefix");
    _(this, "logger");
    this.logger = e, this.prefix = s ?? ["Logger"];
  }
  if(e) {
    return e ? this : new Fn({ logger: Wr });
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
}, Tt = v.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), Kr = ({
  children: t,
  apiKey: e,
  debug: s = !1
}) => {
  const n = Hr(e), [o, d] = v.useState({
    apiKey: e,
    environment: n,
    debug: s
  }), h = v.useCallback(async () => {
    const p = await _r();
    d((a) => ({ ...a, init: p }));
  }, []);
  return v.useEffect(() => {
    o.init || h();
  }, [h, o.init]), /* @__PURE__ */ u.jsx(Tt.Provider, { value: o, children: t });
}, $r = class extends qr {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Vr = (t, e, s) => {
  const n = v.useRef(null), { init: o, debug: d } = v.useContext(Tt), h = v.useRef(new $r().if(d || !1)), p = v.useCallback(async () => {
    var a, i;
    if (n.current) {
      if (!s && ("walletAddress" in t || "walletAddresses" in t) && h.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), s) {
        const r = n.current.generateUrlForSigning();
        try {
          const c = await (s == null ? void 0 : s(r));
          if (!c)
            return;
          (a = n.current) == null || a.updateSignature(c);
        } catch (c) {
          h.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            c
          );
        }
      }
      e && ((i = n.current) == null || i.show());
    }
  }, [s, e, t]);
  v.useEffect(() => {
    n.current && n.current.close();
    const a = (o == null ? void 0 : o(t)) || null;
    n.current = a, p();
  }, [o, t, p]);
}, Gr = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Bn({
  config: t,
  onUrlSignatureRequested: e,
  visible: s = !0,
  className: n,
  style: o
}) {
  return Vr(t, s, e), s ? /* @__PURE__ */ u.jsx(
    "div",
    {
      id: cs,
      className: n,
      style: t.variant === "embedded" ? {
        ...Gr,
        ...o
      } : void 0
    }
  ) : null;
}
function Pi(t) {
  const { apiKey: e, environment: s } = v.useContext(Tt), n = v.useMemo(
    () => Qr({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    Bn,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
function Mi(t) {
  const { apiKey: e, environment: s } = v.useContext(Tt), n = v.useMemo(
    () => zr({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    Bn,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
const Yr = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function Zr({ children: t }) {
  return /* @__PURE__ */ u.jsx(
    Kr,
    {
      apiKey: Yr,
      debug: !0,
      children: t
    }
  );
}
const Xr = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, Jr = {
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
}, ei = {
  copySuccess: "Copy success!",
  connectSuccess: "Connected successfully!"
}, ti = {
  authenticationError: "Authentication Error. Please sign in again."
}, si = {
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
  header: Xr,
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
  vastWalletConnect: Jr,
  toastSuccess: ei,
  toastError: ti
}, ni = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, ai = {
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
}, ri = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, ii = {
  authenticationError: "认证错误，请重新登录。"
}, oi = {
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
  header: ni,
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
  vastWalletConnect: ai,
  toastSuccess: ri,
  toastError: ii
}, li = {
  en: {
    translation: si
  },
  zh: {
    translation: oi
  }
};
ve("savedLng", rn);
const ci = rn.getData();
nn.use(ca).init({
  resources: li,
  lng: ci || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
const ui = new cr({
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
function di() {
  return /* @__PURE__ */ u.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ u.jsx(v.Suspense, { children: /* @__PURE__ */ u.jsx(pr, { client: ui, children: /* @__PURE__ */ u.jsx(ua, { i18n: nn, children: /* @__PURE__ */ u.jsxs(Ur, { children: [
    /* @__PURE__ */ u.jsx(Zr, { children: /* @__PURE__ */ u.jsx(Gn, { router: Br }) }),
    /* @__PURE__ */ u.jsx(Lr, {})
  ] }) }) }) }) });
}
const hi = "theme_light", fi = "0.0.0", pi = "module", mi = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, yi = {
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
}, gi = {
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
}, bi = {
  name: hi,
  private: !0,
  version: fi,
  type: pi,
  scripts: mi,
  dependencies: yi,
  devDependencies: gi
};
ve("isDev", ln);
function js(t) {
  const e = Mt(document.getElementById(t));
  return e.render(
    /* @__PURE__ */ u.jsx(di, {})
    // <StrictMode>
    // </StrictMode>
  ), () => e.unmount();
}
ln ? js("root") : typeof window < "u" && (window[`mount_${bi.name}`] = js);
export {
  vt as B,
  kt as C,
  dn as D,
  jt as I,
  Sa as L,
  Pi as M,
  Fa as S,
  xt as T,
  q as a,
  hn as b,
  N as c,
  as as d,
  rs as e,
  ve as f,
  le as g,
  bs as h,
  xs as i,
  bt as j,
  Na as k,
  rn as l,
  ma as m,
  Ba as n,
  fn as o,
  It as p,
  kr as q,
  Ni as r,
  on as s,
  un as t,
  Nr as u,
  Ri as v,
  Dr as w,
  Mi as x,
  js as y
};
