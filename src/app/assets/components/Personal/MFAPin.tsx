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
import { useAuthContext } from '@/hooks/useAuthContext';
import { useSecurityVerification } from '@/hooks/useSecurityVerification';
import { SecurityVerificationService } from '@/services/securityVerificationService';

// Interface for PIN status
interface PinStatus {
  hasPin: boolean;
}

// UI state for the PIN settings
type PinUiState = 'initial' | 'setup' | 'change';

interface MFAPinProps {
  // Current PIN status information
  pinStatus: PinStatus | null;
  
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
  onSuccess
}: MFAPinProps) {
  const t = useTranslations("MFASettings");
  // Get user data and auth method for Lit Protocol operations
  const { userData, isLoading: isLoadingUser, error: userError } = useUserData();
  const { authMethod, getCurrentAccessToken } = useAuthContext();
  const [uiState, setUiState] = useState<PinUiState>('initial');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setShowConfirmPin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Helper to get session JWT
  const getSessionJwt = async () => {
    const sessionJwt = await getCurrentAccessToken();
    if (!sessionJwt) {
      toast.error('No access token available');
      return null;
    }
    return sessionJwt;
  };

  // Unified security verification wrapper
  const securityVerification = useSecurityVerification({
    executeTransaction: async (params: any) => {
      const { run, ...rest } = params || {};
      const sessionJwt = await getSessionJwt();
      if (!sessionJwt) {
        return { success: false, error: 'Authentication token not available' };
      }
      // Step 1: verify (may trigger MFA requirements)
      const verificationResult = await SecurityVerificationService.verifyForAction({
        contextType: 'forceMFA',
        sessionJwt,
        ...rest,
      });
      if (!verificationResult.success) {
        return verificationResult;
      }
      // Step 2: run the actual action
      if (typeof run === 'function') {
        await run();
      }
      return { success: true };
    }
  });

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
    setUiState('initial');
  };

  // Validate PIN format (6 digits)
  const isValidPin = (pinValue: string) => /^\d{6}$/.test(pinValue);

  // Add PIN (setup)
  const handleAddPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData?.litActionPkp || !authMethod) {
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
        authMethod: authMethod
      });
      
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('No access token available');
      }
      
      const run = async () => {
        await PinService.setLocalPinData({
          pinData,
          authMethodId: userData.authMethodId,
          accessToken
        });
      };
      const result = await securityVerification.verify({ run });
      if (!result?.success) {
        throw new Error(result?.error || 'Verification failed');
      }
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
    if (!userData?.litActionPkp || !authMethod) {
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
      log('MFAPin: Changing PIN with Lit Protocol');
      const storedPinData = await PinService.getLocalPinData({
        authMethodId: userData.authMethodId,
      });
      if (!storedPinData) {
        toast.error('No PIN is set.');
        return;
      }
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('No access token available');
      }
      const newPinData = await PinService.createPinHash(pin, {
        litActionPkp: userData.litActionPkp,
        authMethod: authMethod
      });
      
      const run = async () => {
        await PinService.updateLocalPinData({
          pinData: newPinData,
          authMethodId: userData.authMethodId,
          accessToken
        });
      };
      const result = await securityVerification.verify({ run });
      if (!result?.success) {
        throw new Error(result?.error || 'Verification failed');
      }
      toast.success(t('pin_changed'));
      setPin('');
      setConfirmPin('');
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
    
    if (!authMethod) {
      toast.error(t('user_not_found'));
      return;
    }
    
    setIsLoading(true);
    try {
      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('No access token available');
      }
      
      const run = async () => {
        await PinService.removeLocalPinData({
          authMethodId: userData!.authMethodId,
          accessToken
        });
      };
      const result = await securityVerification.verify({ run });
      if (!result?.success) {
        throw new Error(result?.error || 'Verification failed');
      }
      toast.success(t('pin_removed'));
      setUiState('initial');
      onSuccess();
    } catch (error) {
      console.error('Failed to remove PIN:', error);
      toast.error('Failed to remove PIN');
    } finally {
      setIsLoading(false);
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
        {securityVerification.PinDialog}
        {securityVerification.MFADialog}
      </FormContainer>
    );
  }

  // PIN setup state - create new PIN
  if (uiState === 'setup') {
    return (
      <>
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
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
      </>
    );
  }

  // PIN change state - change existing PIN
  if (uiState === 'change') {
    return (
      <>
      <FormContainer errorMessage={null} successMessage={null}>
        <form onSubmit={handleChangePin} className="space-y-4">
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
            isDisabled={!isValidPin(pin) || pin !== confirmPin}
            onCancel={handleCancel}
          />
        </form>
      </FormContainer>
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
      </>
    );
  }

  return null;
}
