import { log } from '@/lib/utils';
import { Policy, BaseOperationContext } from './Policy';

// Context for removing an MFA method
export interface PersonalWalletMFAUpdateContext extends BaseOperationContext {
  mfaType: 'whatsapp';
  removePhoneNumber: string;
  phoneId: string;
  sessionJwt: string;
}

/**
 * Policy to determine if MFA should be triggered when updating the MFA method.
 */
export class PersonalWalletMFAUpdatePolicy extends Policy<PersonalWalletMFAUpdateContext> {
  async shouldTriggerMFA(context: PersonalWalletMFAUpdateContext): Promise<boolean> {
    if (context.mfaType === 'whatsapp') {
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
      const response = await fetch(`${baseUrl}/api/mfa/get-user-phone`, {
        headers: {
          'Authorization': `Bearer ${context.sessionJwt}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch phone number');
      }
      
      const data = await response.json();
      log('PersonalWalletMFAUpdatePolicy: data', data);
      const phones = data.phones || [];

      if (phones.some((phone: any) => phone.phone_number === context.removePhoneNumber)) {
        return true;
      }

      return false;
    }

    return false;
  }

  getDescription(): string {
    return 'Triggers MFA when a user attempts to update the MFA method.';
  }
}

export const personalWalletMFAUpdatePolicy = new PersonalWalletMFAUpdatePolicy();
Object.freeze(personalWalletMFAUpdatePolicy); 