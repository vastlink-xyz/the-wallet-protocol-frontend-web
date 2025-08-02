'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import Image from 'next/image';

interface GoogleLoginProps {
  invitationId?: string;
}

export default function GoogleLogin({ invitationId }: GoogleLoginProps) {
  const router = useRouter();
  const transLogin = useTranslations('LoginPage');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    
    try {
      // Firebase Google OAuth
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();

      console.log('✅ Google login successful:', user.email);

      // Use by-provider API to find user by Google email
      const userCheckResponse = await fetch('/api/user/by-provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          providerType: AuthProviderType.GOOGLE,
          userEmail: user.email!,
          accessToken: token,
        })
      });
      
      if (!userCheckResponse.ok) {
        // User doesn't exist, need to register first
        await auth.signOut(); // Clear Firebase session
        throw new Error('User not found. Please register with email first.');
      }

      const userData = await userCheckResponse.json();
      console.log('✅ User verification successful, primaryEmail:', userData.primaryEmail);
      console.log('✅ Using existing authMethodId:', userData.authMethodId);

      // Firebase onAuthStateChanged will automatically handle subsequent logic
      // including creating VastbaseAuthMethod and storing to localStorage

      // Navigate to destination
      const redirectUrl = invitationId 
        ? `/auth/callback?invitationId=${invitationId}`
        : '/assets';
      
      router.push(redirectUrl);

    } catch (error: any) {
      console.error('Google login failed:', error);
      
      if (error.message.includes('User not found')) {
        toast.error('Account not found. Please register with email first, then add Google login in settings.');
      } else if (error.code === 'auth/popup-closed-by-user') {
        // User closed popup, no need to show error
        console.log('User cancelled Google login');
      } else if (error.code === 'auth/popup-blocked') {
        toast.error('Popup blocked. Please allow popups for this site and try again.');
      } else {
        toast.error('Google login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="w-full h-12 flex items-center justify-center gap-3"
      variant="outline"
    >
      <Image 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
        alt="Google logo" 
        width={16}
        height={16}
      />
      <span>
        {loading ? transLogin('connecting') : transLogin('continue_with_google')}
      </span>
    </Button>
  );
}