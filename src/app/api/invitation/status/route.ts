import { NextRequest, NextResponse } from 'next/server';
import { PendingInvitation } from '../models';
import { updatePendingInvitationStatus, updatePendingInvitationStatusByEmail } from '../storage';

/**
 * Update pending invitation status
 */
export async function PUT(request: NextRequest) {
  try {
    const invitationId = request.nextUrl.searchParams.get('id');

    const { email, status } = await request.json();

    // Validate status
    const validStatuses = ['pending', 'registered', 'completed', 'expired', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status. Must be one of: ' + validStatuses.join(', ') },
        { status: 400 }
      );
    }

    let result: PendingInvitation[] = [];

    if (invitationId) {
      // Update the invitation status
      const updatedInvitation = await updatePendingInvitationStatus(invitationId, status);
      if (updatedInvitation) {
        result.push(updatedInvitation);
      }
    } else if (email) {
      const updatedInvitations = await updatePendingInvitationStatusByEmail(email, status);
      if (updatedInvitations.length > 0) {
        result.push(...updatedInvitations);
      }
    } else {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: invitationId or email' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Invitation status updated successfully',
      data: result,
    });
  } catch (error) {
    console.error('Failed to update invitation status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update invitation status' },
      { status: 500 }
    );
  }
}
