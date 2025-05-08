'use client'

import { useState, useEffect } from 'react'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { Button } from '@/components/ui/button'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignerEmailField } from '@/components/SignerEmailField'
import axios from 'axios'
import { getEmailFromGoogleToken, log } from '@/lib/utils'
import { X } from 'lucide-react'

interface WalletSettingsProps {
  wallet: any // MultisigWallet
  currentPkp: IRelayPKP
  authMethod: AuthMethod
  onClose: () => void
  onSuccess?: () => void
}

export function WalletSettings({
  wallet,
  currentPkp,
  authMethod,
  onClose,
  onSuccess
}: WalletSettingsProps) {
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

  // Get current user's email from authMethod
  let currentUserEmail = '';
  if (authMethod.accessToken) {
    const email = getEmailFromGoogleToken(authMethod.accessToken);
    if (email) {
      currentUserEmail = email;
    }
  }

  // Handle adding a new signer
  const handleAddSigner = () => {
    if (!newSignerEmail || !newSignerAddress) return;
    
    const newSigner = {
      email: newSignerEmail,
      ethAddress: newSignerAddress,
      publicKey: newSignerPublicKey || ''
    };
    
    setSigners([...signers, newSigner]);
    setNewSignerEmail('');
    setNewSignerAddress('');
    setNewSignerPublicKey('');
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
      setIsLoading(true);
      
      // Prepare settings change data
      const settingsData = {
        signers,
        threshold,
        totalSigners: signers.length,
        mfaSettings: {
          phoneNumber,
          dailyLimit
        }
      };
      
      // Create a new proposal with the settings change data
      const response = await axios.post('/api/multisig/messages', {
        walletId: wallet.id,
        createdBy: currentPkp.ethAddress,
        message: JSON.stringify(settingsData),
        type: 'walletSettings', // Use new type field
        settingsData, // Dedicated settingsData field
        sendEmail: true,
        signers: wallet.signers
      });
      
      if (response.data.success) {
        if (onSuccess) {
          onSuccess();
        }
        onClose();
      }
    } catch (error) {
      console.error('Failed to create wallet settings proposal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-fetch user information when ETH address changes
  const fetchUserByAddress = async (address: string) => {
    if (!address || !address.startsWith('0x') || address.length !== 42) return;
    
    try {
      const response = await axios.get(`/api/user/address?address=${address}`);
      
      if (response.data.success) {
        const { pkp } = response.data.data;
        setNewSignerPublicKey(pkp.publicKey);
      }
    } catch (error) {
      console.error('Failed to fetch user by address:', error);
      setNewSignerPublicKey('');
    }
  };

  // Check if threshold options need to be adjusted
  const thresholdOptions = Array.from(
    { length: signers.length }, 
    (_, i) => i + 1
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-semibold mb-6">Modify Wallet Settings</h2>
        
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
          <div className="space-y-3 border-t border-b py-4">
            <h3 className="text-md font-semibold">Add New Signer</h3>
            <div className="grid grid-cols-1 gap-3">
              <SignerEmailField
                label="New Signer"
                input={{
                  value: newSignerEmail,
                  onChange: (value) => setNewSignerEmail(value),
                  placeholder: "Enter signer's email or ETH address",
                  id: "newSigner"
                }}
                onAddressFound={(addressData) => {
                  if (addressData) {
                    setNewSignerAddress(addressData.ethAddress);
                    setNewSignerPublicKey(addressData.publicKey || '');
                  } else {
                    setNewSignerAddress('');
                    setNewSignerPublicKey('');
                  }
                }}
              />
              
              <Button 
                onClick={handleAddSigner}
                variant="outline"
                disabled={!newSignerEmail || !newSignerAddress}
                className="w-full mt-2"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Signer
              </Button>
            </div>
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
      </div>
    </div>
  );
} 