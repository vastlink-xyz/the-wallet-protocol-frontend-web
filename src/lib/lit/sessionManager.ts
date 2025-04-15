import {
  AuthMethod,
  GetSessionSigsProps,
  SessionSigs,
} from '@lit-protocol/types';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { LIT_ABILITY } from '@lit-protocol/constants';
import { litNodeClient } from './googleProvider';

/**
 * Generate session signatures
 * @param pkpPublicKey PKP public key
 * @param authMethod Authentication method
 * @param sessionSigsParams Session signature parameters
 */
export async function getSessionSigs({
  pkpPublicKey,
  authMethod,
  sessionSigsParams,
}: {
  pkpPublicKey: string;
  authMethod: AuthMethod;
  sessionSigsParams: GetSessionSigsProps;
}): Promise<SessionSigs> {
  await litNodeClient.connect();
  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    ...sessionSigsParams,
    pkpPublicKey,
    authMethods: [authMethod],
    resourceAbilityRequests: [
      {
        resource: new LitPKPResource('*'),
        ability: LIT_ABILITY.PKPSigning,
      },
    ],
  });

  return sessionSigs;
} 