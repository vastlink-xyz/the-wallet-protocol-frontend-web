import { TransactionHistoryTableProps } from './TransactionHistoryTableProps';
import { DesktopTransactionHistoryTable } from './DesktopTransactionHistoryTable';
import { MobileTransactionHistoryTable } from './MobileTransactionHistoryTable';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

export function TransactionHistoryTable({
  isLoading,
  data,
  isLoadingMore,
  hasMore,
  onLoadMore,
}: TransactionHistoryTableProps) {
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
            ) : (
              'Load More'
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
