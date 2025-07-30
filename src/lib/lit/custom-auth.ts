import { ethers, utils } from 'ethers';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';

// Provider type enum
export enum AuthProviderType {
  EMAIL_OTP = 'email_otp',
  GOOGLE = 'google', 
  PASSKEY = 'passkey'
}

export interface AuthProvider {
  providerType: AuthProviderType;
  sub: string;
  email?: string;
  isEnabled: boolean;
  isPrimary: boolean;
  metadata?: any;
  createdAt: Date;
}

/**
 * Generate unified auth method ID for multi-provider authentication
 */
export function generateUnifiedAuthMethodId(userEmail: string): string {
  return utils.keccak256(utils.toUtf8Bytes(`vastbase:${userEmail.toLowerCase()}`));
}

/**
 * Generate custom auth method type for Vastbase multi-provider system
 * Returns a unique hash string to ensure no conflicts with other auth methods
 * Following the same pattern as official Lit Protocol examples
 */
export function getVastbaseAuthMethodType(): number {
  const hash = utils.keccak256(utils.toUtf8Bytes('Vastbase Multi-Provider Auth v1.0'));
  // Take first 8 hex characters to avoid overflow, convert to decimal
  return parseInt(hash.slice(2, 10), 16);
}
