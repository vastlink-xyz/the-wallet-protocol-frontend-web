declare const accessControlConditions: any
declare const ciphertext: string
declare const dataToEncryptHash: string
declare const authSig: any

const _litActionCode = async () => {
  const decryptedData = await Lit.Actions.decryptAndCombine({
    accessControlConditions,
    ciphertext,
    dataToEncryptHash,
    // @ts-ignore
    authSig: null, // Use the authSig from the session
    chain: "ethereum",
  });
  
  // Return the decrypted data
  Lit.Actions.setResponse({ response: decryptedData });
};

export const litActionCodeForDecryptAndCombine = `(${_litActionCode.toString()})();`;
