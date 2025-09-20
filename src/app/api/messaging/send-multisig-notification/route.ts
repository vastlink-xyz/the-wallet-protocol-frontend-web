import { NextRequest } from 'next/server'
import emailService from '@/lib/messaging/services/EmailService'

export async function POST(request: NextRequest) {
  try {
    const {
      to,
      proposalId,
      recipientAddress,
      amount,
      walletLink,
      notificationType,
      settingsChanges,
      walletAddress,
      threshold,
      signersCount,
      proposer,
      walletName,
      symbol,
    } = await request.json()

    if (!to || !walletLink) {
      return Response.json({ success: false, error: 'Missing required parameters' }, { status: 400 })
    }

    if (notificationType === 'wallet-settings-change') {
      if (!proposalId) {
        return Response.json({ success: false, error: 'Missing required parameters for wallet settings notification' }, { status: 400 })
      }

      await emailService.sendWalletSettingsNotification({
        to,
        proposalId,
        walletLink,
        settingsChanges,
        proposer,
        walletName,
      })

      return Response.json({ success: true, message: 'Wallet settings change notification email has been sent' })
    } else if (notificationType === 'multisig-wallet-added') {
      if (!walletAddress || threshold === undefined || signersCount === undefined) {
        return Response.json({ success: false, error: 'Missing required parameters for team wallet added notification' }, { status: 400 })
      }

      await emailService.sendMultisigWalletAddedNotification({
        to,
        walletAddress,
        threshold,
        signersCount,
        walletLink,
        walletName,
      })

      return Response.json({ success: true, message: 'Team wallet added notification email has been sent' })
    } else {
      if (!proposalId || !recipientAddress || !amount) {
        return Response.json({ success: false, error: 'Missing required parameters for transaction notification' }, { status: 400 })
      }

      await emailService.sendMultisigTransactionNotification({
        to,
        proposalId,
        recipientAddress,
        amount,
        walletLink,
        proposer,
        walletName,
        symbol,
      })

      return Response.json({ success: true, message: 'Multisig transaction notification email has been sent' })
    }
  } catch (err) {
    console.error(err)
    return Response.json({ success: false, error: 'Failed to send notification' }, { status: 500 })
  }
}

