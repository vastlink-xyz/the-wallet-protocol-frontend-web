declare const ethers: any

declare const publicKey: string
declare const toSignTransaction: any
declare const authParams: any
declare const env: string
declare const devUrl: string
declare const chainType: string
declare const tokenType: string
declare const transactionAmount: string // unit is ETH or BTC

// New security verification parameters
declare const pinCode: string // PIN code if PIN verification is required
declare const mfaType: string // 'WHATSAPP_OTP' | 'TOTP' | 'EMAIL_OTP'
declare const mfaCode: string // OTP/TOTP code for MFA verification
declare const mfaMethodId: string // Stytch method ID for WhatsApp/Email OTP

const go = async () => {
  const publicKeyForLit = publicKey.replace(/^0x/, '');

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

  // Security verification using centralized API
  const securityVerifyResult = await Lit.Actions.runOnce(
    { 
      waitForResponse: true, 
      name: "securityVerification" 
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
          contextType: 'personalWalletTransaction',
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
        return JSON.stringify({ success: false, error: errorData.error || 'Verification failed' });
      }
    }
  );

  console.log('Security verification result:', securityVerifyResult);
  
  // Handle the case where securityVerifyResult might already be a parsed object or a string
  let verifyData;
  if (typeof securityVerifyResult === 'string') {
    try {
      verifyData = JSON.parse(securityVerifyResult);
    } catch (error) {
      console.error('Failed to parse securityVerifyResult as JSON:', error);
      console.log('Raw securityVerifyResult:', securityVerifyResult);
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          success: false, 
          error: 'Invalid security verification response format' 
        }) 
      });
    }
  } else {
    verifyData = securityVerifyResult;
  }

  // Handle verification results
  if (!verifyData.success) {
    if (verifyData.requiresPIN) {
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          requiresPIN: true,
          pinData: verifyData.pinData,
          error: verifyData.error
        }) 
      });
    }

    if (verifyData.requiresMFA) {
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          requiresMFA: true,
          availableMFAOptions: verifyData.availableMFAOptions,
          pinData: verifyData.pinData, // Include PIN data if PIN was provided
          error: verifyData.error
        }) 
      });
    }

    // Other errors
    return Lit.Actions.setResponse({ 
      response: JSON.stringify({ 
        error: verifyData.error 
      }) 
    });
  }

  // PIN verification in lit action (if PIN was provided and enabled)
  if (pinCode && verifyData.pinData) {
    console.log('Verifying PIN using lit action...');
    
    const pinVerificationResult = await Lit.Actions.call({
      ipfsId: 'QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5', // PIN verification lit action
      params: {
        accessControlConditions: verifyData.pinData.accessControlConditions,
        ciphertext: verifyData.pinData.encryptedPinHash,
        dataToEncryptHash: verifyData.pinData.dataToEncryptHash,
        providedPin: pinCode
      }
    });

    console.log('PIN verification result:', pinVerificationResult);

    // The PIN verification Lit Action returns a hash string, not a JSON object
    // We need to check if the returned hash matches the expected decrypted PIN hash
    let isValidPin = false;
    
    if (typeof pinVerificationResult === 'string') {
      // The PIN verification result is the decrypted PIN hash
      // We need to compare it with the hash of the provided PIN
      const providedPinBuffer = new TextEncoder().encode(pinCode);
      const providedPinHashBuffer = await crypto.subtle.digest('SHA-256', providedPinBuffer);
      const providedPinHash = Array.from(new Uint8Array(providedPinHashBuffer))
        .map(b => b.toString(16).padStart(2, '0')).join('');
      
      console.log('Decrypted PIN hash from Lit Action:', pinVerificationResult);
      console.log('Computed hash of provided PIN:', providedPinHash);
      
      isValidPin = pinVerificationResult === providedPinHash;
    } else {
      // Fallback: try to parse as JSON if it's an object
      try {
        const pinResult = typeof pinVerificationResult === 'object' ? pinVerificationResult : JSON.parse(pinVerificationResult);
        isValidPin = pinResult.isValid === true;
      } catch (error) {
        console.error('Failed to parse PIN verification result:', error);
        isValidPin = false;
      }
    }
    
    if (!isValidPin) {
      return Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          error: "Invalid PIN" 
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
};
// 
export const litActionCodeForPersonalTransaction = `(${go.toString()})();`;
