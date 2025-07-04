'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Plus, Settings } from 'lucide-react'
import { useCallback, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { MultisigSetting } from './MultisigSetting'
import { getProviderByAuthMethodType } from '@/lib/lit'
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { useRouter } from 'next/navigation'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { LogoLoading } from '@/components/LogoLoading'
import { User } from '@/app/api/user/storage'
import { useUnsignedProposals } from '@/hooks/useUnsignedProposals'
import { useTeamWallets } from '@/hooks/useTeamWallets'
import { WalletCard } from '@/app/assets/components/WalletCard'
import { WalletCardSkeleton } from '@/app/assets/components/WalletCard/WalletCardSkeleton'
import { createAndApproveTransactionProposal, executeTeamTransactionProposal, inviteTeamUser, handleTeamMfaVerify } from '@/services/teamTransactionService'

interface TeamAssetsProps {
  authMethod: AuthMethod
}

export interface TeamAssetsRef {
  createTeamWallet: () => void
}

interface MultisigWalletWithUnsignedProposalsCount extends MultisigWallet {
  unsignedProposalsCount: number
}

const TeamAssets = forwardRef<TeamAssetsRef, TeamAssetsProps>(({ authMethod }, ref) => {
  const router = useRouter()
  const [userPkp, setUserPkp] = useState<IRelayPKP | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [showMultisigSetting, setShowMultisigSetting] = useState(false)
  const [authMethodId, setAuthMethodId] = useState<string>('')
  const [mode, setMode] = useState<'create' | 'edit'>('create')
  const [selectedWallet, setSelectedWallet] = useState<MultisigWalletWithUnsignedProposalsCount | undefined>()

  const [showSendDialog, setShowSendDialog] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  const [isLoadingUserData, setIsLoadingUserData] = useState(true)

  // Unsigned proposals hook for cache invalidation
  const { invalidateProposalRelatedData } = useUnsignedProposals({
    authMethodId,
    enabled: false, // only need the invalidate function
  });

  // Handler to refresh team wallets data
  const handleRefreshWallets = useCallback(() => {
    invalidateProposalRelatedData(authMethodId, userPkp?.ethAddress);
  }, [invalidateProposalRelatedData, authMethodId, userPkp?.ethAddress]);

  // Team wallets data using React Query
  const { 
    data: wallets = [], 
    isLoading, 
    error 
  } = useTeamWallets({
    userEthAddress: userPkp?.ethAddress || null,
    enabled: !!userPkp?.ethAddress,
  });

  const hasMultisigWallets = wallets.length > 0;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authMethod) {
        setIsLoadingUserData(false)
        return
      }
      
      try {
        setIsLoadingUserData(true)
        // User data loading is handled separately from wallet loading
        // Get user's authMethodId
        const provider = getProviderByAuthMethodType(authMethod.authMethodType)
        const authMethodId = await provider.getAuthMethodId(authMethod)
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
      } finally {
        setIsLoadingUserData(false)
      }
    }

    fetchUserData()
  }, [authMethod])

  const handleWalletSettingsClick = (wallet: MultisigWalletWithUnsignedProposalsCount) => {
    setSelectedWallet(wallet)
    setMode('edit')
    setShowMultisigSetting(true)
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
      setShowMultisigSetting(true)
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
      invalidateProposalRelatedData,
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
      invalidateProposalRelatedData,
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
      {isLoadingUserData || isLoading ? (
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

      {(showMultisigSetting && userPkp) && (
        <MultisigSetting
          open={showMultisigSetting}
          mode={mode}
          walletId={selectedWallet?.id}
          authMethod={authMethod}
          userPkp={userPkp}
          authMethodId={authMethodId}
          onClose={() => setShowMultisigSetting(false)}
          onSuccess={handleRefreshWallets}
        />
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
