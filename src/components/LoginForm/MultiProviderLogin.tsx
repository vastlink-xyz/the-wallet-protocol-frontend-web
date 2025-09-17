'use client'

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NewGoogleLogin from './NewGoogleLogin';
import EmailOTPLogin from './EmailOTPLogin';
import PasskeyLogin from './PasskeyLogin';

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
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get('signUp') === null ? false : true;

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

      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        {/* Email Login Section - Always visible */}
        <EmailOTPLogin 
          defaultEmail={defaultEmail}
          title={title}
          invitationId={invitationId}
          isSignUp={isSignUp}
        />

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

        {/* Google Login Section */}
        <NewGoogleLogin invitationId={invitationId} />

        {/* Passkey Login Section */}
        <PasskeyLogin invitationId={invitationId} />
      </div>
    </div>
  );
}