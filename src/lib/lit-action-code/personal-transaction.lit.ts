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
  const securityVerificationIpfsId = 'QmQ2uYBBDWvRuBG8M1ruF5vdpxUtKGQJ6XYk8FV9qwrFcf'
  const publicKeyForLit = publicKey.replace(/^0x/, '');

  // verify auth using multi-provider authentication
  const multiProviderAuthIpfsId = 'QmUALzmKCewVAHvjgqiu3UKCYXESEbZkjJiXVkjUV9iPUj' 

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

  // Use unified security verification Lit Action
  const securityVerificationResult = await Lit.Actions.call({
    ipfsId: securityVerificationIpfsId,
    params: {
      authParams,
      env,
      devUrl,
      transactionAmount,
      tokenType,
      contextType: 'personalWalletTransaction',
      walletId: '', // Personal wallet doesn't have walletId
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
      response: JSON.stringify(verifyData) 
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
};
// 
export const litActionCodeForPersonalTransaction = `(${go.toString()})();`;
