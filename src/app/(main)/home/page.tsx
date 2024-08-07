import { UserWallet } from "./components/UserWallet/index"

export default function HomePage() {
  return (
    <div>
      <div className="md:flex md:justify-between flex-wrap md:gap-6">
        <section className="flex-1">
          <UserWallet />
        </section>
        <section className="flex-1">
        </section>
      </div>
    </div>
  )
}
