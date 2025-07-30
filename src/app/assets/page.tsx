'use client'

import { useEffect, useState, useRef } from "react";
import PersonalAssets from "./components/Personal/PersonalAssets";
import { VastbaseAuthMethod } from "@/lib/lit/custom-auth";
import { getAuthMethodFromStorage } from "@/lib/storage";
import { LogoLoading } from "@/components/LogoLoading";
import { TeamAssetsRef, TeamAssets } from "./components/Team/TeamAssets";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { useUserData } from "@/hooks/useUserData";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

export default function PortfolioPage() {
  const router = useRouter()

  const transCommon = useTranslations("Common")
  const transWalletCard = useTranslations("WalletCard")

  const teamAssetsRef = useRef<TeamAssetsRef>(null)

  const [authMethod, setAuthMethod] = useState<VastbaseAuthMethod | null>(null)

  // Load auth method from storage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    if (!storedAuthMethod) {
      router.push('/')
      return
    }
    setAuthMethod(storedAuthMethod)
  }, [router])

  // Fetch user data using custom hook
  const { userData, authMethodId, isLoading, error, hasPkp } = useUserData()

  // Handle PKP validation
  useEffect(() => {
    if (!isLoading && userData && !hasPkp) {
      console.log('User has incomplete PKP, redirecting to callback for retry')
      router.push('/auth/stytch-callback')
    }
  }, [isLoading, userData, hasPkp, router])

  // Handle errors
  useEffect(() => {
    if (error) {
      toast.error(error)
      router.push('/')
    }
  }, [error, router])

  if (isLoading || !authMethod || !userData || !authMethodId || !hasPkp) {
    return <LogoLoading />
  }

  return <div className={cn(
    "mx-auto pb-8",
    'w-[343px] laptop:w-[726px] desktop:w-[1109px]',
  )}>
    <header className="flex justify-between items-center my-7">
      <p className="text-black text-3xl font-bold">
        {transCommon("wallets")}
      </p>
      <p
        className="text-white bg-black px-4 py-2.5 rounded-[20px] text-sm font-medium flex items-center cursor-pointer"
        onClick={() => teamAssetsRef.current?.createTeamWallet()}
      >
        <PlusCircle className="w-4 h-4 text-white mr-1" />
        <span>{transWalletCard("create_team_wallet")}</span>
      </p>
    </header>

    <div className="flex flex-wrap gap-10">
      <PersonalAssets
        userData={userData}
        authMethodId={authMethodId}
      />
      <TeamAssets
        ref={teamAssetsRef}
        userData={userData}
        authMethodId={authMethodId}
      />
    </div>
  </div>;
}
