'use client'

import { useState, useEffect } from 'react'
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

interface PersonalAssetsProps {
  authMethod: AuthMethod
}

export default function PersonalAssets({ authMethod }: PersonalAssetsProps) {
  const { handleExpiredAuth } = useAuthExpiration()

  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState<string | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [btcAddress, setBtcAddress] = useState<string | null>(null)
  const [addresses, setAddresses] = useState<MultisigWalletAddresses | null>(null)

  const [showMfa, setShowMfa] = useState(false)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [resetAmount, setResetAmount] = useState(false)

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (!authMethod) return
      
      try {
        setIsLoading(true)
        // Get user's authMethodId
        const provider = getProviderByAuthMethodType(authMethod.authMethodType)
        const authMethodId = await provider.getAuthMethodId(authMethod)
        setAuthMethodId(authMethodId)
        
        // Fetch user's information from database API
        const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information from database')
        }
        
        const userData = await userResponse.json()
        setEmail(userData.email)
        
        // Use litActionPkp from user data
        if (userData.litActionPkp) {
          setLitActionPkp(userData.litActionPkp)
          setBtcAddress(userData.addresses?.btc)
          setAddresses(userData.addresses)
        }
      } catch (error) {
        console.error("Error fetching data from database:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [authMethod])


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
    setShowSettingsDialog(true)
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

      {/* Personal Wallet Settings */}
      <PersonalWalletSettings 
        isOpen={showSettingsDialog}
        onClose={() => setShowSettingsDialog(false)}
      />
    </>
  )
} 