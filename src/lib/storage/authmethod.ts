import { AuthMethod } from "@lit-protocol/types";
import { AUTH_METHOD_STORAGE_KEY } from "../lit/config";

/**
 * Get auth method from localStorage
 * @returns AuthMethod object or null if not found or invalid
 */
export function getAuthMethodFromStorage(): AuthMethod | null {
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
 * Get access token from stored auth method
 * @returns Access token string or null if not found
 */
export function getAccessTokenFromStorage(): string | null {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.accessToken || null;
}

export function getAuthMethodTypeFromStorage() {
  const authMethod = getAuthMethodFromStorage();
  return authMethod?.authMethodType || null;
}

/**
 * Set auth method in localStorage
 * @param authMethod The auth method object to store
 * @returns void
 */
export function setAuthMethodToStorage(authMethod: AuthMethod): void {
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
  localStorage.removeItem(AUTH_METHOD_STORAGE_KEY);
}
