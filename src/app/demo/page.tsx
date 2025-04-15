'use client'

import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import { MintedPkp } from "./lit/get-pkp-session-sigs";
import { mintPkp } from "./lit/mint-pkp";
import { getExistingPkp } from "./lit/get-existing-pkp";
import { getPkpSessionSigs } from "./lit/get-pkp-session-sigs";
import LitActionExecutor from "./lit/LitActionExecutor";
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { LIT_NETWORK } from '@lit-protocol/constants';

type PkpSessionSigs = any;

// Initialize Lit Node Client
const litNodeClient = new LitNodeClient({
  litNetwork: LIT_NETWORK.DatilTest,
  debug: false
});

export default function DemoPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentialResponse, setCredentialResponse] = useState<CredentialResponse | null>(null);
  const [pkpInfo, setPkpInfo] = useState<MintedPkp | null>(null);
  const [sessionSigs, setSessionSigs] = useState<PkpSessionSigs | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pkpExists, setPkpExists] = useState<boolean | null>(null);
  const [existingPkpInfo, setExistingPkpInfo] = useState<MintedPkp | null>(null);
  const [usingExistingPkp, setUsingExistingPkp] = useState<boolean>(false);

  const test = async () => {
    setPkpInfo({
      "tokenId": "63311344581533923113774683385824496076426643047245640554870006011860904998821",
      "publicKey": "0x04acf35fbf2f023c15bdc27e3ea18c418f1325fd3b1577a7027571c25d9e93c625a8000f164ba90a2a17bee47e6653ecce13c0daa92c554dc9dc3e105494e255f6",
      "ethAddress": "0x0190323F9e796E906B8B770D42c689AFcFB2A46e",
    });
  }

  const handleGoogleSuccess = (response: CredentialResponse) => {
    console.log("Google login successful:", response);
    setIsAuthenticated(true);
    setCredentialResponse(response);
    setError(null);
  };

  const handleGoogleError = () => {
    console.log("Google login failed");
    setIsAuthenticated(false);
    setCredentialResponse(null);
    setError("Google authentication failed. Please try again.");
  };

  const handleGetExistingPKP = async () => {
    if (!credentialResponse || !credentialResponse.credential) {
      setError("No credential response available");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await getExistingPkp({
        credential: credentialResponse.credential,
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
      });
      
      if (result.success) {
        console.log("Found existing PKP:", result.pkpInfo);
        setExistingPkpInfo(result.pkpInfo);
        setPkpExists(true);
      } else {
        console.log("No existing PKP found:", result.message);
        setExistingPkpInfo(null);
        setPkpExists(false);
        if (!result.notFound) {
          setError(result.message);
        }
      }
    } catch (error) {
      console.error("Error getting existing PKP:", error);
      setError("Failed to check for existing PKP. Please try again.");
      setPkpExists(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMintPKP = async () => {
    if (!credentialResponse || !credentialResponse.credential) {
      setError("No credential response available");
      return;
    }
    setIsLoading(true);
    setUsingExistingPkp(false);
    try {
      const pkp = await mintPkp(credentialResponse.credential, process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!);
      if (!pkp) {
        throw new Error("Failed to mint PKP");
      }
      console.log("Minted PKP:", pkp);
      setPkpInfo(pkp);
      setError(null);
    } catch (error) {
      console.error("Error minting PKP:", error);
      setPkpInfo(null);
      setSessionSigs(null);
      setError("Failed to mint PKP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseExistingPKP = () => {
    if (existingPkpInfo) {
      setPkpInfo(existingPkpInfo);
      setUsingExistingPkp(true);
      setSessionSigs(null);
    }
  };

  const handleGetSessionSigs = async () => {
    if (!credentialResponse || !pkpInfo) {
      setError("Missing credentials or PKP info");
      return;
    }
    try {
      console.log("Getting session signatures...");
      const sigs = await getPkpSessionSigs(credentialResponse, pkpInfo);
      console.log("Got session signatures:", sigs);
      setSessionSigs(sigs);
      setError(null);
    } catch (error) {
      console.error("Error getting session signatures:", error);
      setSessionSigs(null);
      setError("Failed to get session signatures. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mint a PKP Using a Google Account</h3>
        <div className="border-t border-gray-200 mt-4 pt-4"></div>
      </div>

      <button onClick={test}>Test</button>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-4">Step 1: Authenticate with Google</h4>
        {!isAuthenticated ? (
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <p className="text-green-600 font-medium">Authenticated successfully!</p>
            </div>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">{JSON.stringify(credentialResponse, null, 2)}</pre>
          </div>
        )}
        <div className="border-t border-gray-200 mt-4 pt-4"></div>
      </div>

      {isAuthenticated && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h4 className="text-xl font-medium text-gray-700 mb-4">Step 2: Check for Existing PKP or Mint New PKP</h4>
          <div className="flex flex-wrap gap-4 mb-6">
            <button 
              onClick={handleGetExistingPKP} 
              disabled={isLoading}
              className={`px-4 py-2 rounded-md font-medium ${
                isLoading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600 text-white transition-colors'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking...
                </span>
              ) : "Check Existing PKP"}
            </button>
            
            <button 
              onClick={handleMintPKP} 
              disabled={isLoading || !!pkpInfo}
              className={`px-4 py-2 rounded-md font-medium ${
                isLoading || !!pkpInfo
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-emerald-500 hover:bg-emerald-600 text-white transition-colors'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Minting...
                </span>
              ) : pkpInfo && !usingExistingPkp ? "PKP Minted" : "Mint New PKP"}
            </button>
          </div>
          
          {pkpExists === false && !pkpInfo && (
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
              <p className="text-blue-800">No existing PKP found. You can mint a new one.</p>
            </div>
          )}
          
          {existingPkpInfo && !pkpInfo && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
              <p className="text-green-800 font-medium mb-2">Existing PKP found!</p>
              <div className="bg-white rounded-md p-4 border border-gray-200 mb-4">
                <h5 className="font-medium text-gray-800 mb-2">Existing PKP Information:</h5>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <span className="font-medium w-24">Public Key:</span>
                    <span className="text-gray-600 break-all">{existingPkpInfo.publicKey}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">ETH Address:</span>
                    <span className="text-gray-600 break-all">{existingPkpInfo.ethAddress}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Token ID:</span>
                    <span className="text-gray-600 break-all">{existingPkpInfo.tokenId}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <button 
                  onClick={handleUseExistingPKP}
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition-colors mb-2"
                >
                  Use This PKP
                </button>
                <p className="text-gray-600 text-sm">Or you can mint a new PKP by clicking "Mint New PKP" button above.</p>
              </div>
            </div>
          )}
          
          {pkpInfo && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                <p className="text-green-800 font-medium">
                  {usingExistingPkp ? "Using existing PKP!" : "Successfully minted new PKP!"}
                </p>
              </div>
              <div className="bg-white rounded-md p-4 border border-gray-200">
                <h5 className="font-medium text-gray-800 mb-2">Active PKP Information:</h5>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center">
                    <span className="font-medium w-24">Public Key:</span>
                    <span className="text-gray-600 break-all">{pkpInfo.publicKey}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">ETH Address:</span>
                    <span className="text-gray-600 break-all">{pkpInfo.ethAddress}</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium w-24">Token ID:</span>
                    <span className="text-gray-600 break-all">{pkpInfo.tokenId}</span>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="border-t border-gray-200 mt-4 pt-4"></div>
        </div>
      )}

      {pkpInfo && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h4 className="text-xl font-medium text-gray-700 mb-4">Step 3: Get PKP Session Signatures</h4>
          <button 
            onClick={handleGetSessionSigs} 
            disabled={!!sessionSigs}
            className={`px-4 py-2 rounded-md font-medium ${
              !!sessionSigs
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-indigo-500 hover:bg-indigo-600 text-white transition-colors'
            }`}
          >
            {sessionSigs ? "Session Sigs Retrieved" : "Get PKP Session Sigs"}
          </button>
          {sessionSigs && (
            <div className="mt-4 bg-indigo-50 border border-indigo-200 rounded-md p-4">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></div>
                <p className="text-indigo-800 font-medium">Successfully generated Session Signatures!</p>
              </div>
              <p className="text-gray-600">Check the browser console for detailed information.</p>
            </div>
          )}
          <div className="border-t border-gray-200 mt-4 pt-4"></div>
        </div>
      )}

      {sessionSigs && pkpInfo && (
        <LitActionExecutor 
          pkpInfo={pkpInfo} 
          sessionSigs={sessionSigs}
          litNodeClient={litNodeClient}
        />
      )}

      {error && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p>{error}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4"></div>
        </div>
      )}
    </div>
  );
}
