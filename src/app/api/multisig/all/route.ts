import { NextRequest } from 'next/server'
import { getWallets } from '../storage'

export async function GET(request: NextRequest) {
  try {
    const wallets = await getWallets()
    return Response.json({ success: true, data: wallets })
  } catch (error) {
    console.error('Error fetching all multisig wallets:', error)
    return Response.json(
      { success: false, error: "Failed to fetch all wallets" },
      { status: 500 }
    )
  }
} 