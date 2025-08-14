import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, Settings, Key } from "lucide-react"
import { IRelayPKP } from "@lit-protocol/types"
import { useMemo } from "react"
import dayjs from "dayjs"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

// Import new types
import { APIKeysProposal as APIKeysProposalType, APIKeysProposalData } from "@/app/api/api-keys-proposals/models"

interface Wallet {
  id: string
  name: string
  threshold: number
  signers: Array<{
    ethAddress: string
    publicKey: string
    email: string
    authMethodId: string
  }>
}

// Helper function to check if user has signed
function hasUserSigned(proposal: any, userPkp: IRelayPKP): boolean {
  if (!proposal.signatures || !userPkp?.ethAddress) return false
  return proposal.signatures.some((sig: any) => 
    sig.signer.toLowerCase() === userPkp.ethAddress.toLowerCase()
  )
}

interface APIKeysProposalProps {
  proposal: APIKeysProposalType | any  // Allow both old and new format during transition
  selectedWallet: Wallet
  handleApproveProposal: (proposal: any) => void
  handleExecuteProposal: (proposal: any) => void
  userPkp: IRelayPKP
  authMethodId: string | null
  isApproving: boolean
  isExecuting: boolean
  isDisabled: boolean
}

export function APIKeysProposal({ 
  proposal, 
  selectedWallet, 
  handleApproveProposal, 
  handleExecuteProposal, 
  userPkp, 
  authMethodId, 
  isApproving, 
  isExecuting, 
  isDisabled 
}: APIKeysProposalProps) {
  const isPending = isApproving || isExecuting || isDisabled
  const t = useTranslations("ProposalListItem")

  const signedByMe = useMemo(() => {
    return hasUserSigned(proposal, userPkp)
  }, [proposal.signatures, userPkp.ethAddress])

  // Check if current user is the proposal creator
  const isCreator = useMemo(() => {
    return authMethodId && proposal.createdBy?.authMethodId === authMethodId
  }, [authMethodId, proposal.createdBy])

  const displayThreshold = selectedWallet.threshold
  const displaySigners = selectedWallet.signers

  // Get API Keys proposal details - support both old and new format
  const apiKeysData = proposal.apiKeysData || proposal.proposalData
  if (!apiKeysData) {
    return <div>Failed to parse API Keys proposal data</div>
  }

  const getProposalTypeDisplay = () => {
    switch (apiKeysData.type) {
      case 'UPDATE_API_KEYS':
        return {
          icon: <Key className="w-4 h-4" />,
          label: 'Update API Keys',
          color: 'bg-blue-100 text-blue-800 border-blue-200'
        }
      case 'UPDATE_IPFS_IDS':
        return {
          icon: <Settings className="w-4 h-4" />,
          label: 'Update IPFS Access',
          color: 'bg-purple-100 text-purple-800 border-purple-200'
        }
      case 'CREATE_CONFIG':
        return {
          icon: <Key className="w-4 h-4" />,
          label: 'Create Configuration',
          color: 'bg-green-100 text-green-800 border-green-200'
        }
      case 'DELETE_CONFIG':
        return {
          icon: <Settings className="w-4 h-4" />,
          label: 'Delete Configuration',
          color: 'bg-red-100 text-red-800 border-red-200'
        }
      default:
        return {
          icon: <Settings className="w-4 h-4" />,
          label: 'API Keys Update',
          color: 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }
  }

  const proposalTypeDisplay = getProposalTypeDisplay()

  const getChangesSummary = () => {
    const changes = []
    
    switch (apiKeysData.type) {
      case 'UPDATE_API_KEYS':
        if (apiKeysData.newApiKeys) {
          const newKeys = Object.keys(apiKeysData.newApiKeys)
          changes.push(`Update ${newKeys.length} API key${newKeys.length !== 1 ? 's' : ''}`)
          changes.push(`Keys: ${newKeys.join(', ')}`)
        }
        break
      case 'UPDATE_IPFS_IDS':
        if (apiKeysData.newIpfsIds) {
          changes.push(`Update ${apiKeysData.newIpfsIds.length} IPFS ID${apiKeysData.newIpfsIds.length !== 1 ? 's' : ''}`)
          apiKeysData.newIpfsIds.forEach((id: string, index: number) => {
            changes.push(`${index + 1}. ${id.slice(0, 20)}...${id.slice(-10)}`)
          })
        }
        break
      case 'CREATE_CONFIG':
        changes.push('Create new API Keys configuration')
        if (apiKeysData.newApiKeys) {
          changes.push(`With ${Object.keys(apiKeysData.newApiKeys).length} API keys`)
        }
        break
      case 'DELETE_CONFIG':
        changes.push('Delete entire API Keys configuration')
        if (apiKeysData.configId) {
          changes.push(`Config ID: ${apiKeysData.configId}`)
        }
        break
    }
    
    if (apiKeysData.changeDescription) {
      changes.push(apiKeysData.changeDescription)
    }
    
    return changes
  }

  const changesSummary = getChangesSummary()

  return (
    <div key={proposal.id} className="p-4 bg-proposal-background rounded-lg border border-proposal-border shadow-sm text-base font-medium">
      <div className="flex flex-row mb-2 items-center pointer-events-none">
        <div className={cn("flex items-center gap-1 px-2 py-1 rounded-sm text-xs border", proposalTypeDisplay.color)}>
          {proposalTypeDisplay.icon}
          {proposalTypeDisplay.label}
        </div>
        <div className="flex-1" />
        <div className="text-xs text-gray-500 flex items-center">
          {proposal.status === 'pending' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-yellow-600 border border-yellow-600">
              Pending
            </div>
          ) : proposal.status === 'completed' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-green-600 border border-green-600">
              Completed
            </div>
          ) : proposal.status === 'canceled' ? (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-gray-600 border border-gray-600">
              Canceled
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2 py-1 rounded-sm text-gray-600 border border-gray-600">
              Unknown
            </div>
          )}
        </div>
      </div>

      <div className="text-lg font-semibold mb-2 text-wrap line-clamp-2 truncate">
        API Keys Management - {selectedWallet.name}
      </div>

      {proposal.createdAt && (
        <div className="text-muted-foreground mb-2">
          {dayjs(proposal.createdAt).format('MM/DD/YYYY, HH:mm')}
        </div>
      )}

      <div className="bg-gray-100 rounded-lg p-4 space-y-2 mb-2 text-sm font-semibold">
        {changesSummary.map((change, index) => (
          <div key={index} className="break-all">
            {change}
          </div>
        ))}
      </div>

      {proposal.createdBy && (
        <div className="text-muted-foreground mb-2">
          {t("created_by", { email: proposal.createdBy?.email })}
        </div>
      )}

      <div className="text-muted-foreground mb-2">
        {t('threshold', {
          nums: displayThreshold,
          count: displaySigners.length,
        })}
      </div>

      <div className="text-muted-foreground mb-2">
        <div className="mb-1">{t('signers')}</div>
        <div className="pl-2 border-l-2 space-y-1">
          {displaySigners.map((signer) => {
            const hasSigned = proposal.signatures.some(
              (sig: any) =>
                sig.signer.toLowerCase() === signer.ethAddress.toLowerCase()
            )

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
            )
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2 mb-2">
        {proposal.status === 'pending' && !signedByMe && (
          <>
            {proposal.signatures.length + 1 < displayThreshold ? (
              <Button
                className="rounded-full"
                variant="default"
                disabled={isPending}
                onClick={() => handleApproveProposal(proposal)}
              >
                {isApproving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t("approve")}
              </Button>
            ) : (
              <Button
                className="rounded-full"
                variant="default"
                disabled={isPending}
                onClick={() => handleApproveProposal(proposal)}
              >
                {isApproving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t("approve")}
              </Button>
            )}
          </>
        )}

        {proposal.status === 'pending' && proposal.signatures.length >= displayThreshold && signedByMe && (
          <Button
            className="rounded-full"
            variant="default"
            disabled={isPending}
            onClick={() => handleExecuteProposal(proposal)}
          >
            {isExecuting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t("execute")}
          </Button>
        )}
      </div>
    </div>
  )
}