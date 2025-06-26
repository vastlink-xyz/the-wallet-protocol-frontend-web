'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Gift, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { PendingInvitation } from '@/app/api/invitation/models';
import { log } from '@/lib/utils';
import { useParams } from 'next/navigation';
import StytchOTP from '@/components/LoginForm/StytchOTP';
import { LogoLoading } from '@/components/LogoLoading';

export default function InvitePage() {
  const [invitation, setInvitation] = useState<PendingInvitation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const loadInvitation = async () => {
      try {
        setIsLoading(true);
        log('idid', params.id)
        
        const response = await fetch(`/api/invitation?id=${params.id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `Failed to load invitation: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.success && data.data) {
          setInvitation(data.data);
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
