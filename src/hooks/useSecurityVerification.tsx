// This hook handles PIN and MFA verification for personal wallet transactions. All comments must be in English.
import { useState, useCallback } from 'react';
import { PinVerificationDialog } from '@/components/Transaction/PinVerificationDialog';
import { MFASelectionDialog, MFAOption } from '@/components/Transaction/MFASelectionDialog';
import React from 'react';
import { useUserData } from './useUserData';
import { PinService } from '@/services/pinService';
import { SecurityLayerService } from '@/services/securityLayerService';
import { toast } from 'react-toastify';
import { useAuthContext } from './useAuthContext';

interface UseSecurityVerificationParams {
  // Function to call the transaction (should call lit action), returns a Promise with the lit action response
  executeTransaction: (params: any) => Promise<any>;
}

interface VerifyParams {
  // Transaction parameters (amount, tokenType, etc.)
  [key: string]: any;
}

interface UseSecurityVerificationResult {
  verify: (params: VerifyParams) => Promise<any>;
  PinDialog: React.ReactNode;
  MFADialog: React.ReactNode;
  isVerifying: boolean;
}

export function useSecurityVerification({
  executeTransaction,
}: UseSecurityVerificationParams): UseSecurityVerificationResult {
  // Get user data and auth method
  const { userData } = useUserData();
  const { authMethod } = useAuthContext();
  
  // State for PIN dialog
  const [showPinDialog, setShowPinDialog] = useState(false);
  const [pinCode, setPinCode] = useState<string>('');
  // State for MFA dialog
  const [showMFADialog, setShowMFADialog] = useState(false);
  const [availableMFAOptions, setAvailableMFAOptions] = useState<MFAOption[]>([]);
  // State for verification
  const [isVerifying, setIsVerifying] = useState(false);
  // State for result resolver
  const [resolvePin, setResolvePin] = useState<((pin: string) => void) | null>(null);
  const [resolveMFA, setResolveMFA] = useState<((result: { mfaType: string; mfaCode: string; mfaMethodId?: string }) => void) | null>(null);

  // Handle PIN verification dialog with frontend pre-verification
  const handlePinVerify = useCallback(async (pin: string) => {
    // First, validate PIN format
    if (!PinService.validatePinFormat(pin)) {
      toast.error('PIN must be exactly 6 digits');
      return;
    }

    // Pre-verify PIN using Lit Action if user data is available
    if (userData && authMethod) {
      try {
        // Get stored PIN data
        const storedPinData = await PinService.getLocalPinData({ authMethodId: userData.authMethodId });
        if (storedPinData && userData.litActionPkp) {
          // Create UserData object for PIN verification
          const userDataForPin = {
            litActionPkp: userData.litActionPkp,
            authMethod: authMethod
          };
          
          // Verify PIN using Lit Action
          const isValidPin = await PinService.verifyPin(pin, storedPinData, userDataForPin);
          if (!isValidPin) {
            toast.error('Invalid PIN. Please try again.');
            return; // Don't close dialog, allow retry
          }
        }
      } catch (error) {
        console.error('PIN pre-verification failed:', error);
        toast.error('PIN verification failed. Please try again.');
        return; // Don't close dialog, allow retry
      }
    }

    // If we reach here, PIN is valid (or couldn't be pre-verified)
    setPinCode(pin);
    setShowPinDialog(false);
    if (resolvePin) {
      resolvePin(pin);
    }
  }, [resolvePin, userData, authMethod]);

  const handlePinCancel = useCallback(() => {
    setShowPinDialog(false);
    if (resolvePin) {
      resolvePin('');
    }
  }, [resolvePin]);

  // Handle MFA verification dialog
  const handleMFAVerify = useCallback(async (mfaType: string, mfaCode: string, mfaMethodId?: string) => {
    setShowMFADialog(false);
    if (resolveMFA) {
      resolveMFA({ mfaType, mfaCode, mfaMethodId });
    }
  }, [resolveMFA]);

  const handleMFACancel = useCallback(() => {
    setShowMFADialog(false);
    if (resolveMFA) {
      resolveMFA({ mfaType: '', mfaCode: '' });
    }
  }, [resolveMFA]);

  // The main verify function
  const verify = useCallback(async (params: VerifyParams) => {
    if (!authMethod || !userData) {
      return { success: false, error: 'No auth method or user data available' };
    }
    
    setIsVerifying(true);
    let finalResult = null;
    let pin = '';
    
    // Step 1: Dynamically check if PIN verification is required
    let isPinRequired = false;
    try {
      isPinRequired = await SecurityLayerService.requiresPINVerification(authMethod.accessToken, userData.authMethodId);
    } catch (error) {
      console.error('Error checking PIN requirement:', error);
      // If we can't check, assume PIN is not required to avoid blocking the transaction
      isPinRequired = false;
    }
    
    if (isPinRequired) {
      pin = await new Promise<string>((resolve) => {
        setResolvePin(() => resolve);
        setShowPinDialog(true);
      });
      if (!pin) {
        setIsVerifying(false);
        return { success: false, error: 'PIN verification cancelled' };
      }
    }
    // Step 2: Call the transaction (lit action) with PIN (if any)
    let txResult = await executeTransaction({ ...params, pinCode: pin });
    // Step 3: If lit action requires MFA, show MFA dialog and repeat
    console.log('Transaction result:', txResult);
    console.log('Available MFA options:', txResult?.availableMFAOptions);
    if (txResult && txResult.requiresMFA && Array.isArray(txResult.availableMFAOptions) && txResult.availableMFAOptions.length > 0) {
      const mfa = await new Promise<{ mfaType: string; mfaCode: string; mfaMethodId?: string }>((resolve) => {
        setAvailableMFAOptions(txResult.availableMFAOptions);
        setResolveMFA(() => resolve);
        setShowMFADialog(true);
      });
      if (!mfa.mfaType || !mfa.mfaCode) {
        setIsVerifying(false);
        return { success: false, error: 'MFA verification cancelled' };
      }
      // Step 4: Call the transaction again with MFA params
      txResult = await executeTransaction({ ...params, pinCode: pin, ...mfa });
    }
    setIsVerifying(false);
    finalResult = txResult;
    return finalResult;
  }, [executeTransaction]);

  // Pin dialog node, only render when needed
  let PinDialog: React.ReactNode = null;
  if (showPinDialog) {
    PinDialog = (
      <PinVerificationDialog
        isOpen={showPinDialog}
        onClose={handlePinCancel}
        onPinVerify={handlePinVerify}
      />
    );
  }

  // MFA dialog node, only render when needed
  const MFADialog = showMFADialog && authMethod ? (
    <MFASelectionDialog
      isOpen={showMFADialog}
      availableMFAOptions={availableMFAOptions}
      accessToken={authMethod.accessToken}
      isSending={isVerifying}
      onMFAVerify={handleMFAVerify}
      onClose={handleMFACancel}
    />
  ) : null;

  return {
    verify,
    PinDialog,
    MFADialog,
    isVerifying,
  };
} 