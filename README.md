# Passport-Quickstart

This project is a demonstration of integrating the Passport SDK for user registration, authentication, and message signing within a Next.js application. It showcases how to set up a basic authentication flow using Webauthn with `@0xpass/passport` and `@0xpass/webauthn-signer`, along with blockchain interactions via Viem.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the repository
   First, clone the project repository to your local machine using Git:

2. Install dependencies
   Navigate to the project directory and install the necessary dependencies using npm, yarn, or pnpm:

- npm: `npm install`
- yarn: `yarn install`
- pnpm: `pnpm install`

This command installs all dependencies required for the project, including the Passport SDK and related libraries.

3. Start a local Hardhat node
- `npx hardhat node`

3.1. Blockchain explorer for local Hardhat node
https://app.tryethernal.com/overview

4. Run the development server
   Start the development server to view the project in your web browser:

- npm: `npm run dev`
- yarn: `yarn run dev`
- pnpm: `pnpm run dev`

Open http://localhost:3000 in your browser to see the application.

## Editing the Project

You can start editing the project by modifying pages/index.js or any other file in the pages directory. Save your changes, and the page will automatically update to reflect them.

## Set Environment Variable
For local development, create a .env file in the root directory of the project. For Heroku deployment, use a .env.heroku file. Add the following variables to the appropriate file:
```
NEXT_PUBLIC_WALLET_PROTOCAL_API_BASEURL=<api_base_url> # Development is http://localhost:5001
NEXT_PUBLIC_SCOPE_ID=<scope_id> # Development is 4b8e66a2-bf1f-4d9d-8df8-7f7aa7502370
NEXT_PUBLIC_JSON_RPC=<json_rpc> # Development is http://127.0.0.1:8545
NEXT_PUBLIC_ETHSCAN_TRANSACTION=<tx_scan_url> # Development is https://app.tryethernal.com/transaction
NEXT_PUBLIC_ENV=development
```

## Config ScopeId
https://docs.0xpass.io/authentication/configuring-your-scope#passkeys

## Deploy using Heroku
```
# Ensure you are on the 'main' branch before deploying
$ heroku login -i
$ node ./deploy.js
```