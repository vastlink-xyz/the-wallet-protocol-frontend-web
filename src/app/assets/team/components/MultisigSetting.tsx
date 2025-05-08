'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { X } from 'lucide-react'
import { CreateMultisigForm } from './CreateMultisigForm'

interface MultisigSettingProps {
  authMethod: AuthMethod
  userPkp: IRelayPKP
  sessionPkp: IRelayPKP
  googleAuthMethodId: string
  onClose: () => void
  onSuccess?: () => void
}

export function MultisigSetting({ 
  authMethod, 
  userPkp, 
  sessionPkp,
  googleAuthMethodId, 
  onClose,
  onSuccess 
}: MultisigSettingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-semibold mb-6">Create Multisig Wallet</h2>
        <p className="text-sm text-gray-500 mb-4">A multisig wallet requires approval from multiple signers to execute any transaction.</p>
        
        <CreateMultisigForm
          authMethod={authMethod}
          userPkp={userPkp}
          sessionPkp={sessionPkp}
          googleAuthMethodId={googleAuthMethodId}
          onSuccess={() => {
            if (onSuccess) {
              onSuccess();
            }
            onClose();
          }}
        />
      </div>
    </div>
  )
}
