import { useState, useEffect, useRef } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Loader2, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { ethers } from 'ethers'
import { SUPPORTED_TOKENS_INFO, TokenType } from '@/lib/web3/token'
import { UserAddresses } from '@/app/api/user/storage'
import { CopyAddress } from './ui/CopyAddress'
import { isValidEmail, log } from '@/lib/utils'

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
  
  // Explicit address (if provided, used as initial value but can be overridden)
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
  
  // Whether to only accept email input (rejects addresses)
  emailOnly?: boolean

  // Allow unregistered email without showing error
  allowUnregisteredEmail?: boolean
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
  tokenType = 'ETH', // Default to ETH for backward compatibility
  emailOnly = false,
  allowUnregisteredEmail = false
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
      eth: SUPPORTED_TOKENS_INFO[tokenType].addressKey === 'eth' ? address : '', 
      btc: SUPPORTED_TOKENS_INFO[tokenType].addressKey === 'btc' ? address : '' 
    } 
  } : null)
  const [internalInputType, setInternalInputType] = useState<'email' | 'address' | null>(inputType || null)
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  // If address prop changes, update the state (only for initial and changed props)
  useEffect(() => {
    if (address) {
      const addressData = { 
        publicKey: '',
        addresses: { 
          eth: SUPPORTED_TOKENS_INFO[tokenType].addressKey === 'eth' ? address : '', 
          btc: SUPPORTED_TOKENS_INFO[tokenType].addressKey === 'btc' ? address : '' 
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
    switch(SUPPORTED_TOKENS_INFO[type].addressKey) {
      case 'eth':
        return ethers.utils.isAddress(value);
      case 'btc':
        return true
      default:
        // For unknown types, return false or implement custom validation
        return false;
    }
  }

  // Query address information corresponding to email
  const fetchAddressByEmail = async (email: string) => {
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
        if (!allowUnregisteredEmail) {
          setError('User not found')
        }
        if (onAddressFound) onAddressFound(null)
      }
    } catch (error) {
      console.error('Failed to fetch user by email:', error)
      setAddressInfo(null)
      if (!allowUnregisteredEmail) {
        setError('Failed to find user')
      }
      if (onAddressFound) onAddressFound(null)
    } finally {
      setIsLoading(false)
    }
  }

  // Process the input value with validation and lookup
  const processInputValue = (value: string) => {
    if (lookupOnChange && value) {
      if (isValidEmail(value)) {
        setInternalInputType('email');
        fetchAddressByEmail(value);
      } else if (!emailOnly) {
        if (isValidAddress(value, tokenType)) {
          // If it's a valid address for the current token type, use it directly
          setInternalInputType('address');
          
          // Create an addresses object with the input value for the current token type
          const addresses: UserAddresses = {
            eth: '',
            btc: ''
          };
          addresses[SUPPORTED_TOKENS_INFO[tokenType].addressKey] = value;
          
          const newAddressInfo = {
            publicKey: '',
            addresses
          };
          
          setAddressInfo(newAddressInfo);
          if (onAddressFound) onAddressFound(newAddressInfo);
          setError(null);
        } else {
          setError('Please enter a valid email or wallet address');
          setAddressInfo(null);
          if (onAddressFound) onAddressFound(null);
        }
      } else if (emailOnly && !isValidEmail(value) && value.trim() !== '') {
        // If emailOnly is true and input is not a valid email, show error
        setError('Please enter a valid email address');
        setAddressInfo(null);
        if (onAddressFound) onAddressFound(null);
        log('emailOnly', value)
      } else if (!value.trim()) {
        // Clear everything if input is empty
        setInternalInputType(null);
        setAddressInfo(null);
        setError(null);
        if (onAddressFound) onAddressFound(null);
      }
    }
  }

  // Handle input change with debounce
  const handleChange = (value: string) => {
    // Update the input value immediately
    input.onChange(value)
    
    // Clear any existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    
    // Set a new debounce timer for processing the value
    debounceTimerRef.current = setTimeout(() => {
      processInputValue(value)
    }, 500) // 500ms debounce
  }

  // Clean up the timer on component unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  // Get the appropriate address to display based on tokenType
  const getDisplayAddress = (): string => {
    if (!addressInfo?.addresses) return '';
    
    // Get address for current token type (lowercase for case-insensitive matching)
    return addressInfo.addresses[SUPPORTED_TOKENS_INFO[tokenType].addressKey] || '';
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
          onChange={(e) => handleChange(e.target.value)}
          placeholder={input.placeholder || (emailOnly ? "Enter email address" : `Enter email address or ${tokenType} address`)}
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
      
      {/* Display message for unregistered user */}
      {internalInputType === 'email' && !addressInfo && allowUnregisteredEmail && input.value && isValidEmail(input.value) && !isLoading && !error && (
        <div className="mt-1.5">
          <div className="text-xs text-gray-500">
            This user is not registered yet
          </div>
        </div>
      )}
    </div>
  )
} 