import type { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'

interface WalletSettingsProposalProps {
  proposal: MessageProposal
  selectedWallet: MultisigWallet | null
}

export function WalletSettingsProposal({ proposal, selectedWallet }: WalletSettingsProposalProps) {
  // Extract settings data from the proposal
  const settingsData = proposal.settingsData;
  if (!settingsData) {
    return <div>Unable to parse settings data</div>;
  }
  
  // Prepare descriptions of changes
  const descriptions = [];
  
  // Check for threshold changes
  if (settingsData.threshold !== undefined && selectedWallet?.threshold !== undefined) {
    if (settingsData.threshold !== selectedWallet.threshold) {
      descriptions.push(`Change threshold from ${selectedWallet.threshold} to ${settingsData.threshold}`);
    }
  }
  
  let newSigners: any[] = [];
  let removedSigners: any[] = [];
  
  // Check for signer changes
  if (settingsData.signers && selectedWallet?.signers) {
    const originalSigners = selectedWallet.signers;
    
    newSigners = settingsData.signers.filter((s: any) => 
      !originalSigners.some((os: any) => os.ethAddress === s.ethAddress)
    );
    
    removedSigners = originalSigners.filter((os: any) => 
      !settingsData.signers?.some((s: any) => s.ethAddress === os.ethAddress)
    );
    
    if (newSigners.length > 0) {
      descriptions.push(`Add ${newSigners.length} signer(s)`);
    }
    
    if (removedSigners.length > 0) {
      descriptions.push(`Remove ${removedSigners.length} signer(s)`);
    }
  }
  
  // Check for MFA setting changes
  let mfaChanges: string[] = [];
  if (settingsData.mfaSettings && selectedWallet) {
    const walletMfaSettings = (selectedWallet as any).mfaSettings || {};
    
    if (settingsData.mfaSettings.phoneNumber !== walletMfaSettings.phoneNumber) {
      mfaChanges.push('Phone Number');
    }
    if (settingsData.mfaSettings.dailyLimit !== walletMfaSettings.dailyLimit) {
      mfaChanges.push('Daily Limit');
    }
    
    if (mfaChanges.length > 0) {
      descriptions.push(`Update MFA settings (${mfaChanges.join(', ')})`);
    }
  }
  
  // Default if no specific changes detected
  if (descriptions.length === 0) {
    descriptions.push('No changes detected');
  }

  return (
    <div>
      <div><span className="font-medium">Type:</span> Wallet Settings Change</div>
      <div><span className="font-medium">Changes:</span> {descriptions.join(', ')}</div>
      
      {/* Display detailed settings changes if available */}
      {settingsData && selectedWallet && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm">
          {settingsData.threshold !== undefined && selectedWallet.threshold !== undefined && 
           settingsData.threshold !== selectedWallet.threshold && (
            <div className="flex gap-2">
              <span className="font-medium">Threshold:</span> 
              {selectedWallet.threshold} → {settingsData.threshold} of {selectedWallet?.signers?.length || 0}
            </div>
          )}
          
          {newSigners.length > 0 && (
            <div className="flex gap-2">
              <span className="font-medium">New Signers:</span> 
              {newSigners.map((s: any) => s.email || s.ethAddress).join(', ')}
            </div>
          )}
          
          {removedSigners.length > 0 && (
            <div className="flex gap-2">
              <span className="font-medium">Removed Signers:</span> 
              {removedSigners.map((s: any) => s.email || s.ethAddress).join(', ')}
            </div>
          )}
          
          {mfaChanges.length > 0 && (
            <div className="flex gap-2">
              <span className="font-medium">MFA Changes:</span> 
              {mfaChanges.join(', ')}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 