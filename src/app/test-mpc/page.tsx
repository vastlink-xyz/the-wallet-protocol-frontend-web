"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { log } from "@/lib/utils";
import { tssLib } from "@toruslabs/tss-dkls-lib";
/* eslint-disable @typescript-eslint/no-use-before-define */

import { CHAIN_NAMESPACES, IProvider } from "@web3auth/base";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { EthereumSigningProvider } from "@web3auth/ethereum-mpc-provider";
import {
  COREKIT_STATUS,
  generateFactorKey,
  JWTLoginParams,
  keyToMnemonic,
  makeEthereumSigner,
  mnemonicToKey,
  parseToken,
  TssShareType,
  WEB3AUTH_NETWORK,
  Web3AuthMPCCoreKit,
} from "@web3auth/mpc-core-kit";
// Optional, only for social second factor recovery
import Web3AuthSingleFactorAuth, { Web3Auth } from "@web3auth/single-factor-auth";
import { BN } from "bn.js";

import { useEffect, useState } from "react";
import { core, Web3 } from "web3";

const web3AuthClientId = "BO6bCEAAGtt2WNDW8QnrdEJD2AwhpfBJ0zXcjV9eWUk8kUhOVJ_TZgXPPNVDakJU6Yhv5S_6-ZdSNjtJ9_hUad0"; // get from https://dashboard.web3auth.io

const verifier = "jwks-jwt";

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

let coreKitInstance: Web3AuthMPCCoreKit;
let evmProvider: EthereumSigningProvider;

log('haha', tssLib.keyType)

if (typeof window !== "undefined") {
  coreKitInstance = new Web3AuthMPCCoreKit({
    web3AuthClientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.DEVNET,
    storage: window.localStorage,
    manualSync: true, // This is the recommended approach
    tssLib: {
      lib: tssLib.loadSync(),
      keyType: tssLib.keyType,
    },
    // tssLib: tssLib,
    enableLogging: true,
  });
  (window as any).coreKitInstance = coreKitInstance

  // Setup provider for EVM Chain
  evmProvider = new EthereumSigningProvider({ config: { chainConfig } });
  evmProvider.setupProvider(makeEthereumSigner(coreKitInstance));
}

function App() {
  const [coreKitStatus, setCoreKitStatus] = useState<COREKIT_STATUS>(COREKIT_STATUS.NOT_INITIALIZED);
  const [backupFactorKey, setBackupFactorKey] = useState<string>("");
  const [mnemonicFactor, setMnemonicFactor] = useState<string>("");

  const [email, setEmail] = useState('test4@abc.com');

  useEffect(() => {
    const init = async () => {
      log('before init')
      await coreKitInstance.init();
      log('after init', coreKitInstance.status)

      setCoreKitStatus(coreKitInstance.status);
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

  const login = async () => {
    try {
      if (!coreKitInstance) {
        throw new Error("initiated to login");
      }
      // const loginRes = await signInWithGoogle();
      // const idToken = await loginRes.user.getIdToken(true);
      const idToken = await getIdToken();
      const parsedToken = parseToken(idToken);

      const idTokenLoginParams = {
        verifier,
        verifierId: parsedToken.email,
        idToken,
      } as JWTLoginParams;

      await coreKitInstance.loginWithJWT(idTokenLoginParams);
      if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
        await coreKitInstance.commitChanges(); // Needed for new accounts
      }

      if (coreKitInstance.status === COREKIT_STATUS.REQUIRED_SHARE) {
        uiConsole(
          "required more shares, please enter your backup/ device factor key, or reset account [unrecoverable once reset, please use it with caution]"
        );
      }

      setCoreKitStatus(coreKitInstance.status);
    } catch (err) {
      log('login error', err)
      uiConsole(err);
    }
  };

  const inputBackupFactorKey = async () => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance not found");
    }
    if (!backupFactorKey) {
      throw new Error("backupFactorKey not found");
    }
    const factorKey = new BN(backupFactorKey, "hex");
    log('hex factorKey', factorKey)
    await coreKitInstance.inputFactorKey(factorKey);

    setCoreKitStatus(coreKitInstance.status);

    if (coreKitInstance.status === COREKIT_STATUS.REQUIRED_SHARE) {
      uiConsole(
        "required more shares even after inputing backup factor key, please enter your backup/ device factor key, or reset account [unrecoverable once reset, please use it with caution]"
      );
    }
  };

  const getSocialMFAFactorKey = async (): Promise<string> => {
    try {
      const privateKeyProvider = new CommonPrivateKeyProvider({ config: { chainConfig } });
      // Initialise the Web3Auth SFA SDK
      // You can do this on the constructor as well for faster experience
      const web3authSfa = new Web3Auth({
        clientId: web3AuthClientId, // Get your Client ID from Web3Auth Dashboard
        web3AuthNetwork: WEB3AUTH_NETWORK.DEVNET,
        usePnPKey: false, // Setting this to true returns the same key as PnP Web SDK, By default, this SDK returns CoreKitKey.
        privateKeyProvider,
        enableLogging: true,
      });
      await web3authSfa.init();

      let web3authProvider: IProvider | null = null;

      if (web3authSfa.status === 'connected') {
        web3authProvider = web3authSfa.provider;
      } else {
        const idToken = await getIdToken();
        const userInfo = parseToken(idToken);
  
        // Use the Web3Auth SFA SDK to generate an account using the Social Factor
        web3authProvider = await web3authSfa.connect({
          verifier,
          verifierId: userInfo.email,
          idToken,
        });
      }


      // Get the private key using the Social Factor, which can be used as a factor key for the MPC Core Kit
      const factorKey = await web3authProvider?.request({
        method: "private_key",
      });
      uiConsole("Social Factor Key: ", factorKey);
      // b6bf38f92187f261f0e153fb8dbf1f186de4467dc2e3301e50a3e9692b23c11b
      // 4d007a1147a34d9e0bfbc6d466788e370b706c8229e089bd9e6e9e1223070890
      // 8cb305ad10e93eba9260e0e9ae02f0ad88c16470d9a1694b6aa47f7919da4c96
      setBackupFactorKey(factorKey as string);
      return factorKey as string;
    } catch (err) {
      uiConsole(err);
      return "";
    }
  };

  const enableMFA = async () => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance is not set");
    }
    try {
      const factorKey = new BN(await getSocialMFAFactorKey(), "hex");
      const result = await coreKitInstance.enableMFA({ factorKey });
      log('enableMFA result', result)
      if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
        await coreKitInstance.commitChanges();
      }

      uiConsole(
        "MFA enabled, device factor stored in local store, deleted hashed cloud key, your backup factor key is associated with the firebase email password account in the app"
      );
    } catch (e) {
      uiConsole(e);
    }
  };

  const keyDetails = async () => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance not found");
    }
    uiConsole(coreKitInstance.getKeyDetails());
  };

  const getDeviceFactor = async () => {
    try {
      const factorKey = await coreKitInstance.getDeviceFactor();
      setBackupFactorKey(factorKey as string);
      uiConsole("Device share: ", factorKey);
    } catch (e) {
      uiConsole(e);
    }
  };

  const exportMnemonicFactor = async (): Promise<void> => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance is not set");
    }
    uiConsole("export share type: ", TssShareType.RECOVERY);
    const factorKey = generateFactorKey();
    await coreKitInstance.createFactor({
      shareType: TssShareType.RECOVERY,
      factorKey: factorKey.private,
    });
    const factorKeyMnemonic = await keyToMnemonic(factorKey.private.toString("hex"));
    if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
      await coreKitInstance.commitChanges();
    }
    uiConsole("Export factor key mnemonic: ", factorKeyMnemonic);
    // "window diagram bonus any blur family topic service cigar web bring speak abandon leader glove nose snap armed volume cancel polar round bicycle lion"
    // stomach garbage judge crew garlic pool enrich prosper extend subject robot crime supply sketch mosquito develop general decrease finger spawn brief wrestle lumber oak
  };

  const generateMyDeviceFactor = async (): Promise<void> => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance is not set");
    }
    uiConsole("export share type: ", TssShareType.DEVICE);
    const factorKey = generateFactorKey();
    await coreKitInstance.createFactor({
      shareType: TssShareType.DEVICE,
      factorKey: factorKey.private,
    });
    // const factorKeyMnemonic = await keyToMnemonic(factorKey.private.toString("hex"));
    if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
      await coreKitInstance.commitChanges();
    }
    uiConsole("Export my device factor key: ", factorKey);
    // "window diagram bonus any blur family topic service cigar web bring speak abandon leader glove nose snap armed volume cancel polar round bicycle lion"
    // stomach garbage judge crew garlic pool enrich prosper extend subject robot crime supply sketch mosquito develop general decrease finger spawn brief wrestle lumber oak
    // ethics birth patrol spray local achieve session ship person fury rain army wine upon audit plug method you flame fat vivid confirm plate trim
  };

  const MnemonicToFactorKeyHex = async (mnemonic: string) => {
    if (!coreKitInstance) {
      throw new Error("coreKitInstance is not set");
    }
    try {
      const factorKey = await mnemonicToKey(mnemonic);
      setBackupFactorKey(factorKey);
      return factorKey;
    } catch (error) {
      uiConsole(error);
    }
  };

  const getUserInfo = async () => {
    const user = coreKitInstance.getUserInfo();
    uiConsole(user);
  };

  const logout = async () => {
    await coreKitInstance.logout();
    setCoreKitStatus(coreKitInstance.status);
    uiConsole("logged out");
  };

  const getAccounts = async () => {
    if (!coreKitInstance) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3 = new Web3(evmProvider);

    // Get user's Ethereum public address
    const address = await web3.eth.getAccounts();
    uiConsole(address);
  };

  const getBalance = async () => {
    if (!coreKitInstance) {
      uiConsole("provider not initialized yet");
      return;
    }
    const web3 = new Web3(evmProvider);

    // Get user's Ethereum public address
    const address = (await web3.eth.getAccounts())[0];

    // Get user's balance in ether
    const balance = web3.utils.fromWei(
      await web3.eth.getBalance(address), // Balance is in wei
      "ether"
    );
    uiConsole(balance);
  };

  const signMessage = async () => {
    if (!coreKitInstance) {
      uiConsole("provider not initialized yet");
      return;
    }
    uiConsole("Signing Message...");
    const web3 = new Web3(evmProvider);

    // Get user's Ethereum public address
    const fromAddress = (await web3.eth.getAccounts())[0];

    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    try {
      const signedMessage = await web3.eth.personal.sign(
        originalMessage,
        fromAddress,
        "123456" // configure your own password here.
      );
      uiConsole(signedMessage);
    } catch(err) {
      log('sign message error', err)
    }
  };

  const signAndSendTransaction = async () => {
    if (!coreKitInstance) {
      uiConsole("provider not initialized yet");
      return;
    }
    uiConsole("Signing and Sending Transaction...");
    const web3 = new Web3(evmProvider);

    try {
      // Get user's Ethereum public address
      const fromAddress = (await web3.eth.getAccounts())[0];

      // Prepare the transaction
      const transaction = {
        from: fromAddress,
        to: '0x58AF9AdeE4B5b913Be1ab18f6647b03c89A35e8e',  // Replace with the recipient's address
        value: web3.utils.toWei('0.00005', 'ether'),  // Amount to send
        gas: 21000,  // Gas limit
        gasPrice: await web3.eth.getGasPrice(),  // Get current gas price
      };

      // Sign and send the transaction
      const signedTx = await web3.eth.sendTransaction(transaction);

      uiConsole("Transaction sent:", signedTx.transactionHash);
    } catch (error: any) {
      console.error("Error signing and sending transaction:", error);
      uiConsole("Error:", error.message);
    }
  };

  const criticalResetAccount = async (): Promise<void> => {
    // This is a critical function that should only be used for testing purposes
    // Resetting your account means clearing all the metadata associated with it from the metadata server
    // The key details will be deleted from our server and you will not be able to recover your account
    if (!coreKitInstance) {
      throw new Error("coreKitInstance is not set");
    }
    // if (selectedNetwork === WEB3AUTH_NETWORK.MAINNET) {
    //   throw new Error("reset account is not recommended on mainnet");
    // }
    await coreKitInstance.tKey.storageLayer.setMetadata({
      privKey: new BN(coreKitInstance.state.postBoxKey! as string, "hex"),
      input: { message: "KEY_NOT_FOUND" },
    });
    if (coreKitInstance.status === COREKIT_STATUS.LOGGED_IN) {
      await coreKitInstance.commitChanges();
    }
    uiConsole("reset");
    logout();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function uiConsole(...args: any): void {
    const el = document.querySelector("#console>p");
    if (el) {
      el.innerHTML = JSON.stringify(args || {}, null, 2);
    }
    console.log(...args);
  }

  const loggedInView = (
    <>
      <div className="flex-container">
        <div>
          <Button onClick={getUserInfo} className="card">
            Get User Info
          </Button>
        </div>
        <div>
          <Button onClick={keyDetails} className="card">
            Key Details
          </Button>
        </div>
        <div>
          <Button onClick={enableMFA} className="card">
            Enable MFA
          </Button>
        </div>
        <div>
          <Button onClick={getAccounts} className="card">
            Get Accounts
          </Button>
        </div>
        <div>
          <Button onClick={getBalance} className="card">
            Get Balance
          </Button>
        </div>
        <div>
          <Button onClick={signMessage} className="card">
            Sign Message
          </Button>
        </div>
        <div>
          <Button onClick={signAndSendTransaction} className="card">
            Sign and Send Transaction
          </Button>
        </div>
        <div>
          <Button onClick={logout} className="card">
            Log Out
          </Button>
        </div>
        <div>
          <Button onClick={criticalResetAccount} className="card">
            [CRITICAL] Reset Account
          </Button>
        </div>
        <div>
          <Button onClick={exportMnemonicFactor} className="card">
            Generate Backup (Mnemonic)
          </Button>
        </div>
        <div>
          <Button onClick={generateMyDeviceFactor} className="card">
            Generate my devide factor
          </Button>
        </div>
      </div>
    </>
  );

  const unloggedInView = (
    <>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={login} className="card">
        Login
      </Button>
      <div className={coreKitStatus === COREKIT_STATUS.REQUIRED_SHARE ? "" : "disabledDiv"}>
        <Button onClick={() => getDeviceFactor()} className="card">
          Get Device Factor
        </Button>
        <hr />
        <label>Recover Using Mnemonic Factor Key:</label>
        <Input value={mnemonicFactor} onChange={(e) => setMnemonicFactor(e.target.value)} />
        <Button onClick={() => MnemonicToFactorKeyHex(mnemonicFactor)} className="card">
          Get Recovery Factor Key using Mnemonic
        </Button>
        <hr />
        <Button onClick={() => getSocialMFAFactorKey()} className="card">
          Get Social MFA Factor
        </Button>
        <hr />
        <label>Backup/ Device Factor: {backupFactorKey}</label>
        <Button onClick={() => inputBackupFactorKey()} className="card">
          Input Backup Factor Key
        </Button>
        <hr />
        <Button onClick={criticalResetAccount} className="card">
          [CRITICAL] Reset Account
        </Button>
      </div>
    </>
  );

  return (
    <div className="container">
      <h1 className="title">
        <a target="_blank" href="https://web3auth.io/docs/sdk/core-kit/mpc-core-kit/" rel="noreferrer">
          Web3Auth MPC Core Kit
        </a>{" "}
        Nextjs Quick Start
      </h1>

      <div className="grid">{coreKitStatus === COREKIT_STATUS.LOGGED_IN ? loggedInView : unloggedInView}</div>
      <div id="console" style={{ whiteSpace: "pre-line" }}>
        <p style={{ whiteSpace: "pre-line" }}></p>
      </div>

      <footer className="footer">
        <a
          href="https://github.com/Web3Auth/web3auth-core-kit-examples/tree/main/mpc-core-kit-web/quick-starts/mpc-core-kit-react-quick-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </footer>
    </div>
  );
}

export default App;