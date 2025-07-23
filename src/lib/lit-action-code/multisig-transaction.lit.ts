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
declare const otp: string
declare const mfaMethodId: string

const go = async () => {  
  const publicKeyForLit = publicKey.replace(/^0x/, '');

  try {
    // verify auth token
    const res = await Lit.Actions.call({
      ipfsId: 'QmNcUQ4jqnnjNue8T5RNekSQ2numbqshSiyXCnZi73QZ1u',
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

    if (otp) {
      // Verify OTP
      // Use runOnce to ensure OTP verification only happens once
      const verificationResult = await Lit.Actions.runOnce(
        { 
          waitForResponse: true, 
          name: "verifyOtp" 
        },
        async () => {
          const response = await fetch(`${apiBaseUrl}/api/mfa/whatsapp/verify-code`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authParams.accessToken}`
            },
            body: JSON.stringify({ 
              method_id: mfaMethodId, 
              code: otp, 
            })
          });

          if (response.ok) {
            const data = await response.json();
            return data.success
          } else {
            const errorData = await response.json();
            return false
          }
        }
      );

      console.log('verifyOtp result from runOnce:', verificationResult);

      if ((verificationResult as any) !== 'true') {
        return Lit.Actions.setResponse({ 
          response: JSON.stringify({ 
            isValid,
            error: "Invalid OTP or verification failed" 
          }) 
        });
      }
    } else {
      // If the OTP is empty (e.g., on the first attempt), return an error to trigger the MFA flow on the frontend.
      const needMfa = await Lit.Actions.runOnce(
        { 
          waitForResponse: true, 
          name: "checkTransactionPolicy" 
        },
        async () => {
          const response = await fetch(`${apiBaseUrl}/api/mfa/check-policy`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authParams.accessToken}`,
            },
            body: JSON.stringify({
              walletId,
              transactionAmount,
              contextType: 'multisigWalletTransaction',
              tokenType,
            })
          });
          const data = await response.json();
          if (data.requiresMfa) {
            return 'true';
          }
        }
      );

      console.log('checkTransactionPolicy result from runOnce:', needMfa);

      if ((needMfa as any) === 'true') {
        return Lit.Actions.setResponse({ 
          response: JSON.stringify({ 
            requireMFA: true,
            isValid,
            error: "Daily limit exceeded"
          }) 
        });
      }
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
