'use client'

import { Button } from '@/components/ui/button';
import { googleProvider } from '@/lib/lit';
import StytchOTP from './StytchOTP';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function LoginForm() {

  async function handleGoogleLogin() {
    await googleProvider.signIn();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
        <p className="text-muted-foreground">Sign in to your account to get started</p>
      </div>

      <div className="w-full max-w-md grid grid-cols-1 gap-8">
        {/* Social Login Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-center">Social Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={handleGoogleLogin} 
              className="w-full flex items-center justify-center gap-2"
            >
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                alt="Google logo" 
                className="h-4 w-4" 
              />
              Sign in with Google
            </Button>
          </CardContent>
        </Card>

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
