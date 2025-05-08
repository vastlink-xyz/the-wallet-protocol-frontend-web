
// declare const Lit: any;
declare const tokenId: string;
declare const authMethodId: string;
declare const authMethodType: number;
declare const accessToken: string;

const _litActionCode = async () => {
  const res = await Lit.Actions.call({
    ipfsId: 'QmfWqwhuRStHcfNf58otrN4FbQk3qQhHLMoE7xFgv8uDyo',
    params: {
      tokenId,
      authMethodId,
      authMethodType,
      accessToken,
    }
  })
  Lit.Actions.setResponse({ response: JSON.stringify(res) });
};

export const LitActionCode = `(${_litActionCode.toString()})();`;
