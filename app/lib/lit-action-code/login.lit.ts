declare const multisigWalletId: string
declare const env: string
declare const devUrl: string
declare const userEmail: string

const go = async () => {
  try {
    let apiBaseUrl: string;
    switch (env) {
      case 'dev':
        apiBaseUrl = devUrl;
        break;
      case 'test':
        apiBaseUrl = 'https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com';
        break;
      default:
        throw new Error(`Invalid environment: ${env}`);
    }

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
        const response = await fetch(`https://test.stytch.com/v1/otps/email/login_or_create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(projectId + ':' + secret)
          },
          body: JSON.stringify({
            email: userEmail,
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

export const litActionCodeForStytchLogin = `(${go.toString()})();`;