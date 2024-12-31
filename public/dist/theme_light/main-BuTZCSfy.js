var zu = Object.defineProperty;
var Ni = (e) => {
  throw TypeError(e);
};
var Vu = (e, t, n) => t in e ? zu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => Vu(e, typeof t != "symbol" ? t + "" : t, n), Ca = (e, t, n) => t.has(e) || Ni("Cannot " + n);
var b = (e, t, n) => (Ca(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J = (e, t, n) => t.has(e) ? Ni("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), z = (e, t, n, r) => (Ca(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ae = (e, t, n) => (Ca(e, t, "access private method"), n);
var Sr = (e, t, n, r) => ({
  set _(a) {
    z(e, t, a, n);
  },
  get _() {
    return b(e, t, r);
  }
});
import { j as v, S as Wu, d as Zs, g as Js, P as Gu, C as ec, I as tc, i as nc, k as rc, l as ac, L as oc, m as ic, n as Ku, T as Qu, o as sc, p as cc, q as lc, r as qu } from "./vendor-radix-AvjOLIap.js";
import { p as K, b as Yo, a as p, g as Xu, R as q, c as Jn, $ as Zo, f as Yu, O as Zu, u as Ju, h as ed, i as td } from "./vendor-react-DSEtE0wE.js";
import { t as nd, c as rd, C as ad, a as od, b as id, d as sd, e as cd, _ as et, X as Jo, L as ld, f as Fa, g as uc, h as ud, i as dd, j as fd, I as hd } from "./vendor-ui-utils-CGOon9_P.js";
import { a as zt, u as ei, C as pd, B as lt, Q as md, X as gd, i as dc, b as vd, I as yd } from "./vendor-utils-BPVAmMsZ.js";
import { d as bd, f as xd, h as Gn, a as Cd, b as Sd, s as Ed, t as Sa, c as wd, e as Td, i as Wr, I as Pi, g as ti, j as Ln, k as un, l as Dn, m as Ad, n as kd, _ as ue, o as Nd, p as F, q as Z, r as sn, u as _r } from "./vendor-web3-CQEmmIwE.js";
var Ba, Er = Yo;
if (K.env.NODE_ENV === "production")
  Ba = Er.createRoot, Er.hydrateRoot;
else {
  var Ri = Er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ba = function(e, t) {
    Ri.usingClientEntryPoint = !0;
    try {
      return Er.createRoot(e, t);
    } finally {
      Ri.usingClientEntryPoint = !1;
    }
  };
}
const at = console.log.bind(console, "🚀");
function ee(...e) {
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
const fc = new At("language"), Mi = new At("hideTotalAsset");
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
const Ie = new Pd(), hc = [
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
var xe = /* @__PURE__ */ ((e) => (e.ETH = "ETH", e.BASE_ETH = "BASE_ETH", e.MATIC = "MATIC", e.TVWT = "TVWT", e.VAST = "VAST", e))(xe || {}), Fn = /* @__PURE__ */ ((e) => (e.POL = "POL", e.SepoliaETH = "SepoliaETH", e.BaseSepoliaETH = "BaseSepoliaETH", e))(Fn || {});
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
    contractAbi: f
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
    this.tokenType = t, this.name = n, this.symbol = r, this.decimals = a, this.gasSymbol = o, this.logo = i, this.color = l, this.viemChain = s, this.publicClient = c, this.scanTransactionUrl = u, this.contractAddress = d, this.contractAbi = f;
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
    i ? Sa(i) : "0x",
    s ? Sa(s) : "0x",
    a ? Sa(a) : "0x",
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
    throw new Pi({ address: t });
  if (n && !Wr(n))
    throw new Pi({ address: n });
}
const Oi = {
  contracts: Rd,
  formatters: Md,
  serializers: Id
}, Kn = 11155111, Gr = /* @__PURE__ */ ti({
  ...Oi,
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
    ...Oi.contracts,
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
}), Kr = /* @__PURE__ */ ti({
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
}), Ii = /* @__PURE__ */ ti({
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
      tokenType: xe.ETH,
      name: "Ethereum Sepolia",
      symbol: "SepoliaETH",
      decimals: 18,
      gasSymbol: Fn.SepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: Ii,
      publicClient: Ln({
        chain: Ii,
        transport: Dn("https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.etherscan.io/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return un(n);
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
      tokenType: xe.MATIC,
      name: "Polygon Amoy",
      symbol: "POL",
      decimals: 18,
      gasSymbol: Fn.POL,
      logo: "/imgs/logos/matic.png",
      color: "#c08fec",
      viemChain: Kr,
      publicClient: Ln({
        chain: Kr,
        transport: Dn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return un(n);
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
      tokenType: xe.TVWT,
      name: "TheVastlinkToken",
      symbol: "TVWT",
      decimals: 18,
      gasSymbol: Fn.POL,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Kr,
      publicClient: Ln({
        chain: Kr,
        transport: Dn("https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://amoy.polygonscan.com/tx/",
      contractAddress: "0x57518fb87f7972c27f4704d9f2de9fdc5d2c8b5e",
      contractAbi: hc
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return un(n);
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
      tokenType: xe.VAST,
      name: "TheVastlinkToken",
      symbol: "VAST",
      decimals: 18,
      gasSymbol: Fn.BaseSepoliaETH,
      logo: "/imgs/logos/tvwt.png",
      color: "#52c41a",
      viemChain: Gr,
      publicClient: Ln({
        chain: Gr,
        transport: Dn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/",
      contractAddress: "0x4f86c33aE84c46972c2f7F8d33FAE3375F3E191b",
      contractAbi: Ad
      // kkktodo: add vast abi
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.readContract({
      address: this.contractAddress,
      abi: this.contractAbi,
      functionName: "balanceOf",
      args: [t]
    });
    return un(n);
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
      tokenType: xe.BASE_ETH,
      name: "Base Sepolia",
      symbol: "BaseSepoliaETH",
      decimals: 18,
      gasSymbol: Fn.BaseSepoliaETH,
      logo: "/imgs/logos/eth.png",
      color: "#3d7dc9",
      viemChain: Gr,
      publicClient: Ln({
        chain: Gr,
        transport: Dn("https://base-sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679")
      }),
      scanTransactionUrl: "https://sepolia.basescan.org/tx/"
    });
  }
  async getBalance(t) {
    const n = await this.publicClient.getBalance({
      address: t
    });
    return un(n);
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
const Kt = class Kt {
  constructor() {
    pe(this, "tokenMap");
    this.tokenMap = /* @__PURE__ */ new Map([
      [xe.ETH, new Dd()],
      [xe.BASE_ETH, new Hd()],
      [xe.MATIC, new Fd()],
      [xe.TVWT, new Bd()],
      [xe.VAST, new $d()]
    ]);
  }
  static getInstance() {
    return Kt.instance || (Kt.instance = new Kt()), Kt.instance;
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
    return t === xe.ETH || t === xe.BASE_ETH || t === xe.MATIC;
  }
  isERC20Token(t) {
    return t === xe.TVWT || t === xe.VAST;
  }
  createTokenMap(t) {
    return Array.from(this.tokenMap.entries()).reduce((n, [r, a]) => (n[r] = t(a), n), {});
  }
  getNativeTokenTypeByGasSymbol(t) {
    var r;
    return ((r = Array.from(this.tokenMap.values()).find((a) => a.gasSymbol === t && this.isNativeToken(a.tokenType))) == null ? void 0 : r.tokenType) || null;
  }
};
pe(Kt, "instance");
let $a = Kt;
const Se = $a.getInstance();
Object.freeze(Se);
const Ud = hc, Qv = (e) => e.replace(/\.?0+$/, ""), Qr = (e, t = 6) => parseFloat(e).toFixed(t), zd = (e, t = 2) => {
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
    const o = Se.getToken(e).viemChain;
    if (!o) return null;
    const i = Ln({
      chain: o,
      transport: Dn()
    });
    let l;
    if (Se.isERC20Token(e) && (l = Se.getToken(e).contractAddress, !l))
      throw new Error("Invalid token contract address");
    let s;
    if (Se.isERC20Token(e)) {
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
const ji = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, pc = K.env.NODE_ENV === "development", qv = (e, t) => {
  const n = document.createElement("a");
  n.href = e, n.download = t, document.body.appendChild(n), n.click(), document.body.removeChild(n);
};
function er(e) {
  var t;
  if (zt.isAxiosError(e)) {
    const n = e;
    return n.response ? { message: `${((t = n.response.data) == null ? void 0 : t.message) || n.message}` } : n.request ? { message: "Network error, please check your internet connection" } : { message: `Request error: ${n.message}` };
  } else return e instanceof Error ? { message: e.message } : { message: "An unknown error occurred" };
}
function Ha({
  iconSize: e = 20,
  address: t,
  className: n = "",
  iconClassName: r = "",
  ...a
}) {
  const { t: o } = ei();
  return /* @__PURE__ */ v.jsx(pd, { text: t, onCopy: () => {
    lt.success(o("toastSuccess.copySuccess"), {
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
), nn = p.forwardRef(
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
nn.displayName = "Button";
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
    } = Ie.all();
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
function mc({
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
  return r && a ? Yo.createPortal(
    /* @__PURE__ */ v.jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-primary-foreground/80 z-[2147483646]", children: s }),
    document.body
  ) : s;
}
const gc = p.forwardRef(
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
gc.displayName = "Textarea";
var vc = /* @__PURE__ */ ((e) => (e.PURCHASE = "PURCHASE", e.SELL = "SELL", e.TRANSFER = "TRANSFER", e.SWAP = "SWAP", e.INVITE_TRANSFER = "INVITE_TRANSFER", e))(vc || {}), ia = /* @__PURE__ */ ((e) => (e.PASSPORT = "PASSPORT", e.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", e))(ia || {});
class ni {
  constructor(t) {
    pe(this, "config");
    if (this.constructor === ni)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
zt.defaults.withCredentials = !0;
const Fe = zt.create({
  baseURL: "https://api.vastwallet.j-labs.xyz",
  withCredentials: !0,
  headers: {
    "Content-Type": "application/json"
  }
});
Fe.interceptors.response.use(
  (e) => e,
  async (e) => {
    var t, n;
    if (((t = e.response) == null ? void 0 : t.status) === 401 || ((n = e.response) == null ? void 0 : n.status) === 403) {
      const r = e.response.data.message || "Authentication error";
      console.log(`${r}, redirecting to login...`), Ie.clearAllAuthData(), typeof window < "u" && (lt.error(r), console.warn("Router not set, falling back to window.location"), window.location.href = "/auth");
    }
    return Promise.reject(e);
  }
);
class Qd extends ni {
  constructor() {
    super({
      serviceType: ia.WEB3AUTH_WITH_MPC
    });
    pe(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: n
  }) {
    const { data: r } = await Fe.post("/keymanagement/signup", {
      username: n
    }), { address: a, displayName: o } = r;
    Ie.saveAuthDataByKey("address", a), Ie.saveAuthDataByKey("username", n), o ? Ie.saveAuthDataByKey("displayName", o) : Ie.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: n }) {
    const { data: r } = await Fe.post("/keymanagement/signin", {
      username: n
    }), { address: a, displayName: o } = r;
    Ie.saveAuthDataByKey("address", a), Ie.saveAuthDataByKey("username", n), o ? Ie.saveAuthDataByKey("displayName", o) : Ie.removeAuthDataByKey("displayName");
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
    } } = await Fe.post("/transaction/sign", {
      from: Ie.all().address,
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
    } } = await Fe.post("/transaction/verify-to-sign", {
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
    return await Se.getToken(r).publicClient.waitForTransactionReceipt({
      hash: n
    });
  }
  async test() {
    await Fe.post("/keymanagement/test-mpc");
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
  Zs,
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
ef.displayName = Zs.displayName;
const tf = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  Js,
  {
    ref: n,
    className: ee(
      "z-[10002] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
tf.displayName = Js.displayName;
const yc = p.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ v.jsx(Gu, { children: /* @__PURE__ */ v.jsx(
  ec,
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
yc.displayName = ec.displayName;
const bc = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  tc,
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
bc.displayName = tc.displayName;
const nf = p.forwardRef(({ className: e, children: t, checked: n, ...r }, a) => /* @__PURE__ */ v.jsxs(
  nc,
  {
    ref: a,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(rc, { children: /* @__PURE__ */ v.jsx(sd, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
nf.displayName = nc.displayName;
const rf = p.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ v.jsxs(
  ac,
  {
    ref: r,
    className: ee(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ v.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ v.jsx(rc, { children: /* @__PURE__ */ v.jsx(cd, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
rf.displayName = ac.displayName;
const af = p.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ v.jsx(
  oc,
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
af.displayName = oc.displayName;
const of = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  ic,
  {
    ref: n,
    className: ee("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
of.displayName = ic.displayName;
function _i(e, t) {
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
var xc = { exports: {} };
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
})(xc);
var sf = xc.exports;
const Qe = /* @__PURE__ */ Xu(sf);
var Ua = { exports: {} }, se = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function cf() {
  if (Li) return se;
  Li = 1;
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
var ce = {}, Di;
function lf() {
  return Di || (Di = 1, K.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, h = !1, T = !1, S = !1, C;
    C = Symbol.for("react.module.reference");
    function w($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === n || $ === a || S || $ === r || $ === c || $ === u || T || $ === g || y || m || h || typeof $ == "object" && $ !== null && ($.$$typeof === f || $.$$typeof === d || $.$$typeof === o || $.$$typeof === i || $.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === C || $.getModuleId !== void 0));
    }
    function x($) {
      if (typeof $ == "object" && $ !== null) {
        var qe = $.$$typeof;
        switch (qe) {
          case e:
            var ve = $.type;
            switch (ve) {
              case n:
              case a:
              case r:
              case c:
              case u:
                return ve;
              default:
                var ze = ve && ve.$$typeof;
                switch (ze) {
                  case l:
                  case i:
                  case s:
                  case f:
                  case d:
                  case o:
                    return ze;
                  default:
                    return qe;
                }
            }
          case t:
            return qe;
        }
      }
    }
    var E = i, k = o, N = e, M = s, j = n, _ = f, V = d, H = t, D = a, W = r, P = c, A = u, R = !1, I = !1;
    function L($) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O($) {
      return I || (I = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function U($) {
      return x($) === i;
    }
    function G($) {
      return x($) === o;
    }
    function Q($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function B($) {
      return x($) === s;
    }
    function te($) {
      return x($) === n;
    }
    function ie($) {
      return x($) === f;
    }
    function Ee($) {
      return x($) === d;
    }
    function we($) {
      return x($) === t;
    }
    function Ce($) {
      return x($) === a;
    }
    function Re($) {
      return x($) === r;
    }
    function Te($) {
      return x($) === c;
    }
    function je($) {
      return x($) === u;
    }
    ce.ContextConsumer = E, ce.ContextProvider = k, ce.Element = N, ce.ForwardRef = M, ce.Fragment = j, ce.Lazy = _, ce.Memo = V, ce.Portal = H, ce.Profiler = D, ce.StrictMode = W, ce.Suspense = P, ce.SuspenseList = A, ce.isAsyncMode = L, ce.isConcurrentMode = O, ce.isContextConsumer = U, ce.isContextProvider = G, ce.isElement = Q, ce.isForwardRef = B, ce.isFragment = te, ce.isLazy = ie, ce.isMemo = Ee, ce.isPortal = we, ce.isProfiler = Ce, ce.isStrictMode = Re, ce.isSuspense = Te, ce.isSuspenseList = je, ce.isValidElementType = w, ce.typeOf = x;
  }()), ce;
}
K.env.NODE_ENV === "production" ? Ua.exports = cf() : Ua.exports = lf();
var Lr = Ua.exports, za = {}, ri = [], uf = function(t) {
  ri.push(t);
};
function ai(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ri.reduce(function(r, a) {
      return a(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function df(e, t) {
  if (K.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = ri.reduce(function(r, a) {
      return a(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Cc() {
  za = {};
}
function Sc(e, t, n) {
  !t && !za[n] && (e(!1, n), za[n] = !0);
}
function Vt(e, t) {
  Sc(ai, e, t);
}
function ff(e, t) {
  Sc(df, e, t);
}
Vt.preMessage = uf;
Vt.resetWarned = Cc;
Vt.noteOnce = ff;
function Fi(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function hf(e) {
  return e && ue(e) === "object" && Fi(e.nativeElement) ? e.nativeElement : Fi(e) ? e : null;
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
function oi(e, t, n) {
  var r = p.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Ec = function(t, n) {
  typeof t == "function" ? t(n) : ue(t) === "object" && t && "current" in t && (t.current = n);
}, mf = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var a = n.filter(Boolean);
  return a.length <= 1 ? a[0] : function(o) {
    n.forEach(function(i) {
      Ec(i, o);
    });
  };
}, Xv = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return oi(function() {
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
function Bi(e) {
  return /* @__PURE__ */ p.isValidElement(e) && !Lr.isFragment(e);
}
Number(p.version.split(".")[0]) >= 19;
function xt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function $i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nd(r.key), r);
  }
}
function Ct(e, t, n) {
  return t && $i(e.prototype, t), n && $i(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Va(e, t) {
  return Va = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Va(e, t);
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
  }), t && Va(e, t);
}
function Xr(e) {
  return Xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Xr(e);
}
function wc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wc = function() {
    return !!e;
  })();
}
function rn(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vf(e, t) {
  if (t && (ue(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rn(e);
}
function ca(e) {
  var t = wc();
  return function() {
    var n, r = Xr(e);
    if (t) {
      var a = Xr(this).constructor;
      n = Reflect.construct(r, arguments, a);
    } else n = r.apply(this, arguments);
    return vf(this, n);
  };
}
function Wa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yf(e) {
  if (Array.isArray(e)) return Wa(e);
}
function Tc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ii(e, t) {
  if (e) {
    if (typeof e == "string") return Wa(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Wa(e, t) : void 0;
  }
}
function bf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ue(e) {
  return yf(e) || Tc(e) || ii(e) || bf();
}
var Ac = function(t) {
  return +setTimeout(t, 16);
}, kc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ac = function(t) {
  return window.requestAnimationFrame(t);
}, kc = function(t) {
  return window.cancelAnimationFrame(t);
});
var Hi = 0, la = /* @__PURE__ */ new Map();
function Nc(e) {
  la.delete(e);
}
var Yr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Hi += 1;
  var r = Hi;
  function a(o) {
    if (o === 0)
      Nc(r), t();
    else {
      var i = Ac(function() {
        a(o - 1);
      });
      la.set(r, i);
    }
  }
  return a(n), r;
};
Yr.cancel = function(e) {
  var t = la.get(e);
  return Nc(e), kc(t);
};
K.env.NODE_ENV !== "production" && (Yr.ids = function() {
  return la;
});
function Pc(e) {
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
function Rc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e, t) {
  return Pc(e) || xf(e, t) || ii(e, t) || Rc();
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
var Ui = "data-rc-order", zi = "data-rc-priority", Sf = "rc-util-key", Ga = /* @__PURE__ */ new Map();
function Mc() {
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
function si(e) {
  return Array.from((Ga.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Oc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Nt())
    return null;
  var n = t.csp, r = t.prepend, a = t.priority, o = a === void 0 ? 0 : a, i = Ef(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(Ui, i), l && o && s.setAttribute(zi, "".concat(o)), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  var c = ua(t), u = c.firstChild;
  if (r) {
    if (l) {
      var d = (t.styles || si(c)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Ui)))
          return !1;
        var g = Number(f.getAttribute(zi) || 0);
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
function Ic(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = ua(t);
  return (t.styles || si(n)).find(function(r) {
    return r.getAttribute(Mc(t)) === e;
  });
}
function jc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ic(e, t);
  if (n) {
    var r = ua(t);
    r.removeChild(n);
  }
}
function wf(e, t) {
  var n = Ga.get(e);
  if (!n || !Cf(document, n)) {
    var r = Oc("", t), a = r.parentNode;
    Ga.set(e, a), e.removeChild(r);
  }
}
function an(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ua(n), a = si(r), o = F(F({}, n), {}, {
    styles: a
  });
  wf(r, o);
  var i = Ic(t, o);
  if (i) {
    var l, s;
    if ((l = o.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = o.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = o.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Oc(e, o);
  return u.setAttribute(Mc(o), t), u;
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
function Ka(e) {
  return e.join(Af);
}
var kf = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "instanceId", void 0), Z(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ct(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Ka(n));
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
      return this.opUpdate(Ka(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var a = this.cache.get(n), o = r(a);
      o === null ? this.cache.delete(n) : this.cache.set(n, o);
    }
  }]), e;
}(), In = "data-token-hash", ut = "data-css-hash", Nf = "data-cache-path", Ft = "__cssinjs_instance__";
function Pf() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ut, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Ft] = a[Ft] || e, a[Ft] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ut, "]"))).forEach(function(a) {
      var o = a.getAttribute(ut);
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
var ci = /* @__PURE__ */ function() {
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
Z(ci, "MAX_CACHE_SIZE", 20);
Z(ci, "MAX_CACHE_OFFSET", 5);
var Vi = 0, _c = /* @__PURE__ */ function() {
  function e(t) {
    xt(this, e), Z(this, "derivatives", void 0), Z(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Vi, t.length === 0 && ai(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Vi += 1;
  }
  return Ct(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), Ea = new ci();
function Qa(e) {
  var t = Array.isArray(e) ? e : [e];
  return Ea.has(t) || Ea.set(t, new _c(t)), Ea.get(t);
}
var Mf = /* @__PURE__ */ new WeakMap(), wa = {};
function Of(e, t) {
  for (var n = Mf, r = 0; r < t.length; r += 1) {
    var a = t[r];
    n.has(a) || n.set(a, /* @__PURE__ */ new WeakMap()), n = n.get(a);
  }
  return n.has(wa) || n.set(wa, e()), n.get(wa);
}
var Wi = /* @__PURE__ */ new WeakMap();
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = Wi.get(e) || "";
  return n || (Object.keys(e).forEach(function(r) {
    var a = e[r];
    n += r, a instanceof _c ? n += a.id : a && ue(a) === "object" ? n += Yn(a, t) : n += a;
  }), t && (n = tr(n)), Wi.set(e, n)), n;
}
function Gi(e, t) {
  return tr("".concat(t, "_").concat(Yn(e, !0)));
}
var qa = Nt();
function Ht(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Zr(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return e;
  var o = F(F({}, r), {}, Z(Z({}, In, t), ut, n)), i = Object.keys(o).map(function(l) {
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
}, Lc = function(t, n, r) {
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
}, Ki = K.env.NODE_ENV !== "test" && Nt() ? p.useLayoutEffect : p.useEffect, Dc = function(t, n) {
  var r = p.useRef(!0);
  Ki(function() {
    return t(r.current);
  }, n), Ki(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Yv = function(t, n) {
  Dc(function(r) {
    if (!r)
      return t();
  }, n);
}, jf = F({}, Zo), Qi = jf.useInsertionEffect, _f = function(t, n, r) {
  p.useMemo(t, r), Dc(function() {
    return n(!0);
  }, r);
}, Lf = Qi ? function(e, t, n) {
  return Qi(function() {
    return e(), t();
  }, n);
} : _f, Df = F({}, Zo), Ff = Df.useInsertionEffect, Bf = function(t) {
  var n = [], r = !1;
  function a(o) {
    if (r) {
      K.env.NODE_ENV !== "production" && ai(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
var Xa = !1;
function zf() {
  return Xa;
}
const Vf = K.env.NODE_ENV === "production" ? Uf : zf;
if (K.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Ta = window;
  if (typeof Ta.webpackHotUpdate == "function") {
    var Wf = Ta.webpackHotUpdate;
    Ta.webpackHotUpdate = function() {
      return Xa = !0, setTimeout(function() {
        Xa = !1;
      }, 0), Wf.apply(void 0, arguments);
    };
  }
}
function li(e, t, n, r, a) {
  var o = p.useContext(da), i = o.cache, l = [e].concat(Ue(t)), s = Ka(l), c = Hf([s]), u = Vf(), d = function(m) {
    i.opUpdate(s, function(h) {
      var T = h || [void 0, void 0], S = Y(T, 2), C = S[0], w = C === void 0 ? 0 : C, x = S[1], E = x;
      K.env.NODE_ENV !== "production" && x && u && (r == null || r(E, u), E = null);
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
        var h = m || [], T = Y(h, 2), S = T[0], C = S === void 0 ? 0 : S, w = T[1], x = C - 1;
        return x === 0 ? (c(function() {
          (y || !i.opGet(s)) && (r == null || r(w, !1));
        }), null) : [C - 1, w];
      });
    };
  }, [s]), g;
}
var Gf = {}, Kf = K.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Gt = /* @__PURE__ */ new Map();
function Qf(e) {
  Gt.set(e, (Gt.get(e) || 0) + 1);
}
function qf(e, t) {
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
var Xf = 0;
function Yf(e, t) {
  Gt.set(e, (Gt.get(e) || 0) - 1);
  var n = Array.from(Gt.keys()), r = n.filter(function(a) {
    var o = Gt.get(a) || 0;
    return o <= 0;
  });
  n.length - r.length > Xf && r.forEach(function(a) {
    qf(a, t), Gt.delete(a);
  });
}
var Zf = function(t, n, r, a) {
  var o = r.getDerivativeToken(t), i = F(F({}, o), n);
  return a && (i = a(i)), i;
}, Fc = "token";
function Jf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = p.useContext(da), a = r.cache.instanceId, o = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? Gf : s, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, g = Of(function() {
    return Object.assign.apply(Object, [{}].concat(Ue(t)));
  }, t), y = Yn(g), m = Yn(c), h = f ? Yn(f) : "", T = li(Fc, [l, e.id, y, m, h], function() {
    var S, C = d ? d(g, c, e) : Zf(g, c, e, u), w = F({}, C), x = "";
    if (f) {
      var E = Lc(C, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), k = Y(E, 2);
      C = k[0], x = k[1];
    }
    var N = Gi(C, l);
    C._tokenKey = N, w._tokenKey = Gi(w, l);
    var M = (S = f == null ? void 0 : f.key) !== null && S !== void 0 ? S : N;
    C._themeKey = M, Qf(M);
    var j = "".concat(Kf, "-").concat(tr(N));
    return C._hashId = j, [C, j, w, x, (f == null ? void 0 : f.key) || ""];
  }, function(S) {
    Yf(S[0]._themeKey, a);
  }, function(S) {
    var C = Y(S, 4), w = C[0], x = C[3];
    if (f && x) {
      var E = an(x, tr("css-variables-".concat(w._themeKey)), {
        mark: ut,
        prepend: "queue",
        attachTo: o,
        priority: -999
      });
      E[Ft] = a, E.setAttribute(In, w._themeKey);
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
}, Bc = "comm", $c = "rule", Hc = "decl", nh = "@import", rh = "@keyframes", ah = "@layer", Uc = Math.abs, ui = String.fromCharCode;
function zc(e) {
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
function jn(e, t, n) {
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
var fa = 1, _n = 1, Vc = 0, tt = 0, be = 0, Bn = "";
function di(e, t, n, r, a, o, i, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: o, line: fa, column: _n, length: i, return: "", siblings: l };
}
function sh() {
  return be;
}
function ch() {
  return be = tt > 0 ? nr(Bn, --tt) : 0, _n--, be === 10 && (_n = 1, fa--), be;
}
function dt() {
  return be = tt < Vc ? nr(Bn, tt++) : 0, _n++, be === 10 && (_n = 1, fa++), be;
}
function Bt() {
  return nr(Bn, tt);
}
function Br() {
  return tt;
}
function ha(e, t) {
  return jn(Bn, e, t);
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
  return fa = _n = 1, Vc = mt(Bn = e), tt = 0, [];
}
function uh(e) {
  return Bn = "", e;
}
function Aa(e) {
  return zc(ha(tt - 1, Ya(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dh(e) {
  for (; (be = Bt()) && be < 33; )
    dt();
  return rr(e) > 2 || rr(be) > 3 ? "" : " ";
}
function fh(e, t) {
  for (; --t && dt() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return ha(e, Br() + (t < 6 && Bt() == 32 && dt() == 32));
}
function Ya(e) {
  for (; dt(); )
    switch (be) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ya(be);
        break;
      case 40:
        e === 41 && Ya(e);
        break;
      case 92:
        dt();
        break;
    }
  return tt;
}
function hh(e, t) {
  for (; dt() && e + be !== 57; )
    if (e + be === 84 && Bt() === 47)
      break;
  return "/*" + ha(t, tt - 1) + "*" + ui(e === 47 ? e : dt());
}
function ph(e) {
  for (; !rr(Bt()); )
    dt();
  return ha(e, tt);
}
function mh(e) {
  return uh($r("", null, null, null, [""], e = lh(e), 0, [0], e));
}
function $r(e, t, n, r, a, o, i, l, s) {
  for (var c = 0, u = 0, d = i, f = 0, g = 0, y = 0, m = 1, h = 1, T = 1, S = 0, C = "", w = a, x = o, E = r, k = C; h; )
    switch (y = S, S = dt()) {
      case 40:
        if (y != 108 && nr(k, d - 1) == 58) {
          oh(k += Fr(Aa(S), "&", "&\f"), "&\f", Uc(c ? l[c - 1] : 0)) != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Aa(S);
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
            wr(gh(hh(dt(), Br()), t, n, s), s), (rr(y || 1) == 5 || rr(Bt() || 1) == 5) && mt(k) && jn(k, -1, void 0) !== " " && (k += " ");
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
            T == -1 && (k = Fr(k, /\f/g, "")), g > 0 && (mt(k) - d || m === 0 && y === 47) && wr(g > 32 ? Xi(k + ";", r, n, d - 1, s) : Xi(Fr(k, " ", "") + ";", r, n, d - 2, s), s);
            break;
          case 59:
            k += ";";
          default:
            if (wr(E = qi(k, t, n, c, u, a, l, C, w = [], x = [], d, o), o), S === 123)
              if (u === 0)
                $r(k, t, E, E, w, o, d, l, x);
              else
                switch (f === 99 && nr(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    $r(e, E, E, r && wr(qi(e, E, E, 0, 0, a, l, C, a, w = [], d, x), x), a, x, d, l, r ? w : x);
                    break;
                  default:
                    $r(k, E, E, E, [""], x, 0, l, x);
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
        switch (k += ui(S), S * m) {
          case 38:
            T = u > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            l[c++] = (mt(k) - 1) * T, T = 1;
            break;
          case 64:
            Bt() === 45 && (k += Aa(dt())), f = Bt(), u = d = mt(C = k += ph(Br())), S++;
            break;
          case 45:
            y === 45 && mt(k) == 2 && (m = 0);
        }
    }
  return o;
}
function qi(e, t, n, r, a, o, i, l, s, c, u, d) {
  for (var f = a - 1, g = a === 0 ? o : [""], y = ih(g), m = 0, h = 0, T = 0; m < r; ++m)
    for (var S = 0, C = jn(e, f + 1, f = Uc(h = i[m])), w = e; S < y; ++S)
      (w = zc(h > 0 ? g[S] + " " + C : Fr(C, /&\f/g, g[S]))) && (s[T++] = w);
  return di(e, t, n, a === 0 ? $c : l, s, c, u, d);
}
function gh(e, t, n, r) {
  return di(e, t, n, Bc, ui(sh()), jn(e, 2, -2), 0, r);
}
function Xi(e, t, n, r, a) {
  return di(e, t, n, Hc, jn(e, 0, r), jn(e, r + 1, -1), r, a);
}
function Za(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function vh(e, t, n, r) {
  switch (e.type) {
    case ah:
      if (e.children.length) break;
    case nh:
    case Hc:
      return e.return = e.return || e.value;
    case Bc:
      return "";
    case rh:
      return e.return = e.value + "{" + Za(e.children, r) + "}";
    case $c:
      if (!mt(e.value = e.props.join(","))) return "";
  }
  return mt(n = Za(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Wc(e, t) {
  var n = t.path, r = t.parentSelectors;
  Vt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var yh = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || o.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Wc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, bh = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Wc("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Yi = "data-ant-cssinjs-cache-path", Gc = "_FILE_STYLE__", on, Kc = !0;
function xh() {
  if (!on && (on = {}, Nt())) {
    var e = document.createElement("div");
    e.className = Yi, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var o = a.split(":"), i = Y(o, 2), l = i[0], s = i[1];
      on[l] = s;
    });
    var n = document.querySelector("style[".concat(Yi, "]"));
    if (n) {
      var r;
      Kc = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ch(e) {
  return xh(), !!on[e];
}
function Sh(e) {
  var t = on[e], n = null;
  if (t && Nt())
    if (Kc)
      n = Gc;
    else {
      var r = document.querySelector("style[".concat(ut, '="').concat(on[e], '"]'));
      r ? n = r.innerHTML : delete on[e];
    }
  return [n, t];
}
var Qc = "_skip_check_", qc = "_multi_value_";
function Hr(e) {
  var t = Za(mh(e), vh);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Eh(e) {
  return ue(e) === "object" && e && (Qc in e || qc in e);
}
function Zi(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, o = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(a).concat(c.slice(u.length)), [c].concat(Ue(s.slice(1))).join(" ");
  });
  return o.join(",");
}
var wh = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, o = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, g = n.linters, y = g === void 0 ? [] : g, m = "", h = {};
  function T(w) {
    var x = w.getName(l);
    if (!h[x]) {
      var E = e(w.style, n, {
        root: !1,
        parentSelectors: i
      }), k = Y(E, 1), N = k[0];
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
      T(x);
    else {
      var E = f.reduce(function(k, N) {
        var M;
        return (N == null || (M = N.visit) === null || M === void 0 ? void 0 : M.call(N, k)) || k;
      }, x);
      Object.keys(E).forEach(function(k) {
        var N = E[k];
        if (ue(N) === "object" && N && (k !== "animationName" || !N._keyframe) && !Eh(N)) {
          var M = !1, j = k.trim(), _ = !1;
          (a || o) && l ? j.startsWith("@") ? M = !0 : j === "&" ? j = Zi("", l, u) : j = Zi(k, l, u) : a && !l && (j === "&" || j === "") && (j = "", _ = !0);
          var V = e(N, n, {
            root: _,
            injectHash: M,
            parentSelectors: [].concat(Ue(i), [j])
          }), H = Y(V, 2), D = H[0], W = H[1];
          h = F(F({}, h), W), m += "".concat(j).concat(D);
        } else {
          let R = function(I, L) {
            K.env.NODE_ENV !== "production" && (ue(N) !== "object" || !(N != null && N[Qc])) && [yh, bh].concat(Ue(y)).forEach(function(G) {
              return G(I, L, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var O = I.replace(/[A-Z]/g, function(G) {
              return "-".concat(G.toLowerCase());
            }), U = L;
            !th[I] && typeof U == "number" && U !== 0 && (U = "".concat(U, "px")), I === "animationName" && L !== null && L !== void 0 && L._keyframe && (T(L), U = L.getName(l)), m += "".concat(O, ":").concat(U, ";");
          };
          var P, A = (P = N == null ? void 0 : N.value) !== null && P !== void 0 ? P : N;
          ue(N) === "object" && N !== null && N !== void 0 && N[qc] && Array.isArray(A) ? A.forEach(function(I) {
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
function Xc(e, t) {
  return tr("".concat(e.join("%")).concat(t));
}
function Th() {
  return null;
}
var Yc = "style";
function Ja(e, t) {
  var n = e.token, r = e.path, a = e.hashId, o = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, u = p.useContext(da), d = u.autoClear, f = u.mock, g = u.defaultCache, y = u.hashPriority, m = u.container, h = u.ssrInline, T = u.transformers, S = u.linters, C = u.cache, w = u.layer, x = n._tokenKey, E = [x];
  w && E.push("layer"), E.push.apply(E, Ue(r));
  var k = qa;
  K.env.NODE_ENV !== "production" && f !== void 0 && (k = f === "client");
  var N = li(
    Yc,
    E,
    // Create cache if needed
    function() {
      var H = E.join("|");
      if (Ch(H)) {
        var D = Sh(H), W = Y(D, 2), P = W[0], A = W[1];
        if (P)
          return [P, x, A, {}, l, c];
      }
      var R = t(), I = wh(R, {
        hashId: a,
        hashPriority: y,
        layer: w ? o : void 0,
        path: r.join("-"),
        transformers: T,
        linters: S
      }), L = Y(I, 2), O = L[0], U = L[1], G = Hr(O), Q = Xc(E, G);
      return [G, x, Q, U, l, c];
    },
    // Remove cache if no need
    function(H, D) {
      var W = Y(H, 3), P = W[2];
      (D || d) && qa && jc(P, {
        mark: ut
      });
    },
    // Effect: Inject style here
    function(H) {
      var D = Y(H, 4), W = D[0];
      D[1];
      var P = D[2], A = D[3];
      if (k && W !== Gc) {
        var R = {
          mark: ut,
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
          an(Hr(A[G]), "_layer-".concat(G), F(F({}, R), {}, {
            prepend: !0
          }));
        });
        var U = an(W, P, R);
        U[Ft] = C.instanceId, U.setAttribute(In, x), K.env.NODE_ENV !== "production" && U.setAttribute(Nf, E.join("|")), O.forEach(function(G) {
          an(Hr(A[G]), "_effect-".concat(G), R);
        });
      }
    }
  ), M = Y(N, 3), j = M[0], _ = M[1], V = M[2];
  return function(H) {
    var D;
    return !h || k || !g ? D = /* @__PURE__ */ p.createElement(Th, null) : D = /* @__PURE__ */ p.createElement("style", et({}, Z(Z({}, In, _), ut, V), {
      dangerouslySetInnerHTML: {
        __html: j
      }
    })), /* @__PURE__ */ p.createElement(p.Fragment, null, D, H);
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
}, Zc = "cssVar", kh = function(t, n) {
  var r = t.key, a = t.prefix, o = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, u = p.useContext(da), d = u.cache.instanceId, f = u.container, g = l._tokenKey, y = [].concat(Ue(t.path), [r, c, g]), m = li(Zc, y, function() {
    var h = n(), T = Lc(h, r, {
      prefix: a,
      unitless: o,
      ignore: i,
      scope: c
    }), S = Y(T, 2), C = S[0], w = S[1], x = Xc(y, w);
    return [C, w, x, r];
  }, function(h) {
    var T = Y(h, 3), S = T[2];
    qa && jc(S, {
      mark: ut
    });
  }, function(h) {
    var T = Y(h, 3), S = T[1], C = T[2];
    if (S) {
      var w = an(S, C, {
        mark: ut,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      w[Ft] = d, w.setAttribute(In, r);
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
Z(Z(Z({}, Yc, Ah), Fc, eh), Zc, Nh);
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
function pn(e) {
  return e.notSplit = !0, e;
}
pn(["borderTop", "borderBottom"]), pn(["borderTop"]), pn(["borderBottom"]), pn(["borderLeft", "borderRight"]), pn(["borderLeft"]), pn(["borderRight"]);
var fi = /* @__PURE__ */ p.createContext({});
function Ph(e) {
  return Pc(e) || Tc(e) || ii(e) || Rc();
}
function eo(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Jc(e, t, n, r) {
  if (!t.length)
    return n;
  var a = Ph(t), o = a[0], i = a.slice(1), l;
  return !e && typeof o == "number" ? l = [] : Array.isArray(e) ? l = Ue(e) : l = F({}, e), r && n === void 0 && i.length === 1 ? delete l[o][i[0]] : l[o] = Jc(l[o], i, n, r), l;
}
function ka(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !eo(e, t.slice(0, -1)) ? e : Jc(e, t, n, r);
}
function Rh(e) {
  return ue(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ji(e) {
  return Array.isArray(e) ? [] : {};
}
var Mh = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Oh() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Ji(t[0]);
  return t.forEach(function(a) {
    function o(i, l) {
      var s = new Set(l), c = eo(a, i), u = Array.isArray(c);
      if (u || Rh(c)) {
        if (!s.has(c)) {
          s.add(c);
          var d = eo(r, i);
          u ? r = ka(r, i, []) : (!d || ue(d) !== "object") && (r = ka(r, i, Ji(c))), Mh(c).forEach(function(f) {
            o([].concat(Ue(i), [f]), s);
          });
        }
      } else
        r = ka(r, i, c);
    }
    o([]);
  }), r;
}
function el() {
}
let wt = null;
function Ih() {
  wt = null, Cc();
}
let hi = el;
K.env.NODE_ENV !== "production" && (hi = (e, t, n) => {
  Vt(e, `[antd: ${t}] ${n}`), K.env.NODE_ENV === "test" && Ih();
});
const tl = /* @__PURE__ */ p.createContext({}), $n = K.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = p.useContext(tl), n = (r, a, o) => {
    if (!r)
      if (t === !1 && a === "deprecated") {
        const i = wt;
        wt || (wt = {}), wt[e] = wt[e] || [], wt[e].includes(o || "") || wt[e].push(o || ""), i || console.warn("[antd] There exists deprecated usage in your code:", wt);
      } else
        K.env.NODE_ENV !== "production" && hi(r, e, o);
  };
  return n.deprecated = (r, a, o, i) => {
    n(r, "deprecated", `\`${a}\` is deprecated. Please use \`${o}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = el, e;
}, pa = hi, jh = /* @__PURE__ */ p.createContext(void 0);
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
const nl = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, es = {
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
  timePickerLocale: Object.assign({}, nl)
}, We = "${label} is not a valid ${type}", ma = {
  locale: "en",
  Pagination: _h,
  DatePicker: es,
  TimePicker: nl,
  Calendar: es,
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
const ts = () => Ur.reduce((e, t) => Object.assign(Object.assign({}, e), t), ma.Modal);
function Fh(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Ur.push(t), ts(), () => {
      Ur = Ur.filter((n) => n !== t), ts();
    };
  }
  Object.assign({}, ma.Modal);
}
const rl = /* @__PURE__ */ p.createContext(void 0), al = "internalMark", ol = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (K.env.NODE_ENV !== "production") {
    const o = $n("LocaleProvider");
    K.env.NODE_ENV !== "production" && o(r === al, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  p.useEffect(() => Fh(t == null ? void 0 : t.Modal), [t]);
  const a = p.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ p.createElement(rl.Provider, {
    value: a
  }, n);
};
K.env.NODE_ENV !== "production" && (ol.displayName = "LocaleProvider");
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
function il(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ar(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Qt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Hh(e, t, n) {
  return {
    r: Pe(e, 255) * 255,
    g: Pe(t, 255) * 255,
    b: Pe(n, 255) * 255
  };
}
function ns(e, t, n) {
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
function Na(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Uh(e, t, n) {
  var r, a, o;
  if (e = Pe(e, 360), t = Pe(t, 100), n = Pe(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - i;
    r = Na(l, i, e + 1 / 3), a = Na(l, i, e), o = Na(l, i, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function to(e, t, n) {
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
function no(e, t, n, r) {
  var a = [
    Qt(Math.round(e).toString(16)),
    Qt(Math.round(t).toString(16)),
    Qt(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Vh(e, t, n, r, a) {
  var o = [
    Qt(Math.round(e).toString(16)),
    Qt(Math.round(t).toString(16)),
    Qt(Math.round(n).toString(16)),
    Qt(Wh(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Wh(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function rs(e) {
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
var ro = {
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
  return typeof e == "string" && (e = qh(e)), typeof e == "object" && (Et(e.r) && Et(e.g) && Et(e.b) ? (t = Hh(e.r, e.g, e.b), i = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Et(e.h) && Et(e.s) && Et(e.v) ? (r = Ar(e.s), a = Ar(e.v), t = zh(e.h, r, a), i = !0, l = "hsv") : Et(e.h) && Et(e.s) && Et(e.l) && (r = Ar(e.s), o = Ar(e.l), t = Uh(e.h, r, o), i = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = il(n), {
    ok: i,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var Kh = "[-\\+]?\\d+%?", Qh = "[-\\+]?\\d*\\.\\d+%?", $t = "(?:".concat(Qh, ")|(?:").concat(Kh, ")"), Pa = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), Ra = "[\\s|\\(]+(".concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")[,|\\s]+(").concat($t, ")\\s*\\)?"), rt = {
  CSS_UNIT: new RegExp($t),
  rgb: new RegExp("rgb" + Pa),
  rgba: new RegExp("rgba" + Ra),
  hsl: new RegExp("hsl" + Pa),
  hsla: new RegExp("hsla" + Ra),
  hsv: new RegExp("hsv" + Pa),
  hsva: new RegExp("hsva" + Ra),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (ro[e])
    e = ro[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = rt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = rt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = rt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = rt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = rt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = rt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = rt.hex8.exec(e), n ? {
    r: Ge(n[1]),
    g: Ge(n[2]),
    b: Ge(n[3]),
    a: rs(n[4]),
    format: t ? "name" : "hex8"
  } : (n = rt.hex6.exec(e), n ? {
    r: Ge(n[1]),
    g: Ge(n[2]),
    b: Ge(n[3]),
    format: t ? "name" : "hex"
  } : (n = rt.hex4.exec(e), n ? {
    r: Ge(n[1] + n[1]),
    g: Ge(n[2] + n[2]),
    b: Ge(n[3] + n[3]),
    a: rs(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = rt.hex3.exec(e), n ? {
    r: Ge(n[1] + n[1]),
    g: Ge(n[2] + n[2]),
    b: Ge(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Et(e) {
  return !!rt.CSS_UNIT.exec(String(e));
}
var Be = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = Gh(t)), this.originalInput = t;
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
      return this.a = il(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = to(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = to(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = ns(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = ns(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), no(this.r, this.g, this.b, t);
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
      for (var t = "#" + no(this.r, this.g, this.b, !1), n = 0, r = Object.entries(ro); n < r.length; n++) {
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
), kr = 2, as = 0.16, Xh = 0.05, Yh = 0.05, Zh = 0.15, sl = 5, cl = 4, Jh = [{
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
function os(e) {
  var t = e.r, n = e.g, r = e.b, a = to(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Nr(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(no(t, n, r, !1));
}
function ep(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function is(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - kr * t : Math.round(e.h) + kr * t : r = n ? Math.round(e.h) + kr * t : Math.round(e.h) - kr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function ss(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - as * t : t === cl ? r = e.s + as : r = e.s + Xh * t, r > 1 && (r = 1), n && t === sl && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function cs(e, t, n) {
  var r;
  return n ? r = e.v + Yh * t : r = e.v - Zh * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function ar(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = mn(e), a = sl; a > 0; a -= 1) {
    var o = os(r), i = Nr(mn({
      h: is(o, a, !0),
      s: ss(o, a, !0),
      v: cs(o, a, !0)
    }));
    n.push(i);
  }
  n.push(Nr(r));
  for (var l = 1; l <= cl; l += 1) {
    var s = os(r), c = Nr(mn({
      h: is(s, l),
      s: ss(s, l),
      v: cs(s, l)
    }));
    n.push(c);
  }
  return t.theme === "dark" ? Jh.map(function(u) {
    var d = u.index, f = u.opacity, g = Nr(ep(mn(t.backgroundColor || "#141414"), mn(n[d]), f * 100));
    return g;
  }) : n;
}
var Ma = {
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
}, ao = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
ao.primary = ao[5];
var oo = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
oo.primary = oo[5];
var io = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
io.primary = io[5];
var so = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
so.primary = so[5];
var co = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
co.primary = co[5];
var lo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lo.primary = lo[5];
var uo = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
uo.primary = uo[5];
var fo = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
fo.primary = fo[5];
var Jr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Jr.primary = Jr[5];
var ho = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ho.primary = ho[5];
var po = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
po.primary = po[5];
var mo = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
mo.primary = mo[5];
var go = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
go.primary = go[5];
var Oa = {
  red: ao,
  volcano: oo,
  orange: io,
  gold: so,
  yellow: co,
  lime: lo,
  green: uo,
  cyan: fo,
  blue: Jr,
  geekblue: ho,
  purple: po,
  magenta: mo,
  grey: go
};
const ll = {
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
}, or = Object.assign(Object.assign({}, ll), {
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
  } = e, d = n(s), f = n(a), g = n(o), y = n(i), m = n(l), h = r(c, u), T = e.colorLink || e.colorInfo, S = n(T), C = new Be(y[1]).mix(new Be(y[3]), 50).toHexString();
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
const Ye = (e, t) => new Be(e).setAlpha(t).toRgbString(), Qn = (e, t) => new Be(e).darken(t).toHexString(), lp = (e) => {
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
  Ma.pink = Ma.magenta, Oa.pink = Oa.magenta;
  const t = Object.keys(ll).map((n) => {
    const r = e[n] === Ma[n] ? Oa[n] : ar(e[n]);
    return new Array(10).fill(1).reduce((a, o, i) => (a[`${n}-${i + 1}`] = r[i], a[`${n}${i + 1}`] = r[i], a), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), tp(e, {
    generateColorPalettes: lp,
    generateNeutralColorPalettes: up
  })), sp(e.fontSize)), cp(e)), ap(e)), rp(e));
}
const ul = Qa(dp), vo = {
  token: or,
  override: {
    override: or
  },
  hashed: !0
}, dl = /* @__PURE__ */ q.createContext(vo), yo = "ant", pi = "anticon", Zv = ["outlined", "borderless", "filled"], fp = (e, t) => t || (e ? `${yo}-${e}` : yo), Ut = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: fp,
  iconPrefixCls: pi
}), hp = `-ant-${Date.now()}-${Math.random()}`;
function pp(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = (l == null ? void 0 : l(s)) || s, s.toRgbString();
  }, a = (i, l) => {
    const s = new Be(i), c = ar(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const i = new Be(t.primaryColor), l = ar(i.toRgbString());
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
function mp(e, t) {
  const n = pp(e, t);
  Nt() ? an(n, `${hp}-dynamic-theme`) : K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const bo = /* @__PURE__ */ p.createContext(!1), gp = (e) => {
  let {
    children: t,
    disabled: n
  } = e;
  const r = p.useContext(bo);
  return /* @__PURE__ */ p.createElement(bo.Provider, {
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
  const e = p.useContext(bo), t = p.useContext(ir);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var fl = /* @__PURE__ */ Ct(function e() {
  xt(this, e);
}), hl = "CALC_UNIT", bp = new RegExp(hl, "g");
function Ia(e) {
  return typeof e == "number" ? "".concat(e).concat(hl) : e;
}
var xp = /* @__PURE__ */ function(e) {
  sa(n, e);
  var t = ca(n);
  function n(r, a) {
    var o;
    xt(this, n), o = t.call(this), Z(rn(o), "result", ""), Z(rn(o), "unitlessCssVar", void 0), Z(rn(o), "lowPriority", void 0);
    var i = ue(r);
    return o.unitlessCssVar = a, r instanceof n ? o.result = "(".concat(r.result, ")") : i === "number" ? o.result = Ia(r) : i === "string" && (o.result = r), o;
  }
  return Ct(n, [{
    key: "add",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " + ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " + ").concat(Ia(a))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(a) {
      return a instanceof n ? this.result = "".concat(this.result, " - ").concat(a.getResult()) : (typeof a == "number" || typeof a == "string") && (this.result = "".concat(this.result, " - ").concat(Ia(a))), this.lowPriority = !0, this;
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
}(fl), Cp = /* @__PURE__ */ function(e) {
  sa(n, e);
  var t = ca(n);
  function n(r) {
    var a;
    return xt(this, n), a = t.call(this), Z(rn(a), "result", 0), r instanceof n ? a.result = r.result : typeof r == "number" && (a.result = r), a;
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
}(fl), Sp = function(t, n) {
  var r = t === "css" ? xp : Cp;
  return function(a) {
    return new r(a, n);
  };
}, ls = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function xo(e) {
  var t = p.useRef();
  t.current = e;
  var n = p.useCallback(function() {
    for (var r, a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(o));
  }, []);
  return n;
}
function Co(e) {
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
function us(e, t, n, r) {
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
var pl = K.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", So = !0;
function mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!pl)
    return Object.assign.apply(Object, [{}].concat(t));
  So = !1;
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
  }), So = !0, r;
}
var ds = {};
function Ep() {
}
var wp = function(t) {
  var n, r = t, a = Ep;
  return pl && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (So) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), a = function(i, l) {
    var s;
    ds[i] = {
      global: Array.from(n),
      component: F(F({}, (s = ds[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: a
  };
};
function fs(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(mi(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
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
}(), hs = new kp();
function Np(e, t) {
  return q.useMemo(function() {
    var n = hs.get(t);
    if (n)
      return n;
    var r = e();
    return hs.set(t, r), r;
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
    var x = F(F({}, m), {}, {
      unitless: w,
      prefixToken: T
    }), E = u(f, g, y, x), k = c(h, y, x);
    return function(N) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N, j = E(N, M), _ = Y(j, 2), V = _[1], H = k(M), D = Y(H, 2), W = D[0], P = D[1];
      return [W, V, P];
    };
  }
  function c(f, g, y) {
    var m = y.unitless, h = y.injectStyle, T = h === void 0 ? !0 : h, S = y.prefixToken, C = y.ignore, w = function(k) {
      var N = k.rootCls, M = k.cssVar, j = M === void 0 ? {} : M, _ = r(), V = _.realToken;
      return kh({
        path: [f],
        prefix: j.prefix,
        key: j.key,
        unitless: m,
        ignore: C,
        token: V,
        scope: N
      }, function() {
        var H = fs(f, V, g), D = us(f, V, H, {
          deprecatedTokens: y == null ? void 0 : y.deprecatedTokens
        });
        return Object.keys(H).forEach(function(W) {
          D[S(W)] = D[W], delete D[W];
        }), D;
      }), null;
    }, x = function(k) {
      var N = r(), M = N.cssVar;
      return [function(j) {
        return T && M ? /* @__PURE__ */ q.createElement(q.Fragment, null, /* @__PURE__ */ q.createElement(w, {
          rootCls: k,
          cssVar: M,
          component: f
        }), j) : j;
      }, M == null ? void 0 : M.key];
    };
    return x;
  }
  function u(f, g, y) {
    var m = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(f) ? f : [f, f], T = Y(h, 1), S = T[0], C = h.join("-"), w = e.layer || {
      name: "antd"
    };
    return function(x) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, k = r(), N = k.theme, M = k.realToken, j = k.hashId, _ = k.token, V = k.cssVar, H = a(), D = H.rootPrefixCls, W = H.iconPrefixCls, P = n(), A = V ? "css" : "js", R = Np(function() {
        var Q = /* @__PURE__ */ new Set();
        return V && Object.keys(m.unitless || {}).forEach(function(B) {
          Q.add(Dr(B, V.prefix)), Q.add(Dr(B, ls(S, V.prefix)));
        }), Sp(A, Q);
      }, [A, S, V == null ? void 0 : V.prefix]), I = Tp(A), L = I.max, O = I.min, U = {
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
      Ja(F(F({}, U), {}, {
        clientOnly: !1,
        path: ["Shared", D]
      }), function() {
        return typeof o == "function" ? o(_) : [];
      });
      var G = Ja(F(F({}, U), {}, {
        path: [C, x, W]
      }), function() {
        if (m.injectStyle === !1)
          return [];
        var Q = wp(_), B = Q.token, te = Q.flush, ie = fs(S, M, y), Ee = ".".concat(x), we = us(S, M, ie, {
          deprecatedTokens: m.deprecatedTokens
        });
        V && ie && ue(ie) === "object" && Object.keys(ie).forEach(function(je) {
          ie[je] = "var(".concat(Dr(je, ls(S, V.prefix)), ")");
        });
        var Ce = mi(B, {
          componentCls: Ee,
          prefixCls: x,
          iconCls: ".".concat(W),
          antCls: ".".concat(D),
          calc: R,
          // @ts-ignore
          max: L,
          // @ts-ignore
          min: O
        }, V ? ie : we), Re = g(Ce, {
          hashId: j,
          prefixCls: x,
          rootPrefixCls: D,
          iconPrefixCls: W
        });
        te(S, we);
        var Te = typeof i == "function" ? i(Ce, x, E, m.resetFont) : null;
        return [m.resetStyle === !1 ? null : Te, Re];
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
      var w = C.prefixCls, x = C.rootCls, E = x === void 0 ? w : x;
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
function ja(e) {
  return e >= 0 && e <= 255;
}
function Pr(e, t) {
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
    if (ja(u) && ja(d) && ja(f))
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
var Op = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function ml(e) {
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
var ps = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
const gl = {
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
}, vl = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: a
  } = t, o = ps(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: a
  });
  return i = ml(i), o && Object.entries(o).forEach((l) => {
    let [s, c] = l;
    const {
      theme: u
    } = c, d = ps(c, ["theme"]);
    let f = d;
    u && (f = vl(Object.assign(Object.assign({}, i), d), {
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
  } = q.useContext(dl), o = `${Mp}-${t || ""}`, i = n || ul, [l, s, c] = Jf(i, [or, e], {
    salt: o,
    override: r,
    getComputedToken: vl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ml,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: gl,
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
}), yl = (e, t) => {
  const [n, r] = Hn();
  return Ja({
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
    return yl(t, e), e ?? {};
  },
  getResetStyles: (e) => [{
    "&": Dp(e)
  }],
  getCommonStyle: Fp,
  getCompUnitless: () => gl
}), zp = Object.assign({}, Zo), {
  useId: ms
} = zp, Vp = () => "", Wp = typeof ms > "u" ? Vp : ms;
function Gp(e, t, n) {
  var r, a;
  const o = $n("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, vo), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : vo.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, s = Wp();
  if (K.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, u = !!(typeof i.cssVar == "object" && (!((a = i.cssVar) === null || a === void 0) && a.key) || s);
    K.env.NODE_ENV !== "production" && o(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return oi(() => {
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
var Kp = ["children"], bl = /* @__PURE__ */ p.createContext({});
function Qp(e) {
  var t = e.children, n = sn(e, Kp);
  return /* @__PURE__ */ p.createElement(bl.Provider, {
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
  }, 0), n = Y(t, 2), r = n[1], a = p.useRef(e), o = xo(function() {
    return a.current;
  }), i = xo(function(l) {
    a.current = typeof l == "function" ? l(a.current) : l, r();
  });
  return [o, i];
}
var Pt = "none", Rr = "appear", Mr = "enter", Or = "leave", gs = "none", it = "prepare", gn = "start", vn = "active", gi = "end", xl = "prepared";
function vs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Yp(e, t) {
  var n = {
    animationend: vs("Animation", "AnimationEnd"),
    transitionend: vs("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Zp = Yp(Nt(), typeof window < "u" ? window : {}), Cl = {};
if (Nt()) {
  var Jp = document.createElement("div");
  Cl = Jp.style;
}
var Ir = {};
function Sl(e) {
  if (Ir[e])
    return Ir[e];
  var t = Zp[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, a = 0; a < r; a += 1) {
      var o = n[a];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Cl)
        return Ir[e] = t[o], Ir[e];
    }
  return "";
}
var El = Sl("animationend"), wl = Sl("transitionend"), Tl = !!(El && wl), ys = El || "animationend", bs = wl || "transitionend";
function xs(e, t) {
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
    a && (a.removeEventListener(bs, e), a.removeEventListener(ys, e));
  }
  function r(a) {
    t.current && t.current !== a && n(t.current), a && a !== t.current && (a.addEventListener(bs, e), a.addEventListener(ys, e), t.current = a);
  }
  return p.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var Al = Nt() ? p.useLayoutEffect : p.useEffect;
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
var nm = [it, gn, vn, gi], rm = [it, xl], kl = !1, am = !0;
function Nl(e) {
  return e === vn || e === gi;
}
const om = function(e, t, n) {
  var r = Co(gs), a = Y(r, 2), o = a[0], i = a[1], l = tm(), s = Y(l, 2), c = s[0], u = s[1];
  function d() {
    i(it, !0);
  }
  var f = t ? rm : nm;
  return Al(function() {
    if (o !== gs && o !== gi) {
      var g = f.indexOf(o), y = f[g + 1], m = n(o);
      m === kl ? i(y, !0) : y && c(function(h) {
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
  var a = r.motionEnter, o = a === void 0 ? !0 : a, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, g = r.onEnterPrepare, y = r.onLeavePrepare, m = r.onAppearStart, h = r.onEnterStart, T = r.onLeaveStart, S = r.onAppearActive, C = r.onEnterActive, w = r.onLeaveActive, x = r.onAppearEnd, E = r.onEnterEnd, k = r.onLeaveEnd, N = r.onVisibleChanged, M = Co(), j = Y(M, 2), _ = j[0], V = j[1], H = Xp(Pt), D = Y(H, 2), W = D[0], P = D[1], A = Co(null), R = Y(A, 2), I = R[0], L = R[1], O = W(), U = p.useRef(!1), G = p.useRef(null);
  function Q() {
    return n();
  }
  var B = p.useRef(!1);
  function te() {
    P(Pt), L(null, !0);
  }
  var ie = xo(function(he) {
    var de = W();
    if (de !== Pt) {
      var Me = Q();
      if (!(he && !he.deadline && he.target !== Me)) {
        var Xe = B.current, $e;
        de === Rr && Xe ? $e = x == null ? void 0 : x(Me, he) : de === Mr && Xe ? $e = E == null ? void 0 : E(Me, he) : de === Or && Xe && ($e = k == null ? void 0 : k(Me, he)), Xe && $e !== !1 && te();
      }
    }
  }), Ee = em(ie), we = Y(Ee, 1), Ce = we[0], Re = function(de) {
    switch (de) {
      case Rr:
        return Z(Z(Z({}, it, f), gn, m), vn, S);
      case Mr:
        return Z(Z(Z({}, it, g), gn, h), vn, C);
      case Or:
        return Z(Z(Z({}, it, y), gn, T), vn, w);
      default:
        return {};
    }
  }, Te = p.useMemo(function() {
    return Re(O);
  }, [O]), je = om(O, !e, function(he) {
    if (he === it) {
      var de = Te[it];
      return de ? de(Q()) : kl;
    }
    if (ve in Te) {
      var Me;
      L(((Me = Te[ve]) === null || Me === void 0 ? void 0 : Me.call(Te, Q(), null)) || null);
    }
    return ve === vn && O !== Pt && (Ce(Q()), u > 0 && (clearTimeout(G.current), G.current = setTimeout(function() {
      ie({
        deadline: !0
      });
    }, u))), ve === xl && te(), am;
  }), $ = Y(je, 2), qe = $[0], ve = $[1], ze = Nl(ve);
  B.current = ze, Al(function() {
    V(t);
    var he = U.current;
    U.current = !0;
    var de;
    !he && t && l && (de = Rr), he && t && o && (de = Mr), (he && !t && c || !he && d && !t && c) && (de = Or);
    var Me = Re(de);
    de && (e || Me[it]) ? (P(de), qe()) : P(Pt);
  }, [t]), p.useEffect(function() {
    // Cancel appear
    (O === Rr && !l || // Cancel enter
    O === Mr && !o || // Cancel leave
    O === Or && !c) && P(Pt);
  }, [l, o, c]), p.useEffect(function() {
    return function() {
      U.current = !1, clearTimeout(G.current);
    };
  }, []);
  var nt = p.useRef(!1);
  p.useEffect(function() {
    _ && (nt.current = !0), _ !== void 0 && O === Pt && ((nt.current || _) && (N == null || N(_)), nt.current = !0);
  }, [_, O]);
  var ft = I;
  return Te[it] && ve === gn && (ft = F({
    transition: "none"
  }, ft)), [O, ve, ft, _ ?? t];
}
function sm(e) {
  var t = e;
  ue(e) === "object" && (t = e.transitionSupport);
  function n(a, o) {
    return !!(a.motionName && t && o !== !1);
  }
  var r = /* @__PURE__ */ p.forwardRef(function(a, o) {
    var i = a.visible, l = i === void 0 ? !0 : i, s = a.removeOnLeave, c = s === void 0 ? !0 : s, u = a.forceRender, d = a.children, f = a.motionName, g = a.leavedClassName, y = a.eventProps, m = p.useContext(bl), h = m.motion, T = n(a, h), S = p.useRef(), C = p.useRef();
    function w() {
      try {
        return S.current instanceof HTMLElement ? S.current : pf(C.current);
      } catch {
        return null;
      }
    }
    var x = im(T, l, w, a), E = Y(x, 4), k = E[0], N = E[1], M = E[2], j = E[3], _ = p.useRef(j);
    j && (_.current = !0);
    var V = p.useCallback(function(I) {
      S.current = I, Ec(o, I);
    }, [o]), H, D = F(F({}, y), {}, {
      visible: l
    });
    if (!d)
      H = null;
    else if (k === Pt)
      j ? H = d(F({}, D), V) : !c && _.current && g ? H = d(F(F({}, D), {}, {
        className: g
      }), V) : u || !c && !g ? H = d(F(F({}, D), {}, {
        style: {
          display: "none"
        }
      }), V) : H = null;
    else {
      var W;
      N === it ? W = "prepare" : Nl(N) ? W = "active" : N === gn && (W = "start");
      var P = xs(f, "".concat(k, "-").concat(W));
      H = d(F(F({}, D), {}, {
        className: Qe(xs(f, k), Z(Z({}, P, P && W), f, typeof f == "string")),
        style: M
      }), V);
    }
    if (/* @__PURE__ */ p.isValidElement(H) && gf(H)) {
      var A = H, R = A.ref;
      R || (H = /* @__PURE__ */ p.cloneElement(H, {
        ref: V
      }));
    }
    return /* @__PURE__ */ p.createElement(qp, {
      ref: C
    }, H);
  });
  return r.displayName = "CSSMotion", r;
}
const cm = sm(Tl);
var Eo = "add", wo = "keep", To = "remove", _a = "removed";
function lm(e) {
  var t;
  return e && ue(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, F(F({}, t), {}, {
    key: String(t.key)
  });
}
function Ao() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(lm);
}
function um() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, a = t.length, o = Ao(e), i = Ao(t);
  o.forEach(function(c) {
    for (var u = !1, d = r; d < a; d += 1) {
      var f = i[d];
      if (f.key === c.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(g) {
          return F(F({}, g), {}, {
            status: Eo
          });
        })), r = d), n.push(F(F({}, f), {}, {
          status: wo
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(F(F({}, c), {}, {
      status: To
    }));
  }), r < a && (n = n.concat(i.slice(r).map(function(c) {
    return F(F({}, c), {}, {
      status: Eo
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
      return d !== c || f !== To;
    }), n.forEach(function(u) {
      u.key === c && (u.status = wo);
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
      return i = a.call.apply(a, [this].concat(s)), Z(rn(i), "state", {
        keyEntities: []
      }), Z(rn(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(g) {
            return g.key !== u ? g : F(F({}, g), {}, {
              status: _a
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(g) {
            var y = g.status;
            return y !== _a;
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
        var g = sn(c, dm), y = u || p.Fragment, m = {};
        return hm.forEach(function(h) {
          m[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ p.createElement(y, g, s.map(function(h, T) {
          var S = h.status, C = sn(h, fm), w = S === Eo || S === wo;
          return /* @__PURE__ */ p.createElement(t, et({}, m, {
            key: C.key,
            visible: w,
            eventProps: C,
            onVisibleChanged: function(E) {
              f == null || f(E, {
                key: C.key
              }), E || l.removeKey(C.key);
            }
          }), function(x, E) {
            return d(F(F({}, x), {}, {
              index: T
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, u = s.keyEntities, d = Ao(c), f = um(u, d);
        return {
          keyEntities: f.filter(function(g) {
            var y = u.find(function(m) {
              var h = m.key;
              return g.key === h;
            });
            return !(y && y.status === _a && g.status === To);
          })
        };
      }
    }]), o;
  }(p.Component);
  return Z(n, "defaultProps", {
    component: "div"
  }), n;
}
const mm = pm(Tl);
function gm(e) {
  const {
    children: t
  } = e, [, n] = Hn(), {
    motion: r
  } = n, a = p.useRef(!1);
  return a.current = a.current || r === !1, a.current ? /* @__PURE__ */ p.createElement(Qp, {
    motion: r
  }, t) : t;
}
const Pl = /* @__PURE__ */ p.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return $n("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
K.env.NODE_ENV !== "production" && (Pl.displayName = "PropWarning");
const vm = K.env.NODE_ENV !== "production" ? Pl : () => null;
var ym = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
let ko = !1;
const bm = K.env.NODE_ENV !== "production" ? (e) => {
  K.env.NODE_ENV !== "production" && pa(!ko, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), xm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let ea, Rl, Ml, Ol;
function zr() {
  return ea || yo;
}
function Cm() {
  return Rl || pi;
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
  t !== void 0 && (ea = t), n !== void 0 && (Rl = n), "holderRender" in e && (Ol = a), r && (Sm(r) ? (K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), mp(zr(), r)) : Ml = r);
}, Il = () => ({
  getPrefixCls: (e, t) => t || (e ? `${zr()}-${e}` : zr()),
  getIconPrefixCls: Cm,
  getRootPrefixCls: () => ea || zr(),
  getTheme: () => Ml,
  holderRender: Ol
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
    segmented: x,
    statistic: E,
    spin: k,
    calendar: N,
    carousel: M,
    cascader: j,
    collapse: _,
    typography: V,
    checkbox: H,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: A,
    steps: R,
    image: I,
    layout: L,
    list: O,
    mentions: U,
    modal: G,
    progress: Q,
    result: B,
    slider: te,
    breadcrumb: ie,
    menu: Ee,
    pagination: we,
    input: Ce,
    textArea: Re,
    empty: Te,
    badge: je,
    radio: $,
    rate: qe,
    switch: ve,
    transfer: ze,
    avatar: nt,
    message: ft,
    tag: he,
    table: de,
    card: Me,
    tabs: Xe,
    timeline: $e,
    timePicker: Ve,
    upload: zn,
    notification: ya,
    tree: ne,
    colorPicker: fe,
    datePicker: _e,
    rangePicker: br,
    flex: Ei,
    wave: Pu,
    dropdown: Ru,
    warning: Mu,
    tour: Ou,
    floatButtonGroup: Iu,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  } = e, wi = p.useCallback((ye, ke) => {
    const {
      prefixCls: ht
    } = e;
    if (ke)
      return ke;
    const pt = ht || T.getPrefixCls("");
    return ye ? `${pt}-${ye}` : pt;
  }, [T.getPrefixCls, e.prefixCls]), Vn = S || T.iconPrefixCls || pi, Wn = n || T.csp;
  yl(Vn, Wn);
  const xr = Gp(C, T.theme, {
    prefixCls: wi("")
  });
  K.env.NODE_ENV !== "production" && (ko = ko || !!xr);
  const ba = {
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
    getPrefixCls: wi,
    iconPrefixCls: Vn,
    theme: xr,
    segmented: x,
    statistic: E,
    spin: k,
    calendar: N,
    carousel: M,
    cascader: j,
    collapse: _,
    typography: V,
    checkbox: H,
    descriptions: D,
    divider: W,
    drawer: P,
    skeleton: A,
    steps: R,
    image: I,
    input: Ce,
    textArea: Re,
    layout: L,
    list: O,
    mentions: U,
    modal: G,
    progress: Q,
    result: B,
    slider: te,
    breadcrumb: ie,
    menu: Ee,
    pagination: we,
    empty: Te,
    badge: je,
    radio: $,
    rate: qe,
    switch: ve,
    transfer: ze,
    avatar: nt,
    message: ft,
    tag: he,
    table: de,
    card: Me,
    tabs: Xe,
    timeline: $e,
    timePicker: Ve,
    upload: zn,
    notification: ya,
    tree: ne,
    colorPicker: fe,
    datePicker: _e,
    rangePicker: br,
    flex: Ei,
    wave: Pu,
    dropdown: Ru,
    warning: Mu,
    tour: Ou,
    floatButtonGroup: Iu,
    variant: ju,
    inputNumber: _u,
    treeSelect: Lu
  };
  K.env.NODE_ENV !== "production" && $n("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const fn = Object.assign({}, T);
  Object.keys(ba).forEach((ye) => {
    ba[ye] !== void 0 && (fn[ye] = ba[ye]);
  }), xm.forEach((ye) => {
    const ke = e[ye];
    ke && (fn[ye] = ke);
  }), typeof r < "u" && (fn.button = Object.assign({
    autoInsertSpace: r
  }, fn.button));
  const hn = oi(() => fn, fn, (ye, ke) => {
    const ht = Object.keys(ye), pt = Object.keys(ke);
    return ht.length !== pt.length || ht.some((Cr) => ye[Cr] !== ke[Cr]);
  }), Du = p.useMemo(() => ({
    prefixCls: Vn,
    csp: Wn
  }), [Vn, Wn]);
  let Ae = /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(vm, {
    dropdownMatchSelectWidth: g
  }), t);
  const Ti = p.useMemo(() => {
    var ye, ke, ht, pt;
    return Oh(((ye = ma.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((ht = (ke = hn.locale) === null || ke === void 0 ? void 0 : ke.Form) === null || ht === void 0 ? void 0 : ht.defaultValidateMessages) || {}, ((pt = hn.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [hn, i == null ? void 0 : i.validateMessages]);
  Object.keys(Ti).length > 0 && (Ae = /* @__PURE__ */ p.createElement(jh.Provider, {
    value: Ti
  }, Ae)), l && (Ae = /* @__PURE__ */ p.createElement(ol, {
    locale: l,
    _ANT_MARK__: al
  }, Ae)), (Vn || Wn) && (Ae = /* @__PURE__ */ p.createElement(fi.Provider, {
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
    } = ye, Bu = ym(ye, ["algorithm", "token", "components", "cssVar"]), Ai = ke && (!Array.isArray(ke) || ke.length > 0) ? Qa(ke) : ul, xa = {};
    Object.entries(pt || {}).forEach(($u) => {
      let [Hu, Uu] = $u;
      const St = Object.assign({}, Uu);
      "algorithm" in St && (St.algorithm === !0 ? St.theme = Ai : (Array.isArray(St.algorithm) || typeof St.algorithm == "function") && (St.theme = Qa(St.algorithm)), delete St.algorithm), xa[Hu] = St;
    });
    const ki = Object.assign(Object.assign({}, or), ht);
    return Object.assign(Object.assign({}, Bu), {
      theme: Ai,
      token: ki,
      components: xa,
      override: Object.assign({
        override: ki
      }, xa),
      cssVar: Cr
    });
  }, [xr]);
  return C && (Ae = /* @__PURE__ */ p.createElement(dl.Provider, {
    value: Fu
  }, Ae)), hn.warning && (Ae = /* @__PURE__ */ p.createElement(tl.Provider, {
    value: hn.warning
  }, Ae)), w !== void 0 && (Ae = /* @__PURE__ */ p.createElement(gp, {
    disabled: w
  }, Ae)), /* @__PURE__ */ p.createElement(Ut.Provider, {
    value: hn
  }, Ae);
}, dn = (e) => {
  const t = p.useContext(Ut), n = p.useContext(rl);
  return /* @__PURE__ */ p.createElement(wm, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
dn.ConfigContext = Ut;
dn.SizeContext = ir;
dn.config = Em;
dn.useConfig = yp;
Object.defineProperty(dn, "SizeContext", {
  get: () => (K.env.NODE_ENV !== "production" && pa(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ir)
});
K.env.NODE_ENV !== "production" && (dn.displayName = "ConfigProvider");
var Tm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function jl(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Am(e) {
  return jl(e) instanceof ShadowRoot;
}
function km(e) {
  return Am(e) ? jl(e) : null;
}
function Nm(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Pm(e, t) {
  Vt(e, "[@ant-design/icons] ".concat(t));
}
function Cs(e) {
  return ue(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ue(e.icon) === "object" || typeof e.icon == "function");
}
function Ss() {
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
function No(e, t, n) {
  return n ? /* @__PURE__ */ q.createElement(e.tag, F(F({
    key: t
  }, Ss(e.attrs)), n), (e.children || []).map(function(r, a) {
    return No(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ q.createElement(e.tag, F({
    key: t
  }, Ss(e.attrs)), (e.children || []).map(function(r, a) {
    return No(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function _l(e) {
  return ar(e)[0];
}
function Ll(e) {
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
  var n = p.useContext(fi), r = n.csp, a = n.prefixCls, o = Rm;
  a && (o = o.replace(/anticon/g, a)), p.useEffect(function() {
    var i = t.current, l = km(i);
    an(o, "@ant-design-icons", {
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
  Zn.primaryColor = t, Zn.secondaryColor = n || _l(t), Zn.calculated = !!n;
}
function jm() {
  return F({}, Zn);
}
var Un = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, l = t.secondaryColor, s = sn(t, Om), c = p.useRef(), u = Zn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || _l(i)
  }), Mm(c), Pm(Cs(n), "icon should be icon definiton, but got ".concat(n)), !Cs(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = F(F({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), No(d.icon, "svg-".concat(d.name), F(F({
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
Un.getTwoToneColors = jm;
Un.setTwoToneColors = Im;
function Dl(e) {
  var t = Ll(e), n = Y(t, 2), r = n[0], a = n[1];
  return Un.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function _m() {
  var e = Un.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Lm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Dl(Jr.primary);
var Wt = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, a = e.spin, o = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = sn(e, Lm), u = p.useContext(fi), d = u.prefixCls, f = d === void 0 ? "anticon" : d, g = u.rootClassName, y = Qe(g, f, Z(Z({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!a || r.name === "loading"), n), m = i;
  m === void 0 && l && (m = -1);
  var h = o ? {
    msTransform: "rotate(".concat(o, "deg)"),
    transform: "rotate(".concat(o, "deg)")
  } : void 0, T = Ll(s), S = Y(T, 2), C = S[0], w = S[1];
  return /* @__PURE__ */ p.createElement("span", et({
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
Wt.displayName = "AntdIcon";
Wt.getTwoToneColor = _m;
Wt.setTwoToneColor = Dl;
var Dm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Tm
  }));
}, Fl = /* @__PURE__ */ p.forwardRef(Dm);
K.env.NODE_ENV !== "production" && (Fl.displayName = "CheckCircleFilled");
var Fm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Bm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Fm
  }));
}, Bl = /* @__PURE__ */ p.forwardRef(Bm);
K.env.NODE_ENV !== "production" && (Bl.displayName = "CloseCircleFilled");
var $m = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Hm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: $m
  }));
}, $l = /* @__PURE__ */ p.forwardRef(Hm);
K.env.NODE_ENV !== "production" && ($l.displayName = "CloseOutlined");
var Um = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, zm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Um
  }));
}, Hl = /* @__PURE__ */ p.forwardRef(zm);
K.env.NODE_ENV !== "production" && (Hl.displayName = "ExclamationCircleFilled");
var Vm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Wm = function(t, n) {
  return /* @__PURE__ */ p.createElement(Wt, et({}, t, {
    ref: n,
    icon: Vm
  }));
}, Ul = /* @__PURE__ */ p.forwardRef(Wm);
K.env.NODE_ENV !== "production" && (Ul.displayName = "InfoCircleFilled");
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
function Es(e, t) {
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
    (n.aria && (a === "role" || Es(a, qm)) || // Data
    n.data && Es(a, Xm) || // Attr
    n.attr && Qm.includes(a)) && (r[a] = e[a]);
  }), r;
}
const zl = (e) => {
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
}, Vl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, a = e.className, o = e.duration, i = o === void 0 ? 4.5 : o, l = e.showProgress, s = e.pauseOnHover, c = s === void 0 ? !0 : s, u = e.eventKey, d = e.content, f = e.closable, g = e.closeIcon, y = g === void 0 ? "x" : g, m = e.props, h = e.onClick, T = e.onNoticeClose, S = e.times, C = e.hovering, w = p.useState(!1), x = Y(w, 2), E = x[0], k = x[1], N = p.useState(0), M = Y(N, 2), j = M[0], _ = M[1], V = p.useState(0), H = Y(V, 2), D = H[0], W = H[1], P = C || E, A = i > 0 && l, R = function() {
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
          var we = Ee + D - Q, Ce = Math.min(we / (i * 1e3), 1);
          _(Ce * 100), Ce < 1 && ie();
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
  }, [f, y]), O = Ym(L, !0), U = 100 - (!j || j < 0 ? 0 : j > 100 ? 100 : j), G = "".concat(n, "-notice");
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
    value: U
  }, U + "%"));
}), Wl = /* @__PURE__ */ q.createContext({}), Zm = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ q.createElement(Wl.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, ws = 8, Ts = 3, As = 16, Jm = function(t) {
  var n = {
    offset: ws,
    threshold: Ts,
    gap: As
  };
  if (t && ue(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : ws, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : Ts, n.gap = (o = t.gap) !== null && o !== void 0 ? o : As;
  }
  return [!!t, n];
}, eg = ["className", "style", "classNames", "styles"], Gl = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, i = t.style, l = t.motion, s = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, d = p.useContext(Wl), f = d.classNames, g = p.useRef({}), y = p.useState(null), m = Y(y, 2), h = m[0], T = m[1], S = p.useState([]), C = Y(S, 2), w = C[0], x = C[1], E = n.map(function(P) {
    return {
      config: P,
      key: String(P.key)
    };
  }), k = Jm(u), N = Y(k, 2), M = N[0], j = N[1], _ = j.offset, V = j.threshold, H = j.gap, D = M && (w.length > 0 || E.length <= V), W = typeof l == "function" ? l(r) : l;
  return p.useEffect(function() {
    M && w.length > 1 && x(function(P) {
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
    var R = P.config, I = P.className, L = P.style, O = P.index, U = R, G = U.key, Q = U.times, B = String(G), te = R, ie = te.className, Ee = te.style, we = te.classNames, Ce = te.styles, Re = sn(te, eg), Te = E.findIndex(function($e) {
      return $e.key === B;
    }), je = {};
    if (M) {
      var $ = E.length - 1 - (Te > -1 ? Te : O - 1), qe = r === "top" || r === "bottom" ? "-50%" : "0";
      if ($ > 0) {
        var ve, ze, nt;
        je.height = D ? (ve = g.current[B]) === null || ve === void 0 ? void 0 : ve.offsetHeight : h == null ? void 0 : h.offsetHeight;
        for (var ft = 0, he = 0; he < $; he++) {
          var de;
          ft += ((de = g.current[E[E.length - 1 - he].key]) === null || de === void 0 ? void 0 : de.offsetHeight) + H;
        }
        var Me = (D ? ft : $ * _) * (r.startsWith("top") ? 1 : -1), Xe = !D && h !== null && h !== void 0 && h.offsetWidth && (ze = g.current[B]) !== null && ze !== void 0 && ze.offsetWidth ? ((h == null ? void 0 : h.offsetWidth) - _ * 2 * ($ < 3 ? $ : 3)) / ((nt = g.current[B]) === null || nt === void 0 ? void 0 : nt.offsetWidth) : 1;
        je.transform = "translate3d(".concat(qe, ", ").concat(Me, "px, 0) scaleX(").concat(Xe, ")");
      } else
        je.transform = "translate3d(".concat(qe, ", 0, 0)");
    }
    return /* @__PURE__ */ q.createElement("div", {
      ref: A,
      className: Qe("".concat(a, "-notice-wrapper"), I, we == null ? void 0 : we.wrapper),
      style: F(F(F({}, L), je), Ce == null ? void 0 : Ce.wrapper),
      onMouseEnter: function() {
        return x(function(Ve) {
          return Ve.includes(B) ? Ve : [].concat(Ue(Ve), [B]);
        });
      },
      onMouseLeave: function() {
        return x(function(Ve) {
          return Ve.filter(function(zn) {
            return zn !== B;
          });
        });
      }
    }, /* @__PURE__ */ q.createElement(Vl, et({}, Re, {
      ref: function(Ve) {
        Te > -1 ? g.current[B] = Ve : delete g.current[B];
      },
      prefixCls: a,
      classNames: we,
      styles: Ce,
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
K.env.NODE_ENV !== "production" && (Gl.displayName = "NoticeList");
var Kl = /* @__PURE__ */ p.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e.container, o = e.motion, i = e.maxCount, l = e.className, s = e.style, c = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = p.useState([]), g = Y(f, 2), y = g[0], m = g[1], h = function(M) {
    var j, _ = y.find(function(V) {
      return V.key === M;
    });
    _ == null || (j = _.onClose) === null || j === void 0 || j.call(_), m(function(V) {
      return V.filter(function(H) {
        return H.key !== M;
      });
    });
  };
  p.useImperativeHandle(t, function() {
    return {
      open: function(M) {
        m(function(j) {
          var _ = Ue(j), V = _.findIndex(function(W) {
            return W.key === M.key;
          }), H = F({}, M);
          if (V >= 0) {
            var D;
            H.times = (((D = j[V]) === null || D === void 0 ? void 0 : D.times) || 0) + 1, _[V] = H;
          } else
            H.times = 0, _.push(H);
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
  var x = function(M) {
    w(function(j) {
      var _ = F({}, j), V = _[M] || [];
      return V.length || delete _[M], _;
    });
  }, E = p.useRef(!1);
  if (p.useEffect(function() {
    Object.keys(C).length > 0 ? E.current = !0 : E.current && (c == null || c(), E.current = !1);
  }, [C]), !a)
    return null;
  var k = Object.keys(C);
  return /* @__PURE__ */ Yo.createPortal(/* @__PURE__ */ p.createElement(p.Fragment, null, k.map(function(N) {
    var M = C[N], j = /* @__PURE__ */ p.createElement(Gl, {
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
    return d ? d(j, {
      prefixCls: r,
      key: N
    }) : j;
  })), a);
});
K.env.NODE_ENV !== "production" && (Kl.displayName = "Notifications");
var tg = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], ng = function() {
  return document.body;
}, ks = 0;
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
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? ng : t, r = e.motion, a = e.prefixCls, o = e.maxCount, i = e.className, l = e.style, s = e.onAllRemoved, c = e.stack, u = e.renderNotifications, d = sn(e, tg), f = p.useState(), g = Y(f, 2), y = g[0], m = g[1], h = p.useRef(), T = /* @__PURE__ */ p.createElement(Kl, {
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
        var M = rg(d, N);
        (M.key === null || M.key === void 0) && (M.key = "rc-notification-".concat(ks), ks += 1), x(function(j) {
          return [].concat(Ue(j), [{
            type: "open",
            config: M
          }]);
        });
      },
      close: function(N) {
        x(function(M) {
          return [].concat(Ue(M), [{
            type: "close",
            key: N
          }]);
        });
      },
      destroy: function() {
        x(function(N) {
          return [].concat(Ue(N), [{
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
    }), x(function(k) {
      return k.filter(function(N) {
        return !w.includes(N);
      });
    }));
  }, [w]), [E, T];
}
const Ql = /* @__PURE__ */ q.createContext(void 0);
K.env.NODE_ENV !== "production" && (Ql.displayName = "zIndexContext");
const kt = 100, og = 10, ql = kt * og, ig = ql + kt, Xl = {
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
  return e in Xl;
}
const ny = (e, t) => {
  const [, n] = Hn(), r = q.useContext(Ql), a = cg(e);
  let o;
  if (t !== void 0)
    o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Xl[e] : i += sg[e], o = [r === void 0 ? t : i, i];
  }
  if (K.env.NODE_ENV !== "production") {
    const i = $n(e), l = n.zIndexPopupBase + ig, s = o[0] || 0;
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
    var L = A && A.prototype instanceof T ? A : T, O = Object.create(L.prototype), U = new D(I || []);
    return a(O, "_invoke", {
      value: j(P, R, U)
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
  var x = Object.getPrototypeOf, E = x && x(x(W([])));
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
    function R(L, O, U, G) {
      var Q = d(P[L], P, O);
      if (Q.type !== "throw") {
        var B = Q.arg, te = B.value;
        return te && ue(te) == "object" && r.call(te, "__await") ? A.resolve(te.__await).then(function(ie) {
          R("next", ie, U, G);
        }, function(ie) {
          R("throw", ie, U, G);
        }) : A.resolve(te).then(function(ie) {
          B.value = ie, U(B);
        }, function(ie) {
          return R("throw", ie, U, G);
        });
      }
      G(Q.arg);
    }
    var I;
    a(this, "_invoke", {
      value: function(O, U) {
        function G() {
          return new A(function(Q, B) {
            R(O, U, Q, B);
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
        var U = R.delegate;
        if (U) {
          var G = _(U, R);
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
  function V(P) {
    var A = {
      tryLoc: P[0]
    };
    1 in P && (A.catchLoc = P[1]), 2 in P && (A.finallyLoc = P[2], A.afterLoc = P[3]), this.tryEntries.push(A);
  }
  function H(P) {
    var A = P.completion || {};
    A.type = "normal", delete A.arg, P.completion = A;
  }
  function D(P) {
    this.tryEntries = [{
      tryLoc: "root"
    }], P.forEach(V, this), this.reset(!0);
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
    return t.isGeneratorFunction(A) ? O : O.next().then(function(U) {
      return U.done ? U.value : O.next();
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
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(H), !A) for (var R in this) R.charAt(0) === "t" && r.call(this, R) && !isNaN(+R.slice(1)) && (this[R] = e);
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
        return U.type = "throw", U.arg = A, R.next = B, te && (R.method = "next", R.arg = e), !!te;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var O = this.tryEntries[L], U = O.completion;
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
      var U = O ? O.completion : {};
      return U.type = A, U.arg = R, O ? (this.method = "next", this.next = O.finallyLoc, h) : this.complete(U);
    },
    complete: function(A, R) {
      if (A.type === "throw") throw A.arg;
      return A.type === "break" || A.type === "continue" ? this.next = A.arg : A.type === "return" ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : A.type === "normal" && R && (this.next = R), h;
    },
    finish: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var I = this.tryEntries[R];
        if (I.finallyLoc === A) return this.complete(I.completion, I.afterLoc), H(I), h;
      }
    },
    catch: function(A) {
      for (var R = this.tryEntries.length - 1; R >= 0; --R) {
        var I = this.tryEntries[R];
        if (I.tryLoc === A) {
          var L = I.completion;
          if (L.type === "throw") {
            var O = L.arg;
            H(I);
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
function Ns(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a);
}
function Yl(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e.apply(t, n);
      function i(s) {
        Ns(o, r, a, i, l, "next", s);
      }
      function l(s) {
        Ns(o, r, a, i, l, "throw", s);
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
function Ps(e) {
  var t = gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && ue(t) === "object" && (t.usingClientEntryPoint = e);
}
var ta = "__rc_react_root__";
function hg(e, t) {
  Ps(!0);
  var n = t[ta] || ga(t);
  Ps(!1), n.render(e), t[ta] = n;
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
  return Po.apply(this, arguments);
}
function Po() {
  return Po = Yl(/* @__PURE__ */ sr().mark(function e(t) {
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
  })), Po.apply(this, arguments);
}
function vg(e) {
  dg(e);
}
function ry(e) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = Yl(/* @__PURE__ */ sr().mark(function e(t) {
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
  })), Ro.apply(this, arguments);
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
}, Zl = (e) => {
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
      fontSize: T,
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
        [`${i}-wrapper`]: Object.assign({}, Zl(e))
      }
    }
  ];
}, Jl = (e) => ({
  zIndexPopup: e.zIndexPopupBase + ql + 50,
  width: 384
}), eu = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return mi(e, {
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
}, tu = Hp("Notification", (e) => {
  const t = eu(e);
  return [Tg(t), yg(t), wg(t)];
}, Jl), Ag = Up(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = eu(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, Zl(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${Ht(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, Jl);
var kg = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
    t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
};
function vi(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ p.createElement($l, {
    className: `${e}-close-icon`
  });
}
const Ng = {
  success: Fl,
  info: Ul,
  error: Bl,
  warning: Hl
}, nu = (e) => {
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
  } = p.useContext(Ut), g = t || f("notification"), y = `${g}-notice`, m = zl(g), [h, T, S] = tu(g, m);
  return h(/* @__PURE__ */ p.createElement("div", {
    className: Qe(`${y}-pure-panel`, T, n, S, m)
  }, /* @__PURE__ */ p.createElement(Ag, {
    prefixCls: g
  }), /* @__PURE__ */ p.createElement(Vl, Object.assign({}, d, {
    prefixCls: g,
    eventKey: "pure",
    duration: null,
    closable: s,
    className: Qe({
      notificationClassName: u
    }),
    closeIcon: vi(g, c),
    content: /* @__PURE__ */ p.createElement(nu, {
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
const Rs = 24, Ig = 4.5, jg = "topRight", _g = (e) => {
  let {
    children: t,
    prefixCls: n
  } = e;
  const r = zl(n), [a, o, i] = tu(n, r);
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
  } = p.useContext(Ut), [, T] = Hn(), S = a || g("notification"), C = (N) => Rg(N, n ?? Rs, r ?? Rs), w = () => Qe({
    [`${S}-rtl`]: l ?? h === "rtl"
  }), x = () => Mg(S), [E, k] = ag({
    prefixCls: S,
    style: C,
    className: w,
    motion: x,
    closable: !0,
    closeIcon: vi(S),
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
function ru(e) {
  const t = q.useRef(null), n = $n("Notification");
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
        role: x = "alert",
        closeIcon: E,
        closable: k
      } = s, N = Og(s, ["message", "description", "icon", "type", "btn", "className", "style", "role", "closeIcon", "closable"]), M = vi(g, typeof E < "u" ? E : f == null ? void 0 : f.closeIcon);
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e == null ? void 0 : e.placement) !== null && c !== void 0 ? c : jg
      }, N), {
        content: /* @__PURE__ */ q.createElement(nu, {
          prefixCls: g,
          icon: h,
          type: T,
          message: y,
          description: m,
          btn: S,
          role: x
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
  return ru(e);
}
const Bg = /* @__PURE__ */ q.createContext({});
let st = null, Vr = (e) => e(), na = [], cr = {};
function Ms() {
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
  } = p.useContext(Ut), o = cr.prefixCls || a("notification"), i = p.useContext(Bg), [l, s] = ru(Object.assign(Object.assign(Object.assign({}, n), {
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
  const [n, r] = q.useState(Ms), a = () => {
    r(Ms);
  };
  q.useEffect(a, []);
  const o = Il(), i = o.getRootPrefixCls(), l = o.getIconPrefixCls(), s = o.getTheme(), c = /* @__PURE__ */ q.createElement($g, {
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
function yi() {
  if (!st) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    st = t, Vr(() => {
      mg(/* @__PURE__ */ q.createElement(Hg, {
        ref: (n) => {
          const {
            instance: r,
            sync: a
          } = n || {};
          Promise.resolve().then(() => {
            !t.instance && r && (t.instance = r, t.sync = a, yi());
          });
        }
      }), e);
    });
    return;
  }
  st.instance && (na.forEach((e) => {
    switch (e.type) {
      case "open": {
        Vr(() => {
          st.instance.open(Object.assign(Object.assign({}, cr), e.config));
        });
        break;
      }
      case "destroy":
        Vr(() => {
          st == null || st.instance.destroy(e.key);
        });
        break;
    }
  }), na = []);
}
function Ug(e) {
  cr = Object.assign(Object.assign({}, cr), e), Vr(() => {
    var t;
    (t = st == null ? void 0 : st.sync) === null || t === void 0 || t.call(st);
  });
}
function au(e) {
  const t = Il();
  K.env.NODE_ENV !== "production" && !t.holderRender && bm("notification"), na.push({
    type: "open",
    config: e
  }), yi();
}
const zg = (e) => {
  na.push({
    type: "destroy",
    key: e
  }), yi();
}, Vg = ["success", "info", "warning", "error"], Wg = {
  open: au,
  destroy: zg,
  config: Ug,
  useNotification: Fg,
  _InternalPanelDoNotUseOrYouWillBeFired: Pg
}, Mo = Wg;
Vg.forEach((e) => {
  Mo[e] = (t) => au(Object.assign(Object.assign({}, t), {
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
            children: /* @__PURE__ */ v.jsx(Jo, {})
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
}, cn = typeof window > "u" || "Deno" in globalThis;
function Je() {
}
function Kg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ou(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Os(e, t) {
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
      if (t.queryHash !== bi(i, t.options))
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
function Is(e, t) {
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
function bi(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || lr)(e);
}
function lr(e) {
  return JSON.stringify(
    e,
    (t, n) => _o(n) ? Object.keys(n).sort().reduce((r, a) => (r[a] = n[a], r), {}) : n
  );
}
function ur(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !ur(e[n], t[n])) : !1;
}
function Io(e, t) {
  if (e === t)
    return e;
  const n = js(e) && js(t);
  if (n || _o(e) && _o(t)) {
    const r = n ? e : Object.keys(e), a = r.length, o = n ? t : Object.keys(t), i = o.length, l = n ? [] : {};
    let s = 0;
    for (let c = 0; c < i; c++) {
      const u = n ? c : o[c];
      (!n && r.includes(u) || n) && e[u] === void 0 && t[u] === void 0 ? (l[u] = void 0, s++) : (l[u] = Io(e[u], t[u]), l[u] === e[u] && e[u] !== void 0 && s++);
    }
    return a === i && s === a ? e : l;
  }
  return t;
}
function jo(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function js(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function _o(e) {
  if (!_s(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!_s(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function _s(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qg(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Lo(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (K.env.NODE_ENV !== "production")
      try {
        return Io(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        );
      }
    return Io(e, t);
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
function iu(e, t) {
  return K.env.NODE_ENV !== "production" && e.queryFn === ra && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ra ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var qt, Mt, xn, zs, Yg = (zs = class extends vr {
  constructor() {
    super();
    J(this, qt);
    J(this, Mt);
    J(this, xn);
    z(this, xn, (t) => {
      if (!cn && window.addEventListener) {
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
    b(this, qt) !== t && (z(this, qt, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof b(this, qt) == "boolean" ? b(this, qt) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, qt = new WeakMap(), Mt = new WeakMap(), xn = new WeakMap(), zs), xi = new Yg(), Cn, Ot, Sn, Vs, Zg = (Vs = class extends vr {
  constructor() {
    super();
    J(this, Cn, !0);
    J(this, Ot);
    J(this, Sn);
    z(this, Sn, (t) => {
      if (!cn && window.addEventListener) {
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
}, Cn = new WeakMap(), Ot = new WeakMap(), Sn = new WeakMap(), Vs), aa = new Zg();
function Do() {
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
function su(e) {
  return (e ?? "online") === "online" ? aa.isOnline() : !0;
}
var cu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function La(e) {
  return e instanceof cu;
}
function lu(e) {
  let t = !1, n = 0, r = !1, a;
  const o = Do(), i = (m) => {
    var h;
    r || (f(new cu(m)), (h = e.abort) == null || h.call(e));
  }, l = () => {
    t = !0;
  }, s = () => {
    t = !1;
  }, c = () => xi.isFocused() && (e.networkMode === "always" || aa.isOnline()) && e.canRun(), u = () => su(e.networkMode) && e.canRun(), d = (m) => {
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
      const S = e.retry ?? (cn ? 0 : 3), C = e.retryDelay ?? Jg, w = typeof C == "function" ? C(n, T) : C, x = S === !0 || typeof S == "number" && n < S || typeof S == "function" && S(n, T);
      if (t || !x) {
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
var Ne = e0(), Xt, Ws, uu = (Ws = class {
  constructor() {
    J(this, Xt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Oo(this.gcTime) && z(this, Xt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (cn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    b(this, Xt) && (clearTimeout(b(this, Xt)), z(this, Xt, void 0));
  }
}, Xt = new WeakMap(), Ws), En, wn, Ze, Oe, dr, Yt, ot, Tt, Gs, t0 = (Gs = class extends uu {
  constructor(t) {
    super();
    J(this, ot);
    J(this, En);
    J(this, wn);
    J(this, Ze);
    J(this, Oe);
    J(this, dr);
    J(this, Yt);
    z(this, Yt, !1), z(this, dr, t.defaultOptions), this.setOptions(t.options), this.observers = [], z(this, Ze, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, z(this, En, n0(this.options)), this.state = t.state ?? b(this, En), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = b(this, Oe)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...b(this, dr), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && b(this, Ze).remove(this);
  }
  setData(t, n) {
    const r = Lo(this.state.data, t, this.options);
    return ae(this, ot, Tt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    ae(this, ot, Tt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, a;
    const n = (r = b(this, Oe)) == null ? void 0 : r.promise;
    return (a = b(this, Oe)) == null || a.cancel(t), n ? n.then(Je).catch(Je) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(b(this, En));
  }
  isActive() {
    return this.observers.some(
      (t) => ct(t.options.enabled, this) !== !1
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
    return this.state.isInvalidated || this.state.data === void 0 || !ou(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Oe)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = b(this, Oe)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), b(this, Ze).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (b(this, Oe) && (b(this, Yt) ? b(this, Oe).cancel({ revert: !0 }) : b(this, Oe).cancelRetry()), this.scheduleGc()), b(this, Ze).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ae(this, ot, Tt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var s, c, u;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (b(this, Oe))
        return b(this, Oe).continueRetry(), b(this, Oe).promise;
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
        get: () => (z(this, Yt, !0), r.signal)
      });
    }, o = () => {
      const d = iu(this.options, n), f = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a(f), z(this, Yt, !1), this.options.persister ? this.options.persister(
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
    ), z(this, wn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = i.fetchOptions) == null ? void 0 : c.meta)) && ae(this, ot, Tt).call(this, { type: "fetch", meta: (u = i.fetchOptions) == null ? void 0 : u.meta });
    const l = (d) => {
      var f, g, y, m;
      La(d) && d.silent || ae(this, ot, Tt).call(this, {
        type: "error",
        error: d
      }), La(d) || ((g = (f = b(this, Ze).config).onError) == null || g.call(
        f,
        d,
        this
      ), (m = (y = b(this, Ze).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return z(this, Oe, lu({
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
        (g = (f = b(this, Ze).config).onSuccess) == null || g.call(f, d, this), (m = (y = b(this, Ze).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: l,
      onFail: (d, f) => {
        ae(this, ot, Tt).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        ae(this, ot, Tt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ae(this, ot, Tt).call(this, { type: "continue" });
      },
      retry: i.options.retry,
      retryDelay: i.options.retryDelay,
      networkMode: i.options.networkMode,
      canRun: () => !0
    })), b(this, Oe).start();
  }
}, En = new WeakMap(), wn = new WeakMap(), Ze = new WeakMap(), Oe = new WeakMap(), dr = new WeakMap(), Yt = new WeakMap(), ot = new WeakSet(), Tt = function(t) {
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
          ...du(r.data, this.options),
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
        return La(a) && a.revert && b(this, wn) ? { ...b(this, wn), fetchStatus: "idle" } : {
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
    }), b(this, Ze).notify({ query: this, type: "updated", action: t });
  });
}, Gs);
function du(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: su(t.networkMode) ? "fetching" : "paused",
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
var gt, Ks, r0 = (Ks = class extends vr {
  constructor(t = {}) {
    super();
    J(this, gt);
    this.config = t, z(this, gt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const a = n.queryKey, o = n.queryHash ?? bi(a, n);
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
      (r) => Os(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Os(t, r)) : n;
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
}, gt = new WeakMap(), Ks), vt, Le, Zt, yt, Rt, Qs, a0 = (Qs = class extends uu {
  constructor(t) {
    super();
    J(this, yt);
    J(this, vt);
    J(this, Le);
    J(this, Zt);
    this.mutationId = t.mutationId, z(this, Le, t.mutationCache), z(this, vt, []), this.state = t.state || o0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    b(this, vt).includes(t) || (b(this, vt).push(t), this.clearGcTimeout(), b(this, Le).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    z(this, vt, b(this, vt).filter((n) => n !== t)), this.scheduleGc(), b(this, Le).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    b(this, vt).length || (this.state.status === "pending" ? this.scheduleGc() : b(this, Le).remove(this));
  }
  continue() {
    var t;
    return ((t = b(this, Zt)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, o, i, l, s, c, u, d, f, g, y, m, h, T, S, C, w, x, E, k;
    z(this, Zt, lu({
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
      canRun: () => b(this, Le).canRun(this)
    }));
    const n = this.state.status === "pending", r = !b(this, Zt).canStart();
    try {
      if (!n) {
        ae(this, yt, Rt).call(this, { type: "pending", variables: t, isPaused: r }), await ((o = (a = b(this, Le).config).onMutate) == null ? void 0 : o.call(
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
      const N = await b(this, Zt).start();
      return await ((c = (s = b(this, Le).config).onSuccess) == null ? void 0 : c.call(
        s,
        N,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, N, t, this.state.context)), await ((g = (f = b(this, Le).config).onSettled) == null ? void 0 : g.call(
        f,
        N,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((m = (y = this.options).onSettled) == null ? void 0 : m.call(y, N, null, t, this.state.context)), ae(this, yt, Rt).call(this, { type: "success", data: N }), N;
    } catch (N) {
      try {
        throw await ((T = (h = b(this, Le).config).onError) == null ? void 0 : T.call(
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
        )), await ((x = (w = b(this, Le).config).onSettled) == null ? void 0 : x.call(
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
      b(this, Le).runNext(this);
    }
  }
}, vt = new WeakMap(), Le = new WeakMap(), Zt = new WeakMap(), yt = new WeakSet(), Rt = function(t) {
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
    }), b(this, Le).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Qs);
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
var Ke, fr, qs, i0 = (qs = class extends vr {
  constructor(t = {}) {
    super();
    J(this, Ke);
    J(this, fr);
    this.config = t, z(this, Ke, /* @__PURE__ */ new Map()), z(this, fr, Date.now());
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
    const n = jr(t), r = b(this, Ke).get(n) ?? [];
    r.push(t), b(this, Ke).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = jr(t);
    if (b(this, Ke).has(n)) {
      const a = (r = b(this, Ke).get(n)) == null ? void 0 : r.filter((o) => o !== t);
      a && (a.length === 0 ? b(this, Ke).delete(n) : b(this, Ke).set(n, a));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = b(this, Ke).get(jr(t))) == null ? void 0 : r.find((a) => a.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var r;
    const n = (r = b(this, Ke).get(jr(t))) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
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
    return [...b(this, Ke).values()].flat();
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Is(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => Is(t, n));
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
}, Ke = new WeakMap(), fr = new WeakMap(), qs);
function jr(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Ls(e) {
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
        }, T = iu(t.options, t.fetchOptions), S = async (C, w, x) => {
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
          const k = await T(
            E
          ), { maxPages: N } = t.options, M = x ? Xg : qg;
          return {
            pages: M(C.pages, k, N),
            pageParams: M(C.pageParams, w, N)
          };
        };
        if (a && o.length) {
          const C = a === "backward", w = C ? s0 : Ds, x = {
            pages: o,
            pageParams: i
          }, E = w(r, x);
          l = await S(x, E, C);
        } else {
          const C = e ?? o.length;
          do {
            const w = s === 0 ? i[0] ?? r.initialPageParam : Ds(r, l);
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
function Ds(e, { pages: t, pageParams: n }) {
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
var ge, It, jt, Tn, An, _t, kn, Nn, Xs, c0 = (Xs = class {
  constructor(e = {}) {
    J(this, ge);
    J(this, It);
    J(this, jt);
    J(this, Tn);
    J(this, An);
    J(this, _t);
    J(this, kn);
    J(this, Nn);
    z(this, ge, e.queryCache || new r0()), z(this, It, e.mutationCache || new i0()), z(this, jt, e.defaultOptions || {}), z(this, Tn, /* @__PURE__ */ new Map()), z(this, An, /* @__PURE__ */ new Map()), z(this, _t, 0);
  }
  mount() {
    Sr(this, _t)._++, b(this, _t) === 1 && (z(this, kn, xi.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, ge).onFocus());
    })), z(this, Nn, aa.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), b(this, ge).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Sr(this, _t)._--, b(this, _t) === 0 && ((e = b(this, kn)) == null || e.call(this), z(this, kn, void 0), (t = b(this, Nn)) == null || t.call(this), z(this, Nn, void 0));
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
    ), o = a == null ? void 0 : a.state.data, i = Kg(t, o);
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
    return Promise.all(r).then(Je).catch(Je);
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
        return n.throwOnError || (o = o.catch(Je)), a.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(Je);
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
    return this.fetchQuery(e).then(Je).catch(Je);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ls(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Je).catch(Je);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Ls(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return aa.isOnline() ? b(this, It).resumePausedMutations() : Promise.resolve();
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
    b(this, Tn).set(lr(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...b(this, Tn).values()];
    let n = {};
    return t.forEach((r) => {
      ur(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
    }), n;
  }
  setMutationDefaults(e, t) {
    b(this, An).set(lr(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...b(this, An).values()];
    let n = {};
    return t.forEach((r) => {
      ur(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
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
    return t.queryHash || (t.queryHash = bi(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== !0 && t.queryFn === ra && (t.enabled = !1), t;
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
}, ge = new WeakMap(), It = new WeakMap(), jt = new WeakMap(), Tn = new WeakMap(), An = new WeakMap(), _t = new WeakMap(), kn = new WeakMap(), Nn = new WeakMap(), Xs), He, oe, hr, De, Jt, Pn, Lt, bt, pr, Rn, Mn, en, tn, Dt, On, le, Xn, Fo, Bo, $o, Ho, Uo, zo, Vo, fu, Ys, l0 = (Ys = class extends vr {
  constructor(t, n) {
    super();
    J(this, le);
    J(this, He);
    J(this, oe);
    J(this, hr);
    J(this, De);
    J(this, Jt);
    J(this, Pn);
    J(this, Lt);
    J(this, bt);
    J(this, pr);
    J(this, Rn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    J(this, Mn);
    J(this, en);
    J(this, tn);
    J(this, Dt);
    J(this, On, /* @__PURE__ */ new Set());
    this.options = n, z(this, He, t), z(this, bt, null), z(this, Lt, Do()), this.options.experimental_prefetchInRender || b(this, Lt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (b(this, oe).addObserver(this), Fs(b(this, oe), this.options) ? ae(this, le, Xn).call(this) : this.updateResult(), ae(this, le, Ho).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Wo(
      b(this, oe),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Wo(
      b(this, oe),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ae(this, le, Uo).call(this), ae(this, le, zo).call(this), b(this, oe).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, a = b(this, oe);
    if (this.options = b(this, He).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof ct(this.options.enabled, b(this, oe)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ae(this, le, Vo).call(this), b(this, oe).setOptions(this.options), r._defaulted && !jo(this.options, r) && b(this, He).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: b(this, oe),
      observer: this
    });
    const o = this.hasListeners();
    o && Bs(
      b(this, oe),
      a,
      this.options,
      r
    ) && ae(this, le, Xn).call(this), this.updateResult(n), o && (b(this, oe) !== a || ct(this.options.enabled, b(this, oe)) !== ct(r.enabled, b(this, oe)) || bn(this.options.staleTime, b(this, oe)) !== bn(r.staleTime, b(this, oe))) && ae(this, le, Fo).call(this);
    const i = ae(this, le, Bo).call(this);
    o && (b(this, oe) !== a || ct(this.options.enabled, b(this, oe)) !== ct(r.enabled, b(this, oe)) || i !== b(this, Dt)) && ae(this, le, $o).call(this, i);
  }
  getOptimisticResult(t) {
    const n = b(this, He).getQueryCache().build(b(this, He), t), r = this.createResult(n, t);
    return d0(this, r) && (z(this, De, r), z(this, Pn, this.options), z(this, Jt, b(this, oe).state)), r;
  }
  getCurrentResult() {
    return b(this, De);
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
    return b(this, oe);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = b(this, He).defaultQueryOptions(t), r = b(this, He).getQueryCache().build(b(this, He), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return ae(this, le, Xn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), b(this, De)));
  }
  createResult(t, n) {
    var N;
    const r = b(this, oe), a = this.options, o = b(this, De), i = b(this, Jt), l = b(this, Pn), c = t !== r ? t.state : b(this, hr), { state: u } = t;
    let d = { ...u }, f = !1, g;
    if (n._optimisticResults) {
      const M = this.hasListeners(), j = !M && Fs(t, n), _ = M && Bs(t, r, n, a);
      (j || _) && (d = {
        ...d,
        ...du(u.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: h } = d;
    if (n.select && d.data !== void 0)
      if (o && d.data === (i == null ? void 0 : i.data) && n.select === b(this, pr))
        g = b(this, Rn);
      else
        try {
          z(this, pr, n.select), g = n.select(d.data), g = Lo(o == null ? void 0 : o.data, g, n), z(this, Rn, g), z(this, bt, null);
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
        } catch (j) {
          z(this, bt, j);
        }
      M !== void 0 && (h = "success", g = Lo(
        o == null ? void 0 : o.data,
        M,
        n
      ), f = !0);
    }
    b(this, bt) && (y = b(this, bt), g = b(this, Rn), m = Date.now(), h = "error");
    const T = d.fetchStatus === "fetching", S = h === "pending", C = h === "error", w = S && T, x = g !== void 0, k = {
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
      isLoadingError: C && !x,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: C && x,
      isStale: Ci(t, n),
      refetch: this.refetch,
      promise: b(this, Lt)
    };
    if (this.options.experimental_prefetchInRender) {
      const M = (V) => {
        k.status === "error" ? V.reject(k.error) : k.data !== void 0 && V.resolve(k.data);
      }, j = () => {
        const V = z(this, Lt, k.promise = Do());
        M(V);
      }, _ = b(this, Lt);
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
    const n = b(this, De), r = this.createResult(b(this, oe), this.options);
    if (z(this, Jt, b(this, oe).state), z(this, Pn, this.options), b(this, Jt).data !== void 0 && z(this, Mn, b(this, oe)), jo(r, n))
      return;
    z(this, De, r);
    const a = {}, o = () => {
      if (!n)
        return !0;
      const { notifyOnChangeProps: i } = this.options, l = typeof i == "function" ? i() : i;
      if (l === "all" || !l && !b(this, On).size)
        return !0;
      const s = new Set(
        l ?? b(this, On)
      );
      return this.options.throwOnError && s.add("error"), Object.keys(b(this, De)).some((c) => {
        const u = c;
        return b(this, De)[u] !== n[u] && s.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && o() && (a.listeners = !0), ae(this, le, fu).call(this, { ...a, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ae(this, le, Ho).call(this);
  }
}, He = new WeakMap(), oe = new WeakMap(), hr = new WeakMap(), De = new WeakMap(), Jt = new WeakMap(), Pn = new WeakMap(), Lt = new WeakMap(), bt = new WeakMap(), pr = new WeakMap(), Rn = new WeakMap(), Mn = new WeakMap(), en = new WeakMap(), tn = new WeakMap(), Dt = new WeakMap(), On = new WeakMap(), le = new WeakSet(), Xn = function(t) {
  ae(this, le, Vo).call(this);
  let n = b(this, oe).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(Je)), n;
}, Fo = function() {
  ae(this, le, Uo).call(this);
  const t = bn(
    this.options.staleTime,
    b(this, oe)
  );
  if (cn || b(this, De).isStale || !Oo(t))
    return;
  const r = ou(b(this, De).dataUpdatedAt, t) + 1;
  z(this, en, setTimeout(() => {
    b(this, De).isStale || this.updateResult();
  }, r));
}, Bo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(b(this, oe)) : this.options.refetchInterval) ?? !1;
}, $o = function(t) {
  ae(this, le, zo).call(this), z(this, Dt, t), !(cn || ct(this.options.enabled, b(this, oe)) === !1 || !Oo(b(this, Dt)) || b(this, Dt) === 0) && z(this, tn, setInterval(() => {
    (this.options.refetchIntervalInBackground || xi.isFocused()) && ae(this, le, Xn).call(this);
  }, b(this, Dt)));
}, Ho = function() {
  ae(this, le, Fo).call(this), ae(this, le, $o).call(this, ae(this, le, Bo).call(this));
}, Uo = function() {
  b(this, en) && (clearTimeout(b(this, en)), z(this, en, void 0));
}, zo = function() {
  b(this, tn) && (clearInterval(b(this, tn)), z(this, tn, void 0));
}, Vo = function() {
  const t = b(this, He).getQueryCache().build(b(this, He), this.options);
  if (t === b(this, oe))
    return;
  const n = b(this, oe);
  z(this, oe, t), z(this, hr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, fu = function(t) {
  Ne.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(b(this, De));
    }), b(this, He).getQueryCache().notify({
      query: b(this, oe),
      type: "observerResultsUpdated"
    });
  });
}, Ys);
function u0(e, t) {
  return ct(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Fs(e, t) {
  return u0(e, t) || e.state.data !== void 0 && Wo(e, t, t.refetchOnMount);
}
function Wo(e, t, n) {
  if (ct(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Ci(e, t);
  }
  return !1;
}
function Bs(e, t, n, r) {
  return (e !== t || ct(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && Ci(e, n);
}
function Ci(e, t) {
  return ct(t.enabled, e) !== !1 && e.isStaleByTime(bn(t.staleTime, e));
}
function d0(e, t) {
  return !jo(e.getCurrentResult(), t);
}
var hu = p.createContext(
  void 0
), f0 = (e) => {
  const t = p.useContext(hu);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, h0 = ({
  client: e,
  children: t
}) => (p.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ v.jsx(hu.Provider, { value: e, children: t })), pu = p.createContext(!1), p0 = () => p.useContext(pu);
pu.Provider;
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
}, w0 = (e, t) => e.isLoading && e.isFetching && !t, T0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, $s = (e, t, n) => t.fetchOptimistic(e).catch(() => {
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
    throw $s(i, s, o);
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
  ), i.experimental_prefetchInRender && !cn && w0(c, a)) {
    const m = l ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      $s(i, s, o)
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
  const { data: e } = await Fe.get("/user-assets/token-prices");
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
  const t = Se.getToken(e), { address: n } = Ie.all(), r = await t.getBalance(n);
  return Qr(r) || "0";
}, R0 = async () => {
  const e = Se.createTokenMap(() => "0"), t = Object.values(xe), n = await Promise.all(t.map((r) => P0(r)));
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
  const { data: r } = M0(), { data: a } = N0(), [o, i] = p.useState(null), [l, s] = p.useState(!1), [c, u] = p.useState(Se.createTokenMap(() => ""));
  p.useEffect(() => {
    e && f();
  }, [e]);
  const d = p.useMemo(() => Se.getAllTokens().some((x) => !c[x.tokenType]), [c]), f = async () => {
    g(), u(n);
  }, g = async () => {
    try {
      const { data: x } = await Fe.post("/transaction/outbound-amount", {
        tokens: Se.getAllTokens().map((E) => E.tokenType)
      });
      i(x);
    } catch (x) {
      console.error("Failed to fetch token transferred:", x);
    }
  }, y = p.useMemo(() => Se.getAllTokens().map((x) => ({
    type: x.tokenType,
    balance: (r == null ? void 0 : r[x.tokenType]) || "0",
    todayTransferred: (o == null ? void 0 : o[x.tokenType]) || "0"
  })), [r, o]), m = (x, E) => {
    E && !/^\d*\.?\d*$/.test(E) || u((k) => ({
      ...k,
      [x]: E
    }));
  }, h = (x, E) => {
    if (!E || !a || !a[x]) return "0";
    const k = parseFloat(a[x]), N = parseFloat(E);
    return isNaN(k) || isNaN(N) ? "0" : (k * N).toFixed(2);
  }, T = async () => {
    at(c, "limits");
    try {
      s(!0);
      const x = Se.getAllTokens().map((E) => ({
        type: E.tokenType,
        value: _r(c[E.tokenType] || "0").toString()
      }));
      await Fe.post("/auth/generate-otp-for-daily-limit-update", {
        limits: x
      }), lt.info("Please check your email to confirm the transaction limit update", {
        autoClose: !1,
        closeButton: !0
      }), t();
    } catch (x) {
      const E = er(x);
      lt.error(E.message);
    } finally {
      s(!1);
    }
  }, S = (x) => x == null ? "0" : un(BigInt(x)), C = () => {
    t();
  }, w = /* @__PURE__ */ v.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ v.jsx(nn, { className: "hidden tablet:block", variant: "outline", onClick: () => C(), children: "Cancel" }),
    /* @__PURE__ */ v.jsx(
      nn,
      {
        className: "w-full tablet:w-auto",
        disabled: d || l,
        onClick: () => {
          T();
        },
        children: l ? /* @__PURE__ */ v.jsx(mc, {}) : "Save"
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
      children: y.map((x, E) => /* @__PURE__ */ v.jsxs("div", { className: E > 0 ? "mt-6" : "", children: [
        /* @__PURE__ */ v.jsxs("p", { className: "text-black text-sm font-medium leading-none mb-[6px]", children: [
          x.type,
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
                value: c[x.type],
                onChange: (k) => m(x.type, k.target.value),
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
          /* @__PURE__ */ v.jsxs("div", { className: ee(
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
          /* @__PURE__ */ v.jsx("p", { className: "text-black text-xs font-normal leading-none", children: l ? "" : `You've transferred ${S(x.todayTransferred ?? "0")} ${Se.getToken(x.type).symbol} today` })
        ] })
      ] }, x.type))
    }
  );
}
const I0 = Se.createTokenMap(() => "0"), j0 = async () => {
  const { data: e } = await Fe.get("/transaction/default-daily-withdrawal-limits", {
    params: {
      includeUserLimits: !0
    }
  });
  return Object.values(xe).reduce((n, r) => (n[r] = un(BigInt(e[r] ?? 0)), n), {});
}, _0 = (e) => yr({
  queryKey: ["dailyWithdrawalLimits"],
  queryFn: j0,
  enabled: (e == null ? void 0 : e.enabled) !== !1,
  gcTime: 0,
  staleTime: 0,
  initialData: I0,
  ...e
}), L0 = Se.getAllTokens();
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
  const [c, u] = p.useState(""), [d, f] = p.useState(""), [g, y] = p.useState(""), [m, h] = p.useState(!1), T = p.useRef(), [S, C] = p.useState(!1), { data: w } = _0(), [x, E] = p.useState(a), [k, N] = p.useState("0"), [M, j] = p.useState(""), [_, V] = p.useState(!1), [H, D] = p.useState(!1), [W, P] = p.useState(!1), [A, R] = p.useState(!1), [I, L] = p.useState(""), [O, U] = p.useState(""), [G, Q] = p.useState(""), { t: B } = ei(), te = _i(d, 800), ie = _i(c, 800), Ee = p.useRef(null), [we, Ce] = p.useState(0), Re = p.useMemo(() => x ? Se.getToken(x).symbol : "", [x]);
  p.useEffect(() => {
    Ee.current && setTimeout(() => {
      var fe;
      const ne = (fe = Ee.current) == null ? void 0 : fe.getBoundingClientRect().width;
      ne && Ce(ne + 34);
    }, 0);
  }, [Re, e]), p.useEffect(() => {
    at("open", e, "address", r), e ? Te() : Ve();
  }, [o, i, l, e]), p.useEffect(() => {
    c && d && H && (Xe(), ze(c), $e(), D(!1));
  }, [c, d, H, e]), p.useEffect(() => {
    !e && s && s();
  }, [e]), p.useEffect(() => {
    Xe(), ie && ze(ie), te && !$ && !_ && $e();
  }, [te, ie]);
  const Te = async () => {
    await ve(a), o && u(o), i && f(i), l && y(l), D(!0);
  }, je = p.useMemo(() => w[x], [x, w]), $ = p.useMemo(() => !c || !d || m || !A || W || !!O && O !== B("/dashboard.[token].sendModal.unregisteredEmailNotice") || parseFloat(d) > parseFloat(k) || _, [c, d, m, A, W, O, k, _]), qe = () => {
    const ne = /* @__PURE__ */ v.jsx("div", { className: "cursor-pointer", onClick: () => {
      Mo.destroy();
    }, children: "Ok" });
    Mo.open({
      message: "Daily transaction limit exceeded",
      description: /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("p", { children: "Please check your email and verify by the OTP." }),
        /* @__PURE__ */ v.jsx("p", { children: "You can change yur dailiy transaction limit under profile page." })
      ] }),
      placement: "top",
      duration: 0,
      btn: ne
    });
  }, ve = async (ne) => {
    f(""), V(!1), j(""), Q(""), E(ne);
    const fe = Se.getToken(ne);
    T.current = fe;
    let _e = await fe.getBalance(r);
    _e = Qr(_e), N(_e);
  }, ze = async (ne) => {
    if (Wr(c))
      R(!0), L(""), U("");
    else {
      P(!0), U("");
      try {
        const fe = await Fe.get("/address/", {
          params: { email: ne }
        });
        fe.data.success ? (R(!0), L(fe.data.address)) : ji.test(ne) ? (R(!0), L(""), U(B("/dashboard.[token].sendModal.unregisteredEmailNotice"))) : (R(!1), L(""), U(B("/dashboard.[token].sendModal.invalidEmailFormat")));
      } catch {
      } finally {
        P(!1);
      }
    }
  }, nt = () => {
    at("to", c), c || (R(!1), L(""), U(""));
  };
  async function ft(ne) {
    try {
      const fe = _r(d).toString();
      at("amt", fe), h(!0);
      const {
        needOtp: _e,
        hash: br,
        message: Ei
      } = await Yd.signTransaction({
        toAddress: ne,
        amount: fe,
        token: x,
        note: g,
        transactionType: vc.TRANSFER
      });
      br ? (t(!1), de(br)) : _e && (qe(), t(!1));
    } catch (fe) {
      const _e = er(fe);
      at("errorInfo", _e), lt.error(_e.message);
    } finally {
      h(!1);
    }
  }
  const he = (ne) => {
    var _e;
    const fe = `${(_e = T.current) == null ? void 0 : _e.scanTransactionUrl}/${ne}`;
    window.open(fe, "_blank");
  }, de = (ne) => {
    lt(
      /* @__PURE__ */ v.jsx("div", { className: "w-full", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ v.jsx(Fa, { color: "#2edc82", size: 16, className: "mr-2" }),
        /* @__PURE__ */ v.jsxs("p", { className: "flex items-center", children: [
          "Transaction submitted,",
          /* @__PURE__ */ v.jsx(
            nn,
            {
              className: "text-brand-foreground",
              variant: "link",
              size: "sm",
              onClick: () => {
                he(ne);
              },
              children: "View Detail"
            }
          )
        ] })
      ] }) })
    );
  }, Me = async () => {
    if (!$)
      try {
        h(!0);
        let ne, fe;
        if (Wr(c))
          ne = c;
        else if (ji.test(c) && O === B("/dashboard.[token].sendModal.unregisteredEmailNotice")) {
          fe = c;
          const _e = await Fe.post("/invite/invite-register", {
            toEmail: fe,
            from: r,
            amount: _r(d).toString(),
            token: x,
            note: g
          });
          at("res", _e), lt.success(B("/dashboard.[token].sendModal.emailSentToUnregistered")), Ve(), t(!1);
          return;
        } else
          ne = I;
        await ft(ne), Ve(), t(!1);
      } catch (ne) {
        const fe = er(ne);
        at("errorInfo", fe), lt.error(B("/dashboard.[token].sendModal.sendError"));
      } finally {
        h(!1);
      }
  }, Xe = async () => {
    parseFloat(d) > parseFloat(k) ? Q("Amount exceeded") : Q("");
  }, $e = async () => {
    if (d && !$) {
      V(!0);
      try {
        at("checkEstimatedFee", d);
        const ne = await Vd({
          tokenType: x,
          transferParams: {
            to: r,
            amount: _r(d)
          },
          fromAddress: r
        });
        j(ne ? ne.feeInTokens.toString() : "");
      } catch (ne) {
        at("Failed to get estimated fee:", ne), j("");
      } finally {
        V(!1);
      }
    }
  }, Ve = () => {
    f(""), u(""), y(""), L(""), U(""), R(!1), P(!1), j("");
  }, zn = async (ne) => {
    f(ne.target.value.trim()), parseFloat(d) > parseFloat(k) ? Q("Amount exceeded") : Q("");
  }, ya = e ? /* @__PURE__ */ v.jsxs("div", { className: "fixed inset-0 z-[10001] flex items-center justify-center font-['Roboto']", children: [
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
            children: /* @__PURE__ */ v.jsx(Jo, {})
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
                onBlur: nt,
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
            A && !W && !O && /* @__PURE__ */ v.jsx(Fa, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
            O && !W && /* @__PURE__ */ v.jsx(uc, { className: ee(
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
                onChange: zn,
                type: "number",
                inputMode: "decimal",
                id: "amount",
                className: ee(
                  "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                ),
                required: !0,
                onBlur: Xe,
                style: {
                  paddingLeft: `${we}px`
                }
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "absolute left-2 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ v.jsxs(Zd, { children: [
              /* @__PURE__ */ v.jsxs(Jd, { className: "flex items-center gap-[6px] px-0 py-1", children: [
                /* @__PURE__ */ v.jsx("span", { ref: Ee, className: "font-medium text-sm", children: Re }),
                /* @__PURE__ */ v.jsx(ud, { className: "h-4 w-4 opacity-50" })
              ] }),
              /* @__PURE__ */ v.jsx(yc, { align: "start", className: "bg-white", children: L0.map((ne) => /* @__PURE__ */ v.jsx(bc, { onClick: () => ve(ne.tokenType), children: ne.symbol }, ne.tokenType)) })
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
            Re
          ] }) : /* @__PURE__ */ v.jsx("span", { className: "text-black", children: "-" })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-between mb-[20px]", children: [
          /* @__PURE__ */ v.jsxs("p", { className: "text-[#979797] text-sm leading-none", children: [
            "Daily limit: ",
            /* @__PURE__ */ v.jsxs("span", { children: [
              je,
              " ",
              Re
            ] })
          ] }),
          /* @__PURE__ */ v.jsx(
            nn,
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
            Re
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ v.jsx("label", { htmlFor: "note", className: "block mb-2 text-sm font-medium", children: B("/dashboard.[token].sendModal.note") }),
          /* @__PURE__ */ v.jsx("div", { className: "relative", children: /* @__PURE__ */ v.jsx(
            gc,
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
        nn,
        {
          onClick: Me,
          className: ee("py-12px"),
          disabled: $,
          children: m ? /* @__PURE__ */ v.jsx("div", { className: "", children: /* @__PURE__ */ v.jsx(mc, {}) }) : /* @__PURE__ */ v.jsx("span", { children: B("/dashboard.[token].sendModal.title") })
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
      ya,
      document.body
    );
}
const F0 = qu, mu = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  sc,
  {
    ref: n,
    className: ee(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
mu.displayName = sc.displayName;
const Go = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  cc,
  {
    ref: n,
    className: ee(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Go.displayName = cc.displayName;
const Ko = p.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ v.jsx(
  lc,
  {
    ref: n,
    className: ee(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Ko.displayName = lc.displayName;
var B0 = Object.defineProperty, oa = Object.getOwnPropertySymbols, gu = Object.prototype.hasOwnProperty, vu = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? B0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qo = (e, t) => {
  for (var n in t || (t = {}))
    gu.call(t, n) && Hs(e, n, t[n]);
  if (oa)
    for (var n of oa(t))
      vu.call(t, n) && Hs(e, n, t[n]);
  return e;
}, qo = (e, t) => {
  var n = {};
  for (var r in e)
    gu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && oa)
    for (var r of oa(e))
      t.indexOf(r) < 0 && vu.call(e, r) && (n[r] = e[r]);
  return n;
};
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */
var ln;
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
        let x = s.slice(w, w + m - f + (C < y ? 0 : 1));
        w += x.length;
        const E = re.reedSolomonComputeRemainder(x, T);
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
})(ln || (ln = {}));
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
})(ln || (ln = {}));
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
})(ln || (ln = {}));
var yn = ln;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */
var $0 = {
  L: yn.QrCode.Ecc.LOW,
  M: yn.QrCode.Ecc.MEDIUM,
  Q: yn.QrCode.Ecc.QUARTILE,
  H: yn.QrCode.Ecc.HIGH
}, yu = 128, bu = "L", xu = "#FFFFFF", Cu = "#000000", Su = !1, Eu = 1, H0 = 4, U0 = 0, z0 = 0.1;
function wu(e, t = 0) {
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
function Tu(e, t) {
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
function Au({
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
      size: o = yu,
      level: i = bu,
      bgColor: l = xu,
      fgColor: s = Cu,
      includeMargin: c = Su,
      minVersion: u = Eu,
      boostLevel: d,
      marginSize: f,
      imageSettings: g
    } = r, m = qo(r, [
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
    ]), { style: h } = m, T = qo(m, ["style"]), S = g == null ? void 0 : g.src, C = q.useRef(null), w = q.useRef(null), x = q.useCallback(
      (D) => {
        C.current = D, typeof n == "function" ? n(D) : n && (n.current = D);
      },
      [n]
    ), [E, k] = q.useState(!1), { margin: N, cells: M, numCells: j, calculatedImageSettings: _ } = Au({
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
        R && _.excavation != null && (P = Tu(
          M,
          _.excavation
        ));
        const I = window.devicePixelRatio || 1;
        D.height = D.width = o * I;
        const L = o / j * I;
        W.scale(L, L), W.fillStyle = l, W.fillRect(0, 0, j, j), W.fillStyle = s, G0 ? W.fill(new Path2D(wu(P, N))) : M.forEach(function(O, U) {
          O.forEach(function(G, Q) {
            G && W.fillRect(Q + N, U + N, 1, 1);
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
    const V = Qo({ height: o, width: o }, h);
    let H = null;
    return S != null && (H = /* @__PURE__ */ q.createElement(
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
      Qo({
        style: V,
        height: o,
        width: o,
        ref: x,
        role: "img"
      }, T)
    ), H);
  }
);
K0.displayName = "QRCodeCanvas";
var Xo = q.forwardRef(
  function(t, n) {
    const r = t, {
      value: a,
      size: o = yu,
      level: i = bu,
      bgColor: l = xu,
      fgColor: s = Cu,
      includeMargin: c = Su,
      minVersion: u = Eu,
      boostLevel: d,
      title: f,
      marginSize: g,
      imageSettings: y
    } = r, m = qo(r, [
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
    ]), { margin: h, cells: T, numCells: S, calculatedImageSettings: C } = Au({
      value: a,
      level: i,
      minVersion: u,
      boostLevel: d,
      includeMargin: c,
      marginSize: g,
      imageSettings: y,
      size: o
    });
    let w = T, x = null;
    y != null && C != null && (C.excavation != null && (w = Tu(
      T,
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
    const E = wu(w, h);
    return /* @__PURE__ */ q.createElement(
      "svg",
      Qo({
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
Xo.displayName = "QRCodeSVG";
function Q0({
  address: e,
  open: t,
  setOpen: n,
  onClose: r
}) {
  const { t: a } = ei(), [o, i] = p.useState("");
  p.useEffect(() => {
    const { username: c } = Ie.all();
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
                  const x = new File([w], "qrcode.png", { type: "image/png" });
                  await navigator.share({
                    files: [x],
                    title: "QR Code"
                  });
                } else {
                  const x = URL.createObjectURL(w), E = document.createElement("a");
                  E.href = x, E.download = "qrcode.png", document.body.appendChild(E), E.click(), document.body.removeChild(E), URL.revokeObjectURL(x);
                }
                lt.success(a("toastSuccess.copySuccess"), {
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
                ]), lt.success(a("toastSuccess.copySuccess"), {
                  autoClose: 1e3,
                  hideProgressBar: !0
                }), m(null);
              } catch (x) {
                h(x);
              }
          }, "image/png");
        }, T.onerror = h, T.src = g;
      });
    } catch (c) {
      lt.error(c.message);
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
            children: /* @__PURE__ */ v.jsx(Jo, {})
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "p-6 border-b border-[#EBEBEB]", children: /* @__PURE__ */ v.jsxs(F0, { defaultValue: "crypto", className: "w-full text-center", children: [
        /* @__PURE__ */ v.jsxs(mu, { className: "w-[226px] border border-black rounded-full bg-white", children: [
          /* @__PURE__ */ v.jsx(
            Go,
            {
              value: "crypto",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Crypto")
            }
          ),
          /* @__PURE__ */ v.jsx(
            Go,
            {
              value: "email",
              className: "w-full text-xs py-[8px] data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:rounded-full",
              children: a("/dashboard.[token].receiveModal.Email")
            }
          )
        ] }),
        /* @__PURE__ */ v.jsxs(Ko, { value: "crypto", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ha, { address: e, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Xo,
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
        /* @__PURE__ */ v.jsxs(Ko, { value: "email", children: [
          /* @__PURE__ */ v.jsx("div", { className: "flex items-center justify-center mx-auto mt-6 mb-2", children: /* @__PURE__ */ v.jsx(Ha, { address: o, iconSize: 14 }) }),
          /* @__PURE__ */ v.jsx("div", { className: "w-[216px] mx-auto p-[10px]", children: /* @__PURE__ */ v.jsx(
            Xo,
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
      /* @__PURE__ */ v.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[14px]", children: /* @__PURE__ */ v.jsx(nn, { onClick: l, children: "Share QR code" }) })
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
    const n = (await Fe.get("/user-assets/total-assets", {
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
  const { address: t } = Ie.all();
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
  const { data: e } = await Fe.get("/user/info");
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
  const { address: e } = Ie.all(), { data: t, refetch: n } = Z0({
    enabled: !!e
  }), { data: r } = ev(), [a, o] = p.useState(""), [i, l] = p.useState(!1), [s, c] = p.useState(!1), [u, d] = p.useState(xe.ETH), [f, g] = p.useState(Mi.getData() ?? !0);
  p.useEffect(() => {
    y(u);
  }, []), p.useEffect(() => {
    r && o(r.avatar || Ie.getUserRandomAvatar(r.avatarIndex));
  }, [r]);
  const y = async (h) => {
    d(h);
  }, m = () => {
    g(!f), Mi.setData(!f);
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
                Ha,
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
    const e = await Fe.post("/marketplace/product/search-products", {
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
          const { default: e } = await import("./main-layout-DjYYSBII.js");
          return { Component: e };
        },
        children: [
          {
            path: "/",
            async lazy() {
              const { default: e } = await import("./page-D3q5QA6r.js");
              return { Component: e };
            }
          },
          {
            path: "/auth",
            async lazy() {
              const { default: e } = await import("./page-DP9Iex8O.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-transaction",
            async lazy() {
              const { default: e } = await import("./page-B59xdJKd.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-auth",
            async lazy() {
              const { default: e } = await import("./page-DDTREux0.js");
              return { Component: e };
            }
          },
          {
            path: "/verify-daily-withdrawal-limit",
            async lazy() {
              const { default: e } = await import("./page-DSjpiIas.js");
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
                  const { default: e } = await import("./page-CX9kktSV.js");
                  return { Component: e };
                }
              },
              {
                path: "viewall",
                async lazy() {
                  const { default: e } = await import("./page-CTgFyWIk.js");
                  return { Component: e };
                }
              },
              {
                path: ":token",
                async lazy() {
                  const { default: e } = await import("./page-H7ajXLgP.js");
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
                  const { default: e } = await import("./page-CWhIAK5v.js");
                  return { Component: e };
                },
                loader: ov
              },
              {
                path: "search-result",
                async lazy() {
                  const { default: e } = await import("./page-Y53zB3rN.js");
                  return { Component: e };
                }
              },
              {
                path: "feature-detail/:productId",
                async lazy() {
                  const { default: e } = await import("./page-C-8qapkr.js");
                  return { Component: e };
                }
              },
              {
                path: "multisig-setting",
                async lazy() {
                  const { default: e } = await import("./page-K5oxDcI-.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-proxy",
                async lazy() {
                  const { default: e } = await import("./page-C8btfH1i.js");
                  return { Component: e };
                }
              },
              {
                path: "kyb-self",
                async lazy() {
                  const { default: e } = await import("./page-1S2N6Eqg.js");
                  return { Component: e };
                }
              },
              {
                path: "kyc",
                async lazy() {
                  const { default: e } = await import("./page-B5r3hKKn.js");
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
                          const { default: e } = await import("./page-BNJ_KB77.js");
                          return { Component: e };
                        }
                      },
                      {
                        path: "ending",
                        async lazy() {
                          const { default: e } = await import("./page-B1eHmTmK.js");
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
                  const { default: e } = await import("./page-BPOHaIci.js");
                  return { Component: e };
                }
              },
              {
                path: "register",
                async lazy() {
                  const { default: e } = await import("./page-Db1DKxF1.js");
                  return { Component: e };
                }
              }
            ]
          },
          {
            path: "profile",
            async lazy() {
              const { default: e } = await import("./index-DB6jSz7t.js");
              return { Component: e };
            }
          },
          {
            path: "multisender",
            async lazy() {
              const { default: e } = await import("./page-lextc62D.js");
              return { Component: e };
            }
          },
          {
            path: "my-rewards",
            async lazy() {
              const { default: e } = await import("./page-DgZ2Q7bB.js");
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
          return /* @__PURE__ */ v.jsx(Fa, {});
        if (n === "info")
          return /* @__PURE__ */ v.jsx(hd, {});
        if (n === "warning")
          return /* @__PURE__ */ v.jsx(uc, {});
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
var Si = "moonpay-react-sdk-embedded-frame", cv = ({
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
    externalCustomerId: x,
    paymentMethod: E,
    redirectURL: k,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: V,
    baseOrigin: H,
    // handlers
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: A,
    onTransactionCompleted: R,
    onUnsupportedRegion: I,
    onSwapsCustomerSetupComplete: L,
    onCloseOverlay: O,
    onTransactionCreated: U,
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
    externalCustomerId: x,
    paymentMethod: E,
    redirectURL: k,
    showAllCurrencies: N,
    showOnlyCurrencies: M,
    showWalletAddressForm: j,
    unsupportedRegionRedirectUrl: _,
    skipUnsupportedRegionScreen: V,
    baseOrigin: H
  }, ie = {
    onAuthToken: D,
    onInitiateDeposit: W,
    onKmsWalletsCreated: P,
    onLogin: A,
    onTransactionCompleted: R,
    onUnsupportedRegion: I,
    onSwapsCustomerSetupComplete: L,
    onCloseOverlay: O,
    onTransactionCreated: U
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
    containerNodeSelector: `#${Si}`,
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
    externalTransactionId: x,
    externalCustomerId: E,
    paymentMethod: k,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: j,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: V,
    skipUnsupportedRegionScreen: H,
    mpWalletId: D,
    baseOrigin: W,
    // handlers
    onAuthToken: P,
    onInitiateDeposit: A,
    onKmsWalletsCreated: R,
    onLogin: I,
    onTransactionCompleted: L,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: U,
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
    externalTransactionId: x,
    externalCustomerId: E,
    paymentMethod: k,
    redirectURL: N,
    showAllCurrencies: M,
    showOnlyCurrencies: j,
    showWalletAddressForm: _,
    unsupportedRegionRedirectUrl: V,
    skipUnsupportedRegionScreen: H,
    mpWalletId: D,
    baseOrigin: W
  }, Ee = {
    onAuthToken: P,
    onInitiateDeposit: A,
    onKmsWalletsCreated: R,
    onLogin: I,
    onTransactionCompleted: L,
    onUnsupportedRegion: O,
    onSwapsCustomerSetupComplete: U,
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
    containerNodeSelector: `#${Si}`
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
var Da = () => {
}, fv = {
  info: Da,
  warn: Da,
  error: Da
}, hv = class ku {
  constructor({
    logger: t,
    prefix: n
  }) {
    pe(this, "prefix");
    pe(this, "logger");
    this.logger = t, this.prefix = n ?? ["Logger"];
  }
  if(t) {
    return t ? this : new ku({ logger: fv });
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
function Nu({
  config: e,
  onUrlSignatureRequested: t,
  visible: n = !0,
  className: r,
  style: a
}) {
  return gv(e, n, t), n ? /* @__PURE__ */ v.jsx(
    "div",
    {
      id: Si,
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
    Nu,
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
    Nu,
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
at("savedLng", fc);
const Mv = fc.getData();
dc.use(vd).init({
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
    /* @__PURE__ */ v.jsx("div", { className: "font-['Roboto']", children: /* @__PURE__ */ v.jsx(p.Suspense, { children: /* @__PURE__ */ v.jsx(h0, { client: Iv, children: /* @__PURE__ */ v.jsxs(yd, { i18n: dc, children: [
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
at("isDev", pc);
function Us(e) {
  const t = Ba(document.getElementById(e));
  return t.render(
    /* @__PURE__ */ v.jsx(jv, {})
    // <StrictMode>
    // </StrictMode>
  ), () => t.unmount();
}
pc ? Us("root") : typeof window < "u" && (window[`mount_${Hv.name}`] = Us);
export {
  zd as $,
  Vt as A,
  nn as B,
  dn as C,
  Zd as D,
  Yv as E,
  Ym as F,
  Fn as G,
  Ct as H,
  qr as I,
  xt as J,
  qn as K,
  mc as L,
  mi as M,
  Hp as N,
  _p as O,
  ey as P,
  Jv as Q,
  Bl as R,
  D0 as S,
  Be as T,
  zl as U,
  Zv as V,
  bo as W,
  ny as X,
  es as Y,
  Lr as Z,
  Y as _,
  Ie as a,
  Fi as a$,
  yr as a0,
  F0 as a1,
  mu as a2,
  Go as a3,
  xe as a4,
  Ha as a5,
  Z0 as a6,
  Q0 as a7,
  iy as a8,
  av as a9,
  ir as aA,
  op as aB,
  $p as aC,
  Up as aD,
  Nt as aE,
  Ma as aF,
  Fl as aG,
  gc as aH,
  Ud as aI,
  Qv as aJ,
  M0 as aK,
  _i as aL,
  qv as aM,
  Xv as aN,
  pf as aO,
  ai as aP,
  Co as aQ,
  an as aR,
  jc as aS,
  wc as aT,
  Va as aU,
  Xr as aV,
  Oh as aW,
  eo as aX,
  ka as aY,
  Tf as aZ,
  Ec as a_,
  Gg as aa,
  sy as ab,
  cy as ac,
  vc as ad,
  f0 as ae,
  Ii as af,
  N0 as ag,
  Yl as ah,
  sr as ai,
  sa as aj,
  ca as ak,
  rn as al,
  Jr as am,
  cm as an,
  mm as ao,
  ma as ap,
  _0 as aq,
  O0 as ar,
  rl as as,
  ty as at,
  yo as au,
  mg as av,
  ry as aw,
  mf as ax,
  Hn as ay,
  gf as az,
  Jd as b,
  km as b0,
  Ql as b1,
  Ko as b2,
  Us as b3,
  ee as c,
  yc as d,
  bc as e,
  Fe as f,
  at as g,
  er as h,
  Qr as i,
  ji as j,
  Yd as k,
  fc as l,
  Ut as m,
  Qe as n,
  xo as o,
  Dc as p,
  Ht as q,
  Lp as r,
  Wt as s,
  Se as t,
  ev as u,
  $n as v,
  Yr as w,
  $l as x,
  ff as y,
  Ue as z
};
