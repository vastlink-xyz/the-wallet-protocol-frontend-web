declare const multisigWalletId: string
declare const methodId: string
declare const code: string

declare const litActionContext: any;

const go = async () => {
  try {
    const apiBaseUrl = litActionContext.apiBaseUrl

    // 1. Fetch encrypted configuration from database
    const apiUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
    const keysResponse = await fetch(apiUrl);
    const keysData = await keysResponse.json();
    if (!keysData.success || !keysData.config) {
      throw new Error('No configuration found for this wallet');
    }

    const configData = keysData.config;
    const decryptedApiKeys = await Lit.Actions.decryptAndCombine({
      accessControlConditions: configData.accessControlConditions,
      ciphertext: configData.apiKeysCiphertext,
      dataToEncryptHash: configData.apiKeysDataToEncryptHash,
      // @ts-ignore
      authSig: null,
      chain: "ethereum",
    });

    // 4. Parse and print the decrypted data
    const apiKeysObject = JSON.parse(decryptedApiKeys);

    const projectId = apiKeysObject.projectId;
    const secret = apiKeysObject.secret;

    const response: any = await Lit.Actions.runOnce(
      { waitForResponse: true, name: 'stytchLogin' },
      async () => {
        const response = await fetch(`https://test.stytch.com/v1/otps/authenticate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(projectId + ':' + secret)
          },
          body: JSON.stringify({
            method_id: methodId,
            code: code,
          }),
        })
        const data = await response.json()
        return JSON.stringify(data)
      }
    )

    Lit.Actions.setResponse({response: response})
  } catch (error: any) {
    console.log(`❌ Debug error: ${error.message}`);
    console.log(error.stack);
    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: false,
        error: error.message,
        stack: error.stack
      })
    });
  }
};

export const litActionCodeForDebugStytchVerifyLogin = `(${go.toString()})();`;