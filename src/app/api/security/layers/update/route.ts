import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { authenticateStytchSession } from '../../../stytch/sessionAuth';
import { verifyStytchDataExists } from '../stytchValidation';

// PUT /api/security/layers/update - Update security layer fields (isEnabled, config, etc.)
export async function PUT(request: NextRequest) {
  try {
    const session = await authenticateStytchSession(request);
    
    const body = await request.json();
    const { authMethodId, layerId, ...updates } = body;
    
    if (!authMethodId || !layerId) {
      return NextResponse.json(
        { error: 'Missing required fields: authMethodId, layerId' },
        { status: 400 }
      );
    }

    // Check if there are any fields to update
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: 'No update fields provided' },
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
    if (updates.isEnabled === false && targetLayer.isFallback) {
      return NextResponse.json(
        { error: 'Cannot disable fallback security layer' },
        { status: 400 }
      );
    }

    // When enabling TOTP or WHATSAPP_OTP layers, verify Stytch data exists
    if (updates.isEnabled === true && (targetLayer.type === 'TOTP' || targetLayer.type === 'WHATSAPP_OTP')) {
      const stytchDataExists = await verifyStytchDataExists(session.user_id, targetLayer.type);
      if (!stytchDataExists) {
        return NextResponse.json(
          { error: `${targetLayer.type} data not found in Stytch. Cannot enable layer.` },
          { status: 400 }
        );
      }
    }
    
    const updatedLayers = [...currentLayers];
    updatedLayers[layerIndex] = {
      ...targetLayer,
      ...updates
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