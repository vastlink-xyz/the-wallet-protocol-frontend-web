// Base interface for all operation contexts
export interface BaseOperationContext {
  // authMethodId: string;
}

export type PolicyContextType = 'transaction' | 'personalWalletMFAUpdate' | 'personalWalletSettingsUpdate';

// Abstract Policy class using a generic context type TContext
export abstract class Policy<TContext extends BaseOperationContext> {
  abstract shouldTriggerMFA(context: TContext): Promise<boolean>;
  abstract getDescription(): string;
} 