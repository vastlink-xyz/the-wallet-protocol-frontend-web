import { ClientKeystore as EVMClientKeystore, EVMClientParams, SignTransferParams, SignApproveParams } from '@xchainjs/xchain-evm'
import { ISigner } from '@xchainjs/xchain-evm'
import { litNodeClient } from '@/lib/lit'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { FeeOption, TxHash, FeeRate, checkFeeBounds } from '@xchainjs/xchain-client'
import { ethers } from "ethers";
import {
    SessionSigsMap,
} from '@lit-protocol/types';
import { AddressFormat, Client as BaseBtcClient } from '@xchainjs/xchain-bitcoin'
import { TxParams, UtxoClientParams } from '@xchainjs/xchain-utxo'
import { btcConfig } from '@/lib/web3/btc';
import * as bitcoinjs from "bitcoinjs-lib";
import { broadcastTransactionByTokenType } from '../web3/transaction'

export type LitEVMKeystoreClientParams = EVMClientParams & {
    sessionSigs: SessionSigsMap;
    publicKey: string;
    authParams: {
        accessToken: string;
        authMethodId: string;
        authMethodType: number;
    };
    otp: string;
    mfaMethodId: string;
    ethAddress: string;
};

export class LitEvmClientKeystore extends EVMClientKeystore {
    /**
     * Constructor for the Ethereum EVM client.
     * @param {Object} config - Configuration object for the client (optional).
     *                          Defaults to `defaultEthParams` if not provided.
     */
    constructor(config: Omit<LitEVMKeystoreClientParams, 'signer'>) {
        // Call the constructor of the parent class with the provided config or the default parameters
        super({
            ...config,
            signer: new LitEvmKeystoreSigner({
                sessionSigs: config.sessionSigs,
                publicKey: config.publicKey,
                authParams: config.authParams || {},
                otp: config.otp || '',
                mfaMethodId: config.mfaMethodId || '',
                ethAddress: config.ethAddress || '',
            }),
        })
    }
}

export class LitEvmKeystoreSigner implements ISigner {
    private sessionSigs: SessionSigsMap;
    private publicKey: string;
    private authParams: {
        accessToken: string;
        authMethodId: string;
        authMethodType: number;
    };
    private ethAddress: string;
    private otp: string;
    private mfaMethodId: string;

    constructor({
        sessionSigs,
        publicKey,
        authParams,
        ethAddress,
        otp,
        mfaMethodId
    }: {
        sessionSigs: SessionSigsMap;
        publicKey: string;
        authParams: {
            accessToken: string;
            authMethodId: string;
            authMethodType: number;
        };
            ethAddress: string;
            otp: string,
            mfaMethodId: string;
    }) {
        this.sessionSigs = sessionSigs;
        this.publicKey = publicKey;
        this.authParams = authParams;
        this.ethAddress = ethAddress;
        this.otp = otp || '';
        this.mfaMethodId = mfaMethodId || '';
    }
    setPhrase(phrase: string, walletIndex?: number): string {
        throw new Error('setPhrase is not implemented in LitEvmKeystoreSigner');
    }

    getAddress(walletIndex?: number): string {
        return this.ethAddress;
    }
    async getAddressAsync(walletIndex?: number, verify?: boolean): Promise<string> {
        if (!this.ethAddress) {
            throw new Error('Ethereum address is not set');
        }
        return this.ethAddress;
    }

    public async signTransfer({ tx }: SignTransferParams): Promise<TxHash> {
        if (!litNodeClient.ready) {
            await litNodeClient.connect()
        }
        console.log('in signTransfer tx', tx)
        const toSign = ethers.utils.arrayify(
            ethers.utils.keccak256(ethers.utils.serializeTransaction(tx as any))
        )
        console.log('tx and tosign', tx, toSign);

        const ipfsId = await getPersonalTransactionIpfsId('base58')

        const transferAmountInEther = ethers.utils.formatEther(tx.value);

        console.log('transferAmountInEther', transferAmountInEther, this.otp, this.mfaMethodId)
        const response = await litNodeClient.executeJs({
            ipfsId,
            sessionSigs: this.sessionSigs,
            jsParams: {
                toSignTransaction: toSign,
                transactionAmount: transferAmountInEther, // TODO: 将 tx.value 转换为字符串
                publicKey: this.publicKey,
                env: process.env.NEXT_PUBLIC_ENV,
                // env: 'test',
                // chain: 'sepolia',
                chainType: 'EVM',
                authParams: this.authParams,
                otp: this.otp, // 交换操作通常不需要 OTP，除非超过每日限额
                mfaMethodId: this.mfaMethodId,
                tokenType: 'ETH',
            }
        })

        console.log('lit NodeClient response:', response)

        const result = typeof response.response === 'string'
            ? JSON.parse(response.response)
            : response.response;

        console.log('lit NodeClient result:', result)

        let sig: any;
        if (result.status === 'success') {
            sig = JSON.parse(result.sig)
        } else {
            if (result.requireMFA) {
                throw new Error('MFA required for this transaction');
            }
        }

        console.log('lit NodeClient sig:', sig)

        const signedAndSerializedTx = ethers.utils.serializeTransaction(
            tx as any,
            ethers.utils.joinSignature({
                r: '0x' + sig.r.substring(2),
                s: '0x' + sig.s,
                v: sig.v,
            })
        );
        return signedAndSerializedTx
    }

    async signApprove({ tx }: SignApproveParams): Promise<string> {
        console.log('in signApprove', tx)
        if (!litNodeClient.ready) {
            await litNodeClient.connect()
        }
        const toSign = ethers.utils.arrayify(
            ethers.utils.keccak256(ethers.utils.serializeTransaction(tx as any))
        )

        const ipfsId = await getPersonalTransactionIpfsId('base58')

        const response = await litNodeClient.executeJs({
            ipfsId, // 不需要MFA的
            sessionSigs: this.sessionSigs,
            jsParams: {
                toSignTransaction: toSign,
                transactionAmount: '0',
                publicKey: this.publicKey,
                env: process.env.NEXT_PUBLIC_ENV,
                // env: 'test',
                // chain: 'sepolia',
                chainType: 'EVM',
                authParams: this.authParams,
                otp: this.otp, // 交换操作通常不需要 OTP，除非超过每日限额，但这里还是读一下
                mfaMethodId: this.mfaMethodId,
                tokenType: 'ETH',
            }
        })

        const result = typeof response.response === 'string'
            ? JSON.parse(response.response)
            : response.response;
        let sig: any;
        if (result.status === 'success') {
            sig = JSON.parse(result.sig)
        }

        const signedAndSerializedTx = ethers.utils.serializeTransaction(
            tx as any,
            ethers.utils.joinSignature({
                r: '0x' + sig.r.substring(2),
                s: '0x' + sig.s,
                v: sig.v,
            })
        );
        return signedAndSerializedTx
    }

    getFullDerivationPath(walletIndex: number): string {
        // Implement logic to get the full derivation path
        // For now, return a placeholder path
        throw new Error('getFullDerivationPath is not implemented in LitEvmKeystoreSigner');
    }

    purge(): void {
        this.publicKey = '';
        this.authParams = {
            accessToken: '',
            authMethodId: '',
            authMethodType: 0,
        };
        this.ethAddress = '';
    }
}


export class LitBtcClientKeystore extends BaseBtcClient {
    private sessionSigs: SessionSigsMap;
    private publicKey: string;
    private authParams: {
        accessToken: string;
        authMethodId: string;
        authMethodType: number;
    };
    private otp: string;
    private mfaMethodId: string;
    private btcAddress: string;
    constructor(
        params: UtxoClientParams & {
            addressFormat?: AddressFormat;
            sessionSigs: SessionSigsMap;
            publicKey: string;
            authParams: {
                accessToken: string;
                authMethodId: string;
                authMethodType: number;
            };
            otp: string;
            mfaMethodId: string;
            btcAddress: string;
        },
    ) {
        super(params)
        this.sessionSigs = params.sessionSigs;
        this.publicKey = params.publicKey;
        this.authParams = params.authParams;
        this.otp = params.otp || '';
        this.mfaMethodId = params.mfaMethodId || '';
        this.btcAddress = params.btcAddress || '';
    }

    async transfer(params: TxParams & { feeRate?: FeeRate }): Promise<TxHash> {
        // Set the default fee rate to `fast`
        const feeRate = params.feeRate || (await this.getFeeRates())[FeeOption.Fast]

        // params.recipient

        // Check if the fee rate is within the fee bounds
        checkFeeBounds(this.feeBounds, feeRate)

        // use lit to sign the transaction
        const response = await fetch(`${btcConfig.mempoolBaseUrl}/api/address/${this.btcAddress}/utxo`);
        const utxos = await response.json();
        const utxo = utxos.sort((a: any, b: any) => b.value - a.value)[0];

        const utxoTxResponse = await fetch(`${btcConfig.mempoolBaseUrl}/api/tx/${utxo.txid}`);
        const utxoTxDetails = await utxoTxResponse.json();
        const scriptPubKey = utxoTxDetails.vout[utxo.vout].scriptpubkey;

        const tx = new bitcoinjs.Transaction();
        tx.version = 2;

        tx.addInput(Buffer.from(utxo.txid, "hex").reverse(), utxo.vout);
        const network = btcConfig.network;

        const utxoValue = utxo.value;
        const amountSats = params.amount.amount().toNumber();
        const minimumFee = 1000; // Assuming a minimum fee of 0.0001 BTC

        // Calculate change amount
        const changeAmount = utxoValue - amountSats - minimumFee;

        // Add output for the amount to be sent
        tx.addOutput(
            bitcoinjs.address.toOutputScript(params.recipient!, network),
            amountSats
        );

        // If there's change, add it back to the sender
        if (changeAmount > 546) { // 546 sats is the "dust limit" in Bitcoin
            tx.addOutput(
                bitcoinjs.address.toOutputScript(this.btcAddress, network),
                changeAmount
            );
        }

        const scriptPubKeyBuffer = Buffer.from(scriptPubKey, "hex");
        const sighash = tx.hashForSignature(
            0,
            bitcoinjs.script.compile(scriptPubKeyBuffer),
            bitcoinjs.Transaction.SIGHASH_ALL
        );

        const ipfsId = await getPersonalTransactionIpfsId('base58')
        const SATS_PER_BTC = 100000000;
        const amountBTC = amountSats / SATS_PER_BTC;

        const signResponse = await litNodeClient.executeJs({
            ipfsId,
            sessionSigs: this.sessionSigs,
            jsParams: {
                toSignTransaction: sighash,
                transactionAmount: amountBTC.toString(),
                publicKey: this.publicKey,
                env: process.env.NEXT_PUBLIC_ENV,
                // env: 'test',
                chainType: 'UTXO',
                authParams: this.authParams,
                otp: this.otp,
                mfaMethodId: this.mfaMethodId,
                tokenType: 'BTC',
            }
        })

        console.log('lit NodeClient response:', signResponse)

        const result = typeof signResponse.response === 'string'
            ? JSON.parse(signResponse.response)
            : signResponse.response;

        console.log('lit NodeClient result:', result)

        let sig: any;
        if (result.status === 'success') {
            sig = signResponse.signatures.btcSignatures
        }

        const txReceipt = await broadcastTransactionByTokenType({
            tokenType: "BTC",
            options: {
                toSign: sighash,
                tx: tx,
                sig,
                publicKey: this.publicKey,
            },
        })

        console.log('txReceipt', txReceipt)
        return txReceipt || 'error';
    }
}
