import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Shield, Copy, CheckCircle } from 'lucide-react';
import { log } from '@/lib/utils';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

// TOTP setup data interface from Stytch
interface TOTPSetupData {
  totp_id: string;
  secret: string;
  qr_code: string;
  recovery_code: string;
}

// UI state for the TOTP settings
type TOTPUiState = 'initial' | 'setup' | 'verify';

interface MFATOTPProps {
  // Current TOTP status
  hasTotp: boolean;
  
  // Session JWT for API calls
  sessionJwt: string | null;
  
  // Auth method ID for API calls
  authMethodId: string | null;
  
  // Callback when TOTP is successfully added/verified/removed
  onSuccess: () => void;
}

// Common container for all UI states
const FormContainer: React.FC<{
  children: React.ReactNode;
  title?: string;
  errorMessage: string | null;
  successMessage?: string | null;
}> = ({ children, title, errorMessage, successMessage }) => (
  <div className="py-1">
    <h3 className="font-medium text-base mb-4">
      {title || 'TOTP Authentication'}
    </h3>

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

export function MFATOTP({ 
  hasTotp, 
  sessionJwt,
  authMethodId,
  onSuccess
}: MFATOTPProps) {
  const t = useTranslations("TOTPSettings");
  const tCommon = useTranslations("MFASettings");

  const [uiState, setUiState] = useState<TOTPUiState>('initial');
  const [totpCode, setTotpCode] = useState('');
  const [setupData, setSetupData] = useState<TOTPSetupData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Clear error and success messages
  const resetMessages = () => {
    setError(null);
    setSuccessMessage(null);
  };

  // Handle Add TOTP button click
  const handleAddClick = async () => {
    resetMessages();
    if (!sessionJwt) {
      setError(tCommon('user_not_found'));
      return;
    }

    setIsLoading(true);
    try {
      // Create TOTP using unified MFA API (user_id extracted from session)
      const response = await fetch('/api/mfa/totp/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          expiration_minutes: 1440 // 24 hours
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to setup TOTP');
      }

      const data = await response.json();
      setSetupData({
        totp_id: data.totp_id,
        secret: data.secret,
        qr_code: data.qr_code,
        recovery_code: data.recovery_code
      });
      setUiState('setup');
    } catch (err: any) {
      setError(err.message);
      log('MFATOTP: Error setting up TOTP', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle cancellation
  const handleCancel = () => {
    resetMessages();
    setTotpCode('');
    setSetupData(null);
    setUiState('initial');
  };

  // Handle TOTP removal
  const handleRemoveTotp = async () => {
    resetMessages();
    if (!window.confirm(t("confirm_remove"))) return;

    if (!sessionJwt || !authMethodId) {
      setError(tCommon('user_not_found'));
      return;
    }

    setIsLoading(true);

    try {
      // Step 1: Remove TOTP from Stytch with policy checks (similar to WhatsApp flow)
      const removeResponse = await fetch('/api/mfa/totp/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          policyContext: {
            contextType: 'personalWalletMFAUpdate',
            mfaType: 'totp'
          }
        }),
      });

      if (!removeResponse.ok) {
        const errorData = await removeResponse.json();
        throw new Error(errorData.error || 'Failed to remove TOTP from Stytch');
      }

      const removeData = await removeResponse.json();
      
      if (removeData.requiresMfa) {
        // TODO: Handle MFA requirement if needed in the future
        log('MFATOTP: MFA required for TOTP removal (not implemented)');
      }

      // Step 2: Update security layers (database only)
      const layersResponse = await fetch('/api/security/layers/remove', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          authMethodId,
          layerType: 'TOTP'
        }),
      });

      if (!layersResponse.ok) {
        const errorData = await layersResponse.json();
        throw new Error(errorData.error || 'Failed to update security layers');
      }

      setSuccessMessage(t('removed'));
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      log('MFATOTP: Error removing TOTP', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle TOTP code verification
  const handleVerifyTotp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sessionJwt || !setupData) {
      setError(tCommon('missing_details'));
      return;
    }

    if (totpCode.length !== 6) {
      setError(tCommon('invalid_verification_code'));
      return;
    }

    setIsLoading(true);

    try {
      // Verify TOTP code using unified MFA API (user_id extracted from session)
      const response = await fetch('/api/mfa/totp/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionJwt}`,
        },
        body: JSON.stringify({
          totp_code: totpCode
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'TOTP verification failed');
      }

      // TOTP setup is complete! Now save to our security layers
      if (authMethodId) {
        await fetch('/api/security/layers/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionJwt}`,
          },
          body: JSON.stringify({
            authMethodId,
            layerType: 'TOTP',
            config: {
              stytchMethodId: setupData.totp_id
            }
          }),
        });
      }

      setSuccessMessage(t('setup_success'));
      setUiState('initial');
      setTotpCode('');
      setSetupData(null);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
      log('MFATOTP: Error verifying TOTP', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(t('copied_to_clipboard'));
  };

  // Initial state - show current TOTP status
  if (uiState === 'initial') {
    return (
      <FormContainer 
        title={t('title')}
        errorMessage={error}
        successMessage={successMessage}
      >
        {hasTotp ? (
          <div className="bg-muted p-2 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium">
                    {t('active')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t('configured')}
                  </p>
                </div>
              </div>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={handleRemoveTotp} 
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : tCommon('remove')}
              </Button>
            </div>
          </div>
        ) : (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleAddClick} 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {t('setup')}
          </Button>
        )}
      </FormContainer>
    );
  }

  // Setup state - show QR code and secret
  if (uiState === 'setup' && setupData) {
    return (
      <FormContainer
        title={t('title')}
        errorMessage={error}
        successMessage={successMessage}
      >
        <div className="space-y-4">
          {/* QR Code */}
          <div className="text-center">
            <p className="text-sm mb-2">{t('scan_qr_code')}</p>
            <div className="inline-block p-2 bg-white border rounded-md">
              <img src={setupData.qr_code} alt="TOTP QR Code" className="w-32 h-32" />
            </div>
          </div>

          {/* Manual secret */}
          <div>
            <Label className="text-sm font-medium">{t('manual_secret')}</Label>
            <div className="flex items-center space-x-2 mt-1">
              <Input 
                value={setupData.secret} 
                readOnly 
                className="font-mono text-xs"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(setupData.secret)}
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t('manual_secret_description')}
            </p>
          </div>

          {/* Recovery code */}
          {setupData.recovery_code && (
            <div>
              <Label className="text-sm font-medium">{t('backup_codes')}</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input 
                  value={setupData.recovery_code} 
                  readOnly 
                  className="font-mono text-xs"
                />
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => copyToClipboard(setupData.recovery_code)}
                >
                  <Copy className="w-3 h-3" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {t('backup_codes_description')}
              </p>
            </div>
          )}

          {/* Next step button */}
          <Button 
            onClick={() => setUiState('verify')}
            className="w-full"
          >
            {t('continue_to_verify')}
          </Button>

          <Button 
            variant="outline" 
            onClick={handleCancel}
            className="w-full"
          >
            {tCommon('cancel')}
          </Button>
        </div>
      </FormContainer>
    );
  }

  // Verify state - enter TOTP code
  if (uiState === 'verify') {
    return (
      <FormContainer
        title={t('title')}
        errorMessage={error}
        successMessage={successMessage}
      >
        <form onSubmit={handleVerifyTotp} className="space-y-4">
          <div>
            <Label htmlFor="totp-code-input" className="block mb-2">
              {t('enter_code')}
            </Label>
            <Input 
              id="totp-code-input" 
              type="text" 
              value={totpCode} 
              onChange={(e) => setTotpCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="123456"
              disabled={isLoading}
              className="text-center font-mono text-lg"
              maxLength={6}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {t('code_description')}
            </p>
          </div>
          <ActionButtons
            primaryText={t('verify_and_complete')}
            cancelText={t('back')}
            loadingText={t('verifying')}
            isLoading={isLoading}
            isDisabled={totpCode.length !== 6}
            onCancel={() => setUiState('setup')}
          />
        </form>
      </FormContainer>
    );
  }

  return null;
}