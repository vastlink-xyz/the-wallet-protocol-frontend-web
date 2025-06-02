import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { formatDistanceToNow, isToday, isYesterday, format } from 'date-fns';
import { CopyAddress } from '../ui/CopyAddress';
import { formatBalance } from '@/lib/web3/format';

export interface TransactionItem {
  txid: string;
  value: string;
  from: string;
  to: string;
  timestamp: string;
  status: "confirmed" | "pending" | "failed";
  type: "send" | "receive";
}

export function TransactionHistoryItem({ transaction }: { transaction: TransactionItem }) {
  const { txid, value, from, to, timestamp, status, type } = transaction;

  // Format timestamp using date-fns
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    
    // Check for invalid date
    if (isNaN(date.getTime())) {
      return 'Unknown date';
    }
    
    if (isToday(date)) {
      return `Today, ${format(date, 'HH:mm')}`;
    }
    
    if (isYesterday(date)) {
      return `Yesterday, ${format(date, 'HH:mm')}`;
    }
    
    // For dates within last 7 days, show relative time
    const daysDiff = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff < 7) {
      return formatDistanceToNow(date, { addSuffix: true });
    }
    
    // For older dates, show formatted date
    return format(date, 'MMM d, yyyy');
  };
  
  // Get status text and color
  const getStatusDisplay = () => {
    switch (status) {
      case 'confirmed':
        return { text: 'Confirmed', className: 'text-green-600' };
      case 'pending':
        return { text: 'Pending', className: 'text-amber-600' };
      case 'failed':
        return { text: 'Failed', className: 'text-red-600' };
      default:
        return { text: 'Unknown', className: 'text-gray-600' };
    }
  };

  const statusDisplay = getStatusDisplay();
  
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full flex items-center justify-center ${
            type === 'receive' 
              ? 'bg-black' 
              : 'border-1 border-black bg-white'
          }`}>
            {type === 'receive' ? (
              <ArrowDownLeft className="h-4 w-4 text-white" />
            ) : (
              <ArrowUpRight className="h-4 w-4 text-black" />
            )}
          </div>
          <div>
            <p className="font-medium">
              {type === 'receive' ? 'Receive' : 'Send'}
            </p>
            <p className="text-sm text-gray-500">
              {type === 'receive' ? `From: ${from}` : `To: ${to}`}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className={`font-semibold ${type === 'receive' ? 'text-green-600' : 'text-red-600'}`}>
            {type === 'receive' ? '+' : '-'}{formatBalance(value)}
          </p>
          <p className="text-xs text-gray-500">
            {formatTimestamp(timestamp)} · <span className={statusDisplay.className}>{statusDisplay.text}</span>
          </p>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <span>TxID:</span>
          <CopyAddress className="text-xs break-all" textToCopy={txid} />
        </div>
      </div>
    </div>
  );
}