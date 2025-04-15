import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthMethod, IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction";
import { log } from "@/lib/utils";
import { MAGIC_NUMBER_LIT_ACTION_IPFS_ID, SIGN_AND_COMBINE_ECDSA_LIT_ACTION_IPFS_ID, SIGN_EIP_191_LIT_ACTION_IPFS_ID, SIGN_EIP_191_LIT_ACTION_IPFS_ID_2, SIGN_MESSAGE_LIT_ACTION_IPFS_ID } from "@/lib/lit";
import { LIT_CHAINS } from "@lit-protocol/constants";
import { ethers } from "ethers";

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