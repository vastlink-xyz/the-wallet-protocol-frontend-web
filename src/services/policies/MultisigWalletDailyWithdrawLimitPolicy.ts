import { BaseOperationContext, Policy } from './Policy';
import { log } from '@/lib/utils';
import { formatEther } from 'ethers/lib/utils';
import Moralis from 'moralis';
import { EvmChain } from "moralis/common-evm-utils";
import { initializeMoralis } from '@/lib/moralis';
import { MultisigWallet } from '@/app/api/multisig/storage';

// Context specific to transaction operations
export interface MultisigWalletTransactionOperationContext extends BaseOperationContext {
  walletId: string;
  transactionAmount: string;  // Amount in ETH
}

async function getUserWithdrawalAmountToday(walletData: MultisigWallet): Promise<number> {
  try {
    const address = walletData.pkp.ethAddress;
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


async function getUserDailyWithdrawalLimit(walletData: MultisigWallet): Promise<string> {
  // Access the daily withdraw limits directly from userData
  if (walletData.metadata.mfaSettings?.dailyLimit) {
    return walletData.metadata.mfaSettings.dailyLimit;
  }
  
  // Return default if currency not found in settings
  return "0.001";
}

// PersonalWalletDailyWithdrawLimitPolicy specifically uses TransactionOperationContext
class MultisigWalletDailyWithdrawLimitPolicy extends Policy<MultisigWalletTransactionOperationContext> {
  // Constructor is simplified as userId and currency are now part of the context.
  constructor() {
    super();
  }

  async shouldTriggerMFA(context: MultisigWalletTransactionOperationContext): Promise<boolean> {
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_APP_URL;
      const apiUrl = `${apiBaseUrl}/api/multisig?id=${context.walletId}`;
      const response = await fetch(apiUrl).then((response) => response.json());
      const walletData = response.data

      // Pass userData to both helper functions
      const dailyLimitStr = await getUserDailyWithdrawalLimit(walletData);
      const withdrawnToday = await getUserWithdrawalAmountToday(walletData);
      const currentTransactionAmount = context.transactionAmount;
      
      // Convert string to number for comparison
      const dailyLimit = parseFloat(dailyLimitStr);
      const numericAmount = parseFloat(currentTransactionAmount);
      
      log('dailyLimit', dailyLimit);
      log('withdrawnToday', withdrawnToday);
      log('currentTransactionAmount', currentTransactionAmount);
      
      if ((withdrawnToday + numericAmount) > dailyLimit) {
        console.log(`MFA triggered: Amount ${numericAmount} ETH + Withdrawn ${withdrawnToday} > Limit ${dailyLimit}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking withdrawal limits:', error);
      return false;
    }
  }

  getDescription(): string {
    return `Triggers MFA if the daily withdrawal limit for a multisig wallet transaction is exceeded.`;
  }
} 

const multisigWalletDailyWithdrawLimitPolicy = new MultisigWalletDailyWithdrawLimitPolicy();
Object.freeze(multisigWalletDailyWithdrawLimitPolicy);
export { multisigWalletDailyWithdrawLimitPolicy };
