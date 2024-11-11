import { j as e } from "./vendor-radix-CtBTfL6E.js";
import { r as c, l as z } from "./vendor-react-lU71vM3H.js";
import { S as B } from "./SendModal-CJ4L05nS.js";
import { S as E } from "./SendButton-CH8UNjN2.js";
import { b as D, a as M } from "./main-BiNWeoEw.js";
import { f as T } from "./index-DZmehw99.js";
import { T as A, a as H, b as u, c as h, d as I, e as i } from "./table-BMrfkFkc.js";
import { T as b } from "./TokenService-BJInqoec.js";
import { C as p } from "./index-DRdeb2zN.js";
import { C as k } from "./card-D6TGDRO7.js";
import { L as w } from "./index-BjYMiP7I.js";
import { u as y, B as P } from "./vendor-utils-CKvC_yGz.js";
import { a as U, f as F } from "./vendor-web3-N5LxOC8E.js";
import { M as $, a as q, R as O } from "./vendor-ui-utils-i3zS6aVb.js";
function _({
  balance: a,
  address: n,
  tokenType: d,
  defaultTo: o,
  defaultAmount: m,
  defaultNote: t,
  onClose: x
}) {
  const [s, l] = c.useState(!1);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(E, { onClick: () => l(!0) }),
    /* @__PURE__ */ e.jsx(
      B,
      {
        open: s,
        setOpen: l,
        balance: a,
        address: n,
        tokenType: d,
        defaultTo: o,
        defaultAmount: m,
        defaultNote: t,
        onClose: x
      }
    )
  ] });
}
function G({
  address: a,
  tokenType: n,
  transactions: d,
  loading: o
}) {
  const m = c.useRef(), { t } = y();
  c.useEffect(() => {
    const s = b.getInstance().createToken(n);
    m.current = s;
  }, [n]);
  const x = (s) => {
    var j;
    D("tx open", s);
    const l = `${(j = m.current) == null ? void 0 : j.openUrl}/${s.hash}`;
    window.open(l, "_blank");
  };
  return /* @__PURE__ */ e.jsxs(k, { className: "text-primary", children: [
    /* @__PURE__ */ e.jsx("div", { className: "flex justify-between items-center mt-4 mb-4", children: /* @__PURE__ */ e.jsx("span", { className: "text-xl", children: t("/dashboard.[token].recentTransactions.title") }) }),
    /* @__PURE__ */ e.jsxs(A, { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(H, { children: /* @__PURE__ */ e.jsxs(u, { className: "hover:bg-transparent", children: [
        /* @__PURE__ */ e.jsx(h, { className: "" }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[300px]", children: t("/dashboard.[token].recentTransactions.table.transactionHash") }),
        /* @__PURE__ */ e.jsx(h, { className: "", children: t("/dashboard.[token].recentTransactions.table.time") }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[180px]", children: t("/dashboard.[token].recentTransactions.table.from") }),
        /* @__PURE__ */ e.jsx(h, { className: "max-w-[180px]", children: t("/dashboard.[token].recentTransactions.table.to") }),
        /* @__PURE__ */ e.jsx(h, { className: "text-right", children: t("/dashboard.[token].recentTransactions.table.amount") })
      ] }) }),
      /* @__PURE__ */ e.jsx(I, { children: o ? /* @__PURE__ */ e.jsx(u, { children: /* @__PURE__ */ e.jsx(i, { colSpan: 6, className: "h-[200px]", children: /* @__PURE__ */ e.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e.jsx(w, { type: "breathe" }) }) }) }) : d.map((s) => /* @__PURE__ */ e.jsxs(u, { children: [
        /* @__PURE__ */ e.jsx(i, { className: "font-medium", children: U(s.from, a) ? /* @__PURE__ */ e.jsx("div", { className: "border border-gray-400 rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx($, { size: 14 }) }) : /* @__PURE__ */ e.jsx("div", { className: "bg-brand-foreground rounded-full w-[32px] h-[32px] flex items-center justify-center", children: /* @__PURE__ */ e.jsx(q, { size: 14, color: "#fff" }) }) }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[300px]", children: /* @__PURE__ */ e.jsx("p", { onClick: () => x(s), className: "cursor-pointer underline", children: /* @__PURE__ */ e.jsx(p, { address: s.hash, iconSize: 28 }) }) }),
        /* @__PURE__ */ e.jsx(i, { className: "font-medium", children: new Date(Number(s.timeStamp) * 1e3).toLocaleString() }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: s.from,
            children: /* @__PURE__ */ e.jsx(p, { address: s.from, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(i, { className: "max-w-[180px]", children: /* @__PURE__ */ e.jsx(
          "p",
          {
            title: s.to,
            children: /* @__PURE__ */ e.jsx(p, { address: s.to, iconSize: 28 })
          }
        ) }),
        /* @__PURE__ */ e.jsx(i, { className: "text-right", children: T(F(s.value)) })
      ] }, s.hash)) })
    ] }),
    d.length === 0 && /* @__PURE__ */ e.jsx("div", { className: "flex items-center justify-center py-8", children: /* @__PURE__ */ e.jsx("p", { className: "text-gray-400", children: t("/dashboard.[token].recentTransactions.noTransactions") }) })
  ] });
}
function J({
  tokenType: a
}) {
  const [n, d] = c.useState(""), [o, m] = c.useState(""), [t, x] = c.useState(!1), [s, l] = c.useState(!1), [j, v] = c.useState([]), { t: S } = y();
  c.useEffect(() => {
    C();
  }, []);
  const C = async () => {
    const r = M.all().address;
    m(r), N(r);
  }, R = async (r) => {
    x(!0);
    let f = await b.getInstance().createToken(a).getBalance(r);
    f = T(f), d(f), x(!1);
  }, L = async (r) => {
    try {
      l(!0);
      const f = await b.getInstance().createToken(a).getRecentTransactions(r);
      v(f);
    } catch {
      P.error("Transactions load failed");
    } finally {
      l(!1);
    }
  }, N = (r) => {
    R(r), L(r);
  };
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ e.jsxs(k, { className: "mb-4 p-6", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center text-primary", children: [
        /* @__PURE__ */ e.jsxs("h2", { className: "text-lg font-semibold flex items-center", children: [
          S("/dashboard.[token].balance"),
          ":",
          /* @__PURE__ */ e.jsx("div", { className: "flex items-center", children: t ? /* @__PURE__ */ e.jsx(w, { className: "ml-6" }) : /* @__PURE__ */ e.jsx("span", { className: "block ml-2", children: n }) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { title: "sync", className: "text-brand-foreground", children: /* @__PURE__ */ e.jsx(
          O,
          {
            size: 16,
            className: "cursor-pointer ml-4 text-2xl hover:scale-125 hover:rotate-180 transition duration-300",
            onClick: () => N(o)
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex mt-4", children: /* @__PURE__ */ e.jsx(_, { balance: n, address: o, tokenType: a }) })
    ] }),
    /* @__PURE__ */ e.jsx(
      G,
      {
        address: o,
        tokenType: a,
        transactions: j,
        loading: s
      }
    )
  ] }) });
}
function oe() {
  const { token: a } = z(), n = a == null ? void 0 : a.toUpperCase();
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(J, { tokenType: n }) });
}
export {
  oe as default
};
