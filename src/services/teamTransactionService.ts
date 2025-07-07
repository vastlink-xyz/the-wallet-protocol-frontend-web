import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import { getSessionSigsByPkp } from '@/lib/lit'
import { log } from '@/lib/utils'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { broadcastTransactionByTokenType } from '@/lib/web3/transaction'
import { sendProposalExecutedNotification } from '@/lib/notification/proposal-executed-notification'
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { User } from '@/app/api/user/storage'
import { SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import axios from 'axios'
import { signProposal } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal'
import { fetchProposal } from '@/app/wallet/[walletId]/details/proposals/utils/proposal'
import { executeTransactionProposal } from '@/app/wallet/[walletId]/details/proposals/utils/execute-proposal'

interface CreateAndApproveTransactionProposalParams {
  state: SendTransactionDialogState
  wallet: MultisigWallet
  userPkp: IRelayPKP
  authMethod: AuthMethod
  authMethodId: string
  user: User
  setIsSending: (sending: boolean) => void
  refreshProposalUI: (authMethodId: string, ethAddress?: string) => void
  onProposalChange?: () => void
  setShowSendDialog: (show: boolean) => void
  executeTransactionHandler: (params: {
    proposal: MessageProposal
    wallet: MultisigWallet
    otpCode?: string
    mfaMethodId?: string | null
  }) => Promise<void>
}

export const createAndApproveTransactionProposal = async ({
  state,
  wallet,
  userPkp,
  authMethod,
  authMethodId,
  user,
  setIsSending,
  refreshProposalUI,
  onProposalChange,
  setShowSendDialog,
  executeTransactionHandler,
}: CreateAndApproveTransactionProposalParams) => {
  const { recipientAddress, amount, tokenType } = state
  
  try {
    setIsSending(true)
    const txData = {
      to: recipientAddress,
      value: amount,
      data: '0x',
      tokenType: tokenType
    }
    
    const response = await axios.post('/api/multisig/messages', {
      walletId: wallet?.id,
      createdBy: {
        authMethodId: authMethodId,
        ethAddress: userPkp?.ethAddress,
        email: user?.email
      },
      message: JSON.stringify(txData),
      transactionData: txData,
      sendEmail: true,
      signers: wallet?.signers,
      walletName: wallet?.name,
      proposer: user?.email,
    })

    if (response.data.success) {
      const proposal = response.data.data
      
      const res = await signProposal({
        proposal,
        wallet,
        userPkp,
        authMethod,
        authMethodId,
      })

      if (res.data.success) {
        const updatedProposal = await fetchProposal(proposal.id, wallet.id)
        
        // Invalidate proposal related data after signing
        refreshProposalUI(authMethodId, userPkp?.ethAddress)
        
        // Call callback to refresh data
        onProposalChange?.()
        
        // Check if signatures have reached the threshold
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          // Automatically execute the multisig action once threshold is reached
          await executeTransactionHandler({
            proposal: updatedProposal,
            wallet: wallet,
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

interface ExecuteTransactionProposalParams {
  proposal: MessageProposal
  wallet: MultisigWallet
  userPkp: IRelayPKP
  authMethod: AuthMethod
  authMethodId: string
  refreshProposalUI: (authMethodId: string, ethAddress?: string) => void
  onProposalChange?: () => void
  setShowSendDialog: (show: boolean) => void
  setShowMfaDialog: (show: boolean) => void
  otpCode?: string
  mfaMethodId?: string | null
  setCurrentProposal?: (proposal: MessageProposal | null) => void
}

export const executeTeamTransactionProposal = async ({
  proposal,
  wallet,
  userPkp,
  authMethod,
  authMethodId,
  refreshProposalUI,
  onProposalChange,
  setShowSendDialog,
  setShowMfaDialog,
  otpCode = '',
  mfaMethodId = null,
  setCurrentProposal,
}: ExecuteTransactionProposalParams) => {
  const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: userPkp, refreshStytchAccessToken: true})
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
    : response.response
  log('Parsed response object:', result)

  if (result.isValid) {
    if (result.requireMFA) {
      if (setCurrentProposal) {
        setCurrentProposal(proposal)
      }
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
        if (SUPPORTED_TOKENS_INFO[tokenType as TokenType].chainType === 'EVM') {
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
    toast.success(`Transaction completed`)

    // Invalidate proposal related data after execution
    refreshProposalUI(authMethodId, userPkp?.ethAddress)

    // Call callback to refresh data
    onProposalChange?.()

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
        })
      } catch (error) {
        console.error('Error sending proposal executed notifications:', error)
      }
    }
  }
}

interface InviteTeamUserParams {
  state: SendTransactionDialogState
  authMethod: AuthMethod
  authMethodId: string
  setIsSending: (sending: boolean) => void
  setShowSendDialog: (show: boolean) => void
}

export const inviteTeamUser = async ({
  state,
  authMethod,
  authMethodId,
  setIsSending,
  setShowSendDialog,
}: InviteTeamUserParams) => {
  const { to, amount, tokenType } = state

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
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || `Failed to create invitation: ${response.status}`)
    }
    const data = await response.json()
    
    if (data.success) {
      toast.success(`Invitation sent to ${to}`)
      // Close the dialog
      setShowSendDialog(false)
    }
  } catch (error) {
    console.error('Error inviting user:', error)
    alert(`Failed to send invitation: ${error instanceof Error ? error.message : 'Unknown error'}`)
  } finally {
    setIsSending(false)
  }
}

interface MfaVerifyParams {
  state: SendTransactionDialogState
  authMethod: AuthMethod
  userPkp: IRelayPKP
  currentProposal: MessageProposal
  wallet: MultisigWallet
  executeTransactionHandler: (params: {
    proposal: MessageProposal
    wallet: MultisigWallet
    otpCode?: string
    mfaMethodId?: string | null
  }) => Promise<void>
}

export const handleTeamMfaVerify = async ({
  state,
  authMethod,
  userPkp,
  currentProposal,
  wallet,
  executeTransactionHandler,
}: MfaVerifyParams) => {
  const { otpCode, mfaMethodId } = state

  // Verify OTP in lit action
  if (!authMethod || !userPkp || !currentProposal || !wallet) {
    throw new Error('Missing required information for OTP verification')
  }

  try {
    log('otp in handleOtpVerified', otpCode)
    await executeTransactionHandler({
      proposal: currentProposal,
      wallet: wallet,
      otpCode,
      mfaMethodId,
    })
  } catch (error) {
    console.error('Error executing the transaction:', error)
    toast.error('Failed to execute the transaction')
  }
}