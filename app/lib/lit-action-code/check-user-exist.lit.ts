declare const userEmail: string;

const _litActionCode = async () => {
  const apiBaseUrl = 'https://staging.app.vastbase.vastlink.xyz';

  const response: any = await Lit.Actions.runOnce(
    { waitForResponse: true, name: 'checkUserExists' },
    async () => {
      const checkUserRes = await fetch(`${apiBaseUrl}/api/user/check-exists`, {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
        }),
      })
      const data = await checkUserRes.json()
      return JSON.stringify(data)
    }
  )
  console.log('verify token data is success', response)

  Lit.Actions.setResponse({response: response})
};

export const litActionCodeForCheckUserExist = `(${_litActionCode.toString()})();`;
