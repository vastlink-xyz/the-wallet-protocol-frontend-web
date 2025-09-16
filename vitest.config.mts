import { defineConfig } from 'vitest/config'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // absolute path!
    },
  },
  test: { 
    setupFiles: ['./tests/setup-env.ts'],
  },
})