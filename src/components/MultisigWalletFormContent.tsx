'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignerEmailField } from '@/components/SignerEmailField'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import axios from 'axios'
import { getUserEmailFromStorage, log } from '@/lib/utils'
import { 
  CURRENT_AUTH_PROVIDER_KEY,
  getAuthMethodTypeByProviderName,
  getProviderByAuthMethodType,
  getSessionSigsByPkp, 
  litNodeClient, 
  mintPKP
} from '@/lib/lit'
import { encryptString } from '@lit-protocol/encryption'
import { AUTH_METHOD_SCOPE, AUTH_METHOD_TYPE } from '@lit-protocol/constants'
import { ethers } from 'ethers'
import { getCreateWalletIpfsId, getUpdateWalletIpfsId } from '@/lib/lit/ipfs-id-env'
import { sendMultisigNotification } from '@/lib/notification'
import { useAuthExpiration } from '@/hooks/useAuthExpiration'
import { isTokenValid } from '@/lib/jwt'

interface MultisigWalletFormContentProps {
  mode: 'create' | 'edit'
  authMethod: AuthMethod
  userPkp: IRelayPKP
  sessionPkp?: IRelayPKP
  authMethodId: string
  wallet?: any // Only needed for edit mode
  onCancel?: () => void
  onSuccess?: () => void
}

// Function to send email to other signers
const sendEmailToSigners = async (
  currentUserEmail: string, 
  signers: any[], 
  walletAddress: string, 
  threshold: number,
  walletLink: string
) => {
  // Filter out the current user from the signers list
  const otherSigners = signers.filter(signer => signer.email !== currentUserEmail);
  
  if (otherSigners.length === 0) {
    console.log('No other signers to notify');
    return {
      success: true,
      sentTo: []
    };
  }
  
  console.log(`Sending email notification to ${otherSigners.length} signers`);
  
  try {
    // Send notification email to each recipient
    const emailResults = await Promise.all(otherSigners.map(async (signer) => {
      return await sendMultisigNotification({
        to: signer.email,
        walletLink,
        notificationType: 'multisig-wallet-added',
        currentUserEmail,
        walletAddress,
        threshold,
        signersCount: signers.length
      });
    }));
    
    // Count successfully sent emails
    const successCount = emailResults.filter(result => result.success).length;
    
    return {
      success: successCount > 0,
      sentTo: emailResults
        .filter(result => result.success)
        .map(result => result.email)
    };
  } catch (error) {
    console.error('Failed to send notification emails:', error);
    toast.error('Unable to send notification emails to other signers');
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      sentTo: []
    };
  }
};

export function MultisigWalletFormContent({
  mode,
  authMethod,
  userPkp,
  sessionPkp,
  authMethodId,
  wallet,
  onCancel,
  onSuccess
}: MultisigWalletFormContentProps) {
  const { handleExpiredAuth } = useAuthExpiration();
  const [isLoading, setIsLoading] = useState(false)
  
  // Form states - initial values depend on mode
  const [signers, setSigners] = useState<any[]>(
    mode === 'edit' 
      ? (wallet?.signers || []) 
      : []
  )
  const [threshold, setThreshold] = useState(
    mode === 'edit' 
      ? wallet?.threshold 
      : 1
  )
  const [phoneNumber, setPhoneNumber] = useState(
    mode === 'edit' 
      ? wallet?.metadata?.mfaSettings?.phoneNumber || '' 
      : ''
  )
  const [dailyLimit, setDailyLimit] = useState(
    mode === 'edit' 
      ? wallet?.metadata?.mfaSettings?.dailyLimit || '' 
      : ''
  )
  const [walletName, setWalletName] = useState(
    mode === 'edit'
      ? wallet?.name || ''
      : ''
  )
  
  // New signer state
  const [newSignerEmail, setNewSignerEmail] = useState('')
  const [newSignerAddress, setNewSignerAddress] = useState('')
  const [newSignerPublicKey, setNewSignerPublicKey] = useState('')
  const [signerAuthMethodId, setSignerAuthMethodId] = useState('')
  const [showAddSignerForm, setShowAddSignerForm] = useState(false)
  const [newSignerError, setNewSignerError] = useState(false)
  
  // Ref for scrolling to the new signer form
  const newSignerFormRef = useRef<HTMLDivElement>(null)

  // Get current user's email from authMethod
  let currentUserEmail = '';
  if (authMethod.accessToken) {
    const email = getUserEmailFromStorage()
    if (email) {
      currentUserEmail = email;
    }
  }

  // Initialize signers list with current user for create mode
  useEffect(() => {
    if (mode === 'create' && signers.length === 0 && userPkp) {
      setSigners([{
        email: currentUserEmail,
        ethAddress: userPkp.ethAddress,
        publicKey: userPkp.publicKey,
        authMethodId: authMethodId
      }]);
    }
  }, [mode, signers.length, userPkp, currentUserEmail, authMethodId]);

  // Handle adding a new signer
  const handleAddSigner = () => {
    if (!newSignerEmail || !newSignerAddress) return;
    
    // Check if signer already exists in the list
    const existingSigner = signers.find(s => 
      s.ethAddress === newSignerAddress || s.email === newSignerEmail
    );
    
    if (existingSigner) {
      toast.error('This signer is already in the list');
      return;
    }
    
    const newSigner = {
      email: newSignerEmail,
      ethAddress: newSignerAddress,
      publicKey: newSignerPublicKey || '',
      authMethodId: signerAuthMethodId || ''
    };
    
    setSigners([...signers, newSigner]);
    
    // Clear form and hide
    setNewSignerEmail('');
    setNewSignerAddress('');
    setNewSignerPublicKey('');
    setSignerAuthMethodId('');
    setShowAddSignerForm(false);
    setNewSignerError(false);
  };

  // Handle removing a signer
  const handleRemoveSigner = (ethAddress: string) => {
    setSigners(signers.filter(signer => signer.ethAddress !== ethAddress));
  };

  // Handle threshold change when signers array changes
  useEffect(() => {
    // Ensure threshold is not greater than the number of signers
    if (threshold > signers.length) {
      // Make sure threshold is at least 1 (never 0)
      setThreshold(Math.max(1, signers.length));
    }
  }, [signers, threshold]);

  // In create mode, when wallet has no name, set a default name based on existing wallets count
  useEffect(() => {
    if (mode === 'create' && !walletName) {
      // Get user's existing wallets count
      const fetchWalletCount = async () => {
        if (!userPkp) return;
        try {
          const { data } = await axios.get(`/api/multisig?address=${userPkp.ethAddress}`);
          if (data.success) {
            const count = data.data.length + 1;
            setWalletName(`Team Wallet ${count}`);
          }
        } catch (error) {
          console.error('Failed to fetch wallet count:', error);
          // If fetching fails, set a generic name
          setWalletName('Team Wallet');
        }
      };
      
      fetchWalletCount();
    }
  }, [mode, userPkp, walletName]);

  // Create new multisig wallet (create mode)
  const handleCreateMultisigWallet = async () => {
    if (!userPkp || !sessionPkp) {
      console.error('Missing required information');
      return;
    }

    const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
    if (!currentAuthProvider) {
      throw new Error('No current auth provider found')
    }
    const authMethodType = getAuthMethodTypeByProviderName(currentAuthProvider)
    
    // Check for unconfirmed new signer
    if (showAddSignerForm && newSignerEmail.trim() !== '') {
      toast.error('Please confirm or cancel the new signer before creating the wallet');
      setNewSignerError(true);
      if (newSignerFormRef.current) {
        newSignerFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Verify Google token before proceeding
    if (!authMethod || !authMethod.accessToken) {
      toast.error('Authentication information is missing');
      return;
    }
    
    const isValid = await isTokenValid(authMethod);
    if (!isValid) {
      handleExpiredAuth();
      return;
    }
    
    // Validate signers data
    const invalidSigners = signers.filter(s => !s.ethAddress || !s.email);
    if (invalidSigners.length > 0) {
      toast.error('Some signers have incomplete information. Please check all signers.');
      return;
    }
    
    try {
      setIsLoading(true);

      // Generate multisig PKP
      const createWalletIpfsIdHex = await getCreateWalletIpfsId("hex");
      const updateWalletIpfsIdHex = await getUpdateWalletIpfsId("hex");
      const createWalletIpfsId = await getCreateWalletIpfsId("base58");

      // Collect all authMethodIds from signers
      const signerAuthMethodIds = signers
        .filter(s => s.authMethodId)
        .map(s => s.authMethodId);
      
      // Combine system authMethodIds with signer authMethodIds
      const allAuthMethodIds = [
        createWalletIpfsIdHex, 
        updateWalletIpfsIdHex, 
        authMethodId,
        ...signerAuthMethodIds.filter(id => id !== authMethodId) // Avoid duplicates
      ];
      
      // Create arrays with the same length for all parameters
      const allAuthMethodTypes = [
        AUTH_METHOD_TYPE.LitAction,
        AUTH_METHOD_TYPE.LitAction,
        authMethodType,
        ...signerAuthMethodIds.filter(id => id !== authMethodId).map(() => authMethodType)
      ];
      
      const allAuthMethodPubkeys = allAuthMethodIds.map(() => '0x');
      
      const allAuthMethodScopes = [
        [AUTH_METHOD_SCOPE.SignAnything],
        [AUTH_METHOD_SCOPE.SignAnything],
        [AUTH_METHOD_SCOPE.NoPermissions],
        ...signerAuthMethodIds.filter(id => id !== authMethodId).map(() => [AUTH_METHOD_SCOPE.NoPermissions])
      ];

      const multisigPkp = await mintPKP({
        authMethod,
        options: {
          permittedAuthMethodTypes: allAuthMethodTypes,
          permittedAuthMethodIds: allAuthMethodIds,
          permittedAuthMethodPubkeys: allAuthMethodPubkeys,
          permittedAuthMethodScopes: allAuthMethodScopes,
          addPkpEthAddressAsPermittedAddress: false,
          sendPkpToItself: true,
        },
      });
      
      log('multisig pkp', multisigPkp);

      // Prepare MFA settings and wallet data
      const mfaSettings = {
        phoneNumber: phoneNumber,
        dailyLimit: dailyLimit
      };

      // Prepare data to encrypt for new wallet
      const dataToEncrypt = {
        signers, // Use all signers from state
        threshold, // Use threshold from state
        mfaSettings,
      };
      
      // Add log to check threshold value
      console.log('Creating multisig wallet with threshold:', threshold, 'and signers:', signers.length);
      console.log('Data to encrypt:', JSON.stringify(dataToEncrypt, null, 2));

      // Connect to Lit node if not already connected
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Setup access control
      const updateWalletIpfsId = await getUpdateWalletIpfsId("base58");
      const accessControlConditions = [
        {
          contractAddress: '',
          standardContractType: '',
          chain: 'ethereum',
          method: '',
          parameters: [':currentActionIpfsId'],
          returnValueTest: {
            comparator: '=',
            value: updateWalletIpfsId,
          },
        },
      ];

      // Encrypt data
      const { ciphertext, dataToEncryptHash } = await encryptString(
        {
          accessControlConditions,
          dataToEncrypt: JSON.stringify(dataToEncrypt),
        },
        litNodeClient,
      );
      log('encrypt data');

      // Get session signatures
      const sessionSigs = await getSessionSigsByPkp(authMethod, sessionPkp);
      log('session sigs', sessionSigs);

      // Execute Lit Action to create wallet
      const litActionRes = await litNodeClient.executeJs({
        ipfsId: createWalletIpfsId,
        sessionSigs,
        jsParams: {
          authParams: {
            accessToken: authMethod.accessToken,
            authMethodId: authMethodId,
            authMethodType: authMethod.authMethodType,
          },
          dataToEncryptHash,
          publicKey: multisigPkp.publicKey,
          env: process.env.NEXT_PUBLIC_ENV,
        },
      });
      log('litaction res', litActionRes);

      // Verify signature
      const signatureObj = litActionRes.signatures['create-wallet-signature'];
      if (!signatureObj || !signatureObj.signature) {
        throw new Error('Failed to create multisig wallet');
      }

      const dataToEncryptHashSignature = signatureObj.signature;
      log('dataToEncryptHashSignature', dataToEncryptHashSignature);

      // Prepare metadata
      const metadata = {
        accessControlConditions,
        mfaSettings,
        name: walletName
      };

      // Create the wallet via API
      const response = await axios.post('/api/multisig', {
        multisigPkp: multisigPkp,
        currentPkp: userPkp,
        signer1Email: currentUserEmail,
        ciphertext,
        dataToEncryptHash,
        metadata,
        dataToEncryptHashSignature,
        authMethodId,
        signers, // Include all signers
        threshold, // Include threshold
        name: walletName, // Add wallet name as top-level field
      });

      if (response.data.success) {
        // Get created wallet ID (if available)
        const walletId = response.data.walletId || '';
        
        // Build wallet link
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
        const walletLink = appUrl;
        
        // Send email notifications to other signers
        await sendEmailToSigners(
          currentUserEmail,
          signers,
          multisigPkp.ethAddress,
          threshold,
          walletLink
        ).catch(error => {
          console.error('Failed to send notification emails:', error);
          // Continue with the process even if email sending fails
        });
        
        // Clear form
        setPhoneNumber('');
        setDailyLimit('');
        
        // Call success callback
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error('Failed to create multisig wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update existing multisig wallet (edit mode)
  const handleUpdateWalletSettings = async () => {
    try {
      // Check for unconfirmed new signer
      if (showAddSignerForm && newSignerEmail.trim() !== '') {
        toast.error('Please confirm or cancel the new signer before updating wallet settings');
        setNewSignerError(true);
        // Scroll to new signer form
        if (newSignerFormRef.current) {
          newSignerFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }
      
      setIsLoading(true);
      
      // Verify Google token before proceeding
      if (!authMethod || !authMethod.accessToken) {
        toast.error('Authentication information is missing');
        setIsLoading(false);
        return;
      }
      
      const isValid = await isTokenValid(authMethod);
      if (!isValid) {
        handleExpiredAuth();
        setIsLoading(false);
        return;
      }
      
      // Validate signers data
      const invalidSigners = signers.filter(s => !s.ethAddress || !s.email);
      if (invalidSigners.length > 0) {
        toast.error('Some signers have incomplete information. Please check all signers.');
        setIsLoading(false);
        return;
      }
      
      // Ensure at least one signer
      if (signers.length === 0) {
        toast.error('At least one signer is required');
        setIsLoading(false);
        return;
      }
      
      // Create an empty settings change data object
      const settingsData: any = {};
      
      // Save original state for comparison after changes are applied
      settingsData.originalState = {
        threshold: wallet.threshold,
        signers: wallet.signers,
        mfaSettings: wallet.metadata?.mfaSettings,
      };
      
      // Check if signers list has changed (added or removed signers)
      const signersChanged = JSON.stringify(signers.map((s: any) => s.ethAddress).sort()) !== 
          JSON.stringify(wallet.signers.map((s: any) => s.ethAddress).sort());
      
      if (signersChanged) {
        settingsData.signers = signers;
      }
      
      // Check if threshold has changed
      const thresholdChanged = threshold !== wallet.threshold;
      if (thresholdChanged) {
        settingsData.threshold = threshold;
      }
      
      // Check if MFA settings have changed
      const currentMfa = wallet.metadata?.mfaSettings || {};
      const mfaChanged = 
        currentMfa.phoneNumber !== phoneNumber ||
        currentMfa.dailyLimit !== dailyLimit;
        
      if (mfaChanged) {
        settingsData.mfaSettings = {
          phoneNumber,
          dailyLimit
        };
      }
      
      // Store a summary of changes for display after proposal completion
      const changeDescriptions = [];
      if (settingsData.threshold !== undefined) {
        changeDescriptions.push(`Change threshold from ${wallet.threshold} to ${threshold}`);
      }
      if (settingsData.signers) {
        const addedCount = signers.filter(s => !wallet.signers.some((os: any) => os.ethAddress === s.ethAddress)).length;
        const removedCount = wallet.signers.filter((os: any) => !signers.some(s => s.ethAddress === os.ethAddress)).length;
        
        if (addedCount > 0) changeDescriptions.push(`Add ${addedCount} signer(s)`);
        if (removedCount > 0) changeDescriptions.push(`Remove ${removedCount} signer(s)`);
      }
      if (mfaChanged) {
        changeDescriptions.push('Update MFA settings');
      }
      
      settingsData.changeDescription = changeDescriptions.join(', ');
      
      // Only proceed if there are actual changes
      if (Object.keys(settingsData).length <= 2) { // originalState and changeDescription only
        toast.error('No changes detected. Please make changes before submitting.');
        setIsLoading(false);
        return;
      }
      
      // For changes other than just the name, create a proposal
      const response = await axios.post('/api/multisig/messages', {
        walletId: wallet.id,
        createdBy: userPkp.ethAddress,
        message: JSON.stringify(settingsData),
        type: 'walletSettings', // Use new type field
        settingsData, // Only includes changed fields
        sendEmail: true,
        signers: wallet.signers
      });
      
      if (response.data.success) {
        toast.success('Wallet settings proposal created successfully');
        if (onSuccess) {
          onSuccess();
        }
        // Close the modal when update is successful
        if (onCancel) {
          onCancel();
        }
      }
    } catch (error) {
      console.error('Failed to create wallet settings proposal:', error);
      toast.error('Failed to update wallet settings');
    } finally {
      setIsLoading(false);
    }
  };

  // Dedicated function for handling wallet name updates only
  const handleUpdateWalletName = async () => {
    try {
      setIsLoading(true);
      
      // Verify Google token before proceeding
      if (!authMethod || !authMethod.accessToken) {
        toast.error('Authentication information is missing');
        setIsLoading(false);
        return;
      }
      
      const isValid = await isTokenValid(authMethod);
      if (!isValid) {
        handleExpiredAuth();
        setIsLoading(false);
        return;
      }
      
      // For name-only updates, we now only need the wallet ID and the new name
      // The API has been updated to skip signature verification for name-only updates
      const updateData = {
        id: wallet.id,
        name: walletName
      };
      
      // Call the API to update the wallet
      const response = await axios.put('/api/multisig', updateData);
      
      if (response.data.success) {
        toast.success('Wallet name updated successfully');
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error('Failed to update wallet name');
      }
    } catch (error) {
      console.error('Failed to update wallet name:', error);
      toast.error('Failed to update wallet name');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission based on mode
  const handleSubmit = async () => {
    if (mode === 'create') {
      await handleCreateMultisigWallet();
    } else {
      await handleUpdateWalletSettings();
    }
  };

  // Check if threshold options need to be adjusted
  const thresholdOptions = Array.from(
    { length: signers.length }, 
    (_, i) => i + 1
  );

  return (
    <div className="space-y-6">
      {/* Wallet Name */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold">Wallet Name</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <div>
            <Label htmlFor="walletName">Name</Label>
            <div className="flex mt-1 gap-2">
              <Input
                id="walletName"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                placeholder="Enter wallet name"
                className="flex-grow"
              />
              {mode === 'edit' && walletName !== wallet?.name && (
                <Button 
                  onClick={handleUpdateWalletName}
                  disabled={isLoading || !walletName.trim()} 
                  size="sm"
                >
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update Name'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Signers Section */}
      <div className="space-y-4">
        <h3 className="text-md font-semibold">Signers</h3>
        <div className="space-y-3 bg-gray-50 p-4 rounded-md">
          {signers.map((signer, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <SignerEmailField
                label={`Signer ${index + 1}`}
                input={{
                  value: signer.email,
                  onChange: () => {},
                }}
                inputType="email"
                address={signer.ethAddress}
                disabled={true}
                className="flex-1"
              />
              
              {/* Only allow removing signers that are not the current user */}
              {signer.ethAddress !== userPkp.ethAddress && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveSigner(signer.ethAddress)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Add New Signer */}
      <div ref={newSignerFormRef} className={`space-y-3 border-t border-b py-4 ${newSignerError ? 'bg-red-50 px-4 rounded-md border-red-200' : ''}`}>
        <h3 className="text-md font-semibold">Add New Signer</h3>
        
        {showAddSignerForm ? (
          <div className="grid grid-cols-1 gap-3">
            <SignerEmailField
              label="New Signer"
              input={{
                value: newSignerEmail,
                onChange: (value) => {
                  setNewSignerEmail(value);
                  setNewSignerError(false);
                },
                placeholder: "Enter signer's email or ETH address",
                id: "newSigner",
                className: newSignerError ? "border-red-500" : ""
              }}
              onAddressFound={(addressData) => {
                if (addressData) {
                  setNewSignerAddress(addressData.ethAddress);
                  setNewSignerPublicKey(addressData.publicKey || '');
                  setSignerAuthMethodId(addressData.authMethodId || '');
                } else {
                  setNewSignerAddress('');
                  setNewSignerPublicKey('');
                  setSignerAuthMethodId('');
                }
              }}
            />
            
            {newSignerError && (
              <div className="text-sm text-red-500 -mt-1">
                Please confirm or cancel this signer before proceeding
              </div>
            )}
            
            <div className="flex space-x-2 mt-2">
              <Button 
                onClick={handleAddSigner}
                variant="outline"
                disabled={!newSignerEmail || !newSignerAddress}
                className="flex-1"
              >
                <Plus className="h-4 w-4 mr-2" />
                Confirm
              </Button>
              
              <Button 
                onClick={() => {
                  setShowAddSignerForm(false);
                  setNewSignerEmail('');
                  setNewSignerAddress('');
                  setNewSignerPublicKey('');
                  setSignerAuthMethodId('');
                  setNewSignerError(false);
                }}
                variant="ghost"
                className="flex-none"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            onClick={() => setShowAddSignerForm(true)}
            variant="outline"
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Signer
          </Button>
        )}
      </div>
      
      {/* Threshold Setting - only show if we have signers */}
      {signers.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-md font-semibold">Signature Threshold</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center space-x-4">
              <Label htmlFor="threshold">Required Signatures:</Label>
              <select
                id="threshold"
                value={threshold}
                onChange={(e) => setThreshold(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {thresholdOptions.map((num) => (
                  <option key={num} value={num}>
                    {num} of {signers.length}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* MFA Settings */}
      <div className="space-y-3">
        <h3 className="text-md font-semibold">MFA Settings (Optional)</h3>
        <div className="bg-gray-50 p-4 rounded-md space-y-4">
          <div>
            <Label htmlFor="phoneNumber">Phone Number for 2FA</Label>
            <Input
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+1 123 456 7890"
              type="tel"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="dailyLimit">Daily Transfer Limit (USD)</Label>
            <Input
              id="dailyLimit"
              value={dailyLimit}
              onChange={(e) => setDailyLimit(e.target.value)}
              placeholder="1000"
              type="number"
              className="mt-1"
            />
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        {onCancel && (
          <Button
            onClick={onCancel}
            variant="outline"
            disabled={isLoading}
            className="flex-1"
          >
            Cancel
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={isLoading || signers.length === 0}
          className="flex-1"
          title={mode === 'edit' ? "Update signers, threshold or MFA settings (requires multi-signature approval)" : ""}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {mode === 'create' ? 'Create Wallet' : 'Update Wallet Settings'}
        </Button>
      </div>
    </div>
  );
} 