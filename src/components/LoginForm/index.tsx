'use client'

import StytchOTP from './StytchOTP';
import Social from './Social';

export default function LoginForm() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
        <p className="text-muted-foreground">Sign in to your account to get started</p>
      </div>

      <div className="w-full max-w-md grid grid-cols-1 gap-8">
        {/* Social Login Section */}
        <Social />

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Email Login Section */}
        <div>
          <StytchOTP />
        </div>
      </div>
    </div>
  );
}
