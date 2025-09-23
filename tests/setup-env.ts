// test/setup-env.ts
import { config } from 'dotenv'
// choose one:
config()  
import { webcrypto } from 'node:crypto'

// Ensure Web Crypto API is available in Node test environment
if (!(globalThis as any).crypto) {
    ;(globalThis as any).crypto = webcrypto as unknown as Crypto
}