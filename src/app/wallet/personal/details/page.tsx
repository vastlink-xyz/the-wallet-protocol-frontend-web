'use client'

import { TransactionHistory } from "@/components/Transaction/TransactionHistory";
import { getAuthMethodFromStorage } from "@/lib/storage/authmethod";
import { getAuthIdByAuthMethod } from "@lit-protocol/lit-auth-client";
import { useEffect } from "react";
import { useState } from "react";
import { MultisigWalletAddresses } from "@/app/api/multisig/storage";
import { log } from "@/lib/utils";

export default function PersonalWalletDetailsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [addresses, setAddresses] = useState<MultisigWalletAddresses | null>(null)

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true)
        // Get user's authMethodId
        const storedAuthMethod = getAuthMethodFromStorage()
        if (!storedAuthMethod) return
        const authMethodId = await getAuthIdByAuthMethod(storedAuthMethod)
        
        // Fetch user's information from database API
        const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user information from database')
        }
        
        const userData = await userResponse.json()
        setAddresses(userData.addresses)
      } catch (error) {
        console.error("Error fetching data from database:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-6">
      {
        addresses && (
          <div>
            <TransactionHistory
              addresses={addresses}
            />
          </div>
        )
      }
    </div>
  );
}
