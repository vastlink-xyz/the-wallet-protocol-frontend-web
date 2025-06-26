import { BaseOperationContext, Policy } from './Policy';
import { log } from '@/lib/utils';
import { formatEther, formatUnits } from 'ethers/lib/utils';
import Moralis from 'moralis';
import { EvmChain } from "moralis/common-evm-utils";
import { initializeMoralis } from '@/lib/moralis';
import { MultisigWallet } from '@/app/api/multisig/storage';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { fetchBtcTodayOutflow } from '@/lib/web3/btc';
import { LIT_CHAINS } from '@lit-protocol/constants';

// Context specific to transaction operations
export interface MultisigWalletTransactionOperationContext extends BaseOperationContext {
  walletId: string;
  transactionAmount: string;  // Amount in ETH
  tokenType: TokenType;      // Type of token being transferred
}

async function getUserWithdrawalAmountToday(walletData: MultisigWallet, tokenType: TokenType): Promise<number> {
  if (tokenType === 'BTC') {
    const address = walletData.addresses.btc;
    const outflow = await fetchBtcTodayOutflow(address);
    return outflow;
  }

  try {
    const address = walletData.pkp.ethAddress;
    // Initialize Moralis before using it
    await initializeMoralis();

    const currentTimestamp = Date.now();
    // Get today's start time in UTC (00:00:00 UTC)
    const todayStartTimestamp = new Date().setUTCHours(0, 0, 0, 0);

    const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType]
    const chainName = tokenInfo.chainName;
    const chainId = LIT_CHAINS[chainName as keyof typeof LIT_CHAINS]?.chainId;

    if (tokenInfo.chainType === 'EVM' && tokenInfo.contractAddress) {
      const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
        chain: chainId,
        fromDate: new Date(todayStartTimestamp),
        toDate: new Date(currentTimestamp),
        contractAddresses: [tokenInfo.contractAddress],
        address,
      })
      const erc20Transfers = response.result.filter((transfer: any) => {
        return transfer.address.equals(tokenInfo.contractAddress) && transfer.fromAddress.equals(address)
      });

      const amounts = erc20Transfers.map((transfer: any) => BigInt(transfer.value));
      const totalAmount = amounts.reduce((total: bigint, current: bigint) => total + current, BigInt(0));
      return parseFloat(formatUnits(totalAmount, tokenInfo.decimals));
    } else {
      const response = await Moralis.EvmApi.transaction.getWalletTransactions({
        // "chain": EvmChain.SEPOLIA,
        "chain": chainId,
        "fromDate": new Date(todayStartTimestamp),
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
      
      const nativeDecimals = tokenInfo.decimals || 18;
      return parseFloat(formatUnits(totalAmount, nativeDecimals));
    }
  } catch(err) {
    console.error('Error getting user withdrawal amount today', err);
    return 0;
  }
}


async function getUserDailyWithdrawalLimit(walletData: MultisigWallet, tokenType: TokenType = 'ETH'): Promise<string> {
  // New structure: Access token specific daily limits
  if (walletData.metadata.mfaSettings?.dailyLimits?.[tokenType]) {
    return walletData.metadata.mfaSettings.dailyLimits[tokenType];
  }
  
  // Return default if currency not found in settings
  return SUPPORTED_TOKENS_INFO[tokenType].defaultWithdrawLimit;
}

// MultisigWalletDailyWithdrawLimitPolicy handles transaction limits
class MultisigWalletDailyWithdrawLimitPolicy extends Policy<MultisigWalletTransactionOperationContext> {
  constructor() {
    super();
  }

  async shouldTriggerMFA(context: MultisigWalletTransactionOperationContext): Promise<boolean> {
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_APP_URL;
      const apiUrl = `${apiBaseUrl}/api/multisig?id=${context.walletId}`;
      const response = await fetch(apiUrl).then((response) => response.json());
      const walletData = response.data

      // Get token type from context or default to ETH
      const tokenType = context.tokenType;

      // Get daily limit and currently withdrawn amount
      const dailyLimitStr = await getUserDailyWithdrawalLimit(walletData, tokenType);
      const withdrawnToday = await getUserWithdrawalAmountToday(walletData, tokenType);
      const currentTransactionAmount = context.transactionAmount;
      
      // Convert string to number for comparison
      const dailyLimit = parseFloat(dailyLimitStr);
      const numericAmount = parseFloat(currentTransactionAmount);
      
      log('tokenType', tokenType);
      log('dailyLimit', dailyLimit);
      log('withdrawnToday', withdrawnToday);
      log('currentTransactionAmount', currentTransactionAmount);
      
      if ((withdrawnToday + numericAmount) > dailyLimit) {
        console.log(`MFA triggered: Amount ${numericAmount} ${tokenType} + Withdrawn ${withdrawnToday} > Limit ${dailyLimit}`);
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
