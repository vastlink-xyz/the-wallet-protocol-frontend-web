'use client'

import { useEffect, useState } from "react";
import PersonalAssets from "./components/Personal/PersonalAssets";
import { AuthMethod } from "@lit-protocol/types";
import { getAuthMethodFromStorage } from "@/lib/storage";
import { LogoLoading } from "@/components/LogoLoading";
import TeamAssets from "./components/Team/TeamAssets";

export default function PortfolioPage() {
  const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
  
  // Load auth method from storage
  useEffect(() => {
    const storedAuthMethod = getAuthMethodFromStorage()
    setAuthMethod(storedAuthMethod)
  }, [])

  if (!authMethod) {
    return <LogoLoading />
  }

  return <div>
    <PersonalAssets authMethod={authMethod} />
    <TeamAssets authMethod={authMethod} />
  </div>;
}
