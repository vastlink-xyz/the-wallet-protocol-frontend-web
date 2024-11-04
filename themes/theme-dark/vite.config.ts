import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import packageJson from './package.json'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      nodePolyfills(),
      // visualizer({
      //   open: true,
      //   // gzipSize: true,
      // }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@root": path.resolve(__dirname),
      },
    },
    build: {
      lib: {
        entry: 'src/main.tsx',
        formats: ['es'],
        name: packageJson.name,
        fileName: () => 'index.js',
      },
      outDir: path.resolve(__dirname, `../../public/dist/${packageJson.name}`),
      emptyOutDir: true,
      rollupOptions: {
        output: {
          format: 'es',
          // enable dynamic import
          inlineDynamicImports: false,
          manualChunks: {
            // React core packages
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            
            // Radix UI component library
            'vendor-radix': [
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-label',
              '@radix-ui/react-popover',
              '@radix-ui/react-select',
              '@radix-ui/react-slot',
              '@radix-ui/react-tabs',
              '@radix-ui/react-tooltip'
            ],
            
            // Web3 related
            'vendor-web3': [
              '@walletconnect/core',
              '@walletconnect/types',
              '@walletconnect/utils',
              '@walletconnect/web3wallet',
              '@web3auth/base',
              '@web3auth/ethereum-mpc-provider',
              '@web3auth/mpc-core-kit',
              'viem'
            ],
            
            // UI utility libraries
            'vendor-ui-utils': [
              'class-variance-authority',
              'clsx',
              'cmdk',
              'lucide-react',
              'tailwind-merge',
              'tailwindcss-animate'
            ],
            
            // Functional utility libraries
            'vendor-utils': [
              'axios',
              'date-fns',
              'i18next',
              'react-i18next',
              'react-copy-to-clipboard',
              'react-qr-code',
              'react-toastify',
              'uuid'
            ]
          }
        },
      },
    },
    server: {
      port: 5173,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    // define: {
    //   'process.env.NODE_ENV': JSON.stringify(command === 'serve' ? 'development' : 'production'),
    // },
  }
})
