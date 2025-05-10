import { Button } from "@/components/ui/button"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { Loader2, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import type { MultisigWallet, MessageProposal } from '@/app/api/multisig/storage'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { executeSignLitAction, mintMultisigPKP } from "../helper"
import { log, formatEthAmount, fetchEthBalance, isGoogleTokenValid } from "@/lib/utils"
import { calculateCIDFromString, getSessionSigsByPkp, MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID, SIGN_PROPOSAL_LIT_ACTION_IPFS_ID } from "@/lib/lit"
import { litNodeClient } from "@/lib/lit"
import { AlertCircle } from "lucide-react"
import { AUTH_METHOD_TYPE, LIT_CHAINS } from "@lit-protocol/constants"
import { ethers } from "ethers"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SignerEmailField } from "@/components/SignerEmailField"
import { WalletSettings } from "./WalletSettings"
import { WalletSettingsProposal } from "./WalletSettingsProposal"
import { getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env"

// eth sepolia
const chainInfo = {
  rpcUrl: LIT_CHAINS['sepolia'].rpcUrls[0],
  chainId: LIT_CHAINS['sepolia'].chainId,
}

const ethersProvider = new ethers.providers.JsonRpcProvider(
  chainInfo.rpcUrl
);

export function Multisig({
  currentPkp,
  sessionPkp,
  authMethod,
  googleAuthMethodId,
  initialWalletId = '',
}: {
  currentPkp: IRelayPKP,
  sessionPkp: IRelayPKP,
  authMethod: AuthMethod,
  googleAuthMethodId: string,
  initialWalletId?: string,
}) {
  const [isCreatingProposal, setIsCreatingProposal] = useState(false)
  const [isSigningProposal, setIsSigningProposal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [wallets, setWallets] = useState<MultisigWallet[]>([])
  const [proposals, setProposals] = useState<MessageProposal[]>([])
  const [selectedWalletId, setSelectedWalletId] = useState<string>(initialWalletId)
  const [selectedWallet, setSelectedWallet] = useState<MultisigWallet | null>(null)
  const [selectedMultisigPkp, setSelectedMultisigPkp] = useState<IRelayPKP | null>(null)
  const [walletBalance, setWalletBalance] = useState<string>('0')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [data, setData] = useState('')
  const [signer2Address, setSigner2Address] = useState('')
  const [signer2PublicKey, setSigner2PublicKey] = useState('')
  const [signer2GoogleAuthMethodId, setSigner2GoogleAuthMethodId] = useState('')
  const [executeResult, setExecuteResult] = useState<any>(null)
  const [showWalletSettings, setShowWalletSettings] = useState(false)

  useEffect(() => {
    fetchWallets()
  }, [currentPkp])

  const fetchWallets = async () => {
    try {
      const { data } = await axios.get(`/api/multisig?address=${currentPkp.ethAddress}`)
      if (data.success) {
        setWallets(data.data)
      }
      log('data', data)
    } catch (error) {
      console.error('Failed to fetch wallets:', error)
    }
  }

  // Auto-fetch user information when ETH address changes
  useEffect(() => {
    if (signer2Address && signer2Address.startsWith('0x') && signer2Address.length === 42) {
      fetchUserByAddress(signer2Address);
    } else {
      // Clear other fields if address is invalid
      if (signer2PublicKey || signer2GoogleAuthMethodId) {
        setSigner2PublicKey('');
        setSigner2GoogleAuthMethodId('');
      }
    }
  }, [signer2Address]);

  const fetchUserByAddress = async (address: string) => {
    
    try {
      const response = await axios.get(`/api/user/address?address=${address}`);
      
      if (response.data.success) {
        const { authMethodId, pkp } = response.data.data;
        setSigner2PublicKey(pkp.publicKey);
        setSigner2GoogleAuthMethodId(authMethodId);
        log('Found user for address', address, pkp, authMethodId);
      } else {
        setSigner2PublicKey('');
        setSigner2GoogleAuthMethodId('');
      }
    } catch (error) {
      console.error('Failed to fetch user by address:', error);
      setSigner2PublicKey('');
      setSigner2GoogleAuthMethodId('');
    }
  };

  // Update selected wallet and PKP when wallet ID changes
  useEffect(() => {
    if (selectedWalletId) {
      fetchProposals()
      
      // Set the selected wallet and multisig PKP
      const wallet = wallets.find(w => w.id === selectedWalletId)
      if (wallet) {
        setSelectedWallet(wallet)
        setSelectedMultisigPkp(wallet.pkp)
        
        // Fetch wallet balance using the global utility
        updateWalletBalance(wallet.pkp.ethAddress)
      }
    } else {
      setSelectedWallet(null)
      setSelectedMultisigPkp(null)
      setWalletBalance('0')
    }
  }, [selectedWalletId, wallets])

  const fetchProposals = async () => {
    try {
      const { data } = await axios.get(`/api/multisig/messages?walletId=${selectedWalletId}`)
      if (data.success) {
        setProposals(data.data)
        return data.data
      }
    } catch (error) {
      console.error('Failed to fetch proposals:', error)
    }
  }

  // Helper function to verify Google token before any action
  const verifyGoogleToken = async (): Promise<boolean> => {
    if (!authMethod || !authMethod.accessToken) {
      toast.error('Authentication information is missing');
      return false;
    }
    
    const isValid = await isGoogleTokenValid(authMethod.accessToken);
    if (!isValid) {
      toast.error('Your Google login has expired. Please log in again.');
      return false;
    }
    
    return true;
  };

  const handleCreateProposal = async () => {
    if (!selectedWalletId || !recipientAddress || !amount) return;
    
    // Verify Google token before proceeding
    if (!await verifyGoogleToken()) return;

    try {
      setIsCreatingProposal(true)
      const txData = {
        to: recipientAddress,
        value: amount,
        data: data || '0x'
      }
      
      const response = await axios.post('/api/multisig/messages', {
        walletId: selectedWalletId,
        createdBy: currentPkp.ethAddress,
        message: JSON.stringify(txData),
        transactionData: txData,
        sendEmail: true,
        signers: selectedWallet?.signers
      })

      if (response.data.success) {
        setRecipientEmail('')
        setRecipientAddress('')
        setAmount('')
        setData('')
        await fetchProposals()
      }
    } catch (error) {
      console.error('Failed to create proposal:', error)
    } finally {
      setIsCreatingProposal(false)
    }
  }

  const handleSignProposal = async (proposal: MessageProposal) => {
    if (!currentPkp || !authMethod) {
      console.error('Missing required information for signing')
      return
    }
    
    // Verify Google token before proceeding
    if (!await verifyGoogleToken()) return;

    try {
      setIsSigningProposal(true)

      const litActionIpfsId = SIGN_PROPOSAL_LIT_ACTION_IPFS_ID
      log('ipfsid', litActionIpfsId)

      log('current pkp', currentPkp)
      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp)
      log('session sigs', sessionSigs)

      const signature = await executeSignLitAction({
        ipfsId: litActionIpfsId,
        sessionSigs,
        publicKey: currentPkp.publicKey,
        message: proposal.message,
      })
      log('signature', signature)

      // Submit signature to API
      const response = await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        signer: currentPkp.ethAddress,
        signature,
        publicKey: currentPkp.publicKey,
      })

      if (response.data.success) {
        const newProposals = await fetchProposals() // Refresh proposals list
        
        // Find the updated proposal
        const updatedProposal = newProposals.find((p: MessageProposal) => p.id === proposal.id)
        
        // Check if signatures have reached the threshold
        if (updatedProposal && selectedWallet && updatedProposal.signatures.length >= selectedWallet.threshold) {
          console.log('All required signatures collected for proposal:', proposal.id)
          log('Multisig proposal complete:', {
            proposalId: proposal.id,
            message: proposal.message,
            signatures: updatedProposal.signatures.length,
            requiredSignatures: selectedWallet.threshold,
            status: 'Complete'
          })
          
          // Automatically execute the multisig action once threshold is reached
          await executeMultisigLitAction(updatedProposal)
        }
      }
    } catch (error: any) {
      console.error('Failed to sign proposal:', error)
      
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        toast.error('Your Google login has expired. Please log in again.');
      } else {
        toast.error(`Error signing proposal: ${errorMessage}`);
      }
    } finally {
      setIsSigningProposal(false)
    }
  }

  const hasUserSigned = (proposal: MessageProposal) => {
    return proposal.signatures.some(sig => sig.signer === currentPkp.ethAddress)
  }
  
  const getTransactionDetails = (proposal: MessageProposal) => {
    try {
      // If this is a wallet settings modification proposal
      if (proposal.type === 'walletSettings') {
        const settingsData = proposal.settingsData || JSON.parse(proposal.message);
        const descriptions = [];
        
        if (settingsData.threshold !== undefined) {
          descriptions.push(`Change threshold to ${settingsData.threshold}`);
        }
        
        if (settingsData.signers) {
          const originalSigners = selectedWallet?.signers || [];
          const newSigners = settingsData.signers.filter((s: any) => 
            !originalSigners.some((os: any) => os.ethAddress === s.ethAddress)
          );
          
          const removedSigners = originalSigners.filter((os: any) => 
            !settingsData.signers.some((s: any) => s.ethAddress === os.ethAddress)
          );
          
          if (newSigners.length > 0) {
            descriptions.push(`Add ${newSigners.length} signer(s)`);
          }
          
          if (removedSigners.length > 0) {
            descriptions.push(`Remove ${removedSigners.length} signer(s)`);
          }
        }
        
        if (settingsData.mfaSettings) {
          if (settingsData.mfaSettings.phoneNumber || settingsData.mfaSettings.dailyLimit) {
            descriptions.push('Update MFA settings');
          }
        }
        
        // Default if no specific changes detected
        if (descriptions.length === 0) {
          descriptions.push('Wallet settings change');
        }
        
        return {
          to: 'Wallet Settings',
          value: '0',
          data: descriptions.join(', ')
        };
      }
      
      // For regular transaction type, use transactionData
      if (proposal.transactionData) {
        return proposal.transactionData;
      }
      
      // Try to parse message field (backward compatibility)
      return JSON.parse(proposal.message);
    } catch (e) {
      return {
        to: 'Unable to parse transaction details',
        value: '0',
        data: proposal.message,
      };
    }
  };
  
  // Function to execute a Lit Action using the multisig PKP
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!selectedMultisigPkp || !selectedWallet || !authMethod) {
      console.error('Missing multisig wallet information or auth method')
      return
    }
    
    // Verify Google token before proceeding
    if (!await verifyGoogleToken()) return;
    
    try {
      setIsLoading(true)
      setExecuteResult(null)
      
      // Connect to Lit Network
      await litNodeClient.connect()

      log('selected mulsig pkp', selectedMultisigPkp)
      
      // Get session signatures for the current user
      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp)
      
      // Check if this is a wallet settings change proposal
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      let settingsData = proposal.settingsData;
      
      // kkktodo: remove this
      // Backward compatibility for older proposals
      if (!isWalletSettingsProposal && !settingsData) {
        try {
          const proposalData = JSON.parse(proposal.message);
          if (proposalData.type === 'walletSettings' && proposalData.changes) {
            settingsData = proposalData.changes;
          }
        } catch (e) {
          // Ignore parsing errors
        }
      }
      
      if (isWalletSettingsProposal && settingsData) {
        // Handle wallet settings change
        await executeWalletSettingsProposal(proposal, settingsData, sessionSigs);
      } else {
        // Regular transaction execution
        await executeTransactionProposal(proposal, sessionSigs);
      }
    } catch (error: any) {
      console.error('Failed to execute multisig operation:', error)
      setExecuteResult({ error: error.message || 'Unknown error' })
      
      // Check for Google JWT expired error
      const errorMessage = error?.message || '';
      if (errorMessage.includes('Google JWT expired') || 
          (error?.shortMessage && error.shortMessage.includes('Google JWT expired'))) {
        toast.error('Your Google login has expired. Please log in again.');
      } else {
        toast.error(`Error executing operation: ${errorMessage}`);
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Function to execute wallet settings change proposal
  const executeWalletSettingsProposal = async (proposal: MessageProposal, settingsData: any, sessionSigs: any) => {
    if (!selectedWallet || !selectedMultisigPkp) return;
    log('selected multisig pkp', selectedWallet.pkp.publicKey)

    const updateWalletIpfsId = await getUpdateWalletIpfsId("base58")

    try {
      const litActionResponse = await litNodeClient.executeJs({
        ipfsId: updateWalletIpfsId,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: googleAuthMethodId,
            authMethodType: ethers.utils.hexValue(AUTH_METHOD_TYPE.GoogleJwt),
          },
          publicKey: selectedWallet.pkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          walletId: selectedWallet.id,
          proposalId: proposal.id,
        },
      });

      log('lit action res', litActionResponse)

      const responseObj = typeof litActionResponse.response === 'string' 
        ? JSON.parse(litActionResponse.response) 
        : litActionResponse.response;

      const signature = litActionResponse.signatures.dataToEncryptHashSignature.signature

      // get the mfaSettings from the responseObj
      const { mfaSettings } = responseObj.data.newDataToEncrypt;

      const body = {
        id: selectedWallet.id,
        ...responseObj.data.newDataToEncrypt,
        dataToEncryptHash: responseObj.data.dataToEncryptHash,
        ciphertext: responseObj.data.ciphertext,
        dataToEncryptHashSignature: signature,
        metadata: {
          ...selectedWallet.metadata, // save the original metadata
          mfaSettings // update the mfaSettings
        }
      }

      log('Update wallet request body:', body);

      // Save the updated wallet to the database
      const response = await axios.put('/api/multisig', body);
      
      if (response.data.success) {
        // Update proposal status to completed
        await axios.put('/api/multisig/messages', {
          proposalId: proposal.id,
          walletId: proposal.walletId,
          status: 'completed',
        });
        
        // Refresh data
        await fetchWallets();
        await fetchProposals();
        
        // Set result for UI
        setExecuteResult({
          proposalId: proposal.id,
          success: true,
          message: 'Wallet settings updated successfully',
          walletId: selectedWallet.id
        });
      }
    } catch (error) {
      log('error', error);
    }
    
  }

  // Function to execute transaction proposal
  const executeTransactionProposal = async (proposal: MessageProposal, sessionSigs: any) => {
    if (!selectedMultisigPkp || !selectedWallet) return;

    log('Executing Lit Action with multisig PKP', {
      proposalId: proposal.id,
      multisigPkpAddress: selectedMultisigPkp.ethAddress,
      signatures: proposal.signatures.length,
      message: proposal.message
    })

    log('multisig wallet', selectedWallet)
    
    // Get transaction details from proposal
    const txDetails = getTransactionDetails(proposal)
    log('Transaction details:', txDetails)

    const gasPrice = (await ethersProvider.getGasPrice()).toHexString()
    const nonce = await ethersProvider.getTransactionCount(selectedMultisigPkp.ethAddress)
    log('gas price ', gasPrice, 'nounce', nonce)

    const unsignedTransaction = {
      to: txDetails.to,
      value: ethers.utils.parseEther(txDetails.value).toHexString(),
      gasLimit: 21000,
      gasPrice,
      nonce,
      chainId: chainInfo.chainId,
      data: '0x'
    };
    
    log('Unsigned transaction:', unsignedTransaction)
    
    // Remove '0x' prefix, Lit.Actions.signAndCombineEcdsa requires public key without the '0x' prefix
    const publicKeyForLit = selectedMultisigPkp.publicKey.replace(/^0x/, '');

    const jsParams = {
      message: proposal.message,
      publicKeys: proposal.signatures.map(signer => signer.publicKey),
      // signatures: proposal.signatures.map(sig => sig.signature),
      proposalId: proposal.id,
      walletId: selectedWalletId,
      requiredSignatures: selectedWallet.threshold,
      publicKey: selectedMultisigPkp.publicKey,
      // 
      sendTransaction: true,
      publicKeyForLit,
      chain: 'sepolia',
      unsignedTransaction,
    }
    log('js params', jsParams)

    const litActionIpfsId = await MULTISIG_VERIFY_AND_SIGN_LIT_ACTION_IPFS_ID
    log('ipfsid', litActionIpfsId)

    // Execute the Lit Action using the multisig verification
    const response = await litNodeClient.executeJs({
      ipfsId: litActionIpfsId,
      sessionSigs,
      jsParams,
    })
    
    log('Multisig Lit Action execution result:', response)
    setExecuteResult(response)
    
    // Update the proposal status to completed if verification was successful
    const responseObj = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;
    
    log('Parsed response object:', responseObj);
    
    if (responseObj.isValid) {
      let txHash = null;
      
      // Try to extract transaction hash from different response formats
      if (responseObj.sendTxResponse) {
        try {
          const sendTxObj = typeof responseObj.sendTxResponse === 'string'
            ? JSON.parse(responseObj.sendTxResponse)
            : responseObj.sendTxResponse;
            
          if (sendTxObj.status === 'success' && sendTxObj.txReceipt && sendTxObj.txReceipt.hash) {
            txHash = sendTxObj.txReceipt.hash;
            log('Transaction hash from receipt:', txHash);
          }
        } catch (e) {
          console.error('Error parsing sendTxResponse:', e);
        }
      }
      
      await axios.put(`/api/multisig/messages`, {
        proposalId: proposal.id,
        walletId: proposal.walletId,
        status: 'completed',
        txHash: txHash
      })
      
      // Refresh proposals
      await fetchProposals()
    }
  }

  // Helper to update wallet balance
  const updateWalletBalance = async (address: string) => {
    try {
      const balance = await fetchEthBalance(address)
      setWalletBalance(balance)
    } catch (error) {
      console.error('Failed to update wallet balance:', error)
      setWalletBalance('0')
    }
  }

  return (
    <div className="space-y-6">
      {selectedWalletId && (
        <div className="bg-card p-4 rounded-lg border">
          {/* header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Selected Multisig Wallet PKP Details</h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowWalletSettings(true)}
              className="flex items-center gap-1"
            >
              <Settings className="h-4 w-4" />
              Wallet Settings
            </Button>
          </div>
          
          {/* Display selected wallet's PKP info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            {wallets.filter(w => w.id === selectedWalletId).map(wallet => (
              <div key={wallet.id} className="space-y-2">
                <div>
                  <div className="text-sm font-medium">PKP Address:</div>
                  <div className="text-sm ml-2">{wallet.pkp.ethAddress}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Balance:</div>
                  <div className="text-sm ml-2">{walletBalance} ETH</div>
                </div>
                <div>
                  <div className="text-sm font-medium">PKP Public Key:</div>
                  <div className="text-sm ml-2 break-all">{wallet.pkp.publicKey}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Threshold:</div>
                  <div className="text-sm ml-2">{wallet.threshold} of {wallet.signers.length} signers</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Signers:</div>
                </div>
                {wallet.signers.map((signer, index) => (
                  <SignerEmailField
                    key={index}
                    label={`Signer ${index + 1}`}
                    input={{
                      value: signer.email,
                      onChange: () => {},
                    }}
                    inputType="email"
                    address={signer.ethAddress}
                    disabled={true}
                    className="ml-4 mb-4"
                  />
                ))}
              </div>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4">Transaction Proposals</h2>
          
          {/* Create new transaction proposal */}
          <div className="mb-6 space-y-4">
            <SignerEmailField 
              label="Recipient"
              input={{
                value: recipientEmail,
                onChange: (value) => setRecipientEmail(value),
                placeholder: "Enter recipient's email or ETH address",
                id: "recipient"
              }}
              onAddressFound={(addressData) => {
                if (addressData) {
                  setRecipientAddress(addressData.ethAddress);
                } else {
                  setRecipientAddress('');
                }
              }}
            />
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (ETH)</Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter transaction amount"
                type="number"
                step="0.0001"
              />
            </div>
            
            <Button
              onClick={handleCreateProposal}
              disabled={isCreatingProposal || !recipientAddress || !amount}
            >
              {isCreatingProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Transaction Proposal
            </Button>
          </div>

          {/* Proposal list */}
          <div className="space-y-4">
            {proposals.map(proposal => {
              const txDetails = getTransactionDetails(proposal);
              return (
                <div key={proposal.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="mb-2">
                    {proposal.type === 'walletSettings' ? (
                      <WalletSettingsProposal 
                        proposal={proposal} 
                        selectedWallet={selectedWallet} 
                      />
                    ) : (
                      <>
                    <div><span className="font-medium">Recipient:</span> {txDetails.to}</div>
                    <div><span className="font-medium">Amount:</span> {formatEthAmount(txDetails.value)} ETH</div>
                    {txDetails.data && txDetails.data !== '0x' && (
                      <div><span className="font-medium">Data:</span> {txDetails.data}</div>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    Status: {proposal.status}
                  </div>
                  <div className="text-sm text-gray-500">
                    Signatures: {proposal.signatures.length}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proposal.status === 'pending' && !hasUserSigned(proposal) && (
                      <Button
                        onClick={() => handleSignProposal(proposal)}
                        disabled={isSigningProposal}
                      >
                        {isSigningProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign Transaction
                      </Button>
                    )}
                    
                    {hasUserSigned(proposal) && (
                      <div className="text-sm text-green-600 flex items-center">
                        You have signed this transaction
                      </div>
                    )}
                    
                    {proposal.status === 'pending' && selectedWallet &&
                     proposal.signatures.length >= selectedWallet.threshold && (
                      <Button
                        onClick={() => executeMultisigLitAction(proposal)}
                        disabled={isLoading}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Execute Transaction
                      </Button>
                    )}
                  </div>
                  
                  {executeResult && proposal.id === executeResult.proposalId && (
                    <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
                      <div className="font-medium mb-1">Execution Result:</div>
                      <pre className="whitespace-pre-wrap break-all">
                        {JSON.stringify(executeResult, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* WalletSettings Modal */}
      {showWalletSettings && selectedWallet && (
        <WalletSettings
          wallet={selectedWallet}
          currentPkp={currentPkp}
          authMethod={authMethod}
          googleAuthMethodId={googleAuthMethodId}
          onClose={() => setShowWalletSettings(false)}
          onSuccess={() => {
            fetchWallets();
            fetchProposals();
          }}
        />
      )}
    </div>
  )
}
