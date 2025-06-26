import { ArrowDownCircle, Send, History, Settings } from "lucide-react"
import { getAvatarColor, getInitials } from "./helpers"
import { TokenAssets } from "./TokenAssets"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { FileText } from "lucide-react"
import { ReceiveModal } from "./ReceiveModal"
import { useState } from "react"

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
}: WalletCardProps) {
  const [receiveModalOpen, setReceiveModalOpen] = useState(false);
  console.log('unsignedProposalsCount', unsignedProposalsCount)

  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm relative">
      <header className="flex items-center justify-between gap-1">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="h-10 w-10 rounded-full flex items-center justify-center text-white text-base font-medium shadow-sm"
              style={{ backgroundColor: getAvatarColor(avatar.email) }}
              title={avatar.email}
            >
              {getInitials(avatar.email)}
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="font-medium text-xl">{walletName}</h3>
          {walletId && (
            <p className="text-gray-500 text-xs break-words">ID: {walletId}</p>
          )}
        </div>

        <div className="text-gray-500">
          {WalletSettings || (
            <Tooltip>
              <TooltipTrigger asChild>
                <Settings className="cursor-pointer" onClick={onWalletSettingsClick} size={16} />
              </TooltipTrigger>
              <TooltipContent>
                Settings
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </header>
      
      <div>
        <TokenAssets btcAddress={btcAddress} ethAddress={ethAddress} />
      </div>
      
      <div className="grid grid-cols-3 gap-2 pt-2">
        <button 
          onClick={onSendClick} 
          className="flex flex-col items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
        >
          <Send size={18} className="mb-1"/>
          Send
        </button>
        <button 
          onClick={() => setReceiveModalOpen(true)  } 
          className="flex flex-col items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
        >
          <ArrowDownCircle size={18} className="mb-1"/>
          Receive
        </button>
        <button 
          onClick={onDetailsClick} 
          className="relative flex flex-col items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
        >
          <FileText size={18} className="mb-1"/>
          Transactions
          {unsignedProposalsCount && unsignedProposalsCount > 0 ? (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          ) : null}
        </button>
      </div>  

      <ReceiveModal
        addresses={{
          btc: btcAddress,
          eth: ethAddress,
        }}
        open={receiveModalOpen}
        footerText={walletName}
        onClose={() => setReceiveModalOpen(false)}
      />
    </div>
  )
}
