// @ts-nocheck
const _litActionCode = async () => {
  try {
    console.log(unsignedTransaction, publicKeyForLit, chain, sendTransaction)
  
    const toSign = ethers.utils.arrayify(
      ethers.utils.keccak256(ethers.utils.serializeTransaction(unsignedTransaction))
    )
  
    const sig = await Lit.Actions.signAndCombineEcdsa({
      toSign,
      publicKey: publicKeyForLit,
      sigName: 'transfer-tx',
    });
  
    console.log("sig is", sig);
  
    const signedAndSerializedTx = ethers.utils.serializeTransaction(
      unsignedTransaction,
      ethers.utils.joinSignature({
          r: '0x' + JSON.parse(sig).r.substring(2),
          s: '0x' + JSON.parse(sig).s,
          v: JSON.parse(sig).v,
      })
    );
  
    if (sendTransaction) {
      const rpcProvider = new ethers.providers.JsonRpcProvider(
        await Lit.Actions.getRpcUrl({
          chain,
        })
      );

      const sendTxResponse = await Lit.Actions.runOnce(
        { waitForResponse: true, name: 'sendTxSender' },
        async () => {
          try {
            const txReceipt = await rpcProvider.sendTransaction(signedAndSerializedTx);
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
  
      Lit.Actions.setResponse({
        response: sendTxResponse,
      });
    } else {
      Lit.Actions.setResponse({
        response: JSON.stringify({
          status: 'success',
          signedAndSerializedTx
        }),
      });
    }
  } catch(error) {
    Lit.Actions.setResponse({
      response: JSON.stringify({
        status: 'error',
        details: [(error as Error).message || JSON.stringify(error)]
      }),
    });
  }
};

const litActionCode = `(${_litActionCode.toString()})();`;

export default litActionCode
