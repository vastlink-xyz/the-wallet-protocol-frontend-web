import { log } from '@/lib/utils';
import { Policy, BaseOperationContext } from './Policy';

// Context for updating multisig wallet settings
export interface MultisigWalletSettingsUpdateContext extends BaseOperationContext {
  sessionJwt: string;
  walletId?: string;
}

/**
 * Policy for multisig wallet settings updates.
 * MFA is never required for multisig wallet settings updates as they only require PIN verification.
 */
export class MultisigWalletSettingsUpdatePolicy extends Policy<MultisigWalletSettingsUpdateContext> {
  async shouldTriggerMFA(context: MultisigWalletSettingsUpdateContext): Promise<boolean> {
    try {
      log('MultisigWalletSettingsUpdatePolicy: MFA not required for multisig wallet settings updates');
      
      // Multisig wallet settings updates only require PIN verification, never MFA
      return false;
    } catch (error) {
      log('MultisigWalletSettingsUpdatePolicy: Error in policy check', error);
      // In case of error, default to not triggering MFA
      return false;
    }
  }

  getDescription(): string {
    return 'Multisig wallet settings updates never require MFA - only PIN verification is needed.';
  }
}

export const multisigWalletSettingsUpdatePolicy = new MultisigWalletSettingsUpdatePolicy();
Object.freeze(multisigWalletSettingsUpdatePolicy);