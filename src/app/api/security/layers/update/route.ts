import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayer } from '@/types/security';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { hasRecentOtpAuthentication } from '@/lib/auth/hasRecentOtpAuthentication';
import { verifyStytchDataExists } from '../stytchValidation';
import { SecurityLayerService } from '@/services/securityLayerService';

// PUT /api/security/layers/update - Update security layer fields (isEnabled, config, etc.)
export async function PUT(request: NextRequest) {
  try {
    const { user, token } = await authenticateMultiProviderSession(request);
    const authMethodId = user?.authMethodId;
    
    const body = await request.json();
    const { layerId, ...updates } = body;
    
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
    
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }
    
    // Find the layer in security layers array
    const securityLayers = user.walletSettings?.securityLayers || [];
    const layerIndex = securityLayers.findIndex(layer => layer.id === layerId);
    
    if (layerIndex === -1) {
      return NextResponse.json(
        { error: 'Security layer not found' },
        { status: 404 }
      );
    }
    
    const targetLayer = securityLayers[layerIndex];

    // require recent OTP/TOTP on session
    const hasRecent = await hasRecentOtpAuthentication(token);
    if (!hasRecent) {
      return NextResponse.json({ requiresMfa: true });
    }
    
    // Prevent disabling EMAIL_OTP layers (they can be disabled but not removed)
    if (updates.isEnabled === false && targetLayer.type === 'EMAIL_OTP') {
      // This is allowed, EMAIL_OTP can be disabled
    }

    // When enabling TOTP or WHATSAPP_OTP layers, verify Stytch data exists
    if (updates.isEnabled === true && (targetLayer.type === 'TOTP' || targetLayer.type === 'WHATSAPP_OTP')) {
      const stytchDataExists = await verifyStytchDataExists(authMethodId, targetLayer.type);
      if (!stytchDataExists) {
        return NextResponse.json(
          { error: `${targetLayer.type} data not found in Stytch. Cannot enable layer.` },
          { status: 400 }
        );
      }
    }
    
    // Update the layer in security layers array
    const updatedSecurityLayers = [...securityLayers];
    updatedSecurityLayers[layerIndex] = {
      ...targetLayer,
      ...updates
    };
    
    // Update user's security layers
    const updatedUser = await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedSecurityLayers
    });
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to update security layer' },
        { status: 500 }
      );
    }
    
    const allLayers = updatedUser.walletSettings?.securityLayers || [];
    
    return NextResponse.json({ 
      success: true, 
      updatedLayer: updatedSecurityLayers[layerIndex],
      securityLayers: SecurityLayerService.sortLayersByPriority(allLayers)
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