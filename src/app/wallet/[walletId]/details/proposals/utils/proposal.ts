import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage";
import axios from "axios";

export const getTransactionDetails = (proposal: MessageProposal, selectedWallet: MultisigWallet) => {
  try {
    // If this is a wallet settings modification proposal
    if (proposal.type === 'walletSettings') {
      const settingsData = proposal.settingsData || JSON.parse(proposal.message);
      const descriptions = [];
      
      if (settingsData.threshold !== undefined) {
        descriptions.push(`Change threshold to ${settingsData.threshold}`);
      }
      
      if (settingsData.signers) {
        const originalSigners = selectedWallet?.signers || [];
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
