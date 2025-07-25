import { useState, useEffect } from "react"
import { WalletSendReceiveButtons } from "@/app/assets/components/WalletCard/WalletSendReceiveButtons"
import { SendTransactionDialog, SendTransactionDialogState } from "@/components/Transaction/SendTransactionDialog"
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod"
import { getProviderByAuthMethodType } from "@/lib/lit"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { useNotifications } from "@/hooks/useNotifications"
import { User } from "@/app/api/user/storage"
import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage"
import { createAndApproveTransactionProposal, executeTeamTransactionProposal, inviteTeamUser, handleTeamMfaVerify } from "@/services/teamTransactionService"

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
  const [showMfaDialog, setShowMfaDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const [authMethodId, setAuthMethodId] = useState<string>('')
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  
  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
  })
  
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
          throw new Error('Failed to fetch user information')
        }
        
        const userData = await userResponse.json()
        setUser(userData)
        
        // Use litActionPkp from user data
        if (userData.litActionPkp) {
          setUserPkp(userData.litActionPkp)
        }
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }
    
    fetchUserData()
  }, [])
  
  const handleCreateAndApproveTransactionProposal = async (state: SendTransactionDialogState) => {
    if (!wallet || !userPkp || !authMethod || !authMethodId || !user) {
      return
    }
    
    await createAndApproveTransactionProposal({
      state,
      wallet,
      userPkp,
      authMethod,
      authMethodId,
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

    await executeTeamTransactionProposal({
      proposal,
      wallet: walletParam,
      userPkp,
      authMethod,
      authMethodId,
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

    await inviteTeamUser({
      state,
      authMethod,
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

    await handleTeamMfaVerify({
      state,
      authMethod,
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
        btcAddress={wallet.addresses.btc}
        ethAddress={wallet.addresses.eth}
        walletName={wallet.name}
        excludes={["ramp"]}
      />
      
      {/* Send Transaction Dialog */}
      {
        showSendDialog && authMethod && (
          <SendTransactionDialog
            authMethod={authMethod}
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
    </>
  )
}