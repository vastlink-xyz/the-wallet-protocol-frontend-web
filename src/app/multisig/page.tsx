'use client'

import { Suspense } from 'react'
import MultisigContent from './MultisigContent'

export default function MultisigPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MultisigContent />
    </Suspense>
  )
}
