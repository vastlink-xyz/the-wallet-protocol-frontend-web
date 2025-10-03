import { NextRequest, NextResponse } from 'next/server';
import { getUser, updateUserWalletSettings } from '../../../user/storage';
import { SecurityLayer, SecurityLayerType } from '@/types/security';
import { authenticateMultiProviderSession } from '@/lib/auth/multi-provider-auth';
import { hasRecentOtpAuthentication } from '@/lib/auth/hasRecentOtpAuthentication';
import { verifyStytchDataExists } from '../stytchValidation';
import { SecurityLayerService } from '@/services/securityLayerService';

// POST /api/security/layers/add - Add a new security layer
export async function POST(request: NextRequest) {
  try {
    const authResult = await authenticateMultiProviderSession(request);
    const { user: authenticatedUser, token } = authResult;
    
    const body = await request.json();
    const { layerType, config } = body;
    
    const authMethodId = authenticatedUser?.authMethodId;
    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId in request body' },
        { status: 400 }
      );
    }
    
    if (!layerType || !config) {
      return NextResponse.json(
        { error: 'Missing layerType or config' },
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
    
    // Validate layer type
    if (!SecurityLayerService.validateLayerType(layerType)) {
      return NextResponse.json(
        { error: `Unsupported layer type: ${layerType}` },
        { status: 400 }
      );
    }

    const hasRecent = await hasRecentOtpAuthentication(token);
    if (!hasRecent) {
      return NextResponse.json({ requiresMfa: true });
    }
    
    // Get current security layers array
    const securityLayers = user.walletSettings?.securityLayers || [];
    const { category, priority } = SecurityLayerService.getCategoryAndPriority(layerType);
    
    // Check if layer type already exists
    const existingLayer = SecurityLayerService.findLayerByType(securityLayers, layerType);
    if (existingLayer) {
      // If layer exists but is disabled, enable it instead of creating new one
      if (!existingLayer.isEnabled && (layerType === 'TOTP' || layerType === 'WHATSAPP_OTP' || layerType === 'PIN')) {
        // For Stytch-based layers, verify the data still exists in Stytch
        if (layerType !== 'PIN') {
          const stytchDataExists = await verifyStytchDataExists(authMethodId, layerType);
          if (!stytchDataExists) {
            return NextResponse.json(
              { error: `${layerType} data not found in Stytch. Please set up ${layerType} first.` },
              { status: 400 }
            );
          }
        }

        // Enable the existing layer
        const updatedSecurityLayers = securityLayers.map(layer => 
          layer.id === existingLayer.id 
            ? { ...layer, isEnabled: true, config: config }
            : layer
        );

        const updatedUser = await updateUserWalletSettings(authMethodId, {
          securityLayers: updatedSecurityLayers
        });

        if (!updatedUser) {
          return NextResponse.json(
            { error: 'Failed to enable security layer' },
            { status: 500 }
          );
        }

        const updatedLayer = updatedSecurityLayers.find(l => l.id === existingLayer.id);
        const allLayers = updatedUser.walletSettings?.securityLayers || [];
        
        return NextResponse.json({ 
          success: true, 
          updatedLayer,
          securityLayers: SecurityLayerService.sortLayersByPriority(allLayers)
        });
      }
      
      return NextResponse.json(
        { 
          error: 'Security layer configuration already exists',
          layerId: existingLayer.id,
          isEnabled: existingLayer.isEnabled
        },
        { status: 409 }
      );
    }

    // For TOTP and WHATSAPP_OTP, verify they exist in Stytch first
    if (layerType === 'TOTP' || layerType === 'WHATSAPP_OTP') {
      const stytchDataExists = await verifyStytchDataExists(authMethodId, layerType);
      if (!stytchDataExists) {
        return NextResponse.json(
          { error: `${layerType} data not found in Stytch. Please set up ${layerType} first.` },
          { status: 400 }
        );
      }
    }
    
    const newLayer = SecurityLayerService.createNewLayer(layerType as SecurityLayerType, config);
    
    // Add new layer to security layers array
    const updatedSecurityLayers = [...securityLayers, newLayer];
    
    // Update user's security layers
    const updatedUser = await updateUserWalletSettings(authMethodId, {
      securityLayers: updatedSecurityLayers
    });
    
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'Failed to add security layer' },
        { status: 500 }
      );
    }
    
    const allLayers = updatedUser.walletSettings?.securityLayers || [];
    
    return NextResponse.json({ 
      success: true, 
      newLayer: newLayer,
      securityLayers: SecurityLayerService.sortLayersByPriority(allLayers)
    });
  } catch (error) {
    console.error('Error in POST /api/security/layers/add:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
