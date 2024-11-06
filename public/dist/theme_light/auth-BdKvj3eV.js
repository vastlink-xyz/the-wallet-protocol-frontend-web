var n = Object.defineProperty;
var o = (s, e, t) => e in s ? n(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => o(s, typeof e != "symbol" ? e + "" : e, t);
import { C as a } from "./main-B77raCsP.js";
class i {
  constructor() {
    r(this, "storages");
    this.storages = {
      idToken: new a("idToken"),
      username: new a("username"),
      displayName: new a("displayName"),
      address: new a("address"),
      authenticatedHeader: new a("authenticatedHeader"),
      authenticated: new a("authenticated"),
      desUsername: new a("desUsername"),
      aeskey: new a("aeskey")
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
  isAuthenticated() {
    return !!this.getAuthDataByKey("idToken");
  }
}
const d = new i();
export {
  d as a
};
