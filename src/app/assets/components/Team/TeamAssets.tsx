'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { useCallback, useEffect, useState, forwardRef, useImperativeHandle, useContext } from 'react'
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { User } from '@/app/api/user/storage'
import { useNotifications } from '@/hooks/useNotifications'
import { useTeamWallets } from '@/hooks/useTeamWallets'
import { WalletCard } from '@/app/assets/components/WalletCard'
import { WalletCardSkeleton } from '@/app/assets/components/WalletCard/WalletCardSkeleton'
import { createAndApproveTransactionProposal, executeTeamTransactionProposal, inviteTeamUser, handleTeamMfaVerify } from '@/services/teamTransactionService'
import { MultisigSettingsContext } from '@/providers/MultisigSettingsProvider'

interface TeamAssetsProps {
  authMethod: AuthMethod
  userData: User
  authMethodId: string
}

export interface TeamAssetsRef {
  createTeamWallet: () => void
}

interface MultisigWalletWithUnsignedProposalsCount extends MultisigWallet {
  unsignedProposalsCount: number
}

const TeamAssets = forwardRef<TeamAssetsRef, TeamAssetsProps>(({ authMethod, userData, authMethodId }, ref) => {
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [mode, setMode] = useState<'create' | 'edit'>('create')
  const [selectedWallet, setSelectedWallet] = useState<MultisigWalletWithUnsignedProposalsCount | undefined>()

  const [showSendDialog, setShowSendDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)

  const { showMultisigSettings } = useContext(MultisigSettingsContext);
  
  // Notifications hook for UI refresh
  const { refreshNotifications } = useNotifications({
    enabled: false, // only need the refresh function
  });

  // Handler to refresh team wallets data
  const handleRefreshWallets = useCallback(() => {
    refreshNotifications(authMethodId, userPkp?.ethAddress);
  }, [refreshNotifications, authMethodId, userPkp?.ethAddress]);

  // Team wallets data using React Query
  const { 
    data: wallets = [], 
    isLoading
  } = useTeamWallets({
    userEthAddress: userPkp?.ethAddress || null,
    enabled: !!userPkp?.ethAddress,
  });

  // Initialize data from props
  useEffect(() => {
    if (userData && authMethodId) {
      setUser(userData)
      if (userData.litActionPkp) {
        setUserPkp(userData.litActionPkp)
      }
    }
  }, [userData, authMethodId])

  const handleWalletSettingsClick = (wallet: MultisigWalletWithUnsignedProposalsCount) => {
    if (userPkp && authMethodId) {
      setSelectedWallet(wallet)
      setMode('edit')
      showMultisigSettings({
        mode: 'edit',
        walletId: wallet.id,
        authMethod,
        userPkp,
        authMethodId,
        onSuccess: handleRefreshWallets,
      })
    }
  }

  const handleSendClick = (wallet: MultisigWalletWithUnsignedProposalsCount) => {
    setSelectedWallet(wallet)
    setIsSending(false)
    setShowSendDialog(true)
  }

  const handleDetailsClick = (walletId: string) => {
    console.log('TeamAssets handleDetailsClick triggered for wallet:', walletId)
    window.open(`/wallet/${walletId}/details`, '_blank')
  }

  // Create team wallet function exposed via ref
  const handleCreateTeamWallet = () => {
    if (userPkp && authMethodId) {
      setMode('create')
      setSelectedWallet(undefined)
      showMultisigSettings({
        mode: 'create',
        authMethod,
        userPkp,
        authMethodId,
        onSuccess: handleRefreshWallets,
      })
    } else {
      console.error('Missing userPkp or authMethodId')
    }
  }

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    createTeamWallet: handleCreateTeamWallet
  }))

  const handleCreateAndApproveTransactionProposal = async (state: SendTransactionDialogState) => {
    if (!selectedWallet || !userPkp || !authMethod || !authMethodId || !user) {
      return
    }
    
    await createAndApproveTransactionProposal({
      state,
      wallet: selectedWallet,
      userPkp,
      authMethod,
      authMethodId,
      user,
      setIsSending,
      refreshNotifications,
      setShowSendDialog,
      executeTransactionHandler: handleExecuteTransactionProposal,
    })
  }

  const handleExecuteTransactionProposal = async ({
    proposal,
    wallet,
    otpCode = '',
    mfaMethodId = null,
  }: {
    proposal: MessageProposal
    wallet: MultisigWallet
    otpCode?: string
    mfaMethodId?: string | null
  }) => {
    if (!userPkp || !authMethod || !authMethodId) {
      return
    }

    await executeTeamTransactionProposal({
      proposal,
      wallet,
      userPkp,
      authMethod,
      authMethodId,
      refreshNotifications,
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
    if (!authMethod || !userPkp || !currentProposal || !selectedWallet) {
      throw new Error('Missing required information for OTP verification')
    }

    await handleTeamMfaVerify({
      state,
      authMethod,
      userPkp,
      currentProposal,
      wallet: selectedWallet,
      executeTransactionHandler: handleExecuteTransactionProposal,
    })
  }

  return (
    <>
      {isLoading ? (
        <>
          <WalletCardSkeleton />
          <WalletCardSkeleton />
        </>
      ) : (
        <>
          {wallets.map(wallet => (
            <WalletCard
              key={wallet.id}
              walletId={wallet.id}
              avatars={wallet.signers.map(signer => ({ email: signer.email }))}
              walletName={wallet.name}
              onSendClick={() => handleSendClick(wallet)}
              onWalletSettingsClick={() => handleWalletSettingsClick(wallet)}
              onDetailsClick={() => handleDetailsClick(wallet.id)}
              btcAddress={wallet.addresses.btc}
              ethAddress={wallet.addresses.eth}
              unsignedProposalsCount={wallet.unsignedProposalsCount}
              variant="team"
            />
          ))}
          <WalletCard
            avatars={[]}
            walletName=""
            onSendClick={() => {}}
            onDetailsClick={() => {}}
            btcAddress=""
            ethAddress=""
            variant="create"
            onCreateClick={handleCreateTeamWallet}
          />
        </>
      )}

      {
        showSendDialog && (
          <SendTransactionDialog
            authMethod={authMethod}
            showSendDialog={showSendDialog}
            showMfa={showMfaDialog}
            onInviteUser={handleInviteUser}
            onSendTransaction={handleCreateAndApproveTransactionProposal}
            isSending={isSending}
            onDialogOpenChange={setShowSendDialog}
            onMFACancel={handleMfaCancel}
            onMFAVerify={handleMfaVerify}
            addresses={selectedWallet?.addresses || null}
            walletName={selectedWallet?.name}
          />
        )
      }
    </>
  )
})

TeamAssets.displayName = 'TeamAssets'

export { TeamAssets }
