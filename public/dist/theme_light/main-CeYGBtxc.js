var zu = Object.defineProperty;
var Pi = (e) => {
  throw TypeError(e);
};
var Vu = (e, t, n) => t in e ? zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => Vu(e, typeof t != "symbol" ? t + "" : t, n), Sa = (e, t, n) => t.has(e) || Pi("Cannot " + n);
var x = (e, t, n) => (Sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? Pi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), U = (e, t, n, r) => (Sa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ae = (e, t, n) => (Sa(e, t, "access private method"), n);
var Sr = (e, t, n, r) => ({
  set _(a) {
    U(e, t, a, n);
  },
  get _() {
    return x(e, t, r);
  }
});
import { j as v, S as Wu, d as Js, g as ec, P as Gu, C as tc, I as nc, i as rc, k as ac, l as oc, L as ic, m as sc, n as Ku, T as Qu, o as cc, p as lc, q as uc, r as qu } from "./vendor-radix-AvjOLIap.js";
import { p as K, b as Zo, a as p, g as Xu, R as q, c as Jn, $ as Jo, f as Yu, O as Zu, u as Ju, h as ed, i as td } from "./vendor-react-DSEtE0wE.js";
import { t as nd, c as rd, C as ad, a as od, b as id, d as sd, e as cd, _ as et, X as ei, L as ld, f as Ba, g as dc, h as ud, i as dd, j as fd, I as hd } from "./vendor-ui-utils-CGOon9_P.js";
import { a as zt, u as ti, C as pd, B as ct, Q as md, X as gd, i as fc, b as vd, I as yd } from "./vendor-utils-BPVAmMsZ.js";
import { d as bd, f as xd, h as Gn, a as Cd, b as Sd, s as Ed, t as Ea, c as wd, e as Td, i as Wr, I as Ri, g as ni, j as Dn, k as dn, l as Fn, m as Ad, n as kd, _ as ue, o as Nd, p as F, q as Z, r as cn, u as _r } from "./vendor-web3-CQEmmIwE.js";
var $a, Er = Zo;
if (K.env.NODE_ENV === "production")
  $a = Er.createRoot, Er.hydrateRoot;
else {
  var Mi = Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  $a = function(e, t) {
    Mi.usingClientEntryPoint = !0;
    try {
      return Er.createRoot(e, t);
    } finally {
      Mi.usingClientEntryPoint = !1;
    }
  };
}
const rt = console.log.bind(console, "🚀");
function ee(...e) {
  return nd(rd(e));
}
class At {
  constructor(t) {
    he(this, "isClient");
    he(this, "key");
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
const hc = new At("language"), Oi = new At("hideTotalAsset");
class Pd {
  constructor() {
    he(this, "storages");
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
const Oe = new Pd(), pc = [
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
var Ce = /* @__PURE__ */ ((e) => (e.ETH = "ETH", e.BASE_ETH = "BASE_ETH", e.MATIC = "MATIC", e.TVWT = "TVWT", e.VAST = "VAST", e))(Ce || {}), Bn = /* @__PURE__ */ ((e) => (e.POL = "POL", e.SepoliaETH = "SepoliaETH", e.BaseSepoliaETH = "BaseSepoliaETH", e))(Bn || {});
class mr {
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
    he(this, "tokenType");
    he(this, "name");
    he(this, "symbol");
    he(this, "decimals");
    he(this, "gasSymbol");
    he(this, "logo");
    he(this, "color");
    he(this, "viemChain");
    he(this, "publicClient");
    he(this, "scanTransactionUrl");
    he(this, "contractAddress");
    he(this, "contractAbi");
    he(this, "gasless");
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
          return a.typeHex === "0x7e" && (a.isSystemTx = r.isSystemTx, a.mint = r.mint ? Gn(r.mint) : void 0, a.sourceHash = r.sourceHash, a.type = "deposit"), a;
        }),
        stateRoot: e.stateRoot
      };
    }
  }),
  transaction: /* @__PURE__ */ Cd({
    format(e) {
      const t = {};
      return e.type === "0x7e" && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? Gn(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t;
    }
  }),
  transactionReceipt: /* @__PURE__ */ Sd({
    format(e) {
      return {
        l1GasPrice: e.l1GasPrice ? Gn(e.l1GasPrice) : null,
        l1GasUsed: e.l1GasUsed ? Gn(e.l1GasUsed) : null,
        l1Fee: e.l1Fee ? Gn(e.l1Fee) : null,
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
    i ? Ea(i) : "0x",
    s ? Ea(s) : "0x",
    a ? Ea(a) : "0x",
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
  if (t && !Wr(t))
    throw new Ri({ address: t });
  if (n && !Wr(n))
    throw new Ri({ address: n });
}
const Ii = {
  contracts: Rd,
  formatters: Md,
  serializers: Id
}, Kn = 11155111, Gr = /* @__PURE__ */ ni({
  ...Ii,
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
    ...Ii.contracts,
    disputeGameFactory: {
      [Kn]: {
        address: "0xd6E6dBf4F7EA0ac412fD8b65ED297e64BB7a06E1"
      }
    },
    l2OutputOracle: {
      [Kn]: {
        address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254"
      }
    },
    portal: {
      [Kn]: {
        address: "0x49f53e41452c74589e85ca1677426ba426459e85",
        blockCreated: 4446677
      }
    },
    l1StandardBridge: {
      [Kn]: {
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
  sourceId: Kn
}), Kr = /* @__PURE__ */ ni({
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
}), ji = /* @__PURE__ */ ni({
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
class Dd extends mr {
  constructor() {
    super({
      tokenType: Ce.ETH,
      name: "Ethereum Sepolia",
      symbol: "SepoliaETH",
      decimals: 18,
      gasSymbol: Bn.SepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: ji,
      publicClient: Dn({
        chain: ji,
        transport: Fn("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.etherscan.io/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return dn(n);
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
class Fd extends mr {
  constructor() {
    super({
      tokenType: Ce.MATIC,
      name: "Polygon Amoy",
      symbol: "POL",
      decimals: 18,
      gasSymbol: Bn.POL,
      logo: "/imgs/logos/matic.png",
      color: "#c08fec",
      viemChain: Kr,
      publicClient: Dn({
        chain: Kr,
        transport: Fn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return dn(n);
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
class Bd extends mr {
  constructor() {
    super({
      tokenType: Ce.TVWT,
      name: "TheVastlinkToken",
      symbol: "TVWT",
      decimals: 18,
      gasSymbol: Bn.POL,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Kr,
      publicClient: Dn({
        chain: Kr,
        transport: Fn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/",
      contractAddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
      contractAbi: pc
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return dn(n);
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
class $d extends mr {
  constructor() {
    super({
      tokenType: Ce.VAST,
      name: "TheVastlinkToken",
      symbol: "VAST",
      decimals: 18,
      gasSymbol: Bn.BaseSepoliaETH,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Gr,
      publicClient: Dn({
        chain: Gr,
        transport: Fn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
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
    return dn(n);
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
class Hd extends mr {
  constructor() {
    super({
      tokenType: Ce.BASE_ETH,
      name: "Base Sepolia",
      symbol: "BaseSepoliaETH",
      decimals: 18,
      gasSymbol: Bn.BaseSepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: Gr,
      publicClient: Dn({
        chain: Gr,
        transport: Fn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return dn(n);
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
    he(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      [Ce.ETH, new Dd()],
      [Ce.BASE_ETH, new Hd()],
      [Ce.MATIC, new Fd()],
      [Ce.TVWT, new Bd()],
      [Ce.VAST, new $d()]
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
    return t === Ce.ETH || t === Ce.BASE_ETH || t === Ce.MATIC;
  }
  isERC20Token(t) {
    return t === Ce.TVWT || t === Ce.VAST;
  }
  createTokenMap(t) {
    return Array.from(this.tokenMap.entries()).reduce((n, [r, a]) => (n[r] = t(a), n), {});
  }
  getNativeTokenTypeByGasSymbol(t) {
    var r;
    return ((r = Array.from(this.tokenMap.values()).find((a) => a.gasSymbol === t && this.isNativeToken(a.tokenType))) == null ? void 0 : r.tokenType) || null;
  }
};
he(Qt, "instance");
let Ha = Qt;
const be = Ha.getInstance();
Object.freeze(be);
const Ud = pc, Qv = (e) => e.replace(/\.?0+$/, ""), Qr = (e, t = 6) => parseFloat(e).toFixed(t), zd = (e, t = 2) => {
  const r = (typeof e == "string" ? parseFloat(e) : e).toFixed(t), [a, o] = r.split("."), i = a.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return o ? `${i}.${o}` : i;
};
async function Vd({
  tokenType: e,
  transferParams: t,
  fromAddress: n,
  defaultGasPrice: r,
  defaultBlock: a
}) {
  try {
    const o = be.getToken(e).viemChain;
    if (!o) return null;
    if (be.getToken(e).gasless)
      return {
        estimatedGas: BigInt(0),
        maxFeePerGas: BigInt(0),
        maxPriorityFeePerGas: BigInt(0),
        estimatedTotalFee: BigInt(0),
        baseFee: BigInt(0),
        gasPrice: BigInt(0),
        feeInTokens: "0"
      };
    const i = Dn({
      chain: o,
      transport: Fn()
    });
    let l;
    if (be.isERC20Token(e) && (l = be.getToken(e).contractAddress, !l))
      throw new Error("Invalid token contract address");
    let s;
    if (be.isERC20Token(e)) {
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
      }), u = r || await i.getGasPrice(), f = (a || await i.getBlock()).baseFeePerGas || BigInt(0), g = u > f ? u - f : BigInt(1e9), y = f + g * BigInt(2), m = c * y, h = Qr(
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
const _i = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, mc = K.env.NODE_ENV === "development", qv = (e, t) => {
  const n = document.createElement("a");
  n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
};
function er(e) {
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
function Ua({
  iconSize: e = 20,
  address: t,
  className: n = "",
  iconClassName: r = "",
  ...a
}) {
  const { t: o } = ti();
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
const Wd = od(
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
        className: ee(Wd({ variant: t, size: n, className: e })),
        ref: o,
        ...a
      }
    );
  }
);
rn.displayName = "Button";
const qr = p.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ v.jsx(
    "input",
    {
      type: t,
      className: ee(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-foreground focus-visible:border-1 placeholder:text-gray-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
qr.displayName = "Input";
function Gd() {
  const [e, t] = p.useState("/imgs/logos/logo.svg");
  return {
    logoPath: e
  };
}
function Kd({
  size: e = 32,
  className: t = ""
}) {
  const [n, r] = p.useState("");
  return p.useEffect(() => {
    const {
      username: a
    } = Oe.all();
    if (a) {
      const o = a.length > 0 ? a[0] : "";
      r(o);
    }
  }, []), /* @__PURE__ */ v.jsx(
    "div",
    {
      className: ee(
        "bg-primary text-primary-foreground rounded-full flex items-center justify-center",
        `w-[${e}px] h-[${e}px]`,
        t
      ),
      children: /* @__PURE__ */ v.jsx("div", { className: ee(
        // 'flex items-center justify-center',
      ), children: n })
    }
  );
}
function gc({
  size: e = 32,
  className: t,
  type: n = "spin",
  fullscreen: r = !1
}) {
  Gd();
  const [a, o] = p.useState(!1);
  p.useEffect(() => (o(!0), () => o(!1)), []);
  const s = n === "breathe" ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ v.jsx(Kd, { className: ee(
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
  ] }) : /* @__PURE__ */ v.jsx("div", { className: ee(
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
  return r && a ? Zo.createPortal(
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: s }),
    document.body
  ) : s;
}
const vc = p.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
    "textarea",
    {
      className: ee(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
vc.displayName = "Textarea";
var yc = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(yc || {}), ia = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(ia || {});
class ri {
  constructor(t) {
    he(this, "config");
    if (this.constructor === ri)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
zt.defaults.withCredentials = !0;
const $e = zt.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
$e.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const r = e.response.data.message || "Authentication error";
      console.log(`${r}, redirecting to login...`), Oe.clearAllAuthData(), typeof window < "u" && (ct.error(r), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
class Qd extends ri {
  constructor() {
    super({
      serviceType: ia.WEB3AUTH_WITH_MPC
    });
    he(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: n
  }) {
    const { data: r } = await $e.post("/keymanagement/signup", {
      username: n
    }), { address: a, displayName: o } = r;
    Oe.saveAuthDataByKey("address", a), Oe.saveAuthDataByKey("username", n), o ? Oe.saveAuthDataByKey("displayName", o) : Oe.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: n }) {
    const { data: r } = await $e.post("/keymanagement/signin", {
      username: n
    }), { address: a, displayName: o } = r;
    Oe.saveAuthDataByKey("address", a), Oe.saveAuthDataByKey("username", n), o ? Oe.saveAuthDataByKey("displayName", o) : Oe.removeAuthDataByKey("displayName");
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
    } } = await $e.post("/transaction/sign", {
      from: Oe.all().address,
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
    } } = await $e.post("/transaction/verify-to-sign", {
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
    return await be.getToken(r).publicClient.waitForTransactionReceipt({
      hash: n
    });
  }
  async test() {
    await $e.post("/keymanagement/test-mpc");
  }
}
class qd {
  static getService(t) {
    switch (t) {
      case ia.WEB3AUTH_WITH_MPC:
        return new Qd();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const Xd = ia.WEB3AUTH_WITH_MPC, Yd = qd.getService(Xd), Zd = Ku, Jd = Qu, ef = p.forwardRef(({ className: e, inset: t, children: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  Js,
  {
    ref: a,
    className: ee(
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
ef.displayName = Js.displayName;
const tf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ec,
  {
    ref: n,
    className: ee(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
tf.displayName = ec.displayName;
const bc = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(Gu, { children: /* @__PURE__ */ v.jsx(
  tc,
  {
    ref: r,
    sideOffset: t,
    className: ee(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
bc.displayName = tc.displayName;
const xc = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  nc,
  {
    ref: r,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
xc.displayName = nc.displayName;
const nf = p.forwardRef(({ className: e, children: t, checked: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  rc,
  {
    ref: a,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(ac, { children: /* @__PURE__ */ v.jsx(sd, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
nf.displayName = rc.displayName;
const rf = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  oc,
  {
    ref: r,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(ac, { children: /* @__PURE__ */ v.jsx(cd, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
rf.displayName = oc.displayName;
const af = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  ic,
  {
    ref: r,
    className: ee(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
af.displayName = ic.displayName;
const of = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  sc,
  {
    ref: n,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
of.displayName = sc.displayName;
function Li(e, t) {
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
var Cc = { exports: {} };
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
})(Cc);
var sf = Cc.exports;
const Qe = /* @__PURE__ */ Xu(sf);
var za = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function cf() {
  if (Di) return se;
  Di = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
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
                  return T;
              }
          }
        case t:
          return T;
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
var ce = {}, Fi;
function lf() {
  return Fi || (Fi = 1, K.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, h = !1, T = !1, S = !1, C;
    C = Symbol.for("react.module.reference");
    function w(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === n || V === a || S || V === r || V === c || V === u || T || V === g || y || m || h || typeof V == "object" && V !== null && (V.$$typeof === f || V.$$typeof === d || V.$$typeof === o || V.$$typeof === i || V.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === C || V.getModuleId !== void 0));
    }
    function b(V) {
      if (typeof V == "object" && V !== null) {
        var _e = V.$$typeof;
        switch (_e) {
          case e:
            var ve = V.type;
            switch (ve) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return ve;
              default:
                var Ve = ve && ve.$$typeof;
                switch (Ve) {
                  case l:
                  case i:
                  case s:
                  case f:
                  case d:
                  case o:
                    return Ve;
                  default:
                    return _e;
                }
            }
          case t:
            return _e;
        }
      }
    }
    var E = i, k = o, N = e, M = s, j = n, _ = f, z = d, $ = t, D = a, W = r, P = c, A = u, R = !1, I = !1;
    function L(V) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(V) {
      return I || (I = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(V) {
      return b(V) === i;
    }
    function G(V) {
      return b(V) === o;
    }
    function Q(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function B(V) {
      return b(V) === s;
    }
    function te(V) {
      return b(V) === n;
    }
    function ie(V) {
      return b(V) === f;
    }
    function Ee(V) {
      return b(V) === d;
    }
    function we(V) {
      return b(V) === t;
    }
    function Se(V) {
      return b(V) === a;
    }
    function Ie(V) {
      return b(V) === r;
    }
    function Te(V) {
      return b(V) === c;
    }
    function je(V) {
      return b(V) === u;
    }
    ce.ContextConsumer = E, ce.ContextProvider = k, ce.Element = N, ce.ForwardRef = M, ce.Fragment = j, ce.Lazy = _, ce.Memo = z, ce.Portal = $, ce.Profiler = D, ce.StrictMode = W, ce.Suspense = P, ce.SuspenseList = A, ce.isAsyncMode = L, ce.isConcurrentMode = O, ce.isContextConsumer = H, ce.isContextProvider = G, ce.isElement = Q, ce.isForwardRef = B, ce.isFragment = te, ce.isLazy = ie, ce.isMemo = Ee, ce.isPortal = we, ce.isProfiler = Se, ce.isStrictMode = Ie, ce.isSuspense = Te, ce.isSuspenseList = je, ce.isValidElementType = w, ce.typeOf = b;
  }()), ce;
}
K.env.NODE_ENV === "production" ? za.exports = cf() : za.exports = lf();
var Lr = za.exports, Va = {}, ai = [], uf = function(t) {
  ai.push(t);
};
function oi(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ai.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function df(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ai.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Sc() {
  Va = {};
}
function Ec(e, t, n) {
  !t && !Va[n] && (e(!1, n), Va[n] = !0);
}
function Vt(e, t) {
  Ec(oi, e, t);
}
function ff(e, t) {
  Ec(df, e, t);
}
Vt.preMessage = uf;
Vt.resetWarned = Sc;
Vt.noteOnce = ff;
function Bi(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function hf(e) {
  return e && ue(e) === "object" && Bi(e.nativeElement) ? e.nativeElement : Bi(e) ? e : null;
}
function pf(e) {
  var t = hf(e);
  if (t)
    return t;
  if (e instanceof q.Component) {
    var n;
    return (n = Jn.findDOMNode) === null || n === void 0 ? void 0 : n.call(Jn, e);
  }
  return null;
}
function ii(e, t, n) {
  var r = p.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var wc = function(t, n) {
  typeof t == "function" ? t(n) : ue(t) === "object" && t && "current" in t && (t.current = n);
}, mf = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      wc(i, o);
    });
  };
}, Xv = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return ii(function() {
    return mf.apply(void 0, n);
  }, n, function(a, o) {
    return a.length !== o.length || a.every(function(i, l) {
      return i !== o[l];
    });
  });
}, gf = function(t) {
  var n, r, a = Lr.isMemo(t) ? t.type.type : t.type;
  return !(typeof a == "function" && !((n = a.prototype) !== null && n !== void 0 && n.render) && a.$$typeof !== Lr.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Lr.ForwardRef);
};
function $i(e) {
  return /* @__PURE__ */ p.isValidElement(e) && !Lr.isFragment(e);
}
Number(p.version.split(".")[0]) >= 19;
function xt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nd(r.key), r);
  }
}
function Ct(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wa(e, t) {
  return Wa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Wa(e, t);
}
function sa(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Wa(e, t);
}
function Xr(e) {
  return Xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Xr(e);
}
function Tc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tc = function() {
    return !!e;
  })();
}
function an(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vf(e, t) {
  if (t && (ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return an(e);
}
function ca(e) {
  var t = Tc();
  return function() {
    var n, r = Xr(e);
    if (t) {
      var a = Xr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return vf(this, n);
  };
}
function Ga(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yf(e) {
  if (Array.isArray(e)) return Ga(e);
}
function Ac(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function si(e, t) {
  if (e) {
    if (typeof e == "string") return Ga(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ga(e, t) : void 0;
  }
}
function bf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ze(e) {
  return yf(e) || Ac(e) || si(e) || bf();
}
var kc = function(t) {
  return +setTimeout(t, 16);
}, Nc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (kc = function(t) {
  return window.requestAnimationFrame(t);
}, Nc = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ui = 0, la = /* @__PURE__ */ new Map();
function Pc(e) {
  la.delete(e);
}
var Yr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ui += 1;
  var r = Ui;
  function a(o) {
    if (o === 0)
      Pc(r), t();
    else {
      var i = kc(function() {
        a(o - 1);
      });
      la.set(r, i);
    }
  }
  return a(n), r;
};
Yr.cancel = function(e) {
  var t = la.get(e);
  return Pc(e), Nc(t);
};
K.env.NODE_ENV !== "production" && (Yr.ids = function() {
  return la;
});
function Rc(e) {
  if (Array.isArray(e)) return e;
}
function xf(e, t) {
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
function Mc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Rc(e) || xf(e, t) || si(e, t) || Mc();
}
function tr(e) {
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
function Cf(e, t) {
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
var zi = "data-rc-order", Vi = "data-rc-priority", Sf = "rc-util-key", Ka = /* @__PURE__ */ new Map();
function Oc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Sf;
}
function ua(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Ef(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ci(e) {
  return Array.from((Ka.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ic(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Nt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Ef(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(zi, i), l && o && s.setAttribute(Vi, "".concat(o)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var c = ua(t), u = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || ci(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(zi)))
          return !1;
        var g = Number(f.getAttribute(Vi) || 0);
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
function jc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ua(t);
  return (t.styles || ci(n)).find(function(r) {
    return r.getAttribute(Oc(t)) === e;
  });
}
function _c(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = jc(e, t);
  if (n) {
    var r = ua(t);
    r.removeChild(n);
  }
}
function wf(e, t) {
  var n = Ka.get(e);
  if (!n || !Cf(document, n)) {
    var r = Ic("", t), a = r.parentNode;
    Ka.set(e, a), e.removeChild(r);
  }
}
function on(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ua(n), a = ci(r), o = F(F({}, n), {}, {
    styles: a
  });
  wf(r, o);
  var i = jc(t, o);
  if (i) {
    var l, s;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = o.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Ic(e, o);
  return u.setAttribute(Oc(o), t), u;
}
function Tf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function a(o, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(o);
    if (Vt(!s, "Warning: There may be circular references"), s)
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
var Af = "%";
function Qa(e) {
  return e.join(Af);
}
var kf = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "instanceId", void 0), Z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ct(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Qa(n));
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
      return this.opUpdate(Qa(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), jn = "data-token-hash", lt = "data-css-hash", Nf = "data-cache-path", Ft = "__cssinjs_instance__";
function Pf() {
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
  return new kf(e);
}
var da = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Pf(),
  defaultCache: !0
});
function Rf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var li = /* @__PURE__ */ function() {
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
          return !Rf(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
Z(li, "MAX_CACHE_SIZE", 20);
Z(li, "MAX_CACHE_OFFSET", 5);
var Wi = 0, Lc = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "derivatives", void 0), Z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Wi, t.length === 0 && oi(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Wi += 1;
  }
  return Ct(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), wa = new li();
function qa(e) {
  var t = Array.isArray(e) ? e : [e];
  return wa.has(t) || wa.set(t, new Lc(t)), wa.get(t);
}
var Mf = /* @__PURE__ */ new WeakMap(), Ta = {};
function Of(e, t) {
  for (var n = Mf, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(Ta) || n.set(Ta, e()), n.get(Ta);
}
var Gi = /* @__PURE__ */ new WeakMap();
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Gi.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof Lc ? n += a.id : a && ue(a) === "object" ? n += Yn(a, t) : n += a;
  }), t && (n = tr(n)), Gi.set(e, n)), n;
}
function Ki(e, t) {
  return tr("".concat(t, "_").concat(Yn(e, !0)));
}
var Xa = Nt();
function Ht(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Zr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = F(F({}, r), {}, Z(Z({}, jn, t), lt, n)), i = Object.keys(o).map(function(l) {
    var s = o[l];
    return s ? "".concat(l, '="').concat(s, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Dr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, If = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var o = Y(a, 2), i = o[0], l = o[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, Dc = function(t, n, r) {
  var a = {}, o = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = Y(i, 2), u = c[0], d = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[u])
      o[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (s = r.ignore) !== null && s !== void 0 && s[u])) {
      var f, g = Dr(u, r == null ? void 0 : r.prefix);
      a[g] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(g, ")");
    }
  }), [o, If(a, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, Qi = K.env.NODE_ENV !== "test" && Nt() ? p.useLayoutEffect : p.useEffect, Fc = function(t, n) {
  var r = p.useRef(!0);
  Qi(function() {
    return t(r.current);
  }, n), Qi(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Yv = function(t, n) {
  Fc(function(r) {
    if (!r)
      return t();
  }, n);
}, jf = F({}, Jo), qi = jf.useInsertionEffect, _f = function(t, n, r) {
  p.useMemo(t, r), Fc(function() {
    return n(!0);
  }, r);
}, Lf = qi ? function(e, t, n) {
  return qi(function() {
    return e(), t();
  }, n);
} : _f, Df = F({}, Jo), Ff = Df.useInsertionEffect, Bf = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      K.env.NODE_ENV !== "production" && oi(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, $f = function() {
  return function(t) {
    t();
  };
}, Hf = typeof Ff < "u" ? Bf : $f;
function Uf() {
  return !1;
}
var Ya = !1;
function zf() {
  return Ya;
}
const Vf = K.env.NODE_ENV === "production" ? Uf : zf;
if (K.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Aa = window;
  if (typeof Aa.webpackHotUpdate == "function") {
    var Wf = Aa.webpackHotUpdate;
    Aa.webpackHotUpdate = function() {
      return Ya = !0, setTimeout(function() {
        Ya = !1;
      }, 0), Wf.apply(void 0, arguments);
    };
  }
}
function ui(e, t, n, r, a) {
  var o = p.useContext(da), i = o.cache, l = [e].concat(ze(t)), s = Qa(l), c = Hf([s]), u = Vf(), d = function(m) {
    i.opUpdate(s, function(h) {
      var T = h || [void 0, void 0], S = Y(T, 2), C = S[0], w = C === void 0 ? 0 : C, b = S[1], E = b;
      K.env.NODE_ENV !== "production" && b && u && (r == null || r(E, u), E = null);
      var k = E || n(), N = [w, k];
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
  K.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(s));
  var g = f[1];
  return Lf(function() {
    a == null || a(g);
  }, function(y) {
    return d(function(m) {
      var h = Y(m, 2), T = h[0], S = h[1];
      return y && T === 0 && (a == null || a(g)), [T + 1, S];
    }), function() {
      i.opUpdate(s, function(m) {
        var h = m || [], T = Y(h, 2), S = T[0], C = S === void 0 ? 0 : S, w = T[1], b = C - 1;
        return b === 0 ? (c(function() {
          (y || !i.opGet(s)) && (r == null || r(w, !1));
        }), null) : [C - 1, w];
      });
    };
  }, [s]), g;
}
var Gf = {}, Kf = K.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Kt = /* @__PURE__ */ new Map();
function Qf(e) {
  Kt.set(e, (Kt.get(e) || 0) + 1);
}
function qf(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(jn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Ft] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var Xf = 0;
function Yf(e, t) {
  Kt.set(e, (Kt.get(e) || 0) - 1);
  var n = Array.from(Kt.keys()), r = n.filter(function(a) {
    var o = Kt.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > Xf && r.forEach(function(a) {
    qf(a, t), Kt.delete(a);
  });
}
var Zf = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = F(F({}, o), n);
  return a && (i = a(i)), i;
}, Bc = "token";
function Jf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = p.useContext(da), a = r.cache.instanceId, o = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Gf : s, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, g = Of(function() {
    return Object.assign.apply(Object, [{}].concat(ze(t)));
  }, t), y = Yn(g), m = Yn(c), h = f ? Yn(f) : "", T = ui(Bc, [l, e.id, y, m, h], function() {
    var S, C = d ? d(g, c, e) : Zf(g, c, e, u), w = F({}, C), b = "";
    if (f) {
      var E = Dc(C, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), k = Y(E, 2);
      C = k[0], b = k[1];
    }
    var N = Ki(C, l);
    C._tokenKey = N, w._tokenKey = Ki(w, l);
    var M = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : N;
    C._themeKey = M, Qf(M);
    var j = "".concat(Kf, "-").concat(tr(N));
    return C._hashId = j, [C, j, w, b, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    Yf(S[0]._themeKey, a);
  }, function(S) {
    var C = Y(S, 4), w = C[0], b = C[3];
    if (f && b) {
      var E = on(b, tr("css-variables-".concat(w._themeKey)), {
        mark: lt,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      E[Ft] = a, E.setAttribute(jn, w._themeKey);
    }
  });
  return T;
}
var eh = function(t, n, r) {
  var a = Y(t, 5), o = a[2], i = a[3], l = a[4], s = r || {}, c = s.plain;
  if (!i)
    return null;
  var u = o._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, g = Zr(i, l, u, f, c);
  return [d, u, g];
}, th = {
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
}, $c = "comm", Hc = "rule", Uc = "decl", nh = "@import", rh = "@keyframes", ah = "@layer", zc = Math.abs, di = String.fromCharCode;
function Vc(e) {
  return e.trim();
}
function Fr(e, t, n) {
  return e.replace(t, n);
}
function oh(e, t, n) {
  return e.indexOf(t, n);
}
function nr(e, t) {
  return e.charCodeAt(t) | 0;
}
function _n(e, t, n) {
  return e.slice(t, n);
}
function mt(e) {
  return e.length;
}
function ih(e) {
  return e.length;
}
function wr(e, t) {
  return t.push(e), e;
}
var fa = 1, Ln = 1, Wc = 0, tt = 0, xe = 0, $n = "";
function fi(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: fa, column: Ln, length: i, return: "", siblings: l };
}
function sh() {
  return xe;
}
function ch() {
  return xe = tt > 0 ? nr($n, --tt) : 0, Ln--, xe === 10 && (Ln = 1, fa--), xe;
}
function ut() {
  return xe = tt < Wc ? nr($n, tt++) : 0, Ln++, xe === 10 && (Ln = 1, fa++), xe;
}
function Bt() {
  return nr($n, tt);
}
function Br() {
  return tt;
}
function ha(e, t) {
  return _n($n, e, t);
}
function rr(e) {
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
function lh(e) {
  return fa = Ln = 1, Wc = mt($n = e), tt = 0, [];
}
function uh(e) {
  return $n = "", e;
}
function ka(e) {
  return Vc(ha(tt - 1, Za(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dh(e) {
  for (; (xe = Bt()) && xe < 33; )
    ut();
  return rr(e) > 2 || rr(xe) > 3 ? "" : " ";
}
function fh(e, t) {
  for (; --t && ut() && !(xe < 48 || xe > 102 || xe > 57 && xe < 65 || xe > 70 && xe < 97); )
    ;
  return ha(e, Br() + (t < 6 && Bt() == 32 && ut() == 32));
}
function Za(e) {
  for (; ut(); )
    switch (xe) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Za(xe);
        break;
      case 40:
        e === 41 && Za(e);
        break;
      case 92:
        ut();
        break;
    }
  return tt;
}
function hh(e, t) {
  for (; ut() && e + xe !== 57; )
    if (e + xe === 84 && Bt() === 47)
      break;
  return "/*" + ha(t, tt - 1) + "*" + di(e === 47 ? e : ut());
}
function ph(e) {
  for (; !rr(Bt()); )
    ut();
  return ha(e, tt);
}
function mh(e) {
  return uh($r("", null, null, null, [""], e = lh(e), 0, [0], e));
}
function $r(e, t, n, r, a, o, i, l, s) {
  for (var c = 0, u = 0, d = i, f = 0, g = 0, y = 0, m = 1, h = 1, T = 1, S = 0, C = "", w = a, b = o, E = r, k = C; h; )
    switch (y = S, S = ut()) {
      case 40:
        if (y != 108 && nr(k, d - 1) == 58) {
          oh(k += Fr(ka(S), "&", "&\f"), "&\f", zc(c ? l[c - 1] : 0)) != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += ka(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += dh(y);
        break;
      case 92:
        k += fh(Br() - 1, 7);
        continue;
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            wr(gh(hh(ut(), Br()), t, n, s), s), (rr(y || 1) == 5 || rr(Bt() || 1) == 5) && mt(k) && _n(k, -1, void 0) !== " " && (k += " ");
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        l[c++] = mt(k) * T;
      case 125 * m:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            T == -1 && (k = Fr(k, /\f/g, "")), g > 0 && (mt(k) - d || m === 0 && y === 47) && wr(g > 32 ? Yi(k + ";", r, n, d - 1, s) : Yi(Fr(k, " ", "") + ";", r, n, d - 2, s), s);
            break;
          case 59:
            k += ";";
          default:
            if (wr(E = Xi(k, t, n, c, u, a, l, C, w = [], b = [], d, o), o), S === 123)
              if (u === 0)
                $r(k, t, E, E, w, o, d, l, b);
              else
                switch (f === 99 && nr(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $r(e, E, E, r && wr(Xi(e, E, E, 0, 0, a, l, C, a, w = [], d, b), b), a, b, d, l, r ? w : b);
                    break;
                  default:
                    $r(k, E, E, E, [""], b, 0, l, b);
                }
        }
        c = u = g = 0, m = T = 1, C = k = "", d = i;
        break;
      case 58:
        d = 1 + mt(k), g = y;
      default:
        if (m < 1) {
          if (S == 123)
            --m;
          else if (S == 125 && m++ == 0 && ch() == 125)
            continue;
        }
        switch (k += di(S), S * m) {
          case 38:
            T = u > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[c++] = (mt(k) - 1) * T, T = 1;
            break;
          case 64:
            Bt() === 45 && (k += ka(ut())), f = Bt(), u = d = mt(C = k += ph(Br())), S++;
            break;
          case 45:
            y === 45 && mt(k) == 2 && (m = 0);
        }
    }
  return o;
}
function Xi(e, t, n, r, a, o, i, l, s, c, u, d) {
  for (var f = a - 1, g = a === 0 ? o : [""], y = ih(g), m = 0, h = 0, T = 0; m < r; ++m)
    for (var S = 0, C = _n(e, f + 1, f = zc(h = i[m])), w = e; S < y; ++S)
      (w = Vc(h > 0 ? g[S] + " " + C : Fr(C, /&\f/g, g[S]))) && (s[T++] = w);
  return fi(e, t, n, a === 0 ? Hc : l, s, c, u, d);
}
function gh(e, t, n, r) {
  return fi(e, t, n, $c, di(sh()), _n(e, 2, -2), 0, r);
}
function Yi(e, t, n, r, a) {
  return fi(e, t, n, Uc, _n(e, 0, r), _n(e, r + 1, -1), r, a);
}
function Ja(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function vh(e, t, n, r) {
  switch (e.type) {
    case ah:
      if (e.children.length) break;
    case nh:
    case Uc:
      return e.return = e.return || e.value;
    case $c:
      return "";
    case rh:
      return e.return = e.value + "{" + Ja(e.children, r) + "}";
    case Hc:
      if (!mt(e.value = e.props.join(","))) return "";
  }
  return mt(n = Ja(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Gc(e, t) {
  var n = t.path, r = t.parentSelectors;
  Vt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var yh = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Gc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, bh = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Gc("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Zi = "data-ant-cssinjs-cache-path", Kc = "_FILE_STYLE__", sn, Qc = !0;
function xh() {
  if (!sn && (sn = {}, Nt())) {
    var e = document.createElement("div");
    e.className = Zi, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Y(o, 2), l = i[0], s = i[1];
      sn[l] = s;
    });
    var n = document.querySelector("style[".concat(Zi, "]"));
    if (n) {
      var r;
      Qc = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ch(e) {
  return xh(), !!sn[e];
}
function Sh(e) {
  var t = sn[e], n = null;
  if (t && Nt())
    if (Qc)
      n = Kc;
    else {
      var r = document.querySelector("style[".concat(lt, '="').concat(sn[e], '"]'));
      r ? n = r.innerHTML : delete sn[e];
    }
  return [n, t];
}
var qc = "_skip_check_", Xc = "_multi_value_";
function Hr(e) {
  var t = Ja(mh(e), vh);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Eh(e) {
  return ue(e) === "object" && e && (qc in e || Xc in e);
}
function Ji(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(ze(s.slice(1))).join(" ");
  });
  return o.join(",");
}
var wh = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, g = n.linters, y = g === void 0 ? [] : g, m = "", h = {};
  function T(w) {
    var b = w.getName(l);
    if (!h[b]) {
      var E = e(w.style, n, {
        root: !1,
        parentSelectors: i
      }), k = Y(E, 1), N = k[0];
      h[b] = "@keyframes ".concat(w.getName(l)).concat(N);
    }
  }
  function S(w) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return w.forEach(function(E) {
      Array.isArray(E) ? S(E, b) : E && b.push(E);
    }), b;
  }
  var C = S(Array.isArray(t) ? t : [t]);
  return C.forEach(function(w) {
    var b = typeof w == "string" && !a ? {} : w;
    if (typeof b == "string")
      m += "".concat(b, `
`);
    else if (b._keyframe)
      T(b);
    else {
      var E = f.reduce(function(k, N) {
        var M;
        return (N == null || (M = N.visit) === null || M === void 0 ? void 0 : M.call(N, k)) || k;
      }, b);
      Object.keys(E).forEach(function(k) {
        var N = E[k];
        if (ue(N) === "object" && N && (k !== "animationName" || !N._keyframe) && !Eh(N)) {
          var M = !1, j = k.trim(), _ = !1;
          (a || o) && l ? j.startsWith("@") ? M = !0 : j === "&" ? j = Ji("", l, u) : j = Ji(k, l, u) : a && !l && (j === "&" || j === "") && (j = "", _ = !0);
          var z = e(N, n, {
            root: _,
            injectHash: M,
            parentSelectors: [].concat(ze(i), [j])
          }), $ = Y(z, 2), D = $[0], W = $[1];
          h = F(F({}, h), W), m += "".concat(j).concat(D);
        } else {
          let R = function(I, L) {
            K.env.NODE_ENV !== "production" && (ue(N) !== "object" || !(N != null && N[qc])) && [yh, bh].concat(ze(y)).forEach(function(G) {
              return G(I, L, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var O = I.replace(/[A-Z]/g, function(G) {
              return "-".concat(G.toLowerCase());
            }), H = L;
            !th[I] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), I === "animationName" && L !== null && L !== void 0 && L._keyframe && (T(L), H = L.getName(l)), m += "".concat(O, ":").concat(H, ";");
          };
          var P, A = (P = N == null ? void 0 : N.value) !== null && P !== void 0 ? P : N;
          ue(N) === "object" && N !== null && N !== void 0 && N[Xc] && Array.isArray(A) ? A.forEach(function(I) {
            R(k, I);
          }) : R(k, A);
        }
      });
    }
  }), a ? s && (m = "@layer ".concat(s.name, " {").concat(m, "}"), s.dependencies && (h["@layer ".concat(s.name)] = s.dependencies.map(function(w) {
    return "@layer ".concat(w, ", ").concat(s.name, ";");
  }).join(`
`))) : m = "{".concat(m, "}"), [m, h];
};
function Yc(e, t) {
  return tr("".concat(e.join("%")).concat(t));
}
function Th() {
  return null;
}
var Zc = "style";
function eo(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, u = p.useContext(da), d = u.autoClear, f = u.mock, g = u.defaultCache, y = u.hashPriority, m = u.container, h = u.ssrInline, T = u.transformers, S = u.linters, C = u.cache, w = u.layer, b = n._tokenKey, E = [b];
  w && E.push("layer"), E.push.apply(E, ze(r));
  var k = Xa;
  K.env.NODE_ENV !== "production" && f !== void 0 && (k = f === "client");
  var N = ui(
    Zc,
    E,
    // Create cache if needed
    function() {
      var $ = E.join("|");
      if (Ch($)) {
        var D = Sh($), W = Y(D, 2), P = W[0], A = W[1];
        if (P)
          return [P, b, A, {}, l, c];
      }
      var R = t(), I = wh(R, {
        hashId: a,
        hashPriority: y,
        layer: w ? o : void 0,
        path: r.join("-"),
        transformers: T,
        linters: S
      }), L = Y(I, 2), O = L[0], H = L[1], G = Hr(O), Q = Yc(E, G);
      return [G, b, Q, H, l, c];
    },
    // Remove cache if no need
    function($, D) {
      var W = Y($, 3), P = W[2];
      (D || d) && Xa && _c(P, {
        mark: lt
      });
    },
    // Effect: Inject style here
    function($) {
      var D = Y($, 4), W = D[0];
      D[1];
      var P = D[2], A = D[3];
      if (k && W !== Kc) {
        var R = {
          mark: lt,
          prepend: w ? !1 : "queue",
          attachTo: m,
          priority: c
        }, I = typeof i == "function" ? i() : i;
        I && (R.csp = {
          nonce: I
        });
        var L = [], O = [];
        Object.keys(A).forEach(function(G) {
          G.startsWith("@layer") ? L.push(G) : O.push(G);
        }), L.forEach(function(G) {
          on(Hr(A[G]), "_layer-".concat(G), F(F({}, R), {}, {
            prepend: !0
          }));
        });
        var H = on(W, P, R);
        H[Ft] = C.instanceId, H.setAttribute(jn, b), K.env.NODE_ENV !== "production" && H.setAttribute(Nf, E.join("|")), O.forEach(function(G) {
          on(Hr(A[G]), "_effect-".concat(G), R);
        });
      }
    }
  ), M = Y(N, 3), j = M[0], _ = M[1], z = M[2];
  return function($) {
    var D;
    return !h || k || !g ? D = /* @__PURE__ */ p.createElement(Th, null) : D = /* @__PURE__ */ p.createElement("style", et({}, Z(Z({}, jn, _), lt, z), {
      dangerouslySetInnerHTML: {
        __html: j
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, D, $);
  };
}
var Ah = function(t, n, r) {
  var a = Y(t, 6), o = a[0], i = a[1], l = a[2], s = a[3], c = a[4], u = a[5], d = r || {}, f = d.plain;
  if (c)
    return null;
  var g = o, y = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = Zr(o, i, l, y, f), s && Object.keys(s).forEach(function(m) {
    if (!n[m]) {
      n[m] = !0;
      var h = Hr(s[m]), T = Zr(h, i, "_effect-".concat(m), y, f);
      m.startsWith("@layer") ? g = T + g : g += T;
    }
  }), [u, l, g];
}, Jc = "cssVar", kh = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, u = p.useContext(da), d = u.cache.instanceId, f = u.container, g = l._tokenKey, y = [].concat(ze(t.path), [r, c, g]), m = ui(Jc, y, function() {
    var h = n(), T = Dc(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), S = Y(T, 2), C = S[0], w = S[1], b = Yc(y, w);
    return [C, w, b, r];
  }, function(h) {
    var T = Y(h, 3), S = T[2];
    Xa && _c(S, {
      mark: lt
    });
  }, function(h) {
    var T = Y(h, 3), S = T[1], C = T[2];
    if (S) {
      var w = on(S, C, {
        mark: lt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      w[Ft] = d, w.setAttribute(jn, r);
    }
  });
  return m;
}, Nh = function(t, n, r) {
  var a = Y(t, 4), o = a[1], i = a[2], l = a[3], s = r || {}, c = s.plain;
  if (!o)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = Zr(o, l, i, d, c);
  return [u, i, f];
};
Z(Z(Z({}, Zc, Ah), Bc, eh), Jc, Nh);
var qn = /* @__PURE__ */ function() {
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
function mn(e) {
  return e.notSplit = !0, e;
}
mn(["borderTop", "borderBottom"]), mn(["borderTop"]), mn(["borderBottom"]), mn(["borderLeft", "borderRight"]), mn(["borderLeft"]), mn(["borderRight"]);
var hi = /* @__PURE__ */ p.createContext({});
function Ph(e) {
  return Rc(e) || Ac(e) || si(e) || Mc();
}
function to(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function el(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Ph(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = ze(e) : l = F({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = el(l[o], i, n, r), l;
}
function Na(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !to(e, t.slice(0, -1)) ? e : el(e, t, n, r);
}
function Rh(e) {
  return ue(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function es(e) {
  return Array.isArray(e) ? [] : {};
}
var Mh = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Oh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = es(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var s = new Set(l), c = to(a, i), u = Array.isArray(c);
      if (u || Rh(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = to(r, i);
          u ? r = Na(r, i, []) : (!d || ue(d) !== "object") && (r = Na(r, i, es(c))), Mh(c).forEach(function(f) {
            o([].concat(ze(i), [f]), s);
          });
        }
      } else
        r = Na(r, i, c);
    }
    o([]);
  }), r;
}
function tl() {
}
let wt = null;
function Ih() {
  wt = null, Sc();
}
let pi = tl;
K.env.NODE_ENV !== "production" && (pi = (e, t, n) => {
  Vt(e, `[antd: ${t}] ${n}`), K.env.NODE_ENV === "test" && Ih();
});
const nl = /* @__PURE__ */ p.createContext({}), Hn = K.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(nl), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = wt;
        wt || (wt = {}), wt[e] = wt[e] || [], wt[e].includes(o || "") || wt[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", wt);
      } else
        K.env.NODE_ENV !== "production" && pi(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = tl, e;
}, pa = pi, jh = /* @__PURE__ */ p.createContext(void 0);
var _h = {
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
}, Lh = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Dh = F(F({}, Lh), {}, {
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
const rl = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ts = {
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
  }, Dh),
  timePickerLocale: Object.assign({}, rl)
}, We = "${label} is not a valid ${type}", ma = {
  locale: "en",
  Pagination: _h,
  DatePicker: ts,
  TimePicker: rl,
  Calendar: ts,
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
        string: We,
        method: We,
        array: We,
        object: We,
        number: We,
        date: We,
        boolean: We,
        integer: We,
        float: We,
        regexp: We,
        email: We,
        url: We,
        hex: We
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
Object.assign({}, ma.Modal);
let Ur = [];
const ns = () => Ur.reduce((e, t) => Object.assign(Object.assign({}, e), t), ma.Modal);
function Fh(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ur.push(t), ns(), () => {
      Ur = Ur.filter((n) => n !== t), ns();
    };
  }
  Object.assign({}, ma.Modal);
}
const al = /* @__PURE__ */ p.createContext(void 0), ol = "internalMark", il = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (K.env.NODE_ENV !== "production") {
    const o = Hn("LocaleProvider");
    K.env.NODE_ENV !== "production" && o(r === ol, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => Fh(t == null ? void 0 : t.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(al.Provider, {
    value: a
  }, n);
};
K.env.NODE_ENV !== "production" && (il.displayName = "LocaleProvider");
function Pe(e, t) {
  Bh(e) && (e = "100%");
  var n = $h(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Tr(e) {
  return Math.min(1, Math.max(0, e));
}
function Bh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function $h(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function sl(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ar(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function qt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hh(e, t, n) {
  return {
    r: Pe(e, 255) * 255,
    g: Pe(t, 255) * 255,
    b: Pe(n, 255) * 255
  };
}
function rs(e, t, n) {
  e = Pe(e, 255), t = Pe(t, 255), n = Pe(n, 255);
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
function Pa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Uh(e, t, n) {
  var r, a, o;
  if (e = Pe(e, 360), t = Pe(t, 100), n = Pe(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Pa(l, i, e + 1 / 3), a = Pa(l, i, e), o = Pa(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function no(e, t, n) {
  e = Pe(e, 255), t = Pe(t, 255), n = Pe(n, 255);
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
function zh(e, t, n) {
  e = Pe(e, 360) * 6, t = Pe(t, 100), n = Pe(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), i = n * (1 - a * t), l = n * (1 - (1 - a) * t), s = r % 6, c = [n, i, o, o, l, n][s], u = [l, n, n, i, o, o][s], d = [o, o, l, n, n, i][s];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function ro(e, t, n, r) {
  var a = [
    qt(Math.round(e).toString(16)),
    qt(Math.round(t).toString(16)),
    qt(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Vh(e, t, n, r, a) {
  var o = [
    qt(Math.round(e).toString(16)),
    qt(Math.round(t).toString(16)),
    qt(Math.round(n).toString(16)),
    qt(Wh(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Wh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function as(e) {
  return Ge(e) / 255;
}
function Ge(e) {
  return parseInt(e, 16);
}
function Gh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var ao = {
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
function gn(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, i = !1, l = !1;
  return typeof e == "string" && (e = qh(e)), typeof e == "object" && (Et(e.r) && Et(e.g) && Et(e.b) ? (t = Hh(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Et(e.h) && Et(e.s) && Et(e.v) ? (r = Ar(e.s), a = Ar(e.v), t = zh(e.h, r, a), i = !0, l = "hsv") : Et(e.h) && Et(e.s) && Et(e.l) && (r = Ar(e.s), o = Ar(e.l), t = Uh(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = sl(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Kh = "[-\\+]?\\d+%?", Qh = "[-\\+]?\\d*\\.\\d+%?", $t = "(?:".concat(Qh, ")|(?:").concat(Kh, ")"), Ra = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), Ma = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), nt = {
  CSS_UNIT: new RegExp($t),
  rgb: new RegExp("rgb" + Ra),
  rgba: new RegExp("rgba" + Ma),
  hsl: new RegExp("hsl" + Ra),
  hsla: new RegExp("hsla" + Ma),
  hsv: new RegExp("hsv" + Ra),
  hsva: new RegExp("hsva" + Ma),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ao[e])
    e = ao[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = nt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = nt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = nt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = nt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = nt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = nt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = nt.hex8.exec(e), n ? {
    r: Ge(n[1]),
    g: Ge(n[2]),
    b: Ge(n[3]),
    a: as(n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex6.exec(e), n ? {
    r: Ge(n[1]),
    g: Ge(n[2]),
    b: Ge(n[3]),
    format: t ? "name" : "hex"
  } : (n = nt.hex4.exec(e), n ? {
    r: Ge(n[1] + n[1]),
    g: Ge(n[2] + n[2]),
    b: Ge(n[3] + n[3]),
    a: as(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = nt.hex3.exec(e), n ? {
    r: Ge(n[1] + n[1]),
    g: Ge(n[2] + n[2]),
    b: Ge(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Et(e) {
  return !!nt.CSS_UNIT.exec(String(e));
}
var He = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Gh(t)), this.originalInput = t;
      var a = gn(t);
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
      return this.a = sl(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = no(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = no(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = rs(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = rs(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), ro(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Vh(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(Pe(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Pe(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + ro(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ao); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Tr(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Tr(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Tr(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Tr(n.s), new e(n);
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
), kr = 2, os = 0.16, Xh = 0.05, Yh = 0.05, Zh = 0.15, cl = 5, ll = 4, Jh = [{
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
function is(e) {
  var t = e.r, n = e.g, r = e.b, a = no(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Nr(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(ro(t, n, r, !1));
}
function ep(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function ss(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - kr * t : Math.round(e.h) + kr * t : r = n ? Math.round(e.h) + kr * t : Math.round(e.h) - kr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function cs(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - os * t : t === ll ? r = e.s + os : r = e.s + Xh * t, r > 1 && (r = 1), n && t === cl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function ls(e, t, n) {
  var r;
  return n ? r = e.v + Yh * t : r = e.v - Zh * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function ar(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = gn(e), a = cl; a > 0; a -= 1) {
    var o = is(r), i = Nr(gn({
      h: ss(o, a, !0),
      s: cs(o, a, !0),
      v: ls(o, a, !0)
    }));
    n.push(i);
  }
  n.push(Nr(r));
  for (var l = 1; l <= ll; l += 1) {
    var s = is(r), c = Nr(gn({
      h: ss(s, l),
      s: cs(s, l),
      v: ls(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Jh.map(function(u) {
    var d = u.index, f = u.opacity, g = Nr(ep(gn(t.backgroundColor || "#141414"), gn(n[d]), f * 100));
    return g;
  }) : n;
}
var Oa = {
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
}, oo = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
oo.primary = oo[5];
var io = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
io.primary = io[5];
var so = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
so.primary = so[5];
var co = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
co.primary = co[5];
var lo = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
lo.primary = lo[5];
var uo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
uo.primary = uo[5];
var fo = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
fo.primary = fo[5];
var ho = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ho.primary = ho[5];
var Jr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Jr.primary = Jr[5];
var po = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
po.primary = po[5];
var mo = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
mo.primary = mo[5];
var go = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
go.primary = go[5];
var vo = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
vo.primary = vo[5];
var Ia = {
  red: oo,
  volcano: io,
  orange: so,
  gold: co,
  yellow: lo,
  lime: uo,
  green: fo,
  cyan: ho,
  blue: Jr,
  geekblue: po,
  purple: mo,
  magenta: go,
  grey: vo
};
const ul = {
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
}, or = Object.assign(Object.assign({}, ul), {
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
function tp(e, t) {
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
  } = e, d = n(s), f = n(a), g = n(o), y = n(i), m = n(l), h = r(c, u), T = e.colorLink || e.colorInfo, S = n(T), C = new He(y[1]).mix(new He(y[3]), 50).toHexString();
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
    colorBgMask: new He("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const np = (e) => {
  let t = e, n = e, r = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function rp(e) {
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
  }, np(r));
}
const ap = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function op(e) {
  return (e + 8) / e;
}
function ip(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const a = r - 1, o = e * Math.pow(Math.E, a / 5), i = r > 1 ? Math.floor(o) : Math.ceil(o);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: op(n)
  }));
}
const sp = (e) => {
  const t = ip(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), a = n[1], o = n[0], i = n[2], l = r[1], s = r[0], c = r[2];
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
function cp(e) {
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
const Ye = (e, t) => new He(e).setAlpha(t).toRgbString(), Qn = (e, t) => new He(e).darken(t).toHexString(), lp = (e) => {
  const t = ar(e);
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
}, up = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Ye(r, 0.88),
    colorTextSecondary: Ye(r, 0.65),
    colorTextTertiary: Ye(r, 0.45),
    colorTextQuaternary: Ye(r, 0.25),
    colorFill: Ye(r, 0.15),
    colorFillSecondary: Ye(r, 0.06),
    colorFillTertiary: Ye(r, 0.04),
    colorFillQuaternary: Ye(r, 0.02),
    colorBgSolid: Ye(r, 1),
    colorBgSolidHover: Ye(r, 0.75),
    colorBgSolidActive: Ye(r, 0.95),
    colorBgLayout: Qn(n, 4),
    colorBgContainer: Qn(n, 0),
    colorBgElevated: Qn(n, 0),
    colorBgSpotlight: Ye(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Qn(n, 15),
    colorBorderSecondary: Qn(n, 6)
  };
};
function dp(e) {
  Oa.pink = Oa.magenta, Ia.pink = Ia.magenta;
  const t = Object.keys(ul).map((n) => {
    const r = e[n] === Oa[n] ? Ia[n] : ar(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), tp(e, {
    generateColorPalettes: lp,
    generateNeutralColorPalettes: up
  })), sp(e.fontSize)), cp(e)), ap(e)), rp(e));
}
const dl = qa(dp), yo = {
  token: or,
  override: {
    override: or
  },
  hashed: !0
}, fl = /* @__PURE__ */ q.createContext(yo), bo = "ant", mi = "anticon", Zv = ["outlined", "borderless", "filled"], fp = (e, t) => t || (e ? `${bo}-${e}` : bo), Ut = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: fp,
  iconPrefixCls: mi
}), hp = `-ant-${Date.now()}-${Math.random()}`;
function pp(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, a = (i, l) => {
    const s = new He(i), c = ar(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new He(t.primaryColor), l = ar(i.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setAlpha(c.getAlpha() * 0.12));
    const s = new He(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setAlpha(c.getAlpha() * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function mp(e, t) {
  const n = pp(e, t);
  Nt() ? on(n, `${hp}-dynamic-theme`) : K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const xo = /* @__PURE__ */ p.createContext(!1), gp = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = p.useContext(xo);
  return /* @__PURE__ */ p.createElement(xo.Provider, {
    value: n ?? r
  }, t);
}, ir = /* @__PURE__ */ p.createContext(void 0), vp = (e) => {
  let {
    children: t,
    size: n
  } = e;
  const r = p.useContext(ir);
  return /* @__PURE__ */ p.createElement(ir.Provider, {
    value: n || r
  }, t);
};
function yp() {
  const e = p.useContext(xo), t = p.useContext(ir);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var hl = /* @__PURE__ */ Ct(function e() {
  xt(this, e);
}), pl = "CALC_UNIT", bp = new RegExp(pl, "g");
function ja(e) {
  return typeof e == "number" ? "".concat(e).concat(pl) : e;
}
var xp = /* @__PURE__ */ function(e) {
  sa(n, e);
  var t = ca(n);
  function n(r, a) {
    var o;
    xt(this, n), o = t.call(this), Z(an(o), "result", ""), Z(an(o), "unitlessCssVar", void 0), Z(an(o), "lowPriority", void 0);
    var i = ue(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = ja(r) : i === "string" && (o.result = r), o;
  }
  return Ct(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(ja(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(ja(a))), this.lowPriority = !0, this;
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
      }) && (s = !1), this.result = this.result.replace(bp, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(hl), Cp = /* @__PURE__ */ function(e) {
  sa(n, e);
  var t = ca(n);
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
}(hl), Sp = function(t, n) {
  var r = t === "css" ? xp : Cp;
  return function(a) {
    return new r(a, n);
  };
}, us = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Co(e) {
  var t = p.useRef();
  t.current = e;
  var n = p.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function So(e) {
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
function ds(e, t, n, r) {
  var a = F({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens;
    o.forEach(function(l) {
      var s = Y(l, 2), c = s[0], u = s[1];
      if (K.env.NODE_ENV !== "production" && Vt(!(a != null && a[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), a != null && a[c] || a != null && a[u]) {
        var d;
        (d = a[u]) !== null && d !== void 0 || (a[u] = a == null ? void 0 : a[c]);
      }
    });
  }
  var i = F(F({}, n), a);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var ml = K.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Eo = !0;
function gi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!ml)
    return Object.assign.apply(Object, [{}].concat(t));
  Eo = !1;
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
  }), Eo = !0, r;
}
var fs = {};
function Ep() {
}
var wp = function(t) {
  var n, r = t, a = Ep;
  return ml && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (Eo) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), a = function(i, l) {
    var s;
    fs[i] = {
      global: Array.from(n),
      component: F(F({}, (s = fs[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function hs(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(gi(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Tp(e) {
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
var Ap = 1e3 * 60 * 10, kp = /* @__PURE__ */ function() {
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
          r - a > Ap && (n.map.delete(o), n.lastAccessBeat.delete(o));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), ps = new kp();
function Np(e, t) {
  return q.useMemo(function() {
    var n = ps.get(t);
    if (n)
      return n;
    var r = e();
    return ps.set(t, r), r;
  }, t);
}
var Pp = function() {
  return {};
};
function Rp(e) {
  var t = e.useCSP, n = t === void 0 ? Pp : t, r = e.useToken, a = e.usePrefix, o = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function s(f, g, y, m) {
    var h = Array.isArray(f) ? f[0] : f;
    function T(N) {
      return "".concat(String(h)).concat(N.slice(0, 1).toUpperCase()).concat(N.slice(1));
    }
    var S = (m == null ? void 0 : m.unitless) || {}, C = typeof l == "function" ? l(f) : {}, w = F(F({}, C), {}, Z({}, T("zIndexPopup"), !0));
    Object.keys(S).forEach(function(N) {
      w[T(N)] = S[N];
    });
    var b = F(F({}, m), {}, {
      unitless: w,
      prefixToken: T
    }), E = u(f, g, y, b), k = c(h, y, b);
    return function(N) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, j = E(N, M), _ = Y(j, 2), z = _[1], $ = k(M), D = Y($, 2), W = D[0], P = D[1];
      return [W, z, P];
    };
  }
  function c(f, g, y) {
    var m = y.unitless, h = y.injectStyle, T = h === void 0 ? !0 : h, S = y.prefixToken, C = y.ignore, w = function(k) {
      var N = k.rootCls, M = k.cssVar, j = M === void 0 ? {} : M, _ = r(), z = _.realToken;
      return kh({
        path: [f],
        prefix: j.prefix,
        key: j.key,
        unitless: m,
        ignore: C,
        token: z,
        scope: N
      }, function() {
        var $ = hs(f, z, g), D = ds(f, z, $, {
          deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
        });
        return Object.keys($).forEach(function(W) {
          D[S(W)] = D[W], delete D[W];
        }), D;
      }), null;
    }, b = function(k) {
      var N = r(), M = N.cssVar;
      return [function(j) {
        return T && M ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(w, {
          rootCls: k,
          cssVar: M,
          component: f
        }), j) : j;
      }, M == null ? void 0 : M.key];
    };
    return b;
  }
  function u(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], T = Y(h, 1), S = T[0], C = h.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(b) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, k = r(), N = k.theme, M = k.realToken, j = k.hashId, _ = k.token, z = k.cssVar, $ = a(), D = $.rootPrefixCls, W = $.iconPrefixCls, P = n(), A = z ? "css" : "js", R = Np(function() {
        var Q = /* @__PURE__ */ new Set();
        return z && Object.keys(m.unitless || {}).forEach(function(B) {
          Q.add(Dr(B, z.prefix)), Q.add(Dr(B, us(S, z.prefix)));
        }), Sp(A, Q);
      }, [A, S, z == null ? void 0 : z.prefix]), I = Tp(A), L = I.max, O = I.min, H = {
        theme: N,
        token: _,
        hashId: j,
        nonce: function() {
          return P.nonce;
        },
        clientOnly: m.clientOnly,
        layer: w,
        // antd is always at top of styles
        order: m.order || -999
      };
      eo(F(F({}, H), {}, {
        clientOnly: !1,
        path: ["Shared", D]
      }), function() {
        return typeof o == "function" ? o(_) : [];
      });
      var G = eo(F(F({}, H), {}, {
        path: [C, b, W]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var Q = wp(_), B = Q.token, te = Q.flush, ie = hs(S, M, y), Ee = ".".concat(b), we = ds(S, M, ie, {
          deprecatedTokens: m.deprecatedTokens
        });
        z && ie && ue(ie) === "object" && Object.keys(ie).forEach(function(je) {
          ie[je] = "var(".concat(Dr(je, us(S, z.prefix)), ")");
        });
        var Se = gi(B, {
          componentCls: Ee,
          prefixCls: b,
          iconCls: ".".concat(W),
          antCls: ".".concat(D),
          calc: R,
          // @ts-ignore
          max: L,
          // @ts-ignore
          min: O
        }, z ? ie : we), Ie = g(Se, {
          hashId: j,
          prefixCls: b,
          rootPrefixCls: D,
          iconPrefixCls: W
        });
        te(S, we);
        var Te = typeof i == "function" ? i(Se, b, E, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Te, Ie];
      });
      return [G, j];
    };
  }
  function d(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(f, g, y, F({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, m)), T = function(C) {
      var w = C.prefixCls, b = C.rootCls, E = b === void 0 ? w : b;
      return h(w, E), null;
    };
    return K.env.NODE_ENV !== "production" && (T.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), T;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Mp = "5.21.6";
function _a(e) {
  return e >= 0 && e <= 255;
}
function Pr(e, t) {
  const {
    r: n,
    g: r,
    b: a,
    a: o
  } = new He(e).toRgb();
  if (o < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new He(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - i * (1 - c)) / c), d = Math.round((r - l * (1 - c)) / c), f = Math.round((a - s * (1 - c)) / c);
    if (_a(u) && _a(d) && _a(f))
      return new He({
        r: u,
        g: d,
        b: f,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new He({
    r: n,
    g: r,
    b: a,
    a: 1
  }).toRgbString();
}
var Op = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function gl(e) {
  const {
    override: t
  } = e, n = Op(e, ["override"]), r = Object.assign({}, t);
  Object.keys(or).forEach((f) => {
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
    colorSplit: Pr(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: Pr(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Pr(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: Pr(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new He("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new He("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new He("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var ms = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const vl = {
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
}, Ip = {
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
}, jp = {
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
}, yl = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = ms(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = gl(i), o && Object.entries(o).forEach((l) => {
    let [s, c] = l;
    const {
      theme: u
    } = c, d = ms(c, ["theme"]);
    let f = d;
    u && (f = yl(Object.assign(Object.assign({}, i), d), {
      override: d
    }, u)), i[s] = f;
  }), i;
};
function Un() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: a
  } = q.useContext(fl), o = `${Mp}-${t || ""}`, i = n || dl, [l, s, c] = Jf(i, [or, e], {
    salt: o,
    override: r,
    getComputedToken: yl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: gl,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: vl,
      ignore: Ip,
      preserve: jp
    }
  });
  return [i, c, t ? s : "", l, a];
}
const Jv = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, _p = function(e) {
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
}, Lp = () => ({
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
}), ey = () => ({
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
}), Dp = (e) => ({
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
}), Fp = (e, t, n, r) => {
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
}, Bp = (e) => ({
  outline: `${Ht(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), $p = (e) => ({
  "&:focus-visible": Object.assign({}, Bp(e))
}), bl = (e, t) => {
  const [n, r] = Un();
  return eo({
    theme: n,
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, Lp()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, {
  genStyleHooks: Hp,
  genComponentStyleHook: ty,
  genSubStyleComponent: Up
} = Rp({
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
    const [e, t, n, r, a] = Un();
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
    return bl(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Dp(e)
  }],
  getCommonStyle: Fp,
  getCompUnitless: () => vl
}), zp = Object.assign({}, Jo), {
  useId: gs
} = zp, Vp = () => "", Wp = typeof gs > "u" ? Vp : gs;
function Gp(e, t, n) {
  var r, a;
  const o = Hn("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, yo), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : yo.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = Wp();
  if (K.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || s);
    K.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ii(() => {
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
    return !Tf(d, g, !0);
  }));
}
var Kp = ["children"], xl = /* @__PURE__ */ p.createContext({});
function Qp(e) {
  var t = e.children, n = cn(e, Kp);
  return /* @__PURE__ */ p.createElement(xl.Provider, {
    value: n
  }, t);
}
var qp = /* @__PURE__ */ function(e) {
  sa(n, e);
  var t = ca(n);
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
function Xp(e) {
  var t = p.useReducer(function(l) {
    return l + 1;
  }, 0), n = Y(t, 2), r = n[1], a = p.useRef(e), o = Co(function() {
    return a.current;
  }), i = Co(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, i];
}
var Pt = "none", Rr = "appear", Mr = "enter", Or = "leave", vs = "none", ot = "prepare", vn = "start", yn = "active", vi = "end", Cl = "prepared";
function ys(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Yp(e, t) {
  var n = {
    animationend: ys("Animation", "AnimationEnd"),
    transitionend: ys("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Zp = Yp(Nt(), typeof window < "u" ? window : {}), Sl = {};
if (Nt()) {
  var Jp = document.createElement("div");
  Sl = Jp.style;
}
var Ir = {};
function El(e) {
  if (Ir[e])
    return Ir[e];
  var t = Zp[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Sl)
        return Ir[e] = t[o], Ir[e];
    }
  return "";
}
var wl = El("animationend"), Tl = El("transitionend"), Al = !!(wl && Tl), bs = wl || "animationend", xs = Tl || "transitionend";
function Cs(e, t) {
  if (!e) return null;
  if (ue(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const em = function(e) {
  var t = p.useRef();
  function n(a) {
    a && (a.removeEventListener(xs, e), a.removeEventListener(bs, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(xs, e), a.addEventListener(bs, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var kl = Nt() ? p.useLayoutEffect : p.useEffect;
const tm = function() {
  var e = p.useRef(null);
  function t() {
    Yr.cancel(e.current);
  }
  function n(r) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Yr(function() {
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
var nm = [ot, vn, yn, vi], rm = [ot, Cl], Nl = !1, am = !0;
function Pl(e) {
  return e === yn || e === vi;
}
const om = function(e, t, n) {
  var r = So(vs), a = Y(r, 2), o = a[0], i = a[1], l = tm(), s = Y(l, 2), c = s[0], u = s[1];
  function d() {
    i(ot, !0);
  }
  var f = t ? rm : nm;
  return kl(function() {
    if (o !== vs && o !== vi) {
      var g = f.indexOf(o), y = f[g + 1], m = n(o);
      m === Nl ? i(y, !0) : y && c(function(h) {
        function T() {
          h.isCanceled() || i(y, !0);
        }
        m === !0 ? T() : Promise.resolve(m).then(T);
      });
    }
  }, [e, o]), p.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, o];
};
function im(e, t, n, r) {
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, g = r.onEnterPrepare, y = r.onLeavePrepare, m = r.onAppearStart, h = r.onEnterStart, T = r.onLeaveStart, S = r.onAppearActive, C = r.onEnterActive, w = r.onLeaveActive, b = r.onAppearEnd, E = r.onEnterEnd, k = r.onLeaveEnd, N = r.onVisibleChanged, M = So(), j = Y(M, 2), _ = j[0], z = j[1], $ = Xp(Pt), D = Y($, 2), W = D[0], P = D[1], A = So(null), R = Y(A, 2), I = R[0], L = R[1], O = W(), H = p.useRef(!1), G = p.useRef(null);
  function Q() {
    return n();
  }
  var B = p.useRef(!1);
  function te() {
    P(Pt), L(null, !0);
  }
  var ie = Co(function(pe) {
    var de = W();
    if (de !== Pt) {
      var Re = Q();
      if (!(pe && !pe.deadline && pe.target !== Re)) {
        var ft = B.current, Le;
        de === Rr && ft ? Le = b == null ? void 0 : b(Re, pe) : de === Mr && ft ? Le = E == null ? void 0 : E(Re, pe) : de === Or && ft && (Le = k == null ? void 0 : k(Re, pe)), ft && Le !== !1 && te();
      }
    }
  }), Ee = em(ie), we = Y(Ee, 1), Se = we[0], Ie = function(de) {
    switch (de) {
      case Rr:
        return Z(Z(Z({}, ot, f), vn, m), yn, S);
      case Mr:
        return Z(Z(Z({}, ot, g), vn, h), yn, C);
      case Or:
        return Z(Z(Z({}, ot, y), vn, T), yn, w);
      default:
        return {};
    }
  }, Te = p.useMemo(function() {
    return Ie(O);
  }, [O]), je = om(O, !e, function(pe) {
    if (pe === ot) {
      var de = Te[ot];
      return de ? de(Q()) : Nl;
    }
    if (ve in Te) {
      var Re;
      L(((Re = Te[ve]) === null || Re === void 0 ? void 0 : Re.call(Te, Q(), null)) || null);
    }
    return ve === yn && O !== Pt && (Se(Q()), u > 0 && (clearTimeout(G.current), G.current = setTimeout(function() {
      ie({
        deadline: !0
      });
    }, u))), ve === Cl && te(), am;
  }), V = Y(je, 2), _e = V[0], ve = V[1], Ve = Pl(ve);
  B.current = Ve, kl(function() {
    z(t);
    var pe = H.current;
    H.current = !0;
    var de;
    !pe && t && l && (de = Rr), pe && t && o && (de = Mr), (pe && !t && c || !pe && d && !t && c) && (de = Or);
    var Re = Ie(de);
    de && (e || Re[ot]) ? (P(de), _e()) : P(Pt);
  }, [t]), p.useEffect(function() {
    // Cancel appear
    (O === Rr && !l || // Cancel enter
    O === Mr && !o || // Cancel leave
    O === Or && !c) && P(Pt);
  }, [l, o, c]), p.useEffect(function() {
    return function() {
      H.current = !1, clearTimeout(G.current);
    };
  }, []);
  var qe = p.useRef(!1);
  p.useEffect(function() {
    _ && (qe.current = !0), _ !== void 0 && O === Pt && ((qe.current || _) && (N == null || N(_)), qe.current = !0);
  }, [_, O]);
  var dt = I;
  return Te[ot] && ve === vn && (dt = F({
    transition: "none"
  }, dt)), [O, ve, dt, _ ?? t];
}
function sm(e) {
  var t = e;
  ue(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, s = a.removeOnLeave, c = s === void 0 ? !0 : s, u = a.forceRender, d = a.children, f = a.motionName, g = a.leavedClassName, y = a.eventProps, m = p.useContext(xl), h = m.motion, T = n(a, h), S = p.useRef(), C = p.useRef();
    function w() {
      try {
        return S.current instanceof HTMLElement ? S.current : pf(C.current);
      } catch {
        return null;
      }
    }
    var b = im(T, l, w, a), E = Y(b, 4), k = E[0], N = E[1], M = E[2], j = E[3], _ = p.useRef(j);
    j && (_.current = !0);
    var z = p.useCallback(function(I) {
      S.current = I, wc(o, I);
    }, [o]), $, D = F(F({}, y), {}, {
      visible: l
    });
    if (!d)
      $ = null;
    else if (k === Pt)
      j ? $ = d(F({}, D), z) : !c && _.current && g ? $ = d(F(F({}, D), {}, {
        className: g
      }), z) : u || !c && !g ? $ = d(F(F({}, D), {}, {
        style: {
          display: "none"
        }
      }), z) : $ = null;
    else {
      var W;
      N === ot ? W = "prepare" : Pl(N) ? W = "active" : N === vn && (W = "start");
      var P = Cs(f, "".concat(k, "-").concat(W));
      $ = d(F(F({}, D), {}, {
        className: Qe(Cs(f, k), Z(Z({}, P, P && W), f, typeof f == "string")),
        style: M
      }), z);
    }
    if (/* @__PURE__ */ p.isValidElement($) && gf($)) {
      var A = $, R = A.ref;
      R || ($ = /* @__PURE__ */ p.cloneElement($, {
        ref: z
      }));
    }
    return /* @__PURE__ */ p.createElement(qp, {
      ref: C
    }, $);
  });
  return r.displayName = "CSSMotion", r;
}
const cm = sm(Al);
var wo = "add", To = "keep", Ao = "remove", La = "removed";
function lm(e) {
  var t;
  return e && ue(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, F(F({}, t), {}, {
    key: String(t.key)
  });
}
function ko() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(lm);
}
function um() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = ko(e), i = ko(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(g) {
          return F(F({}, g), {}, {
            status: wo
          });
        })), r = d), n.push(F(F({}, f), {}, {
          status: To
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(F(F({}, c), {}, {
      status: Ao
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return F(F({}, c), {}, {
      status: wo
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
      return d !== c || f !== Ao;
    }), n.forEach(function(u) {
      u.key === c && (u.status = To);
    });
  }), n;
}
var dm = ["component", "children", "onVisibleChanged", "onAllRemoved"], fm = ["status"], hm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function pm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cm, n = /* @__PURE__ */ function(r) {
    sa(o, r);
    var a = ca(o);
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
            return g.key !== u ? g : F(F({}, g), {}, {
              status: La
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(g) {
            var y = g.status;
            return y !== La;
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
        var g = cn(c, dm), y = u || p.Fragment, m = {};
        return hm.forEach(function(h) {
          m[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ p.createElement(y, g, s.map(function(h, T) {
          var S = h.status, C = cn(h, fm), w = S === wo || S === To;
          return /* @__PURE__ */ p.createElement(t, et({}, m, {
            key: C.key,
            visible: w,
            eventProps: C,
            onVisibleChanged: function(E) {
              f == null || f(E, {
                key: C.key
              }), E || l.removeKey(C.key);
            }
          }), function(b, E) {
            return d(F(F({}, b), {}, {
              index: T
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, u = s.keyEntities, d = ko(c), f = um(u, d);
        return {
          keyEntities: f.filter(function(g) {
            var y = u.find(function(m) {
              var h = m.key;
              return g.key === h;
            });
            return !(y && y.status === La && g.status === Ao);
          })
        };
      }
    }]), o;
  }(p.Component);
  return Z(n, "defaultProps", {
    component: "div"
  }), n;
}
const mm = pm(Al);
function gm(e) {
  const {
    children: t
  } = e, [, n] = Un(), {
    motion: r
  } = n, a = p.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ p.createElement(Qp, {
    motion: r
  }, t) : t;
}
const Rl = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Hn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
K.env.NODE_ENV !== "production" && (Rl.displayName = "PropWarning");
const vm = K.env.NODE_ENV !== "production" ? Rl : () => null;
var ym = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let No = !1;
const bm = K.env.NODE_ENV !== "production" ? (e) => {
  K.env.NODE_ENV !== "production" && pa(!No, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), xm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let ea, Ml, Ol, Il;
function zr() {
  return ea || bo;
}
function Cm() {
  return Ml || mi;
}
function Sm(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Em = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: a
  } = e;
  t !== void 0 && (ea = t), n !== void 0 && (Ml = n), "holderRender" in e && (Il = a), r && (Sm(r) ? (K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mp(zr(), r)) : Ol = r);
}, jl = () => ({
  getPrefixCls: (e, t) => t || (e ? `${zr()}-${e}` : zr()),
  getIconPrefixCls: Cm,
  getRootPrefixCls: () => ea || zr(),
  getTheme: () => Ol,
  holderRender: Il
}), wm = (e) => {
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
    parentContext: T,
    iconPrefixCls: S,
    theme: C,
    componentDisabled: w,
    segmented: b,
    statistic: E,
    spin: k,
    calendar: N,
    carousel: M,
    cascader: j,
    collapse: _,
    typography: z,
    checkbox: $,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: A,
    steps: R,
    image: I,
    layout: L,
    list: O,
    mentions: H,
    modal: G,
    progress: Q,
    result: B,
    slider: te,
    breadcrumb: ie,
    menu: Ee,
    pagination: we,
    input: Se,
    textArea: Ie,
    empty: Te,
    badge: je,
    radio: V,
    rate: _e,
    switch: ve,
    transfer: Ve,
    avatar: qe,
    message: dt,
    tag: pe,
    table: de,
    card: Re,
    tabs: ft,
    timeline: Le,
    timePicker: Xe,
    upload: Gt,
    notification: ya,
    tree: ba,
    colorPicker: ne,
    datePicker: fe,
    rangePicker: De,
    flex: br,
    wave: wi,
    dropdown: Ru,
    warning: Mu,
    tour: Ou,
    floatButtonGroup: Iu,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  } = e, Ti = p.useCallback((ye, ke) => {
    const {
      prefixCls: ht
    } = e;
    if (ke)
      return ke;
    const pt = ht || T.getPrefixCls("");
    return ye ? `${pt}-${ye}` : pt;
  }, [T.getPrefixCls, e.prefixCls]), Vn = S || T.iconPrefixCls || mi, Wn = n || T.csp;
  bl(Vn, Wn);
  const xr = Gp(C, T.theme, {
    prefixCls: Ti("")
  });
  K.env.NODE_ENV !== "production" && (No = No || !!xr);
  const xa = {
    csp: Wn,
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
    getPrefixCls: Ti,
    iconPrefixCls: Vn,
    theme: xr,
    segmented: b,
    statistic: E,
    spin: k,
    calendar: N,
    carousel: M,
    cascader: j,
    collapse: _,
    typography: z,
    checkbox: $,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: A,
    steps: R,
    image: I,
    input: Se,
    textArea: Ie,
    layout: L,
    list: O,
    mentions: H,
    modal: G,
    progress: Q,
    result: B,
    slider: te,
    breadcrumb: ie,
    menu: Ee,
    pagination: we,
    empty: Te,
    badge: je,
    radio: V,
    rate: _e,
    switch: ve,
    transfer: Ve,
    avatar: qe,
    message: dt,
    tag: pe,
    table: de,
    card: Re,
    tabs: ft,
    timeline: Le,
    timePicker: Xe,
    upload: Gt,
    notification: ya,
    tree: ba,
    colorPicker: ne,
    datePicker: fe,
    rangePicker: De,
    flex: br,
    wave: wi,
    dropdown: Ru,
    warning: Mu,
    tour: Ou,
    floatButtonGroup: Iu,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  };
  K.env.NODE_ENV !== "production" && Hn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const hn = Object.assign({}, T);
  Object.keys(xa).forEach((ye) => {
    xa[ye] !== void 0 && (hn[ye] = xa[ye]);
  }), xm.forEach((ye) => {
    const ke = e[ye];
    ke && (hn[ye] = ke);
  }), typeof r < "u" && (hn.button = Object.assign({
    autoInsertSpace: r
  }, hn.button));
  const pn = ii(() => hn, hn, (ye, ke) => {
    const ht = Object.keys(ye), pt = Object.keys(ke);
    return ht.length !== pt.length || ht.some((Cr) => ye[Cr] !== ke[Cr]);
  }), Du = p.useMemo(() => ({
    prefixCls: Vn,
    csp: Wn
  }), [Vn, Wn]);
  let Ae = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(vm, {
    dropdownMatchSelectWidth: g
  }), t);
  const Ai = p.useMemo(() => {
    var ye, ke, ht, pt;
    return Oh(((ye = ma.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((ht = (ke = pn.locale) === null || ke === void 0 ? void 0 : ke.Form) === null || ht === void 0 ? void 0 : ht.defaultValidateMessages) || {}, ((pt = pn.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [pn, i == null ? void 0 : i.validateMessages]);
  Object.keys(Ai).length > 0 && (Ae = /* @__PURE__ */ p.createElement(jh.Provider, {
    value: Ai
  }, Ae)), l && (Ae = /* @__PURE__ */ p.createElement(il, {
    locale: l,
    _ANT_MARK__: ol
  }, Ae)), (Vn || Wn) && (Ae = /* @__PURE__ */ p.createElement(hi.Provider, {
    value: Du
  }, Ae)), s && (Ae = /* @__PURE__ */ p.createElement(vp, {
    size: s
  }, Ae)), Ae = /* @__PURE__ */ p.createElement(gm, null, Ae);
  const Fu = p.useMemo(() => {
    const ye = xr || {}, {
      algorithm: ke,
      token: ht,
      components: pt,
      cssVar: Cr
    } = ye, Bu = ym(ye, ["algorithm", "token", "components", "cssVar"]), ki = ke && (!Array.isArray(ke) || ke.length > 0) ? qa(ke) : dl, Ca = {};
    Object.entries(pt || {}).forEach(($u) => {
      let [Hu, Uu] = $u;
      const St = Object.assign({}, Uu);
      "algorithm" in St && (St.algorithm === !0 ? St.theme = ki : (Array.isArray(St.algorithm) || typeof St.algorithm == "function") && (St.theme = qa(St.algorithm)), delete St.algorithm), Ca[Hu] = St;
    });
    const Ni = Object.assign(Object.assign({}, or), ht);
    return Object.assign(Object.assign({}, Bu), {
      theme: ki,
      token: Ni,
      components: Ca,
      override: Object.assign({
        override: Ni
      }, Ca),
      cssVar: Cr
    });
  }, [xr]);
  return C && (Ae = /* @__PURE__ */ p.createElement(fl.Provider, {
    value: Fu
  }, Ae)), pn.warning && (Ae = /* @__PURE__ */ p.createElement(nl.Provider, {
    value: pn.warning
  }, Ae)), w !== void 0 && (Ae = /* @__PURE__ */ p.createElement(gp, {
    disabled: w
  }, Ae)), /* @__PURE__ */ p.createElement(Ut.Provider, {
    value: pn
  }, Ae);
}, fn = (e) => {
  const t = p.useContext(Ut), n = p.useContext(al);
  return /* @__PURE__ */ p.createElement(wm, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
fn.ConfigContext = Ut;
fn.SizeContext = ir;
fn.config = Em;
fn.useConfig = yp;
Object.defineProperty(fn, "SizeContext", {
  get: () => (K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ir)
});
K.env.NODE_ENV !== "production" && (fn.displayName = "ConfigProvider");
var Tm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function _l(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Am(e) {
  return _l(e) instanceof ShadowRoot;
}
function km(e) {
  return Am(e) ? _l(e) : null;
}
function Nm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Pm(e, t) {
  Vt(e, "[@ant-design/icons] ".concat(t));
}
function Ss(e) {
  return ue(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ue(e.icon) === "object" || typeof e.icon == "function");
}
function Es() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Nm(n)] = r;
    }
    return t;
  }, {});
}
function Po(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, F(F({
    key: t
  }, Es(e.attrs)), n), (e.children || []).map(function(r, a) {
    return Po(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, F({
    key: t
  }, Es(e.attrs)), (e.children || []).map(function(r, a) {
    return Po(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ll(e) {
  return ar(e)[0];
}
function Dl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Rm = `
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
`, Mm = function(t) {
  var n = p.useContext(hi), r = n.csp, a = n.prefixCls, o = Rm;
  a && (o = o.replace(/anticon/g, a)), p.useEffect(function() {
    var i = t.current, l = km(i);
    on(o, "@ant-design-icons", {
      prepend: !0,
      csp: r,
      attachTo: l
    });
  }, []);
}, Om = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Zn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Im(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Zn.primaryColor = t, Zn.secondaryColor = n || Ll(t), Zn.calculated = !!n;
}
function jm() {
  return F({}, Zn);
}
var zn = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, s = cn(t, Om), c = p.useRef(), u = Zn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || Ll(i)
  }), Mm(c), Pm(Ss(n), "icon should be icon definiton, but got ".concat(n)), !Ss(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Po(d.icon, "svg-".concat(d.name), F(F({
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
zn.displayName = "IconReact";
zn.getTwoToneColors = jm;
zn.setTwoToneColors = Im;
function Fl(e) {
  var t = Dl(e), n = Y(t, 2), r = n[0], a = n[1];
  return zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function _m() {
  var e = zn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Lm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Fl(Jr.primary);
var Wt = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = cn(e, Lm), u = p.useContext(hi), d = u.prefixCls, f = d === void 0 ? "anticon" : d, g = u.rootClassName, y = Qe(g, f, Z(Z({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), m = i;
  m === void 0 && l && (m = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, T = Dl(s), S = Y(T, 2), C = S[0], w = S[1];
  return /* @__PURE__ */ p.createElement("span", et({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: m,
    onClick: l,
    className: y
  }), /* @__PURE__ */ p.createElement(zn, {
    icon: r,
    primaryColor: C,
    secondaryColor: w,
    style: h
  }));
});
Wt.displayName = "AntdIcon";
Wt.getTwoToneColor = _m;
Wt.setTwoToneColor = Fl;
var Dm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Tm
  }));
}, Bl = /* @__PURE__ */ p.forwardRef(Dm);
K.env.NODE_ENV !== "production" && (Bl.displayName = "CheckCircleFilled");
var Fm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Bm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Fm
  }));
}, $l = /* @__PURE__ */ p.forwardRef(Bm);
K.env.NODE_ENV !== "production" && ($l.displayName = "CloseCircleFilled");
var $m = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Hm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: $m
  }));
}, Hl = /* @__PURE__ */ p.forwardRef(Hm);
K.env.NODE_ENV !== "production" && (Hl.displayName = "CloseOutlined");
var Um = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, zm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Um
  }));
}, Ul = /* @__PURE__ */ p.forwardRef(zm);
K.env.NODE_ENV !== "production" && (Ul.displayName = "ExclamationCircleFilled");
var Vm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Wm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Vm
  }));
}, zl = /* @__PURE__ */ p.forwardRef(Wm);
K.env.NODE_ENV !== "production" && (zl.displayName = "InfoCircleFilled");
var Gm = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Km = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Qm = "".concat(Gm, " ").concat(Km).split(/[\s\n]+/), qm = "aria-", Xm = "data-";
function ws(e, t) {
  return e.indexOf(t) === 0;
}
function Ym(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = F({}, t);
  var r = {};
  return Object.keys(e).forEach(function(a) {
    // Aria
    (n.aria && (a === "role" || ws(a, qm)) || // Data
    n.data && ws(a, Xm) || // Attr
    n.attr && Qm.includes(a)) && (r[a] = e[a]);
  }), r;
}
const Vl = (e) => {
  const [, , , , t] = Un();
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
}, Wl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, a = e.className, o = e.duration, i = o === void 0 ? 4.5 : o, l = e.showProgress, s = e.pauseOnHover, c = s === void 0 ? !0 : s, u = e.eventKey, d = e.content, f = e.closable, g = e.closeIcon, y = g === void 0 ? "x" : g, m = e.props, h = e.onClick, T = e.onNoticeClose, S = e.times, C = e.hovering, w = p.useState(!1), b = Y(w, 2), E = b[0], k = b[1], N = p.useState(0), M = Y(N, 2), j = M[0], _ = M[1], z = p.useState(0), $ = Y(z, 2), D = $[0], W = $[1], P = C || E, A = i > 0 && l, R = function() {
    T(u);
  }, I = function(B) {
    (B.key === "Enter" || B.code === "Enter" || B.keyCode === X.ENTER) && R();
  };
  p.useEffect(function() {
    if (!P && i > 0) {
      var Q = Date.now() - D, B = setTimeout(function() {
        R();
      }, i * 1e3 - D);
      return function() {
        c && clearTimeout(B), W(Date.now() - Q);
      };
    }
  }, [i, P, S]), p.useEffect(function() {
    if (!P && A && (c || D === 0)) {
      var Q = performance.now(), B, te = function ie() {
        cancelAnimationFrame(B), B = requestAnimationFrame(function(Ee) {
          var we = Ee + D - Q, Se = Math.min(we / (i * 1e3), 1);
          _(Se * 100), Se < 1 && ie();
        });
      };
      return te(), function() {
        c && cancelAnimationFrame(B);
      };
    }
  }, [i, D, P, A, S]);
  var L = p.useMemo(function() {
    return ue(f) === "object" && f !== null ? f : f ? {
      closeIcon: y
    } : {};
  }, [f, y]), O = Ym(L, !0), H = 100 - (!j || j < 0 ? 0 : j > 100 ? 100 : j), G = "".concat(n, "-notice");
  return /* @__PURE__ */ p.createElement("div", et({}, m, {
    ref: t,
    className: Qe(G, a, Z({}, "".concat(G, "-closable"), f)),
    style: r,
    onMouseEnter: function(B) {
      var te;
      k(!0), m == null || (te = m.onMouseEnter) === null || te === void 0 || te.call(m, B);
    },
    onMouseLeave: function(B) {
      var te;
      k(!1), m == null || (te = m.onMouseLeave) === null || te === void 0 || te.call(m, B);
    },
    onClick: h
  }), /* @__PURE__ */ p.createElement("div", {
    className: "".concat(G, "-content")
  }, d), f && /* @__PURE__ */ p.createElement("a", et({
    tabIndex: 0,
    className: "".concat(G, "-close"),
    onKeyDown: I,
    "aria-label": "Close"
  }, O, {
    onClick: function(B) {
      B.preventDefault(), B.stopPropagation(), R();
    }
  }), L.closeIcon), A && /* @__PURE__ */ p.createElement("progress", {
    className: "".concat(G, "-progress"),
    max: "100",
    value: H
  }, H + "%"));
}), Gl = /* @__PURE__ */ q.createContext({}), Zm = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ q.createElement(Gl.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, Ts = 8, As = 3, ks = 16, Jm = function(t) {
  var n = {
    offset: Ts,
    threshold: As,
    gap: ks
  };
  if (t && ue(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : Ts, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : As, n.gap = (o = t.gap) !== null && o !== void 0 ? o : ks;
  }
  return [!!t, n];
}, eg = ["className", "style", "classNames", "styles"], Kl = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, i = t.style, l = t.motion, s = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, d = p.useContext(Gl), f = d.classNames, g = p.useRef({}), y = p.useState(null), m = Y(y, 2), h = m[0], T = m[1], S = p.useState([]), C = Y(S, 2), w = C[0], b = C[1], E = n.map(function(P) {
    return {
      config: P,
      key: String(P.key)
    };
  }), k = Jm(u), N = Y(k, 2), M = N[0], j = N[1], _ = j.offset, z = j.threshold, $ = j.gap, D = M && (w.length > 0 || E.length <= z), W = typeof l == "function" ? l(r) : l;
  return p.useEffect(function() {
    M && w.length > 1 && b(function(P) {
      return P.filter(function(A) {
        return E.some(function(R) {
          var I = R.key;
          return A === I;
        });
      });
    });
  }, [w, E, M]), p.useEffect(function() {
    var P;
    if (M && g.current[(P = E[E.length - 1]) === null || P === void 0 ? void 0 : P.key]) {
      var A;
      T(g.current[(A = E[E.length - 1]) === null || A === void 0 ? void 0 : A.key]);
    }
  }, [E, M]), /* @__PURE__ */ q.createElement(mm, et({
    key: r,
    className: Qe(a, "".concat(a, "-").concat(r), f == null ? void 0 : f.list, o, Z(Z({}, "".concat(a, "-stack"), !!M), "".concat(a, "-stack-expanded"), D)),
    style: i,
    keys: E,
    motionAppear: !0
  }, W, {
    onAllRemoved: function() {
      s(r);
    }
  }), function(P, A) {
    var R = P.config, I = P.className, L = P.style, O = P.index, H = R, G = H.key, Q = H.times, B = String(G), te = R, ie = te.className, Ee = te.style, we = te.classNames, Se = te.styles, Ie = cn(te, eg), Te = E.findIndex(function(Le) {
      return Le.key === B;
    }), je = {};
    if (M) {
      var V = E.length - 1 - (Te > -1 ? Te : O - 1), _e = r === "top" || r === "bottom" ? "-50%" : "0";
      if (V > 0) {
        var ve, Ve, qe;
        je.height = D ? (ve = g.current[B]) === null || ve === void 0 ? void 0 : ve.offsetHeight : h == null ? void 0 : h.offsetHeight;
        for (var dt = 0, pe = 0; pe < V; pe++) {
          var de;
          dt += ((de = g.current[E[E.length - 1 - pe].key]) === null || de === void 0 ? void 0 : de.offsetHeight) + $;
        }
        var Re = (D ? dt : V * _) * (r.startsWith("top") ? 1 : -1), ft = !D && h !== null && h !== void 0 && h.offsetWidth && (Ve = g.current[B]) !== null && Ve !== void 0 && Ve.offsetWidth ? ((h == null ? void 0 : h.offsetWidth) - _ * 2 * (V < 3 ? V : 3)) / ((qe = g.current[B]) === null || qe === void 0 ? void 0 : qe.offsetWidth) : 1;
        je.transform = "translate3d(".concat(_e, ", ").concat(Re, "px, 0) scaleX(").concat(ft, ")");
      } else
        je.transform = "translate3d(".concat(_e, ", 0, 0)");
    }
    return /* @__PURE__ */ q.createElement("div", {
      ref: A,
      className: Qe("".concat(a, "-notice-wrapper"), I, we == null ? void 0 : we.wrapper),
      style: F(F(F({}, L), je), Se == null ? void 0 : Se.wrapper),
      onMouseEnter: function() {
        return b(function(Xe) {
          return Xe.includes(B) ? Xe : [].concat(ze(Xe), [B]);
        });
      },
      onMouseLeave: function() {
        return b(function(Xe) {
          return Xe.filter(function(Gt) {
            return Gt !== B;
          });
        });
      }
    }, /* @__PURE__ */ q.createElement(Wl, et({}, Ie, {
      ref: function(Xe) {
        Te > -1 ? g.current[B] = Xe : delete g.current[B];
      },
      prefixCls: a,
      classNames: we,
      styles: Se,
      className: Qe(ie, f == null ? void 0 : f.notice),
      style: Ee,
      times: Q,
      key: G,
      eventKey: G,
      onNoticeClose: c,
      hovering: M && w.length > 0
    })));
  });
};
K.env.NODE_ENV !== "production" && (Kl.displayName = "NoticeList");
var Ql = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e.container, o = e.motion, i = e.maxCount, l = e.className, s = e.style, c = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = p.useState([]), g = Y(f, 2), y = g[0], m = g[1], h = function(M) {
    var j, _ = y.find(function(z) {
      return z.key === M;
    });
    _ == null || (j = _.onClose) === null || j === void 0 || j.call(_), m(function(z) {
      return z.filter(function($) {
        return $.key !== M;
      });
    });
  };
  p.useImperativeHandle(t, function() {
    return {
      open: function(M) {
        m(function(j) {
          var _ = ze(j), z = _.findIndex(function(W) {
            return W.key === M.key;
          }), $ = F({}, M);
          if (z >= 0) {
            var D;
            $.times = (((D = j[z]) === null || D === void 0 ? void 0 : D.times) || 0) + 1, _[z] = $;
          } else
            $.times = 0, _.push($);
          return i > 0 && _.length > i && (_ = _.slice(-i)), _;
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
  var T = p.useState({}), S = Y(T, 2), C = S[0], w = S[1];
  p.useEffect(function() {
    var N = {};
    y.forEach(function(M) {
      var j = M.placement, _ = j === void 0 ? "topRight" : j;
      _ && (N[_] = N[_] || [], N[_].push(M));
    }), Object.keys(C).forEach(function(M) {
      N[M] = N[M] || [];
    }), w(N);
  }, [y]);
  var b = function(M) {
    w(function(j) {
      var _ = F({}, j), z = _[M] || [];
      return z.length || delete _[M], _;
    });
  }, E = p.useRef(!1);
  if (p.useEffect(function() {
    Object.keys(C).length > 0 ? E.current = !0 : E.current && (c == null || c(), E.current = !1);
  }, [C]), !a)
    return null;
  var k = Object.keys(C);
  return /* @__PURE__ */ Zo.createPortal(/* @__PURE__ */ p.createElement(p.Fragment, null, k.map(function(N) {
    var M = C[N], j = /* @__PURE__ */ p.createElement(Kl, {
      key: N,
      configList: M,
      placement: N,
      prefixCls: r,
      className: l == null ? void 0 : l(N),
      style: s == null ? void 0 : s(N),
      motion: o,
      onNoticeClose: h,
      onAllNoticeRemoved: b,
      stack: u
    });
    return d ? d(j, {
      prefixCls: r,
      key: N
    }) : j;
  })), a);
});
K.env.NODE_ENV !== "production" && (Ql.displayName = "Notifications");
var tg = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], ng = function() {
  return document.body;
}, Ns = 0;
function rg() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(o) {
      var i = a[o];
      i !== void 0 && (e[o] = i);
    });
  }), e;
}
function ag() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? ng : t, r = e.motion, a = e.prefixCls, o = e.maxCount, i = e.className, l = e.style, s = e.onAllRemoved, c = e.stack, u = e.renderNotifications, d = cn(e, tg), f = p.useState(), g = Y(f, 2), y = g[0], m = g[1], h = p.useRef(), T = /* @__PURE__ */ p.createElement(Ql, {
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
  }), S = p.useState([]), C = Y(S, 2), w = C[0], b = C[1], E = p.useMemo(function() {
    return {
      open: function(N) {
        var M = rg(d, N);
        (M.key === null || M.key === void 0) && (M.key = "rc-notification-".concat(Ns), Ns += 1), b(function(j) {
          return [].concat(ze(j), [{
            type: "open",
            config: M
          }]);
        });
      },
      close: function(N) {
        b(function(M) {
          return [].concat(ze(M), [{
            type: "close",
            key: N
          }]);
        });
      },
      destroy: function() {
        b(function(N) {
          return [].concat(ze(N), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return p.useEffect(function() {
    m(n());
  }), p.useEffect(function() {
    h.current && w.length && (w.forEach(function(k) {
      switch (k.type) {
        case "open":
          h.current.open(k.config);
          break;
        case "close":
          h.current.close(k.key);
          break;
        case "destroy":
          h.current.destroy();
          break;
      }
    }), b(function(k) {
      return k.filter(function(N) {
        return !w.includes(N);
      });
    }));
  }, [w]), [E, T];
}
const ql = /* @__PURE__ */ q.createContext(void 0);
K.env.NODE_ENV !== "production" && (ql.displayName = "zIndexContext");
const kt = 100, og = 10, Xl = kt * og, ig = Xl + kt, Yl = {
  Modal: kt,
  Drawer: kt,
  Popover: kt,
  Popconfirm: kt,
  Tooltip: kt,
  Tour: kt,
  FloatButton: kt
}, sg = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function cg(e) {
  return e in Yl;
}
const ny = (e, t) => {
  const [, n] = Un(), r = q.useContext(ql), a = cg(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Yl[e] : i += sg[e], o = [r === void 0 ? t : i, i];
  }
  if (K.env.NODE_ENV !== "production") {
    const i = Hn(e), l = n.zIndexPopupBase + ig, s = o[0] || 0;
    K.env.NODE_ENV !== "production" && i(t !== void 0 || s <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return o;
};
function sr() {
  sr = function() {
    return t;
  };
  var e, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = Object.defineProperty || function(P, A, R) {
    P[A] = R.value;
  }, o = typeof Symbol == "function" ? Symbol : {}, i = o.iterator || "@@iterator", l = o.asyncIterator || "@@asyncIterator", s = o.toStringTag || "@@toStringTag";
  function c(P, A, R) {
    return Object.defineProperty(P, A, {
      value: R,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), P[A];
  }
  try {
    c({}, "");
  } catch {
    c = function(R, I, L) {
      return R[I] = L;
    };
  }
  function u(P, A, R, I) {
    var L = A && A.prototype instanceof T ? A : T, O = Object.create(L.prototype), H = new D(I || []);
    return a(O, "_invoke", {
      value: j(P, R, H)
    }), O;
  }
  function d(P, A, R) {
    try {
      return {
        type: "normal",
        arg: P.call(A, R)
      };
    } catch (I) {
      return {
        type: "throw",
        arg: I
      };
    }
  }
  t.wrap = u;
  var f = "suspendedStart", g = "suspendedYield", y = "executing", m = "completed", h = {};
  function T() {
  }
  function S() {
  }
  function C() {
  }
  var w = {};
  c(w, i, function() {
    return this;
  });
  var b = Object.getPrototypeOf, E = b && b(b(W([])));
  E && E !== n && r.call(E, i) && (w = E);
  var k = C.prototype = T.prototype = Object.create(w);
  function N(P) {
    ["next", "throw", "return"].forEach(function(A) {
      c(P, A, function(R) {
        return this._invoke(A, R);
      });
    });
  }
  function M(P, A) {
    function R(L, O, H, G) {
      var Q = d(P[L], P, O);
      if (Q.type !== "throw") {
        var B = Q.arg, te = B.value;
        return te && ue(te) == "object" && r.call(te, "__await") ? A.resolve(te.__await).then(function(ie) {
          R("next", ie, H, G);
        }, function(ie) {
          R("throw", ie, H, G);
        }) : A.resolve(te).then(function(ie) {
          B.value = ie, H(B);
        }, function(ie) {
          return R("throw", ie, H, G);
        });
      }
      G(Q.arg);
    }
    var I;
    a(this, "_invoke", {
      value: function(O, H) {
        function G() {
          return new A(function(Q, B) {
            R(O, H, Q, B);
          });
        }
        return I = I ? I.then(G, G) : G();
      }
    });
  }
  function j(P, A, R) {
    var I = f;
    return function(L, O) {
      if (I === y) throw Error("Generator is already running");
      if (I === m) {
        if (L === "throw") throw O;
        return {
          value: e,
          done: !0
        };
      }
      for (R.method = L, R.arg = O; ; ) {
        var H = R.delegate;
        if (H) {
          var G = _(H, R);
          if (G) {
            if (G === h) continue;
            return G;
          }
        }
        if (R.method === "next") R.sent = R._sent = R.arg;
        else if (R.method === "throw") {
          if (I === f) throw I = m, R.arg;
          R.dispatchException(R.arg);
        } else R.method === "return" && R.abrupt("return", R.arg);
        I = y;
        var Q = d(P, A, R);
        if (Q.type === "normal") {
          if (I = R.done ? m : g, Q.arg === h) continue;
          return {
            value: Q.arg,
            done: R.done
          };
        }
        Q.type === "throw" && (I = m, R.method = "throw", R.arg = Q.arg);
      }
    };
  }
  function _(P, A) {
    var R = A.method, I = P.iterator[R];
    if (I === e) return A.delegate = null, R === "throw" && P.iterator.return && (A.method = "return", A.arg = e, _(P, A), A.method === "throw") || R !== "return" && (A.method = "throw", A.arg = new TypeError("The iterator does not provide a '" + R + "' method")), h;
    var L = d(I, P.iterator, A.arg);
    if (L.type === "throw") return A.method = "throw", A.arg = L.arg, A.delegate = null, h;
    var O = L.arg;
    return O ? O.done ? (A[P.resultName] = O.value, A.next = P.nextLoc, A.method !== "return" && (A.method = "next", A.arg = e), A.delegate = null, h) : O : (A.method = "throw", A.arg = new TypeError("iterator result is not an object"), A.delegate = null, h);
  }
  function z(P) {
    var A = {
      tryLoc: P[0]
    };
    1 in P && (A.catchLoc = P[1]), 2 in P && (A.finallyLoc = P[2], A.afterLoc = P[3]), this.tryEntries.push(A);
  }
  function $(P) {
    var A = P.completion || {};
    A.type = "normal", delete A.arg, P.completion = A;
  }
  function D(P) {
    this.tryEntries = [{
      tryLoc: "root"
    }], P.forEach(z, this), this.reset(!0);
  }
  function W(P) {
    if (P || P === "") {
      var A = P[i];
      if (A) return A.call(P);
      if (typeof P.next == "function") return P;
      if (!isNaN(P.length)) {
        var R = -1, I = function L() {
          for (; ++R < P.length; ) if (r.call(P, R)) return L.value = P[R], L.done = !1, L;
          return L.value = e, L.done = !0, L;
        };
        return I.next = I;
      }
    }
    throw new TypeError(ue(P) + " is not iterable");
  }
  return S.prototype = C, a(k, "constructor", {
    value: C,
    configurable: !0
  }), a(C, "constructor", {
    value: S,
    configurable: !0
  }), S.displayName = c(C, s, "GeneratorFunction"), t.isGeneratorFunction = function(P) {
    var A = typeof P == "function" && P.constructor;
    return !!A && (A === S || (A.displayName || A.name) === "GeneratorFunction");
  }, t.mark = function(P) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(P, C) : (P.__proto__ = C, c(P, s, "GeneratorFunction")), P.prototype = Object.create(k), P;
  }, t.awrap = function(P) {
    return {
      __await: P
    };
  }, N(M.prototype), c(M.prototype, l, function() {
    return this;
  }), t.AsyncIterator = M, t.async = function(P, A, R, I, L) {
    L === void 0 && (L = Promise);
    var O = new M(u(P, A, R, I), L);
    return t.isGeneratorFunction(A) ? O : O.next().then(function(H) {
      return H.done ? H.value : O.next();
    });
  }, N(k), c(k, s, "Generator"), c(k, i, function() {
    return this;
  }), c(k, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(P) {
    var A = Object(P), R = [];
    for (var I in A) R.push(I);
    return R.reverse(), function L() {
      for (; R.length; ) {
        var O = R.pop();
        if (O in A) return L.value = O, L.done = !1, L;
      }
      return L.done = !0, L;
    };
  }, t.values = W, D.prototype = {
    constructor: D,
    reset: function(A) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach($), !A) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
    },
    stop: function() {
      this.done = !0;
      var A = this.tryEntries[0].completion;
      if (A.type === "throw") throw A.arg;
      return this.rval;
    },
    dispatchException: function(A) {
      if (this.done) throw A;
      var R = this;
      function I(B, te) {
        return H.type = "throw", H.arg = A, R.next = B, te && (R.method = "next", R.arg = e), !!te;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var O = this.tryEntries[L], H = O.completion;
        if (O.tryLoc === "root") return I("end");
        if (O.tryLoc <= this.prev) {
          var G = r.call(O, "catchLoc"), Q = r.call(O, "finallyLoc");
          if (G && Q) {
            if (this.prev < O.catchLoc) return I(O.catchLoc, !0);
            if (this.prev < O.finallyLoc) return I(O.finallyLoc);
          } else if (G) {
            if (this.prev < O.catchLoc) return I(O.catchLoc, !0);
          } else {
            if (!Q) throw Error("try statement without catch or finally");
            if (this.prev < O.finallyLoc) return I(O.finallyLoc);
          }
        }
      }
    },
    abrupt: function(A, R) {
      for (var I = this.tryEntries.length - 1; I >= 0; --I) {
        var L = this.tryEntries[I];
        if (L.tryLoc <= this.prev && r.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var O = L;
          break;
        }
      }
      O && (A === "break" || A === "continue") && O.tryLoc <= R && R <= O.finallyLoc && (O = null);
      var H = O ? O.completion : {};
      return H.type = A, H.arg = R, O ? (this.method = "next", this.next = O.finallyLoc, h) : this.complete(H);
    },
    complete: function(A, R) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && R && (this.next = R), h;
    },
    finish: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var I = this.tryEntries[R];
        if (I.finallyLoc === A) return this.complete(I.completion, I.afterLoc), $(I), h;
      }
    },
    catch: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var I = this.tryEntries[R];
        if (I.tryLoc === A) {
          var L = I.completion;
          if (L.type === "throw") {
            var O = L.arg;
            $(I);
          }
          return O;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(A, R, I) {
      return this.delegate = {
        iterator: W(A),
        resultName: R,
        nextLoc: I
      }, this.method === "next" && (this.arg = e), h;
    }
  }, t;
}
function Ps(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a);
}
function Zl(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(s) {
        Ps(o, r, a, i, l, "next", s);
      }
      function l(s) {
        Ps(o, r, a, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var gr = F({}, Yu), lg = gr.version, ug = gr.render, dg = gr.unmountComponentAtNode, ga;
try {
  var fg = Number((lg || "").split(".")[0]);
  fg >= 18 && (ga = gr.createRoot);
} catch {
}
function Rs(e) {
  var t = gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ue(t) === "object" && (t.usingClientEntryPoint = e);
}
var ta = "__rc_react_root__";
function hg(e, t) {
  Rs(!0);
  var n = t[ta] || ga(t);
  Rs(!1), n.render(e), t[ta] = n;
}
function pg(e, t) {
  ug(e, t);
}
function mg(e, t) {
  if (ga) {
    hg(e, t);
    return;
  }
  pg(e, t);
}
function gg(e) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = Zl(/* @__PURE__ */ sr().mark(function e(t) {
    return sr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[ta]) === null || a === void 0 || a.unmount(), delete t[ta];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ro.apply(this, arguments);
}
function vg(e) {
  dg(e);
}
function ry(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Zl(/* @__PURE__ */ sr().mark(function e(t) {
    return sr().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (ga === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", gg(t));
        case 2:
          vg(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Mo.apply(this, arguments);
}
const yg = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, a = `${t}-notice`, o = new qn("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new qn("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), l = new qn("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), s = new qn("antNotificationLeftFadeIn", {
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
}, bg = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], xg = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, Cg = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [xg[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, Sg = (e) => {
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
}, Eg = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, wg = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `all ${e.motionDurationSlow}, backdrop-filter 0s`,
        position: "absolute"
      }, Sg(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, Eg(e))
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
  }, bg.map((n) => Cg(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, Jl = (e) => {
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
    fontSize: T,
    lineHeight: S,
    width: C,
    notificationIconSize: w,
    colorText: b
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
      fontSize: T,
      color: b
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
      fontSize: T
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
    }, $p(e)),
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
}, Tg = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: a,
    motionEaseInOut: o
  } = e, i = `${t}-notice`, l = new qn("antNotificationFadeOut", {
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
      [t]: Object.assign(Object.assign({}, _p(e)), {
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
        [`${i}-wrapper`]: Object.assign({}, Jl(e))
      }
    }
  ];
}, eu = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Xl + 50,
  width: 384
}), tu = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return gi(e, {
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
}, nu = Hp("Notification", (e) => {
  const t = tu(e);
  return [Tg(t), yg(t), wg(t)];
}, eu), Ag = Up(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = tu(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, Jl(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${Ht(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, eu);
var kg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function yi(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ p.createElement(Hl, {
    className: `${e}-close-icon`
  });
}
const Ng = {
  success: Bl,
  info: zl,
  error: $l,
  warning: Ul
}, ru = (e) => {
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
  }, n) : r && (s = /* @__PURE__ */ p.createElement(Ng[r] || null, {
    className: Qe(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ p.createElement("div", {
    className: Qe({
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
}, Pg = (e) => {
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
  } = e, d = kg(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "closable", "closeIcon", "className"]), {
    getPrefixCls: f
  } = p.useContext(Ut), g = t || f("notification"), y = `${g}-notice`, m = Vl(g), [h, T, S] = nu(g, m);
  return h(/* @__PURE__ */ p.createElement("div", {
    className: Qe(`${y}-pure-panel`, T, n, S, m)
  }, /* @__PURE__ */ p.createElement(Ag, {
    prefixCls: g
  }), /* @__PURE__ */ p.createElement(Wl, Object.assign({}, d, {
    prefixCls: g,
    eventKey: "pure",
    duration: null,
    closable: s,
    className: Qe({
      notificationClassName: u
    }),
    closeIcon: yi(g, c),
    content: /* @__PURE__ */ p.createElement(ru, {
      prefixCls: y,
      icon: r,
      type: a,
      message: o,
      description: i,
      btn: l
    })
  }))));
};
function Rg(e, t, n) {
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
function Mg(e) {
  return {
    motionName: `${e}-fade`
  };
}
var Og = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const Ms = 24, Ig = 4.5, jg = "topRight", _g = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = Vl(n), [a, o, i] = nu(n, r);
  return a(/* @__PURE__ */ q.createElement(Zm, {
    classNames: {
      list: Qe(o, i, r)
    }
  }, t));
}, Lg = (e, t) => {
  let {
    prefixCls: n,
    key: r
  } = t;
  return /* @__PURE__ */ q.createElement(_g, {
    prefixCls: n,
    key: r
  }, e);
}, Dg = /* @__PURE__ */ q.forwardRef((e, t) => {
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
  } = p.useContext(Ut), [, T] = Un(), S = a || g("notification"), C = (N) => Rg(N, n ?? Ms, r ?? Ms), w = () => Qe({
    [`${S}-rtl`]: l ?? h === "rtl"
  }), b = () => Mg(S), [E, k] = ag({
    prefixCls: S,
    style: C,
    className: w,
    motion: b,
    closable: !0,
    closeIcon: yi(S),
    duration: u ?? Ig,
    getContainer: () => (o == null ? void 0 : o()) || (y == null ? void 0 : y()) || document.body,
    maxCount: i,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: s,
    renderNotifications: Lg,
    stack: c === !1 ? !1 : {
      threshold: typeof c == "object" ? c == null ? void 0 : c.threshold : void 0,
      offset: 8,
      gap: T.margin
    }
  });
  return q.useImperativeHandle(t, () => Object.assign(Object.assign({}, E), {
    prefixCls: S,
    notification: m
  })), k;
});
function au(e) {
  const t = q.useRef(null), n = Hn("Notification");
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
        type: T,
        btn: S,
        className: C,
        style: w,
        role: b = "alert",
        closeIcon: E,
        closable: k
      } = s, N = Og(s, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), M = yi(g, typeof E < "u" ? E : f == null ? void 0 : f.closeIcon);
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e == null ? void 0 : e.placement) !== null && c !== void 0 ? c : jg
      }, N), {
        content: /* @__PURE__ */ q.createElement(ru, {
          prefixCls: g,
          icon: h,
          type: T,
          message: y,
          description: m,
          btn: S,
          role: b
        }),
        className: Qe(T && `${g}-${T}`, C, f == null ? void 0 : f.className),
        style: Object.assign(Object.assign({}, f == null ? void 0 : f.style), w),
        closeIcon: M,
        closable: k ?? !!M
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
  }, []), /* @__PURE__ */ q.createElement(Dg, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function Fg(e) {
  return au(e);
}
const Bg = /* @__PURE__ */ q.createContext({});
let it = null, Vr = (e) => e(), na = [], cr = {};
function Os() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: a,
    showProgress: o,
    pauseOnHover: i
  } = cr, l = (e == null ? void 0 : e()) || document.body;
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
const $g = /* @__PURE__ */ q.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: a
  } = p.useContext(Ut), o = cr.prefixCls || a("notification"), i = p.useContext(Bg), [l, s] = au(Object.assign(Object.assign(Object.assign({}, n), {
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
}), Hg = /* @__PURE__ */ q.forwardRef((e, t) => {
  const [n, r] = q.useState(Os), a = () => {
    r(Os);
  };
  q.useEffect(a, []);
  const o = jl(), i = o.getRootPrefixCls(), l = o.getIconPrefixCls(), s = o.getTheme(), c = /* @__PURE__ */ q.createElement($g, {
    ref: t,
    sync: a,
    notificationConfig: n
  });
  return /* @__PURE__ */ q.createElement(fn, {
    prefixCls: i,
    iconPrefixCls: l,
    theme: s
  }, o.holderRender ? o.holderRender(c) : c);
});
function bi() {
  if (!it) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    it = t, Vr(() => {
      mg(/* @__PURE__ */ q.createElement(Hg, {
        ref: (n) => {
          const {
            instance: r,
            sync: a
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = a, bi());
          });
        }
      }), e);
    });
    return;
  }
  it.instance && (na.forEach((e) => {
    switch (e.type) {
      case "open": {
        Vr(() => {
          it.instance.open(Object.assign(Object.assign({}, cr), e.config));
        });
        break;
      }
      case "destroy":
        Vr(() => {
          it == null || it.instance.destroy(e.key);
        });
        break;
    }
  }), na = []);
}
function Ug(e) {
  cr = Object.assign(Object.assign({}, cr), e), Vr(() => {
    var t;
    (t = it == null ? void 0 : it.sync) === null || t === void 0 || t.call(it);
  });
}
function ou(e) {
  const t = jl();
  K.env.NODE_ENV !== "production" && !t.holderRender && bm("notification"), na.push({
    type: "open",
    config: e
  }), bi();
}
const zg = (e) => {
  na.push({
    type: "destroy",
    key: e
  }), bi();
}, Vg = ["success", "info", "warning", "error"], Wg = {
  open: ou,
  destroy: zg,
  config: Ug,
  useNotification: Fg,
  _InternalPanelDoNotUseOrYouWillBeFired: Pg
}, Oo = Wg;
Vg.forEach((e) => {
  Oo[e] = (t) => ou(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
K.env.NODE_ENV;
K.env.NODE_ENV;
const Gg = ({ isOpen: e, onClose: t, className: n, overlayClassName: r, title: a, containerClassName: o, contentClassName: i, children: l, footer: s }) => {
  const c = e ? /* @__PURE__ */ v.jsxs("div", { className: ee(
    "fixed inset-0 z-50 flex items-center justify-center",
    n
  ), children: [
    /* @__PURE__ */ v.jsx("div", { className: ee(
      "fixed inset-0 bg-black/80",
      r
    ) }),
    /* @__PURE__ */ v.jsxs("div", { className: ee(
      "relative z-50 bg-background text-primary rounded-lg max-w-[600px] w-full overflow-hidden",
      o
    ), children: [
      /* @__PURE__ */ v.jsxs("div", { className: ee(
        "flex items-center justify-between py-[14px] px-[20px]",
        "border-b border-[#ebebeb] pb-2"
      ), children: [
        /* @__PURE__ */ v.jsx("p", { children: a }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: t,
            className: "text-[#929292] hover:text-primary/80",
            children: /* @__PURE__ */ v.jsx(ei, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: ee(
        "py-3 px-6",
        i
      ), children: l }),
      s && /* @__PURE__ */ v.jsx("footer", { className: "border-t border-[#ebebeb] py-[18px] px-[24px]", children: s })
    ] })
  ] }) : null;
  if (typeof window < "u")
    return Jn.createPortal(
      c,
      document.body
    );
};
var vr = class {
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
function Je() {
}
function Kg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Io(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function iu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function xn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function st(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Is(e, t) {
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
      if (t.queryHash !== xi(i, t.options))
        return !1;
    } else if (!ur(t.queryKey, i))
      return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if (n === "active" && !s || n === "inactive" && s)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || a && a !== t.state.fetchStatus || o && !o(t));
}
function js(e, t) {
  const { exact: n, status: r, predicate: a, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (lr(t.options.mutationKey) !== lr(o))
        return !1;
    } else if (!ur(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || a && !a(t));
}
function xi(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || lr)(e);
}
function lr(e) {
  return JSON.stringify(
    e,
    (t, n) => Lo(n) ? Object.keys(n).sort().reduce((r, a) => (r[a] = n[a], r), {}) : n
  );
}
function ur(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !ur(e[n], t[n])) : !1;
}
function jo(e, t) {
  if (e === t)
    return e;
  const n = _s(e) && _s(t);
  if (n || Lo(e) && Lo(t)) {
    const r = n ? e : Object.keys(e), a = r.length, o = n ? t : Object.keys(t), i = o.length, l = n ? [] : {};
    let s = 0;
    for (let c = 0; c < i; c++) {
      const u = n ? c : o[c];
      (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (l[u] = void 0, s++) : (l[u] = jo(e[u], t[u]), l[u] === e[u] && e[u] !== void 0 && s++);
    }
    return a === i && s === a ? e : l;
  }
  return t;
}
function _o(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function _s(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Lo(e) {
  if (!Ls(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Ls(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Ls(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Do(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (K.env.NODE_ENV !== "production")
      try {
        return jo(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return jo(e, t);
  }
  return t;
}
function qg(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Xg(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ra = Symbol();
function su(e, t) {
  return K.env.NODE_ENV !== "production" && e.queryFn === ra && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ra ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Xt, Mt, Cn, Vs, Yg = (Vs = class extends vr {
  constructor() {
    super();
    J(this, Xt);
    J(this, Mt);
    J(this, Cn);
    U(this, Cn, (t) => {
      if (!ln && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    x(this, Mt) || this.setEventListener(x(this, Cn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, Mt)) == null || t.call(this), U(this, Mt, void 0));
  }
  setEventListener(t) {
    var n;
    U(this, Cn, t), (n = x(this, Mt)) == null || n.call(this), U(this, Mt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    x(this, Xt) !== t && (U(this, Xt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof x(this, Xt) == "boolean" ? x(this, Xt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Xt = new WeakMap(), Mt = new WeakMap(), Cn = new WeakMap(), Vs), Ci = new Yg(), Sn, Ot, En, Ws, Zg = (Ws = class extends vr {
  constructor() {
    super();
    J(this, Sn, !0);
    J(this, Ot);
    J(this, En);
    U(this, En, (t) => {
      if (!ln && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    x(this, Ot) || this.setEventListener(x(this, En));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = x(this, Ot)) == null || t.call(this), U(this, Ot, void 0));
  }
  setEventListener(t) {
    var n;
    U(this, En, t), (n = x(this, Ot)) == null || n.call(this), U(this, Ot, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    x(this, Sn) !== t && (U(this, Sn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return x(this, Sn);
  }
}, Sn = new WeakMap(), Ot = new WeakMap(), En = new WeakMap(), Ws), aa = new Zg();
function Fo() {
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
function Jg(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function cu(e) {
  return (e ?? "online") === "online" ? aa.isOnline() : !0;
}
var lu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Da(e) {
  return e instanceof lu;
}
function uu(e) {
  let t = !1, n = 0, r = !1, a;
  const o = Fo(), i = (m) => {
    var h;
    r || (f(new lu(m)), (h = e.abort) == null || h.call(e));
  }, l = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, c = () => Ci.isFocused() && (e.networkMode === "always" || aa.isOnline()) && e.canRun(), u = () => cu(e.networkMode) && e.canRun(), d = (m) => {
    var h;
    r || (r = !0, (h = e.onSuccess) == null || h.call(e, m), a == null || a(), o.resolve(m));
  }, f = (m) => {
    var h;
    r || (r = !0, (h = e.onError) == null || h.call(e, m), a == null || a(), o.reject(m));
  }, g = () => new Promise((m) => {
    var h;
    a = (T) => {
      (r || c()) && m(T);
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
    } catch (T) {
      m = Promise.reject(T);
    }
    Promise.resolve(m).then(d).catch((T) => {
      var E;
      if (r)
        return;
      const S = e.retry ?? (ln ? 0 : 3), C = e.retryDelay ?? Jg, w = typeof C == "function" ? C(n, T) : C, b = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, T);
      if (t || !b) {
        f(T);
        return;
      }
      n++, (E = e.onFail) == null || E.call(e, n, T), Qg(w).then(() => c() ? void 0 : g()).then(() => {
        t ? f(T) : y();
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
function e0() {
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
var Ne = e0(), Yt, Gs, du = (Gs = class {
  constructor() {
    J(this, Yt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Io(this.gcTime) && U(this, Yt, setTimeout(() => {
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
    x(this, Yt) && (clearTimeout(x(this, Yt)), U(this, Yt, void 0));
  }
}, Yt = new WeakMap(), Gs), wn, Tn, Ze, Me, dr, Zt, at, Tt, Ks, t0 = (Ks = class extends du {
  constructor(t) {
    super();
    J(this, at);
    J(this, wn);
    J(this, Tn);
    J(this, Ze);
    J(this, Me);
    J(this, dr);
    J(this, Zt);
    U(this, Zt, !1), U(this, dr, t.defaultOptions), this.setOptions(t.options), this.observers = [], U(this, Ze, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, U(this, wn, n0(this.options)), this.state = t.state ?? x(this, wn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = x(this, Me)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...x(this, dr), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && x(this, Ze).remove(this);
  }
  setData(t, n) {
    const r = Do(this.state.data, t, this.options);
    return ae(this, at, Tt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    ae(this, at, Tt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, a;
    const n = (r = x(this, Me)) == null ? void 0 : r.promise;
    return (a = x(this, Me)) == null || a.cancel(t), n ? n.then(Je).catch(Je) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(x(this, wn));
  }
  isActive() {
    return this.observers.some(
      (t) => st(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ra || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !iu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = x(this, Me)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = x(this, Me)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), x(this, Ze).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (x(this, Me) && (x(this, Zt) ? x(this, Me).cancel({ revert: !0 }) : x(this, Me).cancelRetry()), this.scheduleGc()), x(this, Ze).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ae(this, at, Tt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var s, c, u;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (x(this, Me))
        return x(this, Me).continueRetry(), x(this, Me).promise;
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
        get: () => (U(this, Zt, !0), r.signal)
      });
    }, o = () => {
      const d = su(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a(f), U(this, Zt, !1), this.options.persister ? this.options.persister(
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
    ), U(this, Tn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && ae(this, at, Tt).call(this, { type: "fetch", meta: (u = i.fetchOptions) == null ? void 0 : u.meta });
    const l = (d) => {
      var f, g, y, m;
      Da(d) && d.silent || ae(this, at, Tt).call(this, {
        type: "error",
        error: d
      }), Da(d) || ((g = (f = x(this, Ze).config).onError) == null || g.call(
        f,
        d,
        this
      ), (m = (y = x(this, Ze).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return U(this, Me, uu({
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
        (g = (f = x(this, Ze).config).onSuccess) == null || g.call(f, d, this), (m = (y = x(this, Ze).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: l,
      onFail: (d, f) => {
        ae(this, at, Tt).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        ae(this, at, Tt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ae(this, at, Tt).call(this, { type: "continue" });
      },
      retry: i.options.retry,
      retryDelay: i.options.retryDelay,
      networkMode: i.options.networkMode,
      canRun: () => !0
    })), x(this, Me).start();
  }
}, wn = new WeakMap(), Tn = new WeakMap(), Ze = new WeakMap(), Me = new WeakMap(), dr = new WeakMap(), Zt = new WeakMap(), at = new WeakSet(), Tt = function(t) {
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
          ...fu(r.data, this.options),
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
        return Da(a) && a.revert && x(this, Tn) ? { ...x(this, Tn), fetchStatus: "idle" } : {
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
    }), x(this, Ze).notify({ query: this, type: "updated", action: t });
  });
}, Ks);
function fu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: cu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function n0(e) {
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
var gt, Qs, r0 = (Qs = class extends vr {
  constructor(t = {}) {
    super();
    J(this, gt);
    this.config = t, U(this, gt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const a = n.queryKey, o = n.queryHash ?? xi(a, n);
    let i = this.get(o);
    return i || (i = new t0({
      cache: this,
      queryKey: a,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(a)
    }), this.add(i)), i;
  }
  add(t) {
    x(this, gt).has(t.queryHash) || (x(this, gt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = x(this, gt).get(t.queryHash);
    n && (t.destroy(), n === t && x(this, gt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ne.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return x(this, gt).get(t);
  }
  getAll() {
    return [...x(this, gt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Is(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Is(t, r)) : n;
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
}, gt = new WeakMap(), Qs), vt, Fe, Jt, yt, Rt, qs, a0 = (qs = class extends du {
  constructor(t) {
    super();
    J(this, yt);
    J(this, vt);
    J(this, Fe);
    J(this, Jt);
    this.mutationId = t.mutationId, U(this, Fe, t.mutationCache), U(this, vt, []), this.state = t.state || o0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    x(this, vt).includes(t) || (x(this, vt).push(t), this.clearGcTimeout(), x(this, Fe).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    U(this, vt, x(this, vt).filter((n) => n !== t)), this.scheduleGc(), x(this, Fe).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    x(this, vt).length || (this.state.status === "pending" ? this.scheduleGc() : x(this, Fe).remove(this));
  }
  continue() {
    var t;
    return ((t = x(this, Jt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, o, i, l, s, c, u, d, f, g, y, m, h, T, S, C, w, b, E, k;
    U(this, Jt, uu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (N, M) => {
        ae(this, yt, Rt).call(this, { type: "failed", failureCount: N, error: M });
      },
      onPause: () => {
        ae(this, yt, Rt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ae(this, yt, Rt).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => x(this, Fe).canRun(this)
    }));
    const n = this.state.status === "pending", r = !x(this, Jt).canStart();
    try {
      if (!n) {
        ae(this, yt, Rt).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (a = x(this, Fe).config).onMutate) == null ? void 0 : o.call(
          a,
          t,
          this
        ));
        const M = await ((l = (i = this.options).onMutate) == null ? void 0 : l.call(i, t));
        M !== this.state.context && ae(this, yt, Rt).call(this, {
          type: "pending",
          context: M,
          variables: t,
          isPaused: r
        });
      }
      const N = await x(this, Jt).start();
      return await ((c = (s = x(this, Fe).config).onSuccess) == null ? void 0 : c.call(
        s,
        N,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, N, t, this.state.context)), await ((g = (f = x(this, Fe).config).onSettled) == null ? void 0 : g.call(
        f,
        N,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, N, null, t, this.state.context)), ae(this, yt, Rt).call(this, { type: "success", data: N }), N;
    } catch (N) {
      try {
        throw await ((T = (h = x(this, Fe).config).onError) == null ? void 0 : T.call(
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
        )), await ((b = (w = x(this, Fe).config).onSettled) == null ? void 0 : b.call(
          w,
          void 0,
          N,
          this.state.variables,
          this.state.context,
          this
        )), await ((k = (E = this.options).onSettled) == null ? void 0 : k.call(
          E,
          void 0,
          N,
          t,
          this.state.context
        )), N;
      } finally {
        ae(this, yt, Rt).call(this, { type: "error", error: N });
      }
    } finally {
      x(this, Fe).runNext(this);
    }
  }
}, vt = new WeakMap(), Fe = new WeakMap(), Jt = new WeakMap(), yt = new WeakSet(), Rt = function(t) {
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
    x(this, vt).forEach((r) => {
      r.onMutationUpdate(t);
    }), x(this, Fe).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, qs);
function o0() {
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
var Ke, fr, Xs, i0 = (Xs = class extends vr {
  constructor(t = {}) {
    super();
    J(this, Ke);
    J(this, fr);
    this.config = t, U(this, Ke, /* @__PURE__ */ new Map()), U(this, fr, Date.now());
  }
  build(t, n, r) {
    const a = new a0({
      mutationCache: this,
      mutationId: ++Sr(this, fr)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(a), a;
  }
  add(t) {
    const n = jr(t), r = x(this, Ke).get(n) ?? [];
    r.push(t), x(this, Ke).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = jr(t);
    if (x(this, Ke).has(n)) {
      const a = (r = x(this, Ke).get(n)) == null ? void 0 : r.filter((o) => o !== t);
      a && (a.length === 0 ? x(this, Ke).delete(n) : x(this, Ke).set(n, a));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = x(this, Ke).get(jr(t))) == null ? void 0 : r.find((a) => a.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = x(this, Ke).get(jr(t))) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
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
    return [...x(this, Ke).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => js(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => js(t, n));
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
        t.map((n) => n.continue().catch(Je))
      )
    );
  }
}, Ke = new WeakMap(), fr = new WeakMap(), Xs);
function jr(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Ds(e) {
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
        }, T = su(t.options, t.fetchOptions), S = async (C, w, b) => {
          if (m)
            return Promise.reject();
          if (w == null && C.pages.length)
            return Promise.resolve(C);
          const E = {
            queryKey: t.queryKey,
            pageParam: w,
            direction: b ? "backward" : "forward",
            meta: t.options.meta
          };
          h(E);
          const k = await T(
            E
          ), { maxPages: N } = t.options, M = b ? Xg : qg;
          return {
            pages: M(C.pages, k, N),
            pageParams: M(C.pageParams, w, N)
          };
        };
        if (a && o.length) {
          const C = a === "backward", w = C ? s0 : Fs, b = {
            pages: o,
            pageParams: i
          }, E = w(r, b);
          l = await S(b, E, C);
        } else {
          const C = e ?? o.length;
          do {
            const w = s === 0 ? i[0] ?? r.initialPageParam : Fs(r, l);
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
function Fs(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function s0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var ge, It, jt, An, kn, _t, Nn, Pn, Ys, c0 = (Ys = class {
  constructor(e = {}) {
    J(this, ge);
    J(this, It);
    J(this, jt);
    J(this, An);
    J(this, kn);
    J(this, _t);
    J(this, Nn);
    J(this, Pn);
    U(this, ge, e.queryCache || new r0()), U(this, It, e.mutationCache || new i0()), U(this, jt, e.defaultOptions || {}), U(this, An, /* @__PURE__ */ new Map()), U(this, kn, /* @__PURE__ */ new Map()), U(this, _t, 0);
  }
  mount() {
    Sr(this, _t)._++, x(this, _t) === 1 && (U(this, Nn, Ci.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), x(this, ge).onFocus());
    })), U(this, Pn, aa.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), x(this, ge).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Sr(this, _t)._--, x(this, _t) === 0 && ((e = x(this, Nn)) == null || e.call(this), U(this, Nn, void 0), (t = x(this, Pn)) == null || t.call(this), U(this, Pn, void 0));
  }
  isFetching(e) {
    return x(this, ge).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return x(this, It).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = x(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0)
      return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = x(this, ge).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(xn(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return x(this, ge).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), a = x(this, ge).get(
      r.queryHash
    ), o = a == null ? void 0 : a.state.data, i = Kg(t, o);
    if (i !== void 0)
      return x(this, ge).build(this, r).setData(i, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return Ne.batch(
      () => x(this, ge).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = x(this, ge).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = x(this, ge);
    Ne.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = x(this, ge), r = {
      type: "active",
      ...e
    };
    return Ne.batch(() => (n.findAll(e).forEach((a) => {
      a.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = { revert: !0, ...t }, r = Ne.batch(
      () => x(this, ge).findAll(e).map((a) => a.cancel(n))
    );
    return Promise.all(r).then(Je).catch(Je);
  }
  invalidateQueries(e = {}, t = {}) {
    return Ne.batch(() => {
      if (x(this, ge).findAll(e).forEach((r) => {
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
      () => x(this, ge).findAll(e).filter((a) => !a.isDisabled()).map((a) => {
        let o = a.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(Je)), a.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(Je);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = x(this, ge).build(this, t);
    return n.isStaleByTime(
      xn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Je).catch(Je);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ds(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Je).catch(Je);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Ds(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return aa.isOnline() ? x(this, It).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return x(this, ge);
  }
  getMutationCache() {
    return x(this, It);
  }
  getDefaultOptions() {
    return x(this, jt);
  }
  setDefaultOptions(e) {
    U(this, jt, e);
  }
  setQueryDefaults(e, t) {
    x(this, An).set(lr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...x(this, An).values()];
    let n = {};
    return t.forEach((r) => {
      ur(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    x(this, kn).set(lr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...x(this, kn).values()];
    let n = {};
    return t.forEach((r) => {
      ur(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...x(this, jt).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = xi(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ra && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...x(this, jt).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    x(this, ge).clear(), x(this, It).clear();
  }
}, ge = new WeakMap(), It = new WeakMap(), jt = new WeakMap(), An = new WeakMap(), kn = new WeakMap(), _t = new WeakMap(), Nn = new WeakMap(), Pn = new WeakMap(), Ys), Ue, oe, hr, Be, en, Rn, Lt, bt, pr, Mn, On, tn, nn, Dt, In, le, Xn, Bo, $o, Ho, Uo, zo, Vo, Wo, hu, Zs, l0 = (Zs = class extends vr {
  constructor(t, n) {
    super();
    J(this, le);
    J(this, Ue);
    J(this, oe);
    J(this, hr);
    J(this, Be);
    J(this, en);
    J(this, Rn);
    J(this, Lt);
    J(this, bt);
    J(this, pr);
    J(this, Mn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    J(this, On);
    J(this, tn);
    J(this, nn);
    J(this, Dt);
    J(this, In, /* @__PURE__ */ new Set());
    this.options = n, U(this, Ue, t), U(this, bt, null), U(this, Lt, Fo()), this.options.experimental_prefetchInRender || x(this, Lt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (x(this, oe).addObserver(this), Bs(x(this, oe), this.options) ? ae(this, le, Xn).call(this) : this.updateResult(), ae(this, le, Uo).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Go(
      x(this, oe),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Go(
      x(this, oe),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ae(this, le, zo).call(this), ae(this, le, Vo).call(this), x(this, oe).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = x(this, oe);
    if (this.options = x(this, Ue).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof st(this.options.enabled, x(this, oe)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ae(this, le, Wo).call(this), x(this, oe).setOptions(this.options), r._defaulted && !_o(this.options, r) && x(this, Ue).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: x(this, oe),
      observer: this
    });
    const o = this.hasListeners();
    o && $s(
      x(this, oe),
      a,
      this.options,
      r
    ) && ae(this, le, Xn).call(this), this.updateResult(n), o && (x(this, oe) !== a || st(this.options.enabled, x(this, oe)) !== st(r.enabled, x(this, oe)) || xn(this.options.staleTime, x(this, oe)) !== xn(r.staleTime, x(this, oe))) && ae(this, le, Bo).call(this);
    const i = ae(this, le, $o).call(this);
    o && (x(this, oe) !== a || st(this.options.enabled, x(this, oe)) !== st(r.enabled, x(this, oe)) || i !== x(this, Dt)) && ae(this, le, Ho).call(this, i);
  }
  getOptimisticResult(t) {
    const n = x(this, Ue).getQueryCache().build(x(this, Ue), t), r = this.createResult(n, t);
    return d0(this, r) && (U(this, Be, r), U(this, Rn, this.options), U(this, en, x(this, oe).state)), r;
  }
  getCurrentResult() {
    return x(this, Be);
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
    x(this, In).add(t);
  }
  getCurrentQuery() {
    return x(this, oe);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = x(this, Ue).defaultQueryOptions(t), r = x(this, Ue).getQueryCache().build(x(this, Ue), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return ae(this, le, Xn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), x(this, Be)));
  }
  createResult(t, n) {
    var N;
    const r = x(this, oe), a = this.options, o = x(this, Be), i = x(this, en), l = x(this, Rn), c = t !== r ? t.state : x(this, hr), { state: u } = t;
    let d = { ...u }, f = !1, g;
    if (n._optimisticResults) {
      const M = this.hasListeners(), j = !M && Bs(t, n), _ = M && $s(t, r, n, a);
      (j || _) && (d = {
        ...d,
        ...fu(u.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: h } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (i == null ? void 0 : i.data) && n.select === x(this, pr))
        g = x(this, Mn);
      else
        try {
          U(this, pr, n.select), g = n.select(d.data), g = Do(o == null ? void 0 : o.data, g, n), U(this, Mn, g), U(this, bt, null);
        } catch (M) {
          U(this, bt, M);
        }
    else
      g = d.data;
    if (n.placeholderData !== void 0 && g === void 0 && h === "pending") {
      let M;
      if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData))
        M = o.data;
      else if (M = typeof n.placeholderData == "function" ? n.placeholderData(
        (N = x(this, On)) == null ? void 0 : N.state.data,
        x(this, On)
      ) : n.placeholderData, n.select && M !== void 0)
        try {
          M = n.select(M), U(this, bt, null);
        } catch (j) {
          U(this, bt, j);
        }
      M !== void 0 && (h = "success", g = Do(
        o == null ? void 0 : o.data,
        M,
        n
      ), f = !0);
    }
    x(this, bt) && (y = x(this, bt), g = x(this, Mn), m = Date.now(), h = "error");
    const T = d.fetchStatus === "fetching", S = h === "pending", C = h === "error", w = S && T, b = g !== void 0, k = {
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
      isFetching: T,
      isRefetching: T && !S,
      isLoadingError: C && !b,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: C && b,
      isStale: Si(t, n),
      refetch: this.refetch,
      promise: x(this, Lt)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (z) => {
        k.status === "error" ? z.reject(k.error) : k.data !== void 0 && z.resolve(k.data);
      }, j = () => {
        const z = U(this, Lt, k.promise = Fo());
        M(z);
      }, _ = x(this, Lt);
      switch (_.status) {
        case "pending":
          t.queryHash === r.queryHash && M(_);
          break;
        case "fulfilled":
          (k.status === "error" || k.data !== _.value) && j();
          break;
        case "rejected":
          (k.status !== "error" || k.error !== _.reason) && j();
          break;
      }
    }
    return k;
  }
  updateResult(t) {
    const n = x(this, Be), r = this.createResult(x(this, oe), this.options);
    if (U(this, en, x(this, oe).state), U(this, Rn, this.options), x(this, en).data !== void 0 && U(this, On, x(this, oe)), _o(r, n))
      return;
    U(this, Be, r);
    const a = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: i } = this.options, l = typeof i == "function" ? i() : i;
      if (l === "all" || !l && !x(this, In).size)
        return !0;
      const s = new Set(
        l ?? x(this, In)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(x(this, Be)).some((c) => {
        const u = c;
        return x(this, Be)[u] !== n[u] && s.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (a.listeners = !0), ae(this, le, hu).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ae(this, le, Uo).call(this);
  }
}, Ue = new WeakMap(), oe = new WeakMap(), hr = new WeakMap(), Be = new WeakMap(), en = new WeakMap(), Rn = new WeakMap(), Lt = new WeakMap(), bt = new WeakMap(), pr = new WeakMap(), Mn = new WeakMap(), On = new WeakMap(), tn = new WeakMap(), nn = new WeakMap(), Dt = new WeakMap(), In = new WeakMap(), le = new WeakSet(), Xn = function(t) {
  ae(this, le, Wo).call(this);
  let n = x(this, oe).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Je)), n;
}, Bo = function() {
  ae(this, le, zo).call(this);
  const t = xn(
    this.options.staleTime,
    x(this, oe)
  );
  if (ln || x(this, Be).isStale || !Io(t))
    return;
  const r = iu(x(this, Be).dataUpdatedAt, t) + 1;
  U(this, tn, setTimeout(() => {
    x(this, Be).isStale || this.updateResult();
  }, r));
}, $o = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(x(this, oe)) : this.options.refetchInterval) ?? !1;
}, Ho = function(t) {
  ae(this, le, Vo).call(this), U(this, Dt, t), !(ln || st(this.options.enabled, x(this, oe)) === !1 || !Io(x(this, Dt)) || x(this, Dt) === 0) && U(this, nn, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ci.isFocused()) && ae(this, le, Xn).call(this);
  }, x(this, Dt)));
}, Uo = function() {
  ae(this, le, Bo).call(this), ae(this, le, Ho).call(this, ae(this, le, $o).call(this));
}, zo = function() {
  x(this, tn) && (clearTimeout(x(this, tn)), U(this, tn, void 0));
}, Vo = function() {
  x(this, nn) && (clearInterval(x(this, nn)), U(this, nn, void 0));
}, Wo = function() {
  const t = x(this, Ue).getQueryCache().build(x(this, Ue), this.options);
  if (t === x(this, oe))
    return;
  const n = x(this, oe);
  U(this, oe, t), U(this, hr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, hu = function(t) {
  Ne.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(x(this, Be));
    }), x(this, Ue).getQueryCache().notify({
      query: x(this, oe),
      type: "observerResultsUpdated"
    });
  });
}, Zs);
function u0(e, t) {
  return st(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Bs(e, t) {
  return u0(e, t) || e.state.data !== void 0 && Go(e, t, t.refetchOnMount);
}
function Go(e, t, n) {
  if (st(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Si(e, t);
  }
  return !1;
}
function $s(e, t, n, r) {
  return (e !== t || st(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Si(e, n);
}
function Si(e, t) {
  return st(t.enabled, e) !== !1 && e.isStaleByTime(xn(t.staleTime, e));
}
function d0(e, t) {
  return !_o(e.getCurrentResult(), t);
}
var pu = p.createContext(
  void 0
), f0 = (e) => {
  const t = p.useContext(pu);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, h0 = ({
  client: e,
  children: t
}) => (p.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ v.jsx(pu.Provider, { value: e, children: t })), mu = p.createContext(!1), p0 = () => p.useContext(mu);
mu.Provider;
function m0() {
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
var g0 = p.createContext(m0()), v0 = () => p.useContext(g0);
function y0(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function b0() {
}
var x0 = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, C0 = (e) => {
  p.useEffect(() => {
    e.clearReset();
  }, [e]);
}, S0 = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r
}) => e.isError && !t.isReset() && !e.isFetching && r && y0(n, [e.error, r]), E0 = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, w0 = (e, t) => e.isLoading && e.isFetching && !t, T0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Hs = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function A0(e, t, n) {
  var u, d, f, g, y;
  if (K.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = f0(), a = p0(), o = v0(), i = r.defaultQueryOptions(e);
  (d = (u = r.getDefaultOptions().queries) == null ? void 0 : u._experimental_beforeQuery) == null || d.call(
    u,
    i
  ), i._optimisticResults = a ? "isRestoring" : "optimistic", E0(i), x0(i, o), C0(o);
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
  }, [i, s]), T0(i, c))
    throw Hs(i, s, o);
  if (S0({
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
  ), i.experimental_prefetchInRender && !ln && w0(c, a)) {
    const m = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Hs(i, s, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (y = r.getQueryCache().get(i.queryHash)) == null ? void 0 : y.promise
    );
    m == null || m.catch(b0).finally(() => {
      s.updateResult();
    });
  }
  return i.notifyOnChangeProps ? c : s.trackResult(c);
}
function yr(e, t) {
  return A0(e, l0);
}
const k0 = async () => {
  const { data: e } = await $e.get("/user-assets/token-prices");
  return e;
}, N0 = (e) => yr({
  queryKey: ["tokenPrices"],
  queryFn: k0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  staleTime: 1e3 * 60 * 60,
  // data is fresh within 60 minutes
  gcTime: 1e3 * 60 * 60,
  // cache for 120 minutes
  ...e
}), P0 = async (e) => {
  const t = be.getToken(e), { address: n } = Oe.all(), r = await t.getBalance(n);
  return Qr(r) || "0";
}, R0 = async () => {
  const e = be.createTokenMap(() => "0"), t = Object.values(Ce), n = await Promise.all(t.map((r) => P0(r)));
  return t.reduce((r, a, o) => ({
    ...r,
    [a]: n[o] || "0"
  }), e);
}, M0 = () => yr({
  queryKey: ["tokenBalances"],
  queryFn: R0,
  enabled: !0,
  retry: !1,
  gcTime: 0
});
function O0({
  isOpen: e,
  onClose: t,
  defaultLimits: n
}) {
  const { data: r } = M0(), { data: a } = N0(), [o, i] = p.useState(null), [l, s] = p.useState(!1), [c, u] = p.useState(be.createTokenMap(() => ""));
  p.useEffect(() => {
    e && f();
  }, [e]);
  const d = p.useMemo(() => be.getAllTokens().some((b) => !c[b.tokenType]), [c]), f = async () => {
    g(), u(n);
  }, g = async () => {
    try {
      const { data: b } = await $e.post("/transaction/outbound-amount", {
        tokens: be.getAllTokens().map((E) => E.tokenType)
      });
      i(b);
    } catch (b) {
      console.error("Failed to fetch token transferred:", b);
    }
  }, y = p.useMemo(() => be.getAllTokens().map((b) => ({
    type: b.tokenType,
    balance: (r == null ? void 0 : r[b.tokenType]) || "0",
    todayTransferred: (o == null ? void 0 : o[b.tokenType]) || "0"
  })), [r, o]), m = (b, E) => {
    E && !/^\d*\.?\d*$/.test(E) || u((k) => ({
      ...k,
      [b]: E
    }));
  }, h = (b, E) => {
    if (!E || !a || !a[b]) return "0";
    const k = parseFloat(a[b]), N = parseFloat(E);
    return isNaN(k) || isNaN(N) ? "0" : (k * N).toFixed(2);
  }, T = async () => {
    rt(c, "limits");
    try {
      s(!0);
      const b = be.getAllTokens().map((E) => ({
        type: E.tokenType,
        value: _r(c[E.tokenType] || "0").toString()
      }));
      await $e.post("/auth/generate-otp-for-daily-limit-update", {
        limits: b
      }), ct.info("Please check your email to confirm the transaction limit update", {
        autoClose: !1,
        closeButton: !0
      }), t();
    } catch (b) {
      const E = er(b);
      ct.error(E.message);
    } finally {
      s(!1);
    }
  }, S = (b) => b == null ? "0" : dn(BigInt(b)), C = () => {
    t();
  }, w = /* @__PURE__ */ v.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ v.jsx(rn, { className: "hidden tablet:block", variant: "outline", onClick: () => C(), children: "Cancel" }),
    /* @__PURE__ */ v.jsx(
      rn,
      {
        className: "w-full tablet:w-auto",
        disabled: d || l,
        onClick: () => {
          T();
        },
        children: l ? /* @__PURE__ */ v.jsx(gc, {}) : "Save"
      }
    )
  ] });
  return /* @__PURE__ */ v.jsx(
    Gg,
    {
      isOpen: e,
      onClose: t,
      title: "Daily Transaction Limit",
      footer: w,
      contentClassName: "p-6 max-h-[80vh] overflow-y-auto",
      className: "z-[10002]",
      children: y.map((b, E) => /* @__PURE__ */ v.jsxs("div", { className: E > 0 ? "mt-6" : "", children: [
        /* @__PURE__ */ v.jsxs("p", { className: "text-black text-sm font-medium leading-none mb-[6px]", children: [
          b.type,
          " daily limit"
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: ee(
          "tablet:flex items-center justify-between"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 text-[#a1a1a1] text-sm font-normal leading-none", children: [
            /* @__PURE__ */ v.jsx(
              qr,
              {
                className: "w-[131px] text-black",
                value: c[b.type],
                onChange: (k) => m(b.type, k.target.value),
                placeholder: "Enter limit",
                disabled: l
              }
            ),
            /* @__PURE__ */ v.jsxs("p", { children: [
              "~",
              h(b.type, c[b.type]),
              " USDT"
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: ee(
            "flex items-center gap-2 text-sm font-normal leading-none",
            "mt-[20px] tablet:mt-0"
          ), children: [
            /* @__PURE__ */ v.jsx("p", { className: "text-[#a1a1a1]", children: "Balance:" }),
            /* @__PURE__ */ v.jsxs("p", { className: "text-black", children: [
              b.balance,
              " ",
              b.type
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mt-3 bg-black/5 border-black/10 rounded-[8px] py-3 px-4 flex items-center gap-2.5", children: [
          /* @__PURE__ */ v.jsx("img", { src: "/imgs/icons/information_filled.svg", width: 16, height: 16, alt: "" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-black text-xs font-normal leading-none", children: l ? "" : `You've transferred ${S(b.todayTransferred ?? "0")} ${be.getToken(b.type).symbol} today` })
        ] })
      ] }, b.type))
    }
  );
}
const I0 = be.createTokenMap(() => "0"), j0 = async () => {
  const { data: e } = await $e.get("/transaction/default-daily-withdrawal-limits", {
    params: {
      includeUserLimits: !0
    }
  });
  return Object.values(Ce).reduce((n, r) => (n[r] = dn(BigInt(e[r] ?? 0)), n), {});
}, _0 = (e) => yr({
  queryKey: ["dailyWithdrawalLimits"],
  queryFn: j0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  gcTime: 0,
  staleTime: 0,
  initialData: I0,
  ...e
}), L0 = be.getAllTokens();
function D0({
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
  const [c, u] = p.useState(""), [d, f] = p.useState(""), [g, y] = p.useState(""), [m, h] = p.useState(!1), T = p.useRef(), [S, C] = p.useState(!1), { data: w } = _0(), [b, E] = p.useState(a), [k, N] = p.useState("0"), [M, j] = p.useState(""), [_, z] = p.useState(!1), [$, D] = p.useState(!1), [W, P] = p.useState(!1), [A, R] = p.useState(!1), [I, L] = p.useState(""), [O, H] = p.useState(""), [G, Q] = p.useState(""), { t: B } = ti(), te = Li(d, 800), ie = Li(c, 800), Ee = p.useRef(null), [we, Se] = p.useState(0), Ie = p.useMemo(() => b ? be.getToken(b).symbol : "", [b]), Te = p.useMemo(() => b ? be.getToken(b).gasSymbol : "", [b]);
  p.useEffect(() => {
    Ee.current && setTimeout(() => {
      var fe;
      const ne = (fe = Ee.current) == null ? void 0 : fe.getBoundingClientRect().width;
      ne && Se(ne + 34);
    }, 0);
  }, [Ie, e]), p.useEffect(() => {
    rt("open", e, "address", r), e ? je() : Gt();
  }, [o, i, l, e]), p.useEffect(() => {
    c && d && $ && (Le(), qe(c), Xe(), D(!1));
  }, [c, d, $, e]), p.useEffect(() => {
    !e && s && s();
  }, [e]), p.useEffect(() => {
    Le(), ie && qe(ie), te && !_e && !_ && Xe();
  }, [te, ie]);
  const je = async () => {
    await Ve(a), o && u(o), i && f(i), l && y(l), D(!0);
  }, V = p.useMemo(() => w[b], [b, w]), _e = p.useMemo(() => !c || !d || m || !A || W || !!O && O !== B("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(d) > parseFloat(k) || _, [c, d, m, A, W, O, k, _]), ve = () => {
    const ne = /* @__PURE__ */ v.jsx("div", { className: "cursor-pointer", onClick: () => {
      Oo.destroy();
    }, children: "Ok" });
    Oo.open({
      message: "Daily transaction limit exceeded",
      description: /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("p", { children: "Please check your email and verify by the OTP." }),
        /* @__PURE__ */ v.jsx("p", { children: "You can change yur dailiy transaction limit under profile page." })
      ] }),
      placement: "top",
      duration: 0,
      btn: ne
    });
  }, Ve = async (ne) => {
    f(""), z(!1), j(""), Q(""), E(ne);
    const fe = be.getToken(ne);
    T.current = fe;
    let De = await fe.getBalance(r);
    De = Qr(De), N(De);
  }, qe = async (ne) => {
    if (Wr(c))
      R(!0), L(""), H("");
    else {
      P(!0), H("");
      try {
        const fe = await $e.get("/address/", {
          params: { email: ne }
        });
        fe.data.success ? (R(!0), L(fe.data.address)) : _i.test(ne) ? (R(!0), L(""), H(B("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (R(!1), L(""), H(B("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        P(!1);
      }
    }
  }, dt = () => {
    rt("to", c), c || (R(!1), L(""), H(""));
  };
  async function pe(ne) {
    try {
      const fe = _r(d).toString();
      rt("amt", fe), h(!0);
      const {
        needOtp: De,
        hash: br,
        message: wi
      } = await Yd.signTransaction({
        toAddress: ne,
        amount: fe,
        token: b,
        note: g,
        transactionType: yc.TRANSFER
      });
      br ? (t(!1), Re(br)) : De && (ve(), t(!1));
    } catch (fe) {
      const De = er(fe);
      rt("errorInfo", De), ct.error(De.message);
    } finally {
      h(!1);
    }
  }
  const de = (ne) => {
    var De;
    const fe = `${(De = T.current) == null ? void 0 : De.scanTransactionUrl}/${ne}`;
    window.open(fe, "_blank");
  }, Re = (ne) => {
    ct(
      /* @__PURE__ */ v.jsx("div", { className: "w-full", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ v.jsx(Ba, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ v.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ v.jsx(
            rn,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                de(ne);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, ft = async () => {
    if (!_e)
      try {
        h(!0);
        let ne, fe;
        if (Wr(c))
          ne = c;
        else if (_i.test(c) && O === B("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          fe = c;
          const De = await $e.post("/invite/invite-register", {
            toEmail: fe,
            from: r,
            amount: _r(d).toString(),
            token: b,
            note: g
          });
          rt("res", De), ct.success(B("/dashboard.[token].sendModal.emailSentToUnregistered")), Gt(), t(!1);
          return;
        } else
          ne = I;
        await pe(ne), Gt(), t(!1);
      } catch (ne) {
        const fe = er(ne);
        rt("errorInfo", fe), ct.error(B("/dashboard.[token].sendModal.sendError"));
      } finally {
        h(!1);
      }
  }, Le = async () => {
    parseFloat(d) > parseFloat(k) ? Q("Amount exceeded") : Q("");
  }, Xe = async () => {
    if (d && !_e) {
      z(!0);
      try {
        rt("checkEstimatedFee", d);
        const ne = await Vd({
          tokenType: b,
          transferParams: {
            to: r,
            amount: _r(d)
          },
          fromAddress: r
        });
        j(ne ? ne.feeInTokens.toString() : "");
      } catch (ne) {
        rt("Failed to get estimated fee:", ne), j("");
      } finally {
        z(!1);
      }
    }
  }, Gt = () => {
    f(""), u(""), y(""), L(""), H(""), R(!1), P(!1), j("");
  }, ya = async (ne) => {
    f(ne.target.value.trim()), parseFloat(d) > parseFloat(k) ? Q("Amount exceeded") : Q("");
  }, ba = e ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-[10001] flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: ee(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: B("/dashboard.[token].sendModal.title") }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => t(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(ei, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs("form", { children: [
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "to", className: "block mb-2 text-sm font-medium", children: B("/dashboard.[token].sendModal.to") }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              qr,
              {
                value: c,
                onChange: (ne) => u(ne.target.value.trim()),
                onBlur: dt,
                id: "to",
                required: !0,
                placeholder: B("/dashboard.[token].sendModal.toPlaceholder"),
                className: ee(
                  A && "border-green-500",
                  O && "border-destructive",
                  O === B("/dashboard.[token].sendModal.unregisteredEmailNotice") && "border-blue-500",
                  "pr-10"
                )
              }
            ),
            W && /* @__PURE__ */ v.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsx(ld, { className: "animate-spin", size: 16 }) }),
            A && !W && !O && /* @__PURE__ */ v.jsx(Ba, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            O && !W && /* @__PURE__ */ v.jsx(dc, { className: ee(
              "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
              O === B("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-500"
            ), size: 16 })
          ] }),
          A && I && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-primary/60", children: I }),
          O && /* @__PURE__ */ v.jsx("p", { className: ee(
            "mt-1 text-xs text-destructive",
            O === B("/dashboard.[token].sendModal.unregisteredEmailNotice") && "text-blue-400"
          ), children: O })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px]", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ v.jsx("label", { htmlFor: "amount", className: "block mb-2 text-sm font-medium", children: B("/dashboard.[token].sendModal.amount") }) }),
          /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ v.jsx(
              qr,
              {
                value: d,
                onChange: ya,
                type: "number",
                inputMode: "decimal",
                id: "amount",
                className: ee(
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                ),
                required: !0,
                onBlur: Le,
                style: {
                  paddingLeft: `${we}px`
                }
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsxs(Zd, { children: [
              /* @__PURE__ */ v.jsxs(Jd, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ v.jsx("span", { ref: Ee, className: "font-medium text-sm", children: Ie }),
                /* @__PURE__ */ v.jsx(ud, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ v.jsx(bc, { align: "start", className: "bg-white", children: L0.map((ne) => /* @__PURE__ */ v.jsx(xc, { onClick: () => Ve(ne.tokenType), children: ne.symbol }, ne.tokenType)) })
            ] }) })
          ] }),
          G && /* @__PURE__ */ v.jsx("p", { className: "mt-1 text-xs text-destructive", children: G })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-[16px] text-[#979797] text-sm font-normal leading-none flex items-center", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mr-1", children: "Estimated gas fee: " }),
          _ ? /* @__PURE__ */ v.jsx("span", { children: /* @__PURE__ */ v.jsx(dd, { className: "animate-spin", size: 14 }) }) : M ? /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            "~ ",
            M,
            " ",
            Te
          ] }) : /* @__PURE__ */ v.jsx("span", { className: "text-black", children: "-" })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-[20px]", children: [
          /* @__PURE__ */ v.jsxs("p", { className: "text-[#979797] text-sm leading-none", children: [
            "Daily limit: ",
            /* @__PURE__ */ v.jsxs("span", { children: [
              V,
              " ",
              Ie
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
        M && /* @__PURE__ */ v.jsxs("div", { className: "rounded-lg border border-black/10 bg-black/5 p-3 mb-4 flex items-start", children: [
          /* @__PURE__ */ v.jsx("img", { className: "w-4 h-4 mr-2", src: "/imgs/icons/information_filled.svg", alt: "information" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs text-black", children: "Estimated fees may vary and will be recalculated during backend checks." })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "text-[#979797] text-sm font-['Roboto'] leading-none mb-6", children: [
          "Balance: ",
          /* @__PURE__ */ v.jsxs("span", { className: "text-black", children: [
            Qr(k),
            " ",
            Ie
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: B("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsx(
            vc,
            {
              className: "focus-visible:ring-0 placeholder:text-black/25",
              id: "note",
              placeholder: "Add your note",
              value: g,
              onChange: (ne) => y(ne.target.value)
            }
          ) })
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-3 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(
        rn,
        {
          onClick: ft,
          className: ee("py-12px"),
          disabled: _e,
          children: m ? /* @__PURE__ */ v.jsx("div", { className: "", children: /* @__PURE__ */ v.jsx(gc, {}) }) : /* @__PURE__ */ v.jsx("span", { children: B("/dashboard.[token].sendModal.title") })
        }
      ) })
    ] }) }),
    /* @__PURE__ */ v.jsx(
      O0,
      {
        isOpen: S,
        onClose: () => C(!1),
        defaultLimits: w
      }
    )
  ] }) : null;
  if (typeof window < "u")
    return Jn.createPortal(
      ba,
      document.body
    );
}
const F0 = qu, gu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  cc,
  {
    ref: n,
    className: ee(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
gu.displayName = cc.displayName;
const Ko = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  lc,
  {
    ref: n,
    className: ee(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Ko.displayName = lc.displayName;
const Qo = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  uc,
  {
    ref: n,
    className: ee(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Qo.displayName = uc.displayName;
var B0 = Object.defineProperty, oa = Object.getOwnPropertySymbols, vu = Object.prototype.hasOwnProperty, yu = Object.prototype.propertyIsEnumerable, Us = (e, t, n) => t in e ? B0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, qo = (e, t) => {
  for (var n in t || (t = {}))
    vu.call(t, n) && Us(e, n, t[n]);
  if (oa)
    for (var n of oa(t))
      yu.call(t, n) && Us(e, n, t[n]);
  return e;
}, Xo = (e, t) => {
  var n = {};
  for (var r in e)
    vu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && oa)
    for (var r of oa(e))
      t.indexOf(r) < 0 && yu.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var un;
((e) => {
  const t = class re {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(s, c, u, d) {
      if (this.version = s, this.errorCorrectionLevel = c, this.modules = [], this.isFunction = [], s < re.MIN_VERSION || s > re.MAX_VERSION)
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
      return re.encodeSegments(u, c);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(s, c) {
      const u = e.QrSegment.makeBytes(s);
      return re.encodeSegments([u], c);
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
      if (!(re.MIN_VERSION <= u && u <= d && d <= re.MAX_VERSION) || f < -1 || f > 7)
        throw new RangeError("Invalid value");
      let y, m;
      for (y = u; ; y++) {
        const C = re.getNumDataCodewords(y, c) * 8, w = i.getTotalBits(s, y);
        if (w <= C) {
          m = w;
          break;
        }
        if (y >= d)
          throw new RangeError("Data too long");
      }
      for (const C of [re.Ecc.MEDIUM, re.Ecc.QUARTILE, re.Ecc.HIGH])
        g && m <= re.getNumDataCodewords(y, C) * 8 && (c = C);
      let h = [];
      for (const C of s) {
        n(C.mode.modeBits, 4, h), n(C.numChars, C.mode.numCharCountBits(y), h);
        for (const w of C.getData())
          h.push(w);
      }
      a(h.length == m);
      const T = re.getNumDataCodewords(y, c) * 8;
      a(h.length <= T), n(0, Math.min(4, T - h.length), h), n(0, (8 - h.length % 8) % 8, h), a(h.length % 8 == 0);
      for (let C = 236; h.length < T; C ^= 253)
        n(C, 8, h);
      let S = [];
      for (; S.length * 8 < h.length; )
        S.push(0);
      return h.forEach((C, w) => S[w >>> 3] |= C << 7 - (w & 7)), new re(y, c, S, f);
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
      if (s.length != re.getNumDataCodewords(c, u))
        throw new RangeError("Invalid argument");
      const d = re.NUM_ERROR_CORRECTION_BLOCKS[u.ordinal][c], f = re.ECC_CODEWORDS_PER_BLOCK[u.ordinal][c], g = Math.floor(re.getNumRawDataModules(c) / 8), y = d - g % d, m = Math.floor(g / d);
      let h = [];
      const T = re.reedSolomonComputeDivisor(f);
      for (let C = 0, w = 0; C < d; C++) {
        let b = s.slice(w, w + m - f + (C < y ? 0 : 1));
        w += b.length;
        const E = re.reedSolomonComputeRemainder(b, T);
        C < y && b.push(0), h.push(b.concat(E));
      }
      let S = [];
      for (let C = 0; C < h[0].length; C++)
        h.forEach((w, b) => {
          (C != m - f || b >= y) && S.push(w[C]);
        });
      return a(S.length == g), S;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(s) {
      if (s.length != Math.floor(re.getNumRawDataModules(this.version) / 8))
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
          this.modules[f][h] == g ? (y++, y == 5 ? s += re.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, m), g || (s += this.finderPenaltyCountPatterns(m) * re.PENALTY_N3), g = this.modules[f][h], y = 1);
        s += this.finderPenaltyTerminateAndCount(g, y, m) * re.PENALTY_N3;
      }
      for (let f = 0; f < this.size; f++) {
        let g = !1, y = 0, m = [0, 0, 0, 0, 0, 0, 0];
        for (let h = 0; h < this.size; h++)
          this.modules[h][f] == g ? (y++, y == 5 ? s += re.PENALTY_N1 : y > 5 && s++) : (this.finderPenaltyAddHistory(y, m), g || (s += this.finderPenaltyCountPatterns(m) * re.PENALTY_N3), g = this.modules[h][f], y = 1);
        s += this.finderPenaltyTerminateAndCount(g, y, m) * re.PENALTY_N3;
      }
      for (let f = 0; f < this.size - 1; f++)
        for (let g = 0; g < this.size - 1; g++) {
          const y = this.modules[f][g];
          y == this.modules[f][g + 1] && y == this.modules[f + 1][g] && y == this.modules[f + 1][g + 1] && (s += re.PENALTY_N2);
        }
      let c = 0;
      for (const f of this.modules)
        c = f.reduce((g, y) => g + (y ? 1 : 0), c);
      const u = this.size * this.size, d = Math.ceil(Math.abs(c * 20 - u * 10) / u) - 1;
      return a(0 <= d && d <= 9), s += d * re.PENALTY_N4, a(0 <= s && s <= 2568888), s;
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
      if (s < re.MIN_VERSION || s > re.MAX_VERSION)
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
      return Math.floor(re.getNumRawDataModules(s) / 8) - re.ECC_CODEWORDS_PER_BLOCK[c.ordinal][s] * re.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][s];
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
          c[f] = re.reedSolomonMultiply(c[f], u), f + 1 < c.length && (c[f] ^= c[f + 1]);
        u = re.reedSolomonMultiply(u, 2);
      }
      return c;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(s, c) {
      let u = c.map((d) => 0);
      for (const d of s) {
        const f = d ^ u.shift();
        u.push(0), c.forEach((g, y) => u[y] ^= re.reedSolomonMultiply(g, f));
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
var bn = un;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var $0 = {
  L: bn.QrCode.Ecc.LOW,
  M: bn.QrCode.Ecc.MEDIUM,
  Q: bn.QrCode.Ecc.QUARTILE,
  H: bn.QrCode.Ecc.HIGH
}, bu = 128, xu = "L", Cu = "#FFFFFF", Su = "#000000", Eu = !1, wu = 1, H0 = 4, U0 = 0, z0 = 0.1;
function Tu(e, t = 0) {
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
function Au(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((a, o) => o < t.x || o >= t.x + t.w ? a : !1));
}
function V0(e, t, n, r) {
  if (r == null)
    return null;
  const a = e.length + n * 2, o = Math.floor(t * z0), i = a / t, l = (r.width || o) * i, s = (r.height || o) * i, c = r.x == null ? e.length / 2 - l / 2 : r.x * i, u = r.y == null ? e.length / 2 - s / 2 : r.y * i, d = r.opacity == null ? 1 : r.opacity;
  let f = null;
  if (r.excavate) {
    let y = Math.floor(c), m = Math.floor(u), h = Math.ceil(l + c - y), T = Math.ceil(s + u - m);
    f = { x: y, y: m, w: h, h: T };
  }
  const g = r.crossOrigin;
  return { x: c, y: u, h: s, w: l, excavation: f, opacity: d, crossOrigin: g };
}
function W0(e, t) {
  return t != null ? Math.max(Math.floor(t), 0) : e ? H0 : U0;
}
function ku({
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
    const y = (Array.isArray(e) ? e : [e]).reduce((m, h) => (m.push(...bn.QrSegment.makeSegments(h)), m), []);
    return bn.QrCode.encodeSegments(
      y,
      $0[t],
      n,
      void 0,
      void 0,
      l
    );
  }, [e, t, n, l]);
  const { cells: c, margin: u, numCells: d, calculatedImageSettings: f } = q.useMemo(() => {
    let g = s.getModules();
    const y = W0(r, a), m = g.length + y * 2, h = V0(
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
var G0 = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}(), K0 = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = bu,
      level: i = xu,
      bgColor: l = Cu,
      fgColor: s = Su,
      includeMargin: c = Eu,
      minVersion: u = wu,
      boostLevel: d,
      marginSize: f,
      imageSettings: g
    } = r, m = Xo(r, [
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
    ]), { style: h } = m, T = Xo(m, ["style"]), S = g == null ? void 0 : g.src, C = q.useRef(null), w = q.useRef(null), b = q.useCallback(
      (D) => {
        C.current = D, typeof n == "function" ? n(D) : n && (n.current = D);
      },
      [n]
    ), [E, k] = q.useState(!1), { margin: N, cells: M, numCells: j, calculatedImageSettings: _ } = ku({
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
        const A = w.current, R = _ != null && A !== null && A.complete && A.naturalHeight !== 0 && A.naturalWidth !== 0;
        R && _.excavation != null && (P = Au(
          M,
          _.excavation
        ));
        const I = window.devicePixelRatio || 1;
        D.height = D.width = o * I;
        const L = o / j * I;
        W.scale(L, L), W.fillStyle = l, W.fillRect(0, 0, j, j), W.fillStyle = s, G0 ? W.fill(new Path2D(Tu(P, N))) : M.forEach(function(O, H) {
          O.forEach(function(G, Q) {
            G && W.fillRect(Q + N, H + N, 1, 1);
          });
        }), _ && (W.globalAlpha = _.opacity), R && W.drawImage(
          A,
          _.x + N,
          _.y + N,
          _.w,
          _.h
        );
      }
    }), q.useEffect(() => {
      k(!1);
    }, [S]);
    const z = qo({ height: o, width: o }, h);
    let $ = null;
    return S != null && ($ = /* @__PURE__ */ q.createElement(
      "img",
      {
        src: S,
        key: S,
        style: { display: "none" },
        onLoad: () => {
          k(!0);
        },
        ref: w,
        crossOrigin: _ == null ? void 0 : _.crossOrigin
      }
    )), /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(
      "canvas",
      qo({
        style: z,
        height: o,
        width: o,
        ref: b,
        role: "img"
      }, T)
    ), $);
  }
);
K0.displayName = "QRCodeCanvas";
var Yo = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = bu,
      level: i = xu,
      bgColor: l = Cu,
      fgColor: s = Su,
      includeMargin: c = Eu,
      minVersion: u = wu,
      boostLevel: d,
      title: f,
      marginSize: g,
      imageSettings: y
    } = r, m = Xo(r, [
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
    ]), { margin: h, cells: T, numCells: S, calculatedImageSettings: C } = ku({
      value: a,
      level: i,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: g,
      imageSettings: y,
      size: o
    });
    let w = T, b = null;
    y != null && C != null && (C.excavation != null && (w = Au(
      T,
      C.excavation
    )), b = /* @__PURE__ */ q.createElement(
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
    const E = Tu(w, h);
    return /* @__PURE__ */ q.createElement(
      "svg",
      qo({
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
      b
    );
  }
);
Yo.displayName = "QRCodeSVG";
function Q0({
  address: e,
  open: t,
  setOpen: n,
  onClose: r
}) {
  const { t: a } = ti(), [o, i] = p.useState("");
  p.useEffect(() => {
    const { username: c } = Oe.all();
    i(c);
  }, []);
  const l = async () => {
    try {
      const c = document.querySelector("#qr-code-svg");
      if (!c) return;
      const u = c.querySelector("image");
      if (u) {
        const m = u.getAttribute("href") || "", T = await (await fetch(m)).blob(), S = await new Promise((C) => {
          const w = new FileReader();
          w.onloadend = () => C(w.result), w.readAsDataURL(T);
        });
        u.setAttribute("href", S);
      }
      const d = new XMLSerializer().serializeToString(c), f = new Blob([d], { type: "image/svg+xml;charset=utf-8" }), g = URL.createObjectURL(f), y = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      await new Promise((m, h) => {
        const T = new Image();
        T.onload = () => {
          const S = document.createElement("canvas"), C = S.getContext("2d");
          S.width = T.width, S.height = T.height, C == null || C.drawImage(T, 0, 0), y ? S.toBlob(async (w) => {
            if (w)
              try {
                if (navigator.share) {
                  const b = new File([w], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [b],
                    title: "QR Code"
                  });
                } else {
                  const b = URL.createObjectURL(w), E = document.createElement("a");
                  E.href = b, E.download = "qrcode.png", document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(b);
                }
                ct.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (b) {
                h(b);
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
              } catch (b) {
                h(b);
              }
          }, "image/png");
        }, T.onerror = h, T.src = g;
      });
    } catch (c) {
      ct.error(c.message);
    }
  }, s = t ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ v.jsx("div", { className: ee(
      "relative z-50 w-[372px]"
    ), children: /* @__PURE__ */ v.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ v.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ v.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Reveive" }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: () => r(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ v.jsx(ei, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs(F0, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ v.jsxs(gu, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ v.jsx(
            Ko,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ko,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ v.jsxs(Qo, { value: "crypto", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ua, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Yo,
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
        /* @__PURE__ */ v.jsxs(Qo, { value: "email", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ua, { address: o, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Yo,
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
    return Jn.createPortal(
      s,
      document.body
    );
}
const q0 = ["totalAsset"], X0 = 0.01, Y0 = async (e) => {
  try {
    const n = (await $e.get("/user-assets/total-assets", {
      params: { address: e }
    })).data.totalAssets;
    return {
      raw: n,
      formatted: zd(n, 2),
      isZero: n === 0,
      isUSDZero: n < X0
    };
  } catch (t) {
    throw er(t);
  }
};
function Z0(e) {
  const { address: t } = Oe.all();
  return yr({
    queryKey: [...q0, t],
    queryFn: () => Y0(t),
    enabled: (e == null ? void 0 : e.enabled) && !!t,
    staleTime: 1e3 * 60 * 5,
    // data is fresh within 5 minutes
    gcTime: 1e3 * 60 * 30
    // cache for 30 minutes
  });
}
const J0 = async () => {
  const { data: e } = await $e.get("/user/info");
  return e;
}, ev = (e) => yr({
  queryKey: ["userInfo"],
  queryFn: J0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  retry: !1,
  gcTime: 0,
  ...e
});
function tv() {
  const { address: e } = Oe.all(), { data: t, refetch: n } = Z0({
    enabled: !!e
  }), { data: r } = ev(), [a, o] = p.useState(""), [i, l] = p.useState(!1), [s, c] = p.useState(!1), [u, d] = p.useState(Ce.ETH), [f, g] = p.useState(Oi.getData() ?? !0);
  p.useEffect(() => {
    y(u);
  }, []), p.useEffect(() => {
    r && o(r.avatar || Oe.getUserRandomAvatar(r.avatarIndex));
  }, [r]);
  const y = async (h) => {
    d(h);
  }, m = () => {
    g(!f), Oi.setData(!f);
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: ee(
        "w-full h-[300px] relative overflow-hidden bg-black"
      ),
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: ee(
              "absolute inset-[-20%] z-0",
              "bg-center bg-no-repeat bg-cover",
              "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
            ),
            style: {
              backgroundImage: `url(${a})`
            }
          }
        ),
        /* @__PURE__ */ v.jsxs("div", { className: ee(
          "relative z-10",
          "tablet:flex tablet:justify-between tablet:gap-2",
          "py-[28px] tablet:py-[72px] tablet:px-[104px]",
          "w-[317px] mx-auto tablet:w-full"
        ), children: [
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("div", { className: ee(
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
                  className: ee(
                    "w-[39px] h-[39px] rounded-full",
                    "tablet:w-[72px] tablet:h-[72px]",
                    "tablet:mr-[24px]",
                    "mb-[38px] tablet:mb-0"
                  )
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ v.jsx("div", { className: ee(
                  "text-[#828282] font-normal leading-none",
                  "text-[8px] tablet:text-[16px]",
                  "mb-[0px] tablet:mb-[10px]"
                ), children: "Portfolio value" }),
                /* @__PURE__ */ v.jsx("div", { className: ee(
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
          /* @__PURE__ */ v.jsxs("div", { className: ee(
            "w-[276px] tablet:w-auto",
            "mx-auto tablet:mx-0",
            "tablet:mt-[75px]"
          ), children: [
            /* @__PURE__ */ v.jsxs("div", { className: ee(
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
                Ua,
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
          D0,
          {
            open: i,
            setOpen: l,
            address: e,
            tokenType: u,
            onClose: () => l(!1)
          }
        ),
        /* @__PURE__ */ v.jsx(
          Q0,
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
function nv() {
  return /* @__PURE__ */ v.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ v.jsx(tv, {}),
    /* @__PURE__ */ v.jsx("div", { className: ee(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ v.jsx(Zu, {}) })
  ] });
}
function rv() {
  const e = Ju();
  return console.error(e), /* @__PURE__ */ v.jsx("div", { id: "error-page", className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ v.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ v.jsx("h1", { className: "text-4xl font-bold text-red-600 mb-4", children: "Oops!" }),
    /* @__PURE__ */ v.jsx("p", { className: "text-xl text-gray-700 mb-4", children: "Sorry, an unexpected error has occurred." }),
    /* @__PURE__ */ v.jsx("p", { className: "text-lg text-gray-600 italic", children: e.statusText || e.message })
  ] }) });
}
function iy({
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
const av = 30, ov = async () => {
  try {
    const e = await $e.post("/marketplace/product/search-products", {
      page: 1,
      pageSize: av
    });
    return {
      products: e.data.products,
      total: e.data.total
    };
  } catch (e) {
    const t = er(e);
    throw new Error(t.message);
  }
}, iv = ed([
  {
    path: "/",
    async lazy() {
      const { RootLayout: e } = await import("./root-layout-Df1ta_Xv.js");
      return { Component: e };
    },
    errorElement: /* @__PURE__ */ v.jsx(rv, {}),
    children: [
      {
        path: "/",
        async lazy() {
          const { default: e } = await import("./main-layout-BJyDxEN2.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-icglJj9n.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-BO7KO35B.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-BOf3wmwi.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-CHrt3qrs.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-daily-withdrawal-limit",
            async lazy() {
              const { default: e } = await import("./page-DpMdMP6p.js");
              return { Component: e };
            }
          },
          {
            path: "dashboard",
            element: /* @__PURE__ */ v.jsx(nv, {}),
            children: [
              {
                index: !0,
                async lazy() {
                  const { default: e } = await import("./page-C31-AP8M.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-Cj5vGwJH.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-Bth3i0jV.js");
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
                  const { default: e } = await import("./page-CB6F18TJ.js");
                  return { Component: e };
                },
                loader: ov
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-BfG644XT.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-C0Q550OK.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-CNXzwtsQ.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-mWe5mD8P.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-DtwcWruH.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-BPhAbZ7R.js");
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
                          const { default: e } = await import("./page-D_405SZ6.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-ByPxcSj0.js");
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
                  const { default: e } = await import("./page-Kv8aFbNA.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-CkX2ZNmi.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "profile",
            async lazy() {
              const { default: e } = await import("./index-DxxEVLpL.js");
              return { Component: e };
            }
          },
          {
            path: "multisender",
            async lazy() {
              const { default: e } = await import("./page-MqMBBftc.js");
              return { Component: e };
            }
          },
          {
            path: "my-rewards",
            async lazy() {
              const { default: e } = await import("./page-CsQBPrX7.js");
              return { Component: e };
            }
          }
        ]
      }
    ]
  }
]);
function sv() {
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
          return /* @__PURE__ */ v.jsx(Ba, {});
        if (n === "info")
          return /* @__PURE__ */ v.jsx(hd, {});
        if (n === "warning")
          return /* @__PURE__ */ v.jsx(dc, {});
      },
      toastClassName: ee(
        "text-sm",
        // 'laptop:top-[82px]',
        "max-w-[688px] w-auto"
        // 'left-1/2 -translate-x-1/2'
      )
    }
  );
}
var Ei = "moonpay-react-sdk-embedded-frame", cv = ({
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
    quoteCurrencyAmount: T,
    lockAmount: S,
    email: C,
    externalTransactionId: w,
    externalCustomerId: b,
    paymentMethod: E,
    redirectURL: k,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: z,
    baseOrigin: $,
    // handlers
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: A,
    onTransactionCompleted: R,
    onUnsupportedRegion: I,
    onSwapsCustomerSetupComplete: L,
    onCloseOverlay: O,
    onTransactionCreated: H,
    // auth
    auth: G,
    useWarnBeforeRefresh: Q,
    // other
    overlayNode: B
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
    quoteCurrencyAmount: T,
    lockAmount: S,
    email: C,
    externalTransactionId: w,
    externalCustomerId: b,
    paymentMethod: E,
    redirectURL: k,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: z,
    baseOrigin: $
  }, ie = {
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: A,
    onTransactionCompleted: R,
    onUnsupportedRegion: I,
    onSwapsCustomerSetupComplete: L,
    onCloseOverlay: O,
    onTransactionCreated: H
  };
  return {
    flow: "buy",
    variant: e.variant,
    environment: r,
    params: te,
    debug: n,
    handlers: ie,
    auth: G,
    useWarnBeforeRefresh: Q,
    containerNodeSelector: `#${Ei}`,
    overlayNode: B
  };
}, lv = ({
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
    baseCurrencyAmount: T,
    quoteCurrencyAmount: S,
    lockAmount: C,
    email: w,
    externalTransactionId: b,
    externalCustomerId: E,
    paymentMethod: k,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: j,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: z,
    skipUnsupportedRegionScreen: $,
    mpWalletId: D,
    baseOrigin: W,
    // handlers
    onAuthToken: P,
    onInitiateDeposit: A,
    onKmsWalletsCreated: R,
    onLogin: I,
    onTransactionCompleted: L,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: H,
    onCloseOverlay: G,
    onTransactionCreated: Q,
    // auth
    auth: B,
    useWarnBeforeRefresh: te
  } = e, ie = {
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
    baseCurrencyAmount: T,
    quoteCurrencyAmount: S,
    lockAmount: C,
    email: w,
    externalTransactionId: b,
    externalCustomerId: E,
    paymentMethod: k,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: j,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: z,
    skipUnsupportedRegionScreen: $,
    mpWalletId: D,
    baseOrigin: W
  }, Ee = {
    onAuthToken: P,
    onInitiateDeposit: A,
    onKmsWalletsCreated: R,
    onLogin: I,
    onTransactionCompleted: L,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: H,
    onCloseOverlay: G,
    onTransactionCreated: Q
  };
  return {
    flow: "sell",
    variant: e.variant,
    environment: r,
    params: ie,
    debug: n,
    handlers: Ee,
    auth: B,
    useWarnBeforeRefresh: te,
    containerNodeSelector: `#${Ei}`
  };
};
async function uv(e = "v1") {
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
function dv(e) {
  return e.startsWith("pk_live") || e.startsWith("sk_live") ? "production" : "sandbox";
}
var Fa = () => {
}, fv = {
  info: Fa,
  warn: Fa,
  error: Fa
}, hv = class Nu {
  constructor({
    logger: t,
    prefix: n
  }) {
    he(this, "prefix");
    he(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new Nu({ logger: fv });
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
}, va = p.createContext({
  apiKey: "",
  environment: "sandbox",
  debug: !1
}), pv = ({
  children: e,
  apiKey: t,
  debug: n = !1
}) => {
  const r = dv(t), [a, o] = p.useState({
    apiKey: t,
    environment: r,
    debug: n
  }), i = p.useCallback(async () => {
    const l = await uv();
    o((s) => ({ ...s, init: l }));
  }, []);
  return p.useEffect(() => {
    a.init || i();
  }, [i, a.init]), /* @__PURE__ */ v.jsx(va.Provider, { value: a, children: e });
}, mv = class extends hv {
  constructor() {
    super({ logger: console, prefix: ["MoonPay React SDK"] });
  }
}, gv = (e, t, n) => {
  const r = p.useRef(null), { init: a, debug: o } = p.useContext(va), i = p.useRef(new mv().if(o || !1)), l = p.useCallback(async () => {
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
}, vv = {
  width: "424px",
  height: "656px",
  margin: "32px 28px 32px 28px",
  border: "1px solid #E5E7EB",
  borderRadius: "16px",
  overflow: "hidden"
};
function Pu({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: r,
  style: a
}) {
  return gv(e, n, t), n ? /* @__PURE__ */ v.jsx(
    "div",
    {
      id: Ei,
      className: r,
      style: e.variant === "embedded" ? {
        ...vv,
        ...a
      } : void 0
    }
  ) : null;
}
function sy(e) {
  const { apiKey: t, environment: n } = p.useContext(va), r = p.useMemo(
    () => cv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Pu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
function cy(e) {
  const { apiKey: t, environment: n } = p.useContext(va), r = p.useMemo(
    () => lv({
      props: e,
      apiKey: t,
      environment: n,
      debug: !1,
      signature: e.signature || ""
    }),
    [e, t, n]
  );
  return /* @__PURE__ */ v.jsx(
    Pu,
    {
      config: r,
      visible: e.visible,
      onUrlSignatureRequested: e.onUrlSignatureRequested,
      className: e.className,
      style: e.style
    }
  );
}
const yv = "pk_test_GGxTJn499WJaHQZ6faHNOacvCqYZuM";
function bv({ children: e }) {
  return /* @__PURE__ */ v.jsx(
    pv,
    {
      apiKey: yv,
      debug: !0,
      children: e
    }
  );
}
const xv = {
  overview: "Overview",
  dashboard: "Dashboard",
  marketplace: "Marketplace",
  community: "Community"
}, Cv = {
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
}, Sv = {
  copySuccess: "Copy successfully!",
  connectSuccess: "Connected successfully!"
}, Ev = {
  authenticationError: "Authentication Error. Please sign in again."
}, wv = {
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
  header: xv,
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
  vastWalletConnect: Cv,
  toastSuccess: Sv,
  toastError: Ev
}, Tv = {
  overview: "概览",
  dashboard: "仪表盘",
  marketplace: "市场",
  community: "社区"
}, Av = {
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
}, kv = {
  copySuccess: "复制成功!",
  connectSuccess: "连接成功!"
}, Nv = {
  authenticationError: "认证错误，请重新登录。"
}, Pv = {
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
  header: Tv,
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
  vastWalletConnect: Av,
  toastSuccess: kv,
  toastError: Nv
}, Rv = {
  en: {
    translation: wv
  },
  zh: {
    translation: Pv
  }
};
rt("savedLng", hc);
const Mv = hc.getData();
fc.use(vd).init({
  resources: Rv,
  lng: Mv || "en",
  // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: !1
    // react already safes from xss
  }
});
function Ov() {
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
const Iv = new c0({
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
function jv() {
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ v.jsx(p.Suspense, { children: /* @__PURE__ */ v.jsx(h0, { client: Iv, children: /* @__PURE__ */ v.jsxs(yd, { i18n: fc, children: [
      /* @__PURE__ */ v.jsx(bv, { children: /* @__PURE__ */ v.jsx(td, { router: iv }) }),
      /* @__PURE__ */ v.jsx(sv, {})
    ] }) }) }) }),
    /* @__PURE__ */ v.jsx(Ov, {})
  ] });
}
const _v = "theme_light", Lv = "0.0.0", Dv = "module", Fv = {
  dev: "vite",
  build: "tsc -b && vite build --mode heroku",
  "build-local": "tsc -b && vite build",
  lint: "eslint . --quiet",
  preview: "vite preview"
}, Bv = {
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
}, $v = {
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
}, Hv = {
  name: _v,
  private: !0,
  version: Lv,
  type: Dv,
  scripts: Fv,
  dependencies: Bv,
  devDependencies: $v
};
rt("isDev", mc);
function zs(e) {
  const t = $a(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ v.jsx(jv, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
mc ? zs("root") : typeof window < "u" && (window[`mount_${Hv.name}`] = zs);
export {
  zd as $,
  Vt as A,
  rn as B,
  fn as C,
  Zd as D,
  Yv as E,
  Ym as F,
  Bn as G,
  Ct as H,
  qr as I,
  xt as J,
  qn as K,
  gc as L,
  gi as M,
  Hp as N,
  _p as O,
  ey as P,
  Jv as Q,
  $l as R,
  D0 as S,
  He as T,
  Vl as U,
  Zv as V,
  xo as W,
  ny as X,
  ts as Y,
  Lr as Z,
  Y as _,
  Oe as a,
  Bi as a$,
  yr as a0,
  F0 as a1,
  gu as a2,
  Ko as a3,
  Ce as a4,
  Ua as a5,
  Z0 as a6,
  Q0 as a7,
  iy as a8,
  av as a9,
  ir as aA,
  op as aB,
  $p as aC,
  Up as aD,
  Nt as aE,
  Oa as aF,
  Bl as aG,
  vc as aH,
  Ud as aI,
  Qv as aJ,
  M0 as aK,
  Li as aL,
  qv as aM,
  Xv as aN,
  pf as aO,
  oi as aP,
  So as aQ,
  on as aR,
  _c as aS,
  Tc as aT,
  Wa as aU,
  Xr as aV,
  Oh as aW,
  to as aX,
  Na as aY,
  Tf as aZ,
  wc as a_,
  Gg as aa,
  sy as ab,
  cy as ac,
  yc as ad,
  f0 as ae,
  ji as af,
  N0 as ag,
  Zl as ah,
  sr as ai,
  sa as aj,
  ca as ak,
  an as al,
  Jr as am,
  cm as an,
  mm as ao,
  ma as ap,
  _0 as aq,
  O0 as ar,
  al as as,
  ty as at,
  bo as au,
  mg as av,
  ry as aw,
  mf as ax,
  Un as ay,
  gf as az,
  Jd as b,
  km as b0,
  ql as b1,
  Qo as b2,
  zs as b3,
  ee as c,
  bc as d,
  xc as e,
  $e as f,
  rt as g,
  er as h,
  Qr as i,
  _i as j,
  Yd as k,
  hc as l,
  Ut as m,
  Qe as n,
  Co as o,
  Fc as p,
  Ht as q,
  Lp as r,
  Wt as s,
  be as t,
  ev as u,
  Hn as v,
  Yr as w,
  Hl as x,
  ff as y,
  ze as z
};
