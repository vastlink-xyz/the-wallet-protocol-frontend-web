import { Button } from "@/components/ui/button"
import { AuthMethod, IRelayPKP } from "@lit-protocol/types"
import { Loader2, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import type { MultisigWallet, MessageProposal } from '@/app/api/multisig/storage'
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { log, formatEthAmount, getUserEmailFromStorage } from "@/lib/utils"
import { getSessionSigsByPkp } from "@/lib/lit"
import { litNodeClient } from "@/lib/lit"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SignerEmailField } from "@/components/SignerEmailField"
import { getMultisigTransactionIpfsId, getPersonalSignIpfsId, getUpdateWalletIpfsId } from "@/lib/lit/ipfs-id-env"
import { sendMultisigNotification } from '@/lib/notification'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { isTokenValid } from "@/lib/jwt"
import { TokenType, SUPPORTED_TOKENS_INFO } from "@/lib/web3/token"
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from "@/lib/web3/transaction"
import { fetchBtcBalance } from "@/lib/web3/btc"
import { fetchEthBalance } from "@/lib/web3/eth"
import { SelectToken } from "@/components/SelectToken"
import { Proposal } from "@/app/wallet/[walletId]/details/proposals/components/Proposal"
import { MFAOtpDialog } from "@/components/Transaction/MFAOtpDialog"

export function Multisig({
  currentPkp,
  sessionPkp,
  authMethod,
  authMethodId,
  initialWalletId = '',
}: {
  currentPkp: IRelayPKP,
  sessionPkp: IRelayPKP,
  authMethod: AuthMethod,
  authMethodId: string,
  initialWalletId?: string,
}) {
  const { handleExpiredAuth } = useAuthExpiration();
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

  // mfa
  const [showMfaDialog, setShowMfaDialog] = useState(false);
  const [currentProposal, setCurrentProposal] = useState<MessageProposal | null>(null)
  const [verifiedPhone, setVerifiedPhone] = useState<string | null>(null);
  const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);

  const [tokenType, setTokenType] = useState<TokenType>('ETH');
  const [tokenInfo, setTokenInfo] = useState(SUPPORTED_TOKENS_INFO[tokenType]);

  // BTC balance
  const [btcWalletBalance, setBtcWalletBalance] = useState<string | null>(null);
  const [isBtcBalanceLoading, setIsBtcBalanceLoading] = useState(false);

  // Update tokenInfo when tokenType changes
  useEffect(() => {
    setTokenInfo(SUPPORTED_TOKENS_INFO[tokenType]);
  }, [tokenType]);

  useEffect(() => {
    fetchWallets()
    fetchUserPhone()
  }, [currentPkp])

  const fetchUserPhone = async () => {
    try {
      const response = await fetch('/api/mfa/get-user-phone', {
        headers: {
          'Authorization': `Bearer ${authMethod.accessToken}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to fetch phone number');
      }
      
      const data = await response.json();
      const phones = data.phones || [];
      
      if (phones.length > 0) {
        setVerifiedPhone(phones[0].phone_number);
      }
    } catch (error) {
      console.error('Error fetching user phone:', error);
    }
  };

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
        updateBtcWalletBalance(wallet.addresses.btc)
      }
    } else {
      setSelectedWallet(null)
      setSelectedMultisigPkp(null)
      setWalletBalance('0')
      setBtcWalletBalance('0')
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
  const verifyToken = async (): Promise<boolean> => {
    if (!authMethod || !authMethod.accessToken) {
      toast.error('Authentication information is missing');
      return false;
    }
    
    const isValid = await isTokenValid(authMethod);
    if (!isValid) {
      handleExpiredAuth();
      return false;
    }
    
    return true;
  };

  const handleCreateProposal = async () => {
    if (!selectedWalletId || !recipientAddress || !amount) {
      return
    };
    
    try {
      setIsCreatingProposal(true)
      // Verify token before proceeding
      if (!await verifyToken()) {
        setIsCreatingProposal(false)
        return
      };
      const txData = {
        to: recipientAddress,
        value: amount,
        data: data || '0x',
        tokenType: tokenType
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
    
    try {
      setIsSigningProposal(true)
      // Verify token before proceeding
      if (!await verifyToken()) {
        setIsSigningProposal(false)
        return
      };

      const litActionIpfsId = await getPersonalSignIpfsId('base58')
      log('litActionIpfsId', litActionIpfsId)

      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      log('current pkp', currentPkp)
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      log('session sigs', sessionSigs)

      const actionResponse = await litNodeClient.executeJs({
        ipfsId: litActionIpfsId,
        sessionSigs,
        jsParams: {
          message: proposal.message,
          publicKey: currentPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
        }
      });
      
      const signature = actionResponse.signatures.sig.signature;
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
        handleExpiredAuth();
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
          data: descriptions.join(', '),
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
        tokenType: 'ETH'
      };
    }
  };
  
  // Function to execute a Lit Action using the multisig PKP
  const executeMultisigLitAction = async (proposal: MessageProposal) => {
    if (!selectedMultisigPkp || !selectedWallet || !authMethod) {
      console.error('Missing multisig wallet information or auth method')
      return
    }
    
    try {
      setIsLoading(true)
      // Verify token before proceeding
      if (!await verifyToken()) {
        setIsLoading(false)
        return
      };
      setExecuteResult(null)
      
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect()
      }

      log('selected mulsig pkp', selectedMultisigPkp)
      
      // Get session signatures for the current user
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      
      // Check if this is a wallet settings change proposal
      const isWalletSettingsProposal = proposal.type === 'walletSettings';
      const settingsData = proposal.settingsData;
      
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
        handleExpiredAuth();
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
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
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
        
        // Find new signers and send notifications
        const updatedWallet = await fetchUpdatedWallet(selectedWallet.id);
        if (updatedWallet && settingsData.signers) {
          // Send notifications to new signers
          await sendNotificationsToNewSigners(selectedWallet, updatedWallet);
        }
        
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
  
  // Function to send notifications to new signers after wallet settings update
  const sendNotificationsToNewSigners = async (originalWallet: MultisigWallet, updatedWallet: MultisigWallet) => {
    try {
      // Get original signers
      const originalSigners = originalWallet.signers || [];
      
      // Find new signers (signers in updated wallet that were not in original wallet)
      const newSigners = updatedWallet.signers.filter((newSigner: any) => 
        !originalSigners.some((originalSigner: any) => 
          originalSigner.ethAddress === newSigner.ethAddress
        )
      );
      
      // Send email notifications to new signers if any
      if (newSigners.length > 0) {
        // Get current user's email
        const currentUserEmail = getUserEmailFromStorage()
        
        // Build wallet link
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
        const walletLink = appUrl;
        
        // Send notifications to each new signer
        await Promise.all(newSigners.map(async (signer: any) => {
          await sendMultisigNotification({
            to: signer.email,
            walletLink,
            notificationType: 'multisig-wallet-added',
            currentUserEmail,
            walletAddress: updatedWallet.pkp.ethAddress,
            threshold: updatedWallet.threshold,
            signersCount: updatedWallet.signers.length
          });
        }));
      }
      
      return newSigners.length > 0;
    } catch (error) {
      console.error('Error sending notifications to new signers:', error);
      return false;
    }
  };

  // Helper function to fetch the most up-to-date wallet data after updates
  const fetchUpdatedWallet = async (walletId: string) => {
    try {
      const response = await axios.get(`/api/multisig?id=${walletId}`);
      if (response.data.success) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      console.error('Failed to fetch updated wallet:', error);
      return null;
    }
  };

  // Function to execute transaction proposal
  const executeTransactionProposal = async (proposal: MessageProposal, sessionSigs: any, otpCode: string = '') => {
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

    const tokenType = txDetails.tokenType
    const sendAddress = tokenType === 'ETH' ? selectedMultisigPkp.ethAddress : selectedWallet.addresses.btc
    const txData = await getToSignTransactionByTokenType({
      tokenType,
      options: {
        sendAddress,
        recipientAddress: txDetails.to,
        amount: txDetails.value,
      },
    })

    log('txData', txData)

    if (!txData) {
      throw new Error('Failed to get transaction data')
    }

    const jsParams = {
      message: proposal.message,
      publicKeys: proposal.signatures.map(signer => signer.publicKey),
      proposalId: proposal.id,
      walletId: selectedWalletId,
      requiredSignatures: selectedWallet.threshold,
      publicKey: selectedMultisigPkp.publicKey,
      // 
      sendTransaction: true,
      chain: 'sepolia',
      toSignTransaction: txData.toSign,
      transactionAmount: txDetails.value,
      env: process.env.NEXT_PUBLIC_ENV,
      authParams: {
        accessToken: authMethod.accessToken,
        authMethodId: authMethodId,
        authMethodType: authMethod.authMethodType,
      },
      otp: otpCode,
      mfaMethodId,
      tokenType: proposal.transactionData?.tokenType,
    }
    log('js params', jsParams)

    const litActionIpfsId = await getMultisigTransactionIpfsId('base58')
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
    const result = typeof response.response === 'string' 
      ? JSON.parse(response.response) 
      : response.response;
    
    log('Parsed response object:', result);
    
    if (result.isValid) {
      if (result.requireMFA) {
        setCurrentProposal(proposal)
        setShowMfaDialog(true)
        toast.warning('Daily limit exceeded')
        return
      } else if (result.error) {
        toast.error(result.error)
        return
      }
      
      let txHash = null
      // Try to extract transaction hash from different response formats
      if (result.status === 'success') {
        try {
          let sig: any
          if (tokenType === 'ETH') {
            sig = JSON.parse(result.sig)
          } else {
            sig = response.signatures.btcSignatures
          }
          const txReceipt = await broadcastTransactionByTokenType({
            tokenType,
            options: {
              ...txData,
              sig,
              publicKey: selectedMultisigPkp.publicKey,
            },
          })
          txHash = txReceipt
          log('txReceipt', txReceipt)
          setExecuteResult({
            proposalId: proposal.id,
            txHash
          });
          
          toast.success(`Transaction completed`);
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

  // Helper to update BTC wallet balance
  const updateBtcWalletBalance = async (address: string) => {
    try {
      setIsBtcBalanceLoading(true)
      const balance = await fetchBtcBalance(address)
      setBtcWalletBalance(balance ? balance.toFixed(8) : '0')
    } catch (error) {
      console.error('Failed to update BTC wallet balance:', error)
      setBtcWalletBalance('0')
    } finally {
      setIsBtcBalanceLoading(false)
    }
  }

  const handleSendOtp = async () => {
    if (!verifiedPhone) {
      throw new Error('Session or phone number not found');
    }

    log('Sending OTP to', verifiedPhone);
    const response = await fetch('/api/mfa/whatsapp/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authMethod.accessToken}`,
      },
      body: JSON.stringify({ phone_number: verifiedPhone }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      log('Error response from API', errorData);
      throw new Error(errorData.error || `Failed to send OTP: ${response.status}`);
    }
    
    const data = await response.json();
    setMfaMethodId(data.method_id);
    log('OTP sent, method_id:', data.method_id);
  };

  const handleOtpVerify = async (otp: string) => {
    // Close the dialog
    setShowMfaDialog(false);

    try {
      setIsLoading(true)
      const sessionSigs = await getSessionSigsByPkp({authMethod, pkp: sessionPkp, refreshStytchAccessToken: true})
      if (currentProposal) {
        log('otp in handleOtpVerified', otp)
        await executeTransactionProposal(currentProposal, sessionSigs, otp)
      }
    } catch (error) {
      console.error('Error executing transaction:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {selectedWalletId && (
        <div className="bg-card p-4 rounded-lg border">
          {/* header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Team Wallet Details</h3>
          </div>
          
          {/* Display selected wallet's PKP info */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            {wallets.filter(w => w.id === selectedWalletId).map(wallet => (
              <div key={wallet.id} className="space-y-2">
                <div>
                  <div className="text-sm font-medium">Wallet Name:</div>
                  <div className="text-sm ml-2 font-semibold">{wallet.name || "Unnamed Wallet"}</div>
                </div>
                
                {/* ETH Address and Balance */}
                <div>
                  <div className="text-sm font-medium">ETH Address:</div>
                  <div className="text-sm ml-2 break-all">{wallet.addresses.eth}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">ETH Balance:</div>
                  <div className="text-sm ml-2">
                    {walletBalance} ETH
                  </div>
                </div>
                
                {/* BTC Address and Balance */}
                <div>
                  <div className="text-sm font-medium">BTC Address (Testnet):</div>
                  <div className="text-sm ml-2 break-all">{wallet.addresses.btc}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">BTC Balance:</div>
                  <div className="text-sm ml-2">
                    {isBtcBalanceLoading ? 
                      <Loader2 className="h-4 w-4 animate-spin inline mr-2" /> : 
                      btcWalletBalance ? `${btcWalletBalance} BTC` : "0 BTC"}
                  </div>
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

          <div className="space-y-2">
            <Label htmlFor="token-type">Select Token</Label>
            <SelectToken 
              onSelect={(value) => setTokenType(value)}
              defaultValue={tokenType}
            />
          </div>
          
          {/* Create new transaction proposal */}
          <div className="mb-6 space-y-4">
            <SignerEmailField 
              label="Recipient"
              tokenType={tokenType}
              input={{
                value: recipientEmail,
                onChange: (value) => setRecipientEmail(value),
                placeholder: "Enter recipient's email or address",
                id: "recipient"
              }}
              onAddressFound={(addressData) => {
                if (addressData) {
                  if (tokenType === 'ETH') {
                    setRecipientAddress(addressData.addresses?.eth || '');
                  } else if (tokenType === 'BTC') {
                    setRecipientAddress(addressData.addresses?.btc || '');
                  }
                } else {
                  setRecipientAddress('');
                }
              }}
            />
            
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ({tokenInfo.symbol})</Label>
              <Input
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter transaction amount"
                type="number"
                step={tokenInfo.chainType === 'EVM' ? "0.0001" : "0.00000001"}
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
              if (!selectedWallet) {
                return null
              }
              return (
                <Proposal
                  key={proposal.id}
                  proposal={proposal}
                  selectedWallet={selectedWallet}
                  handleSignProposal={handleSignProposal}
                  executeMultisigLitAction={executeMultisigLitAction}
                  userPkp={currentPkp}
                  isSigningProposal={isSigningProposal}
                  isLoading={isLoading}
                />
              );
            })}
          </div>
        </div>
      )}

      <MFAOtpDialog
        isOpen={showMfaDialog}
        onClose={() => setShowMfaDialog(false)}
        onOtpVerify={handleOtpVerify}
        sendOtp={handleSendOtp}
        identifier={verifiedPhone}
        title="Verify Transaction"
        description="A verification code will be sent to your phone via WhatsApp"
      />
    </div>
  )
}
