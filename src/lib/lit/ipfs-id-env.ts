import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { verifyAuthTokenLitActionCode } from "../lit-action-code/verify-auth-token"
import { litActionCodeForMultisigTransaction } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { litActionCodeForPersonalTransaction } from "../lit-action-code/personal-transaction.lit"
import { litActionCodeForCommonUpgradableProxy } from "../lit-action-code/common-upgradable-proxy.lit"
import { litActionCodeForUpdateMultisigWalletSettings } from "../lit-action-code/update-multisig-wallet-settings"
import { litActionCodeForCreateMultisigWallet } from "../lit-action-code/create-multisig-wallet"

const updateWalletSettingsIpfsId = 'QmRCJUJ7QwqcZyZM1MCncwx6PgbfmgkeYiRzc79jiZzUAY'
const updateWalletSettingsIpfsIdHex = '0x12202a6f87ef3a17bbd113f8d9df3c07a9790d6056a0b7b46a88e5e5655a8e7152fd'

const createWalletIpfsId = 'QmY9nEaCUzpYJadmDapvpRhn72j2c8xjsu325DPxHq7WEQ'
const createWalletIpfsIdHex = '0x122091cbfd3e3f34e2a0d3390e7eb4f020c3b9af5debb973322b5206d6be1e48f0cd'

const verifyAuthTokenIpfsId = 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm'
const verifyAuthTokenIpfsHex = '0x1220e36e072b05d2d058cdbbbedfd7c924f89895b727066a73e4e29f6a1f88b75d86'

const multisigTransactionIpfsId = 'QmUgPz93JZ3UZzWaop3ME1bszxdHBvqs8rgrVjyP97hD5d'
const multisigTransactionIpfsHex = '0x12205e3516f96683a719f8b2ef39c4590a1f3b27dd51b6fad9fc398b5509245233dc'

const personalSignIpfsId = 'QmbZqMoXFa2jZkc3MBoNuezBMvQ4pBmmqCf6ziMvSuwvkc'
const personalSignIpfsIdHex = '0x1220c48885c1552dbf86675c26a605a216fdceaf80caf70d0a5b838a006c7767eee5'

const personalTransactionIpfsId = 'QmZqSkCMu9C4Lgxqjrx67upyPgti31kefGxFjFypopLVKL'
const personalTransactionIpfsIdHex = '0x1220aad0df3870db9aa0ec9892faf69c1ce4c88c4e585c0fea05c1a7b77a617f917f'

const upgradeIpfsId = 'QmTdAJGwtd1Ex1akC5zjzQsHTGtPKKj4WnDNQftLsXN6Um'
const upgradeIpfsIdHex = '0x12204e852f217ab356ea529afc8584ef67340cae7b0cb0e76d8045735537f9323ca6'


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
