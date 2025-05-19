import { log } from '@/lib/utils';
import { Policy, BaseOperationContext } from './Policy';

// Context for updating wallet settings, specifically the daily limit
export interface UpdateDailyLimitContext extends BaseOperationContext {
}

/**
 * Policy to determine if MFA should be triggered when updating the daily withdrawal limit.
 */
export class WalletSettingsUpdatePolicy extends Policy<UpdateDailyLimitContext> {
  async shouldTriggerMFA(context: UpdateDailyLimitContext): Promise<boolean> {
    return true
  }

  getDescription(): string {
    return 'Triggers MFA if the daily withdrawal limit is being increased or set for the first time when MFA is enabled.';
  }
}

export const walletSettingsUpdatePolicy = new WalletSettingsUpdatePolicy();
Object.freeze(walletSettingsUpdatePolicy); 
