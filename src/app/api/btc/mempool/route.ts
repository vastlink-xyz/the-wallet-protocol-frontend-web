import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get('address');
  const endpoint = url.searchParams.get('endpoint') || 'txs';
  const lastId = url.searchParams.get('lastId');
  // The limit parameter is not applicable to this API, by default it returns up to 50 mempool transactions and 25 confirmed transactions

  if (!address) {
    return NextResponse.json({ error: 'BTC address is required' }, { status: 400 });
  }

  try {
    let apiUrl = '';
    
    // Determine which mempool.space API endpoint to use
    switch (endpoint) {
      case 'txs':
        // Get transactions for address - by default returns up to 50 mempool transactions and 25 confirmed transactions
        apiUrl = `https://mempool.space/testnet/api/address/${address}/txs`;
        
        // If lastId is provided, use after_txid parameter to request more confirmed transactions
        if (lastId) {
          apiUrl += `?after_txid=${lastId}`;
        }
        break;
      case 'utxo':
        // Get UTXOs for address
        apiUrl = `https://mempool.space/testnet/api/address/${address}/utxo`;
        break;
      default:
        // Default to transactions
        apiUrl = `https://mempool.space/testnet/api/address/${address}/txs`;
    }
    
    console.log('Calling mempool API:', apiUrl);
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Mempool API returned ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching BTC data from mempool.space:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch BTC data' }, 
      { status: 500 }
    );
  }
} 