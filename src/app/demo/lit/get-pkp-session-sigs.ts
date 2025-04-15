import { LitNodeClient } from "@lit-protocol/lit-node-client";
import { LitActionResource, LitPKPResource } from "@lit-protocol/auth-helpers";
import { LIT_ABILITY } from "@lit-protocol/constants";
import { CredentialResponse } from "@react-oauth/google";
import axios from "axios";

export interface MintedPkp {
  tokenId: string;
  publicKey: string;
  ethAddress: string;
}

export const getPkpSessionSigs = async (
  credentialResponse: CredentialResponse,
  mintedPkp: MintedPkp
) => {
  try {
    const baseUrl = 'http://localhost:5001';
    const response = await axios.post(`${baseUrl}/lit/get-pkp-session-sigs`, {
      credential: credentialResponse.credential,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      mintedPkp
    });

    if (!response.data || !response.data.success) {
      throw new Error('Failed to get PKP session signatures');
    }

    return response.data.sessionSignatures;
  } catch (error) {
    console.error('Error getting PKP session signatures:', error);
    throw error;
  }
};