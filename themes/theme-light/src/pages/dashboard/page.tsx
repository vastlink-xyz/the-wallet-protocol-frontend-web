import { useTotalAsset } from "@/hooks/useTotalAsset";
import { Overview } from "./components/Overview";
import { TransactionHistory } from "./components/TransactionHistory";
import { auth } from "@/lib/utils";
import { Guide } from "./components/Guide";

export default function DashboardPage() {
  const { address } = auth.all()
  const { data: totalAsset, isFetched } = useTotalAsset({
    enabled: !!address,
  })

  return (
    <div className="mt-[40px] mobile:mt-[100px]">
      {
        totalAsset?.isZero ? (
          <Guide />
        ) : (
          <Overview />
        )
      }
      <div className="mt-[60px] tablet:mt-[100px]">
        <TransactionHistory />
      </div>
    </div>
  )
}
