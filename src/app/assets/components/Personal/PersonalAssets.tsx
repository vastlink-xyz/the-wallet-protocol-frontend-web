'use client'

import { useState, useEffect, useContext } from 'react'
import { IRelayPKP } from '@lit-protocol/types'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { MultisigWalletAddresses } from '@/app/api/multisig/storage'
import { WalletCard } from '@/app/assets/components/WalletCard'
import { WalletCardSkeleton } from '@/app/assets/components/WalletCard/WalletCardSkeleton'
import { executePersonalTransaction, inviteUser } from '@/services/personalTransactionService'
import { User } from '@/app/api/user/storage'
import { PersonalWalletSettingsContext } from '@/providers/PersonalWalletSettingsProvider'
import { useSecurityVerification } from '@/hooks/useSecurityVerification'
import { SwapDialog } from '@/components/Transaction/SwapDialog'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'

interface PersonalAssetsProps {
  userData: User
  authMethodId: string
}

export default function PersonalAssets({ userData, authMethodId }: PersonalAssetsProps) {
  const { handleExpiredAuth } = useAuthExpiration()

  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [btcAddress, setBtcAddress] = useState<string | null>(null)
  const [addresses, setAddresses] = useState<MultisigWalletAddresses | null>(null)

  const [showSendDialog, setShowSendDialog] = useState(false)
  const [showSwapDialog, setShowSwapDialog] = useState(false)
  const [resetAmount, setResetAmount] = useState(false)

  const { showPersonalWalletSettings } = useContext(PersonalWalletSettingsContext);

  // Get auth method data from localStorage
  const authMethod = getAuthMethodFromStorage()
  
  // Create executeTransaction function for the security hook
  const executeTransactionWithSecurity = async (params: any) => {
    if (!litActionPkp || !authMethodId || !authMethod) {
      throw new Error('Missing required data')
    }

    return await executePersonalTransaction({
      state: params.state,
      accessToken: authMethod.accessToken,
      authMethodType: authMethod.authMethodType,
      authMethodId,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
      litActionPkp,
      btcAddress: btcAddress || '',
      handleExpiredAuth,
      setIsSending: () => {}, // No-op since we use securityVerification.isVerifying
      setResetAmount,
      pinCode: params.pinCode,
      mfaType: params.mfaType,
      mfaCode: params.mfaCode,
      mfaMethodId: params.mfaMethodId,
    })
  }

  // Use the new security verification hook
  const securityVerification = useSecurityVerification({
    executeTransaction: executeTransactionWithSecurity,
  });

  // Initialize data from props
  useEffect(() => {
    if (userData && authMethodId) {
      setEmail(userData.primaryEmail)
      setLitActionPkp(userData.litActionPkp ?? null)
      setBtcAddress(userData.addresses?.btc ?? null)
      setAddresses(userData.addresses ?? null)
      setIsLoading(false)
    }
  }, [userData, authMethodId])

  if (!authMethod) {
    return <div>Authentication required</div>
  }


  const handleExecuteTransaction = async (state: SendTransactionDialogState) => {
    // Use the security verification hook to handle PIN and MFA verification
    await securityVerification.verify({ state })
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
      accessToken: authMethod.accessToken,
      authMethodId,
      setIsSending: () => {}, // No-op since we use securityVerification.isVerifying for transaction state
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
            onSwapClick={() => {
              setShowSwapDialog(true)
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
        (authMethodId && litActionPkp && showSendDialog) && (
          <SendTransactionDialog
            showSendDialog={showSendDialog}
            showMfa={false}
            onSendTransaction={handleExecuteTransaction}
            onInviteUser={handleInviteUser}
            isSending={securityVerification.isVerifying}
            onDialogOpenChange={setShowSendDialog}
            addresses={addresses || null}
            walletName={email || ''}
            resetAmount={resetAmount}
            userLitAction={litActionPkp}
            disablePin={true}
          />
        )
      }

      {
        (authMethodId && litActionPkp && showSwapDialog) && (
          <SwapDialog
            open={showSwapDialog}
            onOpenChange={setShowSwapDialog}
          />
        )
      }

      {/* Security verification dialogs */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </>
  )
} 