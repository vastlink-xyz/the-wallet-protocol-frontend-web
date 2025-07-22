import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';

// PUT /api/security/layers/update - Update security layer configuration
export async function PUT(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    
    const body = await request.json();
    const { authMethodId, layerId, config } = body;
    
    if (!authMethodId || !layerId || !config) {
      return NextResponse.json(
        { error: 'Missing required fields: authMethodId, layerId, config' },
        { status: 400 }
      );
    }
    
    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    const currentLayers = user.walletSettings?.securityLayers || [];
    const layerIndex = currentLayers.findIndex(layer => layer.id === layerId);
    
    if (layerIndex === -1) {
      return NextResponse.json(
        { error: 'Security layer not found' },
        { status: 404 }
      );
    }
    
    const updatedLayers = [...currentLayers];
    updatedLayers[layerIndex] = {
      ...updatedLayers[layerIndex],
      config: config
    };
    
    // Update user's security layers
    const updatedUser = await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedLayers
    });
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to update security layer' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      updatedLayer: updatedLayers[layerIndex],
      securityLayers: updatedUser.walletSettings?.securityLayers 
    });
  } catch (error) {
    console.error('Error in PUT /api/security/layers/update:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}