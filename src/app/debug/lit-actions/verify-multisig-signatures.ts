declare const message: string;
declare const proposalId: string;
declare const walletId: string;
declare const ethers: any;
declare const threshold: number;

const _litActionCode = async () => {  
  try {
    console.log('Input parameters:', {
      message: message,
      proposalId: proposalId,
      walletId: walletId,
      threshold,
    });
    
    const messageHash = ethers.utils.hashMessage(message);
    console.log('Message hash for verification:', messageHash);

    const apiUrl = `https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com/api/multisig/messages/signatures?proposalId=${proposalId}&walletId=${walletId}`;
    const response = await fetch(apiUrl).then((response) => response.json());
    const { signatures, publicKeys } = response.data

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
      const recoveredAddress = ethers.utils.recoverAddress(messageHash, signatures[i]);
      const expectedAddress = ethers.utils.computeAddress(publicKeys[i]);
      
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
    }
    
    const isValid = validSignaturesCount >= threshold;
    
    console.log('\nVerification summary:');
    console.log(`- Valid signatures: ${validSignaturesCount}/${signatures.length}`);
    console.log(`- Required signatures: ${threshold}`);
    console.log(`- Overall validation result: ${isValid ? 'SUCCESSFUL ✓' : 'FAILED ✗'}`);

    Lit.Actions.setResponse({
      response: JSON.stringify({
        isValid: true,
      })
    })

  } catch (error) {
    console.log(`Fatal error: ${error}`);
    Lit.Actions.setResponse({
      response: JSON.stringify({
        status: 'error',
        isValid: false,
        error: error
      })
    })
  }
};

export const verifyMultisigSignaturesLitActionCode = `(${_litActionCode.toString()})();`;
