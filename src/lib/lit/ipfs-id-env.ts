import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { verifyAuthTokenLitActionCode } from "../lit-action-code/verify-auth-token"
import { litActionCodeForMultisigTransaction } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { litActionCodeForPersonalTransaction } from "../lit-action-code/personal-transaction.lit"
import { litActionCodeForCommonUpgradableProxy } from "../lit-action-code/common-upgradable-proxy.lit"
import { litActionCodeForUpdateMultisigWalletSettings } from "../lit-action-code/update-multisig-wallet-settings"
import { litActionCodeForCreateMultisigWallet } from "../lit-action-code/create-multisig-wallet"
import { litActionCodeForSecurityVerification } from "../lit-action-code/security-verification.lit"

const updateWalletSettingsIpfsId = 'QmNniRddfbZ7oiTSLNrwgLg6qdg2Mk97T97rpA7kbS6BVK'
const updateWalletSettingsIpfsIdHex = '0x122006ad4d7ce4ccc19a23dc94eb13a9ac57eee06890d7aa6c2dd72ae26787cc812a'

const createWalletIpfsId = 'QmY9nEaCUzpYJadmDapvpRhn72j2c8xjsu325DPxHq7WEQ'
const createWalletIpfsIdHex = '0x122091cbfd3e3f34e2a0d3390e7eb4f020c3b9af5debb973322b5206d6be1e48f0cd'

const verifyAuthTokenIpfsId = 'QmdeSZo7yUsfT4fVosxK55dz4fPEWokeFBPfRR2NdV9HJm'
const verifyAuthTokenIpfsHex = '0x1220e36e072b05d2d058cdbbbedfd7c924f89895b727066a73e4e29f6a1f88b75d86'

const multisigTransactionIpfsId = 'QmdVHaXNfwxNpFzEpE9BGFneJrTnR3TWxsDKqWyVTJLv6o'
const multisigTransactionIpfsHex = '0x1220e115a37a855ddf359f1312e382905ee009b131a3f5cf016e142d050e561cfb0c'

const personalSignIpfsId = 'QmbZqMoXFa2jZkc3MBoNuezBMvQ4pBmmqCf6ziMvSuwvkc'
const personalSignIpfsIdHex = '0x1220c48885c1552dbf86675c26a605a216fdceaf80caf70d0a5b838a006c7767eee5'

const personalTransactionIpfsId = 'QmUdprzWAzVKCfA7F5osiQivyJDN52fxfxYJZ4d663nbXU'
const personalTransactionIpfsIdHex = '0x12205d8c79bf1c2ef24e8e3bd8c45ccc52dad4d04d6fe4462c6e51675ee3c3f0ad37'

const upgradeIpfsId = 'QmTdAJGwtd1Ex1akC5zjzQsHTGtPKKj4WnDNQftLsXN6Um'
const upgradeIpfsIdHex = '0x12204e852f217ab356ea529afc8584ef67340cae7b0cb0e76d8045735537f9323ca6'

const securityVerificationIpfsId = 'QmQ2uYBBDWvRuBG8M1ruF5vdpxUtKGQJ6XYk8FV9qwrFcf' // TODO: Replace with actual IPFS ID when deployed
const securityVerificationIpfsIdHex = '0x1220192bafae343aaa8f0b3daf1fbae32df693aabf915aaeb48c7787f1b89b125114'


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
