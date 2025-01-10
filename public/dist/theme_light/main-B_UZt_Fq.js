var zu = Object.defineProperty;
var Ii = (e) => {
  throw TypeError(e);
};
var Vu = (e, t, n) => t in e ? zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => Vu(e, typeof t != "symbol" ? t + "" : t, n), Aa = (e, t, n) => t.has(e) || Ii("Cannot " + n);
var b = (e, t, n) => (Aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? Ii("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), z = (e, t, n, r) => (Aa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), oe = (e, t, n) => (Aa(e, t, "access private method"), n);
var Ar = (e, t, n, r) => ({
  set _(a) {
    z(e, t, a, n);
  },
  get _() {
    return b(e, t, r);
  }
});
import { j as v, S as Wu, d as rc, g as ac, P as Gu, C as oc, I as ic, i as sc, k as cc, l as lc, L as uc, m as dc, n as Ku, T as Qu, o as fc, p as hc, q as pc, r as qu } from "./vendor-radix-AvjOLIap.js";
import { p as G, b as ni, a as p, g as Xu, R as q, c as nr, $ as ri, f as Yu, O as Zu, u as Ju, h as ed, i as td } from "./vendor-react-DSEtE0wE.js";
import { t as nd, c as rd, C as ad, a as od, b as id, d as sd, e as cd, _ as Ze, X as ai, L as ld, f as za, g as mc, h as ud, i as dd, j as fd, I as hd } from "./vendor-ui-utils-CGOon9_P.js";
import { a as zt, B as ct, u as oi, C as pd, Q as md, X as gd, i as gc, b as vd, I as yd } from "./vendor-utils-Q0yJ_o1H.js";
import { d as bd, f as xd, h as Qn, a as Cd, b as Sd, s as Ed, t as ka, c as wd, e as Td, i as qr, I as ji, g as ii, j as Ln, k as Vt, l as Dn, m as Ad, n as kd, _ as ue, o as Nd, p as B, q as Z, r as cn, u as Br } from "./vendor-web3-CQEmmIwE.js";
var Va, kr = ni;
if (G.env.NODE_ENV === "production")
  Va = kr.createRoot, kr.hydrateRoot;
else {
  var _i = kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Va = function(e, t) {
    _i.usingClientEntryPoint = !0;
    try {
      return kr.createRoot(e, t);
    } finally {
      _i.usingClientEntryPoint = !1;
    }
  };
}
const rt = console.log.bind(console, "🚀");
function re(...e) {
  return nd(rd(e));
}
class At {
  constructor(t) {
    pe(this, "isClient");
    pe(this, "key");
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
const vc = new At("language"), Li = new At("hideTotalAsset");
class Pd {
  constructor() {
    pe(this, "storages");
    this.storages = {
      username: new At("username"),
      displayName: new At("displayName"),
      address: new At("address"),
      authenticatedHeader: new At("authenticatedHeader"),
      authenticated: new At("authenticated"),
      desUsername: new At("desUsername"),
      aeskey: new At("aeskey")
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
const je = new Pd(), yc = [
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
var we = /* @__PURE__ */ ((e) => (e.ETH = "ETH", e.BASE_ETH = "BASE_ETH", e.MATIC = "MATIC", e.TVWT = "TVWT", e.VAST = "VAST", e))(we || {}), Fn = /* @__PURE__ */ ((e) => (e.POL = "POL", e.SepoliaETH = "SepoliaETH", e.BaseSepoliaETH = "BaseSepoliaETH", e))(Fn || {});
class yr {
  constructor({
    tokenType: t,
    name: n,
    symbol: r,
    decimals: a,
    gasSymbol: o,
    logo: i,
    color: l,
    viemChain: s,
    publicClient: c,
    scanTransactionUrl: u,
    contractAddress: d,
    contractAbi: f,
    gasless: g = !1
  }) {
    pe(this, "tokenType");
    pe(this, "name");
    pe(this, "symbol");
    pe(this, "decimals");
    pe(this, "gasSymbol");
    pe(this, "logo");
    pe(this, "color");
    pe(this, "viemChain");
    pe(this, "publicClient");
    pe(this, "scanTransactionUrl");
    pe(this, "contractAddress");
    pe(this, "contractAbi");
    pe(this, "gasless");
    this.tokenType = t, this.name = n, this.symbol = r, this.decimals = a, this.gasSymbol = o, this.logo = i, this.color = l, this.viemChain = s, this.publicClient = c, this.scanTransactionUrl = u, this.contractAddress = d, this.contractAbi = f, this.gasless = g;
  }
}
const Rd = {
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
}, Md = {
  block: /* @__PURE__ */ bd({
    format(e) {
      var n;
      return {
        transactions: (n = e.transactions) == null ? void 0 : n.map((r) => {
          if (typeof r == "string")
            return r;
          const a = xd(r);
          return a.typeHex === "0x7e" && (a.isSystemTx = r.isSystemTx, a.mint = r.mint ? Qn(r.mint) : void 0, a.sourceHash = r.sourceHash, a.type = "deposit"), a;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Cd({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? Qn(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ Sd({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? Qn(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? Qn(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? Qn(e.l1Fee) : null,
        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
      };
    }
  })
};
function Od(e, t) {
  return _d(e) ? jd(e) : Ed(e, t);
}
const Id = {
  transaction: Od
};
function jd(e) {
  Ld(e);
  const { sourceHash: t, data: n, from: r, gas: a, isSystemTx: o, mint: i, to: l, value: s } = e, c = [
    t,
    r,
    l ?? "0x",
    i ? ka(i) : "0x",
    s ? ka(s) : "0x",
    a ? ka(a) : "0x",
    o ? "0x1" : "0x",
    n ?? "0x"
  ];
  return wd([
    "0x7e",
    Td(c)
  ]);
}
function _d(e) {
  return e.type === "deposit" || typeof e.sourceHash < "u";
}
function Ld(e) {
  const { from: t, to: n } = e;
  if (t && !qr(t))
    throw new ji({ address: t });
  if (n && !qr(n))
    throw new ji({ address: n });
}
const Di = {
  contracts: Rd,
  formatters: Md,
  serializers: Id
}, qn = 11155111, Xr = /* @__PURE__ */ ii({
  ...Di,
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
    ...Di.contracts,
    disputeGameFactory: {
      [qn]: {
        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
      }
    },
    l2OutputOracle: {
      [qn]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [qn]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [qn]: {
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
  sourceId: qn
}), Yr = /* @__PURE__ */ ii({
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
}), Fi = /* @__PURE__ */ ii({
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
class Dd extends yr {
  constructor() {
    super({
      tokenType: we.ETH,
      name: "Ethereum Sepolia",
      symbol: "SepoliaETH",
      decimals: 18,
      gasSymbol: Fn.SepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: Fi,
      publicClient: Ln({
        chain: Fi,
        transport: Dn("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.etherscan.io/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return Vt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.etherscan.io/api", a = {
      apikey: "B5SAZ2TJCS8Z213CYTS3CS4DGNVTVWS9QI",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await zt.get(n, {
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
class Fd extends yr {
  constructor() {
    super({
      tokenType: we.MATIC,
      name: "Polygon Amoy",
      symbol: "POL",
      decimals: 18,
      gasSymbol: Fn.POL,
      logo: "/imgs/logos/matic.png",
      color: "#c08fec",
      viemChain: Yr,
      publicClient: Ln({
        chain: Yr,
        transport: Dn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return Vt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-amoy.polygonscan.com/api", a = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await zt.get(n, {
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
class Bd extends yr {
  constructor() {
    super({
      tokenType: we.TVWT,
      name: "TheVastlinkToken",
      symbol: "TVWT",
      decimals: 18,
      gasSymbol: Fn.POL,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Yr,
      publicClient: Ln({
        chain: Yr,
        transport: Dn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/",
      contractAddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
      contractAbi: yc
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return Vt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-amoy.polygonscan.com/api", a = {
      apikey: "FR9N1APH1EVF4MDQEUSMDBGZW522E8ES1I",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await zt.get(n, {
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
class $d extends yr {
  constructor() {
    super({
      tokenType: we.VAST,
      name: "TheVastlinkToken",
      symbol: "VAST",
      decimals: 18,
      gasSymbol: Fn.BaseSepoliaETH,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Xr,
      publicClient: Ln({
        chain: Xr,
        transport: Dn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/",
      contractAddress: "0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b",
      contractAbi: Ad,
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
    return Vt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.basescan.org/api", a = {
      apikey: "RGQ66MKA7BD483ZGG8ZDBFG6RD4UKZU9PS",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await zt.get(n, {
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
class Hd extends yr {
  constructor() {
    super({
      tokenType: we.BASE_ETH,
      name: "Base Sepolia",
      symbol: "BaseSepoliaETH",
      decimals: 18,
      gasSymbol: Fn.BaseSepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: Xr,
      publicClient: Ln({
        chain: Xr,
        transport: Dn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return Vt(n);
  }
  async getRecentTransactions(t) {
    const n = "https://api-sepolia.basescan.org/api", a = {
      apikey: "RGQ66MKA7BD483ZGG8ZDBFG6RD4UKZU9PS",
      module: "account",
      sort: "desc",
      page: 1,
      offset: 10
    };
    return (await zt.get(n, {
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
const Qt = class Qt {
  constructor() {
    pe(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      [we.ETH, new Dd()],
      [we.BASE_ETH, new Hd()],
      [we.MATIC, new Fd()],
      [we.TVWT, new Bd()],
      [we.VAST, new $d()]
    ]);
  }
  static getInstance() {
    return Qt.instance || (Qt.instance = new Qt()), Qt.instance;
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
    return t === we.ETH || t === we.BASE_ETH || t === we.MATIC;
  }
  isERC20Token(t) {
    return t === we.TVWT || t === we.VAST;
  }
  createTokenMap(t) {
    return Array.from(this.tokenMap.entries()).reduce((n, [r, a]) => (n[r] = t(a), n), {});
  }
  getNativeTokenTypeByGasSymbol(t) {
    var r;
    return ((r = Array.from(this.tokenMap.values()).find((a) => a.gasSymbol === t && this.isNativeToken(a.tokenType))) == null ? void 0 : r.tokenType) || null;
  }
};
pe(Qt, "instance");
let Wa = Qt;
const ve = Wa.getInstance();
Object.freeze(ve);
zt.defaults.withCredentials = !0;
const Pe = zt.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
Pe.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const r = e.response.data.message || "Authentication error";
      console.log(`${r}, redirecting to login...`), je.clearAllAuthData(), typeof window < "u" && (ct.error(r), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
const Ud = yc, zd = (e) => e.replace(/\.?0+$/, ""), Jn = (e, t = 6) => parseFloat(e).toFixed(t), Vd = (e, t = 2) => {
  const r = (typeof e == "string" ? parseFloat(e) : e).toFixed(t), [a, o] = r.split("."), i = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o ? `${i}.${o}` : i;
};
async function Wd({
  tokenType: e,
  transferParams: t,
  fromAddress: n,
  defaultGasPrice: r,
  defaultBlock: a
}) {
  try {
    const o = ve.getToken(e).viemChain;
    if (!o) return null;
    if (ve.getToken(e).gasless)
      return {
        estimatedGas: BigInt(0),
        maxFeePerGas: BigInt(0),
        maxPriorityFeePerGas: BigInt(0),
        estimatedTotalFee: BigInt(0),
        baseFee: BigInt(0),
        gasPrice: BigInt(0),
        feeInTokens: "0"
      };
    const i = Ln({
      chain: o,
      transport: Dn()
    });
    let l;
    if (ve.isERC20Token(e) && (l = ve.getToken(e).contractAddress, !l))
      throw new Error("Invalid token contract address");
    let s;
    if (ve.isERC20Token(e)) {
      const c = kd({
        abi: Ud,
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
      }), u = r || await i.getGasPrice(), f = (a || await i.getBlock()).baseFeePerGas || BigInt(0), g = u > f ? u - f : BigInt(1e9), y = f + g * BigInt(2), m = c * y, h = Jn(
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
async function Gd(e) {
  try {
    return (await Pe.get("/smartcontract/get-relayer-transaction-by-id", {
      params: {
        transactionId: e
      }
    })).data.status;
  } catch (t) {
    throw console.error("Get relayer transaction status error:", t), t;
  }
}
async function Xv(e, t = 18e4) {
  const n = Date.now();
  for (; ; )
    try {
      const r = await Gd(e);
      if (r === "mined" || r === "confirmed")
        return !0;
      if (Date.now() - n > t)
        return !1;
      await new Promise((a) => setTimeout(a, 2e3));
    } catch (r) {
      if (console.error("Get relayer transaction status error:", r), Date.now() - n > t)
        return !1;
      await new Promise((a) => setTimeout(a, 3e3));
    }
}
const Bi = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, bc = G.env.NODE_ENV === "development", Yv = (e, t) => {
  const n = document.createElement("a");
  n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
};
function rr(e) {
  if (zt.isAxiosError(e)) {
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
      return { message: `${t.message}` };
    } else return t.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${t.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
function Ga({
  iconSize: e = 20,
  address: t,
  className: n = "",
  iconClassName: r = "",
  ...a
}) {
  const { t: o } = oi();
  return /* @__PURE__ */ v.jsx(pd, { text: t, onCopy: () => {
    ct.success(o("toastSuccess.copySuccess"), {
      autoClose: 1e3,
      hideProgressBar: !0
    });
  }, children: /* @__PURE__ */ v.jsxs("span", { className: "flex text-primary items-start", children: [
    /* @__PURE__ */ v.jsx("span", { ...a, style: { wordBreak: "break-all", display: "block" }, className: "text-xs", children: /* @__PURE__ */ v.jsx("span", { className: `text-primary ${n}`, children: t }) }),
    /* @__PURE__ */ v.jsx(
      ad,
      {
        className: `cursor-pointer hover:scale-105 ml-2 ${r}`,
        size: e
      }
    )
  ] }) });
}
const Kd = od(
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
), rn = p.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...a }, o) => {
    const i = r ? Wu : "button";
    return /* @__PURE__ */ v.jsx(
      i,
      {
        className: re(Kd({ variant: t, size: n, className: e })),
        ref: o,
        ...a
      }
    );
  }
);
rn.displayName = "Button";
const Zr = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ v.jsx(
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
Zr.displayName = "Input";
function Qd() {
  const [e, t] = p.useState("/imgs/logos/logo.svg");
  return {
    logoPath: e
  };
}
function qd({
  size: e = 32,
  className: t = ""
}) {
  const [n, r] = p.useState("");
  return p.useEffect(() => {
    const {
      username: a
    } = je.all();
    if (a) {
      const o = a.length > 0 ? a[0] : "";
      r(o);
    }
  }, []), /* @__PURE__ */ v.jsx(
    "div",
    {
      className: re(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${e}px] h-[${e}px]`,
        t
      ),
      children: /* @__PURE__ */ v.jsx("div", { className: re(
        // 'flex items-center justify-center',
      ), children: n })
    }
  );
}
function xc({
  size: e = 32,
  className: t,
  type: n = "spin",
  fullscreen: r = !1
}) {
  Qd();
  const [a, o] = p.useState(!1);
  p.useEffect(() => (o(!0), () => o(!1)), []);
  const s = n === "breathe" ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ v.jsx(qd, { className: re(
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
  ] }) : /* @__PURE__ */ v.jsx("div", { className: re(
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
  return r && a ? ni.createPortal(
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: s }),
    document.body
  ) : s;
}
const Cc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
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
Cc.displayName = "Textarea";
var Sc = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(Sc || {}), la = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(la || {});
class si {
  constructor(t) {
    pe(this, "config");
    if (this.constructor === si)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
class Xd extends si {
  constructor() {
    super({
      serviceType: la.WEB3AUTH_WITH_MPC
    });
    pe(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: n
  }) {
    const { data: r } = await Pe.post("/keymanagement/signup", {
      username: n
    }), { address: a, displayName: o } = r;
    je.saveAuthDataByKey("address", a), je.saveAuthDataByKey("username", n), o ? je.saveAuthDataByKey("displayName", o) : je.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: n }) {
    const { data: r } = await Pe.post("/keymanagement/signin", {
      username: n
    }), { address: a, displayName: o } = r;
    je.saveAuthDataByKey("address", a), je.saveAuthDataByKey("username", n), o ? je.saveAuthDataByKey("displayName", o) : je.removeAuthDataByKey("displayName");
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
      relayerTransactionId: f,
      // not used
      transactionPayload: g,
      userEmail: y,
      toEmail: m
    } } = await Pe.post("/transaction/sign", {
      from: je.all().address,
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
      transactionPayload: i,
      userEmail: l,
      toEmail: s,
      note: c,
      transactionType: u
    } } = await Pe.post("/transaction/verify-to-sign", {
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
    return await ve.getToken(r).publicClient.waitForTransactionReceipt({
      hash: n
    });
  }
  async test() {
    await Pe.post("/keymanagement/test-mpc");
  }
}
class Yd {
  static getService(t) {
    switch (t) {
      case la.WEB3AUTH_WITH_MPC:
        return new Xd();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const Zd = la.WEB3AUTH_WITH_MPC, Jd = Yd.getService(Zd), ef = Ku, tf = Qu, nf = p.forwardRef(({ className: e, inset: t, children: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  rc,
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
      /* @__PURE__ */ v.jsx(id, { className: "ml-auto h-4 w-4" })
    ]
  }
));
nf.displayName = rc.displayName;
const rf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ac,
  {
    ref: n,
    className: re(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
rf.displayName = ac.displayName;
const Ec = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(Gu, { children: /* @__PURE__ */ v.jsx(
  oc,
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
Ec.displayName = oc.displayName;
const wc = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  ic,
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
wc.displayName = ic.displayName;
const af = p.forwardRef(({ className: e, children: t, checked: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  sc,
  {
    ref: a,
    className: re(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(cc, { children: /* @__PURE__ */ v.jsx(sd, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
af.displayName = sc.displayName;
const of = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  lc,
  {
    ref: r,
    className: re(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(cc, { children: /* @__PURE__ */ v.jsx(cd, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
of.displayName = lc.displayName;
const sf = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  uc,
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
sf.displayName = uc.displayName;
const cf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  dc,
  {
    ref: n,
    className: re("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
cf.displayName = dc.displayName;
function $i(e, t) {
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
var Tc = { exports: {} };
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
})(Tc);
var lf = Tc.exports;
const Ge = /* @__PURE__ */ Xu(lf);
var Ka = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function uf() {
  if (Hi) return se;
  Hi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
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
                case i:
                case s:
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
var ce = {}, Ui;
function df() {
  return Ui || (Ui = 1, G.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, h = !1, A = !1, S = !1, C;
    C = Symbol.for("react.module.reference");
    function w(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === n || V === a || S || V === r || V === c || V === u || A || V === g || y || m || h || typeof V == "object" && V !== null && (V.$$typeof === f || V.$$typeof === d || V.$$typeof === o || V.$$typeof === i || V.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === C || V.getModuleId !== void 0));
    }
    function x(V) {
      if (typeof V == "object" && V !== null) {
        var Qe = V.$$typeof;
        switch (Qe) {
          case e:
            var be = V.type;
            switch (be) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return be;
              default:
                var _e = be && be.$$typeof;
                switch (_e) {
                  case l:
                  case i:
                  case s:
                  case f:
                  case d:
                  case o:
                    return _e;
                  default:
                    return Qe;
                }
            }
          case t:
            return Qe;
        }
      }
    }
    var E = i, T = o, N = e, M = s, L = n, I = f, H = d, $ = t, D = a, W = r, P = c, k = u, R = !1, O = !1;
    function j(V) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(V) {
      return O || (O = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U(V) {
      return x(V) === i;
    }
    function F(V) {
      return x(V) === o;
    }
    function K(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function Q(V) {
      return x(V) === s;
    }
    function ne(V) {
      return x(V) === n;
    }
    function ee(V) {
      return x(V) === f;
    }
    function Me(V) {
      return x(V) === d;
    }
    function Se(V) {
      return x(V) === t;
    }
    function ye(V) {
      return x(V) === a;
    }
    function Ke(V) {
      return x(V) === r;
    }
    function Te(V) {
      return x(V) === c;
    }
    function Ee(V) {
      return x(V) === u;
    }
    ce.ContextConsumer = E, ce.ContextProvider = T, ce.Element = N, ce.ForwardRef = M, ce.Fragment = L, ce.Lazy = I, ce.Memo = H, ce.Portal = $, ce.Profiler = D, ce.StrictMode = W, ce.Suspense = P, ce.SuspenseList = k, ce.isAsyncMode = j, ce.isConcurrentMode = _, ce.isContextConsumer = U, ce.isContextProvider = F, ce.isElement = K, ce.isForwardRef = Q, ce.isFragment = ne, ce.isLazy = ee, ce.isMemo = Me, ce.isPortal = Se, ce.isProfiler = ye, ce.isStrictMode = Ke, ce.isSuspense = Te, ce.isSuspenseList = Ee, ce.isValidElementType = w, ce.typeOf = x;
  }()), ce;
}
G.env.NODE_ENV === "production" ? Ka.exports = uf() : Ka.exports = df();
var $r = Ka.exports, Qa = {}, ci = [], ff = function(t) {
  ci.push(t);
};
function li(e, t) {
  if (G.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ci.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function hf(e, t) {
  if (G.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ci.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Ac() {
  Qa = {};
}
function kc(e, t, n) {
  !t && !Qa[n] && (e(!1, n), Qa[n] = !0);
}
function Wt(e, t) {
  kc(li, e, t);
}
function pf(e, t) {
  kc(hf, e, t);
}
Wt.preMessage = ff;
Wt.resetWarned = Ac;
Wt.noteOnce = pf;
function zi(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function mf(e) {
  return e && ue(e) === "object" && zi(e.nativeElement) ? e.nativeElement : zi(e) ? e : null;
}
function gf(e) {
  var t = mf(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = nr.findDOMNode) === null || n === void 0 ? void 0 : n.call(nr, e);
  }
  return null;
}
function ui(e, t, n) {
  var r = p.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Nc = function(t, n) {
  typeof t == "function" ? t(n) : ue(t) === "object" && t && "current" in t && (t.current = n);
}, vf = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      Nc(i, o);
    });
  };
}, Zv = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return ui(function() {
    return vf.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, l) {
      return i !== o[l];
    });
  });
}, yf = function(t) {
  var n, r, a = $r.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== $r.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== $r.ForwardRef);
};
function Vi(e) {
  return /* @__PURE__ */ p.isValidElement(e) && !$r.isFragment(e);
}
Number(p.version.split(".")[0]) >= 19;
function xt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nd(r.key), r);
  }
}
function Ct(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function qa(e, t) {
  return qa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, qa(e, t);
}
function ua(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && qa(e, t);
}
function Jr(e) {
  return Jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jr(e);
}
function Pc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pc = function() {
    return !!e;
  })();
}
function an(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bf(e, t) {
  if (t && (ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return an(e);
}
function da(e) {
  var t = Pc();
  return function() {
    var n, r = Jr(e);
    if (t) {
      var a = Jr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return bf(this, n);
  };
}
function Xa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function xf(e) {
  if (Array.isArray(e)) return Xa(e);
}
function Rc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function di(e, t) {
  if (e) {
    if (typeof e == "string") return Xa(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xa(e, t) : void 0;
  }
}
function Cf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function He(e) {
  return xf(e) || Rc(e) || di(e) || Cf();
}
var Mc = function(t) {
  return +setTimeout(t, 16);
}, Oc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Mc = function(t) {
  return window.requestAnimationFrame(t);
}, Oc = function(t) {
  return window.cancelAnimationFrame(t);
});
var Gi = 0, fa = /* @__PURE__ */ new Map();
function Ic(e) {
  fa.delete(e);
}
var ea = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Gi += 1;
  var r = Gi;
  function a(o) {
    if (o === 0)
      Ic(r), t();
    else {
      var i = Mc(function() {
        a(o - 1);
      });
      fa.set(r, i);
    }
  }
  return a(n), r;
};
ea.cancel = function(e) {
  var t = fa.get(e);
  return Ic(e), Oc(t);
};
G.env.NODE_ENV !== "production" && (ea.ids = function() {
  return fa;
});
function jc(e) {
  if (Array.isArray(e)) return e;
}
function Sf(e, t) {
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
function _c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return jc(e) || Sf(e, t) || di(e, t) || _c();
}
function ar(e) {
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
function Nt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ef(e, t) {
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
var Ki = "data-rc-order", Qi = "data-rc-priority", wf = "rc-util-key", Ya = /* @__PURE__ */ new Map();
function Lc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : wf;
}
function ha(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Tf(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function fi(e) {
  return Array.from((Ya.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Dc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Nt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Tf(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(Ki, i), l && o && s.setAttribute(Qi, "".concat(o)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var c = ha(t), u = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || fi(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Ki)))
          return !1;
        var g = Number(f.getAttribute(Qi) || 0);
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
function Fc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ha(t);
  return (t.styles || fi(n)).find(function(r) {
    return r.getAttribute(Lc(t)) === e;
  });
}
function Bc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Fc(e, t);
  if (n) {
    var r = ha(t);
    r.removeChild(n);
  }
}
function Af(e, t) {
  var n = Ya.get(e);
  if (!n || !Ef(document, n)) {
    var r = Dc("", t), a = r.parentNode;
    Ya.set(e, a), e.removeChild(r);
  }
}
function on(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ha(n), a = fi(r), o = B(B({}, n), {}, {
    styles: a
  });
  Af(r, o);
  var i = Fc(t, o);
  if (i) {
    var l, s;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = o.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Dc(e, o);
  return u.setAttribute(Lc(o), t), u;
}
function kf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(o);
    if (Wt(!s, "Warning: There may be circular references"), s)
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
var Nf = "%";
function Za(e) {
  return e.join(Nf);
}
var Pf = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "instanceId", void 0), Z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ct(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Za(n));
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
      return this.opUpdate(Za(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), In = "data-token-hash", lt = "data-css-hash", Rf = "data-cache-path", Ft = "__cssinjs_instance__";
function Mf() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(lt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Ft] = a[Ft] || e, a[Ft] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(lt, "]"))).forEach(function(a) {
      var o = a.getAttribute(lt);
      if (r[o]) {
        if (a[Ft] === e) {
          var i;
          (i = a.parentNode) === null || i === void 0 || i.removeChild(a);
        }
      } else
        r[o] = !0;
    });
  }
  return new Pf(e);
}
var pa = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Mf(),
  defaultCache: !0
});
function Of(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var hi = /* @__PURE__ */ function() {
  function e() {
    xt(this, e), Z(this, "cache", void 0), Z(this, "keys", void 0), Z(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ct(e, [{
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
          return !Of(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
Z(hi, "MAX_CACHE_SIZE", 20);
Z(hi, "MAX_CACHE_OFFSET", 5);
var qi = 0, $c = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "derivatives", void 0), Z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = qi, t.length === 0 && li(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), qi += 1;
  }
  return Ct(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), Na = new hi();
function Ja(e) {
  var t = Array.isArray(e) ? e : [e];
  return Na.has(t) || Na.set(t, new $c(t)), Na.get(t);
}
var If = /* @__PURE__ */ new WeakMap(), Pa = {};
function jf(e, t) {
  for (var n = If, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Pa) || n.set(Pa, e()), n.get(Pa);
}
var Xi = /* @__PURE__ */ new WeakMap();
function er(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Xi.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof $c ? n += a.id : a && ue(a) === "object" ? n += er(a, t) : n += a;
  }), t && (n = ar(n)), Xi.set(e, n)), n;
}
function Yi(e, t) {
  return ar("".concat(t, "_").concat(er(e, !0)));
}
var eo = Nt();
function Ht(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function ta(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = B(B({}, r), {}, Z(Z({}, In, t), lt, n)), i = Object.keys(o).map(function(l) {
    var s = o[l];
    return s ? "".concat(l, '="').concat(s, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Hr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, _f = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Y(a, 2), i = o[0], l = o[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, Hc = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = Y(i, 2), u = c[0], d = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (s = r.ignore) !== null && s !== void 0 && s[u])) {
      var f, g = Hr(u, r == null ? void 0 : r.prefix);
      a[g] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(g, ")");
    }
  }), [o, _f(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Zi = G.env.NODE_ENV !== "test" && Nt() ? p.useLayoutEffect : p.useEffect, Uc = function(t, n) {
  var r = p.useRef(!0);
  Zi(function() {
    return t(r.current);
  }, n), Zi(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Jv = function(t, n) {
  Uc(function(r) {
    if (!r)
      return t();
  }, n);
}, Lf = B({}, ri), Ji = Lf.useInsertionEffect, Df = function(t, n, r) {
  p.useMemo(t, r), Uc(function() {
    return n(!0);
  }, r);
}, Ff = Ji ? function(e, t, n) {
  return Ji(function() {
    return e(), t();
  }, n);
} : Df, Bf = B({}, ri), $f = Bf.useInsertionEffect, Hf = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      G.env.NODE_ENV !== "production" && li(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, Uf = function() {
  return function(t) {
    t();
  };
}, zf = typeof $f < "u" ? Hf : Uf;
function Vf() {
  return !1;
}
var to = !1;
function Wf() {
  return to;
}
const Gf = G.env.NODE_ENV === "production" ? Vf : Wf;
if (G.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Ra = window;
  if (typeof Ra.webpackHotUpdate == "function") {
    var Kf = Ra.webpackHotUpdate;
    Ra.webpackHotUpdate = function() {
      return to = !0, setTimeout(function() {
        to = !1;
      }, 0), Kf.apply(void 0, arguments);
    };
  }
}
function pi(e, t, n, r, a) {
  var o = p.useContext(pa), i = o.cache, l = [e].concat(He(t)), s = Za(l), c = zf([s]), u = Gf(), d = function(m) {
    i.opUpdate(s, function(h) {
      var A = h || [void 0, void 0], S = Y(A, 2), C = S[0], w = C === void 0 ? 0 : C, x = S[1], E = x;
      G.env.NODE_ENV !== "production" && x && u && (r == null || r(E, u), E = null);
      var T = E || n(), N = [w, T];
      return m ? m(N) : N;
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
  G.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(s));
  var g = f[1];
  return Ff(function() {
    a == null || a(g);
  }, function(y) {
    return d(function(m) {
      var h = Y(m, 2), A = h[0], S = h[1];
      return y && A === 0 && (a == null || a(g)), [A + 1, S];
    }), function() {
      i.opUpdate(s, function(m) {
        var h = m || [], A = Y(h, 2), S = A[0], C = S === void 0 ? 0 : S, w = A[1], x = C - 1;
        return x === 0 ? (c(function() {
          (y || !i.opGet(s)) && (r == null || r(w, !1));
        }), null) : [C - 1, w];
      });
    };
  }, [s]), g;
}
var Qf = {}, qf = G.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Kt = /* @__PURE__ */ new Map();
function Xf(e) {
  Kt.set(e, (Kt.get(e) || 0) + 1);
}
function Yf(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(In, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Ft] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Zf = 0;
function Jf(e, t) {
  Kt.set(e, (Kt.get(e) || 0) - 1);
  var n = Array.from(Kt.keys()), r = n.filter(function(a) {
    var o = Kt.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > Zf && r.forEach(function(a) {
    Yf(a, t), Kt.delete(a);
  });
}
var eh = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = B(B({}, o), n);
  return a && (i = a(i)), i;
}, zc = "token";
function th(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = p.useContext(pa), a = r.cache.instanceId, o = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Qf : s, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, g = jf(function() {
    return Object.assign.apply(Object, [{}].concat(He(t)));
  }, t), y = er(g), m = er(c), h = f ? er(f) : "", A = pi(zc, [l, e.id, y, m, h], function() {
    var S, C = d ? d(g, c, e) : eh(g, c, e, u), w = B({}, C), x = "";
    if (f) {
      var E = Hc(C, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), T = Y(E, 2);
      C = T[0], x = T[1];
    }
    var N = Yi(C, l);
    C._tokenKey = N, w._tokenKey = Yi(w, l);
    var M = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : N;
    C._themeKey = M, Xf(M);
    var L = "".concat(qf, "-").concat(ar(N));
    return C._hashId = L, [C, L, w, x, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    Jf(S[0]._themeKey, a);
  }, function(S) {
    var C = Y(S, 4), w = C[0], x = C[3];
    if (f && x) {
      var E = on(x, ar("css-variables-".concat(w._themeKey)), {
        mark: lt,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      E[Ft] = a, E.setAttribute(In, w._themeKey);
    }
  });
  return A;
}
var nh = function(t, n, r) {
  var a = Y(t, 5), o = a[2], i = a[3], l = a[4], s = r || {}, c = s.plain;
  if (!i)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = ta(i, l, u, f, c);
  return [d, u, g];
}, rh = {
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
}, Vc = "comm", Wc = "rule", Gc = "decl", ah = "@import", oh = "@keyframes", ih = "@layer", Kc = Math.abs, mi = String.fromCharCode;
function Qc(e) {
  return e.trim();
}
function Ur(e, t, n) {
  return e.replace(t, n);
}
function sh(e, t, n) {
  return e.indexOf(t, n);
}
function or(e, t) {
  return e.charCodeAt(t) | 0;
}
function jn(e, t, n) {
  return e.slice(t, n);
}
function mt(e) {
  return e.length;
}
function ch(e) {
  return e.length;
}
function Nr(e, t) {
  return t.push(e), e;
}
var ma = 1, _n = 1, qc = 0, Je = 0, Ce = 0, Bn = "";
function gi(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: ma, column: _n, length: i, return: "", siblings: l };
}
function lh() {
  return Ce;
}
function uh() {
  return Ce = Je > 0 ? or(Bn, --Je) : 0, _n--, Ce === 10 && (_n = 1, ma--), Ce;
}
function ut() {
  return Ce = Je < qc ? or(Bn, Je++) : 0, _n++, Ce === 10 && (_n = 1, ma++), Ce;
}
function Bt() {
  return or(Bn, Je);
}
function zr() {
  return Je;
}
function ga(e, t) {
  return jn(Bn, e, t);
}
function ir(e) {
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
function dh(e) {
  return ma = _n = 1, qc = mt(Bn = e), Je = 0, [];
}
function fh(e) {
  return Bn = "", e;
}
function Ma(e) {
  return Qc(ga(Je - 1, no(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function hh(e) {
  for (; (Ce = Bt()) && Ce < 33; )
    ut();
  return ir(e) > 2 || ir(Ce) > 3 ? "" : " ";
}
function ph(e, t) {
  for (; --t && ut() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return ga(e, zr() + (t < 6 && Bt() == 32 && ut() == 32));
}
function no(e) {
  for (; ut(); )
    switch (Ce) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && no(Ce);
        break;
      case 40:
        e === 41 && no(e);
        break;
      case 92:
        ut();
        break;
    }
  return Je;
}
function mh(e, t) {
  for (; ut() && e + Ce !== 57; )
    if (e + Ce === 84 && Bt() === 47)
      break;
  return "/*" + ga(t, Je - 1) + "*" + mi(e === 47 ? e : ut());
}
function gh(e) {
  for (; !ir(Bt()); )
    ut();
  return ga(e, Je);
}
function vh(e) {
  return fh(Vr("", null, null, null, [""], e = dh(e), 0, [0], e));
}
function Vr(e, t, n, r, a, o, i, l, s) {
  for (var c = 0, u = 0, d = i, f = 0, g = 0, y = 0, m = 1, h = 1, A = 1, S = 0, C = "", w = a, x = o, E = r, T = C; h; )
    switch (y = S, S = ut()) {
      case 40:
        if (y != 108 && or(T, d - 1) == 58) {
          sh(T += Ur(Ma(S), "&", "&\f"), "&\f", Kc(c ? l[c - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += Ma(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += hh(y);
        break;
      case 92:
        T += ph(zr() - 1, 7);
        continue;
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            Nr(yh(mh(ut(), zr()), t, n, s), s), (ir(y || 1) == 5 || ir(Bt() || 1) == 5) && mt(T) && jn(T, -1, void 0) !== " " && (T += " ");
            break;
          default:
            T += "/";
        }
        break;
      case 123 * m:
        l[c++] = mt(T) * A;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            A == -1 && (T = Ur(T, /\f/g, "")), g > 0 && (mt(T) - d || m === 0 && y === 47) && Nr(g > 32 ? ts(T + ";", r, n, d - 1, s) : ts(Ur(T, " ", "") + ";", r, n, d - 2, s), s);
            break;
          case 59:
            T += ";";
          default:
            if (Nr(E = es(T, t, n, c, u, a, l, C, w = [], x = [], d, o), o), S === 123)
              if (u === 0)
                Vr(T, t, E, E, w, o, d, l, x);
              else
                switch (f === 99 && or(T, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vr(e, E, E, r && Nr(es(e, E, E, 0, 0, a, l, C, a, w = [], d, x), x), a, x, d, l, r ? w : x);
                    break;
                  default:
                    Vr(T, E, E, E, [""], x, 0, l, x);
                }
        }
        c = u = g = 0, m = A = 1, C = T = "", d = i;
        break;
      case 58:
        d = 1 + mt(T), g = y;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && uh() == 125)
            continue;
        }
        switch (T += mi(S), S * m) {
          case 38:
            A = u > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (mt(T) - 1) * A, A = 1;
            break;
          case 64:
            Bt() === 45 && (T += Ma(ut())), f = Bt(), u = d = mt(C = T += gh(zr())), S++;
            break;
          case 45:
            y === 45 && mt(T) == 2 && (m = 0);
        }
    }
  return o;
}
function es(e, t, n, r, a, o, i, l, s, c, u, d) {
  for (var f = a - 1, g = a === 0 ? o : [""], y = ch(g), m = 0, h = 0, A = 0; m < r; ++m)
    for (var S = 0, C = jn(e, f + 1, f = Kc(h = i[m])), w = e; S < y; ++S)
      (w = Qc(h > 0 ? g[S] + " " + C : Ur(C, /&\f/g, g[S]))) && (s[A++] = w);
  return gi(e, t, n, a === 0 ? Wc : l, s, c, u, d);
}
function yh(e, t, n, r) {
  return gi(e, t, n, Vc, mi(lh()), jn(e, 2, -2), 0, r);
}
function ts(e, t, n, r, a) {
  return gi(e, t, n, Gc, jn(e, 0, r), jn(e, r + 1, -1), r, a);
}
function ro(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function bh(e, t, n, r) {
  switch (e.type) {
    case ih:
      if (e.children.length) break;
    case ah:
    case Gc:
      return e.return = e.return || e.value;
    case Vc:
      return "";
    case oh:
      return e.return = e.value + "{" + ro(e.children, r) + "}";
    case Wc:
      if (!mt(e.value = e.props.join(","))) return "";
  }
  return mt(n = ro(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Xc(e, t) {
  var n = t.path, r = t.parentSelectors;
  Wt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var xh = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Xc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Ch = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Xc("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, ns = "data-ant-cssinjs-cache-path", Yc = "_FILE_STYLE__", sn, Zc = !0;
function Sh() {
  if (!sn && (sn = {}, Nt())) {
    var e = document.createElement("div");
    e.className = ns, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Y(o, 2), l = i[0], s = i[1];
      sn[l] = s;
    });
    var n = document.querySelector("style[".concat(ns, "]"));
    if (n) {
      var r;
      Zc = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Eh(e) {
  return Sh(), !!sn[e];
}
function wh(e) {
  var t = sn[e], n = null;
  if (t && Nt())
    if (Zc)
      n = Yc;
    else {
      var r = document.querySelector("style[".concat(lt, '="').concat(sn[e], '"]'));
      r ? n = r.innerHTML : delete sn[e];
    }
  return [n, t];
}
var Jc = "_skip_check_", el = "_multi_value_";
function Wr(e) {
  var t = ro(vh(e), bh);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Th(e) {
  return ue(e) === "object" && e && (Jc in e || el in e);
}
function rs(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(He(s.slice(1))).join(" ");
  });
  return o.join(",");
}
var Ah = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, g = n.linters, y = g === void 0 ? [] : g, m = "", h = {};
  function A(w) {
    var x = w.getName(l);
    if (!h[x]) {
      var E = e(w.style, n, {
        root: !1,
        parentSelectors: i
      }), T = Y(E, 1), N = T[0];
      h[x] = "@keyframes ".concat(w.getName(l)).concat(N);
    }
  }
  function S(w) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(E) {
      Array.isArray(E) ? S(E, x) : E && x.push(E);
    }), x;
  }
  var C = S(Array.isArray(t) ? t : [t]);
  return C.forEach(function(w) {
    var x = typeof w == "string" && !a ? {} : w;
    if (typeof x == "string")
      m += "".concat(x, `
`);
    else if (x._keyframe)
      A(x);
    else {
      var E = f.reduce(function(T, N) {
        var M;
        return (N == null || (M = N.visit) === null || M === void 0 ? void 0 : M.call(N, T)) || T;
      }, x);
      Object.keys(E).forEach(function(T) {
        var N = E[T];
        if (ue(N) === "object" && N && (T !== "animationName" || !N._keyframe) && !Th(N)) {
          var M = !1, L = T.trim(), I = !1;
          (a || o) && l ? L.startsWith("@") ? M = !0 : L === "&" ? L = rs("", l, u) : L = rs(T, l, u) : a && !l && (L === "&" || L === "") && (L = "", I = !0);
          var H = e(N, n, {
            root: I,
            injectHash: M,
            parentSelectors: [].concat(He(i), [L])
          }), $ = Y(H, 2), D = $[0], W = $[1];
          h = B(B({}, h), W), m += "".concat(L).concat(D);
        } else {
          let R = function(O, j) {
            G.env.NODE_ENV !== "production" && (ue(N) !== "object" || !(N != null && N[Jc])) && [xh, Ch].concat(He(y)).forEach(function(F) {
              return F(O, j, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var _ = O.replace(/[A-Z]/g, function(F) {
              return "-".concat(F.toLowerCase());
            }), U = j;
            !rh[O] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), O === "animationName" && j !== null && j !== void 0 && j._keyframe && (A(j), U = j.getName(l)), m += "".concat(_, ":").concat(U, ";");
          };
          var P, k = (P = N == null ? void 0 : N.value) !== null && P !== void 0 ? P : N;
          ue(N) === "object" && N !== null && N !== void 0 && N[el] && Array.isArray(k) ? k.forEach(function(O) {
            R(T, O);
          }) : R(T, k);
        }
      });
    }
  }), a ? s && (m = "@layer ".concat(s.name, " {").concat(m, "}"), s.dependencies && (h["@layer ".concat(s.name)] = s.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(s.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, h];
};
function tl(e, t) {
  return ar("".concat(e.join("%")).concat(t));
}
function kh() {
  return null;
}
var nl = "style";
function ao(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, u = p.useContext(pa), d = u.autoClear, f = u.mock, g = u.defaultCache, y = u.hashPriority, m = u.container, h = u.ssrInline, A = u.transformers, S = u.linters, C = u.cache, w = u.layer, x = n._tokenKey, E = [x];
  w && E.push("layer"), E.push.apply(E, He(r));
  var T = eo;
  G.env.NODE_ENV !== "production" && f !== void 0 && (T = f === "client");
  var N = pi(
    nl,
    E,
    // Create cache if needed
    function() {
      var $ = E.join("|");
      if (Eh($)) {
        var D = wh($), W = Y(D, 2), P = W[0], k = W[1];
        if (P)
          return [P, x, k, {}, l, c];
      }
      var R = t(), O = Ah(R, {
        hashId: a,
        hashPriority: y,
        layer: w ? o : void 0,
        path: r.join("-"),
        transformers: A,
        linters: S
      }), j = Y(O, 2), _ = j[0], U = j[1], F = Wr(_), K = tl(E, F);
      return [F, x, K, U, l, c];
    },
    // Remove cache if no need
    function($, D) {
      var W = Y($, 3), P = W[2];
      (D || d) && eo && Bc(P, {
        mark: lt
      });
    },
    // Effect: Inject style here
    function($) {
      var D = Y($, 4), W = D[0];
      D[1];
      var P = D[2], k = D[3];
      if (T && W !== Yc) {
        var R = {
          mark: lt,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: c
        }, O = typeof i == "function" ? i() : i;
        O && (R.csp = {
          nonce: O
        });
        var j = [], _ = [];
        Object.keys(k).forEach(function(F) {
          F.startsWith("@layer") ? j.push(F) : _.push(F);
        }), j.forEach(function(F) {
          on(Wr(k[F]), "_layer-".concat(F), B(B({}, R), {}, {
            prepend: !0
          }));
        });
        var U = on(W, P, R);
        U[Ft] = C.instanceId, U.setAttribute(In, x), G.env.NODE_ENV !== "production" && U.setAttribute(Rf, E.join("|")), _.forEach(function(F) {
          on(Wr(k[F]), "_effect-".concat(F), R);
        });
      }
    }
  ), M = Y(N, 3), L = M[0], I = M[1], H = M[2];
  return function($) {
    var D;
    return !h || T || !g ? D = /* @__PURE__ */ p.createElement(kh, null) : D = /* @__PURE__ */ p.createElement("style", Ze({}, Z(Z({}, In, I), lt, H), {
      dangerouslySetInnerHTML: {
        __html: L
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, D, $);
  };
}
var Nh = function(t, n, r) {
  var a = Y(t, 6), o = a[0], i = a[1], l = a[2], s = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var g = o, y = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = ta(o, i, l, y, f), s && Object.keys(s).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var h = Wr(s[m]), A = ta(h, i, "_effect-".concat(m), y, f);
      m.startsWith("@layer") ? g = A + g : g += A;
    }
  }), [u, l, g];
}, rl = "cssVar", Ph = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, u = p.useContext(pa), d = u.cache.instanceId, f = u.container, g = l._tokenKey, y = [].concat(He(t.path), [r, c, g]), m = pi(rl, y, function() {
    var h = n(), A = Hc(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), S = Y(A, 2), C = S[0], w = S[1], x = tl(y, w);
    return [C, w, x, r];
  }, function(h) {
    var A = Y(h, 3), S = A[2];
    eo && Bc(S, {
      mark: lt
    });
  }, function(h) {
    var A = Y(h, 3), S = A[1], C = A[2];
    if (S) {
      var w = on(S, C, {
        mark: lt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      w[Ft] = d, w.setAttribute(In, r);
    }
  });
  return m;
}, Rh = function(t, n, r) {
  var a = Y(t, 4), o = a[1], i = a[2], l = a[3], s = r || {}, c = s.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = ta(o, l, i, d, c);
  return [u, i, f];
};
Z(Z(Z({}, nl, Nh), zc, nh), rl, Rh);
var Yn = /* @__PURE__ */ function() {
  function e(t, n) {
    xt(this, e), Z(this, "name", void 0), Z(this, "style", void 0), Z(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Ct(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function pn(e) {
  return e.notSplit = !0, e;
}
pn(["borderTop", "borderBottom"]), pn(["borderTop"]), pn(["borderBottom"]), pn(["borderLeft", "borderRight"]), pn(["borderLeft"]), pn(["borderRight"]);
var vi = /* @__PURE__ */ p.createContext({});
function Mh(e) {
  return jc(e) || Rc(e) || di(e) || _c();
}
function oo(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function al(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Mh(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = He(e) : l = B({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = al(l[o], i, n, r), l;
}
function Oa(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !oo(e, t.slice(0, -1)) ? e : al(e, t, n, r);
}
function Oh(e) {
  return ue(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function as(e) {
  return Array.isArray(e) ? [] : {};
}
var Ih = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function jh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = as(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var s = new Set(l), c = oo(a, i), u = Array.isArray(c);
      if (u || Oh(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = oo(r, i);
          u ? r = Oa(r, i, []) : (!d || ue(d) !== "object") && (r = Oa(r, i, as(c))), Ih(c).forEach(function(f) {
            o([].concat(He(i), [f]), s);
          });
        }
      } else
        r = Oa(r, i, c);
    }
    o([]);
  }), r;
}
function ol() {
}
let wt = null;
function _h() {
  wt = null, Ac();
}
let yi = ol;
G.env.NODE_ENV !== "production" && (yi = (e, t, n) => {
  Wt(e, `[antd: ${t}] ${n}`), G.env.NODE_ENV === "test" && _h();
});
const il = /* @__PURE__ */ p.createContext({}), $n = G.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(il), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = wt;
        wt || (wt = {}), wt[e] = wt[e] || [], wt[e].includes(o || "") || wt[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", wt);
      } else
        G.env.NODE_ENV !== "production" && yi(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = ol, e;
}, va = yi, Lh = /* @__PURE__ */ p.createContext(void 0);
var Dh = {
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
}, Fh = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Bh = B(B({}, Fh), {}, {
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
const sl = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, os = {
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
  }, Bh),
  timePickerLocale: Object.assign({}, sl)
}, ze = "${label} is not a valid ${type}", ya = {
  locale: "en",
  Pagination: Dh,
  DatePicker: os,
  TimePicker: sl,
  Calendar: os,
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
        string: ze,
        method: ze,
        array: ze,
        object: ze,
        number: ze,
        date: ze,
        boolean: ze,
        integer: ze,
        float: ze,
        regexp: ze,
        email: ze,
        url: ze,
        hex: ze
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
Object.assign({}, ya.Modal);
let Gr = [];
const is = () => Gr.reduce((e, t) => Object.assign(Object.assign({}, e), t), ya.Modal);
function $h(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Gr.push(t), is(), () => {
      Gr = Gr.filter((n) => n !== t), is();
    };
  }
  Object.assign({}, ya.Modal);
}
const cl = /* @__PURE__ */ p.createContext(void 0), ll = "internalMark", ul = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (G.env.NODE_ENV !== "production") {
    const o = $n("LocaleProvider");
    G.env.NODE_ENV !== "production" && o(r === ll, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => $h(t == null ? void 0 : t.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(cl.Provider, {
    value: a
  }, n);
};
G.env.NODE_ENV !== "production" && (ul.displayName = "LocaleProvider");
function Re(e, t) {
  Hh(e) && (e = "100%");
  var n = Uh(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Pr(e) {
  return Math.min(1, Math.max(0, e));
}
function Hh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Uh(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function dl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Rr(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function qt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function zh(e, t, n) {
  return {
    r: Re(e, 255) * 255,
    g: Re(t, 255) * 255,
    b: Re(n, 255) * 255
  };
}
function ss(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
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
function Ia(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Vh(e, t, n) {
  var r, a, o;
  if (e = Re(e, 360), t = Re(t, 100), n = Re(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Ia(l, i, e + 1 / 3), a = Ia(l, i, e), o = Ia(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function io(e, t, n) {
  e = Re(e, 255), t = Re(t, 255), n = Re(n, 255);
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
function Wh(e, t, n) {
  e = Re(e, 360) * 6, t = Re(t, 100), n = Re(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), l = n * (1 - (1 - a) * t), s = r % 6, c = [n, i, o, o, l, n][s], u = [l, n, n, i, o, o][s], d = [o, o, l, n, n, i][s];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function so(e, t, n, r) {
  var a = [
    qt(Math.round(e).toString(16)),
    qt(Math.round(t).toString(16)),
    qt(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Gh(e, t, n, r, a) {
  var o = [
    qt(Math.round(e).toString(16)),
    qt(Math.round(t).toString(16)),
    qt(Math.round(n).toString(16)),
    qt(Kh(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Kh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function cs(e) {
  return Ve(e) / 255;
}
function Ve(e) {
  return parseInt(e, 16);
}
function Qh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var co = {
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
function mn(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = Yh(e)), typeof e == "object" && (Et(e.r) && Et(e.g) && Et(e.b) ? (t = zh(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Et(e.h) && Et(e.s) && Et(e.v) ? (r = Rr(e.s), a = Rr(e.v), t = Wh(e.h, r, a), i = !0, l = "hsv") : Et(e.h) && Et(e.s) && Et(e.l) && (r = Rr(e.s), o = Rr(e.l), t = Vh(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = dl(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var qh = "[-\\+]?\\d+%?", Xh = "[-\\+]?\\d*\\.\\d+%?", $t = "(?:".concat(Xh, ")|(?:").concat(qh, ")"), ja = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), _a = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), nt = {
  CSS_UNIT: new RegExp($t),
  rgb: new RegExp("rgb" + ja),
  rgba: new RegExp("rgba" + _a),
  hsl: new RegExp("hsl" + ja),
  hsla: new RegExp("hsla" + _a),
  hsv: new RegExp("hsv" + ja),
  hsva: new RegExp("hsva" + _a),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Yh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (co[e])
    e = co[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = nt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = nt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = nt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = nt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = nt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = nt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = nt.hex8.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    a: cs(n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex6.exec(e), n ? {
    r: Ve(n[1]),
    g: Ve(n[2]),
    b: Ve(n[3]),
    format: t ? "name" : "hex"
  } : (n = nt.hex4.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    a: cs(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex3.exec(e), n ? {
    r: Ve(n[1] + n[1]),
    g: Ve(n[2] + n[2]),
    b: Ve(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Et(e) {
  return !!nt.CSS_UNIT.exec(String(e));
}
var Be = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Qh(t)), this.originalInput = t;
      var a = mn(t);
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
      return this.a = dl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = io(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = io(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ss(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ss(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), so(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Gh(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Re(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Re(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + so(this.r, this.g, this.b, !1), n = 0, r = Object.entries(co); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Pr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Pr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Pr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Pr(n.s), new e(n);
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
), Mr = 2, ls = 0.16, Zh = 0.05, Jh = 0.05, ep = 0.15, fl = 5, hl = 4, tp = [{
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
function us(e) {
  var t = e.r, n = e.g, r = e.b, a = io(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Or(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(so(t, n, r, !1));
}
function np(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function ds(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Mr * t : Math.round(e.h) + Mr * t : r = n ? Math.round(e.h) + Mr * t : Math.round(e.h) - Mr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function fs(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - ls * t : t === hl ? r = e.s + ls : r = e.s + Zh * t, r > 1 && (r = 1), n && t === fl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function hs(e, t, n) {
  var r;
  return n ? r = e.v + Jh * t : r = e.v - ep * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function sr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = mn(e), a = fl; a > 0; a -= 1) {
    var o = us(r), i = Or(mn({
      h: ds(o, a, !0),
      s: fs(o, a, !0),
      v: hs(o, a, !0)
    }));
    n.push(i);
  }
  n.push(Or(r));
  for (var l = 1; l <= hl; l += 1) {
    var s = us(r), c = Or(mn({
      h: ds(s, l),
      s: fs(s, l),
      v: hs(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? tp.map(function(u) {
    var d = u.index, f = u.opacity, g = Or(np(mn(t.backgroundColor || "#141414"), mn(n[d]), f * 100));
    return g;
  }) : n;
}
var La = {
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
}, lo = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
lo.primary = lo[5];
var uo = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
uo.primary = uo[5];
var fo = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
fo.primary = fo[5];
var ho = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
ho.primary = ho[5];
var po = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
po.primary = po[5];
var mo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
mo.primary = mo[5];
var go = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
go.primary = go[5];
var vo = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
vo.primary = vo[5];
var na = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
na.primary = na[5];
var yo = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
yo.primary = yo[5];
var bo = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
bo.primary = bo[5];
var xo = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
xo.primary = xo[5];
var Co = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Co.primary = Co[5];
var Da = {
  red: lo,
  volcano: uo,
  orange: fo,
  gold: ho,
  yellow: po,
  lime: mo,
  green: go,
  cyan: vo,
  blue: na,
  geekblue: yo,
  purple: bo,
  magenta: xo,
  grey: Co
};
const pl = {
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
}, cr = Object.assign(Object.assign({}, pl), {
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
function rp(e, t) {
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
  } = e, d = n(s), f = n(a), g = n(o), y = n(i), m = n(l), h = r(c, u), A = e.colorLink || e.colorInfo, S = n(A), C = new Be(y[1]).mix(new Be(y[3]), 50).toHexString();
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
    colorErrorBgFilledHover: C,
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
    colorBgMask: new Be("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const ap = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function op(e) {
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
  }, ap(r));
}
const ip = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function sp(e) {
  return (e + 8) / e;
}
function cp(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: sp(n)
  }));
}
const lp = (e) => {
  const t = cp(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], l = r[1], s = r[0], c = r[2];
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
function up(e) {
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
const qe = (e, t) => new Be(e).setAlpha(t).toRgbString(), Xn = (e, t) => new Be(e).darken(t).toHexString(), dp = (e) => {
  const t = sr(e);
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
}, fp = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: qe(r, 0.88),
    colorTextSecondary: qe(r, 0.65),
    colorTextTertiary: qe(r, 0.45),
    colorTextQuaternary: qe(r, 0.25),
    colorFill: qe(r, 0.15),
    colorFillSecondary: qe(r, 0.06),
    colorFillTertiary: qe(r, 0.04),
    colorFillQuaternary: qe(r, 0.02),
    colorBgSolid: qe(r, 1),
    colorBgSolidHover: qe(r, 0.75),
    colorBgSolidActive: qe(r, 0.95),
    colorBgLayout: Xn(n, 4),
    colorBgContainer: Xn(n, 0),
    colorBgElevated: Xn(n, 0),
    colorBgSpotlight: qe(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Xn(n, 15),
    colorBorderSecondary: Xn(n, 6)
  };
};
function hp(e) {
  La.pink = La.magenta, Da.pink = Da.magenta;
  const t = Object.keys(pl).map((n) => {
    const r = e[n] === La[n] ? Da[n] : sr(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), rp(e, {
    generateColorPalettes: dp,
    generateNeutralColorPalettes: fp
  })), lp(e.fontSize)), up(e)), ip(e)), op(e));
}
const ml = Ja(hp), So = {
  token: cr,
  override: {
    override: cr
  },
  hashed: !0
}, gl = /* @__PURE__ */ q.createContext(So), Eo = "ant", bi = "anticon", ey = ["outlined", "borderless", "filled"], pp = (e, t) => t || (e ? `${Eo}-${e}` : Eo), Ut = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: pp,
  iconPrefixCls: bi
}), mp = `-ant-${Date.now()}-${Math.random()}`;
function gp(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, a = (i, l) => {
    const s = new Be(i), c = sr(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Be(t.primaryColor), l = sr(i.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new Be(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function vp(e, t) {
  const n = gp(e, t);
  Nt() ? on(n, `${mp}-dynamic-theme`) : G.env.NODE_ENV !== "production" && va(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const wo = /* @__PURE__ */ p.createContext(!1), yp = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = p.useContext(wo);
  return /* @__PURE__ */ p.createElement(wo.Provider, {
    value: n ?? r
  }, t);
}, lr = /* @__PURE__ */ p.createContext(void 0), bp = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = p.useContext(lr);
  return /* @__PURE__ */ p.createElement(lr.Provider, {
    value: n || r
  }, t);
};
function xp() {
  const e = p.useContext(wo), t = p.useContext(lr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var vl = /* @__PURE__ */ Ct(function e() {
  xt(this, e);
}), yl = "CALC_UNIT", Cp = new RegExp(yl, "g");
function Fa(e) {
  return typeof e == "number" ? "".concat(e).concat(yl) : e;
}
var Sp = /* @__PURE__ */ function(e) {
  ua(n, e);
  var t = da(n);
  function n(r, a) {
    var o;
    xt(this, n), o = t.call(this), Z(an(o), "result", ""), Z(an(o), "unitlessCssVar", void 0), Z(an(o), "lowPriority", void 0);
    var i = ue(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = Fa(r) : i === "string" && (o.result = r), o;
  }
  return Ct(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Fa(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Fa(a))), this.lowPriority = !0, this;
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
      }) && (s = !1), this.result = this.result.replace(Cp, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(vl), Ep = /* @__PURE__ */ function(e) {
  ua(n, e);
  var t = da(n);
  function n(r) {
    var a;
    return xt(this, n), a = t.call(this), Z(an(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
  }
  return Ct(n, [{
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
}(vl), wp = function(t, n) {
  var r = t === "css" ? Sp : Ep;
  return function(a) {
    return new r(a, n);
  };
}, ps = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function To(e) {
  var t = p.useRef();
  t.current = e;
  var n = p.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Ao(e) {
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
function ms(e, t, n, r) {
  var a = B({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(l) {
      var s = Y(l, 2), c = s[0], u = s[1];
      if (G.env.NODE_ENV !== "production" && Wt(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var i = B(B({}, n), a);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var bl = G.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ko = !0;
function xi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!bl)
    return Object.assign.apply(Object, [{}].concat(t));
  ko = !1;
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
  }), ko = !0, r;
}
var gs = {};
function Tp() {
}
var Ap = function(t) {
  var n, r = t, a = Tp;
  return bl && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (ko) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), a = function(i, l) {
    var s;
    gs[i] = {
      global: Array.from(n),
      component: B(B({}, (s = gs[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function vs(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(xi(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function kp(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "max(".concat(r.map(function(o) {
        return Ht(o);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return "min(".concat(r.map(function(o) {
        return Ht(o);
      }).join(","), ")");
    }
  };
}
var Np = 1e3 * 60 * 10, Pp = /* @__PURE__ */ function() {
  function e() {
    xt(this, e), Z(this, "map", /* @__PURE__ */ new Map()), Z(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), Z(this, "nextID", 0), Z(this, "lastAccessBeat", /* @__PURE__ */ new Map()), Z(this, "accessBeat", 0);
  }
  return Ct(e, [{
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
          r - a > Np && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), ys = new Pp();
function Rp(e, t) {
  return q.useMemo(function() {
    var n = ys.get(t);
    if (n)
      return n;
    var r = e();
    return ys.set(t, r), r;
  }, t);
}
var Mp = function() {
  return {};
};
function Op(e) {
  var t = e.useCSP, n = t === void 0 ? Mp : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function s(f, g, y, m) {
    var h = Array.isArray(f) ? f[0] : f;
    function A(N) {
      return "".concat(String(h)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var S = (m == null ? void 0 : m.unitless) || {}, C = typeof l == "function" ? l(f) : {}, w = B(B({}, C), {}, Z({}, A("zIndexPopup"), !0));
    Object.keys(S).forEach(function(N) {
      w[A(N)] = S[N];
    });
    var x = B(B({}, m), {}, {
      unitless: w,
      prefixToken: A
    }), E = u(f, g, y, x), T = c(h, y, x);
    return function(N) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, L = E(N, M), I = Y(L, 2), H = I[1], $ = T(M), D = Y($, 2), W = D[0], P = D[1];
      return [W, H, P];
    };
  }
  function c(f, g, y) {
    var m = y.unitless, h = y.injectStyle, A = h === void 0 ? !0 : h, S = y.prefixToken, C = y.ignore, w = function(T) {
      var N = T.rootCls, M = T.cssVar, L = M === void 0 ? {} : M, I = r(), H = I.realToken;
      return Ph({
        path: [f],
        prefix: L.prefix,
        key: L.key,
        unitless: m,
        ignore: C,
        token: H,
        scope: N
      }, function() {
        var $ = vs(f, H, g), D = ms(f, H, $, {
          deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
        });
        return Object.keys($).forEach(function(W) {
          D[S(W)] = D[W], delete D[W];
        }), D;
      }), null;
    }, x = function(T) {
      var N = r(), M = N.cssVar;
      return [function(L) {
        return A && M ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(w, {
          rootCls: T,
          cssVar: M,
          component: f
        }), L) : L;
      }, M == null ? void 0 : M.key];
    };
    return x;
  }
  function u(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], A = Y(h, 1), S = A[0], C = h.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(x) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, T = r(), N = T.theme, M = T.realToken, L = T.hashId, I = T.token, H = T.cssVar, $ = a(), D = $.rootPrefixCls, W = $.iconPrefixCls, P = n(), k = H ? "css" : "js", R = Rp(function() {
        var K = /* @__PURE__ */ new Set();
        return H && Object.keys(m.unitless || {}).forEach(function(Q) {
          K.add(Hr(Q, H.prefix)), K.add(Hr(Q, ps(S, H.prefix)));
        }), wp(k, K);
      }, [k, S, H == null ? void 0 : H.prefix]), O = kp(k), j = O.max, _ = O.min, U = {
        theme: N,
        token: I,
        hashId: L,
        nonce: function() {
          return P.nonce;
        },
        clientOnly: m.clientOnly,
        layer: w,
        // antd is always at top of styles
        order: m.order || -999
      };
      ao(B(B({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", D]
      }), function() {
        return typeof o == "function" ? o(I) : [];
      });
      var F = ao(B(B({}, U), {}, {
        path: [C, x, W]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var K = Ap(I), Q = K.token, ne = K.flush, ee = vs(S, M, y), Me = ".".concat(x), Se = ms(S, M, ee, {
          deprecatedTokens: m.deprecatedTokens
        });
        H && ee && ue(ee) === "object" && Object.keys(ee).forEach(function(Ee) {
          ee[Ee] = "var(".concat(Hr(Ee, ps(S, H.prefix)), ")");
        });
        var ye = xi(Q, {
          componentCls: Me,
          prefixCls: x,
          iconCls: ".".concat(W),
          antCls: ".".concat(D),
          calc: R,
          // @ts-ignore
          max: j,
          // @ts-ignore
          min: _
        }, H ? ee : Se), Ke = g(ye, {
          hashId: L,
          prefixCls: x,
          rootPrefixCls: D,
          iconPrefixCls: W
        });
        ne(S, Se);
        var Te = typeof i == "function" ? i(ye, x, E, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Te, Ke];
      });
      return [F, L];
    };
  }
  function d(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, g, y, B({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), A = function(C) {
      var w = C.prefixCls, x = C.rootCls, E = x === void 0 ? w : x;
      return h(w, E), null;
    };
    return G.env.NODE_ENV !== "production" && (A.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), A;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Ip = "5.21.6";
function Ba(e) {
  return e >= 0 && e <= 255;
}
function Ir(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new Be(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new Be(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - i * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c), f = Math.round((a - s * (1 - c)) / c);
    if (Ba(u) && Ba(d) && Ba(f))
      return new Be({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Be({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var jp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function xl(e) {
  const {
    override: t
  } = e, n = jp(e, ["override"]), r = Object.assign({}, t);
  Object.keys(cr).forEach((f) => {
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
    colorSplit: Ir(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Ir(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Ir(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Ir(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new Be("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Be("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Be("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var bs = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Cl = {
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
}, _p = {
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
}, Lp = {
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
}, Sl = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = bs(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = xl(i), o && Object.entries(o).forEach((l) => {
    let [s, c] = l;
    const {
      theme: u
    } = c, d = bs(c, ["theme"]);
    let f = d;
    u && (f = Sl(Object.assign(Object.assign({}, i), d), {
      override: d
    }, u)), i[s] = f;
  }), i;
};
function Hn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = q.useContext(gl), o = `${Ip}-${t || ""}`, i = n || ml, [l, s, c] = th(i, [cr, e], {
    salt: o,
    override: r,
    getComputedToken: Sl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: xl,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: Cl,
      ignore: _p,
      preserve: Lp
    }
  });
  return [i, c, t ? s : "", l, a];
}
const ty = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, Dp = function(e) {
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
}, Fp = () => ({
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
}), ny = () => ({
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
}), Bp = (e) => ({
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
}), $p = (e, t, n, r) => {
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
}, Hp = (e) => ({
  outline: `${Ht(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), Up = (e) => ({
  "&:focus-visible": Object.assign({}, Hp(e))
}), El = (e, t) => {
  const [n, r] = Hn();
  return ao({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Fp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: zp,
  genComponentStyleHook: ry,
  genSubStyleComponent: Vp
} = Op({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = p.useContext(Ut);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, a] = Hn();
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
    } = p.useContext(Ut);
    return El(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Bp(e)
  }],
  getCommonStyle: $p,
  getCompUnitless: () => Cl
}), Wp = Object.assign({}, ri), {
  useId: xs
} = Wp, Gp = () => "", Kp = typeof xs > "u" ? Gp : xs;
function Qp(e, t, n) {
  var r, a;
  const o = $n("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, So), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : So.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = Kp();
  if (G.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || s);
    G.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ui(() => {
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
    return !kf(d, g, !0);
  }));
}
var qp = ["children"], wl = /* @__PURE__ */ p.createContext({});
function Xp(e) {
  var t = e.children, n = cn(e, qp);
  return /* @__PURE__ */ p.createElement(wl.Provider, {
    value: n
  }, t);
}
var Yp = /* @__PURE__ */ function(e) {
  ua(n, e);
  var t = da(n);
  function n() {
    return xt(this, n), t.apply(this, arguments);
  }
  return Ct(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(p.Component);
function Zp(e) {
  var t = p.useReducer(function(l) {
    return l + 1;
  }, 0), n = Y(t, 2), r = n[1], a = p.useRef(e), o = To(function() {
    return a.current;
  }), i = To(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, i];
}
var Pt = "none", jr = "appear", _r = "enter", Lr = "leave", Cs = "none", ot = "prepare", gn = "start", vn = "active", Ci = "end", Tl = "prepared";
function Ss(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Jp(e, t) {
  var n = {
    animationend: Ss("Animation", "AnimationEnd"),
    transitionend: Ss("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var em = Jp(Nt(), typeof window < "u" ? window : {}), Al = {};
if (Nt()) {
  var tm = document.createElement("div");
  Al = tm.style;
}
var Dr = {};
function kl(e) {
  if (Dr[e])
    return Dr[e];
  var t = em[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Al)
        return Dr[e] = t[o], Dr[e];
    }
  return "";
}
var Nl = kl("animationend"), Pl = kl("transitionend"), Rl = !!(Nl && Pl), Es = Nl || "animationend", ws = Pl || "transitionend";
function Ts(e, t) {
  if (!e) return null;
  if (ue(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const nm = function(e) {
  var t = p.useRef();
  function n(a) {
    a && (a.removeEventListener(ws, e), a.removeEventListener(Es, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(ws, e), a.addEventListener(Es, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Ml = Nt() ? p.useLayoutEffect : p.useEffect;
const rm = function() {
  var e = p.useRef(null);
  function t() {
    ea.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = ea(function() {
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
var am = [ot, gn, vn, Ci], om = [ot, Tl], Ol = !1, im = !0;
function Il(e) {
  return e === vn || e === Ci;
}
const sm = function(e, t, n) {
  var r = Ao(Cs), a = Y(r, 2), o = a[0], i = a[1], l = rm(), s = Y(l, 2), c = s[0], u = s[1];
  function d() {
    i(ot, !0);
  }
  var f = t ? om : am;
  return Ml(function() {
    if (o !== Cs && o !== Ci) {
      var g = f.indexOf(o), y = f[g + 1], m = n(o);
      m === Ol ? i(y, !0) : y && c(function(h) {
        function A() {
          h.isCanceled() || i(y, !0);
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
function cm(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, g = r.onEnterPrepare, y = r.onLeavePrepare, m = r.onAppearStart, h = r.onEnterStart, A = r.onLeaveStart, S = r.onAppearActive, C = r.onEnterActive, w = r.onLeaveActive, x = r.onAppearEnd, E = r.onEnterEnd, T = r.onLeaveEnd, N = r.onVisibleChanged, M = Ao(), L = Y(M, 2), I = L[0], H = L[1], $ = Zp(Pt), D = Y($, 2), W = D[0], P = D[1], k = Ao(null), R = Y(k, 2), O = R[0], j = R[1], _ = W(), U = p.useRef(!1), F = p.useRef(null);
  function K() {
    return n();
  }
  var Q = p.useRef(!1);
  function ne() {
    P(Pt), j(null, !0);
  }
  var ee = To(function(he) {
    var de = W();
    if (de !== Pt) {
      var Oe = K();
      if (!(he && !he.deadline && he.target !== Oe)) {
        var ft = Q.current, Ue;
        de === jr && ft ? Ue = x == null ? void 0 : x(Oe, he) : de === _r && ft ? Ue = E == null ? void 0 : E(Oe, he) : de === Lr && ft && (Ue = T == null ? void 0 : T(Oe, he)), ft && Ue !== !1 && ne();
      }
    }
  }), Me = nm(ee), Se = Y(Me, 1), ye = Se[0], Ke = function(de) {
    switch (de) {
      case jr:
        return Z(Z(Z({}, ot, f), gn, m), vn, S);
      case _r:
        return Z(Z(Z({}, ot, g), gn, h), vn, C);
      case Lr:
        return Z(Z(Z({}, ot, y), gn, A), vn, w);
      default:
        return {};
    }
  }, Te = p.useMemo(function() {
    return Ke(_);
  }, [_]), Ee = sm(_, !e, function(he) {
    if (he === ot) {
      var de = Te[ot];
      return de ? de(K()) : Ol;
    }
    if (be in Te) {
      var Oe;
      j(((Oe = Te[be]) === null || Oe === void 0 ? void 0 : Oe.call(Te, K(), null)) || null);
    }
    return be === vn && _ !== Pt && (ye(K()), u > 0 && (clearTimeout(F.current), F.current = setTimeout(function() {
      ee({
        deadline: !0
      });
    }, u))), be === Tl && ne(), im;
  }), V = Y(Ee, 2), Qe = V[0], be = V[1], _e = Il(be);
  Q.current = _e, Ml(function() {
    H(t);
    var he = U.current;
    U.current = !0;
    var de;
    !he && t && l && (de = jr), he && t && o && (de = _r), (he && !t && c || !he && d && !t && c) && (de = Lr);
    var Oe = Ke(de);
    de && (e || Oe[ot]) ? (P(de), Qe()) : P(Pt);
  }, [t]), p.useEffect(function() {
    // Cancel appear
    (_ === jr && !l || // Cancel enter
    _ === _r && !o || // Cancel leave
    _ === Lr && !c) && P(Pt);
  }, [l, o, c]), p.useEffect(function() {
    return function() {
      U.current = !1, clearTimeout(F.current);
    };
  }, []);
  var et = p.useRef(!1);
  p.useEffect(function() {
    I && (et.current = !0), I !== void 0 && _ === Pt && ((et.current || I) && (N == null || N(I)), et.current = !0);
  }, [I, _]);
  var dt = O;
  return Te[ot] && be === gn && (dt = B({
    transition: "none"
  }, dt)), [_, be, dt, I ?? t];
}
function lm(e) {
  var t = e;
  ue(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, s = a.removeOnLeave, c = s === void 0 ? !0 : s, u = a.forceRender, d = a.children, f = a.motionName, g = a.leavedClassName, y = a.eventProps, m = p.useContext(wl), h = m.motion, A = n(a, h), S = p.useRef(), C = p.useRef();
    function w() {
      try {
        return S.current instanceof HTMLElement ? S.current : gf(C.current);
      } catch {
        return null;
      }
    }
    var x = cm(A, l, w, a), E = Y(x, 4), T = E[0], N = E[1], M = E[2], L = E[3], I = p.useRef(L);
    L && (I.current = !0);
    var H = p.useCallback(function(O) {
      S.current = O, Nc(o, O);
    }, [o]), $, D = B(B({}, y), {}, {
      visible: l
    });
    if (!d)
      $ = null;
    else if (T === Pt)
      L ? $ = d(B({}, D), H) : !c && I.current && g ? $ = d(B(B({}, D), {}, {
        className: g
      }), H) : u || !c && !g ? $ = d(B(B({}, D), {}, {
        style: {
          display: "none"
        }
      }), H) : $ = null;
    else {
      var W;
      N === ot ? W = "prepare" : Il(N) ? W = "active" : N === gn && (W = "start");
      var P = Ts(f, "".concat(T, "-").concat(W));
      $ = d(B(B({}, D), {}, {
        className: Ge(Ts(f, T), Z(Z({}, P, P && W), f, typeof f == "string")),
        style: M
      }), H);
    }
    if (/* @__PURE__ */ p.isValidElement($) && yf($)) {
      var k = $, R = k.ref;
      R || ($ = /* @__PURE__ */ p.cloneElement($, {
        ref: H
      }));
    }
    return /* @__PURE__ */ p.createElement(Yp, {
      ref: C
    }, $);
  });
  return r.displayName = "CSSMotion", r;
}
const um = lm(Rl);
var No = "add", Po = "keep", Ro = "remove", $a = "removed";
function dm(e) {
  var t;
  return e && ue(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, B(B({}, t), {}, {
    key: String(t.key)
  });
}
function Mo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(dm);
}
function fm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Mo(e), i = Mo(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(g) {
          return B(B({}, g), {}, {
            status: No
          });
        })), r = d), n.push(B(B({}, f), {}, {
          status: Po
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(B(B({}, c), {}, {
      status: Ro
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return B(B({}, c), {}, {
      status: No
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
      return d !== c || f !== Ro;
    }), n.forEach(function(u) {
      u.key === c && (u.status = Po);
    });
  }), n;
}
var hm = ["component", "children", "onVisibleChanged", "onAllRemoved"], pm = ["status"], mm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function gm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : um, n = /* @__PURE__ */ function(r) {
    ua(o, r);
    var a = da(o);
    function o() {
      var i;
      xt(this, o);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = a.call.apply(a, [this].concat(s)), Z(an(i), "state", {
        keyEntities: []
      }), Z(an(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(g) {
            return g.key !== u ? g : B(B({}, g), {}, {
              status: $a
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(g) {
            var y = g.status;
            return y !== $a;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Ct(o, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, u = c.component, d = c.children, f = c.onVisibleChanged;
        c.onAllRemoved;
        var g = cn(c, hm), y = u || p.Fragment, m = {};
        return mm.forEach(function(h) {
          m[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ p.createElement(y, g, s.map(function(h, A) {
          var S = h.status, C = cn(h, pm), w = S === No || S === Po;
          return /* @__PURE__ */ p.createElement(t, Ze({}, m, {
            key: C.key,
            visible: w,
            eventProps: C,
            onVisibleChanged: function(E) {
              f == null || f(E, {
                key: C.key
              }), E || l.removeKey(C.key);
            }
          }), function(x, E) {
            return d(B(B({}, x), {}, {
              index: A
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, u = s.keyEntities, d = Mo(c), f = fm(u, d);
        return {
          keyEntities: f.filter(function(g) {
            var y = u.find(function(m) {
              var h = m.key;
              return g.key === h;
            });
            return !(y && y.status === $a && g.status === Ro);
          })
        };
      }
    }]), o;
  }(p.Component);
  return Z(n, "defaultProps", {
    component: "div"
  }), n;
}
const vm = gm(Rl);
function ym(e) {
  const {
    children: t
  } = e, [, n] = Hn(), {
    motion: r
  } = n, a = p.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ p.createElement(Xp, {
    motion: r
  }, t) : t;
}
const jl = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return $n("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
G.env.NODE_ENV !== "production" && (jl.displayName = "PropWarning");
const bm = G.env.NODE_ENV !== "production" ? jl : () => null;
var xm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let Oo = !1;
const Cm = G.env.NODE_ENV !== "production" ? (e) => {
  G.env.NODE_ENV !== "production" && va(!Oo, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Sm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let ra, _l, Ll, Dl;
function Kr() {
  return ra || Eo;
}
function Em() {
  return _l || bi;
}
function wm(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Tm = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (ra = t), n !== void 0 && (_l = n), "holderRender" in e && (Dl = a), r && (wm(r) ? (G.env.NODE_ENV !== "production" && va(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), vp(Kr(), r)) : Ll = r);
}, Fl = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Kr()}-${e}` : Kr()),
  getIconPrefixCls: Em,
  getRootPrefixCls: () => ra || Kr(),
  getTheme: () => Ll,
  holderRender: Dl
}), Am = (e) => {
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
    parentContext: A,
    iconPrefixCls: S,
    theme: C,
    componentDisabled: w,
    segmented: x,
    statistic: E,
    spin: T,
    calendar: N,
    carousel: M,
    cascader: L,
    collapse: I,
    typography: H,
    checkbox: $,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: k,
    steps: R,
    image: O,
    layout: j,
    list: _,
    mentions: U,
    modal: F,
    progress: K,
    result: Q,
    slider: ne,
    breadcrumb: ee,
    menu: Me,
    pagination: Se,
    input: ye,
    textArea: Ke,
    empty: Te,
    badge: Ee,
    radio: V,
    rate: Qe,
    switch: be,
    transfer: _e,
    avatar: et,
    message: dt,
    tag: he,
    table: de,
    card: Oe,
    tabs: ft,
    timeline: Ue,
    timePicker: tt,
    upload: zn,
    notification: Vn,
    tree: Sr,
    colorPicker: Wn,
    datePicker: Ca,
    rangePicker: Sa,
    flex: Ea,
    wave: te,
    dropdown: fe,
    warning: Le,
    tour: Er,
    floatButtonGroup: Ni,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  } = e, Pi = p.useCallback((xe, ke) => {
    const {
      prefixCls: ht
    } = e;
    if (ke)
      return ke;
    const pt = ht || A.getPrefixCls("");
    return xe ? `${pt}-${xe}` : pt;
  }, [A.getPrefixCls, e.prefixCls]), Gn = S || A.iconPrefixCls || bi, Kn = n || A.csp;
  El(Gn, Kn);
  const wr = Qp(C, A.theme, {
    prefixCls: Pi("")
  });
  G.env.NODE_ENV !== "production" && (Oo = Oo || !!wr);
  const wa = {
    csp: Kn,
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
    getPrefixCls: Pi,
    iconPrefixCls: Gn,
    theme: wr,
    segmented: x,
    statistic: E,
    spin: T,
    calendar: N,
    carousel: M,
    cascader: L,
    collapse: I,
    typography: H,
    checkbox: $,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: k,
    steps: R,
    image: O,
    input: ye,
    textArea: Ke,
    layout: j,
    list: _,
    mentions: U,
    modal: F,
    progress: K,
    result: Q,
    slider: ne,
    breadcrumb: ee,
    menu: Me,
    pagination: Se,
    empty: Te,
    badge: Ee,
    radio: V,
    rate: Qe,
    switch: be,
    transfer: _e,
    avatar: et,
    message: dt,
    tag: he,
    table: de,
    card: Oe,
    tabs: ft,
    timeline: Ue,
    timePicker: tt,
    upload: zn,
    notification: Vn,
    tree: Sr,
    colorPicker: Wn,
    datePicker: Ca,
    rangePicker: Sa,
    flex: Ea,
    wave: te,
    dropdown: fe,
    warning: Le,
    tour: Er,
    floatButtonGroup: Ni,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  };
  G.env.NODE_ENV !== "production" && $n("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const fn = Object.assign({}, A);
  Object.keys(wa).forEach((xe) => {
    wa[xe] !== void 0 && (fn[xe] = wa[xe]);
  }), Sm.forEach((xe) => {
    const ke = e[xe];
    ke && (fn[xe] = ke);
  }), typeof r < "u" && (fn.button = Object.assign({
    autoInsertSpace: r
  }, fn.button));
  const hn = ui(() => fn, fn, (xe, ke) => {
    const ht = Object.keys(xe), pt = Object.keys(ke);
    return ht.length !== pt.length || ht.some((Tr) => xe[Tr] !== ke[Tr]);
  }), Du = p.useMemo(() => ({
    prefixCls: Gn,
    csp: Kn
  }), [Gn, Kn]);
  let Ae = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(bm, {
    dropdownMatchSelectWidth: g
  }), t);
  const Ri = p.useMemo(() => {
    var xe, ke, ht, pt;
    return jh(((xe = ya.Form) === null || xe === void 0 ? void 0 : xe.defaultValidateMessages) || {}, ((ht = (ke = hn.locale) === null || ke === void 0 ? void 0 : ke.Form) === null || ht === void 0 ? void 0 : ht.defaultValidateMessages) || {}, ((pt = hn.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [hn, i == null ? void 0 : i.validateMessages]);
  Object.keys(Ri).length > 0 && (Ae = /* @__PURE__ */ p.createElement(Lh.Provider, {
    value: Ri
  }, Ae)), l && (Ae = /* @__PURE__ */ p.createElement(ul, {
    locale: l,
    _ANT_MARK__: ll
  }, Ae)), (Gn || Kn) && (Ae = /* @__PURE__ */ p.createElement(vi.Provider, {
    value: Du
  }, Ae)), s && (Ae = /* @__PURE__ */ p.createElement(bp, {
    size: s
  }, Ae)), Ae = /* @__PURE__ */ p.createElement(ym, null, Ae);
  const Fu = p.useMemo(() => {
    const xe = wr || {}, {
      algorithm: ke,
      token: ht,
      components: pt,
      cssVar: Tr
    } = xe, Bu = xm(xe, ["algorithm", "token", "components", "cssVar"]), Mi = ke && (!Array.isArray(ke) || ke.length > 0) ? Ja(ke) : ml, Ta = {};
    Object.entries(pt || {}).forEach(($u) => {
      let [Hu, Uu] = $u;
      const St = Object.assign({}, Uu);
      "algorithm" in St && (St.algorithm === !0 ? St.theme = Mi : (Array.isArray(St.algorithm) || typeof St.algorithm == "function") && (St.theme = Ja(St.algorithm)), delete St.algorithm), Ta[Hu] = St;
    });
    const Oi = Object.assign(Object.assign({}, cr), ht);
    return Object.assign(Object.assign({}, Bu), {
      theme: Mi,
      token: Oi,
      components: Ta,
      override: Object.assign({
        override: Oi
      }, Ta),
      cssVar: Tr
    });
  }, [wr]);
  return C && (Ae = /* @__PURE__ */ p.createElement(gl.Provider, {
    value: Fu
  }, Ae)), hn.warning && (Ae = /* @__PURE__ */ p.createElement(il.Provider, {
    value: hn.warning
  }, Ae)), w !== void 0 && (Ae = /* @__PURE__ */ p.createElement(yp, {
    disabled: w
  }, Ae)), /* @__PURE__ */ p.createElement(Ut.Provider, {
    value: hn
  }, Ae);
}, dn = (e) => {
  const t = p.useContext(Ut), n = p.useContext(cl);
  return /* @__PURE__ */ p.createElement(Am, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
dn.ConfigContext = Ut;
dn.SizeContext = lr;
dn.config = Tm;
dn.useConfig = xp;
Object.defineProperty(dn, "SizeContext", {
  get: () => (G.env.NODE_ENV !== "production" && va(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), lr)
});
G.env.NODE_ENV !== "production" && (dn.displayName = "ConfigProvider");
var km = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Bl(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Nm(e) {
  return Bl(e) instanceof ShadowRoot;
}
function Pm(e) {
  return Nm(e) ? Bl(e) : null;
}
function Rm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Mm(e, t) {
  Wt(e, "[@ant-design/icons] ".concat(t));
}
function As(e) {
  return ue(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ue(e.icon) === "object" || typeof e.icon == "function");
}
function ks() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Rm(n)] = r;
    }
    return t;
  }, {});
}
function Io(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, B(B({
    key: t
  }, ks(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Io(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, B({
    key: t
  }, ks(e.attrs)), (e.children || []).map(function(r, a) {
    return Io(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function $l(e) {
  return sr(e)[0];
}
function Hl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Om = `
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
`, Im = function(t) {
  var n = p.useContext(vi), r = n.csp, a = n.prefixCls, o = Om;
  a && (o = o.replace(/anticon/g, a)), p.useEffect(function() {
    var i = t.current, l = Pm(i);
    on(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, jm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], tr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function _m(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  tr.primaryColor = t, tr.secondaryColor = n || $l(t), tr.calculated = !!n;
}
function Lm() {
  return B({}, tr);
}
var Un = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, s = cn(t, jm), c = p.useRef(), u = tr;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || $l(i)
  }), Im(c), Mm(As(n), "icon should be icon definiton, but got ".concat(n)), !As(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = B(B({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Io(d.icon, "svg-".concat(d.name), B(B({
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
Un.displayName = "IconReact";
Un.getTwoToneColors = Lm;
Un.setTwoToneColors = _m;
function Ul(e) {
  var t = Hl(e), n = Y(t, 2), r = n[0], a = n[1];
  return Un.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function Dm() {
  var e = Un.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Fm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Ul(na.primary);
var Gt = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = cn(e, Fm), u = p.useContext(vi), d = u.prefixCls, f = d === void 0 ? "anticon" : d, g = u.rootClassName, y = Ge(g, f, Z(Z({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), m = i;
  m === void 0 && l && (m = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, A = Hl(s), S = Y(A, 2), C = S[0], w = S[1];
  return /* @__PURE__ */ p.createElement("span", Ze({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: y
  }), /* @__PURE__ */ p.createElement(Un, {
    icon: r,
    primaryColor: C,
    secondaryColor: w,
    style: h
  }));
});
Gt.displayName = "AntdIcon";
Gt.getTwoToneColor = Dm;
Gt.setTwoToneColor = Ul;
var Bm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Gt, Ze({}, t, {
    ref: n,
    icon: km
  }));
}, zl = /* @__PURE__ */ p.forwardRef(Bm);
G.env.NODE_ENV !== "production" && (zl.displayName = "CheckCircleFilled");
var $m = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Hm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Gt, Ze({}, t, {
    ref: n,
    icon: $m
  }));
}, Vl = /* @__PURE__ */ p.forwardRef(Hm);
G.env.NODE_ENV !== "production" && (Vl.displayName = "CloseCircleFilled");
var Um = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, zm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Gt, Ze({}, t, {
    ref: n,
    icon: Um
  }));
}, Wl = /* @__PURE__ */ p.forwardRef(zm);
G.env.NODE_ENV !== "production" && (Wl.displayName = "CloseOutlined");
var Vm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Wm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Gt, Ze({}, t, {
    ref: n,
    icon: Vm
  }));
}, Gl = /* @__PURE__ */ p.forwardRef(Wm);
G.env.NODE_ENV !== "production" && (Gl.displayName = "ExclamationCircleFilled");
var Gm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Km = function(t, n) {
  return /* @__PURE__ */ p.createElement(Gt, Ze({}, t, {
    ref: n,
    icon: Gm
  }));
}, Kl = /* @__PURE__ */ p.forwardRef(Km);
G.env.NODE_ENV !== "production" && (Kl.displayName = "InfoCircleFilled");
var Qm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, qm = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Xm = "".concat(Qm, " ").concat(qm).split(/[\s\n]+/), Ym = "aria-", Zm = "data-";
function Ns(e, t) {
  return e.indexOf(t) === 0;
}
function Jm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = B({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || Ns(a, Ym)) || // Data
    n.data && Ns(a, Zm) || // Attr
    n.attr && Xm.includes(a)) && (r[a] = e[a]);
  }), r;
}
const Ql = (e) => {
  const [, , , , t] = Hn();
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
}, ql = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, a = e.className, o = e.duration, i = o === void 0 ? 4.5 : o, l = e.showProgress, s = e.pauseOnHover, c = s === void 0 ? !0 : s, u = e.eventKey, d = e.content, f = e.closable, g = e.closeIcon, y = g === void 0 ? "x" : g, m = e.props, h = e.onClick, A = e.onNoticeClose, S = e.times, C = e.hovering, w = p.useState(!1), x = Y(w, 2), E = x[0], T = x[1], N = p.useState(0), M = Y(N, 2), L = M[0], I = M[1], H = p.useState(0), $ = Y(H, 2), D = $[0], W = $[1], P = C || E, k = i > 0 && l, R = function() {
    A(u);
  }, O = function(Q) {
    (Q.key === "Enter" || Q.code === "Enter" || Q.keyCode === X.ENTER) && R();
  };
  p.useEffect(function() {
    if (!P && i > 0) {
      var K = Date.now() - D, Q = setTimeout(function() {
        R();
      }, i * 1e3 - D);
      return function() {
        c && clearTimeout(Q), W(Date.now() - K);
      };
    }
  }, [i, P, S]), p.useEffect(function() {
    if (!P && k && (c || D === 0)) {
      var K = performance.now(), Q, ne = function ee() {
        cancelAnimationFrame(Q), Q = requestAnimationFrame(function(Me) {
          var Se = Me + D - K, ye = Math.min(Se / (i * 1e3), 1);
          I(ye * 100), ye < 1 && ee();
        });
      };
      return ne(), function() {
        c && cancelAnimationFrame(Q);
      };
    }
  }, [i, D, P, k, S]);
  var j = p.useMemo(function() {
    return ue(f) === "object" && f !== null ? f : f ? {
      closeIcon: y
    } : {};
  }, [f, y]), _ = Jm(j, !0), U = 100 - (!L || L < 0 ? 0 : L > 100 ? 100 : L), F = "".concat(n, "-notice");
  return /* @__PURE__ */ p.createElement("div", Ze({}, m, {
    ref: t,
    className: Ge(F, a, Z({}, "".concat(F, "-closable"), f)),
    style: r,
    onMouseEnter: function(Q) {
      var ne;
      T(!0), m == null || (ne = m.onMouseEnter) === null || ne === void 0 || ne.call(m, Q);
    },
    onMouseLeave: function(Q) {
      var ne;
      T(!1), m == null || (ne = m.onMouseLeave) === null || ne === void 0 || ne.call(m, Q);
    },
    onClick: h
  }), /* @__PURE__ */ p.createElement("div", {
    className: "".concat(F, "-content")
  }, d), f && /* @__PURE__ */ p.createElement("a", Ze({
    tabIndex: 0,
    className: "".concat(F, "-close"),
    onKeyDown: O,
    "aria-label": "Close"
  }, _, {
    onClick: function(Q) {
      Q.preventDefault(), Q.stopPropagation(), R();
    }
  }), j.closeIcon), k && /* @__PURE__ */ p.createElement("progress", {
    className: "".concat(F, "-progress"),
    max: "100",
    value: U
  }, U + "%"));
}), Xl = /* @__PURE__ */ q.createContext({}), eg = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ q.createElement(Xl.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, Ps = 8, Rs = 3, Ms = 16, tg = function(t) {
  var n = {
    offset: Ps,
    threshold: Rs,
    gap: Ms
  };
  if (t && ue(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : Ps, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : Rs, n.gap = (o = t.gap) !== null && o !== void 0 ? o : Ms;
  }
  return [!!t, n];
}, ng = ["className", "style", "classNames", "styles"], Yl = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, i = t.style, l = t.motion, s = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, d = p.useContext(Xl), f = d.classNames, g = p.useRef({}), y = p.useState(null), m = Y(y, 2), h = m[0], A = m[1], S = p.useState([]), C = Y(S, 2), w = C[0], x = C[1], E = n.map(function(P) {
    return {
      config: P,
      key: String(P.key)
    };
  }), T = tg(u), N = Y(T, 2), M = N[0], L = N[1], I = L.offset, H = L.threshold, $ = L.gap, D = M && (w.length > 0 || E.length <= H), W = typeof l == "function" ? l(r) : l;
  return p.useEffect(function() {
    M && w.length > 1 && x(function(P) {
      return P.filter(function(k) {
        return E.some(function(R) {
          var O = R.key;
          return k === O;
        });
      });
    });
  }, [w, E, M]), p.useEffect(function() {
    var P;
    if (M && g.current[(P = E[E.length - 1]) === null || P === void 0 ? void 0 : P.key]) {
      var k;
      A(g.current[(k = E[E.length - 1]) === null || k === void 0 ? void 0 : k.key]);
    }
  }, [E, M]), /* @__PURE__ */ q.createElement(vm, Ze({
    key: r,
    className: Ge(a, "".concat(a, "-").concat(r), f == null ? void 0 : f.list, o, Z(Z({}, "".concat(a, "-stack"), !!M), "".concat(a, "-stack-expanded"), D)),
    style: i,
    keys: E,
    motionAppear: !0
  }, W, {
    onAllRemoved: function() {
      s(r);
    }
  }), function(P, k) {
    var R = P.config, O = P.className, j = P.style, _ = P.index, U = R, F = U.key, K = U.times, Q = String(F), ne = R, ee = ne.className, Me = ne.style, Se = ne.classNames, ye = ne.styles, Ke = cn(ne, ng), Te = E.findIndex(function(Ue) {
      return Ue.key === Q;
    }), Ee = {};
    if (M) {
      var V = E.length - 1 - (Te > -1 ? Te : _ - 1), Qe = r === "top" || r === "bottom" ? "-50%" : "0";
      if (V > 0) {
        var be, _e, et;
        Ee.height = D ? (be = g.current[Q]) === null || be === void 0 ? void 0 : be.offsetHeight : h == null ? void 0 : h.offsetHeight;
        for (var dt = 0, he = 0; he < V; he++) {
          var de;
          dt += ((de = g.current[E[E.length - 1 - he].key]) === null || de === void 0 ? void 0 : de.offsetHeight) + $;
        }
        var Oe = (D ? dt : V * I) * (r.startsWith("top") ? 1 : -1), ft = !D && h !== null && h !== void 0 && h.offsetWidth && (_e = g.current[Q]) !== null && _e !== void 0 && _e.offsetWidth ? ((h == null ? void 0 : h.offsetWidth) - I * 2 * (V < 3 ? V : 3)) / ((et = g.current[Q]) === null || et === void 0 ? void 0 : et.offsetWidth) : 1;
        Ee.transform = "translate3d(".concat(Qe, ", ").concat(Oe, "px, 0) scaleX(").concat(ft, ")");
      } else
        Ee.transform = "translate3d(".concat(Qe, ", 0, 0)");
    }
    return /* @__PURE__ */ q.createElement("div", {
      ref: k,
      className: Ge("".concat(a, "-notice-wrapper"), O, Se == null ? void 0 : Se.wrapper),
      style: B(B(B({}, j), Ee), ye == null ? void 0 : ye.wrapper),
      onMouseEnter: function() {
        return x(function(tt) {
          return tt.includes(Q) ? tt : [].concat(He(tt), [Q]);
        });
      },
      onMouseLeave: function() {
        return x(function(tt) {
          return tt.filter(function(zn) {
            return zn !== Q;
          });
        });
      }
    }, /* @__PURE__ */ q.createElement(ql, Ze({}, Ke, {
      ref: function(tt) {
        Te > -1 ? g.current[Q] = tt : delete g.current[Q];
      },
      prefixCls: a,
      classNames: Se,
      styles: ye,
      className: Ge(ee, f == null ? void 0 : f.notice),
      style: Me,
      times: K,
      key: F,
      eventKey: F,
      onNoticeClose: c,
      hovering: M && w.length > 0
    })));
  });
};
G.env.NODE_ENV !== "production" && (Yl.displayName = "NoticeList");
var Zl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e.container, o = e.motion, i = e.maxCount, l = e.className, s = e.style, c = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = p.useState([]), g = Y(f, 2), y = g[0], m = g[1], h = function(M) {
    var L, I = y.find(function(H) {
      return H.key === M;
    });
    I == null || (L = I.onClose) === null || L === void 0 || L.call(I), m(function(H) {
      return H.filter(function($) {
        return $.key !== M;
      });
    });
  };
  p.useImperativeHandle(t, function() {
    return {
      open: function(M) {
        m(function(L) {
          var I = He(L), H = I.findIndex(function(W) {
            return W.key === M.key;
          }), $ = B({}, M);
          if (H >= 0) {
            var D;
            $.times = (((D = L[H]) === null || D === void 0 ? void 0 : D.times) || 0) + 1, I[H] = $;
          } else
            $.times = 0, I.push($);
          return i > 0 && I.length > i && (I = I.slice(-i)), I;
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
  var A = p.useState({}), S = Y(A, 2), C = S[0], w = S[1];
  p.useEffect(function() {
    var N = {};
    y.forEach(function(M) {
      var L = M.placement, I = L === void 0 ? "topRight" : L;
      I && (N[I] = N[I] || [], N[I].push(M));
    }), Object.keys(C).forEach(function(M) {
      N[M] = N[M] || [];
    }), w(N);
  }, [y]);
  var x = function(M) {
    w(function(L) {
      var I = B({}, L), H = I[M] || [];
      return H.length || delete I[M], I;
    });
  }, E = p.useRef(!1);
  if (p.useEffect(function() {
    Object.keys(C).length > 0 ? E.current = !0 : E.current && (c == null || c(), E.current = !1);
  }, [C]), !a)
    return null;
  var T = Object.keys(C);
  return /* @__PURE__ */ ni.createPortal(/* @__PURE__ */ p.createElement(p.Fragment, null, T.map(function(N) {
    var M = C[N], L = /* @__PURE__ */ p.createElement(Yl, {
      key: N,
      configList: M,
      placement: N,
      prefixCls: r,
      className: l == null ? void 0 : l(N),
      style: s == null ? void 0 : s(N),
      motion: o,
      onNoticeClose: h,
      onAllNoticeRemoved: x,
      stack: u
    });
    return d ? d(L, {
      prefixCls: r,
      key: N
    }) : L;
  })), a);
});
G.env.NODE_ENV !== "production" && (Zl.displayName = "Notifications");
var rg = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], ag = function() {
  return document.body;
}, Os = 0;
function og() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(o) {
      var i = a[o];
      i !== void 0 && (e[o] = i);
    });
  }), e;
}
function ig() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? ag : t, r = e.motion, a = e.prefixCls, o = e.maxCount, i = e.className, l = e.style, s = e.onAllRemoved, c = e.stack, u = e.renderNotifications, d = cn(e, rg), f = p.useState(), g = Y(f, 2), y = g[0], m = g[1], h = p.useRef(), A = /* @__PURE__ */ p.createElement(Zl, {
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
  }), S = p.useState([]), C = Y(S, 2), w = C[0], x = C[1], E = p.useMemo(function() {
    return {
      open: function(N) {
        var M = og(d, N);
        (M.key === null || M.key === void 0) && (M.key = "rc-notification-".concat(Os), Os += 1), x(function(L) {
          return [].concat(He(L), [{
            type: "open",
            config: M
          }]);
        });
      },
      close: function(N) {
        x(function(M) {
          return [].concat(He(M), [{
            type: "close",
            key: N
          }]);
        });
      },
      destroy: function() {
        x(function(N) {
          return [].concat(He(N), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return p.useEffect(function() {
    m(n());
  }), p.useEffect(function() {
    h.current && w.length && (w.forEach(function(T) {
      switch (T.type) {
        case "open":
          h.current.open(T.config);
          break;
        case "close":
          h.current.close(T.key);
          break;
        case "destroy":
          h.current.destroy();
          break;
      }
    }), x(function(T) {
      return T.filter(function(N) {
        return !w.includes(N);
      });
    }));
  }, [w]), [E, A];
}
const Jl = /* @__PURE__ */ q.createContext(void 0);
G.env.NODE_ENV !== "production" && (Jl.displayName = "zIndexContext");
const kt = 100, sg = 10, eu = kt * sg, cg = eu + kt, tu = {
  Modal: kt,
  Drawer: kt,
  Popover: kt,
  Popconfirm: kt,
  Tooltip: kt,
  Tour: kt,
  FloatButton: kt
}, lg = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function ug(e) {
  return e in tu;
}
const ay = (e, t) => {
  const [, n] = Hn(), r = q.useContext(Jl), a = ug(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    tu[e] : i += lg[e], o = [r === void 0 ? t : i, i];
  }
  if (G.env.NODE_ENV !== "production") {
    const i = $n(e), l = n.zIndexPopupBase + cg, s = o[0] || 0;
    G.env.NODE_ENV !== "production" && i(t !== void 0 || s <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function ur() {
  ur = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(P, k, R) {
    P[k] = R.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(P, k, R) {
    return Object.defineProperty(P, k, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), P[k];
  }
  try {
    c({}, "");
  } catch {
    c = function(R, O, j) {
      return R[O] = j;
    };
  }
  function u(P, k, R, O) {
    var j = k && k.prototype instanceof A ? k : A, _ = Object.create(j.prototype), U = new D(O || []);
    return a(_, "_invoke", {
      value: L(P, R, U)
    }), _;
  }
  function d(P, k, R) {
    try {
      return {
        type: "normal",
        arg: P.call(k, R)
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
  function A() {
  }
  function S() {
  }
  function C() {
  }
  var w = {};
  c(w, i, function() {
    return this;
  });
  var x = Object.getPrototypeOf, E = x && x(x(W([])));
  E && E !== n && r.call(E, i) && (w = E);
  var T = C.prototype = A.prototype = Object.create(w);
  function N(P) {
    ["next", "throw", "return"].forEach(function(k) {
      c(P, k, function(R) {
        return this._invoke(k, R);
      });
    });
  }
  function M(P, k) {
    function R(j, _, U, F) {
      var K = d(P[j], P, _);
      if (K.type !== "throw") {
        var Q = K.arg, ne = Q.value;
        return ne && ue(ne) == "object" && r.call(ne, "__await") ? k.resolve(ne.__await).then(function(ee) {
          R("next", ee, U, F);
        }, function(ee) {
          R("throw", ee, U, F);
        }) : k.resolve(ne).then(function(ee) {
          Q.value = ee, U(Q);
        }, function(ee) {
          return R("throw", ee, U, F);
        });
      }
      F(K.arg);
    }
    var O;
    a(this, "_invoke", {
      value: function(_, U) {
        function F() {
          return new k(function(K, Q) {
            R(_, U, K, Q);
          });
        }
        return O = O ? O.then(F, F) : F();
      }
    });
  }
  function L(P, k, R) {
    var O = f;
    return function(j, _) {
      if (O === y) throw Error("Generator is already running");
      if (O === m) {
        if (j === "throw") throw _;
        return {
          value: e,
          done: !0
        };
      }
      for (R.method = j, R.arg = _; ; ) {
        var U = R.delegate;
        if (U) {
          var F = I(U, R);
          if (F) {
            if (F === h) continue;
            return F;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (O === f) throw O = m, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        O = y;
        var K = d(P, k, R);
        if (K.type === "normal") {
          if (O = R.done ? m : g, K.arg === h) continue;
          return {
            value: K.arg,
            done: R.done
          };
        }
        K.type === "throw" && (O = m, R.method = "throw", R.arg = K.arg);
      }
    };
  }
  function I(P, k) {
    var R = k.method, O = P.iterator[R];
    if (O === e) return k.delegate = null, R === "throw" && P.iterator.return && (k.method = "return", k.arg = e, I(P, k), k.method === "throw") || R !== "return" && (k.method = "throw", k.arg = new TypeError("The iterator does not provide a '" + R + "' method")), h;
    var j = d(O, P.iterator, k.arg);
    if (j.type === "throw") return k.method = "throw", k.arg = j.arg, k.delegate = null, h;
    var _ = j.arg;
    return _ ? _.done ? (k[P.resultName] = _.value, k.next = P.nextLoc, k.method !== "return" && (k.method = "next", k.arg = e), k.delegate = null, h) : _ : (k.method = "throw", k.arg = new TypeError("iterator result is not an object"), k.delegate = null, h);
  }
  function H(P) {
    var k = {
      tryLoc: P[0]
    };
    1 in P && (k.catchLoc = P[1]), 2 in P && (k.finallyLoc = P[2], k.afterLoc = P[3]), this.tryEntries.push(k);
  }
  function $(P) {
    var k = P.completion || {};
    k.type = "normal", delete k.arg, P.completion = k;
  }
  function D(P) {
    this.tryEntries = [{
      tryLoc: "root"
    }], P.forEach(H, this), this.reset(!0);
  }
  function W(P) {
    if (P || P === "") {
      var k = P[i];
      if (k) return k.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var R = -1, O = function j() {
          for (; ++R < P.length; ) if (r.call(P, R)) return j.value = P[R], j.done = !1, j;
          return j.value = e, j.done = !0, j;
        };
        return O.next = O;
      }
    }
    throw new TypeError(ue(P) + " is not iterable");
  }
  return S.prototype = C, a(T, "constructor", {
    value: C,
    configurable: !0
  }), a(C, "constructor", {
    value: S,
    configurable: !0
  }), S.displayName = c(C, s, "GeneratorFunction"), t.isGeneratorFunction = function(P) {
    var k = typeof P == "function" && P.constructor;
    return !!k && (k === S || (k.displayName || k.name) === "GeneratorFunction");
  }, t.mark = function(P) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(P, C) : (P.__proto__ = C, c(P, s, "GeneratorFunction")), P.prototype = Object.create(T), P;
  }, t.awrap = function(P) {
    return {
      __await: P
    };
  }, N(M.prototype), c(M.prototype, l, function() {
    return this;
  }), t.AsyncIterator = M, t.async = function(P, k, R, O, j) {
    j === void 0 && (j = Promise);
    var _ = new M(u(P, k, R, O), j);
    return t.isGeneratorFunction(k) ? _ : _.next().then(function(U) {
      return U.done ? U.value : _.next();
    });
  }, N(T), c(T, s, "Generator"), c(T, i, function() {
    return this;
  }), c(T, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(P) {
    var k = Object(P), R = [];
    for (var O in k) R.push(O);
    return R.reverse(), function j() {
      for (; R.length; ) {
        var _ = R.pop();
        if (_ in k) return j.value = _, j.done = !1, j;
      }
      return j.done = !0, j;
    };
  }, t.values = W, D.prototype = {
    constructor: D,
    reset: function(k) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach($), !k) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
    },
    stop: function() {
      this.done = !0;
      var k = this.tryEntries[0].completion;
      if (k.type === "throw") throw k.arg;
      return this.rval;
    },
    dispatchException: function(k) {
      if (this.done) throw k;
      var R = this;
      function O(Q, ne) {
        return U.type = "throw", U.arg = k, R.next = Q, ne && (R.method = "next", R.arg = e), !!ne;
      }
      for (var j = this.tryEntries.length - 1; j >= 0; --j) {
        var _ = this.tryEntries[j], U = _.completion;
        if (_.tryLoc === "root") return O("end");
        if (_.tryLoc <= this.prev) {
          var F = r.call(_, "catchLoc"), K = r.call(_, "finallyLoc");
          if (F && K) {
            if (this.prev < _.catchLoc) return O(_.catchLoc, !0);
            if (this.prev < _.finallyLoc) return O(_.finallyLoc);
          } else if (F) {
            if (this.prev < _.catchLoc) return O(_.catchLoc, !0);
          } else {
            if (!K) throw Error("try statement without catch or finally");
            if (this.prev < _.finallyLoc) return O(_.finallyLoc);
          }
        }
      }
    },
    abrupt: function(k, R) {
      for (var O = this.tryEntries.length - 1; O >= 0; --O) {
        var j = this.tryEntries[O];
        if (j.tryLoc <= this.prev && r.call(j, "finallyLoc") && this.prev < j.finallyLoc) {
          var _ = j;
          break;
        }
      }
      _ && (k === "break" || k === "continue") && _.tryLoc <= R && R <= _.finallyLoc && (_ = null);
      var U = _ ? _.completion : {};
      return U.type = k, U.arg = R, _ ? (this.method = "next", this.next = _.finallyLoc, h) : this.complete(U);
    },
    complete: function(k, R) {
      if (k.type === "throw") throw k.arg;
      return k.type === "break" || k.type === "continue" ? this.next = k.arg : k.type === "return" ? (this.rval = this.arg = k.arg, this.method = "return", this.next = "end") : k.type === "normal" && R && (this.next = R), h;
    },
    finish: function(k) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var O = this.tryEntries[R];
        if (O.finallyLoc === k) return this.complete(O.completion, O.afterLoc), $(O), h;
      }
    },
    catch: function(k) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var O = this.tryEntries[R];
        if (O.tryLoc === k) {
          var j = O.completion;
          if (j.type === "throw") {
            var _ = j.arg;
            $(O);
          }
          return _;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(k, R, O) {
      return this.delegate = {
        iterator: W(k),
        resultName: R,
        nextLoc: O
      }, this.method === "next" && (this.arg = e), h;
    }
  }, t;
}
function Is(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a);
}
function nu(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(s) {
        Is(o, r, a, i, l, "next", s);
      }
      function l(s) {
        Is(o, r, a, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var br = B({}, Yu), dg = br.version, fg = br.render, hg = br.unmountComponentAtNode, ba;
try {
  var pg = Number((dg || "").split(".")[0]);
  pg >= 18 && (ba = br.createRoot);
} catch {
}
function js(e) {
  var t = br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ue(t) === "object" && (t.usingClientEntryPoint = e);
}
var aa = "__rc_react_root__";
function mg(e, t) {
  js(!0);
  var n = t[aa] || ba(t);
  js(!1), n.render(e), t[aa] = n;
}
function gg(e, t) {
  fg(e, t);
}
function vg(e, t) {
  if (ba) {
    mg(e, t);
    return;
  }
  gg(e, t);
}
function yg(e) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = nu(/* @__PURE__ */ ur().mark(function e(t) {
    return ur().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[aa]) === null || a === void 0 || a.unmount(), delete t[aa];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), jo.apply(this, arguments);
}
function bg(e) {
  hg(e);
}
function oy(e) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = nu(/* @__PURE__ */ ur().mark(function e(t) {
    return ur().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (ba === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", yg(t));
        case 2:
          bg(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), _o.apply(this, arguments);
}
const xg = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, a = `${t}-notice`, o = new Yn("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new Yn("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), l = new Yn("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), s = new Yn("antNotificationLeftFadeIn", {
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
}, Cg = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], Sg = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, Eg = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [Sg[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, wg = (e) => {
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
}, Tg = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, Ag = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `all ${e.motionDurationSlow}, backdrop-filter 0s`,
        position: "absolute"
      }, wg(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, Tg(e))
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
  }, Cg.map((n) => Eg(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, ru = (e) => {
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
    fontSize: A,
    lineHeight: S,
    width: C,
    notificationIconSize: w,
    colorText: x
  } = e, E = `${n}-notice`;
  return {
    position: "relative",
    marginBottom: o,
    marginInlineStart: "auto",
    background: f,
    borderRadius: i,
    boxShadow: r,
    [E]: {
      padding: g,
      width: C,
      maxWidth: `calc(100vw - ${Ht(e.calc(y).mul(2).equal())})`,
      overflow: "hidden",
      lineHeight: S,
      wordWrap: "break-word"
    },
    [`${E}-message`]: {
      marginBottom: e.marginXS,
      color: d,
      fontSize: a,
      lineHeight: e.lineHeightLG
    },
    [`${E}-description`]: {
      fontSize: A,
      color: x
    },
    [`${E}-closable ${E}-message`]: {
      paddingInlineEnd: e.paddingLG
    },
    [`${E}-with-icon ${E}-message`]: {
      marginBottom: e.marginXS,
      marginInlineStart: e.calc(e.marginSM).add(w).equal(),
      fontSize: a
    },
    [`${E}-with-icon ${E}-description`]: {
      marginInlineStart: e.calc(e.marginSM).add(w).equal(),
      fontSize: A
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${E}-icon`]: {
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
    [`${E}-close`]: Object.assign({
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
    }, Up(e)),
    [`${E}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      WebkitAppearance: "none",
      inlineSize: `calc(100% - ${Ht(i)} * 2)`,
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
    [`${E}-btn`]: {
      float: "right",
      marginTop: e.marginSM
    }
  };
}, kg = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: a,
    motionEaseInOut: o
  } = e, i = `${t}-notice`, l = new Yn("antNotificationFadeOut", {
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
      [t]: Object.assign(Object.assign({}, Dp(e)), {
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
        [`${i}-wrapper`]: Object.assign({}, ru(e))
      }
    }
  ];
}, au = (e) => ({
  zIndexPopup: e.zIndexPopupBase + eu + 50,
  width: 384
}), ou = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return xi(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${Ht(e.paddingMD)} ${Ht(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, iu = zp("Notification", (e) => {
  const t = ou(e);
  return [kg(t), xg(t), Ag(t)];
}, au), Ng = Vp(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = ou(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, ru(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${Ht(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, au);
var Pg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function Si(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ p.createElement(Wl, {
    className: `${e}-close-icon`
  });
}
const Rg = {
  success: zl,
  info: Kl,
  error: Vl,
  warning: Gl
}, su = (e) => {
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
  }, n) : r && (s = /* @__PURE__ */ p.createElement(Rg[r] || null, {
    className: Ge(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ p.createElement("div", {
    className: Ge({
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
}, Mg = (e) => {
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
  } = e, d = Pg(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
    getPrefixCls: f
  } = p.useContext(Ut), g = t || f("notification"), y = `${g}-notice`, m = Ql(g), [h, A, S] = iu(g, m);
  return h(/* @__PURE__ */ p.createElement("div", {
    className: Ge(`${y}-pure-panel`, A, n, S, m)
  }, /* @__PURE__ */ p.createElement(Ng, {
    prefixCls: g
  }), /* @__PURE__ */ p.createElement(ql, Object.assign({}, d, {
    prefixCls: g,
    eventKey: "pure",
    duration: null,
    closable: s,
    className: Ge({
      notificationClassName: u
    }),
    closeIcon: Si(g, c),
    content: /* @__PURE__ */ p.createElement(su, {
      prefixCls: y,
      icon: r,
      type: a,
      message: o,
      description: i,
      btn: l
    })
  }))));
};
function Og(e, t, n) {
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
function Ig(e) {
  return {
    motionName: `${e}-fade`
  };
}
var jg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const _s = 24, _g = 4.5, Lg = "topRight", Dg = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = Ql(n), [a, o, i] = iu(n, r);
  return a(/* @__PURE__ */ q.createElement(eg, {
    classNames: {
      list: Ge(o, i, r)
    }
  }, t));
}, Fg = (e, t) => {
  let {
    prefixCls: n,
    key: r
  } = t;
  return /* @__PURE__ */ q.createElement(Dg, {
    prefixCls: n,
    key: r
  }, e);
}, Bg = /* @__PURE__ */ q.forwardRef((e, t) => {
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
  } = p.useContext(Ut), [, A] = Hn(), S = a || g("notification"), C = (N) => Og(N, n ?? _s, r ?? _s), w = () => Ge({
    [`${S}-rtl`]: l ?? h === "rtl"
  }), x = () => Ig(S), [E, T] = ig({
    prefixCls: S,
    style: C,
    className: w,
    motion: x,
    closable: !0,
    closeIcon: Si(S),
    duration: u ?? _g,
    getContainer: () => (o == null ? void 0 : o()) || (y == null ? void 0 : y()) || document.body,
    maxCount: i,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: s,
    renderNotifications: Fg,
    stack: c === !1 ? !1 : {
      threshold: typeof c == "object" ? c == null ? void 0 : c.threshold : void 0,
      offset: 8,
      gap: A.margin
    }
  });
  return q.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: S,
    notification: m
  })), T;
});
function cu(e) {
  const t = q.useRef(null), n = $n("Notification");
  return [q.useMemo(() => {
    const a = (s) => {
      var c;
      if (!t.current) {
        G.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
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
        type: A,
        btn: S,
        className: C,
        style: w,
        role: x = "alert",
        closeIcon: E,
        closable: T
      } = s, N = jg(s, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), M = Si(g, typeof E < "u" ? E : f == null ? void 0 : f.closeIcon);
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e == null ? void 0 : e.placement) !== null && c !== void 0 ? c : Lg
      }, N), {
        content: /* @__PURE__ */ q.createElement(su, {
          prefixCls: g,
          icon: h,
          type: A,
          message: y,
          description: m,
          btn: S,
          role: x
        }),
        className: Ge(A && `${g}-${A}`, C, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), w),
        closeIcon: M,
        closable: T ?? !!M
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
  }, []), /* @__PURE__ */ q.createElement(Bg, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function $g(e) {
  return cu(e);
}
const Hg = /* @__PURE__ */ q.createContext({});
let it = null, Qr = (e) => e(), oa = [], dr = {};
function Ls() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: i
  } = dr, l = (e == null ? void 0 : e()) || document.body;
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
const Ug = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: a
  } = p.useContext(Ut), o = dr.prefixCls || a("notification"), i = p.useContext(Hg), [l, s] = cu(Object.assign(Object.assign(Object.assign({}, n), {
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
}), zg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const [n, r] = q.useState(Ls), a = () => {
    r(Ls);
  };
  q.useEffect(a, []);
  const o = Fl(), i = o.getRootPrefixCls(), l = o.getIconPrefixCls(), s = o.getTheme(), c = /* @__PURE__ */ q.createElement(Ug, {
    ref: t,
    sync: a,
    notificationConfig: n
  });
  return /* @__PURE__ */ q.createElement(dn, {
    prefixCls: i,
    iconPrefixCls: l,
    theme: s
  }, o.holderRender ? o.holderRender(c) : c);
});
function Ei() {
  if (!it) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    it = t, Qr(() => {
      vg(/* @__PURE__ */ q.createElement(zg, {
        ref: (n) => {
          const {
            instance: r,
            sync: a
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = a, Ei());
          });
        }
      }), e);
    });
    return;
  }
  it.instance && (oa.forEach((e) => {
    switch (e.type) {
      case "open": {
        Qr(() => {
          it.instance.open(Object.assign(Object.assign({}, dr), e.config));
        });
        break;
      }
      case "destroy":
        Qr(() => {
          it == null || it.instance.destroy(e.key);
        });
        break;
    }
  }), oa = []);
}
function Vg(e) {
  dr = Object.assign(Object.assign({}, dr), e), Qr(() => {
    var t;
    (t = it == null ? void 0 : it.sync) === null || t === void 0 || t.call(it);
  });
}
function lu(e) {
  const t = Fl();
  G.env.NODE_ENV !== "production" && !t.holderRender && Cm("notification"), oa.push({
    type: "open",
    config: e
  }), Ei();
}
const Wg = (e) => {
  oa.push({
    type: "destroy",
    key: e
  }), Ei();
}, Gg = ["success", "info", "warning", "error"], Kg = {
  open: lu,
  destroy: Wg,
  config: Vg,
  useNotification: $g,
  _InternalPanelDoNotUseOrYouWillBeFired: Mg
}, Lo = Kg;
Gg.forEach((e) => {
  Lo[e] = (t) => lu(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
G.env.NODE_ENV;
G.env.NODE_ENV;
const Qg = ({ isOpen: e, onClose: t, className: n, overlayClassName: r, title: a, containerClassName: o, contentClassName: i, children: l, footer: s }) => {
  const c = e ? /* @__PURE__ */ v.jsxs("div", { className: re(
    "fixed inset-0 z-50 flex items-center justify-center",
    n
  ), children: [
    /* @__PURE__ */ v.jsx("div", { className: re(
      "fixed inset-0 bg-black/80",
      r
    ) }),
    /* @__PURE__ */ v.jsxs("div", { className: re(
      "relative z-50 bg-background text-primary rounded-lg max-w-[600px] w-full overflow-hidden",
      o
    ), children: [
      /* @__PURE__ */ v.jsxs("div", { className: re(
        "flex items-center justify-between py-[14px] px-[20px]",
        "border-b border-[#ebebeb] pb-2"
      ), children: [
        /* @__PURE__ */ v.jsx("p", { children: a }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: t,
            className: "text-[#929292] hover:text-primary/80",
            children: /* @__PURE__ */ v.jsx(ai, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: re(
        "py-3 px-6",
        i
      ), children: l }),
      s && /* @__PURE__ */ v.jsx("footer", { className: "border-t border-[#ebebeb] py-[18px] px-[24px]", children: s })
    ] })
  ] }) : null;
  if (typeof window < "u")
    return nr.createPortal(
      c,
      document.body
    );
};
var xr = class {
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
}, ln = typeof window > "u" || "Deno" in globalThis;
function Ye() {
}
function qg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Do(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function uu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ds(e, t) {
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
      if (t.queryHash !== wi(i, t.options))
        return !1;
    } else if (!hr(t.queryKey, i))
      return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if (n === "active" && !s || n === "inactive" && s)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || a && a !== t.state.fetchStatus || o && !o(t));
}
function Fs(e, t) {
  const { exact: n, status: r, predicate: a, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (fr(t.options.mutationKey) !== fr(o))
        return !1;
    } else if (!hr(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || a && !a(t));
}
function wi(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || fr)(e);
}
function fr(e) {
  return JSON.stringify(
    e,
    (t, n) => $o(n) ? Object.keys(n).sort().reduce((r, a) => (r[a] = n[a], r), {}) : n
  );
}
function hr(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !hr(e[n], t[n])) : !1;
}
function Fo(e, t) {
  if (e === t)
    return e;
  const n = Bs(e) && Bs(t);
  if (n || $o(e) && $o(t)) {
    const r = n ? e : Object.keys(e), a = r.length, o = n ? t : Object.keys(t), i = o.length, l = n ? [] : {};
    let s = 0;
    for (let c = 0; c < i; c++) {
      const u = n ? c : o[c];
      (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (l[u] = void 0, s++) : (l[u] = Fo(e[u], t[u]), l[u] === e[u] && e[u] !== void 0 && s++);
    }
    return a === i && s === a ? e : l;
  }
  return t;
}
function Bo(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Bs(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function $o(e) {
  if (!$s(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!$s(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function $s(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Xg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Ho(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (G.env.NODE_ENV !== "production")
      try {
        return Fo(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return Fo(e, t);
  }
  return t;
}
function Yg(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Zg(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ia = Symbol();
function du(e, t) {
  return G.env.NODE_ENV !== "production" && e.queryFn === ia && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ia ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Xt, Mt, xn, Qs, Jg = (Qs = class extends xr {
  constructor() {
    super();
    J(this, Xt);
    J(this, Mt);
    J(this, xn);
    z(this, xn, (t) => {
      if (!ln && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Mt) || this.setEventListener(b(this, xn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = b(this, Mt)) == null || t.call(this), z(this, Mt, void 0));
  }
  setEventListener(t) {
    var n;
    z(this, xn, t), (n = b(this, Mt)) == null || n.call(this), z(this, Mt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    b(this, Xt) !== t && (z(this, Xt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof b(this, Xt) == "boolean" ? b(this, Xt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Xt = new WeakMap(), Mt = new WeakMap(), xn = new WeakMap(), Qs), Ti = new Jg(), Cn, Ot, Sn, qs, e0 = (qs = class extends xr {
  constructor() {
    super();
    J(this, Cn, !0);
    J(this, Ot);
    J(this, Sn);
    z(this, Sn, (t) => {
      if (!ln && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    b(this, Ot) || this.setEventListener(b(this, Sn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = b(this, Ot)) == null || t.call(this), z(this, Ot, void 0));
  }
  setEventListener(t) {
    var n;
    z(this, Sn, t), (n = b(this, Ot)) == null || n.call(this), z(this, Ot, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    b(this, Cn) !== t && (z(this, Cn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return b(this, Cn);
  }
}, Cn = new WeakMap(), Ot = new WeakMap(), Sn = new WeakMap(), qs), sa = new e0();
function Uo() {
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
function t0(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function fu(e) {
  return (e ?? "online") === "online" ? sa.isOnline() : !0;
}
var hu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Ha(e) {
  return e instanceof hu;
}
function pu(e) {
  let t = !1, n = 0, r = !1, a;
  const o = Uo(), i = (m) => {
    var h;
    r || (f(new hu(m)), (h = e.abort) == null || h.call(e));
  }, l = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, c = () => Ti.isFocused() && (e.networkMode === "always" || sa.isOnline()) && e.canRun(), u = () => fu(e.networkMode) && e.canRun(), d = (m) => {
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
  }), y = () => {
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
      var E;
      if (r)
        return;
      const S = e.retry ?? (ln ? 0 : 3), C = e.retryDelay ?? t0, w = typeof C == "function" ? C(n, A) : C, x = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, A);
      if (t || !x) {
        f(A);
        return;
      }
      n++, (E = e.onFail) == null || E.call(e, n, A), Xg(w).then(() => c() ? void 0 : g()).then(() => {
        t ? f(A) : y();
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
function n0() {
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
var Ne = n0(), Yt, Xs, mu = (Xs = class {
  constructor() {
    J(this, Yt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Do(this.gcTime) && z(this, Yt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (ln ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    b(this, Yt) && (clearTimeout(b(this, Yt)), z(this, Yt, void 0));
  }
}, Yt = new WeakMap(), Xs), En, wn, Xe, Ie, pr, Zt, at, Tt, Ys, r0 = (Ys = class extends mu {
  constructor(t) {
    super();
    J(this, at);
    J(this, En);
    J(this, wn);
    J(this, Xe);
    J(this, Ie);
    J(this, pr);
    J(this, Zt);
    z(this, Zt, !1), z(this, pr, t.defaultOptions), this.setOptions(t.options), this.observers = [], z(this, Xe, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, z(this, En, a0(this.options)), this.state = t.state ?? b(this, En), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = b(this, Ie)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...b(this, pr), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && b(this, Xe).remove(this);
  }
  setData(t, n) {
    const r = Ho(this.state.data, t, this.options);
    return oe(this, at, Tt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    oe(this, at, Tt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, a;
    const n = (r = b(this, Ie)) == null ? void 0 : r.promise;
    return (a = b(this, Ie)) == null || a.cancel(t), n ? n.then(Ye).catch(Ye) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(b(this, En));
  }
  isActive() {
    return this.observers.some(
      (t) => st(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ia || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !uu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Ie)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Ie)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), b(this, Xe).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (b(this, Ie) && (b(this, Zt) ? b(this, Ie).cancel({ revert: !0 }) : b(this, Ie).cancelRetry()), this.scheduleGc()), b(this, Xe).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || oe(this, at, Tt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var s, c, u;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (b(this, Ie))
        return b(this, Ie).continueRetry(), b(this, Ie).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    G.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), a = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (z(this, Zt, !0), r.signal)
      });
    }, o = () => {
      const d = du(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a(f), z(this, Zt, !1), this.options.persister ? this.options.persister(
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
    ), z(this, wn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && oe(this, at, Tt).call(this, { type: "fetch", meta: (u = i.fetchOptions) == null ? void 0 : u.meta });
    const l = (d) => {
      var f, g, y, m;
      Ha(d) && d.silent || oe(this, at, Tt).call(this, {
        type: "error",
        error: d
      }), Ha(d) || ((g = (f = b(this, Xe).config).onError) == null || g.call(
        f,
        d,
        this
      ), (m = (y = b(this, Xe).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return z(this, Ie, pu({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: i.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, g, y, m;
        if (d === void 0) {
          G.env.NODE_ENV !== "production" && console.error(
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
        (g = (f = b(this, Xe).config).onSuccess) == null || g.call(f, d, this), (m = (y = b(this, Xe).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: l,
      onFail: (d, f) => {
        oe(this, at, Tt).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        oe(this, at, Tt).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, at, Tt).call(this, { type: "continue" });
      },
      retry: i.options.retry,
      retryDelay: i.options.retryDelay,
      networkMode: i.options.networkMode,
      canRun: () => !0
    })), b(this, Ie).start();
  }
}, En = new WeakMap(), wn = new WeakMap(), Xe = new WeakMap(), Ie = new WeakMap(), pr = new WeakMap(), Zt = new WeakMap(), at = new WeakSet(), Tt = function(t) {
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
          ...gu(r.data, this.options),
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
        return Ha(a) && a.revert && b(this, wn) ? { ...b(this, wn), fetchStatus: "idle" } : {
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
  this.state = n(this.state), Ne.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), b(this, Xe).notify({ query: this, type: "updated", action: t });
  });
}, Ys);
function gu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: fu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function a0(e) {
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
var gt, Zs, o0 = (Zs = class extends xr {
  constructor(t = {}) {
    super();
    J(this, gt);
    this.config = t, z(this, gt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const a = n.queryKey, o = n.queryHash ?? wi(a, n);
    let i = this.get(o);
    return i || (i = new r0({
      cache: this,
      queryKey: a,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(a)
    }), this.add(i)), i;
  }
  add(t) {
    b(this, gt).has(t.queryHash) || (b(this, gt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = b(this, gt).get(t.queryHash);
    n && (t.destroy(), n === t && b(this, gt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ne.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return b(this, gt).get(t);
  }
  getAll() {
    return [...b(this, gt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Ds(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Ds(t, r)) : n;
  }
  notify(t) {
    Ne.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Ne.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ne.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, gt = new WeakMap(), Zs), vt, De, Jt, yt, Rt, Js, i0 = (Js = class extends mu {
  constructor(t) {
    super();
    J(this, yt);
    J(this, vt);
    J(this, De);
    J(this, Jt);
    this.mutationId = t.mutationId, z(this, De, t.mutationCache), z(this, vt, []), this.state = t.state || s0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    b(this, vt).includes(t) || (b(this, vt).push(t), this.clearGcTimeout(), b(this, De).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    z(this, vt, b(this, vt).filter((n) => n !== t)), this.scheduleGc(), b(this, De).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    b(this, vt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, De).remove(this));
  }
  continue() {
    var t;
    return ((t = b(this, Jt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, o, i, l, s, c, u, d, f, g, y, m, h, A, S, C, w, x, E, T;
    z(this, Jt, pu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (N, M) => {
        oe(this, yt, Rt).call(this, { type: "failed", failureCount: N, error: M });
      },
      onPause: () => {
        oe(this, yt, Rt).call(this, { type: "pause" });
      },
      onContinue: () => {
        oe(this, yt, Rt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => b(this, De).canRun(this)
    }));
    const n = this.state.status === "pending", r = !b(this, Jt).canStart();
    try {
      if (!n) {
        oe(this, yt, Rt).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (a = b(this, De).config).onMutate) == null ? void 0 : o.call(
          a,
          t,
          this
        ));
        const M = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
        M !== this.state.context && oe(this, yt, Rt).call(this, {
          type: "pending",
          context: M,
          variables: t,
          isPaused: r
        });
      }
      const N = await b(this, Jt).start();
      return await ((c = (s = b(this, De).config).onSuccess) == null ? void 0 : c.call(
        s,
        N,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, N, t, this.state.context)), await ((g = (f = b(this, De).config).onSettled) == null ? void 0 : g.call(
        f,
        N,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, N, null, t, this.state.context)), oe(this, yt, Rt).call(this, { type: "success", data: N }), N;
    } catch (N) {
      try {
        throw await ((A = (h = b(this, De).config).onError) == null ? void 0 : A.call(
          h,
          N,
          t,
          this.state.context,
          this
        )), await ((C = (S = this.options).onError) == null ? void 0 : C.call(
          S,
          N,
          t,
          this.state.context
        )), await ((x = (w = b(this, De).config).onSettled) == null ? void 0 : x.call(
          w,
          void 0,
          N,
          this.state.variables,
          this.state.context,
          this
        )), await ((T = (E = this.options).onSettled) == null ? void 0 : T.call(
          E,
          void 0,
          N,
          t,
          this.state.context
        )), N;
      } finally {
        oe(this, yt, Rt).call(this, { type: "error", error: N });
      }
    } finally {
      b(this, De).runNext(this);
    }
  }
}, vt = new WeakMap(), De = new WeakMap(), Jt = new WeakMap(), yt = new WeakSet(), Rt = function(t) {
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
  this.state = n(this.state), Ne.batch(() => {
    b(this, vt).forEach((r) => {
      r.onMutationUpdate(t);
    }), b(this, De).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Js);
function s0() {
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
var We, mr, ec, c0 = (ec = class extends xr {
  constructor(t = {}) {
    super();
    J(this, We);
    J(this, mr);
    this.config = t, z(this, We, /* @__PURE__ */ new Map()), z(this, mr, Date.now());
  }
  build(t, n, r) {
    const a = new i0({
      mutationCache: this,
      mutationId: ++Ar(this, mr)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(a), a;
  }
  add(t) {
    const n = Fr(t), r = b(this, We).get(n) ?? [];
    r.push(t), b(this, We).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = Fr(t);
    if (b(this, We).has(n)) {
      const a = (r = b(this, We).get(n)) == null ? void 0 : r.filter((o) => o !== t);
      a && (a.length === 0 ? b(this, We).delete(n) : b(this, We).set(n, a));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = b(this, We).get(Fr(t))) == null ? void 0 : r.find((a) => a.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = b(this, We).get(Fr(t))) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
    return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
  }
  clear() {
    Ne.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...b(this, We).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Fs(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Fs(t, n));
  }
  notify(t) {
    Ne.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return Ne.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(Ye))
      )
    );
  }
}, We = new WeakMap(), mr = new WeakMap(), ec);
function Fr(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Hs(e) {
  return {
    onFetch: (t, n) => {
      var u, d, f, g, y;
      const r = t.options, a = (f = (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, o = ((g = t.state.data) == null ? void 0 : g.pages) || [], i = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let l = { pages: [], pageParams: [] }, s = 0;
      const c = async () => {
        let m = !1;
        const h = (C) => {
          Object.defineProperty(C, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, A = du(t.options, t.fetchOptions), S = async (C, w, x) => {
          if (m)
            return Promise.reject();
          if (w == null && C.pages.length)
            return Promise.resolve(C);
          const E = {
            queryKey: t.queryKey,
            pageParam: w,
            direction: x ? "backward" : "forward",
            meta: t.options.meta
          };
          h(E);
          const T = await A(
            E
          ), { maxPages: N } = t.options, M = x ? Zg : Yg;
          return {
            pages: M(C.pages, T, N),
            pageParams: M(C.pageParams, w, N)
          };
        };
        if (a && o.length) {
          const C = a === "backward", w = C ? l0 : Us, x = {
            pages: o,
            pageParams: i
          }, E = w(r, x);
          l = await S(x, E, C);
        } else {
          const C = e ?? o.length;
          do {
            const w = s === 0 ? i[0] ?? r.initialPageParam : Us(r, l);
            if (s > 0 && w == null)
              break;
            l = await S(l, w), s++;
          } while (s < C);
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
function Us(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function l0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var ge, It, jt, Tn, An, _t, kn, Nn, tc, u0 = (tc = class {
  constructor(e = {}) {
    J(this, ge);
    J(this, It);
    J(this, jt);
    J(this, Tn);
    J(this, An);
    J(this, _t);
    J(this, kn);
    J(this, Nn);
    z(this, ge, e.queryCache || new o0()), z(this, It, e.mutationCache || new c0()), z(this, jt, e.defaultOptions || {}), z(this, Tn, /* @__PURE__ */ new Map()), z(this, An, /* @__PURE__ */ new Map()), z(this, _t, 0);
  }
  mount() {
    Ar(this, _t)._++, b(this, _t) === 1 && (z(this, kn, Ti.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, ge).onFocus());
    })), z(this, Nn, sa.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, ge).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Ar(this, _t)._--, b(this, _t) === 0 && ((e = b(this, kn)) == null || e.call(this), z(this, kn, void 0), (t = b(this, Nn)) == null || t.call(this), z(this, Nn, void 0));
  }
  isFetching(e) {
    return b(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return b(this, It).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = b(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = b(this, ge).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(bn(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return b(this, ge).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), a = b(this, ge).get(
      r.queryHash
    ), o = a == null ? void 0 : a.state.data, i = qg(t, o);
    if (i !== void 0)
      return b(this, ge).build(this, r).setData(i, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return Ne.batch(
      () => b(this, ge).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = b(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = b(this, ge);
    Ne.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = b(this, ge), r = {
      type: "active",
      ...e
    };
    return Ne.batch(() => (n.findAll(e).forEach((a) => {
      a.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = { revert: !0, ...t }, r = Ne.batch(
      () => b(this, ge).findAll(e).map((a) => a.cancel(n))
    );
    return Promise.all(r).then(Ye).catch(Ye);
  }
  invalidateQueries(e = {}, t = {}) {
    return Ne.batch(() => {
      if (b(this, ge).findAll(e).forEach((r) => {
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
    }, r = Ne.batch(
      () => b(this, ge).findAll(e).filter((a) => !a.isDisabled()).map((a) => {
        let o = a.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Ye)), a.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(Ye);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = b(this, ge).build(this, t);
    return n.isStaleByTime(
      bn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ye).catch(Ye);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Hs(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ye).catch(Ye);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Hs(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return sa.isOnline() ? b(this, It).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return b(this, ge);
  }
  getMutationCache() {
    return b(this, It);
  }
  getDefaultOptions() {
    return b(this, jt);
  }
  setDefaultOptions(e) {
    z(this, jt, e);
  }
  setQueryDefaults(e, t) {
    b(this, Tn).set(fr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...b(this, Tn).values()];
    let n = {};
    return t.forEach((r) => {
      hr(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    b(this, An).set(fr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...b(this, An).values()];
    let n = {};
    return t.forEach((r) => {
      hr(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...b(this, jt).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = wi(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ia && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...b(this, jt).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    b(this, ge).clear(), b(this, It).clear();
  }
}, ge = new WeakMap(), It = new WeakMap(), jt = new WeakMap(), Tn = new WeakMap(), An = new WeakMap(), _t = new WeakMap(), kn = new WeakMap(), Nn = new WeakMap(), tc), $e, ie, gr, Fe, en, Pn, Lt, bt, vr, Rn, Mn, tn, nn, Dt, On, le, Zn, zo, Vo, Wo, Go, Ko, Qo, qo, vu, nc, d0 = (nc = class extends xr {
  constructor(t, n) {
    super();
    J(this, le);
    J(this, $e);
    J(this, ie);
    J(this, gr);
    J(this, Fe);
    J(this, en);
    J(this, Pn);
    J(this, Lt);
    J(this, bt);
    J(this, vr);
    J(this, Rn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    J(this, Mn);
    J(this, tn);
    J(this, nn);
    J(this, Dt);
    J(this, On, /* @__PURE__ */ new Set());
    this.options = n, z(this, $e, t), z(this, bt, null), z(this, Lt, Uo()), this.options.experimental_prefetchInRender || b(this, Lt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (b(this, ie).addObserver(this), zs(b(this, ie), this.options) ? oe(this, le, Zn).call(this) : this.updateResult(), oe(this, le, Go).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Xo(
      b(this, ie),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Xo(
      b(this, ie),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), oe(this, le, Ko).call(this), oe(this, le, Qo).call(this), b(this, ie).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = b(this, ie);
    if (this.options = b(this, $e).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof st(this.options.enabled, b(this, ie)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    oe(this, le, qo).call(this), b(this, ie).setOptions(this.options), r._defaulted && !Bo(this.options, r) && b(this, $e).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: b(this, ie),
      observer: this
    });
    const o = this.hasListeners();
    o && Vs(
      b(this, ie),
      a,
      this.options,
      r
    ) && oe(this, le, Zn).call(this), this.updateResult(n), o && (b(this, ie) !== a || st(this.options.enabled, b(this, ie)) !== st(r.enabled, b(this, ie)) || bn(this.options.staleTime, b(this, ie)) !== bn(r.staleTime, b(this, ie))) && oe(this, le, zo).call(this);
    const i = oe(this, le, Vo).call(this);
    o && (b(this, ie) !== a || st(this.options.enabled, b(this, ie)) !== st(r.enabled, b(this, ie)) || i !== b(this, Dt)) && oe(this, le, Wo).call(this, i);
  }
  getOptimisticResult(t) {
    const n = b(this, $e).getQueryCache().build(b(this, $e), t), r = this.createResult(n, t);
    return h0(this, r) && (z(this, Fe, r), z(this, Pn, this.options), z(this, en, b(this, ie).state)), r;
  }
  getCurrentResult() {
    return b(this, Fe);
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
    b(this, On).add(t);
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
    const n = b(this, $e).defaultQueryOptions(t), r = b(this, $e).getQueryCache().build(b(this, $e), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return oe(this, le, Zn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), b(this, Fe)));
  }
  createResult(t, n) {
    var N;
    const r = b(this, ie), a = this.options, o = b(this, Fe), i = b(this, en), l = b(this, Pn), c = t !== r ? t.state : b(this, gr), { state: u } = t;
    let d = { ...u }, f = !1, g;
    if (n._optimisticResults) {
      const M = this.hasListeners(), L = !M && zs(t, n), I = M && Vs(t, r, n, a);
      (L || I) && (d = {
        ...d,
        ...gu(u.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: h } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (i == null ? void 0 : i.data) && n.select === b(this, vr))
        g = b(this, Rn);
      else
        try {
          z(this, vr, n.select), g = n.select(d.data), g = Ho(o == null ? void 0 : o.data, g, n), z(this, Rn, g), z(this, bt, null);
        } catch (M) {
          z(this, bt, M);
        }
    else
      g = d.data;
    if (n.placeholderData !== void 0 && g === void 0 && h === "pending") {
      let M;
      if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        M = o.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (N = b(this, Mn)) == null ? void 0 : N.state.data,
        b(this, Mn)
      ) : n.placeholderData, n.select && M !== void 0)
        try {
          M = n.select(M), z(this, bt, null);
        } catch (L) {
          z(this, bt, L);
        }
      M !== void 0 && (h = "success", g = Ho(
        o == null ? void 0 : o.data,
        M,
        n
      ), f = !0);
    }
    b(this, bt) && (y = b(this, bt), g = b(this, Rn), m = Date.now(), h = "error");
    const A = d.fetchStatus === "fetching", S = h === "pending", C = h === "error", w = S && A, x = g !== void 0, T = {
      status: h,
      fetchStatus: d.fetchStatus,
      isPending: S,
      isSuccess: h === "success",
      isError: C,
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
      isFetching: A,
      isRefetching: A && !S,
      isLoadingError: C && !x,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: C && x,
      isStale: Ai(t, n),
      refetch: this.refetch,
      promise: b(this, Lt)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (H) => {
        T.status === "error" ? H.reject(T.error) : T.data !== void 0 && H.resolve(T.data);
      }, L = () => {
        const H = z(this, Lt, T.promise = Uo());
        M(H);
      }, I = b(this, Lt);
      switch (I.status) {
        case "pending":
          t.queryHash === r.queryHash && M(I);
          break;
        case "fulfilled":
          (T.status === "error" || T.data !== I.value) && L();
          break;
        case "rejected":
          (T.status !== "error" || T.error !== I.reason) && L();
          break;
      }
    }
    return T;
  }
  updateResult(t) {
    const n = b(this, Fe), r = this.createResult(b(this, ie), this.options);
    if (z(this, en, b(this, ie).state), z(this, Pn, this.options), b(this, en).data !== void 0 && z(this, Mn, b(this, ie)), Bo(r, n))
      return;
    z(this, Fe, r);
    const a = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: i } = this.options, l = typeof i == "function" ? i() : i;
      if (l === "all" || !l && !b(this, On).size)
        return !0;
      const s = new Set(
        l ?? b(this, On)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(b(this, Fe)).some((c) => {
        const u = c;
        return b(this, Fe)[u] !== n[u] && s.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (a.listeners = !0), oe(this, le, vu).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && oe(this, le, Go).call(this);
  }
}, $e = new WeakMap(), ie = new WeakMap(), gr = new WeakMap(), Fe = new WeakMap(), en = new WeakMap(), Pn = new WeakMap(), Lt = new WeakMap(), bt = new WeakMap(), vr = new WeakMap(), Rn = new WeakMap(), Mn = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), Dt = new WeakMap(), On = new WeakMap(), le = new WeakSet(), Zn = function(t) {
  oe(this, le, qo).call(this);
  let n = b(this, ie).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Ye)), n;
}, zo = function() {
  oe(this, le, Ko).call(this);
  const t = bn(
    this.options.staleTime,
    b(this, ie)
  );
  if (ln || b(this, Fe).isStale || !Do(t))
    return;
  const r = uu(b(this, Fe).dataUpdatedAt, t) + 1;
  z(this, tn, setTimeout(() => {
    b(this, Fe).isStale || this.updateResult();
  }, r));
}, Vo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, ie)) : this.options.refetchInterval) ?? !1;
}, Wo = function(t) {
  oe(this, le, Qo).call(this), z(this, Dt, t), !(ln || st(this.options.enabled, b(this, ie)) === !1 || !Do(b(this, Dt)) || b(this, Dt) === 0) && z(this, nn, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ti.isFocused()) && oe(this, le, Zn).call(this);
  }, b(this, Dt)));
}, Go = function() {
  oe(this, le, zo).call(this), oe(this, le, Wo).call(this, oe(this, le, Vo).call(this));
}, Ko = function() {
  b(this, tn) && (clearTimeout(b(this, tn)), z(this, tn, void 0));
}, Qo = function() {
  b(this, nn) && (clearInterval(b(this, nn)), z(this, nn, void 0));
}, qo = function() {
  const t = b(this, $e).getQueryCache().build(b(this, $e), this.options);
  if (t === b(this, ie))
    return;
  const n = b(this, ie);
  z(this, ie, t), z(this, gr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, vu = function(t) {
  Ne.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(b(this, Fe));
    }), b(this, $e).getQueryCache().notify({
      query: b(this, ie),
      type: "observerResultsUpdated"
    });
  });
}, nc);
function f0(e, t) {
  return st(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function zs(e, t) {
  return f0(e, t) || e.state.data !== void 0 && Xo(e, t, t.refetchOnMount);
}
function Xo(e, t, n) {
  if (st(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Ai(e, t);
  }
  return !1;
}
function Vs(e, t, n, r) {
  return (e !== t || st(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Ai(e, n);
}
function Ai(e, t) {
  return st(t.enabled, e) !== !1 && e.isStaleByTime(bn(t.staleTime, e));
}
function h0(e, t) {
  return !Bo(e.getCurrentResult(), t);
}
var yu = p.createContext(
  void 0
), p0 = (e) => {
  const t = p.useContext(yu);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, m0 = ({
  client: e,
  children: t
}) => (p.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ v.jsx(yu.Provider, { value: e, children: t })), bu = p.createContext(!1), g0 = () => p.useContext(bu);
bu.Provider;
function v0() {
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
var y0 = p.createContext(v0()), b0 = () => p.useContext(y0);
function x0(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function C0() {
}
var S0 = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, E0 = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, w0 = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && x0(n, [e.error, r]), T0 = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, A0 = (e, t) => e.isLoading && e.isFetching && !t, k0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ws = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function N0(e, t, n) {
  var u, d, f, g, y;
  if (G.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = p0(), a = g0(), o = b0(), i = r.defaultQueryOptions(e);
  (d = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    i
  ), i._optimisticResults = a ? "isRestoring" : "optimistic", T0(i), S0(i, o), E0(o);
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
        } : s.subscribe(Ne.batchCalls(m));
        return s.updateResult(), h;
      },
      [s, a]
    ),
    () => s.getCurrentResult(),
    () => s.getCurrentResult()
  ), p.useEffect(() => {
    s.setOptions(i, { listeners: !1 });
  }, [i, s]), k0(i, c))
    throw Ws(i, s, o);
  if (w0({
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
  ), i.experimental_prefetchInRender && !ln && A0(c, a)) {
    const m = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ws(i, s, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (y = r.getQueryCache().get(i.queryHash)) == null ? void 0 : y.promise
    );
    m == null || m.catch(C0).finally(() => {
      s.updateResult();
    });
  }
  return i.notifyOnChangeProps ? c : s.trackResult(c);
}
function Cr(e, t) {
  return N0(e, d0);
}
const P0 = async () => {
  const { data: e } = await Pe.get("/user-assets/token-prices");
  return e;
}, R0 = (e) => Cr({
  queryKey: ["tokenPrices"],
  queryFn: P0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  staleTime: 1e3 * 60 * 60,
  // data is fresh within 60 minutes
  gcTime: 1e3 * 60 * 60,
  // cache for 120 minutes
  ...e
}), M0 = async (e) => {
  const t = ve.getToken(e), { address: n } = je.all(), r = await t.getBalance(n);
  return Jn(r) || "0";
}, O0 = async () => {
  const e = ve.createTokenMap(() => "0"), t = Object.values(we), n = await Promise.all(t.map((r) => M0(r)));
  return t.reduce((r, a, o) => ({
    ...r,
    [a]: n[o] || "0"
  }), e);
}, I0 = () => Cr({
  queryKey: ["tokenBalances"],
  queryFn: O0,
  enabled: !0,
  retry: !1,
  gcTime: 0
});
function j0({
  isOpen: e,
  onClose: t,
  defaultLimits: n
}) {
  const { data: r } = I0(), { data: a } = R0(), [o, i] = p.useState(null), [l, s] = p.useState(!1), [c, u] = p.useState(ve.createTokenMap(() => ""));
  p.useEffect(() => {
    e && f();
  }, [e]);
  const d = p.useMemo(() => ve.getAllTokens().some((x) => !c[x.tokenType]), [c]), f = async () => {
    g(), u(n);
  }, g = async () => {
    try {
      const { data: x } = await Pe.post("/transaction/outbound-amount", {
        tokens: ve.getAllTokens().map((E) => E.tokenType)
      });
      i(x);
    } catch (x) {
      console.error("Failed to fetch token transferred:", x);
    }
  }, y = p.useMemo(() => ve.getAllTokens().map((x) => ({
    type: x.tokenType,
    balance: (r == null ? void 0 : r[x.tokenType]) || "0",
    todayTransferred: (o == null ? void 0 : o[x.tokenType]) || "0"
  })), [r, o]), m = (x, E) => {
    E && !/^\d*\.?\d*$/.test(E) || u((T) => ({
      ...T,
      [x]: E
    }));
  }, h = (x, E) => {
    if (!E || !a || !a[x]) return "0";
    const T = parseFloat(a[x]), N = parseFloat(E);
    return isNaN(T) || isNaN(N) ? "0" : (T * N).toFixed(2);
  }, A = async () => {
    rt(c, "limits");
    try {
      s(!0);
      const x = ve.getAllTokens().map((E) => ({
        type: E.tokenType,
        value: Br(c[E.tokenType] || "0").toString()
      }));
      await Pe.post("/auth/generate-otp-for-daily-limit-update", {
        limits: x
      }), ct.info("Please check your email to confirm the transaction limit update", {
        autoClose: !1,
        closeButton: !0
      }), t();
    } catch (x) {
      const E = rr(x);
      ct.error(E.message);
    } finally {
      s(!1);
    }
  }, S = (x) => x == null ? "0" : Vt(BigInt(x)), C = () => {
    t();
  }, w = /* @__PURE__ */ v.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ v.jsx(rn, { className: "hidden tablet:block", variant: "outline", onClick: () => C(), children: "Cancel" }),
    /* @__PURE__ */ v.jsx(
      rn,
      {
        className: "w-full tablet:w-auto",
        disabled: d || l,
        onClick: () => {
          A();
        },
        children: l ? /* @__PURE__ */ v.jsx(xc, {}) : "Save"
      }
    )
  ] });
  return /* @__PURE__ */ v.jsx(
    Qg,
    {
      isOpen: e,
      onClose: t,
      title: "Daily Transaction Limit",
      footer: w,
      contentClassName: "p-6 max-h-[80vh] overflow-y-auto",
      className: "z-[10002]",
      children: y.map((x, E) => /* @__PURE__ */ v.jsxs("div", { className: E > 0 ? "mt-6" : "", children: [
        /* @__PURE__ */ v.jsxs("p", { className: "text-black text-sm font-medium leading-none mb-[6px]", children: [
          x.type,
          " daily limit"
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: re(
          "tablet:flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none", children: [
            /* @__PURE__ */ v.jsx(
              Zr,
              {
                className: "w-[131px] text-black",
                value: c[x.type],
                onChange: (T) => m(x.type, T.target.value),
                placeholder: "Enter limit",
                disabled: l
              }
            ),
            /* @__PURE__ */ v.jsxs("p", { children: [
              "~",
              h(x.type, c[x.type]),
              " USDT"
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: re(
            "flex items-center gap-2 text-sm font-normal leading-none",
            "mt-[20px] tablet:mt-0"
          ), children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-[#a1a1a1]", children: "Balance:" }),
            /* @__PURE__ */ v.jsxs("p", { className: "text-black", children: [
              x.balance,
              " ",
              x.type
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
          /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-black text-xs font-normal leading-none", children: l ? "" : `You've transferred ${S(x.todayTransferred ?? "0")} ${ve.getToken(x.type).symbol} today` })
        ] })
      ] }, x.type))
    }
  );
}
const _0 = ve.createTokenMap(() => "0"), L0 = async () => {
  const { data: e } = await Pe.get("/transaction/default-daily-withdrawal-limits", {
    params: {
      includeUserLimits: !0
    }
  });
  return Object.values(we).reduce((n, r) => (n[r] = Vt(BigInt(e[r] ?? 0)), n), {});
}, D0 = (e) => Cr({
  queryKey: ["dailyWithdrawalLimits"],
  queryFn: L0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  gcTime: 0,
  staleTime: 0,
  initialData: _0,
  ...e
}), F0 = ve.getAllTokens();
function B0({
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
  const [c, u] = p.useState(""), [d, f] = p.useState(""), [g, y] = p.useState(""), [m, h] = p.useState(!1), A = p.useRef(), [S, C] = p.useState(!1), { data: w } = D0(), [x, E] = p.useState(null), [T, N] = p.useState(a), [M, L] = p.useState("0"), [I, H] = p.useState(""), [$, D] = p.useState(!1), [W, P] = p.useState(!1), [k, R] = p.useState(!1), [O, j] = p.useState(!1), [_, U] = p.useState(""), [F, K] = p.useState(""), [Q, ne] = p.useState(""), { t: ee } = oi(), Me = $i(d, 800), Se = $i(c, 800), ye = p.useRef(null), [Ke, Te] = p.useState(0), Ee = p.useMemo(() => T ? ve.getToken(T).symbol : "", [T]), V = p.useMemo(() => T ? ve.getToken(T).gasSymbol : "", [T]);
  p.useEffect(() => {
    ye.current && setTimeout(() => {
      var fe;
      const te = (fe = ye.current) == null ? void 0 : fe.getBoundingClientRect().width;
      te && Te(te + 34);
    }, 0);
  }, [Ee, e]), p.useEffect(() => {
    rt("open", e, "address", r), e ? Qe() : Wn();
  }, [o, i, l, e]), p.useEffect(() => {
    c && d && W && (Vn(), de(c), Sr(), P(!1));
  }, [c, d, W, e]), p.useEffect(() => {
    !e && s && s();
  }, [e]), p.useEffect(() => {
    Vn(), Se && de(Se), Me && !_e && !$ && Sr();
  }, [Me, Se]);
  const Qe = async () => {
    await he(a), o && u(o), i && f(i), l && y(l), et(), P(!0);
  }, be = p.useMemo(() => w[T], [T, w]), _e = p.useMemo(() => !c || !d || m || !O || k || !!F && F !== ee("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(d) > parseFloat(M) || $, [c, d, m, O, k, F, M, $]), et = async () => {
    try {
      const { data: te } = await Pe.post("/transaction/outbound-amount", {
        tokens: ve.getAllTokens().map((fe) => fe.tokenType)
      });
      E(te);
    } catch (te) {
      console.error("Failed to fetch token transferred:", te);
    }
  }, dt = () => {
    const te = /* @__PURE__ */ v.jsx("div", { className: "cursor-pointer", onClick: () => {
      Lo.destroy();
    }, children: "Ok" });
    Lo.open({
      message: "Daily transaction limit exceeded",
      description: /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("p", { children: "Please check your email and verify by the OTP." }),
        /* @__PURE__ */ v.jsx("p", { children: "You can change yur dailiy transaction limit under profile page." })
      ] }),
      placement: "top",
      duration: 0,
      btn: te
    });
  }, he = async (te) => {
    f(""), D(!1), H(""), ne(""), N(te);
    const fe = ve.getToken(te);
    A.current = fe;
    let Le = await fe.getBalance(r);
    Le = Jn(Le), L(Le);
  }, de = async (te) => {
    if (qr(c))
      j(!0), U(""), K("");
    else {
      R(!0), K("");
      try {
        const fe = await Pe.get("/address/", {
          params: { email: te }
        });
        fe.data.success ? (j(!0), U(fe.data.address)) : Bi.test(te) ? (j(!0), U(""), K(ee("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (j(!1), U(""), K(ee("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        R(!1);
      }
    }
  }, Oe = () => {
    rt("to", c), c || (j(!1), U(""), K(""));
  };
  async function ft(te) {
    try {
      const fe = Br(d).toString();
      rt("amt", fe), h(!0);
      const {
        needOtp: Le,
        hash: Er,
        message: Ni
      } = await Jd.signTransaction({
        toAddress: te,
        amount: fe,
        token: T,
        note: g,
        transactionType: Sc.TRANSFER
      });
      Er ? (t(!1), tt(Er)) : Le && (dt(), t(!1));
    } catch (fe) {
      const Le = rr(fe);
      rt("errorInfo", Le), ct.error(Le.message);
    } finally {
      h(!1);
    }
  }
  const Ue = (te) => {
    var Le;
    const fe = `${(Le = A.current) == null ? void 0 : Le.scanTransactionUrl}/${te}`;
    window.open(fe, "_blank");
  }, tt = (te) => {
    ct(
      /* @__PURE__ */ v.jsx("div", { className: "w-full", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ v.jsx(za, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ v.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ v.jsx(
            rn,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                Ue(te);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, zn = async () => {
    if (!_e)
      try {
        h(!0);
        let te, fe;
        if (qr(c))
          te = c;
        else if (Bi.test(c) && F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          fe = c;
          const Le = await Pe.post("/invite/invite-register", {
            toEmail: fe,
            from: r,
            amount: Br(d).toString(),
            token: T,
            note: g
          });
          rt("res", Le), ct.success(ee("/dashboard.[token].sendModal.emailSentToUnregistered")), Wn(), t(!1);
          return;
        } else
          te = _;
        await ft(te), Wn(), t(!1);
      } catch (te) {
        const fe = rr(te);
        rt("errorInfo", fe), ct.error(ee("/dashboard.[token].sendModal.sendError"));
      } finally {
        h(!1);
      }
  }, Vn = async () => {
    parseFloat(d) > parseFloat(M) ? ne("Amount exceeded") : ne("");
  }, Sr = async () => {
    if (d && !_e) {
      D(!0);
      try {
        rt("checkEstimatedFee", d);
        const te = await Wd({
          tokenType: T,
          transferParams: {
            to: r,
            amount: Br(d)
          },
          fromAddress: r
        });
        H(te ? te.feeInTokens.toString() : "");
      } catch (te) {
        rt("Failed to get estimated fee:", te), H("");
      } finally {
        D(!1);
      }
    }
  }, Wn = () => {
    f(""), u(""), y(""), U(""), K(""), j(!1), R(!1), H("");
  }, Ca = async (te) => {
    f(te.target.value.trim()), parseFloat(d) > parseFloat(M) ? ne("Amount exceeded") : ne("");
  }, Sa = p.useMemo(() => {
    const te = (x == null ? void 0 : x[T]) || "0";
    return Jn(Vt(BigInt(te)));
  }, [T, x]), Ea = e ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-[10001] flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: re(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: ee("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => t(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(ai, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB] max-h-[90vh] overflow-y-auto", children: /* @__PURE__ */ v.jsxs("form", { children: [
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              Zr,
              {
                value: c,
                onChange: (te) => u(te.target.value.trim()),
                onBlur: Oe,
                id: "to",
                required: !0,
                placeholder: ee("/dashboard.[token].sendModal.toPlaceholder"),
                className: re(
                  O && "border-green-500",
                  F && "border-destructive",
                  F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            k && /* @__PURE__ */ v.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsx(ld, { className: "animate-spin", size: 16 }) }),
            O && !k && !F && /* @__PURE__ */ v.jsx(za, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            F && !k && /* @__PURE__ */ v.jsx(mc, { className: re(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          O && _ && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-primary/60", children: _ }),
          F && /* @__PURE__ */ v.jsx("p", { className: re(
            "mt-1 text-xs text-destructive",
            F === ee("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: F })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              Zr,
              {
                value: d,
                onChange: Ca,
                type: "number",
                inputMode: "decimal",
                id: "amount",
                className: re(
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                ),
                required: !0,
                onBlur: Vn,
                style: {
                  paddingLeft: `${Ke}px`
                }
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsxs(ef, { children: [
              /* @__PURE__ */ v.jsxs(tf, { className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
                /* @__PURE__ */ v.jsx("span", { ref: ye, className: "font-medium text-sm", children: Ee }),
                /* @__PURE__ */ v.jsx(ud, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ v.jsx(Ec, { align: "start", className: "bg-white", children: F0.map((te) => /* @__PURE__ */ v.jsx(wc, { onClick: () => he(te.tokenType), children: te.symbol }, te.tokenType)) })
            ] }) })
          ] }),
          Q && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-destructive", children: Q })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          $ ? /* @__PURE__ */ v.jsx("span", { children: /* @__PURE__ */ v.jsx(dd, { className: "animate-spin", size: 14 }) }) : I ? /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            "~ ",
            I,
            " ",
            V
          ] }) : /* @__PURE__ */ v.jsx("span", { className: "text-black", children: "-" })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-2 mb-[20px]", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ v.jsxs("p", { className: "text-[#979797] text-sm leading-none", children: [
              "Daily limit: ",
              /* @__PURE__ */ v.jsxs("span", { children: [
                be,
                " ",
                Ee
              ] })
            ] }),
            /* @__PURE__ */ v.jsx(
              rn,
              {
                variant: "outline",
                className: "h-[24px] py-1 px-2 text-xs",
                onClick: () => C(!0),
                type: "button",
                children: "Change limit"
              }
            )
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "border border-black/10 bg-black/5 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
            /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
            /* @__PURE__ */ v.jsxs("p", { className: "text-black text-xs font-normal leading-none", children: [
              "You've transferred ",
              zd(Sa),
              " ",
              Ee,
              " today"
            ] })
          ] })
        ] }),
        I && I !== "0" && /* @__PURE__ */ v.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ v.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            Jn(M),
            " ",
            Ee
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: ee("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsx(
            Cc,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: g,
              onChange: (te) => y(te.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(
        rn,
        {
          onClick: zn,
          className: re("py-12px"),
          disabled: _e,
          children: m ? /* @__PURE__ */ v.jsx("div", { className: "", children: /* @__PURE__ */ v.jsx(xc, {}) }) : /* @__PURE__ */ v.jsx("span", { children: ee("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ v.jsx(
      j0,
      {
        isOpen: S,
        onClose: () => C(!1),
        defaultLimits: w
      }
    )
  ] }) : null;
  if (typeof window < "u")
    return nr.createPortal(
      Ea,
      document.body
    );
}
const $0 = qu, xu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  fc,
  {
    ref: n,
    className: re(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
xu.displayName = fc.displayName;
const Yo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  hc,
  {
    ref: n,
    className: re(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Yo.displayName = hc.displayName;
const Zo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  pc,
  {
    ref: n,
    className: re(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Zo.displayName = pc.displayName;
var H0 = Object.defineProperty, ca = Object.getOwnPropertySymbols, Cu = Object.prototype.hasOwnProperty, Su = Object.prototype.propertyIsEnumerable, Gs = (e, t, n) => t in e ? H0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Jo = (e, t) => {
  for (var n in t || (t = {}))
    Cu.call(t, n) && Gs(e, n, t[n]);
  if (ca)
    for (var n of ca(t))
      Su.call(t, n) && Gs(e, n, t[n]);
  return e;
}, ei = (e, t) => {
  var n = {};
  for (var r in e)
    Cu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ca)
    for (var r of ca(e))
      t.indexOf(r) < 0 && Su.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var un;
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
        const C = ae.getNumDataCodewords(y, c) * 8, w = i.getTotalBits(s, y);
        if (w <= C) {
          m = w;
          break;
        }
        if (y >= d)
          throw new RangeError("Data too long");
      }
      for (const C of [ae.Ecc.MEDIUM, ae.Ecc.QUARTILE, ae.Ecc.HIGH])
        g && m <= ae.getNumDataCodewords(y, C) * 8 && (c = C);
      let h = [];
      for (const C of s) {
        n(C.mode.modeBits, 4, h), n(C.numChars, C.mode.numCharCountBits(y), h);
        for (const w of C.getData())
          h.push(w);
      }
      a(h.length == m);
      const A = ae.getNumDataCodewords(y, c) * 8;
      a(h.length <= A), n(0, Math.min(4, A - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let C = 236; h.length < A; C ^= 253)
        n(C, 8, h);
      let S = [];
      for (; S.length * 8 < h.length; )
        S.push(0);
      return h.forEach((C, w) => S[w >>> 3] |= C << 7 - (w & 7)), new ae(y, c, S, f);
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
      const A = ae.reedSolomonComputeDivisor(f);
      for (let C = 0, w = 0; C < d; C++) {
        let x = s.slice(w, w + m - f + (C < y ? 0 : 1));
        w += x.length;
        const E = ae.reedSolomonComputeRemainder(x, A);
        C < y && x.push(0), h.push(x.concat(E));
      }
      let S = [];
      for (let C = 0; C < h[0].length; C++)
        h.forEach((w, x) => {
          (C != m - f || x >= y) && S.push(w[C]);
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
  const o = class me {
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
      return new me(me.Mode.BYTE, s.length, c);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(s) {
      if (!me.isNumeric(s))
        throw new RangeError("String contains non-numeric characters");
      let c = [];
      for (let u = 0; u < s.length; ) {
        const d = Math.min(s.length - u, 3);
        n(parseInt(s.substring(u, u + d), 10), d * 3 + 1, c), u += d;
      }
      return new me(me.Mode.NUMERIC, s.length, c);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(s) {
      if (!me.isAlphanumeric(s))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let c = [], u;
      for (u = 0; u + 2 <= s.length; u += 2) {
        let d = me.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u)) * 45;
        d += me.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u + 1)), n(d, 11, c);
      }
      return u < s.length && n(me.ALPHANUMERIC_CHARSET.indexOf(s.charAt(u)), 6, c), new me(me.Mode.ALPHANUMERIC, s.length, c);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(s) {
      return s == "" ? [] : me.isNumeric(s) ? [me.makeNumeric(s)] : me.isAlphanumeric(s) ? [me.makeAlphanumeric(s)] : [me.makeBytes(me.toUtf8ByteArray(s))];
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
      return new me(me.Mode.ECI, 0, c);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(s) {
      return me.NUMERIC_REGEX.test(s);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(s) {
      return me.ALPHANUMERIC_REGEX.test(s);
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
})(un || (un = {}));
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
})(un || (un = {}));
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
})(un || (un = {}));
var yn = un;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var U0 = {
  L: yn.QrCode.Ecc.LOW,
  M: yn.QrCode.Ecc.MEDIUM,
  Q: yn.QrCode.Ecc.QUARTILE,
  H: yn.QrCode.Ecc.HIGH
}, Eu = 128, wu = "L", Tu = "#FFFFFF", Au = "#000000", ku = !1, Nu = 1, z0 = 4, V0 = 0, W0 = 0.1;
function Pu(e, t = 0) {
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
function Ru(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((a, o) => o < t.x || o >= t.x + t.w ? a : !1));
}
function G0(e, t, n, r) {
  if (r == null)
    return null;
  const a = e.length + n * 2, o = Math.floor(t * W0), i = a / t, l = (r.width || o) * i, s = (r.height || o) * i, c = r.x == null ? e.length / 2 - l / 2 : r.x * i, u = r.y == null ? e.length / 2 - s / 2 : r.y * i, d = r.opacity == null ? 1 : r.opacity;
  let f = null;
  if (r.excavate) {
    let y = Math.floor(c), m = Math.floor(u), h = Math.ceil(l + c - y), A = Math.ceil(s + u - m);
    f = { x: y, y: m, w: h, h: A };
  }
  const g = r.crossOrigin;
  return { x: c, y: u, h: s, w: l, excavation: f, opacity: d, crossOrigin: g };
}
function K0(e, t) {
  return t != null ? Math.max(Math.floor(t), 0) : e ? z0 : V0;
}
function Mu({
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
    const y = (Array.isArray(e) ? e : [e]).reduce((m, h) => (m.push(...yn.QrSegment.makeSegments(h)), m), []);
    return yn.QrCode.encodeSegments(
      y,
      U0[t],
      n,
      void 0,
      void 0,
      l
    );
  }, [e, t, n, l]);
  const { cells: c, margin: u, numCells: d, calculatedImageSettings: f } = q.useMemo(() => {
    let g = s.getModules();
    const y = K0(r, a), m = g.length + y * 2, h = G0(
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
var Q0 = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), q0 = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = Eu,
      level: i = wu,
      bgColor: l = Tu,
      fgColor: s = Au,
      includeMargin: c = ku,
      minVersion: u = Nu,
      boostLevel: d,
      marginSize: f,
      imageSettings: g
    } = r, m = ei(r, [
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
    ]), { style: h } = m, A = ei(m, ["style"]), S = g == null ? void 0 : g.src, C = q.useRef(null), w = q.useRef(null), x = q.useCallback(
      (D) => {
        C.current = D, typeof n == "function" ? n(D) : n && (n.current = D);
      },
      [n]
    ), [E, T] = q.useState(!1), { margin: N, cells: M, numCells: L, calculatedImageSettings: I } = Mu({
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
      if (C.current != null) {
        const D = C.current, W = D.getContext("2d");
        if (!W)
          return;
        let P = M;
        const k = w.current, R = I != null && k !== null && k.complete && k.naturalHeight !== 0 && k.naturalWidth !== 0;
        R && I.excavation != null && (P = Ru(
          M,
          I.excavation
        ));
        const O = window.devicePixelRatio || 1;
        D.height = D.width = o * O;
        const j = o / L * O;
        W.scale(j, j), W.fillStyle = l, W.fillRect(0, 0, L, L), W.fillStyle = s, Q0 ? W.fill(new Path2D(Pu(P, N))) : M.forEach(function(_, U) {
          _.forEach(function(F, K) {
            F && W.fillRect(K + N, U + N, 1, 1);
          });
        }), I && (W.globalAlpha = I.opacity), R && W.drawImage(
          k,
          I.x + N,
          I.y + N,
          I.w,
          I.h
        );
      }
    }), q.useEffect(() => {
      T(!1);
    }, [S]);
    const H = Jo({ height: o, width: o }, h);
    let $ = null;
    return S != null && ($ = /* @__PURE__ */ q.createElement(
      "img",
      {
        src: S,
        key: S,
        style: { display: "none" },
        onLoad: () => {
          T(!0);
        },
        ref: w,
        crossOrigin: I == null ? void 0 : I.crossOrigin
      }
    )), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
      "canvas",
      Jo({
        style: H,
        height: o,
        width: o,
        ref: x,
        role: "img"
      }, A)
    ), $);
  }
);
q0.displayName = "QRCodeCanvas";
var ti = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = Eu,
      level: i = wu,
      bgColor: l = Tu,
      fgColor: s = Au,
      includeMargin: c = ku,
      minVersion: u = Nu,
      boostLevel: d,
      title: f,
      marginSize: g,
      imageSettings: y
    } = r, m = ei(r, [
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
    ]), { margin: h, cells: A, numCells: S, calculatedImageSettings: C } = Mu({
      value: a,
      level: i,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: g,
      imageSettings: y,
      size: o
    });
    let w = A, x = null;
    y != null && C != null && (C.excavation != null && (w = Ru(
      A,
      C.excavation
    )), x = /* @__PURE__ */ q.createElement(
      "image",
      {
        href: y.src,
        height: C.h,
        width: C.w,
        x: C.x + h,
        y: C.y + h,
        preserveAspectRatio: "none",
        opacity: C.opacity,
        crossOrigin: C.crossOrigin
      }
    ));
    const E = Pu(w, h);
    return /* @__PURE__ */ q.createElement(
      "svg",
      Jo({
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
      /* @__PURE__ */ q.createElement("path", { fill: s, d: E, shapeRendering: "crispEdges" }),
      x
    );
  }
);
ti.displayName = "QRCodeSVG";
function X0({
  address: e,
  open: t,
  setOpen: n,
  onClose: r
}) {
  const { t: a } = oi(), [o, i] = p.useState("");
  p.useEffect(() => {
    const { username: c } = je.all();
    i(c);
  }, []);
  const l = async () => {
    try {
      const c = document.querySelector("#qr-code-svg");
      if (!c) return;
      const u = c.querySelector("image");
      if (u) {
        const m = u.getAttribute("href") || "", A = await (await fetch(m)).blob(), S = await new Promise((C) => {
          const w = new FileReader();
          w.onloadend = () => C(w.result), w.readAsDataURL(A);
        });
        u.setAttribute("href", S);
      }
      const d = new XMLSerializer().serializeToString(c), f = new Blob([d], { type: "image/svg+xml;charset=utf-8" }), g = URL.createObjectURL(f), y = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((m, h) => {
        const A = new Image();
        A.onload = () => {
          const S = document.createElement("canvas"), C = S.getContext("2d");
          S.width = A.width, S.height = A.height, C == null || C.drawImage(A, 0, 0), y ? S.toBlob(async (w) => {
            if (w)
              try {
                if (navigator.share) {
                  const x = new File([w], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [x],
                    title: "QR Code"
                  });
                } else {
                  const x = URL.createObjectURL(w), E = document.createElement("a");
                  E.href = x, E.download = "qrcode.png", document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(x);
                }
                ct.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (x) {
                h(x);
              }
          }, "image/png") : S.toBlob(async (w) => {
            if (w)
              try {
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": w })
                ]), ct.success(a("toastSuccess.copySuccess"), {
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
      ct.error(c.message);
    }
  }, s = t ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: re(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => r(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(ai, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs($0, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ v.jsxs(xu, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ v.jsx(
            Yo,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ v.jsx(
            Yo,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ v.jsxs(Zo, { value: "crypto", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ga, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            ti,
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
        /* @__PURE__ */ v.jsxs(Zo, { value: "email", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ga, { address: o, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            ti,
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
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(rn, { onClick: l, children: "Share QR code" }) })
    ] }) })
  ] }) : null;
  if (typeof window < "u")
    return nr.createPortal(
      s,
      document.body
    );
}
const Y0 = ["totalAsset"], Z0 = 0.01, J0 = async (e) => {
  try {
    const n = (await Pe.get("/user-assets/total-assets", {
      params: { address: e }
    })).data.totalAssets;
    return {
      raw: n,
      formatted: Vd(n, 2),
      isZero: n === 0,
      isUSDZero: n < Z0
    };
  } catch (t) {
    throw rr(t);
  }
};
function ev(e) {
  const { address: t } = je.all();
  return Cr({
    queryKey: [...Y0, t],
    queryFn: () => J0(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30
    // cache for 30 minutes
  });
}
const tv = async () => {
  const { data: e } = await Pe.get("/user/info");
  return e;
}, nv = (e) => Cr({
  queryKey: ["userInfo"],
  queryFn: tv,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...e
});
function rv() {
  const { address: e } = je.all(), { data: t, refetch: n } = ev({
    enabled: !!e
  }), { data: r } = nv(), [a, o] = p.useState(""), [i, l] = p.useState(!1), [s, c] = p.useState(!1), [u, d] = p.useState(we.VAST), [f, g] = p.useState(Li.getData() ?? !0);
  p.useEffect(() => {
    y(u);
  }, []), p.useEffect(() => {
    r && o(r.avatar || je.getUserRandomAvatar(r.avatarIndex));
  }, [r]);
  const y = async (h) => {
    d(h);
  }, m = () => {
    g(!f), Li.setData(!f);
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: re(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ v.jsx(
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
        /* @__PURE__ */ v.jsxs("div", { className: re(
          "relative z-10",
          "tablet:flex tablet:justify-between tablet:gap-2",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("div", { className: re(
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
                  className: re(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ v.jsx("div", { className: re(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ v.jsx("div", { className: re(
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
          /* @__PURE__ */ v.jsxs("div", { className: re(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ v.jsxs("div", { className: re(
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
                Ga,
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
          B0,
          {
            open: i,
            setOpen: l,
            address: e,
            tokenType: u,
            onClose: () => l(!1)
          }
        ),
        /* @__PURE__ */ v.jsx(
          X0,
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
function av() {
  return /* @__PURE__ */ v.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ v.jsx(rv, {}),
    /* @__PURE__ */ v.jsx("div", { className: re(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ v.jsx(Zu, {}) })
  ] });
}
function ov() {
  const e = Ju();
  return console.error(e), /* @__PURE__ */ v.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ v.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ v.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ v.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ v.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
function cy({
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
      r((s) => ({
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
const iv = 30, sv = async () => {
  try {
    const e = await Pe.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: iv
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = rr(e);
    throw new Error(t.message);
  }
}, cv = ed([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-Df1ta_Xv.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ v.jsx(ov, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-B0H4r1jJ.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-TJM0s2tR.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-M4NGjyXP.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-D4NfPXL4.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-BA0fd3iQ.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-daily-withdrawal-limit",
            async lazy() {
              const { default: e } = await import("./page-BkK5VlY5.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ v.jsx(av, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-B_M_C8R7.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-Co8Neqvg.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-Fzc1XXFf.js");
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
                  const { default: e } = await import("./page-DbHm-HA4.js");
                  return { Component: e };
                },
                loader: sv
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-DZbwRVXi.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-EZYxknVl.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-DpiWpAc6.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-BrLgus9X.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-5oyAcjbe.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-udwKdzkN.js");
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
                          const { default: e } = await import("./page-DMvQT0y6.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-B7VzPOnA.js");
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
                  const { default: e } = await import("./page-BPotsGkF.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-CfTkBn4z.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "profile",
            async lazy() {
              const { default: e } = await import("./index-Bk8U5ciL.js");
              return { Component: e };
            }
          },
          {
            path: "multisender",
            async lazy() {
              const { default: e } = await import("./page-xeVKYXS4.js");
              return { Component: e };
            }
          },
          {
            path: "my-rewards",
            async lazy() {
              const { default: e } = await import("./page-BfcXJhZP.js");
              return { Component: e };
            }
          }
        ]
      }
    ]
  }
]);
function lv() {
  const [e, t] = p.useState(!1);
  return p.useEffect(() => {
    const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test((navigator == null ? void 0 : navigator.userAgent) || "");
    t(n);
  }, []), /* @__PURE__ */ v.jsx(
    md,
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
      transition: gd,
      icon: ({ type: n }) => {
        if (n === "error")
          return /* @__PURE__ */ v.jsx(fd, {});
        if (n === "success")
          return /* @__PURE__ */ v.jsx(za, {});
        if (n === "info")
          return /* @__PURE__ */ v.jsx(hd, {});
        if (n === "warning")
          return /* @__PURE__ */ v.jsx(mc, {});
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
var ki = "moonpay-react-sdk-embedded-frame", uv = ({
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
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: C,
    externalTransactionId: w,
    externalCustomerId: x,
    paymentMethod: E,
    redirectURL: T,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: L,
    unsupportedRegionRedirectUrl: I,
    skipUnsupportedRegionScreen: H,
    baseOrigin: $,
    // handlers
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: k,
    onTransactionCompleted: R,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: j,
    onCloseOverlay: _,
    onTransactionCreated: U,
    // auth
    auth: F,
    useWarnBeforeRefresh: K,
    // other
    overlayNode: Q
  } = e, ne = {
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
    quoteCurrencyAmount: A,
    lockAmount: S,
    email: C,
    externalTransactionId: w,
    externalCustomerId: x,
    paymentMethod: E,
    redirectURL: T,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: L,
    unsupportedRegionRedirectUrl: I,
    skipUnsupportedRegionScreen: H,
    baseOrigin: $
  }, ee = {
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: k,
    onTransactionCompleted: R,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: j,
    onCloseOverlay: _,
    onTransactionCreated: U
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: r,
    params: ne,
    debug: n,
    handlers: ee,
    auth: F,
    useWarnBeforeRefresh: K,
    containerNodeSelector: `#${ki}`,
    overlayNode: Q
  };
}, dv = ({
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
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: C,
    email: w,
    externalTransactionId: x,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: L,
    showWalletAddressForm: I,
    unsupportedRegionRedirectUrl: H,
    skipUnsupportedRegionScreen: $,
    mpWalletId: D,
    baseOrigin: W,
    // handlers
    onAuthToken: P,
    onInitiateDeposit: k,
    onKmsWalletsCreated: R,
    onLogin: O,
    onTransactionCompleted: j,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: U,
    onCloseOverlay: F,
    onTransactionCreated: K,
    // auth
    auth: Q,
    useWarnBeforeRefresh: ne
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
    baseCurrencyAmount: A,
    quoteCurrencyAmount: S,
    lockAmount: C,
    email: w,
    externalTransactionId: x,
    externalCustomerId: E,
    paymentMethod: T,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: L,
    showWalletAddressForm: I,
    unsupportedRegionRedirectUrl: H,
    skipUnsupportedRegionScreen: $,
    mpWalletId: D,
    baseOrigin: W
  }, Me = {
    onAuthToken: P,
    onInitiateDeposit: k,
    onKmsWalletsCreated: R,
    onLogin: O,
    onTransactionCompleted: j,
    onUnsupportedRegion: _,
    onSwapsCustomerSetupComplete: U,
    onCloseOverlay: F,
    onTransactionCreated: K
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: r,
    params: ee,
    debug: n,
    handlers: Me,
    auth: Q,
    useWarnBeforeRefresh: ne,
    containerNodeSelector: `#${ki}`
  };
};
async function fv(e = "v1") {
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
function hv(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var Ua = () => {
}, pv = {
  info: Ua,
  warn: Ua,
  error: Ua
}, mv = class Ou {
  constructor({
    logger: t,
    prefix: n
  }) {
    pe(this, "prefix");
    pe(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new Ou({ logger: pv });
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
}, xa = p.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), gv = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const r = hv(t), [a, o] = p.useState({
    apiKey: t,
    environment: r,
    debug: n
  }), i = p.useCallback(async () => {
    const l = await fv();
    o((s) => ({ ...s, init: l }));
  }, []);
  return p.useEffect(() => {
    a.init || i();
  }, [i, a.init]), /* @__PURE__ */ v.jsx(xa.Provider, { value: a, children: e });
}, vv = class extends mv {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, yv = (e, t, n) => {
  const r = p.useRef(null), { init: a, debug: o } = p.useContext(xa), i = p.useRef(new vv().if(o || !1)), l = p.useCallback(async () => {
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
}, bv = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Iu({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: r,
  style: a
}) {
  return yv(e, n, t), n ? /* @__PURE__ */ v.jsx(
    "div",
    {
      id: ki,
      className: r,
      style: e.variant === "embedded" ? {
        ...bv,
        ...a
      } : void 0
    }
  ) : null;
}
function ly(e) {
  const { apiKey: t, environment: n } = p.useContext(xa), r = p.useMemo(
    () => uv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Iu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function uy(e) {
  const { apiKey: t, environment: n } = p.useContext(xa), r = p.useMemo(
    () => dv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Iu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const xv = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function Cv({ children: e }) {
  return /* @__PURE__ */ v.jsx(
    gv,
    {
      apiKey: xv,
      debug: !0,
      children: e
    }
  );
}
const Sv = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, Ev = {
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
}, wv = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, Tv = {
  authenticationError: "Authentication Error. Please sign in again."
}, Av = {
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
  header: Sv,
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
  vastWalletConnect: Ev,
  toastSuccess: wv,
  toastError: Tv
}, kv = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Nv = {
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
}, Pv = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, Rv = {
  authenticationError: "认证错误，请重新登录。"
}, Mv = {
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
  header: kv,
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
  vastWalletConnect: Nv,
  toastSuccess: Pv,
  toastError: Rv
}, Ov = {
  en: {
    translation: Av
  },
  zh: {
    translation: Mv
  }
};
rt("savedLng", vc);
const Iv = vc.getData();
gc.use(vd).init({
  resources: Ov,
  lng: Iv || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function jv() {
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
const _v = new u0({
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
function Lv() {
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ v.jsx(p.Suspense, { children: /* @__PURE__ */ v.jsx(m0, { client: _v, children: /* @__PURE__ */ v.jsxs(yd, { i18n: gc, children: [
      /* @__PURE__ */ v.jsx(Cv, { children: /* @__PURE__ */ v.jsx(td, { router: cv }) }),
      /* @__PURE__ */ v.jsx(lv, {})
    ] }) }) }) }),
    /* @__PURE__ */ v.jsx(jv, {})
  ] });
}
const Dv = "theme_light", Fv = "0.0.0", Bv = "module", $v = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, Hv = {
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
}, Uv = {
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
}, zv = {
  name: Dv,
  private: !0,
  version: Fv,
  type: Bv,
  scripts: $v,
  dependencies: Hv,
  devDependencies: Uv
};
rt("isDev", bc);
function Ks(e) {
  const t = Va(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ v.jsx(Lv, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
bc ? Ks("root") : typeof window < "u" && (window[`mount_${zv.name}`] = Ks);
export {
  Vd as $,
  Wt as A,
  rn as B,
  dn as C,
  ef as D,
  Jv as E,
  Jm as F,
  Fn as G,
  Ct as H,
  Zr as I,
  xt as J,
  Yn as K,
  xc as L,
  xi as M,
  zp as N,
  Dp as O,
  ny as P,
  ty as Q,
  Vl as R,
  B0 as S,
  Be as T,
  Ql as U,
  ey as V,
  wo as W,
  ay as X,
  os as Y,
  $r as Z,
  Y as _,
  je as a,
  Nc as a$,
  Cr as a0,
  $0 as a1,
  xu as a2,
  Yo as a3,
  we as a4,
  Ga as a5,
  ev as a6,
  X0 as a7,
  cy as a8,
  iv as a9,
  lr as aA,
  sp as aB,
  Up as aC,
  Vp as aD,
  Nt as aE,
  La as aF,
  zl as aG,
  Cc as aH,
  Ud as aI,
  zd as aJ,
  I0 as aK,
  $i as aL,
  Xv as aM,
  Yv as aN,
  Zv as aO,
  gf as aP,
  li as aQ,
  Ao as aR,
  on as aS,
  Bc as aT,
  Pc as aU,
  qa as aV,
  Jr as aW,
  jh as aX,
  oo as aY,
  Oa as aZ,
  kf as a_,
  Qg as aa,
  ly as ab,
  uy as ac,
  Sc as ad,
  p0 as ae,
  Fi as af,
  R0 as ag,
  nu as ah,
  ur as ai,
  ua as aj,
  da as ak,
  an as al,
  na as am,
  um as an,
  vm as ao,
  ya as ap,
  D0 as aq,
  j0 as ar,
  cl as as,
  ry as at,
  Eo as au,
  vg as av,
  oy as aw,
  vf as ax,
  Hn as ay,
  yf as az,
  tf as b,
  zi as b0,
  Pm as b1,
  Jl as b2,
  Zo as b3,
  Ks as b4,
  re as c,
  Ec as d,
  wc as e,
  Pe as f,
  rt as g,
  rr as h,
  Jn as i,
  Bi as j,
  Jd as k,
  vc as l,
  Ut as m,
  Ge as n,
  To as o,
  Uc as p,
  Ht as q,
  Fp as r,
  Gt as s,
  ve as t,
  nv as u,
  $n as v,
  ea as w,
  Wl as x,
  pf as y,
  He as z
};
