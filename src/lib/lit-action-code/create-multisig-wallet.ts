declare const ethers: any

declare const authParams: any
declare const dataToEncryptHash: string
declare const publicKey: string

declare const litActionContext: any

const _litActionCode = async () => {
  const multiProviderAuthIpfsId = litActionContext.multiProviderAuthIpfsId

  const authResult = await Lit.Actions.call({
    ipfsId: multiProviderAuthIpfsId,
    params: {
      providerType: authParams.providerType,
      accessToken: authParams.accessToken,
      pkpTokenId: authParams.pkpTokenId,
      authMethodType: authParams.authMethodType,
      litActionContext,
    },
  })
  console.log('Multi-provider auth result:', authResult)
  
  if (authResult !== 'true') {
    Lit.Actions.setResponse({response: JSON.stringify({isPermitted: false})})
    return
  }

  // create wallet
  const messageHash = ethers.utils.hashMessage(dataToEncryptHash);
  const messageBytes = ethers.utils.arrayify(messageHash);

  const sigShare = await Lit.Actions.signEcdsa({
    toSign: messageBytes,
    publicKey: publicKey,
    sigName: 'create-wallet-signature',
  })

  Lit.Actions.setResponse({response: JSON.stringify({
    success: true,
    dataToEncryptHashSignature: sigShare,
  })})
};

export const litActionCodeForCreateMultisigWallet = `(${_litActionCode.toString()})();`;
