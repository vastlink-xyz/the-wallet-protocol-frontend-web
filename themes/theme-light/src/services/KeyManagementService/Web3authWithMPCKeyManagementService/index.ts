import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService } from '../KeyManagement';
import { auth, chainConfigByToken, log, viemChainByToken } from '@/lib/utils';
import { makeEthereumSigner, Web3AuthMPCCoreKit } from '@web3auth/mpc-core-kit';
import { EthereumSigningProvider } from '@web3auth/ethereum-mpc-provider';
import { Address, createPublicClient, createWalletClient, custom } from 'viem'
import { TokenType } from '@/types/tokens';
import api from '@/lib/api';
import { TransactionType } from '@/types/transaction';

const chainConfig = chainConfigByToken('ETH')!

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
    idToken,
  }: {
    username: string;
    idToken: string;
  }) {
    const { data } = await api.post('/keymanagement/signup', {
      username,
      idToken,
    })
    const { address, displayName } = data

    // save auth storage
    auth.saveAuthDataByKey('idToken', idToken)
    auth.saveAuthDataByKey('address', address)
    auth.saveAuthDataByKey('username', username)
    if (displayName) {
      auth.saveAuthDataByKey('displayName', displayName)
    } else {
      auth.removeAuthDataByKey('displayName')
    }
  }
  
  async signIn({authUsername, idToken}: {authUsername: string, idToken: string}) {
    const {data} = await api.post('/keymanagement/signin', {
      username: authUsername,
      idToken,
    })
    const { address, displayName } = data

    // save auth storage
    auth.saveAuthDataByKey('idToken', idToken)
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

  private createClientByToken(token: TokenType) {
    const coreKitInstance = this.coreKitInstance!
    const chainConfig = chainConfigByToken(token)!

    // Setup provider for EVM Chain
    const evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
    evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));

    const walletClient = createWalletClient({
      chain: viemChainByToken(token),
      transport: custom(evmProvider),
    })
    const publicClient = createPublicClient({
      chain: viemChainByToken(token),
      transport: custom(evmProvider),
    })

    return {
      walletClient,
      publicClient,
    }
  }

  async waitForTransactionReceipt(hash: `0x${string}`, token: TokenType) {
    const { publicClient } = this.createClientByToken(token)
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
