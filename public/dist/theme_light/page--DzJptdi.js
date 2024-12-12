import { j as e } from "./vendor-radix-DAGGyvqc.js";
import { a as c, n as z } from "./vendor-react-BNvQ9I2c.js";
import { S as B, T as b, L as T, a4 as u, i as k, g as E, a as D } from "./main-C7od9bzF.js";
import { S as M } from "./SendButton-C4A5NWJ8.js";
import { T as A, a as H, b as p, c as h, d as I, e as i } from "./table-CZdXmzvK.js";
import { C as w } from "./card-Bv_pUVIY.js";
import { u as y, B as P } from "./vendor-utils-B-eF5hYT.js";
import { l as U, f as F } from "./vendor-web3-DanlmASa.js";
import { M as $, k as q, R as O } from "./vendor-ui-utils-CsaM-dHT.js";
function _({
  balance: a,
  address: t,
  tokenType: d,
  defaultTo: l,
  defaultAmount: m,
  defaultNote: n,
  onClose: x
}) {
  const [s, o] = c.useState(!1);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(M, { onClick: () => o(!0) }),
    /* @__PURE__ */ e.jsx(
      B,
      {
        open: s,
        setOpen: o,
        balance: a,
        address: t,
        tokenType: d,
        defaultTo: l,
        defaultAmount: m,
        defaultNote: n,
        onClose: x
      }
    )
  ] });
}
function G({
  address: a,
  tokenType: t,
  transactions: d,
  loading: l
}) {
  const m = c.useRef(), { t: n } = y();
  c.useEffect(() => {
    const s = b.getInstance().createToken(t);
    m.current = s;
  }, [t]);
  const x = (s) => {
    var j;
    E("tx open", s);
    const o = `${(j = m.current) == null ? void 0 : j.openUrl}/${s.hash}`;
    window.open(o, "_blank");
  };
  return /* @__PURE__ */ e.jsxs(w, { className: "text-primary", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center mt-4 mb-4", children: /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: n("/dashboard.[token].recentTransactions.title") }) }),
    /* @__PURE__ */ e.jsxs(A, { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsxs(p, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(h, { className: "" }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[300px]", children: n("/dashboard.[token].recentTransactions.table.transactionHash") }),
        /* @__PURE__ */ e.jsx(h, { className: "", children: n("/dashboard.[token].recentTransactions.table.time") }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[180px]", children: n("/dashboard.[token].recentTransactions.table.from") }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[180px]", children: n("/dashboard.[token].recentTransactions.table.to") }),
        /* @__PURE__ */ e.jsx(h, { className: "text-right", children: n("/dashboard.[token].recentTransactions.table.amount") })
      ] }) }),
      /* @__PURE__ */ e.jsx(I, { children: l ? /* @__PURE__ */ e.jsx(p, { children: /* @__PURE__ */ e.jsx(i, { colSpan: 6, className: "h-[200px]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(T, { type: "breathe" }) }) }) }) : d.map((s) => /* @__PURE__ */ e.jsxs(p, { children: [
        /* @__PURE__ */ e.jsx(i, { className: "font-medium", children: U(s.from, a) ? /* @__PURE__ */ e.jsx("div", { className: "border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx($, { size: 14 }) }) : /* @__PURE__ */ e.jsx("div", { className: "bg-brand-foreground rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(q, { size: 14, color: "#fff" }) }) }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[300px]", children: /* @__PURE__ */ e.jsx("p", { onClick: () => x(s), className: "cursor-pointer underline", children: /* @__PURE__ */ e.jsx(u, { address: s.hash, iconSize: 28 }) }) }),
        /* @__PURE__ */ e.jsx(i, { className: "font-medium", children: new Date(Number(s.timeStamp) * 1e3).toLocaleString() }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: s.from,
            children: /* @__PURE__ */ e.jsx(u, { address: s.from, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: s.to,
            children: /* @__PURE__ */ e.jsx(u, { address: s.to, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(i, { className: "text-right", children: k(F(s.value)) })
      ] }, s.hash)) })
    ] }),
    d.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-400", children: n("/dashboard.[token].recentTransactions.noTransactions") }) })
  ] });
}
function J({
  tokenType: a
}) {
  const [t, d] = c.useState(""), [l, m] = c.useState(""), [n, x] = c.useState(!1), [s, o] = c.useState(!1), [j, v] = c.useState([]), { t: S } = y();
  c.useEffect(() => {
    C();
  }, []);
  const C = async () => {
    const r = D.all().address;
    m(r), N(r);
  }, R = async (r) => {
    x(!0);
    let f = await b.getInstance().createToken(a).getBalance(r);
    f = k(f), d(f), x(!1);
  }, L = async (r) => {
    try {
      o(!0);
      const f = await b.getInstance().createToken(a).getRecentTransactions(r);
      v(f);
    } catch {
      P.error("Transactions load failed");
    } finally {
      o(!1);
    }
  }, N = (r) => {
    R(r), L(r);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(w, { className: "mb-4 p-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-primary", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold flex items-center", children: [
          S("/dashboard.[token].balance"),
          ":",
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: n ? /* @__PURE__ */ e.jsx(T, { className: "ml-6" }) : /* @__PURE__ */ e.jsx("span", { className: "block ml-2", children: t }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { title: "sync", className: "text-brand-foreground", children: /* @__PURE__ */ e.jsx(
          O,
          {
            size: 16,
            className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            onClick: () => N(l)
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex mt-4", children: /* @__PURE__ */ e.jsx(_, { balance: t, address: l, tokenType: a }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      G,
      {
        address: l,
        tokenType: a,
        transactions: j,
        loading: s
      }
    )
  ] }) });
}
function ae() {
  const { token: a } = z(), t = a == null ? void 0 : a.toUpperCase();
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(J, { tokenType: t }) });
}
export {
  ae as default
};
