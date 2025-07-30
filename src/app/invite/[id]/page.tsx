'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Gift, ArrowRight, Check, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { PendingInvitation } from '@/app/api/invitation/models';
import { log } from '@/lib/utils';
import { useParams } from 'next/navigation';
import StytchOTP from '@/components/LoginForm/StytchOTP';
import { LogoLoading } from '@/components/LogoLoading';
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod';
import { getEmailFromGoogleToken, getUserIdFromToken } from '@/lib/jwt';
import { AUTH_METHOD_TYPE } from '@lit-protocol/constants';
import { getPrimaryEmailFromStorage } from '@/lib/storage/authmethod';

export default function InvitePage() {
  const [invitation, setInvitation] = useState<PendingInvitation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);
  const [emailMismatch, setEmailMismatch] = useState(false);
  const params = useParams();

  useEffect(() => {
    const loadInvitation = async () => {
      try {
        setIsLoading(true);
        log('idid', params?.id || 'undefined')
        
        if (!params?.id) {
          throw new Error('Invalid invitation ID');
        }
        
        const response = await fetch(`/api/invitation?id=${params.id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to load invitation: ${response.status}`);
        }
        
        const data = await response.json();
        if (data?.success && data?.data) {
          setInvitation(data.data);
          
          // Check if user is already logged in with different email
          if (data.data.recipientEmail) {
            await checkEmailMismatch(data.data.recipientEmail);
          }
        } else {
          throw new Error('Invalid invitation data');
        }
      } catch (err) {
        console.error('Error loading invitation:', err);
        setError(err instanceof Error ? err.message : 'Failed to load invitation');
      } finally {
        setIsLoading(false);
      }
    };
    
    const checkEmailMismatch = async (invitationEmail: string) => {
      try {
        // Check if user is already logged in
        const authMethod = getAuthMethodFromStorage();
        if (!authMethod) {
          setCurrentUserEmail(null);
          setEmailMismatch(false);
          return;
        }

        let userEmail: string | null = null;

        // First try to get email from localStorage (cached)
        userEmail = getPrimaryEmailFromStorage();

        // If not cached, extract from auth method
        if (!userEmail && authMethod?.authMethodType === AUTH_METHOD_TYPE.GoogleJwt && authMethod?.accessToken) {
          try {
            userEmail = getEmailFromGoogleToken(authMethod.accessToken);
          } catch (error) {
            console.error('Error extracting email from Google token:', error);
          }
        }

        if (userEmail) {
          setCurrentUserEmail(userEmail);
          // Check if emails match (case insensitive)
          const emailsMatch = userEmail.toLowerCase() === invitationEmail.toLowerCase();
          setEmailMismatch(!emailsMatch);
        }
      } catch (err) {
        console.error('Error checking email mismatch:', err);
        // Don't set error state, just proceed without the check
      }
    };
    
    loadInvitation();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LogoLoading />
      </div>
    );
  }

  if (error || !invitation) {
    return (
      <div className="max-w-md mx-auto p-4 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Invitation Error</CardTitle>
            <CardDescription>
              {error || 'Unable to load invitation'}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/">
              <Button>Go to Home</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 mt-12">
      {invitation && (
        <>
          <Card className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="">
              <div className="text-center mb-4">
                <h2 className="text-lg font-medium">{invitation.senderEmail} invites you</h2>
                <p className="text-sm text-gray-600 mt-1">to join Vastbase</p>
              </div>
              <p className="text-sm text-center">Create your wallet to get started</p>
            </CardContent>
          </Card>

          {/* Email mismatch warning */}
          {emailMismatch && currentUserEmail && (
            <Card className="mb-6 border-orange-200 bg-orange-50">
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div className="space-y-2">
                    <p className="font-medium text-orange-800">Email Mismatch Detected</p>
                    <p className="text-sm text-orange-700">
                      You&apos;re currently logged in as <span className="font-medium">{currentUserEmail}</span>, 
                      but this invitation is for <span className="font-medium">{invitation.recipientEmail}</span>.
                    </p>
                    <p className="text-sm text-orange-700">
                      If you continue with the invited email, your current login session will be invalidated. 
                      Alternatively, you can open this invitation link in a different browser or incognito mode.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <StytchOTP
            defaultEmail={invitation.recipientEmail}
            title="Create a wallet"
            invitationId={invitation.id}
          />
        </>
      )}

      {!invitation && !isLoading && error && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-lg font-medium text-red-600">Invitation not found</h2>
              <p className="mt-2">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 
