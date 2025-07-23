declare const ethers: any

declare const authParams: any
declare const dataToEncryptHash: string
declare const publicKey: string
declare const env: string

const _litActionCode = async () => {
  // verify auth token
  const res = await Lit.Actions.call({
    ipfsId: 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm',
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
