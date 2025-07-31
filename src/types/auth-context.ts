import { SessionSigs } from '@lit-protocol/types';
import { VastbaseAuthMethod } from '@/lib/lit/custom-auth';
import { User } from '@/app/api/user/storage';

/**
 * Value type provided by AuthMethod Context
 */
export interface AuthContextValue {
  /** Current authentication method object */
  authMethod: VastbaseAuthMethod | null;
  
  /** Current user data */
  userData: User | null;
  
  /** Method to get Custom Auth Session Signatures */
  getCustomAuthSessionSigs: () => Promise<SessionSigs | null>;
  
  // Convenience properties
  /** Authentication method ID */
  authMethodId: string | null;
  
  /** Access token */
  accessToken: string | null;
  
  /** Provider type */
  providerType: string | null;
  
  /** Primary email */
  primaryEmail: string | null;
  
  /** Whether user has PKP */
  hasPkp: boolean;
}