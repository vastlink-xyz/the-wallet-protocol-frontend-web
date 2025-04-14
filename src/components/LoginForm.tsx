'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ORIGIN, DEFAULT_SIGNIN_REDIRECT, DEFAULT_SIGNUP_REDIRECT, signInWithGoogle } from '@/lib/lit';

export default function LoginForm() {

  async function handleGoogleLogin() {
    signInWithGoogle(DEFAULT_SIGNIN_REDIRECT);
  }

  async function handleGoogleSignUp() {
    signInWithGoogle(DEFAULT_SIGNUP_REDIRECT);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">Sign in or create a new account to get started</p>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs">
        <Button 
          onClick={handleGoogleLogin} 
          className="w-full"
        >Sign in with Google</Button>
        <Button 
          onClick={handleGoogleSignUp} 
          variant="outline"
          className="w-full"
        >Sign up with Google</Button>
      </div>
    </div>
  );
}
