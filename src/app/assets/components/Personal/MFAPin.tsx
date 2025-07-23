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
import { getAuthIdByAuthMethod } from '@lit-protocol/lit-auth-client';

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
}> = ({ children, errorMessage, successMessage }) => {
  const t = useTranslations('MFASettings');
  return (
    <div className="py-1">
      {errorMessage && (
        <p className="text-sm text-red-500 p-2 bg-red-50 rounded-md mb-2">{t('pin_error', { message: errorMessage })}</p>
      )}
      {successMessage && (
        <p className="text-sm text-green-600 p-2 bg-green-50 rounded-md mb-2">{successMessage}</p>
      )}
      {children}
    </div>
  );
};

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
      toast.error(t('user_not_found'));
      return;
    }
    if (!isValidPin(pin)) {
      toast.error(t('pin_must_be_6_digits'));
      return;
    }
    if (pin !== confirmPin) {
      toast.error(t('pins_do_not_match'));
      return;
    }
    setIsLoading(true);
    try {
      log('MFAPin: Creating PIN with Lit Protocol');
      const pinData = await PinService.createPinHash(pin, {
        litActionPkp: userData.litActionPkp,
        authMethod: authMethod!
      });
      const authMethodId = await getAuthIdByAuthMethod(authMethod!);
      await PinService.setLocalPinData({
        pinData,
        authMethodId,
        authMethod: authMethod!
      });
      toast.success(t('pin_created'));
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
      toast.error(t('user_not_found'));
      return;
    }
    if (!isValidPin(currentPin)) {
      toast.error(t('current_pin_incorrect'));
      return;
    }
    if (!isValidPin(pin)) {
      toast.error(t('pin_must_be_6_digits'));
      return;
    }
    if (pin !== confirmPin) {
      toast.error(t('pins_do_not_match'));
      return;
    }
    if (currentPin === pin) {
      toast.error(t('new_pin_must_be_different'));
      return;
    }
    setIsLoading(true);
    try {
      log('MFAPin: Changing PIN with Lit Protocol');
      const authMethodId = await getAuthIdByAuthMethod(authMethod!);
      const storedPinData = await PinService.getLocalPinData({
        authMethodId,
      });
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
        toast.error(t('current_pin_incorrect'));
        return;
      }
      const newPinData = await PinService.createPinHash(pin, {
        litActionPkp: userData.litActionPkp,
        authMethod: authMethod!
      });
      await PinService.setLocalPinData({
        pinData: newPinData,
        authMethodId: authMethodId,
        authMethod: authMethod!
      });
      toast.success(t('pin_changed'));
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
    if (!window.confirm(t('confirm_remove_pin'))) return;
    try {
      const authMethodId = await getAuthIdByAuthMethod(authMethod!);
      await PinService.removeLocalPinData({
        authMethodId: authMethodId,
        authMethod: authMethod!
      });
      toast.success(t('pin_removed'));
      setUiState('initial');
      onSuccess();
    } catch (error) {
      console.error('Failed to remove PIN:', error);
      toast.error('Failed to remove PIN');
    }
  };

  // Show loading state while fetching user data
  if (isLoadingUser) {
    return (
      <FormContainer errorMessage={null}>
        <div className="text-center">{t('fetch_error')}</div>
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

  // Initial state - show current PIN status or add button
  if (uiState === 'initial') {
    return (
      <FormContainer errorMessage={null} successMessage={null}>
        {pinStatus?.hasPin ? (
          <div className="bg-muted p-2 rounded-md">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-medium">{t('pin_authentication')}</p>
                <p className="text-xs text-muted-foreground">{t('pin_active')}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleChangeClick} 
                  disabled={isLoading}
                >
                  {t('change_pin')}
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleRemovePin}
                  disabled={isLoading}
                >
                  {t('remove_pin')}
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
            {t('set_up_pin')}
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
              {t('new_pin')}
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
              {t('confirm_pin')}
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
            primaryText={t('create_pin')}
            cancelText={t('cancel')}
            loadingText={t('creating_pin')}
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
              {t('current_pin')}
            </Label>
            <div className="relative">
              <Input 
                id="current-pin-input" 
                type={showCurrentPin ? "text" : "password"}
                value={currentPin} 
                onChange={(e) => setCurrentPin(e.target.value)} 
                placeholder={t('current_pin')}
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
              {t('new_pin')}
            </Label>
            <div className="relative">
              <Input 
                id="new-pin-input" 
                type={showPin ? "text" : "password"}
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                placeholder={t('new_pin')}
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
              {t('confirm_pin')}
            </Label>
            <div className="relative">
              <Input 
                id="confirm-new-pin-input" 
                type={showConfirmPin ? "text" : "password"}
                value={confirmPin} 
                onChange={(e) => setConfirmPin(e.target.value)} 
                placeholder={t('confirm_pin')}
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
            primaryText={t('change_pin')}
            cancelText={t('cancel')}
            loadingText={t('changing_pin')}
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