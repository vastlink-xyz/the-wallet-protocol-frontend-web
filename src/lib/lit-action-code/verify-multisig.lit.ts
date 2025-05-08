// @ts-nocheck
/* eslint prefer-const: "warn" */

const go = async () => {  
  try {
    console.log('Input parameters:', {
      message: message,
      proposalId: proposalId,
      walletId: walletId,
      publicKeysCount: publicKeys.length,
      requiredSignatures: requiredSignatures,
      hasPkpPublicKey: !!publicKey,
      // 
      sendTransaction: sendTransaction,
      unsignedTransaction: unsignedTransaction,
      publicKeyForLit: publicKeyForLit,
    });
    
    const messageHash = ethers.utils.hashMessage(message);
    console.log('Message hash for verification:', messageHash);

    const apiUrl = `https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com/api/multisig/messages/signatures?proposalId=${proposalId}&walletId=${walletId}`;
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
    // If validation is successful, perform signing
    if (isValid && publicKey) {
      try {
        console.log(unsignedTransaction, publicKeyForLit, chain, sendTransaction)
      
        const toSign = ethers.utils.arrayify(
          ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
        )
      
        const sig = await Lit.Actions.signAndCombineEcdsa({
          toSign,
          publicKey: publicKeyForLit,
          sigName: 'transfer-tx',
        });
      
        console.log("sig is", sig);
      
        const signedAndSerializedTx = ethers.utils.serializeTransaction(
          unsignedTransaction,
          ethers.utils.joinSignature({
              r: '0x' + JSON.parse(sig).r.substring(2),
              s: '0x' + JSON.parse(sig).s,
              v: JSON.parse(sig).v,
          })
        );
      
        if (sendTransaction) {
          const rpcProvider = new ethers.providers.JsonRpcProvider(
            await Lit.Actions.getRpcUrl({
              chain,
            })
          );
    
          const sendTxResponse = await Lit.Actions.runOnce(
            { waitForResponse: true, name: 'sendTxSender' },
            async () => {
              try {
                const txReceipt = await rpcProvider.sendTransaction(signedAndSerializedTx);
                return JSON.stringify({
                  status: 'success',
                  txReceipt
                });
              } catch (error: unknown) {
                return JSON.stringify({
                  status: 'error',
                  details: [(error as Error).message || JSON.stringify(error)]
                });
              }
            }
          );
      
          Lit.Actions.setResponse({
            response: JSON.stringify({
              status: 'success',
              isValid: true,
              sendTxResponse,
            }),
          });
        } else {
          Lit.Actions.setResponse({
            response: JSON.stringify({
              status: 'success',
              isValid: true,
              signedAndSerializedTx
            }),
          });
        }
      } catch(error) {
        Lit.Actions.setResponse({
          response: JSON.stringify({
            status: 'error',
            isValid: true,
            details: [(error as Error).message || JSON.stringify(error)]
          }),
        });
      }
    }
  } catch (error) {
    console.log(`Fatal error: ${error.message}`);
    console.log(error.stack);
    Lit.Actions.setResponse({
      response: JSON.stringify({
        status: 'error',
        isValid: false,
        error: error.message,
        stack: error.stack
      })
    })
  }
};

export const verifyMultisigLitActionCode = `(${go.toString()})();`;
