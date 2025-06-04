declare const ethers: any

declare const message: string
declare const publicKey: string
declare const env: string
declare const authParams: any

const _litActionCode = async () => {
  // verify auth token
  const res = await Lit.Actions.call({
    ipfsId: 'QmNcUQ4jqnnjNue8T5RNekSQ2numbqshSiyXCnZi73QZ1u',
    params: {
      ...authParams,
      publicKey,
      env,
    },
  })
  console.log('res', res)
  const parsedRes = JSON.parse(res)
  if (!parsedRes.isPermitted) {
    Lit.Actions.setResponse({response: JSON.stringify(parsedRes)})
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
