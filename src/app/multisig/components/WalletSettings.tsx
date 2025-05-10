'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { X } from 'lucide-react'
import { WalletSettingsContent } from '@/components/WalletSettingsContent'

interface WalletSettingsProps {
  wallet: any // MultisigWallet
  currentPkp: IRelayPKP
  authMethod: AuthMethod
  onClose: () => void
  onSuccess?: () => void
}

export function WalletSettings({
  wallet,
  currentPkp,
  authMethod,
  onClose,
  onSuccess
}: WalletSettingsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full relative flex flex-col max-h-[90vh]">
        {/* Fixed header */}
        <div className="sticky top-0 p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Modify Wallet Settings</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Scrollable content area with all logic contained within the component */}
        <div className="p-6 overflow-y-auto">
          <WalletSettingsContent 
            wallet={wallet}
            currentPkp={currentPkp}
            authMethod={authMethod}
            onRequestClose={onClose}
            onUpdateSuccess={onSuccess}
          />
        </div>
      </div>
    </div>
  );
} 