'use client'

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
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
  const searchParams = useSearchParams();
  const isSignUp = searchParams.get('signUp') === null ? false : true;

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
      </div>
    </div>
  );
}