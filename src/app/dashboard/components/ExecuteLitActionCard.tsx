import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction";
import { log } from "@/lib/utils";
import { litNodeClient, SIGN_EIP_191_LIT_ACTION_IPFS_ID, SIGN_EIP_191_LIT_ACTION_IPFS_ID_2 } from "@/lib/lit";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { ethers } from "ethers";
import litActionCode1 from "@/lib/lit-action-code/sign-proposal.lit";
import litActionCode2 from "@/lib/lit-action-code/verify-multisig.lit";

import litAuthCode from "@/app/dashboard/lit-action-code/lit-auth";

// eth sepolia
const chainInfo = {
  rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0],
  chainId: LIT_CHAINS['sepolia'].chainId,
}

const ethersProvider = new ethers.providers.JsonRpcProvider(
  chainInfo.rpcUrl
);

interface ExecuteLitActionCardProps {
  currentPkp: IRelayPKP;
  sessionSigs: SessionSigs;
  authMethod: AuthMethod;
}

export function ExecuteLitActionCard({
  currentPkp,
  sessionSigs,
  authMethod,
}: ExecuteLitActionCardProps) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleExecuteBindedLitAction = async () => {
    try {
      setLoading(true);

      log('chaininfo', chainInfo)
      log('public key', currentPkp.publicKey)

      // console.log("🔄 Creating and serializing unsigned transaction...");
      // const unsignedTransaction = {
      //   to: '0x9D714b404eE6860786A25C776c12141Ff2cABeb2',
      //   value: 1,
      //   gasLimit: 21_000,
      //   gasPrice: (await ethersProvider.getGasPrice()).toHexString(),
      //   nonce: await ethersProvider.getTransactionCount(currentPkp.ethAddress!),
      //   chainId: chainInfo.chainId,
      // };

      // const unsignedTransactionHash = ethers.utils.keccak256(
      //   ethers.utils.serializeTransaction(unsignedTransaction)
      // );
      // console.log("✅ Transaction created and serialized");
      
      const response = await executeSecuredLitAction({
        pkpPublicKey: currentPkp.publicKey,
        litActionIpfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID,
        authMethod,
        sessionSigs,
        jsParams: {
          // // toSign: ethers.utils.arrayify(unsignedTransactionHash),
          // publicKey: currentPkp.publicKey,
          // // sigName: "signedTransaction",
          // // chain: 'sepolia',
          // // unsignedTransaction,
          dataToSign: ethers.utils.arrayify(
            ethers.utils.keccak256([1, 2, 3, 4, 5])
          ),
          publicKey: currentPkp.publicKey,
          sigName: "sig",
        }
      });
      log('Lit Action response:', response);
      setResult(response);
    } catch (err) {
      console.error('Failed to execute Lit Action:', err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleExecuteOtherLitAction = async () => {
    try {
      setLoading(true);
      const response = await executeSecuredLitAction({
        pkpPublicKey: currentPkp.publicKey,
        litActionIpfsId: SIGN_EIP_191_LIT_ACTION_IPFS_ID_2,
        authMethod,
        sessionSigs,
        jsParams: {
          // // toSign: ethers.utils.arrayify(unsignedTransactionHash),
          // publicKey: currentPkp.publicKey,
          // // sigName: "signedTransaction",
          // // chain: 'sepolia',
          // // unsignedTransaction,
          dataToSign: ethers.utils.arrayify(
            ethers.utils.keccak256([1, 2, 3, 4, 5])
          ),
          publicKey: currentPkp.publicKey,
          sigName: "sig",
        }
      });
      log('Lit Action response:', response);
      setResult(response);
    } catch (err) {
      console.error('Failed to execute Lit Action:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSignLitAction = async () => {
    await litNodeClient.connect();
    const response = await litNodeClient.executeJs({
      code: litActionCode1,
      sessionSigs,
      jsParams: {
        message: 'Hello, world!',
        publicKey: currentPkp.publicKey,
        sigName: 'sig',
      }
    });
    setResult(response);
    const signature = response.signatures.sig.signature;
    log('signature', signature);
    const messageHash = ethers.utils.hashMessage('Hello, world!');
    const recoveredAddress = ethers.utils.recoverAddress(messageHash, signature);
    log('recoveredAddress', recoveredAddress);
    log('currentPkp.ethAddress', currentPkp.ethAddress);
  }

  const handleVerifyLitAction = async () => {
    await litNodeClient.connect();
    const response = await litNodeClient.executeJs({
      code: litActionCode2,
      sessionSigs,
      jsParams: {
        message: 'Hello, world!',
        signatures: [
          '0x329d4f496d93ee0b7030aa86124d374261754f9b00dbf7139afa2d79e164c054620c5e80c32813e497810fc4e2c01e1fe5e80594621ad326a4ca33f3380a041f1c',
          '0x8ee8880677f757d68a979b9c9d9192dfd687c57e3ad5dc0f5405ea2a5b430fc540c56a11377e85314a38bf49c0fcc458caac92301318fb9b0d2a743d8884b8361b'
        ],
        publicKeys: [
          currentPkp.publicKey,
          '0x04669D215450DC2C7B1FD464F62C8322F034CEAC8C29BB4CE7CE20E1A3732CA8E53A3889657208F1483FBEE88AFC563050D4121CB547B5AE7B0CAE36BC40BB500C'
        ],
        requiredSignatures: 2,
        messageToSign: 'This is a new message to be signed by the multisig PKP',
        publicKey: currentPkp.publicKey
      }
    });
    setResult(response);
  }

  const handleLitAuthLitAction = async () => {
    await litNodeClient.connect();
    const response = await litNodeClient.executeJs({
      code: litAuthCode,
      sessionSigs,
    });
    log('Lit Auth response:', response);
  }
  
  const handleViewRequestId = async () => {
    const requestId = ""
    const res = await litNodeClient.getLogsForRequestId(requestId)
    log('request id logs', res)
  }

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <h2 className="text-lg font-semibold mb-2">Execute Lit Action</h2>
      <Button 
        onClick={handleExecuteBindedLitAction} 
        className="mb-4"
        disabled={loading}
      >
        {loading ? 'Executing...' : 'Execute Binded Lit Action'}
      </Button>
      <Button 
        onClick={handleExecuteOtherLitAction} 
        className="mb-4"
        disabled={loading}
      >
        {loading ? 'Executing...' : 'Execute Other Lit Action'}
      </Button>
      <Button 
        onClick={handleSignLitAction} 
        className="mb-4"
      >
        Execute Code Lit Action
      </Button>
      <Button 
        onClick={handleVerifyLitAction} 
        className="mb-4"
      >
        Verify Code Lit Action
      </Button>

      <Button 
        onClick={handleLitAuthLitAction} 
        className="mb-4"
      >
        LitAuth Lit Action
      </Button>

      <Button 
        onClick={handleViewRequestId} 
        className="mb-4"
      >
        View RequestId
      </Button>

      {result && (
        <div className="space-y-2">
          <div>
            <p className="font-medium">Result:</p>
            <pre className="text-sm break-all whitespace-pre-wrap bg-muted p-2 rounded">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
} 