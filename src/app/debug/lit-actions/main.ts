declare const subLitActionIpfsId: any
declare const authParams: any
declare const actionType: 'CreateWallet' | 'UpdateWallet'
declare const createWalletParams: any
declare const ethers: any

const _litActionCode = async () => {
  console.log('subLitActionIpfsId', subLitActionIpfsId)
  console.log('authParams', authParams)
  console.log('createWalletParams', createWalletParams)
  console.log('actionType', actionType)

  // verify google auth
  const res = await Lit.Actions.call({
    ipfsId: 'QmbSc5mrBRWctAAMEiHGxyfrb3BUJANCjXGJqaGraaAnLN',
    params: authParams,
  })
  console.log('res', res)
  const parsedRes = JSON.parse(res)
  if (!parsedRes.isPermitted) {
    Lit.Actions.setResponse({response: JSON.stringify(parsedRes)})
    return
  }

  if (actionType === 'CreateWallet') {
    // create wallet
    const messageHash = ethers.utils.hashMessage(createWalletParams.dataToEncryptHash);
    const messageBytes = ethers.utils.arrayify(messageHash);
    const sig = await Lit.Actions.signEcdsa({
      toSign: messageBytes,
      publicKey: authParams.publicKey,
      sigName: 'sign-create-wallet',
    })
    console.log('sig', sig)

    Lit.Actions.setResponse({response: JSON.stringify({
      success: true,
      dataToEncryptHashSignature: sig,
    })})
  } else if (actionType === 'UpdateWallet') {
    // update wallet
  }

  Lit.Actions.setResponse({response: JSON.stringify(parsedRes)})
};

export const mainLitActionCode = `(${_litActionCode.toString()})();`;
