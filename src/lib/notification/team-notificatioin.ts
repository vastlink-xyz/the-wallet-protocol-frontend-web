/**
 * Send team wallet notification - Unified handler for all types of team wallet notifications
 * @param params Notification parameters
 * @returns Sending result
 */

import { BASE_URL } from '@/constants';

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
    // Build URL that works in both browser and server contexts
    const url = `${BASE_URL}/api/messaging/send-multisig-notification`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })

    const data = await res.json().catch(() => ({}))
    if (res.ok && data && data.success) {
      console.log(`Successfully sent notification to: ${params.to}`)
      return { success: true, email: params.to, response: data }
    }
    throw new Error(data?.error || data?.message || `Failed with status ${res.status}`)
  } catch (error) {
    console.error(`Failed to send notification to ${params.to}:`, error)
    return { success: false, email: params.to, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}; 
