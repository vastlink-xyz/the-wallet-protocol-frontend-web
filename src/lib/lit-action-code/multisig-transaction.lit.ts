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
  const multiProviderAuthIpfsId = 'QmUALzmKCewVAHvjgqiu3UKCYXESEbZkjJiXVkjUV9iPUj' 

  try {
    // verify auth token
    const authResult = await Lit.Actions.call({
      ipfsId: multiProviderAuthIpfsId,
      params: {
        providerType: authParams.providerType,
        accessToken: authParams.accessToken,
        pkpTokenId: authParams.pkpTokenId,
        authMethodType: authParams.authMethodType,
        env,
        devUrl,
      },
    })
    console.log('Multi-provider auth result:', authResult)
    
    if (authResult !== 'true') {
      Lit.Actions.setResponse({response: JSON.stringify({isPermitted: false})})
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

    // Use unified security verification Lit Action
    const securityVerificationIpfsId = 'QmQ2uYBBDWvRuBG8M1ruF5vdpxUtKGQJ6XYk8FV9qwrFcf'
    const securityVerificationResult = await Lit.Actions.call({
      ipfsId: securityVerificationIpfsId,
      params: {
        authParams,
        env,
        devUrl,
        transactionAmount,
        tokenType,
        contextType: 'multisigWalletTransaction',
        walletId,
        pinCode,
        mfaType,
        mfaCode,
        mfaMethodId
      }
    });

    console.log('Unified security verification result:', securityVerificationResult);
    
    // Parse the security verification result
    let verifyData;
    if (typeof securityVerificationResult === 'string') {
      try {
        verifyData = JSON.parse(securityVerificationResult);
      } catch (error) {
        console.error('Failed to parse security verification result:', error);
        return Lit.Actions.setResponse({ 
          response: JSON.stringify({ 
            success: false,
            isValid,
            error: 'Invalid security verification response format' 
          }) 
        });
      }
    } else {
      verifyData = securityVerificationResult;
    }

    // Handle verification results - if not successful, return the requirement to frontend
    if (!verifyData.success) {
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({
          ...verifyData,
          isValid
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
