"use client";

import { useState } from "react";
import { mintPKP } from "@/lib/lit/pkpManager";
import { AuthMethod, IRelayPKP, MintRequestBody } from "@lit-protocol/types";
import { log } from "@/lib/utils";
import { googleProvider } from "@/lib/lit/googleProvider";
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from "@lit-protocol/constants";
import { utils } from "ethers";

// const litActionIpfsId = "QmZdAipjUhGYGkV5TsDVRCE5UG8nJdM9X8z3gtbn7BkdAK";
const litActionIpfsId = "QmUUR1QK2DVS9CfD6b5ggBtvH9UTJuirmCBcMAXkrj2P8p";

export function ExampleMint({ authMethod }: { authMethod: AuthMethod }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [mintedPkp, setMintedPkp] = useState<IRelayPKP | null>(null);

  const handleMint = async ({
    authMethod,
    litActionIpfsId,
  }: {
    authMethod: AuthMethod,
    litActionIpfsId: string,
  }
  ): Promise<IRelayPKP> => {
    const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
      ? googleProvider
      : null;
      
    if (!provider) {
      throw new Error('Provider not available for this auth method');
    }
  
    // Convert IPFS CID to bytes32 format
    const bytes = Buffer.from(utils.base58.decode(litActionIpfsId));
    const litActioinAuthMethodId = `0x${bytes.toString('hex')}`;

    const litActionIpfsId2 = 'QmNr3D6Rpgdr4j2ShXRcdMgoxRt7Z2guvDpNDjewZNwaYX'
    const bytes2 = Buffer.from(utils.base58.decode(litActionIpfsId2));
    const litActioinAuthMethodId2 = `0x${bytes2.toString('hex')}`;
  
    const googleAuthMethodId = await provider.getAuthMethodId(authMethod);
    const options: MintRequestBody = {
      permittedAuthMethodTypes: [AUTH_METHOD_TYPE.LitAction, AUTH_METHOD_TYPE.LitAction],
      permittedAuthMethodIds: [litActioinAuthMethodId, litActioinAuthMethodId2],
      permittedAuthMethodPubkeys: ['0x', '0x'],
      permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything], [AUTH_METHOD_SCOPE.SignAnything]],
      addPkpEthAddressAsPermittedAddress: false,
      sendPkpToItself: true,
      keyType: 2 // Standard PKP type
    };
  
    // 3. Mint PKP through relay server
    console.log(`Starting to mint PKP bound to IPFS ID ${litActionIpfsId}...`);
    const txHash = await provider.mintPKPThroughRelayer(authMethod, options);
  
    let attempts = 3;
    let response = null;
  
    // 4. Poll until result is received
    while (attempts > 0) {
      try {
        log('attmpts', attempts)
        response = await provider.relay.pollRequestUntilTerminalState(txHash);
        break;
      } catch (err) {
        console.warn('Minting failed, retrying...', err);
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts--;
      }
    }
  
    if (!response || response.status !== 'Succeeded') {
      throw new Error('PKP minting failed');
    }
  
    if (!response.pkpEthAddress || !response.pkpTokenId || !response.pkpPublicKey) {
      throw new Error('Response properties are undefined');
    }
  
    const newPKP: IRelayPKP = {
      tokenId: response.pkpTokenId,
      publicKey: response.pkpPublicKey,
      ethAddress: response.pkpEthAddress,
    };

    log('new pkp', newPKP)
  
    console.log(`PKP has been minted and permanently bound to Lit Action: ${litActionIpfsId}`);
    console.log(`Send PKP to itself option enabled, no additional burn step needed`);
  
    return newPKP;
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mint PKP Example</h1>
      
      <div className="mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2 hover:bg-blue-700 disabled:opacity-50"
          onClick={() => handleMint({
            authMethod,
            litActionIpfsId,
          })}
          disabled={loading}
        >
          {loading ? "Minting..." : "Mint PKP"}
        </button>
      </div>

      {mintedPkp && (
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Minted PKP</h2>
          <div className="bg-gray-100 p-3 rounded-md mb-3 overflow-auto max-h-60">
            <p><strong>Token ID:</strong> {mintedPkp.tokenId}</p>
            <p><strong>ETH Address:</strong> {mintedPkp.ethAddress}</p>
            <p className="truncate"><strong>Public Key:</strong> {mintedPkp.publicKey}</p>
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 mb-4">
          {error}
        </div>
      )}
    </div>
  );
}
