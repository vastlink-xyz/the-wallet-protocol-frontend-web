import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { getAuthMethodFromStorage } from "./authmethod";

export interface User {
  id: string;
  authMethodId: string;
  email: string;
  litActionPkp: {
    ethAddress: string;
    publicKey: string;
    tokenId: string;
    type: string;
  };
  walletSettings: {
    dailyWithdrawLimits: {
      BTC: string;
      ETH: string;
      USDT: string;
      USDC: string;
      TSTLPX: string;
      VAST: string;
    };
  };
  addresses: {
    eth: string;
    btc: string;
  };
}

export async function getUserFromStorage(): Promise<User> {
  const storedAuthMethod = getAuthMethodFromStorage();
  if (!storedAuthMethod) {
    throw new Error('No authentication method found in storage');
  }

  const authMethodId = await getAuthIdByAuthMethod(storedAuthMethod);

  // Fetch user's information from database API
  const userResponse = await fetch(
    `/api/user?authMethodId=${authMethodId}`
  );

  if (!userResponse.ok) {
    throw new Error('Failed to fetch user information from database');
  }

  return await userResponse.json();
}
