import { ArrowUpRightFromCircle, ArrowDownLeftFromCircle } from "lucide-react"
import { ReceiveModal } from "./ReceiveModal"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface WalletSendReceiveButtonsProps {
  onSendClick: () => void
  btcAddress: string
  ethAddress: string
  walletName: string
  className?: string
}

export function WalletSendReceiveButtons({
  onSendClick,
  btcAddress,
  ethAddress,
  walletName,
  className,
}: WalletSendReceiveButtonsProps) {
  const t = useTranslations('WalletCard')

  const [receiveModalOpen, setReceiveModalOpen] = useState(false)

  return (
    <>
      <div className={cn(
        "flex justify-center gap-[40px] my-6",
        className
      )}>
        {/* Send Button */}
        <div className="w-14 text-center cursor-pointer" onClick={onSendClick}>
          <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
            <ArrowUpRightFromCircle className="text-black" />
          </div>
          <p className="text-xs font-medium mt-1 text-black">
            {t('send')}
          </p>
        </div>

        {/* Receive Button */}
        <div className="w-14 text-center cursor-pointer" onClick={() => setReceiveModalOpen(true)}>
          <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
            <ArrowDownLeftFromCircle className="text-black" />
          </div>
          <p className="text-xs font-medium mt-1 text-black">
            {t('receive')}
          </p>
        </div>
      </div>

      <ReceiveModal
        addresses={{
          btc: btcAddress,
          eth: ethAddress,
        }}
        open={receiveModalOpen}
        footerText={walletName}
        onClose={setReceiveModalOpen}
      />
    </>
  )
}