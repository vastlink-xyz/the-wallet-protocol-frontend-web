import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "@/app/assets/components/WalletCard/WalletSendReceiveButtons"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { useAuthContext } from '@/hooks/useAuthContext'
import { useUserData } from '@/hooks/useUserData'
import { IRelayPKP } from "@lit-protocol/types"
import { useNotifications } from "@/hooks/useNotifications"
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage"
import { createAndApproveTransactionProposal, executeTeamTransactionProposal, inviteTeamUser, handleTeamMfaVerify } from "@/services/teamTransactionService"
import { SwapDialog } from "@/components/Transaction/SwapDialog"

interface TeamWalletSendReceiveActionsProps {
  wallet: MultisigWallet
  onProposalChange?: () => void
  refreshProposals?: () => Promise<any>
}

export function TeamWalletSendReceiveActions({
  wallet,
  onProposalChange,
  refreshProposals,
}: TeamWalletSendReceiveActionsProps) {
  const [showSendDialog, setShowSendDialog] = useState(false)
  const [showSwapDialog, setShowSwapDialog] = useState(false)
  const [showMfaDialog, setShowMfaDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  
  // Get auth method and user data from hooks
  const { authMethod, authMethodId, getCurrentAccessToken } = useAuthContext()
  const { userData: user } = useUserData()
  
  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
  })
  
  useEffect(() => {
    // Set user PKP when user data is available  
    if (user?.litActionPkp) {
      setUserPkp(user.litActionPkp)
    }
  }, [user])
  
  const handleCreateAndApproveTransactionProposal = async (state: SendTransactionDialogState) => {
    if (!wallet || !userPkp || !authMethod || !authMethodId || !user) {
      return
    }
    
    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }
    
    await createAndApproveTransactionProposal({
      state,
      wallet,
      userPkp,
      accessToken,
      authMethodId,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
      user,
      setIsSending,
      refreshNotifications,
      refreshProposals,
      onProposalChange,
      setShowSendDialog,
      executeTransactionHandler: handleExecuteTransactionProposal,
    })
  }

  const handleExecuteTransactionProposal = async ({
    proposal,
    wallet: walletParam,
    otpCode = '',
    mfaMethodId = null,
  }: {
    proposal: MessageProposal
    wallet: any
    otpCode?: string
    mfaMethodId?: string | null
  }) => {
    if (!userPkp || !authMethod || !authMethodId) {
      return
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    await executeTeamTransactionProposal({
      proposal,
      wallet: walletParam,
      userPkp,
      accessToken,
      authMethodId,
      providerType: authMethod.providerType,
      userEmail: authMethod.primaryEmail,
      refreshNotifications,
      refreshProposals,
      onProposalChange,
      setShowSendDialog,
      setShowMfaDialog,
      otpCode,
      mfaMethodId,
      setCurrentProposal,
    })
  }

  const handleInviteUser = async (state: SendTransactionDialogState) => {
    if (!authMethod || !authMethodId) {
      return
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    await inviteTeamUser({
      state,
      accessToken,
      authMethodId,
      setIsSending,
      setShowSendDialog,
    })
  }

  // MFA cancellation callback
  const handleMfaCancel = () => {
    setShowMfaDialog(false)
  }

  // MFA verification successful callback
  const handleMfaVerify = async (state: SendTransactionDialogState) => {
    if (!authMethod || !userPkp || !currentProposal || !wallet) {
      throw new Error('Missing required information for OTP verification')
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    await handleTeamMfaVerify({
      state,
      accessToken,
      userPkp,
      currentProposal,
      wallet,
      executeTransactionHandler: handleExecuteTransactionProposal,
    })
  }
  
  return (
    <>
      {/* Send/Receive Buttons */}
      <WalletSendReceiveButtons
        onSendClick={() => setShowSendDialog(true)}
        onSwapClick={() => setShowSwapDialog(true)}
        btcAddress={wallet.addresses.btc}
        ethAddress={wallet.addresses.eth}
        walletName={wallet.name}
        excludes={["swap", "ramp"]}
      />
      
      {/* Send Transaction Dialog */}
      {
        showSendDialog && authMethod && (
          <SendTransactionDialog
            disablePin={true}
            showSendDialog={showSendDialog}
            showMfa={showMfaDialog}
            onInviteUser={handleInviteUser}
            onSendTransaction={handleCreateAndApproveTransactionProposal}
            isSending={isSending}
            onDialogOpenChange={setShowSendDialog}
            onMFACancel={handleMfaCancel}
            onMFAVerify={handleMfaVerify}
            addresses={wallet.addresses || null}
            walletName={wallet.name}
          />
        )
      }

      {/*Swap Dialog */}
      {
        showSwapDialog && authMethod && (
          <SwapDialog
            open={showSwapDialog}
            onOpenChange={setShowSwapDialog}
            teamWalletId={wallet.id}
          />
        )
      }
    </>
  )
}