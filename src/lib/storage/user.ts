
export function setUserDataToStorage(user: any) {
  localStorage.setItem('user', JSON.stringify(user))
}

/**
 * Get user email from localStorage
 * @returns user email string, throws error if not found
 */
export function getUserEmailFromStorage(): string {
  const userData = localStorage.getItem('user')
  if (!userData) {
    throw new Error('User data not found in localStorage')
  }
  const parsedUserData = JSON.parse(userData)
  return parsedUserData.email
}
