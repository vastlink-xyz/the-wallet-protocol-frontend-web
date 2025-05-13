'use client'

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { getProviderByAuthMethodType } from '@/lib/lit';
import { GoogleProvider } from '@lit-protocol/lit-auth-client';

export default function Social() {
  async function handleGoogleLogin() {
    const provider = getProviderByAuthMethodType('google') as GoogleProvider
    await provider.signIn();
  }

  return (
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
  );
}
