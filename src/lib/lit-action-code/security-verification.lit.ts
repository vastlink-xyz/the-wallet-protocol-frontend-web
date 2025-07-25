declare const authParams: any
declare const env: string
declare const devUrl: string
declare const transactionAmount: string
declare const tokenType: string
declare const contextType: string
declare const walletId: string
declare const pinCode: string
declare const mfaType: string
declare const mfaCode: string
declare const mfaMethodId: string

const securityVerification = async () => {
  try {
    // Determine API base URL based on environment
    let apiBaseUrl: string;
    switch (env) {
      case 'dev':
        apiBaseUrl = devUrl;
        break;
      case 'test':
        apiBaseUrl = 'https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com';
        break;
      default:
        throw new Error(`Invalid Base URL for environment: ${env}`);
    }

    console.log('Starting unified security verification...', {
      transactionAmount,
      tokenType,
      contextType,
      walletId,
      hasPinCode: !!pinCode,
      hasMfaCode: !!mfaCode,
      mfaType
    });

    // Step 1: Call the backend security verification API
    const securityVerificationResult = await Lit.Actions.runOnce(
      { 
        waitForResponse: true, 
        name: "unifiedSecurityVerification" 
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
            contextType,
            walletId,
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
          return JSON.stringify({ 
            success: false, 
            error: errorData.error || 'Security verification failed' 
          });
        }
      }
    );

    console.log('Backend security verification result:', securityVerificationResult);
    
    const parsedResult = JSON.parse(securityVerificationResult as any);
    
    // Step 2: Handle verification requirements from backend
    if (!parsedResult.success) {
      // Check if PIN is required but not provided
      if (parsedResult.requiresPIN) {
        return Lit.Actions.setResponse({
          response: JSON.stringify({
            success: false,
            requiresPIN: true,
            pinData: parsedResult.pinData,
            error: parsedResult.error || "PIN verification required"
          })
        });
      }
      
      // Check if MFA is required but not provided
      if (parsedResult.requiresMFA) {
        return Lit.Actions.setResponse({
          response: JSON.stringify({
            success: false,
            requiresMFA: true,
            availableMFAOptions: parsedResult.availableMFAOptions,
            // Include PIN data if PIN was provided for frontend state management
            ...(parsedResult.pinData ? { pinData: parsedResult.pinData } : {}),
            error: parsedResult.error || "MFA verification required"
          })
        });
      }
      
      // Other backend verification errors
      return Lit.Actions.setResponse({
        response: JSON.stringify({
          success: false,
          error: parsedResult.error || "Security verification failed"
        })
      });
    }

    // Step 3: Backend verification passed, now verify PIN in Lit Action if provided
    if (pinCode && parsedResult.pinData) {
      console.log('Verifying PIN using Lit Action...');
      
      try {
        const pinVerificationResult = await Lit.Actions.call({
          ipfsId: 'QmX3zpPjXTc9VH1fVETtSXELQ2Soynft68sYWo5MjXnFJ5', // PIN verification lit action
          params: {
            accessControlConditions: parsedResult.pinData.accessControlConditions,
            ciphertext: parsedResult.pinData.encryptedPinHash,
            dataToEncryptHash: parsedResult.pinData.dataToEncryptHash,
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
              success: false,
              error: "Invalid PIN"
            })
          });
        }
        
        console.log('PIN verification successful');
      } catch (error) {
        console.error('PIN verification error:', error);
        return Lit.Actions.setResponse({
          response: JSON.stringify({
            success: false,
            error: "PIN verification failed"
          })
        });
      }
    }

    // Step 4: All verifications passed
    console.log('All security verifications completed successfully');
    
    return Lit.Actions.setResponse({
      response: JSON.stringify({
        success: true,
        message: 'All security verifications completed',
        // Return PIN data for potential use in calling Lit Action
        ...(parsedResult.pinData ? { pinData: parsedResult.pinData } : {})
      })
    });

  } catch (error: any) {
    console.error('Error in unified security verification:', error);
    return Lit.Actions.setResponse({
      response: JSON.stringify({
        success: false,
        error: error.message || 'Security verification failed'
      })
    });
  }
};

export const litActionCodeForSecurityVerification = `(${securityVerification.toString()})();`;