import { NextRequest, NextResponse } from 'next/server';
import { updatePendingInvitationStatus } from '../storage';

/**
 * Update pending invitation status
 */
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { invitationId, status } = body;
    
    if (!invitationId || !status) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: invitationId and status' },
        { status: 400 }
      );
    }
    
    // Validate status
    const validStatuses = ['pending', 'registered', 'completed', 'expired', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid status. Must be one of: ' + validStatuses.join(', ') },
        { status: 400 }
      );
    }
    
    // Update the invitation status
    const updatedInvitation = await updatePendingInvitationStatus(invitationId, status);
    
    if (!updatedInvitation) {
      return NextResponse.json(
        { success: false, error: 'Invitation not found or failed to update' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Invitation status updated successfully',
      data: updatedInvitation
    });
  } catch (error) {
    console.error('Failed to update invitation status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update invitation status' },
      { status: 500 }
    );
  }
}
