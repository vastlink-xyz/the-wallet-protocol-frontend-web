var B = Object.defineProperty;
var A = (n, t, a) => t in n ? B(n, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[t] = a;
var u = (n, t, a) => A(n, typeof t != "symbol" ? t + "" : t, a);
import "./main-B77raCsP.js";
import { a as r } from "./auth-BdKvj3eV.js";
import { v as g, c as P } from "./transaction-DM2FEA4F.js";
import { E as C, m as f, j as w, d as E, k as v } from "./vendor-web3-4JjHsX86.js";
import { a as o } from "./index-BM60kQF_.js";
var m = /* @__PURE__ */ ((n) => (n.PASSPORT = "PASSPORT", n.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", n))(m || {});
class p {
  constructor(t) {
    u(this, "config");
    if (this.constructor === p)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = t;
  }
}
class K extends p {
  constructor() {
    super({
      serviceType: m.WEB3AUTH_WITH_MPC
    });
    u(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({
    username: a,
    idToken: e
  }) {
    const { data: i } = await o.post("/keymanagement/signup", {
      username: a,
      idToken: e
    }), { address: s, displayName: c } = i;
    r.saveAuthDataByKey("idToken", e), r.saveAuthDataByKey("address", s), r.saveAuthDataByKey("username", a), c ? r.saveAuthDataByKey("displayName", c) : r.removeAuthDataByKey("displayName");
  }
  async signIn({ authUsername: a, idToken: e }) {
    const { data: i } = await o.post("/keymanagement/signin", {
      username: a,
      idToken: e
    }), { address: s, displayName: c } = i;
    r.saveAuthDataByKey("idToken", e), r.saveAuthDataByKey("address", s), r.saveAuthDataByKey("username", a), c ? r.saveAuthDataByKey("displayName", c) : r.removeAuthDataByKey("displayName");
  }
  async signTransaction({
    toAddress: a,
    amount: e,
    token: i,
    note: s,
    transactionType: c
  }) {
    const { data: {
      success: y,
      needOtp: l,
      hash: d,
      message: h,
      transactionId: T,
      // not used
      transactionPayload: D,
      userEmail: H,
      toEmail: I
    } } = await o.post("/transaction/sign", {
      from: r.all().address,
      to: a,
      amount: e,
      token: i,
      note: s,
      transactionType: c
    });
    return {
      success: y,
      needOtp: l,
      hash: d,
      message: h,
      transactionId: T
    };
  }
  async signTransactionWithOTP({
    transactionId: a,
    otp: e
  }) {
    const { data: {
      token: i,
      hash: s,
      // not used
      transactionPayload: c,
      userEmail: y,
      toEmail: l,
      note: d,
      transactionType: h
    } } = await o.post("/transaction/verify-to-sign", {
      transactionId: a,
      OTP: e
    });
    return {
      success: !0,
      hash: s,
      token: i
    };
  }
  createClientByToken(a) {
    const e = this.coreKitInstance, i = P(a), s = new C({ config: { chainConfig: i } });
    s.setupProvider(f(e));
    const c = w({
      chain: g(a),
      transport: v(s)
    }), y = E({
      chain: g(a),
      transport: v(s)
    });
    return {
      walletClient: c,
      publicClient: y
    };
  }
  async waitForTransactionReceipt(a, e) {
    const { publicClient: i } = this.createClientByToken(e);
    return await i.waitForTransactionReceipt({
      hash: a
    });
  }
  async test() {
    await o.post("/keymanagement/test-mpc");
  }
}
class W {
  static getService(t) {
    switch (t) {
      case m.WEB3AUTH_WITH_MPC:
        return new K();
      default:
        throw new Error(`Unsupported service type: ${t}`);
    }
  }
}
const k = m.WEB3AUTH_WITH_MPC, O = W.getService(k);
export {
  O as k
};
