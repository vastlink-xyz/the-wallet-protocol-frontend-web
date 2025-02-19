import { j as r } from "./vendor-radix-BwSYOuH5.js";
import { c } from "./main-aWh1b37I.js";
import { l as u, b as x } from "./vendor-ui-utils-BbSwUILz.js";
import { r as h } from "./vendor-react-wyPiRY-L.js";
function w({
  current: t,
  total: o,
  pageSize: d = 30,
  onChange: i
}) {
  if (o === 0) return null;
  const l = Math.ceil(o / d), m = () => {
    const s = [];
    if (l <= 5)
      for (let e = 1; e <= l; e++)
        s.push(e);
    else if (s.push(1), t <= 3) {
      for (let e = 2; e <= 4; e++)
        s.push(e);
      s.push("ellipsis"), s.push(l);
    } else if (t >= l - 2) {
      s.push("ellipsis");
      for (let e = l - 3; e <= l; e++)
        s.push(e);
    } else
      s.push("ellipsis"), s.push(t - 1), s.push(t), s.push(t + 1), s.push("ellipsis"), s.push(l);
    return s.map((e, p) => {
      if (e === "ellipsis")
        return /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 flex items-center justify-center", children: /* @__PURE__ */ r.jsx("div", { className: "text-center text-black/25 text-sm font-normal leading-loose tracking-widest", children: "•••" }) }, `ellipsis-${p}`);
      const n = e === t;
      return /* @__PURE__ */ r.jsx(
        "div",
        {
          onClick: () => !n && (i == null ? void 0 : i(e)),
          className: c(
            "w-8 h-8 rounded-2xl border flex items-center justify-center",
            n ? "bg-[#52c41a] border-[#52c41a]" : "bg-white border-[#d9d9d9] hover:border-[#52c41a] hover:text-[#52c41a] cursor-pointer"
          ),
          children: /* @__PURE__ */ r.jsx("div", { className: c(
            "text-center text-sm",
            n ? "text-white font-medium" : "text-black/90 font-normal"
          ), children: e })
        },
        e
      );
    });
  };
  return /* @__PURE__ */ r.jsx("div", { className: "h-8 justify-start items-center gap-4 inline-flex", children: /* @__PURE__ */ r.jsxs("div", { className: "justify-start items-center gap-2 flex", children: [
    /* @__PURE__ */ r.jsx("div", { className: "pr-2 flex items-center", children: /* @__PURE__ */ r.jsxs("div", { className: "text-black/90 text-sm font-normal", children: [
      "Total ",
      o,
      " items"
    ] }) }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        onClick: () => t > 1 && (i == null ? void 0 : i(t - 1)),
        className: c(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          t > 1 ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ r.jsx(u, { className: "w-4 h-4" })
      }
    ),
    m(),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        onClick: () => t < l && (i == null ? void 0 : i(t + 1)),
        className: c(
          "w-8 h-8 bg-white rounded-2xl border border-[#d9d9d9] flex items-center justify-center",
          t < l ? "cursor-pointer hover:border-[#52c41a]" : "cursor-not-allowed opacity-50"
        ),
        children: /* @__PURE__ */ r.jsx(x, { className: "w-4 h-4" })
      }
    )
  ] }) });
}
function N({
  total: t = 0,
  pageSize: o = 30
} = {}) {
  const [d, i] = h.useState({
    current: 1,
    total: t,
    pageSize: o
  });
  return {
    pagination: d,
    handlePageChange: (a) => {
      i((e) => ({
        ...e,
        current: a
      }));
    },
    updateTotal: (a) => {
      i((e) => ({
        ...e,
        total: a
      }));
    },
    updatePageSize: (a) => {
      i((e) => ({
        ...e,
        pageSize: a,
        // reset to first page, when page size changed
        current: 1
      }));
    }
  };
}
const P = 30;
export {
  P as D,
  w as P,
  N as u
};
