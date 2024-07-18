import { Account } from "@/components/Account";

export function Header() {
  return <header className="border-b flex items-center justify-between px-6">
    <div className="flex items-center">
      <img src="/logo-alone.png" className="w-[48px]" alt="logo" />
      <p className="font-bold">Vast Wallet</p>
    </div>
    <Account />
  </header>
}
