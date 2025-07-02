'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { MultisigWalletFormContent } from '@/components/MultisigWalletFormContent'
import { MultisigWallet } from '@/app/api/multisig/storage'
import { useState } from 'react'
import { useEffect } from 'react'
import { LogoLoading } from '@/components/LogoLoading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface MultisigSettingProps {
  open: boolean
  mode: 'create' | 'edit'
  walletId?: string
  authMethod: AuthMethod
  userPkp: IRelayPKP
  authMethodId: string
  onClose: () => void
  onSuccess?: () => void
}

export function MultisigSetting({ 
  open,
  mode,
  walletId,
  authMethod, 
  userPkp, 
  authMethodId, 
  onClose,
  onSuccess 
}: MultisigSettingProps) {
  const [wallet, setWallet] = useState<MultisigWallet | undefined>()
  const [isWalletLoading, setIsWalletLoading] = useState(!!walletId)

  useEffect(() => {
    const fetchWallet = async () => {
      if (walletId) {
        setIsWalletLoading(true)
        try {
          const response = await fetch(`/api/multisig?id=${walletId}`)
          const data = await response.json()
          setWallet(data.data)
        } catch (error) {
          console.error('Failed to fetch wallet:', error)
        } finally {
          setIsWalletLoading(false)
        }
      }
    }
    fetchWallet()
  }, [walletId])

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="p-0 max-w-[660px] sm:max-w-[660px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>Team Wallet Settings</DialogTitle>
          <DialogDescription>
            A team wallet requires approval from multiple signers to execute any transaction.
          </DialogDescription>
        </DialogHeader>
        
        <div className="max-h-[60vh] overflow-y-auto p-8 pt-4">
          {isWalletLoading ? (
            <div className="flex justify-center items-center py-8">
              <LogoLoading className='mt-[0px]' />
            </div>
          ) : (
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
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
