import { updateWalletLitActionCode } from "@/app/debug/lit-actions/update-wallet"
import { getLitActionIpfsCid } from "./get-lit-action-ipfs-cid"
import { createWalletLitActionCode } from "@/app/debug/lit-actions/create-wallet"

const updateWalletIpfsId = 'QmRvbDbi1ABJDeK4wXVXYsjj1Z952RvG4VZX4dghqWBmsV'
const updateWalletIpfsIdHex = '0x12203544dc44fc12ef96c4f648ea7279b9051f7129ba5a33e49fa21cc1b65e86d980'

const createWalletIpfsId = 'QmRPr5M6tpmaZHe4GsWrovpqZhqAQsMaZXwj4PGAqT7P3d'
const createWalletIpfsIdHex = '0x12202d64a7b02f6aa59d52801624ba20945d0a56c57c5d7d3e711e176bbc2f6ab200'


export const getUpdateWalletIpfsId = async (outputFormat: "base58" | "hex") => {
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    return await getLitActionIpfsCid({
      input: updateWalletLitActionCode,
      outputFormat: outputFormat
    })
  } else {
    if (outputFormat === "base58") {
      return updateWalletIpfsId
    } else {
      return updateWalletIpfsIdHex
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
