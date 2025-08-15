import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { verifyAuthTokenLitActionCode } from "../lit-action-code/verify-auth-token"
import { litActionCodeForMultisigTransaction } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { litActionCodeForPersonalTransaction } from "../lit-action-code/personal-transaction.lit"
import { litActionCodeForCommonUpgradableProxy } from "../lit-action-code/common-upgradable-proxy.lit"
import { litActionCodeForUpdateMultisigWalletSettings } from "../lit-action-code/update-multisig-wallet-settings"
import { litActionCodeForCreateMultisigWallet } from "../lit-action-code/create-multisig-wallet"
import { litActionCodeForSecurityVerification } from "../lit-action-code/security-verification.lit"
import { litActionCodeForMultiProviderAuth } from "../lit-action-code/multi-provider-auth.lit"
import { litActionCodeForAPIKeyManagement } from "../lit-action-code/api-key-management.lit"
import { litActionCodeForDebugAPIKeys } from "../lit-action-code/debug-api-keys.lit"

const updateWalletSettingsIpfsId = 'QmdCHgm4uAaQWzPR9pTf8WCKQDKTTLeyjnLehp5DevkaKy'
const updateWalletSettingsIpfsIdHex = '0x1220dcbae2eb8103743aa6686169d46f34cfde13a60a0e74805cbed812de26819f18'

const createWalletIpfsId = 'QmWqra156GwV2cr9pDcQdv8GYAro4e3ch6gAHvZo3h7GA3'
const createWalletIpfsIdHex = '0x12207e58bfd35ba3463a00393b11b75ed1b9f185376ea3bcec157eb1be8149162a58'

const verifyAuthTokenIpfsId = 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm'
const verifyAuthTokenIpfsHex = '0x1220e36e072b05d2d058cdbbbedfd7c924f89895b727066a73e4e29f6a1f88b75d86'

const multisigTransactionIpfsId = 'QmXitw6nRyuniNHFZRfzuHXgxL4kB5cZMCJckzxRNC7EGF'
const multisigTransactionIpfsHex = '0x12208b6c0b15d200c6b4b278954758de3e04cbc804ebe9b74d240537b316119eb388'

const personalSignIpfsId = 'QmVZfSsZS7uggyZkmuCN1BECCkRyCLASA1hkn6yTaDrHQX'
const personalSignIpfsIdHex = '0x12206b57315602eb6bcf0d38eadb929fe06122bb8b4b1e4f6479074e94195b89b11c'

const personalTransactionIpfsId = 'QmeFc4eZVmboS36FjWb5iuHQ8pqQGKrRHMTrQESqj1sMAE'
const personalTransactionIpfsIdHex = '0x1220ec70185a1b8a335378dbcc0b9fbf15fbc32ef2edd8905e5fb601cd6b6761da77'

const upgradeIpfsId = 'QmTdAJGwtd1Ex1akC5zjzQsHTGtPKKj4WnDNQftLsXN6Um'
const upgradeIpfsIdHex = '0x12204e852f217ab356ea529afc8584ef67340cae7b0cb0e76d8045735537f9323ca6'

const securityVerificationIpfsId = 'QmQ2uYBBDWvRuBG8M1ruF5vdpxUtKGQJ6XYk8FV9qwrFcf'
const securityVerificationIpfsIdHex = '0x1220192bafae343aaa8f0b3daf1fbae32df693aabf915aaeb48c7787f1b89b125114'

const multiProviderAuthIpfsId = 'QmUALzmKCewVAHvjgqiu3UKCYXESEbZkjJiXVkjUV9iPUj'
const multiProviderAuthIpfsIdHex = '0x122056824919f62c758f1077655070e5ef9b0f422e7dad3888efb1e2c110216a9288'

const apiKeyManagementIpfsId = 'QmT7bBZqsYubFWcPDxgrqgC71GiJwFA5ZyUouRTxcd6mse'
const apiKeyManagementIpfsIdHex = '0x122046f1e58a0711b6eb661411bb958a058d028ae9719bf9665a2ac0545928bef451'

const debugAPIKeysIpfsId = 'QmNeoddCrUW8UuyDagzXDERay46PgWybg9Am4tqpyDB9k7'
const debugAPIKeysIpfsIdHex = '0x122004a68b249aacc42ee7e0674947575cea793cd4d745670e3fef715118e15a86f4'

export const getUpdateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForUpdateMultisigWalletSettings,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return updateWalletSettingsIpfsId
    } else {
      return updateWalletSettingsIpfsIdHex
    }
  }
}

export const getCreateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForCreateMultisigWallet,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return createWalletIpfsId
    } else {
      return createWalletIpfsIdHex
    }
  }
}

export const getVerifyAuthTokenIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: verifyAuthTokenLitActionCode,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return verifyAuthTokenIpfsId
    } else {
      return verifyAuthTokenIpfsHex
    }
  }
}

export const getMultisigTransactionIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForMultisigTransaction,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return multisigTransactionIpfsId
    } else {
      return multisigTransactionIpfsHex
    }
  }
}

export const getPersonalSignIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: personalSignLitActionCode,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return personalSignIpfsId
    } else {
      return personalSignIpfsIdHex
    }
  }
}

export const getPersonalTransactionIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForPersonalTransaction,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return personalTransactionIpfsId
    } else {
      return personalTransactionIpfsIdHex
    }
  }
}

export const getUpgradeIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForCommonUpgradableProxy,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return upgradeIpfsId
    } else {
      return upgradeIpfsIdHex
    }
  }
}

export const getSecurityVerificationIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForSecurityVerification,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return securityVerificationIpfsId
    } else {
      return securityVerificationIpfsIdHex
    }
  }
}

export const getMultiProviderAuthIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForMultiProviderAuth,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return multiProviderAuthIpfsId
    } else {
      return multiProviderAuthIpfsIdHex
    }
  }
}

export const getAPIKeyManagementIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForAPIKeyManagement,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return apiKeyManagementIpfsId
    } else {
      return apiKeyManagementIpfsIdHex
    }
  }
}

export const getDebugAPIKeysIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: litActionCodeForDebugAPIKeys,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return debugAPIKeysIpfsId
    } else {
      return debugAPIKeysIpfsIdHex
    }
  }
}
