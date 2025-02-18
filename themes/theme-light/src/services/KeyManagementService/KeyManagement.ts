import { KeyManagementServiceType } from '@/types/keymanagement';
import { Address, TransactionReceipt } from 'viem';
import { TokenType } from '@/types/tokens';
import { TransactionType } from '@/types/transaction';
import { IFireblocksNCW } from '@fireblocks/ncw-js-sdk';
export interface KeyManagementServiceConfig {
  serviceType: KeyManagementServiceType;
  fireblocksNCWInstance?: IFireblocksNCW;
}
abstract class KeyManagementService {
  config: KeyManagementServiceConfig;

  constructor(config: KeyManagementServiceConfig) {
    if (this.constructor === KeyManagementService) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.config = config
  }

  abstract init(): Promise<void>;

  abstract test(): Promise<void>;

  abstract signUp({username}: {username: string}): Promise<void>;

  abstract signIn({authUsername}: {authUsername: string}): Promise<void>;

  abstract signTransaction({
    toAddress,
    amount,
    token,
    note,
    transactionType,
  }: {
    toAddress: Address;
    amount: string;
    token: TokenType;
    note?: string;
    transactionType: TransactionType;
  }): Promise<any>;

  abstract signTransactionWithOTP({
    transactionId,
    otp,
  }: {
    transactionId: string;
    otp: string;
  }): Promise<any>;

  abstract waitForTransactionReceipt(hash: `0x${string}`, token: TokenType): Promise<TransactionReceipt>;

  abstract generateMPCKeys(): Promise<void>;

  abstract initFireblocksNCWInstance(deviceId: string): Promise<void>;
}

export {
  KeyManagementService,
}
