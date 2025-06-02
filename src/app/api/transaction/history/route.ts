import { NextResponse } from 'next/server';
import { fetchBtcTransactionHistory } from '@/lib/web3/btc';
import { fetchEthTransactionHistory } from '@/lib/web3/eth';
import { getChainIdByChainName, SUPPORTED_TOKENS_INFO } from '@/lib/web3/token';
import { TokenType } from '@/lib/web3/token';
import { log } from '@/lib/utils';

/**
 * API endpoint to fetch transaction history for ETH or BTC
 * 
 * Query parameters:
 * - tokenType: 'ETH', 'BTC', etc.
 * - address: wallet address
 * - lastId: last transaction ID for pagination (for ETH this is cursor, for BTC this is txid)
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const address = url.searchParams.get('address');
  const tokenType = url.searchParams.get('tokenType');
  const lastId = url.searchParams.get('lastId') || undefined;

  if (!address || !tokenType) {
    return NextResponse.json(
      { error: 'Address and tokenType are required.' }, 
      { status: 400 }
    );
  }

  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType as TokenType];
  if (!tokenInfo) {
    return NextResponse.json(
      { error: `Token type ${tokenType} is not supported.` },
      { status: 400 }
    );
  }

  try {
    // Default response structure
    const defaultResponse = {
      transactions: [],
      lastId: null,
      hasMore: false
    };
    
    if (tokenInfo.chainType === 'UTXO') {
      const btcResult = await fetchBtcTransactionHistory({
        btcAddress: address,
        lastTxid: lastId,
      });
      
      return NextResponse.json({
        transactions: btcResult?.transactions || [],
        lastId: btcResult?.lastId || null, 
        hasMore: !!btcResult?.lastId
      });
    } else if (tokenInfo.chainType === 'EVM') {
      const ethResult = await fetchEthTransactionHistory({
        address,
        chain: getChainIdByChainName(tokenInfo.chainName),
        cursor: lastId,
        contractAddress: tokenInfo.contractAddress,
      });
      
      return NextResponse.json({
        transactions: ethResult?.transactions || [],
        lastId: ethResult?.cursor || null,
        hasMore: !!ethResult?.cursor
      });
    }
    
    // Unsupported chain type
    return NextResponse.json(defaultResponse);
    
  } catch (error) {
    console.error(`Error fetching ${tokenType} transaction history:`, error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : `Failed to fetch ${tokenType} transaction history` }, 
      { status: 500 }
    );
  }
}
