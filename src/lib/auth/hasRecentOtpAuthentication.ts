import { stytchClient } from '@/app/api/stytch/client'

export const RECENT_OTP_WINDOW_MS_DEFAULT = 60 * 1000

/**
 * Check if the current session has a recent OTP/TOTP authentication.
 * Returns true if an authentication factor of type 'otp' or 'totp' exists
 * with last_authenticated_at within the given window.
 */
export async function hasRecentOtpAuthentication(sessionJwt: string, windowMs: number = RECENT_OTP_WINDOW_MS_DEFAULT): Promise<boolean> {
  try {
    const resp = await stytchClient.sessions.authenticate({ session_jwt: sessionJwt })
    const session: any = resp.session
    const factors = Array.isArray(session?.authentication_factors) ? session.authentication_factors : []
    const now = Date.now()
    for (const factor of factors) {
      const type = factor?.type
      const lastAuthAt = factor?.last_authenticated_at ? Date.parse(factor.last_authenticated_at) : undefined
      if (!lastAuthAt || isNaN(lastAuthAt)) continue
      if ((type === 'otp' || type === 'totp') && (now - lastAuthAt) <= windowMs) {
        return true
      }
    }
    return false
  } catch {
    return false
  }
}


