const _litActionCode = async () => {
  // Return success response
  return Lit.Actions.setResponse({
    response: "true",
  });
};

export const litActionCodeForDebugSessionSigs = `(${_litActionCode.toString()})();`;
