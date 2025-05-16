import { Policy, TransactionOperationContext } from './Policy';

async function getUserWithdrawalHistoryToday(authMethodId: string): Promise<number> {
  console.log(`Fetching withdrawal history for user ${authMethodId} for today.`);
  
  // kkktodo
  return Promise.resolve(0);
}

async function getUserDailyWithdrawalLimit({authMethodId}: {authMethodId: string}): Promise<string> {
  console.log(`Fetching daily withdrawal limit for user ${authMethodId}.`);
  try {
    // Get user data from the API
    const response = await fetch(`/api/user?authMethodId=${authMethodId}`);
    if (!response.ok) {
      console.error('Failed to fetch user data for withdrawal limits');
      return "0.001"; // Fallback to default limit
    }
    
    const userData = await response.json();
    
    // Access the daily withdraw limits from user settings
    if (userData.walletSettings?.dailyWithdrawLimits?.['ETH']) {
      return userData.walletSettings.dailyWithdrawLimits['ETH'];
    }
    
    // Return default if currency not found in settings
    return "0.001";
  } catch (error) {
    console.error('Error fetching user withdrawal limits:', error);
    return "0.001"; // Fallback to default limit
  }
}

// DailyWithdrawLimitPolicy specifically uses TransactionOperationContext
export class DailyWithdrawLimitPolicy extends Policy<TransactionOperationContext> {
  // Constructor is simplified as userId and currency are now part of the context.
  constructor() {
    super();
  }

  async shouldTriggerMFA(context: TransactionOperationContext): Promise<boolean> {
    // context is type-safe as TransactionOperationContext due to generic constraint.
    if (context.operationType !== 'transaction') {
        // This policy is only for transaction operations.
        // While the caller should pass the correct context type, this is a safeguard.
        console.warn('DailyWithdrawLimitPolicy received a non-transaction context.');
        return false;
    }

    const dailyLimitStr = await getUserDailyWithdrawalLimit({authMethodId: context.authMethodId});
    const withdrawnToday = await getUserWithdrawalHistoryToday(context.authMethodId);
    const currentTransactionAmount = context.transactionAmount;
    
    // Convert string to number for comparison
    const dailyLimit = parseFloat(dailyLimitStr);

    if ((withdrawnToday + currentTransactionAmount) > dailyLimit) {
      console.log(`MFA triggered for user ${context.authMethodId}: Amount ${currentTransactionAmount} ETH + Withdrawn ${withdrawnToday} > Limit ${dailyLimit}`);
      return true;
    }
    return false;
  }

  getDescription(): string {
    return `Triggers MFA if the daily withdrawal limit for a transaction is exceeded.`;
  }
} 