'use client';

import { useEffect, useState } from 'react';
import { StytchMfa } from './components/StytchMfa';
import { AUTH_METHOD_STORAGE_KEY } from '@/lib/lit';
import { log, getUserIdFromToken } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function StytchDemoPage() {
  const [authMethod, setAuthMethod] = useState<any>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('+');
  const [phoneError, setPhoneError] = useState('');
  
  useEffect(() => {
    // Load auth method from localStorage
    const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
    if (storedAuthMethod) {
      try {
        const parsedAuthMethod = JSON.parse(storedAuthMethod);
        setAuthMethod(parsedAuthMethod);
        
        // Try to extract userId from JWT
        if (parsedAuthMethod.accessToken) {
          const extractedUserId = getUserIdFromToken(parsedAuthMethod.accessToken);
          if (extractedUserId) {
            setUserId(extractedUserId);
            log('User ID extracted from JWT:', extractedUserId);
          } else {
            // Fallback to the userId stored in the authMethod
            setUserId(parsedAuthMethod.userId);
            log('Using userId from authMethod:', parsedAuthMethod.userId);
          }
        } else {
          setUserId(parsedAuthMethod.userId);
        }
      } catch (err) {
        console.error('Failed to parse auth method:', err);
      }
    }
  }, []);
  
  // Handle phone number input changes
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    
    // Ensure phone number starts with +
    let formattedNumber = input;
    if (input && !input.startsWith('+')) {
      formattedNumber = '+' + input;
    }
    
    // Update phone number
    setPhoneNumber(formattedNumber);
    
    // Simple format validation
    if (formattedNumber.length > 0) {
      const isValid = /^\+[1-9]\d{1,14}$/.test(formattedNumber);
      setPhoneError(isValid ? '' : 'Please enter a valid E.164 format phone number, for example: +14155552671');
    } else {
      setPhoneError('');
    }
  };
  
  function handleProtectedAction() {
    log('Success! Protected action executed after MFA verification');
  }
  
  if (!authMethod) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Not Authenticated</h1>
        <p>Please log in first to access this page.</p>
      </div>
    );
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Stytch Demo</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">User Info</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>User ID: {userId || authMethod.userId}</p>
          <p>Auth Method Type: {authMethod.authMethodType}</p>
          {authMethod.accessToken && <p>Has JWT: Yes</p>}
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">MFA Phone Number</h2>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (E.164 format)</Label>
          <Input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+14155552671"
            className="max-w-sm"
          />
          {phoneError && (
            <p className="text-sm text-red-500">{phoneError}</p>
          )}
          <p className="text-sm text-gray-500">
            Use E.164 format: starts with +, includes country code and phone number, no spaces or other characters.
            <br />Examples: +14155552671 (US) or +8618012345678 (China)
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">MFA Protected Action</h2>
        <p>Click the button below to test MFA functionality</p>
        
        <StytchMfa 
          userId={userId || authMethod.userId}
          phoneNumber={phoneNumber}
          onSuccess={handleProtectedAction}
        />
        
        <div className="mt-8">
          <Button variant="outline" onClick={() => {
            localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
            window.location.href = '/';
          }}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}