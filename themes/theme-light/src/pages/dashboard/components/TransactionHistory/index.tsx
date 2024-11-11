import { cn } from "@/lib/utils";
import { Search } from "./Search";
import { TableList } from "./TableList";

export interface TransactionItem {
  id: string;
  type: 'Send' | 'Receive';
  amount: string;
  token: string;
  network: string;
  receivingWallet: string;
  time: string;
  from?: string;
  isYellow?: boolean;
}

const mockData = [
  {
    id: '1',
    type: 'Receive',
    amount: '15,109.98',
    token: 'ETH',
    network: 'Ethereum',
    receivingWallet: 'OKX',
    time: '9/26/2024, 12:10',
    from: '0x99b40150f3bcca887a7dc13f0e511034527a859'
  },
  {
    id: '2',
    type: 'Send',
    amount: '0.2',
    token: 'SEED',
    network: 'BNB Smart Chain',
    receivingWallet: 'Trust wallet',
    time: '9/26/2024, 12:10',
    from: '02x124oi5543534...234ddw'
  },
  {
    id: '3',
    type: 'Receive',
    amount: '0.2',
    token: 'SEED',
    network: 'BNB Smart Chain',
    receivingWallet: 'Trust wallet',
    time: '9/26/2024, 12:10',
    from: '02x124oi5543534...234ddw',
    isYellow: true
  },
];

export function TransactionHistory() {
  return (
    <div>
      <div className={cn(
        'text-[#111111] font-bold',
        'text-2xl mobile:text-[32px]',
        'mb-6'
      )}>History</div>

      <div className="mb-[40px]">
        <Search />
      </div>

      <TableList data={mockData as TransactionItem[]} />
    </div>
  )
}
