declare const ethers: any
declare const publicKey: string
declare const Lit: any
declare const litActionContext: any
declare const authMethodMetadata: {
  addOrRemove: 'add' | 'remove';
  keyType: number;
  authMethodType: number;
  authMethodId: string;
  authMethodPubkey: string;
  permittedScopes: number[];
}

const _litActionCode = async () => {
  const currentActionIpfsId = Lit.Auth.actionIpfsIds[0]
  console.log('currentActionIpfsId', currentActionIpfsId)

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
      permittedScopes?: number[];
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

  try {
    const litDatilNetwork = litActionContext.litNetwork
    const res = await editAuthmethod({
      pkpPublicKey: publicKey,
      litDatilNetwork: litDatilNetwork,
      authMethodMetadata,
    })

    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: true,
        message: 'Authmethods Upgraded',
        data: {
          res
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

// LitActionUpgradableProxy
export const litActionCodeForCommonUpgradableProxy = `(${_litActionCode.toString()})();`;
