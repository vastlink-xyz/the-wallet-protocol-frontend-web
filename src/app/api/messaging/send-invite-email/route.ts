import { NextRequest } from 'next/server'
import emailService from '@/lib/messaging/services/EmailService'

export async function POST(request: NextRequest) {
  try {
    const { to, senderEmail, tokenType, amount, inviteUrl, notificationType, recipientEmail } = await request.json()

    if (notificationType === 'invite') {
      if (!to || !senderEmail || !inviteUrl) {
        return Response.json({ success: false, error: 'Missing required parameters' }, { status: 400 })
      }
      await emailService.sendInviteEmail({
        to,
        senderEmail,
        tokenType,
        amount,
        inviteUrl,
      })
      return Response.json({ success: true, message: 'Invite email has been sent' })
    } else if (notificationType === 'recipient-registered') {
      if (!to || !recipientEmail) {
        return Response.json({ success: false, error: 'Missing required parameters' }, { status: 400 })
      }
      await emailService.sendRecipientRegisteredEmail({
        to,
        recipientEmail,
        tokenType,
        amount,
        completeUrl: inviteUrl,
      })
      return Response.json({ success: true, message: 'Recipient registered email has been sent' })
    }

    return Response.json({ success: false, error: 'Invalid notificationType' }, { status: 400 })
  } catch (err) {
    console.error(err)
    return Response.json({ success: false, error: 'Failed to send invitation email' }, { status: 500 })
  }
}

