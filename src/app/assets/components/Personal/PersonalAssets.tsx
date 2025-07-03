'use client'

import { useState, useEffect } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Loader2 } from 'lucide-react'
import { getProviderByAuthMethodType, litNodeClient } from '@/lib/lit/providers'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from '@/lib/web3/transaction'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { getSessionSigsByPkp } from '@/lib/lit/sessionManager'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { log } from '@/lib/utils'
import { toast } from 'react-toastify'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { MultisigWalletAddresses } from '@/app/api/multisig/storage'
import { WalletCard } from '@/app/assets/components/WalletCard'
import { WalletCardSkeleton } from '@/app/assets/components/WalletCard/WalletCardSkeleton'
import { PersonalWalletSettings } from './WalletSettings'

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

  const sendAddressByTokenType = (tokenType: TokenType) => {
    if (tokenType === 'ETH') {
      return litActionPkp?.ethAddress
    } else if (tokenType === 'BTC') {
      return btcAddress || ''
    } else if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
      return litActionPkp?.ethAddress
    }
  }

  const handleExecuteTransaction = async ({
    to,
    recipientAddress,
    amount,
    tokenType,
    mfaMethodId,
    otpCode,
  }: SendTransactionDialogState) => {
    if (!litActionPkp) {
      throw new Error('No PKP exists')
    }

    const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]

    try {
      setIsSending(true)

      const txData = await getToSignTransactionByTokenType({
        tokenType,
        options: {
          sendAddress: sendAddressByTokenType(tokenType),
          recipientAddress,
          amount,
        },
      })
      log('txData', txData)

      if (!txData) {
        throw new Error('Failed to get transaction data')
      }

      if (!litNodeClient.ready) {
        await litNodeClient.connect()
      }

      const sessionSigs = await getSessionSigsByPkp({
        authMethod, 
        pkp: litActionPkp,
        refreshStytchAccessToken: true,
      })

      const ipfsId = await getPersonalTransactionIpfsId('base58')

      // Execute transaction
      const response = await litNodeClient.executeJs({
        ipfsId,
        sessionSigs,
        jsParams: {
          toSignTransaction: txData.toSign,
          transactionAmount: amount,
          publicKey: litActionPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          chainType: SUPPORTED_TOKENS_INFO[tokenType].chainType,
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
          otp: otpCode || '',
          mfaMethodId,
          tokenType,
        }
      })

      log('response', response)

      // Process the response
      const result = typeof response.response === 'string' 
        ? JSON.parse(response.response) 
        : response.response;

      log('result parse', result)
      
      if (result.status === 'success') {
        let sig: any
        if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
          sig = JSON.parse(result.sig)
        } else {
          sig = response.signatures.btcSignatures
        }
        const txReceipt = await broadcastTransactionByTokenType({
          tokenType,
          options: {
            ...txData,
            sig,
            publicKey: litActionPkp.publicKey,
          },
        })

        log('txReceipt', txReceipt)
        // Show success message with transaction hash
        toast.success(`Successfully sent ${amount} ${tokenInfo.symbol} to ${to}`)
        setShowSendDialog(false)
        setShowMfa(false)
      } else {
        if (result.requireMFA) {
          // Show MFA flow
          setShowMfa(true)
          setIsSending(false)
          toast.warning('Daily limit exceeded')
        } else {
          throw new Error(result.error || 'Transaction failed')
        }
      }
    } catch (error) {
      console.log(`Error sending ${tokenInfo.symbol}:`, typeof error, error)
      
      // Check if token expired error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      if (errorMessage.includes('token expired') || errorMessage.includes('JWT expired') || errorMessage.includes('Failed to verify token')) {
        handleExpiredAuth()
      } else {
        toast.error(`Failed to send ${tokenInfo.symbol}: ${errorMessage}`)
      }
    } finally {
      setIsSending(false)
    }
  }

  const handleDetailsClick = () => {
    console.log('PersonalAssets handleDetailsClick triggered')
    window.open(`/wallet/personal/details`, '_blank')
  }

  const handleWalletSettingsClick = () => {
    console.log('PersonalAssets handleWalletSettingsClick triggered')
    setShowSettingsDialog(true)
  }


  const handleInviteUser = async ({
    to,
    amount,
    tokenType,
  }: SendTransactionDialogState) => {
    try {
      setIsSending(true)
      // Create pending invitation
      const response = await fetch('/api/invitation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authMethod.accessToken}`
        },
        body: JSON.stringify({
          recipientEmail: to,
          tokenType,
          amount,
          authMethodId,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to create invitation: ${response.status}`);
      }
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Invitation sent to ${to}`);
        
        // Close the dialog
        setShowSendDialog(false);
      }
    } catch (error) {
      console.error('Error inviting user:', error);
      alert(`Failed to send invitation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSending(false)
    }
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
        (authMethodId && addresses && showSendDialog) && (
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
            addresses={addresses}
            walletName={email || ''}
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