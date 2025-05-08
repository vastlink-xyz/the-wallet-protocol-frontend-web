declare const tokenId: string;
declare const authMethodId: string;
declare const authMethodType: number;
declare const accessToken: string;

declare const ethers: any;
declare const Lit: any;

const _litActionCode = async () => {
  console.log('ethers', ethers)

  const res = {
    "isPermitted": false,
  }

  // Verify the token with Google
  console.log("🔄 Verifying Google credential...");
  const response = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`
  );

  if (!response.ok) {
    console.log("❌ Failed to verify token with Google");
    return Lit.Actions.setResponse({
      response: JSON.stringify(res),
    });
  }

  const tokenInfo = await response.json();

  // Verify audience matches our client ID
  if (tokenInfo.aud !== '490433686717-d2j3b3ocpu1qdaqql38c5ge841fu75p7.apps.googleusercontent.com') {
    console.log("❌ Invalid audience:", tokenInfo.aud);
    return Lit.Actions.setResponse({
      response: JSON.stringify(res),
    });
  }
  console.log("✅ Audience verified");

  res.isPermitted = await Lit.Actions.isPermittedAuthMethod({
    tokenId: tokenId,
    authMethodType: authMethodType,
    userId: ethers.utils.arrayify(authMethodId),
  })
  console.log('isPermitted', res.isPermitted)

  Lit.Actions.setResponse({response: JSON.stringify(res)})
};

export const verifyGoogleAuthLitActionCode = `(${_litActionCode.toString()})();`;
