import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Eye, EyeOff } from 'lucide-react';
import { log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { PinService, PinData } from '@/services/pinService';
import { useUserData } from '@/hooks/useUserData';
import { AuthMethod } from '@lit-protocol/types';

// Interface for PIN status
interface PinStatus {
  hasPin: boolean;
}

// UI state for the PIN settings
type PinUiState = 'initial' | 'setup' | 'change';

interface MFAPinProps {
  // Current PIN status information
  pinStatus: PinStatus | null;
  
  // Auth method for Lit Protocol operations
  authMethod: AuthMethod | null;
  
  // Callback when PIN is successfully added/changed/removed
  onSuccess: () => void;
}

// Common container for all UI states
const FormContainer: React.FC<{
  children: React.ReactNode;
  errorMessage: string | null;
  successMessage?: string | null;
}> = ({ children, errorMessage, successMessage }) => (
  <div className="py-1">
    <h3 className="font-medium text-base mb-4">PIN Authentication</h3>

    {errorMessage && (
      <p className="text-sm text-red-500 p-2 bg-red-50 rounded-md mb-2">Error: {errorMessage}</p>
    )}
    {successMessage && (
      <p className="text-sm text-green-600 p-2 bg-green-50 rounded-md mb-2">{successMessage}</p>
    )}
    {children}
  </div>
);

// Action buttons component
const ActionButtons: React.FC<{
  primaryText: string;
  cancelText?: string;
  isLoading: boolean;
  isDisabled: boolean;
  onCancel: () => void;
  loadingText?: string;
}> = ({ primaryText, cancelText, isLoading, isDisabled, onCancel, loadingText }) => (
  <div className="flex gap-2">
    <Button 
      type="submit" 
      disabled={isLoading || isDisabled} 
      className="flex-1"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText || 'Processing...'}
        </>
      ) : primaryText}
    </Button>
    <Button 
      type="button" 
      variant="outline" 
      onClick={onCancel} 
      disabled={isLoading} 
      className="flex-1"
    >
      {cancelText || "Cancel"}
    </Button>
  </div>
);

export function MFAPin({ 
  pinStatus, 
  authMethod,
  onSuccess
}: MFAPinProps) {
  const t = useTranslations("MFASettings");
  // Get user data for Lit Protocol operations
  const { userData, isLoading: isLoadingUser, error: userError } = useUserData(authMethod);
  const [uiState, setUiState] = useState<PinUiState>('initial');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [currentPin, setCurrentPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [showCurrentPin, setShowCurrentPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Remove error and successMessage state

  // Clear error and success messages (no longer needed)
  const resetMessages = () => {};

  // Handle Add PIN button click
  const handleAddClick = () => {
    setUiState('setup');
  };

  // Handle Change PIN button click
  const handleChangeClick = () => {
    setUiState('change');
  };

  // Handle cancellation
  const handleCancel = () => {
    setPin('');
    setConfirmPin('');
    setCurrentPin('');
    setUiState('initial');
  };

  // Validate PIN format (6 digits)
  const isValidPin = (pinValue: string) => /^\d{6}$/.test(pinValue);

  // Add PIN (setup)
  const handleAddPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData?.litActionPkp) {
      toast.error('User PKP not found. Please ensure you have a valid PKP.');
      return;
    }
    if (!isValidPin(pin)) {
      toast.error('PIN must be exactly 6 digits');
      return;
    }
    if (pin !== confirmPin) {
      toast.error('PINs do not match');
      return;
    }
    setIsLoading(true);
    try {
      log('MFAPin: Creating PIN with Lit Protocol');
      const pinData = await PinService.createPinHash(pin, {
        litActionPkp: userData.litActionPkp,
        authMethod: authMethod!
      });
      PinService.setLocalPinData(pinData);
      toast.success('PIN created successfully');
      setPin('');
      setConfirmPin('');
      setUiState('initial');
      onSuccess();
    } catch (err: any) {
      toast.error(err.message);
      log('MFAPin: Error creating PIN', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Change PIN
  const handleChangePin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData?.litActionPkp) {
      toast.error('User PKP not found. Please ensure you have a valid PKP.');
      return;
    }
    if (!isValidPin(currentPin)) {
      toast.error('Current PIN must be exactly 6 digits');
      return;
    }
    if (!isValidPin(pin)) {
      toast.error('New PIN must be exactly 6 digits');
      return;
    }
    if (pin !== confirmPin) {
      toast.error('New PINs do not match');
      return;
    }
    if (currentPin === pin) {
      toast.error('New PIN must be different from current PIN');
      return;
    }
    setIsLoading(true);
    try {
      log('MFAPin: Changing PIN with Lit Protocol');
      const storedPinData = PinService.getLocalPinData();
      if (!storedPinData) {
        toast.error('No PIN is set.');
        return;
      }
      const isCurrentPinValid = await PinService.verifyPin(
        currentPin,
        storedPinData,
        {
          litActionPkp: userData.litActionPkp,
          authMethod: authMethod!
        }
      );
      if (!isCurrentPinValid) {
        toast.error('Current PIN is incorrect');
        return;
      }
      const newPinData = await PinService.createPinHash(pin, {
        litActionPkp: userData.litActionPkp,
        authMethod: authMethod!
      });
      PinService.setLocalPinData(newPinData);
      toast.success('PIN changed successfully');
      setPin('');
      setConfirmPin('');
      setCurrentPin('');
      setUiState('initial');
      onSuccess();
    } catch (err: any) {
      toast.error(err.message);
      log('MFAPin: Error changing PIN', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Remove PIN
  const handleRemovePin = async () => {
    if (!window.confirm('Are you sure you want to remove your PIN?')) return;
    PinService.removeLocalPinData();
    toast.success('PIN removed successfully');
    setUiState('initial');
    onSuccess();
  };

  // Show loading state while fetching user data
  if (isLoadingUser) {
    return (
      <FormContainer errorMessage={null}>
        <div className="text-center">Loading user data...</div>
      </FormContainer>
    );
  }

  // Show error if user data failed to load
  if (userError) {
    return (
      <FormContainer errorMessage={`Error loading user data: ${userError}`}>
        <div></div>
      </FormContainer>
    );
  }

  // Show message if user has no PKP
  if (!userData?.litActionPkp) {
    return (
      <FormContainer errorMessage="No PKP found for current user. Please ensure you have a valid PKP.">
        <div></div>
      </FormContainer>
    );
  }

  // Initial state - show current PIN status or add button
  if (uiState === 'initial') {
    return (
      <FormContainer errorMessage={null} successMessage={null}>
        {pinStatus?.hasPin ? (
          <div className="bg-muted p-2 rounded-md">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium">PIN Authentication</p>
                <p className="text-xs text-muted-foreground">6-digit PIN is active</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleChangeClick} 
                  disabled={isLoading}
                >
                  Change PIN
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleRemovePin}
                  disabled={isLoading}
                >
                  Remove PIN
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleAddClick} 
            className="w-full"
          >
            Set Up PIN
          </Button>
        )}
      </FormContainer>
    );
  }

  // PIN setup state - create new PIN
  if (uiState === 'setup') {
    return (
      <FormContainer errorMessage={null} successMessage={null}>
        <form onSubmit={handleAddPin} className="space-y-4">
          <div>
            <Label htmlFor="pin-input" className="block mb-2">
              New PIN (6 digits)
            </Label>
            <div className="relative">
              <Input 
                id="pin-input" 
                type={showPin ? "text" : "password"}
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                placeholder="123456"
                maxLength={6}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowPin(!showPin)}
                disabled={isLoading}
              >
                {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-pin-input" className="block mb-2">
              Confirm PIN
            </Label>
            <div className="relative">
              <Input 
                id="confirm-pin-input" 
                type={showConfirmPin ? "text" : "password"}
                value={confirmPin} 
                onChange={(e) => setConfirmPin(e.target.value)} 
                placeholder="123456"
                maxLength={6}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowConfirmPin(!showConfirmPin)}
                disabled={isLoading}
              >
                {showConfirmPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <ActionButtons
            primaryText="Create PIN"
            cancelText="Cancel"
            loadingText="Creating..."
            isLoading={isLoading}
            isDisabled={!isValidPin(pin) || pin !== confirmPin}
            onCancel={handleCancel}
          />
        </form>
      </FormContainer>
    );
  }

  // PIN change state - change existing PIN
  if (uiState === 'change') {
    return (
      <FormContainer errorMessage={null} successMessage={null}>
        <form onSubmit={handleChangePin} className="space-y-4">
          <div>
            <Label htmlFor="current-pin-input" className="block mb-2">
              Current PIN
            </Label>
            <div className="relative">
              <Input 
                id="current-pin-input" 
                type={showCurrentPin ? "text" : "password"}
                value={currentPin} 
                onChange={(e) => setCurrentPin(e.target.value)} 
                placeholder="Current PIN"
                maxLength={6}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowCurrentPin(!showCurrentPin)}
                disabled={isLoading}
              >
                {showCurrentPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="new-pin-input" className="block mb-2">
              New PIN (6 digits)
            </Label>
            <div className="relative">
              <Input 
                id="new-pin-input" 
                type={showPin ? "text" : "password"}
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                placeholder="New PIN"
                maxLength={6}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowPin(!showPin)}
                disabled={isLoading}
              >
                {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-new-pin-input" className="block mb-2">
              Confirm New PIN
            </Label>
            <div className="relative">
              <Input 
                id="confirm-new-pin-input" 
                type={showConfirmPin ? "text" : "password"}
                value={confirmPin} 
                onChange={(e) => setConfirmPin(e.target.value)} 
                placeholder="Confirm new PIN"
                maxLength={6}
                disabled={isLoading}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowConfirmPin(!showConfirmPin)}
                disabled={isLoading}
              >
                {showConfirmPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <ActionButtons
            primaryText="Change PIN"
            cancelText="Cancel"
            loadingText="Changing..."
            isLoading={isLoading}
            isDisabled={!isValidPin(currentPin) || !isValidPin(pin) || pin !== confirmPin || currentPin === pin}
            onCancel={handleCancel}
          />
        </form>
      </FormContainer>
    );
  }

  return null;
}