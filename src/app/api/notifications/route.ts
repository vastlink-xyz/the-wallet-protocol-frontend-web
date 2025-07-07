import { NextRequest, NextResponse } from 'next/server';
import { notificationService } from '@/services/NotificationService';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const authMethodId = searchParams.get('authMethodId');
    const currentPath = searchParams.get('path') || '/';

    if (!authMethodId) {
      return NextResponse.json({ 
        success: false, 
        error: 'AuthMethodId is required' 
      }, { status: 400 });
    }

    const notifications = await notificationService.getNotifications({
      authMethodId,
      currentPath,
    });

    return NextResponse.json({
      success: true,
      data: {
        notifications,
        count: notifications.length,
      },
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch notifications' 
      },
      { status: 500 }
    );
  }
}