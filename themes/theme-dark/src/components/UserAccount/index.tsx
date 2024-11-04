import { auth, cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { InitialNameLogo } from "../InitialNameLogo"

export function Account() {
  const [displayName, setDisplayName] = useState('')

  useEffect(() => {
    const name = auth.all().username
    setDisplayName(name)
  }, [])

  return (
    <div className="flex items-center">
      <p className="mr-4 text-foreground">{displayName}</p>
      <InitialNameLogo />
    </div>
  )
}
