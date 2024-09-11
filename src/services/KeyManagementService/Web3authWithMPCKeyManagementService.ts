import { KeyManagementServiceType } from '@/types/keymanagement';
import { KeyManagementService, KeyManagementServiceConfig } from './KeyManagement';
import { Network, Passport } from "@0xpass/passport";
import { auth, chainConfigByToken, log } from '@/lib/utils';
import theWalletPassportService from '../PassportService';
import axios from 'axios';
import { COREKIT_STATUS, JWTLoginParams, makeEthereumSigner, parseToken, WEB3AUTH_NETWORK, Web3AuthMPCCoreKit } from '@web3auth/mpc-core-kit';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import tssLib from '@toruslabs/tss-dkls-lib';
import { EthereumSigningProvider } from '@web3auth/ethereum-mpc-provider';
import { createWalletClient, custom, WalletClient } from 'viem'
import { TokenType } from '@/types/tokens';
import { polygonAmoy, sepolia } from 'viem/chains';
import Web3 from 'web3';
import api from '@/lib/api';

const chainConfig = chainConfigByToken('ETH')!

export class Web3authWithMPCKeyManagement extends KeyManagementService {
  coreKitInstance: Web3AuthMPCCoreKit | undefined;
  walletClient: WalletClient | undefined;

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
      const address = walletClient.account

      // save auth storage
      auth.saveAuthDataByKey('idToken', idToken)
      auth.saveAuthDataByKey('address', address)

      return true;
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

      // Setup provider for EVM Chain
      const evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
      evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));

      // generate address
      const walletClient = createWalletClient({
        transport: custom(evmProvider),
      })
      this.walletClient = walletClient
      const addresses = await walletClient.getAddresses()
      const address = addresses[0]

      // save auth storage
      auth.saveAuthDataByKey('idToken', idToken)
      auth.saveAuthDataByKey('address', address)
      auth.saveAuthDataByKey('username', authUsername)

      // bind address
      await this.bindAddress(address)

      return true;
    } catch (err) {
      throw err;
    }
  }

  getWalletClientByToken(token: TokenType) {

  }

  signTransaction() {
    throw new Error('signTransaction method not implemented');
  }

  async bindAddress(address: string) {
    await api.post(`/address/bind`, {
      address,
    })
  }

  async test() {
    const coreKitInstance = this.coreKitInstance!
    const chainConfig = chainConfigByToken('MATIC')!
    const evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
    evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));

    await coreKitInstance.init()

    log('haha', coreKitInstance.status)

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
