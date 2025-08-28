// This is a Lit Action that verifies tokens from different auth providers
// Based on the authMethodType, it will call different verification endpoints

declare const publicKey: string;
declare const authMethodId: string;
declare const authMethodType: number;
declare const accessToken: string;

declare const litActionContext: any;

declare const ethers: any;
// declare const Lit: any;

const _litActionCode = async () => {
  const apiBaseUrl = litActionContext.apiBaseUrl
  const res = {
    "isPermitted": false,
  }

  const isSuccess = await Lit.Actions.runOnce(
    { waitForResponse: true, name: 'verifyToken' },
    async () => {
      const verifyTokenRes = await fetch(`${apiBaseUrl}/api/verify-token`, {
        method: 'POST',
        body: JSON.stringify({
          authMethodType,
          accessToken,
        }),
      })
      const data = await verifyTokenRes.json()
      return data.valid
    }
  )
  console.log('verify token data is success', isSuccess)

  // If the token is not valid, return false
  if ((isSuccess as any) !== 'true') {
    return Lit.Actions.setResponse({
      response: JSON.stringify(res),
    });
  }

  const pkpTokenId = await Lit.Actions.pubkeyToTokenId({ publicKey });
  console.log('authMethodType before conversion:', authMethodType);
  console.log('authMethodId:', authMethodId);
  
  res.isPermitted = await Lit.Actions.isPermittedAuthMethod({
    tokenId: pkpTokenId,
    authMethodType: ethers.utils.hexValue(authMethodType),
    userId: ethers.utils.arrayify(authMethodId),
  })
  console.log('isPermitted', res.isPermitted)

  Lit.Actions.setResponse({response: JSON.stringify(res)})
};

export const verifyAuthTokenLitActionCode = `(${_litActionCode.toString()})();`;
