import { cn } from "@/lib/utils";
import { Overview } from "./components/Overview";
import { Summary } from "./components/Summary";
import { UserWallet } from "./components/UserWallet";
import { TransactionHistory } from "./components/TransactionHistory";

export default function DashboardPage() {
  return (
    <div className="">
      <Summary />

      <div className={cn(
        'mt-[40px] mobile:mt-[100px]',
        'w-[342px] tablet:w-[716px] laptop:w-[908px] desktop:w-[1224px]',
        'mx-auto',
      )}>
        {/* <Overview /> */}
        {/* <TransactionHistory /> */}
      </div>
      <UserWallet />
    </div>
  )
}
