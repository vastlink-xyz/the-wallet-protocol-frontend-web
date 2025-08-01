import { AUTH_METHOD_STORAGE_KEY } from "../lit/config";
import { AuthProviderType, VastbaseAuthMethod } from "../lit/custom-auth";

/**
 * Get auth method from localStorage
 * @returns VastbaseAuthMethod object or null if not found or invalid
 */
export function getAuthMethodFromStorage(): VastbaseAuthMethod | null {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return null;
  }
  
  const storedAuthMethod = localStorage.getItem(AUTH_METHOD_STORAGE_KEY);
  if (storedAuthMethod) {
    try {
      return JSON.parse(storedAuthMethod);
    } catch (error) {
      console.error('Failed to parse stored auth method:', error);
      return null;
    }
  }
  return null;
}

/**
 * Token storage keys for different providers
 */
const TOKEN_STORAGE_KEYS = {
  [AuthProviderType.GOOGLE]: 'vastbase-google-token',
  [AuthProviderType.EMAIL_OTP]: 'vastbase-stytch-token', 
  [AuthProviderType.PASSKEY]: 'vastbase-passkey-token'
};

/**
 * Set access token to localStorage for specific provider
 * @param providerType Provider type
 * @param token Access token to store
 */
export function setTokenToStorage(providerType: AuthProviderType, token: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = TOKEN_STORAGE_KEYS[providerType];
    if (key) {
      localStorage.setItem(key, token);
    }
  } catch (error) {
    console.error('Failed to store token:', error);
  }
}

/**
 * Get access token from localStorage for specific provider
 * @param providerType Provider type
 * @returns Access token string or null if not found
 */
export function getTokenFromStorage(providerType: AuthProviderType): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const key = TOKEN_STORAGE_KEYS[providerType];
    return key ? localStorage.getItem(key) : null;
  } catch (error) {
    console.error('Failed to get token from storage:', error);
    return null;
  }
}

/**
 * Clear access token from localStorage for specific provider
 * @param providerType Provider type
 */
export function clearTokenFromStorage(providerType: AuthProviderType): void {
  if (typeof window === 'undefined') return;
  
  try {
    const key = TOKEN_STORAGE_KEYS[providerType];
    if (key) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.error('Failed to clear token from storage:', error);
  }
}

/**
 * Get access token from stored auth method
 * @returns Access token string or null if not found
 * @deprecated This function is deprecated. Access tokens should not be stored in authMethod.
 * Use getCurrentAccessToken from AuthContext instead for dynamic token retrieval.
 */
export function getAccessTokenFromStorage(): string | null {
  console.warn('getAccessTokenFromStorage is deprecated. Use getCurrentAccessToken from AuthContext instead.');
  return null; // Always return null since accessToken is no longer stored
}

export function getAuthMethodTypeFromStorage() {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.authMethodType || null;
}

export function getAuthMethodIdFromStorage() {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.authMethodId || null;
}

/**
 * Set auth method in localStorage
 * @param authMethod The Vastbase auth method object to store
 * @returns void
 */
export function setAuthMethodToStorage(authMethod: VastbaseAuthMethod): void {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    localStorage.setItem(AUTH_METHOD_STORAGE_KEY, JSON.stringify(authMethod));
  } catch (error) {
    console.error('Failed to store auth method:', error);
  }
}

/**
 * Remove auth method from localStorage
 * @returns void
 */
export function clearAuthMethodFromStorage(): void {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
}

/**
 * Get primary email from stored auth method
 * @returns Primary email string or null if not found
 */
export function getPrimaryEmailFromStorage(): string | null {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.primaryEmail || null;
}

/**
 * Get provider type from stored auth method
 * @returns Provider type or null if not found
 */
export function getProviderTypeFromStorage(): AuthProviderType | null {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.providerType || null;
}
