import { NextRequest, NextResponse } from 'next/server';
import { getProposalById } from '../../storage';

// GET /api/multisig/messages/signatures?proposalId=xxx&walletId=xxx
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const proposalId = searchParams.get('proposalId');
    const walletId = searchParams.get('walletId');

    if (!proposalId || !walletId) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing proposalId or walletId parameter' 
        },
        { status: 400 }
      );
    }

    // Get proposal data
    const proposal = await getProposalById(proposalId, walletId);
    
    if (!proposal) {
      return NextResponse.json(
        { 
          success: false,
          message: 'Proposal not found' 
        },
        { status: 404 }
      );
    }

    // Only return signature data
    const signatures = proposal.signatures.map(sig => sig.signature);

    return NextResponse.json({
      success: true,
      data: signatures
    });
  } catch (error) {
    console.error('Error in GET /api/multisig/messages/signatures:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while fetching signatures' 
      },
      { status: 500 }
    );
  }
} 