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
import { useSecurityVerification } from "@/hooks/useSecurityVerification"

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
  const [isSending, setIsSending] = useState(false)
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  
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

  // Create executeTransaction function for the security verification hook
  const executeTransactionWithSecurity = async (params: any) => {
    if (!wallet || !userPkp || !authMethod || !authMethodId || !user) {
      throw new Error('Missing required data')
    }
    
    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }
    
    return await createAndApproveTransactionProposal({
      state: params.state,
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
      executeTransactionHandler: (executionParams) => handleExecuteTransactionProposal({
        ...executionParams,
        pinCode: params.pinCode,
        mfaType: params.mfaType,
        mfaCode: params.mfaCode,
        mfaMethodId: params.mfaMethodId,
      }),
    })
  }

  // Initialize security verification hook
  const securityVerification = useSecurityVerification({
    executeTransaction: executeTransactionWithSecurity,
  })
  
  const handleCreateAndApproveTransactionProposal = async (state: SendTransactionDialogState) => {
    // Use the security verification hook to handle PIN and MFA verification
    await securityVerification.verify({ state })
  }

  const handleExecuteTransactionProposal = async ({
    proposal,
    wallet: walletParam,
    pinCode = '',
    mfaType = '',
    mfaCode = '',
    mfaMethodId = null,
  }: {
    proposal: MessageProposal
    wallet: any
    pinCode?: string
    mfaType?: string
    mfaCode?: string
    mfaMethodId?: string | null
  }) => {
    if (!userPkp || !authMethod || !authMethodId) {
      return
    }

    const accessToken = await getCurrentAccessToken();
    if (!accessToken) {
      throw new Error('No access token available');
    }

    return await executeTeamTransactionProposal({
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
      pinCode,
      mfaType,
      mfaCode,
      mfaMethodId,
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
            showSendDialog={showSendDialog}
            showMfa={false}
            onInviteUser={handleInviteUser}
            onSendTransaction={handleCreateAndApproveTransactionProposal}
            isSending={securityVerification.isVerifying}
            onDialogOpenChange={setShowSendDialog}
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

      {/* Security Verification Dialogs */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </>
  )
}