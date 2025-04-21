// @ts-nocheck
const _litActionCode = async () => {
  const isOtpValid = otp === '123456';

  if (!isOtpValid) {
    Lit.Actions.setResponse({ response: JSON.stringify({ error: "Invalid OTP" }) });
    return;
  }

  const messageHash = ethers.utils.hashMessage('Hello, world!');
  const messageBytes = ethers.utils.arrayify(messageHash);
  
  // use Lit.Actions.signEcdsa to generate signature
  const sigShare = await Lit.Actions.signEcdsa({ 
    toSign: messageBytes, 
    publicKey, 
    sigName 
  });
};

const litActionCode = `(${_litActionCode.toString()})();`;

export default litActionCode;
