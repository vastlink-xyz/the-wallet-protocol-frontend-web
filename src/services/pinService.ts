import { encryptString } from "@lit-protocol/encryption";
import { executeSecuredLitAction } from "@/lib/lit/executeLitAction";
import { getSessionSigsByPkp, litNodeClient } from "@/lib/lit";
import { AuthMethod } from "@lit-protocol/types";

const LIT_ACTION_IPFS_ID = 'QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5';
const LOCAL_PIN_KEY = 'lit_encrypted_pin_data';

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
  authMethod: AuthMethod;
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
      const sessionSigs = await getSessionSigsByPkp({ 
        authMethod: userData.authMethod, 
        pkp: userData.litActionPkp, 
        refreshStytchAccessToken: true 
      });
      const response = await executeSecuredLitAction({
        pkpPublicKey: userData.litActionPkp.publicKey,
        litActionIpfsId: LIT_ACTION_IPFS_ID,
        authMethod: userData.authMethod,
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
   * Store PinData to localStorage
   */
  static setLocalPinData(pinData: PinData) {
    if (typeof window === 'undefined') {
      return; // Server-side rendering
    }
    localStorage.setItem(LOCAL_PIN_KEY, JSON.stringify(pinData));
  }

  /**
   * Get PinData from localStorage
   */
  static getLocalPinData(): PinData | null {
    if (typeof window === 'undefined') {
      return null; // Server-side rendering
    }
    const data = localStorage.getItem(LOCAL_PIN_KEY);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  }

  /**
   * Check if PIN is set in localStorage
   */
  static hasLocalPinData(): boolean {
    if (typeof window === 'undefined') {
      return false; // Server-side rendering
    }
    return !!localStorage.getItem(LOCAL_PIN_KEY);
  }

  /**
   * Remove PinData from localStorage
   */
  static removeLocalPinData() {
    if (typeof window === 'undefined') {
      return; // Server-side rendering
    }
    localStorage.removeItem(LOCAL_PIN_KEY);
  }
}