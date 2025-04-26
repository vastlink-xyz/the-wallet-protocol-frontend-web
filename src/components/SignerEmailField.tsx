import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2, AlertCircle } from 'lucide-react'
import axios from 'axios'

// Helper function to validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  return emailRegex.test(email)
}

interface SignerEmailFieldProps {
  // Field label
  label: string
  
  // Unified input parameters
  input: {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    id?: string
    name?: string
    className?: string
    autoComplete?: string
  }
  
  // Whether editing is disabled (read-only mode)
  disabled?: boolean
  
  // Whether to automatically query address after input
  lookupOnChange?: boolean
  
  // Explicit ETH address (if provided, no lookup will be performed)
  address?: string
  
  // Callback when address information changes
  onAddressFound?: (addressData: {
    ethAddress: string
    publicKey: string
    authMethodId?: string
  } | null) => void

  // Custom className for the root element
  className?: string
}

export function SignerEmailField({
  label,
  input,
  disabled = false,
  lookupOnChange = true,
  address,
  onAddressFound,
  className
}: SignerEmailFieldProps) {
  // State management
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [addressInfo, setAddressInfo] = useState<{
    ethAddress: string
    publicKey: string
    authMethodId?: string
  } | null>(address ? { ethAddress: address, publicKey: '' } : null)

  // If address prop changes, update the state
  useEffect(() => {
    if (address) {
      const addressData = { ethAddress: address, publicKey: '' };
      setAddressInfo(addressData);
      if (onAddressFound) onAddressFound(addressData);
    }
  }, [address, onAddressFound])

  // Query address when email changes and auto-lookup is enabled
  useEffect(() => {
    // Skip lookup if address is explicitly provided
    if (address) return
    
    if (lookupOnChange && input.value && isValidEmail(input.value)) {
      const debounceTimer = setTimeout(() => {
        fetchAddressByEmail(input.value)
      }, 500) // 500ms debounce
      
      return () => clearTimeout(debounceTimer)
    }
  }, [input.value, lookupOnChange, address])

  // Query address information corresponding to email
  const fetchAddressByEmail = async (email: string) => {
    // Skip lookup if address is explicitly provided
    if (address) return
    
    if (!email || !email.includes('@')) {
      setAddressInfo(null)
      setError(null)
      if (onAddressFound) onAddressFound(null)
      return
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await axios.get(`/api/user/email?email=${encodeURIComponent(email)}`)
      
      if (response.data.success) {
        const { authMethodId, pkp } = response.data.data
        const newAddressInfo = {
          ethAddress: pkp.ethAddress,
          publicKey: pkp.publicKey,
          authMethodId
        }
        
        setAddressInfo(newAddressInfo)
        if (onAddressFound) onAddressFound(newAddressInfo)
      } else {
        setAddressInfo(null)
        setError('User not found')
        if (onAddressFound) onAddressFound(null)
      }
    } catch (error) {
      console.error('Failed to fetch user by email:', error)
      setAddressInfo(null)
      setError('Failed to find user')
      if (onAddressFound) onAddressFound(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Handle manual query
  const handleBlur = () => {
    // Skip lookup if address is explicitly provided
    if (address) return
    
    if (!lookupOnChange && input.value && isValidEmail(input.value)) {
      fetchAddressByEmail(input.value)
    }
  }

  return (
    <div className={`space-y-2 ${className || ''}`}>
      <Label htmlFor={input.id || 'email-field'} className="text-base font-semibold">
        {label}
      </Label>
      
      <div className="relative">
        <Input
          id={input.id || 'email-field'}
          value={input.value}
          onChange={(e) => input.onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={input.placeholder || "Enter email address"}
          disabled={disabled || isLoading}
          className={`${disabled ? "bg-gray-50 text-black font-semibold" : ""} ${error ? "border-red-300" : ""} ${input.className || ""}`}
          autoComplete={input.autoComplete}
          name={input.name}
          type="email"
        />
        
        {isLoading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Loader2 className="h-4 w-4 animate-spin" />
          </div>
        )}
      </div>
      
      {error && !disabled && (
        <div className="text-sm text-red-500 flex items-center gap-1 mt-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}
      
      {addressInfo && (
        <div className="mt-1.5">
          <div className="text-xs text-gray-500 break-all font-mono">
            {addressInfo.ethAddress}
          </div>
        </div>
      )}
    </div>
  )
} 