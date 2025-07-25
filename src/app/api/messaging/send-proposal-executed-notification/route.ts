import { NextRequest } from 'next/server'
import { log } from '@/lib/utils'

interface ProposalExecutedNotificationRequest {
  approvers: string[]
  proposalId: string
  proposalType: 'transaction' | 'settings'
  walletName: string
  walletLink: string
  executionDetails?: {
    // Transaction type details
    recipientAddress?: string
    amount?: string
    symbol?: string
    transactionUrl?: string
    
    // Settings change type details
    changeDescription?: string
  }
  proposer: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ProposalExecutedNotificationRequest = await request.json()
    
    // Validate required parameters
    const { approvers, proposalId, proposalType, walletName, walletLink, proposer } = body
    
    if (!approvers || !Array.isArray(approvers) || approvers.length === 0) {
      return Response.json(
        { success: false, error: "approvers array is required and must not be empty" },
        { status: 400 }
      )
    }
    
    if (!proposalId) {
      return Response.json(
        { success: false, error: "proposalId is required" },
        { status: 400 }
      )
    }
    
    if (!proposalType || !['transaction', 'settings'].includes(proposalType)) {
      return Response.json(
        { success: false, error: "proposalType must be 'transaction' or 'settings'" },
        { status: 400 }
      )
    }
    
    if (!walletName) {
      return Response.json(
        { success: false, error: "walletName is required" },
        { status: 400 }
      )
    }
    
    if (!walletLink) {
      return Response.json(
        { success: false, error: "walletLink is required" },
        { status: 400 }
      )
    }
    
    if (!proposer) {
      return Response.json(
        { success: false, error: "proposer is required" },
        { status: 400 }
      )
    }
    
    // Get backend URL
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    if (!backendUrl) {
      console.error('NEXT_PUBLIC_BACKEND_URL environment variable is not defined')
      return Response.json(
        { success: false, error: "Backend URL is not configured" },
        { status: 500 }
      )
    }
    
    // Send notification to all approvers in one request (backend handles the loop)
    const response = await fetch(`${backendUrl}/messaging/send-proposal-executed-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        approvers,
        proposalId,
        proposalType,
        walletName,
        walletLink,
        executionDetails: body.executionDetails,
        proposer,
      })
    })

    if (response.ok) {
      const result = await response.json()
      log(`Successfully sent notifications to ${approvers.length} approver(s)`)

      return Response.json({
        success: true,
        message: result.message || `Proposal executed notification emails have been sent to ${approvers.length} approver(s)`,
        sentTo: result.sentTo || approvers,
        totalSent: approvers.length,
        totalFailed: 0
      })
    } else {
      const errorData = await response.json()
      console.error('Backend failed to send notifications:', errorData)
      return Response.json(
        {
          success: false,
          error: errorData.error || 'Backend service error',
          totalSent: 0,
          totalFailed: approvers.length
        },
        { status: response.status }
      )
    }
    
  } catch (error) {
    console.error('Error sending proposal executed notifications:', error)
    return Response.json(
      { success: false, error: "Failed to send proposal executed notifications" },
      { status: 500 }
    )
  }
}
