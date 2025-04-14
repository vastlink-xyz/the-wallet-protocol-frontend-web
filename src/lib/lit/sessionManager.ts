import {
  AuthMethod,
  GetSessionSigsProps,
  SessionSigs,
} from '@lit-protocol/types';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { LIT_ABILITY } from '@lit-protocol/constants';
import { litNodeClient } from './googleProvider';

/**
 * 生成会话签名
 * @param pkpPublicKey PKP 公钥
 * @param authMethod 认证方法
 * @param sessionSigsParams 会话签名参数
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