/**
 * Email notification utility for sending emails via API
 */
import axios from 'axios';

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
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messaging/send-invite-email`, {
      to: recipientEmail,
      senderEmail,
      tokenType,
      amount,
      inviteUrl,
      notificationType: 'invite'
    });
    
    return response.data.success;
  } catch (error) {
    console.error('Failed to send invite email:', error);
    return false;
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
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/messaging/send-invite-email`, {
      to,
      recipientEmail,
      tokenType,
      amount,
      inviteUrl: completeUrl,
      notificationType: 'recipient-registered'
    });
    
    return response.data.success;
  } catch (error) {
    console.error('Failed to send recipient registered email:', error);
    return false;
  }
} 