'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Fingerprint } from 'lucide-react';
import { 
  startAuthentication, 
  browserSupportsWebAuthn
} from '@simplewebauthn/browser';
import { AuthProviderType } from '@/lib/lit/custom-auth';

interface PasskeyLoginProps {
  invitationId?: string;
}

/**
 * Passkey (WebAuthn) authentication component for login page
 * Only for users who have already registered passkeys
 */
export default function PasskeyLogin({ invitationId }: PasskeyLoginProps) {
  const router = useRouter();
  const t = useTranslations('LoginPage');
  const [isLoading, setIsLoading] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsSupported(browserSupportsWebAuthn());
  }, []);

  const handlePasskeyAuthentication = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Start WebAuthn authentication with Stytch
      const startResponse = await fetch('/api/auth/passkey/authenticate/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: window.location.hostname
        }),
      });

      if (!startResponse.ok) {
        throw new Error('Failed to start passkey authentication');
      }

      const { options } = await startResponse.json();
      console.log('Received options from Stytch:', options);

      // Step 2: Parse Stytch WebAuthn options
      // Stytch returns public_key_credential_request_options as JSON string
      const webauthnOptions = JSON.parse(options.public_key_credential_request_options);
      console.log('Parsed WebAuthn options:', webauthnOptions);
      
      const credential = await startAuthentication(webauthnOptions);

      // Step 3: Complete authentication with Stytch
      const completeResponse = await fetch('/api/auth/passkey/authenticate/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential }),
      });

      if (!completeResponse.ok) {
        const errorData = await completeResponse.json();
        throw new Error(errorData.error || 'Failed to complete passkey authentication');
      }

      const { session_jwt, user } = await completeResponse.json();

      // Step 4: Prepare auth params for callback page
      const authParams = {
        providerType: AuthProviderType.PASSKEY,
        accessToken: session_jwt,
        userEmail: user.emails?.[0]?.email
      };

      // Step 5: Redirect to unified callback page (same as Email OTP and Google)
      const callbackUrl = `/auth/callback?authParams=${encodeURIComponent(JSON.stringify(authParams))}`;
      console.log('🔄 Redirecting to callback with params:', authParams);
      
      router.push(callbackUrl);

    } catch (error: any) {
      console.error('Passkey authentication error:', error);
      
      if (error.name === 'NotAllowedError') {
        console.log('User cancelled Passkey authentication');
        setError(t('passkey_cancelled'));
      } else if (error.message?.includes('User not found')) {
        setError(t('passkey_not_registered'));
      } else {
        setError(error.message || t('passkey_auth_failed'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isSupported) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        <Fingerprint className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">{t('passkey_not_supported')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Authentication Button */}
      <Button
        type="button"
        variant="outline"
        onClick={handlePasskeyAuthentication}
        disabled={isLoading}
        className="w-full h-12 flex items-center justify-center gap-3"
      >
        <Fingerprint className="h-5 w-5" />
        {isLoading ? t('signing_in') : t('continue_with_passkey')}
      </Button>

      {/* Error Display */}
      {error && (
        <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
}