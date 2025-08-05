'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useWalletConnect } from '@/hooks/useWalletConnect'
import { getSupportedChains } from '@/lib/walletconnect/config'

export function SessionProposalModal() {
  const { 
    sessionProposal, 
    approveSession, 
    rejectSession, 
    clearSessionProposal 
  } = useWalletConnect()

  if (!sessionProposal) return null

  // Type-safe helper to access session proposal properties
  // Since we already check sessionProposal exists above, we can safely access it here
  const proposer = sessionProposal.params.proposer
  const requiredNamespaces = sessionProposal.params.requiredNamespaces


  const handleApprove = async () => {
    try {
      await approveSession()
    } catch (error) {
      console.error('Failed to approve session:', error)
    }
  }

  const handleReject = async () => {
    try {
      await rejectSession()
    } catch (error) {
      console.error('Failed to reject session:', error)
    }
  }

  const supportedChains = getSupportedChains()
  const eip155Namespace = 'eip155' in requiredNamespaces ? requiredNamespaces.eip155 : { chains: [], methods: [] }
  const proposalChains: string[] = eip155Namespace.chains || []
  const proposalMethods: string[] = eip155Namespace.methods || []

  const getDappUrl = (metadata: { url?: string; name?: string; icons?: string[] } | undefined) => {
    try {
      return new URL(metadata?.url || '').hostname || metadata?.url || 'Unknown'
    } catch {
      return metadata?.url || 'Unknown'
    }
  }

  return (
    <Dialog open={true} onOpenChange={() => clearSessionProposal()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connection Request</DialogTitle>
          <DialogDescription>
            A DApp wants to connect to your wallet
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* DApp Info */}
          <div className="flex items-center gap-3 p-3 border rounded-lg">
            {proposer.metadata?.icons?.[0] && (
              <img
                src={proposer.metadata?.icons?.[0]}
                alt=""
                className="w-12 h-12 rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">
                {proposer.metadata?.name || 'Unknown DApp'}
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                {getDappUrl(proposer.metadata)}
              </p>
            </div>
          </div>

          {/* Requested Chains */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Requested Networks</h4>
            <div className="flex flex-wrap gap-1">
              {proposalChains.map((chain: string) => (
                <Badge 
                  key={chain} 
                  variant={supportedChains[chain] ? "default" : "destructive"}
                  className="text-xs"
                >
                  {supportedChains[chain] || chain}
                  {!supportedChains[chain] && ' (Unsupported)'}
                </Badge>
              ))}
            </div>
          </div>

          {/* Requested Methods */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Requested Permissions</h4>
            <div className="flex flex-wrap gap-1">
              {proposalMethods.map((method: string) => (
                <Badge key={method} variant="secondary" className="text-xs">
                  {method}
                </Badge>
              ))}
            </div>
          </div>

          {/* Warning for unsupported chains */}
          {proposalChains.some((chain: string) => !supportedChains[chain]) && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ Some requested networks are not supported by your wallet
              </p>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={handleReject}
          >
            Reject
          </Button>
          <Button
            onClick={handleApprove}
          >
            Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}