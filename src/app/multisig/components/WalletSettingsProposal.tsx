import type { MessageProposal, MFASettings, MultisigWallet } from '@/app/api/multisig/storage'
import { log } from '@/lib/utils';
import { TokenType } from '@/lib/web3/token'

// extend settingsData type to include originalState and changeDescription
interface ExtendedSettingsData {
  signers?: {
    ethAddress: string;
    publicKey: string;
    email: string;
    authMethodId?: string;
  }[];
  threshold?: number;
  mfaSettings?: MFASettings;
  name?: string;
  originalState?: any; // original wallet state
  changeDescription?: string; // change description
}

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
  
  // Get original state from proposal or use selectedWallet as fallback
  const originalState = settingsData.originalState || selectedWallet;
  log('originalState', originalState)
  
  // Prepare descriptions of changes
  const descriptions = [];
  
  // Check for name changes
  if (settingsData.name !== undefined && originalState?.name !== undefined) {
    if (settingsData.name !== originalState.name) {
      descriptions.push(`Change name from "${originalState.name}" to "${settingsData.name}"`);
    }
  }
  
  // Check for threshold changes
  if (settingsData.threshold !== undefined && originalState?.threshold !== undefined) {
    if (settingsData.threshold !== originalState.threshold) {
      descriptions.push(`Change threshold from ${originalState.threshold} to ${settingsData.threshold}`);
    }
  }
  
  let newSigners: any[] = [];
  let removedSigners: any[] = [];
  
  // Check for signer changes
  if (settingsData.signers && originalState?.signers) {
    const originalSigners = originalState.signers;
    
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
  const mfaChanges: string[] = [];
  log('settingsData.mfaSettings', settingsData.mfaSettings)
  if (settingsData.mfaSettings?.dailyLimits && originalState?.mfaSettings?.dailyLimits) {
    const newLimits = settingsData.mfaSettings.dailyLimits;
    const oldLimits = originalState.mfaSettings.dailyLimits;
    
    // Check which tokens have different limits
    const tokenTypes = Object.keys(newLimits).concat(
      Object.keys(oldLimits).filter(key => !Object.keys(newLimits).includes(key))
    );
    
    // For each token type, check if the limit has changed
    tokenTypes.forEach(token => {
      const typedToken = token as TokenType;
      if (newLimits[typedToken] !== oldLimits[typedToken]) {
        mfaChanges.push(`${token} Daily Limit`);
      }
    });
  }
  
  if (mfaChanges.length > 0) {
    descriptions.push(`Update daily limits (${mfaChanges.join(', ')})`);
  }
  
  // Handle case when proposal is completed but changes are not detected
  if (descriptions.length === 0 && proposal.status === 'completed') {
    descriptions.push(settingsData.changeDescription || 'Wallet settings updated');
  } else if (descriptions.length === 0) {
    descriptions.push('No changes detected');
  }

  return (
    <div>
      <div><span className="font-medium">Type:</span> Wallet Settings Change</div>
      <div><span className="font-medium">Changes:</span> {descriptions.join(', ')}</div>
      
      {/* Display detailed settings changes if available */}
      {settingsData && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md text-sm">
          {settingsData.threshold !== undefined && originalState?.threshold !== undefined && 
           settingsData.threshold !== originalState.threshold && (
            <div className="flex gap-2">
              <span className="font-medium">Threshold:</span> 
              {originalState.threshold} → {settingsData.threshold} of {settingsData.signers?.length || originalState?.signers?.length || 0}
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