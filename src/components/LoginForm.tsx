'use client'

import { Button } from '@/components/ui/button';
import { googleProvider } from '@/lib/lit';

export default function LoginForm() {

  async function handleGoogleLogin() {
    await googleProvider.signIn();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">Sign in account to get started</p>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <Button 
          onClick={handleGoogleLogin} 
          className="w-full"
        >Sign in with Google</Button>
      </div>
    </div>
  );
}
