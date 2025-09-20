/**
 * Send an invite email to an unregistered user
 */
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
    const base = typeof window === 'undefined' 
      ? (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
      : ''
    const url = `${base}/api/messaging/send-invite-email`

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
    const base = typeof window === 'undefined' 
      ? (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000')
      : ''
    const url = `${base}/api/messaging/send-invite-email`

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
