import {
  AuthMethod,
  GetSessionSigsProps,
  IRelayPKP,
  SessionSigs,
} from '@lit-protocol/types';
import { LitActionResource, LitPKPResource } from '@lit-protocol/auth-helpers';
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
    expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
    authMethods: [authMethod],
    resourceAbilityRequests: [
      {
        resource: new LitPKPResource('*'),
        ability: LIT_ABILITY.PKPSigning,
      },
      {
        resource: new LitActionResource('*'),
        ability: LIT_ABILITY.LitActionExecution,
      }
    ],
  });

  return sessionSigs;
} 

export const getSessionSigsByPkp = async (authMethod: AuthMethod, pkp: IRelayPKP) => {
  await litNodeClient.connect();
  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    pkpPublicKey: pkp.publicKey,
    expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
    authMethods: [authMethod],
    resourceAbilityRequests: [
      {
        resource: new LitPKPResource('*'),
        ability: LIT_ABILITY.PKPSigning,
      },
      {
        resource: new LitActionResource('*'),
        ability: LIT_ABILITY.LitActionExecution,
      }
    ],
  });

  return sessionSigs;
}