'use client'

import { Button } from "@/components/ui/button"
import { auth, log } from "@/lib/utils"
import keyManagementService from "@/services/KeyManagementService"
import { useEffect } from "react"

export default function TestPage() {
  useEffect(() => {
    console.log('test')
  }, [])

  const handleTest = async () => {
    const address = auth.all().address
    log('address', address)
    await keyManagementService.init()

    // keyManagementService.bindAddress(address)
  }

  return <div>
    <Button onClick={handleTest}>test</Button>
  </div>
}
