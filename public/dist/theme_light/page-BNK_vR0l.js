var tt = Object.defineProperty;
var nt = (o, r, u) => r in o ? tt(o, r, { enumerable: !0, configurable: !0, writable: !0, value: u }) : o[r] = u;
var Ae = (o, r, u) => nt(o, typeof r != "symbol" ? r + "" : r, u);
import { j as n } from "./vendor-radix-BYJ0AyiX.js";
import { N as st, M as at, O as rt, q as ke, m as it, n as ot, v as lt, c as M, g as $e, I as qe, aH as ct, t as D, D as dt, b as ut, d as ht, e as ft, aa as pt, B as _e, aI as mt, i as je, aJ as Ne, f as Re, j as De, a as gt, aK as xt, ag as He, aq as bt, aL as ze, a4 as pe, $ as be, h as vt, ad as yt, ar as kt, G as wt } from "./main-COWkWeS2.js";
import { r as S, p as Me, o as _t, q as Tt, d as jt, g as Et, k as Ge } from "./vendor-react-CuOkI7kW.js";
import { u as Nt, i as Ke, L as Ct, f as Qe, g as Fe, T as St, P as At, I as It } from "./vendor-ui-utils-2_WY-nJY.js";
import { u as Je, B as Ie } from "./vendor-utils-DMWa-Mp_.js";
import { u as Ot } from "./useTransaction-CgxDhq0R.js";
import { w as Pe, x as Rt, j as Dt, l as Mt, n as Ft, i as Te, u as Ce } from "./vendor-web3-DDgB3Js4.js";
import { d as Vt } from "./index-BU5n2YE1.js";
const $t = (o) => {
  const {
    componentCls: r,
    sizePaddingEdgeHorizontal: u,
    colorSplit: a,
    lineWidth: g,
    textPaddingInline: i,
    orientationMargin: b,
    verticalMarginInline: p
  } = o;
  return {
    [r]: Object.assign(Object.assign({}, rt(o)), {
      borderBlockStart: `${ke(g)} solid ${a}`,
      // vertical
      "&-vertical": {
        position: "relative",
        top: "-0.06em",
        display: "inline-block",
        height: "0.9em",
        marginInline: p,
        marginBlock: 0,
        verticalAlign: "middle",
        borderTop: 0,
        borderInlineStart: `${ke(g)} solid ${a}`
      },
      "&-horizontal": {
        display: "flex",
        clear: "both",
        width: "100%",
        minWidth: "100%",
        // Fix https://github.com/ant-design/ant-design/issues/10914
        margin: `${ke(o.dividerHorizontalGutterMargin)} 0`
      },
      [`&-horizontal${r}-with-text`]: {
        display: "flex",
        alignItems: "center",
        margin: `${ke(o.dividerHorizontalWithTextGutterMargin)} 0`,
        color: o.colorTextHeading,
        fontWeight: 500,
        fontSize: o.fontSizeLG,
        whiteSpace: "nowrap",
        textAlign: "center",
        borderBlockStart: `0 ${a}`,
        "&::before, &::after": {
          position: "relative",
          width: "50%",
          borderBlockStart: `${ke(g)} solid transparent`,
          // Chrome not accept `inherit` in `border-top`
          borderBlockStartColor: "inherit",
          borderBlockEnd: 0,
          transform: "translateY(50%)",
          content: "''"
        }
      },
      [`&-horizontal${r}-with-text-left`]: {
        "&::before": {
          width: `calc(${b} * 100%)`
        },
        "&::after": {
          width: `calc(100% - ${b} * 100%)`
        }
      },
      [`&-horizontal${r}-with-text-right`]: {
        "&::before": {
          width: `calc(100% - ${b} * 100%)`
        },
        "&::after": {
          width: `calc(${b} * 100%)`
        }
      },
      [`${r}-inner-text`]: {
        display: "inline-block",
        paddingBlock: 0,
        paddingInline: i
      },
      "&-dashed": {
        background: "none",
        borderColor: a,
        borderStyle: "dashed",
        borderWidth: `${ke(g)} 0 0`
      },
      [`&-horizontal${r}-with-text${r}-dashed`]: {
        "&::before, &::after": {
          borderStyle: "dashed none none"
        }
      },
      [`&-vertical${r}-dashed`]: {
        borderInlineStartWidth: g,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      "&-dotted": {
        background: "none",
        borderColor: a,
        borderStyle: "dotted",
        borderWidth: `${ke(g)} 0 0`
      },
      [`&-horizontal${r}-with-text${r}-dotted`]: {
        "&::before, &::after": {
          borderStyle: "dotted none none"
        }
      },
      [`&-vertical${r}-dotted`]: {
        borderInlineStartWidth: g,
        borderInlineEnd: 0,
        borderBlockStart: 0,
        borderBlockEnd: 0
      },
      [`&-plain${r}-with-text`]: {
        color: o.colorText,
        fontWeight: "normal",
        fontSize: o.fontSize
      },
      [`&-horizontal${r}-with-text-left${r}-no-default-orientation-margin-left`]: {
        "&::before": {
          width: 0
        },
        "&::after": {
          width: "100%"
        },
        [`${r}-inner-text`]: {
          paddingInlineStart: u
        }
      },
      [`&-horizontal${r}-with-text-right${r}-no-default-orientation-margin-right`]: {
        "&::before": {
          width: "100%"
        },
        "&::after": {
          width: 0
        },
        [`${r}-inner-text`]: {
          paddingInlineEnd: u
        }
      }
    })
  };
}, Lt = (o) => ({
  textPaddingInline: "1em",
  orientationMargin: 0.05,
  verticalMarginInline: o.marginXS
}), zt = st("Divider", (o) => {
  const r = at(o, {
    dividerHorizontalWithTextGutterMargin: o.margin,
    dividerHorizontalGutterMargin: o.marginLG,
    sizePaddingEdgeHorizontal: 0
  });
  return [$t(r)];
}, Lt, {
  unitless: {
    orientationMargin: !0
  }
});
var Pt = function(o, r) {
  var u = {};
  for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && r.indexOf(a) < 0 && (u[a] = o[a]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function") for (var g = 0, a = Object.getOwnPropertySymbols(o); g < a.length; g++)
    r.indexOf(a[g]) < 0 && Object.prototype.propertyIsEnumerable.call(o, a[g]) && (u[a[g]] = o[a[g]]);
  return u;
};
const Ye = (o) => {
  const {
    getPrefixCls: r,
    direction: u,
    divider: a
  } = S.useContext(it), {
    prefixCls: g,
    type: i = "horizontal",
    orientation: b = "center",
    orientationMargin: p,
    className: c,
    rootClassName: _,
    children: N,
    dashed: O,
    variant: F = "solid",
    plain: Z,
    style: B
  } = o, re = Pt(o, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), R = r("divider", g), [ee, z, P] = zt(R), G = !!N, te = b === "left" && p != null, K = b === "right" && p != null, A = ot(R, a == null ? void 0 : a.className, z, P, `${R}-${i}`, {
    [`${R}-with-text`]: G,
    [`${R}-with-text-${b}`]: G,
    [`${R}-dashed`]: !!O,
    [`${R}-${F}`]: F !== "solid",
    [`${R}-plain`]: !!Z,
    [`${R}-rtl`]: u === "rtl",
    [`${R}-no-default-orientation-margin-left`]: te,
    [`${R}-no-default-orientation-margin-right`]: K
  }, c, _), t = S.useMemo(() => typeof p == "number" ? p : /^\d+$/.test(p) ? Number(p) : p, [p]), e = Object.assign(Object.assign({}, te && {
    marginLeft: t
  }), K && {
    marginRight: t
  });
  if (Me.env.NODE_ENV !== "production") {
    const l = lt("Divider");
    Me.env.NODE_ENV !== "production" && l(!N || i !== "vertical", "usage", "`children` not working in `vertical` mode.");
  }
  return ee(/* @__PURE__ */ S.createElement("div", Object.assign({
    className: A,
    style: Object.assign(Object.assign({}, a == null ? void 0 : a.style), B)
  }, re, {
    role: "separator"
  }), N && i !== "vertical" && /* @__PURE__ */ S.createElement("span", {
    className: `${R}-inner-text`,
    style: e
  }, N)));
};
Me.env.NODE_ENV !== "production" && (Ye.displayName = "Divider");
const Oe = 337;
function Bt({
  className: o,
  onSuccess: r,
  disabled: u = !1,
  loading: a = !1,
  ...g
}) {
  const [i, b] = S.useState(!1), [p, c] = S.useState(0), [_, N] = S.useState(!1), O = S.useRef(null), F = S.useRef(null), Z = S.useRef(0), B = () => {
    const z = Date.now();
    z - Z.current >= 1e3 ? (Z.current = z, N(!0), b(!1), $e("onSuccess"), r == null || r()) : (c(0), b(!1));
  }, re = (z, P) => {
    u || a || b(!0);
  }, R = (z) => {
    if (!i || !O.current || !F.current) return;
    const P = O.current, G = F.current, te = P.getBoundingClientRect();
    let K = z - te.left - G.offsetWidth / 2;
    if (z - te.left < G.offsetWidth / 2) {
      c(0);
      return;
    }
    K + G.offsetWidth >= Oe && (K = Oe - G.offsetWidth - 2, B()), c(K);
  }, ee = () => {
    _ || c(0), b(!1);
  };
  return S.useEffect(() => {
    const z = (G) => R(G.clientX), P = (G) => {
      G.preventDefault(), R(G.touches[0].clientX);
    };
    return i && (window.addEventListener("mousemove", z), window.addEventListener("mouseup", ee), window.addEventListener("touchmove", P, { passive: !1 }), window.addEventListener("touchend", ee)), () => {
      window.removeEventListener("mousemove", z), window.removeEventListener("mouseup", ee), window.removeEventListener("touchmove", P), window.removeEventListener("touchend", ee);
    };
  }, [i]), S.useEffect(() => {
    !u && !a && (c(0), N(!1));
  }, [u, a]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: O,
      className: M(
        "relative h-[42px] rounded-full ring-1 ring-[#e0e0e0] ring-offset-[3px] cursor-pointer select-none touch-none",
        u && "cursor-not-allowed",
        o
      ),
      style: { width: `${Oe}px` },
      ...g,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: M(
              "absolute left-0 h-[42px] bg-black rounded-full",
              u && "bg-[#f2f2f2]"
            ),
            style: { width: `${p + 42}px` }
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: F,
            className: M(
              "absolute z-10 left-0 top-1/2 -translate-y-1/2 w-[40px] h-[40px] bg-black rounded-full flex items-center justify-center cursor-grab",
              i && "cursor-grabbing",
              u && "bg-[#f2f2f2]"
            ),
            style: { transform: `translate(${p}px, -50%)` },
            onMouseDown: (z) => re(z.clientX),
            onTouchStart: (z) => re(z.touches[0].clientX),
            children: /* @__PURE__ */ n.jsx(Nt, { className: M("w-[20px] h-[20px] text-white") })
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute text-white inset-0 flex items-center justify-center pointer-events-none", children: a ? /* @__PURE__ */ n.jsx(Ke, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ n.jsx("span", { className: M(
          "text-black text-base font-bold leading-tight",
          u && "text-[#e0e0e0]"
        ), children: "Scroll to send" }) })
      ]
    }
  );
}
function Wt({
  index: o,
  transfer: r,
  validation: {
    isValidating: u,
    isValidEmail: a,
    fullAddress: g,
    error: i
  },
  handleToChange: b,
  handleToBlur: p,
  sending: c
}) {
  const { t: _ } = Je(), N = _("/dashboard.[token].sendModal.unregisteredEmailNotice");
  return /* @__PURE__ */ n.jsxs("div", { className: M(
    "flex items-center px-0 relative",
    (a && g || i) && "mb-[16px] tablet:mb-0"
  ), children: [
    /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
      o + 1,
      "."
    ] }),
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: c,
        value: r.to,
        onChange: (O) => b(O, o),
        onBlur: () => p(o),
        placeholder: "Enter email or crypto address",
        className: M(
          "desktop:w-[380px] laptop:w-[318px] tablet:w-[426px] w-[322px]",
          a && "border-green-500 focus-visible:border-green-500",
          i && "border-destructive focus-visible:border-destructive",
          i === N && "border-blue-500 focus-visible:border-blue-500",
          "pr-10"
        )
      }
    ),
    u && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ n.jsx(Ct, { className: "animate-spin", size: 16 }) }),
    a && !u && !i && /* @__PURE__ */ n.jsx(Qe, { className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500", size: 16 }),
    i && !u && /* @__PURE__ */ n.jsx(Fe, { className: M(
      "absolute right-3 top-1/2 transform -translate-y-1/2 text-destructive",
      i === N && "text-blue-500"
    ), size: 16 }),
    a && g && /* @__PURE__ */ n.jsx("p", { className: "absolute -bottom-[20px] left-[22px] mt-1 text-xs text-primary/60", children: g }),
    i && /* @__PURE__ */ n.jsx("p", { className: M(
      "absolute -bottom-[20px] left-[22px] text-xs text-destructive",
      i === N && "text-blue-400"
    ), children: i })
  ] });
}
function Be({
  index: o,
  transfer: r,
  handleNoteChange: u,
  sending: a
}) {
  return /* @__PURE__ */ n.jsx(
    ct,
    {
      disabled: a,
      rows: 1,
      value: r.note,
      onChange: (g) => u(g, o),
      className: M(
        "min-h-[40px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border focus-visible:border-black placeholder:text-black/25",
        "desktop:w-[308px] laptop:w-[299px] tablet:w-[658px] w-[322px]"
      ),
      placeholder: "Write a note to the recipient"
    }
  );
}
function We({
  index: o,
  handleDeleteTransfer: r,
  sending: u
}) {
  return /* @__PURE__ */ n.jsx(
    St,
    {
      className: M(
        "w-[20px] h-[20px] text-[#979797] cursor-pointer",
        u && "hidden"
      ),
      onClick: () => r(o)
    }
  );
}
const Ut = D.getAllTokens().map((o) => o.tokenType);
function qt({
  handleTokenTypeChange: o,
  index: r,
  transfer: u,
  sending: a
}) {
  return /* @__PURE__ */ n.jsxs(dt, { children: [
    /* @__PURE__ */ n.jsxs(ut, { disabled: a, className: "flex items-center gap-[6px] px-0 py-1 focus:outline-none", children: [
      /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: D.getToken(u.token).logo, alt: "" }),
      /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: D.getToken(u.token).symbol }),
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/down_caret.svg", alt: "" })
    ] }),
    /* @__PURE__ */ n.jsx(ht, { align: "start", className: "bg-white", children: Ut.map((g) => /* @__PURE__ */ n.jsxs(
      ft,
      {
        disabled: a,
        onClick: () => o(g, r),
        className: "flex items-center gap-[6px]",
        children: [
          /* @__PURE__ */ n.jsx("img", { className: "w-[16px] h-[16px]", src: D.getToken(g).logo, alt: "" }),
          /* @__PURE__ */ n.jsx("span", { className: "font-medium text-sm", children: D.getToken(g).symbol })
        ]
      },
      g
    )) })
  ] });
}
function Ht({
  isOpen: o,
  onClose: r
}) {
  const u = /* @__PURE__ */ n.jsxs("div", { className: "flex justify-end gap-4", children: [
    /* @__PURE__ */ n.jsx(_e, { className: "", variant: "outline", onClick: () => r(!0), children: "Quit" }),
    /* @__PURE__ */ n.jsx(_e, { className: "", onClick: () => r(!1), children: "Stay" })
  ] });
  return /* @__PURE__ */ n.jsx(
    pt,
    {
      isOpen: o,
      onClose: () => r(!1),
      title: "Are you sure you want to quit?",
      footer: u,
      children: /* @__PURE__ */ n.jsx("p", { className: "text-sm leading-none my-3", children: "Your progress may not be saved." })
    }
  );
}
function Gt({ shouldBlock: o }) {
  const [r, u] = S.useState(!1);
  _t(
    S.useCallback((i) => {
      if (o)
        return i.preventDefault(), i.returnValue = "You have unsaved changes, are you sure you want to leave?";
    }, [o])
  );
  const a = Tt(
    S.useCallback(() => o ? (u(!0), !0) : !1, [o])
  );
  return {
    showExitPrompt: r,
    handleExitPrompt: (i) => {
      var b;
      u(!1), i && ((b = a == null ? void 0 : a.proceed) == null || b.call(a));
    }
  };
}
class Kt {
  constructor(r = 800) {
    Ae(this, "cache", /* @__PURE__ */ new Map());
    Ae(this, "expiryTime");
    this.expiryTime = r;
  }
  async getOrCreate(r, u) {
    const a = Date.now(), g = this.cache.get(r);
    if (g && a - g.timestamp < this.expiryTime)
      return g.promise;
    const i = u();
    this.cache.set(r, {
      promise: i,
      timestamp: a
    });
    try {
      return await i;
    } finally {
      setTimeout(() => {
        var b;
        ((b = this.cache.get(r)) == null ? void 0 : b.timestamp) === a && this.cache.delete(r);
      }, this.expiryTime);
    }
  }
  clear() {
    this.cache.clear();
  }
}
const Ue = /* @__PURE__ */ new Map(), Qt = ({
  tokenType: o,
  transferParams: r,
  fromAddress: u
}) => JSON.stringify({
  tokenType: o,
  to: r.to.toLowerCase(),
  amount: r.amount.toString(),
  from: u.toLowerCase()
}), Jt = new Kt(5e3);
async function Yt({
  tokenType: o,
  transferParams: r,
  fromAddress: u,
  defaultGasPrice: a,
  defaultBlock: g
}) {
  const i = Qt({ tokenType: o, transferParams: r, fromAddress: u });
  return Jt.getOrCreate(i, async () => {
    const b = Ue.get(i);
    if (b)
      return b.result;
    try {
      const p = D.getToken(o).viemChain;
      if (!p) return null;
      const c = Dt({
        chain: p,
        transport: Mt()
      });
      let _;
      if (D.isERC20Token(o) && (_ = D.getToken(o).contractAddress, !_))
        throw new Error("Invalid token contract address");
      let N;
      if (D.isERC20Token(o)) {
        const G = Ft({
          abi: mt,
          functionName: "transfer",
          args: [r.to, r.amount]
        });
        N = {
          to: _,
          data: G,
          value: BigInt(0)
        };
      } else
        N = {
          to: r.to,
          value: r.amount
        };
      $e("start to call getEstimatedGasFeeByToken", { tokenType: o, transferParams: r, fromAddress: u });
      const O = await c.estimateGas({
        ...N,
        account: u
      }), F = a || await c.getGasPrice(), B = (g || await c.getBlock()).baseFeePerGas || BigInt(0), re = F > B ? F - B : BigInt(1e9), R = B + re * BigInt(2), ee = O * R, z = je(
        (Number(ee) / Math.pow(10, 18)).toString(),
        18
      ), P = {
        estimatedGas: O,
        maxFeePerGas: R,
        maxPriorityFeePerGas: re,
        estimatedTotalFee: ee,
        baseFee: B,
        gasPrice: F,
        feeInTokens: Ne(z)
      };
      return Ue.set(i, {
        result: P,
        params: {
          tokenType: o,
          transferParams: r,
          fromAddress: u
        }
      }), console.log("Cache updated:", i), P;
    } catch (p) {
      throw console.error("Gas estimation error:", p), p;
    }
  });
}
const Xt = (o) => {
  if (!o.length)
    return { isValid: !1, error: "CSV file is empty" };
  const r = o[0];
  if (!Array.isArray(r) || r.length < 4)
    return {
      isValid: !1,
      error: "Invalid CSV format: missing required columns"
    };
  const u = ["To", "Note", "Token", "Amount"], a = r.map((i) => i.trim());
  for (let i = 0; i < u.length; i++)
    if (a[i] !== u[i])
      return {
        isValid: !1,
        error: `Invalid header format. Expected: ${u.join(", ")}`
      };
  const g = D.getAllTokens().map((i) => i.tokenType);
  for (let i = 1; i < o.length; i++) {
    const b = o[i];
    if (!(!b[0] || b[0].trim() === "")) {
      if (!(Te(b[0]) || De.test(b[0])))
        return {
          isValid: !1,
          error: `Invalid to format at row ${i + 1}`
        };
      if (!b[2] || !g.includes(b[2].toUpperCase()))
        return {
          isValid: !1,
          error: `Invalid token type at row ${i + 1}. Allowed tokens: ${g.join(", ")}`
        };
      if (!b[3] || isNaN(Number(b[3])) || Number(b[3]) <= 0)
        return {
          isValid: !1,
          error: `Invalid amount at row ${i + 1}`
        };
    }
  }
  return { isValid: !0 };
}, Ve = /* @__PURE__ */ new Map(), Zt = 5 * 60 * 1e3;
async function en(o) {
  const r = Ve.get(o), u = Date.now();
  if (r && u - r.timestamp < Zt)
    return {
      data: r.data
    };
  const a = await Re.get("/address/", {
    params: { email: o }
  });
  return Ve.set(o, {
    data: a.data,
    timestamp: u
  }), a;
}
function tn() {
  Ve.clear();
}
const Xe = (o) => o ? Object.entries(o).reduce((r, [u, a]) => {
  if (u === "usdValue") return r;
  const g = D.getToken(u).gasSymbol, i = Pe(r[g] || "0", 18);
  return r[g] = Rt(i + Pe(a, 18), 18), r;
}, {}) : null;
var Ze = { exports: {} };
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(o, r) {
  (function(u, a) {
    o.exports = a();
  })(jt, function u() {
    var a = typeof self < "u" ? self : typeof window < "u" ? window : a !== void 0 ? a : {}, g = !a.document && !!a.postMessage, i = a.IS_PAPA_WORKER || !1, b = {}, p = 0, c = { parse: function(t, e) {
      var l = (e = e || {}).dynamicTyping || !1;
      if (A(l) && (e.dynamicTypingFunction = l, l = {}), e.dynamicTyping = l, e.transform = !!A(e.transform) && e.transform, e.worker && c.WORKERS_SUPPORTED) {
        var x = function() {
          if (!c.WORKERS_SUPPORTED) return !1;
          var k = (W = a.URL || a.webkitURL || null, V = u.toString(), c.BLOB_URL || (c.BLOB_URL = W.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", V, ")();"], { type: "text/javascript" })))), T = new a.Worker(k), W, V;
          return T.onmessage = z, T.id = p++, b[T.id] = T;
        }();
        return x.userStep = e.step, x.userChunk = e.chunk, x.userComplete = e.complete, x.userError = e.error, e.step = A(e.step), e.chunk = A(e.chunk), e.complete = A(e.complete), e.error = A(e.error), delete e.worker, void x.postMessage({ input: t, config: e, workerId: x.id });
      }
      var v = null;
      return c.NODE_STREAM_INPUT, typeof t == "string" ? (t = function(k) {
        return k.charCodeAt(0) === 65279 ? k.slice(1) : k;
      }(t), v = e.download ? new O(e) : new Z(e)) : t.readable === !0 && A(t.read) && A(t.on) ? v = new B(e) : (a.File && t instanceof File || t instanceof Object) && (v = new F(e)), v.stream(t);
    }, unparse: function(t, e) {
      var l = !1, x = !0, v = ",", k = `\r
`, T = '"', W = T + T, V = !1, w = null, U = !1;
      (function() {
        if (typeof e == "object") {
          if (typeof e.delimiter != "string" || c.BAD_DELIMITERS.filter(function(y) {
            return e.delimiter.indexOf(y) !== -1;
          }).length || (v = e.delimiter), (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (l = e.quotes), typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (V = e.skipEmptyLines), typeof e.newline == "string" && (k = e.newline), typeof e.quoteChar == "string" && (T = e.quoteChar), typeof e.header == "boolean" && (x = e.header), Array.isArray(e.columns)) {
            if (e.columns.length === 0) throw new Error("Option columns is empty");
            w = e.columns;
          }
          e.escapeChar !== void 0 && (W = e.escapeChar + T), (typeof e.escapeFormulae == "boolean" || e.escapeFormulae instanceof RegExp) && (U = e.escapeFormulae instanceof RegExp ? e.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var j = new RegExp(R(T), "g");
      if (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t)) {
        if (!t.length || Array.isArray(t[0])) return oe(null, t, V);
        if (typeof t[0] == "object") return oe(w || Object.keys(t[0]), t, V);
      } else if (typeof t == "object") return typeof t.data == "string" && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields || w), t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : typeof t.data[0] == "object" ? Object.keys(t.data[0]) : []), Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])), oe(t.fields || [], t.data || [], V);
      throw new Error("Unable to serialize unrecognized input");
      function oe(y, L, se) {
        var q = "";
        typeof y == "string" && (y = JSON.parse(y)), typeof L == "string" && (L = JSON.parse(L));
        var ae = Array.isArray(y) && 0 < y.length, Y = !Array.isArray(L[0]);
        if (ae && x) {
          for (var X = 0; X < y.length; X++) 0 < X && (q += v), q += ne(y[X], X);
          0 < L.length && (q += k);
        }
        for (var s = 0; s < L.length; s++) {
          var h = ae ? y.length : L[s].length, d = !1, f = ae ? Object.keys(L[s]).length === 0 : L[s].length === 0;
          if (se && !ae && (d = se === "greedy" ? L[s].join("").trim() === "" : L[s].length === 1 && L[s][0].length === 0), se === "greedy" && ae) {
            for (var m = [], E = 0; E < h; E++) {
              var C = Y ? y[E] : E;
              m.push(L[s][C]);
            }
            d = m.join("").trim() === "";
          }
          if (!d) {
            for (var I = 0; I < h; I++) {
              0 < I && !f && (q += v);
              var Q = ae && Y ? y[I] : I;
              q += ne(L[s][Q], I);
            }
            s < L.length - 1 && (!se || 0 < h && !f) && (q += k);
          }
        }
        return q;
      }
      function ne(y, L) {
        if (y == null) return "";
        if (y.constructor === Date) return JSON.stringify(y).slice(1, 25);
        var se = !1;
        U && typeof y == "string" && U.test(y) && (y = "'" + y, se = !0);
        var q = y.toString().replace(j, W);
        return (se = se || l === !0 || typeof l == "function" && l(y, L) || Array.isArray(l) && l[L] || function(ae, Y) {
          for (var X = 0; X < Y.length; X++) if (-1 < ae.indexOf(Y[X])) return !0;
          return !1;
        }(q, c.BAD_DELIMITERS) || -1 < q.indexOf(v) || q.charAt(0) === " " || q.charAt(q.length - 1) === " ") ? T + q + T : q;
      }
    } };
    if (c.RECORD_SEP = "", c.UNIT_SEP = "", c.BYTE_ORDER_MARK = "\uFEFF", c.BAD_DELIMITERS = ["\r", `
`, '"', c.BYTE_ORDER_MARK], c.WORKERS_SUPPORTED = !g && !!a.Worker, c.NODE_STREAM_INPUT = 1, c.LocalChunkSize = 10485760, c.RemoteChunkSize = 5242880, c.DefaultDelimiter = ",", c.Parser = ee, c.ParserHandle = re, c.NetworkStreamer = O, c.FileStreamer = F, c.StringStreamer = Z, c.ReadableStreamStreamer = B, a.jQuery) {
      var _ = a.jQuery;
      _.fn.parse = function(t) {
        var e = t.config || {}, l = [];
        return this.each(function(k) {
          if (!(_(this).prop("tagName").toUpperCase() === "INPUT" && _(this).attr("type").toLowerCase() === "file" && a.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var T = 0; T < this.files.length; T++) l.push({ file: this.files[T], inputElem: this, instanceConfig: _.extend({}, e) });
        }), x(), this;
        function x() {
          if (l.length !== 0) {
            var k, T, W, V, w = l[0];
            if (A(t.before)) {
              var U = t.before(w.file, w.inputElem);
              if (typeof U == "object") {
                if (U.action === "abort") return k = "AbortError", T = w.file, W = w.inputElem, V = U.reason, void (A(t.error) && t.error({ name: k }, T, W, V));
                if (U.action === "skip") return void v();
                typeof U.config == "object" && (w.instanceConfig = _.extend(w.instanceConfig, U.config));
              } else if (U === "skip") return void v();
            }
            var j = w.instanceConfig.complete;
            w.instanceConfig.complete = function(oe) {
              A(j) && j(oe, w.file, w.inputElem), v();
            }, c.parse(w.file, w.instanceConfig);
          } else A(t.complete) && t.complete();
        }
        function v() {
          l.splice(0, 1), x();
        }
      };
    }
    function N(t) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(e) {
        var l = te(e);
        l.chunkSize = parseInt(l.chunkSize), e.step || e.chunk || (l.chunkSize = null), this._handle = new re(l), (this._handle.streamer = this)._config = l;
      }).call(this, t), this.parseChunk = function(e, l) {
        if (this.isFirstChunk && A(this._config.beforeFirstChunk)) {
          var x = this._config.beforeFirstChunk(e);
          x !== void 0 && (e = x);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var v = this._partialLine + e;
        this._partialLine = "";
        var k = this._handle.parse(v, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var T = k.meta.cursor;
          this._finished || (this._partialLine = v.substring(T - this._baseIndex), this._baseIndex = T), k && k.data && (this._rowCount += k.data.length);
          var W = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (i) a.postMessage({ results: k, workerId: c.WORKER_ID, finished: W });
          else if (A(this._config.chunk) && !l) {
            if (this._config.chunk(k, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
            k = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(k.data), this._completeResults.errors = this._completeResults.errors.concat(k.errors), this._completeResults.meta = k.meta), this._completed || !W || !A(this._config.complete) || k && k.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), W || k && k.meta.paused || this._nextChunk(), k;
        }
        this._halted = !0;
      }, this._sendError = function(e) {
        A(this._config.error) ? this._config.error(e) : i && this._config.error && a.postMessage({ workerId: c.WORKER_ID, error: e, finished: !1 });
      };
    }
    function O(t) {
      var e;
      (t = t || {}).chunkSize || (t.chunkSize = c.RemoteChunkSize), N.call(this, t), this._nextChunk = g ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(l) {
        this._input = l, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished) this._chunkLoaded();
        else {
          if (e = new XMLHttpRequest(), this._config.withCredentials && (e.withCredentials = this._config.withCredentials), g || (e.onload = K(this._chunkLoaded, this), e.onerror = K(this._chunkError, this)), e.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !g), this._config.downloadRequestHeaders) {
            var l = this._config.downloadRequestHeaders;
            for (var x in l) e.setRequestHeader(x, l[x]);
          }
          if (this._config.chunkSize) {
            var v = this._start + this._config.chunkSize - 1;
            e.setRequestHeader("Range", "bytes=" + this._start + "-" + v);
          }
          try {
            e.send(this._config.downloadRequestBody);
          } catch (k) {
            this._chunkError(k.message);
          }
          g && e.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(l) {
          var x = l.getResponseHeader("Content-Range");
          return x === null ? -1 : parseInt(x.substring(x.lastIndexOf("/") + 1));
        }(e), this.parseChunk(e.responseText)));
      }, this._chunkError = function(l) {
        var x = e.statusText || l;
        this._sendError(new Error(x));
      };
    }
    function F(t) {
      var e, l;
      (t = t || {}).chunkSize || (t.chunkSize = c.LocalChunkSize), N.call(this, t);
      var x = typeof FileReader < "u";
      this.stream = function(v) {
        this._input = v, l = v.slice || v.webkitSlice || v.mozSlice, x ? ((e = new FileReader()).onload = K(this._chunkLoaded, this), e.onerror = K(this._chunkError, this)) : e = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var v = this._input;
        if (this._config.chunkSize) {
          var k = Math.min(this._start + this._config.chunkSize, this._input.size);
          v = l.call(v, this._start, k);
        }
        var T = e.readAsText(v, this._config.encoding);
        x || this._chunkLoaded({ target: { result: T } });
      }, this._chunkLoaded = function(v) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(v.target.result);
      }, this._chunkError = function() {
        this._sendError(e.error);
      };
    }
    function Z(t) {
      var e;
      N.call(this, t = t || {}), this.stream = function(l) {
        return e = l, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var l, x = this._config.chunkSize;
          return x ? (l = e.substring(0, x), e = e.substring(x)) : (l = e, e = ""), this._finished = !e, this.parseChunk(l);
        }
      };
    }
    function B(t) {
      N.call(this, t = t || {});
      var e = [], l = !0, x = !1;
      this.pause = function() {
        N.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        N.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(v) {
        this._input = v, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        x && e.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), e.length ? this.parseChunk(e.shift()) : l = !0;
      }, this._streamData = K(function(v) {
        try {
          e.push(typeof v == "string" ? v : v.toString(this._config.encoding)), l && (l = !1, this._checkIsFinished(), this.parseChunk(e.shift()));
        } catch (k) {
          this._streamError(k);
        }
      }, this), this._streamError = K(function(v) {
        this._streamCleanUp(), this._sendError(v);
      }, this), this._streamEnd = K(function() {
        this._streamCleanUp(), x = !0, this._streamData("");
      }, this), this._streamCleanUp = K(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function re(t) {
      var e, l, x, v = Math.pow(2, 53), k = -v, T = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, W = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, V = this, w = 0, U = 0, j = !1, oe = !1, ne = [], y = { data: [], errors: [], meta: {} };
      if (A(t.step)) {
        var L = t.step;
        t.step = function(s) {
          if (y = s, ae()) q();
          else {
            if (q(), y.data.length === 0) return;
            w += s.data.length, t.preview && w > t.preview ? l.abort() : (y.data = y.data[0], L(y, V));
          }
        };
      }
      function se(s) {
        return t.skipEmptyLines === "greedy" ? s.join("").trim() === "" : s.length === 1 && s[0].length === 0;
      }
      function q() {
        return y && x && (X("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + c.DefaultDelimiter + "'"), x = !1), t.skipEmptyLines && (y.data = y.data.filter(function(s) {
          return !se(s);
        })), ae() && function() {
          if (!y) return;
          function s(d, f) {
            A(t.transformHeader) && (d = t.transformHeader(d, f)), ne.push(d);
          }
          if (Array.isArray(y.data[0])) {
            for (var h = 0; ae() && h < y.data.length; h++) y.data[h].forEach(s);
            y.data.splice(0, 1);
          } else y.data.forEach(s);
        }(), function() {
          if (!y || !t.header && !t.dynamicTyping && !t.transform) return y;
          function s(d, f) {
            var m, E = t.header ? {} : [];
            for (m = 0; m < d.length; m++) {
              var C = m, I = d[m];
              t.header && (C = m >= ne.length ? "__parsed_extra" : ne[m]), t.transform && (I = t.transform(I, C)), I = Y(C, I), C === "__parsed_extra" ? (E[C] = E[C] || [], E[C].push(I)) : E[C] = I;
            }
            return t.header && (m > ne.length ? X("FieldMismatch", "TooManyFields", "Too many fields: expected " + ne.length + " fields but parsed " + m, U + f) : m < ne.length && X("FieldMismatch", "TooFewFields", "Too few fields: expected " + ne.length + " fields but parsed " + m, U + f)), E;
          }
          var h = 1;
          return !y.data.length || Array.isArray(y.data[0]) ? (y.data = y.data.map(s), h = y.data.length) : y.data = s(y.data, 0), t.header && y.meta && (y.meta.fields = ne), U += h, y;
        }();
      }
      function ae() {
        return t.header && ne.length === 0;
      }
      function Y(s, h) {
        return d = s, t.dynamicTypingFunction && t.dynamicTyping[d] === void 0 && (t.dynamicTyping[d] = t.dynamicTypingFunction(d)), (t.dynamicTyping[d] || t.dynamicTyping) === !0 ? h === "true" || h === "TRUE" || h !== "false" && h !== "FALSE" && (function(f) {
          if (T.test(f)) {
            var m = parseFloat(f);
            if (k < m && m < v) return !0;
          }
          return !1;
        }(h) ? parseFloat(h) : W.test(h) ? new Date(h) : h === "" ? null : h) : h;
        var d;
      }
      function X(s, h, d, f) {
        var m = { type: s, code: h, message: d };
        f !== void 0 && (m.row = f), y.errors.push(m);
      }
      this.parse = function(s, h, d) {
        var f = t.quoteChar || '"';
        if (t.newline || (t.newline = function(C, I) {
          C = C.substring(0, 1048576);
          var Q = new RegExp(R(I) + "([^]*?)" + R(I), "gm"), ie = (C = C.replace(Q, "")).split("\r"), ue = C.split(`
`), he = 1 < ue.length && ue[0].length < ie[0].length;
          if (ie.length === 1 || he) return `
`;
          for (var le = 0, H = 0; H < ie.length; H++) ie[H][0] === `
` && le++;
          return le >= ie.length / 2 ? `\r
` : "\r";
        }(s, f)), x = !1, t.delimiter) A(t.delimiter) && (t.delimiter = t.delimiter(s), y.meta.delimiter = t.delimiter);
        else {
          var m = function(C, I, Q, ie, ue) {
            var he, le, H, J;
            ue = ue || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
            for (var ve = 0; ve < ue.length; ve++) {
              var $ = ue[ve], we = 0, fe = 0, ye = 0;
              H = void 0;
              for (var me = new ee({ comments: ie, delimiter: $, newline: I, preview: 10 }).parse(C), ge = 0; ge < me.data.length; ge++) if (Q && se(me.data[ge])) ye++;
              else {
                var xe = me.data[ge].length;
                fe += xe, H !== void 0 ? 0 < xe && (we += Math.abs(xe - H), H = xe) : H = xe;
              }
              0 < me.data.length && (fe /= me.data.length - ye), (le === void 0 || we <= le) && (J === void 0 || J < fe) && 1.99 < fe && (le = we, he = $, J = fe);
            }
            return { successful: !!(t.delimiter = he), bestDelimiter: he };
          }(s, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
          m.successful ? t.delimiter = m.bestDelimiter : (x = !0, t.delimiter = c.DefaultDelimiter), y.meta.delimiter = t.delimiter;
        }
        var E = te(t);
        return t.preview && t.header && E.preview++, e = s, l = new ee(E), y = l.parse(e, h, d), q(), j ? { meta: { paused: !0 } } : y || { meta: { paused: !1 } };
      }, this.paused = function() {
        return j;
      }, this.pause = function() {
        j = !0, l.abort(), e = A(t.chunk) ? "" : e.substring(l.getCharIndex());
      }, this.resume = function() {
        V.streamer._halted ? (j = !1, V.streamer.parseChunk(e, !0)) : setTimeout(V.resume, 3);
      }, this.aborted = function() {
        return oe;
      }, this.abort = function() {
        oe = !0, l.abort(), y.meta.aborted = !0, A(t.complete) && t.complete(y), e = "";
      };
    }
    function R(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ee(t) {
      var e, l = (t = t || {}).delimiter, x = t.newline, v = t.comments, k = t.step, T = t.preview, W = t.fastMode, V = e = t.quoteChar === void 0 || t.quoteChar === null ? '"' : t.quoteChar;
      if (t.escapeChar !== void 0 && (V = t.escapeChar), (typeof l != "string" || -1 < c.BAD_DELIMITERS.indexOf(l)) && (l = ","), v === l) throw new Error("Comment character same as delimiter");
      v === !0 ? v = "#" : (typeof v != "string" || -1 < c.BAD_DELIMITERS.indexOf(v)) && (v = !1), x !== `
` && x !== "\r" && x !== `\r
` && (x = `
`);
      var w = 0, U = !1;
      this.parse = function(j, oe, ne) {
        if (typeof j != "string") throw new Error("Input must be a string");
        var y = j.length, L = l.length, se = x.length, q = v.length, ae = A(k), Y = [], X = [], s = [], h = w = 0;
        if (!j) return ce();
        if (t.header && !oe) {
          var d = j.split(x)[0].split(l), f = [], m = {}, E = !1;
          for (var C in d) {
            var I = d[C];
            A(t.transformHeader) && (I = t.transformHeader(I, C));
            var Q = I, ie = m[I] || 0;
            for (0 < ie && (E = !0, Q = I + "_" + ie), m[I] = ie + 1; f.includes(Q); ) Q = Q + "_" + ie;
            f.push(Q);
          }
          if (E) {
            var ue = j.split(x);
            ue[0] = f.join(l), j = ue.join(x);
          }
        }
        if (W || W !== !1 && j.indexOf(e) === -1) {
          for (var he = j.split(x), le = 0; le < he.length; le++) {
            if (s = he[le], w += s.length, le !== he.length - 1) w += x.length;
            else if (ne) return ce();
            if (!v || s.substring(0, q) !== v) {
              if (ae) {
                if (Y = [], ye(s.split(l)), Ee(), U) return ce();
              } else ye(s.split(l));
              if (T && T <= le) return Y = Y.slice(0, T), ce(!0);
            }
          }
          return ce();
        }
        for (var H = j.indexOf(l, w), J = j.indexOf(x, w), ve = new RegExp(R(V) + R(e), "g"), $ = j.indexOf(e, w); ; ) if (j[w] !== e) if (v && s.length === 0 && j.substring(w, w + q) === v) {
          if (J === -1) return ce();
          w = J + se, J = j.indexOf(x, w), H = j.indexOf(l, w);
        } else if (H !== -1 && (H < J || J === -1)) s.push(j.substring(w, H)), w = H + L, H = j.indexOf(l, w);
        else {
          if (J === -1) break;
          if (s.push(j.substring(w, J)), xe(J + se), ae && (Ee(), U)) return ce();
          if (T && Y.length >= T) return ce(!0);
        }
        else for ($ = w, w++; ; ) {
          if (($ = j.indexOf(e, $ + 1)) === -1) return ne || X.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: Y.length, index: w }), ge();
          if ($ === y - 1) return ge(j.substring(w, $).replace(ve, e));
          if (e !== V || j[$ + 1] !== V) {
            if (e === V || $ === 0 || j[$ - 1] !== V) {
              H !== -1 && H < $ + 1 && (H = j.indexOf(l, $ + 1)), J !== -1 && J < $ + 1 && (J = j.indexOf(x, $ + 1));
              var we = me(J === -1 ? H : Math.min(H, J));
              if (j.substr($ + 1 + we, L) === l) {
                s.push(j.substring(w, $).replace(ve, e)), j[w = $ + 1 + we + L] !== e && ($ = j.indexOf(e, w)), H = j.indexOf(l, w), J = j.indexOf(x, w);
                break;
              }
              var fe = me(J);
              if (j.substring($ + 1 + fe, $ + 1 + fe + se) === x) {
                if (s.push(j.substring(w, $).replace(ve, e)), xe($ + 1 + fe + se), H = j.indexOf(l, w), $ = j.indexOf(e, w), ae && (Ee(), U)) return ce();
                if (T && Y.length >= T) return ce(!0);
                break;
              }
              X.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: Y.length, index: w }), $++;
            }
          } else $++;
        }
        return ge();
        function ye(de) {
          Y.push(de), h = w;
        }
        function me(de) {
          var Le = 0;
          if (de !== -1) {
            var Se = j.substring($ + 1, de);
            Se && Se.trim() === "" && (Le = Se.length);
          }
          return Le;
        }
        function ge(de) {
          return ne || (de === void 0 && (de = j.substring(w)), s.push(de), w = y, ye(s), ae && Ee()), ce();
        }
        function xe(de) {
          w = de, ye(s), s = [], J = j.indexOf(x, w);
        }
        function ce(de) {
          return { data: Y, errors: X, meta: { delimiter: l, linebreak: x, aborted: U, truncated: !!de, cursor: h + (oe || 0) } };
        }
        function Ee() {
          k(ce()), Y = [], X = [];
        }
      }, this.abort = function() {
        U = !0;
      }, this.getCharIndex = function() {
        return w;
      };
    }
    function z(t) {
      var e = t.data, l = b[e.workerId], x = !1;
      if (e.error) l.userError(e.error, e.file);
      else if (e.results && e.results.data) {
        var v = { abort: function() {
          x = !0, P(e.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: G, resume: G };
        if (A(l.userStep)) {
          for (var k = 0; k < e.results.data.length && (l.userStep({ data: e.results.data[k], errors: e.results.errors, meta: e.results.meta }, v), !x); k++) ;
          delete e.results;
        } else A(l.userChunk) && (l.userChunk(e.results, v, e.file), delete e.results);
      }
      e.finished && !x && P(e.workerId, e.results);
    }
    function P(t, e) {
      var l = b[t];
      A(l.userComplete) && l.userComplete(e), l.terminate(), delete b[t];
    }
    function G() {
      throw new Error("Not implemented.");
    }
    function te(t) {
      if (typeof t != "object" || t === null) return t;
      var e = Array.isArray(t) ? [] : {};
      for (var l in t) e[l] = te(t[l]);
      return e;
    }
    function K(t, e) {
      return function() {
        t.apply(e, arguments);
      };
    }
    function A(t) {
      return typeof t == "function";
    }
    return i && (a.onmessage = function(t) {
      var e = t.data;
      if (c.WORKER_ID === void 0 && e && (c.WORKER_ID = e.workerId), typeof e.input == "string") a.postMessage({ workerId: c.WORKER_ID, results: c.parse(e.input, e.config), finished: !0 });
      else if (a.File && e.input instanceof File || e.input instanceof Object) {
        var l = c.parse(e.input, e.config);
        l && a.postMessage({ workerId: c.WORKER_ID, results: l, finished: !0 });
      }
    }), (O.prototype = Object.create(N.prototype)).constructor = O, (F.prototype = Object.create(N.prototype)).constructor = F, (Z.prototype = Object.create(Z.prototype)).constructor = Z, (B.prototype = Object.create(N.prototype)).constructor = B, c;
  });
})(Ze);
var nn = Ze.exports;
const sn = /* @__PURE__ */ Et(nn);
function an({
  onSent: o
}) {
  const { address: r } = gt.all(), { t: u } = Je(), { data: a, isFetched: g } = xt(), { data: i } = He(), { data: b } = bt(), [p, c] = S.useState(null), [_, N] = S.useState([]), [O, F] = S.useState([]), [Z, B] = S.useState([]), [re, R] = S.useState(!1), [ee, z] = S.useState(!1), [P, G] = S.useState({
    ...D.createTokenMap(() => "0"),
    usdValue: "0"
  }), [te, K] = S.useState(null), A = ze(_, 800), t = ze(O, 800), { signTransaction: e } = Ot();
  S.useEffect(() => {
    g && W();
  }, [g]), S.useEffect(() => {
    tn(), w();
  }, []), S.useEffect(() => {
    const s = D.createTokenMap(() => 0);
    _.forEach((f) => {
      f.amount && !isNaN(parseFloat(f.amount)) && (s[f.token] += parseFloat(f.amount));
    });
    let h = 0;
    i && (h = Object.values(pe).reduce((f, m) => f + s[m] * parseFloat(i[m] || "0"), 0));
    const d = D.getAllTokens().reduce((f, m) => ({
      ...f,
      [m.tokenType]: s[m.tokenType].toString()
    }), {});
    G({
      ...d,
      usdValue: be(h.toString(), 2)
    });
  }, [_, i]);
  const l = S.useMemo(
    () => Object.entries(P).filter(([s]) => s !== "usdValue").some(([s, h]) => {
      const d = s, f = parseFloat((a == null ? void 0 : a[d]) || "0"), m = parseFloat(h), E = te && te[d] ? parseFloat(te[d]) : 0;
      return m + E > f;
    }),
    [P, a, te]
  ), x = ({
    transfer: s,
    validation: h
  }) => De.test(s.to) && (h == null ? void 0 : h.error) === u("/dashboard.[token].sendModal.unregisteredEmailNotice"), v = S.useMemo(() => _.some((s, h) => {
    if (!s.to || !s.amount || !s.token)
      return !0;
    const d = O[h];
    if (d != null && d.error && !x({ transfer: s, validation: d }) || d != null && d.isValidating)
      return !0;
    const f = parseFloat(s.amount);
    return !!(isNaN(f) || f <= 0 || l);
  }), [_, O, l]), k = S.useMemo(() => _.some((s) => s.to || s.note || s.amount), [_]);
  S.useEffect(() => {
    A.forEach((s, h) => {
      s.to && V(s.to, h);
    });
  }, [A]), S.useEffect(() => {
    T();
  }, [t, A]);
  const T = S.useCallback(async () => {
    if (v) {
      K(null);
      return;
    }
    z(!0);
    try {
      const s = D.getAllTokens().map((m) => m.tokenType), h = {}, d = (m) => A.filter((E, C) => {
        var Q;
        return E.token === m && E.amount && (Te(E.to) || ((Q = t[C]) == null ? void 0 : Q.fullAddress));
      }).map((E, C) => {
        var I;
        return {
          to: Te(E.to) ? E.to : (I = t[C]) == null ? void 0 : I.fullAddress,
          amount: Ce(E.amount)
        };
      });
      for (const m of s) {
        const E = d(m);
        if (E.length > 0) {
          const I = (await Promise.all(
            E.map(
              (Q) => Yt({
                tokenType: m,
                transferParams: Q,
                fromAddress: r
              })
            )
          )).reduce(
            (Q, ie) => ie ? Q + parseFloat(ie.feeInTokens) : Q,
            0
          );
          if (I > 0) {
            const Q = je(I.toFixed(18), 18);
            h[m] = Ne(Q);
          }
        }
      }
      const f = D.getAllTokens().reduce((m, E) => {
        const C = h[E.tokenType], I = i == null ? void 0 : i[E.tokenType];
        return m + (C && I ? parseFloat(C) * parseFloat(I) : 0);
      }, 0);
      h.usdValue = be(f.toString(), 2), K(h);
    } catch (s) {
      console.error("Failed to calculate gas fee:", s), K(null);
    } finally {
      z(!1);
    }
  }, [t, A, v, r, i]), W = () => {
    N([{
      to: "",
      note: "",
      amount: "",
      token: pe.TVWT,
      balance: (a == null ? void 0 : a[pe.TVWT]) || "0"
    }]), F([{
      isValidating: !1,
      isValidEmail: !1,
      fullAddress: "",
      error: ""
    }]), B([!1]);
  }, V = async (s, h) => {
    if (!s) {
      F((d) => {
        const f = [...d];
        return f[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "Address or email is required"
        }, f;
      });
      return;
    }
    F((d) => {
      const f = [...d];
      return f[h] = {
        ...d[h],
        isValidating: !0
      }, f;
    });
    try {
      if (Te(s)) {
        F((f) => {
          const m = [...f];
          return m[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }, m;
        });
        return;
      }
      if (!De.test(s)) {
        F((f) => {
          const m = [...f];
          return m[h] = {
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: u("/dashboard.[token].sendModal.invalidEmailFormat")
          }, m;
        });
        return;
      }
      const d = await en(s);
      F((f) => {
        const m = [...f];
        return m[h] = {
          isValidating: !1,
          isValidEmail: !0,
          fullAddress: d.data.success ? d.data.address : "",
          error: d.data.success ? "" : u("/dashboard.[token].sendModal.unregisteredEmailNotice")
        }, m;
      });
    } catch {
      F((f) => {
        const m = [...f];
        return m[h] = {
          isValidating: !1,
          isValidEmail: !1,
          fullAddress: "",
          error: "error"
        }, m;
      });
    }
  }, w = async () => {
    try {
      const { data: s } = await Re.post("/transaction/outbound-amount", {
        tokens: D.getAllTokens().map((h) => h.tokenType)
      });
      c(s);
    } catch (s) {
      console.error("Failed to fetch token transferred:", s);
    }
  }, U = async (s, h) => {
    const d = s.target.value.trim(), f = [..._];
    f[h].to = d, N(f);
  }, j = (s) => {
    V(_[s].to, s);
  }, oe = (s) => {
    const h = _[s].amount;
    B((d) => {
      const f = [...d];
      return f[s] = h === "", f;
    });
  }, ne = (s, h) => {
    const d = [..._];
    d[h].note = s.target.value, N(d);
  }, y = (s, h) => {
    const d = s.target.value.trim(), f = [..._];
    f[h].amount = d, N(f), B((m) => {
      const E = [...m];
      return E[h] = !1, E;
    });
  }, L = async (s, h) => {
    z(!1);
    try {
      const d = (a == null ? void 0 : a[s]) || "0";
      N((f) => {
        const m = [...f];
        return m[h] = {
          ...f[h],
          token: s,
          amount: "",
          balance: d
        }, m;
      });
    } catch (d) {
      console.error("Failed to fetch balance:", d);
    }
  }, se = async (s, h) => {
    const d = O[h], f = s.amount;
    let m, E;
    if (Te(s.to))
      m = s.to;
    else if (x({ transfer: s, validation: d })) {
      E = s.to, await Re.post("/invite/invite-register", {
        toEmail: E,
        from: r,
        amount: Ce(f).toString(),
        token: s.token,
        note: s.note
      });
      return;
    } else
      m = d == null ? void 0 : d.fullAddress;
    return await e({
      to: m,
      amount: f,
      data: "",
      token: s.token,
      transactionType: yt.TRANSFER,
      note: s.note,
      isNotifySubmit: !1,
      isNotifyOtp: !1,
      isNotifyError: !1
    });
  };
  return {
    transfers: _,
    toValidations: O,
    sending: re,
    isDisabled: v,
    hasContent: k,
    isEstimatingFee: ee,
    tokenBalances: a,
    tokenPrices: i,
    hasInsufficientBalance: l,
    handleToChange: U,
    handleToBlur: j,
    handleNoteChange: ne,
    handleAmountChange: y,
    handleTokenTypeChange: L,
    handleSend: async () => {
      R(!0);
      try {
        const s = [];
        for (let h = 0; h < _.length; h++) {
          const d = _[h];
          try {
            const f = await se(d, h);
            x({ transfer: d, validation: O[h] }) ? s.push({
              to: d.to,
              type: "invitation",
              status: "sent",
              statusMessage: "Invitation email sent. The recipient will receive an invitation email to sign up their account.",
              amount: d.amount,
              token: d.token
            }) : s.push({
              to: d.to,
              type: "transaction",
              status: f != null && f.hash ? "sent" : "failed",
              statusMessage: f != null && f.needOtp ? "Daily transaction limit exceeded. Please check your email and verify by the OTP." : "Sent and received",
              amount: d.amount,
              token: d.token
            });
          } catch (f) {
            const m = x({ transfer: d, validation: O[h] }) ? "invitation" : "transaction", E = vt(f);
            $e("handleSend", { errorInfo: E }), s.push({
              to: d.to,
              type: m,
              status: "failed",
              statusMessage: m === "transaction" ? E.message : "Not sent. Please try transferring again.",
              amount: d.amount,
              token: d.token
            });
          }
        }
        o(s, te, P);
      } catch (s) {
        console.error("Failed to send transfers:", s);
      } finally {
        R(!1);
      }
    },
    handleAddTransfer: () => {
      const s = {
        to: "",
        note: "",
        amount: "",
        token: pe.TVWT,
        balance: (a == null ? void 0 : a[pe.TVWT]) || "0"
      };
      N([..._, s]), F([...O, {
        isValidating: !1,
        isValidEmail: !1,
        fullAddress: "",
        error: ""
      }]), B([...Z, !1]);
    },
    handleDeleteTransfer: (s) => {
      N(_.filter((h, d) => d !== s)), F(O.filter((h, d) => d !== s)), B(Z.filter((h, d) => d !== s));
    },
    handleFileChange: (s) => {
      var d;
      const h = (d = s.target.files) == null ? void 0 : d[0];
      h && sn.parse(h, {
        header: !1,
        complete: (f) => {
          const m = Xt(f.data);
          if (!m.isValid) {
            Ie.error(m.error), N([]), s.target.value = "";
            return;
          }
          const E = f.data.slice(1).filter((C) => C[0] && C[0].trim() !== "").map((C) => ({
            to: C[0],
            note: C[1],
            token: C[2],
            amount: C[3],
            balance: (a == null ? void 0 : a[C[2]]) || "0"
          }));
          N(E), F(E.map(() => ({
            isValidating: !1,
            isValidEmail: !1,
            fullAddress: "",
            error: ""
          }))), B(E.map(() => !1)), Ie.success("CSV file uploaded successfully");
        },
        error: (f) => {
          Ie.error(`Error parsing CSV: ${f.message}`);
        }
      });
    },
    totalAmount: P,
    todayTokenTransferred: p,
    defaultLimits: b,
    gasFees: te,
    handleAmountBlur: oe,
    amountRequiredValidations: Z
  };
}
function rn({
  transfer: o,
  sending: r,
  handleAmountChange: u,
  index: a,
  handleAmountBlur: g,
  isEmpty: i
}) {
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(
      qe,
      {
        disabled: r,
        value: o.amount,
        type: "number",
        inputMode: "decimal",
        onChange: (b) => u(b, a),
        onBlur: () => g(a),
        className: M(
          "pl-[110px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          o.token === "ETH" && "pl-[144px]",
          o.token === "MATIC" && "pl-[100px]",
          "desktop:w-[219px] laptop:w-[228px] tablet:w-[265px] w-[216px]"
        ),
        placeholder: "Amount"
      }
    ),
    i && /* @__PURE__ */ n.jsx("p", { className: M(
      "absolute -bottom-[20px] left-[0] text-xs text-destructive"
    ), children: "Amount is required" })
  ] });
}
function on({
  todayTokenTransferred: o,
  defaultLimits: r,
  totalAmount: u
}) {
  const [a, g] = S.useState(!1), b = D.getAllTokens().map((p) => p.tokenType).filter((p) => {
    const c = BigInt(o[p]), _ = BigInt(Ce(u[p])), N = BigInt(Ce(r[p]));
    return c + _ > N;
  });
  return b.length === 0 ? null : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
      /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
      /* @__PURE__ */ n.jsxs("div", { children: [
        b.map((p) => /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black font-normal leading-snug", children: [
          D.getToken(p).symbol,
          " daily transaction limit exceeded. Current ",
          D.getToken(p).symbol,
          " limit: ",
          je(r[p] || "0"),
          " ",
          D.getToken(p).symbol
        ] }, p)),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "flex items-center gap-1 text-xs text-black font-bold leading-none mt-[12px] cursor-pointer w-fit",
            onClick: () => g(!0),
            children: [
              /* @__PURE__ */ n.jsx("span", { children: "Change limit" }),
              /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/arrow_right.svg", className: "w-[12px]" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(
      kt,
      {
        isOpen: a,
        onClose: () => g(!1),
        defaultLimits: r
      }
    )
  ] });
}
function ln({
  tokenBalances: o,
  tokenPrices: r,
  totalAmount: u,
  hasInsufficientBalance: a,
  gasFees: g
}) {
  if (!a) return null;
  const i = (b, p) => r != null && r[p] ? be((parseFloat(b) * parseFloat(r[p])).toString(), 2) : "0";
  return /* @__PURE__ */ n.jsx("div", { className: "bg-black/5 rounded-lg border-b border-[#dbdbdb] py-[12px] px-[16px] mb-[24px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-[12px]", children: [
    /* @__PURE__ */ n.jsx("img", { src: "/imgs/icons/clear_filled.svg" }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-black font-bold leading-none mb-[8px]", children: "Insufficient balance:" }),
      Object.keys(o).map((b) => {
        const p = b, c = parseFloat(o[p] || "0"), _ = parseFloat(u[p] || "0"), N = g && g[p] ? parseFloat(g[p]) : 0, O = _ + N;
        return O > c && /* @__PURE__ */ n.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            D.getToken(p).symbol,
            " balance: ",
            be(c.toString(), 6),
            " ",
            D.getToken(p).symbol,
            " ~",
            i(c.toString(), p),
            " USDT"
          ] }),
          /* @__PURE__ */ n.jsxs("p", { className: "text-xs text-black/50 font-normal leading-none mb-[4px]", children: [
            "Required: ",
            be(O.toString(), 6),
            " ",
            D.getToken(p).symbol,
            " (Transfer: ",
            be(_.toString(), 6),
            " + Gas: ",
            be(N.toString(), 6),
            ")"
          ] })
        ] }, b);
      })
    ] })
  ] }) });
}
function et({
  totalAmount: o,
  gasFees: r
}) {
  const u = Xe(r), a = (p) => {
    const c = D.getNativeTokenTypeByGasSymbol(p);
    let _ = 0;
    return c ? _ = parseFloat(o[c] || "0") + parseFloat((u == null ? void 0 : u[p]) || "0") : _ = parseFloat((u == null ? void 0 : u[p]) || "0"), _ ? {
      amount: Ne(je(_.toString(), 18)),
      symbol: p
    } : null;
  }, g = (p) => {
    const c = p, _ = parseFloat(o[c] || "0");
    return _ ? {
      amount: Ne(je(_.toString())),
      symbol: c
    } : null;
  }, i = () => {
    const p = [];
    return Object.values(wt).forEach((c) => {
      p.push(a(c));
    }), D.getAllTokens().filter((c) => D.isERC20Token(c.tokenType)).forEach((c) => {
      p.push(g(c.tokenType));
    }), p.filter((c) => c !== null);
  }, b = () => {
    const p = parseFloat(o.usdValue), c = parseFloat((r == null ? void 0 : r.usdValue) || "0"), _ = p + c;
    return be(_.toString());
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx("div", { className: "mt-[16px] text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Total amount:" }) }),
    /* @__PURE__ */ n.jsxs("p", { className: "text-black text-xl font-medium leading-none text-right mt-0.5", children: [
      i().map((p, c, _) => /* @__PURE__ */ n.jsxs("span", { children: [
        p.amount,
        " ",
        p.symbol,
        c < _.length - 1 && " & "
      ] }, c)),
      parseFloat(b()) !== 0 && ` (~$${b()} USD)`
    ] })
  ] });
}
function cn({
  onSent: o
}) {
  const {
    transfers: r,
    toValidations: u,
    sending: a,
    isDisabled: g,
    hasContent: i,
    handleToChange: b,
    handleToBlur: p,
    handleNoteChange: c,
    handleAmountChange: _,
    handleTokenTypeChange: N,
    handleSend: O,
    handleAddTransfer: F,
    handleDeleteTransfer: Z,
    totalAmount: B,
    tokenBalances: re,
    tokenPrices: R,
    todayTokenTransferred: ee,
    defaultLimits: z,
    gasFees: P,
    isEstimatingFee: G,
    hasInsufficientBalance: te,
    handleFileChange: K,
    handleAmountBlur: A,
    amountRequiredValidations: t
  } = an({
    onSent: o
  }), { showExitPrompt: e, handleExitPrompt: l } = Gt({
    shouldBlock: i
  }), x = Ge(), v = () => {
    x(-1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: M(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Multisender" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: "You can add multiple recipients in custom settings" })
    ] }),
    ee && /* @__PURE__ */ n.jsx(
      on,
      {
        todayTokenTransferred: ee,
        defaultLimits: z,
        totalAmount: B
      }
    ),
    R && re && /* @__PURE__ */ n.jsx(
      ln,
      {
        tokenBalances: re,
        tokenPrices: R,
        totalAmount: B,
        hasInsufficientBalance: te,
        gasFees: P
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: M(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug",
        "desktop:gap-[28px] laptop:gap-[23px]"
      ), children: [
        /* @__PURE__ */ n.jsxs("div", { className: "desktop:w-[382px] laptop:w-[318px]", children: [
          "To",
          r.length > 1 && `(${r.length})`
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] hidden laptop:block", children: "Notes" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: r.map((k, T) => /* @__PURE__ */ n.jsxs("div", { className: "border-b border-[#ebebeb]", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: M(
              "flex items-center flex-wrap py-[25px]",
              "desktop:gap-[28px] laptop:gap-[23px] tablet:gap-[7px] gap-0"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { children: /* @__PURE__ */ n.jsx(
                Wt,
                {
                  index: T,
                  transfer: k,
                  validation: u[T] || {
                    isValidating: !1,
                    isValidEmail: !1,
                    fullAddress: "",
                    error: ""
                  },
                  handleToChange: b,
                  handleToBlur: p,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("section", { className: M(
                "block tablet:hidden laptop:block",
                "pl-[22px] tablet:pl-0",
                "py-[12px] tablet:py-0"
              ), children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: T,
                  transfer: k,
                  handleNoteChange: c,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsxs("section", { className: M(
                "relative",
                "ml-[22px] tablet:ml-0"
              ), children: [
                /* @__PURE__ */ n.jsx(
                  rn,
                  {
                    index: T,
                    transfer: k,
                    handleAmountChange: _,
                    sending: a,
                    handleAmountBlur: A,
                    isEmpty: t[T]
                  }
                ),
                /* @__PURE__ */ n.jsxs("div", { className: "absolute left-[12px] top-1/2 -translate-y-1/2 flex items-center", children: [
                  /* @__PURE__ */ n.jsx(
                    qt,
                    {
                      index: T,
                      transfer: k,
                      handleTokenTypeChange: N,
                      sending: a
                    }
                  ),
                  /* @__PURE__ */ n.jsx(Ye, { type: "vertical", className: "h-[16px]" })
                ] }),
                /* @__PURE__ */ n.jsx("div", { className: M(
                  "absolute top-1/2 -translate-y-1/2",
                  "laptop:-right-[33px] -right-[102px]",
                  "block tablet:hidden laptop:block",
                  r.length === 1 && "hidden laptop:hidden"
                ), children: /* @__PURE__ */ n.jsx(
                  We,
                  {
                    index: T,
                    handleDeleteTransfer: Z,
                    sending: a
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: M(
              "items-center justify-between gap-[22px]",
              "hidden tablet:flex laptop:hidden",
              "pb-[25px]"
            ),
            children: [
              /* @__PURE__ */ n.jsx("section", { className: "pl-[22px] flex-1", children: /* @__PURE__ */ n.jsx(
                Be,
                {
                  index: T,
                  transfer: k,
                  handleNoteChange: c,
                  sending: a
                }
              ) }),
              /* @__PURE__ */ n.jsx("div", { className: M(
                r.length === 1 && "hidden"
              ), children: /* @__PURE__ */ n.jsx(
                We,
                {
                  index: T,
                  handleDeleteTransfer: Z,
                  sending: a
                }
              ) })
            ]
          }
        )
      ] }, T)) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-end gap-[12px] mt-[24px]", children: [
      /* @__PURE__ */ n.jsxs("div", { children: [
        /* @__PURE__ */ n.jsx(
          _e,
          {
            variant: "outline",
            className: "h-[24px] text-xs",
            disabled: a,
            onClick: () => {
              const k = document.querySelector('input[type="file"]');
              k && k.click();
            },
            children: /* @__PURE__ */ n.jsx("span", { children: "Import CSV" })
          }
        ),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            className: "hidden",
            type: "file",
            accept: ".csv",
            onChange: K
          }
        )
      ] }),
      /* @__PURE__ */ n.jsx(
        _e,
        {
          variant: "outline",
          className: "h-[24px] text-xs px-[26px]",
          onClick: F,
          disabled: a,
          children: /* @__PURE__ */ n.jsx(At, { className: "w-[12px] h-[12px]", strokeWidth: 3 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[120px]", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: [
        /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }),
        /* @__PURE__ */ n.jsx(Vt, { title: "Estimated fees may vary and will be recalculated during backend checks.", overlayStyle: { maxWidth: "none" }, children: /* @__PURE__ */ n.jsx(It, { className: "w-[16px] h-[16px]" }) })
      ] }),
      G ? /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-end mt-0.5", children: /* @__PURE__ */ n.jsx(Ke, { className: "animate-spin", size: 14 }) }) : P ? /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        (() => {
          const k = Xe(P);
          return Object.entries(k || {}).filter(([T, W]) => W !== "0").map(([T, W], V, w) => /* @__PURE__ */ n.jsxs("span", { children: [
            W,
            " ",
            T,
            V < w.length - 1 && " & "
          ] }, T));
        })(),
        Object.values(P).some((k) => k !== "0") && ` (~$${P.usdValue} USD)`
      ] }) : /* @__PURE__ */ n.jsx("p", { className: "text-black text-right", children: "-" }),
      /* @__PURE__ */ n.jsx(
        et,
        {
          totalAmount: B,
          gasFees: P
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "mt-[104px]", children: [
        /* @__PURE__ */ n.jsx(
          Bt,
          {
            onSuccess: O,
            loading: a,
            disabled: g || G,
            className: "mx-auto"
          }
        ),
        !a && /* @__PURE__ */ n.jsx("div", { className: "flex items-center justify-center mt-[26px]", children: /* @__PURE__ */ n.jsx(
          "p",
          {
            className: "w-auto cursor-pointer text-black text-base font-bold leading-tight",
            onClick: v,
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      Ht,
      {
        isOpen: e,
        onClose: l
      }
    )
  ] });
}
function dn({
  transferResults: o,
  onTransferAgain: r,
  gasFees: u,
  totalAmount: a
}) {
  const g = Ge();
  return He(), /* @__PURE__ */ n.jsxs("div", { className: M(
    "pt-[76px] mx-auto pb-[320px]",
    "w-[343px] tablet:w-[722px] laptop:w-[913px] desktop:w-[985px]"
  ), children: [
    /* @__PURE__ */ n.jsxs("header", { className: "text-center mb-[40px]", children: [
      /* @__PURE__ */ n.jsx("p", { className: "text-[32px] text-[#111] font-bold leading-tight mb-[16px]", children: "Token sent" }),
      /* @__PURE__ */ n.jsx("p", { className: "text-sm text-[#979797] font-normal leading-none", children: 'You can find the transactions under the "History" tab in the Dashboard page.' })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { children: [
      /* @__PURE__ */ n.jsxs("header", { className: M(
        "flex items-center bg-[#fafafa] rounded-tl-xl rounded-tr-xl",
        "h-[42px] pl-[28px] pr-[23px]",
        "text-black/90 text-xs font-normal leading-snug"
      ), children: [
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[397px] laptop:w-[397px] tablet:w-[319px]", children: "To" }),
        /* @__PURE__ */ n.jsx("div", { className: "desktop:w-[308px] laptop:w-[299px] tablet:w-[252px] hidden tablet:block", children: "Status" }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-right hidden tablet:block", children: "Amount" })
      ] }),
      /* @__PURE__ */ n.jsx("div", { className: "", children: o.map((i, b) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: M(
            "border-b border-[#ebebeb]",
            "flex items-center flex-wrap py-[25px]"
          ),
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: M(
              "flex items-center justify-between px-0 text-xs"
            ), children: [
              /* @__PURE__ */ n.jsxs("div", { className: "w-[22px]", children: [
                b + 1,
                "."
              ] }),
              /* @__PURE__ */ n.jsxs("div", { className: M(
                "flex items-center",
                "desktop:w-[297px] laptop:w-[297px] tablet:w-[297px] w-[302px]",
                "desktop:mr-[100px] laptop:mr-[100px] tablet:mr-[20px]",
                "py-[8px] tablet:py-0"
              ), children: [
                /* @__PURE__ */ n.jsx("p", { className: M(
                  "mr-1",
                  "[text-decoration:none]",
                  i.type === "transaction" && i.status === "sent" && "text-green-500",
                  i.type === "invitation" && i.status === "sent" && "text-blue-500",
                  i.status === "failed" && "text-destructive"
                ), children: i.to }),
                i.type === "transaction" && i.status === "sent" && /* @__PURE__ */ n.jsx(Qe, { className: "text-green-500", size: 12 }),
                i.type === "invitation" && i.status === "sent" && /* @__PURE__ */ n.jsx(Fe, { className: "text-blue-500", size: 12 }),
                i.status === "failed" && /* @__PURE__ */ n.jsx(Fe, { className: "text-destructive", size: 12 })
              ] })
            ] }),
            /* @__PURE__ */ n.jsx("p", { className: M(
              "text-xs text-black font-normal leading-tight break-words",
              "desktop:w-[362px] laptop:w-[348px] tablet:w-[252px] w-full",
              "mb-1 tablet:mb-0",
              i.status === "failed" && "text-destructive"
            ), children: i.statusMessage }),
            /* @__PURE__ */ n.jsxs("div", { className: M(
              "flex-1 text-sm text-black font-normal leading-none text-right",
              "pr-0 tablet:pr-[8px]"
            ), children: [
              /* @__PURE__ */ n.jsxs("p", { children: [
                i.amount,
                " ",
                D.getToken(i.token).symbol
              ] }),
              i.type === "transaction" && i.status === "failed" && /* @__PURE__ */ n.jsx("p", { children: "(Not Sent)" })
            ] })
          ]
        },
        b
      )) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mt-[30px]", children: [
      /* @__PURE__ */ n.jsx("div", { className: "text-[#929292] text-sm font-normal leading-none flex items-center justify-end gap-1", children: /* @__PURE__ */ n.jsx("p", { children: "Estimated gas fee:" }) }),
      /* @__PURE__ */ n.jsxs("p", { className: "text-black text-sm font-medium leading-none text-right mt-0.5", children: [
        u && Object.entries(u).filter(([i]) => i !== "usdValue" && u[i] !== "0").map(([i, b], p, c) => /* @__PURE__ */ n.jsxs("span", { children: [
          b,
          " ",
          D.getToken(i).symbol,
          p < c.length - 1 && " & "
        ] }, i)),
        u && Object.values(u).some((i) => i !== "0") && ` (~$${u.usdValue} USD)`
      ] }),
      /* @__PURE__ */ n.jsx(
        et,
        {
          totalAmount: a,
          gasFees: u
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: "mt-[104px]", children: /* @__PURE__ */ n.jsxs("div", { className: "flex justify-center flex-wrap gap-4 mt-6 w-full", children: [
        /* @__PURE__ */ n.jsx(_e, { className: "w-[343px] tablet:w-[242px]", variant: "outline", onClick: r, children: "Transfer again" }),
        /* @__PURE__ */ n.jsx(_e, { className: "w-[343px] tablet:w-[242px]", onClick: () => {
          g(-1);
        }, children: "OK" })
      ] }) })
    ] })
  ] });
}
pe.ETH, pe.ETH, pe.ETH, pe.ETH;
function yn() {
  const [o, r] = S.useState(!1), [u, a] = S.useState([]), [g, i] = S.useState(null), [b, p] = S.useState({
    ...D.createTokenMap(() => "0"),
    usdValue: "0"
  }), c = (_, N, O) => {
    a(_), i(N), p(O), r(!0);
  };
  return /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? /* @__PURE__ */ n.jsx(
    dn,
    {
      transferResults: u,
      onTransferAgain: () => {
        r(!1);
      },
      gasFees: g,
      totalAmount: b
    }
  ) : /* @__PURE__ */ n.jsx(
    cn,
    {
      onSent: c
    }
  ) });
}
export {
  yn as default
};
