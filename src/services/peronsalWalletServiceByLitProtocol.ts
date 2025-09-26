import { mintPersonalPKP } from '@/lib/lit';
import { IRelayPKP } from '@lit-protocol/types';

import { log } from '@/lib/utils'
import { BASE_URL } from '@/constants'

export const createOrGetPersonalWallet = async (input: any, user: any) => {
  return await createOrGetPKP(input, user);
}

const createOrGetPKP = async (input: any, user: any): Promise<IRelayPKP> => {
    try {
      // Check if user already has PKP
      const pkpResponse = await fetch(`${BASE_URL}/api/user/pkp?authMethodId=${user.authMethodId}`);
      
      if (pkpResponse.ok) {
        const pkps = await pkpResponse.json();
        
        if (pkps?.litActionPkp?.ethAddress && pkps?.litActionPkp?.publicKey && pkps?.litActionPkp?.tokenId) {
          log('Found existing PKP:', pkps.litActionPkp);
          return pkps.litActionPkp;
        }
      }

      // User doesn't have valid PKP, need to create new one
      log('Creating new PKP for user:', user.primaryEmail);
      
      // Save PKP to database
      const newPkp = await mintCustomAuthPKP(input, user);
      await savePKPToDatabase(user.authMethodId, input.accessToken, newPkp);
      
      return newPkp;
    } catch (error) {
      console.error('Error in createOrGetPKP:', error);
      throw error;
    }
};

const mintCustomAuthPKP = async (input: any, user: any): Promise<IRelayPKP> => {
    try {
      log('Starting PKP minting process for user:', user.id);
      
      // Call the mint function
      const pkp = await mintPersonalPKP({
        userEmail: input.userEmail,
        providerType: input.providerType,
      });
      
      return pkp;
      
    } catch (error) {
      console.error('Error minting PKP:', error);
      throw error;
    }
};

/**
 * Save PKP to database
 */
const savePKPToDatabase = async (authMethodId: string, authToken: string, pkp: IRelayPKP) => {
    try {
      const response = await fetch(`${BASE_URL}/api/user/pkp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          authMethodId,
          pkp,
          pkpType: 'litAction'
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to save PKP: ${errorData.error || response.status}`);
      }
      
      const result = await response.json();
      log('PKP saved to database successfully:', result);
      
    } catch (error) {
      console.error('Error saving PKP to database:', error);
      throw error;
    }
};