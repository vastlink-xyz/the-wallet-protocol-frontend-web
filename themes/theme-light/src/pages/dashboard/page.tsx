import { Overview } from "./components/Overview";
import { TransactionHistory } from "./components/TransactionHistory";

export default function DashboardPage() {
  return (
    <div className="mt-[40px] mobile:mt-[100px]">
      {/* <Overview /> */}
      <TransactionHistory />
    </div>
  )
}
