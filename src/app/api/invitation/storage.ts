import { connectToDatabase } from '../user/models';
import { PendingInvitation, PendingInvitationModel, PendingWalletInvitation, PendingWalletInvitationModel } from './models';
import crypto from 'crypto';

// Helper function to extract invitation data safely from Mongoose document
function extractInvitationData(doc: any): PendingInvitation | null {
  if (!doc) return null;

  return {
    ...doc.toObject?.() || doc,
    id: doc.id || doc._id?.toString()
  };
}

// Helper function to extract wallet invitation data safely from Mongoose document
function extractWalletInvitationData(doc: any): PendingWalletInvitation | null {
  if (!doc) return null;

  return {
    ...doc.toObject?.() || doc,
    id: doc.id || doc._id?.toString(),
    pendingInvitees: doc.pendingInvitees || []
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

    if (!updatedInvitation) {
      console.error(`Failed to update invitation status: Invitation not found for id ${id}`);
      return null;
    }

    return extractInvitationData(updatedInvitation);
  } catch (error) {
    console.error('Failed to update pending invitation status:', error);
    return null;
  }
}

/**
 * Create a new pending wallet invitation
 */
export async function createPendingWalletInvitation({
  walletId,
  inviterAuthMethodId,
  inviterEmail,
  inviterEthAddress,
  walletName,
  pendingInvitees,
  targetThreshold,
  targetSignersCount,
  targetWalletName,
  targetMfaSettings,
  signersToRemove
}: {
  walletId: string;
  inviterAuthMethodId: string;
  inviterEmail: string;
  inviterEthAddress: string;
  walletName: string;
  pendingInvitees: {
    email: string;
    invitationId: string;
    isRegistered: boolean;
    authMethodId?: string;
  }[];
  targetThreshold: number;
  targetSignersCount: number;
  targetWalletName?: string;
  targetMfaSettings?: any;
  signersToRemove?: any[];
}): Promise<PendingWalletInvitation> {
  try {
    await connectToDatabase();

    // Generate unique ID for the wallet invitation
    const id = crypto.randomUUID();

    const walletInvitationData = {
      id,
      walletId,
      inviterAuthMethodId,
      inviterEmail,
      inviterEthAddress,
      walletName,
      pendingInvitees,
      targetThreshold,
      targetSignersCount,
      ...(targetWalletName && { targetWalletName }),
      ...(targetMfaSettings && { targetMfaSettings }),
      ...(signersToRemove && signersToRemove.length > 0 && { signersToRemove }),
      status: 'pending'
    };

    console.log('Creating PendingWalletInvitation with data:', {
      ...walletInvitationData,
      targetWalletName,
      targetMfaSettings,
      signersToRemove
    });

    const newWalletInvitation = await PendingWalletInvitationModel.create(walletInvitationData);
    return extractWalletInvitationData(newWalletInvitation) as PendingWalletInvitation;
  } catch (error) {
    console.error('Failed to create pending wallet invitation:', error);
    throw error;
  }
}

/**
 * Update a pending wallet invitation - mark an invitee as registered
 */
export async function updatePendingWalletInvitationInvitee(
  walletId: string,
  invitationId: string,
  isRegistered: boolean,
  authMethodId?: string
): Promise<PendingWalletInvitation | null> {
  try {
    await connectToDatabase();

    const updateFields: any = {
      'pendingInvitees.$.isRegistered': isRegistered,
      updatedAt: new Date()
    };

    // Add authMethodId if provided
    if (authMethodId) {
      updateFields['pendingInvitees.$.authMethodId'] = authMethodId;
    }

    const updatedWalletInvitation = await PendingWalletInvitationModel.findOneAndUpdate(
      {
        walletId,
        'pendingInvitees.invitationId': invitationId
      },
      {
        $set: updateFields
      },
      { new: true }
    ).lean();

    return extractWalletInvitationData(updatedWalletInvitation);
  } catch (error) {
    console.error('Failed to update pending wallet invitation invitee:', error);
    return null;
  }
}

/**
 * Update a pending wallet invitation status
 */
export async function updatePendingWalletInvitationStatus(
  id: string,
  status: PendingWalletInvitation['status']
): Promise<PendingWalletInvitation | null> {
  try {
    await connectToDatabase();

    const updatedWalletInvitation = await PendingWalletInvitationModel.findOneAndUpdate(
      { id },
      {
        status,
        updatedAt: new Date()
      },
      { new: true }
    ).lean();

    return extractWalletInvitationData(updatedWalletInvitation);
  } catch (error) {
    console.error('Failed to update pending wallet invitation status:', error);
    return null;
  }
}

/**
 * Find pending wallet invitations that contain a specific invitation ID
 */
export async function findPendingWalletInvitationsByInvitationId(invitationId: string): Promise<PendingWalletInvitation[]> {
  try {
    await connectToDatabase();

    const walletInvitations = await PendingWalletInvitationModel.find({
      'pendingInvitees.invitationId': invitationId,
      status: 'pending'
    }).lean();

    return walletInvitations
      .map(invitation => extractWalletInvitationData(invitation))
      .filter((invitation): invitation is PendingWalletInvitation => invitation !== null);
  } catch (error) {
    console.error('Failed to find pending wallet invitations by invitation id:', error);
    return [];
  }
}