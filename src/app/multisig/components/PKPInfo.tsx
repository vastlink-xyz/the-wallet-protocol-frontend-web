import { IRelayPKP } from "@lit-protocol/types";
import { Loader2 } from "lucide-react";

interface PKPInfoProps {
  litActionPkp: IRelayPKP | null;
  isLoading?: boolean;
}

export function PKPInfo({ litActionPkp, isLoading = false }: PKPInfoProps) {
  // Show loading state
  if (isLoading) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
        <p>Loading PKP information...</p>
      </div>
    );
  }

  // If no PKP exists yet
  if (!litActionPkp) {
    return (
      <div className="bg-card p-6 rounded-lg border text-center">
        <p className="text-muted-foreground">No PKP information available</p>
      </div>
    );
  }

  // Display PKP information
  return (
    <div className="bg-card p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">Your PKP Information</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-md font-medium mb-2">Lit Action PKP</h3>
          <div className="space-y-2">
            <div>
              <span className="font-medium">Address:</span> 
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {litActionPkp.ethAddress}
              </div>
            </div>
            <div>
              <span className="font-medium">Public Key:</span>
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {litActionPkp.publicKey}
              </div>
            </div>
            <div>
              <span className="font-medium">PKP ID:</span>
              <div className="text-sm bg-muted p-2 rounded break-all mt-1">
                {litActionPkp.tokenId ? 
                  (typeof litActionPkp.tokenId === 'object' ? 
                    JSON.stringify(litActionPkp.tokenId) : 
                    String(litActionPkp.tokenId)
                  ) : 'N/A'}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-green-600 font-medium">
            ✓ You have successfully minted PKPs
          </p>
        </div>
      </div>
    </div>
  );
} 