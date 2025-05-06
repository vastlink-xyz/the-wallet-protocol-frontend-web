// @ts-nocheck
const _litActionCode = async () => {
  console.log('tokenId', tokenId)
  console.log('userid', userId)
  console.log('authtype', authMethodType)
  console.log('accessToken', accessToken)
  console.log('message', message)
  console.log('publicKey', publicKey)
  console.log('sigName', sigName)
  console.log('executeAnotherAction', executeAnotherAction)
  console.log('subLitActionIpfsId', subLitActionIpfsId)
  console.log('subLitActionParams', subLitActionParams)

  // Verify the token with Google
  console.log("🔄 Verifying Google credential...");
  const response = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`
  );

  if (!response.ok) {
    console.log("❌ Failed to verify token with Google");
    return Lit.Actions.setResponse({
      response: "false",
      reason: "Invalid Google credential",
    });
  }

  const tokenInfo = await response.json();

  // Verify audience matches our client ID
  if (tokenInfo.aud !== '490433686717-d2j3b3ocpu1qdaqql38c5ge841fu75p7.apps.googleusercontent.com') {
    console.log("❌ Invalid audience:", tokenInfo.aud);
    return Lit.Actions.setResponse({
      response: "false",
      reason: "Invalid audience in Google credential",
    });
  }
  console.log("✅ Audience verified");

  const isPermitted = await Lit.Actions.isPermittedAuthMethod({
    tokenId: tokenId,
    authMethodType: authMethodType,
    userId: userId,
  })
  console.log('isPermitted', isPermitted)

  if (!isPermitted) {
    return Lit.Actions.setResponse({
      response: "false",
      reason: "Invalid audience in Google credential",
    });
  }

  
  if (executeAnotherAction) {
    const res = await Lit.Actions.call({
      ipfsId: subLitActionIpfsId,
      params: subLitActionParams,
    })
    console.log('res', res)
    Lit.Actions.setResponse({response: JSON.stringify(res)})
  } else {
    // sign the message
    const messageHash = ethers.utils.hashMessage(message);
    const messageBytes = ethers.utils.arrayify(messageHash);
    // use Lit.Actions.signEcdsa to generate signature
    const sigShare = await Lit.Actions.signEcdsa({ 
      toSign: messageBytes, 
      publicKey, 
      sigName 
    });
  
    const res = {
      "isPermitted": isPermitted,
      "sigShare": sigShare
    }
  
    Lit.Actions.setResponse({response: JSON.stringify(res)})
  }
  
};

export const customLitActionCode = `(${_litActionCode.toString()})();`;
