import { Button } from "@/components/ui/button"
import { CURRENT_AUTH_PROVIDER_KEY, getProviderByAuthMethodType, mintPKPNormally, mintPKPWithPermanentLitAction, SIGN_PROPOSAL_LIT_ACTION_IPFS_ID } from "@/lib/lit";
import { AuthMethod, IRelayPKP } from "@lit-protocol/types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { PKPInfo } from "./PKPInfo";
import { log } from "@/lib/utils";

interface MintProps {
  authMethod: AuthMethod;
  litActionPkp: IRelayPKP | null;
  isLoading: boolean;
  onMintComplete: (sessionPkp: IRelayPKP, litActionPkp: IRelayPKP) => void;
}

export function Mint({
  authMethod,
  litActionPkp,
  isLoading,
  onMintComplete
}: MintProps) {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [result, setResult] = useState<{success: boolean, message: string} | null>(null)
  const [showPkpInfo, setShowPkpInfo] = useState(true)

  const savePkpToDatabase = async (authMethodId: string, pkp: IRelayPKP, pkpType: 'session' | 'litAction') => {
    try {
      const response = await fetch('/api/user/pkp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authMethodId, pkp, pkpType }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save PKP');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error saving PKP to database:', error);
      throw error;
    }
  };

  const handleMintPkp = async () => {
    setLoading(true);
    setResult(null);
    try {
      const litActionIpfsId = SIGN_PROPOSAL_LIT_ACTION_IPFS_ID
      log('ipfsid', litActionIpfsId)

      // Step 1: Get auth method ID
      const currentAuthProvider = localStorage.getItem(CURRENT_AUTH_PROVIDER_KEY)
      if (!currentAuthProvider) {
        throw new Error('No current auth provider found')
      }
      const provider = getProviderByAuthMethodType(currentAuthProvider)
      const authMethodId = await provider.getAuthMethodId(authMethod);
      setStatus("Minting session PKP...");
      
      // Step 2: Mint the first PKP for session
      const pkpForSession = await mintPKPNormally(authMethod);
      setStatus("Saving session PKP to database...");
      
      // Step 3: Save first PKP to database with 'session' type
      await savePkpToDatabase(authMethodId, pkpForSession, 'session');
      
      // Step 4: Mint the second PKP with permanent Lit Action
      setStatus("Minting Lit Action PKP...");
      const pkpForLitAction = await mintPKPWithPermanentLitAction({
        authMethod,
        litActionIpfsId,
      });
      
      // Step 5: Save second PKP to database with 'litAction' type
      setStatus("Saving Lit Action PKP to database...");
      await savePkpToDatabase(authMethodId, pkpForLitAction, 'litAction');
      
      // Step 6: Notify parent component about the newly minted PKPs
      onMintComplete(pkpForSession, pkpForLitAction);
      
      // Step 7: Complete
      setResult({
        success: true,
        message: "Successfully minted and saved both PKPs"
      });

      // Step 8: Show PKP info after successful minting
      setShowPkpInfo(true);
    } catch (error) {
      console.error("Error minting or saving PKP:", error);
      setResult({
        success: false,
        message: `Failed: ${error instanceof Error ? error.message : String(error)}`
      });
    } finally {
      setLoading(false);
      setStatus("");
    }
  }

  // Toggle between PKP info and mint view
  const toggleView = () => {
    setShowPkpInfo(!showPkpInfo);
    setResult(null);
  };

  // Show loading state if still initializing
  if (isLoading) {
    return <PKPInfo litActionPkp={null} isLoading={true} />;
  }

  // If PKPs already exist and we're in info view mode
  if (litActionPkp && showPkpInfo) {
    return (
      <div className="space-y-4">
        <PKPInfo litActionPkp={litActionPkp} />
        <div className="flex justify-center">
          <Button 
            onClick={toggleView}
            variant="outline"
          >
            Mint New PKPs
          </Button>
        </div>
      </div>
    );
  }

  // Show mint button (either no PKPs exist, or user wants to re-mint)
  return (
    <div className="bg-card p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Mint PKPs</h2>
      {litActionPkp && (
        <div className="flex justify-end mb-4">
          <Button 
            onClick={toggleView}
            variant="outline"
            size="sm"
          >
            View Existing PKPs
          </Button>
        </div>
      )}
      {status && (
        <div className="mb-4 text-sm text-blue-500">
          <Loader2 className="inline mr-2 h-4 w-4 animate-spin" />
          {status}
        </div>
      )}
      {result && (
        <div className={`mb-4 p-3 rounded text-sm ${result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {result.message}
        </div>
      )}
      <Button 
        onClick={handleMintPkp}
        className="w-full"
        disabled={loading}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {litActionPkp ? 'Re-mint PKPs' : 'Mint PKPs'}
      </Button>
    </div>
  )
}
