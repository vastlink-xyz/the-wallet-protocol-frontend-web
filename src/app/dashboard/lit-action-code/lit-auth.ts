// @ts-nocheck
const _litActionCode = async () => {
  Lit.Actions.setResponse({response: JSON.stringify({"Lit.Auth": Lit.Auth})})
};

const litActionCode = `(${_litActionCode.toString()})();`;

export default litActionCode;
