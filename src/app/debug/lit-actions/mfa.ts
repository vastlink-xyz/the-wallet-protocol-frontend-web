// @ts-nocheck
const _litActionCode = async () => {
  try {
    // Use runOnce to ensure OTP verification only happens once
    const verificationResult = await Lit.Actions.runOnce(
      { 
        waitForResponse: true, 
        name: "verifyOtp" 
      },
      async () => {
        const response = await fetch(`https://e5d6-1-168-164-238.ngrok-free.app/lit/verify-otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            email, 
            otp 
          })
        });
        const data = await response.json();
        return data.success;
      }
    );

    console.log('Verification result from runOnce:', verificationResult);

    if (verificationResult !== 'true') {
      Lit.Actions.setResponse({ 
        response: JSON.stringify({ 
          error: "Invalid OTP or verification failed" 
        }) 
      });
      return;
    }

    const messageHash = ethers.utils.hashMessage('Hello, world!');
    const messageBytes = ethers.utils.arrayify(messageHash);
    
    // use Lit.Actions.signEcdsa to generate signature
    const sigShare = await Lit.Actions.signEcdsa({ 
      toSign: messageBytes, 
      publicKey, 
      sigName 
    });

    Lit.Actions.setResponse({ 
      response: JSON.stringify({ 
        success: true, 
        sigShare 
      }) 
    });
  } catch (error) {
    console.error('Error in Lit Action:', error);
    Lit.Actions.setResponse({ 
      response: JSON.stringify({ 
        error: "Failed to execute Lit Action",
        details: error.message 
      }) 
    });
  }
};

export const mfaLitActionCode = `(${_litActionCode.toString()})();`;
