var Zu = Object.defineProperty;
var Di = (e) => {
  throw TypeError(e);
};
var Ju = (e, t, n) => t in e ? Zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ve = (e, t, n) => Ju(e, typeof t != "symbol" ? t + "" : t, n), Oa = (e, t, n) => t.has(e) || Di("Cannot " + n);
var C = (e, t, n) => (Oa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ne = (e, t, n) => t.has(e) ? Di("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), W = (e, t, n, r) => (Oa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), oe = (e, t, n) => (Oa(e, t, "access private method"), n);
var Rr = (e, t, n, r) => ({
  set _(a) {
    W(e, t, a, n);
  },
  get _() {
    return C(e, t, r);
  }
});
import { j as y, S as ed, d as lc, g as uc, P as td, C as dc, I as fc, i as hc, k as pc, l as mc, L as gc, m as vc, n as nd, T as rd, o as yc, p as bc, q as xc, r as ad } from "./vendor-radix-BYJ0AyiX.js";
import { p as Q, a as ci, r as p, g as Cc, R as q, b as cr, $ as li, e as od, O as id, u as sd, f as cd, h as ld } from "./vendor-react-CuOkI7kW.js";
import { t as ud, c as dd, C as fd, a as hd, b as pd, d as md, e as gd, _ as it, X as ui, L as vd, f as qa, g as Sc, h as yd, i as bd, j as xd, I as Cd } from "./vendor-ui-utils-2_WY-nJY.js";
import { a as Qt, B as We, u as di, C as Sd, Q as Ed, X as wd, i as Ec, b as Td, I as Ad } from "./vendor-utils-BfzDPiRN.js";
import { d as kd, f as Nd, h as er, a as Pd, b as Rd, s as Md, t as Ia, c as Od, e as Id, i as Jr, I as Bi, g as fi, j as zn, k as qt, l as Vn, m as _d, n as jd, _ as me, o as Ld, p as U, q as J, r as hn, u as zr } from "./vendor-web3-DDgB3Js4.js";
var Xa, Mr = ci;
if (Q.env.NODE_ENV === "production")
  Xa = Mr.createRoot, Mr.hydrateRoot;
else {
  var $i = Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Xa = function(e, t) {
    $i.usingClientEntryPoint = !0;
    try {
      return Mr.createRoot(e, t);
    } finally {
      $i.usingClientEntryPoint = !1;
    }
  };
}
const rt = console.log.bind(console, "🚀");
function re(...e) {
  return ud(dd(e));
}
class Pt {
  constructor(t) {
    ve(this, "isClient");
    ve(this, "key");
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
const wc = new Pt("language"), Hi = new Pt("hideTotalAsset");
class Fd {
  constructor() {
    ve(this, "storages");
    this.storages = {
      username: new Pt("username"),
      displayName: new Pt("displayName"),
      address: new Pt("address"),
      authenticatedHeader: new Pt("authenticatedHeader"),
      authenticated: new Pt("authenticated"),
      desUsername: new Pt("desUsername"),
      aeskey: new Pt("aeskey")
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
const $e = new Fd(), Tc = [
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
var Re = /* @__PURE__ */ ((e) => (e.ETH = "ETH", e.BASE_ETH = "BASE_ETH", e.MATIC = "MATIC", e.TVWT = "TVWT", e.VAST = "VAST", e))(Re || {}), Wn = /* @__PURE__ */ ((e) => (e.POL = "POL", e.SepoliaETH = "SepoliaETH", e.BaseSepoliaETH = "BaseSepoliaETH", e))(Wn || {});
class Er {
  constructor({
    tokenType: t,
    name: n,
    symbol: r,
    decimals: a,
    gasSymbol: o,
    logo: s,
    color: l,
    viemChain: i,
    publicClient: c,
    scanTransactionUrl: u,
    contractAddress: d,
    contractAbi: f,
    gasless: g = !1
  }) {
    ve(this, "tokenType");
    ve(this, "name");
    ve(this, "symbol");
    ve(this, "decimals");
    ve(this, "gasSymbol");
    ve(this, "logo");
    ve(this, "color");
    ve(this, "viemChain");
    ve(this, "publicClient");
    ve(this, "scanTransactionUrl");
    ve(this, "contractAddress");
    ve(this, "contractAbi");
    ve(this, "gasless");
    this.tokenType = t, this.name = n, this.symbol = r, this.decimals = a, this.gasSymbol = o, this.logo = s, this.color = l, this.viemChain = i, this.publicClient = c, this.scanTransactionUrl = u, this.contractAddress = d, this.contractAbi = f, this.gasless = g;
  }
}
const Dd = {
  gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },
  l1Block: { address: "0x4200000000000000000000000000000000000015" },
  l2CrossDomainMessenger: {
    address: "0x4200000000000000000000000000000000000007"
  },
  l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },
  l2StandardBridge: { address: "0x4200000000000000000000000000000000000010" },
  l2ToL1MessagePasser: {
    address: "0x4200000000000000000000000000000000000016"
  }
}, Bd = {
  block: /* @__PURE__ */ kd({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => {
          if (typeof r == "string")
            return r;
          const a = Nd(r);
          return a.typeHex === "0x7e" && (a.isSystemTx = r.isSystemTx, a.mint = r.mint ? er(r.mint) : void 0, a.sourceHash = r.sourceHash, a.type = "deposit"), a;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Pd({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? er(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ Rd({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? er(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? er(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? er(e.l1Fee) : null,
        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
      };
    }
  })
};
function $d(e, t) {
  return zd(e) ? Ud(e) : Md(e, t);
}
const Hd = {
  transaction: $d
};
function Ud(e) {
  Vd(e);
  const { sourceHash: t, data: n, from: r, gas: a, isSystemTx: o, mint: s, to: l, value: i } = e, c = [
    t,
    r,
    l ?? "0x",
    s ? Ia(s) : "0x",
    i ? Ia(i) : "0x",
    a ? Ia(a) : "0x",
    o ? "0x1" : "0x",
    n ?? "0x"
  ];
  return Od([
    "0x7e",
    Id(c)
  ]);
}
function zd(e) {
  return e.type === "deposit" || typeof e.sourceHash < "u";
}
function Vd(e) {
  const { from: t, to: n } = e;
  if (t && !Jr(t))
    throw new Bi({ address: t });
  if (n && !Jr(n))
    throw new Bi({ address: n });
}
const Ui = {
  contracts: Dd,
  formatters: Bd,
  serializers: Hd
}, tr = 11155111, ea = /* @__PURE__ */ fi({
  ...Ui,
  id: 84532,
  network: "base-sepolia",
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"]
    }
  },
  blockExplorers: {
    default: {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  },
  contracts: {
    ...Ui.contracts,
    disputeGameFactory: {
      [tr]: {
        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
      }
    },
    l2OutputOracle: {
      [tr]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [tr]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [tr]: {
        address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",
        blockCreated: 4446677
      }
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1059647
    }
  },
  testnet: !0,
  sourceId: tr
}), ta = /* @__PURE__ */ fi({
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
}), zi = /* @__PURE__ */ fi({
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
});
class Wd extends Er {
  constructor() {
    super({
      tokenType: Re.ETH,
      name: "Ethereum Sepolia",
      symbol: "SepoliaETH",
      decimals: 18,
      gasSymbol: Wn.SepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: zi,
      publicClient: zn({
        chain: zi,
        transport: Vn("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.etherscan.io/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return qt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.etherscan.io/api", a = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await Qt.get(n, {
      params: {
        ...a,
        action: "txlist",
        address: t,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Gd extends Er {
  constructor() {
    super({
      tokenType: Re.MATIC,
      name: "Polygon Amoy",
      symbol: "POL",
      decimals: 18,
      gasSymbol: Wn.POL,
      logo: "/imgs/logos/matic.png",
      color: "#c08fec",
      viemChain: ta,
      publicClient: zn({
        chain: ta,
        transport: Vn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return qt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-amoy.polygonscan.com/api", a = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await Qt.get(n, {
      params: {
        ...a,
        action: "txlist",
        address: t,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Kd extends Er {
  constructor() {
    super({
      tokenType: Re.TVWT,
      name: "TheVastlinkToken",
      symbol: "TVWT",
      decimals: 18,
      gasSymbol: Wn.POL,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: ta,
      publicClient: zn({
        chain: ta,
        transport: Vn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/",
      contractAddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
      contractAbi: Tc
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return qt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-amoy.polygonscan.com/api", a = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await Qt.get(n, {
      params: {
        ...a,
        action: "tokentx",
        address: t,
        contractaddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class Qd extends Er {
  constructor() {
    super({
      tokenType: Re.VAST,
      name: "TheVastlinkToken",
      symbol: "VAST",
      decimals: 18,
      gasSymbol: Wn.BaseSepoliaETH,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: ea,
      publicClient: zn({
        chain: ea,
        transport: Vn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/",
      contractAddress: "0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b",
      contractAbi: _d,
      // kkktodo: add vast abi
      gasless: !0
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return qt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.basescan.org/api", a = {
      apikey: "RGQ66MKA7BD483ZGG8ZDBFG6RD4UKZU9PS",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await Qt.get(n, {
      params: {
        ...a,
        action: "tokentx",
        address: t,
        contractaddress: "0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b",
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
class qd extends Er {
  constructor() {
    super({
      tokenType: Re.BASE_ETH,
      name: "Base Sepolia",
      symbol: "BaseSepoliaETH",
      decimals: 18,
      gasSymbol: Wn.BaseSepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: ea,
      publicClient: zn({
        chain: ea,
        transport: Vn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return qt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.basescan.org/api", a = {
      apikey: "RGQ66MKA7BD483ZGG8ZDBFG6RD4UKZU9PS",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await Qt.get(n, {
      params: {
        ...a,
        action: "txlist",
        address: t,
        startblock: "0",
        endblock: "latest"
      }
    })).data.result;
  }
}
const Jt = class Jt {
  constructor() {
    ve(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      [Re.ETH, new Wd()],
      [Re.BASE_ETH, new qd()],
      [Re.MATIC, new Gd()],
      [Re.TVWT, new Kd()],
      [Re.VAST, new Qd()]
    ]);
  }
  static getInstance() {
    return Jt.instance || (Jt.instance = new Jt()), Jt.instance;
  }
  getToken(t) {
    const n = this.tokenMap.get(t);
    if (!n)
      throw new Error(`Unsupported token type: ${t}`);
    return n;
  }
  getAllTokens() {
    return Array.from(this.tokenMap.values());
  }
  isNativeToken(t) {
    return t === Re.ETH || t === Re.BASE_ETH || t === Re.MATIC;
  }
  isERC20Token(t) {
    return t === Re.TVWT || t === Re.VAST;
  }
  createTokenMap(t) {
    return Array.from(this.tokenMap.entries()).reduce((n, [r, a]) => (n[r] = t(a), n), {});
  }
  getNativeTokenTypeByGasSymbol(t) {
    var r;
    return ((r = Array.from(this.tokenMap.values()).find((a) => a.gasSymbol === t && this.isNativeToken(a.tokenType))) == null ? void 0 : r.tokenType) || null;
  }
};
ve(Jt, "instance");
let Ya = Jt;
const Ee = Ya.getInstance();
Object.freeze(Ee);
Qt.defaults.withCredentials = !0;
const Le = Qt.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
Le.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const r = e.response.data.message || "Authentication error";
      console.log(`${r}, redirecting to login...`), $e.clearAllAuthData(), typeof window < "u" && (We.error(r), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
const Xd = Tc, Yd = (e) => e.replace(/\.?0+$/, ""), or = (e, t = 6) => parseFloat(e).toFixed(t), Zd = (e, t = 2) => {
  const r = (typeof e == "string" ? parseFloat(e) : e).toFixed(t), [a, o] = r.split("."), s = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o ? `${s}.${o}` : s;
};
async function Jd({
  tokenType: e,
  transferParams: t,
  fromAddress: n,
  defaultGasPrice: r,
  defaultBlock: a
}) {
  try {
    const o = Ee.getToken(e).viemChain;
    if (!o) return null;
    if (Ee.getToken(e).gasless)
      return {
        estimatedGas: BigInt(0),
        maxFeePerGas: BigInt(0),
        maxPriorityFeePerGas: BigInt(0),
        estimatedTotalFee: BigInt(0),
        baseFee: BigInt(0),
        gasPrice: BigInt(0),
        feeInTokens: "0"
      };
    const s = zn({
      chain: o,
      transport: Vn()
    });
    let l;
    if (Ee.isERC20Token(e) && (l = Ee.getToken(e).contractAddress, !l))
      throw new Error("Invalid token contract address");
    let i;
    if (Ee.isERC20Token(e)) {
      const c = jd({
        abi: Xd,
        functionName: "transfer",
        args: [t.to, t.amount]
      });
      i = {
        to: l,
        data: c,
        value: BigInt(0)
      };
    } else
      i = {
        to: t.to,
        value: t.amount
      };
    try {
      const c = await s.estimateGas({
        ...i,
        account: n
      }), u = r || await s.getGasPrice(), f = (a || await s.getBlock()).baseFeePerGas || BigInt(0), g = u > f ? u - f : BigInt(1e9), v = f + g * BigInt(2), m = c * v, h = or(
        (Number(m) / Math.pow(10, 18)).toString()
      );
      return {
        estimatedGas: c,
        maxFeePerGas: v,
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
async function ay(e, t, n = 18e4) {
  const r = Date.now(), a = Ee.getToken(t).publicClient;
  for (; ; )
    try {
      const o = await a.getTransactionReceipt({ hash: e });
      if (o)
        return o;
      if (Date.now() - r > n)
        throw new Error("Transaction timeout");
      await new Promise((s) => setTimeout(s, 2e3));
    } catch (o) {
      if (console.error("Get transaction receipt error:", o), Date.now() - r > n)
        throw o;
      await new Promise((s) => setTimeout(s, 2e3));
    }
}
const Vi = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, Ac = Q.env.NODE_ENV === "development", oy = (e, t) => {
  const n = document.createElement("a");
  n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
};
function ln(e) {
  if (Qt.isAxiosError(e)) {
    const t = e;
    if (t.response) {
      const n = t.response.data;
      if (n && n.message) {
        const { errorType: r, message: a } = n;
        if (r)
          return {
            message: a,
            errorType: r
          };
      }
      return { message: n.message || `${t.message}` };
    } else
      return { message: `Request error: ${t.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
const ef = 1e3 * 60 * 60 * 24, tf = 1e3 * 60 * 60 * 24, kc = 1e3 * 60 * 60;
function Nc(e, t = 5 * 60 * 1e3) {
  const n = Math.floor(Math.random() * t);
  return e + n;
}
function Za({
  iconSize: e = 20,
  address: t,
  className: n = "",
  iconClassName: r = "",
  ...a
}) {
  const { t: o } = di();
  return /* @__PURE__ */ y.jsx(Sd, { text: t, onCopy: () => {
    We.success(o("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ y.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ y.jsx("span", { ...a, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ y.jsx("span", { className: `text-primary ${n}`, children: t }) }),
    /* @__PURE__ */ y.jsx(
      fd,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${r}`,
        size: e
      }
    )
  ] }) });
}
const nf = hd(
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
), Wt = p.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...a }, o) => {
    const s = r ? ed : "button";
    return /* @__PURE__ */ y.jsx(
      s,
      {
        className: re(nf({ variant: t, size: n, className: e })),
        ref: o,
        ...a
      }
    );
  }
);
Wt.displayName = "Button";
const na = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ y.jsx(
    "input",
    {
      type: t,
      className: re(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
na.displayName = "Input";
function rf() {
  const [e, t] = p.useState("/imgs/logos/logo.svg");
  return {
    logoPath: e
  };
}
function af({
  size: e = 32,
  className: t = ""
}) {
  const [n, r] = p.useState("");
  return p.useEffect(() => {
    const {
      username: a
    } = $e.all();
    if (a) {
      const o = a.length > 0 ? a[0] : "";
      r(o);
    }
  }, []), /* @__PURE__ */ y.jsx(
    "div",
    {
      className: re(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${e}px] h-[${e}px]`,
        t
      ),
      children: /* @__PURE__ */ y.jsx("div", { className: re(
        // 'flex items-center justify-center',
      ), children: n })
    }
  );
}
function hi({
  size: e = 32,
  className: t,
  type: n = "spin",
  fullscreen: r = !1
}) {
  rf();
  const [a, o] = p.useState(!1);
  p.useEffect(() => (o(!0), () => o(!1)), []);
  const i = n === "breathe" ? /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ y.jsx(af, { className: re(
      "animate-[breathe_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    ) }),
    /* @__PURE__ */ y.jsx("style", { children: `
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
  ] }) : /* @__PURE__ */ y.jsx("div", { className: re(
    "text-brand-foreground",
    t
  ), children: /* @__PURE__ */ y.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid",
      width: e,
      height: e,
      className: "shape-rendering-auto block",
      children: /* @__PURE__ */ y.jsx("g", { children: /* @__PURE__ */ y.jsx(
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
          children: /* @__PURE__ */ y.jsx(
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
  return r && a ? ci.createPortal(
    /* @__PURE__ */ y.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: i }),
    document.body
  ) : i;
}
const Pc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
    "textarea",
    {
      className: re(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Pc.displayName = "Textarea";
var Rc = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(Rc || {}), ha = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(ha || {});
class pi {
  constructor(t) {
    ve(this, "config");
    if (this.constructor === pi)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
class of extends pi {
  constructor() {
    super({
      serviceType: ha.WEB3AUTH_WITH_MPC
    });
    ve(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: n
  }) {
    const { data: r } = await Le.post("/keymanagement/signup", {
      username: n
    }), { address: a, displayName: o } = r;
    $e.saveAuthDataByKey("address", a), $e.saveAuthDataByKey("username", n), o ? $e.saveAuthDataByKey("displayName", o) : $e.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: n }) {
    const { data: r } = await Le.post("/keymanagement/signin", {
      username: n
    }), { address: a, displayName: o } = r;
    $e.saveAuthDataByKey("address", a), $e.saveAuthDataByKey("username", n), o ? $e.saveAuthDataByKey("displayName", o) : $e.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: n,
    amount: r,
    token: a,
    note: o,
    transactionType: s
  }) {
    const { data: {
      success: l,
      needOtp: i,
      hash: c,
      message: u,
      transactionId: d,
      relayerTransactionId: f,
      // not used
      transactionPayload: g,
      userEmail: v,
      toEmail: m
    } } = await Le.post("/transaction/sign", {
      from: $e.all().address,
      to: n,
      amount: r,
      token: a,
      note: o,
      transactionType: s
    });
    return {
      success: l,
      needOtp: i,
      hash: c,
      message: u,
      transactionId: d,
      relayerTransactionId: f
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
      transactionPayload: s,
      userEmail: l,
      toEmail: i,
      note: c,
      transactionType: u
    } } = await Le.post("/transaction/verify-to-sign", {
      transactionId: n,
      OTP: r
    });
    return {
      success: !0,
      hash: o,
      token: a
    };
  }
  async waitForTransactionReceipt(n, r) {
    return await Ee.getToken(r).publicClient.waitForTransactionReceipt({
      hash: n
    });
  }
  async test() {
    await Le.post("/keymanagement/test-mpc");
  }
}
class sf {
  static getService(t) {
    switch (t) {
      case ha.WEB3AUTH_WITH_MPC:
        return new of();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const cf = ha.WEB3AUTH_WITH_MPC, Wi = sf.getService(cf), lf = nd, uf = rd, df = p.forwardRef(({ className: e, inset: t, children: n, ...r }, a) => /* @__PURE__ */ y.jsxs(
  lc,
  {
    ref: a,
    className: re(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ y.jsx(pd, { className: "ml-auto h-4 w-4" })
    ]
  }
));
df.displayName = lc.displayName;
const ff = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  uc,
  {
    ref: n,
    className: re(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
ff.displayName = uc.displayName;
const Mc = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ y.jsx(td, { children: /* @__PURE__ */ y.jsx(
  dc,
  {
    ref: r,
    sideOffset: t,
    className: re(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
Mc.displayName = dc.displayName;
const Oc = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ y.jsx(
  fc,
  {
    ref: r,
    className: re(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Oc.displayName = fc.displayName;
const hf = p.forwardRef(({ className: e, children: t, checked: n, ...r }, a) => /* @__PURE__ */ y.jsxs(
  hc,
  {
    ref: a,
    className: re(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(pc, { children: /* @__PURE__ */ y.jsx(md, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
hf.displayName = hc.displayName;
const pf = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y.jsxs(
  mc,
  {
    ref: r,
    className: re(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(pc, { children: /* @__PURE__ */ y.jsx(gd, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
pf.displayName = mc.displayName;
const mf = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ y.jsx(
  gc,
  {
    ref: r,
    className: re(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
mf.displayName = gc.displayName;
const gf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  vc,
  {
    ref: n,
    className: re("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
gf.displayName = vc.displayName;
function Gi(e, t) {
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
var Ic = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
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
      var s = "";
      for (var l in o)
        t.call(o, l) && o[l] && (s = a(s, l));
      return s;
    }
    function a(o, s) {
      return s ? o ? o + " " + s : o + s : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Ic);
var vf = Ic.exports;
const tt = /* @__PURE__ */ Cc(vf);
var Ja = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function yf() {
  if (Ki) return le;
  Ki = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), i = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var A = h.$$typeof;
      switch (A) {
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
                case s:
                case i:
                case f:
                case d:
                case o:
                  return h;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  return le.ContextConsumer = s, le.ContextProvider = o, le.Element = e, le.ForwardRef = i, le.Fragment = n, le.Lazy = f, le.Memo = d, le.Portal = t, le.Profiler = a, le.StrictMode = r, le.Suspense = c, le.SuspenseList = u, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(h) {
    return m(h) === s;
  }, le.isContextProvider = function(h) {
    return m(h) === o;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, le.isForwardRef = function(h) {
    return m(h) === i;
  }, le.isFragment = function(h) {
    return m(h) === n;
  }, le.isLazy = function(h) {
    return m(h) === f;
  }, le.isMemo = function(h) {
    return m(h) === d;
  }, le.isPortal = function(h) {
    return m(h) === t;
  }, le.isProfiler = function(h) {
    return m(h) === a;
  }, le.isStrictMode = function(h) {
    return m(h) === r;
  }, le.isSuspense = function(h) {
    return m(h) === c;
  }, le.isSuspenseList = function(h) {
    return m(h) === u;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === a || h === r || h === c || h === u || h === g || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === o || h.$$typeof === s || h.$$typeof === i || h.$$typeof === v || h.getModuleId !== void 0);
  }, le.typeOf = m, le;
}
var ue = {}, Qi;
function bf() {
  return Qi || (Qi = 1, Q.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), i = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = !1, m = !1, h = !1, A = !1, E = !1, b;
    b = Symbol.for("react.module.reference");
    function k(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === n || V === a || E || V === r || V === c || V === u || A || V === g || v || m || h || typeof V == "object" && V !== null && (V.$$typeof === f || V.$$typeof === d || V.$$typeof === o || V.$$typeof === s || V.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === b || V.getModuleId !== void 0));
    }
    function x(V) {
      if (typeof V == "object" && V !== null) {
        var De = V.$$typeof;
        switch (De) {
          case e:
            var fe = V.type;
            switch (fe) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return fe;
              default:
                var Oe = fe && fe.$$typeof;
                switch (Oe) {
                  case l:
                  case s:
                  case i:
                  case f:
                  case d:
                  case o:
                    return Oe;
                  default:
                    return De;
                }
            }
          case t:
            return De;
        }
      }
    }
    var w = s, S = o, T = e, P = i, L = n, _ = f, B = d, O = t, I = a, $ = r, R = c, N = u, M = !1, j = !1;
    function D(V) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(V) {
      return j || (j = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(V) {
      return x(V) === s;
    }
    function H(V) {
      return x(V) === o;
    }
    function G(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function K(V) {
      return x(V) === i;
    }
    function te(V) {
      return x(V) === n;
    }
    function Z(V) {
      return x(V) === f;
    }
    function ke(V) {
      return x(V) === d;
    }
    function be(V) {
      return x(V) === t;
    }
    function ye(V) {
      return x(V) === a;
    }
    function Ke(V) {
      return x(V) === r;
    }
    function Ne(V) {
      return x(V) === c;
    }
    function xe(V) {
      return x(V) === u;
    }
    ue.ContextConsumer = w, ue.ContextProvider = S, ue.Element = T, ue.ForwardRef = P, ue.Fragment = L, ue.Lazy = _, ue.Memo = B, ue.Portal = O, ue.Profiler = I, ue.StrictMode = $, ue.Suspense = R, ue.SuspenseList = N, ue.isAsyncMode = D, ue.isConcurrentMode = F, ue.isContextConsumer = z, ue.isContextProvider = H, ue.isElement = G, ue.isForwardRef = K, ue.isFragment = te, ue.isLazy = Z, ue.isMemo = ke, ue.isPortal = be, ue.isProfiler = ye, ue.isStrictMode = Ke, ue.isSuspense = Ne, ue.isSuspenseList = xe, ue.isValidElementType = k, ue.typeOf = x;
  }()), ue;
}
Q.env.NODE_ENV === "production" ? Ja.exports = yf() : Ja.exports = bf();
var Vr = Ja.exports, eo = {}, mi = [], xf = function(t) {
  mi.push(t);
};
function gi(e, t) {
  if (Q.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = mi.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Cf(e, t) {
  if (Q.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = mi.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function _c() {
  eo = {};
}
function jc(e, t, n) {
  !t && !eo[n] && (e(!1, n), eo[n] = !0);
}
function Xt(e, t) {
  jc(gi, e, t);
}
function Sf(e, t) {
  jc(Cf, e, t);
}
Xt.preMessage = xf;
Xt.resetWarned = _c;
Xt.noteOnce = Sf;
function qi(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ef(e) {
  return e && me(e) === "object" && qi(e.nativeElement) ? e.nativeElement : qi(e) ? e : null;
}
function wf(e) {
  var t = Ef(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = cr.findDOMNode) === null || n === void 0 ? void 0 : n.call(cr, e);
  }
  return null;
}
function vi(e, t, n) {
  var r = p.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Lc = function(t, n) {
  typeof t == "function" ? t(n) : me(t) === "object" && t && "current" in t && (t.current = n);
}, Tf = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(s) {
      Lc(s, o);
    });
  };
}, iy = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return vi(function() {
    return Tf.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(s, l) {
      return s !== o[l];
    });
  });
}, Af = function(t) {
  var n, r, a = Vr.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== Vr.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Vr.ForwardRef);
};
function Xi(e) {
  return /* @__PURE__ */ p.isValidElement(e) && !Vr.isFragment(e);
}
Number(p.version.split(".")[0]) >= 19;
function Et(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Yi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ld(r.key), r);
  }
}
function wt(e, t, n) {
  return t && Yi(e.prototype, t), n && Yi(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function to(e, t) {
  return to = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, to(e, t);
}
function pa(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && to(e, t);
}
function ra(e) {
  return ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ra(e);
}
function Fc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fc = function() {
    return !!e;
  })();
}
function un(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kf(e, t) {
  if (t && (me(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return un(e);
}
function ma(e) {
  var t = Fc();
  return function() {
    var n, r = ra(e);
    if (t) {
      var a = ra(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return kf(this, n);
  };
}
function no(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Nf(e) {
  if (Array.isArray(e)) return no(e);
}
function Dc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yi(e, t) {
  if (e) {
    if (typeof e == "string") return no(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? no(e, t) : void 0;
  }
}
function Pf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xe(e) {
  return Nf(e) || Dc(e) || yi(e) || Pf();
}
var Bc = function(t) {
  return +setTimeout(t, 16);
}, $c = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Bc = function(t) {
  return window.requestAnimationFrame(t);
}, $c = function(t) {
  return window.cancelAnimationFrame(t);
});
var Zi = 0, ga = /* @__PURE__ */ new Map();
function Hc(e) {
  ga.delete(e);
}
var aa = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Zi += 1;
  var r = Zi;
  function a(o) {
    if (o === 0)
      Hc(r), t();
    else {
      var s = Bc(function() {
        a(o - 1);
      });
      ga.set(r, s);
    }
  }
  return a(n), r;
};
aa.cancel = function(e) {
  var t = ga.get(e);
  return Hc(e), $c(t);
};
Q.env.NODE_ENV !== "production" && (aa.ids = function() {
  return ga;
});
function Uc(e) {
  if (Array.isArray(e)) return e;
}
function Rf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, o, s, l = [], i = !0, c = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        i = !1;
      } else for (; !(i = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); i = !0) ;
    } catch (u) {
      c = !0, a = u;
    } finally {
      try {
        if (!i && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function zc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Uc(e) || Rf(e, t) || yi(e, t) || zc();
}
function lr(e) {
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
function Mt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Mf(e, t) {
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
var Ji = "data-rc-order", es = "data-rc-priority", Of = "rc-util-key", ro = /* @__PURE__ */ new Map();
function Vc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Of;
}
function va(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function If(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function bi(e) {
  return Array.from((ro.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Wc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Mt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, s = If(r), l = s === "prependQueue", i = document.createElement("style");
  i.setAttribute(Ji, s), l && o && i.setAttribute(es, "".concat(o)), n != null && n.nonce && (i.nonce = n == null ? void 0 : n.nonce), i.innerHTML = e;
  var c = va(t), u = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || bi(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Ji)))
          return !1;
        var g = Number(f.getAttribute(es) || 0);
        return o >= g;
      });
      if (d.length)
        return c.insertBefore(i, d[d.length - 1].nextSibling), i;
    }
    c.insertBefore(i, u);
  } else
    c.appendChild(i);
  return i;
}
function Gc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = va(t);
  return (t.styles || bi(n)).find(function(r) {
    return r.getAttribute(Vc(t)) === e;
  });
}
function Kc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Gc(e, t);
  if (n) {
    var r = va(t);
    r.removeChild(n);
  }
}
function _f(e, t) {
  var n = ro.get(e);
  if (!n || !Mf(document, n)) {
    var r = Wc("", t), a = r.parentNode;
    ro.set(e, a), e.removeChild(r);
  }
}
function dn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = va(n), a = bi(r), o = U(U({}, n), {}, {
    styles: a
  });
  _f(r, o);
  var s = Gc(t, o);
  if (s) {
    var l, i;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && s.nonce !== ((i = o.csp) === null || i === void 0 ? void 0 : i.nonce)) {
      var c;
      s.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return s.innerHTML !== e && (s.innerHTML = e), s;
  }
  var u = Wc(e, o);
  return u.setAttribute(Vc(o), t), u;
}
function jf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, s) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, i = r.has(o);
    if (Xt(!i, "Warning: There may be circular references"), i)
      return !1;
    if (o === s)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(o);
    var c = l + 1;
    if (Array.isArray(o)) {
      if (!Array.isArray(s) || o.length !== s.length)
        return !1;
      for (var u = 0; u < o.length; u++)
        if (!a(o[u], s[u], c))
          return !1;
      return !0;
    }
    if (o && s && me(o) === "object" && me(s) === "object") {
      var d = Object.keys(o);
      return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
        return a(o[f], s[f], c);
      });
    }
    return !1;
  }
  return a(e, t);
}
var Lf = "%";
function ao(e) {
  return e.join(Lf);
}
var Ff = /* @__PURE__ */ function() {
  function e(t) {
    Et(this, e), J(this, "instanceId", void 0), J(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return wt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(ao(n));
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
      return this.opUpdate(ao(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), $n = "data-token-hash", ht = "data-css-hash", Df = "data-cache-path", Ut = "__cssinjs_instance__";
function Bf() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ht, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Ut] = a[Ut] || e, a[Ut] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ht, "]"))).forEach(function(a) {
      var o = a.getAttribute(ht);
      if (r[o]) {
        if (a[Ut] === e) {
          var s;
          (s = a.parentNode) === null || s === void 0 || s.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new Ff(e);
}
var ya = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Bf(),
  defaultCache: !0
});
function $f(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var xi = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), J(this, "cache", void 0), J(this, "keys", void 0), J(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return wt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!s)
          s = void 0;
        else {
          var i;
          s = (i = s) === null || i === void 0 || (i = i.map) === null || i === void 0 ? void 0 : i.get(l);
        }
      }), (r = s) !== null && r !== void 0 && r.value && o && (s.value[1] = this.cacheCallTimes++), (a = s) === null || a === void 0 ? void 0 : a.value;
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
          }, [this.keys[0], this.cacheCallTimes]), s = Y(o, 1), l = s[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var i = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          i.set(c, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var d = i.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : i.set(c, {
            map: /* @__PURE__ */ new Map()
          }), i = i.get(c).map;
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
      var s = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), s;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !$f(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
J(xi, "MAX_CACHE_SIZE", 20);
J(xi, "MAX_CACHE_OFFSET", 5);
var ts = 0, Qc = /* @__PURE__ */ function() {
  function e(t) {
    Et(this, e), J(this, "derivatives", void 0), J(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = ts, t.length === 0 && gi(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), ts += 1;
  }
  return wt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), _a = new xi();
function oo(e) {
  var t = Array.isArray(e) ? e : [e];
  return _a.has(t) || _a.set(t, new Qc(t)), _a.get(t);
}
var Hf = /* @__PURE__ */ new WeakMap(), ja = {};
function Uf(e, t) {
  for (var n = Hf, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(ja) || n.set(ja, e()), n.get(ja);
}
var ns = /* @__PURE__ */ new WeakMap();
function ir(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = ns.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof Qc ? n += a.id : a && me(a) === "object" ? n += ir(a, t) : n += a;
  }), t && (n = lr(n)), ns.set(e, n)), n;
}
function rs(e, t) {
  return lr("".concat(t, "_").concat(ir(e, !0)));
}
var io = Mt();
function Gt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function oa(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = U(U({}, r), {}, J(J({}, $n, t), ht, n)), s = Object.keys(o).map(function(l) {
    var i = o[l];
    return i ? "".concat(l, '="').concat(i, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(s, ">").concat(e, "</style>");
}
var Wr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, zf = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Y(a, 2), s = o[0], l = o[1];
    return "".concat(s, ":").concat(l, ";");
  }).join(""), "}") : "";
}, qc = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(s) {
    var l, i, c = Y(s, 2), u = c[0], d = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (i = r.ignore) !== null && i !== void 0 && i[u])) {
      var f, g = Wr(u, r == null ? void 0 : r.prefix);
      a[g] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(g, ")");
    }
  }), [o, zf(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, as = Q.env.NODE_ENV !== "test" && Mt() ? p.useLayoutEffect : p.useEffect, Xc = function(t, n) {
  var r = p.useRef(!0);
  as(function() {
    return t(r.current);
  }, n), as(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, sy = function(t, n) {
  Xc(function(r) {
    if (!r)
      return t();
  }, n);
}, Vf = U({}, li), os = Vf.useInsertionEffect, Wf = function(t, n, r) {
  p.useMemo(t, r), Xc(function() {
    return n(!0);
  }, r);
}, Gf = os ? function(e, t, n) {
  return os(function() {
    return e(), t();
  }, n);
} : Wf, Kf = U({}, li), Qf = Kf.useInsertionEffect, qf = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      Q.env.NODE_ENV !== "production" && gi(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, Xf = function() {
  return function(t) {
    t();
  };
}, Yf = typeof Qf < "u" ? qf : Xf;
function Zf() {
  return !1;
}
var so = !1;
function Jf() {
  return so;
}
const eh = Q.env.NODE_ENV === "production" ? Zf : Jf;
if (Q.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var La = window;
  if (typeof La.webpackHotUpdate == "function") {
    var th = La.webpackHotUpdate;
    La.webpackHotUpdate = function() {
      return so = !0, setTimeout(function() {
        so = !1;
      }, 0), th.apply(void 0, arguments);
    };
  }
}
function Ci(e, t, n, r, a) {
  var o = p.useContext(ya), s = o.cache, l = [e].concat(Xe(t)), i = ao(l), c = Yf([i]), u = eh(), d = function(m) {
    s.opUpdate(i, function(h) {
      var A = h || [void 0, void 0], E = Y(A, 2), b = E[0], k = b === void 0 ? 0 : b, x = E[1], w = x;
      Q.env.NODE_ENV !== "production" && x && u && (r == null || r(w, u), w = null);
      var S = w || n(), T = [k, S];
      return m ? m(T) : T;
    });
  };
  p.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [i]
    /* eslint-enable */
  );
  var f = s.opGet(i);
  Q.env.NODE_ENV !== "production" && !f && (d(), f = s.opGet(i));
  var g = f[1];
  return Gf(function() {
    a == null || a(g);
  }, function(v) {
    return d(function(m) {
      var h = Y(m, 2), A = h[0], E = h[1];
      return v && A === 0 && (a == null || a(g)), [A + 1, E];
    }), function() {
      s.opUpdate(i, function(m) {
        var h = m || [], A = Y(h, 2), E = A[0], b = E === void 0 ? 0 : E, k = A[1], x = b - 1;
        return x === 0 ? (c(function() {
          (v || !s.opGet(i)) && (r == null || r(k, !1));
        }), null) : [b - 1, k];
      });
    };
  }, [i]), g;
}
var nh = {}, rh = Q.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Zt = /* @__PURE__ */ new Map();
function ah(e) {
  Zt.set(e, (Zt.get(e) || 0) + 1);
}
function oh(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat($n, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Ut] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var ih = 0;
function sh(e, t) {
  Zt.set(e, (Zt.get(e) || 0) - 1);
  var n = Array.from(Zt.keys()), r = n.filter(function(a) {
    var o = Zt.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > ih && r.forEach(function(a) {
    oh(a, t), Zt.delete(a);
  });
}
var ch = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), s = U(U({}, o), n);
  return a && (s = a(s)), s;
}, Yc = "token";
function lh(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = p.useContext(ya), a = r.cache.instanceId, o = r.container, s = n.salt, l = s === void 0 ? "" : s, i = n.override, c = i === void 0 ? nh : i, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, g = Uf(function() {
    return Object.assign.apply(Object, [{}].concat(Xe(t)));
  }, t), v = ir(g), m = ir(c), h = f ? ir(f) : "", A = Ci(Yc, [l, e.id, v, m, h], function() {
    var E, b = d ? d(g, c, e) : ch(g, c, e, u), k = U({}, b), x = "";
    if (f) {
      var w = qc(b, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), S = Y(w, 2);
      b = S[0], x = S[1];
    }
    var T = rs(b, l);
    b._tokenKey = T, k._tokenKey = rs(k, l);
    var P = (E = f == null ? void 0 : f.key) !== null && E !== void 0 ? E : T;
    b._themeKey = P, ah(P);
    var L = "".concat(rh, "-").concat(lr(T));
    return b._hashId = L, [b, L, k, x, (f == null ? void 0 : f.key) || ""];
  }, function(E) {
    sh(E[0]._themeKey, a);
  }, function(E) {
    var b = Y(E, 4), k = b[0], x = b[3];
    if (f && x) {
      var w = dn(x, lr("css-variables-".concat(k._themeKey)), {
        mark: ht,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      w[Ut] = a, w.setAttribute($n, k._themeKey);
    }
  });
  return A;
}
var uh = function(t, n, r) {
  var a = Y(t, 5), o = a[2], s = a[3], l = a[4], i = r || {}, c = i.plain;
  if (!s)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = oa(s, l, u, f, c);
  return [d, u, g];
}, dh = {
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
}, Zc = "comm", Jc = "rule", el = "decl", fh = "@import", hh = "@keyframes", ph = "@layer", tl = Math.abs, Si = String.fromCharCode;
function nl(e) {
  return e.trim();
}
function Gr(e, t, n) {
  return e.replace(t, n);
}
function mh(e, t, n) {
  return e.indexOf(t, n);
}
function ur(e, t) {
  return e.charCodeAt(t) | 0;
}
function Hn(e, t, n) {
  return e.slice(t, n);
}
function yt(e) {
  return e.length;
}
function gh(e) {
  return e.length;
}
function Or(e, t) {
  return t.push(e), e;
}
var ba = 1, Un = 1, rl = 0, st = 0, Ae = 0, Gn = "";
function Ei(e, t, n, r, a, o, s, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: ba, column: Un, length: s, return: "", siblings: l };
}
function vh() {
  return Ae;
}
function yh() {
  return Ae = st > 0 ? ur(Gn, --st) : 0, Un--, Ae === 10 && (Un = 1, ba--), Ae;
}
function pt() {
  return Ae = st < rl ? ur(Gn, st++) : 0, Un++, Ae === 10 && (Un = 1, ba++), Ae;
}
function zt() {
  return ur(Gn, st);
}
function Kr() {
  return st;
}
function xa(e, t) {
  return Hn(Gn, e, t);
}
function dr(e) {
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
function bh(e) {
  return ba = Un = 1, rl = yt(Gn = e), st = 0, [];
}
function xh(e) {
  return Gn = "", e;
}
function Fa(e) {
  return nl(xa(st - 1, co(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ch(e) {
  for (; (Ae = zt()) && Ae < 33; )
    pt();
  return dr(e) > 2 || dr(Ae) > 3 ? "" : " ";
}
function Sh(e, t) {
  for (; --t && pt() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return xa(e, Kr() + (t < 6 && zt() == 32 && pt() == 32));
}
function co(e) {
  for (; pt(); )
    switch (Ae) {
      case e:
        return st;
      case 34:
      case 39:
        e !== 34 && e !== 39 && co(Ae);
        break;
      case 40:
        e === 41 && co(e);
        break;
      case 92:
        pt();
        break;
    }
  return st;
}
function Eh(e, t) {
  for (; pt() && e + Ae !== 57; )
    if (e + Ae === 84 && zt() === 47)
      break;
  return "/*" + xa(t, st - 1) + "*" + Si(e === 47 ? e : pt());
}
function wh(e) {
  for (; !dr(zt()); )
    pt();
  return xa(e, st);
}
function Th(e) {
  return xh(Qr("", null, null, null, [""], e = bh(e), 0, [0], e));
}
function Qr(e, t, n, r, a, o, s, l, i) {
  for (var c = 0, u = 0, d = s, f = 0, g = 0, v = 0, m = 1, h = 1, A = 1, E = 0, b = "", k = a, x = o, w = r, S = b; h; )
    switch (v = E, E = pt()) {
      case 40:
        if (v != 108 && ur(S, d - 1) == 58) {
          mh(S += Gr(Fa(E), "&", "&\f"), "&\f", tl(c ? l[c - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Fa(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Ch(v);
        break;
      case 92:
        S += Sh(Kr() - 1, 7);
        continue;
      case 47:
        switch (zt()) {
          case 42:
          case 47:
            Or(Ah(Eh(pt(), Kr()), t, n, i), i), (dr(v || 1) == 5 || dr(zt() || 1) == 5) && yt(S) && Hn(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      case 123 * m:
        l[c++] = yt(S) * A;
      case 125 * m:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            A == -1 && (S = Gr(S, /\f/g, "")), g > 0 && (yt(S) - d || m === 0 && v === 47) && Or(g > 32 ? ss(S + ";", r, n, d - 1, i) : ss(Gr(S, " ", "") + ";", r, n, d - 2, i), i);
            break;
          case 59:
            S += ";";
          default:
            if (Or(w = is(S, t, n, c, u, a, l, b, k = [], x = [], d, o), o), E === 123)
              if (u === 0)
                Qr(S, t, w, w, k, o, d, l, x);
              else
                switch (f === 99 && ur(S, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qr(e, w, w, r && Or(is(e, w, w, 0, 0, a, l, b, a, k = [], d, x), x), a, x, d, l, r ? k : x);
                    break;
                  default:
                    Qr(S, w, w, w, [""], x, 0, l, x);
                }
        }
        c = u = g = 0, m = A = 1, b = S = "", d = s;
        break;
      case 58:
        d = 1 + yt(S), g = v;
      default:
        if (m < 1) {
          if (E == 123)
            --m;
          else if (E == 125 && m++ == 0 && yh() == 125)
            continue;
        }
        switch (S += Si(E), E * m) {
          case 38:
            A = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            l[c++] = (yt(S) - 1) * A, A = 1;
            break;
          case 64:
            zt() === 45 && (S += Fa(pt())), f = zt(), u = d = yt(b = S += wh(Kr())), E++;
            break;
          case 45:
            v === 45 && yt(S) == 2 && (m = 0);
        }
    }
  return o;
}
function is(e, t, n, r, a, o, s, l, i, c, u, d) {
  for (var f = a - 1, g = a === 0 ? o : [""], v = gh(g), m = 0, h = 0, A = 0; m < r; ++m)
    for (var E = 0, b = Hn(e, f + 1, f = tl(h = s[m])), k = e; E < v; ++E)
      (k = nl(h > 0 ? g[E] + " " + b : Gr(b, /&\f/g, g[E]))) && (i[A++] = k);
  return Ei(e, t, n, a === 0 ? Jc : l, i, c, u, d);
}
function Ah(e, t, n, r) {
  return Ei(e, t, n, Zc, Si(vh()), Hn(e, 2, -2), 0, r);
}
function ss(e, t, n, r, a) {
  return Ei(e, t, n, el, Hn(e, 0, r), Hn(e, r + 1, -1), r, a);
}
function lo(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function kh(e, t, n, r) {
  switch (e.type) {
    case ph:
      if (e.children.length) break;
    case fh:
    case el:
      return e.return = e.return || e.value;
    case Zc:
      return "";
    case hh:
      return e.return = e.value + "{" + lo(e.children, r) + "}";
    case Jc:
      if (!yt(e.value = e.props.join(","))) return "";
  }
  return yt(n = lo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function al(e, t) {
  var n = t.path, r = t.parentSelectors;
  Xt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Nh = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && al("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Ph = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && al("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, cs = "data-ant-cssinjs-cache-path", ol = "_FILE_STYLE__", fn, il = !0;
function Rh() {
  if (!fn && (fn = {}, Mt())) {
    var e = document.createElement("div");
    e.className = cs, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), s = Y(o, 2), l = s[0], i = s[1];
      fn[l] = i;
    });
    var n = document.querySelector("style[".concat(cs, "]"));
    if (n) {
      var r;
      il = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Mh(e) {
  return Rh(), !!fn[e];
}
function Oh(e) {
  var t = fn[e], n = null;
  if (t && Mt())
    if (il)
      n = ol;
    else {
      var r = document.querySelector("style[".concat(ht, '="').concat(fn[e], '"]'));
      r ? n = r.innerHTML : delete fn[e];
    }
  return [n, t];
}
var sl = "_skip_check_", cl = "_multi_value_";
function qr(e) {
  var t = lo(Th(e), kh);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Ih(e) {
  return me(e) === "object" && e && (sl in e || cl in e);
}
function ls(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(s) {
    var l, i = s.trim().split(/\s+/), c = i[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(Xe(i.slice(1))).join(" ");
  });
  return o.join(",");
}
var _h = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, s = r.parentSelectors, l = n.hashId, i = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, g = n.linters, v = g === void 0 ? [] : g, m = "", h = {};
  function A(k) {
    var x = k.getName(l);
    if (!h[x]) {
      var w = e(k.style, n, {
        root: !1,
        parentSelectors: s
      }), S = Y(w, 1), T = S[0];
      h[x] = "@keyframes ".concat(k.getName(l)).concat(T);
    }
  }
  function E(k) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return k.forEach(function(w) {
      Array.isArray(w) ? E(w, x) : w && x.push(w);
    }), x;
  }
  var b = E(Array.isArray(t) ? t : [t]);
  return b.forEach(function(k) {
    var x = typeof k == "string" && !a ? {} : k;
    if (typeof x == "string")
      m += "".concat(x, `
`);
    else if (x._keyframe)
      A(x);
    else {
      var w = f.reduce(function(S, T) {
        var P;
        return (T == null || (P = T.visit) === null || P === void 0 ? void 0 : P.call(T, S)) || S;
      }, x);
      Object.keys(w).forEach(function(S) {
        var T = w[S];
        if (me(T) === "object" && T && (S !== "animationName" || !T._keyframe) && !Ih(T)) {
          var P = !1, L = S.trim(), _ = !1;
          (a || o) && l ? L.startsWith("@") ? P = !0 : L === "&" ? L = ls("", l, u) : L = ls(S, l, u) : a && !l && (L === "&" || L === "") && (L = "", _ = !0);
          var B = e(T, n, {
            root: _,
            injectHash: P,
            parentSelectors: [].concat(Xe(s), [L])
          }), O = Y(B, 2), I = O[0], $ = O[1];
          h = U(U({}, h), $), m += "".concat(L).concat(I);
        } else {
          let M = function(j, D) {
            Q.env.NODE_ENV !== "production" && (me(T) !== "object" || !(T != null && T[sl])) && [Nh, Ph].concat(Xe(v)).forEach(function(H) {
              return H(j, D, {
                path: c,
                hashId: l,
                parentSelectors: s
              });
            });
            var F = j.replace(/[A-Z]/g, function(H) {
              return "-".concat(H.toLowerCase());
            }), z = D;
            !dh[j] && typeof z == "number" && z !== 0 && (z = "".concat(z, "px")), j === "animationName" && D !== null && D !== void 0 && D._keyframe && (A(D), z = D.getName(l)), m += "".concat(F, ":").concat(z, ";");
          };
          var R, N = (R = T == null ? void 0 : T.value) !== null && R !== void 0 ? R : T;
          me(T) === "object" && T !== null && T !== void 0 && T[cl] && Array.isArray(N) ? N.forEach(function(j) {
            M(S, j);
          }) : M(S, N);
        }
      });
    }
  }), a ? i && (m = "@layer ".concat(i.name, " {").concat(m, "}"), i.dependencies && (h["@layer ".concat(i.name)] = i.dependencies.map(function(k) {
    return "@layer ".concat(k, ", ").concat(i.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, h];
};
function ll(e, t) {
  return lr("".concat(e.join("%")).concat(t));
}
function jh() {
  return null;
}
var ul = "style";
function uo(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, s = e.nonce, l = e.clientOnly, i = e.order, c = i === void 0 ? 0 : i, u = p.useContext(ya), d = u.autoClear, f = u.mock, g = u.defaultCache, v = u.hashPriority, m = u.container, h = u.ssrInline, A = u.transformers, E = u.linters, b = u.cache, k = u.layer, x = n._tokenKey, w = [x];
  k && w.push("layer"), w.push.apply(w, Xe(r));
  var S = io;
  Q.env.NODE_ENV !== "production" && f !== void 0 && (S = f === "client");
  var T = Ci(
    ul,
    w,
    // Create cache if needed
    function() {
      var O = w.join("|");
      if (Mh(O)) {
        var I = Oh(O), $ = Y(I, 2), R = $[0], N = $[1];
        if (R)
          return [R, x, N, {}, l, c];
      }
      var M = t(), j = _h(M, {
        hashId: a,
        hashPriority: v,
        layer: k ? o : void 0,
        path: r.join("-"),
        transformers: A,
        linters: E
      }), D = Y(j, 2), F = D[0], z = D[1], H = qr(F), G = ll(w, H);
      return [H, x, G, z, l, c];
    },
    // Remove cache if no need
    function(O, I) {
      var $ = Y(O, 3), R = $[2];
      (I || d) && io && Kc(R, {
        mark: ht
      });
    },
    // Effect: Inject style here
    function(O) {
      var I = Y(O, 4), $ = I[0];
      I[1];
      var R = I[2], N = I[3];
      if (S && $ !== ol) {
        var M = {
          mark: ht,
          prepend: k ? !1 : "queue",
          attachTo: m,
          priority: c
        }, j = typeof s == "function" ? s() : s;
        j && (M.csp = {
          nonce: j
        });
        var D = [], F = [];
        Object.keys(N).forEach(function(H) {
          H.startsWith("@layer") ? D.push(H) : F.push(H);
        }), D.forEach(function(H) {
          dn(qr(N[H]), "_layer-".concat(H), U(U({}, M), {}, {
            prepend: !0
          }));
        });
        var z = dn($, R, M);
        z[Ut] = b.instanceId, z.setAttribute($n, x), Q.env.NODE_ENV !== "production" && z.setAttribute(Df, w.join("|")), F.forEach(function(H) {
          dn(qr(N[H]), "_effect-".concat(H), M);
        });
      }
    }
  ), P = Y(T, 3), L = P[0], _ = P[1], B = P[2];
  return function(O) {
    var I;
    return !h || S || !g ? I = /* @__PURE__ */ p.createElement(jh, null) : I = /* @__PURE__ */ p.createElement("style", it({}, J(J({}, $n, _), ht, B), {
      dangerouslySetInnerHTML: {
        __html: L
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, I, O);
  };
}
var Lh = function(t, n, r) {
  var a = Y(t, 6), o = a[0], s = a[1], l = a[2], i = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var g = o, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = oa(o, s, l, v, f), i && Object.keys(i).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var h = qr(i[m]), A = oa(h, s, "_effect-".concat(m), v, f);
      m.startsWith("@layer") ? g = A + g : g += A;
    }
  }), [u, l, g];
}, dl = "cssVar", Fh = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, s = t.ignore, l = t.token, i = t.scope, c = i === void 0 ? "" : i, u = p.useContext(ya), d = u.cache.instanceId, f = u.container, g = l._tokenKey, v = [].concat(Xe(t.path), [r, c, g]), m = Ci(dl, v, function() {
    var h = n(), A = qc(h, r, {
      prefix: a,
      unitless: o,
      ignore: s,
      scope: c
    }), E = Y(A, 2), b = E[0], k = E[1], x = ll(v, k);
    return [b, k, x, r];
  }, function(h) {
    var A = Y(h, 3), E = A[2];
    io && Kc(E, {
      mark: ht
    });
  }, function(h) {
    var A = Y(h, 3), E = A[1], b = A[2];
    if (E) {
      var k = dn(E, b, {
        mark: ht,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      k[Ut] = d, k.setAttribute($n, r);
    }
  });
  return m;
}, Dh = function(t, n, r) {
  var a = Y(t, 4), o = a[1], s = a[2], l = a[3], i = r || {}, c = i.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = oa(o, l, s, d, c);
  return [u, s, f];
};
J(J(J({}, ul, Lh), Yc, uh), dl, Dh);
var rr = /* @__PURE__ */ function() {
  function e(t, n) {
    Et(this, e), J(this, "name", void 0), J(this, "style", void 0), J(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return wt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function xn(e) {
  return e.notSplit = !0, e;
}
xn(["borderTop", "borderBottom"]), xn(["borderTop"]), xn(["borderBottom"]), xn(["borderLeft", "borderRight"]), xn(["borderLeft"]), xn(["borderRight"]);
var wi = /* @__PURE__ */ p.createContext({});
function Bh(e) {
  return Uc(e) || Dc(e) || yi(e) || zc();
}
function fo(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function fl(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Bh(t), o = a[0], s = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Xe(e) : l = U({}, e), r && n === void 0 && s.length === 1 ? delete l[o][s[0]] : l[o] = fl(l[o], s, n, r), l;
}
function Da(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !fo(e, t.slice(0, -1)) ? e : fl(e, t, n, r);
}
function $h(e) {
  return me(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function us(e) {
  return Array.isArray(e) ? [] : {};
}
var Hh = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Uh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = us(t[0]);
  return t.forEach(function(a) {
    function o(s, l) {
      var i = new Set(l), c = fo(a, s), u = Array.isArray(c);
      if (u || $h(c)) {
        if (!i.has(c)) {
          i.add(c);
          var d = fo(r, s);
          u ? r = Da(r, s, []) : (!d || me(d) !== "object") && (r = Da(r, s, us(c))), Hh(c).forEach(function(f) {
            o([].concat(Xe(s), [f]), i);
          });
        }
      } else
        r = Da(r, s, c);
    }
    o([]);
  }), r;
}
function hl() {
}
let kt = null;
function zh() {
  kt = null, _c();
}
let Ti = hl;
Q.env.NODE_ENV !== "production" && (Ti = (e, t, n) => {
  Xt(e, `[antd: ${t}] ${n}`), Q.env.NODE_ENV === "test" && zh();
});
const pl = /* @__PURE__ */ p.createContext({}), Kn = Q.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(pl), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const s = kt;
        kt || (kt = {}), kt[e] = kt[e] || [], kt[e].includes(o || "") || kt[e].push(o || ""), s || console.warn("[antd] There exists deprecated usage in your code:", kt);
      } else
        Q.env.NODE_ENV !== "production" && Ti(r, e, o);
  };
  return n.deprecated = (r, a, o, s) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${s ? ` ${s}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = hl, e;
}, Ca = Ti, Vh = /* @__PURE__ */ p.createContext(void 0);
var Wh = {
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
}, Gh = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Kh = U(U({}, Gh), {}, {
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
const ml = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ds = {
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
  }, Kh),
  timePickerLocale: Object.assign({}, ml)
}, Ze = "${label} is not a valid ${type}", Sa = {
  locale: "en",
  Pagination: Wh,
  DatePicker: ds,
  TimePicker: ml,
  Calendar: ds,
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
        string: Ze,
        method: Ze,
        array: Ze,
        object: Ze,
        number: Ze,
        date: Ze,
        boolean: Ze,
        integer: Ze,
        float: Ze,
        regexp: Ze,
        email: Ze,
        url: Ze,
        hex: Ze
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
Object.assign({}, Sa.Modal);
let Xr = [];
const fs = () => Xr.reduce((e, t) => Object.assign(Object.assign({}, e), t), Sa.Modal);
function Qh(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Xr.push(t), fs(), () => {
      Xr = Xr.filter((n) => n !== t), fs();
    };
  }
  Object.assign({}, Sa.Modal);
}
const gl = /* @__PURE__ */ p.createContext(void 0), vl = "internalMark", yl = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (Q.env.NODE_ENV !== "production") {
    const o = Kn("LocaleProvider");
    Q.env.NODE_ENV !== "production" && o(r === vl, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => Qh(t == null ? void 0 : t.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(gl.Provider, {
    value: a
  }, n);
};
Q.env.NODE_ENV !== "production" && (yl.displayName = "LocaleProvider");
function Fe(e, t) {
  qh(e) && (e = "100%");
  var n = Xh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ir(e) {
  return Math.min(1, Math.max(0, e));
}
function qh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Xh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function bl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function _r(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function en(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Yh(e, t, n) {
  return {
    r: Fe(e, 255) * 255,
    g: Fe(t, 255) * 255,
    b: Fe(n, 255) * 255
  };
}
function hs(e, t, n) {
  e = Fe(e, 255), t = Fe(t, 255), n = Fe(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, s = 0, l = (r + a) / 2;
  if (r === a)
    s = 0, o = 0;
  else {
    var i = r - a;
    switch (s = l > 0.5 ? i / (2 - r - a) : i / (r + a), r) {
      case e:
        o = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / i + 2;
        break;
      case n:
        o = (e - t) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, l };
}
function Ba(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Zh(e, t, n) {
  var r, a, o;
  if (e = Fe(e, 360), t = Fe(t, 100), n = Fe(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    r = Ba(l, s, e + 1 / 3), a = Ba(l, s, e), o = Ba(l, s, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function ho(e, t, n) {
  e = Fe(e, 255), t = Fe(t, 255), n = Fe(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, s = r, l = r - a, i = r === 0 ? 0 : l / r;
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
  return { h: o, s: i, v: s };
}
function Jh(e, t, n) {
  e = Fe(e, 360) * 6, t = Fe(t, 100), n = Fe(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), s = n * (1 - a * t), l = n * (1 - (1 - a) * t), i = r % 6, c = [n, s, o, o, l, n][i], u = [l, n, n, s, o, o][i], d = [o, o, l, n, n, s][i];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function po(e, t, n, r) {
  var a = [
    en(Math.round(e).toString(16)),
    en(Math.round(t).toString(16)),
    en(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function ep(e, t, n, r, a) {
  var o = [
    en(Math.round(e).toString(16)),
    en(Math.round(t).toString(16)),
    en(Math.round(n).toString(16)),
    en(tp(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function tp(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ps(e) {
  return Je(e) / 255;
}
function Je(e) {
  return parseInt(e, 16);
}
function np(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var mo = {
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
function Cn(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, s = !1, l = !1;
  return typeof e == "string" && (e = op(e)), typeof e == "object" && (At(e.r) && At(e.g) && At(e.b) ? (t = Yh(e.r, e.g, e.b), s = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : At(e.h) && At(e.s) && At(e.v) ? (r = _r(e.s), a = _r(e.v), t = Jh(e.h, r, a), s = !0, l = "hsv") : At(e.h) && At(e.s) && At(e.l) && (r = _r(e.s), o = _r(e.l), t = Zh(e.h, r, o), s = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = bl(n), {
    ok: s,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var rp = "[-\\+]?\\d+%?", ap = "[-\\+]?\\d*\\.\\d+%?", Vt = "(?:".concat(ap, ")|(?:").concat(rp, ")"), $a = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), Ha = "[\\s|\\(]+(".concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")[,|\\s]+(").concat(Vt, ")\\s*\\)?"), ct = {
  CSS_UNIT: new RegExp(Vt),
  rgb: new RegExp("rgb" + $a),
  rgba: new RegExp("rgba" + Ha),
  hsl: new RegExp("hsl" + $a),
  hsla: new RegExp("hsla" + Ha),
  hsv: new RegExp("hsv" + $a),
  hsva: new RegExp("hsva" + Ha),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function op(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (mo[e])
    e = mo[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = ct.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = ct.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = ct.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = ct.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = ct.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = ct.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = ct.hex8.exec(e), n ? {
    r: Je(n[1]),
    g: Je(n[2]),
    b: Je(n[3]),
    a: ps(n[4]),
    format: t ? "name" : "hex8"
  } : (n = ct.hex6.exec(e), n ? {
    r: Je(n[1]),
    g: Je(n[2]),
    b: Je(n[3]),
    format: t ? "name" : "hex"
  } : (n = ct.hex4.exec(e), n ? {
    r: Je(n[1] + n[1]),
    g: Je(n[2] + n[2]),
    b: Je(n[3] + n[3]),
    a: ps(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = ct.hex3.exec(e), n ? {
    r: Je(n[1] + n[1]),
    g: Je(n[2] + n[2]),
    b: Je(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function At(e) {
  return !!ct.CSS_UNIT.exec(String(e));
}
var Ge = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = np(t)), this.originalInput = t;
      var a = Cn(t);
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
      var t = this.toRgb(), n, r, a, o = t.r / 255, s = t.g / 255, l = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = bl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ho(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ho(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = hs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = hs(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), po(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ep(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Fe(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Fe(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + po(this.r, this.g, this.b, !1), n = 0, r = Object.entries(mo); n < r.length; n++) {
        var a = r[n], o = a[0], s = a[1];
        if (t === s)
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
      return n.l += t / 100, n.l = Ir(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Ir(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Ir(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Ir(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, s = {
        r: (a.r - r.r) * o + r.r,
        g: (a.g - r.g) * o + r.g,
        b: (a.b - r.b) * o + r.b,
        a: (a.a - r.a) * o + r.a
      };
      return new e(s);
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
      for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, s = [], l = 1 / t; t--; )
        s.push(new e({ h: r, s: a, v: o })), o = (o + l) % 1;
      return s;
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
      for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, s = 1; s < t; s++)
        a.push(new e({ h: (r + s * o) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), jr = 2, ms = 0.16, ip = 0.05, sp = 0.05, cp = 0.15, xl = 5, Cl = 4, lp = [{
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
function gs(e) {
  var t = e.r, n = e.g, r = e.b, a = ho(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Lr(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(po(t, n, r, !1));
}
function up(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function vs(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - jr * t : Math.round(e.h) + jr * t : r = n ? Math.round(e.h) + jr * t : Math.round(e.h) - jr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ys(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - ms * t : t === Cl ? r = e.s + ms : r = e.s + ip * t, r > 1 && (r = 1), n && t === xl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function bs(e, t, n) {
  var r;
  return n ? r = e.v + sp * t : r = e.v - cp * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function fr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Cn(e), a = xl; a > 0; a -= 1) {
    var o = gs(r), s = Lr(Cn({
      h: vs(o, a, !0),
      s: ys(o, a, !0),
      v: bs(o, a, !0)
    }));
    n.push(s);
  }
  n.push(Lr(r));
  for (var l = 1; l <= Cl; l += 1) {
    var i = gs(r), c = Lr(Cn({
      h: vs(i, l),
      s: ys(i, l),
      v: bs(i, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? lp.map(function(u) {
    var d = u.index, f = u.opacity, g = Lr(up(Cn(t.backgroundColor || "#141414"), Cn(n[d]), f * 100));
    return g;
  }) : n;
}
var Ua = {
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
}, go = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
go.primary = go[5];
var vo = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
vo.primary = vo[5];
var yo = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
yo.primary = yo[5];
var bo = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
bo.primary = bo[5];
var xo = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
xo.primary = xo[5];
var Co = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Co.primary = Co[5];
var So = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
So.primary = So[5];
var Eo = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Eo.primary = Eo[5];
var ia = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ia.primary = ia[5];
var wo = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
wo.primary = wo[5];
var To = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
To.primary = To[5];
var Ao = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ao.primary = Ao[5];
var ko = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ko.primary = ko[5];
var za = {
  red: go,
  volcano: vo,
  orange: yo,
  gold: bo,
  yellow: xo,
  lime: Co,
  green: So,
  cyan: Eo,
  blue: ia,
  geekblue: wo,
  purple: To,
  magenta: Ao,
  grey: ko
};
const Sl = {
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
}, hr = Object.assign(Object.assign({}, Sl), {
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
function dp(e, t) {
  let {
    generateColorPalettes: n,
    generateNeutralColorPalettes: r
  } = t;
  const {
    colorSuccess: a,
    colorWarning: o,
    colorError: s,
    colorInfo: l,
    colorPrimary: i,
    colorBgBase: c,
    colorTextBase: u
  } = e, d = n(i), f = n(a), g = n(o), v = n(s), m = n(l), h = r(c, u), A = e.colorLink || e.colorInfo, E = n(A), b = new Ge(v[1]).mix(new Ge(v[3]), 50).toHexString();
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
    colorErrorBg: v[1],
    colorErrorBgHover: v[2],
    colorErrorBgFilledHover: b,
    colorErrorBgActive: v[3],
    colorErrorBorder: v[3],
    colorErrorBorderHover: v[4],
    colorErrorHover: v[5],
    colorError: v[6],
    colorErrorActive: v[7],
    colorErrorTextHover: v[8],
    colorErrorText: v[9],
    colorErrorTextActive: v[10],
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
    colorLinkHover: E[4],
    colorLink: E[6],
    colorLinkActive: E[7],
    colorBgMask: new Ge("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const fp = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function hp(e) {
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
  }, fp(r));
}
const pp = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function mp(e) {
  return (e + 8) / e;
}
function gp(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), s = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(s / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: mp(n)
  }));
}
const vp = (e) => {
  const t = gp(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], s = n[2], l = r[1], i = r[0], c = r[2];
  return {
    fontSizeSM: o,
    fontSize: a,
    fontSizeLG: s,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: i,
    fontHeight: Math.round(l * a),
    fontHeightLG: Math.round(c * s),
    fontHeightSM: Math.round(i * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function yp(e) {
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
const nt = (e, t) => new Ge(e).setAlpha(t).toRgbString(), nr = (e, t) => new Ge(e).darken(t).toHexString(), bp = (e) => {
  const t = fr(e);
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
}, xp = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: nt(r, 0.88),
    colorTextSecondary: nt(r, 0.65),
    colorTextTertiary: nt(r, 0.45),
    colorTextQuaternary: nt(r, 0.25),
    colorFill: nt(r, 0.15),
    colorFillSecondary: nt(r, 0.06),
    colorFillTertiary: nt(r, 0.04),
    colorFillQuaternary: nt(r, 0.02),
    colorBgSolid: nt(r, 1),
    colorBgSolidHover: nt(r, 0.75),
    colorBgSolidActive: nt(r, 0.95),
    colorBgLayout: nr(n, 4),
    colorBgContainer: nr(n, 0),
    colorBgElevated: nr(n, 0),
    colorBgSpotlight: nt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: nr(n, 15),
    colorBorderSecondary: nr(n, 6)
  };
};
function Cp(e) {
  Ua.pink = Ua.magenta, za.pink = za.magenta;
  const t = Object.keys(Sl).map((n) => {
    const r = e[n] === Ua[n] ? za[n] : fr(e[n]);
    return new Array(10).fill(1).reduce((a, o, s) => (a[`${n}-${s + 1}`] = r[s], a[`${n}${s + 1}`] = r[s], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), dp(e, {
    generateColorPalettes: bp,
    generateNeutralColorPalettes: xp
  })), vp(e.fontSize)), yp(e)), pp(e)), hp(e));
}
const El = oo(Cp), No = {
  token: hr,
  override: {
    override: hr
  },
  hashed: !0
}, wl = /* @__PURE__ */ q.createContext(No), Po = "ant", Ai = "anticon", cy = ["outlined", "borderless", "filled"], Sp = (e, t) => t || (e ? `${Po}-${e}` : Po), Kt = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Sp,
  iconPrefixCls: Ai
}), Ep = `-ant-${Date.now()}-${Math.random()}`;
function wp(e, t) {
  const n = {}, r = (s, l) => {
    let i = s.clone();
    return i = (l == null ? void 0 : l(i)) || i, i.toRgbString();
  }, a = (s, l) => {
    const i = new Ge(s), c = fr(i.toRgbString());
    n[`${l}-color`] = r(i), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = i.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const s = new Ge(t.primaryColor), l = fr(s.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(s, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(s, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(s, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(s, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const i = new Ge(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(i, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((s) => `--${e}-${s}: ${n[s]};`).join(`
`)}
  }
  `.trim();
}
function Tp(e, t) {
  const n = wp(e, t);
  Mt() ? dn(n, `${Ep}-dynamic-theme`) : Q.env.NODE_ENV !== "production" && Ca(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Ro = /* @__PURE__ */ p.createContext(!1), Ap = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = p.useContext(Ro);
  return /* @__PURE__ */ p.createElement(Ro.Provider, {
    value: n ?? r
  }, t);
}, pr = /* @__PURE__ */ p.createContext(void 0), kp = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = p.useContext(pr);
  return /* @__PURE__ */ p.createElement(pr.Provider, {
    value: n || r
  }, t);
};
function Np() {
  const e = p.useContext(Ro), t = p.useContext(pr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Tl = /* @__PURE__ */ wt(function e() {
  Et(this, e);
}), Al = "CALC_UNIT", Pp = new RegExp(Al, "g");
function Va(e) {
  return typeof e == "number" ? "".concat(e).concat(Al) : e;
}
var Rp = /* @__PURE__ */ function(e) {
  pa(n, e);
  var t = ma(n);
  function n(r, a) {
    var o;
    Et(this, n), o = t.call(this), J(un(o), "result", ""), J(un(o), "unitlessCssVar", void 0), J(un(o), "lowPriority", void 0);
    var s = me(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : s === "number" ? o.result = Va(r) : s === "string" && (o.result = r), o;
  }
  return wt(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Va(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Va(a))), this.lowPriority = !0, this;
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
      var o = this, s = a || {}, l = s.unit, i = !0;
      return typeof l == "boolean" ? i = l : Array.from(this.unitlessCssVar).some(function(c) {
        return o.result.includes(c);
      }) && (i = !1), this.result = this.result.replace(Pp, i ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Tl), Mp = /* @__PURE__ */ function(e) {
  pa(n, e);
  var t = ma(n);
  function n(r) {
    var a;
    return Et(this, n), a = t.call(this), J(un(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return wt(n, [{
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
}(Tl), Op = function(t, n) {
  var r = t === "css" ? Rp : Mp;
  return function(a) {
    return new r(a, n);
  };
}, xs = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Mo(e) {
  var t = p.useRef();
  t.current = e;
  var n = p.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Oo(e) {
  var t = p.useRef(!1), n = p.useState(e), r = Y(n, 2), a = r[0], o = r[1];
  p.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function s(l, i) {
    i && t.current || o(l);
  }
  return [a, s];
}
function Cs(e, t, n, r) {
  var a = U({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(l) {
      var i = Y(l, 2), c = i[0], u = i[1];
      if (Q.env.NODE_ENV !== "production" && Xt(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var s = U(U({}, n), a);
  return Object.keys(s).forEach(function(l) {
    s[l] === t[l] && delete s[l];
  }), s;
}
var kl = Q.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Io = !0;
function ki() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!kl)
    return Object.assign.apply(Object, [{}].concat(t));
  Io = !1;
  var r = {};
  return t.forEach(function(a) {
    if (me(a) === "object") {
      var o = Object.keys(a);
      o.forEach(function(s) {
        Object.defineProperty(r, s, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return a[s];
          }
        });
      });
    }
  }), Io = !0, r;
}
var Ss = {};
function Ip() {
}
var _p = function(t) {
  var n, r = t, a = Ip;
  return kl && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(s, l) {
      if (Io) {
        var i;
        (i = n) === null || i === void 0 || i.add(l);
      }
      return s[l];
    }
  }), a = function(s, l) {
    var i;
    Ss[s] = {
      global: Array.from(n),
      component: U(U({}, (i = Ss[s]) === null || i === void 0 ? void 0 : i.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function Es(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(ki(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function jp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return Gt(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return Gt(o);
      }).join(","), ")");
    }
  };
}
var Lp = 1e3 * 60 * 10, Fp = /* @__PURE__ */ function() {
  function e() {
    Et(this, e), J(this, "map", /* @__PURE__ */ new Map()), J(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), J(this, "nextID", 0), J(this, "lastAccessBeat", /* @__PURE__ */ new Map()), J(this, "accessBeat", 0);
  }
  return wt(e, [{
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
        return o && me(o) === "object" ? "obj_".concat(r.getObjectID(o)) : "".concat(me(o), "_").concat(o);
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
          r - a > Lp && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), ws = new Fp();
function Dp(e, t) {
  return q.useMemo(function() {
    var n = ws.get(t);
    if (n)
      return n;
    var r = e();
    return ws.set(t, r), r;
  }, t);
}
var Bp = function() {
  return {};
};
function $p(e) {
  var t = e.useCSP, n = t === void 0 ? Bp : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, s = e.getCommonStyle, l = e.getCompUnitless;
  function i(f, g, v, m) {
    var h = Array.isArray(f) ? f[0] : f;
    function A(T) {
      return "".concat(String(h)).concat(T.slice(0, 1).toUpperCase()).concat(T.slice(1));
    }
    var E = (m == null ? void 0 : m.unitless) || {}, b = typeof l == "function" ? l(f) : {}, k = U(U({}, b), {}, J({}, A("zIndexPopup"), !0));
    Object.keys(E).forEach(function(T) {
      k[A(T)] = E[T];
    });
    var x = U(U({}, m), {}, {
      unitless: k,
      prefixToken: A
    }), w = u(f, g, v, x), S = c(h, v, x);
    return function(T) {
      var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T, L = w(T, P), _ = Y(L, 2), B = _[1], O = S(P), I = Y(O, 2), $ = I[0], R = I[1];
      return [$, B, R];
    };
  }
  function c(f, g, v) {
    var m = v.unitless, h = v.injectStyle, A = h === void 0 ? !0 : h, E = v.prefixToken, b = v.ignore, k = function(S) {
      var T = S.rootCls, P = S.cssVar, L = P === void 0 ? {} : P, _ = r(), B = _.realToken;
      return Fh({
        path: [f],
        prefix: L.prefix,
        key: L.key,
        unitless: m,
        ignore: b,
        token: B,
        scope: T
      }, function() {
        var O = Es(f, B, g), I = Cs(f, B, O, {
          deprecatedTokens: v == null ? void 0 : v.deprecatedTokens
        });
        return Object.keys(O).forEach(function($) {
          I[E($)] = I[$], delete I[$];
        }), I;
      }), null;
    }, x = function(S) {
      var T = r(), P = T.cssVar;
      return [function(L) {
        return A && P ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(k, {
          rootCls: S,
          cssVar: P,
          component: f
        }), L) : L;
      }, P == null ? void 0 : P.key];
    };
    return x;
  }
  function u(f, g, v) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], A = Y(h, 1), E = A[0], b = h.join("-"), k = e.layer || {
      name: "antd"
    };
    return function(x) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, S = r(), T = S.theme, P = S.realToken, L = S.hashId, _ = S.token, B = S.cssVar, O = a(), I = O.rootPrefixCls, $ = O.iconPrefixCls, R = n(), N = B ? "css" : "js", M = Dp(function() {
        var G = /* @__PURE__ */ new Set();
        return B && Object.keys(m.unitless || {}).forEach(function(K) {
          G.add(Wr(K, B.prefix)), G.add(Wr(K, xs(E, B.prefix)));
        }), Op(N, G);
      }, [N, E, B == null ? void 0 : B.prefix]), j = jp(N), D = j.max, F = j.min, z = {
        theme: T,
        token: _,
        hashId: L,
        nonce: function() {
          return R.nonce;
        },
        clientOnly: m.clientOnly,
        layer: k,
        // antd is always at top of styles
        order: m.order || -999
      };
      uo(U(U({}, z), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return typeof o == "function" ? o(_) : [];
      });
      var H = uo(U(U({}, z), {}, {
        path: [b, x, $]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var G = _p(_), K = G.token, te = G.flush, Z = Es(E, P, v), ke = ".".concat(x), be = Cs(E, P, Z, {
          deprecatedTokens: m.deprecatedTokens
        });
        B && Z && me(Z) === "object" && Object.keys(Z).forEach(function(xe) {
          Z[xe] = "var(".concat(Wr(xe, xs(E, B.prefix)), ")");
        });
        var ye = ki(K, {
          componentCls: ke,
          prefixCls: x,
          iconCls: ".".concat($),
          antCls: ".".concat(I),
          calc: M,
          // @ts-ignore
          max: D,
          // @ts-ignore
          min: F
        }, B ? Z : be), Ke = g(ye, {
          hashId: L,
          prefixCls: x,
          rootPrefixCls: I,
          iconPrefixCls: $
        });
        te(E, be);
        var Ne = typeof s == "function" ? s(ye, x, w, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Ne, Ke];
      });
      return [H, L];
    };
  }
  function d(f, g, v) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, g, v, U({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), A = function(b) {
      var k = b.prefixCls, x = b.rootCls, w = x === void 0 ? k : x;
      return h(k, w), null;
    };
    return Q.env.NODE_ENV !== "production" && (A.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), A;
  }
  return {
    genStyleHooks: i,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Hp = "5.21.6";
function Wa(e) {
  return e >= 0 && e <= 255;
}
function Fr(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Ge(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: s,
    g: l,
    b: i
  } = new Ge(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - s * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c), f = Math.round((a - i * (1 - c)) / c);
    if (Wa(u) && Wa(d) && Wa(f))
      return new Ge({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Ge({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var Up = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Nl(e) {
  const {
    override: t
  } = e, n = Up(e, ["override"]), r = Object.assign({}, t);
  Object.keys(hr).forEach((f) => {
    delete r[f];
  });
  const a = Object.assign(Object.assign({}, n), r), o = 480, s = 576, l = 768, i = 992, c = 1200, u = 1600;
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
    colorSplit: Fr(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Fr(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Fr(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Fr(a.colorPrimaryBg, a.colorBgContainer),
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
    screenXSMax: s - 1,
    screenSM: s,
    screenSMMin: s,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: i - 1,
    screenLG: i,
    screenLGMin: i,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ge("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ge("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ge("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Ts = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Pl = {
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
}, zp = {
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
}, Vp = {
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
}, Rl = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = Ts(t, ["override"]);
  let s = Object.assign(Object.assign({}, r), {
    override: a
  });
  return s = Nl(s), o && Object.entries(o).forEach((l) => {
    let [i, c] = l;
    const {
      theme: u
    } = c, d = Ts(c, ["theme"]);
    let f = d;
    u && (f = Rl(Object.assign(Object.assign({}, s), d), {
      override: d
    }, u)), s[i] = f;
  }), s;
};
function Qn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = q.useContext(wl), o = `${Hp}-${t || ""}`, s = n || El, [l, i, c] = lh(s, [hr, e], {
    salt: o,
    override: r,
    getComputedToken: Rl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Nl,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Pl,
      ignore: zp,
      preserve: Vp
    }
  });
  return [s, c, t ? i : "", l, a];
}
const ly = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Wp = function(e) {
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
}, Gp = () => ({
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
}), uy = () => ({
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
}), Kp = (e) => ({
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
}), Qp = (e, t, n, r) => {
  const a = `[class^="${t}"], [class*=" ${t}"]`, o = n ? `.${n}` : a, s = {
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
    [o]: Object.assign(Object.assign(Object.assign({}, l), s), {
      [a]: s
    })
  };
}, qp = (e) => ({
  outline: `${Gt(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Xp = (e) => ({
  "&:focus-visible": Object.assign({}, qp(e))
}), Ml = (e, t) => {
  const [n, r] = Qn();
  return uo({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Gp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: Yp,
  genComponentStyleHook: dy,
  genSubStyleComponent: Zp
} = $p({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = p.useContext(Kt);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Qn();
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
    } = p.useContext(Kt);
    return Ml(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Kp(e)
  }],
  getCommonStyle: Qp,
  getCompUnitless: () => Pl
}), Jp = Object.assign({}, li), {
  useId: As
} = Jp, em = () => "", tm = typeof As > "u" ? em : As;
function nm(e, t, n) {
  var r, a;
  const o = Kn("ConfigProvider"), s = e || {}, l = s.inherit === !1 || !t ? Object.assign(Object.assign({}, No), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : No.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, i = tm();
  if (Q.env.NODE_ENV !== "production") {
    const c = s.cssVar || l.cssVar, u = !!(typeof s.cssVar == "object" && (!((a = s.cssVar) === null || a === void 0) && a.key) || i);
    Q.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return vi(() => {
    var c, u;
    if (!e)
      return t;
    const d = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((v) => {
      d[v] = Object.assign(Object.assign({}, d[v]), e.components[v]);
    });
    const f = `css-var-${i.replace(/:/g, "")}`, g = ((c = s.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
      key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, l), s), {
      token: Object.assign(Object.assign({}, l.token), s.token),
      components: d,
      cssVar: g
    });
  }, [s, l], (c, u) => c.some((d, f) => {
    const g = u[f];
    return !jf(d, g, !0);
  }));
}
var rm = ["children"], Ol = /* @__PURE__ */ p.createContext({});
function am(e) {
  var t = e.children, n = hn(e, rm);
  return /* @__PURE__ */ p.createElement(Ol.Provider, {
    value: n
  }, t);
}
var om = /* @__PURE__ */ function(e) {
  pa(n, e);
  var t = ma(n);
  function n() {
    return Et(this, n), t.apply(this, arguments);
  }
  return wt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(p.Component);
function im(e) {
  var t = p.useReducer(function(l) {
    return l + 1;
  }, 0), n = Y(t, 2), r = n[1], a = p.useRef(e), o = Mo(function() {
    return a.current;
  }), s = Mo(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, s];
}
var It = "none", Dr = "appear", Br = "enter", $r = "leave", ks = "none", ut = "prepare", Sn = "start", En = "active", Ni = "end", Il = "prepared";
function Ns(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function sm(e, t) {
  var n = {
    animationend: Ns("Animation", "AnimationEnd"),
    transitionend: Ns("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var cm = sm(Mt(), typeof window < "u" ? window : {}), _l = {};
if (Mt()) {
  var lm = document.createElement("div");
  _l = lm.style;
}
var Hr = {};
function jl(e) {
  if (Hr[e])
    return Hr[e];
  var t = cm[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in _l)
        return Hr[e] = t[o], Hr[e];
    }
  return "";
}
var Ll = jl("animationend"), Fl = jl("transitionend"), Dl = !!(Ll && Fl), Ps = Ll || "animationend", Rs = Fl || "transitionend";
function Ms(e, t) {
  if (!e) return null;
  if (me(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const um = function(e) {
  var t = p.useRef();
  function n(a) {
    a && (a.removeEventListener(Rs, e), a.removeEventListener(Ps, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(Rs, e), a.addEventListener(Ps, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Bl = Mt() ? p.useLayoutEffect : p.useEffect;
const dm = function() {
  var e = p.useRef(null);
  function t() {
    aa.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = aa(function() {
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
var fm = [ut, Sn, En, Ni], hm = [ut, Il], $l = !1, pm = !0;
function Hl(e) {
  return e === En || e === Ni;
}
const mm = function(e, t, n) {
  var r = Oo(ks), a = Y(r, 2), o = a[0], s = a[1], l = dm(), i = Y(l, 2), c = i[0], u = i[1];
  function d() {
    s(ut, !0);
  }
  var f = t ? hm : fm;
  return Bl(function() {
    if (o !== ks && o !== Ni) {
      var g = f.indexOf(o), v = f[g + 1], m = n(o);
      m === $l ? s(v, !0) : v && c(function(h) {
        function A() {
          h.isCanceled() || s(v, !0);
        }
        m === !0 ? A() : Promise.resolve(m).then(A);
      });
    }
  }, [e, o]), p.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, o];
};
function gm(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, s = r.motionAppear, l = s === void 0 ? !0 : s, i = r.motionLeave, c = i === void 0 ? !0 : i, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, g = r.onEnterPrepare, v = r.onLeavePrepare, m = r.onAppearStart, h = r.onEnterStart, A = r.onLeaveStart, E = r.onAppearActive, b = r.onEnterActive, k = r.onLeaveActive, x = r.onAppearEnd, w = r.onEnterEnd, S = r.onLeaveEnd, T = r.onVisibleChanged, P = Oo(), L = Y(P, 2), _ = L[0], B = L[1], O = im(It), I = Y(O, 2), $ = I[0], R = I[1], N = Oo(null), M = Y(N, 2), j = M[0], D = M[1], F = $(), z = p.useRef(!1), H = p.useRef(null);
  function G() {
    return n();
  }
  var K = p.useRef(!1);
  function te() {
    R(It), D(null, !0);
  }
  var Z = Mo(function(ge) {
    var he = $();
    if (he !== It) {
      var Pe = G();
      if (!(ge && !ge.deadline && ge.target !== Pe)) {
        var He = K.current, Ue;
        he === Dr && He ? Ue = x == null ? void 0 : x(Pe, ge) : he === Br && He ? Ue = w == null ? void 0 : w(Pe, ge) : he === $r && He && (Ue = S == null ? void 0 : S(Pe, ge)), He && Ue !== !1 && te();
      }
    }
  }), ke = um(Z), be = Y(ke, 1), ye = be[0], Ke = function(he) {
    switch (he) {
      case Dr:
        return J(J(J({}, ut, f), Sn, m), En, E);
      case Br:
        return J(J(J({}, ut, g), Sn, h), En, b);
      case $r:
        return J(J(J({}, ut, v), Sn, A), En, k);
      default:
        return {};
    }
  }, Ne = p.useMemo(function() {
    return Ke(F);
  }, [F]), xe = mm(F, !e, function(ge) {
    if (ge === ut) {
      var he = Ne[ut];
      return he ? he(G()) : $l;
    }
    if (fe in Ne) {
      var Pe;
      D(((Pe = Ne[fe]) === null || Pe === void 0 ? void 0 : Pe.call(Ne, G(), null)) || null);
    }
    return fe === En && F !== It && (ye(G()), u > 0 && (clearTimeout(H.current), H.current = setTimeout(function() {
      Z({
        deadline: !0
      });
    }, u))), fe === Il && te(), pm;
  }), V = Y(xe, 2), De = V[0], fe = V[1], Oe = Hl(fe);
  K.current = Oe, Bl(function() {
    B(t);
    var ge = z.current;
    z.current = !0;
    var he;
    !ge && t && l && (he = Dr), ge && t && o && (he = Br), (ge && !t && c || !ge && d && !t && c) && (he = $r);
    var Pe = Ke(he);
    he && (e || Pe[ut]) ? (R(he), De()) : R(It);
  }, [t]), p.useEffect(function() {
    // Cancel appear
    (F === Dr && !l || // Cancel enter
    F === Br && !o || // Cancel leave
    F === $r && !c) && R(It);
  }, [l, o, c]), p.useEffect(function() {
    return function() {
      z.current = !1, clearTimeout(H.current);
    };
  }, []);
  var Qe = p.useRef(!1);
  p.useEffect(function() {
    _ && (Qe.current = !0), _ !== void 0 && F === It && ((Qe.current || _) && (T == null || T(_)), Qe.current = !0);
  }, [_, F]);
  var Me = j;
  return Ne[ut] && fe === Sn && (Me = U({
    transition: "none"
  }, Me)), [F, fe, Me, _ ?? t];
}
function vm(e) {
  var t = e;
  me(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var s = a.visible, l = s === void 0 ? !0 : s, i = a.removeOnLeave, c = i === void 0 ? !0 : i, u = a.forceRender, d = a.children, f = a.motionName, g = a.leavedClassName, v = a.eventProps, m = p.useContext(Ol), h = m.motion, A = n(a, h), E = p.useRef(), b = p.useRef();
    function k() {
      try {
        return E.current instanceof HTMLElement ? E.current : wf(b.current);
      } catch {
        return null;
      }
    }
    var x = gm(A, l, k, a), w = Y(x, 4), S = w[0], T = w[1], P = w[2], L = w[3], _ = p.useRef(L);
    L && (_.current = !0);
    var B = p.useCallback(function(j) {
      E.current = j, Lc(o, j);
    }, [o]), O, I = U(U({}, v), {}, {
      visible: l
    });
    if (!d)
      O = null;
    else if (S === It)
      L ? O = d(U({}, I), B) : !c && _.current && g ? O = d(U(U({}, I), {}, {
        className: g
      }), B) : u || !c && !g ? O = d(U(U({}, I), {}, {
        style: {
          display: "none"
        }
      }), B) : O = null;
    else {
      var $;
      T === ut ? $ = "prepare" : Hl(T) ? $ = "active" : T === Sn && ($ = "start");
      var R = Ms(f, "".concat(S, "-").concat($));
      O = d(U(U({}, I), {}, {
        className: tt(Ms(f, S), J(J({}, R, R && $), f, typeof f == "string")),
        style: P
      }), B);
    }
    if (/* @__PURE__ */ p.isValidElement(O) && Af(O)) {
      var N = O, M = N.ref;
      M || (O = /* @__PURE__ */ p.cloneElement(O, {
        ref: B
      }));
    }
    return /* @__PURE__ */ p.createElement(om, {
      ref: b
    }, O);
  });
  return r.displayName = "CSSMotion", r;
}
const ym = vm(Dl);
var _o = "add", jo = "keep", Lo = "remove", Ga = "removed";
function bm(e) {
  var t;
  return e && me(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, U(U({}, t), {}, {
    key: String(t.key)
  });
}
function Fo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(bm);
}
function xm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Fo(e), s = Fo(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = s[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(s.slice(r, d).map(function(g) {
          return U(U({}, g), {}, {
            status: _o
          });
        })), r = d), n.push(U(U({}, f), {}, {
          status: jo
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(U(U({}, c), {}, {
      status: Lo
    }));
  }), r < a && (n = n.concat(s.slice(r).map(function(c) {
    return U(U({}, c), {}, {
      status: _o
    });
  })));
  var l = {};
  n.forEach(function(c) {
    var u = c.key;
    l[u] = (l[u] || 0) + 1;
  });
  var i = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return i.forEach(function(c) {
    n = n.filter(function(u) {
      var d = u.key, f = u.status;
      return d !== c || f !== Lo;
    }), n.forEach(function(u) {
      u.key === c && (u.status = jo);
    });
  }), n;
}
var Cm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sm = ["status"], Em = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ym, n = /* @__PURE__ */ function(r) {
    pa(o, r);
    var a = ma(o);
    function o() {
      var s;
      Et(this, o);
      for (var l = arguments.length, i = new Array(l), c = 0; c < l; c++)
        i[c] = arguments[c];
      return s = a.call.apply(a, [this].concat(i)), J(un(s), "state", {
        keyEntities: []
      }), J(un(s), "removeKey", function(u) {
        s.setState(function(d) {
          var f = d.keyEntities.map(function(g) {
            return g.key !== u ? g : U(U({}, g), {}, {
              status: Ga
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = s.state.keyEntities, f = d.filter(function(g) {
            var v = g.status;
            return v !== Ga;
          }).length;
          f === 0 && s.props.onAllRemoved && s.props.onAllRemoved();
        });
      }), s;
    }
    return wt(o, [{
      key: "render",
      value: function() {
        var l = this, i = this.state.keyEntities, c = this.props, u = c.component, d = c.children, f = c.onVisibleChanged;
        c.onAllRemoved;
        var g = hn(c, Cm), v = u || p.Fragment, m = {};
        return Em.forEach(function(h) {
          m[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ p.createElement(v, g, i.map(function(h, A) {
          var E = h.status, b = hn(h, Sm), k = E === _o || E === jo;
          return /* @__PURE__ */ p.createElement(t, it({}, m, {
            key: b.key,
            visible: k,
            eventProps: b,
            onVisibleChanged: function(w) {
              f == null || f(w, {
                key: b.key
              }), w || l.removeKey(b.key);
            }
          }), function(x, w) {
            return d(U(U({}, x), {}, {
              index: A
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, i) {
        var c = l.keys, u = i.keyEntities, d = Fo(c), f = xm(u, d);
        return {
          keyEntities: f.filter(function(g) {
            var v = u.find(function(m) {
              var h = m.key;
              return g.key === h;
            });
            return !(v && v.status === Ga && g.status === Lo);
          })
        };
      }
    }]), o;
  }(p.Component);
  return J(n, "defaultProps", {
    component: "div"
  }), n;
}
const Tm = wm(Dl);
function Am(e) {
  const {
    children: t
  } = e, [, n] = Qn(), {
    motion: r
  } = n, a = p.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ p.createElement(am, {
    motion: r
  }, t) : t;
}
const Ul = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Kn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
Q.env.NODE_ENV !== "production" && (Ul.displayName = "PropWarning");
const km = Q.env.NODE_ENV !== "production" ? Ul : () => null;
var Nm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let Do = !1;
const Pm = Q.env.NODE_ENV !== "production" ? (e) => {
  Q.env.NODE_ENV !== "production" && Ca(!Do, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Rm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let sa, zl, Vl, Wl;
function Yr() {
  return sa || Po;
}
function Mm() {
  return zl || Ai;
}
function Om(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Im = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (sa = t), n !== void 0 && (zl = n), "holderRender" in e && (Wl = a), r && (Om(r) ? (Q.env.NODE_ENV !== "production" && Ca(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Tp(Yr(), r)) : Vl = r);
}, Gl = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Yr()}-${e}` : Yr()),
  getIconPrefixCls: Mm,
  getRootPrefixCls: () => sa || Yr(),
  getTheme: () => Vl,
  holderRender: Wl
}), _m = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    form: s,
    locale: l,
    componentSize: i,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: v,
    popupOverflow: m,
    legacyLocale: h,
    parentContext: A,
    iconPrefixCls: E,
    theme: b,
    componentDisabled: k,
    segmented: x,
    statistic: w,
    spin: S,
    calendar: T,
    carousel: P,
    cascader: L,
    collapse: _,
    typography: B,
    checkbox: O,
    descriptions: I,
    divider: $,
    drawer: R,
    skeleton: N,
    steps: M,
    image: j,
    layout: D,
    list: F,
    mentions: z,
    modal: H,
    progress: G,
    result: K,
    slider: te,
    breadcrumb: Z,
    menu: ke,
    pagination: be,
    input: ye,
    textArea: Ke,
    empty: Ne,
    badge: xe,
    radio: V,
    rate: De,
    switch: fe,
    transfer: Oe,
    avatar: Qe,
    message: Me,
    tag: ge,
    table: he,
    card: Pe,
    tabs: He,
    timeline: Ue,
    timePicker: Ye,
    upload: Ot,
    notification: vn,
    tree: se,
    colorPicker: pe,
    datePicker: Ta,
    rangePicker: kr,
    flex: Aa,
    wave: Xn,
    dropdown: Nr,
    warning: Yn,
    tour: ka,
    floatButtonGroup: Na,
    variant: Pa,
    inputNumber: Ra,
    treeSelect: ee
  } = e, ce = p.useCallback((Te, _e) => {
    const {
      prefixCls: gt
    } = e;
    if (_e)
      return _e;
    const vt = gt || A.getPrefixCls("");
    return Te ? `${vt}-${Te}` : vt;
  }, [A.getPrefixCls, e.prefixCls]), we = E || A.iconPrefixCls || Ai, mt = n || A.csp;
  Ml(we, mt);
  const Zn = nm(b, A.theme, {
    prefixCls: ce("")
  });
  Q.env.NODE_ENV !== "production" && (Do = Do || !!Zn);
  const Jn = {
    csp: mt,
    autoInsertSpaceInButton: r,
    alert: a,
    anchor: o,
    locale: l || h,
    direction: c,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: v ?? g,
    popupOverflow: m,
    getPrefixCls: ce,
    iconPrefixCls: we,
    theme: Zn,
    segmented: x,
    statistic: w,
    spin: S,
    calendar: T,
    carousel: P,
    cascader: L,
    collapse: _,
    typography: B,
    checkbox: O,
    descriptions: I,
    divider: $,
    drawer: R,
    skeleton: N,
    steps: M,
    image: j,
    input: ye,
    textArea: Ke,
    layout: D,
    list: F,
    mentions: z,
    modal: H,
    progress: G,
    result: K,
    slider: te,
    breadcrumb: Z,
    menu: ke,
    pagination: be,
    empty: Ne,
    badge: xe,
    radio: V,
    rate: De,
    switch: fe,
    transfer: Oe,
    avatar: Qe,
    message: Me,
    tag: ge,
    table: he,
    card: Pe,
    tabs: He,
    timeline: Ue,
    timePicker: Ye,
    upload: Ot,
    notification: vn,
    tree: se,
    colorPicker: pe,
    datePicker: Ta,
    rangePicker: kr,
    flex: Aa,
    wave: Xn,
    dropdown: Nr,
    warning: Yn,
    tour: ka,
    floatButtonGroup: Na,
    variant: Pa,
    inputNumber: Ra,
    treeSelect: ee
  };
  Q.env.NODE_ENV !== "production" && Kn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const yn = Object.assign({}, A);
  Object.keys(Jn).forEach((Te) => {
    Jn[Te] !== void 0 && (yn[Te] = Jn[Te]);
  }), Rm.forEach((Te) => {
    const _e = e[Te];
    _e && (yn[Te] = _e);
  }), typeof r < "u" && (yn.button = Object.assign({
    autoInsertSpace: r
  }, yn.button));
  const bn = vi(() => yn, yn, (Te, _e) => {
    const gt = Object.keys(Te), vt = Object.keys(_e);
    return gt.length !== vt.length || gt.some((Pr) => Te[Pr] !== _e[Pr]);
  }), Gu = p.useMemo(() => ({
    prefixCls: we,
    csp: mt
  }), [we, mt]);
  let Ie = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(km, {
    dropdownMatchSelectWidth: g
  }), t);
  const ji = p.useMemo(() => {
    var Te, _e, gt, vt;
    return Uh(((Te = Sa.Form) === null || Te === void 0 ? void 0 : Te.defaultValidateMessages) || {}, ((gt = (_e = bn.locale) === null || _e === void 0 ? void 0 : _e.Form) === null || gt === void 0 ? void 0 : gt.defaultValidateMessages) || {}, ((vt = bn.form) === null || vt === void 0 ? void 0 : vt.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
  }, [bn, s == null ? void 0 : s.validateMessages]);
  Object.keys(ji).length > 0 && (Ie = /* @__PURE__ */ p.createElement(Vh.Provider, {
    value: ji
  }, Ie)), l && (Ie = /* @__PURE__ */ p.createElement(yl, {
    locale: l,
    _ANT_MARK__: vl
  }, Ie)), (we || mt) && (Ie = /* @__PURE__ */ p.createElement(wi.Provider, {
    value: Gu
  }, Ie)), i && (Ie = /* @__PURE__ */ p.createElement(kp, {
    size: i
  }, Ie)), Ie = /* @__PURE__ */ p.createElement(Am, null, Ie);
  const Ku = p.useMemo(() => {
    const Te = Zn || {}, {
      algorithm: _e,
      token: gt,
      components: vt,
      cssVar: Pr
    } = Te, Qu = Nm(Te, ["algorithm", "token", "components", "cssVar"]), Li = _e && (!Array.isArray(_e) || _e.length > 0) ? oo(_e) : El, Ma = {};
    Object.entries(vt || {}).forEach((qu) => {
      let [Xu, Yu] = qu;
      const Tt = Object.assign({}, Yu);
      "algorithm" in Tt && (Tt.algorithm === !0 ? Tt.theme = Li : (Array.isArray(Tt.algorithm) || typeof Tt.algorithm == "function") && (Tt.theme = oo(Tt.algorithm)), delete Tt.algorithm), Ma[Xu] = Tt;
    });
    const Fi = Object.assign(Object.assign({}, hr), gt);
    return Object.assign(Object.assign({}, Qu), {
      theme: Li,
      token: Fi,
      components: Ma,
      override: Object.assign({
        override: Fi
      }, Ma),
      cssVar: Pr
    });
  }, [Zn]);
  return b && (Ie = /* @__PURE__ */ p.createElement(wl.Provider, {
    value: Ku
  }, Ie)), bn.warning && (Ie = /* @__PURE__ */ p.createElement(pl.Provider, {
    value: bn.warning
  }, Ie)), k !== void 0 && (Ie = /* @__PURE__ */ p.createElement(Ap, {
    disabled: k
  }, Ie)), /* @__PURE__ */ p.createElement(Kt.Provider, {
    value: bn
  }, Ie);
}, gn = (e) => {
  const t = p.useContext(Kt), n = p.useContext(gl);
  return /* @__PURE__ */ p.createElement(_m, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
gn.ConfigContext = Kt;
gn.SizeContext = pr;
gn.config = Im;
gn.useConfig = Np;
Object.defineProperty(gn, "SizeContext", {
  get: () => (Q.env.NODE_ENV !== "production" && Ca(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), pr)
});
Q.env.NODE_ENV !== "production" && (gn.displayName = "ConfigProvider");
var jm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Kl(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Lm(e) {
  return Kl(e) instanceof ShadowRoot;
}
function Fm(e) {
  return Lm(e) ? Kl(e) : null;
}
function Dm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Bm(e, t) {
  Xt(e, "[@ant-design/icons] ".concat(t));
}
function Os(e) {
  return me(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (me(e.icon) === "object" || typeof e.icon == "function");
}
function Is() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Dm(n)] = r;
    }
    return t;
  }, {});
}
function Bo(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, U(U({
    key: t
  }, Is(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Bo(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, U({
    key: t
  }, Is(e.attrs)), (e.children || []).map(function(r, a) {
    return Bo(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ql(e) {
  return fr(e)[0];
}
function ql(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var $m = `
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
`, Hm = function(t) {
  var n = p.useContext(wi), r = n.csp, a = n.prefixCls, o = $m;
  a && (o = o.replace(/anticon/g, a)), p.useEffect(function() {
    var s = t.current, l = Fm(s);
    dn(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, Um = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], sr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function zm(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  sr.primaryColor = t, sr.secondaryColor = n || Ql(t), sr.calculated = !!n;
}
function Vm() {
  return U({}, sr);
}
var qn = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, s = t.primaryColor, l = t.secondaryColor, i = hn(t, Um), c = p.useRef(), u = sr;
  if (s && (u = {
    primaryColor: s,
    secondaryColor: l || Ql(s)
  }), Hm(c), Bm(Os(n), "icon should be icon definiton, but got ".concat(n)), !Os(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = U(U({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Bo(d.icon, "svg-".concat(d.name), U(U({
    className: r,
    onClick: a,
    style: o,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, i), {}, {
    ref: c
  }));
};
qn.displayName = "IconReact";
qn.getTwoToneColors = Vm;
qn.setTwoToneColors = zm;
function Xl(e) {
  var t = ql(e), n = Y(t, 2), r = n[0], a = n[1];
  return qn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Wm() {
  var e = qn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Gm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Xl(ia.primary);
var Yt = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, s = e.tabIndex, l = e.onClick, i = e.twoToneColor, c = hn(e, Gm), u = p.useContext(wi), d = u.prefixCls, f = d === void 0 ? "anticon" : d, g = u.rootClassName, v = tt(g, f, J(J({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), m = s;
  m === void 0 && l && (m = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, A = ql(i), E = Y(A, 2), b = E[0], k = E[1];
  return /* @__PURE__ */ p.createElement("span", it({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: v
  }), /* @__PURE__ */ p.createElement(qn, {
    icon: r,
    primaryColor: b,
    secondaryColor: k,
    style: h
  }));
});
Yt.displayName = "AntdIcon";
Yt.getTwoToneColor = Wm;
Yt.setTwoToneColor = Xl;
var Km = function(t, n) {
  return /* @__PURE__ */ p.createElement(Yt, it({}, t, {
    ref: n,
    icon: jm
  }));
}, Yl = /* @__PURE__ */ p.forwardRef(Km);
Q.env.NODE_ENV !== "production" && (Yl.displayName = "CheckCircleFilled");
var Qm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, qm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Yt, it({}, t, {
    ref: n,
    icon: Qm
  }));
}, Zl = /* @__PURE__ */ p.forwardRef(qm);
Q.env.NODE_ENV !== "production" && (Zl.displayName = "CloseCircleFilled");
var Xm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Ym = function(t, n) {
  return /* @__PURE__ */ p.createElement(Yt, it({}, t, {
    ref: n,
    icon: Xm
  }));
}, Jl = /* @__PURE__ */ p.forwardRef(Ym);
Q.env.NODE_ENV !== "production" && (Jl.displayName = "CloseOutlined");
var Zm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Jm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Yt, it({}, t, {
    ref: n,
    icon: Zm
  }));
}, eu = /* @__PURE__ */ p.forwardRef(Jm);
Q.env.NODE_ENV !== "production" && (eu.displayName = "ExclamationCircleFilled");
var eg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, tg = function(t, n) {
  return /* @__PURE__ */ p.createElement(Yt, it({}, t, {
    ref: n,
    icon: eg
  }));
}, tu = /* @__PURE__ */ p.forwardRef(tg);
Q.env.NODE_ENV !== "production" && (tu.displayName = "InfoCircleFilled");
var ng = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, rg = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, ag = "".concat(ng, " ").concat(rg).split(/[\s\n]+/), og = "aria-", ig = "data-";
function _s(e, t) {
  return e.indexOf(t) === 0;
}
function sg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = U({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || _s(a, og)) || // Data
    n.data && _s(a, ig) || // Attr
    n.attr && ag.includes(a)) && (r[a] = e[a]);
  }), r;
}
const nu = (e) => {
  const [, , , , t] = Qn();
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
}, ru = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, a = e.className, o = e.duration, s = o === void 0 ? 4.5 : o, l = e.showProgress, i = e.pauseOnHover, c = i === void 0 ? !0 : i, u = e.eventKey, d = e.content, f = e.closable, g = e.closeIcon, v = g === void 0 ? "x" : g, m = e.props, h = e.onClick, A = e.onNoticeClose, E = e.times, b = e.hovering, k = p.useState(!1), x = Y(k, 2), w = x[0], S = x[1], T = p.useState(0), P = Y(T, 2), L = P[0], _ = P[1], B = p.useState(0), O = Y(B, 2), I = O[0], $ = O[1], R = b || w, N = s > 0 && l, M = function() {
    A(u);
  }, j = function(K) {
    (K.key === "Enter" || K.code === "Enter" || K.keyCode === X.ENTER) && M();
  };
  p.useEffect(function() {
    if (!R && s > 0) {
      var G = Date.now() - I, K = setTimeout(function() {
        M();
      }, s * 1e3 - I);
      return function() {
        c && clearTimeout(K), $(Date.now() - G);
      };
    }
  }, [s, R, E]), p.useEffect(function() {
    if (!R && N && (c || I === 0)) {
      var G = performance.now(), K, te = function Z() {
        cancelAnimationFrame(K), K = requestAnimationFrame(function(ke) {
          var be = ke + I - G, ye = Math.min(be / (s * 1e3), 1);
          _(ye * 100), ye < 1 && Z();
        });
      };
      return te(), function() {
        c && cancelAnimationFrame(K);
      };
    }
  }, [s, I, R, N, E]);
  var D = p.useMemo(function() {
    return me(f) === "object" && f !== null ? f : f ? {
      closeIcon: v
    } : {};
  }, [f, v]), F = sg(D, !0), z = 100 - (!L || L < 0 ? 0 : L > 100 ? 100 : L), H = "".concat(n, "-notice");
  return /* @__PURE__ */ p.createElement("div", it({}, m, {
    ref: t,
    className: tt(H, a, J({}, "".concat(H, "-closable"), f)),
    style: r,
    onMouseEnter: function(K) {
      var te;
      S(!0), m == null || (te = m.onMouseEnter) === null || te === void 0 || te.call(m, K);
    },
    onMouseLeave: function(K) {
      var te;
      S(!1), m == null || (te = m.onMouseLeave) === null || te === void 0 || te.call(m, K);
    },
    onClick: h
  }), /* @__PURE__ */ p.createElement("div", {
    className: "".concat(H, "-content")
  }, d), f && /* @__PURE__ */ p.createElement("a", it({
    tabIndex: 0,
    className: "".concat(H, "-close"),
    onKeyDown: j,
    "aria-label": "Close"
  }, F, {
    onClick: function(K) {
      K.preventDefault(), K.stopPropagation(), M();
    }
  }), D.closeIcon), N && /* @__PURE__ */ p.createElement("progress", {
    className: "".concat(H, "-progress"),
    max: "100",
    value: z
  }, z + "%"));
}), au = /* @__PURE__ */ q.createContext({}), cg = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ q.createElement(au.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, js = 8, Ls = 3, Fs = 16, lg = function(t) {
  var n = {
    offset: js,
    threshold: Ls,
    gap: Fs
  };
  if (t && me(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : js, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : Ls, n.gap = (o = t.gap) !== null && o !== void 0 ? o : Fs;
  }
  return [!!t, n];
}, ug = ["className", "style", "classNames", "styles"], ou = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, s = t.style, l = t.motion, i = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, d = p.useContext(au), f = d.classNames, g = p.useRef({}), v = p.useState(null), m = Y(v, 2), h = m[0], A = m[1], E = p.useState([]), b = Y(E, 2), k = b[0], x = b[1], w = n.map(function(R) {
    return {
      config: R,
      key: String(R.key)
    };
  }), S = lg(u), T = Y(S, 2), P = T[0], L = T[1], _ = L.offset, B = L.threshold, O = L.gap, I = P && (k.length > 0 || w.length <= B), $ = typeof l == "function" ? l(r) : l;
  return p.useEffect(function() {
    P && k.length > 1 && x(function(R) {
      return R.filter(function(N) {
        return w.some(function(M) {
          var j = M.key;
          return N === j;
        });
      });
    });
  }, [k, w, P]), p.useEffect(function() {
    var R;
    if (P && g.current[(R = w[w.length - 1]) === null || R === void 0 ? void 0 : R.key]) {
      var N;
      A(g.current[(N = w[w.length - 1]) === null || N === void 0 ? void 0 : N.key]);
    }
  }, [w, P]), /* @__PURE__ */ q.createElement(Tm, it({
    key: r,
    className: tt(a, "".concat(a, "-").concat(r), f == null ? void 0 : f.list, o, J(J({}, "".concat(a, "-stack"), !!P), "".concat(a, "-stack-expanded"), I)),
    style: s,
    keys: w,
    motionAppear: !0
  }, $, {
    onAllRemoved: function() {
      i(r);
    }
  }), function(R, N) {
    var M = R.config, j = R.className, D = R.style, F = R.index, z = M, H = z.key, G = z.times, K = String(H), te = M, Z = te.className, ke = te.style, be = te.classNames, ye = te.styles, Ke = hn(te, ug), Ne = w.findIndex(function(Ue) {
      return Ue.key === K;
    }), xe = {};
    if (P) {
      var V = w.length - 1 - (Ne > -1 ? Ne : F - 1), De = r === "top" || r === "bottom" ? "-50%" : "0";
      if (V > 0) {
        var fe, Oe, Qe;
        xe.height = I ? (fe = g.current[K]) === null || fe === void 0 ? void 0 : fe.offsetHeight : h == null ? void 0 : h.offsetHeight;
        for (var Me = 0, ge = 0; ge < V; ge++) {
          var he;
          Me += ((he = g.current[w[w.length - 1 - ge].key]) === null || he === void 0 ? void 0 : he.offsetHeight) + O;
        }
        var Pe = (I ? Me : V * _) * (r.startsWith("top") ? 1 : -1), He = !I && h !== null && h !== void 0 && h.offsetWidth && (Oe = g.current[K]) !== null && Oe !== void 0 && Oe.offsetWidth ? ((h == null ? void 0 : h.offsetWidth) - _ * 2 * (V < 3 ? V : 3)) / ((Qe = g.current[K]) === null || Qe === void 0 ? void 0 : Qe.offsetWidth) : 1;
        xe.transform = "translate3d(".concat(De, ", ").concat(Pe, "px, 0) scaleX(").concat(He, ")");
      } else
        xe.transform = "translate3d(".concat(De, ", 0, 0)");
    }
    return /* @__PURE__ */ q.createElement("div", {
      ref: N,
      className: tt("".concat(a, "-notice-wrapper"), j, be == null ? void 0 : be.wrapper),
      style: U(U(U({}, D), xe), ye == null ? void 0 : ye.wrapper),
      onMouseEnter: function() {
        return x(function(Ye) {
          return Ye.includes(K) ? Ye : [].concat(Xe(Ye), [K]);
        });
      },
      onMouseLeave: function() {
        return x(function(Ye) {
          return Ye.filter(function(Ot) {
            return Ot !== K;
          });
        });
      }
    }, /* @__PURE__ */ q.createElement(ru, it({}, Ke, {
      ref: function(Ye) {
        Ne > -1 ? g.current[K] = Ye : delete g.current[K];
      },
      prefixCls: a,
      classNames: be,
      styles: ye,
      className: tt(Z, f == null ? void 0 : f.notice),
      style: ke,
      times: G,
      key: H,
      eventKey: H,
      onNoticeClose: c,
      hovering: P && k.length > 0
    })));
  });
};
Q.env.NODE_ENV !== "production" && (ou.displayName = "NoticeList");
var iu = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e.container, o = e.motion, s = e.maxCount, l = e.className, i = e.style, c = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = p.useState([]), g = Y(f, 2), v = g[0], m = g[1], h = function(P) {
    var L, _ = v.find(function(B) {
      return B.key === P;
    });
    _ == null || (L = _.onClose) === null || L === void 0 || L.call(_), m(function(B) {
      return B.filter(function(O) {
        return O.key !== P;
      });
    });
  };
  p.useImperativeHandle(t, function() {
    return {
      open: function(P) {
        m(function(L) {
          var _ = Xe(L), B = _.findIndex(function($) {
            return $.key === P.key;
          }), O = U({}, P);
          if (B >= 0) {
            var I;
            O.times = (((I = L[B]) === null || I === void 0 ? void 0 : I.times) || 0) + 1, _[B] = O;
          } else
            O.times = 0, _.push(O);
          return s > 0 && _.length > s && (_ = _.slice(-s)), _;
        });
      },
      close: function(P) {
        h(P);
      },
      destroy: function() {
        m([]);
      }
    };
  });
  var A = p.useState({}), E = Y(A, 2), b = E[0], k = E[1];
  p.useEffect(function() {
    var T = {};
    v.forEach(function(P) {
      var L = P.placement, _ = L === void 0 ? "topRight" : L;
      _ && (T[_] = T[_] || [], T[_].push(P));
    }), Object.keys(b).forEach(function(P) {
      T[P] = T[P] || [];
    }), k(T);
  }, [v]);
  var x = function(P) {
    k(function(L) {
      var _ = U({}, L), B = _[P] || [];
      return B.length || delete _[P], _;
    });
  }, w = p.useRef(!1);
  if (p.useEffect(function() {
    Object.keys(b).length > 0 ? w.current = !0 : w.current && (c == null || c(), w.current = !1);
  }, [b]), !a)
    return null;
  var S = Object.keys(b);
  return /* @__PURE__ */ ci.createPortal(/* @__PURE__ */ p.createElement(p.Fragment, null, S.map(function(T) {
    var P = b[T], L = /* @__PURE__ */ p.createElement(ou, {
      key: T,
      configList: P,
      placement: T,
      prefixCls: r,
      className: l == null ? void 0 : l(T),
      style: i == null ? void 0 : i(T),
      motion: o,
      onNoticeClose: h,
      onAllNoticeRemoved: x,
      stack: u
    });
    return d ? d(L, {
      prefixCls: r,
      key: T
    }) : L;
  })), a);
});
Q.env.NODE_ENV !== "production" && (iu.displayName = "Notifications");
var dg = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], fg = function() {
  return document.body;
}, Ds = 0;
function hg() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(o) {
      var s = a[o];
      s !== void 0 && (e[o] = s);
    });
  }), e;
}
function pg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? fg : t, r = e.motion, a = e.prefixCls, o = e.maxCount, s = e.className, l = e.style, i = e.onAllRemoved, c = e.stack, u = e.renderNotifications, d = hn(e, dg), f = p.useState(), g = Y(f, 2), v = g[0], m = g[1], h = p.useRef(), A = /* @__PURE__ */ p.createElement(iu, {
    container: v,
    ref: h,
    prefixCls: a,
    motion: r,
    maxCount: o,
    className: s,
    style: l,
    onAllRemoved: i,
    stack: c,
    renderNotifications: u
  }), E = p.useState([]), b = Y(E, 2), k = b[0], x = b[1], w = p.useMemo(function() {
    return {
      open: function(T) {
        var P = hg(d, T);
        (P.key === null || P.key === void 0) && (P.key = "rc-notification-".concat(Ds), Ds += 1), x(function(L) {
          return [].concat(Xe(L), [{
            type: "open",
            config: P
          }]);
        });
      },
      close: function(T) {
        x(function(P) {
          return [].concat(Xe(P), [{
            type: "close",
            key: T
          }]);
        });
      },
      destroy: function() {
        x(function(T) {
          return [].concat(Xe(T), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return p.useEffect(function() {
    m(n());
  }), p.useEffect(function() {
    h.current && k.length && (k.forEach(function(S) {
      switch (S.type) {
        case "open":
          h.current.open(S.config);
          break;
        case "close":
          h.current.close(S.key);
          break;
        case "destroy":
          h.current.destroy();
          break;
      }
    }), x(function(S) {
      return S.filter(function(T) {
        return !k.includes(T);
      });
    }));
  }, [k]), [w, A];
}
const su = /* @__PURE__ */ q.createContext(void 0);
Q.env.NODE_ENV !== "production" && (su.displayName = "zIndexContext");
const Rt = 100, mg = 10, cu = Rt * mg, gg = cu + Rt, lu = {
  Modal: Rt,
  Drawer: Rt,
  Popover: Rt,
  Popconfirm: Rt,
  Tooltip: Rt,
  Tour: Rt,
  FloatButton: Rt
}, vg = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function yg(e) {
  return e in lu;
}
const fy = (e, t) => {
  const [, n] = Qn(), r = q.useContext(su), a = yg(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let s = r ?? 0;
    a ? s += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    lu[e] : s += vg[e], o = [r === void 0 ? t : s, s];
  }
  if (Q.env.NODE_ENV !== "production") {
    const s = Kn(e), l = n.zIndexPopupBase + gg, i = o[0] || 0;
    Q.env.NODE_ENV !== "production" && s(t !== void 0 || i <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function mr() {
  mr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(R, N, M) {
    R[N] = M.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, s = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", i = o.toStringTag || "@@toStringTag";
  function c(R, N, M) {
    return Object.defineProperty(R, N, {
      value: M,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), R[N];
  }
  try {
    c({}, "");
  } catch {
    c = function(M, j, D) {
      return M[j] = D;
    };
  }
  function u(R, N, M, j) {
    var D = N && N.prototype instanceof A ? N : A, F = Object.create(D.prototype), z = new I(j || []);
    return a(F, "_invoke", {
      value: L(R, M, z)
    }), F;
  }
  function d(R, N, M) {
    try {
      return {
        type: "normal",
        arg: R.call(N, M)
      };
    } catch (j) {
      return {
        type: "throw",
        arg: j
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", g = "suspendedYield", v = "executing", m = "completed", h = {};
  function A() {
  }
  function E() {
  }
  function b() {
  }
  var k = {};
  c(k, s, function() {
    return this;
  });
  var x = Object.getPrototypeOf, w = x && x(x($([])));
  w && w !== n && r.call(w, s) && (k = w);
  var S = b.prototype = A.prototype = Object.create(k);
  function T(R) {
    ["next", "throw", "return"].forEach(function(N) {
      c(R, N, function(M) {
        return this._invoke(N, M);
      });
    });
  }
  function P(R, N) {
    function M(D, F, z, H) {
      var G = d(R[D], R, F);
      if (G.type !== "throw") {
        var K = G.arg, te = K.value;
        return te && me(te) == "object" && r.call(te, "__await") ? N.resolve(te.__await).then(function(Z) {
          M("next", Z, z, H);
        }, function(Z) {
          M("throw", Z, z, H);
        }) : N.resolve(te).then(function(Z) {
          K.value = Z, z(K);
        }, function(Z) {
          return M("throw", Z, z, H);
        });
      }
      H(G.arg);
    }
    var j;
    a(this, "_invoke", {
      value: function(F, z) {
        function H() {
          return new N(function(G, K) {
            M(F, z, G, K);
          });
        }
        return j = j ? j.then(H, H) : H();
      }
    });
  }
  function L(R, N, M) {
    var j = f;
    return function(D, F) {
      if (j === v) throw Error("Generator is already running");
      if (j === m) {
        if (D === "throw") throw F;
        return {
          value: e,
          done: !0
        };
      }
      for (M.method = D, M.arg = F; ; ) {
        var z = M.delegate;
        if (z) {
          var H = _(z, M);
          if (H) {
            if (H === h) continue;
            return H;
          }
        }
        if (M.method === "next") M.sent = M._sent = M.arg;
        else if (M.method === "throw") {
          if (j === f) throw j = m, M.arg;
          M.dispatchException(M.arg);
        } else M.method === "return" && M.abrupt("return", M.arg);
        j = v;
        var G = d(R, N, M);
        if (G.type === "normal") {
          if (j = M.done ? m : g, G.arg === h) continue;
          return {
            value: G.arg,
            done: M.done
          };
        }
        G.type === "throw" && (j = m, M.method = "throw", M.arg = G.arg);
      }
    };
  }
  function _(R, N) {
    var M = N.method, j = R.iterator[M];
    if (j === e) return N.delegate = null, M === "throw" && R.iterator.return && (N.method = "return", N.arg = e, _(R, N), N.method === "throw") || M !== "return" && (N.method = "throw", N.arg = new TypeError("The iterator does not provide a '" + M + "' method")), h;
    var D = d(j, R.iterator, N.arg);
    if (D.type === "throw") return N.method = "throw", N.arg = D.arg, N.delegate = null, h;
    var F = D.arg;
    return F ? F.done ? (N[R.resultName] = F.value, N.next = R.nextLoc, N.method !== "return" && (N.method = "next", N.arg = e), N.delegate = null, h) : F : (N.method = "throw", N.arg = new TypeError("iterator result is not an object"), N.delegate = null, h);
  }
  function B(R) {
    var N = {
      tryLoc: R[0]
    };
    1 in R && (N.catchLoc = R[1]), 2 in R && (N.finallyLoc = R[2], N.afterLoc = R[3]), this.tryEntries.push(N);
  }
  function O(R) {
    var N = R.completion || {};
    N.type = "normal", delete N.arg, R.completion = N;
  }
  function I(R) {
    this.tryEntries = [{
      tryLoc: "root"
    }], R.forEach(B, this), this.reset(!0);
  }
  function $(R) {
    if (R || R === "") {
      var N = R[s];
      if (N) return N.call(R);
      if (typeof R.next == "function") return R;
      if (!isNaN(R.length)) {
        var M = -1, j = function D() {
          for (; ++M < R.length; ) if (r.call(R, M)) return D.value = R[M], D.done = !1, D;
          return D.value = e, D.done = !0, D;
        };
        return j.next = j;
      }
    }
    throw new TypeError(me(R) + " is not iterable");
  }
  return E.prototype = b, a(S, "constructor", {
    value: b,
    configurable: !0
  }), a(b, "constructor", {
    value: E,
    configurable: !0
  }), E.displayName = c(b, i, "GeneratorFunction"), t.isGeneratorFunction = function(R) {
    var N = typeof R == "function" && R.constructor;
    return !!N && (N === E || (N.displayName || N.name) === "GeneratorFunction");
  }, t.mark = function(R) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(R, b) : (R.__proto__ = b, c(R, i, "GeneratorFunction")), R.prototype = Object.create(S), R;
  }, t.awrap = function(R) {
    return {
      __await: R
    };
  }, T(P.prototype), c(P.prototype, l, function() {
    return this;
  }), t.AsyncIterator = P, t.async = function(R, N, M, j, D) {
    D === void 0 && (D = Promise);
    var F = new P(u(R, N, M, j), D);
    return t.isGeneratorFunction(N) ? F : F.next().then(function(z) {
      return z.done ? z.value : F.next();
    });
  }, T(S), c(S, i, "Generator"), c(S, s, function() {
    return this;
  }), c(S, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(R) {
    var N = Object(R), M = [];
    for (var j in N) M.push(j);
    return M.reverse(), function D() {
      for (; M.length; ) {
        var F = M.pop();
        if (F in N) return D.value = F, D.done = !1, D;
      }
      return D.done = !0, D;
    };
  }, t.values = $, I.prototype = {
    constructor: I,
    reset: function(N) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !N) for (var M in this) M.charAt(0) === "t" && r.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = e);
    },
    stop: function() {
      this.done = !0;
      var N = this.tryEntries[0].completion;
      if (N.type === "throw") throw N.arg;
      return this.rval;
    },
    dispatchException: function(N) {
      if (this.done) throw N;
      var M = this;
      function j(K, te) {
        return z.type = "throw", z.arg = N, M.next = K, te && (M.method = "next", M.arg = e), !!te;
      }
      for (var D = this.tryEntries.length - 1; D >= 0; --D) {
        var F = this.tryEntries[D], z = F.completion;
        if (F.tryLoc === "root") return j("end");
        if (F.tryLoc <= this.prev) {
          var H = r.call(F, "catchLoc"), G = r.call(F, "finallyLoc");
          if (H && G) {
            if (this.prev < F.catchLoc) return j(F.catchLoc, !0);
            if (this.prev < F.finallyLoc) return j(F.finallyLoc);
          } else if (H) {
            if (this.prev < F.catchLoc) return j(F.catchLoc, !0);
          } else {
            if (!G) throw Error("try statement without catch or finally");
            if (this.prev < F.finallyLoc) return j(F.finallyLoc);
          }
        }
      }
    },
    abrupt: function(N, M) {
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var D = this.tryEntries[j];
        if (D.tryLoc <= this.prev && r.call(D, "finallyLoc") && this.prev < D.finallyLoc) {
          var F = D;
          break;
        }
      }
      F && (N === "break" || N === "continue") && F.tryLoc <= M && M <= F.finallyLoc && (F = null);
      var z = F ? F.completion : {};
      return z.type = N, z.arg = M, F ? (this.method = "next", this.next = F.finallyLoc, h) : this.complete(z);
    },
    complete: function(N, M) {
      if (N.type === "throw") throw N.arg;
      return N.type === "break" || N.type === "continue" ? this.next = N.arg : N.type === "return" ? (this.rval = this.arg = N.arg, this.method = "return", this.next = "end") : N.type === "normal" && M && (this.next = M), h;
    },
    finish: function(N) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var j = this.tryEntries[M];
        if (j.finallyLoc === N) return this.complete(j.completion, j.afterLoc), O(j), h;
      }
    },
    catch: function(N) {
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var j = this.tryEntries[M];
        if (j.tryLoc === N) {
          var D = j.completion;
          if (D.type === "throw") {
            var F = D.arg;
            O(j);
          }
          return F;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(N, M, j) {
      return this.delegate = {
        iterator: $(N),
        resultName: M,
        nextLoc: j
      }, this.method === "next" && (this.arg = e), h;
    }
  }, t;
}
function Bs(e, t, n, r, a, o, s) {
  try {
    var l = e[o](s), i = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(i) : Promise.resolve(i).then(r, a);
}
function uu(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function s(i) {
        Bs(o, r, a, s, l, "next", i);
      }
      function l(i) {
        Bs(o, r, a, s, l, "throw", i);
      }
      s(void 0);
    });
  };
}
var wr = U({}, od), bg = wr.version, xg = wr.render, Cg = wr.unmountComponentAtNode, Ea;
try {
  var Sg = Number((bg || "").split(".")[0]);
  Sg >= 18 && (Ea = wr.createRoot);
} catch {
}
function $s(e) {
  var t = wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && me(t) === "object" && (t.usingClientEntryPoint = e);
}
var ca = "__rc_react_root__";
function Eg(e, t) {
  $s(!0);
  var n = t[ca] || Ea(t);
  $s(!1), n.render(e), t[ca] = n;
}
function wg(e, t) {
  xg(e, t);
}
function Tg(e, t) {
  if (Ea) {
    Eg(e, t);
    return;
  }
  wg(e, t);
}
function Ag(e) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = uu(/* @__PURE__ */ mr().mark(function e(t) {
    return mr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[ca]) === null || a === void 0 || a.unmount(), delete t[ca];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), $o.apply(this, arguments);
}
function kg(e) {
  Cg(e);
}
function hy(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = uu(/* @__PURE__ */ mr().mark(function e(t) {
    return mr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Ea === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Ag(t));
        case 2:
          kg(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ho.apply(this, arguments);
}
const Ng = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, a = `${t}-notice`, o = new rr("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), s = new rr("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), l = new rr("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), i = new rr("antNotificationLeftFadeIn", {
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
          animationName: s
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
          animationName: i
        }
      }
    }
  };
}, Pg = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], Rg = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, Mg = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [Rg[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, Og = (e) => {
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
}, Ig = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, _g = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `all ${e.motionDurationSlow}, backdrop-filter 0s`,
        position: "absolute"
      }, Og(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, Ig(e))
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
  }, Pg.map((n) => Mg(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, du = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadow: r,
    fontSizeLG: a,
    notificationMarginBottom: o,
    borderRadiusLG: s,
    colorSuccess: l,
    colorInfo: i,
    colorWarning: c,
    colorError: u,
    colorTextHeading: d,
    notificationBg: f,
    notificationPadding: g,
    notificationMarginEdge: v,
    notificationProgressBg: m,
    notificationProgressHeight: h,
    fontSize: A,
    lineHeight: E,
    width: b,
    notificationIconSize: k,
    colorText: x
  } = e, w = `${n}-notice`;
  return {
    position: "relative",
    marginBottom: o,
    marginInlineStart: "auto",
    background: f,
    borderRadius: s,
    boxShadow: r,
    [w]: {
      padding: g,
      width: b,
      maxWidth: `calc(100vw - ${Gt(e.calc(v).mul(2).equal())})`,
      overflow: "hidden",
      lineHeight: E,
      wordWrap: "break-word"
    },
    [`${w}-message`]: {
      marginBottom: e.marginXS,
      color: d,
      fontSize: a,
      lineHeight: e.lineHeightLG
    },
    [`${w}-description`]: {
      fontSize: A,
      color: x
    },
    [`${w}-closable ${w}-message`]: {
      paddingInlineEnd: e.paddingLG
    },
    [`${w}-with-icon ${w}-message`]: {
      marginBottom: e.marginXS,
      marginInlineStart: e.calc(e.marginSM).add(k).equal(),
      fontSize: a
    },
    [`${w}-with-icon ${w}-description`]: {
      marginInlineStart: e.calc(e.marginSM).add(k).equal(),
      fontSize: A
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${w}-icon`]: {
      position: "absolute",
      fontSize: k,
      lineHeight: 1,
      // icon-font
      [`&-success${t}`]: {
        color: l
      },
      [`&-info${t}`]: {
        color: i
      },
      [`&-warning${t}`]: {
        color: c
      },
      [`&-error${t}`]: {
        color: u
      }
    },
    [`${w}-close`]: Object.assign({
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
    }, Xp(e)),
    [`${w}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      WebkitAppearance: "none",
      inlineSize: `calc(100% - ${Gt(s)} * 2)`,
      left: {
        _skip_check_: !0,
        value: s
      },
      right: {
        _skip_check_: !0,
        value: s
      },
      bottom: 0,
      blockSize: h,
      border: 0,
      "&, &::-webkit-progress-bar": {
        borderRadius: s,
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      },
      "&::-moz-progress-bar": {
        background: m
      },
      "&::-webkit-progress-value": {
        borderRadius: s,
        background: m
      }
    },
    [`${w}-btn`]: {
      float: "right",
      marginTop: e.marginSM
    }
  };
}, jg = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: a,
    motionEaseInOut: o
  } = e, s = `${t}-notice`, l = new rr("antNotificationFadeOut", {
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
      [t]: Object.assign(Object.assign({}, Wp(e)), {
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
          [`${s}-btn`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${s}-wrapper`]: Object.assign({}, du(e))
      }
    }
  ];
}, fu = (e) => ({
  zIndexPopup: e.zIndexPopupBase + cu + 50,
  width: 384
}), hu = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return ki(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${Gt(e.paddingMD)} ${Gt(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, pu = Yp("Notification", (e) => {
  const t = hu(e);
  return [jg(t), Ng(t), _g(t)];
}, fu), Lg = Zp(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = hu(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, du(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${Gt(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, fu);
var Fg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Pi(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ p.createElement(Jl, {
    className: `${e}-close-icon`
  });
}
const Dg = {
  success: Yl,
  info: tu,
  error: Zl,
  warning: eu
}, mu = (e) => {
  const {
    prefixCls: t,
    icon: n,
    type: r,
    message: a,
    description: o,
    btn: s,
    role: l = "alert"
  } = e;
  let i = null;
  return n ? i = /* @__PURE__ */ p.createElement("span", {
    className: `${t}-icon`
  }, n) : r && (i = /* @__PURE__ */ p.createElement(Dg[r] || null, {
    className: tt(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ p.createElement("div", {
    className: tt({
      [`${t}-with-icon`]: i
    }),
    role: l
  }, i, /* @__PURE__ */ p.createElement("div", {
    className: `${t}-message`
  }, a), /* @__PURE__ */ p.createElement("div", {
    className: `${t}-description`
  }, o), s && /* @__PURE__ */ p.createElement("div", {
    className: `${t}-btn`
  }, s));
}, Bg = (e) => {
  const {
    prefixCls: t,
    className: n,
    icon: r,
    type: a,
    message: o,
    description: s,
    btn: l,
    closable: i = !0,
    closeIcon: c,
    className: u
  } = e, d = Fg(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
    getPrefixCls: f
  } = p.useContext(Kt), g = t || f("notification"), v = `${g}-notice`, m = nu(g), [h, A, E] = pu(g, m);
  return h(/* @__PURE__ */ p.createElement("div", {
    className: tt(`${v}-pure-panel`, A, n, E, m)
  }, /* @__PURE__ */ p.createElement(Lg, {
    prefixCls: g
  }), /* @__PURE__ */ p.createElement(ru, Object.assign({}, d, {
    prefixCls: g,
    eventKey: "pure",
    duration: null,
    closable: i,
    className: tt({
      notificationClassName: u
    }),
    closeIcon: Pi(g, c),
    content: /* @__PURE__ */ p.createElement(mu, {
      prefixCls: v,
      icon: r,
      type: a,
      message: o,
      description: s,
      btn: l
    })
  }))));
};
function $g(e, t, n) {
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
function Hg(e) {
  return {
    motionName: `${e}-fade`
  };
}
var Ug = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Hs = 24, zg = 4.5, Vg = "topRight", Wg = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = nu(n), [a, o, s] = pu(n, r);
  return a(/* @__PURE__ */ q.createElement(cg, {
    classNames: {
      list: tt(o, s, r)
    }
  }, t));
}, Gg = (e, t) => {
  let {
    prefixCls: n,
    key: r
  } = t;
  return /* @__PURE__ */ q.createElement(Wg, {
    prefixCls: n,
    key: r
  }, e);
}, Kg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    top: n,
    bottom: r,
    prefixCls: a,
    getContainer: o,
    maxCount: s,
    rtl: l,
    onAllRemoved: i,
    stack: c,
    duration: u,
    pauseOnHover: d = !0,
    showProgress: f
  } = e, {
    getPrefixCls: g,
    getPopupContainer: v,
    notification: m,
    direction: h
  } = p.useContext(Kt), [, A] = Qn(), E = a || g("notification"), b = (T) => $g(T, n ?? Hs, r ?? Hs), k = () => tt({
    [`${E}-rtl`]: l ?? h === "rtl"
  }), x = () => Hg(E), [w, S] = pg({
    prefixCls: E,
    style: b,
    className: k,
    motion: x,
    closable: !0,
    closeIcon: Pi(E),
    duration: u ?? zg,
    getContainer: () => (o == null ? void 0 : o()) || (v == null ? void 0 : v()) || document.body,
    maxCount: s,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: i,
    renderNotifications: Gg,
    stack: c === !1 ? !1 : {
      threshold: typeof c == "object" ? c == null ? void 0 : c.threshold : void 0,
      offset: 8,
      gap: A.margin
    }
  });
  return q.useImperativeHandle(t, () => Object.assign(Object.assign({}, w), {
    prefixCls: E,
    notification: m
  })), S;
});
function gu(e) {
  const t = q.useRef(null), n = Kn("Notification");
  return [q.useMemo(() => {
    const a = (i) => {
      var c;
      if (!t.current) {
        Q.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        return;
      }
      const {
        open: u,
        prefixCls: d,
        notification: f
      } = t.current, g = `${d}-notice`, {
        message: v,
        description: m,
        icon: h,
        type: A,
        btn: E,
        className: b,
        style: k,
        role: x = "alert",
        closeIcon: w,
        closable: S
      } = i, T = Ug(i, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), P = Pi(g, typeof w < "u" ? w : f == null ? void 0 : f.closeIcon);
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e == null ? void 0 : e.placement) !== null && c !== void 0 ? c : Vg
      }, T), {
        content: /* @__PURE__ */ q.createElement(mu, {
          prefixCls: g,
          icon: h,
          type: A,
          message: v,
          description: m,
          btn: E,
          role: x
        }),
        className: tt(A && `${g}-${A}`, b, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), k),
        closeIcon: P,
        closable: S ?? !!P
      }));
    }, s = {
      open: a,
      destroy: (i) => {
        var c, u;
        i !== void 0 ? (c = t.current) === null || c === void 0 || c.close(i) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["success", "info", "warning", "error"].forEach((i) => {
      s[i] = (c) => a(Object.assign(Object.assign({}, c), {
        type: i
      }));
    }), s;
  }, []), /* @__PURE__ */ q.createElement(Kg, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function Qg(e) {
  return gu(e);
}
const qg = /* @__PURE__ */ q.createContext({});
let dt = null, Zr = (e) => e(), la = [], gr = {};
function Us() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: s
  } = gr, l = (e == null ? void 0 : e()) || document.body;
  return {
    getContainer: () => l,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: s
  };
}
const Xg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: a
  } = p.useContext(Kt), o = gr.prefixCls || a("notification"), s = p.useContext(qg), [l, i] = gu(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: o
  }), s.notification));
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
  }), i;
}), Yg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const [n, r] = q.useState(Us), a = () => {
    r(Us);
  };
  q.useEffect(a, []);
  const o = Gl(), s = o.getRootPrefixCls(), l = o.getIconPrefixCls(), i = o.getTheme(), c = /* @__PURE__ */ q.createElement(Xg, {
    ref: t,
    sync: a,
    notificationConfig: n
  });
  return /* @__PURE__ */ q.createElement(gn, {
    prefixCls: s,
    iconPrefixCls: l,
    theme: i
  }, o.holderRender ? o.holderRender(c) : c);
});
function Ri() {
  if (!dt) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    dt = t, Zr(() => {
      Tg(/* @__PURE__ */ q.createElement(Yg, {
        ref: (n) => {
          const {
            instance: r,
            sync: a
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = a, Ri());
          });
        }
      }), e);
    });
    return;
  }
  dt.instance && (la.forEach((e) => {
    switch (e.type) {
      case "open": {
        Zr(() => {
          dt.instance.open(Object.assign(Object.assign({}, gr), e.config));
        });
        break;
      }
      case "destroy":
        Zr(() => {
          dt == null || dt.instance.destroy(e.key);
        });
        break;
    }
  }), la = []);
}
function Zg(e) {
  gr = Object.assign(Object.assign({}, gr), e), Zr(() => {
    var t;
    (t = dt == null ? void 0 : dt.sync) === null || t === void 0 || t.call(dt);
  });
}
function vu(e) {
  const t = Gl();
  Q.env.NODE_ENV !== "production" && !t.holderRender && Pm("notification"), la.push({
    type: "open",
    config: e
  }), Ri();
}
const Jg = (e) => {
  la.push({
    type: "destroy",
    key: e
  }), Ri();
}, e0 = ["success", "info", "warning", "error"], t0 = {
  open: vu,
  destroy: Jg,
  config: Zg,
  useNotification: Qg,
  _InternalPanelDoNotUseOrYouWillBeFired: Bg
}, Uo = t0;
e0.forEach((e) => {
  Uo[e] = (t) => vu(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
Q.env.NODE_ENV;
Q.env.NODE_ENV;
const yu = ({ isOpen: e, onClose: t, className: n, overlayClassName: r, title: a, containerClassName: o, contentClassName: s, children: l, footer: i }) => {
  const c = e ? /* @__PURE__ */ y.jsxs("div", { className: re(
    "fixed inset-0 z-50 flex items-center justify-center",
    n
  ), children: [
    /* @__PURE__ */ y.jsx("div", { className: re(
      "fixed inset-0 bg-black/80",
      r
    ) }),
    /* @__PURE__ */ y.jsxs("div", { className: re(
      "relative z-50 bg-background text-primary rounded-lg max-w-[600px] w-full overflow-hidden",
      o
    ), children: [
      /* @__PURE__ */ y.jsxs("div", { className: re(
        "flex items-center justify-between py-[14px] px-[20px]",
        "border-b border-[#ebebeb] pb-2"
      ), children: [
        /* @__PURE__ */ y.jsx("p", { children: a }),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: t,
            className: "text-[#929292] hover:text-primary/80",
            children: /* @__PURE__ */ y.jsx(ui, {})
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: re(
        "py-3 px-6",
        s
      ), children: l }),
      i && /* @__PURE__ */ y.jsx("footer", { className: "border-t border-[#ebebeb] py-[18px] px-[24px]", children: i })
    ] })
  ] }) : null;
  if (typeof window < "u")
    return cr.createPortal(
      c,
      document.body
    );
};
var Tr = class {
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
}, pn = typeof window > "u" || "Deno" in globalThis;
function ot() {
}
function n0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function bu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zs(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: a,
    predicate: o,
    queryKey: s,
    stale: l
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== Mi(s, t.options))
        return !1;
    } else if (!yr(t.queryKey, s))
      return !1;
  }
  if (n !== "all") {
    const i = t.isActive();
    if (n === "active" && !i || n === "inactive" && i)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || a && a !== t.state.fetchStatus || o && !o(t));
}
function Vs(e, t) {
  const { exact: n, status: r, predicate: a, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (vr(t.options.mutationKey) !== vr(o))
        return !1;
    } else if (!yr(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || a && !a(t));
}
function Mi(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || vr)(e);
}
function vr(e) {
  return JSON.stringify(
    e,
    (t, n) => Go(n) ? Object.keys(n).sort().reduce((r, a) => (r[a] = n[a], r), {}) : n
  );
}
function yr(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !yr(e[n], t[n])) : !1;
}
function Vo(e, t) {
  if (e === t)
    return e;
  const n = Ws(e) && Ws(t);
  if (n || Go(e) && Go(t)) {
    const r = n ? e : Object.keys(e), a = r.length, o = n ? t : Object.keys(t), s = o.length, l = n ? [] : {};
    let i = 0;
    for (let c = 0; c < s; c++) {
      const u = n ? c : o[c];
      (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (l[u] = void 0, i++) : (l[u] = Vo(e[u], t[u]), l[u] === e[u] && e[u] !== void 0 && i++);
    }
    return a === s && i === a ? e : l;
  }
  return t;
}
function Wo(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Ws(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Go(e) {
  if (!Gs(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Gs(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Gs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function r0(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ko(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (Q.env.NODE_ENV !== "production")
      try {
        return Vo(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return Vo(e, t);
  }
  return t;
}
function a0(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function o0(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ua = Symbol();
function xu(e, t) {
  return Q.env.NODE_ENV !== "production" && e.queryFn === ua && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ua ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var tn, jt, kn, ec, i0 = (ec = class extends Tr {
  constructor() {
    super();
    ne(this, tn);
    ne(this, jt);
    ne(this, kn);
    W(this, kn, (t) => {
      if (!pn && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    C(this, jt) || this.setEventListener(C(this, kn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = C(this, jt)) == null || t.call(this), W(this, jt, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, kn, t), (n = C(this, jt)) == null || n.call(this), W(this, jt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    C(this, tn) !== t && (W(this, tn, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof C(this, tn) == "boolean" ? C(this, tn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, tn = new WeakMap(), jt = new WeakMap(), kn = new WeakMap(), ec), Oi = new i0(), Nn, Lt, Pn, tc, s0 = (tc = class extends Tr {
  constructor() {
    super();
    ne(this, Nn, !0);
    ne(this, Lt);
    ne(this, Pn);
    W(this, Pn, (t) => {
      if (!pn && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    C(this, Lt) || this.setEventListener(C(this, Pn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = C(this, Lt)) == null || t.call(this), W(this, Lt, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, Pn, t), (n = C(this, Lt)) == null || n.call(this), W(this, Lt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    C(this, Nn) !== t && (W(this, Nn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return C(this, Nn);
  }
}, Nn = new WeakMap(), Lt = new WeakMap(), Pn = new WeakMap(), tc), da = new s0();
function Qo() {
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
function c0(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Cu(e) {
  return (e ?? "online") === "online" ? da.isOnline() : !0;
}
var Su = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Ka(e) {
  return e instanceof Su;
}
function Eu(e) {
  let t = !1, n = 0, r = !1, a;
  const o = Qo(), s = (m) => {
    var h;
    r || (f(new Su(m)), (h = e.abort) == null || h.call(e));
  }, l = () => {
    t = !0;
  }, i = () => {
    t = !1;
  }, c = () => Oi.isFocused() && (e.networkMode === "always" || da.isOnline()) && e.canRun(), u = () => Cu(e.networkMode) && e.canRun(), d = (m) => {
    var h;
    r || (r = !0, (h = e.onSuccess) == null || h.call(e, m), a == null || a(), o.resolve(m));
  }, f = (m) => {
    var h;
    r || (r = !0, (h = e.onError) == null || h.call(e, m), a == null || a(), o.reject(m));
  }, g = () => new Promise((m) => {
    var h;
    a = (A) => {
      (r || c()) && m(A);
    }, (h = e.onPause) == null || h.call(e);
  }).then(() => {
    var m;
    a = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), v = () => {
    if (r)
      return;
    let m;
    const h = n === 0 ? e.initialPromise : void 0;
    try {
      m = h ?? e.fn();
    } catch (A) {
      m = Promise.reject(A);
    }
    Promise.resolve(m).then(d).catch((A) => {
      var w;
      if (r)
        return;
      const E = e.retry ?? (pn ? 0 : 3), b = e.retryDelay ?? c0, k = typeof b == "function" ? b(n, A) : b, x = E === !0 || typeof E == "number" && n < E || typeof E == "function" && E(n, A);
      if (t || !x) {
        f(A);
        return;
      }
      n++, (w = e.onFail) == null || w.call(e, n, A), r0(k).then(() => c() ? void 0 : g()).then(() => {
        t ? f(A) : v();
      });
    });
  };
  return {
    promise: o,
    cancel: s,
    continue: () => (a == null || a(), o),
    cancelRetry: l,
    continueRetry: i,
    canStart: u,
    start: () => (u() ? v() : g().then(v), o)
  };
}
function l0() {
  let e = [], t = 0, n = (l) => {
    l();
  }, r = (l) => {
    l();
  }, a = (l) => setTimeout(l, 0);
  const o = (l) => {
    t ? e.push(l) : a(() => {
      n(l);
    });
  }, s = () => {
    const l = e;
    e = [], l.length && a(() => {
      r(() => {
        l.forEach((i) => {
          n(i);
        });
      });
    });
  };
  return {
    batch: (l) => {
      let i;
      t++;
      try {
        i = l();
      } finally {
        t--, t || s();
      }
      return i;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (l) => (...i) => {
      o(() => {
        l(...i);
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
var je = l0(), nn, nc, wu = (nc = class {
  constructor() {
    ne(this, nn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), zo(this.gcTime) && W(this, nn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (pn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    C(this, nn) && (clearTimeout(C(this, nn)), W(this, nn, void 0));
  }
}, nn = new WeakMap(), nc), Rn, Mn, at, Be, br, rn, lt, Nt, rc, u0 = (rc = class extends wu {
  constructor(t) {
    super();
    ne(this, lt);
    ne(this, Rn);
    ne(this, Mn);
    ne(this, at);
    ne(this, Be);
    ne(this, br);
    ne(this, rn);
    W(this, rn, !1), W(this, br, t.defaultOptions), this.setOptions(t.options), this.observers = [], W(this, at, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, W(this, Rn, d0(this.options)), this.state = t.state ?? C(this, Rn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = C(this, Be)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...C(this, br), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && C(this, at).remove(this);
  }
  setData(t, n) {
    const r = Ko(this.state.data, t, this.options);
    return oe(this, lt, Nt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    oe(this, lt, Nt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, a;
    const n = (r = C(this, Be)) == null ? void 0 : r.promise;
    return (a = C(this, Be)) == null || a.cancel(t), n ? n.then(ot).catch(ot) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(C(this, Rn));
  }
  isActive() {
    return this.observers.some(
      (t) => ft(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ua || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !bu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, Be)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, Be)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), C(this, at).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (C(this, Be) && (C(this, rn) ? C(this, Be).cancel({ revert: !0 }) : C(this, Be).cancelRetry()), this.scheduleGc()), C(this, at).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || oe(this, lt, Nt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var i, c, u;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (C(this, Be))
        return C(this, Be).continueRetry(), C(this, Be).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    Q.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), a = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (W(this, rn, !0), r.signal)
      });
    }, o = () => {
      const d = xu(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a(f), W(this, rn, !1), this.options.persister ? this.options.persister(
        d,
        f,
        this
      ) : d(f);
    }, s = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    a(s), (i = this.options.behavior) == null || i.onFetch(
      s,
      this
    ), W(this, Mn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = s.fetchOptions) == null ? void 0 : c.meta)) && oe(this, lt, Nt).call(this, { type: "fetch", meta: (u = s.fetchOptions) == null ? void 0 : u.meta });
    const l = (d) => {
      var f, g, v, m;
      Ka(d) && d.silent || oe(this, lt, Nt).call(this, {
        type: "error",
        error: d
      }), Ka(d) || ((g = (f = C(this, at).config).onError) == null || g.call(
        f,
        d,
        this
      ), (m = (v = C(this, at).config).onSettled) == null || m.call(
        v,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return W(this, Be, Eu({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: s.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, g, v, m;
        if (d === void 0) {
          Q.env.NODE_ENV !== "production" && console.error(
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
        (g = (f = C(this, at).config).onSuccess) == null || g.call(f, d, this), (m = (v = C(this, at).config).onSettled) == null || m.call(
          v,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: l,
      onFail: (d, f) => {
        oe(this, lt, Nt).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        oe(this, lt, Nt).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, lt, Nt).call(this, { type: "continue" });
      },
      retry: s.options.retry,
      retryDelay: s.options.retryDelay,
      networkMode: s.options.networkMode,
      canRun: () => !0
    })), C(this, Be).start();
  }
}, Rn = new WeakMap(), Mn = new WeakMap(), at = new WeakMap(), Be = new WeakMap(), br = new WeakMap(), rn = new WeakMap(), lt = new WeakSet(), Nt = function(t) {
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
          ...Tu(r.data, this.options),
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
        return Ka(a) && a.revert && C(this, Mn) ? { ...C(this, Mn), fetchStatus: "idle" } : {
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
  this.state = n(this.state), je.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), C(this, at).notify({ query: this, type: "updated", action: t });
  });
}, rc);
function Tu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Cu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function d0(e) {
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
var bt, ac, f0 = (ac = class extends Tr {
  constructor(t = {}) {
    super();
    ne(this, bt);
    this.config = t, W(this, bt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const a = n.queryKey, o = n.queryHash ?? Mi(a, n);
    let s = this.get(o);
    return s || (s = new u0({
      cache: this,
      queryKey: a,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(a)
    }), this.add(s)), s;
  }
  add(t) {
    C(this, bt).has(t.queryHash) || (C(this, bt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = C(this, bt).get(t.queryHash);
    n && (t.destroy(), n === t && C(this, bt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    je.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return C(this, bt).get(t);
  }
  getAll() {
    return [...C(this, bt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => zs(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => zs(t, r)) : n;
  }
  notify(t) {
    je.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    je.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    je.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, bt = new WeakMap(), ac), xt, ze, an, Ct, _t, oc, h0 = (oc = class extends wu {
  constructor(t) {
    super();
    ne(this, Ct);
    ne(this, xt);
    ne(this, ze);
    ne(this, an);
    this.mutationId = t.mutationId, W(this, ze, t.mutationCache), W(this, xt, []), this.state = t.state || p0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    C(this, xt).includes(t) || (C(this, xt).push(t), this.clearGcTimeout(), C(this, ze).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    W(this, xt, C(this, xt).filter((n) => n !== t)), this.scheduleGc(), C(this, ze).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    C(this, xt).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, ze).remove(this));
  }
  continue() {
    var t;
    return ((t = C(this, an)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, o, s, l, i, c, u, d, f, g, v, m, h, A, E, b, k, x, w, S;
    W(this, an, Eu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (T, P) => {
        oe(this, Ct, _t).call(this, { type: "failed", failureCount: T, error: P });
      },
      onPause: () => {
        oe(this, Ct, _t).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, Ct, _t).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => C(this, ze).canRun(this)
    }));
    const n = this.state.status === "pending", r = !C(this, an).canStart();
    try {
      if (!n) {
        oe(this, Ct, _t).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (a = C(this, ze).config).onMutate) == null ? void 0 : o.call(
          a,
          t,
          this
        ));
        const P = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
        P !== this.state.context && oe(this, Ct, _t).call(this, {
          type: "pending",
          context: P,
          variables: t,
          isPaused: r
        });
      }
      const T = await C(this, an).start();
      return await ((c = (i = C(this, ze).config).onSuccess) == null ? void 0 : c.call(
        i,
        T,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, T, t, this.state.context)), await ((g = (f = C(this, ze).config).onSettled) == null ? void 0 : g.call(
        f,
        T,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (v = this.options).onSettled) == null ? void 0 : m.call(v, T, null, t, this.state.context)), oe(this, Ct, _t).call(this, { type: "success", data: T }), T;
    } catch (T) {
      try {
        throw await ((A = (h = C(this, ze).config).onError) == null ? void 0 : A.call(
          h,
          T,
          t,
          this.state.context,
          this
        )), await ((b = (E = this.options).onError) == null ? void 0 : b.call(
          E,
          T,
          t,
          this.state.context
        )), await ((x = (k = C(this, ze).config).onSettled) == null ? void 0 : x.call(
          k,
          void 0,
          T,
          this.state.variables,
          this.state.context,
          this
        )), await ((S = (w = this.options).onSettled) == null ? void 0 : S.call(
          w,
          void 0,
          T,
          t,
          this.state.context
        )), T;
      } finally {
        oe(this, Ct, _t).call(this, { type: "error", error: T });
      }
    } finally {
      C(this, ze).runNext(this);
    }
  }
}, xt = new WeakMap(), ze = new WeakMap(), an = new WeakMap(), Ct = new WeakSet(), _t = function(t) {
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
  this.state = n(this.state), je.batch(() => {
    C(this, xt).forEach((r) => {
      r.onMutationUpdate(t);
    }), C(this, ze).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, oc);
function p0() {
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
var et, xr, ic, m0 = (ic = class extends Tr {
  constructor(t = {}) {
    super();
    ne(this, et);
    ne(this, xr);
    this.config = t, W(this, et, /* @__PURE__ */ new Map()), W(this, xr, Date.now());
  }
  build(t, n, r) {
    const a = new h0({
      mutationCache: this,
      mutationId: ++Rr(this, xr)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(a), a;
  }
  add(t) {
    const n = Ur(t), r = C(this, et).get(n) ?? [];
    r.push(t), C(this, et).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = Ur(t);
    if (C(this, et).has(n)) {
      const a = (r = C(this, et).get(n)) == null ? void 0 : r.filter((o) => o !== t);
      a && (a.length === 0 ? C(this, et).delete(n) : C(this, et).set(n, a));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = C(this, et).get(Ur(t))) == null ? void 0 : r.find((a) => a.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = C(this, et).get(Ur(t))) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
  }
  clear() {
    je.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...C(this, et).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Vs(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Vs(t, n));
  }
  notify(t) {
    je.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return je.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(ot))
      )
    );
  }
}, et = new WeakMap(), xr = new WeakMap(), ic);
function Ur(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Ks(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, g, v;
      const r = t.options, a = (f = (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, o = ((g = t.state.data) == null ? void 0 : g.pages) || [], s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let l = { pages: [], pageParams: [] }, i = 0;
      const c = async () => {
        let m = !1;
        const h = (b) => {
          Object.defineProperty(b, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, A = xu(t.options, t.fetchOptions), E = async (b, k, x) => {
          if (m)
            return Promise.reject();
          if (k == null && b.pages.length)
            return Promise.resolve(b);
          const w = {
            queryKey: t.queryKey,
            pageParam: k,
            direction: x ? "backward" : "forward",
            meta: t.options.meta
          };
          h(w);
          const S = await A(
            w
          ), { maxPages: T } = t.options, P = x ? o0 : a0;
          return {
            pages: P(b.pages, S, T),
            pageParams: P(b.pageParams, k, T)
          };
        };
        if (a && o.length) {
          const b = a === "backward", k = b ? g0 : Qs, x = {
            pages: o,
            pageParams: s
          }, w = k(r, x);
          l = await E(x, w, b);
        } else {
          const b = e ?? o.length;
          do {
            const k = i === 0 ? s[0] ?? r.initialPageParam : Qs(r, l);
            if (i > 0 && k == null)
              break;
            l = await E(l, k), i++;
          } while (i < b);
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
function Qs(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function g0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Se, Ft, Dt, On, In, Bt, _n, jn, sc, v0 = (sc = class {
  constructor(e = {}) {
    ne(this, Se);
    ne(this, Ft);
    ne(this, Dt);
    ne(this, On);
    ne(this, In);
    ne(this, Bt);
    ne(this, _n);
    ne(this, jn);
    W(this, Se, e.queryCache || new f0()), W(this, Ft, e.mutationCache || new m0()), W(this, Dt, e.defaultOptions || {}), W(this, On, /* @__PURE__ */ new Map()), W(this, In, /* @__PURE__ */ new Map()), W(this, Bt, 0);
  }
  mount() {
    Rr(this, Bt)._++, C(this, Bt) === 1 && (W(this, _n, Oi.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), C(this, Se).onFocus());
    })), W(this, jn, da.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), C(this, Se).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Rr(this, Bt)._--, C(this, Bt) === 0 && ((e = C(this, _n)) == null || e.call(this), W(this, _n, void 0), (t = C(this, jn)) == null || t.call(this), W(this, jn, void 0));
  }
  isFetching(e) {
    return C(this, Se).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return C(this, Ft).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = C(this, Se).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = C(this, Se).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(Tn(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return C(this, Se).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), a = C(this, Se).get(
      r.queryHash
    ), o = a == null ? void 0 : a.state.data, s = n0(t, o);
    if (s !== void 0)
      return C(this, Se).build(this, r).setData(s, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return je.batch(
      () => C(this, Se).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = C(this, Se).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = C(this, Se);
    je.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = C(this, Se), r = {
      type: "active",
      ...e
    };
    return je.batch(() => (n.findAll(e).forEach((a) => {
      a.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = { revert: !0, ...t }, r = je.batch(
      () => C(this, Se).findAll(e).map((a) => a.cancel(n))
    );
    return Promise.all(r).then(ot).catch(ot);
  }
  invalidateQueries(e = {}, t = {}) {
    return je.batch(() => {
      if (C(this, Se).findAll(e).forEach((r) => {
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
    }, r = je.batch(
      () => C(this, Se).findAll(e).filter((a) => !a.isDisabled()).map((a) => {
        let o = a.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(ot)), a.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(ot);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = C(this, Se).build(this, t);
    return n.isStaleByTime(
      Tn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(ot).catch(ot);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ks(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(ot).catch(ot);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Ks(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return da.isOnline() ? C(this, Ft).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return C(this, Se);
  }
  getMutationCache() {
    return C(this, Ft);
  }
  getDefaultOptions() {
    return C(this, Dt);
  }
  setDefaultOptions(e) {
    W(this, Dt, e);
  }
  setQueryDefaults(e, t) {
    C(this, On).set(vr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...C(this, On).values()];
    let n = {};
    return t.forEach((r) => {
      yr(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    C(this, In).set(vr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...C(this, In).values()];
    let n = {};
    return t.forEach((r) => {
      yr(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...C(this, Dt).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Mi(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ua && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...C(this, Dt).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    C(this, Se).clear(), C(this, Ft).clear();
  }
}, Se = new WeakMap(), Ft = new WeakMap(), Dt = new WeakMap(), On = new WeakMap(), In = new WeakMap(), Bt = new WeakMap(), _n = new WeakMap(), jn = new WeakMap(), sc), qe, ie, Cr, Ve, on, Ln, $t, St, Sr, Fn, Dn, sn, cn, Ht, Bn, de, ar, qo, Xo, Yo, Zo, Jo, ei, ti, Au, cc, y0 = (cc = class extends Tr {
  constructor(t, n) {
    super();
    ne(this, de);
    ne(this, qe);
    ne(this, ie);
    ne(this, Cr);
    ne(this, Ve);
    ne(this, on);
    ne(this, Ln);
    ne(this, $t);
    ne(this, St);
    ne(this, Sr);
    ne(this, Fn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    ne(this, Dn);
    ne(this, sn);
    ne(this, cn);
    ne(this, Ht);
    ne(this, Bn, /* @__PURE__ */ new Set());
    this.options = n, W(this, qe, t), W(this, St, null), W(this, $t, Qo()), this.options.experimental_prefetchInRender || C(this, $t).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (C(this, ie).addObserver(this), qs(C(this, ie), this.options) ? oe(this, de, ar).call(this) : this.updateResult(), oe(this, de, Zo).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ni(
      C(this, ie),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return ni(
      C(this, ie),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, de, Jo).call(this), oe(this, de, ei).call(this), C(this, ie).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = C(this, ie);
    if (this.options = C(this, qe).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ft(this.options.enabled, C(this, ie)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, de, ti).call(this), C(this, ie).setOptions(this.options), r._defaulted && !Wo(this.options, r) && C(this, qe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: C(this, ie),
      observer: this
    });
    const o = this.hasListeners();
    o && Xs(
      C(this, ie),
      a,
      this.options,
      r
    ) && oe(this, de, ar).call(this), this.updateResult(n), o && (C(this, ie) !== a || ft(this.options.enabled, C(this, ie)) !== ft(r.enabled, C(this, ie)) || Tn(this.options.staleTime, C(this, ie)) !== Tn(r.staleTime, C(this, ie))) && oe(this, de, qo).call(this);
    const s = oe(this, de, Xo).call(this);
    o && (C(this, ie) !== a || ft(this.options.enabled, C(this, ie)) !== ft(r.enabled, C(this, ie)) || s !== C(this, Ht)) && oe(this, de, Yo).call(this, s);
  }
  getOptimisticResult(t) {
    const n = C(this, qe).getQueryCache().build(C(this, qe), t), r = this.createResult(n, t);
    return x0(this, r) && (W(this, Ve, r), W(this, Ln, this.options), W(this, on, C(this, ie).state)), r;
  }
  getCurrentResult() {
    return C(this, Ve);
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
    C(this, Bn).add(t);
  }
  getCurrentQuery() {
    return C(this, ie);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = C(this, qe).defaultQueryOptions(t), r = C(this, qe).getQueryCache().build(C(this, qe), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return oe(this, de, ar).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), C(this, Ve)));
  }
  createResult(t, n) {
    var T;
    const r = C(this, ie), a = this.options, o = C(this, Ve), s = C(this, on), l = C(this, Ln), c = t !== r ? t.state : C(this, Cr), { state: u } = t;
    let d = { ...u }, f = !1, g;
    if (n._optimisticResults) {
      const P = this.hasListeners(), L = !P && qs(t, n), _ = P && Xs(t, r, n, a);
      (L || _) && (d = {
        ...d,
        ...Tu(u.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: v, errorUpdatedAt: m, status: h } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (s == null ? void 0 : s.data) && n.select === C(this, Sr))
        g = C(this, Fn);
      else
        try {
          W(this, Sr, n.select), g = n.select(d.data), g = Ko(o == null ? void 0 : o.data, g, n), W(this, Fn, g), W(this, St, null);
        } catch (P) {
          W(this, St, P);
        }
    else
      g = d.data;
    if (n.placeholderData !== void 0 && g === void 0 && h === "pending") {
      let P;
      if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        P = o.data;
      else if (P = typeof n.placeholderData == "function" ? n.placeholderData(
        (T = C(this, Dn)) == null ? void 0 : T.state.data,
        C(this, Dn)
      ) : n.placeholderData, n.select && P !== void 0)
        try {
          P = n.select(P), W(this, St, null);
        } catch (L) {
          W(this, St, L);
        }
      P !== void 0 && (h = "success", g = Ko(
        o == null ? void 0 : o.data,
        P,
        n
      ), f = !0);
    }
    C(this, St) && (v = C(this, St), g = C(this, Fn), m = Date.now(), h = "error");
    const A = d.fetchStatus === "fetching", E = h === "pending", b = h === "error", k = E && A, x = g !== void 0, S = {
      status: h,
      fetchStatus: d.fetchStatus,
      isPending: E,
      isSuccess: h === "success",
      isError: b,
      isInitialLoading: k,
      isLoading: k,
      data: g,
      dataUpdatedAt: d.dataUpdatedAt,
      error: v,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
      isFetching: A,
      isRefetching: A && !E,
      isLoadingError: b && !x,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: b && x,
      isStale: Ii(t, n),
      refetch: this.refetch,
      promise: C(this, $t)
    };
    if (this.options.experimental_prefetchInRender) {
      const P = (B) => {
        S.status === "error" ? B.reject(S.error) : S.data !== void 0 && B.resolve(S.data);
      }, L = () => {
        const B = W(this, $t, S.promise = Qo());
        P(B);
      }, _ = C(this, $t);
      switch (_.status) {
        case "pending":
          t.queryHash === r.queryHash && P(_);
          break;
        case "fulfilled":
          (S.status === "error" || S.data !== _.value) && L();
          break;
        case "rejected":
          (S.status !== "error" || S.error !== _.reason) && L();
          break;
      }
    }
    return S;
  }
  updateResult(t) {
    const n = C(this, Ve), r = this.createResult(C(this, ie), this.options);
    if (W(this, on, C(this, ie).state), W(this, Ln, this.options), C(this, on).data !== void 0 && W(this, Dn, C(this, ie)), Wo(r, n))
      return;
    W(this, Ve, r);
    const a = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: s } = this.options, l = typeof s == "function" ? s() : s;
      if (l === "all" || !l && !C(this, Bn).size)
        return !0;
      const i = new Set(
        l ?? C(this, Bn)
      );
      return this.options.throwOnError && i.add("error"), Object.keys(C(this, Ve)).some((c) => {
        const u = c;
        return C(this, Ve)[u] !== n[u] && i.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (a.listeners = !0), oe(this, de, Au).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, de, Zo).call(this);
  }
}, qe = new WeakMap(), ie = new WeakMap(), Cr = new WeakMap(), Ve = new WeakMap(), on = new WeakMap(), Ln = new WeakMap(), $t = new WeakMap(), St = new WeakMap(), Sr = new WeakMap(), Fn = new WeakMap(), Dn = new WeakMap(), sn = new WeakMap(), cn = new WeakMap(), Ht = new WeakMap(), Bn = new WeakMap(), de = new WeakSet(), ar = function(t) {
  oe(this, de, ti).call(this);
  let n = C(this, ie).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(ot)), n;
}, qo = function() {
  oe(this, de, Jo).call(this);
  const t = Tn(
    this.options.staleTime,
    C(this, ie)
  );
  if (pn || C(this, Ve).isStale || !zo(t))
    return;
  const r = bu(C(this, Ve).dataUpdatedAt, t) + 1;
  W(this, sn, setTimeout(() => {
    C(this, Ve).isStale || this.updateResult();
  }, r));
}, Xo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, ie)) : this.options.refetchInterval) ?? !1;
}, Yo = function(t) {
  oe(this, de, ei).call(this), W(this, Ht, t), !(pn || ft(this.options.enabled, C(this, ie)) === !1 || !zo(C(this, Ht)) || C(this, Ht) === 0) && W(this, cn, setInterval(() => {
    (this.options.refetchIntervalInBackground || Oi.isFocused()) && oe(this, de, ar).call(this);
  }, C(this, Ht)));
}, Zo = function() {
  oe(this, de, qo).call(this), oe(this, de, Yo).call(this, oe(this, de, Xo).call(this));
}, Jo = function() {
  C(this, sn) && (clearTimeout(C(this, sn)), W(this, sn, void 0));
}, ei = function() {
  C(this, cn) && (clearInterval(C(this, cn)), W(this, cn, void 0));
}, ti = function() {
  const t = C(this, qe).getQueryCache().build(C(this, qe), this.options);
  if (t === C(this, ie))
    return;
  const n = C(this, ie);
  W(this, ie, t), W(this, Cr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Au = function(t) {
  je.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(C(this, Ve));
    }), C(this, qe).getQueryCache().notify({
      query: C(this, ie),
      type: "observerResultsUpdated"
    });
  });
}, cc);
function b0(e, t) {
  return ft(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function qs(e, t) {
  return b0(e, t) || e.state.data !== void 0 && ni(e, t, t.refetchOnMount);
}
function ni(e, t, n) {
  if (ft(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Ii(e, t);
  }
  return !1;
}
function Xs(e, t, n, r) {
  return (e !== t || ft(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Ii(e, n);
}
function Ii(e, t) {
  return ft(t.enabled, e) !== !1 && e.isStaleByTime(Tn(t.staleTime, e));
}
function x0(e, t) {
  return !Wo(e.getCurrentResult(), t);
}
var ku = p.createContext(
  void 0
), Nu = (e) => {
  const t = p.useContext(ku);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, C0 = ({
  client: e,
  children: t
}) => (p.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ y.jsx(ku.Provider, { value: e, children: t })), Pu = p.createContext(!1), S0 = () => p.useContext(Pu);
Pu.Provider;
function E0() {
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
var w0 = p.createContext(E0()), T0 = () => p.useContext(w0);
function A0(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function k0() {
}
var N0 = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, P0 = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, R0 = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && A0(n, [e.error, r]), M0 = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, O0 = (e, t) => e.isLoading && e.isFetching && !t, I0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ys = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function _0(e, t, n) {
  var u, d, f, g, v;
  if (Q.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = Nu(), a = S0(), o = T0(), s = r.defaultQueryOptions(e);
  (d = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    s
  ), s._optimisticResults = a ? "isRestoring" : "optimistic", M0(s), N0(s, o), P0(o);
  const l = !r.getQueryCache().get(s.queryHash), [i] = p.useState(
    () => new t(
      r,
      s
    )
  ), c = i.getOptimisticResult(s);
  if (p.useSyncExternalStore(
    p.useCallback(
      (m) => {
        const h = a ? () => {
        } : i.subscribe(je.batchCalls(m));
        return i.updateResult(), h;
      },
      [i, a]
    ),
    () => i.getCurrentResult(),
    () => i.getCurrentResult()
  ), p.useEffect(() => {
    i.setOptions(s, { listeners: !1 });
  }, [s, i]), I0(s, c))
    throw Ys(s, i, o);
  if (R0({
    result: c,
    errorResetBoundary: o,
    throwOnError: s.throwOnError,
    query: r.getQueryCache().get(s.queryHash)
  }))
    throw c.error;
  if ((g = (f = r.getDefaultOptions().queries) == null ? void 0 : f._experimental_afterQuery) == null || g.call(
    f,
    s,
    c
  ), s.experimental_prefetchInRender && !pn && O0(c, a)) {
    const m = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ys(s, i, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (v = r.getQueryCache().get(s.queryHash)) == null ? void 0 : v.promise
    );
    m == null || m.catch(k0).finally(() => {
      i.updateResult();
    });
  }
  return s.notifyOnChangeProps ? c : i.trackResult(c);
}
function Ar(e, t) {
  return _0(e, y0);
}
const j0 = async () => {
  const { data: e } = await Le.get("/user-assets/token-prices");
  return e;
}, L0 = (e) => Ar({
  queryKey: ["tokenPrices"],
  queryFn: j0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  staleTime: Nc(kc),
  ...e
}), F0 = async (e) => {
  const t = Ee.getToken(e), { address: n } = $e.all(), r = await t.getBalance(n);
  return or(r) || "0";
}, D0 = async () => {
  const e = Ee.createTokenMap(() => "0"), t = Object.values(Re), n = await Promise.all(t.map((r) => F0(r)));
  return t.reduce((r, a, o) => ({
    ...r,
    [a]: n[o] || "0"
  }), e);
}, B0 = () => Ar({
  queryKey: ["tokenBalances"],
  queryFn: D0,
  enabled: !0,
  retry: !1,
  gcTime: 0
});
var Ru = {};
/*! For license information please see index.js.LICENSE.txt */
(function(e) {
  (() => {
    var t = { 365: (l, i, c) => {
      c.d(i, { A: () => v });
      var u = c(601), d = c.n(u), f = c(314), g = c.n(f)()(d());
      g.push([l.id, `.vi {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  color: transparent;
  background: transparent;
  caret-color: transparent;
  outline: none;
  border: 0 none transparent;
}

.vi::-ms-reveal,
.vi::-ms-clear {
  display: none;
}

.vi::selection {
  background: transparent;
}

/* :where() gives the styles specificity 0, which makes them overridable */
:where(.vi__container) {
  position: relative;
  display: flex;
  gap: 8px;
  height: 50px;
  width: 300px;
}

:where(.vi__character) {
  height: 100%;
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  color: black;
  background-color: white;
  border: 1px solid black;
  cursor: default;
  user-select: none;
  box-sizing: border-box;
}

:where(.vi__character--inactive) {
  color: dimgray;
  background-color: lightgray;
}

:where(.vi__character--selected) {
  outline: 2px solid cornflowerblue;
  color: cornflowerblue;
}
`, ""]);
      const v = g;
    }, 314: (l) => {
      l.exports = function(i) {
        var c = [];
        return c.toString = function() {
          return this.map(function(u) {
            var d = "", f = u[5] !== void 0;
            return u[4] && (d += "@supports (".concat(u[4], ") {")), u[2] && (d += "@media ".concat(u[2], " {")), f && (d += "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")), d += i(u), f && (d += "}"), u[2] && (d += "}"), u[4] && (d += "}"), d;
          }).join("");
        }, c.i = function(u, d, f, g, v) {
          typeof u == "string" && (u = [[null, u, void 0]]);
          var m = {};
          if (f) for (var h = 0; h < this.length; h++) {
            var A = this[h][0];
            A != null && (m[A] = !0);
          }
          for (var E = 0; E < u.length; E++) {
            var b = [].concat(u[E]);
            f && m[b[0]] || (v !== void 0 && (b[5] === void 0 || (b[1] = "@layer".concat(b[5].length > 0 ? " ".concat(b[5]) : "", " {").concat(b[1], "}")), b[5] = v), d && (b[2] && (b[1] = "@media ".concat(b[2], " {").concat(b[1], "}")), b[2] = d), g && (b[4] ? (b[1] = "@supports (".concat(b[4], ") {").concat(b[1], "}"), b[4] = g) : b[4] = "".concat(g)), c.push(b));
          }
        }, c;
      };
    }, 601: (l) => {
      l.exports = function(i) {
        return i[1];
      };
    }, 942: (l, i) => {
      var c;
      (function() {
        var u = {}.hasOwnProperty;
        function d() {
          for (var v = "", m = 0; m < arguments.length; m++) {
            var h = arguments[m];
            h && (v = g(v, f(h)));
          }
          return v;
        }
        function f(v) {
          if (typeof v == "string" || typeof v == "number") return v;
          if (typeof v != "object") return "";
          if (Array.isArray(v)) return d.apply(null, v);
          if (v.toString !== Object.prototype.toString && !v.toString.toString().includes("[native code]")) return v.toString();
          var m = "";
          for (var h in v) u.call(v, h) && v[h] && (m = g(m, h));
          return m;
        }
        function g(v, m) {
          return m ? v ? v + " " + m : v + m : v;
        }
        l.exports ? (d.default = d, l.exports = d) : (c = (function() {
          return d;
        }).apply(i, [])) === void 0 || (l.exports = c);
      })();
    } }, n = {};
    function r(l) {
      var i = n[l];
      if (i !== void 0) return i.exports;
      var c = n[l] = { id: l, exports: {} };
      return t[l](c, c.exports, r), c.exports;
    }
    r.n = (l) => {
      var i = l && l.__esModule ? () => l.default : () => l;
      return r.d(i, { a: i }), i;
    }, r.d = (l, i) => {
      for (var c in i) r.o(i, c) && !r.o(l, c) && Object.defineProperty(l, c, { enumerable: !0, get: i[c] });
    }, r.o = (l, i) => Object.prototype.hasOwnProperty.call(l, i), r.r = (l) => {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(l, "__esModule", { value: !0 });
    };
    var a = {};
    (() => {
      r.r(a), r.d(a, { default: () => k });
      const l = p;
      var i = r.n(l), c = r(942), u = r.n(c), d = r(365), f = ["className", "type"], g = ["className"];
      function v() {
        return v = Object.assign ? Object.assign.bind() : function(x) {
          for (var w = 1; w < arguments.length; w++) {
            var S = arguments[w];
            for (var T in S) ({}).hasOwnProperty.call(S, T) && (x[T] = S[T]);
          }
          return x;
        }, v.apply(null, arguments);
      }
      function m(x, w) {
        if (x == null) return {};
        var S, T, P = function(_, B) {
          if (_ == null) return {};
          var O = {};
          for (var I in _) if ({}.hasOwnProperty.call(_, I)) {
            if (B.includes(I)) continue;
            O[I] = _[I];
          }
          return O;
        }(x, w);
        if (Object.getOwnPropertySymbols) {
          var L = Object.getOwnPropertySymbols(x);
          for (T = 0; T < L.length; T++) S = L[T], w.includes(S) || {}.propertyIsEnumerable.call(x, S) && (P[S] = x[S]);
        }
        return P;
      }
      function h(x, w) {
        return function(S) {
          if (Array.isArray(S)) return S;
        }(x) || function(S, T) {
          var P = S == null ? null : typeof Symbol < "u" && S[Symbol.iterator] || S["@@iterator"];
          if (P != null) {
            var L, _, B, O, I = [], $ = !0, R = !1;
            try {
              if (B = (P = P.call(S)).next, T !== 0) for (; !($ = (L = B.call(P)).done) && (I.push(L.value), I.length !== T); $ = !0) ;
            } catch (N) {
              R = !0, _ = N;
            } finally {
              try {
                if (!$ && P.return != null && (O = P.return(), Object(O) !== O)) return;
              } finally {
                if (R) throw _;
              }
            }
            return I;
          }
        }(x, w) || A(x, w) || function() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function A(x, w) {
        if (x) {
          if (typeof x == "string") return E(x, w);
          var S = {}.toString.call(x).slice(8, -1);
          return S === "Object" && x.constructor && (S = x.constructor.name), S === "Map" || S === "Set" ? Array.from(x) : S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S) ? E(x, w) : void 0;
        }
      }
      function E(x, w) {
        (w == null || w > x.length) && (w = x.length);
        for (var S = 0, T = Array(w); S < w; S++) T[S] = x[S];
        return T;
      }
      var b = (0, l.forwardRef)(function(x, w) {
        var S = x.value, T = x.length, P = T === void 0 ? 6 : T, L = x.validChars, _ = L === void 0 ? "A-Za-z0-9" : L, B = x.placeholder, O = B === void 0 ? "·" : B, I = x.autoFocus, $ = I !== void 0 && I, R = x.passwordMode, N = R !== void 0 && R, M = x.passwordChar, j = M === void 0 ? "*" : M, D = x.inputProps, F = D === void 0 ? {} : D, z = x.containerProps, H = z === void 0 ? {} : z, G = x.classNames, K = G === void 0 ? {} : G, te = x.onChange, Z = x.onFocus, ke = x.onBlur, be = x.onComplete, ye = h((0, l.useState)(""), 2), Ke = ye[0], Ne = ye[1], xe = h((0, l.useState)(!1), 2), V = xe[0], De = xe[1], fe = (0, l.useRef)(null);
        (0, l.useEffect)(function() {
          $ && fe.current.focus();
        }, [$]), (0, l.useEffect)(function() {
          F.disabled && De(!1);
        }, [F.disabled]);
        var Oe, Qe = function() {
          fe.current.focus();
        }, Me = function() {
          return S ?? Ke;
        }, ge = function(se) {
          var pe = Me();
          return (pe.length === se || pe.length === se + 1 && P === se + 1) && V;
        }, he = function(se) {
          return Me().length < se;
        }, Pe = function(se) {
          return Me().length > se;
        }, He = F.className, Ue = F.type, Ye = m(F, f), Ot = H.className, vn = m(H, g);
        return i().createElement(i().Fragment, null, i().createElement("div", v({ "data-testid": "container", className: u()("vi__container", K.container, Ot), onClick: function() {
          return fe.current.focus();
        } }, vn), i().createElement("input", v({ "aria-label": "verification input", spellCheck: !1, value: Me(), onChange: function(se) {
          var pe = se.target.value.replace(/\s/g, "");
          RegExp("^[".concat(_, "]{0,").concat(P, "}$")).test(pe) && (te == null || te(pe), Ne(pe), pe.length === P && (be == null || be(pe)));
        }, ref: function(se) {
          fe.current = se, typeof w == "function" ? w(se) : w && (w.current = se);
        }, className: u()("vi", He), onKeyDown: function(se) {
          ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(se.key) && se.preventDefault();
        }, onFocus: function() {
          De(!0), Z == null || Z();
        }, onBlur: function() {
          De(!1), ke == null || ke();
        }, onSelect: function(se) {
          var pe = se.target.value;
          se.target.setSelectionRange(pe.length, pe.length);
        }, type: N ? "password" : Ue }, Ye)), (Oe = Array(P), function(se) {
          if (Array.isArray(se)) return E(se);
        }(Oe) || function(se) {
          if (typeof Symbol < "u" && se[Symbol.iterator] != null || se["@@iterator"] != null) return Array.from(se);
        }(Oe) || A(Oe) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }()).map(function(se, pe) {
          return i().createElement("div", { className: u()("vi__character", K.character, { "vi__character--selected": ge(pe), "vi__character--inactive": he(pe), "vi__character--filled": Pe(pe) }, ge(pe) && K.characterSelected, he(pe) && K.characterInactive, Pe(pe) && K.characterFilled), onClick: Qe, id: "field-".concat(pe), "data-testid": "character-".concat(pe), key: pe }, N && Me()[pe] ? j : Me()[pe] || O);
        })), i().createElement("style", { dangerouslySetInnerHTML: { __html: d.A } }));
      });
      b.displayName = "VerificationInput";
      const k = b;
    })();
    var o = e;
    for (var s in a) o[s] = a[s];
    a.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
  })();
})(Ru);
const $0 = /* @__PURE__ */ Cc(Ru);
function Mu({
  isOpen: e,
  onClose: t,
  onVerify: n,
  loading: r = !1,
  modalClassName: a = "",
  message: o = "To complete this action securely, please enter the 6-digit verification code we sent to your email address."
}) {
  const [s, l] = p.useState("");
  return p.useEffect(() => {
    e || l("");
  }, [e]), /* @__PURE__ */ y.jsx(
    yu,
    {
      isOpen: e,
      onClose: t,
      title: "Verification Code",
      containerClassName: "w-[343px] tablet:w-[420px]",
      className: a,
      children: /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("p", { className: "text-sm text-gray-500 mb-6", children: o }),
        /* @__PURE__ */ y.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ y.jsx(
          $0,
          {
            length: 6,
            placeholder: "",
            validChars: "0-9",
            autoFocus: !0,
            classNames: {
              container: "container",
              character: re(
                "w-10 h-12 rounded-md border border-input text-lg font-medium",
                "flex items-center justify-center mx-1",
                "focus:border-foreground focus:ring-0"
              )
            },
            value: s,
            onChange: l
          }
        ) }),
        /* @__PURE__ */ y.jsx("p", { className: "text-xs text-gray-400 mb-6", children: "It may take a few minutes to receive the code. Please wait patiently." }),
        /* @__PURE__ */ y.jsx(
          Wt,
          {
            className: "w-full",
            disabled: s.length !== 6 || r,
            onClick: () => n(s),
            children: r ? /* @__PURE__ */ y.jsx(hi, {}) : "Verify"
          }
        )
      ] })
    }
  );
}
class H0 {
  constructor() {
    // private verifyMethod: OTPVerifyMethod = 'email-by-nodemailer';
    ve(this, "verifyMethod", "email-by-sendgrid");
  }
  setVerifyMethod(t) {
    this.verifyMethod = t;
  }
  getVerifyMethod() {
    return this.verifyMethod;
  }
}
const An = new H0();
Object.freeze(An);
function U0({
  isOpen: e,
  onClose: t,
  defaultLimits: n
}) {
  const r = Nu(), { data: a } = B0(), { data: o } = L0(), [s, l] = p.useState(null), [i, c] = p.useState(!1), [u, d] = p.useState(Ee.createTokenMap(() => "")), [f, g] = p.useState(!1), [v, m] = p.useState(!1), [h, A] = p.useState([]);
  p.useEffect(() => {
    e && b();
  }, [e]);
  const E = p.useMemo(() => Ee.getAllTokens().some((O) => !u[O.tokenType]), [u]), b = async () => {
    k(), d(n);
  }, k = async () => {
    try {
      const { data: O } = await Le.post("/transaction/outbound-amount", {
        tokens: Ee.getAllTokens().map((I) => I.tokenType)
      });
      l(O);
    } catch (O) {
      console.error("Failed to fetch token transferred:", O);
    }
  }, x = p.useMemo(() => Ee.getAllTokens().map((O) => ({
    type: O.tokenType,
    balance: (a == null ? void 0 : a[O.tokenType]) || "0",
    todayTransferred: (s == null ? void 0 : s[O.tokenType]) || "0"
  })), [a, s]), w = (O, I) => {
    I && !/^\d*\.?\d*$/.test(I) || d(($) => ({
      ...$,
      [O]: I
    }));
  }, S = (O, I) => {
    if (!I || !o || !o[O]) return "0";
    const $ = parseFloat(o[O]), R = parseFloat(I);
    return isNaN($) || isNaN(R) ? "0" : ($ * R).toFixed(2);
  }, T = async () => {
    rt(u, "limits");
    try {
      c(!0);
      const O = Ee.getAllTokens().map((I) => ({
        type: I.tokenType,
        value: zr(u[I.tokenType] || "0").toString()
      }));
      A(O), await Le.post("/auth/generate-otp-for-daily-limit-update", {
        limits: O
      }), An.getVerifyMethod() === "email-by-nodemailer" ? (We.info("Please check your email to confirm the transaction limit update", {
        autoClose: !1,
        closeButton: !0
      }), t()) : An.getVerifyMethod() === "email-by-sendgrid" && g(!0);
    } catch (O) {
      const I = ln(O);
      We.error(I.message);
    } finally {
      c(!1);
    }
  }, P = async (O) => {
    try {
      m(!0), await Le.post("/user/update-daily-withdrawal-limits-with-otp", {
        otp: O,
        limits: h
      }), We.success("Daily transaction limit successfully updated"), g(!1), r.invalidateQueries({ queryKey: ["dailyWithdrawalLimits"] }), t(!0);
    } catch (I) {
      const $ = ln(I);
      We.error($.message);
    } finally {
      m(!1);
    }
  }, L = (O) => O == null ? "0" : qt(BigInt(O)), _ = () => {
    t();
  }, B = /* @__PURE__ */ y.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ y.jsx(Wt, { className: "hidden tablet:block", variant: "outline", onClick: () => _(), children: "Cancel" }),
    /* @__PURE__ */ y.jsx(
      Wt,
      {
        className: "w-full tablet:w-auto",
        disabled: E || i,
        onClick: () => {
          T();
        },
        children: i ? /* @__PURE__ */ y.jsx(hi, {}) : "Save"
      }
    )
  ] });
  return /* @__PURE__ */ y.jsxs(
    yu,
    {
      isOpen: e,
      onClose: t,
      title: "Daily Transaction Limit",
      footer: B,
      contentClassName: "p-6 max-h-[80vh] overflow-y-auto",
      className: "z-[10002]",
      children: [
        x.map((O, I) => /* @__PURE__ */ y.jsxs("div", { className: I > 0 ? "mt-6" : "", children: [
          /* @__PURE__ */ y.jsxs("p", { className: "text-black text-sm font-medium leading-none mb-[6px]", children: [
            O.type,
            " daily limit"
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: re(
            "tablet:flex items-center justify-between"
          ), children: [
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none", children: [
              /* @__PURE__ */ y.jsx(
                na,
                {
                  className: "w-[131px] text-black",
                  value: u[O.type],
                  onChange: ($) => w(O.type, $.target.value),
                  placeholder: "Enter limit",
                  disabled: i
                }
              ),
              /* @__PURE__ */ y.jsxs("p", { children: [
                "~",
                S(O.type, u[O.type]),
                " USDT"
              ] })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: re(
              "flex items-center gap-2 text-sm font-normal leading-none",
              "mt-[20px] tablet:mt-0"
            ), children: [
              /* @__PURE__ */ y.jsx("p", { className: "text-[#a1a1a1]", children: "Balance:" }),
              /* @__PURE__ */ y.jsxs("p", { className: "text-black", children: [
                O.balance,
                " ",
                O.type
              ] })
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
            /* @__PURE__ */ y.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
            /* @__PURE__ */ y.jsx("p", { className: "text-black text-xs font-normal leading-none", children: i ? "" : `You've transferred ${L(O.todayTransferred ?? "0")} ${Ee.getToken(O.type).symbol} today` })
          ] })
        ] }, O.type)),
        /* @__PURE__ */ y.jsx(
          Mu,
          {
            isOpen: f,
            onClose: () => g(!1),
            loading: v,
            onVerify: P,
            message: "To update your daily transaction limits, please enter the verification code we sent to your email.",
            modalClassName: "z-[10004]"
          }
        )
      ]
    }
  );
}
const z0 = Ee.createTokenMap(() => "0"), V0 = async () => {
  const { data: e } = await Le.get("/transaction/default-daily-withdrawal-limits", {
    params: {
      includeUserLimits: !0
    }
  });
  return Object.values(Re).reduce((n, r) => (n[r] = qt(BigInt(e[r] ?? 0)), n), {});
}, W0 = (e) => Ar({
  queryKey: ["dailyWithdrawalLimits"],
  queryFn: V0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  gcTime: 0,
  staleTime: 0,
  initialData: z0,
  ...e
}), G0 = Ee.getAllTokens();
function K0({
  open: e,
  setOpen: t,
  balance: n,
  address: r,
  tokenType: a,
  defaultTo: o,
  defaultAmount: s,
  defaultNote: l,
  onClose: i
}) {
  const [c, u] = p.useState(""), [d, f] = p.useState(""), [g, v] = p.useState(""), [m, h] = p.useState(!1), A = p.useRef(), [E, b] = p.useState(!1), { data: k } = W0(), [x, w] = p.useState(null), [S, T] = p.useState(a), [P, L] = p.useState("0"), [_, B] = p.useState(""), [O, I] = p.useState(!1), [$, R] = p.useState(!1), [N, M] = p.useState(!1), [j, D] = p.useState(!1), [F, z] = p.useState(""), [H, G] = p.useState(""), [K, te] = p.useState(""), { t: Z } = di(), ke = Gi(d, 800), be = Gi(c, 800), ye = p.useRef(null), [Ke, Ne] = p.useState(0), xe = p.useMemo(() => S ? Ee.getToken(S).symbol : "", [S]), V = p.useMemo(() => S ? Ee.getToken(S).gasSymbol : "", [S]), [De, fe] = p.useState(!1), [Oe, Qe] = p.useState(!1), [Me, ge] = p.useState(null);
  p.useEffect(() => {
    ye.current && setTimeout(() => {
      var ce;
      const ee = (ce = ye.current) == null ? void 0 : ce.getBoundingClientRect().width;
      ee && Ne(ee + 34);
    }, 0);
  }, [xe, e]), p.useEffect(() => {
    rt("open", e, "address", r), e ? he() : Yn();
  }, [o, s, l, e]), p.useEffect(() => {
    c && d && $ && (Xn(), vn(c), Nr(), R(!1));
  }, [c, d, $, e]), p.useEffect(() => {
    !e && i && i();
  }, [e]), p.useEffect(() => {
    Xn(), be && vn(be), ke && !He && !O && Nr();
  }, [ke, be]);
  const he = async () => {
    await Ot(a), o && u(o), s && f(s), l && v(l), Ue(), R(!0);
  }, Pe = p.useMemo(() => k[S], [S, k]), He = p.useMemo(() => !c || !d || m || !j || N || !!H && H !== Z("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(d) > parseFloat(P) || O, [c, d, m, j, N, H, P, O]), Ue = async () => {
    try {
      const { data: ee } = await Le.post("/transaction/outbound-amount", {
        tokens: Ee.getAllTokens().map((ce) => ce.tokenType)
      });
      w(ee);
    } catch (ee) {
      console.error("Failed to fetch token transferred:", ee);
    }
  }, Ye = () => {
    const ee = /* @__PURE__ */ y.jsx("div", { className: "cursor-pointer", onClick: () => {
      Uo.destroy();
    }, children: "Ok" });
    Uo.open({
      message: "Daily transaction limit exceeded",
      description: /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("p", { children: "Please check your email and verify by the OTP." }),
        /* @__PURE__ */ y.jsx("p", { children: "You can change yur dailiy transaction limit under profile page." })
      ] }),
      placement: "top",
      duration: 0,
      btn: ee
    });
  }, Ot = async (ee) => {
    f(""), I(!1), B(""), te(""), T(ee);
    const ce = Ee.getToken(ee);
    A.current = ce;
    let we = await ce.getBalance(r);
    we = or(we), L(we);
  }, vn = async (ee) => {
    if (Jr(c))
      D(!0), z(""), G("");
    else {
      M(!0), G("");
      try {
        const ce = await Le.get("/address/", {
          params: { email: ee }
        });
        ce.data.success ? (D(!0), z(ce.data.address)) : Vi.test(ee) ? (D(!0), z(""), G(Z("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (D(!1), z(""), G(Z("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        M(!1);
      }
    }
  }, se = () => {
    rt("to", c), c || (D(!1), z(""), G(""));
  };
  async function pe(ee) {
    try {
      const ce = zr(d).toString();
      rt("amt", ce), h(!0);
      const {
        needOtp: we,
        hash: mt,
        message: Zn,
        transactionId: Jn
      } = await Wi.signTransaction({
        toAddress: ee,
        amount: ce,
        token: S,
        note: g,
        transactionType: Rc.TRANSFER
      });
      if (mt)
        return t(!1), kr(mt), !0;
      if (we) {
        if (rt("otpService.getVerifyMethod()", An.getVerifyMethod()), An.getVerifyMethod() === "email-by-sendgrid")
          return fe(!0), ge(Jn), !1;
        if (An.getVerifyMethod() === "email-by-nodemailer")
          return Ye(), !0;
      }
    } catch (ce) {
      const we = ln(ce);
      rt("errorInfo", we), We.error(we.message);
    } finally {
      h(!1);
    }
  }
  const Ta = (ee) => {
    var we;
    const ce = `${(we = A.current) == null ? void 0 : we.scanTransactionUrl}/${ee}`;
    window.open(ce, "_blank");
  }, kr = (ee) => {
    We(
      /* @__PURE__ */ y.jsx("div", { className: "w-full", children: /* @__PURE__ */ y.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ y.jsx(qa, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ y.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ y.jsx(
            Wt,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Ta(ee);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, Aa = async () => {
    if (!He)
      try {
        h(!0);
        let ee, ce;
        if (Jr(c))
          ee = c;
        else if (Vi.test(c) && H === Z("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          ce = c;
          const mt = await Le.post("/invite/invite-register", {
            toEmail: ce,
            from: r,
            amount: zr(d).toString(),
            token: S,
            note: g
          });
          rt("res", mt), We.success(Z("/dashboard.[token].sendModal.emailSentToUnregistered")), Yn(), t(!1);
          return;
        } else
          ee = F;
        await pe(ee) && (Yn(), t(!1));
      } catch (ee) {
        const ce = ln(ee);
        rt("errorInfo", ce), We.error(Z("/dashboard.[token].sendModal.sendError"));
      } finally {
        h(!1);
      }
  }, Xn = async () => {
    parseFloat(d) > parseFloat(P) ? te("Amount exceeded") : te("");
  }, Nr = async () => {
    if (d && !He) {
      I(!0);
      try {
        rt("checkEstimatedFee", d);
        const ee = await Jd({
          tokenType: S,
          transferParams: {
            to: r,
            amount: zr(d)
          },
          fromAddress: r
        });
        B(ee ? ee.feeInTokens.toString() : "");
      } catch (ee) {
        rt("Failed to get estimated fee:", ee), B("");
      } finally {
        I(!1);
      }
    }
  }, Yn = () => {
    f(""), u(""), v(""), z(""), G(""), D(!1), M(!1), B("");
  }, ka = async (ee) => {
    f(ee.target.value.trim()), parseFloat(d) > parseFloat(P) ? te("Amount exceeded") : te("");
  }, Na = p.useMemo(() => {
    const ee = (x == null ? void 0 : x[S]) || "0";
    return or(qt(BigInt(ee)));
  }, [S, x]), Pa = async (ee) => {
    if (!Me) {
      We.error("No transaction id");
      return;
    }
    try {
      Qe(!0);
      const { hash: ce, token: we } = await Wi.signTransactionWithOTP({
        transactionId: Me,
        otp: ee
      });
      ce && (fe(!1), t(!1), kr(ce));
    } catch (ce) {
      const we = ln(ce);
      We.error(we.message);
    } finally {
      Qe(!1);
    }
  }, Ra = e ? /* @__PURE__ */ y.jsxs("div", { className: "fixed inset-0 z-[10001] flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ y.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ y.jsx("div", { className: re(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ y.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ y.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ y.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: Z("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: () => t(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ y.jsx(ui, {})
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "p-6 border-b border-[#EBEBEB] max-h-[70vh] overflow-y-auto", children: /* @__PURE__ */ y.jsxs("form", { children: [
        /* @__PURE__ */ y.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: Z("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ y.jsx(
              na,
              {
                value: c,
                onChange: (ee) => u(ee.target.value.trim()),
                onBlur: se,
                id: "to",
                required: !0,
                placeholder: Z("/dashboard.[token].sendModal.toPlaceholder"),
                className: re(
                  j && "border-green-500",
                  H && "border-destructive",
                  H === Z("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            N && /* @__PURE__ */ y.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ y.jsx(vd, { className: "animate-spin", size: 16 }) }),
            j && !N && !H && /* @__PURE__ */ y.jsx(qa, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            H && !N && /* @__PURE__ */ y.jsx(Sc, { className: re(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              H === Z("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          j && F && /* @__PURE__ */ y.jsx("p", { className: "mt-1 text-xs text-primary/60", children: F }),
          H && /* @__PURE__ */ y.jsx("p", { className: re(
            "mt-1 text-xs text-destructive",
            H === Z("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: H })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ y.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: Z("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ y.jsx(
              na,
              {
                value: d,
                onChange: ka,
                type: "number",
                inputMode: "decimal",
                id: "amount",
                className: re(
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                ),
                required: !0,
                onBlur: Xn,
                style: {
                  paddingLeft: `${Ke}px`
                }
              }
            ),
            /* @__PURE__ */ y.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ y.jsxs(lf, { children: [
              /* @__PURE__ */ y.jsxs(uf, { className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
                /* @__PURE__ */ y.jsx("span", { ref: ye, className: "font-medium text-sm", children: xe }),
                /* @__PURE__ */ y.jsx(yd, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ y.jsx(Mc, { align: "start", className: "bg-white", children: G0.map((ee) => /* @__PURE__ */ y.jsx(Oc, { onClick: () => Ot(ee.tokenType), children: ee.symbol }, ee.tokenType)) })
            ] }) })
          ] }),
          K && /* @__PURE__ */ y.jsx("p", { className: "mt-1 text-xs text-destructive", children: K })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ y.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          O ? /* @__PURE__ */ y.jsx("span", { children: /* @__PURE__ */ y.jsx(bd, { className: "animate-spin", size: 14 }) }) : _ ? /* @__PURE__ */ y.jsxs("span", { className: "text-black", children: [
            "~ ",
            _,
            " ",
            V
          ] }) : /* @__PURE__ */ y.jsx("span", { className: "text-black", children: "-" })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col gap-2 mb-[20px]", children: [
          /* @__PURE__ */ y.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ y.jsxs("p", { className: "text-[#979797] text-sm leading-none", children: [
              "Daily limit: ",
              /* @__PURE__ */ y.jsxs("span", { children: [
                Pe,
                " ",
                xe
              ] })
            ] }),
            /* @__PURE__ */ y.jsx(
              Wt,
              {
                variant: "outline",
                className: "h-[24px] py-1 px-2 text-xs",
                onClick: () => b(!0),
                type: "button",
                children: "Change limit"
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("div", { className: "border border-black/10 bg-black/5 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
            /* @__PURE__ */ y.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
            /* @__PURE__ */ y.jsxs("p", { className: "text-black text-xs font-normal leading-none", children: [
              "You've transferred ",
              Yd(Na),
              " ",
              xe,
              " today"
            ] })
          ] })
        ] }),
        _ && _ !== "0" && /* @__PURE__ */ y.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ y.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ y.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ y.jsxs("span", { className: "text-black", children: [
            or(P),
            " ",
            xe
          ] })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ y.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: Z("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ y.jsx("div", { className: "relative", children: /* @__PURE__ */ y.jsx(
            Pc,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: g,
              onChange: (ee) => v(ee.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ y.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ y.jsx(
        Wt,
        {
          onClick: Aa,
          className: re("py-12px"),
          disabled: He,
          children: m ? /* @__PURE__ */ y.jsx("div", { className: "", children: /* @__PURE__ */ y.jsx(hi, {}) }) : /* @__PURE__ */ y.jsx("span", { children: Z("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ y.jsx(
      U0,
      {
        isOpen: E,
        onClose: () => b(!1),
        defaultLimits: k
      }
    ),
    /* @__PURE__ */ y.jsx(
      Mu,
      {
        isOpen: De,
        onClose: () => fe(!1),
        loading: Oe,
        onVerify: Pa,
        message: "Your transaction exceeds the daily limit. Please enter the verification code we sent to your email to proceed.",
        modalClassName: "z-[10004]"
      }
    )
  ] }) : null;
  if (typeof window < "u")
    return cr.createPortal(
      Ra,
      document.body
    );
}
const Q0 = ad, Ou = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  yc,
  {
    ref: n,
    className: re(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Ou.displayName = yc.displayName;
const ri = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  bc,
  {
    ref: n,
    className: re(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
ri.displayName = bc.displayName;
const ai = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  xc,
  {
    ref: n,
    className: re(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
ai.displayName = xc.displayName;
var q0 = Object.defineProperty, fa = Object.getOwnPropertySymbols, Iu = Object.prototype.hasOwnProperty, _u = Object.prototype.propertyIsEnumerable, Zs = (e, t, n) => t in e ? q0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oi = (e, t) => {
  for (var n in t || (t = {}))
    Iu.call(t, n) && Zs(e, n, t[n]);
  if (fa)
    for (var n of fa(t))
      _u.call(t, n) && Zs(e, n, t[n]);
  return e;
}, ii = (e, t) => {
  var n = {};
  for (var r in e)
    Iu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && fa)
    for (var r of fa(e))
      t.indexOf(r) < 0 && _u.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var mn;
((e) => {
  const t = class ae {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(i, c, u, d) {
      if (this.version = i, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], i < ae.MIN_VERSION || i > ae.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (d < -1 || d > 7)
        throw new RangeError("Mask value out of range");
      this.size = i * 4 + 17;
      let f = [];
      for (let v = 0; v < this.size; v++)
        f.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(f.slice()), this.isFunction.push(f.slice());
      this.drawFunctionPatterns();
      const g = this.addEccAndInterleave(u);
      if (this.drawCodewords(g), d == -1) {
        let v = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const h = this.getPenaltyScore();
          h < v && (d = m, v = h), this.applyMask(m);
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
    static encodeText(i, c) {
      const u = e.QrSegment.makeSegments(i);
      return ae.encodeSegments(u, c);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(i, c) {
      const u = e.QrSegment.makeBytes(i);
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
    static encodeSegments(i, c, u = 1, d = 40, f = -1, g = !0) {
      if (!(ae.MIN_VERSION <= u && u <= d && d <= ae.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let v, m;
      for (v = u; ; v++) {
        const b = ae.getNumDataCodewords(v, c) * 8, k = s.getTotalBits(i, v);
        if (k <= b) {
          m = k;
          break;
        }
        if (v >= d)
          throw new RangeError("Data too long");
      }
      for (const b of [ae.Ecc.MEDIUM, ae.Ecc.QUARTILE, ae.Ecc.HIGH])
        g && m <= ae.getNumDataCodewords(v, b) * 8 && (c = b);
      let h = [];
      for (const b of i) {
        n(b.mode.modeBits, 4, h), n(b.numChars, b.mode.numCharCountBits(v), h);
        for (const k of b.getData())
          h.push(k);
      }
      a(h.length == m);
      const A = ae.getNumDataCodewords(v, c) * 8;
      a(h.length <= A), n(0, Math.min(4, A - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let b = 236; h.length < A; b ^= 253)
        n(b, 8, h);
      let E = [];
      for (; E.length * 8 < h.length; )
        E.push(0);
      return h.forEach((b, k) => E[k >>> 3] |= b << 7 - (k & 7)), new ae(v, c, E, f);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(i, c) {
      return 0 <= i && i < this.size && 0 <= c && c < this.size && this.modules[c][i];
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
      const i = this.getAlignmentPatternPositions(), c = i.length;
      for (let u = 0; u < c; u++)
        for (let d = 0; d < c; d++)
          u == 0 && d == 0 || u == 0 && d == c - 1 || u == c - 1 && d == 0 || this.drawAlignmentPattern(i[u], i[d]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(i) {
      const c = this.errorCorrectionLevel.formatBits << 3 | i;
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
      let i = this.version;
      for (let u = 0; u < 12; u++)
        i = i << 1 ^ (i >>> 11) * 7973;
      const c = this.version << 12 | i;
      a(c >>> 18 == 0);
      for (let u = 0; u < 18; u++) {
        const d = r(c, u), f = this.size - 11 + u % 3, g = Math.floor(u / 3);
        this.setFunctionModule(f, g, d), this.setFunctionModule(g, f, d);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(i, c) {
      for (let u = -4; u <= 4; u++)
        for (let d = -4; d <= 4; d++) {
          const f = Math.max(Math.abs(d), Math.abs(u)), g = i + d, v = c + u;
          0 <= g && g < this.size && 0 <= v && v < this.size && this.setFunctionModule(g, v, f != 2 && f != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(i, c) {
      for (let u = -2; u <= 2; u++)
        for (let d = -2; d <= 2; d++)
          this.setFunctionModule(i + d, c + u, Math.max(Math.abs(d), Math.abs(u)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(i, c, u) {
      this.modules[c][i] = u, this.isFunction[c][i] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(i) {
      const c = this.version, u = this.errorCorrectionLevel;
      if (i.length != ae.getNumDataCodewords(c, u))
        throw new RangeError("Invalid argument");
      const d = ae.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c], f = ae.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c], g = Math.floor(ae.getNumRawDataModules(c) / 8), v = d - g % d, m = Math.floor(g / d);
      let h = [];
      const A = ae.reedSolomonComputeDivisor(f);
      for (let b = 0, k = 0; b < d; b++) {
        let x = i.slice(k, k + m - f + (b < v ? 0 : 1));
        k += x.length;
        const w = ae.reedSolomonComputeRemainder(x, A);
        b < v && x.push(0), h.push(x.concat(w));
      }
      let E = [];
      for (let b = 0; b < h[0].length; b++)
        h.forEach((k, x) => {
          (b != m - f || x >= v) && E.push(k[b]);
        });
      return a(E.length == g), E;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(i) {
      if (i.length != Math.floor(ae.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let c = 0;
      for (let u = this.size - 1; u >= 1; u -= 2) {
        u == 6 && (u = 5);
        for (let d = 0; d < this.size; d++)
          for (let f = 0; f < 2; f++) {
            const g = u - f, m = (u + 1 & 2) == 0 ? this.size - 1 - d : d;
            !this.isFunction[m][g] && c < i.length * 8 && (this.modules[m][g] = r(i[c >>> 3], 7 - (c & 7)), c++);
          }
      }
      a(c == i.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(i) {
      if (i < 0 || i > 7)
        throw new RangeError("Mask value out of range");
      for (let c = 0; c < this.size; c++)
        for (let u = 0; u < this.size; u++) {
          let d;
          switch (i) {
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
      let i = 0;
      for (let f = 0; f < this.size; f++) {
        let g = !1, v = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[f][h] == g ? (v++, v == 5 ? i += ae.PENALTY_N1 : v > 5 && i++) : (this.finderPenaltyAddHistory(v, m), g || (i += this.finderPenaltyCountPatterns(m) * ae.PENALTY_N3), g = this.modules[f][h], v = 1);
        i += this.finderPenaltyTerminateAndCount(g, v, m) * ae.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, v = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[h][f] == g ? (v++, v == 5 ? i += ae.PENALTY_N1 : v > 5 && i++) : (this.finderPenaltyAddHistory(v, m), g || (i += this.finderPenaltyCountPatterns(m) * ae.PENALTY_N3), g = this.modules[h][f], v = 1);
        i += this.finderPenaltyTerminateAndCount(g, v, m) * ae.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const v = this.modules[f][g];
          v == this.modules[f][g + 1] && v == this.modules[f + 1][g] && v == this.modules[f + 1][g + 1] && (i += ae.PENALTY_N2);
        }
      let c = 0;
      for (const f of this.modules)
        c = f.reduce((g, v) => g + (v ? 1 : 0), c);
      const u = this.size * this.size, d = Math.ceil(Math.abs(c * 20 - u * 10) / u) - 1;
      return a(0 <= d && d <= 9), i += d * ae.PENALTY_N4, a(0 <= i && i <= 2568888), i;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const i = Math.floor(this.version / 7) + 2, c = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (i * 2 - 2)) * 2;
        let u = [6];
        for (let d = this.size - 7; u.length < i; d -= c)
          u.splice(1, 0, d);
        return u;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(i) {
      if (i < ae.MIN_VERSION || i > ae.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let c = (16 * i + 128) * i + 64;
      if (i >= 2) {
        const u = Math.floor(i / 7) + 2;
        c -= (25 * u - 10) * u - 55, i >= 7 && (c -= 36);
      }
      return a(208 <= c && c <= 29648), c;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(i, c) {
      return Math.floor(ae.getNumRawDataModules(i) / 8) - ae.ECC_CODEWORDS_PER_BLOCK[c.ordinal][i] * ae.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][i];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(i) {
      if (i < 1 || i > 255)
        throw new RangeError("Degree out of range");
      let c = [];
      for (let d = 0; d < i - 1; d++)
        c.push(0);
      c.push(1);
      let u = 1;
      for (let d = 0; d < i; d++) {
        for (let f = 0; f < c.length; f++)
          c[f] = ae.reedSolomonMultiply(c[f], u), f + 1 < c.length && (c[f] ^= c[f + 1]);
        u = ae.reedSolomonMultiply(u, 2);
      }
      return c;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(i, c) {
      let u = c.map((d) => 0);
      for (const d of i) {
        const f = d ^ u.shift();
        u.push(0), c.forEach((g, v) => u[v] ^= ae.reedSolomonMultiply(g, f));
      }
      return u;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(i, c) {
      if (i >>> 8 || c >>> 8)
        throw new RangeError("Byte out of range");
      let u = 0;
      for (let d = 7; d >= 0; d--)
        u = u << 1 ^ (u >>> 7) * 285, u ^= (c >>> d & 1) * i;
      return a(u >>> 8 == 0), u;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(i) {
      const c = i[1];
      a(c <= this.size * 3);
      const u = c > 0 && i[2] == c && i[3] == c * 3 && i[4] == c && i[5] == c;
      return (u && i[0] >= c * 4 && i[6] >= c ? 1 : 0) + (u && i[6] >= c * 4 && i[0] >= c ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(i, c, u) {
      return i && (this.finderPenaltyAddHistory(c, u), c = 0), c += this.size, this.finderPenaltyAddHistory(c, u), this.finderPenaltyCountPatterns(u);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(i, c) {
      c[0] == 0 && (i += this.size), c.pop(), c.unshift(i);
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
  function n(l, i, c) {
    if (i < 0 || i > 31 || l >>> i)
      throw new RangeError("Value out of range");
    for (let u = i - 1; u >= 0; u--)
      c.push(l >>> u & 1);
  }
  function r(l, i) {
    return (l >>> i & 1) != 0;
  }
  function a(l) {
    if (!l)
      throw new Error("Assertion error");
  }
  const o = class Ce {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(i, c, u) {
      if (this.mode = i, this.numChars = c, this.bitData = u, c < 0)
        throw new RangeError("Invalid argument");
      this.bitData = u.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(i) {
      let c = [];
      for (const u of i)
        n(u, 8, c);
      return new Ce(Ce.Mode.BYTE, i.length, c);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(i) {
      if (!Ce.isNumeric(i))
        throw new RangeError("String contains non-numeric characters");
      let c = [];
      for (let u = 0; u < i.length; ) {
        const d = Math.min(i.length - u, 3);
        n(parseInt(i.substring(u, u + d), 10), d * 3 + 1, c), u += d;
      }
      return new Ce(Ce.Mode.NUMERIC, i.length, c);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(i) {
      if (!Ce.isAlphanumeric(i))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let c = [], u;
      for (u = 0; u + 2 <= i.length; u += 2) {
        let d = Ce.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u)) * 45;
        d += Ce.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u + 1)), n(d, 11, c);
      }
      return u < i.length && n(Ce.ALPHANUMERIC_CHARSET.indexOf(i.charAt(u)), 6, c), new Ce(Ce.Mode.ALPHANUMERIC, i.length, c);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(i) {
      return i == "" ? [] : Ce.isNumeric(i) ? [Ce.makeNumeric(i)] : Ce.isAlphanumeric(i) ? [Ce.makeAlphanumeric(i)] : [Ce.makeBytes(Ce.toUtf8ByteArray(i))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(i) {
      let c = [];
      if (i < 0)
        throw new RangeError("ECI assignment value out of range");
      if (i < 128)
        n(i, 8, c);
      else if (i < 16384)
        n(2, 2, c), n(i, 14, c);
      else if (i < 1e6)
        n(6, 3, c), n(i, 21, c);
      else
        throw new RangeError("ECI assignment value out of range");
      return new Ce(Ce.Mode.ECI, 0, c);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(i) {
      return Ce.NUMERIC_REGEX.test(i);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(i) {
      return Ce.ALPHANUMERIC_REGEX.test(i);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(i, c) {
      let u = 0;
      for (const d of i) {
        const f = d.mode.numCharCountBits(c);
        if (d.numChars >= 1 << f)
          return 1 / 0;
        u += 4 + f + d.bitData.length;
      }
      return u;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(i) {
      i = encodeURI(i);
      let c = [];
      for (let u = 0; u < i.length; u++)
        i.charAt(u) != "%" ? c.push(i.charCodeAt(u)) : (c.push(parseInt(i.substring(u + 1, u + 3), 16)), u += 2);
      return c;
    }
  };
  o.NUMERIC_REGEX = /^[0-9]*$/, o.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, o.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let s = o;
  e.QrSegment = o;
})(mn || (mn = {}));
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
})(mn || (mn = {}));
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
})(mn || (mn = {}));
var wn = mn;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var X0 = {
  L: wn.QrCode.Ecc.LOW,
  M: wn.QrCode.Ecc.MEDIUM,
  Q: wn.QrCode.Ecc.QUARTILE,
  H: wn.QrCode.Ecc.HIGH
}, ju = 128, Lu = "L", Fu = "#FFFFFF", Du = "#000000", Bu = !1, $u = 1, Y0 = 4, Z0 = 0, J0 = 0.1;
function Hu(e, t = 0) {
  const n = [];
  return e.forEach(function(r, a) {
    let o = null;
    r.forEach(function(s, l) {
      if (!s && o !== null) {
        n.push(
          `M${o + t} ${a + t}h${l - o}v1H${o + t}z`
        ), o = null;
        return;
      }
      if (l === r.length - 1) {
        if (!s)
          return;
        o === null ? n.push(`M${l + t},${a + t} h1v1H${l + t}z`) : n.push(
          `M${o + t},${a + t} h${l + 1 - o}v1H${o + t}z`
        );
        return;
      }
      s && o === null && (o = l);
    });
  }), n.join("");
}
function Uu(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((a, o) => o < t.x || o >= t.x + t.w ? a : !1));
}
function ev(e, t, n, r) {
  if (r == null)
    return null;
  const a = e.length + n * 2, o = Math.floor(t * J0), s = a / t, l = (r.width || o) * s, i = (r.height || o) * s, c = r.x == null ? e.length / 2 - l / 2 : r.x * s, u = r.y == null ? e.length / 2 - i / 2 : r.y * s, d = r.opacity == null ? 1 : r.opacity;
  let f = null;
  if (r.excavate) {
    let v = Math.floor(c), m = Math.floor(u), h = Math.ceil(l + c - v), A = Math.ceil(i + u - m);
    f = { x: v, y: m, w: h, h: A };
  }
  const g = r.crossOrigin;
  return { x: c, y: u, h: i, w: l, excavation: f, opacity: d, crossOrigin: g };
}
function tv(e, t) {
  return t != null ? Math.max(Math.floor(t), 0) : e ? Y0 : Z0;
}
function zu({
  value: e,
  level: t,
  minVersion: n,
  includeMargin: r,
  marginSize: a,
  imageSettings: o,
  size: s,
  boostLevel: l
}) {
  let i = q.useMemo(() => {
    const v = (Array.isArray(e) ? e : [e]).reduce((m, h) => (m.push(...wn.QrSegment.makeSegments(h)), m), []);
    return wn.QrCode.encodeSegments(
      v,
      X0[t],
      n,
      void 0,
      void 0,
      l
    );
  }, [e, t, n, l]);
  const { cells: c, margin: u, numCells: d, calculatedImageSettings: f } = q.useMemo(() => {
    let g = i.getModules();
    const v = tv(r, a), m = g.length + v * 2, h = ev(
      g,
      s,
      v,
      o
    );
    return {
      cells: g,
      margin: v,
      numCells: m,
      calculatedImageSettings: h
    };
  }, [i, s, o, r, a]);
  return {
    qrcode: i,
    margin: u,
    cells: c,
    numCells: d,
    calculatedImageSettings: f
  };
}
var nv = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), rv = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = ju,
      level: s = Lu,
      bgColor: l = Fu,
      fgColor: i = Du,
      includeMargin: c = Bu,
      minVersion: u = $u,
      boostLevel: d,
      marginSize: f,
      imageSettings: g
    } = r, m = ii(r, [
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
    ]), { style: h } = m, A = ii(m, ["style"]), E = g == null ? void 0 : g.src, b = q.useRef(null), k = q.useRef(null), x = q.useCallback(
      (I) => {
        b.current = I, typeof n == "function" ? n(I) : n && (n.current = I);
      },
      [n]
    ), [w, S] = q.useState(!1), { margin: T, cells: P, numCells: L, calculatedImageSettings: _ } = zu({
      value: a,
      level: s,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: f,
      imageSettings: g,
      size: o
    });
    q.useEffect(() => {
      if (b.current != null) {
        const I = b.current, $ = I.getContext("2d");
        if (!$)
          return;
        let R = P;
        const N = k.current, M = _ != null && N !== null && N.complete && N.naturalHeight !== 0 && N.naturalWidth !== 0;
        M && _.excavation != null && (R = Uu(
          P,
          _.excavation
        ));
        const j = window.devicePixelRatio || 1;
        I.height = I.width = o * j;
        const D = o / L * j;
        $.scale(D, D), $.fillStyle = l, $.fillRect(0, 0, L, L), $.fillStyle = i, nv ? $.fill(new Path2D(Hu(R, T))) : P.forEach(function(F, z) {
          F.forEach(function(H, G) {
            H && $.fillRect(G + T, z + T, 1, 1);
          });
        }), _ && ($.globalAlpha = _.opacity), M && $.drawImage(
          N,
          _.x + T,
          _.y + T,
          _.w,
          _.h
        );
      }
    }), q.useEffect(() => {
      S(!1);
    }, [E]);
    const B = oi({ height: o, width: o }, h);
    let O = null;
    return E != null && (O = /* @__PURE__ */ q.createElement(
      "img",
      {
        src: E,
        key: E,
        style: { display: "none" },
        onLoad: () => {
          S(!0);
        },
        ref: k,
        crossOrigin: _ == null ? void 0 : _.crossOrigin
      }
    )), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
      "canvas",
      oi({
        style: B,
        height: o,
        width: o,
        ref: x,
        role: "img"
      }, A)
    ), O);
  }
);
rv.displayName = "QRCodeCanvas";
var si = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = ju,
      level: s = Lu,
      bgColor: l = Fu,
      fgColor: i = Du,
      includeMargin: c = Bu,
      minVersion: u = $u,
      boostLevel: d,
      title: f,
      marginSize: g,
      imageSettings: v
    } = r, m = ii(r, [
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
    ]), { margin: h, cells: A, numCells: E, calculatedImageSettings: b } = zu({
      value: a,
      level: s,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: g,
      imageSettings: v,
      size: o
    });
    let k = A, x = null;
    v != null && b != null && (b.excavation != null && (k = Uu(
      A,
      b.excavation
    )), x = /* @__PURE__ */ q.createElement(
      "image",
      {
        href: v.src,
        height: b.h,
        width: b.w,
        x: b.x + h,
        y: b.y + h,
        preserveAspectRatio: "none",
        opacity: b.opacity,
        crossOrigin: b.crossOrigin
      }
    ));
    const w = Hu(k, h);
    return /* @__PURE__ */ q.createElement(
      "svg",
      oi({
        height: o,
        width: o,
        viewBox: `0 0 ${E} ${E}`,
        ref: n,
        role: "img"
      }, m),
      !!f && /* @__PURE__ */ q.createElement("title", null, f),
      /* @__PURE__ */ q.createElement(
        "path",
        {
          fill: l,
          d: `M0,0 h${E}v${E}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ q.createElement("path", { fill: i, d: w, shapeRendering: "crispEdges" }),
      x
    );
  }
);
si.displayName = "QRCodeSVG";
function av({
  address: e,
  open: t,
  setOpen: n,
  onClose: r
}) {
  const { t: a } = di(), [o, s] = p.useState("");
  p.useEffect(() => {
    const { username: c } = $e.all();
    s(c);
  }, []);
  const l = async () => {
    try {
      const c = document.querySelector("#qr-code-svg");
      if (!c) return;
      const u = c.querySelector("image");
      if (u) {
        const m = u.getAttribute("href") || "", A = await (await fetch(m)).blob(), E = await new Promise((b) => {
          const k = new FileReader();
          k.onloadend = () => b(k.result), k.readAsDataURL(A);
        });
        u.setAttribute("href", E);
      }
      const d = new XMLSerializer().serializeToString(c), f = new Blob([d], { type: "image/svg+xml;charset=utf-8" }), g = URL.createObjectURL(f), v = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((m, h) => {
        const A = new Image();
        A.onload = () => {
          const E = document.createElement("canvas"), b = E.getContext("2d");
          E.width = A.width, E.height = A.height, b == null || b.drawImage(A, 0, 0), v ? E.toBlob(async (k) => {
            if (k)
              try {
                if (navigator.share) {
                  const x = new File([k], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [x],
                    title: "QR Code"
                  });
                } else {
                  const x = URL.createObjectURL(k), w = document.createElement("a");
                  w.href = x, w.download = "qrcode.png", document.body.appendChild(w), w.click(), document.body.removeChild(w), URL.revokeObjectURL(x);
                }
                We.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (x) {
                h(x);
              }
          }, "image/png") : E.toBlob(async (k) => {
            if (k)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": k })
                ]), We.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (x) {
                h(x);
              }
          }, "image/png");
        }, A.onerror = h, A.src = g;
      });
    } catch (c) {
      We.error(c.message);
    }
  }, i = t ? /* @__PURE__ */ y.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ y.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ y.jsx("div", { className: re(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ y.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ y.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ y.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ y.jsx(
          "button",
          {
            onClick: () => r(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ y.jsx(ui, {})
          }
        )
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ y.jsxs(Q0, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ y.jsxs(Ou, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ y.jsx(
            ri,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ y.jsx(
            ri,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ y.jsxs(ai, { value: "crypto", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ y.jsx(Za, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ y.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ y.jsx(
            si,
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
        /* @__PURE__ */ y.jsxs(ai, { value: "email", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ y.jsx(Za, { address: o, iconSize: 14 }) }),
          /* @__PURE__ */ y.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ y.jsx(
            si,
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
      /* @__PURE__ */ y.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ y.jsx(Wt, { onClick: l, children: "Share QR code" }) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return cr.createPortal(
      i,
      document.body
    );
}
const ov = ["totalAsset"], iv = 0.01, sv = async (e) => {
  try {
    const n = (await Le.get("/user-assets/total-assets", {
      params: { address: e }
    })).data.totalAssets;
    return {
      raw: n,
      formatted: Zd(n, 2),
      isZero: n === 0,
      isUSDZero: n < iv
    };
  } catch (t) {
    throw ln(t);
  }
};
function cv(e) {
  const { address: t } = $e.all();
  return Ar({
    queryKey: [...ov, t],
    queryFn: () => sv(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t,
    staleTime: Nc(kc)
  });
}
const lv = async () => {
  const { data: e } = await Le.get("/user/info");
  return e;
}, uv = (e) => Ar({
  queryKey: ["userInfo"],
  queryFn: lv,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...e
});
function dv() {
  const { address: e } = $e.all(), { data: t, refetch: n } = cv({
    enabled: !!e
  }), { data: r } = uv(), [a, o] = p.useState(""), [s, l] = p.useState(!1), [i, c] = p.useState(!1), [u, d] = p.useState(Re.VAST), [f, g] = p.useState(Hi.getData() ?? !0);
  p.useEffect(() => {
    v(u);
  }, []), p.useEffect(() => {
    r && o(r.avatar || $e.getUserRandomAvatar(r.avatarIndex));
  }, [r]);
  const v = async (h) => {
    d(h);
  }, m = () => {
    g(!f), Hi.setData(!f);
  };
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: re(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ y.jsx(
          "div",
          {
            className: re(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${a})`
            }
          }
        ),
        /* @__PURE__ */ y.jsxs("div", { className: re(
          "relative z-10",
          "tablet:flex tablet:justify-between tablet:gap-2",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ y.jsxs("div", { children: [
            /* @__PURE__ */ y.jsx("div", { className: re(
              'text-white font-bold leading-tight font-["Asap"]',
              "text-lg tablet:text-[32px]",
              "mb-[25px] tablet:mb-[50px]"
            ), children: "Total asset" }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-start gap-2 tablet:w-auto", children: [
              /* @__PURE__ */ y.jsx(
                "img",
                {
                  src: a,
                  alt: "avatar",
                  className: re(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ y.jsx("div", { className: re(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ y.jsx("div", { className: re(
                  'text-white font-bold font-["Asap"] flex items-center gap-4',
                  "text-[20px] tablet:text-[40px] tablet:leading-none"
                ), children: f ? /* @__PURE__ */ y.jsxs("div", { className: "flex gap-4", children: [
                  "******",
                  /* @__PURE__ */ y.jsx(
                    "img",
                    {
                      src: "/imgs/icons/close_eye.svg",
                      className: "w-[30px] h-[30px] cursor-pointer",
                      onClick: m
                    }
                  )
                ] }) : /* @__PURE__ */ y.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  "$",
                  (t == null ? void 0 : t.formatted) || "",
                  /* @__PURE__ */ y.jsxs("div", { className: "flex items-center gap-4", children: [
                    "USD",
                    /* @__PURE__ */ y.jsx(
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
          /* @__PURE__ */ y.jsxs("div", { className: re(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ y.jsxs("div", { className: re(
              "flex items-center gap-3 mb-[28px]",
              "justify-center tablet:justify-end"
            ), children: [
              /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: " bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => l(!0),
                  children: [
                    /* @__PURE__ */ y.jsx("img", { src: "/imgs/icons/send.svg", alt: "" }),
                    /* @__PURE__ */ y.jsx("span", { className: "text-black text-xs font-bold", children: "Send" })
                  ]
                }
              ),
              /* @__PURE__ */ y.jsxs(
                "div",
                {
                  className: "bg-white rounded-full py-[8px] px-[16px] flex items-center gap-2 cursor-pointer",
                  onClick: () => c(!0),
                  children: [
                    /* @__PURE__ */ y.jsx("img", { src: "/imgs/icons/receive.svg", alt: "" }),
                    /* @__PURE__ */ y.jsx("span", { className: "text-black text-xs font-bold", children: "Receive" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ y.jsx(
                Za,
                {
                  address: e,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              /* @__PURE__ */ y.jsx(
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
        /* @__PURE__ */ y.jsx(
          K0,
          {
            open: s,
            setOpen: l,
            address: e,
            tokenType: u,
            onClose: () => l(!1)
          }
        ),
        /* @__PURE__ */ y.jsx(
          av,
          {
            address: e,
            open: i,
            setOpen: c,
            onClose: () => c(!1)
          }
        )
      ]
    }
  );
}
function fv() {
  return /* @__PURE__ */ y.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ y.jsx(dv, {}),
    /* @__PURE__ */ y.jsx("div", { className: re(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ y.jsx(id, {}) })
  ] });
}
function hv() {
  const e = sd();
  return console.error(e), p.useEffect(() => {
    var n;
    const t = Number(sessionStorage.getItem("error_refresh_count") || 0);
    (n = e.message) != null && n.includes("Failed to fetch dynamically imported module") && (t < 1 ? (sessionStorage.setItem("error_refresh_count", String(t + 1)), window.location.reload()) : (sessionStorage.removeItem("error_refresh_count"), console.error("Failed to load module after multiple attempts")));
  }, []), /* @__PURE__ */ y.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ y.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ y.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ y.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ y.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
function gy({
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
      r((i) => ({
        ...i,
        current: l
      }));
    },
    updateTotal: (l) => {
      r((i) => ({
        ...i,
        total: l
      }));
    },
    updatePageSize: (l) => {
      r((i) => ({
        ...i,
        pageSize: l,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const pv = 30, mv = async () => {
  try {
    const e = await Le.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: pv
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = ln(e);
    throw new Error(t.message);
  }
}, gv = cd([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-B9WUTauw.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ y.jsx(hv, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-BvThGqlx.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-CgKlQ2c5.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-C646dQal.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-hbBiF-U-.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-BuhH-oE_.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-daily-withdrawal-limit",
            async lazy() {
              const { default: e } = await import("./page-CFs_iO4e.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ y.jsx(fv, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-DLrlQ02C.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-Bdav_TLf.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-CJh9YnDf.js");
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
                  const { default: e } = await import("./page-B63l5ml7.js");
                  return { Component: e };
                },
                loader: mv
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-Du0n5Lzl.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-BwCQJys1.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-CUj9gs76.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-DMlC01ix.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-BLXiCwex.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-C6ZcgFaJ.js");
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
                          const { default: e } = await import("./page-DCiomtV9.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-uKudbV-q.js");
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
                  const { default: e } = await import("./page-DnLMOfQ4.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-BltYcf0p.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "profile",
            async lazy() {
              const { default: e } = await import("./index-eyZscO8Y.js");
              return { Component: e };
            }
          },
          {
            path: "multisender",
            async lazy() {
              const { default: e } = await import("./page-i3atAj7h.js");
              return { Component: e };
            }
          },
          {
            path: "my-rewards",
            async lazy() {
              const { default: e } = await import("./page-CyeD8lGg.js");
              return { Component: e };
            }
          }
        ]
      }
    ]
  }
]);
function vv() {
  const [e, t] = p.useState(!1);
  return p.useEffect(() => {
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(n);
  }, []), /* @__PURE__ */ y.jsx(
    Ed,
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
      transition: wd,
      icon: ({ type: n }) => {
        if (n === "error")
          return /* @__PURE__ */ y.jsx(xd, {});
        if (n === "success")
          return /* @__PURE__ */ y.jsx(qa, {});
        if (n === "info")
          return /* @__PURE__ */ y.jsx(Cd, {});
        if (n === "warning")
          return /* @__PURE__ */ y.jsx(Sc, {});
      },
      toastClassName: re(
        "text-sm",
        // 'laptop:top-[82px]',
        "max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var _i = "moonpay-react-sdk-embedded-frame", yv = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: r,
  signature: a
}) => {
  const {
    // params
    currencyCode: o,
    defaultCurrencyCode: s,
    walletAddress: l,
    walletAddressTag: i,
    walletAddresses: c,
    walletAddressTags: u,
    colorCode: d,
    theme: f,
    themeId: g,
    language: v,
    baseCurrencyCode: m,
    baseCurrencyAmount: h,
    quoteCurrencyAmount: A,
    lockAmount: E,
    email: b,
    externalTransactionId: k,
    externalCustomerId: x,
    paymentMethod: w,
    redirectURL: S,
    showAllCurrencies: T,
    showOnlyCurrencies: P,
    showWalletAddressForm: L,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: B,
    baseOrigin: O,
    // handlers
    onAuthToken: I,
    onInitiateDeposit: $,
    onKmsWalletsCreated: R,
    onLogin: N,
    onTransactionCompleted: M,
    onUnsupportedRegion: j,
    onSwapsCustomerSetupComplete: D,
    onCloseOverlay: F,
    onTransactionCreated: z,
    // auth
    auth: H,
    useWarnBeforeRefresh: G,
    // other
    overlayNode: K
  } = e, te = {
    apiKey: t,
    signature: a,
    currencyCode: o,
    defaultCurrencyCode: s,
    walletAddress: l,
    walletAddressTag: i,
    walletAddresses: c,
    walletAddressTags: u,
    colorCode: d,
    theme: f,
    themeId: g,
    language: v,
    baseCurrencyCode: m,
    baseCurrencyAmount: h,
    quoteCurrencyAmount: A,
    lockAmount: E,
    email: b,
    externalTransactionId: k,
    externalCustomerId: x,
    paymentMethod: w,
    redirectURL: S,
    showAllCurrencies: T,
    showOnlyCurrencies: P,
    showWalletAddressForm: L,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: B,
    baseOrigin: O
  }, Z = {
    onAuthToken: I,
    onInitiateDeposit: $,
    onKmsWalletsCreated: R,
    onLogin: N,
    onTransactionCompleted: M,
    onUnsupportedRegion: j,
    onSwapsCustomerSetupComplete: D,
    onCloseOverlay: F,
    onTransactionCreated: z
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: r,
    params: te,
    debug: n,
    handlers: Z,
    auth: H,
    useWarnBeforeRefresh: G,
    containerNodeSelector: `#${_i}`,
    overlayNode: K
  };
}, bv = ({
  props: e,
  apiKey: t,
  debug: n,
  environment: r,
  signature: a
}) => {
  const {
    // params
    quoteCurrencyCode: o,
    defaultCurrencyCode: s,
    defaultBaseCurrencyCode: l,
    walletAddress: i,
    walletAddressTag: c,
    walletAddresses: u,
    walletAddressTags: d,
    colorCode: f,
    theme: g,
    themeId: v,
    language: m,
    baseCurrencyCode: h,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: E,
    lockAmount: b,
    email: k,
    externalTransactionId: x,
    externalCustomerId: w,
    paymentMethod: S,
    redirectURL: T,
    showAllCurrencies: P,
    showOnlyCurrencies: L,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: B,
    skipUnsupportedRegionScreen: O,
    mpWalletId: I,
    baseOrigin: $,
    // handlers
    onAuthToken: R,
    onInitiateDeposit: N,
    onKmsWalletsCreated: M,
    onLogin: j,
    onTransactionCompleted: D,
    onUnsupportedRegion: F,
    onSwapsCustomerSetupComplete: z,
    onCloseOverlay: H,
    onTransactionCreated: G,
    // auth
    auth: K,
    useWarnBeforeRefresh: te
  } = e, Z = {
    apiKey: t,
    signature: a,
    quoteCurrencyCode: o,
    defaultCurrencyCode: s,
    defaultBaseCurrencyCode: l,
    walletAddress: i,
    walletAddressTag: c,
    walletAddresses: u,
    walletAddressTags: d,
    colorCode: f,
    theme: g,
    themeId: v,
    language: m,
    baseCurrencyCode: h,
    baseCurrencyAmount: A,
    quoteCurrencyAmount: E,
    lockAmount: b,
    email: k,
    externalTransactionId: x,
    externalCustomerId: w,
    paymentMethod: S,
    redirectURL: T,
    showAllCurrencies: P,
    showOnlyCurrencies: L,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: B,
    skipUnsupportedRegionScreen: O,
    mpWalletId: I,
    baseOrigin: $
  }, ke = {
    onAuthToken: R,
    onInitiateDeposit: N,
    onKmsWalletsCreated: M,
    onLogin: j,
    onTransactionCompleted: D,
    onUnsupportedRegion: F,
    onSwapsCustomerSetupComplete: z,
    onCloseOverlay: H,
    onTransactionCreated: G
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: r,
    params: Z,
    debug: n,
    handlers: ke,
    auth: K,
    useWarnBeforeRefresh: te,
    containerNodeSelector: `#${_i}`
  };
};
async function xv(e = "v1") {
  return new Promise((t, n) => {
    const r = `https://static.moonpay.com/web-sdk/${e}/moonpay-web-sdk.min.js`, a = document.querySelector(`script[src="${r}"]`), o = (s = 0) => {
      if (window.MoonPayWebSdk) {
        t(window.MoonPayWebSdk.init);
        return;
      }
      if (s > 100) {
        n(new Error("Loading MoonPayWebSdk script timed out."));
        return;
      }
      setTimeout(() => o(s + 1), 100);
    };
    if (a)
      o();
    else {
      const s = document.createElement("script");
      s.async = !0, s.src = r, s.addEventListener("load", () => {
        var l;
        t((l = window.MoonPayWebSdk) == null ? void 0 : l.init);
      }), s.addEventListener("error", () => {
        n(new Error("Failed to load MoonPayWebSdk script."));
      }), document.body.appendChild(s);
    }
  });
}
function Cv(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var Qa = () => {
}, Sv = {
  info: Qa,
  warn: Qa,
  error: Qa
}, Ev = class Vu {
  constructor({
    logger: t,
    prefix: n
  }) {
    ve(this, "prefix");
    ve(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new Vu({ logger: Sv });
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
}, wa = p.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), wv = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const r = Cv(t), [a, o] = p.useState({
    apiKey: t,
    environment: r,
    debug: n
  }), s = p.useCallback(async () => {
    const l = await xv();
    o((i) => ({ ...i, init: l }));
  }, []);
  return p.useEffect(() => {
    a.init || s();
  }, [s, a.init]), /* @__PURE__ */ y.jsx(wa.Provider, { value: a, children: e });
}, Tv = class extends Ev {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, Av = (e, t, n) => {
  const r = p.useRef(null), { init: a, debug: o } = p.useContext(wa), s = p.useRef(new Tv().if(o || !1)), l = p.useCallback(async () => {
    var i, c;
    if (r.current) {
      if (!n && ("walletAddress" in e || "walletAddresses" in e) && s.current.warn(
        "You must provide an `onUrlSignatureRequested` function to sign the URL when using the `walletAddress` or `walletAddresses` prop"
      ), n) {
        const u = r.current.generateUrlForSigning();
        try {
          const d = await (n == null ? void 0 : n(u));
          if (!d)
            return;
          (i = r.current) == null || i.updateSignature(d);
        } catch (d) {
          s.current.error(
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
    const i = (a == null ? void 0 : a(e)) || null;
    r.current = i, l();
  }, [a, e, l]);
}, kv = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Wu({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: r,
  style: a
}) {
  return Av(e, n, t), n ? /* @__PURE__ */ y.jsx(
    "div",
    {
      id: _i,
      className: r,
      style: e.variant === "embedded" ? {
        ...kv,
        ...a
      } : void 0
    }
  ) : null;
}
function vy(e) {
  const { apiKey: t, environment: n } = p.useContext(wa), r = p.useMemo(
    () => yv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ y.jsx(
    Wu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function yy(e) {
  const { apiKey: t, environment: n } = p.useContext(wa), r = p.useMemo(
    () => bv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ y.jsx(
    Wu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const Nv = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function Pv({ children: e }) {
  return /* @__PURE__ */ y.jsx(
    wv,
    {
      apiKey: Nv,
      debug: !0,
      children: e
    }
  );
}
const Rv = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, Mv = {
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
}, Ov = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, Iv = {
  authenticationError: "Authentication Error. Please sign in again."
}, _v = {
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
  header: Rv,
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
  vastWalletConnect: Mv,
  toastSuccess: Ov,
  toastError: Iv
}, jv = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Lv = {
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
}, Fv = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, Dv = {
  authenticationError: "认证错误，请重新登录。"
}, Bv = {
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
  header: jv,
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
  vastWalletConnect: Lv,
  toastSuccess: Fv,
  toastError: Dv
}, $v = {
  en: {
    translation: _v
  },
  zh: {
    translation: Bv
  }
};
rt("savedLng", wc);
const Hv = wc.getData();
Ec.use(Td).init({
  resources: $v,
  lng: Hv || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function Uv() {
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
const zv = new v0({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: ef,
      // data is fresh within 1 hour
      gcTime: tf
      // cache for 24 hours
    }
  }
});
function Vv() {
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ y.jsx(p.Suspense, { children: /* @__PURE__ */ y.jsx(C0, { client: zv, children: /* @__PURE__ */ y.jsxs(Ad, { i18n: Ec, children: [
      /* @__PURE__ */ y.jsx(Pv, { children: /* @__PURE__ */ y.jsx(ld, { router: gv }) }),
      /* @__PURE__ */ y.jsx(vv, {})
    ] }) }) }) }),
    /* @__PURE__ */ y.jsx(Uv, {})
  ] });
}
const Wv = "theme_light", Gv = "0.0.0", Kv = "module", Qv = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, qv = {
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
  "react-verification-input": "^4.2.0",
  recharts: "^2.13.3",
  "tailwind-merge": "^2.5.4",
  "tailwind-scrollbar-hide": "^1.1.7",
  "tailwindcss-animate": "^1.0.7",
  uuid: "^10.0.0",
  viem: "^2.21.32"
}, Xv = {
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
}, Yv = {
  name: Wv,
  private: !0,
  version: Gv,
  type: Kv,
  scripts: Qv,
  dependencies: qv,
  devDependencies: Xv
};
rt("isDev", Ac);
function Js(e) {
  const t = Xa(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ y.jsx(Vv, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
Ac ? Js("root") : typeof window < "u" && (window[`mount_${Yv.name}`] = Js);
export {
  ds as $,
  Sf as A,
  Wt as B,
  gn as C,
  lf as D,
  Xe as E,
  Xt as F,
  Wn as G,
  sy as H,
  na as I,
  sg as J,
  rr as K,
  hi as L,
  wt as M,
  Et as N,
  ki as O,
  Yp as P,
  Wp as Q,
  Zl as R,
  K0 as S,
  uy as T,
  Ge as U,
  Mu as V,
  ly as W,
  nu as X,
  Ro as Y,
  fy as Z,
  Y as _,
  $e as a,
  Uh as a$,
  Vr as a0,
  Zd as a1,
  Ar as a2,
  Nc as a3,
  kc as a4,
  Q0 as a5,
  Ou as a6,
  ri as a7,
  Re as a8,
  Za as a9,
  hy as aA,
  Tf as aB,
  Qn as aC,
  Af as aD,
  pr as aE,
  mp as aF,
  Xp as aG,
  Zp as aH,
  Mt as aI,
  Ua as aJ,
  Yl as aK,
  Pc as aL,
  Xd as aM,
  Yd as aN,
  B0 as aO,
  Gi as aP,
  ay as aQ,
  oy as aR,
  iy as aS,
  wf as aT,
  gi as aU,
  Oo as aV,
  dn as aW,
  Kc as aX,
  Fc as aY,
  to as aZ,
  ra as a_,
  cv as aa,
  av as ab,
  gy as ac,
  pv as ad,
  yu as ae,
  vy as af,
  yy as ag,
  Rc as ah,
  Nu as ai,
  zi as aj,
  L0 as ak,
  uu as al,
  mr as am,
  pa as an,
  ma as ao,
  un as ap,
  ia as aq,
  ym as ar,
  Tm as as,
  Sa as at,
  W0 as au,
  U0 as av,
  gl as aw,
  dy as ax,
  Po as ay,
  Tg as az,
  uf as b,
  fo as b0,
  Da as b1,
  jf as b2,
  Lc as b3,
  qi as b4,
  Fm as b5,
  su as b6,
  ai as b7,
  Js as b8,
  re as c,
  Mc as d,
  Oc as e,
  Le as f,
  rt as g,
  ln as h,
  or as i,
  Vi as j,
  Wi as k,
  wc as l,
  Kt as m,
  tt as n,
  An as o,
  Mo as p,
  Xc as q,
  cy as r,
  Gp as s,
  Ee as t,
  uv as u,
  Gt as v,
  aa as w,
  Yt as x,
  Kn as y,
  Jl as z
};
