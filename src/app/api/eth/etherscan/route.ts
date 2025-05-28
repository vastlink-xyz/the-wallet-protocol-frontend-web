import { log } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get('address');
  const action = url.searchParams.get('action') || 'txlist';
  const page = url.searchParams.get('page') || '1';
  const limit = url.searchParams.get('limit') || '20';

  if (!address) {
    return NextResponse.json({ error: 'ETH address is required' }, { status: 400 });
  }

  const apiKey = process.env.ETH_SCAN_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Etherscan API key is not configured' }, { status: 500 });
  }

  try {
    let apiUrl = '';
    
    // Determine which Etherscan API endpoint to use
    switch (action) {
      case 'txlist':
        // Get normal transactions
        apiUrl = `${process.env.ETH_SCAN_API}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${limit}&sort=desc&apikey=${apiKey}`;
        break;
      case 'tokentx':
        // Get ERC20 token transfer events
        apiUrl = `${process.env.ETH_SCAN_API}?module=account&action=tokentx&address=${address}&page=${page}&offset=${limit}&sort=desc&apikey=${apiKey}`;
        break;
      case 'balance':
        // Get ETH balance
        apiUrl = `${process.env.ETH_SCAN_API}?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`;
        break;
      default:
        // Default to transaction list
        apiUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${limit}&sort=desc&apikey=${apiKey}`;
    }
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Etherscan API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching ETH data from Etherscan:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch ETH data' }, 
      { status: 500 }
    );
  }
} 