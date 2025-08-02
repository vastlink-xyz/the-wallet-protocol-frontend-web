import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "./WalletSendReceiveButtons"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { IRelayPKP } from '@lit-protocol/types'
import { VastbaseAuthMethod } from '@/lib/lit/custom-auth'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useUserData } from '@/hooks/useUserData'
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
  const { authMethod, authMethodId, getCurrentAccessToken } = useAuthContext()
  const { userData } = useUserData()

  const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [showSwapDialog, setShowSwapDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [resetAmount, setResetAmount] = useState(false)

  // Set user PKP when user data is available
  useEffect(() => {
    if (userData?.litActionPkp) {
      setLitActionPkp(userData.litActionPkp)
    }
  }, [userData])

  // Create executeTransaction function for the hook
  const executeTransactionWithSecurity = async (params: any) => {
    if (!litActionPkp || !authMethod || !authMethodId) {
      throw new Error('Missing required data')
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    return await executePersonalTransaction({
      state: params.state,
      accessToken,
      authMethodType: authMethod.authMethodType,
      authMethodId,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
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

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    await inviteUser({
      state,
      accessToken,
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
          />
        )
      }

      {/*Swap Dialog */}
      {
        showSwapDialog && (
          <SwapDialog
            open={showSwapDialog}
            onOpenChange={setShowSwapDialog}
          />
        )
      }

      {/* Security Verification Dialogs */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </>
  )
}