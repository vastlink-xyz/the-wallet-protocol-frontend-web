import { encryptString } from "@lit-protocol/encryption";
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction";
import { getMultiProviderSessionSigs, litNodeClient } from "@/lib/lit";
import { VastbaseAuthMethod } from "@/lib/lit/custom-auth";
import { SecurityLayer } from "@/types/security";

const LIT_ACTION_IPFS_ID = 'QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5';

export interface PinData {
  encryptedPinHash: string;
  dataToEncryptHash: string;
  accessControlConditions: any[];
}

export interface UserData {
  litActionPkp: {
    publicKey: string;
    ethAddress: string;
    tokenId: string;
  };
  authMethod: VastbaseAuthMethod;
}

export class PinService {
  /**
   * Create an encrypted PIN hash using Lit Protocol
   */
  static async createPinHash(pin: string, userData: UserData): Promise<PinData> {
    if (!pin || !/^\d{6}$/.test(pin)) {
      throw new Error('PIN must be exactly 6 digits');
    }
    const pinHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pin));
    const pinHashHex = Array.from(new Uint8Array(pinHash))
      .map(b => b.toString(16).padStart(2, '0')).join('');
    const accessControlConditions = [
      {
        contractAddress: '',
        standardContractType: '',
        chain: 'ethereum',
        method: '',
        parameters: [':userAddress'],
        returnValueTest: {
          comparator: '=',
          value: userData.litActionPkp.ethAddress,
        },
      },
    ];
    if (!litNodeClient.ready) {
      await litNodeClient.connect();
    }
    const { ciphertext, dataToEncryptHash } = await encryptString(
      {
        accessControlConditions,
        dataToEncrypt: pinHashHex,
      },
      litNodeClient
    );
    return {
      encryptedPinHash: ciphertext,
      dataToEncryptHash,
      accessControlConditions,
    };
  }

  /**
   * Verify a PIN against stored encrypted data using Lit Action
   */
  static async verifyPin(
    pin: string, 
    storedPinData: PinData, 
    userData: UserData
  ): Promise<boolean> {
    if (!pin || !/^\d{6}$/.test(pin)) {
      throw new Error('PIN must be exactly 6 digits');
    }
    try {
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }
      const sessionSigs = await getMultiProviderSessionSigs({
        pkpPublicKey: userData.litActionPkp.publicKey,
        pkpTokenId: userData.litActionPkp.tokenId,
        accessToken: userData.authMethod.accessToken,
        providerType: userData.authMethod.providerType,
        userEmail: userData.authMethod.primaryEmail,
      });
      const response = await executeSecuredLitAction({
        pkpPublicKey: userData.litActionPkp.publicKey,
        litActionIpfsId: LIT_ACTION_IPFS_ID,
        sessionSigs,
        jsParams: {
          accessControlConditions: storedPinData.accessControlConditions,
          ciphertext: storedPinData.encryptedPinHash,
          dataToEncryptHash: storedPinData.dataToEncryptHash
        }
      });
      const providedPinHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pin));
      const providedPinHashHex = Array.from(new Uint8Array(providedPinHash))
        .map(b => b.toString(16).padStart(2, '0')).join('');
      const decryptedPinHash = response.response;
      const isValid = decryptedPinHash === providedPinHashHex;
      return isValid;
    } catch (error) {
      console.error('Error verifying PIN with Lit:', error);
      return false;
    }
  }

  /**
   * Validate PIN format
   */
  static validatePinFormat(pin: string): boolean {
    return /^\d{6}$/.test(pin);
  }

  /**
   * Store PinData to database via security layers API
   */
  static async setLocalPinData({
    pinData,
    authMethodId,
    accessToken
  }: {
    pinData: PinData,
    authMethodId: string,
    accessToken: string
  }) {
    try {
      const response = await fetch('/api/security/layers/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          authMethodId: authMethodId,
          layerType: 'PIN',
          config: {
            pinData: pinData
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to store PIN to database');
      }
    } catch (error) {
      console.error('Error storing PIN to database:', error);
      throw error;
    }
  }

  /**
   * Update existing PIN data in database via security layers API
   */
  static async updateLocalPinData({
    pinData,
    authMethodId,
    accessToken
  }: {
    pinData: PinData,
    authMethodId: string,
    accessToken: string
  }) {
    try {
      // First get the existing PIN layer
      const response = await fetch(`/api/security/layers?authMethodId=${authMethodId}`);
      
      if (!response.ok) {
        throw new Error('Failed to get existing PIN layer');
      }
      
      const data = await response.json();
      const pinLayers = data.pinLayers || [];
      const pinLayer = pinLayers.find((layer: SecurityLayer) => layer.type === 'PIN');
      
      if (!pinLayer) {
        throw new Error('No existing PIN layer found');
      }

      // Update the existing layer
      const updateResponse = await fetch('/api/security/layers/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          authMethodId: authMethodId,
          layerId: pinLayer.id,
          config: {
            pinData: pinData
          }
        }),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update PIN in database');
      }
    } catch (error) {
      console.error('Error updating PIN in database:', error);
      throw error;
    }
  }

  /**
   * Get PinData from database via security layers API
   */
  static async getLocalPinData({
    authMethodId,
  }: {
    authMethodId: string,
  }): Promise<PinData | null> {
    try {
      const response = await fetch(`/api/security/layers?authMethodId=${authMethodId}`);
      
      if (!response.ok) {
        return null;
      }
      
      const data = await response.json();

      // Use the new unified structure
      const securityLayers = data.securityLayers || [];
      const pinLayer = securityLayers.find((layer: SecurityLayer) => 
        layer.type === 'PIN' && layer.category === 'pin' && layer.isEnabled
      );

      return pinLayer?.config?.pinData || null;
    } catch (error) {
      console.error('Error getting PIN from database:', error);
      return null;
    }
  }

  /**
   * Check if PIN is set in database
   */
  static async hasLocalPinData({
    authMethodId,
  }: {
    authMethodId: string,
  }): Promise<boolean> {
    const pinData = await this.getLocalPinData({
      authMethodId,
    });
    return !!pinData;
  }

  /**
   * Remove PinData from database by disabling the PIN layer
   */
  static async removeLocalPinData({
    authMethodId,
    accessToken
  }: {
    authMethodId: string,
    accessToken: string
  }) {
    if (!accessToken) {
      throw new Error('Authentication required to remove PIN');
    }

    try {
      // Remove the PIN layer completely using remove API
      const removeResponse = await fetch('/api/security/layers/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          authMethodId: authMethodId,
          layerType: 'PIN'
        }),
      });

      if (!removeResponse.ok) {
        throw new Error('Failed to remove PIN from database');
      }
    } catch (error) {
      console.error('Error removing PIN from database:', error);
      throw error;
    }
  }
}