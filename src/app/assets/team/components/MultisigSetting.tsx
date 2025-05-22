'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { X } from 'lucide-react'
import { MultisigWalletFormContent } from '@/components/MultisigWalletFormContent'

interface MultisigSettingProps {
  authMethod: AuthMethod
  userPkp: IRelayPKP
  sessionPkp: IRelayPKP
  authMethodId: string
  onClose: () => void
  onSuccess?: () => void
}

export function MultisigSetting({ 
  authMethod, 
  userPkp, 
  sessionPkp,
  authMethodId, 
  onClose,
  onSuccess 
}: MultisigSettingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full relative flex flex-col max-h-[90vh]">
        {/* Fixed header */}
        <div className="sticky top-0 p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create A Team Wallet</h2>
        <button 
          onClick={onClose} 
            className="text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        </div>
        
        {/* Scrollable content area */}
        <div className="p-6 overflow-y-auto">
          <p className="text-sm text-gray-500 mb-4">A team wallet requires approval from multiple signers to execute any transaction.</p>
          
          <MultisigWalletFormContent
            mode="create"
            authMethod={authMethod}
            userPkp={userPkp}
            sessionPkp={sessionPkp}
            authMethodId={authMethodId}
            onCancel={onClose}
            onSuccess={() => {
              if (onSuccess) {
                onSuccess();
              }
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  )
}
