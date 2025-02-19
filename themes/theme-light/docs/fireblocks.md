# Fireblocks Integration Documentation

## 1. Overview
The Fireblocks integration consists of frontend and backend components. This documentation describes the frontend integration process with Fireblocks.

## 2. Fireblocks Dependencies and Initialization
### 2.1 Dependencies
- `@fireblocks/ncw-js-sdk` is the frontend JavaScript SDK for Fireblocks
- `js-base64` is used for new device authorization
- `socket.io-client` is used for communication with Fireblocks backend
- `base58-js` is mainly used for Fireblocks backup and recovery functionality
- `firebase` integrates with Google Drive for backing up and restoring Fireblocks wallet MPC key shares

### 2.2 Initialization
The FireblocksNCW instance is initialized after the user successfully logs in through Auth0 and obtains the JWT. It implements the messagesHandler, eventsHandler, and secureStorageProvider functions.
```
fireblocksNCW = await FireblocksNCWFactory({
    env: import.meta.env.VITE_NCW_SDK_ENV as TEnv,
    deviceId,
    messagesHandler,
    eventsHandler,
    secureStorageProvider,
});
```
You can refer to the initFireblocksNCW function in the project.

Before initialization, you need to initialize the websocket for backend communication. Refer to the ApiService class implementation in the project.
```
this.manager = new Manager(this._baseUrl, {
    autoConnect: true,
    withCredentials: true,
});
this.socket = this.manager.socket("/", {
    auth: async (cb) => cb({ token: auth0_access_token }),
});
```

## 3. Integration Process

### 3.1 User Registration
After successful registration through Auth0, users are redirected to the Auth0 callback page. On this page, you can generate the current device ID, create a Fireblocks wallet, create MPC keys, and add assets (generate BTC Address).

#### 3.1.1 Generate Device ID
Call the getOrCreateDeviceId function with the user's sub parameter to generate the current user's deviceId and store it in localStorage.
Refer to the getOrCreateDeviceId function in the project.

#### 3.1.2 Initialize FireblocksNCW Instance
Call the initFireblocksNCW function with the deviceId parameter to initialize the FireblocksNCW instance and store it in localStorage.
Refer to the initFireblocksNCW function in the project.

#### 3.1.3 Create Fireblocks Wallet
Call the `/keymanagement/signup` API, passing username and deviceId parameters. The backend will create a Fireblocks wallet and assign the current deviceId to the wallet.

#### 3.1.4 Generate MPC Keys
Call the generateMPCKeys function of fireblocksNCW, passing the MPCAlgorithm parameter. It returns a keyDescriptor, and when keyDescriptor's keyStatus is READY, it indicates successful MPC keys creation.
Refer to the generateMPCKeys function in the FireblocksKeyManagement class.

#### 3.1.5 Add Assets
Call the `fireblocks/devices/${deviceId}/accounts/${accountId}/assets/${assetId}` API, with accountId set to 0 and assetId set to BTC_TEST (testnet).

### 3.2 User Login
After successful login through Auth0, users are redirected to the Auth0 callback page. On this page, first call the `/keymanagement/signin` API to ensure Fireblocks has assigned a wallet to the current deviceId, then proceed with fireblocksNCW initialization.

### 3.3 Sending Transactions
#### 3.3.1 Create Transaction
Call the `/transaction/sign` API to get a txId. Signing cannot be performed immediately. The frontend needs to poll the `fireblocks/devices/${deviceId}/transactions/${txId}` API until the tx status returns PENDING_SIGNING, indicating the transaction is ready for signing.

#### 3.3.2 Sign Transaction
Call the signTransaction function of fireblocksNCW with the txId parameter. Upon successful signing, Fireblocks automatically broadcasts the transaction. You can query the transaction status using the `fireblocks/devices/${deviceId}/transactions/${txId}` API.

### 3.4 Wallet Backup and Recovery
#### 3.4.1 Backup Wallet
It's recommended to backup the wallet immediately after generating MPC keys. The frontend should first check if the current device has been backed up. If backed up, return the backup information directly. If not, backup can be performed through Google Drive or iCloud. After successful backup, return the backup information.
Refer to backupAndRecover.ts for backup-related code.

#### 3.4.2 Recover Wallet
First call the `fireblocks/wallets/${walletId}/backup/latest` API to get the latest backup information, then call the storeDeviceId function to set deviceId in localStorage, initialize the FireblocksNCW instance by calling initFireblocksNCW, and finally call recoverKeys to restore MPC keys.
You can use fireblocksNCWInstance?.getKeysStatus to check if recovery was successful.

### 3.5 Requesting Device And Approving Device
#### 3.5.1 Requesting Device
When logging in on a new device, a new deviceId is generated. To join the user's existing wallet from the old device, call fireblocksNCWInstance's requestJoinExistingWallet method to generate base64-encoded data.

#### 3.5.2 Approving Device
On the old device, decode the base64-encoded data and call fireblocksNCWInstance's approveJoinWalletRequest method with the requestId parameter to approve the join wallet request.

### 3.6 TODO: Key Storage
When performing MPC computation-related operations (such as signing, generating MPC keys, backing up/recovering wallets), the Fireblocks SDK triggers a browser popup requiring users to enter a password to unlock the keys. Keys are automatically locked after each operation. We will implement biometric authentication or Passkey methods to replace password input in future updates.
