import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService } from '../KeyManagement';
import { auth, log } from '@/lib/utils';
import { Web3AuthMPCCoreKit } from '@web3auth/mpc-core-kit';
import { Address } from 'viem'
import { TokenType } from '@/types/tokens';
import api from '@/lib/api';
import { TransactionType } from '@/types/transaction';
import { theTokenListingService } from '@/services/TokenListingService';

export class Web3authWithMPCKeyManagement extends KeyManagementService {
  coreKitInstance: Web3AuthMPCCoreKit | undefined;

  constructor() {
    super({
      serviceType: KeyManagementServiceType.WEB3AUTH_WITH_MPC,
    });
  }

  async init() {}

  async signUp({
    username,
  }: {
    username: string;
  }) {
    const { data } = await api.post('/keymanagement/signup', {
      username,
    })
    const { address, displayName } = data

    // save auth storage
    auth.saveAuthDataByKey('address', address)
    auth.saveAuthDataByKey('username', username)

    if (displayName) {
      auth.saveAuthDataByKey('displayName', displayName)
    } else {
      auth.removeAuthDataByKey('displayName')
    }
  }
  
  async signIn({authUsername}: {authUsername: string}) {
    const {data} = await api.post('/keymanagement/signin', {
      username: authUsername,
    })
    const { address, displayName } = data

    // save auth storage
    auth.saveAuthDataByKey('address', address)
    auth.saveAuthDataByKey('username', authUsername)
    if (displayName) {
      auth.saveAuthDataByKey('displayName', displayName)
    } else {
      auth.removeAuthDataByKey('displayName')
    }
  }

  async signTransaction({
    toAddress,
    amount,
    token,
    note,
    transactionType,
  }: {
    toAddress: string;
    amount: string;
    token: TokenType;
    note?: string;
    transactionType: TransactionType;
  }) {
    const { data: {
      success,
      needOtp,
      hash,
      message,
      transactionId,
      relayerTransactionId,
      // not used
      transactionPayload,
      userEmail,
      toEmail,
    } } = await api.post('/transaction/sign', {
      from: auth.all().address,
      to: toAddress,
      amount,
      token,
      note,
      transactionType,
    })

    return {
      success,
      needOtp,
      hash,
      message,
      transactionId,
      relayerTransactionId,
    }
  }

  async signTransactionWithOTP({
    transactionId,
    otp,
  }: {
    transactionId: string;
    otp: string;
  }) {
    const { data: {
      token,
      hash,
      // not used
      transactionPayload,
      userEmail,
      toEmail,
      note,
      transactionType,
    } } = await api.post('/transaction/verify-to-sign', {
      transactionId,
      OTP: otp,
    })

    return {
      success: true,
      hash,
      token,
    }
  }

  async waitForTransactionReceipt(hash: `0x${string}`, token: TokenType) {
    const publicClient = theTokenListingService.getToken(token).publicClient
    const receipt = await publicClient.waitForTransactionReceipt({
      hash,
    })
    return receipt
  }

  async test() {
    const res = await api.post('/keymanagement/test-mpc')
    return
  }

  async generateMPCKeys(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async initFireblocksNCWInstance(): Promise<void> {
    // Since this is Web3Auth implementation, we don't need Fireblocks
    return Promise.resolve();
  }
}
