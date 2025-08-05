'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useWalletConnect } from '@/hooks/useWalletConnect'
import { Separator } from '@/components/ui/separator'

interface SessionManagementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SessionManagementModal({ open, onOpenChange }: SessionManagementModalProps) {
  const { activeSessions, disconnect } = useWalletConnect()

  const handleDisconnect = async (topic: string) => {
    try {
      await disconnect(topic)
    } catch (error) {
      console.error('Failed to disconnect session:', error)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString()
  }

  const getDappUrl = (metadata: any) => {
    try {
      return new URL(metadata?.url || '').hostname || metadata?.url || 'Unknown'
    } catch {
      return metadata?.url || 'Unknown'
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Connected DApps</DialogTitle>
          <DialogDescription>
            Manage your active WalletConnect sessions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {activeSessions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No active connections
            </div>
          ) : (
            activeSessions.map((session, index) => (
              <div key={session.topic} className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {session.peer.metadata.icons?.[0] && (
                        <img
                          src={session.peer.metadata.icons[0]}
                          alt=""
                          className="w-6 h-6 rounded-full"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                          }}
                        />
                      )}
                      <h3 className="font-medium truncate">
                        {session.peer.metadata.name || 'Unknown DApp'}
                      </h3>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div>URL: {getDappUrl(session.peer.metadata)}</div>
                      <div>Connected: {formatDate(session.expiry)}</div>
                      <div className="flex flex-wrap gap-1">
                        {Object.keys(session.namespaces).map(namespace => (
                          <Badge key={namespace} variant="secondary" className="text-xs">
                            {namespace}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDisconnect(session.topic)}
                  >
                    Disconnect
                  </Button>
                </div>
                
                {index < activeSessions.length - 1 && <Separator />}
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}