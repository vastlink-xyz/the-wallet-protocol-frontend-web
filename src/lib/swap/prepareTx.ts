import { Network } from '@xchainjs/xchain-client'
import { AssetETH, Client as EthClient, defaultEthParams } from '@xchainjs/xchain-ethereum'
import { assetAmount, assetToBase } from '@xchainjs/xchain-util'

type PrepareParmas = {
    sender: string
    recipient: string
    amount: string
    network: Network
}

export const prepareEvmTx = async ({ sender, recipient, amount, network }: PrepareParmas) => {
    const client = new EthClient({
        ...defaultEthParams,
        network,
    })
    
    // THORChain 上所有 ERC20 资产的交换都通过原生 ETH 转账实现
    // 所以这里固定使用 AssetETH
    const unsignedRawTx = await client.prepareTx({
        sender,
        recipient,
        asset: AssetETH,
        amount: assetToBase(assetAmount(amount, 18)), // ETH 固定使用 18 位精度
    })
    
    console.log('Prepared ETH transaction:', unsignedRawTx)
    return unsignedRawTx
}
