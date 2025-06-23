import { MFASettings } from '@/app/api/multisig/storage';

/**
 * Parameters for generating wallet change descriptions
 */
export interface WalletChangeDescriptionParams {
  originalWallet: {
    name: string;
    threshold: number;
    signers: any[];
    mfaSettings?: MFASettings;
  };
  newSettings: {
    name?: string;
    threshold?: number;
    signers?: any[];
    mfaSettings?: MFASettings;
  };
  options?: {
    addedSignersCount?: number;
    removedSignersCount?: number;
    customMfaMessage?: string;
  };
}

/**
 * Generate standardized change descriptions for wallet settings updates
 * This function provides a unified way to describe wallet changes across the application
 * 
 * @param params - The wallet change parameters
 * @returns Array of change description strings
 */
export function generateWalletChangeDescriptions(params: WalletChangeDescriptionParams): string[] {
  const { originalWallet, newSettings, options } = params;
  const descriptions: string[] = [];

  // Name changes
  if (newSettings.name && newSettings.name !== originalWallet.name) {
    descriptions.push(`Change name from "${originalWallet.name}" to "${newSettings.name}"`);
  }

  // Threshold changes
  if (newSettings.threshold !== undefined && newSettings.threshold !== originalWallet.threshold) {
    descriptions.push(`Change threshold from ${originalWallet.threshold} to ${newSettings.threshold}`);
  }

  // Signer changes
  if (newSettings.signers) {
    // Use provided counts if available
    if (options?.addedSignersCount !== undefined && options.addedSignersCount > 0) {
      descriptions.push(`Add ${options.addedSignersCount} signer(s)`);
    }
    if (options?.removedSignersCount !== undefined && options.removedSignersCount > 0) {
      descriptions.push(`Remove ${options.removedSignersCount} signer(s)`);
    }

    // If no custom counts provided, calculate them automatically
    if (options?.addedSignersCount === undefined && options?.removedSignersCount === undefined) {
      const addedCount = newSettings.signers.filter(s =>
        !originalWallet.signers.some((os: any) => os.ethAddress === s.ethAddress)
      ).length;
      const removedCount = originalWallet.signers.filter((os: any) =>
        !newSettings.signers!.some(s => s.ethAddress === os.ethAddress)
      ).length;

      if (addedCount > 0) descriptions.push(`Add ${addedCount} signer(s)`);
      if (removedCount > 0) descriptions.push(`Remove ${removedCount} signer(s)`);
    }
  }

  // MFA changes
  if (newSettings.mfaSettings) {
    descriptions.push(options?.customMfaMessage || 'Update MFA settings');
  }

  return descriptions;
}
