'use client'

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NewGoogleLogin from './NewGoogleLogin';
import EmailOTPLogin from './EmailOTPLogin';

interface MultiProviderLoginProps {
  defaultEmail?: string;
  title?: string;
  invitationId?: string;
}

/**
 * Multi-provider login component - supporting Email OTP and Google OAuth
 * Composed of separate GoogleLogin and EmailOTPLogin components
 */
export default function MultiProviderLogin({
  defaultEmail,
  title,
  invitationId,
}: MultiProviderLoginProps) {
  const transLogin = useTranslations('LoginPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] mb-6">
      <div className="flex justify-center">
        <Image 
          src="/Vastbase_logo.svg" 
          alt="Vastbase Logo" 
          width={235} 
          height={161.5} 
          priority
        />
      </div>

      <div className="w-full max-w-md grid grid-cols-1 gap-8">
        {/* Google Login Section */}
        <NewGoogleLogin invitationId={invitationId} />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">
              {transLogin('or_continue_with')}
            </span>
          </div>
        </div>

        {/* Email Login Section */}
        <EmailOTPLogin 
          defaultEmail={defaultEmail}
          title={title}
          invitationId={invitationId}
        />
      </div>
    </div>
  );
}