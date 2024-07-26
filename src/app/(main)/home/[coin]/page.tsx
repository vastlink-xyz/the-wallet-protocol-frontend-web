import { CoinType } from "@/types/coins";
import { CoinDetail } from "./components/CoinDetail";

export default function TokenPage({
  params
}: {
  params: {
    coin: CoinType;
  }
}) {
  return (
    <div>
      <CoinDetail coinType={params.coin} />
    </div>
  )
}
