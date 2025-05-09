'use client'

import { Button } from "@/components/ui/button"
import { getPKPs, getSessionSigsByPkp, litNodeClient, mintPKP, SIGN_PROPOSAL_LIT_ACTION_IPFS_ID } from "@/lib/lit"
import { log } from "@/lib/utils";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { useEffect, useState } from "react";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { ethers, utils } from "ethers";
import { AUTH_METHOD_SCOPE, LIT_CHAINS } from "@lit-protocol/constants";
import { Example } from "./components/Example";
import { mainLitActionCode } from "./lit-actions/main";

// eth sepolia
const chainInfo = {
  rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0],
  chainId: LIT_CHAINS['sepolia'].chainId,
}

const ethersProvider = new ethers.providers.JsonRpcProvider(
  chainInfo.rpcUrl
);

const litActionIpfsId = 'QmYUmDxzM3d2jwKnoLrwdy2iwhnRMpudQXnpgQE4eTk16a'

const AUTH_METHOD_STORAGE_KEY = 'lit-auth-method';

const defaultPkp = {
  "tokenId": "0xc290c87ee94f5871054de74c73ca2f6d306684141162269f3271b6346b8c42ce",
  "publicKey": "0x0461eccec567d90b6061484f9cf520308a3fa872b74f241c3f99f556ba35a22018bbfb088be071771463da55c005d7ce7203e8bef3ad6455d850448a5def41b2cb",
  "ethAddress": "0xD98F5f7D086A720109cDb8922C0416FF96e73eA0"
}

const sessionPKP = {
  "ethAddress" : "0xd027F558d7ae10E673816adb5CdCc23be7814C0e",
  "publicKey" : "0x04042e218a8729f011641a78da1939ab72299ebb70a0ba750645468311694ad1f24787945ebb91fe24caa76717203546748e89d4c589fe76bfa9e1fbd55f118eb0",
  "tokenId" : "0xb7aaf498c4d450855f7a3cccc900b24b348f0e108d5d5a7ba9072e9403f6ff4e",
}

const pkp = {
  "ethAddress": "0x1b1E49900c11d29f13b8f02385cb8408D9b81535",
  "publicKey": "0x047d61e857d17bf4200304ffd6ff509c1c4cf4dfe42aea1a7601720778bd387b89ef4569ca3dd014fb1ca003f2f129c58a09b622630af2260cf0b76ada2f512748",
  "tokenId": "0x6f53bfb409fdad55d9ee324c06a0eb941cf0e6499ab420327202efd7005a7edd",
}


export default function DebugPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null);
  const [currentPkp, setCurrentPkp] = useState<IRelayPKP>(defaultPkp)

  // Initialize by reading authMethod from localStorage
  useEffect(() => {
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
    if (storedAuthMethod) {
      try {
        setAuthMethod(JSON.parse(storedAuthMethod));
      } catch (error) {
        console.error('Failed to parse stored auth method:', error);
        localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
      }
    }
  }, []);

  const handleExecuteLitAction = async () => {
    if (!authMethod || !currentPkp) {
      return
    }

    const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPKP)
    log('session sigs', sessionSigs)

    // Remove '0x' prefix, Lit.Actions.signAndCombineEcdsa requires public key without the '0x' prefix
    const publicKeyForLit = currentPkp.publicKey.replace(/^0x/, '');

    const gasPrice = (await ethersProvider.getGasPrice()).toHexString()
    const nonce = await ethersProvider.getTransactionCount(currentPkp.ethAddress)
    log('gas price ', gasPrice, 'nounce', nonce)
    log('public key', currentPkp.publicKey)

    const unsignedTransaction = {
      to: '0x56ed57816E32138668ebFf838c9859a583a04c43',
      value: ethers.utils.parseEther('0.0000001').toHexString(),
      gasLimit: 21000,
      gasPrice,
      nonce,
      chainId: chainInfo.chainId,
      data: '0x'
    };

    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
    )
    // const messageHash = ethers.utils.hashMessage('Hello, world!');
    // const messageBytes = ethers.utils.arrayify(messageHash);

    const response = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId,
      // code: signTransactionLitActionCode,
      sessionSigs,
      jsParams: {
        publicKeyForLit,
        unsignedTransaction,
        chain: 'sepolia',
        sendTransaction: true,
      }
    });

    log('Lit Action Response', response)
  }

  const handleGetAllPKPs = async () => {
    if (!authMethod) {
      return
    }

    await getPKPs({authMethod})
  }

  const handleAddLitActionPermission = async () => {
    try {
      await litNodeClient.connect();

      if (!currentPkp || !authMethod) {
        return
      }

      const sessionSigs = await getSessionSigsByPkp(authMethod, currentPkp)
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentPkp.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      await litContracts.addPermittedAction({
        ipfsId: litActionIpfsId,
        pkpTokenId: currentPkp.tokenId,
        authMethodScopes: [AUTH_METHOD_SCOPE.SignAnything],
      })
      log('add lit action successfully')
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  const handleLogLitActionCode = async () => {
    // console.log(signTransactionLitActionCode)
    // console.log(customLitActionCode)
    console.log(mainLitActionCode)
  }

  const handleLogPermittedActions = async () => {
    try {
      // await litNodeClient.connect();

      if (!currentPkp || !authMethod) {
        return
      }

      log('current pkp', currentPkp)

      const sessionSigs = await getSessionSigsByPkp(authMethod, currentPkp)
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentPkp.publicKey,
        litNodeClient: litNodeClient,
      });
      
      await pkpWallet.init();
      log('pkpWallet init')

      const litContracts = new LitContracts({
        signer: pkpWallet,
      });
      await litContracts.connect();
      log('litcontract conneected')

      const permittedActions = await litContracts.pkpPermissionsContractUtils.read.getPermittedActions(currentPkp.tokenId)
      log('permitted actions', permittedActions)

      const permittedAuthMethods = await litContracts.pkpPermissionsContract.read.getPermittedAuthMethods(currentPkp.tokenId)
      log('permitted authmethods', permittedAuthMethods)

      const res = await litContracts.pkpPermissionsContractUtils.read.isPermittedAction(currentPkp.tokenId, SIGN_PROPOSAL_LIT_ACTION_IPFS_ID)
      log('res is permitted action', res)
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  const handleSignMessageWithPKP = async () => {
    try {
      // await litNodeClient.connect();

      if (!currentPkp || !authMethod) {
        return
      }

      log('current pkp', currentPkp)

      const sessionSigs = await getSessionSigsByPkp(authMethod, currentPkp)
      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentPkp.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();
      log('pkpWallet init')

      const message = 'hi'
      
      const signature = await pkpWallet.signMessage(message);

      // Get the address associated with the signature created by signing the message
      const recoveredAddr = ethers.utils.verifyMessage(message, signature);

      // Check if the address associated with the signature is the same as the current PKP
      const verified = currentPkp.ethAddress.toLowerCase() === recoveredAddr.toLowerCase();
      log('verified', verified)
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  return (
    <div className="space-y-8 p-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={handleGetAllPKPs}>All PKPs</Button>
        <Button onClick={handleExecuteLitAction}>Execute Lit Action</Button>
        <Button onClick={handleAddLitActionPermission}>Add Lit Action</Button>
        <Button onClick={handleLogLitActionCode}>Log Lit Action Code</Button>
      </div>

      <div className="border rounded-lg p-6 bg-white">
        {
          authMethod && <Example authMethod={authMethod} />
        }
      </div>
    </div>
  );
}
