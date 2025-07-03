import { Settings, ChevronRightCircle, ArrowUpRightFromCircle, ArrowDownLeftFromCircle, Plus, PlusCircle, MoreHorizontal } from "lucide-react"
import { getAvatarColor, getInitials } from "./helpers"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ReceiveModal } from "./ReceiveModal"
import { useState } from "react"
import { cn } from "@/lib/utils"

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
            className="text-black bg-white px-4 py-2.5 rounded-[20px] text-sm font-medium flex items-center"
          >
            <PlusCircle className="w-4 h-4 text-black mr-1" />
            <span>Create a team wallet</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn(
        "p-4 w-[343px] h-[326px] rounded-[12px] relative cursor-pointer transition-all duration-200",
        isPersonal ? "bg-[#181818] hover:bg-[#252525]" : "bg-[#f5f5f5] hover:bg-[#eeeeee]",
        "hover:shadow-lg hover:scale-[1.02]"
      )}
      onClick={onDetailsClick}
    >
      <div className="flex items-center justify-end">
        <div className={cn("text-[#979797]")}>
          {WalletSettings || (
            <Tooltip>
              <TooltipTrigger asChild>
                <Settings className="w-5 h-5 cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  onWalletSettingsClick?.();
                }} />
              </TooltipTrigger>
              <TooltipContent>
                Settings
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="h-[150px]">
        <p className={cn(
          "text-lg text-center mb-[6px] font-bold",
          isPersonal ? "text-[#ffffff]" : "text-[#000000]"
        )}>{walletName}</p>
        
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
        
        {/* <p className={cn(
          "mb-[65px] text-3xl font-bold text-center",
          isPersonal ? "text-white" : "text-black"
        )}>$12,324</p> */}
      </div>

      <div className="flex justify-center gap-[40px]">
        <div className="w-14 text-center cursor-pointer" onClick={(e) => {
          e.stopPropagation();
          onSendClick();
        }}>
          <div className={cn(
            "w-14 h-14 p-3 rounded-full border flex items-center justify-center",
            isPersonal ? "border-white/20" : "border-black/20"
          )}>
            <ArrowUpRightFromCircle className={cn(isPersonal ? "text-white" : "text-black")} />
          </div>
          <p className={cn(
            "text-xs font-medium mt-1",
            isPersonal ? "text-white" : "text-black"
          )}>Send</p>
        </div>

        <div className="w-14 text-center cursor-pointer" onClick={(e) => {
          e.stopPropagation();
          setReceiveModalOpen(true);
        }}>
          <div className={cn(
            "w-14 h-14 p-3 rounded-full border flex items-center justify-center",
            isPersonal ? "border-white/20" : "border-black/20"
          )}>
            <ArrowDownLeftFromCircle className={cn(isPersonal ? "text-white" : "text-black")} />
          </div>
          <p className={cn(
            "text-xs font-medium mt-1",
            isPersonal ? "text-white" : "text-black"
          )}>Receive</p>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <MoreHorizontal
              className={cn(
                "cursor-pointer",
                isPersonal ? "text-[#979797]" : "text-[#666666]"
              )} 
              onClick={(e) => {
                e.stopPropagation();
                onDetailsClick();
              }}
            />
          </TooltipTrigger>
          <TooltipContent>
            Details
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
