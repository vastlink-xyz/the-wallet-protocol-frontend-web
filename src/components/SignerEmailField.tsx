import { useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { ethers } from 'ethers'
import { TokenType } from '@/lib/web3/token'
import { UserAddresses } from '@/app/api/user/storage'
import { CopyAddress } from './ui/CopyAddress'

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
  
  // Explicit address (if provided, no lookup will be performed)
  address?: string
  
  // Callback when address information changes
  onAddressFound?: (addressData: {
    publicKey: string
    authMethodId?: string
    addresses?: UserAddresses
  } | null) => void

  // Explicit input type (email or address)
  inputType?: 'email' | 'address' | null

  // Custom className for the root element
  className?: string

  // Token type to determine which address to display and retrieve
  tokenType?: TokenType
}

export function SignerEmailField({
  label,
  input,
  disabled = false,
  lookupOnChange = true,
  address,
  onAddressFound,
  inputType,
  className,
  tokenType = 'ETH' // Default to ETH for backward compatibility
}: SignerEmailFieldProps) {
  // State management
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [addressInfo, setAddressInfo] = useState<{
    publicKey: string
    authMethodId?: string
    addresses: UserAddresses
  } | null>(address ? { 
    publicKey: '',
    addresses: { 
      eth: tokenType.toLowerCase() === 'eth' ? address : '', 
      btc: tokenType.toLowerCase() === 'btc' ? address : '' 
    } 
  } : null)
  const [internalInputType, setInternalInputType] = useState<'email' | 'address' | null>(inputType || null)

  // If address prop changes, update the state
  useEffect(() => {
    if (address) {
      const addressData = { 
        publicKey: '',
        addresses: { 
          eth: tokenType.toLowerCase() === 'eth' ? address : '', 
          btc: tokenType.toLowerCase() === 'btc' ? address : '' 
        } 
      };
      
      setAddressInfo(addressData);
      if (onAddressFound) onAddressFound(addressData);
    }
  }, [address, onAddressFound, tokenType])

  // If props.inputType changes, update internal state
  useEffect(() => {
    setInternalInputType(inputType || null);
  }, [inputType])

  // Function to validate an address based on token type
  const isValidAddress = (value: string, type: TokenType): boolean => {
    // Add validation for different address types
    switch(type.toLowerCase()) {
      case 'eth':
        return ethers.utils.isAddress(value);
      case 'btc':
        return true
      default:
        // For unknown types, return false or implement custom validation
        return false;
    }
  }

  // Query address when input changes and auto-lookup is enabled
  useEffect(() => {
    // Skip lookup if address is explicitly provided
    if (address) return
    
    if (lookupOnChange && input.value) {
      const debounceTimer = setTimeout(() => {
        // Check if input is a valid email or address for the current token type
        if (isValidEmail(input.value)) {
          setInternalInputType('email');
          fetchAddressByEmail(input.value);
        } else if (isValidAddress(input.value, tokenType)) {
          // If it's a valid address for the current token type, use it directly
          setInternalInputType('address');
          
          // Create an addresses object with the input value for the current token type
          const addresses: UserAddresses = {
            eth: '',
            btc: ''
          };
          addresses[tokenType.toLowerCase()] = input.value;
          
          const newAddressInfo = {
            publicKey: '',
            addresses
          };
          
          setAddressInfo(newAddressInfo);
          if (onAddressFound) onAddressFound(newAddressInfo);
          setError(null);
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
  }, [input.value, lookupOnChange, address, onAddressFound, tokenType])

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
        const { authMethodId, pkp, addresses } = response.data.data
        
        const newAddressInfo = {
          publicKey: pkp.publicKey,
          authMethodId,
          addresses
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
      } else if (isValidAddress(input.value, tokenType)) {
        // If it's a valid address for the current token type, use it directly
        setInternalInputType('address');
        
        // Create an addresses object with the input value for the current token type
        const addresses: UserAddresses = {
          eth: '',
          btc: ''
        };
        addresses[tokenType.toLowerCase()] = input.value;
        
        const newAddressInfo = {
          publicKey: '',
          addresses
        };
        
        setAddressInfo(newAddressInfo);
        if (onAddressFound) onAddressFound(newAddressInfo);
        setError(null);
      }
    }
  }

  // Get the appropriate address to display based on tokenType
  const getDisplayAddress = (): string => {
    if (!addressInfo?.addresses) return '';
    
    // Get address for current token type (lowercase for case-insensitive matching)
    const tokenKey = tokenType.toLowerCase();
    return addressInfo.addresses[tokenKey] || '';
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
          placeholder={input.placeholder || `Enter email address or ${tokenType} address`}
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
            <CopyAddress textToCopy={getDisplayAddress()} className="ml-1" iconSize={12} />
          </div>
        </div>
      )}
    </div>
  )
} 