// @ts-nocheck

const go = async () => {
  // const { message, signatures, publicKeys, requiredSignatures, messageToSign, publicKey } = params;
  
  try {
    console.log('Input parameters:', {
      message: message,
      proposalId: proposalId,
      walletId: walletId,
      publicKeysCount: publicKeys.length,
      requiredSignatures: requiredSignatures,
      hasMessageToSign: !!messageToSign,
      hasPkpPublicKey: !!publicKey
    });
    
    const messageHash = ethers.utils.hashMessage(message);
    console.log('Message hash for verification:', messageHash);

    const apiUrl = `https://71e6-58-152-13-49.ngrok-free.app/api/multisig/messages/signatures?proposalId=${proposalId}&walletId=${walletId}`;
    const response = await fetch(apiUrl).then((response) => response.json());
    const signatures = response.data

    console.log('signatures is', signatures)
    
    // Ensure signatures and public keys arrays have the same length
    if (signatures.length !== publicKeys.length) {
      throw new Error('Signatures and public keys arrays must have the same length');
    }
    
    // Track validation results
    const validationResults = [];
    let validSignaturesCount = 0;
    
    // Verify each signature
    for (let i = 0; i < signatures.length; i++) {
      try {
        console.log(`\nVerifying signature ${i+1}/${signatures.length}:`);
        console.log(`- Signature: ${signatures[i]}`);
        console.log(`- Public key: ${publicKeys[i]}`);
        
        // check signature format
        if (!signatures[i].startsWith('0x')) {
          console.log(`Warning: Signature ${i+1} does not start with 0x prefix`);
        }
        
        const recoveredAddress = ethers.utils.recoverAddress(messageHash, signatures[i]);
        const expectedAddress = ethers.utils.computeAddress(publicKeys[i]);
        
        console.log(`- Recovered address from signature: ${recoveredAddress}`);
        console.log(`- Expected address from public key: ${expectedAddress}`);
        
        const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
        console.log(`- Validation result: ${isValid ? 'VALID ✓' : 'INVALID ✗'}`);
        
        if (isValid) {
          validSignaturesCount++;
        }
        
        validationResults.push({
          address: recoveredAddress,
          expectedAddress: expectedAddress,
          isValid
        });
      } catch (signatureError) {
        console.log(`- Error verifying signature ${i+1}: ${signatureError.message}`);
        validationResults.push({
          error: signatureError.message,
          isValid: false
        });
      }
    }
    
    // Check if the required number of valid signatures is reached
    // If requiredSignatures is not specified, all signatures must be valid by default
    const requiredCount = requiredSignatures || signatures.length;
    const isValid = validSignaturesCount >= requiredCount;
    
    console.log('\nVerification summary:');
    console.log(`- Valid signatures: ${validSignaturesCount}/${signatures.length}`);
    console.log(`- Required signatures: ${requiredCount}`);
    console.log(`- Overall validation result: ${isValid ? 'SUCCESSFUL ✓' : 'FAILED ✗'}`);
    
    let pkpSignature = null;
    // If validation is successful and messageToSign is provided, perform signing
    if (isValid && messageToSign && publicKey) {
      console.log('\nValidation successful, attempting to sign with PKP');
      console.log(`- Message to sign: "${messageToSign}"`);
      console.log(`- PKP public key: ${publicKey}`);
      
      try {
        // Create signature using the PKP
        const messageHashToSign = ethers.utils.hashMessage(messageToSign);
        const messageBytes = ethers.utils.arrayify(messageHashToSign);
        
        console.log(`- Message hash for signing: ${messageHashToSign}`);
        
        const sigShare = await Lit.Actions.signEcdsa({
          toSign: messageBytes,
          publicKey,
          sigName: "pkpSignature"
        });

        pkpSignature = sigShare
        console.log(`- PKP signing successed: ${pkpSignature}`)
        
      } catch (signingError) {
        console.log(`- PKP signing failed: ${signingError.message}`);
        throw signingError;
      }
    }
   
    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid,
        validSignaturesCount,
        totalSignatures: signatures.length,
        requiredSignatures: requiredCount,
        signatures: validationResults,
        pkpSignature: pkpSignature,
        messageToSign: messageToSign || null
      })
    })
  } catch (error) {
    console.log(`Fatal error: ${error.message}`);
    console.log(error.stack);
    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid: false,
        error: error.message,
        stack: error.stack
      })
    })
  }
};

const litActionCode = `(${go.toString()})();`;

export default litActionCode;
