import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';

// PUT /api/security/layers/toggle - Enable/disable security layer
export async function PUT(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    
    const body = await request.json();
    const { authMethodId, layerId, isEnabled } = body;
    
    if (!authMethodId || !layerId || typeof isEnabled !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing required fields: authMethodId, layerId, isEnabled' },
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
    
    const targetLayer = currentLayers[layerIndex];
    
    // Prevent disabling fallback layers
    if (!isEnabled && targetLayer.isFallback) {
      return NextResponse.json(
        { error: 'Cannot disable fallback security layer' },
        { status: 400 }
      );
    }
    
    const updatedLayers = [...currentLayers];
    updatedLayers[layerIndex] = {
      ...targetLayer,
      isEnabled: isEnabled
    };
    
    // Update user's security layers
    const updatedUser = await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedLayers
    });
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to toggle security layer' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      updatedLayer: updatedLayers[layerIndex],
      securityLayers: updatedUser.walletSettings?.securityLayers 
    });
  } catch (error) {
    console.error('Error in PUT /api/security/layers/toggle:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}