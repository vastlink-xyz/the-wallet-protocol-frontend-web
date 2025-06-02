"use client";

import { TransactionHistory } from "@/components/Transaction/TransactionHistory";
import { useWallet } from "../context/WalletContext";

export default function TransactionHistoryPage() {
  const { wallet, isLoading } = useWallet();
  
  if (isLoading) {
    return <div className="mt-4">Loading wallet data...</div>;
  }
  
  if (!wallet) {
    return <div className="mt-4">Wallet not found</div>;
  }

  return (
    <div className="mt-4">
      {
        wallet.addresses && (
          <TransactionHistory
            addresses={wallet.addresses}
          />
        )
      }
    </div>
  );
} 