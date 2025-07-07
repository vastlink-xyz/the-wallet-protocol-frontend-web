import { MessageProposal } from '@/app/api/multisig/storage';

export type NotificationType = 'mfa_setup' | 'unsigned_proposals' | 'testnet_warning';

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

  public async getProposalNotifications(context: NotificationContext): Promise<BaseNotification[]> {
    if (!context.authMethodId) return [];
    return await this.checkUnsignedProposals(context);
  }


  private shouldShowOnPath(path: string): boolean {
    const excludedPaths = [
      '/auth/google-callback',
      '/auth/stytch-callback',
      '/login',
      '/invite'
    ];
    const exactExcludedPaths = ['/'];
    
    const isExcluded = excludedPaths.some(excludedPath => path.startsWith(excludedPath)) || exactExcludedPaths.includes(path);
    return !isExcluded;
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

    // Check unsigned proposals
    const proposalNotifications = await this.checkUnsignedProposals(context);
    notifications.push(...proposalNotifications);

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

  private async checkUnsignedProposals(context: NotificationContext): Promise<BaseNotification[]> {
    try {
      const response = await fetch(`/api/multisig/messages/unsigned?authMethodId=${context.authMethodId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.success && data.data.count > 0) {
          const proposals = data.data.proposals as MessageProposal[];
          
          return proposals.map((proposal: any) => ({
            id: `proposal_${proposal.id}`,
            type: 'unsigned_proposals' as const,
            title: 'Unsigned Proposal',
            message: this.getProposalDescription(proposal),
            data: { 
              proposal,
              walletLink: `/wallet/${proposal.walletId}/details/proposals?proposalId=${proposal.id}`
            }
          }));
        }
      }
    } catch (error) {
      console.error('Error checking unsigned proposals:', error);
    }

    return [];
  }

  private getProposalDescription(proposal: any): string {
    const walletName = proposal.walletName || 'Unknown Wallet';
    let description = '';
    
    if (proposal.type === 'transaction') {
      const transactionData = proposal.transactionData;
      if (transactionData) {
        description = `Transaction: Send ${transactionData.value} ${transactionData.tokenType} to ${transactionData.to?.slice(0, 6)}...${transactionData.to?.slice(-4)}`;
      } else {
        description = 'Transaction proposal';
      }
    } else if (proposal.type === 'walletSettings') {
      description = 'Wallet settings update';
    }
    
    return `${walletName} > ${description}`;
  }
}

export const notificationService = NotificationService.getInstance();