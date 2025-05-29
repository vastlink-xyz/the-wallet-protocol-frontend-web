import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { sendMultisigNotification } from "@/lib/notification";
import { getUserEmailFromStorage } from "@/lib/utils";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";

export const getTransactionDetails = (proposal: MessageProposal, wallet: MultisigWallet) => {
  try {
    // If this is a wallet settings modification proposal
    if (proposal.type === 'walletSettings') {
      const settingsData = proposal.settingsData || JSON.parse(proposal.message);
      const descriptions = [];
      
      if (settingsData.threshold !== undefined) {
        descriptions.push(`Change threshold to ${settingsData.threshold}`);
      }
      
      if (settingsData.signers) {
        const originalSigners = wallet?.signers || [];
        const newSigners = settingsData.signers.filter((s: any) => 
          !originalSigners.some((os: any) => os.ethAddress === s.ethAddress)
        );
        
        const removedSigners = originalSigners.filter((os: any) => 
          !settingsData.signers.some((s: any) => s.ethAddress === os.ethAddress)
        );
        
        if (newSigners.length > 0) {
          descriptions.push(`Add ${newSigners.length} signer(s)`);
        }
        
        if (removedSigners.length > 0) {
          descriptions.push(`Remove ${removedSigners.length} signer(s)`);
        }
      }
      
      if (settingsData.mfaSettings) {
        if (settingsData.mfaSettings.phoneNumber || settingsData.mfaSettings.dailyLimit) {
          descriptions.push('Update MFA settings');
        }
      }
      
      // Default if no specific changes detected
      if (descriptions.length === 0) {
        descriptions.push('Wallet settings change');
      }
      
      return {
        to: 'Wallet Settings',
        value: '0',
        data: descriptions.join(', '),
      };
    }
    
    // For regular transaction type, use transactionData
    if (proposal.transactionData) {
      return proposal.transactionData;
    }
    
    // Try to parse message field (backward compatibility)
    return JSON.parse(proposal.message);
  } catch (e) {
    return {
      to: 'Unable to parse transaction details',
      value: '0',
      data: proposal.message,
    };
  }
};

export const fetchProposals = async (walletId: string) => {
  const { data } = await axios.get(`/api/multisig/messages?walletId=${walletId}`)
  return data.data
}

export const fetchUpdatedWallet = async (walletId: string) => {
  try {
    const response = await axios.get(`/api/multisig?id=${walletId}`);
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch updated wallet:', error);
    return null;
  }
};
    
  // Function to send notifications to new signers after wallet settings update
export const sendNotificationsToNewSigners = async (originalWallet: MultisigWallet, updatedWallet: MultisigWallet) => {
  try {
    // Get original signers
    const originalSigners = originalWallet.signers || [];
    
    // Find new signers (signers in updated wallet that were not in original wallet)
    const newSigners = updatedWallet.signers.filter((newSigner: any) => 
      !originalSigners.some((originalSigner: any) => 
        originalSigner.ethAddress === newSigner.ethAddress
      )
    );
    
    // Send email notifications to new signers if any
    if (newSigners.length > 0) {
      // Get current user's email
      const currentUserEmail = getUserEmailFromStorage()
      
      // Build wallet link
      const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      const walletLink = appUrl;
      
      // Send notifications to each new signer
      await Promise.all(newSigners.map(async (signer: any) => {
        await sendMultisigNotification({
          to: signer.email,
          walletLink,
          notificationType: 'multisig-wallet-added',
          currentUserEmail,
          walletAddress: updatedWallet.pkp.ethAddress,
          threshold: updatedWallet.threshold,
          signersCount: updatedWallet.signers.length
        });
      }));
    }
    
    return newSigners.length > 0;
  } catch (error) {
    console.error('Error sending notifications to new signers:', error);
    return false;
  }
};

export const hasUserSigned = (proposal: MessageProposal, userPkp: IRelayPKP) => {
  return proposal.signatures.some(sig => sig.signer === userPkp.ethAddress)
}
