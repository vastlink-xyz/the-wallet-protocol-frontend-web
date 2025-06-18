declare const ethers: any

declare const publicKey: string
declare const toSignTransaction: any
declare const authParams: any
declare const env: string
declare const chainType: string
declare const otp: string
declare const mfaMethodId: string
declare const tokenType: string
declare const transactionAmount: string // unit is ETH or BTC

const go = async () => {
  const publicKeyForLit = publicKey.replace(/^0x/, '');

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
      apiBaseUrl = 'https://4bb5-58-152-13-66.ngrok-free.app';
      litDatilNetwork = 'datil-dev'
      break;
    case 'test':
      apiBaseUrl = 'https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com';
      litDatilNetwork = 'datil-dev'
      break;
    default:
      throw new Error(`Invalid Base URL`);
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
            authMethodId: authParams.authMethodId,
            transactionAmount,
            tokenType,
            contextType: 'personalWalletTransaction',
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
};
// 
export const litActionCodeForPersonalTransaction = `(${go.toString()})();`;
