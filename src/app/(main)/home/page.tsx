import { RecentTransactions } from "./components/RecentTransactions"
import { RewardsGraph } from "./components/RewardsGraph"
import { UserWallet } from "./components/UserWallet"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Overview</h1>

      <div className="flex justify-between gap-6">
        <section className="flex-1">
          <UserWallet />
        </section>

        <section className="flex-1">
          <RewardsGraph />
        </section>

        <section className="flex-1">
          <RecentTransactions />
        </section>
      </div>
    </div>
  )
}
