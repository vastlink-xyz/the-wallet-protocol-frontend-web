import { addressByTokenSymbol } from '@/lib/web3/address';
import { fetchBtcBalance } from '@/lib/web3/btc';
import { fetchERC20TokenBalance, fetchEthBalance } from '@/lib/web3/eth';
import { getPrice } from '@/lib/web3/price';
import {
  SUPPORTED_TOKENS_ARRAY,
  TokenType
} from '@/lib/web3/token';
import { NextRequest, NextResponse } from 'next/server';
import { getUser } from '../storage';

export async function GET(request: NextRequest) {
  try {
    const authMethodId = request.nextUrl.searchParams.get('authMethodId');
    const currency = request.nextUrl.searchParams.get('currency') || 'usd';

    if (!authMethodId) {
      return NextResponse.json(
        { error: 'Missing authMethodId parameter' },
        { status: 400 }
      );
    }

    const user = await getUser(authMethodId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const price = await getPrice(currency);

    const tasks = SUPPORTED_TOKENS_ARRAY.map(async (token) => {
      const walletAddress = addressByTokenSymbol(token.symbol, user.addresses);

      let balance: number = 0;

      // Get balance
      if (token.symbol === 'BTC') {
        // fetchBtcBalance accepts string type address
        balance = await fetchBtcBalance(walletAddress);
      } else if (token.chainType === 'EVM' && !token.contractAddress) {
        // fetchEthBalance returns string type directly
        const value = await fetchEthBalance(walletAddress, token.chainName);
        balance = parseFloat(value);
      } else if (token.chainType === 'EVM' && token.contractAddress) {
        const value = await fetchERC20TokenBalance({
          address: walletAddress,
          tokenAddress: token.contractAddress,
          decimals: token.decimals,
          chainName: token.chainName,
        });

        balance = parseFloat(value);
      }

      const result: {
        symbol: TokenType;
        balance: number;
        value?: number;
      } = {
        symbol: token.symbol,
        balance,
      };

      if (token.symbol in price) {
        result.value = balance * price[token.symbol];
      }

      return result;
    });

    const results = await Promise.all(tasks);

    const total = results.reduce((acc, cur) => {
      if (cur.value) {
        return acc + cur.value;
      }
      return acc;
    }, 0);

    return NextResponse.json({
      total,
      currency,
      details: results,
    });
  } catch (error) {
    console.error('Error in GET /api/user/balance:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching balance' },
      { status: 500 }
    );
  }
}
