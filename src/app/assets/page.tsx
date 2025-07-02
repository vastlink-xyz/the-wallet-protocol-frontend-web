'use client'

import { useEffect, useState, useRef } from "react";
import PersonalAssets from "./components/Personal/PersonalAssets";
import { AuthMethod } from "@lit-protocol/types";
import { getAuthMethodFromStorage } from "@/lib/storage";
import { LogoLoading } from "@/components/LogoLoading";
import { TeamAssetsRef, TeamAssets } from "./components/Team/TeamAssets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  const teamAssetsRef = useRef<TeamAssetsRef>(null)
  
  // Load auth method from storage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    setAuthMethod(storedAuthMethod)
  }, [])

  if (!authMethod) {
    return <LogoLoading />
  }

  return <div className={cn(
    "mx-auto pb-8",
    'w-[343px] tablet:w-[726px] laptop:w-[726px] desktop:w-[1109px]',
  )}>
    <header className="flex justify-between items-center my-7">
      <p className="text-black text-3xl font-bold">Wallets</p>
      <Button 
        className="rounded-[60px] px-4 py-2.5"
        onClick={() => teamAssetsRef.current?.createTeamWallet()}
      >
        Create team wallets
      </Button>
    </header>

    <div className="flex flex-wrap gap-10">
      <PersonalAssets authMethod={authMethod} />
      <TeamAssets ref={teamAssetsRef} authMethod={authMethod} />
    </div>
  </div>;
}
