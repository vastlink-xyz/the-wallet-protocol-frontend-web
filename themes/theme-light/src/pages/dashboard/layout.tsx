import { cn } from "@/lib/utils";
import { Summary } from "./components/Summary";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="">
      <Summary />
      <div className={cn(
        'w-[342px] tablet:w-[716px] laptop:w-[908px] desktop:w-[1224px]',
        'mx-auto',
      )}>
        <Outlet />
      </div>
    </div>
  )
}