// @ts-nocheck

const go = async () => {
  // const { message, signatures, publicKeys, requiredSignatures, messageToSign, publicKey } = params;
  
  try {
    const messageHash = ethers.utils.hashMessage(message);
    
    // Ensure signatures and public keys arrays have the same length
    if (signatures.length !== publicKeys.length) {
      throw new Error('Signatures and public keys arrays must have the same length');
    }
    
    // Track validation results
    const validationResults = [];
    let validSignaturesCount = 0;
    
    // Verify each signature
    for (let i = 0; i < signatures.length; i++) {
      const recoveredAddress = ethers.utils.recoverAddress(messageHash, signatures[i]);
      const expectedAddress = ethers.utils.computeAddress(publicKeys[i]);
      const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
      
      if (isValid) {
        validSignaturesCount++;
      }
      
      validationResults.push({
        address: recoveredAddress,
        isValid
      });
    }
    
    // Check if the required number of valid signatures is reached
    // If requiredSignatures is not specified, all signatures must be valid by default
    const requiredCount = requiredSignatures || signatures.length;
    const isValid = validSignaturesCount >= requiredCount;
    
    console.log('isValid', isValid, 'validSignaturesCount', validSignaturesCount);
    
    let pkpSignature;
    // If validation is successful and messageToSign is provided, perform signing
    if (isValid && messageToSign && publicKey) {
      // Create signature using the PKP
      const messageHashToSign = ethers.utils.hashMessage(messageToSign);
      const messageBytes = ethers.utils.arrayify(messageHash);
      const sigShare = await Lit.Actions.signEcdsa({
        toSign: messageBytes,
        publicKey,
        sigName: "pkpSignature"
      });
    }
   
    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid,
        validSignaturesCount,
        totalSignatures: signatures.length,
        requiredSignatures: requiredCount,
        signatures: validationResults,
        pkpSignature: pkpSignature || null,
        messageToSign: messageToSign || null
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
