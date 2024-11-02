import { a as F, R as J, p as ce, r as rn, g as ns } from "./vendor-react-D6ZgZFQ5.js";
import { c as Re } from "./vendor-ui-utils-CwlQOkPE.js";
import { g as rs, B as ss } from "./vendor-web3-B_6NVwwj.js";
const He = (t) => typeof t == "number" && !isNaN(t), Ae = (t) => typeof t == "string", fe = (t) => typeof t == "function", st = (t) => Ae(t) || fe(t) ? t : null, Ut = (t) => F.isValidElement(t) || Ae(t) || fe(t) || He(t);
function is(t, e, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: s } = t;
  requestAnimationFrame(() => {
    s.minHeight = "initial", s.height = r + "px", s.transition = `all ${n}ms`, requestAnimationFrame(() => {
      s.height = "0", s.padding = "0", s.margin = "0", setTimeout(e, n);
    });
  });
}
function mt(t) {
  let { enter: e, exit: n, appendPosition: r = !1, collapse: s = !0, collapseDuration: i = 300 } = t;
  return function(o) {
    let { children: a, position: l, preventExitTransition: c, done: u, nodeRef: d, isIn: f, playToast: y } = o;
    const p = r ? `${e}--${l}` : e, m = r ? `${n}--${l}` : n, h = F.useRef(0);
    return F.useLayoutEffect(() => {
      const w = d.current, S = p.split(" "), E = (T) => {
        T.target === d.current && (y(), w.removeEventListener("animationend", E), w.removeEventListener("animationcancel", E), h.current === 0 && T.type !== "animationcancel" && w.classList.remove(...S));
      };
      w.classList.add(...S), w.addEventListener("animationend", E), w.addEventListener("animationcancel", E);
    }, []), F.useEffect(() => {
      const w = d.current, S = () => {
        w.removeEventListener("animationend", S), s ? is(w, u, i) : u();
      };
      f || (c ? S() : (h.current = 1, w.className += ` ${m}`, w.addEventListener("animationend", S)));
    }, [f]), J.createElement(J.Fragment, null, a);
  };
}
function gn(t, e) {
  return t != null ? { content: t.content, containerId: t.props.containerId, id: t.props.toastId, theme: t.props.theme, type: t.props.type, data: t.props.data || {}, isLoading: t.props.isLoading, icon: t.props.icon, status: e } : {};
}
const se = /* @__PURE__ */ new Map();
let ze = [];
const Ht = /* @__PURE__ */ new Set(), os = (t) => Ht.forEach((e) => e(t)), ir = () => se.size > 0;
function or(t, e) {
  var n;
  if (e) return !((n = se.get(e)) == null || !n.isToastActive(t));
  let r = !1;
  return se.forEach((s) => {
    s.isToastActive(t) && (r = !0);
  }), r;
}
function ar(t, e) {
  Ut(t) && (ir() || ze.push({ content: t, options: e }), se.forEach((n) => {
    n.buildToast(t, e);
  }));
}
function mn(t, e) {
  se.forEach((n) => {
    e != null && e != null && e.containerId ? (e == null ? void 0 : e.containerId) === n.id && n.toggle(t, e == null ? void 0 : e.id) : n.toggle(t, e == null ? void 0 : e.id);
  });
}
function as(t) {
  const { subscribe: e, getSnapshot: n, setProps: r } = F.useRef(function(i) {
    const o = i.containerId || 1;
    return { subscribe(a) {
      const l = /* @__PURE__ */ function(u, d, f) {
        let y = 1, p = 0, m = [], h = [], w = [], S = d;
        const E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set(), v = () => {
          w = Array.from(E.values()), T.forEach((R) => R());
        }, B = (R) => {
          h = R == null ? [] : h.filter((_) => _ !== R), v();
        }, L = (R) => {
          const { toastId: _, onOpen: U, updateId: H, children: ue } = R.props, he = H == null;
          R.staleId && E.delete(R.staleId), E.set(_, R), h = [...h, R.props.toastId].filter((Y) => Y !== R.staleId), v(), f(gn(R, he ? "added" : "updated")), he && fe(U) && U(F.isValidElement(ue) && ue.props);
        };
        return { id: u, props: S, observe: (R) => (T.add(R), () => T.delete(R)), toggle: (R, _) => {
          E.forEach((U) => {
            _ != null && _ !== U.props.toastId || fe(U.toggle) && U.toggle(R);
          });
        }, removeToast: B, toasts: E, clearQueue: () => {
          p -= m.length, m = [];
        }, buildToast: (R, _) => {
          if (((A) => {
            let { containerId: P, toastId: C, updateId: D } = A;
            const N = P ? P !== u : u !== 1, k = E.has(C) && D == null;
            return N || k;
          })(_)) return;
          const { toastId: U, updateId: H, data: ue, staleId: he, delay: Y } = _, re = () => {
            B(U);
          }, Q = H == null;
          Q && p++;
          const X = { ...S, style: S.toastStyle, key: y++, ...Object.fromEntries(Object.entries(_).filter((A) => {
            let [P, C] = A;
            return C != null;
          })), toastId: U, updateId: H, data: ue, closeToast: re, isIn: !1, className: st(_.className || S.toastClassName), bodyClassName: st(_.bodyClassName || S.bodyClassName), progressClassName: st(_.progressClassName || S.progressClassName), autoClose: !_.isLoading && (q = _.autoClose, Z = S.autoClose, q === !1 || He(q) && q > 0 ? q : Z), deleteToast() {
            const A = E.get(U), { onClose: P, children: C } = A.props;
            fe(P) && P(F.isValidElement(C) && C.props), f(gn(A, "removed")), E.delete(U), p--, p < 0 && (p = 0), m.length > 0 ? L(m.shift()) : v();
          } };
          var q, Z;
          X.closeButton = S.closeButton, _.closeButton === !1 || Ut(_.closeButton) ? X.closeButton = _.closeButton : _.closeButton === !0 && (X.closeButton = !Ut(S.closeButton) || S.closeButton);
          let b = R;
          F.isValidElement(R) && !Ae(R.type) ? b = F.cloneElement(R, { closeToast: re, toastProps: X, data: ue }) : fe(R) && (b = R({ closeToast: re, toastProps: X, data: ue }));
          const x = { content: b, props: X, staleId: he };
          S.limit && S.limit > 0 && p > S.limit && Q ? m.push(x) : He(Y) ? setTimeout(() => {
            L(x);
          }, Y) : L(x);
        }, setProps(R) {
          S = R;
        }, setToggle: (R, _) => {
          E.get(R).toggle = _;
        }, isToastActive: (R) => h.some((_) => _ === R), getSnapshot: () => w };
      }(o, i, os);
      se.set(o, l);
      const c = l.observe(a);
      return ze.forEach((u) => ar(u.content, u.options)), ze = [], () => {
        c(), se.delete(o);
      };
    }, setProps(a) {
      var l;
      (l = se.get(o)) == null || l.setProps(a);
    }, getSnapshot() {
      var a;
      return (a = se.get(o)) == null ? void 0 : a.getSnapshot();
    } };
  }(t)).current;
  r(t);
  const s = F.useSyncExternalStore(e, n, n);
  return { getToastToRender: function(i) {
    if (!s) return [];
    const o = /* @__PURE__ */ new Map();
    return t.newestOnTop && s.reverse(), s.forEach((a) => {
      const { position: l } = a.props;
      o.has(l) || o.set(l, []), o.get(l).push(a);
    }), Array.from(o, (a) => i(a[0], a[1]));
  }, isToastActive: or, count: s == null ? void 0 : s.length };
}
function ls(t) {
  const [e, n] = F.useState(!1), [r, s] = F.useState(!1), i = F.useRef(null), o = F.useRef({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: !0, canDrag: !1, didMove: !1 }).current, { autoClose: a, pauseOnHover: l, closeToast: c, onClick: u, closeOnClick: d } = t;
  var f, y;
  function p() {
    n(!0);
  }
  function m() {
    n(!1);
  }
  function h(E) {
    const T = i.current;
    o.canDrag && T && (o.didMove = !0, e && m(), o.delta = t.draggableDirection === "x" ? E.clientX - o.start : E.clientY - o.start, o.start !== E.clientX && (o.canCloseOnClick = !1), T.style.transform = `translate3d(${t.draggableDirection === "x" ? `${o.delta}px, var(--y)` : `0, calc(${o.delta}px + var(--y))`},0)`, T.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance)));
  }
  function w() {
    document.removeEventListener("pointermove", h), document.removeEventListener("pointerup", w);
    const E = i.current;
    if (o.canDrag && o.didMove && E) {
      if (o.canDrag = !1, Math.abs(o.delta) > o.removalDistance) return s(!0), t.closeToast(), void t.collapseAll();
      E.style.transition = "transform 0.2s, opacity 0.2s", E.style.removeProperty("transform"), E.style.removeProperty("opacity");
    }
  }
  (y = se.get((f = { id: t.toastId, containerId: t.containerId, fn: n }).containerId || 1)) == null || y.setToggle(f.id, f.fn), F.useEffect(() => {
    if (t.pauseOnFocusLoss) return document.hasFocus() || m(), window.addEventListener("focus", p), window.addEventListener("blur", m), () => {
      window.removeEventListener("focus", p), window.removeEventListener("blur", m);
    };
  }, [t.pauseOnFocusLoss]);
  const S = { onPointerDown: function(E) {
    if (t.draggable === !0 || t.draggable === E.pointerType) {
      o.didMove = !1, document.addEventListener("pointermove", h), document.addEventListener("pointerup", w);
      const T = i.current;
      o.canCloseOnClick = !0, o.canDrag = !0, T.style.transition = "none", t.draggableDirection === "x" ? (o.start = E.clientX, o.removalDistance = T.offsetWidth * (t.draggablePercent / 100)) : (o.start = E.clientY, o.removalDistance = T.offsetHeight * (t.draggablePercent === 80 ? 1.5 * t.draggablePercent : t.draggablePercent) / 100);
    }
  }, onPointerUp: function(E) {
    const { top: T, bottom: v, left: B, right: L } = i.current.getBoundingClientRect();
    E.nativeEvent.type !== "touchend" && t.pauseOnHover && E.clientX >= B && E.clientX <= L && E.clientY >= T && E.clientY <= v ? m() : p();
  } };
  return a && l && (S.onMouseEnter = m, t.stacked || (S.onMouseLeave = p)), d && (S.onClick = (E) => {
    u && u(E), o.canCloseOnClick && c();
  }), { playToast: p, pauseToast: m, isRunning: e, preventExitTransition: r, toastRef: i, eventHandlers: S };
}
function us(t) {
  let { delay: e, isRunning: n, closeToast: r, type: s = "default", hide: i, className: o, style: a, controlledProgress: l, progress: c, rtl: u, isIn: d, theme: f } = t;
  const y = i || l && c === 0, p = { ...a, animationDuration: `${e}ms`, animationPlayState: n ? "running" : "paused" };
  l && (p.transform = `scaleX(${c})`);
  const m = Re("Toastify__progress-bar", l ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${s}`, { "Toastify__progress-bar--rtl": u }), h = fe(o) ? o({ rtl: u, type: s, defaultClassName: m }) : Re(m, o), w = { [l && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: l && c < 1 ? null : () => {
    d && r();
  } };
  return J.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": y }, J.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${s}` }), J.createElement("div", { role: "progressbar", "aria-hidden": y ? "true" : "false", "aria-label": "notification timer", className: h, style: p, ...w }));
}
let cs = 1;
const lr = () => "" + cs++;
function fs(t) {
  return t && (Ae(t.toastId) || He(t.toastId)) ? t.toastId : lr();
}
function je(t, e) {
  return ar(t, e), e.toastId;
}
function lt(t, e) {
  return { ...e, type: e && e.type || t, toastId: fs(e) };
}
function Qe(t) {
  return (e, n) => je(e, lt(t, n));
}
function W(t, e) {
  return je(t, lt("default", e));
}
W.loading = (t, e) => je(t, lt("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...e })), W.promise = function(t, e, n) {
  let r, { pending: s, error: i, success: o } = e;
  s && (r = Ae(s) ? W.loading(s, n) : W.loading(s.render, { ...n, ...s }));
  const a = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (u, d, f) => {
    if (d == null) return void W.dismiss(r);
    const y = { type: u, ...a, ...n, data: f }, p = Ae(d) ? { render: d } : d;
    return r ? W.update(r, { ...y, ...p }) : W(p.render, { ...y, ...p }), f;
  }, c = fe(t) ? t() : t;
  return c.then((u) => l("success", o, u)).catch((u) => l("error", i, u)), c;
}, W.success = Qe("success"), W.info = Qe("info"), W.error = Qe("error"), W.warning = Qe("warning"), W.warn = W.warning, W.dark = (t, e) => je(t, lt("default", { theme: "dark", ...e })), W.dismiss = function(t) {
  (function(e) {
    var n;
    if (ir()) {
      if (e == null || Ae(n = e) || He(n)) se.forEach((r) => {
        r.removeToast(e);
      });
      else if (e && ("containerId" in e || "id" in e)) {
        const r = se.get(e.containerId);
        r ? r.removeToast(e.id) : se.forEach((s) => {
          s.removeToast(e.id);
        });
      }
    } else ze = ze.filter((r) => e != null && r.options.toastId !== e);
  })(t);
}, W.clearWaitingQueue = function(t) {
  t === void 0 && (t = {}), se.forEach((e) => {
    !e.props.limit || t.containerId && e.id !== t.containerId || e.clearQueue();
  });
}, W.isActive = or, W.update = function(t, e) {
  e === void 0 && (e = {});
  const n = ((r, s) => {
    var i;
    let { containerId: o } = s;
    return (i = se.get(o || 1)) == null ? void 0 : i.toasts.get(r);
  })(t, e);
  if (n) {
    const { props: r, content: s } = n, i = { delay: 100, ...r, ...e, toastId: e.toastId || t, updateId: lr() };
    i.toastId !== t && (i.staleId = t);
    const o = i.render || s;
    delete i.render, je(o, i);
  }
}, W.done = (t) => {
  W.update(t, { progress: 1 });
}, W.onChange = function(t) {
  return Ht.add(t), () => {
    Ht.delete(t);
  };
}, W.play = (t) => mn(!0, t), W.pause = (t) => mn(!1, t);
const ds = typeof window < "u" ? F.useLayoutEffect : F.useEffect, Xe = (t) => {
  let { theme: e, type: n, isLoading: r, ...s } = t;
  return J.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`, ...s });
}, Ct = { info: function(t) {
  return J.createElement(Xe, { ...t }, J.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(t) {
  return J.createElement(Xe, { ...t }, J.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(t) {
  return J.createElement(Xe, { ...t }, J.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(t) {
  return J.createElement(Xe, { ...t }, J.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return J.createElement("div", { className: "Toastify__spinner" });
} }, ps = (t) => {
  const { isRunning: e, preventExitTransition: n, toastRef: r, eventHandlers: s, playToast: i } = ls(t), { closeButton: o, children: a, autoClose: l, onClick: c, type: u, hideProgressBar: d, closeToast: f, transition: y, position: p, className: m, style: h, bodyClassName: w, bodyStyle: S, progressClassName: E, progressStyle: T, updateId: v, role: B, progress: L, rtl: R, toastId: _, deleteToast: U, isIn: H, isLoading: ue, closeOnClick: he, theme: Y } = t, re = Re("Toastify__toast", `Toastify__toast-theme--${Y}`, `Toastify__toast--${u}`, { "Toastify__toast--rtl": R }, { "Toastify__toast--close-on-click": he }), Q = fe(m) ? m({ rtl: R, position: p, type: u, defaultClassName: re }) : Re(re, m), X = function(x) {
    let { theme: A, type: P, isLoading: C, icon: D } = x, N = null;
    const k = { theme: A, type: P };
    return D === !1 || (fe(D) ? N = D({ ...k, isLoading: C }) : F.isValidElement(D) ? N = F.cloneElement(D, k) : C ? N = Ct.spinner() : ((M) => M in Ct)(P) && (N = Ct[P](k))), N;
  }(t), q = !!L || !l, Z = { closeToast: f, type: u, theme: Y };
  let b = null;
  return o === !1 || (b = fe(o) ? o(Z) : F.isValidElement(o) ? F.cloneElement(o, Z) : function(x) {
    let { closeToast: A, theme: P, ariaLabel: C = "close" } = x;
    return J.createElement("button", { className: `Toastify__close-button Toastify__close-button--${P}`, type: "button", onClick: (D) => {
      D.stopPropagation(), A(D);
    }, "aria-label": C }, J.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, J.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }(Z)), J.createElement(y, { isIn: H, done: U, position: p, preventExitTransition: n, nodeRef: r, playToast: i }, J.createElement("div", { id: _, onClick: c, "data-in": H, className: Q, ...s, style: h, ref: r }, J.createElement("div", { ...H && { role: B }, className: fe(w) ? w({ type: u }) : Re("Toastify__toast-body", w), style: S }, X != null && J.createElement("div", { className: Re("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !ue }) }, X), J.createElement("div", null, a)), b, J.createElement(us, { ...v && !q ? { key: `pb-${v}` } : {}, rtl: R, theme: Y, delay: l, isRunning: e, isIn: H, closeToast: f, hide: d, type: u, style: T, className: E, controlledProgress: q, progress: L || 0 })));
}, yt = function(t, e) {
  return e === void 0 && (e = !1), { enter: `Toastify--animate Toastify__${t}-enter`, exit: `Toastify--animate Toastify__${t}-exit`, appendPosition: e };
}, hs = mt(yt("bounce", !0));
mt(yt("slide", !0));
const Ia = mt(yt("zoom"));
mt(yt("flip"));
const gs = { position: "top-right", transition: hs, autoClose: 5e3, closeButton: !0, pauseOnHover: !0, pauseOnFocusLoss: !0, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
function Da(t) {
  let e = { ...gs, ...t };
  const n = t.stacked, [r, s] = F.useState(!0), i = F.useRef(null), { getToastToRender: o, isToastActive: a, count: l } = as(e), { className: c, style: u, rtl: d, containerId: f } = e;
  function y(m) {
    const h = Re("Toastify__toast-container", `Toastify__toast-container--${m}`, { "Toastify__toast-container--rtl": d });
    return fe(c) ? c({ position: m, rtl: d, defaultClassName: h }) : Re(h, st(c));
  }
  function p() {
    n && (s(!0), W.play());
  }
  return ds(() => {
    if (n) {
      var m;
      const h = i.current.querySelectorAll('[data-in="true"]'), w = 12, S = (m = e.position) == null ? void 0 : m.includes("top");
      let E = 0, T = 0;
      Array.from(h).reverse().forEach((v, B) => {
        const L = v;
        L.classList.add("Toastify__toast--stacked"), B > 0 && (L.dataset.collapsed = `${r}`), L.dataset.pos || (L.dataset.pos = S ? "top" : "bot");
        const R = E * (r ? 0.2 : 1) + (r ? 0 : w * B);
        L.style.setProperty("--y", `${S ? R : -1 * R}px`), L.style.setProperty("--g", `${w}`), L.style.setProperty("--s", "" + (1 - (r ? T : 0))), E += L.offsetHeight, T += 0.025;
      });
    }
  }, [r, l, n]), J.createElement("div", { ref: i, className: "Toastify", id: f, onMouseEnter: () => {
    n && (s(!1), W.pause());
  }, onMouseLeave: p }, o((m, h) => {
    const w = h.length ? { ...u } : { ...u, pointerEvents: "none" };
    return J.createElement("div", { className: y(m), style: w, key: `container-${m}` }, h.map((S) => {
      let { content: E, props: T } = S;
      return J.createElement(ps, { ...T, stacked: n, collapseAll: p, isIn: a(T.toastId, T.containerId), style: T.style, key: `toast-${T.key}` }, E);
    }));
  }));
}
const I = (t) => typeof t == "string", Me = () => {
  let t, e;
  const n = new Promise((r, s) => {
    t = r, e = s;
  });
  return n.resolve = t, n.reject = e, n;
}, yn = (t) => t == null ? "" : "" + t, ms = (t, e, n) => {
  t.forEach((r) => {
    e[r] && (n[r] = e[r]);
  });
}, ys = /###/g, vn = (t) => t && t.indexOf("###") > -1 ? t.replace(ys, ".") : t, bn = (t) => !t || I(t), Ue = (t, e, n) => {
  const r = I(e) ? e.split(".") : e;
  let s = 0;
  for (; s < r.length - 1; ) {
    if (bn(t)) return {};
    const i = vn(r[s]);
    !t[i] && n && (t[i] = new n()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}, ++s;
  }
  return bn(t) ? {} : {
    obj: t,
    k: vn(r[s])
  };
}, En = (t, e, n) => {
  const {
    obj: r,
    k: s
  } = Ue(t, e, Object);
  if (r !== void 0 || e.length === 1) {
    r[s] = n;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), a = Ue(t, o, Object);
  for (; a.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), a = Ue(t, o, Object), a && a.obj && typeof a.obj[`${a.k}.${i}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${i}`] = n;
}, vs = (t, e, n, r) => {
  const {
    obj: s,
    k: i
  } = Ue(t, e, Object);
  s[i] = s[i] || [], s[i].push(n);
}, ut = (t, e) => {
  const {
    obj: n,
    k: r
  } = Ue(t, e);
  if (n)
    return n[r];
}, bs = (t, e, n) => {
  const r = ut(t, n);
  return r !== void 0 ? r : ut(e, n);
}, ur = (t, e, n) => {
  for (const r in e)
    r !== "__proto__" && r !== "constructor" && (r in t ? I(t[r]) || t[r] instanceof String || I(e[r]) || e[r] instanceof String ? n && (t[r] = e[r]) : ur(t[r], e[r], n) : t[r] = e[r]);
  return t;
}, De = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Es = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const ws = (t) => I(t) ? t.replace(/[&<>"'\/]/g, (e) => Es[e]) : t;
class Ss {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const n = this.regExpMap.get(e);
    if (n !== void 0)
      return n;
    const r = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, r), this.regExpQueue.push(e), r;
  }
}
const Ts = [" ", ",", "?", "!", ";"], xs = new Ss(20), Os = (t, e, n) => {
  e = e || "", n = n || "";
  const r = Ts.filter((o) => e.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const s = xs.getRegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !s.test(t);
  if (!i) {
    const o = t.indexOf(n);
    o > 0 && !s.test(t.substring(0, o)) && (i = !0);
  }
  return i;
}, zt = function(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!t) return;
  if (t[e]) return t[e];
  const r = e.split(n);
  let s = t;
  for (let i = 0; i < r.length; ) {
    if (!s || typeof s != "object")
      return;
    let o, a = "";
    for (let l = i; l < r.length; ++l)
      if (l !== i && (a += n), a += r[l], o = s[a], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && l < r.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    s = o;
  }
  return s;
}, ct = (t) => t && t.replace("_", "-"), Rs = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    console && console[t] && console[t].apply(console, e);
  }
};
class ft {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, n);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = e || Rs, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, n, r, s) {
    return s && !this.debug ? null : (I(e[0]) && (e[0] = `${r}${this.prefix} ${e[0]}`), this.logger[n](e));
  }
  create(e) {
    return new ft(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new ft(this.logger, e);
  }
}
var we = new ft();
class vt {
  constructor() {
    this.observers = {};
  }
  on(e, n) {
    return e.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const s = this.observers[r].get(n) || 0;
      this.observers[r].set(n, s + 1);
    }), this;
  }
  off(e, n) {
    if (this.observers[e]) {
      if (!n) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(n);
    }
  }
  emit(e) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    this.observers[e] && Array.from(this.observers[e].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((o) => {
      let [a, l] = o;
      for (let c = 0; c < l; c++)
        a.apply(a, [e, ...r]);
    });
  }
}
class wn extends vt {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = e || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const n = this.options.ns.indexOf(e);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    e.indexOf(".") > -1 ? a = e.split(".") : (a = [e, n], r && (Array.isArray(r) ? a.push(...r) : I(r) && i ? a.push(...r.split(i)) : a.push(r)));
    const l = ut(this.data, a);
    return !l && !n && !r && e.indexOf(".") > -1 && (e = a[0], n = a[1], r = a.slice(2).join(".")), l || !o || !I(r) ? l : zt(this.data && this.data[e] && this.data[e][n], r, i);
  }
  addResource(e, n, r, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let a = [e, n];
    r && (a = a.concat(o ? r.split(o) : r)), e.indexOf(".") > -1 && (a = e.split("."), s = n, n = a[1]), this.addNamespaces(n), En(this.data, a, s), i.silent || this.emit("added", e, n, r, s);
  }
  addResources(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (I(r[i]) || Array.isArray(r[i])) && this.addResource(e, n, i, r[i], {
        silent: !0
      });
    s.silent || this.emit("added", e, n, r);
  }
  addResourceBundle(e, n, r, s, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [e, n];
    e.indexOf(".") > -1 && (a = e.split("."), s = r, r = n, n = a[1]), this.addNamespaces(n);
    let l = ut(this.data, a) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))), s ? ur(l, r, i) : l = {
      ...l,
      ...r
    }, En(this.data, a, l), o.silent || this.emit("added", e, n, r);
  }
  removeResourceBundle(e, n) {
    this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n);
  }
  hasResourceBundle(e, n) {
    return this.getResource(e, n) !== void 0;
  }
  getResourceBundle(e, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(e, n)
    } : this.getResource(e, n);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const n = this.getDataByLanguage(e);
    return !!(n && Object.keys(n) || []).find((s) => n[s] && Object.keys(n[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var cr = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, n, r, s) {
    return t.forEach((i) => {
      this.processors[i] && (e = this.processors[i].process(e, n, r, s));
    }), e;
  }
};
const Sn = {};
class dt extends vt {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), ms(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = we.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (e == null)
      return !1;
    const r = this.resolve(e, n);
    return r && r.res !== void 0;
  }
  extractFromKey(e, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = r && e.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Os(e, r, s);
    if (o && !a) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: e,
          namespaces: i
        };
      const c = e.split(r);
      (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), e = c.join(s);
    }
    return I(i) && (i = [i]), {
      key: e,
      namespaces: i
    };
  }
  translate(e, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), e == null) return "";
    Array.isArray(e) || (e = [String(e)]);
    const s = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: a
    } = this.extractFromKey(e[e.length - 1], n), l = a[a.length - 1], c = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (u) {
        const T = n.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${l}${T}${o}`,
          usedKey: o,
          exactUsedKey: o,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${T}${o}`;
      }
      return s ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : o;
    }
    const d = this.resolve(e, n);
    let f = d && d.res;
    const y = d && d.usedKey || o, p = d && d.exactUsedKey || o, m = Object.prototype.toString.apply(f), h = ["[object Number]", "[object Function]", "[object RegExp]"], w = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject, E = !I(f) && typeof f != "boolean" && typeof f != "number";
    if (S && f && E && h.indexOf(m) < 0 && !(I(w) && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const T = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, f, {
          ...n,
          ns: a
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return s ? (d.res = T, d.usedParams = this.getUsedParamsDetails(n), d) : T;
      }
      if (i) {
        const T = Array.isArray(f), v = T ? [] : {}, B = T ? p : y;
        for (const L in f)
          if (Object.prototype.hasOwnProperty.call(f, L)) {
            const R = `${B}${i}${L}`;
            v[L] = this.translate(R, {
              ...n,
              joinArrays: !1,
              ns: a
            }), v[L] === R && (v[L] = f[L]);
          }
        f = v;
      }
    } else if (S && I(w) && Array.isArray(f))
      f = f.join(w), f && (f = this.extendTranslation(f, e, n, r));
    else {
      let T = !1, v = !1;
      const B = n.count !== void 0 && !I(n.count), L = dt.hasDefaultValue(n), R = B ? this.pluralResolver.getSuffix(c, n.count, n) : "", _ = n.ordinal && B ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", U = B && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), H = U && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${R}`] || n[`defaultValue${_}`] || n.defaultValue;
      !this.isValidLookup(f) && L && (T = !0, f = H), this.isValidLookup(f) || (v = !0, f = o);
      const he = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && v ? void 0 : f, Y = L && H !== f && this.options.updateMissing;
      if (v || T || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", c, l, o, Y ? H : f), i) {
          const q = this.resolve(o, {
            ...n,
            keySeparator: !1
          });
          q && q.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let re = [];
        const Q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Q && Q[0])
          for (let q = 0; q < Q.length; q++)
            re.push(Q[q]);
        else this.options.saveMissingTo === "all" ? re = this.languageUtils.toResolveHierarchy(n.lng || this.language) : re.push(n.lng || this.language);
        const X = (q, Z, b) => {
          const x = L && b !== f ? b : he;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(q, l, Z, x, Y, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(q, l, Z, x, Y, n), this.emit("missingKey", q, l, Z, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && B ? re.forEach((q) => {
          const Z = this.pluralResolver.getSuffixes(q, n);
          U && n[`defaultValue${this.options.pluralSeparator}zero`] && Z.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Z.push(`${this.options.pluralSeparator}zero`), Z.forEach((b) => {
            X([q], o + b, n[`defaultValue${b}`] || H);
          });
        }) : X(re, o, H));
      }
      f = this.extendTranslation(f, e, n, d, r), v && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`), (v || T) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, T ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return s ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(e, n, r, s, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = I(e) && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (c) {
        const f = e.match(this.interpolator.nestingRegexp);
        u = f && f.length;
      }
      let d = r.replace && !I(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), e = this.interpolator.interpolate(e, d, r.lng || this.language || s.usedLng, r), c) {
        const f = e.match(this.interpolator.nestingRegexp), y = f && f.length;
        u < y && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (r.lng = this.language || s.usedLng), r.nest !== !1 && (e = this.interpolator.nest(e, function() {
        for (var f = arguments.length, y = new Array(f), p = 0; p < f; p++)
          y[p] = arguments[p];
        return i && i[0] === y[0] && !r.context ? (o.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${n[0]}`), null) : o.translate(...y, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, l = I(a) ? [a] : a;
    return e != null && l && l.length && r.applyPostProcessor !== !1 && (e = cr.handle(l, e, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), e;
  }
  resolve(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, s, i, o, a;
    return I(e) && (e = [e]), e.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      s = u;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && !I(n.count), y = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), p = n.context !== void 0 && (I(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((h) => {
        this.isValidLookup(r) || (a = h, !Sn[`${m[0]}-${h}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Sn[`${m[0]}-${h}`] = !0, this.logger.warn(`key "${s}" for languages "${m.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((w) => {
          if (this.isValidLookup(r)) return;
          o = w;
          const S = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(S, u, w, h, n);
          else {
            let T;
            f && (T = this.pluralResolver.getSuffix(w, n.count, n));
            const v = `${this.options.pluralSeparator}zero`, B = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && (S.push(u + T), n.ordinal && T.indexOf(B) === 0 && S.push(u + T.replace(B, this.options.pluralSeparator)), y && S.push(u + v)), p) {
              const L = `${u}${this.options.contextSeparator}${n.context}`;
              S.push(L), f && (S.push(L + T), n.ordinal && T.indexOf(B) === 0 && S.push(L + T.replace(B, this.options.pluralSeparator)), y && S.push(L + v));
            }
          }
          let E;
          for (; E = S.pop(); )
            this.isValidLookup(r) || (i = E, r = this.getResource(w, h, E, n));
        }));
      });
    }), {
      res: r,
      usedKey: s,
      exactUsedKey: i,
      usedLng: o,
      usedNS: a
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, r, s) : this.resourceStore.getResource(e, n, r, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = e.replace && !I(e.replace);
    let s = r ? e.replace : e;
    if (r && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !r) {
      s = {
        ...s
      };
      for (const i of n)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const n = "defaultValue";
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r) && n === r.substring(0, n.length) && e[r] !== void 0)
        return !0;
    return !1;
  }
}
const Pt = (t) => t.charAt(0).toUpperCase() + t.slice(1);
class Tn {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = we.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = ct(e), !e || e.indexOf("-") < 0) return null;
    const n = e.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = ct(e), !e || e.indexOf("-") < 0) return e;
    const n = e.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(e) {
    if (I(e) && e.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let s = Intl.getCanonicalLocales(e)[0];
          if (s && this.options.lowerCaseLng && (s = s.toLowerCase()), s) return s;
        } catch {
        }
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = e.split("-");
      return this.options.lowerCaseLng ? r = r.map((s) => s.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Pt(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Pt(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Pt(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let n;
    return e.forEach((r) => {
      if (n) return;
      const s = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
    }), !n && this.options.supportedLngs && e.forEach((r) => {
      if (n) return;
      const s = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(s)) return n = s;
      n = this.options.supportedLngs.find((i) => {
        if (i === s) return i;
        if (!(i.indexOf("-") < 0 && s.indexOf("-") < 0) && (i.indexOf("-") > 0 && s.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === s || i.indexOf(s) === 0 && s.length > 1))
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(e, n) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(n)), I(e) && (e = [e]), Array.isArray(e)) return e;
    if (!n) return e.default || [];
    let r = e[n];
    return r || (r = e[this.getScriptPartFromCode(n)]), r || (r = e[this.formatLanguageCode(n)]), r || (r = e[this.getLanguagePartFromCode(n)]), r || (r = e.default), r || [];
  }
  toResolveHierarchy(e, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], e), s = [], i = (o) => {
      o && (this.isSupportedCode(o) ? s.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return I(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : I(e) && i(this.formatLanguageCode(e)), r.forEach((o) => {
      s.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), s;
  }
}
let Cs = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Ps = {
  1: (t) => +(t > 1),
  2: (t) => +(t != 1),
  3: (t) => 0,
  4: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  5: (t) => t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5,
  6: (t) => t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2,
  7: (t) => t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  8: (t) => t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3,
  9: (t) => +(t >= 2),
  10: (t) => t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4,
  11: (t) => t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3,
  12: (t) => +(t % 10 != 1 || t % 100 == 11),
  13: (t) => +(t !== 0),
  14: (t) => t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3,
  15: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2,
  16: (t) => t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2,
  17: (t) => t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1,
  18: (t) => t == 0 ? 0 : t == 1 ? 1 : 2,
  19: (t) => t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3,
  20: (t) => t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2,
  21: (t) => t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0,
  22: (t) => t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
};
const Ls = ["v1", "v2", "v3"], As = ["v4"], xn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ns = () => {
  const t = {};
  return Cs.forEach((e) => {
    e.lngs.forEach((n) => {
      t[n] = {
        numbers: e.nr,
        plurals: Ps[e.fc]
      };
    });
  }), t;
};
class _s {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = e, this.options = n, this.logger = we.create("pluralResolver"), (!this.options.compatibilityJSON || As.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Ns(), this.pluralRulesCache = {};
  }
  addRule(e, n) {
    this.rules[e] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = ct(e === "dev" ? "en" : e), s = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
          cleanedCode: r,
          type: s
        });
        if (i in this.pluralRulesCache)
          return this.pluralRulesCache[i];
        const o = new Intl.PluralRules(r, {
          type: s
        });
        return this.pluralRulesCache[i] = o, o;
      } catch {
        return;
      }
    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
  }
  needsPlural(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, r).map((s) => `${n}${s}`);
  }
  getSuffixes(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(e, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((s, i) => xn[s] - xn[i]).map((s) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : r.numbers.map((s) => this.getSuffix(e, s, n)) : [];
  }
  getSuffix(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, r);
    return s ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : this.getSuffixRetroCompatible(s, n) : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, n) {
    const r = e.noAbs ? e.plurals(n) : e.plurals(Math.abs(n));
    let s = e.numbers[r];
    this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
    const i = () => this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? `_plural_${s.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !Ls.includes(this.options.compatibilityJSON);
  }
}
const On = function(t, e, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = bs(t, e, n);
  return !i && s && I(n) && (i = zt(t, n, r), i === void 0 && (i = zt(e, n, r))), i;
}, Lt = (t) => t.replace(/\$/g, "$$$$");
class Is {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = we.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || ((n) => n), this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: o,
      suffix: a,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: y,
      nestingSuffix: p,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: h,
      maxReplaces: w,
      alwaysFormat: S
    } = e.interpolation;
    this.escape = n !== void 0 ? n : ws, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? De(i) : o || "{{", this.suffix = a ? De(a) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = f ? De(f) : y || De("$t("), this.nestingSuffix = p ? De(p) : m || De(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = w || 1e3, this.alwaysFormat = S !== void 0 ? S : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(e, n, r, s) {
    let i, o, a;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (y) => {
      if (y.indexOf(this.formatSeparator) < 0) {
        const w = On(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(w, void 0, r, {
          ...s,
          ...n,
          interpolationkey: y
        }) : w;
      }
      const p = y.split(this.formatSeparator), m = p.shift().trim(), h = p.join(this.formatSeparator).trim();
      return this.format(On(n, l, m, this.options.keySeparator, this.options.ignoreJSONStructure), h, r, {
        ...s,
        ...n,
        interpolationkey: m
      });
    };
    this.resetRegExp();
    const u = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, d = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (y) => Lt(y)
    }, {
      regex: this.regexp,
      safeValue: (y) => this.escapeValue ? Lt(this.escape(y)) : Lt(y)
    }].forEach((y) => {
      for (a = 0; i = y.regex.exec(e); ) {
        const p = i[1].trim();
        if (o = c(p), o === void 0)
          if (typeof u == "function") {
            const h = u(e, i, s);
            o = I(h) ? h : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, p))
            o = "";
          else if (d) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${p} for interpolating ${e}`), o = "";
        else !I(o) && !this.useRawValueToEscape && (o = yn(o));
        const m = y.safeValue(o);
        if (e = e.replace(i[0], m), d ? (y.regex.lastIndex += o.length, y.regex.lastIndex -= i[0].length) : y.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, i, o;
    const a = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const d = l.split(new RegExp(`${u}[ ]*{`));
      let f = `{${d[1]}`;
      l = d[0], f = this.interpolate(f, o);
      const y = f.match(/'/g), p = f.match(/"/g);
      (y && y.length % 2 === 0 && !p || p.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        o = JSON.parse(f), c && (o = {
          ...c,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${u}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let l = [];
      o = {
        ...r
      }, o = o.replace && !I(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const u = s[1].split(this.formatSeparator).map((d) => d.trim());
        s[1] = u.shift(), l = u, c = !0;
      }
      if (i = n(a.call(this, s[1].trim(), o), o), i && s[0] === e && !I(i)) return i;
      I(i) || (i = yn(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), i = ""), c && (i = l.reduce((u, d) => this.format(u, d, r.lng, {
        ...r,
        interpolationkey: s[1].trim()
      }), i.trim())), e = e.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Ds = (t) => {
  let e = t.toLowerCase().trim();
  const n = {};
  if (t.indexOf("(") > -1) {
    const r = t.split("(");
    e = r[0].toLowerCase().trim();
    const s = r[1].substring(0, r[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach((o) => {
      if (o) {
        const [a, ...l] = o.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = a.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: n
  };
}, ke = (t) => {
  const e = {};
  return (n, r, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const o = r + JSON.stringify(i);
    let a = e[o];
    return a || (a = t(ct(r), s), e[o] = a), a(n);
  };
};
class ks {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = we.create("formatter"), this.options = e, this.formats = {
      number: ke((n, r) => (s) => new Intl.NumberFormat(n, {
        ...r
      }).format(s)),
      currency: ke((n, r) => (s) => new Intl.NumberFormat(n, {
        ...r,
        style: "currency"
      }).format(s)),
      datetime: ke((n, r) => (s) => new Intl.DateTimeFormat(n, {
        ...r
      }).format(s)),
      relativetime: ke((n, r) => (s) => new Intl.RelativeTimeFormat(n, {
        ...r
      }).format(s, r.range || "day")),
      list: ke((n, r) => (s) => new Intl.ListFormat(n, {
        ...r
      }).format(s))
    }, this.init(e);
  }
  init(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(e, n) {
    this.formats[e.toLowerCase().trim()] = n;
  }
  addCached(e, n) {
    this.formats[e.toLowerCase().trim()] = ke(n);
  }
  format(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((a) => a.indexOf(")") > -1)) {
      const a = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, a)].join(this.formatSeparator);
    }
    return i.reduce((a, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = Ds(l);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = s && s.formatParams && s.formatParams[s.interpolationkey] || {}, y = f.locale || f.lng || s.locale || s.lng || r;
          d = this.formats[c](a, y, {
            ...u,
            ...s,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, e);
  }
}
const $s = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Bs extends vt {
  constructor(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = e, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = s, this.logger = we.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(e, n, r, s) {
    const i = {}, o = {}, a = {}, l = {};
    return e.forEach((c) => {
      let u = !0;
      n.forEach((d) => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? o[f] === void 0 && (o[f] = !0) : (this.state[f] = 1, u = !1, o[f] === void 0 && (o[f] = !0), i[f] === void 0 && (i[f] = !0), l[d] === void 0 && (l[d] = !0)));
      }), u || (a[c] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(e, n, r) {
    const s = e.split("|"), i = s[0], o = s[1];
    n && this.emit("failedLoading", i, o, n), !n && r && this.store.addResourceBundle(i, o, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = n ? -1 : 2, n && r && (this.state[e] = 0);
    const a = {};
    this.queue.forEach((l) => {
      vs(l.loaded, [i], o), $s(l, e), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((l) => !l.done);
  }
  read(e, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, o = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: n,
        fcName: r,
        tried: s,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const a = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && u && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, n, r, s + 1, i * 2, o);
        }, i);
        return;
      }
      o(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(e, n);
        c && typeof c.then == "function" ? c.then((u) => a(null, u)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return l(e, n, a);
  }
  prepareLoading(e, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    I(e) && (e = this.languageUtils.toResolveHierarchy(e)), I(n) && (n = [n]);
    const i = this.queueLoad(e, n, r, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, n, r) {
    this.prepareLoading(e, n, {}, r);
  }
  reload(e, n, r) {
    this.prepareLoading(e, n, {
      reload: !0
    }, r);
  }
  loadOne(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = e.split("|"), s = r[0], i = r[1];
    this.read(s, i, "read", void 0, void 0, (o, a) => {
      o && this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`, o), !o && a && this.logger.log(`${n}loaded namespace ${i} for language ${s}`, a), this.loaded(e, o, a);
    });
  }
  saveMissing(e, n, r, s, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...o,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(e, n, r, s, l) : u = c(e, n, r, s), u && typeof u.then == "function" ? u.then((d) => a(null, d)).catch(a) : a(null, u);
          } catch (u) {
            a(u);
          }
        else
          c(e, n, r, s, a, l);
      }
      !e || !e[0] || this.store.addResource(e[0], n, r, s);
    }
  }
}
const Rn = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), I(t[1]) && (e.defaultValue = t[1]), I(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const n = t[3] || t[2];
      Object.keys(n).forEach((r) => {
        e[r] = n[r];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Cn = (t) => (I(t.ns) && (t.ns = [t.ns]), I(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), I(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t), Ge = () => {
}, Ms = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n) => {
    typeof t[n] == "function" && (t[n] = t[n].bind(t));
  });
};
class Ve extends vt {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Cn(e), this.services = {}, this.logger = we, this.modules = {
      external: []
    }, Ms(this), n && !this.isInitialized && !e.isClone) {
      if (!this.options.initImmediate)
        return this.init(e, n), this;
      setTimeout(() => {
        this.init(e, n);
      }, 0);
    }
  }
  init() {
    var e = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (I(n.ns) ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = Rn();
    this.options = {
      ...s,
      ...this.options,
      ...Cn(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const i = (u) => u ? typeof u == "function" ? new u() : u : null;
    if (!this.options.isClone) {
      this.modules.logger ? we.init(i(this.modules.logger), this.options) : we.init(null, this.options);
      let u;
      this.modules.formatter ? u = this.modules.formatter : typeof Intl < "u" && (u = ks);
      const d = new Tn(this.options);
      this.store = new wn(this.options.resources, this.options);
      const f = this.services;
      f.logger = we, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new _s(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), u && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = i(u), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new Is(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new Bs(i(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(y) {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), h = 1; h < p; h++)
          m[h - 1] = arguments[h];
        e.emit(y, ...m);
      }), this.modules.languageDetector && (f.languageDetector = i(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = i(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new dt(this.services, this.options), this.translator.on("*", function(y) {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), h = 1; h < p; h++)
          m[h - 1] = arguments[h];
        e.emit(y, ...m);
      }), this.modules.external.forEach((y) => {
        y.init && y.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Ge), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const u = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      u.length > 0 && u[0] !== "dev" && (this.options.lng = u[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((u) => {
      this[u] = function() {
        return e.store[u](...arguments), e;
      };
    });
    const l = Me(), c = () => {
      const u = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return u(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, u);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), l;
  }
  loadResources(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge;
    const s = I(e) ? e : this.language;
    if (typeof e == "function" && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
      if (s && s.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [], o = (a) => {
        if (!a || a === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
        });
      };
      s ? o(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => o(l)), this.options.preload && this.options.preload.forEach((a) => o(a)), this.services.backendConnector.load(i, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(e, n, r) {
    const s = Me();
    return typeof e == "function" && (r = e, e = void 0), typeof n == "function" && (r = n, n = void 0), e || (e = this.languages), n || (n = this.options.ns), r || (r = Ge), this.services.backendConnector.reload(e, n, (i) => {
      s.resolve(), r(i);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && cr.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(e, n) {
    var r = this;
    this.isLanguageChangingTo = e;
    const s = Me();
    this.emit("languageChanging", e);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, o = (l, c) => {
      c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, a = (l) => {
      !e && !l && this.services.languageDetector && (l = []);
      const c = I(l) ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (u) => {
        o(u, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), s;
  }
  getFixedT(e, n, r) {
    var s = this;
    const i = function(o, a) {
      let l;
      if (typeof a != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          u[d - 2] = arguments[d];
        l = s.options.overloadTranslationOptionHandler([o, a].concat(u));
      } else
        l = {
          ...a
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const f = s.options.keySeparator || ".";
      let y;
      return l.keyPrefix && Array.isArray(o) ? y = o.map((p) => `${l.keyPrefix}${f}${p}`) : y = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o, s.t(y, l);
    };
    return I(e) ? i.lng = e : i.lngs = e, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (a, l) => {
      const c = this.services.backendConnector.state[`${a}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, o);
      if (a !== void 0) return a;
    }
    return !!(this.hasResourceBundle(r, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, e) && (!s || o(i, e)));
  }
  loadNamespaces(e, n) {
    const r = Me();
    return this.options.ns ? (I(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(e, n) {
    const r = Me();
    I(e) && (e = [e]);
    const s = this.options.preload || [], i = e.filter((o) => s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(e) {
    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Tn(Rn());
    return n.indexOf(r.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new Ve(e, n);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge;
    const r = e.forkResourceStore;
    r && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new Ve(s);
    return (e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new wn(this.store.data, s), i.services.resourceStore = i.store), i.translator = new dt(i.services, s), i.translator.on("*", function(a) {
      for (var l = arguments.length, c = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
        c[u - 1] = arguments[u];
      i.emit(a, ...c);
    }), i.init(s, n), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ie = Ve.createInstance();
ie.createInstance = Ve.createInstance;
ie.createInstance;
ie.dir;
ie.init;
ie.loadResources;
ie.reloadResources;
ie.use;
ie.changeLanguage;
ie.getFixedT;
ie.t;
ie.exists;
ie.setDefaultNamespace;
ie.hasLoadedNamespace;
ie.loadNamespaces;
ie.loadLanguages;
const Fs = (...t) => {
  console != null && console.warn && (Ne(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
}, Pn = {}, Vt = (...t) => {
  Ne(t[0]) && Pn[t[0]] || (Ne(t[0]) && (Pn[t[0]] = /* @__PURE__ */ new Date()), Fs(...t));
}, fr = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const n = () => {
      setTimeout(() => {
        t.off("initialized", n);
      }, 0), e();
    };
    t.on("initialized", n);
  }
}, Ln = (t, e, n) => {
  t.loadNamespaces(e, fr(t, n));
}, An = (t, e, n, r) => {
  Ne(n) && (n = [n]), n.forEach((s) => {
    t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
  }), t.loadLanguages(e, fr(t, r));
}, js = (t, e, n = {}) => !e.languages || !e.languages.length ? (Vt("i18n.languages were undefined or empty", e.languages), !0) : e.hasLoadedNamespace(t, {
  lng: n.lng,
  precheck: (r, s) => {
    var i;
    if (((i = n.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, t)) return !1;
  }
}), Ne = (t) => typeof t == "string", Us = (t) => typeof t == "object" && t !== null, Hs = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, zs = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Vs = (t) => zs[t], Ks = (t) => t.replace(Hs, Vs);
let Kt = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ks
};
const qs = (t = {}) => {
  Kt = {
    ...Kt,
    ...t
  };
}, Js = () => Kt;
let dr;
const Ws = (t) => {
  dr = t;
}, Ys = () => dr, ka = {
  type: "3rdParty",
  init(t) {
    qs(t.options.react), Ws(t);
  }
}, pr = F.createContext();
class Qs {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Xs = (t, e) => {
  const n = F.useRef();
  return F.useEffect(() => {
    n.current = t;
  }, [t, e]), n.current;
}, hr = (t, e, n, r) => t.getFixedT(e, n, r), Gs = (t, e, n, r) => F.useCallback(hr(t, e, n, r), [t, e, n, r]), $a = (t, e = {}) => {
  var T, v, B, L;
  const {
    i18n: n
  } = e, {
    i18n: r,
    defaultNS: s
  } = F.useContext(pr) || {}, i = n || r || Ys();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new Qs()), !i) {
    Vt("You will need to pass in an i18next instance by using initReactI18next");
    const R = (U, H) => Ne(H) ? H : Us(H) && Ne(H.defaultValue) ? H.defaultValue : Array.isArray(U) ? U[U.length - 1] : U, _ = [R, {}, !1];
    return _.t = R, _.i18n = {}, _.ready = !1, _;
  }
  (T = i.options.react) != null && T.wait && Vt("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...Js(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: a,
    keyPrefix: l
  } = o;
  let c = s || ((v = i.options) == null ? void 0 : v.defaultNS);
  c = Ne(c) ? [c] : c || ["translation"], (L = (B = i.reportNamespaces).addUsedNamespaces) == null || L.call(B, c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((R) => js(R, i, o)), d = Gs(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], l), f = () => d, y = () => hr(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], l), [p, m] = F.useState(f);
  let h = c.join();
  e.lng && (h = `${e.lng}${h}`);
  const w = Xs(h), S = F.useRef(!0);
  F.useEffect(() => {
    const {
      bindI18n: R,
      bindI18nStore: _
    } = o;
    S.current = !0, !u && !a && (e.lng ? An(i, e.lng, c, () => {
      S.current && m(y);
    }) : Ln(i, c, () => {
      S.current && m(y);
    })), u && w && w !== h && S.current && m(y);
    const U = () => {
      S.current && m(y);
    };
    return R && (i == null || i.on(R, U)), _ && (i == null || i.store.on(_, U)), () => {
      S.current = !1, i && (R == null || R.split(" ").forEach((H) => i.off(H, U))), _ && i && _.split(" ").forEach((H) => i.store.off(H, U));
    };
  }, [i, h]), F.useEffect(() => {
    S.current && u && m(f);
  }, [i, l, u]);
  const E = [p, i, u];
  if (E.t = p, E.i18n = i, E.ready = u, u || !u && !a) return E;
  throw new Promise((R) => {
    e.lng ? An(i, e.lng, c, () => R()) : Ln(i, c, () => R());
  });
};
function Ba({
  i18n: t,
  defaultNS: e,
  children: n
}) {
  const r = F.useMemo(() => ({
    i18n: t,
    defaultNS: e
  }), [t, e]);
  return F.createElement(pr.Provider, {
    value: r
  }, n);
}
function gr(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Zs } = Object.prototype, { getPrototypeOf: sn } = Object, bt = /* @__PURE__ */ ((t) => (e) => {
  const n = Zs.call(e);
  return t[n] || (t[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ve = (t) => (t = t.toLowerCase(), (e) => bt(e) === t), Et = (t) => (e) => typeof e === t, { isArray: $e } = Array, Ke = Et("undefined");
function ei(t) {
  return t !== null && !Ke(t) && t.constructor !== null && !Ke(t.constructor) && de(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const mr = ve("ArrayBuffer");
function ti(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && mr(t.buffer), e;
}
const ni = Et("string"), de = Et("function"), yr = Et("number"), wt = (t) => t !== null && typeof t == "object", ri = (t) => t === !0 || t === !1, it = (t) => {
  if (bt(t) !== "object")
    return !1;
  const e = sn(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, si = ve("Date"), ii = ve("File"), oi = ve("Blob"), ai = ve("FileList"), li = (t) => wt(t) && de(t.pipe), ui = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || de(t.append) && ((e = bt(t)) === "formdata" || // detect form-data instance
  e === "object" && de(t.toString) && t.toString() === "[object FormData]"));
}, ci = ve("URLSearchParams"), [fi, di, pi, hi] = ["ReadableStream", "Request", "Response", "Headers"].map(ve), gi = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qe(t, e, { allOwnKeys: n = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let r, s;
  if (typeof t != "object" && (t = [t]), $e(t))
    for (r = 0, s = t.length; r < s; r++)
      e.call(null, t[r], r, t);
  else {
    const i = n ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let a;
    for (r = 0; r < o; r++)
      a = i[r], e.call(null, t[a], a, t);
  }
}
function vr(t, e) {
  e = e.toLowerCase();
  const n = Object.keys(t);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], e === s.toLowerCase())
      return s;
  return null;
}
const Le = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : rs, br = (t) => !Ke(t) && t !== Le;
function qt() {
  const { caseless: t } = br(this) && this || {}, e = {}, n = (r, s) => {
    const i = t && vr(e, s) || s;
    it(e[i]) && it(r) ? e[i] = qt(e[i], r) : it(r) ? e[i] = qt({}, r) : $e(r) ? e[i] = r.slice() : e[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && qe(arguments[r], n);
  return e;
}
const mi = (t, e, n, { allOwnKeys: r } = {}) => (qe(e, (s, i) => {
  n && de(s) ? t[i] = gr(s, n) : t[i] = s;
}, { allOwnKeys: r }), t), yi = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), vi = (t, e, n, r) => {
  t.prototype = Object.create(e.prototype, r), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), n && Object.assign(t.prototype, n);
}, bi = (t, e, n, r) => {
  let s, i, o;
  const a = {};
  if (e = e || {}, t == null) return e;
  do {
    for (s = Object.getOwnPropertyNames(t), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, t, e)) && !a[o] && (e[o] = t[o], a[o] = !0);
    t = n !== !1 && sn(t);
  } while (t && (!n || n(t, e)) && t !== Object.prototype);
  return e;
}, Ei = (t, e, n) => {
  t = String(t), (n === void 0 || n > t.length) && (n = t.length), n -= e.length;
  const r = t.indexOf(e, n);
  return r !== -1 && r === n;
}, wi = (t) => {
  if (!t) return null;
  if ($e(t)) return t;
  let e = t.length;
  if (!yr(e)) return null;
  const n = new Array(e);
  for (; e-- > 0; )
    n[e] = t[e];
  return n;
}, Si = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && sn(Uint8Array)), Ti = (t, e) => {
  const r = (t && t[Symbol.iterator]).call(t);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    e.call(t, i[0], i[1]);
  }
}, xi = (t, e) => {
  let n;
  const r = [];
  for (; (n = t.exec(e)) !== null; )
    r.push(n);
  return r;
}, Oi = ve("HTMLFormElement"), Ri = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Nn = (({ hasOwnProperty: t }) => (e, n) => t.call(e, n))(Object.prototype), Ci = ve("RegExp"), Er = (t, e) => {
  const n = Object.getOwnPropertyDescriptors(t), r = {};
  qe(n, (s, i) => {
    let o;
    (o = e(s, i, t)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(t, r);
}, Pi = (t) => {
  Er(t, (e, n) => {
    if (de(t) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = t[n];
    if (de(r)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Li = (t, e) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return $e(t) ? r(t) : r(String(t).split(e)), n;
}, Ai = () => {
}, Ni = (t, e) => t != null && Number.isFinite(t = +t) ? t : e, At = "abcdefghijklmnopqrstuvwxyz", _n = "0123456789", wr = {
  DIGIT: _n,
  ALPHA: At,
  ALPHA_DIGIT: At + At.toUpperCase() + _n
}, _i = (t = 16, e = wr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = e;
  for (; t--; )
    n += e[Math.random() * r | 0];
  return n;
};
function Ii(t) {
  return !!(t && de(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Di = (t) => {
  const e = new Array(10), n = (r, s) => {
    if (wt(r)) {
      if (e.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        e[s] = r;
        const i = $e(r) ? [] : {};
        return qe(r, (o, a) => {
          const l = n(o, s + 1);
          !Ke(l) && (i[a] = l);
        }), e[s] = void 0, i;
      }
    }
    return r;
  };
  return n(t, 0);
}, ki = ve("AsyncFunction"), $i = (t) => t && (wt(t) || de(t)) && de(t.then) && de(t.catch), Sr = ((t, e) => t ? setImmediate : e ? ((n, r) => (Le.addEventListener("message", ({ source: s, data: i }) => {
  s === Le && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), Le.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  de(Le.postMessage)
), Bi = typeof queueMicrotask < "u" ? queueMicrotask.bind(Le) : typeof ce < "u" && ce.nextTick || Sr, g = {
  isArray: $e,
  isArrayBuffer: mr,
  isBuffer: ei,
  isFormData: ui,
  isArrayBufferView: ti,
  isString: ni,
  isNumber: yr,
  isBoolean: ri,
  isObject: wt,
  isPlainObject: it,
  isReadableStream: fi,
  isRequest: di,
  isResponse: pi,
  isHeaders: hi,
  isUndefined: Ke,
  isDate: si,
  isFile: ii,
  isBlob: oi,
  isRegExp: Ci,
  isFunction: de,
  isStream: li,
  isURLSearchParams: ci,
  isTypedArray: Si,
  isFileList: ai,
  forEach: qe,
  merge: qt,
  extend: mi,
  trim: gi,
  stripBOM: yi,
  inherits: vi,
  toFlatObject: bi,
  kindOf: bt,
  kindOfTest: ve,
  endsWith: Ei,
  toArray: wi,
  forEachEntry: Ti,
  matchAll: xi,
  isHTMLForm: Oi,
  hasOwnProperty: Nn,
  hasOwnProp: Nn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Er,
  freezeMethods: Pi,
  toObjectSet: Li,
  toCamelCase: Ri,
  noop: Ai,
  toFiniteNumber: Ni,
  findKey: vr,
  global: Le,
  isContextDefined: br,
  ALPHABET: wr,
  generateString: _i,
  isSpecCompliantForm: Ii,
  toJSONObject: Di,
  isAsyncFn: ki,
  isThenable: $i,
  setImmediate: Sr,
  asap: Bi
};
function $(t, e, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
g.inherits($, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: g.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tr = $.prototype, xr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  xr[t] = { value: t };
});
Object.defineProperties($, xr);
Object.defineProperty(Tr, "isAxiosError", { value: !0 });
$.from = (t, e, n, r, s, i) => {
  const o = Object.create(Tr);
  return g.toFlatObject(t, o, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), $.call(o, t.message, e, n, r, s), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const Mi = null;
function Jt(t) {
  return g.isPlainObject(t) || g.isArray(t);
}
function Or(t) {
  return g.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function In(t, e, n) {
  return t ? t.concat(e).map(function(s, i) {
    return s = Or(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : e;
}
function Fi(t) {
  return g.isArray(t) && !t.some(Jt);
}
const ji = g.toFlatObject(g, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function St(t, e, n) {
  if (!g.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), n = g.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, h) {
    return !g.isUndefined(h[m]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && g.isSpecCompliantForm(e);
  if (!g.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(p) {
    if (p === null) return "";
    if (g.isDate(p))
      return p.toISOString();
    if (!l && g.isBlob(p))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return g.isArrayBuffer(p) || g.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : ss.from(p) : p;
  }
  function u(p, m, h) {
    let w = p;
    if (p && !h && typeof p == "object") {
      if (g.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (g.isArray(p) && Fi(p) || (g.isFileList(p) || g.endsWith(m, "[]")) && (w = g.toArray(p)))
        return m = Or(m), w.forEach(function(E, T) {
          !(g.isUndefined(E) || E === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? In([m], T, i) : o === null ? m : m + "[]",
            c(E)
          );
        }), !1;
    }
    return Jt(p) ? !0 : (e.append(In(h, m, i), c(p)), !1);
  }
  const d = [], f = Object.assign(ji, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Jt
  });
  function y(p, m) {
    if (!g.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), g.forEach(p, function(w, S) {
        (!(g.isUndefined(w) || w === null) && s.call(
          e,
          w,
          g.isString(S) ? S.trim() : S,
          m,
          f
        )) === !0 && y(w, m ? m.concat(S) : [S]);
      }), d.pop();
    }
  }
  if (!g.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function Dn(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(r) {
    return e[r];
  });
}
function on(t, e) {
  this._pairs = [], t && St(t, this, e);
}
const Rr = on.prototype;
Rr.append = function(e, n) {
  this._pairs.push([e, n]);
};
Rr.toString = function(e) {
  const n = e ? function(r) {
    return e.call(this, r, Dn);
  } : Dn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ui(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cr(t, e, n) {
  if (!e)
    return t;
  const r = n && n.encode || Ui, s = n && n.serialize;
  let i;
  if (s ? i = s(e, n) : i = g.isURLSearchParams(e) ? e.toString() : new on(e, n).toString(r), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class kn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, n, r) {
    return this.handlers.push({
      fulfilled: e,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    g.forEach(this.handlers, function(r) {
      r !== null && e(r);
    });
  }
}
const Pr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Hi = typeof URLSearchParams < "u" ? URLSearchParams : on, zi = typeof FormData < "u" ? FormData : null, Vi = typeof Blob < "u" ? Blob : null, Ki = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Hi,
    FormData: zi,
    Blob: Vi
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, an = typeof window < "u" && typeof document < "u", Wt = typeof navigator == "object" && navigator || void 0, qi = an && (!Wt || ["ReactNative", "NativeScript", "NS"].indexOf(Wt.product) < 0), Ji = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Wi = an && window.location.href || "http://localhost", Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: an,
  hasStandardBrowserEnv: qi,
  hasStandardBrowserWebWorkerEnv: Ji,
  navigator: Wt,
  origin: Wi
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...Yi,
  ...Ki
};
function Qi(t, e) {
  return St(t, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, i) {
      return ae.isNode && g.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Xi(t) {
  return g.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Gi(t) {
  const e = {}, n = Object.keys(t);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], e[i] = t[i];
  return e;
}
function Lr(t) {
  function e(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), l = i >= n.length;
    return o = !o && g.isArray(s) ? s.length : o, l ? (g.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !a) : ((!s[o] || !g.isObject(s[o])) && (s[o] = []), e(n, r, s[o], i) && g.isArray(s[o]) && (s[o] = Gi(s[o])), !a);
  }
  if (g.isFormData(t) && g.isFunction(t.entries)) {
    const n = {};
    return g.forEachEntry(t, (r, s) => {
      e(Xi(r), s, n, 0);
    }), n;
  }
  return null;
}
function Zi(t, e, n) {
  if (g.isString(t))
    try {
      return (e || JSON.parse)(t), g.trim(t);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(t);
}
const Je = {
  transitional: Pr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = g.isObject(e);
    if (i && g.isHTMLForm(e) && (e = new FormData(e)), g.isFormData(e))
      return s ? JSON.stringify(Lr(e)) : e;
    if (g.isArrayBuffer(e) || g.isBuffer(e) || g.isStream(e) || g.isFile(e) || g.isBlob(e) || g.isReadableStream(e))
      return e;
    if (g.isArrayBufferView(e))
      return e.buffer;
    if (g.isURLSearchParams(e))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Qi(e, this.formSerializer).toString();
      if ((a = g.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return St(
          a ? { "files[]": e } : e,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Zi(e)) : e;
  }],
  transformResponse: [function(e) {
    const n = this.transitional || Je.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (g.isResponse(e) || g.isReadableStream(e))
      return e;
    if (e && g.isString(e) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(e);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
g.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Je.headers[t] = {};
});
const eo = g.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), to = (t) => {
  const e = {};
  let n, r, s;
  return t && t.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || e[n] && eo[n]) && (n === "set-cookie" ? e[n] ? e[n].push(r) : e[n] = [r] : e[n] = e[n] ? e[n] + ", " + r : r);
  }), e;
}, $n = Symbol("internals");
function Fe(t) {
  return t && String(t).trim().toLowerCase();
}
function ot(t) {
  return t === !1 || t == null ? t : g.isArray(t) ? t.map(ot) : String(t);
}
function no(t) {
  const e = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(t); )
    e[r[1]] = r[2];
  return e;
}
const ro = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Nt(t, e, n, r, s) {
  if (g.isFunction(r))
    return r.call(this, e, n);
  if (s && (e = n), !!g.isString(e)) {
    if (g.isString(r))
      return e.indexOf(r) !== -1;
    if (g.isRegExp(r))
      return r.test(e);
  }
}
function so(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, n, r) => n.toUpperCase() + r);
}
function io(t, e) {
  const n = g.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(t, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, e, s, i, o);
      },
      configurable: !0
    });
  });
}
class le {
  constructor(e) {
    e && this.set(e);
  }
  set(e, n, r) {
    const s = this;
    function i(a, l, c) {
      const u = Fe(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = g.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = ot(a));
    }
    const o = (a, l) => g.forEach(a, (c, u) => i(c, u, l));
    if (g.isPlainObject(e) || e instanceof this.constructor)
      o(e, n);
    else if (g.isString(e) && (e = e.trim()) && !ro(e))
      o(to(e), n);
    else if (g.isHeaders(e))
      for (const [a, l] of e.entries())
        i(l, a, r);
    else
      e != null && i(n, e, r);
    return this;
  }
  get(e, n) {
    if (e = Fe(e), e) {
      const r = g.findKey(this, e);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return no(s);
        if (g.isFunction(n))
          return n.call(this, s, r);
        if (g.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, n) {
    if (e = Fe(e), e) {
      const r = g.findKey(this, e);
      return !!(r && this[r] !== void 0 && (!n || Nt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(e, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = Fe(o), o) {
        const a = g.findKey(r, o);
        a && (!n || Nt(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return g.isArray(e) ? e.forEach(i) : i(e), s;
  }
  clear(e) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!e || Nt(this, this[i], i, e, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(e) {
    const n = this, r = {};
    return g.forEach(this, (s, i) => {
      const o = g.findKey(r, i);
      if (o) {
        n[o] = ot(s), delete n[i];
        return;
      }
      const a = e ? so(i) : String(i).trim();
      a !== i && delete n[i], n[a] = ot(s), r[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const n = /* @__PURE__ */ Object.create(null);
    return g.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = e && g.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, n]) => e + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...n) {
    const r = new this(e);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(e) {
    const r = (this[$n] = this[$n] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Fe(o);
      r[a] || (io(s, o), r[a] = !0);
    }
    return g.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
g.reduceDescriptors(le.prototype, ({ value: t }, e) => {
  let n = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(r) {
      this[n] = r;
    }
  };
});
g.freezeMethods(le);
function _t(t, e) {
  const n = this || Je, r = e || n, s = le.from(r.headers);
  let i = r.data;
  return g.forEach(t, function(a) {
    i = a.call(n, i, s.normalize(), e ? e.status : void 0);
  }), s.normalize(), i;
}
function Ar(t) {
  return !!(t && t.__CANCEL__);
}
function Be(t, e, n) {
  $.call(this, t ?? "canceled", $.ERR_CANCELED, e, n), this.name = "CanceledError";
}
g.inherits(Be, $, {
  __CANCEL__: !0
});
function Nr(t, e, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? t(n) : e(new $(
    "Request failed with status code " + n.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function oo(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function ao(t, e) {
  t = t || 10;
  const n = new Array(t), r = new Array(t);
  let s = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(l) {
    const c = Date.now(), u = r[i];
    o || (o = c), n[s] = l, r[s] = c;
    let d = i, f = 0;
    for (; d !== s; )
      f += n[d++], d = d % t;
    if (s = (s + 1) % t, s === i && (i = (i + 1) % t), c - o < e)
      return;
    const y = u && c - u;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function lo(t, e) {
  let n = 0, r = 1e3 / e, s, i;
  const o = (c, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), t.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? o(c, u) : (s = c, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - d)));
  }, () => s && o(s)];
}
const pt = (t, e, n = 3) => {
  let r = 0;
  const s = ao(50, 250);
  return lo((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, l = o - r, c = s(l), u = o <= a;
    r = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - o) / c : void 0,
      event: i,
      lengthComputable: a != null,
      [e ? "download" : "upload"]: !0
    };
    t(d);
  }, n);
}, Bn = (t, e) => {
  const n = t != null;
  return [(r) => e[0]({
    lengthComputable: n,
    total: t,
    loaded: r
  }), e[1]];
}, Mn = (t) => (...e) => g.asap(() => t(...e)), uo = ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = ae.navigator && /(msie|trident)/i.test(ae.navigator.userAgent), n = document.createElement("a");
    let r;
    function s(i) {
      let o = i;
      return e && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(o) {
      const a = g.isString(o) ? s(o) : o;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), co = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, n, r, s, i) {
      const o = [t + "=" + encodeURIComponent(e)];
      g.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), g.isString(r) && o.push("path=" + r), g.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function fo(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function po(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function _r(t, e) {
  return t && !fo(e) ? po(t, e) : e;
}
const Fn = (t) => t instanceof le ? { ...t } : t;
function Ie(t, e) {
  e = e || {};
  const n = {};
  function r(c, u, d) {
    return g.isPlainObject(c) && g.isPlainObject(u) ? g.merge.call({ caseless: d }, c, u) : g.isPlainObject(u) ? g.merge({}, u) : g.isArray(u) ? u.slice() : u;
  }
  function s(c, u, d) {
    if (g.isUndefined(u)) {
      if (!g.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function i(c, u) {
    if (!g.isUndefined(u))
      return r(void 0, u);
  }
  function o(c, u) {
    if (g.isUndefined(u)) {
      if (!g.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in e)
      return r(c, u);
    if (d in t)
      return r(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u) => s(Fn(c), Fn(u), !0)
  };
  return g.forEach(Object.keys(Object.assign({}, t, e)), function(u) {
    const d = l[u] || s, f = d(t[u], e[u], u);
    g.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const Ir = (t) => {
  const e = Ie({}, t);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: a } = e;
  e.headers = o = le.from(o), e.url = Cr(_r(e.baseURL, e.url), t.params, t.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (g.isFormData(n)) {
    if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (ae.hasStandardBrowserEnv && (r && g.isFunction(r) && (r = r(e)), r || r !== !1 && uo(e.url))) {
    const c = s && i && co.read(i);
    c && o.set(s, c);
  }
  return e;
}, ho = typeof XMLHttpRequest < "u", go = ho && function(t) {
  return new Promise(function(n, r) {
    const s = Ir(t);
    let i = s.data;
    const o = le.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s, u, d, f, y, p;
    function m() {
      y && y(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let h = new XMLHttpRequest();
    h.open(s.method.toUpperCase(), s.url, !0), h.timeout = s.timeout;
    function w() {
      if (!h)
        return;
      const E = le.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), v = {
        data: !a || a === "text" || a === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: E,
        config: t,
        request: h
      };
      Nr(function(L) {
        n(L), m();
      }, function(L) {
        r(L), m();
      }, v), h = null;
    }
    "onloadend" in h ? h.onloadend = w : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, h.onabort = function() {
      h && (r(new $("Request aborted", $.ECONNABORTED, t, h)), h = null);
    }, h.onerror = function() {
      r(new $("Network Error", $.ERR_NETWORK, t, h)), h = null;
    }, h.ontimeout = function() {
      let T = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const v = s.transitional || Pr;
      s.timeoutErrorMessage && (T = s.timeoutErrorMessage), r(new $(
        T,
        v.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        t,
        h
      )), h = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in h && g.forEach(o.toJSON(), function(T, v) {
      h.setRequestHeader(v, T);
    }), g.isUndefined(s.withCredentials) || (h.withCredentials = !!s.withCredentials), a && a !== "json" && (h.responseType = s.responseType), c && ([f, p] = pt(c, !0), h.addEventListener("progress", f)), l && h.upload && ([d, y] = pt(l), h.upload.addEventListener("progress", d), h.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (u = (E) => {
      h && (r(!E || E.type ? new Be(null, t, h) : E), h.abort(), h = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const S = oo(s.url);
    if (S && ae.protocols.indexOf(S) === -1) {
      r(new $("Unsupported protocol " + S + ":", $.ERR_BAD_REQUEST, t));
      return;
    }
    h.send(i || null);
  });
}, mo = (t, e) => {
  const { length: n } = t = t ? t.filter(Boolean) : [];
  if (e || n) {
    let r = new AbortController(), s;
    const i = function(c) {
      if (!s) {
        s = !0, a();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof $ ? u : new Be(u instanceof Error ? u.message : u));
      }
    };
    let o = e && setTimeout(() => {
      o = null, i(new $(`timeout ${e} of ms exceeded`, $.ETIMEDOUT));
    }, e);
    const a = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), t = null);
    };
    t.forEach((c) => c.addEventListener("abort", i));
    const { signal: l } = r;
    return l.unsubscribe = () => g.asap(a), l;
  }
}, yo = function* (t, e) {
  let n = t.byteLength;
  if (n < e) {
    yield t;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + e, yield t.slice(r, s), r = s;
}, vo = async function* (t, e) {
  for await (const n of bo(t))
    yield* yo(n, e);
}, bo = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await e.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await e.cancel();
  }
}, jn = (t, e, n, r) => {
  const s = vo(t, e);
  let i = 0, o, a = (l) => {
    o || (o = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          a(), l.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let f = i += d;
          n(f);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, Tt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Dr = Tt && typeof ReadableStream == "function", Eo = Tt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), kr = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, wo = Dr && kr(() => {
  let t = !1;
  const e = new Request(ae.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Un = 64 * 1024, Yt = Dr && kr(() => g.isReadableStream(new Response("").body)), ht = {
  stream: Yt && ((t) => t.body)
};
Tt && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !ht[e] && (ht[e] = g.isFunction(t[e]) ? (n) => n[e]() : (n, r) => {
      throw new $(`Response type '${e}' is not supported`, $.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const So = async (t) => {
  if (t == null)
    return 0;
  if (g.isBlob(t))
    return t.size;
  if (g.isSpecCompliantForm(t))
    return (await new Request(ae.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if (g.isArrayBufferView(t) || g.isArrayBuffer(t))
    return t.byteLength;
  if (g.isURLSearchParams(t) && (t = t + ""), g.isString(t))
    return (await Eo(t)).byteLength;
}, To = async (t, e) => {
  const n = g.toFiniteNumber(t.getContentLength());
  return n ?? So(e);
}, xo = Tt && (async (t) => {
  let {
    url: e,
    method: n,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = Ir(t);
  c = c ? (c + "").toLowerCase() : "text";
  let y = mo([s, i && i.toAbortSignal()], o), p;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let h;
  try {
    if (l && wo && n !== "get" && n !== "head" && (h = await To(u, r)) !== 0) {
      let v = new Request(e, {
        method: "POST",
        body: r,
        duplex: "half"
      }), B;
      if (g.isFormData(r) && (B = v.headers.get("content-type")) && u.setContentType(B), v.body) {
        const [L, R] = Bn(
          h,
          pt(Mn(l))
        );
        r = jn(v.body, Un, L, R);
      }
    }
    g.isString(d) || (d = d ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    p = new Request(e, {
      ...f,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: w ? d : void 0
    });
    let S = await fetch(p);
    const E = Yt && (c === "stream" || c === "response");
    if (Yt && (a || E && m)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((_) => {
        v[_] = S[_];
      });
      const B = g.toFiniteNumber(S.headers.get("content-length")), [L, R] = a && Bn(
        B,
        pt(Mn(a), !0)
      ) || [];
      S = new Response(
        jn(S.body, Un, L, () => {
          R && R(), m && m();
        }),
        v
      );
    }
    c = c || "text";
    let T = await ht[g.findKey(ht, c) || "text"](S, t);
    return !E && m && m(), await new Promise((v, B) => {
      Nr(v, B, {
        data: T,
        headers: le.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: t,
        request: p
      });
    });
  } catch (w) {
    throw m && m(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new $("Network Error", $.ERR_NETWORK, t, p),
      {
        cause: w.cause || w
      }
    ) : $.from(w, w && w.code, t, p);
  }
}), Qt = {
  http: Mi,
  xhr: go,
  fetch: xo
};
g.forEach(Qt, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Hn = (t) => `- ${t}`, Oo = (t) => g.isFunction(t) || t === null || t === !1, $r = {
  getAdapter: (t) => {
    t = g.isArray(t) ? t : [t];
    const { length: e } = t;
    let n, r;
    const s = {};
    for (let i = 0; i < e; i++) {
      n = t[i];
      let o;
      if (r = n, !Oo(n) && (r = Qt[(o = String(n)).toLowerCase()], r === void 0))
        throw new $(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(Hn).join(`
`) : " " + Hn(i[0]) : "as no adapter specified";
      throw new $(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Qt
};
function It(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Be(null, t);
}
function zn(t) {
  return It(t), t.headers = le.from(t.headers), t.data = _t.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), $r.getAdapter(t.adapter || Je.adapter)(t).then(function(r) {
    return It(t), r.data = _t.call(
      t,
      t.transformResponse,
      r
    ), r.headers = le.from(r.headers), r;
  }, function(r) {
    return Ar(r) || (It(t), r && r.response && (r.response.data = _t.call(
      t,
      t.transformResponse,
      r.response
    ), r.response.headers = le.from(r.response.headers))), Promise.reject(r);
  });
}
const Br = "1.7.7", ln = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  ln[t] = function(r) {
    return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Vn = {};
ln.transitional = function(e, n, r) {
  function s(i, o) {
    return "[Axios v" + Br + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, a) => {
    if (e === !1)
      throw new $(
        s(o, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return n && !Vn[o] && (Vn[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), e ? e(i, o, a) : !0;
  };
};
function Ro(t, e, n) {
  if (typeof t != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(t);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = e[i];
    if (o) {
      const a = t[i], l = a === void 0 || o(a, i, t);
      if (l !== !0)
        throw new $("option " + i + " must be " + l, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const Xt = {
  assertOptions: Ro,
  validators: ln
}, xe = Xt.validators;
class _e {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new kn(),
      response: new kn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, n) {
    try {
      return await this._request(e, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(e, n) {
    typeof e == "string" ? (n = n || {}, n.url = e) : n = e || {}, n = Ie(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && Xt.assertOptions(r, {
      silentJSONParsing: xe.transitional(xe.boolean),
      forcedJSONParsing: xe.transitional(xe.boolean),
      clarifyTimeoutError: xe.transitional(xe.boolean)
    }, !1), s != null && (g.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Xt.assertOptions(s, {
      encode: xe.function,
      serialize: xe.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && g.merge(
      i.common,
      i[n.method]
    );
    i && g.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete i[p];
      }
    ), n.headers = le.concat(o, i);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const p = [zn.bind(this), void 0];
      for (p.unshift.apply(p, a), p.push.apply(p, c), f = p.length, u = Promise.resolve(n); d < f; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const p = a[d++], m = a[d++];
      try {
        y = p(y);
      } catch (h) {
        m.call(this, h);
        break;
      }
    }
    try {
      u = zn.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(e) {
    e = Ie(this.defaults, e);
    const n = _r(e.baseURL, e.url);
    return Cr(n, e.params, e.paramsSerializer);
  }
}
g.forEach(["delete", "get", "head", "options"], function(e) {
  _e.prototype[e] = function(n, r) {
    return this.request(Ie(r || {}, {
      method: e,
      url: n,
      data: (r || {}).data
    }));
  };
});
g.forEach(["post", "put", "patch"], function(e) {
  function n(r) {
    return function(i, o, a) {
      return this.request(Ie(a || {}, {
        method: e,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  _e.prototype[e] = n(), _e.prototype[e + "Form"] = n(!0);
});
class un {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, e(function(i, o, a) {
      r.reason || (r.reason = new Be(i, o, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(e);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), n = (r) => {
      e.abort(r);
    };
    return this.subscribe(n), e.signal.unsubscribe = () => this.unsubscribe(n), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new un(function(s) {
        e = s;
      }),
      cancel: e
    };
  }
}
function Co(t) {
  return function(n) {
    return t.apply(null, n);
  };
}
function Po(t) {
  return g.isObject(t) && t.isAxiosError === !0;
}
const Gt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Gt).forEach(([t, e]) => {
  Gt[e] = t;
});
function Mr(t) {
  const e = new _e(t), n = gr(_e.prototype.request, e);
  return g.extend(n, _e.prototype, e, { allOwnKeys: !0 }), g.extend(n, e, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Mr(Ie(t, s));
  }, n;
}
const G = Mr(Je);
G.Axios = _e;
G.CanceledError = Be;
G.CancelToken = un;
G.isCancel = Ar;
G.VERSION = Br;
G.toFormData = St;
G.AxiosError = $;
G.Cancel = G.CanceledError;
G.all = function(e) {
  return Promise.all(e);
};
G.spread = Co;
G.isAxiosError = Po;
G.mergeConfig = Ie;
G.AxiosHeaders = le;
G.formToJSON = (t) => Lr(g.isHTMLForm(t) ? new FormData(t) : t);
G.getAdapter = $r.getAdapter;
G.HttpStatusCode = Gt;
G.default = G;
var xt = {}, Lo = function() {
  var t = document.getSelection();
  if (!t.rangeCount)
    return function() {
    };
  for (var e = document.activeElement, n = [], r = 0; r < t.rangeCount; r++)
    n.push(t.getRangeAt(r));
  switch (e.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      e.blur();
      break;
    default:
      e = null;
      break;
  }
  return t.removeAllRanges(), function() {
    t.type === "Caret" && t.removeAllRanges(), t.rangeCount || n.forEach(function(s) {
      t.addRange(s);
    }), e && e.focus();
  };
}, Ao = Lo, Kn = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, No = "Copy to clipboard: #{key}, Enter";
function _o(t) {
  var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return t.replace(/#{\s*key\s*}/g, e);
}
function Io(t, e) {
  var n, r, s, i, o, a, l = !1;
  e || (e = {}), n = e.debug || !1;
  try {
    s = Ao(), i = document.createRange(), o = document.getSelection(), a = document.createElement("span"), a.textContent = t, a.ariaHidden = "true", a.style.all = "unset", a.style.position = "fixed", a.style.top = 0, a.style.clip = "rect(0, 0, 0, 0)", a.style.whiteSpace = "pre", a.style.webkitUserSelect = "text", a.style.MozUserSelect = "text", a.style.msUserSelect = "text", a.style.userSelect = "text", a.addEventListener("copy", function(u) {
      if (u.stopPropagation(), e.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = Kn[e.format] || Kn.default;
          window.clipboardData.setData(d, t);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(e.format, t);
      e.onCopy && (u.preventDefault(), e.onCopy(u.clipboardData));
    }), document.body.appendChild(a), i.selectNodeContents(a), o.addRange(i);
    var c = document.execCommand("copy");
    if (!c)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (u) {
    n && console.error("unable to copy using execCommand: ", u), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = _o("message" in e ? e.message : No), window.prompt(r, t);
    }
  } finally {
    o && (typeof o.removeRange == "function" ? o.removeRange(i) : o.removeAllRanges()), a && document.body.removeChild(a), s();
  }
  return l;
}
var Do = Io;
function Zt(t) {
  "@babel/helpers - typeof";
  return Zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Zt(t);
}
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.CopyToClipboard = void 0;
var Ze = Fr(rn()), ko = Fr(Do), $o = ["text", "onCopy", "options", "children"];
function Fr(t) {
  return t && t.__esModule ? t : { default: t };
}
function qn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Jn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qn(Object(n), !0).forEach(function(r) {
      cn(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Bo(t, e) {
  if (t == null) return {};
  var n = Mo(t, e), r, s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (s = 0; s < i.length; s++)
      r = i[s], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Mo(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), s, i;
  for (i = 0; i < r.length; i++)
    s = r[i], !(e.indexOf(s) >= 0) && (n[s] = t[s]);
  return n;
}
function Fo(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jo(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Uo(t, e, n) {
  return e && jo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Ho(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && en(t, e);
}
function en(t, e) {
  return en = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, en(t, e);
}
function zo(t) {
  var e = Ko();
  return function() {
    var r = gt(t), s;
    if (e) {
      var i = gt(this).constructor;
      s = Reflect.construct(r, arguments, i);
    } else
      s = r.apply(this, arguments);
    return Vo(this, s);
  };
}
function Vo(t, e) {
  if (e && (Zt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jr(t);
}
function jr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Ko() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function gt(t) {
  return gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, gt(t);
}
function cn(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
var Ur = /* @__PURE__ */ function(t) {
  Ho(n, t);
  var e = zo(n);
  function n() {
    var r;
    Fo(this, n);
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
      i[o] = arguments[o];
    return r = e.call.apply(e, [this].concat(i)), cn(jr(r), "onClick", function(a) {
      var l = r.props, c = l.text, u = l.onCopy, d = l.children, f = l.options, y = Ze.default.Children.only(d), p = (0, ko.default)(c, f);
      u && u(c, p), y && y.props && typeof y.props.onClick == "function" && y.props.onClick(a);
    }), r;
  }
  return Uo(n, [{
    key: "render",
    value: function() {
      var s = this.props;
      s.text, s.onCopy, s.options;
      var i = s.children, o = Bo(s, $o), a = Ze.default.Children.only(i);
      return /* @__PURE__ */ Ze.default.cloneElement(a, Jn(Jn({}, o), {}, {
        onClick: this.onClick
      }));
    }
  }]), n;
}(Ze.default.PureComponent);
xt.CopyToClipboard = Ur;
cn(Ur, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var qo = xt, tn = qo.CopyToClipboard;
tn.CopyToClipboard = tn;
var Jo = tn;
const Ma = /* @__PURE__ */ ns(Jo);
var Ot = {}, nn = { exports: {} }, et = { exports: {} }, z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function Wo() {
  if (Wn) return z;
  Wn = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, f = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, w = t ? Symbol.for("react.responder") : 60118, S = t ? Symbol.for("react.scope") : 60119;
  function E(v) {
    if (typeof v == "object" && v !== null) {
      var B = v.$$typeof;
      switch (B) {
        case e:
          switch (v = v.type, v) {
            case l:
            case c:
            case r:
            case i:
            case s:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case u:
                case p:
                case y:
                case o:
                  return v;
                default:
                  return B;
              }
          }
        case n:
          return B;
      }
    }
  }
  function T(v) {
    return E(v) === c;
  }
  return z.AsyncMode = l, z.ConcurrentMode = c, z.ContextConsumer = a, z.ContextProvider = o, z.Element = e, z.ForwardRef = u, z.Fragment = r, z.Lazy = p, z.Memo = y, z.Portal = n, z.Profiler = i, z.StrictMode = s, z.Suspense = d, z.isAsyncMode = function(v) {
    return T(v) || E(v) === l;
  }, z.isConcurrentMode = T, z.isContextConsumer = function(v) {
    return E(v) === a;
  }, z.isContextProvider = function(v) {
    return E(v) === o;
  }, z.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, z.isForwardRef = function(v) {
    return E(v) === u;
  }, z.isFragment = function(v) {
    return E(v) === r;
  }, z.isLazy = function(v) {
    return E(v) === p;
  }, z.isMemo = function(v) {
    return E(v) === y;
  }, z.isPortal = function(v) {
    return E(v) === n;
  }, z.isProfiler = function(v) {
    return E(v) === i;
  }, z.isStrictMode = function(v) {
    return E(v) === s;
  }, z.isSuspense = function(v) {
    return E(v) === d;
  }, z.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === i || v === s || v === d || v === f || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === y || v.$$typeof === o || v.$$typeof === a || v.$$typeof === u || v.$$typeof === h || v.$$typeof === w || v.$$typeof === S || v.$$typeof === m);
  }, z.typeOf = E, z;
}
var V = {}, Yn;
function Yo() {
  return Yn || (Yn = 1, ce.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, a = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, f = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, p = t ? Symbol.for("react.lazy") : 60116, m = t ? Symbol.for("react.block") : 60121, h = t ? Symbol.for("react.fundamental") : 60117, w = t ? Symbol.for("react.responder") : 60118, S = t ? Symbol.for("react.scope") : 60119;
    function E(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === r || O === c || O === i || O === s || O === d || O === f || typeof O == "object" && O !== null && (O.$$typeof === p || O.$$typeof === y || O.$$typeof === o || O.$$typeof === a || O.$$typeof === u || O.$$typeof === h || O.$$typeof === w || O.$$typeof === S || O.$$typeof === m);
    }
    function T(O) {
      if (typeof O == "object" && O !== null) {
        var be = O.$$typeof;
        switch (be) {
          case e:
            var Ye = O.type;
            switch (Ye) {
              case l:
              case c:
              case r:
              case i:
              case s:
              case d:
                return Ye;
              default:
                var hn = Ye && Ye.$$typeof;
                switch (hn) {
                  case a:
                  case u:
                  case p:
                  case y:
                  case o:
                    return hn;
                  default:
                    return be;
                }
            }
          case n:
            return be;
        }
      }
    }
    var v = l, B = c, L = a, R = o, _ = e, U = u, H = r, ue = p, he = y, Y = n, re = i, Q = s, X = d, q = !1;
    function Z(O) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(O) || T(O) === l;
    }
    function b(O) {
      return T(O) === c;
    }
    function x(O) {
      return T(O) === a;
    }
    function A(O) {
      return T(O) === o;
    }
    function P(O) {
      return typeof O == "object" && O !== null && O.$$typeof === e;
    }
    function C(O) {
      return T(O) === u;
    }
    function D(O) {
      return T(O) === r;
    }
    function N(O) {
      return T(O) === p;
    }
    function k(O) {
      return T(O) === y;
    }
    function M(O) {
      return T(O) === n;
    }
    function K(O) {
      return T(O) === i;
    }
    function j(O) {
      return T(O) === s;
    }
    function oe(O) {
      return T(O) === d;
    }
    V.AsyncMode = v, V.ConcurrentMode = B, V.ContextConsumer = L, V.ContextProvider = R, V.Element = _, V.ForwardRef = U, V.Fragment = H, V.Lazy = ue, V.Memo = he, V.Portal = Y, V.Profiler = re, V.StrictMode = Q, V.Suspense = X, V.isAsyncMode = Z, V.isConcurrentMode = b, V.isContextConsumer = x, V.isContextProvider = A, V.isElement = P, V.isForwardRef = C, V.isFragment = D, V.isLazy = N, V.isMemo = k, V.isPortal = M, V.isProfiler = K, V.isStrictMode = j, V.isSuspense = oe, V.isValidElementType = E, V.typeOf = T;
  }()), V;
}
var Qn;
function Hr() {
  return Qn || (Qn = 1, ce.env.NODE_ENV === "production" ? et.exports = Wo() : et.exports = Yo()), et.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Dt, Xn;
function Qo() {
  if (Xn) return Dt;
  Xn = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Dt = s() ? Object.assign : function(i, o) {
    for (var a, l = r(i), c, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var d in a)
        e.call(a, d) && (l[d] = a[d]);
      if (t) {
        c = t(a);
        for (var f = 0; f < c.length; f++)
          n.call(a, c[f]) && (l[c[f]] = a[c[f]]);
      }
    }
    return l;
  }, Dt;
}
var kt, Gn;
function fn() {
  if (Gn) return kt;
  Gn = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return kt = t, kt;
}
var $t, Zn;
function zr() {
  return Zn || (Zn = 1, $t = Function.call.bind(Object.prototype.hasOwnProperty)), $t;
}
var Bt, er;
function Xo() {
  if (er) return Bt;
  er = 1;
  var t = function() {
  };
  if (ce.env.NODE_ENV !== "production") {
    var e = fn(), n = {}, r = zr();
    t = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(i, o, a, l, c) {
    if (ce.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = i[u](o, u, l, a, null, e);
          } catch (p) {
            d = p;
          }
          if (d && !(d instanceof Error) && t(
            (l || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var y = c ? c() : "";
            t(
              "Failed " + a + " type: " + d.message + (y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    ce.env.NODE_ENV !== "production" && (n = {});
  }, Bt = s, Bt;
}
var Mt, tr;
function Go() {
  if (tr) return Mt;
  tr = 1;
  var t = Hr(), e = Qo(), n = fn(), r = zr(), s = Xo(), i = function() {
  };
  ce.env.NODE_ENV !== "production" && (i = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Mt = function(a, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(b) {
      var x = b && (c && b[c] || b[u]);
      if (typeof x == "function")
        return x;
    }
    var f = "<<anonymous>>", y = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: S(),
      arrayOf: E,
      element: T(),
      elementType: v(),
      instanceOf: B,
      node: U(),
      objectOf: R,
      oneOf: L,
      oneOfType: _,
      shape: ue,
      exact: he
    };
    function p(b, x) {
      return b === x ? b !== 0 || 1 / b === 1 / x : b !== b && x !== x;
    }
    function m(b, x) {
      this.message = b, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function h(b) {
      if (ce.env.NODE_ENV !== "production")
        var x = {}, A = 0;
      function P(D, N, k, M, K, j, oe) {
        if (M = M || f, j = j || k, oe !== n) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (ce.env.NODE_ENV !== "production" && typeof console < "u") {
            var be = M + ":" + k;
            !x[be] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[be] = !0, A++);
          }
        }
        return N[k] == null ? D ? N[k] === null ? new m("The " + K + " `" + j + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new m("The " + K + " `" + j + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : b(N, k, M, K, j);
      }
      var C = P.bind(null, !1);
      return C.isRequired = P.bind(null, !0), C;
    }
    function w(b) {
      function x(A, P, C, D, N, k) {
        var M = A[P], K = Q(M);
        if (K !== b) {
          var j = X(M);
          return new m(
            "Invalid " + D + " `" + N + "` of type " + ("`" + j + "` supplied to `" + C + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return h(x);
    }
    function S() {
      return h(o);
    }
    function E(b) {
      function x(A, P, C, D, N) {
        if (typeof b != "function")
          return new m("Property `" + N + "` of component `" + C + "` has invalid PropType notation inside arrayOf.");
        var k = A[P];
        if (!Array.isArray(k)) {
          var M = Q(k);
          return new m("Invalid " + D + " `" + N + "` of type " + ("`" + M + "` supplied to `" + C + "`, expected an array."));
        }
        for (var K = 0; K < k.length; K++) {
          var j = b(k, K, C, D, N + "[" + K + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return h(x);
    }
    function T() {
      function b(x, A, P, C, D) {
        var N = x[A];
        if (!a(N)) {
          var k = Q(N);
          return new m("Invalid " + C + " `" + D + "` of type " + ("`" + k + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(b);
    }
    function v() {
      function b(x, A, P, C, D) {
        var N = x[A];
        if (!t.isValidElementType(N)) {
          var k = Q(N);
          return new m("Invalid " + C + " `" + D + "` of type " + ("`" + k + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(b);
    }
    function B(b) {
      function x(A, P, C, D, N) {
        if (!(A[P] instanceof b)) {
          var k = b.name || f, M = Z(A[P]);
          return new m("Invalid " + D + " `" + N + "` of type " + ("`" + M + "` supplied to `" + C + "`, expected ") + ("instance of `" + k + "`."));
        }
        return null;
      }
      return h(x);
    }
    function L(b) {
      if (!Array.isArray(b))
        return ce.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function x(A, P, C, D, N) {
        for (var k = A[P], M = 0; M < b.length; M++)
          if (p(k, b[M]))
            return null;
        var K = JSON.stringify(b, function(oe, O) {
          var be = X(O);
          return be === "symbol" ? String(O) : O;
        });
        return new m("Invalid " + D + " `" + N + "` of value `" + String(k) + "` " + ("supplied to `" + C + "`, expected one of " + K + "."));
      }
      return h(x);
    }
    function R(b) {
      function x(A, P, C, D, N) {
        if (typeof b != "function")
          return new m("Property `" + N + "` of component `" + C + "` has invalid PropType notation inside objectOf.");
        var k = A[P], M = Q(k);
        if (M !== "object")
          return new m("Invalid " + D + " `" + N + "` of type " + ("`" + M + "` supplied to `" + C + "`, expected an object."));
        for (var K in k)
          if (r(k, K)) {
            var j = b(k, K, C, D, N + "." + K, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return h(x);
    }
    function _(b) {
      if (!Array.isArray(b))
        return ce.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var x = 0; x < b.length; x++) {
        var A = b[x];
        if (typeof A != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(A) + " at index " + x + "."
          ), o;
      }
      function P(C, D, N, k, M) {
        for (var K = [], j = 0; j < b.length; j++) {
          var oe = b[j], O = oe(C, D, N, k, M, n);
          if (O == null)
            return null;
          O.data && r(O.data, "expectedType") && K.push(O.data.expectedType);
        }
        var be = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new m("Invalid " + k + " `" + M + "` supplied to " + ("`" + N + "`" + be + "."));
      }
      return h(P);
    }
    function U() {
      function b(x, A, P, C, D) {
        return Y(x[A]) ? null : new m("Invalid " + C + " `" + D + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return h(b);
    }
    function H(b, x, A, P, C) {
      return new m(
        (b || "React class") + ": " + x + " type `" + A + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + C + "`."
      );
    }
    function ue(b) {
      function x(A, P, C, D, N) {
        var k = A[P], M = Q(k);
        if (M !== "object")
          return new m("Invalid " + D + " `" + N + "` of type `" + M + "` " + ("supplied to `" + C + "`, expected `object`."));
        for (var K in b) {
          var j = b[K];
          if (typeof j != "function")
            return H(C, D, N, K, X(j));
          var oe = j(k, K, C, D, N + "." + K, n);
          if (oe)
            return oe;
        }
        return null;
      }
      return h(x);
    }
    function he(b) {
      function x(A, P, C, D, N) {
        var k = A[P], M = Q(k);
        if (M !== "object")
          return new m("Invalid " + D + " `" + N + "` of type `" + M + "` " + ("supplied to `" + C + "`, expected `object`."));
        var K = e({}, A[P], b);
        for (var j in K) {
          var oe = b[j];
          if (r(b, j) && typeof oe != "function")
            return H(C, D, N, j, X(oe));
          if (!oe)
            return new m(
              "Invalid " + D + " `" + N + "` key `" + j + "` supplied to `" + C + "`.\nBad object: " + JSON.stringify(A[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var O = oe(k, j, C, D, N + "." + j, n);
          if (O)
            return O;
        }
        return null;
      }
      return h(x);
    }
    function Y(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(Y);
          if (b === null || a(b))
            return !0;
          var x = d(b);
          if (x) {
            var A = x.call(b), P;
            if (x !== b.entries) {
              for (; !(P = A.next()).done; )
                if (!Y(P.value))
                  return !1;
            } else
              for (; !(P = A.next()).done; ) {
                var C = P.value;
                if (C && !Y(C[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(b, x) {
      return b === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function Q(b) {
      var x = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : re(x, b) ? "symbol" : x;
    }
    function X(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var x = Q(b);
      if (x === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function q(b) {
      var x = X(b);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function Z(b) {
      return !b.constructor || !b.constructor.name ? f : b.constructor.name;
    }
    return y.checkPropTypes = s, y.resetWarningCache = s.resetWarningCache, y.PropTypes = y, y;
  }, Mt;
}
var Ft, nr;
function Zo() {
  if (nr) return Ft;
  nr = 1;
  var t = fn();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Ft = function() {
    function r(o, a, l, c, u, d) {
      if (d !== t) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, Ft;
}
if (ce.env.NODE_ENV !== "production") {
  var ea = Hr(), ta = !0;
  nn.exports = Go()(ea.isElement, ta);
} else
  nn.exports = Zo()();
var Vr = nn.exports, Kr = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, qr = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, na = qr;
function Jr(t) {
  this.mode = na.MODE_8BIT_BYTE, this.data = t;
}
Jr.prototype = {
  getLength: function(t) {
    return this.data.length;
  },
  write: function(t) {
    for (var e = 0; e < this.data.length; e++)
      t.put(this.data.charCodeAt(e), 8);
  }
};
var ra = Jr, tt = Kr;
function Ee(t, e) {
  this.totalCount = t, this.dataCount = e;
}
Ee.RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H
  // 1
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  // 2
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  // 3
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  // 4		
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  // 5
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  // 6
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  // 7		
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  // 8
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  // 9
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  // 10		
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  // 11
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  // 12
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  // 13
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  // 14
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  // 15
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  // 16
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  // 17
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  // 18
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  // 19
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  // 20
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  // 21
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  // 22
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  // 23
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  // 24
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  // 25
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  // 26
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  // 27
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  // 28
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  // 29
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  // 30
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  // 31
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  // 32
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  // 33
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  // 34
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  // 35
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  // 36
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  // 37
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  // 38
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  // 39
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  // 40
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16]
];
Ee.getRSBlocks = function(t, e) {
  var n = Ee.getRsBlockTable(t, e);
  if (n == null)
    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
  for (var r = n.length / 3, s = new Array(), i = 0; i < r; i++)
    for (var o = n[i * 3 + 0], a = n[i * 3 + 1], l = n[i * 3 + 2], c = 0; c < o; c++)
      s.push(new Ee(a, l));
  return s;
};
Ee.getRsBlockTable = function(t, e) {
  switch (e) {
    case tt.L:
      return Ee.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case tt.M:
      return Ee.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case tt.Q:
      return Ee.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case tt.H:
      return Ee.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var sa = Ee;
function Wr() {
  this.buffer = new Array(), this.length = 0;
}
Wr.prototype = {
  get: function(t) {
    var e = Math.floor(t / 8);
    return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
  },
  put: function(t, e) {
    for (var n = 0; n < e; n++)
      this.putBit((t >>> e - n - 1 & 1) == 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    var e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
};
var ia = Wr, ye = {
  glog: function(t) {
    if (t < 1)
      throw new Error("glog(" + t + ")");
    return ye.LOG_TABLE[t];
  },
  gexp: function(t) {
    for (; t < 0; )
      t += 255;
    for (; t >= 256; )
      t -= 255;
    return ye.EXP_TABLE[t];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};
for (var ne = 0; ne < 8; ne++)
  ye.EXP_TABLE[ne] = 1 << ne;
for (var ne = 8; ne < 256; ne++)
  ye.EXP_TABLE[ne] = ye.EXP_TABLE[ne - 4] ^ ye.EXP_TABLE[ne - 5] ^ ye.EXP_TABLE[ne - 6] ^ ye.EXP_TABLE[ne - 8];
for (var ne = 0; ne < 255; ne++)
  ye.LOG_TABLE[ye.EXP_TABLE[ne]] = ne;
var Yr = ye, Pe = Yr;
function at(t, e) {
  if (t.length == null)
    throw new Error(t.length + "/" + e);
  for (var n = 0; n < t.length && t[n] == 0; )
    n++;
  this.num = new Array(t.length - n + e);
  for (var r = 0; r < t.length - n; r++)
    this.num[r] = t[r + n];
}
at.prototype = {
  get: function(t) {
    return this.num[t];
  },
  getLength: function() {
    return this.num.length;
  },
  multiply: function(t) {
    for (var e = new Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
      for (var r = 0; r < t.getLength(); r++)
        e[n + r] ^= Pe.gexp(Pe.glog(this.get(n)) + Pe.glog(t.get(r)));
    return new at(e, 0);
  },
  mod: function(t) {
    if (this.getLength() - t.getLength() < 0)
      return this;
    for (var e = Pe.glog(this.get(0)) - Pe.glog(t.get(0)), n = new Array(this.getLength()), r = 0; r < this.getLength(); r++)
      n[r] = this.get(r);
    for (var r = 0; r < t.getLength(); r++)
      n[r] ^= Pe.gexp(Pe.glog(t.get(r)) + e);
    return new at(n, 0).mod(t);
  }
};
var Qr = at, ge = qr, rr = Qr, oa = Yr, Oe = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, ee = {
  PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ],
  G15: 1335,
  G18: 7973,
  G15_MASK: 21522,
  getBCHTypeInfo: function(t) {
    for (var e = t << 10; ee.getBCHDigit(e) - ee.getBCHDigit(ee.G15) >= 0; )
      e ^= ee.G15 << ee.getBCHDigit(e) - ee.getBCHDigit(ee.G15);
    return (t << 10 | e) ^ ee.G15_MASK;
  },
  getBCHTypeNumber: function(t) {
    for (var e = t << 12; ee.getBCHDigit(e) - ee.getBCHDigit(ee.G18) >= 0; )
      e ^= ee.G18 << ee.getBCHDigit(e) - ee.getBCHDigit(ee.G18);
    return t << 12 | e;
  },
  getBCHDigit: function(t) {
    for (var e = 0; t != 0; )
      e++, t >>>= 1;
    return e;
  },
  getPatternPosition: function(t) {
    return ee.PATTERN_POSITION_TABLE[t - 1];
  },
  getMask: function(t, e, n) {
    switch (t) {
      case Oe.PATTERN000:
        return (e + n) % 2 == 0;
      case Oe.PATTERN001:
        return e % 2 == 0;
      case Oe.PATTERN010:
        return n % 3 == 0;
      case Oe.PATTERN011:
        return (e + n) % 3 == 0;
      case Oe.PATTERN100:
        return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
      case Oe.PATTERN101:
        return e * n % 2 + e * n % 3 == 0;
      case Oe.PATTERN110:
        return (e * n % 2 + e * n % 3) % 2 == 0;
      case Oe.PATTERN111:
        return (e * n % 3 + (e + n) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + t);
    }
  },
  getErrorCorrectPolynomial: function(t) {
    for (var e = new rr([1], 0), n = 0; n < t; n++)
      e = e.multiply(new rr([1, oa.gexp(n)], 0));
    return e;
  },
  getLengthInBits: function(t, e) {
    if (1 <= e && e < 10)
      switch (t) {
        case ge.MODE_NUMBER:
          return 10;
        case ge.MODE_ALPHA_NUM:
          return 9;
        case ge.MODE_8BIT_BYTE:
          return 8;
        case ge.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + t);
      }
    else if (e < 27)
      switch (t) {
        case ge.MODE_NUMBER:
          return 12;
        case ge.MODE_ALPHA_NUM:
          return 11;
        case ge.MODE_8BIT_BYTE:
          return 16;
        case ge.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + t);
      }
    else if (e < 41)
      switch (t) {
        case ge.MODE_NUMBER:
          return 14;
        case ge.MODE_ALPHA_NUM:
          return 13;
        case ge.MODE_8BIT_BYTE:
          return 16;
        case ge.MODE_KANJI:
          return 12;
        default:
          throw new Error("mode:" + t);
      }
    else
      throw new Error("type:" + e);
  },
  getLostPoint: function(t) {
    for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
      for (var s = 0; s < e; s++) {
        for (var i = 0, o = t.isDark(r, s), a = -1; a <= 1; a++)
          if (!(r + a < 0 || e <= r + a))
            for (var l = -1; l <= 1; l++)
              s + l < 0 || e <= s + l || a == 0 && l == 0 || o == t.isDark(r + a, s + l) && i++;
        i > 5 && (n += 3 + i - 5);
      }
    for (var r = 0; r < e - 1; r++)
      for (var s = 0; s < e - 1; s++) {
        var c = 0;
        t.isDark(r, s) && c++, t.isDark(r + 1, s) && c++, t.isDark(r, s + 1) && c++, t.isDark(r + 1, s + 1) && c++, (c == 0 || c == 4) && (n += 3);
      }
    for (var r = 0; r < e; r++)
      for (var s = 0; s < e - 6; s++)
        t.isDark(r, s) && !t.isDark(r, s + 1) && t.isDark(r, s + 2) && t.isDark(r, s + 3) && t.isDark(r, s + 4) && !t.isDark(r, s + 5) && t.isDark(r, s + 6) && (n += 40);
    for (var s = 0; s < e; s++)
      for (var r = 0; r < e - 6; r++)
        t.isDark(r, s) && !t.isDark(r + 1, s) && t.isDark(r + 2, s) && t.isDark(r + 3, s) && t.isDark(r + 4, s) && !t.isDark(r + 5, s) && t.isDark(r + 6, s) && (n += 40);
    for (var u = 0, s = 0; s < e; s++)
      for (var r = 0; r < e; r++)
        t.isDark(r, s) && u++;
    var d = Math.abs(100 * u / e / e - 50) / 5;
    return n += d * 10, n;
  }
}, aa = ee, la = ra, Xr = sa, Gr = ia, Ce = aa, ua = Qr;
function Se(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
var pe = Se.prototype;
pe.addData = function(t) {
  var e = new la(t);
  this.dataList.push(e), this.dataCache = null;
};
pe.isDark = function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
    throw new Error(t + "," + e);
  return this.modules[t][e];
};
pe.getModuleCount = function() {
  return this.moduleCount;
};
pe.make = function() {
  if (this.typeNumber < 1) {
    var t = 1;
    for (t = 1; t < 40; t++) {
      for (var e = Xr.getRSBlocks(t, this.errorCorrectLevel), n = new Gr(), r = 0, s = 0; s < e.length; s++)
        r += e[s].dataCount;
      for (var s = 0; s < this.dataList.length; s++) {
        var i = this.dataList[s];
        n.put(i.mode, 4), n.put(i.getLength(), Ce.getLengthInBits(i.mode, t)), i.write(n);
      }
      if (n.getLengthInBits() <= r * 8)
        break;
    }
    this.typeNumber = t;
  }
  this.makeImpl(!1, this.getBestMaskPattern());
};
pe.makeImpl = function(t, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var n = 0; n < this.moduleCount; n++) {
    this.modules[n] = new Array(this.moduleCount);
    for (var r = 0; r < this.moduleCount; r++)
      this.modules[n][r] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = Se.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
};
pe.setupPositionProbePattern = function(t, e) {
  for (var n = -1; n <= 7; n++)
    if (!(t + n <= -1 || this.moduleCount <= t + n))
      for (var r = -1; r <= 7; r++)
        e + r <= -1 || this.moduleCount <= e + r || (0 <= n && n <= 6 && (r == 0 || r == 6) || 0 <= r && r <= 6 && (n == 0 || n == 6) || 2 <= n && n <= 4 && 2 <= r && r <= 4 ? this.modules[t + n][e + r] = !0 : this.modules[t + n][e + r] = !1);
};
pe.getBestMaskPattern = function() {
  for (var t = 0, e = 0, n = 0; n < 8; n++) {
    this.makeImpl(!0, n);
    var r = Ce.getLostPoint(this);
    (n == 0 || t > r) && (t = r, e = n);
  }
  return e;
};
pe.createMovieClip = function(t, e, n) {
  var r = t.createEmptyMovieClip(e, n), s = 1;
  this.make();
  for (var i = 0; i < this.modules.length; i++)
    for (var o = i * s, a = 0; a < this.modules[i].length; a++) {
      var l = a * s, c = this.modules[i][a];
      c && (r.beginFill(0, 100), r.moveTo(l, o), r.lineTo(l + s, o), r.lineTo(l + s, o + s), r.lineTo(l, o + s), r.endFill());
    }
  return r;
};
pe.setupTimingPattern = function() {
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
};
pe.setupPositionAdjustPattern = function() {
  for (var t = Ce.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
    for (var n = 0; n < t.length; n++) {
      var r = t[e], s = t[n];
      if (this.modules[r][s] == null)
        for (var i = -2; i <= 2; i++)
          for (var o = -2; o <= 2; o++)
            i == -2 || i == 2 || o == -2 || o == 2 || i == 0 && o == 0 ? this.modules[r + i][s + o] = !0 : this.modules[r + i][s + o] = !1;
    }
};
pe.setupTypeNumber = function(t) {
  for (var e = Ce.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
    var r = !t && (e >> n & 1) == 1;
    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r;
  }
  for (var n = 0; n < 18; n++) {
    var r = !t && (e >> n & 1) == 1;
    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r;
  }
};
pe.setupTypeInfo = function(t, e) {
  for (var n = this.errorCorrectLevel << 3 | e, r = Ce.getBCHTypeInfo(n), s = 0; s < 15; s++) {
    var i = !t && (r >> s & 1) == 1;
    s < 6 ? this.modules[s][8] = i : s < 8 ? this.modules[s + 1][8] = i : this.modules[this.moduleCount - 15 + s][8] = i;
  }
  for (var s = 0; s < 15; s++) {
    var i = !t && (r >> s & 1) == 1;
    s < 8 ? this.modules[8][this.moduleCount - s - 1] = i : s < 9 ? this.modules[8][15 - s - 1 + 1] = i : this.modules[8][15 - s - 1] = i;
  }
  this.modules[this.moduleCount - 8][8] = !t;
};
pe.mapData = function(t, e) {
  for (var n = -1, r = this.moduleCount - 1, s = 7, i = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[r][o - a] == null) {
          var l = !1;
          i < t.length && (l = (t[i] >>> s & 1) == 1);
          var c = Ce.getMask(e, r, o - a);
          c && (l = !l), this.modules[r][o - a] = l, s--, s == -1 && (i++, s = 7);
        }
      if (r += n, r < 0 || this.moduleCount <= r) {
        r -= n, n = -n;
        break;
      }
    }
};
Se.PAD0 = 236;
Se.PAD1 = 17;
Se.createData = function(t, e, n) {
  for (var r = Xr.getRSBlocks(t, e), s = new Gr(), i = 0; i < n.length; i++) {
    var o = n[i];
    s.put(o.mode, 4), s.put(o.getLength(), Ce.getLengthInBits(o.mode, t)), o.write(s);
  }
  for (var a = 0, i = 0; i < r.length; i++)
    a += r[i].dataCount;
  if (s.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + a * 8 + ")");
  for (s.getLengthInBits() + 4 <= a * 8 && s.put(0, 4); s.getLengthInBits() % 8 != 0; )
    s.putBit(!1);
  for (; !(s.getLengthInBits() >= a * 8 || (s.put(Se.PAD0, 8), s.getLengthInBits() >= a * 8)); )
    s.put(Se.PAD1, 8);
  return Se.createBytes(s, r);
};
Se.createBytes = function(t, e) {
  for (var n = 0, r = 0, s = 0, i = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
    var l = e[a].dataCount, c = e[a].totalCount - l;
    r = Math.max(r, l), s = Math.max(s, c), i[a] = new Array(l);
    for (var u = 0; u < i[a].length; u++)
      i[a][u] = 255 & t.buffer[u + n];
    n += l;
    var d = Ce.getErrorCorrectPolynomial(c), f = new ua(i[a], d.getLength() - 1), y = f.mod(d);
    o[a] = new Array(d.getLength() - 1);
    for (var u = 0; u < o[a].length; u++) {
      var p = u + y.getLength() - o[a].length;
      o[a][u] = p >= 0 ? y.get(p) : 0;
    }
  }
  for (var m = 0, u = 0; u < e.length; u++)
    m += e[u].totalCount;
  for (var h = new Array(m), w = 0, u = 0; u < r; u++)
    for (var a = 0; a < e.length; a++)
      u < i[a].length && (h[w++] = i[a][u]);
  for (var u = 0; u < s; u++)
    for (var a = 0; a < e.length; a++)
      u < o[a].length && (h[w++] = o[a][u]);
  return h;
};
var ca = Se, dn = {};
Object.defineProperty(dn, "__esModule", {
  value: !0
});
var fa = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, da = Vr, me = es(da), Zr = rn(), nt = es(Zr);
function es(t) {
  return t && t.__esModule ? t : { default: t };
}
function pa(t, e) {
  var n = {};
  for (var r in t)
    e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  return n;
}
var ha = {
  bgColor: me.default.oneOfType([me.default.object, me.default.string]).isRequired,
  bgD: me.default.string.isRequired,
  fgColor: me.default.oneOfType([me.default.object, me.default.string]).isRequired,
  fgD: me.default.string.isRequired,
  size: me.default.number.isRequired,
  title: me.default.string,
  viewBoxSize: me.default.number.isRequired,
  xmlns: me.default.string
}, pn = (0, Zr.forwardRef)(function(t, e) {
  var n = t.bgColor, r = t.bgD, s = t.fgD, i = t.fgColor, o = t.size, a = t.title, l = t.viewBoxSize, c = t.xmlns, u = c === void 0 ? "http://www.w3.org/2000/svg" : c, d = pa(t, ["bgColor", "bgD", "fgD", "fgColor", "size", "title", "viewBoxSize", "xmlns"]);
  return nt.default.createElement(
    "svg",
    fa({}, d, { height: o, ref: e, viewBox: "0 0 " + l + " " + l, width: o, xmlns: u }),
    a ? nt.default.createElement(
      "title",
      null,
      a
    ) : null,
    nt.default.createElement("path", { d: r, fill: n }),
    nt.default.createElement("path", { d: s, fill: i })
  );
});
pn.displayName = "QRCodeSvg";
pn.propTypes = ha;
dn.default = pn;
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.QRCode = void 0;
var ga = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, ma = Vr, Te = We(ma), ya = Kr, va = We(ya), ba = ca, Ea = We(ba), ts = rn(), wa = We(ts), Sa = dn, Ta = We(Sa);
function We(t) {
  return t && t.__esModule ? t : { default: t };
}
function xa(t, e) {
  var n = {};
  for (var r in t)
    e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  return n;
}
var Oa = {
  bgColor: Te.default.oneOfType([Te.default.object, Te.default.string]),
  fgColor: Te.default.oneOfType([Te.default.object, Te.default.string]),
  level: Te.default.string,
  size: Te.default.number,
  value: Te.default.string.isRequired
}, Rt = (0, ts.forwardRef)(function(t, e) {
  var n = t.bgColor, r = n === void 0 ? "#FFFFFF" : n, s = t.fgColor, i = s === void 0 ? "#000000" : s, o = t.level, a = o === void 0 ? "L" : o, l = t.size, c = l === void 0 ? 256 : l, u = t.value, d = xa(t, ["bgColor", "fgColor", "level", "size", "value"]), f = new Ea.default(-1, va.default[a]);
  f.addData(u), f.make();
  var y = f.modules;
  return wa.default.createElement(Ta.default, ga({}, d, {
    bgColor: r,
    bgD: y.map(function(p, m) {
      return p.map(function(h, w) {
        return h ? "" : "M " + w + " " + m + " l 1 0 0 1 -1 0 Z";
      }).join(" ");
    }).join(" "),
    fgColor: i,
    fgD: y.map(function(p, m) {
      return p.map(function(h, w) {
        return h ? "M " + w + " " + m + " l 1 0 0 1 -1 0 Z" : "";
      }).join(" ");
    }).join(" "),
    ref: e,
    size: c,
    viewBoxSize: y.length
  }));
});
Ot.QRCode = Rt;
Rt.displayName = "QRCode";
Rt.propTypes = Oa;
var Fa = Ot.default = Rt, te = [];
for (var jt = 0; jt < 256; ++jt)
  te.push((jt + 256).toString(16).slice(1));
function Ra(t, e = 0) {
  return (te[t[e + 0]] + te[t[e + 1]] + te[t[e + 2]] + te[t[e + 3]] + "-" + te[t[e + 4]] + te[t[e + 5]] + "-" + te[t[e + 6]] + te[t[e + 7]] + "-" + te[t[e + 8]] + te[t[e + 9]] + "-" + te[t[e + 10]] + te[t[e + 11]] + te[t[e + 12]] + te[t[e + 13]] + te[t[e + 14]] + te[t[e + 15]]).toLowerCase();
}
var rt, Ca = new Uint8Array(16);
function Pa() {
  if (!rt && (rt = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rt))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return rt(Ca);
}
var La = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const sr = {
  randomUUID: La
};
function ja(t, e, n) {
  if (sr.randomUUID && !e && !t)
    return sr.randomUUID();
  t = t || {};
  var r = t.random || (t.rng || Pa)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Ra(r);
}
export {
  W as B,
  Ma as C,
  Ba as I,
  Da as Q,
  Ia as X,
  Fa as _,
  ka as a,
  G as b,
  ie as i,
  $a as u,
  ja as v
};
