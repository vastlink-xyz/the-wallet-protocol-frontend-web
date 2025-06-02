import { useEffect, useMemo, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SUPPORTED_TOKENS_ARRAY, SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';
import { TransactionHistoryItem, TransactionItem } from './TransactionHistoryItem';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CopyAddress } from '../ui/CopyAddress';
import { toast } from 'react-toastify';

export function TransactionHistory({
  addresses,
}: {
  addresses: MultisigWalletAddresses
}) {
  const [selectedToken, setSelectedToken] = useState<TokenType>('BTC');
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastId, setLastId] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const address = useMemo(() => {
    const addressKey = SUPPORTED_TOKENS_INFO[selectedToken].addressKey;
    return addresses[addressKey as keyof MultisigWalletAddresses] || null;
  }, [addresses, selectedToken]);

  // initialize the transaction history
  useEffect(() => {
    if (addresses) {
      const addressKey = SUPPORTED_TOKENS_INFO[selectedToken].addressKey;
      if (addressKey in addresses) {
        const addr = addresses[addressKey as keyof MultisigWalletAddresses] || null;
        // Reset transactions and lastId when changing token
        setTransactions([]);
        setLastId(null);
        setHasMore(false);
        if (addr) {
          fetchTransactions(addr, selectedToken);
        }
      }
    }
  }, [addresses]);

  useEffect(() => {
    if (address) {
      fetchTransactions(address, selectedToken);
    }
  }, [address, selectedToken]);
  
  const fetchTransactions = async (address: string, tokenType: TokenType) => {
    try {
      setIsLoading(true);
      // Build URL with query parameters
      const params = {
        address,
        tokenType,
      };
      
      const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/api/transaction/history`);
      url.search = new URLSearchParams(params as Record<string, string>).toString();
      
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }
      
      const data = await response.json();
      log('Transaction data:', data);
      
      if (data && data.transactions) {
        // Format addresses for display
        const formattedTransactions = data.transactions.map((tx: TransactionItem) => ({
          ...tx,
          from: tx.from,
          to: tx.to
        }));
        
        setTransactions(formattedTransactions);
        setLastId(data.lastId);
        setHasMore(data.hasMore);
      } else {
        setTransactions([]);
        setLastId(null);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching transaction history:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to fetch transactions";
      toast.error(errorMessage);
      setTransactions([]);
      setLastId(null);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Load more transactions
  const handleLoadMore = async () => {
    if (!lastId || !address || isLoadingMore) return;
    
    setIsLoadingMore(true);
    
    try {
      // Build URL with pagination parameters
      const params = {
        address,
        tokenType: selectedToken,
        lastId,
      };
      
      const url = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/api/transaction/history`);
      url.search = new URLSearchParams(params as Record<string, string>).toString();
      
      const response = await fetch(url.toString());
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }
      
      const data = await response.json();
      log('More transaction data:', data);
      
      if (data && data.transactions && data.transactions.length > 0) {
        // Format addresses for display
        const formattedTransactions = data.transactions.map((tx: TransactionItem) => ({
          ...tx,
          from: tx.from,
          to: tx.to
        }));
        
        setTransactions(prev => [...prev, ...formattedTransactions]);
        setLastId(data.lastId);
        setHasMore(data.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error loading more transactions:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to load more transactions";
      toast.error(errorMessage);
      setHasMore(false);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Handle token change event
  const handleTokenChange = (value: string) => {
    setSelectedToken(value as TokenType);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Transaction History</h1>
        <Select value={selectedToken} onValueChange={handleTokenChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select token" />
          </SelectTrigger>
          <SelectContent>
            {SUPPORTED_TOKENS_ARRAY.map((token) => (
              <SelectItem key={token.symbol} value={token.symbol}>
                <div className="flex items-center gap-2">
                  {token.iconUrl && (
                    <img src={token.iconUrl} alt={token.name} className="w-5 h-5" />
                  )}
                  {token.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading transactions...</div>
      ) : (
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-md">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{selectedToken} Address: </span>
              <CopyAddress className="text-xs break-all" textToCopy={address || ''} />
            </div>
          </div>

          {transactions.length > 0 ? (
            <div className="space-y-2">
              {transactions.map((transaction) => (
                <TransactionHistoryItem 
                  key={transaction.txid} 
                  transaction={transaction} 
                />
              ))}
              
              {hasMore && (
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore ? 'Loading...' : 'Load More'}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No transactions found for this token
            </div>
          )}
        </div>
      )}
    </div>
  );
}
