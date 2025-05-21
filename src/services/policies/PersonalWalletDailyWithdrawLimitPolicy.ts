import { BaseOperationContext, Policy } from './Policy';
import { log } from '@/lib/utils';
import { formatEther } from 'ethers/lib/utils';
import Moralis from 'moralis';
import { EvmChain } from "moralis/common-evm-utils";
import { initializeMoralis } from '@/lib/moralis';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';

// Context specific to transaction operations
export interface TransactionOperationContext extends BaseOperationContext {
  authMethodId: string;
  transactionAmount: string;  // Amount in ETH
  tokenType: TokenType;
}

async function getUserWithdrawalAmountToday(userData: any, tokenType: TokenType): Promise<number> {
  const address = userData.litActionPkp.ethAddress;

  try {
    // Initialize Moralis before using it
    await initializeMoralis();

    const currentTimestamp = Date.now();
    const yesterdayTimestamp = Date.now() - 24 * 60 * 60 * 1000;

    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
      "chain": EvmChain.SEPOLIA,
      "fromDate": new Date(yesterdayTimestamp),
      "toDate": new Date(currentTimestamp),
      "order": "DESC",
      "address": address,
    });

    // Filter outgoing transactions from the user's address
    const amounts = response.result
      .filter((tx: any) => tx.from.equals(address))
      .map((tx: any) => BigInt(tx.value));
    
    // Calculate the total amount
    const totalAmount = amounts.reduce((total: bigint, current: bigint) => total + current, BigInt(0));
    
    // Convert from Wei to ETH and return as number
    return parseFloat(formatEther(totalAmount));
  } catch(err) {
    console.error('Error getting user withdrawal amount today', err);
    return 0;
  }
}


async function getUserDailyWithdrawalLimit(userData: any, tokenType: TokenType): Promise<string> {
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]

  // Access the daily withdraw limits directly from userData
  if (userData.walletSettings?.dailyWithdrawLimits?.[tokenInfo.symbol]) {
    return userData.walletSettings.dailyWithdrawLimits[tokenInfo.symbol];
  }
  
  // Return default if currency not found in settings
  return "0.001";
}

// PersonalWalletDailyWithdrawLimitPolicy specifically uses TransactionOperationContext
class PersonalWalletDailyWithdrawLimitPolicy extends Policy<TransactionOperationContext> {
  // Constructor is simplified as userId and currency are now part of the context.
  constructor() {
    super();
  }

  async shouldTriggerMFA(context: TransactionOperationContext): Promise<boolean> {
    const tokenInfo = SUPPORTED_TOKENS_INFO[context.tokenType]

    try {
      // Fetch user data once
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user?authMethodId=${context.authMethodId}`);
      if (!response.ok) {
        console.error('Failed to fetch user data');
        return false;
      }
      
      const userData = await response.json();
      log('userData', userData);
      
      // Pass userData to both helper functions
      const dailyLimitStr = await getUserDailyWithdrawalLimit(userData, context.tokenType);
      const withdrawnToday = await getUserWithdrawalAmountToday(userData, context.tokenType);
      const currentTransactionAmount = context.transactionAmount;
      
      // Convert string to number for comparison
      const dailyLimit = parseFloat(dailyLimitStr);
      const numericAmount = parseFloat(currentTransactionAmount);
      
      log('dailyLimit', dailyLimit);
      log('withdrawnToday', withdrawnToday);
      log('currentTransactionAmount', currentTransactionAmount);
      
      if ((withdrawnToday + numericAmount) > dailyLimit) {
        console.log(`MFA triggered: Amount ${numericAmount} ${tokenInfo.symbol} + Withdrawn ${withdrawnToday} ${tokenInfo.symbol} > Limit ${dailyLimit} ${tokenInfo.symbol}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking withdrawal limits:', error);
      return false;
    }
  }

  getDescription(): string {
    return `Triggers MFA if the daily withdrawal limit for a transaction is exceeded.`;
  }
} 

const personalWalletDailyWithdrawLimitPolicy = new PersonalWalletDailyWithdrawLimitPolicy();
Object.freeze(personalWalletDailyWithdrawLimitPolicy);
export { personalWalletDailyWithdrawLimitPolicy };
