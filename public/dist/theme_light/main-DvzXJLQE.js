var Xn = Object.defineProperty;
var vs = (t) => {
  throw TypeError(t);
};
var Zn = (t, e, s) => e in t ? Xn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var z = (t, e, s) => Zn(t, typeof e != "symbol" ? e + "" : e, s), kt = (t, e, s) => e.has(t) || vs("Cannot " + s);
var c = (t, e, s) => (kt(t, e, "read from private field"), s ? s.call(t) : e.get(t)), A = (t, e, s) => e.has(t) ? vs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), w = (t, e, s, n) => (kt(t, e, "write to private field"), n ? n.call(t, s) : e.set(t, s), s), k = (t, e, s) => (kt(t, e, "access private method"), s);
var bt = (t, e, s, n) => ({
  set _(o) {
    w(t, e, o, s);
  },
  get _() {
    return c(t, e, n);
  }
});
import { j as u, S as Jn, d as Ks, g as $s, P as ea, C as Vs, I as Gs, i as Ys, k as Xs, l as Zs, L as Js, m as en, n as ta, T as sa, o as tn, p as sn, q as nn, r as na } from "./vendor-radix-hWeKeDdS.js";
import { p as ze, b as an, a as v, c as rn, R as H, O as aa, u as ra, f as ia, h as oa } from "./vendor-react-DM3ZG7W6.js";
import { t as la, c as ca, C as ua, a as da, b as ha, d as fa, e as pa, X as on, L as ma, f as Dt, g as ln, h as ya, i as ga, j as ba, I as va } from "./vendor-ui-utils-BIQ1poue.js";
import { a as it, u as is, C as xa, B as ve, Q as wa, X as Ca, i as cn, b as Ea, I as Sa } from "./vendor-utils-CV-CuKFW.js";
import { d as un, c as mt, h as Tt, e as Aa, C as xs, f as os, E as Ra, m as Ta, a as Na, b as ws, p as jt, i as Cs } from "./vendor-web3-BgTEZO-2.js";
import "./vendor-walletconnect-CFDOEMvA.js";
var Ft, vt = an;
if (ze.env.NODE_ENV === "production")
  Ft = vt.createRoot, vt.hydrateRoot;
else {
  var Es = vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ft = function(t, e) {
    Es.usingClientEntryPoint = !0;
    try {
      return vt.createRoot(t, e);
    } finally {
      Es.usingClientEntryPoint = !1;
    }
  };
}
const ue = console.log.bind(console, "🚀");
function P(...t) {
  return la(ca(t));
}
class pe {
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
const dn = new pe("language"), Ss = new pe("hideTotalAsset");
class Pa {
  constructor() {
    z(this, "storages");
    this.storages = {
      username: new pe("username"),
      displayName: new pe("displayName"),
      avatarIndex: new pe("avatarIndex"),
      address: new pe("address"),
      authenticatedHeader: new pe("authenticatedHeader"),
      authenticated: new pe("authenticated"),
      desUsername: new pe("desUsername"),
      aeskey: new pe("aeskey")
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
const V = new Pa(), hn = [
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
], ls = /* @__PURE__ */ un({
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
}), fn = /* @__PURE__ */ un({
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
}), Ma = hn, Bt = (t, e = 6) => parseFloat(t).toFixed(e), ka = (t, e = 2) => {
  const n = (typeof t == "string" ? parseFloat(t) : t).toFixed(e), [o, d] = n.split("."), f = o.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return d ? `${f}.${d}` : f;
}, ja = (t) => {
  if (t === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: xs.EIP155,
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
      chainNamespace: xs.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function Ut(t) {
  if (t === "ETH")
    return fn;
  if (t === "MATIC" || t === "TVWT")
    return ls;
}
async function Ia(t, e, s) {
  try {
    const n = Ut(t);
    if (!n) return null;
    const o = mt({
      chain: n,
      transport: Tt()
    });
    let d;
    if (t === "TVWT" && (d = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", !d))
      throw new Error("Invalid token contract address");
    let f;
    if (t === "TVWT") {
      const p = Aa({
        abi: Ma,
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
      }), a = await o.getGasPrice(), r = (await o.getBlock()).baseFeePerGas || BigInt(0), l = a > r ? a - r : BigInt(1e9), h = r + l * BigInt(2), y = p * h, m = Bt(
        (Number(y) / Math.pow(10, 18)).toString()
      );
      return {
        estimatedGas: p,
        maxFeePerGas: h,
        maxPriorityFeePerGas: l,
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
const As = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, pn = ze.env.NODE_ENV === "development";
function wt(t) {
  var e;
  if (it.isAxiosError(t)) {
    const s = t;
    return s.response ? { message: `${((e = s.response.data) == null ? void 0 : e.message) || s.message}` } : s.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${s.message}` };
  } else return t instanceof Error ? { message: t.message } : { message: "An unknown error occurred" };
}
function Lt({
  iconSize: t = 20,
  address: e,
  className: s = "",
  iconClassName: n = "",
  ...o
}) {
  const { t: d } = is();
  return /* @__PURE__ */ u.jsx(xa, { text: e, onCopy: () => {
    ve.success(d("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ u.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ u.jsx("span", { ...o, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ u.jsx("span", { className: `text-primary ${s}`, children: e }) }),
    /* @__PURE__ */ u.jsx(
      ua,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${n}`,
        size: t
      }
    )
  ] }) });
}
const Oa = da(
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
), Ct = v.forwardRef(
  ({ className: t, variant: e, size: s, asChild: n = !1, ...o }, d) => {
    const f = n ? Jn : "button";
    return /* @__PURE__ */ u.jsx(
      f,
      {
        className: P(Oa({ variant: e, size: s, className: t })),
        ref: d,
        ...o
      }
    );
  }
);
Ct.displayName = "Button";
const Qt = v.forwardRef(
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
Qt.displayName = "Input";
class cs {
  constructor(e, s, n) {
    z(this, "name");
    z(this, "symbol");
    z(this, "decimals");
    this.name = e, this.symbol = s, this.decimals = n;
  }
}
class Da extends cs {
  constructor() {
    super("Ethereum", "ETH", 18);
    z(this, "publicClient");
    z(this, "openUrl");
    this.publicClient = mt({
      chain: fn,
      transport: Tt("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return os(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-sepolia.etherscan.io/api", d = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await it.get(n, {
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
class Fa extends cs {
  constructor() {
    super("Polygon", "MATIC", 18);
    z(this, "publicClient");
    z(this, "openUrl");
    this.publicClient = mt({
      chain: ls,
      transport: Tt("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.getBalance({
      address: s
    });
    return os(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await it.get(n, {
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
class Ba extends cs {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    z(this, "publicClient");
    z(this, "contractAddress");
    z(this, "contractAbi");
    z(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = hn, this.publicClient = mt({
      chain: ls,
      transport: Tt("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(s) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [s]
    });
    return os(n);
  }
  async getRecentTransactions(s) {
    const n = "https://api-amoy.polygonscan.com/api", d = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await it.get(n, {
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
    z(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", Da],
      ["MATIC", Fa],
      ["TVWT", Ba]
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
z(Ie, "instance");
let Et = Ie;
function Ua() {
  const [t, e] = v.useState("/imgs/logos/logo.svg");
  return {
    logoPath: t
  };
}
function La({
  size: t = 32,
  className: e = ""
}) {
  const [s, n] = v.useState("");
  return v.useEffect(() => {
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
function Qa({
  size: t = 32,
  className: e,
  type: s = "spin",
  fullscreen: n = !1
}) {
  Ua();
  const [o, d] = v.useState(!1);
  v.useEffect(() => (d(!0), () => d(!1)), []);
  const a = s === "breathe" ? /* @__PURE__ */ u.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ u.jsx(La, { className: P(
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
  return n && o ? an.createPortal(
    /* @__PURE__ */ u.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: a }),
    document.body
  ) : a;
}
const mn = v.forwardRef(
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
mn.displayName = "Textarea";
var yn = /* @__PURE__ */ ((t) => (t.PURCHASE = "PURCHASE", t.SELL = "SELL", t.TRANSFER = "TRANSFER", t.SWAP = "SWAP", t.INVITE_TRANSFER = "INVITE_TRANSFER", t))(yn || {}), Nt = /* @__PURE__ */ ((t) => (t.PASSPORT = "PASSPORT", t.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", t))(Nt || {});
class us {
  constructor(e) {
    z(this, "config");
    if (this.constructor === us)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = e;
  }
}
it.defaults.withCredentials = !0;
const xe = it.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
xe.interceptors.response.use(
  (t) => t,
  async (t) => {
    var e, s;
    if (((e = t.response) == null ? void 0 : e.status) === 401 || ((s = t.response) == null ? void 0 : s.status) === 403) {
      const n = t.response.data.message || "Authentication error";
      console.log(`${n}, redirecting to login...`), V.clearAllAuthData(), typeof window < "u" && (ve.error(n), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(t);
  }
);
class za extends us {
  constructor() {
    super({
      serviceType: Nt.WEB3AUTH_WITH_MPC
    });
    z(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: s
  }) {
    const { data: n } = await xe.post("/keymanagement/signup", {
      username: s
    }), { address: o, displayName: d, avatarIndex: f } = n;
    V.saveAuthDataByKey("address", o), V.saveAuthDataByKey("username", s), V.saveAuthDataByKey("avatarIndex", f), d ? V.saveAuthDataByKey("displayName", d) : V.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: s }) {
    const { data: n } = await xe.post("/keymanagement/signin", {
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
      transactionId: l,
      // not used
      transactionPayload: h,
      userEmail: y,
      toEmail: m
    } } = await xe.post("/transaction/sign", {
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
      transactionId: l
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
    } } = await xe.post("/transaction/verify-to-sign", {
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
    const n = this.coreKitInstance, o = ja(s), d = new Ra({ config: { chainConfig: o } });
    d.setupProvider(Ta(n));
    const f = Na({
      chain: Ut(s),
      transport: ws(d)
    }), p = mt({
      chain: Ut(s),
      transport: ws(d)
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
    await xe.post("/keymanagement/test-mpc");
  }
}
class _a {
  static getService(e) {
    switch (e) {
      case Nt.WEB3AUTH_WITH_MPC:
        return new za();
      default:
        throw new Error(`Unsupported service type: ${e}`);
    }
  }
}
const qa = Nt.WEB3AUTH_WITH_MPC, Ha = _a.getService(qa), Wa = ta, Ka = sa, $a = v.forwardRef(({ className: t, inset: e, children: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Ks,
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
      /* @__PURE__ */ u.jsx(ha, { className: "ml-auto h-4 w-4" })
    ]
  }
));
$a.displayName = Ks.displayName;
const Va = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  $s,
  {
    ref: s,
    className: P(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
Va.displayName = $s.displayName;
const gn = v.forwardRef(({ className: t, sideOffset: e = 4, ...s }, n) => /* @__PURE__ */ u.jsx(ea, { children: /* @__PURE__ */ u.jsx(
  Vs,
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
gn.displayName = Vs.displayName;
const bn = v.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Gs,
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
bn.displayName = Gs.displayName;
const Ga = v.forwardRef(({ className: t, children: e, checked: s, ...n }, o) => /* @__PURE__ */ u.jsxs(
  Ys,
  {
    ref: o,
    className: P(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: s,
    ...n,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Xs, { children: /* @__PURE__ */ u.jsx(fa, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Ga.displayName = Ys.displayName;
const Ya = v.forwardRef(({ className: t, children: e, ...s }, n) => /* @__PURE__ */ u.jsxs(
  Zs,
  {
    ref: n,
    className: P(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...s,
    children: [
      /* @__PURE__ */ u.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ u.jsx(Xs, { children: /* @__PURE__ */ u.jsx(pa, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Ya.displayName = Zs.displayName;
const Xa = v.forwardRef(({ className: t, inset: e, ...s }, n) => /* @__PURE__ */ u.jsx(
  Js,
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
Xa.displayName = Js.displayName;
const Za = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  en,
  {
    ref: s,
    className: P("-mx-1 my-1 h-px bg-muted", t),
    ...e
  }
));
Za.displayName = en.displayName;
function Ja(t, e) {
  const [s, n] = v.useState(t);
  return v.useEffect(() => {
    const o = setTimeout(() => {
      n(t);
    }, e);
    return () => {
      clearTimeout(o);
    };
  }, [t, e]), s;
}
const er = Et.getInstance().getAllTokenTypes();
function tr({
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
  const [i, r] = v.useState(""), [l, h] = v.useState(""), [y, m] = v.useState(""), [g, b] = v.useState(!1), [E, S] = v.useState(""), x = v.useRef(), [C, R] = v.useState(o), [I, B] = v.useState("0"), [M, T] = v.useState(""), [_, F] = v.useState(!1), [te, we] = v.useState(!1), [W, K] = v.useState(!1), [re, Y] = v.useState(!1), [fe, se] = v.useState(""), [q, ie] = v.useState(""), [Ee, ce] = v.useState(""), { t: Q } = is(), He = Ja(l, 800);
  v.useEffect(() => {
    ue("open", t, "address", n), t ? ot() : Mt();
  }, [d, f, p, t]), v.useEffect(() => {
    i && l && te && (ys(), ms(), we(!1));
  }, [i, l, te, t]), v.useEffect(() => {
    !t && a && a();
  }, [t]), v.useEffect(() => {
    He && !Se && !_ && gs();
  }, [He]);
  const ot = async () => {
    await gt(o), d && r(d), f && h(f), p && m(p), we(!0);
  }, Se = v.useMemo(() => !i || !l || g || !re || W || !!q && q !== Q("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(l) > parseFloat(I) || _, [i, l, g, re, W, q, I, _]), gt = async (O) => {
    h(""), F(!1), T(""), ce(""), R(O);
    const $ = Et.getInstance().createToken(O);
    x.current = $, S(x.current.symbol);
    let ne = await x.current.getBalance(n);
    ne = Bt(ne), B(ne);
  }, qn = async (O) => {
    if (Cs(i))
      Y(!0), se(""), ie("");
    else {
      K(!0), ie("");
      try {
        const $ = await xe.get("/address/", {
          params: { email: O }
        });
        $.data.success ? (Y(!0), se($.data.address)) : As.test(O) ? (Y(!0), se(""), ie(Q("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (Y(!1), se(""), ie(Q("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        K(!1);
      }
    }
  }, ms = () => {
    ue("to", i), i ? (qn(i), l && gs()) : (Y(!1), se(""), ie(""));
  };
  async function Hn(O) {
    try {
      const $ = jt(l).toString();
      ue("amt", $), b(!0);
      const {
        needOtp: ne,
        hash: bs,
        message: Yn
      } = await Ha.signTransaction({
        toAddress: O,
        amount: $,
        token: C,
        note: y,
        transactionType: yn.TRANSFER
      });
      bs ? (e(!1), Kn(bs)) : ne && (ve.error(Yn), e(!1));
    } catch ($) {
      const ne = wt($);
      ue("errorInfo", ne), ve.error(ne.message);
    } finally {
      b(!1);
    }
  }
  const Wn = (O) => {
    var ne;
    const $ = `${(ne = x.current) == null ? void 0 : ne.openUrl}/${O}`;
    window.open($, "_blank");
  }, Kn = (O) => {
    ve(
      /* @__PURE__ */ u.jsx("div", { className: "w-full", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ u.jsx(Dt, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ u.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ u.jsx(
            Ct,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Wn(O);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, $n = async () => {
    if (!Se)
      try {
        b(!0);
        let O, $;
        if (Cs(i))
          O = i;
        else if (As.test(i) && q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          $ = i;
          const ne = await xe.post("/invite/invite-register", {
            toEmail: $,
            from: n,
            amount: jt(l).toString(),
            token: C,
            note: y
          });
          ue("res", ne), ve.success(Q("/dashboard.[token].sendModal.emailSentToUnregistered")), Mt(), e(!1);
          return;
        } else
          O = fe;
        await Hn(O), Mt(), e(!1);
      } catch (O) {
        const $ = wt(O);
        ue("errorInfo", $), ve.error(Q("/dashboard.[token].sendModal.sendError"));
      } finally {
        b(!1);
      }
  }, ys = async () => {
    parseFloat(l) > parseFloat(I) ? ce("Amount exceeded") : ce("");
  }, gs = async () => {
    if (l && !Se) {
      F(!0);
      try {
        ue("checkEstimatedFee", l);
        const O = await Ia(C, {
          to: n,
          amount: jt(l)
        }, n);
        T(O ? O.feeInTokens.toString() : "");
      } catch (O) {
        ue("Failed to get estimated fee:", O), T("");
      } finally {
        F(!1);
      }
    }
  }, Mt = () => {
    h(""), r(""), m(""), se(""), ie(""), Y(!1), K(!1), T("");
  }, Vn = async (O) => {
    h(O.target.value.trim()), parseFloat(l) > parseFloat(I) ? ce("Amount exceeded") : ce("");
  }, Gn = t ? /* @__PURE__ */ u.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
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
            children: /* @__PURE__ */ u.jsx(on, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs("form", { children: [
        /* @__PURE__ */ u.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Qt,
              {
                value: i,
                onChange: (O) => r(O.target.value.trim()),
                onBlur: ms,
                id: "to",
                required: !0,
                placeholder: Q("/dashboard.[token].sendModal.toPlaceholder"),
                className: P(
                  re && "border-green-500",
                  q && "border-destructive",
                  q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            W && /* @__PURE__ */ u.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsx(ma, { className: "animate-spin", size: 16 }) }),
            re && !W && !q && /* @__PURE__ */ u.jsx(Dt, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            q && !W && /* @__PURE__ */ u.jsx(ln, { className: P(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          re && fe && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-primary/60", children: fe }),
          q && /* @__PURE__ */ u.jsx("p", { className: P(
            "mt-1 text-xs text-destructive",
            q === Q("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: q })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ u.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ u.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ u.jsx(
              Qt,
              {
                value: l,
                onChange: Vn,
                type: "number",
                id: "amount",
                className: "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                required: !0,
                onBlur: ys
              }
            ),
            /* @__PURE__ */ u.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ u.jsxs(Wa, { children: [
              /* @__PURE__ */ u.jsxs(Ka, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ u.jsx("span", { className: "font-medium text-sm", children: C }),
                /* @__PURE__ */ u.jsx(ya, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ u.jsx(gn, { align: "start", className: "bg-white", children: er.map((O) => /* @__PURE__ */ u.jsx(bn, { onClick: () => gt(O), children: O }, O)) })
            ] }) })
          ] }),
          Ee && /* @__PURE__ */ u.jsx("p", { className: "mt-1 text-xs text-destructive", children: Ee })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ u.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          _ ? /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(ga, { className: "animate-spin", size: 14 }) }) : M ? /* @__PURE__ */ u.jsxs("span", { className: "text-black", children: [
            "~ ",
            M,
            " ",
            E === "TVWT" ? "MATIC" : E
          ] }) : /* @__PURE__ */ u.jsx("span", { className: "text-black", children: "-" })
        ] }),
        M && /* @__PURE__ */ u.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ u.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ u.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ u.jsxs("span", { className: "text-black", children: [
            Bt(I),
            " ",
            E
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ u.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: Q("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ u.jsx("div", { className: "relative", children: /* @__PURE__ */ u.jsx(
            mn,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: y,
              onChange: (O) => m(O.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ u.jsx(
        Ct,
        {
          onClick: $n,
          className: P("py-12px"),
          disabled: Se,
          children: g ? /* @__PURE__ */ u.jsx("div", { className: "", children: /* @__PURE__ */ u.jsx(Qa, {}) }) : /* @__PURE__ */ u.jsx("span", { children: Q("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return rn.createPortal(
      Gn,
      document.body
    );
}
const sr = na, vn = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  tn,
  {
    ref: s,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
vn.displayName = tn.displayName;
const zt = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  sn,
  {
    ref: s,
    className: P(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
zt.displayName = sn.displayName;
const _t = v.forwardRef(({ className: t, ...e }, s) => /* @__PURE__ */ u.jsx(
  nn,
  {
    ref: s,
    className: P(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
_t.displayName = nn.displayName;
var nr = Object.defineProperty, St = Object.getOwnPropertySymbols, xn = Object.prototype.hasOwnProperty, wn = Object.prototype.propertyIsEnumerable, Rs = (t, e, s) => e in t ? nr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, qt = (t, e) => {
  for (var s in e || (e = {}))
    xn.call(e, s) && Rs(t, s, e[s]);
  if (St)
    for (var s of St(e))
      wn.call(e, s) && Rs(t, s, e[s]);
  return t;
}, Ht = (t, e) => {
  var s = {};
  for (var n in t)
    xn.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && St)
    for (var n of St(t))
      e.indexOf(n) < 0 && wn.call(t, n) && (s[n] = t[n]);
  return s;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var _e;
((t) => {
  const e = class N {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(a, i, r, l) {
      if (this.version = a, this.errorCorrectionLevel = i, this.modules = [], this.isFunction = [], a < N.MIN_VERSION || a > N.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (l < -1 || l > 7)
        throw new RangeError("Mask value out of range");
      this.size = a * 4 + 17;
      let h = [];
      for (let m = 0; m < this.size; m++)
        h.push(!1);
      for (let m = 0; m < this.size; m++)
        this.modules.push(h.slice()), this.isFunction.push(h.slice());
      this.drawFunctionPatterns();
      const y = this.addEccAndInterleave(r);
      if (this.drawCodewords(y), l == -1) {
        let m = 1e9;
        for (let g = 0; g < 8; g++) {
          this.applyMask(g), this.drawFormatBits(g);
          const b = this.getPenaltyScore();
          b < m && (l = g, m = b), this.applyMask(g);
        }
      }
      o(0 <= l && l <= 7), this.mask = l, this.applyMask(l), this.drawFormatBits(l), this.isFunction = [];
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
    static encodeSegments(a, i, r = 1, l = 40, h = -1, y = !0) {
      if (!(N.MIN_VERSION <= r && r <= l && l <= N.MAX_VERSION) || h < -1 || h > 7)
        throw new RangeError("Invalid value");
      let m, g;
      for (m = r; ; m++) {
        const x = N.getNumDataCodewords(m, i) * 8, C = f.getTotalBits(a, m);
        if (C <= x) {
          g = C;
          break;
        }
        if (m >= l)
          throw new RangeError("Data too long");
      }
      for (const x of [N.Ecc.MEDIUM, N.Ecc.QUARTILE, N.Ecc.HIGH])
        y && g <= N.getNumDataCodewords(m, x) * 8 && (i = x);
      let b = [];
      for (const x of a) {
        s(x.mode.modeBits, 4, b), s(x.numChars, x.mode.numCharCountBits(m), b);
        for (const C of x.getData())
          b.push(C);
      }
      o(b.length == g);
      const E = N.getNumDataCodewords(m, i) * 8;
      o(b.length <= E), s(0, Math.min(4, E - b.length), b), s(0, (8 - b.length % 8) % 8, b), o(b.length % 8 == 0);
      for (let x = 236; b.length < E; x ^= 253)
        s(x, 8, b);
      let S = [];
      for (; S.length * 8 < b.length; )
        S.push(0);
      return b.forEach((x, C) => S[C >>> 3] |= x << 7 - (C & 7)), new N(m, i, S, h);
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
        for (let l = 0; l < i; l++)
          r == 0 && l == 0 || r == 0 && l == i - 1 || r == i - 1 && l == 0 || this.drawAlignmentPattern(a[r], a[l]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(a) {
      const i = this.errorCorrectionLevel.formatBits << 3 | a;
      let r = i;
      for (let h = 0; h < 10; h++)
        r = r << 1 ^ (r >>> 9) * 1335;
      const l = (i << 10 | r) ^ 21522;
      o(l >>> 15 == 0);
      for (let h = 0; h <= 5; h++)
        this.setFunctionModule(8, h, n(l, h));
      this.setFunctionModule(8, 7, n(l, 6)), this.setFunctionModule(8, 8, n(l, 7)), this.setFunctionModule(7, 8, n(l, 8));
      for (let h = 9; h < 15; h++)
        this.setFunctionModule(14 - h, 8, n(l, h));
      for (let h = 0; h < 8; h++)
        this.setFunctionModule(this.size - 1 - h, 8, n(l, h));
      for (let h = 8; h < 15; h++)
        this.setFunctionModule(8, this.size - 15 + h, n(l, h));
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
        const l = n(i, r), h = this.size - 11 + r % 3, y = Math.floor(r / 3);
        this.setFunctionModule(h, y, l), this.setFunctionModule(y, h, l);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(a, i) {
      for (let r = -4; r <= 4; r++)
        for (let l = -4; l <= 4; l++) {
          const h = Math.max(Math.abs(l), Math.abs(r)), y = a + l, m = i + r;
          0 <= y && y < this.size && 0 <= m && m < this.size && this.setFunctionModule(y, m, h != 2 && h != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(a, i) {
      for (let r = -2; r <= 2; r++)
        for (let l = -2; l <= 2; l++)
          this.setFunctionModule(a + l, i + r, Math.max(Math.abs(l), Math.abs(r)) != 1);
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
      const l = N.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][i], h = N.ECC_CODEWORDS_PER_BLOCK[r.ordinal][i], y = Math.floor(N.getNumRawDataModules(i) / 8), m = l - y % l, g = Math.floor(y / l);
      let b = [];
      const E = N.reedSolomonComputeDivisor(h);
      for (let x = 0, C = 0; x < l; x++) {
        let R = a.slice(C, C + g - h + (x < m ? 0 : 1));
        C += R.length;
        const I = N.reedSolomonComputeRemainder(R, E);
        x < m && R.push(0), b.push(R.concat(I));
      }
      let S = [];
      for (let x = 0; x < b[0].length; x++)
        b.forEach((C, R) => {
          (x != g - h || R >= m) && S.push(C[x]);
        });
      return o(S.length == y), S;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(a) {
      if (a.length != Math.floor(N.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let i = 0;
      for (let r = this.size - 1; r >= 1; r -= 2) {
        r == 6 && (r = 5);
        for (let l = 0; l < this.size; l++)
          for (let h = 0; h < 2; h++) {
            const y = r - h, g = (r + 1 & 2) == 0 ? this.size - 1 - l : l;
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
          let l;
          switch (a) {
            case 0:
              l = (r + i) % 2 == 0;
              break;
            case 1:
              l = i % 2 == 0;
              break;
            case 2:
              l = r % 3 == 0;
              break;
            case 3:
              l = (r + i) % 3 == 0;
              break;
            case 4:
              l = (Math.floor(r / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              l = r * i % 2 + r * i % 3 == 0;
              break;
            case 6:
              l = (r * i % 2 + r * i % 3) % 2 == 0;
              break;
            case 7:
              l = ((r + i) % 2 + r * i % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][r] && l && (this.modules[i][r] = !this.modules[i][r]);
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
      const r = this.size * this.size, l = Math.ceil(Math.abs(i * 20 - r * 10) / r) - 1;
      return o(0 <= l && l <= 9), a += l * N.PENALTY_N4, o(0 <= a && a <= 2568888), a;
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
        for (let l = this.size - 7; r.length < a; l -= i)
          r.splice(1, 0, l);
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
      for (let l = 0; l < a - 1; l++)
        i.push(0);
      i.push(1);
      let r = 1;
      for (let l = 0; l < a; l++) {
        for (let h = 0; h < i.length; h++)
          i[h] = N.reedSolomonMultiply(i[h], r), h + 1 < i.length && (i[h] ^= i[h + 1]);
        r = N.reedSolomonMultiply(r, 2);
      }
      return i;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(a, i) {
      let r = i.map((l) => 0);
      for (const l of a) {
        const h = l ^ r.shift();
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
      for (let l = 7; l >= 0; l--)
        r = r << 1 ^ (r >>> 7) * 285, r ^= (i >>> l & 1) * a;
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
        const l = Math.min(a.length - r, 3);
        s(parseInt(a.substring(r, r + l), 10), l * 3 + 1, i), r += l;
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
        let l = U.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r)) * 45;
        l += U.ALPHANUMERIC_CHARSET.indexOf(a.charAt(r + 1)), s(l, 11, i);
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
      for (const l of a) {
        const h = l.mode.numCharCountBits(i);
        if (l.numChars >= 1 << h)
          return 1 / 0;
        r += 4 + h + l.bitData.length;
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
var ar = {
  L: We.QrCode.Ecc.LOW,
  M: We.QrCode.Ecc.MEDIUM,
  Q: We.QrCode.Ecc.QUARTILE,
  H: We.QrCode.Ecc.HIGH
}, Cn = 128, En = "L", Sn = "#FFFFFF", An = "#000000", Rn = !1, Tn = 1, rr = 4, ir = 0, or = 0.1;
function Nn(t, e = 0) {
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
function Pn(t, e) {
  return t.slice().map((s, n) => n < e.y || n >= e.y + e.h ? s : s.map((o, d) => d < e.x || d >= e.x + e.w ? o : !1));
}
function lr(t, e, s, n) {
  if (n == null)
    return null;
  const o = t.length + s * 2, d = Math.floor(e * or), f = o / e, p = (n.width || d) * f, a = (n.height || d) * f, i = n.x == null ? t.length / 2 - p / 2 : n.x * f, r = n.y == null ? t.length / 2 - a / 2 : n.y * f, l = n.opacity == null ? 1 : n.opacity;
  let h = null;
  if (n.excavate) {
    let m = Math.floor(i), g = Math.floor(r), b = Math.ceil(p + i - m), E = Math.ceil(a + r - g);
    h = { x: m, y: g, w: b, h: E };
  }
  const y = n.crossOrigin;
  return { x: i, y: r, h: a, w: p, excavation: h, opacity: l, crossOrigin: y };
}
function cr(t, e) {
  return e != null ? Math.max(Math.floor(e), 0) : t ? rr : ir;
}
function Mn({
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
    const m = (Array.isArray(t) ? t : [t]).reduce((g, b) => (g.push(...We.QrSegment.makeSegments(b)), g), []);
    return We.QrCode.encodeSegments(
      m,
      ar[e],
      s,
      void 0,
      void 0,
      p
    );
  }, [t, e, s, p]);
  const { cells: i, margin: r, numCells: l, calculatedImageSettings: h } = H.useMemo(() => {
    let y = a.getModules();
    const m = cr(n, o), g = y.length + m * 2, b = lr(
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
    numCells: l,
    calculatedImageSettings: h
  };
}
var ur = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), dr = H.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = Cn,
      level: f = En,
      bgColor: p = Sn,
      fgColor: a = An,
      includeMargin: i = Rn,
      minVersion: r = Tn,
      boostLevel: l,
      marginSize: h,
      imageSettings: y
    } = n, g = Ht(n, [
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
    ]), { style: b } = g, E = Ht(g, ["style"]), S = y == null ? void 0 : y.src, x = H.useRef(null), C = H.useRef(null), R = H.useCallback(
      (W) => {
        x.current = W, typeof s == "function" ? s(W) : s && (s.current = W);
      },
      [s]
    ), [I, B] = H.useState(!1), { margin: M, cells: T, numCells: _, calculatedImageSettings: F } = Mn({
      value: o,
      level: f,
      minVersion: r,
      boostLevel: l,
      includeMargin: i,
      marginSize: h,
      imageSettings: y,
      size: d
    });
    H.useEffect(() => {
      if (x.current != null) {
        const W = x.current, K = W.getContext("2d");
        if (!K)
          return;
        let re = T;
        const Y = C.current, fe = F != null && Y !== null && Y.complete && Y.naturalHeight !== 0 && Y.naturalWidth !== 0;
        fe && F.excavation != null && (re = Pn(
          T,
          F.excavation
        ));
        const se = window.devicePixelRatio || 1;
        W.height = W.width = d * se;
        const q = d / _ * se;
        K.scale(q, q), K.fillStyle = p, K.fillRect(0, 0, _, _), K.fillStyle = a, ur ? K.fill(new Path2D(Nn(re, M))) : T.forEach(function(ie, Ee) {
          ie.forEach(function(ce, Q) {
            ce && K.fillRect(Q + M, Ee + M, 1, 1);
          });
        }), F && (K.globalAlpha = F.opacity), fe && K.drawImage(
          Y,
          F.x + M,
          F.y + M,
          F.w,
          F.h
        );
      }
    }), H.useEffect(() => {
      B(!1);
    }, [S]);
    const te = qt({ height: d, width: d }, b);
    let we = null;
    return S != null && (we = /* @__PURE__ */ H.createElement(
      "img",
      {
        src: S,
        key: S,
        style: { display: "none" },
        onLoad: () => {
          B(!0);
        },
        ref: C,
        crossOrigin: F == null ? void 0 : F.crossOrigin
      }
    )), /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(
      "canvas",
      qt({
        style: te,
        height: d,
        width: d,
        ref: R,
        role: "img"
      }, E)
    ), we);
  }
);
dr.displayName = "QRCodeCanvas";
var Wt = H.forwardRef(
  function(e, s) {
    const n = e, {
      value: o,
      size: d = Cn,
      level: f = En,
      bgColor: p = Sn,
      fgColor: a = An,
      includeMargin: i = Rn,
      minVersion: r = Tn,
      boostLevel: l,
      title: h,
      marginSize: y,
      imageSettings: m
    } = n, g = Ht(n, [
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
    ]), { margin: b, cells: E, numCells: S, calculatedImageSettings: x } = Mn({
      value: o,
      level: f,
      minVersion: r,
      boostLevel: l,
      includeMargin: i,
      marginSize: y,
      imageSettings: m,
      size: d
    });
    let C = E, R = null;
    m != null && x != null && (x.excavation != null && (C = Pn(
      E,
      x.excavation
    )), R = /* @__PURE__ */ H.createElement(
      "image",
      {
        href: m.src,
        height: x.h,
        width: x.w,
        x: x.x + b,
        y: x.y + b,
        preserveAspectRatio: "none",
        opacity: x.opacity,
        crossOrigin: x.crossOrigin
      }
    ));
    const I = Nn(C, b);
    return /* @__PURE__ */ H.createElement(
      "svg",
      qt({
        height: d,
        width: d,
        viewBox: `0 0 ${S} ${S}`,
        ref: s,
        role: "img"
      }, g),
      !!h && /* @__PURE__ */ H.createElement("title", null, h),
      /* @__PURE__ */ H.createElement(
        "path",
        {
          fill: p,
          d: `M0,0 h${S}v${S}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ H.createElement("path", { fill: a, d: I, shapeRendering: "crispEdges" }),
      R
    );
  }
);
Wt.displayName = "QRCodeSVG";
function hr({
  address: t,
  open: e,
  setOpen: s,
  onClose: n
}) {
  const { t: o } = is(), [d, f] = v.useState("");
  v.useEffect(() => {
    const { username: i } = V.all();
    f(i);
  }, []);
  const p = async () => {
    try {
      const i = document.querySelector("#qr-code-svg");
      if (!i) return;
      const r = i.querySelector("image");
      if (r) {
        const g = r.getAttribute("href") || "", E = await (await fetch(g)).blob(), S = await new Promise((x) => {
          const C = new FileReader();
          C.onloadend = () => x(C.result), C.readAsDataURL(E);
        });
        r.setAttribute("href", S);
      }
      const l = new XMLSerializer().serializeToString(i), h = new Blob([l], { type: "image/svg+xml;charset=utf-8" }), y = URL.createObjectURL(h), m = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((g, b) => {
        const E = new Image();
        E.onload = () => {
          const S = document.createElement("canvas"), x = S.getContext("2d");
          S.width = E.width, S.height = E.height, x == null || x.drawImage(E, 0, 0), m ? S.toBlob(async (C) => {
            if (C)
              try {
                if (navigator.share) {
                  const R = new File([C], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [R],
                    title: "QR Code"
                  });
                } else {
                  const R = URL.createObjectURL(C), I = document.createElement("a");
                  I.href = R, I.download = "qrcode.png", document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(R);
                }
                ve.success(o("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), g(null);
              } catch (R) {
                b(R);
              }
          }, "image/png") : S.toBlob(async (C) => {
            if (C)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": C })
                ]), ve.success(o("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), g(null);
              } catch (R) {
                b(R);
              }
          }, "image/png");
        }, E.onerror = b, E.src = y;
      });
    } catch (i) {
      ve.error(i.message);
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
            children: /* @__PURE__ */ u.jsx(on, {})
          }
        )
      ] }),
      /* @__PURE__ */ u.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ u.jsxs(sr, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ u.jsxs(vn, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ u.jsx(
            zt,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ u.jsx(
            zt,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: o("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ u.jsxs(_t, { value: "crypto", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(Lt, { address: t, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Wt,
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
        /* @__PURE__ */ u.jsxs(_t, { value: "email", children: [
          /* @__PURE__ */ u.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ u.jsx(Lt, { address: d, iconSize: 14 }) }),
          /* @__PURE__ */ u.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ u.jsx(
            Wt,
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
      /* @__PURE__ */ u.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ u.jsx(Ct, { onClick: p, children: "Share QR code" }) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return rn.createPortal(
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
}, qe = typeof window > "u" || "Deno" in globalThis;
function le() {
}
function fr(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Kt(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function kn(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function Ke(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function he(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ts(t, e) {
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
      if (e.queryHash !== ds(f, e.options))
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
function Ns(t, e) {
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
function ds(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || ct)(t);
}
function ct(t) {
  return JSON.stringify(
    t,
    (e, s) => Gt(s) ? Object.keys(s).sort().reduce((n, o) => (n[o] = s[o], n), {}) : s
  );
}
function ut(t, e) {
  return t === e ? !0 : typeof t != typeof e ? !1 : t && e && typeof t == "object" && typeof e == "object" ? !Object.keys(e).some((s) => !ut(t[s], e[s])) : !1;
}
function $t(t, e) {
  if (t === e)
    return t;
  const s = Ps(t) && Ps(e);
  if (s || Gt(t) && Gt(e)) {
    const n = s ? t : Object.keys(t), o = n.length, d = s ? e : Object.keys(e), f = d.length, p = s ? [] : {};
    let a = 0;
    for (let i = 0; i < f; i++) {
      const r = s ? i : d[i];
      (!s && n.includes(r) || s) && t[r] === void 0 && e[r] === void 0 ? (p[r] = void 0, a++) : (p[r] = $t(t[r], e[r]), p[r] === t[r] && t[r] !== void 0 && a++);
    }
    return o === f && a === o ? t : p;
  }
  return e;
}
function Vt(t, e) {
  if (!e || Object.keys(t).length !== Object.keys(e).length)
    return !1;
  for (const s in t)
    if (t[s] !== e[s])
      return !1;
  return !0;
}
function Ps(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function Gt(t) {
  if (!Ms(t))
    return !1;
  const e = t.constructor;
  if (e === void 0)
    return !0;
  const s = e.prototype;
  return !(!Ms(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(t) !== Object.prototype);
}
function Ms(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function pr(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function Yt(t, e, s) {
  if (typeof s.structuralSharing == "function")
    return s.structuralSharing(t, e);
  if (s.structuralSharing !== !1) {
    if (ze.env.NODE_ENV !== "production")
      try {
        return $t(t, e);
      } catch (n) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${s.queryHash}]: ${n}`
        );
      }
    return $t(t, e);
  }
  return e;
}
function mr(t, e, s = 0) {
  const n = [...t, e];
  return s && n.length > s ? n.slice(1) : n;
}
function yr(t, e, s = 0) {
  const n = [e, ...t];
  return s && n.length > s ? n.slice(0, -1) : n;
}
var At = Symbol();
function jn(t, e) {
  return ze.env.NODE_ENV !== "production" && t.queryFn === At && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${t.queryHash}'`
  ), !t.queryFn && (e != null && e.initialPromise) ? () => e.initialPromise : !t.queryFn || t.queryFn === At ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)) : t.queryFn;
}
var Oe, Re, $e, Bs, gr = (Bs = class extends yt {
  constructor() {
    super();
    A(this, Oe);
    A(this, Re);
    A(this, $e);
    w(this, $e, (e) => {
      if (!qe && window.addEventListener) {
        const s = () => e();
        return window.addEventListener("visibilitychange", s, !1), () => {
          window.removeEventListener("visibilitychange", s);
        };
      }
    });
  }
  onSubscribe() {
    c(this, Re) || this.setEventListener(c(this, $e));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = c(this, Re)) == null || e.call(this), w(this, Re, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, $e, e), (s = c(this, Re)) == null || s.call(this), w(this, Re, e((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(e) {
    c(this, Oe) !== e && (w(this, Oe, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((s) => {
      s(e);
    });
  }
  isFocused() {
    var e;
    return typeof c(this, Oe) == "boolean" ? c(this, Oe) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Oe = new WeakMap(), Re = new WeakMap(), $e = new WeakMap(), Bs), hs = new gr(), Ve, Te, Ge, Us, br = (Us = class extends yt {
  constructor() {
    super();
    A(this, Ve, !0);
    A(this, Te);
    A(this, Ge);
    w(this, Ge, (e) => {
      if (!qe && window.addEventListener) {
        const s = () => e(!0), n = () => e(!1);
        return window.addEventListener("online", s, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", s), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    c(this, Te) || this.setEventListener(c(this, Ge));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = c(this, Te)) == null || e.call(this), w(this, Te, void 0));
  }
  setEventListener(e) {
    var s;
    w(this, Ge, e), (s = c(this, Te)) == null || s.call(this), w(this, Te, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    c(this, Ve) !== e && (w(this, Ve, e), this.listeners.forEach((n) => {
      n(e);
    }));
  }
  isOnline() {
    return c(this, Ve);
  }
}, Ve = new WeakMap(), Te = new WeakMap(), Ge = new WeakMap(), Us), Rt = new br();
function Xt() {
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
function vr(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function In(t) {
  return (t ?? "online") === "online" ? Rt.isOnline() : !0;
}
var On = class extends Error {
  constructor(t) {
    super("CancelledError"), this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
  }
};
function It(t) {
  return t instanceof On;
}
function Dn(t) {
  let e = !1, s = 0, n = !1, o;
  const d = Xt(), f = (g) => {
    var b;
    n || (h(new On(g)), (b = t.abort) == null || b.call(t));
  }, p = () => {
    e = !0;
  }, a = () => {
    e = !1;
  }, i = () => hs.isFocused() && (t.networkMode === "always" || Rt.isOnline()) && t.canRun(), r = () => In(t.networkMode) && t.canRun(), l = (g) => {
    var b;
    n || (n = !0, (b = t.onSuccess) == null || b.call(t, g), o == null || o(), d.resolve(g));
  }, h = (g) => {
    var b;
    n || (n = !0, (b = t.onError) == null || b.call(t, g), o == null || o(), d.reject(g));
  }, y = () => new Promise((g) => {
    var b;
    o = (E) => {
      (n || i()) && g(E);
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
    } catch (E) {
      g = Promise.reject(E);
    }
    Promise.resolve(g).then(l).catch((E) => {
      var I;
      if (n)
        return;
      const S = t.retry ?? (qe ? 0 : 3), x = t.retryDelay ?? vr, C = typeof x == "function" ? x(s, E) : x, R = S === !0 || typeof S == "number" && s < S || typeof S == "function" && S(s, E);
      if (e || !R) {
        h(E);
        return;
      }
      s++, (I = t.onFail) == null || I.call(t, s, E), pr(C).then(() => i() ? void 0 : y()).then(() => {
        e ? h(E) : m();
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
function xr() {
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
var G = xr(), De, Ls, Fn = (Ls = class {
  constructor() {
    A(this, De);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Kt(this.gcTime) && w(this, De, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(t) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      t ?? (qe ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    c(this, De) && (clearTimeout(c(this, De)), w(this, De, void 0));
  }
}, De = new WeakMap(), Ls), Ye, Xe, oe, X, dt, Fe, de, Ce, Qs, wr = (Qs = class extends Fn {
  constructor(e) {
    super();
    A(this, de);
    A(this, Ye);
    A(this, Xe);
    A(this, oe);
    A(this, X);
    A(this, dt);
    A(this, Fe);
    w(this, Fe, !1), w(this, dt, e.defaultOptions), this.setOptions(e.options), this.observers = [], w(this, oe, e.cache), this.queryKey = e.queryKey, this.queryHash = e.queryHash, w(this, Ye, Cr(this.options)), this.state = e.state ?? c(this, Ye), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var e;
    return (e = c(this, X)) == null ? void 0 : e.promise;
  }
  setOptions(e) {
    this.options = { ...c(this, dt), ...e }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && c(this, oe).remove(this);
  }
  setData(e, s) {
    const n = Yt(this.state.data, e, this.options);
    return k(this, de, Ce).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), n;
  }
  setState(e, s) {
    k(this, de, Ce).call(this, { type: "setState", state: e, setStateOptions: s });
  }
  cancel(e) {
    var n, o;
    const s = (n = c(this, X)) == null ? void 0 : n.promise;
    return (o = c(this, X)) == null || o.cancel(e), s ? s.then(le).catch(le) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(c(this, Ye));
  }
  isActive() {
    return this.observers.some(
      (e) => he(e.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === At || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (e) => e.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(e = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !kn(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    var s;
    const e = this.observers.find((n) => n.shouldFetchOnWindowFocus());
    e == null || e.refetch({ cancelRefetch: !1 }), (s = c(this, X)) == null || s.continue();
  }
  onOnline() {
    var s;
    const e = this.observers.find((n) => n.shouldFetchOnReconnect());
    e == null || e.refetch({ cancelRefetch: !1 }), (s = c(this, X)) == null || s.continue();
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), c(this, oe).notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter((s) => s !== e), this.observers.length || (c(this, X) && (c(this, Fe) ? c(this, X).cancel({ revert: !0 }) : c(this, X).cancelRetry()), this.scheduleGc()), c(this, oe).notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || k(this, de, Ce).call(this, { type: "invalidate" });
  }
  fetch(e, s) {
    var a, i, r;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (c(this, X))
        return c(this, X).continueRetry(), c(this, X).promise;
    }
    if (e && this.setOptions(e), !this.options.queryFn) {
      const l = this.observers.find((h) => h.options.queryFn);
      l && this.setOptions(l.options);
    }
    ze.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), o = (l) => {
      Object.defineProperty(l, "signal", {
        enumerable: !0,
        get: () => (w(this, Fe, !0), n.signal)
      });
    }, d = () => {
      const l = jn(this.options, s), h = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(h), w(this, Fe, !1), this.options.persister ? this.options.persister(
        l,
        h,
        this
      ) : l(h);
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
    ), w(this, Xe, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = f.fetchOptions) == null ? void 0 : i.meta)) && k(this, de, Ce).call(this, { type: "fetch", meta: (r = f.fetchOptions) == null ? void 0 : r.meta });
    const p = (l) => {
      var h, y, m, g;
      It(l) && l.silent || k(this, de, Ce).call(this, {
        type: "error",
        error: l
      }), It(l) || ((y = (h = c(this, oe).config).onError) == null || y.call(
        h,
        l,
        this
      ), (g = (m = c(this, oe).config).onSettled) == null || g.call(
        m,
        this.state.data,
        l,
        this
      )), this.scheduleGc();
    };
    return w(this, X, Dn({
      initialPromise: s == null ? void 0 : s.initialPromise,
      fn: f.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (l) => {
        var h, y, m, g;
        if (l === void 0) {
          ze.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), p(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(l);
        } catch (b) {
          p(b);
          return;
        }
        (y = (h = c(this, oe).config).onSuccess) == null || y.call(h, l, this), (g = (m = c(this, oe).config).onSettled) == null || g.call(
          m,
          l,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: p,
      onFail: (l, h) => {
        k(this, de, Ce).call(this, { type: "failed", failureCount: l, error: h });
      },
      onPause: () => {
        k(this, de, Ce).call(this, { type: "pause" });
      },
      onContinue: () => {
        k(this, de, Ce).call(this, { type: "continue" });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode,
      canRun: () => !0
    })), c(this, X).start();
  }
}, Ye = new WeakMap(), Xe = new WeakMap(), oe = new WeakMap(), X = new WeakMap(), dt = new WeakMap(), Fe = new WeakMap(), de = new WeakSet(), Ce = function(e) {
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
          ...Bn(n.data, this.options),
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
        return It(o) && o.revert && c(this, Xe) ? { ...c(this, Xe), fetchStatus: "idle" } : {
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
    }), c(this, oe).notify({ query: this, type: "updated", action: e });
  });
}, Qs);
function Bn(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: In(e.networkMode) ? "fetching" : "paused",
    ...t === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function Cr(t) {
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
var me, zs, Er = (zs = class extends yt {
  constructor(e = {}) {
    super();
    A(this, me);
    this.config = e, w(this, me, /* @__PURE__ */ new Map());
  }
  build(e, s, n) {
    const o = s.queryKey, d = s.queryHash ?? ds(o, s);
    let f = this.get(d);
    return f || (f = new wr({
      cache: this,
      queryKey: o,
      queryHash: d,
      options: e.defaultQueryOptions(s),
      state: n,
      defaultOptions: e.getQueryDefaults(o)
    }), this.add(f)), f;
  }
  add(e) {
    c(this, me).has(e.queryHash) || (c(this, me).set(e.queryHash, e), this.notify({
      type: "added",
      query: e
    }));
  }
  remove(e) {
    const s = c(this, me).get(e.queryHash);
    s && (e.destroy(), s === e && c(this, me).delete(e.queryHash), this.notify({ type: "removed", query: e }));
  }
  clear() {
    G.batch(() => {
      this.getAll().forEach((e) => {
        this.remove(e);
      });
    });
  }
  get(e) {
    return c(this, me).get(e);
  }
  getAll() {
    return [...c(this, me).values()];
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Ts(s, n)
    );
  }
  findAll(e = {}) {
    const s = this.getAll();
    return Object.keys(e).length > 0 ? s.filter((n) => Ts(e, n)) : s;
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
}, me = new WeakMap(), zs), ye, Z, Be, ge, Ae, _s, Sr = (_s = class extends Fn {
  constructor(e) {
    super();
    A(this, ge);
    A(this, ye);
    A(this, Z);
    A(this, Be);
    this.mutationId = e.mutationId, w(this, Z, e.mutationCache), w(this, ye, []), this.state = e.state || Ar(), this.setOptions(e.options), this.scheduleGc();
  }
  setOptions(e) {
    this.options = e, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    c(this, ye).includes(e) || (c(this, ye).push(e), this.clearGcTimeout(), c(this, Z).notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    w(this, ye, c(this, ye).filter((s) => s !== e)), this.scheduleGc(), c(this, Z).notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    c(this, ye).length || (this.state.status === "pending" ? this.scheduleGc() : c(this, Z).remove(this));
  }
  continue() {
    var e;
    return ((e = c(this, Be)) == null ? void 0 : e.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(e) {
    var o, d, f, p, a, i, r, l, h, y, m, g, b, E, S, x, C, R, I, B;
    w(this, Be, Dn({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(new Error("No mutationFn found")),
      onFail: (M, T) => {
        k(this, ge, Ae).call(this, { type: "failed", failureCount: M, error: T });
      },
      onPause: () => {
        k(this, ge, Ae).call(this, { type: "pause" });
      },
      onContinue: () => {
        k(this, ge, Ae).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => c(this, Z).canRun(this)
    }));
    const s = this.state.status === "pending", n = !c(this, Be).canStart();
    try {
      if (!s) {
        k(this, ge, Ae).call(this, { type: "pending", variables: e, isPaused: n }), await ((d = (o = c(this, Z).config).onMutate) == null ? void 0 : d.call(
          o,
          e,
          this
        ));
        const T = await ((p = (f = this.options).onMutate) == null ? void 0 : p.call(f, e));
        T !== this.state.context && k(this, ge, Ae).call(this, {
          type: "pending",
          context: T,
          variables: e,
          isPaused: n
        });
      }
      const M = await c(this, Be).start();
      return await ((i = (a = c(this, Z).config).onSuccess) == null ? void 0 : i.call(
        a,
        M,
        e,
        this.state.context,
        this
      )), await ((l = (r = this.options).onSuccess) == null ? void 0 : l.call(r, M, e, this.state.context)), await ((y = (h = c(this, Z).config).onSettled) == null ? void 0 : y.call(
        h,
        M,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((g = (m = this.options).onSettled) == null ? void 0 : g.call(m, M, null, e, this.state.context)), k(this, ge, Ae).call(this, { type: "success", data: M }), M;
    } catch (M) {
      try {
        throw await ((E = (b = c(this, Z).config).onError) == null ? void 0 : E.call(
          b,
          M,
          e,
          this.state.context,
          this
        )), await ((x = (S = this.options).onError) == null ? void 0 : x.call(
          S,
          M,
          e,
          this.state.context
        )), await ((R = (C = c(this, Z).config).onSettled) == null ? void 0 : R.call(
          C,
          void 0,
          M,
          this.state.variables,
          this.state.context,
          this
        )), await ((B = (I = this.options).onSettled) == null ? void 0 : B.call(
          I,
          void 0,
          M,
          e,
          this.state.context
        )), M;
      } finally {
        k(this, ge, Ae).call(this, { type: "error", error: M });
      }
    } finally {
      c(this, Z).runNext(this);
    }
  }
}, ye = new WeakMap(), Z = new WeakMap(), Be = new WeakMap(), ge = new WeakSet(), Ae = function(e) {
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
    c(this, ye).forEach((n) => {
      n.onMutationUpdate(e);
    }), c(this, Z).notify({
      mutation: this,
      type: "updated",
      action: e
    });
  });
}, _s);
function Ar() {
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
var ae, ht, qs, Rr = (qs = class extends yt {
  constructor(e = {}) {
    super();
    A(this, ae);
    A(this, ht);
    this.config = e, w(this, ae, /* @__PURE__ */ new Map()), w(this, ht, Date.now());
  }
  build(e, s, n) {
    const o = new Sr({
      mutationCache: this,
      mutationId: ++bt(this, ht)._,
      options: e.defaultMutationOptions(s),
      state: n
    });
    return this.add(o), o;
  }
  add(e) {
    const s = xt(e), n = c(this, ae).get(s) ?? [];
    n.push(e), c(this, ae).set(s, n), this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    var n;
    const s = xt(e);
    if (c(this, ae).has(s)) {
      const o = (n = c(this, ae).get(s)) == null ? void 0 : n.filter((d) => d !== e);
      o && (o.length === 0 ? c(this, ae).delete(s) : c(this, ae).set(s, o));
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    var n;
    const s = (n = c(this, ae).get(xt(e))) == null ? void 0 : n.find((o) => o.state.status === "pending");
    return !s || s === e;
  }
  runNext(e) {
    var n;
    const s = (n = c(this, ae).get(xt(e))) == null ? void 0 : n.find((o) => o !== e && o.state.isPaused);
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
    return [...c(this, ae).values()].flat();
  }
  find(e) {
    const s = { exact: !0, ...e };
    return this.getAll().find(
      (n) => Ns(s, n)
    );
  }
  findAll(e = {}) {
    return this.getAll().filter((s) => Ns(e, s));
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
        e.map((s) => s.continue().catch(le))
      )
    );
  }
}, ae = new WeakMap(), ht = new WeakMap(), qs);
function xt(t) {
  var e;
  return ((e = t.options.scope) == null ? void 0 : e.id) ?? String(t.mutationId);
}
function ks(t) {
  return {
    onFetch: (e, s) => {
      var r, l, h, y, m;
      const n = e.options, o = (h = (l = (r = e.fetchOptions) == null ? void 0 : r.meta) == null ? void 0 : l.fetchMore) == null ? void 0 : h.direction, d = ((y = e.state.data) == null ? void 0 : y.pages) || [], f = ((m = e.state.data) == null ? void 0 : m.pageParams) || [];
      let p = { pages: [], pageParams: [] }, a = 0;
      const i = async () => {
        let g = !1;
        const b = (x) => {
          Object.defineProperty(x, "signal", {
            enumerable: !0,
            get: () => (e.signal.aborted ? g = !0 : e.signal.addEventListener("abort", () => {
              g = !0;
            }), e.signal)
          });
        }, E = jn(e.options, e.fetchOptions), S = async (x, C, R) => {
          if (g)
            return Promise.reject();
          if (C == null && x.pages.length)
            return Promise.resolve(x);
          const I = {
            queryKey: e.queryKey,
            pageParam: C,
            direction: R ? "backward" : "forward",
            meta: e.options.meta
          };
          b(I);
          const B = await E(
            I
          ), { maxPages: M } = e.options, T = R ? yr : mr;
          return {
            pages: T(x.pages, B, M),
            pageParams: T(x.pageParams, C, M)
          };
        };
        if (o && d.length) {
          const x = o === "backward", C = x ? Tr : js, R = {
            pages: d,
            pageParams: f
          }, I = C(n, R);
          p = await S(R, I, x);
        } else {
          const x = t ?? d.length;
          do {
            const C = a === 0 ? f[0] ?? n.initialPageParam : js(n, p);
            if (a > 0 && C == null)
              break;
            p = await S(p, C), a++;
          } while (a < x);
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
function js(t, { pages: e, pageParams: s }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(
    e[n],
    e,
    s[n],
    s
  ) : void 0;
}
function Tr(t, { pages: e, pageParams: s }) {
  var n;
  return e.length > 0 ? (n = t.getPreviousPageParam) == null ? void 0 : n.call(t, e[0], e, s[0], s) : void 0;
}
var L, Ne, Pe, Ze, Je, Me, et, tt, Hs, Nr = (Hs = class {
  constructor(t = {}) {
    A(this, L);
    A(this, Ne);
    A(this, Pe);
    A(this, Ze);
    A(this, Je);
    A(this, Me);
    A(this, et);
    A(this, tt);
    w(this, L, t.queryCache || new Er()), w(this, Ne, t.mutationCache || new Rr()), w(this, Pe, t.defaultOptions || {}), w(this, Ze, /* @__PURE__ */ new Map()), w(this, Je, /* @__PURE__ */ new Map()), w(this, Me, 0);
  }
  mount() {
    bt(this, Me)._++, c(this, Me) === 1 && (w(this, et, hs.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), c(this, L).onFocus());
    })), w(this, tt, Rt.subscribe(async (t) => {
      t && (await this.resumePausedMutations(), c(this, L).onOnline());
    })));
  }
  unmount() {
    var t, e;
    bt(this, Me)._--, c(this, Me) === 0 && ((t = c(this, et)) == null || t.call(this), w(this, et, void 0), (e = c(this, tt)) == null || e.call(this), w(this, tt, void 0));
  }
  isFetching(t) {
    return c(this, L).findAll({ ...t, fetchStatus: "fetching" }).length;
  }
  isMutating(t) {
    return c(this, Ne).findAll({ ...t, status: "pending" }).length;
  }
  getQueryData(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = c(this, L).get(e.queryHash)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(t) {
    const e = this.getQueryData(t.queryKey);
    if (e === void 0)
      return this.fetchQuery(t);
    {
      const s = this.defaultQueryOptions(t), n = c(this, L).build(this, s);
      return t.revalidateIfStale && n.isStaleByTime(Ke(s.staleTime, n)) && this.prefetchQuery(s), Promise.resolve(e);
    }
  }
  getQueriesData(t) {
    return c(this, L).findAll(t).map(({ queryKey: e, state: s }) => {
      const n = s.data;
      return [e, n];
    });
  }
  setQueryData(t, e, s) {
    const n = this.defaultQueryOptions({ queryKey: t }), o = c(this, L).get(
      n.queryHash
    ), d = o == null ? void 0 : o.state.data, f = fr(e, d);
    if (f !== void 0)
      return c(this, L).build(this, n).setData(f, { ...s, manual: !0 });
  }
  setQueriesData(t, e, s) {
    return G.batch(
      () => c(this, L).findAll(t).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, e, s)
      ])
    );
  }
  getQueryState(t) {
    var s;
    const e = this.defaultQueryOptions({ queryKey: t });
    return (s = c(this, L).get(e.queryHash)) == null ? void 0 : s.state;
  }
  removeQueries(t) {
    const e = c(this, L);
    G.batch(() => {
      e.findAll(t).forEach((s) => {
        e.remove(s);
      });
    });
  }
  resetQueries(t, e) {
    const s = c(this, L), n = {
      type: "active",
      ...t
    };
    return G.batch(() => (s.findAll(t).forEach((o) => {
      o.reset();
    }), this.refetchQueries(n, e)));
  }
  cancelQueries(t = {}, e = {}) {
    const s = { revert: !0, ...e }, n = G.batch(
      () => c(this, L).findAll(t).map((o) => o.cancel(s))
    );
    return Promise.all(n).then(le).catch(le);
  }
  invalidateQueries(t = {}, e = {}) {
    return G.batch(() => {
      if (c(this, L).findAll(t).forEach((n) => {
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
      () => c(this, L).findAll(t).filter((o) => !o.isDisabled()).map((o) => {
        let d = o.fetch(void 0, s);
        return s.throwOnError || (d = d.catch(le)), o.state.fetchStatus === "paused" ? Promise.resolve() : d;
      })
    );
    return Promise.all(n).then(le);
  }
  fetchQuery(t) {
    const e = this.defaultQueryOptions(t);
    e.retry === void 0 && (e.retry = !1);
    const s = c(this, L).build(this, e);
    return s.isStaleByTime(
      Ke(e.staleTime, s)
    ) ? s.fetch(e) : Promise.resolve(s.state.data);
  }
  prefetchQuery(t) {
    return this.fetchQuery(t).then(le).catch(le);
  }
  fetchInfiniteQuery(t) {
    return t.behavior = ks(t.pages), this.fetchQuery(t);
  }
  prefetchInfiniteQuery(t) {
    return this.fetchInfiniteQuery(t).then(le).catch(le);
  }
  ensureInfiniteQueryData(t) {
    return t.behavior = ks(t.pages), this.ensureQueryData(t);
  }
  resumePausedMutations() {
    return Rt.isOnline() ? c(this, Ne).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return c(this, L);
  }
  getMutationCache() {
    return c(this, Ne);
  }
  getDefaultOptions() {
    return c(this, Pe);
  }
  setDefaultOptions(t) {
    w(this, Pe, t);
  }
  setQueryDefaults(t, e) {
    c(this, Ze).set(ct(t), {
      queryKey: t,
      defaultOptions: e
    });
  }
  getQueryDefaults(t) {
    const e = [...c(this, Ze).values()];
    let s = {};
    return e.forEach((n) => {
      ut(t, n.queryKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  setMutationDefaults(t, e) {
    c(this, Je).set(ct(t), {
      mutationKey: t,
      defaultOptions: e
    });
  }
  getMutationDefaults(t) {
    const e = [...c(this, Je).values()];
    let s = {};
    return e.forEach((n) => {
      ut(t, n.mutationKey) && (s = { ...s, ...n.defaultOptions });
    }), s;
  }
  defaultQueryOptions(t) {
    if (t._defaulted)
      return t;
    const e = {
      ...c(this, Pe).queries,
      ...this.getQueryDefaults(t.queryKey),
      ...t,
      _defaulted: !0
    };
    return e.queryHash || (e.queryHash = ds(
      e.queryKey,
      e
    )), e.refetchOnReconnect === void 0 && (e.refetchOnReconnect = e.networkMode !== "always"), e.throwOnError === void 0 && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.enabled !== !0 && e.queryFn === At && (e.enabled = !1), e;
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted ? t : {
      ...c(this, Pe).mutations,
      ...(t == null ? void 0 : t.mutationKey) && this.getMutationDefaults(t.mutationKey),
      ...t,
      _defaulted: !0
    };
  }
  clear() {
    c(this, L).clear(), c(this, Ne).clear();
  }
}, L = new WeakMap(), Ne = new WeakMap(), Pe = new WeakMap(), Ze = new WeakMap(), Je = new WeakMap(), Me = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), Hs), ee, j, ft, J, Ue, st, ke, be, pt, nt, at, Le, Qe, je, rt, D, lt, Zt, Jt, es, ts, ss, ns, as, Un, Ws, Pr = (Ws = class extends yt {
  constructor(e, s) {
    super();
    A(this, D);
    A(this, ee);
    A(this, j);
    A(this, ft);
    A(this, J);
    A(this, Ue);
    A(this, st);
    A(this, ke);
    A(this, be);
    A(this, pt);
    A(this, nt);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    A(this, at);
    A(this, Le);
    A(this, Qe);
    A(this, je);
    A(this, rt, /* @__PURE__ */ new Set());
    this.options = s, w(this, ee, e), w(this, be, null), w(this, ke, Xt()), this.options.experimental_prefetchInRender || c(this, ke).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (c(this, j).addObserver(this), Is(c(this, j), this.options) ? k(this, D, lt).call(this) : this.updateResult(), k(this, D, ts).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return rs(
      c(this, j),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return rs(
      c(this, j),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), k(this, D, ss).call(this), k(this, D, ns).call(this), c(this, j).removeObserver(this);
  }
  setOptions(e, s) {
    const n = this.options, o = c(this, j);
    if (this.options = c(this, ee).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof he(this.options.enabled, c(this, j)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    k(this, D, as).call(this), c(this, j).setOptions(this.options), n._defaulted && !Vt(this.options, n) && c(this, ee).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: c(this, j),
      observer: this
    });
    const d = this.hasListeners();
    d && Os(
      c(this, j),
      o,
      this.options,
      n
    ) && k(this, D, lt).call(this), this.updateResult(s), d && (c(this, j) !== o || he(this.options.enabled, c(this, j)) !== he(n.enabled, c(this, j)) || Ke(this.options.staleTime, c(this, j)) !== Ke(n.staleTime, c(this, j))) && k(this, D, Zt).call(this);
    const f = k(this, D, Jt).call(this);
    d && (c(this, j) !== o || he(this.options.enabled, c(this, j)) !== he(n.enabled, c(this, j)) || f !== c(this, je)) && k(this, D, es).call(this, f);
  }
  getOptimisticResult(e) {
    const s = c(this, ee).getQueryCache().build(c(this, ee), e), n = this.createResult(s, e);
    return kr(this, n) && (w(this, J, n), w(this, st, this.options), w(this, Ue, c(this, j).state)), n;
  }
  getCurrentResult() {
    return c(this, J);
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
    c(this, rt).add(e);
  }
  getCurrentQuery() {
    return c(this, j);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const s = c(this, ee).defaultQueryOptions(e), n = c(this, ee).getQueryCache().build(c(this, ee), s);
    return n.fetch().then(() => this.createResult(n, s));
  }
  fetch(e) {
    return k(this, D, lt).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), c(this, J)));
  }
  createResult(e, s) {
    var M;
    const n = c(this, j), o = this.options, d = c(this, J), f = c(this, Ue), p = c(this, st), i = e !== n ? e.state : c(this, ft), { state: r } = e;
    let l = { ...r }, h = !1, y;
    if (s._optimisticResults) {
      const T = this.hasListeners(), _ = !T && Is(e, s), F = T && Os(e, n, s, o);
      (_ || F) && (l = {
        ...l,
        ...Bn(r.data, e.options)
      }), s._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
    }
    let { error: m, errorUpdatedAt: g, status: b } = l;
    if (s.select && l.data !== void 0)
      if (d && l.data === (f == null ? void 0 : f.data) && s.select === c(this, pt))
        y = c(this, nt);
      else
        try {
          w(this, pt, s.select), y = s.select(l.data), y = Yt(d == null ? void 0 : d.data, y, s), w(this, nt, y), w(this, be, null);
        } catch (T) {
          w(this, be, T);
        }
    else
      y = l.data;
    if (s.placeholderData !== void 0 && y === void 0 && b === "pending") {
      let T;
      if (d != null && d.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData))
        T = d.data;
      else if (T = typeof s.placeholderData == "function" ? s.placeholderData(
        (M = c(this, at)) == null ? void 0 : M.state.data,
        c(this, at)
      ) : s.placeholderData, s.select && T !== void 0)
        try {
          T = s.select(T), w(this, be, null);
        } catch (_) {
          w(this, be, _);
        }
      T !== void 0 && (b = "success", y = Yt(
        d == null ? void 0 : d.data,
        T,
        s
      ), h = !0);
    }
    c(this, be) && (m = c(this, be), y = c(this, nt), g = Date.now(), b = "error");
    const E = l.fetchStatus === "fetching", S = b === "pending", x = b === "error", C = S && E, R = y !== void 0, B = {
      status: b,
      fetchStatus: l.fetchStatus,
      isPending: S,
      isSuccess: b === "success",
      isError: x,
      isInitialLoading: C,
      isLoading: C,
      data: y,
      dataUpdatedAt: l.dataUpdatedAt,
      error: m,
      errorUpdatedAt: g,
      failureCount: l.fetchFailureCount,
      failureReason: l.fetchFailureReason,
      errorUpdateCount: l.errorUpdateCount,
      isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
      isFetchedAfterMount: l.dataUpdateCount > i.dataUpdateCount || l.errorUpdateCount > i.errorUpdateCount,
      isFetching: E,
      isRefetching: E && !S,
      isLoadingError: x && !R,
      isPaused: l.fetchStatus === "paused",
      isPlaceholderData: h,
      isRefetchError: x && R,
      isStale: fs(e, s),
      refetch: this.refetch,
      promise: c(this, ke)
    };
    if (this.options.experimental_prefetchInRender) {
      const T = (te) => {
        B.status === "error" ? te.reject(B.error) : B.data !== void 0 && te.resolve(B.data);
      }, _ = () => {
        const te = w(this, ke, B.promise = Xt());
        T(te);
      }, F = c(this, ke);
      switch (F.status) {
        case "pending":
          e.queryHash === n.queryHash && T(F);
          break;
        case "fulfilled":
          (B.status === "error" || B.data !== F.value) && _();
          break;
        case "rejected":
          (B.status !== "error" || B.error !== F.reason) && _();
          break;
      }
    }
    return B;
  }
  updateResult(e) {
    const s = c(this, J), n = this.createResult(c(this, j), this.options);
    if (w(this, Ue, c(this, j).state), w(this, st, this.options), c(this, Ue).data !== void 0 && w(this, at, c(this, j)), Vt(n, s))
      return;
    w(this, J, n);
    const o = {}, d = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: f } = this.options, p = typeof f == "function" ? f() : f;
      if (p === "all" || !p && !c(this, rt).size)
        return !0;
      const a = new Set(
        p ?? c(this, rt)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(c(this, J)).some((i) => {
        const r = i;
        return c(this, J)[r] !== s[r] && a.has(r);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && d() && (o.listeners = !0), k(this, D, Un).call(this, { ...o, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && k(this, D, ts).call(this);
  }
}, ee = new WeakMap(), j = new WeakMap(), ft = new WeakMap(), J = new WeakMap(), Ue = new WeakMap(), st = new WeakMap(), ke = new WeakMap(), be = new WeakMap(), pt = new WeakMap(), nt = new WeakMap(), at = new WeakMap(), Le = new WeakMap(), Qe = new WeakMap(), je = new WeakMap(), rt = new WeakMap(), D = new WeakSet(), lt = function(e) {
  k(this, D, as).call(this);
  let s = c(this, j).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(le)), s;
}, Zt = function() {
  k(this, D, ss).call(this);
  const e = Ke(
    this.options.staleTime,
    c(this, j)
  );
  if (qe || c(this, J).isStale || !Kt(e))
    return;
  const n = kn(c(this, J).dataUpdatedAt, e) + 1;
  w(this, Le, setTimeout(() => {
    c(this, J).isStale || this.updateResult();
  }, n));
}, Jt = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(c(this, j)) : this.options.refetchInterval) ?? !1;
}, es = function(e) {
  k(this, D, ns).call(this), w(this, je, e), !(qe || he(this.options.enabled, c(this, j)) === !1 || !Kt(c(this, je)) || c(this, je) === 0) && w(this, Qe, setInterval(() => {
    (this.options.refetchIntervalInBackground || hs.isFocused()) && k(this, D, lt).call(this);
  }, c(this, je)));
}, ts = function() {
  k(this, D, Zt).call(this), k(this, D, es).call(this, k(this, D, Jt).call(this));
}, ss = function() {
  c(this, Le) && (clearTimeout(c(this, Le)), w(this, Le, void 0));
}, ns = function() {
  c(this, Qe) && (clearInterval(c(this, Qe)), w(this, Qe, void 0));
}, as = function() {
  const e = c(this, ee).getQueryCache().build(c(this, ee), this.options);
  if (e === c(this, j))
    return;
  const s = c(this, j);
  w(this, j, e), w(this, ft, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, Un = function(e) {
  G.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(c(this, J));
    }), c(this, ee).getQueryCache().notify({
      query: c(this, j),
      type: "observerResultsUpdated"
    });
  });
}, Ws);
function Mr(t, e) {
  return he(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function Is(t, e) {
  return Mr(t, e) || t.state.data !== void 0 && rs(t, e, e.refetchOnMount);
}
function rs(t, e, s) {
  if (he(e.enabled, t) !== !1) {
    const n = typeof s == "function" ? s(t) : s;
    return n === "always" || n !== !1 && fs(t, e);
  }
  return !1;
}
function Os(t, e, s, n) {
  return (t !== e || he(n.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && fs(t, s);
}
function fs(t, e) {
  return he(e.enabled, t) !== !1 && t.isStaleByTime(Ke(e.staleTime, t));
}
function kr(t, e) {
  return !Vt(t.getCurrentResult(), e);
}
var Ln = v.createContext(
  void 0
), jr = (t) => {
  const e = v.useContext(Ln);
  if (!e)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return e;
}, Ir = ({
  client: t,
  children: e
}) => (v.useEffect(() => (t.mount(), () => {
  t.unmount();
}), [t]), /* @__PURE__ */ u.jsx(Ln.Provider, { value: t, children: e })), Qn = v.createContext(!1), Or = () => v.useContext(Qn);
Qn.Provider;
function Dr() {
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
var Fr = v.createContext(Dr()), Br = () => v.useContext(Fr);
function Ur(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function Lr() {
}
var Qr = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, zr = (t) => {
  v.useEffect(() => {
    t.clearReset();
  }, [t]);
}, _r = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: n
}) => t.isError && !e.isReset() && !t.isFetching && n && Ur(s, [t.error, n]), qr = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, Hr = (t, e) => t.isLoading && t.isFetching && !e, Wr = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, Ds = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function Kr(t, e, s) {
  var r, l, h, y, m;
  if (ze.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = jr(), o = Or(), d = Br(), f = n.defaultQueryOptions(t);
  (l = (r = n.getDefaultOptions().queries) == null ? void 0 : r._experimental_beforeQuery) == null || l.call(
    r,
    f
  ), f._optimisticResults = o ? "isRestoring" : "optimistic", qr(f), Qr(f, d), zr(d);
  const p = !n.getQueryCache().get(f.queryHash), [a] = v.useState(
    () => new e(
      n,
      f
    )
  ), i = a.getOptimisticResult(f);
  if (v.useSyncExternalStore(
    v.useCallback(
      (g) => {
        const b = o ? () => {
        } : a.subscribe(G.batchCalls(g));
        return a.updateResult(), b;
      },
      [a, o]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), v.useEffect(() => {
    a.setOptions(f, { listeners: !1 });
  }, [f, a]), Wr(f, i))
    throw Ds(f, a, d);
  if (_r({
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
  ), f.experimental_prefetchInRender && !qe && Hr(i, o)) {
    const g = p ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ds(f, a, d)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (m = n.getQueryCache().get(f.queryHash)) == null ? void 0 : m.promise
    );
    g == null || g.catch(Lr).finally(() => {
      a.updateResult();
    });
  }
  return f.notifyOnChangeProps ? i : a.trackResult(i);
}
function $r(t, e) {
  return Kr(t, Pr);
}
const Vr = ["totalAsset"], Gr = 0.01, Yr = async (t) => {
  try {
    const s = (await xe.get("/user-assets/total-assets", {
      params: { address: t }
    })).data.totalAssets;
    return {
      raw: s,
      formatted: ka(s, 2),
      isZero: s === 0,
      isUSDZero: s < Gr
    };
  } catch (e) {
    throw wt(e);
  }
};
function Xr(t) {
  const { address: e } = V.all();
  return $r({
    queryKey: [...Vr, e],
    queryFn: () => Yr(e),
    enabled: (t == null ? void 0 : t.enabled) && !!e,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30
    // cache for 30 minutes
  });
}
function Zr() {
  const t = V.getUserRandomAvatar(), { address: e } = V.all(), { data: s, refetch: n } = Xr({
    enabled: !!e
  }), [o, d] = v.useState(!1), [f, p] = v.useState(!1), [a, i] = v.useState("ETH"), [r, l] = v.useState(Ss.getData() ?? !0);
  v.useEffect(() => {
    h(a);
  }, []);
  const h = async (m) => {
    i(m);
  }, y = () => {
    l(!r), Ss.setData(!r);
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
                Lt,
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
          tr,
          {
            open: o,
            setOpen: d,
            address: e,
            tokenType: a,
            onClose: () => d(!1)
          }
        ),
        /* @__PURE__ */ u.jsx(
          hr,
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
function Jr() {
  return /* @__PURE__ */ u.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ u.jsx(Zr, {}),
    /* @__PURE__ */ u.jsx("div", { className: P(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ u.jsx(aa, {}) })
  ] });
}
function ei() {
  const t = ra();
  return console.error(t), /* @__PURE__ */ u.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ u.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ u.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ u.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ u.jsx("p", { className: "text-lg text-gray-600 italic", children: t.statusText || t.message })
  ] }) });
}
function Vi({
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
      ue("handlePageChange", p), n((a) => ({
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
const ti = 30, si = async () => {
  try {
    const t = await xe.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: ti
    });
    return {
      products: t.data.products,
      total: t.data.total
    };
  } catch (t) {
    const e = wt(t);
    throw new Error(e.message);
  }
}, ni = ia([
  {
    path: "/",
    async lazy() {
      const { RootLayout: t } = await import("./root-layout-DlEcTgpB.js");
      return { Component: t };
    },
    errorElement: /* @__PURE__ */ u.jsx(ei, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: t } = await import("./main-layout-4g4RgkiI.js");
          return { Component: t };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: t } = await import("./page-CXllkTKt.js");
              return { Component: t };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: t } = await import("./page-GsgT30xo.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: t } = await import("./page-CmYPNB42.js");
              return { Component: t };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: t } = await import("./page-CMTKWa9W.js");
              return { Component: t };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ u.jsx(Jr, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: t } = await import("./page-BDn5pNLL.js");
                  return { Component: t };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: t } = await import("./page-CfvgzyeN.js");
                  return { Component: t };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: t } = await import("./page-fdk2dzNf.js");
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
                  const { default: t } = await import("./page-B5vrm7oe.js");
                  return { Component: t };
                },
                loader: si
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: t } = await import("./page-DTmCwgEV.js");
                  return { Component: t };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: t } = await import("./page-B5zVOIZm.js");
                  return { Component: t };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: t } = await import("./page-RNrr_94N.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: t } = await import("./page-DaHfsjMx.js");
                  return { Component: t };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: t } = await import("./page-Bv1iFwD-.js");
                  return { Component: t };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: t } = await import("./page-DdIVKRLo.js");
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
                          const { default: t } = await import("./page-7gjUc-r4.js");
                          return { Component: t };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: t } = await import("./page-tMA6hvEE.js");
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
                  const { default: t } = await import("./page-DlzUIqkO.js");
                  return { Component: t };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: t } = await import("./page-CCr-TzpF.js");
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
function ai() {
  const [t, e] = v.useState(!1);
  return v.useEffect(() => {
    const s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    e(s);
  }, []), /* @__PURE__ */ u.jsx(
    wa,
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
      transition: Ca,
      icon: ({ type: s }) => {
        if (s === "error")
          return /* @__PURE__ */ u.jsx(ba, {});
        if (s === "success")
          return /* @__PURE__ */ u.jsx(Dt, {});
        if (s === "info")
          return /* @__PURE__ */ u.jsx(va, {});
        if (s === "warning")
          return /* @__PURE__ */ u.jsx(ln, {});
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
var ps = "moonpay-react-sdk-embedded-frame", ri = ({
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
    colorCode: l,
    theme: h,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: E,
    lockAmount: S,
    email: x,
    externalTransactionId: C,
    externalCustomerId: R,
    paymentMethod: I,
    redirectURL: B,
    showAllCurrencies: M,
    showOnlyCurrencies: T,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: F,
    skipUnsupportedRegionScreen: te,
    baseOrigin: we,
    // handlers
    onAuthToken: W,
    onInitiateDeposit: K,
    onKmsWalletsCreated: re,
    onLogin: Y,
    onTransactionCompleted: fe,
    onUnsupportedRegion: se,
    onSwapsCustomerSetupComplete: q,
    onCloseOverlay: ie,
    onTransactionCreated: Ee,
    // auth
    auth: ce,
    useWarnBeforeRefresh: Q,
    // other
    overlayNode: He
  } = t, ot = {
    apiKey: e,
    signature: o,
    currencyCode: d,
    defaultCurrencyCode: f,
    walletAddress: p,
    walletAddressTag: a,
    walletAddresses: i,
    walletAddressTags: r,
    colorCode: l,
    theme: h,
    themeId: y,
    language: m,
    baseCurrencyCode: g,
    baseCurrencyAmount: b,
    quoteCurrencyAmount: E,
    lockAmount: S,
    email: x,
    externalTransactionId: C,
    externalCustomerId: R,
    paymentMethod: I,
    redirectURL: B,
    showAllCurrencies: M,
    showOnlyCurrencies: T,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: F,
    skipUnsupportedRegionScreen: te,
    baseOrigin: we
  }, Se = {
    onAuthToken: W,
    onInitiateDeposit: K,
    onKmsWalletsCreated: re,
    onLogin: Y,
    onTransactionCompleted: fe,
    onUnsupportedRegion: se,
    onSwapsCustomerSetupComplete: q,
    onCloseOverlay: ie,
    onTransactionCreated: Ee
  };
  return {
    flow: "buy",
    variant: t.variant,
    environment: n,
    params: ot,
    debug: s,
    handlers: Se,
    auth: ce,
    useWarnBeforeRefresh: Q,
    containerNodeSelector: `#${ps}`,
    overlayNode: He
  };
}, ii = ({
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
    walletAddressTags: l,
    colorCode: h,
    theme: y,
    themeId: m,
    language: g,
    baseCurrencyCode: b,
    baseCurrencyAmount: E,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: C,
    externalTransactionId: R,
    externalCustomerId: I,
    paymentMethod: B,
    redirectURL: M,
    showAllCurrencies: T,
    showOnlyCurrencies: _,
    showWalletAddressForm: F,
    unsupportedRegionRedirectUrl: te,
    skipUnsupportedRegionScreen: we,
    mpWalletId: W,
    baseOrigin: K,
    // handlers
    onAuthToken: re,
    onInitiateDeposit: Y,
    onKmsWalletsCreated: fe,
    onLogin: se,
    onTransactionCompleted: q,
    onUnsupportedRegion: ie,
    onSwapsCustomerSetupComplete: Ee,
    onCloseOverlay: ce,
    onTransactionCreated: Q,
    // auth
    auth: He,
    useWarnBeforeRefresh: ot
  } = t, Se = {
    apiKey: e,
    signature: o,
    quoteCurrencyCode: d,
    defaultCurrencyCode: f,
    defaultBaseCurrencyCode: p,
    walletAddress: a,
    walletAddressTag: i,
    walletAddresses: r,
    walletAddressTags: l,
    colorCode: h,
    theme: y,
    themeId: m,
    language: g,
    baseCurrencyCode: b,
    baseCurrencyAmount: E,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: C,
    externalTransactionId: R,
    externalCustomerId: I,
    paymentMethod: B,
    redirectURL: M,
    showAllCurrencies: T,
    showOnlyCurrencies: _,
    showWalletAddressForm: F,
    unsupportedRegionRedirectUrl: te,
    skipUnsupportedRegionScreen: we,
    mpWalletId: W,
    baseOrigin: K
  }, gt = {
    onAuthToken: re,
    onInitiateDeposit: Y,
    onKmsWalletsCreated: fe,
    onLogin: se,
    onTransactionCompleted: q,
    onUnsupportedRegion: ie,
    onSwapsCustomerSetupComplete: Ee,
    onCloseOverlay: ce,
    onTransactionCreated: Q
  };
  return {
    flow: "sell",
    variant: t.variant,
    environment: n,
    params: Se,
    debug: s,
    handlers: gt,
    auth: He,
    useWarnBeforeRefresh: ot,
    containerNodeSelector: `#${ps}`
  };
};
async function oi(t = "v1") {
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
function li(t) {
  return t.startsWith("pk_live") || t.startsWith("sk_live") ? "production" : "sandbox";
}
var Ot = () => {
}, ci = {
  info: Ot,
  warn: Ot,
  error: Ot
}, ui = class zn {
  constructor({
    logger: e,
    prefix: s
  }) {
    z(this, "prefix");
    z(this, "logger");
    this.logger = e, this.prefix = s ?? ["Logger"];
  }
  if(e) {
    return e ? this : new zn({ logger: ci });
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
}, Pt = v.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), di = ({
  children: t,
  apiKey: e,
  debug: s = !1
}) => {
  const n = li(e), [o, d] = v.useState({
    apiKey: e,
    environment: n,
    debug: s
  }), f = v.useCallback(async () => {
    const p = await oi();
    d((a) => ({ ...a, init: p }));
  }, []);
  return v.useEffect(() => {
    o.init || f();
  }, [f, o.init]), /* @__PURE__ */ u.jsx(Pt.Provider, { value: o, children: t });
}, hi = class extends ui {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, fi = (t, e, s) => {
  const n = v.useRef(null), { init: o, debug: d } = v.useContext(Pt), f = v.useRef(new hi().if(d || !1)), p = v.useCallback(async () => {
    var a, i;
    if (n.current) {
      if (!s && ("walletAddress" in t || "walletAddresses" in t) && f.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), s) {
        const r = n.current.generateUrlForSigning();
        try {
          const l = await (s == null ? void 0 : s(r));
          if (!l)
            return;
          (a = n.current) == null || a.updateSignature(l);
        } catch (l) {
          f.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            l
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
}, pi = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function _n({
  config: t,
  onUrlSignatureRequested: e,
  visible: s = !0,
  className: n,
  style: o
}) {
  return fi(t, s, e), s ? /* @__PURE__ */ u.jsx(
    "div",
    {
      id: ps,
      className: n,
      style: t.variant === "embedded" ? {
        ...pi,
        ...o
      } : void 0
    }
  ) : null;
}
function Gi(t) {
  const { apiKey: e, environment: s } = v.useContext(Pt), n = v.useMemo(
    () => ri({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    _n,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
function Yi(t) {
  const { apiKey: e, environment: s } = v.useContext(Pt), n = v.useMemo(
    () => ii({
      props: t,
      apiKey: e,
      environment: s,
      debug: !1,
      signature: t.signature || ""
    }),
    [t, e, s]
  );
  return /* @__PURE__ */ u.jsx(
    _n,
    {
      config: n,
      visible: t.visible,
      onUrlSignatureRequested: t.onUrlSignatureRequested,
      className: t.className,
      style: t.style
    }
  );
}
const mi = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function yi({ children: t }) {
  return /* @__PURE__ */ u.jsx(
    di,
    {
      apiKey: mi,
      debug: !0,
      children: t
    }
  );
}
const gi = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, bi = {
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
}, vi = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, xi = {
  authenticationError: "Authentication Error. Please sign in again."
}, wi = {
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
  header: gi,
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
  vastWalletConnect: bi,
  toastSuccess: vi,
  toastError: xi
}, Ci = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Ei = {
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
}, Si = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, Ai = {
  authenticationError: "认证错误，请重新登录。"
}, Ri = {
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
  header: Ci,
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
  vastWalletConnect: Ei,
  toastSuccess: Si,
  toastError: Ai
}, Ti = {
  en: {
    translation: wi
  },
  zh: {
    translation: Ri
  }
};
ue("savedLng", dn);
const Ni = dn.getData();
cn.use(Ea).init({
  resources: Ti,
  lng: Ni || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function Pi() {
  return v.useEffect(() => {
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
const Mi = new Nr({
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
function ki() {
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ u.jsx(v.Suspense, { children: /* @__PURE__ */ u.jsx(Ir, { client: Mi, children: /* @__PURE__ */ u.jsxs(Sa, { i18n: cn, children: [
      /* @__PURE__ */ u.jsx(yi, { children: /* @__PURE__ */ u.jsx(oa, { router: ni }) }),
      /* @__PURE__ */ u.jsx(ai, {})
    ] }) }) }) }),
    /* @__PURE__ */ u.jsx(Pi, {})
  ] });
}
const ji = "theme_light", Ii = "0.0.0", Oi = "module", Di = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, Fi = {
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
}, Bi = {
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
}, Ui = {
  name: ji,
  private: !0,
  version: Ii,
  type: Oi,
  scripts: Di,
  dependencies: Fi,
  devDependencies: Bi
};
ue("isDev", pn);
function Fs(t) {
  const e = Ft(document.getElementById(t));
  return e.render(
    /* @__PURE__ */ u.jsx(ki, {})
    // <StrictMode>
    // </StrictMode>
  ), () => e.unmount();
}
pn ? Fs("root") : typeof window < "u" && (window[`mount_${Ui.name}`] = Fs);
export {
  Ct as B,
  Lt as C,
  Wa as D,
  Qt as I,
  Qa as L,
  Gi as M,
  hr as R,
  tr as S,
  Et as T,
  V as a,
  Ka as b,
  P as c,
  gn as d,
  bn as e,
  xe as f,
  ue as g,
  wt as h,
  Bt as i,
  As as j,
  Ha as k,
  dn as l,
  ka as m,
  sr as n,
  vn as o,
  zt as p,
  Xr as q,
  Vi as r,
  ti as s,
  Yi as t,
  $r as u,
  yn as v,
  jr as w,
  fn as x,
  Fs as y
};
