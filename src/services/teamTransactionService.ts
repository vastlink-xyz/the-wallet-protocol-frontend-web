import { IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import { getMultiProviderSessionSigs } from '@/lib/lit/pkpManager'
import { log } from '@/lib/utils'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { broadcastTransactionByTokenType } from '@/lib/web3/transaction'
import { sendProposalExecutedNotification } from '@/lib/notification/proposal-executed-notification'
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { User } from '@/app/api/user/storage'
import { SendTransactionDialogState } from '@/components/Transaction/SendTransactionDialog'
import axios from 'axios'
import { approveProposal } from '@/app/wallet/[walletId]/details/proposals/utils/sign-proposal'
import { fetchProposal } from '@/app/wallet/[walletId]/details/proposals/utils/proposal'
import { executeTransactionProposal } from '@/app/wallet/[walletId]/details/proposals/utils/execute-proposal'
import { AuthProviderType } from '@/lib/lit/custom-auth'
import { BASE_URL } from '@/constants'

export interface CreateAndApproveTransactionProposalParams {
  state: SendTransactionDialogState
  wallet: MultisigWallet
  userPkp: IRelayPKP
  accessToken: string
  authMethodId: string
  providerType: AuthProviderType
  userEmail: string
  user: User
  setIsSending: (sending: boolean) => void
  refreshNotifications: (authMethodId: string, ethAddress?: string) => void
  refreshProposals?: () => Promise<any>
  onProposalChange?: () => void
  setShowSendDialog: (show: boolean) => void
  executeTransactionHandler: (params: {
    proposal: MessageProposal
    wallet: MultisigWallet
    otpCode?: string
    mfaMethodId?: string | null
    pinCode?: string
    mfaType?: string
    mfaCode?: string
  }) => Promise<any>
}

export const createAndApproveTransactionProposal = async ({
  state,
  wallet,
  userPkp,
  accessToken,
  authMethodId,
  providerType,
  userEmail,
  user,
  setIsSending,
  refreshNotifications,
  refreshProposals,
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
    
    const response = await axios.post(`${BASE_URL}/api/multisig/messages`, {
      walletId: wallet?.id,
      createdBy: {
        authMethodId: authMethodId,
        ethAddress: userPkp?.ethAddress,
        email: user?.primaryEmail
      },
      message: JSON.stringify(txData),
      transactionData: txData,
      sendEmail: true,
      signers: wallet?.signers,
      walletName: wallet?.name,
      proposer: user?.primaryEmail,
    })

    if (response.data.success) {
      const proposal = response.data.data
      
      const res = await approveProposal({
        proposal,
        wallet,
        userPkp,
        accessToken,
        authMethodId,
        providerType,
        userEmail,
      })

      if (res.data.success) {
        const updatedProposal = await fetchProposal(proposal.id, wallet.id)
        
        // Invalidate proposal related data after signing
        refreshNotifications(authMethodId, userPkp?.ethAddress)
        
        // Refresh proposals data
        if (refreshProposals) {
          await refreshProposals()
        }
        
        // Call callback to refresh data
        onProposalChange?.()
        
        // Check if signatures have reached the threshold
        if (updatedProposal && updatedProposal.signatures.length >= wallet.threshold) {
          // Automatically execute the multisig action once threshold is reached
          const executionResult = await executeTransactionHandler({
            proposal: updatedProposal,
            wallet: wallet,
          })
          
          // Return execution result for security verification hook
          return executionResult
        } else {
          toast.info('You have approved the proposal. Waiting for other signers to approve.')
          setShowSendDialog(false)
          return { success: true, proposal, wallet } // Proposal created successfully, no MFA needed yet
        }
      }
    }
  } catch (error) {
    console.error('Failed to create proposal:', error)
    const errorMessage = error instanceof Error && error.message ? error.message : 'Operation failed'
    toast.error(errorMessage)
  }
}

export interface ExecuteTransactionProposalParams {
  proposal: MessageProposal
  wallet: MultisigWallet
  userPkp: IRelayPKP
  accessToken: string
  authMethodId: string
  providerType: AuthProviderType
  userEmail: string
  refreshNotifications: (authMethodId: string, ethAddress?: string) => void
  refreshProposals?: () => Promise<any>
  onProposalChange?: () => void
  setShowSendDialog: (show: boolean) => void
  pinCode?: string
  mfaType?: string
  mfaCode?: string
  mfaMethodId?: string | null
}

export const executeTeamTransactionProposal = async ({
  proposal,
  wallet,
  userPkp,
  accessToken,
  authMethodId,
  providerType,
  userEmail,
  refreshNotifications,
  refreshProposals,
  onProposalChange,
  setShowSendDialog,
  pinCode = '',
  mfaType = '',
  mfaCode = '',
  mfaMethodId = null,
}: ExecuteTransactionProposalParams) => {
  const sessionSigs = await getMultiProviderSessionSigs({
    pkpPublicKey: userPkp.publicKey,
    pkpTokenId: userPkp.tokenId,
    accessToken,
    providerType,
    userEmail,
  })
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
    accessToken,
    providerType,
    authMethodId,
    pinCode,
    mfaType,
    mfaCode,
    mfaMethodId,
  })

  // Update the proposal status to completed if verification was successful
  const result = typeof response.response === 'string' 
    ? JSON.parse(response.response) 
    : response.response
  log('Parsed response object:', result)

  if (result.isValid) {
    if (result.requireMFA || result.requiresMFA) {
      // Return MFA requirement for security verification hook
      return {
        success: false,
        requiresMFA: true,
        availableMFAOptions: result.availableMFAOptions,
        error: result.error || 'MFA verification required'
      }
    } else if (result.error) {
      return { success: false, error: result.error }
    }
    
    let txHash = null
    if (result.status === 'success') {
      try {
        const sig = typeof result.sig === 'string' ? JSON.parse(result.sig) : result.sig;
        
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
    refreshNotifications(authMethodId, userPkp?.ethAddress)

    // Refresh proposals data
    if (refreshProposals) {
      await refreshProposals()
    }

    // Call callback to refresh data
    onProposalChange?.()

    // Close dialogs
    setShowSendDialog(false)

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
    
    // Return success for security verification hook
    return { success: true, txHash }
  }
  
  // If we reach here, the transaction was not valid
  return { success: false, error: 'Transaction execution failed' }
}

interface InviteTeamUserParams {
  state: SendTransactionDialogState
  accessToken: string
  authMethodId: string
  setIsSending: (sending: boolean) => void
  setShowSendDialog: (show: boolean) => void
}

export const inviteTeamUser = async ({
  state,
  accessToken,
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
        'Authorization': `Bearer ${accessToken}`
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
  accessToken: string
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
  accessToken,
  userPkp,
  currentProposal,
  wallet,
  executeTransactionHandler,
}: MfaVerifyParams) => {
  const { otpCode, mfaMethodId } = state

  // Verify OTP in lit action
  if (!accessToken || !userPkp || !currentProposal || !wallet) {
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
