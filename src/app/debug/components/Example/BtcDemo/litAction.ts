// @ts-nocheck

// const _litActionCode = async () => {
//   try {
//     const publicKeyForLit = publicKey.replace(/^0x/, '');
//     const sigShare = await Lit.Actions.signAndCombineEcdsa({
//       toSign,
//       publicKey: publicKeyForLit,
//       sigName: 'btcSignature',
//     });
//     Lit.Actions.setResponse({ response: sigShare });
//   } catch (error) {
//     Lit.Actions.setResponse({ response: error.message });
//   }
// };
const _litActionCode = async () => {
  try {
    const sigShare = await LitActions.signEcdsa({ toSign, publicKey, sigName: 'btcSignature' });
    Lit.Actions.setResponse({ response: 'true' });
  } catch (error) {
    Lit.Actions.setResponse({ response: error.message });
  }
};

export const btcDemoLitActionCode = `(${_litActionCode.toString()})();`;
