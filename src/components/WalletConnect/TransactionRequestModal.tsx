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
import { useSecurityVerification } from '@/hooks/useSecurityVerification'
import { formatEther } from 'ethers/lib/utils'

export function TransactionRequestModal() {
  const { 
    pendingRequest, 
    approveRequestWithSecurity, 
    rejectRequest, 
    clearPendingRequest 
  } = useWalletConnect()

  // Security verification hook for WalletConnect requests
  const securityVerification = useSecurityVerification({
    executeTransaction: async (params) => {
      // This will call the actual WalletConnect request handler with security params
      return await approveRequestWithSecurity(params)
    }
  })

  if (!pendingRequest) return null

  const handleApprove = async () => {
    try {
      // Use security verification for the request
      await securityVerification.verify({})
    } catch (error) {
      console.error('Failed to approve request:', error)
    }
  }

  const handleReject = async () => {
    try {
      await rejectRequest('User rejected transaction')
    } catch (error) {
      console.error('Failed to reject request:', error)
    }
  }

  const getRequestTitle = () => {
    switch (pendingRequest.params.request.method) {
      case 'eth_sendTransaction':
        return 'Transaction Request'
      case 'personal_sign':
        return 'Sign Message'
      case 'eth_signTypedData_v4':
        return 'Sign Typed Data'
      default:
        return 'Request'
    }
  }

  const getRequestDescription = () => {
    switch (pendingRequest.params.request.method) {
      case 'eth_sendTransaction':
        return 'The DApp wants to send a transaction'
      case 'personal_sign':
        return 'The DApp wants you to sign a message'
      case 'eth_signTypedData_v4':
        return 'The DApp wants you to sign structured data'
      default:
        return 'The DApp is requesting an action'
    }
  }

  const renderTransactionDetails = () => {
    if (pendingRequest.params.request.method !== 'eth_sendTransaction') {
      return (
        <div className="p-3 bg-gray-50 rounded-lg">
          <pre className="text-xs text-gray-600 whitespace-pre-wrap break-all">
            {JSON.stringify(pendingRequest.params.request.params, null, 2)}
          </pre>
        </div>
      )
    }

    const txParams = pendingRequest.params.request.params[0]
    
    return (
      <div className="space-y-3">
        <div className="p-3 border rounded-lg space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">To:</span>
            <span className="text-sm font-mono">{txParams.to}</span>
          </div>
          
          {txParams.value && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Value:</span>
              <span className="text-sm">
                {formatEther(txParams.value)} ETH
              </span>
            </div>
          )}
          
          {txParams.gasLimit && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Gas Limit:</span>
              <span className="text-sm">{parseInt(txParams.gasLimit, 16).toLocaleString()}</span>
            </div>
          )}
          
          {txParams.gasPrice && (
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Gas Price:</span>
              <span className="text-sm">
                {formatEther(txParams.gasPrice)} ETH
              </span>
            </div>
          )}
          
          {txParams.data && txParams.data !== '0x' && (
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">Data:</span>
              <div className="p-2 bg-gray-50 rounded text-xs font-mono break-all">
                {txParams.data}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <Dialog open={true} onOpenChange={() => clearPendingRequest()}>
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getRequestTitle()}</DialogTitle>
          <DialogDescription>
            {getRequestDescription()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Request Info */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Method:</span>
            <Badge variant="secondary">
              {pendingRequest.params.request.method}
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Chain:</span>
            <Badge variant="outline">
              {pendingRequest.params.chainId}
            </Badge>
          </div>

          {/* Request Details */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Details</h4>
            {renderTransactionDetails()}
          </div>

          {/* Info */}
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              ℹ️ Review the transaction details carefully before approving.
            </p>
          </div>
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
            disabled={securityVerification.isVerifying}
          >
            {securityVerification.isVerifying ? 'Processing...' : 'Approve'}
          </Button>
        </DialogFooter>
      </DialogContent>
      
      {/* Security verification dialogs */}
      {securityVerification.PinDialog}
      {securityVerification.MFADialog}
    </Dialog>
  )
}