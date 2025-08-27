const priceData: {
  data: { [key: string]: number };
  updatedAt: number;
} = {
  data: {},
  updatedAt: 0,
};

const SUPPORTED_TOKENS = [
  {
    symbol: 'BTC',
    xchainAsset: 'BTC.BTC',
  },
  {
    symbol: 'ETH',
    xchainAsset: 'ETH.ETH',
  },
  {
    symbol: 'USDT',
    xchainAsset: 'ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7',
  },
  {
    symbol: 'USDC',
    xchainAsset: 'ETH.USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48',
  },
];

export async function getPrice() {
  if (priceData.updatedAt > 0) {
    if (priceData.updatedAt > Date.now() - 60 * 60 * 1000) {
      return priceData.data;
    }
  }
  const res = await fetch('https://api.swapkit.dev/price', {
    method: 'POST',
    headers: {
      'HOST': 'api.swapkit.dev',
      'Content-Type': 'application/json',
      'x-api-key': '3a86e7e1-54fd-4766-8cf5-d16ae00dde1b',
    },
    body: JSON.stringify({
      tokens: SUPPORTED_TOKENS.map((v) => ({ identifier: v.xchainAsset })),
      metadata: true,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch price');
  }
  const data = await res.json();

  data.forEach((v: { identifier: string, price_usd: number }) => {
    const token = SUPPORTED_TOKENS.find(t => t.xchainAsset.toLowerCase() === v.identifier.toLowerCase());
    if (token) {
      priceData.data[token.symbol] = v.price_usd;
    }
  });

  priceData.data['LITKEY'] = 0.01;
  priceData.data['VAST'] = 0.01;

  priceData.updatedAt = Date.now();

  return priceData.data;
}


export const getPriceOld = async (currency: string = 'usd'): Promise<{ [key: string]: number }> => {
  if (priceData.updatedAt > 0) {
    if (priceData.updatedAt > Date.now() - 60 * 60 * 1000) {
      return priceData.data;
    }
  }

  const coins = ['bitcoin', 'ethereum', 'tether', 'bridged-usdc'].join(',');

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currency}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('failed to fetch price');
  }

  const data = await res.json();

  priceData.data = {
    BTC: data.bitcoin[currency] as number,
    ETH: data.ethereum[currency] as number,
    USDT: data.tether[currency] as number,
    USDC: data['bridged-usdc'][currency] as number,
    LITKEY: 0.01,
    VAST: 0.01,
  };
  priceData.updatedAt = Date.now();

  return priceData.data;
};
