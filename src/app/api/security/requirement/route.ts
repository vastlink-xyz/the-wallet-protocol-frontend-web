import { NextRequest, NextResponse } from 'next/server';
import { getUserSecurityLayers } from '../../user/storage';
import { SecurityRequirement } from '@/types/security';

// POST /api/security/requirement - Get user's configured security layers
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { authMethodId } = body;
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }
    
    // Get user's configured security layers (already filtered by isEnabled)
    const userSecurityLayers = await getUserSecurityLayers(authMethodId);
    
    const securityRequirement: SecurityRequirement = {
      requiresVerification: userSecurityLayers.length > 0,
      requiredLayers: userSecurityLayers
    };
    
    return NextResponse.json(securityRequirement);
  } catch (error) {
    console.error('Error in POST /api/security/requirement:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}