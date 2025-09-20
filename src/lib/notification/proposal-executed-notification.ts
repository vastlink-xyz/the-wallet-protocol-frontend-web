import { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage';
import { log } from '@/lib/utils';
import { SUPPORTED_TOKENS_INFO } from '@/lib/web3/token';
import { generateSettingsChangeDescriptions } from '@/app/wallet/[walletId]/details/proposals/utils/settingsDescriptionUtils';

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
      const tokenSymbol = proposal.transactionData.tokenType || 'ETH';
      const hash = txHash || proposal.txHash;
      const tokenInfo = SUPPORTED_TOKENS_INFO[tokenSymbol as keyof typeof SUPPORTED_TOKENS_INFO];
      
      let transactionUrl = hash;
      if (hash && tokenInfo?.explorerBaseUrl) {
        transactionUrl = `${tokenInfo.explorerBaseUrl}/tx/${hash}`;
      }
      
      executionDetails = {
        recipientAddress: proposal.transactionData.to,
        amount: proposal.transactionData.value,
        symbol: tokenSymbol,
        transactionUrl
      };
    } else if (proposalType === 'settings' && proposal.settingsData) {
      // Settings change type proposal
      const settingsData = proposal.settingsData;
      
      // Use unified description generation
      const changeResult = generateSettingsChangeDescriptions(settingsData, settingsData.originalState);
      
      // Use custom change description if provided, otherwise use generated descriptions
      executionDetails = {
        changeDescription: settingsData.changeDescription || 
                          (changeResult.descriptions.length > 0 ? changeResult.descriptions.join(', ') : 'Wallet settings updated')
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
    const res = await fetch('/api/messaging/send-proposal-executed-notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    })
    const data = await res.json()
    if (res.ok && data.success) {
      log(`Successfully sent proposal executed notifications to ${data.totalSent} approver(s)`);
      return {
        success: true,
        sentTo: data.sentTo,
        totalSent: data.totalSent,
        totalFailed: data.totalFailed || 0
      };
    } else {
      throw new Error(data.error || 'Failed to send notifications');
    }
    
  } catch (error) {
    console.error('Failed to send proposal executed notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};
