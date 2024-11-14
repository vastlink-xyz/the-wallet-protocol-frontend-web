import { useTotalAsset } from "@/hooks/useTotalAsset";
import { Overview } from "./components/Overview";
import { TransactionHistory } from "./components/TransactionHistory";
import { auth } from "@/lib/utils";
import { Guide } from "./components/Guide";
import { RecommendedProducts } from "./components/RecommendedProducts";
import { useUserInfo } from "@/hooks/user/useUserInfo";
import { UserProducts } from "./components/UserProducts";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { address } = auth.all()
  const { data: totalAsset } = useTotalAsset({
    enabled: !!address,
  })
  const { data: userInfo } = useUserInfo()
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    if (totalAsset && totalAsset.isZero && (userInfo?.purchasedProducts ?? []).length === 0) {
      setShowGuide(true)
    } else {
      setShowGuide(false)
    }
  }, [totalAsset, userInfo])

  return (
    <div className="mt-[40px] mobile:mt-[100px]">
      {
        showGuide && <Guide />
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
