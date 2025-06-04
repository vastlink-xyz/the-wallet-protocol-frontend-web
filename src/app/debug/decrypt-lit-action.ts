declare const ethers: any

declare const accessControlConditions: any
declare const ciphertext: string
declare const dataToEncryptHash: string

const _litActionCode = async () => {
  const decryptedData = await Lit.Actions.decryptAndCombine({
    accessControlConditions: accessControlConditions,
    ciphertext,
    dataToEncryptHash,
    // @ts-ignore
    authSig: null,
    chain: "ethereum",
  });

  return Lit.Actions.setResponse({response: decryptedData})
};

export const decryptDebugLitActionCode = `(${_litActionCode.toString()})();`;
