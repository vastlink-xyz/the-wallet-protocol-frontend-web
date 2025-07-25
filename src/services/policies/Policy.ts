// Base interface for all operation contexts
export interface BaseOperationContext {
  // This was previously empty, causing a linting error
  [key: string]: unknown;
}

export type PolicyContextType = 'personalWalletTransaction' | 'personalWalletMFAUpdate' | 'personalWalletSettingsUpdate' | 'multisigWalletTransaction' | 'multisigWalletSettings' | 'forceMFA';

// Abstract Policy class using a generic context type TContext
export abstract class Policy<TContext extends BaseOperationContext> {
  abstract shouldTriggerMFA(context: TContext): Promise<boolean>;
  abstract getDescription(): string;
} 