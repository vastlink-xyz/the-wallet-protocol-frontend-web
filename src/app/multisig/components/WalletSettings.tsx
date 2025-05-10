'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { X } from 'lucide-react'
import { MultisigWalletFormContent } from '@/components/MultisigWalletFormContent'

interface WalletSettingsProps {
  wallet: any // MultisigWallet
  currentPkp: IRelayPKP
  authMethod: AuthMethod
  onClose: () => void
  onSuccess?: () => void
  googleAuthMethodId: string
}

export function WalletSettings({
  wallet,
  currentPkp,
  authMethod,
  onClose,
  onSuccess,
  googleAuthMethodId
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
        
        {/* Scrollable content area with components */}
        <div className="p-6 overflow-y-auto">
          <MultisigWalletFormContent
            mode="edit"
            wallet={wallet}
            userPkp={currentPkp}
            authMethod={authMethod}
            googleAuthMethodId={googleAuthMethodId}
            onCancel={onClose}
            onSuccess={onSuccess}
          />
        </div>
      </div>
    </div>
  );
} 