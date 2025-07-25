import { ArrowUpRightFromCircle, ArrowDownLeftFromCircle, PlusIcon, ArrowLeftRightIcon } from "lucide-react"
import { ReceiveModal } from "./ReceiveModal"
import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { RampDialog } from "@/components/Transaction/RampDialog"
import { useRouter } from "next/navigation"

type buttons = "send" | "receive" | "swap" | "ramp"

interface WalletSendReceiveButtonsProps {
  onSendClick: () => void
  onSwapClick: () => void
  btcAddress: string
  ethAddress: string
  walletName: string
  className?: string
  excludes?: buttons[]
}

export function WalletSendReceiveButtons({
  onSendClick,
  onSwapClick,
  btcAddress,
  ethAddress,
  walletName,
  className,
  excludes,
}: WalletSendReceiveButtonsProps) {
  const t = useTranslations('WalletCard');

  const router = useRouter();

  const [receiveModalOpen, setReceiveModalOpen] = useState(false);
  const [showRampDialog, setShowRampDialog] = useState(false);

  const isButtonVisible = useCallback((button: buttons) => {
    if (excludes === undefined) {
      return true;
    }

    return !excludes.some((v) => v === button);
  }, excludes || [])

  return (
    <>
      <div className={cn(
        "flex justify-center gap-[40px] my-6",
        className
      )}>
        {/* Send Button */}
        {isButtonVisible("send") && (
          <div className="w-14 text-center cursor-pointer" onClick={onSendClick}>
            <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
              <ArrowUpRightFromCircle className="text-black" />
            </div>
            <p className="text-xs font-medium mt-1 text-black">
              {t('send')}
            </p>
          </div>
        )}

        {/* Receive Button */}
        {isButtonVisible("receive") && (
          <div className="w-14 text-center cursor-pointer" onClick={() => setReceiveModalOpen(true)}>
            <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
              <ArrowDownLeftFromCircle className="text-black" />
            </div>
            <p className="text-xs font-medium mt-1 text-black">
              {t('receive')}
            </p>
          </div>
        )}

        {/* Swap Button */}
        {isButtonVisible("swap") && (
          <div className="w-14 text-center cursor-pointer" onClick={() => router.push('/swap')}>
            <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
              <ArrowLeftRightIcon className="text-black" />
            </div>
            <p className="text-xs font-medium mt-1 text-black">
              {t('swap')}
            </p>
          </div>
        )}

        {/* Ramp Button */}
        {isButtonVisible("ramp") && (
          <div className="w-14 text-center cursor-pointer" onClick={() => setShowRampDialog(true)}>
            <div className="w-14 h-14 p-3 rounded-full border border-black/20 flex items-center justify-center">
              <PlusIcon className="text-black" />
            </div>
            <p className="text-xs font-medium mt-1 text-black">
              {t('ramp')}
            </p>
          </div>
        )}
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

      {isButtonVisible("ramp") && showRampDialog && (
        <RampDialog open={showRampDialog} onOpenChange={setShowRampDialog} btcAddress={btcAddress} ethAddress={ethAddress} />
      )}
    </>
  )
}