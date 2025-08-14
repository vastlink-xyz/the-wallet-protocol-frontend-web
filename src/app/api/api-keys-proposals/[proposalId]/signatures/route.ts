import { NextRequest, NextResponse } from 'next/server';
import { getAPIKeysProposalById } from '../../storage';

// GET: Retrieve signatures for an API Keys proposal
export async function GET(
  request: NextRequest,
  { params }: { params: { proposalId: string } }
) {
  try {
    const { proposalId } = params;
    
    if (!proposalId) {
      return NextResponse.json({
        success: false,
        error: 'Proposal ID is required'
      }, { status: 400 });
    }

    const proposal = await getAPIKeysProposalById(proposalId);

    if (!proposal) {
      return NextResponse.json({
        success: false,
        error: 'Proposal not found'
      }, { status: 404 });
    }

    // Extract signatures from the proposal
    const signatures = proposal.signatures?.map((sig: any) => sig.signature) || [];

    return NextResponse.json({
      success: true,
      data: signatures,
      signatures: signatures, // Also provide under 'signatures' key for compatibility
      count: signatures.length
    });

  } catch (error) {
    console.error('API Keys Proposal signatures GET error:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to retrieve signatures'
    }, { status: 500 });
  }
}