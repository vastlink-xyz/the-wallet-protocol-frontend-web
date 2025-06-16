import axios from 'axios';
import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage';
import { log } from '@/lib/utils';

interface ProposalExecutedNotificationParams {
  proposalType: 'transaction' | 'settings'; 
  proposal: MessageProposal;
  wallet: MultisigWallet;
  txHash?: string;
}

/**
 * Send proposal executed notification to all approvers
 * @param params Notification parameters
 * @returns Sending result
 */
export const sendProposalExecutedNotification = async (params: ProposalExecutedNotificationParams) => {
  try {
    const { proposal, wallet, txHash, proposalType } = params;

    const approvers: string[] = wallet.signers.map(signer => signer.email).filter(Boolean) as string[];

    // If no approvers found, skip notification
    if (approvers.length === 0) {
      log('No approvers found for proposal:', proposal.id);
      return { success: false, error: 'No approvers found' };
    }
    
    // Build wallet link
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    const walletLink = `${appUrl}/wallet/${wallet.id}/details`;
    
    // Prepare notification data based on proposal type
    let executionDetails: any = {};
    
    if (proposalType === 'transaction' && proposal.transactionData) {
      // Transaction type proposal
      executionDetails = {
        recipientAddress: proposal.transactionData.to,
        amount: proposal.transactionData.value,
        symbol: proposal.transactionData.tokenType || 'ETH',
        transactionHash: txHash || proposal.txHash
      };
    } else if (proposalType === 'settings' && proposal.settingsData) {
      // Settings change type proposal
      const settingsData = proposal.settingsData;
      const descriptions = [];
      
      if (settingsData.threshold !== undefined) {
        descriptions.push(`Updated signing threshold to ${settingsData.threshold}`);
      }
      
      if (settingsData.signers && settingsData.originalState?.signers) {
        const oldSignersCount = settingsData.originalState.signers.length;
        const newSignersCount = settingsData.signers.length;
        if (oldSignersCount !== newSignersCount) {
          descriptions.push(`Updated signers count from ${oldSignersCount} to ${newSignersCount}`);
        }
      }
      
      if (settingsData.name && settingsData.originalState?.name && settingsData.name !== settingsData.originalState.name) {
        descriptions.push(`Updated wallet name to "${settingsData.name}"`);
      }
      
      if (settingsData.mfaSettings) {
        descriptions.push('Updated MFA settings');
      }
      
      // Use custom change description if provided, otherwise use generated descriptions
      executionDetails = {
        changeDescription: settingsData.changeDescription || descriptions.join(', ') || 'Wallet settings updated'
      };
    }
    
    // Find proposer email
    const proposerEmail = proposal.createdBy?.email || 'Unknown';
    
    // Prepare request data
    const requestData = {
      approvers,
      proposalId: proposal.id,
      proposalType,
      walletName: wallet.name,
      walletLink,
      executionDetails,
      proposer: proposerEmail
    };

    log('Sending proposal executed notification:', {
      proposalId: proposal.id,
      proposalType,
      walletName: wallet.name,
      approversCount: approvers.length,
      proposer: proposerEmail,
      approvers
    });
    
    // Call the frontend API which will handle sending to all approvers
    const response = await axios.post('/api/messaging/send-proposal-executed-notification', requestData);

    if (response.data.success) {
      log(`Successfully sent proposal executed notifications to ${response.data.totalSent} approver(s)`);
      return {
        success: true,
        sentTo: response.data.sentTo,
        totalSent: response.data.totalSent,
        totalFailed: response.data.totalFailed || 0
      };
    } else {
      throw new Error(response.data.error || 'Failed to send notifications');
    }
    
  } catch (error) {
    console.error('Failed to send proposal executed notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
