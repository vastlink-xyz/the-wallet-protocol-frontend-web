'use client'

import { useState } from 'react';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { MintedPkp } from './get-pkp-session-sigs';
import axios from 'axios';

type LitActionExecutorProps = {
  pkpInfo: MintedPkp;
  sessionSigs: any;
  litNodeClient: LitNodeClient;
};

export default function LitActionExecutor({ 
  pkpInfo, 
  sessionSigs, 
  litNodeClient 
}: LitActionExecutorProps) {
  const [litActionResult, setLitActionResult] = useState<any>(null);
  const [isExecutingAction, setIsExecutingAction] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExecuteLitAction = async () => {
    if (!sessionSigs || !pkpInfo) {
      setError("Session signatures or PKP info missing");
      return;
    }

    setIsExecutingAction(true);
    setError(null);
    setLitActionResult(null);

    try {
      const response = await axios.post('http://localhost:5001/lit/execute-lit-action', {
        sessionSigs: sessionSigs,
      })
      console.log("Lit Action executed successfully:", response);
      setLitActionResult(response);
    } catch (error) {
      console.error("Error executing Lit Action:", error);
      setError(`Failed to execute Lit Action: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsExecutingAction(false);
    }
  };

  // Alternative function to execute a Lit Action from IPFS
  const handleExecuteLitActionFromIPFS = async () => {
    if (!sessionSigs || !pkpInfo) {
      setError("Session signatures or PKP info missing");
      return;
    }

    setIsExecutingAction(true);
    setError(null);
    setLitActionResult(null);

    try {
      // Make sure we're connected
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // The IPFS ID of a sample signing Lit Action
      // You would replace this with your own Lit Action IPFS ID
      const ipfsId = "QmT5Vi5byp1vcjE9gkxdWYz3zmScg3BBoM5wnWcUEqXiF7";

      // Execute the Lit Action from IPFS
      const response = await litNodeClient.executeJs({
        ipfsId,
        sessionSigs: sessionSigs,
        jsParams: {
          // Parameters to pass to the Lit Action
          toSign: '123',
          publicKey: pkpInfo.publicKey,
          sigName: "sig1"
        }
      });

      console.log("Lit Action executed successfully from IPFS:", response);
      setLitActionResult(response);
    } catch (error) {
      console.error("Error executing Lit Action from IPFS:", error);
      setError(`Failed to execute Lit Action: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsExecutingAction(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h4 className="text-xl font-medium text-gray-700 mb-4">Execute Lit Action</h4>
      
      <div className="flex flex-wrap gap-4 mb-4">
        <button 
          onClick={handleExecuteLitAction} 
          disabled={isExecutingAction}
          className={`px-4 py-2 rounded-md font-medium ${
            isExecutingAction
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-orange-500 hover:bg-orange-600 text-white transition-colors'
          }`}
        >
          {isExecutingAction ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Executing...
            </span>
          ) : "Execute Inline Lit Action"}
        </button>
        
        <button 
          onClick={handleExecuteLitActionFromIPFS} 
          disabled={isExecutingAction}
          className={`px-4 py-2 rounded-md font-medium ${
            isExecutingAction
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-purple-500 hover:bg-purple-600 text-white transition-colors'
          }`}
        >
          {isExecutingAction ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Executing...
            </span>
          ) : "Execute IPFS Lit Action"}
        </button>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-4">
          <div className="flex items-center">
            <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p>{error}</p>
          </div>
        </div>
      )}
      
      {litActionResult && (
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
            <p className="text-yellow-800 font-medium">Lit Action Result</p>
          </div>
          <pre className="bg-white p-4 rounded-md text-sm overflow-x-auto border border-gray-200">
            {JSON.stringify(litActionResult, null, 2)}
          </pre>
        </div>
      )}
      
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex items-center text-gray-600">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
          </svg>
          <h5 className="text-gray-700 font-medium">What are Lit Actions?</h5>
        </div>
        <p className="text-gray-600 text-sm mt-2">
          Lit Actions are JavaScript programs that run across the Lit Protocol network. They can be used to implement conditional signing logic, read blockchain state, make HTTP requests, and more.
        </p>
      </div>
    </div>
  );
} 