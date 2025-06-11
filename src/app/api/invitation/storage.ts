import { connectToDatabase } from '../user/models';
import { PendingInvitation, PendingInvitationModel } from './models';
import crypto from 'crypto';

// Helper function to extract invitation data safely from Mongoose document
function extractInvitationData(doc: any): PendingInvitation | null {
  if (!doc) return null;
  return {
    id: doc.id || doc._id?.toString(),
    senderAuthMethodId: doc.senderAuthMethodId,
    senderEmail: doc.senderEmail,
    recipientEmail: doc.recipientEmail,
    tokenType: doc.tokenType,
    amount: doc.amount,
    status: doc.status,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    expiresAt: doc.expiresAt
  };
}

/**
 * Create a new pending invitation
 */
export async function createPendingInvitation({
  senderAuthMethodId,
  senderEmail,
  recipientEmail,
  tokenType,
  amount
}: {
  senderAuthMethodId: string;
  senderEmail: string;
  recipientEmail: string;
  tokenType: string;
  amount: string;
}): Promise<PendingInvitation> {
  try {
    await connectToDatabase();
    
    // Generate unique ID for the invitation
    const id = crypto.randomUUID();
    
    // Set expiration date (7 days from creation)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);
    
    const invitationData = {
      id,
      senderAuthMethodId,
      senderEmail,
      recipientEmail,
      tokenType,
      amount,
      status: 'pending',
      expiresAt
    };
    
    const newInvitation = await PendingInvitationModel.create(invitationData);
    return extractInvitationData(newInvitation) as PendingInvitation;
  } catch (error) {
    console.error('Failed to create pending invitation:', error);
    throw error;
  }
}

/**
 * Get a pending invitation by ID
 */
export async function getPendingInvitationById(id: string): Promise<PendingInvitation | null> {
  try {
    await connectToDatabase();
    const invitation = await PendingInvitationModel.findOne({ id }).lean();
    return extractInvitationData(invitation);
  } catch (error) {
    console.error('Failed to get pending invitation by id:', error);
    return null;
  }
}

/**
 * Get all pending invitations for a recipient email
 */
export async function getPendingInvitationsByRecipientEmail(email: string): Promise<PendingInvitation[]> {
  try {
    await connectToDatabase();
    const invitations = await PendingInvitationModel.find({ 
      recipientEmail: email,
      status: 'pending'
    }).lean();
    
    return invitations
      .map(invitation => extractInvitationData(invitation))
      .filter((invitation): invitation is PendingInvitation => invitation !== null);
  } catch (error) {
    console.error('Failed to get pending invitations by recipient email:', error);
    return [];
  }
}

/**
 * Get all pending invitations for a sender
 */
export async function getPendingInvitationsBySender(authMethodId: string): Promise<PendingInvitation[]> {
  try {
    await connectToDatabase();
    const invitations = await PendingInvitationModel.find({ 
      senderAuthMethodId: authMethodId
    }).lean();
    
    return invitations
      .map(invitation => extractInvitationData(invitation))
      .filter((invitation): invitation is PendingInvitation => invitation !== null);
  } catch (error) {
    console.error('Failed to get pending invitations by sender:', error);
    return [];
  }
}

/**
 * Update a pending invitation status
 */
export async function updatePendingInvitationStatus(
  id: string, 
  status: PendingInvitation['status']
): Promise<PendingInvitation | null> {
  try {
    await connectToDatabase();
    
    const updatedInvitation = await PendingInvitationModel.findOneAndUpdate(
      { id },
      { 
        status,
        updatedAt: new Date()
      },
      { new: true }
    ).lean();
    
    return extractInvitationData(updatedInvitation);
  } catch (error) {
    console.error('Failed to update pending invitation status:', error);
    return null;
  }
} 