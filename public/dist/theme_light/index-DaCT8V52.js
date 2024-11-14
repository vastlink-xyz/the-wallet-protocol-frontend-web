import { j as t, t as c, v as j, w as N, x as y } from "./vendor-radix-CXAw23nV.js";
import { c as x, y as k, s as C, f as P } from "./main-OpUhS-4m.js";
import { r as U, j as I } from "./vendor-react-U4DfHahV.js";
import { a as T } from "./MarketplaceProvider-Cq_eOz3F.js";
function _({
  text: a,
  imgSrc: i = "/imgs/icons/empty.png",
  className: n
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: `flex flex-col items-center justify-center ${n || ""}`, children: [
    /* @__PURE__ */ t.jsx("img", { className: "w-[186px]", src: i, alt: "empty" }),
    a && /* @__PURE__ */ t.jsx("div", { className: "tablet:w-[509px] w-[346px] text-center text-[#979797] text-sm font-medium font-['Roboto'] leading-none mt-8", children: a })
  ] });
}
const $ = j, A = N, F = y, m = U.forwardRef(({ className: a, sideOffset: i = 4, ...n }, r) => /* @__PURE__ */ t.jsx(
  c,
  {
    ref: r,
    sideOffset: i,
    className: x(
      "z-50 overflow-visible rounded-md bg-black px-3 py-1.5 text-sm text-white",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "relative after:absolute after:content-[''] after:w-2 after:h-2 after:rotate-45 after:bg-black",
      "data-[side=bottom]:after:-top-1 data-[side=bottom]:after:left-1/2 data-[side=bottom]:after:-translate-x-1/2",
      "data-[side=top]:after:-bottom-1 data-[side=top]:after:left-1/2 data-[side=top]:after:-translate-x-1/2",
      "data-[side=left]:after:-right-1 data-[side=left]:after:top-1/2 data-[side=left]:after:-translate-y-1/2",
      "data-[side=right]:after:-left-1 data-[side=right]:after:top-1/2 data-[side=right]:after:-translate-y-1/2",
      a
    ),
    ...n
  }
));
m.displayName = c.displayName;
function d({ variant: a }) {
  const i = {
    featured: {
      bgColor: "bg-[#ffebc1]",
      text: "Featured",
      width: "w-[51px]",
      textAlign: "text-right",
      showIcon: !0
    },
    free: {
      bgColor: "bg-[#73d742]",
      text: "Free",
      width: "w-[25px]",
      textAlign: "text-center",
      showIcon: !1
    }
  }, { bgColor: n, text: r, width: e, textAlign: l, showIcon: o } = i[a];
  return /* @__PURE__ */ t.jsxs("div", { className: `absolute right-0 top-0 -translate-y-[50%] ${n} h-[40px] px-[20px] rounded-l-[20px]`, children: [
    /* @__PURE__ */ t.jsx("div", { className: "w-full h-[20px]" }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-center items-center h-[22px]", children: [
      o && /* @__PURE__ */ t.jsx("img", { className: "w-[12px]", src: "/imgs/icons/fire.svg", alt: "fire" }),
      /* @__PURE__ */ t.jsx("div", { className: `${e} ${l} text-black text-xs font-medium leading-none`, children: r })
    ] })
  ] });
}
function z({
  className: a,
  activedPurchasedProductIds: i,
  handleRampOpenModal: n,
  selectedCategory: r,
  ...e
}) {
  const l = I(), o = k(), {
    setIsModalOpen: f,
    setDappInfo: h,
    isConnected: p,
    setDisplayUriInput: g
  } = C(), { checkNewProducts: b } = T(), w = (s) => i.some((u) => u === s.id) ? "active" : "", v = async () => {
    if (w(e) !== "active") {
      l(`/marketplace/feature-detail/${e.id}`);
      return;
    }
    try {
      await P.post("/user/products/update-usage-status", {
        productId: e.id
      }), await o.invalidateQueries({ queryKey: ["userInfo"] }), await b();
    } catch (s) {
      console.error("Failed to mark product as viewed:", s);
    }
    if (e.products && e.followOrder) {
      const s = new URLSearchParams();
      s.set("flowId", e.id), s.set("flowIndex", "0"), l(`${e.serviceUrl}?${s.toString()}`);
      return;
    }
    if (e.integrationPoints.includes("walletconnect")) {
      p ? window.open(e.serviceUrl, "_blank") : (h({
        name: e.name,
        url: e.serviceUrl
      }), g(!1), f(!0));
      return;
    }
    if (e.vendor === "Moonpay") {
      n(e);
      return;
    }
    if (e.integrationPoints.includes("theme")) {
      window.location.href = e.serviceUrl;
      return;
    }
    if (e.category === "Security") {
      window.open(e.website, "_blank");
      return;
    }
    e.serviceUrl.startsWith("http") ? window.open(e.serviceUrl, "_blank") : e.serviceUrl.startsWith("/") && l(e.serviceUrl);
  };
  return /* @__PURE__ */ t.jsx($, { children: /* @__PURE__ */ t.jsxs(A, { delayDuration: 100, children: [
    /* @__PURE__ */ t.jsx(F, { asChild: !0, children: /* @__PURE__ */ t.jsxs(
      "div",
      {
        className: x([
          "laptop:w-[392px] tablet:w-[346px] mobile:w-[346px] w-[346px]",
          "h-[200px] p-5 bg-white rounded-[20px] border-[1.5px] border-[#ebebeb] relative overflow-hidden",
          "hover:border-[#111111] cursor-pointer",
          a
        ]),
        onClick: () => v(),
        children: [
          e.isFeatured ? /* @__PURE__ */ t.jsx(d, { variant: "featured" }) : e.price === 0 && /* @__PURE__ */ t.jsx(d, { variant: "free" }),
          /* @__PURE__ */ t.jsxs("div", { className: "justify-start items-center gap-4 inline-flex mb-5", children: [
            /* @__PURE__ */ t.jsx("img", { src: e.logoUrl, alt: e.name, className: "w-[52px] h-[52px] object-contain rounded-full" }),
            /* @__PURE__ */ t.jsxs("div", { className: "flex-col justify-center items-start inline-flex", children: [
              /* @__PURE__ */ t.jsx("div", { className: "text-[#111111] text-base font-bold leading-normal", children: e.name }),
              /* @__PURE__ */ t.jsx("div", { className: "h-4 p-0.5 bg-[#f2f2f2] rounded-sm justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ t.jsx("div", { className: "text-[#4f4f4f] text-[10px] font-normal leading-none", children: e.category }) })
            ] })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: "self-stretch max-h-[32px] text-[#828282] text-sm font-normal leading-4 line-clamp-2", children: e.description }),
          /* @__PURE__ */ t.jsxs("div", { className: "h-4 flex items-center mt-1 mb-5", children: [
            /* @__PURE__ */ t.jsx("span", { className: "text-[#979797] text-sm font-normal inline-block mr-1", children: "Developer:" }),
            /* @__PURE__ */ t.jsx(
              "span",
              {
                className: "text-black text-sm font-bold underline cursor-pointer",
                onClick: (s) => {
                  s.stopPropagation(), window.open(e.website, "_blank");
                },
                children: e.vendor
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "absolute bottom-5 right-5 h-4 flex items-center", children: [
            r === "Added" && /* @__PURE__ */ t.jsx("span", { className: "text-[#c4c4c4] text-sm font-medium leading-none inline-block mr-[10px]", children: "Added" }),
            /* @__PURE__ */ t.jsx("span", { className: "text-[#979797] text-sm font-medium leading-none", children: "Price: " }),
            e.discount && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsxs("span", { className: "text-[#979797] text-sm font-normal line-through leading-none", children: [
              e.price,
              " V"
            ] }) }),
            /* @__PURE__ */ t.jsxs("span", { className: "text-[#111111] text-base font-bold leading-none ml-1", children: [
              e.discount ? e.price * (100 - e.discount) / 100 : e.price,
              " V"
            ] }),
            e.discount && /* @__PURE__ */ t.jsx("div", { className: "ml-1 h-4 px-2 py-[5px] bg-black/5 rounded-[54px] justify-center items-center gap-2.5 inline-flex", children: /* @__PURE__ */ t.jsxs("div", { className: "text-center text-black text-xs font-medium leading-none", children: [
              "-",
              e.discount,
              "%"
            ] }) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ t.jsx(
      m,
      {
        side: "top",
        align: "center",
        alignOffset: 0,
        sideOffset: -80,
        children: /* @__PURE__ */ t.jsx("p", { className: "max-w-[300px] break-words", children: e.description })
      }
    )
  ] }) });
}
export {
  _ as E,
  z as P
};
