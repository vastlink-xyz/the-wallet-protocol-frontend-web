'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { X } from 'lucide-react'
import { MultisigWalletFormContent } from '@/components/MultisigWalletFormContent'
import { MultisigWallet } from '@/app/api/multisig/storage'
import { useState } from 'react'
import { useEffect } from 'react'

interface MultisigSettingProps {
  mode: 'create' | 'edit'
  walletId?: string
  authMethod: AuthMethod
  userPkp: IRelayPKP
  authMethodId: string
  onClose: () => void
  onSuccess?: () => void
}

export function MultisigSetting({ 
  mode,
  walletId,
  authMethod, 
  userPkp, 
  authMethodId, 
  onClose,
  onSuccess 
}: MultisigSettingProps) {
  const [wallet, setWallet] = useState<MultisigWallet | undefined>()

  useEffect(() => {
    const fetchWallet = async () => {
      if (walletId) {
        const response = await fetch(`/api/multisig?id=${walletId}`)
        const data = await response.json()
        setWallet(data.data)
      }
    }
    fetchWallet()
  }, [walletId])

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
          
          {
            ((wallet && mode === 'edit') || mode === 'create') && (
              <MultisigWalletFormContent
                mode={mode}
                wallet={wallet}
                authMethod={authMethod}
                userPkp={userPkp}
                authMethodId={authMethodId}
                onCancel={onClose}
                onSuccess={() => {
                  if (onSuccess) {
                    onSuccess();
                  }
                  onClose();
                }}
              />
            )}
        </div>
      </div>
    </div>
  )
}
