import { TransactionItem } from "@/types/transaction-item";

export interface TransactionHistoryTableProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  data: TransactionItem[];
  hasMore?: boolean;
  isLoadingMore?: boolean;
  onLoadMore?: () => void;
}