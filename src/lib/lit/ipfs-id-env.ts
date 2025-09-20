import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { litActionCodeForMultisigTransaction } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { litActionCodeForPersonalTransaction } from "../lit-action-code/personal-transaction.lit"
import { litActionCodeForCommonUpgradableProxy } from "../lit-action-code/common-upgradable-proxy.lit"
import { litActionCodeForUpdateMultisigWalletSettings } from "../lit-action-code/update-multisig-wallet-settings"
import { litActionCodeForCreateMultisigWallet } from "../lit-action-code/create-multisig-wallet"
import { litActionCodeForSecurityVerification } from "../lit-action-code/security-verification.lit"
import { litActionCodeForMultiProviderAuth } from "../lit-action-code/multi-provider-auth.lit"
import { litActionCodeForAPIKeyManagement } from "../lit-action-code/api-key-management.lit"
import { litActionCodeForDecryptAndCombine } from "../lit-action-code/decrypt-and-combine.lit"

import { litActionCodeForDebugAPIKeys } from "../lit-action-code-debug(used for litprotocol-irys demo and apikey management)/debug-api-keys.lit"
import { litActionCodeForDebugStytchLogin } from "../lit-action-code-debug(used for litprotocol-irys demo and apikey management)/debug-login.lit"
import { litActionCodeForDebugStytchVerifyLogin } from "../lit-action-code-debug(used for litprotocol-irys demo and apikey management)/debug-verify-login.lit"


export const updateWalletSettingsIpfsId = 'QmSTrAhbiX1F1HH6dLJ7C2uMeCCG15tRLZkbZdAaPk63qG'
const updateWalletSettingsIpfsIdHex = '0x12203d46c501cb5b1e82a8c8d2d76dd8af3d463570b9d80c7a7d571e11b4ff77662f'

const createWalletIpfsId = 'QmWf9N4fVGzWBsAMLe9fndq35JjU8pwJ3P9pBm9pceAevq'
const createWalletIpfsIdHex = '0x12207b9a59829d92275e8c5c8a44f6b3589120b57481aeeccde79655044e0e6e1bbe'

const multisigTransactionIpfsId = 'QmWzhPe8TNkabScP9xAkRsD32xZ9AtK9s1jfYMPhbWfgze'
const multisigTransactionIpfsHex = '0x1220809c9928e352667fdd1b413b4134992a15e6f91d0c3f33e2baa07391c8140c8b'

const personalSignIpfsId = 'QmVbaippnwE2KrDNdywC2rDctp48yrof3TRdHFAQ6EjW6h'
const personalSignIpfsIdHex = '0x12206bd503067bfc0d473ea6f2618a0f1c1de46a3bffab2140156ea5ab0b13766b1e'

const personalTransactionIpfsId = 'QmYQNW1WhBcyvm1oWxE4478tQReVP1wmc9umZVDQMuTAUr'
const personalTransactionIpfsIdHex = '0x12209588dd8bacc7f10cbfe7b3ee5ed52445c81ff519e47c6bbd3835e900b28f3623'

const upgradeIpfsId = 'QmcZnFAjuh9NC9LCRfeoLkZ5Wd2c6JekWiFA9ygqrk8ojS'
const upgradeIpfsIdHex = '0x1220d360b01e6fd2706339fa441a24dac05ff273f3407d0686f1ea53c22605eba3fd'

export const securityVerificationIpfsId = 'QmY31p17D6Qhe7XXY6YJ7hKFs2cuMUeoXhM6PDQaunXUyy'
const securityVerificationIpfsIdHex = '0x12209010464044d3cc8864927a15f247fdc20b540e4b10be6181d2f8c0bbe913ec74'

export const multiProviderAuthIpfsId = 'QmZz9cqzvC9YLXxEFzTxX3AqdLTFPMCz37vYmm7gRz4CtR'
const multiProviderAuthIpfsIdHex = '0x1220ad0bbbe545b144a5eea3a24393fa785f3619a649303404a3ad2ed60069c714fa'

const apiKeyManagementIpfsId = 'Qme6Vm4mAN75NZ6N12q6L6Xn1qvFa9GdcsifQqZM7Akr8d'
const apiKeyManagementIpfsIdHex = '0x1220ea1abda8380c5012ad43dfcf529bee559b182c0f7cfc2f288847828f5c1794a6'

export const decryptAndCombineIpfsId = 'QmNrnF6JziscMbepBwWsx8YiWcEsrDgX6Ji5EbBVgtt49A'
const decryptAndCombineIpfsIdHex = '0x122007b7f1798c32489713d369f766588b0e2dc6c1469d72514da33e84959af538cd'

// ===== Debug lit actions =====
const debugAPIKeysIpfsId = 'QmNeoddCrUW8UuyDagzXDERay46PgWybg9Am4tqpyDB9k7'
const debugAPIKeysIpfsIdHex = '0x122004a68b249aacc42ee7e0674947575cea793cd4d745670e3fef715118e15a86f4'

const debugStytchLoginIpfsId = 'QmaFEpRBgB3APeahtXkXrjwPTiQkWS7JGGHJxCBTuEpEe2'
const debugStytchLoginIpfsIdHex = '0x1220b0e95341939a2c604dc877948346b2a492ae1740df084809be8fb4d14aecef5f'

const debugStytchVerifyLoginIpfsId = 'QmZ5yzqa94k9qQZ35xJBYF4ViHrewmxBjPkMV3iHHNm4DB'
const debugStytchVerifyLoginIpfsIdHex = '0x12209faea7528a0b12ca1301638aaab26365067f3e3f6c9fb06760e933c4410929de'
// ===== Debug lit actions =====

export const getUpdateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return updateWalletSettingsIpfsId
  } else {
    return updateWalletSettingsIpfsIdHex
  }
}

export const getCreateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return createWalletIpfsId
  } else {
    return createWalletIpfsIdHex
  }
}

export const getMultisigTransactionIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return multisigTransactionIpfsId
  } else {
    return multisigTransactionIpfsHex
  }
}

export const getPersonalSignIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return personalSignIpfsId
  } else {
    return personalSignIpfsIdHex
  }
}

export const getPersonalTransactionIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return personalTransactionIpfsId
  } else {
    return personalTransactionIpfsIdHex
  }
}

export const getUpgradeIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return upgradeIpfsId
  } else {
    return upgradeIpfsIdHex
  }
}

export const getSecurityVerificationIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return securityVerificationIpfsId
  } else {
    return securityVerificationIpfsIdHex
  }
}

export const getMultiProviderAuthIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return multiProviderAuthIpfsId
  } else {
    return multiProviderAuthIpfsIdHex
  }
}

export const getAPIKeyManagementIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return apiKeyManagementIpfsId
  } else {
    return apiKeyManagementIpfsIdHex
  }
}

export const getDecryptAndCombineIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return decryptAndCombineIpfsId
  } else {
    return decryptAndCombineIpfsIdHex
  }
}

// ===== Debug lit actions =====
export const getDebugAPIKeysIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return debugAPIKeysIpfsId
  } else {
    return debugAPIKeysIpfsIdHex
  }
}

export const getDebugStytchLoginIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return debugStytchLoginIpfsId
  } else {
    return debugStytchLoginIpfsIdHex
  }
}

export const getDebugStytchVerifyLoginIpfsId = async (outputFormat: "base58" | "hex") => {
  if (outputFormat === "base58") {
    return debugStytchVerifyLoginIpfsId
  } else {
    return debugStytchVerifyLoginIpfsIdHex
  }
}
// ===== Debug lit actions =====