// @ts-nocheck
const _litActionCode = async () => {
  console.log(unsignedTransaction, publicKeyForLit)
  const toSign = ethers.utils.arrayify(
    ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
  )

  const signature = await Lit.Actions.signAndCombineEcdsa({
    toSign,
    publicKey: publicKeyForLit,
    sigName: 'transfer-tx',
  });

  console.log("signature is", signature);

  Lit.Actions.setResponse({
    response: JSON.stringify({
      status: 'success',
      signature,
    }),
  });
};

const litActionCode = `(${_litActionCode.toString()})();`;

export default litActionCode
