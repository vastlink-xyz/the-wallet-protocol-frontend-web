import { getMultiProviderSessionSigs } from '@/lib/lit/pkpManager';
import {
  LitBtcClientKeystore as BtcClient,
  LitEvmClientKeystore as EthClient,
} from '@/lib/xchain-lit-signer/xchain-lit-signer';
import { IRelayPKP } from '@lit-protocol/types';
import { AuthProviderType, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import {
  AssetBTC,
  BTCChain,
  defaultBTCParams as defaultBtcParams,
} from '@xchainjs/xchain-bitcoin';
import { Network } from '@xchainjs/xchain-client';
import { defaultEthParams } from '@xchainjs/xchain-ethereum';
import {
  Midgard,
  MidgardCache,
  MidgardQuery,
} from '@xchainjs/xchain-midgard-query';
import { ThorchainAMM } from '@xchainjs/xchain-thorchain-amm';
import {
  ThorchainCache,
  ThorchainQuery,
  Thornode,
} from '@xchainjs/xchain-thorchain-query';
import {
  assetAmount,
  assetFromString,
  assetToBase,
  CryptoAmount,
} from '@xchainjs/xchain-util';
import {
  HaskoinNetwork,
  HaskoinProvider,
} from '@xchainjs/xchain-utxo-providers';
import { Wallet } from '@xchainjs/xchain-wallet';
import { ethers } from 'ethers';

export type SupportedToken = {
  symbol: string;
  name: string;
  icon: string;
  network: string;
  xchainAsset: string;
  decimals: number;
  chainType: string;
};

export async function createWallet(
  litActionPkp: IRelayPKP,
  accessToken: string,
  authMethodId: string,
  providerType: AuthProviderType,
  userEmail: string,
  ethAddress: string,
  btcAddress: string,
  mfaMethodId?: string,
  otpCode?: string
) {
  const sessionSigs = await getMultiProviderSessionSigs({
    pkpPublicKey: litActionPkp.publicKey,
    pkpTokenId: litActionPkp.tokenId,
    accessToken,
    providerType,
    userEmail,
  });

  const ethTestNetwork = ethers.providers.getNetwork('sepolia');
  const ETH_TESTNET_ETHERS_PROVIDER = new ethers.providers.JsonRpcProvider(
    'https://ethereum-sepolia-rpc.publicnode.com',
    ethTestNetwork
  ) as any;
  const testnetHaskoinProvider = new HaskoinProvider(
    'https://api.haskoin.com',
    BTCChain,
    AssetBTC,
    8,
    HaskoinNetwork.BTCTEST
  );

  const wallet = new Wallet({
    ETH: new EthClient({
      ...defaultEthParams,
      providers: {
        // TODO: 目前 vastlink 不支持主网，全切到测试网测试
        [Network.Mainnet]: ETH_TESTNET_ETHERS_PROVIDER,
        [Network.Testnet]: ETH_TESTNET_ETHERS_PROVIDER,
        [Network.Stagenet]: ETH_TESTNET_ETHERS_PROVIDER,
      },
      sessionSigs: sessionSigs,
      publicKey: litActionPkp.publicKey,
      authParams: {
        accessToken: accessToken,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(),
      },
      otp: otpCode || '',
      mfaMethodId: mfaMethodId || '',
      ethAddress,
    }),
    BTC: new BtcClient({
      ...defaultBtcParams,
      dataProviders: [
        {
          // TODO: 为了方便本地测试，全换成测试环境的provider
          // 上线前一定要改掉
          [Network.Testnet]: testnetHaskoinProvider,
          [Network.Stagenet]: testnetHaskoinProvider,
          [Network.Mainnet]: testnetHaskoinProvider,
        },
      ],
      sessionSigs: sessionSigs,
      publicKey: litActionPkp.publicKey,
      authParams: {
        accessToken: accessToken,
        authMethodId: authMethodId,
        authMethodType: getVastbaseAuthMethodType(),
      },
      otp: otpCode || '',
      mfaMethodId: mfaMethodId || '',
      btcAddress: btcAddress || '',
    }),
  });

  return wallet;
}

export async function executeSwap(
  wallet: Wallet,
  fromAmount: number,
  fromToken: SupportedToken,
  toToken: SupportedToken,
  destAddress: string,
) {
  console.log('Starting swap process:', fromAmount, fromToken.symbol, 'to', toToken.symbol, 'destination:', destAddress)

  const network = Network.Mainnet;
  const midgardCache = new MidgardCache(new Midgard(network));
  const thorchainCache = new ThorchainCache(
    new Thornode(network),
    new MidgardQuery(midgardCache)
  );
  const thorchainQuery = new ThorchainQuery(thorchainCache);

  const thorchainAmm = new ThorchainAMM(thorchainQuery, wallet);
  const fromAsset = assetFromString(fromToken.xchainAsset)!;
  const toAsset = assetFromString(toToken.xchainAsset)!;

  const res = await thorchainAmm.doSwap({
    fromAsset,
    amount: new CryptoAmount(
      assetToBase(assetAmount(fromAmount, fromToken.decimals)),
      fromAsset
    ),
    destinationAsset: toAsset,
    destinationAddress: destAddress,
    streamingInterval: 1,
    streamingQuantity: 0,
    toleranceBps: 300, //optional
  });

  console.log('Swap transaction result:', res);
  // toast.success(`swap success: ${res.hash}`);
  return res;
}
