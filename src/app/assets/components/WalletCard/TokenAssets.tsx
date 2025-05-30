import { CopyAddress } from "@/components/ui/CopyAddress"
import { fetchBtcBalance } from "@/lib/web3/btc"
import { fetchERC20TokenBalance, fetchEthBalance } from "@/lib/web3/eth"
import { formatBalance } from "@/lib/web3/format"
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token"
import { Loader2, RefreshCcw } from "lucide-react"
import { useEffect, useState } from "react"

export type TokenData = {
  iconUrl: string
  symbol: string
  balance: string
  address: string
  loading: boolean
  chainType: string
  chainName: string
  contractAddress?: string
  decimals: number
}

interface TokenAssetsProps {
  btcAddress: string
  ethAddress: string
}

const supportedTokens = Object.values(SUPPORTED_TOKENS_INFO)

const addressByTokenSymbol = (tokenSymbol: TokenType, btcAddress: string, ethAddress: string) => {
  const tokenInfo = SUPPORTED_TOKENS_INFO[tokenSymbol]
  if (tokenInfo.chainType === 'UTXO') return btcAddress
  if (tokenInfo.chainType === 'EVM') return ethAddress
  return ''
}

export function TokenAssets({ btcAddress, ethAddress }: TokenAssetsProps) {
  const [tokenDataList, setTokenDataList] = useState<TokenData[]>([])

  // Initialize token data
  useEffect(() => {
    console.log(btcAddress, ethAddress)
    setTokenDataList(supportedTokens.map((token) => ({
      iconUrl: token.iconUrl,
      symbol: token.symbol,
      balance: '0',
      address: addressByTokenSymbol(token.symbol, btcAddress, ethAddress),
      chainType: token.chainType,
      chainName: token.chainName,
      contractAddress: token.contractAddress,
      decimals: token.decimals,
      loading: false // Set to false initially, will be set to true when loading starts
    })))
  }, [btcAddress, ethAddress])

  // Function to load token balance
  const loadTokenBalance = async (token: TokenData) => {
    try {
      // Set loading state to true
      setTokenDataList(prev => 
        prev.map(t => t.symbol === token.symbol ? { ...t, loading: true } : t)
      );
      
      let balance: string = '0';
      
      // Get balance
      if (token.symbol === 'BTC') {
        // fetchBtcBalance accepts string type address
        balance = (await fetchBtcBalance(token.address))?.toString() || '0';
      } else if (token.symbol === 'ETH') {
        // fetchEthBalance returns string type directly
        balance = await fetchEthBalance(token.address, token.chainName) || '0';
      } else if (token.chainType === 'EVM' && token.contractAddress) {
        balance = await fetchERC20TokenBalance({
          address: token.address,
          tokenAddress: token.contractAddress,
          decimals: token.decimals,
          chainName: token.chainName,
        })
      }
      balance = formatBalance(balance)
      
      // Update balance and set loading to false
      setTokenDataList(prev => 
        prev.map(t => t.symbol === token.symbol ? { ...t, balance, loading: false } : t)
      );
    } catch (error) {
      console.error(`Error loading ${token.symbol} balance:`, error);
      // Set loading to false even when error occurs
      setTokenDataList(prev => 
        prev.map(t => t.symbol === token.symbol ? { ...t, loading: false } : t)
      );
    }
  };

  // Automatically load balances when token list is initialized or addresses change
  useEffect(() => {
    if (tokenDataList.length > 0) {
      // Load balance for each token that has an address
      tokenDataList.forEach(token => {
        if (token.address) {
          loadTokenBalance(token);
        }
      });
    }
  }, [tokenDataList.length]); // Only trigger when tokenDataList length changes to avoid circular dependency

  return (
    <div className="space-y-3 py-2 my-12">
      {tokenDataList.map((token) => (
        <div key={token.symbol} className="flex items-center justify-between py-1 w-[600px] mx-auto">
          <div className="flex items-center space-x-2 mb-2">
            <img 
              src={token.iconUrl} 
              alt={token.symbol} 
              className="w-8 h-8 rounded-full mt-4" 
            />
            <div className="flex flex-col relative">
              <span className="font-medium text-gray-700">{token.symbol}</span>
              <CopyAddress
                textToCopy={token.address}
                className="absolute -bottom-4 left-0 text-xs text-gray-500"
                iconSize={12}
              />
            </div>
          </div>
          <div>
            {token.loading ? (
              <Loader2 className="h-4 w-4 animate-spin inline mr-2" />
            ) : (
              <div className="flex items-center">
                <span className="font-medium text-xl">{token.balance}</span>
                <RefreshCcw 
                  className="h-4 w-4 ml-2 cursor-pointer text-gray-500 hover:text-gray-700" 
                  onClick={() => loadTokenBalance(token)}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
