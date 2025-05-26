import { ArrowDownCircle, Send, History, Settings } from "lucide-react"
import { getAvatarColor, getInitials } from "./helpers"
import { TokenAssets } from "./TokenAssets"

interface WalletCardProps {
  avatars: {
    email: string
  }[]
  walletName: string
  WalletSettings?: React.ReactNode
  onSendClick: () => void
  onReceiveClick: () => void
  onTxHistoryClick: () => void
  btcAddress: string
  ethAddress: string
  onWalletSettingsClick?: () => void
}

export function WalletCard({
  avatars,
  walletName,
  WalletSettings,
  onSendClick,
  onReceiveClick,
  onTxHistoryClick,
  btcAddress,
  ethAddress,
  onWalletSettingsClick,
}: WalletCardProps) {
  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm relative w-[800px] mx-auto">
      <header className="flex items-center justify-between">
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

        <h3 className="font-medium text-xl">{walletName}</h3>

        <div className="text-gray-500">
          {WalletSettings || <Settings className="cursor-pointer" onClick={onWalletSettingsClick} size={16} />}
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
          onClick={onReceiveClick} 
          className="flex flex-col items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
        >
          <ArrowDownCircle size={18} className="mb-1"/>
          Receive
        </button>
        <button 
          onClick={onTxHistoryClick} 
          className="flex flex-col items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-md text-sm font-medium text-gray-700 cursor-pointer"
        >
          <History size={18} className="mb-1"/>
          Tx history
        </button>
      </div>  
    </div>
  )
}
