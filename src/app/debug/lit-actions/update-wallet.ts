declare const authParams: any
declare const walletId: string
declare const proposalId: string
declare const ethers: any
declare const publicKey: string
declare const env: string
declare const Lit: any

// kkktodo: update-settings
const _litActionCode = async () => {
  const ipfsIdForVerifyGoogleAuthLitAction = 'QmXVzcSHk16XLu5ACWNJywxfUHX1KnY1fu66J9Skh533pg'

  // verify google auth
  const authVerifyRes = await Lit.Actions.call({
    ipfsId: ipfsIdForVerifyGoogleAuthLitAction,
    params: {
      ...authParams,
      publicKey,
    },
  })

  const parsedAuthVerifyRes = JSON.parse(authVerifyRes)
  if (!parsedAuthVerifyRes.isPermitted) {
    Lit.Actions.setResponse({response: JSON.stringify(parsedAuthVerifyRes)})
    return
  }

  try {
    let apiBaseUrl: string;
    let litDatilNetwork: string;
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
    // const decryptedData = await Lit.Actions.decryptAndCombine({
    //   accessControlConditions: metadata.accessControlConditions,
    //   ciphertext,
    //   dataToEncryptHash,
    //   // @ts-ignore
    //   authSig: null,
    //   chain: "ethereum",
    // });
    // const parsedDecryptedData = JSON.parse(decryptedData)
    // console.log('parsedDecryptedData', parsedDecryptedData)

    const parsedDecryptedData = {
      "signers": [
        {
          "email": "zkyeshuoer@gmail.com",
          "ethAddress": "0xee136485baB4ceB31b346383fB395a4eE5142bF8",
          "publicKey": "0x045e0180adf3774affd6c9f57d6ac15c8f0c64fd2832334e977de8a03c2bd54ce49700c61a4897a063b1c58982aa6717c9ea738207df454a3b128a5e4a412aab8b"
        }
      ],
      "threshold": 1,
      "mfaSettings": {
        "phoneNumber": "123",
        "dailyLimit": "1"
      }
    }

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
      thresholdChanged: false,
      mfaSettingsChanged: false
    } as any;

    // Find signers to add (in proposal but not in decrypted data)
    for (const proposalSigner of parsedProposalMessage.signers) {
      const exists = parsedDecryptedData.signers.some(signer => signer.ethAddress.toLowerCase() === proposalSigner.ethAddress.toLowerCase());
      if (!exists) {
        changes.addSigners.push(proposalSigner);
      }
    }

    // Find signers to remove (in decrypted data but not in proposal)
    for (const decryptedSigner of parsedDecryptedData.signers) {
      const exists = parsedProposalMessage.signers.some((signer: any) => signer.ethAddress.toLowerCase() === decryptedSigner.ethAddress.toLowerCase());
      if (!exists) {
        changes.removeSigners.push(decryptedSigner);
      }
    }

    // Check if threshold has changed
    if (parsedProposalMessage.threshold !== parsedDecryptedData.threshold) {
      changes.thresholdChanged = true;
    }

    // Check if mfaSettings have changed (if they exist)
    if (parsedProposalMessage.mfaSettings && parsedDecryptedData.mfaSettings) {
      const mfaChanged = 
        parsedProposalMessage.mfaSettings.phoneNumber !== parsedDecryptedData.mfaSettings.phoneNumber ||
        parsedProposalMessage.mfaSettings.dailyLimit !== parsedDecryptedData.mfaSettings.dailyLimit;
      changes.mfaSettingsChanged = mfaChanged;
    }
    console.log('Changes detected:', changes);

    // Handle signer changes
    if (changes.addSigners.length > 0 || changes.removeSigners.length > 0) {
      for (const signerToAdd of changes.addSigners) {
        console.log(`Adding signer: ${signerToAdd.email} (${signerToAdd.ethAddress})`);
        // Call the Action to add the signer
        await Lit.Actions.call({
          ipfsId: 'Qmbqm4MpVnSNekpik3Z2m36zKYgtyytZ9AcAHDzsENs63s',
          params: {
            pkpPublicKey: publicKey,
            litDatilNetwork: litDatilNetwork, // kkktodo
            authMethodMetadata: {
              addOrRemove: 'add',
              keyType: 2,
              authMethodType: 6,
              authMethodId: signerToAdd.authMethodId,
              authMethodPubkey: '0x',
              permittedScopes: [0],
            }
          },
        });
        console.log('add signer success', signerToAdd.email)
      }

      for (const signerToRemove of changes.removeSigners) {
        console.log(`Removing signer: ${signerToRemove.email} (${signerToRemove.ethAddress})`);
        // Call the Action to remove the signer
        await Lit.Actions.call({
          ipfsId: 'Qmbqm4MpVnSNekpik3Z2m36zKYgtyytZ9AcAHDzsENs63s',
          params: {
            pkpPublicKey: response.data.pkp.publicKey,
            litDatilNetwork: litDatilNetwork, // kkktodo
            authMethodMetadata: {
              addOrRemove: 'remove',
              keyType: 2,
              authMethodType: 6,
              authMethodId: signerToRemove.authMethodId,
              authMethodPubkey: '0x',
              // permittedScopes: [0],
            }
          },
        });
        console.log('remove signer success', signerToRemove.email)
      }
    }

    // create updated data object based on original data
    const newDataToEncrypt = { ...parsedDecryptedData };

    // apply signer changes
    if (changes.addSigners.length > 0 || changes.removeSigners.length > 0) {
      // create updated signers list
      const updatedSigners = [...parsedDecryptedData.signers];
      
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
          "parameters": [ ":currentActionIpfsId" ],
          "returnValueTest": {
            "comparator": "=",
            "value": Lit.Auth.actionIpfsIds[0]
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

    Lit.Actions.setResponse({response: JSON.stringify({
      success: true,
      message: 'wallet updated',
      data: {
        newDataToEncrypt,
        dataToEncryptHash: encryptResult.dataToEncryptHash,
      },
    })})
  } catch (error) {
    Lit.Actions.setResponse({response: JSON.stringify({
      success: false,
      error: (error as any).message,
    })})
  }
};

export const updateWalletLitActionCode = `(${_litActionCode.toString()})();`;
