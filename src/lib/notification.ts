import axios from 'axios';

/**
 * Send notification email to a signer about a multisig wallet
 * @param params The parameters for the notification
 * @returns A promise resolving to a result object
 */
export const sendMultisigNotification = async (params: {
  to: string;
  walletLink: string;
  notificationType: string;
  currentUserEmail: string;
  walletAddress: string;
  threshold: number;
  signersCount: number;
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