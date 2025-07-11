import { TokenType } from "@/lib/web3/token";

interface TransactionItem {
  tokenType: TokenType;
  txid: string;
  value: string;
  from: string;
  to: string;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'send' | 'receive';
}