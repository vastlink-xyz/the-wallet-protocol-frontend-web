import { TransactionHistoryTableProps } from './TransactionHistoryTableProps';
import { DesktopTransactionHistoryTable } from './DesktopTransactionHistoryTable';
import { MobileTransactionHistoryTable } from './MobileTransactionHistoryTable';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token';
import { useTranslations } from 'next-intl';

export const openTxPage = (tokenType: TokenType, txid: string) => {
  const url = `${SUPPORTED_TOKENS_INFO[tokenType].explorerBaseUrl}/tx/${txid}`;
  window.open(url, '_blank');
};

export function TransactionHistoryTable({
  isLoading,
  data,
  isLoadingMore,
  hasMore,
  onLoadMore,
}: TransactionHistoryTableProps) {
  const t = useTranslations("TransactionHistory")

  return (
    <div className="space-y-2">
      {/* desktop */}
      <DesktopTransactionHistoryTable
        className="hidden laptop:block"
        data={data}
        isLoading={isLoading}
      />

      {/* mobile */}
      <MobileTransactionHistoryTable
        className="flex laptop:hidden"
        data={data}
        isLoading={isLoading}
      />

      {hasMore && (
        <div className="pt-4 text-center">
          <Button
            variant="outline"
            onClick={onLoadMore}
            disabled={isLoading || isLoadingMore}
          >
            {isLoadingMore ? (
              <Loader2Icon className="animate-spin" />
            ) : t('load_more')}
          </Button>
        </div>
      )}
    </div>
  );
}
