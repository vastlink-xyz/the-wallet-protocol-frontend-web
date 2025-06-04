"use client";

import { useState } from "react";
import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { encryptString } from "@lit-protocol/encryption";
import { LIT_NETWORK, LIT_ABILITY } from "@lit-protocol/constants";
import { createSiweMessage, generateAuthSig, LitAccessControlConditionResource, LitActionResource } from "@lit-protocol/auth-helpers";
import * as ethers from "ethers";
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction";
import { log } from "@/lib/utils";
import { AuthMethod } from "@lit-protocol/types";
import { litNodeClient } from "@/lib/lit";

const litActionPkp = {
  "tokenId": "0x1354853dbb73274bb3f3262e1df21ffb0caf849fd2e27d388f33f3a7a50aa91d",
  "publicKey": "0x048721804caec0f4deb6d8c64cb8e2dc4139c220e6ca9a32a050ddec12cc86e184294c03263367e8a98f2c7bd4af5b12934c97efdea6a477489d84f70bc9e668f3",
  "ethAddress": "0x7aF7B666F50BdC0E7Fe13b41Ce48e31664DC4dd6"
}

// Create Lit Action code that will decrypt the data
// This is the code that will run on the Lit nodes
const litActionCode = `
  (async () => {
    // In Lit Actions, params are available directly as global variables
    // Decrypt data using the provided parameters
    const decryptedData = await Lit.Actions.decryptAndCombine({
      accessControlConditions,
      ciphertext,
      dataToEncryptHash,
      authSig: null, // Use the authSig from the session
      chain: "ethereum",
    });
    
    // Return the decrypted data
    Lit.Actions.setResponse({ response: decryptedData });
  })();
`;
// QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5

log('lit code', litActionCode)

export function Encryption({ authMethod }: { authMethod: AuthMethod }) {
  const [inputText, setInputText] = useState<string>("");
  const [encryptedData, setEncryptedData] = useState<{ ciphertext: string; dataToEncryptHash: string } | null>(null);
  const [decryptedText, setDecryptedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  const LIT_ACTION_IPFS_ID = 'QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5'; // Replace with your actual Lit Action IPFS ID

  // Encryption function
  const handleEncrypt = async () => {
    if (!inputText) {
      setError("Please enter text to encrypt");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      await litNodeClient.connect();

      // Define access control conditions - configure for Lit Action to access
      // We'll use the PKP's public key as the authorized key
      const accessControlConditions = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: '',
          parameters: [':currentActionIpfsId'],
          returnValueTest: {
            comparator: '=',
            value: LIT_ACTION_IPFS_ID,
          },
        },
      ];

      // Encrypt data
      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: inputText,
        },
        litNodeClient
      );

      // Save encryption result
      setEncryptedData({ 
        ciphertext, 
        dataToEncryptHash 
      });
      
      // Store access control conditions for later use
      localStorage.setItem("demoEncryptionConditions", JSON.stringify(accessControlConditions));

    } catch (err) {
      console.error("Encryption error:", err);
      setError(`Encryption failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  // Decryption function using Lit Action
  const handleDecrypt = async () => {
    if (!encryptedData) {
      setError("Please encrypt data first");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      // Connect to Lit network
      await litNodeClient.connect();

      // Get access control conditions from localStorage
      const accessControlConditions = JSON.parse(localStorage.getItem("demoEncryptionConditions") || "[]");

      const accessControlConditionResourceString = await LitAccessControlConditionResource.generateResourceString(
        accessControlConditions,
        encryptedData.dataToEncryptHash
      )

      // Generate session signatures for authentication
      const sessionSigs = await litNodeClient.getPkpSessionSigs({
        chain: "ethereum",
        authMethods: [authMethod],
        pkpPublicKey: litActionPkp.publicKey,
        expiration: new Date(Date.now() + 1000 * 60 * 10).toISOString(), // 10 minutes
        resourceAbilityRequests: [
          {
            resource: new LitAccessControlConditionResource(accessControlConditionResourceString),
            ability: LIT_ABILITY.AccessControlConditionDecryption,
          },
          {
            resource: new LitActionResource("*"),
            ability: LIT_ABILITY.LitActionExecution,
          },
        ],
      });

      // Execute the Lit Action
      const response = await executeSecuredLitAction({
        pkpPublicKey: litActionPkp.publicKey,
        litActionIpfsId: LIT_ACTION_IPFS_ID,
        authMethod: authMethod,
        sessionSigs,
        jsParams: {
          accessControlConditions,
          ciphertext: encryptedData.ciphertext,
          dataToEncryptHash: encryptedData.dataToEncryptHash
        }
      });

      setDecryptedText(typeof response.response === 'string' ? response.response : JSON.stringify(response.response));
    } catch (err) {
      console.error("Decryption error:", err);
      setError(`Decryption failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Lit Protocol Encryption with Lit Action Decryption</h1>
      
      <div className="mb-6">
        <label className="block mb-2 font-medium">Input Text</label>
        <textarea
          className="w-full p-2 border rounded-md mb-2"
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to encrypt..."
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md mr-2 hover:bg-blue-700 disabled:opacity-50"
          onClick={handleEncrypt}
          disabled={loading || !inputText}
        >
          {loading ? "Processing..." : "Encrypt"}
        </button>
      </div>

      {encryptedData && (
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Encryption Result</h2>
          <div className="bg-gray-100 p-3 rounded-md mb-3 overflow-auto max-h-32">
            <code className="text-sm break-all">{JSON.stringify(encryptedData, null, 2)}</code>
          </div>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
            onClick={handleDecrypt}
            disabled={loading}
          >
            {loading ? "Processing..." : "Decrypt via Lit Action"}
          </button>
        </div>
      )}

      {decryptedText && (
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Decryption Result</h2>
          <div className="bg-gray-100 p-3 rounded-md mb-3">
            <p>{decryptedText}</p>
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