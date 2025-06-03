import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { createWalletLitActionCode } from "../lit-action-code/create-wallet"
import { verifyAuthTokenLitActionCode } from "../lit-action-code/verify-auth-token"
import { updateWalletSettingsLitActionCode } from "../lit-action-code/update-wallet-settings"
import { multisigTransactionLitActionCode } from "../lit-action-code/multisig-transaction.lit"
import { personalSignLitActionCode } from "../lit-action-code/proposal-sign.lit"
import { upgradeLitActionCode } from "../lit-action-code/upgrade.lit"
import { personalTransactionLitActionCode } from "../lit-action-code/personal-transaction.lit"

const updateWalletSettingsIpfsId = 'QmW7wpDK4nYv74y4gQtwfAFE9r8E7es9vNZP1zUEwb6JHu'
const updateWalletSettingsIpfsIdHex = '0x1220739c4930a5c9ae89c39c0db56a1551ac1f5f2d32723a8744e1f9707c15cb5fa0'

const createWalletIpfsId = 'QmWWCfH9doco4zadnFk5wKYTfvnWx71ZoUCoUcMj69qPuk'
const createWalletIpfsIdHex = '0x1220794fd99f5f8459c602e869a7af409bd7f3bf92b5d45f689bcf31b9f736a9a2ab'

const verifyAuthTokenIpfsId = 'QmNcUQ4jqnnjNue8T5RNekSQ2numbqshSiyXCnZi73QZ1u'
const verifyAuthTokenIpfsHex = '0x1220040da25a9624a5c139461568874b5f39658a5f9d728c4bc538fb320eb19add6c'

const multisigTransactionIpfsId = 'QmeAnNwsJWHzbKup72BLsGSBtQU35UJB8Uqk66zBxGCUdj'
const multisigTransactionIpfsHex = '0x1220eb33dad6d931e3079a0d096047a4d8acfb67cbbce555762ac41ab7881679ec26'

const personalSignIpfsId = 'QmNriw4V52jaaXQaADWraKxCGoeY7gmmniE7tzyWwZCj3A'
const personalSignIpfsIdHex = '0x122007b4331ad60377dd5d1bb3b69ffb54e6dbf6ced26c98d80486717bf75925321d'

const personalTransactionIpfsId = 'QmVhzmG12mfzwVM2YZ2Rj5R71Kc4GwcZA3g7tFizskACKK'
const personalTransactionIpfsIdHex = '0x12206d79ae56b8483352d4021cb77d647c140e3134cf596001aea124b86145e909ca'

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
