var o = Object.defineProperty;
var n = (a, e, t) => e in a ? o(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var r = (a, e, t) => n(a, typeof e != "symbol" ? e + "" : e, t);
import { C as s } from "./main-BQRn5y6W.js";
class h {
  constructor() {
    r(this, "storages");
    this.storages = {
      idToken: new s("idToken"),
      username: new s("username"),
      address: new s("address"),
      authenticatedHeader: new s("authenticatedHeader"),
      authenticated: new s("authenticated"),
      desUsername: new s("desUsername"),
      aeskey: new s("aeskey")
    };
  }
  saveAuthDataByKey(e, t) {
    return this.storages[e].setData(t);
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
    for (const t in this.storages)
      this.storages.hasOwnProperty(t) && (e[t] = this.storages[t].getData());
    return e;
  }
}
const g = new h();
export {
  g as a
};
