// Base interface for all operation contexts
export interface BaseOperationContext {
  authMethodId: string;
}

export type PolicyContextType = 'transaction';

// Context specific to transaction operations
export interface TransactionOperationContext extends BaseOperationContext {
  transactionAmount: string;  // Amount in ETH
}

// Abstract Policy class using a generic context type TContext
export abstract class Policy<TContext extends BaseOperationContext> {
  abstract shouldTriggerMFA(context: TContext): Promise<boolean>;
  abstract getDescription(): string;
} 