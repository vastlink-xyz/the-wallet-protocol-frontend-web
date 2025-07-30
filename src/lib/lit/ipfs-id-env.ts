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

const updateWalletSettingsIpfsId = 'QmTtpVJ8uv5J5zyLGXanATWAvPkynYdycMfkD6LfJMiUu8'
const updateWalletSettingsIpfsIdHex = '0x1220528813ec1bf7e2a5e56a0fba21f03d599a46982c5da2b004fedac8c1d40861e3'

const createWalletIpfsId = 'QmY9nEaCUzpYJadmDapvpRhn72j2c8xjsu325DPxHq7WEQ'
const createWalletIpfsIdHex = '0x122091cbfd3e3f34e2a0d3390e7eb4f020c3b9af5debb973322b5206d6be1e48f0cd'

const verifyAuthTokenIpfsId = 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm'
const verifyAuthTokenIpfsHex = '0x1220e36e072b05d2d058cdbbbedfd7c924f89895b727066a73e4e29f6a1f88b75d86'

const multisigTransactionIpfsId = 'QmQDEDacXPLQ13GC5WETSeq9whtRgqAwnf6rd8p1byRoSh'
const multisigTransactionIpfsHex = '0x12201bd09d7cce19263467474d75fd0c63377d2706d93211e6c430e6c97aecb5594a'

const personalSignIpfsId = 'QmbZqMoXFa2jZkc3MBoNuezBMvQ4pBmmqCf6ziMvSuwvkc'
const personalSignIpfsIdHex = '0x1220c48885c1552dbf86675c26a605a216fdceaf80caf70d0a5b838a006c7767eee5'

const personalTransactionIpfsId = 'QmUdprzWAzVKCfA7F5osiQivyJDN52fxfxYJZ4d663nbXU'
const personalTransactionIpfsIdHex = '0x12205d8c79bf1c2ef24e8e3bd8c45ccc52dad4d04d6fe4462c6e51675ee3c3f0ad37'

const upgradeIpfsId = 'QmTdAJGwtd1Ex1akC5zjzQsHTGtPKKj4WnDNQftLsXN6Um'
const upgradeIpfsIdHex = '0x12204e852f217ab356ea529afc8584ef67340cae7b0cb0e76d8045735537f9323ca6'

const securityVerificationIpfsId = 'QmQ2uYBBDWvRuBG8M1ruF5vdpxUtKGQJ6XYk8FV9qwrFcf' // TODO: Replace with actual IPFS ID when deployed
const securityVerificationIpfsIdHex = '0x1220192bafae343aaa8f0b3daf1fbae32df693aabf915aaeb48c7787f1b89b125114'

const multiProviderAuthIpfsId = 'QmTFDFWLmE1DqKWA39WR2KzausGXKDGy9gZTUkavSYgeqw'
const multiProviderAuthIpfsIdHex = '0x122048e5be932c7302f4f84b8e621fae8de0abf1c9a278822320c58d1987b300a5b2'

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
