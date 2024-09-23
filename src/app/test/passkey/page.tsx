"use client";

import axios from "axios";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
// Import Single Factor Auth SDK for no redirect flow
import { decodeToken, Web3Auth } from "@web3auth/single-factor-auth";
import { useEffect, useState } from "react";

// RPC libraries for blockchain calls
import { LogoLoading } from "@/components/LogoLoading";
import { log } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import RPC from "./evm.ethers";
// import RPC from "./evm.viem";
import { PasskeysPlugin } from "@web3auth/passkeys-sfa-plugin";


const verifier = "jwks-jwt";

const clientId = "BO6bCEAAGtt2WNDW8QnrdEJD2AwhpfBJ0zXcjV9eWUk8kUhOVJ_TZgXPPNVDakJU6Yhv5S_6-ZdSNjtJ9_hUad0"; // get from https://dashboard.web3auth.io

const passkeysPlugin = new PasskeysPlugin({
  rpID: "localhost",
  rpName: "localhosttest",
});

const chainConfig = {
  chainId: "0xaa36a7",
  displayName: "Sepolia Testnet ETH",
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  tickerName: "Sepolia Testnet ETH",
  ticker: "ETH",
  decimals: 18,
  rpcTarget: "https://rpc.ankr.com/eth_sepolia",
  blockExplorerUrl: "https://sepolia.etherscan.io",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

// Initialising Web3Auth Single Factor Auth SDK
const web3authSfa = new Web3Auth({
  clientId, // Get your Client ID from Web3Auth Dashboard
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET, // ["cyan", "testnet"]
  usePnPKey: false, // Setting this to true returns the same key as PnP Web SDK, By default, this SDK returns CoreKitKey.
  privateKeyProvider,
});
web3authSfa.addPlugin(passkeysPlugin);

function App() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('test2@abc.com');
  
  useEffect(() => {
    const init = async () => {
      try {
        web3authSfa.init();
        log('init')
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const getIdToken = async () => {
    log('email', email)
    // Get ID Token from server
    const res = await fetch("http://localhost:5001/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    return data?.token;
  };

  const signUp = async () => {
    // setIsLoggingIn(true);
    // const idToken = await getIdToken();
    // const res = await axios.post(`${process.env.NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL}/web3auth/web3auth-login`, {
    //   idToken,
    // });
    // log('res', res);
    // setIsLoggingIn(false);
    // setIsLoggedIn(true);
    // return

    setIsLoggingIn(true);
    // const status = web3authSfa?.status;
    // if (status === "connected") {
    //   log('status', status)
    //   setIsLoggingIn(false);
    //   setIsLoggedIn(true);
    //   return
    // }
    // log('status', status)
    const idTokenResult = await getIdToken();

    const { payload } = decodeToken(idTokenResult);
    log('payload', payload)
    const provider = await web3authSfa?.connect({
      verifier,
      verifierId: (payload as any).email,
      idToken: idTokenResult,
    });
    log('provider', provider)
    setIsLoggingIn(false);
    setIsLoggedIn(true);
  }

  async function registerPasskey() {
    try {
      log('email', email)
      const res = await passkeysPlugin.registerPasskey({
        username: email,
      });
      console.log("Passkey registered successfully", res);
    } catch (error) {
      console.error("Error registering passkey:", error);
    }
  }

  async function loginWithPasskey() {
    try {
      const user = await passkeysPlugin.loginWithPasskey({
        // authenticatorId: authenticatorId,
      });
      console.log("User logged in successfully:", user);
    } catch (error) {
      console.error("Error logging in with passkey:", error);
    }
  }

  // const authenticateUser = async () => {
  //   try {
  //     const userCredential = await web3authSfa?.authenticateUser();
  //     log('userCredential', userCredential)
  //   } catch (err) {
  //     log('err', err)
  //   }
  // };

  // const getUserInfo = async () => {
  //   const userInfo = await web3authSfa?.getUserInfo();
  //   log('userInfo', userInfo)
  // };

  // const logout = async () => {
  //   await web3authSfa?.logout();
  //   setIsLoggedIn(false);
  // };

  // const listAllPasskeys = async () => {
  //   const passkeys = await passkeysPlugin.listAllPasskeys();
  //   console.log('passkeys', passkeys)
  // }

  const loginView = (
    <div>
      login
      <Button onClick={registerPasskey}>register passkey</Button>
      <Button onClick={loginWithPasskey}>login with passkey</Button>
      {/* <Button onClick={logout}>logout</Button> */}
      {/* <Button onClick={getUserInfo}>get user info</Button>
      <Button onClick={authenticateUser}>authenticate user</Button>
      <Button onClick={listAllPasskeys}>list all passkeys</Button> */}
    </div>
  )

  const logoutView = (
    <div className="bg-red-200 w-1/2 mx-auto">
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={signUp}>sign up</Button>
    </div>
  )

  return (
    <div className="">
      {isLoggingIn ? <LogoLoading /> : <div className="">{web3authSfa ? (isLoggedIn ? loginView : logoutView) : null}</div>}
    </div>
  );
}

export default App;