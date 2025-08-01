'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider as firebaseGoogleProvider } from '@/lib/firebase';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/hooks/useAuthContext';
import { AuthProviderType } from '@/lib/lit/custom-auth';
import { User } from '@/app/api/user/storage';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface LoginMethodsSettingsProps {
  user: User | null;
  onUserUpdate: () => void;
}

export function LoginMethodsSettings({ user, onUserUpdate }: LoginMethodsSettingsProps) {
  const t = useTranslations("LoginMethodsSettings");
  const { authMethod, getCurrentAccessToken } = useAuthContext();
  const [isConnecting, setIsConnecting] = useState(false);

  // Check if user has each provider type
  const hasEmailProvider = user?.authProviders?.some(
    p => p.providerType === AuthProviderType.EMAIL_OTP && p.isEnabled
  ) || false;

  const hasGoogleProvider = user?.authProviders?.some(
    p => p.providerType === AuthProviderType.GOOGLE && p.isEnabled
  ) || false;

  const googleProvider = user?.authProviders?.find(
    p => p.providerType === AuthProviderType.GOOGLE && p.isEnabled
  );

  // Handle Google login connection using Firebase
  const handleGoogleConnect = async () => {
    if (!user?.authMethodId) {
      toast.error(t('auth_required'));
      return;
    }

    setIsConnecting(true);

    try {
      // Use Firebase to sign in with Google
      const result = await signInWithPopup(auth, firebaseGoogleProvider);
      const firebaseUser = result.user;
      const firebaseIdToken = await firebaseUser.getIdToken();

      console.log('🔑 Firebase Google login successful:', firebaseUser.email);

      const accessToken = await getCurrentAccessToken();
      if (!accessToken) {
        throw new Error('No access token available');
      }

      // Call our API to add the Google provider using Firebase ID Token
      const apiResponse = await fetch('/api/user/auth-providers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          authMethodId: user.authMethodId,
          providerType: AuthProviderType.GOOGLE,
          accessToken: firebaseIdToken // Using Firebase ID Token instead of Google Access Token
        })
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(data.error || t('connect_failed'));
      }

      toast.success(t('google_connected'));
      onUserUpdate(); // Refresh user data
      
      // Sign out from Firebase since we only needed it for the connection
      await auth.signOut();
      
    } catch (error: any) {
      console.error('Error connecting Google account:', error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('User cancelled Google login');
      } else if (error.code === 'auth/popup-blocked') {
        toast.error('Popup blocked. Please allow popups for this site and try again.');
      } else {
        toast.error(error.message || t('connect_failed'));
      }
      
      // Clean up Firebase session on error
      try {
        await auth.signOut();
      } catch (signOutError) {
        console.error('Error signing out from Firebase:', signOutError);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Email Provider */}
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div>
            <div className="font-medium">{t('email_login')}</div>
            <div className="text-sm text-gray-500">
              {hasEmailProvider ? user?.primaryEmail : t('not_configured')}
            </div>
          </div>
        </div>
        <div className="text-sm text-green-600 font-medium">
          {t('primary_method')}
        </div>
      </div>

      {/* Google Provider */}
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <div className="flex items-center space-x-3">
          <div className={`w-2 h-2 rounded-full ${hasGoogleProvider ? 'bg-green-500' : 'bg-gray-300'}`}></div>
          <div>
            <div className="font-medium">{t('google_account')}</div>
            <div className="text-sm text-gray-500">
              {hasGoogleProvider && googleProvider?.email ? 
                googleProvider.email : 
                t('not_connected')
              }
            </div>
          </div>
        </div>
        
        {!hasGoogleProvider ? (
          <Button
            onClick={handleGoogleConnect}
            disabled={isConnecting}
            size="sm"
            variant="outline"
            className="flex items-center space-x-2"
          >
            <Image 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
              alt="Google logo" 
              width={16}
              height={16}
            />
            <span>{isConnecting ? t('connecting') : t('connect_google')}</span>
          </Button>
        ) : (
          <div className="text-sm text-green-600 font-medium">
            {t('connected')}  
          </div>
        )}
      </div>
    </div>
  );
}