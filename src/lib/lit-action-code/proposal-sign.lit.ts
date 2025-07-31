declare const ethers: any

declare const message: string
declare const publicKey: string
declare const env: string
declare const authParams: any
declare const devUrl: string

const _litActionCode = async () => {
  const multiProviderAuthIpfsId = 'QmUALzmKCewVAHvjgqiu3UKCYXESEbZkjJiXVkjUV9iPUj' 
  // verify auth token
  const authResult = await Lit.Actions.call({
    ipfsId: multiProviderAuthIpfsId,
    params: {
      providerType: authParams.providerType,
      accessToken: authParams.accessToken,
      pkpTokenId: authParams.pkpTokenId,
      authMethodType: authParams.authMethodType,
      env,
      devUrl,
    },
  })
  console.log('Multi-provider auth result:', authResult)
  
  if (authResult !== 'true') {
    Lit.Actions.setResponse({response: JSON.stringify({isPermitted: false})})
    return
  }
  
  // use Lit.Actions.ethPersonalSignMessageEcdsa to generate signature
  const sigShare = await Lit.Actions.ethPersonalSignMessageEcdsa({ 
    message,
    publicKey, 
    sigName: 'sig',
  });
  
  // return sigShare
  return sigShare;
};

export const personalSignLitActionCode = `(${_litActionCode.toString()})();`;
