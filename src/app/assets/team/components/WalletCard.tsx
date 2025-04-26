import { useState, useEffect } from 'react'

interface WalletCardProps {
  id: string
  signers: {
    ethAddress: string
    publicKey: string
    email: string
  }[]
}

export function WalletCard({ id, signers }: WalletCardProps) {
  // Get initials from email
  const getInitials = (email: string) => {
    return email?.charAt(0).toUpperCase() || '?'
  }

  // Get random background color based on email
  const getAvatarColor = (email: string) => {
    if (!email) return '#6B7280'; // Default gray color
    
    // Simple hash function to get consistent color based on email
    let hash = 0
    for (let i = 0; i < email.length; i++) {
      hash = email.charCodeAt(i) + ((hash << 5) - hash)
    }
    
    // Convert to hex color
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase()
    return '#' + '00000'.substring(0, 6 - c.length) + c
  }

  // Remove the truncation of wallet ID
  const truncateId = (id: string) => {
    return id
  }

  return (
    <div className="bg-white rounded-lg border p-6 shadow-sm relative hover:shadow-md transition-shadow">
      {/* Wallet ID in top left */}
      <div className="absolute top-4 left-4 text-sm font-mono text-gray-500">
        {truncateId(id)}
      </div>
      
      {/* Avatars in top right */}
      <div className="absolute top-4 right-4 flex -space-x-3">
        {signers.map((signer, index) => (
          <div
            key={index}
            className="h-10 w-10 rounded-full flex items-center justify-center text-white text-base font-medium shadow-sm"
            style={{ backgroundColor: getAvatarColor(signer.email) }}
            title={signer.email || signer.ethAddress}
          >
            {getInitials(signer.email)}
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="pt-14 pb-4">
        <h3 className="font-medium text-xl">2-of-2 Multisig Wallet</h3>
        <p className="text-gray-500 mt-3">
          {signers.length} signers required for transactions
        </p>
      </div>
    </div>
  )
} 