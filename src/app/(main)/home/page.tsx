import { UserWallet } from "./components/UserWallet/index"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-primary">Overview</h1>

      <div className="md:flex md:justify-between flex-wrap md:gap-6">
        <section className="flex-1">
          <UserWallet />
        </section>

        <section className="flex-1">
          {/* <RewardsGraph /> */}
        </section>

        <section className="flex-1">
        </section>
      </div>
    </div>
  )
}
