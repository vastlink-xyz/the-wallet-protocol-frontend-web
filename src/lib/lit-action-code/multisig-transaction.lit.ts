declare const ethers: any

declare const message: string
declare const proposalId: string
declare const walletId: string
declare const toSignTransaction: any
declare const transactionAmount: string // unit is ETH or BTC
declare const chainType: string
declare const env: string
declare const devUrl: string
declare const authParams: any

declare const publicKeys: string[]
declare const requiredSignatures: number
declare const publicKey: string
declare const tokenType: string
declare const pinCode: string
declare const mfaType: string
declare const mfaCode: string
declare const mfaMethodId: string

const go = async () => {  
  const publicKeyForLit = publicKey.replace(/^0x/, '');

  try {
    // verify auth token
    const res = await Lit.Actions.call({
      ipfsId: 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm',
      params: {
        ...authParams,
        publicKey,
        env,
      },
    })
    console.log('res', res)
    const parsedRes = JSON.parse(res)
    if (!parsedRes.isPermitted) {
      Lit.Actions.setResponse({response: JSON.stringify(parsedRes)})
      return
    }

    let apiBaseUrl: string;
    let litDatilNetwork: 'datil-dev' | 'datil-test' | 'datil';
    switch (env) {
      case 'dev':
        apiBaseUrl = devUrl;
        litDatilNetwork = 'datil-dev'
        break;
      case 'test':
        apiBaseUrl = 'https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com';
        litDatilNetwork = 'datil-dev'
        break;
      default:
        throw new Error(`Invalid Base URL`);
    }

    const messageHash = ethers.utils.hashMessage(message);
    console.log('Message hash for verification:', messageHash);

    const apiUrl = `${apiBaseUrl}/api/multisig/messages/signatures?proposalId=${proposalId}&walletId=${walletId}`;
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
      } catch (signatureError: any) {
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

    // If validation is not successful, return error
    if (!isValid) {
      Lit.Actions.setResponse({
        response: JSON.stringify({
          status: 'error',
          isValid: false,
        }),
      });
    }

    // Use the unified security verification API
    const securityVerificationResult = await Lit.Actions.runOnce(
      { 
        waitForResponse: true, 
        name: "verifySecurityForLitAction" 
      },
      async () => {
        const response = await fetch(`${apiBaseUrl}/api/security/verify-for-lit-action`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authParams.accessToken}`
          },
          body: JSON.stringify({ 
            transactionAmount,
            tokenType,
            contextType: 'multisigWalletTransaction',
            walletId, // Add walletId for multisig policy checking
            pinCode,
            mfaType,
            mfaCode,
            mfaMethodId
          })
        });

        if (response.ok) {
          const data = await response.json();
          return JSON.stringify(data);
        } else {
          const errorData = await response.json();
          return JSON.stringify({ success: false, error: errorData.error || 'Security verification failed' });
        }
      }
    );

    console.log('Security verification result from runOnce:', securityVerificationResult);
    
    const parsedVerificationResult = JSON.parse(securityVerificationResult as any);
    
    if (!parsedVerificationResult.success) {
      // Check if PIN is required but not provided
      if (parsedVerificationResult.requiresPIN) {
        return Lit.Actions.setResponse({ 
          response: JSON.stringify({ 
            requiresPIN: true,
            isValid,
            pinData: parsedVerificationResult.pinData,
            error: "PIN verification required"
          }) 
        });
      }
      
      // Check if MFA is required
      if (parsedVerificationResult.requiresMFA) {
        return Lit.Actions.setResponse({ 
          response: JSON.stringify({ 
            requiresMFA: true,
            isValid,
            availableMFAOptions: parsedVerificationResult.availableMFAOptions,
            error: "MFA verification required"
          }) 
        });
      }
      
      // Other security verification errors
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          isValid,
          error: parsedVerificationResult.error || "Security verification failed"
        }) 
      });
    }

    try {
      if (chainType === 'EVM') {
        const sig = await Lit.Actions.signAndCombineEcdsa({
          toSign: toSignTransaction,
          publicKey: publicKeyForLit,
          sigName: 'transfer-tx',
        }) as any;
      
        console.log("sig is", sig);
    
        Lit.Actions.setResponse({
          response: JSON.stringify({
            status: 'success',
            isValid: true,
            sig,
          }),
        });
      } else {
        const sig = await Lit.Actions.signEcdsa({
          toSign: toSignTransaction,
          publicKey,
          sigName: 'btcSignatures',
        }) as any;
    
        Lit.Actions.setResponse({
          response: JSON.stringify({
            status: 'success',
            isValid: true,
            sig,
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
  } catch (error: any) {
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

export const litActionCodeForMultisigTransaction = `(${go.toString()})();`;
