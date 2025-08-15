declare const ethers: any

declare const action: string // 'print_keys'
declare const multisigWalletId: string
declare const configId: string
declare const env: string
declare const devUrl: string

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

    // Execute the print_keys action
    if (action === 'print_keys') {
      console.log(`🔍 Debug: Printing API keys for wallet: ${multisigWalletId}, configId: ${configId}`);
      
      // 1. Fetch encrypted configuration from database
      const apiUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
      console.log(`📡 Fetching config from: ${apiUrl}`);
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch configuration: ${response.statusText}`);
      }
      
      const data = await response.json();
      if (!data.success || !data.config) {
        throw new Error('No configuration found for this wallet');
      }
      
      const configData = data.config;
      console.log(`✅ Configuration found: ${configData._id}`);
      
      // 2. Decrypt API Keys
      console.log('🔓 Decrypting API keys...');
      const decryptedApiKeys = await Lit.Actions.decryptAndCombine({
        accessControlConditions: configData.accessControlConditions,
        ciphertext: configData.apiKeysCiphertext,
        dataToEncryptHash: configData.apiKeysDataToEncryptHash,
        // @ts-ignore
        authSig: null,
        chain: "ethereum",
      });
      
      // 3. Decrypt IPFS IDs
      console.log('🔓 Decrypting IPFS IDs...');
      const decryptedIpfsIds = await Lit.Actions.decryptAndCombine({
        accessControlConditions: configData.accessControlConditions,
        ciphertext: configData.ipfsIdsCiphertext,
        dataToEncryptHash: configData.ipfsIdsDataToEncryptHash,
        // @ts-ignore
        authSig: null,
        chain: "ethereum",
      });
      
      // 4. Parse and print the decrypted data
      const apiKeysObject = JSON.parse(decryptedApiKeys);
      const ipfsIdsArray = JSON.parse(decryptedIpfsIds);
      
      console.log('🔑 ===== DECRYPTED API KEYS =====');
      console.log(`📊 Total keys found: ${Object.keys(apiKeysObject).length}`);
      
      // Print each API key
      for (const [key, value] of Object.entries(apiKeysObject)) {
        console.log(`🔹 Key: ${key}`);
        console.log(`🔹 Value: ${value}`);
        console.log('─────────────────────────────');
      }
      
      console.log('🆔 ===== AUTHORIZED IPFS IDS =====');
      console.log(`📊 Total IPFS IDs: ${ipfsIdsArray.length}`);
      
      // Print each IPFS ID
      ipfsIdsArray.forEach((ipfsId: string, index: number) => {
        console.log(`🔹 IPFS ID ${index + 1}: ${ipfsId}`);
      });
      
      console.log('✅ ===== DEBUG COMPLETE =====');
      
      // Return the result
      const result = {
        decryptedApiKeys: apiKeysObject,
        decryptedIpfsIds: ipfsIdsArray,
        summary: {
          totalKeys: Object.keys(apiKeysObject).length,
          totalIpfsIds: ipfsIdsArray.length,
          keyNames: Object.keys(apiKeysObject)
        },
        timestamp: new Date().toISOString()
      };

      Lit.Actions.setResponse({
        response: JSON.stringify({
          success: true,
          action: 'print_keys',
          result
        })
      });

    } else {
      throw new Error(`Unknown action: ${action}`);
    }

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

export const litActionCodeForDebugAPIKeys = `(${go.toString()})();`;