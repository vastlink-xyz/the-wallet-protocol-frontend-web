import axios from 'axios';

/**
 * Send team wallet notification - Unified handler for all types of team wallet notifications
 * @param params Notification parameters
 * @returns Sending result
 */
export const sendTeamNotification = async (params: {
  // Basic parameters
  to: string;
  walletLink: string;
  notificationType: 'wallet-settings-change' | 'multisig-wallet-added' | 'transaction';
  walletName?: string;
  proposer?: string;
  
  // Transaction notification parameters
  proposalId?: string;
  recipientAddress?: string;
  amount?: string;
  symbol?: string; // For displaying correct token symbol
  
  // Wallet settings parameters
  settingsChanges?: {
    changeDescription?: string;
    threshold?: number;
    signerChanges?: boolean;
    mfaChanges?: boolean;
    nameChanges?: boolean;
    [key: string]: any;
  };
  
  // Multisig wallet parameters
  walletAddress?: string;
  threshold?: number;
  signersCount?: number;
}) => {
  try {
    // Get backend URL
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      console.error('NEXT_PUBLIC_BACKEND_URL environment variable is not defined');
      throw new Error('Backend URL is not configured');
    }

    // Call backend API to send notification
    const response = await axios.post(
      `${backendUrl}/messaging/send-multisig-notification`, 
      params
    );
    
    if (response.data && response.data.success) {
      console.log(`Successfully sent notification to: ${params.to}`);
      return {
        success: true,
        email: params.to,
        response: response.data
      };
    } else {
      throw new Error(response.data?.message || 'Failed to send notification');
    }
  } catch (error) {
    console.error(`Failed to send notification to ${params.to}:`, error);
    return {
      success: false,
      email: params.to,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}; 