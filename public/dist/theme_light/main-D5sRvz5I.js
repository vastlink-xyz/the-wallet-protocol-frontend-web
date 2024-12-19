var $u = Object.defineProperty;
var xi = (e) => {
  throw TypeError(e);
};
var Bu = (e, t, n) => t in e ? $u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var me = (e, t, n) => Bu(e, typeof t != "symbol" ? t + "" : t, n), da = (e, t, n) => t.has(e) || xi("Cannot " + n);
var b = (e, t, n) => (da(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? xi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), V = (e, t, n, r) => (da(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), oe = (e, t, n) => (da(e, t, "access private method"), n);
var gr = (e, t, n, r) => ({
  set _(a) {
    V(e, t, a, n);
  },
  get _() {
    return b(e, t, r);
  }
});
import { j as v, S as Hu, d as Vs, g as Ws, P as Uu, C as Ks, I as Gs, i as Qs, k as qs, l as Xs, L as Ys, m as Zs, n as zu, T as Vu, o as Js, p as ec, q as tc, r as Wu } from "./vendor-radix-BMBq7gbN.js";
import { p as K, a as Uo, r as p, d as Ku, R as q, b as Kn, $ as zo, e as Gu, O as Qu, u as qu, f as Xu, h as Yu } from "./vendor-react-BA5A8Axg.js";
import { t as Zu, c as Ju, C as ed, a as td, b as nd, d as rd, e as ad, _ as Ze, X as Vo, L as od, f as Pa, g as nc, h as id, i as sd, j as cd, I as ld } from "./vendor-ui-utils-CNDLbdLA.js";
import { a as jn, u as Wo, C as ud, B as st, Q as dd, X as fd, i as rc, b as hd, I as pd } from "./vendor-utils-7AahqLO2.js";
import { d as ac, c as lr, h as Xr, e as md, C as Ci, f as Jt, E as gd, m as vd, a as yd, b as Si, _ as ue, t as bd, g as $, i as Z, j as an, p as gn, k as Ei } from "./vendor-web3-CqtRdeC5.js";
import "./vendor-walletconnect-Bh9Uj1j6.js";
var Ra, vr = Uo;
if (K.env.NODE_ENV === "production")
  Ra = vr.createRoot, vr.hydrateRoot;
else {
  var wi = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ra = function(e, t) {
    wi.usingClientEntryPoint = !0;
    try {
      return vr.createRoot(e, t);
    } finally {
      wi.usingClientEntryPoint = !1;
    }
  };
}
const Xe = console.log.bind(console, "🚀");
function ne(...e) {
  return Zu(Ju(e));
}
class wt {
  constructor(t) {
    me(this, "isClient");
    me(this, "key");
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
const oc = new wt("language"), Ti = new wt("hideTotalAsset");
class xd {
  constructor() {
    me(this, "storages");
    this.storages = {
      username: new wt("username"),
      displayName: new wt("displayName"),
      address: new wt("address"),
      authenticatedHeader: new wt("authenticatedHeader"),
      authenticated: new wt("authenticated"),
      desUsername: new wt("desUsername"),
      aeskey: new wt("aeskey")
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
    return !!this.getAuthDataByKey("address");
  }
  getUserRandomAvatar(t) {
    return t ? `/static/avatars/${t}.svg` : "/static/avatars/1.svg";
  }
}
const Me = new xd(), ic = [
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
], Ko = /* @__PURE__ */ ac({
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
}), sc = /* @__PURE__ */ ac({
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
}), Cd = ic, Fr = (e, t = 6) => parseFloat(e).toFixed(t), Sd = (e, t = 2) => {
  const r = (typeof e == "string" ? parseFloat(e) : e).toFixed(t), [a, o] = r.split("."), i = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o ? `${i}.${o}` : i;
}, Ed = (e) => {
  if (e === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: Ci.EIP155,
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
      chainNamespace: Ci.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function Ma(e) {
  if (e === "ETH")
    return sc;
  if (e === "MATIC" || e === "TVWT")
    return Ko;
}
async function wd({
  tokenType: e,
  transferParams: t,
  fromAddress: n,
  defaultGasPrice: r,
  defaultBlock: a
}) {
  try {
    const o = Ma(e);
    if (!o) return null;
    const i = lr({
      chain: o,
      transport: Xr()
    });
    let l;
    if (e === "TVWT" && (l = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", !l))
      throw new Error("Invalid token contract address");
    let s;
    if (e === "TVWT") {
      const c = md({
        abi: Cd,
        functionName: "transfer",
        args: [t.to, t.amount]
      });
      s = {
        to: l,
        data: c,
        value: BigInt(0)
      };
    } else
      s = {
        to: t.to,
        value: t.amount
      };
    try {
      const c = await i.estimateGas({
        ...s,
        account: n
      }), u = r || await i.getGasPrice(), f = (a || await i.getBlock()).baseFeePerGas || BigInt(0), g = u > f ? u - f : BigInt(1e9), y = f + g * BigInt(2), m = c * y, h = Fr(
        (Number(m) / Math.pow(10, 18)).toString()
      );
      return {
        estimatedGas: c,
        maxFeePerGas: y,
        maxPriorityFeePerGas: g,
        estimatedTotalFee: m,
        baseFee: f,
        gasPrice: u,
        feeInTokens: h
      };
    } catch (c) {
      throw console.error("Gas estimation error:", c), c;
    }
  } catch (o) {
    throw console.error("Transaction error:", o), o;
  }
}
function ka(e) {
  if (e === "ETH")
    return "SepoliaETH";
  if (e === "MATIC")
    return "POL";
  if (e === "TVWT")
    return "TVWT";
}
const Ai = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, cc = K.env.NODE_ENV === "development";
function Gn(e) {
  var t;
  if (jn.isAxiosError(e)) {
    const n = e;
    return n.response ? { message: `${((t = n.response.data) == null ? void 0 : t.message) || n.message}` } : n.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${n.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
function Oa({
  iconSize: e = 20,
  address: t,
  className: n = "",
  iconClassName: r = "",
  ...a
}) {
  const { t: o } = Wo();
  return /* @__PURE__ */ v.jsx(ud, { text: t, onCopy: () => {
    st.success(o("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ v.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ v.jsx("span", { ...a, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ v.jsx("span", { className: `text-primary ${n}`, children: t }) }),
    /* @__PURE__ */ v.jsx(
      ed,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${r}`,
        size: e
      }
    )
  ] }) });
}
const Td = td(
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
), en = p.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...a }, o) => {
    const i = r ? Hu : "button";
    return /* @__PURE__ */ v.jsx(
      i,
      {
        className: ne(Td({ variant: t, size: n, className: e })),
        ref: o,
        ...a
      }
    );
  }
);
en.displayName = "Button";
const $r = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ v.jsx(
    "input",
    {
      type: t,
      className: ne(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
$r.displayName = "Input";
class Go {
  constructor(t, n, r) {
    me(this, "name");
    me(this, "symbol");
    me(this, "decimals");
    this.name = t, this.symbol = n, this.decimals = r;
  }
}
class Ad extends Go {
  constructor() {
    super("Ethereum Sepolia", "SepoliaETH", 18);
    me(this, "publicClient");
    me(this, "openUrl");
    this.publicClient = lr({
      chain: sc,
      transport: Xr("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://sepolia.etherscan.io/tx/";
  }
  async getBalance(n) {
    const r = await this.publicClient.getBalance({
      address: n
    });
    return Jt(r);
  }
  async getRecentTransactions(n) {
    const r = "https://api-sepolia.etherscan.io/api", o = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await jn.get(r, {
      params: {
        ...o,
        action: "txlist",
        address: n,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Nd extends Go {
  constructor() {
    super("Polygon Amoy", "POL", 18);
    me(this, "publicClient");
    me(this, "openUrl");
    this.publicClient = lr({
      chain: Ko,
      transport: Xr("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(n) {
    const r = await this.publicClient.getBalance({
      address: n
    });
    return Jt(r);
  }
  async getRecentTransactions(n) {
    const r = "https://api-amoy.polygonscan.com/api", o = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await jn.get(r, {
      params: {
        ...o,
        action: "txlist",
        address: n,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Pd extends Go {
  constructor() {
    super("TheVastlinkToken", "TVWT", 18);
    me(this, "publicClient");
    me(this, "contractAddress");
    me(this, "contractAbi");
    me(this, "openUrl");
    this.contractAddress = "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e", this.contractAbi = ic, this.publicClient = lr({
      chain: Ko,
      transport: Xr("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
    }), this.openUrl = "https://amoy.polygonscan.com/tx/";
  }
  async getBalance(n) {
    const r = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [n]
    });
    return Jt(r);
  }
  async getRecentTransactions(n) {
    const r = "https://api-amoy.polygonscan.com/api", o = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await jn.get(r, {
      params: {
        ...o,
        action: "tokentx",
        address: n,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const Vt = class Vt {
  constructor() {
    me(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      ["ETH", Ad],
      ["MATIC", Nd],
      ["TVWT", Pd]
    ]);
  }
  static getInstance() {
    return Vt.instance || (Vt.instance = new Vt()), Vt.instance;
  }
  createToken(t) {
    const n = this.tokenMap.get(t);
    if (!n)
      throw new Error(`Unsupported token type: ${t}`);
    return new n();
  }
  getAllTokenTypes() {
    return Array.from(this.tokenMap.keys());
  }
};
me(Vt, "instance");
let Qn = Vt;
function Rd() {
  const [e, t] = p.useState("/imgs/logos/logo.svg");
  return {
    logoPath: e
  };
}
function Md({
  size: e = 32,
  className: t = ""
}) {
  const [n, r] = p.useState("");
  return p.useEffect(() => {
    const {
      username: a
    } = Me.all();
    if (a) {
      const o = a.length > 0 ? a[0] : "";
      r(o);
    }
  }, []), /* @__PURE__ */ v.jsx(
    "div",
    {
      className: ne(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${e}px] h-[${e}px]`,
        t
      ),
      children: /* @__PURE__ */ v.jsx("div", { className: ne(
        // 'flex items-center justify-center',
      ), children: n })
    }
  );
}
function lc({
  size: e = 32,
  className: t,
  type: n = "spin",
  fullscreen: r = !1
}) {
  Rd();
  const [a, o] = p.useState(!1);
  p.useEffect(() => (o(!0), () => o(!1)), []);
  const s = n === "breathe" ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ v.jsx(Md, { className: ne(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ v.jsx("style", { children: `
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
  ] }) : /* @__PURE__ */ v.jsx("div", { className: ne(
    "text-brand-foreground",
    t
  ), children: /* @__PURE__ */ v.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: e,
      height: e,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ v.jsx("g", { children: /* @__PURE__ */ v.jsx(
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
          children: /* @__PURE__ */ v.jsx(
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
  return r && a ? Uo.createPortal(
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: s }),
    document.body
  ) : s;
}
const uc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
    "textarea",
    {
      className: ne(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
uc.displayName = "Textarea";
var dc = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(dc || {}), Yr = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(Yr || {});
class Qo {
  constructor(t) {
    me(this, "config");
    if (this.constructor === Qo)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
jn.defaults.withCredentials = !0;
const _e = jn.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
_e.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const r = e.response.data.message || "Authentication error";
      console.log(`${r}, redirecting to login...`), Me.clearAllAuthData(), typeof window < "u" && (st.error(r), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
class kd extends Qo {
  constructor() {
    super({
      serviceType: Yr.WEB3AUTH_WITH_MPC
    });
    me(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: n
  }) {
    const { data: r } = await _e.post("/keymanagement/signup", {
      username: n
    }), { address: a, displayName: o } = r;
    Me.saveAuthDataByKey("address", a), Me.saveAuthDataByKey("username", n), o ? Me.saveAuthDataByKey("displayName", o) : Me.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: n }) {
    const { data: r } = await _e.post("/keymanagement/signin", {
      username: n
    }), { address: a, displayName: o } = r;
    Me.saveAuthDataByKey("address", a), Me.saveAuthDataByKey("username", n), o ? Me.saveAuthDataByKey("displayName", o) : Me.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: n,
    amount: r,
    token: a,
    note: o,
    transactionType: i
  }) {
    const { data: {
      success: l,
      needOtp: s,
      hash: c,
      message: u,
      transactionId: d,
      // not used
      transactionPayload: f,
      userEmail: g,
      toEmail: y
    } } = await _e.post("/transaction/sign", {
      from: Me.all().address,
      to: n,
      amount: r,
      token: a,
      note: o,
      transactionType: i
    });
    return {
      success: l,
      needOtp: s,
      hash: c,
      message: u,
      transactionId: d
    };
  }
  async signTransactionWithOTP({
    transactionId: n,
    otp: r
  }) {
    const { data: {
      token: a,
      hash: o,
      // not used
      transactionPayload: i,
      userEmail: l,
      toEmail: s,
      note: c,
      transactionType: u
    } } = await _e.post("/transaction/verify-to-sign", {
      transactionId: n,
      OTP: r
    });
    return {
      success: !0,
      hash: o,
      token: a
    };
  }
  createClientByToken(n) {
    const r = this.coreKitInstance, a = Ed(n), o = new gd({ config: { chainConfig: a } });
    o.setupProvider(vd(r));
    const i = yd({
      chain: Ma(n),
      transport: Si(o)
    }), l = lr({
      chain: Ma(n),
      transport: Si(o)
    });
    return {
      walletClient: i,
      publicClient: l
    };
  }
  async waitForTransactionReceipt(n, r) {
    const { publicClient: a } = this.createClientByToken(r);
    return await a.waitForTransactionReceipt({
      hash: n
    });
  }
  async test() {
    await _e.post("/keymanagement/test-mpc");
  }
}
class Od {
  static getService(t) {
    switch (t) {
      case Yr.WEB3AUTH_WITH_MPC:
        return new kd();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const Id = Yr.WEB3AUTH_WITH_MPC, jd = Od.getService(Id), _d = zu, Ld = Vu, Dd = p.forwardRef(({ className: e, inset: t, children: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  Vs,
  {
    ref: a,
    className: ne(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ v.jsx(nd, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Dd.displayName = Vs.displayName;
const Fd = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Ws,
  {
    ref: n,
    className: ne(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
Fd.displayName = Ws.displayName;
const fc = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(Uu, { children: /* @__PURE__ */ v.jsx(
  Ks,
  {
    ref: r,
    sideOffset: t,
    className: ne(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
fc.displayName = Ks.displayName;
const hc = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Gs,
  {
    ref: r,
    className: ne(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
hc.displayName = Gs.displayName;
const $d = p.forwardRef(({ className: e, children: t, checked: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  Qs,
  {
    ref: a,
    className: ne(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(qs, { children: /* @__PURE__ */ v.jsx(rd, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
$d.displayName = Qs.displayName;
const Bd = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  Xs,
  {
    ref: r,
    className: ne(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(qs, { children: /* @__PURE__ */ v.jsx(ad, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Bd.displayName = Xs.displayName;
const Hd = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  Ys,
  {
    ref: r,
    className: ne(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Hd.displayName = Ys.displayName;
const Ud = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Zs,
  {
    ref: n,
    className: ne("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Ud.displayName = Zs.displayName;
function Ni(e, t) {
  const [n, r] = p.useState(e);
  return p.useEffect(() => {
    const a = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(a);
    };
  }, [e, t]), n;
}
var pc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (o = a(o, r(l)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var i = "";
      for (var l in o)
        t.call(o, l) && o[l] && (i = a(i, l));
      return i;
    }
    function a(o, i) {
      return i ? o ? o + " " + i : o + i : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(pc);
var zd = pc.exports;
const Ve = /* @__PURE__ */ Ku(zd);
var Ia = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Vd() {
  if (Pi) return se;
  Pi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case e:
          switch (h = h.type, h) {
            case n:
            case a:
            case r:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case i:
                case s:
                case f:
                case d:
                case o:
                  return h;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return se.ContextConsumer = i, se.ContextProvider = o, se.Element = e, se.ForwardRef = s, se.Fragment = n, se.Lazy = f, se.Memo = d, se.Portal = t, se.Profiler = a, se.StrictMode = r, se.Suspense = c, se.SuspenseList = u, se.isAsyncMode = function() {
    return !1;
  }, se.isConcurrentMode = function() {
    return !1;
  }, se.isContextConsumer = function(h) {
    return m(h) === i;
  }, se.isContextProvider = function(h) {
    return m(h) === o;
  }, se.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, se.isForwardRef = function(h) {
    return m(h) === s;
  }, se.isFragment = function(h) {
    return m(h) === n;
  }, se.isLazy = function(h) {
    return m(h) === f;
  }, se.isMemo = function(h) {
    return m(h) === d;
  }, se.isPortal = function(h) {
    return m(h) === t;
  }, se.isProfiler = function(h) {
    return m(h) === a;
  }, se.isStrictMode = function(h) {
    return m(h) === r;
  }, se.isSuspense = function(h) {
    return m(h) === c;
  }, se.isSuspenseList = function(h) {
    return m(h) === u;
  }, se.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === a || h === r || h === c || h === u || h === g || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === o || h.$$typeof === i || h.$$typeof === s || h.$$typeof === y || h.getModuleId !== void 0);
  }, se.typeOf = m, se;
}
var ce = {}, Ri;
function Wd() {
  return Ri || (Ri = 1, K.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, h = !1, E = !1, S = !1, x;
    x = Symbol.for("react.module.reference");
    function w(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === n || z === a || S || z === r || z === c || z === u || E || z === g || y || m || h || typeof z == "object" && z !== null && (z.$$typeof === f || z.$$typeof === d || z.$$typeof === o || z.$$typeof === i || z.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === x || z.getModuleId !== void 0));
    }
    function T(z) {
      if (typeof z == "object" && z !== null) {
        var $e = z.$$typeof;
        switch ($e) {
          case e:
            var ve = z.type;
            switch (ve) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return ve;
              default:
                var Ke = ve && ve.$$typeof;
                switch (Ke) {
                  case l:
                  case i:
                  case s:
                  case f:
                  case d:
                  case o:
                    return Ke;
                  default:
                    return $e;
                }
            }
          case t:
            return $e;
        }
      }
    }
    var N = i, C = o, A = e, M = s, I = n, j = f, H = d, B = t, D = a, W = r, R = c, P = u, k = !1, O = !1;
    function _(z) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(z) {
      return O || (O = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(z) {
      return T(z) === i;
    }
    function F(z) {
      return T(z) === o;
    }
    function G(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function Q(z) {
      return T(z) === s;
    }
    function te(z) {
      return T(z) === n;
    }
    function ee(z) {
      return T(z) === f;
    }
    function Pe(z) {
      return T(z) === d;
    }
    function xe(z) {
      return T(z) === t;
    }
    function Se(z) {
      return T(z) === a;
    }
    function We(z) {
      return T(z) === r;
    }
    function ge(z) {
      return T(z) === c;
    }
    function ke(z) {
      return T(z) === u;
    }
    ce.ContextConsumer = N, ce.ContextProvider = C, ce.Element = A, ce.ForwardRef = M, ce.Fragment = I, ce.Lazy = j, ce.Memo = H, ce.Portal = B, ce.Profiler = D, ce.StrictMode = W, ce.Suspense = R, ce.SuspenseList = P, ce.isAsyncMode = _, ce.isConcurrentMode = L, ce.isContextConsumer = U, ce.isContextProvider = F, ce.isElement = G, ce.isForwardRef = Q, ce.isFragment = te, ce.isLazy = ee, ce.isMemo = Pe, ce.isPortal = xe, ce.isProfiler = Se, ce.isStrictMode = We, ce.isSuspense = ge, ce.isSuspenseList = ke, ce.isValidElementType = w, ce.typeOf = T;
  }()), ce;
}
K.env.NODE_ENV === "production" ? Ia.exports = Vd() : Ia.exports = Wd();
var Rr = Ia.exports, ja = {}, qo = [], Kd = function(t) {
  qo.push(t);
};
function Xo(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = qo.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Gd(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = qo.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function mc() {
  ja = {};
}
function gc(e, t, n) {
  !t && !ja[n] && (e(!1, n), ja[n] = !0);
}
function Ht(e, t) {
  gc(Xo, e, t);
}
function Qd(e, t) {
  gc(Gd, e, t);
}
Ht.preMessage = Kd;
Ht.resetWarned = mc;
Ht.noteOnce = Qd;
function Mi(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function qd(e) {
  return e && ue(e) === "object" && Mi(e.nativeElement) ? e.nativeElement : Mi(e) ? e : null;
}
function Xd(e) {
  var t = qd(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = Kn.findDOMNode) === null || n === void 0 ? void 0 : n.call(Kn, e);
  }
  return null;
}
function Yo(e, t, n) {
  var r = p.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var vc = function(t, n) {
  typeof t == "function" ? t(n) : ue(t) === "object" && t && "current" in t && (t.current = n);
}, Yd = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      vc(i, o);
    });
  };
}, M0 = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Yo(function() {
    return Yd.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, l) {
      return i !== o[l];
    });
  });
}, Zd = function(t) {
  var n, r, a = Rr.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== Rr.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Rr.ForwardRef);
};
function ki(e) {
  return /* @__PURE__ */ p.isValidElement(e) && !Rr.isFragment(e);
}
Number(p.version.split(".")[0]) >= 19;
function yt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Oi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, bd(r.key), r);
  }
}
function bt(e, t, n) {
  return t && Oi(e.prototype, t), n && Oi(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _a(e, t) {
  return _a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, _a(e, t);
}
function Zr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && _a(e, t);
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Br(e);
}
function yc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yc = function() {
    return !!e;
  })();
}
function tn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jd(e, t) {
  if (t && (ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return tn(e);
}
function Jr(e) {
  var t = yc();
  return function() {
    var n, r = Br(e);
    if (t) {
      var a = Br(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return Jd(this, n);
  };
}
function La(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ef(e) {
  if (Array.isArray(e)) return La(e);
}
function bc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zo(e, t) {
  if (e) {
    if (typeof e == "string") return La(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? La(e, t) : void 0;
  }
}
function tf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fe(e) {
  return ef(e) || bc(e) || Zo(e) || tf();
}
var xc = function(t) {
  return +setTimeout(t, 16);
}, Cc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (xc = function(t) {
  return window.requestAnimationFrame(t);
}, Cc = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ii = 0, ea = /* @__PURE__ */ new Map();
function Sc(e) {
  ea.delete(e);
}
var Hr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ii += 1;
  var r = Ii;
  function a(o) {
    if (o === 0)
      Sc(r), t();
    else {
      var i = xc(function() {
        a(o - 1);
      });
      ea.set(r, i);
    }
  }
  return a(n), r;
};
Hr.cancel = function(e) {
  var t = ea.get(e);
  return Sc(e), Cc(t);
};
K.env.NODE_ENV !== "production" && (Hr.ids = function() {
  return ea;
});
function Ec(e) {
  if (Array.isArray(e)) return e;
}
function nf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, i, l = [], s = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!s && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function wc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Ec(e) || nf(e, t) || Zo(e, t) || wc();
}
function qn(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function At() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function rf(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var ji = "data-rc-order", _i = "data-rc-priority", af = "rc-util-key", Da = /* @__PURE__ */ new Map();
function Tc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : af;
}
function ta(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function of(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Jo(e) {
  return Array.from((Da.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ac(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!At())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = of(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(ji, i), l && o && s.setAttribute(_i, "".concat(o)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var c = ta(t), u = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || Jo(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(ji)))
          return !1;
        var g = Number(f.getAttribute(_i) || 0);
        return o >= g;
      });
      if (d.length)
        return c.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    c.insertBefore(s, u);
  } else
    c.appendChild(s);
  return s;
}
function Nc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ta(t);
  return (t.styles || Jo(n)).find(function(r) {
    return r.getAttribute(Tc(t)) === e;
  });
}
function Pc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Nc(e, t);
  if (n) {
    var r = ta(t);
    r.removeChild(n);
  }
}
function sf(e, t) {
  var n = Da.get(e);
  if (!n || !rf(document, n)) {
    var r = Ac("", t), a = r.parentNode;
    Da.set(e, a), e.removeChild(r);
  }
}
function nn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ta(n), a = Jo(r), o = $($({}, n), {}, {
    styles: a
  });
  sf(r, o);
  var i = Nc(t, o);
  if (i) {
    var l, s;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = o.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Ac(e, o);
  return u.setAttribute(Tc(o), t), u;
}
function cf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(o);
    if (Ht(!s, "Warning: There may be circular references"), s)
      return !1;
    if (o === i)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(o);
    var c = l + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(i) || o.length !== i.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!a(o[u], i[u], c))
          return !1;
      return !0;
    }
    if (o && i && ue(o) === "object" && ue(i) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return a(o[f], i[f], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var lf = "%";
function Fa(e) {
  return e.join(lf);
}
var uf = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), Z(this, "instanceId", void 0), Z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return bt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Fa(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Fa(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), kn = "data-token-hash", ct = "data-css-hash", df = "data-cache-path", Lt = "__cssinjs_instance__";
function ff() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ct, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Lt] = a[Lt] || e, a[Lt] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ct, "]"))).forEach(function(a) {
      var o = a.getAttribute(ct);
      if (r[o]) {
        if (a[Lt] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new uf(e);
}
var na = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: ff(),
  defaultCache: !0
});
function hf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var ei = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), Z(this, "cache", void 0), Z(this, "keys", void 0), Z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return bt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(l);
        }
      }), (r = i) !== null && r !== void 0 && r.value && o && (i.value[1] = this.cacheCallTimes++), (a = i) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var o = this.keys.reduce(function(c, u) {
            var d = Y(c, 2), f = d[1];
            return a.internalGet(u)[1] < f ? [u, a.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = Y(o, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var s = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          s.set(c, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var d = s.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : s.set(c, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var o;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (o = a.value) === null || o === void 0 ? void 0 : o[0];
      }
      var i = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !hf(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
Z(ei, "MAX_CACHE_SIZE", 20);
Z(ei, "MAX_CACHE_OFFSET", 5);
var Li = 0, Rc = /* @__PURE__ */ function() {
  function e(t) {
    yt(this, e), Z(this, "derivatives", void 0), Z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Li, t.length === 0 && Xo(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Li += 1;
  }
  return bt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), fa = new ei();
function $a(e) {
  var t = Array.isArray(e) ? e : [e];
  return fa.has(t) || fa.set(t, new Rc(t)), fa.get(t);
}
var pf = /* @__PURE__ */ new WeakMap(), ha = {};
function mf(e, t) {
  for (var n = pf, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(ha) || n.set(ha, e()), n.get(ha);
}
var Di = /* @__PURE__ */ new WeakMap();
function Vn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Di.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof Rc ? n += a.id : a && ue(a) === "object" ? n += Vn(a, t) : n += a;
  }), t && (n = qn(n)), Di.set(e, n)), n;
}
function Fi(e, t) {
  return qn("".concat(t, "_").concat(Vn(e, !0)));
}
var Ba = At();
function $t(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Ur(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = $($({}, r), {}, Z(Z({}, kn, t), ct, n)), i = Object.keys(o).map(function(l) {
    var s = o[l];
    return s ? "".concat(l, '="').concat(s, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Mr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, gf = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Y(a, 2), i = o[0], l = o[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, Mc = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = Y(i, 2), u = c[0], d = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (s = r.ignore) !== null && s !== void 0 && s[u])) {
      var f, g = Mr(u, r == null ? void 0 : r.prefix);
      a[g] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(g, ")");
    }
  }), [o, gf(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, $i = K.env.NODE_ENV !== "test" && At() ? p.useLayoutEffect : p.useEffect, kc = function(t, n) {
  var r = p.useRef(!0);
  $i(function() {
    return t(r.current);
  }, n), $i(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, k0 = function(t, n) {
  kc(function(r) {
    if (!r)
      return t();
  }, n);
}, vf = $({}, zo), Bi = vf.useInsertionEffect, yf = function(t, n, r) {
  p.useMemo(t, r), kc(function() {
    return n(!0);
  }, r);
}, bf = Bi ? function(e, t, n) {
  return Bi(function() {
    return e(), t();
  }, n);
} : yf, xf = $({}, zo), Cf = xf.useInsertionEffect, Sf = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      K.env.NODE_ENV !== "production" && Xo(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(o);
  }
  return p.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(o) {
        return o();
      });
    };
  }, t), a;
}, Ef = function() {
  return function(t) {
    t();
  };
}, wf = typeof Cf < "u" ? Sf : Ef;
function Tf() {
  return !1;
}
var Ha = !1;
function Af() {
  return Ha;
}
const Nf = K.env.NODE_ENV === "production" ? Tf : Af;
if (K.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var pa = window;
  if (typeof pa.webpackHotUpdate == "function") {
    var Pf = pa.webpackHotUpdate;
    pa.webpackHotUpdate = function() {
      return Ha = !0, setTimeout(function() {
        Ha = !1;
      }, 0), Pf.apply(void 0, arguments);
    };
  }
}
function ti(e, t, n, r, a) {
  var o = p.useContext(na), i = o.cache, l = [e].concat(Fe(t)), s = Fa(l), c = wf([s]), u = Nf(), d = function(m) {
    i.opUpdate(s, function(h) {
      var E = h || [void 0, void 0], S = Y(E, 2), x = S[0], w = x === void 0 ? 0 : x, T = S[1], N = T;
      K.env.NODE_ENV !== "production" && T && u && (r == null || r(N, u), N = null);
      var C = N || n(), A = [w, C];
      return m ? m(A) : A;
    });
  };
  p.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var f = i.opGet(s);
  K.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(s));
  var g = f[1];
  return bf(function() {
    a == null || a(g);
  }, function(y) {
    return d(function(m) {
      var h = Y(m, 2), E = h[0], S = h[1];
      return y && E === 0 && (a == null || a(g)), [E + 1, S];
    }), function() {
      i.opUpdate(s, function(m) {
        var h = m || [], E = Y(h, 2), S = E[0], x = S === void 0 ? 0 : S, w = E[1], T = x - 1;
        return T === 0 ? (c(function() {
          (y || !i.opGet(s)) && (r == null || r(w, !1));
        }), null) : [x - 1, w];
      });
    };
  }, [s]), g;
}
var Rf = {}, Mf = K.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", zt = /* @__PURE__ */ new Map();
function kf(e) {
  zt.set(e, (zt.get(e) || 0) + 1);
}
function Of(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(kn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Lt] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var If = 0;
function jf(e, t) {
  zt.set(e, (zt.get(e) || 0) - 1);
  var n = Array.from(zt.keys()), r = n.filter(function(a) {
    var o = zt.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > If && r.forEach(function(a) {
    Of(a, t), zt.delete(a);
  });
}
var _f = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = $($({}, o), n);
  return a && (i = a(i)), i;
}, Oc = "token";
function Lf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = p.useContext(na), a = r.cache.instanceId, o = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Rf : s, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, g = mf(function() {
    return Object.assign.apply(Object, [{}].concat(Fe(t)));
  }, t), y = Vn(g), m = Vn(c), h = f ? Vn(f) : "", E = ti(Oc, [l, e.id, y, m, h], function() {
    var S, x = d ? d(g, c, e) : _f(g, c, e, u), w = $({}, x), T = "";
    if (f) {
      var N = Mc(x, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), C = Y(N, 2);
      x = C[0], T = C[1];
    }
    var A = Fi(x, l);
    x._tokenKey = A, w._tokenKey = Fi(w, l);
    var M = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : A;
    x._themeKey = M, kf(M);
    var I = "".concat(Mf, "-").concat(qn(A));
    return x._hashId = I, [x, I, w, T, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    jf(S[0]._themeKey, a);
  }, function(S) {
    var x = Y(S, 4), w = x[0], T = x[3];
    if (f && T) {
      var N = nn(T, qn("css-variables-".concat(w._themeKey)), {
        mark: ct,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      N[Lt] = a, N.setAttribute(kn, w._themeKey);
    }
  });
  return E;
}
var Df = function(t, n, r) {
  var a = Y(t, 5), o = a[2], i = a[3], l = a[4], s = r || {}, c = s.plain;
  if (!i)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = Ur(i, l, u, f, c);
  return [d, u, g];
}, Ff = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ic = "comm", jc = "rule", _c = "decl", $f = "@import", Bf = "@keyframes", Hf = "@layer", Lc = Math.abs, ni = String.fromCharCode;
function Dc(e) {
  return e.trim();
}
function kr(e, t, n) {
  return e.replace(t, n);
}
function Uf(e, t, n) {
  return e.indexOf(t, n);
}
function Xn(e, t) {
  return e.charCodeAt(t) | 0;
}
function On(e, t, n) {
  return e.slice(t, n);
}
function ht(e) {
  return e.length;
}
function zf(e) {
  return e.length;
}
function yr(e, t) {
  return t.push(e), e;
}
var ra = 1, In = 1, Fc = 0, Je = 0, be = 0, _n = "";
function ri(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: ra, column: In, length: i, return: "", siblings: l };
}
function Vf() {
  return be;
}
function Wf() {
  return be = Je > 0 ? Xn(_n, --Je) : 0, In--, be === 10 && (In = 1, ra--), be;
}
function lt() {
  return be = Je < Fc ? Xn(_n, Je++) : 0, In++, be === 10 && (In = 1, ra++), be;
}
function Dt() {
  return Xn(_n, Je);
}
function Or() {
  return Je;
}
function aa(e, t) {
  return On(_n, e, t);
}
function Yn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Kf(e) {
  return ra = In = 1, Fc = ht(_n = e), Je = 0, [];
}
function Gf(e) {
  return _n = "", e;
}
function ma(e) {
  return Dc(aa(Je - 1, Ua(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Qf(e) {
  for (; (be = Dt()) && be < 33; )
    lt();
  return Yn(e) > 2 || Yn(be) > 3 ? "" : " ";
}
function qf(e, t) {
  for (; --t && lt() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return aa(e, Or() + (t < 6 && Dt() == 32 && lt() == 32));
}
function Ua(e) {
  for (; lt(); )
    switch (be) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ua(be);
        break;
      case 40:
        e === 41 && Ua(e);
        break;
      case 92:
        lt();
        break;
    }
  return Je;
}
function Xf(e, t) {
  for (; lt() && e + be !== 57; )
    if (e + be === 84 && Dt() === 47)
      break;
  return "/*" + aa(t, Je - 1) + "*" + ni(e === 47 ? e : lt());
}
function Yf(e) {
  for (; !Yn(Dt()); )
    lt();
  return aa(e, Je);
}
function Zf(e) {
  return Gf(Ir("", null, null, null, [""], e = Kf(e), 0, [0], e));
}
function Ir(e, t, n, r, a, o, i, l, s) {
  for (var c = 0, u = 0, d = i, f = 0, g = 0, y = 0, m = 1, h = 1, E = 1, S = 0, x = "", w = a, T = o, N = r, C = x; h; )
    switch (y = S, S = lt()) {
      case 40:
        if (y != 108 && Xn(C, d - 1) == 58) {
          Uf(C += kr(ma(S), "&", "&\f"), "&\f", Lc(c ? l[c - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += ma(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Qf(y);
        break;
      case 92:
        C += qf(Or() - 1, 7);
        continue;
      case 47:
        switch (Dt()) {
          case 42:
          case 47:
            yr(Jf(Xf(lt(), Or()), t, n, s), s), (Yn(y || 1) == 5 || Yn(Dt() || 1) == 5) && ht(C) && On(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      case 123 * m:
        l[c++] = ht(C) * E;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            E == -1 && (C = kr(C, /\f/g, "")), g > 0 && (ht(C) - d || m === 0 && y === 47) && yr(g > 32 ? Ui(C + ";", r, n, d - 1, s) : Ui(kr(C, " ", "") + ";", r, n, d - 2, s), s);
            break;
          case 59:
            C += ";";
          default:
            if (yr(N = Hi(C, t, n, c, u, a, l, x, w = [], T = [], d, o), o), S === 123)
              if (u === 0)
                Ir(C, t, N, N, w, o, d, l, T);
              else
                switch (f === 99 && Xn(C, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ir(e, N, N, r && yr(Hi(e, N, N, 0, 0, a, l, x, a, w = [], d, T), T), a, T, d, l, r ? w : T);
                    break;
                  default:
                    Ir(C, N, N, N, [""], T, 0, l, T);
                }
        }
        c = u = g = 0, m = E = 1, x = C = "", d = i;
        break;
      case 58:
        d = 1 + ht(C), g = y;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && Wf() == 125)
            continue;
        }
        switch (C += ni(S), S * m) {
          case 38:
            E = u > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            l[c++] = (ht(C) - 1) * E, E = 1;
            break;
          case 64:
            Dt() === 45 && (C += ma(lt())), f = Dt(), u = d = ht(x = C += Yf(Or())), S++;
            break;
          case 45:
            y === 45 && ht(C) == 2 && (m = 0);
        }
    }
  return o;
}
function Hi(e, t, n, r, a, o, i, l, s, c, u, d) {
  for (var f = a - 1, g = a === 0 ? o : [""], y = zf(g), m = 0, h = 0, E = 0; m < r; ++m)
    for (var S = 0, x = On(e, f + 1, f = Lc(h = i[m])), w = e; S < y; ++S)
      (w = Dc(h > 0 ? g[S] + " " + x : kr(x, /&\f/g, g[S]))) && (s[E++] = w);
  return ri(e, t, n, a === 0 ? jc : l, s, c, u, d);
}
function Jf(e, t, n, r) {
  return ri(e, t, n, Ic, ni(Vf()), On(e, 2, -2), 0, r);
}
function Ui(e, t, n, r, a) {
  return ri(e, t, n, _c, On(e, 0, r), On(e, r + 1, -1), r, a);
}
function za(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function eh(e, t, n, r) {
  switch (e.type) {
    case Hf:
      if (e.children.length) break;
    case $f:
    case _c:
      return e.return = e.return || e.value;
    case Ic:
      return "";
    case Bf:
      return e.return = e.value + "{" + za(e.children, r) + "}";
    case jc:
      if (!ht(e.value = e.props.join(","))) return "";
  }
  return ht(n = za(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function $c(e, t) {
  var n = t.path, r = t.parentSelectors;
  Ht(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var th = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && $c("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, nh = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && $c("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, zi = "data-ant-cssinjs-cache-path", Bc = "_FILE_STYLE__", rn, Hc = !0;
function rh() {
  if (!rn && (rn = {}, At())) {
    var e = document.createElement("div");
    e.className = zi, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Y(o, 2), l = i[0], s = i[1];
      rn[l] = s;
    });
    var n = document.querySelector("style[".concat(zi, "]"));
    if (n) {
      var r;
      Hc = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function ah(e) {
  return rh(), !!rn[e];
}
function oh(e) {
  var t = rn[e], n = null;
  if (t && At())
    if (Hc)
      n = Bc;
    else {
      var r = document.querySelector("style[".concat(ct, '="').concat(rn[e], '"]'));
      r ? n = r.innerHTML : delete rn[e];
    }
  return [n, t];
}
var Uc = "_skip_check_", zc = "_multi_value_";
function jr(e) {
  var t = za(Zf(e), eh);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function ih(e) {
  return ue(e) === "object" && e && (Uc in e || zc in e);
}
function Vi(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(Fe(s.slice(1))).join(" ");
  });
  return o.join(",");
}
var sh = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, g = n.linters, y = g === void 0 ? [] : g, m = "", h = {};
  function E(w) {
    var T = w.getName(l);
    if (!h[T]) {
      var N = e(w.style, n, {
        root: !1,
        parentSelectors: i
      }), C = Y(N, 1), A = C[0];
      h[T] = "@keyframes ".concat(w.getName(l)).concat(A);
    }
  }
  function S(w) {
    var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(N) {
      Array.isArray(N) ? S(N, T) : N && T.push(N);
    }), T;
  }
  var x = S(Array.isArray(t) ? t : [t]);
  return x.forEach(function(w) {
    var T = typeof w == "string" && !a ? {} : w;
    if (typeof T == "string")
      m += "".concat(T, `
`);
    else if (T._keyframe)
      E(T);
    else {
      var N = f.reduce(function(C, A) {
        var M;
        return (A == null || (M = A.visit) === null || M === void 0 ? void 0 : M.call(A, C)) || C;
      }, T);
      Object.keys(N).forEach(function(C) {
        var A = N[C];
        if (ue(A) === "object" && A && (C !== "animationName" || !A._keyframe) && !ih(A)) {
          var M = !1, I = C.trim(), j = !1;
          (a || o) && l ? I.startsWith("@") ? M = !0 : I === "&" ? I = Vi("", l, u) : I = Vi(C, l, u) : a && !l && (I === "&" || I === "") && (I = "", j = !0);
          var H = e(A, n, {
            root: j,
            injectHash: M,
            parentSelectors: [].concat(Fe(i), [I])
          }), B = Y(H, 2), D = B[0], W = B[1];
          h = $($({}, h), W), m += "".concat(I).concat(D);
        } else {
          let k = function(O, _) {
            K.env.NODE_ENV !== "production" && (ue(A) !== "object" || !(A != null && A[Uc])) && [th, nh].concat(Fe(y)).forEach(function(F) {
              return F(O, _, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var L = O.replace(/[A-Z]/g, function(F) {
              return "-".concat(F.toLowerCase());
            }), U = _;
            !Ff[O] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), O === "animationName" && _ !== null && _ !== void 0 && _._keyframe && (E(_), U = _.getName(l)), m += "".concat(L, ":").concat(U, ";");
          };
          var R, P = (R = A == null ? void 0 : A.value) !== null && R !== void 0 ? R : A;
          ue(A) === "object" && A !== null && A !== void 0 && A[zc] && Array.isArray(P) ? P.forEach(function(O) {
            k(C, O);
          }) : k(C, P);
        }
      });
    }
  }), a ? s && (m = "@layer ".concat(s.name, " {").concat(m, "}"), s.dependencies && (h["@layer ".concat(s.name)] = s.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(s.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, h];
};
function Vc(e, t) {
  return qn("".concat(e.join("%")).concat(t));
}
function ch() {
  return null;
}
var Wc = "style";
function Va(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, u = p.useContext(na), d = u.autoClear, f = u.mock, g = u.defaultCache, y = u.hashPriority, m = u.container, h = u.ssrInline, E = u.transformers, S = u.linters, x = u.cache, w = u.layer, T = n._tokenKey, N = [T];
  w && N.push("layer"), N.push.apply(N, Fe(r));
  var C = Ba;
  K.env.NODE_ENV !== "production" && f !== void 0 && (C = f === "client");
  var A = ti(
    Wc,
    N,
    // Create cache if needed
    function() {
      var B = N.join("|");
      if (ah(B)) {
        var D = oh(B), W = Y(D, 2), R = W[0], P = W[1];
        if (R)
          return [R, T, P, {}, l, c];
      }
      var k = t(), O = sh(k, {
        hashId: a,
        hashPriority: y,
        layer: w ? o : void 0,
        path: r.join("-"),
        transformers: E,
        linters: S
      }), _ = Y(O, 2), L = _[0], U = _[1], F = jr(L), G = Vc(N, F);
      return [F, T, G, U, l, c];
    },
    // Remove cache if no need
    function(B, D) {
      var W = Y(B, 3), R = W[2];
      (D || d) && Ba && Pc(R, {
        mark: ct
      });
    },
    // Effect: Inject style here
    function(B) {
      var D = Y(B, 4), W = D[0];
      D[1];
      var R = D[2], P = D[3];
      if (C && W !== Bc) {
        var k = {
          mark: ct,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: c
        }, O = typeof i == "function" ? i() : i;
        O && (k.csp = {
          nonce: O
        });
        var _ = [], L = [];
        Object.keys(P).forEach(function(F) {
          F.startsWith("@layer") ? _.push(F) : L.push(F);
        }), _.forEach(function(F) {
          nn(jr(P[F]), "_layer-".concat(F), $($({}, k), {}, {
            prepend: !0
          }));
        });
        var U = nn(W, R, k);
        U[Lt] = x.instanceId, U.setAttribute(kn, T), K.env.NODE_ENV !== "production" && U.setAttribute(df, N.join("|")), L.forEach(function(F) {
          nn(jr(P[F]), "_effect-".concat(F), k);
        });
      }
    }
  ), M = Y(A, 3), I = M[0], j = M[1], H = M[2];
  return function(B) {
    var D;
    return !h || C || !g ? D = /* @__PURE__ */ p.createElement(ch, null) : D = /* @__PURE__ */ p.createElement("style", Ze({}, Z(Z({}, kn, j), ct, H), {
      dangerouslySetInnerHTML: {
        __html: I
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, D, B);
  };
}
var lh = function(t, n, r) {
  var a = Y(t, 6), o = a[0], i = a[1], l = a[2], s = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var g = o, y = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = Ur(o, i, l, y, f), s && Object.keys(s).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var h = jr(s[m]), E = Ur(h, i, "_effect-".concat(m), y, f);
      m.startsWith("@layer") ? g = E + g : g += E;
    }
  }), [u, l, g];
}, Kc = "cssVar", uh = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, u = p.useContext(na), d = u.cache.instanceId, f = u.container, g = l._tokenKey, y = [].concat(Fe(t.path), [r, c, g]), m = ti(Kc, y, function() {
    var h = n(), E = Mc(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), S = Y(E, 2), x = S[0], w = S[1], T = Vc(y, w);
    return [x, w, T, r];
  }, function(h) {
    var E = Y(h, 3), S = E[2];
    Ba && Pc(S, {
      mark: ct
    });
  }, function(h) {
    var E = Y(h, 3), S = E[1], x = E[2];
    if (S) {
      var w = nn(S, x, {
        mark: ct,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      w[Lt] = d, w.setAttribute(kn, r);
    }
  });
  return m;
}, dh = function(t, n, r) {
  var a = Y(t, 4), o = a[1], i = a[2], l = a[3], s = r || {}, c = s.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Ur(o, l, i, d, c);
  return [u, i, f];
};
Z(Z(Z({}, Wc, lh), Oc, Df), Kc, dh);
var Un = /* @__PURE__ */ function() {
  function e(t, n) {
    yt(this, e), Z(this, "name", void 0), Z(this, "style", void 0), Z(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return bt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function dn(e) {
  return e.notSplit = !0, e;
}
dn(["borderTop", "borderBottom"]), dn(["borderTop"]), dn(["borderBottom"]), dn(["borderLeft", "borderRight"]), dn(["borderLeft"]), dn(["borderRight"]);
var ai = /* @__PURE__ */ p.createContext({});
function fh(e) {
  return Ec(e) || bc(e) || Zo(e) || wc();
}
function Wa(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Gc(e, t, n, r) {
  if (!t.length)
    return n;
  var a = fh(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Fe(e) : l = $({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Gc(l[o], i, n, r), l;
}
function ga(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Wa(e, t.slice(0, -1)) ? e : Gc(e, t, n, r);
}
function hh(e) {
  return ue(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Wi(e) {
  return Array.isArray(e) ? [] : {};
}
var ph = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function mh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Wi(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var s = new Set(l), c = Wa(a, i), u = Array.isArray(c);
      if (u || hh(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = Wa(r, i);
          u ? r = ga(r, i, []) : (!d || ue(d) !== "object") && (r = ga(r, i, Wi(c))), ph(c).forEach(function(f) {
            o([].concat(Fe(i), [f]), s);
          });
        }
      } else
        r = ga(r, i, c);
    }
    o([]);
  }), r;
}
function Qc() {
}
let St = null;
function gh() {
  St = null, mc();
}
let oi = Qc;
K.env.NODE_ENV !== "production" && (oi = (e, t, n) => {
  Ht(e, `[antd: ${t}] ${n}`), K.env.NODE_ENV === "test" && gh();
});
const qc = /* @__PURE__ */ p.createContext({}), Ln = K.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(qc), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = St;
        St || (St = {}), St[e] = St[e] || [], St[e].includes(o || "") || St[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", St);
      } else
        K.env.NODE_ENV !== "production" && oi(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Qc, e;
}, oa = oi, vh = /* @__PURE__ */ p.createContext(void 0);
var yh = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, bh = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, xh = $($({}, bh), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Xc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ki = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, xh),
  timePickerLocale: Object.assign({}, Xc)
}, He = "${label} is not a valid ${type}", ia = {
  locale: "en",
  Pagination: yh,
  DatePicker: Ki,
  TimePicker: Xc,
  Calendar: Ki,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: He,
        method: He,
        array: He,
        object: He,
        number: He,
        date: He,
        boolean: He,
        integer: He,
        float: He,
        regexp: He,
        email: He,
        url: He,
        hex: He
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, ia.Modal);
let _r = [];
const Gi = () => _r.reduce((e, t) => Object.assign(Object.assign({}, e), t), ia.Modal);
function Ch(e) {
  if (e) {
    const t = Object.assign({}, e);
    return _r.push(t), Gi(), () => {
      _r = _r.filter((n) => n !== t), Gi();
    };
  }
  Object.assign({}, ia.Modal);
}
const Yc = /* @__PURE__ */ p.createContext(void 0), Zc = "internalMark", Jc = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (K.env.NODE_ENV !== "production") {
    const o = Ln("LocaleProvider");
    K.env.NODE_ENV !== "production" && o(r === Zc, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => Ch(t == null ? void 0 : t.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(Yc.Provider, {
    value: a
  }, n);
};
K.env.NODE_ENV !== "production" && (Jc.displayName = "LocaleProvider");
function Ne(e, t) {
  Sh(e) && (e = "100%");
  var n = Eh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function br(e) {
  return Math.min(1, Math.max(0, e));
}
function Sh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Eh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function el(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function xr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Wt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function wh(e, t, n) {
  return {
    r: Ne(e, 255) * 255,
    g: Ne(t, 255) * 255,
    b: Ne(n, 255) * 255
  };
}
function Qi(e, t, n) {
  e = Ne(e, 255), t = Ne(t, 255), n = Ne(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = 0, l = (r + a) / 2;
  if (r === a)
    i = 0, o = 0;
  else {
    var s = r - a;
    switch (i = l > 0.5 ? s / (2 - r - a) : s / (r + a), r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / s + 2;
        break;
      case n:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l };
}
function va(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Th(e, t, n) {
  var r, a, o;
  if (e = Ne(e, 360), t = Ne(t, 100), n = Ne(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = va(l, i, e + 1 / 3), a = va(l, i, e), o = va(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function Ka(e, t, n) {
  e = Ne(e, 255), t = Ne(t, 255), n = Ne(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, i = r, l = r - a, s = r === 0 ? 0 : l / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: i };
}
function Ah(e, t, n) {
  e = Ne(e, 360) * 6, t = Ne(t, 100), n = Ne(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), l = n * (1 - (1 - a) * t), s = r % 6, c = [n, i, o, o, l, n][s], u = [l, n, n, i, o, o][s], d = [o, o, l, n, n, i][s];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function Ga(e, t, n, r) {
  var a = [
    Wt(Math.round(e).toString(16)),
    Wt(Math.round(t).toString(16)),
    Wt(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Nh(e, t, n, r, a) {
  var o = [
    Wt(Math.round(e).toString(16)),
    Wt(Math.round(t).toString(16)),
    Wt(Math.round(n).toString(16)),
    Wt(Ph(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Ph(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function qi(e) {
  return Ue(e) / 255;
}
function Ue(e) {
  return parseInt(e, 16);
}
function Rh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Qa = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function fn(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = Oh(e)), typeof e == "object" && (Ct(e.r) && Ct(e.g) && Ct(e.b) ? (t = wh(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ct(e.h) && Ct(e.s) && Ct(e.v) ? (r = xr(e.s), a = xr(e.v), t = Ah(e.h, r, a), i = !0, l = "hsv") : Ct(e.h) && Ct(e.s) && Ct(e.l) && (r = xr(e.s), o = xr(e.l), t = Th(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = el(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Mh = "[-\\+]?\\d+%?", kh = "[-\\+]?\\d*\\.\\d+%?", Ft = "(?:".concat(kh, ")|(?:").concat(Mh, ")"), ya = "[\\s|\\(]+(".concat(Ft, ")[,|\\s]+(").concat(Ft, ")[,|\\s]+(").concat(Ft, ")\\s*\\)?"), ba = "[\\s|\\(]+(".concat(Ft, ")[,|\\s]+(").concat(Ft, ")[,|\\s]+(").concat(Ft, ")[,|\\s]+(").concat(Ft, ")\\s*\\)?"), nt = {
  CSS_UNIT: new RegExp(Ft),
  rgb: new RegExp("rgb" + ya),
  rgba: new RegExp("rgba" + ba),
  hsl: new RegExp("hsl" + ya),
  hsla: new RegExp("hsla" + ba),
  hsv: new RegExp("hsv" + ya),
  hsva: new RegExp("hsva" + ba),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Oh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Qa[e])
    e = Qa[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = nt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = nt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = nt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = nt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = nt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = nt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = nt.hex8.exec(e), n ? {
    r: Ue(n[1]),
    g: Ue(n[2]),
    b: Ue(n[3]),
    a: qi(n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex6.exec(e), n ? {
    r: Ue(n[1]),
    g: Ue(n[2]),
    b: Ue(n[3]),
    format: t ? "name" : "hex"
  } : (n = nt.hex4.exec(e), n ? {
    r: Ue(n[1] + n[1]),
    g: Ue(n[2] + n[2]),
    b: Ue(n[3] + n[3]),
    a: qi(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex3.exec(e), n ? {
    r: Ue(n[1] + n[1]),
    g: Ue(n[2] + n[2]),
    b: Ue(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Ct(e) {
  return !!nt.CSS_UNIT.exec(String(e));
}
var Le = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Rh(t)), this.originalInput = t;
      var a = fn(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, a, o = t.r / 255, i = t.g / 255, l = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = el(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ka(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ka(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Qi(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Qi(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Ga(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Nh(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Ne(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Ne(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + Ga(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Qa); n < r.length; n++) {
        var a = r[n], o = a[0], i = a[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = br(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = br(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = br(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = br(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, i = {
        r: (a.r - r.r) * o + r.r,
        g: (a.g - r.g) * o + r.g,
        b: (a.b - r.b) * o + r.b,
        a: (a.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), a = 360 / n, o = [this];
      for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + a) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, i = [], l = 1 / t; t--; )
        i.push(new e({ h: r, s: a, v: o })), o = (o + l) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), a = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, i = 1; i < t; i++)
        a.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Cr = 2, Xi = 0.16, Ih = 0.05, jh = 0.05, _h = 0.15, tl = 5, nl = 4, Lh = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function Yi(e) {
  var t = e.r, n = e.g, r = e.b, a = Ka(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Sr(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(Ga(t, n, r, !1));
}
function Dh(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function Zi(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Cr * t : Math.round(e.h) + Cr * t : r = n ? Math.round(e.h) + Cr * t : Math.round(e.h) - Cr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ji(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Xi * t : t === nl ? r = e.s + Xi : r = e.s + Ih * t, r > 1 && (r = 1), n && t === tl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function es(e, t, n) {
  var r;
  return n ? r = e.v + jh * t : r = e.v - _h * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Zn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = fn(e), a = tl; a > 0; a -= 1) {
    var o = Yi(r), i = Sr(fn({
      h: Zi(o, a, !0),
      s: Ji(o, a, !0),
      v: es(o, a, !0)
    }));
    n.push(i);
  }
  n.push(Sr(r));
  for (var l = 1; l <= nl; l += 1) {
    var s = Yi(r), c = Sr(fn({
      h: Zi(s, l),
      s: Ji(s, l),
      v: es(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Lh.map(function(u) {
    var d = u.index, f = u.opacity, g = Sr(Dh(fn(t.backgroundColor || "#141414"), fn(n[d]), f * 100));
    return g;
  }) : n;
}
var xa = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, qa = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
qa.primary = qa[5];
var Xa = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Xa.primary = Xa[5];
var Ya = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ya.primary = Ya[5];
var Za = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Za.primary = Za[5];
var Ja = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Ja.primary = Ja[5];
var eo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
eo.primary = eo[5];
var to = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
to.primary = to[5];
var no = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
no.primary = no[5];
var zr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
zr.primary = zr[5];
var ro = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ro.primary = ro[5];
var ao = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ao.primary = ao[5];
var oo = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
oo.primary = oo[5];
var io = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
io.primary = io[5];
var Ca = {
  red: qa,
  volcano: Xa,
  orange: Ya,
  gold: Za,
  yellow: Ja,
  lime: eo,
  green: to,
  cyan: no,
  blue: zr,
  geekblue: ro,
  purple: ao,
  magenta: oo,
  grey: io
};
const rl = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Jn = Object.assign(Object.assign({}, rl), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function Fh(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: i,
    colorInfo: l,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: u
  } = e, d = n(s), f = n(a), g = n(o), y = n(i), m = n(l), h = r(c, u), E = e.colorLink || e.colorInfo, S = n(E), x = new Le(y[1]).mix(new Le(y[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBgFilledHover: x,
    colorErrorBgActive: y[3],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new Le("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const $h = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function Bh(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, $h(r));
}
const Hh = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Uh(e) {
  return (e + 8) / e;
}
function zh(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Uh(n)
  }));
}
const Vh = (e) => {
  const t = zh(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], l = r[1], s = r[0], c = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * a),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(s * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Wh(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const Qe = (e, t) => new Le(e).setAlpha(t).toRgbString(), Hn = (e, t) => new Le(e).darken(t).toHexString(), Kh = (e) => {
  const t = Zn(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Gh = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Qe(r, 0.88),
    colorTextSecondary: Qe(r, 0.65),
    colorTextTertiary: Qe(r, 0.45),
    colorTextQuaternary: Qe(r, 0.25),
    colorFill: Qe(r, 0.15),
    colorFillSecondary: Qe(r, 0.06),
    colorFillTertiary: Qe(r, 0.04),
    colorFillQuaternary: Qe(r, 0.02),
    colorBgSolid: Qe(r, 1),
    colorBgSolidHover: Qe(r, 0.75),
    colorBgSolidActive: Qe(r, 0.95),
    colorBgLayout: Hn(n, 4),
    colorBgContainer: Hn(n, 0),
    colorBgElevated: Hn(n, 0),
    colorBgSpotlight: Qe(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Hn(n, 15),
    colorBorderSecondary: Hn(n, 6)
  };
};
function Qh(e) {
  xa.pink = xa.magenta, Ca.pink = Ca.magenta;
  const t = Object.keys(rl).map((n) => {
    const r = e[n] === xa[n] ? Ca[n] : Zn(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Fh(e, {
    generateColorPalettes: Kh,
    generateNeutralColorPalettes: Gh
  })), Vh(e.fontSize)), Wh(e)), Hh(e)), Bh(e));
}
const al = $a(Qh), so = {
  token: Jn,
  override: {
    override: Jn
  },
  hashed: !0
}, ol = /* @__PURE__ */ q.createContext(so), co = "ant", ii = "anticon", O0 = ["outlined", "borderless", "filled"], qh = (e, t) => t || (e ? `${co}-${e}` : co), Bt = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: qh,
  iconPrefixCls: ii
}), Xh = `-ant-${Date.now()}-${Math.random()}`;
function Yh(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, a = (i, l) => {
    const s = new Le(i), c = Zn(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Le(t.primaryColor), l = Zn(i.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new Le(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function Zh(e, t) {
  const n = Yh(e, t);
  At() ? nn(n, `${Xh}-dynamic-theme`) : K.env.NODE_ENV !== "production" && oa(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const lo = /* @__PURE__ */ p.createContext(!1), Jh = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = p.useContext(lo);
  return /* @__PURE__ */ p.createElement(lo.Provider, {
    value: n ?? r
  }, t);
}, er = /* @__PURE__ */ p.createContext(void 0), ep = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = p.useContext(er);
  return /* @__PURE__ */ p.createElement(er.Provider, {
    value: n || r
  }, t);
};
function tp() {
  const e = p.useContext(lo), t = p.useContext(er);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var il = /* @__PURE__ */ bt(function e() {
  yt(this, e);
}), sl = "CALC_UNIT", np = new RegExp(sl, "g");
function Sa(e) {
  return typeof e == "number" ? "".concat(e).concat(sl) : e;
}
var rp = /* @__PURE__ */ function(e) {
  Zr(n, e);
  var t = Jr(n);
  function n(r, a) {
    var o;
    yt(this, n), o = t.call(this), Z(tn(o), "result", ""), Z(tn(o), "unitlessCssVar", void 0), Z(tn(o), "lowPriority", void 0);
    var i = ue(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = Sa(r) : i === "string" && (o.result = r), o;
  }
  return bt(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Sa(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Sa(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " * ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " * ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(a) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), a instanceof n ? this.result = "".concat(this.result, " / ").concat(a.getResult(!0)) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " / ").concat(a)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(a) {
      return this.lowPriority || a ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(a) {
      var o = this, i = a || {}, l = i.unit, s = !0;
      return typeof l == "boolean" ? s = l : Array.from(this.unitlessCssVar).some(function(c) {
        return o.result.includes(c);
      }) && (s = !1), this.result = this.result.replace(np, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(il), ap = /* @__PURE__ */ function(e) {
  Zr(n, e);
  var t = Jr(n);
  function n(r) {
    var a;
    return yt(this, n), a = t.call(this), Z(tn(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return bt(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result += a.result : typeof a == "number" && (this.result += a), this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result -= a.result : typeof a == "number" && (this.result -= a), this;
    }
  }, {
    key: "mul",
    value: function(a) {
      return a instanceof n ? this.result *= a.result : typeof a == "number" && (this.result *= a), this;
    }
  }, {
    key: "div",
    value: function(a) {
      return a instanceof n ? this.result /= a.result : typeof a == "number" && (this.result /= a), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(il), op = function(t, n) {
  var r = t === "css" ? rp : ap;
  return function(a) {
    return new r(a, n);
  };
}, ts = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function uo(e) {
  var t = p.useRef();
  t.current = e;
  var n = p.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function fo(e) {
  var t = p.useRef(!1), n = p.useState(e), r = Y(n, 2), a = r[0], o = r[1];
  p.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, s) {
    s && t.current || o(l);
  }
  return [a, i];
}
function ns(e, t, n, r) {
  var a = $({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(l) {
      var s = Y(l, 2), c = s[0], u = s[1];
      if (K.env.NODE_ENV !== "production" && Ht(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var i = $($({}, n), a);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var cl = K.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ho = !0;
function si() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!cl)
    return Object.assign.apply(Object, [{}].concat(t));
  ho = !1;
  var r = {};
  return t.forEach(function(a) {
    if (ue(a) === "object") {
      var o = Object.keys(a);
      o.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[i];
          }
        });
      });
    }
  }), ho = !0, r;
}
var rs = {};
function ip() {
}
var sp = function(t) {
  var n, r = t, a = ip;
  return cl && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (ho) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), a = function(i, l) {
    var s;
    rs[i] = {
      global: Array.from(n),
      component: $($({}, (s = rs[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function as(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(si(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function cp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return $t(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return $t(o);
      }).join(","), ")");
    }
  };
}
var lp = 1e3 * 60 * 10, up = /* @__PURE__ */ function() {
  function e() {
    yt(this, e), Z(this, "map", /* @__PURE__ */ new Map()), Z(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), Z(this, "nextID", 0), Z(this, "lastAccessBeat", /* @__PURE__ */ new Map()), Z(this, "accessBeat", 0);
  }
  return bt(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var a = this.getCompositeKey(n);
      this.map.set(a, r), this.lastAccessBeat.set(a, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), a = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, a;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, a = n.map(function(o) {
        return o && ue(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(ue(o), "_").concat(o);
      });
      return a.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(a, o) {
          r - a > lp && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), os = new up();
function dp(e, t) {
  return q.useMemo(function() {
    var n = os.get(t);
    if (n)
      return n;
    var r = e();
    return os.set(t, r), r;
  }, t);
}
var fp = function() {
  return {};
};
function hp(e) {
  var t = e.useCSP, n = t === void 0 ? fp : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function s(f, g, y, m) {
    var h = Array.isArray(f) ? f[0] : f;
    function E(A) {
      return "".concat(String(h)).concat(A.slice(0, 1).toUpperCase()).concat(A.slice(1));
    }
    var S = (m == null ? void 0 : m.unitless) || {}, x = typeof l == "function" ? l(f) : {}, w = $($({}, x), {}, Z({}, E("zIndexPopup"), !0));
    Object.keys(S).forEach(function(A) {
      w[E(A)] = S[A];
    });
    var T = $($({}, m), {}, {
      unitless: w,
      prefixToken: E
    }), N = u(f, g, y, T), C = c(h, y, T);
    return function(A) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A, I = N(A, M), j = Y(I, 2), H = j[1], B = C(M), D = Y(B, 2), W = D[0], R = D[1];
      return [W, H, R];
    };
  }
  function c(f, g, y) {
    var m = y.unitless, h = y.injectStyle, E = h === void 0 ? !0 : h, S = y.prefixToken, x = y.ignore, w = function(C) {
      var A = C.rootCls, M = C.cssVar, I = M === void 0 ? {} : M, j = r(), H = j.realToken;
      return uh({
        path: [f],
        prefix: I.prefix,
        key: I.key,
        unitless: m,
        ignore: x,
        token: H,
        scope: A
      }, function() {
        var B = as(f, H, g), D = ns(f, H, B, {
          deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
        });
        return Object.keys(B).forEach(function(W) {
          D[S(W)] = D[W], delete D[W];
        }), D;
      }), null;
    }, T = function(C) {
      var A = r(), M = A.cssVar;
      return [function(I) {
        return E && M ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(w, {
          rootCls: C,
          cssVar: M,
          component: f
        }), I) : I;
      }, M == null ? void 0 : M.key];
    };
    return T;
  }
  function u(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], E = Y(h, 1), S = E[0], x = h.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(T) {
      var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, C = r(), A = C.theme, M = C.realToken, I = C.hashId, j = C.token, H = C.cssVar, B = a(), D = B.rootPrefixCls, W = B.iconPrefixCls, R = n(), P = H ? "css" : "js", k = dp(function() {
        var G = /* @__PURE__ */ new Set();
        return H && Object.keys(m.unitless || {}).forEach(function(Q) {
          G.add(Mr(Q, H.prefix)), G.add(Mr(Q, ts(S, H.prefix)));
        }), op(P, G);
      }, [P, S, H == null ? void 0 : H.prefix]), O = cp(P), _ = O.max, L = O.min, U = {
        theme: A,
        token: j,
        hashId: I,
        nonce: function() {
          return R.nonce;
        },
        clientOnly: m.clientOnly,
        layer: w,
        // antd is always at top of styles
        order: m.order || -999
      };
      Va($($({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", D]
      }), function() {
        return typeof o == "function" ? o(j) : [];
      });
      var F = Va($($({}, U), {}, {
        path: [x, T, W]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var G = sp(j), Q = G.token, te = G.flush, ee = as(S, M, y), Pe = ".".concat(T), xe = ns(S, M, ee, {
          deprecatedTokens: m.deprecatedTokens
        });
        H && ee && ue(ee) === "object" && Object.keys(ee).forEach(function(ke) {
          ee[ke] = "var(".concat(Mr(ke, ts(S, H.prefix)), ")");
        });
        var Se = si(Q, {
          componentCls: Pe,
          prefixCls: T,
          iconCls: ".".concat(W),
          antCls: ".".concat(D),
          calc: k,
          // @ts-ignore
          max: _,
          // @ts-ignore
          min: L
        }, H ? ee : xe), We = g(Se, {
          hashId: I,
          prefixCls: T,
          rootPrefixCls: D,
          iconPrefixCls: W
        });
        te(S, xe);
        var ge = typeof i == "function" ? i(Se, T, N, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : ge, We];
      });
      return [F, I];
    };
  }
  function d(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, g, y, $({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), E = function(x) {
      var w = x.prefixCls, T = x.rootCls, N = T === void 0 ? w : T;
      return h(w, N), null;
    };
    return K.env.NODE_ENV !== "production" && (E.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), E;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const pp = "5.21.6";
function Ea(e) {
  return e >= 0 && e <= 255;
}
function Er(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Le(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new Le(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - i * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c), f = Math.round((a - s * (1 - c)) / c);
    if (Ea(u) && Ea(d) && Ea(f))
      return new Le({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Le({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var mp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ll(e) {
  const {
    override: t
  } = e, n = mp(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Jn).forEach((f) => {
    delete r[f];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, i = 576, l = 768, s = 992, c = 1200, u = 1600;
  if (a.motion === !1) {
    const f = "0s";
    a.motionDurationFast = f, a.motionDurationMid = f, a.motionDurationSlow = f;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Er(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Er(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Er(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 3,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Er(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: o,
    screenXSMin: o,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Le("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Le("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Le("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var is = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const ul = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, gp = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, vp = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, dl = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = is(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = ll(i), o && Object.entries(o).forEach((l) => {
    let [s, c] = l;
    const {
      theme: u
    } = c, d = is(c, ["theme"]);
    let f = d;
    u && (f = dl(Object.assign(Object.assign({}, i), d), {
      override: d
    }, u)), i[s] = f;
  }), i;
};
function Dn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = q.useContext(ol), o = `${pp}-${t || ""}`, i = n || al, [l, s, c] = Lf(i, [Jn, e], {
    salt: o,
    override: r,
    getComputedToken: dl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ll,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: ul,
      ignore: gp,
      preserve: vp
    }
  });
  return [i, c, t ? s : "", l, a];
}
const I0 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, yp = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, bp = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), j0 = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), xp = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Cp = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let l = {};
  return r !== !1 && (l = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [o]: Object.assign(Object.assign(Object.assign({}, l), i), {
      [a]: i
    })
  };
}, Sp = (e) => ({
  outline: `${$t(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Ep = (e) => ({
  "&:focus-visible": Object.assign({}, Sp(e))
}), fl = (e, t) => {
  const [n, r] = Dn();
  return Va({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, bp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: wp,
  genComponentStyleHook: _0,
  genSubStyleComponent: Tp
} = hp({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = p.useContext(Bt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Dn();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: a
    };
  },
  useCSP: () => {
    const {
      csp: e,
      iconPrefixCls: t
    } = p.useContext(Bt);
    return fl(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": xp(e)
  }],
  getCommonStyle: Cp,
  getCompUnitless: () => ul
}), Ap = Object.assign({}, zo), {
  useId: ss
} = Ap, Np = () => "", Pp = typeof ss > "u" ? Np : ss;
function Rp(e, t, n) {
  var r, a;
  const o = Ln("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, so), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : so.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = Pp();
  if (K.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || s);
    K.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Yo(() => {
    var c, u;
    if (!e)
      return t;
    const d = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((y) => {
      d[y] = Object.assign(Object.assign({}, d[y]), e.components[y]);
    });
    const f = `css-var-${s.replace(/:/g, "")}`, g = ((c = i.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: d,
      cssVar: g
    });
  }, [i, l], (c, u) => c.some((d, f) => {
    const g = u[f];
    return !cf(d, g, !0);
  }));
}
var Mp = ["children"], hl = /* @__PURE__ */ p.createContext({});
function kp(e) {
  var t = e.children, n = an(e, Mp);
  return /* @__PURE__ */ p.createElement(hl.Provider, {
    value: n
  }, t);
}
var Op = /* @__PURE__ */ function(e) {
  Zr(n, e);
  var t = Jr(n);
  function n() {
    return yt(this, n), t.apply(this, arguments);
  }
  return bt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(p.Component);
function Ip(e) {
  var t = p.useReducer(function(l) {
    return l + 1;
  }, 0), n = Y(t, 2), r = n[1], a = p.useRef(e), o = uo(function() {
    return a.current;
  }), i = uo(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, i];
}
var Nt = "none", wr = "appear", Tr = "enter", Ar = "leave", cs = "none", at = "prepare", hn = "start", pn = "active", ci = "end", pl = "prepared";
function ls(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function jp(e, t) {
  var n = {
    animationend: ls("Animation", "AnimationEnd"),
    transitionend: ls("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var _p = jp(At(), typeof window < "u" ? window : {}), ml = {};
if (At()) {
  var Lp = document.createElement("div");
  ml = Lp.style;
}
var Nr = {};
function gl(e) {
  if (Nr[e])
    return Nr[e];
  var t = _p[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in ml)
        return Nr[e] = t[o], Nr[e];
    }
  return "";
}
var vl = gl("animationend"), yl = gl("transitionend"), bl = !!(vl && yl), us = vl || "animationend", ds = yl || "transitionend";
function fs(e, t) {
  if (!e) return null;
  if (ue(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Dp = function(e) {
  var t = p.useRef();
  function n(a) {
    a && (a.removeEventListener(ds, e), a.removeEventListener(us, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(ds, e), a.addEventListener(us, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var xl = At() ? p.useLayoutEffect : p.useEffect;
const Fp = function() {
  var e = p.useRef(null);
  function t() {
    Hr.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Hr(function() {
      a <= 1 ? r({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : n(r, a - 1);
    });
    e.current = o;
  }
  return p.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var $p = [at, hn, pn, ci], Bp = [at, pl], Cl = !1, Hp = !0;
function Sl(e) {
  return e === pn || e === ci;
}
const Up = function(e, t, n) {
  var r = fo(cs), a = Y(r, 2), o = a[0], i = a[1], l = Fp(), s = Y(l, 2), c = s[0], u = s[1];
  function d() {
    i(at, !0);
  }
  var f = t ? Bp : $p;
  return xl(function() {
    if (o !== cs && o !== ci) {
      var g = f.indexOf(o), y = f[g + 1], m = n(o);
      m === Cl ? i(y, !0) : y && c(function(h) {
        function E() {
          h.isCanceled() || i(y, !0);
        }
        m === !0 ? E() : Promise.resolve(m).then(E);
      });
    }
  }, [e, o]), p.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, o];
};
function zp(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, g = r.onEnterPrepare, y = r.onLeavePrepare, m = r.onAppearStart, h = r.onEnterStart, E = r.onLeaveStart, S = r.onAppearActive, x = r.onEnterActive, w = r.onLeaveActive, T = r.onAppearEnd, N = r.onEnterEnd, C = r.onLeaveEnd, A = r.onVisibleChanged, M = fo(), I = Y(M, 2), j = I[0], H = I[1], B = Ip(Nt), D = Y(B, 2), W = D[0], R = D[1], P = fo(null), k = Y(P, 2), O = k[0], _ = k[1], L = W(), U = p.useRef(!1), F = p.useRef(null);
  function G() {
    return n();
  }
  var Q = p.useRef(!1);
  function te() {
    R(Nt), _(null, !0);
  }
  var ee = uo(function(fe) {
    var de = W();
    if (de !== Nt) {
      var Ee = G();
      if (!(fe && !fe.deadline && fe.target !== Ee)) {
        var Ge = Q.current, Be;
        de === wr && Ge ? Be = T == null ? void 0 : T(Ee, fe) : de === Tr && Ge ? Be = N == null ? void 0 : N(Ee, fe) : de === Ar && Ge && (Be = C == null ? void 0 : C(Ee, fe)), Ge && Be !== !1 && te();
      }
    }
  }), Pe = Dp(ee), xe = Y(Pe, 1), Se = xe[0], We = function(de) {
    switch (de) {
      case wr:
        return Z(Z(Z({}, at, f), hn, m), pn, S);
      case Tr:
        return Z(Z(Z({}, at, g), hn, h), pn, x);
      case Ar:
        return Z(Z(Z({}, at, y), hn, E), pn, w);
      default:
        return {};
    }
  }, ge = p.useMemo(function() {
    return We(L);
  }, [L]), ke = Up(L, !e, function(fe) {
    if (fe === at) {
      var de = ge[at];
      return de ? de(G()) : Cl;
    }
    if (ve in ge) {
      var Ee;
      _(((Ee = ge[ve]) === null || Ee === void 0 ? void 0 : Ee.call(ge, G(), null)) || null);
    }
    return ve === pn && L !== Nt && (Se(G()), u > 0 && (clearTimeout(F.current), F.current = setTimeout(function() {
      ee({
        deadline: !0
      });
    }, u))), ve === pl && te(), Hp;
  }), z = Y(ke, 2), $e = z[0], ve = z[1], Ke = Sl(ve);
  Q.current = Ke, xl(function() {
    H(t);
    var fe = U.current;
    U.current = !0;
    var de;
    !fe && t && l && (de = wr), fe && t && o && (de = Tr), (fe && !t && c || !fe && d && !t && c) && (de = Ar);
    var Ee = We(de);
    de && (e || Ee[at]) ? (R(de), $e()) : R(Nt);
  }, [t]), p.useEffect(function() {
    // Cancel appear
    (L === wr && !l || // Cancel enter
    L === Tr && !o || // Cancel leave
    L === Ar && !c) && R(Nt);
  }, [l, o, c]), p.useEffect(function() {
    return function() {
      U.current = !1, clearTimeout(F.current);
    };
  }, []);
  var et = p.useRef(!1);
  p.useEffect(function() {
    j && (et.current = !0), j !== void 0 && L === Nt && ((et.current || j) && (A == null || A(j)), et.current = !0);
  }, [j, L]);
  var ut = O;
  return ge[at] && ve === hn && (ut = $({
    transition: "none"
  }, ut)), [L, ve, ut, j ?? t];
}
function Vp(e) {
  var t = e;
  ue(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, s = a.removeOnLeave, c = s === void 0 ? !0 : s, u = a.forceRender, d = a.children, f = a.motionName, g = a.leavedClassName, y = a.eventProps, m = p.useContext(hl), h = m.motion, E = n(a, h), S = p.useRef(), x = p.useRef();
    function w() {
      try {
        return S.current instanceof HTMLElement ? S.current : Xd(x.current);
      } catch {
        return null;
      }
    }
    var T = zp(E, l, w, a), N = Y(T, 4), C = N[0], A = N[1], M = N[2], I = N[3], j = p.useRef(I);
    I && (j.current = !0);
    var H = p.useCallback(function(O) {
      S.current = O, vc(o, O);
    }, [o]), B, D = $($({}, y), {}, {
      visible: l
    });
    if (!d)
      B = null;
    else if (C === Nt)
      I ? B = d($({}, D), H) : !c && j.current && g ? B = d($($({}, D), {}, {
        className: g
      }), H) : u || !c && !g ? B = d($($({}, D), {}, {
        style: {
          display: "none"
        }
      }), H) : B = null;
    else {
      var W;
      A === at ? W = "prepare" : Sl(A) ? W = "active" : A === hn && (W = "start");
      var R = fs(f, "".concat(C, "-").concat(W));
      B = d($($({}, D), {}, {
        className: Ve(fs(f, C), Z(Z({}, R, R && W), f, typeof f == "string")),
        style: M
      }), H);
    }
    if (/* @__PURE__ */ p.isValidElement(B) && Zd(B)) {
      var P = B, k = P.ref;
      k || (B = /* @__PURE__ */ p.cloneElement(B, {
        ref: H
      }));
    }
    return /* @__PURE__ */ p.createElement(Op, {
      ref: x
    }, B);
  });
  return r.displayName = "CSSMotion", r;
}
const Wp = Vp(bl);
var po = "add", mo = "keep", go = "remove", wa = "removed";
function Kp(e) {
  var t;
  return e && ue(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, $($({}, t), {}, {
    key: String(t.key)
  });
}
function vo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Kp);
}
function Gp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = vo(e), i = vo(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(g) {
          return $($({}, g), {}, {
            status: po
          });
        })), r = d), n.push($($({}, f), {}, {
          status: mo
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push($($({}, c), {}, {
      status: go
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return $($({}, c), {}, {
      status: po
    });
  })));
  var l = {};
  n.forEach(function(c) {
    var u = c.key;
    l[u] = (l[u] || 0) + 1;
  });
  var s = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return s.forEach(function(c) {
    n = n.filter(function(u) {
      var d = u.key, f = u.status;
      return d !== c || f !== go;
    }), n.forEach(function(u) {
      u.key === c && (u.status = mo);
    });
  }), n;
}
var Qp = ["component", "children", "onVisibleChanged", "onAllRemoved"], qp = ["status"], Xp = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Yp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Wp, n = /* @__PURE__ */ function(r) {
    Zr(o, r);
    var a = Jr(o);
    function o() {
      var i;
      yt(this, o);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(s)), Z(tn(i), "state", {
        keyEntities: []
      }), Z(tn(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(g) {
            return g.key !== u ? g : $($({}, g), {}, {
              status: wa
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(g) {
            var y = g.status;
            return y !== wa;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return bt(o, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, u = c.component, d = c.children, f = c.onVisibleChanged;
        c.onAllRemoved;
        var g = an(c, Qp), y = u || p.Fragment, m = {};
        return Xp.forEach(function(h) {
          m[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ p.createElement(y, g, s.map(function(h, E) {
          var S = h.status, x = an(h, qp), w = S === po || S === mo;
          return /* @__PURE__ */ p.createElement(t, Ze({}, m, {
            key: x.key,
            visible: w,
            eventProps: x,
            onVisibleChanged: function(N) {
              f == null || f(N, {
                key: x.key
              }), N || l.removeKey(x.key);
            }
          }), function(T, N) {
            return d($($({}, T), {}, {
              index: E
            }), N);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, u = s.keyEntities, d = vo(c), f = Gp(u, d);
        return {
          keyEntities: f.filter(function(g) {
            var y = u.find(function(m) {
              var h = m.key;
              return g.key === h;
            });
            return !(y && y.status === wa && g.status === go);
          })
        };
      }
    }]), o;
  }(p.Component);
  return Z(n, "defaultProps", {
    component: "div"
  }), n;
}
const Zp = Yp(bl);
function Jp(e) {
  const {
    children: t
  } = e, [, n] = Dn(), {
    motion: r
  } = n, a = p.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ p.createElement(kp, {
    motion: r
  }, t) : t;
}
const El = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Ln("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
K.env.NODE_ENV !== "production" && (El.displayName = "PropWarning");
const em = K.env.NODE_ENV !== "production" ? El : () => null;
var tm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let yo = !1;
const nm = K.env.NODE_ENV !== "production" ? (e) => {
  K.env.NODE_ENV !== "production" && oa(!yo, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), rm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Vr, wl, Tl, Al;
function Lr() {
  return Vr || co;
}
function am() {
  return wl || ii;
}
function om(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const im = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (Vr = t), n !== void 0 && (wl = n), "holderRender" in e && (Al = a), r && (om(r) ? (K.env.NODE_ENV !== "production" && oa(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Zh(Lr(), r)) : Tl = r);
}, Nl = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Lr()}-${e}` : Lr()),
  getIconPrefixCls: am,
  getRootPrefixCls: () => Vr || Lr(),
  getTheme: () => Tl,
  holderRender: Al
}), sm = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: i,
    locale: l,
    componentSize: s,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: y,
    popupOverflow: m,
    legacyLocale: h,
    parentContext: E,
    iconPrefixCls: S,
    theme: x,
    componentDisabled: w,
    segmented: T,
    statistic: N,
    spin: C,
    calendar: A,
    carousel: M,
    cascader: I,
    collapse: j,
    typography: H,
    checkbox: B,
    descriptions: D,
    divider: W,
    drawer: R,
    skeleton: P,
    steps: k,
    image: O,
    layout: _,
    list: L,
    mentions: U,
    modal: F,
    progress: G,
    result: Q,
    slider: te,
    breadcrumb: ee,
    menu: Pe,
    pagination: xe,
    input: Se,
    textArea: We,
    empty: ge,
    badge: ke,
    radio: z,
    rate: $e,
    switch: ve,
    transfer: Ke,
    avatar: et,
    message: ut,
    tag: fe,
    table: de,
    card: Ee,
    tabs: Ge,
    timeline: Be,
    timePicker: tt,
    upload: re,
    notification: Ce,
    tree: Oe,
    colorPicker: hr,
    datePicker: mi,
    rangePicker: Eu,
    flex: wu,
    wave: Tu,
    dropdown: Au,
    warning: Nu,
    tour: Pu,
    floatButtonGroup: Ru,
    variant: Mu,
    inputNumber: ku,
    treeSelect: Ou
  } = e, gi = p.useCallback((ye, Te) => {
    const {
      prefixCls: dt
    } = e;
    if (Te)
      return Te;
    const ft = dt || E.getPrefixCls("");
    return ye ? `${ft}-${ye}` : ft;
  }, [E.getPrefixCls, e.prefixCls]), $n = S || E.iconPrefixCls || ii, Bn = n || E.csp;
  fl($n, Bn);
  const pr = Rp(x, E.theme, {
    prefixCls: gi("")
  });
  K.env.NODE_ENV !== "production" && (yo = yo || !!pr);
  const la = {
    csp: Bn,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: l || h,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: y ?? g,
    popupOverflow: m,
    getPrefixCls: gi,
    iconPrefixCls: $n,
    theme: pr,
    segmented: T,
    statistic: N,
    spin: C,
    calendar: A,
    carousel: M,
    cascader: I,
    collapse: j,
    typography: H,
    checkbox: B,
    descriptions: D,
    divider: W,
    drawer: R,
    skeleton: P,
    steps: k,
    image: O,
    input: Se,
    textArea: We,
    layout: _,
    list: L,
    mentions: U,
    modal: F,
    progress: G,
    result: Q,
    slider: te,
    breadcrumb: ee,
    menu: Pe,
    pagination: xe,
    empty: ge,
    badge: ke,
    radio: z,
    rate: $e,
    switch: ve,
    transfer: Ke,
    avatar: et,
    message: ut,
    tag: fe,
    table: de,
    card: Ee,
    tabs: Ge,
    timeline: Be,
    timePicker: tt,
    upload: re,
    notification: Ce,
    tree: Oe,
    colorPicker: hr,
    datePicker: mi,
    rangePicker: Eu,
    flex: wu,
    wave: Tu,
    dropdown: Au,
    warning: Nu,
    tour: Pu,
    floatButtonGroup: Ru,
    variant: Mu,
    inputNumber: ku,
    treeSelect: Ou
  };
  K.env.NODE_ENV !== "production" && Ln("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ln = Object.assign({}, E);
  Object.keys(la).forEach((ye) => {
    la[ye] !== void 0 && (ln[ye] = la[ye]);
  }), rm.forEach((ye) => {
    const Te = e[ye];
    Te && (ln[ye] = Te);
  }), typeof r < "u" && (ln.button = Object.assign({
    autoInsertSpace: r
  }, ln.button));
  const un = Yo(() => ln, ln, (ye, Te) => {
    const dt = Object.keys(ye), ft = Object.keys(Te);
    return dt.length !== ft.length || dt.some((mr) => ye[mr] !== Te[mr]);
  }), Iu = p.useMemo(() => ({
    prefixCls: $n,
    csp: Bn
  }), [$n, Bn]);
  let we = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(em, {
    dropdownMatchSelectWidth: g
  }), t);
  const vi = p.useMemo(() => {
    var ye, Te, dt, ft;
    return mh(((ye = ia.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((dt = (Te = un.locale) === null || Te === void 0 ? void 0 : Te.Form) === null || dt === void 0 ? void 0 : dt.defaultValidateMessages) || {}, ((ft = un.form) === null || ft === void 0 ? void 0 : ft.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [un, i == null ? void 0 : i.validateMessages]);
  Object.keys(vi).length > 0 && (we = /* @__PURE__ */ p.createElement(vh.Provider, {
    value: vi
  }, we)), l && (we = /* @__PURE__ */ p.createElement(Jc, {
    locale: l,
    _ANT_MARK__: Zc
  }, we)), ($n || Bn) && (we = /* @__PURE__ */ p.createElement(ai.Provider, {
    value: Iu
  }, we)), s && (we = /* @__PURE__ */ p.createElement(ep, {
    size: s
  }, we)), we = /* @__PURE__ */ p.createElement(Jp, null, we);
  const ju = p.useMemo(() => {
    const ye = pr || {}, {
      algorithm: Te,
      token: dt,
      components: ft,
      cssVar: mr
    } = ye, _u = tm(ye, ["algorithm", "token", "components", "cssVar"]), yi = Te && (!Array.isArray(Te) || Te.length > 0) ? $a(Te) : al, ua = {};
    Object.entries(ft || {}).forEach((Lu) => {
      let [Du, Fu] = Lu;
      const xt = Object.assign({}, Fu);
      "algorithm" in xt && (xt.algorithm === !0 ? xt.theme = yi : (Array.isArray(xt.algorithm) || typeof xt.algorithm == "function") && (xt.theme = $a(xt.algorithm)), delete xt.algorithm), ua[Du] = xt;
    });
    const bi = Object.assign(Object.assign({}, Jn), dt);
    return Object.assign(Object.assign({}, _u), {
      theme: yi,
      token: bi,
      components: ua,
      override: Object.assign({
        override: bi
      }, ua),
      cssVar: mr
    });
  }, [pr]);
  return x && (we = /* @__PURE__ */ p.createElement(ol.Provider, {
    value: ju
  }, we)), un.warning && (we = /* @__PURE__ */ p.createElement(qc.Provider, {
    value: un.warning
  }, we)), w !== void 0 && (we = /* @__PURE__ */ p.createElement(Jh, {
    disabled: w
  }, we)), /* @__PURE__ */ p.createElement(Bt.Provider, {
    value: un
  }, we);
}, cn = (e) => {
  const t = p.useContext(Bt), n = p.useContext(Yc);
  return /* @__PURE__ */ p.createElement(sm, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
cn.ConfigContext = Bt;
cn.SizeContext = er;
cn.config = im;
cn.useConfig = tp;
Object.defineProperty(cn, "SizeContext", {
  get: () => (K.env.NODE_ENV !== "production" && oa(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), er)
});
K.env.NODE_ENV !== "production" && (cn.displayName = "ConfigProvider");
var cm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Pl(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function lm(e) {
  return Pl(e) instanceof ShadowRoot;
}
function um(e) {
  return lm(e) ? Pl(e) : null;
}
function dm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function fm(e, t) {
  Ht(e, "[@ant-design/icons] ".concat(t));
}
function hs(e) {
  return ue(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ue(e.icon) === "object" || typeof e.icon == "function");
}
function ps() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[dm(n)] = r;
    }
    return t;
  }, {});
}
function bo(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, $($({
    key: t
  }, ps(e.attrs)), n), (e.children || []).map(function(r, a) {
    return bo(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, $({
    key: t
  }, ps(e.attrs)), (e.children || []).map(function(r, a) {
    return bo(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Rl(e) {
  return Zn(e)[0];
}
function Ml(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var hm = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, pm = function(t) {
  var n = p.useContext(ai), r = n.csp, a = n.prefixCls, o = hm;
  a && (o = o.replace(/anticon/g, a)), p.useEffect(function() {
    var i = t.current, l = um(i);
    nn(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, mm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Wn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function gm(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Wn.primaryColor = t, Wn.secondaryColor = n || Rl(t), Wn.calculated = !!n;
}
function vm() {
  return $({}, Wn);
}
var Fn = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, s = an(t, mm), c = p.useRef(), u = Wn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || Rl(i)
  }), pm(c), fm(hs(n), "icon should be icon definiton, but got ".concat(n)), !hs(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = $($({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), bo(d.icon, "svg-".concat(d.name), $($({
    className: r,
    onClick: a,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: c
  }));
};
Fn.displayName = "IconReact";
Fn.getTwoToneColors = vm;
Fn.setTwoToneColors = gm;
function kl(e) {
  var t = Ml(e), n = Y(t, 2), r = n[0], a = n[1];
  return Fn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function ym() {
  var e = Fn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var bm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
kl(zr.primary);
var Ut = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = an(e, bm), u = p.useContext(ai), d = u.prefixCls, f = d === void 0 ? "anticon" : d, g = u.rootClassName, y = Ve(g, f, Z(Z({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), m = i;
  m === void 0 && l && (m = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, E = Ml(s), S = Y(E, 2), x = S[0], w = S[1];
  return /* @__PURE__ */ p.createElement("span", Ze({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: y
  }), /* @__PURE__ */ p.createElement(Fn, {
    icon: r,
    primaryColor: x,
    secondaryColor: w,
    style: h
  }));
});
Ut.displayName = "AntdIcon";
Ut.getTwoToneColor = ym;
Ut.setTwoToneColor = kl;
var xm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Ut, Ze({}, t, {
    ref: n,
    icon: cm
  }));
}, Ol = /* @__PURE__ */ p.forwardRef(xm);
K.env.NODE_ENV !== "production" && (Ol.displayName = "CheckCircleFilled");
var Cm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Sm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Ut, Ze({}, t, {
    ref: n,
    icon: Cm
  }));
}, Il = /* @__PURE__ */ p.forwardRef(Sm);
K.env.NODE_ENV !== "production" && (Il.displayName = "CloseCircleFilled");
var Em = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, wm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Ut, Ze({}, t, {
    ref: n,
    icon: Em
  }));
}, jl = /* @__PURE__ */ p.forwardRef(wm);
K.env.NODE_ENV !== "production" && (jl.displayName = "CloseOutlined");
var Tm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Am = function(t, n) {
  return /* @__PURE__ */ p.createElement(Ut, Ze({}, t, {
    ref: n,
    icon: Tm
  }));
}, _l = /* @__PURE__ */ p.forwardRef(Am);
K.env.NODE_ENV !== "production" && (_l.displayName = "ExclamationCircleFilled");
var Nm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Pm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Ut, Ze({}, t, {
    ref: n,
    icon: Nm
  }));
}, Ll = /* @__PURE__ */ p.forwardRef(Pm);
K.env.NODE_ENV !== "production" && (Ll.displayName = "InfoCircleFilled");
var Rm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Mm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, km = "".concat(Rm, " ").concat(Mm).split(/[\s\n]+/), Om = "aria-", Im = "data-";
function ms(e, t) {
  return e.indexOf(t) === 0;
}
function jm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = $({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || ms(a, Om)) || // Data
    n.data && ms(a, Im) || // Attr
    n.attr && km.includes(a)) && (r[a] = e[a]);
  }), r;
}
const Dl = (e) => {
  const [, , , , t] = Dn();
  return t ? `${e}-css-var` : "";
};
var X = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var n = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    n >= X.F1 && n <= X.F12)
      return !1;
    switch (n) {
      case X.ALT:
      case X.CAPS_LOCK:
      case X.CONTEXT_MENU:
      case X.CTRL:
      case X.DOWN:
      case X.END:
      case X.ESC:
      case X.HOME:
      case X.INSERT:
      case X.LEFT:
      case X.MAC_FF_META:
      case X.META:
      case X.NUMLOCK:
      case X.NUM_CENTER:
      case X.PAGE_DOWN:
      case X.PAGE_UP:
      case X.PAUSE:
      case X.PRINT_SCREEN:
      case X.RIGHT:
      case X.SHIFT:
      case X.UP:
      case X.WIN_KEY:
      case X.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= X.ZERO && t <= X.NINE || t >= X.NUM_ZERO && t <= X.NUM_MULTIPLY || t >= X.A && t <= X.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case X.SPACE:
      case X.QUESTION_MARK:
      case X.NUM_PLUS:
      case X.NUM_MINUS:
      case X.NUM_PERIOD:
      case X.NUM_DIVISION:
      case X.SEMICOLON:
      case X.DASH:
      case X.EQUALS:
      case X.COMMA:
      case X.PERIOD:
      case X.SLASH:
      case X.APOSTROPHE:
      case X.SINGLE_QUOTE:
      case X.OPEN_SQUARE_BRACKET:
      case X.BACKSLASH:
      case X.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, Fl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, a = e.className, o = e.duration, i = o === void 0 ? 4.5 : o, l = e.showProgress, s = e.pauseOnHover, c = s === void 0 ? !0 : s, u = e.eventKey, d = e.content, f = e.closable, g = e.closeIcon, y = g === void 0 ? "x" : g, m = e.props, h = e.onClick, E = e.onNoticeClose, S = e.times, x = e.hovering, w = p.useState(!1), T = Y(w, 2), N = T[0], C = T[1], A = p.useState(0), M = Y(A, 2), I = M[0], j = M[1], H = p.useState(0), B = Y(H, 2), D = B[0], W = B[1], R = x || N, P = i > 0 && l, k = function() {
    E(u);
  }, O = function(Q) {
    (Q.key === "Enter" || Q.code === "Enter" || Q.keyCode === X.ENTER) && k();
  };
  p.useEffect(function() {
    if (!R && i > 0) {
      var G = Date.now() - D, Q = setTimeout(function() {
        k();
      }, i * 1e3 - D);
      return function() {
        c && clearTimeout(Q), W(Date.now() - G);
      };
    }
  }, [i, R, S]), p.useEffect(function() {
    if (!R && P && (c || D === 0)) {
      var G = performance.now(), Q, te = function ee() {
        cancelAnimationFrame(Q), Q = requestAnimationFrame(function(Pe) {
          var xe = Pe + D - G, Se = Math.min(xe / (i * 1e3), 1);
          j(Se * 100), Se < 1 && ee();
        });
      };
      return te(), function() {
        c && cancelAnimationFrame(Q);
      };
    }
  }, [i, D, R, P, S]);
  var _ = p.useMemo(function() {
    return ue(f) === "object" && f !== null ? f : f ? {
      closeIcon: y
    } : {};
  }, [f, y]), L = jm(_, !0), U = 100 - (!I || I < 0 ? 0 : I > 100 ? 100 : I), F = "".concat(n, "-notice");
  return /* @__PURE__ */ p.createElement("div", Ze({}, m, {
    ref: t,
    className: Ve(F, a, Z({}, "".concat(F, "-closable"), f)),
    style: r,
    onMouseEnter: function(Q) {
      var te;
      C(!0), m == null || (te = m.onMouseEnter) === null || te === void 0 || te.call(m, Q);
    },
    onMouseLeave: function(Q) {
      var te;
      C(!1), m == null || (te = m.onMouseLeave) === null || te === void 0 || te.call(m, Q);
    },
    onClick: h
  }), /* @__PURE__ */ p.createElement("div", {
    className: "".concat(F, "-content")
  }, d), f && /* @__PURE__ */ p.createElement("a", Ze({
    tabIndex: 0,
    className: "".concat(F, "-close"),
    onKeyDown: O,
    "aria-label": "Close"
  }, L, {
    onClick: function(Q) {
      Q.preventDefault(), Q.stopPropagation(), k();
    }
  }), _.closeIcon), P && /* @__PURE__ */ p.createElement("progress", {
    className: "".concat(F, "-progress"),
    max: "100",
    value: U
  }, U + "%"));
}), $l = /* @__PURE__ */ q.createContext({}), _m = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ q.createElement($l.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, gs = 8, vs = 3, ys = 16, Lm = function(t) {
  var n = {
    offset: gs,
    threshold: vs,
    gap: ys
  };
  if (t && ue(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : gs, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : vs, n.gap = (o = t.gap) !== null && o !== void 0 ? o : ys;
  }
  return [!!t, n];
}, Dm = ["className", "style", "classNames", "styles"], Bl = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, i = t.style, l = t.motion, s = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, d = p.useContext($l), f = d.classNames, g = p.useRef({}), y = p.useState(null), m = Y(y, 2), h = m[0], E = m[1], S = p.useState([]), x = Y(S, 2), w = x[0], T = x[1], N = n.map(function(R) {
    return {
      config: R,
      key: String(R.key)
    };
  }), C = Lm(u), A = Y(C, 2), M = A[0], I = A[1], j = I.offset, H = I.threshold, B = I.gap, D = M && (w.length > 0 || N.length <= H), W = typeof l == "function" ? l(r) : l;
  return p.useEffect(function() {
    M && w.length > 1 && T(function(R) {
      return R.filter(function(P) {
        return N.some(function(k) {
          var O = k.key;
          return P === O;
        });
      });
    });
  }, [w, N, M]), p.useEffect(function() {
    var R;
    if (M && g.current[(R = N[N.length - 1]) === null || R === void 0 ? void 0 : R.key]) {
      var P;
      E(g.current[(P = N[N.length - 1]) === null || P === void 0 ? void 0 : P.key]);
    }
  }, [N, M]), /* @__PURE__ */ q.createElement(Zp, Ze({
    key: r,
    className: Ve(a, "".concat(a, "-").concat(r), f == null ? void 0 : f.list, o, Z(Z({}, "".concat(a, "-stack"), !!M), "".concat(a, "-stack-expanded"), D)),
    style: i,
    keys: N,
    motionAppear: !0
  }, W, {
    onAllRemoved: function() {
      s(r);
    }
  }), function(R, P) {
    var k = R.config, O = R.className, _ = R.style, L = R.index, U = k, F = U.key, G = U.times, Q = String(F), te = k, ee = te.className, Pe = te.style, xe = te.classNames, Se = te.styles, We = an(te, Dm), ge = N.findIndex(function(Be) {
      return Be.key === Q;
    }), ke = {};
    if (M) {
      var z = N.length - 1 - (ge > -1 ? ge : L - 1), $e = r === "top" || r === "bottom" ? "-50%" : "0";
      if (z > 0) {
        var ve, Ke, et;
        ke.height = D ? (ve = g.current[Q]) === null || ve === void 0 ? void 0 : ve.offsetHeight : h == null ? void 0 : h.offsetHeight;
        for (var ut = 0, fe = 0; fe < z; fe++) {
          var de;
          ut += ((de = g.current[N[N.length - 1 - fe].key]) === null || de === void 0 ? void 0 : de.offsetHeight) + B;
        }
        var Ee = (D ? ut : z * j) * (r.startsWith("top") ? 1 : -1), Ge = !D && h !== null && h !== void 0 && h.offsetWidth && (Ke = g.current[Q]) !== null && Ke !== void 0 && Ke.offsetWidth ? ((h == null ? void 0 : h.offsetWidth) - j * 2 * (z < 3 ? z : 3)) / ((et = g.current[Q]) === null || et === void 0 ? void 0 : et.offsetWidth) : 1;
        ke.transform = "translate3d(".concat($e, ", ").concat(Ee, "px, 0) scaleX(").concat(Ge, ")");
      } else
        ke.transform = "translate3d(".concat($e, ", 0, 0)");
    }
    return /* @__PURE__ */ q.createElement("div", {
      ref: P,
      className: Ve("".concat(a, "-notice-wrapper"), O, xe == null ? void 0 : xe.wrapper),
      style: $($($({}, _), ke), Se == null ? void 0 : Se.wrapper),
      onMouseEnter: function() {
        return T(function(tt) {
          return tt.includes(Q) ? tt : [].concat(Fe(tt), [Q]);
        });
      },
      onMouseLeave: function() {
        return T(function(tt) {
          return tt.filter(function(re) {
            return re !== Q;
          });
        });
      }
    }, /* @__PURE__ */ q.createElement(Fl, Ze({}, We, {
      ref: function(tt) {
        ge > -1 ? g.current[Q] = tt : delete g.current[Q];
      },
      prefixCls: a,
      classNames: xe,
      styles: Se,
      className: Ve(ee, f == null ? void 0 : f.notice),
      style: Pe,
      times: G,
      key: F,
      eventKey: F,
      onNoticeClose: c,
      hovering: M && w.length > 0
    })));
  });
};
K.env.NODE_ENV !== "production" && (Bl.displayName = "NoticeList");
var Hl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e.container, o = e.motion, i = e.maxCount, l = e.className, s = e.style, c = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = p.useState([]), g = Y(f, 2), y = g[0], m = g[1], h = function(M) {
    var I, j = y.find(function(H) {
      return H.key === M;
    });
    j == null || (I = j.onClose) === null || I === void 0 || I.call(j), m(function(H) {
      return H.filter(function(B) {
        return B.key !== M;
      });
    });
  };
  p.useImperativeHandle(t, function() {
    return {
      open: function(M) {
        m(function(I) {
          var j = Fe(I), H = j.findIndex(function(W) {
            return W.key === M.key;
          }), B = $({}, M);
          if (H >= 0) {
            var D;
            B.times = (((D = I[H]) === null || D === void 0 ? void 0 : D.times) || 0) + 1, j[H] = B;
          } else
            B.times = 0, j.push(B);
          return i > 0 && j.length > i && (j = j.slice(-i)), j;
        });
      },
      close: function(M) {
        h(M);
      },
      destroy: function() {
        m([]);
      }
    };
  });
  var E = p.useState({}), S = Y(E, 2), x = S[0], w = S[1];
  p.useEffect(function() {
    var A = {};
    y.forEach(function(M) {
      var I = M.placement, j = I === void 0 ? "topRight" : I;
      j && (A[j] = A[j] || [], A[j].push(M));
    }), Object.keys(x).forEach(function(M) {
      A[M] = A[M] || [];
    }), w(A);
  }, [y]);
  var T = function(M) {
    w(function(I) {
      var j = $({}, I), H = j[M] || [];
      return H.length || delete j[M], j;
    });
  }, N = p.useRef(!1);
  if (p.useEffect(function() {
    Object.keys(x).length > 0 ? N.current = !0 : N.current && (c == null || c(), N.current = !1);
  }, [x]), !a)
    return null;
  var C = Object.keys(x);
  return /* @__PURE__ */ Uo.createPortal(/* @__PURE__ */ p.createElement(p.Fragment, null, C.map(function(A) {
    var M = x[A], I = /* @__PURE__ */ p.createElement(Bl, {
      key: A,
      configList: M,
      placement: A,
      prefixCls: r,
      className: l == null ? void 0 : l(A),
      style: s == null ? void 0 : s(A),
      motion: o,
      onNoticeClose: h,
      onAllNoticeRemoved: T,
      stack: u
    });
    return d ? d(I, {
      prefixCls: r,
      key: A
    }) : I;
  })), a);
});
K.env.NODE_ENV !== "production" && (Hl.displayName = "Notifications");
var Fm = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], $m = function() {
  return document.body;
}, bs = 0;
function Bm() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(o) {
      var i = a[o];
      i !== void 0 && (e[o] = i);
    });
  }), e;
}
function Hm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? $m : t, r = e.motion, a = e.prefixCls, o = e.maxCount, i = e.className, l = e.style, s = e.onAllRemoved, c = e.stack, u = e.renderNotifications, d = an(e, Fm), f = p.useState(), g = Y(f, 2), y = g[0], m = g[1], h = p.useRef(), E = /* @__PURE__ */ p.createElement(Hl, {
    container: y,
    ref: h,
    prefixCls: a,
    motion: r,
    maxCount: o,
    className: i,
    style: l,
    onAllRemoved: s,
    stack: c,
    renderNotifications: u
  }), S = p.useState([]), x = Y(S, 2), w = x[0], T = x[1], N = p.useMemo(function() {
    return {
      open: function(A) {
        var M = Bm(d, A);
        (M.key === null || M.key === void 0) && (M.key = "rc-notification-".concat(bs), bs += 1), T(function(I) {
          return [].concat(Fe(I), [{
            type: "open",
            config: M
          }]);
        });
      },
      close: function(A) {
        T(function(M) {
          return [].concat(Fe(M), [{
            type: "close",
            key: A
          }]);
        });
      },
      destroy: function() {
        T(function(A) {
          return [].concat(Fe(A), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return p.useEffect(function() {
    m(n());
  }), p.useEffect(function() {
    h.current && w.length && (w.forEach(function(C) {
      switch (C.type) {
        case "open":
          h.current.open(C.config);
          break;
        case "close":
          h.current.close(C.key);
          break;
        case "destroy":
          h.current.destroy();
          break;
      }
    }), T(function(C) {
      return C.filter(function(A) {
        return !w.includes(A);
      });
    }));
  }, [w]), [N, E];
}
const Ul = /* @__PURE__ */ q.createContext(void 0);
K.env.NODE_ENV !== "production" && (Ul.displayName = "zIndexContext");
const Tt = 100, Um = 10, zl = Tt * Um, zm = zl + Tt, Vl = {
  Modal: Tt,
  Drawer: Tt,
  Popover: Tt,
  Popconfirm: Tt,
  Tooltip: Tt,
  Tour: Tt,
  FloatButton: Tt
}, Vm = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Wm(e) {
  return e in Vl;
}
const L0 = (e, t) => {
  const [, n] = Dn(), r = q.useContext(Ul), a = Wm(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Vl[e] : i += Vm[e], o = [r === void 0 ? t : i, i];
  }
  if (K.env.NODE_ENV !== "production") {
    const i = Ln(e), l = n.zIndexPopupBase + zm, s = o[0] || 0;
    K.env.NODE_ENV !== "production" && i(t !== void 0 || s <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function tr() {
  tr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(R, P, k) {
    R[P] = k.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(R, P, k) {
    return Object.defineProperty(R, P, {
      value: k,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[P];
  }
  try {
    c({}, "");
  } catch {
    c = function(k, O, _) {
      return k[O] = _;
    };
  }
  function u(R, P, k, O) {
    var _ = P && P.prototype instanceof E ? P : E, L = Object.create(_.prototype), U = new D(O || []);
    return a(L, "_invoke", {
      value: I(R, k, U)
    }), L;
  }
  function d(R, P, k) {
    try {
      return {
        type: "normal",
        arg: R.call(P, k)
      };
    } catch (O) {
      return {
        type: "throw",
        arg: O
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", g = "suspendedYield", y = "executing", m = "completed", h = {};
  function E() {
  }
  function S() {
  }
  function x() {
  }
  var w = {};
  c(w, i, function() {
    return this;
  });
  var T = Object.getPrototypeOf, N = T && T(T(W([])));
  N && N !== n && r.call(N, i) && (w = N);
  var C = x.prototype = E.prototype = Object.create(w);
  function A(R) {
    ["next", "throw", "return"].forEach(function(P) {
      c(R, P, function(k) {
        return this._invoke(P, k);
      });
    });
  }
  function M(R, P) {
    function k(_, L, U, F) {
      var G = d(R[_], R, L);
      if (G.type !== "throw") {
        var Q = G.arg, te = Q.value;
        return te && ue(te) == "object" && r.call(te, "__await") ? P.resolve(te.__await).then(function(ee) {
          k("next", ee, U, F);
        }, function(ee) {
          k("throw", ee, U, F);
        }) : P.resolve(te).then(function(ee) {
          Q.value = ee, U(Q);
        }, function(ee) {
          return k("throw", ee, U, F);
        });
      }
      F(G.arg);
    }
    var O;
    a(this, "_invoke", {
      value: function(L, U) {
        function F() {
          return new P(function(G, Q) {
            k(L, U, G, Q);
          });
        }
        return O = O ? O.then(F, F) : F();
      }
    });
  }
  function I(R, P, k) {
    var O = f;
    return function(_, L) {
      if (O === y) throw Error("Generator is already running");
      if (O === m) {
        if (_ === "throw") throw L;
        return {
          value: e,
          done: !0
        };
      }
      for (k.method = _, k.arg = L; ; ) {
        var U = k.delegate;
        if (U) {
          var F = j(U, k);
          if (F) {
            if (F === h) continue;
            return F;
          }
        }
        if (k.method === "next") k.sent = k._sent = k.arg;
        else if (k.method === "throw") {
          if (O === f) throw O = m, k.arg;
          k.dispatchException(k.arg);
        } else k.method === "return" && k.abrupt("return", k.arg);
        O = y;
        var G = d(R, P, k);
        if (G.type === "normal") {
          if (O = k.done ? m : g, G.arg === h) continue;
          return {
            value: G.arg,
            done: k.done
          };
        }
        G.type === "throw" && (O = m, k.method = "throw", k.arg = G.arg);
      }
    };
  }
  function j(R, P) {
    var k = P.method, O = R.iterator[k];
    if (O === e) return P.delegate = null, k === "throw" && R.iterator.return && (P.method = "return", P.arg = e, j(R, P), P.method === "throw") || k !== "return" && (P.method = "throw", P.arg = new TypeError("The iterator does not provide a '" + k + "' method")), h;
    var _ = d(O, R.iterator, P.arg);
    if (_.type === "throw") return P.method = "throw", P.arg = _.arg, P.delegate = null, h;
    var L = _.arg;
    return L ? L.done ? (P[R.resultName] = L.value, P.next = R.nextLoc, P.method !== "return" && (P.method = "next", P.arg = e), P.delegate = null, h) : L : (P.method = "throw", P.arg = new TypeError("iterator result is not an object"), P.delegate = null, h);
  }
  function H(R) {
    var P = {
      tryLoc: R[0]
    };
    1 in R && (P.catchLoc = R[1]), 2 in R && (P.finallyLoc = R[2], P.afterLoc = R[3]), this.tryEntries.push(P);
  }
  function B(R) {
    var P = R.completion || {};
    P.type = "normal", delete P.arg, R.completion = P;
  }
  function D(R) {
    this.tryEntries = [{
      tryLoc: "root"
    }], R.forEach(H, this), this.reset(!0);
  }
  function W(R) {
    if (R || R === "") {
      var P = R[i];
      if (P) return P.call(R);
      if (typeof R.next == "function") return R;
      if (!isNaN(R.length)) {
        var k = -1, O = function _() {
          for (; ++k < R.length; ) if (r.call(R, k)) return _.value = R[k], _.done = !1, _;
          return _.value = e, _.done = !0, _;
        };
        return O.next = O;
      }
    }
    throw new TypeError(ue(R) + " is not iterable");
  }
  return S.prototype = x, a(C, "constructor", {
    value: x,
    configurable: !0
  }), a(x, "constructor", {
    value: S,
    configurable: !0
  }), S.displayName = c(x, s, "GeneratorFunction"), t.isGeneratorFunction = function(R) {
    var P = typeof R == "function" && R.constructor;
    return !!P && (P === S || (P.displayName || P.name) === "GeneratorFunction");
  }, t.mark = function(R) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(R, x) : (R.__proto__ = x, c(R, s, "GeneratorFunction")), R.prototype = Object.create(C), R;
  }, t.awrap = function(R) {
    return {
      __await: R
    };
  }, A(M.prototype), c(M.prototype, l, function() {
    return this;
  }), t.AsyncIterator = M, t.async = function(R, P, k, O, _) {
    _ === void 0 && (_ = Promise);
    var L = new M(u(R, P, k, O), _);
    return t.isGeneratorFunction(P) ? L : L.next().then(function(U) {
      return U.done ? U.value : L.next();
    });
  }, A(C), c(C, s, "Generator"), c(C, i, function() {
    return this;
  }), c(C, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(R) {
    var P = Object(R), k = [];
    for (var O in P) k.push(O);
    return k.reverse(), function _() {
      for (; k.length; ) {
        var L = k.pop();
        if (L in P) return _.value = L, _.done = !1, _;
      }
      return _.done = !0, _;
    };
  }, t.values = W, D.prototype = {
    constructor: D,
    reset: function(P) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(B), !P) for (var k in this) k.charAt(0) === "t" && r.call(this, k) && !isNaN(+k.slice(1)) && (this[k] = e);
    },
    stop: function() {
      this.done = !0;
      var P = this.tryEntries[0].completion;
      if (P.type === "throw") throw P.arg;
      return this.rval;
    },
    dispatchException: function(P) {
      if (this.done) throw P;
      var k = this;
      function O(Q, te) {
        return U.type = "throw", U.arg = P, k.next = Q, te && (k.method = "next", k.arg = e), !!te;
      }
      for (var _ = this.tryEntries.length - 1; _ >= 0; --_) {
        var L = this.tryEntries[_], U = L.completion;
        if (L.tryLoc === "root") return O("end");
        if (L.tryLoc <= this.prev) {
          var F = r.call(L, "catchLoc"), G = r.call(L, "finallyLoc");
          if (F && G) {
            if (this.prev < L.catchLoc) return O(L.catchLoc, !0);
            if (this.prev < L.finallyLoc) return O(L.finallyLoc);
          } else if (F) {
            if (this.prev < L.catchLoc) return O(L.catchLoc, !0);
          } else {
            if (!G) throw Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc) return O(L.finallyLoc);
          }
        }
      }
    },
    abrupt: function(P, k) {
      for (var O = this.tryEntries.length - 1; O >= 0; --O) {
        var _ = this.tryEntries[O];
        if (_.tryLoc <= this.prev && r.call(_, "finallyLoc") && this.prev < _.finallyLoc) {
          var L = _;
          break;
        }
      }
      L && (P === "break" || P === "continue") && L.tryLoc <= k && k <= L.finallyLoc && (L = null);
      var U = L ? L.completion : {};
      return U.type = P, U.arg = k, L ? (this.method = "next", this.next = L.finallyLoc, h) : this.complete(U);
    },
    complete: function(P, k) {
      if (P.type === "throw") throw P.arg;
      return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg, this.method = "return", this.next = "end") : P.type === "normal" && k && (this.next = k), h;
    },
    finish: function(P) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var O = this.tryEntries[k];
        if (O.finallyLoc === P) return this.complete(O.completion, O.afterLoc), B(O), h;
      }
    },
    catch: function(P) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var O = this.tryEntries[k];
        if (O.tryLoc === P) {
          var _ = O.completion;
          if (_.type === "throw") {
            var L = _.arg;
            B(O);
          }
          return L;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(P, k, O) {
      return this.delegate = {
        iterator: W(P),
        resultName: k,
        nextLoc: O
      }, this.method === "next" && (this.arg = e), h;
    }
  }, t;
}
function xs(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a);
}
function Wl(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(s) {
        xs(o, r, a, i, l, "next", s);
      }
      function l(s) {
        xs(o, r, a, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var ur = $({}, Gu), Km = ur.version, Gm = ur.render, Qm = ur.unmountComponentAtNode, sa;
try {
  var qm = Number((Km || "").split(".")[0]);
  qm >= 18 && (sa = ur.createRoot);
} catch {
}
function Cs(e) {
  var t = ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ue(t) === "object" && (t.usingClientEntryPoint = e);
}
var Wr = "__rc_react_root__";
function Xm(e, t) {
  Cs(!0);
  var n = t[Wr] || sa(t);
  Cs(!1), n.render(e), t[Wr] = n;
}
function Ym(e, t) {
  Gm(e, t);
}
function Zm(e, t) {
  if (sa) {
    Xm(e, t);
    return;
  }
  Ym(e, t);
}
function Jm(e) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = Wl(/* @__PURE__ */ tr().mark(function e(t) {
    return tr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Wr]) === null || a === void 0 || a.unmount(), delete t[Wr];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), xo.apply(this, arguments);
}
function eg(e) {
  Qm(e);
}
function D0(e) {
  return Co.apply(this, arguments);
}
function Co() {
  return Co = Wl(/* @__PURE__ */ tr().mark(function e(t) {
    return tr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (sa === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Jm(t));
        case 2:
          eg(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Co.apply(this, arguments);
}
const tg = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, a = `${t}-notice`, o = new Un("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new Un("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), l = new Un("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), s = new Un("antNotificationLeftFadeIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  });
  return {
    [t]: {
      [`&${t}-top, &${t}-bottom`]: {
        marginInline: 0,
        [a]: {
          marginInline: "auto auto"
        }
      },
      [`&${t}-top`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: i
        }
      },
      [`&${t}-bottom`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: l
        }
      },
      [`&${t}-topRight, &${t}-bottomRight`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: o
        }
      },
      [`&${t}-topLeft, &${t}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: !0
        },
        marginLeft: {
          value: n,
          _skip_check_: !0
        },
        [a]: {
          marginInlineEnd: "auto",
          marginInlineStart: 0
        },
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: s
        }
      }
    }
  };
}, ng = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], rg = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, ag = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [rg[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, og = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      overflow: "hidden",
      [`& > ${e.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${e.motionDurationMid}`
      }
    };
  return Object.assign({
    [`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: "hidden",
      color: "transparent",
      pointerEvents: "none"
    }
  }, t);
}, ig = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, sg = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `all ${e.motionDurationSlow}, backdrop-filter 0s`,
        position: "absolute"
      }, og(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, ig(e))
    },
    [`${t}-stack${t}-stack-expanded`]: {
      [`& > ${t}-notice-wrapper`]: {
        "&:not(:nth-last-child(-n + 1))": {
          opacity: 1,
          overflow: "unset",
          color: "inherit",
          pointerEvents: "auto",
          [`& > ${e.componentCls}-notice`]: {
            opacity: 1
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          height: e.margin,
          width: "100%",
          insetInline: 0,
          bottom: e.calc(e.margin).mul(-1).equal(),
          background: "transparent",
          pointerEvents: "auto"
        }
      }
    }
  }, ng.map((n) => ag(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, Kl = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadow: r,
    fontSizeLG: a,
    notificationMarginBottom: o,
    borderRadiusLG: i,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: c,
    colorError: u,
    colorTextHeading: d,
    notificationBg: f,
    notificationPadding: g,
    notificationMarginEdge: y,
    notificationProgressBg: m,
    notificationProgressHeight: h,
    fontSize: E,
    lineHeight: S,
    width: x,
    notificationIconSize: w,
    colorText: T
  } = e, N = `${n}-notice`;
  return {
    position: "relative",
    marginBottom: o,
    marginInlineStart: "auto",
    background: f,
    borderRadius: i,
    boxShadow: r,
    [N]: {
      padding: g,
      width: x,
      maxWidth: `calc(100vw - ${$t(e.calc(y).mul(2).equal())})`,
      overflow: "hidden",
      lineHeight: S,
      wordWrap: "break-word"
    },
    [`${N}-message`]: {
      marginBottom: e.marginXS,
      color: d,
      fontSize: a,
      lineHeight: e.lineHeightLG
    },
    [`${N}-description`]: {
      fontSize: E,
      color: T
    },
    [`${N}-closable ${N}-message`]: {
      paddingInlineEnd: e.paddingLG
    },
    [`${N}-with-icon ${N}-message`]: {
      marginBottom: e.marginXS,
      marginInlineStart: e.calc(e.marginSM).add(w).equal(),
      fontSize: a
    },
    [`${N}-with-icon ${N}-description`]: {
      marginInlineStart: e.calc(e.marginSM).add(w).equal(),
      fontSize: E
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${N}-icon`]: {
      position: "absolute",
      fontSize: w,
      lineHeight: 1,
      // icon-font
      [`&-success${t}`]: {
        color: l
      },
      [`&-info${t}`]: {
        color: s
      },
      [`&-warning${t}`]: {
        color: c
      },
      [`&-error${t}`]: {
        color: u
      }
    },
    [`${N}-close`]: Object.assign({
      position: "absolute",
      top: e.notificationPaddingVertical,
      insetInlineEnd: e.notificationPaddingHorizontal,
      color: e.colorIcon,
      outline: "none",
      width: e.notificationCloseButtonSize,
      height: e.notificationCloseButtonSize,
      borderRadius: e.borderRadiusSM,
      transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:hover": {
        color: e.colorIconHover,
        backgroundColor: e.colorBgTextHover
      },
      "&:active": {
        backgroundColor: e.colorBgTextActive
      }
    }, Ep(e)),
    [`${N}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      WebkitAppearance: "none",
      inlineSize: `calc(100% - ${$t(i)} * 2)`,
      left: {
        _skip_check_: !0,
        value: i
      },
      right: {
        _skip_check_: !0,
        value: i
      },
      bottom: 0,
      blockSize: h,
      border: 0,
      "&, &::-webkit-progress-bar": {
        borderRadius: i,
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      },
      "&::-moz-progress-bar": {
        background: m
      },
      "&::-webkit-progress-value": {
        borderRadius: i,
        background: m
      }
    },
    [`${N}-btn`]: {
      float: "right",
      marginTop: e.marginSM
    }
  };
}, cg = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: a,
    motionEaseInOut: o
  } = e, i = `${t}-notice`, l = new Un("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: n
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, yp(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginRight: {
          value: r,
          _skip_check_: !0
        },
        [`${t}-hook-holder`]: {
          position: "relative"
        },
        //  animation
        [`${t}-fade-appear-prepare`]: {
          opacity: "0 !important"
        },
        [`${t}-fade-enter, ${t}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: o,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${t}-fade-leave`]: {
          animationTimingFunction: o,
          animationFillMode: "both",
          animationDuration: a,
          animationPlayState: "paused"
        },
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationPlayState: "running"
        },
        [`${t}-fade-leave${t}-fade-leave-active`]: {
          animationName: l,
          animationPlayState: "running"
        },
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${i}-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${i}-wrapper`]: Object.assign({}, Kl(e))
      }
    }
  ];
}, Gl = (e) => ({
  zIndexPopup: e.zIndexPopupBase + zl + 50,
  width: 384
}), Ql = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return si(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${$t(e.paddingMD)} ${$t(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, ql = wp("Notification", (e) => {
  const t = Ql(e);
  return [cg(t), tg(t), sg(t)];
}, Gl), lg = Tp(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = Ql(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, Kl(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${$t(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, Gl);
var ug = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function li(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ p.createElement(jl, {
    className: `${e}-close-icon`
  });
}
const dg = {
  success: Ol,
  info: Ll,
  error: Il,
  warning: _l
}, Xl = (e) => {
  const {
    prefixCls: t,
    icon: n,
    type: r,
    message: a,
    description: o,
    btn: i,
    role: l = "alert"
  } = e;
  let s = null;
  return n ? s = /* @__PURE__ */ p.createElement("span", {
    className: `${t}-icon`
  }, n) : r && (s = /* @__PURE__ */ p.createElement(dg[r] || null, {
    className: Ve(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ p.createElement("div", {
    className: Ve({
      [`${t}-with-icon`]: s
    }),
    role: l
  }, s, /* @__PURE__ */ p.createElement("div", {
    className: `${t}-message`
  }, a), /* @__PURE__ */ p.createElement("div", {
    className: `${t}-description`
  }, o), i && /* @__PURE__ */ p.createElement("div", {
    className: `${t}-btn`
  }, i));
}, fg = (e) => {
  const {
    prefixCls: t,
    className: n,
    icon: r,
    type: a,
    message: o,
    description: i,
    btn: l,
    closable: s = !0,
    closeIcon: c,
    className: u
  } = e, d = ug(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
    getPrefixCls: f
  } = p.useContext(Bt), g = t || f("notification"), y = `${g}-notice`, m = Dl(g), [h, E, S] = ql(g, m);
  return h(/* @__PURE__ */ p.createElement("div", {
    className: Ve(`${y}-pure-panel`, E, n, S, m)
  }, /* @__PURE__ */ p.createElement(lg, {
    prefixCls: g
  }), /* @__PURE__ */ p.createElement(Fl, Object.assign({}, d, {
    prefixCls: g,
    eventKey: "pure",
    duration: null,
    closable: s,
    className: Ve({
      notificationClassName: u
    }),
    closeIcon: li(g, c),
    content: /* @__PURE__ */ p.createElement(Xl, {
      prefixCls: y,
      icon: r,
      type: a,
      message: o,
      description: i,
      btn: l
    })
  }))));
};
function hg(e, t, n) {
  let r;
  switch (e) {
    case "top":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function pg(e) {
  return {
    motionName: `${e}-fade`
  };
}
var mg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Ss = 24, gg = 4.5, vg = "topRight", yg = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = Dl(n), [a, o, i] = ql(n, r);
  return a(/* @__PURE__ */ q.createElement(_m, {
    classNames: {
      list: Ve(o, i, r)
    }
  }, t));
}, bg = (e, t) => {
  let {
    prefixCls: n,
    key: r
  } = t;
  return /* @__PURE__ */ q.createElement(yg, {
    prefixCls: n,
    key: r
  }, e);
}, xg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    top: n,
    bottom: r,
    prefixCls: a,
    getContainer: o,
    maxCount: i,
    rtl: l,
    onAllRemoved: s,
    stack: c,
    duration: u,
    pauseOnHover: d = !0,
    showProgress: f
  } = e, {
    getPrefixCls: g,
    getPopupContainer: y,
    notification: m,
    direction: h
  } = p.useContext(Bt), [, E] = Dn(), S = a || g("notification"), x = (A) => hg(A, n ?? Ss, r ?? Ss), w = () => Ve({
    [`${S}-rtl`]: l ?? h === "rtl"
  }), T = () => pg(S), [N, C] = Hm({
    prefixCls: S,
    style: x,
    className: w,
    motion: T,
    closable: !0,
    closeIcon: li(S),
    duration: u ?? gg,
    getContainer: () => (o == null ? void 0 : o()) || (y == null ? void 0 : y()) || document.body,
    maxCount: i,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: s,
    renderNotifications: bg,
    stack: c === !1 ? !1 : {
      threshold: typeof c == "object" ? c == null ? void 0 : c.threshold : void 0,
      offset: 8,
      gap: E.margin
    }
  });
  return q.useImperativeHandle(t, () => Object.assign(Object.assign({}, N), {
    prefixCls: S,
    notification: m
  })), C;
});
function Yl(e) {
  const t = q.useRef(null), n = Ln("Notification");
  return [q.useMemo(() => {
    const a = (s) => {
      var c;
      if (!t.current) {
        K.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        return;
      }
      const {
        open: u,
        prefixCls: d,
        notification: f
      } = t.current, g = `${d}-notice`, {
        message: y,
        description: m,
        icon: h,
        type: E,
        btn: S,
        className: x,
        style: w,
        role: T = "alert",
        closeIcon: N,
        closable: C
      } = s, A = mg(s, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), M = li(g, typeof N < "u" ? N : f == null ? void 0 : f.closeIcon);
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e == null ? void 0 : e.placement) !== null && c !== void 0 ? c : vg
      }, A), {
        content: /* @__PURE__ */ q.createElement(Xl, {
          prefixCls: g,
          icon: h,
          type: E,
          message: y,
          description: m,
          btn: S,
          role: T
        }),
        className: Ve(E && `${g}-${E}`, x, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), w),
        closeIcon: M,
        closable: C ?? !!M
      }));
    }, i = {
      open: a,
      destroy: (s) => {
        var c, u;
        s !== void 0 ? (c = t.current) === null || c === void 0 || c.close(s) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["success", "info", "warning", "error"].forEach((s) => {
      i[s] = (c) => a(Object.assign(Object.assign({}, c), {
        type: s
      }));
    }), i;
  }, []), /* @__PURE__ */ q.createElement(xg, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function Cg(e) {
  return Yl(e);
}
const Sg = /* @__PURE__ */ q.createContext({});
let ot = null, Dr = (e) => e(), Kr = [], nr = {};
function Es() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: i
  } = nr, l = (e == null ? void 0 : e()) || document.body;
  return {
    getContainer: () => l,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: i
  };
}
const Eg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: a
  } = p.useContext(Bt), o = nr.prefixCls || a("notification"), i = p.useContext(Sg), [l, s] = Yl(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: o
  }), i.notification));
  return q.useEffect(r, []), q.useImperativeHandle(t, () => {
    const c = Object.assign({}, l);
    return Object.keys(c).forEach((u) => {
      c[u] = function() {
        return r(), l[u].apply(l, arguments);
      };
    }), {
      instance: c,
      sync: r
    };
  }), s;
}), wg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const [n, r] = q.useState(Es), a = () => {
    r(Es);
  };
  q.useEffect(a, []);
  const o = Nl(), i = o.getRootPrefixCls(), l = o.getIconPrefixCls(), s = o.getTheme(), c = /* @__PURE__ */ q.createElement(Eg, {
    ref: t,
    sync: a,
    notificationConfig: n
  });
  return /* @__PURE__ */ q.createElement(cn, {
    prefixCls: i,
    iconPrefixCls: l,
    theme: s
  }, o.holderRender ? o.holderRender(c) : c);
});
function ui() {
  if (!ot) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    ot = t, Dr(() => {
      Zm(/* @__PURE__ */ q.createElement(wg, {
        ref: (n) => {
          const {
            instance: r,
            sync: a
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = a, ui());
          });
        }
      }), e);
    });
    return;
  }
  ot.instance && (Kr.forEach((e) => {
    switch (e.type) {
      case "open": {
        Dr(() => {
          ot.instance.open(Object.assign(Object.assign({}, nr), e.config));
        });
        break;
      }
      case "destroy":
        Dr(() => {
          ot == null || ot.instance.destroy(e.key);
        });
        break;
    }
  }), Kr = []);
}
function Tg(e) {
  nr = Object.assign(Object.assign({}, nr), e), Dr(() => {
    var t;
    (t = ot == null ? void 0 : ot.sync) === null || t === void 0 || t.call(ot);
  });
}
function Zl(e) {
  const t = Nl();
  K.env.NODE_ENV !== "production" && !t.holderRender && nm("notification"), Kr.push({
    type: "open",
    config: e
  }), ui();
}
const Ag = (e) => {
  Kr.push({
    type: "destroy",
    key: e
  }), ui();
}, Ng = ["success", "info", "warning", "error"], Pg = {
  open: Zl,
  destroy: Ag,
  config: Tg,
  useNotification: Cg,
  _InternalPanelDoNotUseOrYouWillBeFired: fg
}, So = Pg;
Ng.forEach((e) => {
  So[e] = (t) => Zl(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
K.env.NODE_ENV;
K.env.NODE_ENV;
const Rg = ({ isOpen: e, onClose: t, className: n, overlayClassName: r, title: a, containerClassName: o, contentClassName: i, children: l, footer: s }) => {
  const c = e ? /* @__PURE__ */ v.jsxs("div", { className: ne(
    "fixed inset-0 z-50 flex items-center justify-center",
    n
  ), children: [
    /* @__PURE__ */ v.jsx("div", { className: ne(
      "fixed inset-0 bg-black/80",
      r
    ) }),
    /* @__PURE__ */ v.jsxs("div", { className: ne(
      "relative z-50 bg-background text-primary rounded-lg max-w-[600px] w-full overflow-hidden",
      o
    ), children: [
      /* @__PURE__ */ v.jsxs("div", { className: ne(
        "flex items-center justify-between py-[14px] px-[20px]",
        "border-b border-[#ebebeb] pb-2"
      ), children: [
        /* @__PURE__ */ v.jsx("p", { children: a }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: t,
            className: "text-[#929292] hover:text-primary/80",
            children: /* @__PURE__ */ v.jsx(Vo, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: ne(
        "py-3 px-6",
        i
      ), children: l }),
      s && /* @__PURE__ */ v.jsx("footer", { className: "border-t border-[#ebebeb] py-[18px] px-[24px]", children: s })
    ] })
  ] }) : null;
  if (typeof window < "u")
    return Kn.createPortal(
      c,
      document.body
    );
};
var dr = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, on = typeof window > "u" || "Deno" in globalThis;
function Ye() {
}
function Mg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Eo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Jl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function vn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function it(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ws(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: a,
    predicate: o,
    queryKey: i,
    stale: l
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== di(i, t.options))
        return !1;
    } else if (!ar(t.queryKey, i))
      return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if (n === "active" && !s || n === "inactive" && s)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || a && a !== t.state.fetchStatus || o && !o(t));
}
function Ts(e, t) {
  const { exact: n, status: r, predicate: a, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (rr(t.options.mutationKey) !== rr(o))
        return !1;
    } else if (!ar(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || a && !a(t));
}
function di(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || rr)(e);
}
function rr(e) {
  return JSON.stringify(
    e,
    (t, n) => Ao(n) ? Object.keys(n).sort().reduce((r, a) => (r[a] = n[a], r), {}) : n
  );
}
function ar(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !ar(e[n], t[n])) : !1;
}
function wo(e, t) {
  if (e === t)
    return e;
  const n = As(e) && As(t);
  if (n || Ao(e) && Ao(t)) {
    const r = n ? e : Object.keys(e), a = r.length, o = n ? t : Object.keys(t), i = o.length, l = n ? [] : {};
    let s = 0;
    for (let c = 0; c < i; c++) {
      const u = n ? c : o[c];
      (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (l[u] = void 0, s++) : (l[u] = wo(e[u], t[u]), l[u] === e[u] && e[u] !== void 0 && s++);
    }
    return a === i && s === a ? e : l;
  }
  return t;
}
function To(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function As(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ao(e) {
  if (!Ns(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Ns(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Ns(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function kg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function No(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (K.env.NODE_ENV !== "production")
      try {
        return wo(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return wo(e, t);
  }
  return t;
}
function Og(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Ig(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Gr = Symbol();
function eu(e, t) {
  return K.env.NODE_ENV !== "production" && e.queryFn === Gr && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Gr ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Kt, Rt, yn, _s, jg = (_s = class extends dr {
  constructor() {
    super();
    J(this, Kt);
    J(this, Rt);
    J(this, yn);
    V(this, yn, (t) => {
      if (!on && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Rt) || this.setEventListener(b(this, yn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = b(this, Rt)) == null || t.call(this), V(this, Rt, void 0));
  }
  setEventListener(t) {
    var n;
    V(this, yn, t), (n = b(this, Rt)) == null || n.call(this), V(this, Rt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    b(this, Kt) !== t && (V(this, Kt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof b(this, Kt) == "boolean" ? b(this, Kt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Kt = new WeakMap(), Rt = new WeakMap(), yn = new WeakMap(), _s), fi = new jg(), bn, Mt, xn, Ls, _g = (Ls = class extends dr {
  constructor() {
    super();
    J(this, bn, !0);
    J(this, Mt);
    J(this, xn);
    V(this, xn, (t) => {
      if (!on && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Mt) || this.setEventListener(b(this, xn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = b(this, Mt)) == null || t.call(this), V(this, Mt, void 0));
  }
  setEventListener(t) {
    var n;
    V(this, xn, t), (n = b(this, Mt)) == null || n.call(this), V(this, Mt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    b(this, bn) !== t && (V(this, bn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return b(this, bn);
  }
}, bn = new WeakMap(), Mt = new WeakMap(), xn = new WeakMap(), Ls), Qr = new _g();
function Po() {
  let e, t;
  const n = new Promise((a, o) => {
    e = a, t = o;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(a) {
    Object.assign(n, a), delete n.resolve, delete n.reject;
  }
  return n.resolve = (a) => {
    r({
      status: "fulfilled",
      value: a
    }), e(a);
  }, n.reject = (a) => {
    r({
      status: "rejected",
      reason: a
    }), t(a);
  }, n;
}
function Lg(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function tu(e) {
  return (e ?? "online") === "online" ? Qr.isOnline() : !0;
}
var nu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Ta(e) {
  return e instanceof nu;
}
function ru(e) {
  let t = !1, n = 0, r = !1, a;
  const o = Po(), i = (m) => {
    var h;
    r || (f(new nu(m)), (h = e.abort) == null || h.call(e));
  }, l = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, c = () => fi.isFocused() && (e.networkMode === "always" || Qr.isOnline()) && e.canRun(), u = () => tu(e.networkMode) && e.canRun(), d = (m) => {
    var h;
    r || (r = !0, (h = e.onSuccess) == null || h.call(e, m), a == null || a(), o.resolve(m));
  }, f = (m) => {
    var h;
    r || (r = !0, (h = e.onError) == null || h.call(e, m), a == null || a(), o.reject(m));
  }, g = () => new Promise((m) => {
    var h;
    a = (E) => {
      (r || c()) && m(E);
    }, (h = e.onPause) == null || h.call(e);
  }).then(() => {
    var m;
    a = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), y = () => {
    if (r)
      return;
    let m;
    const h = n === 0 ? e.initialPromise : void 0;
    try {
      m = h ?? e.fn();
    } catch (E) {
      m = Promise.reject(E);
    }
    Promise.resolve(m).then(d).catch((E) => {
      var N;
      if (r)
        return;
      const S = e.retry ?? (on ? 0 : 3), x = e.retryDelay ?? Lg, w = typeof x == "function" ? x(n, E) : x, T = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, E);
      if (t || !T) {
        f(E);
        return;
      }
      n++, (N = e.onFail) == null || N.call(e, n, E), kg(w).then(() => c() ? void 0 : g()).then(() => {
        t ? f(E) : y();
      });
    });
  };
  return {
    promise: o,
    cancel: i,
    continue: () => (a == null || a(), o),
    cancelRetry: l,
    continueRetry: s,
    canStart: u,
    start: () => (u() ? y() : g().then(y), o)
  };
}
function Dg() {
  let e = [], t = 0, n = (l) => {
    l();
  }, r = (l) => {
    l();
  }, a = (l) => setTimeout(l, 0);
  const o = (l) => {
    t ? e.push(l) : a(() => {
      n(l);
    });
  }, i = () => {
    const l = e;
    e = [], l.length && a(() => {
      r(() => {
        l.forEach((s) => {
          n(s);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let s;
      t++;
      try {
        s = l();
      } finally {
        t--, t || i();
      }
      return s;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...s) => {
      o(() => {
        l(...s);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (l) => {
      n = l;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      a = l;
    }
  };
}
var Ae = Dg(), Gt, Ds, au = (Ds = class {
  constructor() {
    J(this, Gt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Eo(this.gcTime) && V(this, Gt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (on ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    b(this, Gt) && (clearTimeout(b(this, Gt)), V(this, Gt, void 0));
  }
}, Gt = new WeakMap(), Ds), Cn, Sn, qe, Re, or, Qt, rt, Et, Fs, Fg = (Fs = class extends au {
  constructor(t) {
    super();
    J(this, rt);
    J(this, Cn);
    J(this, Sn);
    J(this, qe);
    J(this, Re);
    J(this, or);
    J(this, Qt);
    V(this, Qt, !1), V(this, or, t.defaultOptions), this.setOptions(t.options), this.observers = [], V(this, qe, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, V(this, Cn, $g(this.options)), this.state = t.state ?? b(this, Cn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = b(this, Re)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...b(this, or), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && b(this, qe).remove(this);
  }
  setData(t, n) {
    const r = No(this.state.data, t, this.options);
    return oe(this, rt, Et).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    oe(this, rt, Et).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, a;
    const n = (r = b(this, Re)) == null ? void 0 : r.promise;
    return (a = b(this, Re)) == null || a.cancel(t), n ? n.then(Ye).catch(Ye) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(b(this, Cn));
  }
  isActive() {
    return this.observers.some(
      (t) => it(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Gr || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Jl(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Re)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Re)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), b(this, qe).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (b(this, Re) && (b(this, Qt) ? b(this, Re).cancel({ revert: !0 }) : b(this, Re).cancelRetry()), this.scheduleGc()), b(this, qe).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || oe(this, rt, Et).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var s, c, u;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (b(this, Re))
        return b(this, Re).continueRetry(), b(this, Re).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    K.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), a = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (V(this, Qt, !0), r.signal)
      });
    }, o = () => {
      const d = eu(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a(f), V(this, Qt, !1), this.options.persister ? this.options.persister(
        d,
        f,
        this
      ) : d(f);
    }, i = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    a(i), (s = this.options.behavior) == null || s.onFetch(
      i,
      this
    ), V(this, Sn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && oe(this, rt, Et).call(this, { type: "fetch", meta: (u = i.fetchOptions) == null ? void 0 : u.meta });
    const l = (d) => {
      var f, g, y, m;
      Ta(d) && d.silent || oe(this, rt, Et).call(this, {
        type: "error",
        error: d
      }), Ta(d) || ((g = (f = b(this, qe).config).onError) == null || g.call(
        f,
        d,
        this
      ), (m = (y = b(this, qe).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return V(this, Re, ru({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: i.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, g, y, m;
        if (d === void 0) {
          K.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), l(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (h) {
          l(h);
          return;
        }
        (g = (f = b(this, qe).config).onSuccess) == null || g.call(f, d, this), (m = (y = b(this, qe).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: l,
      onFail: (d, f) => {
        oe(this, rt, Et).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        oe(this, rt, Et).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, rt, Et).call(this, { type: "continue" });
      },
      retry: i.options.retry,
      retryDelay: i.options.retryDelay,
      networkMode: i.options.networkMode,
      canRun: () => !0
    })), b(this, Re).start();
  }
}, Cn = new WeakMap(), Sn = new WeakMap(), qe = new WeakMap(), Re = new WeakMap(), or = new WeakMap(), Qt = new WeakMap(), rt = new WeakSet(), Et = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...ou(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const a = t.error;
        return Ta(a) && a.revert && b(this, Sn) ? { ...b(this, Sn), fetchStatus: "idle" } : {
          ...r,
          error: a,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: a,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), Ae.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), b(this, qe).notify({ query: this, type: "updated", action: t });
  });
}, Fs);
function ou(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: tu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function $g(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var pt, $s, Bg = ($s = class extends dr {
  constructor(t = {}) {
    super();
    J(this, pt);
    this.config = t, V(this, pt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const a = n.queryKey, o = n.queryHash ?? di(a, n);
    let i = this.get(o);
    return i || (i = new Fg({
      cache: this,
      queryKey: a,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(a)
    }), this.add(i)), i;
  }
  add(t) {
    b(this, pt).has(t.queryHash) || (b(this, pt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = b(this, pt).get(t.queryHash);
    n && (t.destroy(), n === t && b(this, pt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return b(this, pt).get(t);
  }
  getAll() {
    return [...b(this, pt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => ws(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => ws(t, r)) : n;
  }
  notify(t) {
    Ae.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, pt = new WeakMap(), $s), mt, Ie, qt, gt, Pt, Bs, Hg = (Bs = class extends au {
  constructor(t) {
    super();
    J(this, gt);
    J(this, mt);
    J(this, Ie);
    J(this, qt);
    this.mutationId = t.mutationId, V(this, Ie, t.mutationCache), V(this, mt, []), this.state = t.state || Ug(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    b(this, mt).includes(t) || (b(this, mt).push(t), this.clearGcTimeout(), b(this, Ie).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    V(this, mt, b(this, mt).filter((n) => n !== t)), this.scheduleGc(), b(this, Ie).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    b(this, mt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, Ie).remove(this));
  }
  continue() {
    var t;
    return ((t = b(this, qt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, o, i, l, s, c, u, d, f, g, y, m, h, E, S, x, w, T, N, C;
    V(this, qt, ru({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (A, M) => {
        oe(this, gt, Pt).call(this, { type: "failed", failureCount: A, error: M });
      },
      onPause: () => {
        oe(this, gt, Pt).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, gt, Pt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => b(this, Ie).canRun(this)
    }));
    const n = this.state.status === "pending", r = !b(this, qt).canStart();
    try {
      if (!n) {
        oe(this, gt, Pt).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (a = b(this, Ie).config).onMutate) == null ? void 0 : o.call(
          a,
          t,
          this
        ));
        const M = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
        M !== this.state.context && oe(this, gt, Pt).call(this, {
          type: "pending",
          context: M,
          variables: t,
          isPaused: r
        });
      }
      const A = await b(this, qt).start();
      return await ((c = (s = b(this, Ie).config).onSuccess) == null ? void 0 : c.call(
        s,
        A,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, A, t, this.state.context)), await ((g = (f = b(this, Ie).config).onSettled) == null ? void 0 : g.call(
        f,
        A,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, A, null, t, this.state.context)), oe(this, gt, Pt).call(this, { type: "success", data: A }), A;
    } catch (A) {
      try {
        throw await ((E = (h = b(this, Ie).config).onError) == null ? void 0 : E.call(
          h,
          A,
          t,
          this.state.context,
          this
        )), await ((x = (S = this.options).onError) == null ? void 0 : x.call(
          S,
          A,
          t,
          this.state.context
        )), await ((T = (w = b(this, Ie).config).onSettled) == null ? void 0 : T.call(
          w,
          void 0,
          A,
          this.state.variables,
          this.state.context,
          this
        )), await ((C = (N = this.options).onSettled) == null ? void 0 : C.call(
          N,
          void 0,
          A,
          t,
          this.state.context
        )), A;
      } finally {
        oe(this, gt, Pt).call(this, { type: "error", error: A });
      }
    } finally {
      b(this, Ie).runNext(this);
    }
  }
}, mt = new WeakMap(), Ie = new WeakMap(), qt = new WeakMap(), gt = new WeakSet(), Pt = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), Ae.batch(() => {
    b(this, mt).forEach((r) => {
      r.onMutationUpdate(t);
    }), b(this, Ie).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Bs);
function Ug() {
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
var ze, ir, Hs, zg = (Hs = class extends dr {
  constructor(t = {}) {
    super();
    J(this, ze);
    J(this, ir);
    this.config = t, V(this, ze, /* @__PURE__ */ new Map()), V(this, ir, Date.now());
  }
  build(t, n, r) {
    const a = new Hg({
      mutationCache: this,
      mutationId: ++gr(this, ir)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(a), a;
  }
  add(t) {
    const n = Pr(t), r = b(this, ze).get(n) ?? [];
    r.push(t), b(this, ze).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = Pr(t);
    if (b(this, ze).has(n)) {
      const a = (r = b(this, ze).get(n)) == null ? void 0 : r.filter((o) => o !== t);
      a && (a.length === 0 ? b(this, ze).delete(n) : b(this, ze).set(n, a));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = b(this, ze).get(Pr(t))) == null ? void 0 : r.find((a) => a.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = b(this, ze).get(Pr(t))) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
  }
  clear() {
    Ae.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...b(this, ze).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Ts(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Ts(t, n));
  }
  notify(t) {
    Ae.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return Ae.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(Ye))
      )
    );
  }
}, ze = new WeakMap(), ir = new WeakMap(), Hs);
function Pr(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Ps(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, g, y;
      const r = t.options, a = (f = (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, o = ((g = t.state.data) == null ? void 0 : g.pages) || [], i = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let l = { pages: [], pageParams: [] }, s = 0;
      const c = async () => {
        let m = !1;
        const h = (x) => {
          Object.defineProperty(x, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, E = eu(t.options, t.fetchOptions), S = async (x, w, T) => {
          if (m)
            return Promise.reject();
          if (w == null && x.pages.length)
            return Promise.resolve(x);
          const N = {
            queryKey: t.queryKey,
            pageParam: w,
            direction: T ? "backward" : "forward",
            meta: t.options.meta
          };
          h(N);
          const C = await E(
            N
          ), { maxPages: A } = t.options, M = T ? Ig : Og;
          return {
            pages: M(x.pages, C, A),
            pageParams: M(x.pageParams, w, A)
          };
        };
        if (a && o.length) {
          const x = a === "backward", w = x ? Vg : Rs, T = {
            pages: o,
            pageParams: i
          }, N = w(r, T);
          l = await S(T, N, x);
        } else {
          const x = e ?? o.length;
          do {
            const w = s === 0 ? i[0] ?? r.initialPageParam : Rs(r, l);
            if (s > 0 && w == null)
              break;
            l = await S(l, w), s++;
          } while (s < x);
        }
        return l;
      };
      t.options.persister ? t.fetchFn = () => {
        var m, h;
        return (h = (m = t.options).persister) == null ? void 0 : h.call(
          m,
          c,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = c;
    }
  };
}
function Rs(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function Vg(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var pe, kt, Ot, En, wn, It, Tn, An, Us, Wg = (Us = class {
  constructor(e = {}) {
    J(this, pe);
    J(this, kt);
    J(this, Ot);
    J(this, En);
    J(this, wn);
    J(this, It);
    J(this, Tn);
    J(this, An);
    V(this, pe, e.queryCache || new Bg()), V(this, kt, e.mutationCache || new zg()), V(this, Ot, e.defaultOptions || {}), V(this, En, /* @__PURE__ */ new Map()), V(this, wn, /* @__PURE__ */ new Map()), V(this, It, 0);
  }
  mount() {
    gr(this, It)._++, b(this, It) === 1 && (V(this, Tn, fi.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, pe).onFocus());
    })), V(this, An, Qr.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, pe).onOnline());
    })));
  }
  unmount() {
    var e, t;
    gr(this, It)._--, b(this, It) === 0 && ((e = b(this, Tn)) == null || e.call(this), V(this, Tn, void 0), (t = b(this, An)) == null || t.call(this), V(this, An, void 0));
  }
  isFetching(e) {
    return b(this, pe).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return b(this, kt).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = b(this, pe).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = b(this, pe).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(vn(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return b(this, pe).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), a = b(this, pe).get(
      r.queryHash
    ), o = a == null ? void 0 : a.state.data, i = Mg(t, o);
    if (i !== void 0)
      return b(this, pe).build(this, r).setData(i, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return Ae.batch(
      () => b(this, pe).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = b(this, pe).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = b(this, pe);
    Ae.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = b(this, pe), r = {
      type: "active",
      ...e
    };
    return Ae.batch(() => (n.findAll(e).forEach((a) => {
      a.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = { revert: !0, ...t }, r = Ae.batch(
      () => b(this, pe).findAll(e).map((a) => a.cancel(n))
    );
    return Promise.all(r).then(Ye).catch(Ye);
  }
  invalidateQueries(e = {}, t = {}) {
    return Ae.batch(() => {
      if (b(this, pe).findAll(e).forEach((r) => {
        r.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const n = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(n, t);
    });
  }
  refetchQueries(e = {}, t) {
    const n = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, r = Ae.batch(
      () => b(this, pe).findAll(e).filter((a) => !a.isDisabled()).map((a) => {
        let o = a.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Ye)), a.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(Ye);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = b(this, pe).build(this, t);
    return n.isStaleByTime(
      vn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ye).catch(Ye);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ps(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ye).catch(Ye);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Ps(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Qr.isOnline() ? b(this, kt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return b(this, pe);
  }
  getMutationCache() {
    return b(this, kt);
  }
  getDefaultOptions() {
    return b(this, Ot);
  }
  setDefaultOptions(e) {
    V(this, Ot, e);
  }
  setQueryDefaults(e, t) {
    b(this, En).set(rr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...b(this, En).values()];
    let n = {};
    return t.forEach((r) => {
      ar(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    b(this, wn).set(rr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...b(this, wn).values()];
    let n = {};
    return t.forEach((r) => {
      ar(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...b(this, Ot).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = di(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === Gr && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...b(this, Ot).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    b(this, pe).clear(), b(this, kt).clear();
  }
}, pe = new WeakMap(), kt = new WeakMap(), Ot = new WeakMap(), En = new WeakMap(), wn = new WeakMap(), It = new WeakMap(), Tn = new WeakMap(), An = new WeakMap(), Us), De, ie, sr, je, Xt, Nn, jt, vt, cr, Pn, Rn, Yt, Zt, _t, Mn, le, zn, Ro, Mo, ko, Oo, Io, jo, _o, iu, zs, Kg = (zs = class extends dr {
  constructor(t, n) {
    super();
    J(this, le);
    J(this, De);
    J(this, ie);
    J(this, sr);
    J(this, je);
    J(this, Xt);
    J(this, Nn);
    J(this, jt);
    J(this, vt);
    J(this, cr);
    J(this, Pn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    J(this, Rn);
    J(this, Yt);
    J(this, Zt);
    J(this, _t);
    J(this, Mn, /* @__PURE__ */ new Set());
    this.options = n, V(this, De, t), V(this, vt, null), V(this, jt, Po()), this.options.experimental_prefetchInRender || b(this, jt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (b(this, ie).addObserver(this), Ms(b(this, ie), this.options) ? oe(this, le, zn).call(this) : this.updateResult(), oe(this, le, Oo).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Lo(
      b(this, ie),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Lo(
      b(this, ie),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, le, Io).call(this), oe(this, le, jo).call(this), b(this, ie).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = b(this, ie);
    if (this.options = b(this, De).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof it(this.options.enabled, b(this, ie)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, le, _o).call(this), b(this, ie).setOptions(this.options), r._defaulted && !To(this.options, r) && b(this, De).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: b(this, ie),
      observer: this
    });
    const o = this.hasListeners();
    o && ks(
      b(this, ie),
      a,
      this.options,
      r
    ) && oe(this, le, zn).call(this), this.updateResult(n), o && (b(this, ie) !== a || it(this.options.enabled, b(this, ie)) !== it(r.enabled, b(this, ie)) || vn(this.options.staleTime, b(this, ie)) !== vn(r.staleTime, b(this, ie))) && oe(this, le, Ro).call(this);
    const i = oe(this, le, Mo).call(this);
    o && (b(this, ie) !== a || it(this.options.enabled, b(this, ie)) !== it(r.enabled, b(this, ie)) || i !== b(this, _t)) && oe(this, le, ko).call(this, i);
  }
  getOptimisticResult(t) {
    const n = b(this, De).getQueryCache().build(b(this, De), t), r = this.createResult(n, t);
    return Qg(this, r) && (V(this, je, r), V(this, Nn, this.options), V(this, Xt, b(this, ie).state)), r;
  }
  getCurrentResult() {
    return b(this, je);
  }
  trackResult(t, n) {
    const r = {};
    return Object.keys(t).forEach((a) => {
      Object.defineProperty(r, a, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(a), n == null || n(a), t[a])
      });
    }), r;
  }
  trackProp(t) {
    b(this, Mn).add(t);
  }
  getCurrentQuery() {
    return b(this, ie);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = b(this, De).defaultQueryOptions(t), r = b(this, De).getQueryCache().build(b(this, De), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return oe(this, le, zn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), b(this, je)));
  }
  createResult(t, n) {
    var A;
    const r = b(this, ie), a = this.options, o = b(this, je), i = b(this, Xt), l = b(this, Nn), c = t !== r ? t.state : b(this, sr), { state: u } = t;
    let d = { ...u }, f = !1, g;
    if (n._optimisticResults) {
      const M = this.hasListeners(), I = !M && Ms(t, n), j = M && ks(t, r, n, a);
      (I || j) && (d = {
        ...d,
        ...ou(u.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: h } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (i == null ? void 0 : i.data) && n.select === b(this, cr))
        g = b(this, Pn);
      else
        try {
          V(this, cr, n.select), g = n.select(d.data), g = No(o == null ? void 0 : o.data, g, n), V(this, Pn, g), V(this, vt, null);
        } catch (M) {
          V(this, vt, M);
        }
    else
      g = d.data;
    if (n.placeholderData !== void 0 && g === void 0 && h === "pending") {
      let M;
      if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        M = o.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (A = b(this, Rn)) == null ? void 0 : A.state.data,
        b(this, Rn)
      ) : n.placeholderData, n.select && M !== void 0)
        try {
          M = n.select(M), V(this, vt, null);
        } catch (I) {
          V(this, vt, I);
        }
      M !== void 0 && (h = "success", g = No(
        o == null ? void 0 : o.data,
        M,
        n
      ), f = !0);
    }
    b(this, vt) && (y = b(this, vt), g = b(this, Pn), m = Date.now(), h = "error");
    const E = d.fetchStatus === "fetching", S = h === "pending", x = h === "error", w = S && E, T = g !== void 0, C = {
      status: h,
      fetchStatus: d.fetchStatus,
      isPending: S,
      isSuccess: h === "success",
      isError: x,
      isInitialLoading: w,
      isLoading: w,
      data: g,
      dataUpdatedAt: d.dataUpdatedAt,
      error: y,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
      isFetching: E,
      isRefetching: E && !S,
      isLoadingError: x && !T,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: x && T,
      isStale: hi(t, n),
      refetch: this.refetch,
      promise: b(this, jt)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (H) => {
        C.status === "error" ? H.reject(C.error) : C.data !== void 0 && H.resolve(C.data);
      }, I = () => {
        const H = V(this, jt, C.promise = Po());
        M(H);
      }, j = b(this, jt);
      switch (j.status) {
        case "pending":
          t.queryHash === r.queryHash && M(j);
          break;
        case "fulfilled":
          (C.status === "error" || C.data !== j.value) && I();
          break;
        case "rejected":
          (C.status !== "error" || C.error !== j.reason) && I();
          break;
      }
    }
    return C;
  }
  updateResult(t) {
    const n = b(this, je), r = this.createResult(b(this, ie), this.options);
    if (V(this, Xt, b(this, ie).state), V(this, Nn, this.options), b(this, Xt).data !== void 0 && V(this, Rn, b(this, ie)), To(r, n))
      return;
    V(this, je, r);
    const a = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: i } = this.options, l = typeof i == "function" ? i() : i;
      if (l === "all" || !l && !b(this, Mn).size)
        return !0;
      const s = new Set(
        l ?? b(this, Mn)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(b(this, je)).some((c) => {
        const u = c;
        return b(this, je)[u] !== n[u] && s.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (a.listeners = !0), oe(this, le, iu).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, le, Oo).call(this);
  }
}, De = new WeakMap(), ie = new WeakMap(), sr = new WeakMap(), je = new WeakMap(), Xt = new WeakMap(), Nn = new WeakMap(), jt = new WeakMap(), vt = new WeakMap(), cr = new WeakMap(), Pn = new WeakMap(), Rn = new WeakMap(), Yt = new WeakMap(), Zt = new WeakMap(), _t = new WeakMap(), Mn = new WeakMap(), le = new WeakSet(), zn = function(t) {
  oe(this, le, _o).call(this);
  let n = b(this, ie).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Ye)), n;
}, Ro = function() {
  oe(this, le, Io).call(this);
  const t = vn(
    this.options.staleTime,
    b(this, ie)
  );
  if (on || b(this, je).isStale || !Eo(t))
    return;
  const r = Jl(b(this, je).dataUpdatedAt, t) + 1;
  V(this, Yt, setTimeout(() => {
    b(this, je).isStale || this.updateResult();
  }, r));
}, Mo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, ie)) : this.options.refetchInterval) ?? !1;
}, ko = function(t) {
  oe(this, le, jo).call(this), V(this, _t, t), !(on || it(this.options.enabled, b(this, ie)) === !1 || !Eo(b(this, _t)) || b(this, _t) === 0) && V(this, Zt, setInterval(() => {
    (this.options.refetchIntervalInBackground || fi.isFocused()) && oe(this, le, zn).call(this);
  }, b(this, _t)));
}, Oo = function() {
  oe(this, le, Ro).call(this), oe(this, le, ko).call(this, oe(this, le, Mo).call(this));
}, Io = function() {
  b(this, Yt) && (clearTimeout(b(this, Yt)), V(this, Yt, void 0));
}, jo = function() {
  b(this, Zt) && (clearInterval(b(this, Zt)), V(this, Zt, void 0));
}, _o = function() {
  const t = b(this, De).getQueryCache().build(b(this, De), this.options);
  if (t === b(this, ie))
    return;
  const n = b(this, ie);
  V(this, ie, t), V(this, sr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, iu = function(t) {
  Ae.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(b(this, je));
    }), b(this, De).getQueryCache().notify({
      query: b(this, ie),
      type: "observerResultsUpdated"
    });
  });
}, zs);
function Gg(e, t) {
  return it(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Ms(e, t) {
  return Gg(e, t) || e.state.data !== void 0 && Lo(e, t, t.refetchOnMount);
}
function Lo(e, t, n) {
  if (it(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && hi(e, t);
  }
  return !1;
}
function ks(e, t, n, r) {
  return (e !== t || it(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && hi(e, n);
}
function hi(e, t) {
  return it(t.enabled, e) !== !1 && e.isStaleByTime(vn(t.staleTime, e));
}
function Qg(e, t) {
  return !To(e.getCurrentResult(), t);
}
var su = p.createContext(
  void 0
), qg = (e) => {
  const t = p.useContext(su);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Xg = ({
  client: e,
  children: t
}) => (p.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ v.jsx(su.Provider, { value: e, children: t })), cu = p.createContext(!1), Yg = () => p.useContext(cu);
cu.Provider;
function Zg() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Jg = p.createContext(Zg()), ev = () => p.useContext(Jg);
function tv(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function nv() {
}
var rv = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, av = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, ov = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && tv(n, [e.error, r]), iv = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, sv = (e, t) => e.isLoading && e.isFetching && !t, cv = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Os = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function lv(e, t, n) {
  var u, d, f, g, y;
  if (K.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = qg(), a = Yg(), o = ev(), i = r.defaultQueryOptions(e);
  (d = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    i
  ), i._optimisticResults = a ? "isRestoring" : "optimistic", iv(i), rv(i, o), av(o);
  const l = !r.getQueryCache().get(i.queryHash), [s] = p.useState(
    () => new t(
      r,
      i
    )
  ), c = s.getOptimisticResult(i);
  if (p.useSyncExternalStore(
    p.useCallback(
      (m) => {
        const h = a ? () => {
        } : s.subscribe(Ae.batchCalls(m));
        return s.updateResult(), h;
      },
      [s, a]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), p.useEffect(() => {
    s.setOptions(i, { listeners: !1 });
  }, [i, s]), cv(i, c))
    throw Os(i, s, o);
  if (ov({
    result: c,
    errorResetBoundary: o,
    throwOnError: i.throwOnError,
    query: r.getQueryCache().get(i.queryHash)
  }))
    throw c.error;
  if ((g = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || g.call(
    f,
    i,
    c
  ), i.experimental_prefetchInRender && !on && sv(c, a)) {
    const m = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Os(i, s, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (y = r.getQueryCache().get(i.queryHash)) == null ? void 0 : y.promise
    );
    m == null || m.catch(nv).finally(() => {
      s.updateResult();
    });
  }
  return i.notifyOnChangeProps ? c : s.trackResult(c);
}
function fr(e, t) {
  return lv(e, Kg);
}
const uv = async () => {
  const { data: e } = await _e.get("/user-assets/token-prices");
  return e;
}, dv = (e) => fr({
  queryKey: ["tokenPrices"],
  queryFn: uv,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  staleTime: 1e3 * 60 * 60,
  // data is fresh within 60 minutes
  gcTime: 1e3 * 60 * 60,
  // cache for 120 minutes
  ...e
}), fv = async (e) => {
  const t = Qn.getInstance().createToken(e), { address: n } = Me.all(), r = await t.getBalance(n);
  return { balance: Fr(r), tokenType: e };
}, Aa = (e, t) => fr({
  queryKey: ["tokenBalance", e],
  queryFn: () => fv(e),
  enabled: (t == null ? void 0 : t.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...t
});
function hv({
  isOpen: e,
  onClose: t,
  defaultLimits: n
}) {
  const { data: r } = Aa("ETH"), { data: a } = Aa("MATIC"), { data: o } = Aa("TVWT"), { data: i } = dv(), [l, s] = p.useState(null), [c, u] = p.useState(!1), [d, f] = p.useState({
    ETH: "",
    MATIC: "",
    TVWT: ""
  });
  p.useEffect(() => {
    e && y();
  }, [e]);
  const g = p.useMemo(() => !d.ETH || !d.MATIC || !d.TVWT, [d]), y = async () => {
    m(), f(n);
  }, m = async () => {
    try {
      const { data: C } = await _e.post("/transaction/outbound-amount", {
        tokens: ["ETH", "MATIC", "TVWT"]
      });
      s(C);
    } catch (C) {
      console.error("Failed to fetch token transferred:", C);
    }
  }, h = p.useMemo(() => [
    { type: "ETH", balance: (r == null ? void 0 : r.balance) || "0", todayTransferred: (l == null ? void 0 : l.ETH) || "0" },
    { type: "MATIC", balance: (a == null ? void 0 : a.balance) || "0", todayTransferred: (l == null ? void 0 : l.MATIC) || "0" },
    { type: "TVWT", balance: (o == null ? void 0 : o.balance) || "0", todayTransferred: (l == null ? void 0 : l.TVWT) || "0" }
  ], [r, a, o, l]), E = (C, A) => {
    A && !/^\d*\.?\d*$/.test(A) || f((M) => ({
      ...M,
      [C]: A
    }));
  }, S = (C, A) => {
    if (!A || !i || !i[C]) return "0";
    const M = parseFloat(i[C]), I = parseFloat(A);
    return isNaN(M) || isNaN(I) ? "0" : (M * I).toFixed(2);
  }, x = async () => {
    Xe(d, "limits");
    try {
      u(!0);
      const C = [
        {
          type: "ETH",
          value: gn(d.ETH || "0").toString()
        },
        {
          type: "MATIC",
          value: gn(d.MATIC || "0").toString()
        },
        {
          type: "TVWT",
          value: gn(d.TVWT || "0").toString()
        }
      ];
      await _e.post("/auth/generate-otp-for-daily-limit-update", {
        limits: C
      }), st.info("Please check your email to confirm the transaction limit update", {
        autoClose: !1,
        closeButton: !0
      }), t();
    } catch (C) {
      const A = Gn(C);
      st.error(A.message);
    } finally {
      u(!1);
    }
  }, w = (C) => C == null ? "0" : Jt(BigInt(C)), T = () => {
    t();
  }, N = /* @__PURE__ */ v.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ v.jsx(en, { className: "hidden tablet:block", variant: "outline", onClick: () => T(), children: "Cancel" }),
    /* @__PURE__ */ v.jsx(
      en,
      {
        className: "w-full tablet:w-auto",
        disabled: g || c,
        onClick: () => {
          x();
        },
        children: c ? /* @__PURE__ */ v.jsx(lc, {}) : "Save"
      }
    )
  ] });
  return /* @__PURE__ */ v.jsx(
    Rg,
    {
      isOpen: e,
      onClose: t,
      title: "Daily Transaction Limit",
      footer: N,
      contentClassName: "p-6",
      children: h.map((C, A) => /* @__PURE__ */ v.jsxs("div", { className: A > 0 ? "mt-6" : "", children: [
        /* @__PURE__ */ v.jsxs("p", { className: "text-black text-sm font-medium leading-none mb-[6px]", children: [
          C.type,
          " daily limit"
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: ne(
          "tablet:flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none", children: [
            /* @__PURE__ */ v.jsx(
              $r,
              {
                className: "w-[131px] text-black",
                value: d[C.type],
                onChange: (M) => E(C.type, M.target.value),
                placeholder: "Enter limit",
                disabled: c
              }
            ),
            /* @__PURE__ */ v.jsxs("p", { children: [
              "~",
              S(C.type, d[C.type]),
              " USDT"
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: ne(
            "flex items-center gap-2 text-sm font-normal leading-none",
            "mt-[20px] tablet:mt-0"
          ), children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-[#a1a1a1]", children: "Balance:" }),
            /* @__PURE__ */ v.jsxs("p", { className: "text-black", children: [
              C.balance,
              " ",
              C.type
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
          /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-black text-xs font-normal leading-none", children: c ? "" : `You've transferred ${w(C.todayTransferred ?? "0")} ${ka(C.type)} today` })
        ] })
      ] }, C.type))
    }
  );
}
const pv = {
  ETH: "0",
  MATIC: "0",
  TVWT: "0"
}, mv = async () => {
  const { data: e } = await _e.get("/transaction/default-daily-withdrawal-limits", {
    params: {
      includeUserLimits: !0
    }
  });
  return {
    ETH: Jt(BigInt(e.ETH ?? 0)),
    MATIC: Jt(BigInt(e.MATIC ?? 0)),
    TVWT: Jt(BigInt(e.TVWT ?? 0))
  };
}, gv = (e) => fr({
  queryKey: ["dailyWithdrawalLimits"],
  queryFn: mv,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  gcTime: 0,
  staleTime: 0,
  initialData: pv,
  ...e
}), vv = Qn.getInstance().getAllTokenTypes();
function yv({
  open: e,
  setOpen: t,
  balance: n,
  address: r,
  tokenType: a,
  defaultTo: o,
  defaultAmount: i,
  defaultNote: l,
  onClose: s
}) {
  const [c, u] = p.useState(""), [d, f] = p.useState(""), [g, y] = p.useState(""), [m, h] = p.useState(!1), [E, S] = p.useState(""), x = p.useRef(), [w, T] = p.useState(!1), { data: N } = gv(), [C, A] = p.useState(a), [M, I] = p.useState("0"), [j, H] = p.useState(""), [B, D] = p.useState(!1), [W, R] = p.useState(!1), [P, k] = p.useState(!1), [O, _] = p.useState(!1), [L, U] = p.useState(""), [F, G] = p.useState(""), [Q, te] = p.useState(""), { t: ee } = Wo(), Pe = Ni(d, 800), xe = Ni(c, 800);
  p.useEffect(() => {
    Xe("open", e, "address", r), e ? Se() : Ge();
  }, [o, i, l, e]), p.useEffect(() => {
    c && d && W && (de(), $e(c), Ee(), R(!1));
  }, [c, d, W, e]), p.useEffect(() => {
    !e && s && s();
  }, [e]), p.useEffect(() => {
    de(), xe && $e(xe), Pe && !ge && !B && Ee();
  }, [Pe, xe]);
  const Se = async () => {
    await z(a), o && u(o), i && f(i), l && y(l), R(!0);
  }, We = p.useMemo(() => N[C], [C, N]), ge = p.useMemo(() => !c || !d || m || !O || P || !!F && F !== ee("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(d) > parseFloat(M) || B, [c, d, m, O, P, F, M, B]), ke = () => {
    const re = /* @__PURE__ */ v.jsx("div", { className: "cursor-pointer", onClick: () => {
      So.destroy();
    }, children: "Ok" });
    So.open({
      message: "Daily transaction limit exceeded",
      description: /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("p", { children: "Please check your email and verify by the OTP." }),
        /* @__PURE__ */ v.jsx("p", { children: "You can change yur dailiy transaction limit under profile page." })
      ] }),
      placement: "top",
      duration: 0,
      btn: re
    });
  }, z = async (re) => {
    f(""), D(!1), H(""), te(""), A(re);
    const Ce = Qn.getInstance().createToken(re);
    x.current = Ce, S(x.current.symbol);
    let Oe = await x.current.getBalance(r);
    Oe = Fr(Oe), I(Oe);
  }, $e = async (re) => {
    if (Ei(c))
      _(!0), U(""), G("");
    else {
      k(!0), G("");
      try {
        const Ce = await _e.get("/address/", {
          params: { email: re }
        });
        Ce.data.success ? (_(!0), U(Ce.data.address)) : Ai.test(re) ? (_(!0), U(""), G(ee("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (_(!1), U(""), G(ee("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        k(!1);
      }
    }
  }, ve = () => {
    Xe("to", c), c || (_(!1), U(""), G(""));
  };
  async function Ke(re) {
    try {
      const Ce = gn(d).toString();
      Xe("amt", Ce), h(!0);
      const {
        needOtp: Oe,
        hash: hr,
        message: mi
      } = await jd.signTransaction({
        toAddress: re,
        amount: Ce,
        token: C,
        note: g,
        transactionType: dc.TRANSFER
      });
      hr ? (t(!1), ut(hr)) : Oe && (ke(), t(!1));
    } catch (Ce) {
      const Oe = Gn(Ce);
      Xe("errorInfo", Oe), st.error(Oe.message);
    } finally {
      h(!1);
    }
  }
  const et = (re) => {
    var Oe;
    const Ce = `${(Oe = x.current) == null ? void 0 : Oe.openUrl}/${re}`;
    window.open(Ce, "_blank");
  }, ut = (re) => {
    st(
      /* @__PURE__ */ v.jsx("div", { className: "w-full", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ v.jsx(Pa, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ v.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ v.jsx(
            en,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                et(re);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, fe = async () => {
    if (!ge)
      try {
        h(!0);
        let re, Ce;
        if (Ei(c))
          re = c;
        else if (Ai.test(c) && F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          Ce = c;
          const Oe = await _e.post("/invite/invite-register", {
            toEmail: Ce,
            from: r,
            amount: gn(d).toString(),
            token: C,
            note: g
          });
          Xe("res", Oe), st.success(ee("/dashboard.[token].sendModal.emailSentToUnregistered")), Ge(), t(!1);
          return;
        } else
          re = L;
        await Ke(re), Ge(), t(!1);
      } catch (re) {
        const Ce = Gn(re);
        Xe("errorInfo", Ce), st.error(ee("/dashboard.[token].sendModal.sendError"));
      } finally {
        h(!1);
      }
  }, de = async () => {
    parseFloat(d) > parseFloat(M) ? te("Amount exceeded") : te("");
  }, Ee = async () => {
    if (d && !ge) {
      D(!0);
      try {
        Xe("checkEstimatedFee", d);
        const re = await wd({
          tokenType: C,
          transferParams: {
            to: r,
            amount: gn(d)
          },
          fromAddress: r
        });
        H(re ? re.feeInTokens.toString() : "");
      } catch (re) {
        Xe("Failed to get estimated fee:", re), H("");
      } finally {
        D(!1);
      }
    }
  }, Ge = () => {
    f(""), u(""), y(""), U(""), G(""), _(!1), k(!1), H("");
  }, Be = async (re) => {
    f(re.target.value.trim()), parseFloat(d) > parseFloat(M) ? te("Amount exceeded") : te("");
  }, tt = e ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: ne(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: ee("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => t(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(Vo, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs("form", { children: [
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              $r,
              {
                value: c,
                onChange: (re) => u(re.target.value.trim()),
                onBlur: ve,
                id: "to",
                required: !0,
                placeholder: ee("/dashboard.[token].sendModal.toPlaceholder"),
                className: ne(
                  O && "border-green-500",
                  F && "border-destructive",
                  F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            P && /* @__PURE__ */ v.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsx(od, { className: "animate-spin", size: 16 }) }),
            O && !P && !F && /* @__PURE__ */ v.jsx(Pa, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            F && !P && /* @__PURE__ */ v.jsx(nc, { className: ne(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          O && L && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-primary/60", children: L }),
          F && /* @__PURE__ */ v.jsx("p", { className: ne(
            "mt-1 text-xs text-destructive",
            F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: F })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              $r,
              {
                value: d,
                onChange: Be,
                type: "number",
                inputMode: "decimal",
                id: "amount",
                className: ne(
                  "pl-[80px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  C === "ETH" && "pl-[110px]",
                  C === "MATIC" && "pl-[70px]"
                ),
                required: !0,
                onBlur: de
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsxs(_d, { children: [
              /* @__PURE__ */ v.jsxs(Ld, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ v.jsx("span", { className: "font-medium text-sm", children: ka(C) }),
                /* @__PURE__ */ v.jsx(id, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ v.jsx(fc, { align: "start", className: "bg-white", children: vv.map((re) => /* @__PURE__ */ v.jsx(hc, { onClick: () => z(re), children: ka(re) }, re)) })
            ] }) })
          ] }),
          Q && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-destructive", children: Q })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          B ? /* @__PURE__ */ v.jsx("span", { children: /* @__PURE__ */ v.jsx(sd, { className: "animate-spin", size: 14 }) }) : j ? /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            "~ ",
            j,
            " ",
            E === "TVWT" ? "POL" : E
          ] }) : /* @__PURE__ */ v.jsx("span", { className: "text-black", children: "-" })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-[20px]", children: [
          /* @__PURE__ */ v.jsxs("p", { className: "text-[#979797] text-sm leading-none", children: [
            "Daily limit: ",
            /* @__PURE__ */ v.jsxs("span", { children: [
              We,
              " ",
              E
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
            en,
            {
              variant: "outline",
              className: "h-[24px] py-1 px-2 text-xs",
              onClick: () => T(!0),
              type: "button",
              children: "Change limit"
            }
          )
        ] }),
        j && /* @__PURE__ */ v.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ v.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            Fr(M),
            " ",
            E
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsx(
            uc,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: g,
              onChange: (re) => y(re.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(
        en,
        {
          onClick: fe,
          className: ne("py-12px"),
          disabled: ge,
          children: m ? /* @__PURE__ */ v.jsx("div", { className: "", children: /* @__PURE__ */ v.jsx(lc, {}) }) : /* @__PURE__ */ v.jsx("span", { children: ee("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ v.jsx(
      hv,
      {
        isOpen: w,
        onClose: () => T(!1),
        defaultLimits: N
      }
    )
  ] }) : null;
  if (typeof window < "u")
    return Kn.createPortal(
      tt,
      document.body
    );
}
const bv = Wu, lu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Js,
  {
    ref: n,
    className: ne(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
lu.displayName = Js.displayName;
const Do = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ec,
  {
    ref: n,
    className: ne(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Do.displayName = ec.displayName;
const Fo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  tc,
  {
    ref: n,
    className: ne(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Fo.displayName = tc.displayName;
var xv = Object.defineProperty, qr = Object.getOwnPropertySymbols, uu = Object.prototype.hasOwnProperty, du = Object.prototype.propertyIsEnumerable, Is = (e, t, n) => t in e ? xv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, $o = (e, t) => {
  for (var n in t || (t = {}))
    uu.call(t, n) && Is(e, n, t[n]);
  if (qr)
    for (var n of qr(t))
      du.call(t, n) && Is(e, n, t[n]);
  return e;
}, Bo = (e, t) => {
  var n = {};
  for (var r in e)
    uu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qr)
    for (var r of qr(e))
      t.indexOf(r) < 0 && du.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var sn;
((e) => {
  const t = class ae {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, c, u, d) {
      if (this.version = s, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], s < ae.MIN_VERSION || s > ae.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7)
        throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let f = [];
      for (let y = 0; y < this.size; y++)
        f.push(!1);
      for (let y = 0; y < this.size; y++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(u);
      if (this.drawCodewords(g), d == -1) {
        let y = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const h = this.getPenaltyScore();
          h < y && (d = m, y = h), this.applyMask(m);
        }
      }
      a(0 <= d && d <= 7), this.mask = d, this.applyMask(d), this.drawFormatBits(d), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(s, c) {
      const u = e.QrSegment.makeSegments(s);
      return ae.encodeSegments(u, c);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, c) {
      const u = e.QrSegment.makeBytes(s);
      return ae.encodeSegments([u], c);
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
    static encodeSegments(s, c, u = 1, d = 40, f = -1, g = !0) {
      if (!(ae.MIN_VERSION <= u && u <= d && d <= ae.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let y, m;
      for (y = u; ; y++) {
        const x = ae.getNumDataCodewords(y, c) * 8, w = i.getTotalBits(s, y);
        if (w <= x) {
          m = w;
          break;
        }
        if (y >= d)
          throw new RangeError("Data too long");
      }
      for (const x of [ae.Ecc.MEDIUM, ae.Ecc.QUARTILE, ae.Ecc.HIGH])
        g && m <= ae.getNumDataCodewords(y, x) * 8 && (c = x);
      let h = [];
      for (const x of s) {
        n(x.mode.modeBits, 4, h), n(x.numChars, x.mode.numCharCountBits(y), h);
        for (const w of x.getData())
          h.push(w);
      }
      a(h.length == m);
      const E = ae.getNumDataCodewords(y, c) * 8;
      a(h.length <= E), n(0, Math.min(4, E - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let x = 236; h.length < E; x ^= 253)
        n(x, 8, h);
      let S = [];
      for (; S.length * 8 < h.length; )
        S.push(0);
      return h.forEach((x, w) => S[w >>> 3] |= x << 7 - (w & 7)), new ae(y, c, S, f);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(s, c) {
      return 0 <= s && s < this.size && 0 <= c && c < this.size && this.modules[c][s];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let u = 0; u < this.size; u++)
        this.setFunctionModule(6, u, u % 2 == 0), this.setFunctionModule(u, 6, u % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(), c = s.length;
      for (let u = 0; u < c; u++)
        for (let d = 0; d < c; d++)
          u == 0 && d == 0 || u == 0 && d == c - 1 || u == c - 1 && d == 0 || this.drawAlignmentPattern(s[u], s[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(s) {
      const c = this.errorCorrectionLevel.formatBits << 3 | s;
      let u = c;
      for (let f = 0; f < 10; f++)
        u = u << 1 ^ (u >>> 9) * 1335;
      const d = (c << 10 | u) ^ 21522;
      a(d >>> 15 == 0);
      for (let f = 0; f <= 5; f++)
        this.setFunctionModule(8, f, r(d, f));
      this.setFunctionModule(8, 7, r(d, 6)), this.setFunctionModule(8, 8, r(d, 7)), this.setFunctionModule(7, 8, r(d, 8));
      for (let f = 9; f < 15; f++)
        this.setFunctionModule(14 - f, 8, r(d, f));
      for (let f = 0; f < 8; f++)
        this.setFunctionModule(this.size - 1 - f, 8, r(d, f));
      for (let f = 8; f < 15; f++)
        this.setFunctionModule(8, this.size - 15 + f, r(d, f));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let s = this.version;
      for (let u = 0; u < 12; u++)
        s = s << 1 ^ (s >>> 11) * 7973;
      const c = this.version << 12 | s;
      a(c >>> 18 == 0);
      for (let u = 0; u < 18; u++) {
        const d = r(c, u), f = this.size - 11 + u % 3, g = Math.floor(u / 3);
        this.setFunctionModule(f, g, d), this.setFunctionModule(g, f, d);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(s, c) {
      for (let u = -4; u <= 4; u++)
        for (let d = -4; d <= 4; d++) {
          const f = Math.max(Math.abs(d), Math.abs(u)), g = s + d, y = c + u;
          0 <= g && g < this.size && 0 <= y && y < this.size && this.setFunctionModule(g, y, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(s, c) {
      for (let u = -2; u <= 2; u++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(s + d, c + u, Math.max(Math.abs(d), Math.abs(u)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(s, c, u) {
      this.modules[c][s] = u, this.isFunction[c][s] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(s) {
      const c = this.version, u = this.errorCorrectionLevel;
      if (s.length != ae.getNumDataCodewords(c, u))
        throw new RangeError("Invalid argument");
      const d = ae.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c], f = ae.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c], g = Math.floor(ae.getNumRawDataModules(c) / 8), y = d - g % d, m = Math.floor(g / d);
      let h = [];
      const E = ae.reedSolomonComputeDivisor(f);
      for (let x = 0, w = 0; x < d; x++) {
        let T = s.slice(w, w + m - f + (x < y ? 0 : 1));
        w += T.length;
        const N = ae.reedSolomonComputeRemainder(T, E);
        x < y && T.push(0), h.push(T.concat(N));
      }
      let S = [];
      for (let x = 0; x < h[0].length; x++)
        h.forEach((w, T) => {
          (x != m - f || T >= y) && S.push(w[x]);
        });
      return a(S.length == g), S;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(ae.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let c = 0;
      for (let u = this.size - 1; u >= 1; u -= 2) {
        u == 6 && (u = 5);
        for (let d = 0; d < this.size; d++)
          for (let f = 0; f < 2; f++) {
            const g = u - f, m = (u + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[m][g] && c < s.length * 8 && (this.modules[m][g] = r(s[c >>> 3], 7 - (c & 7)), c++);
          }
      }
      a(c == s.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(s) {
      if (s < 0 || s > 7)
        throw new RangeError("Mask value out of range");
      for (let c = 0; c < this.size; c++)
        for (let u = 0; u < this.size; u++) {
          let d;
          switch (s) {
            case 0:
              d = (u + c) % 2 == 0;
              break;
            case 1:
              d = c % 2 == 0;
              break;
            case 2:
              d = u % 3 == 0;
              break;
            case 3:
              d = (u + c) % 3 == 0;
              break;
            case 4:
              d = (Math.floor(u / 3) + Math.floor(c / 2)) % 2 == 0;
              break;
            case 5:
              d = u * c % 2 + u * c % 3 == 0;
              break;
            case 6:
              d = (u * c % 2 + u * c % 3) % 2 == 0;
              break;
            case 7:
              d = ((u + c) % 2 + u * c % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[c][u] && d && (this.modules[c][u] = !this.modules[c][u]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let s = 0;
      for (let f = 0; f < this.size; f++) {
        let g = !1, y = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[f][h] == g ? (y++, y == 5 ? s += ae.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, m), g || (s += this.finderPenaltyCountPatterns(m) * ae.PENALTY_N3), g = this.modules[f][h], y = 1);
        s += this.finderPenaltyTerminateAndCount(g, y, m) * ae.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, y = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[h][f] == g ? (y++, y == 5 ? s += ae.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, m), g || (s += this.finderPenaltyCountPatterns(m) * ae.PENALTY_N3), g = this.modules[h][f], y = 1);
        s += this.finderPenaltyTerminateAndCount(g, y, m) * ae.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const y = this.modules[f][g];
          y == this.modules[f][g + 1] && y == this.modules[f + 1][g] && y == this.modules[f + 1][g + 1] && (s += ae.PENALTY_N2);
        }
      let c = 0;
      for (const f of this.modules)
        c = f.reduce((g, y) => g + (y ? 1 : 0), c);
      const u = this.size * this.size, d = Math.ceil(Math.abs(c * 20 - u * 10) / u) - 1;
      return a(0 <= d && d <= 9), s += d * ae.PENALTY_N4, a(0 <= s && s <= 2568888), s;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const s = Math.floor(this.version / 7) + 2, c = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (s * 2 - 2)) * 2;
        let u = [6];
        for (let d = this.size - 7; u.length < s; d -= c)
          u.splice(1, 0, d);
        return u;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(s) {
      if (s < ae.MIN_VERSION || s > ae.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let c = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const u = Math.floor(s / 7) + 2;
        c -= (25 * u - 10) * u - 55, s >= 7 && (c -= 36);
      }
      return a(208 <= c && c <= 29648), c;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(s, c) {
      return Math.floor(ae.getNumRawDataModules(s) / 8) - ae.ECC_CODEWORDS_PER_BLOCK[c.ordinal][s] * ae.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][s];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255)
        throw new RangeError("Degree out of range");
      let c = [];
      for (let d = 0; d < s - 1; d++)
        c.push(0);
      c.push(1);
      let u = 1;
      for (let d = 0; d < s; d++) {
        for (let f = 0; f < c.length; f++)
          c[f] = ae.reedSolomonMultiply(c[f], u), f + 1 < c.length && (c[f] ^= c[f + 1]);
        u = ae.reedSolomonMultiply(u, 2);
      }
      return c;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, c) {
      let u = c.map((d) => 0);
      for (const d of s) {
        const f = d ^ u.shift();
        u.push(0), c.forEach((g, y) => u[y] ^= ae.reedSolomonMultiply(g, f));
      }
      return u;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(s, c) {
      if (s >>> 8 || c >>> 8)
        throw new RangeError("Byte out of range");
      let u = 0;
      for (let d = 7; d >= 0; d--)
        u = u << 1 ^ (u >>> 7) * 285, u ^= (c >>> d & 1) * s;
      return a(u >>> 8 == 0), u;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(s) {
      const c = s[1];
      a(c <= this.size * 3);
      const u = c > 0 && s[2] == c && s[3] == c * 3 && s[4] == c && s[5] == c;
      return (u && s[0] >= c * 4 && s[6] >= c ? 1 : 0) + (u && s[6] >= c * 4 && s[0] >= c ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(s, c, u) {
      return s && (this.finderPenaltyAddHistory(c, u), c = 0), c += this.size, this.finderPenaltyAddHistory(c, u), this.finderPenaltyCountPatterns(u);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(s, c) {
      c[0] == 0 && (s += this.size), c.pop(), c.unshift(s);
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
  function n(l, s, c) {
    if (s < 0 || s > 31 || l >>> s)
      throw new RangeError("Value out of range");
    for (let u = s - 1; u >= 0; u--)
      c.push(l >>> u & 1);
  }
  function r(l, s) {
    return (l >>> s & 1) != 0;
  }
  function a(l) {
    if (!l)
      throw new Error("Assertion error");
  }
  const o = class he {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(s, c, u) {
      if (this.mode = s, this.numChars = c, this.bitData = u, c < 0)
        throw new RangeError("Invalid argument");
      this.bitData = u.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(s) {
      let c = [];
      for (const u of s)
        n(u, 8, c);
      return new he(he.Mode.BYTE, s.length, c);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!he.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let c = [];
      for (let u = 0; u < s.length; ) {
        const d = Math.min(s.length - u, 3);
        n(parseInt(s.substring(u, u + d), 10), d * 3 + 1, c), u += d;
      }
      return new he(he.Mode.NUMERIC, s.length, c);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!he.isAlphanumeric(s))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let c = [], u;
      for (u = 0; u + 2 <= s.length; u += 2) {
        let d = he.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u)) * 45;
        d += he.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u + 1)), n(d, 11, c);
      }
      return u < s.length && n(he.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u)), 6, c), new he(he.Mode.ALPHANUMERIC, s.length, c);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : he.isNumeric(s) ? [he.makeNumeric(s)] : he.isAlphanumeric(s) ? [he.makeAlphanumeric(s)] : [he.makeBytes(he.toUtf8ByteArray(s))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(s) {
      let c = [];
      if (s < 0)
        throw new RangeError("ECI assignment value out of range");
      if (s < 128)
        n(s, 8, c);
      else if (s < 16384)
        n(2, 2, c), n(s, 14, c);
      else if (s < 1e6)
        n(6, 3, c), n(s, 21, c);
      else
        throw new RangeError("ECI assignment value out of range");
      return new he(he.Mode.ECI, 0, c);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return he.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return he.ALPHANUMERIC_REGEX.test(s);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(s, c) {
      let u = 0;
      for (const d of s) {
        const f = d.mode.numCharCountBits(c);
        if (d.numChars >= 1 << f)
          return 1 / 0;
        u += 4 + f + d.bitData.length;
      }
      return u;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let c = [];
      for (let u = 0; u < s.length; u++)
        s.charAt(u) != "%" ? c.push(s.charCodeAt(u)) : (c.push(parseInt(s.substring(u + 1, u + 3), 16)), u += 2);
      return c;
    }
  };
  o.NUMERIC_REGEX = /^[0-9]*$/, o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, o.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let i = o;
  e.QrSegment = o;
})(sn || (sn = {}));
((e) => {
  ((t) => {
    const n = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(a, o) {
        this.ordinal = a, this.formatBits = o;
      }
    };
    n.LOW = new n(0, 1), n.MEDIUM = new n(1, 0), n.QUARTILE = new n(2, 3), n.HIGH = new n(3, 2), t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(sn || (sn = {}));
((e) => {
  ((t) => {
    const n = class {
      /*-- Constructor and fields --*/
      constructor(a, o) {
        this.modeBits = a, this.numBitsCharCount = o;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(a) {
        return this.numBitsCharCount[Math.floor((a + 7) / 17)];
      }
    };
    n.NUMERIC = new n(1, [10, 12, 14]), n.ALPHANUMERIC = new n(2, [9, 11, 13]), n.BYTE = new n(4, [8, 16, 16]), n.KANJI = new n(8, [8, 10, 12]), n.ECI = new n(7, [0, 0, 0]), t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(sn || (sn = {}));
var mn = sn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var Cv = {
  L: mn.QrCode.Ecc.LOW,
  M: mn.QrCode.Ecc.MEDIUM,
  Q: mn.QrCode.Ecc.QUARTILE,
  H: mn.QrCode.Ecc.HIGH
}, fu = 128, hu = "L", pu = "#FFFFFF", mu = "#000000", gu = !1, vu = 1, Sv = 4, Ev = 0, wv = 0.1;
function yu(e, t = 0) {
  const n = [];
  return e.forEach(function(r, a) {
    let o = null;
    r.forEach(function(i, l) {
      if (!i && o !== null) {
        n.push(
          `M${o + t} ${a + t}h${l - o}v1H${o + t}z`
        ), o = null;
        return;
      }
      if (l === r.length - 1) {
        if (!i)
          return;
        o === null ? n.push(`M${l + t},${a + t} h1v1H${l + t}z`) : n.push(
          `M${o + t},${a + t} h${l + 1 - o}v1H${o + t}z`
        );
        return;
      }
      i && o === null && (o = l);
    });
  }), n.join("");
}
function bu(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((a, o) => o < t.x || o >= t.x + t.w ? a : !1));
}
function Tv(e, t, n, r) {
  if (r == null)
    return null;
  const a = e.length + n * 2, o = Math.floor(t * wv), i = a / t, l = (r.width || o) * i, s = (r.height || o) * i, c = r.x == null ? e.length / 2 - l / 2 : r.x * i, u = r.y == null ? e.length / 2 - s / 2 : r.y * i, d = r.opacity == null ? 1 : r.opacity;
  let f = null;
  if (r.excavate) {
    let y = Math.floor(c), m = Math.floor(u), h = Math.ceil(l + c - y), E = Math.ceil(s + u - m);
    f = { x: y, y: m, w: h, h: E };
  }
  const g = r.crossOrigin;
  return { x: c, y: u, h: s, w: l, excavation: f, opacity: d, crossOrigin: g };
}
function Av(e, t) {
  return t != null ? Math.max(Math.floor(t), 0) : e ? Sv : Ev;
}
function xu({
  value: e,
  level: t,
  minVersion: n,
  includeMargin: r,
  marginSize: a,
  imageSettings: o,
  size: i,
  boostLevel: l
}) {
  let s = q.useMemo(() => {
    const y = (Array.isArray(e) ? e : [e]).reduce((m, h) => (m.push(...mn.QrSegment.makeSegments(h)), m), []);
    return mn.QrCode.encodeSegments(
      y,
      Cv[t],
      n,
      void 0,
      void 0,
      l
    );
  }, [e, t, n, l]);
  const { cells: c, margin: u, numCells: d, calculatedImageSettings: f } = q.useMemo(() => {
    let g = s.getModules();
    const y = Av(r, a), m = g.length + y * 2, h = Tv(
      g,
      i,
      y,
      o
    );
    return {
      cells: g,
      margin: y,
      numCells: m,
      calculatedImageSettings: h
    };
  }, [s, i, o, r, a]);
  return {
    qrcode: s,
    margin: u,
    cells: c,
    numCells: d,
    calculatedImageSettings: f
  };
}
var Nv = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), Pv = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = fu,
      level: i = hu,
      bgColor: l = pu,
      fgColor: s = mu,
      includeMargin: c = gu,
      minVersion: u = vu,
      boostLevel: d,
      marginSize: f,
      imageSettings: g
    } = r, m = Bo(r, [
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
    ]), { style: h } = m, E = Bo(m, ["style"]), S = g == null ? void 0 : g.src, x = q.useRef(null), w = q.useRef(null), T = q.useCallback(
      (D) => {
        x.current = D, typeof n == "function" ? n(D) : n && (n.current = D);
      },
      [n]
    ), [N, C] = q.useState(!1), { margin: A, cells: M, numCells: I, calculatedImageSettings: j } = xu({
      value: a,
      level: i,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: f,
      imageSettings: g,
      size: o
    });
    q.useEffect(() => {
      if (x.current != null) {
        const D = x.current, W = D.getContext("2d");
        if (!W)
          return;
        let R = M;
        const P = w.current, k = j != null && P !== null && P.complete && P.naturalHeight !== 0 && P.naturalWidth !== 0;
        k && j.excavation != null && (R = bu(
          M,
          j.excavation
        ));
        const O = window.devicePixelRatio || 1;
        D.height = D.width = o * O;
        const _ = o / I * O;
        W.scale(_, _), W.fillStyle = l, W.fillRect(0, 0, I, I), W.fillStyle = s, Nv ? W.fill(new Path2D(yu(R, A))) : M.forEach(function(L, U) {
          L.forEach(function(F, G) {
            F && W.fillRect(G + A, U + A, 1, 1);
          });
        }), j && (W.globalAlpha = j.opacity), k && W.drawImage(
          P,
          j.x + A,
          j.y + A,
          j.w,
          j.h
        );
      }
    }), q.useEffect(() => {
      C(!1);
    }, [S]);
    const H = $o({ height: o, width: o }, h);
    let B = null;
    return S != null && (B = /* @__PURE__ */ q.createElement(
      "img",
      {
        src: S,
        key: S,
        style: { display: "none" },
        onLoad: () => {
          C(!0);
        },
        ref: w,
        crossOrigin: j == null ? void 0 : j.crossOrigin
      }
    )), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
      "canvas",
      $o({
        style: H,
        height: o,
        width: o,
        ref: T,
        role: "img"
      }, E)
    ), B);
  }
);
Pv.displayName = "QRCodeCanvas";
var Ho = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = fu,
      level: i = hu,
      bgColor: l = pu,
      fgColor: s = mu,
      includeMargin: c = gu,
      minVersion: u = vu,
      boostLevel: d,
      title: f,
      marginSize: g,
      imageSettings: y
    } = r, m = Bo(r, [
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
    ]), { margin: h, cells: E, numCells: S, calculatedImageSettings: x } = xu({
      value: a,
      level: i,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: g,
      imageSettings: y,
      size: o
    });
    let w = E, T = null;
    y != null && x != null && (x.excavation != null && (w = bu(
      E,
      x.excavation
    )), T = /* @__PURE__ */ q.createElement(
      "image",
      {
        href: y.src,
        height: x.h,
        width: x.w,
        x: x.x + h,
        y: x.y + h,
        preserveAspectRatio: "none",
        opacity: x.opacity,
        crossOrigin: x.crossOrigin
      }
    ));
    const N = yu(w, h);
    return /* @__PURE__ */ q.createElement(
      "svg",
      $o({
        height: o,
        width: o,
        viewBox: `0 0 ${S} ${S}`,
        ref: n,
        role: "img"
      }, m),
      !!f && /* @__PURE__ */ q.createElement("title", null, f),
      /* @__PURE__ */ q.createElement(
        "path",
        {
          fill: l,
          d: `M0,0 h${S}v${S}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ q.createElement("path", { fill: s, d: N, shapeRendering: "crispEdges" }),
      T
    );
  }
);
Ho.displayName = "QRCodeSVG";
function Rv({
  address: e,
  open: t,
  setOpen: n,
  onClose: r
}) {
  const { t: a } = Wo(), [o, i] = p.useState("");
  p.useEffect(() => {
    const { username: c } = Me.all();
    i(c);
  }, []);
  const l = async () => {
    try {
      const c = document.querySelector("#qr-code-svg");
      if (!c) return;
      const u = c.querySelector("image");
      if (u) {
        const m = u.getAttribute("href") || "", E = await (await fetch(m)).blob(), S = await new Promise((x) => {
          const w = new FileReader();
          w.onloadend = () => x(w.result), w.readAsDataURL(E);
        });
        u.setAttribute("href", S);
      }
      const d = new XMLSerializer().serializeToString(c), f = new Blob([d], { type: "image/svg+xml;charset=utf-8" }), g = URL.createObjectURL(f), y = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((m, h) => {
        const E = new Image();
        E.onload = () => {
          const S = document.createElement("canvas"), x = S.getContext("2d");
          S.width = E.width, S.height = E.height, x == null || x.drawImage(E, 0, 0), y ? S.toBlob(async (w) => {
            if (w)
              try {
                if (navigator.share) {
                  const T = new File([w], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [T],
                    title: "QR Code"
                  });
                } else {
                  const T = URL.createObjectURL(w), N = document.createElement("a");
                  N.href = T, N.download = "qrcode.png", document.body.appendChild(N), N.click(), document.body.removeChild(N), URL.revokeObjectURL(T);
                }
                st.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (T) {
                h(T);
              }
          }, "image/png") : S.toBlob(async (w) => {
            if (w)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": w })
                ]), st.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (T) {
                h(T);
              }
          }, "image/png");
        }, E.onerror = h, E.src = g;
      });
    } catch (c) {
      st.error(c.message);
    }
  }, s = t ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: ne(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => r(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(Vo, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs(bv, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ v.jsxs(lu, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ v.jsx(
            Do,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ v.jsx(
            Do,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ v.jsxs(Fo, { value: "crypto", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Oa, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Ho,
            {
              id: "qr-code-svg",
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
        /* @__PURE__ */ v.jsxs(Fo, { value: "email", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Oa, { address: o, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Ho,
            {
              value: o,
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
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(en, { onClick: l, children: "Share QR code" }) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return Kn.createPortal(
      s,
      document.body
    );
}
const Mv = ["totalAsset"], kv = 0.01, Ov = async (e) => {
  try {
    const n = (await _e.get("/user-assets/total-assets", {
      params: { address: e }
    })).data.totalAssets;
    return {
      raw: n,
      formatted: Sd(n, 2),
      isZero: n === 0,
      isUSDZero: n < kv
    };
  } catch (t) {
    throw Gn(t);
  }
};
function Iv(e) {
  const { address: t } = Me.all();
  return fr({
    queryKey: [...Mv, t],
    queryFn: () => Ov(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30
    // cache for 30 minutes
  });
}
const jv = async () => {
  const { data: e } = await _e.get("/user/info");
  return e;
}, _v = (e) => fr({
  queryKey: ["userInfo"],
  queryFn: jv,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...e
});
function Lv() {
  const { address: e } = Me.all(), { data: t, refetch: n } = Iv({
    enabled: !!e
  }), { data: r } = _v(), [a, o] = p.useState(""), [i, l] = p.useState(!1), [s, c] = p.useState(!1), [u, d] = p.useState("ETH"), [f, g] = p.useState(Ti.getData() ?? !0);
  p.useEffect(() => {
    y(u);
  }, []), p.useEffect(() => {
    r && o(r.avatar || Me.getUserRandomAvatar(r.avatarIndex));
  }, [r]);
  const y = async (h) => {
    d(h);
  }, m = () => {
    g(!f), Ti.setData(!f);
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: ne(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: ne(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${a})`
            }
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: ne(
          "relative z-10",
          "tablet:flex tablet:justify-between tablet:gap-2",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("div", { className: ne(
              'text-white font-bold leading-tight font-["Asap"]',
              "text-lg tablet:text-[32px]",
              "mb-[25px] tablet:mb-[50px]"
            ), children: "Total asset" }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-start gap-2 tablet:w-auto", children: [
              /* @__PURE__ */ v.jsx(
                "img",
                {
                  src: a,
                  alt: "avatar",
                  className: ne(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ v.jsx("div", { className: ne(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ v.jsx("div", { className: ne(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: f ? /* @__PURE__ */ v.jsxs("div", { className: "flex gap-4", children: [
                  "******",
                  /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: "/imgs/icons/close_eye.svg",
                      className: "w-[30px] h-[30px] cursor-pointer",
                      onClick: m
                    }
                  )
                ] }) : /* @__PURE__ */ v.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  "$",
                  (t == null ? void 0 : t.formatted) || "",
                  /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-4", children: [
                    "USD",
                    /* @__PURE__ */ v.jsx(
                      "img",
                      {
                        src: "/imgs/icons/open_eye.svg",
                        className: "w-[30px] h-[30px] cursor-pointer",
                        onClick: m
                      }
                    )
                  ] })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: ne(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ v.jsxs("div", { className: ne(
              "flex items-center gap-3 mb-[28px]",
              "justify-center tablet:justify-end"
            ), children: [
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: " bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => l(!0),
                  children: [
                    /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/send.svg", alt: "" }),
                    /* @__PURE__ */ v.jsx("span", { className: "text-black text-xs font-bold", children: "Send" })
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => c(!0),
                  children: [
                    /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/receive.svg", alt: "" }),
                    /* @__PURE__ */ v.jsx("span", { className: "text-black text-xs font-bold", children: "Receive" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ v.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ v.jsx(
                Oa,
                {
                  address: e,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              /* @__PURE__ */ v.jsx(
                "img",
                {
                  className: "w-[14px] h-[14px] cursor-pointer",
                  src: "/imgs/icons/qrcode.svg",
                  alt: "",
                  onClick: () => c(!0)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsx(
          yv,
          {
            open: i,
            setOpen: l,
            address: e,
            tokenType: u,
            onClose: () => l(!1)
          }
        ),
        /* @__PURE__ */ v.jsx(
          Rv,
          {
            address: e,
            open: s,
            setOpen: c,
            onClose: () => c(!1)
          }
        )
      ]
    }
  );
}
function Dv() {
  return /* @__PURE__ */ v.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ v.jsx(Lv, {}),
    /* @__PURE__ */ v.jsx("div", { className: ne(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ v.jsx(Qu, {}) })
  ] });
}
function Fv() {
  const e = qu();
  return console.error(e), /* @__PURE__ */ v.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ v.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ v.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ v.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ v.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
function B0({
  total: e = 0,
  pageSize: t = 30
} = {}) {
  const [n, r] = p.useState({
    current: 1,
    total: e,
    pageSize: t
  });
  return {
    pagination: n,
    handlePageChange: (l) => {
      Xe("handlePageChange", l), r((s) => ({
        ...s,
        current: l
      }));
    },
    updateTotal: (l) => {
      r((s) => ({
        ...s,
        total: l
      }));
    },
    updatePageSize: (l) => {
      r((s) => ({
        ...s,
        pageSize: l,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const $v = 30, Bv = async () => {
  try {
    const e = await _e.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: $v
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = Gn(e);
    throw new Error(t.message);
  }
}, Hv = Xu([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-DcD_5cPk.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ v.jsx(Fv, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-DZOqfbVc.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-Ds56o6dU.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-DVlQGcrP.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-NaP-Pcga.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-CURORk-g.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-daily-withdrawal-limit",
            async lazy() {
              const { default: e } = await import("./page-D4UKdbUD.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ v.jsx(Dv, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-Dip48RBf.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-CxA_aqOz.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-BsofLnq0.js");
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
                  const { default: e } = await import("./page-SmHtkxjM.js");
                  return { Component: e };
                },
                loader: Bv
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-CZS1mzrY.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-BJwjMfH-.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-nK2_XGNO.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-CuIcE62k.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-CsI9Ilmb.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-BMv0fnkO.js");
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
                          const { default: e } = await import("./page-DJhUIE0_.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-BcWnG-IL.js");
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
                  const { default: e } = await import("./page-DTjUNy-o.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-BwIFnPTW.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "profile",
            async lazy() {
              const { default: e } = await import("./index-C-8GuFQx.js");
              return { Component: e };
            }
          },
          {
            path: "multisender",
            async lazy() {
              const { default: e } = await import("./page-rUTgY3z5.js");
              return { Component: e };
            }
          }
        ]
      }
    ]
  }
]);
function Uv() {
  const [e, t] = p.useState(!1);
  return p.useEffect(() => {
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(n);
  }, []), /* @__PURE__ */ v.jsx(
    dd,
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
      transition: fd,
      icon: ({ type: n }) => {
        if (n === "error")
          return /* @__PURE__ */ v.jsx(cd, {});
        if (n === "success")
          return /* @__PURE__ */ v.jsx(Pa, {});
        if (n === "info")
          return /* @__PURE__ */ v.jsx(ld, {});
        if (n === "warning")
          return /* @__PURE__ */ v.jsx(nc, {});
      },
      toastClassName: ne(
        "text-sm",
        // 'laptop:top-[82px]',
        "max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var pi = "moonpay-react-sdk-embedded-frame", zv = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: r,
  signature: a
}) => {
  const {
    // params
    currencyCode: o,
    defaultCurrencyCode: i,
    walletAddress: l,
    walletAddressTag: s,
    walletAddresses: c,
    walletAddressTags: u,
    colorCode: d,
    theme: f,
    themeId: g,
    language: y,
    baseCurrencyCode: m,
    baseCurrencyAmount: h,
    quoteCurrencyAmount: E,
    lockAmount: S,
    email: x,
    externalTransactionId: w,
    externalCustomerId: T,
    paymentMethod: N,
    redirectURL: C,
    showAllCurrencies: A,
    showOnlyCurrencies: M,
    showWalletAddressForm: I,
    unsupportedRegionRedirectUrl: j,
    skipUnsupportedRegionScreen: H,
    baseOrigin: B,
    // handlers
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: R,
    onLogin: P,
    onTransactionCompleted: k,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: _,
    onCloseOverlay: L,
    onTransactionCreated: U,
    // auth
    auth: F,
    useWarnBeforeRefresh: G,
    // other
    overlayNode: Q
  } = e, te = {
    apiKey: t,
    signature: a,
    currencyCode: o,
    defaultCurrencyCode: i,
    walletAddress: l,
    walletAddressTag: s,
    walletAddresses: c,
    walletAddressTags: u,
    colorCode: d,
    theme: f,
    themeId: g,
    language: y,
    baseCurrencyCode: m,
    baseCurrencyAmount: h,
    quoteCurrencyAmount: E,
    lockAmount: S,
    email: x,
    externalTransactionId: w,
    externalCustomerId: T,
    paymentMethod: N,
    redirectURL: C,
    showAllCurrencies: A,
    showOnlyCurrencies: M,
    showWalletAddressForm: I,
    unsupportedRegionRedirectUrl: j,
    skipUnsupportedRegionScreen: H,
    baseOrigin: B
  }, ee = {
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: R,
    onLogin: P,
    onTransactionCompleted: k,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: _,
    onCloseOverlay: L,
    onTransactionCreated: U
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: r,
    params: te,
    debug: n,
    handlers: ee,
    auth: F,
    useWarnBeforeRefresh: G,
    containerNodeSelector: `#${pi}`,
    overlayNode: Q
  };
}, Vv = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: r,
  signature: a
}) => {
  const {
    // params
    quoteCurrencyCode: o,
    defaultCurrencyCode: i,
    defaultBaseCurrencyCode: l,
    walletAddress: s,
    walletAddressTag: c,
    walletAddresses: u,
    walletAddressTags: d,
    colorCode: f,
    theme: g,
    themeId: y,
    language: m,
    baseCurrencyCode: h,
    baseCurrencyAmount: E,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: w,
    externalTransactionId: T,
    externalCustomerId: N,
    paymentMethod: C,
    redirectURL: A,
    showAllCurrencies: M,
    showOnlyCurrencies: I,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: H,
    skipUnsupportedRegionScreen: B,
    mpWalletId: D,
    baseOrigin: W,
    // handlers
    onAuthToken: R,
    onInitiateDeposit: P,
    onKmsWalletsCreated: k,
    onLogin: O,
    onTransactionCompleted: _,
    onUnsupportedRegion: L,
    onSwapsCustomerSetupComplete: U,
    onCloseOverlay: F,
    onTransactionCreated: G,
    // auth
    auth: Q,
    useWarnBeforeRefresh: te
  } = e, ee = {
    apiKey: t,
    signature: a,
    quoteCurrencyCode: o,
    defaultCurrencyCode: i,
    defaultBaseCurrencyCode: l,
    walletAddress: s,
    walletAddressTag: c,
    walletAddresses: u,
    walletAddressTags: d,
    colorCode: f,
    theme: g,
    themeId: y,
    language: m,
    baseCurrencyCode: h,
    baseCurrencyAmount: E,
    quoteCurrencyAmount: S,
    lockAmount: x,
    email: w,
    externalTransactionId: T,
    externalCustomerId: N,
    paymentMethod: C,
    redirectURL: A,
    showAllCurrencies: M,
    showOnlyCurrencies: I,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: H,
    skipUnsupportedRegionScreen: B,
    mpWalletId: D,
    baseOrigin: W
  }, Pe = {
    onAuthToken: R,
    onInitiateDeposit: P,
    onKmsWalletsCreated: k,
    onLogin: O,
    onTransactionCompleted: _,
    onUnsupportedRegion: L,
    onSwapsCustomerSetupComplete: U,
    onCloseOverlay: F,
    onTransactionCreated: G
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: r,
    params: ee,
    debug: n,
    handlers: Pe,
    auth: Q,
    useWarnBeforeRefresh: te,
    containerNodeSelector: `#${pi}`
  };
};
async function Wv(e = "v1") {
  return new Promise((t, n) => {
    const r = `https://static.moonpay.com/web-sdk/${e}/moonpay-web-sdk.min.js`, a = document.querySelector(`script[src="${r}"]`), o = (i = 0) => {
      if (window.MoonPayWebSdk) {
        t(window.MoonPayWebSdk.init);
        return;
      }
      if (i > 100) {
        n(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => o(i + 1), 100);
    };
    if (a)
      o();
    else {
      const i = document.createElement("script");
      i.async = !0, i.src = r, i.addEventListener("load", () => {
        var l;
        t((l = window.MoonPayWebSdk) == null ? void 0 : l.init);
      }), i.addEventListener("error", () => {
        n(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(i);
    }
  });
}
function Kv(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var Na = () => {
}, Gv = {
  info: Na,
  warn: Na,
  error: Na
}, Qv = class Cu {
  constructor({
    logger: t,
    prefix: n
  }) {
    me(this, "prefix");
    me(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new Cu({ logger: Gv });
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
}, ca = p.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), qv = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const r = Kv(t), [a, o] = p.useState({
    apiKey: t,
    environment: r,
    debug: n
  }), i = p.useCallback(async () => {
    const l = await Wv();
    o((s) => ({ ...s, init: l }));
  }, []);
  return p.useEffect(() => {
    a.init || i();
  }, [i, a.init]), /* @__PURE__ */ v.jsx(ca.Provider, { value: a, children: e });
}, Xv = class extends Qv {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Yv = (e, t, n) => {
  const r = p.useRef(null), { init: a, debug: o } = p.useContext(ca), i = p.useRef(new Xv().if(o || !1)), l = p.useCallback(async () => {
    var s, c;
    if (r.current) {
      if (!n && ("walletAddress" in e || "walletAddresses" in e) && i.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), n) {
        const u = r.current.generateUrlForSigning();
        try {
          const d = await (n == null ? void 0 : n(u));
          if (!d)
            return;
          (s = r.current) == null || s.updateSignature(d);
        } catch (d) {
          i.current.error(
            "Something went wrong calling the provided `onUrlSignatureRequested` function:",
            d
          );
        }
      }
      t && ((c = r.current) == null || c.show());
    }
  }, [n, t, e]);
  p.useEffect(() => {
    r.current && r.current.close();
    const s = (a == null ? void 0 : a(e)) || null;
    r.current = s, l();
  }, [a, e, l]);
}, Zv = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Su({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: r,
  style: a
}) {
  return Yv(e, n, t), n ? /* @__PURE__ */ v.jsx(
    "div",
    {
      id: pi,
      className: r,
      style: e.variant === "embedded" ? {
        ...Zv,
        ...a
      } : void 0
    }
  ) : null;
}
function H0(e) {
  const { apiKey: t, environment: n } = p.useContext(ca), r = p.useMemo(
    () => zv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Su,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function U0(e) {
  const { apiKey: t, environment: n } = p.useContext(ca), r = p.useMemo(
    () => Vv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Su,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const Jv = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function e0({ children: e }) {
  return /* @__PURE__ */ v.jsx(
    qv,
    {
      apiKey: Jv,
      debug: !0,
      children: e
    }
  );
}
const t0 = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, n0 = {
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
}, r0 = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, a0 = {
  authenticationError: "Authentication Error. Please sign in again."
}, o0 = {
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
  header: t0,
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
  vastWalletConnect: n0,
  toastSuccess: r0,
  toastError: a0
}, i0 = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, s0 = {
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
}, c0 = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, l0 = {
  authenticationError: "认证错误，请重新登录。"
}, u0 = {
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
  header: i0,
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
  vastWalletConnect: s0,
  toastSuccess: c0,
  toastError: l0
}, d0 = {
  en: {
    translation: o0
  },
  zh: {
    translation: u0
  }
};
Xe("savedLng", oc);
const f0 = oc.getData();
rc.use(hd).init({
  resources: d0,
  lng: f0 || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function h0() {
  return p.useEffect(() => {
    const t = [
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
    ].map((n) => {
      const r = document.createElement("link");
      return Object.entries(n).forEach(([a, o]) => {
        r.setAttribute(a, o);
      }), document.head.appendChild(r);
    });
    return () => {
      t.forEach((n) => n.remove());
    };
  }, []), null;
}
const p0 = new Wg({
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
function m0() {
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ v.jsx(p.Suspense, { children: /* @__PURE__ */ v.jsx(Xg, { client: p0, children: /* @__PURE__ */ v.jsxs(pd, { i18n: rc, children: [
      /* @__PURE__ */ v.jsx(e0, { children: /* @__PURE__ */ v.jsx(Yu, { router: Hv }) }),
      /* @__PURE__ */ v.jsx(Uv, {})
    ] }) }) }) }),
    /* @__PURE__ */ v.jsx(h0, {})
  ] });
}
const g0 = "theme_light", v0 = "0.0.0", y0 = "module", b0 = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, x0 = {
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
  papaparse: "^5.4.1",
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
}, C0 = {
  "@eslint/js": "^9.11.1",
  "@types/nprogress": "^0.2.3",
  "@types/papaparse": "^5.3.15",
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
}, S0 = {
  name: g0,
  private: !0,
  version: v0,
  type: y0,
  scripts: b0,
  dependencies: x0,
  devDependencies: C0
};
Xe("isDev", cc);
function js(e) {
  const t = Ra(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ v.jsx(m0, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
cc ? js("root") : typeof window < "u" && (window[`mount_${S0.name}`] = js);
export {
  ka as $,
  k0 as A,
  en as B,
  cn as C,
  _d as D,
  jm as E,
  bt as F,
  yt as G,
  si as H,
  $r as I,
  wp as J,
  Un as K,
  lc as L,
  yp as M,
  j0 as N,
  Le as O,
  I0 as P,
  Dl as Q,
  Il as R,
  yv as S,
  Qn as T,
  lo as U,
  O0 as V,
  L0 as W,
  Ki as X,
  Rr as Y,
  Sd as Z,
  Y as _,
  Me as a,
  Ul as a$,
  fr as a0,
  bv as a1,
  lu as a2,
  Do as a3,
  Oa as a4,
  Iv as a5,
  Rv as a6,
  B0 as a7,
  $v as a8,
  Rg as a9,
  Ep as aA,
  Tp as aB,
  At as aC,
  xa as aD,
  Ol as aE,
  uc as aF,
  Ma as aG,
  Cd as aH,
  Aa as aI,
  dv as aJ,
  Ni as aK,
  M0 as aL,
  Xd as aM,
  Xo as aN,
  fo as aO,
  nn as aP,
  Pc as aQ,
  yc as aR,
  _a as aS,
  Br as aT,
  mh as aU,
  Wa as aV,
  ga as aW,
  cf as aX,
  vc as aY,
  Mi as aZ,
  um as a_,
  H0 as aa,
  U0 as ab,
  dc as ac,
  qg as ad,
  sc as ae,
  Wl as af,
  tr as ag,
  Zr as ah,
  Jr as ai,
  tn as aj,
  zr as ak,
  Wp as al,
  Zp as am,
  ia as an,
  gv as ao,
  hv as ap,
  Yc as aq,
  _0 as ar,
  co as as,
  Zm as at,
  D0 as au,
  Yd as av,
  Dn as aw,
  Zd as ax,
  er as ay,
  Uh as az,
  Ld as b,
  js as b0,
  ne as c,
  fc as d,
  hc as e,
  _e as f,
  Xe as g,
  Gn as h,
  Fr as i,
  Ai as j,
  jd as k,
  oc as l,
  Bt as m,
  Ve as n,
  uo as o,
  kc as p,
  $t as q,
  bp as r,
  Ut as s,
  Ln as t,
  _v as u,
  jl as v,
  Hr as w,
  Qd as x,
  Fe as y,
  Ht as z
};
