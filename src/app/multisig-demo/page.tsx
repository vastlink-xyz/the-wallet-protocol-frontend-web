"use client";

import { useState, useEffect } from "react";
import { 
  LitNodeClient
} from "@lit-protocol/lit-node-client";
import { ethers } from "ethers";
import { LIT_NETWORK } from "@lit-protocol/constants";

// Define AuthMethodType enum
enum AuthMethodType {
  Google = "google",
  // Can add other authentication methods
}

const MultisigPage = () => {
  const [litNodeClient, setLitNodeClient] = useState<LitNodeClient | null>(null);
  const [sessionSigs, setSessionSigs] = useState<any>(null);
  const [multisigPKP, setMultisigPKP] = useState<any>(null);
  const [user1PKP, setUser1PKP] = useState<any>(null);
  const [user2PKP, setUser2PKP] = useState<any>(null);
  const [isCreatingPKP, setIsCreatingPKP] = useState<boolean>(false);
  const [transactionAmount, setTransactionAmount] = useState<string>("0.001");
  const [destinationAddress, setDestinationAddress] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [pendingTransaction, setPendingTransaction] = useState<any>(null);
  const [user1Signed, setUser1Signed] = useState<boolean>(false);
  const [user2Signed, setUser2Signed] = useState<boolean>(false);

  // Initialize Lit client
  useEffect(() => {
    const initLitClient = async () => {
      try {
        const client = new LitNodeClient({
          litNetwork: LIT_NETWORK.DatilDev,
          debug: true,
        });
        await client.connect();
        setLitNodeClient(client);
        console.log("Lit client connected");
      } catch (error) {
        console.error("Error connecting to Lit client:", error);
      }
    };

    initLitClient();
  }, []);

  // Google login and get session signatures
  const signInWithGoogle = async () => {
    try {
      if (!litNodeClient) {
        setStatusMessage("Lit client not connected, please try again later");
        return;
      }
      
      setStatusMessage("Signing in with Google...");
      
      // Mock Google login and session signature retrieval
      // Actual implementation should use Lit Protocol's Google authentication
      const mockSessionSigs = {
        accessToken: "mock-google-access-token",
        pkpPublicKey: "mock-pkp-public-key"
      };
      
      setSessionSigs(mockSessionSigs);
      setStatusMessage("Google login successful!");
      setStep(2);
    } catch (error) {
      console.error("Google login error:", error);
      setStatusMessage(`Login failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Create multisig PKP wallet
  const createMultisigPKP = async () => {
    try {
      if (!sessionSigs) {
        setStatusMessage("Please login first");
        return;
      }
      
      setIsCreatingPKP(true);
      setStatusMessage("Creating multisig PKP wallet...");
      
      // Mock the process of creating multisig PKP
      // Actual implementation should use Lit Protocol's API to create PKP
      setTimeout(() => {
        // Generate mock PKP information
        const mockPKP = {
          publicKey: "0x" + Array.from({length: 32}, () => 
            Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
          ).join(''),
          ethAddress: ethers.utils.computeAddress("0x" + Array.from({length: 32}, () => 
            Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
          ).join('')),
          tokenId: "1"
        };
        
        setMultisigPKP(mockPKP);
        setStatusMessage(`Multisig PKP wallet created successfully! Address: ${mockPKP.ethAddress}`);
        setStep(3);
        setIsCreatingPKP(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error creating multisig PKP:", error);
      setStatusMessage(`Failed to create multisig PKP: ${error instanceof Error ? error.message : String(error)}`);
      setIsCreatingPKP(false);
    }
  };

  // Set User 1's PKP
  const setUser1PKPAddress = async (address: string) => {
    try {
      setStatusMessage("Setting User 1's PKP...");
      
      // Mock PKP address validation
      const mockUser1PKP = {
        publicKey: "0x" + Array.from({length: 32}, () => 
          Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
        ).join(''),
        ethAddress: address,
        tokenId: "2"
      };
      
      setUser1PKP(mockUser1PKP);
      setStatusMessage("User 1's PKP set successfully!");
    } catch (error) {
      console.error("Error setting User 1 PKP:", error);
      setStatusMessage(`Failed to set User 1 PKP: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Set User 2's PKP
  const setUser2PKPAddress = async (address: string) => {
    try {
      setStatusMessage("Setting User 2's PKP...");
      
      // Mock PKP address validation
      const mockUser2PKP = {
        publicKey: "0x" + Array.from({length: 32}, () => 
          Math.floor(Math.random() * 256).toString(16).padStart(2, '0')
        ).join(''),
        ethAddress: address,
        tokenId: "3"
      };
      
      setUser2PKP(mockUser2PKP);
      setStatusMessage("User 2's PKP set successfully!");
    } catch (error) {
      console.error("Error setting User 2 PKP:", error);
      setStatusMessage(`Failed to set User 2 PKP: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Create transaction proposal
  const createTransactionProposal = async () => {
    try {
      if (!multisigPKP || !destinationAddress || !transactionAmount) {
        setStatusMessage("Missing required information");
        return;
      }
      
      setStatusMessage("Creating transaction proposal...");
      
      // Create transaction data
      const tx = {
        to: destinationAddress,
        value: ethers.utils.parseEther(transactionAmount),
        from: multisigPKP.ethAddress,
        nonce: 0,
        gasLimit: ethers.utils.hexlify(100000),
        gasPrice: ethers.utils.parseUnits("50", "gwei"),
      };
      
      setPendingTransaction(tx);
      setStatusMessage("Transaction proposal created successfully, waiting for signatures");
      setStep(5);
    } catch (error) {
      console.error("Error creating transaction proposal:", error);
      setStatusMessage(`Failed to create transaction proposal: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // User 1 signs transaction proposal
  const signTransactionProposalUser1 = async () => {
    try {
      if (!pendingTransaction || !user1PKP) {
        setStatusMessage("Missing transaction proposal or User 1 PKP");
        return;
      }
      
      setStatusMessage("User 1 is signing transaction proposal...");
      
      // Mock signing process
      // Actual implementation should use Lit Action to verify signature
      setTimeout(() => {
        setUser1Signed(true);
        setStatusMessage("User 1 has signed the transaction proposal");
        
        if (user2Signed) {
          setStep(6);
        }
      }, 1000);
    } catch (error) {
      console.error("User 1 signing error:", error);
      setStatusMessage(`User 1 signing failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // User 2 signs transaction proposal
  const signTransactionProposalUser2 = async () => {
    try {
      if (!pendingTransaction || !user2PKP) {
        setStatusMessage("Missing transaction proposal or User 2 PKP");
        return;
      }
      
      setStatusMessage("User 2 is signing transaction proposal...");
      
      // Mock signing process
      // Actual implementation should use Lit Action to verify signature
      setTimeout(() => {
        setUser2Signed(true);
        setStatusMessage("User 2 has signed the transaction proposal");
        
        if (user1Signed) {
          setStep(6);
        }
      }, 1000);
    } catch (error) {
      console.error("User 2 signing error:", error);
      setStatusMessage(`User 2 signing failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  // Execute multisig transaction
  const executeMultisigTransaction = async () => {
    try {
      if (!user1Signed || !user2Signed || !pendingTransaction) {
        setStatusMessage("Transaction has not received all required signatures");
        return;
      }
      
      setStatusMessage("Executing multisig transaction...");
      
      // Define Lit Action code
      const litActionCode = `
        const go = async () => {
          // Verify signatures from both users
          const user1Sig = "${user1PKP.publicKey}";
          const user2Sig = "${user2PKP.publicKey}";
          
          // Signature verification logic
          // Actual implementation should include complete signature verification
          
          // If signatures are verified, execute transaction with multisig PKP
          const tx = ${JSON.stringify(pendingTransaction)};
          
          // Sign transaction with multisig PKP's private key
          // Actual implementation should use Lit Protocol's signing functionality
          
          return {
            success: true,
            transactionHash: "0x" + ethers.utils.keccak256(JSON.stringify(tx)).substring(2)
          };
        };
        
        go();
      `;
      
      // Mock Lit Action execution
      setTimeout(() => {
        const txHash = "0x" + ethers.utils.keccak256(JSON.stringify(pendingTransaction)).substring(2);
        setTransactionHash(txHash);
        setStatusMessage(`Transaction executed successfully! Transaction hash: ${txHash}`);
        setStep(6);
      }, 2000);
    } catch (error) {
      console.error("Error executing multisig transaction:", error);
      setStatusMessage(`Transaction execution failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lit Protocol Multisig Wallet</h1>
      
      <div className="bg-gray-100 p-4 mb-8 rounded">
        <h2 className="text-xl font-semibold mb-2">Multisig Wallet Introduction</h2>
        <p className="mb-2">This implementation uses a single PKP as a multisig wallet, with signature logic controlled through Lit Action.</p>
        <p className="mb-2">Workflow:</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Create a PKP as multisig wallet</li>
          <li>Set up two authorized users' PKPs</li>
          <li>Create transaction proposal</li>
          <li>Both authorized users sign</li>
          <li>Lit Action verifies signatures and executes transaction</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>1</div>
          <span className="font-semibold">Google Login</span>
        </div>
        
        {step === 1 && (
          <button 
            onClick={signInWithGoogle}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign in with Google
          </button>
        )}
      </div>
      
      {step >= 2 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>2</div>
            <span className="font-semibold">Create Multisig PKP Wallet</span>
          </div>
          
          {step === 2 && (
            <button 
              onClick={createMultisigPKP}
              disabled={isCreatingPKP}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
            >
              {isCreatingPKP ? "Creating..." : "Create Multisig PKP Wallet"}
            </button>
          )}
          
          {multisigPKP && (
            <div className="mt-2">
              <p>Multisig PKP Wallet Address: {multisigPKP.ethAddress}</p>
            </div>
          )}
        </div>
      )}
      
      {step >= 3 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>3</div>
            <span className="font-semibold">Set Authorized User PKPs</span>
          </div>
          
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block mb-2">User 1 PKP Address</label>
                <input 
                  type="text" 
                  onChange={(e) => setUser1PKPAddress(e.target.value)}
                  placeholder="Enter User 1's PKP address"
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div>
                <label className="block mb-2">User 2 PKP Address</label>
                <input 
                  type="text" 
                  onChange={(e) => setUser2PKPAddress(e.target.value)}
                  placeholder="Enter User 2's PKP address"
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <button 
                onClick={() => {
                  if (user1PKP && user2PKP) {
                    setStep(4);
                    setStatusMessage("Authorized users set successfully, please create transaction proposal");
                  } else {
                    setStatusMessage("Please set both authorized users' PKP addresses first");
                  }
                }}
                disabled={!user1PKP || !user2PKP}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                Confirm Authorized Users
              </button>
            </div>
          )}
        </div>
      )}
      
      {step >= 4 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>4</div>
            <span className="font-semibold">Create Transaction Proposal</span>
          </div>
          
          {step === 4 && (
            <div className="space-y-4">
              <div className="mb-4">
                <label className="block mb-2">Destination Address</label>
                <input 
                  type="text" 
                  value={destinationAddress} 
                  onChange={(e) => setDestinationAddress(e.target.value)}
                  placeholder="Enter ETH recipient address"
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2">Amount (ETH)</label>
                <input 
                  type="text" 
                  value={transactionAmount} 
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  placeholder="ETH amount"
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <button 
                onClick={createTransactionProposal}
                disabled={!destinationAddress || !transactionAmount}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                Create Transaction Proposal
              </button>
            </div>
          )}
        </div>
      )}
      
      {step >= 5 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 5 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>5</div>
            <span className="font-semibold">Sign Transaction Proposal</span>
          </div>
          
          {step === 5 && (
            <div className="space-y-4">
              <div className="mb-4">
                <p>Transaction Details:</p>
                <ul className="list-disc pl-5">
                  <li>Send to: {destinationAddress}</li>
                  <li>Amount: {transactionAmount} ETH</li>
                  <li>From multisig wallet: {multisigPKP?.ethAddress}</li>
                </ul>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={signTransactionProposalUser1}
                  disabled={user1Signed}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {user1Signed ? "Signed" : "User 1 Sign"}
                </button>
                
                <button 
                  onClick={signTransactionProposalUser2}
                  disabled={user2Signed}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {user2Signed ? "Signed" : "User 2 Sign"}
                </button>
              </div>
              
              {(user1Signed || user2Signed) && (
                <div className="mt-4">
                  <p>Signature Status:</p>
                  <ul className="list-disc pl-5">
                    <li>User 1: {user1Signed ? "Signed" : "Not signed"}</li>
                    <li>User 2: {user2Signed ? "Signed" : "Not signed"}</li>
                  </ul>
                </div>
              )}
              
              {user1Signed && user2Signed && (
                <button 
                  onClick={executeMultisigTransaction}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Execute Multisig Transaction
                </button>
              )}
            </div>
          )}
        </div>
      )}
      
      {step >= 6 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${step >= 6 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>6</div>
            <span className="font-semibold">Transaction Complete</span>
          </div>
          
          <div>
            <p className="mb-4">Multisig transaction executed successfully!</p>
            <p className="mb-4">Transaction Hash: {transactionHash}</p>
            
            <button 
              onClick={() => {
                setStep(1);
                setUser1Signed(false);
                setUser2Signed(false);
                setTransactionHash("");
                setPendingTransaction(null);
                setDestinationAddress("");
                setTransactionAmount("0.001");
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
      
      {statusMessage && (
        <div className={`p-4 rounded mb-4 ${statusMessage.includes('failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default MultisigPage; 