import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "./WalletSendReceiveButtons"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { MultisigWalletAddresses } from "@/app/api/multisig/storage"
import { executePersonalTransaction, inviteUser } from '@/services/personalTransactionService'
import { useSecurityVerification } from '@/hooks/useSecurityVerification'
import { SwapDialog } from "@/components/Transaction/SwapDialog"

interface WalletSendReceiveActionsProps {
  btcAddress: string
  ethAddress: string
  walletName: string
  addresses: MultisigWalletAddresses | null
  onTransactionSuccess?: () => void
}

export function PersonalWalletSendReceiveActions({
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
  const [showSwapDialog, setShowSwapDialog] = useState(false)
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

        // PIN requirement will be checked dynamically in useSecurityVerification
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [])

  // Create executeTransaction function for the hook
  const executeTransactionWithSecurity = async (params: any) => {
    if (!litActionPkp || !authMethod || !authMethodId) {
      throw new Error('Missing required data')
    }

    return await executePersonalTransaction({
      state: params.state,
      authMethod,
      authMethodId,
      litActionPkp,
      btcAddress,
      handleExpiredAuth,
      setIsSending,
      setResetAmount,
      onTransactionSuccess,
      pinCode: params.pinCode,
      mfaType: params.mfaType,
      mfaCode: params.mfaCode,
      mfaMethodId: params.mfaMethodId,
    })
  }

  // Initialize security verification hook
  const securityVerification = useSecurityVerification({
    authMethod,
    executeTransaction: executeTransactionWithSecurity,
  })

  const handleExecuteTransaction = async (state: SendTransactionDialogState) => {
    // Use the security verification hook to handle PIN and MFA verification
    await securityVerification.verify({ state })
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


  return (
    <>
      {/* Send/Receive Buttons */}
      <WalletSendReceiveButtons
        onSendClick={() => setShowSendDialog(true)}
        onSwapClick={() => setShowSwapDialog(true)}
        btcAddress={btcAddress}
        ethAddress={ethAddress}
        walletName={walletName}
      />

      {/* Send Transaction Dialog */}
      {
        (authMethodId && showSendDialog && authMethod && litActionPkp) && (
          <SendTransactionDialog
            authMethod={authMethod}
            userLitAction={litActionPkp}
            showSendDialog={showSendDialog}
            showMfa={false}
            onSendTransaction={handleExecuteTransaction}
            onInviteUser={handleInviteUser}
            isSending={securityVerification.isVerifying}
            onDialogOpenChange={setShowSendDialog}
            addresses={addresses || null}
            walletName={walletName}
            resetAmount={resetAmount}
            disablePin={true}
          />
        )
      }

      {/*Swap Dialog */}
      {
        showSwapDialog && authMethod && (
          <SwapDialog
            open={showSwapDialog}
            onOpenChange={setShowSwapDialog}
            authMethod={authMethod}
          />
        )
      }

      {/* Security Verification Dialogs */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </>
  )
}