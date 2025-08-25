'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bug, Loader2, Play, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import { litNodeClient } from '@/lib/lit/providers';
import { getDebugAPIKeysIpfsId } from '@/lib/lit/ipfs-id-env';
import { AuthProviderType, getVastbaseAuthMethodType } from '@/lib/lit/custom-auth';
import { useAuthContext } from '@/hooks/useAuthContext';
import { useUserData } from '@/hooks/useUserData';
import { log } from '@/lib/utils';

interface APIKeysDebugButtonProps {
  walletId: string;
  configData: any;
  isConfigDecrypted: boolean;
}

interface DebugResult {
  decryptedApiKeys: Record<string, string>;
  decryptedIpfsIds: string[];
  summary: {
    totalKeys: number;
    totalIpfsIds: number;
    keyNames: string[];
  };
  timestamp: string;
}

export function APIKeysDebugButton({ 
  walletId, 
  configData, 
  isConfigDecrypted 
}: APIKeysDebugButtonProps) {
  const [isExecuting, setIsExecuting] = useState(false);
  const [lastResult, setLastResult] = useState<DebugResult | null>(null);
  const [lastError, setLastError] = useState<string | null>(null);

  const { getCurrentAccessToken, getCustomAuthSessionSigs, authMethodId } = useAuthContext();
  const { userData } = useUserData();

  const executeDebugAction = async () => {
    if (!walletId || !configData) {
      toast.error('Please select a wallet and load configuration first');
      return;
    }

    if (!isConfigDecrypted) {
      toast.error('Please decrypt the configuration first to enable debug mode');
      return;
    }

    setIsExecuting(true);
    setLastError(null);
    
    try {
      // Connect to Lit Network
      if (!litNodeClient.ready) {
        await litNodeClient.connect();
      }

      // Get debug API keys Lit Action IPFS ID
      const debugIpfsId = await getDebugAPIKeysIpfsId('base58');
      log('Debug IPFS ID:', debugIpfsId);

      // Get session signatures
      const sessionSigs = await getCustomAuthSessionSigs();
      if (!sessionSigs) {
        throw new Error('No session signatures available');
      }

      // Call the debug Lit Action
      const result = await litNodeClient.executeJs({
        ipfsId: debugIpfsId,
        sessionSigs,
        jsParams: {
          action: 'print_keys',
          multisigWalletId: walletId,
          configId: configData._id,
          env: process.env.NEXT_PUBLIC_ENV || 'dev',
          devUrl: process.env.NEXT_PUBLIC_DEV_URL_FOR_LIT_ACTION_LOCAL_ONLY || '',
          authParams: {
            providerType: AuthProviderType.EMAIL_OTP,
            accessToken: await getCurrentAccessToken(),
            pkpTokenId: userData?.litActionPkp?.tokenId,
            authMethodType: getVastbaseAuthMethodType(),
          }
        }
      });

      log('Debug action result:', result);

      if (result.response) {
        const response = typeof result.response === 'string' 
          ? JSON.parse(result.response)
          : result.response;
          
        if (response.success && response.result) {
          setLastResult(response.result);
          setLastError(null);
          toast.success(
            `Successfully printed ${response.result.summary.totalKeys} API keys to console. Check browser DevTools!`
          );
        } else {
          throw new Error(response.error || 'Debug action failed');
        }
      } else {
        throw new Error('No response from debug Lit Action');
      }
    } catch (error) {
      console.error('Debug action failed:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setLastError(errorMessage);
      toast.error('Debug failed: ' + errorMessage);
    }
    setIsExecuting(false);
  };

  // Don't render if no configuration exists
  if (!configData) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-5 w-5" />
              Debug API Keys
            </CardTitle>
            <CardDescription>
              Test decryption and print API keys to browser console
            </CardDescription>
          </div>
          {lastResult && (
            <Badge variant="outline" className="text-green-600">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Last run: {new Date(lastResult.timestamp).toLocaleTimeString()}
            </Badge>
          )}
          {lastError && (
            <Badge variant="outline" className="text-red-600">
              <AlertCircle className="h-3 w-3 mr-1" />
              Error
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="text-sm font-medium">Debug Information</p>
              <p className="text-xs text-muted-foreground">
                This will decrypt and log all API keys to the browser console.
                <br />
                Open DevTools (F12) → Console tab to see the output.
              </p>
            </div>
            <Button
              onClick={executeDebugAction}
              disabled={isExecuting || !isConfigDecrypted}
              className={`${!isConfigDecrypted 
                ? 'bg-gray-400 hover:bg-gray-500 text-white cursor-not-allowed' 
                : 'bg-orange-600 hover:bg-orange-700 text-white'}`}
            >
              {isExecuting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Executing...
                </>
              ) : !isConfigDecrypted ? (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Decrypt Config First
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Debug Print Keys
                </>
              )}
            </Button>
          </div>

          {lastResult && (
            <div className="border rounded-lg p-4 bg-green-50">
              <h4 className="font-medium text-green-800 mb-2">Last Debug Result</h4>
              <div className="space-y-1 text-sm text-green-700">
                <p>✅ Total API Keys: {lastResult.summary.totalKeys}</p>
                <p>✅ Total IPFS IDs: {lastResult.summary.totalIpfsIds}</p>
                <p>✅ Key Names: {lastResult.summary.keyNames.join(', ')}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Check browser console for detailed key-value pairs
                </p>
              </div>
            </div>
          )}

          {lastError && (
            <div className="border rounded-lg p-4 bg-red-50">
              <h4 className="font-medium text-red-800 mb-2">Debug Error</h4>
              <p className="text-sm text-red-700">{lastError}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Make sure the debug IPFS ID is added to the authorized list
              </p>
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            <p>
              <strong>Note:</strong> This debug action requires the debug Lit Action IPFS ID to be 
              added to the authorized IPFS IDs list. The current debug IPFS ID will be automatically 
              generated based on your environment.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}