import { j as b } from "./vendor-radix-BYJ0AyiX.js";
import { a as Fa, c as et, l as zl, B as Os, u as js, D as Wl, b as Zl, d as Gl, e as vr, f as is, h as As, S as Fs, g as Ii, G as Ls, t as _l, i as Hs } from "./main-Cs8rq8oH.js";
import { j as DA, k as Rl, L as Ns, r as k, a as Us, p as Ml, O as zs } from "./vendor-react-CuOkI7kW.js";
import { u as Ql, B as ls } from "./vendor-utils-BfzDPiRN.js";
import { X as Ws } from "./vendor-ui-utils-2_WY-nJY.js";
import { W as Yl, V as Zs } from "./index-COcY0cE_.js";
import { S as Gs } from "./SendButton-CM4BBfx0.js";
import { W as _s, M as Ys } from "./MarketplaceProvider-DRaB_Td7.js";
function Xs({ routes: f, currentRouteName: c }) {
  const { pathname: g } = DA(), m = Rl(), A = Fa.isAuthenticated();
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: /* @__PURE__ */ b.jsx("div", { className: et(
    "hidden tablet:flex",
    "justify-start items-center gap-6"
  ), children: f.map((w) => {
    const P = g.startsWith(w.href);
    return /* @__PURE__ */ b.jsxs(
      "div",
      {
        className: et(
          "py-2 justify-start items-center gap-2 flex relative",
          P && "text-white"
        ),
        children: [
          /* @__PURE__ */ b.jsx(
            Ns,
            {
              className: et(
                "text-[#a1a1a1] text-base font-medium leading-none cursor-pointer",
                P && "text-white",
                !A && "cursor-default"
              ),
              to: w.href,
              onClick: (E) => {
                A || (E.preventDefault(), m("/auth"));
              },
              children: w.name
            }
          ),
          P && /* @__PURE__ */ b.jsx("div", { className: "absolute -bottom-2 left-0 w-full h-0.5 bg-white" })
        ]
      },
      w.name
    );
  }) }) });
}
function Xl({
  onLanguageChange: f
}) {
  const { i18n: c } = Ql(), [g, m] = k.useState(!1);
  k.useEffect(() => {
    const P = zl.getData();
    P && c.changeLanguage(P);
  }, [c]);
  const A = (P) => {
    c.changeLanguage(P), zl.setData(P), m(!1), f == null || f();
  }, w = /* @__PURE__ */ b.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center font-['Roboto']", children: [
    /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 bg-[#1f2533]/40" }),
    /* @__PURE__ */ b.jsx("div", { className: et(
      "hidden tablet:block",
      "relative z-50 w-[600px]"
    ), children: /* @__PURE__ */ b.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ b.jsxs("header", { className: "flex justify-between items-center px-5 py-[14px] border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ b.jsx("p", { className: "text-black text-lg font-medium font-['Roboto'] leading-normal", children: "Choose your language" }),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            onClick: () => m(!1),
            className: "text-[#929292] hover:text-[#929292]/80",
            children: /* @__PURE__ */ b.jsx(Ws, {})
          }
        )
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "p-6 border-b border-[#EBEBEB] flex justify-center gap-[82px]", children: [
        /* @__PURE__ */ b.jsxs(
          "div",
          {
            onClick: () => A("en"),
            className: et(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              c.language === "en" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "English",
              c.language === "en" && /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        ),
        /* @__PURE__ */ b.jsxs(
          "div",
          {
            onClick: () => A("zh"),
            className: et(
              "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
              c.language === "zh" ? "text-brand-foreground" : "text-black/90"
            ),
            children: [
              "简体中文",
              c.language === "zh" && /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ b.jsx("footer", { className: "flex justify-end items-center gap-2 px-5 py-[30px]" })
    ] }) }),
    /* @__PURE__ */ b.jsx("div", { className: et(
      "block tablet:hidden",
      "relative z-50 w-[280px]"
    ), children: /* @__PURE__ */ b.jsxs("div", { className: "bg-background text-primary rounded-[6px] w-full", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "px-6 py-7 border-b border-[#EBEBEB]", children: [
        /* @__PURE__ */ b.jsx("p", { className: "text-black text-lg font-bold font-['Roboto'] leading-normal mb-2", children: "Choose your language" }),
        /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ b.jsxs(
            "div",
            {
              onClick: () => A("en"),
              className: et(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                c.language === "en" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "English",
                c.language === "en" && /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          ),
          /* @__PURE__ */ b.jsxs(
            "div",
            {
              onClick: () => A("zh"),
              className: et(
                "text-sm font-normal leading-snug cursor-pointer py-1 flex items-center gap-1",
                c.language === "zh" ? "text-brand-foreground" : "text-black/90"
              ),
              children: [
                "简体中文",
                c.language === "zh" && /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ b.jsx("footer", { className: "", children: /* @__PURE__ */ b.jsx(
        Os,
        {
          variant: "ghost",
          className: et(
            "w-full text-[15px] rounded-none",
            "hover:bg-black/5"
          ),
          onClick: () => m(!1),
          children: "Cancel"
        }
      ) })
    ] }) })
  ] });
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ b.jsx(
        "img",
        {
          className: et(
            "w-[24px] h-[24px] cursor-pointer",
            "hidden tablet:flex"
          ),
          src: "/imgs/icons/language.svg",
          onClick: () => m(!0)
        }
      ),
      /* @__PURE__ */ b.jsx(
        "div",
        {
          className: "flex tablet:hidden cursor-pointer",
          onClick: () => m(!0),
          children: "Language"
        }
      )
    ] }),
    g && Us.createPortal(
      /* @__PURE__ */ b.jsx(
        "div",
        {
          className: "fixed inset-0 z-[100] flex items-center justify-center font-['Roboto']",
          style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0 },
          children: w
        }
      ),
      document.body
      // mount to body to avoid layout shift
    )
  ] });
}
function Vs() {
  const { t: f } = Ql(), [c, g] = k.useState(!1), m = Fa.isAuthenticated(), A = Rl(), { pathname: w } = DA(), { data: P } = js(), [E, y] = k.useState("");
  k.useEffect(() => {
    P && y(P.avatar || Fa.getUserRandomAvatar(P.avatarIndex));
  }, [P]);
  const C = [
    {
      name: f("header.dashboard"),
      href: "/dashboard"
    },
    {
      name: f("header.marketplace"),
      href: "/marketplace"
    }
  ], H = async () => {
    try {
      await is.post("/auth/logout"), Fa.clearAllAuthData(), window.location.href = "/auth";
    } catch (B) {
      const Q = As(B);
      ls.error(Q.message);
    }
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "justify-start items-center gap-[21px] flex", children: [
    /* @__PURE__ */ b.jsx("div", { className: "hidden tablet:flex", children: /* @__PURE__ */ b.jsx(Yl, {}) }),
    /* @__PURE__ */ b.jsxs("div", { className: "justify-start items-center gap-7 flex", children: [
      /* @__PURE__ */ b.jsx("div", { className: "tablet:hidden", children: /* @__PURE__ */ b.jsxs(
        Wl,
        {
          modal: !1,
          open: c,
          onOpenChange: g,
          children: [
            /* @__PURE__ */ b.jsx(Zl, { asChild: !0, children: /* @__PURE__ */ b.jsx("button", { className: "w-6 h-6 flex items-center justify-center", children: /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/menu.svg", className: "w-6 h-6" }) }) }),
            /* @__PURE__ */ b.jsxs(Gl, { className: "bg-white border-none", children: [
              C.map((B) => {
                const Q = w.startsWith(B.href);
                return /* @__PURE__ */ b.jsx(
                  vr,
                  {
                    onClick: (U) => {
                      if (!m) {
                        U.preventDefault(), A("/auth");
                        return;
                      }
                      A(B.href);
                    },
                    children: Q ? /* @__PURE__ */ b.jsxs("div", { className: "w-full flex items-center justify-between gap-2", children: [
                      /* @__PURE__ */ b.jsx("div", { className: "text-brand-foreground", children: B.name }),
                      /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
                    ] }) : /* @__PURE__ */ b.jsx("div", { className: "", children: B.name })
                  },
                  B.name
                );
              }),
              /* @__PURE__ */ b.jsx(
                vr,
                {
                  className: et("flex tablet:hidden"),
                  onSelect: (B) => B.preventDefault(),
                  children: /* @__PURE__ */ b.jsx(Yl, { className: "p-0 bg-transparent" })
                }
              ),
              /* @__PURE__ */ b.jsx("hr", {}),
              /* @__PURE__ */ b.jsx(
                vr,
                {
                  onSelect: (B) => B.preventDefault(),
                  children: /* @__PURE__ */ b.jsx(Xl, { onLanguageChange: () => g(!1) })
                }
              ),
              /* @__PURE__ */ b.jsx(vr, { onSelect: () => A("/profile"), children: w === "/profile" ? /* @__PURE__ */ b.jsxs("div", { className: "w-full flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ b.jsx("div", { className: "text-brand-foreground", children: "Profile" }),
                /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ] }) : /* @__PURE__ */ b.jsx("div", { className: "", children: "Profile" }) }),
              /* @__PURE__ */ b.jsx(vr, { onSelect: () => A("/my-rewards"), children: "My Rewards" }),
              /* @__PURE__ */ b.jsx("hr", {}),
              /* @__PURE__ */ b.jsx(
                vr,
                {
                  onSelect: (B) => B.preventDefault(),
                  className: et(
                    !m && "hidden"
                  ),
                  children: /* @__PURE__ */ b.jsx("div", { onClick: () => H(), children: "Logout" })
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ b.jsx("div", { className: et(
        "hidden tablet:flex",
        "justify-start items-center gap-6 flex-shrink-0"
      ), children: /* @__PURE__ */ b.jsxs(
        Wl,
        {
          onOpenChange: () => {
            m || A("/auth");
          },
          children: [
            /* @__PURE__ */ b.jsx(Zl, { asChild: !0, children: /* @__PURE__ */ b.jsx(
              "img",
              {
                className: "w-[28px] h-[28px] rounded-full flex-shrink-0 cursor-pointer",
                src: E
              }
            ) }),
            /* @__PURE__ */ b.jsxs(Gl, { className: "bg-white", children: [
              /* @__PURE__ */ b.jsx(vr, { onSelect: () => A("/profile"), children: w === "/profile" ? /* @__PURE__ */ b.jsxs("div", { className: "w-full flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ b.jsx("div", { className: "text-brand-foreground", children: "Profile" }),
                /* @__PURE__ */ b.jsx("img", { src: "/imgs/icons/checked.svg", alt: "" })
              ] }) : /* @__PURE__ */ b.jsx("div", { className: "", children: "Profile" }) }),
              /* @__PURE__ */ b.jsx(vr, { onSelect: () => A("/my-rewards"), children: "My Rewards" }),
              /* @__PURE__ */ b.jsx(vr, { onSelect: () => H(), children: "Logout" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ b.jsx("div", { className: et(
        "hidden laptop:block",
        "w-[2px] h-[20px] bg-[#404040]"
      ) }),
      /* @__PURE__ */ b.jsx("div", { className: et(
        "hidden tablet:flex",
        "justify-start items-start gap-6 flex-shrink-0 cursor-pointer"
      ), children: /* @__PURE__ */ b.jsx(Xl, {}) })
    ] })
  ] });
}
function Js() {
  const { pathname: f } = DA(), { t: c } = Ql(), g = Rl(), m = Fa.isAuthenticated(), A = [
    {
      name: c("header.dashboard"),
      href: "/dashboard"
    },
    {
      name: c("header.marketplace"),
      href: "/marketplace"
    }
    // {
    //   name: t('header.community'),
    //   href: '/community',
    // },
  ], w = A.find((E) => f.startsWith(E.href)), P = (w == null ? void 0 : w.name) || "Home";
  return /* @__PURE__ */ b.jsxs("div", { className: et(
    "w-full h-[60px] bg-[#111111] shadow justify-between items-center inline-flex",
    "tablet:px-10 px-4"
  ), children: [
    /* @__PURE__ */ b.jsxs("div", { className: "items-center flex", children: [
      /* @__PURE__ */ b.jsxs(
        "div",
        {
          className: et(
            "items-center gap-2 flex mr-[46px]",
            "mr-[20px] tablet:mr-[46px]",
            "cursor-pointer"
          ),
          onClick: () => g("/"),
          children: [
            /* @__PURE__ */ b.jsx("img", { src: "/imgs/logos/logo.svg" }),
            /* @__PURE__ */ b.jsx("div", { className: et(
              'text-white text-xl font-bold font-["Roboto_Mono"] leading-4'
              // 'hidden tablet:block',
            ), children: "Vastlink" })
          ]
        }
      ),
      m && /* @__PURE__ */ b.jsx(
        Xs,
        {
          routes: A,
          currentRouteName: P
        }
      )
    ] }),
    m && /* @__PURE__ */ b.jsx(Vs, {})
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
var Vl;
function Ks() {
  if (Vl) return Mo;
  Vl = 1;
  var f = k;
  function c(a) {
    for (var u = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, v = 1; v < arguments.length; v++) u += "&args[]=" + encodeURIComponent(arguments[v]);
    return "Minified React error #" + a + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, A = {}, w = {};
  function P(a) {
    return g.call(w, a) ? !0 : g.call(A, a) ? !1 : m.test(a) ? w[a] = !0 : (A[a] = !0, !1);
  }
  function E(a, u, v, x, O, I, N) {
    this.acceptsBooleans = u === 2 || u === 3 || u === 4, this.attributeName = x, this.attributeNamespace = O, this.mustUseProperty = v, this.propertyName = a, this.type = u, this.sanitizeURL = I, this.removeEmptyString = N;
  }
  var y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    y[a] = new E(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var u = a[0];
    y[u] = new E(u, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    y[a] = new E(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    y[a] = new E(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    y[a] = new E(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    y[a] = new E(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    y[a] = new E(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    y[a] = new E(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    y[a] = new E(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function H(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var u = a.replace(
      C,
      H
    );
    y[u] = new E(u, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var u = a.replace(C, H);
    y[u] = new E(u, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var u = a.replace(C, H);
    y[u] = new E(u, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    y[a] = new E(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), y.xlinkHref = new E("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    y[a] = new E(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var B = {
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
  }, Q = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function(a) {
    Q.forEach(function(u) {
      u = u + a.charAt(0).toUpperCase() + a.substring(1), B[u] = B[a];
    });
  });
  var U = /["'&<>]/;
  function L(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var u = U.exec(a);
    if (u) {
      var v = "", x, O = 0;
      for (x = u.index; x < a.length; x++) {
        switch (a.charCodeAt(x)) {
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
        O !== x && (v += a.substring(O, x)), O = x + 1, v += u;
      }
      a = O !== x ? v + a.substring(O, x) : v;
    }
    return a;
  }
  var _ = /([A-Z])/g, F = /^ms-/, T = Array.isArray;
  function K(a, u) {
    return { insertionMode: a, selectedValue: u };
  }
  function te(a, u, v) {
    switch (u) {
      case "select":
        return K(1, v.value != null ? v.value : v.defaultValue);
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
  function G(a, u, v) {
    if (typeof v != "object") throw Error(c(62));
    u = !0;
    for (var x in v) if (g.call(v, x)) {
      var O = v[x];
      if (O != null && typeof O != "boolean" && O !== "") {
        if (x.indexOf("--") === 0) {
          var I = L(x);
          O = L(("" + O).trim());
        } else {
          I = x;
          var N = X.get(I);
          N !== void 0 || (N = L(I.replace(_, "-$1").toLowerCase().replace(F, "-ms-")), X.set(I, N)), I = N, O = typeof O == "number" ? O === 0 || g.call(B, x) ? "" + O : O + "px" : L(("" + O).trim());
        }
        u ? (u = !1, a.push(' style="', I, ":", O)) : a.push(";", I, ":", O);
      }
    }
    u || a.push('"');
  }
  function $(a, u, v, x) {
    switch (v) {
      case "style":
        G(a, u, x);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
      if (u = y.hasOwnProperty(v) ? y[v] : null, u !== null) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!u.acceptsBooleans) return;
        }
        switch (v = u.attributeName, u.type) {
          case 3:
            x && a.push(" ", v, '=""');
            break;
          case 4:
            x === !0 ? a.push(" ", v, '=""') : x !== !1 && a.push(" ", v, '="', L(x), '"');
            break;
          case 5:
            isNaN(x) || a.push(" ", v, '="', L(x), '"');
            break;
          case 6:
            !isNaN(x) && 1 <= x && a.push(" ", v, '="', L(x), '"');
            break;
          default:
            u.sanitizeURL && (x = "" + x), a.push(" ", v, '="', L(x), '"');
        }
      } else if (P(v)) {
        switch (typeof x) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (u = v.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") return;
        }
        a.push(" ", v, '="', L(x), '"');
      }
    }
  }
  function Z(a, u, v) {
    if (u != null) {
      if (v != null) throw Error(c(60));
      if (typeof u != "object" || !("__html" in u)) throw Error(c(61));
      u = u.__html, u != null && a.push("" + u);
    }
  }
  function re(a) {
    var u = "";
    return f.Children.forEach(a, function(v) {
      v != null && (u += v);
    }), u;
  }
  function ne(a, u, v, x) {
    a.push(ce(v));
    var O = v = null, I;
    for (I in u) if (g.call(u, I)) {
      var N = u[I];
      if (N != null) switch (I) {
        case "children":
          v = N;
          break;
        case "dangerouslySetInnerHTML":
          O = N;
          break;
        default:
          $(a, x, I, N);
      }
    }
    return a.push(">"), Z(a, O, v), typeof v == "string" ? (a.push(L(v)), null) : v;
  }
  var Ae = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ae = /* @__PURE__ */ new Map();
  function ce(a) {
    var u = ae.get(a);
    if (u === void 0) {
      if (!Ae.test(a)) throw Error(c(65, a));
      u = "<" + a, ae.set(a, u);
    }
    return u;
  }
  function ve(a, u, v, x, O) {
    switch (u) {
      case "select":
        a.push(ce("select"));
        var I = null, N = null;
        for (ue in v) if (g.call(v, ue)) {
          var V = v[ue];
          if (V != null) switch (ue) {
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
              $(a, x, ue, V);
          }
        }
        return a.push(">"), Z(a, N, I), I;
      case "option":
        N = O.selectedValue, a.push(ce("option"));
        var ie = V = null, he = null, ue = null;
        for (I in v) if (g.call(v, I)) {
          var ke = v[I];
          if (ke != null) switch (I) {
            case "children":
              V = ke;
              break;
            case "selected":
              he = ke;
              break;
            case "dangerouslySetInnerHTML":
              ue = ke;
              break;
            case "value":
              ie = ke;
            default:
              $(a, x, I, ke);
          }
        }
        if (N != null) if (v = ie !== null ? "" + ie : re(V), T(N)) {
          for (x = 0; x < N.length; x++)
            if ("" + N[x] === v) {
              a.push(' selected=""');
              break;
            }
        } else "" + N === v && a.push(' selected=""');
        else he && a.push(' selected=""');
        return a.push(">"), Z(a, ue, V), V;
      case "textarea":
        a.push(ce("textarea")), ue = N = I = null;
        for (V in v) if (g.call(v, V) && (ie = v[V], ie != null)) switch (V) {
          case "children":
            ue = ie;
            break;
          case "value":
            I = ie;
            break;
          case "defaultValue":
            N = ie;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(c(91));
          default:
            $(
              a,
              x,
              V,
              ie
            );
        }
        if (I === null && N !== null && (I = N), a.push(">"), ue != null) {
          if (I != null) throw Error(c(92));
          if (T(ue) && 1 < ue.length) throw Error(c(93));
          I = "" + ue;
        }
        return typeof I == "string" && I[0] === `
` && a.push(`
`), I !== null && a.push(L("" + I)), null;
      case "input":
        a.push(ce("input")), ie = ue = V = I = null;
        for (N in v) if (g.call(v, N) && (he = v[N], he != null)) switch (N) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(399, "input"));
          case "defaultChecked":
            ie = he;
            break;
          case "defaultValue":
            V = he;
            break;
          case "checked":
            ue = he;
            break;
          case "value":
            I = he;
            break;
          default:
            $(a, x, N, he);
        }
        return ue !== null ? $(a, x, "checked", ue) : ie !== null && $(a, x, "checked", ie), I !== null ? $(a, x, "value", I) : V !== null && $(a, x, "value", V), a.push("/>"), null;
      case "menuitem":
        a.push(ce("menuitem"));
        for (var At in v) if (g.call(v, At) && (I = v[At], I != null)) switch (At) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(400));
          default:
            $(a, x, At, I);
        }
        return a.push(">"), null;
      case "title":
        a.push(ce("title")), I = null;
        for (ke in v) if (g.call(v, ke) && (N = v[ke], N != null)) switch (ke) {
          case "children":
            I = N;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(c(434));
          default:
            $(a, x, ke, N);
        }
        return a.push(">"), I;
      case "listing":
      case "pre":
        a.push(ce(u)), N = I = null;
        for (ie in v) if (g.call(v, ie) && (V = v[ie], V != null)) switch (ie) {
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
          if (I != null) throw Error(c(60));
          if (typeof N != "object" || !("__html" in N)) throw Error(c(61));
          v = N.__html, v != null && (typeof v == "string" && 0 < v.length && v[0] === `
` ? a.push(`
`, v) : a.push("" + v));
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
        a.push(ce(u));
        for (var lt in v) if (g.call(v, lt) && (I = v[lt], I != null)) switch (lt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(399, u));
          default:
            $(a, x, lt, I);
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
          v,
          u,
          x
        );
      case "html":
        return O.insertionMode === 0 && a.push("<!DOCTYPE html>"), ne(a, v, u, x);
      default:
        if (u.indexOf("-") === -1 && typeof v.is != "string") return ne(a, v, u, x);
        a.push(ce(u)), N = I = null;
        for (he in v) if (g.call(v, he) && (V = v[he], V != null)) switch (he) {
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
  function de(a, u, v) {
    if (a.push('<!--$?--><template id="'), v === null) throw Error(c(395));
    return a.push(v), a.push('"></template>');
  }
  function Me(a, u, v, x) {
    switch (v.insertionMode) {
      case 0:
      case 1:
        return a.push('<div hidden id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 2:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 3:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 4:
        return a.push('<table hidden id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 5:
        return a.push('<table hidden><tbody id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 6:
        return a.push('<table hidden><tr id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      case 7:
        return a.push('<table hidden><colgroup id="'), a.push(u.segmentPrefix), u = x.toString(16), a.push(u), a.push('">');
      default:
        throw Error(c(397));
    }
  }
  function Ce(a, u) {
    switch (u.insertionMode) {
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
        throw Error(c(397));
    }
  }
  var ee = /[<\u2028\u2029]/g;
  function se(a) {
    return JSON.stringify(a).replace(ee, function(u) {
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
  function fe(a, u) {
    return u = u === void 0 ? "" : u, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: u + "P:", segmentPrefix: u + "S:", boundaryPrefix: u + "B:", idPrefix: u, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: a };
  }
  function be(a, u, v, x) {
    return v.generateStaticMarkup ? (a.push(L(u)), !1) : (u === "" ? a = x : (x && a.push("<!-- -->"), a.push(L(u)), a = !0), a);
  }
  var oe = Object.assign, me = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), Se = Symbol.for("react.fragment"), le = Symbol.for("react.strict_mode"), Le = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), mt = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), Ie = Symbol.for("react.scope"), Ke = Symbol.for("react.debug_trace_mode"), nt = Symbol.for("react.legacy_hidden"), ze = Symbol.for("react.default_value"), Xe = Symbol.iterator;
  function ut(a) {
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
      case le:
        return "StrictMode";
      case mt:
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
        var u = a.render;
        return a = a.displayName, a || (a = u.displayName || u.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case Ue:
        return u = a.displayName || null, u !== null ? u : ut(a.type) || "Memo";
      case Pe:
        u = a._payload, a = a._init;
        try {
          return ut(a(u));
        } catch {
        }
    }
    return null;
  }
  var Rt = {};
  function mr(a, u) {
    if (a = a.contextTypes, !a) return Rt;
    var v = {}, x;
    for (x in a) v[x] = u[x];
    return v;
  }
  var St = null;
  function qe(a, u) {
    if (a !== u) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var v = u.parent;
      if (a === null) {
        if (v !== null) throw Error(c(401));
      } else {
        if (v === null) throw Error(c(401));
        qe(a, v);
      }
      u.context._currentValue2 = u.value;
    }
  }
  function _e(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && _e(a);
  }
  function Zn(a) {
    var u = a.parent;
    u !== null && Zn(u), a.context._currentValue2 = a.value;
  }
  function Gn(a, u) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(c(402));
    a.depth === u.depth ? qe(a, u) : Gn(a, u);
  }
  function _n(a, u) {
    var v = u.parent;
    if (v === null) throw Error(c(402));
    a.depth === v.depth ? qe(a, v) : _n(a, v), u.context._currentValue2 = u.value;
  }
  function We(a) {
    var u = St;
    u !== a && (u === null ? Zn(a) : a === null ? _e(u) : u.depth === a.depth ? qe(u, a) : u.depth > a.depth ? Gn(u, a) : _n(u, a), St = a);
  }
  var Yn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, u) {
    a = a._reactInternals, a.queue !== null && a.queue.push(u);
  }, enqueueReplaceState: function(a, u) {
    a = a._reactInternals, a.replace = !0, a.queue = [u];
  }, enqueueForceUpdate: function() {
  } };
  function yr(a, u, v, x) {
    var O = a.state !== void 0 ? a.state : null;
    a.updater = Yn, a.props = v, a.state = O;
    var I = { queue: [], replace: !1 };
    a._reactInternals = I;
    var N = u.contextType;
    if (a.context = typeof N == "object" && N !== null ? N._currentValue2 : x, N = u.getDerivedStateFromProps, typeof N == "function" && (N = N(v, O), O = N == null ? O : oe({}, O, N), a.state = O), typeof u.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (u = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), u !== a.state && Yn.enqueueReplaceState(a, a.state, null), I.queue !== null && 0 < I.queue.length) if (u = I.queue, N = I.replace, I.queue = null, I.replace = !1, N && u.length === 1) a.state = u[0];
    else {
      for (I = N ? u[0] : a.state, O = !0, N = N ? 1 : 0; N < u.length; N++) {
        var V = u[N];
        V = typeof V == "function" ? V.call(a, I, v, x) : V, V != null && (O ? (O = !1, I = oe({}, I, V)) : oe(I, V));
      }
      a.state = I;
    }
    else I.queue = null;
  }
  var wr = { id: 1, overflow: "" };
  function Xn(a, u, v) {
    var x = a.id;
    a = a.overflow;
    var O = 32 - Cn(x) - 1;
    x &= ~(1 << O), v += 1;
    var I = 32 - Cn(u) + O;
    if (30 < I) {
      var N = O - O % 5;
      return I = (x & (1 << N) - 1).toString(32), x >>= N, O -= N, { id: 1 << 32 - Cn(u) + O | v << O | x, overflow: I + a };
    }
    return { id: 1 << I | v << O | x, overflow: a };
  }
  var Cn = Math.clz32 ? Math.clz32 : $t, Kr = Math.log, Vn = Math.LN2;
  function $t(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Kr(a) / Vn | 0) | 0;
  }
  function Jn(a, u) {
    return a === u && (a !== 0 || 1 / a === 1 / u) || a !== a && u !== u;
  }
  var br = typeof Object.is == "function" ? Object.is : Jn, ot = null, Mt = null, qt = null, Re = null, en = !1, Dn = !1, hn = 0, Qt = null, Pn = 0;
  function _t() {
    if (ot === null) throw Error(c(321));
    return ot;
  }
  function Ve() {
    if (0 < Pn) throw Error(c(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Kn() {
    return Re === null ? qt === null ? (en = !1, qt = Re = Ve()) : (en = !0, Re = qt) : Re.next === null ? (en = !1, Re = Re.next = Ve()) : (en = !0, Re = Re.next), Re;
  }
  function $n() {
    Mt = ot = null, Dn = !1, qt = null, Pn = 0, Re = Qt = null;
  }
  function Sr(a, u) {
    return typeof u == "function" ? u(a) : u;
  }
  function Ze(a, u, v) {
    if (ot = _t(), Re = Kn(), en) {
      var x = Re.queue;
      if (u = x.dispatch, Qt !== null && (v = Qt.get(x), v !== void 0)) {
        Qt.delete(x), x = Re.memoizedState;
        do
          x = a(x, v.action), v = v.next;
        while (v !== null);
        return Re.memoizedState = x, [x, u];
      }
      return [Re.memoizedState, u];
    }
    return a = a === Sr ? typeof u == "function" ? u() : u : v !== void 0 ? v(u) : u, Re.memoizedState = a, a = Re.queue = { last: null, dispatch: null }, a = a.dispatch = $r.bind(null, ot, a), [Re.memoizedState, a];
  }
  function qn(a, u) {
    if (ot = _t(), Re = Kn(), u = u === void 0 ? null : u, Re !== null) {
      var v = Re.memoizedState;
      if (v !== null && u !== null) {
        var x = v[1];
        e: if (x === null) x = !1;
        else {
          for (var O = 0; O < x.length && O < u.length; O++) if (!br(u[O], x[O])) {
            x = !1;
            break e;
          }
          x = !0;
        }
        if (x) return v[0];
      }
    }
    return a = a(), Re.memoizedState = [a, u], a;
  }
  function $r(a, u, v) {
    if (25 <= Pn) throw Error(c(301));
    if (a === ot) if (Dn = !0, a = { action: v, next: null }, Qt === null && (Qt = /* @__PURE__ */ new Map()), v = Qt.get(u), v === void 0) Qt.set(u, a);
    else {
      for (u = v; u.next !== null; ) u = u.next;
      u.next = a;
    }
  }
  function qr() {
    throw Error(c(394));
  }
  function Ot() {
  }
  var er = { readContext: function(a) {
    return a._currentValue2;
  }, useContext: function(a) {
    return _t(), a._currentValue2;
  }, useMemo: qn, useReducer: Ze, useRef: function(a) {
    ot = _t(), Re = Kn();
    var u = Re.memoizedState;
    return u === null ? (a = { current: a }, Re.memoizedState = a) : u;
  }, useState: function(a) {
    return Ze(Sr, a);
  }, useInsertionEffect: Ot, useLayoutEffect: function() {
  }, useCallback: function(a, u) {
    return qn(function() {
      return a;
    }, u);
  }, useImperativeHandle: Ot, useEffect: Ot, useDebugValue: Ot, useDeferredValue: function(a) {
    return _t(), a;
  }, useTransition: function() {
    return _t(), [
      !1,
      qr
    ];
  }, useId: function() {
    var a = Mt.treeContext, u = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Cn(a) - 1)).toString(32) + u;
    var v = kn;
    if (v === null) throw Error(c(404));
    return u = hn++, a = ":" + v.idPrefix + "R" + a, 0 < u && (a += "H" + u.toString(32)), a + ":";
  }, useMutableSource: function(a, u) {
    return _t(), u(a._source);
  }, useSyncExternalStore: function(a, u, v) {
    if (v === void 0) throw Error(c(407));
    return v();
  } }, kn = null, tn = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ct(a) {
    return console.error(a), null;
  }
  function jt() {
  }
  function Bn(a, u, v, x, O, I, N, V, ie) {
    var he = [], ue = /* @__PURE__ */ new Set();
    return u = { destination: null, responseState: u, progressiveChunkSize: x === void 0 ? 12800 : x, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ue, pingedTasks: he, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: O === void 0 ? ct : O, onAllReady: jt, onShellReady: N === void 0 ? jt : N, onShellError: jt, onFatalError: jt }, v = rn(u, 0, null, v, !1, !1), v.parentFlushed = !0, a = nn(u, a, null, v, ue, Rt, null, wr), he.push(a), u;
  }
  function nn(a, u, v, x, O, I, N, V) {
    a.allPendingTasks++, v === null ? a.pendingRootTasks++ : v.pendingTasks++;
    var ie = { node: u, ping: function() {
      var he = a.pingedTasks;
      he.push(ie), he.length === 1 && at(a);
    }, blockedBoundary: v, blockedSegment: x, abortSet: O, legacyContext: I, context: N, treeContext: V };
    return O.add(ie), ie;
  }
  function rn(a, u, v, x, O, I) {
    return { status: 0, id: -1, index: u, parentFlushed: !1, chunks: [], children: [], formatContext: x, boundary: v, lastPushedText: O, textEmbedded: I };
  }
  function Ft(a, u) {
    if (a = a.onError(u), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function on(a, u) {
    var v = a.onShellError;
    v(u), v = a.onFatalError, v(u), a.destination !== null ? (a.status = 2, a.destination.destroy(u)) : (a.status = 1, a.fatalError = u);
  }
  function dt(a, u, v, x, O) {
    for (ot = {}, Mt = u, hn = 0, a = v(x, O); Dn; ) Dn = !1, hn = 0, Pn += 1, Re = null, a = v(x, O);
    return $n(), a;
  }
  function xr(a, u, v, x) {
    var O = v.render(), I = x.childContextTypes;
    if (I != null) {
      var N = u.legacyContext;
      if (typeof v.getChildContext != "function") x = N;
      else {
        v = v.getChildContext();
        for (var V in v) if (!(V in I)) throw Error(c(108, ut(x) || "Unknown", V));
        x = oe({}, N, v);
      }
      u.legacyContext = x, Ge(a, u, O), u.legacyContext = N;
    } else Ge(a, u, O);
  }
  function Er(a, u) {
    if (a && a.defaultProps) {
      u = oe({}, u), a = a.defaultProps;
      for (var v in a) u[v] === void 0 && (u[v] = a[v]);
      return u;
    }
    return u;
  }
  function Yt(a, u, v, x, O) {
    if (typeof v == "function") if (v.prototype && v.prototype.isReactComponent) {
      O = mr(v, u.legacyContext);
      var I = v.contextType;
      I = new v(x, typeof I == "object" && I !== null ? I._currentValue2 : O), yr(I, v, x, O), xr(a, u, I, v);
    } else {
      I = mr(v, u.legacyContext), O = dt(a, u, v, x, I);
      var N = hn !== 0;
      if (typeof O == "object" && O !== null && typeof O.render == "function" && O.$$typeof === void 0) yr(O, v, x, I), xr(a, u, O, v);
      else if (N) {
        x = u.treeContext, u.treeContext = Xn(x, 1, 0);
        try {
          Ge(a, u, O);
        } finally {
          u.treeContext = x;
        }
      } else Ge(a, u, O);
    }
    else if (typeof v == "string") {
      switch (O = u.blockedSegment, I = ve(O.chunks, v, x, a.responseState, O.formatContext), O.lastPushedText = !1, N = O.formatContext, O.formatContext = te(N, v, x), Ht(a, u, I), O.formatContext = N, v) {
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
          O.chunks.push("</", v, ">");
      }
      O.lastPushedText = !1;
    } else {
      switch (v) {
        case nt:
        case Ke:
        case le:
        case Le:
        case Se:
          Ge(a, u, x.children);
          return;
        case xe:
          Ge(a, u, x.children);
          return;
        case Ie:
          throw Error(c(343));
        case mt:
          e: {
            v = u.blockedBoundary, O = u.blockedSegment, I = x.fallback, x = x.children, N = /* @__PURE__ */ new Set();
            var V = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: N, errorDigest: null }, ie = rn(a, O.chunks.length, V, O.formatContext, !1, !1);
            O.children.push(ie), O.lastPushedText = !1;
            var he = rn(a, 0, null, O.formatContext, !1, !1);
            he.parentFlushed = !0, u.blockedBoundary = V, u.blockedSegment = he;
            try {
              if (Ht(
                a,
                u,
                x
              ), a.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), he.status = 1, xt(V, he), V.pendingTasks === 0) break e;
            } catch (ue) {
              he.status = 4, V.forceClientRender = !0, V.errorDigest = Ft(a, ue);
            } finally {
              u.blockedBoundary = v, u.blockedSegment = O;
            }
            u = nn(a, I, v, ie, N, u.legacyContext, u.context, u.treeContext), a.pingedTasks.push(u);
          }
          return;
      }
      if (typeof v == "object" && v !== null) switch (v.$$typeof) {
        case tt:
          if (x = dt(a, u, v.render, x, O), hn !== 0) {
            v = u.treeContext, u.treeContext = Xn(v, 1, 0);
            try {
              Ge(a, u, x);
            } finally {
              u.treeContext = v;
            }
          } else Ge(a, u, x);
          return;
        case Ue:
          v = v.type, x = Er(v, x), Yt(a, u, v, x, O);
          return;
        case Zt:
          if (O = x.children, v = v._context, x = x.value, I = v._currentValue2, v._currentValue2 = x, N = St, St = x = { parent: N, depth: N === null ? 0 : N.depth + 1, context: v, parentValue: I, value: x }, u.context = x, Ge(a, u, O), a = St, a === null) throw Error(c(403));
          x = a.parentValue, a.context._currentValue2 = x === ze ? a.context._defaultValue : x, a = St = a.parent, u.context = a;
          return;
        case Gt:
          x = x.children, x = x(v._currentValue2), Ge(a, u, x);
          return;
        case Pe:
          O = v._init, v = O(v._payload), x = Er(v, x), Yt(
            a,
            u,
            v,
            x,
            void 0
          );
          return;
      }
      throw Error(c(130, v == null ? v : typeof v, ""));
    }
  }
  function Ge(a, u, v) {
    if (u.node = v, typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case me:
          Yt(a, u, v.type, v.props, v.ref);
          return;
        case Oe:
          throw Error(c(257));
        case Pe:
          var x = v._init;
          v = x(v._payload), Ge(a, u, v);
          return;
      }
      if (T(v)) {
        Lt(a, u, v);
        return;
      }
      if (v === null || typeof v != "object" ? x = null : (x = Xe && v[Xe] || v["@@iterator"], x = typeof x == "function" ? x : null), x && (x = x.call(v))) {
        if (v = x.next(), !v.done) {
          var O = [];
          do
            O.push(v.value), v = x.next();
          while (!v.done);
          Lt(a, u, O);
        }
        return;
      }
      throw a = Object.prototype.toString.call(v), Error(c(31, a === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : a));
    }
    typeof v == "string" ? (x = u.blockedSegment, x.lastPushedText = be(u.blockedSegment.chunks, v, a.responseState, x.lastPushedText)) : typeof v == "number" && (x = u.blockedSegment, x.lastPushedText = be(u.blockedSegment.chunks, "" + v, a.responseState, x.lastPushedText));
  }
  function Lt(a, u, v) {
    for (var x = v.length, O = 0; O < x; O++) {
      var I = u.treeContext;
      u.treeContext = Xn(I, x, O);
      try {
        Ht(a, u, v[O]);
      } finally {
        u.treeContext = I;
      }
    }
  }
  function Ht(a, u, v) {
    var x = u.blockedSegment.formatContext, O = u.legacyContext, I = u.context;
    try {
      return Ge(a, u, v);
    } catch (ie) {
      if ($n(), typeof ie == "object" && ie !== null && typeof ie.then == "function") {
        v = ie;
        var N = u.blockedSegment, V = rn(a, N.chunks.length, null, N.formatContext, N.lastPushedText, !0);
        N.children.push(V), N.lastPushedText = !1, a = nn(a, u.node, u.blockedBoundary, V, u.abortSet, u.legacyContext, u.context, u.treeContext).ping, v.then(a, a), u.blockedSegment.formatContext = x, u.legacyContext = O, u.context = I, We(I);
      } else throw u.blockedSegment.formatContext = x, u.legacyContext = O, u.context = I, We(I), ie;
    }
  }
  function an(a) {
    var u = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Nt(this, u, a);
  }
  function Tn(a, u, v) {
    var x = a.blockedBoundary;
    a.blockedSegment.status = 3, x === null ? (u.allPendingTasks--, u.status !== 2 && (u.status = 2, u.destination !== null && u.destination.push(null))) : (x.pendingTasks--, x.forceClientRender || (x.forceClientRender = !0, a = v === void 0 ? Error(c(432)) : v, x.errorDigest = u.onError(a), x.parentFlushed && u.clientRenderedBoundaries.push(x)), x.fallbackAbortableTasks.forEach(function(O) {
      return Tn(O, u, v);
    }), x.fallbackAbortableTasks.clear(), u.allPendingTasks--, u.allPendingTasks === 0 && (x = u.onAllReady, x()));
  }
  function xt(a, u) {
    if (u.chunks.length === 0 && u.children.length === 1 && u.children[0].boundary === null) {
      var v = u.children[0];
      v.id = u.id, v.parentFlushed = !0, v.status === 1 && xt(a, v);
    } else a.completedSegments.push(u);
  }
  function Nt(a, u, v) {
    if (u === null) {
      if (v.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(c(389));
        a.completedRootSegment = v;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = jt, u = a.onShellReady, u());
    } else u.pendingTasks--, u.forceClientRender || (u.pendingTasks === 0 ? (v.parentFlushed && v.status === 1 && xt(u, v), u.parentFlushed && a.completedBoundaries.push(u), u.fallbackAbortableTasks.forEach(an, a), u.fallbackAbortableTasks.clear()) : v.parentFlushed && v.status === 1 && (xt(u, v), u.completedSegments.length === 1 && u.parentFlushed && a.partialBoundaries.push(u)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function at(a) {
    if (a.status !== 2) {
      var u = St, v = tn.current;
      tn.current = er;
      var x = kn;
      kn = a.responseState;
      try {
        var O = a.pingedTasks, I;
        for (I = 0; I < O.length; I++) {
          var N = O[I], V = a, ie = N.blockedSegment;
          if (ie.status === 0) {
            We(N.context);
            try {
              Ge(V, N, N.node), V.responseState.generateStaticMarkup || ie.lastPushedText && ie.textEmbedded && ie.chunks.push("<!-- -->"), N.abortSet.delete(N), ie.status = 1, Nt(V, N.blockedBoundary, ie);
            } catch (st) {
              if ($n(), typeof st == "object" && st !== null && typeof st.then == "function") {
                var he = N.ping;
                st.then(he, he);
              } else {
                N.abortSet.delete(N), ie.status = 4;
                var ue = N.blockedBoundary, ke = st, At = Ft(V, ke);
                if (ue === null ? on(V, ke) : (ue.pendingTasks--, ue.forceClientRender || (ue.forceClientRender = !0, ue.errorDigest = At, ue.parentFlushed && V.clientRenderedBoundaries.push(ue))), V.allPendingTasks--, V.allPendingTasks === 0) {
                  var lt = V.onAllReady;
                  lt();
                }
              }
            } finally {
            }
          }
        }
        O.splice(0, I), a.destination !== null && it(a, a.destination);
      } catch (st) {
        Ft(a, st), on(a, st);
      } finally {
        kn = x, tn.current = v, v === er && We(u);
      }
    }
  }
  function An(a, u, v) {
    switch (v.parentFlushed = !0, v.status) {
      case 0:
        var x = v.id = a.nextSegmentId++;
        return v.lastPushedText = !1, v.textEmbedded = !1, a = a.responseState, u.push('<template id="'), u.push(a.placeholderPrefix), a = x.toString(16), u.push(a), u.push('"></template>');
      case 1:
        v.status = 2;
        var O = !0;
        x = v.chunks;
        var I = 0;
        v = v.children;
        for (var N = 0; N < v.length; N++) {
          for (O = v[N]; I < O.index; I++) u.push(x[I]);
          O = pn(a, u, O);
        }
        for (; I < x.length - 1; I++) u.push(x[I]);
        return I < x.length && (O = u.push(x[I])), O;
      default:
        throw Error(c(390));
    }
  }
  function pn(a, u, v) {
    var x = v.boundary;
    if (x === null) return An(a, u, v);
    if (x.parentFlushed = !0, x.forceClientRender) return a.responseState.generateStaticMarkup || (x = x.errorDigest, u.push("<!--$!-->"), u.push("<template"), x && (u.push(' data-dgst="'), x = L(x), u.push(x), u.push('"')), u.push("></template>")), An(a, u, v), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
    if (0 < x.pendingTasks) {
      x.rootSegmentID = a.nextSegmentId++, 0 < x.completedSegments.length && a.partialBoundaries.push(x);
      var O = a.responseState, I = O.nextSuspenseID++;
      return O = O.boundaryPrefix + I.toString(16), x = x.id = O, de(u, a.responseState, x), An(a, u, v), u.push("<!--/$-->");
    }
    if (x.byteSize > a.progressiveChunkSize) return x.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(x), de(u, a.responseState, x.id), An(a, u, v), u.push("<!--/$-->");
    if (a.responseState.generateStaticMarkup || u.push("<!--$-->"), v = x.completedSegments, v.length !== 1) throw Error(c(391));
    return pn(a, u, v[0]), a = a.responseState.generateStaticMarkup ? !0 : u.push("<!--/$-->"), a;
  }
  function In(a, u, v) {
    return Me(u, a.responseState, v.formatContext, v.id), pn(a, u, v), Ce(u, v.formatContext);
  }
  function yt(a, u, v) {
    for (var x = v.completedSegments, O = 0; O < x.length; O++) Ut(a, u, v, x[O]);
    if (x.length = 0, a = a.responseState, x = v.id, v = v.rootSegmentID, u.push(a.startInlineScript), a.sentCompleteBoundaryFunction ? u.push('$RC("') : (a.sentCompleteBoundaryFunction = !0, u.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), x === null) throw Error(c(395));
    return v = v.toString(16), u.push(x), u.push('","'), u.push(a.segmentPrefix), u.push(v), u.push('")<\/script>');
  }
  function Ut(a, u, v, x) {
    if (x.status === 2) return !0;
    var O = x.id;
    if (O === -1) {
      if ((x.id = v.rootSegmentID) === -1) throw Error(c(392));
      return In(a, u, x);
    }
    return In(a, u, x), a = a.responseState, u.push(a.startInlineScript), a.sentCompleteSegmentFunction ? u.push('$RS("') : (a.sentCompleteSegmentFunction = !0, u.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), u.push(a.segmentPrefix), O = O.toString(16), u.push(O), u.push('","'), u.push(a.placeholderPrefix), u.push(O), u.push('")<\/script>');
  }
  function it(a, u) {
    try {
      var v = a.completedRootSegment;
      if (v !== null && a.pendingRootTasks === 0) {
        pn(a, u, v), a.completedRootSegment = null;
        var x = a.responseState.bootstrapChunks;
        for (v = 0; v < x.length - 1; v++) u.push(x[v]);
        v < x.length && u.push(x[v]);
      }
      var O = a.clientRenderedBoundaries, I;
      for (I = 0; I < O.length; I++) {
        var N = O[I];
        x = u;
        var V = a.responseState, ie = N.id, he = N.errorDigest, ue = N.errorMessage, ke = N.errorComponentStack;
        if (x.push(V.startInlineScript), V.sentClientRenderFunction ? x.push('$RX("') : (V.sentClientRenderFunction = !0, x.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), ie === null) throw Error(c(395));
        if (x.push(ie), x.push('"'), he || ue || ke) {
          x.push(",");
          var At = se(he || "");
          x.push(At);
        }
        if (ue || ke) {
          x.push(",");
          var lt = se(ue || "");
          x.push(lt);
        }
        if (ke) {
          x.push(",");
          var st = se(ke);
          x.push(st);
        }
        if (!x.push(")<\/script>")) {
          a.destination = null, I++, O.splice(0, I);
          return;
        }
      }
      O.splice(0, I);
      var ln = a.completedBoundaries;
      for (I = 0; I < ln.length; I++) if (!yt(a, u, ln[I])) {
        a.destination = null, I++, ln.splice(0, I);
        return;
      }
      ln.splice(0, I);
      var zt = a.partialBoundaries;
      for (I = 0; I < zt.length; I++) {
        var Mn = zt[I];
        e: {
          O = a, N = u;
          var sn = Mn.completedSegments;
          for (V = 0; V < sn.length; V++) if (!Ut(O, N, Mn, sn[V])) {
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
      for (I = 0; I < Xt.length; I++) if (!yt(a, u, Xt[I])) {
        a.destination = null, I++, Xt.splice(0, I);
        return;
      }
      Xt.splice(0, I);
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && u.push(null);
    }
  }
  function Rn(a, u) {
    try {
      var v = a.abortableTasks;
      v.forEach(function(x) {
        return Tn(x, a, u);
      }), v.clear(), a.destination !== null && it(a, a.destination);
    } catch (x) {
      Ft(a, x), on(a, x);
    }
  }
  function $e() {
  }
  function ft(a, u, v, x) {
    var O = !1, I = null, N = "", V = { push: function(he) {
      return he !== null && (N += he), !0;
    }, destroy: function(he) {
      O = !0, I = he;
    } }, ie = !1;
    if (a = Bn(a, fe(v, u ? u.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, $e, void 0, function() {
      ie = !0;
    }), at(a), Rn(a, x), a.status === 1) a.status = 2, V.destroy(a.fatalError);
    else if (a.status !== 2 && a.destination === null) {
      a.destination = V;
      try {
        it(a, V);
      } catch (he) {
        Ft(a, he), on(a, he);
      }
    }
    if (O) throw I;
    if (!ie) throw Error(c(426));
    return N;
  }
  return Mo.renderToNodeStream = function() {
    throw Error(c(207));
  }, Mo.renderToStaticMarkup = function(a, u) {
    return ft(a, u, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Mo.renderToStaticNodeStream = function() {
    throw Error(c(208));
  }, Mo.renderToString = function(a, u) {
    return ft(a, u, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Mo.version = "18.3.1", Mo;
}
var mA = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jl;
function $s() {
  if (Jl) return mA;
  Jl = 1;
  var f = k;
  function c(i) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + i, h = 1; h < arguments.length; h++) s += "&args[]=" + encodeURIComponent(arguments[h]);
    return "Minified React error #" + i + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var g = null, m = 0;
  function A(i, s) {
    if (s.length !== 0) if (512 < s.length) 0 < m && (i.enqueue(new Uint8Array(g.buffer, 0, m)), g = new Uint8Array(512), m = 0), i.enqueue(s);
    else {
      var h = g.length - m;
      h < s.length && (h === 0 ? i.enqueue(g) : (g.set(s.subarray(0, h), m), i.enqueue(g), s = s.subarray(h)), g = new Uint8Array(512), m = 0), g.set(s, m), m += s.length;
    }
  }
  function w(i, s) {
    return A(i, s), !0;
  }
  function P(i) {
    g && 0 < m && (i.enqueue(new Uint8Array(g.buffer, 0, m)), g = null, m = 0);
  }
  var E = new TextEncoder();
  function y(i) {
    return E.encode(i);
  }
  function C(i) {
    return E.encode(i);
  }
  function H(i, s) {
    typeof i.error == "function" ? i.error(s) : i.close();
  }
  var B = Object.prototype.hasOwnProperty, Q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, U = {}, L = {};
  function _(i) {
    return B.call(L, i) ? !0 : B.call(U, i) ? !1 : Q.test(i) ? L[i] = !0 : (U[i] = !0, !1);
  }
  function F(i, s, h, S, j, M, z) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = S, this.attributeNamespace = j, this.mustUseProperty = h, this.propertyName = i, this.type = s, this.sanitizeURL = M, this.removeEmptyString = z;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i) {
    T[i] = new F(i, 0, !1, i, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(i) {
    var s = i[0];
    T[s] = new F(s, 1, !1, i[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(i) {
    T[i] = new F(i, 2, !1, i.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(i) {
    T[i] = new F(i, 2, !1, i, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i) {
    T[i] = new F(i, 3, !1, i.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(i) {
    T[i] = new F(i, 3, !0, i, null, !1, !1);
  }), ["capture", "download"].forEach(function(i) {
    T[i] = new F(i, 4, !1, i, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(i) {
    T[i] = new F(i, 6, !1, i, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(i) {
    T[i] = new F(i, 5, !1, i.toLowerCase(), null, !1, !1);
  });
  var K = /[\-:]([a-z])/g;
  function te(i) {
    return i[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i) {
    var s = i.replace(
      K,
      te
    );
    T[s] = new F(s, 1, !1, i, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i) {
    var s = i.replace(K, te);
    T[s] = new F(s, 1, !1, i, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(i) {
    var s = i.replace(K, te);
    T[s] = new F(s, 1, !1, i, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(i) {
    T[i] = new F(i, 1, !1, i.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(i) {
    T[i] = new F(i, 1, !1, i.toLowerCase(), null, !0, !0);
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
    G.forEach(function(s) {
      s = s + i.charAt(0).toUpperCase() + i.substring(1), X[s] = X[i];
    });
  });
  var $ = /["'&<>]/;
  function Z(i) {
    if (typeof i == "boolean" || typeof i == "number") return "" + i;
    i = "" + i;
    var s = $.exec(i);
    if (s) {
      var h = "", S, j = 0;
      for (S = s.index; S < i.length; S++) {
        switch (i.charCodeAt(S)) {
          case 34:
            s = "&quot;";
            break;
          case 38:
            s = "&amp;";
            break;
          case 39:
            s = "&#x27;";
            break;
          case 60:
            s = "&lt;";
            break;
          case 62:
            s = "&gt;";
            break;
          default:
            continue;
        }
        j !== S && (h += i.substring(j, S)), j = S + 1, h += s;
      }
      i = j !== S ? h + i.substring(j, S) : h;
    }
    return i;
  }
  var re = /([A-Z])/g, ne = /^ms-/, Ae = Array.isArray, ae = C("<script>"), ce = C("<\/script>"), ve = C('<script src="'), de = C('<script type="module" src="'), Me = C('" async=""><\/script>'), Ce = /(<\/|<)(s)(cript)/gi;
  function ee(i, s, h, S) {
    return "" + s + (h === "s" ? "\\u0073" : "\\u0053") + S;
  }
  function se(i, s, h, S, j) {
    i = i === void 0 ? "" : i, s = s === void 0 ? ae : C('<script nonce="' + Z(s) + '">');
    var M = [];
    if (h !== void 0 && M.push(s, y(("" + h).replace(Ce, ee)), ce), S !== void 0) for (h = 0; h < S.length; h++) M.push(ve, y(Z(S[h])), Me);
    if (j !== void 0) for (S = 0; S < j.length; S++) M.push(de, y(Z(j[S])), Me);
    return { bootstrapChunks: M, startInlineScript: s, placeholderPrefix: C(i + "P:"), segmentPrefix: C(i + "S:"), boundaryPrefix: i + "B:", idPrefix: i, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function fe(i, s) {
    return { insertionMode: i, selectedValue: s };
  }
  function be(i) {
    return fe(i === "http://www.w3.org/2000/svg" ? 2 : i === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(i, s, h) {
    switch (s) {
      case "select":
        return fe(1, h.value != null ? h.value : h.defaultValue);
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
  function Oe(i, s, h, S) {
    return s === "" ? S : (S && i.push(me), i.push(y(Z(s))), !0);
  }
  var Se = /* @__PURE__ */ new Map(), le = C(' style="'), Le = C(":"), Zt = C(";");
  function Gt(i, s, h) {
    if (typeof h != "object") throw Error(c(62));
    s = !0;
    for (var S in h) if (B.call(h, S)) {
      var j = h[S];
      if (j != null && typeof j != "boolean" && j !== "") {
        if (S.indexOf("--") === 0) {
          var M = y(Z(S));
          j = y(Z(("" + j).trim()));
        } else {
          M = S;
          var z = Se.get(M);
          z !== void 0 || (z = C(Z(M.replace(re, "-$1").toLowerCase().replace(ne, "-ms-"))), Se.set(M, z)), M = z, j = typeof j == "number" ? j === 0 || B.call(X, S) ? y("" + j) : y(j + "px") : y(Z(("" + j).trim()));
        }
        s ? (s = !1, i.push(le, M, Le, j)) : i.push(Zt, M, Le, j);
      }
    }
    s || i.push(xe);
  }
  var tt = C(" "), mt = C('="'), xe = C('"'), Ue = C('=""');
  function Pe(i, s, h, S) {
    switch (h) {
      case "style":
        Gt(i, s, S);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < h.length) || h[0] !== "o" && h[0] !== "O" || h[1] !== "n" && h[1] !== "N") {
      if (s = T.hasOwnProperty(h) ? T[h] : null, s !== null) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (h = y(s.attributeName), s.type) {
          case 3:
            S && i.push(tt, h, Ue);
            break;
          case 4:
            S === !0 ? i.push(tt, h, Ue) : S !== !1 && i.push(tt, h, mt, y(Z(S)), xe);
            break;
          case 5:
            isNaN(S) || i.push(tt, h, mt, y(Z(S)), xe);
            break;
          case 6:
            !isNaN(S) && 1 <= S && i.push(tt, h, mt, y(Z(S)), xe);
            break;
          default:
            s.sanitizeURL && (S = "" + S), i.push(tt, h, mt, y(Z(S)), xe);
        }
      } else if (_(h)) {
        switch (typeof S) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = h.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        i.push(tt, y(h), mt, y(Z(S)), xe);
      }
    }
  }
  var Ie = C(">"), Ke = C("/>");
  function nt(i, s, h) {
    if (s != null) {
      if (h != null) throw Error(c(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(c(61));
      s = s.__html, s != null && i.push(y("" + s));
    }
  }
  function ze(i) {
    var s = "";
    return f.Children.forEach(i, function(h) {
      h != null && (s += h);
    }), s;
  }
  var Xe = C(' selected=""');
  function ut(i, s, h, S) {
    i.push(qe(h));
    var j = h = null, M;
    for (M in s) if (B.call(s, M)) {
      var z = s[M];
      if (z != null) switch (M) {
        case "children":
          h = z;
          break;
        case "dangerouslySetInnerHTML":
          j = z;
          break;
        default:
          Pe(i, S, M, z);
      }
    }
    return i.push(Ie), nt(i, j, h), typeof h == "string" ? (i.push(y(Z(h))), null) : h;
  }
  var Rt = C(`
`), mr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, St = /* @__PURE__ */ new Map();
  function qe(i) {
    var s = St.get(i);
    if (s === void 0) {
      if (!mr.test(i)) throw Error(c(65, i));
      s = C("<" + i), St.set(i, s);
    }
    return s;
  }
  var _e = C("<!DOCTYPE html>");
  function Zn(i, s, h, S, j) {
    switch (s) {
      case "select":
        i.push(qe("select"));
        var M = null, z = null;
        for (ye in h) if (B.call(h, ye)) {
          var J = h[ye];
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
              Pe(i, S, ye, J);
          }
        }
        return i.push(Ie), nt(i, z, M), M;
      case "option":
        z = j.selectedValue, i.push(qe("option"));
        var pe = J = null, we = null, ye = null;
        for (M in h) if (B.call(h, M)) {
          var je = h[M];
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
              Pe(i, S, M, je);
          }
        }
        if (z != null) if (h = pe !== null ? "" + pe : ze(J), Ae(z)) {
          for (S = 0; S < z.length; S++)
            if ("" + z[S] === h) {
              i.push(Xe);
              break;
            }
        } else "" + z === h && i.push(Xe);
        else we && i.push(Xe);
        return i.push(Ie), nt(i, ye, J), J;
      case "textarea":
        i.push(qe("textarea")), ye = z = M = null;
        for (J in h) if (B.call(h, J) && (pe = h[J], pe != null)) switch (J) {
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
            throw Error(c(91));
          default:
            Pe(i, S, J, pe);
        }
        if (M === null && z !== null && (M = z), i.push(Ie), ye != null) {
          if (M != null) throw Error(c(92));
          if (Ae(ye) && 1 < ye.length) throw Error(c(93));
          M = "" + ye;
        }
        return typeof M == "string" && M[0] === `
` && i.push(Rt), M !== null && i.push(y(Z("" + M))), null;
      case "input":
        i.push(qe("input")), pe = ye = J = M = null;
        for (z in h) if (B.call(h, z) && (we = h[z], we != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(399, "input"));
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
            Pe(i, S, z, we);
        }
        return ye !== null ? Pe(
          i,
          S,
          "checked",
          ye
        ) : pe !== null && Pe(i, S, "checked", pe), M !== null ? Pe(i, S, "value", M) : J !== null && Pe(i, S, "value", J), i.push(Ke), null;
      case "menuitem":
        i.push(qe("menuitem"));
        for (var pt in h) if (B.call(h, pt) && (M = h[pt], M != null)) switch (pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(400));
          default:
            Pe(i, S, pt, M);
        }
        return i.push(Ie), null;
      case "title":
        i.push(qe("title")), M = null;
        for (je in h) if (B.call(h, je) && (z = h[je], z != null)) switch (je) {
          case "children":
            M = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(c(434));
          default:
            Pe(i, S, je, z);
        }
        return i.push(Ie), M;
      case "listing":
      case "pre":
        i.push(qe(s)), z = M = null;
        for (pe in h) if (B.call(h, pe) && (J = h[pe], J != null)) switch (pe) {
          case "children":
            M = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          default:
            Pe(i, S, pe, J);
        }
        if (i.push(Ie), z != null) {
          if (M != null) throw Error(c(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(c(61));
          h = z.__html, h != null && (typeof h == "string" && 0 < h.length && h[0] === `
` ? i.push(Rt, y(h)) : i.push(y("" + h)));
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
        i.push(qe(s));
        for (var Ct in h) if (B.call(h, Ct) && (M = h[Ct], M != null)) switch (Ct) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(399, s));
          default:
            Pe(i, S, Ct, M);
        }
        return i.push(Ke), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return ut(i, h, s, S);
      case "html":
        return j.insertionMode === 0 && i.push(_e), ut(i, h, s, S);
      default:
        if (s.indexOf("-") === -1 && typeof h.is != "string") return ut(i, h, s, S);
        i.push(qe(s)), z = M = null;
        for (we in h) if (B.call(h, we) && (J = h[we], J != null)) switch (we) {
          case "children":
            M = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          case "style":
            Gt(i, S, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            _(we) && typeof J != "function" && typeof J != "symbol" && i.push(tt, y(we), mt, y(Z(J)), xe);
        }
        return i.push(Ie), nt(i, z, M), M;
    }
  }
  var Gn = C("</"), _n = C(">"), We = C('<template id="'), Yn = C('"></template>'), yr = C("<!--$-->"), wr = C('<!--$?--><template id="'), Xn = C('"></template>'), Cn = C("<!--$!-->"), Kr = C("<!--/$-->"), Vn = C("<template"), $t = C('"'), Jn = C(' data-dgst="');
  C(' data-msg="'), C(' data-stck="');
  var br = C("></template>");
  function ot(i, s, h) {
    if (A(i, wr), h === null) throw Error(c(395));
    return A(i, h), w(i, Xn);
  }
  var Mt = C('<div hidden id="'), qt = C('">'), Re = C("</div>"), en = C('<svg aria-hidden="true" style="display:none" id="'), Dn = C('">'), hn = C("</svg>"), Qt = C('<math aria-hidden="true" style="display:none" id="'), Pn = C('">'), _t = C("</math>"), Ve = C('<table hidden id="'), Kn = C('">'), $n = C("</table>"), Sr = C('<table hidden><tbody id="'), Ze = C('">'), qn = C("</tbody></table>"), $r = C('<table hidden><tr id="'), qr = C('">'), Ot = C("</tr></table>"), er = C('<table hidden><colgroup id="'), kn = C('">'), tn = C("</colgroup></table>");
  function ct(i, s, h, S) {
    switch (h.insertionMode) {
      case 0:
      case 1:
        return A(i, Mt), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, qt);
      case 2:
        return A(i, en), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, Dn);
      case 3:
        return A(i, Qt), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, Pn);
      case 4:
        return A(i, Ve), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, Kn);
      case 5:
        return A(i, Sr), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, Ze);
      case 6:
        return A(i, $r), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, qr);
      case 7:
        return A(
          i,
          er
        ), A(i, s.segmentPrefix), A(i, y(S.toString(16))), w(i, kn);
      default:
        throw Error(c(397));
    }
  }
  function jt(i, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return w(i, Re);
      case 2:
        return w(i, hn);
      case 3:
        return w(i, _t);
      case 4:
        return w(i, $n);
      case 5:
        return w(i, qn);
      case 6:
        return w(i, Ot);
      case 7:
        return w(i, tn);
      default:
        throw Error(c(397));
    }
  }
  var Bn = C('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), nn = C('$RS("'), rn = C('","'), Ft = C('")<\/script>'), on = C('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), dt = C('$RC("'), xr = C('","'), Er = C('")<\/script>'), Yt = C('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Ge = C('$RX("'), Lt = C('"'), Ht = C(")<\/script>"), an = C(","), Tn = /[<\u2028\u2029]/g;
  function xt(i) {
    return JSON.stringify(i).replace(Tn, function(s) {
      switch (s) {
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
  var Nt = Object.assign, at = Symbol.for("react.element"), An = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), In = Symbol.for("react.strict_mode"), yt = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), it = Symbol.for("react.context"), Rn = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), ft = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), v = Symbol.for("react.scope"), x = Symbol.for("react.debug_trace_mode"), O = Symbol.for("react.legacy_hidden"), I = Symbol.for("react.default_value"), N = Symbol.iterator;
  function V(i) {
    if (i == null) return null;
    if (typeof i == "function") return i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case pn:
        return "Fragment";
      case An:
        return "Portal";
      case yt:
        return "Profiler";
      case In:
        return "StrictMode";
      case $e:
        return "Suspense";
      case ft:
        return "SuspenseList";
    }
    if (typeof i == "object") switch (i.$$typeof) {
      case it:
        return (i.displayName || "Context") + ".Consumer";
      case Ut:
        return (i._context.displayName || "Context") + ".Provider";
      case Rn:
        var s = i.render;
        return i = i.displayName, i || (i = s.displayName || s.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
      case a:
        return s = i.displayName || null, s !== null ? s : V(i.type) || "Memo";
      case u:
        s = i._payload, i = i._init;
        try {
          return V(i(s));
        } catch {
        }
    }
    return null;
  }
  var ie = {};
  function he(i, s) {
    if (i = i.contextTypes, !i) return ie;
    var h = {}, S;
    for (S in i) h[S] = s[S];
    return h;
  }
  var ue = null;
  function ke(i, s) {
    if (i !== s) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var h = s.parent;
      if (i === null) {
        if (h !== null) throw Error(c(401));
      } else {
        if (h === null) throw Error(c(401));
        ke(i, h);
      }
      s.context._currentValue = s.value;
    }
  }
  function At(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && At(i);
  }
  function lt(i) {
    var s = i.parent;
    s !== null && lt(s), i.context._currentValue = i.value;
  }
  function st(i, s) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(c(402));
    i.depth === s.depth ? ke(i, s) : st(i, s);
  }
  function ln(i, s) {
    var h = s.parent;
    if (h === null) throw Error(c(402));
    i.depth === h.depth ? ke(i, h) : ln(i, h), s.context._currentValue = s.value;
  }
  function zt(i) {
    var s = ue;
    s !== i && (s === null ? lt(i) : i === null ? At(s) : s.depth === i.depth ? ke(s, i) : s.depth > i.depth ? st(s, i) : ln(s, i), ue = i);
  }
  var Mn = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(i, s) {
    i = i._reactInternals, i.queue !== null && i.queue.push(s);
  }, enqueueReplaceState: function(i, s) {
    i = i._reactInternals, i.replace = !0, i.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function sn(i, s, h, S) {
    var j = i.state !== void 0 ? i.state : null;
    i.updater = Mn, i.props = h, i.state = j;
    var M = { queue: [], replace: !1 };
    i._reactInternals = M;
    var z = s.contextType;
    if (i.context = typeof z == "object" && z !== null ? z._currentValue : S, z = s.getDerivedStateFromProps, typeof z == "function" && (z = z(h, j), j = z == null ? j : Nt({}, j, z), i.state = j), typeof s.getDerivedStateFromProps != "function" && typeof i.getSnapshotBeforeUpdate != "function" && (typeof i.UNSAFE_componentWillMount == "function" || typeof i.componentWillMount == "function")) if (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Mn.enqueueReplaceState(i, i.state, null), M.queue !== null && 0 < M.queue.length) if (s = M.queue, z = M.replace, M.queue = null, M.replace = !1, z && s.length === 1) i.state = s[0];
    else {
      for (M = z ? s[0] : i.state, j = !0, z = z ? 1 : 0; z < s.length; z++) {
        var J = s[z];
        J = typeof J == "function" ? J.call(i, M, h, S) : J, J != null && (j ? (j = !1, M = Nt({}, M, J)) : Nt(M, J));
      }
      i.state = M;
    }
    else M.queue = null;
  }
  var vn = { id: 1, overflow: "" };
  function Xt(i, s, h) {
    var S = i.id;
    i = i.overflow;
    var j = 32 - gn(S) - 1;
    S &= ~(1 << j), h += 1;
    var M = 32 - gn(s) + j;
    if (30 < M) {
      var z = j - j % 5;
      return M = (S & (1 << z) - 1).toString(32), S >>= z, j -= z, { id: 1 << 32 - gn(s) + j | h << j | S, overflow: M + i };
    }
    return { id: 1 << M | h << j | S, overflow: i };
  }
  var gn = Math.clz32 ? Math.clz32 : Cr, Na = Math.log, Ua = Math.LN2;
  function Cr(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Na(i) / Ua | 0) | 0;
  }
  function Wt(i, s) {
    return i === s && (i !== 0 || 1 / i === 1 / s) || i !== i && s !== s;
  }
  var za = typeof Object.is == "function" ? Object.is : Wt, Vt = null, eo = null, Dr = null, Qe = null, mn = !1, Pr = !1, yn = 0, un = null, kr = 0;
  function cn() {
    if (Vt === null) throw Error(c(321));
    return Vt;
  }
  function Et() {
    if (0 < kr) throw Error(c(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function to() {
    return Qe === null ? Dr === null ? (mn = !1, Dr = Qe = Et()) : (mn = !0, Qe = Dr) : Qe.next === null ? (mn = !1, Qe = Qe.next = Et()) : (mn = !0, Qe = Qe.next), Qe;
  }
  function tr() {
    eo = Vt = null, Pr = !1, Dr = null, kr = 0, Qe = un = null;
  }
  function Lo(i, s) {
    return typeof s == "function" ? s(i) : s;
  }
  function Br(i, s, h) {
    if (Vt = cn(), Qe = to(), mn) {
      var S = Qe.queue;
      if (s = S.dispatch, un !== null && (h = un.get(S), h !== void 0)) {
        un.delete(S), S = Qe.memoizedState;
        do
          S = i(S, h.action), h = h.next;
        while (h !== null);
        return Qe.memoizedState = S, [S, s];
      }
      return [Qe.memoizedState, s];
    }
    return i = i === Lo ? typeof s == "function" ? s() : s : h !== void 0 ? h(s) : s, Qe.memoizedState = i, i = Qe.queue = { last: null, dispatch: null }, i = i.dispatch = Wa.bind(null, Vt, i), [Qe.memoizedState, i];
  }
  function Ho(i, s) {
    if (Vt = cn(), Qe = to(), s = s === void 0 ? null : s, Qe !== null) {
      var h = Qe.memoizedState;
      if (h !== null && s !== null) {
        var S = h[1];
        e: if (S === null) S = !1;
        else {
          for (var j = 0; j < S.length && j < s.length; j++) if (!za(s[j], S[j])) {
            S = !1;
            break e;
          }
          S = !0;
        }
        if (S) return h[0];
      }
    }
    return i = i(), Qe.memoizedState = [i, s], i;
  }
  function Wa(i, s, h) {
    if (25 <= kr) throw Error(c(301));
    if (i === Vt) if (Pr = !0, i = { action: h, next: null }, un === null && (un = /* @__PURE__ */ new Map()), h = un.get(s), h === void 0) un.set(s, i);
    else {
      for (s = h; s.next !== null; ) s = s.next;
      s.next = i;
    }
  }
  function Za() {
    throw Error(c(394));
  }
  function Tr() {
  }
  var No = { readContext: function(i) {
    return i._currentValue;
  }, useContext: function(i) {
    return cn(), i._currentValue;
  }, useMemo: Ho, useReducer: Br, useRef: function(i) {
    Vt = cn(), Qe = to();
    var s = Qe.memoizedState;
    return s === null ? (i = { current: i }, Qe.memoizedState = i) : s;
  }, useState: function(i) {
    return Br(Lo, i);
  }, useInsertionEffect: Tr, useLayoutEffect: function() {
  }, useCallback: function(i, s) {
    return Ho(function() {
      return i;
    }, s);
  }, useImperativeHandle: Tr, useEffect: Tr, useDebugValue: Tr, useDeferredValue: function(i) {
    return cn(), i;
  }, useTransition: function() {
    return cn(), [!1, Za];
  }, useId: function() {
    var i = eo.treeContext, s = i.overflow;
    i = i.id, i = (i & ~(1 << 32 - gn(i) - 1)).toString(32) + s;
    var h = nr;
    if (h === null) throw Error(c(404));
    return s = yn++, i = ":" + h.idPrefix + "R" + i, 0 < s && (i += "H" + s.toString(32)), i + ":";
  }, useMutableSource: function(i, s) {
    return cn(), s(i._source);
  }, useSyncExternalStore: function(i, s, h) {
    if (h === void 0) throw Error(c(407));
    return h();
  } }, nr = null, no = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ga(i) {
    return console.error(i), null;
  }
  function Qn() {
  }
  function ro(i, s, h, S, j, M, z, J, pe) {
    var we = [], ye = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: S === void 0 ? 12800 : S, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ye, pingedTasks: we, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: j === void 0 ? Ga : j, onAllReady: M === void 0 ? Qn : M, onShellReady: z === void 0 ? Qn : z, onShellError: J === void 0 ? Qn : J, onFatalError: pe === void 0 ? Qn : pe }, h = On(s, 0, null, h, !1, !1), h.parentFlushed = !0, i = oo(s, i, null, h, ye, ie, null, vn), we.push(i), s;
  }
  function oo(i, s, h, S, j, M, z, J) {
    i.allPendingTasks++, h === null ? i.pendingRootTasks++ : h.pendingTasks++;
    var pe = { node: s, ping: function() {
      var we = i.pingedTasks;
      we.push(pe), we.length === 1 && Yo(i);
    }, blockedBoundary: h, blockedSegment: S, abortSet: j, legacyContext: M, context: z, treeContext: J };
    return j.add(pe), pe;
  }
  function On(i, s, h, S, j, M) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: S, boundary: h, lastPushedText: j, textEmbedded: M };
  }
  function rr(i, s) {
    if (i = i.onError(s), i != null && typeof i != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof i + '" instead');
    return i;
  }
  function Ir(i, s) {
    var h = i.onShellError;
    h(s), h = i.onFatalError, h(s), i.destination !== null ? (i.status = 2, H(i.destination, s)) : (i.status = 1, i.fatalError = s);
  }
  function Uo(i, s, h, S, j) {
    for (Vt = {}, eo = s, yn = 0, i = h(S, j); Pr; ) Pr = !1, yn = 0, kr += 1, Qe = null, i = h(S, j);
    return tr(), i;
  }
  function zo(i, s, h, S) {
    var j = h.render(), M = S.childContextTypes;
    if (M != null) {
      var z = s.legacyContext;
      if (typeof h.getChildContext != "function") S = z;
      else {
        h = h.getChildContext();
        for (var J in h) if (!(J in M)) throw Error(c(108, V(S) || "Unknown", J));
        S = Nt({}, z, h);
      }
      s.legacyContext = S, ht(i, s, j), s.legacyContext = z;
    } else ht(i, s, j);
  }
  function Wo(i, s) {
    if (i && i.defaultProps) {
      s = Nt({}, s), i = i.defaultProps;
      for (var h in i) s[h] === void 0 && (s[h] = i[h]);
      return s;
    }
    return s;
  }
  function Rr(i, s, h, S, j) {
    if (typeof h == "function") if (h.prototype && h.prototype.isReactComponent) {
      j = he(h, s.legacyContext);
      var M = h.contextType;
      M = new h(S, typeof M == "object" && M !== null ? M._currentValue : j), sn(M, h, S, j), zo(i, s, M, h);
    } else {
      M = he(h, s.legacyContext), j = Uo(i, s, h, S, M);
      var z = yn !== 0;
      if (typeof j == "object" && j !== null && typeof j.render == "function" && j.$$typeof === void 0) sn(j, h, S, M), zo(i, s, j, h);
      else if (z) {
        S = s.treeContext, s.treeContext = Xt(S, 1, 0);
        try {
          ht(i, s, j);
        } finally {
          s.treeContext = S;
        }
      } else ht(i, s, j);
    }
    else if (typeof h == "string") {
      switch (j = s.blockedSegment, M = Zn(j.chunks, h, S, i.responseState, j.formatContext), j.lastPushedText = !1, z = j.formatContext, j.formatContext = oe(z, h, S), Mr(i, s, M), j.formatContext = z, h) {
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
          j.chunks.push(Gn, y(h), _n);
      }
      j.lastPushedText = !1;
    } else {
      switch (h) {
        case O:
        case x:
        case In:
        case yt:
        case pn:
          ht(i, s, S.children);
          return;
        case ft:
          ht(i, s, S.children);
          return;
        case v:
          throw Error(c(343));
        case $e:
          e: {
            h = s.blockedBoundary, j = s.blockedSegment, M = S.fallback, S = S.children, z = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, pe = On(i, j.chunks.length, J, j.formatContext, !1, !1);
            j.children.push(pe), j.lastPushedText = !1;
            var we = On(i, 0, null, j.formatContext, !1, !1);
            we.parentFlushed = !0, s.blockedBoundary = J, s.blockedSegment = we;
            try {
              if (Mr(
                i,
                s,
                S
              ), we.lastPushedText && we.textEmbedded && we.chunks.push(me), we.status = 1, Qr(J, we), J.pendingTasks === 0) break e;
            } catch (ye) {
              we.status = 4, J.forceClientRender = !0, J.errorDigest = rr(i, ye);
            } finally {
              s.blockedBoundary = h, s.blockedSegment = j;
            }
            s = oo(i, M, h, pe, z, s.legacyContext, s.context, s.treeContext), i.pingedTasks.push(s);
          }
          return;
      }
      if (typeof h == "object" && h !== null) switch (h.$$typeof) {
        case Rn:
          if (S = Uo(i, s, h.render, S, j), yn !== 0) {
            h = s.treeContext, s.treeContext = Xt(h, 1, 0);
            try {
              ht(i, s, S);
            } finally {
              s.treeContext = h;
            }
          } else ht(i, s, S);
          return;
        case a:
          h = h.type, S = Wo(h, S), Rr(i, s, h, S, j);
          return;
        case Ut:
          if (j = S.children, h = h._context, S = S.value, M = h._currentValue, h._currentValue = S, z = ue, ue = S = { parent: z, depth: z === null ? 0 : z.depth + 1, context: h, parentValue: M, value: S }, s.context = S, ht(i, s, j), i = ue, i === null) throw Error(c(403));
          S = i.parentValue, i.context._currentValue = S === I ? i.context._defaultValue : S, i = ue = i.parent, s.context = i;
          return;
        case it:
          S = S.children, S = S(h._currentValue), ht(i, s, S);
          return;
        case u:
          j = h._init, h = j(h._payload), S = Wo(h, S), Rr(i, s, h, S, void 0);
          return;
      }
      throw Error(c(
        130,
        h == null ? h : typeof h,
        ""
      ));
    }
  }
  function ht(i, s, h) {
    if (s.node = h, typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case at:
          Rr(i, s, h.type, h.props, h.ref);
          return;
        case An:
          throw Error(c(257));
        case u:
          var S = h._init;
          h = S(h._payload), ht(i, s, h);
          return;
      }
      if (Ae(h)) {
        Zo(i, s, h);
        return;
      }
      if (h === null || typeof h != "object" ? S = null : (S = N && h[N] || h["@@iterator"], S = typeof S == "function" ? S : null), S && (S = S.call(h))) {
        if (h = S.next(), !h.done) {
          var j = [];
          do
            j.push(h.value), h = S.next();
          while (!h.done);
          Zo(i, s, j);
        }
        return;
      }
      throw i = Object.prototype.toString.call(h), Error(c(31, i === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : i));
    }
    typeof h == "string" ? (S = s.blockedSegment, S.lastPushedText = Oe(s.blockedSegment.chunks, h, i.responseState, S.lastPushedText)) : typeof h == "number" && (S = s.blockedSegment, S.lastPushedText = Oe(s.blockedSegment.chunks, "" + h, i.responseState, S.lastPushedText));
  }
  function Zo(i, s, h) {
    for (var S = h.length, j = 0; j < S; j++) {
      var M = s.treeContext;
      s.treeContext = Xt(M, S, j);
      try {
        Mr(i, s, h[j]);
      } finally {
        s.treeContext = M;
      }
    }
  }
  function Mr(i, s, h) {
    var S = s.blockedSegment.formatContext, j = s.legacyContext, M = s.context;
    try {
      return ht(i, s, h);
    } catch (pe) {
      if (tr(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        h = pe;
        var z = s.blockedSegment, J = On(i, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(J), z.lastPushedText = !1, i = oo(i, s.node, s.blockedBoundary, J, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, h.then(i, i), s.blockedSegment.formatContext = S, s.legacyContext = j, s.context = M, zt(M);
      } else throw s.blockedSegment.formatContext = S, s.legacyContext = j, s.context = M, zt(M), pe;
    }
  }
  function _a(i) {
    var s = i.blockedBoundary;
    i = i.blockedSegment, i.status = 3, _o(this, s, i);
  }
  function Go(i, s, h) {
    var S = i.blockedBoundary;
    i.blockedSegment.status = 3, S === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (S.pendingTasks--, S.forceClientRender || (S.forceClientRender = !0, i = h === void 0 ? Error(c(432)) : h, S.errorDigest = s.onError(i), S.parentFlushed && s.clientRenderedBoundaries.push(S)), S.fallbackAbortableTasks.forEach(function(j) {
      return Go(j, s, h);
    }), S.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (S = s.onAllReady, S()));
  }
  function Qr(i, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var h = s.children[0];
      h.id = s.id, h.parentFlushed = !0, h.status === 1 && Qr(i, h);
    } else i.completedSegments.push(s);
  }
  function _o(i, s, h) {
    if (s === null) {
      if (h.parentFlushed) {
        if (i.completedRootSegment !== null) throw Error(c(389));
        i.completedRootSegment = h;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && (i.onShellError = Qn, s = i.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (h.parentFlushed && h.status === 1 && Qr(s, h), s.parentFlushed && i.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(_a, i), s.fallbackAbortableTasks.clear()) : h.parentFlushed && h.status === 1 && (Qr(s, h), s.completedSegments.length === 1 && s.parentFlushed && i.partialBoundaries.push(s)));
    i.allPendingTasks--, i.allPendingTasks === 0 && (i = i.onAllReady, i());
  }
  function Yo(i) {
    if (i.status !== 2) {
      var s = ue, h = no.current;
      no.current = No;
      var S = nr;
      nr = i.responseState;
      try {
        var j = i.pingedTasks, M;
        for (M = 0; M < j.length; M++) {
          var z = j[M], J = i, pe = z.blockedSegment;
          if (pe.status === 0) {
            zt(z.context);
            try {
              ht(J, z, z.node), pe.lastPushedText && pe.textEmbedded && pe.chunks.push(me), z.abortSet.delete(z), pe.status = 1, _o(J, z.blockedBoundary, pe);
            } catch (Dt) {
              if (tr(), typeof Dt == "object" && Dt !== null && typeof Dt.then == "function") {
                var we = z.ping;
                Dt.then(we, we);
              } else {
                z.abortSet.delete(z), pe.status = 4;
                var ye = z.blockedBoundary, je = Dt, pt = rr(J, je);
                if (ye === null ? Ir(J, je) : (ye.pendingTasks--, ye.forceClientRender || (ye.forceClientRender = !0, ye.errorDigest = pt, ye.parentFlushed && J.clientRenderedBoundaries.push(ye))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Ct = J.onAllReady;
                  Ct();
                }
              }
            } finally {
            }
          }
        }
        j.splice(0, M), i.destination !== null && ao(i, i.destination);
      } catch (Dt) {
        rr(i, Dt), Ir(i, Dt);
      } finally {
        nr = S, no.current = h, h === No && zt(s);
      }
    }
  }
  function Or(i, s, h) {
    switch (h.parentFlushed = !0, h.status) {
      case 0:
        var S = h.id = i.nextSegmentId++;
        return h.lastPushedText = !1, h.textEmbedded = !1, i = i.responseState, A(s, We), A(s, i.placeholderPrefix), i = y(S.toString(16)), A(s, i), w(s, Yn);
      case 1:
        h.status = 2;
        var j = !0;
        S = h.chunks;
        var M = 0;
        h = h.children;
        for (var z = 0; z < h.length; z++) {
          for (j = h[z]; M < j.index; M++) A(s, S[M]);
          j = jr(i, s, j);
        }
        for (; M < S.length - 1; M++) A(s, S[M]);
        return M < S.length && (j = w(s, S[M])), j;
      default:
        throw Error(c(390));
    }
  }
  function jr(i, s, h) {
    var S = h.boundary;
    if (S === null) return Or(i, s, h);
    if (S.parentFlushed = !0, S.forceClientRender) S = S.errorDigest, w(s, Cn), A(s, Vn), S && (A(s, Jn), A(s, y(Z(S))), A(s, $t)), w(s, br), Or(i, s, h);
    else if (0 < S.pendingTasks) {
      S.rootSegmentID = i.nextSegmentId++, 0 < S.completedSegments.length && i.partialBoundaries.push(S);
      var j = i.responseState, M = j.nextSuspenseID++;
      j = C(j.boundaryPrefix + M.toString(16)), S = S.id = j, ot(s, i.responseState, S), Or(i, s, h);
    } else if (S.byteSize > i.progressiveChunkSize) S.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(S), ot(s, i.responseState, S.id), Or(i, s, h);
    else {
      if (w(s, yr), h = S.completedSegments, h.length !== 1) throw Error(c(391));
      jr(i, s, h[0]);
    }
    return w(s, Kr);
  }
  function Xo(i, s, h) {
    return ct(s, i.responseState, h.formatContext, h.id), jr(i, s, h), jt(s, h.formatContext);
  }
  function Vo(i, s, h) {
    for (var S = h.completedSegments, j = 0; j < S.length; j++) Jo(i, s, h, S[j]);
    if (S.length = 0, i = i.responseState, S = h.id, h = h.rootSegmentID, A(s, i.startInlineScript), i.sentCompleteBoundaryFunction ? A(s, dt) : (i.sentCompleteBoundaryFunction = !0, A(s, on)), S === null) throw Error(c(395));
    return h = y(h.toString(16)), A(s, S), A(s, xr), A(s, i.segmentPrefix), A(s, h), w(s, Er);
  }
  function Jo(i, s, h, S) {
    if (S.status === 2) return !0;
    var j = S.id;
    if (j === -1) {
      if ((S.id = h.rootSegmentID) === -1) throw Error(c(392));
      return Xo(i, s, S);
    }
    return Xo(i, s, S), i = i.responseState, A(s, i.startInlineScript), i.sentCompleteSegmentFunction ? A(s, nn) : (i.sentCompleteSegmentFunction = !0, A(s, Bn)), A(s, i.segmentPrefix), j = y(j.toString(16)), A(s, j), A(s, rn), A(s, i.placeholderPrefix), A(s, j), w(s, Ft);
  }
  function ao(i, s) {
    g = new Uint8Array(512), m = 0;
    try {
      var h = i.completedRootSegment;
      if (h !== null && i.pendingRootTasks === 0) {
        jr(i, s, h), i.completedRootSegment = null;
        var S = i.responseState.bootstrapChunks;
        for (h = 0; h < S.length - 1; h++) A(s, S[h]);
        h < S.length && w(s, S[h]);
      }
      var j = i.clientRenderedBoundaries, M;
      for (M = 0; M < j.length; M++) {
        var z = j[M];
        S = s;
        var J = i.responseState, pe = z.id, we = z.errorDigest, ye = z.errorMessage, je = z.errorComponentStack;
        if (A(S, J.startInlineScript), J.sentClientRenderFunction ? A(S, Ge) : (J.sentClientRenderFunction = !0, A(
          S,
          Yt
        )), pe === null) throw Error(c(395));
        A(S, pe), A(S, Lt), (we || ye || je) && (A(S, an), A(S, y(xt(we || "")))), (ye || je) && (A(S, an), A(S, y(xt(ye || "")))), je && (A(S, an), A(S, y(xt(je)))), w(S, Ht);
      }
      j.splice(0, M);
      var pt = i.completedBoundaries;
      for (M = 0; M < pt.length; M++) Vo(i, s, pt[M]);
      pt.splice(0, M), P(s), g = new Uint8Array(512), m = 0;
      var Ct = i.partialBoundaries;
      for (M = 0; M < Ct.length; M++) {
        var Dt = Ct[M];
        e: {
          j = i, z = s;
          var Fr = Dt.completedSegments;
          for (J = 0; J < Fr.length; J++) if (!Jo(
            j,
            z,
            Dt,
            Fr[J]
          )) {
            J++, Fr.splice(0, J);
            var $o = !1;
            break e;
          }
          Fr.splice(0, J), $o = !0;
        }
        if (!$o) {
          i.destination = null, M++, Ct.splice(0, M);
          return;
        }
      }
      Ct.splice(0, M);
      var or = i.completedBoundaries;
      for (M = 0; M < or.length; M++) Vo(i, s, or[M]);
      or.splice(0, M);
    } finally {
      P(s), i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 && s.close();
    }
  }
  function Ko(i, s) {
    try {
      var h = i.abortableTasks;
      h.forEach(function(S) {
        return Go(S, i, s);
      }), h.clear(), i.destination !== null && ao(i, i.destination);
    } catch (S) {
      rr(i, S), Ir(i, S);
    }
  }
  return mA.renderToReadableStream = function(i, s) {
    return new Promise(function(h, S) {
      var j, M, z = new Promise(function(ye, je) {
        M = ye, j = je;
      }), J = ro(i, se(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), be(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, M, function() {
        var ye = new ReadableStream({ type: "bytes", pull: function(je) {
          if (J.status === 1) J.status = 2, H(je, J.fatalError);
          else if (J.status !== 2 && J.destination === null) {
            J.destination = je;
            try {
              ao(J, je);
            } catch (pt) {
              rr(J, pt), Ir(J, pt);
            }
          }
        }, cancel: function() {
          Ko(J);
        } }, { highWaterMark: 0 });
        ye.allReady = z, h(ye);
      }, function(ye) {
        z.catch(function() {
        }), S(ye);
      }, j);
      if (s && s.signal) {
        var pe = s.signal, we = function() {
          Ko(J, pe.reason), pe.removeEventListener("abort", we);
        };
        pe.addEventListener("abort", we);
      }
      Yo(J);
    });
  }, mA.version = "18.3.1", mA;
}
var Qo = {}, Kl;
function qs() {
  return Kl || (Kl = 1, Ml.env.NODE_ENV !== "production" && function() {
    var f = k, c = "18.3.1", g = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        w("warn", e, n);
      }
    }
    function A(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          n[o - 1] = arguments[o];
        w("error", e, n);
      }
    }
    function w(e, t, n) {
      {
        var o = g.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (t += "%s", n = n.concat([l]));
        var d = n.map(function(p) {
          return String(p);
        });
        d.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, d);
      }
    }
    function P(e) {
      e();
    }
    function E(e) {
    }
    function y(e, t) {
      C(e, t);
    }
    function C(e, t) {
      return e.push(t);
    }
    function H(e) {
    }
    function B(e) {
      e.push(null);
    }
    function Q(e) {
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
    function F(e) {
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
      if (F(e))
        return A("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), T(e);
    }
    function te(e, t) {
      if (F(e))
        return A("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _(e)), T(e);
    }
    function X(e) {
      if (F(e))
        return A("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _(e)), T(e);
    }
    var G = Object.prototype.hasOwnProperty, $ = 0, Z = 1, re = 2, ne = 3, Ae = 4, ae = 5, ce = 6, ve = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", de = ve + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Me = new RegExp("^[" + ve + "][" + de + "]*$"), Ce = {}, ee = {};
    function se(e) {
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
    function oe(e, t, n, o, l, d, p) {
      this.acceptsBooleans = t === re || t === ne || t === Ae, this.attributeName = o, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = p;
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
        Ae,
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
    var Se = /[\-\:]([a-z])/g, le = function(e) {
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
      var t = e.replace(Se, le);
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
      var t = e.replace(Se, le);
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
      var t = e.replace(Se, le);
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
    var mt = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function xe(e, t) {
      mt[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || A("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || A("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    }, Ie = {}, Ke = new RegExp("^(aria)-[" + de + "]*$"), nt = new RegExp("^(aria)[A-Z][" + de + "]*$");
    function ze(e, t) {
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
        if (Ke.test(t)) {
          var l = t.toLowerCase(), d = Pe.hasOwnProperty(l) ? l : null;
          if (d == null)
            return Ie[t] = !0, !1;
          if (t !== d)
            return A("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, d), Ie[t] = !0, !0;
        }
      }
      return !0;
    }
    function Xe(e, t) {
      {
        var n = [];
        for (var o in t) {
          var l = ze(e, o);
          l || n.push(o);
        }
        var d = n.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        n.length === 1 ? A("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e) : n.length > 1 && A("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", d, e);
      }
    }
    function ut(e, t) {
      Ue(e, t) || Xe(e, t);
    }
    var Rt = !1;
    function mr(e, t) {
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
    }, qe = function() {
    };
    {
      var _e = {}, Zn = /^on./, Gn = /^on[^A-Z]/, _n = new RegExp("^(aria)-[" + de + "]*$"), We = new RegExp("^(aria)[A-Z][" + de + "]*$");
      qe = function(e, t, n, o) {
        if (G.call(_e, t) && _e[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return A("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), _e[t] = !0, !0;
        if (o != null) {
          var d = o.registrationNameDependencies, p = o.possibleRegistrationNames;
          if (d.hasOwnProperty(t))
            return !0;
          var D = p.hasOwnProperty(l) ? p[l] : null;
          if (D != null)
            return A("Invalid event handler property `%s`. Did you mean `%s`?", t, D), _e[t] = !0, !0;
          if (Zn.test(t))
            return A("Unknown event handler property `%s`. It will be ignored.", t), _e[t] = !0, !0;
        } else if (Zn.test(t))
          return Gn.test(t) && A("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), _e[t] = !0, !0;
        if (_n.test(t) || We.test(t))
          return !0;
        if (l === "innerhtml")
          return A("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), _e[t] = !0, !0;
        if (l === "aria")
          return A("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), _e[t] = !0, !0;
        if (l === "is" && n !== null && n !== void 0 && typeof n != "string")
          return A("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), _e[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return A("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), _e[t] = !0, !0;
        var R = be(t), W = R !== null && R.type === $;
        if (St.hasOwnProperty(l)) {
          var Y = St[l];
          if (Y !== t)
            return A("Invalid DOM property `%s`. Did you mean `%s`?", t, Y), _e[t] = !0, !0;
        } else if (!W && t !== l)
          return A("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), _e[t] = !0, !0;
        return typeof n == "boolean" && fe(t, n, R) ? (n ? A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), _e[t] = !0, !0) : W ? !0 : fe(t, n, R) ? (_e[t] = !0, !1) : ((n === "false" || n === "true") && R !== null && R.type === ne && (A("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), _e[t] = !0), !0);
      };
    }
    var Yn = function(e, t, n) {
      {
        var o = [];
        for (var l in t) {
          var d = qe(e, l, t[l], n);
          d || o.push(l);
        }
        var p = o.map(function(D) {
          return "`" + D + "`";
        }).join(", ");
        o.length === 1 ? A("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : o.length > 1 && A("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function yr(e, t, n) {
      Ue(e, t) || Yn(e, t, n);
    }
    var wr = function() {
    };
    {
      var Xn = /^(?:webkit|moz|o)[A-Z]/, Cn = /^-ms-/, Kr = /-(.)/g, Vn = /;\s*$/, $t = {}, Jn = {}, br = !1, ot = !1, Mt = function(e) {
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
        Jn.hasOwnProperty(t) && Jn[t] || (Jn[t] = !0, A(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Vn, "")));
      }, Dn = function(e, t) {
        br || (br = !0, A("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hn = function(e, t) {
        ot || (ot = !0, A("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      wr = function(e, t) {
        e.indexOf("-") > -1 ? qt(e) : Xn.test(e) ? Re(e) : Vn.test(t) && en(e, t), typeof t == "number" && (isNaN(t) ? Dn(e, t) : isFinite(t) || hn(e, t));
      };
    }
    var Qt = wr, Pn = /["'&<>]/;
    function _t(e) {
      X(e);
      var t = "" + e, n = Pn.exec(t);
      if (!n)
        return t;
      var o, l = "", d, p = 0;
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
        p !== d && (l += t.substring(p, d)), p = d + 1, l += o;
      }
      return p !== d ? l + t.substring(p, d) : l;
    }
    function Ve(e) {
      return typeof e == "boolean" || typeof e == "number" ? "" + e : _t(e);
    }
    var Kn = /([A-Z])/g, $n = /^ms-/;
    function Sr(e) {
      return e.replace(Kn, "-$1").toLowerCase().replace($n, "-ms-");
    }
    var Ze = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, qn = !1;
    function $r(e) {
      !qn && Ze.test(e) && (qn = !0, A("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    var qr = Array.isArray;
    function Ot(e) {
      return qr(e);
    }
    var er = "<script>";
    function kn(e, t, n, o, l) {
      var d = e === void 0 ? "" : e, p = er, D = [];
      return {
        bootstrapChunks: D,
        startInlineScript: p,
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
    var tn = 0, ct = 1, jt = 2, Bn = 3, nn = 4, rn = 5, Ft = 6, on = 7;
    function dt(e, t) {
      return {
        insertionMode: e,
        selectedValue: t
      };
    }
    function xr(e, t, n) {
      switch (t) {
        case "select":
          return dt(ct, n.value != null ? n.value : n.defaultValue);
        case "svg":
          return dt(jt, null);
        case "math":
          return dt(Bn, null);
        case "foreignObject":
          return dt(ct, null);
        case "table":
          return dt(nn, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return dt(rn, null);
        case "colgroup":
          return dt(on, null);
        case "tr":
          return dt(Ft, null);
      }
      return e.insertionMode >= nn || e.insertionMode === tn ? dt(ct, null) : e;
    }
    var Er = null;
    function Yt(e) {
      var t = e.nextSuspenseID++;
      return e.boundaryPrefix + t.toString(16);
    }
    function Ge(e, t, n) {
      var o = e.idPrefix, l = ":" + o + "R" + t;
      return n > 0 && (l += "H" + n.toString(32)), l + ":";
    }
    function Lt(e) {
      return Ve(e);
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
      var n = Ve(Sr(e));
      return xt.set(e, n), n;
    }
    var at = ' style="', An = ":", pn = ";";
    function In(e, t, n) {
      if (typeof n != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var o = !0;
      for (var l in n)
        if (G.call(n, l)) {
          var d = n[l];
          if (!(d == null || typeof d == "boolean" || d === "")) {
            var p = void 0, D = void 0, R = l.indexOf("--") === 0;
            R ? (p = Ve(l), te(d, l), D = Ve(("" + d).trim())) : (Qt(l, d), p = Nt(l), typeof d == "number" ? d !== 0 && !G.call(Zt, l) ? D = d + "px" : D = "" + d : (te(d, l), D = Ve(("" + d).trim()))), o ? (o = !1, e.push(at, p, An, D)) : e.push(pn, p, An, D);
          }
        }
      o || e.push(it);
    }
    var yt = " ", Ut = '="', it = '"', Rn = '=""';
    function $e(e, t, n, o) {
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
          var d = l.attributeName, p = d;
          switch (l.type) {
            case ne:
              o && e.push(yt, p, Rn);
              return;
            case Ae:
              o === !0 ? e.push(yt, p, Rn) : o === !1 || e.push(yt, p, Ut, Ve(o), it);
              return;
            case ae:
              isNaN(o) || e.push(yt, p, Ut, Ve(o), it);
              break;
            case ce:
              !isNaN(o) && o >= 1 && e.push(yt, p, Ut, Ve(o), it);
              break;
            default:
              l.sanitizeURL && (K(o, d), o = "" + o, $r(o)), e.push(yt, p, Ut, Ve(o), it);
          }
        } else if (se(n)) {
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
          e.push(yt, n, Ut, Ve(o), it);
        }
      }
    }
    var ft = ">", a = "/>";
    function u(e, t, n) {
      if (t != null) {
        if (n != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof t != "object" || !("__html" in t))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var o = t.__html;
        o != null && (X(o), e.push("" + o));
      }
    }
    var v = !1, x = !1, O = !1, I = !1, N = !1, V = !1, ie = !1;
    function he(e, t) {
      {
        var n = e[t];
        if (n != null) {
          var o = Ot(n);
          e.multiple && !o ? A("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && o && A("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t);
        }
      }
    }
    function ue(e, t, n) {
      xe("select", t), he(t, "value"), he(t, "defaultValue"), t.value !== void 0 && t.defaultValue !== void 0 && !O && (A("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), O = !0), e.push(Wt("select"));
      var o = null, l = null;
      for (var d in t)
        if (G.call(t, d)) {
          var p = t[d];
          if (p == null)
            continue;
          switch (d) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              l = p;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              $e(e, n, d, p);
              break;
          }
        }
      return e.push(ft), u(e, l, o), o;
    }
    function ke(e) {
      var t = "";
      return f.Children.forEach(e, function(n) {
        n != null && (t += n, !N && typeof n != "string" && typeof n != "number" && (N = !0, A("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), t;
    }
    var At = ' selected=""';
    function lt(e, t, n, o) {
      var l = o.selectedValue;
      e.push(Wt("option"));
      var d = null, p = null, D = null, R = null;
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
              p = Y;
            default:
              $e(e, n, W, Y);
              break;
          }
        }
      if (l != null) {
        var q;
        if (p !== null ? (K(p, "value"), q = "" + p) : (R !== null && (V || (V = !0, A("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), q = ke(d)), Ot(l))
          for (var ge = 0; ge < l.length; ge++) {
            K(l[ge], "value");
            var Te = "" + l[ge];
            if (Te === q) {
              e.push(At);
              break;
            }
          }
        else
          K(l, "select.value"), "" + l === q && e.push(At);
      } else D && e.push(At);
      return e.push(ft), u(e, R, d), d;
    }
    function st(e, t, n) {
      xe("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !x && (A("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), x = !0), t.value !== void 0 && t.defaultValue !== void 0 && !v && (A("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", t.type), v = !0), e.push(Wt("input"));
      var o = null, l = null, d = null, p = null;
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
              p = R;
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
              $e(e, n, D, R);
              break;
          }
        }
      return d !== null ? $e(e, n, "checked", d) : p !== null && $e(e, n, "checked", p), o !== null ? $e(e, n, "value", o) : l !== null && $e(e, n, "value", l), e.push(a), null;
    }
    function ln(e, t, n) {
      xe("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !I && (A("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), I = !0), e.push(Wt("textarea"));
      var o = null, l = null, d = null;
      for (var p in t)
        if (G.call(t, p)) {
          var D = t[p];
          if (D == null)
            continue;
          switch (p) {
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
              $e(e, n, p, D);
              break;
          }
        }
      if (o === null && l !== null && (o = l), e.push(ft), d != null) {
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
              $e(e, o, l, d);
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
              $e(e, n, o, l);
              break;
          }
        }
      return e.push(ft), null;
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
              $e(e, n, l, d);
              break;
          }
        }
      e.push(ft);
      {
        var p = Array.isArray(o) && o.length < 2 ? o[0] || null : o;
        Array.isArray(o) && o.length > 1 ? A("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && p.$$typeof != null ? A("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : p != null && typeof p != "string" && typeof p != "number" && A("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return o;
    }
    function vn(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var p in t)
        if (G.call(t, p)) {
          var D = t[p];
          if (D == null)
            continue;
          switch (p) {
            case "children":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              d = D;
              break;
            default:
              $e(e, o, p, D);
              break;
          }
        }
      return e.push(ft), u(e, d, l), typeof l == "string" ? (e.push(Lt(l)), null) : l;
    }
    function Xt(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var p in t)
        if (G.call(t, p)) {
          var D = t[p];
          if (D == null)
            continue;
          switch (p) {
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
              se(p) && typeof D != "function" && typeof D != "symbol" && e.push(yt, p, Ut, Ve(D), it);
              break;
          }
        }
      return e.push(ft), u(e, d, l), l;
    }
    var gn = `
`;
    function Na(e, t, n, o) {
      e.push(Wt(n));
      var l = null, d = null;
      for (var p in t)
        if (G.call(t, p)) {
          var D = t[p];
          if (D == null)
            continue;
          switch (p) {
            case "children":
              l = D;
              break;
            case "dangerouslySetInnerHTML":
              d = D;
              break;
            default:
              $e(e, o, p, D);
              break;
          }
        }
      if (e.push(ft), d != null) {
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
    var Ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Cr = /* @__PURE__ */ new Map();
    function Wt(e) {
      var t = Cr.get(e);
      if (t === void 0) {
        if (!Ua.test(e))
          throw new Error("Invalid tag: " + e);
        t = "<" + e, Cr.set(e, t);
      }
      return t;
    }
    var za = "<!DOCTYPE html>";
    function Vt(e, t, n, o, l) {
      switch (ut(t, n), mr(t, n), yr(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && A("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), l.insertionMode !== jt && l.insertionMode !== Bn && t.indexOf("-") === -1 && typeof n.is != "string" && t.toLowerCase() !== t && A("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
        case "select":
          return ue(e, n, o);
        case "option":
          return lt(e, n, o, l);
        case "textarea":
          return ln(e, n, o);
        case "input":
          return st(e, n, o);
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
    var eo = "</", Dr = ">";
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
          e.push(eo, t, Dr);
      }
    }
    function mn(e, t) {
      for (var n = t.bootstrapChunks, o = 0; o < n.length - 1; o++)
        y(e, n[o]);
      return o < n.length ? C(e, n[o]) : !0;
    }
    var Pr = '<template id="', yn = '"></template>';
    function un(e, t, n) {
      y(e, Pr), y(e, t.placeholderPrefix);
      var o = n.toString(16);
      return y(e, o), C(e, yn);
    }
    var kr = "<!--$-->", cn = '<!--$?--><template id="', Et = '"></template>', to = "<!--$!-->", tr = "<!--/$-->", Lo = "<template", Br = '"', Ho = ' data-dgst="', Wa = ' data-msg="', Za = ' data-stck="', Tr = "></template>";
    function No(e, t) {
      return C(e, kr);
    }
    function nr(e, t, n) {
      if (y(e, cn), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(e, n), C(e, Et);
    }
    function no(e, t, n, o, l) {
      var d;
      return d = C(e, to), y(e, Lo), n && (y(e, Ho), y(e, Ve(n)), y(e, Br)), o && (y(e, Wa), y(e, Ve(o)), y(e, Br)), l && (y(e, Za), y(e, Ve(l)), y(e, Br)), d = C(e, Tr), d;
    }
    function Ga(e, t) {
      return C(e, tr);
    }
    function Qn(e, t) {
      return C(e, tr);
    }
    function ro(e, t) {
      return C(e, tr);
    }
    var oo = '<div hidden id="', On = '">', rr = "</div>", Ir = '<svg aria-hidden="true" style="display:none" id="', Uo = '">', zo = "</svg>", Wo = '<math aria-hidden="true" style="display:none" id="', Rr = '">', ht = "</math>", Zo = '<table hidden id="', Mr = '">', _a = "</table>", Go = '<table hidden><tbody id="', Qr = '">', _o = "</tbody></table>", Yo = '<table hidden><tr id="', Or = '">', jr = "</tr></table>", Xo = '<table hidden><colgroup id="', Vo = '">', Jo = "</colgroup></table>";
    function ao(e, t, n, o) {
      switch (n.insertionMode) {
        case tn:
        case ct:
          return y(e, oo), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, On);
        case jt:
          return y(e, Ir), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Uo);
        case Bn:
          return y(e, Wo), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Rr);
        case nn:
          return y(e, Zo), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Mr);
        case rn:
          return y(e, Go), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Qr);
        case Ft:
          return y(e, Yo), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Or);
        case on:
          return y(e, Xo), y(e, t.segmentPrefix), y(e, o.toString(16)), C(e, Vo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ko(e, t) {
      switch (t.insertionMode) {
        case tn:
        case ct:
          return C(e, rr);
        case jt:
          return C(e, zo);
        case Bn:
          return C(e, ht);
        case nn:
          return C(e, _a);
        case rn:
          return C(e, _o);
        case Ft:
          return C(e, jr);
        case on:
          return C(e, Jo);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var i = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", s = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', h = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', S = i + ';$RS("', j = '$RS("', M = '","', z = '")<\/script>';
    function J(e, t, n) {
      y(e, t.startInlineScript), t.sentCompleteSegmentFunction ? y(e, j) : (t.sentCompleteSegmentFunction = !0, y(e, S)), y(e, t.segmentPrefix);
      var o = n.toString(16);
      return y(e, o), y(e, M), y(e, t.placeholderPrefix), y(e, o), C(e, z);
    }
    var pe = s + ';$RC("', we = '$RC("', ye = '","', je = '")<\/script>';
    function pt(e, t, n, o) {
      if (y(e, t.startInlineScript), t.sentCompleteBoundaryFunction ? y(e, we) : (t.sentCompleteBoundaryFunction = !0, y(e, pe)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var l = o.toString(16);
      return y(e, n), y(e, ye), y(e, t.segmentPrefix), y(e, l), C(e, je);
    }
    var Ct = h + ';$RX("', Dt = '$RX("', Fr = '"', $o = ")<\/script>", or = ",";
    function IA(e, t, n, o, l, d) {
      if (y(e, t.startInlineScript), t.sentClientRenderFunction ? y(e, Dt) : (t.sentClientRenderFunction = !0, y(e, Ct)), n === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(e, n), y(e, Fr), (o || l || d) && (y(e, or), y(e, Ya(o || ""))), (l || d) && (y(e, or), y(e, Ya(l || ""))), d && (y(e, or), y(e, Ya(d))), C(e, $o);
    }
    var RA = /[<\u2028\u2029]/g;
    function Ya(e) {
      var t = JSON.stringify(e);
      return t.replace(RA, function(n) {
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
    function MA(e, t) {
      var n = kn(t);
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
    function QA() {
      return {
        insertionMode: ct,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Ri(e, t, n, o) {
      return n.generateStaticMarkup ? (e.push(Ve(t)), !1) : an(e, t, n, o);
    }
    function Mi(e, t, n, o) {
      if (!t.generateStaticMarkup)
        return Tn(e, t, n, o);
    }
    function OA(e, t) {
      return t.generateStaticMarkup ? !0 : No(e);
    }
    function jA(e, t, n, o, l) {
      return t.generateStaticMarkup ? !0 : no(e, t, n, o, l);
    }
    function FA(e, t) {
      return t.generateStaticMarkup ? !0 : Ga(e);
    }
    function LA(e, t) {
      return t.generateStaticMarkup ? !0 : ro(e);
    }
    var wt = Object.assign, HA = Symbol.for("react.element"), Qi = Symbol.for("react.portal"), qo = Symbol.for("react.fragment"), Pt = Symbol.for("react.strict_mode"), Oi = Symbol.for("react.profiler"), ea = Symbol.for("react.provider"), ta = Symbol.for("react.context"), na = Symbol.for("react.forward_ref"), ra = Symbol.for("react.suspense"), io = Symbol.for("react.suspense_list"), Ao = Symbol.for("react.memo"), Lr = Symbol.for("react.lazy"), Xa = Symbol.for("react.scope"), Va = Symbol.for("react.debug_trace_mode"), Ja = Symbol.for("react.legacy_hidden"), oa = Symbol.for("react.default_value"), ji = Symbol.iterator, NA = "@@iterator";
    function UA(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ji && e[ji] || e[NA];
      return typeof t == "function" ? t : null;
    }
    function zA(e, t, n) {
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
        case qo:
          return "Fragment";
        case Qi:
          return "Portal";
        case Oi:
          return "Profiler";
        case Pt:
          return "StrictMode";
        case ra:
          return "Suspense";
        case io:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ta:
            var t = e;
            return Ka(t) + ".Consumer";
          case ea:
            var n = e;
            return Ka(n._context) + ".Provider";
          case na:
            return zA(e, e.render, "ForwardRef");
          case Ao:
            var o = e.displayName || null;
            return o !== null ? o : Ne(e.type) || "Memo";
          case Lr: {
            var l = e, d = l._payload, p = l._init;
            try {
              return Ne(p(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var lo = 0, Fi, $a, He, Hr, qa, ei, ti;
    function ni() {
    }
    ni.__reactDisabledLog = !0;
    function Li() {
      {
        if (lo === 0) {
          Fi = console.log, $a = console.info, He = console.warn, Hr = console.error, qa = console.group, ei = console.groupCollapsed, ti = console.groupEnd;
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
    function Hi() {
      {
        if (lo--, lo === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: Fi
            }),
            info: wt({}, e, {
              value: $a
            }),
            warn: wt({}, e, {
              value: He
            }),
            error: wt({}, e, {
              value: Hr
            }),
            group: wt({}, e, {
              value: qa
            }),
            groupCollapsed: wt({}, e, {
              value: ei
            }),
            groupEnd: wt({}, e, {
              value: ti
            })
          });
        }
        lo < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var aa = g.ReactCurrentDispatcher, ia;
    function so(e, t, n) {
      {
        if (ia === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            ia = o && o[1] || "";
          }
        return `
` + ia + e;
      }
    }
    var ri = !1, Nr;
    {
      var oi = typeof WeakMap == "function" ? WeakMap : Map;
      Nr = new oi();
    }
    function ar(e, t) {
      if (!e || ri)
        return "";
      {
        var n = Nr.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      ri = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = aa.current, aa.current = null, Li();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (rt) {
              o = rt;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (rt) {
              o = rt;
            }
            e.call(p.prototype);
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
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && Nr.set(e, q), q;
                  }
                while (W >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ri = !1, aa.current = d, Hi(), Error.prepareStackTrace = l;
      }
      var ge = e ? e.displayName || e.name : "", Te = ge ? so(ge) : "";
      return typeof e == "function" && Nr.set(e, Te), Te;
    }
    function ai(e, t, n) {
      return ar(e, !0);
    }
    function uo(e, t, n) {
      return ar(e, !1);
    }
    function WA(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function co(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ar(e, WA(e));
      if (typeof e == "string")
        return so(e);
      switch (e) {
        case ra:
          return so("Suspense");
        case io:
          return so("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case na:
            return uo(e.render);
          case Ao:
            return co(e.type, t, n);
          case Lr: {
            var o = e, l = o._payload, d = o._init;
            try {
              return co(d(l), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ni = {}, ii = g.ReactDebugCurrentFrame;
    function Aa(e) {
      if (e) {
        var t = e._owner, n = co(e.type, e._source, t ? t.type : null);
        ii.setExtraStackFrame(n);
      } else
        ii.setExtraStackFrame(null);
    }
    function la(e, t, n, o, l) {
      {
        var d = Function.call.bind(G);
        for (var p in e)
          if (d(e, p)) {
            var D = void 0;
            try {
              if (typeof e[p] != "function") {
                var R = Error((o || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              D = e[p](t, p, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              D = W;
            }
            D && !(D instanceof Error) && (Aa(l), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, p, typeof D), Aa(null)), D instanceof Error && !(D.message in Ni) && (Ni[D.message] = !0, Aa(l), A("Failed %s type: %s", n, D.message), Aa(null));
          }
      }
    }
    var sa;
    sa = {};
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
          la(n, o, "context", d);
        }
        return o;
      }
    }
    function Ui(e, t, n, o) {
      {
        if (typeof e.getChildContext != "function") {
          {
            var l = Ne(t) || "Unknown";
            sa[l] || (sa[l] = !0, A("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", l, l));
          }
          return n;
        }
        var d = e.getChildContext();
        for (var p in d)
          if (!(p in o))
            throw new Error((Ne(t) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var D = Ne(t) || "Unknown";
          la(o, d, "child context", D);
        }
        return wt({}, n, d);
      }
    }
    var ir;
    ir = {};
    var ua = null, jn = null;
    function Ai(e) {
      e.context._currentValue2 = e.parentValue;
    }
    function Ar(e) {
      e.context._currentValue2 = e.value;
    }
    function ca(e, t) {
      if (e !== t) {
        Ai(e);
        var n = e.parent, o = t.parent;
        if (n === null) {
          if (o !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (o === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ca(n, o);
        }
        Ar(t);
      }
    }
    function Fn(e) {
      Ai(e);
      var t = e.parent;
      t !== null && Fn(t);
    }
    function da(e) {
      var t = e.parent;
      t !== null && da(t), Ar(e);
    }
    function fa(e, t) {
      Ai(e);
      var n = e.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      n.depth === t.depth ? ca(n, t) : fa(n, t);
    }
    function po(e, t) {
      var n = t.parent;
      if (n === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      e.depth === n.depth ? ca(e, n) : po(e, n), Ar(t);
    }
    function vo(e) {
      var t = jn, n = e;
      t !== n && (t === null ? da(n) : n === null ? Fn(t) : t.depth === n.depth ? ca(t, n) : t.depth > n.depth ? fa(t, n) : po(t, n), jn = n);
    }
    function zi(e, t) {
      var n;
      n = e._currentValue2, e._currentValue2 = t, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== ir && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = ir;
      var o = jn, l = {
        parent: o,
        depth: o === null ? 0 : o.depth + 1,
        context: e,
        parentValue: n,
        value: t
      };
      return jn = l, l;
    }
    function Wi(e) {
      var t = jn;
      if (t === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      t.context !== e && A("The parent context is not the expected context. This is probably a bug in React.");
      {
        var n = t.parentValue;
        n === oa ? t.context._currentValue2 = t.context._defaultValue : t.context._currentValue2 = n, e._currentRenderer2 !== void 0 && e._currentRenderer2 !== null && e._currentRenderer2 !== ir && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), e._currentRenderer2 = ir;
      }
      return jn = t.parent;
    }
    function Zi() {
      return jn;
    }
    function Ln(e) {
      var t = e._currentValue2;
      return t;
    }
    function li(e) {
      return e._reactInternals;
    }
    function ZA(e, t) {
      e._reactInternals = t;
    }
    var Gi = {}, Ur = {}, go, si, ha, pa, va, zr, mo, yo, ga;
    {
      go = /* @__PURE__ */ new Set(), si = /* @__PURE__ */ new Set(), ha = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), pa = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), ga = /* @__PURE__ */ new Set();
      var wo = /* @__PURE__ */ new Set();
      zr = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          wo.has(n) || (wo.add(n), A("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, va = function(e, t) {
        if (t === void 0) {
          var n = Ne(e) || "Component";
          pa.has(n) || (pa.add(n), A("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      };
    }
    function ma(e, t) {
      {
        var n = e.constructor, o = n && Ne(n) || "ReactClass", l = o + "." + t;
        if (Gi[l])
          return;
        A(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, t, t, o), Gi[l] = !0;
      }
    }
    var ya = {
      isMounted: function(e) {
        return !1;
      },
      enqueueSetState: function(e, t, n) {
        var o = li(e);
        o.queue === null ? ma(e, "setState") : (o.queue.push(t), n != null && zr(n, "setState"));
      },
      enqueueReplaceState: function(e, t, n) {
        var o = li(e);
        o.replace = !0, o.queue = [t], n != null && zr(n, "setState");
      },
      enqueueForceUpdate: function(e, t) {
        var n = li(e);
        n.queue === null ? ma(e, "forceUpdate") : t != null && zr(t, "setState");
      }
    };
    function ui(e, t, n, o, l) {
      var d = n(l, o);
      va(t, d);
      var p = d == null ? o : wt({}, o, d);
      return p;
    }
    function _i(e, t, n) {
      var o = fo, l = e.contextType;
      if ("contextType" in e) {
        var d = (
          // Allow null for conditional declaration
          l === null || l !== void 0 && l.$$typeof === ta && l._context === void 0
        );
        if (!d && !ga.has(e)) {
          ga.add(e);
          var p = "";
          l === void 0 ? p = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof l != "object" ? p = " However, it is set to a " + typeof l + "." : l.$$typeof === ea ? p = " Did you accidentally pass the Context.Provider instead?" : l._context !== void 0 ? p = " Did you accidentally pass the Context.Consumer instead?" : p = " However, it is set to an object with keys {" + Object.keys(l).join(", ") + "}.", A("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ne(e) || "Component", p);
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
            ha.has(ge) || (ha.add(ge), A(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function Yi(e, t, n) {
      {
        var o = Ne(t) || "Component", l = e.render;
        l || (t.prototype && typeof t.prototype.render == "function" ? A("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : A("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), e.getInitialState && !e.getInitialState.isReactClassApproved && !e.state && A("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), e.getDefaultProps && !e.getDefaultProps.isReactClassApproved && A("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), e.propTypes && A("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), e.contextType && A("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), e.contextTypes && A("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !yo.has(t) && (yo.add(t), A("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof e.componentShouldUpdate == "function" && A("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof e.shouldComponentUpdate < "u" && A("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ne(t) || "A pure component"), typeof e.componentDidUnmount == "function" && A("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof e.componentDidReceiveProps == "function" && A("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof e.componentWillRecieveProps == "function" && A("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof e.UNSAFE_componentWillRecieveProps == "function" && A("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var d = e.props !== n;
        e.props !== void 0 && d && A("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), e.defaultProps && A("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof e.getSnapshotBeforeUpdate == "function" && typeof e.componentDidUpdate != "function" && !si.has(t) && (si.add(t), A("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ne(t))), typeof e.getDerivedStateFromProps == "function" && A("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof e.getDerivedStateFromError == "function" && A("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && A("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = e.state;
        p && (typeof p != "object" || Ot(p)) && A("%s.state: must be set to an object or null", o), typeof e.getChildContext == "function" && typeof t.childContextTypes != "object" && A("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function Xi(e, t) {
      var n = t.state;
      if (typeof t.componentWillMount == "function") {
        if (t.componentWillMount.__suppressDeprecationWarning !== !0) {
          var o = Ne(e) || "Unknown";
          Ur[o] || (m(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            o
          ), Ur[o] = !0);
        }
        t.componentWillMount();
      }
      typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (A("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ne(e) || "Component"), ya.enqueueReplaceState(t, t.state, null));
    }
    function GA(e, t, n, o) {
      if (e.queue !== null && e.queue.length > 0) {
        var l = e.queue, d = e.replace;
        if (e.queue = null, e.replace = !1, d && l.length === 1)
          t.state = l[0];
        else {
          for (var p = d ? l[0] : t.state, D = !0, R = d ? 1 : 0; R < l.length; R++) {
            var W = l[R], Y = typeof W == "function" ? W.call(t, p, n, o) : W;
            Y != null && (D ? (D = !1, p = wt({}, p, Y)) : wt(p, Y));
          }
          t.state = p;
        }
      } else
        e.queue = null;
    }
    function Vi(e, t, n, o) {
      Yi(e, t, n);
      var l = e.state !== void 0 ? e.state : null;
      e.updater = ya, e.props = n, e.state = l;
      var d = {
        queue: [],
        replace: !1
      };
      ZA(e, d);
      var p = t.contextType;
      if (typeof p == "object" && p !== null ? e.context = Ln(p) : e.context = o, e.state === n) {
        var D = Ne(t) || "Component";
        mo.has(D) || (mo.add(D), A("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", D));
      }
      var R = t.getDerivedStateFromProps;
      typeof R == "function" && (e.state = ui(e, t, R, l, n)), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function") && (Xi(t, e), GA(d, e, n, o));
    }
    var _A = {
      id: 1,
      overflow: ""
    };
    function YA(e) {
      var t = e.overflow, n = e.id, o = n & ~XA(n);
      return o.toString(32) + t;
    }
    function ci(e, t, n) {
      var o = e.id, l = e.overflow, d = bo(o) - 1, p = o & ~(1 << d), D = n + 1, R = bo(t) + d;
      if (R > 30) {
        var W = d - d % 5, Y = (1 << W) - 1, q = (p & Y).toString(32), ge = p >> W, Te = d - W, rt = bo(t) + Te, hr = D << Te, pr = hr | ge, En = q + l;
        return {
          id: 1 << rt | pr,
          overflow: En
        };
      } else {
        var Vr = D << d, Dl = Vr | p, Qs = l;
        return {
          id: 1 << R | Dl,
          overflow: Qs
        };
      }
    }
    function bo(e) {
      return 32 - VA(e);
    }
    function XA(e) {
      return 1 << bo(e) - 1;
    }
    var VA = Math.clz32 ? Math.clz32 : JA, di = Math.log, wa = Math.LN2;
    function JA(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (di(t) / wa | 0) | 0;
    }
    function KA(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $A = typeof Object.is == "function" ? Object.is : KA, wn = null, fi = null, ba = null, Fe = null, kt = !1, Wr = !1, lr = 0, Be = null, Hn = 0, Sa = 25, Bt = !1, Tt;
    function dn() {
      if (wn === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Bt && A("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), wn;
    }
    function qA(e, t) {
      if (t === null)
        return A("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Tt), !1;
      e.length !== t.length && A(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Tt, "[" + e.join(", ") + "]", "[" + t.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!$A(e[n], t[n]))
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
      return Fe === null ? ba === null ? (kt = !1, ba = Fe = Jt()) : (kt = !0, Fe = ba) : Fe.next === null ? (kt = !1, Fe = Fe.next = Jt()) : (kt = !0, Fe = Fe.next), Fe;
    }
    function sr(e, t) {
      wn = t, fi = e, Bt = !1, lr = 0;
    }
    function el(e, t, n, o) {
      for (; Wr; )
        Wr = !1, lr = 0, Hn += 1, Fe = null, n = e(t, o);
      return So(), n;
    }
    function hi() {
      var e = lr !== 0;
      return e;
    }
    function So() {
      Bt = !1, wn = null, fi = null, Wr = !1, ba = null, Hn = 0, Be = null, Fe = null;
    }
    function tl(e) {
      return Bt && A("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ln(e);
    }
    function nl(e) {
      return Tt = "useContext", dn(), Ln(e);
    }
    function xa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function pi(e) {
      return Tt = "useState", Ji(
        xa,
        // useReducer has a special case to support lazy useState initializers
        e
      );
    }
    function Ji(e, t, n) {
      if (e !== xa && (Tt = "useReducer"), wn = dn(), Fe = Nn(), kt) {
        var o = Fe.queue, l = o.dispatch;
        if (Be !== null) {
          var d = Be.get(o);
          if (d !== void 0) {
            Be.delete(o);
            var p = Fe.memoizedState, D = d;
            do {
              var R = D.action;
              Bt = !0, p = e(p, R), Bt = !1, D = D.next;
            } while (D !== null);
            return Fe.memoizedState = p, [p, l];
          }
        }
        return [Fe.memoizedState, l];
      } else {
        Bt = !0;
        var W;
        e === xa ? W = typeof t == "function" ? t() : t : W = n !== void 0 ? n(t) : t, Bt = !1, Fe.memoizedState = W;
        var Y = Fe.queue = {
          last: null,
          dispatch: null
        }, q = Y.dispatch = $i.bind(null, wn, Y);
        return [Fe.memoizedState, q];
      }
    }
    function Ki(e, t) {
      wn = dn(), Fe = Nn();
      var n = t === void 0 ? null : t;
      if (Fe !== null) {
        var o = Fe.memoizedState;
        if (o !== null && n !== null) {
          var l = o[1];
          if (qA(n, l))
            return o[0];
        }
      }
      Bt = !0;
      var d = e();
      return Bt = !1, Fe.memoizedState = [d, n], d;
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
    function rl(e, t) {
      Tt = "useLayoutEffect", A("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function $i(e, t, n) {
      if (Hn >= Sa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (e === wn) {
        Wr = !0;
        var o = {
          action: n,
          next: null
        };
        Be === null && (Be = /* @__PURE__ */ new Map());
        var l = Be.get(t);
        if (l === void 0)
          Be.set(t, o);
        else {
          for (var d = l; d.next !== null; )
            d = d.next;
          d.next = o;
        }
      }
    }
    function qi(e, t) {
      return Ki(function() {
        return e;
      }, t);
    }
    function ol(e, t, n) {
      return dn(), t(e._source);
    }
    function al(e, t, n) {
      if (n === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return n();
    }
    function il(e) {
      return dn(), e;
    }
    function Al() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function ll() {
      return dn(), [!1, Al];
    }
    function sl() {
      var e = fi, t = YA(e.treeContext), n = gi;
      if (n === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var o = lr++;
      return Ge(n, t, o);
    }
    function Ea() {
    }
    var eA = {
      readContext: tl,
      useContext: nl,
      useMemo: Ki,
      useReducer: Ji,
      useRef: vi,
      useState: pi,
      useInsertionEffect: Ea,
      useLayoutEffect: rl,
      useCallback: qi,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ea,
      // Effects are not run in the server environment.
      useEffect: Ea,
      // Debugging effect
      useDebugValue: Ea,
      useDeferredValue: il,
      useTransition: ll,
      useId: sl,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ol,
      useSyncExternalStore: al
    }, gi = null;
    function tA(e) {
      gi = e;
    }
    function Ca(e) {
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
    var Da = g.ReactCurrentDispatcher, xo = g.ReactDebugCurrentFrame, Pa = 0, Zr = 1, ka = 2, Ba = 3, Ta = 4, Gr = 0, mi = 1, ur = 2, nA = 12800;
    function ul(e) {
      return console.error(e), null;
    }
    function _r() {
    }
    function Yr(e, t, n, o, l, d, p, D, R) {
      var W = [], Y = /* @__PURE__ */ new Set(), q = {
        destination: null,
        responseState: t,
        progressiveChunkSize: o === void 0 ? nA : o,
        status: Gr,
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
        onError: l === void 0 ? ul : l,
        onAllReady: _r,
        onShellReady: p === void 0 ? _r : p,
        onShellError: _r,
        onFatalError: _r
      }, ge = Ia(
        q,
        0,
        null,
        n,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      ge.parentFlushed = !0;
      var Te = cr(q, e, null, ge, Y, fo, ua, _A);
      return W.push(Te), q;
    }
    function cl(e, t) {
      var n = e.pingedTasks;
      n.push(t), n.length === 1 && P(function() {
        return ki(e);
      });
    }
    function dl(e, t) {
      return {
        id: Er,
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
    function cr(e, t, n, o, l, d, p, D) {
      e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
      var R = {
        node: t,
        ping: function() {
          return cl(e, R);
        },
        blockedBoundary: n,
        blockedSegment: o,
        abortSet: l,
        legacyContext: d,
        context: p,
        treeContext: D
      };
      return R.componentStack = null, l.add(R), R;
    }
    function Ia(e, t, n, o, l, d) {
      return {
        status: Pa,
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
      return bn === null || bn.componentStack === null ? "" : Ca(bn.componentStack);
    }
    function dr(e, t) {
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
    function Ra(e, t) {
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
      o(t), e.destination !== null ? (e.status = ur, L(e.destination, t)) : (e.status = mi, e.fatalError = t);
    }
    function Do(e, t, n) {
      dr(t, "Suspense");
      var o = t.blockedBoundary, l = t.blockedSegment, d = n.fallback, p = n.children, D = /* @__PURE__ */ new Set(), R = dl(e, D), W = l.chunks.length, Y = Ia(
        e,
        W,
        R,
        l.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      l.children.push(Y), l.lastPushedText = !1;
      var q = Ia(
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
        if (vt(e, t, p), Mi(q.chunks, e.responseState, q.lastPushedText, q.textEmbedded), q.status = Zr, Xr(R, q), R.pendingTasks === 0) {
          fn(t);
          return;
        }
      } catch (Te) {
        q.status = Ta, R.forceClientRender = !0, R.errorDigest = Co(e, Te), Ra(R, Te);
      } finally {
        t.blockedBoundary = o, t.blockedSegment = l;
      }
      var ge = cr(e, d, o, Y, D, t.legacyContext, t.context, t.treeContext);
      ge.componentStack = t.componentStack, e.pingedTasks.push(ge), fn(t);
    }
    function wi(e, t, n, o) {
      dr(t, n);
      var l = t.blockedSegment, d = Vt(l.chunks, n, o, e.responseState, l.formatContext);
      l.lastPushedText = !1;
      var p = l.formatContext;
      l.formatContext = xr(p, n, o), vt(e, t, d), l.formatContext = p, Qe(l.chunks, n), l.lastPushedText = !1, fn(t);
    }
    function Po(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ko(e, t, n, o, l) {
      var d = {};
      sr(t, d);
      var p = n(o, l);
      return el(n, o, p, l);
    }
    function rA(e, t, n, o, l) {
      var d = n.render();
      n.props !== l && (Si || A("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ne(o) || "a component"), Si = !0);
      {
        var p = o.childContextTypes;
        if (p != null) {
          var D = t.legacyContext, R = Ui(n, o, D, p);
          t.legacyContext = R, It(e, t, d), t.legacyContext = D;
          return;
        }
      }
      It(e, t, d);
    }
    function fl(e, t, n, o) {
      Sn(t, n);
      var l = ho(n, t.legacyContext), d = _i(n, o, l);
      Vi(d, n, o, l), rA(e, t, d, n, o), fn(t);
    }
    var oA = {}, Bo = {}, bi = {}, aA = {}, Si = !1, To = {}, xi = !1, Ei = !1, Ci = !1;
    function iA(e, t, n, o) {
      var l;
      if (l = ho(n, t.legacyContext), Eo(t, n), n.prototype && typeof n.prototype.render == "function") {
        var d = Ne(n) || "Unknown";
        oA[d] || (A("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), oA[d] = !0);
      }
      var p = ko(e, t, n, o, l), D = hi();
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var R = Ne(n) || "Unknown";
        Bo[R] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Bo[R] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var W = Ne(n) || "Unknown";
          Bo[W] || (A("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", W, W, W), Bo[W] = !0);
        }
        Vi(p, n, o, l), rA(e, t, p, n, o);
      } else if (AA(n), D) {
        var Y = t.treeContext, q = 1, ge = 0;
        t.treeContext = ci(Y, q, ge);
        try {
          It(e, t, p);
        } finally {
          t.treeContext = Y;
        }
      } else
        It(e, t, p);
      fn(t);
    }
    function AA(e) {
      {
        if (e && e.childContextTypes && A("%s(...): childContextTypes cannot be defined on a function component.", e.displayName || e.name || "Component"), e.defaultProps !== void 0) {
          var t = Ne(e) || "Unknown";
          To[t] || (A("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", t), To[t] = !0);
        }
        if (typeof e.getDerivedStateFromProps == "function") {
          var n = Ne(e) || "Unknown";
          aA[n] || (A("%s: Function components do not support getDerivedStateFromProps.", n), aA[n] = !0);
        }
        if (typeof e.contextType == "object" && e.contextType !== null) {
          var o = Ne(e) || "Unknown";
          bi[o] || (A("%s: Function components do not support contextType.", o), bi[o] = !0);
        }
      }
    }
    function Di(e, t) {
      if (e && e.defaultProps) {
        var n = wt({}, t), o = e.defaultProps;
        for (var l in o)
          n[l] === void 0 && (n[l] = o[l]);
        return n;
      }
      return t;
    }
    function lA(e, t, n, o, l) {
      Eo(t, n.render);
      var d = ko(e, t, n.render, o, l), p = hi();
      if (p) {
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
    function hl(e, t, n, o, l) {
      var d = n.type, p = Di(d, o);
      Pi(e, t, d, p, l);
    }
    function pl(e, t, n, o) {
      n._context === void 0 ? n !== n.Consumer && (Ci || (Ci = !0, A("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : n = n._context;
      var l = o.children;
      typeof l != "function" && A("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var d = Ln(n), p = l(d);
      It(e, t, p);
    }
    function sA(e, t, n, o) {
      var l = n._context, d = o.value, p = o.children, D;
      D = t.context, t.context = zi(l, d), It(e, t, p), t.context = Wi(l), D !== t.context && A("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function vl(e, t, n, o, l) {
      dr(t, "Lazy");
      var d = n._payload, p = n._init, D = p(d), R = Di(D, o);
      Pi(e, t, D, R, l), fn(t);
    }
    function Pi(e, t, n, o, l) {
      if (typeof n == "function")
        if (Po(n)) {
          fl(e, t, n, o);
          return;
        } else {
          iA(e, t, n, o);
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
        case Oi:
        case qo: {
          It(e, t, o.children);
          return;
        }
        case io: {
          dr(t, "SuspenseList"), It(e, t, o.children), fn(t);
          return;
        }
        case Xa:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ra: {
          Do(e, t, o);
          return;
        }
      }
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case na: {
            lA(e, t, n, o, l);
            return;
          }
          case Ao: {
            hl(e, t, n, o, l);
            return;
          }
          case ea: {
            sA(e, t, n, o);
            return;
          }
          case ta: {
            pl(e, t, n, o);
            return;
          }
          case Lr: {
            vl(e, t, n, o);
            return;
          }
        }
      var d = "";
      throw (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (n == null ? n : typeof n) + "." + d));
    }
    function gl(e, t) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      e[Symbol.toStringTag] === "Generator" && (xi || A("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), xi = !0), e.entries === t && (Ei || A("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ei = !0);
    }
    function It(e, t, n) {
      try {
        return ml(e, t, n);
      } catch (o) {
        throw typeof o == "object" && o !== null && typeof o.then == "function" || (xn = xn !== null ? xn : yi()), o;
      }
    }
    function ml(e, t, n) {
      if (t.node = n, typeof n == "object" && n !== null) {
        switch (n.$$typeof) {
          case HA: {
            var o = n, l = o.type, d = o.props, p = o.ref;
            Pi(e, t, l, d, p);
            return;
          }
          case Qi:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Lr: {
            var D = n, R = D._payload, W = D._init, Y;
            try {
              Y = W(R);
            } catch (Vr) {
              throw typeof Vr == "object" && Vr !== null && typeof Vr.then == "function" && dr(t, "Lazy"), Vr;
            }
            It(e, t, Y);
            return;
          }
        }
        if (Ot(n)) {
          Ma(e, t, n);
          return;
        }
        var q = UA(n);
        if (q) {
          gl(n, q);
          var ge = q.call(n);
          if (ge) {
            var Te = ge.next();
            if (!Te.done) {
              var rt = [];
              do
                rt.push(Te.value), Te = ge.next();
              while (!Te.done);
              Ma(e, t, rt);
              return;
            }
            return;
          }
        }
        var hr = Object.prototype.toString.call(n);
        throw new Error("Objects are not valid as a React child (found: " + (hr === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : hr) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof n == "string") {
        var pr = t.blockedSegment;
        pr.lastPushedText = Ri(t.blockedSegment.chunks, n, e.responseState, pr.lastPushedText);
        return;
      }
      if (typeof n == "number") {
        var En = t.blockedSegment;
        En.lastPushedText = Ri(t.blockedSegment.chunks, "" + n, e.responseState, En.lastPushedText);
        return;
      }
      typeof n == "function" && A("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function Ma(e, t, n) {
      for (var o = n.length, l = 0; l < o; l++) {
        var d = t.treeContext;
        t.treeContext = ci(d, o, l);
        try {
          vt(e, t, n[l]);
        } finally {
          t.treeContext = d;
        }
      }
    }
    function yl(e, t, n) {
      var o = t.blockedSegment, l = o.chunks.length, d = Ia(
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
      var p = cr(e, t.node, t.blockedBoundary, d, t.abortSet, t.legacyContext, t.context, t.treeContext);
      t.componentStack !== null && (p.componentStack = t.componentStack.parent);
      var D = p.ping;
      n.then(D, D);
    }
    function vt(e, t, n) {
      var o = t.blockedSegment.formatContext, l = t.legacyContext, d = t.context, p = null;
      p = t.componentStack;
      try {
        return It(e, t, n);
      } catch (D) {
        if (So(), typeof D == "object" && D !== null && typeof D.then == "function") {
          yl(e, t, D), t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, vo(d), t.componentStack = p;
          return;
        } else
          throw t.blockedSegment.formatContext = o, t.legacyContext = l, t.context = d, vo(d), t.componentStack = p, D;
      }
    }
    function wl(e, t, n, o) {
      var l = Co(e, o);
      if (t === null ? Kt(e, o) : (t.pendingTasks--, t.forceClientRender || (t.forceClientRender = !0, t.errorDigest = l, Ra(t, o), t.parentFlushed && e.clientRenderedBoundaries.push(t))), e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function uA(e) {
      var t = this, n = e.blockedBoundary, o = e.blockedSegment;
      o.status = Ba, dA(t, n, o);
    }
    function cA(e, t, n) {
      var o = e.blockedBoundary, l = e.blockedSegment;
      if (l.status = Ba, o === null)
        t.allPendingTasks--, t.status !== ur && (t.status = ur, t.destination !== null && B(t.destination));
      else {
        if (o.pendingTasks--, !o.forceClientRender) {
          o.forceClientRender = !0;
          var d = n === void 0 ? new Error("The render was aborted by the server without a reason.") : n;
          o.errorDigest = t.onError(d);
          {
            var p = "The server did not finish this Suspense boundary: ";
            d && typeof d.message == "string" ? d = p + d.message : d = p + String(d);
            var D = bn;
            bn = e;
            try {
              Ra(o, d);
            } finally {
              bn = D;
            }
          }
          o.parentFlushed && t.clientRenderedBoundaries.push(o);
        }
        if (o.fallbackAbortableTasks.forEach(function(W) {
          return cA(W, t, n);
        }), o.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0) {
          var R = t.onAllReady;
          R();
        }
      }
    }
    function Xr(e, t) {
      if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
        var n = t.children[0];
        n.id = t.id, n.parentFlushed = !0, n.status === Zr && Xr(e, n);
      } else {
        var o = e.completedSegments;
        o.push(t);
      }
    }
    function dA(e, t, n) {
      if (t === null) {
        if (n.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          e.completedRootSegment = n;
        }
        if (e.pendingRootTasks--, e.pendingRootTasks === 0) {
          e.onShellError = _r;
          var o = e.onShellReady;
          o();
        }
      } else if (t.pendingTasks--, !t.forceClientRender) {
        if (t.pendingTasks === 0)
          n.parentFlushed && n.status === Zr && Xr(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(uA, e), t.fallbackAbortableTasks.clear();
        else if (n.parentFlushed && n.status === Zr) {
          Xr(t, n);
          var l = t.completedSegments;
          l.length === 1 && t.parentFlushed && e.partialBoundaries.push(t);
        }
      }
      if (e.allPendingTasks--, e.allPendingTasks === 0) {
        var d = e.onAllReady;
        d();
      }
    }
    function bl(e, t) {
      var n = t.blockedSegment;
      if (n.status === Pa) {
        vo(t.context);
        var o = null;
        o = bn, bn = t;
        try {
          It(e, t, t.node), Mi(n.chunks, e.responseState, n.lastPushedText, n.textEmbedded), t.abortSet.delete(t), n.status = Zr, dA(e, t.blockedBoundary, n);
        } catch (d) {
          if (So(), typeof d == "object" && d !== null && typeof d.then == "function") {
            var l = t.ping;
            d.then(l, l);
          } else
            t.abortSet.delete(t), n.status = Ta, wl(e, t.blockedBoundary, n, d);
        } finally {
          bn = o;
        }
      }
    }
    function ki(e) {
      if (e.status !== ur) {
        var t = Zi(), n = Da.current;
        Da.current = eA;
        var o;
        o = xo.getCurrentStack, xo.getCurrentStack = yi;
        var l = gi;
        tA(e.responseState);
        try {
          var d = e.pingedTasks, p;
          for (p = 0; p < d.length; p++) {
            var D = d[p];
            bl(e, D);
          }
          d.splice(0, p), e.destination !== null && Oa(e, e.destination);
        } catch (R) {
          Co(e, R), Kt(e, R);
        } finally {
          tA(l), Da.current = n, xo.getCurrentStack = o, n === eA && vo(t);
        }
      }
    }
    function fr(e, t, n) {
      switch (n.parentFlushed = !0, n.status) {
        case Pa: {
          var o = n.id = e.nextSegmentId++;
          return n.lastPushedText = !1, n.textEmbedded = !1, un(t, e.responseState, o);
        }
        case Zr: {
          n.status = ka;
          for (var l = !0, d = n.chunks, p = 0, D = n.children, R = 0; R < D.length; R++) {
            for (var W = D[R]; p < W.index; p++)
              y(t, d[p]);
            l = Io(e, t, W);
          }
          for (; p < d.length - 1; p++)
            y(t, d[p]);
          return p < d.length && (l = C(t, d[p])), l;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Io(e, t, n) {
      var o = n.boundary;
      if (o === null)
        return fr(e, t, n);
      if (o.parentFlushed = !0, o.forceClientRender)
        return jA(t, e.responseState, o.errorDigest, o.errorMessage, o.errorComponentStack), fr(e, t, n), LA(t, e.responseState);
      if (o.pendingTasks > 0) {
        o.rootSegmentID = e.nextSegmentId++, o.completedSegments.length > 0 && e.partialBoundaries.push(o);
        var l = o.id = Yt(e.responseState);
        return nr(t, e.responseState, l), fr(e, t, n), Qn(t, e.responseState);
      } else {
        if (o.byteSize > e.progressiveChunkSize)
          return o.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(o), nr(t, e.responseState, o.id), fr(e, t, n), Qn(t, e.responseState);
        OA(t, e.responseState);
        var d = o.completedSegments;
        if (d.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var p = d[0];
        return Io(e, t, p), FA(t, e.responseState);
      }
    }
    function Sl(e, t, n) {
      return IA(t, e.responseState, n.id, n.errorDigest, n.errorMessage, n.errorComponentStack);
    }
    function Bi(e, t, n) {
      return ao(t, e.responseState, n.formatContext, n.id), Io(e, t, n), Ko(t, n.formatContext);
    }
    function Ro(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        fA(e, t, n, d);
      }
      return o.length = 0, pt(t, e.responseState, n.id, n.rootSegmentID);
    }
    function Qa(e, t, n) {
      for (var o = n.completedSegments, l = 0; l < o.length; l++) {
        var d = o[l];
        if (!fA(e, t, n, d))
          return l++, o.splice(0, l), !1;
      }
      return o.splice(0, l), !0;
    }
    function fA(e, t, n, o) {
      if (o.status === ka)
        return !0;
      var l = o.id;
      if (l === -1) {
        var d = o.id = n.rootSegmentID;
        if (d === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Bi(e, t, o);
      } else
        return Bi(e, t, o), J(t, e.responseState, l);
    }
    function Oa(e, t) {
      try {
        var n = e.completedRootSegment;
        n !== null && e.pendingRootTasks === 0 && (Io(e, t, n), e.completedRootSegment = null, mn(t, e.responseState));
        var o = e.clientRenderedBoundaries, l;
        for (l = 0; l < o.length; l++) {
          var d = o[l];
          if (!Sl(e, t, d)) {
            e.destination = null, l++, o.splice(0, l);
            return;
          }
        }
        o.splice(0, l);
        var p = e.completedBoundaries;
        for (l = 0; l < p.length; l++) {
          var D = p[l];
          if (!Ro(e, t, D)) {
            e.destination = null, l++, p.splice(0, l);
            return;
          }
        }
        p.splice(0, l);
        var R = e.partialBoundaries;
        for (l = 0; l < R.length; l++) {
          var W = R[l];
          if (!Qa(e, t, W)) {
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
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.abortableTasks.size !== 0 && A("There was still abortable task at the root when we closed. This is a bug in React."), B(t));
      }
    }
    function hA(e) {
      P(function() {
        return ki(e);
      });
    }
    function xl(e, t) {
      if (e.status === mi) {
        e.status = ur, L(t, e.fatalError);
        return;
      }
      if (e.status !== ur && e.destination === null) {
        e.destination = t;
        try {
          Oa(e, t);
        } catch (n) {
          Co(e, n), Kt(e, n);
        }
      }
    }
    function pA(e, t) {
      try {
        var n = e.abortableTasks;
        n.forEach(function(o) {
          return cA(o, e, t);
        }), n.clear(), e.destination !== null && Oa(e, e.destination);
      } catch (o) {
        Co(e, o), Kt(e, o);
      }
    }
    function Ti() {
    }
    function vA(e, t, n, o) {
      var l = !1, d = null, p = "", D = {
        push: function(q) {
          return q !== null && (p += q), !0;
        },
        destroy: function(q) {
          l = !0, d = q;
        }
      }, R = !1;
      function W() {
        R = !0;
      }
      var Y = Yr(e, MA(n, t ? t.identifierPrefix : void 0), QA(), 1 / 0, Ti, void 0, W);
      if (hA(Y), pA(Y, o), xl(Y, D), l)
        throw d;
      if (!R)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return p;
    }
    function El(e, t) {
      return vA(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function gA(e, t) {
      return vA(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function Cl() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function r() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Qo.renderToNodeStream = Cl, Qo.renderToStaticMarkup = gA, Qo.renderToStaticNodeStream = r, Qo.renderToString = El, Qo.version = c;
  }()), Qo;
}
var yA = {}, $l;
function eu() {
  return $l || ($l = 1, Ml.env.NODE_ENV !== "production" && function() {
    var f = k, c = "18.3.1", g = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        w("warn", r, t);
      }
    }
    function A(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        w("error", r, t);
      }
    }
    function w(r, e, t) {
      {
        var n = g.ReactDebugCurrentFrame, o = n.getStackAddendum();
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
    var E = 512, y = null, C = 0;
    function H(r) {
      y = new Uint8Array(E), C = 0;
    }
    function B(r, e) {
      if (e.length !== 0) {
        if (e.length > E) {
          C > 0 && (r.enqueue(new Uint8Array(y.buffer, 0, C)), y = new Uint8Array(E), C = 0), r.enqueue(e);
          return;
        }
        var t = e, n = y.length - C;
        n < t.length && (n === 0 ? r.enqueue(y) : (y.set(t.subarray(0, n), C), r.enqueue(y), t = t.subarray(n)), y = new Uint8Array(E), C = 0), y.set(t, C), C += t.length;
      }
    }
    function Q(r, e) {
      return B(r, e), !0;
    }
    function U(r) {
      y && C > 0 && (r.enqueue(new Uint8Array(y.buffer, 0, C)), y = null, C = 0);
    }
    function L(r) {
      r.close();
    }
    var _ = new TextEncoder();
    function F(r) {
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
    var ne = Object.prototype.hasOwnProperty, Ae = 0, ae = 1, ce = 2, ve = 3, de = 4, Me = 5, Ce = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", se = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", fe = new RegExp("^[" + ee + "][" + se + "]*$"), be = {}, oe = {};
    function me(r) {
      return ne.call(oe, r) ? !0 : ne.call(be, r) ? !1 : fe.test(r) ? (oe[r] = !0, !0) : (be[r] = !0, A("Invalid attribute name: `%s`", r), !1);
    }
    function Oe(r, e, t, n) {
      if (t !== null && t.type === Ae)
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
    function le(r, e, t, n, o, l, d) {
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
      Le[r] = new le(
        r,
        Ae,
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
      Le[e] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[r] = new le(
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
      Le[e] = new le(
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
      Le[e] = new le(
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
      Le[e] = new le(
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
      Le[r] = new le(
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
    var mt = "xlinkHref";
    Le[mt] = new le(
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
      Le[r] = new le(
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
    function Ke(r, e) {
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
    var ze = {
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
    }, Xe = {}, ut = new RegExp("^(aria)-[" + se + "]*$"), Rt = new RegExp("^(aria)[A-Z][" + se + "]*$");
    function mr(r, e) {
      {
        if (ne.call(Xe, e) && Xe[e])
          return !0;
        if (Rt.test(e)) {
          var t = "aria-" + e.slice(4).toLowerCase(), n = ze.hasOwnProperty(t) ? t : null;
          if (n == null)
            return A("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", e), Xe[e] = !0, !0;
          if (e !== n)
            return A("Invalid ARIA attribute `%s`. Did you mean `%s`?", e, n), Xe[e] = !0, !0;
        }
        if (ut.test(e)) {
          var o = e.toLowerCase(), l = ze.hasOwnProperty(o) ? o : null;
          if (l == null)
            return Xe[e] = !0, !1;
          if (e !== l)
            return A("Unknown ARIA attribute `%s`. Did you mean `%s`?", e, l), Xe[e] = !0, !0;
        }
      }
      return !0;
    }
    function St(r, e) {
      {
        var t = [];
        for (var n in e) {
          var o = mr(r, n);
          o || t.push(n);
        }
        var l = t.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        t.length === 1 ? A("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r) : t.length > 1 && A("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", l, r);
      }
    }
    function qe(r, e) {
      nt(r, e) || St(r, e);
    }
    var _e = !1;
    function Zn(r, e) {
      {
        if (r !== "input" && r !== "textarea" && r !== "select")
          return;
        e != null && e.value === null && !_e && (_e = !0, r === "select" && e.multiple ? A("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : A("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
      }
    }
    var Gn = {
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
    }, _n = function() {
    };
    {
      var We = {}, Yn = /^on./, yr = /^on[^A-Z]/, wr = new RegExp("^(aria)-[" + se + "]*$"), Xn = new RegExp("^(aria)[A-Z][" + se + "]*$");
      _n = function(r, e, t, n) {
        if (ne.call(We, e) && We[e])
          return !0;
        var o = e.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return A("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), We[e] = !0, !0;
        if (n != null) {
          var l = n.registrationNameDependencies, d = n.possibleRegistrationNames;
          if (l.hasOwnProperty(e))
            return !0;
          var p = d.hasOwnProperty(o) ? d[o] : null;
          if (p != null)
            return A("Invalid event handler property `%s`. Did you mean `%s`?", e, p), We[e] = !0, !0;
          if (Yn.test(e))
            return A("Unknown event handler property `%s`. It will be ignored.", e), We[e] = !0, !0;
        } else if (Yn.test(e))
          return yr.test(e) && A("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", e), We[e] = !0, !0;
        if (wr.test(e) || Xn.test(e))
          return !0;
        if (o === "innerhtml")
          return A("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), We[e] = !0, !0;
        if (o === "aria")
          return A("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), We[e] = !0, !0;
        if (o === "is" && t !== null && t !== void 0 && typeof t != "string")
          return A("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof t), We[e] = !0, !0;
        if (typeof t == "number" && isNaN(t))
          return A("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", e), We[e] = !0, !0;
        var D = Se(e), R = D !== null && D.type === Ae;
        if (Gn.hasOwnProperty(o)) {
          var W = Gn[o];
          if (W !== e)
            return A("Invalid DOM property `%s`. Did you mean `%s`?", e, W), We[e] = !0, !0;
        } else if (!R && e !== o)
          return A("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", e, o), We[e] = !0, !0;
        return typeof t == "boolean" && Oe(e, t, D) ? (t ? A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', t, e, e, t, e) : A('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', t, e, e, t, e, e, e), We[e] = !0, !0) : R ? !0 : Oe(e, t, D) ? (We[e] = !0, !1) : ((t === "false" || t === "true") && D !== null && D.type === ve && (A("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", t, e, t === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', e, t), We[e] = !0), !0);
      };
    }
    var Cn = function(r, e, t) {
      {
        var n = [];
        for (var o in e) {
          var l = _n(r, o, e[o], t);
          l || n.push(o);
        }
        var d = n.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        n.length === 1 ? A("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r) : n.length > 1 && A("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, r);
      }
    };
    function Kr(r, e, t) {
      nt(r, e) || Cn(r, e, t);
    }
    var Vn = function() {
    };
    {
      var $t = /^(?:webkit|moz|o)[A-Z]/, Jn = /^-ms-/, br = /-(.)/g, ot = /;\s*$/, Mt = {}, qt = {}, Re = !1, en = !1, Dn = function(r) {
        return r.replace(br, function(e, t) {
          return t.toUpperCase();
        });
      }, hn = function(r) {
        Mt.hasOwnProperty(r) && Mt[r] || (Mt[r] = !0, A(
          "Unsupported style property %s. Did you mean %s?",
          r,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Dn(r.replace(Jn, "ms-"))
        ));
      }, Qt = function(r) {
        Mt.hasOwnProperty(r) && Mt[r] || (Mt[r] = !0, A("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
      }, Pn = function(r, e) {
        qt.hasOwnProperty(e) && qt[e] || (qt[e] = !0, A(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, e.replace(ot, "")));
      }, _t = function(r, e) {
        Re || (Re = !0, A("`NaN` is an invalid value for the `%s` css style property.", r));
      }, Ve = function(r, e) {
        en || (en = !0, A("`Infinity` is an invalid value for the `%s` css style property.", r));
      };
      Vn = function(r, e) {
        r.indexOf("-") > -1 ? hn(r) : $t.test(r) ? Qt(r) : ot.test(e) && Pn(r, e), typeof e == "number" && (isNaN(e) ? _t(r, e) : isFinite(e) || Ve(r, e));
      };
    }
    var Kn = Vn, $n = /["'&<>]/;
    function Sr(r) {
      re(r);
      var e = "" + r, t = $n.exec(e);
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
    function Ze(r) {
      return typeof r == "boolean" || typeof r == "number" ? "" + r : Sr(r);
    }
    var qn = /([A-Z])/g, $r = /^ms-/;
    function qr(r) {
      return r.replace(qn, "-$1").toLowerCase().replace($r, "-ms-");
    }
    var Ot = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, er = !1;
    function kn(r) {
      !er && Ot.test(r) && (er = !0, A("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
    }
    var tn = Array.isArray;
    function ct(r) {
      return tn(r);
    }
    var jt = T("<script>"), Bn = T("<\/script>"), nn = T('<script src="'), rn = T('<script type="module" src="'), Ft = T('" async=""><\/script>');
    function on(r) {
      return re(r), ("" + r).replace(dt, xr);
    }
    var dt = /(<\/|<)(s)(cript)/gi, xr = function(r, e, t, n) {
      return "" + e + (t === "s" ? "\\u0073" : "\\u0053") + n;
    };
    function Er(r, e, t, n, o) {
      var l = r === void 0 ? "" : r, d = e === void 0 ? jt : T('<script nonce="' + Ze(e) + '">'), p = [];
      if (t !== void 0 && p.push(d, F(on(t)), Bn), n !== void 0)
        for (var D = 0; D < n.length; D++)
          p.push(nn, F(Ze(n[D])), Ft);
      if (o !== void 0)
        for (var R = 0; R < o.length; R++)
          p.push(rn, F(Ze(o[R])), Ft);
      return {
        bootstrapChunks: p,
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
    var Yt = 0, Ge = 1, Lt = 2, Ht = 3, an = 4, Tn = 5, xt = 6, Nt = 7;
    function at(r, e) {
      return {
        insertionMode: r,
        selectedValue: e
      };
    }
    function An(r) {
      var e = r === "http://www.w3.org/2000/svg" ? Lt : r === "http://www.w3.org/1998/Math/MathML" ? Ht : Yt;
      return at(e, null);
    }
    function pn(r, e, t) {
      switch (e) {
        case "select":
          return at(Ge, t.value != null ? t.value : t.defaultValue);
        case "svg":
          return at(Lt, null);
        case "math":
          return at(Ht, null);
        case "foreignObject":
          return at(Ge, null);
        case "table":
          return at(an, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return at(Tn, null);
        case "colgroup":
          return at(Nt, null);
        case "tr":
          return at(xt, null);
      }
      return r.insertionMode >= an || r.insertionMode === Yt ? at(Ge, null) : r;
    }
    var In = null;
    function yt(r) {
      var e = r.nextSuspenseID++;
      return T(r.boundaryPrefix + e.toString(16));
    }
    function Ut(r, e, t) {
      var n = r.idPrefix, o = ":" + n + "R" + e;
      return t > 0 && (o += "H" + t.toString(32)), o + ":";
    }
    function it(r) {
      return Ze(r);
    }
    var Rn = T("<!-- -->");
    function $e(r, e, t, n) {
      return e === "" ? n : (n && r.push(Rn), r.push(F(it(e))), !0);
    }
    function ft(r, e, t, n) {
      t && n && r.push(Rn);
    }
    var a = /* @__PURE__ */ new Map();
    function u(r) {
      var e = a.get(r);
      if (e !== void 0)
        return e;
      var t = T(Ze(qr(r)));
      return a.set(r, t), t;
    }
    var v = T(' style="'), x = T(":"), O = T(";");
    function I(r, e, t) {
      if (typeof t != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var n = !0;
      for (var o in t)
        if (ne.call(t, o)) {
          var l = t[o];
          if (!(l == null || typeof l == "boolean" || l === "")) {
            var d = void 0, p = void 0, D = o.indexOf("--") === 0;
            D ? (d = F(Ze(o)), Z(l, o), p = F(Ze(("" + l).trim()))) : (Kn(o, l), d = u(o), typeof l == "number" ? l !== 0 && !ne.call(xe, o) ? p = F(l + "px") : p = F("" + l) : (Z(l, o), p = F(Ze(("" + l).trim())))), n ? (n = !1, r.push(v, d, x, p)) : r.push(O, d, x, p);
          }
        }
      n || r.push(ie);
    }
    var N = T(" "), V = T('="'), ie = T('"'), he = T('=""');
    function ue(r, e, t, n) {
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
          var l = o.attributeName, d = F(l);
          switch (o.type) {
            case ve:
              n && r.push(N, d, he);
              return;
            case de:
              n === !0 ? r.push(N, d, he) : n === !1 || r.push(N, d, V, F(Ze(n)), ie);
              return;
            case Me:
              isNaN(n) || r.push(N, d, V, F(Ze(n)), ie);
              break;
            case Ce:
              !isNaN(n) && n >= 1 && r.push(N, d, V, F(Ze(n)), ie);
              break;
            default:
              o.sanitizeURL && ($(n, l), n = "" + n, kn(n)), r.push(N, d, V, F(Ze(n)), ie);
          }
        } else if (me(t)) {
          switch (typeof n) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var p = t.toLowerCase().slice(0, 5);
              if (p !== "data-" && p !== "aria-")
                return;
            }
          }
          r.push(N, F(t), V, F(Ze(n)), ie);
        }
      }
    }
    var ke = T(">"), At = T("/>");
    function lt(r, e, t) {
      if (e != null) {
        if (t != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof e != "object" || !("__html" in e))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var n = e.__html;
        n != null && (re(n), r.push(F("" + n)));
      }
    }
    var st = !1, ln = !1, zt = !1, Mn = !1, sn = !1, vn = !1, Xt = !1;
    function gn(r, e) {
      {
        var t = r[e];
        if (t != null) {
          var n = ct(t);
          r.multiple && !n ? A("The `%s` prop supplied to <select> must be an array if `multiple` is true.", e) : !r.multiple && n && A("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", e);
        }
      }
    }
    function Na(r, e, t) {
      Ke("select", e), gn(e, "value"), gn(e, "defaultValue"), e.value !== void 0 && e.defaultValue !== void 0 && !zt && (A("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), zt = !0), r.push(Et("select"));
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
              ue(r, t, l, d);
              break;
          }
        }
      return r.push(ke), lt(r, o, n), n;
    }
    function Ua(r) {
      var e = "";
      return f.Children.forEach(r, function(t) {
        t != null && (e += t, !sn && typeof t != "string" && typeof t != "number" && (sn = !0, A("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), e;
    }
    var Cr = T(' selected=""');
    function Wt(r, e, t, n) {
      var o = n.selectedValue;
      r.push(Et("option"));
      var l = null, d = null, p = null, D = null;
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
              p = W, Xt || (A("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Xt = !0);
              break;
            case "dangerouslySetInnerHTML":
              D = W;
              break;
            case "value":
              d = W;
            default:
              ue(r, t, R, W);
              break;
          }
        }
      if (o != null) {
        var Y;
        if (d !== null ? ($(d, "value"), Y = "" + d) : (D !== null && (vn || (vn = !0, A("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), Y = Ua(l)), ct(o))
          for (var q = 0; q < o.length; q++) {
            $(o[q], "value");
            var ge = "" + o[q];
            if (ge === Y) {
              r.push(Cr);
              break;
            }
          }
        else
          $(o, "select.value"), "" + o === Y && r.push(Cr);
      } else p && r.push(Cr);
      return r.push(ke), lt(r, D, l), l;
    }
    function za(r, e, t) {
      Ke("input", e), e.checked !== void 0 && e.defaultChecked !== void 0 && !ln && (A("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), ln = !0), e.value !== void 0 && e.defaultValue !== void 0 && !st && (A("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", e.type), st = !0), r.push(Et("input"));
      var n = null, o = null, l = null, d = null;
      for (var p in e)
        if (ne.call(e, p)) {
          var D = e[p];
          if (D == null)
            continue;
          switch (p) {
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
              ue(r, t, p, D);
              break;
          }
        }
      return l !== null ? ue(r, t, "checked", l) : d !== null && ue(r, t, "checked", d), n !== null ? ue(r, t, "value", n) : o !== null && ue(r, t, "value", o), r.push(At), null;
    }
    function Vt(r, e, t) {
      Ke("textarea", e), e.value !== void 0 && e.defaultValue !== void 0 && !Mn && (A("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Mn = !0), r.push(Et("textarea"));
      var n = null, o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var p = e[d];
          if (p == null)
            continue;
          switch (d) {
            case "children":
              l = p;
              break;
            case "value":
              n = p;
              break;
            case "defaultValue":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ue(r, t, d, p);
              break;
          }
        }
      if (n === null && o !== null && (n = o), r.push(ke), l != null) {
        if (A("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), n != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ct(l)) {
          if (l.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          re(l[0]), n = "" + l[0];
        }
        re(l), n = "" + l;
      }
      return typeof n == "string" && n[0] === `
` && r.push(yn), n !== null && ($(n, "value"), r.push(F(it("" + n)))), null;
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
              ue(r, n, o, l);
              break;
          }
        }
      return r.push(At), null;
    }
    function Dr(r, e, t) {
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
              ue(r, t, n, o);
              break;
          }
        }
      return r.push(ke), null;
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
              ue(r, t, o, l);
              break;
          }
        }
      r.push(ke);
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
          var p = e[d];
          if (p == null)
            continue;
          switch (d) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              l = p;
              break;
            default:
              ue(r, n, d, p);
              break;
          }
        }
      return r.push(ke), lt(r, l, o), typeof o == "string" ? (r.push(F(it(o))), null) : o;
    }
    function Pr(r, e, t, n) {
      r.push(Et(t));
      var o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var p = e[d];
          if (p == null)
            continue;
          switch (d) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              l = p;
              break;
            case "style":
              I(r, n, p);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              me(d) && typeof p != "function" && typeof p != "symbol" && r.push(N, F(d), V, F(Ze(p)), ie);
              break;
          }
        }
      return r.push(ke), lt(r, l, o), o;
    }
    var yn = T(`
`);
    function un(r, e, t, n) {
      r.push(Et(t));
      var o = null, l = null;
      for (var d in e)
        if (ne.call(e, d)) {
          var p = e[d];
          if (p == null)
            continue;
          switch (d) {
            case "children":
              o = p;
              break;
            case "dangerouslySetInnerHTML":
              l = p;
              break;
            default:
              ue(r, n, d, p);
              break;
          }
        }
      if (r.push(ke), l != null) {
        if (o != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof l != "object" || !("__html" in l))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var D = l.__html;
        D != null && (typeof D == "string" && D.length > 0 && D[0] === `
` ? r.push(yn, F(D)) : (re(D), r.push(F("" + D))));
      }
      return typeof o == "string" && o[0] === `
` && r.push(yn), o;
    }
    var kr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, cn = /* @__PURE__ */ new Map();
    function Et(r) {
      var e = cn.get(r);
      if (e === void 0) {
        if (!kr.test(r))
          throw new Error("Invalid tag: " + r);
        e = T("<" + r), cn.set(r, e);
      }
      return e;
    }
    var to = T("<!DOCTYPE html>");
    function tr(r, e, t, n, o) {
      switch (qe(e, t), Zn(e, t), Kr(e, t, null), !t.suppressContentEditableWarning && t.contentEditable && t.children != null && A("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), o.insertionMode !== Lt && o.insertionMode !== Ht && e.indexOf("-") === -1 && typeof t.is != "string" && e.toLowerCase() !== e && A("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e) {
        case "select":
          return Na(r, t, n);
        case "option":
          return Wt(r, t, n, o);
        case "textarea":
          return Vt(r, t, n);
        case "input":
          return za(r, t, n);
        case "menuitem":
          return Dr(r, t, n);
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
          return e.indexOf("-") === -1 && typeof t.is != "string" ? mn(r, t, e, n) : Pr(r, t, e, n);
      }
    }
    var Lo = T("</"), Br = T(">");
    function Ho(r, e, t) {
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
          r.push(Lo, F(e), Br);
      }
    }
    function Wa(r, e) {
      for (var t = e.bootstrapChunks, n = 0; n < t.length - 1; n++)
        B(r, t[n]);
      return n < t.length ? Q(r, t[n]) : !0;
    }
    var Za = T('<template id="'), Tr = T('"></template>');
    function No(r, e, t) {
      B(r, Za), B(r, e.placeholderPrefix);
      var n = F(t.toString(16));
      return B(r, n), Q(r, Tr);
    }
    var nr = T("<!--$-->"), no = T('<!--$?--><template id="'), Ga = T('"></template>'), Qn = T("<!--$!-->"), ro = T("<!--/$-->"), oo = T("<template"), On = T('"'), rr = T(' data-dgst="'), Ir = T(' data-msg="'), Uo = T(' data-stck="'), zo = T("></template>");
    function Wo(r, e) {
      return Q(r, nr);
    }
    function Rr(r, e, t) {
      if (B(r, no), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(r, t), Q(r, Ga);
    }
    function ht(r, e, t, n, o) {
      var l;
      return l = Q(r, Qn), B(r, oo), t && (B(r, rr), B(r, F(Ze(t))), B(r, On)), n && (B(r, Ir), B(r, F(Ze(n))), B(r, On)), o && (B(r, Uo), B(r, F(Ze(o))), B(r, On)), l = Q(r, zo), l;
    }
    function Zo(r, e) {
      return Q(r, ro);
    }
    function Mr(r, e) {
      return Q(r, ro);
    }
    function _a(r, e) {
      return Q(r, ro);
    }
    var Go = T('<div hidden id="'), Qr = T('">'), _o = T("</div>"), Yo = T('<svg aria-hidden="true" style="display:none" id="'), Or = T('">'), jr = T("</svg>"), Xo = T('<math aria-hidden="true" style="display:none" id="'), Vo = T('">'), Jo = T("</math>"), ao = T('<table hidden id="'), Ko = T('">'), i = T("</table>"), s = T('<table hidden><tbody id="'), h = T('">'), S = T("</tbody></table>"), j = T('<table hidden><tr id="'), M = T('">'), z = T("</tr></table>"), J = T('<table hidden><colgroup id="'), pe = T('">'), we = T("</colgroup></table>");
    function ye(r, e, t, n) {
      switch (t.insertionMode) {
        case Yt:
        case Ge:
          return B(r, Go), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, Qr);
        case Lt:
          return B(r, Yo), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, Or);
        case Ht:
          return B(r, Xo), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, Vo);
        case an:
          return B(r, ao), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, Ko);
        case Tn:
          return B(r, s), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, h);
        case xt:
          return B(r, j), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, M);
        case Nt:
          return B(r, J), B(r, e.segmentPrefix), B(r, F(n.toString(16))), Q(r, pe);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function je(r, e) {
      switch (e.insertionMode) {
        case Yt:
        case Ge:
          return Q(r, _o);
        case Lt:
          return Q(r, jr);
        case Ht:
          return Q(r, Jo);
        case an:
          return Q(r, i);
        case Tn:
          return Q(r, S);
        case xt:
          return Q(r, z);
        case Nt:
          return Q(r, we);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var pt = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Ct = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Fr = T(pt + ';$RS("'), $o = T('$RS("'), or = T('","'), IA = T('")<\/script>');
    function RA(r, e, t) {
      B(r, e.startInlineScript), e.sentCompleteSegmentFunction ? B(r, $o) : (e.sentCompleteSegmentFunction = !0, B(r, Fr)), B(r, e.segmentPrefix);
      var n = F(t.toString(16));
      return B(r, n), B(r, or), B(r, e.placeholderPrefix), B(r, n), Q(r, IA);
    }
    var Ya = T(Ct + ';$RC("'), MA = T('$RC("'), QA = T('","'), Ri = T('")<\/script>');
    function Mi(r, e, t, n) {
      if (B(r, e.startInlineScript), e.sentCompleteBoundaryFunction ? B(r, MA) : (e.sentCompleteBoundaryFunction = !0, B(r, Ya)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var o = F(n.toString(16));
      return B(r, t), B(r, QA), B(r, e.segmentPrefix), B(r, o), Q(r, Ri);
    }
    var OA = T(Dt + ';$RX("'), jA = T('$RX("'), FA = T('"'), LA = T(")<\/script>"), wt = T(",");
    function HA(r, e, t, n, o, l) {
      if (B(r, e.startInlineScript), e.sentClientRenderFunction ? B(r, jA) : (e.sentClientRenderFunction = !0, B(r, OA)), t === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return B(r, t), B(r, FA), (n || o || l) && (B(r, wt), B(r, F(qo(n || "")))), (o || l) && (B(r, wt), B(r, F(qo(o || "")))), l && (B(r, wt), B(r, F(qo(l)))), Q(r, LA);
    }
    var Qi = /[<\u2028\u2029]/g;
    function qo(r) {
      var e = JSON.stringify(r);
      return e.replace(Qi, function(t) {
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
    var Pt = Object.assign, Oi = Symbol.for("react.element"), ea = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), na = Symbol.for("react.strict_mode"), ra = Symbol.for("react.profiler"), io = Symbol.for("react.provider"), Ao = Symbol.for("react.context"), Lr = Symbol.for("react.forward_ref"), Xa = Symbol.for("react.suspense"), Va = Symbol.for("react.suspense_list"), Ja = Symbol.for("react.memo"), oa = Symbol.for("react.lazy"), ji = Symbol.for("react.scope"), NA = Symbol.for("react.debug_trace_mode"), UA = Symbol.for("react.legacy_hidden"), zA = Symbol.for("react.default_value"), Ka = Symbol.iterator, Ne = "@@iterator";
    function lo(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = Ka && r[Ka] || r[Ne];
      return typeof e == "function" ? e : null;
    }
    function Fi(r, e, t) {
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
        case ta:
          return "Fragment";
        case ea:
          return "Portal";
        case ra:
          return "Profiler";
        case na:
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
          case Lr:
            return Fi(r, r.render, "ForwardRef");
          case Ja:
            var n = r.displayName || null;
            return n !== null ? n : He(r.type) || "Memo";
          case oa: {
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
    var Hr = 0, qa, ei, ti, ni, Li, Hi, aa;
    function ia() {
    }
    ia.__reactDisabledLog = !0;
    function so() {
      {
        if (Hr === 0) {
          qa = console.log, ei = console.info, ti = console.warn, ni = console.error, Li = console.group, Hi = console.groupCollapsed, aa = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ia,
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
        Hr++;
      }
    }
    function ri() {
      {
        if (Hr--, Hr === 0) {
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
              value: Li
            }),
            groupCollapsed: Pt({}, r, {
              value: Hi
            }),
            groupEnd: Pt({}, r, {
              value: aa
            })
          });
        }
        Hr < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Nr = g.ReactCurrentDispatcher, oi;
    function ar(r, e, t) {
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
      var WA = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new WA();
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
      l = Nr.current, Nr.current = null, so();
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
          for (var p = Te.stack.split(`
`), D = n.stack.split(`
`), R = p.length - 1, W = D.length - 1; R >= 1 && W >= 0 && p[R] !== D[W]; )
            W--;
          for (; R >= 1 && W >= 0; R--, W--)
            if (p[R] !== D[W]) {
              if (R !== 1 || W !== 1)
                do
                  if (R--, W--, W < 0 || p[R] !== D[W]) {
                    var Y = `
` + p[R].replace(" at new ", " at ");
                    return r.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", r.displayName)), typeof r == "function" && uo.set(r, Y), Y;
                  }
                while (R >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        ai = !1, Nr.current = l, ri(), Error.prepareStackTrace = o;
      }
      var q = r ? r.displayName || r.name : "", ge = q ? ar(q) : "";
      return typeof r == "function" && uo.set(r, ge), ge;
    }
    function Ni(r, e, t) {
      return co(r, !0);
    }
    function ii(r, e, t) {
      return co(r, !1);
    }
    function Aa(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function la(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return co(r, Aa(r));
      if (typeof r == "string")
        return ar(r);
      switch (r) {
        case Xa:
          return ar("Suspense");
        case Va:
          return ar("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case Lr:
            return ii(r.render);
          case Ja:
            return la(r.type, e, t);
          case oa: {
            var n = r, o = n._payload, l = n._init;
            try {
              return la(l(o), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var sa = {}, fo = g.ReactDebugCurrentFrame;
    function ho(r) {
      if (r) {
        var e = r._owner, t = la(r.type, r._source, e ? e.type : null);
        fo.setExtraStackFrame(t);
      } else
        fo.setExtraStackFrame(null);
    }
    function Ui(r, e, t, n, o) {
      {
        var l = Function.call.bind(ne);
        for (var d in r)
          if (l(r, d)) {
            var p = void 0;
            try {
              if (typeof r[d] != "function") {
                var D = Error((n || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              p = r[d](e, d, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              p = R;
            }
            p && !(p instanceof Error) && (ho(o), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, d, typeof p), ho(null)), p instanceof Error && !(p.message in sa) && (sa[p.message] = !0, ho(o), A("Failed %s type: %s", t, p.message), ho(null));
          }
      }
    }
    var ir;
    ir = {};
    var ua = {};
    Object.freeze(ua);
    function jn(r, e) {
      {
        var t = r.contextTypes;
        if (!t)
          return ua;
        var n = {};
        for (var o in t)
          n[o] = e[o];
        {
          var l = He(r) || "Unknown";
          Ui(t, n, "context", l);
        }
        return n;
      }
    }
    function Ai(r, e, t, n) {
      {
        if (typeof r.getChildContext != "function") {
          {
            var o = He(e) || "Unknown";
            ir[o] || (ir[o] = !0, A("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", o, o));
          }
          return t;
        }
        var l = r.getChildContext();
        for (var d in l)
          if (!(d in n))
            throw new Error((He(e) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var p = He(e) || "Unknown";
          Ui(n, l, "child context", p);
        }
        return Pt({}, t, l);
      }
    }
    var Ar;
    Ar = {};
    var ca = null, Fn = null;
    function da(r) {
      r.context._currentValue = r.parentValue;
    }
    function fa(r) {
      r.context._currentValue = r.value;
    }
    function po(r, e) {
      if (r !== e) {
        da(r);
        var t = r.parent, n = e.parent;
        if (t === null) {
          if (n !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (n === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          po(t, n);
        }
        fa(e);
      }
    }
    function vo(r) {
      da(r);
      var e = r.parent;
      e !== null && vo(e);
    }
    function zi(r) {
      var e = r.parent;
      e !== null && zi(e), fa(r);
    }
    function Wi(r, e) {
      da(r);
      var t = r.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      t.depth === e.depth ? po(t, e) : Wi(t, e);
    }
    function Zi(r, e) {
      var t = e.parent;
      if (t === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      r.depth === t.depth ? po(r, t) : Zi(r, t), fa(e);
    }
    function Ln(r) {
      var e = Fn, t = r;
      e !== t && (e === null ? zi(t) : t === null ? vo(e) : e.depth === t.depth ? po(e, t) : e.depth > t.depth ? Wi(e, t) : Zi(e, t), Fn = t);
    }
    function li(r, e) {
      var t;
      t = r._currentValue, r._currentValue = e, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Ar && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Ar;
      var n = Fn, o = {
        parent: n,
        depth: n === null ? 0 : n.depth + 1,
        context: r,
        parentValue: t,
        value: e
      };
      return Fn = o, o;
    }
    function ZA(r) {
      var e = Fn;
      if (e === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      e.context !== r && A("The parent context is not the expected context. This is probably a bug in React.");
      {
        var t = e.parentValue;
        t === zA ? e.context._currentValue = e.context._defaultValue : e.context._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Ar && A("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Ar;
      }
      return Fn = e.parent;
    }
    function Gi() {
      return Fn;
    }
    function Ur(r) {
      var e = r._currentValue;
      return e;
    }
    function go(r) {
      return r._reactInternals;
    }
    function si(r, e) {
      r._reactInternals = e;
    }
    var ha = {}, pa = {}, va, zr, mo, yo, ga, wo, ma, ya, ui;
    {
      va = /* @__PURE__ */ new Set(), zr = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), ma = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), ya = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set();
      var _i = /* @__PURE__ */ new Set();
      wo = function(r, e) {
        if (!(r === null || typeof r == "function")) {
          var t = e + "_" + r;
          _i.has(t) || (_i.add(t), A("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", e, r));
        }
      }, ga = function(r, e) {
        if (e === void 0) {
          var t = He(r) || "Component";
          yo.has(t) || (yo.add(t), A("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t));
        }
      };
    }
    function Yi(r, e) {
      {
        var t = r.constructor, n = t && He(t) || "ReactClass", o = n + "." + e;
        if (ha[o])
          return;
        A(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, e, e, n), ha[o] = !0;
      }
    }
    var Xi = {
      isMounted: function(r) {
        return !1;
      },
      enqueueSetState: function(r, e, t) {
        var n = go(r);
        n.queue === null ? Yi(r, "setState") : (n.queue.push(e), t != null && wo(t, "setState"));
      },
      enqueueReplaceState: function(r, e, t) {
        var n = go(r);
        n.replace = !0, n.queue = [e], t != null && wo(t, "setState");
      },
      enqueueForceUpdate: function(r, e) {
        var t = go(r);
        t.queue === null ? Yi(r, "forceUpdate") : e != null && wo(e, "setState");
      }
    };
    function GA(r, e, t, n, o) {
      var l = t(o, n);
      ga(e, l);
      var d = l == null ? n : Pt({}, n, l);
      return d;
    }
    function Vi(r, e, t) {
      var n = ua, o = r.contextType;
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
      typeof o == "object" && o !== null ? n = Ur(o) : n = t;
      var p = new r(e, n);
      {
        if (typeof r.getDerivedStateFromProps == "function" && (p.state === null || p.state === void 0)) {
          var D = He(r) || "Component";
          va.has(D) || (va.add(D), A("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", D, p.state === null ? "null" : "undefined", D));
        }
        if (typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function") {
          var R = null, W = null, Y = null;
          if (typeof p.componentWillMount == "function" && p.componentWillMount.__suppressDeprecationWarning !== !0 ? R = "componentWillMount" : typeof p.UNSAFE_componentWillMount == "function" && (R = "UNSAFE_componentWillMount"), typeof p.componentWillReceiveProps == "function" && p.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof p.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof p.componentWillUpdate == "function" && p.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof p.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), R !== null || W !== null || Y !== null) {
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
      return p;
    }
    function _A(r, e, t) {
      {
        var n = He(e) || "Component", o = r.render;
        o || (e.prototype && typeof e.prototype.render == "function" ? A("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", n) : A("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", n)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && A("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", n), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && A("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", n), r.propTypes && A("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", n), r.contextType && A("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", n), r.contextTypes && A("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", n), e.contextType && e.contextTypes && !ya.has(e) && (ya.add(e), A("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", n)), typeof r.componentShouldUpdate == "function" && A("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", n), e.prototype && e.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && A("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", He(e) || "A pure component"), typeof r.componentDidUnmount == "function" && A("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", n), typeof r.componentDidReceiveProps == "function" && A("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", n), typeof r.componentWillRecieveProps == "function" && A("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", n), typeof r.UNSAFE_componentWillRecieveProps == "function" && A("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", n);
        var l = r.props !== t;
        r.props !== void 0 && l && A("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", n, n), r.defaultProps && A("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", n, n), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !zr.has(e) && (zr.add(e), A("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", He(e))), typeof r.getDerivedStateFromProps == "function" && A("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof r.getDerivedStateFromError == "function" && A("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", n), typeof e.getSnapshotBeforeUpdate == "function" && A("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", n);
        var d = r.state;
        d && (typeof d != "object" || ct(d)) && A("%s.state: must be set to an object or null", n), typeof r.getChildContext == "function" && typeof e.childContextTypes != "object" && A("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", n);
      }
    }
    function YA(r, e) {
      var t = e.state;
      if (typeof e.componentWillMount == "function") {
        if (e.componentWillMount.__suppressDeprecationWarning !== !0) {
          var n = He(r) || "Unknown";
          pa[n] || (m(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            n
          ), pa[n] = !0);
        }
        e.componentWillMount();
      }
      typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && (A("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", He(r) || "Component"), Xi.enqueueReplaceState(e, e.state, null));
    }
    function ci(r, e, t, n) {
      if (r.queue !== null && r.queue.length > 0) {
        var o = r.queue, l = r.replace;
        if (r.queue = null, r.replace = !1, l && o.length === 1)
          e.state = o[0];
        else {
          for (var d = l ? o[0] : e.state, p = !0, D = l ? 1 : 0; D < o.length; D++) {
            var R = o[D], W = typeof R == "function" ? R.call(e, d, t, n) : R;
            W != null && (p ? (p = !1, d = Pt({}, d, W)) : Pt(d, W));
          }
          e.state = d;
        }
      } else
        r.queue = null;
    }
    function bo(r, e, t, n) {
      _A(r, e, t);
      var o = r.state !== void 0 ? r.state : null;
      r.updater = Xi, r.props = t, r.state = o;
      var l = {
        queue: [],
        replace: !1
      };
      si(r, l);
      var d = e.contextType;
      if (typeof d == "object" && d !== null ? r.context = Ur(d) : r.context = n, r.state === t) {
        var p = He(e) || "Component";
        ma.has(p) || (ma.add(p), A("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
      }
      var D = e.getDerivedStateFromProps;
      typeof D == "function" && (r.state = GA(r, e, D, o, t)), typeof e.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (YA(e, r), ci(l, r, t, n));
    }
    var XA = {
      id: 1,
      overflow: ""
    };
    function VA(r) {
      var e = r.overflow, t = r.id, n = t & ~JA(t);
      return n.toString(32) + e;
    }
    function di(r, e, t) {
      var n = r.id, o = r.overflow, l = wa(n) - 1, d = n & ~(1 << l), p = t + 1, D = wa(e) + l;
      if (D > 30) {
        var R = l - l % 5, W = (1 << R) - 1, Y = (d & W).toString(32), q = d >> R, ge = l - R, Te = wa(e) + ge, rt = p << ge, hr = rt | q, pr = Y + o;
        return {
          id: 1 << Te | hr,
          overflow: pr
        };
      } else {
        var En = p << l, Vr = En | d, Dl = o;
        return {
          id: 1 << D | Vr,
          overflow: Dl
        };
      }
    }
    function wa(r) {
      return 32 - KA(r);
    }
    function JA(r) {
      return 1 << wa(r) - 1;
    }
    var KA = Math.clz32 ? Math.clz32 : fi, $A = Math.log, wn = Math.LN2;
    function fi(r) {
      var e = r >>> 0;
      return e === 0 ? 32 : 31 - ($A(e) / wn | 0) | 0;
    }
    function ba(r, e) {
      return r === e && (r !== 0 || 1 / r === 1 / e) || r !== r && e !== e;
    }
    var Fe = typeof Object.is == "function" ? Object.is : ba, kt = null, Wr = null, lr = null, Be = null, Hn = !1, Sa = !1, Bt = 0, Tt = null, dn = 0, qA = 25, Jt = !1, Nn;
    function sr() {
      if (kt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Jt && A("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), kt;
    }
    function el(r, e) {
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
      return Be === null ? lr === null ? (Hn = !1, lr = Be = hi()) : (Hn = !0, Be = lr) : Be.next === null ? (Hn = !1, Be = Be.next = hi()) : (Hn = !0, Be = Be.next), Be;
    }
    function tl(r, e) {
      kt = e, Wr = r, Jt = !1, Bt = 0;
    }
    function nl(r, e, t, n) {
      for (; Sa; )
        Sa = !1, Bt = 0, dn += 1, Be = null, t = r(e, n);
      return pi(), t;
    }
    function xa() {
      var r = Bt !== 0;
      return r;
    }
    function pi() {
      Jt = !1, kt = null, Wr = null, Sa = !1, lr = null, dn = 0, Tt = null, Be = null;
    }
    function Ji(r) {
      return Jt && A("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Ur(r);
    }
    function Ki(r) {
      return Nn = "useContext", sr(), Ur(r);
    }
    function vi(r, e) {
      return typeof e == "function" ? e(r) : e;
    }
    function rl(r) {
      return Nn = "useState", $i(
        vi,
        // useReducer has a special case to support lazy useState initializers
        r
      );
    }
    function $i(r, e, t) {
      if (r !== vi && (Nn = "useReducer"), kt = sr(), Be = So(), Hn) {
        var n = Be.queue, o = n.dispatch;
        if (Tt !== null) {
          var l = Tt.get(n);
          if (l !== void 0) {
            Tt.delete(n);
            var d = Be.memoizedState, p = l;
            do {
              var D = p.action;
              Jt = !0, d = r(d, D), Jt = !1, p = p.next;
            } while (p !== null);
            return Be.memoizedState = d, [d, o];
          }
        }
        return [Be.memoizedState, o];
      } else {
        Jt = !0;
        var R;
        r === vi ? R = typeof e == "function" ? e() : e : R = t !== void 0 ? t(e) : e, Jt = !1, Be.memoizedState = R;
        var W = Be.queue = {
          last: null,
          dispatch: null
        }, Y = W.dispatch = il.bind(null, kt, W);
        return [Be.memoizedState, Y];
      }
    }
    function qi(r, e) {
      kt = sr(), Be = So();
      var t = e === void 0 ? null : e;
      if (Be !== null) {
        var n = Be.memoizedState;
        if (n !== null && t !== null) {
          var o = n[1];
          if (el(t, o))
            return n[0];
        }
      }
      Jt = !0;
      var l = r();
      return Jt = !1, Be.memoizedState = [l, t], l;
    }
    function ol(r) {
      kt = sr(), Be = So();
      var e = Be.memoizedState;
      if (e === null) {
        var t = {
          current: r
        };
        return Object.seal(t), Be.memoizedState = t, t;
      } else
        return e;
    }
    function al(r, e) {
      Nn = "useLayoutEffect", A("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function il(r, e, t) {
      if (dn >= qA)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (r === kt) {
        Sa = !0;
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
    function Al(r, e) {
      return qi(function() {
        return r;
      }, e);
    }
    function ll(r, e, t) {
      return sr(), e(r._source);
    }
    function sl(r, e, t) {
      if (t === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return t();
    }
    function Ea(r) {
      return sr(), r;
    }
    function eA() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function gi() {
      return sr(), [!1, eA];
    }
    function tA() {
      var r = Wr, e = VA(r.treeContext), t = xo;
      if (t === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var n = Bt++;
      return Ut(t, e, n);
    }
    function Ca() {
    }
    var Da = {
      readContext: Ji,
      useContext: Ki,
      useMemo: qi,
      useReducer: $i,
      useRef: ol,
      useState: rl,
      useInsertionEffect: Ca,
      useLayoutEffect: al,
      useCallback: Al,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Ca,
      // Effects are not run in the server environment.
      useEffect: Ca,
      // Debugging effect
      useDebugValue: Ca,
      useDeferredValue: Ea,
      useTransition: gi,
      useId: tA,
      // Subscriptions are not setup in a server environment.
      useMutableSource: ll,
      useSyncExternalStore: sl
    }, xo = null;
    function Pa(r) {
      xo = r;
    }
    function Zr(r) {
      try {
        var e = "", t = r;
        do {
          switch (t.tag) {
            case 0:
              e += ar(t.type, null, null);
              break;
            case 1:
              e += ii(t.type, null, null);
              break;
            case 2:
              e += Ni(t.type, null, null);
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
    var ka = g.ReactCurrentDispatcher, Ba = g.ReactDebugCurrentFrame, Ta = 0, Gr = 1, mi = 2, ur = 3, nA = 4, ul = 0, _r = 1, Yr = 2, cl = 12800;
    function dl(r) {
      return console.error(r), null;
    }
    function cr() {
    }
    function Ia(r, e, t, n, o, l, d, p, D) {
      var R = [], W = /* @__PURE__ */ new Set(), Y = {
        destination: null,
        responseState: e,
        progressiveChunkSize: n === void 0 ? cl : n,
        status: ul,
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
        onError: o === void 0 ? dl : o,
        onAllReady: l === void 0 ? cr : l,
        onShellReady: d === void 0 ? cr : d,
        onShellError: p === void 0 ? cr : p,
        onFatalError: D === void 0 ? cr : D
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
      var ge = dr(Y, r, null, q, W, ua, ca, XA);
      return R.push(ge), Y;
    }
    function bn(r, e) {
      var t = r.pingedTasks;
      t.push(e), t.length === 1 && P(function() {
        return Bi(r);
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
    function dr(r, e, t, n, o, l, d, p) {
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
        treeContext: p
      };
      return D.componentStack = null, o.add(D), D;
    }
    function Eo(r, e, t, n, o, l) {
      return {
        status: Ta,
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
      return Sn === null || Sn.componentStack === null ? "" : Zr(Sn.componentStack);
    }
    function xn(r, e) {
      r.componentStack = {
        tag: 0,
        parent: r.componentStack,
        type: e
      };
    }
    function Ra(r, e) {
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
    function ko(r, e) {
      var t = r.onShellError;
      t(e);
      var n = r.onFatalError;
      n(e), r.destination !== null ? (r.status = Yr, K(r.destination, e)) : (r.status = _r, r.fatalError = e);
    }
    function rA(r, e, t) {
      xn(e, "Suspense");
      var n = e.blockedBoundary, o = e.blockedSegment, l = t.fallback, d = t.children, p = /* @__PURE__ */ new Set(), D = yi(r, p), R = o.chunks.length, W = Eo(
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
        if (Xr(r, e, d), ft(Y.chunks, r.responseState, Y.lastPushedText, Y.textEmbedded), Y.status = Gr, fr(D, Y), D.pendingTasks === 0) {
          Kt(e);
          return;
        }
      } catch (ge) {
        Y.status = nA, D.forceClientRender = !0, D.errorDigest = Po(r, ge), wi(D, ge);
      } finally {
        e.blockedBoundary = n, e.blockedSegment = o;
      }
      var q = dr(r, l, n, W, p, e.legacyContext, e.context, e.treeContext);
      q.componentStack = e.componentStack, r.pingedTasks.push(q), Kt(e);
    }
    function fl(r, e, t, n) {
      xn(e, t);
      var o = e.blockedSegment, l = tr(o.chunks, t, n, r.responseState, o.formatContext);
      o.lastPushedText = !1;
      var d = o.formatContext;
      o.formatContext = pn(d, t, n), Xr(r, e, l), o.formatContext = d, Ho(o.chunks, t), o.lastPushedText = !1, Kt(e);
    }
    function oA(r) {
      return r.prototype && r.prototype.isReactComponent;
    }
    function Bo(r, e, t, n, o) {
      var l = {};
      tl(e, l);
      var d = t(n, o);
      return nl(t, n, d, o);
    }
    function bi(r, e, t, n, o) {
      var l = t.render();
      t.props !== o && (Ci || A("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", He(n) || "a component"), Ci = !0);
      {
        var d = n.childContextTypes;
        if (d != null) {
          var p = e.legacyContext, D = Ai(t, n, p, d);
          e.legacyContext = D, vt(r, e, l), e.legacyContext = p;
          return;
        }
      }
      vt(r, e, l);
    }
    function aA(r, e, t, n) {
      Co(e, t);
      var o = jn(t, e.legacyContext), l = Vi(t, n, o);
      bo(l, t, n, o), bi(r, e, l, t, n), Kt(e);
    }
    var Si = {}, To = {}, xi = {}, Ei = {}, Ci = !1, iA = {}, AA = !1, Di = !1, lA = !1;
    function hl(r, e, t, n) {
      var o;
      if (o = jn(t, e.legacyContext), Ra(e, t), t.prototype && typeof t.prototype.render == "function") {
        var l = He(t) || "Unknown";
        Si[l] || (A("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", l, l), Si[l] = !0);
      }
      var d = Bo(r, e, t, n, o), p = xa();
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
      } else if (pl(t), p) {
        var W = e.treeContext, Y = 1, q = 0;
        e.treeContext = di(W, Y, q);
        try {
          vt(r, e, d);
        } finally {
          e.treeContext = W;
        }
      } else
        vt(r, e, d);
      Kt(e);
    }
    function pl(r) {
      {
        if (r && r.childContextTypes && A("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), r.defaultProps !== void 0) {
          var e = He(r) || "Unknown";
          iA[e] || (A("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", e), iA[e] = !0);
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
    function sA(r, e) {
      if (r && r.defaultProps) {
        var t = Pt({}, e), n = r.defaultProps;
        for (var o in n)
          t[o] === void 0 && (t[o] = n[o]);
        return t;
      }
      return e;
    }
    function vl(r, e, t, n, o) {
      Ra(e, t.render);
      var l = Bo(r, e, t.render, n, o), d = xa();
      if (d) {
        var p = e.treeContext, D = 1, R = 0;
        e.treeContext = di(p, D, R);
        try {
          vt(r, e, l);
        } finally {
          e.treeContext = p;
        }
      } else
        vt(r, e, l);
      Kt(e);
    }
    function Pi(r, e, t, n, o) {
      var l = t.type, d = sA(l, n);
      Ma(r, e, l, d, o);
    }
    function gl(r, e, t, n) {
      t._context === void 0 ? t !== t.Consumer && (lA || (lA = !0, A("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : t = t._context;
      var o = n.children;
      typeof o != "function" && A("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var l = Ur(t), d = o(l);
      vt(r, e, d);
    }
    function It(r, e, t, n) {
      var o = t._context, l = n.value, d = n.children, p;
      p = e.context, e.context = li(o, l), vt(r, e, d), e.context = ZA(o), p !== e.context && A("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function ml(r, e, t, n, o) {
      xn(e, "Lazy");
      var l = t._payload, d = t._init, p = d(l), D = sA(p, n);
      Ma(r, e, p, D, o), Kt(e);
    }
    function Ma(r, e, t, n, o) {
      if (typeof t == "function")
        if (oA(t)) {
          aA(r, e, t, n);
          return;
        } else {
          hl(r, e, t, n);
          return;
        }
      if (typeof t == "string") {
        fl(r, e, t, n);
        return;
      }
      switch (t) {
        case UA:
        case NA:
        case na:
        case ra:
        case ta: {
          vt(r, e, n.children);
          return;
        }
        case Va: {
          xn(e, "SuspenseList"), vt(r, e, n.children), Kt(e);
          return;
        }
        case ji:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Xa: {
          rA(r, e, n);
          return;
        }
      }
      if (typeof t == "object" && t !== null)
        switch (t.$$typeof) {
          case Lr: {
            vl(r, e, t, n, o);
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
            gl(r, e, t, n);
            return;
          }
          case oa: {
            ml(r, e, t, n);
            return;
          }
        }
      var l = "";
      throw (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (t == null ? t : typeof t) + "." + l));
    }
    function yl(r, e) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      r[Symbol.toStringTag] === "Generator" && (AA || A("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), AA = !0), r.entries === e && (Di || A("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Di = !0);
    }
    function vt(r, e, t) {
      try {
        return wl(r, e, t);
      } catch (n) {
        throw typeof n == "object" && n !== null && typeof n.then == "function" || (Do = Do !== null ? Do : fn()), n;
      }
    }
    function wl(r, e, t) {
      if (e.node = t, typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Oi: {
            var n = t, o = n.type, l = n.props, d = n.ref;
            Ma(r, e, o, l, d);
            return;
          }
          case ea:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case oa: {
            var p = t, D = p._payload, R = p._init, W;
            try {
              W = R(D);
            } catch (En) {
              throw typeof En == "object" && En !== null && typeof En.then == "function" && xn(e, "Lazy"), En;
            }
            vt(r, e, W);
            return;
          }
        }
        if (ct(t)) {
          uA(r, e, t);
          return;
        }
        var Y = lo(t);
        if (Y) {
          yl(t, Y);
          var q = Y.call(t);
          if (q) {
            var ge = q.next();
            if (!ge.done) {
              var Te = [];
              do
                Te.push(ge.value), ge = q.next();
              while (!ge.done);
              uA(r, e, Te);
              return;
            }
            return;
          }
        }
        var rt = Object.prototype.toString.call(t);
        throw new Error("Objects are not valid as a React child (found: " + (rt === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : rt) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof t == "string") {
        var hr = e.blockedSegment;
        hr.lastPushedText = $e(e.blockedSegment.chunks, t, r.responseState, hr.lastPushedText);
        return;
      }
      if (typeof t == "number") {
        var pr = e.blockedSegment;
        pr.lastPushedText = $e(e.blockedSegment.chunks, "" + t, r.responseState, pr.lastPushedText);
        return;
      }
      typeof t == "function" && A("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function uA(r, e, t) {
      for (var n = t.length, o = 0; o < n; o++) {
        var l = e.treeContext;
        e.treeContext = di(l, n, o);
        try {
          Xr(r, e, t[o]);
        } finally {
          e.treeContext = l;
        }
      }
    }
    function cA(r, e, t) {
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
      var d = dr(r, e.node, e.blockedBoundary, l, e.abortSet, e.legacyContext, e.context, e.treeContext);
      e.componentStack !== null && (d.componentStack = e.componentStack.parent);
      var p = d.ping;
      t.then(p, p);
    }
    function Xr(r, e, t) {
      var n = e.blockedSegment.formatContext, o = e.legacyContext, l = e.context, d = null;
      d = e.componentStack;
      try {
        return vt(r, e, t);
      } catch (p) {
        if (pi(), typeof p == "object" && p !== null && typeof p.then == "function") {
          cA(r, e, p), e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Ln(l), e.componentStack = d;
          return;
        } else
          throw e.blockedSegment.formatContext = n, e.legacyContext = o, e.context = l, Ln(l), e.componentStack = d, p;
      }
    }
    function dA(r, e, t, n) {
      var o = Po(r, n);
      if (e === null ? ko(r, n) : (e.pendingTasks--, e.forceClientRender || (e.forceClientRender = !0, e.errorDigest = o, wi(e, n), e.parentFlushed && r.clientRenderedBoundaries.push(e))), r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function bl(r) {
      var e = this, t = r.blockedBoundary, n = r.blockedSegment;
      n.status = ur, Io(e, t, n);
    }
    function ki(r, e, t) {
      var n = r.blockedBoundary, o = r.blockedSegment;
      if (o.status = ur, n === null)
        e.allPendingTasks--, e.status !== Yr && (e.status = Yr, e.destination !== null && L(e.destination));
      else {
        if (n.pendingTasks--, !n.forceClientRender) {
          n.forceClientRender = !0;
          var l = t === void 0 ? new Error("The render was aborted by the server without a reason.") : t;
          n.errorDigest = e.onError(l);
          {
            var d = "The server did not finish this Suspense boundary: ";
            l && typeof l.message == "string" ? l = d + l.message : l = d + String(l);
            var p = Sn;
            Sn = r;
            try {
              wi(n, l);
            } finally {
              Sn = p;
            }
          }
          n.parentFlushed && e.clientRenderedBoundaries.push(n);
        }
        if (n.fallbackAbortableTasks.forEach(function(R) {
          return ki(R, e, t);
        }), n.fallbackAbortableTasks.clear(), e.allPendingTasks--, e.allPendingTasks === 0) {
          var D = e.onAllReady;
          D();
        }
      }
    }
    function fr(r, e) {
      if (e.chunks.length === 0 && e.children.length === 1 && e.children[0].boundary === null) {
        var t = e.children[0];
        t.id = e.id, t.parentFlushed = !0, t.status === Gr && fr(r, t);
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
          r.onShellError = cr;
          var n = r.onShellReady;
          n();
        }
      } else if (e.pendingTasks--, !e.forceClientRender) {
        if (e.pendingTasks === 0)
          t.parentFlushed && t.status === Gr && fr(e, t), e.parentFlushed && r.completedBoundaries.push(e), e.fallbackAbortableTasks.forEach(bl, r), e.fallbackAbortableTasks.clear();
        else if (t.parentFlushed && t.status === Gr) {
          fr(e, t);
          var o = e.completedSegments;
          o.length === 1 && e.parentFlushed && r.partialBoundaries.push(e);
        }
      }
      if (r.allPendingTasks--, r.allPendingTasks === 0) {
        var l = r.onAllReady;
        l();
      }
    }
    function Sl(r, e) {
      var t = e.blockedSegment;
      if (t.status === Ta) {
        Ln(e.context);
        var n = null;
        n = Sn, Sn = e;
        try {
          vt(r, e, e.node), ft(t.chunks, r.responseState, t.lastPushedText, t.textEmbedded), e.abortSet.delete(e), t.status = Gr, Io(r, e.blockedBoundary, t);
        } catch (l) {
          if (pi(), typeof l == "object" && l !== null && typeof l.then == "function") {
            var o = e.ping;
            l.then(o, o);
          } else
            e.abortSet.delete(e), t.status = nA, dA(r, e.blockedBoundary, t, l);
        } finally {
          Sn = n;
        }
      }
    }
    function Bi(r) {
      if (r.status !== Yr) {
        var e = Gi(), t = ka.current;
        ka.current = Da;
        var n;
        n = Ba.getCurrentStack, Ba.getCurrentStack = fn;
        var o = xo;
        Pa(r.responseState);
        try {
          var l = r.pingedTasks, d;
          for (d = 0; d < l.length; d++) {
            var p = l[d];
            Sl(r, p);
          }
          l.splice(0, d), r.destination !== null && Ti(r, r.destination);
        } catch (D) {
          Po(r, D), ko(r, D);
        } finally {
          Pa(o), ka.current = t, Ba.getCurrentStack = n, t === Da && Ln(e);
        }
      }
    }
    function Ro(r, e, t) {
      switch (t.parentFlushed = !0, t.status) {
        case Ta: {
          var n = t.id = r.nextSegmentId++;
          return t.lastPushedText = !1, t.textEmbedded = !1, No(e, r.responseState, n);
        }
        case Gr: {
          t.status = mi;
          for (var o = !0, l = t.chunks, d = 0, p = t.children, D = 0; D < p.length; D++) {
            for (var R = p[D]; d < R.index; d++)
              B(e, l[d]);
            o = Qa(r, e, R);
          }
          for (; d < l.length - 1; d++)
            B(e, l[d]);
          return d < l.length && (o = Q(e, l[d])), o;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Qa(r, e, t) {
      var n = t.boundary;
      if (n === null)
        return Ro(r, e, t);
      if (n.parentFlushed = !0, n.forceClientRender)
        return ht(e, r.responseState, n.errorDigest, n.errorMessage, n.errorComponentStack), Ro(r, e, t), _a(e, r.responseState);
      if (n.pendingTasks > 0) {
        n.rootSegmentID = r.nextSegmentId++, n.completedSegments.length > 0 && r.partialBoundaries.push(n);
        var o = n.id = yt(r.responseState);
        return Rr(e, r.responseState, o), Ro(r, e, t), Mr(e, r.responseState);
      } else {
        if (n.byteSize > r.progressiveChunkSize)
          return n.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(n), Rr(e, r.responseState, n.id), Ro(r, e, t), Mr(e, r.responseState);
        Wo(e, r.responseState);
        var l = n.completedSegments;
        if (l.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var d = l[0];
        return Qa(r, e, d), Zo(e, r.responseState);
      }
    }
    function fA(r, e, t) {
      return HA(e, r.responseState, t.id, t.errorDigest, t.errorMessage, t.errorComponentStack);
    }
    function Oa(r, e, t) {
      return ye(e, r.responseState, t.formatContext, t.id), Qa(r, e, t), je(e, t.formatContext);
    }
    function hA(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        pA(r, e, t, l);
      }
      return n.length = 0, Mi(e, r.responseState, t.id, t.rootSegmentID);
    }
    function xl(r, e, t) {
      for (var n = t.completedSegments, o = 0; o < n.length; o++) {
        var l = n[o];
        if (!pA(r, e, t, l))
          return o++, n.splice(0, o), !1;
      }
      return n.splice(0, o), !0;
    }
    function pA(r, e, t, n) {
      if (n.status === mi)
        return !0;
      var o = n.id;
      if (o === -1) {
        var l = n.id = t.rootSegmentID;
        if (l === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Oa(r, e, n);
      } else
        return Oa(r, e, n), RA(e, r.responseState, o);
    }
    function Ti(r, e) {
      H();
      try {
        var t = r.completedRootSegment;
        t !== null && r.pendingRootTasks === 0 && (Qa(r, e, t), r.completedRootSegment = null, Wa(e, r.responseState));
        var n = r.clientRenderedBoundaries, o;
        for (o = 0; o < n.length; o++) {
          var l = n[o];
          fA(r, e, l);
        }
        n.splice(0, o);
        var d = r.completedBoundaries;
        for (o = 0; o < d.length; o++) {
          var p = d[o];
          hA(r, e, p);
        }
        d.splice(0, o), U(e), H(e);
        var D = r.partialBoundaries;
        for (o = 0; o < D.length; o++) {
          var R = D[o];
          if (!xl(r, e, R)) {
            r.destination = null, o++, D.splice(0, o);
            return;
          }
        }
        D.splice(0, o);
        var W = r.completedBoundaries;
        for (o = 0; o < W.length; o++) {
          var Y = W[o];
          hA(r, e, Y);
        }
        W.splice(0, o);
      } finally {
        U(e), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && A("There was still abortable task at the root when we closed. This is a bug in React."), L(e));
      }
    }
    function vA(r) {
      P(function() {
        return Bi(r);
      });
    }
    function El(r, e) {
      if (r.status === _r) {
        r.status = Yr, K(e, r.fatalError);
        return;
      }
      if (r.status !== Yr && r.destination === null) {
        r.destination = e;
        try {
          Ti(r, e);
        } catch (t) {
          Po(r, t), ko(r, t);
        }
      }
    }
    function gA(r, e) {
      try {
        var t = r.abortableTasks;
        t.forEach(function(n) {
          return ki(n, r, e);
        }), t.clear(), r.destination !== null && Ti(r, r.destination);
      } catch (n) {
        Po(r, n), ko(r, n);
      }
    }
    function Cl(r, e) {
      return new Promise(function(t, n) {
        var o, l, d = new Promise(function(q, ge) {
          l = q, o = ge;
        });
        function p() {
          var q = new ReadableStream(
            {
              type: "bytes",
              pull: function(ge) {
                El(R, ge);
              },
              cancel: function(ge) {
                gA(R);
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
        var R = Ia(r, Er(e ? e.identifierPrefix : void 0, e ? e.nonce : void 0, e ? e.bootstrapScriptContent : void 0, e ? e.bootstrapScripts : void 0, e ? e.bootstrapModules : void 0), An(e ? e.namespaceURI : void 0), e ? e.progressiveChunkSize : void 0, e ? e.onError : void 0, l, p, D, o);
        if (e && e.signal) {
          var W = e.signal, Y = function() {
            gA(R, W.reason), W.removeEventListener("abort", Y);
          };
          W.addEventListener("abort", Y);
        }
        vA(R);
      });
    }
    yA.renderToReadableStream = Cl, yA.version = c;
  }()), yA;
}
var jo, Tl;
Ml.env.NODE_ENV === "production" ? (jo = Ks(), Tl = $s()) : (jo = qs(), Tl = eu());
Fo.version = jo.version;
Fo.renderToString = jo.renderToString;
Fo.renderToStaticMarkup = jo.renderToStaticMarkup;
Fo.renderToNodeStream = jo.renderToNodeStream;
Fo.renderToStaticNodeStream = jo.renderToStaticNodeStream;
Fo.renderToReadableStream = Tl.renderToReadableStream;
const Je = {
  AUDIO_BUTTON: "audio-button",
  NOTIFICATION_BUTTON: "notification-button",
  CLOSE_CHAT_BUTTON: "close-chat-button",
  SEND_MESSAGE_BUTTON: "send-button",
  VOICE_MESSAGE_BUTTON: "voice-button",
  FILE_ATTACHMENT_BUTTON: "file-attachment-button",
  EMOJI_PICKER_BUTTON: "emoji-button"
}, tu = (f, c) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 32, height: 32, viewBox: "0 0 42 42", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 4
}, d: "M17 9a8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8 8 8 0 0 1 8 8Zm0 0", transform: "rotate(.086) scale(1.77778)" }), /* @__PURE__ */ k.createElement("path", { style: {
  fill: "none",
  strokeWidth: 2,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
  stroke: "#b00000",
  strokeOpacity: 1,
  strokeMiterlimit: 10
}, d: "M14.66 14.66 3.34 3.34", transform: "rotate(.086) scale(1.77778)" }));
k.forwardRef(tu);
const nu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZTojYjAwMDAwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NCIgZD0iTTE3IDlhOCA4IDAgMCAxLTggOCA4IDggMCAwIDEtOC04IDggOCAwIDAgMSA4LTggOCA4IDAgMCAxIDggOFptMCAwIiB0cmFuc2Zvcm09InJvdGF0ZSguMDg2KSBzY2FsZSgxLjc3Nzc4KSIvPjxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlOiNiMDAwMDA7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIgZD0iTTE0LjY2IDE0LjY2IDMuMzQgMy4zNCIgdHJhbnNmb3JtPSJyb3RhdGUoLjA4Nikgc2NhbGUoMS43Nzc3OCkiLz48L3N2Zz4=", ru = (f, c) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", viewBox: "0 0 1000 1000", ref: c, ...f }, /* @__PURE__ */ k.createElement("rect", { width: "100%", height: "100%", fill: "#fff" }), /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
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
}, transform: "rotate(90 -99 362) scale(3.4003)" }), /* @__PURE__ */ k.createElement("path", { d: "M0 75q14 0 14 17 0 16-14 16Z", style: {
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
}, transform: "rotate(180 106 386) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
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
}, transform: "rotate(90 -46 282) scale(3.4003)" }), /* @__PURE__ */ k.createElement("path", { d: "M19 65h4l5 4v1H14v-1Z", style: {
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
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
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
}, transform: "rotate(90 -3 240) scale(3.4003)" }), /* @__PURE__ */ k.createElement("circle", { r: 7.5, style: {
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
}, transform: "translate(236 175) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 45, height: 30, x: -22.5, y: -15, rx: 1.5, ry: 1.5, style: {
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
}, transform: "rotate(90 139 600) scale(3.4003)" }), /* @__PURE__ */ k.createElement("path", { d: "M184 75q14 0 14 17 0 16-14 16Z", style: {
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
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 25, height: 4, x: -12.5, y: -2, rx: 0.2, ry: 0.2, style: {
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
}, transform: "rotate(90 219 548) scale(3.4003)" }), /* @__PURE__ */ k.createElement("path", { d: "M175 65h4l5 4v1h-14v-1Z", style: {
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
}, transform: "translate(165 150) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 25, height: 2, x: -12.5, y: -1, rx: 0.1, ry: 0.1, style: {
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
}, transform: "rotate(90 262 505) scale(3.4003)" }), /* @__PURE__ */ k.createElement("circle", { r: 7.5, style: {
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
}, transform: "translate(767 175) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 116.7, height: 70, x: -58.4, y: -35, rx: 31.5, ry: 31.5, style: {
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
}, transform: "translate(502 877) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 60, height: 20, x: -30, y: -10, rx: 3, ry: 3, style: {
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
}, transform: "translate(502 728) scale(3.4003)" }), /* @__PURE__ */ k.createElement("circle", { r: 75, style: {
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
}, transform: "translate(502 473) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 129.4, height: 82.3, x: -64.7, y: -41.1, rx: 37, ry: 37, style: {
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
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 108, height: 68.6, x: -54, y: -34.3, rx: 30.9, ry: 30.9, style: {
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
}, transform: "translate(502 464) scale(3.4003)" }), /* @__PURE__ */ k.createElement("circle", { r: 19.4, style: {
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
}, transform: "translate(415 464) scale(3.4003)" }), /* @__PURE__ */ k.createElement("circle", { r: 19.4, style: {
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
}, transform: "translate(591 464) scale(3.4003)" }), /* @__PURE__ */ k.createElement("rect", { width: 96, height: 53.2, x: -48, y: -26.6, rx: 23.9, ry: 23.9, style: {
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
}, transform: "translate(503 875) scale(3.4003)" }), /* @__PURE__ */ k.createElement("path", { strokeLinecap: "round", d: "m68 215 7-15M81 222l-7-22M81 222l7-14M101 208H87M114 219l-7-24M113 219l13-22M131 214l-5-17M148 214h-18M69 214H51M100 209l7-15", style: {
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
k.forwardRef(ru);
const ql = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiLz48Zz48cmVjdCB3aWR0aD0iNDUiIGhlaWdodD0iMzAiIHg9Ii0yMi41IiB5PSItMTUiIHJ4PSIxLjUiIHJ5PSIxLjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzM3NTQ3YTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC05OSAzNjIpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTA2IDM4Nikgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSI0IiB4PSItMTIuNSIgeT0iLTIiIHJ4PSIuMiIgcnk9Ii4yIiBzdHlsZT0ic3Ryb2tlOiM0NjY0OGM7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAtNDYgMjgyKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE5IDY1aDRsNSA0djFIMTR2LTFaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM0NjY0OGM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjIiIHg9Ii0xMi41IiB5PSItMSIgcng9Ii4xIiByeT0iLjEiIHN0eWxlPSJzdHJva2U6Izk4YjBjYTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6Izk4YjBjYTtmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIC0zIDI0MCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNy41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzYgMTc1KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjQ1IiBoZWlnaHQ9IjMwIiB4PSItMjIuNSIgeT0iLTE1IiByeD0iMS41IiByeT0iMS41IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMzNzU0N2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzkgNjAwKSBzY2FsZSgzLjQwMDMpIi8+PHBhdGggZD0iTTE4NCA3NXExNCAwIDE0IDE3IDAgMTYtMTQgMTZaIiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9IjI1IiBoZWlnaHQ9IjQiIHg9Ii0xMi41IiB5PSItMiIgcng9Ii4yIiByeT0iLjIiIHN0eWxlPSJzdHJva2U6IzQ2NjQ4YztzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzQ2NjQ4YztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIxOSA1NDgpIHNjYWxlKDMuNDAwMykiLz48cGF0aCBkPSJNMTc1IDY1aDRsNSA0djFoLTE0di0xWiIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNDY2NDhjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1IDE1MCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIyNSIgaGVpZ2h0PSIyIiB4PSItMTIuNSIgeT0iLTEiIHJ4PSIuMSIgcnk9Ii4xIiBzdHlsZT0ic3Ryb2tlOiM5OGIwY2E7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiM5OGIwY2E7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAyNjIgNTA1KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSI3LjUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6I2E0NzhmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc2NyAxNzUpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTE2LjciIGhlaWdodD0iNzAiIHg9Ii01OC40IiB5PSItMzUiIHJ4PSIzMS41IiByeT0iMzEuNSIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojNzFjOWZjO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDg3Nykgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgeD0iLTMwIiB5PSItMTAiIHJ4PSIzIiByeT0iMyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMzc1NDdhO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDcyOCkgc2NhbGUoMy40MDAzKSIvPjxjaXJjbGUgcj0iNzUiIHN0eWxlPSJzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O2lzLWN1c3RvbS1mb250Om5vbmU7Zm9udC1maWxlLXVybDpub25lO2ZpbGw6IzcxYzlmYztmaWxsLXJ1bGU6bm9uemVybztvcGFjaXR5OjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMiA0NzMpIHNjYWxlKDMuNDAwMykiLz48cmVjdCB3aWR0aD0iMTI5LjQiIGhlaWdodD0iODIuMyIgeD0iLTY0LjciIHk9Ii00MS4xIiByeD0iMzciIHJ5PSIzNyIgc3R5bGU9InN0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojZmZmO2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAyIDQ2NCkgc2NhbGUoMy40MDAzKSIvPjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iNjguNiIgeD0iLTU0IiB5PSItMzQuMyIgcng9IjMwLjkiIHJ5PSIzMC45IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiMxNjIzMzQ7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDIgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTUgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PGNpcmNsZSByPSIxOS40IiBzdHlsZT0ic3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjE7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOiNhNDc4ZmM7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTEgNDY0KSBzY2FsZSgzLjQwMDMpIi8+PHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjUzLjIiIHg9Ii00OCIgeT0iLTI2LjYiIHJ4PSIyMy45IiByeT0iMjMuOSIgc3R5bGU9InN0cm9rZTojMTYyMzM0O3N0cm9rZS13aWR0aDoxO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7aXMtY3VzdG9tLWZvbnQ6bm9uZTtmb250LWZpbGUtdXJsOm5vbmU7ZmlsbDojMTYyMzM0O2ZpbGwtcnVsZTpub256ZXJvO29wYWNpdHk6MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAzIDg3NSkgc2NhbGUoMy40MDAzKSIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0ibTY4IDIxNSA3LTE1TTgxIDIyMmwtNy0yMk04MSAyMjJsNy0xNE0xMDEgMjA4SDg3TTExNCAyMTlsLTctMjRNMTEzIDIxOWwxMy0yMk0xMzEgMjE0bC01LTE3TTE0OCAyMTRoLTE4TTY5IDIxNEg1MU0xMDAgMjA5bDctMTUiIHN0eWxlPSJzdHJva2U6I2E0NzhmYztzdHJva2Utd2lkdGg6MztzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtpcy1jdXN0b20tZm9udDpub25lO2ZvbnQtZmlsZS11cmw6bm9uZTtmaWxsOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87b3BhY2l0eToxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjUgMTUwKSBzY2FsZSgzLjQwMDMpIi8+PC9nPjwvc3ZnPg==", ou = (f, c) => /* @__PURE__ */ k.createElement("svg", { width: 140, height: 140, xmlns: "http://www.w3.org/2000/svg", ref: c, ...f }, /* @__PURE__ */ k.createElement("circle", { cy: 60.044, cx: 70, fill: "#5c5c5c", r: 29 }), /* @__PURE__ */ k.createElement("path", { d: "m16.36 156.186-.01-30.5c-.005-16.844 24.168-30.507 53.991-30.516 29.823-.009 54.004 13.64 54.01 30.484l.008 30.5-108 .032z", fill: "#5c5c5c" }));
k.forwardRef(ou);
const au = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN5PSI2MC4wNDQiIGN4PSI3MCIgZmlsbD0iIzVjNWM1YyIgcj0iMjkiLz48cGF0aCBkPSJtMTYuMzYgMTU2LjE4Ni0uMDEtMzAuNWMtLjAwNS0xNi44NDQgMjQuMTY4LTMwLjUwNyA1My45OTEtMzAuNTE2IDI5LjgyMy0uMDA5IDU0LjAwNCAxMy42NCA1NC4wMSAzMC40ODRsLjAwOCAzMC41LTEwOCAuMDMyeiIgZmlsbD0iIzVjNWM1YyIvPjwvc3ZnPg==", iu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 0 637 637", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "m478 113-13 2-4 1h4l14-2c10-2 35-2 42-1l6 3 3 1c3 0-4-3-8-5-7-1-34-1-44 1m56 6 8 6c7 5 20 17 20 19s7 12 8 12l-3-6-4-6c0-3-15-17-25-24-5-3-8-4-4-1m-198 16-9 1a512 512 0 0 1 9-1m-180 30a412 412 0 0 0-23 4 167 167 0 0 0-32 8 439 439 0 0 1 46-9 304 304 0 0 1 11-2l6-1h-8m369 8 4 3-7-6c-1 0 0 2 3 3m-439 9c-7 3-18 13-18 15l6-5c5-5 9-8 14-10l6-4-8 4m442 12-10 11-7 6 7-6c7-5 14-14 13-16l-3 5M65 205l-1 11c0 9 0 10 4 17 5 10 7 12 22 11 10 0 15 0 38-5l5-1-6 1-16 2-21 2c-13 1-16-1-21-10-3-5-4-6-4-15l1-12c1-4 1-5-1-1m335 1c3 0 3 1 3 3l-2 6c-2 5-35 39-76 80-53 51-120 117-138 137-21 24-22 25-22 27 0 3 6 9 9 9 4 0 14-8 38-27a5073 5073 0 0 1 15-16 1421 1421 0 0 0-17 15l-31 25-6 2-4-3c-3-3-3-4-2-6 3-8 79-85 160-163 57-57 79-80 79-86 0-2-3-4-7-4-2 0-2 0 1 1m165 18c-9 17-25 32-57 53l-10 8 16-11 12-8c15-10 27-22 39-39 5-7 6-8 4-8l-4 5m-221 2a199 199 0 0 0-19 10 183 183 0 0 1 27-12c0-1-1-1-8 2m-34 16c-3 3-2 3 2 0l1-2-3 2m151 3-1 2 2-2c3-3 2-3-1 0m-16 12-11 10a281 281 0 0 0 11-10m-24 18-7 5-7 5-42 31c-10 7-24 19-22 19l7-6 16-12a343 343 0 0 0 35-25 573 573 0 0 0 20-17m-187 0-2 2 4-2 3-2-5 2m-14 6-3 2 4-1 4-3-5 2m-7 3-8 4-18 8 18-7 7-3 3-1c1-2 0-2-2-1m254 24a2672 2672 0 0 1-71 54 601 601 0 0 0 39-29 1352 1352 0 0 1 32-25m-291-8-2 2 4-2 3-2-5 2m-13 5-2 2h3c5-3 4-4-1-2m-19 9-7 3-13 6c-10 5-13 7-14 10-3 4-2 5 1 0 2-3 5-5 14-9l13-6 12-6-6 2m178 36c-17 12-21 16-21 17a390 390 0 0 1 20-17m-206 34 1 4 1 3 1 5 2 8 1 5v-6l-1-8-2-5-1-4-1-2c-1-2-1-2-1 0m222 23-9 7a683 683 0 0 0-56 44 261 261 0 0 0-26 20 1345 1345 0 0 0-46 34c-6 3-7 3-19 3-11 0-12 0-18-3-8-4-10-8-17-20l-5-10 4 10c5 10 12 18 19 22 4 2 6 2 17 2 13 0 14 0 21-3l26-19 42-33a2183 2183 0 0 0 43-34 643 643 0 0 1 24-20", fill: "#fff", fillRule: "evenodd" }), /* @__PURE__ */ k.createElement("path", { d: "M478 114a620 620 0 0 1-39 6l-21 3a5481 5481 0 0 0-19 3 870 870 0 0 1-54 8l-1 1-6 1-12 2-13 2a992 992 0 0 0-76 12 400 400 0 0 1-45 8l-6 1-5 1h-3l-3 1-2 1-26 4-13 2-17 3c-23 5-33 9-43 19-7 8-9 13-9 27 0 8 1 9 4 14 5 9 8 11 21 10l21-2a1133 1133 0 0 1 23-4 659 659 0 0 0 74-14l3-1h3l3-1h3l2-1 2-1h3l2-1h2l24-5 38-7a2100 2100 0 0 1 93-18l3-1 10-1a2082 2082 0 0 1 120-17l2 1c2 0 8 5 8 7l1 2 1 6c0 4 0 6-3 10-2 4-16 16-18 16l-7 5-10 8a1070 1070 0 0 0-11 7 113 113 0 0 1-20 14l-2 2-3 2-2 2h-1a154 154 0 0 1-28 21l-5 4-5 4a573 573 0 0 1-50 37 175 175 0 0 0-24 18l-1 2-2 1-2 1-2 1-1 1-12 10a396 396 0 0 0-32 25l-8 6-6 5-9 7a326 326 0 0 1-25 20l-13 12a5073 5073 0 0 0-17 15c-24 20-34 27-39 27-2 0-8-6-8-9 0-2 1-3 22-27 18-20 85-86 138-137 41-41 74-75 76-80l2-6c0-2 0-3-2-3l-7 1a233 233 0 0 1-26 9l-1 1-1 1h-1l-1 1h-2l-3 2-1 1h-2l-3 2h-1l-5 2-22 10-9 4-4 2-5 2-10 4-2 1-2 1-2 1-13 6a334 334 0 0 1-38 17 75 75 0 0 0-14 6l-5 2-4 1-2 1-3 2-7 3-16 6a247 247 0 0 0-32 14l-1 1h-2l-1 1h-2l-1 1-12 6a103 103 0 0 0-27 15l-2 5-1 1v11l1 5 1 5 1 4c0 3 0 4 2 4v3l1 3 1 2 2 10 1 4 1 5 2 10 2 8 1 4 1 4c3 3 9 25 11 38l1 7v2l1 4v1l1 1v2l1 2 1 3v1l5 10c7 13 9 16 17 20 6 3 7 3 18 3 12 0 13 0 19-3 8-4 11-6 26-18a1345 1345 0 0 1 85-67 683 683 0 0 1 50-39l12-9a513 513 0 0 1 44-33 201 201 0 0 0 22-17 2270 2270 0 0 0 73-54 158 158 0 0 0 58-59c2 0 3-9 4-27l-1-19-1-4-1-6-1-3-4-6-4-6c0-2-6-8-13-14a77 77 0 0 0-28-18c-6-1-34-1-43 1" })), es = k.forwardRef(iu), Au = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M765-321q0 117-84 196-83 80-200 80-118 0-200-80t-83-196v-392q0-85 61-144 61-58 146-58 86 0 147 58 61 59 61 144v374q0 54-39 92-39 37-93 37-55 0-93-37-38-38-38-92v-372h110v372q0 9 6 14t15 5q8 0 15-5t7-14v-374q0-39-29-66t-68-27q-40 0-69 27t-29 66v392q0 71 51 119t122 48q71 0 122-48t51-119v-426h111v426Z" })), ts = k.forwardRef(Au), lu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M125-165v-113h77v-273q0-93 55-167 56-75 146-100v-19q0-32 22-55 23-23 55-23t55 23q22 23 22 55v19q90 25 146 99 56 73 56 168v273h77v113H125ZM480-32q-38 0-66-27-27-27-27-66h186q0 39-27 66t-66 27Z" })), su = k.forwardRef(lu), uu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M137-190v-113h78v-253q0-41 11-79 11-39 35-71l-9 150h10L17-802l74-74L873-92l-74 74-175-172H137Zm609-149L319-769q20-15 41-25t44-16v-28q0-32 22-54t54-22q32 0 55 22t22 54v28q85 23 137 94t52 160v217ZM481-47q-38 0-65-27t-27-65h184q0 38-27 65t-65 27Z" })), cu = k.forwardRef(uu), du = (f, c) => /* @__PURE__ */ k.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", ref: c, ...f }, /* @__PURE__ */ k.createElement("g", { strokeLinecap: "round", strokeWidth: 10 }, /* @__PURE__ */ k.createElement("path", { d: "m19 19 61 61M80 19 19 80" }))), fu = k.forwardRef(du), hu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M94-136v-255l351-93-351-92v-253l816 346L94-136Z" })), pu = k.forwardRef(hu), vu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M480-372q-61 0-105-43-43-43-43-105v-240q0-61 43-105 43-43 105-43 61 0 105 43 43 44 43 105v240q0 62-43 105t-105 43ZM425-76v-122q-121-16-197-108t-76-214h109q0 91 64 154t155 63q91 0 155-63t64-154h109q0 122-77 214T534-198v122H425Z" })), gu = k.forwardRef(vu), mu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "m763-343-80-79q8-20 13-44 5-23 5-54h109q0 49-11 95t-36 82ZM625-482 336-770v-2q3-56 45-96t101-40q62 0 105 43t43 105v249l-1 17q-1 7-4 12ZM427-76v-122q-120-16-196-108-77-92-77-214h109q0 91 64 154t155 63q43 0 80-14 37-15 67-41l78 79q-35 32-78 53t-93 28v122H427Zm362 27L41-796l75-75 748 748-75 74Z" })), yu = k.forwardRef(mu), wu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M625-511q29 0 50-21t20-50q0-29-20-50-21-20-50-20t-50 20-20 50q0 29 20 50 21 21 50 21Zm-290 0q29 0 50-21t20-49q0-30-20-50t-50-21q-29 0-50 20-20 21-20 50 0 30 20 50 21 21 50 21Zm145 268q75 0 137-43t85-115H258q24 72 85 115 62 43 137 43Zm0 198q-90 0-170-34-79-34-138-93T79-310q-34-80-34-170t34-170q34-79 93-138t138-93q80-34 170-34t170 34q79 34 138 93t93 138q34 80 34 170t-34 170q-34 79-93 138T650-79q-80 34-170 34Zm0-435Zm0 322q134 0 228-94t94-228q0-134-94-228t-228-94q-134 0-228 94t-94 228q0 134 94 228t228 94Z" })), ns = k.forwardRef(wu), bu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M553-64v-108q107-27 173-113 67-87 67-197 0-109-67-195T553-789v-108q152 26 249 144 97 117 97 271 0 155-97 273T553-64ZM61-335v-290h176l236-237v764L237-335H61Zm492 28v-346q51 23 82 70t31 103-31 103q-31 47-82 70Z" })), Su = k.forwardRef(bu), xu = (f, c) => /* @__PURE__ */ k.createElement("svg", { viewBox: "0 -960 960 960", ref: c, ...f }, /* @__PURE__ */ k.createElement("path", { d: "M807-15 700-123q-33 21-71 37-38 15-80 22v-108q20-4 38-12l35-17-153-154v257L234-335H57v-290h144L10-818l74-75L882-90l-75 75Zm37-264-80-79q13-30 19-60 7-31 7-64 0-109-68-195-67-86-173-112v-108q152 26 249 144 98 117 98 271 0 55-14 107-13 51-38 96ZM661-462 549-575v-78q51 23 83 70 31 47 31 103l-1 9-1 9ZM469-655 366-759l103-103v207Z" })), Eu = k.forwardRef(xu), Cu = "data:audio/wav;base64,UklGRmaIAABXQVZFZm10IBAAAAABAAIAQB8AAAB9AAAEABAATElTVBoAAABJTkZPSVNGVA4AAABMYXZmNjAuMTYuMTAwAGRhdGEgiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAA//////7/////////AAABAAAAAgABAAEAAQAAAAIAAQABAP//AAD+////AAD+//7////+////AAD//wAA/v8AAAAA/v8AAP//AAAAAAAAAgD////////+////AAABAAEAAgD/////AQABAAAA//8CAP//AAAAAAAA/v8AAAAA//8AAAEA//8EAAAAAAAAAAAA//8BAP//AQABAAEA/////wEA/v///wAAAAACAAAAAAABAAAA//8AAP//AAACAP//////////AAAAAAEAAAAAAAEA//8AAAEAAQADAAIAAgAAAAAA/v///wEAAAAAAAEAAAAAAAEA//8AAAEAAQD//wAA//8AAAEAAAABAAEAAAABAP//AAD//wAAAgAAAP//AQD/////AAAAAP7/AgAAAAIAAAAAAAAAAAABAAAAAQABAP//AAABAP///v8AAP////8AAP//AAD//wAA//8BAP//AAD///7///8BAP7///8AAAIAAgABAAEA/v8AAP//AQADAAEAAAACAAEA/////////v///wEA/v////7/AAD+////AAAAAAAAAgAAAAAAAAD//wEAAAAAAAAAAQABAAIA/v8AAAAA//8AAAEAAAAAAP//AgD//wEA/////wAAAQACAAAAAAAAAP//AQD/////AQAAAAEA/v8AAAEAAQABAAEA///+////AQD//wEAAgD+//7/AAAAAAAAAQAAAAAAAQAAAAAAAAAAAP//AAD//wEAAQD//wAAAQABAP7///8AAP7/AAABAP7/AQABAAEAAAABAAEAAAD+/wIAAAABAAAAAQD/////AQACAP////8AAP//AQD//wEA/v8CAAEAAAAAAAAAAQAAAAIAAQAAAAEAAgD//wEAAAAAAP7///8BAP//AgAAAP///v8CAAAAAgD///////////7/AAACAAEAAgD//wAAAAABAP//AwAAAAMA//8AAAAAAQD+/wAAAAD//wAAAQD//wEA//8BAP7/AAABAAAA//8BAAAA//8AAP//AQADAP3////+////AgD+/////v8BAAEAAQACAAAAAAAAAAAA//8AAP//AAD+/wEA/v8AAP7/AAD//wAAAQACAAAAAQAAAP//AQAAAAAAAAABAAAAAAD+//////8AAAAAAAD//wAAAAABAAEA//8AAAEA//8AAP//AgD+/wAA///+/wAA/v///wAAAQABAAAAAQD//wAA//8AAAEA//8BAAAAAgABAP//AAACAAIAAQABAP//AAAAAAAA//8BAAIAAAABAAAA//8CAAEA/v//////AAAAAAEA////////AQAAAP//AAD//wAAAAAAAP3/AAAAAAEAAAACAAAAAAAAAP//AAD//wAAAAAAAAAAAAAAAP///v///wAAAAABAAAAAAD//wEAAAABAAEAAQD//wAAAAACAAAAAQD+/wAA//8BAAEAAAD+/wAA/////wAAAAABAAAAAAD//////v8AAAAA//8AAAAAAAAAAAIAAAABAAEAAAABAP7/AAD9//////////7///8BAP//AAD///3/AQABAP//AAD//wAAAAABAAAA//8AAP//AAD/////AQABAAEA//8AAAAA//8BAAMA//8AAAAA//8AAP7/AAD//wAAAAAAAP7/AQAAAAAA/v8CAP//AAABAAIAAQABAAAA//8BAAEAAQD///7/AQD//wAAAQABAP//AAD//wEAAAAAAAAAAQAAAAIA//8AAP////8AAP//AQD//////v///wEA/v8AAAIAAgACAAEAAAAAAAEAAAAAAAAAAAAAAAAAAQD//wAA/////wAAAQACAP////8AAAAAAAD//wAAAQD+/wEA//8AAAEAAwD//wEAAQAAAAAAAAABAP////8AAAAAAQAAAAAAAAAAAAEAAQAAAP////////7/AQABAAEAAQD///////8BAAAA//8AAAAAAgABAAEA/v8BAP7///8BAP3/AQABAAIAAAD//wEAAAAAAP//AAABAAIA//8CAAAAAQAAAAEA//8BAAAA/////wAAAAD//wEAAQD//wAAAAAAAP//AAAAAAAAAQABAAAAAQAAAP//AQD//////v8AAAEAAAAAAAAA//8AAAAAAAACAAEAAQAAAP//AAABAAEA/////wAAAgABAAAAAAAAAAEAAAABAP//AQABAP7////+/wEAAAAAAP//AAABAAAAAAABAAEAAAAAAAAA//8BAP///f/+/wEAAQD///7///8AAAAAAQAAAP////8AAAAAAAABAAAAAQD/////AAD//wEA//8AAAIA//8CAAAA//8AAAAAAAD+/wEAAAD+/wAA/////wAA////////AAAAAAAA//8BAAAAAAD//wAAAAD//wEA//8AAP//AQD+/wAAAAAAAP7/AAD+/wEAAQABAP//AAABAAEAAQD//wAA/////wEA//8AAAAAAgAAAAAA//8BAAAAAgAAAAAAAAAAAP7/AQD//wAAAAD+/wAAAAADAAIA/////wAAAQD//wIA//8BAAEA/v8AAAIAAAAAAP3///8AAAAAAAAAAAAAAAABAP///////wAA//8AAAEAAQABAAEAAQABAAAAAQAAAAAAAQABAP7/AQD//wAAAQABAAEA//8BAAAAAgAAAAEAAAABAP//AAD/////AAD//wIA/////wIAAAD///7/AAAAAAAAAAACAP//AAABAP////8AAAAAAAABAAAAAgAAAAAAAQD+/wEA/////wAA/////wAAAAAAAAAA/v//////AAAAAP//AAABAAAAAQAAAAIAAAACAAAA//8AAAAA//8AAP7/AAAAAP//AAACAP//AQABAP//AQABAAAA/////////v8AAP//AQAAAAAA///+/wAAAQD+/wEAAQAAAAEA/////wAAAQD//wAA//8AAAAA/v8BAAEA//8AAP7//v8BAAAAAAAAAAEA//8AAAEA/////wAAAAD//////////wEAAAABAAEA//8CAAEA/f8AAAAA//8BAAAABAABAAEAAQAAAAAAAAAAAP7///8AAAAA/v8BAAAA//8AAAIA//8AAP////8BAP//AAAAAAAAAAD/////AQD///7/////////AQD8////AgABAAIA////////AAD//wAAAAABAAAAAAAAAAEAAgAAAP//AQD//wAAAAAAAP/////+/wAAAAABAAAAAwABAP///////wEAAAADAP//AQACAAAA//8CAAEAAAAAAP///////wIAAAAAAAAAAQAAAAAAAgD//wEAAAABAAAA/v8AAAAAAAAAAAAAAAAAAAEA/v8AAP//AQD//wAA//////7///8AAAAAAAAAAP7/AQD//wAA//8AAAEAAAABAAEAAQD/////AAD//wEAAAD/////AQAAAAEAAAD//wEAAAD/////AgD//wAAAQD//////////wAAAAD//wAAAAABAAAAAAD//wAAAQD///7/AQD//wEAAAD/////AAD//wEA//8AAAEA//8CAAAAAQD//wEAAgAAAAEAAwAAAAAA/v8BAAEAAgD//wEAAAAAAAAAAAD//wEA//8AAAAAAQACAP///////wAAAQABAAEAAAAAAAEAAQD+/wEA/f////////8AAAAA//8AAAEA//8BAAAA/v///wEAAAAAAAEA/////wAAAAAAAP//AAAAAAIAAAABAAAA/////wAAAAD//wAA/v8AAAMAAQD+/wEAAAABAAEA//8BAP//AgAAAAAAAAD//wAA/////wEA/v8CAP3/AAACAP3/AQABAAAAAQACAAEA/v8AAAAA//8BAAAAAgAAAAAAAgACAAEA/v/9/wAAAQABAP7///8AAP//AgD+/////v8CAP////8BAP//AQACAAEAAQABAP//AAD///7/AAABAAEAAgD//wEA//8CAAEAAQABAAEAAAABAAAA/v8AAAEA/v8AAP//AAABAP//AQAAAAEAAgAAAAAA/v///wEAAQAAAAIAAAD/////AgAAAAEA/v8AAP7/AQAAAAAAAQAAAAEAAAACAAEA//8BAP////8AAAIAAAAAAP//AAAAAAIAAAAAAAAAAwABAP///v8BAAAAAAAAAP3/AAABAAEA/v////////////3//v8AAAAAAQABAAIAAAD+/////v8AAAAAAQABAAEAAQAAAP//AAAAAP//AQAAAP//AAABAAAAAAAAAAAA////////AAAAAP//AQD/////AAABAAEA//8CAP7///8AAP7//v8BAAEAAAD+/////////wEAAAAAAAAAAgD//wAAAQAAAP7/AQABAP//AQAAAAAAAAD/////AAACAP////8BAAAAAAD//wAA//8AAAEAAQABAAAAAAABAAAAAQD+/wEA/v8AAAEAAQD/////AAD//wAAAQABAP7//v//////AAACAAAAAAAAAAAAAAACAAAAAQAAAAAA//8BAP//AQD//wAA///+/wIAAQD//wAAAAD//wAA/v8AAP3///8AAAAAAAAAAAAA/f8AAAAA//8CAP7/AAD///7/AAAAAAAAAAD//wEAAAAAAAEAAAAAAAAA//8BAP////8BAP7///8CAAEA//8BAP3///////////8BAAAAAAAAAAEAAgD+//////8BAAMAAQADAAEAAAACAAAAAQD/////AAABAAMAAQAAAP//AQD//wAA//8AAAAA//8CAP7//////wAAAAAAAAIA/v8AAP//AAACAP//AwD//wAA//8AAP//AwD//wEAAQABAAEAAQACAAEAAAD//wAA//8AAAIAAAAAAP///////wAAAQD//wIA//8BAP7/AAD///////8AAAAAAAAAAAEAAAD//wAAAQD//wEA//8BAAAAAAD/////AgABAAIAAAABAAAAAAAAAP//AAAAAAAA//8AAAAAAAD/////AQAAAAAAAQD//wAA///+////AAAAAAEAAgABAAEAAAAAAP//AQAAAAAAAQD+/wAAAAABAAEAAAD/////AQABAP7///8AAAIAAAACAAAA//8AAP//AgACAAAA///+/wAAAAABAAAAAQAAAAEA/v8BAAEA//8CAP//AQD+/////v8AAAAAAAACAP//AAD+/wIA/v8BAAAAAAD/////AAAAAP7///8AAP7//////wEAAAABAAAAAAD//wAAAAAAAAAAAgACAAAAAAABAAAA/f8AAP7/AgAAAAEA//8BAAAAAAD///7/AQD//wAAAAAAAAEAAAAAAAEAAAAAAAAAAQAAAAAA//8AAAAAAAABAP///////wAAAgABAAEA//8AAP//AAACAP//AQABAAEA//8BAAAAAAABAAAA//8AAAEAAAAAAAIA/v8BAP//AQD//wEAAAABAAEAAQACAAEAAAAAAAEAAAABAAAAAAD/////AAABAAEA//8AAAAAAQABAP//AAAAAP//AAD/////AQD//wAAAAABAAEA//8BAAAA//8AAP///f/+/wAA/////wAAAQAAAAIAAAAAAAAAAAD+/wEA/f8CAAAA//8AAAEAAgAAAAMAAAABAAAAAAAAAP//AQAAAAAAAQABAAAAAQAAAP//AAAAAAAA//8AAAAAAAABAAAAAQAAAAAAAAABAAIAAAAAAP7/AQD//wAAAAD+////AAAAAAAAAAABAAAA/////wAA//8AAAAAAAD/////AgD//wAA//8CAP//AQACAAEA/f////////8BAAIAAQABAP//AAD//wAA///+////AAD+/wAAAQD/////AAAAAAAA/////wAAAAABAAAAAQAAAAAA//8AAAIAAAABAP//AQABAAEA//8AAAAAAAADAAEAAAABAP//AgD//wMA//8AAAAAAAD//wAAAAD9/wEA///+/wAA//8BAAEA//8BAAAA//8AAP///v8BAP///////////v8BAAAAAQABAAAAAAAAAAAA//8AAP7/AQAAAAAAAAAAAP7/AQAAAAAAAgABAAEAAAABAAEAAAAAAAAAAAD+/wAAAAD//wEAAAAAAAAAAAAAAP//AgABAAAAAAABAAEAAAD/////AAAAAP//AAABAP////8BAAAAAQABAP7//v/+////AQAAAAAAAQAAAAEAAgAAAAAAAQAAAAEAAAD+/////v8BAP//AAABAP//AQABAAAAAAD//wAA//8CAP//AAAAAAEAAAABAAAAAAAAAP//AAD+////AwAAAAAAAQD//wEAAAACAAEAAAADAAAAAAD/////AAAAAAEAAAABAAAA//8AAAEA//8BAP///v8AAP//AAD//wAAAQABAP//AQAAAAAA/////wEAAQAAAP////8AAAEA//8BAAAAAQAAAP////8AAAAAAQAAAAIAAQAAAAEAAAAAAAEAAAD//wEAAAAAAP////8AAAAA//8BAAEAAAAAAAIA///+/wIA/v8BAAAAAQACAAAAAQAAAP7///8AAP//AAAAAAEAAAAAAP7/AAD+////AAAAAAAAAAD//wAA/v8BAAMAAAABAAIAAgD//wAA//8BAAEA//8BAP7/AAAAAP7///8BAAAAAQAAAP7/AQD/////AAAAAAEAAAABAP//AQABAAAAAgABAAAAAAAAAP///////wEA//8AAAEA//8AAAAAAQAAAAIAAAABAP7//////wAAAQABAAAAAAABAAEA///+/wAA//8BAP///v8AAP///v8BAAAA//8CAAAAAQAAAAEAAQABAAAAAAD+/wAAAAD+/wAAAAAAAAAA/f////////8AAAAAAQABAP///////wEA//8BAAEAAAAAAAAA/////wEA/v//////AAAAAP//AAABAAAAAAD+/wAAAAD9////AQAAAAEAAwD//wEAAQAAAP//AgAAAAAAAAD+/wIAAAAAAAAAAAAAAAIA//8AAAEAAQACAAAAAQD//wAAAAD//wIAAQABAAAAAAD//wEA//8BAAEAAQAAAAAAAQABAP7/AAD//wEAAAACAP7/AQAAAAAAAAD//wIAAQACAAIAAQAAAAAAAAAAAP3///8BAAAAAQACAP//AgD9/wAAAAD//wEA/v////////8AAAAAAAD//wEAAQD//wMAAQAAAAEA//8AAAEA//8AAAAAAAACAAAAAAD//wAAAQD///////8AAAAA//8BAAIA/v8BAAEA/f8AAAAAAAAAAAAAAgD/////AAD+/wAAAAD//wAAAAAAAP//////////AgABAP///v8AAAIAAQAAAP//AAABAAAA/////wAAAAAAAAEAAAABAP///v///wIA//8BAAEAAQAAAAAA///+/wEAAAAAAAAA/////////v8BAP3/AAAAAAAAAAAAAAAA//8AAP//AAAAAP//AAABAAIAAAACAP////8DAAAAAAABAAAAAwABAP//AAABAP//AAAAAP////8BAAAAAgD//wAA///+/wAAAQD//wAA//8AAP7///8AAAAA/v8AAAAAAQD//wEA/v////////8AAAAAAQAAAP//AQACAAAAAAAAAP//AAD//wAAAAD//wAAAAD+/wAAAAAAAP//AQD//wAAAgAAAAAAAQABAAAAAwD+/wAAAAD///7/AQD//wIAAQAAAP//AAD//wAA//8CAAEAAAAAAAAA/////wAAAAD//wEAAQD///////8BAAAA//8BAAEAAAAAAAAA/v///wEAAAAAAAAAAAADAAAAAAAAAAAAAQABAAEAAAD+//7//v8AAP//AQAAAAAAAAABAAEAAgAAAAAAAQD//wAA/f8AAAAAAAABAAAAAQAAAAAAAAAAAAIA//8BAP///////wIA/////wAAAAABAAEA//8BAAAAAAD//wAAAQD//wEAAAAAAAIA/v8BAP//AAAAAAEAAAABAP//AAAAAAAAAQABAP7/AAABAAAAAQD//wIAAAAAAAEA///+/wAA//8AAP//AAAAAAAAAAABAP///////wIAAQAAAAEAAQAAAP7/AQAAAAAAAQAAAAAAAQD/////AQAAAAAA///+//7/AAD+/wEA//8AAAAA///+/wEAAAABAAIAAQABAAAA//8AAP//AAD//wAAAAD//wAAAAAAAP//AQAAAAAA////////AQAAAAAAAQD+////AQABAP7/AAD///7/AgD//wAAAAAAAP//AAAAAAEA//8BAAEAAgAAAAIAAAD//wEA/////wAAAQD///7/AQD//wEAAQD/////AAAAAAEAAgAAAAAAAQD//wEA//8AAP7//////wAA//8BAAEA//8BAAAAAQD/////AAABAP//AAACAP//AQAAAP//AAABAP////8AAAAAAAABAAEAAwABAAAAAgD//wAAAAD//wEAAAABAAAAAAABAAEA/////wAA//8AAAIAAAAAAAEAAQABAAEAAQABAP//AgAAAAAA//8BAP3//v///wAA//8AAAAAAQAAAP//AQD//wEAAAACAAIAAAABAAAA//8BAAEA//8BAP//AAAAAP//AQAAAAIAAAD//wAAAAAAAAEA////////AQAAAP//AQD//wAAAQD+/wEAAAABAP///v///wAAAAAAAP//AAAAAAIAAQD//wAAAgD+/wAAAAD//wAAAAABAP///P//////AAACAP////8AAAIAAAABAAAAAAAAAAAA//8AAAAAAQADAP//AQAAAAAAAAABAAEAAQAAAAAA/v8AAAAAAAD//wAAAQD//wAAAAD//wAA/v////////8CAAEA/v8BAP7/AAAAAAAA//8AAAEAAAD//wIAAQAAAAIAAQAAAAAAAAD///7/AQABAP//AAAAAP//AAACAAEA//8BAAAAAwAAAAAAAAD//wEAAAD//wAA///////////+/wAAAQABAAIAAAABAAEAAAD//wEAAAD/////AAD+/wIAAwABAAEA/v8BAAEAAAD//wAA//8AAP//AAAAAAEAAAAAAP//AAAAAAEAAQABAAEA/v///wAAAAD//wEAAAACAAAA/f/+/wAA/v///wAA//8AAAEAAQD///7/AAAAAAAAAAABAAAAAAACAAAAAAABAAAAAAABAP//AQD//wAA//8BAP7/AgABAAEAAQAAAAAAAQD//wEA/v8AAP////8AAP///////wIAAQD//wAAAAD//wAA/v///wAAAQD//wIA/////wEAAAAAAAIAAAABAAAAAAD//wEA//8AAAAA/////wAAAQAAAAAAAAD//wEAAQAAAAAAAAACAP///////wAAAgD//wAA/v8AAAIAAAAAAAEAAAABAP//AQABAAEAAQAAAP///v8BAAEAAAAAAP////8AAAAAAQD//wIAAQAAAAEAAAAAAAAA//8BAP//AAAAAP7//v///wEAAAAAAAIAAAAAAP//AAD//wEA//8BAAAAAAABAAEAAAABAP7///8AAAIAAAABAP//AAD//wEAAAAAAP//AAAAAAEAAAAAAAAAAAAAAP7/AQD//wAAAQD+/wEA/v8BAP7/AAABAAEAAAACAAIAAAADAAAA//8AAAEAAAABAP//AQD//wIA/////wEA//8AAAEA//8AAAEAAAAAAAAAAQABAAAAAAAAAAAAAAD//////////wAA//8AAP7/AAD+/wAAAQAAAAAA/////wAABAAAAAAA//8AAAEAAAAAAAAA/v8AAP//AAAAAAAAAAD//wAAAAD///////8BAAEAAAD/////AgABAAEA/v/+/wAAAQACAAEAAAD//wAAAwABAP//AgD+/wAA/v8AAAAAAAAAAAEA//8AAAEAAAD+/wEAAAAAAAEAAgAAAAEAAAABAP//AQD+/wIA/////wAAAQD//wAAAQD+/wAAAQABAAAA////////AAACAAAAAQAAAAIA//8BAP///v///wEA//8BAAEAAQD+/wAAAQD9/wAAAQAAAAEAAAABAAAAAgAAAP//AAD+/wAA/f8AAAAA////////AgAAAAcAAQD7/wEA/f8AAAIA//8GAP7//v/+//b/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+P/F//z/rv/i/7r/6v/Z/wYABwAoADAAKQBOABkATAD0/zQA1P8PANv/0//v/6//FwCi/ywAxP8oAPn//v82APT/WwD4/00A+/8yAPv//f/8/83/+v+w/+T/sf/j/9b/AQACACoAIgAtAEIAHwBPAAEAQADe/xcA0v/k/+X/t/8IAKv/IgC//yEA6/8EACMA9/9PAPf/VAD+/zcA+/8JAPn/1P8AALf/6f+w/+P/zf////j/HAAdAC0APgAfAEsABwBCAOP/IADV/+//2v/B//3/rP8PALv/GADd/xEAFgABAEMABABaAP//QgACABcA+//n/wAAwP/w/67/4v+///3/6f8WABcAKQA0ACIARgAQAEcA8f8pANn/9f/U/87/7f+v/wgAtP8RANP/FgANAAIAOQACAFQA/f9HAAAAIAABAO3//P/E/wEAs//q/7n/9P/i/wYAEQAZADEAJABBABMASAAAADEA3/8CANL/1v/g/7H/AACy/w8Axf8ZAPv/CQAzAAIAVQD//1AAAAAsAAIA9v/7/8r/AwC2//P/tf/m/+H/AwADABEAKQApADoAHgBHAAgAPADr/wkA1//f/93/vP/6/7L/CgDA/x4A7/8hACkAAgBPAPz/UgD1/zIABAAEAPz/0v/5/7f/AACy//H/2f/+/wEAAAAkABUAMwAdADoAEQA9APD/EADU//L/1P/H/+z/tf8LALv/HADk/ygAGgADAEMA//9TAPn/QAAAABAAAQDc//z/wf8DALD/7P/Q//z/9/8HABoAFgA3ACMAMAAOADwA+P8ZANv/+P/Y/9H/5v+8/wUAu/8WANf/HgAMAAoAPQABAFMA/f9HAP7/HwAEAN//+v/H/wMAs//2/8r/8//y/wMADgAQAC4AIwAyABMAJwD8/xcA3v8LANP/5v/f/8j/AgC4/w4A1P8eAAQACgAxAAEAUgD+/0gA/v8nAAIA8f/5/8r/BAC6/+3/wP/l/+b/AQAIABkAIwArAC4AIAAoAAkAGADj/w0A0f/r/9//0P8DAL3/CgDN/xkA//8IACUAAgBJAAAATwD+/ysAAQD7//3/z/8DAMT/+f/K/+L/5P/1////EgAcACYALgApAC4ACwAcAPL/EADZ//L/1f/U//f/uv8KAMX/DwDu/wcAHwADAEUABgBNAAEANQAAAAYAAQDf////xf/+/9P/4f/b//X/9v8LAA4AGAAlACoAMAAQABkA9v8TAOL/+f/W/9r/8f/I/wcAxP8MAOr/BwATAAQAOAAGAEcAAABCAAEADwAEAOP//v/F/wIAzf/o/93/8P/s/w4ACwAZACEAKgAyABMAIQD5/xgA6v8DANb/4P/y/9H/AQDJ/wkA4/8DAAoA/f8wAAQAQwABAEAA//8VAAIA7P/+/8r/BADP/+v/2v/s/+n/CwAIAA0AHAAjADQAHAAkAP//GQDy/wQA5v/i//b/0P/7/8f/AADh/wMAAAD+/yUAAAA7AAEAOAAAABwAAAD6/wAA1/8CAMr/AADb/+3/5f8BAAIACAAVABcALwAfACgA+/8XAPn/DgDe/+//7v/Q/wMAz/8JAOP/CwDx////EAAHADEAAQArAAIAHQAEAAcAAADr/wEAzv8CANj//f/k/wEA+f/+/xQABwAqAB4ALAD+/x4A8P8SAOb/8//f/9j//f/N/wEA3v8LAO7/AgAMAAQALAAEAC0AAQAdAAQADwABAPP/BADV/wMA0/8AAOH/AQD1/wAAEAADACQAGwAwAAQAHwD0/xUA8f/4/+L/2//7/8z/AwDc/woA6f8AAAQAAwAoAAcANAAAACcAAgAUAAEA+P8CANv/AgDR/wEA4v8BAOz/AgAIAPv/JAAVADMAFAAhAPP/GQDz//7/3P/l/+3/z/8BANf/CgDn/wkA/P///xoABwAwAAIAJwACABcAAwABAAIA4f8BAND/AgDd//3/6P8CAAYA/f8YAAwALwAZACUA9v8bAPj/AwDq/+r/7P/S//7/1/8EAOX/CQD6//7/GQAFAC8AAQApAAEAGQACAAMAAgDm/wEAzv8BANv//v/p/wIA//8BABMABQArACAALAABAB4A8f8NAOv/7v/m/9n/+P/R/wMA4f8OAPT/AQATAAMAKwAHACoAAwAbAAMABQADAO7/AQDU/wEA2f8AAOL////3////EgAAACUAGgAvAAUAHQD2/xIA9f/0//T/3P/4/8///f/h/wIA7f8AAAoAAQApAAQALQADACAAAgAPAP//9P///9r//f/T/wAA3f/9//D/AQAQAP//HAAHAC8ACQAfAPv/GAD+//f/+P/j/wEA0v/+/9n/AADq/wIABgD//x0AAQAuAAEAIwAAABQAAwD8/wEA3/8AAM//AADe////7f8BAAwA//8ZAAMALwAAACEA//8dAP3//v/9/+n////U//z/1v8BAOT/AAD+/wAAGwD+/ywA/v8kAAIAGAD///3////q/wEA0P///97/AADk/wAABAAAABUAAQAqAAEAKQAAABwAAAAFAP//6f8AANr////X/wAA4/8AAPj/AgAUAAAAKgD//ywAAAAcAP7/AQAAAOv/AADU/wAA2v8CAOP/AAABAAAAFgABABsAAAAqAAEAHwAAABQAAgDv/wEA3v///9H////f////7/8BAAoAAQApAAAALgD//yEAAQAIAAAA8P8BANr//v/V////4f8AAPf//v8UAAAAFAAAACYAAQAhAP7/GwD+//T/AADo/wIA1v8CANr/AgDp/wEABgAAAB8AAQAsAAEAJAAAAAwA///z/wEA3/8AANT/AADh/wEA9P///xQAAgASAAAAJQAAACEAAAAaAP//+v8BAOj////W////2P8BAOf///8DAAAAHwAAAC4AAAAlAAAAEgAAAPL/AQDm////0f8CAN3/AADr//7/EQD//xAAAQAhAAIAJQAAAB8AAAABAP//6v8CAN//AQDX/wAA4/8AAPr/AAAXAAAAKgABACgAAAAbAP///f8AAOj/AADU/wAA2v///+f/AQANAAMAEQD+/xwA/v8kAP7/IQABAAgA/v/p////5/8AANf/AQDd/wEA8v8BABMAAQAjAAAALgAAACAAAQADAAEA7f8BANn/AgDY//7/4P/+/wEAAAAXAAIAFAAFACUA/P8jAP//EgAAAO//AQDo////1/8AAN3/AADx//7/DgAAAB0AAQAoAAAAIwAAAAoAAQDv/wMA4f8AANn/AQDi/wEA+v///xgAAAAQAP3/IwD//yUA/v8XAAAA7/8AAOv/AADc/wAA3P/+/+v/AQALAAEAGgACACkAAAAkAP7/EAABAO/////q//7/1/8AANz/AgDw/wEAEgD//w8AAAAcAAIAJQAAAB0AAAD2////7P8AAOP/AgDa/wAA5P8BAAQAAQAWAAAAIgAAACMAAAAaAP//+P///+v/AQDZ/wAA2////+7/AAARAAAADgAAABYAAAAhAAAAIAABAPz/AQDt/wAA5P8AANr/AQDg/wEA/P8BABcAAAAhAP//KQD//xwAAAD8/wEA7v8AAN3////Z/wAA6f8BAA0AAAARAAEAEQAAACMAAAAgAAEA/f8CAO3/AADv/wAA3v8BANv////1////EgAAABkA//8nAAAAIgAAAAMAAADu/wAA6P8CANn/AQDg////BQD//xMAAQAOAP//IAABACYAAAAGAAAA6f////H/AADg/wEA2f8AAO3///8PAAAAFQACACQAAAAkAAEADQABAO//AADp/wAA2////9z/AQD7/wEAFgAAAAwAAQAXAP7/JQD9/xMAAADx/wAA8f8AAOr/AADc/wEA4/8BAAkAAAAVAAAAIQD//yYA//8UAAEA9P8BAOz/AADf/wAA3P8AAPP/AAAQAAAADQABAA0AAAAlAAEAGAD///H//v/0/wEA7v8CAN//AADg//3/BAACABUAAQAfAAAAJwABABgAAQD0//7/7f///+L/AADa/wIA8P///w4A//8SAAMACQAAACAAAQAgAP//+v////P////y/wEA4/8BANr/AQD9/wAAEwD//xkAAQAjAAAAIgABAPz////s/wAA6v8BANX/AQDr//7/BwABABMAAAAHAP//FwAAACYAAAD//wEA9P8BAPb/AQDu////2v8BAPn/AAATAP//FwD//yEAAAAjAAAAAgAAAOn/AQDr//7/2P8CAOT/AAABAP//FgABAAUAAQATAP//IwAAAAEAAgDy/wEA9/8AAPb/AADb/wAA6/8BABAAAAATAP7/IQAAACYA//8UAP//7/8AAPD/AADd/wEA3P/+//7///8OAAAACgAAAAgAAAAhAP//CQACAPT/AQD2/wAA9v///97////m/wIADgABABMAAQAfAP//JwAAABMAAADw/wAA8P///+r/AQDb/wAA9f8AAA8AAAARAAIABAD//wYA/v8HAAAAAQD//wMAAgAGAAAA7f8AAOz/AAALAP//DwACABQA//8bAAAAHgD///f/AADq/wEA6/8BANj//v/t/wAACAD+/xAAAgAEAAAABAABAAcAAQADAAAA//8AAAUA///1/wAA5f///wIAAAAOAAAAEAAAABsAAAAhAAAA/v8BAOj////y////3f8AAOf/AQAGAAEADAAAAAcA//8BAP//CQABAAMA//8BAP//BQAAAAAAAADo/wAA+/8AAAoAAAALAAAAFAAAACAAAQAGAAIA7f8BAPH/AADm/wMA3P8CAP7/AgASAP//CgD//wAAAAAIAP//BQD//wEAAAACAP7/BAAAAPz/AwD8////BAAAAAEA//8HAAAAHQAAAAgA/v/x//7/8f///+f/AQDg/////P///woAAAAMAP//AAABAAYA//8EAAAAAgAAAAUAAAACAAAAAwAAAAIAAAABAAAAAQABAAAAAgAcAP//DgD///T/AQDx/wAA9P8CAOH/AAD3/wAACQAAAAoAAQABAP//AwAAAAcAAAD+/wAAAgACAAEAAAD+////AwD+/wAAAAABAP//+v8BABEAAQATAAAA9f/+//L//f/z/wIA6f8AAPb/AQAFAP//DAAAAAAAAAAFAP//BQD//wEA//8DAAEAAQAAAP7///8AAAAA//8BAAIAAAD+/wAAEAABABYAAgD6/wEA8v8BAPX/AwDp/wAA8////wMA//8JAAEABAABAAEA//8FAAEA//8AAAMAAQACAP//AQAAAAEAAgAFAP//AQABAAAAAQAAAP//EQABAAAAAAD5/wEA+P8AAPr////6/wAA+/8BAAIA//8BAAAA//8CAAUA//8BAP7/AAABAAEAAgAAAAAAAwAAAAEA/v8DAAIAAAACAAQA//8TAAAA/P8BAPr////3//////8AAPz/AQD7/wEAAgD/////AAABAAEABAAAAP//////////AAAAAAAAAAADAAAAAwAAAAAA//8EAP///v/+/xAA//8HAAAA+/////j/AQD8////AAD///n///8AAAAA//8AAP////8DAP//AgAAAAAAAAACAAIAAAD+/wAAAQD//wAA/////wIAAgD9////CQACAAYA///9////+f8BAPr/AQAAAAIA/v///wAA//8AAAAAAAAAAAEAAAABAAAAAgAAAAEAAAAAAAEAAQABAAAAAgABAP//AAD//wEAAAD///////8BAAIAAQAAAAAA/v/+//////8BAAAAAQABAP//AAD///////8BAAAAAQABAP////8CAAEAAQD//wEA/v//////AQAAAAAAAAAAAAAAAAD9/wMA/////wAAAQD+/wEA/v/+//7/AQD//wMAAAAAAAAAAAABAAEA//////7/AAACAP3/AAD//wAAAQAAAP//AQD//wAAAAAAAAEA//8CAP//AAAAAAAA/v8AAAAA//8BAP//AAABAP//AAAAAP//AQD//wAAAQABAAAAAAABAAEA/v///wAAAAD//////////wAAAAAAAP//AAD////////8/wIAAAADAAEA/////wEA/v8BAP7/AgAAAAEAAgAAAP//AgD/////AQD//wEA//////7/AQD//wMAAAAAAAAA//8CAP//AQAAAP//AAACAAAAAAABAP//AQD+/wAA/////wAA/f///wAAAAAAAP7/AAAAAAAAAgD//wEAAQACAP//AAAAAAEAAQD//wAAAAAAAAAA//8BAAMA/v8AAP7/AQAAAAAAAQAAAAAA///+//7/AAAAAAAA//8BAP7/AQAAAP//AQABAAAAAQAAAP//AAD//wIA/v///wAAAQABAP//AAD//wEA//8BAP//AgAAAP///////wAAAQABAP//AwABAAAAAAAAAAAA/////wIAAwACAAAA/v8BAAAAAAAAAAAA//8AAP////8AAAAA/////wAA/////wEA/v8CAAEAAQD//wAAAAABAAAAAAD//wEAAQABAAAA//8CAAAAAAAAAP7/AAABAAAAAQABAAAAAgABAAAAAQD//wEAAwD+/wAA/v8AAAEAAAAAAAAAAAAAAAEAAAD//wMA/v///wAAAAACAAEAAAAAAP7///8DAAEAAQD//wEA/f8BAAEAAQD//wEAAQABAAMAAgAAAAEA//8AAP//BAAAAAIA/v//////AQABAAAAAAD//wEAAAACAAIAAQAAAAAAAgAAAAAAAAABAAIAAAABAAIAAQAAAP////8AAAAAAAD//wAAAQACAP//AAAAAAAAAQAAAAEA//8AAAAAAAD/////AQD//wAAAQD9////AQAAAAAA//8BAAAA///+/////v8BAAAAAQAAAAAAAAAAAAIA//8BAAAAAAACAP//AQD//wAAAAD/////AAD9/wAAAAACAAAAAgAAAAEAAQABAAEAAAAAAAEA//8AAAEAAQACAAAAAQAAAAEA//8BAAIAAAACAP//AAABAAAAAAAAAAAAAAD//wAAAQD/////AAAAAP////8AAAEAAAAAAP7///8BAAIAAQD//wEAAQAAAP//AgAAAAAAAAD//wAA//8CAP7/AQAAAP7/AAD+////AAAAAAAAAQABAAAA//8AAAEAAAABAP7/AAAAAP7/AAD+/wAAAQABAAEA/////////v8BAP///v///wIAAAAAAAAAAQAAAAIAAQAAAAAAAAABAAEAAAAAAAAAAAD//wEAAQD//wAAAQABAAAA/v/+/////////wAAAAD//wAAAAD/////AAAAAP7/AAD//wIA//8CAP//AQAAAP////8AAAAAAQABAP////8AAP//AQACAAAAAQAAAAAAAAAAAAAA//8BAAAAAAD+/wAA/v///wEAAAD+//7///8CAP7/AAABAP3/AwAAAAAAAAABAAIAAAABAAAAAQABAAIAAAAAAP//AAAAAAEAAAACAAEAAAACAAAAAAABAAAAAwAAAAAAAAD+/wAAAQD9//////8BAAAA/v8AAAAAAAAAAAAAAAD//wMA/v8BAAEAAQACAAAA/v8BAP//AwABAAIAAQABAP//AQAAAAEAAAAAAAEA//8AAAAAAAD/////AAABAAEAAAAAAP////8AAAAAAAAAAAAA/v8AAP//AQAAAP//AAABAAIAAQAAAAAAAgABAAAA/////wAAAQABAP//AQABAAEA/////wAAAAAAAAAAAAABAAEAAQAAAAAAAAAAAAAA//8AAP7/AQD9/wAAAgD//wEAAQABAAEA/v8AAAEA/////wAAAAAAAP//AAABAAAAAAAAAAAA//8CAP//AAABAAEAAQABAAAA//8BAAIAAgD//wAA/v8AAAEAAAD///7/AAAAAAEAAAABAAAAAQABAAAAAQACAAAA///+/wAAAQABAP7////+/wAA//8AAAAAAgAAAP//AQD9/wAAAAD//wAA//8AAAAAAQAAAAAAAQD//wAAAAAAAP//AQABAAAA/v8CAP//AAD///////8AAAAAAAACAAEA//8BAP7/AAAAAAEA//8BAAAAAQD//wAAAQD+/wAA/////wAAAAD//wAAAQABAAAA//8AAAEA/////wAA//8AAAAA/v/+/wEAAgABAP//AgD//wIA/////wAA//8AAAEAAQAAAAAAAQAAAAMAAAACAP//", ss = {
  general: {
    primaryColor: "#42b0c5",
    secondaryColor: "#491d8d",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    showHeader: !0,
    showFooter: !0,
    showInputRow: !0,
    actionDisabledIcon: nu,
    embedded: !1,
    flowStartTrigger: "ON_LOAD"
  },
  tooltip: {
    mode: "CLOSE",
    text: "Talk to me! 😊"
  },
  chatButton: {
    icon: es
  },
  header: {
    title: /* @__PURE__ */ b.jsx("div", { style: { cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold" }, onClick: () => window.open("https://github.com/tjtanjin/"), children: "Tan Jin" }),
    showAvatar: !0,
    avatar: ql,
    buttons: [Je.NOTIFICATION_BUTTON, Je.AUDIO_BUTTON, Je.CLOSE_CHAT_BUTTON],
    closeChatIcon: fu
  },
  notification: {
    disabled: !1,
    defaultToggledOn: !0,
    volume: 0.2,
    icon: su,
    iconDisabled: cu,
    sound: Cu,
    showCount: !0
  },
  audio: {
    disabled: !0,
    defaultToggledOn: !1,
    language: "en-US",
    voiceNames: ["Microsoft David - English (United States)", "Alex (English - United States)"],
    rate: 1,
    volume: 1,
    icon: Su,
    iconDisabled: Eu
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
    sendButtonIcon: pu,
    blockSpam: !0,
    sendOptionOutput: !0,
    sendCheckboxOutput: !0,
    buttons: [Je.VOICE_MESSAGE_BUTTON, Je.SEND_MESSAGE_BUTTON]
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
    avatar: au,
    simStream: !1,
    streamSpeed: 30,
    dangerouslySetInnerHtml: !1
  },
  botBubble: {
    animate: !0,
    showAvatar: !1,
    avatar: ql,
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
    icon: gu,
    iconDisabled: yu
  },
  footer: {
    text: /* @__PURE__ */ b.jsxs(
      "div",
      {
        style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", columnGap: 3 },
        onClick: () => window.open("https://react-chatbotify.com"),
        children: [
          /* @__PURE__ */ b.jsx("span", { children: "Powered By " }, 0),
          /* @__PURE__ */ b.jsx(
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
              children: /* @__PURE__ */ b.jsx(es, { style: { width: "80%", height: "80%", fill: "#fff" } })
            },
            1
          ),
          /* @__PURE__ */ b.jsx("span", { style: { fontWeight: "bold" }, children: " React ChatBotify" }, 2)
        ]
      }
    ),
    buttons: [Je.FILE_ATTACHMENT_BUTTON, Je.EMOJI_PICKER_BUTTON]
  },
  fileAttachment: {
    disabled: !1,
    multiple: !0,
    accept: ".png",
    icon: ts,
    iconDisabled: ts,
    sendFileName: !0,
    showMediaDisplay: !1
  },
  emoji: {
    disabled: !1,
    icon: ns,
    iconDisabled: ns,
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
}, us = k.createContext({ settings: {}, setSettings: () => null }), De = () => k.useContext(us), Du = ({
  children: f,
  settings: c = ss,
  setSettings: g
}) => /* @__PURE__ */ b.jsx(us.Provider, { value: { settings: c, setSettings: g }, children: f }), cs = {
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
}, ds = k.createContext({ styles: {}, setStyles: () => null }), Ye = () => k.useContext(ds), Pu = ({
  children: f,
  styles: c = cs,
  setStyles: g
}) => /* @__PURE__ */ b.jsx(ds.Provider, { value: { styles: c, setStyles: g }, children: f }), ku = ({ buttons: f }) => {
  var c, g, m, A, w;
  const { settings: P } = De(), { styles: E } = Ye(), y = {
    backgroundImage: `linear-gradient(to right, ${(c = P.general) == null ? void 0 : c.secondaryColor},
			${(g = P.general) == null ? void 0 : g.primaryColor})`,
    ...E.headerStyle
  };
  return /* @__PURE__ */ b.jsxs("div", { style: y, className: "rcb-chat-header-container", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "rcb-chat-header", children: [
      ((m = P.header) == null ? void 0 : m.showAvatar) && /* @__PURE__ */ b.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(A = P.header) == null ? void 0 : A.avatar})` },
          className: "rcb-bot-avatar"
        }
      ),
      (w = P.header) == null ? void 0 : w.title
    ] }),
    /* @__PURE__ */ b.jsx("div", { className: "rcb-chat-header", children: f == null ? void 0 : f.map(
      (C, H) => /* @__PURE__ */ b.jsx(k.Fragment, { children: C }, H)
    ) })
  ] });
}, fs = k.createContext({}), bt = () => k.useContext(fs), Bu = ({
  children: f,
  botIdRef: c,
  flowRef: g
}) => {
  const m = k.useRef(null), A = k.useRef(""), w = k.useRef(/* @__PURE__ */ new Map()), P = k.useRef(null), E = k.useRef(""), y = k.useRef(!1), C = k.useRef(null), H = k.useRef(null), B = k.useRef(null);
  return /* @__PURE__ */ b.jsx(fs.Provider, { value: {
    botIdRef: c,
    flowRef: g,
    inputRef: m,
    streamMessageMap: w,
    chatBodyRef: P,
    paramsInputRef: E,
    keepVoiceOnRef: y,
    audioContextRef: C,
    audioBufferRef: H,
    gainNodeRef: B,
    prevInputRef: A
  }, children: f });
}, hs = k.createContext({}), gt = () => k.useContext(hs), Tu = ({
  children: f,
  settings: c
}) => {
  var g, m, A, w, P, E;
  const [y, C] = k.useState(!1), [H, B] = k.useState(((g = c == null ? void 0 : c.chatWindow) == null ? void 0 : g.defaultOpen) ?? !1), [Q, U] = k.useState(((m = c == null ? void 0 : c.audio) == null ? void 0 : m.defaultToggledOn) ?? !1), [L, _] = k.useState(((A = c == null ? void 0 : c.voice) == null ? void 0 : A.defaultToggledOn) ?? !1), [F, T] = k.useState(
    ((w = c == null ? void 0 : c.notification) == null ? void 0 : w.defaultToggledOn) ?? !0
  ), [K, te] = k.useState(!1), [X, G] = k.useState(!1), [$, Z] = k.useState(!0), [re, ne] = k.useState(!1), [Ae, ae] = k.useState(!1), [ce, ve] = k.useState(!1), [de, Me] = k.useState(0), [Ce, ee] = k.useState(0), [se, fe] = k.useState(!1), [be, oe] = k.useState(null), [me, Oe] = k.useState(((P = window.visualViewport) == null ? void 0 : P.height) ?? window.innerHeight), [Se, le] = k.useState(((E = window.visualViewport) == null ? void 0 : E.width) ?? window.innerWidth);
  return /* @__PURE__ */ b.jsx(hs.Provider, { value: {
    isBotTyping: y,
    setIsBotTyping: C,
    isChatWindowOpen: H,
    setIsChatWindowOpen: B,
    audioToggledOn: Q,
    setAudioToggledOn: U,
    voiceToggledOn: L,
    setVoiceToggledOn: _,
    notificationsToggledOn: F,
    setNotificationsToggledOn: T,
    isLoadingChatHistory: K,
    setIsLoadingChatHistory: te,
    isScrolling: X,
    setIsScrolling: G,
    textAreaDisabled: $,
    setTextAreaDisabled: Z,
    textAreaSensitiveMode: re,
    setTextAreaSensitiveMode: ne,
    hasInteractedPage: Ae,
    setHasInteractedPage: ae,
    hasFlowStarted: ce,
    setHasFlowStarted: ve,
    unreadCount: de,
    setUnreadCount: Me,
    inputLength: Ce,
    setInputLength: ee,
    blockAllowsAttachment: se,
    setBlockAllowsAttachment: fe,
    timeoutId: be,
    setTimeoutId: oe,
    viewportHeight: me,
    setViewportHeight: Oe,
    viewportWidth: Se,
    setViewportWidth: le
  }, children: f });
}, Iu = () => {
  var f, c, g;
  const { settings: m } = De(), { styles: A } = Ye(), { unreadCount: w, isScrolling: P, setIsScrolling: E } = gt(), { chatBodyRef: y } = bt(), [C, H] = k.useState(!1), B = {
    color: (f = m.general) == null ? void 0 : f.primaryColor,
    borderColor: (c = m.general) == null ? void 0 : c.primaryColor,
    ...A.chatMessagePromptHoveredStyle
  }, Q = () => {
    H(!0);
  }, U = () => {
    H(!1);
  };
  function L(F) {
    if (!y.current)
      return;
    const T = y.current.scrollTop, K = y.current.scrollHeight - y.current.clientHeight - T, te = 20;
    let X = 0;
    function G() {
      if (!y.current)
        return;
      X += te;
      const $ = _(X, T, K, F);
      y.current.scrollTop = $, X < F ? requestAnimationFrame(G) : E(!1);
    }
    G();
  }
  const _ = (F, T, K, te) => (F /= te / 2, F < 1 ? K / 2 * F * F + T : (F--, -K / 2 * (F * (F - 2) - 1) + T));
  return /* @__PURE__ */ b.jsx("div", { className: `rcb-message-prompt-container ${(() => {
    var F;
    return y.current && ((F = m.chatWindow) != null && F.showMessagePrompt) && P && w > 0 ? "visible" : "hidden";
  })()}`, children: /* @__PURE__ */ b.jsx(
    "div",
    {
      onMouseEnter: Q,
      onMouseLeave: U,
      style: C ? B : A.chatMessagePromptStyle,
      onMouseDown: (F) => {
        F.preventDefault(), L(600);
      },
      className: "rcb-message-prompt-text",
      children: (g = m.chatWindow) == null ? void 0 : g.messagePromptText
    }
  ) });
}, xA = () => {
  try {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    throw new Error("crypto.randomUUID not available");
  } catch {
    if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(f) {
        const c = crypto.getRandomValues(new Uint8Array(1))[0] % 16;
        return (f === "x" ? c : c & 3 | 8).toString(16);
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
}, Ru = {
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
}, EA = (f, c, g) => {
  const m = new CustomEvent(f, {
    detail: c,
    cancelable: Ru[f]
  });
  return m.data = g, window.dispatchEvent(m), m;
}, ps = k.createContext({ paths: [], setPaths: () => null }), Ol = () => k.useContext(ps), Mu = ({ children: f }) => {
  const [c, g] = k.useState([]);
  return /* @__PURE__ */ b.jsx(ps.Provider, { value: { paths: c, setPaths: g }, children: f });
}, PA = () => {
  const { settings: f } = De(), { paths: c, setPaths: g } = Ol(), {
    setIsBotTyping: m,
    setTextAreaDisabled: A,
    setTextAreaSensitiveMode: w,
    blockAllowsAttachment: P,
    setBlockAllowsAttachment: E
  } = gt(), { botIdRef: y } = bt(), C = k.useCallback(() => c.length > 0 ? c[c.length - 1] : null, [c]), H = k.useCallback(() => c.length > 1 ? c[c.length - 2] : null, [c]), B = k.useCallback((Q) => {
    var U, L;
    if ((U = f.event) != null && U.rcbChangePath) {
      const _ = C(), F = H(), T = { botId: y.current, currPath: _, prevPath: F };
      if (event = EA(Ee.CHANGE_PATH, T, { currPath: _, prevPath: F, nextPath: Q }), event.defaultPrevented)
        return !1;
    }
    return m(!0), (L = f.chatInput) != null && L.blockSpam && A(!0), w(!1), g((_) => [..._, Q]), !0;
  }, [c, g, f]);
  return {
    getCurrPath: C,
    getPrevPath: H,
    goToPath: B,
    blockAllowsAttachment: P,
    setBlockAllowsAttachment: E,
    paths: c,
    replacePaths: (Q) => {
      g(Q);
    }
  };
}, Qu = () => {
  const {
    getCurrPath: f,
    getPrevPath: c,
    goToPath: g,
    paths: m,
    replacePaths: A
  } = PA();
  return {
    getCurrPath: f,
    getPrevPath: c,
    goToPath: g,
    paths: m,
    replacePaths: A
  };
}, Wn = () => {
  const { getCurrPath: f, getPrevPath: c, paths: g } = Qu(), { botIdRef: m } = bt();
  return { callRcbEvent: k.useCallback((A, w) => {
    const P = { botId: m.current, currPath: f(), prevPath: c() };
    return EA(A, P, w);
  }, [g]) };
}, vs = k.createContext({ toasts: [], setToasts: () => null }), gs = () => k.useContext(vs), Ou = ({ children: f }) => {
  const [c, g] = k.useState([]);
  return /* @__PURE__ */ b.jsx(vs.Provider, { value: { toasts: c, setToasts: g }, children: f });
}, kA = () => {
  const { settings: f } = De(), { toasts: c, setToasts: g } = gs(), { callRcbEvent: m } = Wn(), A = k.useRef(c);
  k.useEffect(() => {
    A.current = c;
  }, [c]);
  const w = k.useCallback((E, y) => {
    var C, H, B, Q;
    let U = null;
    if (A.current.length >= (((C = f.toast) == null ? void 0 : C.maxCount) ?? 3)) {
      if ((H = f.toast) != null && H.forbidOnMax)
        return null;
      U = xA();
      let _ = { id: U, content: E, timeout: y };
      if ((B = f.event) != null && B.rcbShowToast) {
        const F = m(Ee.SHOW_TOAST, { toast: _ });
        if (F.defaultPrevented)
          return null;
        _ = F.data.toast;
      }
      return g((F) => [...F.slice(1), _]), U;
    }
    U = xA();
    let L = { id: U, content: E, timeout: y };
    if ((Q = f.event) != null && Q.rcbShowToast) {
      const _ = m(Ee.SHOW_TOAST, { toast: L });
      if (_.defaultPrevented)
        return null;
      L = _.data.toast;
    }
    return g((_) => [..._, L]), U;
  }, [f, m, g]), P = k.useCallback((E) => {
    var y;
    const C = c.find((H) => H.id === E);
    return !C || (y = f.event) != null && y.rcbDismissToast && m(Ee.DISMISS_TOAST, { toast: C }).defaultPrevented ? null : (g((H) => H.filter((B) => B.id !== E)), E);
  }, [m, g]);
  return {
    showToast: w,
    dismissToast: P,
    toasts: c,
    replaceToasts: (E) => {
      g(E);
    }
  };
}, ju = ({
  id: f,
  content: c,
  timeout: g
}) => {
  var m, A;
  const { settings: w } = De(), { styles: P } = Ye(), { dismissToast: E } = kA(), [y, C] = k.useState(!1), H = {
    color: (m = w.general) == null ? void 0 : m.primaryColor,
    borderColor: (A = w.general) == null ? void 0 : A.primaryColor,
    ...P.toastPromptHoveredStyle
  };
  return k.useEffect(() => {
    if (g) {
      const B = setTimeout(() => {
        E(f);
      }, g);
      return () => clearTimeout(B);
    }
  }, [f, E, g]), typeof c == "string" ? /* @__PURE__ */ b.jsx(
    "div",
    {
      onMouseEnter: () => {
        C(!0);
      },
      onMouseLeave: () => {
        C(!1);
      },
      style: y ? H : P.toastPromptStyle,
      onMouseDown: (B) => {
        var Q;
        (Q = w.toast) != null && Q.dismissOnClick && (B.preventDefault(), E(f));
      },
      className: "rcb-toast-prompt",
      children: c
    }
  ) : /* @__PURE__ */ b.jsx(b.Fragment, { children: c });
}, gr = () => {
  const { settings: f } = De(), {
    isChatWindowOpen: c,
    setIsChatWindowOpen: g,
    viewportHeight: m,
    setViewportHeight: A,
    viewportWidth: w,
    setViewportWidth: P,
    setUnreadCount: E
  } = gt(), { callRcbEvent: y } = Wn(), [C, H] = k.useState(0), B = k.useCallback(() => {
    var U;
    (U = f.event) != null && U.rcbToggleChatWindow && y(
      Ee.TOGGLE_CHAT_WINDOW,
      { currState: c, newState: !c }
    ).defaultPrevented || g((L) => (L || E(0), !L));
  }, []), Q = k.useCallback((U) => {
    c !== U && B();
  }, [c]);
  return {
    isChatWindowOpen: c,
    setIsChatWindowOpen: g,
    toggleChatWindow: B,
    openChat: Q,
    chatScrollHeight: C,
    setChatScrollHeight: H,
    viewportHeight: m,
    setViewportHeight: A,
    viewportWidth: w,
    setViewportWidth: P
  };
}, ms = k.createContext({ messages: [], setMessages: () => null }), jl = () => k.useContext(ms), Fu = ({ children: f }) => {
  const [c, g] = k.useState([]);
  return /* @__PURE__ */ b.jsx(ms.Provider, { value: { messages: c, setMessages: g }, children: f });
}, Lu = ({
  setChatScrollHeight: f
}) => {
  var c, g, m, A, w, P, E, y, C, H, B, Q;
  const { settings: U } = De(), { styles: L } = Ye(), { messages: _ } = jl(), { toasts: F } = gs(), { isChatWindowOpen: T } = gr(), {
    isBotTyping: K,
    isScrolling: te,
    setIsScrolling: X,
    setUnreadCount: G
  } = gt(), { chatBodyRef: $ } = bt(), Z = {
    ...L == null ? void 0 : L.bodyStyle,
    scrollbarWidth: (c = U.chatWindow) != null && c.showScrollbar ? "auto" : "none"
  }, re = {
    backgroundColor: (g = U.general) == null ? void 0 : g.primaryColor,
    color: "#fff",
    maxWidth: (m = U.userBubble) != null && m.showAvatar ? "65%" : "70%",
    ...L.userBubbleStyle
  }, ne = (A = U.userBubble) != null && A.animate ? "rcb-user-message-entry" : "", Ae = {
    backgroundColor: (w = U.general) == null ? void 0 : w.secondaryColor,
    color: "#fff",
    maxWidth: (P = U.botBubble) != null && P.showAvatar ? "65%" : "70%",
    ...L.botBubbleStyle
  }, ae = (E = U.botBubble) != null && E.animate ? "rcb-bot-message-entry" : "", ce = {
    bottom: 20,
    width: 300,
    minWidth: (((y = L.chatWindowStyle) == null ? void 0 : y.width) ?? 375) / 2,
    maxWidth: (((C = L.chatWindowStyle) == null ? void 0 : C.width) ?? 375) - 50,
    ...L.toastPromptContainerStyle
  };
  k.useEffect(() => {
    $.current && (f($.current.scrollHeight), te || ($.current.scrollTop = $.current.scrollHeight));
  }, [(H = $.current) == null ? void 0 : H.scrollHeight]);
  const ve = () => {
    var ee;
    if (!$.current)
      return;
    f($.current.scrollHeight);
    const { scrollTop: se, clientHeight: fe, scrollHeight: be } = $.current, oe = se + fe < be - (((ee = U.chatWindow) == null ? void 0 : ee.messagePromptOffset) ?? 30);
    X(oe), oe || (se + fe >= be - 1 && ($.current.scrollTop = be - fe - 1), T && G(0));
  }, de = (ee) => ee === 0 ? !0 : _[ee].sender !== _[ee - 1].sender, Me = (ee, se) => {
    var fe, be, oe, me;
    const Oe = de(se), Se = ((fe = U.userBubble) == null ? void 0 : fe.showAvatar) && Oe;
    let le = "rcb-user-message";
    return !Oe && (be = U.userBubble) != null && be.showAvatar && (le += " rcb-user-message-offset"), /* @__PURE__ */ b.jsxs("div", { className: "rcb-user-message-container", children: [
      typeof ee.content == "string" ? (oe = U == null ? void 0 : U.userBubble) != null && oe.dangerouslySetInnerHtml ? /* @__PURE__ */ b.jsx(
        "div",
        {
          style: { ...re, display: "inline" },
          className: `${le} ${ne}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ b.jsx(
        "div",
        {
          style: re,
          className: `${le} ${ne}`,
          children: ee.content
        }
      ) : ee.content,
      Se && /* @__PURE__ */ b.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(me = U.userBubble) == null ? void 0 : me.avatar})` },
          className: "rcb-message-user-avatar"
        }
      )
    ] });
  }, Ce = (ee, se) => {
    var fe, be, oe, me;
    const Oe = de(se), Se = ((fe = U.botBubble) == null ? void 0 : fe.showAvatar) && Oe;
    let le = "rcb-bot-message";
    return !Oe && (be = U.botBubble) != null && be.showAvatar && (le += " rcb-bot-message-offset"), /* @__PURE__ */ b.jsxs("div", { className: "rcb-bot-message-container", children: [
      Se && /* @__PURE__ */ b.jsx(
        "div",
        {
          style: { backgroundImage: `url(${(oe = U.botBubble) == null ? void 0 : oe.avatar})` },
          className: "rcb-message-bot-avatar"
        }
      ),
      typeof ee.content == "string" ? (me = U == null ? void 0 : U.botBubble) != null && me.dangerouslySetInnerHtml ? /* @__PURE__ */ b.jsx(
        "div",
        {
          style: { ...Ae, display: "inline" },
          className: `${le} ${ae}`,
          dangerouslySetInnerHTML: { __html: ee.content }
        }
      ) : /* @__PURE__ */ b.jsx(
        "div",
        {
          style: Ae,
          className: `${le} ${ae}`,
          children: ee.content
        }
      ) : ee.content
    ] });
  };
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      style: Z,
      className: "rcb-chat-body-container",
      ref: $,
      onScroll: ve,
      children: [
        _.map((ee, se) => ee.sender === "system" ? /* @__PURE__ */ b.jsx("div", { children: ee.content }, se) : /* @__PURE__ */ b.jsx("div", { children: ee.sender === "user" ? Me(ee, se) : Ce(ee, se) }, se)),
        K && /* @__PURE__ */ b.jsxs("div", { className: "rcb-bot-message-container", children: [
          ((B = U.botBubble) == null ? void 0 : B.showAvatar) && /* @__PURE__ */ b.jsx(
            "div",
            {
              style: { backgroundImage: `url(${(Q = U.botBubble) == null ? void 0 : Q.avatar})` },
              className: "rcb-message-bot-avatar"
            }
          ),
          /* @__PURE__ */ b.jsx(
            "div",
            {
              onMouseDown: (ee) => {
                ee.preventDefault();
              },
              className: `rcb-bot-message ${ae}`,
              children: /* @__PURE__ */ b.jsxs("div", { className: "rcb-typing-indicator", style: { ...L == null ? void 0 : L.rcbTypingIndicatorContainerStyle }, children: [
                /* @__PURE__ */ b.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ b.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } }),
                /* @__PURE__ */ b.jsx("span", { className: "rcb-dot", style: { ...L == null ? void 0 : L.rcbTypingIndicatorDotStyle } })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ b.jsx(Iu, {}),
        /* @__PURE__ */ b.jsx("div", { className: "rcb-toast-prompt-container", style: ce, children: F.map((ee) => /* @__PURE__ */ b.jsx(
          ju,
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
}, Hu = ({
  checkboxes: f,
  checkedItems: c,
  path: g
}) => {
  var m, A, w, P, E, y, C, H, B, Q, U;
  const { settings: L } = De(), { styles: _ } = Ye(), { paths: F } = Ol(), { handleSubmitText: T } = Ha(), [K, te] = k.useState(/* @__PURE__ */ new Set()), [X, G] = k.useState(!1), $ = {
    cursor: X ? `url(${(m = L.general) == null ? void 0 : m.actionDisabledIcon}), auto` : "pointer",
    color: (A = L.general) == null ? void 0 : A.primaryColor,
    borderColor: (w = L.general) == null ? void 0 : w.primaryColor,
    ..._.botCheckboxRowStyle
  }, Z = {
    cursor: X || K.size < f.min ? `url(${(P = L.general) == null ? void 0 : P.actionDisabledIcon}), auto` : "pointer",
    color: (E = L.general) == null ? void 0 : E.primaryColor,
    borderColor: (y = L.general) == null ? void 0 : y.primaryColor,
    ..._.botCheckboxNextStyle
  }, re = {
    cursor: X ? `url(${(C = L.general) == null ? void 0 : C.actionDisabledIcon}), auto` : "pointer",
    color: "transparent",
    ..._.botCheckMarkStyle
  }, ne = {
    cursor: X ? `url(${(H = L.general) == null ? void 0 : H.actionDisabledIcon}), auto` : "pointer",
    color: "#fff",
    borderColor: (B = L.general) == null ? void 0 : B.primaryColor,
    backgroundColor: (Q = L.general) == null ? void 0 : Q.primaryColor,
    ..._.botCheckMarkSelectedStyle
  };
  k.useEffect(() => {
    F.length > 0 && F[F.length - 1] !== g && G(!f.reusable);
  }, [F]);
  const Ae = (ae) => {
    X || te((ce) => {
      const ve = new Set(ce);
      if (ve.has(ae))
        c.delete(ae), ve.delete(ae);
      else {
        if (K.size == f.max)
          return ce;
        c.add(ae), ve.add(ae);
      }
      return ve;
    });
  };
  return /* @__PURE__ */ b.jsxs("div", { className: `rcb-checkbox-container ${(U = L.botBubble) != null && U.showAvatar ? "rcb-checkbox-offset" : ""}`, children: [
    f.items.map((ae) => /* @__PURE__ */ b.jsx(
      "div",
      {
        onMouseDown: (ce) => {
          ce.preventDefault(), Ae(ae);
        },
        style: $,
        className: "rcb-checkbox-row-container",
        children: /* @__PURE__ */ b.jsxs("div", { className: "rcb-checkbox-row", children: [
          /* @__PURE__ */ b.jsx(
            "div",
            {
              style: K.has(ae) ? ne : re,
              className: "rcb-checkbox-mark"
            }
          ),
          /* @__PURE__ */ b.jsx("div", { className: "rcb-checkbox-label", children: ae })
        ] })
      },
      ae
    )),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        style: Z,
        className: "rcb-checkbox-next-button",
        onMouseDown: (ae) => {
          var ce;
          if (ae.preventDefault(), X || K.size < f.min)
            return;
          const ve = Array.from(c).join(", ");
          G(!f.reusable);
          let de;
          f.sendOutput != null ? de = f.sendOutput : de = ((ce = L.chatInput) == null ? void 0 : ce.sendCheckboxOutput) ?? !0, T(ve, de);
        }
      }
    )
  ] });
}, Nu = async (f, c, g, m) => {
  const A = c.checkboxes;
  if (!A)
    return;
  let w;
  if (typeof A == "function" ? (w = A(m), w instanceof Promise && (w = await w)) : w = A, Array.isArray(w) && (w = { items: w }), !("items" in w) || w.items.length == 0)
    return;
  w.min == null && (w.min = 1), w.max == null && (w.max = w.items.length), w.min > w.max && (w.min = w.max), w.reusable == null && (w.reusable = !1);
  const P = /* @__PURE__ */ b.jsx(Hu, { checkboxes: w, checkedItems: /* @__PURE__ */ new Set(), path: g });
  await m.injectMessage(P);
}, Uu = async (f, c) => {
  const g = f.function;
  if (!g)
    return;
  const m = g(c);
  return m instanceof Promise ? await m : m;
}, zu = async (f, c) => {
  const g = f.message;
  if (!g)
    return;
  if (typeof g == "string") {
    g.trim() !== "" && await c.injectMessage(g);
    return;
  }
  let m = g(c);
  m instanceof Promise && (m = await m), m && m.trim() !== "" && await c.injectMessage(m);
}, Wu = ({
  options: f,
  path: c
}) => {
  var g, m, A, w, P, E;
  const { settings: y } = De(), { styles: C } = Ye(), { paths: H } = Ol(), { handleSubmitText: B } = Ha(), [Q, U] = k.useState([]), [L, _] = k.useState(!1), F = {
    cursor: L ? `url(${(g = y.general) == null ? void 0 : g.actionDisabledIcon}), auto` : "pointer",
    color: (m = y.general) == null ? void 0 : m.primaryColor,
    borderColor: (A = y.general) == null ? void 0 : A.primaryColor,
    backgroundColor: "#fff",
    ...C.botOptionStyle
  }, T = {
    color: "#fff",
    borderColor: (w = y.general) == null ? void 0 : w.primaryColor,
    backgroundColor: (P = y.general) == null ? void 0 : P.primaryColor,
    ...C.botOptionHoveredStyle
  };
  k.useEffect(() => {
    H.length > 0 && H[H.length - 1] !== c && _(!f.reusable);
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
  return /* @__PURE__ */ b.jsx("div", { className: `rcb-options-container ${(E = y.botBubble) != null && E.showAvatar ? "rcb-options-offset" : ""}`, children: f.items.map((X, G) => {
    const $ = Q[G] && !L;
    return /* @__PURE__ */ b.jsx(
      "div",
      {
        className: "rcb-options",
        style: $ ? T : F,
        onMouseEnter: () => K(G),
        onMouseLeave: () => te(G),
        onMouseDown: (Z) => {
          var re;
          if (Z.preventDefault(), L)
            return;
          _(!f.reusable);
          let ne;
          f.sendOutput != null ? ne = f.sendOutput : ne = ((re = y.chatInput) == null ? void 0 : re.sendOptionOutput) ?? !0, B(X, ne);
        },
        children: X
      },
      X
    );
  }) });
}, Zu = async (f, c, g, m) => {
  const A = c.options;
  if (!A)
    return;
  let w;
  if (typeof A == "function" ? (w = A(m), w instanceof Promise && (w = await w)) : w = A, Array.isArray(w) && (w = { items: w }), !("items" in w) || w.items.length == 0)
    return;
  w.reusable == null && (w.reusable = !1);
  const P = /* @__PURE__ */ b.jsx(Wu, { options: w, path: g });
  await m.injectMessage(P);
}, Gu = async (f, c, g) => {
  const m = f.path;
  if (!m)
    return !1;
  if (typeof m == "string")
    return g(m);
  let A = m(c);
  return A instanceof Promise && (A = await A), A ? g(A) : !1;
}, _u = async (f, c) => {
  const g = f.component;
  if (g) {
    if (typeof g == "function") {
      let m = g(c);
      if (m instanceof Promise && (m = await m), !m)
        return;
      await c.injectMessage(m);
      return;
    }
    await c.injectMessage(g);
  }
}, Yu = async (f, c, g, m, A) => {
  const w = f[c];
  if (!w)
    throw new Error("block is not valid.");
  const P = w.transition;
  let E;
  if (typeof P == "function" ? (E = P(g), E instanceof Promise && (E = await E)) : E = P, typeof E == "number" && (E = { duration: E }), !E || E instanceof Promise || E.duration == null || typeof E.duration != "number")
    return;
  E.interruptable == null && (E.interruptable = !1);
  const y = setTimeout(async () => {
    await ws(f, c, g, m);
  }, E.duration);
  E.interruptable && A(y);
}, Xu = async (f, c, g) => {
  const m = f.chatDisabled;
  if (m == null)
    return;
  let A;
  typeof m == "function" ? (A = m(g), A instanceof Promise && (A = await A)) : A = m, c(A);
}, ys = async (f, c, g) => {
  const m = f.isSensitive;
  if (!m) {
    c(!1);
    return;
  }
  let A;
  typeof m == "function" ? (A = m(g), A instanceof Promise && (A = await A)) : A = m, c(A);
}, Vu = async (f, c, g, m, A, w, P) => {
  const E = f[c];
  if (!E)
    throw new Error("Block is not valid.");
  for (const y of Object.keys(E))
    switch (y) {
      case "message":
        await zu(E, g);
        break;
      case "options":
        await Zu(f, E, c, g);
        break;
      case "checkboxes":
        await Nu(f, E, c, g);
        break;
      case "component":
        await _u(E, g);
        break;
      case "chatDisabled":
        await Xu(E, m, g);
        break;
      case "isSensitive":
        await ys(E, A, g);
        break;
      case "transition":
        await Yu(f, c, g, w, P);
    }
}, ws = async (f, c, g, m) => {
  const A = f[c];
  if (!A)
    throw new Error("Block is not valid.");
  const w = Object.keys(A);
  for (const P of w)
    P === "function" && await Uu(A, g);
  return w.includes("path") ? await Gu(A, g, m) : !1;
}, Ju = (f) => {
  const c = [];
  let g = "", m = !1;
  for (let A = 0; A < f.length; A++) {
    const w = f[A];
    w === "<" ? m ? (c.push(g), g = w) : (m = !0, g = w) : w === ">" ? (g += w, c.push(g), g = "", m = !1) : m ? g += w : c.push(w);
  }
  return g !== "" && c.push(g), c;
}, Ku = (f) => typeof window.DOMParser < "u" ? new DOMParser().parseFromString(f, "text/html").body.textContent || "" : f.replace(/<\/?[^>]+(>|$)/g, ""), $u = (f, c, g, m, A) => {
  const w = new SpeechSynthesisUtterance();
  w.text = f, w.lang = c, w.rate = m, w.volume = A;
  let P = !1;
  for (const E of g)
    if (window.speechSynthesis.getVoices().find((y) => {
      if (y.name === E) {
        w.voice = y, window.speechSynthesis.speak(w), P = !0;
        return;
      }
    }), P)
      break;
  P || window.speechSynthesis.speak(w);
}, qu = (f, c, g, m, A) => {
  var w, P, E, y, C, H;
  if ((w = f.audio) != null && w.disabled || m.sender === "user" || typeof m.content != "string" || !g && !((P = f.general) != null && P.embedded) || !c || m.content.trim() === "")
    return;
  let B = m.content;
  A && (B = Ku(m.content)), $u(
    B,
    (E = f.audio) == null ? void 0 : E.language,
    (y = f.audio) == null ? void 0 : y.voiceNames,
    (C = f.audio) == null ? void 0 : C.rate,
    (H = f.audio) == null ? void 0 : H.volume
  );
}, ec = () => {
  var f;
  const { settings: c } = De(), { styles: g } = Ye();
  return /* @__PURE__ */ b.jsx("div", { className: "rcb-line-break-container", children: /* @__PURE__ */ b.jsx(
    "div",
    {
      style: g.chatHistoryLineBreakStyle,
      className: "rcb-line-break-text",
      "data-testid": "chat-history-line-break-text",
      children: (f = c.chatHistory) == null ? void 0 : f.chatHistoryLineBreakText
    }
  ) });
}, tc = () => {
  var f;
  const { settings: c } = De(), { styles: g } = Ye(), m = {
    borderTop: `4px solid ${(f = c.general) == null ? void 0 : f.primaryColor}`,
    ...g.loadingSpinnerStyle
  };
  return /* @__PURE__ */ b.jsx("div", { className: "rcb-spinner-container", children: /* @__PURE__ */ b.jsx("div", { style: m, className: "rcb-spinner" }) });
}, Oo = (f, c) => ({
  id: xA(),
  content: f,
  sender: c,
  type: typeof f == "string" ? "string" : "object",
  timestamp: (/* @__PURE__ */ new Date()).toUTCString()
});
let bs = !1, Il = "rcb-history", wA = 30, Ss = !1, CA = [];
const bA = async (f) => {
  if (Ss)
    return;
  const c = [], g = bs ? CA.length : 0;
  for (let A = f.length - 1; A >= g; A--) {
    const w = f[A];
    if (w.sender === "system" || (w.content !== "" && c.unshift(w), c.length === wA))
      break;
  }
  let m = c.map(ic);
  if (m.length < wA) {
    const A = wA - m.length;
    m = [...CA.slice(-A), ...m];
  }
  oc(m);
}, nc = (f) => {
  if (f != null)
    try {
      return JSON.parse(f);
    } catch {
      return [];
    }
  return [];
}, rc = () => CA, oc = (f) => {
  localStorage.setItem(Il, JSON.stringify(f));
}, ac = (f) => {
  var c, g, m;
  Il = (c = f.chatHistory) == null ? void 0 : c.storageKey, wA = (g = f.chatHistory) == null ? void 0 : g.maxEntries, Ss = (m = f.chatHistory) == null ? void 0 : m.disabled, CA = nc(localStorage.getItem(Il));
}, ic = (f) => k.isValidElement(f.content) ? structuredClone({
  id: f.id,
  content: Fo.renderToString(f.content),
  type: f.type,
  sender: f.sender,
  timestamp: f.timestamp
}) : f, Ac = (f, c, g, m, A, w, P) => {
  var E;
  if (bs = !0, g != null)
    try {
      m((C) => {
        const H = Oo(/* @__PURE__ */ b.jsx(tc, {}), "system");
        return C.shift(), [H, ...C];
      });
      const y = g.map((C) => {
        if (C.type === "object") {
          const H = xs(C.content, f, c);
          return { ...C, content: H };
        }
        return C;
      });
      setTimeout(() => {
        m((C) => {
          var H;
          C.shift();
          let B;
          return (H = f.chatHistory) != null && H.autoLoad ? B = Oo(/* @__PURE__ */ b.jsx(b.Fragment, {}), "system") : B = Oo(/* @__PURE__ */ b.jsx(ec, {}), "system"), [...y, B, ...C];
        });
      }, 500), setTimeout(() => {
        if (!A.current)
          return;
        const { scrollHeight: C } = A.current, H = C - w;
        A.current.scrollTop = A.current.scrollTop + H, P(!1);
      }, 510);
    } catch {
      localStorage.removeItem((E = f.chatHistory) == null ? void 0 : E.storageKey);
    }
}, xs = (f, c, g) => {
  const m = new DOMParser().parseFromString(f, "text/html");
  return Array.from(m.body.childNodes).map((A, w) => {
    var P;
    if (A.nodeType === Node.TEXT_NODE)
      return A.textContent;
    {
      const E = A.tagName.toLowerCase();
      let y = Array.from(A.attributes).reduce((H, B) => {
        const Q = B.name.toLowerCase();
        if (Q === "style") {
          const U = B.value.split(";").filter((_) => _.trim() !== ""), L = {};
          U.forEach((_) => {
            const [F, T] = _.split(":").map((te) => te.trim()), K = F.replace(/-([a-z])/g, (te, X) => X.toUpperCase());
            L[K] = T;
          }), H[Q] = L;
        } else
          (E === "audio" || E === "video") && Q === "controls" && B.value === "" ? H[Q] = "true" : H[Q] = B.value;
        return H;
      }, {});
      const C = A.classList;
      if ((P = c.botBubble) != null && P.showAvatar && (y = lc(C, y)), y = sc(C, y, c, g), y = uc(C, y, c, g), y = cc(C, y, c, g), y = dc(C, y, c, g), [
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
        return k.createElement(E, { key: w, ...y });
      {
        const H = xs(A.innerHTML, c, g);
        return k.createElement(E, { key: w, ...y }, ...H);
      }
    }
  });
}, lc = (f, c) => ((f.contains("rcb-options-container") || f.contains("rcb-checkbox-container")) && (Object.prototype.hasOwnProperty.call(c, "class") ? c.class = `${f.toString()} rcb-options-offset` : c.class = "rcb-options-offset"), c), sc = (f, c, g, m) => {
  var A, w, P, E, y;
  return f.contains("rcb-options") && (c.style = {
    ...c.style,
    color: ((A = m.botOptionStyle) == null ? void 0 : A.color) ?? ((w = g.general) == null ? void 0 : w.primaryColor),
    borderColor: ((P = m.botOptionStyle) == null ? void 0 : P.color) ?? ((E = g.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(y = g.general) == null ? void 0 : y.actionDisabledIcon}), auto`,
    ...m.botOptionStyle
  }), c;
}, uc = (f, c, g, m) => {
  var A, w, P, E, y;
  return f.contains("rcb-checkbox-row-container") && (c.style = {
    ...c.style,
    color: ((A = m.botCheckboxRowStyle) == null ? void 0 : A.color) ?? ((w = g.general) == null ? void 0 : w.primaryColor),
    borderColor: ((P = m.botCheckboxRowStyle) == null ? void 0 : P.color) ?? ((E = g.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(y = g.general) == null ? void 0 : y.actionDisabledIcon}), auto`,
    ...m.botCheckboxRowStyle
  }), c;
}, cc = (f, c, g, m) => {
  var A, w, P, E, y;
  return f.contains("rcb-checkbox-next-button") && (c.style = {
    ...c.style,
    color: ((A = m.botCheckboxNextStyle) == null ? void 0 : A.color) ?? ((w = g.general) == null ? void 0 : w.primaryColor),
    borderColor: ((P = m.botCheckboxNextStyle) == null ? void 0 : P.color) ?? ((E = g.general) == null ? void 0 : E.primaryColor),
    cursor: `url(${(y = g.general) == null ? void 0 : y.actionDisabledIcon}), auto`,
    ...m.botCheckboxNextStyle
  }), c;
}, dc = (f, c, g, m) => {
  var A, w;
  return (f.contains("rcb-media-display-image-container") || f.contains("rcb-media-display-video-container")) && (c.style = {
    ...c.style,
    backgroundColor: (A = g.general) == null ? void 0 : A.primaryColor,
    maxWidth: (w = g.userBubble) != null && w.showAvatar ? "65%" : "70%",
    ...m.mediaDisplayContainerStyle
  }), c;
}, Es = (f) => {
  if (!f)
    return !1;
  const c = f.getBoundingClientRect(), g = window.innerHeight ?? document.documentElement.clientHeight, m = window.innerWidth ?? document.documentElement.clientWidth;
  return c.top >= 0 && c.left >= 0 && c.bottom <= g && c.right <= m;
}, Fl = () => {
  const { settings: f } = De(), {
    notificationsToggledOn: c,
    setNotificationsToggledOn: g,
    hasInteractedPage: m,
    unreadCount: A,
    setUnreadCount: w
  } = gt(), { audioBufferRef: P, audioContextRef: E, gainNodeRef: y } = bt(), { callRcbEvent: C } = Wn(), H = k.useCallback(async () => {
    var U, L;
    const _ = (U = f.notification) == null ? void 0 : U.sound;
    E.current = new AudioContext();
    const F = E.current.createGain();
    F.gain.value = ((L = f.notification) == null ? void 0 : L.volume) ?? 0.2, y.current = F;
    let T;
    if (_ != null && _.startsWith("data:audio")) {
      const K = atob(_.split(",")[1]), te = new ArrayBuffer(K.length), X = new Uint8Array(te);
      for (let G = 0; G < K.length; G++)
        X[G] = K.charCodeAt(G);
      T = te;
    } else
      T = await (await fetch(_)).arrayBuffer();
    P.current = await E.current.decodeAudioData(T);
  }, [f.notification]), B = k.useCallback(() => {
    var U;
    if ((U = f.notification) != null && U.disabled || !c || !m || !E.current || !P.current)
      return;
    const L = E.current.createBufferSource();
    L.buffer = P.current, L.connect(y.current).connect(E.current.destination), L.start();
  }, [
    f.notification,
    c,
    m,
    E,
    P,
    y
  ]), Q = k.useCallback(() => {
    var U;
    (U = f.event) != null && U.rcbToggleNotifications && C(
      Ee.TOGGLE_NOTIFICATIONS,
      { currState: c, newState: !c }
    ).defaultPrevented || g((L) => !L);
  }, []);
  return {
    unreadCount: A,
    setUnreadCount: w,
    notificationsToggledOn: c,
    toggleNotifications: Q,
    playNotificationSound: B,
    setUpNotifications: H
  };
}, BA = () => {
  var f, c, g, m;
  const { settings: A } = De(), { messages: w, setMessages: P } = jl(), {
    audioToggledOn: E,
    isChatWindowOpen: y,
    isScrolling: C,
    setIsBotTyping: H,
    setUnreadCount: B
  } = gt(), { streamMessageMap: Q, chatBodyRef: U } = bt(), { callRcbEvent: L } = Wn(), { playNotificationSound: _ } = Fl(), F = k.useCallback(async (Z, re, ne) => {
    H(!1), P((ve) => {
      const de = [...ve, Z];
      return $(de), de;
    }), Q.current.set("bot", Z.id);
    let Ae = Z.content;
    ne && (Ae = Ju(Ae));
    let ae = 0;
    const ce = Ae.length;
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
              const se = Ae[ae];
              se && (Z.content += se, Ce[ee] = Z), ae++;
              break;
            }
          return Ce;
        });
      }, re);
    }), Q.current.delete("bot"), bA(w);
  }, [w, Q]), T = k.useCallback(async (Z, re = "bot") => {
    var ne, Ae, ae, ce, ve, de, Me, Ce;
    let ee = Oo(Z, re);
    if ((ne = A.event) != null && ne.rcbPreInjectMessage) {
      const oe = L(Ee.PRE_INJECT_MESSAGE, { message: ee });
      if (oe.defaultPrevented)
        return null;
      ee = oe.data.message;
    }
    let se = !1;
    re === "bot" ? se = (Ae = A.botBubble) == null ? void 0 : Ae.dangerouslySetInnerHtml : re === "user" && (se = (ae = A.userBubble) == null ? void 0 : ae.dangerouslySetInnerHtml), qu(A, E, y, ee, se);
    const fe = typeof ee.content == "string" && ee.sender === "bot" && ((ce = A == null ? void 0 : A.botBubble) == null ? void 0 : ce.simStream), be = typeof ee.content == "string" && ee.sender === "user" && ((ve = A == null ? void 0 : A.userBubble) == null ? void 0 : ve.simStream);
    if (B((oe) => oe + 1), (de = A.event) != null && de.rcbPostInjectMessage && L(Ee.POST_INJECT_MESSAGE, { message: ee }), fe) {
      const oe = (Me = A.botBubble) == null ? void 0 : Me.streamSpeed;
      await F(ee, oe, se);
    } else if (be) {
      const oe = (Ce = A.userBubble) == null ? void 0 : Ce.streamSpeed;
      await F(ee, oe, se);
    } else
      P((oe) => {
        const me = [...oe, ee];
        return $(me), me;
      });
    return ee.id;
  }, [A, E, y, L, F]), K = k.useCallback(async (Z) => {
    var re;
    const ne = w.find((Ae) => Ae.id === Z);
    return !ne || (re = A.event) != null && re.rcbRemoveMessage && L(Ee.REMOVE_MESSAGE, { message: ne }).defaultPrevented ? null : (P((Ae) => {
      const ae = Ae.filter((ce) => ce.id !== Z);
      return $(ae), ae;
    }), B((Ae) => Math.max(Ae - 1, 0)), Z);
  }, [L, w, (f = A.event) == null ? void 0 : f.rcbRemoveMessage]), te = k.useCallback(async (Z, re = "bot") => {
    var ne, Ae;
    if (!Q.current.has(re)) {
      const ce = Oo(Z, re);
      return (ne = A.event) != null && ne.rcbStartStreamMessage && L(Ee.START_STREAM_MESSAGE, { message: ce }).defaultPrevented ? null : (H(!1), P((ve) => {
        const de = [...ve, ce];
        return $(de), [...ve, ce];
      }), B((ve) => ve + 1), Q.current.set(re, ce.id), ce.id);
    }
    const ae = { ...Oo(Z, re), id: Q.current.get(re) };
    return (Ae = A.event) != null && Ae.rcbChunkStreamMessage && L(
      Ee.CHUNK_STREAM_MESSAGE,
      { ...ae, id: Q.current.get(re) }
    ).defaultPrevented ? null : (P((ce) => {
      const ve = [...ce];
      for (let de = ve.length - 1; de >= 0; de--)
        if (ve[de].sender === re && typeof ve[de].content == typeof Z) {
          ve[de] = ae;
          break;
        }
      return $(ve), ve;
    }), Q.current.get(re) ?? null);
  }, [L, (c = A.event) == null ? void 0 : c.rcbChunkStreamMessage, (g = A.event) == null ? void 0 : g.rcbStartStreamMessage, Q]), X = k.useCallback(async (Z = "bot") => {
    var re;
    if (!Q.current.has(Z))
      return !0;
    const ne = Q.current.get(Z), Ae = w.find((ae) => ae.id === ne);
    return (re = A.event) != null && re.rcbStopStreamMessage && L(Ee.STOP_STREAM_MESSAGE, { messageToEndStreamFor: Ae }).defaultPrevented ? !1 : (Q.current.delete(Z), bA(w), !0);
  }, [L, w, (m = A.event) == null ? void 0 : m.rcbStopStreamMessage, Q]), G = (Z) => {
    $(Z), P(Z);
  }, $ = (Z) => {
    var re, ne;
    bA(Z);
    let Ae = !0;
    (Z.length === 0 || y && !C) && (Ae = !1), (re = A.general) != null && re.embedded && Es(U.current) && (Ae = !1);
    const ae = Z[Z.length - 1];
    (!ae || ae.sender === "user") && (Ae = !1), Ae && _(), ((ne = A.chatWindow) != null && ne.autoJumpToBottom || !C) && setTimeout(() => {
      U.current && (U.current.scrollTop = U.current.scrollHeight);
    }, 1);
  };
  return {
    endStreamMessage: X,
    injectMessage: T,
    removeMessage: K,
    streamMessage: te,
    messages: w,
    replaceMessages: G
  };
};
let Pl, Un, SA, Jr = !1, zn = null;
const Ll = () => {
  if (!Pl) {
    const f = window.SpeechRecognition || window.webkitSpeechRecognition;
    Pl = f != null ? new f() : null;
  }
  return Pl;
}, fc = (f, c, g, m, A, w, P) => {
  var E;
  (E = f.voice) != null && E.sendAsAudio ? pc(g, w) : hc(
    f,
    c,
    g,
    m,
    A,
    P
  );
}, hc = (f, c, g, m, A, w) => {
  var P, E, y;
  const C = Ll();
  if (!C)
    return;
  if (!Jr)
    try {
      Jr = !0, C.lang = (P = f.voice) == null ? void 0 : P.language, C.start();
    } catch {
    }
  const H = (E = f.voice) == null ? void 0 : E.timeoutPeriod, B = (y = f.voice) == null ? void 0 : y.autoSendPeriod;
  C.onresult = (Q) => {
    var U, L;
    clearTimeout(Un), Un = null, clearTimeout(SA);
    const _ = Q.results[Q.results.length - 1][0].transcript;
    if (w.current) {
      const F = (U = f.chatInput) == null ? void 0 : U.characterLimit, T = w.current.value + _;
      F != null && F >= 0 && T.length > F ? m(T.slice(0, F)) : m(T), A(w.current.value.length);
    }
    Un = setTimeout(() => kl(c, w), H), (L = f.voice) != null && L.autoSendDisabled || (SA = setTimeout(g, B));
  }, C.onend = () => {
    Jr ? (C.start(), Un || (Un = setTimeout(() => kl(c, w), H))) : (clearTimeout(Un), Un = null, clearTimeout(SA));
  }, Un = setTimeout(() => kl(c, w), H);
}, pc = (f, c) => {
  navigator.mediaDevices.getUserMedia({ audio: !0 }).then((g) => {
    if (zn = new MediaRecorder(g), !Jr)
      try {
        Jr = !0, zn.start();
      } catch {
      }
    zn.ondataavailable = (m) => {
      c.current && c.current.push(m.data);
    }, zn.onstop = () => {
      f(), g.getTracks().forEach((m) => m.stop());
    };
  }).catch((g) => {
    console.error("Unable to use microphone:", g);
  });
}, Hl = () => {
  const f = Ll();
  f && (Jr = !1, f && f.stop(), zn && zn.state !== "inactive" && (zn.stop(), zn = null), clearTimeout(Un), Un = null, clearTimeout(SA));
}, vc = (f, c) => {
  var g, m, A;
  const w = Ll();
  (g = c.voice) != null && g.disabled || !((m = c.chatInput) != null && m.blockSpam) || !w || (f && !Jr ? (Jr = !0, (A = c.voice) != null && A.sendAsAudio ? zn == null || zn.start() : w.start()) : f || Hl());
}, kl = (f, c) => {
  var g;
  (g = c.current) != null && g.disabled || f(), Hl();
}, Nl = () => {
  const { settings: f } = De(), { voiceToggledOn: c, setVoiceToggledOn: g } = gt(), { callRcbEvent: m } = Wn(), A = k.useCallback(() => {
    var P;
    (P = f.event) != null && P.rcbToggleVoice && m(Ee.TOGGLE_VOICE, { currState: c, newState: !c }).defaultPrevented || g((E) => !E);
  }, []), w = k.useCallback((P) => {
    vc(P, f);
  }, [f]);
  return {
    voiceToggledOn: c,
    toggleVoice: A,
    syncVoice: w
  };
}, La = () => {
  const { settings: f } = De(), {
    inputLength: c,
    setInputLength: g,
    textAreaDisabled: m,
    setTextAreaDisabled: A,
    textAreaSensitiveMode: w,
    setTextAreaSensitiveMode: P
  } = gt(), { inputRef: E, chatBodyRef: y, prevInputRef: C } = bt(), { callRcbEvent: H } = Wn(), B = (_) => {
    var F, T, K;
    if (m && E.current) {
      E.current.value = "";
      return;
    }
    if (E.current && C.current !== null) {
      const te = (F = f.chatInput) == null ? void 0 : F.characterLimit, X = (T = f.chatInput) != null && T.allowNewline ? _ : _.replace(/\n/g, " ");
      if (te != null && te >= 0 && X.length > te ? E.current.value = X.slice(0, te) : E.current.value = X, (K = f.event) != null && K.rcbTextAreaChangeValue && H(
        Ee.TEXT_AREA_CHANGE_VALUE,
        { currValue: E.current.value, prevValue: C.current }
      ).defaultPrevented) {
        E.current.value = C.current;
        return;
      }
      C.current = E.current.value;
    }
  }, Q = k.useCallback((_) => {
    var F;
    (F = E.current) != null && F.disabled || setTimeout(() => {
      var T, K, te;
      (T = f.general) != null && T.embedded ? Es(y == null ? void 0 : y.current) && ((K = E.current) == null || K.focus()) : _ !== "start" && ((te = E.current) == null || te.focus());
    }, 100);
  }, []), U = k.useCallback(() => {
    !m && E.current && E.current.focus();
  }, [m]), L = k.useCallback(() => E && E.current ? E.current.value : "", []);
  return {
    textAreaDisabled: m,
    setTextAreaDisabled: A,
    textAreaSensitiveMode: w,
    setTextAreaSensitiveMode: P,
    inputLength: c,
    setInputLength: g,
    getTextAreaValue: L,
    setTextAreaValue: B,
    updateTextAreaFocus: Q,
    focusTextArea: U,
    toggleTextAreaDisabled: () => {
      A((_) => !_);
    },
    toggleTextAreaSensitiveMode: () => {
      P((_) => !_);
    }
  };
}, Ha = () => {
  var f, c, g, m;
  const { settings: A } = De(), { endStreamMessage: w, injectMessage: P, removeMessage: E, streamMessage: y } = BA(), { getCurrPath: C, getPrevPath: H, goToPath: B } = PA(), {
    timeoutId: Q,
    voiceToggledOn: U,
    setTextAreaSensitiveMode: L,
    textAreaSensitiveMode: _,
    setTextAreaDisabled: F,
    setIsBotTyping: T,
    setBlockAllowsAttachment: K,
    setInputLength: te
  } = gt(), { flowRef: X, chatBodyRef: G, inputRef: $, keepVoiceOnRef: Z, paramsInputRef: re } = bt(), { showToast: ne, dismissToast: Ae } = kA(), { callRcbEvent: ae } = Wn(), { syncVoice: ce } = Nl(), { setTextAreaValue: ve } = La(), { openChat: de } = gr(), Me = k.useCallback(async (ee) => {
    var se, fe, be;
    const oe = C();
    if (!(!oe || !X.current[oe])) {
      if (_) {
        if ((se = A == null ? void 0 : A.sensitiveInput) != null && se.hideInUserBubble)
          return;
        if ((fe = A == null ? void 0 : A.sensitiveInput) != null && fe.maskInUserBubble) {
          await P("*".repeat(((be = A.sensitiveInput) == null ? void 0 : be.asterisksCount) ?? 10), "user");
          return;
        }
      }
      await P(ee, "user");
    }
  }, [X, C, A, P, _]), Ce = k.useCallback(async (ee, se, fe = !0) => {
    var be, oe;
    se = se.trim(), se !== "" && (fe && await Me(se), Q && clearTimeout(Q), re.current = se, G.current && (G.current.scrollTop = G.current.scrollHeight), $.current && (ve(""), te(0)), (be = A.chatInput) != null && be.blockSpam && F(!0), Z.current = U, ce(!1), setTimeout(() => {
      T(!0);
    }, 400), L(!1), setTimeout(async () => {
      var me;
      const Oe = {
        prevPath: H(),
        currPath: C(),
        goToPath: B,
        setTextAreaValue: ve,
        userInput: se,
        injectMessage: P,
        streamMessage: y,
        removeMessage: E,
        endStreamMessage: w,
        openChat: de,
        showToast: ne,
        dismissToast: Ae
      };
      if (!await ws(X.current, ee, Oe, B)) {
        const Se = C();
        if (!Se)
          return;
        const le = X.current[Se];
        if (!le)
          return;
        le.chatDisabled || F((me = A.chatInput) == null ? void 0 : me.disabled), ys(le, L, Oe), K(typeof le.file == "function"), ce(Z.current), T(!1);
      }
    }, (oe = A.chatInput) == null ? void 0 : oe.botDelay));
  }, [
    Q,
    (f = A.chatInput) == null ? void 0 : f.blockSpam,
    (c = A.chatInput) == null ? void 0 : c.botDelay,
    (g = A.chatInput) == null ? void 0 : g.disabled,
    Z,
    U,
    ce,
    Me,
    H,
    C,
    B,
    P,
    y,
    E,
    w,
    de,
    ne,
    Ae,
    X
  ]);
  return { handleSubmitText: k.useCallback(async (ee, se = !0) => {
    var fe, be;
    if (ee = ee ?? ((fe = $.current) == null ? void 0 : fe.value), (be = A.event) != null && be.rcbUserSubmitText && ae(Ee.USER_SUBMIT_TEXT, { inputText: ee, sendInChat: se }).defaultPrevented)
      return;
    const oe = C();
    oe && Ce(oe, ee, se);
  }, [ae, C, Ce, $, (m = A.event) == null ? void 0 : m.rcbUserSubmitText]) };
}, TA = () => {
  var f;
  const { settings: c } = De();
  return k.useMemo(() => {
    var g;
    if (typeof window > "u" || !window.navigator)
      return !1;
    if (!((g = c.device) != null && g.applyMobileOptimizations))
      return !0;
    const m = navigator.userAgent, A = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(m), w = window.innerWidth >= 768;
    return A && w;
  }, [(f = c.device) == null ? void 0 : f.applyMobileOptimizations]);
}, gc = ({ buttons: f }) => {
  var c, g, m, A, w, P, E, y, C, H, B;
  const Q = TA(), { settings: U } = De(), { styles: L } = Ye(), {
    textAreaDisabled: _,
    textAreaSensitiveMode: F,
    inputLength: T,
    hasFlowStarted: K,
    setHasFlowStarted: te,
    setInputLength: X
  } = gt(), { inputRef: G } = bt(), [$, Z] = k.useState(!1), [re, ne] = k.useState(!1), { handleSubmitText: Ae } = Ha(), { setTextAreaValue: ae } = La(), ce = {
    boxSizing: Q ? "content-box" : "border-box",
    ...L.chatInputAreaStyle
  }, ve = {
    outline: _ ? "" : "none",
    boxShadow: _ ? "" : `0 0 5px ${(c = U.general) == null ? void 0 : c.primaryColor}`,
    boxSizing: Q ? "content-box" : "border-box",
    ...L.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...L.chatInputAreaFocusedStyle
  }, de = {
    cursor: `url(${(g = U.general) == null ? void 0 : g.actionDisabledIcon}), auto`,
    caretColor: "transparent",
    boxSizing: Q ? "content-box" : "border-box",
    ...L.chatInputAreaStyle,
    // by default inherit the base style for input area
    ...L.chatInputAreaDisabledStyle
  }, Me = {
    color: "#989898",
    ...L.characterLimitStyle
  }, Ce = {
    color: "#ff0000",
    ...L.characterLimitReachedStyle
  }, ee = _ ? (m = U.chatInput) == null ? void 0 : m.disabledPlaceholderText : (A = U.chatInput) == null ? void 0 : A.enabledPlaceholderText, se = () => {
    _ || Z(!0);
  }, fe = () => {
    Z(!1);
  }, be = () => {
    ne(!0);
  }, oe = () => {
    ne(!1);
  }, me = async (Se) => {
    var le;
    if (!re && Se.key === "Enter") {
      if (Se.shiftKey) {
        (le = U.chatInput) != null && le.allowNewline || Se.preventDefault();
        return;
      }
      Se.preventDefault(), await Ae();
    }
  }, Oe = (Se) => {
    G.current && (ae(Se.target.value), X(G.current.value.length));
  };
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      "aria-label": ((w = U.ariaLabel) == null ? void 0 : w.inputTextArea) ?? "input text area",
      role: "textbox",
      onMouseDown: (Se) => {
        var le;
        Se.stopPropagation(), !K && ((le = U.general) == null ? void 0 : le.flowStartTrigger) === "ON_CHATBOT_INTERACT" && te(!0);
      },
      style: L.chatInputContainerStyle,
      className: "rcb-chat-input",
      children: [
        F && (P = U.sensitiveInput) != null && P.maskInTextArea ? /* @__PURE__ */ b.jsx(
          "input",
          {
            ref: G,
            type: "password",
            className: "rcb-chat-input-textarea",
            style: _ ? de : $ ? ve : ce,
            placeholder: ee,
            onChange: Oe,
            onKeyDown: me,
            onFocus: se,
            onBlur: fe,
            onCompositionStart: be,
            onCompositionEnd: oe
          }
        ) : /* @__PURE__ */ b.jsx(
          "textarea",
          {
            ref: G,
            style: _ ? de : $ ? ve : ce,
            rows: 1,
            className: "rcb-chat-input-textarea",
            placeholder: ee,
            onChange: Oe,
            onKeyDown: me,
            onFocus: se,
            onBlur: fe,
            onCompositionStart: be,
            onCompositionEnd: oe
          }
        ),
        /* @__PURE__ */ b.jsxs("div", { className: "rcb-chat-input-button-container", children: [
          f == null ? void 0 : f.map(
            (Se, le) => /* @__PURE__ */ b.jsx(k.Fragment, { children: Se }, le)
          ),
          ((E = U.chatInput) == null ? void 0 : E.showCharacterCount) && ((y = U.chatInput) == null ? void 0 : y.characterLimit) != null && ((C = U.chatInput) == null ? void 0 : C.characterLimit) > 0 && /* @__PURE__ */ b.jsxs(
            "div",
            {
              className: "rcb-chat-input-char-counter",
              style: T >= ((H = U.chatInput) == null ? void 0 : H.characterLimit) ? Ce : Me,
              children: [
                T,
                "/",
                (B = U.chatInput) == null ? void 0 : B.characterLimit
              ]
            }
          )
        ] })
      ]
    }
  );
}, mc = ({ buttons: f }) => {
  var c;
  const { settings: g } = De(), { styles: m } = Ye();
  return /* @__PURE__ */ b.jsxs("div", { "data-testid": "chatbot-footer-container", style: m.footerStyle, className: "rcb-chat-footer-container", children: [
    /* @__PURE__ */ b.jsx("div", { className: "rcb-chat-footer", children: f == null ? void 0 : f.map(
      (A, w) => /* @__PURE__ */ b.jsx(k.Fragment, { children: A }, w)
    ) }),
    /* @__PURE__ */ b.jsx("span", { children: (c = g.footer) == null ? void 0 : c.text })
  ] });
}, yc = () => {
  var f, c, g, m, A, w, P;
  const { settings: E } = De(), { styles: y } = Ye(), { unreadCount: C } = gt(), { isChatWindowOpen: H, toggleChatWindow: B } = gr(), Q = {
    backgroundImage: `linear-gradient(to right, ${(f = E.general) == null ? void 0 : f.secondaryColor},
			${(c = E.general) == null ? void 0 : c.primaryColor})`,
    ...y.chatButtonStyle
  }, U = {
    backgroundImage: `url(${(g = E.chatButton) == null ? void 0 : g.icon})`,
    fill: "#fff",
    width: 75,
    height: 75,
    ...y.chatIconStyle
  }, L = () => {
    var _;
    const F = (_ = E.chatButton) == null ? void 0 : _.icon;
    return !F || typeof F == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-toggle-icon",
        style: U
      }
    ) : F && /* @__PURE__ */ b.jsx("span", { className: "rcb-toggle-icon", children: /* @__PURE__ */ b.jsx(F, { style: U }) });
  };
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: !((m = E.general) != null && m.embedded) && /* @__PURE__ */ b.jsxs(
    "div",
    {
      "aria-label": ((A = E.ariaLabel) == null ? void 0 : A.chatButton) ?? "open chat",
      role: "button",
      style: Q,
      className: `rcb-toggle-button ${H ? "rcb-button-hide" : "rcb-button-show"}`,
      onClick: B,
      children: [
        L(),
        !((w = E.notification) != null && w.disabled) && ((P = E.notification) == null ? void 0 : P.showCount) && /* @__PURE__ */ b.jsx("span", { style: y.notificationBadgeStyle, className: "rcb-badge", children: C })
      ]
    }
  ) });
}, wc = () => {
  var f, c, g, m;
  const A = TA(), { settings: w } = De(), { styles: P } = Ye(), { isChatWindowOpen: E, openChat: y } = gr(), [C, H] = k.useState(!1), [B, Q] = k.useState(!1), [U, L] = k.useState(0);
  k.useEffect(() => {
    var T, K, te;
    const X = (T = w.tooltip) == null ? void 0 : T.mode;
    if (X === "ALWAYS")
      if (A) {
        let G;
        E ? G = (((K = P.chatWindowStyle) == null ? void 0 : K.width) ?? 375) - (((te = P.chatButtonStyle) == null ? void 0 : te.width) ?? 75) : G = 0, L(G), H(!0);
      } else
        H(!E);
    else
      X === "NEVER" ? H(!1) : X === "START" ? B ? H(!1) : (Q(!0), H(!0)) : X === "CLOSE" && H(!E);
  }, [E]);
  const _ = {
    transform: `translateX(-${U}px)`,
    right: (((f = P.chatButtonStyle) == null ? void 0 : f.width) ?? 75) + 40,
    bottom: 30,
    backgroundColor: (c = w.general) == null ? void 0 : c.secondaryColor,
    color: "#fff",
    ...P.tooltipStyle
  }, F = {
    borderColor: `transparent transparent transparent ${_.backgroundColor}`
  };
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: !((g = w.general) != null && g.embedded) && /* @__PURE__ */ b.jsxs(
    "div",
    {
      "data-testid": "chat-tooltip",
      style: _,
      className: `rcb-chat-tooltip ${C ? "rcb-tooltip-show" : "rcb-tooltip-hide"}`,
      onClick: () => y(!0),
      children: [
        /* @__PURE__ */ b.jsx("span", { children: (m = w.tooltip) == null ? void 0 : m.text }),
        /* @__PURE__ */ b.jsx("span", { className: "rcb-chat-tooltip-tail", style: F })
      ]
    }
  ) });
}, Cs = ({
  file: f,
  fileType: c,
  fileUrl: g
}) => {
  var m, A, w;
  const { settings: P } = De(), { styles: E } = Ye(), y = {
    backgroundColor: (m = P.general) == null ? void 0 : m.primaryColor,
    maxWidth: (A = P.userBubble) != null && A.showAvatar ? "65%" : "70%",
    ...E.mediaDisplayContainerStyle
  };
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: g ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    c === "image" && g && /* @__PURE__ */ b.jsx(
      "div",
      {
        style: y,
        className: "rcb-media-display-image-container rcb-media-entry",
        "data-testid": "media-display-image-container",
        children: /* @__PURE__ */ b.jsx("img", { src: g, alt: "Image Display", className: "rcb-media-display-image" })
      }
    ),
    c === "video" && g && /* @__PURE__ */ b.jsx(
      "div",
      {
        style: y,
        className: "rcb-media-display-video-container rcb-media-entry",
        "data-testid": "media-display-video-container",
        children: /* @__PURE__ */ b.jsxs("video", { controls: !0, className: "rcb-media-display-video", children: [
          /* @__PURE__ */ b.jsx("source", { src: g, type: f.type }),
          "Your browser does not support the video tag."
        ] })
      }
    ),
    c === "audio" && g && /* @__PURE__ */ b.jsxs(
      "audio",
      {
        "data-testid": "media-display-audio-container",
        style: {
          maxWidth: (w = P.userBubble) != null && w.showAvatar ? "65%" : "70%"
        },
        controls: !0,
        className: "rcb-media-display-audio rcb-media-entry",
        children: [
          /* @__PURE__ */ b.jsx("source", { src: g, type: f.type }),
          "Your browser does not support the audio tag."
        ]
      }
    )
  ] }) : /* @__PURE__ */ b.jsx(b.Fragment, {}) });
}, Ds = async (f) => {
  if (!f)
    return { fileType: null, fileUrl: null };
  const c = f.type.split("/")[0];
  if (!["image", "video", "audio"].includes(c))
    return { fileType: null, fileUrl: null };
  try {
    const g = await new Promise((m, A) => {
      const w = new FileReader();
      w.onload = () => m(w.result), w.onerror = () => A(new Error("File reading failed")), w.readAsDataURL(f);
    });
    return { fileType: c, fileUrl: g };
  } catch {
    return { fileType: null, fileUrl: null };
  }
}, bc = () => {
  var f, c, g, m, A, w;
  const { settings: P } = De(), { styles: E } = Ye(), { injectMessage: y, streamMessage: C, removeMessage: H, endStreamMessage: B } = BA(), { getCurrPath: Q, getPrevPath: U, goToPath: L, blockAllowsAttachment: _ } = PA(), { flowRef: F, inputRef: T } = bt(), K = F.current, { showToast: te, dismissToast: X } = kA(), { callRcbEvent: G } = Wn(), { openChat: $ } = gr(), { setTextAreaValue: Z } = La(), { handleSubmitText: re } = Ha(), ne = {
    cursor: `url(${(f = P.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...E.fileAttachmentButtonStyle,
    // by default inherit the base style
    ...E.fileAttachmentButtonDisabledStyle
  }, Ae = {
    backgroundImage: `url(${(c = P.fileAttachment) == null ? void 0 : c.icon})`,
    fill: "#a6a6a6",
    ...E.fileAttachmentIconStyle
  }, ae = {
    backgroundImage: `url(${(g = P.fileAttachment) == null ? void 0 : g.icon})`,
    fill: "#a6a6a6",
    ...E.fileAttachmentIconStyle,
    // by default inherit the base style
    ...E.fileAttachmentIconDisabledStyle
  }, ce = async (de) => {
    var Me, Ce, ee, se;
    const fe = de.target.files;
    if (!fe || (Me = P.event) != null && Me.rcbUserUploadFile && G(Ee.USER_UPLOAD_FILE, { files: fe }).defaultPrevented)
      return;
    const be = Q();
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
        const le = await Ds(fe[Se]);
        !le.fileType || !le.fileUrl || await y(/* @__PURE__ */ b.jsx(
          Cs,
          {
            file: fe[Se],
            fileType: le.fileType,
            fileUrl: le.fileUrl
          }
        ), "user");
      }
      await re("📄 " + Oe.join(", "), (ee = P.fileAttachment) == null ? void 0 : ee.sendFileName), await me({
        userInput: (se = T.current) == null ? void 0 : se.value,
        prevPath: U(),
        currPath: Q(),
        goToPath: L,
        setTextAreaValue: Z,
        injectMessage: y,
        streamMessage: C,
        removeMessage: H,
        endStreamMessage: B,
        openChat: $,
        showToast: te,
        dismissToast: X,
        files: fe
      });
    }
  }, ve = () => {
    var de, Me;
    const Ce = _ ? (de = P.fileAttachment) == null ? void 0 : de.icon : (Me = P.fileAttachment) == null ? void 0 : Me.iconDisabled;
    return !Ce || typeof Ce == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled",
        style: _ ? Ae : ae
      }
    ) : Ce && /* @__PURE__ */ b.jsx("span", { className: _ ? "rcb-attach-icon-enabled" : "rcb-attach-icon-disabled", children: /* @__PURE__ */ b.jsx(
      Ce,
      {
        style: _ ? Ae : ae
      }
    ) });
  };
  return /* @__PURE__ */ b.jsxs(
    "label",
    {
      "aria-label": ((m = P.ariaLabel) == null ? void 0 : m.fileAttachmentButton) ?? "upload file",
      role: "button",
      className: _ ? "rcb-attach-button-enabled" : "rcb-attach-button-disabled",
      style: _ ? E.fileAttachmentButtonStyle : ne,
      children: [
        /* @__PURE__ */ b.jsx(
          "input",
          {
            className: "rcb-attach-input",
            type: "file",
            onChange: ce,
            multiple: (A = P.fileAttachment) == null ? void 0 : A.multiple,
            accept: (w = P.fileAttachment) == null ? void 0 : w.accept,
            disabled: !_
          }
        ),
        ve()
      ]
    }
  );
}, Sc = () => {
  var f, c, g, m, A, w;
  const { settings: P } = De(), { styles: E } = Ye(), { inputRef: y } = bt(), { textAreaDisabled: C, setTextAreaValue: H } = La(), B = k.useRef(null), Q = k.useRef(null), [U, L] = k.useState(!1), _ = {
    cursor: `url(${(f = P.general) == null ? void 0 : f.actionDisabledIcon}), auto`,
    ...E.emojiButtonStyle,
    // by default inherit the base style
    ...E.emojiButtonDisabledStyle
  }, F = {
    backgroundImage: `url(${(c = P.emoji) == null ? void 0 : c.icon})`,
    fill: "#a6a6a6",
    ...E.emojiIconStyle
  }, T = {
    backgroundImage: `url(${(g = P.emoji) == null ? void 0 : g.icon})`,
    fill: "#a6a6a6",
    ...E.emojiIconStyle,
    // by default inherit the base style
    ...E.emojiIconDisabledStyle
  };
  k.useEffect(() => {
    const G = (re) => {
      const ne = re.composedPath();
      B.current && !ne.includes(B.current) && Q.current && !ne.includes(Q.current) && L(!1);
    }, $ = () => {
      if (B.current && Q.current) {
        const re = Q.current.getBoundingClientRect(), ne = B.current.offsetHeight, Ae = re.top - ne - 8;
        B.current.style.left = `${re.left}px`, B.current.style.top = `${Ae}px`;
      }
    }, Z = () => {
      $();
    };
    return document.addEventListener("mousedown", G), window.addEventListener("resize", Z), () => {
      document.removeEventListener("mousedown", G), window.removeEventListener("resize", Z);
    };
  }, []);
  const K = (G, $) => {
    G.preventDefault(), y.current && (H(y.current.value + $), setTimeout(() => {
      const Z = y.current;
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
    return !Z || typeof Z == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: `${C ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`,
        style: C ? T : F
      }
    ) : Z && /* @__PURE__ */ b.jsx("span", { className: `${C ? "rcb-emoji-icon-disabled" : "rcb-emoji-icon-enabled"}`, children: /* @__PURE__ */ b.jsx(Z, { style: C ? T : F }) });
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      "div",
      {
        "aria-label": ((m = P.ariaLabel) == null ? void 0 : m.emojiButton) ?? "emoji picker",
        role: "button",
        ref: Q,
        className: `${C ? "rcb-emoji-button-disabled" : "rcb-emoji-button-enabled"}`,
        style: C ? _ : E.emojiButtonStyle,
        onMouseDown: te,
        children: X()
      }
    ),
    U && /* @__PURE__ */ b.jsx("div", { className: "rcb-emoji-button-popup", ref: B, children: (w = (A = P.emoji) == null ? void 0 : A.list) == null ? void 0 : w.map((G, $) => /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-emoji",
        onMouseDown: (Z) => K(Z, G),
        children: G
      },
      $
    )) })
  ] });
}, xc = () => {
  const { settings: f } = De(), { audioToggledOn: c, setAudioToggledOn: g } = gt(), { callRcbEvent: m } = Wn(), A = k.useCallback(() => {
    var w;
    (w = f.event) != null && w.rcbToggleAudio && m(Ee.TOGGLE_AUDIO, { currState: c, newState: !c }).defaultPrevented || g((P) => !P);
  }, []);
  return {
    audioToggledOn: c,
    toggleAudio: A
  };
}, Ec = () => {
  var f, c, g;
  const { settings: m } = De(), { styles: A } = Ye(), { audioToggledOn: w, toggleAudio: P } = xc(), E = {
    backgroundImage: `url(${(f = m.audio) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...A.audioIconStyle
  }, y = {
    backgroundImage: `url(${(c = m.audio) == null ? void 0 : c.iconDisabled})`,
    fill: "#e8eaed",
    ...A.audioIconStyle,
    // by default inherit the base style
    ...A.audioIconDisabledStyle
  }, C = () => {
    var H, B;
    const Q = w ? (H = m.audio) == null ? void 0 : H.icon : (B = m.audio) == null ? void 0 : B.iconDisabled;
    return !Q || typeof Q == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-audio-icon",
        "data-testid": "rcb-audio-icon",
        style: w ? E : y
      }
    ) : Q && /* @__PURE__ */ b.jsx("span", { className: "rcb-audio-icon", "data-testid": "rcb-audio-icon", children: /* @__PURE__ */ b.jsx(
      Q,
      {
        style: w ? E : y,
        "data-testid": "rcb-audio-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "aria-label": ((g = m.ariaLabel) == null ? void 0 : g.audioButton) ?? "toggle audio",
      role: "button",
      onMouseDown: (H) => {
        H.preventDefault(), P();
      },
      style: w ? A.audioButtonStyle : { ...A.audioButtonStyle, ...A.audioButtonDisabledStyle },
      children: C()
    }
  );
}, Cc = () => {
  var f, c;
  const { settings: g } = De(), { styles: m } = Ye(), { openChat: A } = gr(), w = {
    backgroundImage: `url(${(f = g.header) == null ? void 0 : f.closeChatIcon})`,
    fill: "#e8eaed",
    stroke: "#e8eaed",
    ...m.closeChatIconStyle
  }, P = () => {
    var E;
    const y = (E = g.header) == null ? void 0 : E.closeChatIcon;
    return !y || typeof y == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-close-chat-icon",
        "data-testid": "rcb-close-chat-icon",
        style: w
      }
    ) : y && /* @__PURE__ */ b.jsx("span", { className: "rcb-close-chat-icon", "data-testid": "rcb-close-chat-icon", children: /* @__PURE__ */ b.jsx(y, { style: w }) });
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "aria-label": ((c = g.ariaLabel) == null ? void 0 : c.closeChatButton) ?? "close chat",
      role: "button",
      onMouseDown: (E) => {
        E.stopPropagation(), A(!1);
      },
      style: m.closeChatButtonStyle,
      children: P()
    }
  );
}, Dc = () => {
  const { notificationsToggledOn: f, toggleNotifications: c, playNotificationSound: g } = Fl();
  return {
    notificationsToggledOn: f,
    toggleNotifications: c,
    playNotificationSound: g
  };
}, Pc = () => {
  var f, c, g;
  const { settings: m } = De(), { styles: A } = Ye(), { notificationsToggledOn: w, toggleNotifications: P } = Dc(), E = {
    backgroundImage: `url(${(f = m.notification) == null ? void 0 : f.icon})`,
    fill: "#fcec3d",
    ...A.notificationIconStyle
  }, y = {
    backgroundImage: `url(${(c = m.notification) == null ? void 0 : c.iconDisabled})`,
    fill: "#e8eaed",
    ...A.notificationIconStyle,
    // by default inherit the base style
    ...A.notificationIconDisabledStyle
  }, C = () => {
    var H, B;
    const Q = w ? (H = m.notification) == null ? void 0 : H.icon : (B = m.notification) == null ? void 0 : B.iconDisabled;
    return !Q || typeof Q == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-notification-icon",
        "data-testid": "rcb-notification-icon",
        style: w ? E : y
      }
    ) : Q && /* @__PURE__ */ b.jsx("span", { className: "rcb-notification-icon", "data-testid": "rcb-notification-icon", children: /* @__PURE__ */ b.jsx(
      Q,
      {
        style: w ? E : y,
        "data-testid": "rcb-notification-icon-svg"
      }
    ) });
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "aria-label": ((g = m.ariaLabel) == null ? void 0 : g.notificationButton) ?? "toggle notifications",
      role: "button",
      onMouseDown: (H) => {
        H.preventDefault(), P();
      },
      style: w ? A.notificationButtonStyle : { ...A.notificationButtonStyle, ...A.notificationButtonDisabledStyle },
      children: C()
    }
  );
}, kc = () => {
  var f, c, g;
  const { settings: m } = De(), { styles: A } = Ye(), { injectMessage: w } = BA(), { inputRef: P } = bt(), { voiceToggledOn: E, toggleVoice: y } = Nl(), { setInputLength: C, setTextAreaValue: H, textAreaDisabled: B } = La(), { handleSubmitText: Q } = Ha(), U = k.useRef([]), [L, _] = k.useState(!1);
  k.useEffect(() => {
    var G;
    (G = m.voice) != null && G.sendAsAudio ? (te(), U.current = []) : Q();
  }, [L]), k.useEffect(() => {
    E ? fc(
      m,
      y,
      K,
      H,
      C,
      U,
      P
    ) : Hl();
  }, [E]);
  const F = {
    backgroundImage: `url(${(f = m.voice) == null ? void 0 : f.icon})`,
    fill: "#9aa0a6",
    ...A.voiceIconStyle
  }, T = {
    backgroundImage: `url(${(c = m.voice) == null ? void 0 : c.iconDisabled})`,
    fill: "#9aa0a6",
    ...A.voiceIconStyle,
    // by default inherit the base style
    ...A.voiceIconDisabledStyle
  }, K = () => {
    _((G) => !G);
  }, te = async () => {
    const G = new Blob(U.current, { type: "audio/wav" }), $ = new File([G], "voice-input.wav", { type: "audio/wav" }), Z = await Ds($);
    !Z.fileType || !Z.fileUrl || await w(/* @__PURE__ */ b.jsx(
      Cs,
      {
        file: $,
        fileType: Z.fileType,
        fileUrl: Z.fileUrl
      }
    ), "user");
  }, X = () => {
    var G, $;
    const Z = E ? (G = m.voice) == null ? void 0 : G.icon : ($ = m.voice) == null ? void 0 : $.iconDisabled;
    return !Z || typeof Z == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: `rcb-voice-icon${E && !B ? "-on" : ""}`,
        style: E && !B ? F : T
      }
    ) : Z && /* @__PURE__ */ b.jsx("span", { className: `rcb-voice-icon ${E && !B ? "on" : ""}`, children: /* @__PURE__ */ b.jsx(Z, { style: E && !B ? F : T }) });
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "aria-label": ((g = m.ariaLabel) == null ? void 0 : g.voiceButton) ?? "toggle voice",
      role: "button",
      onMouseDown: (G) => {
        G.preventDefault(), !B && y();
      },
      style: E && !B ? A.voiceButtonStyle : { ...A.voiceButtonStyle, ...A.voiceButtonDisabledStyle },
      className: E && !B ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled",
      children: X()
    }
  );
}, Bc = () => {
  var f, c, g, m, A, w, P, E;
  const { settings: y } = De(), { styles: C } = Ye(), { textAreaDisabled: H } = gt(), [B, Q] = k.useState(!1), { handleSubmitText: U } = Ha(), L = {
    backgroundColor: (f = y.general) == null ? void 0 : f.primaryColor,
    ...C.sendButtonStyle
  }, _ = {
    cursor: `url(${(c = y.general) == null ? void 0 : c.actionDisabledIcon}), auto`,
    backgroundColor: (g = y.general) == null ? void 0 : g.primaryColor,
    ...C.sendButtonStyle,
    // by default inherit the base style
    ...C.sendButtonDisabledStyle
  }, F = {
    backgroundColor: (m = y.general) == null ? void 0 : m.secondaryColor,
    ...C.sendButtonStyle,
    // by default inherit the base style
    ...C.sendButtonHoveredStyle
  }, T = {
    backgroundImage: `url(${(A = y.chatInput) == null ? void 0 : A.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle
  }, K = {
    backgroundImage: `url(${(w = y.chatInput) == null ? void 0 : w.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle,
    // by default inherit the base style
    ...C.sendIconDisabledStyle
  }, te = {
    backgroundImage: `url(${(P = y.chatInput) == null ? void 0 : P.sendButtonIcon})`,
    fill: "#fff",
    ...C.sendIconStyle,
    // by default inherit the base style
    ...C.sendIconHoveredStyle
  }, X = () => {
    Q(!0);
  }, G = () => {
    Q(!1);
  }, $ = () => {
    var Z;
    const re = (Z = y.chatInput) == null ? void 0 : Z.sendButtonIcon;
    return !re || typeof re == "string" ? /* @__PURE__ */ b.jsx(
      "span",
      {
        className: "rcb-send-icon",
        "data-testid": "rcb-send-icon",
        style: H ? K : B ? te : T
      }
    ) : re && /* @__PURE__ */ b.jsx("span", { className: "rcb-send-icon", "data-testid": "rcb-send-icon", children: /* @__PURE__ */ b.jsx(
      re,
      {
        style: H ? K : B ? te : T
      }
    ) });
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      "aria-label": ((E = y.ariaLabel) == null ? void 0 : E.sendButton) ?? "send message",
      role: "button",
      onMouseEnter: X,
      onMouseLeave: G,
      onMouseDown: async (Z) => {
        Z == null || Z.preventDefault(), !H && await U();
      },
      style: H ? _ : B ? F : L,
      className: "rcb-send-button",
      children: $()
    }
  );
}, Tc = (f) => Object.values(Je).includes(f), Ic = (f, c) => {
  var g, m, A, w, P, E, y, C, H;
  const B = {
    [Je.AUDIO_BUTTON]: (g = f.audio) == null ? void 0 : g.disabled,
    [Je.CLOSE_CHAT_BUTTON]: (m = f.general) == null ? void 0 : m.embedded,
    [Je.EMOJI_PICKER_BUTTON]: (A = f.emoji) == null ? void 0 : A.disabled,
    [Je.FILE_ATTACHMENT_BUTTON]: (w = f.fileAttachment) == null ? void 0 : w.disabled,
    [Je.NOTIFICATION_BUTTON]: (P = f.notification) == null ? void 0 : P.disabled,
    [Je.SEND_MESSAGE_BUTTON]: !1,
    [Je.VOICE_MESSAGE_BUTTON]: (E = f.voice) == null ? void 0 : E.disabled
  }, Q = {}, U = (T) => T ? T.map((K) => {
    if (typeof K == "string") {
      if (Tc(K) && !B[K]) {
        if (Q[K])
          return Q[K];
        const te = c[K];
        if (typeof te == "function") {
          const X = te();
          return Q[K] = X, X;
        }
        return null;
      }
      return null;
    }
    return K;
  }).filter((K) => K !== null) : [], L = U((y = f.header) == null ? void 0 : y.buttons), _ = U((C = f.chatInput) == null ? void 0 : C.buttons), F = U((H = f.footer) == null ? void 0 : H.buttons);
  return { header: L, chatInput: _, footer: F };
}, Rc = () => /* @__PURE__ */ b.jsx(Ec, {}), Mc = () => /* @__PURE__ */ b.jsx(Pc, {}), Qc = () => /* @__PURE__ */ b.jsx(Cc, {}), Oc = () => /* @__PURE__ */ b.jsx(kc, {}), jc = () => /* @__PURE__ */ b.jsx(Bc, {}), Fc = () => /* @__PURE__ */ b.jsx(bc, {}), Lc = () => /* @__PURE__ */ b.jsx(Sc, {}), Hc = () => {
  const { settings: f } = De(), c = k.useMemo(() => ({
    [Je.CLOSE_CHAT_BUTTON]: () => Qc(),
    [Je.AUDIO_BUTTON]: () => Rc(),
    [Je.NOTIFICATION_BUTTON]: () => Mc(),
    [Je.EMOJI_PICKER_BUTTON]: () => Lc(),
    [Je.FILE_ATTACHMENT_BUTTON]: () => Fc(),
    [Je.SEND_MESSAGE_BUTTON]: () => jc(),
    [Je.VOICE_MESSAGE_BUTTON]: () => Oc()
  }), []), { header: g, chatInput: m, footer: A } = k.useMemo(() => Ic(f, c), [f, c]), w = k.useMemo(() => g, [g]), P = k.useMemo(() => m, [m]), E = k.useMemo(() => A, [A]);
  return { headerButtons: w, chatInputButtons: P, footerButtons: E };
}, Ps = () => {
  const { settings: f } = De(), { styles: c } = Ye(), { setMessages: g } = jl(), {
    isLoadingChatHistory: m,
    setIsLoadingChatHistory: A
  } = gt(), { chatBodyRef: w } = bt(), { callRcbEvent: P } = Wn(), { chatScrollHeight: E } = gr(), y = k.useCallback(() => {
    var C;
    const H = rc();
    H && ((C = f.event) != null && C.rcbLoadChatHistory && P(Ee.LOAD_CHAT_HISTORY, {}).defaultPrevented || (A(!0), Ac(
      f,
      c,
      H,
      g,
      w,
      E,
      A
    )));
  }, [f, c, g]);
  return { isLoadingChatHistory: m, setIsLoadingChatHistory: A, showChatHistory: y };
}, Nc = () => {
  var f, c, g;
  const { settings: m } = De(), { styles: A } = Ye(), { showChatHistory: w } = Ps(), [P, E] = k.useState(!1), y = {
    color: (f = m.general) == null ? void 0 : f.primaryColor,
    borderColor: (c = m.general) == null ? void 0 : c.primaryColor,
    ...A.chatHistoryButtonStyle,
    // by default inherit the base style
    ...A.chatHistoryButtonHoveredStyle
  };
  return /* @__PURE__ */ b.jsx("div", { className: "rcb-view-history-container", children: /* @__PURE__ */ b.jsx(
    "div",
    {
      onMouseEnter: () => {
        E(!0);
      },
      onMouseLeave: () => {
        E(!1);
      },
      style: P ? y : A.chatHistoryButtonStyle,
      onMouseDown: (C) => {
        C.preventDefault(), w();
      },
      className: "rcb-view-history-button",
      role: "button",
      tabIndex: 0,
      children: /* @__PURE__ */ b.jsx("p", { children: (g = m.chatHistory) == null ? void 0 : g.viewChatHistoryButtonText })
    }
  ) });
}, Uc = () => {
  var f;
  const { settings: c } = De(), { hasInteractedPage: g, setHasInteractedPage: m, hasFlowStarted: A, setHasFlowStarted: w } = gt(), P = k.useCallback(() => {
    var E;
    m(!0), !A && ((E = c.general) == null ? void 0 : E.flowStartTrigger) === "ON_PAGE_INTERACT" && w(!0);
    const y = new SpeechSynthesisUtterance();
    y.text = "", y.onend = () => {
      window.removeEventListener("click", P), window.removeEventListener("keydown", P), window.removeEventListener("touchstart", P);
    }, window.speechSynthesis.speak(y);
  }, [A, (f = c.general) == null ? void 0 : f.flowStartTrigger]);
  return {
    hasInteractedPage: g,
    handleFirstInteraction: P
  };
}, zc = () => {
  var f, c, g, m;
  const A = TA(), { settings: w } = De(), {
    endStreamMessage: P,
    injectMessage: E,
    removeMessage: y,
    streamMessage: C,
    messages: H,
    replaceMessages: B
  } = BA(), { getCurrPath: Q, getPrevPath: U, goToPath: L, paths: _ } = PA(), { showToast: F, dismissToast: T } = kA(), {
    isBotTyping: K,
    isChatWindowOpen: te,
    isScrolling: X,
    hasFlowStarted: G,
    setIsChatWindowOpen: $,
    setTextAreaDisabled: Z,
    setAudioToggledOn: re,
    setVoiceToggledOn: ne,
    setIsBotTyping: Ae,
    setTextAreaSensitiveMode: ae,
    setBlockAllowsAttachment: ce,
    setTimeoutId: ve
  } = gt(), { chatBodyRef: de, flowRef: Me, streamMessageMap: Ce, paramsInputRef: ee, keepVoiceOnRef: se } = bt(), fe = Me.current, { viewportHeight: be, setViewportHeight: oe, setViewportWidth: me, openChat: Oe } = gr(), { setUpNotifications: Se } = Fl(), { handleFirstInteraction: le } = Uc(), { showChatHistory: Le } = Ps(), { updateTextAreaFocus: Zt, setTextAreaValue: Gt } = La(), { syncVoice: tt } = Nl(), mt = k.useRef(0);
  k.useEffect(() => (window.addEventListener("click", le), window.addEventListener("keydown", le), window.addEventListener("touchstart", le), () => {
    window.removeEventListener("click", le), window.removeEventListener("keydown", le), window.removeEventListener("touchstart", le);
  }), []), k.useEffect(() => {
    var xe, Ue, Pe;
    Se(), Z((xe = w.chatInput) == null ? void 0 : xe.disabled), $((Ue = w.chatWindow) == null ? void 0 : Ue.defaultOpen), re((Pe = w.audio) == null ? void 0 : Pe.defaultToggledOn), setTimeout(() => {
      var Ie;
      ne((Ie = w.voice) == null ? void 0 : Ie.defaultToggledOn);
    }, 1);
  }, []), k.useEffect(() => {
    !X && de != null && de.current && (de.current.scrollTop = de.current.scrollHeight);
  }, [K]), k.useEffect(() => {
    var xe, Ue, Pe, Ie;
    if ((xe = w.chatHistory) != null && xe.disabled)
      localStorage.removeItem((Ue = w.chatHistory) == null ? void 0 : Ue.storageKey);
    else if (ac(w), localStorage.getItem((Pe = w.chatHistory) == null ? void 0 : Pe.storageKey) != null) {
      const Ke = Oo(/* @__PURE__ */ b.jsx(Nc, {}), "system");
      B([Ke]), (Ie = w.chatHistory) != null && Ie.autoLoad && Le();
    }
  }, [(f = w.chatHistory) == null ? void 0 : f.storageKey, (c = w.chatHistory) == null ? void 0 : c.maxEntries, (g = w.chatHistory) == null ? void 0 : g.disabled]), k.useEffect(() => {
    var xe;
    A || (xe = w.general) != null && xe.embedded || !navigator.virtualKeyboard || (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (Ue) => {
      if (!Ue.target)
        return;
      const { x: Pe, y: Ie, width: Ke, height: nt } = Ue.target.boundingRect;
      Pe == 0 && Ie == 0 && Ke == 0 && nt == 0 ? (setTimeout(() => {
        var ze;
        oe((ze = window.visualViewport) == null ? void 0 : ze.height);
      }, 101), setTimeout(() => {
        var ze, Xe;
        be != ((ze = window.visualViewport) == null ? void 0 : ze.height) && oe((Xe = window.visualViewport) == null ? void 0 : Xe.height);
      }, 1001)) : setTimeout(() => {
        var ze;
        oe(((ze = window.visualViewport) == null ? void 0 : ze.height) - nt);
      }, 101);
    }));
  }, [A]), k.useEffect(() => {
    var xe, Ue, Pe, Ie;
    if (A)
      return;
    te && (oe((xe = window.visualViewport) == null ? void 0 : xe.height), me((Ue = window.visualViewport) == null ? void 0 : Ue.width));
    const Ke = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" }), nt = () => mt.current = window.scrollY, ze = () => {
      var ut, Rt;
      oe((ut = window.visualViewport) == null ? void 0 : ut.height), me((Rt = window.visualViewport) == null ? void 0 : Rt.width);
    }, Xe = () => {
      var ut;
      window.removeEventListener("scroll", Ke), window.removeEventListener("scroll", nt), (ut = window.visualViewport) == null || ut.removeEventListener("resize", ze);
    };
    return te ? (Xe(), document.body.style.position = "fixed", window.addEventListener("scroll", Ke), (Pe = window.visualViewport) == null || Pe.addEventListener("resize", ze)) : (document.body.style.position = "static", Xe(), window.scrollTo({ top: mt.current, left: 0, behavior: "auto" }), window.addEventListener("scroll", nt), (Ie = window.visualViewport) == null || Ie.removeEventListener("resize", ze)), Xe;
  }, [te, A]), k.useEffect(() => {
    const xe = Q();
    if (!xe)
      return;
    const Ue = fe[xe];
    if (!Ue) {
      Ae(!1);
      return;
    }
    const Pe = {
      prevPath: U(),
      currPath: Q(),
      goToPath: L,
      setTextAreaValue: Gt,
      userInput: ee.current,
      endStreamMessage: P,
      injectMessage: E,
      removeMessage: y,
      streamMessage: C,
      openChat: Oe,
      showToast: F,
      dismissToast: T
    };
    (async (Ie, Ke, nt) => {
      var ze;
      await Vu(
        fe,
        Ie,
        nt,
        Z,
        ae,
        L,
        ve
      ), Ae(!1), "chatDisabled" in Ke || Z((ze = w.chatInput) == null ? void 0 : ze.disabled), ce(typeof Ke.file == "function"), Zt(Ie), tt(se.current && !Ke.chatDisabled), Ce.current.clear(), bA(H);
    })(xe, Ue, Pe);
  }, [_]), k.useEffect(() => {
    var xe;
    (G || ((xe = w.general) == null ? void 0 : xe.flowStartTrigger) === "ON_LOAD") && L("start");
  }, [G, (m = w.general) == null ? void 0 : m.flowStartTrigger]);
}, Wc = ({
  plugins: f
}) => {
  var c, g, m, A;
  f == null || f.map((X) => X());
  const w = TA(), { settings: P } = De(), { styles: E } = Ye(), { hasFlowStarted: y, setHasFlowStarted: C } = gt(), { inputRef: H } = bt(), {
    setChatScrollHeight: B,
    viewportHeight: Q,
    viewportWidth: U,
    isChatWindowOpen: L
  } = gr(), { headerButtons: _, chatInputButtons: F, footerButtons: T } = Hc();
  zc();
  const K = k.useMemo(() => {
    var X;
    const G = "rcb-chatbot-global ";
    return (X = P.general) != null && X.embedded ? G + "rcb-window-embedded" : L ? G + "rcb-window-open" : G + "rcb-window-close";
  }, [P, L]), te = () => {
    var X;
    return !w && !((X = P.general) != null && X.embedded) ? {
      ...E.chatWindowStyle,
      borderRadius: "0px",
      left: "0px",
      right: "auto",
      top: "0px",
      bottom: "auto",
      width: `${U}px`,
      height: `${Q}px`
    } : E.chatWindowStyle;
  };
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: (() => {
    var X, G;
    return w && ((X = P.device) == null ? void 0 : X.desktopEnabled) || !w && ((G = P.device) == null ? void 0 : G.mobileEnabled);
  })() && /* @__PURE__ */ b.jsxs(
    "div",
    {
      onMouseDown: (X) => {
        var G, $;
        !y && ((G = P.general) == null ? void 0 : G.flowStartTrigger) === "ON_CHATBOT_INTERACT" && C(!0), w ? ($ = H.current) == null || $.blur() : X == null || X.preventDefault();
      },
      className: K,
      children: [
        /* @__PURE__ */ b.jsx(wc, {}),
        /* @__PURE__ */ b.jsx(yc, {}),
        L && !w && !((c = P.general) != null && c.embedded) && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
          /* @__PURE__ */ b.jsx("style", { children: `
									html {
										overflow: hidden !important;
										touch-action: none !important;
										scroll-behavior: auto !important;
									}
								` }),
          /* @__PURE__ */ b.jsx(
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
        /* @__PURE__ */ b.jsxs("div", { style: te(), className: "rcb-chat-window", children: [
          ((g = P.general) == null ? void 0 : g.showHeader) && /* @__PURE__ */ b.jsx(ku, { buttons: _ }),
          /* @__PURE__ */ b.jsx(Lu, { setChatScrollHeight: B }),
          ((m = P.general) == null ? void 0 : m.showInputRow) && /* @__PURE__ */ b.jsx(gc, { buttons: F }),
          ((A = P.general) == null ? void 0 : A.showFooter) && /* @__PURE__ */ b.jsx(mc, { buttons: T })
        ] })
      ]
    }
  ) });
}, Ul = {
  DEFAULT_URL: "https://cdn.jsdelivr.net/gh/tjtanjin/react-chatbotify-themes/themes",
  DEFAULT_EXPIRATION: "2592000",
  CACHE_KEY_PREFIX: "RCB_THEME_CACHE_DATA"
}, Zc = Ul.DEFAULT_URL, Gc = Ul.DEFAULT_EXPIRATION, ks = Ul.CACHE_KEY_PREFIX, _c = (f, c, g) => {
  const m = localStorage.getItem(`${ks}_${f}_${c}`);
  if (!m)
    return null;
  try {
    const A = JSON.parse(m), w = (/* @__PURE__ */ new Date()).getTime(), P = Math.floor(w / 1e3);
    return A.cacheDate + g >= P ? A : null;
  } catch (A) {
    return console.error(`Unable to fetch cache for ${f}`, A), null;
  }
}, Yc = (f, c, g, m, A) => {
  const w = (/* @__PURE__ */ new Date()).getTime(), P = Math.floor(w / 1e3), E = {
    settings: g,
    inlineStyles: m,
    cssStylesText: A,
    cacheDate: P
  };
  localStorage.setItem(`${ks}_${f}_${c}`, JSON.stringify(E));
}, Xc = async (f, c) => {
  const g = `${c}/${f}/meta.json`;
  try {
    const m = await fetch(g);
    return m.ok ? (await m.json()).version : (console.error(`Failed to fetch meta.json from ${g}`), null);
  } catch (m) {
    return console.error(`Failed to fetch meta.json from ${g}`, m), null;
  }
}, rs = async (f, c) => {
  const { id: g, version: m, baseUrl: A = Zc, cacheDuration: w = Gc } = c, P = m || await Xc(g, A);
  if (!P)
    return console.error(`Unable to find version for theme: ${g}`), { settings: {}, inlineStyles: {}, cssStylesText: "" };
  const E = _c(g, P, w);
  if (E) {
    const K = os(f, E.cssStylesText);
    return { settings: E.settings, inlineStyles: E.inlineStyles, cssStylesText: K };
  }
  const y = `${A}/${g}/${P}/styles.css`, C = `${A}/${g}/${P}/settings.json`, H = `${A}/${g}/${P}/styles.json`;
  let B = "";
  const Q = await fetch(y);
  Q.ok ? B = await Q.text() : console.info(`Could not fetch styles.css from ${y}`);
  const U = await fetch(C);
  let L = {};
  U.ok ? L = await U.json() : console.info(`Could not fetch settings.json from ${C}`);
  const _ = await fetch(H);
  let F = {};
  _.ok ? F = await _.json() : console.info(`Could not fetch styles.json from ${H}`), Yc(g, P, L, F, B);
  const T = os(f, B);
  return { settings: L, inlineStyles: F, cssStylesText: T };
}, os = (f, c) => c.split(new RegExp("(?<=})")).map((g) => {
  const m = g.trim();
  return m.startsWith("@import") || m.startsWith("@keyframes") || m.startsWith("@media") ? m : m ? `#${f} ${m}` : "";
}).join(`
`), Bs = () => Ts(ss), Vc = () => Ts(cs), Jc = async (f, c, g, m) => {
  var A, w;
  let P = Bs(), E = Vc(), y = "";
  if (m != null)
    if (Array.isArray(m))
      for (const C of m) {
        const H = await rs(f, C);
        P = ja(H.settings, P), E = ja(H.inlineStyles, E), y += H.cssStylesText;
      }
    else {
      const C = await rs(f, m);
      P = ja(C.settings, P), E = ja(C.inlineStyles, E), y += C.cssStylesText;
    }
  return c != null && (P = ja(c, P)), g != null && (E = ja(g, E)), ((A = P.chatInput) == null ? void 0 : A.botDelay) != null && ((w = P.chatInput) == null ? void 0 : w.botDelay) < 500 && (P.chatInput.botDelay = 500), { settings: P, inlineStyles: E, cssStylesText: y };
}, ja = (f, c) => {
  const g = [{ source: f, target: c }];
  for (; g.length; ) {
    const m = g.pop();
    if (m == null)
      continue;
    const { source: A, target: w } = m;
    for (const P of Object.keys(A)) {
      const E = P;
      if (k.isValidElement(A[E]))
        w[E] = A[E];
      else if (typeof A[E] == "object" && A[E] !== null && !Array.isArray(A[E]))
        g.push({ source: A[E], target: w[E] });
      else
        try {
          w[E] = A[E];
        } catch {
        }
    }
  }
  return c;
}, Ts = (f) => {
  if (f === null || typeof f != "object")
    return f;
  const c = Array.isArray(f) ? [] : {}, g = [{ source: f, target: c }], m = /* @__PURE__ */ new WeakMap();
  for (m.set(f, c); g.length; ) {
    const A = g.pop();
    if (A == null)
      continue;
    const { source: w, target: P } = A;
    for (const E in w)
      if (Object.prototype.hasOwnProperty.call(w, E)) {
        const y = w[E];
        if (y && typeof y == "object")
          if (m.has(y))
            P[E] = m.get(y);
          else {
            const C = Array.isArray(y) ? [] : {};
            m.set(y, C), P[E] = C, g.push({ source: y, target: C });
          }
        else
          P[E] = y;
      }
  }
  return c;
}, Is = k.createContext(void 0), Rs = () => k.useContext(Is), Kc = ({
  children: f
}) => {
  var c;
  const g = k.useRef(""), m = k.useRef({}), [A, w] = k.useState({}), [P, E] = k.useState({}), [y, C] = k.useState(!1);
  k.useEffect(() => {
    C(!0);
  }, []);
  const H = async (B, Q, U, L, _, F) => {
    g.current = B, m.current = Q;
    const T = await Jc(B, U, L, _);
    F.current && (F.current.textContent = T.cssStylesText), w(T.settings), E(T.inlineStyles);
  };
  return y ? /* @__PURE__ */ b.jsx("div", { style: { fontFamily: (c = A.general) == null ? void 0 : c.fontFamily }, children: /* @__PURE__ */ b.jsx(Is.Provider, { value: { loadConfig: H }, children: /* @__PURE__ */ b.jsx(Du, { settings: A, setSettings: w, children: /* @__PURE__ */ b.jsx(Pu, { styles: P, setStyles: E, children: /* @__PURE__ */ b.jsx(Ou, { children: /* @__PURE__ */ b.jsx(Bu, { botIdRef: g, flowRef: m, children: /* @__PURE__ */ b.jsx(Mu, { children: /* @__PURE__ */ b.jsx(Tu, { settings: A, children: /* @__PURE__ */ b.jsx(Fu, { children: f }) }) }) }) }) }) }) }) }) : null;
}, $c = ({
  id: f,
  flow: c,
  settings: g,
  styles: m,
  themes: A,
  plugins: w,
  setConfigLoaded: P,
  styleRootRef: E
}) => {
  const y = k.useMemo(() => f, []), C = Rs(), { flowRef: H } = bt();
  H && H.current !== c && (H.current = c);
  const B = async () => {
    var Q, U;
    (Q = g.event) != null && Q.rcbPreLoadChatBot && EA(
      Ee.PRE_LOAD_CHATBOT,
      { botId: y, currPath: null, prevPath: null },
      {
        flow: c,
        settings: g,
        styles: m,
        themes: A,
        plugins: w
      }
    ).defaultPrevented || (C != null && C.loadConfig && (await C.loadConfig(y, c, g, m, A, E), P(!0)), (U = g.event) != null && U.rcbPostLoadChatBot && EA(
      Ee.POST_LOAD_CHATBOT,
      { botId: y, currPath: null, prevPath: null },
      {
        flow: c,
        settings: g,
        styles: m,
        themes: A,
        plugins: w
      }
    ));
  };
  return k.useEffect(() => {
    B();
  }, [A]), null;
}, Bl = ["Quickstart", "API Docs", "Examples", "Github", "Discord"], qc = {
  start: {
    message: "Hello, I am Tan Jin 👋! Welcome to React ChatBotify, I'm excited that you are using our chatbot 😊!",
    transition: { duration: 1e3 },
    chatDisabled: !0,
    path: "show_options"
  },
  show_options: {
    message: "It looks like you have not set up a conversation flow yet. No worries! Here are a few helpful things you can check out to get started:",
    options: Bl,
    path: "process_options"
  },
  prompt_again: {
    message: "Do you need any other help?",
    options: Bl,
    path: "process_options"
  },
  unknown_input: {
    message: "Sorry, I do not understand your message 😢! If you require further assistance, you may click on the Github option and open an issue there or visit our discord.",
    options: Bl,
    path: "process_options"
  },
  process_options: {
    transition: { duration: 0 },
    path: (f) => {
      let c = "";
      switch (f.userInput) {
        case "Quickstart":
          c = "https://react-chatbotify.com/docs/introduction/quickstart/";
          break;
        case "API Docs":
          c = "https://react-chatbotify.com/docs/api/bot_options";
          break;
        case "Examples":
          c = "https://react-chatbotify.com/docs/examples/basic_form";
          break;
        case "Github":
          c = "https://github.com/tjtanjin/react-chatbotify/";
          break;
        case "Discord":
          c = "https://discord.gg/6R4DK4G5Zh";
          break;
        default:
          return "unknown_input";
      }
      return f.injectMessage("Sit tight! I'll send you right there!"), setTimeout(() => {
        window.open(c);
      }, 1e3), "repeat";
    }
  },
  repeat: {
    transition: { duration: 3e3 },
    path: "prompt_again"
  }
}, ed = ({
  id: f,
  flow: c,
  settings: g,
  styles: m,
  themes: A,
  plugins: w
}) => {
  const P = k.useMemo(() => f || "rcb-" + xA(), []), E = !c || Object.keys(c).length === 0 ? qc : c, y = g || {}, C = m || {}, H = w || [], [B, Q] = k.useState(!1), U = Rs(), L = k.useRef(null), [_, F] = k.useState(A || []);
  k.useEffect(() => {
    A && F(A);
  }, [A]);
  const T = () => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(
      $c,
      {
        styleRootRef: L,
        id: P,
        flow: E,
        settings: y,
        styles: C,
        themes: _,
        plugins: H,
        setConfigLoaded: Q
      }
    ),
    B && /* @__PURE__ */ b.jsx(Wc, { plugins: w })
  ] });
  return U == null ? /* @__PURE__ */ b.jsxs(Kc, { children: [
    /* @__PURE__ */ b.jsx("style", { ref: L }),
    /* @__PURE__ */ b.jsx("div", { id: P, children: T() })
  ] }) : /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx("style", { ref: L }),
    /* @__PURE__ */ b.jsx("div", { id: P, children: T() })
  ] });
}, Ms = Bs(), td = k.createContext({
  settings: Ms,
  setSettings: () => {
  }
});
function nd() {
  const [f, c] = k.useState(""), [g, m] = k.useState(""), [A, w] = k.useState(!1), [P, E] = k.useState(!1), [y, C] = k.useState({
    ...Ms,
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
      avatar: "/imgs/logos/logo.svg",
      closeChatIcon: "/imgs/logos/chatbot_close.svg"
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
    },
    chatInput: {
      sendButtonIcon: "/imgs/logos/chatbot_send.svg"
    }
  }), [H, B] = k.useState(!1), [Q, U] = k.useState({});
  k.useEffect(() => {
    B(!0);
  }, []);
  const L = async (K) => {
    const { address: te } = Fa.all();
    c(te);
    let G = await _l.getToken(K).getBalance(te);
    G = Hs(G), m(G);
  }, _ = async (K) => {
    Ii("handleQuestion params", K);
    try {
      const te = await is.post("/ai/chat", {
        question: K.userInput
      });
      Ii("handleQuestion response", te);
      const {
        action: X,
        coin: G,
        amount: $,
        to: Z
      } = te.data;
      if (!X)
        U({
          action: "other",
          answer: te.data
        });
      else {
        let re = G;
        if (typeof G == "string") {
          const ne = Object.values(Ls).find(
            (Ae) => Ae.toUpperCase() === G
          );
          ne && (re = _l.getNativeTokenTypeByGasSymbol(ne));
        }
        U({
          action: X,
          toEmail: Z,
          token: re,
          amount: $
        }), await L(re), E(!0);
      }
    } catch (te) {
      Ii("handleQuestion error", te);
      const X = As(te);
      ls.error(X.message);
    }
  }, F = {
    start: {
      message: "Welcome! I can help you transfer cryptocurrencies. You can send SepoliaETH, POL, TVWT or VAST to any email address. For example, you can say: 'Send 1 VAST to example@gmail.com'. How can I assist you today?",
      function: _,
      path: "transfer"
    },
    transfer: {
      message: (K) => {
        if (Ii("end", Q), Q.action === "transfer")
          return "Your transfer request has been processed. Click the button below to open the transfer confirmation dialog.";
        if (Q.action === "other")
          return Q.answer;
      },
      function: _,
      component: (K) => {
        if (Q.action === "transfer")
          return Ii(P, f, g, Q.token, Q.toEmail, Q.amount), /* @__PURE__ */ b.jsx("div", { className: "pl-4 pt-2", children: P && f && g && Q.token && Q.toEmail && Q.amount && /* @__PURE__ */ b.jsx(Gs, { onClick: () => w(!0) }) });
      },
      // chatDisabled: true,
      path: "transfer"
    }
  }, T = {
    botBubbleStyle: {
      backgroundColor: "#f6f6f6",
      color: "#000"
    },
    userBubbleStyle: {
      backgroundColor: "#f6f6f6",
      color: "#000",
      wordBreak: "break-all"
    },
    headerStyle: {
      // backgroundImage: 'linear-gradient(to right, #333, rgb(66, 176, 197))',
      background: "#fff"
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
    sendButtonStyle: {
      background: "#fff",
      boxShadow: "none",
      alignItems: "center"
    },
    sendButtonHoveredStyle: {
      background: "rgb(255, 255, 255)"
    }
  };
  return /* @__PURE__ */ b.jsx(b.Fragment, { children: H && /* @__PURE__ */ b.jsx(k.Suspense, { fallback: null, children: /* @__PURE__ */ b.jsxs("div", { children: [
    /* @__PURE__ */ b.jsx(td.Provider, { value: { settings: y, setSettings: C }, children: /* @__PURE__ */ b.jsx(ed, { id: "vastlink-chatbot", settings: y, flow: F, styles: T }) }),
    /* @__PURE__ */ b.jsx(
      Fs,
      {
        open: A,
        setOpen: w,
        balance: g,
        address: f,
        tokenType: Q.token,
        defaultTo: Q.toEmail,
        defaultAmount: Q.amount,
        defaultNote: "",
        onClose: () => {
          m("");
        }
      }
    )
  ] }) }) });
}
function as(f) {
  const { pathname: c } = DA();
  return f.some((m) => {
    var A;
    switch (m.match) {
      case "exact":
        return c === m.path;
      case "startsWith":
        return c.startsWith(m.path);
      case "endsWith":
        return c.endsWith(m.path);
      case "includes":
        return c.includes(m.path);
      case "pattern":
        return (A = m.pattern) == null ? void 0 : A.test(c);
      default:
        return !1;
    }
  });
}
const rd = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
], od = [
  { path: "/", match: "exact" },
  { path: "/auth", match: "exact" },
  { path: "/verify-transaction", match: "exact" },
  { path: "/verify-auth", match: "exact" },
  { path: "/invite", match: "startsWith" }
];
function ad() {
  const f = as(rd), c = as(od);
  return {
    hideChatbot: f,
    disableHeader: c
  };
}
const id = [
  {
    icon: "/imgs/footer/telegram.svg",
    url: "https://t.me/+wk6Lw40M2qtlMjk9"
  },
  {
    icon: "/imgs/footer/youtube.svg",
    url: "https://www.youtube.com/channel/UCZIz3-Q52pDAfd7cJI4eVGQ"
  },
  {
    icon: "/imgs/footer/linkedin.svg",
    url: "https://www.linkedin.com/company/104843132"
  },
  {
    icon: "/imgs/footer/twitter.svg",
    url: "https://x.com/thevastlink"
  },
  {
    icon: "/imgs/footer/github.svg",
    url: "https://github.com/vastlink-xyz"
  },
  {
    icon: "/imgs/footer/medium.svg",
    url: "https://medium.com/@johnny.nan.jiang"
  }
];
function Ad() {
  return /* @__PURE__ */ b.jsxs("div", { className: "bg-black text-center h-[300px] pt-[55px] border-t border-black", children: [
    /* @__PURE__ */ b.jsx("div", { className: "flex justify-center gap-4 mb-[32px]", children: id.map((f) => /* @__PURE__ */ b.jsx("a", { href: f.url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ b.jsx("img", { src: f.icon, alt: f.url }) }, f.url)) }),
    /* @__PURE__ */ b.jsx(
      "a",
      {
        href: "https://forms.gle/piGCLqFSyMoJq1sd9",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-center text-white text-xl underline leading-9 block mb-[32px] cursor-pointer",
        children: "Join our ambassador program"
      }
    ),
    /* @__PURE__ */ b.jsx("div", { className: et(
      "text-center text-[#828282] text-base font-medium font-['Roboto'] leading-9 mb-[20px]",
      "tablet:text-xl"
    ), children: "Copenhagen | Dubai | Singapore | Sydney " }),
    /* @__PURE__ */ b.jsx("div", { className: "text-[#828282] text-base font-normal font-['Roboto'] leading-relaxed", children: "Copyright © Vastlink 2024" })
  ] });
}
function vd() {
  const { hideChatbot: f } = ad();
  return /* @__PURE__ */ b.jsx("section", { className: "bg-background w-full flex flex-col min-h-screen", children: /* @__PURE__ */ b.jsxs(_s, { children: [
    /* @__PURE__ */ b.jsx(Js, {}),
    /* @__PURE__ */ b.jsx("div", { className: "w-full h-[45px] py-[9px] bg-[#fffbe6] rounded-sm border border-[#ffe58f] justify-between items-center gap-1.5 inline-flex px-8", children: /* @__PURE__ */ b.jsx("div", { className: "flex-1 text-center", children: /* @__PURE__ */ b.jsx("div", { className: "grow shrink basis-0 text-center text-black/90 text-sm font-normal font-['Roboto'] leading-snug", children: "Alpha version on testnets" }) }) }),
    /* @__PURE__ */ b.jsx("div", { className: "flex-grow min-h-custom-main", children: /* @__PURE__ */ b.jsx(Ys, { children: /* @__PURE__ */ b.jsx(zs, {}) }) }),
    !f && /* @__PURE__ */ b.jsx(nd, {}),
    /* @__PURE__ */ b.jsx(Zs, {}),
    /* @__PURE__ */ b.jsx(Ad, {})
  ] }) });
}
export {
  vd as default
};
