import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import { getUserEmailFromStorage } from "@/lib/storage/user";
import { IRelayPKP } from "@lit-protocol/types";
import axios from "axios";
import { sendTeamNotification } from "@/lib/notification/team-notificatioin";
import { generateSettingsChangeDescriptions } from "./settingsDescriptionUtils";

export const getTransactionDetails = (proposal: MessageProposal, wallet: MultisigWallet) => {
  try {
    // If this is a wallet settings modification proposal
    if (proposal.type === 'walletSettings') {
      const settingsData = proposal.settingsData || JSON.parse(proposal.message);
      
      // Use original state from settingsData if available, otherwise construct from current wallet
      const originalState = settingsData.originalState || (wallet ? {
        name: wallet.name,
        threshold: wallet.threshold,
        signers: wallet.signers,
        mfaSettings: wallet.metadata?.mfaSettings,
      } : null);
      
      // Generate detailed change descriptions
      const changeResult = generateSettingsChangeDescriptions(settingsData, originalState);
      
      // Use generated descriptions or fallback
      const descriptions = changeResult.descriptions.length > 0 
        ? changeResult.descriptions 
        : ['Wallet settings change'];
      
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

export const fetchProposal = async (proposalId: string, walletId: string) => {
  const { data } = await axios.get(`/api/multisig/messages?proposalId=${proposalId}&walletId=${walletId}`)
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
        await sendTeamNotification({
          to: signer.email,
          walletLink,
          notificationType: 'multisig-wallet-added',
          walletAddress: updatedWallet.pkp.ethAddress,
          threshold: updatedWallet.threshold,
          signersCount: updatedWallet.signers.length,
          walletName: updatedWallet.name,
          proposer: currentUserEmail,
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
