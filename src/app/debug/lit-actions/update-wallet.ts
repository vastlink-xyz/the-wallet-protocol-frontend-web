declare const authParams: any
declare const walletId: string
declare const proposalId: string
declare const ethers: any
declare const publicKey: string
declare const signerPersonalMessage: string
declare const env: string

const _litActionCode = async () => {
  // verify google auth
  const authVerifyRes = await Lit.Actions.call({
    ipfsId: 'QmXVzcSHk16XLu5ACWNJywxfUHX1KnY1fu66J9Skh533pg',
    params: {
      ...authParams,
      publicKey,
    },
  })
  console.log('authVerifyRes', authVerifyRes)
  const parsedAuthVerifyRes = JSON.parse(authVerifyRes)
  if (!parsedAuthVerifyRes.isPermitted) {
    Lit.Actions.setResponse({response: JSON.stringify(parsedAuthVerifyRes)})
    return
  }

  try {
    let apiBaseUrl: string;
    switch (env) {
      case 'dev':
        apiBaseUrl = 'https://4bb5-58-152-13-66.ngrok-free.app';
        break;
      case 'test':
        apiBaseUrl = 'https://dev-app-vastbase-eb1a4b4e8e63.herokuapp.com';
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
    
    
  } catch (error) {
    Lit.Actions.setResponse({response: JSON.stringify({
      success: false,
      error: (error as any).message,
    })})
  }
};

export const updateWalletLitActionCode = `(${_litActionCode.toString()})();`;
