import { Account } from "@/components/UserAccount";
import { VastWalletConnect } from "../VastWalletConnect";

export function Header() {
  return <header className="border-b flex items-center justify-between px-2 md:px-6">
    <div className="flex items-center">
      <img src="/logo-alone.png" className="w-[48px]" alt="logo" />
      <p className="font-bold hidden md:block text-primary">Vast Wallet</p>
    </div>

    <div className="flex items-center">
      <div className="mr-2">
        <VastWalletConnect />
      </div>
      <Account />
    </div>
  </header>
}
