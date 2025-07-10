export const getPrice = async (currency: string = "usd"): Promise<{ [key: string]: number }> => {
  const coins = ["bitcoin", "ethereum", "tether", "bridged-usdc"].join(",")

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currency}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error("failed to fetch price")
  }

  const data = await res.json()
  return {
    BTC: data.bitcoin[currency] as number,
    ETH: data.ethereum[currency] as number,
    USDT: data.tether[currency] as number,
    USDC: data["bridged-usdc"][currency] as number,
  }
}