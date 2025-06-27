'use client'

import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Plus, Settings } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { MultisigSetting } from './MultisigSetting'
import { getProviderByAuthMethodType, getSessionSigsByPkp } from '@/lib/lit'
import { WalletCard } from '../../components/WalletCard'
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { useRouter } from 'next/navigation'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { SendTransactionDialog, SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import { toast } from 'react-toastify'
import { LogoLoading } from '@/components/LogoLoading'
import { User } from '@/app/api/user/storage'
import { signProposal } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal'
import { fetchProposal } from '@/app/wallet/[walletId]/details/proposals/utils/proposal'
import { executeTransactionProposal } from '@/app/wallet/[walletId]/details/proposals/utils/execute-proposal'
import { log } from '@/lib/utils'
import { SUPPORTED_TOKENS_INFO } from '@/lib/web3/token'
import { broadcastTransactionByTokenType } from '@/lib/web3/transaction'
import { sendProposalExecutedNotification } from '@/lib/notification/proposal-executed-notification'
import { useUnsignedProposals } from '@/hooks/useUnsignedProposals'
import { useTeamWallets } from '@/hooks/useTeamWallets'

interface TeamAssetsProps {
  authMethod: AuthMethod
}

interface MultisigWalletWithUnsignedProposalsCount extends MultisigWallet {
  unsignedProposalsCount: number
}

export default function TeamAssets({ authMethod }: TeamAssetsProps) {
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
      if (!authMethod) return
      
      try {
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
    window.open(`/wallet/${walletId}/details`, '_blank')
  }

  const handleCreateAndApproveTransactionProposal = async (state: SendTransactionDialogState) => {
    const { to, recipientAddress, amount, tokenType } = state
    if (!selectedWallet || !userPkp || !authMethod || !authMethodId || !user) {
      return
    }
    
    try {
      setIsSending(true)
      const txData = {
        to: recipientAddress,
        value: amount,
        data: '0x',
        tokenType: tokenType
      }
      
      const response = await axios.post('/api/multisig/messages', {
        walletId: selectedWallet?.id,
        createdBy: {
          authMethodId: authMethodId,
          ethAddress: userPkp?.ethAddress,
          email: user?.email
        },
        message: JSON.stringify(txData),
        transactionData: txData,
        sendEmail: true,
        signers: selectedWallet?.signers,
        walletName: selectedWallet?.name,
        proposer: user?.email,
      })

      if (response.data.success) {
        const proposal = response.data.data
        const res = await signProposal({
          proposal,
          userPkp,
          authMethod,
          authMethodId,
        })

        if (res.data.success) {
          const updatedProposal = await fetchProposal(proposal.id, selectedWallet.id)
          
          // Invalidate proposal related data after signing
          invalidateProposalRelatedData(authMethodId, userPkp?.ethAddress);
          
          // Check if signatures have reached the threshold
          if (updatedProposal && updatedProposal.signatures.length >= selectedWallet.threshold) {
            // Automatically execute the multisig action once threshold is reached
            await handleExecuteTransactionProposal({
              proposal: updatedProposal,
              wallet: selectedWallet,
            })
          } else {
            toast.info('You have approved the proposal. Waiting for other signers to approve.')
            setShowSendDialog(false)
          }
        }
      }
    } catch (error) {
      console.error('Failed to create proposal:', error)
      const errorMessage = error instanceof Error && error.message ? error.message : 'Operation failed'
      toast.error(errorMessage)
    }
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

    const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true});
    const walletPkp = wallet.pkp

    const {
      response,
      txData,
      tokenType,
    } = await executeTransactionProposal({
      proposal,
      sessionSigs,
      wallet,
      walletPkp,
      authMethod,
      authMethodId,
      otpCode,
      mfaMethodId,
    })

    // Update the proposal status to completed if verification was successful
    const result = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;
    log('Parsed response object:', result);

    if (result.isValid) {
      if (result.requireMFA) {
        setCurrentProposal(proposal)
        setShowMfaDialog(true)
        toast.warning('Daily limit exceeded')
        return
      } else if (result.error) {
        toast.error(result.error)
        return
      }
      
      let txHash = null
      // Try to extract transaction hash from different response formats
      if (result.status === 'success') {
        try {
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
              publicKey: walletPkp.publicKey,
            },
          })
          txHash = txReceipt
          log('txReceipt', txReceipt)   
        } catch (e: any) {
          log('error', e)
          if (e.message.includes('insufficient funds for intrinsic transaction cost')) {
            toast.error('Insufficient funds for intrinsic transaction cost')
            return
          }
          toast.error(`${e.message || 'Transaction failed'}`)
          return
        }
      }
      
      await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        status: 'completed',
        txHash: txHash
      })
      toast.success(`Transaction completed`);

      // Invalidate proposal related data after execution
      invalidateProposalRelatedData(authMethodId, userPkp?.ethAddress);

      // Close dialogs
      setShowSendDialog(false)
      setShowMfaDialog(false)

      // Send proposal executed notification to all approvers
      if (wallet) {
        try {
          sendProposalExecutedNotification({
            proposalType: 'transaction',
            proposal,
            wallet,
            txHash,
          });
        } catch (error) {
          console.error('Error sending proposal executed notifications:', error);
        }
      }
    }
  };

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
    }
  }

  // MFA cancellation callback
  const handleMfaCancel = () => {
    setShowMfaDialog(false)
  }

  // MFA verification successful callback
  const handleMfaVerify = async (state: SendTransactionDialogState) => {
    const { otpCode, mfaMethodId } = state

    // Verify OTP in lit action
    if (!authMethod || !userPkp || !currentProposal || !selectedWallet) {
      throw new Error('Missing required information for OTP verification');
    }

    try {
      log('otp in handleOtpVerified', otpCode)
      await handleExecuteTransactionProposal({
        proposal: currentProposal,
        wallet: selectedWallet,
        otpCode,
        mfaMethodId,
      })
    } catch (error) {
      console.error('Error executing transaction:', error)
      toast.error('Failed to execute transaction')
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {isLoading ? (
        <LogoLoading />
      ) : (
        <>
          {hasMultisigWallets ? (
            <div className="w-full">
              <p className="text-center mb-6 text-lg">You have {wallets.length} team wallet(s)</p>
              <div className="flex flex-col items-center gap-6 w-full">
                {wallets.map(wallet => (
                  <div key={wallet.id} className="w-full mb-6">
                    <WalletCard
                      walletId={wallet.id}
                      avatars={wallet.signers.map(signer => ({ email: signer.email }))}
                      walletName={wallet.name}
                      onSendClick={() => handleSendClick(wallet)}
                      onWalletSettingsClick={() => handleWalletSettingsClick(wallet)}
                      onDetailsClick={() => handleDetailsClick(wallet.id)}
                      btcAddress={wallet.addresses.btc}
                      ethAddress={wallet.addresses.eth}
                      unsignedProposalsCount={wallet.unsignedProposalsCount}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mb-4">
              <p>You don&apos;t have any team wallets yet.</p>
              <p className="text-sm text-gray-500 mt-2">Create your first team wallet / multisig wallet by clicking the button below.</p>
            </div>
          )}
        </>
      )}

      {/* fixed button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className="fixed bottom-8 right-8 flex items-center justify-center w-14 h-14 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 shadow-lg z-10 cursor-pointer"
            onClick={() => {
              if (userPkp && authMethodId) {
                setMode('create')
                setSelectedWallet(undefined)
                setShowMultisigSetting(true)
              } else {
                console.error('Missing userPkp or authMethodId')
              }
            }}
          >
            <Plus className="w-7 h-7" />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Create a new team wallet</p>
        </TooltipContent>
      </Tooltip>

      {(showMultisigSetting && userPkp) && (
        <MultisigSetting
          mode={mode}
          walletId={selectedWallet?.id}
          authMethod={authMethod}
          userPkp={userPkp}
          authMethodId={authMethodId}
          onClose={() => setShowMultisigSetting(false)}
          onSuccess={handleRefreshWallets}
        />
      )}

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
      />
    </div>
  )
} 