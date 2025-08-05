'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link2 } from 'lucide-react'
import { useWalletConnect } from '@/hooks/useWalletConnect'
import { PairingModal } from './PairingModal'
import { SessionManagementModal } from './SessionManagementModal'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

interface WalletConnectButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  showIcon?: boolean
  isCollapsed?: boolean
  mode?: 'button' | 'sidebar' | 'mobile'
}

export function WalletConnectButton({ 
  variant = 'default', 
  size = 'default',
  className,
  showIcon = true,
  isCollapsed = false,
  mode = 'button'
}: WalletConnectButtonProps) {
  const [showPairingModal, setShowPairingModal] = useState(false)
  const [showSessionModal, setShowSessionModal] = useState(false)
  const t = useTranslations('WalletConnect')
  
  const { 
    isConnected, 
    isInitialized, 
    isInitializing, 
    activeSessions 
  } = useWalletConnect()

  const handleClick = () => {
    if (isConnected) {
      setShowSessionModal(true)
    } else {
      setShowPairingModal(true)
    }
  }

  const getButtonText = () => {
    if (isInitializing) return t('initializing')
    if (!isInitialized) return t('unavailable')
    if (isConnected) return t('connected', { count: activeSessions.length })
    return t('connect_dapps')
  }

  const getSidebarText = () => {
    if (isInitializing) return t('initializing')
    if (!isInitialized) return t('unavailable')
    if (isConnected) return t('connected', { count: activeSessions.length })
    return t('connect_dapps')
  }

  // Render different styles based on mode
  if (mode === 'sidebar') {
    return (
      <>
        <button
          onClick={handleClick}
          disabled={isInitializing || !isInitialized}
          className={cn(
            'flex items-center py-2.5 font-medium transition-all duration-300',
            'px-6 justify-between w-full cursor-pointer',
            'text-gray-500 hover:bg-gray-100 hover:text-gray-900',
            className
          )}
        >
          <div className="flex items-center">
            <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
              <Link2 className="w-5 h-5" />
            </div>
            <div className={cn(
              'overflow-hidden transition-all duration-300',
              isCollapsed ? 'w-0 ml-0' : 'ml-5'
            )}>
              <span className="whitespace-nowrap block">
                {getSidebarText()}
              </span>
            </div>
          </div>
        </button>

        <PairingModal
          open={showPairingModal}
          onOpenChange={setShowPairingModal}
        />

        <SessionManagementModal
          open={showSessionModal}
          onOpenChange={setShowSessionModal}
        />
      </>
    )
  }

  if (mode === 'mobile') {
    return (
      <>
        <button
          onClick={handleClick}
          disabled={isInitializing || !isInitialized}
          className={cn(
            'flex items-center justify-between py-3 px-4 mx-2 rounded-md transition-colors w-full',
            'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
            className
          )}
        >
          <div className="flex items-center space-x-3">
            <Link2 className="w-5 h-5" />
            <span className="font-medium">{getButtonText()}</span>
          </div>
        </button>

        <PairingModal
          open={showPairingModal}
          onOpenChange={setShowPairingModal}
        />

        <SessionManagementModal
          open={showSessionModal}
          onOpenChange={setShowSessionModal}
        />
      </>
    )
  }

  // Default button mode
  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={handleClick}
        disabled={isInitializing || !isInitialized}
      >
        {showIcon && (
          <Link2 className={cn(
            "w-4 h-4",
            !isCollapsed && "mr-2"
          )} />
        )}
        {!isCollapsed && (
          <span>{getButtonText()}</span>
        )}
      </Button>

      <PairingModal
        open={showPairingModal}
        onOpenChange={setShowPairingModal}
      />

      <SessionManagementModal
        open={showSessionModal}
        onOpenChange={setShowSessionModal}
      />
    </>
  )
}