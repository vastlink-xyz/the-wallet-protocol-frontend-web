'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { MultisigWalletFormContent } from '@/components/MultisigWalletFormContent'
import { MultisigWallet } from '@/app/api/multisig/storage'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { LogoLoading } from '@/components/LogoLoading'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { MultisigSettingsContext } from '@/providers/MultisigSettingsProvider'
import { useTranslations } from 'next-intl'

export function MultisigSettings() {
  const t = useTranslations('TeamWalletSettings')

  const { params, isMultisigSettingsOpen, closeMultisigSettings } = useContext(MultisigSettingsContext)

  const [wallet, setWallet] = useState<MultisigWallet | undefined>()
  const [isWalletLoading, setIsWalletLoading] = useState(!!params?.walletId)

  useEffect(() => {
    const fetchWallet = async () => {
      if (params?.walletId) {
        setIsWalletLoading(true)
        try {
          const response = await fetch(`/api/multisig?id=${params!.walletId}`)
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
  }, [params?.walletId])

  return (
    <Dialog open={isMultisigSettingsOpen} onOpenChange={(isOpen) => !isOpen && closeMultisigSettings()}>
      <DialogContent className="p-0 max-w-[660px] sm:max-w-[660px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>
            {t('description')}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[60vh] overflow-y-auto p-8 pt-4">
          {isWalletLoading ? (
            <div className="flex justify-center items-center py-8">
              <LogoLoading className='mt-[0px]' />
            </div>
          ) : (
            ((wallet && params?.mode === 'edit') || params?.mode === 'create') && (
              <MultisigWalletFormContent
                mode={params.mode}
                wallet={wallet}
                authMethod={params.authMethod}
                userPkp={params.userPkp}
                authMethodId={params.authMethodId}
                onCancel={() => closeMultisigSettings()}
                onSuccess={() => {
                  if (params.onSuccess) {
                    params.onSuccess();
                  }
                  closeMultisigSettings();
                }}
              />
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
