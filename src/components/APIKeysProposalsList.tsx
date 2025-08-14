'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCcw, Key, AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useUserData } from '@/hooks/useUserData';
import { APIKeysProposal } from '@/components/APIKeysProposal';
import { useAPIKeysProposalActions } from '@/hooks/useAPIKeysProposalActions';
import { useAuthExpiration } from '@/hooks/useAuthExpiration';

// Import the types from our new API system
import { APIKeysProposal as APIKeysProposalType } from '@/app/api/api-keys-proposals/models';

interface APIKeysProposalsListProps {
  walletId: string;
  walletName?: string;
  threshold?: number;
  signers?: Array<{
    ethAddress: string;
    publicKey: string;
    email: string;
    authMethodId: string;
  }>;
}

export function APIKeysProposalsList({ 
  walletId, 
  walletName, 
  threshold = 1, 
  signers = [] 
}: APIKeysProposalsListProps) {
  const [proposals, setProposals] = useState<APIKeysProposalType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Auth context and user data
  const { getCurrentAccessToken, authMethodId } = useAuthContext();
  const { userData } = useUserData();
  const { handleExpiredAuth, verifyAuthOrRedirect } = useAuthExpiration();

  // Create wallet map for the hook
  const walletMap = new Map();
  if (walletId && walletName) {
    walletMap.set(walletId, {
      id: walletId,
      name: walletName,
      threshold: threshold,
      signers: signers,
      addresses: {
        eth: signers[0]?.ethAddress || ''
      }
    });
  }

  // Fetch API Keys proposals
  const fetchProposals = async () => {
    if (!walletId) {
      setProposals([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/api-keys-proposals?walletId=${walletId}`);
      if (!response.ok) throw new Error('Failed to fetch proposals');
      
      const data = await response.json();
      if (data.success) {
        setProposals(data.proposals || []);
      } else {
        throw new Error(data.error || 'Failed to fetch proposals');
      }
    } catch (error) {
      console.error('Failed to fetch API Keys proposals:', error);
      toast.error('Failed to load proposals: ' + (error instanceof Error ? error.message : 'Unknown error'));
      setProposals([]);
    }
    setIsLoading(false);
  };

  // Use API Keys proposal actions
  const {
    handleApproveProposal,
    handleExecuteProposal,
    isApproving,
    isExecuting,
    isDisabled,
  } = useAPIKeysProposalActions({
    walletMap,
    userPkp: userData?.litActionPkp,
    getCurrentAccessToken,
    authMethodId,
    providerType: 'EMAIL_OTP' as any,
    userEmail: userData?.primaryEmail || '',
    refreshProposals: fetchProposals,
    t: (key: string) => key, // Simple translation fallback
    handleExpiredAuth,
    verifyAuthOrRedirect,
  });

  // Fetch proposals when wallet changes
  useEffect(() => {
    fetchProposals();
  }, [walletId]);

  // Don't render if no wallet is selected
  if (!walletId) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Keys Proposals
            </CardTitle>
            <CardDescription>
              Active and completed proposals for this wallet's API Keys configuration
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {proposals.length > 0 && (
              <Badge variant="secondary">
                {proposals.filter(p => p.status === 'pending').length} pending
              </Badge>
            )}
            <Button
              onClick={fetchProposals}
              disabled={isLoading}
              variant="outline"
              size="sm"
            >
              <RefreshCcw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-8 text-muted-foreground">
            <RefreshCcw className="h-8 w-8 mx-auto mb-4 animate-spin" />
            <p>Loading proposals...</p>
          </div>
        ) : proposals.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Key className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="mb-2">No API Keys proposals found</p>
            <p className="text-sm">Proposals will appear here after you make changes to environment variables or IPFS IDs</p>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map((proposal) => {
              if (!userData?.litActionPkp) return null;
              
              // Convert our API Keys proposal to the format expected by APIKeysProposal component
              const convertedProposal = {
                id: proposal.id,
                walletId: proposal.multisigWalletId,
                status: proposal.status,
                createdAt: proposal.createdAt,
                createdBy: proposal.createdBy,
                signatures: proposal.signatures,
                apiKeysData: proposal.proposalData,
                type: 'apiKeysUpdate' as const
              };

              const walletData = {
                id: walletId,
                name: walletName || 'Unknown Wallet',
                threshold: threshold,
                signers: signers,
                pkp: userData.litActionPkp,
                addresses: { eth: signers[0]?.ethAddress || '' }
              };

              return (
                <APIKeysProposal
                  key={proposal.id}
                  proposal={convertedProposal}
                  selectedWallet={walletData as any}
                  handleApproveProposal={handleApproveProposal}
                  handleExecuteProposal={handleExecuteProposal}
                  userPkp={userData.litActionPkp}
                  authMethodId={authMethodId}
                  isApproving={isApproving(proposal.id)}
                  isExecuting={isExecuting(proposal.id)}
                  isDisabled={isDisabled}
                />
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}