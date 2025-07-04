import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "./WalletSendReceiveButtons"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { MultisigWalletAddresses } from "@/app/api/multisig/storage"
import { executePersonalTransaction, inviteUser } from '@/services/personalTransactionService'

interface WalletSendReceiveActionsProps {
  btcAddress: string
  ethAddress: string
  walletName: string
  addresses: MultisigWalletAddresses | null
  onTransactionSuccess?: () => void
}

export function WalletSendReceiveActions({
  btcAddress,
  ethAddress,
  walletName,
  addresses,
  onTransactionSuccess,
}: WalletSendReceiveActionsProps) {
  const { handleExpiredAuth } = useAuthExpiration()
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string | null>(null)
  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [showSendDialog, setShowSendDialog] = useState(false)
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

  const handleExecuteTransaction = async (state: SendTransactionDialogState) => {
    if (!litActionPkp || !authMethod || !authMethodId) {
      throw new Error('Missing required data')
    }

    await executePersonalTransaction({
      state,
      authMethod,
      authMethodId,
      litActionPkp,
      btcAddress,
      handleExpiredAuth,
      setShowMfa,
      setIsSending,
      setResetAmount,
      onTransactionSuccess,
    })
  }

  const handleInviteUser = async (state: SendTransactionDialogState) => {
    if (!authMethod || !authMethodId) {
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

  return (
    <>
      {/* Send/Receive Buttons */}
      <WalletSendReceiveButtons
        onSendClick={() => setShowSendDialog(true)}
        btcAddress={btcAddress}
        ethAddress={ethAddress}
        walletName={walletName}
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
            walletName={walletName}
            resetAmount={resetAmount}
          />
        )
      }
    </>
  )
}