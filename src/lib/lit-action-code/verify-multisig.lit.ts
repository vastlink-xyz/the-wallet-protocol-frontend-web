// @ts-nocheck

const go = async () => {
  // const { message, signature, signerAddress } = params;
  
  try {
    const messageHash = ethers.utils.hashMessage(message);
    
    const recoveredAddress = ethers.utils.recoverAddress(messageHash, signature);
    
    const expectedAddress = ethers.utils.computeAddress(publicKey);
    
    const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
    
    console.log('isValid', isValid);
   
    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid,
      })
    })
  } catch (error) {
    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid: false,
        error: error.message,
      })
    })
  }
};

const litActionCode = `(${go.toString()})();`;

export default litActionCode;
