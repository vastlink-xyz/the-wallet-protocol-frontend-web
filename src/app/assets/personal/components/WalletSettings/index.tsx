import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MFASettingsContent } from './MFASettingsContent';
import { Input } from "@/components/ui/input";
import { CURRENT_AUTH_PROVIDER_KEY, getProviderByAuthMethodType } from '@/lib/lit';
import { toast } from 'react-toastify';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';

export function PersonalWalletSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [ethLimit, setEthLimit] = useState<string>('0.001');
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  const [limitError, setLimitError] = useState<string>('');
  
  // Get user's authMethodId when component mounts
  useEffect(() => {
    const fetchAuthMethodId = async () => {
      try {
        // Get auth method directly from storage 
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) {
          console.error('No auth method found in storage');
          return;
        }
        
        const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY);
        if (!currentAuthProvider) {
          console.error('No current auth provider found');
          return;
        }
        
        const provider = getProviderByAuthMethodType(currentAuthProvider);
        const id = await provider.getAuthMethodId(authMethod);
        setAuthMethodId(id);
        
        // Fetch current settings
        await fetchCurrentSettings(id);
      } catch (error) {
        console.error('Error getting auth method ID:', error);
      }
    };
    
    if (isOpen) {
      fetchAuthMethodId();
    }
  }, [isOpen]);
  
  // Fetch current user settings
  const fetchCurrentSettings = async (id: string) => {
    try {
      const response = await fetch(`/api/user?authMethodId=${id}`);
      if (!response.ok) {
        console.error('Failed to fetch user settings');
        return;
      }
      
      const userData = await response.json();
      if (userData.walletSettings?.dailyWithdrawLimits?.ETH) {
        setEthLimit(userData.walletSettings.dailyWithdrawLimits.ETH.toString());
      }
    } catch (error) {
      console.error('Error fetching current settings:', error);
    }
  };
  
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Allow empty value so user can clear the input
    if (newValue === '') {
      setLimitError('');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    // Validate if input is a valid number
    const numberRegex = /^(0|[1-9]\d*)(\.\d+)?$/;
    if (!numberRegex.test(newValue)) {
      setLimitError('Please enter a valid number');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    // Parse to number to ensure validity
    const numValue = parseFloat(newValue);
    if (isNaN(numValue) || numValue < 0) {
      setLimitError('Please enter a number greater than or equal to 0');
      setEthLimit(newValue);
      setIsLimitValid(false);
      return;
    }
    
    setLimitError('');
    setEthLimit(newValue);
    setIsLimitValid(true);
  };
  
  const saveSettings = async () => {
    if (!isLimitValid || !authMethodId) return;
    
    setIsSaving(true);
    
    try {
      // Call the API to update wallet settings
      const response = await fetch('/api/user/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authMethodId,
          walletSettings: {
            dailyWithdrawLimits: {
              ETH: ethLimit
            }
          }
        })
      });
      
      if (response.ok) {
        toast.success("Your wallet settings have been updated successfully.");
        setIsOpen(false);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save settings');
      }
    } catch (error) {
      console.error('Error saving wallet settings:', error);
      toast.error("Failed to save wallet settings. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Wallet Settings</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Wallet Settings</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>

        <div>
          <h2 className='font-medium mb-2'>Daily Withdraw Limit</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2">
              <Input 
                value={ethLimit} 
                onChange={handleLimitChange} 
                placeholder="0.001"
                className="w-32"
              />
              <span className="font-medium">ETH</span>
            </div>
            {limitError && <p className="text-sm text-red-500">{limitError}</p>}
          </div>
        </div>

        <div>
          <h2 className='font-medium mb-2'>MFA Settings</h2>
          <MFASettingsContent isOpen={isOpen} />
        </div>

        <DialogFooter className="pt-4">
          <Button 
            onClick={saveSettings} 
            disabled={!isLimitValid || isSaving}
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
