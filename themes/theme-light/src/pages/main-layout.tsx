import { Header } from "@/components/Header"
import ChatBot from '@/components/ChatBot'
import { Outlet } from "react-router-dom"
import { MarketplaceProvider } from "@/providers/MarketplaceProvider"
import { useLayoutFeatures } from "@/hooks/useLayoutFeatures"
import { VastWalletConnect } from "@/components/VastWalletConnect"
import { WalletConnectProvider } from "@/providers/WalletConnectProvider"

export default function MainLayout() {
  const { hideChatbot } = useLayoutFeatures();

  return (
    <section className="bg-background w-full flex flex-col min-h-screen">
      <WalletConnectProvider>
        <Header />

        {/* tips */}
        {/* <div className="w-full h-[45px] py-[9px] bg-[#fffbe6] rounded-sm border border-[#ffe58f] justify-between items-center gap-1.5 inline-flex px-8">
        <div className="flex-1 text-center">
          <div className="grow shrink basis-0 text-center text-black/90 text-sm font-normal font-['Roboto'] leading-snug">In order to make institutional cross border payment, you have to complete KYB and KYC verification</div>
        </div>
        <div className="h-4 justify-start items-center gap-2.5 flex">
          <div className="text-center text-black text-sm font-bold leading-none">Complete KYB &KYC</div>
          <img src="/imgs/icons/arrow_right.svg" />
        </div>
      </div> */}
        <div className='flex-grow'>
          <MarketplaceProvider>
            <Outlet />
          </MarketplaceProvider>
        </div>

        {!hideChatbot && <ChatBot />}

        <VastWalletConnect />
      </WalletConnectProvider>
    </section>
  )
}
