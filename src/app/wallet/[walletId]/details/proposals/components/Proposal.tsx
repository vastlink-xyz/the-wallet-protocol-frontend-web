import { MessageProposal, MultisigWallet } from "@/app/api/multisig/storage"
import { Button } from "@/components/ui/button"
import { Loader2, Settings, ArrowUpRightFromCircle } from "lucide-react"
import { getTransactionDetails, hasUserSigned } from "../utils/proposal";
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { IRelayPKP } from "@lit-protocol/types";
import { useMemo } from "react";
import { formatBalance } from "@/lib/web3/format";
import { ExtendedSettingsData, generateSettingsChangeDescriptions } from "../utils/settingsDescriptionUtils"
import dayjs from "dayjs"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";

interface ProposalProps {
  proposal: MessageProposal;
  selectedWallet: MultisigWallet;
  handleSignProposal: (proposal: MessageProposal) => void;
  executeMultisigLitAction: (proposal: MessageProposal) => void;
  handleCancelProposal: (proposal: MessageProposal) => void;
  userPkp: IRelayPKP;
  authMethodId: string | null;
  isSigningProposal: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  isCancelingProposal: boolean;
}

export function Proposal({ proposal, selectedWallet, handleSignProposal, executeMultisigLitAction, handleCancelProposal, userPkp, authMethodId, isSigningProposal, isLoading, isDisabled, isCancelingProposal }: ProposalProps) {
  const isPending = isSigningProposal || isLoading || isDisabled || isCancelingProposal;

  const transProposalStatus = useTranslations("ProposalStatus")
  const transProposalListItem = useTranslations("ProposalListItem")

  const signedByMe = useMemo(() => {
    return hasUserSigned(proposal, userPkp);
  }, [proposal.signatures, userPkp.ethAddress]);

  // Check if current user is the proposal creator
  const isCreator = useMemo(() => {
    return authMethodId && proposal.createdBy?.authMethodId === authMethodId
  }, [authMethodId, proposal.createdBy])

  const txDetails = useMemo(() => {
    return getTransactionDetails(proposal, selectedWallet);
  }, [proposal, selectedWallet]);

  const displayThreshold = useMemo(() => {
    if (proposal.status !== 'pending') {
      // if proposal is completed, display the threshold from the original state
      return (proposal.settingsData?.originalState?.threshold || 0) as number;
    }

    // if proposal is pending, display the current threshold from the wallet
    return selectedWallet.threshold;
  }, [selectedWallet, proposal]);

  const displaySigners = useMemo(() => {
    if (proposal.status !== 'pending') {
      // if proposal is completed, display the signers from the original state
      return (proposal.settingsData?.originalState
        ?.signers || []) as MultisigWallet['signers'];
    }

    // if proposal is pending, display the current signers from the wallet
    return selectedWallet.signers;
  }, [selectedWallet, proposal]);

  // Get original state from proposal or convert selectedWallet to same structure
  const originalState = useMemo(() => {
    return (
      proposal.settingsData?.originalState ||
      (selectedWallet
        ? {
            name: selectedWallet.name,
            threshold: selectedWallet.threshold,
            signers: selectedWallet.signers,
            mfaSettings: selectedWallet.metadata?.mfaSettings,
          }
        : null)
    );
  }, [proposal.settingsData, selectedWallet]);

  // Extract settings data from the proposal
  const settingsData = proposal.settingsData as ExtendedSettingsData;
  if (!settingsData) {
    return <div>{transProposalListItem("failed_parse_data")}</div>;
  }

  // Generate change descriptions using the utility function
  const changeResult = generateSettingsChangeDescriptions(
    settingsData,
    originalState
  );

  const dailyLimits: [string, any][] = [];
  if (changeResult.changes.mfaSettings && changeResult.changes.mfaSettings.dailyLimits) {
    const items = Object.entries<any>(changeResult.changes.mfaSettings.dailyLimits);
    if (items.length > 0) {
      dailyLimits.push(...items);
    }
  }

  const descriptions = changeResult.descriptions;

  // Handle case when proposal is completed but changes are not detected
  if (descriptions.length === 0 && proposal.status === 'completed') {
    descriptions.push(
      settingsData.changeDescription || 'Wallet settings updated'
    );
  } else if (descriptions.length === 0) {
    descriptions.push('No changes detected');
  }

  return (
    <div key={proposal.id} className="p-4 bg-proposal-background rounded-lg border border-proposal-border shadow-sm text-base font-medium">
      <div className="flex flex-row mb-2 items-center pointer-events-none">
        {proposal.type === "walletSettings" ? (
          <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-xs bg-muted border border-muted">
            <Settings className="w-4 h-4" />
            {transProposalListItem("setting_change")}
          </div>
        ) : (
          <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-xs bg-muted border border-muted">
            <ArrowUpRightFromCircle className="w-4 h-4" />
            {transProposalListItem("transfer")}
          </div>
        )}
        <div className="flex-1" />
        <div className="text-xs text-gray-500 flex items-center">
          {proposal.status === 'pending' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-yellow-600 border border-yellow-600">
              {transProposalStatus('pending')}
            </div>
          ) : proposal.status === 'completed' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-green-600 border border-green-600">
              {transProposalStatus('completed')}
            </div>
          ) : proposal.status === 'canceled' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-gray-600 border border-gray`-600">
              {transProposalStatus('canceled')}
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-gray-600 border border-gray-600">
              {transProposalStatus('unknown')}
            </div>
          )}
        </div>
      </div>

      {originalState?.name && (
        <div className="text-lg font-semibold mb-2 text-wrap line-clamp-2 truncate">{originalState.name}</div>
      )}

      {proposal.createdAt && (
        <div className="text-muted-foreground mb-2">
          {dayjs(proposal.createdAt).format('MM/DD/YYYY, HH:mm')}
        </div>
      )}

      <div className="bg-gray-100 rounded-lg p-4 space-y-2 mb-2 text-sm font-semibold">
        {proposal.type === "walletSettings" ? ( 
          <>
            {changeResult.changes.name && (
              <div>
                {`Name: ${changeResult.changes.name.from} → ${changeResult.changes.name.to}`}
              </div>
            )}

            {changeResult.changes.threshold && (
              <div className="text-sm font-semibold">
                {`Threshold: ${changeResult.changes.threshold.from} of ${changeResult.changes.threshold.fromSignersCount} → ${changeResult.changes.threshold.to} of ${changeResult.changes.threshold.toSignersCount}`}
              </div>
            )}

            {changeResult.changes.signers && (
              <div className="space-y-2">
                {changeResult.changes.signers.added?.length > 0 && (
                  <div>
                    <span className="mb-1">Add signers:</span>
                    <div className="ml-4 space-y-1">
                      {changeResult.changes.signers.added.map(
                        (signer: any, index: number) => (
                          <div key={index}>
                            {`• ${signer.email} (${signer.ethAddress.slice(0, 6)}...${signer.ethAddress.slice(-4)})`}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {changeResult.changes.signers.removed?.length > 0 && (
                  <div>
                    <span className="mb-1">Remove signers:</span>
                    <div className="ml-4 space-y-1">
                      {changeResult.changes.signers.removed.map(
                        (signer: any, index: number) => (
                          <div key={index}>
                            {`• ${signer.email} (${signer.ethAddress.slice(0, 6)}...${signer.ethAddress.slice(-4)})`}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {dailyLimits.length > 0 && (
              <div>
                <span className="mb-1">Daily limits:</span>
                <div className="ml-4 space-y-1">
                  {dailyLimits.map(([token, change]) => (
                    <div key={token}>
                      {`• ${token}: ${change.from !== undefined ? change.from.toString() : 'undefined'} → ${change.to !== undefined ? change.to.toString() : 'undefined'}`}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Object.keys(changeResult.changes).length === 0 && (
              <div>
                <span>Details:</span> {descriptions.join(', ')}
              </div>
            )}
          </>
        ) : (
          <div>
            <div className="break-all">
              {`Transfer ${formatBalance(txDetails.value)} ${txDetails.tokenType && SUPPORTED_TOKENS_INFO[txDetails.tokenType as TokenType].symbol} to ${txDetails.to}`}
            </div>
            {txDetails.data && txDetails.data !== '0x' && (
              <div>{`Data: ${txDetails.data}`}</div>
            )}
          </div>
        )}
      </div>

      {proposal.createdBy && (
        <div className="text-muted-foreground mb-2">
          Created by: {proposal.createdBy?.email}
        </div>
      )}

      <div className="text-muted-foreground mb-2">
        {`Threshold: ${displayThreshold} of ${displaySigners.length}`}
      </div>

      <div className="text-muted-foreground mb-2">
        <div className="mb-1">Signers:</div>
        <div className="pl-2 border-l-2 space-y-1">
          {displaySigners.map((signer) => {
            const hasSigned = proposal.signatures.some(
              (sig) =>
                sig.signer.toLowerCase() === signer.ethAddress.toLowerCase()
            );

            return (
              <div key={signer.ethAddress} className="flex font-semibold items-center">
                <div className={cn(
                  "w-2 h-2 rounded-full mr-2",
                  hasSigned ? 'bg-green-500' : 'bg-gray-200'
                )} />
                <span className={hasSigned ? 'text-green-500' : 'text-gray-200'}>
                  {`${signer.email} ${hasSigned ? ' ✓' : ''}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2 mb-2">
        {proposal.status === 'pending' && isCreator && (
          <Button
            className="rounded-full"
            variant="outline"
            disabled={isPending}
            onClick={() => handleCancelProposal(proposal)}
          >
            {isCancelingProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {transProposalListItem("cancel")}
          </Button>
        )}

        {proposal.status === 'pending' && !signedByMe && (
          <Button
            className="rounded-full"
            variant="default"
            disabled={isPending}
            onClick={() => handleSignProposal(proposal)}
          >
            {isSigningProposal && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {transProposalListItem(proposal.signatures.length + 1 >= displayThreshold ? "approve_and_execute" : "approve")}
          </Button>
        )}

        {proposal.status === 'pending' && proposal.signatures.length >= displayThreshold && signedByMe && (
          <Button
            className="rounded-full"
            variant="default"
            disabled={isPending}
            onClick={() => executeMultisigLitAction(proposal)}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {transProposalListItem("execute")}
          </Button>
        )}
      </div>
    </div>
  );
}