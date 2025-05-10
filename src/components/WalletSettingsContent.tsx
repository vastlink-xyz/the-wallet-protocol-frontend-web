'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignerEmailField } from '@/components/SignerEmailField'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { IRelayPKP } from '@lit-protocol/types'
import { toast } from 'react-toastify'
import axios from 'axios'
import { isGoogleTokenValid, log } from '@/lib/utils'

interface WalletSettingsContentProps {
  wallet: any // MultisigWallet
  currentPkp: IRelayPKP
  authMethod: any
  onRequestClose?: () => void
  onUpdateSuccess?: () => void
}

export function WalletSettingsContent({
  wallet,
  currentPkp,
  authMethod,
  onRequestClose,
  onUpdateSuccess
}: WalletSettingsContentProps) {
  const [isLoading, setIsLoading] = useState(false)
  
  // Form states
  const [signers, setSigners] = useState<any[]>(wallet.signers || [])
  const [threshold, setThreshold] = useState(wallet.threshold)
  const [phoneNumber, setPhoneNumber] = useState(wallet.metadata?.mfaSettings?.phoneNumber || '')
  const [dailyLimit, setDailyLimit] = useState(wallet.metadata?.mfaSettings?.dailyLimit || '')
  
  // New signer state
  const [newSignerEmail, setNewSignerEmail] = useState('')
  const [newSignerAddress, setNewSignerAddress] = useState('')
  const [newSignerPublicKey, setNewSignerPublicKey] = useState('')
  const [authMethodId, setAuthMethodId] = useState('')
  const [showAddSignerForm, setShowAddSignerForm] = useState(false)
  const [newSignerError, setNewSignerError] = useState(false)
  
  // Ref for scrolling to the new signer form
  const newSignerFormRef = useRef<HTMLDivElement>(null)

  // Handle adding a new signer
  const handleAddSigner = () => {
    if (!newSignerEmail || !newSignerAddress) return;
    
    const newSigner = {
      email: newSignerEmail,
      ethAddress: newSignerAddress,
      publicKey: newSignerPublicKey || '',
      authMethodId: authMethodId || ''
    };
    
    setSigners([...signers, newSigner]);
    
    // Clear form and hide
    setNewSignerEmail('');
    setNewSignerAddress('');
    setNewSignerPublicKey('');
    setAuthMethodId('');
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
      setThreshold(signers.length);
    }
  }, [signers]);

  // Submit the wallet settings changes
  const handleSubmitChanges = async () => {
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
      
      const isValid = await isGoogleTokenValid(authMethod.accessToken);
      if (!isValid) {
        toast.error('Your Google login has expired. Please log in again.');
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
        mfaSettings: wallet.metadata?.mfaSettings
      };
      
      // Check if signers list has changed (added or removed signers)
      if (JSON.stringify(signers.map((s: any) => s.ethAddress).sort()) !== 
          JSON.stringify(wallet.signers.map((s: any) => s.ethAddress).sort())) {
        settingsData.signers = signers;
      }
      
      // Check if threshold has changed
      if (threshold !== wallet.threshold) {
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
      
      // Create a new proposal with the settings change data
      const response = await axios.post('/api/multisig/messages', {
        walletId: wallet.id,
        createdBy: currentPkp.ethAddress,
        message: JSON.stringify(settingsData),
        type: 'walletSettings', // Use new type field
        settingsData, // Only includes changed fields
        sendEmail: true,
        signers: wallet.signers
      });
      
      if (response.data.success) {
        if (onUpdateSuccess) {
          onUpdateSuccess();
        }
        if (onRequestClose) {
          onRequestClose();
        }
      }
    } catch (error) {
      console.error('Failed to create wallet settings proposal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Check if threshold options need to be adjusted
  const thresholdOptions = Array.from(
    { length: signers.length }, 
    (_, i) => i + 1
  );

  return (
    <div className="space-y-6">
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
              {signer.ethAddress !== currentPkp.ethAddress && (
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
                  setAuthMethodId(addressData.authMethodId || '');
                } else {
                  setNewSignerAddress('');
                  setNewSignerPublicKey('');
                  setAuthMethodId('');
                }
              }}
            />
            
            {newSignerError && (
              <div className="text-sm text-red-500 -mt-1">
                Please confirm or cancel this signer before updating
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
                  setAuthMethodId('');
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
      
      {/* Threshold Setting */}
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
      
      {/* Submit Button */}
      <Button
        onClick={handleSubmitChanges}
        disabled={isLoading}
        className="w-full mt-6"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Update Wallet Settings
      </Button>
    </div>
  );
} 