import { useCallback, useEffect, useMemo, useState } from 'react';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { MultisigWalletAddresses } from '@/app/api/multisig/storage';
import { log } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';
import { SelectToken } from '@/components/SelectToken';
import { Loader2 } from 'lucide-react';
import { LogoLoading } from '@/components/LogoLoading';
import { TableList, TransactionItem } from './TransactionHistoryTables';
import { headers } from 'next/headers';
import { addressByTokenSymbol } from '@/lib/web3/address';

export function TransactionHistory({
  addresses,
}: {
  addresses: MultisigWalletAddresses;
}) {
  const [selectedToken, setSelectedToken] = useState<TokenType | "all">("all");
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [lastId, setLastId] = useState<{ [key: string]: string | null } | null>(
    null
  );

  const hasMore = useMemo(() => {
    if (lastId === null) return null;

    if (selectedToken in lastId) {
      return lastId[selectedToken] !== null;
    }

    for (const key in lastId) {
      if (lastId[key] !== null) {
        return true;
      }
    }
    return false;
  }, [lastId, selectedToken]);

  // initialize the transaction history
  useEffect(() => {
    setTransactions([]);
    setLastId(null);
    fetchTransactions();
  }, [addresses]);

  useEffect(() => {
    fetchTransactions();
  }, [selectedToken]);

  // Fetch transaction history
  const fetchTransactions = useCallback(async () => {
    try {
      const params = [];
      if (selectedToken !== "all") {
        const address = addressByTokenSymbol(selectedToken, addresses);
        if (address) {
          params.push({ address, tokenType: selectedToken, lastId: null });
        }
      } else {
        for (const token in SUPPORTED_TOKENS_INFO) {
          const address = addressByTokenSymbol(token as TokenType, addresses);
          if (address) {
            params.push({ address, tokenType: token as TokenType, lastId: null });
          }
        }
      }

      if (params.length === 0) {
        return;
      }

      setIsLoading(true);

      const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/transaction/history`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: params ? JSON.stringify(params) : null,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();
      log('Transaction data:', data);

      if (data) {
        if (data.transactions) {
          setTransactions(data.transactions);
        } else {
          setTransactions([]);
        }

        if (data.metadata) {
          setLastId((prev) => {
            const newValue = prev ? { ...prev } : {};

            for (const item of data.metadata) {
              newValue[item.tokenType] = item.lastId;
            }
            return newValue;
          });
        } else {
          setLastId(null);
        }
      } else {
        setTransactions([]);
        setLastId(null);
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to fetch transactions';
      toast.error(errorMessage);
      setTransactions([]);
      setLastId(null);
    } finally {
      setIsLoading(false);
    }
  }, [selectedToken]);

  // Load more transactions
  const handleLoadMore = useCallback(async () => {
    if (!lastId || isLoadingMore) return;

    try {
      const params = [];
      if (selectedToken !== "all") {
        const address = addressByTokenSymbol(selectedToken, addresses);
        if (address && lastId[selectedToken]) {
          params.push({ address, tokenType: selectedToken, lastId: lastId[selectedToken] });
        }
      } else {
        for (const token in SUPPORTED_TOKENS_INFO) {
          if (lastId[token as TokenType] !== null) {
            const address = addressByTokenSymbol(token as TokenType, addresses);
            if (address) {
              params.push({ address, tokenType: token as TokenType, lastId: lastId[token] });
            }
          }
        }
      }

      if (params.length === 0) {
        return
      }

      setIsLoadingMore(true);

      const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/transaction/history`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: params ? JSON.stringify(params) : null,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }

      const data = await response.json();
      log('More transaction data:', data);

      if (data) {
        if (data.transactions && data.transactions.length > 0) {
          // Format addresses for display
          const formattedTransactions = data.transactions.map(
            (tx: TransactionItem) => ({
              ...tx,
              from: tx.from,
              to: tx.to,
            })
          );

          setTransactions((prev) => [...prev, ...formattedTransactions]);
        }

        if (data.metadata) {
          setLastId((prev) => {
            const newValue = prev ? { ...prev } : {};

            for (const item of data.metadata) {
              newValue[item.tokenType] = item.lastId;
            }
            return newValue;
          });
        }
      }
    } catch (error) {
      console.error('Error loading more transactions:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to load more transactions';
      toast.error(errorMessage);
      setLastId(null);
    } finally {
      setIsLoadingMore(false);
    }
  }, [selectedToken, lastId]);

  // Handle token change event
  const handleTokenChange = (tokenSymbol: TokenType | "all") => {
    setSelectedToken(tokenSymbol);
  };

  return (
    <div className="space-y-4">
      {lastId !== null && (<SelectToken
        className="w-[180px]"
        onSelect={handleTokenChange}
        defaultValue={selectedToken}
        includeAllOption
      />)}

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

              <TableList data={transactions} isLoading={isLoading} />

              {hasMore && (
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                  >
                    {isLoadingMore ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      'Load More'
                    )}
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
