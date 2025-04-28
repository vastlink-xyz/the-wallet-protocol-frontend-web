import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2, AlertCircle, Copy, Check } from 'lucide-react'
import axios from 'axios'
import { ethers } from 'ethers'

// Helper functions to validate input formats
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

  // Explicit input type (email or address)
  inputType?: 'email' | 'address' | null

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
  inputType,
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
  const [internalInputType, setInternalInputType] = useState<'email' | 'address' | null>(inputType || null)
  const [copied, setCopied] = useState(false)

  // If address prop changes, update the state
  useEffect(() => {
    if (address) {
      const addressData = { ethAddress: address, publicKey: '' };
      setAddressInfo(addressData);
      if (onAddressFound) onAddressFound(addressData);
    }
  }, [address, onAddressFound])

  // If props.inputType changes, update internal state
  useEffect(() => {
    setInternalInputType(inputType || null);
  }, [inputType])

  // Query address when input changes and auto-lookup is enabled
  useEffect(() => {
    // Skip lookup if address is explicitly provided
    if (address) return
    
    if (lookupOnChange && input.value) {
      const debounceTimer = setTimeout(() => {
        // Check if input is a valid email or ETH address
        if (isValidEmail(input.value)) {
          setInternalInputType('email');
          fetchAddressByEmail(input.value);
        } else if (ethers.utils.isAddress(input.value)) {
          // If it's a valid ETH address, use it directly
          setInternalInputType('address');
          const newAddressInfo = {
            ethAddress: input.value,
            publicKey: '',
          };
          setAddressInfo(newAddressInfo);
          if (onAddressFound) onAddressFound(newAddressInfo);
          setError(null);
        } else if (input.value.length > 5) {
          // Clear data if input is not valid but has substantial content
          setInternalInputType(null);
          setAddressInfo(null);
          setError('Enter a valid email or Ethereum address');
          if (onAddressFound) onAddressFound(null);
        }
      }, 500) // 500ms debounce
      
      return () => clearTimeout(debounceTimer)
    } else if (!input.value) {
      // Clear everything if input is empty
      setInternalInputType(null);
      setAddressInfo(null);
      setError(null);
      if (onAddressFound) onAddressFound(null);
    }
  }, [input.value, lookupOnChange, address, onAddressFound])

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
    
    if (!lookupOnChange && input.value) {
      if (isValidEmail(input.value)) {
        setInternalInputType('email');
        fetchAddressByEmail(input.value);
      } else if (ethers.utils.isAddress(input.value)) {
        // If it's a valid ETH address, use it directly
        setInternalInputType('address');
        const newAddressInfo = {
          ethAddress: input.value,
          publicKey: '',
        };
        setAddressInfo(newAddressInfo);
        if (onAddressFound) onAddressFound(newAddressInfo);
        setError(null);
      }
    }
  }

  // Function to copy address to clipboard
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`space-y-2 ${className || ''}`}>
      <Label htmlFor={input.id || 'recipient-field'} className="text-base font-semibold">
        {label}
      </Label>
      
      <div className="relative">
        <Input
          id={input.id || 'recipient-field'}
          value={input.value}
          onChange={(e) => input.onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={input.placeholder || "Enter email address or ETH address (0x...)"}
          disabled={disabled || isLoading}
          className={`${disabled ? "bg-gray-50 text-black font-semibold" : ""} ${error ? "border-red-300" : ""} ${input.className || ""}`}
          autoComplete={input.autoComplete}
          name={input.name}
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
      
      {/* Display address information */}
      {internalInputType === 'email' && addressInfo && (
        <div className="mt-1.5">
          <div className="text-xs text-gray-500 break-all font-mono flex items-center">
            <span>{addressInfo.ethAddress}</span>
            <div 
              onClick={() => copyToClipboard(addressInfo.ethAddress)}
              className="ml-1 p-1 cursor-pointer"
              aria-label="Copy address"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 