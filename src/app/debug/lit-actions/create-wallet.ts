declare const ethers: any

declare const authParams: any
declare const dataToEncryptHash: string
declare const publicKey: string

const _litActionCode = async () => {
  // verify google auth
  const res = await Lit.Actions.call({
    ipfsId: 'QmPEn2rn6fkSTByGCQfcKQfso9sUrwiZD4nBZCBr95QNmH',
    params: authParams,
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

export const createWalletLitActionCode = `(${_litActionCode.toString()})();`;
