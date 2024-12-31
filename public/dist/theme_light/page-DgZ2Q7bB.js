import { j as e } from "./vendor-radix-AvjOLIap.js";
import { a8 as T, f as v, g as y, h as b, c as w, a1 as R, a2 as E, a3 as f, b2 as S } from "./main-BuTZCSfy.js";
import { T as A, a as P, b as d, c as i, d as z, e as r } from "./table-D901Qmkm.js";
import { P as C } from "./index-DPYOHU_e.js";
import { a as n } from "./vendor-react-DSEtE0wE.js";
import { B as L } from "./vendor-utils-BPVAmMsZ.js";
function D() {
  const {
    pagination: t,
    handlePageChange: o,
    updateTotal: h,
    updatePageSize: N
  } = T(), [x, j] = n.useState([]), [g, l] = n.useState(!1);
  n.useEffect(() => {
    c({
      page: t.current,
      pageSize: t.pageSize
    });
  }, []);
  const c = async ({
    page: a,
    pageSize: p
  }) => {
    try {
      l(!0);
      const s = await v.get("/reward/reward-list", {
        params: {
          page: a,
          pageSize: p
        }
      });
      y("res", s), j(s.data.items), h(s.data.total);
    } catch (s) {
      const m = b(s);
      L.error(m.message);
    } finally {
      l(!1);
    }
  }, u = (a) => {
    o(a), c({
      page: a,
      pageSize: t.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(A, { className: w(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(i, { children: "Type" }),
        /* @__PURE__ */ e.jsx(i, { className: "text-right", children: "Amount" }),
        /* @__PURE__ */ e.jsx(i, { children: "Status" }),
        /* @__PURE__ */ e.jsx(i, { children: "Created At" }),
        /* @__PURE__ */ e.jsx(i, { children: "Fulfilled At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { children: x.map((a) => /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(r, { children: a.action }),
        /* @__PURE__ */ e.jsxs(r, { className: "text-right", children: [
          a.amount,
          " VAST"
        ] }),
        /* @__PURE__ */ e.jsx(r, { children: a.status === "FULFILLED" ? /* @__PURE__ */ e.jsx("span", { className: "text-green-500", children: "Fulfilled" }) : /* @__PURE__ */ e.jsx("span", { className: "text-yellow-500", children: "Processing" }) }),
        /* @__PURE__ */ e.jsx(r, { children: new Date(a.createdAt).toLocaleString() }),
        /* @__PURE__ */ e.jsx(r, { children: a.fulfilledAt ? new Date(a.fulfilledAt).toLocaleString() : "-" })
      ] }, a._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      C,
      {
        ...t,
        onChange: u
      }
    ) })
  ] });
}
function F() {
  const {
    pagination: t,
    handlePageChange: o,
    updateTotal: h,
    updatePageSize: N
  } = T(), [x, j] = n.useState([]), [g, l] = n.useState(!1);
  n.useEffect(() => {
    c({
      page: t.current,
      pageSize: t.pageSize
    });
  }, []);
  const c = async ({
    page: a,
    pageSize: p
  }) => {
    try {
      l(!0);
      const s = await v.get("/reward/activity-list", {
        params: {
          page: a,
          pageSize: p
        }
      });
      y("res", s), j(s.data.items), h(s.data.total);
    } catch (s) {
      const m = b(s);
      L.error(m.message);
    } finally {
      l(!1);
    }
  }, u = (a) => {
    o(a), c({
      page: a,
      pageSize: t.pageSize
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsxs(A, { className: w(g && "opacity-50"), children: [
      /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(i, { children: "Type" }),
        /* @__PURE__ */ e.jsx(i, { children: "Status" }),
        /* @__PURE__ */ e.jsx(i, { children: "Created At" })
      ] }) }),
      /* @__PURE__ */ e.jsx(z, { children: x.map((a) => /* @__PURE__ */ e.jsxs(d, { children: [
        /* @__PURE__ */ e.jsx(r, { children: a.activityType }),
        /* @__PURE__ */ e.jsx(r, { children: a.status }),
        /* @__PURE__ */ e.jsx(r, { children: new Date(a.createdAt).toLocaleString() })
      ] }, a._id)) })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "mt-[80px] text-center", children: /* @__PURE__ */ e.jsx(
      C,
      {
        ...t,
        onChange: u
      }
    ) })
  ] });
}
function U() {
  return /* @__PURE__ */ e.jsx("div", { className: "container py-6", children: /* @__PURE__ */ e.jsxs(R, { defaultValue: "rewards", children: [
    /* @__PURE__ */ e.jsxs(E, { children: [
      /* @__PURE__ */ e.jsx(f, { value: "rewards", children: "Rewards" }),
      /* @__PURE__ */ e.jsx(f, { value: "activities", children: "Activities" })
    ] }),
    /* @__PURE__ */ e.jsx(S, { value: "rewards", children: /* @__PURE__ */ e.jsx(D, {}) }),
    /* @__PURE__ */ e.jsx(S, { value: "activities", children: /* @__PURE__ */ e.jsx(F, {}) })
  ] }) });
}
export {
  U as default
};
