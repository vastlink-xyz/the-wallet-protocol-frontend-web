import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage"
import { WalletSettingsProposal } from "./WalletSettingsProposal"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { getTransactionDetails, hasUserSigned } from "../utils/proposal";
import { formatEthAmount } from "@/lib/utils";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { IRelayPKP } from "@lit-protocol/types";

interface ProposalProps {
  proposal: MessageProposal;
  selectedWallet: MultisigWallet;
  handleSignProposal: (proposal: MessageProposal) => void;
  executeMultisigLitAction: (proposal: MessageProposal) => void;
  userPkp: IRelayPKP;
  isSigningProposal: boolean;
  isLoading: boolean;
}

export function Proposal({ proposal, selectedWallet, handleSignProposal, executeMultisigLitAction, userPkp, isSigningProposal, isLoading }: ProposalProps) {
  const txDetails = getTransactionDetails(proposal, selectedWallet);

  return <div key={proposal.id} className="p-4 bg-gray-50 rounded-lg">
    <div className="mb-2">
      {proposal.type === 'walletSettings' ? (
        <WalletSettingsProposal
          proposal={proposal}
          selectedWallet={selectedWallet}
        />
      ) : (
        <>
          <div><span className="font-medium">Recipient:</span> {txDetails.to}</div>
          {
            txDetails.tokenType &&
            <div><span className="font-medium">Amount:</span> {formatEthAmount(txDetails.value)} {SUPPORTED_TOKENS_INFO[txDetails.tokenType as TokenType].symbol}</div>
          }
          {txDetails.data && txDetails.data !== '0x' && (
            <div><span className="font-medium">Data:</span> {txDetails.data}</div>
          )}
        </>
      )}
    </div>

    <div className="text-sm text-gray-500">
      Status: {proposal.status}
    </div>
    <div className="text-sm text-gray-500">
      Signatures: {proposal.signatures.length}
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {proposal.status === 'pending' && !hasUserSigned(proposal, userPkp) && (
        <Button
          onClick={() => handleSignProposal(proposal)}
          disabled={isSigningProposal}
        >
          {isSigningProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign Transaction
        </Button>
      )}

      {hasUserSigned(proposal, userPkp) && (
        <div className="text-sm text-green-600 flex items-center">
          You have signed this transaction
        </div>
      )}

      {proposal.status === 'pending' && selectedWallet &&
        proposal.signatures.length >= selectedWallet.threshold && (
          <Button
            onClick={() => executeMultisigLitAction(proposal)}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Execute Transaction
          </Button>
        )}
    </div>
  </div>
}