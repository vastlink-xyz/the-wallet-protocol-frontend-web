declare const ethers: any

declare const providerType: string
declare const accessToken: string
declare const pkpTokenId: string
declare const authMethodType: string

declare const litActionContext: any

const _litActionCode = async () => {
  const apiBaseUrl = litActionContext.apiBaseUrl
  
  console.log("🔄 Starting multi-provider auth Lit Action...");

  // Validate required parameters
  if (!providerType || !accessToken || !pkpTokenId || !authMethodType) {
    console.log("❌ Missing required parameters");
    return Lit.Actions.setResponse({
      response: "false",
    });
  }

  console.log("✅ Using API base URL:", apiBaseUrl);
  console.log("✅ Using auth method type:", authMethodType);

  try {
    // Use runOnce to ensure the API call is only made once across all nodes
    console.log(`🔄 Verifying ${providerType} authentication and getting authMethodId via API...`);
    
    const verificationResult = await Lit.Actions.runOnce(
      { waitForResponse: true, name: "verifyAuthAndGetId" },
      async () => {
        const response = await fetch(`${apiBaseUrl}/api/auth/verify-and-get-auth-method-id`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            providerType,
            accessToken,
            timestamp: Date.now()
          })
        });

        if (response.ok) {
          const data = await response.json();
          return JSON.stringify(data);
        } else {
          const errorData = await response.json();
          return JSON.stringify({ 
            success: false, 
            error: errorData.error || `API verification failed with status ${response.status}` 
          });
        }
      }
    );

    const parsedResult = JSON.parse(verificationResult as any);
    console.log("✅ API verification and lookup result:", parsedResult);

    if (!parsedResult.success) {
      console.log("❌ API verification failed");
      return Lit.Actions.setResponse({
        response: "false",
      });
    }

    // Use authMethodId from API response
    console.log("✅ Using auth method ID from API:", parsedResult.authMethodId);
    
    const arrayifiedUserId = ethers.utils.arrayify(parsedResult.authMethodId);
    console.log("   - userId (after arrayify):", arrayifiedUserId);
    
    const isPermitted = await Lit.Actions.isPermittedAuthMethod({
      tokenId: pkpTokenId,
      authMethodType: ethers.utils.hexValue(authMethodType),
      userId: arrayifiedUserId
    });

    console.log("🔍 Permission check result:", isPermitted);

    if (!isPermitted) {
      console.log("❌ Auth method not permitted for this PKP");
      return Lit.Actions.setResponse({
        response: "false",
      });
    }

    console.log("✅ Auth method is permitted for this PKP");

    // Return success response
    return Lit.Actions.setResponse({
      response: "true",
    });
  } catch (error: any) {
    console.log("❌ Error during authentication:", error.message);
    console.log("❌ Error stack:", error.stack);
    return Lit.Actions.setResponse({
      response: "false",
    });
  }
};

export const litActionCodeForMultiProviderAuth = `(${_litActionCode.toString()})();`;