export const BASE_URL = typeof window === 'undefined' ? (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'): ''

export const IS_PRODUCTION = process.env.NEXT_PUBLIC_ENV?.toLowerCase() === 'production';

export enum KeyManagementPlatform {
    Fireblocks = "Fireblocks",
    LitProtocol = "Lit Protocol",
}