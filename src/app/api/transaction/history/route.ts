import { fetchBtcTransactionHistory } from '@/lib/web3/btc';
import { fetchEthTransactionHistory } from '@/lib/web3/eth';
import {
  getChainIdByChainName,
  SUPPORTED_TOKENS_INFO,
  TokenType,
} from '@/lib/web3/token';
import { fetchYellowstoneTransactionHistory } from '@/lib/web3/tstlpx';
import dayjs from "dayjs";
import { NextResponse } from 'next/server';

async function fetchTransactions(
  tokenType: TokenType,
  address: string,
  lastId: string | null,
) {
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenType];
  if (!tokenInfo) {
    throw new Error(`Token type ${tokenType} is not supported`);
  }

  let nextId: string | null = null

  let transactions: {
    tokenType: string;
    txid: string;
    value: string;
    from: string;
    to: string;
    timestamp: string;
    status: "confirmed" | "pending" | "failed";
    type: "send" | "receive";
  }[] = []

  if (tokenInfo.chainType === 'UTXO') {
    const btcResult = await fetchBtcTransactionHistory({
      btcAddress: address,
      lastTxid: lastId ? lastId : undefined,
    });

    transactions = btcResult?.transactions || []
    nextId = btcResult?.lastId || null
  } else if (tokenType === 'LITKEY') {
    // As tstlpx is not supported by the moralis api, use the yellowstone api to fetch the transaction history
    const yellowstoneResult = await fetchYellowstoneTransactionHistory({
      address,
      cursor: lastId ? lastId : undefined,
      contractAddress: tokenInfo.contractAddress,
    });

    transactions = yellowstoneResult?.transactions || []
    nextId = yellowstoneResult?.cursor || null
  } else if (tokenInfo.chainType === 'EVM') {
    const ethResult = await fetchEthTransactionHistory({
      address,
      chain: getChainIdByChainName(tokenInfo.chainName),
      cursor: lastId ? lastId : undefined,
      contractAddress: tokenInfo.contractAddress,
    });

    transactions = (ethResult?.transactions || []).map(tx => ({
      ...tx,
      tokenType,
    }))
    nextId = ethResult?.cursor || null
  }

  if (transactions.length === 0 || (lastId && lastId === nextId)) {
    nextId = null;
  }

  return {
    transactions: transactions.map((tx) => ({
      ...tx,
      tokenType,
    })),
    lastId: nextId,
    hasMore: !!nextId,
  };
}

/**
 * API endpoint to fetch transaction history for ETH or BTC
 *
 * Query parameters:
 * - tokenType: 'ETH', 'BTC', etc.
 * - address: wallet address
 * - lastId: last transaction ID for pagination (for ETH this is cursor, for BTC this is txid)
 */
export async function POST(request: Request) {
  let payload: {
    tokenType: TokenType;
    address: string;
    lastId: string | null;
  }[];

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'bad request data' }, { status: 500 });
  }

  try {
    const metadata = [];
    const transactions = [];
    for (const { tokenType, address, lastId } of payload) {
      const result = await fetchTransactions(tokenType, address, lastId);

      metadata.push({
        tokenType,
        lastId: result.lastId,
        hasMore: result.hasMore,
      });

      transactions.push(...result.transactions);
    }

    transactions.sort((a, b) => {
      const d1 = dayjs(a.timestamp)
      const d2 = dayjs(b.timestamp)

      if (d1.isValid() && d2.isValid()) {
        return d2.diff(d1, "second")
      }

      return d1.isValid() ? -1 : 1
    })

    return NextResponse.json({
      metadata,
      transactions,
    });
  } catch (error) {
    // console.error(`Error fetching ${tokenType} transaction history:`, error);
    return NextResponse.json(
      // { error: error instanceof Error ? error.message : `Failed to fetch ${tokenType} transaction history` },
      {
        error:
          error instanceof Error
            ? error.message
            : `Failed to fetch transaction history`,
      },
      { status: 500 }
    );
  }
}
