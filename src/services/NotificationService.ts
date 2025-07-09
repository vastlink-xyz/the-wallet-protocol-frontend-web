
import { shouldShowNotificationOnPath } from '@/constants/routes';

export type NotificationType = 'mfa_setup';

export interface BaseNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  component?: React.ComponentType<any>;
  data?: any;
}

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
  public async getMFANotifications(): Promise<BaseNotification[]> {
    const mfaNotification = await this.checkMFASetup();
    return mfaNotification ? [mfaNotification] : [];
  }


  private shouldShowOnPath(path: string): boolean {
    return shouldShowNotificationOnPath(path);
  }

  public async getNotifications(context: NotificationContext): Promise<BaseNotification[]> {
    if (!this.shouldShowOnPath(context.currentPath) || !context.authMethodId) {
      return [];
    }

    const notifications: BaseNotification[] = [];

    // Check MFA setup status
    const mfaNotification = await this.checkMFASetup();
    if (mfaNotification) {
      notifications.push(mfaNotification);
    }

    return notifications;
  }


  private async checkMFASetup(): Promise<BaseNotification | null> {
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
            title: 'MFA Setup Required',
            message: 'To make your personal and team wallets more secure, we highly recommend you to set up daily withdrawal limits and MFA in ',
            data: { hasVerifiedPhone }
          };
        }
      }
    } catch (error) {
      console.error('Error checking MFA status:', error);
    }

    return null;
  }

}

export const notificationService = NotificationService.getInstance();