import { j as e } from "./vendor-radix-AvjOLIap.js";
import { a8 as y, f as v, g as b, h as S, c as w, a1 as R, a2 as D, a3 as f, b2 as T } from "./main-60uJFh8T.js";
import { T as N, a as A, b as x, c as r, d as C, e as n } from "./table-DhN45uhp.js";
import { P } from "./index-CtyT24ij.js";
import { a as c } from "./vendor-react-DSEtE0wE.js";
import { B as z } from "./vendor-utils-BPVAmMsZ.js";
function E() {
  const {
    pagination: a,
    handlePageChange: t,
    updateTotal: l,
    updatePageSize: L
  } = y(), [h, j] = c.useState([]), [g, d] = c.useState(!1);
  c.useEffect(() => {
    o({
      page: a.current,
      pageSize: a.pageSize
    });
  }, []);
  const o = async ({
    page: s,
    pageSize: u
  }) => {
    try {
      d(!0);
      const i = await v.get("/reward/reward-list", {
        params: {
          page: s,
          pageSize: u
        }
      });
      b("res", i), j(i.data.items), l(i.data.total);
    } catch (i) {
      const p = S(i);
      z.error(p.message);
    } finally {
      d(!1);
    }
  }, m = (s) => {
    t(s), o({
      page: s,
      pageSize: a.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(N, { className: w(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(r, { children: "Type" }),
        /* @__PURE__ */ e.jsx(r, { className: "text-right", children: "Amount" }),
        /* @__PURE__ */ e.jsx(r, { children: "Status" }),
        /* @__PURE__ */ e.jsx(r, { children: "Created At" }),
        /* @__PURE__ */ e.jsx(r, { children: "Fulfilled At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(C, { children: h.map((s) => /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(n, { children: s.action }),
        /* @__PURE__ */ e.jsxs(n, { className: "text-right", children: [
          s.amount,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(n, { children: s.status === "FULFILLED" ? /* @__PURE__ */ e.jsx("span", { className: "text-green-500", children: "Fulfilled" }) : /* @__PURE__ */ e.jsx("span", { className: "text-yellow-500", children: "Processing" }) }),
        /* @__PURE__ */ e.jsx(n, { children: new Date(s.createdAt).toLocaleString() }),
        /* @__PURE__ */ e.jsx(n, { children: s.fulfilledAt ? new Date(s.fulfilledAt).toLocaleString() : "-" })
      ] }, s._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      P,
      {
        ...a,
        onChange: m
      }
    ) })
  ] });
}
function I() {
  const {
    pagination: a,
    handlePageChange: t,
    updateTotal: l,
    updatePageSize: L
  } = y(), [h, j] = c.useState([]), [g, d] = c.useState(!1);
  c.useEffect(() => {
    o({
      page: a.current,
      pageSize: a.pageSize
    });
  }, []);
  const o = async ({
    page: s,
    pageSize: u
  }) => {
    try {
      d(!0);
      const i = await v.get("/reward/activity-list", {
        params: {
          page: s,
          pageSize: u
        }
      });
      b("res", i), j(i.data.items), l(i.data.total);
    } catch (i) {
      const p = S(i);
      z.error(p.message);
    } finally {
      d(!1);
    }
  }, m = (s) => {
    t(s), o({
      page: s,
      pageSize: a.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(N, { className: w(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(r, { children: "Type" }),
        /* @__PURE__ */ e.jsx(r, { children: "Status" }),
        /* @__PURE__ */ e.jsx(r, { children: "Created At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(C, { children: h.map((s) => /* @__PURE__ */ e.jsxs(x, { children: [
        /* @__PURE__ */ e.jsx(n, { children: s.activityType }),
        /* @__PURE__ */ e.jsx(n, { children: s.status }),
        /* @__PURE__ */ e.jsx(n, { children: new Date(s.createdAt).toLocaleString() })
      ] }, s._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      P,
      {
        ...a,
        onChange: m
      }
    ) })
  ] });
}
const F = [
  {
    title: "Daily Login",
    reward: 50,
    description: "Triggered on your first login of the day"
  },
  {
    title: "Daily AI Engagement",
    reward: 100,
    description: "Triggered on your first AI interaction of the day"
  }
], k = [
  {
    title: "First AI Touch",
    reward: 300,
    description: "Triggered when user interacts with AI features for the first time"
  }
];
function V() {
  const a = ({ task: t }) => /* @__PURE__ */ e.jsxs("div", { className: "border rounded-lg p-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: t.title }),
      /* @__PURE__ */ e.jsxs("span", { className: "text-green-500", children: [
        "+",
        t.reward,
        " VAST"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-600", children: t.description })
  ] });
  return /* @__PURE__ */ e.jsxs("div", { className: "space-y-6 mt-6", children: [
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-bold mb-3", children: "Daily Tasks" }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: F.map((t, l) => /* @__PURE__ */ e.jsx(a, { task: t }, l)) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { children: [
      /* @__PURE__ */ e.jsx("h2", { className: "text-lg font-bold mb-3", children: "One-time Tasks" }),
      /* @__PURE__ */ e.jsx("div", { className: "space-y-4", children: k.map((t, l) => /* @__PURE__ */ e.jsx(a, { task: t }, l)) })
    ] })
  ] });
}
function q() {
  return /* @__PURE__ */ e.jsx("div", { className: "container py-6", children: /* @__PURE__ */ e.jsxs(R, { defaultValue: "rewards", children: [
    /* @__PURE__ */ e.jsxs(D, { children: [
      /* @__PURE__ */ e.jsx(f, { value: "rewards", children: "Rewards" }),
      /* @__PURE__ */ e.jsx(f, { value: "activities", children: "Activities" }),
      /* @__PURE__ */ e.jsx(f, { value: "rules", children: "Rules" })
    ] }),
    /* @__PURE__ */ e.jsx(T, { value: "rewards", children: /* @__PURE__ */ e.jsx(E, {}) }),
    /* @__PURE__ */ e.jsx(T, { value: "activities", children: /* @__PURE__ */ e.jsx(I, {}) }),
    /* @__PURE__ */ e.jsx(T, { value: "rules", children: /* @__PURE__ */ e.jsx(V, {}) })
  ] }) });
}
export {
  q as default
};
