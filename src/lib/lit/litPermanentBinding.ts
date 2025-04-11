import {
  GoogleProvider,
  LitRelay,
} from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import {
  AUTH_METHOD_SCOPE,
  AUTH_METHOD_TYPE,
  LIT_ABILITY,
  LIT_NETWORK,
  LIT_RPC,
} from '@lit-protocol/constants';
import {
  AuthMethod,
  GetSessionSigsProps,
  IRelayPKP,
  SessionSigs,
} from '@lit-protocol/types';
import { LitPKPResource } from '@lit-protocol/auth-helpers';
import { ORIGIN, litNodeClient, getGoogleProvider } from './lit';

/**
 * 铸造一个与特定Lit Action永久绑定的PKP
 * 该PKP将只能执行指定的Lit Action，无法被修改
 */
export async function mintPKPWithPermanentLitAction(
  authMethod: AuthMethod,
  litActionIpfsId: string
): Promise<IRelayPKP> {
  const provider = authMethod.authMethodType === AUTH_METHOD_TYPE.GoogleJwt 
    ? getGoogleProvider(ORIGIN + '/login')
    : null;
    
  if (!provider) {
    throw new Error('Provider not available for this auth method');
  }

  // 2. 设置权限 - 关键：只允许特定的Lit Action
  const options = {
    permittedAuthMethodScopes: [[AUTH_METHOD_SCOPE.SignAnything]],
    // 这是关键部分 - 只允许这个特定的Lit Action
    permittedActions: [litActionIpfsId],
    // 关键：将PKP发送给自己，这样它可以自我管理
    sendPkpToItself: true
  };

  // 3. 通过中继服务器铸造PKP
  console.log(`开始铸造绑定到IPFS ID ${litActionIpfsId}的PKP...`);
  const txHash = await provider.mintPKPThroughRelayer(authMethod, options);

  let attempts = 3;
  let response = null;

  // 4. 轮询直到获得结果
  while (attempts > 0) {
    try {
      response = await provider.relay.pollRequestUntilTerminalState(txHash);
      break;
    } catch (err) {
      console.warn('铸造失败，重试中...', err);
      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts--;
    }
  }

  if (!response || response.status !== 'Succeeded') {
    throw new Error('PKP铸造失败');
  }

  if (!response.pkpEthAddress || !response.pkpTokenId || !response.pkpPublicKey) {
    throw new Error('返回属性未定义');
  }

  const newPKP: IRelayPKP = {
    tokenId: response.pkpTokenId,
    publicKey: response.pkpPublicKey,
    ethAddress: response.pkpEthAddress,
  };

  console.log(`PKP已铸造并永久绑定到Lit Action: ${litActionIpfsId}`);
  console.log(`将PKP发送给自己选项已启用，无需额外烧毁步骤`);

  return newPKP;
}

/**
 * 执行永久绑定的Lit Action
 * 该函数确保只能使用指定的IPFS ID执行操作
 */
export async function executeSecuredLitAction({
  pkpPublicKey,
  litActionIpfsId,
  authMethod,
  sessionSigs,
  jsParams
}: {
  pkpPublicKey: string;
  litActionIpfsId: string;
  authMethod: AuthMethod;
  sessionSigs: SessionSigs;
  jsParams: any;
}): Promise<any> {
  // 连接到Lit网络（如果尚未连接）
  await litNodeClient.connect();
  
  console.log(`执行安全的Lit Action: ${litActionIpfsId}`);
  
  // 执行Lit Action，仅使用其IPFS ID
  // 注意：不提供代码字符串选项，只使用IPFS ID
  const response = await litNodeClient.executeJs({
    ipfsId: litActionIpfsId, // 使用IPFS ID确保不可变性
    sessionSigs,
    authMethods: [authMethod],
    jsParams: {
      ...jsParams,
      publicKey: pkpPublicKey
    }
  });
  
  return response;
}

/**
 * 创建一个用于执行永久绑定Lit Action的钩子
 * 可以在React组件中使用
 */
export function createPermanentLitActionExecutor({
  pkp,
  litActionIpfsId,
  authMethod,
  sessionSigs,
}: {
  pkp: IRelayPKP;
  litActionIpfsId: string;
  authMethod: AuthMethod;
  sessionSigs: SessionSigs;
}) {
  return async (params: any) => {
    return executeSecuredLitAction({
      pkpPublicKey: pkp.publicKey,
      litActionIpfsId,
      authMethod,
      sessionSigs,
      jsParams: params
    });
  };
} 