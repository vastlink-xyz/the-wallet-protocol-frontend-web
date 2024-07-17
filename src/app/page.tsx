"use client";

import { useState } from "react";
import { usePassport } from "@/hooks/usePassport";

import axios from "axios";

import theWalletAuthenticaionService from "@/services/AuthenticationService";
import theWalletTransactionService from "@/services/TransactionService";
import theWalletPassportService from "@/services/PassportService";

export default function Page() {
  const [username, setUsername] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [authenticateSetup, setAuthenticateSetup] = useState(false);
  const [signMessageLoading, setSignMessageLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageSignature, setMessageSignature] = useState("");
  const [authenticatedHeader, setAuthenticatedHeader] = useState({});
  const [address, setAddress] = useState<string>();

  const [verifyTransactionId, setVerifyTransactionId] = useState<string>();
  const [verifyTransactionOtp, setVerifyTransactionOtp] = useState<string>();
  const [desUsername, setDesUsername] = useState<any>();

  const userInput = {
    username: username,
    userDisplayName: username,
  };

  const { passport } = usePassport(
    // "07907e39-63c6-4b0b-bca8-377d26445172" // original
    // "43ca2cb8-886e-417f-9e31-0c0c5b3acd1e" // localhost:4943
    "4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370" // localhost:3000
  );

  async function preRegister(userInput: any) {
    // TODO by JJ: to make ${process.env.HOST} work
    const response = await axios.post(`http://localhost:5001/auth/generate-otp`, 
      {
        email: userInput.username,
      }
    );
    console.log(response);
  }
  
  async function register() {
    await preRegister(userInput);
    return;
  }

  async function authenticate() {
    console.log("userinput is", userInput);
    setAuthenticating(true);
    try {
      await passport.setupEncryption();
      const [authenticatedHeader, address] = await passport.authenticate(
        userInput
      )!;
      setAuthenticatedHeader(authenticatedHeader);
      console.log(address);
      setAddress(address);
      setAuthenticated(true);
    } catch (error) {
      console.error("Error registering:", error);
    } finally {
      setAuthenticating(false);
    }
  }

  async function signMessage(message: string) {
    try {
      setSignMessageLoading(true);

      const response = await theWalletAuthenticaionService.sign(authenticatedHeader, message);

      setMessageSignature(response);
      setSignMessageLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  // async function signTransaction() {
  //   try {
  //     const response = await theWalletTransactionService.passportSignTransaction(authenticatedHeader);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async function signTransaction() {
    try {
      console.log(authenticatedHeader);
      const encryptedUsername = `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`
      const aesKey = passport.aesKey;
      const username = await theWalletPassportService.aesDecrypt(encryptedUsername, aesKey);
      console.log("encryptedUsername", encryptedUsername);
      console.log("aesKey", passport.aesKey);
      console.log("username", username); // TODO by JJ: username should better be decrypted on the server side?
      setDesUsername(username);

      const response = await axios.post(`http://localhost:5001/transaction/sign`, 
        {
          to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
          amount: 3,
        }, 
        {
          headers: {
            "Content-Type": "application/json",
            "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
            "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
            "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
            "X-Passport-Username": `${username.username}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function verifyTransaction() {
    const id = verifyTransactionId;
    const otp = verifyTransactionOtp;
    const response = await axios.post(`http://localhost:5001/transaction/verify-to-sign`, 
      {
        transactionId: id,
        OTP: otp,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-Encrypted-Key": `${authenticatedHeader["X-Encrypted-Key" as keyof typeof authenticatedHeader]}`,
          "X-Scope-Id": `${authenticatedHeader["X-Scope-Id" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-User": `${authenticatedHeader["X-Encrypted-User" as keyof typeof authenticatedHeader]}`,
          "X-Encrypted-Session": `${authenticatedHeader["X-Encrypted-Session" as keyof typeof authenticatedHeader]}`,
          "X-Passport-Username": `${desUsername}`,
        },
      }
    );
    console.log(response);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-black">
      <div>
        <input
          value={verifyTransactionId}
          onChange={(e) => setVerifyTransactionId(e.target.value)}
          className="border border-1 rounded p-2 border-black mb-4 ml-2 text-center"
          placeholder="verify transaction id"
        />

        <input
          value={verifyTransactionOtp}
          onChange={(e) => setVerifyTransactionOtp(e.target.value)}
          className="border border-1 rounded p-2 border-black mb-4 ml-2 text-center"
          placeholder="verify transaction otp"
        />

        <button
            onClick={async () => await verifyTransaction()}
            className="border border-1 rounded p-2 border-black mb-4 ml-2"
          >
            Verify Transaction
          </button>
      </div>

      <div
        className={`text-2xl font-bold mb-8 ${
          authenticated ? "text-green-500" : "text-red-500"
        }`}
      >
        {authenticated ? "Authenticated" : "Not authenticated"}
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold underline">
          Passport Protocol Quickstart
        </h1>
        <p className="mt-2 text-lg">
          This is a quickstart guide for the Passport Protocol SDK.
        </p>

        <div className="flex flex-col mt-4 space-y-4">
          {authenticated ? (
            <>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold">Address</div>
                  <div>{address}</div>
                </div>
              </div>

              {messageSignature && (
                <div className="flex flex-col space-y-4 max-w-[60ch] break-words">
                  <div className="font-bold">Message Signature</div>
                  <div>{messageSignature}</div>
                </div>
              )}

              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-1 rounded p-2 border-black mb-4 ml-2 text-center"
                placeholder="Message to sign"
              />
              <button
                onClick={async () => await signMessage(message)}
                disabled={signMessageLoading}
                className="border border-1 rounded p-2 border-black mb-4 ml-2"
              >
                {signMessageLoading ? "Signing..." : "Sign Message"}
              </button>
              <button
                onClick={async () => await signTransaction()}
                className="border border-1 rounded p-2 border-black mb-4 ml-2"
              >
                Sign Transaction
              </button>
            </>
          ) : (
            <div className="mb-12 flex flex-col space-y-2 mt-8">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-1 rounded p-2 border-black mb-4 ml-2 text-center"
                placeholder="Enter unique username"
              />
              <button
                className="border border-1 rounded p-2 border-black mb-4 ml-2"
                onClick={async () => {
                  if (authenticateSetup) {
                    await authenticate();
                  } else {
                    await register();
                  }
                }}
                disabled={registering || authenticating}
              >
                {authenticateSetup
                  ? authenticating
                    ? "Authenticating..."
                    : "Authenticate"
                  : registering
                  ? "Registering..."
                  : authenticating
                  ? "Authenticating..."
                  : "Register"}
              </button>

              <span
                onClick={() => setAuthenticateSetup(!authenticateSetup)}
                className="cursor-pointer"
              >
                {authenticateSetup
                  ? "Register a Passkey?"
                  : "Already have a passkey?"}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
