declare const walletId: string
declare const proposalId: string
declare const ethers: any
declare const publicKey: string
declare const signerPersonalMessage: string

const _litActionCode = async () => {
  console.log('walletId', walletId)
  
  const apiUrl = `https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com/api/multisig?walletId=${walletId}`;
  const response = await fetch(apiUrl).then((response) => response.json());
  const {
    metadata,
    ciphertext,
    dataToEncryptHash,
    dataToEncryptHashSignature,
  } = response.data

  // verify the dataToEncryptHashSignature
  const messageHash = ethers.utils.hashMessage(dataToEncryptHash);
  const recoveredAddress = ethers.utils.recoverAddress(messageHash, dataToEncryptHashSignature);
  const expectedAddress = ethers.utils.computeAddress(publicKey);    
  const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();

  if (!isValid) {
    return
  }

  const decryptedData = await Lit.Actions.decryptAndCombine({
    accessControlConditions: metadata.accessControlConditions,
    ciphertext,
    dataToEncryptHash,
    // @ts-ignore
    authSig: null,
    chain: "ethereum",
  });
  const parsedDecryptedData = JSON.parse(decryptedData)

  // update wallet
  const res = await Lit.Actions.call({
    ipfsId: 'verify-multisig',
    params: {
      message: signerPersonalMessage,
      proposalId: proposalId,
      walletId: walletId,
      threshold: parsedDecryptedData.threshold,
    },
  })
  console.log('res', res)
  const parsedRes = JSON.parse(res)
  if (!parsedRes.isValid) {
    Lit.Actions.setResponse({response: JSON.stringify(parsedRes)})
    return
  }

  // modify authmethodId
  

  Lit.Actions.setResponse({response: JSON.stringify({
    success: false,
    error: 'Invalid action type',
  })})
};

export const updateWalletLitActionCode = `(${_litActionCode.toString()})();`;
