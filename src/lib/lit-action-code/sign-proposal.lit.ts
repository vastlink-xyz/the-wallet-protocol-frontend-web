// @ts-nocheck
const _litActionCode = async () => {
  const messageHash = ethers.utils.hashMessage(message);
  const messageBytes = ethers.utils.arrayify(messageHash);
  
  // use Lit.Actions.signEcdsa to generate signature
  const sigShare = await Lit.Actions.signEcdsa({ 
    toSign: messageBytes, 
    publicKey, 
    sigName 
  });
  
  // return sigShare
  return sigShare;
};

const litActionCode = `(${_litActionCode.toString()})();`;

export default litActionCode;
