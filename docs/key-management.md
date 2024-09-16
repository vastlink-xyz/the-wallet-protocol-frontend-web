# Key Management Service Documentation

## Overview

The Key Management Service is an abstract class that provides a foundation for managing cryptographic keys and signing transactions in a blockchain-based application. It supports multiple implementation types, including Web3Auth with MPC (Multi-Party Computation) and Passport. 

The Passport implementation is available in the `main-passport-stable` branch. Currently, the application uses Web3Auth as the key management solution.


## Web3Auth MPC Core Kit

The current implementation uses the Web3Auth MPC Core Kit SDK (web version). This SDK leverages Multi-Party Computation (MPC) for secure key management and transaction signing. Here's a brief overview of its principles:

### MPC Core Kit SDK Flow

#### Initial Setup (2-of-2 MPC)

- By default, for a new user, the MPC Core Kit SDK starts in a 2/2 flow.
- The user generates two factors: a social login factor and a hashed cloud factor.
- The hashed cloud factor is derived on the SDK front end and stored in Web3Auth's encrypted metadata server.
- This setup allows users to start the login process from any device without creating an MFA factor.
- The initial onboarding is semi-custodial to ensure accessibility from any device.

#### MFA (Multi-Factor Authentication) Enabled (2-of-3 MPC)

When MFA is activated, the system transitions to a non-custodial 2-of-3 MPC setup:

- The user generates two new factors: a device factor and a backup (recovery) factor.
- The device factor is randomly generated and securely stored on the user's trusted device.
- The backup factor is generated through the `getSocialMFAFactorKey` method.
- The previously used hashed cloud factor is deleted.
- Any 2 out of these 3 factors (social login, device, and backup) are needed to reconstruct the private key and sign transactions.

This approach enhances security by ensuring that no single party has full control over the private key, while also providing flexibility and backup options. Users can access their account seamlessly from their trusted device using the device factor, or from any device using the backup factor.

Note: The OAuth Factor details are not returned in the key details.


## Key Management Service

### 1. Web3Auth Management Service (Currently in Use)

#### Signup Process
1. Frontend:
   - User enters email in the signup form.
   - Frontend sends a request to generate OTP for registration.
   - User receives OTP and enters it in the form.
   - Frontend verifies OTP with the backend and receives an idToken.
   - Frontend calls `keyManagementService.signUp()` with username and idToken.

2. Backend:
   - Generates and sends OTP for registration.
   - Verifies OTP and generates idToken.
   - Web3Auth MPC Core Kit creates a new account:
     - Generates two factors: social login factor and hashed cloud factor.
     - Stores hashed cloud factor in Web3Auth's encrypted metadata server.
   - Binds the generated address to the user's account.

#### Signin Process
1. Frontend:
   - User enters email in the signin form.
   - Frontend sends a request to generate OTP for login.
   - User receives OTP and enters it in the form.
   - Frontend verifies OTP with the backend and receives an idToken.
   - Frontend calls `keyManagementService.signIn()` with username and idToken.

2. Backend:
   - Generates and sends OTP for login.
   - Verifies OTP and generates idToken.
   - Web3Auth MPC Core Kit authenticates the user:
     - Retrieves the user's key shares.
     - Reconstructs the private key for signing transactions.
   - Binds the authenticated address to the user's account.

#### Sign Transaction Process
1. Frontend:
   - User initiates a transaction with recipient address, amount, and other details.
   - Frontend calls `keyManagementService.signTransaction()` with transaction details.

2. Backend:
   - Verifies transaction details and user's daily limit.
   - If daily limit is exceeded, requires additional OTP verification.
   - Prepares transaction payload.
   - Web3Auth MPC Core Kit signs the transaction:
     - Uses the reconstructed private key to sign the transaction.
   - Executes the signed transaction on the blockchain.
   - Notifies the server to send transaction confirmation.

The implementation details can be found in the following files:

Frontend (AuthRegister component):
```typescript:src/components/AuthRegister/index.tsx
startLine: 21
endLine: 247
```

Backend (Web3Auth Key Management Service):
```typescript:src/services/KeyManagementService/Web3authWithMPCKeyManagementService.ts
startLine: 14
endLine: 332
```

This setup ensures secure key management and transaction signing using Web3Auth's MPC Core Kit, providing a balance between security and user experience.


## Resources

- [Web3Auth MPC Core Kit](https://web3auth.io/docs/sdk/core-kit/mpc-core-kit)