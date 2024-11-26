import { j as e } from "./vendor-radix-nT--cb5B.js";
import { C as Y, a as D, b as F, c as A, d as B } from "./card-C-Dhfuh5.js";
import { g as i, B as O, f as C, h as U } from "./main-DtxzRDTa.js";
import { j as z, r as s } from "./vendor-react-CwfAKKXk.js";
import { u as K } from "./useFlowData-BRlusQPH.js";
import { B as P } from "./vendor-utils-DOORVzle.js";
import { L as R } from "./index-jdHRmqor.js";
import { E as M, q as W, n as $ } from "./vendor-ui-utils-ERHZUJ9g.js";
import { a as _ } from "./helper-C3A8L7vk.js";
function q() {
  const p = z(), c = s.useRef(null), l = s.useRef([]), { serviceEndingUrl: d, nextIndex: w, flowId: f } = K(), [k, j] = s.useState(!1), [m, r] = s.useState(!1), b = s.useCallback(() => {
    if (document.getElementById("frankieone-sdk")) {
      r(!0);
      return;
    }
    const n = document.createElement("script");
    n.src = "https://assets.frankiefinancial.io/one-sdk/v1/oneSdk.umd.js", n.id = "frankieone-sdk", n.async = !0, n.onload = () => {
      setTimeout(() => {
        typeof window.OneSdk < "u" ? r(!0) : console.error("OneSdk failed to initialize after load");
      }, 100);
    }, n.onerror = (t) => {
      console.error("Failed to load OneSdk script:", t);
    }, document.body.appendChild(n);
  }, []);
  s.useEffect(() => () => {
    c.current && Object.values(c.current).forEach((n) => {
      n.unmount(), i("unmount", n);
    }), l.current && l.current.forEach(({ component: n, eventName: t, listener: o }) => {
      n.off(t, o);
    });
  }, []), s.useEffect(() => {
    b();
  }, [b]), s.useEffect(() => {
    m && typeof window.OneSdk < "u" ? (i("KYC", window.OneSdk), L()) : i("OneSdk not found", m, typeof window.OneSdk);
  }, [m]);
  const T = async () => {
    const t = await (await C.post("/marketplace/product/frankieone/get-session")).data;
    return i("session", t), t;
  }, a = (n, t, o) => {
    n.on(t, o), l.current.push({ component: n, eventName: t, listener: o });
  }, L = async () => {
    const n = await T(), t = await window.OneSdk({
      session: n,
      mode: "development",
      recipe: {
        form: {
          provider: {
            name: "react"
          }
        }
      }
    });
    i("oneSdk", t), j(!0);
    const o = t.individual();
    o.setProfileType("auto");
    const v = t.component("form", {
      name: "WELCOME",
      type: "manual"
    }), E = t.component("form", { name: "CONSENT" }), y = t.component("form", {
      name: "PERSONAL",
      type: "manual",
      personal: {
        countries: {
          default: {
            default: {
              fields: [
                {
                  fieldType: "address",
                  name: "address.fullAddress",
                  hide: !0
                }
              ]
            }
          },
          AUS: {
            default: {
              fields: [
                {
                  fieldType: "address",
                  name: "address.fullAddress",
                  hide: !0
                }
              ]
            }
          }
        }
      }
    }), h = t.component("form", {
      name: "DOCUMENT",
      type: "manual",
      numberOfIDs: 1
    }), x = t.component("form", {
      name: "REVIEW",
      type: "manual",
      verify: !0
    }), g = t.component("form", {
      name: "RETRY",
      type: "manual"
    }), N = t.component("form", {
      name: "RESULT",
      type: "manual",
      state: "FAIL",
      title: { label: "Max attempt reached" },
      descriptions: [{ label: "You have reached all the attempts. Our officer will review your details and get in touch." }, { label: "Please close the browser" }],
      cta: { label: "Close" }
    });
    c.current = {
      welcome: v,
      consent: E,
      personal: y,
      document: h,
      review: x,
      retry: g,
      result_fail: N
    }, v.mount("#form-container"), a(v, "form:welcome:ready", () => {
      E.mount("#form-container");
    }), a(E, "form:consent:ready", () => {
      y.mount("#form-container");
    }), a(y, "form:personal:ready", () => {
      h.mount("#form-container");
    }), a(h, "form:document:ready", ({ inputInfo: u }) => {
      x.mount("#form-container");
    }), a(h, "form:document:back", ({ inputInfo: u }) => {
      y.mount("#form-container");
    });
    let I = 0;
    a(x, "form:result:partial", () => {
      I < 2 ? (g.mount("#form-container"), I += 1) : N.mount("#form-container");
    }), a(x, "form:result:success", async () => {
      i("review success");
      try {
        const { getValue: u } = o.access("entityId"), S = u();
        await C.post("/marketplace/product/frankieone/save-kyc-entity-id", {
          entityId: S
        }), i("flowid", f, "serviceEndingUrl", d), p(f && d ? `${d}?flowId=${f}&step=${w}` : "/dashboard");
      } catch (u) {
        const S = U(u);
        P.error(S.message);
      }
    });
  }, V = () => {
    window.open(window.location.href, "_blank");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "pt-4 relative", children: [
    !k && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ e.jsx(R, {}) }),
    /* @__PURE__ */ e.jsx(
      O,
      {
        variant: "ghost",
        size: "icon",
        className: "absolute top-4 right-2",
        onClick: V,
        title: "Open in new window",
        children: /* @__PURE__ */ e.jsx(M, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { id: "form-container" })
  ] });
}
function se() {
  const [p, c] = s.useState(!0), [l, d] = s.useState(!1), [w, f] = s.useState(null);
  s.useEffect(() => {
    k();
  }, []);
  const k = async () => {
    try {
      c(!0);
      const { data: r } = await C.get("/marketplace/product/frankieone/get-kyc-status");
      r && r.status === _.VERIFIED && (d(!0), f(r));
    } catch (r) {
      console.error(r);
    } finally {
      c(!1);
    }
  }, j = () => {
    d(!1);
  }, m = () => /* @__PURE__ */ e.jsxs(Y, { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ e.jsx(W, { className: "w-16 h-16 text-green-500" }) }),
      /* @__PURE__ */ e.jsx(F, { className: "text-2xl font-bold text-center text-primary", children: "Verification Complete" })
    ] }),
    /* @__PURE__ */ e.jsxs(A, { children: [
      /* @__PURE__ */ e.jsx("p", { className: "text-center text-primary/80 mb-4", children: "Your identity has been successfully verified." }),
      /* @__PURE__ */ e.jsxs("p", { className: "text-center text-primary/80", children: [
        /* @__PURE__ */ e.jsx("span", { className: "font-semibold", children: "Verification Time:" }),
        " ",
        w.verificationTimestamp
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(B, { className: "w-full flex justify-center", children: /* @__PURE__ */ e.jsxs(
      O,
      {
        onClick: () => j(),
        className: "flex items-center justify-center",
        children: [
          /* @__PURE__ */ e.jsx($, { className: "mr-2 h-4 w-4" }),
          " Re-verify Identity"
        ]
      }
    ) })
  ] });
  return p ? /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ e.jsx(R, {}) }) : /* @__PURE__ */ e.jsx("div", { children: l ? m() : /* @__PURE__ */ e.jsx(q, {}) });
}
export {
  se as default
};
