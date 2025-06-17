import { useEffect, useMemo, useState } from 'react';
import { SUPPORTED_TOKENS_INFO, TokenType } from "@/lib/web3/token";
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';
import { TransactionHistoryItem, TransactionItem } from './TransactionHistoryItem';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CopyAddress } from '../ui/CopyAddress';
import { toast } from 'react-toastify';
import { SelectToken } from '@/components/SelectToken';
import { LogoLoading } from '../LogoLoading';
import { Loader2 } from 'lucide-react';
import { TableList } from './TransactionHistoryTabls';

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
  
  // Fetch transaction history
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
        setTransactions(data.transactions);
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
  const handleTokenChange = (tokenSymbol: TokenType) => {
    setSelectedToken(tokenSymbol);
  };

  return (
    <div className="space-y-4">
      <SelectToken 
        onSelect={handleTokenChange}
        defaultValue={selectedToken}
        className="w-[180px]"
      />

      {isLoading ? (
        <LogoLoading />
      ) : (
        <div className="space-y-4">
          
          {transactions.length > 0 ? (
            <div className="space-y-2">
              {/* {transactions.map((transaction) => (
                <TransactionHistoryItem 
                  key={transaction.txid} 
                  transaction={transaction} 
                />
              ))} */}
              
              <TableList data={transactions} tokenType={selectedToken} isLoading={isLoading} />
              
              {hasMore && (
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore ? <Loader2 className="animate-spin" /> : 'Load More'}
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
