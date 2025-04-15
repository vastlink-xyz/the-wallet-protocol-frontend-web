import { Button } from "@/components/ui/button";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { PKPEthersWallet } from "@lit-protocol/pkp-ethers";
import { litNodeClient, SIGN_EIP_191_LIT_ACTION_IPFS_ID_2 } from "@/lib/lit";
import { log } from "@/lib/utils";
import { IRelayPKP, SessionSigs } from "@lit-protocol/types";
import { LitContracts } from "@lit-protocol/contracts-sdk";
import { AUTH_METHOD_SCOPE } from "@lit-protocol/constants";

interface SignMessageCardProps {
  currentPkp: IRelayPKP;
  sessionSigs: SessionSigs;
}

export function SignMessageCard({
  currentPkp,
  sessionSigs,
}: SignMessageCardProps) {
  const [signature, setSignature] = useState<string>("");
  const [recoveredAddress, setRecoveredAddress] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);

  // Reset signature state when PKP changes
  useEffect(() => {
    setSignature("");
    setRecoveredAddress("");
    setVerified(false);
  }, [currentPkp]);

  async function signMessageWithPKP() {
    try {
      await litNodeClient.connect();

      if (!sessionSigs) {
        throw new Error('Session signatures not found');
      }

      if (!currentPkp) {
        throw new Error('Current pkp not found');
      }

      const pkpWallet = new PKPEthersWallet({
        controllerSessionSigs: sessionSigs,
        pkpPubKey: currentPkp.publicKey,
        litNodeClient: litNodeClient,
      });

      await pkpWallet.init();

      const message = 'Hello, Lit Protocol!';
      const signature = await pkpWallet.signMessage(message);
      log('signature', signature)
      setSignature(signature);

      // Get the address associated with the signature created by signing the message
      const recoveredAddr = ethers.utils.verifyMessage(message, signature);
      setRecoveredAddress(recoveredAddr);

      // Check if the address associated with the signature is the same as the current PKP
      const verified = currentPkp.ethAddress.toLowerCase() === recoveredAddr.toLowerCase();
      setVerified(verified);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="bg-card p-4 rounded-lg border mb-6">
      <h2 className="text-lg font-semibold mb-2">Sign Message</h2>
      <Button onClick={signMessageWithPKP} className="mb-4">
        Sign Message
      </Button>
      {signature && (
        <div className="space-y-2">
          <div>
            <p className="font-medium">Signature:</p>
            <pre className="text-sm break-all whitespace-pre-wrap bg-muted p-2 rounded">
              {signature}
            </pre>
          </div>
          {recoveredAddress && (
            <div>
              <p className="font-medium">Recovered Address:</p>
              <p className="text-sm break-all bg-muted p-2 rounded">
                {recoveredAddress}
              </p>
            </div>
          )}
          {verified && (
            <div>
              <p className="font-medium">Verified:</p>
              <p className="text-sm bg-muted p-2 rounded">
                {verified ? "Yes" : "No"}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 