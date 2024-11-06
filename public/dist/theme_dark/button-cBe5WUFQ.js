import { j as s, ae as i } from "./vendor-radix-CjL5_ZCn.js";
import { a as u } from "./vendor-react-D6ZgZFQ5.js";
import { o as c } from "./vendor-ui-utils-CwlQOkPE.js";
import "./main-BJkbpKmW.js";
import { c as b } from "./style-CX3mXOu3.js";
const l = c(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-3 rounded-full disabled:bg-[#f5f5f5] disabled:text-[#bdbdbd] disabled:border disabled:border-[#d7d7d7] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground disabled:bg-transparent disabled:text-[#bdbdbd] disabled:cursor-not-allowed",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), f = u.forwardRef(
  ({ className: e, variant: r, size: t, asChild: o = !1, ...d }, n) => {
    const a = o ? i : "button";
    return /* @__PURE__ */ s.jsx(
      a,
      {
        className: b(l({ variant: r, size: t, className: e })),
        ref: n,
        ...d
      }
    );
  }
);
f.displayName = "Button";
export {
  f as B
};
