'use client'

import { useState, useEffect, useContext } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Loader2 } from 'lucide-react'
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { MultisigWalletAddresses } from '@/app/api/multisig/storage'
import { WalletCard } from '@/app/assets/components/WalletCard'
import { WalletCardSkeleton } from '@/app/assets/components/WalletCard/WalletCardSkeleton'
import { PersonalWalletSettings } from './WalletSettings'
import { executePersonalTransaction, inviteUser } from '@/services/personalTransactionService'
import { User } from '@/app/api/user/storage'
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider'

interface PersonalAssetsProps {
  authMethod: AuthMethod
  userData: User
  authMethodId: string
}

export default function PersonalAssets({ authMethod, userData, authMethodId }: PersonalAssetsProps) {
  const { handleExpiredAuth } = useAuthExpiration()

  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [btcAddress, setBtcAddress] = useState<string | null>(null)
  const [addresses, setAddresses] = useState<MultisigWalletAddresses | null>(null)

  const [showMfa, setShowMfa] = useState(false)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [resetAmount, setResetAmount] = useState(false)

  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  // Initialize data from props
  useEffect(() => {
    if (userData && authMethodId) {
      setEmail(userData.email)
      setLitActionPkp(userData.litActionPkp ?? null)
      setBtcAddress(userData.addresses?.btc ?? null)
      setAddresses(userData.addresses ?? null)
      setIsLoading(false)
    }
  }, [userData, authMethodId])


  // MFA cancellation callback
  const handleMfaCancel = () => {
    setShowMfa(false)
    setIsSending(false)
  }

  // MFA verification successful callback
  const handleMfaVerify = async (state: SendTransactionDialogState) => {
    // Verify OTP in lit action
    await handleExecuteTransaction(state)
  };

  const handleExecuteTransaction = async (state: SendTransactionDialogState) => {
    if (!litActionPkp || !authMethodId) {
      throw new Error('Missing required data')
    }

    await executePersonalTransaction({
      state,
      authMethod,
      authMethodId,
      litActionPkp,
      btcAddress: btcAddress || '',
      handleExpiredAuth,
      setShowMfa,
      setIsSending,
      setResetAmount,
    })
  }

  const handleDetailsClick = () => {
    console.log('PersonalAssets handleDetailsClick triggered')
    window.open(`/wallet/personal/details`, '_blank')
  }

  const handleWalletSettingsClick = () => {
    console.log('PersonalAssets handleWalletSettingsClick triggered')
    showPersonalWalletSettings()
  }


  const handleInviteUser = async (state: SendTransactionDialogState) => {
    if (!authMethodId) {
      throw new Error('Missing auth data')
    }

    await inviteUser({
      state,
      authMethod,
      authMethodId,
      setIsSending,
      setResetAmount,
      setShowSendDialog,
    })
  }


  if (isLoading) {
    return <WalletCardSkeleton />
  }

  // Display wallet information
  return (
    <>
      {
        (email && btcAddress && litActionPkp) && (
          <WalletCard
            avatars={[{ email }]}
            walletName={email + ' (Personal)'}
            onSendClick={() => {
              setShowSendDialog(true)
            }}
            onWalletSettingsClick={handleWalletSettingsClick}
            onDetailsClick={handleDetailsClick}
            btcAddress={btcAddress}
            ethAddress={litActionPkp?.ethAddress}
            variant="personal"
          />
        )
      }

      {
        (authMethodId && showSendDialog) && (
          <SendTransactionDialog
            authMethod={authMethod}
            showSendDialog={showSendDialog}
            showMfa={showMfa}
            onSendTransaction={handleExecuteTransaction}
            onInviteUser={handleInviteUser}
            isSending={isSending}
            onMFACancel={handleMfaCancel}
            onMFAVerify={handleMfaVerify}
            onDialogOpenChange={setShowSendDialog}
            addresses={addresses || null}
            walletName={email || ''}
            resetAmount={resetAmount}
          />
        )
      }
    </>
  )
} 