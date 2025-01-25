import { j as p } from "./vendor-radix-BYJ0AyiX.js";
import { K as je, x as we, F as It, al as ve, am as W, E as oe, an as Je, ao as Qe, N as Ye, ap as H, M as Ze, n as B, J as Et, v as k, T as et, W as tt, aq as ke, P as St, O as Ot, Q as Dt, m as Te, ar as at, as as Ft, Y as Rt, y as Pt, at as Lt, a as Le, c as z, f as nt, ai as rt, ae as Mt, B as Ie, L as Ut, h as Tt, au as At, t as zt, av as _t, u as qt, a9 as Ht, ab as Bt } from "./main-CTEjG-UW.js";
import { r as l, p as G, R as Me, a as Ve } from "./vendor-react-CuOkI7kW.js";
import { B as be, a as kt } from "./vendor-utils-BfzDPiRN.js";
import { P as it } from "./progress-BqzLayu5.js";
import { _ as ee, s as Vt, P as Xt } from "./vendor-ui-utils-2_WY-nJY.js";
import { q as U, r as Wt, p as Gt, _ as Kt } from "./vendor-web3-DDgB3Js4.js";
import { i as Jt, d as Qt, e as Yt, f as Xe, u as Zt } from "./index-CLa3xQ0T.js";
import { R as We, B as Ge, a as ea } from "./button-BJQ7mpQA.js";
import { o as ta } from "./CheckOutlined-COvGN2KY.js";
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
}), na = new je("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), ra = new je("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), ia = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  const {
    antCls: n
  } = e, r = `${n}-fade`, i = t ? "&" : "";
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
  const [, e] = l.useReducer((t) => t + 1, 0);
  return e;
}
var oa = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, la = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: oa
  }));
}, st = /* @__PURE__ */ l.forwardRef(la);
G.env.NODE_ENV !== "production" && (st.displayName = "EyeOutlined");
var ca = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, da = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: ca
  }));
}, ot = /* @__PURE__ */ l.forwardRef(da);
G.env.NODE_ENV !== "production" && (ot.displayName = "DeleteOutlined");
var ua = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, name: "download", theme: "outlined" }, pa = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: ua
  }));
}, lt = /* @__PURE__ */ l.forwardRef(pa);
G.env.NODE_ENV !== "production" && (lt.displayName = "DownloadOutlined");
var ma = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", fill: n } }, { tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", fill: t } }] };
}, name: "file", theme: "twotone" }, fa = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: ma
  }));
}, ct = /* @__PURE__ */ l.forwardRef(fa);
G.env.NODE_ENV !== "production" && (ct.displayName = "FileTwoTone");
var ga = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, name: "paper-clip", theme: "outlined" }, ha = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: ga
  }));
}, dt = /* @__PURE__ */ l.forwardRef(ha);
G.env.NODE_ENV !== "production" && (dt.displayName = "PaperClipOutlined");
var va = { icon: function(t, n) {
  return { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", fill: t } }, { tag: "path", attrs: { d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", fill: n } }, { tag: "path", attrs: { d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", fill: n } }, { tag: "path", attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: n } }, { tag: "path", attrs: { d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", fill: t } }] };
}, name: "picture", theme: "twotone" }, ba = function(t, n) {
  return /* @__PURE__ */ l.createElement(we, ee({}, t, {
    ref: n,
    icon: va
  }));
}, ut = /* @__PURE__ */ l.forwardRef(ba);
G.env.NODE_ENV !== "production" && (ut.displayName = "PictureTwoTone");
const De = function(e, t) {
  if (e && t) {
    var n = Array.isArray(t) ? t : t.split(","), r = e.name || "", i = e.type || "", s = i.replace(/\/.*$/, "");
    return n.some(function(o) {
      var a = o.trim();
      if (/^\*(\/\*)?$/.test(o))
        return !0;
      if (a.charAt(0) === ".") {
        var m = r.toLowerCase(), c = a.toLowerCase(), d = [c];
        return (c === ".jpg" || c === ".jpeg") && (d = [".jpg", ".jpeg"]), d.some(function(f) {
          return m.endsWith(f);
        });
      }
      return /\/\*$/.test(a) ? s === a.replace(/\/.*$/, "") : i === a ? !0 : /^\w+$/.test(a) ? (It(!1, "Upload takes an invalidate 'accept' type '".concat(a, "'.Skip for check.")), !0) : !1;
    });
  }
  return !0;
};
function wa(e, t) {
  var n = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(t.status, "'"), r = new Error(n);
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
  var n = new FormData();
  e.data && Object.keys(e.data).forEach(function(i) {
    var s = e.data[i];
    if (Array.isArray(s)) {
      s.forEach(function(o) {
        n.append("".concat(i, "[]"), o);
      });
      return;
    }
    n.append(i, s);
  }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(s) {
    e.onError(s);
  }, t.onload = function() {
    return t.status < 200 || t.status >= 300 ? e.onError(wa(e, t), Ke(t)) : e.onSuccess(Ke(t), t);
  }, t.open(e.method, e.action, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  var r = e.headers || {};
  return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach(function(i) {
    r[i] !== null && t.setRequestHeader(i, r[i]);
  }), t.send(n), {
    abort: function() {
      t.abort();
    }
  };
}
var ya = /* @__PURE__ */ function() {
  var e = ve(/* @__PURE__ */ W().mark(function t(n, r) {
    var i, s, o, a, m, c, d, f;
    return W().wrap(function(w) {
      for (; ; ) switch (w.prev = w.next) {
        case 0:
          c = function() {
            return c = ve(/* @__PURE__ */ W().mark(function C(N) {
              return W().wrap(function(x) {
                for (; ; ) switch (x.prev = x.next) {
                  case 0:
                    return x.abrupt("return", new Promise(function(y) {
                      N.file(function($) {
                        r($) ? (N.fullPath && !$.webkitRelativePath && (Object.defineProperties($, {
                          webkitRelativePath: {
                            writable: !0
                          }
                        }), $.webkitRelativePath = N.fullPath.replace(/^\//, ""), Object.defineProperties($, {
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
          }, a = function() {
            return a = ve(/* @__PURE__ */ W().mark(function C(N) {
              var I, x, y, $, u;
              return W().wrap(function(E) {
                for (; ; ) switch (E.prev = E.next) {
                  case 0:
                    I = N.createReader(), x = [];
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
            })), a.apply(this, arguments);
          }, o = function(C) {
            return a.apply(this, arguments);
          }, i = [], s = [], n.forEach(function(h) {
            return s.push(h.webkitGetAsEntry());
          }), d = /* @__PURE__ */ function() {
            var h = ve(/* @__PURE__ */ W().mark(function C(N, I) {
              var x, y;
              return W().wrap(function(u) {
                for (; ; ) switch (u.prev = u.next) {
                  case 0:
                    if (N) {
                      u.next = 2;
                      break;
                    }
                    return u.abrupt("return");
                  case 2:
                    if (N.path = I || "", !N.isFile) {
                      u.next = 10;
                      break;
                    }
                    return u.next = 6, m(N);
                  case 6:
                    x = u.sent, x && i.push(x), u.next = 15;
                    break;
                  case 10:
                    if (!N.isDirectory) {
                      u.next = 15;
                      break;
                    }
                    return u.next = 13, o(N);
                  case 13:
                    y = u.sent, s.push.apply(s, oe(y));
                  case 15:
                  case "end":
                    return u.stop();
                }
              }, C);
            }));
            return function(N, I) {
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
  return function(n, r) {
    return e.apply(this, arguments);
  };
}(), $a = +/* @__PURE__ */ new Date(), Ca = 0;
function Fe() {
  return "rc-upload-".concat($a, "-").concat(++Ca);
}
var Na = ["component", "prefixCls", "className", "classNames", "disabled", "id", "name", "style", "styles", "multiple", "accept", "capture", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave", "hasControlInside"], ja = /* @__PURE__ */ function(e) {
  Je(n, e);
  var t = Qe(n);
  function n() {
    var r;
    Ye(this, n);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(s)), U(H(r), "state", {
      uid: Fe()
    }), U(H(r), "reqs", {}), U(H(r), "fileInput", void 0), U(H(r), "_isMounted", void 0), U(H(r), "onChange", function(a) {
      var m = r.props, c = m.accept, d = m.directory, f = a.target.files, g = oe(f).filter(function(w) {
        return !d || De(w, c);
      });
      r.uploadFiles(g), r.reset();
    }), U(H(r), "onClick", function(a) {
      var m = r.fileInput;
      if (m) {
        var c = a.target, d = r.props.onClick;
        if (c && c.tagName === "BUTTON") {
          var f = m.parentNode;
          f.focus(), c.blur();
        }
        m.click(), d && d(a);
      }
    }), U(H(r), "onKeyDown", function(a) {
      a.key === "Enter" && r.onClick(a);
    }), U(H(r), "onFileDrop", /* @__PURE__ */ function() {
      var a = ve(/* @__PURE__ */ W().mark(function m(c) {
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
        return a.apply(this, arguments);
      };
    }()), U(H(r), "uploadFiles", function(a) {
      var m = oe(a), c = m.map(function(d) {
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
      var a = ve(/* @__PURE__ */ W().mark(function m(c, d) {
        var f, g, w, h, C, N, I, x, y;
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
              N = u.sent, u.next = 30;
              break;
            case 29:
              N = C;
            case 30:
              return I = // string type is from legacy `transformFile`.
              // Not sure if this will work since no related test case works with it
              (Kt(g) === "object" || typeof g == "string") && g ? g : c, I instanceof File ? x = I : x = new File([I], c.name, {
                type: c.type
              }), y = x, y.uid = c.uid, u.abrupt("return", {
                origin: c,
                data: N,
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
        return a.apply(this, arguments);
      };
    }()), U(H(r), "saveFileInput", function(a) {
      r.fileInput = a;
    }), r;
  }
  return Ze(n, [{
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
      var s = this, o = i.data, a = i.origin, m = i.action, c = i.parsedFile;
      if (this._isMounted) {
        var d = this.props, f = d.onStart, g = d.customRequest, w = d.name, h = d.headers, C = d.withCredentials, N = d.method, I = a.uid, x = g || xa, y = {
          action: m,
          filename: w,
          data: o,
          file: c,
          headers: h,
          withCredentials: C,
          method: N || "post",
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
        f(a), this.reqs[I] = x(y);
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
        var o = i.uid ? i.uid : i;
        s[o] && s[o].abort && s[o].abort(), delete s[o];
      } else
        Object.keys(s).forEach(function(a) {
          s[a] && s[a].abort && s[a].abort(), delete s[a];
        });
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, s = i.component, o = i.prefixCls, a = i.className, m = i.classNames, c = m === void 0 ? {} : m, d = i.disabled, f = i.id, g = i.name, w = i.style, h = i.styles, C = h === void 0 ? {} : h, N = i.multiple, I = i.accept, x = i.capture, y = i.children, $ = i.directory, u = i.openFileDialogOnClick, D = i.onMouseEnter, E = i.onMouseLeave, _ = i.hasControlInside, Q = Wt(i, Na), K = B(U(U(U({}, o, !0), "".concat(o, "-disabled"), d), a, a)), T = $ ? {
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
      }), /* @__PURE__ */ Me.createElement("input", ee({}, Et(Q, {
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
        multiple: N,
        onChange: this.onChange
      }, x != null ? {
        capture: x
      } : {})), y);
    }
  }]), n;
}(l.Component);
function Re() {
}
var Ue = /* @__PURE__ */ function(e) {
  Je(n, e);
  var t = Qe(n);
  function n() {
    var r;
    Ye(this, n);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return r = t.call.apply(t, [this].concat(s)), U(H(r), "uploader", void 0), U(H(r), "saveUploader", function(a) {
      r.uploader = a;
    }), r;
  }
  return Ze(n, [{
    key: "abort",
    value: function(i) {
      this.uploader.abort(i);
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ Me.createElement(ja, ee({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]), n;
}(l.Component);
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
    iconCls: n
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
          [n]: {
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
          [`p${t}-drag-icon ${n},
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
    antCls: n,
    iconCls: r,
    fontSize: i,
    lineHeight: s,
    calc: o
  } = e, a = `${t}-list-item`, m = `${a}-actions`, c = `${a}-action`, d = e.fontHeightSM;
  return {
    [`${t}-wrapper`]: {
      [`${t}-list`]: Object.assign(Object.assign({}, et()), {
        lineHeight: e.lineHeight,
        [a]: {
          position: "relative",
          height: o(e.lineHeight).mul(i).equal(),
          marginTop: e.marginXS,
          fontSize: i,
          display: "flex",
          alignItems: "center",
          transition: `background-color ${e.motionDurationSlow}`,
          "&:hover": {
            backgroundColor: e.controlItemBgHover
          },
          [`${a}-name`]: Object.assign(Object.assign({}, tt), {
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
            [`${c}${n}-btn`]: {
              height: d,
              border: 0,
              lineHeight: 1
            }
          },
          [`${t}-icon ${r}`]: {
            color: e.colorTextDescription,
            fontSize: i
          },
          [`${a}-progress`]: {
            position: "absolute",
            bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
            width: "100%",
            paddingInlineStart: o(i).add(e.paddingXS).equal(),
            fontSize: i,
            lineHeight: 0,
            pointerEvents: "none",
            "> div": {
              margin: 0
            }
          }
        },
        [`${a}:hover ${c}`]: {
          opacity: 1
        },
        [`${a}-error`]: {
          color: e.colorError,
          [`${a}-name, ${t}-icon ${r}`]: {
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
  } = e, n = new je("uploadAnimateInlineIn", {
    from: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: e.calc(e.marginXS).div(-2).equal()
    }
  }), r = new je("uploadAnimateInlineOut", {
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
        animationName: n
      },
      [`${i}-leave`]: {
        animationName: r
      }
    }
  }, {
    [`${t}-wrapper`]: ia(e)
  }, n, r];
}, Oa = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    uploadThumbnailSize: r,
    uploadProgressOffset: i,
    calc: s
  } = e, o = `${t}-list`, a = `${o}-item`;
  return {
    [`${t}-wrapper`]: {
      // ${listCls} 增加优先级
      [`
        ${o}${o}-picture,
        ${o}${o}-picture-card,
        ${o}${o}-picture-circle
      `]: {
        [a]: {
          position: "relative",
          height: s(r).add(s(e.lineWidth).mul(2)).add(s(e.paddingXS).mul(2)).equal(),
          padding: e.paddingXS,
          border: `${k(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          "&:hover": {
            background: "transparent"
          },
          [`${a}-thumbnail`]: Object.assign(Object.assign({}, tt), {
            width: r,
            height: r,
            lineHeight: k(s(r).add(e.paddingSM).equal()),
            textAlign: "center",
            flex: "none",
            [n]: {
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
          [`${a}-progress`]: {
            bottom: i,
            width: `calc(100% - ${k(s(e.paddingSM).mul(2).equal())})`,
            marginTop: 0,
            paddingInlineStart: s(r).add(e.paddingXS).equal()
          }
        },
        [`${a}-error`]: {
          borderColor: e.colorError,
          // Adjust the color of the error icon : https://github.com/ant-design/ant-design/pull/24160
          [`${a}-thumbnail ${n}`]: {
            [`svg path[fill='${ke[0]}']`]: {
              fill: e.colorErrorBg
            },
            [`svg path[fill='${ke.primary}']`]: {
              fill: e.colorError
            }
          }
        },
        [`${a}-uploading`]: {
          borderStyle: "dashed",
          [`${a}-name`]: {
            marginBottom: i
          }
        }
      },
      [`${o}${o}-picture-circle ${a}`]: {
        [`&, &::before, ${a}-thumbnail`]: {
          borderRadius: "50%"
        }
      }
    }
  };
}, Da = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontSizeLG: r,
    colorTextLightSolid: i,
    calc: s
  } = e, o = `${t}-list`, a = `${o}-item`, m = e.uploadPicCardSize;
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
      [`${o}${o}-picture-card, ${o}${o}-picture-circle`]: {
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
        [`${o}-item-container`]: {
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
        [a]: {
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
        [`${a}:hover`]: {
          [`&::before, ${a}-actions`]: {
            opacity: 1
          }
        },
        [`${a}-actions`]: {
          position: "absolute",
          insetInlineStart: 0,
          zIndex: 10,
          width: "100%",
          whiteSpace: "nowrap",
          textAlign: "center",
          opacity: 0,
          transition: `all ${e.motionDurationSlow}`,
          [`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
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
        [`${a}-thumbnail, ${a}-thumbnail img`]: {
          position: "static",
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        },
        [`${a}-name`]: {
          display: "none",
          textAlign: "center"
        },
        [`${a}-file + ${a}-name`]: {
          position: "absolute",
          bottom: e.margin,
          display: "block",
          width: `calc(100% - ${k(s(e.paddingXS).mul(2).equal())})`
        },
        [`${a}-uploading`]: {
          [`&${a}`]: {
            backgroundColor: e.colorFillAlter
          },
          [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
            display: "none"
          }
        },
        [`${a}-progress`]: {
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
    colorTextDisabled: n
  } = e;
  return {
    [`${t}-wrapper`]: Object.assign(Object.assign({}, Dt(e)), {
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
        color: n,
        cursor: "not-allowed"
      }
    })
  };
}, Pa = (e) => ({
  actionsColor: e.colorTextDescription
}), La = St("Upload", (e) => {
  const {
    fontSizeHeading3: t,
    fontHeight: n,
    lineWidth: r,
    controlHeightLG: i,
    calc: s
  } = e, o = Ot(e, {
    uploadThumbnailSize: s(t).mul(2).equal(),
    uploadProgressOffset: s(s(n).div(2)).add(r).equal(),
    uploadPicCardSize: s(i).mul(2.55).equal()
  });
  return [Ra(o), Ia(o), Oa(o), Da(o), Ea(o), Sa(o), Fa(o), aa(o)];
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
function Ne(e, t) {
  const n = oe(t), r = n.findIndex((i) => {
    let {
      uid: s
    } = i;
    return s === e.uid;
  });
  return r === -1 ? n.push(e) : n[r] = e, n;
}
function Pe(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name";
  return t.filter((r) => r[n] === e[n])[0];
}
function Ma(e, t) {
  const n = e.uid !== void 0 ? "uid" : "name", r = t.filter((i) => i[n] !== e[n]);
  return r.length === t.length ? null : r;
}
const Ua = function() {
  const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), r = t[t.length - 1].split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(r) || [""])[0];
}, pt = (e) => e.indexOf("image/") === 0, Ta = (e) => {
  if (e.type && !e.thumbUrl)
    return pt(e.type);
  const t = e.thumbUrl || e.url || "", n = Ua(t);
  return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n) ? !0 : !(/^data:/.test(t) || n);
}, se = 200;
function Aa(e) {
  return new Promise((t) => {
    if (!e.type || !pt(e.type)) {
      t("");
      return;
    }
    const n = document.createElement("canvas");
    n.width = se, n.height = se, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${se}px; height: ${se}px; z-index: 9999; display: none;`, document.body.appendChild(n);
    const r = n.getContext("2d"), i = new Image();
    if (i.onload = () => {
      const {
        width: s,
        height: o
      } = i;
      let a = se, m = se, c = 0, d = 0;
      s > o ? (m = o * (se / s), d = -(m - a) / 2) : (a = s * (se / o), c = -(a - m) / 2), r.drawImage(i, c, d, a, m);
      const f = n.toDataURL();
      document.body.removeChild(n), window.URL.revokeObjectURL(i.src), t(f);
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
const za = /* @__PURE__ */ l.forwardRef((e, t) => {
  let {
    prefixCls: n,
    className: r,
    style: i,
    locale: s,
    listType: o,
    file: a,
    items: m,
    progress: c,
    iconRender: d,
    actionIconRender: f,
    itemRender: g,
    isImgUrl: w,
    showPreviewIcon: h,
    showRemoveIcon: C,
    showDownloadIcon: N,
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
  } = a, [T, te] = l.useState(K);
  l.useEffect(() => {
    K !== "removed" && te(K);
  }, [K]);
  const [le, ce] = l.useState(!1);
  l.useEffect(() => {
    const F = setTimeout(() => {
      ce(!0);
    }, 300);
    return () => {
      clearTimeout(F);
    };
  }, []);
  const de = d(a);
  let V = /* @__PURE__ */ l.createElement("div", {
    className: `${n}-icon`
  }, de);
  if (o === "picture" || o === "picture-card" || o === "picture-circle")
    if (T === "uploading" || !a.thumbUrl && !a.url) {
      const F = B(`${n}-list-item-thumbnail`, {
        [`${n}-list-item-file`]: T !== "uploading"
      });
      V = /* @__PURE__ */ l.createElement("div", {
        className: F
      }, de);
    } else {
      const F = w != null && w(a) ? /* @__PURE__ */ l.createElement("img", {
        src: a.thumbUrl || a.url,
        alt: a.name,
        className: `${n}-list-item-image`,
        crossOrigin: a.crossOrigin
      }) : de, R = B(`${n}-list-item-thumbnail`, {
        [`${n}-list-item-file`]: w && !w(a)
      });
      V = /* @__PURE__ */ l.createElement("a", {
        className: R,
        onClick: (Z) => u(a, Z),
        href: a.url || a.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, F);
    }
  const L = B(`${n}-list-item`, `${n}-list-item-${T}`), ae = typeof a.linkProps == "string" ? JSON.parse(a.linkProps) : a.linkProps, ue = (typeof C == "function" ? C(a) : C) ? f(
    (typeof x == "function" ? x(a) : x) || /* @__PURE__ */ l.createElement(ot, null),
    () => E(a),
    n,
    s.removeFile,
    // acceptUploadDisabled is true, only remove icon will follow Upload disabled prop
    // https://github.com/ant-design/ant-design/issues/46171
    !0
  ) : null, ge = (typeof N == "function" ? N(a) : N) && T === "done" ? f((typeof y == "function" ? y(a) : y) || /* @__PURE__ */ l.createElement(lt, null), () => D(a), n, s.downloadFile) : null, ne = o !== "picture-card" && o !== "picture-circle" && /* @__PURE__ */ l.createElement("span", {
    key: "download-delete",
    className: B(`${n}-list-item-actions`, {
      picture: o === "picture"
    })
  }, ge, ue), J = typeof $ == "function" ? $(a) : $, b = J && /* @__PURE__ */ l.createElement("span", {
    className: `${n}-list-item-extra`
  }, J), M = B(`${n}-list-item-name`), X = a.url ? /* @__PURE__ */ l.createElement("a", Object.assign({
    key: "view",
    target: "_blank",
    rel: "noopener noreferrer",
    className: M,
    title: a.name
  }, ae, {
    href: a.url,
    onClick: (F) => u(a, F)
  }), a.name, b) : /* @__PURE__ */ l.createElement("span", {
    key: "view",
    className: M,
    onClick: (F) => u(a, F),
    title: a.name
  }, a.name, b), q = (typeof h == "function" ? h(a) : h) && (a.url || a.thumbUrl) ? /* @__PURE__ */ l.createElement("a", {
    href: a.url || a.thumbUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: (F) => u(a, F),
    title: s.previewFile
  }, typeof I == "function" ? I(a) : I || /* @__PURE__ */ l.createElement(st, null)) : null, re = (o === "picture-card" || o === "picture-circle") && T !== "uploading" && /* @__PURE__ */ l.createElement("span", {
    className: `${n}-list-item-actions`
  }, q, T === "done" && ge, ue), {
    getPrefixCls: ie
  } = l.useContext(Te), xe = ie(), Y = /* @__PURE__ */ l.createElement("div", {
    className: L
  }, V, X, ne, re, le && /* @__PURE__ */ l.createElement(at, {
    motionName: `${xe}-fade`,
    visible: T === "uploading",
    motionDeadline: 2e3
  }, (F) => {
    let {
      className: R
    } = F;
    const Z = "percent" in a ? /* @__PURE__ */ l.createElement(it, Object.assign({}, c, {
      type: "line",
      percent: a.percent,
      "aria-label": a["aria-label"],
      "aria-labelledby": a["aria-labelledby"]
    })) : null;
    return /* @__PURE__ */ l.createElement("div", {
      className: B(`${n}-list-item-progress`, R)
    }, Z);
  })), pe = a.response && typeof a.response == "string" ? a.response : ((_ = a.error) === null || _ === void 0 ? void 0 : _.statusText) || ((Q = a.error) === null || Q === void 0 ? void 0 : Q.message) || s.uploadError, ye = T === "error" ? /* @__PURE__ */ l.createElement(Qt, {
    title: pe,
    getPopupContainer: (F) => F.parentNode
  }, Y) : Y;
  return /* @__PURE__ */ l.createElement("div", {
    className: B(`${n}-list-item-container`, r),
    style: i,
    ref: t
  }, g ? g(ye, a, m, {
    download: D.bind(null, a),
    preview: u.bind(null, a),
    remove: E.bind(null, a)
  }) : ye);
}), _a = (e, t) => {
  const {
    listType: n = "text",
    previewFile: r = Aa,
    onPreview: i,
    onDownload: s,
    onRemove: o,
    locale: a,
    iconRender: m,
    isImageUrl: c = Ta,
    prefixCls: d,
    items: f = [],
    showPreviewIcon: g = !0,
    showRemoveIcon: w = !0,
    showDownloadIcon: h = !1,
    removeIcon: C,
    previewIcon: N,
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
  } = e, _ = sa(), [Q, K] = l.useState(!1), T = ["picture-card", "picture-circle"].includes(n);
  l.useEffect(() => {
    n.startsWith("picture") && (f || []).forEach((b) => {
      !(b.originFileObj instanceof File || b.originFileObj instanceof Blob) || b.thumbUrl !== void 0 || (b.thumbUrl = "", r == null || r(b.originFileObj).then((M) => {
        b.thumbUrl = M || "", _();
      }));
    });
  }, [n, f, r]), l.useEffect(() => {
    K(!0);
  }, []);
  const te = (b, M) => {
    if (i)
      return M.preventDefault(), i(b);
  }, le = (b) => {
    typeof s == "function" ? s(b) : b.url && window.open(b.url);
  }, ce = (b) => {
    o == null || o(b);
  }, de = (b) => {
    if (m)
      return m(b, n);
    const M = b.status === "uploading";
    if (n.startsWith("picture")) {
      const X = n === "picture" ? /* @__PURE__ */ l.createElement(We, null) : a.uploading, q = c != null && c(b) ? /* @__PURE__ */ l.createElement(ut, null) : /* @__PURE__ */ l.createElement(ct, null);
      return M ? X : q;
    }
    return M ? /* @__PURE__ */ l.createElement(We, null) : /* @__PURE__ */ l.createElement(dt, null);
  }, V = (b, M, X, q, re) => {
    const ie = {
      type: "text",
      size: "small",
      title: q,
      onClick: (xe) => {
        var Y, pe;
        M(), /* @__PURE__ */ l.isValidElement(b) && ((pe = (Y = b.props).onClick) === null || pe === void 0 || pe.call(Y, xe));
      },
      className: `${X}-list-item-action`
    };
    return re && (ie.disabled = E), /* @__PURE__ */ l.isValidElement(b) ? /* @__PURE__ */ l.createElement(Ge, Object.assign({}, ie, {
      icon: Xe(b, Object.assign(Object.assign({}, b.props), {
        onClick: () => {
        }
      }))
    })) : /* @__PURE__ */ l.createElement(Ge, Object.assign({}, ie), /* @__PURE__ */ l.createElement("span", null, b));
  };
  l.useImperativeHandle(t, () => ({
    handlePreview: te,
    handleDownload: le
  }));
  const {
    getPrefixCls: L
  } = l.useContext(Te), ae = L("upload", d), ue = L(), ge = B(`${ae}-list`, `${ae}-list-${n}`), ne = l.useMemo(() => ta(Yt(ue), ["onAppearEnd", "onEnterEnd", "onLeaveEnd"]), [ue]), J = Object.assign(Object.assign({}, T ? {} : ne), {
    motionDeadline: 2e3,
    motionName: `${ae}-${T ? "animate-inline" : "animate"}`,
    keys: oe(f.map((b) => ({
      key: b.uid,
      file: b
    }))),
    motionAppear: Q
  });
  return /* @__PURE__ */ l.createElement("div", {
    className: ge
  }, /* @__PURE__ */ l.createElement(Ft, Object.assign({}, J, {
    component: !1
  }), (b) => {
    let {
      key: M,
      file: X,
      className: q,
      style: re
    } = b;
    return /* @__PURE__ */ l.createElement(za, {
      key: M,
      locale: a,
      prefixCls: ae,
      className: q,
      style: re,
      file: X,
      items: f,
      progress: y,
      listType: n,
      isImgUrl: c,
      showPreviewIcon: g,
      showRemoveIcon: w,
      showDownloadIcon: h,
      removeIcon: C,
      previewIcon: N,
      downloadIcon: I,
      extra: x,
      iconRender: de,
      actionIconRender: V,
      itemRender: D,
      onPreview: te,
      onDownload: le,
      onClose: ce
    });
  }), $ && /* @__PURE__ */ l.createElement(at, Object.assign({}, J, {
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
}, mt = /* @__PURE__ */ l.forwardRef(_a);
G.env.NODE_ENV !== "production" && (mt.displayName = "UploadList");
var qa = function(e, t, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(d) {
      try {
        c(r.next(d));
      } catch (f) {
        o(f);
      }
    }
    function m(d) {
      try {
        c(r.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function c(d) {
      d.done ? s(d.value) : i(d.value).then(a, m);
    }
    c((r = r.apply(e, t || [])).next());
  });
};
const $e = `__LIST_IGNORE_${Date.now()}__`, Ha = (e, t) => {
  const {
    fileList: n,
    defaultFileList: r,
    onRemove: i,
    showUploadList: s = !0,
    listType: o = "text",
    onPreview: a,
    onDownload: m,
    onChange: c,
    onDrop: d,
    previewFile: f,
    disabled: g,
    locale: w,
    iconRender: h,
    isImageUrl: C,
    progress: N,
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
  } = e, de = l.useContext(Rt), V = g ?? de, [L, ae] = Zt(r || [], {
    value: n,
    postState: (v) => v ?? []
  }), [ue, ge] = l.useState("drop"), ne = l.useRef(null), J = l.useRef(null);
  if (G.env.NODE_ENV !== "production") {
    const v = Pt("Upload");
    G.env.NODE_ENV !== "production" && v("fileList" in e || !("value" in e), "usage", "`value` is not a valid prop, do you mean `fileList`?"), v.deprecated(!("transformFile" in e), "transformFile", "beforeUpload");
  }
  l.useMemo(() => {
    const v = Date.now();
    (n || []).forEach((S, P) => {
      !S.uid && !Object.isFrozen(S) && (S.uid = `__AUTO__${v}_${P}__`);
    });
  }, [n]);
  const b = (v, S, P) => {
    let j = oe(S), O = !1;
    E === 1 ? j = j.slice(-1) : E && (O = j.length > E, j = j.slice(0, E)), Ve.flushSync(() => {
      ae(j);
    });
    const A = {
      file: v,
      fileList: j
    };
    P && (A.event = P), (!O || v.status === "removed" || // We should ignore event if current file is exceed `maxCount`
    j.some((me) => me.uid === v.uid)) && Ve.flushSync(() => {
      c == null || c(A);
    });
  }, M = (v, S) => qa(void 0, void 0, void 0, function* () {
    const {
      beforeUpload: P,
      transformFile: j
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
    return j && (O = yield j(O)), O;
  }), X = (v) => {
    const S = v.filter((O) => !O.file[$e]);
    if (!S.length)
      return;
    const P = S.map((O) => Ce(O.file));
    let j = oe(L);
    P.forEach((O) => {
      j = Ne(O, j);
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
      b(me, j);
    });
  }, q = (v, S, P) => {
    try {
      typeof v == "string" && (v = JSON.parse(v));
    } catch {
    }
    if (!Pe(S, L))
      return;
    const j = Ce(S);
    j.status = "done", j.percent = 100, j.response = v, j.xhr = P;
    const O = Ne(j, L);
    b(j, O);
  }, re = (v, S) => {
    if (!Pe(S, L))
      return;
    const P = Ce(S);
    P.status = "uploading", P.percent = v.percent;
    const j = Ne(P, L);
    b(P, j, v);
  }, ie = (v, S, P) => {
    if (!Pe(P, L))
      return;
    const j = Ce(P);
    j.error = v, j.response = S, j.status = "error";
    const O = Ne(j, L);
    b(j, O);
  }, xe = (v) => {
    let S;
    Promise.resolve(typeof i == "function" ? i(v) : i).then((P) => {
      var j;
      if (P === !1)
        return;
      const O = Ma(v, L);
      O && (S = Object.assign(Object.assign({}, v), {
        status: "removed"
      }), L == null || L.forEach((A) => {
        const me = S.uid !== void 0 ? "uid" : "name";
        A[me] === S[me] && !Object.isFrozen(A) && (A.status = "removed");
      }), (j = ne.current) === null || j === void 0 || j.abort(S), b(S, O));
    });
  }, Y = (v) => {
    ge(v.type), v.type === "drop" && (d == null || d(v));
  };
  l.useImperativeHandle(t, () => ({
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
  } = l.useContext(Te), R = pe("upload", I), Z = Object.assign(Object.assign({
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
  const _e = `${R}-wrapper`, [Ee, qe, gt] = La(R, _e), [ht] = ea("Upload", Lt.Upload), {
    showRemoveIcon: He,
    showPreviewIcon: vt,
    showDownloadIcon: bt,
    removeIcon: wt,
    previewIcon: xt,
    downloadIcon: yt,
    extra: $t
  } = typeof s == "boolean" ? {} : s, Ct = typeof He > "u" ? !V : He, Se = (v, S) => s ? /* @__PURE__ */ l.createElement(mt, {
    prefixCls: R,
    listType: o,
    items: L,
    previewFile: f,
    onPreview: a,
    onDownload: m,
    onRemove: xe,
    showRemoveIcon: Ct,
    showPreviewIcon: vt,
    showDownloadIcon: bt,
    removeIcon: wt,
    previewIcon: xt,
    downloadIcon: yt,
    iconRender: h,
    extra: $t,
    locale: Object.assign(Object.assign({}, ht), w),
    isImageUrl: C,
    progress: N,
    appendAction: v,
    appendActionVisible: S,
    itemRender: D,
    disabled: V
  }) : v, Oe = B(_e, x, ce, qe, gt, F == null ? void 0 : F.className, {
    [`${R}-rtl`]: ye === "rtl",
    [`${R}-picture-card-wrapper`]: o === "picture-card",
    [`${R}-picture-circle-wrapper`]: o === "picture-circle"
  }), Nt = Object.assign(Object.assign({}, F == null ? void 0 : F.style), u);
  if (y === "drag") {
    const v = B(qe, R, `${R}-drag`, {
      [`${R}-drag-uploading`]: L.some((S) => S.status === "uploading"),
      [`${R}-drag-hover`]: ue === "dragover",
      [`${R}-disabled`]: V,
      [`${R}-rtl`]: ye === "rtl"
    });
    return Ee(/* @__PURE__ */ l.createElement("span", {
      className: Oe,
      ref: J
    }, /* @__PURE__ */ l.createElement("div", {
      className: v,
      style: Nt,
      onDrop: Y,
      onDragOver: Y,
      onDragLeave: Y
    }, /* @__PURE__ */ l.createElement(Ue, Object.assign({}, Z, {
      ref: ne,
      className: `${R}-btn`
    }), /* @__PURE__ */ l.createElement("div", {
      className: `${R}-drag-container`
    }, $))), Se()));
  }
  const jt = B(R, `${R}-select`, {
    [`${R}-disabled`]: V
  }), Be = /* @__PURE__ */ l.createElement("div", {
    className: jt,
    style: $ ? void 0 : {
      display: "none"
    }
  }, /* @__PURE__ */ l.createElement(Ue, Object.assign({}, Z, {
    ref: ne
  })));
  return Ee(o === "picture-card" || o === "picture-circle" ? /* @__PURE__ */ l.createElement("span", {
    className: Oe,
    ref: J
  }, Se(Be, !!$)) : /* @__PURE__ */ l.createElement("span", {
    className: Oe,
    ref: J
  }, Be, Se()));
}, Ae = /* @__PURE__ */ l.forwardRef(Ha);
G.env.NODE_ENV !== "production" && (Ae.displayName = "Upload");
var Ba = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
    t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
};
const ft = /* @__PURE__ */ l.forwardRef((e, t) => {
  var {
    style: n,
    height: r,
    hasControlInside: i = !1
  } = e, s = Ba(e, ["style", "height", "hasControlInside"]);
  return /* @__PURE__ */ l.createElement(Ae, Object.assign({
    ref: t,
    hasControlInside: i
  }, s, {
    type: "drag",
    style: Object.assign(Object.assign({}, n), {
      height: r
    })
  }));
});
G.env.NODE_ENV !== "production" && (ft.displayName = "Dragger");
const ze = Ae;
ze.Dragger = ft;
ze.LIST_IGNORE = $e;
const { Dragger: ka } = ze;
function Va({
  initialAvatar: e,
  onImageChange: t
}) {
  const [n, r] = l.useState(!1), [i, s] = l.useState(0), [o, a] = l.useState(e || ""), { username: m } = Le.all(), c = {
    name: "file",
    multiple: !1,
    showUploadList: !1,
    accept: "image/jpeg,image/png",
    maxCount: 1,
    beforeUpload: (d) => d.type === "image/jpeg" || d.type === "image/png" ? d.size / 1024 / 1024 < 10 ? !0 : (be.error("Image must be smaller than 10MB!"), !1) : (be.error("You can only upload JPG/PNG files!"), !1),
    customRequest: async ({ file: d, onSuccess: f, onError: g, onProgress: w }) => {
      try {
        r(!0), s(0), a("");
        const C = `${m.replace(/[@.]/g, "_")}`, N = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3), I = await nt.post("/thirdparty/get-cloudinary-signature", {
          overwrite: !0,
          public_id: C,
          timestamp: N
        }), { signature: x } = I.data, y = new FormData();
        y.append("file", d), y.append("signature", x), y.append("api_key", "989326372467832"), y.append("timestamp", N.toString()), y.append("public_id", C), y.append("overwrite", "true");
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
        a($.secure_url), t($.secure_url), f == null || f($, d), be.success(`${d.name} file uploaded successfully.`);
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
      children: /* @__PURE__ */ p.jsx("div", { children: n ? /* @__PURE__ */ p.jsxs("div", { className: "text-black/90 text-sm font-normal leading-snug", children: [
        /* @__PURE__ */ p.jsx("p", { className: "mb-4", children: "Uploading..." }),
        /* @__PURE__ */ p.jsx("div", { className: z(
          "w-[88px] tablet:w-[200px] mx-auto"
        ), children: /* @__PURE__ */ p.jsx(it, { percent: i, showInfo: !1, size: "small" }) })
      ] }) : o ? /* @__PURE__ */ p.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ p.jsx(
        "img",
        {
          src: o,
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
  initialAvatarIndex: n,
  initialAvatar: r
}) {
  const i = rt(), [s, o] = l.useState("select"), [a, m] = l.useState(0), [c, d] = l.useState(""), [f, g] = l.useState(!1), [w, h] = l.useState(!1);
  l.useEffect(() => {
    e && (r ? (m(0), d(r), o("upload")) : m(n));
  }, [e]);
  const C = () => s === "upload" ? !c : !1, N = (u) => {
    m(u), d(""), h(!0);
  }, I = (u) => {
    m(0), d(u), h(!0);
  }, x = () => {
    m(n), d(r), h(!1), o("select"), t();
  }, y = async () => {
    if (!w) {
      x();
      return;
    }
    try {
      g(!0), await nt.post("/user/update-avatar", {
        avatar: c,
        avatarIndex: a
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
              onClick: () => o("select"),
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
              onClick: () => o("upload"),
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
                a === u && "ring-4 ring-[#52c41a] rounded-[28px]"
              ),
              onClick: () => N(u)
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
  const e = rt(), { data: t } = At(), [n, r] = l.useState(!1), i = () => {
    r(!0);
  }, s = (o = !1) => {
    r(!1), o && e.invalidateQueries({ queryKey: ["dailyWithdrawalLimits"] });
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "pt-[36px]", children: [
    /* @__PURE__ */ p.jsx("p", { className: "text-black text-[22px] font-bold leading-normal", children: "Settings" }),
    /* @__PURE__ */ p.jsxs("div", { className: "mt-[32px] border rounded-[8px] border-[#edf0f7] p-6", children: [
      /* @__PURE__ */ p.jsx("p", { className: "text-black text-xl font-bold leading-normal", children: "Daily transaction limit" }),
      /* @__PURE__ */ p.jsx("div", { className: "my-6 border-t border-[#dbdbdb]" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ p.jsx("p", { className: "text-[#4f4f4f] text-base font-normal leading-relaxed", children: "Manage how much you can transact daily for enhanced security and control." }),
        /* @__PURE__ */ p.jsx(Ie, { className: "hidden tablet:inline-block h-[36px]", variant: "outline", onClick: i, children: "Change limit" })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "text-[#929292] text-xs font-normal leading-relaxed mt-2 tablet:mt-1", children: zt.getAllTokens().map((o) => /* @__PURE__ */ p.jsxs("p", { children: [
        t[o.tokenType],
        " ",
        o.symbol
      ] }, o.tokenType)) }),
      /* @__PURE__ */ p.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ p.jsx(Ie, { className: "tablet:hidden h-[36px]", variant: "outline", onClick: i, children: "Change limit" }) })
    ] }),
    /* @__PURE__ */ p.jsx(
      _t,
      {
        isOpen: n,
        onClose: s,
        defaultLimits: t
      }
    )
  ] });
}
function on() {
  const { address: e, username: t } = Le.all(), { data: n } = qt(), [r, i] = l.useState(""), [s, o] = l.useState(0), [a, m] = l.useState(""), [c, d] = l.useState(!1), [f, g] = l.useState(!1);
  l.useEffect(() => {
    n && (i(n.avatar), o(n.avatarIndex), m(n.avatar || Le.getUserRandomAvatar(n.avatarIndex)));
  }, [n]);
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
                backgroundImage: `url(${a})`
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
                      src: a,
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
