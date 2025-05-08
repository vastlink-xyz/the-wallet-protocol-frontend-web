import type { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'

interface WalletSettingsProposalProps {
  proposal: MessageProposal
  selectedWallet: MultisigWallet | null
}

export function WalletSettingsProposal({ proposal, selectedWallet }: WalletSettingsProposalProps) {
  // Extract settings data from the proposal
  const settingsData = proposal.settingsData || 
    (proposal.message ? (() => {
      try {
        return JSON.parse(proposal.message);
      } catch (e) {
        console.error('Error parsing proposal message:', e);
        return null;
      }
    })() : null);
  
  if (!settingsData) {
    return <div>Unable to parse settings data</div>;
  }
  
  // Prepare descriptions of changes
  const descriptions = [];
  
  if (settingsData.threshold !== undefined) {
    descriptions.push(`Change threshold to ${settingsData.threshold} of ${settingsData.totalSigners}`);
  }
  
  if (settingsData.signers && selectedWallet) {
    const originalSigners = selectedWallet.signers || [];
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

  return (
    <div>
      <div><span className="font-medium">Type:</span> Wallet Settings Change</div>
      <div><span className="font-medium">Changes:</span> {descriptions.join(', ')}</div>
      
      {/* Display detailed settings changes if available */}
      {settingsData && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm">
          {settingsData.threshold !== undefined && (
            <div className="flex gap-2">
              <span className="font-medium">New Threshold:</span> 
              {settingsData.threshold} of {settingsData.totalSigners}
            </div>
          )}
          
          {settingsData.signers && selectedWallet && (
            <>
              {settingsData.signers.filter((s: any) => 
                !selectedWallet.signers.some((os: any) => os.ethAddress === s.ethAddress)
              ).length > 0 && (
                <div className="flex gap-2">
                  <span className="font-medium">New Signers:</span> 
                  {settingsData.signers.filter((s: any) => 
                    !selectedWallet.signers.some((os: any) => os.ethAddress === s.ethAddress)
                  ).length}
                </div>
              )}
              
              {selectedWallet.signers.filter((os: any) => 
                !settingsData.signers?.some((s: any) => s.ethAddress === os.ethAddress)
              ).length > 0 && (
                <div className="flex gap-2">
                  <span className="font-medium">Removed Signers:</span> 
                  {selectedWallet.signers.filter((os: any) => 
                    !settingsData.signers?.some((s: any) => s.ethAddress === os.ethAddress)
                  ).length}
                </div>
              )}
            </>
          )}
          
          {settingsData.mfaSettings && (
            <div className="flex gap-2">
              <span className="font-medium">MFA Changes:</span> 
              {settingsData.mfaSettings.phoneNumber ? 'Phone Number, ' : ''}
              {settingsData.mfaSettings.dailyLimit ? 'Daily Limit' : ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 