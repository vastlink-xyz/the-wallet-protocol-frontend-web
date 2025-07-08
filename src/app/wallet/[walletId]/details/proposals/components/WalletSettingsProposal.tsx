import type { MessageProposal, MultisigWallet } from '@/app/api/multisig/storage'
import { generateSettingsChangeDescriptions, ExtendedSettingsData } from '../utils/settingsDescriptionUtils';

interface WalletSettingsProposalProps {
  proposal: MessageProposal
  selectedWallet: MultisigWallet | null
}

export function WalletSettingsProposal({ proposal, selectedWallet }: WalletSettingsProposalProps) {
  // Extract settings data from the proposal
  const settingsData = proposal.settingsData as ExtendedSettingsData;
  if (!settingsData) {
    return <div>Unable to parse settings data</div>;
  }
  
  // Get original state from proposal or convert selectedWallet to same structure
  const originalState = settingsData.originalState || (selectedWallet ? {
    name: selectedWallet.name,
    threshold: selectedWallet.threshold,
    signers: selectedWallet.signers,
    mfaSettings: selectedWallet.metadata?.mfaSettings,
  } : null);
  
  // Generate change descriptions using the utility function
  const changeResult = generateSettingsChangeDescriptions(settingsData, originalState);
  const descriptions = changeResult.descriptions;
  
  // Handle case when proposal is completed but changes are not detected
  if (descriptions.length === 0 && proposal.status === 'completed') {
    descriptions.push(settingsData.changeDescription || 'Wallet settings updated');
  } else if (descriptions.length === 0) {
    descriptions.push('No changes detected');
  }

  const renderChanges = () => {
    return (
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="space-y-2">
          {changeResult.changes.name && (
            <div className="text-sm">
              <span className="text-gray-600 font-bold">Name:</span> 
              <span className="text-gray-800 ml-2">"{changeResult.changes.name.from}" → "{changeResult.changes.name.to}"</span>
            </div>
          )}
          
          {changeResult.changes.threshold && (
            <div className="text-sm">
              <span className="text-gray-600 font-bold">Threshold:</span> 
              <span className="text-gray-800 ml-2">{changeResult.changes.threshold.from} → {changeResult.changes.threshold.to}</span>
            </div>
          )}
          
          {changeResult.changes.signers && (
            <div className="text-sm space-y-2">
              {changeResult.changes.signers.added?.length > 0 && (
                <div>
                  <span className="text-gray-600 font-bold">Add signers:</span>
                  <div className="ml-4 mt-1 space-y-1">
                    {changeResult.changes.signers.added.map((signer: any, index: number) => (
                      <div key={index} className="text-gray-800">
                        • {signer.email} ({signer.ethAddress.slice(0, 6)}...{signer.ethAddress.slice(-4)})
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {changeResult.changes.signers.removed?.length > 0 && (
                <div>
                  <span className="text-gray-600 font-bold">Remove signers:</span>
                  <div className="ml-4 mt-1 space-y-1">
                    {changeResult.changes.signers.removed.map((signer: any, index: number) => (
                      <div key={index} className="text-gray-800">
                        • {signer.email} ({signer.ethAddress.slice(0, 6)}...{signer.ethAddress.slice(-4)})
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {changeResult.changes.mfaSettings && (
            <div className="text-sm">
              <span className="text-gray-600 font-bold">Daily limits:</span>
              <div className="ml-4 mt-1 space-y-1">
                {Object.entries(changeResult.changes.mfaSettings.dailyLimits).map(([token, change]: [string, any]) => (
                  <div key={token} className="text-xs text-gray-800">
                    • {token}: {change.from !== undefined ? change.from.toString() : 'undefined'} → {change.to !== undefined ? change.to.toString() : 'undefined'}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {Object.keys(changeResult.changes).length === 0 && (
            <div className="text-sm text-gray-600">
              <span className="font-bold">Details:</span> {descriptions.join(', ')}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderChanges()}
    </div>
  );
} 