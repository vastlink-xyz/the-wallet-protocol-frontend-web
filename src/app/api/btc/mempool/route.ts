import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get('address');
  const endpoint = url.searchParams.get('endpoint') || 'txs';
  const lastId = url.searchParams.get('lastId');
  // The limit parameter is not applicable to this API, by default it returns up to 25 confirmed transactions

  if (!address) {
    return NextResponse.json({ error: 'BTC address is required' }, { status: 400 });
  }

  const baseUrl = 'https://blockstream.info/testnet/api';

  try {
    let fullApiUrl = '';

    // Determine which API endpoint to use
    switch (endpoint) {
      case 'txs':
        // Get transactions for address
        fullApiUrl = `${baseUrl}/address/${address}/txs`;

        // If lastId is provided, use after_txid parameter to request more confirmed transactions
        if (lastId) {
          fullApiUrl += `?after_txid=${lastId}`;
        }
        break;
      case 'utxo':
        // Get UTXOs for address
        fullApiUrl = `${baseUrl}/address/${address}/utxo`;
        break;
      default:
        // Default to transactions
        fullApiUrl = `${baseUrl}/address/${address}/txs`;
    }

    console.log(`Calling Blockstream API:`, fullApiUrl);
    const response = await fetch(fullApiUrl);

    if (!response.ok) {
      throw new Error(`Blockstream API returned ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`Successfully fetched data from Blockstream API`);
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching BTC data from Blockstream API:`, error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch BTC data from Blockstream API' },
      { status: 500 }
    );
  }
}