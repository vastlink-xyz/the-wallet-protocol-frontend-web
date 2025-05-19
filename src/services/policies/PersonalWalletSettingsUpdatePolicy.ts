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
    try {
      // Check if user has provided a session JWT
      if (!context.sessionJwt) {
        log('PersonalWalletSettingsUpdatePolicy: No session JWT provided');
        return false;
      }

      // Call API to check if user has verified phone numbers
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
      const response = await fetch(`${baseUrl}/api/mfa/status`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${context.sessionJwt}`
        }
      });
      
      if (!response.ok) {
        log('PersonalWalletSettingsUpdatePolicy: Failed to fetch MFA status');
        return false;
      }
      
      const data = await response.json();
      log('PersonalWalletSettingsUpdatePolicy: MFA status data', data);
      
      // Check if user has any verified phone numbers
      if (data && Array.isArray(data.phone_numbers) && data.phone_numbers.length > 0) {
        // User has at least one verified phone number, trigger MFA
        return true;
      }
      
      // User has no verified phone numbers, skip MFA
      log('PersonalWalletSettingsUpdatePolicy: User has no verified MFA methods');
      return false;
    } catch (error) {
      log('PersonalWalletSettingsUpdatePolicy: Error checking MFA status', error);
      // In case of error, default to not triggering MFA for safety
      return false;
    }
  }

  getDescription(): string {
    return 'Triggers MFA if the daily withdrawal limit is being increased or set for the first time when MFA is enabled.';
  }
}

export const personalWalletSettingsUpdatePolicy = new PersonalWalletSettingsUpdatePolicy();
Object.freeze(personalWalletSettingsUpdatePolicy); 
