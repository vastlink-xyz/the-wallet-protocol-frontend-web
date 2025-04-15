import { Button } from "@/components/ui/button";
import { IRelayPKP } from "@lit-protocol/types";

interface AccountListProps {
  currentPkp: IRelayPKP;
  pkps: IRelayPKP[];
  onSelectPkp: (pkp: IRelayPKP) => void;
}

export function AccountList({ currentPkp, pkps, onSelectPkp }: AccountListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-lg font-semibold mb-2">Current Account</h2>
        <div className="space-y-1 text-sm">
          <p><span className="font-medium">Public Key:</span> <span className="break-all">{currentPkp.publicKey}</span></p>
          <p><span className="font-medium">ETH Address:</span> <span className="break-all">{currentPkp.ethAddress}</span></p>
        </div>
      </div>

      <div className="bg-card p-4 rounded-lg border">
        <h2 className="text-lg font-semibold mb-4">All Accounts</h2>
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {pkps.map((pkp, index) => (
            <div 
              key={index} 
              className={`group relative p-3 rounded-lg border transition-all ${
                currentPkp.publicKey === pkp.publicKey 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Account #{index + 1}</span>
                  {currentPkp.publicKey === pkp.publicKey && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                      Current
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Public Key</span>
                    <p className="text-sm break-all font-mono">{pkp.publicKey}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">ETH Address</span>
                    <p className="text-sm break-all font-mono">{pkp.ethAddress}</p>
                  </div>
                </div>
              </div>
              {currentPkp.publicKey !== pkp.publicKey && (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onSelectPkp(pkp)}
                >
                  Switch to
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 