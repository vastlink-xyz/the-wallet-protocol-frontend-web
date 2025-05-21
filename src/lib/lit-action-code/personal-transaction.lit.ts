declare const ethers: any

declare const publicKey: string
declare const unsignedTransaction: any
declare const authParams: any
declare const env: string
declare const chain: string
declare const otp: string
declare const mfaMethodId: string
declare const tokenType: string

const go = async () => {
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

  const valueInWei = ethers.BigNumber.from(unsignedTransaction.value);
  const valueInEth = ethers.utils.formatEther(valueInWei);

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
            transactionAmount: valueInEth,
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
    const publicKeyForLit = publicKey.replace(/^0x/, '');

    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
    )
  
    const sig = await Lit.Actions.signAndCombineEcdsa({
      toSign,
      publicKey: publicKeyForLit,
      sigName: 'transfer-tx',
    }) as any;
  
    console.log("sig is", sig);
  
    const signedAndSerializedTx = ethers.utils.serializeTransaction(
      unsignedTransaction,
      ethers.utils.joinSignature({
          r: '0x' + JSON.parse(sig).r.substring(2),
          s: '0x' + JSON.parse(sig).s,
          v: JSON.parse(sig).v,
      })
    );
  
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

export const personalTransactionLitActionCode = `(${go.toString()})();`;
