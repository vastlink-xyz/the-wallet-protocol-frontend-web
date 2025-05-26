// Get random background color based on email
export const getAvatarColor = (email: string) => {
  if (!email) return '#6B7280'; // Default gray color
  
  // Simple hash function to get consistent color based on email
  let hash = 0
  for (let i = 0; i < email.length; i++) {
    hash = email.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  // Convert to hex color
  const c = (hash & 0x00FFFFFF).toString(16).toUpperCase()
  return '#' + '00000'.substring(0, 6 - c.length) + c
}

// Get initials from email
export const getInitials = (email: string) => {
  return email?.charAt(0).toUpperCase() || '?'
}
