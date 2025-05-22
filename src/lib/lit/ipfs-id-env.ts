import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { createWalletLitActionCode } from "../lit-action-code/create-wallet"
import { verifyAuthTokenLitActionCode } from "../lit-action-code/verify-auth-token"
import { updateWalletSettingsLitActionCode } from "../lit-action-code/update-wallet-settings"
import { multisigTransactionLitActionCode } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { upgradeLitActionCode } from "../lit-action-code/upgrade.lit"
import { personalTransactionLitActionCode } from "../lit-action-code/personal-transaction.lit"

const updateWalletSettingsIpfsId = 'Qmd7WYJPCDPdWjx9MJWR9zRPa6DQdT7XAEADKX5orqkx7t'
const updateWalletSettingsIpfsIdHex = '0x1220db81843e88873ef8dfc91afe04f1158b70873fa7b3df0b95116315b6fda49323'

const createWalletIpfsId = 'QmWWCfH9doco4zadnFk5wKYTfvnWx71ZoUCoUcMj69qPuk'
const createWalletIpfsIdHex = '0x1220794fd99f5f8459c602e869a7af409bd7f3bf92b5d45f689bcf31b9f736a9a2ab'

const verifyAuthTokenIpfsId = 'QmNcUQ4jqnnjNue8T5RNekSQ2numbqshSiyXCnZi73QZ1u'
const verifyAuthTokenIpfsHex = '0x1220040da25a9624a5c139461568874b5f39658a5f9d728c4bc538fb320eb19add6c'

const multisigTransactionIpfsId = 'QmP1DcZW5gXfanpcYbRuGZNC8mPCcFc5npEGqEbv775wrM'
const multisigTransactionIpfsHex = '0x122009e1469e7be220361694ccc085a695975dab8adc8303dd7df912e6ddf960dac6'

const personalSignIpfsId = 'QmNriw4V52jaaXQaADWraKxCGoeY7gmmniE7tzyWwZCj3A'
const personalSignIpfsIdHex = '0x122007b4331ad60377dd5d1bb3b69ffb54e6dbf6ced26c98d80486717bf75925321d'

const personalTransactionIpfsId = 'QmNfpaJRiJ6qjQuRfhaTmgvXmaPaRHprHu7PeBpBNuCarW'
const personalTransactionIpfsIdHex = '0x122004e930b3cd486bd127f38b4c4dcf8f360b0ecaaffba80c7c26bd97cfcdc9c9f3'

const upgradeIpfsId = 'QmTdAJGwtd1Ex1akC5zjzQsHTGtPKKj4WnDNQftLsXN6Um'
const upgradeIpfsIdHex = '0x12204e852f217ab356ea529afc8584ef67340cae7b0cb0e76d8045735537f9323ca6'


export const getUpdateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: updateWalletSettingsLitActionCode,
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
      input: createWalletLitActionCode,
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
      input: multisigTransactionLitActionCode,
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
      input: personalTransactionLitActionCode,
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
      input: upgradeLitActionCode,
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
