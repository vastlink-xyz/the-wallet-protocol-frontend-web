var P = Object.defineProperty;
var C = (s, a, t) => a in s ? P(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var m = (s, a, t) => C(s, typeof a != "symbol" ? a + "" : a, t);
import "./main-BJkbpKmW.js";
import { a as i } from "./auth-Da6VcpsW.js";
import { v as g, c as w } from "./transaction-CKyb5yfO.js";
import { E as B, m as f, j as A, d as E, k as T } from "./vendor-web3-CnsO-8OJ.js";
import { a as c } from "./index-CsjBluw_.js";
var y = /* @__PURE__ */ ((s) => (s.PASSPORT = "PASSPORT", s.WEB3AUTH_WITH_MPC = "WEB3AUTH_WITH_MPC", s))(y || {});
class p {
  constructor(a) {
    m(this, "config");
    if (this.constructor === p)
      throw new Error("Abstract classes can't be instantiated.");
    this.config = a;
  }
}
class W extends p {
  constructor() {
    super({
      serviceType: y.WEB3AUTH_WITH_MPC
    });
    m(this, "coreKitInstance");
  }
  async init() {
  }
  async signUp({ username: t, idToken: e }) {
    const { data: r } = await c.post("/keymanagement/signup", {
      username: t,
      idToken: e
    }), { address: n } = r;
    i.saveAuthDataByKey("idToken", e), i.saveAuthDataByKey("address", n), i.saveAuthDataByKey("username", t);
  }
  async signIn({ authUsername: t, idToken: e }) {
    const { data: r } = await c.post("/keymanagement/signin", {
      username: t,
      idToken: e
    }), { address: n } = r;
    i.saveAuthDataByKey("idToken", e), i.saveAuthDataByKey("address", n), i.saveAuthDataByKey("username", t);
  }
  async signTransaction({
    toAddress: t,
    amount: e,
    token: r,
    note: n,
    transactionType: o
  }) {
    const { data: {
      success: u,
      needOtp: h,
      hash: l,
      message: d,
      transactionId: v,
      // not used
      transactionPayload: I,
      userEmail: K,
      toEmail: S
    } } = await c.post("/transaction/sign", {
      from: i.all().address,
      to: t,
      amount: e,
      token: r,
      note: n,
      transactionType: o
    });
    return {
      success: u,
      needOtp: h,
      hash: l,
      message: d,
      transactionId: v
    };
  }
  async signTransactionWithOTP({
    transactionId: t,
    otp: e
  }) {
    const { data: {
      token: r,
      hash: n,
      // not used
      transactionPayload: o,
      userEmail: u,
      toEmail: h,
      note: l,
      transactionType: d
    } } = await c.post("/transaction/verify-to-sign", {
      transactionId: t,
      OTP: e
    });
    return {
      success: !0,
      hash: n,
      token: r
    };
  }
  createClientByToken(t) {
    const e = this.coreKitInstance, r = w(t), n = new B({ config: { chainConfig: r } });
    n.setupProvider(f(e));
    const o = A({
      chain: g(t),
      transport: T(n)
    }), u = E({
      chain: g(t),
      transport: T(n)
    });
    return {
      walletClient: o,
      publicClient: u
    };
  }
  async waitForTransactionReceipt(t, e) {
    const { publicClient: r } = this.createClientByToken(e);
    return await r.waitForTransactionReceipt({
      hash: t
    });
  }
  async test() {
    await c.post("/keymanagement/test-mpc");
  }
}
class k {
  static getService(a) {
    switch (a) {
      case y.WEB3AUTH_WITH_MPC:
        return new W();
      default:
        throw new Error(`Unsupported service type: ${a}`);
    }
  }
}
const H = y.WEB3AUTH_WITH_MPC, R = k.getService(H);
export {
  R as k
};
