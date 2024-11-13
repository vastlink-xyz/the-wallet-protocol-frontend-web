import { j as S } from "./vendor-radix-CXAw23nV.js";
import { a as rs, c as ze, D as os, b as as, d as is, e as Ii, l as zl, B as Ns, S as Us, f as Dl, g as zs, T as Ws, h as Zs } from "./main-aLpcFRdZ.js";
import { i as Rl, j as As, L as Wl, r as B, a as Gs, p as Ml, O as _s } from "./vendor-react-U4DfHahV.js";
import { h as Ys, X as Xs } from "./vendor-ui-utils-DB1608yX.js";
import { u as ls } from "./vendor-utils-y1QZaLEY.js";
import { V as Zl } from "./index-tdOMsVjK.js";
import { S as Vs } from "./SendButton-bF_6GhaJ.js";
import { M as Js } from "./MarketplaceProvider-CCBnEQPv.js";
function Ks({ routes: f, currentRouteName: s }) {
  const { pathname: h } = Rl(), m = As(), A = rs.isAuthenticated();
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx("div", { className: ze(
      "hidden tablet:flex",
      "justify-start items-center gap-6"
    ), children: f.map((y) => {
      const P = h.startsWith(y.href);
      return /* @__PURE__ */ S.jsxs(
        "div",
        {
          className: ze(
            "py-2 justify-start items-center gap-2 flex relative",
            P && "text-white"
          ),
          children: [
            /* @__PURE__ */ S.jsx(
              Wl,
              {
                className: ze(
                  "text-[#a1a1a1] text-base font-medium leading-none cursor-pointer",
                  P && "text-white",
                  !A && "cursor-default"
                ),
                to: y.href,
                onClick: (E) => {
                  A || E.preventDefault();
                },
                children: y.name
              }
            ),
            P && /* @__PURE__ */ S.jsx("div", { className: "absolute -bottom-2 left-0 w-full h-0.5 bg-white" })
          ]
        },
        y.name
      );
    }) }),
    /* @__PURE__ */ S.jsx("div", { className: ze("flex tablet:hidden"), children: /* @__PURE__ */ S.jsxs(os, { children: [
      /* @__PURE__ */ S.jsx(as, { asChild: !0, children: /* @__PURE__ */ S.jsxs("div", { className: ze(
        "h-7 justify-start items-center gap-1 inline-flex text-[#fafafa]",
        !A && "text-[#a1a1a1]"
      ), children: [
        /* @__PURE__ */ S.jsx("div", { className: ze(
          "text-base font-medium leading-none",
          !A && "text-[#979797]"
        ), children: s }),
        /* @__PURE__ */ S.jsx(
          Ys,
          {
            className: ze(
              "w-4 h-4"
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ S.jsx(is, { className: "bg-white", children: f.map((y) => {
        const P = h.startsWith(y.href);
        return /* @__PURE__ */ S.jsx(
          Ii,
          {
            onClick: (E) => {
              if (!A) {
                E.preventDefault(), m("/auth");
                return;
              }
              m(y.href);
            },
            children: P ? /* @__PURE__ */ S.jsxs(Wl, { to: y.href, className: "flex items-center gap-2", children: [
              /* @__PURE__ */ S.jsx("div", { className: "text-brand-foreground", children: y.name }),
              /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ] }) : /* @__PURE__ */ S.jsx("div", { className: "", children: y.name })
          },
          y.name
        );
      }) })
    ] }) })
  ] });
}
function Gl({
  onLanguageChange: f
}) {
  const { i18n: s } = ls(), [h, m] = B.useState(!1);
  B.useEffect(() => {
    const P = zl.getData();
    P && s.changeLanguage(P);
  }, [s]);
  const A = (P) => {
    s.changeLanguage(P), zl.setData(P), m(!1), f == null || f();
  }, y = /* @__PURE__ */ S.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ S.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ S.jsx("div", { className: ze(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ S.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ S.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ S.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Choose your language" }),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => m(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ S.jsx(Xs, {})
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "p-6 border-b border-[#EBEBEB] flex justify-center gap-[82px]", children: [
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            onClick: () => A("en"),
            className: ze(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              s.language === "en" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "English",
              s.language === "en" && /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            onClick: () => A("zh"),
            className: ze(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              s.language === "zh" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "简体中文",
              s.language === "zh" && /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[30px]" })
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: ze(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ S.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ S.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Choose your language" }),
        /* @__PURE__ */ S.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ S.jsxs(
            "div",
            {
              onClick: () => A("en"),
              className: ze(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                s.language === "en" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "English",
                s.language === "en" && /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          ),
          /* @__PURE__ */ S.jsxs(
            "div",
            {
              onClick: () => A("zh"),
              className: ze(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                s.language === "zh" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "简体中文",
                s.language === "zh" && /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("footer", { className: "", children: /* @__PURE__ */ S.jsx(
        Ns,
        {
          variant: "ghost",
          className: ze(
            "w-full text-[15px] rounded-none",
            "hover:bg-black/5"
          ),
          onClick: () => m(!1),
          children: "Cancel"
        }
      ) })
    ] }) })
  ] });
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ S.jsx(
        "img",
        {
          className: ze(
            "w-[24px] h-[24px] cursor-pointer",
            "hidden laptop:flex"
          ),
          src: "/imgs/icons/language.svg",
          onClick: () => m(!0)
        }
      ),
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "flex laptop:hidden cursor-pointer",
          onClick: () => m(!0),
          children: "Language"
        }
      )
    ] }),
    h && Gs.createPortal(
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "fixed inset-0 z-[100] flex items-center justify-center font-['Roboto']",
          style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0 },
          children: y
        }
      ),
      document.body
      // mount to body to avoid layout shift
    )
  ] });
}
function $s() {
  const [f, s] = B.useState(!1);
  return /* @__PURE__ */ S.jsxs("div", { className: "justify-start items-center gap-[21px] flex", children: [
    /* @__PURE__ */ S.jsx("div", { className: "hidden tablet:flex", children: /* @__PURE__ */ S.jsx(Zl, {}) }),
    /* @__PURE__ */ S.jsxs("div", { className: "justify-start items-center gap-7 flex", children: [
      /* @__PURE__ */ S.jsx("div", { className: ze(
        "hidden tablet:flex",
        "justify-start items-center gap-6"
      ) }),
      /* @__PURE__ */ S.jsx("div", { className: "laptop:hidden", children: /* @__PURE__ */ S.jsxs(
        os,
        {
          modal: !1,
          open: f,
          onOpenChange: s,
          children: [
            /* @__PURE__ */ S.jsx(as, { asChild: !0, children: /* @__PURE__ */ S.jsx("button", { className: "w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ S.jsx("img", { src: "/imgs/icons/menu.svg", className: "w-6 h-6" }) }) }),
            /* @__PURE__ */ S.jsxs(is, { className: "bg-white border-none", children: [
              /* @__PURE__ */ S.jsx(
                Ii,
                {
                  className: ze("flex tablet:hidden"),
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ S.jsx(Zl, { className: "p-0 bg-transparent" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                Ii,
                {
                  className: ze("hidden tablet:flex"),
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ S.jsx("div", { children: "Profile" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                Ii,
                {
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ S.jsx("div", { children: "Notification" })
                }
              ),
              /* @__PURE__ */ S.jsx(
                Ii,
                {
                  onSelect: (h) => h.preventDefault(),
                  children: /* @__PURE__ */ S.jsx(Gl, { onLanguageChange: () => s(!1) })
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ S.jsx("div", { className: ze(
        "flex tablet:hidden laptop:flex",
        "justify-start items-center gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ S.jsx("img", { className: "w-[24px] h-[24px] flex-shrink-0", src: "/imgs/icons/profile.png" }) }),
      /* @__PURE__ */ S.jsx("div", { className: ze(
        "hidden laptop:block",
        "w-[2px] h-[20px] bg-[#404040]"
      ) }),
      /* @__PURE__ */ S.jsx("div", { className: ze(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ S.jsx("img", { className: "w-[24px] h-[24px] flex-shrink-0", src: "/imgs/icons/message.svg" }) }),
      /* @__PURE__ */ S.jsx("div", { className: ze(
        "hidden laptop:flex",
        "justify-start items-start gap-6 flex-shrink-0 cursor-pointer"
      ), children: /* @__PURE__ */ S.jsx(Gl, {}) })
    ] })
  ] });
}
function qs() {
  const { pathname: f } = Rl(), { t: s } = ls(), h = As(), m = [
    {
      name: s("header.dashboard"),
      href: "/dashboard"
    },
    {
      name: s("header.marketplace"),
      href: "/marketplace"
    },
    {
      name: s("header.community"),
      href: "/community"
    }
  ], A = m.find((P) => f.startsWith(P.href)), y = (A == null ? void 0 : A.name) || "Home";
  return /* @__PURE__ */ S.jsxs("div", { className: ze(
    "w-full h-[60px] bg-[#111111] shadow justify-between items-center inline-flex",
    "tablet:px-10 px-4"
  ), children: [
    /* @__PURE__ */ S.jsxs("div", { className: "items-center flex", children: [
      /* @__PURE__ */ S.jsxs(
        "div",
        {
          className: ze(
            "items-center gap-2 flex mr-[46px]",
            "mr-[20px] tablet:mr-[46px]",
            "cursor-pointer"
          ),
          onClick: () => h("/"),
          children: [
            /* @__PURE__ */ S.jsx("img", { src: "/imgs/logos/logo.svg" }),
            /* @__PURE__ */ S.jsx("div", { className: ze(
              'text-white text-xl font-bold font-["Roboto_Mono"] leading-4',
              "hidden tablet:block"
            ), children: "Vastlink" })
          ]
        }
      ),
      /* @__PURE__ */ S.jsx(
        Ks,
        {
          routes: m,
          currentRouteName: y
        }
      )
    ] }),
    /* @__PURE__ */ S.jsx($s, {})
  ] });
}
var Fo = {}, Mo = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function eu() {
  if (_l) return Mo;
  _l = 1;
  var f = B;
  function s(a) {
    for (var c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, g = 1; g < arguments.length; g++) c += "&args[]=" + encodeURIComponent(arguments[g]);
    return "Minified React error #" + a + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, y = {};
  function P(a) {
    return h.call(y, a) ? !0 : h.call(A, a) ? !1 : m.test(a) ? y[a] = !0 : (A[a] = !0, !1);
  }
  function E(a, c, g, x, Q, I, N) {
    this.acceptsBooleans = c === 2 || c === 3 || c === 4, this.attributeName = x, this.attributeNamespace = Q, this.mustUseProperty = g, this.propertyName = a, this.type = c, this.sanitizeURL = I, this.removeEmptyString = N;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    w[a] = new E(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var c = a[0];
    w[c] = new E(c, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    w[a] = new E(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    w[a] = new E(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    w[a] = new E(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    w[a] = new E(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    w[a] = new E(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    w[a] = new E(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    w[a] = new E(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function H(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var c = a.replace(
      C,
      H
    );
    w[c] = new E(c, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var c = a.replace(C, H);
    w[c] = new E(c, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var c = a.replace(C, H);
    w[c] = new E(c, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    w[a] = new E(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    w[a] = new E(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var k = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, F = ["Webkit", "ms", "Moz", "O"];
  Object.keys(k).forEach(function(a) {
    F.forEach(function(c) {
      c = c + a.charAt(0).toUpperCase() + a.substring(1), k[c] = k[a];
    });
  });
  var U = /["'&<>]/;
  function L(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var c = U.exec(a);
    if (c) {
      var g = "", x, Q = 0;
      for (x = c.index; x < a.length; x++) {
        switch (a.charCodeAt(x)) {
          case 34:
            c = "&quot;";
            break;
          case 38:
            c = "&amp;";
            break;
          case 39:
            c = "&#x27;";
            break;
          case 60:
            c = "&lt;";
            break;
          case 62:
            c = "&gt;";
            break;
          default:
            continue;
        }
        Q !== x && (g += a.substring(Q, x)), Q = x + 1, g += c;
      }
      a = Q !== x ? g + a.substring(Q, x) : g;
    }
    return a;
  }
  var _ = /([A-Z])/g, j = /^ms-/, T = Array.isArray;
  function K(a, c) {
    return { insertionMode: a, selectedValue: c };
  }
  function te(a, c, g) {
    switch (c) {
      case "select":
        return K(1, g.value != null ? g.value : g.defaultValue);
      case "svg":
        return K(2, null);
      case "math":
        return K(3, null);
      case "foreignObject":
        return K(1, null);
      case "table":
        return K(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return K(5, null);
      case "colgroup":
        return K(7, null);
      case "tr":
        return K(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? K(1, null) : a;
  }
  var X = /* @__PURE__ */ new Map();
  function G(a, c, g) {
    if (typeof g != "object") throw Error(s(62));
    c = !0;
    for (var x in g) if (h.call(g, x)) {
      var Q = g[x];
      if (Q != null && typeof Q != "boolean" && Q !== "") {
        if (x.indexOf("--") === 0) {
          var I = L(x);
          Q = L(("" + Q).trim());
        } else {
          I = x;
          var N = X.get(I);
          N !== void 0 || (N = L(I.replace(_, "-$1").toLowerCase().replace(j, "-ms-")), X.set(I, N)), I = N, Q = typeof Q == "number" ? Q === 0 || h.call(k, x) ? "" + Q : Q + "px" : L(("" + Q).trim());
        }
        c ? (c = !1, a.push(' style="', I, ":", Q)) : a.push(";", I, ":", Q);
      }
    }
    c || a.push('"');
  }
  function $(a, c, g, x) {
    switch (g) {
      case "style":
        G(a, c, x);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
      if (c = w.hasOwnProperty(g) ? w[g] : null, c !== null) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!c.acceptsBooleans) return;
        }
        switch (g = c.attributeName, c.type) {
          case 3:
            x && a.push(" ", g, '=""');
            break;
          case 4:
            x === !0 ? a.push(" ", g, '=""') : x !== !1 && a.push(" ", g, '="', L(x), '"');
            break;
          case 5:
            isNaN(x) || a.push(" ", g, '="', L(x), '"');
            break;
          case 6:
            !isNaN(x) && 1 <= x && a.push(" ", g, '="', L(x), '"');
            break;
          default:
            c.sanitizeURL && (x = "" + x), a.push(" ", g, '="', L(x), '"');
        }
      } else if (P(g)) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (c = g.toLowerCase().slice(0, 5), c !== "data-" && c !== "aria-") return;
        }
        a.push(" ", g, '="', L(x), '"');
      }
    }
  }
  function Z(a, c, g) {
    if (c != null) {
      if (g != null) throw Error(s(60));
      if (typeof c != "object" || !("__html" in c)) throw Error(s(61));
      c = c.__html, c != null && a.push("" + c);
    }
  }
  function re(a) {
    var c = "";
    return f.Children.forEach(a, function(g) {
      g != null && (c += g);
    }), c;
  }
  function ne(a, c, g, x) {
    a.push(ce(g));
    var Q = g = null, I;
    for (I in c) if (h.call(c, I)) {
      var N = c[I];
      if (N != null) switch (I) {
        case "children":
          g = N;
          break;
        case "dangerouslySetInnerHTML":
          Q = N;
          break;
        default:
          $(a, x, I, N);
      }
    }
    return a.push(">"), Z(a, Q, g), typeof g == "string" ? (a.push(L(g)), null) : g;
  }
  var ue = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ae = /* @__PURE__ */ new Map();
  function ce(a) {
    var c = ae.get(a);
    if (c === void 0) {
      if (!ue.test(a)) throw Error(s(65, a));
      c = "<" + a, ae.set(a, c);
    }
    return c;
  }
  function ve(a, c, g, x, Q) {
    switch (c) {
      case "select":
        a.push(ce("select"));
        var I = null, N = null;
        for (se in g) if (h.call(g, se)) {
          var V = g[se];
          if (V != null) switch (se) {
            case "children":
              I = V;
              break;
            case "dangerouslySetInnerHTML":
              N = V;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              $(a, x, se, V);
          }
        }
        return a.push(">"), Z(a, N, I), I;
      case "option":
        N = Q.selectedValue, a.push(ce("option"));
        var ie = V = null, he = null, se = null;
        for (I in g) if (h.call(g, I)) {
          var Be = g[I];
          if (Be != null) switch (I) {
            case "children":
              V = Be;
              break;
            case "selected":
              he = Be;
              break;
            case "dangerouslySetInnerHTML":
              se = Be;
              break;
            case "value":
              ie = Be;
            default:
              $(a, x, I, Be);
          }
        }
        if (N != null) if (g = ie !== null ? "" + ie : re(V), T(N)) {
          for (x = 0; x < N.length; x++)
            if ("" + N[x] === g) {
              a.push(' selected=""');
              break;
            }
        } else "" + N === g && a.push(' selected=""');
        else he && a.push(' selected=""');
        return a.push(">"), Z(a, se, V), V;
      case "textarea":
        a.push(ce("textarea")), se = N = I = null;
        for (V in g) if (h.call(g, V) && (ie = g[V], ie != null)) switch (V) {
          case "children":
            se = ie;
            break;
          case "value":
            I = ie;
            break;
          case "defaultValue":
            N = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            $(
              a,
              x,
              V,
              ie
            );
        }
        if (I === null && N !== null && (I = N), a.push(">"), se != null) {
          if (I != null) throw Error(s(92));
          if (T(se) && 1 < se.length) throw Error(s(93));
          I = "" + se;
        }
        return typeof I == "string" && I[0] === `
` && a.push(`
`), I !== null && a.push(L("" + I)), null;
      case "input":
        a.push(ce("input")), ie = se = V = I = null;
        for (N in g) if (h.call(g, N) && (he = g[N], he != null)) switch (N) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            ie = he;
            break;
          case "defaultValue":
            V = he;
            break;
          case "checked":
            se = he;
            break;
          case "value":
            I = he;
            break;
          default:
            $(a, x, N, he);
        }
        return se !== null ? $(a, x, "checked", se) : ie !== null && $(a, x, "checked", ie), I !== null ? $(a, x, "value", I) : V !== null && $(a, x, "value", V), a.push("/>"), null;
      case "menuitem":
        a.push(ce("menuitem"));
        for (var lt in g) if (h.call(g, lt) && (I = g[lt], I != null)) switch (lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            $(a, x, lt, I);
        }
        return a.push(">"), null;
      case "title":
        a.push(ce("title")), I = null;
        for (Be in g) if (h.call(g, Be) && (N = g[Be], N != null)) switch (Be) {
          case "children":
            I = N;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            $(a, x, Be, N);
        }
        return a.push(">"), I;
      case "listing":
      case "pre":
        a.push(ce(c)), N = I = null;
        for (ie in g) if (h.call(g, ie) && (V = g[ie], V != null)) switch (ie) {
          case "children":
            I = V;
            break;
          case "dangerouslySetInnerHTML":
            N = V;
            break;
          default:
            $(a, x, ie, V);
        }
        if (a.push(">"), N != null) {
          if (I != null) throw Error(s(60));
          if (typeof N != "object" || !("__html" in N)) throw Error(s(61));
          g = N.__html, g != null && (typeof g == "string" && 0 < g.length && g[0] === `
` ? a.push(`
`, g) : a.push("" + g));
        }
        return typeof I == "string" && I[0] === `
` && a.push(`
`), I;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        a.push(ce(c));
        for (var st in g) if (h.call(g, st) && (I = g[st], I != null)) switch (st) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, c));
          default:
            $(a, x, st, I);
        }
        return a.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ne(
          a,
          g,
          c,
          x
        );
      case "html":
        return Q.insertionMode === 0 && a.push("<!DOCTYPE html>"), ne(a, g, c, x);
      default:
        if (c.indexOf("-") === -1 && typeof g.is != "string") return ne(a, g, c, x);
        a.push(ce(c)), N = I = null;
        for (he in g) if (h.call(g, he) && (V = g[he], V != null)) switch (he) {
          case "children":
            I = V;
            break;
          case "dangerouslySetInnerHTML":
            N = V;
            break;
          case "style":
            G(a, x, V);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            P(he) && typeof V != "function" && typeof V != "symbol" && a.push(" ", he, '="', L(V), '"');
        }
        return a.push(">"), Z(a, N, I), I;
    }
  }
  function de(a, c, g) {
    if (a.push('<!--$?--><template id="'), g === null) throw Error(s(395));
    return a.push(g), a.push('"></template>');
  }
  function Me(a, c, g, x) {
    switch (g.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(c.segmentPrefix), c = x.toString(16), a.push(c), a.push('">');
      default:
        throw Error(s(397));
    }
  }
  function Ce(a, c) {
    switch (c.insertionMode) {
      case 0:
      case 1:
        return a.push("</div>");
      case 2:
        return a.push("</svg>");
      case 3:
        return a.push("</math>");
      case 4:
        return a.push("</table>");
      case 5:
        return a.push("</tbody></table>");
      case 6:
        return a.push("</tr></table>");
      case 7:
        return a.push("</colgroup></table>");
      default:
        throw Error(s(397));
    }
  }
  var ee = /[<\u2028\u2029]/g;
  function le(a) {
    return JSON.stringify(a).replace(ee, function(c) {
      switch (c) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function fe(a, c) {
    return c = c === void 0 ? "" : c, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: c + "P:", segmentPrefix: c + "S:", boundaryPrefix: c + "B:", idPrefix: c, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function be(a, c, g, x) {
    return g.generateStaticMarkup ? (a.push(L(c)), !1) : (c === "" ? a = x : (x && a.push("<!-- -->"), a.push(L(c)), a = !0), a);
  }
  var oe = Object.assign, me = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), Ie = Symbol.for("react.scope"), $e = Symbol.for("react.debug_trace_mode"), nt = Symbol.for("react.legacy_hidden"), We = Symbol.for("react.default_value"), Je = Symbol.iterator;
  function dt(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Se:
        return "Fragment";
      case Oe:
        return "Portal";
      case Le:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case yt:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Gt:
        return (a.displayName || "Context") + ".Consumer";
      case Zt:
        return (a._context.displayName || "Context") + ".Provider";
      case tt:
        var c = a.render;
        return a = a.displayName, a || (a = c.displayName || c.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case Ue:
        return c = a.displayName || null, c !== null ? c : dt(a.type) || "Memo";
      case Pe:
        c = a._payload, a = a._init;
        try {
          return dt(a(c));
        } catch {
        }
    }
    return null;
  }
  var Rt = {};
  function gr(a, c) {
    if (a = a.contextTypes, !a) return Rt;
    var g = {}, x;
    for (x in a) g[x] = c[x];
    return g;
  }
  var St = null;
  function et(a, c) {
    if (a !== c) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var g = c.parent;
      if (a === null) {
        if (g !== null) throw Error(s(401));
      } else {
        if (g === null) throw Error(s(401));
        et(a, g);
      }
      c.context._currentValue2 = c.value;
    }
  }
  function Xe(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && Xe(a);
  }
  function Gn(a) {
    var c = a.parent;
    c !== null && Gn(c), a.context._currentValue2 = a.value;
  }
  function _n(a, c) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(s(402));
    a.depth === c.depth ? et(a, c) : _n(a, c);
  }
  function Yn(a, c) {
    var g = c.parent;
    if (g === null) throw Error(s(402));
    a.depth === g.depth ? et(a, g) : Yn(a, g), c.context._currentValue2 = c.value;
  }
  function Ze(a) {
    var c = St;
    c !== a && (c === null ? Gn(a) : a === null ? Xe(c) : c.depth === a.depth ? et(c, a) : c.depth > a.depth ? _n(c, a) : Yn(c, a), St = a);
  }
  var Xn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, c) {
    a = a._reactInternals, a.queue !== null && a.queue.push(c);
  }, enqueueReplaceState: function(a, c) {
    a = a._reactInternals, a.replace = !0, a.queue = [c];
  }, enqueueForceUpdate: function() {
  } };
  function mr(a, c, g, x) {
    var Q = a.state !== void 0 ? a.state : null;
    a.updater = Xn, a.props = g, a.state = Q;
    var I = { queue: [], replace: !1 };
    a._reactInternals = I;
    var N = c.contextType;
    if (a.context = typeof N == "object" && N !== null ? N._currentValue2 : x, N = c.getDerivedStateFromProps, typeof N == "function" && (N = N(g, Q), Q = N == null ? Q : oe({}, Q, N), a.state = Q), typeof c.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (c = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), c !== a.state && Xn.enqueueReplaceState(a, a.state, null), I.queue !== null && 0 < I.queue.length) if (c = I.queue, N = I.replace, I.queue = null, I.replace = !1, N && c.length === 1) a.state = c[0];
    else {
      for (I = N ? c[0] : a.state, Q = !0, N = N ? 1 : 0; N < c.length; N++) {
        var V = c[N];
        V = typeof V == "function" ? V.call(a, I, g, x) : V, V != null && (Q ? (Q = !1, I = oe({}, I, V)) : oe(I, V));
      }
      a.state = I;
    }
    else I.queue = null;
  }
  var yr = { id: 1, overflow: "" };
  function Vn(a, c, g) {
    var x = a.id;
    a = a.overflow;
    var Q = 32 - Cn(x) - 1;
    x &= ~(1 << Q), g += 1;
    var I = 32 - Cn(c) + Q;
    if (30 < I) {
      var N = Q - Q % 5;
      return I = (x & (1 << N) - 1).toString(32), x >>= N, Q -= N, { id: 1 << 32 - Cn(c) + Q | g << Q | x, overflow: I + a };
    }
    return { id: 1 << I | g << Q | x, overflow: a };
  }
  var Cn = Math.clz32 ? Math.clz32 : $t, Kr = Math.log, Jn = Math.LN2;
  function $t(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Kr(a) / Jn | 0) | 0;
  }
  function Kn(a, c) {
    return a === c && (a !== 0 || 1 / a === 1 / c) || a !== a && c !== c;
  }
  var wr = typeof Object.is == "function" ? Object.is : Kn, at = null, Mt = null, qt = null, Re = null, en = !1, Dn = !1, hn = 0, Qt = null, Pn = 0;
  function _t() {
    if (at === null) throw Error(s(321));
    return at;
  }
  function Ke() {
    if (0 < Pn) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function $n() {
    return Re === null ? qt === null ? (en = !1, qt = Re = Ke()) : (en = !0, Re = qt) : Re.next === null ? (en = !1, Re = Re.next = Ke()) : (en = !0, Re = Re.next), Re;
  }
  function qn() {
    Mt = at = null, Dn = !1, qt = null, Pn = 0, Re = Qt = null;
  }
  function br(a, c) {
    return typeof c == "function" ? c(a) : c;
  }
  function Ge(a, c, g) {
    if (at = _t(), Re = $n(), en) {
      var x = Re.queue;
      if (c = x.dispatch, Qt !== null && (g = Qt.get(x), g !== void 0)) {
        Qt.delete(x), x = Re.memoizedState;
        do
          x = a(x, g.action), g = g.next;
        while (g !== null);
        return Re.memoizedState = x, [x, c];
      }
      return [Re.memoizedState, c];
    }
    return a = a === br ? typeof c == "function" ? c() : c : g !== void 0 ? g(c) : c, Re.memoizedState = a, a = Re.queue = { last: null, dispatch: null }, a = a.dispatch = $r.bind(null, at, a), [Re.memoizedState, a];
  }
  function er(a, c) {
    if (at = _t(), Re = $n(), c = c === void 0 ? null : c, Re !== null) {
      var g = Re.memoizedState;
      if (g !== null && c !== null) {
        var x = g[1];
        e: if (x === null) x = !1;
        else {
          for (var Q = 0; Q < x.length && Q < c.length; Q++) if (!wr(c[Q], x[Q])) {
            x = !1;
            break e;
          }
          x = !0;
        }
        if (x) return g[0];
      }
    }
    return a = a(), Re.memoizedState = [a, c], a;
  }
  function $r(a, c, g) {
    if (25 <= Pn) throw Error(s(301));
    if (a === at) if (Dn = !0, a = { action: g, next: null }, Qt === null && (Qt = /* @__PURE__ */ new Map()), g = Qt.get(c), g === void 0) Qt.set(c, a);
    else {
      for (c = g; c.next !== null; ) c = c.next;
      c.next = a;
    }
  }
  function qr() {
    throw Error(s(394));
  }
  function Ot() {
  }
  var tr = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return _t(), a._currentValue2;
  }, useMemo: er, useReducer: Ge, useRef: function(a) {
    at = _t(), Re = $n();
    var c = Re.memoizedState;
    return c === null ? (a = { current: a }, Re.memoizedState = a) : c;
  }, useState: function(a) {
    return Ge(br, a);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(a, c) {
    return er(function() {
      return a;
    }, c);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(a) {
    return _t(), a;
  }, useTransition: function() {
    return _t(), [
      !1,
      qr
    ];
  }, useId: function() {
    var a = Mt.treeContext, c = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Cn(a) - 1)).toString(32) + c;
    var g = Bn;
    if (g === null) throw Error(s(404));
    return c = hn++, a = ":" + g.idPrefix + "R" + a, 0 < c && (a += "H" + c.toString(32)), a + ":";
  }, useMutableSource: function(a, c) {
    return _t(), c(a._source);
  }, useSyncExternalStore: function(a, c, g) {
    if (g === void 0) throw Error(s(407));
    return g();
  } }, Bn = null, tn = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ft(a) {
    return console.error(a), null;
  }
  function jt() {
  }
  function kn(a, c, g, x, Q, I, N, V, ie) {
    var he = [], se = /* @__PURE__ */ new Set();
    return c = { destination: null, responseState: c, progressiveChunkSize: x === void 0 ? 12800 : x, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: se, pingedTasks: he, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Q === void 0 ? ft : Q, onAllReady: jt, onShellReady: N === void 0 ? jt : N, onShellError: jt, onFatalError: jt }, g = rn(c, 0, null, g, !1, !1), g.parentFlushed = !0, a = nn(c, a, null, g, se, Rt, null, yr), he.push(a), c;
  }
  function nn(a, c, g, x, Q, I, N, V) {
    a.allPendingTasks++, g === null ? a.pendingRootTasks++ : g.pendingTasks++;
    var ie = { node: c, ping: function() {
      var he = a.pingedTasks;
      he.push(ie), he.length === 1 && it(a);
    }, blockedBoundary: g, blockedSegment: x, abortSet: Q, legacyContext: I, context: N, treeContext: V };
    return Q.add(ie), ie;
  }
  function rn(a, c, g, x, Q, I) {
    return { status: 0, id: -1, index: c, parentFlushed: !1, chunks: [], children: [], formatContext: x, boundary: g, lastPushedText: Q, textEmbedded: I };
  }
  function Ft(a, c) {
    if (a = a.onError(c), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function on(a, c) {
    var g = a.onShellError;
    g(c), g = a.onFatalError, g(c), a.destination !== null ? (a.status = 2, a.destination.destroy(c)) : (a.status = 1, a.fatalError = c);
  }
  function ht(a, c, g, x, Q) {
    for (at = {}, Mt = c, hn = 0, a = g(x, Q); Dn; ) Dn = !1, hn = 0, Pn += 1, Re = null, a = g(x, Q);
    return qn(), a;
  }
  function Sr(a, c, g, x) {
    var Q = g.render(), I = x.childContextTypes;
    if (I != null) {
      var N = c.legacyContext;
      if (typeof g.getChildContext != "function") x = N;
      else {
        g = g.getChildContext();
        for (var V in g) if (!(V in I)) throw Error(s(108, dt(x) || "Unknown", V));
        x = oe({}, N, g);
      }
      c.legacyContext = x, _e(a, c, Q), c.legacyContext = N;
    } else _e(a, c, Q);
  }
  function xr(a, c) {
    if (a && a.defaultProps) {
      c = oe({}, c), a = a.defaultProps;
      for (var g in a) c[g] === void 0 && (c[g] = a[g]);
      return c;
    }
    return c;
  }
  function Yt(a, c, g, x, Q) {
    if (typeof g == "function") if (g.prototype && g.prototype.isReactComponent) {
      Q = gr(g, c.legacyContext);
      var I = g.contextType;
      I = new g(x, typeof I == "object" && I !== null ? I._currentValue2 : Q), mr(I, g, x, Q), Sr(a, c, I, g);
    } else {
      I = gr(g, c.legacyContext), Q = ht(a, c, g, x, I);
      var N = hn !== 0;
      if (typeof Q == "object" && Q !== null && typeof Q.render == "function" && Q.$$typeof === void 0) mr(Q, g, x, I), Sr(a, c, Q, g);
      else if (N) {
        x = c.treeContext, c.treeContext = Vn(x, 1, 0);
        try {
          _e(a, c, Q);
        } finally {
          c.treeContext = x;
        }
      } else _e(a, c, Q);
    }
    else if (typeof g == "string") {
      switch (Q = c.blockedSegment, I = ve(Q.chunks, g, x, a.responseState, Q.formatContext), Q.lastPushedText = !1, N = Q.formatContext, Q.formatContext = te(N, g, x), Ht(a, c, I), Q.formatContext = N, g) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          Q.chunks.push("</", g, ">");
      }
      Q.lastPushedText = !1;
    } else {
      switch (g) {
        case nt:
        case $e:
        case Ae:
        case Le:
        case Se:
          _e(a, c, x.children);
          return;
        case xe:
          _e(a, c, x.children);
          return;
        case Ie:
          throw Error(s(343));
        case yt:
          e: {
            g = c.blockedBoundary, Q = c.blockedSegment, I = x.fallback, x = x.children, N = /* @__PURE__ */ new Set();
            var V = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: N, errorDigest: null }, ie = rn(a, Q.chunks.length, V, Q.formatContext, !1, !1);
            Q.children.push(ie), Q.lastPushedText = !1;
            var he = rn(a, 0, null, Q.formatContext, !1, !1);
            he.parentFlushed = !0, c.blockedBoundary = V, c.blockedSegment = he;
            try {
              if (Ht(
                a,
                c,
                x
              ), a.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), he.status = 1, xt(V, he), V.pendingTasks === 0) break e;
            } catch (se) {
              he.status = 4, V.forceClientRender = !0, V.errorDigest = Ft(a, se);
            } finally {
              c.blockedBoundary = g, c.blockedSegment = Q;
            }
            c = nn(a, I, g, ie, N, c.legacyContext, c.context, c.treeContext), a.pingedTasks.push(c);
          }
          return;
      }
      if (typeof g == "object" && g !== null) switch (g.$$typeof) {
        case tt:
          if (x = ht(a, c, g.render, x, Q), hn !== 0) {
            g = c.treeContext, c.treeContext = Vn(g, 1, 0);
            try {
              _e(a, c, x);
            } finally {
              c.treeContext = g;
            }
          } else _e(a, c, x);
          return;
        case Ue:
          g = g.type, x = xr(g, x), Yt(a, c, g, x, Q);
          return;
        case Zt:
          if (Q = x.children, g = g._context, x = x.value, I = g._currentValue2, g._currentValue2 = x, N = St, St = x = { parent: N, depth: N === null ? 0 : N.depth + 1, context: g, parentValue: I, value: x }, c.context = x, _e(a, c, Q), a = St, a === null) throw Error(s(403));
          x = a.parentValue, a.context._currentValue2 = x === We ? a.context._defaultValue : x, a = St = a.parent, c.context = a;
          return;
        case Gt:
          x = x.children, x = x(g._currentValue2), _e(a, c, x);
          return;
        case Pe:
          Q = g._init, g = Q(g._payload), x = xr(g, x), Yt(
            a,
            c,
            g,
            x,
            void 0
          );
          return;
      }
      throw Error(s(130, g == null ? g : typeof g, ""));
    }
  }
  function _e(a, c, g) {
    if (c.node = g, typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case me:
          Yt(a, c, g.type, g.props, g.ref);
          return;
        case Oe:
          throw Error(s(257));
        case Pe:
          var x = g._init;
          g = x(g._payload), _e(a, c, g);
          return;
      }
      if (T(g)) {
        Lt(a, c, g);
        return;
      }
      if (g === null || typeof g != "object" ? x = null : (x = Je && g[Je] || g["@@iterator"], x = typeof x == "function" ? x : null), x && (x = x.call(g))) {
        if (g = x.next(), !g.done) {
          var Q = [];
          do
            Q.push(g.value), g = x.next();
          while (!g.done);
          Lt(a, c, Q);
        }
        return;
      }
      throw a = Object.prototype.toString.call(g), Error(s(31, a === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : a));
    }
    typeof g == "string" ? (x = c.blockedSegment, x.lastPushedText = be(c.blockedSegment.chunks, g, a.responseState, x.lastPushedText)) : typeof g == "number" && (x = c.blockedSegment, x.lastPushedText = be(c.blockedSegment.chunks, "" + g, a.responseState, x.lastPushedText));
  }
  function Lt(a, c, g) {
    for (var x = g.length, Q = 0; Q < x; Q++) {
      var I = c.treeContext;
      c.treeContext = Vn(I, x, Q);
      try {
        Ht(a, c, g[Q]);
      } finally {
        c.treeContext = I;
      }
    }
  }
  function Ht(a, c, g) {
    var x = c.blockedSegment.formatContext, Q = c.legacyContext, I = c.context;
    try {
      return _e(a, c, g);
    } catch (ie) {
      if (qn(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        g = ie;
        var N = c.blockedSegment, V = rn(a, N.chunks.length, null, N.formatContext, N.lastPushedText, !0);
        N.children.push(V), N.lastPushedText = !1, a = nn(a, c.node, c.blockedBoundary, V, c.abortSet, c.legacyContext, c.context, c.treeContext).ping, g.then(a, a), c.blockedSegment.formatContext = x, c.legacyContext = Q, c.context = I, Ze(I);
      } else throw c.blockedSegment.formatContext = x, c.legacyContext = Q, c.context = I, Ze(I), ie;
    }
  }
  function an(a) {
    var c = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Nt(this, c, a);
  }
  function Tn(a, c, g) {
    var x = a.blockedBoundary;
    a.blockedSegment.status = 3, x === null ? (c.allPendingTasks--, c.status !== 2 && (c.status = 2, c.destination !== null && c.destination.push(null))) : (x.pendingTasks--, x.forceClientRender || (x.forceClientRender = !0, a = g === void 0 ? Error(s(432)) : g, x.errorDigest = c.onError(a), x.parentFlushed && c.clientRenderedBoundaries.push(x)), x.fallbackAbortableTasks.forEach(function(Q) {
      return Tn(Q, c, g);
    }), x.fallbackAbortableTasks.clear(), c.allPendingTasks--, c.allPendingTasks === 0 && (x = c.onAllReady, x()));
  }
  function xt(a, c) {
    if (c.chunks.length === 0 && c.children.length === 1 && c.children[0].boundary === null) {
      var g = c.children[0];
      g.id = c.id, g.parentFlushed = !0, g.status === 1 && xt(a, g);
    } else a.completedSegments.push(c);
  }
  function Nt(a, c, g) {
    if (c === null) {
      if (g.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(s(389));
        a.completedRootSegment = g;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = jt, c = a.onShellReady, c());
    } else c.pendingTasks--, c.forceClientRender || (c.pendingTasks === 0 ? (g.parentFlushed && g.status === 1 && xt(c, g), c.parentFlushed && a.completedBoundaries.push(c), c.fallbackAbortableTasks.forEach(an, a), c.fallbackAbortableTasks.clear()) : g.parentFlushed && g.status === 1 && (xt(c, g), c.completedSegments.length === 1 && c.parentFlushed && a.partialBoundaries.push(c)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function it(a) {
    if (a.status !== 2) {
      var c = St, g = tn.current;
      tn.current = tr;
      var x = Bn;
      Bn = a.responseState;
      try {
        var Q = a.pingedTasks, I;
        for (I = 0; I < Q.length; I++) {
          var N = Q[I], V = a, ie = N.blockedSegment;
          if (ie.status === 0) {
            Ze(N.context);
            try {
              _e(V, N, N.node), V.responseState.generateStaticMarkup || ie.lastPushedText && ie.textEmbedded && ie.chunks.push("<!-- -->"), N.abortSet.delete(N), ie.status = 1, Nt(V, N.blockedBoundary, ie);
            } catch (ut) {
              if (qn(), typeof ut == "object" && ut !== null && typeof ut.then == "function") {
                var he = N.ping;
                ut.then(he, he);
              } else {
                N.abortSet.delete(N), ie.status = 4;
                var se = N.blockedBoundary, Be = ut, lt = Ft(V, Be);
                if (se === null ? on(V, Be) : (se.pendingTasks--, se.forceClientRender || (se.forceClientRender = !0, se.errorDigest = lt, se.parentFlushed && V.clientRenderedBoundaries.push(se))), V.allPendingTasks--, V.allPendingTasks === 0) {
                  var st = V.onAllReady;
                  st();
                }
              }
            } finally {
            }
          }
        }
        Q.splice(0, I), a.destination !== null && At(a, a.destination);
      } catch (ut) {
        Ft(a, ut), on(a, ut);
      } finally {
        Bn = x, tn.current = g, g === tr && Ze(c);
      }
    }
  }
  function An(a, c, g) {
    switch (g.parentFlushed = !0, g.status) {
      case 0:
        var x = g.id = a.nextSegmentId++;
        return g.lastPushedText = !1, g.textEmbedded = !1, a = a.responseState, c.push('<template id="'), c.push(a.placeholderPrefix), a = x.toString(16), c.push(a), c.push('"></template>');
      case 1:
        g.status = 2;
        var Q = !0;
        x = g.chunks;
        var I = 0;
        g = g.children;
        for (var N = 0; N < g.length; N++) {
          for (Q = g[N]; I < Q.index; I++) c.push(x[I]);
          Q = pn(a, c, Q);
        }
        for (; I < x.length - 1; I++) c.push(x[I]);
        return I < x.length && (Q = c.push(x[I])), Q;
      default:
        throw Error(s(390));
    }
  }
  function pn(a, c, g) {
    var x = g.boundary;
    if (x === null) return An(a, c, g);
    if (x.parentFlushed = !0, x.forceClientRender) return a.responseState.generateStaticMarkup || (x = x.errorDigest, c.push("<!--$!-->"), c.push("<template"), x && (c.push(' data-dgst="'), x = L(x), c.push(x), c.push('"')), c.push("></template>")), An(a, c, g), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
    if (0 < x.pendingTasks) {
      x.rootSegmentID = a.nextSegmentId++, 0 < x.completedSegments.length && a.partialBoundaries.push(x);
      var Q = a.responseState, I = Q.nextSuspenseID++;
      return Q = Q.boundaryPrefix + I.toString(16), x = x.id = Q, de(c, a.responseState, x), An(a, c, g), c.push("<!--/$-->");
    }
    if (x.byteSize > a.progressiveChunkSize) return x.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(x), de(c, a.responseState, x.id), An(a, c, g), c.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || c.push("<!--$-->"), g = x.completedSegments, g.length !== 1) throw Error(s(391));
    return pn(a, c, g[0]), a = a.responseState.generateStaticMarkup ? !0 : c.push("<!--/$-->"), a;
  }
  function In(a, c, g) {
    return Me(c, a.responseState, g.formatContext, g.id), pn(a, c, g), Ce(c, g.formatContext);
  }
  function wt(a, c, g) {
    for (var x = g.completedSegments, Q = 0; Q < x.length; Q++) Ut(a, c, g, x[Q]);
    if (x.length = 0, a = a.responseState, x = g.id, g = g.rootSegmentID, c.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? c.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, c.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), x === null) throw Error(s(395));
    return g = g.toString(16), c.push(x), c.push('","'), c.push(a.segmentPrefix), c.push(g), c.push('")<\/script>');
  }
  function Ut(a, c, g, x) {
    if (x.status === 2) return !0;
    var Q = x.id;
    if (Q === -1) {
      if ((x.id = g.rootSegmentID) === -1) throw Error(s(392));
      return In(a, c, x);
    }
    return In(a, c, x), a = a.responseState, c.push(a.startInlineScript), a.sentCompleteSegmentFunction ? c.push('$RS("') : (a.sentCompleteSegmentFunction = !0, c.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), c.push(a.segmentPrefix), Q = Q.toString(16), c.push(Q), c.push('","'), c.push(a.placeholderPrefix), c.push(Q), c.push('")<\/script>');
  }
  function At(a, c) {
    try {
      var g = a.completedRootSegment;
      if (g !== null && a.pendingRootTasks === 0) {
        pn(a, c, g), a.completedRootSegment = null;
        var x = a.responseState.bootstrapChunks;
        for (g = 0; g < x.length - 1; g++) c.push(x[g]);
        g < x.length && c.push(x[g]);
      }
      var Q = a.clientRenderedBoundaries, I;
      for (I = 0; I < Q.length; I++) {
        var N = Q[I];
        x = c;
        var V = a.responseState, ie = N.id, he = N.errorDigest, se = N.errorMessage, Be = N.errorComponentStack;
        if (x.push(V.startInlineScript), V.sentClientRenderFunction ? x.push('$RX("') : (V.sentClientRenderFunction = !0, x.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ie === null) throw Error(s(395));
        if (x.push(ie), x.push('"'), he || se || Be) {
          x.push(",");
          var lt = le(he || "");
          x.push(lt);
        }
        if (se || Be) {
          x.push(",");
          var st = le(se || "");
          x.push(st);
        }
        if (Be) {
          x.push(",");
          var ut = le(Be);
          x.push(ut);
        }
        if (!x.push(")<\/script>")) {
          a.destination = null, I++, Q.splice(0, I);
          return;
        }
      }
      Q.splice(0, I);
      var ln = a.completedBoundaries;
      for (I = 0; I < ln.length; I++) if (!wt(a, c, ln[I])) {
        a.destination = null, I++, ln.splice(0, I);
        return;
      }
      ln.splice(0, I);
      var zt = a.partialBoundaries;
      for (I = 0; I < zt.length; I++) {
        var Mn = zt[I];
        e: {
          Q = a, N = c;
          var sn = Mn.completedSegments;
          for (V = 0; V < sn.length; V++) if (!Ut(Q, N, Mn, sn[V])) {
            V++, sn.splice(0, V);
            var vn = !1;
            break e;
          }
          sn.splice(0, V), vn = !0;
        }
        if (!vn) {
          a.destination = null, I++, zt.splice(0, I);
          return;
        }
      }
      zt.splice(0, I);
      var Xt = a.completedBoundaries;
      for (I = 0; I < Xt.length; I++) if (!wt(a, c, Xt[I])) {
        a.destination = null, I++, Xt.splice(0, I);
        return;
      }
      Xt.splice(0, I);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && c.push(null);
    }
  }
  function Rn(a, c) {
    try {
      var g = a.abortableTasks;
      g.forEach(function(x) {
        return Tn(x, a, c);
      }), g.clear(), a.destination !== null && At(a, a.destination);
    } catch (x) {
      Ft(a, x), on(a, x);
    }
  }
  function qe() {
  }
  function pt(a, c, g, x) {
    var Q = !1, I = null, N = "", V = { push: function(he) {
      return he !== null && (N += he), !0;
    }, destroy: function(he) {
      Q = !0, I = he;
    } }, ie = !1;
    if (a = kn(a, fe(g, c ? c.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, qe, void 0, function() {
      ie = !0;
    }), it(a), Rn(a, x), a.status === 1) a.status = 2, V.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = V;
      try {
        At(a, V);
      } catch (he) {
        Ft(a, he), on(a, he);
      }
    }
    if (Q) throw I;
    if (!ie) throw Error(s(426));
    return N;
  }
  return Mo.renderToNodeStream = function() {
    throw Error(s(207));
  }, Mo.renderToStaticMarkup = function(a, c) {
    return pt(a, c, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Mo.renderToStaticNodeStream = function() {
    throw Error(s(208));
  }, Mo.renderToString = function(a, c) {
    return pt(a, c, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Mo.version = "18.3.1", Mo;
}
var yA = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl;
function tu() {
  if (Yl) return yA;
  Yl = 1;
  var f = B;
  function s(i) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, p = 1; p < arguments.length; p++) u += "&args[]=" + encodeURIComponent(arguments[p]);
    return "Minified React error #" + i + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var h = null, m = 0;
  function A(i, u) {
    if (u.length !== 0) if (512 < u.length) 0 < m && (i.enqueue(new Uint8Array(h.buffer, 0, m)), h = new Uint8Array(512), m = 0), i.enqueue(u);
    else {
      var p = h.length - m;
      p < u.length && (p === 0 ? i.enqueue(h) : (h.set(u.subarray(0, p), m), i.enqueue(h), u = u.subarray(p)), h = new Uint8Array(512), m = 0), h.set(u, m), m += u.length;
    }
  }
  function y(i, u) {
    return A(i, u), !0;
  }
  function P(i) {
    h && 0 < m && (i.enqueue(new Uint8Array(h.buffer, 0, m)), h = null, m = 0);
  }
  var E = new TextEncoder();
  function w(i) {
    return E.encode(i);
  }
  function C(i) {
    return E.encode(i);
  }
  function H(i, u) {
    typeof i.error == "function" ? i.error(u) : i.close();
  }
  var k = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, L = {};
  function _(i) {
    return k.call(L, i) ? !0 : k.call(U, i) ? !1 : F.test(i) ? L[i] = !0 : (U[i] = !0, !1);
  }
  function j(i, u, p, b, O, M, z) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = b, this.attributeNamespace = O, this.mustUseProperty = p, this.propertyName = i, this.type = u, this.sanitizeURL = M, this.removeEmptyString = z;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    T[i] = new j(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var u = i[0];
    T[u] = new j(u, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    T[i] = new j(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    T[i] = new j(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    T[i] = new j(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    T[i] = new j(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    T[i] = new j(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    T[i] = new j(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    T[i] = new j(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var K = /[\-:]([a-z])/g;
  function te(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var u = i.replace(
      K,
      te
    );
    T[u] = new j(u, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var u = i.replace(K, te);
    T[u] = new j(u, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var u = i.replace(K, te);
    T[u] = new j(u, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    T[i] = new j(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    T[i] = new j(i, 1, !1, i.toLowerCase(), null, !0, !0);
  });
  var X = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, G = ["Webkit", "ms", "Moz", "O"];
  Object.keys(X).forEach(function(i) {
    G.forEach(function(u) {
      u = u + i.charAt(0).toUpperCase() + i.substring(1), X[u] = X[i];
    });
  });
  var $ = /["'&<>]/;
  function Z(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var u = $.exec(i);
    if (u) {
      var p = "", b, O = 0;
      for (b = u.index; b < i.length; b++) {
        switch (i.charCodeAt(b)) {
          case 34:
            u = "&quot;";
            break;
          case 38:
            u = "&amp;";
            break;
          case 39:
            u = "&#x27;";
            break;
          case 60:
            u = "&lt;";
            break;
          case 62:
            u = "&gt;";
            break;
          default:
            continue;
        }
        O !== b && (p += i.substring(O, b)), O = b + 1, p += u;
      }
      i = O !== b ? p + i.substring(O, b) : p;
    }
    return i;
  }
  var re = /([A-Z])/g, ne = /^ms-/, ue = Array.isArray, ae = C("<script>"), ce = C("<\/script>"), ve = C('<script src="'), de = C('<script type="module" src="'), Me = C('" async=""><\/script>'), Ce = /(<\/|<)(s)(cript)/gi;
  function ee(i, u, p, b) {
    return "" + u + (p === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function le(i, u, p, b, O) {
    i = i === void 0 ? "" : i, u = u === void 0 ? ae : C('<script nonce="' + Z(u) + '">');
    var M = [];
    if (p !== void 0 && M.push(u, w(("" + p).replace(Ce, ee)), ce), b !== void 0) for (p = 0; p < b.length; p++) M.push(ve, w(Z(b[p])), Me);
    if (O !== void 0) for (b = 0; b < O.length; b++) M.push(de, w(Z(O[b])), Me);
    return { bootstrapChunks: M, startInlineScript: u, placeholderPrefix: C(i + "P:"), segmentPrefix: C(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function fe(i, u) {
    return { insertionMode: i, selectedValue: u };
  }
  function be(i) {
    return fe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(i, u, p) {
    switch (u) {
      case "select":
        return fe(1, p.value != null ? p.value : p.defaultValue);
      case "svg":
        return fe(2, null);
      case "math":
        return fe(3, null);
      case "foreignObject":
        return fe(1, null);
      case "table":
        return fe(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return fe(5, null);
      case "colgroup":
        return fe(7, null);
      case "tr":
        return fe(6, null);
    }
    return 4 <= i.insertionMode || i.insertionMode === 0 ? fe(1, null) : i;
  }
  var me = C("<!-- -->");
  function Oe(i, u, p, b) {
    return u === "" ? b : (b && i.push(me), i.push(w(Z(u))), !0);
  }
  var Se = /* @__PURE__ */ new Map(), Ae = C(' style="'), Le = C(":"), Zt = C(";");
  function Gt(i, u, p) {
    if (typeof p != "object") throw Error(s(62));
    u = !0;
    for (var b in p) if (k.call(p, b)) {
      var O = p[b];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (b.indexOf("--") === 0) {
          var M = w(Z(b));
          O = w(Z(("" + O).trim()));
        } else {
          M = b;
          var z = Se.get(M);
          z !== void 0 || (z = C(Z(M.replace(re, "-$1").toLowerCase().replace(ne, "-ms-"))), Se.set(M, z)), M = z, O = typeof O == "number" ? O === 0 || k.call(X, b) ? w("" + O) : w(O + "px") : w(Z(("" + O).trim()));
        }
        u ? (u = !1, i.push(Ae, M, Le, O)) : i.push(Zt, M, Le, O);
      }
    }
    u || i.push(xe);
  }
  var tt = C(" "), yt = C('="'), xe = C('"'), Ue = C('=""');
  function Pe(i, u, p, b) {
    switch (p) {
      case "style":
        Gt(i, u, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
      if (u = T.hasOwnProperty(p) ? T[p] : null, u !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (p = w(u.attributeName), u.type) {
          case 3:
            b && i.push(tt, p, Ue);
            break;
          case 4:
            b === !0 ? i.push(tt, p, Ue) : b !== !1 && i.push(tt, p, yt, w(Z(b)), xe);
            break;
          case 5:
            isNaN(b) || i.push(tt, p, yt, w(Z(b)), xe);
            break;
          case 6:
            !isNaN(b) && 1 <= b && i.push(tt, p, yt, w(Z(b)), xe);
            break;
          default:
            u.sanitizeURL && (b = "" + b), i.push(tt, p, yt, w(Z(b)), xe);
        }
      } else if (_(p)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = p.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        i.push(tt, w(p), yt, w(Z(b)), xe);
      }
    }
  }
  var Ie = C(">"), $e = C("/>");
  function nt(i, u, p) {
    if (u != null) {
      if (p != null) throw Error(s(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(s(61));
      u = u.__html, u != null && i.push(w("" + u));
    }
  }
  function We(i) {
    var u = "";
    return f.Children.forEach(i, function(p) {
      p != null && (u += p);
    }), u;
  }
  var Je = C(' selected=""');
  function dt(i, u, p, b) {
    i.push(et(p));
    var O = p = null, M;
    for (M in u) if (k.call(u, M)) {
      var z = u[M];
      if (z != null) switch (M) {
        case "children":
          p = z;
          break;
        case "dangerouslySetInnerHTML":
          O = z;
          break;
        default:
          Pe(i, b, M, z);
      }
    }
    return i.push(Ie), nt(i, O, p), typeof p == "string" ? (i.push(w(Z(p))), null) : p;
  }
  var Rt = C(`
`), gr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, St = /* @__PURE__ */ new Map();
  function et(i) {
    var u = St.get(i);
    if (u === void 0) {
      if (!gr.test(i)) throw Error(s(65, i));
      u = C("<" + i), St.set(i, u);
    }
    return u;
  }
  var Xe = C("<!DOCTYPE html>");
  function Gn(i, u, p, b, O) {
    switch (u) {
      case "select":
        i.push(et("select"));
        var M = null, z = null;
        for (ye in p) if (k.call(p, ye)) {
          var J = p[ye];
          if (J != null) switch (ye) {
            case "children":
              M = J;
              break;
            case "dangerouslySetInnerHTML":
              z = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              Pe(i, b, ye, J);
          }
        }
        return i.push(Ie), nt(i, z, M), M;
      case "option":
        z = O.selectedValue, i.push(et("option"));
        var pe = J = null, we = null, ye = null;
        for (M in p) if (k.call(p, M)) {
          var je = p[M];
          if (je != null) switch (M) {
            case "children":
              J = je;
              break;
            case "selected":
              we = je;
              break;
            case "dangerouslySetInnerHTML":
              ye = je;
              break;
            case "value":
              pe = je;
            default:
              Pe(i, b, M, je);
          }
        }
        if (z != null) if (p = pe !== null ? "" + pe : We(J), ue(z)) {
          for (b = 0; b < z.length; b++)
            if ("" + z[b] === p) {
              i.push(Je);
              break;
            }
        } else "" + z === p && i.push(Je);
        else we && i.push(Je);
        return i.push(Ie), nt(i, ye, J), J;
      case "textarea":
        i.push(et("textarea")), ye = z = M = null;
        for (J in p) if (k.call(p, J) && (pe = p[J], pe != null)) switch (J) {
          case "children":
            ye = pe;
            break;
          case "value":
            M = pe;
            break;
          case "defaultValue":
            z = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(91));
          default:
            Pe(i, b, J, pe);
        }
        if (M === null && z !== null && (M = z), i.push(Ie), ye != null) {
          if (M != null) throw Error(s(92));
          if (ue(ye) && 1 < ye.length) throw Error(s(93));
          M = "" + ye;
        }
        return typeof M == "string" && M[0] === `
` && i.push(Rt), M !== null && i.push(w(Z("" + M))), null;
      case "input":
        i.push(et("input")), pe = ye = J = M = null;
        for (z in p) if (k.call(p, z) && (we = p[z], we != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, "input"));
          case "defaultChecked":
            pe = we;
            break;
          case "defaultValue":
            J = we;
            break;
          case "checked":
            ye = we;
            break;
          case "value":
            M = we;
            break;
          default:
            Pe(i, b, z, we);
        }
        return ye !== null ? Pe(
          i,
          b,
          "checked",
          ye
        ) : pe !== null && Pe(i, b, "checked", pe), M !== null ? Pe(i, b, "value", M) : J !== null && Pe(i, b, "value", J), i.push($e), null;
      case "menuitem":
        i.push(et("menuitem"));
        for (var gt in p) if (k.call(p, gt) && (M = p[gt], M != null)) switch (gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(400));
          default:
            Pe(i, b, gt, M);
        }
        return i.push(Ie), null;
      case "title":
        i.push(et("title")), M = null;
        for (je in p) if (k.call(p, je) && (z = p[je], z != null)) switch (je) {
          case "children":
            M = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(s(434));
          default:
            Pe(i, b, je, z);
        }
        return i.push(Ie), M;
      case "listing":
      case "pre":
        i.push(et(u)), z = M = null;
        for (pe in p) if (k.call(p, pe) && (J = p[pe], J != null)) switch (pe) {
          case "children":
            M = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          default:
            Pe(i, b, pe, J);
        }
        if (i.push(Ie), z != null) {
          if (M != null) throw Error(s(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(s(61));
          p = z.__html, p != null && (typeof p == "string" && 0 < p.length && p[0] === `
` ? i.push(Rt, w(p)) : i.push(w("" + p)));
        }
        return typeof M == "string" && M[0] === `
` && i.push(Rt), M;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        i.push(et(u));
        for (var Ct in p) if (k.call(p, Ct) && (M = p[Ct], M != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(s(399, u));
          default:
            Pe(i, b, Ct, M);
        }
        return i.push($e), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return dt(i, p, u, b);
      case "html":
        return O.insertionMode === 0 && i.push(Xe), dt(i, p, u, b);
      default:
        if (u.indexOf("-") === -1 && typeof p.is != "string") return dt(i, p, u, b);
        i.push(et(u)), z = M = null;
        for (we in p) if (k.call(p, we) && (J = p[we], J != null)) switch (we) {
          case "children":
            M = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          case "style":
            Gt(i, b, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            _(we) && typeof J != "function" && typeof J != "symbol" && i.push(tt, w(we), yt, w(Z(J)), xe);
        }
        return i.push(Ie), nt(i, z, M), M;
    }
  }
  var _n = C("</"), Yn = C(">"), Ze = C('<template id="'), Xn = C('"></template>'), mr = C("<!--$-->"), yr = C('<!--$?--><template id="'), Vn = C('"></template>'), Cn = C("<!--$!-->"), Kr = C("<!--/$-->"), Jn = C("<template"), $t = C('"'), Kn = C(' data-dgst="');
  C(' data-msg="'), C(' data-stck="');
  var wr = C("></template>");
  function at(i, u, p) {
    if (A(i, yr), p === null) throw Error(s(395));
    return A(i, p), y(i, Vn);
  }
  var Mt = C('<div hidden id="'), qt = C('">'), Re = C("</div>"), en = C('<svg aria-hidden="true" style="display:none" id="'), Dn = C('">'), hn = C("</svg>"), Qt = C('<math aria-hidden="true" style="display:none" id="'), Pn = C('">'), _t = C("</math>"), Ke = C('<table hidden id="'), $n = C('">'), qn = C("</table>"), br = C('<table hidden><tbody id="'), Ge = C('">'), er = C("</tbody></table>"), $r = C('<table hidden><tr id="'), qr = C('">'), Ot = C("</tr></table>"), tr = C('<table hidden><colgroup id="'), Bn = C('">'), tn = C("</colgroup></table>");
  function ft(i, u, p, b) {
    switch (p.insertionMode) {
      case 0:
      case 1:
        return A(i, Mt), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, qt);
      case 2:
        return A(i, en), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, Dn);
      case 3:
        return A(i, Qt), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, Pn);
      case 4:
        return A(i, Ke), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, $n);
      case 5:
        return A(i, br), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, Ge);
      case 6:
        return A(i, $r), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, qr);
      case 7:
        return A(
          i,
          tr
        ), A(i, u.segmentPrefix), A(i, w(b.toString(16))), y(i, Bn);
      default:
        throw Error(s(397));
    }
  }
  function jt(i, u) {
    switch (u.insertionMode) {
      case 0:
      case 1:
        return y(i, Re);
      case 2:
        return y(i, hn);
      case 3:
        return y(i, _t);
      case 4:
        return y(i, qn);
      case 5:
        return y(i, er);
      case 6:
        return y(i, Ot);
      case 7:
        return y(i, tn);
      default:
        throw Error(s(397));
    }
  }
  var kn = C('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), nn = C('$RS("'), rn = C('","'), Ft = C('")<\/script>'), on = C('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), ht = C('$RC("'), Sr = C('","'), xr = C('")<\/script>'), Yt = C('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), _e = C('$RX("'), Lt = C('"'), Ht = C(")<\/script>"), an = C(","), Tn = /[<\u2028\u2029]/g;
  function xt(i) {
    return JSON.stringify(i).replace(Tn, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Nt = Object.assign, it = Symbol.for("react.element"), An = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), In = Symbol.for("react.strict_mode"), wt = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), At = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), qe = Symbol.for("react.suspense"), pt = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), g = Symbol.for("react.scope"), x = Symbol.for("react.debug_trace_mode"), Q = Symbol.for("react.legacy_hidden"), I = Symbol.for("react.default_value"), N = Symbol.iterator;
  function V(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case pn:
        return "Fragment";
      case An:
        return "Portal";
      case wt:
        return "Profiler";
      case In:
        return "StrictMode";
      case qe:
        return "Suspense";
      case pt:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case At:
        return (i.displayName || "Context") + ".Consumer";
      case Ut:
        return (i._context.displayName || "Context") + ".Provider";
      case Rn:
        var u = i.render;
        return i = i.displayName, i || (i = u.displayName || u.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return u = i.displayName || null, u !== null ? u : V(i.type) || "Memo";
      case c:
        u = i._payload, i = i._init;
        try {
          return V(i(u));
        } catch {
        }
    }
    return null;
  }
  var ie = {};
  function he(i, u) {
    if (i = i.contextTypes, !i) return ie;
    var p = {}, b;
    for (b in i) p[b] = u[b];
    return p;
  }
  var se = null;
  function Be(i, u) {
    if (i !== u) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var p = u.parent;
      if (i === null) {
        if (p !== null) throw Error(s(401));
      } else {
        if (p === null) throw Error(s(401));
        Be(i, p);
      }
      u.context._currentValue = u.value;
    }
  }
  function lt(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && lt(i);
  }
  function st(i) {
    var u = i.parent;
    u !== null && st(u), i.context._currentValue = i.value;
  }
  function ut(i, u) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(s(402));
    i.depth === u.depth ? Be(i, u) : ut(i, u);
  }
  function ln(i, u) {
    var p = u.parent;
    if (p === null) throw Error(s(402));
    i.depth === p.depth ? Be(i, p) : ln(i, p), u.context._currentValue = u.value;
  }
  function zt(i) {
    var u = se;
    u !== i && (u === null ? st(i) : i === null ? lt(u) : u.depth === i.depth ? Be(u, i) : u.depth > i.depth ? ut(u, i) : ln(u, i), se = i);
  }
  var Mn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, u) {
    i = i._reactInternals, i.queue !== null && i.queue.push(u);
  }, enqueueReplaceState: function(i, u) {
    i = i._reactInternals, i.replace = !0, i.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function sn(i, u, p, b) {
    var O = i.state !== void 0 ? i.state : null;
    i.updater = Mn, i.props = p, i.state = O;
    var M = { queue: [], replace: !1 };
    i._reactInternals = M;
    var z = u.contextType;
    if (i.context = typeof z == "object" && z !== null ? z._currentValue : b, z = u.getDerivedStateFromProps, typeof z == "function" && (z = z(p, O), O = z == null ? O : Nt({}, O, z), i.state = O), typeof u.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && Mn.enqueueReplaceState(i, i.state, null), M.queue !== null && 0 < M.queue.length) if (u = M.queue, z = M.replace, M.queue = null, M.replace = !1, z && u.length === 1) i.state = u[0];
    else {
      for (M = z ? u[0] : i.state, O = !0, z = z ? 1 : 0; z < u.length; z++) {
        var J = u[z];
        J = typeof J == "function" ? J.call(i, M, p, b) : J, J != null && (O ? (O = !1, M = Nt({}, M, J)) : Nt(M, J));
      }
      i.state = M;
    }
    else M.queue = null;
  }
  var vn = { id: 1, overflow: "" };
  function Xt(i, u, p) {
    var b = i.id;
    i = i.overflow;
    var O = 32 - gn(b) - 1;
    b &= ~(1 << O), p += 1;
    var M = 32 - gn(u) + O;
    if (30 < M) {
      var z = O - O % 5;
      return M = (b & (1 << z) - 1).toString(32), b >>= z, O -= z, { id: 1 << 32 - gn(u) + O | p << O | b, overflow: M + i };
    }
    return { id: 1 << M | p << O | b, overflow: i };
  }
  var gn = Math.clz32 ? Math.clz32 : Er, Na = Math.log, Ua = Math.LN2;
  function Er(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Na(i) / Ua | 0) | 0;
  }
  function Wt(i, u) {
    return i === u && (i !== 0 || 1 / i === 1 / u) || i !== i && u !== u;
  }
  var za = typeof Object.is == "function" ? Object.is : Wt, Vt = null, eo = null, Cr = null, Qe = null, mn = !1, Dr = !1, yn = 0, un = null, Pr = 0;
  function cn() {
    if (Vt === null) throw Error(s(321));
    return Vt;
  }
  function Et() {
    if (0 < Pr) throw Error(s(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function to() {
    return Qe === null ? Cr === null ? (mn = !1, Cr = Qe = Et()) : (mn = !0, Qe = Cr) : Qe.next === null ? (mn = !1, Qe = Qe.next = Et()) : (mn = !0, Qe = Qe.next), Qe;
  }
  function nr() {
    eo = Vt = null, Dr = !1, Cr = null, Pr = 0, Qe = un = null;
  }
  function Ho(i, u) {
    return typeof u == "function" ? u(i) : u;
  }
  function Br(i, u, p) {
    if (Vt = cn(), Qe = to(), mn) {
      var b = Qe.queue;
      if (u = b.dispatch, un !== null && (p = un.get(b), p !== void 0)) {
        un.delete(b), b = Qe.memoizedState;
        do
          b = i(b, p.action), p = p.next;
        while (p !== null);
        return Qe.memoizedState = b, [b, u];
      }
      return [Qe.memoizedState, u];
    }
    return i = i === Ho ? typeof u == "function" ? u() : u : p !== void 0 ? p(u) : u, Qe.memoizedState = i, i = Qe.queue = { last: null, dispatch: null }, i = i.dispatch = Wa.bind(null, Vt, i), [Qe.memoizedState, i];
  }
  function No(i, u) {
    if (Vt = cn(), Qe = to(), u = u === void 0 ? null : u, Qe !== null) {
      var p = Qe.memoizedState;
      if (p !== null && u !== null) {
        var b = p[1];
        e: if (b === null) b = !1;
        else {
          for (var O = 0; O < b.length && O < u.length; O++) if (!za(u[O], b[O])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return p[0];
      }
    }
    return i = i(), Qe.memoizedState = [i, u], i;
  }
  function Wa(i, u, p) {
    if (25 <= Pr) throw Error(s(301));
    if (i === Vt) if (Dr = !0, i = { action: p, next: null }, un === null && (un = /* @__PURE__ */ new Map()), p = un.get(u), p === void 0) un.set(u, i);
    else {
      for (u = p; u.next !== null; ) u = u.next;
      u.next = i;
    }
  }
  function Za() {
    throw Error(s(394));
  }
  function kr() {
  }
  var Uo = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return cn(), i._currentValue;
  }, useMemo: No, useReducer: Br, useRef: function(i) {
    Vt = cn(), Qe = to();
    var u = Qe.memoizedState;
    return u === null ? (i = { current: i }, Qe.memoizedState = i) : u;
  }, useState: function(i) {
    return Br(Ho, i);
  }, useInsertionEffect: kr, useLayoutEffect: function() {
  }, useCallback: function(i, u) {
    return No(function() {
      return i;
    }, u);
  }, useImperativeHandle: kr, useEffect: kr, useDebugValue: kr, useDeferredValue: function(i) {
    return cn(), i;
  }, useTransition: function() {
    return cn(), [!1, Za];
  }, useId: function() {
    var i = eo.treeContext, u = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - gn(i) - 1)).toString(32) + u;
    var p = rr;
    if (p === null) throw Error(s(404));
    return u = yn++, i = ":" + p.idPrefix + "R" + i, 0 < u && (i += "H" + u.toString(32)), i + ":";
  }, useMutableSource: function(i, u) {
    return cn(), u(i._source);
  }, useSyncExternalStore: function(i, u, p) {
    if (p === void 0) throw Error(s(407));
    return p();
  } }, rr = null, no = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ga(i) {
    return console.error(i), null;
  }
  function Qn() {
  }
  function ro(i, u, p, b, O, M, z, J, pe) {
    var we = [], ye = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ye, pingedTasks: we, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? Ga : O, onAllReady: M === void 0 ? Qn : M, onShellReady: z === void 0 ? Qn : z, onShellError: J === void 0 ? Qn : J, onFatalError: pe === void 0 ? Qn : pe }, p = On(u, 0, null, p, !1, !1), p.parentFlushed = !0, i = oo(u, i, null, p, ye, ie, null, vn), we.push(i), u;
  }
  function oo(i, u, p, b, O, M, z, J) {
    i.allPendingTasks++, p === null ? i.pendingRootTasks++ : p.pendingTasks++;
    var pe = { node: u, ping: function() {
      var we = i.pingedTasks;
      we.push(pe), we.length === 1 && Xo(i);
    }, blockedBoundary: p, blockedSegment: b, abortSet: O, legacyContext: M, context: z, treeContext: J };
    return O.add(pe), pe;
  }
  function On(i, u, p, b, O, M) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: p, lastPushedText: O, textEmbedded: M };
  }
  function or(i, u) {
    if (i = i.onError(u), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Tr(i, u) {
    var p = i.onShellError;
    p(u), p = i.onFatalError, p(u), i.destination !== null ? (i.status = 2, H(i.destination, u)) : (i.status = 1, i.fatalError = u);
  }
  function zo(i, u, p, b, O) {
    for (Vt = {}, eo = u, yn = 0, i = p(b, O); Dr; ) Dr = !1, yn = 0, Pr += 1, Qe = null, i = p(b, O);
    return nr(), i;
  }
  function Wo(i, u, p, b) {
    var O = p.render(), M = b.childContextTypes;
    if (M != null) {
      var z = u.legacyContext;
      if (typeof p.getChildContext != "function") b = z;
      else {
        p = p.getChildContext();
        for (var J in p) if (!(J in M)) throw Error(s(108, V(b) || "Unknown", J));
        b = Nt({}, z, p);
      }
      u.legacyContext = b, vt(i, u, O), u.legacyContext = z;
    } else vt(i, u, O);
  }
  function Zo(i, u) {
    if (i && i.defaultProps) {
      u = Nt({}, u), i = i.defaultProps;
      for (var p in i) u[p] === void 0 && (u[p] = i[p]);
      return u;
    }
    return u;
  }
  function Ir(i, u, p, b, O) {
    if (typeof p == "function") if (p.prototype && p.prototype.isReactComponent) {
      O = he(p, u.legacyContext);
      var M = p.contextType;
      M = new p(b, typeof M == "object" && M !== null ? M._currentValue : O), sn(M, p, b, O), Wo(i, u, M, p);
    } else {
      M = he(p, u.legacyContext), O = zo(i, u, p, b, M);
      var z = yn !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) sn(O, p, b, M), Wo(i, u, O, p);
      else if (z) {
        b = u.treeContext, u.treeContext = Xt(b, 1, 0);
        try {
          vt(i, u, O);
        } finally {
          u.treeContext = b;
        }
      } else vt(i, u, O);
    }
    else if (typeof p == "string") {
      switch (O = u.blockedSegment, M = Gn(O.chunks, p, b, i.responseState, O.formatContext), O.lastPushedText = !1, z = O.formatContext, O.formatContext = oe(z, p, b), Rr(i, u, M), O.formatContext = z, p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          O.chunks.push(_n, w(p), Yn);
      }
      O.lastPushedText = !1;
    } else {
      switch (p) {
        case Q:
        case x:
        case In:
        case wt:
        case pn:
          vt(i, u, b.children);
          return;
        case pt:
          vt(i, u, b.children);
          return;
        case g:
          throw Error(s(343));
        case qe:
          e: {
            p = u.blockedBoundary, O = u.blockedSegment, M = b.fallback, b = b.children, z = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, pe = On(i, O.chunks.length, J, O.formatContext, !1, !1);
            O.children.push(pe), O.lastPushedText = !1;
            var we = On(i, 0, null, O.formatContext, !1, !1);
            we.parentFlushed = !0, u.blockedBoundary = J, u.blockedSegment = we;
            try {
              if (Rr(
                i,
                u,
                b
              ), we.lastPushedText && we.textEmbedded && we.chunks.push(me), we.status = 1, Mr(J, we), J.pendingTasks === 0) break e;
            } catch (ye) {
              we.status = 4, J.forceClientRender = !0, J.errorDigest = or(i, ye);
            } finally {
              u.blockedBoundary = p, u.blockedSegment = O;
            }
            u = oo(i, M, p, pe, z, u.legacyContext, u.context, u.treeContext), i.pingedTasks.push(u);
          }
          return;
      }
      if (typeof p == "object" && p !== null) switch (p.$$typeof) {
        case Rn:
          if (b = zo(i, u, p.render, b, O), yn !== 0) {
            p = u.treeContext, u.treeContext = Xt(p, 1, 0);
            try {
              vt(i, u, b);
            } finally {
              u.treeContext = p;
            }
          } else vt(i, u, b);
          return;
        case a:
          p = p.type, b = Zo(p, b), Ir(i, u, p, b, O);
          return;
        case Ut:
          if (O = b.children, p = p._context, b = b.value, M = p._currentValue, p._currentValue = b, z = se, se = b = { parent: z, depth: z === null ? 0 : z.depth + 1, context: p, parentValue: M, value: b }, u.context = b, vt(i, u, O), i = se, i === null) throw Error(s(403));
          b = i.parentValue, i.context._currentValue = b === I ? i.context._defaultValue : b, i = se = i.parent, u.context = i;
          return;
        case At:
          b = b.children, b = b(p._currentValue), vt(i, u, b);
          return;
        case c:
          O = p._init, p = O(p._payload), b = Zo(p, b), Ir(i, u, p, b, void 0);
          return;
      }
      throw Error(s(
        130,
        p == null ? p : typeof p,
        ""
      ));
    }
  }
  function vt(i, u, p) {
    if (u.node = p, typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case it:
          Ir(i, u, p.type, p.props, p.ref);
          return;
        case An:
          throw Error(s(257));
        case c:
          var b = p._init;
          p = b(p._payload), vt(i, u, p);
          return;
      }
      if (ue(p)) {
        Go(i, u, p);
        return;
      }
      if (p === null || typeof p != "object" ? b = null : (b = N && p[N] || p["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(p))) {
        if (p = b.next(), !p.done) {
          var O = [];
          do
            O.push(p.value), p = b.next();
          while (!p.done);
          Go(i, u, O);
        }
        return;
      }
      throw i = Object.prototype.toString.call(p), Error(s(31, i === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : i));
    }
    typeof p == "string" ? (b = u.blockedSegment, b.lastPushedText = Oe(u.blockedSegment.chunks, p, i.responseState, b.lastPushedText)) : typeof p == "number" && (b = u.blockedSegment, b.lastPushedText = Oe(u.blockedSegment.chunks, "" + p, i.responseState, b.lastPushedText));
  }
  function Go(i, u, p) {
    for (var b = p.length, O = 0; O < b; O++) {
      var M = u.treeContext;
      u.treeContext = Xt(M, b, O);
      try {
        Rr(i, u, p[O]);
      } finally {
        u.treeContext = M;
      }
    }
  }
  function Rr(i, u, p) {
    var b = u.blockedSegment.formatContext, O = u.legacyContext, M = u.context;
    try {
      return vt(i, u, p);
    } catch (pe) {
      if (nr(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        p = pe;
        var z = u.blockedSegment, J = On(i, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(J), z.lastPushedText = !1, i = oo(i, u.node, u.blockedBoundary, J, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, p.then(i, i), u.blockedSegment.formatContext = b, u.legacyContext = O, u.context = M, zt(M);
      } else throw u.blockedSegment.formatContext = b, u.legacyContext = O, u.context = M, zt(M), pe;
    }
  }
  function _a(i) {
    var u = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, Yo(this, u, i);
  }
  function _o(i, u, p) {
    var b = i.blockedBoundary;
    i.blockedSegment.status = 3, b === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.close())) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, i = p === void 0 ? Error(s(432)) : p, b.errorDigest = u.onError(i), b.parentFlushed && u.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(O) {
      return _o(O, u, p);
    }), b.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (b = u.onAllReady, b()));
  }
  function Mr(i, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var p = u.children[0];
      p.id = u.id, p.parentFlushed = !0, p.status === 1 && Mr(i, p);
    } else i.completedSegments.push(u);
  }
  function Yo(i, u, p) {
    if (u === null) {
      if (p.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(s(389));
        i.completedRootSegment = p;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Qn, u = i.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (p.parentFlushed && p.status === 1 && Mr(u, p), u.parentFlushed && i.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(_a, i), u.fallbackAbortableTasks.clear()) : p.parentFlushed && p.status === 1 && (Mr(u, p), u.completedSegments.length === 1 && u.parentFlushed && i.partialBoundaries.push(u)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Xo(i) {
    if (i.status !== 2) {
      var u = se, p = no.current;
      no.current = Uo;
      var b = rr;
      rr = i.responseState;
      try {
        var O = i.pingedTasks, M;
        for (M = 0; M < O.length; M++) {
          var z = O[M], J = i, pe = z.blockedSegment;
          if (pe.status === 0) {
            zt(z.context);
            try {
              vt(J, z, z.node), pe.lastPushedText && pe.textEmbedded && pe.chunks.push(me), z.abortSet.delete(z), pe.status = 1, Yo(J, z.blockedBoundary, pe);
            } catch (Dt) {
              if (nr(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var we = z.ping;
                Dt.then(we, we);
              } else {
                z.abortSet.delete(z), pe.status = 4;
                var ye = z.blockedBoundary, je = Dt, gt = or(J, je);
                if (ye === null ? Tr(J, je) : (ye.pendingTasks--, ye.forceClientRender || (ye.forceClientRender = !0, ye.errorDigest = gt, ye.parentFlushed && J.clientRenderedBoundaries.push(ye))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Ct = J.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, M), i.destination !== null && ao(i, i.destination);
      } catch (Dt) {
        or(i, Dt), Tr(i, Dt);
      } finally {
        rr = b, no.current = p, p === Uo && zt(u);
      }
    }
  }
  function Qr(i, u, p) {
    switch (p.parentFlushed = !0, p.status) {
      case 0:
        var b = p.id = i.nextSegmentId++;
        return p.lastPushedText = !1, p.textEmbedded = !1, i = i.responseState, A(u, Ze), A(u, i.placeholderPrefix), i = w(b.toString(16)), A(u, i), y(u, Xn);
      case 1:
        p.status = 2;
        var O = !0;
        b = p.chunks;
        var M = 0;
        p = p.children;
        for (var z = 0; z < p.length; z++) {
          for (O = p[z]; M < O.index; M++) A(u, b[M]);
          O = Or(i, u, O);
        }
        for (; M < b.length - 1; M++) A(u, b[M]);
        return M < b.length && (O = y(u, b[M])), O;
      default:
        throw Error(s(390));
    }
  }
  function Or(i, u, p) {
    var b = p.boundary;
    if (b === null) return Qr(i, u, p);
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, y(u, Cn), A(u, Jn), b && (A(u, Kn), A(u, w(Z(b))), A(u, $t)), y(u, wr), Qr(i, u, p);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = i.nextSegmentId++, 0 < b.completedSegments.length && i.partialBoundaries.push(b);
      var O = i.responseState, M = O.nextSuspenseID++;
      O = C(O.boundaryPrefix + M.toString(16)), b = b.id = O, at(u, i.responseState, b), Qr(i, u, p);
    } else if (b.byteSize > i.progressiveChunkSize) b.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(b), at(u, i.responseState, b.id), Qr(i, u, p);
    else {
      if (y(u, mr), p = b.completedSegments, p.length !== 1) throw Error(s(391));
      Or(i, u, p[0]);
    }
    return y(u, Kr);
  }
  function Vo(i, u, p) {
    return ft(u, i.responseState, p.formatContext, p.id), Or(i, u, p), jt(u, p.formatContext);
  }
  function Jo(i, u, p) {
    for (var b = p.completedSegments, O = 0; O < b.length; O++) Ko(i, u, p, b[O]);
    if (b.length = 0, i = i.responseState, b = p.id, p = p.rootSegmentID, A(u, i.startInlineScript), i.sentCompleteBoundaryFunction ? A(u, ht) : (i.sentCompleteBoundaryFunction = !0, A(u, on)), b === null) throw Error(s(395));
    return p = w(p.toString(16)), A(u, b), A(u, Sr), A(u, i.segmentPrefix), A(u, p), y(u, xr);
  }
  function Ko(i, u, p, b) {
    if (b.status === 2) return !0;
    var O = b.id;
    if (O === -1) {
      if ((b.id = p.rootSegmentID) === -1) throw Error(s(392));
      return Vo(i, u, b);
    }
    return Vo(i, u, b), i = i.responseState, A(u, i.startInlineScript), i.sentCompleteSegmentFunction ? A(u, nn) : (i.sentCompleteSegmentFunction = !0, A(u, kn)), A(u, i.segmentPrefix), O = w(O.toString(16)), A(u, O), A(u, rn), A(u, i.placeholderPrefix), A(u, O), y(u, Ft);
  }
  function ao(i, u) {
    h = new Uint8Array(512), m = 0;
    try {
      var p = i.completedRootSegment;
      if (p !== null && i.pendingRootTasks === 0) {
        Or(i, u, p), i.completedRootSegment = null;
        var b = i.responseState.bootstrapChunks;
        for (p = 0; p < b.length - 1; p++) A(u, b[p]);
        p < b.length && y(u, b[p]);
      }
      var O = i.clientRenderedBoundaries, M;
      for (M = 0; M < O.length; M++) {
        var z = O[M];
        b = u;
        var J = i.responseState, pe = z.id, we = z.errorDigest, ye = z.errorMessage, je = z.errorComponentStack;
        if (A(b, J.startInlineScript), J.sentClientRenderFunction ? A(b, _e) : (J.sentClientRenderFunction = !0, A(
          b,
          Yt
        )), pe === null) throw Error(s(395));
        A(b, pe), A(b, Lt), (we || ye || je) && (A(b, an), A(b, w(xt(we || "")))), (ye || je) && (A(b, an), A(b, w(xt(ye || "")))), je && (A(b, an), A(b, w(xt(je)))), y(b, Ht);
      }
      O.splice(0, M);
      var gt = i.completedBoundaries;
      for (M = 0; M < gt.length; M++) Jo(i, u, gt[M]);
      gt.splice(0, M), P(u), h = new Uint8Array(512), m = 0;
      var Ct = i.partialBoundaries;
      for (M = 0; M < Ct.length; M++) {
        var Dt = Ct[M];
        e: {
          O = i, z = u;
          var jr = Dt.completedSegments;
          for (J = 0; J < jr.length; J++) if (!Ko(
            O,
            z,
            Dt,
            jr[J]
          )) {
            J++, jr.splice(0, J);
            var qo = !1;
            break e;
          }
          jr.splice(0, J), qo = !0;
        }
        if (!qo) {
          i.destination = null, M++, Ct.splice(0, M);
          return;
        }
      }
      Ct.splice(0, M);
      var ar = i.completedBoundaries;
      for (M = 0; M < ar.length; M++) Jo(i, u, ar[M]);
      ar.splice(0, M);
    } finally {
      P(u), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && u.close();
    }
  }
  function $o(i, u) {
    try {
      var p = i.abortableTasks;
      p.forEach(function(b) {
        return _o(b, i, u);
      }), p.clear(), i.destination !== null && ao(i, i.destination);
    } catch (b) {
      or(i, b), Tr(i, b);
    }
  }
  return yA.renderToReadableStream = function(i, u) {
    return new Promise(function(p, b) {
      var O, M, z = new Promise(function(ye, je) {
        M = ye, O = je;
      }), J = ro(i, le(u ? u.identifierPrefix : void 0, u ? u.nonce : void 0, u ? u.bootstrapScriptContent : void 0, u ? u.bootstrapScripts : void 0, u ? u.bootstrapModules : void 0), be(u ? u.namespaceURI : void 0), u ? u.progressiveChunkSize : void 0, u ? u.onError : void 0, M, function() {
        var ye = new ReadableStream({ type: "bytes", pull: function(je) {
          if (J.status === 1) J.status = 2, H(je, J.fatalError);
          else if (J.status !== 2 && J.destination === null) {
            J.destination = je;
            try {
              ao(J, je);
            } catch (gt) {
              or(J, gt), Tr(J, gt);
            }
          }
        }, cancel: function() {
          $o(J);
        } }, { highWaterMark: 0 });
        ye.allReady = z, p(ye);
      }, function(ye) {
        z.catch(function() {
        }), b(ye);
      }, O);
      if (u && u.signal) {
        var pe = u.signal, we = function() {
          $o(J, pe.reason), pe.removeEventListener("abort", we);
        };
        pe.addEventListener("abort", we);
      }
      Xo(J);
    });
  }, yA.version = "18.3.1", yA;
}
var Qo = {}, Xl;
function nu() {
  return Xl || (Xl = 1, Ml.env.NODE_ENV !== "production" && function() {
    var f = B, s = "18.3.1", h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        y("warn", e, n);
      }
    }
    function A(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        y("error", e, n);
      }
    }
    function y(e, t, n) {
      {
        var o = h.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", n = n.concat([l]));
        var d = n.map(function(v) {
          return String(v);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    function P(e) {
      e();
    }
    function E(e) {
    }
    function w(e, t) {
      C(e, t);
    }
    function C(e, t) {
      return e.push(t);
    }
    function H(e) {
    }
    function k(e) {
      e.push(null);
    }
    function F(e) {
      return e;
    }
    function U(e) {
      return e;
    }
    function L(e, t) {
      e.destroy(t);
    }
    function _(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function j(e) {
      try {
        return T(e), !1;
      } catch {
        return !0;
      }
    }
    function T(e) {
      return "" + e;
    }
    function K(e, t) {
      if (j(e))
        return A("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), T(e);
    }
    function te(e, t) {
      if (j(e))
        return A("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), T(e);
    }
    function X(e) {
      if (j(e))
        return A("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(e)), T(e);
    }
    var G = Object.prototype.hasOwnProperty, $ = 0, Z = 1, re = 2, ne = 3, ue = 4, ae = 5, ce = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + ve + "][" + de + "]*$"), Ce = {}, ee = {};
    function le(e) {
      return G.call(ee, e) ? !0 : G.call(Ce, e) ? !1 : Me.test(e) ? (ee[e] = !0, !0) : (Ce[e] = !0, A("Invalid attribute name: `%s`", e), !1);
    }
    function fe(e, t, n, o) {
      if (n !== null && n.type === $)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (n !== null)
            return !n.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function be(e) {
      return me.hasOwnProperty(e) ? me[e] : null;
    }
    function oe(e, t, n, o, l, d, v) {
      this.acceptsBooleans = t === re || t === ne || t === ue, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = v;
    }
    var me = {}, Oe = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Oe.forEach(function(e) {
      me[e] = new oe(
        e,
        $,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      me[t] = new oe(
        t,
        Z,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      me[e] = new oe(
        e,
        re,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      me[e] = new oe(
        e,
        re,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      me[e] = new oe(
        e,
        ne,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new oe(
        e,
        ne,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new oe(
        e,
        ue,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      me[e] = new oe(
        e,
        ce,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      me[e] = new oe(
        e,
        ae,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Se = /[\-\:]([a-z])/g, Ae = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Se, Ae);
      me[t] = new oe(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Se, Ae);
      me[t] = new oe(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Se, Ae);
      me[t] = new oe(
        t,
        Z,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      me[e] = new oe(
        e,
        Z,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Le = "xlinkHref";
    me[Le] = new oe(
      "xlinkHref",
      Z,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      me[e] = new oe(
        e,
        Z,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Zt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Gt(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var tt = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zt).forEach(function(e) {
      tt.forEach(function(t) {
        Zt[Gt(t, e)] = Zt[e];
      });
    });
    var yt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function xe(e, t) {
      yt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || A("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || A("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ue(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Pe = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ie = {}, $e = new RegExp("^(aria)-[" + de + "]*$"), nt = new RegExp("^(aria)[A-Z][" + de + "]*$");
    function We(e, t) {
      {
        if (G.call(Ie, t) && Ie[t])
          return !0;
        if (nt.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), o = Pe.hasOwnProperty(n) ? n : null;
          if (o == null)
            return A("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ie[t] = !0, !0;
          if (t !== o)
            return A("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Ie[t] = !0, !0;
        }
        if ($e.test(t)) {
          var l = t.toLowerCase(), d = Pe.hasOwnProperty(l) ? l : null;
          if (d == null)
            return Ie[t] = !0, !1;
          if (t !== d)
            return A("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ie[t] = !0, !0;
        }
      }
      return !0;
    }
    function Je(e, t) {
      {
        var n = [];
        for (var o in t) {
          var l = We(e, o);
          l || n.push(o);
        }
        var d = n.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        n.length === 1 ? A("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : n.length > 1 && A("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function dt(e, t) {
      Ue(e, t) || Je(e, t);
    }
    var Rt = !1;
    function gr(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Rt && (Rt = !0, e === "select" && t.multiple ? A("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : A("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var St = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, et = function() {
    };
    {
      var Xe = {}, Gn = /^on./, _n = /^on[^A-Z]/, Yn = new RegExp("^(aria)-[" + de + "]*$"), Ze = new RegExp("^(aria)[A-Z][" + de + "]*$");
      et = function(e, t, n, o) {
        if (G.call(Xe, t) && Xe[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return A("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xe[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, v = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var D = v.hasOwnProperty(l) ? v[l] : null;
          if (D != null)
            return A("Invalid event handler property `%s`. Did you mean `%s`?", t, D), Xe[t] = !0, !0;
          if (Gn.test(t))
            return A("Unknown event handler property `%s`. It will be ignored.", t), Xe[t] = !0, !0;
        } else if (Gn.test(t))
          return _n.test(t) && A("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xe[t] = !0, !0;
        if (Yn.test(t) || Ze.test(t))
          return !0;
        if (l === "innerhtml")
          return A("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xe[t] = !0, !0;
        if (l === "aria")
          return A("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xe[t] = !0, !0;
        if (l === "is" && n !== null && n !== void 0 && typeof n != "string")
          return A("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Xe[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return A("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xe[t] = !0, !0;
        var R = be(t), W = R !== null && R.type === $;
        if (St.hasOwnProperty(l)) {
          var Y = St[l];
          if (Y !== t)
            return A("Invalid DOM property `%s`. Did you mean `%s`?", t, Y), Xe[t] = !0, !0;
        } else if (!W && t !== l)
          return A("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), Xe[t] = !0, !0;
        return typeof n == "boolean" && fe(t, n, R) ? (n ? A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), Xe[t] = !0, !0) : W ? !0 : fe(t, n, R) ? (Xe[t] = !0, !1) : ((n === "false" || n === "true") && R !== null && R.type === ne && (A("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), Xe[t] = !0), !0);
      };
    }
    var Xn = function(e, t, n) {
      {
        var o = [];
        for (var l in t) {
          var d = et(e, l, t[l], n);
          d || o.push(l);
        }
        var v = o.map(function(D) {
          return "`" + D + "`";
        }).join(", ");
        o.length === 1 ? A("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e) : o.length > 1 && A("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", v, e);
      }
    };
    function mr(e, t, n) {
      Ue(e, t) || Xn(e, t, n);
    }
    var yr = function() {
    };
    {
      var Vn = /^(?:webkit|moz|o)[A-Z]/, Cn = /^-ms-/, Kr = /-(.)/g, Jn = /;\s*$/, $t = {}, Kn = {}, wr = !1, at = !1, Mt = function(e) {
        return e.replace(Kr, function(t, n) {
          return n.toUpperCase();
        });
      }, qt = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, A(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Mt(e.replace(Cn, "ms-"))
        ));
      }, Re = function(e) {
        $t.hasOwnProperty(e) && $t[e] || ($t[e] = !0, A("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, en = function(e, t) {
        Kn.hasOwnProperty(t) && Kn[t] || (Kn[t] = !0, A(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Jn, "")));
      }, Dn = function(e, t) {
        wr || (wr = !0, A("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hn = function(e, t) {
        at || (at = !0, A("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yr = function(e, t) {
        e.indexOf("-") > -1 ? qt(e) : Vn.test(e) ? Re(e) : Jn.test(t) && en(e, t), typeof t == "number" && (isNaN(t) ? Dn(e, t) : isFinite(t) || hn(e, t));
      };
    }
    var Qt = yr, Pn = /["'&<>]/;
    function _t(e) {
      X(e);
      var t = "" + e, n = Pn.exec(t);
      if (!n)
        return t;
      var o, l = "", d, v = 0;
      for (d = n.index; d < t.length; d++) {
        switch (t.charCodeAt(d)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        v !== d && (l += t.substring(v, d)), v = d + 1, l += o;
      }
      return v !== d ? l + t.substring(v, d) : l;
    }
    function Ke(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : _t(e);
    }
    var $n = /([A-Z])/g, qn = /^ms-/;
    function br(e) {
      return e.replace($n, "-$1").toLowerCase().replace(qn, "-ms-");
    }
    var Ge = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, er = !1;
    function $r(e) {
      !er && Ge.test(e) && (er = !0, A("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var qr = Array.isArray;
    function Ot(e) {
      return qr(e);
    }
    var tr = "<script>";
    function Bn(e, t, n, o, l) {
      var d = e === void 0 ? "" : e, v = tr, D = [];
      return {
        bootstrapChunks: D,
        startInlineScript: v,
        placeholderPrefix: d + "P:",
        segmentPrefix: d + "S:",
        boundaryPrefix: d + "B:",
        idPrefix: d,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var tn = 0, ft = 1, jt = 2, kn = 3, nn = 4, rn = 5, Ft = 6, on = 7;
    function ht(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function Sr(e, t, n) {
      switch (t) {
        case "select":
          return ht(ft, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return ht(jt, null);
        case "math":
          return ht(kn, null);
        case "foreignObject":
          return ht(ft, null);
        case "table":
          return ht(nn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return ht(rn, null);
        case "colgroup":
          return ht(on, null);
        case "tr":
          return ht(Ft, null);
      }
      return e.insertionMode >= nn || e.insertionMode === tn ? ht(ft, null) : e;
    }
    var xr = null;
    function Yt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function _e(e, t, n) {
      var o = e.idPrefix, l = ":" + o + "R" + t;
      return n > 0 && (l += "H" + n.toString(32)), l + ":";
    }
    function Lt(e) {
      return Ke(e);
    }
    var Ht = "<!-- -->";
    function an(e, t, n, o) {
      return t === "" ? o : (o && e.push(Ht), e.push(Lt(t)), !0);
    }
    function Tn(e, t, n, o) {
      n && o && e.push(Ht);
    }
    var xt = /* @__PURE__ */ new Map();
    function Nt(e) {
      var t = xt.get(e);
      if (t !== void 0)
        return t;
      var n = Ke(br(e));
      return xt.set(e, n), n;
    }
    var it = ' style="', An = ":", pn = ";";
    function In(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var l in n)
        if (G.call(n, l)) {
          var d = n[l];
          if (!(d == null || typeof d == "boolean" || d === "")) {
            var v = void 0, D = void 0, R = l.indexOf("--") === 0;
            R ? (v = Ke(l), te(d, l), D = Ke(("" + d).trim())) : (Qt(l, d), v = Nt(l), typeof d == "number" ? d !== 0 && !G.call(Zt, l) ? D = d + "px" : D = "" + d : (te(d, l), D = Ke(("" + d).trim()))), o ? (o = !1, e.push(it, v, An, D)) : e.push(pn, v, An, D);
          }
        }
      o || e.push(At);
    }
    var wt = " ", Ut = '="', At = '"', Rn = '=""';
    function qe(e, t, n, o) {
      switch (n) {
        case "style": {
          In(e, t, o);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(n.length > 2 && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N"))
      ) {
        var l = be(n);
        if (l !== null) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!l.acceptsBooleans)
                return;
          }
          var d = l.attributeName, v = d;
          switch (l.type) {
            case ne:
              o && e.push(wt, v, Rn);
              return;
            case ue:
              o === !0 ? e.push(wt, v, Rn) : o === !1 || e.push(wt, v, Ut, Ke(o), At);
              return;
            case ae:
              isNaN(o) || e.push(wt, v, Ut, Ke(o), At);
              break;
            case ce:
              !isNaN(o) && o >= 1 && e.push(wt, v, Ut, Ke(o), At);
              break;
            default:
              l.sanitizeURL && (K(o, d), o = "" + o, $r(o)), e.push(wt, v, Ut, Ke(o), At);
          }
        } else if (le(n)) {
          switch (typeof o) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var D = n.toLowerCase().slice(0, 5);
              if (D !== "data-" && D !== "aria-")
                return;
            }
          }
          e.push(wt, n, Ut, Ke(o), At);
        }
      }
    }
    var pt = ">", a = "/>";
    function c(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (X(o), e.push("" + o));
      }
    }
    var g = !1, x = !1, Q = !1, I = !1, N = !1, V = !1, ie = !1;
    function he(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = Ot(n);
          e.multiple && !o ? A("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && A("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function se(e, t, n) {
      xe("select", t), he(t, "value"), he(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !Q && (A("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Q = !0), e.push(Wt("select"));
      var o = null, l = null;
      for (var d in t)
        if (G.call(t, d)) {
          var v = t[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              qe(e, n, d, v);
              break;
          }
        }
      return e.push(pt), c(e, l, o), o;
    }
    function Be(e) {
      var t = "";
      return f.Children.forEach(e, function(n) {
        n != null && (t += n, !N && typeof n != "string" && typeof n != "number" && (N = !0, A("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var lt = ' selected=""';
    function st(e, t, n, o) {
      var l = o.selectedValue;
      e.push(Wt("option"));
      var d = null, v = null, D = null, R = null;
      for (var W in t)
        if (G.call(t, W)) {
          var Y = t[W];
          if (Y == null)
            continue;
          switch (W) {
            case "children":
              d = Y;
              break;
            case "selected":
              D = Y, ie || (A("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ie = !0);
              break;
            case "dangerouslySetInnerHTML":
              R = Y;
              break;
            case "value":
              v = Y;
            default:
              qe(e, n, W, Y);
              break;
          }
        }
      if (l != null) {
        var q;
        if (v !== null ? (K(v, "value"), q = "" + v) : (R !== null && (V || (V = !0, A("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), q = Be(d)), Ot(l))
          for (var ge = 0; ge < l.length; ge++) {
            K(l[ge], "value");
            var Te = "" + l[ge];
            if (Te === q) {
              e.push(lt);
              break;
            }
          }
        else
          K(l, "select.value"), "" + l === q && e.push(lt);
      } else D && e.push(lt);
      return e.push(pt), c(e, R, d), d;
    }
    function ut(e, t, n) {
      xe("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !x && (A("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), x = !0), t.value !== void 0 && t.defaultValue !== void 0 && !g && (A("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), g = !0), e.push(Wt("input"));
      var o = null, l = null, d = null, v = null;
      for (var D in t)
        if (G.call(t, D)) {
          var R = t[D];
          if (R == null)
            continue;
          switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              v = R;
              break;
            case "defaultValue":
              l = R;
              break;
            case "checked":
              d = R;
              break;
            case "value":
              o = R;
              break;
            default:
              qe(e, n, D, R);
              break;
          }
        }
      return d !== null ? qe(e, n, "checked", d) : v !== null && qe(e, n, "checked", v), o !== null ? qe(e, n, "value", o) : l !== null && qe(e, n, "value", l), e.push(a), null;
    }
    function ln(e, t, n) {
      xe("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !I && (A("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), I = !0), e.push(Wt("textarea"));
      var o = null, l = null, d = null;
      for (var v in t)
        if (G.call(t, v)) {
          var D = t[v];
          if (D == null)
            continue;
          switch (v) {
            case "children":
              d = D;
              break;
            case "value":
              o = D;
              break;
            case "defaultValue":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              qe(e, n, v, D);
              break;
          }
        }
      if (o === null && l !== null && (o = l), e.push(pt), d != null) {
        if (A("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), o != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (Ot(d)) {
          if (d.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          X(d[0]), o = "" + d[0];
        }
        X(d), o = "" + d;
      }
      return typeof o == "string" && o[0] === `
` && e.push(gn), o !== null && (K(o, "value"), e.push(Lt("" + o))), null;
    }
    function zt(e, t, n, o) {
      e.push(Wt(n));
      for (var l in t)
        if (G.call(t, l)) {
          var d = t[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              qe(e, o, l, d);
              break;
          }
        }
      return e.push(a), null;
    }
    function Mn(e, t, n) {
      e.push(Wt("menuitem"));
      for (var o in t)
        if (G.call(t, o)) {
          var l = t[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              qe(e, n, o, l);
              break;
          }
        }
      return e.push(pt), null;
    }
    function sn(e, t, n) {
      e.push(Wt("title"));
      var o = null;
      for (var l in t)
        if (G.call(t, l)) {
          var d = t[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
              o = d;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              qe(e, n, l, d);
              break;
          }
        }
      e.push(pt);
      {
        var v = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? A("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : v != null && v.$$typeof != null ? A("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : v != null && typeof v != "string" && typeof v != "number" && A("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function vn(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var v in t)
        if (G.call(t, v)) {
          var D = t[v];
          if (D == null)
            continue;
          switch (v) {
            case "children":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              d = D;
              break;
            default:
              qe(e, o, v, D);
              break;
          }
        }
      return e.push(pt), c(e, d, l), typeof l == "string" ? (e.push(Lt(l)), null) : l;
    }
    function Xt(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var v in t)
        if (G.call(t, v)) {
          var D = t[v];
          if (D == null)
            continue;
          switch (v) {
            case "children":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              d = D;
              break;
            case "style":
              In(e, o, D);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              le(v) && typeof D != "function" && typeof D != "symbol" && e.push(wt, v, Ut, Ke(D), At);
              break;
          }
        }
      return e.push(pt), c(e, d, l), l;
    }
    var gn = `
`;
    function Na(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var v in t)
        if (G.call(t, v)) {
          var D = t[v];
          if (D == null)
            continue;
          switch (v) {
            case "children":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              d = D;
              break;
            default:
              qe(e, o, v, D);
              break;
          }
        }
      if (e.push(pt), d != null) {
        if (l != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof d != "object" || !("__html" in d))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var R = d.__html;
        R != null && (typeof R == "string" && R.length > 0 && R[0] === `
` ? e.push(gn, R) : (X(R), e.push("" + R)));
      }
      return typeof l == "string" && l[0] === `
` && e.push(gn), l;
    }
    var Ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Er = /* @__PURE__ */ new Map();
    function Wt(e) {
      var t = Er.get(e);
      if (t === void 0) {
        if (!Ua.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Er.set(e, t);
      }
      return t;
    }
    var za = "<!DOCTYPE html>";
    function Vt(e, t, n, o, l) {
      switch (dt(t, n), gr(t, n), mr(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && A("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), l.insertionMode !== jt && l.insertionMode !== kn && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && A("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return se(e, n, o);
        case "option":
          return st(e, n, o, l);
        case "textarea":
          return ln(e, n, o);
        case "input":
          return ut(e, n, o);
        case "menuitem":
          return Mn(e, n, o);
        case "title":
          return sn(e, n, o);
        case "listing":
        case "pre":
          return Na(e, n, t, o);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return zt(e, n, t, o);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return vn(e, n, t, o);
        case "html":
          return l.insertionMode === tn && e.push(za), vn(e, n, t, o);
        default:
          return t.indexOf("-") === -1 && typeof n.is != "string" ? vn(e, n, t, o) : Xt(e, n, t, o);
      }
    }
    var eo = "</", Cr = ">";
    function Qe(e, t, n) {
      switch (t) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          e.push(eo, t, Cr);
      }
    }
    function mn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        w(e, n[o]);
      return o < n.length ? C(e, n[o]) : !0;
    }
    var Dr = '<template id="', yn = '"></template>';
    function un(e, t, n) {
      w(e, Dr), w(e, t.placeholderPrefix);
      var o = n.toString(16);
      return w(e, o), C(e, yn);
    }
    var Pr = "<!--$-->", cn = '<!--$?--><template id="', Et = '"></template>', to = "<!--$!-->", nr = "<!--/$-->", Ho = "<template", Br = '"', No = ' data-dgst="', Wa = ' data-msg="', Za = ' data-stck="', kr = "></template>";
    function Uo(e, t) {
      return C(e, Pr);
    }
    function rr(e, t, n) {
      if (w(e, cn), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return w(e, n), C(e, Et);
    }
    function no(e, t, n, o, l) {
      var d;
      return d = C(e, to), w(e, Ho), n && (w(e, No), w(e, Ke(n)), w(e, Br)), o && (w(e, Wa), w(e, Ke(o)), w(e, Br)), l && (w(e, Za), w(e, Ke(l)), w(e, Br)), d = C(e, kr), d;
    }
    function Ga(e, t) {
      return C(e, nr);
    }
    function Qn(e, t) {
      return C(e, nr);
    }
    function ro(e, t) {
      return C(e, nr);
    }
    var oo = '<div hidden id="', On = '">', or = "</div>", Tr = '<svg aria-hidden="true" style="display:none" id="', zo = '">', Wo = "</svg>", Zo = '<math aria-hidden="true" style="display:none" id="', Ir = '">', vt = "</math>", Go = '<table hidden id="', Rr = '">', _a = "</table>", _o = '<table hidden><tbody id="', Mr = '">', Yo = "</tbody></table>", Xo = '<table hidden><tr id="', Qr = '">', Or = "</tr></table>", Vo = '<table hidden><colgroup id="', Jo = '">', Ko = "</colgroup></table>";
    function ao(e, t, n, o) {
      switch (n.insertionMode) {
        case tn:
        case ft:
          return w(e, oo), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, On);
        case jt:
          return w(e, Tr), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, zo);
        case kn:
          return w(e, Zo), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, Ir);
        case nn:
          return w(e, Go), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, Rr);
        case rn:
          return w(e, _o), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, Mr);
        case Ft:
          return w(e, Xo), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, Qr);
        case on:
          return w(e, Vo), w(e, t.segmentPrefix), w(e, o.toString(16)), C(e, Jo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function $o(e, t) {
      switch (t.insertionMode) {
        case tn:
        case ft:
          return C(e, or);
        case jt:
          return C(e, Wo);
        case kn:
          return C(e, vt);
        case nn:
          return C(e, _a);
        case rn:
          return C(e, Yo);
        case Ft:
          return C(e, Or);
        case on:
          return C(e, Ko);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", u = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', p = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', b = i + ';$RS("', O = '$RS("', M = '","', z = '")<\/script>';
    function J(e, t, n) {
      w(e, t.startInlineScript), t.sentCompleteSegmentFunction ? w(e, O) : (t.sentCompleteSegmentFunction = !0, w(e, b)), w(e, t.segmentPrefix);
      var o = n.toString(16);
      return w(e, o), w(e, M), w(e, t.placeholderPrefix), w(e, o), C(e, z);
    }
    var pe = u + ';$RC("', we = '$RC("', ye = '","', je = '")<\/script>';
    function gt(e, t, n, o) {
      if (w(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? w(e, we) : (t.sentCompleteBoundaryFunction = !0, w(e, pe)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var l = o.toString(16);
      return w(e, n), w(e, ye), w(e, t.segmentPrefix), w(e, l), C(e, je);
    }
    var Ct = p + ';$RX("', Dt = '$RX("', jr = '"', qo = ")<\/script>", ar = ",";
    function TA(e, t, n, o, l, d) {
      if (w(e, t.startInlineScript), t.sentClientRenderFunction ? w(e, Dt) : (t.sentClientRenderFunction = !0, w(e, Ct)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return w(e, n), w(e, jr), (o || l || d) && (w(e, ar), w(e, Ya(o || ""))), (l || d) && (w(e, ar), w(e, Ya(l || ""))), d && (w(e, ar), w(e, Ya(d))), C(e, qo);
    }
    var IA = /[<\u2028\u2029]/g;
    function Ya(e) {
      var t = JSON.stringify(e);
      return t.replace(IA, function(n) {
        switch (n) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function RA(e, t) {
      var n = Bn(t);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: n.bootstrapChunks,
        startInlineScript: n.startInlineScript,
        placeholderPrefix: n.placeholderPrefix,
        segmentPrefix: n.segmentPrefix,
        boundaryPrefix: n.boundaryPrefix,
        idPrefix: n.idPrefix,
        nextSuspenseID: n.nextSuspenseID,
        sentCompleteSegmentFunction: n.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: n.sentCompleteBoundaryFunction,
        sentClientRenderFunction: n.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: e
      };
    }
    function MA() {
      return {
        insertionMode: ft,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Mi(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(Ke(t)), !1) : an(e, t, n, o);
    }
    function Qi(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Tn(e, t, n, o);
    }
    function QA(e, t) {
      return t.generateStaticMarkup ? !0 : Uo(e);
    }
    function OA(e, t, n, o, l) {
      return t.generateStaticMarkup ? !0 : no(e, t, n, o, l);
    }
    function jA(e, t) {
      return t.generateStaticMarkup ? !0 : Ga(e);
    }
    function FA(e, t) {
      return t.generateStaticMarkup ? !0 : ro(e);
    }
    var bt = Object.assign, LA = Symbol.for("react.element"), Oi = Symbol.for("react.portal"), ea = Symbol.for("react.fragment"), Pt = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), ta = Symbol.for("react.provider"), na = Symbol.for("react.context"), ra = Symbol.for("react.forward_ref"), oa = Symbol.for("react.suspense"), io = Symbol.for("react.suspense_list"), Ao = Symbol.for("react.memo"), Fr = Symbol.for("react.lazy"), Xa = Symbol.for("react.scope"), Va = Symbol.for("react.debug_trace_mode"), Ja = Symbol.for("react.legacy_hidden"), aa = Symbol.for("react.default_value"), Fi = Symbol.iterator, HA = "@@iterator";
    function NA(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Fi && e[Fi] || e[HA];
      return typeof t == "function" ? t : null;
    }
    function UA(e, t, n) {
      var o = e.displayName;
      if (o)
        return o;
      var l = t.displayName || t.name || "";
      return l !== "" ? n + "(" + l + ")" : n;
    }
    function Ka(e) {
      return e.displayName || "Context";
    }
    function Ne(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ea:
          return "Fragment";
        case Oi:
          return "Portal";
        case ji:
          return "Profiler";
        case Pt:
          return "StrictMode";
        case oa:
          return "Suspense";
        case io:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case na:
            var t = e;
            return Ka(t) + ".Consumer";
          case ta:
            var n = e;
            return Ka(n._context) + ".Provider";
          case ra:
            return UA(e, e.render, "ForwardRef");
          case Ao:
            var o = e.displayName || null;
            return o !== null ? o : Ne(e.type) || "Memo";
          case Fr: {
            var l = e, d = l._payload, v = l._init;
            try {
              return Ne(v(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lo = 0, Li, $a, He, Lr, qa, ei, ti;
    function ni() {
    }
    ni.__reactDisabledLog = !0;
    function Hi() {
      {
        if (lo === 0) {
          Li = console.log, $a = console.info, He = console.warn, Lr = console.error, qa = console.group, ei = console.groupCollapsed, ti = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ni,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        lo++;
      }
    }
    function Ni() {
      {
        if (lo--, lo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: Li
            }),
            info: bt({}, e, {
              value: $a
            }),
            warn: bt({}, e, {
              value: He
            }),
            error: bt({}, e, {
              value: Lr
            }),
            group: bt({}, e, {
              value: qa
            }),
            groupCollapsed: bt({}, e, {
              value: ei
            }),
            groupEnd: bt({}, e, {
              value: ti
            })
          });
        }
        lo < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ia = h.ReactCurrentDispatcher, Aa;
    function so(e, t, n) {
      {
        if (Aa === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            Aa = o && o[1] || "";
          }
        return `
` + Aa + e;
      }
    }
    var ri = !1, Hr;
    {
      var oi = typeof WeakMap == "function" ? WeakMap : Map;
      Hr = new oi();
    }
    function ir(e, t) {
      if (!e || ri)
        return "";
      {
        var n = Hr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ri = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = ia.current, ia.current = null, Hi();
      try {
        if (t) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (rt) {
              o = rt;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (rt) {
              o = rt;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (rt) {
            o = rt;
          }
          e();
        }
      } catch (rt) {
        if (rt && o && typeof rt.stack == "string") {
          for (var D = rt.stack.split(`
`), R = o.stack.split(`
`), W = D.length - 1, Y = R.length - 1; W >= 1 && Y >= 0 && D[W] !== R[Y]; )
            Y--;
          for (; W >= 1 && Y >= 0; W--, Y--)
            if (D[W] !== R[Y]) {
              if (W !== 1 || Y !== 1)
                do
                  if (W--, Y--, Y < 0 || D[W] !== R[Y]) {
                    var q = `
` + D[W].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && Hr.set(e, q), q;
                  }
                while (W >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ri = !1, ia.current = d, Ni(), Error.prepareStackTrace = l;
      }
      var ge = e ? e.displayName || e.name : "", Te = ge ? so(ge) : "";
      return typeof e == "function" && Hr.set(e, Te), Te;
    }
    function ai(e, t, n) {
      return ir(e, !0);
    }
    function uo(e, t, n) {
      return ir(e, !1);
    }
    function zA(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function co(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ir(e, zA(e));
      if (typeof e == "string")
        return so(e);
      switch (e) {
        case oa:
          return so("Suspense");
        case io:
          return so("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ra:
            return uo(e.render);
          case Ao:
            return co(e.type, t, n);
          case Fr: {
            var o = e, l = o._payload, d = o._init;
            try {
              return co(d(l), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ui = {}, ii = h.ReactDebugCurrentFrame;
    function la(e) {
      if (e) {
        var t = e._owner, n = co(e.type, e._source, t ? t.type : null);
        ii.setExtraStackFrame(n);
      } else
        ii.setExtraStackFrame(null);
    }
    function sa(e, t, n, o, l) {
      {
        var d = Function.call.bind(G);
        for (var v in e)
          if (d(e, v)) {
            var D = void 0;
            try {
              if (typeof e[v] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              D = e[v](t, v, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              D = W;
            }
            D && !(D instanceof Error) && (la(l), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, v, typeof D), la(null)), D instanceof Error && !(D.message in Ui) && (Ui[D.message] = !0, la(l), A("Failed %s type: %s", n, D.message), la(null));
          }
      }
    }
    var ua;
    ua = {};
    var fo = {};
    Object.freeze(fo);
    function ho(e, t) {
      {
        var n = e.contextTypes;
        if (!n)
          return fo;
        var o = {};
        for (var l in n)
          o[l] = t[l];
        {
          var d = Ne(e) || "Unknown";
          sa(n, o, "context", d);
        }
        return o;
      }
    }
    function zi(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var l = Ne(t) || "Unknown";
            ua[l] || (ua[l] = !0, A("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", l, l));
          }
          return n;
        }
        var d = e.getChildContext();
        for (var v in d)
          if (!(v in o))
            throw new Error((Ne(t) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var D = Ne(t) || "Unknown";
          sa(o, d, "child context", D);
        }
        return bt({}, n, d);
      }
    }
    var Ar;
    Ar = {};
    var ca = null, jn = null;
    function Ai(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function lr(e) {
      e.context._currentValue2 = e.value;
    }
    function da(e, t) {
      if (e !== t) {
        Ai(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          da(n, o);
        }
        lr(t);
      }
    }
    function Fn(e) {
      Ai(e);
      var t = e.parent;
      t !== null && Fn(t);
    }
    function fa(e) {
      var t = e.parent;
      t !== null && fa(t), lr(e);
    }
    function ha(e, t) {
      Ai(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? da(n, t) : ha(n, t);
    }
    function po(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? da(e, n) : po(e, n), lr(t);
    }
    function vo(e) {
      var t = jn, n = e;
      t !== n && (t === null ? fa(n) : n === null ? Fn(t) : t.depth === n.depth ? da(t, n) : t.depth > n.depth ? ha(t, n) : po(t, n), jn = n);
    }
    function Wi(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Ar && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Ar;
      var o = jn, l = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return jn = l, l;
    }
    function Zi(e) {
      var t = jn;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && A("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === aa ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== Ar && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = Ar;
      }
      return jn = t.parent;
    }
    function Gi() {
      return jn;
    }
    function Ln(e) {
      var t = e._currentValue2;
      return t;
    }
    function li(e) {
      return e._reactInternals;
    }
    function WA(e, t) {
      e._reactInternals = t;
    }
    var _i = {}, Nr = {}, go, si, pa, va, ga, Ur, mo, yo, ma;
    {
      go = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), pa = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), va = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), ma = /* @__PURE__ */ new Set();
      var wo = /* @__PURE__ */ new Set();
      Ur = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          wo.has(n) || (wo.add(n), A("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ga = function(e, t) {
        if (t === void 0) {
          var n = Ne(e) || "Component";
          va.has(n) || (va.add(n), A("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ya(e, t) {
      {
        var n = e.constructor, o = n && Ne(n) || "ReactClass", l = o + "." + t;
        if (_i[l])
          return;
        A(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), _i[l] = !0;
      }
    }
    var wa = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = li(e);
        o.queue === null ? ya(e, "setState") : (o.queue.push(t), n != null && Ur(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = li(e);
        o.replace = !0, o.queue = [t], n != null && Ur(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = li(e);
        n.queue === null ? ya(e, "forceUpdate") : t != null && Ur(t, "setState");
      }
    };
    function ui(e, t, n, o, l) {
      var d = n(l, o);
      ga(t, d);
      var v = d == null ? o : bt({}, o, d);
      return v;
    }
    function Yi(e, t, n) {
      var o = fo, l = e.contextType;
      if ("contextType" in e) {
        var d = (
          // Allow null for conditional declaration
          l === null || l !== void 0 && l.$$typeof === na && l._context === void 0
        );
        if (!d && !ma.has(e)) {
          ma.add(e);
          var v = "";
          l === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof l != "object" ? v = " However, it is set to a " + typeof l + "." : l.$$typeof === ta ? v = " Did you accidentally pass the Context.Provider instead?" : l._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(l).join(", ") + "}.", A("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ne(e) || "Component", v);
        }
      }
      typeof l == "object" && l !== null ? o = Ln(l) : o = n;
      var D = new e(t, o);
      {
        if (typeof e.getDerivedStateFromProps == "function" && (D.state === null || D.state === void 0)) {
          var R = Ne(e) || "Component";
          go.has(R) || (go.add(R), A("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, D.state === null ? "null" : "undefined", R));
        }
        if (typeof e.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var W = null, Y = null, q = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? W = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (W = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? q = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (q = "UNSAFE_componentWillUpdate"), W !== null || Y !== null || q !== null) {
            var ge = Ne(e) || "Component", Te = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            pa.has(ge) || (pa.add(ge), A(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ge, Te, W !== null ? `
  ` + W : "", Y !== null ? `
  ` + Y : "", q !== null ? `
  ` + q : ""));
          }
        }
      }
      return D;
    }
    function Xi(e, t, n) {
      {
        var o = Ne(t) || "Component", l = e.render;
        l || (t.prototype && typeof t.prototype.render == "function" ? A("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : A("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && A("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && A("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && A("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && A("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && A("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !yo.has(t) && (yo.add(t), A("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && A("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && A("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ne(t) || "A pure component"), typeof e.componentDidUnmount == "function" && A("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && A("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && A("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && A("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = e.props !== n;
        e.props !== void 0 && d && A("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && A("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !si.has(t) && (si.add(t), A("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ne(t))), typeof e.getDerivedStateFromProps == "function" && A("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && A("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && A("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var v = e.state;
        v && (typeof v != "object" || Ot(v)) && A("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && A("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Vi(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = Ne(e) || "Unknown";
          Nr[o] || (m(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Nr[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (A("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ne(e) || "Component"), wa.enqueueReplaceState(t, t.state, null));
    }
    function ZA(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var l = e.queue, d = e.replace;
        if (e.queue = null, e.replace = !1, d && l.length === 1)
          t.state = l[0];
        else {
          for (var v = d ? l[0] : t.state, D = !0, R = d ? 1 : 0; R < l.length; R++) {
            var W = l[R], Y = typeof W == "function" ? W.call(t, v, n, o) : W;
            Y != null && (D ? (D = !1, v = bt({}, v, Y)) : bt(v, Y));
          }
          t.state = v;
        }
      } else
        e.queue = null;
    }
    function Ji(e, t, n, o) {
      Xi(e, t, n);
      var l = e.state !== void 0 ? e.state : null;
      e.updater = wa, e.props = n, e.state = l;
      var d = {
        queue: [],
        replace: !1
      };
      WA(e, d);
      var v = t.contextType;
      if (typeof v == "object" && v !== null ? e.context = Ln(v) : e.context = o, e.state === n) {
        var D = Ne(t) || "Component";
        mo.has(D) || (mo.add(D), A("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", D));
      }
      var R = t.getDerivedStateFromProps;
      typeof R == "function" && (e.state = ui(e, t, R, l, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Vi(t, e), ZA(d, e, n, o));
    }
    var GA = {
      id: 1,
      overflow: ""
    };
    function _A(e) {
      var t = e.overflow, n = e.id, o = n & ~YA(n);
      return o.toString(32) + t;
    }
    function ci(e, t, n) {
      var o = e.id, l = e.overflow, d = bo(o) - 1, v = o & ~(1 << d), D = n + 1, R = bo(t) + d;
      if (R > 30) {
        var W = d - d % 5, Y = (1 << W) - 1, q = (v & Y).toString(32), ge = v >> W, Te = d - W, rt = bo(t) + Te, pr = D << Te, vr = pr | ge, En = q + l;
        return {
          id: 1 << rt | vr,
          overflow: En
        };
      } else {
        var Xr = D << d, Cl = Xr | v, Hs = l;
        return {
          id: 1 << R | Cl,
          overflow: Hs
        };
      }
    }
    function bo(e) {
      return 32 - XA(e);
    }
    function YA(e) {
      return 1 << bo(e) - 1;
    }
    var XA = Math.clz32 ? Math.clz32 : VA, di = Math.log, ba = Math.LN2;
    function VA(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (di(t) / ba | 0) | 0;
    }
    function JA(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var KA = typeof Object.is == "function" ? Object.is : JA, wn = null, fi = null, Sa = null, Fe = null, Bt = !1, zr = !1, sr = 0, ke = null, Hn = 0, xa = 25, kt = !1, Tt;
    function dn() {
      if (wn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return kt && A("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), wn;
    }
    function $A(e, t) {
      if (t === null)
        return A("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Tt), !1;
      e.length !== t.length && A(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Tt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!KA(e[n], t[n]))
          return !1;
      return !0;
    }
    function Jt() {
      if (Hn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Nn() {
      return Fe === null ? Sa === null ? (Bt = !1, Sa = Fe = Jt()) : (Bt = !0, Fe = Sa) : Fe.next === null ? (Bt = !1, Fe = Fe.next = Jt()) : (Bt = !0, Fe = Fe.next), Fe;
    }
    function ur(e, t) {
      wn = t, fi = e, kt = !1, sr = 0;
    }
    function qA(e, t, n, o) {
      for (; zr; )
        zr = !1, sr = 0, Hn += 1, Fe = null, n = e(t, o);
      return So(), n;
    }
    function hi() {
      var e = sr !== 0;
      return e;
    }
    function So() {
      kt = !1, wn = null, fi = null, zr = !1, Sa = null, Hn = 0, ke = null, Fe = null;
    }
    function el(e) {
      return kt && A("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ln(e);
    }
    function tl(e) {
      return Tt = "useContext", dn(), Ln(e);
    }
    function Ea(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function pi(e) {
      return Tt = "useState", Ki(
        Ea,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Ki(e, t, n) {
      if (e !== Ea && (Tt = "useReducer"), wn = dn(), Fe = Nn(), Bt) {
        var o = Fe.queue, l = o.dispatch;
        if (ke !== null) {
          var d = ke.get(o);
          if (d !== void 0) {
            ke.delete(o);
            var v = Fe.memoizedState, D = d;
            do {
              var R = D.action;
              kt = !0, v = e(v, R), kt = !1, D = D.next;
            } while (D !== null);
            return Fe.memoizedState = v, [v, l];
          }
        }
        return [Fe.memoizedState, l];
      } else {
        kt = !0;
        var W;
        e === Ea ? W = typeof t == "function" ? t() : t : W = n !== void 0 ? n(t) : t, kt = !1, Fe.memoizedState = W;
        var Y = Fe.queue = {
          last: null,
          dispatch: null
        }, q = Y.dispatch = qi.bind(null, wn, Y);
        return [Fe.memoizedState, q];
      }
    }
    function $i(e, t) {
      wn = dn(), Fe = Nn();
      var n = t === void 0 ? null : t;
      if (Fe !== null) {
        var o = Fe.memoizedState;
        if (o !== null && n !== null) {
          var l = o[1];
          if ($A(n, l))
            return o[0];
        }
      }
      kt = !0;
      var d = e();
      return kt = !1, Fe.memoizedState = [d, n], d;
    }
    function vi(e) {
      wn = dn(), Fe = Nn();
      var t = Fe.memoizedState;
      if (t === null) {
        var n = {
          current: e
        };
        return Object.seal(n), Fe.memoizedState = n, n;
      } else
        return t;
    }
    function nl(e, t) {
      Tt = "useLayoutEffect", A("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function qi(e, t, n) {
      if (Hn >= xa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === wn) {
        zr = !0;
        var o = {
          action: n,
          next: null
        };
        ke === null && (ke = /* @__PURE__ */ new Map());
        var l = ke.get(t);
        if (l === void 0)
          ke.set(t, o);
        else {
          for (var d = l; d.next !== null; )
            d = d.next;
          d.next = o;
        }
      }
    }
    function eA(e, t) {
      return $i(function() {
        return e;
      }, t);
    }
    function rl(e, t, n) {
      return dn(), t(e._source);
    }
    function ol(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function al(e) {
      return dn(), e;
    }
    function il() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function Al() {
      return dn(), [!1, il];
    }
    function ll() {
      var e = fi, t = _A(e.treeContext), n = gi;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = sr++;
      return _e(n, t, o);
    }
    function Ca() {
    }
    var tA = {
      readContext: el,
      useContext: tl,
      useMemo: $i,
      useReducer: Ki,
      useRef: vi,
      useState: pi,
      useInsertionEffect: Ca,
      useLayoutEffect: nl,
      useCallback: eA,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ca,
      // Effects are not run in the server environment.
      useEffect: Ca,
      // Debugging effect
      useDebugValue: Ca,
      useDeferredValue: al,
      useTransition: Al,
      useId: ll,
      // Subscriptions are not setup in a server environment.
      useMutableSource: rl,
      useSyncExternalStore: ol
    }, gi = null;
    function nA(e) {
      gi = e;
    }
    function Da(e) {
      try {
        var t = "", n = e;
        do {
          switch (n.tag) {
            case 0:
              t += so(n.type, null, null);
              break;
            case 1:
              t += uo(n.type, null, null);
              break;
            case 2:
              t += ai(n.type, null, null);
              break;
          }
          n = n.parent;
        } while (n);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    var Pa = h.ReactCurrentDispatcher, xo = h.ReactDebugCurrentFrame, Ba = 0, Wr = 1, ka = 2, Ta = 3, Ia = 4, Zr = 0, mi = 1, cr = 2, rA = 12800;
    function sl(e) {
      return console.error(e), null;
    }
    function Gr() {
    }
    function _r(e, t, n, o, l, d, v, D, R) {
      var W = [], Y = /* @__PURE__ */ new Set(), q = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? rA : o,
        status: Zr,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: Y,
        pingedTasks: W,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: l === void 0 ? sl : l,
        onAllReady: Gr,
        onShellReady: v === void 0 ? Gr : v,
        onShellError: Gr,
        onFatalError: Gr
      }, ge = Ra(
        q,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ge.parentFlushed = !0;
      var Te = dr(q, e, null, ge, Y, fo, ca, GA);
      return W.push(Te), q;
    }
    function ul(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && P(function() {
        return Bi(e);
      });
    }
    function cl(e, t) {
      return {
        id: xr,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: t,
        errorDigest: null
      };
    }
    function dr(e, t, n, o, l, d, v, D) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var R = {
        node: t,
        ping: function() {
          return ul(e, R);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: l,
        legacyContext: d,
        context: v,
        treeContext: D
      };
      return R.componentStack = null, l.add(R), R;
    }
    function Ra(e, t, n, o, l, d) {
      return {
        status: Ba,
        id: -1,
        // lazily assigned later
        index: t,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: o,
        boundary: n,
        lastPushedText: l,
        textEmbedded: d
      };
    }
    var bn = null;
    function yi() {
      return bn === null || bn.componentStack === null ? "" : Da(bn.componentStack);
    }
    function fr(e, t) {
      e.componentStack = {
        tag: 0,
        parent: e.componentStack,
        type: t
      };
    }
    function Eo(e, t) {
      e.componentStack = {
        tag: 1,
        parent: e.componentStack,
        type: t
      };
    }
    function Sn(e, t) {
      e.componentStack = {
        tag: 2,
        parent: e.componentStack,
        type: t
      };
    }
    function fn(e) {
      e.componentStack === null ? A("Unexpectedly popped too many stack frames. This is a bug in React.") : e.componentStack = e.componentStack.parent;
    }
    var xn = null;
    function Ma(e, t) {
      {
        var n;
        typeof t == "string" ? n = t : t && typeof t.message == "string" ? n = t.message : n = String(t);
        var o = xn || yi();
        xn = null, e.errorMessage = n, e.errorComponentStack = o;
      }
    }
    function Co(e, t) {
      var n = e.onError(t);
      if (n != null && typeof n != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
      return n;
    }
    function Kt(e, t) {
      var n = e.onShellError;
      n(t);
      var o = e.onFatalError;
      o(t), e.destination !== null ? (e.status = cr, L(e.destination, t)) : (e.status = mi, e.fatalError = t);
    }
    function Do(e, t, n) {
      fr(t, "Suspense");
      var o = t.blockedBoundary, l = t.blockedSegment, d = n.fallback, v = n.children, D = /* @__PURE__ */ new Set(), R = cl(e, D), W = l.chunks.length, Y = Ra(
        e,
        W,
        R,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.children.push(Y), l.lastPushedText = !1;
      var q = Ra(
        e,
        0,
        null,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      q.parentFlushed = !0, t.blockedBoundary = R, t.blockedSegment = q;
      try {
        if (mt(e, t, v), Qi(q.chunks, e.responseState, q.lastPushedText, q.textEmbedded), q.status = Wr, Yr(R, q), R.pendingTasks === 0) {
          fn(t);
          return;
        }
      } catch (Te) {
        q.status = Ia, R.forceClientRender = !0, R.errorDigest = Co(e, Te), Ma(R, Te);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = l;
      }
      var ge = dr(e, d, o, Y, D, t.legacyContext, t.context, t.treeContext);
      ge.componentStack = t.componentStack, e.pingedTasks.push(ge), fn(t);
    }
    function wi(e, t, n, o) {
      fr(t, n);
      var l = t.blockedSegment, d = Vt(l.chunks, n, o, e.responseState, l.formatContext);
      l.lastPushedText = !1;
      var v = l.formatContext;
      l.formatContext = Sr(v, n, o), mt(e, t, d), l.formatContext = v, Qe(l.chunks, n), l.lastPushedText = !1, fn(t);
    }
    function Po(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Bo(e, t, n, o, l) {
      var d = {};
      ur(t, d);
      var v = n(o, l);
      return qA(n, o, v, l);
    }
    function oA(e, t, n, o, l) {
      var d = n.render();
      n.props !== l && (Si || A("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ne(o) || "a component"), Si = !0);
      {
        var v = o.childContextTypes;
        if (v != null) {
          var D = t.legacyContext, R = zi(n, o, D, v);
          t.legacyContext = R, It(e, t, d), t.legacyContext = D;
          return;
        }
      }
      It(e, t, d);
    }
    function dl(e, t, n, o) {
      Sn(t, n);
      var l = ho(n, t.legacyContext), d = Yi(n, o, l);
      Ji(d, n, o, l), oA(e, t, d, n, o), fn(t);
    }
    var aA = {}, ko = {}, bi = {}, iA = {}, Si = !1, To = {}, xi = !1, Ei = !1, Ci = !1;
    function AA(e, t, n, o) {
      var l;
      if (l = ho(n, t.legacyContext), Eo(t, n), n.prototype && typeof n.prototype.render == "function") {
        var d = Ne(n) || "Unknown";
        aA[d] || (A("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), aA[d] = !0);
      }
      var v = Bo(e, t, n, o, l), D = hi();
      if (typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var R = Ne(n) || "Unknown";
        ko[R] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), ko[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var W = Ne(n) || "Unknown";
          ko[W] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", W, W, W), ko[W] = !0);
        }
        Ji(v, n, o, l), oA(e, t, v, n, o);
      } else if (lA(n), D) {
        var Y = t.treeContext, q = 1, ge = 0;
        t.treeContext = ci(Y, q, ge);
        try {
          It(e, t, v);
        } finally {
          t.treeContext = Y;
        }
      } else
        It(e, t, v);
      fn(t);
    }
    function lA(e) {
      {
        if (e && e.childContextTypes && A("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = Ne(e) || "Unknown";
          To[t] || (A("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), To[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = Ne(e) || "Unknown";
          iA[n] || (A("%s: Function components do not support getDerivedStateFromProps.", n), iA[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = Ne(e) || "Unknown";
          bi[o] || (A("%s: Function components do not support contextType.", o), bi[o] = !0);
        }
      }
    }
    function Di(e, t) {
      if (e && e.defaultProps) {
        var n = bt({}, t), o = e.defaultProps;
        for (var l in o)
          n[l] === void 0 && (n[l] = o[l]);
        return n;
      }
      return t;
    }
    function sA(e, t, n, o, l) {
      Eo(t, n.render);
      var d = Bo(e, t, n.render, o, l), v = hi();
      if (v) {
        var D = t.treeContext, R = 1, W = 0;
        t.treeContext = ci(D, R, W);
        try {
          It(e, t, d);
        } finally {
          t.treeContext = D;
        }
      } else
        It(e, t, d);
      fn(t);
    }
    function fl(e, t, n, o, l) {
      var d = n.type, v = Di(d, o);
      Pi(e, t, d, v, l);
    }
    function hl(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (Ci || (Ci = !0, A("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var l = o.children;
      typeof l != "function" && A("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var d = Ln(n), v = l(d);
      It(e, t, v);
    }
    function uA(e, t, n, o) {
      var l = n._context, d = o.value, v = o.children, D;
      D = t.context, t.context = Wi(l, d), It(e, t, v), t.context = Zi(l), D !== t.context && A("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function pl(e, t, n, o, l) {
      fr(t, "Lazy");
      var d = n._payload, v = n._init, D = v(d), R = Di(D, o);
      Pi(e, t, D, R, l), fn(t);
    }
    function Pi(e, t, n, o, l) {
      if (typeof n == "function")
        if (Po(n)) {
          dl(e, t, n, o);
          return;
        } else {
          AA(e, t, n, o);
          return;
        }
      if (typeof n == "string") {
        wi(e, t, n, o);
        return;
      }
      switch (n) {
        case Ja:
        case Va:
        case Pt:
        case ji:
        case ea: {
          It(e, t, o.children);
          return;
        }
        case io: {
          fr(t, "SuspenseList"), It(e, t, o.children), fn(t);
          return;
        }
        case Xa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case oa: {
          Do(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case ra: {
            sA(e, t, n, o, l);
            return;
          }
          case Ao: {
            fl(e, t, n, o, l);
            return;
          }
          case ta: {
            uA(e, t, n, o);
            return;
          }
          case na: {
            hl(e, t, n, o);
            return;
          }
          case Fr: {
            pl(e, t, n, o);
            return;
          }
        }
      var d = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + d));
    }
    function vl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (xi || A("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xi = !0), e.entries === t && (Ei || A("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ei = !0);
    }
    function It(e, t, n) {
      try {
        return gl(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (xn = xn !== null ? xn : yi()), o;
      }
    }
    function gl(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case LA: {
            var o = n, l = o.type, d = o.props, v = o.ref;
            Pi(e, t, l, d, v);
            return;
          }
          case Oi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Fr: {
            var D = n, R = D._payload, W = D._init, Y;
            try {
              Y = W(R);
            } catch (Xr) {
              throw typeof Xr == "object" && Xr !== null && typeof Xr.then == "function" && fr(t, "Lazy"), Xr;
            }
            It(e, t, Y);
            return;
          }
        }
        if (Ot(n)) {
          Qa(e, t, n);
          return;
        }
        var q = NA(n);
        if (q) {
          vl(n, q);
          var ge = q.call(n);
          if (ge) {
            var Te = ge.next();
            if (!Te.done) {
              var rt = [];
              do
                rt.push(Te.value), Te = ge.next();
              while (!Te.done);
              Qa(e, t, rt);
              return;
            }
            return;
          }
        }
        var pr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (pr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : pr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var vr = t.blockedSegment;
        vr.lastPushedText = Mi(t.blockedSegment.chunks, n, e.responseState, vr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var En = t.blockedSegment;
        En.lastPushedText = Mi(t.blockedSegment.chunks, "" + n, e.responseState, En.lastPushedText);
        return;
      }
      typeof n == "function" && A("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Qa(e, t, n) {
      for (var o = n.length, l = 0; l < o; l++) {
        var d = t.treeContext;
        t.treeContext = ci(d, o, l);
        try {
          mt(e, t, n[l]);
        } finally {
          t.treeContext = d;
        }
      }
    }
    function ml(e, t, n) {
      var o = t.blockedSegment, l = o.chunks.length, d = Ra(
        e,
        l,
        null,
        o.formatContext,
        // Adopt the parent segment's leading text embed
        o.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      o.children.push(d), o.lastPushedText = !1;
      var v = dr(e, t.node, t.blockedBoundary, d, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (v.componentStack = t.componentStack.parent);
      var D = v.ping;
      n.then(D, D);
    }
    function mt(e, t, n) {
      var o = t.blockedSegment.formatContext, l = t.legacyContext, d = t.context, v = null;
      v = t.componentStack;
      try {
        return It(e, t, n);
      } catch (D) {
        if (So(), typeof D == "object" && D !== null && typeof D.then == "function") {
          ml(e, t, D), t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, vo(d), t.componentStack = v;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, vo(d), t.componentStack = v, D;
      }
    }
    function yl(e, t, n, o) {
      var l = Co(e, o);
      if (t === null ? Kt(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = l, Ma(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function cA(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = Ta, fA(t, n, o);
    }
    function dA(e, t, n) {
      var o = e.blockedBoundary, l = e.blockedSegment;
      if (l.status = Ta, o === null)
        t.allPendingTasks--, t.status !== cr && (t.status = cr, t.destination !== null && k(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var d = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(d);
          {
            var v = "The server did not finish this Suspense boundary: ";
            d && typeof d.message == "string" ? d = v + d.message : d = v + String(d);
            var D = bn;
            bn = e;
            try {
              Ma(o, d);
            } finally {
              bn = D;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(W) {
          return dA(W, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var R = t.onAllReady;
          R();
        }
      }
    }
    function Yr(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Wr && Yr(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function fA(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = Gr;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Wr && Yr(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(cA, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Wr) {
          Yr(t, n);
          var l = t.completedSegments;
          l.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function wl(e, t) {
      var n = t.blockedSegment;
      if (n.status === Ba) {
        vo(t.context);
        var o = null;
        o = bn, bn = t;
        try {
          It(e, t, t.node), Qi(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Wr, fA(e, t.blockedBoundary, n);
        } catch (d) {
          if (So(), typeof d == "object" && d !== null && typeof d.then == "function") {
            var l = t.ping;
            d.then(l, l);
          } else
            t.abortSet.delete(t), n.status = Ia, yl(e, t.blockedBoundary, n, d);
        } finally {
          bn = o;
        }
      }
    }
    function Bi(e) {
      if (e.status !== cr) {
        var t = Gi(), n = Pa.current;
        Pa.current = tA;
        var o;
        o = xo.getCurrentStack, xo.getCurrentStack = yi;
        var l = gi;
        nA(e.responseState);
        try {
          var d = e.pingedTasks, v;
          for (v = 0; v < d.length; v++) {
            var D = d[v];
            wl(e, D);
          }
          d.splice(0, v), e.destination !== null && ja(e, e.destination);
        } catch (R) {
          Co(e, R), Kt(e, R);
        } finally {
          nA(l), Pa.current = n, xo.getCurrentStack = o, n === tA && vo(t);
        }
      }
    }
    function hr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Ba: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, un(t, e.responseState, o);
        }
        case Wr: {
          n.status = ka;
          for (var l = !0, d = n.chunks, v = 0, D = n.children, R = 0; R < D.length; R++) {
            for (var W = D[R]; v < W.index; v++)
              w(t, d[v]);
            l = Io(e, t, W);
          }
          for (; v < d.length - 1; v++)
            w(t, d[v]);
          return v < d.length && (l = C(t, d[v])), l;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Io(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return hr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return OA(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), hr(e, t, n), FA(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var l = o.id = Yt(e.responseState);
        return rr(t, e.responseState, l), hr(e, t, n), Qn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), rr(t, e.responseState, o.id), hr(e, t, n), Qn(t, e.responseState);
        QA(t, e.responseState);
        var d = o.completedSegments;
        if (d.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var v = d[0];
        return Io(e, t, v), jA(t, e.responseState);
      }
    }
    function bl(e, t, n) {
      return TA(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function ki(e, t, n) {
      return ao(t, e.responseState, n.formatContext, n.id), Io(e, t, n), $o(t, n.formatContext);
    }
    function Ro(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        hA(e, t, n, d);
      }
      return o.length = 0, gt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Oa(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        if (!hA(e, t, n, d))
          return l++, o.splice(0, l), !1;
      }
      return o.splice(0, l), !0;
    }
    function hA(e, t, n, o) {
      if (o.status === ka)
        return !0;
      var l = o.id;
      if (l === -1) {
        var d = o.id = n.rootSegmentID;
        if (d === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ki(e, t, o);
      } else
        return ki(e, t, o), J(t, e.responseState, l);
    }
    function ja(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (Io(e, t, n), e.completedRootSegment = null, mn(t, e.responseState));
        var o = e.clientRenderedBoundaries, l;
        for (l = 0; l < o.length; l++) {
          var d = o[l];
          if (!bl(e, t, d)) {
            e.destination = null, l++, o.splice(0, l);
            return;
          }
        }
        o.splice(0, l);
        var v = e.completedBoundaries;
        for (l = 0; l < v.length; l++) {
          var D = v[l];
          if (!Ro(e, t, D)) {
            e.destination = null, l++, v.splice(0, l);
            return;
          }
        }
        v.splice(0, l);
        var R = e.partialBoundaries;
        for (l = 0; l < R.length; l++) {
          var W = R[l];
          if (!Oa(e, t, W)) {
            e.destination = null, l++, R.splice(0, l);
            return;
          }
        }
        R.splice(0, l);
        var Y = e.completedBoundaries;
        for (l = 0; l < Y.length; l++) {
          var q = Y[l];
          if (!Ro(e, t, q)) {
            e.destination = null, l++, Y.splice(0, l);
            return;
          }
        }
        Y.splice(0, l);
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && A("There was still abortable task at the root when we closed. This is a bug in React."), k(t));
      }
    }
    function pA(e) {
      P(function() {
        return Bi(e);
      });
    }
    function Sl(e, t) {
      if (e.status === mi) {
        e.status = cr, L(t, e.fatalError);
        return;
      }
      if (e.status !== cr && e.destination === null) {
        e.destination = t;
        try {
          ja(e, t);
        } catch (n) {
          Co(e, n), Kt(e, n);
        }
      }
    }
    function vA(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return dA(o, e, t);
        }), n.clear(), e.destination !== null && ja(e, e.destination);
      } catch (o) {
        Co(e, o), Kt(e, o);
      }
    }
    function Ti() {
    }
    function gA(e, t, n, o) {
      var l = !1, d = null, v = "", D = {
        push: function(q) {
          return q !== null && (v += q), !0;
        },
        destroy: function(q) {
          l = !0, d = q;
        }
      }, R = !1;
      function W() {
        R = !0;
      }
      var Y = _r(e, RA(n, t ? t.identifierPrefix : void 0), MA(), 1 / 0, Ti, void 0, W);
      if (pA(Y), vA(Y, o), Sl(Y, D), l)
        throw d;
      if (!R)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return v;
    }
    function xl(e, t) {
      return gA(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function mA(e, t) {
      return gA(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function El() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Qo.renderToNodeStream = El, Qo.renderToStaticMarkup = mA, Qo.renderToStaticNodeStream = r, Qo.renderToString = xl, Qo.version = s;
  }()), Qo;
}
var wA = {}, Vl;
function ru() {
  return Vl || (Vl = 1, Ml.env.NODE_ENV !== "production" && function() {
    var f = B, s = "18.3.1", h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        y("warn", r, t);
      }
    }
    function A(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        y("error", r, t);
      }
    }
    function y(r, e, t) {
      {
        var n = h.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (e += "%s", t = t.concat([o]));
        var l = t.map(function(d) {
          return String(d);
        });
        l.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, l);
      }
    }
    function P(r) {
      r();
    }
    var E = 512, w = null, C = 0;
    function H(r) {
      w = new Uint8Array(E), C = 0;
    }
    function k(r, e) {
      if (e.length !== 0) {
        if (e.length > E) {
          C > 0 && (r.enqueue(new Uint8Array(w.buffer, 0, C)), w = new Uint8Array(E), C = 0), r.enqueue(e);
          return;
        }
        var t = e, n = w.length - C;
        n < t.length && (n === 0 ? r.enqueue(w) : (w.set(t.subarray(0, n), C), r.enqueue(w), t = t.subarray(n)), w = new Uint8Array(E), C = 0), w.set(t, C), C += t.length;
      }
    }
    function F(r, e) {
      return k(r, e), !0;
    }
    function U(r) {
      w && C > 0 && (r.enqueue(new Uint8Array(w.buffer, 0, C)), w = null, C = 0);
    }
    function L(r) {
      r.close();
    }
    var _ = new TextEncoder();
    function j(r) {
      return _.encode(r);
    }
    function T(r) {
      return _.encode(r);
    }
    function K(r, e) {
      typeof r.error == "function" ? r.error(e) : r.close();
    }
    function te(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function X(r) {
      try {
        return G(r), !1;
      } catch {
        return !0;
      }
    }
    function G(r) {
      return "" + r;
    }
    function $(r, e) {
      if (X(r))
        return A("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", e, te(r)), G(r);
    }
    function Z(r, e) {
      if (X(r))
        return A("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", e, te(r)), G(r);
    }
    function re(r) {
      if (X(r))
        return A("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", te(r)), G(r);
    }
    var ne = Object.prototype.hasOwnProperty, ue = 0, ae = 1, ce = 2, ve = 3, de = 4, Me = 5, Ce = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", fe = new RegExp("^[" + ee + "][" + le + "]*$"), be = {}, oe = {};
    function me(r) {
      return ne.call(oe, r) ? !0 : ne.call(be, r) ? !1 : fe.test(r) ? (oe[r] = !0, !0) : (be[r] = !0, A("Invalid attribute name: `%s`", r), !1);
    }
    function Oe(r, e, t, n) {
      if (t !== null && t.type === ue)
        return !1;
      switch (typeof e) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (t !== null)
            return !t.acceptsBooleans;
          var o = r.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Se(r) {
      return Le.hasOwnProperty(r) ? Le[r] : null;
    }
    function Ae(r, e, t, n, o, l, d) {
      this.acceptsBooleans = e === ce || e === ve || e === de, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = t, this.propertyName = r, this.type = e, this.sanitizeURL = l, this.removeEmptyString = d;
    }
    var Le = {}, Zt = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Zt.forEach(function(r) {
      Le[r] = new Ae(
        r,
        ue,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
      var e = r[0], t = r[1];
      Le[e] = new Ae(
        e,
        ae,
        !1,
        // mustUseProperty
        t,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ce,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ce,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ve,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ve,
        !0,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Le[r] = new Ae(
        r,
        de,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      Le[r] = new Ae(
        r,
        Ce,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(r) {
      Le[r] = new Ae(
        r,
        Me,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gt = /[\-\:]([a-z])/g, tt = function(r) {
      return r[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Gt, tt);
      Le[e] = new Ae(
        e,
        ae,
        !1,
        // mustUseProperty
        r,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Gt, tt);
      Le[e] = new Ae(
        e,
        ae,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(r) {
      var e = r.replace(Gt, tt);
      Le[e] = new Ae(
        e,
        ae,
        !1,
        // mustUseProperty
        r,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ae,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var yt = "xlinkHref";
    Le[yt] = new Ae(
      "xlinkHref",
      ae,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(r) {
      Le[r] = new Ae(
        r,
        ae,
        !1,
        // mustUseProperty
        r.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var xe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ue(r, e) {
      return r + e.charAt(0).toUpperCase() + e.substring(1);
    }
    var Pe = ["Webkit", "ms", "Moz", "O"];
    Object.keys(xe).forEach(function(r) {
      Pe.forEach(function(e) {
        xe[Ue(e, r)] = xe[r];
      });
    });
    var Ie = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function $e(r, e) {
      Ie[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || A("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), e.onChange || e.readOnly || e.disabled || e.checked == null || A("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function nt(r, e) {
      if (r.indexOf("-") === -1)
        return typeof e.is == "string";
      switch (r) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var We = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Je = {}, dt = new RegExp("^(aria)-[" + le + "]*$"), Rt = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function gr(r, e) {
      {
        if (ne.call(Je, e) && Je[e])
          return !0;
        if (Rt.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = We.hasOwnProperty(t) ? t : null;
          if (n == null)
            return A("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Je[e] = !0, !0;
          if (e !== n)
            return A("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), Je[e] = !0, !0;
        }
        if (dt.test(e)) {
          var o = e.toLowerCase(), l = We.hasOwnProperty(o) ? o : null;
          if (l == null)
            return Je[e] = !0, !1;
          if (e !== l)
            return A("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, l), Je[e] = !0, !0;
        }
      }
      return !0;
    }
    function St(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = gr(r, n);
          o || t.push(n);
        }
        var l = t.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        t.length === 1 ? A("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r) : t.length > 1 && A("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r);
      }
    }
    function et(r, e) {
      nt(r, e) || St(r, e);
    }
    var Xe = !1;
    function Gn(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !Xe && (Xe = !0, r === "select" && e.multiple ? A("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : A("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var _n = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Yn = function() {
    };
    {
      var Ze = {}, Xn = /^on./, mr = /^on[^A-Z]/, yr = new RegExp("^(aria)-[" + le + "]*$"), Vn = new RegExp("^(aria)[A-Z][" + le + "]*$");
      Yn = function(r, e, t, n) {
        if (ne.call(Ze, e) && Ze[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return A("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ze[e] = !0, !0;
        if (n != null) {
          var l = n.registrationNameDependencies, d = n.possibleRegistrationNames;
          if (l.hasOwnProperty(e))
            return !0;
          var v = d.hasOwnProperty(o) ? d[o] : null;
          if (v != null)
            return A("Invalid event handler property `%s`. Did you mean `%s`?", e, v), Ze[e] = !0, !0;
          if (Xn.test(e))
            return A("Unknown event handler property `%s`. It will be ignored.", e), Ze[e] = !0, !0;
        } else if (Xn.test(e))
          return mr.test(e) && A("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), Ze[e] = !0, !0;
        if (yr.test(e) || Vn.test(e))
          return !0;
        if (o === "innerhtml")
          return A("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ze[e] = !0, !0;
        if (o === "aria")
          return A("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ze[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return A("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), Ze[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return A("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), Ze[e] = !0, !0;
        var D = Se(e), R = D !== null && D.type === ue;
        if (_n.hasOwnProperty(o)) {
          var W = _n[o];
          if (W !== e)
            return A("Invalid DOM property `%s`. Did you mean `%s`?", e, W), Ze[e] = !0, !0;
        } else if (!R && e !== o)
          return A("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), Ze[e] = !0, !0;
        return typeof t == "boolean" && Oe(e, t, D) ? (t ? A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), Ze[e] = !0, !0) : R ? !0 : Oe(e, t, D) ? (Ze[e] = !0, !1) : ((t === "false" || t === "true") && D !== null && D.type === ve && (A("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), Ze[e] = !0), !0);
      };
    }
    var Cn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var l = Yn(r, o, e[o], t);
          l || n.push(o);
        }
        var d = n.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        n.length === 1 ? A("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r) : n.length > 1 && A("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r);
      }
    };
    function Kr(r, e, t) {
      nt(r, e) || Cn(r, e, t);
    }
    var Jn = function() {
    };
    {
      var $t = /^(?:webkit|moz|o)[A-Z]/, Kn = /^-ms-/, wr = /-(.)/g, at = /;\s*$/, Mt = {}, qt = {}, Re = !1, en = !1, Dn = function(r) {
        return r.replace(wr, function(e, t) {
          return t.toUpperCase();
        });
      }, hn = function(r) {
        Mt.hasOwnProperty(r) && Mt[r] || (Mt[r] = !0, A(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dn(r.replace(Kn, "ms-"))
        ));
      }, Qt = function(r) {
        Mt.hasOwnProperty(r) && Mt[r] || (Mt[r] = !0, A("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, Pn = function(r, e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, A(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(at, "")));
      }, _t = function(r, e) {
        Re || (Re = !0, A("`NaN` is an invalid value for the `%s` css style property.", r));
      }, Ke = function(r, e) {
        en || (en = !0, A("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Jn = function(r, e) {
        r.indexOf("-") > -1 ? hn(r) : $t.test(r) ? Qt(r) : at.test(e) && Pn(r, e), typeof e == "number" && (isNaN(e) ? _t(r, e) : isFinite(e) || Ke(r, e));
      };
    }
    var $n = Jn, qn = /["'&<>]/;
    function br(r) {
      re(r);
      var e = "" + r, t = qn.exec(e);
      if (!t)
        return e;
      var n, o = "", l, d = 0;
      for (l = t.index; l < e.length; l++) {
        switch (e.charCodeAt(l)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        d !== l && (o += e.substring(d, l)), d = l + 1, o += n;
      }
      return d !== l ? o + e.substring(d, l) : o;
    }
    function Ge(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : br(r);
    }
    var er = /([A-Z])/g, $r = /^ms-/;
    function qr(r) {
      return r.replace(er, "-$1").toLowerCase().replace($r, "-ms-");
    }
    var Ot = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, tr = !1;
    function Bn(r) {
      !tr && Ot.test(r) && (tr = !0, A("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var tn = Array.isArray;
    function ft(r) {
      return tn(r);
    }
    var jt = T("<script>"), kn = T("<\/script>"), nn = T('<script src="'), rn = T('<script type="module" src="'), Ft = T('" async=""><\/script>');
    function on(r) {
      return re(r), ("" + r).replace(ht, Sr);
    }
    var ht = /(<\/|<)(s)(cript)/gi, Sr = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function xr(r, e, t, n, o) {
      var l = r === void 0 ? "" : r, d = e === void 0 ? jt : T('<script nonce="' + Ge(e) + '">'), v = [];
      if (t !== void 0 && v.push(d, j(on(t)), kn), n !== void 0)
        for (var D = 0; D < n.length; D++)
          v.push(nn, j(Ge(n[D])), Ft);
      if (o !== void 0)
        for (var R = 0; R < o.length; R++)
          v.push(rn, j(Ge(o[R])), Ft);
      return {
        bootstrapChunks: v,
        startInlineScript: d,
        placeholderPrefix: T(l + "P:"),
        segmentPrefix: T(l + "S:"),
        boundaryPrefix: l + "B:",
        idPrefix: l,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Yt = 0, _e = 1, Lt = 2, Ht = 3, an = 4, Tn = 5, xt = 6, Nt = 7;
    function it(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function An(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Lt : r === "http://www.w3.org/1998/Math/MathML" ? Ht : Yt;
      return it(e, null);
    }
    function pn(r, e, t) {
      switch (e) {
        case "select":
          return it(_e, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return it(Lt, null);
        case "math":
          return it(Ht, null);
        case "foreignObject":
          return it(_e, null);
        case "table":
          return it(an, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return it(Tn, null);
        case "colgroup":
          return it(Nt, null);
        case "tr":
          return it(xt, null);
      }
      return r.insertionMode >= an || r.insertionMode === Yt ? it(_e, null) : r;
    }
    var In = null;
    function wt(r) {
      var e = r.nextSuspenseID++;
      return T(r.boundaryPrefix + e.toString(16));
    }
    function Ut(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function At(r) {
      return Ge(r);
    }
    var Rn = T("<!-- -->");
    function qe(r, e, t, n) {
      return e === "" ? n : (n && r.push(Rn), r.push(j(At(e))), !0);
    }
    function pt(r, e, t, n) {
      t && n && r.push(Rn);
    }
    var a = /* @__PURE__ */ new Map();
    function c(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = T(Ge(qr(r)));
      return a.set(r, t), t;
    }
    var g = T(' style="'), x = T(":"), Q = T(";");
    function I(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (ne.call(t, o)) {
          var l = t[o];
          if (!(l == null || typeof l == "boolean" || l === "")) {
            var d = void 0, v = void 0, D = o.indexOf("--") === 0;
            D ? (d = j(Ge(o)), Z(l, o), v = j(Ge(("" + l).trim()))) : ($n(o, l), d = c(o), typeof l == "number" ? l !== 0 && !ne.call(xe, o) ? v = j(l + "px") : v = j("" + l) : (Z(l, o), v = j(Ge(("" + l).trim())))), n ? (n = !1, r.push(g, d, x, v)) : r.push(Q, d, x, v);
          }
        }
      n || r.push(ie);
    }
    var N = T(" "), V = T('="'), ie = T('"'), he = T('=""');
    function se(r, e, t, n) {
      switch (t) {
        case "style": {
          I(r, e, n);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(t.length > 2 && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N"))
      ) {
        var o = Se(t);
        if (o !== null) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!o.acceptsBooleans)
                return;
          }
          var l = o.attributeName, d = j(l);
          switch (o.type) {
            case ve:
              n && r.push(N, d, he);
              return;
            case de:
              n === !0 ? r.push(N, d, he) : n === !1 || r.push(N, d, V, j(Ge(n)), ie);
              return;
            case Me:
              isNaN(n) || r.push(N, d, V, j(Ge(n)), ie);
              break;
            case Ce:
              !isNaN(n) && n >= 1 && r.push(N, d, V, j(Ge(n)), ie);
              break;
            default:
              o.sanitizeURL && ($(n, l), n = "" + n, Bn(n)), r.push(N, d, V, j(Ge(n)), ie);
          }
        } else if (me(t)) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var v = t.toLowerCase().slice(0, 5);
              if (v !== "data-" && v !== "aria-")
                return;
            }
          }
          r.push(N, j(t), V, j(Ge(n)), ie);
        }
      }
    }
    var Be = T(">"), lt = T("/>");
    function st(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (re(n), r.push(j("" + n)));
      }
    }
    var ut = !1, ln = !1, zt = !1, Mn = !1, sn = !1, vn = !1, Xt = !1;
    function gn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = ft(t);
          r.multiple && !n ? A("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && A("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Na(r, e, t) {
      $e("select", e), gn(e, "value"), gn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !zt && (A("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), zt = !0), r.push(Et("select"));
      var n = null, o = null;
      for (var l in e)
        if (ne.call(e, l)) {
          var d = e[l];
          if (d == null)
            continue;
          switch (l) {
            case "children":
              n = d;
              break;
            case "dangerouslySetInnerHTML":
              o = d;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              se(r, t, l, d);
              break;
          }
        }
      return r.push(Be), st(r, o, n), n;
    }
    function Ua(r) {
      var e = "";
      return f.Children.forEach(r, function(t) {
        t != null && (e += t, !sn && typeof t != "string" && typeof t != "number" && (sn = !0, A("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Er = T(' selected=""');
    function Wt(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Et("option"));
      var l = null, d = null, v = null, D = null;
      for (var R in e)
        if (ne.call(e, R)) {
          var W = e[R];
          if (W == null)
            continue;
          switch (R) {
            case "children":
              l = W;
              break;
            case "selected":
              v = W, Xt || (A("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Xt = !0);
              break;
            case "dangerouslySetInnerHTML":
              D = W;
              break;
            case "value":
              d = W;
            default:
              se(r, t, R, W);
              break;
          }
        }
      if (o != null) {
        var Y;
        if (d !== null ? ($(d, "value"), Y = "" + d) : (D !== null && (vn || (vn = !0, A("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Y = Ua(l)), ft(o))
          for (var q = 0; q < o.length; q++) {
            $(o[q], "value");
            var ge = "" + o[q];
            if (ge === Y) {
              r.push(Er);
              break;
            }
          }
        else
          $(o, "select.value"), "" + o === Y && r.push(Er);
      } else v && r.push(Er);
      return r.push(Be), st(r, D, l), l;
    }
    function za(r, e, t) {
      $e("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !ln && (A("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), ln = !0), e.value !== void 0 && e.defaultValue !== void 0 && !ut && (A("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), ut = !0), r.push(Et("input"));
      var n = null, o = null, l = null, d = null;
      for (var v in e)
        if (ne.call(e, v)) {
          var D = e[v];
          if (D == null)
            continue;
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              d = D;
              break;
            case "defaultValue":
              o = D;
              break;
            case "checked":
              l = D;
              break;
            case "value":
              n = D;
              break;
            default:
              se(r, t, v, D);
              break;
          }
        }
      return l !== null ? se(r, t, "checked", l) : d !== null && se(r, t, "checked", d), n !== null ? se(r, t, "value", n) : o !== null && se(r, t, "value", o), r.push(lt), null;
    }
    function Vt(r, e, t) {
      $e("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Mn && (A("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Mn = !0), r.push(Et("textarea"));
      var n = null, o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              l = v;
              break;
            case "value":
              n = v;
              break;
            case "defaultValue":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              se(r, t, d, v);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(Be), l != null) {
        if (A("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ft(l)) {
          if (l.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          re(l[0]), n = "" + l[0];
        }
        re(l), n = "" + l;
      }
      return typeof n == "string" && n[0] === `
` && r.push(yn), n !== null && ($(n, "value"), r.push(j(At("" + n)))), null;
    }
    function eo(r, e, t, n) {
      r.push(Et(t));
      for (var o in e)
        if (ne.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(t + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              se(r, n, o, l);
              break;
          }
        }
      return r.push(lt), null;
    }
    function Cr(r, e, t) {
      r.push(Et("menuitem"));
      for (var n in e)
        if (ne.call(e, n)) {
          var o = e[n];
          if (o == null)
            continue;
          switch (n) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              se(r, t, n, o);
              break;
          }
        }
      return r.push(Be), null;
    }
    function Qe(r, e, t) {
      r.push(Et("title"));
      var n = null;
      for (var o in e)
        if (ne.call(e, o)) {
          var l = e[o];
          if (l == null)
            continue;
          switch (o) {
            case "children":
              n = l;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              se(r, t, o, l);
              break;
          }
        }
      r.push(Be);
      {
        var d = Array.isArray(n) && n.length < 2 ? n[0] || null : n;
        Array.isArray(n) && n.length > 1 ? A("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && d.$$typeof != null ? A("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : d != null && typeof d != "string" && typeof d != "number" && A("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return n;
    }
    function mn(r, e, t, n) {
      r.push(Et(t));
      var o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            default:
              se(r, n, d, v);
              break;
          }
        }
      return r.push(Be), st(r, l, o), typeof o == "string" ? (r.push(j(At(o))), null) : o;
    }
    function Dr(r, e, t, n) {
      r.push(Et(t));
      var o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            case "style":
              I(r, n, v);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              me(d) && typeof v != "function" && typeof v != "symbol" && r.push(N, j(d), V, j(Ge(v)), ie);
              break;
          }
        }
      return r.push(Be), st(r, l, o), o;
    }
    var yn = T(`
`);
    function un(r, e, t, n) {
      r.push(Et(t));
      var o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var v = e[d];
          if (v == null)
            continue;
          switch (d) {
            case "children":
              o = v;
              break;
            case "dangerouslySetInnerHTML":
              l = v;
              break;
            default:
              se(r, n, d, v);
              break;
          }
        }
      if (r.push(Be), l != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof l != "object" || !("__html" in l))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var D = l.__html;
        D != null && (typeof D == "string" && D.length > 0 && D[0] === `
` ? r.push(yn, j(D)) : (re(D), r.push(j("" + D))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(yn), o;
    }
    var Pr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, cn = /* @__PURE__ */ new Map();
    function Et(r) {
      var e = cn.get(r);
      if (e === void 0) {
        if (!Pr.test(r))
          throw new Error("Invalid tag: " + r);
        e = T("<" + r), cn.set(r, e);
      }
      return e;
    }
    var to = T("<!DOCTYPE html>");
    function nr(r, e, t, n, o) {
      switch (et(e, t), Gn(e, t), Kr(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && A("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Lt && o.insertionMode !== Ht && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && A("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return Na(r, t, n);
        case "option":
          return Wt(r, t, n, o);
        case "textarea":
          return Vt(r, t, n);
        case "input":
          return za(r, t, n);
        case "menuitem":
          return Cr(r, t, n);
        case "title":
          return Qe(r, t, n);
        case "listing":
        case "pre":
          return un(r, t, e, n);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return eo(r, t, e, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return mn(r, t, e, n);
        case "html":
          return o.insertionMode === Yt && r.push(to), mn(r, t, e, n);
        default:
          return e.indexOf("-") === -1 && typeof t.is != "string" ? mn(r, t, e, n) : Dr(r, t, e, n);
      }
    }
    var Ho = T("</"), Br = T(">");
    function No(r, e, t) {
      switch (e) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          r.push(Ho, j(e), Br);
      }
    }
    function Wa(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        k(r, t[n]);
      return n < t.length ? F(r, t[n]) : !0;
    }
    var Za = T('<template id="'), kr = T('"></template>');
    function Uo(r, e, t) {
      k(r, Za), k(r, e.placeholderPrefix);
      var n = j(t.toString(16));
      return k(r, n), F(r, kr);
    }
    var rr = T("<!--$-->"), no = T('<!--$?--><template id="'), Ga = T('"></template>'), Qn = T("<!--$!-->"), ro = T("<!--/$-->"), oo = T("<template"), On = T('"'), or = T(' data-dgst="'), Tr = T(' data-msg="'), zo = T(' data-stck="'), Wo = T("></template>");
    function Zo(r, e) {
      return F(r, rr);
    }
    function Ir(r, e, t) {
      if (k(r, no), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(r, t), F(r, Ga);
    }
    function vt(r, e, t, n, o) {
      var l;
      return l = F(r, Qn), k(r, oo), t && (k(r, or), k(r, j(Ge(t))), k(r, On)), n && (k(r, Tr), k(r, j(Ge(n))), k(r, On)), o && (k(r, zo), k(r, j(Ge(o))), k(r, On)), l = F(r, Wo), l;
    }
    function Go(r, e) {
      return F(r, ro);
    }
    function Rr(r, e) {
      return F(r, ro);
    }
    function _a(r, e) {
      return F(r, ro);
    }
    var _o = T('<div hidden id="'), Mr = T('">'), Yo = T("</div>"), Xo = T('<svg aria-hidden="true" style="display:none" id="'), Qr = T('">'), Or = T("</svg>"), Vo = T('<math aria-hidden="true" style="display:none" id="'), Jo = T('">'), Ko = T("</math>"), ao = T('<table hidden id="'), $o = T('">'), i = T("</table>"), u = T('<table hidden><tbody id="'), p = T('">'), b = T("</tbody></table>"), O = T('<table hidden><tr id="'), M = T('">'), z = T("</tr></table>"), J = T('<table hidden><colgroup id="'), pe = T('">'), we = T("</colgroup></table>");
    function ye(r, e, t, n) {
      switch (t.insertionMode) {
        case Yt:
        case _e:
          return k(r, _o), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, Mr);
        case Lt:
          return k(r, Xo), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, Qr);
        case Ht:
          return k(r, Vo), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, Jo);
        case an:
          return k(r, ao), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, $o);
        case Tn:
          return k(r, u), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, p);
        case xt:
          return k(r, O), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, M);
        case Nt:
          return k(r, J), k(r, e.segmentPrefix), k(r, j(n.toString(16))), F(r, pe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function je(r, e) {
      switch (e.insertionMode) {
        case Yt:
        case _e:
          return F(r, Yo);
        case Lt:
          return F(r, Or);
        case Ht:
          return F(r, Ko);
        case an:
          return F(r, i);
        case Tn:
          return F(r, b);
        case xt:
          return F(r, z);
        case Nt:
          return F(r, we);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var gt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Ct = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', jr = T(gt + ';$RS("'), qo = T('$RS("'), ar = T('","'), TA = T('")<\/script>');
    function IA(r, e, t) {
      k(r, e.startInlineScript), e.sentCompleteSegmentFunction ? k(r, qo) : (e.sentCompleteSegmentFunction = !0, k(r, jr)), k(r, e.segmentPrefix);
      var n = j(t.toString(16));
      return k(r, n), k(r, ar), k(r, e.placeholderPrefix), k(r, n), F(r, TA);
    }
    var Ya = T(Ct + ';$RC("'), RA = T('$RC("'), MA = T('","'), Mi = T('")<\/script>');
    function Qi(r, e, t, n) {
      if (k(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? k(r, RA) : (e.sentCompleteBoundaryFunction = !0, k(r, Ya)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = j(n.toString(16));
      return k(r, t), k(r, MA), k(r, e.segmentPrefix), k(r, o), F(r, Mi);
    }
    var QA = T(Dt + ';$RX("'), OA = T('$RX("'), jA = T('"'), FA = T(")<\/script>"), bt = T(",");
    function LA(r, e, t, n, o, l) {
      if (k(r, e.startInlineScript), e.sentClientRenderFunction ? k(r, OA) : (e.sentClientRenderFunction = !0, k(r, QA)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return k(r, t), k(r, jA), (n || o || l) && (k(r, bt), k(r, j(ea(n || "")))), (o || l) && (k(r, bt), k(r, j(ea(o || "")))), l && (k(r, bt), k(r, j(ea(l)))), F(r, FA);
    }
    var Oi = /[<\u2028\u2029]/g;
    function ea(r) {
      var e = JSON.stringify(r);
      return e.replace(Oi, function(t) {
        switch (t) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var Pt = Object.assign, ji = Symbol.for("react.element"), ta = Symbol.for("react.portal"), na = Symbol.for("react.fragment"), ra = Symbol.for("react.strict_mode"), oa = Symbol.for("react.profiler"), io = Symbol.for("react.provider"), Ao = Symbol.for("react.context"), Fr = Symbol.for("react.forward_ref"), Xa = Symbol.for("react.suspense"), Va = Symbol.for("react.suspense_list"), Ja = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), Fi = Symbol.for("react.scope"), HA = Symbol.for("react.debug_trace_mode"), NA = Symbol.for("react.legacy_hidden"), UA = Symbol.for("react.default_value"), Ka = Symbol.iterator, Ne = "@@iterator";
    function lo(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Ka && r[Ka] || r[Ne];
      return typeof e == "function" ? e : null;
    }
    function Li(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var o = e.displayName || e.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function $a(r) {
      return r.displayName || "Context";
    }
    function He(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case na:
          return "Fragment";
        case ta:
          return "Portal";
        case oa:
          return "Profiler";
        case ra:
          return "StrictMode";
        case Xa:
          return "Suspense";
        case Va:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Ao:
            var e = r;
            return $a(e) + ".Consumer";
          case io:
            var t = r;
            return $a(t._context) + ".Provider";
          case Fr:
            return Li(r, r.render, "ForwardRef");
          case Ja:
            var n = r.displayName || null;
            return n !== null ? n : He(r.type) || "Memo";
          case aa: {
            var o = r, l = o._payload, d = o._init;
            try {
              return He(d(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Lr = 0, qa, ei, ti, ni, Hi, Ni, ia;
    function Aa() {
    }
    Aa.__reactDisabledLog = !0;
    function so() {
      {
        if (Lr === 0) {
          qa = console.log, ei = console.info, ti = console.warn, ni = console.error, Hi = console.group, Ni = console.groupCollapsed, ia = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Aa,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Lr++;
      }
    }
    function ri() {
      {
        if (Lr--, Lr === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pt({}, r, {
              value: qa
            }),
            info: Pt({}, r, {
              value: ei
            }),
            warn: Pt({}, r, {
              value: ti
            }),
            error: Pt({}, r, {
              value: ni
            }),
            group: Pt({}, r, {
              value: Hi
            }),
            groupCollapsed: Pt({}, r, {
              value: Ni
            }),
            groupEnd: Pt({}, r, {
              value: ia
            })
          });
        }
        Lr < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Hr = h.ReactCurrentDispatcher, oi;
    function ir(r, e, t) {
      {
        if (oi === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            oi = n && n[1] || "";
          }
        return `
` + oi + r;
      }
    }
    var ai = !1, uo;
    {
      var zA = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new zA();
    }
    function co(r, e) {
      if (!r || ai)
        return "";
      {
        var t = uo.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      ai = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = Hr.current, Hr.current = null, so();
      try {
        if (e) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (Te) {
              n = Te;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (Te) {
              n = Te;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Te) {
            n = Te;
          }
          r();
        }
      } catch (Te) {
        if (Te && n && typeof Te.stack == "string") {
          for (var v = Te.stack.split(`
`), D = n.stack.split(`
`), R = v.length - 1, W = D.length - 1; R >= 1 && W >= 0 && v[R] !== D[W]; )
            W--;
          for (; R >= 1 && W >= 0; R--, W--)
            if (v[R] !== D[W]) {
              if (R !== 1 || W !== 1)
                do
                  if (R--, W--, W < 0 || v[R] !== D[W]) {
                    var Y = `
` + v[R].replace(" at new ", " at ");
                    return r.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", r.displayName)), typeof r == "function" && uo.set(r, Y), Y;
                  }
                while (R >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        ai = !1, Hr.current = l, ri(), Error.prepareStackTrace = o;
      }
      var q = r ? r.displayName || r.name : "", ge = q ? ir(q) : "";
      return typeof r == "function" && uo.set(r, ge), ge;
    }
    function Ui(r, e, t) {
      return co(r, !0);
    }
    function ii(r, e, t) {
      return co(r, !1);
    }
    function la(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function sa(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return co(r, la(r));
      if (typeof r == "string")
        return ir(r);
      switch (r) {
        case Xa:
          return ir("Suspense");
        case Va:
          return ir("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Fr:
            return ii(r.render);
          case Ja:
            return sa(r.type, e, t);
          case aa: {
            var n = r, o = n._payload, l = n._init;
            try {
              return sa(l(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ua = {}, fo = h.ReactDebugCurrentFrame;
    function ho(r) {
      if (r) {
        var e = r._owner, t = sa(r.type, r._source, e ? e.type : null);
        fo.setExtraStackFrame(t);
      } else
        fo.setExtraStackFrame(null);
    }
    function zi(r, e, t, n, o) {
      {
        var l = Function.call.bind(ne);
        for (var d in r)
          if (l(r, d)) {
            var v = void 0;
            try {
              if (typeof r[d] != "function") {
                var D = Error((n || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              v = r[d](e, d, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (ho(o), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, d, typeof v), ho(null)), v instanceof Error && !(v.message in ua) && (ua[v.message] = !0, ho(o), A("Failed %s type: %s", t, v.message), ho(null));
          }
      }
    }
    var Ar;
    Ar = {};
    var ca = {};
    Object.freeze(ca);
    function jn(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return ca;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var l = He(r) || "Unknown";
          zi(t, n, "context", l);
        }
        return n;
      }
    }
    function Ai(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = He(e) || "Unknown";
            Ar[o] || (Ar[o] = !0, A("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var l = r.getChildContext();
        for (var d in l)
          if (!(d in n))
            throw new Error((He(e) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var v = He(e) || "Unknown";
          zi(n, l, "child context", v);
        }
        return Pt({}, t, l);
      }
    }
    var lr;
    lr = {};
    var da = null, Fn = null;
    function fa(r) {
      r.context._currentValue = r.parentValue;
    }
    function ha(r) {
      r.context._currentValue = r.value;
    }
    function po(r, e) {
      if (r !== e) {
        fa(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          po(t, n);
        }
        ha(e);
      }
    }
    function vo(r) {
      fa(r);
      var e = r.parent;
      e !== null && vo(e);
    }
    function Wi(r) {
      var e = r.parent;
      e !== null && Wi(e), ha(r);
    }
    function Zi(r, e) {
      fa(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? po(t, e) : Zi(t, e);
    }
    function Gi(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? po(r, t) : Gi(r, t), ha(e);
    }
    function Ln(r) {
      var e = Fn, t = r;
      e !== t && (e === null ? Wi(t) : t === null ? vo(e) : e.depth === t.depth ? po(e, t) : e.depth > t.depth ? Zi(e, t) : Gi(e, t), Fn = t);
    }
    function li(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== lr && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = lr;
      var n = Fn, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return Fn = o, o;
    }
    function WA(r) {
      var e = Fn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && A("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === UA ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== lr && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = lr;
      }
      return Fn = e.parent;
    }
    function _i() {
      return Fn;
    }
    function Nr(r) {
      var e = r._currentValue;
      return e;
    }
    function go(r) {
      return r._reactInternals;
    }
    function si(r, e) {
      r._reactInternals = e;
    }
    var pa = {}, va = {}, ga, Ur, mo, yo, ma, wo, ya, wa, ui;
    {
      ga = /* @__PURE__ */ new Set(), Ur = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), ya = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), wa = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set();
      var Yi = /* @__PURE__ */ new Set();
      wo = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          Yi.has(t) || (Yi.add(t), A("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ma = function(r, e) {
        if (e === void 0) {
          var t = He(r) || "Component";
          yo.has(t) || (yo.add(t), A("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Xi(r, e) {
      {
        var t = r.constructor, n = t && He(t) || "ReactClass", o = n + "." + e;
        if (pa[o])
          return;
        A(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), pa[o] = !0;
      }
    }
    var Vi = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = go(r);
        n.queue === null ? Xi(r, "setState") : (n.queue.push(e), t != null && wo(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = go(r);
        n.replace = !0, n.queue = [e], t != null && wo(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = go(r);
        t.queue === null ? Xi(r, "forceUpdate") : e != null && wo(e, "setState");
      }
    };
    function ZA(r, e, t, n, o) {
      var l = t(o, n);
      ma(e, l);
      var d = l == null ? n : Pt({}, n, l);
      return d;
    }
    function Ji(r, e, t) {
      var n = ca, o = r.contextType;
      if ("contextType" in r) {
        var l = (
          // Allow null for conditional declaration
          o === null || o !== void 0 && o.$$typeof === Ao && o._context === void 0
        );
        if (!l && !ui.has(r)) {
          ui.add(r);
          var d = "";
          o === void 0 ? d = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? d = " However, it is set to a " + typeof o + "." : o.$$typeof === io ? d = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? d = " Did you accidentally pass the Context.Consumer instead?" : d = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", A("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", He(r) || "Component", d);
        }
      }
      typeof o == "object" && o !== null ? n = Nr(o) : n = t;
      var v = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (v.state === null || v.state === void 0)) {
          var D = He(r) || "Component";
          ga.has(D) || (ga.add(D), A("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, v.state === null ? "null" : "undefined", D));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function") {
          var R = null, W = null, Y = null;
          if (typeof v.componentWillMount == "function" && v.componentWillMount.__suppressDeprecationWarning !== !0 ? R = "componentWillMount" : typeof v.UNSAFE_componentWillMount == "function" && (R = "UNSAFE_componentWillMount"), typeof v.componentWillReceiveProps == "function" && v.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof v.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof v.componentWillUpdate == "function" && v.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof v.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), R !== null || W !== null || Y !== null) {
            var q = He(r) || "Component", ge = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mo.has(q) || (mo.add(q), A(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, q, ge, R !== null ? `
  ` + R : "", W !== null ? `
  ` + W : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return v;
    }
    function GA(r, e, t) {
      {
        var n = He(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? A("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : A("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && A("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && A("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && A("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && A("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && A("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !wa.has(e) && (wa.add(e), A("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && A("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && A("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", He(e) || "A pure component"), typeof r.componentDidUnmount == "function" && A("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && A("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && A("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && A("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var l = r.props !== t;
        r.props !== void 0 && l && A("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && A("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !Ur.has(e) && (Ur.add(e), A("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", He(e))), typeof r.getDerivedStateFromProps == "function" && A("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && A("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && A("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var d = r.state;
        d && (typeof d != "object" || ft(d)) && A("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && A("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function _A(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = He(r) || "Unknown";
          va[n] || (m(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), va[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (A("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", He(r) || "Component"), Vi.enqueueReplaceState(e, e.state, null));
    }
    function ci(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, l = r.replace;
        if (r.queue = null, r.replace = !1, l && o.length === 1)
          e.state = o[0];
        else {
          for (var d = l ? o[0] : e.state, v = !0, D = l ? 1 : 0; D < o.length; D++) {
            var R = o[D], W = typeof R == "function" ? R.call(e, d, t, n) : R;
            W != null && (v ? (v = !1, d = Pt({}, d, W)) : Pt(d, W));
          }
          e.state = d;
        }
      } else
        r.queue = null;
    }
    function bo(r, e, t, n) {
      GA(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Vi, r.props = t, r.state = o;
      var l = {
        queue: [],
        replace: !1
      };
      si(r, l);
      var d = e.contextType;
      if (typeof d == "object" && d !== null ? r.context = Nr(d) : r.context = n, r.state === t) {
        var v = He(e) || "Component";
        ya.has(v) || (ya.add(v), A("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
      }
      var D = e.getDerivedStateFromProps;
      typeof D == "function" && (r.state = ZA(r, e, D, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (_A(e, r), ci(l, r, t, n));
    }
    var YA = {
      id: 1,
      overflow: ""
    };
    function XA(r) {
      var e = r.overflow, t = r.id, n = t & ~VA(t);
      return n.toString(32) + e;
    }
    function di(r, e, t) {
      var n = r.id, o = r.overflow, l = ba(n) - 1, d = n & ~(1 << l), v = t + 1, D = ba(e) + l;
      if (D > 30) {
        var R = l - l % 5, W = (1 << R) - 1, Y = (d & W).toString(32), q = d >> R, ge = l - R, Te = ba(e) + ge, rt = v << ge, pr = rt | q, vr = Y + o;
        return {
          id: 1 << Te | pr,
          overflow: vr
        };
      } else {
        var En = v << l, Xr = En | d, Cl = o;
        return {
          id: 1 << D | Xr,
          overflow: Cl
        };
      }
    }
    function ba(r) {
      return 32 - JA(r);
    }
    function VA(r) {
      return 1 << ba(r) - 1;
    }
    var JA = Math.clz32 ? Math.clz32 : fi, KA = Math.log, wn = Math.LN2;
    function fi(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - (KA(e) / wn | 0) | 0;
    }
    function Sa(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var Fe = typeof Object.is == "function" ? Object.is : Sa, Bt = null, zr = null, sr = null, ke = null, Hn = !1, xa = !1, kt = 0, Tt = null, dn = 0, $A = 25, Jt = !1, Nn;
    function ur() {
      if (Bt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Jt && A("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Bt;
    }
    function qA(r, e) {
      if (e === null)
        return A("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Nn), !1;
      r.length !== e.length && A(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Nn, "[" + r.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var t = 0; t < e.length && t < r.length; t++)
        if (!Fe(r[t], e[t]))
          return !1;
      return !0;
    }
    function hi() {
      if (dn > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function So() {
      return ke === null ? sr === null ? (Hn = !1, sr = ke = hi()) : (Hn = !0, ke = sr) : ke.next === null ? (Hn = !1, ke = ke.next = hi()) : (Hn = !0, ke = ke.next), ke;
    }
    function el(r, e) {
      Bt = e, zr = r, Jt = !1, kt = 0;
    }
    function tl(r, e, t, n) {
      for (; xa; )
        xa = !1, kt = 0, dn += 1, ke = null, t = r(e, n);
      return pi(), t;
    }
    function Ea() {
      var r = kt !== 0;
      return r;
    }
    function pi() {
      Jt = !1, Bt = null, zr = null, xa = !1, sr = null, dn = 0, Tt = null, ke = null;
    }
    function Ki(r) {
      return Jt && A("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Nr(r);
    }
    function $i(r) {
      return Nn = "useContext", ur(), Nr(r);
    }
    function vi(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function nl(r) {
      return Nn = "useState", qi(
        vi,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function qi(r, e, t) {
      if (r !== vi && (Nn = "useReducer"), Bt = ur(), ke = So(), Hn) {
        var n = ke.queue, o = n.dispatch;
        if (Tt !== null) {
          var l = Tt.get(n);
          if (l !== void 0) {
            Tt.delete(n);
            var d = ke.memoizedState, v = l;
            do {
              var D = v.action;
              Jt = !0, d = r(d, D), Jt = !1, v = v.next;
            } while (v !== null);
            return ke.memoizedState = d, [d, o];
          }
        }
        return [ke.memoizedState, o];
      } else {
        Jt = !0;
        var R;
        r === vi ? R = typeof e == "function" ? e() : e : R = t !== void 0 ? t(e) : e, Jt = !1, ke.memoizedState = R;
        var W = ke.queue = {
          last: null,
          dispatch: null
        }, Y = W.dispatch = al.bind(null, Bt, W);
        return [ke.memoizedState, Y];
      }
    }
    function eA(r, e) {
      Bt = ur(), ke = So();
      var t = e === void 0 ? null : e;
      if (ke !== null) {
        var n = ke.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (qA(t, o))
            return n[0];
        }
      }
      Jt = !0;
      var l = r();
      return Jt = !1, ke.memoizedState = [l, t], l;
    }
    function rl(r) {
      Bt = ur(), ke = So();
      var e = ke.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), ke.memoizedState = t, t;
      } else
        return e;
    }
    function ol(r, e) {
      Nn = "useLayoutEffect", A("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function al(r, e, t) {
      if (dn >= $A)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === Bt) {
        xa = !0;
        var n = {
          action: t,
          next: null
        };
        Tt === null && (Tt = /* @__PURE__ */ new Map());
        var o = Tt.get(e);
        if (o === void 0)
          Tt.set(e, n);
        else {
          for (var l = o; l.next !== null; )
            l = l.next;
          l.next = n;
        }
      }
    }
    function il(r, e) {
      return eA(function() {
        return r;
      }, e);
    }
    function Al(r, e, t) {
      return ur(), e(r._source);
    }
    function ll(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function Ca(r) {
      return ur(), r;
    }
    function tA() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function gi() {
      return ur(), [!1, tA];
    }
    function nA() {
      var r = zr, e = XA(r.treeContext), t = xo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = kt++;
      return Ut(t, e, n);
    }
    function Da() {
    }
    var Pa = {
      readContext: Ki,
      useContext: $i,
      useMemo: eA,
      useReducer: qi,
      useRef: rl,
      useState: nl,
      useInsertionEffect: Da,
      useLayoutEffect: ol,
      useCallback: il,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Da,
      // Effects are not run in the server environment.
      useEffect: Da,
      // Debugging effect
      useDebugValue: Da,
      useDeferredValue: Ca,
      useTransition: gi,
      useId: nA,
      // Subscriptions are not setup in a server environment.
      useMutableSource: Al,
      useSyncExternalStore: ll
    }, xo = null;
    function Ba(r) {
      xo = r;
    }
    function Wr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += ir(t.type, null, null);
              break;
            case 1:
              e += ii(t.type, null, null);
              break;
            case 2:
              e += Ui(t.type, null, null);
              break;
          }
          t = t.parent;
        } while (t);
        return e;
      } catch (n) {
        return `
Error generating stack: ` + n.message + `
` + n.stack;
      }
    }
    var ka = h.ReactCurrentDispatcher, Ta = h.ReactDebugCurrentFrame, Ia = 0, Zr = 1, mi = 2, cr = 3, rA = 4, sl = 0, Gr = 1, _r = 2, ul = 12800;
    function cl(r) {
      return console.error(r), null;
    }
    function dr() {
    }
    function Ra(r, e, t, n, o, l, d, v, D) {
      var R = [], W = /* @__PURE__ */ new Set(), Y = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? ul : n,
        status: sl,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: W,
        pingedTasks: R,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: o === void 0 ? cl : o,
        onAllReady: l === void 0 ? dr : l,
        onShellReady: d === void 0 ? dr : d,
        onShellError: v === void 0 ? dr : v,
        onFatalError: D === void 0 ? dr : D
      }, q = Eo(
        Y,
        0,
        null,
        t,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      q.parentFlushed = !0;
      var ge = fr(Y, r, null, q, W, ca, da, YA);
      return R.push(ge), Y;
    }
    function bn(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && P(function() {
        return ki(r);
      });
    }
    function yi(r, e) {
      return {
        id: In,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: e,
        errorDigest: null
      };
    }
    function fr(r, e, t, n, o, l, d, v) {
      r.allPendingTasks++, t === null ? r.pendingRootTasks++ : t.pendingTasks++;
      var D = {
        node: e,
        ping: function() {
          return bn(r, D);
        },
        blockedBoundary: t,
        blockedSegment: n,
        abortSet: o,
        legacyContext: l,
        context: d,
        treeContext: v
      };
      return D.componentStack = null, o.add(D), D;
    }
    function Eo(r, e, t, n, o, l) {
      return {
        status: Ia,
        id: -1,
        // lazily assigned later
        index: e,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: n,
        boundary: t,
        lastPushedText: o,
        textEmbedded: l
      };
    }
    var Sn = null;
    function fn() {
      return Sn === null || Sn.componentStack === null ? "" : Wr(Sn.componentStack);
    }
    function xn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function Ma(r, e) {
      r.componentStack = {
        tag: 1,
        parent: r.componentStack,
        type: e
      };
    }
    function Co(r, e) {
      r.componentStack = {
        tag: 2,
        parent: r.componentStack,
        type: e
      };
    }
    function Kt(r) {
      r.componentStack === null ? A("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
    }
    var Do = null;
    function wi(r, e) {
      {
        var t;
        typeof e == "string" ? t = e : e && typeof e.message == "string" ? t = e.message : t = String(e);
        var n = Do || fn();
        Do = null, r.errorMessage = t, r.errorComponentStack = n;
      }
    }
    function Po(r, e) {
      var t = r.onError(e);
      if (t != null && typeof t != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof t + '" instead');
      return t;
    }
    function Bo(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = _r, K(r.destination, e)) : (r.status = Gr, r.fatalError = e);
    }
    function oA(r, e, t) {
      xn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, l = t.fallback, d = t.children, v = /* @__PURE__ */ new Set(), D = yi(r, v), R = o.chunks.length, W = Eo(
        r,
        R,
        D,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      o.children.push(W), o.lastPushedText = !1;
      var Y = Eo(
        r,
        0,
        null,
        o.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      Y.parentFlushed = !0, e.blockedBoundary = D, e.blockedSegment = Y;
      try {
        if (Yr(r, e, d), pt(Y.chunks, r.responseState, Y.lastPushedText, Y.textEmbedded), Y.status = Zr, hr(D, Y), D.pendingTasks === 0) {
          Kt(e);
          return;
        }
      } catch (ge) {
        Y.status = rA, D.forceClientRender = !0, D.errorDigest = Po(r, ge), wi(D, ge);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var q = fr(r, l, n, W, v, e.legacyContext, e.context, e.treeContext);
      q.componentStack = e.componentStack, r.pingedTasks.push(q), Kt(e);
    }
    function dl(r, e, t, n) {
      xn(e, t);
      var o = e.blockedSegment, l = nr(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var d = o.formatContext;
      o.formatContext = pn(d, t, n), Yr(r, e, l), o.formatContext = d, No(o.chunks, t), o.lastPushedText = !1, Kt(e);
    }
    function aA(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function ko(r, e, t, n, o) {
      var l = {};
      el(e, l);
      var d = t(n, o);
      return tl(t, n, d, o);
    }
    function bi(r, e, t, n, o) {
      var l = t.render();
      t.props !== o && (Ci || A("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", He(n) || "a component"), Ci = !0);
      {
        var d = n.childContextTypes;
        if (d != null) {
          var v = e.legacyContext, D = Ai(t, n, v, d);
          e.legacyContext = D, mt(r, e, l), e.legacyContext = v;
          return;
        }
      }
      mt(r, e, l);
    }
    function iA(r, e, t, n) {
      Co(e, t);
      var o = jn(t, e.legacyContext), l = Ji(t, n, o);
      bo(l, t, n, o), bi(r, e, l, t, n), Kt(e);
    }
    var Si = {}, To = {}, xi = {}, Ei = {}, Ci = !1, AA = {}, lA = !1, Di = !1, sA = !1;
    function fl(r, e, t, n) {
      var o;
      if (o = jn(t, e.legacyContext), Ma(e, t), t.prototype && typeof t.prototype.render == "function") {
        var l = He(t) || "Unknown";
        Si[l] || (A("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), Si[l] = !0);
      }
      var d = ko(r, e, t, n, o), v = Ea();
      if (typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var D = He(t) || "Unknown";
        To[D] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), To[D] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var R = He(t) || "Unknown";
          To[R] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), To[R] = !0);
        }
        bo(d, t, n, o), bi(r, e, d, t, n);
      } else if (hl(t), v) {
        var W = e.treeContext, Y = 1, q = 0;
        e.treeContext = di(W, Y, q);
        try {
          mt(r, e, d);
        } finally {
          e.treeContext = W;
        }
      } else
        mt(r, e, d);
      Kt(e);
    }
    function hl(r) {
      {
        if (r && r.childContextTypes && A("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = He(r) || "Unknown";
          AA[e] || (A("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), AA[e] = !0);
        }
        if (typeof r.getDerivedStateFromProps == "function") {
          var t = He(r) || "Unknown";
          Ei[t] || (A("%s: Function components do not support getDerivedStateFromProps.", t), Ei[t] = !0);
        }
        if (typeof r.contextType == "object" && r.contextType !== null) {
          var n = He(r) || "Unknown";
          xi[n] || (A("%s: Function components do not support contextType.", n), xi[n] = !0);
        }
      }
    }
    function uA(r, e) {
      if (r && r.defaultProps) {
        var t = Pt({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function pl(r, e, t, n, o) {
      Ma(e, t.render);
      var l = ko(r, e, t.render, n, o), d = Ea();
      if (d) {
        var v = e.treeContext, D = 1, R = 0;
        e.treeContext = di(v, D, R);
        try {
          mt(r, e, l);
        } finally {
          e.treeContext = v;
        }
      } else
        mt(r, e, l);
      Kt(e);
    }
    function Pi(r, e, t, n, o) {
      var l = t.type, d = uA(l, n);
      Qa(r, e, l, d, o);
    }
    function vl(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (sA || (sA = !0, A("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && A("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var l = Nr(t), d = o(l);
      mt(r, e, d);
    }
    function It(r, e, t, n) {
      var o = t._context, l = n.value, d = n.children, v;
      v = e.context, e.context = li(o, l), mt(r, e, d), e.context = WA(o), v !== e.context && A("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function gl(r, e, t, n, o) {
      xn(e, "Lazy");
      var l = t._payload, d = t._init, v = d(l), D = uA(v, n);
      Qa(r, e, v, D, o), Kt(e);
    }
    function Qa(r, e, t, n, o) {
      if (typeof t == "function")
        if (aA(t)) {
          iA(r, e, t, n);
          return;
        } else {
          fl(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        dl(r, e, t, n);
        return;
      }
      switch (t) {
        case NA:
        case HA:
        case ra:
        case oa:
        case na: {
          mt(r, e, n.children);
          return;
        }
        case Va: {
          xn(e, "SuspenseList"), mt(r, e, n.children), Kt(e);
          return;
        }
        case Fi:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Xa: {
          oA(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Fr: {
            pl(r, e, t, n, o);
            return;
          }
          case Ja: {
            Pi(r, e, t, n, o);
            return;
          }
          case io: {
            It(r, e, t, n);
            return;
          }
          case Ao: {
            vl(r, e, t, n);
            return;
          }
          case aa: {
            gl(r, e, t, n);
            return;
          }
        }
      var l = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + l));
    }
    function ml(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (lA || A("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lA = !0), r.entries === e && (Di || A("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Di = !0);
    }
    function mt(r, e, t) {
      try {
        return yl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (Do = Do !== null ? Do : fn()), n;
      }
    }
    function yl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case ji: {
            var n = t, o = n.type, l = n.props, d = n.ref;
            Qa(r, e, o, l, d);
            return;
          }
          case ta:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case aa: {
            var v = t, D = v._payload, R = v._init, W;
            try {
              W = R(D);
            } catch (En) {
              throw typeof En == "object" && En !== null && typeof En.then == "function" && xn(e, "Lazy"), En;
            }
            mt(r, e, W);
            return;
          }
        }
        if (ft(t)) {
          cA(r, e, t);
          return;
        }
        var Y = lo(t);
        if (Y) {
          ml(t, Y);
          var q = Y.call(t);
          if (q) {
            var ge = q.next();
            if (!ge.done) {
              var Te = [];
              do
                Te.push(ge.value), ge = q.next();
              while (!ge.done);
              cA(r, e, Te);
              return;
            }
            return;
          }
        }
        var rt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (rt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : rt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var pr = e.blockedSegment;
        pr.lastPushedText = qe(e.blockedSegment.chunks, t, r.responseState, pr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var vr = e.blockedSegment;
        vr.lastPushedText = qe(e.blockedSegment.chunks, "" + t, r.responseState, vr.lastPushedText);
        return;
      }
      typeof t == "function" && A("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function cA(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var l = e.treeContext;
        e.treeContext = di(l, n, o);
        try {
          Yr(r, e, t[o]);
        } finally {
          e.treeContext = l;
        }
      }
    }
    function dA(r, e, t) {
      var n = e.blockedSegment, o = n.chunks.length, l = Eo(
        r,
        o,
        null,
        n.formatContext,
        // Adopt the parent segment's leading text embed
        n.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      n.children.push(l), n.lastPushedText = !1;
      var d = fr(r, e.node, e.blockedBoundary, l, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (d.componentStack = e.componentStack.parent);
      var v = d.ping;
      t.then(v, v);
    }
    function Yr(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, l = e.context, d = null;
      d = e.componentStack;
      try {
        return mt(r, e, t);
      } catch (v) {
        if (pi(), typeof v == "object" && v !== null && typeof v.then == "function") {
          dA(r, e, v), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Ln(l), e.componentStack = d;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Ln(l), e.componentStack = d, v;
      }
    }
    function fA(r, e, t, n) {
      var o = Po(r, n);
      if (e === null ? Bo(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, wi(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function wl(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = cr, Io(e, t, n);
    }
    function Bi(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = cr, n === null)
        e.allPendingTasks--, e.status !== _r && (e.status = _r, e.destination !== null && L(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var l = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(l);
          {
            var d = "The server did not finish this Suspense boundary: ";
            l && typeof l.message == "string" ? l = d + l.message : l = d + String(l);
            var v = Sn;
            Sn = r;
            try {
              wi(n, l);
            } finally {
              Sn = v;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(R) {
          return Bi(R, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var D = e.onAllReady;
          D();
        }
      }
    }
    function hr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Zr && hr(r, t);
      } else {
        var n = r.completedSegments;
        n.push(e);
      }
    }
    function Io(r, e, t) {
      if (e === null) {
        if (t.parentFlushed) {
          if (r.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          r.completedRootSegment = t;
        }
        if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
          r.onShellError = dr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Zr && hr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(wl, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Zr) {
          hr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function bl(r, e) {
      var t = e.blockedSegment;
      if (t.status === Ia) {
        Ln(e.context);
        var n = null;
        n = Sn, Sn = e;
        try {
          mt(r, e, e.node), pt(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Zr, Io(r, e.blockedBoundary, t);
        } catch (l) {
          if (pi(), typeof l == "object" && l !== null && typeof l.then == "function") {
            var o = e.ping;
            l.then(o, o);
          } else
            e.abortSet.delete(e), t.status = rA, fA(r, e.blockedBoundary, t, l);
        } finally {
          Sn = n;
        }
      }
    }
    function ki(r) {
      if (r.status !== _r) {
        var e = _i(), t = ka.current;
        ka.current = Pa;
        var n;
        n = Ta.getCurrentStack, Ta.getCurrentStack = fn;
        var o = xo;
        Ba(r.responseState);
        try {
          var l = r.pingedTasks, d;
          for (d = 0; d < l.length; d++) {
            var v = l[d];
            bl(r, v);
          }
          l.splice(0, d), r.destination !== null && Ti(r, r.destination);
        } catch (D) {
          Po(r, D), Bo(r, D);
        } finally {
          Ba(o), ka.current = t, Ta.getCurrentStack = n, t === Pa && Ln(e);
        }
      }
    }
    function Ro(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Ia: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, Uo(e, r.responseState, n);
        }
        case Zr: {
          t.status = mi;
          for (var o = !0, l = t.chunks, d = 0, v = t.children, D = 0; D < v.length; D++) {
            for (var R = v[D]; d < R.index; d++)
              k(e, l[d]);
            o = Oa(r, e, R);
          }
          for (; d < l.length - 1; d++)
            k(e, l[d]);
          return d < l.length && (o = F(e, l[d])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Oa(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Ro(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return vt(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Ro(r, e, t), _a(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = wt(r.responseState);
        return Ir(e, r.responseState, o), Ro(r, e, t), Rr(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Ir(e, r.responseState, n.id), Ro(r, e, t), Rr(e, r.responseState);
        Zo(e, r.responseState);
        var l = n.completedSegments;
        if (l.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = l[0];
        return Oa(r, e, d), Go(e, r.responseState);
      }
    }
    function hA(r, e, t) {
      return LA(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function ja(r, e, t) {
      return ye(e, r.responseState, t.formatContext, t.id), Oa(r, e, t), je(e, t.formatContext);
    }
    function pA(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        vA(r, e, t, l);
      }
      return n.length = 0, Qi(e, r.responseState, t.id, t.rootSegmentID);
    }
    function Sl(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        if (!vA(r, e, t, l))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function vA(r, e, t, n) {
      if (n.status === mi)
        return !0;
      var o = n.id;
      if (o === -1) {
        var l = n.id = t.rootSegmentID;
        if (l === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return ja(r, e, n);
      } else
        return ja(r, e, n), IA(e, r.responseState, o);
    }
    function Ti(r, e) {
      H();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Oa(r, e, t), r.completedRootSegment = null, Wa(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var l = n[o];
          hA(r, e, l);
        }
        n.splice(0, o);
        var d = r.completedBoundaries;
        for (o = 0; o < d.length; o++) {
          var v = d[o];
          pA(r, e, v);
        }
        d.splice(0, o), U(e), H(e);
        var D = r.partialBoundaries;
        for (o = 0; o < D.length; o++) {
          var R = D[o];
          if (!Sl(r, e, R)) {
            r.destination = null, o++, D.splice(0, o);
            return;
          }
        }
        D.splice(0, o);
        var W = r.completedBoundaries;
        for (o = 0; o < W.length; o++) {
          var Y = W[o];
          pA(r, e, Y);
        }
        W.splice(0, o);
      } finally {
        U(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && A("There was still abortable task at the root when we closed. This is a bug in React."), L(e));
      }
    }
    function gA(r) {
      P(function() {
        return ki(r);
      });
    }
    function xl(r, e) {
      if (r.status === Gr) {
        r.status = _r, K(e, r.fatalError);
        return;
      }
      if (r.status !== _r && r.destination === null) {
        r.destination = e;
        try {
          Ti(r, e);
        } catch (t) {
          Po(r, t), Bo(r, t);
        }
      }
    }
    function mA(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return Bi(n, r, e);
        }), t.clear(), r.destination !== null && Ti(r, r.destination);
      } catch (n) {
        Po(r, n), Bo(r, n);
      }
    }
    function El(r, e) {
      return new Promise(function(t, n) {
        var o, l, d = new Promise(function(q, ge) {
          l = q, o = ge;
        });
        function v() {
          var q = new ReadableStream(
            {
              type: "bytes",
              pull: function(ge) {
                xl(R, ge);
              },
              cancel: function(ge) {
                mA(R);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          q.allReady = d, t(q);
        }
        function D(q) {
          d.catch(function() {
          }), n(q);
        }
        var R = Ra(r, xr(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), An(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, l, v, D, o);
        if (e && e.signal) {
          var W = e.signal, Y = function() {
            mA(R, W.reason), W.removeEventListener("abort", Y);
          };
          W.addEventListener("abort", Y);
        }
        gA(R);
      });
    }
    wA.renderToReadableStream = El, wA.version = s;
  }()), wA;
}
var jo, Tl;
Ml.env.NODE_ENV === "production" ? (jo = eu(), Tl = tu()) : (jo = nu(), Tl = ru());
Fo.version = jo.version;
Fo.renderToString = jo.renderToString;
Fo.renderToStaticMarkup = jo.renderToStaticMarkup;
Fo.renderToNodeStream = jo.renderToNodeStream;
Fo.renderToStaticNodeStream = jo.renderToStaticNodeStream;
Fo.renderToReadableStream = Tl.renderToReadableStream;
const Ve = {
  AUDIO_BUTTON: "audio-button",
  NOTIFICATION_BUTTON: "notification-button",
  CLOSE_CHAT_BUTTON: "close-chat-button",
  SEND_MESSAGE_BUTTON: "send-button",
  VOICE_MESSAGE_BUTTON: "voice-button",
  FILE_ATTACHMENT_BUTTON: "file-attachment-button",
  EMOJI_PICKER_BUTTON: "emoji-button"
}, ou = (f, s) => /* @__PURE__ */ B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, viewBox: "0 0 42 42", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M17 9a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8Zm0 0", transform: "rotate(.086) scale(1.77778)" }), /* @__PURE__ */ B.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 10
}, d: "M14.66 14.66 3.34 3.34", transform: "rotate(.086) scale(1.77778)" }));
B.forwardRef(ou);
const au = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTojYjAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NCIgZD0iTTE3IDlhOCA4IDAgMCAxLTggOCA4IDggMCAwIDEtOC04IDggOCAwIDAgMSA4LTggOCA4IDAgMCAxIDggOFptMCAwIiB0cmFuc2Zvcm09InJvdGF0ZSguMDg2KSBzY2FsZSgxLjc3Nzc4KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOiNiMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTE0LjY2IDE0LjY2IDMuMzQgMy4zNCIgdHJhbnNmb3JtPSJyb3RhdGUoLjA4Nikgc2NhbGUoMS43Nzc3OCkiLz48L3N2Zz4=", iu = (f, s) => /* @__PURE__ */ B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 1000 1000", ref: s, ...f }, /* @__PURE__ */ B.createElement("rect", { width: "100%", height: "100%", fill: "#fff" }), /* @__PURE__ */ B.createElement("g", null, /* @__PURE__ */ B.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -99 362) scale(3.4003)" }), /* @__PURE__ */ B.createElement("path", { d: "M0 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(180 106 386) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -46 282) scale(3.4003)" }), /* @__PURE__ */ B.createElement("path", { d: "M19 65h4l5 4v1H14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 -3 240) scale(3.4003)" }), /* @__PURE__ */ B.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(236 175) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 139 600) scale(3.4003)" }), /* @__PURE__ */ B.createElement("path", { d: "M184 75q14 0 14 17 0 16-14 16Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
  stroke: "#46648c",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 219 548) scale(3.4003)" }), /* @__PURE__ */ B.createElement("path", { d: "M175 65h4l5 4v1h-14v-1Z", style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#46648c",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
  stroke: "#98b0ca",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#98b0ca",
  fillRule: "nonzero",
  opacity: 1
}, transform: "rotate(90 262 505) scale(3.4003)" }), /* @__PURE__ */ B.createElement("circle", { r: 7.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(767 175) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 116.7, height: 70, x: -58.4, y: -35, rx: 31.5, ry: 31.5, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 877) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 60, height: 20, x: -30, y: -10, rx: 3, ry: 3, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#37547a",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 728) scale(3.4003)" }), /* @__PURE__ */ B.createElement("circle", { r: 75, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#71c9fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 473) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 129.4, height: 82.3, x: -64.7, y: -41.1, rx: 37, ry: 37, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#fff",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 108, height: 68.6, x: -54, y: -34.3, rx: 30.9, ry: 30.9, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ B.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(415 464) scale(3.4003)" }), /* @__PURE__ */ B.createElement("circle", { r: 19.4, style: {
  stroke: "none",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#a478fc",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(591 464) scale(3.4003)" }), /* @__PURE__ */ B.createElement("rect", { width: 96, height: 53.2, x: -48, y: -26.6, rx: 23.9, ry: 23.9, style: {
  stroke: "#162334",
  strokeWidth: 1,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 4,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "#162334",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(503 875) scale(3.4003)" }), /* @__PURE__ */ B.createElement("path", { strokeLinecap: "round", d: "m68 215 7-15M81 222l-7-22M81 222l7-14M101 208H87M114 219l-7-24M113 219l13-22M131 214l-5-17M148 214h-18M69 214H51M100 209l7-15", style: {
  stroke: "#a478fc",
  strokeWidth: 3,
  strokeDasharray: "none",
  strokeLinecap: "butt",
  strokeDashoffset: 0,
  strokeLinejoin: "miter",
  strokeMiterlimit: 10,
  isCustomFont: "none",
  fontFileUrl: "none",
  fill: "none",
  fillRule: "nonzero",
  opacity: 1
}, transform: "translate(165 150) scale(3.4003)" })));
B.forwardRef(iu);
const Jl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48Zz48cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIHg9Ii0yMi41IiB5PSItMTUiIHJ4PSIxLjUiIHJ5PSIxLjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzM3NTQ3YTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC05OSAzNjIpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTA2IDM4Nikgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSI0IiB4PSItMTIuNSIgeT0iLTIiIHJ4PSIuMiIgcnk9Ii4yIiBzdHlsZT0ic3Ryb2tlOiM0NjY0OGM7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAtNDYgMjgyKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE5IDY1aDRsNSA0djFIMTR2LTFaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjIiIHg9Ii0xMi41IiB5PSItMSIgcng9Ii4xIiByeT0iLjEiIHN0eWxlPSJzdHJva2U6Izk4YjBjYTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6Izk4YjBjYTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC0zIDI0MCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNy41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYgMTc1KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiB4PSItMjIuNSIgeT0iLTE1IiByeD0iMS41IiByeT0iMS41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMzNzU0N2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzkgNjAwKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE4NCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjQiIHg9Ii0xMi41IiB5PSItMiIgcng9Ii4yIiByeT0iLjIiIHN0eWxlPSJzdHJva2U6IzQ2NjQ4YztzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzQ2NjQ4YztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIxOSA1NDgpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMTc1IDY1aDRsNSA0djFoLTE0di0xWiIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNDY2NDhjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1IDE1MCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyIiB4PSItMTIuNSIgeT0iLTEiIHJ4PSIuMSIgcnk9Ii4xIiBzdHlsZT0ic3Ryb2tlOiM5OGIwY2E7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNjIgNTA1KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSI3LjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6I2E0NzhmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NyAxNzUpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTE2LjciIGhlaWdodD0iNzAiIHg9Ii01OC40IiB5PSItMzUiIHJ4PSIzMS41IiByeT0iMzEuNSIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNzFjOWZjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDg3Nykgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgeD0iLTMwIiB5PSItMTAiIHJ4PSIzIiByeT0iMyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMzc1NDdhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDcyOCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzcxYzlmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMiA0NzMpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTI5LjQiIGhlaWdodD0iODIuMyIgeD0iLTY0LjciIHk9Ii00MS4xIiByeD0iMzciIHJ5PSIzNyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDQ2NCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iNjguNiIgeD0iLTU0IiB5PSItMzQuMyIgcng9IjMwLjkiIHJ5PSIzMC45IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMxNjIzMzQ7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTEgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjUzLjIiIHg9Ii00OCIgeT0iLTI2LjYiIHJ4PSIyMy45IiByeT0iMjMuOSIgc3R5bGU9InN0cm9rZTojMTYyMzM0O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMTYyMzM0O2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDg3NSkgc2NhbGUoMy40MDAzKSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0ibTY4IDIxNSA3LTE1TTgxIDIyMmwtNy0yMk04MSAyMjJsNy0xNE0xMDEgMjA4SDg3TTExNCAyMTlsLTctMjRNMTEzIDIxOWwxMy0yMk0xMzEgMjE0bC01LTE3TTE0OCAyMTRoLTE4TTY5IDIxNEg1MU0xMDAgMjA5bDctMTUiIHN0eWxlPSJzdHJva2U6I2E0NzhmYztzdHJva2Utd2lkdGg6MztzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PC9nPjwvc3ZnPg==", Au = (f, s) => /* @__PURE__ */ B.createElement("svg", { width: 140, height: 140, xmlns: "http://www.w3.org/2000/svg", ref: s, ...f }, /* @__PURE__ */ B.createElement("circle", { cy: 60.044, cx: 70, fill: "#5c5c5c", r: 29 }), /* @__PURE__ */ B.createElement("path", { d: "m16.36 156.186-.01-30.5c-.005-16.844 24.168-30.507 53.991-30.516 29.823-.009 54.004 13.64 54.01 30.484l.008 30.5-108 .032z", fill: "#5c5c5c" }));
B.forwardRef(Au);
const lu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN5PSI2MC4wNDQiIGN4PSI3MCIgZmlsbD0iIzVjNWM1YyIgcj0iMjkiLz48cGF0aCBkPSJtMTYuMzYgMTU2LjE4Ni0uMDEtMzAuNWMtLjAwNS0xNi44NDQgMjQuMTY4LTMwLjUwNyA1My45OTEtMzAuNTE2IDI5LjgyMy0uMDA5IDU0LjAwNCAxMy42NCA1NC4wMSAzMC40ODRsLjAwOCAzMC41LTEwOCAuMDMyeiIgZmlsbD0iIzVjNWM1YyIvPjwvc3ZnPg==", su = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 0 637 637", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20", fill: "#fff", fillRule: "evenodd" }), /* @__PURE__ */ B.createElement("path", { d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1" })), Kl = B.forwardRef(su), uu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M765-321q0 117-84 196-83 80-200 80-118 0-200-80t-83-196v-392q0-85 61-144 61-58 146-58 86 0 147 58 61 59 61 144v374q0 54-39 92-39 37-93 37-55 0-93-37-38-38-38-92v-372h110v372q0 9 6 14t15 5q8 0 15-5t7-14v-374q0-39-29-66t-68-27q-40 0-69 27t-29 66v392q0 71 51 119t122 48q71 0 122-48t51-119v-426h111v426Z" })), $l = B.forwardRef(uu), cu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M125-165v-113h77v-273q0-93 55-167 56-75 146-100v-19q0-32 22-55 23-23 55-23t55 23q22 23 22 55v19q90 25 146 99 56 73 56 168v273h77v113H125ZM480-32q-38 0-66-27-27-27-27-66h186q0 39-27 66t-66 27Z" })), du = B.forwardRef(cu), fu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M137-190v-113h78v-253q0-41 11-79 11-39 35-71l-9 150h10L17-802l74-74L873-92l-74 74-175-172H137Zm609-149L319-769q20-15 41-25t44-16v-28q0-32 22-54t54-22q32 0 55 22t22 54v28q85 23 137 94t52 160v217ZM481-47q-38 0-65-27t-27-65h184q0 38-27 65t-65 27Z" })), hu = B.forwardRef(fu), pu = (f, s) => /* @__PURE__ */ B.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", ref: s, ...f }, /* @__PURE__ */ B.createElement("g", { strokeLinecap: "round", strokeWidth: 10 }, /* @__PURE__ */ B.createElement("path", { d: "m19 19 61 61M80 19 19 80" }))), vu = B.forwardRef(pu), gu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M94-136v-255l351-93-351-92v-253l816 346L94-136Z" })), mu = B.forwardRef(gu), yu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M480-372q-61 0-105-43-43-43-43-105v-240q0-61 43-105 43-43 105-43 61 0 105 43 43 44 43 105v240q0 62-43 105t-105 43ZM425-76v-122q-121-16-197-108t-76-214h109q0 91 64 154t155 63q91 0 155-63t64-154h109q0 122-77 214T534-198v122H425Z" })), wu = B.forwardRef(yu), bu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "m763-343-80-79q8-20 13-44 5-23 5-54h109q0 49-11 95t-36 82ZM625-482 336-770v-2q3-56 45-96t101-40q62 0 105 43t43 105v249l-1 17q-1 7-4 12ZM427-76v-122q-120-16-196-108-77-92-77-214h109q0 91 64 154t155 63q43 0 80-14 37-15 67-41l78 79q-35 32-78 53t-93 28v122H427Zm362 27L41-796l75-75 748 748-75 74Z" })), Su = B.forwardRef(bu), xu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M625-511q29 0 50-21t20-50q0-29-20-50-21-20-50-20t-50 20-20 50q0 29 20 50 21 21 50 21Zm-290 0q29 0 50-21t20-49q0-30-20-50t-50-21q-29 0-50 20-20 21-20 50 0 30 20 50 21 21 50 21Zm145 268q75 0 137-43t85-115H258q24 72 85 115 62 43 137 43Zm0 198q-90 0-170-34-79-34-138-93T79-310q-34-80-34-170t34-170q34-79 93-138t138-93q80-34 170-34t170 34q79 34 138 93t93 138q34 80 34 170t-34 170q-34 79-93 138T650-79q-80 34-170 34Zm0-435Zm0 322q134 0 228-94t94-228q0-134-94-228t-228-94q-134 0-228 94t-94 228q0 134 94 228t228 94Z" })), ql = B.forwardRef(xu), Eu = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M553-64v-108q107-27 173-113 67-87 67-197 0-109-67-195T553-789v-108q152 26 249 144 97 117 97 271 0 155-97 273T553-64ZM61-335v-290h176l236-237v764L237-335H61Zm492 28v-346q51 23 82 70t31 103-31 103q-31 47-82 70Z" })), Cu = B.forwardRef(Eu), Du = (f, s) => /* @__PURE__ */ B.createElement("svg", { viewBox: "0 -960 960 960", ref: s, ...f }, /* @__PURE__ */ B.createElement("path", { d: "M807-15 700-123q-33 21-71 37-38 15-80 22v-108q20-4 38-12l35-17-153-154v257L234-335H57v-290h144L10-818l74-75L882-90l-75 75Zm37-264-80-79q13-30 19-60 7-31 7-64 0-109-68-195-67-86-173-112v-108q152 26 249 144 98 117 98 271 0 55-14 107-13 51-38 96ZM661-462 549-575v-78q51 23 83 70 31 47 31 103l-1 9-1 9ZM469-655 366-759l103-103v207Z" })), Pu = B.forwardRef(Du), Bu = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", ss = {
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: au,
    embedded: !1,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: Kl
  },
  header: {
    title: /* @__PURE__ */ S.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: Jl,
    buttons: [Ve.NOTIFICATION_BUTTON, Ve.AUDIO_BUTTON, Ve.CLOSE_CHAT_BUTTON],
    closeChatIcon: vu
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: du,
    iconDisabled: hu,
    sound: Bu,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: Cu,
    iconDisabled: Pu
  },
  chatHistory: {
    disabled: !1,
    maxEntries: 30,
    storageKey: "rcb-history",
    viewChatHistoryButtonText: "Load Chat History ⟳",
    chatHistoryLineBreakText: "----- Previous Chat History -----",
    autoLoad: !1
  },
  chatInput: {
    disabled: !1,
    allowNewline: !1,
    enabledPlaceholderText: "Type your message...",
    disabledPlaceholderText: "",
    showCharacterCount: !1,
    characterLimit: -1,
    botDelay: 1e3,
    sendButtonIcon: mu,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    buttons: [Ve.VOICE_MESSAGE_BUTTON, Ve.SEND_MESSAGE_BUTTON]
  },
  chatWindow: {
    showScrollbar: !1,
    autoJumpToBottom: !1,
    showMessagePrompt: !0,
    messagePromptText: "New Messages ↓",
    messagePromptOffset: 30,
    defaultOpen: !1
  },
  sensitiveInput: {
    maskInTextArea: !0,
    maskInUserBubble: !0,
    asterisksCount: 10,
    hideInUserBubble: !1
  },
  userBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: lu,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: Jl,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  voice: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    timeoutPeriod: 1e4,
    autoSendDisabled: !1,
    autoSendPeriod: 1e3,
    sendAsAudio: !1,
    icon: wu,
    iconDisabled: Su
  },
  footer: {
    text: /* @__PURE__ */ S.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.com"),
        children: [
          /* @__PURE__ */ S.jsx("span", { children: "Powered By " }, 0),
          /* @__PURE__ */ S.jsx(
            "div",
            {
              style: {
                borderRadius: "50%",
                width: 14,
                height: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #42b0c5, #491d8d)"
              },
              children: /* @__PURE__ */ S.jsx(Kl, { style: { width: "80%", height: "80%", fill: "#fff" } })
            },
            1
          ),
          /* @__PURE__ */ S.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" }, 2)
        ]
      }
    ),
    buttons: [Ve.FILE_ATTACHMENT_BUTTON, Ve.EMOJI_PICKER_BUTTON]
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: $l,
    iconDisabled: $l,
    sendFileName: !0,
    showMediaDisplay: !1
  },
  emoji: {
    disabled: !1,
    icon: ql,
    iconDisabled: ql,
    list: ["😀", "😃", "😄", "😅", "😊", "😌", "😇", "🙃", "🤣", "😍", "🥰", "🥳", "🎉", "🎈", "🚀", "⭐️"]
  },
  toast: {
    maxCount: 3,
    forbidOnMax: !1,
    dismissOnClick: !0
  },
  event: {
    rcbPreInjectMessage: !1,
    rcbPostInjectMessage: !1,
    rcbStartStreamMessage: !1,
    rcbChunkStreamMessage: !1,
    rcbStopStreamMessage: !1,
    rcbRemoveMessage: !1,
    rcbLoadChatHistory: !1,
    rcbToggleChatWindow: !1,
    rcbToggleAudio: !1,
    rcbToggleNotifications: !1,
    rcbToggleVoice: !1,
    rcbChangePath: !1,
    rcbShowToast: !1,
    rcbDismissToast: !1,
    rcbUserSubmitText: !1,
    rcbUserUploadFile: !1,
    rcbTextAreaChangeValue: !1,
    rcbPreLoadChatBot: !1,
    rcbPostLoadChatBot: !1
  },
  ariaLabel: {
    chatButton: "open chat",
    audioButton: "toggle audio",
    closeChatButton: "close chat",
    emojiButton: "emoji picker",
    fileAttachmentButton: "upload file",
    notificationButton: "toggle notifications",
    sendButton: "send message",
    voiceButton: "toggle voice",
    inputTextArea: "input text area"
  },
  device: {
    desktopEnabled: !0,
    mobileEnabled: !0,
    applyMobileOptimizations: !0
  }
}, us = B.createContext({ settings: {}, setSettings: () => null }), De = () => B.useContext(us), ku = ({
  children: f,
  settings: s = ss,
  setSettings: h
}) => /* @__PURE__ */ S.jsx(us.Provider, { value: { settings: s, setSettings: h }, children: f }), cs = {
  tooltipStyle: {},
  notificationBadgeStyle: {},
  chatWindowStyle: {},
  headerStyle: {},
  bodyStyle: {},
  chatInputContainerStyle: {},
  chatInputAreaStyle: {},
  chatInputAreaFocusedStyle: {},
  chatInputAreaDisabledStyle: {},
  userBubbleStyle: {},
  botBubbleStyle: {},
  botOptionStyle: {},
  botOptionHoveredStyle: {},
  botCheckboxRowStyle: {},
  botCheckboxNextStyle: {},
  botCheckMarkStyle: {},
  botCheckMarkSelectedStyle: {},
  characterLimitStyle: {},
  characterLimitReachedStyle: {},
  chatHistoryLineBreakStyle: {},
  chatMessagePromptStyle: {},
  chatMessagePromptHoveredStyle: {},
  footerStyle: {},
  loadingSpinnerStyle: {},
  mediaDisplayContainerStyle: {},
  chatButtonStyle: {},
  chatHistoryButtonStyle: {},
  chatHistoryButtonHoveredStyle: {},
  sendButtonStyle: {},
  sendButtonHoveredStyle: {},
  sendButtonDisabledStyle: {},
  audioButtonStyle: {},
  audioButtonDisabledStyle: {},
  closeChatButtonStyle: {},
  emojiButtonStyle: {},
  emojiButtonDisabledStyle: {},
  fileAttachmentButtonStyle: {},
  fileAttachmentButtonDisabledStyle: {},
  notificationButtonStyle: {},
  notificationButtonDisabledStyle: {},
  voiceButtonStyle: {},
  voiceButtonDisabledStyle: {},
  chatIconStyle: {},
  audioIconStyle: {},
  audioIconDisabledStyle: {},
  closeChatIconStyle: {},
  emojiIconStyle: {},
  emojiIconDisabledStyle: {},
  fileAttachmentIconStyle: {},
  fileAttachmentIconDisabledStyle: {},
  notificationIconStyle: {},
  notificationIconDisabledStyle: {},
  voiceIconStyle: {},
  voiceIconDisabledStyle: {},
  sendIconStyle: {},
  sendIconDisabledStyle: {},
  sendIconHoveredStyle: {},
  rcbTypingIndicatorContainerStyle: {},
  rcbTypingIndicatorDotStyle: {},
  toastPromptContainerStyle: {},
  toastPromptStyle: {},
  toastPromptHoveredStyle: {}
}, ds = B.createContext({ styles: {}, setStyles: () => null }), Ye = () => B.useContext(ds), Tu = ({
  children: f,
  styles: s = cs,
  setStyles: h
}) => /* @__PURE__ */ S.jsx(ds.Provider, { value: { styles: s, setStyles: h }, children: f }), Iu = ({ buttons: f }) => {
  var s, h, m, A, y;
  const { settings: P } = De(), { styles: E } = Ye(), w = {
    backgroundImage: `linear-gradient(to right, ${(s = P.general) == null ? void 0 : s.secondaryColor},
			${(h = P.general) == null ? void 0 : h.primaryColor})`,
    ...E.headerStyle
  };
  return /* @__PURE__ */ S.jsxs("div", { style: w, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "rcb-chat-header", children: [
      ((m = P.header) == null ? void 0 : m.showAvatar) && /* @__PURE__ */ S.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(A = P.header) == null ? void 0 : A.avatar})` },
          className: "rcb-bot-avatar"
        }
      ),
      (y = P.header) == null ? void 0 : y.title
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "rcb-chat-header", children: f == null ? void 0 : f.map(
      (C, H) => /* @__PURE__ */ S.jsx(B.Fragment, { children: C }, H)
    ) })
  ] });
}, fs = B.createContext({}), ot = () => B.useContext(fs), Ru = ({
  children: f,
  botIdRef: s,
  flowRef: h
}) => {
  const m = B.useRef(null), A = B.useRef(""), y = B.useRef(/* @__PURE__ */ new Map()), P = B.useRef(null), E = B.useRef(""), w = B.useRef(!1), C = B.useRef(null), H = B.useRef(null), k = B.useRef(null);
  return /* @__PURE__ */ S.jsx(fs.Provider, { value: {
    botIdRef: s,
    flowRef: h,
    inputRef: m,
    streamMessageMap: y,
    chatBodyRef: P,
    paramsInputRef: E,
    keepVoiceOnRef: w,
    audioContextRef: C,
    audioBufferRef: H,
    gainNodeRef: k,
    prevInputRef: A
  }, children: f });
}, hs = B.createContext({}), ct = () => B.useContext(hs), Mu = ({
  children: f,
  settings: s
}) => {
  var h, m, A, y, P, E;
  const [w, C] = B.useState(!1), [H, k] = B.useState(((h = s == null ? void 0 : s.chatWindow) == null ? void 0 : h.defaultOpen) ?? !1), [F, U] = B.useState(((m = s == null ? void 0 : s.audio) == null ? void 0 : m.defaultToggledOn) ?? !1), [L, _] = B.useState(((A = s == null ? void 0 : s.voice) == null ? void 0 : A.defaultToggledOn) ?? !1), [j, T] = B.useState(
    ((y = s == null ? void 0 : s.notification) == null ? void 0 : y.defaultToggledOn) ?? !0
  ), [K, te] = B.useState(!1), [X, G] = B.useState(!1), [$, Z] = B.useState(!0), [re, ne] = B.useState(!1), [ue, ae] = B.useState(!1), [ce, ve] = B.useState(!1), [de, Me] = B.useState(0), [Ce, ee] = B.useState(0), [le, fe] = B.useState(!1), [be, oe] = B.useState(null), [me, Oe] = B.useState(((P = window.visualViewport) == null ? void 0 : P.height) ?? window.innerHeight), [Se, Ae] = B.useState(((E = window.visualViewport) == null ? void 0 : E.width) ?? window.innerWidth);
  return /* @__PURE__ */ S.jsx(hs.Provider, { value: {
    isBotTyping: w,
    setIsBotTyping: C,
    isChatWindowOpen: H,
    setIsChatWindowOpen: k,
    audioToggledOn: F,
    setAudioToggledOn: U,
    voiceToggledOn: L,
    setVoiceToggledOn: _,
    notificationsToggledOn: j,
    setNotificationsToggledOn: T,
    isLoadingChatHistory: K,
    setIsLoadingChatHistory: te,
    isScrolling: X,
    setIsScrolling: G,
    textAreaDisabled: $,
    setTextAreaDisabled: Z,
    textAreaSensitiveMode: re,
    setTextAreaSensitiveMode: ne,
    hasInteractedPage: ue,
    setHasInteractedPage: ae,
    hasFlowStarted: ce,
    setHasFlowStarted: ve,
    unreadCount: de,
    setUnreadCount: Me,
    inputLength: Ce,
    setInputLength: ee,
    blockAllowsAttachment: le,
    setBlockAllowsAttachment: fe,
    timeoutId: be,
    setTimeoutId: oe,
    viewportHeight: me,
    setViewportHeight: Oe,
    viewportWidth: Se,
    setViewportWidth: Ae
  }, children: f });
}, Qu = () => {
  var f, s, h;
  const { settings: m } = De(), { styles: A } = Ye(), { unreadCount: y, isScrolling: P, setIsScrolling: E } = ct(), { chatBodyRef: w } = ot(), [C, H] = B.useState(!1), k = {
    color: (f = m.general) == null ? void 0 : f.primaryColor,
    borderColor: (s = m.general) == null ? void 0 : s.primaryColor,
    ...A.chatMessagePromptHoveredStyle
  }, F = () => {
    H(!0);
  }, U = () => {
    H(!1);
  };
  function L(j) {
    if (!w.current)
      return;
    const T = w.current.scrollTop, K = w.current.scrollHeight - w.current.clientHeight - T, te = 20;
    let X = 0;
    function G() {
      if (!w.current)
        return;
      X += te;
      const $ = _(X, T, K, j);
      w.current.scrollTop = $, X < j ? requestAnimationFrame(G) : E(!1);
    }
    G();
  }
  const _ = (j, T, K, te) => (j /= te / 2, j < 1 ? K / 2 * j * j + T : (j--, -K / 2 * (j * (j - 2) - 1) + T));
  return /* @__PURE__ */ S.jsx("div", { className: `rcb-message-prompt-container ${(() => {
    var j;
    return w.current && ((j = m.chatWindow) != null && j.showMessagePrompt) && P && y > 0 ? "visible" : "hidden";
  })()}`, children: /* @__PURE__ */ S.jsx(
    "div",
    {
      onMouseEnter: F,
      onMouseLeave: U,
      style: C ? k : A.chatMessagePromptStyle,
      onMouseDown: (j) => {
        j.preventDefault(), L(600);
      },
      className: "rcb-message-prompt-text",
      children: (h = m.chatWindow) == null ? void 0 : h.messagePromptText
    }
  ) });
}, EA = () => {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    throw new Error("crypto.randomUUID not available");
  } catch {
    if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(f) {
        const s = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
        return (f === "x" ? s : s & 3 | 8).toString(16);
      });
    throw new Error("crypto.getRandomValues is also not available");
  }
}, Ee = {
  // audio
  TOGGLE_AUDIO: "rcb-toggle-audio",
  // notifications:
  TOGGLE_NOTIFICATIONS: "rcb-toggle-notifications",
  // voice
  TOGGLE_VOICE: "rcb-toggle-voice",
  // chat window
  TOGGLE_CHAT_WINDOW: "rcb-toggle-chat-window",
  // messages:
  PRE_INJECT_MESSAGE: "rcb-pre-inject-message",
  POST_INJECT_MESSAGE: "rcb-post-inject-message",
  START_STREAM_MESSAGE: "rcb-start-stream-message",
  CHUNK_STREAM_MESSAGE: "rcb-chunk-stream-message",
  STOP_STREAM_MESSAGE: "rcb-stop-stream-message",
  REMOVE_MESSAGE: "rcb-remove-message",
  // chat history
  LOAD_CHAT_HISTORY: "rcb-load-chat-history",
  // path
  CHANGE_PATH: "rcb-change-path",
  // toast
  SHOW_TOAST: "rcb-show-toast",
  DISMISS_TOAST: "rcb-dismiss-toast",
  // user input submission
  USER_SUBMIT_TEXT: "rcb-user-submit-text",
  USER_UPLOAD_FILE: "rcb-user-upload-file",
  // text area value change
  TEXT_AREA_CHANGE_VALUE: "rcb-text-area-change-value",
  // chatbot loading
  PRE_LOAD_CHATBOT: "rcb-pre-load-chatbot",
  POST_LOAD_CHATBOT: "rcb-post-load-chatbot"
}, Ou = {
  [Ee.TOGGLE_AUDIO]: !0,
  [Ee.TOGGLE_VOICE]: !0,
  [Ee.TOGGLE_NOTIFICATIONS]: !0,
  [Ee.TOGGLE_CHAT_WINDOW]: !0,
  [Ee.PRE_INJECT_MESSAGE]: !0,
  [Ee.POST_INJECT_MESSAGE]: !1,
  [Ee.PRE_LOAD_CHATBOT]: !0,
  [Ee.POST_LOAD_CHATBOT]: !1,
  [Ee.START_STREAM_MESSAGE]: !0,
  [Ee.CHUNK_STREAM_MESSAGE]: !0,
  [Ee.STOP_STREAM_MESSAGE]: !0,
  [Ee.LOAD_CHAT_HISTORY]: !0,
  [Ee.CHANGE_PATH]: !0,
  [Ee.SHOW_TOAST]: !0,
  [Ee.DISMISS_TOAST]: !0,
  [Ee.USER_SUBMIT_TEXT]: !0,
  [Ee.USER_UPLOAD_FILE]: !0,
  [Ee.TEXT_AREA_CHANGE_VALUE]: !0
}, CA = (f, s, h) => {
  const m = new CustomEvent(f, {
    detail: s,
    cancelable: Ou[f]
  });
  return m.data = h, window.dispatchEvent(m), m;
}, ps = B.createContext({ paths: [], setPaths: () => null }), Ql = () => B.useContext(ps), ju = ({ children: f }) => {
  const [s, h] = B.useState([]);
  return /* @__PURE__ */ S.jsx(ps.Provider, { value: { paths: s, setPaths: h }, children: f });
}, Ri = () => {
  const { settings: f } = De(), { paths: s, setPaths: h } = Ql(), {
    setIsBotTyping: m,
    setTextAreaDisabled: A,
    setTextAreaSensitiveMode: y,
    blockAllowsAttachment: P,
    setBlockAllowsAttachment: E
  } = ct(), { botIdRef: w } = ot(), C = B.useCallback(() => s.length > 0 ? s[s.length - 1] : null, [s]), H = B.useCallback(() => s.length > 1 ? s[s.length - 2] : null, [s]), k = B.useCallback((F) => {
    var U, L;
    if ((U = f.event) != null && U.rcbChangePath) {
      const _ = C(), j = H(), T = { botId: w.current, currPath: _, prevPath: j };
      if (event = CA(Ee.CHANGE_PATH, T, { currPath: _, prevPath: j, nextPath: F }), event.defaultPrevented)
        return !1;
    }
    return m(!0), (L = f.chatInput) != null && L.blockSpam && A(!0), y(!1), h((_) => [..._, F]), !0;
  }, [s, h, f]);
  return {
    getCurrPath: C,
    getPrevPath: H,
    goToPath: k,
    blockAllowsAttachment: P,
    setBlockAllowsAttachment: E,
    paths: s,
    replacePaths: (F) => {
      h(F);
    }
  };
}, vs = () => {
  const {
    getCurrPath: f,
    getPrevPath: s,
    goToPath: h,
    paths: m,
    replacePaths: A
  } = Ri();
  return {
    getCurrPath: f,
    getPrevPath: s,
    goToPath: h,
    paths: m,
    replacePaths: A
  };
}, Wn = () => {
  const { getCurrPath: f, getPrevPath: s, paths: h } = vs(), { botIdRef: m } = ot();
  return { callRcbEvent: B.useCallback((A, y) => {
    const P = { botId: m.current, currPath: f(), prevPath: s() };
    return CA(A, P, y);
  }, [h]) };
}, gs = B.createContext({ toasts: [], setToasts: () => null }), ms = () => B.useContext(gs), Fu = ({ children: f }) => {
  const [s, h] = B.useState([]);
  return /* @__PURE__ */ S.jsx(gs.Provider, { value: { toasts: s, setToasts: h }, children: f });
}, Fa = () => {
  const { settings: f } = De(), { toasts: s, setToasts: h } = ms(), { callRcbEvent: m } = Wn(), A = B.useRef(s);
  B.useEffect(() => {
    A.current = s;
  }, [s]);
  const y = B.useCallback((E, w) => {
    var C, H, k, F;
    let U = null;
    if (A.current.length >= (((C = f.toast) == null ? void 0 : C.maxCount) ?? 3)) {
      if ((H = f.toast) != null && H.forbidOnMax)
        return null;
      U = EA();
      let _ = { id: U, content: E, timeout: w };
      if ((k = f.event) != null && k.rcbShowToast) {
        const j = m(Ee.SHOW_TOAST, { toast: _ });
        if (j.defaultPrevented)
          return null;
        _ = j.data.toast;
      }
      return h((j) => [...j.slice(1), _]), U;
    }
    U = EA();
    let L = { id: U, content: E, timeout: w };
    if ((F = f.event) != null && F.rcbShowToast) {
      const _ = m(Ee.SHOW_TOAST, { toast: L });
      if (_.defaultPrevented)
        return null;
      L = _.data.toast;
    }
    return h((_) => [..._, L]), U;
  }, [f, m, h]), P = B.useCallback((E) => {
    var w;
    const C = s.find((H) => H.id === E);
    return !C || (w = f.event) != null && w.rcbDismissToast && m(Ee.DISMISS_TOAST, { toast: C }).defaultPrevented ? null : (h((H) => H.filter((k) => k.id !== E)), E);
  }, [m, h]);
  return {
    showToast: y,
    dismissToast: P,
    toasts: s,
    replaceToasts: (E) => {
      h(E);
    }
  };
}, Lu = ({
  id: f,
  content: s,
  timeout: h
}) => {
  var m, A;
  const { settings: y } = De(), { styles: P } = Ye(), { dismissToast: E } = Fa(), [w, C] = B.useState(!1), H = {
    color: (m = y.general) == null ? void 0 : m.primaryColor,
    borderColor: (A = y.general) == null ? void 0 : A.primaryColor,
    ...P.toastPromptHoveredStyle
  };
  return B.useEffect(() => {
    if (h) {
      const k = setTimeout(() => {
        E(f);
      }, h);
      return () => clearTimeout(k);
    }
  }, [f, E, h]), typeof s == "string" ? /* @__PURE__ */ S.jsx(
    "div",
    {
      onMouseEnter: () => {
        C(!0);
      },
      onMouseLeave: () => {
        C(!1);
      },
      style: w ? H : P.toastPromptStyle,
      onMouseDown: (k) => {
        var F;
        (F = y.toast) != null && F.dismissOnClick && (k.preventDefault(), E(f));
      },
      className: "rcb-toast-prompt",
      children: s
    }
  ) : /* @__PURE__ */ S.jsx(S.Fragment, { children: s });
}, Zn = () => {
  const { settings: f } = De(), {
    isChatWindowOpen: s,
    setIsChatWindowOpen: h,
    viewportHeight: m,
    setViewportHeight: A,
    viewportWidth: y,
    setViewportWidth: P,
    setUnreadCount: E
  } = ct(), { callRcbEvent: w } = Wn(), [C, H] = B.useState(0), k = B.useCallback(() => {
    var U;
    (U = f.event) != null && U.rcbToggleChatWindow && w(
      Ee.TOGGLE_CHAT_WINDOW,
      { currState: s, newState: !s }
    ).defaultPrevented || h((L) => (L || E(0), !L));
  }, []), F = B.useCallback((U) => {
    s !== U && k();
  }, [s]);
  return {
    isChatWindowOpen: s,
    setIsChatWindowOpen: h,
    toggleChatWindow: k,
    openChat: F,
    chatScrollHeight: C,
    setChatScrollHeight: H,
    viewportHeight: m,
    setViewportHeight: A,
    viewportWidth: y,
    setViewportWidth: P
  };
}, ys = B.createContext({ messages: [], setMessages: () => null }), Ol = () => B.useContext(ys), Hu = ({ children: f }) => {
  const [s, h] = B.useState([]);
  return /* @__PURE__ */ S.jsx(ys.Provider, { value: { messages: s, setMessages: h }, children: f });
}, Nu = ({
  setChatScrollHeight: f
}) => {
  var s, h, m, A, y, P, E, w, C, H, k, F;
  const { settings: U } = De(), { styles: L } = Ye(), { messages: _ } = Ol(), { toasts: j } = ms(), { isChatWindowOpen: T } = Zn(), {
    isBotTyping: K,
    isScrolling: te,
    setIsScrolling: X,
    setUnreadCount: G
  } = ct(), { chatBodyRef: $ } = ot(), Z = {
    ...L == null ? void 0 : L.bodyStyle,
    scrollbarWidth: (s = U.chatWindow) != null && s.showScrollbar ? "auto" : "none"
  }, re = {
    backgroundColor: (h = U.general) == null ? void 0 : h.primaryColor,
    color: "#fff",
    maxWidth: (m = U.userBubble) != null && m.showAvatar ? "65%" : "70%",
    ...L.userBubbleStyle
  }, ne = (A = U.userBubble) != null && A.animate ? "rcb-user-message-entry" : "", ue = {
    backgroundColor: (y = U.general) == null ? void 0 : y.secondaryColor,
    color: "#fff",
    maxWidth: (P = U.botBubble) != null && P.showAvatar ? "65%" : "70%",
    ...L.botBubbleStyle
  }, ae = (E = U.botBubble) != null && E.animate ? "rcb-bot-message-entry" : "", ce = {
    bottom: 20,
    width: 300,
    minWidth: (((w = L.chatWindowStyle) == null ? void 0 : w.width) ?? 375) / 2,
    maxWidth: (((C = L.chatWindowStyle) == null ? void 0 : C.width) ?? 375) - 50,
    ...L.toastPromptContainerStyle
  };
  B.useEffect(() => {
    $.current && (f($.current.scrollHeight), te || ($.current.scrollTop = $.current.scrollHeight));
  }, [(H = $.current) == null ? void 0 : H.scrollHeight]);
  const ve = () => {
    var ee;
    if (!$.current)
      return;
    f($.current.scrollHeight);
    const { scrollTop: le, clientHeight: fe, scrollHeight: be } = $.current, oe = le + fe < be - (((ee = U.chatWindow) == null ? void 0 : ee.messagePromptOffset) ?? 30);
    X(oe), oe || (le + fe >= be - 1 && ($.current.scrollTop = be - fe - 1), T && G(0));
  }, de = (ee) => ee === 0 ? !0 : _[ee].sender !== _[ee - 1].sender, Me = (ee, le) => {
    var fe, be, oe, me;
    const Oe = de(le), Se = ((fe = U.userBubble) == null ? void 0 : fe.showAvatar) && Oe;
    let Ae = "rcb-user-message";
    return !Oe && (be = U.userBubble) != null && be.showAvatar && (Ae += " rcb-user-message-offset"), /* @__PURE__ */ S.jsxs("div", { className: "rcb-user-message-container", children: [
      typeof ee.content == "string" ? (oe = U == null ? void 0 : U.userBubble) != null && oe.dangerouslySetInnerHtml ? /* @__PURE__ */ S.jsx(
        "div",
        {
          style: { ...re, display: "inline" },
          className: `${Ae} ${ne}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ S.jsx(
        "div",
        {
          style: re,
          className: `${Ae} ${ne}`,
          children: ee.content
        }
      ) : ee.content,
      Se && /* @__PURE__ */ S.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(me = U.userBubble) == null ? void 0 : me.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, Ce = (ee, le) => {
    var fe, be, oe, me;
    const Oe = de(le), Se = ((fe = U.botBubble) == null ? void 0 : fe.showAvatar) && Oe;
    let Ae = "rcb-bot-message";
    return !Oe && (be = U.botBubble) != null && be.showAvatar && (Ae += " rcb-bot-message-offset"), /* @__PURE__ */ S.jsxs("div", { className: "rcb-bot-message-container", children: [
      Se && /* @__PURE__ */ S.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(oe = U.botBubble) == null ? void 0 : oe.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      typeof ee.content == "string" ? (me = U == null ? void 0 : U.botBubble) != null && me.dangerouslySetInnerHtml ? /* @__PURE__ */ S.jsx(
        "div",
        {
          style: { ...ue, display: "inline" },
          className: `${Ae} ${ae}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ S.jsx(
        "div",
        {
          style: ue,
          className: `${Ae} ${ae}`,
          children: ee.content
        }
      ) : ee.content
    ] });
  };
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      style: Z,
      className: "rcb-chat-body-container",
      ref: $,
      onScroll: ve,
      children: [
        _.map((ee, le) => ee.sender === "system" ? /* @__PURE__ */ S.jsx("div", { children: ee.content }, le) : /* @__PURE__ */ S.jsx("div", { children: ee.sender === "user" ? Me(ee, le) : Ce(ee, le) }, le)),
        K && /* @__PURE__ */ S.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((k = U.botBubble) == null ? void 0 : k.showAvatar) && /* @__PURE__ */ S.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(F = U.botBubble) == null ? void 0 : F.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ S.jsx(
            "div",
            {
              onMouseDown: (ee) => {
                ee.preventDefault();
              },
              className: `rcb-bot-message ${ae}`,
              children: /* @__PURE__ */ S.jsxs("div", { className: "rcb-typing-indicator", style: { ...L == null ? void 0 : L.rcbTypingIndicatorContainerStyle }, children: [
                /* @__PURE__ */ S.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ S.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ S.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx(Qu, {}),
        /* @__PURE__ */ S.jsx("div", { className: "rcb-toast-prompt-container", style: ce, children: j.map((ee) => /* @__PURE__ */ S.jsx(
          Lu,
          {
            id: ee.id,
            content: ee.content,
            timeout: ee.timeout
          },
          ee.id
        )) })
      ]
    }
  );
}, Uu = ({
  checkboxes: f,
  checkedItems: s,
  path: h
}) => {
  var m, A, y, P, E, w, C, H, k, F, U;
  const { settings: L } = De(), { styles: _ } = Ye(), { paths: j } = Ql(), { handleSubmitText: T } = Ha(), [K, te] = B.useState(/* @__PURE__ */ new Set()), [X, G] = B.useState(!1), $ = {
    cursor: X ? `url(${(m = L.general) == null ? void 0 : m.actionDisabledIcon}), auto` : "pointer",
    color: (A = L.general) == null ? void 0 : A.primaryColor,
    borderColor: (y = L.general) == null ? void 0 : y.primaryColor,
    ..._.botCheckboxRowStyle
  }, Z = {
    cursor: X || K.size < f.min ? `url(${(P = L.general) == null ? void 0 : P.actionDisabledIcon}), auto` : "pointer",
    color: (E = L.general) == null ? void 0 : E.primaryColor,
    borderColor: (w = L.general) == null ? void 0 : w.primaryColor,
    ..._.botCheckboxNextStyle
  }, re = {
    cursor: X ? `url(${(C = L.general) == null ? void 0 : C.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ..._.botCheckMarkStyle
  }, ne = {
    cursor: X ? `url(${(H = L.general) == null ? void 0 : H.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (k = L.general) == null ? void 0 : k.primaryColor,
    backgroundColor: (F = L.general) == null ? void 0 : F.primaryColor,
    ..._.botCheckMarkSelectedStyle
  };
  B.useEffect(() => {
    j.length > 0 && j[j.length - 1] !== h && G(!f.reusable);
  }, [j]);
  const ue = (ae) => {
    X || te((ce) => {
      const ve = new Set(ce);
      if (ve.has(ae))
        s.delete(ae), ve.delete(ae);
      else {
        if (K.size == f.max)
          return ce;
        s.add(ae), ve.add(ae);
      }
      return ve;
    });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: `rcb-checkbox-container ${(U = L.botBubble) != null && U.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    f.items.map((ae) => /* @__PURE__ */ S.jsx(
      "div",
      {
        onMouseDown: (ce) => {
          ce.preventDefault(), ue(ae);
        },
        style: $,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ S.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ S.jsx(
            "div",
            {
              style: K.has(ae) ? ne : re,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ S.jsx("div", { className: "rcb-checkbox-label", children: ae })
        ] })
      },
      ae
    )),
    /* @__PURE__ */ S.jsx(
      "div",
      {
        style: Z,
        className: "rcb-checkbox-next-button",
        onMouseDown: (ae) => {
          var ce;
          if (ae.preventDefault(), X || K.size < f.min)
            return;
          const ve = Array.from(s).join(", ");
          G(!f.reusable);
          let de;
          f.sendOutput != null ? de = f.sendOutput : de = ((ce = L.chatInput) == null ? void 0 : ce.sendCheckboxOutput) ?? !0, T(ve, de);
        }
      }
    )
  ] });
}, zu = async (f, s, h, m) => {
  const A = s.checkboxes;
  if (!A)
    return;
  let y;
  if (typeof A == "function" ? (y = A(m), y instanceof Promise && (y = await y)) : y = A, Array.isArray(y) && (y = { items: y }), !("items" in y) || y.items.length == 0)
    return;
  y.min == null && (y.min = 1), y.max == null && (y.max = y.items.length), y.min > y.max && (y.min = y.max), y.reusable == null && (y.reusable = !1);
  const P = /* @__PURE__ */ S.jsx(Uu, { checkboxes: y, checkedItems: /* @__PURE__ */ new Set(), path: h });
  await m.injectMessage(P);
}, Wu = async (f, s) => {
  const h = f.function;
  if (!h)
    return;
  const m = h(s);
  return m instanceof Promise ? await m : m;
}, Zu = async (f, s) => {
  const h = f.message;
  if (!h)
    return;
  if (typeof h == "string") {
    h.trim() !== "" && await s.injectMessage(h);
    return;
  }
  let m = h(s);
  m instanceof Promise && (m = await m), m && m.trim() !== "" && await s.injectMessage(m);
}, Gu = ({
  options: f,
  path: s
}) => {
  var h, m, A, y, P, E;
  const { settings: w } = De(), { styles: C } = Ye(), { paths: H } = Ql(), { handleSubmitText: k } = Ha(), [F, U] = B.useState([]), [L, _] = B.useState(!1), j = {
    cursor: L ? `url(${(h = w.general) == null ? void 0 : h.actionDisabledIcon}), auto` : "pointer",
    color: (m = w.general) == null ? void 0 : m.primaryColor,
    borderColor: (A = w.general) == null ? void 0 : A.primaryColor,
    backgroundColor: "#fff",
    ...C.botOptionStyle
  }, T = {
    color: "#fff",
    borderColor: (y = w.general) == null ? void 0 : y.primaryColor,
    backgroundColor: (P = w.general) == null ? void 0 : P.primaryColor,
    ...C.botOptionHoveredStyle
  };
  B.useEffect(() => {
    H.length > 0 && H[H.length - 1] !== s && _(!f.reusable);
  }, [H]);
  const K = (X) => {
    U((G) => {
      const $ = [...G];
      return $[X] = !0, $;
    });
  }, te = (X) => {
    U((G) => {
      const $ = [...G];
      return $[X] = !1, $;
    });
  };
  return /* @__PURE__ */ S.jsx("div", { className: `rcb-options-container ${(E = w.botBubble) != null && E.showAvatar ? "rcb-options-offset" : ""}`, children: f.items.map((X, G) => {
    const $ = F[G] && !L;
    return /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "rcb-options",
        style: $ ? T : j,
        onMouseEnter: () => K(G),
        onMouseLeave: () => te(G),
        onMouseDown: (Z) => {
          var re;
          if (Z.preventDefault(), L)
            return;
          _(!f.reusable);
          let ne;
          f.sendOutput != null ? ne = f.sendOutput : ne = ((re = w.chatInput) == null ? void 0 : re.sendOptionOutput) ?? !0, k(X, ne);
        },
        children: X
      },
      X
    );
  }) });
}, _u = async (f, s, h, m) => {
  const A = s.options;
  if (!A)
    return;
  let y;
  if (typeof A == "function" ? (y = A(m), y instanceof Promise && (y = await y)) : y = A, Array.isArray(y) && (y = { items: y }), !("items" in y) || y.items.length == 0)
    return;
  y.reusable == null && (y.reusable = !1);
  const P = /* @__PURE__ */ S.jsx(Gu, { options: y, path: h });
  await m.injectMessage(P);
}, Yu = async (f, s, h) => {
  const m = f.path;
  if (!m)
    return !1;
  if (typeof m == "string")
    return h(m);
  let A = m(s);
  return A instanceof Promise && (A = await A), A ? h(A) : !1;
}, Xu = async (f, s) => {
  const h = f.component;
  if (h) {
    if (typeof h == "function") {
      let m = h(s);
      if (m instanceof Promise && (m = await m), !m)
        return;
      await s.injectMessage(m);
      return;
    }
    await s.injectMessage(h);
  }
}, Vu = async (f, s, h, m, A) => {
  const y = f[s];
  if (!y)
    throw new Error("block is not valid.");
  const P = y.transition;
  let E;
  if (typeof P == "function" ? (E = P(h), E instanceof Promise && (E = await E)) : E = P, typeof E == "number" && (E = { duration: E }), !E || E instanceof Promise || E.duration == null || typeof E.duration != "number")
    return;
  E.interruptable == null && (E.interruptable = !1);
  const w = setTimeout(async () => {
    await bs(f, s, h, m);
  }, E.duration);
  E.interruptable && A(w);
}, Ju = async (f, s, h) => {
  const m = f.chatDisabled;
  if (m == null)
    return;
  let A;
  typeof m == "function" ? (A = m(h), A instanceof Promise && (A = await A)) : A = m, s(A);
}, ws = async (f, s, h) => {
  const m = f.isSensitive;
  if (!m) {
    s(!1);
    return;
  }
  let A;
  typeof m == "function" ? (A = m(h), A instanceof Promise && (A = await A)) : A = m, s(A);
}, Ku = async (f, s, h, m, A, y, P) => {
  const E = f[s];
  if (!E)
    throw new Error("Block is not valid.");
  for (const w of Object.keys(E))
    switch (w) {
      case "message":
        await Zu(E, h);
        break;
      case "options":
        await _u(f, E, s, h);
        break;
      case "checkboxes":
        await zu(f, E, s, h);
        break;
      case "component":
        await Xu(E, h);
        break;
      case "chatDisabled":
        await Ju(E, m, h);
        break;
      case "isSensitive":
        await ws(E, A, h);
        break;
      case "transition":
        await Vu(f, s, h, y, P);
    }
}, bs = async (f, s, h, m) => {
  const A = f[s];
  if (!A)
    throw new Error("Block is not valid.");
  const y = Object.keys(A);
  for (const P of y)
    P === "function" && await Wu(A, h);
  return y.includes("path") ? await Yu(A, h, m) : !1;
}, $u = (f) => {
  const s = [];
  let h = "", m = !1;
  for (let A = 0; A < f.length; A++) {
    const y = f[A];
    y === "<" ? m ? (s.push(h), h = y) : (m = !0, h = y) : y === ">" ? (h += y, s.push(h), h = "", m = !1) : m ? h += y : s.push(y);
  }
  return h !== "" && s.push(h), s;
}, qu = (f) => typeof window.DOMParser < "u" ? new DOMParser().parseFromString(f, "text/html").body.textContent || "" : f.replace(/<\/?[^>]+(>|$)/g, ""), ec = (f, s, h, m, A) => {
  const y = new SpeechSynthesisUtterance();
  y.text = f, y.lang = s, y.rate = m, y.volume = A;
  let P = !1;
  for (const E of h)
    if (window.speechSynthesis.getVoices().find((w) => {
      if (w.name === E) {
        y.voice = w, window.speechSynthesis.speak(y), P = !0;
        return;
      }
    }), P)
      break;
  P || window.speechSynthesis.speak(y);
}, tc = (f, s, h, m, A) => {
  var y, P, E, w, C, H;
  if ((y = f.audio) != null && y.disabled || m.sender === "user" || typeof m.content != "string" || !h && !((P = f.general) != null && P.embedded) || !s || m.content.trim() === "")
    return;
  let k = m.content;
  A && (k = qu(m.content)), ec(
    k,
    (E = f.audio) == null ? void 0 : E.language,
    (w = f.audio) == null ? void 0 : w.voiceNames,
    (C = f.audio) == null ? void 0 : C.rate,
    (H = f.audio) == null ? void 0 : H.volume
  );
}, nc = () => {
  var f;
  const { settings: s } = De(), { styles: h } = Ye();
  return /* @__PURE__ */ S.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ S.jsx(
    "div",
    {
      style: h.chatHistoryLineBreakStyle,
      className: "rcb-line-break-text",
      "data-testid": "chat-history-line-break-text",
      children: (f = s.chatHistory) == null ? void 0 : f.chatHistoryLineBreakText
    }
  ) });
}, rc = () => {
  var f;
  const { settings: s } = De(), { styles: h } = Ye(), m = {
    borderTop: `4px solid ${(f = s.general) == null ? void 0 : f.primaryColor}`,
    ...h.loadingSpinnerStyle
  };
  return /* @__PURE__ */ S.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ S.jsx("div", { style: m, className: "rcb-spinner" }) });
}, Oo = (f, s) => ({
  id: EA(),
  content: f,
  sender: s,
  type: typeof f == "string" ? "string" : "object",
  timestamp: (/* @__PURE__ */ new Date()).toUTCString()
});
let Ss = !1, Il = "rcb-history", bA = 30, xs = !1, DA = [];
const SA = async (f) => {
  if (xs)
    return;
  const s = [], h = Ss ? DA.length : 0;
  for (let A = f.length - 1; A >= h; A--) {
    const y = f[A];
    if (y.sender === "system" || (y.content !== "" && s.unshift(y), s.length === bA))
      break;
  }
  let m = s.map(ic);
  if (m.length < bA) {
    const A = bA - m.length;
    m = [...DA.slice(-A), ...m];
  }
  Cs(m);
}, oc = (f) => {
  if (f != null)
    try {
      return JSON.parse(f);
    } catch {
      return [];
    }
  return [];
}, Es = () => DA, Cs = (f) => {
  localStorage.setItem(Il, JSON.stringify(f));
}, ac = (f) => {
  var s, h, m;
  Il = (s = f.chatHistory) == null ? void 0 : s.storageKey, bA = (h = f.chatHistory) == null ? void 0 : h.maxEntries, xs = (m = f.chatHistory) == null ? void 0 : m.disabled, DA = oc(localStorage.getItem(Il));
}, ic = (f) => B.isValidElement(f.content) ? structuredClone({
  id: f.id,
  content: Fo.renderToString(f.content),
  type: f.type,
  sender: f.sender,
  timestamp: f.timestamp
}) : f, Ac = (f, s, h, m, A, y, P) => {
  var E;
  if (Ss = !0, h != null)
    try {
      m((C) => {
        const H = Oo(/* @__PURE__ */ S.jsx(rc, {}), "system");
        return C.shift(), [H, ...C];
      });
      const w = h.map((C) => {
        if (C.type === "object") {
          const H = Ds(C.content, f, s);
          return { ...C, content: H };
        }
        return C;
      });
      setTimeout(() => {
        m((C) => {
          var H;
          C.shift();
          let k;
          return (H = f.chatHistory) != null && H.autoLoad ? k = Oo(/* @__PURE__ */ S.jsx(S.Fragment, {}), "system") : k = Oo(/* @__PURE__ */ S.jsx(nc, {}), "system"), [...w, k, ...C];
        });
      }, 500), setTimeout(() => {
        if (!A.current)
          return;
        const { scrollHeight: C } = A.current, H = C - y;
        A.current.scrollTop = A.current.scrollTop + H, P(!1);
      }, 510);
    } catch {
      localStorage.removeItem((E = f.chatHistory) == null ? void 0 : E.storageKey);
    }
}, Ds = (f, s, h) => {
  const m = new DOMParser().parseFromString(f, "text/html");
  return Array.from(m.body.childNodes).map((A, y) => {
    var P;
    if (A.nodeType === Node.TEXT_NODE)
      return A.textContent;
    {
      const E = A.tagName.toLowerCase();
      let w = Array.from(A.attributes).reduce((H, k) => {
        const F = k.name.toLowerCase();
        if (F === "style") {
          const U = k.value.split(";").filter((_) => _.trim() !== ""), L = {};
          U.forEach((_) => {
            const [j, T] = _.split(":").map((te) => te.trim()), K = j.replace(/-([a-z])/g, (te, X) => X.toUpperCase());
            L[K] = T;
          }), H[F] = L;
        } else
          (E === "audio" || E === "video") && F === "controls" && k.value === "" ? H[F] = "true" : H[F] = k.value;
        return H;
      }, {});
      const C = A.classList;
      if ((P = s.botBubble) != null && P.showAvatar && (w = lc(C, w)), w = sc(C, w, s, h), w = uc(C, w, s, h), w = cc(C, w, s, h), w = dc(C, w, s, h), [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "source",
        "track",
        "wbr"
      ].includes(E))
        return B.createElement(E, { key: y, ...w });
      {
        const H = Ds(A.innerHTML, s, h);
        return B.createElement(E, { key: y, ...w }, ...H);
      }
    }
  });
}, lc = (f, s) => ((f.contains("rcb-options-container") || f.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(s, "class") ? s.class = `${f.toString()} rcb-options-offset` : s.class = "rcb-options-offset"), s), sc = (f, s, h, m) => {
  var A, y, P, E, w;
  return f.contains("rcb-options") && (s.style = {
    ...s.style,
    color: ((A = m.botOptionStyle) == null ? void 0 : A.color) ?? ((y = h.general) == null ? void 0 : y.primaryColor),
    borderColor: ((P = m.botOptionStyle) == null ? void 0 : P.color) ?? ((E = h.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(w = h.general) == null ? void 0 : w.actionDisabledIcon}), auto`,
    ...m.botOptionStyle
  }), s;
}, uc = (f, s, h, m) => {
  var A, y, P, E, w;
  return f.contains("rcb-checkbox-row-container") && (s.style = {
    ...s.style,
    color: ((A = m.botCheckboxRowStyle) == null ? void 0 : A.color) ?? ((y = h.general) == null ? void 0 : y.primaryColor),
    borderColor: ((P = m.botCheckboxRowStyle) == null ? void 0 : P.color) ?? ((E = h.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(w = h.general) == null ? void 0 : w.actionDisabledIcon}), auto`,
    ...m.botCheckboxRowStyle
  }), s;
}, cc = (f, s, h, m) => {
  var A, y, P, E, w;
  return f.contains("rcb-checkbox-next-button") && (s.style = {
    ...s.style,
    color: ((A = m.botCheckboxNextStyle) == null ? void 0 : A.color) ?? ((y = h.general) == null ? void 0 : y.primaryColor),
    borderColor: ((P = m.botCheckboxNextStyle) == null ? void 0 : P.color) ?? ((E = h.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(w = h.general) == null ? void 0 : w.actionDisabledIcon}), auto`,
    ...m.botCheckboxNextStyle
  }), s;
}, dc = (f, s, h, m) => {
  var A, y;
  return (f.contains("rcb-media-display-image-container") || f.contains("rcb-media-display-video-container")) && (s.style = {
    ...s.style,
    backgroundColor: (A = h.general) == null ? void 0 : A.primaryColor,
    maxWidth: (y = h.userBubble) != null && y.showAvatar ? "65%" : "70%",
    ...m.mediaDisplayContainerStyle
  }), s;
}, Ps = (f) => {
  if (!f)
    return !1;
  const s = f.getBoundingClientRect(), h = window.innerHeight ?? document.documentElement.clientHeight, m = window.innerWidth ?? document.documentElement.clientWidth;
  return s.top >= 0 && s.left >= 0 && s.bottom <= h && s.right <= m;
}, jl = () => {
  const { settings: f } = De(), {
    notificationsToggledOn: s,
    setNotificationsToggledOn: h,
    hasInteractedPage: m,
    unreadCount: A,
    setUnreadCount: y
  } = ct(), { audioBufferRef: P, audioContextRef: E, gainNodeRef: w } = ot(), { callRcbEvent: C } = Wn(), H = B.useCallback(async () => {
    var U, L;
    const _ = (U = f.notification) == null ? void 0 : U.sound;
    E.current = new AudioContext();
    const j = E.current.createGain();
    j.gain.value = ((L = f.notification) == null ? void 0 : L.volume) ?? 0.2, w.current = j;
    let T;
    if (_ != null && _.startsWith("data:audio")) {
      const K = atob(_.split(",")[1]), te = new ArrayBuffer(K.length), X = new Uint8Array(te);
      for (let G = 0; G < K.length; G++)
        X[G] = K.charCodeAt(G);
      T = te;
    } else
      T = await (await fetch(_)).arrayBuffer();
    P.current = await E.current.decodeAudioData(T);
  }, [f.notification]), k = B.useCallback(() => {
    var U;
    if ((U = f.notification) != null && U.disabled || !s || !m || !E.current || !P.current)
      return;
    const L = E.current.createBufferSource();
    L.buffer = P.current, L.connect(w.current).connect(E.current.destination), L.start();
  }, [
    f.notification,
    s,
    m,
    E,
    P,
    w
  ]), F = B.useCallback(() => {
    var U;
    (U = f.event) != null && U.rcbToggleNotifications && C(
      Ee.TOGGLE_NOTIFICATIONS,
      { currState: s, newState: !s }
    ).defaultPrevented || h((L) => !L);
  }, []);
  return {
    unreadCount: A,
    setUnreadCount: y,
    notificationsToggledOn: s,
    toggleNotifications: F,
    playNotificationSound: k,
    setUpNotifications: H
  };
}, La = () => {
  var f, s, h, m;
  const { settings: A } = De(), { messages: y, setMessages: P } = Ol(), {
    audioToggledOn: E,
    isChatWindowOpen: w,
    isScrolling: C,
    setIsBotTyping: H,
    setUnreadCount: k
  } = ct(), { streamMessageMap: F, chatBodyRef: U } = ot(), { callRcbEvent: L } = Wn(), { playNotificationSound: _ } = jl(), j = B.useCallback(async (Z, re, ne) => {
    H(!1), P((ve) => {
      const de = [...ve, Z];
      return $(de), de;
    }), F.current.set("bot", Z.id);
    let ue = Z.content;
    ne && (ue = $u(ue));
    let ae = 0;
    const ce = ue.length;
    Z.content = "", await new Promise((ve) => {
      const de = setInterval(() => {
        if (ae >= ce) {
          clearInterval(de), ve();
          return;
        }
        P((Me) => {
          const Ce = [...Me];
          for (let ee = Ce.length - 1; ee >= 0; ee--)
            if (Ce[ee].sender === Z.sender && typeof Ce[ee].content == "string") {
              const le = ue[ae];
              le && (Z.content += le, Ce[ee] = Z), ae++;
              break;
            }
          return Ce;
        });
      }, re);
    }), F.current.delete("bot"), SA(y);
  }, [y, F]), T = B.useCallback(async (Z, re = "bot") => {
    var ne, ue, ae, ce, ve, de, Me, Ce;
    let ee = Oo(Z, re);
    if ((ne = A.event) != null && ne.rcbPreInjectMessage) {
      const oe = L(Ee.PRE_INJECT_MESSAGE, { message: ee });
      if (oe.defaultPrevented)
        return null;
      ee = oe.data.message;
    }
    let le = !1;
    re === "bot" ? le = (ue = A.botBubble) == null ? void 0 : ue.dangerouslySetInnerHtml : re === "user" && (le = (ae = A.userBubble) == null ? void 0 : ae.dangerouslySetInnerHtml), tc(A, E, w, ee, le);
    const fe = typeof ee.content == "string" && ee.sender === "bot" && ((ce = A == null ? void 0 : A.botBubble) == null ? void 0 : ce.simStream), be = typeof ee.content == "string" && ee.sender === "user" && ((ve = A == null ? void 0 : A.userBubble) == null ? void 0 : ve.simStream);
    if (k((oe) => oe + 1), (de = A.event) != null && de.rcbPostInjectMessage && L(Ee.POST_INJECT_MESSAGE, { message: ee }), fe) {
      const oe = (Me = A.botBubble) == null ? void 0 : Me.streamSpeed;
      await j(ee, oe, le);
    } else if (be) {
      const oe = (Ce = A.userBubble) == null ? void 0 : Ce.streamSpeed;
      await j(ee, oe, le);
    } else
      P((oe) => {
        const me = [...oe, ee];
        return $(me), me;
      });
    return ee.id;
  }, [A, E, w, L, j]), K = B.useCallback(async (Z) => {
    var re;
    const ne = y.find((ue) => ue.id === Z);
    return !ne || (re = A.event) != null && re.rcbRemoveMessage && L(Ee.REMOVE_MESSAGE, { message: ne }).defaultPrevented ? null : (P((ue) => {
      const ae = ue.filter((ce) => ce.id !== Z);
      return $(ae), ae;
    }), k((ue) => Math.max(ue - 1, 0)), Z);
  }, [L, y, (f = A.event) == null ? void 0 : f.rcbRemoveMessage]), te = B.useCallback(async (Z, re = "bot") => {
    var ne, ue;
    if (!F.current.has(re)) {
      const ce = Oo(Z, re);
      return (ne = A.event) != null && ne.rcbStartStreamMessage && L(Ee.START_STREAM_MESSAGE, { message: ce }).defaultPrevented ? null : (H(!1), P((ve) => {
        const de = [...ve, ce];
        return $(de), [...ve, ce];
      }), k((ve) => ve + 1), F.current.set(re, ce.id), ce.id);
    }
    const ae = { ...Oo(Z, re), id: F.current.get(re) };
    return (ue = A.event) != null && ue.rcbChunkStreamMessage && L(
      Ee.CHUNK_STREAM_MESSAGE,
      { ...ae, id: F.current.get(re) }
    ).defaultPrevented ? null : (P((ce) => {
      const ve = [...ce];
      for (let de = ve.length - 1; de >= 0; de--)
        if (ve[de].sender === re && typeof ve[de].content == typeof Z) {
          ve[de] = ae;
          break;
        }
      return $(ve), ve;
    }), F.current.get(re) ?? null);
  }, [L, (s = A.event) == null ? void 0 : s.rcbChunkStreamMessage, (h = A.event) == null ? void 0 : h.rcbStartStreamMessage, F]), X = B.useCallback(async (Z = "bot") => {
    var re;
    if (!F.current.has(Z))
      return !0;
    const ne = F.current.get(Z), ue = y.find((ae) => ae.id === ne);
    return (re = A.event) != null && re.rcbStopStreamMessage && L(Ee.STOP_STREAM_MESSAGE, { messageToEndStreamFor: ue }).defaultPrevented ? !1 : (F.current.delete(Z), SA(y), !0);
  }, [L, y, (m = A.event) == null ? void 0 : m.rcbStopStreamMessage, F]), G = (Z) => {
    $(Z), P(Z);
  }, $ = (Z) => {
    var re, ne;
    SA(Z);
    let ue = !0;
    (Z.length === 0 || w && !C) && (ue = !1), (re = A.general) != null && re.embedded && Ps(U.current) && (ue = !1);
    const ae = Z[Z.length - 1];
    (!ae || ae.sender === "user") && (ue = !1), ue && _(), ((ne = A.chatWindow) != null && ne.autoJumpToBottom || !C) && setTimeout(() => {
      U.current && (U.current.scrollTop = U.current.scrollHeight);
    }, 1);
  };
  return {
    endStreamMessage: X,
    injectMessage: T,
    removeMessage: K,
    streamMessage: te,
    messages: y,
    replaceMessages: G
  };
};
let Pl, Un, xA, Jr = !1, zn = null;
const Fl = () => {
  if (!Pl) {
    const f = window.SpeechRecognition || window.webkitSpeechRecognition;
    Pl = f != null ? new f() : null;
  }
  return Pl;
}, fc = (f, s, h, m, A, y, P) => {
  var E;
  (E = f.voice) != null && E.sendAsAudio ? pc(h, y) : hc(
    f,
    s,
    h,
    m,
    A,
    P
  );
}, hc = (f, s, h, m, A, y) => {
  var P, E, w;
  const C = Fl();
  if (!C)
    return;
  if (!Jr)
    try {
      Jr = !0, C.lang = (P = f.voice) == null ? void 0 : P.language, C.start();
    } catch {
    }
  const H = (E = f.voice) == null ? void 0 : E.timeoutPeriod, k = (w = f.voice) == null ? void 0 : w.autoSendPeriod;
  C.onresult = (F) => {
    var U, L;
    clearTimeout(Un), Un = null, clearTimeout(xA);
    const _ = F.results[F.results.length - 1][0].transcript;
    if (y.current) {
      const j = (U = f.chatInput) == null ? void 0 : U.characterLimit, T = y.current.value + _;
      j != null && j >= 0 && T.length > j ? m(T.slice(0, j)) : m(T), A(y.current.value.length);
    }
    Un = setTimeout(() => Bl(s, y), H), (L = f.voice) != null && L.autoSendDisabled || (xA = setTimeout(h, k));
  }, C.onend = () => {
    Jr ? (C.start(), Un || (Un = setTimeout(() => Bl(s, y), H))) : (clearTimeout(Un), Un = null, clearTimeout(xA));
  }, Un = setTimeout(() => Bl(s, y), H);
}, pc = (f, s) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((h) => {
    if (zn = new MediaRecorder(h), !Jr)
      try {
        Jr = !0, zn.start();
      } catch {
      }
    zn.ondataavailable = (m) => {
      s.current && s.current.push(m.data);
    }, zn.onstop = () => {
      f(), h.getTracks().forEach((m) => m.stop());
    };
  }).catch((h) => {
    console.error("Unable to use microphone:", h);
  });
}, Ll = () => {
  const f = Fl();
  f && (Jr = !1, f && f.stop(), zn && zn.state !== "inactive" && (zn.stop(), zn = null), clearTimeout(Un), Un = null, clearTimeout(xA));
}, vc = (f, s) => {
  var h, m, A;
  const y = Fl();
  (h = s.voice) != null && h.disabled || !((m = s.chatInput) != null && m.blockSpam) || !y || (f && !Jr ? (Jr = !0, (A = s.voice) != null && A.sendAsAudio ? zn == null || zn.start() : y.start()) : f || Ll());
}, Bl = (f, s) => {
  var h;
  (h = s.current) != null && h.disabled || f(), Ll();
}, PA = () => {
  const { settings: f } = De(), { voiceToggledOn: s, setVoiceToggledOn: h } = ct(), { callRcbEvent: m } = Wn(), A = B.useCallback(() => {
    var P;
    (P = f.event) != null && P.rcbToggleVoice && m(Ee.TOGGLE_VOICE, { currState: s, newState: !s }).defaultPrevented || h((E) => !E);
  }, []), y = B.useCallback((P) => {
    vc(P, f);
  }, [f]);
  return {
    voiceToggledOn: s,
    toggleVoice: A,
    syncVoice: y
  };
}, Lo = () => {
  const { settings: f } = De(), {
    inputLength: s,
    setInputLength: h,
    textAreaDisabled: m,
    setTextAreaDisabled: A,
    textAreaSensitiveMode: y,
    setTextAreaSensitiveMode: P
  } = ct(), { inputRef: E, chatBodyRef: w, prevInputRef: C } = ot(), { callRcbEvent: H } = Wn(), k = (_) => {
    var j, T, K;
    if (m && E.current) {
      E.current.value = "";
      return;
    }
    if (E.current && C.current !== null) {
      const te = (j = f.chatInput) == null ? void 0 : j.characterLimit, X = (T = f.chatInput) != null && T.allowNewline ? _ : _.replace(/\n/g, " ");
      if (te != null && te >= 0 && X.length > te ? E.current.value = X.slice(0, te) : E.current.value = X, (K = f.event) != null && K.rcbTextAreaChangeValue && H(
        Ee.TEXT_AREA_CHANGE_VALUE,
        { currValue: E.current.value, prevValue: C.current }
      ).defaultPrevented) {
        E.current.value = C.current;
        return;
      }
      C.current = E.current.value;
    }
  }, F = B.useCallback((_) => {
    var j;
    (j = E.current) != null && j.disabled || setTimeout(() => {
      var T, K, te;
      (T = f.general) != null && T.embedded ? Ps(w == null ? void 0 : w.current) && ((K = E.current) == null || K.focus()) : _ !== "start" && ((te = E.current) == null || te.focus());
    }, 100);
  }, []), U = B.useCallback(() => {
    !m && E.current && E.current.focus();
  }, [m]), L = B.useCallback(() => E && E.current ? E.current.value : "", []);
  return {
    textAreaDisabled: m,
    setTextAreaDisabled: A,
    textAreaSensitiveMode: y,
    setTextAreaSensitiveMode: P,
    inputLength: s,
    setInputLength: h,
    getTextAreaValue: L,
    setTextAreaValue: k,
    updateTextAreaFocus: F,
    focusTextArea: U,
    toggleTextAreaDisabled: () => {
      A((_) => !_);
    },
    toggleTextAreaSensitiveMode: () => {
      P((_) => !_);
    }
  };
}, Ha = () => {
  var f, s, h, m;
  const { settings: A } = De(), { endStreamMessage: y, injectMessage: P, removeMessage: E, streamMessage: w } = La(), { getCurrPath: C, getPrevPath: H, goToPath: k } = Ri(), {
    timeoutId: F,
    voiceToggledOn: U,
    setTextAreaSensitiveMode: L,
    textAreaSensitiveMode: _,
    setTextAreaDisabled: j,
    setIsBotTyping: T,
    setBlockAllowsAttachment: K,
    setInputLength: te
  } = ct(), { flowRef: X, chatBodyRef: G, inputRef: $, keepVoiceOnRef: Z, paramsInputRef: re } = ot(), { showToast: ne, dismissToast: ue } = Fa(), { callRcbEvent: ae } = Wn(), { syncVoice: ce } = PA(), { setTextAreaValue: ve } = Lo(), { openChat: de } = Zn(), Me = B.useCallback(async (ee) => {
    var le, fe, be;
    const oe = C();
    if (!(!oe || !X.current[oe])) {
      if (_) {
        if ((le = A == null ? void 0 : A.sensitiveInput) != null && le.hideInUserBubble)
          return;
        if ((fe = A == null ? void 0 : A.sensitiveInput) != null && fe.maskInUserBubble) {
          await P("*".repeat(((be = A.sensitiveInput) == null ? void 0 : be.asterisksCount) ?? 10), "user");
          return;
        }
      }
      await P(ee, "user");
    }
  }, [X, C, A, P, _]), Ce = B.useCallback(async (ee, le, fe = !0) => {
    var be, oe;
    le = le.trim(), le !== "" && (fe && await Me(le), F && clearTimeout(F), re.current = le, G.current && (G.current.scrollTop = G.current.scrollHeight), $.current && (ve(""), te(0)), (be = A.chatInput) != null && be.blockSpam && j(!0), Z.current = U, ce(!1), setTimeout(() => {
      T(!0);
    }, 400), L(!1), setTimeout(async () => {
      var me;
      const Oe = {
        prevPath: H(),
        currPath: C(),
        goToPath: k,
        setTextAreaValue: ve,
        userInput: le,
        injectMessage: P,
        streamMessage: w,
        removeMessage: E,
        endStreamMessage: y,
        openChat: de,
        showToast: ne,
        dismissToast: ue
      };
      if (!await bs(X.current, ee, Oe, k)) {
        const Se = C();
        if (!Se)
          return;
        const Ae = X.current[Se];
        if (!Ae)
          return;
        Ae.chatDisabled || j((me = A.chatInput) == null ? void 0 : me.disabled), ws(Ae, L, Oe), K(typeof Ae.file == "function"), ce(Z.current), T(!1);
      }
    }, (oe = A.chatInput) == null ? void 0 : oe.botDelay));
  }, [
    F,
    (f = A.chatInput) == null ? void 0 : f.blockSpam,
    (s = A.chatInput) == null ? void 0 : s.botDelay,
    (h = A.chatInput) == null ? void 0 : h.disabled,
    Z,
    U,
    ce,
    Me,
    H,
    C,
    k,
    P,
    w,
    E,
    y,
    de,
    ne,
    ue,
    X
  ]);
  return { handleSubmitText: B.useCallback(async (ee, le = !0) => {
    var fe, be;
    if (ee = ee ?? ((fe = $.current) == null ? void 0 : fe.value), (be = A.event) != null && be.rcbUserSubmitText && ae(Ee.USER_SUBMIT_TEXT, { inputText: ee, sendInChat: le }).defaultPrevented)
      return;
    const oe = C();
    oe && Ce(oe, ee, le);
  }, [ae, C, Ce, $, (m = A.event) == null ? void 0 : m.rcbUserSubmitText]) };
}, BA = () => {
  var f;
  const { settings: s } = De();
  return B.useMemo(() => {
    var h;
    if (typeof window > "u" || !window.navigator)
      return !1;
    if (!((h = s.device) != null && h.applyMobileOptimizations))
      return !0;
    const m = navigator.userAgent, A = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(m), y = window.innerWidth >= 768;
    return A && y;
  }, [(f = s.device) == null ? void 0 : f.applyMobileOptimizations]);
}, gc = ({ buttons: f }) => {
  var s, h, m, A, y, P, E, w, C, H, k;
  const F = BA(), { settings: U } = De(), { styles: L } = Ye(), {
    textAreaDisabled: _,
    textAreaSensitiveMode: j,
    inputLength: T,
    hasFlowStarted: K,
    setHasFlowStarted: te,
    setInputLength: X
  } = ct(), { inputRef: G } = ot(), [$, Z] = B.useState(!1), [re, ne] = B.useState(!1), { handleSubmitText: ue } = Ha(), { setTextAreaValue: ae } = Lo(), ce = {
    boxSizing: F ? "content-box" : "border-box",
    ...L.chatInputAreaStyle
  }, ve = {
    outline: _ ? "" : "none",
    boxShadow: _ ? "" : `0 0 5px ${(s = U.general) == null ? void 0 : s.primaryColor}`,
    boxSizing: F ? "content-box" : "border-box",
    ...L.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...L.chatInputAreaFocusedStyle
  }, de = {
    cursor: `url(${(h = U.general) == null ? void 0 : h.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: F ? "content-box" : "border-box",
    ...L.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...L.chatInputAreaDisabledStyle
  }, Me = {
    color: "#989898",
    ...L.characterLimitStyle
  }, Ce = {
    color: "#ff0000",
    ...L.characterLimitReachedStyle
  }, ee = _ ? (m = U.chatInput) == null ? void 0 : m.disabledPlaceholderText : (A = U.chatInput) == null ? void 0 : A.enabledPlaceholderText, le = () => {
    _ || Z(!0);
  }, fe = () => {
    Z(!1);
  }, be = () => {
    ne(!0);
  }, oe = () => {
    ne(!1);
  }, me = async (Se) => {
    var Ae;
    if (!re && Se.key === "Enter") {
      if (Se.shiftKey) {
        (Ae = U.chatInput) != null && Ae.allowNewline || Se.preventDefault();
        return;
      }
      Se.preventDefault(), await ue();
    }
  }, Oe = (Se) => {
    G.current && (ae(Se.target.value), X(G.current.value.length));
  };
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      "aria-label": ((y = U.ariaLabel) == null ? void 0 : y.inputTextArea) ?? "input text area",
      role: "textbox",
      onMouseDown: (Se) => {
        var Ae;
        Se.stopPropagation(), !K && ((Ae = U.general) == null ? void 0 : Ae.flowStartTrigger) === "ON_CHATBOT_INTERACT" && te(!0);
      },
      style: L.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        j && (P = U.sensitiveInput) != null && P.maskInTextArea ? /* @__PURE__ */ S.jsx(
          "input",
          {
            ref: G,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: _ ? de : $ ? ve : ce,
            placeholder: ee,
            onChange: Oe,
            onKeyDown: me,
            onFocus: le,
            onBlur: fe,
            onCompositionStart: be,
            onCompositionEnd: oe
          }
        ) : /* @__PURE__ */ S.jsx(
          "textarea",
          {
            ref: G,
            style: _ ? de : $ ? ve : ce,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: ee,
            onChange: Oe,
            onKeyDown: me,
            onFocus: le,
            onBlur: fe,
            onCompositionStart: be,
            onCompositionEnd: oe
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          f == null ? void 0 : f.map(
            (Se, Ae) => /* @__PURE__ */ S.jsx(B.Fragment, { children: Se }, Ae)
          ),
          ((E = U.chatInput) == null ? void 0 : E.showCharacterCount) && ((w = U.chatInput) == null ? void 0 : w.characterLimit) != null && ((C = U.chatInput) == null ? void 0 : C.characterLimit) > 0 && /* @__PURE__ */ S.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: T >= ((H = U.chatInput) == null ? void 0 : H.characterLimit) ? Ce : Me,
              children: [
                T,
                "/",
                (k = U.chatInput) == null ? void 0 : k.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
}, mc = ({ buttons: f }) => {
  var s;
  const { settings: h } = De(), { styles: m } = Ye();
  return /* @__PURE__ */ S.jsxs("div", { "data-testid": "chatbot-footer-container", style: m.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ S.jsx("div", { className: "rcb-chat-footer", children: f == null ? void 0 : f.map(
      (A, y) => /* @__PURE__ */ S.jsx(B.Fragment, { children: A }, y)
    ) }),
    /* @__PURE__ */ S.jsx("span", { children: (s = h.footer) == null ? void 0 : s.text })
  ] });
}, yc = () => {
  var f, s, h, m, A, y, P;
  const { settings: E } = De(), { styles: w } = Ye(), { unreadCount: C } = ct(), { isChatWindowOpen: H, toggleChatWindow: k } = Zn(), F = {
    backgroundImage: `linear-gradient(to right, ${(f = E.general) == null ? void 0 : f.secondaryColor},
			${(s = E.general) == null ? void 0 : s.primaryColor})`,
    ...w.chatButtonStyle
  }, U = {
    backgroundImage: `url(${(h = E.chatButton) == null ? void 0 : h.icon})`,
    fill: "#fff",
    width: 75,
    height: 75,
    ...w.chatIconStyle
  }, L = () => {
    var _;
    const j = (_ = E.chatButton) == null ? void 0 : _.icon;
    return !j || typeof j == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-toggle-icon",
        style: U
      }
    ) : j && /* @__PURE__ */ S.jsx("span", { className: "rcb-toggle-icon", children: /* @__PURE__ */ S.jsx(j, { style: U }) });
  };
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: !((m = E.general) != null && m.embedded) && /* @__PURE__ */ S.jsxs(
    "div",
    {
      "aria-label": ((A = E.ariaLabel) == null ? void 0 : A.chatButton) ?? "open chat",
      role: "button",
      style: F,
      className: `rcb-toggle-button ${H ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: k,
      children: [
        L(),
        !((y = E.notification) != null && y.disabled) && ((P = E.notification) == null ? void 0 : P.showCount) && /* @__PURE__ */ S.jsx("span", { style: w.notificationBadgeStyle, className: "rcb-badge", children: C })
      ]
    }
  ) });
}, wc = () => {
  var f, s, h, m;
  const A = BA(), { settings: y } = De(), { styles: P } = Ye(), { isChatWindowOpen: E, openChat: w } = Zn(), [C, H] = B.useState(!1), [k, F] = B.useState(!1), [U, L] = B.useState(0);
  B.useEffect(() => {
    var T, K, te;
    const X = (T = y.tooltip) == null ? void 0 : T.mode;
    if (X === "ALWAYS")
      if (A) {
        let G;
        E ? G = (((K = P.chatWindowStyle) == null ? void 0 : K.width) ?? 375) - (((te = P.chatButtonStyle) == null ? void 0 : te.width) ?? 75) : G = 0, L(G), H(!0);
      } else
        H(!E);
    else
      X === "NEVER" ? H(!1) : X === "START" ? k ? H(!1) : (F(!0), H(!0)) : X === "CLOSE" && H(!E);
  }, [E]);
  const _ = {
    transform: `translateX(-${U}px)`,
    right: (((f = P.chatButtonStyle) == null ? void 0 : f.width) ?? 75) + 40,
    bottom: 30,
    backgroundColor: (s = y.general) == null ? void 0 : s.secondaryColor,
    color: "#fff",
    ...P.tooltipStyle
  }, j = {
    borderColor: `transparent transparent transparent ${_.backgroundColor}`
  };
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: !((h = y.general) != null && h.embedded) && /* @__PURE__ */ S.jsxs(
    "div",
    {
      "data-testid": "chat-tooltip",
      style: _,
      className: `rcb-chat-tooltip ${C ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => w(!0),
      children: [
        /* @__PURE__ */ S.jsx("span", { children: (m = y.tooltip) == null ? void 0 : m.text }),
        /* @__PURE__ */ S.jsx("span", { className: "rcb-chat-tooltip-tail", style: j })
      ]
    }
  ) });
}, Bs = ({
  file: f,
  fileType: s,
  fileUrl: h
}) => {
  var m, A, y;
  const { settings: P } = De(), { styles: E } = Ye(), w = {
    backgroundColor: (m = P.general) == null ? void 0 : m.primaryColor,
    maxWidth: (A = P.userBubble) != null && A.showAvatar ? "65%" : "70%",
    ...E.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: h ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    s === "image" && h && /* @__PURE__ */ S.jsx(
      "div",
      {
        style: w,
        className: "rcb-media-display-image-container rcb-media-entry",
        "data-testid": "media-display-image-container",
        children: /* @__PURE__ */ S.jsx("img", { src: h, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    s === "video" && h && /* @__PURE__ */ S.jsx(
      "div",
      {
        style: w,
        className: "rcb-media-display-video-container rcb-media-entry",
        "data-testid": "media-display-video-container",
        children: /* @__PURE__ */ S.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ S.jsx("source", { src: h, type: f.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    s === "audio" && h && /* @__PURE__ */ S.jsxs(
      "audio",
      {
        "data-testid": "media-display-audio-container",
        style: {
          maxWidth: (y = P.userBubble) != null && y.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ S.jsx("source", { src: h, type: f.type }),
          "Your browser does not support the audio tag."
        ]
      }
    )
  ] }) : /* @__PURE__ */ S.jsx(S.Fragment, {}) });
}, ks = async (f) => {
  if (!f)
    return { fileType: null, fileUrl: null };
  const s = f.type.split("/")[0];
  if (!["image", "video", "audio"].includes(s))
    return { fileType: null, fileUrl: null };
  try {
    const h = await new Promise((m, A) => {
      const y = new FileReader();
      y.onload = () => m(y.result), y.onerror = () => A(new Error("File reading failed")), y.readAsDataURL(f);
    });
    return { fileType: s, fileUrl: h };
  } catch {
    return { fileType: null, fileUrl: null };
  }
}, bc = () => {
  var f, s, h, m, A, y;
  const { settings: P } = De(), { styles: E } = Ye(), { injectMessage: w, streamMessage: C, removeMessage: H, endStreamMessage: k } = La(), { getCurrPath: F, getPrevPath: U, goToPath: L, blockAllowsAttachment: _ } = Ri(), { flowRef: j, inputRef: T } = ot(), K = j.current, { showToast: te, dismissToast: X } = Fa(), { callRcbEvent: G } = Wn(), { openChat: $ } = Zn(), { setTextAreaValue: Z } = Lo(), { handleSubmitText: re } = Ha(), ne = {
    cursor: `url(${(f = P.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...E.fileAttachmentButtonStyle,
    // by default inherit the base style
    ...E.fileAttachmentButtonDisabledStyle
  }, ue = {
    backgroundImage: `url(${(s = P.fileAttachment) == null ? void 0 : s.icon})`,
    fill: "#a6a6a6",
    ...E.fileAttachmentIconStyle
  }, ae = {
    backgroundImage: `url(${(h = P.fileAttachment) == null ? void 0 : h.icon})`,
    fill: "#a6a6a6",
    ...E.fileAttachmentIconStyle,
    // by default inherit the base style
    ...E.fileAttachmentIconDisabledStyle
  }, ce = async (de) => {
    var Me, Ce, ee, le;
    const fe = de.target.files;
    if (!fe || (Me = P.event) != null && Me.rcbUserUploadFile && G(Ee.USER_UPLOAD_FILE, { files: fe }).defaultPrevented)
      return;
    const be = F();
    if (!be)
      return;
    const oe = K[be];
    if (!oe)
      return;
    const me = oe.file;
    if (me != null) {
      const Oe = [];
      for (let Se = 0; Se < fe.length; Se++) {
        if (Oe.push(fe[Se].name), !((Ce = P.fileAttachment) != null && Ce.showMediaDisplay))
          continue;
        const Ae = await ks(fe[Se]);
        !Ae.fileType || !Ae.fileUrl || await w(/* @__PURE__ */ S.jsx(
          Bs,
          {
            file: fe[Se],
            fileType: Ae.fileType,
            fileUrl: Ae.fileUrl
          }
        ), "user");
      }
      await re("📄 " + Oe.join(", "), (ee = P.fileAttachment) == null ? void 0 : ee.sendFileName), await me({
        userInput: (le = T.current) == null ? void 0 : le.value,
        prevPath: U(),
        currPath: F(),
        goToPath: L,
        setTextAreaValue: Z,
        injectMessage: w,
        streamMessage: C,
        removeMessage: H,
        endStreamMessage: k,
        openChat: $,
        showToast: te,
        dismissToast: X,
        files: fe
      });
    }
  }, ve = () => {
    var de, Me;
    const Ce = _ ? (de = P.fileAttachment) == null ? void 0 : de.icon : (Me = P.fileAttachment) == null ? void 0 : Me.iconDisabled;
    return !Ce || typeof Ce == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled",
        style: _ ? ue : ae
      }
    ) : Ce && /* @__PURE__ */ S.jsx("span", { className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled", children: /* @__PURE__ */ S.jsx(
      Ce,
      {
        style: _ ? ue : ae
      }
    ) });
  };
  return /* @__PURE__ */ S.jsxs(
    "label",
    {
      "aria-label": ((m = P.ariaLabel) == null ? void 0 : m.fileAttachmentButton) ?? "upload file",
      role: "button",
      className: _ ? "rcb-attach-button-enabled" : "rcb-attach-button-disabled",
      style: _ ? E.fileAttachmentButtonStyle : ne,
      children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            className: "rcb-attach-input",
            type: "file",
            onChange: ce,
            multiple: (A = P.fileAttachment) == null ? void 0 : A.multiple,
            accept: (y = P.fileAttachment) == null ? void 0 : y.accept,
            disabled: !_
          }
        ),
        ve()
      ]
    }
  );
}, Sc = () => {
  var f, s, h, m, A, y;
  const { settings: P } = De(), { styles: E } = Ye(), { inputRef: w } = ot(), { textAreaDisabled: C, setTextAreaValue: H } = Lo(), k = B.useRef(null), F = B.useRef(null), [U, L] = B.useState(!1), _ = {
    cursor: `url(${(f = P.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...E.emojiButtonStyle,
    // by default inherit the base style
    ...E.emojiButtonDisabledStyle
  }, j = {
    backgroundImage: `url(${(s = P.emoji) == null ? void 0 : s.icon})`,
    fill: "#a6a6a6",
    ...E.emojiIconStyle
  }, T = {
    backgroundImage: `url(${(h = P.emoji) == null ? void 0 : h.icon})`,
    fill: "#a6a6a6",
    ...E.emojiIconStyle,
    // by default inherit the base style
    ...E.emojiIconDisabledStyle
  };
  B.useEffect(() => {
    const G = (re) => {
      const ne = re.composedPath();
      k.current && !ne.includes(k.current) && F.current && !ne.includes(F.current) && L(!1);
    }, $ = () => {
      if (k.current && F.current) {
        const re = F.current.getBoundingClientRect(), ne = k.current.offsetHeight, ue = re.top - ne - 8;
        k.current.style.left = `${re.left}px`, k.current.style.top = `${ue}px`;
      }
    }, Z = () => {
      $();
    };
    return document.addEventListener("mousedown", G), window.addEventListener("resize", Z), () => {
      document.removeEventListener("mousedown", G), window.removeEventListener("resize", Z);
    };
  }, []);
  const K = (G, $) => {
    G.preventDefault(), w.current && (H(w.current.value + $), setTimeout(() => {
      const Z = w.current;
      if (Z) {
        Z.focus();
        const re = Z.value.length;
        Z.setSelectionRange(re, re);
      }
    }, 50)), L(!1);
  }, te = (G) => {
    G.preventDefault(), L(C ? !1 : !U);
  }, X = () => {
    var G, $;
    const Z = C ? (G = P.emoji) == null ? void 0 : G.iconDisabled : ($ = P.emoji) == null ? void 0 : $.icon;
    return !Z || typeof Z == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: `${C ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`,
        style: C ? T : j
      }
    ) : Z && /* @__PURE__ */ S.jsx("span", { className: `${C ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`, children: /* @__PURE__ */ S.jsx(Z, { style: C ? T : j }) });
  };
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx(
      "div",
      {
        "aria-label": ((m = P.ariaLabel) == null ? void 0 : m.emojiButton) ?? "emoji picker",
        role: "button",
        ref: F,
        className: `${C ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        style: C ? _ : E.emojiButtonStyle,
        onMouseDown: te,
        children: X()
      }
    ),
    U && /* @__PURE__ */ S.jsx("div", { className: "rcb-emoji-button-popup", ref: k, children: (y = (A = P.emoji) == null ? void 0 : A.list) == null ? void 0 : y.map((G, $) => /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (Z) => K(Z, G),
        children: G
      },
      $
    )) })
  ] });
}, Ts = () => {
  const { settings: f } = De(), { audioToggledOn: s, setAudioToggledOn: h } = ct(), { callRcbEvent: m } = Wn(), A = B.useCallback(() => {
    var y;
    (y = f.event) != null && y.rcbToggleAudio && m(Ee.TOGGLE_AUDIO, { currState: s, newState: !s }).defaultPrevented || h((P) => !P);
  }, []);
  return {
    audioToggledOn: s,
    toggleAudio: A
  };
}, xc = () => {
  var f, s, h;
  const { settings: m } = De(), { styles: A } = Ye(), { audioToggledOn: y, toggleAudio: P } = Ts(), E = {
    backgroundImage: `url(${(f = m.audio) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...A.audioIconStyle
  }, w = {
    backgroundImage: `url(${(s = m.audio) == null ? void 0 : s.iconDisabled})`,
    fill: "#e8eaed",
    ...A.audioIconStyle,
    // by default inherit the base style
    ...A.audioIconDisabledStyle
  }, C = () => {
    var H, k;
    const F = y ? (H = m.audio) == null ? void 0 : H.icon : (k = m.audio) == null ? void 0 : k.iconDisabled;
    return !F || typeof F == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-audio-icon",
        "data-testid": "rcb-audio-icon",
        style: y ? E : w
      }
    ) : F && /* @__PURE__ */ S.jsx("span", { className: "rcb-audio-icon", "data-testid": "rcb-audio-icon", children: /* @__PURE__ */ S.jsx(
      F,
      {
        style: y ? E : w,
        "data-testid": "rcb-audio-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      "aria-label": ((h = m.ariaLabel) == null ? void 0 : h.audioButton) ?? "toggle audio",
      role: "button",
      onMouseDown: (H) => {
        H.preventDefault(), P();
      },
      style: y ? A.audioButtonStyle : { ...A.audioButtonStyle, ...A.audioButtonDisabledStyle },
      children: C()
    }
  );
}, Ec = () => {
  var f, s;
  const { settings: h } = De(), { styles: m } = Ye(), { openChat: A } = Zn(), y = {
    backgroundImage: `url(${(f = h.header) == null ? void 0 : f.closeChatIcon})`,
    fill: "#e8eaed",
    stroke: "#e8eaed",
    ...m.closeChatIconStyle
  }, P = () => {
    var E;
    const w = (E = h.header) == null ? void 0 : E.closeChatIcon;
    return !w || typeof w == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-close-chat-icon",
        "data-testid": "rcb-close-chat-icon",
        style: y
      }
    ) : w && /* @__PURE__ */ S.jsx("span", { className: "rcb-close-chat-icon", "data-testid": "rcb-close-chat-icon", children: /* @__PURE__ */ S.jsx(w, { style: y }) });
  };
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      "aria-label": ((s = h.ariaLabel) == null ? void 0 : s.closeChatButton) ?? "close chat",
      role: "button",
      onMouseDown: (E) => {
        E.stopPropagation(), A(!1);
      },
      style: m.closeChatButtonStyle,
      children: P()
    }
  );
}, Is = () => {
  const { notificationsToggledOn: f, toggleNotifications: s, playNotificationSound: h } = jl();
  return {
    notificationsToggledOn: f,
    toggleNotifications: s,
    playNotificationSound: h
  };
}, Cc = () => {
  var f, s, h;
  const { settings: m } = De(), { styles: A } = Ye(), { notificationsToggledOn: y, toggleNotifications: P } = Is(), E = {
    backgroundImage: `url(${(f = m.notification) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...A.notificationIconStyle
  }, w = {
    backgroundImage: `url(${(s = m.notification) == null ? void 0 : s.iconDisabled})`,
    fill: "#e8eaed",
    ...A.notificationIconStyle,
    // by default inherit the base style
    ...A.notificationIconDisabledStyle
  }, C = () => {
    var H, k;
    const F = y ? (H = m.notification) == null ? void 0 : H.icon : (k = m.notification) == null ? void 0 : k.iconDisabled;
    return !F || typeof F == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-notification-icon",
        "data-testid": "rcb-notification-icon",
        style: y ? E : w
      }
    ) : F && /* @__PURE__ */ S.jsx("span", { className: "rcb-notification-icon", "data-testid": "rcb-notification-icon", children: /* @__PURE__ */ S.jsx(
      F,
      {
        style: y ? E : w,
        "data-testid": "rcb-notification-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      "aria-label": ((h = m.ariaLabel) == null ? void 0 : h.notificationButton) ?? "toggle notifications",
      role: "button",
      onMouseDown: (H) => {
        H.preventDefault(), P();
      },
      style: y ? A.notificationButtonStyle : { ...A.notificationButtonStyle, ...A.notificationButtonDisabledStyle },
      children: C()
    }
  );
}, Dc = () => {
  var f, s, h;
  const { settings: m } = De(), { styles: A } = Ye(), { injectMessage: y } = La(), { inputRef: P } = ot(), { voiceToggledOn: E, toggleVoice: w } = PA(), { setInputLength: C, setTextAreaValue: H, textAreaDisabled: k } = Lo(), { handleSubmitText: F } = Ha(), U = B.useRef([]), [L, _] = B.useState(!1);
  B.useEffect(() => {
    var G;
    (G = m.voice) != null && G.sendAsAudio ? (te(), U.current = []) : F();
  }, [L]), B.useEffect(() => {
    E ? fc(
      m,
      w,
      K,
      H,
      C,
      U,
      P
    ) : Ll();
  }, [E]);
  const j = {
    backgroundImage: `url(${(f = m.voice) == null ? void 0 : f.icon})`,
    fill: "#9aa0a6",
    ...A.voiceIconStyle
  }, T = {
    backgroundImage: `url(${(s = m.voice) == null ? void 0 : s.iconDisabled})`,
    fill: "#9aa0a6",
    ...A.voiceIconStyle,
    // by default inherit the base style
    ...A.voiceIconDisabledStyle
  }, K = () => {
    _((G) => !G);
  }, te = async () => {
    const G = new Blob(U.current, { type: "audio/wav" }), $ = new File([G], "voice-input.wav", { type: "audio/wav" }), Z = await ks($);
    !Z.fileType || !Z.fileUrl || await y(/* @__PURE__ */ S.jsx(
      Bs,
      {
        file: $,
        fileType: Z.fileType,
        fileUrl: Z.fileUrl
      }
    ), "user");
  }, X = () => {
    var G, $;
    const Z = E ? (G = m.voice) == null ? void 0 : G.icon : ($ = m.voice) == null ? void 0 : $.iconDisabled;
    return !Z || typeof Z == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: `rcb-voice-icon${E && !k ? "-on" : ""}`,
        style: E && !k ? j : T
      }
    ) : Z && /* @__PURE__ */ S.jsx("span", { className: `rcb-voice-icon ${E && !k ? "on" : ""}`, children: /* @__PURE__ */ S.jsx(Z, { style: E && !k ? j : T }) });
  };
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      "aria-label": ((h = m.ariaLabel) == null ? void 0 : h.voiceButton) ?? "toggle voice",
      role: "button",
      onMouseDown: (G) => {
        G.preventDefault(), !k && w();
      },
      style: E && !k ? A.voiceButtonStyle : { ...A.voiceButtonStyle, ...A.voiceButtonDisabledStyle },
      className: E && !k ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: X()
    }
  );
}, Pc = () => {
  var f, s, h, m, A, y, P, E;
  const { settings: w } = De(), { styles: C } = Ye(), { textAreaDisabled: H } = ct(), [k, F] = B.useState(!1), { handleSubmitText: U } = Ha(), L = {
    backgroundColor: (f = w.general) == null ? void 0 : f.primaryColor,
    ...C.sendButtonStyle
  }, _ = {
    cursor: `url(${(s = w.general) == null ? void 0 : s.actionDisabledIcon}), auto`,
    backgroundColor: (h = w.general) == null ? void 0 : h.primaryColor,
    ...C.sendButtonStyle,
    // by default inherit the base style
    ...C.sendButtonDisabledStyle
  }, j = {
    backgroundColor: (m = w.general) == null ? void 0 : m.secondaryColor,
    ...C.sendButtonStyle,
    // by default inherit the base style
    ...C.sendButtonHoveredStyle
  }, T = {
    backgroundImage: `url(${(A = w.chatInput) == null ? void 0 : A.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle
  }, K = {
    backgroundImage: `url(${(y = w.chatInput) == null ? void 0 : y.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle,
    // by default inherit the base style
    ...C.sendIconDisabledStyle
  }, te = {
    backgroundImage: `url(${(P = w.chatInput) == null ? void 0 : P.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle,
    // by default inherit the base style
    ...C.sendIconHoveredStyle
  }, X = () => {
    F(!0);
  }, G = () => {
    F(!1);
  }, $ = () => {
    var Z;
    const re = (Z = w.chatInput) == null ? void 0 : Z.sendButtonIcon;
    return !re || typeof re == "string" ? /* @__PURE__ */ S.jsx(
      "span",
      {
        className: "rcb-send-icon",
        "data-testid": "rcb-send-icon",
        style: H ? K : k ? te : T
      }
    ) : re && /* @__PURE__ */ S.jsx("span", { className: "rcb-send-icon", "data-testid": "rcb-send-icon", children: /* @__PURE__ */ S.jsx(
      re,
      {
        style: H ? K : k ? te : T
      }
    ) });
  };
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      "aria-label": ((E = w.ariaLabel) == null ? void 0 : E.sendButton) ?? "send message",
      role: "button",
      onMouseEnter: X,
      onMouseLeave: G,
      onMouseDown: async (Z) => {
        Z == null || Z.preventDefault(), !H && await U();
      },
      style: H ? _ : k ? j : L,
      className: "rcb-send-button",
      children: $()
    }
  );
}, Bc = (f) => Object.values(Ve).includes(f), kc = (f, s) => {
  var h, m, A, y, P, E, w, C, H;
  const k = {
    [Ve.AUDIO_BUTTON]: (h = f.audio) == null ? void 0 : h.disabled,
    [Ve.CLOSE_CHAT_BUTTON]: (m = f.general) == null ? void 0 : m.embedded,
    [Ve.EMOJI_PICKER_BUTTON]: (A = f.emoji) == null ? void 0 : A.disabled,
    [Ve.FILE_ATTACHMENT_BUTTON]: (y = f.fileAttachment) == null ? void 0 : y.disabled,
    [Ve.NOTIFICATION_BUTTON]: (P = f.notification) == null ? void 0 : P.disabled,
    [Ve.SEND_MESSAGE_BUTTON]: !1,
    [Ve.VOICE_MESSAGE_BUTTON]: (E = f.voice) == null ? void 0 : E.disabled
  }, F = {}, U = (T) => T ? T.map((K) => {
    if (typeof K == "string") {
      if (Bc(K) && !k[K]) {
        if (F[K])
          return F[K];
        const te = s[K];
        if (typeof te == "function") {
          const X = te();
          return F[K] = X, X;
        }
        return null;
      }
      return null;
    }
    return K;
  }).filter((K) => K !== null) : [], L = U((w = f.header) == null ? void 0 : w.buttons), _ = U((C = f.chatInput) == null ? void 0 : C.buttons), j = U((H = f.footer) == null ? void 0 : H.buttons);
  return { header: L, chatInput: _, footer: j };
}, Tc = () => /* @__PURE__ */ S.jsx(xc, {}), Ic = () => /* @__PURE__ */ S.jsx(Cc, {}), Rc = () => /* @__PURE__ */ S.jsx(Ec, {}), Mc = () => /* @__PURE__ */ S.jsx(Dc, {}), Qc = () => /* @__PURE__ */ S.jsx(Pc, {}), Oc = () => /* @__PURE__ */ S.jsx(bc, {}), jc = () => /* @__PURE__ */ S.jsx(Sc, {}), Fc = () => {
  const { settings: f } = De(), s = B.useMemo(() => ({
    [Ve.CLOSE_CHAT_BUTTON]: () => Rc(),
    [Ve.AUDIO_BUTTON]: () => Tc(),
    [Ve.NOTIFICATION_BUTTON]: () => Ic(),
    [Ve.EMOJI_PICKER_BUTTON]: () => jc(),
    [Ve.FILE_ATTACHMENT_BUTTON]: () => Oc(),
    [Ve.SEND_MESSAGE_BUTTON]: () => Qc(),
    [Ve.VOICE_MESSAGE_BUTTON]: () => Mc()
  }), []), { header: h, chatInput: m, footer: A } = B.useMemo(() => kc(f, s), [f, s]), y = B.useMemo(() => h, [h]), P = B.useMemo(() => m, [m]), E = B.useMemo(() => A, [A]);
  return { headerButtons: y, chatInputButtons: P, footerButtons: E };
}, Hl = () => {
  const { settings: f } = De(), { styles: s } = Ye(), { setMessages: h } = Ol(), {
    isLoadingChatHistory: m,
    setIsLoadingChatHistory: A
  } = ct(), { chatBodyRef: y } = ot(), { callRcbEvent: P } = Wn(), { chatScrollHeight: E } = Zn(), w = B.useCallback(() => {
    var C;
    const H = Es();
    H && ((C = f.event) != null && C.rcbLoadChatHistory && P(Ee.LOAD_CHAT_HISTORY, {}).defaultPrevented || (A(!0), Ac(
      f,
      s,
      H,
      h,
      y,
      E,
      A
    )));
  }, [f, s, h]);
  return { isLoadingChatHistory: m, setIsLoadingChatHistory: A, showChatHistory: w };
}, Lc = () => {
  var f, s, h;
  const { settings: m } = De(), { styles: A } = Ye(), { showChatHistory: y } = Hl(), [P, E] = B.useState(!1), w = {
    color: (f = m.general) == null ? void 0 : f.primaryColor,
    borderColor: (s = m.general) == null ? void 0 : s.primaryColor,
    ...A.chatHistoryButtonStyle,
    // by default inherit the base style
    ...A.chatHistoryButtonHoveredStyle
  };
  return /* @__PURE__ */ S.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ S.jsx(
    "div",
    {
      onMouseEnter: () => {
        E(!0);
      },
      onMouseLeave: () => {
        E(!1);
      },
      style: P ? w : A.chatHistoryButtonStyle,
      onMouseDown: (C) => {
        C.preventDefault(), y();
      },
      className: "rcb-view-history-button",
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ S.jsx("p", { children: (h = m.chatHistory) == null ? void 0 : h.viewChatHistoryButtonText })
    }
  ) });
}, Rs = () => {
  var f;
  const { settings: s } = De(), { hasInteractedPage: h, setHasInteractedPage: m, hasFlowStarted: A, setHasFlowStarted: y } = ct(), P = B.useCallback(() => {
    var E;
    m(!0), !A && ((E = s.general) == null ? void 0 : E.flowStartTrigger) === "ON_PAGE_INTERACT" && y(!0);
    const w = new SpeechSynthesisUtterance();
    w.text = "", w.onend = () => {
      window.removeEventListener("click", P), window.removeEventListener("keydown", P), window.removeEventListener("touchstart", P);
    }, window.speechSynthesis.speak(w);
  }, [A, (f = s.general) == null ? void 0 : f.flowStartTrigger]);
  return {
    hasInteractedPage: h,
    handleFirstInteraction: P
  };
}, Hc = () => {
  var f, s, h, m;
  const A = BA(), { settings: y } = De(), {
    endStreamMessage: P,
    injectMessage: E,
    removeMessage: w,
    streamMessage: C,
    messages: H,
    replaceMessages: k
  } = La(), { getCurrPath: F, getPrevPath: U, goToPath: L, paths: _ } = Ri(), { showToast: j, dismissToast: T } = Fa(), {
    isBotTyping: K,
    isChatWindowOpen: te,
    isScrolling: X,
    hasFlowStarted: G,
    setIsChatWindowOpen: $,
    setTextAreaDisabled: Z,
    setAudioToggledOn: re,
    setVoiceToggledOn: ne,
    setIsBotTyping: ue,
    setTextAreaSensitiveMode: ae,
    setBlockAllowsAttachment: ce,
    setTimeoutId: ve
  } = ct(), { chatBodyRef: de, flowRef: Me, streamMessageMap: Ce, paramsInputRef: ee, keepVoiceOnRef: le } = ot(), fe = Me.current, { viewportHeight: be, setViewportHeight: oe, setViewportWidth: me, openChat: Oe } = Zn(), { setUpNotifications: Se } = jl(), { handleFirstInteraction: Ae } = Rs(), { showChatHistory: Le } = Hl(), { updateTextAreaFocus: Zt, setTextAreaValue: Gt } = Lo(), { syncVoice: tt } = PA(), yt = B.useRef(0);
  B.useEffect(() => (window.addEventListener("click", Ae), window.addEventListener("keydown", Ae), window.addEventListener("touchstart", Ae), () => {
    window.removeEventListener("click", Ae), window.removeEventListener("keydown", Ae), window.removeEventListener("touchstart", Ae);
  }), []), B.useEffect(() => {
    var xe, Ue, Pe;
    Se(), Z((xe = y.chatInput) == null ? void 0 : xe.disabled), $((Ue = y.chatWindow) == null ? void 0 : Ue.defaultOpen), re((Pe = y.audio) == null ? void 0 : Pe.defaultToggledOn), setTimeout(() => {
      var Ie;
      ne((Ie = y.voice) == null ? void 0 : Ie.defaultToggledOn);
    }, 1);
  }, []), B.useEffect(() => {
    !X && de != null && de.current && (de.current.scrollTop = de.current.scrollHeight);
  }, [K]), B.useEffect(() => {
    var xe, Ue, Pe, Ie;
    if ((xe = y.chatHistory) != null && xe.disabled)
      localStorage.removeItem((Ue = y.chatHistory) == null ? void 0 : Ue.storageKey);
    else if (ac(y), localStorage.getItem((Pe = y.chatHistory) == null ? void 0 : Pe.storageKey) != null) {
      const $e = Oo(/* @__PURE__ */ S.jsx(Lc, {}), "system");
      k([$e]), (Ie = y.chatHistory) != null && Ie.autoLoad && Le();
    }
  }, [(f = y.chatHistory) == null ? void 0 : f.storageKey, (s = y.chatHistory) == null ? void 0 : s.maxEntries, (h = y.chatHistory) == null ? void 0 : h.disabled]), B.useEffect(() => {
    var xe;
    A || (xe = y.general) != null && xe.embedded || !navigator.virtualKeyboard || (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (Ue) => {
      if (!Ue.target)
        return;
      const { x: Pe, y: Ie, width: $e, height: nt } = Ue.target.boundingRect;
      Pe == 0 && Ie == 0 && $e == 0 && nt == 0 ? (setTimeout(() => {
        var We;
        oe((We = window.visualViewport) == null ? void 0 : We.height);
      }, 101), setTimeout(() => {
        var We, Je;
        be != ((We = window.visualViewport) == null ? void 0 : We.height) && oe((Je = window.visualViewport) == null ? void 0 : Je.height);
      }, 1001)) : setTimeout(() => {
        var We;
        oe(((We = window.visualViewport) == null ? void 0 : We.height) - nt);
      }, 101);
    }));
  }, [A]), B.useEffect(() => {
    var xe, Ue, Pe, Ie;
    if (A)
      return;
    te && (oe((xe = window.visualViewport) == null ? void 0 : xe.height), me((Ue = window.visualViewport) == null ? void 0 : Ue.width));
    const $e = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), nt = () => yt.current = window.scrollY, We = () => {
      var dt, Rt;
      oe((dt = window.visualViewport) == null ? void 0 : dt.height), me((Rt = window.visualViewport) == null ? void 0 : Rt.width);
    }, Je = () => {
      var dt;
      window.removeEventListener("scroll", $e), window.removeEventListener("scroll", nt), (dt = window.visualViewport) == null || dt.removeEventListener("resize", We);
    };
    return te ? (Je(), document.body.style.position = "fixed", window.addEventListener("scroll", $e), (Pe = window.visualViewport) == null || Pe.addEventListener("resize", We)) : (document.body.style.position = "static", Je(), window.scrollTo({ top: yt.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", nt), (Ie = window.visualViewport) == null || Ie.removeEventListener("resize", We)), Je;
  }, [te, A]), B.useEffect(() => {
    const xe = F();
    if (!xe)
      return;
    const Ue = fe[xe];
    if (!Ue) {
      ue(!1);
      return;
    }
    const Pe = {
      prevPath: U(),
      currPath: F(),
      goToPath: L,
      setTextAreaValue: Gt,
      userInput: ee.current,
      endStreamMessage: P,
      injectMessage: E,
      removeMessage: w,
      streamMessage: C,
      openChat: Oe,
      showToast: j,
      dismissToast: T
    };
    (async (Ie, $e, nt) => {
      var We;
      await Ku(
        fe,
        Ie,
        nt,
        Z,
        ae,
        L,
        ve
      ), ue(!1), "chatDisabled" in $e || Z((We = y.chatInput) == null ? void 0 : We.disabled), ce(typeof $e.file == "function"), Zt(Ie), tt(le.current && !$e.chatDisabled), Ce.current.clear(), SA(H);
    })(xe, Ue, Pe);
  }, [_]), B.useEffect(() => {
    var xe;
    (G || ((xe = y.general) == null ? void 0 : xe.flowStartTrigger) === "ON_LOAD") && L("start");
  }, [G, (m = y.general) == null ? void 0 : m.flowStartTrigger]);
}, Nc = ({
  plugins: f
}) => {
  var s, h, m, A;
  f == null || f.map((X) => X());
  const y = BA(), { settings: P } = De(), { styles: E } = Ye(), { hasFlowStarted: w, setHasFlowStarted: C } = ct(), { inputRef: H } = ot(), {
    setChatScrollHeight: k,
    viewportHeight: F,
    viewportWidth: U,
    isChatWindowOpen: L
  } = Zn(), { headerButtons: _, chatInputButtons: j, footerButtons: T } = Fc();
  Hc();
  const K = B.useMemo(() => {
    var X;
    const G = "rcb-chatbot-global ";
    return (X = P.general) != null && X.embedded ? G + "rcb-window-embedded" : L ? G + "rcb-window-open" : G + "rcb-window-close";
  }, [P, L]), te = () => {
    var X;
    return !y && !((X = P.general) != null && X.embedded) ? {
      ...E.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${U}px`,
      height: `${F}px`
    } : E.chatWindowStyle;
  };
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: (() => {
    var X, G;
    return y && ((X = P.device) == null ? void 0 : X.desktopEnabled) || !y && ((G = P.device) == null ? void 0 : G.mobileEnabled);
  })() && /* @__PURE__ */ S.jsxs(
    "div",
    {
      onMouseDown: (X) => {
        var G, $;
        !w && ((G = P.general) == null ? void 0 : G.flowStartTrigger) === "ON_CHATBOT_INTERACT" && C(!0), y ? ($ = H.current) == null || $.blur() : X == null || X.preventDefault();
      },
      className: K,
      children: [
        /* @__PURE__ */ S.jsx(wc, {}),
        /* @__PURE__ */ S.jsx(yc, {}),
        L && !y && !((s = P.general) != null && s.embedded) && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx("style", { children: `
									html {
										overflow: hidden !important;
										touch-action: none !important;
										scroll-behavior: auto !important;
									}
								` }),
          /* @__PURE__ */ S.jsx(
            "div",
            {
              style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                zIndex: 9999
              }
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { style: te(), className: "rcb-chat-window", children: [
          ((h = P.general) == null ? void 0 : h.showHeader) && /* @__PURE__ */ S.jsx(Iu, { buttons: _ }),
          /* @__PURE__ */ S.jsx(Nu, { setChatScrollHeight: k }),
          ((m = P.general) == null ? void 0 : m.showInputRow) && /* @__PURE__ */ S.jsx(gc, { buttons: j }),
          ((A = P.general) == null ? void 0 : A.showFooter) && /* @__PURE__ */ S.jsx(mc, { buttons: T })
        ] })
      ]
    }
  ) });
}, Nl = {
  DEFAULT_URL: "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes",
  DEFAULT_EXPIRATION: "2592000",
  CACHE_KEY_PREFIX: "RCB_THEME_CACHE_DATA"
}, Uc = Nl.DEFAULT_URL, zc = Nl.DEFAULT_EXPIRATION, Ms = Nl.CACHE_KEY_PREFIX, Wc = (f, s, h) => {
  const m = localStorage.getItem(`${Ms}_${f}_${s}`);
  if (!m)
    return null;
  try {
    const A = JSON.parse(m), y = (/* @__PURE__ */ new Date()).getTime(), P = Math.floor(y / 1e3);
    return A.cacheDate + h >= P ? A : null;
  } catch (A) {
    return console.error(`Unable to fetch cache for ${f}`, A), null;
  }
}, Zc = (f, s, h, m, A) => {
  const y = (/* @__PURE__ */ new Date()).getTime(), P = Math.floor(y / 1e3), E = {
    settings: h,
    inlineStyles: m,
    cssStylesText: A,
    cacheDate: P
  };
  localStorage.setItem(`${Ms}_${f}_${s}`, JSON.stringify(E));
}, Gc = async (f, s) => {
  const h = `${s}/${f}/meta.json`;
  try {
    const m = await fetch(h);
    return m.ok ? (await m.json()).version : (console.error(`Failed to fetch meta.json from ${h}`), null);
  } catch (m) {
    return console.error(`Failed to fetch meta.json from ${h}`, m), null;
  }
}, es = async (f, s) => {
  const { id: h, version: m, baseUrl: A = Uc, cacheDuration: y = zc } = s, P = m || await Gc(h, A);
  if (!P)
    return console.error(`Unable to find version for theme: ${h}`), { settings: {}, inlineStyles: {}, cssStylesText: "" };
  const E = Wc(h, P, y);
  if (E) {
    const K = ts(f, E.cssStylesText);
    return { settings: E.settings, inlineStyles: E.inlineStyles, cssStylesText: K };
  }
  const w = `${A}/${h}/${P}/styles.css`, C = `${A}/${h}/${P}/settings.json`, H = `${A}/${h}/${P}/styles.json`;
  let k = "";
  const F = await fetch(w);
  F.ok ? k = await F.text() : console.info(`Could not fetch styles.css from ${w}`);
  const U = await fetch(C);
  let L = {};
  U.ok ? L = await U.json() : console.info(`Could not fetch settings.json from ${C}`);
  const _ = await fetch(H);
  let j = {};
  _.ok ? j = await _.json() : console.info(`Could not fetch styles.json from ${H}`), Zc(h, P, L, j, k);
  const T = ts(f, k);
  return { settings: L, inlineStyles: j, cssStylesText: T };
}, ts = (f, s) => s.split(new RegExp("(?<=})")).map((h) => {
  const m = h.trim();
  return m.startsWith("@import") || m.startsWith("@keyframes") || m.startsWith("@media") ? m : m ? `#${f} ${m}` : "";
}).join(`
`), Ul = () => kA(ss), Qs = () => kA(cs), _c = async (f, s, h, m) => {
  var A, y;
  let P = Ul(), E = Qs(), w = "";
  if (m != null)
    if (Array.isArray(m))
      for (const C of m) {
        const H = await es(f, C);
        P = Vr(H.settings, P), E = Vr(H.inlineStyles, E), w += H.cssStylesText;
      }
    else {
      const C = await es(f, m);
      P = Vr(C.settings, P), E = Vr(C.inlineStyles, E), w += C.cssStylesText;
    }
  return s != null && (P = Vr(s, P)), h != null && (E = Vr(h, E)), ((A = P.chatInput) == null ? void 0 : A.botDelay) != null && ((y = P.chatInput) == null ? void 0 : y.botDelay) < 500 && (P.chatInput.botDelay = 500), { settings: P, inlineStyles: E, cssStylesText: w };
}, Vr = (f, s) => {
  const h = [{ source: f, target: s }];
  for (; h.length; ) {
    const m = h.pop();
    if (m == null)
      continue;
    const { source: A, target: y } = m;
    for (const P of Object.keys(A)) {
      const E = P;
      if (B.isValidElement(A[E]))
        y[E] = A[E];
      else if (typeof A[E] == "object" && A[E] !== null && !Array.isArray(A[E]))
        h.push({ source: A[E], target: y[E] });
      else
        try {
          y[E] = A[E];
        } catch {
        }
    }
  }
  return s;
}, kA = (f) => {
  if (f === null || typeof f != "object")
    return f;
  const s = Array.isArray(f) ? [] : {}, h = [{ source: f, target: s }], m = /* @__PURE__ */ new WeakMap();
  for (m.set(f, s); h.length; ) {
    const A = h.pop();
    if (A == null)
      continue;
    const { source: y, target: P } = A;
    for (const E in y)
      if (Object.prototype.hasOwnProperty.call(y, E)) {
        const w = y[E];
        if (w && typeof w == "object")
          if (m.has(w))
            P[E] = m.get(w);
          else {
            const C = Array.isArray(w) ? [] : {};
            m.set(w, C), P[E] = C, h.push({ source: w, target: C });
          }
        else
          P[E] = w;
      }
  }
  return s;
}, Os = B.createContext(void 0), js = () => B.useContext(Os), Fs = ({
  children: f
}) => {
  var s;
  const h = B.useRef(""), m = B.useRef({}), [A, y] = B.useState({}), [P, E] = B.useState({}), [w, C] = B.useState(!1);
  B.useEffect(() => {
    C(!0);
  }, []);
  const H = async (k, F, U, L, _, j) => {
    h.current = k, m.current = F;
    const T = await _c(k, U, L, _);
    j.current && (j.current.textContent = T.cssStylesText), y(T.settings), E(T.inlineStyles);
  };
  return w ? /* @__PURE__ */ S.jsx("div", { style: { fontFamily: (s = A.general) == null ? void 0 : s.fontFamily }, children: /* @__PURE__ */ S.jsx(Os.Provider, { value: { loadConfig: H }, children: /* @__PURE__ */ S.jsx(ku, { settings: A, setSettings: y, children: /* @__PURE__ */ S.jsx(Tu, { styles: P, setStyles: E, children: /* @__PURE__ */ S.jsx(Fu, { children: /* @__PURE__ */ S.jsx(Ru, { botIdRef: h, flowRef: m, children: /* @__PURE__ */ S.jsx(ju, { children: /* @__PURE__ */ S.jsx(Mu, { settings: A, children: /* @__PURE__ */ S.jsx(Hu, { children: f }) }) }) }) }) }) }) }) }) : null;
}, Yc = ({
  id: f,
  flow: s,
  settings: h,
  styles: m,
  themes: A,
  plugins: y,
  setConfigLoaded: P,
  styleRootRef: E
}) => {
  const w = B.useMemo(() => f, []), C = js(), { flowRef: H } = ot();
  H && H.current !== s && (H.current = s);
  const k = async () => {
    var F, U;
    (F = h.event) != null && F.rcbPreLoadChatBot && CA(
      Ee.PRE_LOAD_CHATBOT,
      { botId: w, currPath: null, prevPath: null },
      {
        flow: s,
        settings: h,
        styles: m,
        themes: A,
        plugins: y
      }
    ).defaultPrevented || (C != null && C.loadConfig && (await C.loadConfig(w, s, h, m, A, E), P(!0)), (U = h.event) != null && U.rcbPostLoadChatBot && CA(
      Ee.POST_LOAD_CHATBOT,
      { botId: w, currPath: null, prevPath: null },
      {
        flow: s,
        settings: h,
        styles: m,
        themes: A,
        plugins: y
      }
    ));
  };
  return B.useEffect(() => {
    k();
  }, [A]), null;
}, kl = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], Xc = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: kl,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: kl,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: kl,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (f) => {
      let s = "";
      switch (f.userInput) {
        case "Quickstart":
          s = "https://react-chatbotify.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          s = "https://react-chatbotify.com/docs/api/bot_options";
          break;
        case "Examples":
          s = "https://react-chatbotify.com/docs/examples/basic_form";
          break;
        case "Github":
          s = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          s = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return f.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(s);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, Vc = ({
  id: f,
  flow: s,
  settings: h,
  styles: m,
  themes: A,
  plugins: y
}) => {
  const P = B.useMemo(() => f || "rcb-" + EA(), []), E = !s || Object.keys(s).length === 0 ? Xc : s, w = h || {}, C = m || {}, H = y || [], [k, F] = B.useState(!1), U = js(), L = B.useRef(null), [_, j] = B.useState(A || []);
  B.useEffect(() => {
    A && j(A);
  }, [A]);
  const T = () => /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx(
      Yc,
      {
        styleRootRef: L,
        id: P,
        flow: E,
        settings: w,
        styles: C,
        themes: _,
        plugins: H,
        setConfigLoaded: F
      }
    ),
    k && /* @__PURE__ */ S.jsx(Nc, { plugins: y })
  ] });
  return U == null ? /* @__PURE__ */ S.jsxs(Fs, { children: [
    /* @__PURE__ */ S.jsx("style", { ref: L }),
    /* @__PURE__ */ S.jsx("div", { id: P, children: T() })
  ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx("style", { ref: L }),
    /* @__PURE__ */ S.jsx("div", { id: P, children: T() })
  ] });
}, Jc = () => {
  const { audioToggledOn: f, toggleAudio: s } = Ts();
  return {
    audioToggledOn: f,
    toggleAudio: s
  };
}, Kc = () => {
  const { botIdRef: f } = ot();
  return {
    getBotId: () => f.current
  };
}, $c = () => {
  const { getBotId: f } = Kc();
  return {
    getBotId: f
  };
}, qc = () => {
  const { isChatWindowOpen: f, toggleChatWindow: s } = Zn();
  return {
    isChatWindowOpen: f,
    toggleChatWindow: s
  };
}, ed = () => {
  const { hasInteractedPage: f } = Rs();
  return {
    hasInteractedPage: f
  };
}, td = () => {
  const { replaceMessages: f } = La(), { replacePaths: s } = Ri(), { replaceToasts: h } = Fa(), { hasFlowStarted: m } = ct(), { flowRef: A } = ot();
  return {
    hasFlowStarted: m,
    restartFlow: () => {
      f([]), h([]), s(["start"]);
    },
    getFlow: () => A.current ?? {}
  };
}, nd = () => {
  const { hasFlowStarted: f, restartFlow: s, getFlow: h } = td();
  return {
    hasFlowStarted: f,
    restartFlow: s,
    getFlow: h
  };
}, rd = () => {
  const {
    endStreamMessage: f,
    injectMessage: s,
    removeMessage: h,
    streamMessage: m,
    messages: A,
    replaceMessages: y
  } = La();
  return {
    endStreamMessage: f,
    injectMessage: s,
    removeMessage: h,
    streamMessage: m,
    messages: A,
    replaceMessages: y
  };
}, od = () => {
  const { settings: f, setSettings: s } = De();
  return {
    settings: f,
    replaceSettings: (h) => {
      s(h);
    },
    updateSettings: (h) => {
      s(kA(Vr(h, f)));
    }
  };
}, ad = () => {
  const { settings: f, replaceSettings: s, updateSettings: h } = od();
  return {
    settings: f,
    replaceSettings: s,
    updateSettings: h
  };
}, id = () => {
  const { styles: f, setStyles: s } = Ye();
  return {
    styles: f,
    replaceStyles: (h) => {
      s(h);
    },
    updateStyles: (h) => {
      s(kA(Vr(h, f)));
    }
  };
}, Ad = () => {
  const { styles: f, replaceStyles: s, updateStyles: h } = id();
  return {
    styles: f,
    replaceStyles: s,
    updateStyles: h
  };
}, ld = () => {
  ot();
  const {
    textAreaDisabled: f,
    toggleTextAreaDisabled: s,
    textAreaSensitiveMode: h,
    toggleTextAreaSensitiveMode: m,
    getTextAreaValue: A,
    setTextAreaValue: y,
    focusTextArea: P
  } = Lo();
  return {
    textAreaDisabled: f,
    toggleTextAreaDisabled: s,
    textAreaSensitiveMode: h,
    toggleTextAreaSensitiveMode: m,
    getTextAreaValue: A,
    setTextAreaValue: y,
    focusTextArea: P
  };
}, sd = () => {
  const { showToast: f, dismissToast: s, toasts: h, replaceToasts: m } = Fa();
  return {
    showToast: f,
    dismissToast: s,
    toasts: h,
    replaceToasts: m
  };
}, ud = () => {
  const { voiceToggledOn: f, toggleVoice: s } = PA();
  return {
    voiceToggledOn: f,
    toggleVoice: s
  };
}, cd = () => {
  const { showChatHistory: f } = Hl();
  return {
    showChatHistory: f,
    getHistoryMessages: Es,
    setHistoryMessages: Cs
  };
}, dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ve,
  ChatBotProvider: Fs,
  default: Vc,
  getDefaultSettings: Ul,
  getDefaultStyles: Qs,
  useAudio: Jc,
  useBotId: $c,
  useChatHistory: cd,
  useChatWindow: qc,
  useFirstInteraction: ed,
  useFlow: nd,
  useMessages: rd,
  useNotifications: Is,
  usePaths: vs,
  useSettings: ad,
  useStyles: Ad,
  useTextArea: ld,
  useToasts: sd,
  useVoice: ud
}, Symbol.toStringTag, { value: "Module" })), fd = B.lazy(() => Promise.resolve().then(() => dd)), Ls = Ul(), hd = B.createContext({
  settings: Ls,
  setSettings: () => {
  }
});
function pd() {
  const [f, s] = B.useState(""), [h, m] = B.useState(""), [A, y] = B.useState(!1), [P, E] = B.useState(!1), [w, C] = B.useState({
    ...Ls,
    voice: {
      disabled: !0
    },
    fileAttachment: {
      disabled: !0
    },
    emoji: {
      disabled: !0
    },
    chatHistory: {
      disabled: !0
    },
    header: {
      title: "Vastlink Bot",
      avatar: "/imgs/logos/logo.svg"
    },
    notification: {
      disabled: !0
    },
    tooltip: {
      mode: "NEVER",
      text: "Talk to me 🚀"
    },
    general: {
      showFooter: !1
    },
    chatButton: {
      icon: "/imgs/logos/chatbot.svg"
    }
  }), [H, k] = B.useState(!1), [F, U] = B.useState({});
  B.useEffect(() => {
    k(!0);
  }, []);
  const L = async (K) => {
    const { address: te } = rs.all();
    s(te);
    let G = await Ws.getInstance().createToken(K).getBalance(te);
    G = Zs(G), m(G);
  }, _ = async (K) => {
    Dl("handleQuestion params", K);
    const te = await zs.post("/ai/chat", {
      question: K.userInput
    }), {
      action: X,
      coin: G,
      amount: $,
      to: Z
    } = te.data;
    X ? (U({
      action: X,
      toEmail: Z,
      token: G,
      amount: $
    }), await L(G), E(!0)) : U({
      action: "other",
      answer: te.data
    });
  }, j = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send ETH, MATIC, or TVWT to any email address. For example, you can say: 'Send 0.01 ETH to example@gmail.com'. How can I assist you today?",
      function: _,
      path: "transfer"
    },
    transfer: {
      message: (K) => {
        if (Dl("end", F), F.action === "transfer")
          return "Your transfer request has been processed. Click the button below to open the transfer confirmation dialog.";
        if (F.action === "other")
          return F.answer;
      },
      function: _,
      component: (K) => {
        if (F.action === "transfer")
          return Dl(P, f, h, F.token, F.toEmail, F.amount), /* @__PURE__ */ S.jsx("div", { className: "pl-4 pt-2", children: P && f && h && F.token && F.toEmail && F.amount && /* @__PURE__ */ S.jsx(Vs, { onClick: () => y(!0) }) });
      },
      // chatDisabled: true,
      path: "transfer"
    }
  }, T = {
    botBubbleStyle: {
      backgroundColor: "#333"
    },
    headerStyle: {
      backgroundImage: "linear-gradient(to right, #333, rgb(66, 176, 197))"
    },
    chatButtonStyle: {
      background: "#fff",
      borderRadius: "50%",
      width: "44px",
      height: "44px"
    },
    chatIconStyle: {
      // backgroundImage: `url('/imgs/logos/chatbot.png')`,
      width: "44px",
      height: "44px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain"
    },
    tooltipStyle: {
      background: "rgb(66, 176, 197)"
    },
    sendButtonHoveredStyle: {
      background: "rgba(66, 176, 197, 0.8)"
    }
  };
  return /* @__PURE__ */ S.jsx(S.Fragment, { children: H && /* @__PURE__ */ S.jsx(B.Suspense, { fallback: null, children: /* @__PURE__ */ S.jsxs("div", { children: [
    /* @__PURE__ */ S.jsx(hd.Provider, { value: { settings: w, setSettings: C }, children: /* @__PURE__ */ S.jsx(fd, { settings: w, flow: j, styles: T }) }),
    /* @__PURE__ */ S.jsx(
      Us,
      {
        open: A,
        setOpen: y,
        balance: h,
        address: f,
        tokenType: F.token,
        defaultTo: F.toEmail,
        defaultAmount: F.amount,
        defaultNote: "",
        onClose: () => {
          s(""), m("");
        }
      }
    )
  ] }) }) });
}
function ns(f) {
  const { pathname: s } = Rl();
  return f.some((m) => {
    var A;
    switch (m.match) {
      case "exact":
        return s === m.path;
      case "startsWith":
        return s.startsWith(m.path);
      case "endsWith":
        return s.endsWith(m.path);
      case "includes":
        return s.includes(m.path);
      case "pattern":
        return (A = m.pattern) == null ? void 0 : A.test(s);
      default:
        return !1;
    }
  });
}
const vd = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
], gd = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
];
function md() {
  const f = ns(vd), s = ns(gd);
  return {
    hideChatbot: f,
    disableHeader: s
  };
}
function Pd() {
  const { hideChatbot: f } = md();
  return /* @__PURE__ */ S.jsxs("section", { className: "bg-background w-full flex flex-col min-h-screen", children: [
    /* @__PURE__ */ S.jsx(qs, {}),
    /* @__PURE__ */ S.jsx("div", { className: "flex-grow", children: /* @__PURE__ */ S.jsx(Js, { children: /* @__PURE__ */ S.jsx(_s, {}) }) }),
    !f && /* @__PURE__ */ S.jsx(pd, {})
  ] });
}
export {
  Pd as default
};
