import { SessionSigs } from '@lit-protocol/types';
import { VastbaseAuthMethod } from '@/lib/lit/custom-auth';

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
  
  // Convenience properties
  /** Authentication method ID */
  authMethodId: string | null;
  
  /** Access token */
  accessToken: string | null;
  
  /** Provider type */
  providerType: string | null;
  
  /** Primary email */
  primaryEmail: string | null;
}