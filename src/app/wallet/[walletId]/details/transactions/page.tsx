"use client";

import { useWallet } from "../context/WalletContext";

export default function TransactionHistoryPage() {
  const { wallet, pkp, isLoading } = useWallet();
  
  if (isLoading) {
    return <div className="mt-4">Loading wallet data...</div>;
  }
  
  if (!wallet) {
    return <div className="mt-4">Wallet not found</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium mb-4">Transaction History for {wallet.name || 'Wallet'}</h2>
      {(
        <div className="text-sm text-gray-500 mt-2">
          Wallet name: {wallet.name}
        </div>
      )}
    </div>
  );
} 