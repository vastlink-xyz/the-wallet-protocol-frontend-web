import { useTotalAsset } from "@/hooks/useTotalAsset";
import { Overview } from "./components/Overview";
import { TransactionHistory } from "./components/TransactionHistory";
import { auth } from "@/lib/utils";
import { Guide } from "./components/Guide";
import { RecommendedProducts } from "./components/RecommendedProducts";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { UserProducts } from "./components/UserProducts";

export default function DashboardPage() {
  const { address } = auth.all()
  const { data: totalAsset } = useTotalAsset({
    enabled: !!address,
  })
  const { data: userInfo } = useUserInfo()

  return (
    <div className="mt-[40px] tablet:mt-[100px]">
      {
        (totalAsset && totalAsset.isZero) && <Guide />
      }

      {
        (totalAsset && !totalAsset.isZero) && <Overview />
      }

      {
        (userInfo?.purchasedProducts ?? []).length > 0 ? (
          <UserProducts />
        ) : (
          <RecommendedProducts className="mt-[48px] tablet:mt-[100px]" />
        )
      }

      <div className="mt-[60px] tablet:mt-[100px]">
        <TransactionHistory />
      </div>
    </div>
  )
}
