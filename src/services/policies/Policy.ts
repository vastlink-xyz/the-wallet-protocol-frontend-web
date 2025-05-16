// Base interface for all operation contexts
export interface BaseOperationContext {
  authMethodId: string;
}

// Context specific to transaction operations
export interface TransactionOperationContext extends BaseOperationContext {
  operationType: 'transaction'; // Discriminator for the operation type
  transactionAmount: number;
}

// Abstract Policy class using a generic context type TContext
export abstract class Policy<TContext extends BaseOperationContext> {
  abstract shouldTriggerMFA(context: TContext): Promise<boolean>;
  abstract getDescription(): string;
} 