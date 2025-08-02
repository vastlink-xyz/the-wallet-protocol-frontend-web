import { SessionSigs } from '@lit-protocol/types';
import { VastbaseAuthMethod, AuthProviderType } from '@/lib/lit/custom-auth';

/**
 * Value type provided by AuthMethod Context
 */
export interface AuthContextValue {
  /** Current authentication method object */
  authMethod: VastbaseAuthMethod | null;
  
  /** Method to get Custom Auth Session Signatures */
  getCustomAuthSessionSigs: () => Promise<SessionSigs | null>;
  
  /** Method to update authentication method */
  updateAuthMethod: (newAuthMethod: VastbaseAuthMethod | null) => void;
  
  /** Method to get current access token dynamically */
  getCurrentAccessToken: (forceRefresh?: boolean) => Promise<string | null>;
  
  // Convenience properties
  /** Authentication method ID */
  authMethodId: string | null;
  
  /** Provider type */
  providerType: AuthProviderType | null;
  
  /** Primary email */
  primaryEmail: string | null;
}