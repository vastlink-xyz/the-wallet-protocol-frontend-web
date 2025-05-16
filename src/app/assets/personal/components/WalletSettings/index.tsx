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
import { DailyWithdrawLimit } from './DailyWithdrawLimit';
import { CURRENT_AUTH_PROVIDER_KEY, getProviderByAuthMethodType } from '@/lib/lit';
import { toast } from 'react-toastify';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';

export function PersonalWalletSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [ethLimit, setEthLimit] = useState<string>('0.001');
  const [isLimitValid, setIsLimitValid] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [authMethodId, setAuthMethodId] = useState<string | null>(null);
  
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
  
  const handleLimitChange = (limit: string, isValid: boolean) => {
    console.log('handleLimitChange', limit, isValid);
    setEthLimit(limit);
    setIsLimitValid(isValid);
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
          <DailyWithdrawLimit 
            onLimitChange={handleLimitChange} 
            value={ethLimit}
          />
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
