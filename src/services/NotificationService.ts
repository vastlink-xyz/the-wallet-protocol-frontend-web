
import { MessageProposal } from '@/app/api/multisig/storage';
import { shouldShowNotificationOnPath } from '@/constants/routes';
import { PinService } from '@/services/pinService';

export type NotificationType = 'mfa_setup' | 'pending_proposal' | 'pin_setup';


export interface BaseNotification<T = any> {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  component?: React.ComponentType<any>;
  data?: T;
}

export type MFANotification = BaseNotification<{ hasVerifiedPhone: boolean }>;
export type PendingProposalNotification = BaseNotification<MessageProposal>;
export type PinNotification = BaseNotification<{ hasPinSet: boolean }>;

export type Notification = MFANotification | PendingProposalNotification | PinNotification;

export interface NotificationContext {
  authMethodId: string | null;
  currentPath: string;
}

export class NotificationService {
  private static instance: NotificationService | null = null;

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  // Separate methods for getting specific notification types
  public async getMFANotifications(): Promise<MFANotification[]> {
    const mfaNotification = await this.checkMFASetup();
    return mfaNotification ? [mfaNotification] : [];
  }

  public async getPinNotifications(): Promise<PinNotification[]> {
    const pinNotification = await this.checkPinSetup();
    return pinNotification ? [pinNotification] : [];
  }

  public async getPendingProposalNotifications(): Promise<PendingProposalNotification[]> {
    try {
      const { getAuthMethodFromStorage } = await import('@/lib/storage/authmethod');
      const authMethod = getAuthMethodFromStorage();
      
      if (!authMethod) {
        return [];
      }

      // Get the provider and derive authMethodId
      const { getProviderByAuthMethodType } = await import('@/lib/lit');
      const provider = getProviderByAuthMethodType(authMethod.authMethodType);
      const authMethodId = await provider.getAuthMethodId(authMethod);

      const response = await fetch(`/api/multisig/messages/unsigned?authMethodId=${authMethodId}`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        const proposals: (MessageProposal & { walletName: string })[] = data.data?.proposals || [];

        if (proposals.length > 0) {
          return proposals.map(proposal => {
            const titleType = proposal.type === 'transaction' ? 'pending proposal' : 'setting change requested';
            const title = `${proposal.walletName} - ${titleType}`
            const message = proposal.type === 'transaction' ? `A ${proposal.transactionData?.value} ${proposal.transactionData?.tokenType} transfer proposal requires your reivew.` : proposal.settingsData?.changeDescription
            return {
              id: `pending_proposal_${proposal.id}`,
              type: 'pending_proposal',
              title,
              message: message || 'Pending proposal needs your approval.',
              data: proposal
            };
          });
        }
      }
    } catch (error) {
      console.error('Error fetching pending proposal notifications:', error);
    }

    return [];
  }


  private shouldShowOnPath(path: string): boolean {
    return shouldShowNotificationOnPath(path);
  }

  public async getNotifications(context: NotificationContext): Promise<Notification[]> {
    if (!this.shouldShowOnPath(context.currentPath) || !context.authMethodId) {
      return [];
    }

    const notifications: Notification[] = [];

    // Check MFA setup status
    const mfaNotification = await this.checkMFASetup();
    if (mfaNotification) {
      notifications.push(mfaNotification);
    }

    // Check PIN setup status
    const pinNotification = await this.checkPinSetup();
    if (pinNotification) {
      notifications.push(pinNotification);
    }

    return notifications;
  }


  private async checkMFASetup(): Promise<MFANotification | null> {
    try {
      // Get session JWT from auth method storage
      const { getAuthMethodFromStorage } = await import('@/lib/storage/authmethod');
      const authMethod = getAuthMethodFromStorage();
      const sessionJwt = authMethod?.accessToken;

      if (!sessionJwt) {
        return null;
      }

      const response = await fetch('/api/mfa/status', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`
        },
      });

      if (response.ok) {
        const data = await response.json();
        const phoneNumbers = data.phone_numbers || [];
        const hasVerifiedPhone = phoneNumbers.some((p: any) => p.verified);

        if (!hasVerifiedPhone) {
          return {
            id: 'mfa_setup',
            type: 'mfa_setup',
            title: 'Set MFA',
            message: `To make your wallets more secure, we highly recommend you to`,
            data: { hasVerifiedPhone }
          };
        }
      }
    } catch (error) {
      console.error('Error checking MFA status:', error);
    }

    return null;
  }

  private async checkPinSetup(): Promise<PinNotification | null> {
    try {
      // Check if PIN is set in localStorage using PinService
      const hasPinSet = PinService.hasLocalPinData();

      if (!hasPinSet) {
        return {
          id: 'pin_setup',
          type: 'pin_setup',
          title: 'Set PIN',
          message: 'Add a PIN to secure your personal wallet transactions',
          data: { hasPinSet }
        };
      }
    } catch (error) {
      console.error('Error checking PIN status:', error);
    }

    return null;
  }

}

export const notificationService = NotificationService.getInstance();