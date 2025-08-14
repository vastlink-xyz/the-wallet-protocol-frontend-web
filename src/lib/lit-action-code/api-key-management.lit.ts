declare const ethers: any

declare const action: string // 'decrypt', 'execute_proposal'
declare const multisigWalletId: string
declare const configId: string
declare const proposalId: string
declare const proposalData: any
declare const env: string
declare const devUrl: string
declare const authParams: any

// For signature verification in execute_proposal only
declare const message: string

const go = async () => {
  const multiProviderAuthIpfsId = 'QmUALzmKCewVAHvjgqiu3UKCYXESEbZkjJiXVkjUV9iPUj'

  try {
    // Verify auth token for all actions
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
      Lit.Actions.setResponse({response: JSON.stringify({success: false, error: 'Authentication failed'})})
      return
    }

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

    // Execute the requested action
    let result;
    
    switch (action) {
      case 'decrypt': {
        console.log(`Decrypting configuration for wallet: ${multisigWalletId}, configId: ${configId}`);
        
        // 1. Fetch encrypted configuration from database
        const apiUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch configuration: ${response.statusText}`);
        }
        
        const data = await response.json();
        if (!data.success || !data.config) {
          throw new Error('No configuration found for this wallet');
        }
        
        const configData = data.config;
        
        // 2. Decrypt API Keys
        const decryptedApiKeys = await Lit.Actions.decryptAndCombine({
          accessControlConditions: configData.accessControlConditions,
          ciphertext: configData.apiKeysCiphertext,
          dataToEncryptHash: configData.apiKeysDataToEncryptHash,
          // @ts-ignore
          authSig: null,
          chain: "ethereum",
        });
        
        // 3. Decrypt IPFS IDs
        const decryptedIpfsIds = await Lit.Actions.decryptAndCombine({
          accessControlConditions: configData.accessControlConditions,
          ciphertext: configData.ipfsIdsCiphertext,
          dataToEncryptHash: configData.ipfsIdsDataToEncryptHash,
          // @ts-ignore
          authSig: null,
          chain: "ethereum",
        });
        
        // 4. Parse and return the decrypted data
        const apiKeysObject = JSON.parse(decryptedApiKeys);
        const ipfsIdsArray = JSON.parse(decryptedIpfsIds);
        
        result = {
          decryptedApiKeys: apiKeysObject,
          decryptedIpfsIds: ipfsIdsArray,
          timestamp: new Date().toISOString()
        };
        break;
      }
      
      case 'execute_proposal': {
        console.log(`Executing API Keys proposal: ${proposalId} for wallet: ${multisigWalletId}`);
        
        if (!proposalData) {
          throw new Error('Proposal data is required for execution');
        }
        
        // Verify multisig signatures before executing proposal
        if (message) {
          console.log('Verifying multisig signatures...');
          
          // First, get the wallet's real threshold and signers from the database
          console.log(`Fetching wallet information for wallet: ${multisigWalletId}`);
          const walletApiUrl = `${apiBaseUrl}/api/multisig?id=${multisigWalletId}`;
          const walletResponse = await fetch(walletApiUrl);
          
          if (!walletResponse.ok) {
            throw new Error(`Failed to fetch wallet information: ${walletResponse.statusText}`);
          }
          
          const walletData = await walletResponse.json();
          if (!walletData.success || !walletData.data) {
            throw new Error('Wallet not found or invalid wallet data');
          }
          
          const wallet = walletData.data;
          const walletThreshold = wallet.threshold;
          const walletSigners = wallet.signers || [];
          
          // Build publicKeys from database signers data
          const publicKeys = walletSigners.map((signer: any) => signer.publicKey).filter(Boolean);
          
          // Security validation
          if (!walletThreshold || walletThreshold < 1 || walletThreshold > publicKeys.length) {
            throw new Error(`Invalid wallet threshold: ${walletThreshold}. Must be between 1 and ${publicKeys.length}`);
          }
          
          if (publicKeys.length === 0) {
            throw new Error('No valid signers found in wallet configuration');
          }
          
          console.log(`Wallet info: ${publicKeys.length} signers, threshold: ${walletThreshold}`);
          console.log('Signers public keys from database:', publicKeys.map((pk: string) => pk.slice(0, 10) + '...'));
          
          const messageHash = ethers.utils.hashMessage(message);
          console.log('Message hash for verification:', messageHash);

          const apiUrl = `${apiBaseUrl}/api/api-keys-proposals/${proposalId}/signatures`;
          const response = await fetch(apiUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch signatures: ${response.statusText}`);
          }
          
          const signaturesData = await response.json();
          const signatures = signaturesData.data || signaturesData.signatures || [];

          console.log('Signatures retrieved:', signatures);
          
          // Handle case where signatures array might be shorter than public keys
          let validSignaturesCount = 0;
          
          // Verify each signature (only check valid signatures, skip empty ones)
          for (let i = 0; i < Math.min(signatures.length, publicKeys.length); i++) {
            try {
              console.log(`\\nVerifying signature ${i+1}/${signatures.length}:`);
              console.log(`- Signature: ${signatures[i]}`);
              console.log(`- Public key: ${publicKeys[i]}`);
              
              // check signature format and skip empty ones
              if (!signatures[i] || signatures[i] === '' || signatures[i] === '0x') {
                console.log(`Skipping empty signature ${i+1}`);
                continue;
              }
              
              const recoveredAddress = ethers.utils.recoverAddress(messageHash, signatures[i]);
              const expectedAddress = ethers.utils.computeAddress(publicKeys[i]);
              
              console.log(`- Recovered address from signature: ${recoveredAddress}`);
              console.log(`- Expected address from public key: ${expectedAddress}`);
              
              const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
              console.log(`- Validation result: ${isValid ? 'VALID ✓' : 'INVALID ✗'}`);
              
              if (isValid) {
                validSignaturesCount++;
              }
            } catch (signatureError: any) {
              console.log(`- Error verifying signature ${i+1}: ${signatureError.message}`);
            }
          }
          
          // Use the wallet's real threshold (not external parameter)
          const requiredCount = walletThreshold;
          const hasEnoughSignatures = validSignaturesCount >= requiredCount;

          console.log(`Valid signatures: ${validSignaturesCount}/${publicKeys.length}, Required by wallet: ${requiredCount}`);
          
          // If validation is not successful, return error
          if (!hasEnoughSignatures) {
            Lit.Actions.setResponse({
              response: JSON.stringify({
                success: false,
                error: `Insufficient valid signatures. Got ${validSignaturesCount}, wallet requires ${requiredCount}`,
                validSignaturesCount,
                requiredCount,
                walletThreshold,
                signersCount: publicKeys.length
              }),
            });
            return;
          }
          
          console.log('✓ Multisig signature verification passed with wallet threshold and database signers');
        } else {
          console.log('No signature verification required for this action');
        }
        
        const { type, newApiKeys, newIpfsIds } = proposalData;
        
        // Generate new access control conditions based on new IPFS IDs
        const generateAccessControlConditions = (ipfsIds: string[]) => {
          if (!ipfsIds || ipfsIds.length === 0) return [];
          
          if (ipfsIds.length === 1) {
            return [{
              conditionType: 'evmBasic',
              contractAddress: '',
              standardContractType: '',
              chain: 'ethereum',
              method: '',
              parameters: [':currentActionIpfsId'],
              returnValueTest: {
                comparator: '=',
                value: ipfsIds[0]
              }
            }];
          }
          
          return ipfsIds.flatMap((ipfsId: string, index: number) => {
            const condition = {
              conditionType: 'evmBasic',
              contractAddress: '',
              standardContractType: '',
              chain: 'ethereum',
              method: '',
              parameters: [':currentActionIpfsId'],
              returnValueTest: {
                comparator: '=',
                value: ipfsId
              }
            };
            
            return index < ipfsIds.length - 1 
              ? [condition, { operator: 'or' }]
              : [condition];
          });
        };
        
        if (type === 'UPDATE_API_KEYS' && newApiKeys) {
          // Get current configuration to use existing access control conditions
          const currentConfigUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
          const currentConfigResponse = await fetch(currentConfigUrl);
          const currentConfig = await currentConfigResponse.json();
          
          if (!currentConfig.success || !currentConfig.config) {
            throw new Error('Current configuration not found');
          }
          
          // Encrypt new API keys with current access control conditions
          const apiKeysString = JSON.stringify(newApiKeys);
          const encryptedApiKeys = await Lit.Actions.encrypt({
            // @ts-ignore
            accessControlConditions: currentConfig.config.accessControlConditions,
            to_encrypt: apiKeysString,
          });
          
          // Update configuration with new encrypted API keys
          const updateData = {
            _id: currentConfig.config._id,
            multisigWalletId,
            apiKeysCiphertext: encryptedApiKeys.ciphertext,
            apiKeysDataToEncryptHash: encryptedApiKeys.dataToEncryptHash,
            ipfsIdsCiphertext: currentConfig.config.ipfsIdsCiphertext,
            ipfsIdsDataToEncryptHash: currentConfig.config.ipfsIdsDataToEncryptHash,
            accessControlConditions: currentConfig.config.accessControlConditions,
            lastModifiedBy: 'proposal_execution'
          };
          
          const saveResponse = await fetch(`${apiBaseUrl}/api/api-keys-config`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
          });
          
          if (!saveResponse.ok) {
            throw new Error('Failed to save updated API keys configuration');
          }
          
          result = {
            message: 'API Keys updated successfully',
            type: 'UPDATE_API_KEYS',
            timestamp: new Date().toISOString()
          };
          
        } else if (type === 'UPDATE_IPFS_IDS' && newIpfsIds) {
          // Encrypt new IPFS IDs and update access control conditions
          const ipfsIdsString = JSON.stringify(newIpfsIds);
          const newAccessControlConditions = generateAccessControlConditions(newIpfsIds);
          
          const encryptedIpfsIds = await Lit.Actions.encrypt({
            // @ts-ignore
            accessControlConditions: newAccessControlConditions,
            to_encrypt: ipfsIdsString,
          });
          
          // Get current configuration to preserve API Keys
          const currentConfigUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
          const currentConfigResponse = await fetch(currentConfigUrl);
          const currentConfig = await currentConfigResponse.json();
          
          if (!currentConfig.success || !currentConfig.config) {
            throw new Error('Current configuration not found');
          }
          
          // Also need to re-encrypt API keys with new access control conditions
          const decryptedApiKeys = await Lit.Actions.decryptAndCombine({
            accessControlConditions: currentConfig.config.accessControlConditions,
            ciphertext: currentConfig.config.apiKeysCiphertext,
            dataToEncryptHash: currentConfig.config.apiKeysDataToEncryptHash,
            // @ts-ignore
            authSig: null,
            chain: "ethereum",
          });
          
          const reEncryptedApiKeys = await Lit.Actions.encrypt({
            // @ts-ignore
            accessControlConditions: newAccessControlConditions,
            to_encrypt: decryptedApiKeys,
          });
          
          // Update configuration with new encrypted data and access control conditions
          const updateData = {
            _id: currentConfig.config._id,
            multisigWalletId,
            apiKeysCiphertext: reEncryptedApiKeys.ciphertext,
            apiKeysDataToEncryptHash: reEncryptedApiKeys.dataToEncryptHash,
            ipfsIdsCiphertext: encryptedIpfsIds.ciphertext,
            ipfsIdsDataToEncryptHash: encryptedIpfsIds.dataToEncryptHash,
            accessControlConditions: newAccessControlConditions,
            lastModifiedBy: 'proposal_execution'
          };
          
          const saveResponse = await fetch(`${apiBaseUrl}/api/api-keys-config`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateData)
          });
          
          if (!saveResponse.ok) {
            throw new Error('Failed to save updated IPFS IDs configuration');
          }
          
          result = {
            message: 'IPFS IDs and access control updated successfully',
            type: 'UPDATE_IPFS_IDS',
            timestamp: new Date().toISOString()
          };
          
        } else if (type === 'DELETE_CONFIG') {
          // Delete the configuration
          const deleteUrl = `${apiBaseUrl}/api/api-keys-config?walletId=${multisigWalletId}`;
          const deleteResponse = await fetch(deleteUrl, {
            method: 'DELETE'
          });
          
          if (!deleteResponse.ok) {
            throw new Error('Failed to delete configuration');
          }
          
          result = {
            message: 'Configuration deleted successfully',
            type: 'DELETE_CONFIG',
            timestamp: new Date().toISOString()
          };
          
        } else {
          throw new Error(`Unsupported proposal type: ${type}`);
        }
        
        break;
      }
        
      default:
        throw new Error(`Unknown action: ${action}`);
    }

    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: true,
        action,
        result
      })
    });

  } catch (error: any) {
    console.log(`Fatal error: ${error.message}`);
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

export const litActionCodeForAPIKeyManagement = `(${go.toString()})();`;