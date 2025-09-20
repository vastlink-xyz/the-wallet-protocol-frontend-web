import { NextRequest } from 'next/server'
import { log } from '@/lib/utils'
import emailService from '@/lib/messaging/services/EmailService'

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
    
    // Send notifications to all approvers locally via SendGrid
    const promises = approvers.map((approverEmail) =>
      emailService.sendProposalExecutedNotification({
        to: approverEmail,
        proposalId,
        proposalType,
        walletName,
        walletLink,
        executionDetails: body.executionDetails || {},
      })
    )

    const results = await Promise.allSettled(promises)
    const totalSent = results.filter(r => r.status === 'fulfilled').length
    const totalFailed = results.length - totalSent

    log(`Sent proposal executed notifications. Success: ${totalSent}, Failed: ${totalFailed}`)

    if (totalFailed > 0) {
      return Response.json({
        success: false,
        error: 'Some notifications failed to send',
        sentTo: approvers,
        totalSent,
        totalFailed,
      }, { status: 207 })
    }

    return Response.json({
      success: true,
      message: `Proposal executed notification emails have been sent to ${approvers.length} approver(s)`,
      sentTo: approvers,
      totalSent,
      totalFailed: 0,
    })
    
  } catch (error) {
    console.error('Error sending proposal executed notifications:', error)
    return Response.json(
      { success: false, error: "Failed to send proposal executed notifications" },
      { status: 500 }
    )
  }
}
