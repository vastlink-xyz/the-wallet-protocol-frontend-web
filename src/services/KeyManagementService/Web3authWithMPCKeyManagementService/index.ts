import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService } from '../KeyManagement';
import { auth, chainConfigByToken, log, viemChainByToken } from '@/lib/utils';
import { COREKIT_STATUS, JWTLoginParams, makeEthereumSigner, parseToken, WEB3AUTH_NETWORK, Web3AuthMPCCoreKit } from '@web3auth/mpc-core-kit';
import tssLib from '@toruslabs/tss-dkls-lib';
import { EthereumSigningProvider } from '@web3auth/ethereum-mpc-provider';
import { Address, createPublicClient, createWalletClient, custom, Hex } from 'viem'
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
    if (typeof window !== "undefined") {
      const coreKitInstance = new Web3AuthMPCCoreKit({
        web3AuthClientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!,
        web3AuthNetwork: WEB3AUTH_NETWORK.DEVNET,
        storage: window.localStorage,
        sessionTime: 86400, // default is 24 hours
        manualSync: true, // This is the recommended approach
        tssLib: {
          lib: tssLib.loadSync(),
          keyType: tssLib.keyType,
        },
        enableLogging: true,
      });
  
      this.coreKitInstance = coreKitInstance
      coreKitInstance.init()
    }
  }

  async init() {
    if (this.coreKitInstance?.status === COREKIT_STATUS.NOT_INITIALIZED) {
      await this.coreKitInstance.init()
    }
  }

  async signUp({username, idToken}: {username: string, idToken: string}) {
    const coreKitInstance = this.coreKitInstance;
    try {
      if (!coreKitInstance) {
        throw new Error("initiated to login");
      }
      const parsedToken = parseToken(idToken);

      const idTokenLoginParams = {
        verifier: process.env.NEXT_PUBLIC_WEB3AUTH_VERIFIER!,
        verifierId: parsedToken.email,
        idToken,
      } as JWTLoginParams;
      log('idtokenloginparams', idTokenLoginParams)

      await coreKitInstance.loginWithJWT(idTokenLoginParams);
      if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
        await coreKitInstance.commitChanges(); // Needed for new accounts
      }

      // Setup provider for EVM Chain
      const evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
      evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));

      // generate address
      const walletClient = createWalletClient({
        transport: custom(evmProvider),
      })
      const addresses = await walletClient.getAddresses()
      const address = addresses[0]

      // save auth storage
      auth.saveAuthDataByKey('idToken', idToken)
      auth.saveAuthDataByKey('address', address)
      auth.saveAuthDataByKey('username', username)

      // bind address
      await api.post(`/address/bind`, {
        address,
      })
    } catch (err) {
      throw err;
    }
  }
  
  async signIn({authUsername, idToken}: {authUsername: string, idToken: string}) {
    const coreKitInstance = this.coreKitInstance;
    try {
      if (!coreKitInstance) {
        throw new Error("initiated to login");
      }
      const parsedToken = parseToken(idToken);

      const idTokenLoginParams = {
        verifier: process.env.NEXT_PUBLIC_WEB3AUTH_VERIFIER!,
        verifierId: parsedToken.email,
        idToken,
      } as JWTLoginParams;
      log('idtokenloginparams', idTokenLoginParams)

      await coreKitInstance.loginWithJWT(idTokenLoginParams);
      if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
        // await coreKitInstance.commitChanges(); // Needed for new accounts
      }

      const { walletClient } = this.createClientByToken('ETH')
      const addresses = await walletClient.getAddresses()
      const address = addresses[0]

      // save auth storage
      auth.saveAuthDataByKey('idToken', idToken)
      auth.saveAuthDataByKey('address', address)
      auth.saveAuthDataByKey('username', authUsername)

      // bind address
      await api.post(`/address/bind`, {
        address,
      })
    } catch (err) {
      throw err;
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
      message,
      transactionPayload,
      userEmail,
      toEmail,
      transactionId,
    } } = await api.post('/transaction/sign', {
      from: auth.all().address,
      to: toAddress,
      amount,
      token,
      note,
      transactionType,
    })
    log('transaction payload', transactionPayload)

    // check daily limit failed
    if (!success && needOtp) {
      return {
        success: false,
        needOtp: true,
        message,
        transactionId,
      }
    }

    // execute transaction by wallet client
    const hash = await this.exectuteTransactionWithGas({
      token,
      ...transactionPayload,
    })

    // notify server to send transaction message
    await api.post('/transaction/notify', { 
      transaction: transactionPayload,
      userEmail,
      toEmail,
      token,
      note,
      transactionType,
      hash,
    })

    return {
      success: true,
      hash,
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
      transactionPayload,
      userEmail,
      toEmail,
      token,
      note,
      transactionType,
    } } = await api.post('/transaction/verify-to-sign', {
      transactionId,
      OTP: otp,
    })

    // execute transaction by wallet client
    const hash = await this.exectuteTransactionWithGas({
      token,
      ...transactionPayload,
    })

    // notify server to send transaction message
    await api.post('/transaction/notify', { 
      transaction: transactionPayload,
      userEmail,
      toEmail,
      token,
      note,
      transactionType,
      hash,
      transactionId,
    })

    return {
      success: true,
      hash,
      token,
    }
  }

  private async exectuteTransactionWithGas({
    token,
    from,
    to,
    value,
    data,
  }: {
    token: TokenType,
    from: Address,
    to: Address,
    value: string,
    data: Hex,
  }) {
    const { walletClient, publicClient } = this.createClientByToken(token)
    
    const transactionRequest = {
      account: from as Address,
      to: to as Address,
      value: BigInt(value),
      data,
    } as const;

    // Estimate gas (keep consistent with frontend)
    const estimatedGas = await publicClient.estimateGas(transactionRequest)
    const gasPrice = await publicClient.getGasPrice()
    const baseFee = await publicClient.getBlock().then(block => block.baseFeePerGas || BigInt(0))
    
    // Calculate maxPriorityFeePerGas (tip)
    const maxPriorityFeePerGas = gasPrice > baseFee ? gasPrice - baseFee : BigInt(1000000000) // 1 gwei minimum

    // Ensure maxFeePerGas is always greater than maxPriorityFeePerGas
    const maxFeePerGas = baseFee + maxPriorityFeePerGas * BigInt(2)

    const transactionRequestWithGas = {
      ...transactionRequest,
      gas: estimatedGas,
      maxFeePerGas: maxFeePerGas,
      maxPriorityFeePerGas: maxPriorityFeePerGas,
    }

    const hash = await walletClient.sendTransaction(transactionRequestWithGas)
    return hash
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
    const coreKitInstance = this.coreKitInstance!
    const chainConfig = chainConfigByToken('MATIC')!
    const evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
    evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));

    await coreKitInstance.init()

    // const web3 = new Web3(evmProvider);
    // // Get user's Ethereum public address
    // const accounts = await web3.eth.getAccounts();
    // const address = accounts[0]

    // const balance = web3.utils.fromWei(
    //   await web3.eth.getBalance(address), // Balance is in wei
    //   "ether"
    // );

    // log('balance', balance)
  }
}
