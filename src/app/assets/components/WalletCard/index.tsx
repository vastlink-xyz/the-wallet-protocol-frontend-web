import { Settings, ChevronRightCircle, ArrowUpRightFromCircle, ArrowDownLeftFromCircle, Plus, PlusCircle, MoreHorizontal } from "lucide-react"
import { getAvatarColor, getInitials } from "./helpers"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Balance } from "./Balance"
import { ReceiveModal } from "./ReceiveModal"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface WalletCardProps {
  avatars: {
    email: string
  }[]
  walletName: string
  walletId?: string
  WalletSettings?: React.ReactNode
  onSendClick: () => void
  onDetailsClick: () => void
  btcAddress: string
  ethAddress: string
  onWalletSettingsClick?: () => void
  unsignedProposalsCount?: number
  variant?: 'personal' | 'team' | 'create'
  maxAvatars?: number
  onCreateClick?: () => void
}

export function WalletCard({
  avatars,
  walletName,
  walletId,
  WalletSettings,
  onSendClick,
  onDetailsClick,
  btcAddress,
  ethAddress,
  onWalletSettingsClick,
  unsignedProposalsCount,
  variant = 'personal',
  maxAvatars = 5,
  onCreateClick,
}: WalletCardProps) {
  const transCommon = useTranslations("Common")
  const transWalletCard = useTranslations("WalletCard")

  const [receiveModalOpen, setReceiveModalOpen] = useState(false);
  console.log('unsignedProposalsCount', unsignedProposalsCount)

  const isPersonal = variant === 'personal'
  const isCreate = variant === 'create'
  const visibleAvatars = avatars.slice(0, maxAvatars)
  const remainingCount = Math.max(0, avatars.length - maxAvatars)

  // Create variant renders a simplified card
  if (isCreate) {
    return (
      <div 
        className={cn(
          "p-4 w-[343px] h-[326px] rounded-[12px] relative",
          "bg-[#f5f5f5] flex flex-col items-center justify-center",
        )}
      >
        <div className="text-center cursor-pointer flex items-center" onClick={onCreateClick}>
          <p
            className="text-white bg-black px-4 py-2.5 rounded-[20px] text-sm font-medium flex items-center cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-white mr-1" />
            <span>{transWalletCard("create_team_wallet")}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "p-4 w-[343px] h-[326px] rounded-[12px] relative transition-all duration-200",
        isPersonal ? "bg-[#181818]" : "bg-[#f5f5f5]",
        "cursor-pointer hover:shadow-lg",
      )}
      onClick={() => {
        onDetailsClick();
      }}
    >
      <div className="flex items-center justify-end pointer-events-auto z-10">
        <div className={cn("text-[#979797]")}
          onClick={e => e.stopPropagation()} // Prevent card click
        >
          {WalletSettings || (
            <Tooltip>
              <TooltipTrigger asChild>
                <Settings className="w-5 h-5 cursor-pointer" onClick={onWalletSettingsClick} />
              </TooltipTrigger>
              <TooltipContent>
                {transCommon("settings")}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="h-[150px]">
        <p className={cn(
          "text-lg text-center mb-[6px] font-bold cursor-pointer hover:opacity-80 transition-opacity",
          isPersonal ? "text-[#ffffff]" : "text-[#000000]"
        )} onClick={e => { e.stopPropagation(); onDetailsClick(); }}>{walletName}</p>

        <Balance variant={variant} addresses={{
          btc: btcAddress,
          eth: ethAddress,
        }} />

        {variant === 'team' && avatars.length > 0 && (
          <div className="flex justify-center items-center gap-1 mb-4 mt-4">
            <div className="flex -space-x-2">
              {visibleAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className="h-8 w-8 bg-[#dadada] rounded-full flex items-center justify-center text-[16px] shadow-[-2px_4px_12px_rgba(0,0,0,0.25)]"
                  title={avatar.email}
                >
                  {getInitials(avatar.email)}
                </div>
              ))}
              {remainingCount > 0 && (
                <div className="h-6 w-6 rounded-full flex items-center justify-center text-black text-[10px] font-medium bg-[#d9d9d9] border-3 border-[#f5f5f5] translate-y-3 -ml-1">
                  +{remainingCount}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-[40px] pointer-events-auto z-10">
        <div className="w-14 text-center cursor-pointer" onClick={e => { e.stopPropagation(); onSendClick(); }}>
          <div className={cn(
            "w-14 h-14 p-3 rounded-full border flex items-center justify-center",
            isPersonal ? "border-white/20" : "border-black/20"
          )}>
            <ArrowUpRightFromCircle className={cn(isPersonal ? "text-white" : "text-black")} />
          </div>
          <p className={cn(
            "text-xs font-medium mt-1",
            isPersonal ? "text-white" : "text-black"
          )}>
            {transWalletCard("send")}
          </p>
        </div>

        <div className="w-14 text-center cursor-pointer" onClick={e => { e.stopPropagation(); setReceiveModalOpen(true); }}>
          <div className={cn(
            "w-14 h-14 p-3 rounded-full border flex items-center justify-center",
            isPersonal ? "border-white/20" : "border-black/20"
          )}>
            <ArrowDownLeftFromCircle className={cn(isPersonal ? "text-white" : "text-black")} />
          </div>
          <p className={cn(
            "text-xs font-medium mt-1",
            isPersonal ? "text-white" : "text-black"
          )}>
            {transWalletCard("receive")}
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-4 pointer-events-auto z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <MoreHorizontal
              className={cn(
                "cursor-pointer",
                isPersonal ? "text-[#979797]" : "text-[#666666]"
              )} 
              onClick={e => { e.stopPropagation(); onDetailsClick(); }}
            />
          </TooltipTrigger>
          <TooltipContent>
            {transCommon("details")}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Notification badge for unsigned proposals */}
      {(unsignedProposalsCount && unsignedProposalsCount > 0) ? (
        <span className="absolute top-2 left-2 w-3 h-3 bg-red-500 rounded-full"></span>
      ) : null}

      <ReceiveModal
        addresses={{
          btc: btcAddress,
          eth: ethAddress,
        }}
        open={receiveModalOpen}
        footerText={walletName}
        onClose={setReceiveModalOpen}
      />
    </div>
  )
}
