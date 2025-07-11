const priceData = {
  data: {
    BTC: 0,
    ETH: 0,
    USDT: 0,
    USDC: 0,
    TSTLPX: 0,
    VAST: 0,
  },
  updatedAt: 0,
};

export const getPrice = async (currency: string = 'usd'): Promise<{ [key: string]: number }> => {
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
    TSTLPX: 0.01,
    VAST: 0.01,
  };
  priceData.updatedAt = Date.now();

  return priceData.data;
};
