import type { MFASettings } from '@/app/api/multisig/storage'
import { TokenType } from '@/lib/web3/token'

// Type definition for originalState based on actual usage patterns
export interface OriginalWalletState {
  name?: string;
  threshold?: number;
  signers?: {
    ethAddress: string;
    publicKey: string;
    email: string;
    authMethodId?: string;
  }[];
  mfaSettings?: MFASettings;
}

export interface ExtendedSettingsData {
  signers?: {
    ethAddress: string;
    publicKey: string;
    email: string;
    authMethodId?: string;
  }[];
  threshold?: number;
  mfaSettings?: MFASettings;
  name?: string;
  originalState?: OriginalWalletState;
  changeDescription?: string;
}

export interface SettingsChangeDescription {
  descriptions: string[];
  newSigners: any[];
  removedSigners: any[];
  changes: {
    [key: string]: any;
  };
}

export function generateSettingsChangeDescriptions(
  settingsData: ExtendedSettingsData,
  originalState: OriginalWalletState | null
): SettingsChangeDescription {
  const descriptions: string[] = [];
  let newSigners: any[] = [];
  let removedSigners: any[] = [];
  const changes: { [key: string]: any } = {};

  // Name changes with old -> new format
  if (settingsData.name !== undefined && originalState?.name !== undefined) {
    if (settingsData.name !== originalState.name) {
      descriptions.push(`Name: "${originalState.name}" → "${settingsData.name}"`);
      changes.name = { from: originalState.name, to: settingsData.name };
    }
  }

  // Threshold changes with old -> new format
  if (settingsData.threshold !== undefined && originalState?.threshold !== undefined) {
    if (settingsData.threshold !== originalState.threshold) {
      const originalSignersCount = originalState.signers?.length || 0;
      const newSignersCount = settingsData.signers?.length || originalSignersCount;
      
      descriptions.push(`Threshold: ${originalState.threshold} of ${originalSignersCount} → ${settingsData.threshold} of ${newSignersCount}`);
      changes.threshold = { 
        from: originalState.threshold, 
        to: settingsData.threshold,
        fromSignersCount: originalSignersCount,
        toSignersCount: newSignersCount
      };
    }
  }

  // Signer changes with detailed information
  if (settingsData.signers && originalState?.signers) {
    const originalSigners = originalState.signers;
    
    newSigners = settingsData.signers.filter((s: any) => 
      !originalSigners.some((os: any) => os.ethAddress === s.ethAddress)
    );
    
    removedSigners = originalSigners.filter((os: any) => 
      !settingsData.signers?.some((s: any) => s.ethAddress === os.ethAddress)
    );
    
    // Add detailed signer additions
    if (newSigners.length > 0) {
      const signerDetails = newSigners.map(signer => 
        `${signer.email} (${signer.ethAddress.slice(0, 6)}...${signer.ethAddress.slice(-4)})`
      );
      descriptions.push(`Add signers: ${signerDetails.join(', ')}`);
    }
    
    // Add detailed signer removals
    if (removedSigners.length > 0) {
      const signerDetails = removedSigners.map(signer => 
        `${signer.email} (${signer.ethAddress.slice(0, 6)}...${signer.ethAddress.slice(-4)})`
      );
      descriptions.push(`Remove signers: ${signerDetails.join(', ')}`);
    }
    
    // Add signers changes to changes object
    if (newSigners.length > 0 || removedSigners.length > 0) {
      changes.signers = {
        added: newSigners,
        removed: removedSigners
      };
    }
  }

  // MFA settings changes with specific limit details
  if (settingsData.mfaSettings?.dailyLimits) {
    const newLimits = settingsData.mfaSettings.dailyLimits;
    const oldLimits = originalState?.mfaSettings?.dailyLimits || {} as Record<TokenType, string>;
    
    // Get all token types that exist in either old or new limits
    const tokenTypes = Array.from(new Set([
      ...Object.keys(newLimits),
      ...Object.keys(oldLimits)
    ]));
    
    const mfaChanges: string[] = [];
    const mfaChangesObj: { [key: string]: { from: any; to: any } } = {};
    
    // For each token type, check if the limit has changed
    tokenTypes.forEach(token => {
      const typedToken = token as TokenType;
      const oldLimit = oldLimits[typedToken];
      const newLimit = newLimits[typedToken];
      
      if (oldLimit !== newLimit) {
        const oldValue = oldLimit !== undefined ? oldLimit.toString() : 'undefined';
        const newValue = newLimit !== undefined ? newLimit.toString() : 'undefined';
        mfaChanges.push(`${token}: ${oldValue} → ${newValue}`);
        mfaChangesObj[token] = { from: oldLimit, to: newLimit };
      }
    });
    
    if (mfaChanges.length > 0) {
      descriptions.push(`Daily limits - ${mfaChanges.join(', ')}`);
      changes.mfaSettings = { dailyLimits: mfaChangesObj };
    } else if (Object.keys(newLimits).length > 0) {
      // If newLimits exist but no changes detected, it might be initial setup
      descriptions.push(`Set daily limits - ${Object.entries(newLimits).map(([token, limit]) => `${token}: ${limit}`).join(', ')}`);
      changes.mfaSettings = { dailyLimits: mfaChangesObj };
    }
  }

  return {
    descriptions,
    newSigners,
    removedSigners,
    changes
  };
}