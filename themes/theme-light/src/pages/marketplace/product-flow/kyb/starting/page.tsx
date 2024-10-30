'use client'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useFlowData } from '@/pages/marketplace/kyb-self/components/useFlowData'
import { ExternalLink } from 'lucide-react'

export default function StartingPage() {
  const navigate = useNavigate()
  const { flowId, serviceUrl, nextIndex } = useFlowData()

  const [isLoading, setIsLoading] = useState(false)

  const handleStart = async () => {
    navigate(`${serviceUrl}?flowId=${flowId}&flowIndex=${nextIndex}`)
  }

  const openInNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Business Verification Flow</h1>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-0 right-2"
        onClick={openInNewTab}
        title="Open in new window"
      >
        <ExternalLink className="h-4 w-4" />
      </Button>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-6">
            This flow consists of two main parts: Know Your Business (KYB) and Know Your Customer (KYC). We'll guide you through each part to ensure a smooth verification experience.
          </p>
          
          <h2 className="text-xl font-semibold mb-3">Part 1: Know Your Business (KYB) Flow</h2>
          <p className="mb-8">
            In this part of the flow, we'll verify your business information. You'll be asked to provide details about your company's registration, structure, and operations.
          </p>

          <h2 className="text-xl font-semibold mb-3">Part 2: Know Your Customer (KYC) Flow</h2>
          <p className="mb-4">
            After completing the KYB flow, you'll need to provide personal identification for key individuals in your business. This helps us comply with regulatory requirements and ensure the security of our platform.
          </p>

          <p className="mb-6">
            The entire flow typically takes 15-20 minutes. You can save your progress and continue later if needed.
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleStart} disabled={isLoading} className="w-full">
            {isLoading ? 'Preparing...' : 'Start Verification Flow'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}