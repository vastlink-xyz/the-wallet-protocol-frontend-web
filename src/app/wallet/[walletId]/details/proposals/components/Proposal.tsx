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
  isDisabled: boolean;
}

export function Proposal({ proposal, selectedWallet, handleSignProposal, executeMultisigLitAction, userPkp, isSigningProposal, isLoading, isDisabled }: ProposalProps) {
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

    <div className="text-sm text-gray-500 mb-1">
      <span className="font-medium text-gray-700">Status:</span> {proposal.status}
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="font-medium text-gray-700">Threshold:</span>
      {selectedWallet?.threshold && (
        <span> {selectedWallet.threshold}</span>
      )}
    </div>
    {(proposal as any).createdAt && (
      <div className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-gray-700">Date:</span> {new Date((proposal as any).createdAt).toLocaleString()}
      </div>
    )}
    {proposal.createdBy && (
      <div className="text-sm text-gray-500 mb-1">
        <span className="font-medium text-gray-700">Created by:</span> {proposal.createdBy?.email}
      </div>
    )}
    
    <div className="mb-2">
      <div className="text-sm font-medium text-gray-700 mb-1">Signers:</div>
      <div className="pl-2 border-l-2 border-gray-200 space-y-1">
        {selectedWallet?.signers?.map(signer => {
          const hasSigned = proposal.signatures.some(sig => sig.signer.toLowerCase() === signer.ethAddress.toLowerCase());
          
          return (
            <div key={signer.ethAddress} className="text-sm flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${hasSigned ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className={hasSigned ? 'text-green-700' : 'text-gray-500'}>
                {signer.email}
                {hasSigned ? ' ✓' : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-2">
      {proposal.status === 'pending' && !hasUserSigned(proposal, userPkp) && (
        <Button
          onClick={() => handleSignProposal(proposal)}
          disabled={isSigningProposal}
        >
          {isSigningProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Approve Proposal
        </Button>
      )}

      {hasUserSigned(proposal, userPkp) && (
        <div className="text-sm text-green-600 flex items-center">
          You have approved this proposal
        </div>
      )}

      {proposal.status === 'pending' && selectedWallet &&
        proposal.signatures.length >= selectedWallet.threshold && (
          <Button
            onClick={() => executeMultisigLitAction(proposal)}
            disabled={isDisabled}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Execute Transaction
          </Button>
        )}
    </div>
  </div>
}