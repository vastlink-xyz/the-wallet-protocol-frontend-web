import { log } from '@/lib/utils';
import { Policy, BaseOperationContext } from './Policy';

// Context for updating wallet settings, specifically the daily limit
export interface WalletSettingsUpdateContext extends BaseOperationContext {
  sessionJwt: string;
}

/**
 * Policy to determine if MFA should be triggered when updating the daily withdrawal limit.
 */
export class PersonalWalletSettingsUpdatePolicy extends Policy<WalletSettingsUpdateContext> {
  async shouldTriggerMFA(context: WalletSettingsUpdateContext): Promise<boolean> {
    // Always require MFA for any personal wallet settings modification.
    return true;
  }

  getDescription(): string {
    return 'Always triggers MFA for any personal wallet settings update (e.g., PIN changes, provider changes, limits).';
  }
}

export const personalWalletSettingsUpdatePolicy = new PersonalWalletSettingsUpdatePolicy();
Object.freeze(personalWalletSettingsUpdatePolicy); 
