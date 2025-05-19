import { NextRequest, NextResponse } from 'next/server';
import { getAllUsers } from '../storage';

// GET /api/user/all - Get all users
export async function GET(request: NextRequest) {
  try {
    const users = await getAllUsers();
    
    return NextResponse.json({
      success: true,
      count: users.length,
      users: users
    });
  } catch (error) {
    console.error('Error in GET /api/user/all:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'An error occurred while fetching all users' 
      },
      { status: 500 }
    );
  }
} 