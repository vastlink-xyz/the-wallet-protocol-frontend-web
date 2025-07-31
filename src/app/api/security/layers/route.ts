import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '../../user/storage';
import { SecurityLayerService } from '@/services/securityLayerService';

// GET /api/security/layers - Get user's security layers
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const authMethodId = searchParams.get('authMethodId');
    
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId parameter' },
        { status: 400 }
      );
    }
    
    const user = await getUser(authMethodId);
    
    // Return empty array if user not found or no security layers
    const securityLayers = user?.walletSettings?.securityLayers || [];
    
    return NextResponse.json({ 
      securityLayers: SecurityLayerService.sortLayersByPriority(securityLayers)
    });
  } catch (error) {
    console.error('Error in GET /api/security/layers:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}