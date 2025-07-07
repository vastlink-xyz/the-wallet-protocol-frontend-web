import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage"
import { WalletSettingsProposal } from "./WalletSettingsProposal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, Settings, ArrowUpRightFromCircle } from "lucide-react"
import { getTransactionDetails, hasUserSigned } from "../utils/proposal";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { IRelayPKP } from "@lit-protocol/types";
import { useMemo } from "react";
import { formatBalance } from "@/lib/web3/format";

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


  const displayThreshold = useMemo(() => {
    if (proposal.status === 'completed') {
      // if proposal is completed, display the threshold from the original state
      return proposal.settingsData?.originalState?.threshold
    }

    // if proposal is pending, display the current threshold from the wallet
    return selectedWallet?.threshold
  }, [selectedWallet, proposal])

  const displaySigners = useMemo(() => {
    if (proposal.status === 'completed') {
      // if proposal is completed, display the signers from the original state
      return proposal.settingsData?.originalState?.signers as MultisigWallet['signers']
    }

    // if proposal is pending, display the current signers from the wallet
    return selectedWallet?.signers
  }, [selectedWallet, proposal])

  return <div key={proposal.id} className="p-4 bg-gray-50 rounded-lg">
    <div className="mb-2">
      {proposal.type === 'walletSettings' ? (
        <>
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-4 h-4" />
            <span className="font-medium">Type:</span> Wallet Settings
          </div>
          <WalletSettingsProposal
            proposal={proposal}
            selectedWallet={selectedWallet}
          />
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 mb-2">
            <ArrowUpRightFromCircle className="w-4 h-4" />
            <span className="font-medium">Type:</span> Transfer
          </div>
          <div className="flex items-center gap-2 pl-6">
            <span className="font-medium">Details:</span> Transfer {formatBalance(txDetails.value)} {txDetails.tokenType && SUPPORTED_TOKENS_INFO[txDetails.tokenType as TokenType].symbol} to {txDetails.to?.slice(0, 6)}...{txDetails.to?.slice(-4)}
          </div>
          {txDetails.data && txDetails.data !== '0x' && (
            <div><span className="font-medium">Data:</span> {txDetails.data}</div>
          )}
        </>
      )}
    </div>

    <div className="text-sm text-gray-500 mb-1 flex items-center">
      <span className="font-medium text-gray-700">Status:</span> 
      {proposal.status === 'pending' ? (
        <Badge variant="outline" className="ml-2 text-yellow-600 bg-yellow-50 border-yellow-300">
          {proposal.status}
        </Badge>
      ) : proposal.status === 'completed' ? (
        <Badge variant="secondary" className="ml-2 text-green-600 bg-green-50 border-green-300">
          {proposal.status}
        </Badge>
      ) : (
        <Badge variant="outline" className="ml-2">
          {proposal.status}
        </Badge>
      )}
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="font-medium text-gray-700">Threshold:</span>
      <span> {displayThreshold}</span>
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
        {displaySigners?.map(signer => {
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
          Approve the proposal
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
            Executing the transaction
          </Button>
        )}
    </div>
  </div>
}