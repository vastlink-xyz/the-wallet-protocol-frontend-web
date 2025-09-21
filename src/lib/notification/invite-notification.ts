/**
 * Send an invite email to an unregistered user
 */

import { BASE_URL } from '@/constants';

export async function sendInviteEmail({
  recipientEmail,
  senderEmail,
  tokenType,
  amount,
  inviteUrl
}: {
  recipientEmail: string;
  senderEmail: string;
  tokenType: string;
  amount: string;
  inviteUrl: string;
}): Promise<boolean> {
  try {
    const url = `${BASE_URL}/api/messaging/send-invite-email`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: recipientEmail,
        senderEmail,
        tokenType,
        amount,
        inviteUrl,
        notificationType: 'invite'
      }),
    })
    const data = await res.json().catch(() => ({}))
    return res.ok && data?.success === true
  } catch (error) {
    console.error('Failed to send invite email:', error)
    return false
  }
}

/**
 * Send a notification to the sender that the recipient has registered
 */
export async function sendRecipientRegisteredEmail({
  to,
  recipientEmail,
  tokenType,
  amount,
  completeUrl
}: {
  to: string;
  recipientEmail: string;
  tokenType: string;
  amount: string;
  completeUrl: string;
}): Promise<boolean> {
  try {
    const url = `${BASE_URL}/api/messaging/send-invite-email`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        recipientEmail,
        tokenType,
        amount,
        inviteUrl: completeUrl,
        notificationType: 'recipient-registered'
      }),
    })
    const data = await res.json().catch(() => ({}))
    return res.ok && data?.success === true
  } catch (error) {
    console.error('Failed to send recipient registered email:', error)
    return false
  }
}
