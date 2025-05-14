import {
  AuthMethod,
  GetSessionSigsProps,
  IRelayPKP,
  SessionSigs,
} from '@lit-protocol/types';
import { LitActionResource, LitPKPResource } from '@lit-protocol/auth-helpers';
import { AUTH_METHOD_TYPE, LIT_ABILITY } from '@lit-protocol/constants';
import { litNodeClient } from './providers';
import { getNewStytchAccessToken } from '../jwt';

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
  refreshStytchAccessToken,
}: {
  pkpPublicKey: string;
  authMethod: AuthMethod;
  refreshStytchAccessToken?: boolean;
  sessionSigsParams?: GetSessionSigsProps;
}): Promise<SessionSigs> {
  if (!litNodeClient.ready) {
    await litNodeClient.connect();
  }

  if (authMethod.authMethodType === AUTH_METHOD_TYPE.StytchEmailFactorOtp && refreshStytchAccessToken) {
    const newAccessToken = await getNewStytchAccessToken(authMethod.accessToken);
    authMethod.accessToken = newAccessToken;
  }

  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    ...sessionSigsParams,
    pkpPublicKey,
    // expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
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

export const getSessionSigsByPkp = async ({
  authMethod,
  pkp,
  refreshStytchAccessToken,
}: {
  authMethod: AuthMethod;
  pkp: IRelayPKP;
  refreshStytchAccessToken?: boolean;
}) => {
  if (!litNodeClient.ready) {
    await litNodeClient.connect();
  }

  if (authMethod.authMethodType === AUTH_METHOD_TYPE.StytchEmailFactorOtp && refreshStytchAccessToken) {
    const newAccessToken = await getNewStytchAccessToken(authMethod.accessToken);
    authMethod.accessToken = newAccessToken;
  }

  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    pkpPublicKey: pkp.publicKey,
    // expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours
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