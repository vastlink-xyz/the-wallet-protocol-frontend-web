import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService } from '../KeyManagement';
import { auth, log } from '@/lib/utils';
import { Web3AuthMPCCoreKit } from '@web3auth/mpc-core-kit';
import { Address } from 'viem'
import { TokenType } from '@/types/tokens';
import api from '@/lib/api';
import { TransactionType } from '@/types/transaction';
import { theTokenListingService } from '@/services/TokenListingService';
import { getOrCreateDeviceId } from './deviceId';
import { initFireblocksNCW } from './fireblocksInstance';
import { IFireblocksNCW, IKeyDescriptor, TMPCAlgorithm } from '@fireblocks/ncw-js-sdk';

export class FireblocksKeyManagement extends KeyManagementService {
  coreKitInstance: Web3AuthMPCCoreKit | undefined;
  fireblocksNCWInstance: IFireblocksNCW | undefined;

  constructor() {
    super({
      serviceType: KeyManagementServiceType.FIREBLOCKS,
    });
  }

  async init() {}

  async initFireblocksNCWInstance(deviceId: string) {
    const fireblocksNCW = await initFireblocksNCW(deviceId)
    this.fireblocksNCWInstance = fireblocksNCW
    this.config.fireblocksNCWInstance = fireblocksNCW
  }

  async generateMPCKeys() {
    const ALGORITHMS = new Set<TMPCAlgorithm>([
      "MPC_CMP_ECDSA_SECP256K1",
      // "MPC_CMP_EDDSA_ED25519",
    ]);
    const keyDescriptor = await this.fireblocksNCWInstance?.generateMPCKeys(ALGORITHMS)
    console.log('keyDescriptor', keyDescriptor)
    
    // check if SECP256K1 key is READY
    const keyDescriptorArray = Array.from(keyDescriptor || [])
    const hasReadySecp256k1Key = keyDescriptorArray.some(key => 
      key.keyStatus === "READY" && 
      key.algorithm === "MPC_CMP_ECDSA_SECP256K1"
    )
    if (hasReadySecp256k1Key) {
      console.log('Generated MPC keys successfully')
    }
  }

  async signUp({
    username,
    sub,
  }: {
    username: string;
    sub: string;
  }) {
    // assign deviceId to user's wallet
    const deviceId = getOrCreateDeviceId(sub)
    const { data } = await api.post('/keymanagement/signup', {
      username,
      deviceId,
    })
    const { address, displayName } = data

    // initialize fireblocks
    await this.initFireblocksNCWInstance(deviceId)

    // save auth storage
    auth.saveAuthDataByKey('address', address)
    auth.saveAuthDataByKey('username', username)

    if (displayName) {
      auth.saveAuthDataByKey('displayName', displayName)
    } else {
      auth.removeAuthDataByKey('displayName')
    }
  }
  
  async signIn({authUsername, sub}: {authUsername: string, sub: string}) {
    // assign deviceId to user's wallet
    const deviceId = getOrCreateDeviceId(sub)

    const {data} = await api.post('/keymanagement/signin', {
      username: authUsername,
      deviceId,
    })
    const { address, displayName } = data

    // initialize fireblocks
    await this.initFireblocksNCWInstance(deviceId)

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
    toAddress: Address;
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
}
