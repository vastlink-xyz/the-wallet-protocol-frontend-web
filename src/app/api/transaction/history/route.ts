import { NextResponse } from 'next/server';
import { fetchBtcTransactionHistory } from '@/lib/web3/btc';
import { fetchEthTransactionHistory } from '@/lib/web3/eth';

/**
 * API endpoint to fetch transaction history for ETH or BTC
 * 
 * Query parameters:
 * - type: 'eth' or 'btc'
 * - address: wallet address
 * - page: page number (optional, default: 1, used for ETH)
 * - limit: items per page (optional, default depends on type)
 * - lastTxid: last transaction ID for pagination (optional, used for BTC)
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type')?.toLowerCase();
  const address = url.searchParams.get('address');
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '25');
  const lastTxid = url.searchParams.get('lastTxid') || undefined;

  // Validate required parameters
  if (!type || !['eth', 'btc'].includes(type)) {
    return NextResponse.json(
      { error: 'Missing or invalid type parameter. Must be "eth" or "btc".' }, 
      { status: 400 }
    );
  }

  if (!address) {
    return NextResponse.json(
      { error: 'Address parameter is required.' }, 
      { status: 400 }
    );
  }

  try {
    let result;
    
    // Call appropriate function based on type
    if (type === 'btc') {
      // For BTC, we use cursor-based pagination with lastTxid
      result = await fetchBtcTransactionHistory(address, limit, lastTxid);
    } else {
      // For ETH, we use page-based pagination
      result = await fetchEthTransactionHistory(address, page, limit);
    }

    return NextResponse.json({
      type,
      address,
      page: type === 'eth' ? page : undefined,
      limit,
      ...result
    });
    
  } catch (error) {
    console.error(`Error fetching ${type.toUpperCase()} transaction history:`, error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : `Failed to fetch ${type.toUpperCase()} transaction history` }, 
      { status: 500 }
    );
  }
}
