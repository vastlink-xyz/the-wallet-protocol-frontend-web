'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useWalletConnect } from '@/hooks/useWalletConnect'
import { toast } from 'react-toastify'
import { useTranslations } from 'next-intl'

interface PairingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PairingModal({ open, onOpenChange }: PairingModalProps) {
  const [uri, setUri] = useState('')
  const [isConnecting, setIsConnecting] = useState(false)
  const t = useTranslations('WalletConnect')
  const tCommon = useTranslations('Common')
  
  const { pair } = useWalletConnect()
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Stop clipboard monitoring
  const stopClipboardMonitoring = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Start clipboard monitoring - simple and direct
  const startClipboardMonitoring = useCallback(() => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(async () => {
      try {
        const clipboardText = await navigator.clipboard.readText()
        if (clipboardText.startsWith('wc:')) {
          setUri(prevUri => {
            if (clipboardText !== prevUri) {
              stopClipboardMonitoring()
              return clipboardText
            }
            return prevUri
          })
        }
      } catch (error) {
        // Silently fail - user can still paste manually
        stopClipboardMonitoring()
      }
    }, 1000)
  }, [stopClipboardMonitoring])

  // Handle connect
  const handleConnect = async () => {
    if (!uri.trim()) {
      toast.error(t('enter_uri_error'))
      return
    }

    setIsConnecting(true)
    stopClipboardMonitoring()
    
    try {
      await pair(uri.trim())
      setUri('')
      onOpenChange(false)
      // Success toast is handled by the Provider's pair function
    } catch (error) {
      console.error('Failed to connect:', error)
      // Error toast is handled by the Provider's pair function
    } finally {
      setIsConnecting(false)
    }
  }

  const handleClose = () => {
    if (!isConnecting) {
      setUri('')
      stopClipboardMonitoring()
      onOpenChange(false)
    }
  }

  // Start monitoring when modal opens
  useEffect(() => {
    if (open) {
      startClipboardMonitoring()
    } else {
      stopClipboardMonitoring()
    }

    return () => {
      stopClipboardMonitoring()
    }
  }, [open, startClipboardMonitoring, stopClipboardMonitoring])

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('pairing_modal_title')}</DialogTitle>
          <DialogDescription>
            {t('pairing_modal_description')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Steps */}
          <ol className="list-decimal list-inside text-sm space-y-1 text-gray-600">
            <li>{t('pairing_steps.step1')}</li>
            <li>{t('pairing_steps.step2')}</li>
            <li>{t('pairing_steps.step3')}</li>
            <li>{t('pairing_steps.step4')}</li>
            <li>{t('pairing_steps.step5')}</li>
          </ol>

          <div className="space-y-2">
            <Label htmlFor="uri">{t('uri_label')}</Label>
            <Input
              id="uri"
              placeholder={t('uri_placeholder')}
              value={uri}
              onChange={(e) => setUri(e.target.value)}
              disabled={isConnecting}
            />
          </div>
          
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={handleClose}
            disabled={isConnecting}
          >
            {tCommon('cancel')}
          </Button>
          <Button
            onClick={handleConnect}
            disabled={isConnecting || !uri.trim()}
          >
            {isConnecting ? t('pairing') : t('pair_button')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}