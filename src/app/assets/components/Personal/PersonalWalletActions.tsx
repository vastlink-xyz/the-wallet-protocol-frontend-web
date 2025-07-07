import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "@/app/assets/components/WalletCard/WalletSendReceiveButtons"
import { WalletSettingsButton } from "@/app/assets/components/WalletCard/WalletSettingsButton"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { PersonalWalletSettings } from "@/app/assets/components/Personal/WalletSettings"
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from '@/lib/web3/transaction'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { getSessionSigsByPkp } from '@/lib/lit/sessionManager'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { toast } from 'react-toastify'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { litNodeClient } from '@/lib/lit/providers'
import { MultisigWalletAddresses } from "@/app/api/multisig/storage"
import { log } from "@/lib/utils"

interface PersonalWalletActionsProps {
  btcAddress: string
  ethAddress: string
  addresses: MultisigWalletAddresses | null
  onTransactionSuccess?: () => void
}

export function PersonalWalletActions({
  btcAddress,
  ethAddress,
  addresses,
  onTransactionSuccess,
}: PersonalWalletActionsProps) {
  const { handleExpiredAuth } = useAuthExpiration()
  const [email, setEmail] = useState<string | null>(null)
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [showSettingsDialog, setShowSettingsDialog] = useState(false)
  const [showMfa, setShowMfa] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [resetAmount, setResetAmount] = useState(false)

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedAuthMethod = getAuthMethodFromStorage()
        if (!storedAuthMethod) return
        
        setAuthMethod(storedAuthMethod)
        const provider = getProviderByAuthMethodType(storedAuthMethod.authMethodType)
        const authMethodId = await provider.getAuthMethodId(storedAuthMethod)
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
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [])

  const sendAddressByTokenType = (tokenType: TokenType) => {
    if (tokenType === 'ETH') {
      return litActionPkp?.ethAddress
    } else if (tokenType === 'BTC') {
      return btcAddress || ''
    } else if (SUPPORTED_TOKENS_INFO[tokenType].chainType === 'EVM') {
      return litActionPkp?.ethAddress
    }
    
    throw new Error(`Unsupported token type: ${tokenType}`)
  }

  const handleExecuteTransaction = async ({
    to,
    recipientAddress,
    amount,
    tokenType,
    mfaMethodId,
    otpCode,
  }: SendTransactionDialogState) => {
    if (!litActionPkp || !authMethod) {
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

      // Execute the transaction
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
        // Don't auto-close dialog - let user close manually
        setShowMfa(false)
        
        // Reset amount in SendTransactionDialog
        setResetAmount(true)
        // Reset the trigger immediately to allow future resets
        setTimeout(() => setResetAmount(false), 100)
        
        // Call success callback
        onTransactionSuccess?.()
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
          'Authorization': `Bearer ${authMethod?.accessToken}`
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
        
        // Reset amount in SendTransactionDialog
        setResetAmount(true)
        // Reset the trigger immediately to allow future resets
        setTimeout(() => setResetAmount(false), 100)
        
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

  if (!email || !btcAddress || !ethAddress) {
    return null
  }

  return (
    <>
      {/* Send/Receive Buttons */}
      <WalletSendReceiveButtons
        onSendClick={() => setShowSendDialog(true)}
        btcAddress={btcAddress}
        ethAddress={ethAddress}
        walletName={email + ' (Personal)'}
      />

      {/* Settings Button */}
      <WalletSettingsButton
        onSettingsClick={() => setShowSettingsDialog(true)}
        className="absolute top-6 right-6"
      />

      {/* Send Transaction Dialog */}
      {
        (authMethodId && showSendDialog && authMethod) && (
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