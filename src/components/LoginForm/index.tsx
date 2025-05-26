'use client'

import StytchOTP from './StytchOTP';
import Social from './Social';
import Image from 'next/image';

export default function LoginForm() {
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
        {/* Social Login Section */}
        {/* <Social /> */}

        {/* Divider */}
        {/* <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
          </div>
        </div> */}

        {/* Email Login Section */}
        <div>
          <StytchOTP />
        </div>
      </div>
    </div>
  );
}
