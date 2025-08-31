declare const authParams: any
declare const walletId: string
declare const proposalId: string
declare const ethers: any
declare const publicKey: string

declare const vastbaseAuthMethodType: number
declare const pinCode: string | undefined
declare const mfaType: string | undefined
declare const mfaCode: string | undefined
declare const mfaMethodId: string | undefined
declare const Lit: any

declare const litActionContext: any

const _litActionCode = async () => {
  const apiBaseUrl = litActionContext.apiBaseUrl
  console.log('currentActionIpfsIds', Lit.Auth.actionIpfsIds)
  const multiProviderAuthIpfsId = litActionContext.multiProviderAuthIpfsId

  async function editAuthmethod({
    pkpPublicKey,
    litDatilNetwork,
    authMethodMetadata,
  }: {
    pkpPublicKey: string;
    litDatilNetwork: 'datil-dev' | 'datil-test' | 'datil';
    authMethodMetadata: {
      addOrRemove: 'add' | 'remove';
      keyType: number;
      authMethodType: number;
      authMethodId: string;
      authMethodPubkey: string;
      permittedScopes: number[];
    }
  }) {
    const PKP_PERMISSIONS_CONTRACT_ABI = [
      "function addPermittedAuthMethod(uint256 tokenId, (uint256 authMethodType, bytes id, bytes userPubkey) authMethod, uint256[] scopes)",
      "function removePermittedAuthMethod(uint256 tokenId, uint256 authMethodType, bytes id)",
    ];

    try {
      const pkpTokenId = await Lit.Actions.pubkeyToTokenId({ publicKey: pkpPublicKey });
      const pkpEthAddress = ethers.utils.computeAddress(pkpPublicKey);

      let pkpPermissionsContractAddress: string;
      switch (litDatilNetwork) {
        case 'datil-dev':
          pkpPermissionsContractAddress = '0xf64638F1eb3b064f5443F7c9e2Dc050ed535D891';
          break;
        case 'datil-test':
          pkpPermissionsContractAddress = '0x60C1ddC8b9e38F730F0e7B70A2F84C1A98A69167';
          break;
        case 'datil':
          pkpPermissionsContractAddress = '0x213Db6E1446928E19588269bEF7dFc9187c4829A';
          break;
        default:
          throw new Error(`Invalid Lit Datil Network: ${litDatilNetwork}`);
      }

      const yellowstoneRpcProvider = new ethers.providers.JsonRpcProvider(
        await Lit.Actions.getRpcUrl({
          chain: 'yellowstone',
        })
      );

      const [gasPrice, { chainId }] = await Promise.all([
        yellowstoneRpcProvider.getGasPrice(),
        yellowstoneRpcProvider.getNetwork()
      ]);

      const pkpPermissionsContract = new ethers.Contract(
        pkpPermissionsContractAddress,
        PKP_PERMISSIONS_CONTRACT_ABI,
        yellowstoneRpcProvider
      );

      let rawTx;
      let estimatedGas;
      switch (authMethodMetadata.addOrRemove) {
        case 'add':
          rawTx = await pkpPermissionsContract.populateTransaction.addPermittedAuthMethod(
            pkpTokenId,
            {
              authMethodType: ethers.BigNumber.from(authMethodMetadata.authMethodType.toString()).toHexString(),
              id: ethers.utils.arrayify(authMethodMetadata.authMethodId),
              userPubkey: ethers.utils.arrayify(authMethodMetadata.authMethodPubkey)
            },
            authMethodMetadata.permittedScopes,
          );
          estimatedGas = await pkpPermissionsContract.estimateGas.addPermittedAuthMethod(
            pkpTokenId,
            {
              authMethodType: ethers.BigNumber.from(authMethodMetadata.authMethodType.toString()).toHexString(),
              id: ethers.utils.arrayify(authMethodMetadata.authMethodId),
              userPubkey: ethers.utils.arrayify(authMethodMetadata.authMethodPubkey)
            },
            authMethodMetadata.permittedScopes,
            {
              from: pkpEthAddress
            }
          );
          break;
        case 'remove':
          rawTx = await pkpPermissionsContract.populateTransaction.removePermittedAuthMethod(
            pkpTokenId,
            authMethodMetadata.authMethodType,
            authMethodMetadata.authMethodId,
          );
          estimatedGas = await pkpPermissionsContract.estimateGas.removePermittedAuthMethod(
            pkpTokenId,
            authMethodMetadata.authMethodType,
            authMethodMetadata.authMethodId,
            {
              from: pkpEthAddress
            }
          );
          break;
        default:
          throw new Error(`Invalid authMethodMetadata.addOrRemove: ${authMethodMetadata.addOrRemove}`);
      }

      // Add required transaction properties
      rawTx = {
        ...rawTx,
        gasPrice: `0x${BigInt(gasPrice.toString()).toString(16)}`,
        gasLimit: estimatedGas.mul(120).div(100).toHexString(), // Add 20% buffer to estimated gas
        nonce: await yellowstoneRpcProvider.getTransactionCount(pkpEthAddress),
        chainId,
      };

      console.log(`Unsigned transaction: ${JSON.stringify(rawTx)}`);

      const publicKeyForLit = pkpPublicKey.replace(/^0x/, '');
      console.log(`Signing using PKP Public Key: ${publicKeyForLit}...`);

      const sig = await Lit.Actions.signAndCombineEcdsa({
        toSign: ethers.utils.arrayify(
          ethers.utils.keccak256(ethers.utils.serializeTransaction(rawTx))
        ),
        publicKey: publicKeyForLit,
        sigName: 'pkp-edit-auth-methods',
      });

      const signedAndSerializedTx = ethers.utils.serializeTransaction(
        rawTx,
        ethers.utils.joinSignature({
          r: '0x' + JSON.parse(sig).r.substring(2),
          s: '0x' + JSON.parse(sig).s,
          v: JSON.parse(sig).v,
        })
      );
      console.log(`Signed transaction: ${signedAndSerializedTx}`);

      const sendTxResponse = await Lit.Actions.runOnce(
        { waitForResponse: true, name: 'sendTxSender' },
        async () => {
          try {
            const txReceipt = await yellowstoneRpcProvider.sendTransaction(signedAndSerializedTx);
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

      return sendTxResponse;
    } catch (error) {
      throw new Error(`Error editing auth method: ${error}`)
    }
  }
  
  const authResult = await Lit.Actions.call({
    ipfsId: multiProviderAuthIpfsId,
    params: {
      providerType: authParams.providerType,
      accessToken: authParams.accessToken,
      pkpTokenId: authParams.pkpTokenId,
      authMethodType: authParams.authMethodType,
      litActionContext,
    },
  })
  console.log('Multi-provider auth result:', authResult)
  
  if (authResult !== 'true') {
    Lit.Actions.setResponse({response: JSON.stringify({isPermitted: false})})
    return
  }

  // Use unified security verification Lit Action
  const securityVerificationIpfsId = litActionContext.securityVerificationIpfsId
  const securityVerificationResult = await Lit.Actions.call({
    ipfsId: securityVerificationIpfsId,
    params: {
      authParams,
      litActionContext,
      transactionAmount: '0', // Wallet settings don't have transaction amounts
      tokenType: 'ETH', // Dummy token type for wallet settings
      contextType: 'multisigWalletSettings',
      walletId,
      pinCode: pinCode || '',
      mfaType: mfaType || '',
      mfaCode: mfaCode || '',
      mfaMethodId: mfaMethodId || ''
    }
  });

  console.log('Unified security verification result for wallet settings:', securityVerificationResult);
  
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

    const apiUrl = `${apiBaseUrl}/api/multisig?id=${walletId}`;
    const response = await fetch(apiUrl).then((response) => response.json());
    console.log('response.data', response.data)
    const {
      metadata,
      ciphertext,
      dataToEncryptHash,
      dataToEncryptHashSignature,
    } = response.data

    // verify the dataToEncryptHashSignature
    const messageHash = ethers.utils.hashMessage(dataToEncryptHash);
    const recoveredAddress = ethers.utils.recoverAddress(messageHash, dataToEncryptHashSignature);
    const expectedAddress = ethers.utils.computeAddress(publicKey);
    const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();

    if (!isValid) {
      throw new Error('Signature verification failed')
    }

    // kkktodo
    const decryptedData = await Lit.Actions.decryptAndCombine({
      accessControlConditions: metadata.accessControlConditions,
      ciphertext,
      dataToEncryptHash,
      // @ts-ignore
      authSig: null,
      chain: "ethereum",
    });
    const parsedDecryptedData = JSON.parse(decryptedData)
    console.log('parsedDecryptedData', parsedDecryptedData)

    // const parsedDecryptedData = {
    //   "signers": [
    //     {
    //       "email": "zkyeshuoer@gmail.com",
    //       "ethAddress": "0xee136485baB4ceB31b346383fB395a4eE5142bF8",
    //       "publicKey": "0x045e0180adf3774affd6c9f57d6ac15c8f0c64fd2832334e977de8a03c2bd54ce49700c61a4897a063b1c58982aa6717c9ea738207df454a3b128a5e4a412aab8b"
    //     }
    //   ],
    //   "threshold": 1,
    //   "mfaSettings": {
    //     "dailyLimits": {
    //       "ETH": "1.0",
    //       "BTC": "0.1"
    //     }
    //   }
    // }

    // get signatures from proposal
    const proposalApiUrl = `${apiBaseUrl}/api/multisig/messages?proposalId=${proposalId}&walletId=${walletId}`;
    const signaturesResponse = await fetch(proposalApiUrl).then((response) => response.json());
    const { signatures, message: proposalMessage } = signaturesResponse.data
    console.log('signatures is', signatures)
    console.log('proposalMessage is', proposalMessage)

    let validSignaturesCount = 0;
    for (const expectedSigner of parsedDecryptedData.signers) {
      const testSigner = signatures.find((item: any) => item.publicKey === expectedSigner.publicKey)
      if (!testSigner) {
        continue
      }

      const proposalMessageHash = ethers.utils.hashMessage(proposalMessage);
      const recoveredAddress = ethers.utils.recoverAddress(proposalMessageHash, testSigner.signature);
      const expectedAddress = ethers.utils.computeAddress(expectedSigner.publicKey);

      console.log(`- Recovered address from signature: ${recoveredAddress}`);
      console.log(`- Expected address from public key: ${expectedAddress}`);

      const isValid = recoveredAddress.toLowerCase() === expectedAddress.toLowerCase();
      console.log(`- Validation result: ${isValid ? 'VALID ✓' : 'INVALID ✗'}`);

      if (isValid) {
        validSignaturesCount++;
      }
    }

    if (validSignaturesCount < parsedDecryptedData.threshold) {
      throw new Error('proposal signatures are not enough')
    }

    const parsedProposalMessage = JSON.parse(proposalMessage)
    console.log('parsedProposalMessage', parsedProposalMessage)

    // return Lit.Actions.setResponse({response: JSON.stringify({
    //   success: true,
    //   message: 'proposal signatures are enough',
    // })})

    // Compare the two objects to determine changes
    const changes = {
      addSigners: [],
      removeSigners: [],
      nameChanged: false,
      thresholdChanged: false,
      mfaSettingsChanged: false
    } as any;

    // Only process signer changes when the proposal explicitly includes a signers field
    if (parsedProposalMessage.signers !== undefined) {
      const parsedProposalMessageSigners = parsedProposalMessage.signers || []

      // Find signers to add (in proposal but not in decrypted data)
      for (const proposalSigner of parsedProposalMessageSigners) {
        const exists = parsedDecryptedData.signers.some((signer: any) => signer.ethAddress.toLowerCase() === proposalSigner.ethAddress.toLowerCase());
        if (!exists) {
          changes.addSigners.push(proposalSigner);
        }
      }

      // Find signers to remove (in decrypted data but not in proposal)
      for (const decryptedSigner of parsedDecryptedData.signers || []) {
        const exists = parsedProposalMessageSigners.some((signer: any) => signer.ethAddress.toLowerCase() === decryptedSigner.ethAddress.toLowerCase());
        if (!exists) {
          changes.removeSigners.push(decryptedSigner);
        }
      }
    }

    // Check if name has changed
    if (parsedProposalMessage.name !== parsedDecryptedData.name) {
      changes.nameChanged = true;
    }

    // Check if threshold has changed
    if (parsedProposalMessage.threshold !== parsedDecryptedData.threshold) {
      changes.thresholdChanged = true;
    }

    // Check if mfaSettings have changed (if they exist)
    if (parsedProposalMessage.mfaSettings && parsedDecryptedData.mfaSettings) {
      // Compare dailyLimits objects
      const oldLimits = parsedDecryptedData.mfaSettings.dailyLimits || {};
      const newLimits = parsedProposalMessage.mfaSettings.dailyLimits || {};
      
      // Convert to strings for comparison
      const oldLimitsStr = JSON.stringify(oldLimits);
      const newLimitsStr = JSON.stringify(newLimits);
      
      const mfaChanged = oldLimitsStr !== newLimitsStr;
      changes.mfaSettingsChanged = mfaChanged;
    }
    console.log('Changes detected:', changes);

    // Handle signer changes
    if (changes.addSigners.length > 0 || changes.removeSigners.length > 0) {
      for (const signerToAdd of changes.addSigners) {
        console.log(`Adding signer: ${signerToAdd.email} (${signerToAdd.ethAddress})`);
        // Call the Action to add the signer
        const addSignerRes = await editAuthmethod({
          pkpPublicKey: publicKey,
          litDatilNetwork: litActionContext.litNetwork,
          authMethodMetadata: {
            addOrRemove: 'add',
            keyType: 2,
            authMethodType: vastbaseAuthMethodType,
            authMethodId: signerToAdd.authMethodId,
            authMethodPubkey: '0x',
            permittedScopes: [0],
          }
        })
        console.log('add signer success', signerToAdd.email)
        console.log('addSignerRes', addSignerRes)
      }

      for (const signerToRemove of changes.removeSigners) {
        console.log(`Removing signer: ${signerToRemove.email} (${signerToRemove.ethAddress})`);
        // Call the Action to remove the signer
        const removeSignerRes = await editAuthmethod({
          pkpPublicKey: response.data.pkp.publicKey,
          litDatilNetwork: litActionContext.litNetwork,
          authMethodMetadata: {
            addOrRemove: 'remove',
            keyType: 2,
            authMethodType: vastbaseAuthMethodType,
            authMethodId: signerToRemove.authMethodId,
            authMethodPubkey: '0x',
            permittedScopes: [0],
          }
        })
        console.log('remove signer success', signerToRemove.email)
        console.log('removeSignerRes', removeSignerRes)
      }
    }

    // create updated data object based on original data
    const newDataToEncrypt = { ...parsedDecryptedData };

    // apply signer changes
    if (changes.addSigners.length > 0 || changes.removeSigners.length > 0) {
      // create updated signers list
      const updatedSigners = parsedDecryptedData.signers ? [...parsedDecryptedData.signers] : [];

      // remove signers that should be removed
      for (const signerToRemove of changes.removeSigners) {
        const indexToRemove = updatedSigners.findIndex(signer => signer.ethAddress.toLowerCase() === signerToRemove.ethAddress.toLowerCase());
        if (indexToRemove >= 0) {
          updatedSigners.splice(indexToRemove, 1);
        }
      }

      // add new signers
      for (const signerToAdd of changes.addSigners) {
        updatedSigners.push(signerToAdd);
      }

      // update signers list
      newDataToEncrypt.signers = updatedSigners;
    }

    // apply name changes
    if (changes.nameChanged) {
      newDataToEncrypt.name = parsedProposalMessage.name;
    }

    // apply threshold changes
    if (changes.thresholdChanged) {
      newDataToEncrypt.threshold = parsedProposalMessage.threshold;
    }

    // apply MFA settings changes
    if (changes.mfaSettingsChanged && parsedProposalMessage.mfaSettings) {
      newDataToEncrypt.mfaSettings = {
        ...newDataToEncrypt.mfaSettings, // keep original settings
        ...parsedProposalMessage.mfaSettings // apply new settings
      };
    }

    console.log('New data to encrypt:', newDataToEncrypt);
    console.log('metadata.accessControlConditions', metadata.accessControlConditions)

    // encrypt the updated data
    console.log('Attempting to encrypt data...');
    const dataToEncryptStr = JSON.stringify(newDataToEncrypt);
    console.log('String to encrypt:', dataToEncryptStr);
    const dataToEncryptBinary = new TextEncoder().encode(dataToEncryptStr)

    const encryptResult = await Lit.Actions.encrypt({
      accessControlConditions: [
        {
          "contractAddress": "",
          "standardContractType": "",
          "chain": "ethereum",
          "method": "",
          "parameters": [":currentActionIpfsId"],
          "returnValueTest": {
            "comparator": "=",
            "value": litActionContext.updateWalletSettingsIpfsId
          }
        }
      ],
      to_encrypt: dataToEncryptBinary,
    });

    console.log('Encryption successful');
    console.log('encryptResult:', JSON.stringify(encryptResult));

    // sign the dataToEncryptHash
    const encryptMessageHash = ethers.utils.hashMessage(encryptResult.dataToEncryptHash);
    const encryptMessageBytes = ethers.utils.arrayify(encryptMessageHash);
    const signature = await Lit.Actions.signEcdsa({
      toSign: encryptMessageBytes,
      publicKey,
      sigName: 'dataToEncryptHashSignature',
    })

    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: true,
        message: 'wallet updated',
        data: {
          newDataToEncrypt,
          ciphertext: encryptResult.ciphertext,
          dataToEncryptHash: encryptResult.dataToEncryptHash,
        },
      })
    })
  } catch (error) {
    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: false,
        error: (error as any).message,
      })
    })
  }
};

export const litActionCodeForUpdateMultisigWalletSettings = `(${_litActionCode.toString()})();`;
