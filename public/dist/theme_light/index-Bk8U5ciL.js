import { j as p } from "./vendor-radix-AvjOLIap.js";
import { K as Ne, s as we, A as Nt, ah as ve, ai as W, z as oe, aj as Je, ak as Qe, J as Ye, al as H, H as Ze, n as B, F as It, q as k, P as et, Q as tt, am as ke, N as Et, M as St, O as Ot, m as Te, an as at, ao as Dt, W as Ft, v as Rt, ap as Pt, a as Le, c as z, f as nt, ae as Lt, aa as Mt, B as Ie, L as Ut, h as Tt, aq as At, t as zt, ar as _t, u as qt, a5 as Ht, a7 as Bt } from "./main-B_UZt_Fq.js";
import { a as o, p as G, R as Me, b as Ve } from "./vendor-react-DSEtE0wE.js";
import { B as be, a as kt } from "./vendor-utils-Q0yJ_o1H.js";
import { P as rt } from "./progress-DSYD7YDh.js";
import { _ as ee, s as Vt, P as Xt } from "./vendor-ui-utils-CGOon9_P.js";
import { q as U, r as Wt, p as Gt, _ as Kt } from "./vendor-web3-CQEmmIwE.js";
import { i as Jt, d as Qt, e as Yt, f as Xe, u as Zt } from "./index-D36CRVnU.js";
import { R as We, B as Ge, a as ea } from "./button-CLZc7xXK.js";
import { o as ta } from "./CheckOutlined-BgWun9Bk.js";
const aa = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), na = new Ne("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), ra = new Ne("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), ia = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: a
  } = e, r = `${a}-fade`, i = t ? "&" : "";
  return [Jt(r, na, ra, e.motionDurationMid, t), {
    [`
        ${i}${r}-enter,
        ${i}${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${i}${r}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};
function sa() {
  const [, e] = o.useReducer((t) => t + 1, 0);
  return e;
}
var oa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, la = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: oa
  }));
}, it = /* @__PURE__ */ o.forwardRef(la);
G.env.NODE_ENV !== "production" && (it.displayName = "EyeOutlined");
var ca = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, da = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: ca
  }));
}, st = /* @__PURE__ */ o.forwardRef(da);
G.env.NODE_ENV !== "production" && (st.displayName = "DeleteOutlined");
var ua = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" }, pa = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: ua
  }));
}, ot = /* @__PURE__ */ o.forwardRef(pa);
G.env.NODE_ENV !== "production" && (ot.displayName = "DownloadOutlined");
var ma = { icon: function(t, a) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: a } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" }, fa = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: ma
  }));
}, lt = /* @__PURE__ */ o.forwardRef(fa);
G.env.NODE_ENV !== "production" && (lt.displayName = "FileTwoTone");
var ga = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" }, ha = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: ga
  }));
}, ct = /* @__PURE__ */ o.forwardRef(ha);
G.env.NODE_ENV !== "production" && (ct.displayName = "PaperClipOutlined");
var va = { icon: function(t, a) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: a } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: a } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: a } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" }, ba = function(t, a) {
  return /* @__PURE__ */ o.createElement(we, ee({}, t, {
    ref: a,
    icon: va
  }));
}, dt = /* @__PURE__ */ o.forwardRef(ba);
G.env.NODE_ENV !== "production" && (dt.displayName = "PictureTwoTone");
const De = function(e, t) {
  if (e && t) {
    var a = Array.isArray(t) ? t : t.split(","), r = e.name || "", i = e.type || "", s = i.replace(/\/.*$/, "");
    return a.some(function(l) {
      var n = l.trim();
      if (/^\*(\/\*)?$/.test(l))
        return !0;
      if (n.charAt(0) === ".") {
        var m = r.toLowerCase(), c = n.toLowerCase(), d = [c];
        return (c === ".jpg" || c === ".jpeg") && (d = [".jpg", ".jpeg"]), d.some(function(f) {
          return m.endsWith(f);
        });
      }
      return /\/\*$/.test(n) ? s === n.replace(/\/.*$/, "") : i === n ? !0 : /^\w+$/.test(n) ? (Nt(!1, "Upload takes an invalidate 'accept' type '".concat(n, "'.Skip for check.")), !0) : !1;
    });
  }
  return !0;
};
function wa(e, t) {
  var a = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(t.status, "'"), r = new Error(a);
  return r.status = t.status, r.method = e.method, r.url = e.action, r;
}
function Ke(e) {
  var t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function xa(e) {
  var t = new XMLHttpRequest();
  e.onProgress && t.upload && (t.upload.onprogress = function(s) {
    s.total > 0 && (s.percent = s.loaded / s.total * 100), e.onProgress(s);
  });
  var a = new FormData();
  e.data && Object.keys(e.data).forEach(function(i) {
    var s = e.data[i];
    if (Array.isArray(s)) {
      s.forEach(function(l) {
        a.append("".concat(i, "[]"), l);
      });
      return;
    }
    a.append(i, s);
  }), e.file instanceof Blob ? a.append(e.filename, e.file, e.file.name) : a.append(e.filename, e.file), t.onerror = function(s) {
    e.onError(s);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(wa(e, t), Ke(t)) : e.onSuccess(Ke(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  var r = e.headers || {};
  return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach(function(i) {
    r[i] !== null && t.setRequestHeader(i, r[i]);
  }), t.send(a), {
    abort: function() {
      t.abort();
    }
  };
}
var ya = /* @__PURE__ */ function() {
  var e = ve(/* @__PURE__ */ W().mark(function t(a, r) {
    var i, s, l, n, m, c, d, f;
    return W().wrap(function(w) {
      for (; ; ) switch (w.prev = w.next) {
        case 0:
          c = function() {
            return c = ve(/* @__PURE__ */ W().mark(function C(j) {
              return W().wrap(function(x) {
                for (; ; ) switch (x.prev = x.next) {
                  case 0:
                    return x.abrupt("return", new Promise(function(y) {
                      j.file(function($) {
                        r($) ? (j.fullPath && !$.webkitRelativePath && (Object.defineProperties($, {
                          webkitRelativePath: {
                            writable: !0
                          }
                        }), $.webkitRelativePath = j.fullPath.replace(/^\//, ""), Object.defineProperties($, {
                          webkitRelativePath: {
                            writable: !1
                          }
                        })), y($)) : y(null);
                      });
                    }));
                  case 1:
                  case "end":
                    return x.stop();
                }
              }, C);
            })), c.apply(this, arguments);
          }, m = function(C) {
            return c.apply(this, arguments);
          }, n = function() {
            return n = ve(/* @__PURE__ */ W().mark(function C(j) {
              var I, x, y, $, u;
              return W().wrap(function(E) {
                for (; ; ) switch (E.prev = E.next) {
                  case 0:
                    I = j.createReader(), x = [];
                  case 2:
                    return E.next = 5, new Promise(function(_) {
                      I.readEntries(_, function() {
                        return _([]);
                      });
                    });
                  case 5:
                    if (y = E.sent, $ = y.length, $) {
                      E.next = 9;
                      break;
                    }
                    return E.abrupt("break", 12);
                  case 9:
                    for (u = 0; u < $; u++)
                      x.push(y[u]);
                    E.next = 2;
                    break;
                  case 12:
                    return E.abrupt("return", x);
                  case 13:
                  case "end":
                    return E.stop();
                }
              }, C);
            })), n.apply(this, arguments);
          }, l = function(C) {
            return n.apply(this, arguments);
          }, i = [], s = [], a.forEach(function(h) {
            return s.push(h.webkitGetAsEntry());
          }), d = /* @__PURE__ */ function() {
            var h = ve(/* @__PURE__ */ W().mark(function C(j, I) {
              var x, y;
              return W().wrap(function(u) {
                for (; ; ) switch (u.prev = u.next) {
                  case 0:
                    if (j) {
                      u.next = 2;
                      break;
                    }
                    return u.abrupt("return");
                  case 2:
                    if (j.path = I || "", !j.isFile) {
                      u.next = 10;
                      break;
                    }
                    return u.next = 6, m(j);
                  case 6:
                    x = u.sent, x && i.push(x), u.next = 15;
                    break;
                  case 10:
                    if (!j.isDirectory) {
                      u.next = 15;
                      break;
                    }
                    return u.next = 13, l(j);
                  case 13:
                    y = u.sent, s.push.apply(s, oe(y));
                  case 15:
                  case "end":
                    return u.stop();
                }
              }, C);
            }));
            return function(j, I) {
              return h.apply(this, arguments);
            };
          }(), f = 0;
        case 9:
          if (!(f < s.length)) {
            w.next = 15;
            break;
          }
          return w.next = 12, d(s[f]);
        case 12:
          f++, w.next = 9;
          break;
        case 15:
          return w.abrupt("return", i);
        case 16:
        case "end":
          return w.stop();
      }
    }, t);
  }));
  return function(a, r) {
    return e.apply(this, arguments);
  };
}(), $a = +/* @__PURE__ */ new Date(), Ca = 0;
function Fe() {
  return "rc-upload-".concat($a, "-").concat(++Ca);
}
var ja = ["component", "prefixCls", "className", "classNames", "disabled", "id", "name", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "hasControlInside"], Na = /* @__PURE__ */ function(e) {
  Je(a, e);
  var t = Qe(a);
  function a() {
    var r;
    Ye(this, a);
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(s)), U(H(r), "state", {
      uid: Fe()
    }), U(H(r), "reqs", {}), U(H(r), "fileInput", void 0), U(H(r), "_isMounted", void 0), U(H(r), "onChange", function(n) {
      var m = r.props, c = m.accept, d = m.directory, f = n.target.files, g = oe(f).filter(function(w) {
        return !d || De(w, c);
      });
      r.uploadFiles(g), r.reset();
    }), U(H(r), "onClick", function(n) {
      var m = r.fileInput;
      if (m) {
        var c = n.target, d = r.props.onClick;
        if (c && c.tagName === "BUTTON") {
          var f = m.parentNode;
          f.focus(), c.blur();
        }
        m.click(), d && d(n);
      }
    }), U(H(r), "onKeyDown", function(n) {
      n.key === "Enter" && r.onClick(n);
    }), U(H(r), "onFileDrop", /* @__PURE__ */ function() {
      var n = ve(/* @__PURE__ */ W().mark(function m(c) {
        var d, f, g;
        return W().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              if (d = r.props.multiple, c.preventDefault(), c.type !== "dragover") {
                h.next = 4;
                break;
              }
              return h.abrupt("return");
            case 4:
              if (!r.props.directory) {
                h.next = 11;
                break;
              }
              return h.next = 7, ya(Array.prototype.slice.call(c.dataTransfer.items), function(C) {
                return De(C, r.props.accept);
              });
            case 7:
              f = h.sent, r.uploadFiles(f), h.next = 14;
              break;
            case 11:
              g = oe(c.dataTransfer.files).filter(function(C) {
                return De(C, r.props.accept);
              }), d === !1 && (g = g.slice(0, 1)), r.uploadFiles(g);
            case 14:
            case "end":
              return h.stop();
          }
        }, m);
      }));
      return function(m) {
        return n.apply(this, arguments);
      };
    }()), U(H(r), "uploadFiles", function(n) {
      var m = oe(n), c = m.map(function(d) {
        return d.uid = Fe(), r.processFile(d, m);
      });
      Promise.all(c).then(function(d) {
        var f = r.props.onBatchStart;
        f == null || f(d.map(function(g) {
          var w = g.origin, h = g.parsedFile;
          return {
            file: w,
            parsedFile: h
          };
        })), d.filter(function(g) {
          return g.parsedFile !== null;
        }).forEach(function(g) {
          r.post(g);
        });
      });
    }), U(H(r), "processFile", /* @__PURE__ */ function() {
      var n = ve(/* @__PURE__ */ W().mark(function m(c, d) {
        var f, g, w, h, C, j, I, x, y;
        return W().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              if (f = r.props.beforeUpload, g = c, !f) {
                u.next = 14;
                break;
              }
              return u.prev = 3, u.next = 6, f(c, d);
            case 6:
              g = u.sent, u.next = 12;
              break;
            case 9:
              u.prev = 9, u.t0 = u.catch(3), g = !1;
            case 12:
              if (g !== !1) {
                u.next = 14;
                break;
              }
              return u.abrupt("return", {
                origin: c,
                parsedFile: null,
                action: null,
                data: null
              });
            case 14:
              if (w = r.props.action, typeof w != "function") {
                u.next = 21;
                break;
              }
              return u.next = 18, w(c);
            case 18:
              h = u.sent, u.next = 22;
              break;
            case 21:
              h = w;
            case 22:
              if (C = r.props.data, typeof C != "function") {
                u.next = 29;
                break;
              }
              return u.next = 26, C(c);
            case 26:
              j = u.sent, u.next = 30;
              break;
            case 29:
              j = C;
            case 30:
              return I = // string type is from legacy `transformFile`.
              // Not sure if this will work since no related test case works with it
              (Kt(g) === "object" || typeof g == "string") && g ? g : c, I instanceof File ? x = I : x = new File([I], c.name, {
                type: c.type
              }), y = x, y.uid = c.uid, u.abrupt("return", {
                origin: c,
                data: j,
                parsedFile: y,
                action: h
              });
            case 35:
            case "end":
              return u.stop();
          }
        }, m, null, [[3, 9]]);
      }));
      return function(m, c) {
        return n.apply(this, arguments);
      };
    }()), U(H(r), "saveFileInput", function(n) {
      r.fileInput = n;
    }), r;
  }
  return Ze(a, [{
    key: "componentDidMount",
    value: function() {
      this._isMounted = !0;
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this._isMounted = !1, this.abort();
    }
  }, {
    key: "post",
    value: function(i) {
      var s = this, l = i.data, n = i.origin, m = i.action, c = i.parsedFile;
      if (this._isMounted) {
        var d = this.props, f = d.onStart, g = d.customRequest, w = d.name, h = d.headers, C = d.withCredentials, j = d.method, I = n.uid, x = g || xa, y = {
          action: m,
          filename: w,
          data: l,
          file: c,
          headers: h,
          withCredentials: C,
          method: j || "post",
          onProgress: function(u) {
            var D = s.props.onProgress;
            D == null || D(u, c);
          },
          onSuccess: function(u, D) {
            var E = s.props.onSuccess;
            E == null || E(u, c, D), delete s.reqs[I];
          },
          onError: function(u, D) {
            var E = s.props.onError;
            E == null || E(u, D, c), delete s.reqs[I];
          }
        };
        f(n), this.reqs[I] = x(y);
      }
    }
  }, {
    key: "reset",
    value: function() {
      this.setState({
        uid: Fe()
      });
    }
  }, {
    key: "abort",
    value: function(i) {
      var s = this.reqs;
      if (i) {
        var l = i.uid ? i.uid : i;
        s[l] && s[l].abort && s[l].abort(), delete s[l];
      } else
        Object.keys(s).forEach(function(n) {
          s[n] && s[n].abort && s[n].abort(), delete s[n];
        });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, s = i.component, l = i.prefixCls, n = i.className, m = i.classNames, c = m === void 0 ? {} : m, d = i.disabled, f = i.id, g = i.name, w = i.style, h = i.styles, C = h === void 0 ? {} : h, j = i.multiple, I = i.accept, x = i.capture, y = i.children, $ = i.directory, u = i.openFileDialogOnClick, D = i.onMouseEnter, E = i.onMouseLeave, _ = i.hasControlInside, Q = Wt(i, ja), K = B(U(U(U({}, l, !0), "".concat(l, "-disabled"), d), n, n)), T = $ ? {
        directory: "directory",
        webkitdirectory: "webkitdirectory"
      } : {}, te = d ? {} : {
        onClick: u ? this.onClick : function() {
        },
        onKeyDown: u ? this.onKeyDown : function() {
        },
        onMouseEnter: D,
        onMouseLeave: E,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: _ ? void 0 : "0"
      };
      return /* @__PURE__ */ Me.createElement(s, ee({}, te, {
        className: K,
        role: _ ? void 0 : "button",
        style: w
      }), /* @__PURE__ */ Me.createElement("input", ee({}, It(Q, {
        aria: !0,
        data: !0
      }), {
        id: f,
        name: g,
        disabled: d,
        type: "file",
        ref: this.saveFileInput,
        onClick: function(ce) {
          return ce.stopPropagation();
        },
        key: this.state.uid,
        style: Gt({
          display: "none"
        }, C.input),
        className: c.input,
        accept: I
      }, T, {
        multiple: j,
        onChange: this.onChange
      }, x != null ? {
        capture: x
      } : {})), y);
    }
  }]), a;
}(o.Component);
function Re() {
}
var Ue = /* @__PURE__ */ function(e) {
  Je(a, e);
  var t = Qe(a);
  function a() {
    var r;
    Ye(this, a);
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return r = t.call.apply(t, [this].concat(s)), U(H(r), "uploader", void 0), U(H(r), "saveUploader", function(n) {
      r.uploader = n;
    }), r;
  }
  return Ze(a, [{
    key: "abort",
    value: function(i) {
      this.uploader.abort(i);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Me.createElement(Na, ee({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]), a;
}(o.Component);
U(Ue, "defaultProps", {
  component: "span",
  prefixCls: "rc-upload",
  data: {},
  headers: {},
  name: "file",
  multipart: !1,
  onStart: Re,
  onError: Re,
  onSuccess: Re,
  multiple: !1,
  beforeUpload: null,
  customRequest: null,
  withCredentials: !1,
  openFileDialogOnClick: !0,
  hasControlInside: !1
});
const Ia = (e) => {
  const {
    componentCls: t,
    iconCls: a
  } = e;
  return {
    [`${t}-wrapper`]: {
      [`${t}-drag`]: {
        position: "relative",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: e.colorFillAlter,
        border: `${k(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [t]: {
          padding: e.padding
        },
        [`${t}-btn`]: {
          display: "table",
          width: "100%",
          height: "100%",
          outline: "none",
          borderRadius: e.borderRadiusLG,
          "&:focus-visible": {
            outline: `${k(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
          }
        },
        [`${t}-drag-container`]: {
          display: "table-cell",
          verticalAlign: "middle"
        },
        [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: {
          borderColor: e.colorPrimaryHover
        },
        [`p${t}-drag-icon`]: {
          marginBottom: e.margin,
          [a]: {
            color: e.colorPrimary,
            fontSize: e.uploadThumbnailSize
          }
        },
        [`p${t}-text`]: {
          margin: `0 0 ${k(e.marginXXS)}`,
          color: e.colorTextHeading,
          fontSize: e.fontSizeLG
        },
        [`p${t}-hint`]: {
          color: e.colorTextDescription,
          fontSize: e.fontSize
        },
        // ===================== Disabled =====================
        [`&${t}-disabled`]: {
          [`p${t}-drag-icon ${a},
            p${t}-text,
            p${t}-hint
          `]: {
            color: e.colorTextDisabled
          }
        }
      }
    }
  };
}, Ea = (e) => {
  const {
    componentCls: t,
    antCls: a,
    iconCls: r,
    fontSize: i,
    lineHeight: s,
    calc: l
  } = e, n = `${t}-list-item`, m = `${n}-actions`, c = `${n}-action`, d = e.fontHeightSM;
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: Object.assign(Object.assign({}, et()), {
        lineHeight: e.lineHeight,
        [n]: {
          position: "relative",
          height: l(e.lineHeight).mul(i).equal(),
          marginTop: e.marginXS,
          fontSize: i,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${n}-name`]: Object.assign(Object.assign({}, tt), {
            padding: `0 ${k(e.paddingXS)}`,
            lineHeight: s,
            flex: "auto",
            transition: `all ${e.motionDurationSlow}`
          }),
          [m]: {
            whiteSpace: "nowrap",
            [c]: {
              opacity: 0
            },
            [r]: {
              color: e.actionsColor,
              transition: `all ${e.motionDurationSlow}`
            },
            [`
              ${c}:focus-visible,
              &.picture ${c}
            `]: {
              opacity: 1
            },
            [`${c}${a}-btn`]: {
              height: d,
              border: 0,
              lineHeight: 1
            }
          },
          [`${t}-icon ${r}`]: {
            color: e.colorTextDescription,
            fontSize: i
          },
          [`${n}-progress`]: {
            position: "absolute",
            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
            width: "100%",
            paddingInlineStart: l(i).add(e.paddingXS).equal(),
            fontSize: i,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${n}:hover ${c}`]: {
          opacity: 1
        },
        [`${n}-error`]: {
          color: e.colorError,
          [`${n}-name, ${t}-icon ${r}`]: {
            color: e.colorError
          },
          [m]: {
            [`${r}, ${r}:hover`]: {
              color: e.colorError
            },
            [c]: {
              opacity: 1
            }
          }
        },
        [`${t}-list-item-container`]: {
          transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
          // For smooth removing animation
          "&::before": {
            display: "table",
            width: 0,
            height: 0,
            content: '""'
          }
        }
      })
    }
  };
}, Sa = (e) => {
  const {
    componentCls: t
  } = e, a = new Ne("uploadAnimateInlineIn", {
    from: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: e.calc(e.marginXS).div(-2).equal()
    }
  }), r = new Ne("uploadAnimateInlineOut", {
    to: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: e.calc(e.marginXS).div(-2).equal()
    }
  }), i = `${t}-animate-inline`;
  return [{
    [`${t}-wrapper`]: {
      [`${i}-appear, ${i}-enter, ${i}-leave`]: {
        animationDuration: e.motionDurationSlow,
        animationTimingFunction: e.motionEaseInOutCirc,
        animationFillMode: "forwards"
      },
      [`${i}-appear, ${i}-enter`]: {
        animationName: a
      },
      [`${i}-leave`]: {
        animationName: r
      }
    }
  }, {
    [`${t}-wrapper`]: ia(e)
  }, a, r];
}, Oa = (e) => {
  const {
    componentCls: t,
    iconCls: a,
    uploadThumbnailSize: r,
    uploadProgressOffset: i,
    calc: s
  } = e, l = `${t}-list`, n = `${l}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`
        ${l}${l}-picture,
        ${l}${l}-picture-card,
        ${l}${l}-picture-circle
      `]: {
        [n]: {
          position: "relative",
          height: s(r).add(s(e.lineWidth).mul(2)).add(s(e.paddingXS).mul(2)).equal(),
          padding: e.paddingXS,
          border: `${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${n}-thumbnail`]: Object.assign(Object.assign({}, tt), {
            width: r,
            height: r,
            lineHeight: k(s(r).add(e.paddingSM).equal()),
            textAlign: "center",
            flex: "none",
            [a]: {
              fontSize: e.fontSizeHeading2,
              color: e.colorPrimary
            },
            img: {
              display: "block",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          }),
          [`${n}-progress`]: {
            bottom: i,
            width: `calc(100% - ${k(s(e.paddingSM).mul(2).equal())})`,
            marginTop: 0,
            paddingInlineStart: s(r).add(e.paddingXS).equal()
          }
        },
        [`${n}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${n}-thumbnail ${a}`]: {
            [`svg path[fill='${ke[0]}']`]: {
              fill: e.colorErrorBg
            },
            [`svg path[fill='${ke.primary}']`]: {
              fill: e.colorError
            }
          }
        },
        [`${n}-uploading`]: {
          borderStyle: "dashed",
          [`${n}-name`]: {
            marginBottom: i
          }
        }
      },
      [`${l}${l}-picture-circle ${n}`]: {
        [`&, &::before, ${n}-thumbnail`]: {
          borderRadius: "50%"
        }
      }
    }
  };
}, Da = (e) => {
  const {
    componentCls: t,
    iconCls: a,
    fontSizeLG: r,
    colorTextLightSolid: i,
    calc: s
  } = e, l = `${t}-list`, n = `${l}-item`, m = e.uploadPicCardSize;
  return {
    [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, et()), {
      display: "block",
      [`${t}${t}-select`]: {
        width: m,
        height: m,
        textAlign: "center",
        verticalAlign: "top",
        backgroundColor: e.colorFillAlter,
        border: `${k(e.lineWidth)} dashed ${e.colorBorder}`,
        borderRadius: e.borderRadiusLG,
        cursor: "pointer",
        transition: `border-color ${e.motionDurationSlow}`,
        [`> ${t}`]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center"
        },
        [`&:not(${t}-disabled):hover`]: {
          borderColor: e.colorPrimary
        }
      },
      // list
      [`${l}${l}-picture-card, ${l}${l}-picture-circle`]: {
        display: "flex",
        flexWrap: "wrap",
        "@supports not (gap: 1px)": {
          "& > *": {
            marginBlockEnd: e.marginXS,
            marginInlineEnd: e.marginXS
          }
        },
        "@supports (gap: 1px)": {
          gap: e.marginXS
        },
        [`${l}-item-container`]: {
          display: "inline-block",
          width: m,
          height: m,
          verticalAlign: "top"
        },
        "&::after": {
          display: "none"
        },
        "&::before": {
          display: "none"
        },
        [n]: {
          height: "100%",
          margin: 0,
          "&::before": {
            position: "absolute",
            zIndex: 1,
            width: `calc(100% - ${k(s(e.paddingXS).mul(2).equal())})`,
            height: `calc(100% - ${k(s(e.paddingXS).mul(2).equal())})`,
            backgroundColor: e.colorBgMask,
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            content: '" "'
          }
        },
        [`${n}:hover`]: {
          [`&::before, ${n}-actions`]: {
            opacity: 1
          }
        },
        [`${n}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`
            ${a}-eye,
            ${a}-download,
            ${a}-delete
          `]: {
            zIndex: 10,
            width: r,
            margin: `0 ${k(e.marginXXS)}`,
            fontSize: r,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`,
            color: i,
            "&:hover": {
              color: i
            },
            svg: {
              verticalAlign: "baseline"
            }
          }
        },
        [`${n}-thumbnail, ${n}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${n}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${n}-file + ${n}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${k(s(e.paddingXS).mul(2).equal())})`
        },
        [`${n}-uploading`]: {
          [`&${n}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${a}-eye, ${a}-download, ${a}-delete`]: {
            display: "none"
          }
        },
        [`${n}-progress`]: {
          bottom: e.marginXL,
          width: `calc(100% - ${k(s(e.paddingXS).mul(2).equal())})`,
          paddingInlineStart: 0
        }
      }
    }),
    [`${t}-wrapper${t}-picture-circle-wrapper`]: {
      [`${t}${t}-select`]: {
        borderRadius: "50%"
      }
    }
  };
}, Fa = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-rtl`]: {
      direction: "rtl"
    }
  };
}, Ra = (e) => {
  const {
    componentCls: t,
    colorTextDisabled: a
  } = e;
  return {
    [`${t}-wrapper`]: Object.assign(Object.assign({}, Ot(e)), {
      [t]: {
        outline: 0,
        "input[type='file']": {
          cursor: "pointer"
        }
      },
      [`${t}-select`]: {
        display: "inline-block"
      },
      [`${t}-disabled`]: {
        color: a,
        cursor: "not-allowed"
      }
    })
  };
}, Pa = (e) => ({
  actionsColor: e.colorTextDescription
}), La = Et("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontHeight: a,
    lineWidth: r,
    controlHeightLG: i,
    calc: s
  } = e, l = St(e, {
    uploadThumbnailSize: s(t).mul(2).equal(),
    uploadProgressOffset: s(s(a).div(2)).add(r).equal(),
    uploadPicCardSize: s(i).mul(2.55).equal()
  });
  return [Ra(l), Ia(l), Oa(l), Da(l), Ea(l), Sa(l), Fa(l), aa(l)];
}, Pa);
function Ce(e) {
  return Object.assign(Object.assign({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e
  });
}
function je(e, t) {
  const a = oe(t), r = a.findIndex((i) => {
    let {
      uid: s
    } = i;
    return s === e.uid;
  });
  return r === -1 ? a.push(e) : a[r] = e, a;
}
function Pe(e, t) {
  const a = e.uid !== void 0 ? "uid" : "name";
  return t.filter((r) => r[a] === e[a])[0];
}
function Ma(e, t) {
  const a = e.uid !== void 0 ? "uid" : "name", r = t.filter((i) => i[a] !== e[a]);
  return r.length === t.length ? null : r;
}
const Ua = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), r = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(r) || [""])[0];
}, ut = (e) => e.indexOf("image/") === 0, Ta = (e) => {
  if (e.type && !e.thumbUrl)
    return ut(e.type);
  const t = e.thumbUrl || e.url || "", a = Ua(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(a) ? !0 : !(/^data:/.test(t) || a);
}, se = 200;
function Aa(e) {
  return new Promise((t) => {
    if (!e.type || !ut(e.type)) {
      t("");
      return;
    }
    const a = document.createElement("canvas");
    a.width = se, a.height = se, a.style.cssText = `position: fixed; left: 0; top: 0; width: ${se}px; height: ${se}px; z-index: 9999; display: none;`, document.body.appendChild(a);
    const r = a.getContext("2d"), i = new Image();
    if (i.onload = () => {
      const {
        width: s,
        height: l
      } = i;
      let n = se, m = se, c = 0, d = 0;
      s > l ? (m = l * (se / s), d = -(m - n) / 2) : (n = s * (se / l), c = -(n - m) / 2), r.drawImage(i, c, d, n, m);
      const f = a.toDataURL();
      document.body.removeChild(a), window.URL.revokeObjectURL(i.src), t(f);
    }, i.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
      const s = new FileReader();
      s.onload = () => {
        s.result && typeof s.result == "string" && (i.src = s.result);
      }, s.readAsDataURL(e);
    } else if (e.type.startsWith("image/gif")) {
      const s = new FileReader();
      s.onload = () => {
        s.result && t(s.result);
      }, s.readAsDataURL(e);
    } else
      i.src = window.URL.createObjectURL(e);
  });
}
const za = /* @__PURE__ */ o.forwardRef((e, t) => {
  let {
    prefixCls: a,
    className: r,
    style: i,
    locale: s,
    listType: l,
    file: n,
    items: m,
    progress: c,
    iconRender: d,
    actionIconRender: f,
    itemRender: g,
    isImgUrl: w,
    showPreviewIcon: h,
    showRemoveIcon: C,
    showDownloadIcon: j,
    previewIcon: I,
    removeIcon: x,
    downloadIcon: y,
    extra: $,
    onPreview: u,
    onDownload: D,
    onClose: E
  } = e;
  var _, Q;
  const {
    status: K
  } = n, [T, te] = o.useState(K);
  o.useEffect(() => {
    K !== "removed" && te(K);
  }, [K]);
  const [le, ce] = o.useState(!1);
  o.useEffect(() => {
    const F = setTimeout(() => {
      ce(!0);
    }, 300);
    return () => {
      clearTimeout(F);
    };
  }, []);
  const de = d(n);
  let V = /* @__PURE__ */ o.createElement("div", {
    className: `${a}-icon`
  }, de);
  if (l === "picture" || l === "picture-card" || l === "picture-circle")
    if (T === "uploading" || !n.thumbUrl && !n.url) {
      const F = B(`${a}-list-item-thumbnail`, {
        [`${a}-list-item-file`]: T !== "uploading"
      });
      V = /* @__PURE__ */ o.createElement("div", {
        className: F
      }, de);
    } else {
      const F = w != null && w(n) ? /* @__PURE__ */ o.createElement("img", {
        src: n.thumbUrl || n.url,
        alt: n.name,
        className: `${a}-list-item-image`,
        crossOrigin: n.crossOrigin
      }) : de, R = B(`${a}-list-item-thumbnail`, {
        [`${a}-list-item-file`]: w && !w(n)
      });
      V = /* @__PURE__ */ o.createElement("a", {
        className: R,
        onClick: (Z) => u(n, Z),
        href: n.url || n.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, F);
    }
  const L = B(`${a}-list-item`, `${a}-list-item-${T}`), ae = typeof n.linkProps == "string" ? JSON.parse(n.linkProps) : n.linkProps, ue = (typeof C == "function" ? C(n) : C) ? f(
    (typeof x == "function" ? x(n) : x) || /* @__PURE__ */ o.createElement(st, null),
    () => E(n),
    a,
    s.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    !0
  ) : null, ge = (typeof j == "function" ? j(n) : j) && T === "done" ? f((typeof y == "function" ? y(n) : y) || /* @__PURE__ */ o.createElement(ot, null), () => D(n), a, s.downloadFile) : null, ne = l !== "picture-card" && l !== "picture-circle" && /* @__PURE__ */ o.createElement("span", {
    key: "download-delete",
    className: B(`${a}-list-item-actions`, {
      picture: l === "picture"
    })
  }, ge, ue), J = typeof $ == "function" ? $(n) : $, b = J && /* @__PURE__ */ o.createElement("span", {
    className: `${a}-list-item-extra`
  }, J), M = B(`${a}-list-item-name`), X = n.url ? /* @__PURE__ */ o.createElement("a", Object.assign({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: M,
    title: n.name
  }, ae, {
    href: n.url,
    onClick: (F) => u(n, F)
  }), n.name, b) : /* @__PURE__ */ o.createElement("span", {
    key: "view",
    className: M,
    onClick: (F) => u(n, F),
    title: n.name
  }, n.name, b), q = (typeof h == "function" ? h(n) : h) && (n.url || n.thumbUrl) ? /* @__PURE__ */ o.createElement("a", {
    href: n.url || n.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (F) => u(n, F),
    title: s.previewFile
  }, typeof I == "function" ? I(n) : I || /* @__PURE__ */ o.createElement(it, null)) : null, re = (l === "picture-card" || l === "picture-circle") && T !== "uploading" && /* @__PURE__ */ o.createElement("span", {
    className: `${a}-list-item-actions`
  }, q, T === "done" && ge, ue), {
    getPrefixCls: ie
  } = o.useContext(Te), xe = ie(), Y = /* @__PURE__ */ o.createElement("div", {
    className: L
  }, V, X, ne, re, le && /* @__PURE__ */ o.createElement(at, {
    motionName: `${xe}-fade`,
    visible: T === "uploading",
    motionDeadline: 2e3
  }, (F) => {
    let {
      className: R
    } = F;
    const Z = "percent" in n ? /* @__PURE__ */ o.createElement(rt, Object.assign({}, c, {
      type: "line",
      percent: n.percent,
      "aria-label": n["aria-label"],
      "aria-labelledby": n["aria-labelledby"]
    })) : null;
    return /* @__PURE__ */ o.createElement("div", {
      className: B(`${a}-list-item-progress`, R)
    }, Z);
  })), pe = n.response && typeof n.response == "string" ? n.response : ((_ = n.error) === null || _ === void 0 ? void 0 : _.statusText) || ((Q = n.error) === null || Q === void 0 ? void 0 : Q.message) || s.uploadError, ye = T === "error" ? /* @__PURE__ */ o.createElement(Qt, {
    title: pe,
    getPopupContainer: (F) => F.parentNode
  }, Y) : Y;
  return /* @__PURE__ */ o.createElement("div", {
    className: B(`${a}-list-item-container`, r),
    style: i,
    ref: t
  }, g ? g(ye, n, m, {
    download: D.bind(null, n),
    preview: u.bind(null, n),
    remove: E.bind(null, n)
  }) : ye);
}), _a = (e, t) => {
  const {
    listType: a = "text",
    previewFile: r = Aa,
    onPreview: i,
    onDownload: s,
    onRemove: l,
    locale: n,
    iconRender: m,
    isImageUrl: c = Ta,
    prefixCls: d,
    items: f = [],
    showPreviewIcon: g = !0,
    showRemoveIcon: w = !0,
    showDownloadIcon: h = !1,
    removeIcon: C,
    previewIcon: j,
    downloadIcon: I,
    extra: x,
    progress: y = {
      size: [-1, 2],
      showInfo: !1
    },
    appendAction: $,
    appendActionVisible: u = !0,
    itemRender: D,
    disabled: E
  } = e, _ = sa(), [Q, K] = o.useState(!1), T = ["picture-card", "picture-circle"].includes(a);
  o.useEffect(() => {
    a.startsWith("picture") && (f || []).forEach((b) => {
      !(b.originFileObj instanceof File || b.originFileObj instanceof Blob) || b.thumbUrl !== void 0 || (b.thumbUrl = "", r == null || r(b.originFileObj).then((M) => {
        b.thumbUrl = M || "", _();
      }));
    });
  }, [a, f, r]), o.useEffect(() => {
    K(!0);
  }, []);
  const te = (b, M) => {
    if (i)
      return M.preventDefault(), i(b);
  }, le = (b) => {
    typeof s == "function" ? s(b) : b.url && window.open(b.url);
  }, ce = (b) => {
    l == null || l(b);
  }, de = (b) => {
    if (m)
      return m(b, a);
    const M = b.status === "uploading";
    if (a.startsWith("picture")) {
      const X = a === "picture" ? /* @__PURE__ */ o.createElement(We, null) : n.uploading, q = c != null && c(b) ? /* @__PURE__ */ o.createElement(dt, null) : /* @__PURE__ */ o.createElement(lt, null);
      return M ? X : q;
    }
    return M ? /* @__PURE__ */ o.createElement(We, null) : /* @__PURE__ */ o.createElement(ct, null);
  }, V = (b, M, X, q, re) => {
    const ie = {
      type: "text",
      size: "small",
      title: q,
      onClick: (xe) => {
        var Y, pe;
        M(), /* @__PURE__ */ o.isValidElement(b) && ((pe = (Y = b.props).onClick) === null || pe === void 0 || pe.call(Y, xe));
      },
      className: `${X}-list-item-action`
    };
    return re && (ie.disabled = E), /* @__PURE__ */ o.isValidElement(b) ? /* @__PURE__ */ o.createElement(Ge, Object.assign({}, ie, {
      icon: Xe(b, Object.assign(Object.assign({}, b.props), {
        onClick: () => {
        }
      }))
    })) : /* @__PURE__ */ o.createElement(Ge, Object.assign({}, ie), /* @__PURE__ */ o.createElement("span", null, b));
  };
  o.useImperativeHandle(t, () => ({
    handlePreview: te,
    handleDownload: le
  }));
  const {
    getPrefixCls: L
  } = o.useContext(Te), ae = L("upload", d), ue = L(), ge = B(`${ae}-list`, `${ae}-list-${a}`), ne = o.useMemo(() => ta(Yt(ue), ["onAppearEnd", "onEnterEnd", "onLeaveEnd"]), [ue]), J = Object.assign(Object.assign({}, T ? {} : ne), {
    motionDeadline: 2e3,
    motionName: `${ae}-${T ? "animate-inline" : "animate"}`,
    keys: oe(f.map((b) => ({
      key: b.uid,
      file: b
    }))),
    motionAppear: Q
  });
  return /* @__PURE__ */ o.createElement("div", {
    className: ge
  }, /* @__PURE__ */ o.createElement(Dt, Object.assign({}, J, {
    component: !1
  }), (b) => {
    let {
      key: M,
      file: X,
      className: q,
      style: re
    } = b;
    return /* @__PURE__ */ o.createElement(za, {
      key: M,
      locale: n,
      prefixCls: ae,
      className: q,
      style: re,
      file: X,
      items: f,
      progress: y,
      listType: a,
      isImgUrl: c,
      showPreviewIcon: g,
      showRemoveIcon: w,
      showDownloadIcon: h,
      removeIcon: C,
      previewIcon: j,
      downloadIcon: I,
      extra: x,
      iconRender: de,
      actionIconRender: V,
      itemRender: D,
      onPreview: te,
      onDownload: le,
      onClose: ce
    });
  }), $ && /* @__PURE__ */ o.createElement(at, Object.assign({}, J, {
    visible: u,
    forceRender: !0
  }), (b) => {
    let {
      className: M,
      style: X
    } = b;
    return Xe($, (q) => ({
      className: B(q.className, M),
      style: Object.assign(Object.assign(Object.assign({}, X), {
        // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
        pointerEvents: M ? "none" : void 0
      }), q.style)
    }));
  }));
}, pt = /* @__PURE__ */ o.forwardRef(_a);
G.env.NODE_ENV !== "production" && (pt.displayName = "UploadList");
var qa = function(e, t, a, r) {
  function i(s) {
    return s instanceof a ? s : new a(function(l) {
      l(s);
    });
  }
  return new (a || (a = Promise))(function(s, l) {
    function n(d) {
      try {
        c(r.next(d));
      } catch (f) {
        l(f);
      }
    }
    function m(d) {
      try {
        c(r.throw(d));
      } catch (f) {
        l(f);
      }
    }
    function c(d) {
      d.done ? s(d.value) : i(d.value).then(n, m);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const $e = `__LIST_IGNORE_${Date.now()}__`, Ha = (e, t) => {
  const {
    fileList: a,
    defaultFileList: r,
    onRemove: i,
    showUploadList: s = !0,
    listType: l = "text",
    onPreview: n,
    onDownload: m,
    onChange: c,
    onDrop: d,
    previewFile: f,
    disabled: g,
    locale: w,
    iconRender: h,
    isImageUrl: C,
    progress: j,
    prefixCls: I,
    className: x,
    type: y = "select",
    children: $,
    style: u,
    itemRender: D,
    maxCount: E,
    data: _ = {},
    multiple: Q = !1,
    hasControlInside: K = !0,
    action: T = "",
    accept: te = "",
    supportServerRender: le = !0,
    rootClassName: ce
  } = e, de = o.useContext(Ft), V = g ?? de, [L, ae] = Zt(r || [], {
    value: a,
    postState: (v) => v ?? []
  }), [ue, ge] = o.useState("drop"), ne = o.useRef(null), J = o.useRef(null);
  if (G.env.NODE_ENV !== "production") {
    const v = Rt("Upload");
    G.env.NODE_ENV !== "production" && v("fileList" in e || !("value" in e), "usage", "`value` is not a valid prop, do you mean `fileList`?"), v.deprecated(!("transformFile" in e), "transformFile", "beforeUpload");
  }
  o.useMemo(() => {
    const v = Date.now();
    (a || []).forEach((S, P) => {
      !S.uid && !Object.isFrozen(S) && (S.uid = `__AUTO__${v}_${P}__`);
    });
  }, [a]);
  const b = (v, S, P) => {
    let N = oe(S), O = !1;
    E === 1 ? N = N.slice(-1) : E && (O = N.length > E, N = N.slice(0, E)), Ve.flushSync(() => {
      ae(N);
    });
    const A = {
      file: v,
      fileList: N
    };
    P && (A.event = P), (!O || v.status === "removed" || // We should ignore event if current file is exceed `maxCount`
    N.some((me) => me.uid === v.uid)) && Ve.flushSync(() => {
      c == null || c(A);
    });
  }, M = (v, S) => qa(void 0, void 0, void 0, function* () {
    const {
      beforeUpload: P,
      transformFile: N
    } = e;
    let O = v;
    if (P) {
      const A = yield P(v, S);
      if (A === !1)
        return !1;
      if (delete v[$e], A === $e)
        return Object.defineProperty(v, $e, {
          value: !0,
          configurable: !0
        }), !1;
      typeof A == "object" && A && (O = A);
    }
    return N && (O = yield N(O)), O;
  }), X = (v) => {
    const S = v.filter((O) => !O.file[$e]);
    if (!S.length)
      return;
    const P = S.map((O) => Ce(O.file));
    let N = oe(L);
    P.forEach((O) => {
      N = je(O, N);
    }), P.forEach((O, A) => {
      let me = O;
      if (S[A].parsedFile)
        O.status = "uploading";
      else {
        const {
          originFileObj: he
        } = O;
        let fe;
        try {
          fe = new File([he], he.name, {
            type: he.type
          });
        } catch {
          fe = new Blob([he], {
            type: he.type
          }), fe.name = he.name, fe.lastModifiedDate = /* @__PURE__ */ new Date(), fe.lastModified = (/* @__PURE__ */ new Date()).getTime();
        }
        fe.uid = O.uid, me = fe;
      }
      b(me, N);
    });
  }, q = (v, S, P) => {
    try {
      typeof v == "string" && (v = JSON.parse(v));
    } catch {
    }
    if (!Pe(S, L))
      return;
    const N = Ce(S);
    N.status = "done", N.percent = 100, N.response = v, N.xhr = P;
    const O = je(N, L);
    b(N, O);
  }, re = (v, S) => {
    if (!Pe(S, L))
      return;
    const P = Ce(S);
    P.status = "uploading", P.percent = v.percent;
    const N = je(P, L);
    b(P, N, v);
  }, ie = (v, S, P) => {
    if (!Pe(P, L))
      return;
    const N = Ce(P);
    N.error = v, N.response = S, N.status = "error";
    const O = je(N, L);
    b(N, O);
  }, xe = (v) => {
    let S;
    Promise.resolve(typeof i == "function" ? i(v) : i).then((P) => {
      var N;
      if (P === !1)
        return;
      const O = Ma(v, L);
      O && (S = Object.assign(Object.assign({}, v), {
        status: "removed"
      }), L == null || L.forEach((A) => {
        const me = S.uid !== void 0 ? "uid" : "name";
        A[me] === S[me] && !Object.isFrozen(A) && (A.status = "removed");
      }), (N = ne.current) === null || N === void 0 || N.abort(S), b(S, O));
    });
  }, Y = (v) => {
    ge(v.type), v.type === "drop" && (d == null || d(v));
  };
  o.useImperativeHandle(t, () => ({
    onBatchStart: X,
    onSuccess: q,
    onProgress: re,
    onError: ie,
    fileList: L,
    upload: ne.current,
    nativeElement: J.current
  }));
  const {
    getPrefixCls: pe,
    direction: ye,
    upload: F
  } = o.useContext(Te), R = pe("upload", I), Z = Object.assign(Object.assign({
    onBatchStart: X,
    onError: ie,
    onProgress: re,
    onSuccess: q
  }, e), {
    data: _,
    multiple: Q,
    action: T,
    accept: te,
    supportServerRender: le,
    prefixCls: R,
    disabled: V,
    beforeUpload: M,
    onChange: void 0,
    hasControlInside: K
  });
  delete Z.className, delete Z.style, (!$ || V) && delete Z.id;
  const _e = `${R}-wrapper`, [Ee, qe, ft] = La(R, _e), [gt] = ea("Upload", Pt.Upload), {
    showRemoveIcon: He,
    showPreviewIcon: ht,
    showDownloadIcon: vt,
    removeIcon: bt,
    previewIcon: wt,
    downloadIcon: xt,
    extra: yt
  } = typeof s == "boolean" ? {} : s, $t = typeof He > "u" ? !V : He, Se = (v, S) => s ? /* @__PURE__ */ o.createElement(pt, {
    prefixCls: R,
    listType: l,
    items: L,
    previewFile: f,
    onPreview: n,
    onDownload: m,
    onRemove: xe,
    showRemoveIcon: $t,
    showPreviewIcon: ht,
    showDownloadIcon: vt,
    removeIcon: bt,
    previewIcon: wt,
    downloadIcon: xt,
    iconRender: h,
    extra: yt,
    locale: Object.assign(Object.assign({}, gt), w),
    isImageUrl: C,
    progress: j,
    appendAction: v,
    appendActionVisible: S,
    itemRender: D,
    disabled: V
  }) : v, Oe = B(_e, x, ce, qe, ft, F == null ? void 0 : F.className, {
    [`${R}-rtl`]: ye === "rtl",
    [`${R}-picture-card-wrapper`]: l === "picture-card",
    [`${R}-picture-circle-wrapper`]: l === "picture-circle"
  }), Ct = Object.assign(Object.assign({}, F == null ? void 0 : F.style), u);
  if (y === "drag") {
    const v = B(qe, R, `${R}-drag`, {
      [`${R}-drag-uploading`]: L.some((S) => S.status === "uploading"),
      [`${R}-drag-hover`]: ue === "dragover",
      [`${R}-disabled`]: V,
      [`${R}-rtl`]: ye === "rtl"
    });
    return Ee(/* @__PURE__ */ o.createElement("span", {
      className: Oe,
      ref: J
    }, /* @__PURE__ */ o.createElement("div", {
      className: v,
      style: Ct,
      onDrop: Y,
      onDragOver: Y,
      onDragLeave: Y
    }, /* @__PURE__ */ o.createElement(Ue, Object.assign({}, Z, {
      ref: ne,
      className: `${R}-btn`
    }), /* @__PURE__ */ o.createElement("div", {
      className: `${R}-drag-container`
    }, $))), Se()));
  }
  const jt = B(R, `${R}-select`, {
    [`${R}-disabled`]: V
  }), Be = /* @__PURE__ */ o.createElement("div", {
    className: jt,
    style: $ ? void 0 : {
      display: "none"
    }
  }, /* @__PURE__ */ o.createElement(Ue, Object.assign({}, Z, {
    ref: ne
  })));
  return Ee(l === "picture-card" || l === "picture-circle" ? /* @__PURE__ */ o.createElement("span", {
    className: Oe,
    ref: J
  }, Se(Be, !!$)) : /* @__PURE__ */ o.createElement("span", {
    className: Oe,
    ref: J
  }, Be, Se()));
}, Ae = /* @__PURE__ */ o.forwardRef(Ha);
G.env.NODE_ENV !== "production" && (Ae.displayName = "Upload");
var Ba = function(e, t) {
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
    t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (a[r[i]] = e[r[i]]);
  return a;
};
const mt = /* @__PURE__ */ o.forwardRef((e, t) => {
  var {
    style: a,
    height: r,
    hasControlInside: i = !1
  } = e, s = Ba(e, ["style", "height", "hasControlInside"]);
  return /* @__PURE__ */ o.createElement(Ae, Object.assign({
    ref: t,
    hasControlInside: i
  }, s, {
    type: "drag",
    style: Object.assign(Object.assign({}, a), {
      height: r
    })
  }));
});
G.env.NODE_ENV !== "production" && (mt.displayName = "Dragger");
const ze = Ae;
ze.Dragger = mt;
ze.LIST_IGNORE = $e;
const { Dragger: ka } = ze;
function Va({
  initialAvatar: e,
  onImageChange: t
}) {
  const [a, r] = o.useState(!1), [i, s] = o.useState(0), [l, n] = o.useState(e || ""), { username: m } = Le.all(), c = {
    name: "file",
    multiple: !1,
    showUploadList: !1,
    accept: "image/jpeg,image/png",
    maxCount: 1,
    beforeUpload: (d) => d.type === "image/jpeg" || d.type === "image/png" ? d.size / 1024 / 1024 < 10 ? !0 : (be.error("Image must be smaller than 10MB!"), !1) : (be.error("You can only upload JPG/PNG files!"), !1),
    customRequest: async ({ file: d, onSuccess: f, onError: g, onProgress: w }) => {
      try {
        r(!0), s(0), n("");
        const C = `${m.replace(/[@.]/g, "_")}`, j = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3), I = await nt.post("/thirdparty/get-cloudinary-signature", {
          overwrite: !0,
          public_id: C,
          timestamp: j
        }), { signature: x } = I.data, y = new FormData();
        y.append("file", d), y.append("signature", x), y.append("api_key", "989326372467832"), y.append("timestamp", j.toString()), y.append("public_id", C), y.append("overwrite", "true");
        const { data: $ } = await kt.post(
          "https://api.cloudinary.com/v1_1/dibdmi6zu/image/upload",
          y,
          {
            withCredentials: !1,
            onUploadProgress: (u) => {
              if (u.total) {
                const D = Math.round(
                  u.loaded * 100 / u.total
                );
                s(D), w == null || w({ percent: D });
              }
            }
          }
        );
        n($.secure_url), t($.secure_url), f == null || f($, d), be.success(`${d.name} file uploaded successfully.`);
      } catch (h) {
        console.error("Upload error:", h), g == null || g(h), be.error(`${d.name} file upload failed.`);
      } finally {
        r(!1), s(0);
      }
    },
    onDrop(d) {
      console.log("Dropped files", d.dataTransfer.files);
    }
  };
  return /* @__PURE__ */ p.jsx("div", { className: z(
    "relative ",
    "w-[104px] h-[104px]",
    "tablet:w-[395px] tablet:h-[172px]"
  ), children: /* @__PURE__ */ p.jsx(
    ka,
    {
      ...c,
      rootClassName: "[&_.ant-upload-drag_.ant-upload]:p-0",
      children: /* @__PURE__ */ p.jsx("div", { children: a ? /* @__PURE__ */ p.jsxs("div", { className: "text-black/90 text-sm font-normal leading-snug", children: [
        /* @__PURE__ */ p.jsx("p", { className: "mb-4", children: "Uploading..." }),
        /* @__PURE__ */ p.jsx("div", { className: z(
          "w-[88px] tablet:w-[200px] mx-auto"
        ), children: /* @__PURE__ */ p.jsx(rt, { percent: i, showInfo: !1, size: "small" }) })
      ] }) : l ? /* @__PURE__ */ p.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ p.jsx(
        "img",
        {
          src: l,
          alt: "Avatar",
          className: z(
            "h-[86px] w-[86px] object-cover object-center",
            "tablet:h-[170px] tablet:w-[170px]"
          )
        }
      ) }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs("div", { className: "hidden tablet:block", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex justify-center items-center mt-[16px] mb-[20px]", children: /* @__PURE__ */ p.jsx(Vt, {}) }),
          /* @__PURE__ */ p.jsx("p", { className: "text-center text-black/90 text-base leading-normal mb-2", children: "Click or drag file to this area to upload" }),
          /* @__PURE__ */ p.jsx("p", { className: "text-center text-black/40 text-sm leading-snug", children: "Only one file is allowed with a maximum size of 10MB. Supported formats: JPEG, PNG." })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "block tablet:hidden", children: [
          /* @__PURE__ */ p.jsx("div", { className: "flex justify-center items-center mt-[16px] mb-[8px]", children: /* @__PURE__ */ p.jsx(Xt, {}) }),
          /* @__PURE__ */ p.jsx("p", { children: "Upload" })
        ] })
      ] }) })
    }
  ) });
}
const Xa = Array.from({ length: 16 }, (e, t) => t + 1);
function Wa({
  isOpen: e,
  onClose: t,
  initialAvatarIndex: a,
  initialAvatar: r
}) {
  const i = Lt(), [s, l] = o.useState("select"), [n, m] = o.useState(0), [c, d] = o.useState(""), [f, g] = o.useState(!1), [w, h] = o.useState(!1);
  o.useEffect(() => {
    e && (r ? (m(0), d(r), l("upload")) : m(a));
  }, [e]);
  const C = () => s === "upload" ? !c : !1, j = (u) => {
    m(u), d(""), h(!0);
  }, I = (u) => {
    m(0), d(u), h(!0);
  }, x = () => {
    m(a), d(r), h(!1), l("select"), t();
  }, y = async () => {
    if (!w) {
      x();
      return;
    }
    try {
      g(!0), await nt.post("/user/update-avatar", {
        avatar: c,
        avatarIndex: n
      }), await i.invalidateQueries({ queryKey: ["userInfo"] }), be.success("Avatar updated successfully"), x();
    } catch (u) {
      const D = Tt(u);
      be.error(D.message);
    } finally {
      g(!1);
    }
  }, $ = /* @__PURE__ */ p.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ p.jsx(Ie, { className: "hidden tablet:block", variant: "outline", onClick: () => x(), children: "Cancel" }),
    /* @__PURE__ */ p.jsx(
      Ie,
      {
        className: "w-full tablet:w-auto",
        disabled: C() || f,
        onClick: () => {
          y();
        },
        children: f ? /* @__PURE__ */ p.jsx(Ut, {}) : "Save"
      }
    )
  ] });
  return /* @__PURE__ */ p.jsxs(
    Mt,
    {
      isOpen: e,
      onClose: () => x(),
      title: "Change profile picture",
      footer: $,
      containerClassName: "w-[600px]",
      children: [
        /* @__PURE__ */ p.jsxs("div", { className: "", children: [
          /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => l("select"),
              className: z(
                "pb-2 text-sm font-medium relative",
                s === "select" ? "text-black" : "text-[#929292]",
                "mr-[24px]"
              ),
              children: [
                "Select avatar",
                s === "select" && /* @__PURE__ */ p.jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-black" })
              ]
            }
          ),
          /* @__PURE__ */ p.jsxs(
            "button",
            {
              onClick: () => l("upload"),
              className: z(
                "pb-2 text-sm font-medium relative",
                s === "upload" ? "text-black" : "text-[#929292]"
              ),
              children: [
                "Upload photo",
                s === "upload" && /* @__PURE__ */ p.jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-black" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "w-full mx-auto h-[427px] flex justify-center items-center", children: [
          s === "select" && /* @__PURE__ */ p.jsx("div", { className: "w-[336px] grid grid-cols-4 gap-4", children: Xa.map((u, D) => /* @__PURE__ */ p.jsx(
            "img",
            {
              src: `/static/avatars/${u}.svg`,
              alt: "avatar",
              className: z(
                "w-[72px] h-[72px] cursor-pointer",
                n === u && "ring-4 ring-[#52c41a] rounded-[28px]"
              ),
              onClick: () => j(u)
            },
            D
          )) }),
          s === "upload" && /* @__PURE__ */ p.jsx(
            Va,
            {
              initialAvatar: c,
              onImageChange: I
            }
          )
        ] })
      ]
    }
  );
}
function Ga() {
  const { data: e } = At(), [t, a] = o.useState(!1), r = () => {
    a(!0);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "pt-[36px]", children: [
    /* @__PURE__ */ p.jsx("p", { className: "text-black text-[22px] font-bold leading-normal", children: "Settings" }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-[32px] border rounded-[8px] border-[#edf0f7] p-6", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-black text-xl font-bold leading-normal", children: "Daily transaction limit" }),
      /* @__PURE__ */ p.jsx("div", { className: "my-6 border-t border-[#dbdbdb]" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ p.jsx("p", { className: "text-[#4f4f4f] text-base font-normal leading-relaxed", children: "Manage how much you can transact daily for enhanced security and control." }),
        /* @__PURE__ */ p.jsx(Ie, { className: "hidden tablet:inline-block h-[36px]", variant: "outline", onClick: r, children: "Change limit" })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "text-[#929292] text-xs font-normal leading-relaxed mt-2 tablet:mt-1", children: zt.getAllTokens().map((i) => /* @__PURE__ */ p.jsxs("p", { children: [
        e[i.tokenType],
        " ",
        i.symbol
      ] }, i.tokenType)) }),
      /* @__PURE__ */ p.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ p.jsx(Ie, { className: "tablet:hidden h-[36px]", variant: "outline", onClick: r, children: "Change limit" }) })
    ] }),
    /* @__PURE__ */ p.jsx(
      _t,
      {
        isOpen: t,
        onClose: () => a(!1),
        defaultLimits: e
      }
    )
  ] });
}
function on() {
  const { address: e, username: t } = Le.all(), { data: a } = qt(), [r, i] = o.useState(""), [s, l] = o.useState(0), [n, m] = o.useState(""), [c, d] = o.useState(!1), [f, g] = o.useState(!1);
  o.useEffect(() => {
    a && (i(a.avatar), l(a.avatarIndex), m(a.avatar || Le.getUserRandomAvatar(a.avatarIndex)));
  }, [a]);
  const w = () => {
    g(!0);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "pb-[200px]", children: [
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: z(
          "w-full relative overflow-hidden bg-black",
          "h-[186px] tablet:h-[300px]"
        ),
        children: [
          /* @__PURE__ */ p.jsx(
            "div",
            {
              className: z(
                "absolute inset-[-20%] z-0",
                "bg-center bg-no-repeat bg-cover",
                "blur-[26px] bg-opacity-[0.23] brightness-[0.4]"
              ),
              style: {
                backgroundImage: `url(${n})`
              }
            }
          ),
          /* @__PURE__ */ p.jsxs("div", { className: z(
            "relative z-10",
            "tablet:flex tablet:flex-wrap tablet:justify-between",
            "py-[28px] tablet:py-[72px] tablet:px-[104px]",
            "w-[317px] mx-auto tablet:w-full"
          ), children: [
            /* @__PURE__ */ p.jsxs("div", { children: [
              /* @__PURE__ */ p.jsx("div", { className: z(
                'text-white font-bold leading-tight font-["Asap"]',
                "text-lg tablet:text-[32px]",
                "mb-[25px] tablet:mb-[50px]"
              ), children: "Profile" }),
              /* @__PURE__ */ p.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ p.jsxs("div", { className: "relative group", children: [
                  /* @__PURE__ */ p.jsx(
                    "img",
                    {
                      src: n,
                      alt: "avatar",
                      className: z(
                        "w-[39px] h-[39px] rounded-full",
                        "tablet:w-[72px] tablet:h-[72px]",
                        "mr-[12px] tablet:mr-[24px]"
                      )
                    }
                  ),
                  /* @__PURE__ */ p.jsx(
                    "div",
                    {
                      className: z(
                        "absolute inset-0 flex items-center justify-center",
                        "bg-black/50 rounded-full",
                        "opacity-0 group-hover:opacity-100",
                        "transition-opacity cursor-pointer",
                        "mr-[12px] tablet:mr-[24px]"
                      ),
                      onClick: w,
                      children: /* @__PURE__ */ p.jsx(
                        "img",
                        {
                          src: "/imgs/icons/camera.svg",
                          alt: "change avatar",
                          className: "w-[16px] h-[16px] tablet:w-[24px] tablet:h-[24px]"
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ p.jsx("p", { className: z(
                  "text-[#828282] leading-tight",
                  "text-base tablet:text-2xl",
                  "[text-decoration:none]"
                ), children: t })
              ] })
            ] }),
            /* @__PURE__ */ p.jsx("div", { className: z(
              "w-[276px] tablet:w-[266px] laptop:w-auto",
              "mx-auto tablet:mx-0",
              "mt-[8px] tablet:mt-[110px]",
              "ml-[50px] tablet:ml-0"
            ), children: /* @__PURE__ */ p.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ p.jsx(
                Ht,
                {
                  address: e,
                  className: "text-white text-xs",
                  iconClassName: "text-white",
                  iconSize: 14
                }
              ),
              /* @__PURE__ */ p.jsx(
                "img",
                {
                  className: "w-[14px] h-[14px] cursor-pointer",
                  src: "/imgs/icons/qrcode.svg",
                  alt: "",
                  onClick: () => d(!0)
                }
              )
            ] }) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ p.jsx("div", { className: z(
      "w-[342px] tablet:w-[725px] laptop:w-[908px] desktop:w-[1224px]",
      "mx-auto"
    ), children: /* @__PURE__ */ p.jsx(Ga, {}) }),
    /* @__PURE__ */ p.jsx(
      Bt,
      {
        address: e,
        open: c,
        setOpen: d,
        onClose: () => d(!1)
      }
    ),
    /* @__PURE__ */ p.jsx(
      Wa,
      {
        isOpen: f,
        onClose: () => g(!1),
        initialAvatarIndex: s,
        initialAvatar: r
      }
    )
  ] });
}
export {
  on as default
};
