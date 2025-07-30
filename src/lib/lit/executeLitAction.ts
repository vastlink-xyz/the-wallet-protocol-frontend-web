import {
  AuthMethod,
  SessionSigs,
} from '@lit-protocol/types';
import { litNodeClient } from './providers';

/**
 * Execute permanently bound Lit Action
 * This function ensures operations can only be executed with the specified IPFS ID
 */
export async function executeSecuredLitAction({
  pkpPublicKey,
  litActionIpfsId,
  authMethod,
  sessionSigs,
  jsParams
}: {
  pkpPublicKey: string;
  litActionIpfsId: string;
  authMethod: AuthMethod;
  sessionSigs: SessionSigs;
  jsParams: any;
}): Promise<any> {
  // Connect to Lit network (if not already connected)
  if (!litNodeClient.ready) {
    await litNodeClient.connect();
  }
  
  console.log(`Executing secured Lit Action: ${litActionIpfsId}`);
  console.log(pkpPublicKey, authMethod)
  
  // Execute Lit Action using only its IPFS ID
  // Note: No code string option provided, only using IPFS ID
  const response = await litNodeClient.executeJs({
    ipfsId: litActionIpfsId, // Use IPFS ID to ensure immutability
    sessionSigs,
    // authMethods: [authMethod],
    jsParams,
  });
  
  return response;
}
