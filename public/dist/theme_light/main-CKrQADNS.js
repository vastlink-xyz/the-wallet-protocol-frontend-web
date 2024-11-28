var Wn = Object.defineProperty;
var ms = (t) => {
  throw TypeError(t);
};
var Kn = (t, e, s) => e in t ? Wn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var z = (t, e, s) => Kn(t, typeof e != "symbol" ? e + "" : e, s), kt = (t, e, s) => e.has(t) || ms("Cannot " + s);
var l = (t, e, s) => (kt(t, e, "read from private field"), s ? s.call(t) : e.get(t)), A = (t, e, s) => e.has(t) ? ms("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s, n) => (kt(t, e, "write to private field"), n ? n.call(t, s) : e.set(t, s), s), k = (t, e, s) => (kt(t, e, "access private method"), s);
var gt = (t, e, s, n) => ({
  set _(o) {
    w(t, e, o, s);
  },
  get _() {
    return l(t, e, n);
  }
});
import { j as u, S as $n, d as qs, g as Hs, P as Vn, C as Ws, I as Ks, i as $s, k as Vs, l as Gs, L as Ys, m as Xs, n as Gn, T as Yn, o as Zs, p as Js, q as en, r as Xn } from "./vendor-radix-nT--cb5B.js";
import { p as Qe, a as tn, r as x, b as sn, R as H, O as Zn, u as Jn, e as ea, f as ta } from "./vendor-react-CwfAKKXk.js";
import { t as sa, c as na, C as aa, a as ra, b as ia, d as oa, e as la, X as nn, L as ca, f as Dt, g as an, h as ua, i as da, j as ha, I as fa } from "./vendor-ui-utils-Cm_-IfYd.js";
import { a as at, u as rs, C as pa, B as ye, Q as ma, X as ya, i as rn, b as ga, I as ba } from "./vendor-utils-BMKgA_3H.js";
import { d as on, C as ys, c as mt, h as Rt, e as va, f as is, E as xa, m as wa, a as Ca, b as gs, i as bs, p as jt } from "./vendor-web3-SIldcrZc.js";
import "./vendor-walletconnect-CwfKDfL-.js";
var Ft, bt = tn;
if (Qe.env.NODE_ENV === "production")
  Ft = bt.createRoot, bt.hydrateRoot;
else {
  var vs = bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ft = function(t, e) {
    vs.usingClientEntryPoint = !0;
    try {
      return bt.createRoot(t, e);
    } finally {
      vs.usingClientEntryPoint = !1;
    }
  };
}
const Ce = console.log.bind(console, "🚀");
function P(...t) {
  return sa(na(t));
}
class de {
  constructor(e) {
    z(this, "isClient");
    z(this, "key");
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
const ln = new de("language"), xs = new de("hideTotalAsset");
class Ea {
  constructor() {
    z(this, "storages");
    this.storages = {
      username: new de("username"),
      displayName: new de("displayName"),
      avatarIndex: new de("avatarIndex"),
      address: new de("address"),
      authenticatedHeader: new de("authenticatedHeader"),
      authenticated: new de("authenticated"),
      desUsername: new de("desUsername"),
      aeskey: new de("aeskey")
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
const V = new Ea(), cn = [
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
], os = /* @__PURE__ */ on({
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
}), un = /* @__PURE__ */ on({
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
}), Sa = cn, ws = (t, e = 6) => parseFloat(t).toFixed(e), Aa = (t, e = 2) => {
  const n = (typeof t == "string" ? parseFloat(t) : t).toFixed(e), [o, d] = n.split("."), f = o.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return d ? `${f}.${d}` : f;
}, Ra = (t) => {
  if (t === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: ys.EIP155,
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
      chainNamespace: ys.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function Bt(t) {
  if (t === "ETH")
    return un;
  if (t === "MATIC" || t === "TVWT")
    return os;
}
async function Ta(t, e, s) {
  try {
    const n = Bt(t);
    if (!n) return null;
    const o = mt({
      chain: n,
      transport: Rt()
    });
    let d;
    if (t === "TVWT" && (d = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", !d))
      throw new Error("Invalid token contract address");
    let f;
    if (t === "TVWT") {
      const p = va({
        abi: Sa,
        functionName: "transfer",
        args: [e.to, e.amount]
      });
      f = {
        to: d,
        data: p,
        value: BigInt(0)
      };
    } else
      f = {
        to: e.to,
        value: e.amount
      };
    try {
      const p = await o.estimateGas({
        ...f,
        account: s
      }), a = await o.getGasPrice(), r = (await o.getBlock()).baseFeePerGas || BigInt(0), c = a > r ? a - r : BigInt(1e9), h = r + c * BigInt(2), y = p * h, m = Number(y) / Math.pow(10, 18);
      return {
        estimatedGas: p,
        maxFeePerGas: h,
        maxPriorityFeePerGas: c,
        estimatedTotalFee: y,
        baseFee: r,
        gasPrice: a,
        feeInTokens: m
      };
    } catch (p) {
      throw console.error("Gas estimation error:", p), p;
    }
  } catch (n) {
    throw console.error("Transaction error:", n), n;
  }
}
const Cs = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, dn = Qe.env.NODE_ENV === "development";
function xt(t) {
  var e;
  if (at.isAxiosError(t)) {
    const s = t;
    return s.response ? { message: `${((e = s.response.data) == null ? void 0 : e.message) || s.message}` } : s.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${s.message}` };
  } else return t instanceof Error ? { message: t.message } : { message: "An unknown error occurred" };
}
function Ut({
  iconSize: t = 20,
  address: e,
  className: s = "",
  iconClassName: n = "",
  ...o
}) {
  const { t: d } = rs();
  return /* @__PURE__ */ u.jsx(pa, { text: e, onCopy: () => {
    ye.success(d("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ u.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ u.jsx("span", { ...o, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ u.jsx("span", { className: `text-primary ${s}`, children: e }) }),
    /* @__PURE__ */ u.jsx(
      aa,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${n}`,
        size: t
      }
    )
  ] }) });
}
const Na = ra(
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
    const f = n ? $n : "button";
    return /* @__PURE__ */ u.jsx(
      f,
      {
        className: P(Na({ variant: e, size: s, className: t })),
        ref: d,
        ...o
      }
    );
  }
);
wt.displayName = "Button";
const Lt = x.forwardRef(
  ({ className: t, type: e, ...s }, n) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: e,
      className: P(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        t
      ),
      ref: n,
      ...s
    }
  )
);
Lt.displayName = "Input";
class ls {
  constructor(e, s, n) {
    z(this, "name");
    z(this, "symbol");
    z(this, "decimals");
    this.name = e, this.symbol = s, this.decimals = n;
  }
}
class Pa extends ls {
  constructor() {
    super("Ethereum", "ETH", 18);
    z(this, "publicClient");
    z(this, "openUrl");
    this.publicClient = mt({
      chain: un,
      transport: Rt("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return is(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-sepolia.etherscan.io/api", d = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await at.get(n, {
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
class Ma extends ls {
  constructor() {
    super("Polygon", "MATIC", 18);
    z(this, "publicClient");
    z(this, "openUrl");
    this.publicClient = mt({
      chain: os,
      transport: Rt("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return is(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await at.get(n, {
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
class ka extends ls {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    z(this, "publicClient");
    z(this, "contractAddress");
    z(this, "contractAbi");
    z(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = cn, this.publicClient = mt({
      chain: os,
      transport: Rt("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [s]
    });
    return is(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await at.get(n, {
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
    z(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", Pa],
      ["MATIC", Ma],
      ["TVWT", ka]
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
z(je, "instance");
let Ct = je;
function ja() {
  const [t, e] = x.useState("/imgs/logos/logo.svg");
  return {
    logoPath: t
  };
}
function Ia({
  size: t = 32,
  className: e = ""
}) {
  const [s, n] = x.useState("");
  return x.useEffect(() => {
    const {
      username: o
    } = V.all();
    if (o) {
      const d = o.length > 0 ? o[0] : "";
      n(d);
    }
  }, []), /* @__PURE__ */ u.jsx(
    "div",
    {
      className: P(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${t}px] h-[${t}px]`,
        e
      ),
      children: /* @__PURE__ */ u.jsx("div", { className: P(
        // 'flex items-center justify-center',
      ), children: s })
    }
  );
}
function Oa({
  size: t = 32,
  className: e,
  type: s = "spin",
  fullscreen: n = !1
}) {
  ja();
  const [o, d] = x.useState(!1);
  x.useEffect(() => (d(!0), () => d(!1)), []);
  const a = s === "breathe" ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx(Ia, { className: P(
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
  ] }) : /* @__PURE__ */ u.jsx("div", { className: P(
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
  return n && o ? tn.createPortal(
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: a }),
    document.body
  ) : a;
}
const hn = x.forwardRef(
  ({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
    "textarea",
    {
      className: P(
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
class cs {
  constructor(e) {
    z(this, "config");
    if (this.constructor === cs)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = e;
  }
}
at.defaults.withCredentials = !0;
const ge = at.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
ge.interceptors.response.use(
  (t) => t,
  async (t) => {
    var e, s;
    if (((e = t.response) == null ? void 0 : e.status) === 401 || ((s = t.response) == null ? void 0 : s.status) === 403) {
      const n = t.response.data.message || "Authentication error";
      console.log(`${n}, redirecting to login...`), V.clearAllAuthData(), typeof window < "u" && (ye.error(n), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(t);
  }
);
class Da extends cs {
  constructor() {
    super({
      serviceType: Tt.WEB3AUTH_WITH_MPC
    });
    z(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: s
  }) {
    const { data: n } = await ge.post("/keymanagement/signup", {
      username: s
    }), { address: o, displayName: d, avatarIndex: f } = n;
    V.saveAuthDataByKey("address", o), V.saveAuthDataByKey("username", s), V.saveAuthDataByKey("avatarIndex", f), d ? V.saveAuthDataByKey("displayName", d) : V.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: s }) {
    const { data: n } = await ge.post("/keymanagement/signin", {
      username: s
    }), { address: o, displayName: d, avatarIndex: f } = n;
    V.saveAuthDataByKey("address", o), V.saveAuthDataByKey("username", s), V.saveAuthDataByKey("avatarIndex", f), d ? V.saveAuthDataByKey("displayName", d) : V.removeAuthDataByKey("displayName");
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
      needOtp: a,
      hash: i,
      message: r,
      transactionId: c,
      // not used
      transactionPayload: h,
      userEmail: y,
      toEmail: m
    } } = await ge.post("/transaction/sign", {
      from: V.all().address,
      to: s,
      amount: n,
      token: o,
      note: d,
      transactionType: f
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
      transactionPayload: f,
      userEmail: p,
      toEmail: a,
      note: i,
      transactionType: r
    } } = await ge.post("/transaction/verify-to-sign", {
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
    const n = this.coreKitInstance, o = Ra(s), d = new xa({ config: { chainConfig: o } });
    d.setupProvider(wa(n));
    const f = Ca({
      chain: Bt(s),
      transport: gs(d)
    }), p = mt({
      chain: Bt(s),
      transport: gs(d)
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
    await ge.post("/keymanagement/test-mpc");
  }
}
class Fa {
  static getService(e) {
    switch (e) {
      case Tt.WEB3AUTH_WITH_MPC:
        return new Da();
      default:
        throw new Error(`Unsupported service type: ${e}`);
    }
  }
}
const Ba = Tt.WEB3AUTH_WITH_MPC, Ua = Fa.getService(Ba), La = Gn, Qa = Yn, za = x.forwardRef(({ className: t, inset: e, children: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  qs,
  {
    ref: o,
    className: P(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      e && "pl-8",
      t
    ),
    ...n,
    children: [
      s,
      /* @__PURE__ */ u.jsx(ia, { className: "ml-auto h-4 w-4" })
    ]
  }
));
za.displayName = qs.displayName;
const _a = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Hs,
  {
    ref: s,
    className: P(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
_a.displayName = Hs.displayName;
const pn = x.forwardRef(({ className: t, sideOffset: e = 4, ...s }, n) => /* @__PURE__ */ u.jsx(Vn, { children: /* @__PURE__ */ u.jsx(
  Ws,
  {
    ref: n,
    sideOffset: e,
    className: P(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...s
  }
) }));
pn.displayName = Ws.displayName;
const mn = x.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Ks,
  {
    ref: n,
    className: P(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e && "pl-8",
      t
    ),
    ...s
  }
));
mn.displayName = Ks.displayName;
const qa = x.forwardRef(({ className: t, children: e, checked: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  $s,
  {
    ref: o,
    className: P(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: s,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Vs, { children: /* @__PURE__ */ u.jsx(oa, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
qa.displayName = $s.displayName;
const Ha = x.forwardRef(({ className: t, children: e, ...s }, n) => /* @__PURE__ */ u.jsxs(
  Gs,
  {
    ref: n,
    className: P(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Vs, { children: /* @__PURE__ */ u.jsx(la, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Ha.displayName = Gs.displayName;
const Wa = x.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Ys,
  {
    ref: n,
    className: P(
      "px-2 py-1.5 text-sm font-semibold",
      e && "pl-8",
      t
    ),
    ...s
  }
));
Wa.displayName = Ys.displayName;
const Ka = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Xs,
  {
    ref: s,
    className: P("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Ka.displayName = Xs.displayName;
const $a = Ct.getInstance().getAllTokenTypes();
function Va({
  open: t,
  setOpen: e,
  balance: s,
  address: n,
  tokenType: o,
  defaultTo: d,
  defaultAmount: f,
  defaultNote: p,
  onClose: a
}) {
  const [i, r] = x.useState(""), [c, h] = x.useState(""), [y, m] = x.useState(""), [g, b] = x.useState(!1), [S, E] = x.useState(""), v = x.useRef(), [C, R] = x.useState(o), [O, B] = x.useState("0"), [M, T] = x.useState(""), [W, F] = x.useState(!1), [Y, ce] = x.useState(!1), [K, _] = x.useState(!1), [ue, X] = x.useState(""), [q, se] = x.useState(""), [be, ve] = x.useState(""), { t: Q } = rs();
  x.useEffect(() => {
    t ? Ee(o) : Mt();
  }, [t]), x.useEffect(() => {
    t && (d && r(d), f && h(f), p && m(p));
  }, [d, f, p, t]), x.useEffect(() => {
    !t && a && a();
  }, [t]);
  const xe = x.useMemo(() => !i || !c || g || !K || Y || !!q && q !== Q("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(c) > parseFloat(O) || W, [i, c, g, K, Y, q, O, W]), Ee = async (I) => {
    h(""), F(!1), T(""), ve(""), R(I);
    const $ = Ct.getInstance().createToken(I);
    v.current = $, E(v.current.symbol);
    let ne = await v.current.getBalance(n);
    ne = ws(ne), B(ne);
  }, rt = async (I) => {
    if (bs(i))
      _(!0), X(""), se("");
    else {
      ce(!0), se("");
      try {
        const $ = await ge.get("/address/", {
          params: { email: I }
        });
        $.data.success ? (_(!0), X($.data.address)) : Cs.test(I) ? (_(!0), X(""), se(Q("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (_(!1), X(""), se(Q("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        ce(!1);
      }
    }
  }, it = () => {
    Ce("to", i), i ? rt(i) : (_(!1), X(""), se(""));
  };
  async function ot(I) {
    try {
      const $ = jt(c).toString();
      Ce("amt", $), b(!0);
      const {
        needOtp: ne,
        hash: ps,
        message: Hn
      } = await Ua.signTransaction({
        toAddress: I,
        amount: $,
        token: C,
        note: y,
        transactionType: fn.TRANSFER
      });
      ps ? (e(!1), Qn(ps)) : ne && (ye.error(Hn), e(!1));
    } catch ($) {
      const ne = xt($);
      Ce("errorInfo", ne), ye.error(ne.message);
    } finally {
      b(!1);
    }
  }
  const Pt = (I) => {
    var ne;
    const $ = `${(ne = v.current) == null ? void 0 : ne.openUrl}/${I}`;
    window.open($, "_blank");
  }, Qn = (I) => {
    ye(
      /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ u.jsx(Dt, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ u.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ u.jsx(
            wt,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Pt(I);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, zn = async () => {
    if (!xe)
      try {
        b(!0);
        let I, $;
        if (bs(i))
          I = i;
        else if (Cs.test(i) && q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          $ = i;
          const ne = await ge.post("/invite/invite-register", {
            toEmail: $,
            from: n,
            amount: jt(c).toString(),
            token: C,
            note: y
          });
          Ce("res", ne), ye.success(Q("/dashboard.[token].sendModal.emailSentToUnregistered")), Mt(), e(!1);
          return;
        } else
          I = ue;
        await ot(I), Mt(), e(!1);
      } catch (I) {
        const $ = xt(I);
        Ce("errorInfo", $), ye.error(Q("/dashboard.[token].sendModal.sendError"));
      } finally {
        b(!1);
      }
  }, _n = async () => {
    if (parseFloat(c) > parseFloat(O) ? ve("Amount exceeded") : ve(""), c && !xe) {
      F(!0);
      try {
        const I = await Ta(C, {
          to: n,
          amount: jt(c)
        }, n);
        T(I ? I.feeInTokens.toString() : "");
      } catch (I) {
        Ce("Failed to get estimated fee:", I), T("");
      } finally {
        F(!1);
      }
    }
  }, Mt = () => {
    h(""), r(""), m(""), X(""), se(""), _(!1), ce(!1), T("");
  }, qn = t ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ u.jsx("div", { className: P(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ u.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: Q("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => e(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ u.jsx(nn, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs("form", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Lt,
              {
                value: i,
                onChange: (I) => r(I.target.value.trim()),
                onBlur: it,
                id: "to",
                required: !0,
                placeholder: Q("/dashboard.[token].sendModal.toPlaceholder"),
                className: P(
                  K && "border-green-500",
                  q && "border-destructive",
                  q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            Y && /* @__PURE__ */ u.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsx(ca, { className: "animate-spin", size: 16 }) }),
            K && !Y && !q && /* @__PURE__ */ u.jsx(Dt, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            q && !Y && /* @__PURE__ */ u.jsx(an, { className: P(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          K && ue && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-primary/60", children: ue }),
          q && /* @__PURE__ */ u.jsx("p", { className: P(
            "mt-1 text-xs text-destructive",
            q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: q })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Lt,
              {
                value: c,
                onChange: (I) => h(I.target.value.trim()),
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0,
                onBlur: _n
              }
            ),
            /* @__PURE__ */ u.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsxs(La, { children: [
              /* @__PURE__ */ u.jsxs(Qa, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ u.jsx("span", { className: "font-medium text-sm", children: C }),
                /* @__PURE__ */ u.jsx(ua, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ u.jsx(pn, { align: "start", className: "bg-white", children: $a.map((I) => /* @__PURE__ */ u.jsx(mn, { onClick: () => Ee(I), children: I }, I)) })
            ] }) })
          ] }),
          be && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-destructive", children: be })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ u.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          W ? /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(da, { className: "animate-spin", size: 14 }) }) : M ? /* @__PURE__ */ u.jsxs("span", { className: "text-black", children: [
            "~ ",
            M,
            " ",
            S
          ] }) : /* @__PURE__ */ u.jsx("span", { className: "text-black", children: "-" })
        ] }),
        M && /* @__PURE__ */ u.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ u.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ u.jsxs("span", { className: "text-black", children: [
            ws(O),
            " ",
            S
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
            hn,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: y,
              onChange: (I) => m(I.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ u.jsx(
        wt,
        {
          onClick: zn,
          className: P("py-12px"),
          disabled: xe,
          children: g ? /* @__PURE__ */ u.jsx("div", { className: "", children: /* @__PURE__ */ u.jsx(Oa, {}) }) : /* @__PURE__ */ u.jsx("span", { children: Q("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return sn.createPortal(
      qn,
      document.body
    );
}
const Ga = Xn, yn = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Zs,
  {
    ref: s,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
yn.displayName = Zs.displayName;
const Qt = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  Js,
  {
    ref: s,
    className: P(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
Qt.displayName = Js.displayName;
const zt = x.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  en,
  {
    ref: s,
    className: P(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
zt.displayName = en.displayName;
var Ya = Object.defineProperty, Et = Object.getOwnPropertySymbols, gn = Object.prototype.hasOwnProperty, bn = Object.prototype.propertyIsEnumerable, Es = (t, e, s) => e in t ? Ya(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, _t = (t, e) => {
  for (var s in e || (e = {}))
    gn.call(e, s) && Es(t, s, e[s]);
  if (Et)
    for (var s of Et(e))
      bn.call(e, s) && Es(t, s, e[s]);
  return t;
}, qt = (t, e) => {
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
  const e = class N {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(a, i, r, c) {
      if (this.version = a, this.errorCorrectionLevel = i, this.modules = [], this.isFunction = [], a < N.MIN_VERSION || a > N.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (c < -1 || c > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let h = [];
      for (let m = 0; m < this.size; m++)
        h.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(h.slice()), this.isFunction.push(h.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(r);
      if (this.drawCodewords(y), c == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const b = this.getPenaltyScore();
          b < m && (c = g, m = b), this.applyMask(g);
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
      return N.encodeSegments(r, i);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(a, i) {
      const r = t.QrSegment.makeBytes(a);
      return N.encodeSegments([r], i);
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
    static encodeSegments(a, i, r = 1, c = 40, h = -1, y = !0) {
      if (!(N.MIN_VERSION <= r && r <= c && c <= N.MAX_VERSION) || h < -1 || h > 7)
        throw new RangeError("Invalid value");
      let m, g;
      for (m = r; ; m++) {
        const v = N.getNumDataCodewords(m, i) * 8, C = f.getTotalBits(a, m);
        if (C <= v) {
          g = C;
          break;
        }
        if (m >= c)
          throw new RangeError("Data too long");
      }
      for (const v of [N.Ecc.MEDIUM, N.Ecc.QUARTILE, N.Ecc.HIGH])
        y && g <= N.getNumDataCodewords(m, v) * 8 && (i = v);
      let b = [];
      for (const v of a) {
        s(v.mode.modeBits, 4, b), s(v.numChars, v.mode.numCharCountBits(m), b);
        for (const C of v.getData())
          b.push(C);
      }
      o(b.length == g);
      const S = N.getNumDataCodewords(m, i) * 8;
      o(b.length <= S), s(0, Math.min(4, S - b.length), b), s(0, (8 - b.length % 8) % 8, b), o(b.length % 8 == 0);
      for (let v = 236; b.length < S; v ^= 253)
        s(v, 8, b);
      let E = [];
      for (; E.length * 8 < b.length; )
        E.push(0);
      return b.forEach((v, C) => E[C >>> 3] |= v << 7 - (C & 7)), new N(m, i, E, h);
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
      for (let h = 0; h < 10; h++)
        r = r << 1 ^ (r >>> 9) * 1335;
      const c = (i << 10 | r) ^ 21522;
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
      let a = this.version;
      for (let r = 0; r < 12; r++)
        a = a << 1 ^ (a >>> 11) * 7973;
      const i = this.version << 12 | a;
      o(i >>> 18 == 0);
      for (let r = 0; r < 18; r++) {
        const c = n(i, r), h = this.size - 11 + r % 3, y = Math.floor(r / 3);
        this.setFunctionModule(h, y, c), this.setFunctionModule(y, h, c);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(a, i) {
      for (let r = -4; r <= 4; r++)
        for (let c = -4; c <= 4; c++) {
          const h = Math.max(Math.abs(c), Math.abs(r)), y = a + c, m = i + r;
          0 <= y && y < this.size && 0 <= m && m < this.size && this.setFunctionModule(y, m, h != 2 && h != 4);
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
      if (a.length != N.getNumDataCodewords(i, r))
        throw new RangeError("Invalid argument");
      const c = N.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][i], h = N.ECC_CODEWORDS_PER_BLOCK[r.ordinal][i], y = Math.floor(N.getNumRawDataModules(i) / 8), m = c - y % c, g = Math.floor(y / c);
      let b = [];
      const S = N.reedSolomonComputeDivisor(h);
      for (let v = 0, C = 0; v < c; v++) {
        let R = a.slice(C, C + g - h + (v < m ? 0 : 1));
        C += R.length;
        const O = N.reedSolomonComputeRemainder(R, S);
        v < m && R.push(0), b.push(R.concat(O));
      }
      let E = [];
      for (let v = 0; v < b[0].length; v++)
        b.forEach((C, R) => {
          (v != g - h || R >= m) && E.push(C[v]);
        });
      return o(E.length == y), E;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(a) {
      if (a.length != Math.floor(N.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let r = this.size - 1; r >= 1; r -= 2) {
        r == 6 && (r = 5);
        for (let c = 0; c < this.size; c++)
          for (let h = 0; h < 2; h++) {
            const y = r - h, g = (r + 1 & 2) == 0 ? this.size - 1 - c : c;
            !this.isFunction[g][y] && i < a.length * 8 && (this.modules[g][y] = n(a[i >>> 3], 7 - (i & 7)), i++);
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
      for (let h = 0; h < this.size; h++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[h][b] == y ? (m++, m == 5 ? a += N.PENALTY_N1 : m > 5 && a++) : (this.finderPenaltyAddHistory(m, g), y || (a += this.finderPenaltyCountPatterns(g) * N.PENALTY_N3), y = this.modules[h][b], m = 1);
        a += this.finderPenaltyTerminateAndCount(y, m, g) * N.PENALTY_N3;
      }
      for (let h = 0; h < this.size; h++) {
        let y = !1, m = 0, g = [0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < this.size; b++)
          this.modules[b][h] == y ? (m++, m == 5 ? a += N.PENALTY_N1 : m > 5 && a++) : (this.finderPenaltyAddHistory(m, g), y || (a += this.finderPenaltyCountPatterns(g) * N.PENALTY_N3), y = this.modules[b][h], m = 1);
        a += this.finderPenaltyTerminateAndCount(y, m, g) * N.PENALTY_N3;
      }
      for (let h = 0; h < this.size - 1; h++)
        for (let y = 0; y < this.size - 1; y++) {
          const m = this.modules[h][y];
          m == this.modules[h][y + 1] && m == this.modules[h + 1][y] && m == this.modules[h + 1][y + 1] && (a += N.PENALTY_N2);
        }
      let i = 0;
      for (const h of this.modules)
        i = h.reduce((y, m) => y + (m ? 1 : 0), i);
      const r = this.size * this.size, c = Math.ceil(Math.abs(i * 20 - r * 10) / r) - 1;
      return o(0 <= c && c <= 9), a += c * N.PENALTY_N4, o(0 <= a && a <= 2568888), a;
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
      if (a < N.MIN_VERSION || a > N.MAX_VERSION)
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
      return Math.floor(N.getNumRawDataModules(a) / 8) - N.ECC_CODEWORDS_PER_BLOCK[i.ordinal][a] * N.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][a];
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
        for (let h = 0; h < i.length; h++)
          i[h] = N.reedSolomonMultiply(i[h], r), h + 1 < i.length && (i[h] ^= i[h + 1]);
        r = N.reedSolomonMultiply(r, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(a, i) {
      let r = i.map((c) => 0);
      for (const c of a) {
        const h = c ^ r.shift();
        r.push(0), i.forEach((y, m) => r[m] ^= N.reedSolomonMultiply(y, h));
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
  const d = class U {
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
      return new U(U.Mode.BYTE, a.length, i);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(a) {
      if (!U.isNumeric(a))
        throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let r = 0; r < a.length; ) {
        const c = Math.min(a.length - r, 3);
        s(parseInt(a.substring(r, r + c), 10), c * 3 + 1, i), r += c;
      }
      return new U(U.Mode.NUMERIC, a.length, i);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(a) {
      if (!U.isAlphanumeric(a))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let i = [], r;
      for (r = 0; r + 2 <= a.length; r += 2) {
        let c = U.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)) * 45;
        c += U.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r + 1)), s(c, 11, i);
      }
      return r < a.length && s(U.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)), 6, i), new U(U.Mode.ALPHANUMERIC, a.length, i);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(a) {
      return a == "" ? [] : U.isNumeric(a) ? [U.makeNumeric(a)] : U.isAlphanumeric(a) ? [U.makeAlphanumeric(a)] : [U.makeBytes(U.toUtf8ByteArray(a))];
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
      return new U(U.Mode.ECI, 0, i);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(a) {
      return U.NUMERIC_REGEX.test(a);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(a) {
      return U.ALPHANUMERIC_REGEX.test(a);
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
        const h = c.mode.numCharCountBits(i);
        if (c.numChars >= 1 << h)
          return 1 / 0;
        r += 4 + h + c.bitData.length;
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
var Xa = {
  L: qe.QrCode.Ecc.LOW,
  M: qe.QrCode.Ecc.MEDIUM,
  Q: qe.QrCode.Ecc.QUARTILE,
  H: qe.QrCode.Ecc.HIGH
}, vn = 128, xn = "L", wn = "#FFFFFF", Cn = "#000000", En = !1, Sn = 1, Za = 4, Ja = 0, er = 0.1;
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
function tr(t, e, s, n) {
  if (n == null)
    return null;
  const o = t.length + s * 2, d = Math.floor(e * er), f = o / e, p = (n.width || d) * f, a = (n.height || d) * f, i = n.x == null ? t.length / 2 - p / 2 : n.x * f, r = n.y == null ? t.length / 2 - a / 2 : n.y * f, c = n.opacity == null ? 1 : n.opacity;
  let h = null;
  if (n.excavate) {
    let m = Math.floor(i), g = Math.floor(r), b = Math.ceil(p + i - m), S = Math.ceil(a + r - g);
    h = { x: m, y: g, w: b, h: S };
  }
  const y = n.crossOrigin;
  return { x: i, y: r, h: a, w: p, excavation: h, opacity: c, crossOrigin: y };
}
function sr(t, e) {
  return e != null ? Math.max(Math.floor(e), 0) : t ? Za : Ja;
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
  let a = H.useMemo(() => {
    const m = (Array.isArray(t) ? t : [t]).reduce((g, b) => (g.push(...qe.QrSegment.makeSegments(b)), g), []);
    return qe.QrCode.encodeSegments(
      m,
      Xa[e],
      s,
      void 0,
      void 0,
      p
    );
  }, [t, e, s, p]);
  const { cells: i, margin: r, numCells: c, calculatedImageSettings: h } = H.useMemo(() => {
    let y = a.getModules();
    const m = sr(n, o), g = y.length + m * 2, b = tr(
      y,
      f,
      m,
      d
    );
    return {
      cells: y,
      margin: m,
      numCells: g,
      calculatedImageSettings: b
    };
  }, [a, f, d, n, o]);
  return {
    qrcode: a,
    margin: r,
    cells: i,
    numCells: c,
    calculatedImageSettings: h
  };
}
var nr = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), ar = H.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = vn,
      level: f = xn,
      bgColor: p = wn,
      fgColor: a = Cn,
      includeMargin: i = En,
      minVersion: r = Sn,
      boostLevel: c,
      marginSize: h,
      imageSettings: y
    } = n, g = qt(n, [
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
    ]), { style: b } = g, S = qt(g, ["style"]), E = y == null ? void 0 : y.src, v = H.useRef(null), C = H.useRef(null), R = H.useCallback(
      (K) => {
        v.current = K, typeof s == "function" ? s(K) : s && (s.current = K);
      },
      [s]
    ), [O, B] = H.useState(!1), { margin: M, cells: T, numCells: W, calculatedImageSettings: F } = Tn({
      value: o,
      level: f,
      minVersion: r,
      boostLevel: c,
      includeMargin: i,
      marginSize: h,
      imageSettings: y,
      size: d
    });
    H.useEffect(() => {
      if (v.current != null) {
        const K = v.current, _ = K.getContext("2d");
        if (!_)
          return;
        let ue = T;
        const X = C.current, q = F != null && X !== null && X.complete && X.naturalHeight !== 0 && X.naturalWidth !== 0;
        q && F.excavation != null && (ue = Rn(
          T,
          F.excavation
        ));
        const se = window.devicePixelRatio || 1;
        K.height = K.width = d * se;
        const be = d / W * se;
        _.scale(be, be), _.fillStyle = p, _.fillRect(0, 0, W, W), _.fillStyle = a, nr ? _.fill(new Path2D(An(ue, M))) : T.forEach(function(ve, Q) {
          ve.forEach(function(xe, Ee) {
            xe && _.fillRect(Ee + M, Q + M, 1, 1);
          });
        }), F && (_.globalAlpha = F.opacity), q && _.drawImage(
          X,
          F.x + M,
          F.y + M,
          F.w,
          F.h
        );
      }
    }), H.useEffect(() => {
      B(!1);
    }, [E]);
    const Y = _t({ height: d, width: d }, b);
    let ce = null;
    return E != null && (ce = /* @__PURE__ */ H.createElement(
      "img",
      {
        src: E,
        key: E,
        style: { display: "none" },
        onLoad: () => {
          B(!0);
        },
        ref: C,
        crossOrigin: F == null ? void 0 : F.crossOrigin
      }
    )), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
      "canvas",
      _t({
        style: Y,
        height: d,
        width: d,
        ref: R,
        role: "img"
      }, S)
    ), ce);
  }
);
ar.displayName = "QRCodeCanvas";
var Ht = H.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = vn,
      level: f = xn,
      bgColor: p = wn,
      fgColor: a = Cn,
      includeMargin: i = En,
      minVersion: r = Sn,
      boostLevel: c,
      title: h,
      marginSize: y,
      imageSettings: m
    } = n, g = qt(n, [
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
    ]), { margin: b, cells: S, numCells: E, calculatedImageSettings: v } = Tn({
      value: o,
      level: f,
      minVersion: r,
      boostLevel: c,
      includeMargin: i,
      marginSize: y,
      imageSettings: m,
      size: d
    });
    let C = S, R = null;
    m != null && v != null && (v.excavation != null && (C = Rn(
      S,
      v.excavation
    )), R = /* @__PURE__ */ H.createElement(
      "image",
      {
        href: m.src,
        height: v.h,
        width: v.w,
        x: v.x + b,
        y: v.y + b,
        preserveAspectRatio: "none",
        opacity: v.opacity,
        crossOrigin: v.crossOrigin
      }
    ));
    const O = An(C, b);
    return /* @__PURE__ */ H.createElement(
      "svg",
      _t({
        height: d,
        width: d,
        viewBox: `0 0 ${E} ${E}`,
        ref: s,
        role: "img"
      }, g),
      !!h && /* @__PURE__ */ H.createElement("title", null, h),
      /* @__PURE__ */ H.createElement(
        "path",
        {
          fill: p,
          d: `M0,0 h${E}v${E}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ H.createElement("path", { fill: a, d: O, shapeRendering: "crispEdges" }),
      R
    );
  }
);
Ht.displayName = "QRCodeSVG";
function rr({
  address: t,
  open: e,
  setOpen: s,
  onClose: n
}) {
  const { t: o } = rs(), [d, f] = x.useState("");
  x.useEffect(() => {
    const { username: i } = V.all();
    f(i);
  }, []);
  const p = async () => {
    try {
      const i = document.querySelector("#qr-code-svg");
      if (!i) return;
      const r = i.querySelector("image");
      if (r) {
        const g = r.getAttribute("href") || "", S = await (await fetch(g)).blob(), E = await new Promise((v) => {
          const C = new FileReader();
          C.onloadend = () => v(C.result), C.readAsDataURL(S);
        });
        r.setAttribute("href", E);
      }
      const c = new XMLSerializer().serializeToString(i), h = new Blob([c], { type: "image/svg+xml;charset=utf-8" }), y = URL.createObjectURL(h), m = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((g, b) => {
        const S = new Image();
        S.onload = () => {
          const E = document.createElement("canvas"), v = E.getContext("2d");
          E.width = S.width, E.height = S.height, v == null || v.drawImage(S, 0, 0), m ? E.toBlob(async (C) => {
            if (C)
              try {
                if (navigator.share) {
                  const R = new File([C], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [R],
                    title: "QR Code"
                  });
                } else {
                  const R = URL.createObjectURL(C), O = document.createElement("a");
                  O.href = R, O.download = "qrcode.png", document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(R);
                }
                ye.success(o("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), g(null);
              } catch (R) {
                b(R);
              }
          }, "image/png") : E.toBlob(async (C) => {
            if (C)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": C })
                ]), ye.success(o("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), g(null);
              } catch (R) {
                b(R);
              }
          }, "image/png");
        }, S.onerror = b, S.src = y;
      });
    } catch (i) {
      ye.error(i.message);
    }
  }, a = e ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ u.jsx("div", { className: P(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ u.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ u.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ u.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            onClick: () => n(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ u.jsx(nn, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs(Ga, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ u.jsxs(yn, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ u.jsx(
            Qt,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ u.jsx(
            Qt,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs(zt, { value: "crypto", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(Ut, { address: t, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Ht,
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
        /* @__PURE__ */ u.jsxs(zt, { value: "email", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(Ut, { address: d, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Ht,
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
    return sn.createPortal(
      a,
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
function ie() {
}
function ir(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Wt(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function Nn(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function He(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function le(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ss(t, e) {
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
      if (e.queryHash !== us(f, e.options))
        return !1;
    } else if (!ut(e.queryKey, f))
      return !1;
  }
  if (s !== "all") {
    const a = e.isActive();
    if (s === "active" && !a || s === "inactive" && a)
      return !1;
  }
  return !(typeof p == "boolean" && e.isStale() !== p || o && o !== e.state.fetchStatus || d && !d(e));
}
function As(t, e) {
  const { exact: s, status: n, predicate: o, mutationKey: d } = t;
  if (d) {
    if (!e.options.mutationKey)
      return !1;
    if (s) {
      if (ct(e.options.mutationKey) !== ct(d))
        return !1;
    } else if (!ut(e.options.mutationKey, d))
      return !1;
  }
  return !(n && e.state.status !== n || o && !o(e));
}
function us(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ct)(t);
}
function ct(t) {
  return JSON.stringify(
    t,
    (e, s) => Vt(s) ? Object.keys(s).sort().reduce((n, o) => (n[o] = s[o], n), {}) : s
  );
}
function ut(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((s) => !ut(t[s], e[s])) : !1;
}
function Kt(t, e) {
  if (t === e)
    return t;
  const s = Rs(t) && Rs(e);
  if (s || Vt(t) && Vt(e)) {
    const n = s ? t : Object.keys(t), o = n.length, d = s ? e : Object.keys(e), f = d.length, p = s ? [] : {};
    let a = 0;
    for (let i = 0; i < f; i++) {
      const r = s ? i : d[i];
      (!s && n.includes(r) || s) && t[r] === void 0 && e[r] === void 0 ? (p[r] = void 0, a++) : (p[r] = Kt(t[r], e[r]), p[r] === t[r] && t[r] !== void 0 && a++);
    }
    return o === f && a === o ? t : p;
  }
  return e;
}
function $t(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const s in t)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
function Rs(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Vt(t) {
  if (!Ts(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const s = e.prototype;
  return !(!Ts(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Ts(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function or(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Gt(t, e, s) {
  if (typeof s.structuralSharing == "function")
    return s.structuralSharing(t, e);
  if (s.structuralSharing !== !1) {
    if (Qe.env.NODE_ENV !== "production")
      try {
        return Kt(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${s.queryHash}]: ${n}`
        );
      }
    return Kt(t, e);
  }
  return e;
}
function lr(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function cr(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var St = Symbol();
function Pn(t, e) {
  return Qe.env.NODE_ENV !== "production" && t.queryFn === St && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === St ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Ie, Ae, We, Os, ur = (Os = class extends yt {
  constructor() {
    super();
    A(this, Ie);
    A(this, Ae);
    A(this, We);
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
    l(this, Ae) || this.setEventListener(l(this, We));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, Ae)) == null || e.call(this), w(this, Ae, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, We, e), (s = l(this, Ae)) == null || s.call(this), w(this, Ae, e((n) => {
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
}, Ie = new WeakMap(), Ae = new WeakMap(), We = new WeakMap(), Os), ds = new ur(), Ke, Re, $e, Ds, dr = (Ds = class extends yt {
  constructor() {
    super();
    A(this, Ke, !0);
    A(this, Re);
    A(this, $e);
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
    l(this, Re) || this.setEventListener(l(this, $e));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = l(this, Re)) == null || e.call(this), w(this, Re, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, $e, e), (s = l(this, Re)) == null || s.call(this), w(this, Re, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    l(this, Ke) !== e && (w(this, Ke, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return l(this, Ke);
  }
}, Ke = new WeakMap(), Re = new WeakMap(), $e = new WeakMap(), Ds), At = new dr();
function Yt() {
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
function hr(t) {
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
function It(t) {
  return t instanceof kn;
}
function jn(t) {
  let e = !1, s = 0, n = !1, o;
  const d = Yt(), f = (g) => {
    var b;
    n || (h(new kn(g)), (b = t.abort) == null || b.call(t));
  }, p = () => {
    e = !0;
  }, a = () => {
    e = !1;
  }, i = () => ds.isFocused() && (t.networkMode === "always" || At.isOnline()) && t.canRun(), r = () => Mn(t.networkMode) && t.canRun(), c = (g) => {
    var b;
    n || (n = !0, (b = t.onSuccess) == null || b.call(t, g), o == null || o(), d.resolve(g));
  }, h = (g) => {
    var b;
    n || (n = !0, (b = t.onError) == null || b.call(t, g), o == null || o(), d.reject(g));
  }, y = () => new Promise((g) => {
    var b;
    o = (S) => {
      (n || i()) && g(S);
    }, (b = t.onPause) == null || b.call(t);
  }).then(() => {
    var g;
    o = void 0, n || (g = t.onContinue) == null || g.call(t);
  }), m = () => {
    if (n)
      return;
    let g;
    const b = s === 0 ? t.initialPromise : void 0;
    try {
      g = b ?? t.fn();
    } catch (S) {
      g = Promise.reject(S);
    }
    Promise.resolve(g).then(c).catch((S) => {
      var O;
      if (n)
        return;
      const E = t.retry ?? (_e ? 0 : 3), v = t.retryDelay ?? hr, C = typeof v == "function" ? v(s, S) : v, R = E === !0 || typeof E == "number" && s < E || typeof E == "function" && E(s, S);
      if (e || !R) {
        h(S);
        return;
      }
      s++, (O = t.onFail) == null || O.call(t, s, S), or(C).then(() => i() ? void 0 : y()).then(() => {
        e ? h(S) : m();
      });
    });
  };
  return {
    promise: d,
    cancel: f,
    continue: () => (o == null || o(), d),
    cancelRetry: p,
    continueRetry: a,
    canStart: r,
    start: () => (r() ? m() : y().then(m), d)
  };
}
function fr() {
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
        e--, e || f();
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
var G = fr(), Oe, Fs, In = (Fs = class {
  constructor() {
    A(this, Oe);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Wt(this.gcTime) && w(this, Oe, setTimeout(() => {
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
}, Oe = new WeakMap(), Fs), Ve, Ge, re, Z, dt, De, oe, we, Bs, pr = (Bs = class extends In {
  constructor(e) {
    super();
    A(this, oe);
    A(this, Ve);
    A(this, Ge);
    A(this, re);
    A(this, Z);
    A(this, dt);
    A(this, De);
    w(this, De, !1), w(this, dt, e.defaultOptions), this.setOptions(e.options), this.observers = [], w(this, re, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, w(this, Ve, mr(this.options)), this.state = e.state ?? l(this, Ve), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = l(this, Z)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...l(this, dt), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && l(this, re).remove(this);
  }
  setData(e, s) {
    const n = Gt(this.state.data, e, this.options);
    return k(this, oe, we).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), n;
  }
  setState(e, s) {
    k(this, oe, we).call(this, { type: "setState", state: e, setStateOptions: s });
  }
  cancel(e) {
    var n, o;
    const s = (n = l(this, Z)) == null ? void 0 : n.promise;
    return (o = l(this, Z)) == null || o.cancel(e), s ? s.then(ie).catch(ie) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(l(this, Ve));
  }
  isActive() {
    return this.observers.some(
      (e) => le(e.options.enabled, this) !== !1
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
    e == null || e.refetch({ cancelRefetch: !1 }), (s = l(this, Z)) == null || s.continue();
  }
  onOnline() {
    var s;
    const e = this.observers.find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (s = l(this, Z)) == null || s.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), l(this, re).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((s) => s !== e), this.observers.length || (l(this, Z) && (l(this, De) ? l(this, Z).cancel({ revert: !0 }) : l(this, Z).cancelRetry()), this.scheduleGc()), l(this, re).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || k(this, oe, we).call(this, { type: "invalidate" });
  }
  fetch(e, s) {
    var a, i, r;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (l(this, Z))
        return l(this, Z).continueRetry(), l(this, Z).promise;
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
    o(f), (a = this.options.behavior) == null || a.onFetch(
      f,
      this
    ), w(this, Ge, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) && k(this, oe, we).call(this, { type: "fetch", meta: (r = f.fetchOptions) == null ? void 0 : r.meta });
    const p = (c) => {
      var h, y, m, g;
      It(c) && c.silent || k(this, oe, we).call(this, {
        type: "error",
        error: c
      }), It(c) || ((y = (h = l(this, re).config).onError) == null || y.call(
        h,
        c,
        this
      ), (g = (m = l(this, re).config).onSettled) == null || g.call(
        m,
        this.state.data,
        c,
        this
      )), this.scheduleGc();
    };
    return w(this, Z, jn({
      initialPromise: s == null ? void 0 : s.initialPromise,
      fn: f.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (c) => {
        var h, y, m, g;
        if (c === void 0) {
          Qe.env.NODE_ENV !== "production" && console.error(
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
        (y = (h = l(this, re).config).onSuccess) == null || y.call(h, c, this), (g = (m = l(this, re).config).onSettled) == null || g.call(
          m,
          c,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: p,
      onFail: (c, h) => {
        k(this, oe, we).call(this, { type: "failed", failureCount: c, error: h });
      },
      onPause: () => {
        k(this, oe, we).call(this, { type: "pause" });
      },
      onContinue: () => {
        k(this, oe, we).call(this, { type: "continue" });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode,
      canRun: () => !0
    })), l(this, Z).start();
  }
}, Ve = new WeakMap(), Ge = new WeakMap(), re = new WeakMap(), Z = new WeakMap(), dt = new WeakMap(), De = new WeakMap(), oe = new WeakSet(), we = function(e) {
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
        return It(o) && o.revert && l(this, Ge) ? { ...l(this, Ge), fetchStatus: "idle" } : {
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
  this.state = s(this.state), G.batch(() => {
    this.observers.forEach((n) => {
      n.onQueryUpdate();
    }), l(this, re).notify({ query: this, type: "updated", action: e });
  });
}, Bs);
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
function mr(t) {
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
var he, Us, yr = (Us = class extends yt {
  constructor(e = {}) {
    super();
    A(this, he);
    this.config = e, w(this, he, /* @__PURE__ */ new Map());
  }
  build(e, s, n) {
    const o = s.queryKey, d = s.queryHash ?? us(o, s);
    let f = this.get(d);
    return f || (f = new pr({
      cache: this,
      queryKey: o,
      queryHash: d,
      options: e.defaultQueryOptions(s),
      state: n,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(f)), f;
  }
  add(e) {
    l(this, he).has(e.queryHash) || (l(this, he).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const s = l(this, he).get(e.queryHash);
    s && (e.destroy(), s === e && l(this, he).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    G.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return l(this, he).get(e);
  }
  getAll() {
    return [...l(this, he).values()];
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Ss(s, n)
    );
  }
  findAll(e = {}) {
    const s = this.getAll();
    return Object.keys(e).length > 0 ? s.filter((n) => Ss(e, n)) : s;
  }
  notify(e) {
    G.batch(() => {
      this.listeners.forEach((s) => {
        s(e);
      });
    });
  }
  onFocus() {
    G.batch(() => {
      this.getAll().forEach((e) => {
        e.onFocus();
      });
    });
  }
  onOnline() {
    G.batch(() => {
      this.getAll().forEach((e) => {
        e.onOnline();
      });
    });
  }
}, he = new WeakMap(), Us), fe, J, Fe, pe, Se, Ls, gr = (Ls = class extends In {
  constructor(e) {
    super();
    A(this, pe);
    A(this, fe);
    A(this, J);
    A(this, Fe);
    this.mutationId = e.mutationId, w(this, J, e.mutationCache), w(this, fe, []), this.state = e.state || br(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    l(this, fe).includes(e) || (l(this, fe).push(e), this.clearGcTimeout(), l(this, J).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    w(this, fe, l(this, fe).filter((s) => s !== e)), this.scheduleGc(), l(this, J).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    l(this, fe).length || (this.state.status === "pending" ? this.scheduleGc() : l(this, J).remove(this));
  }
  continue() {
    var e;
    return ((e = l(this, Fe)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var o, d, f, p, a, i, r, c, h, y, m, g, b, S, E, v, C, R, O, B;
    w(this, Fe, jn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (M, T) => {
        k(this, pe, Se).call(this, { type: "failed", failureCount: M, error: T });
      },
      onPause: () => {
        k(this, pe, Se).call(this, { type: "pause" });
      },
      onContinue: () => {
        k(this, pe, Se).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => l(this, J).canRun(this)
    }));
    const s = this.state.status === "pending", n = !l(this, Fe).canStart();
    try {
      if (!s) {
        k(this, pe, Se).call(this, { type: "pending", variables: e, isPaused: n }), await ((d = (o = l(this, J).config).onMutate) == null ? void 0 : d.call(
          o,
          e,
          this
        ));
        const T = await ((p = (f = this.options).onMutate) == null ? void 0 : p.call(f, e));
        T !== this.state.context && k(this, pe, Se).call(this, {
          type: "pending",
          context: T,
          variables: e,
          isPaused: n
        });
      }
      const M = await l(this, Fe).start();
      return await ((i = (a = l(this, J).config).onSuccess) == null ? void 0 : i.call(
        a,
        M,
        e,
        this.state.context,
        this
      )), await ((c = (r = this.options).onSuccess) == null ? void 0 : c.call(r, M, e, this.state.context)), await ((y = (h = l(this, J).config).onSettled) == null ? void 0 : y.call(
        h,
        M,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((g = (m = this.options).onSettled) == null ? void 0 : g.call(m, M, null, e, this.state.context)), k(this, pe, Se).call(this, { type: "success", data: M }), M;
    } catch (M) {
      try {
        throw await ((S = (b = l(this, J).config).onError) == null ? void 0 : S.call(
          b,
          M,
          e,
          this.state.context,
          this
        )), await ((v = (E = this.options).onError) == null ? void 0 : v.call(
          E,
          M,
          e,
          this.state.context
        )), await ((R = (C = l(this, J).config).onSettled) == null ? void 0 : R.call(
          C,
          void 0,
          M,
          this.state.variables,
          this.state.context,
          this
        )), await ((B = (O = this.options).onSettled) == null ? void 0 : B.call(
          O,
          void 0,
          M,
          e,
          this.state.context
        )), M;
      } finally {
        k(this, pe, Se).call(this, { type: "error", error: M });
      }
    } finally {
      l(this, J).runNext(this);
    }
  }
}, fe = new WeakMap(), J = new WeakMap(), Fe = new WeakMap(), pe = new WeakSet(), Se = function(e) {
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
  this.state = s(this.state), G.batch(() => {
    l(this, fe).forEach((n) => {
      n.onMutationUpdate(e);
    }), l(this, J).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, Ls);
function br() {
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
var ae, ht, Qs, vr = (Qs = class extends yt {
  constructor(e = {}) {
    super();
    A(this, ae);
    A(this, ht);
    this.config = e, w(this, ae, /* @__PURE__ */ new Map()), w(this, ht, Date.now());
  }
  build(e, s, n) {
    const o = new gr({
      mutationCache: this,
      mutationId: ++gt(this, ht)._,
      options: e.defaultMutationOptions(s),
      state: n
    });
    return this.add(o), o;
  }
  add(e) {
    const s = vt(e), n = l(this, ae).get(s) ?? [];
    n.push(e), l(this, ae).set(s, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const s = vt(e);
    if (l(this, ae).has(s)) {
      const o = (n = l(this, ae).get(s)) == null ? void 0 : n.filter((d) => d !== e);
      o && (o.length === 0 ? l(this, ae).delete(s) : l(this, ae).set(s, o));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const s = (n = l(this, ae).get(vt(e))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !s || s === e;
  }
  runNext(e) {
    var n;
    const s = (n = l(this, ae).get(vt(e))) == null ? void 0 : n.find((o) => o !== e && o.state.isPaused);
    return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
  }
  clear() {
    G.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  getAll() {
    return [...l(this, ae).values()].flat();
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => As(s, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((s) => As(e, s));
  }
  notify(e) {
    G.batch(() => {
      this.listeners.forEach((s) => {
        s(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((s) => s.state.isPaused);
    return G.batch(
      () => Promise.all(
        e.map((s) => s.continue().catch(ie))
      )
    );
  }
}, ae = new WeakMap(), ht = new WeakMap(), Qs);
function vt(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function Ns(t) {
  return {
    onFetch: (e, s) => {
      var r, c, h, y, m;
      const n = e.options, o = (h = (c = (r = e.fetchOptions) == null ? void 0 : r.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : h.direction, d = ((y = e.state.data) == null ? void 0 : y.pages) || [], f = ((m = e.state.data) == null ? void 0 : m.pageParams) || [];
      let p = { pages: [], pageParams: [] }, a = 0;
      const i = async () => {
        let g = !1;
        const b = (v) => {
          Object.defineProperty(v, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? g = !0 : e.signal.addEventListener("abort", () => {
              g = !0;
            }), e.signal)
          });
        }, S = Pn(e.options, e.fetchOptions), E = async (v, C, R) => {
          if (g)
            return Promise.reject();
          if (C == null && v.pages.length)
            return Promise.resolve(v);
          const O = {
            queryKey: e.queryKey,
            pageParam: C,
            direction: R ? "backward" : "forward",
            meta: e.options.meta
          };
          b(O);
          const B = await S(
            O
          ), { maxPages: M } = e.options, T = R ? cr : lr;
          return {
            pages: T(v.pages, B, M),
            pageParams: T(v.pageParams, C, M)
          };
        };
        if (o && d.length) {
          const v = o === "backward", C = v ? xr : Ps, R = {
            pages: d,
            pageParams: f
          }, O = C(n, R);
          p = await E(R, O, v);
        } else {
          const v = t ?? d.length;
          do {
            const C = a === 0 ? f[0] ?? n.initialPageParam : Ps(n, p);
            if (a > 0 && C == null)
              break;
            p = await E(p, C), a++;
          } while (a < v);
        }
        return p;
      };
      e.options.persister ? e.fetchFn = () => {
        var g, b;
        return (b = (g = e.options).persister) == null ? void 0 : b.call(
          g,
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
function Ps(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    s[n],
    s
  ) : void 0;
}
function xr(t, { pages: e, pageParams: s }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, s[0], s) : void 0;
}
var L, Te, Ne, Ye, Xe, Pe, Ze, Je, zs, wr = (zs = class {
  constructor(t = {}) {
    A(this, L);
    A(this, Te);
    A(this, Ne);
    A(this, Ye);
    A(this, Xe);
    A(this, Pe);
    A(this, Ze);
    A(this, Je);
    w(this, L, t.queryCache || new yr()), w(this, Te, t.mutationCache || new vr()), w(this, Ne, t.defaultOptions || {}), w(this, Ye, /* @__PURE__ */ new Map()), w(this, Xe, /* @__PURE__ */ new Map()), w(this, Pe, 0);
  }
  mount() {
    gt(this, Pe)._++, l(this, Pe) === 1 && (w(this, Ze, ds.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, L).onFocus());
    })), w(this, Je, At.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), l(this, L).onOnline());
    })));
  }
  unmount() {
    var t, e;
    gt(this, Pe)._--, l(this, Pe) === 0 && ((t = l(this, Ze)) == null || t.call(this), w(this, Ze, void 0), (e = l(this, Je)) == null || e.call(this), w(this, Je, void 0));
  }
  isFetching(t) {
    return l(this, L).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return l(this, Te).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = l(this, L).get(e.queryHash)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const s = this.defaultQueryOptions(t), n = l(this, L).build(this, s);
      return t.revalidateIfStale && n.isStaleByTime(He(s.staleTime, n)) && this.prefetchQuery(s), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return l(this, L).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    const n = this.defaultQueryOptions({ queryKey: t }), o = l(this, L).get(
      n.queryHash
    ), d = o == null ? void 0 : o.state.data, f = ir(e, d);
    if (f !== void 0)
      return l(this, L).build(this, n).setData(f, { ...s, manual: !0 });
  }
  setQueriesData(t, e, s) {
    return G.batch(
      () => l(this, L).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, s)
      ])
    );
  }
  getQueryState(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = l(this, L).get(e.queryHash)) == null ? void 0 : s.state;
  }
  removeQueries(t) {
    const e = l(this, L);
    G.batch(() => {
      e.findAll(t).forEach((s) => {
        e.remove(s);
      });
    });
  }
  resetQueries(t, e) {
    const s = l(this, L), n = {
      type: "active",
      ...t
    };
    return G.batch(() => (s.findAll(t).forEach((o) => {
      o.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const s = { revert: !0, ...e }, n = G.batch(
      () => l(this, L).findAll(t).map((o) => o.cancel(s))
    );
    return Promise.all(n).then(ie).catch(ie);
  }
  invalidateQueries(t = {}, e = {}) {
    return G.batch(() => {
      if (l(this, L).findAll(t).forEach((n) => {
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
    }, n = G.batch(
      () => l(this, L).findAll(t).filter((o) => !o.isDisabled()).map((o) => {
        let d = o.fetch(void 0, s);
        return s.throwOnError || (d = d.catch(ie)), o.state.fetchStatus === "paused" ? Promise.resolve() : d;
      })
    );
    return Promise.all(n).then(ie);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const s = l(this, L).build(this, e);
    return s.isStaleByTime(
      He(e.staleTime, s)
    ) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(ie).catch(ie);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = Ns(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(ie).catch(ie);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = Ns(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return At.isOnline() ? l(this, Te).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return l(this, L);
  }
  getMutationCache() {
    return l(this, Te);
  }
  getDefaultOptions() {
    return l(this, Ne);
  }
  setDefaultOptions(t) {
    w(this, Ne, t);
  }
  setQueryDefaults(t, e) {
    l(this, Ye).set(ct(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...l(this, Ye).values()];
    let s = {};
    return e.forEach((n) => {
      ut(t, n.queryKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  setMutationDefaults(t, e) {
    l(this, Xe).set(ct(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...l(this, Xe).values()];
    let s = {};
    return e.forEach((n) => {
      ut(t, n.mutationKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...l(this, Ne).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = us(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === St && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...l(this, Ne).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    l(this, L).clear(), l(this, Te).clear();
  }
}, L = new WeakMap(), Te = new WeakMap(), Ne = new WeakMap(), Ye = new WeakMap(), Xe = new WeakMap(), Pe = new WeakMap(), Ze = new WeakMap(), Je = new WeakMap(), zs), te, j, ft, ee, Be, et, Me, me, pt, tt, st, Ue, Le, ke, nt, D, lt, Xt, Zt, Jt, es, ts, ss, ns, Dn, _s, Cr = (_s = class extends yt {
  constructor(e, s) {
    super();
    A(this, D);
    A(this, te);
    A(this, j);
    A(this, ft);
    A(this, ee);
    A(this, Be);
    A(this, et);
    A(this, Me);
    A(this, me);
    A(this, pt);
    A(this, tt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    A(this, st);
    A(this, Ue);
    A(this, Le);
    A(this, ke);
    A(this, nt, /* @__PURE__ */ new Set());
    this.options = s, w(this, te, e), w(this, me, null), w(this, Me, Yt()), this.options.experimental_prefetchInRender || l(this, Me).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (l(this, j).addObserver(this), Ms(l(this, j), this.options) ? k(this, D, lt).call(this) : this.updateResult(), k(this, D, es).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return as(
      l(this, j),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return as(
      l(this, j),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), k(this, D, ts).call(this), k(this, D, ss).call(this), l(this, j).removeObserver(this);
  }
  setOptions(e, s) {
    const n = this.options, o = l(this, j);
    if (this.options = l(this, te).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof le(this.options.enabled, l(this, j)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    k(this, D, ns).call(this), l(this, j).setOptions(this.options), n._defaulted && !$t(this.options, n) && l(this, te).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: l(this, j),
      observer: this
    });
    const d = this.hasListeners();
    d && ks(
      l(this, j),
      o,
      this.options,
      n
    ) && k(this, D, lt).call(this), this.updateResult(s), d && (l(this, j) !== o || le(this.options.enabled, l(this, j)) !== le(n.enabled, l(this, j)) || He(this.options.staleTime, l(this, j)) !== He(n.staleTime, l(this, j))) && k(this, D, Xt).call(this);
    const f = k(this, D, Zt).call(this);
    d && (l(this, j) !== o || le(this.options.enabled, l(this, j)) !== le(n.enabled, l(this, j)) || f !== l(this, ke)) && k(this, D, Jt).call(this, f);
  }
  getOptimisticResult(e) {
    const s = l(this, te).getQueryCache().build(l(this, te), e), n = this.createResult(s, e);
    return Sr(this, n) && (w(this, ee, n), w(this, et, this.options), w(this, Be, l(this, j).state)), n;
  }
  getCurrentResult() {
    return l(this, ee);
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
    return l(this, j);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const s = l(this, te).defaultQueryOptions(e), n = l(this, te).getQueryCache().build(l(this, te), s);
    return n.fetch().then(() => this.createResult(n, s));
  }
  fetch(e) {
    return k(this, D, lt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), l(this, ee)));
  }
  createResult(e, s) {
    var M;
    const n = l(this, j), o = this.options, d = l(this, ee), f = l(this, Be), p = l(this, et), i = e !== n ? e.state : l(this, ft), { state: r } = e;
    let c = { ...r }, h = !1, y;
    if (s._optimisticResults) {
      const T = this.hasListeners(), W = !T && Ms(e, s), F = T && ks(e, n, s, o);
      (W || F) && (c = {
        ...c,
        ...On(r.data, e.options)
      }), s._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
    }
    let { error: m, errorUpdatedAt: g, status: b } = c;
    if (s.select && c.data !== void 0)
      if (d && c.data === (f == null ? void 0 : f.data) && s.select === l(this, pt))
        y = l(this, tt);
      else
        try {
          w(this, pt, s.select), y = s.select(c.data), y = Gt(d == null ? void 0 : d.data, y, s), w(this, tt, y), w(this, me, null);
        } catch (T) {
          w(this, me, T);
        }
    else
      y = c.data;
    if (s.placeholderData !== void 0 && y === void 0 && b === "pending") {
      let T;
      if (d != null && d.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData))
        T = d.data;
      else if (T = typeof s.placeholderData == "function" ? s.placeholderData(
        (M = l(this, st)) == null ? void 0 : M.state.data,
        l(this, st)
      ) : s.placeholderData, s.select && T !== void 0)
        try {
          T = s.select(T), w(this, me, null);
        } catch (W) {
          w(this, me, W);
        }
      T !== void 0 && (b = "success", y = Gt(
        d == null ? void 0 : d.data,
        T,
        s
      ), h = !0);
    }
    l(this, me) && (m = l(this, me), y = l(this, tt), g = Date.now(), b = "error");
    const S = c.fetchStatus === "fetching", E = b === "pending", v = b === "error", C = E && S, R = y !== void 0, B = {
      status: b,
      fetchStatus: c.fetchStatus,
      isPending: E,
      isSuccess: b === "success",
      isError: v,
      isInitialLoading: C,
      isLoading: C,
      data: y,
      dataUpdatedAt: c.dataUpdatedAt,
      error: m,
      errorUpdatedAt: g,
      failureCount: c.fetchFailureCount,
      failureReason: c.fetchFailureReason,
      errorUpdateCount: c.errorUpdateCount,
      isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0,
      isFetchedAfterMount: c.dataUpdateCount > i.dataUpdateCount || c.errorUpdateCount > i.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !E,
      isLoadingError: v && !R,
      isPaused: c.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: v && R,
      isStale: hs(e, s),
      refetch: this.refetch,
      promise: l(this, Me)
    };
    if (this.options.experimental_prefetchInRender) {
      const T = (Y) => {
        B.status === "error" ? Y.reject(B.error) : B.data !== void 0 && Y.resolve(B.data);
      }, W = () => {
        const Y = w(this, Me, B.promise = Yt());
        T(Y);
      }, F = l(this, Me);
      switch (F.status) {
        case "pending":
          e.queryHash === n.queryHash && T(F);
          break;
        case "fulfilled":
          (B.status === "error" || B.data !== F.value) && W();
          break;
        case "rejected":
          (B.status !== "error" || B.error !== F.reason) && W();
          break;
      }
    }
    return B;
  }
  updateResult(e) {
    const s = l(this, ee), n = this.createResult(l(this, j), this.options);
    if (w(this, Be, l(this, j).state), w(this, et, this.options), l(this, Be).data !== void 0 && w(this, st, l(this, j)), $t(n, s))
      return;
    w(this, ee, n);
    const o = {}, d = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: f } = this.options, p = typeof f == "function" ? f() : f;
      if (p === "all" || !p && !l(this, nt).size)
        return !0;
      const a = new Set(
        p ?? l(this, nt)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(l(this, ee)).some((i) => {
        const r = i;
        return l(this, ee)[r] !== s[r] && a.has(r);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && d() && (o.listeners = !0), k(this, D, Dn).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && k(this, D, es).call(this);
  }
}, te = new WeakMap(), j = new WeakMap(), ft = new WeakMap(), ee = new WeakMap(), Be = new WeakMap(), et = new WeakMap(), Me = new WeakMap(), me = new WeakMap(), pt = new WeakMap(), tt = new WeakMap(), st = new WeakMap(), Ue = new WeakMap(), Le = new WeakMap(), ke = new WeakMap(), nt = new WeakMap(), D = new WeakSet(), lt = function(e) {
  k(this, D, ns).call(this);
  let s = l(this, j).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(ie)), s;
}, Xt = function() {
  k(this, D, ts).call(this);
  const e = He(
    this.options.staleTime,
    l(this, j)
  );
  if (_e || l(this, ee).isStale || !Wt(e))
    return;
  const n = Nn(l(this, ee).dataUpdatedAt, e) + 1;
  w(this, Ue, setTimeout(() => {
    l(this, ee).isStale || this.updateResult();
  }, n));
}, Zt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(l(this, j)) : this.options.refetchInterval) ?? !1;
}, Jt = function(e) {
  k(this, D, ss).call(this), w(this, ke, e), !(_e || le(this.options.enabled, l(this, j)) === !1 || !Wt(l(this, ke)) || l(this, ke) === 0) && w(this, Le, setInterval(() => {
    (this.options.refetchIntervalInBackground || ds.isFocused()) && k(this, D, lt).call(this);
  }, l(this, ke)));
}, es = function() {
  k(this, D, Xt).call(this), k(this, D, Jt).call(this, k(this, D, Zt).call(this));
}, ts = function() {
  l(this, Ue) && (clearTimeout(l(this, Ue)), w(this, Ue, void 0));
}, ss = function() {
  l(this, Le) && (clearInterval(l(this, Le)), w(this, Le, void 0));
}, ns = function() {
  const e = l(this, te).getQueryCache().build(l(this, te), this.options);
  if (e === l(this, j))
    return;
  const s = l(this, j);
  w(this, j, e), w(this, ft, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, Dn = function(e) {
  G.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(l(this, ee));
    }), l(this, te).getQueryCache().notify({
      query: l(this, j),
      type: "observerResultsUpdated"
    });
  });
}, _s);
function Er(t, e) {
  return le(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Ms(t, e) {
  return Er(t, e) || t.state.data !== void 0 && as(t, e, e.refetchOnMount);
}
function as(t, e, s) {
  if (le(e.enabled, t) !== !1) {
    const n = typeof s == "function" ? s(t) : s;
    return n === "always" || n !== !1 && hs(t, e);
  }
  return !1;
}
function ks(t, e, s, n) {
  return (t !== e || le(n.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && hs(t, s);
}
function hs(t, e) {
  return le(e.enabled, t) !== !1 && t.isStaleByTime(He(e.staleTime, t));
}
function Sr(t, e) {
  return !$t(t.getCurrentResult(), e);
}
var Fn = x.createContext(
  void 0
), Ar = (t) => {
  const e = x.useContext(Fn);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Rr = ({
  client: t,
  children: e
}) => (x.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ u.jsx(Fn.Provider, { value: t, children: e })), Bn = x.createContext(!1), Tr = () => x.useContext(Bn);
Bn.Provider;
function Nr() {
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
var Pr = x.createContext(Nr()), Mr = () => x.useContext(Pr);
function kr(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function jr() {
}
var Ir = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, Or = (t) => {
  x.useEffect(() => {
    t.clearReset();
  }, [t]);
}, Dr = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && kr(s, [t.error, n]), Fr = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Br = (t, e) => t.isLoading && t.isFetching && !e, Ur = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, js = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function Lr(t, e, s) {
  var r, c, h, y, m;
  if (Qe.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Ar(), o = Tr(), d = Mr(), f = n.defaultQueryOptions(t);
  (c = (r = n.getDefaultOptions().queries) == null ? void 0 : r._experimental_beforeQuery) == null || c.call(
    r,
    f
  ), f._optimisticResults = o ? "isRestoring" : "optimistic", Fr(f), Ir(f, d), Or(d);
  const p = !n.getQueryCache().get(f.queryHash), [a] = x.useState(
    () => new e(
      n,
      f
    )
  ), i = a.getOptimisticResult(f);
  if (x.useSyncExternalStore(
    x.useCallback(
      (g) => {
        const b = o ? () => {
        } : a.subscribe(G.batchCalls(g));
        return a.updateResult(), b;
      },
      [a, o]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), x.useEffect(() => {
    a.setOptions(f, { listeners: !1 });
  }, [f, a]), Ur(f, i))
    throw js(f, a, d);
  if (Dr({
    result: i,
    errorResetBoundary: d,
    throwOnError: f.throwOnError,
    query: n.getQueryCache().get(f.queryHash)
  }))
    throw i.error;
  if ((y = (h = n.getDefaultOptions().queries) == null ? void 0 : h._experimental_afterQuery) == null || y.call(
    h,
    f,
    i
  ), f.experimental_prefetchInRender && !_e && Br(i, o)) {
    const g = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      js(f, a, d)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (m = n.getQueryCache().get(f.queryHash)) == null ? void 0 : m.promise
    );
    g == null || g.catch(jr).finally(() => {
      a.updateResult();
    });
  }
  return f.notifyOnChangeProps ? i : a.trackResult(i);
}
function Qr(t, e) {
  return Lr(t, Cr);
}
const zr = ["totalAsset"], _r = 0.01, qr = async (t) => {
  try {
    const s = (await ge.get("/user-assets/total-assets", {
      params: { address: t }
    })).data.totalAssets;
    return {
      raw: s,
      formatted: Aa(s, 2),
      isZero: s === 0,
      isUSDZero: s < _r
    };
  } catch (e) {
    throw xt(e);
  }
};
function Hr(t) {
  const { address: e } = V.all();
  return Qr({
    queryKey: [...zr, e],
    queryFn: () => qr(e),
    enabled: (t == null ? void 0 : t.enabled) && !!e,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30
    // cache for 30 minutes
  });
}
function Wr() {
  const t = V.getUserRandomAvatar(), { address: e } = V.all(), { data: s, refetch: n } = Hr({
    enabled: !!e
  }), [o, d] = x.useState(!1), [f, p] = x.useState(!1), [a, i] = x.useState("ETH"), [r, c] = x.useState(xs.getData() ?? !0);
  x.useEffect(() => {
    h(a);
  }, []);
  const h = async (m) => {
    i(m);
  }, y = () => {
    c(!r), xs.setData(!r);
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: P(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ u.jsx(
          "div",
          {
            className: P(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${t})`
            }
          }
        ),
        /* @__PURE__ */ u.jsxs("div", { className: P(
          "relative z-10",
          "tablet:flex tablet:flex-wrap tablet:justify-between",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ u.jsxs("div", { children: [
            /* @__PURE__ */ u.jsx("div", { className: P(
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
                  className: P(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ u.jsx("div", { className: P(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ u.jsxs("div", { className: P(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: [
                  /* @__PURE__ */ u.jsx("span", { className: "flex items-center", children: r ? "******" : `$${(s == null ? void 0 : s.formatted) || ""} USD` }),
                  /* @__PURE__ */ u.jsx(
                    "img",
                    {
                      src: r ? "/imgs/icons/close_eye.svg" : "/imgs/icons/open_eye.svg",
                      alt: "",
                      className: P(
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
          /* @__PURE__ */ u.jsxs("div", { className: P(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ u.jsxs("div", { className: P(
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
              )
            ] }),
            /* @__PURE__ */ u.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ u.jsx(
                Ut,
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
          Va,
          {
            open: o,
            setOpen: d,
            address: e,
            tokenType: a,
            onClose: () => d(!1)
          }
        ),
        /* @__PURE__ */ u.jsx(
          rr,
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
function Kr() {
  return /* @__PURE__ */ u.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ u.jsx(Wr, {}),
    /* @__PURE__ */ u.jsx("div", { className: P(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ u.jsx(Zn, {}) })
  ] });
}
function $r() {
  const t = Jn();
  return console.error(t), /* @__PURE__ */ u.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ u.jsx("p", { className: "text-lg text-gray-600 italic", children: t.statusText || t.message })
  ] }) });
}
function zi({
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
      Ce("handlePageChange", p), n((a) => ({
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
const Vr = 30, Gr = async () => {
  try {
    const t = await ge.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: Vr
    });
    return {
      products: t.data.products,
      total: t.data.total
    };
  } catch (t) {
    const e = xt(t);
    throw new Error(e.message);
  }
}, Yr = ea([
  {
    path: "/",
    async lazy() {
      const { RootLayout: t } = await import("./root-layout-BPD3-jXY.js");
      return { Component: t };
    },
    errorElement: /* @__PURE__ */ u.jsx($r, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: t } = await import("./main-layout-DQjMJCag.js");
          return { Component: t };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: t } = await import("./page-DsuabZvP.js");
              return { Component: t };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: t } = await import("./page-CrdQoCVk.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: t } = await import("./page-Cp_o9EpM.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: t } = await import("./page-IyET8FTq.js");
              return { Component: t };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ u.jsx(Kr, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: t } = await import("./page-BZlWqAND.js");
                  return { Component: t };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: t } = await import("./page-By_AJZ67.js");
                  return { Component: t };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: t } = await import("./page-CuYzdqX8.js");
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
                  const { default: t } = await import("./page-BafDJVAy.js");
                  return { Component: t };
                },
                loader: Gr
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: t } = await import("./page-D1PrxYgy.js");
                  return { Component: t };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: t } = await import("./page-C72ND5b6.js");
                  return { Component: t };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: t } = await import("./page-DDiLeY1E.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: t } = await import("./page-3n734YFe.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: t } = await import("./page-D_gPmBMx.js");
                  return { Component: t };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: t } = await import("./page-CoVF3Izy.js");
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
                          const { default: t } = await import("./page-BZDjxZ09.js");
                          return { Component: t };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: t } = await import("./page-CHmC1uMA.js");
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
                  const { default: t } = await import("./page-coJTLwgX.js");
                  return { Component: t };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: t } = await import("./page-Bn_22tdj.js");
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
function Xr() {
  const [t, e] = x.useState(!1);
  return x.useEffect(() => {
    const s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    e(s);
  }, []), /* @__PURE__ */ u.jsx(
    ma,
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
      theme: "colored",
      transition: ya,
      icon: ({ type: s }) => {
        if (s === "error")
          return /* @__PURE__ */ u.jsx(ha, {});
        if (s === "success")
          return /* @__PURE__ */ u.jsx(Dt, {});
        if (s === "info")
          return /* @__PURE__ */ u.jsx(fa, {});
        if (s === "warning")
          return /* @__PURE__ */ u.jsx(an, {});
      },
      toastClassName: P(
        "text-sm",
        // 'laptop:top-[82px]',
        "max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var fs = "moonpay-react-sdk-embedded-frame", Zr = ({
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
    walletAddressTag: a,
    walletAddresses: i,
    walletAddressTags: r,
    colorCode: c,
    theme: h,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: S,
    lockAmount: E,
    email: v,
    externalTransactionId: C,
    externalCustomerId: R,
    paymentMethod: O,
    redirectURL: B,
    showAllCurrencies: M,
    showOnlyCurrencies: T,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: F,
    skipUnsupportedRegionScreen: Y,
    baseOrigin: ce,
    // handlers
    onAuthToken: K,
    onInitiateDeposit: _,
    onKmsWalletsCreated: ue,
    onLogin: X,
    onTransactionCompleted: q,
    onUnsupportedRegion: se,
    onSwapsCustomerSetupComplete: be,
    onCloseOverlay: ve,
    onTransactionCreated: Q,
    // auth
    auth: xe,
    useWarnBeforeRefresh: Ee,
    // other
    overlayNode: rt
  } = t, it = {
    apiKey: e,
    signature: o,
    currencyCode: d,
    defaultCurrencyCode: f,
    walletAddress: p,
    walletAddressTag: a,
    walletAddresses: i,
    walletAddressTags: r,
    colorCode: c,
    theme: h,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: S,
    lockAmount: E,
    email: v,
    externalTransactionId: C,
    externalCustomerId: R,
    paymentMethod: O,
    redirectURL: B,
    showAllCurrencies: M,
    showOnlyCurrencies: T,
    showWalletAddressForm: W,
    unsupportedRegionRedirectUrl: F,
    skipUnsupportedRegionScreen: Y,
    baseOrigin: ce
  }, ot = {
    onAuthToken: K,
    onInitiateDeposit: _,
    onKmsWalletsCreated: ue,
    onLogin: X,
    onTransactionCompleted: q,
    onUnsupportedRegion: se,
    onSwapsCustomerSetupComplete: be,
    onCloseOverlay: ve,
    onTransactionCreated: Q
  };
  return {
    flow: "buy",
    variant: t.variant,
    environment: n,
    params: it,
    debug: s,
    handlers: ot,
    auth: xe,
    useWarnBeforeRefresh: Ee,
    containerNodeSelector: `#${fs}`,
    overlayNode: rt
  };
}, Jr = ({
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
    walletAddress: a,
    walletAddressTag: i,
    walletAddresses: r,
    walletAddressTags: c,
    colorCode: h,
    theme: y,
    themeId: m,
    language: g,
    baseCurrencyCode: b,
    baseCurrencyAmount: S,
    quoteCurrencyAmount: E,
    lockAmount: v,
    email: C,
    externalTransactionId: R,
    externalCustomerId: O,
    paymentMethod: B,
    redirectURL: M,
    showAllCurrencies: T,
    showOnlyCurrencies: W,
    showWalletAddressForm: F,
    unsupportedRegionRedirectUrl: Y,
    skipUnsupportedRegionScreen: ce,
    mpWalletId: K,
    baseOrigin: _,
    // handlers
    onAuthToken: ue,
    onInitiateDeposit: X,
    onKmsWalletsCreated: q,
    onLogin: se,
    onTransactionCompleted: be,
    onUnsupportedRegion: ve,
    onSwapsCustomerSetupComplete: Q,
    onCloseOverlay: xe,
    onTransactionCreated: Ee,
    // auth
    auth: rt,
    useWarnBeforeRefresh: it
  } = t, ot = {
    apiKey: e,
    signature: o,
    quoteCurrencyCode: d,
    defaultCurrencyCode: f,
    defaultBaseCurrencyCode: p,
    walletAddress: a,
    walletAddressTag: i,
    walletAddresses: r,
    walletAddressTags: c,
    colorCode: h,
    theme: y,
    themeId: m,
    language: g,
    baseCurrencyCode: b,
    baseCurrencyAmount: S,
    quoteCurrencyAmount: E,
    lockAmount: v,
    email: C,
    externalTransactionId: R,
    externalCustomerId: O,
    paymentMethod: B,
    redirectURL: M,
    showAllCurrencies: T,
    showOnlyCurrencies: W,
    showWalletAddressForm: F,
    unsupportedRegionRedirectUrl: Y,
    skipUnsupportedRegionScreen: ce,
    mpWalletId: K,
    baseOrigin: _
  }, Pt = {
    onAuthToken: ue,
    onInitiateDeposit: X,
    onKmsWalletsCreated: q,
    onLogin: se,
    onTransactionCompleted: be,
    onUnsupportedRegion: ve,
    onSwapsCustomerSetupComplete: Q,
    onCloseOverlay: xe,
    onTransactionCreated: Ee
  };
  return {
    flow: "sell",
    variant: t.variant,
    environment: n,
    params: ot,
    debug: s,
    handlers: Pt,
    auth: rt,
    useWarnBeforeRefresh: it,
    containerNodeSelector: `#${fs}`
  };
};
async function ei(t = "v1") {
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
function ti(t) {
  return t.startsWith("pk_live") || t.startsWith("sk_live") ? "production" : "sandbox";
}
var Ot = () => {
}, si = {
  info: Ot,
  warn: Ot,
  error: Ot
}, ni = class Un {
  constructor({
    logger: e,
    prefix: s
  }) {
    z(this, "prefix");
    z(this, "logger");
    this.logger = e, this.prefix = s ?? ["Logger"];
  }
  if(e) {
    return e ? this : new Un({ logger: si });
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
}), ai = ({
  children: t,
  apiKey: e,
  debug: s = !1
}) => {
  const n = ti(e), [o, d] = x.useState({
    apiKey: e,
    environment: n,
    debug: s
  }), f = x.useCallback(async () => {
    const p = await ei();
    d((a) => ({ ...a, init: p }));
  }, []);
  return x.useEffect(() => {
    o.init || f();
  }, [f, o.init]), /* @__PURE__ */ u.jsx(Nt.Provider, { value: o, children: t });
}, ri = class extends ni {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, ii = (t, e, s) => {
  const n = x.useRef(null), { init: o, debug: d } = x.useContext(Nt), f = x.useRef(new ri().if(d || !1)), p = x.useCallback(async () => {
    var a, i;
    if (n.current) {
      if (!s && ("walletAddress" in t || "walletAddresses" in t) && f.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), s) {
        const r = n.current.generateUrlForSigning();
        try {
          const c = await (s == null ? void 0 : s(r));
          if (!c)
            return;
          (a = n.current) == null || a.updateSignature(c);
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
    const a = (o == null ? void 0 : o(t)) || null;
    n.current = a, p();
  }, [o, t, p]);
}, oi = {
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
  return ii(t, s, e), s ? /* @__PURE__ */ u.jsx(
    "div",
    {
      id: fs,
      className: n,
      style: t.variant === "embedded" ? {
        ...oi,
        ...o
      } : void 0
    }
  ) : null;
}
function _i(t) {
  const { apiKey: e, environment: s } = x.useContext(Nt), n = x.useMemo(
    () => Zr({
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
function qi(t) {
  const { apiKey: e, environment: s } = x.useContext(Nt), n = x.useMemo(
    () => Jr({
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
const li = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function ci({ children: t }) {
  return /* @__PURE__ */ u.jsx(
    ai,
    {
      apiKey: li,
      debug: !0,
      children: t
    }
  );
}
const ui = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, di = {
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
}, hi = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, fi = {
  authenticationError: "Authentication Error. Please sign in again."
}, pi = {
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
  header: ui,
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
  vastWalletConnect: di,
  toastSuccess: hi,
  toastError: fi
}, mi = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, yi = {
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
}, gi = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, bi = {
  authenticationError: "认证错误，请重新登录。"
}, vi = {
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
  header: mi,
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
  vastWalletConnect: yi,
  toastSuccess: gi,
  toastError: bi
}, xi = {
  en: {
    translation: pi
  },
  zh: {
    translation: vi
  }
};
Ce("savedLng", ln);
const wi = ln.getData();
rn.use(ga).init({
  resources: xi,
  lng: wi || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function Ci() {
  return x.useEffect(() => {
    const e = [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;700&family=Asap:wght@400;500;700&display=swap"
      }
    ].map((s) => {
      const n = document.createElement("link");
      return Object.entries(s).forEach(([o, d]) => {
        n.setAttribute(o, d);
      }), document.head.appendChild(n);
    });
    return () => {
      e.forEach((s) => s.remove());
    };
  }, []), null;
}
const Ei = new wr({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1e3 * 60 * 5,
      // data is fresh within 5 minutes
      gcTime: 1e3 * 60 * 30
      // cache for 30 minutes
    }
  }
});
function Si() {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ u.jsx(x.Suspense, { children: /* @__PURE__ */ u.jsx(Rr, { client: Ei, children: /* @__PURE__ */ u.jsxs(ba, { i18n: rn, children: [
      /* @__PURE__ */ u.jsx(ci, { children: /* @__PURE__ */ u.jsx(ta, { router: Yr }) }),
      /* @__PURE__ */ u.jsx(Xr, {})
    ] }) }) }) }),
    /* @__PURE__ */ u.jsx(Ci, {})
  ] });
}
const Ai = "theme_light", Ri = "0.0.0", Ti = "module", Ni = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, Pi = {
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
}, Mi = {
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
}, ki = {
  name: Ai,
  private: !0,
  version: Ri,
  type: Ti,
  scripts: Ni,
  dependencies: Pi,
  devDependencies: Mi
};
Ce("isDev", dn);
function Is(t) {
  const e = Ft(document.getElementById(t));
  return e.render(
    /* @__PURE__ */ u.jsx(Si, {})
    // <StrictMode>
    // </StrictMode>
  ), () => e.unmount();
}
dn ? Is("root") : typeof window < "u" && (window[`mount_${ki.name}`] = Is);
export {
  wt as B,
  Ut as C,
  La as D,
  Lt as I,
  Oa as L,
  _i as M,
  rr as R,
  Va as S,
  Ct as T,
  V as a,
  Qa as b,
  P as c,
  pn as d,
  mn as e,
  ge as f,
  Ce as g,
  xt as h,
  ws as i,
  Cs as j,
  Ua as k,
  ln as l,
  Aa as m,
  Ga as n,
  yn as o,
  Qt as p,
  Hr as q,
  zi as r,
  Vr as s,
  qi as t,
  Qr as u,
  fn as v,
  Ar as w,
  un as x,
  Is as y
};
