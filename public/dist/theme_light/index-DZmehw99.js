var b = Object.defineProperty;
var v = (a, t, e) => t in a ? b(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e;
var d = (a, t, e) => v(a, typeof t != "symbol" ? t + "" : t, e);
import { d as l, a as o } from "./main-BiNWeoEw.js";
import { j as C, C as g, E, m as I, k as P, d as B, l as T } from "./vendor-web3-N5LxOC8E.js";
const x = /* @__PURE__ */ C({
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
}), k = /* @__PURE__ */ C({
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
}), F = (a, t = 6) => parseFloat(a).toFixed(t), R = (a, t = 2) => {
  const s = (typeof a == "string" ? parseFloat(a) : a).toFixed(t), [r, n] = s.split("."), i = r.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return n ? `${i}.${n}` : i;
}, H = (a) => {
  if (a === "ETH")
    return {
      chainId: "0xaa36a7",
      displayName: "Sepolia Testnet ETH",
      chainNamespace: g.EIP155,
      tickerName: "Sepolia Testnet ETH",
      ticker: "ETH",
      decimals: 18,
      rpcTarget: "https://sepolia.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://sepolia.etherscan.io"
    };
  if (a === "MATIC" || a === "TVWT")
    return {
      chainId: "0x13882",
      displayName: "Polygon Amoy Testnet",
      chainNamespace: g.EIP155,
      tickerName: "Amoy MATIC",
      ticker: "MATIC",
      decimals: 18,
      rpcTarget: "https://polygon-amoy.infura.io/v3/ae9e8e14f6c34149bbd77db7b13b0679",
      blockExplorerUrl: "https://amoy.polygonscan.com"
    };
};
function A(a) {
  if (a === "ETH")
    return k;
  if (a === "MATIC" || a === "TVWT")
    return x;
}
var p = /* @__PURE__ */ ((a) => (a.PASSPORT = "PASSPORT", a.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", a))(p || {});
class m {
  constructor(t) {
    d(this, "config");
    if (this.constructor === m)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
class S extends m {
  constructor() {
    super({
      serviceType: p.WEB3AUTH_WITH_MPC
    });
    d(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: e,
    idToken: s
  }) {
    const { data: r } = await l.post("/keymanagement/signup", {
      username: e,
      idToken: s
    }), { address: n, displayName: i, avatarIndex: c } = r;
    o.saveAuthDataByKey("idToken", s), o.saveAuthDataByKey("address", n), o.saveAuthDataByKey("username", e), o.saveAuthDataByKey("avatarIndex", c), i ? o.saveAuthDataByKey("displayName", i) : o.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: e, idToken: s }) {
    const { data: r } = await l.post("/keymanagement/signin", {
      username: e,
      idToken: s
    }), { address: n, displayName: i, avatarIndex: c } = r;
    o.saveAuthDataByKey("idToken", s), o.saveAuthDataByKey("address", n), o.saveAuthDataByKey("username", e), o.saveAuthDataByKey("avatarIndex", c), i ? o.saveAuthDataByKey("displayName", i) : o.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: e,
    amount: s,
    token: r,
    note: n,
    transactionType: i
  }) {
    const { data: {
      success: c,
      needOtp: y,
      hash: u,
      message: h,
      transactionId: f,
      // not used
      transactionPayload: K,
      userEmail: M,
      toEmail: N
    } } = await l.post("/transaction/sign", {
      from: o.all().address,
      to: e,
      amount: s,
      token: r,
      note: n,
      transactionType: i
    });
    return {
      success: c,
      needOtp: y,
      hash: u,
      message: h,
      transactionId: f
    };
  }
  async signTransactionWithOTP({
    transactionId: e,
    otp: s
  }) {
    const { data: {
      token: r,
      hash: n,
      // not used
      transactionPayload: i,
      userEmail: c,
      toEmail: y,
      note: u,
      transactionType: h
    } } = await l.post("/transaction/verify-to-sign", {
      transactionId: e,
      OTP: s
    });
    return {
      success: !0,
      hash: n,
      token: r
    };
  }
  createClientByToken(e) {
    const s = this.coreKitInstance, r = H(e), n = new E({ config: { chainConfig: r } });
    n.setupProvider(I(s));
    const i = P({
      chain: A(e),
      transport: T(n)
    }), c = B({
      chain: A(e),
      transport: T(n)
    });
    return {
      walletClient: i,
      publicClient: c
    };
  }
  async waitForTransactionReceipt(e, s) {
    const { publicClient: r } = this.createClientByToken(s);
    return await r.waitForTransactionReceipt({
      hash: e
    });
  }
  async test() {
    await l.post("/keymanagement/test-mpc");
  }
}
class W {
  static getService(t) {
    switch (t) {
      case p.WEB3AUTH_WITH_MPC:
        return new S();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const w = p.WEB3AUTH_WITH_MPC, O = W.getService(w);
export {
  R as a,
  F as f,
  O as k,
  x as p,
  k as s
};
