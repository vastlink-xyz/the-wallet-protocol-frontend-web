# Irys + Lit Actions Integration Issue

## Project Structure

```
├── irys/
│   ├── toBundle.js          # Lit Action code
│   ├── esbuild.js           # Bundle script  
│   ├── esbuild-shims.js     # Node.js polyfills
│   └── irys.js              # Test runner
├── index.js                 # Node.js Irys demo
└── package.json
```

## Commands

```bash
npm install                  # Install dependencies
node index.js               # Test Irys in Node.js Environment
npm run irysBundle          # run bundler and lit action
```

## ❌ Project Status

**Current project build failed - Runtime environment incompatibility**

## Project Reference

The `irys` directory structure and bundling configuration of this project is based on the official Lit Protocol example:
- **Reference Project**: [LIT Protocol SIWE Bundle Test](https://github.com/LIT-Protocol/js-serverless-function-test/tree/main/bundleTests/siwe)
- **Difference**: While the SIWE project can bundle successfully (though Lit action execution fails due to old lit version), Irys SDK encounters Deno environment compatibility issues

## Problem Description

The current project encounters runtime environment incompatibility issues when attempting to integrate Irys SDK in Lit Actions.

### Root Cause

1. **Runtime Environment Mismatch**
   - **Lit Actions**: Run in Deno environment
   - **Irys SDK**: Specifically designed for Node.js environment

2. **Module System Incompatibility**
   - **Deno**: Uses ES modules, doesn't support `require()` function
   - **Irys SDK**: Heavily uses `require('util')`, `require('events')` and other Node.js built-in modules

3. **Missing Node.js Built-in Modules**
   - The following Node.js core modules don't exist in Deno environment:
     - `util` - Utility functions
     - `events` - Event emitter
     - `stream` - Data stream processing
     - `crypto` - Cryptographic functionality
     - `path` - Path handling
     - `fs` - File system operations

### Error Example

```
Uncaught ReferenceError: util is not defined
```

### Technical Background

Irys SDK has a very complex dependency chain:

```
@irys/upload
├── fs (file system operations)
├── stream (data stream processing)  
├── path (path handling)
└── @irys/upload-ethereum
    ├── crypto (cryptographic operations)
    ├── events (event handling)
    └── util (utility functions)
```

These are all Node.js-specific built-in modules that don't exist in the Deno environment.

### Possible Solutions

1. **Browser Polyfills Approach**
   - Irys officially supports usage in React/browser environments
   - Provides Node.js module compatibility through webpack polyfills
   - Reference: [Irys React Guide](https://docs.irys.xyz/build/d/guides/irys-react)
   - May be applicable to Deno environment with complete polyfill configuration
   - **esbuild configuration change**: Change `platform: "node"` to `platform: "browser"`

2. **HTTP API Approach** 
   - Wrap Irys SDK API as HTTP API, call via fetch in Lit Action
   - Avoid using heavyweight SDK directly

