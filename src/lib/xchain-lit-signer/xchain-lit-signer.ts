import { ClientKeystore as EVMClientKeystore, EVMClientParams, SignTransferParams, SignApproveParams } from '@xchainjs/xchain-evm'
import { ISigner } from '@xchainjs/xchain-evm'
import { litNodeClient } from '@/lib/lit'
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { TxHash } from '@xchainjs/xchain-client'
import { ethers } from "ethers";
import {
    SessionSigsMap,
} from '@lit-protocol/types';

export type LitEVMKeystoreClientParams = EVMClientParams & {
    sessionSigs: SessionSigsMap;
    publicKey: string;
    authParams: {
        accessToken: string;
        authMethodId: string;
        authMethodType: number;
    };
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

    constructor({
        sessionSigs,
        publicKey,
        authParams,
        ethAddress,
    }: {
        sessionSigs: SessionSigsMap;
        publicKey: string;
        authParams: {
            accessToken: string;
            authMethodId: string;
            authMethodType: number;
        };
        ethAddress: string;
    }) {
        this.sessionSigs = sessionSigs;
        this.publicKey = publicKey;
        this.authParams = authParams;
        this.ethAddress = ethAddress;
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

    async fetchMfaData() {
        console.log('in fetchMfAData');
        try {
            const response = await fetch('/api/mfa/get-user-phone', {
                headers: {
                    'Authorization': `Bearer ${this.authParams.accessToken}`
                }
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to fetch phone number');
            }

            const data = await response.json();
            const phones = data.phones || [];

            if (phones.length > 0) {
                // Update phone state
                const phone = phones[0];
                console.log('phone', phone)
                // setMfaPhoneNumber(phone.phone_number);
                // setMfaMethodId(phone.phone_id);
                return phone.phone_id;
            } else {
                throw new Error('No verified phone number found for your account');
            }
        } catch (error) {
            console.error('Error fetching user phone:', error);
            throw error;
        }
    }

    public async signTransfer({ tx }: SignTransferParams): Promise<TxHash> {
        if (!litNodeClient.ready) {
            await litNodeClient.connect()
        }
        console.log('in signTransfer tx', tx)
        const toSign = ethers.utils.arrayify(
            ethers.utils.keccak256(ethers.utils.serializeTransaction(tx))
        )
        console.log('tx and tosign', tx, toSign);

        const ipfsId = await getPersonalTransactionIpfsId('base58')

        const mfaMethodId = await this.fetchMfaData()
        const transferAmountInEther = ethers.utils.formatEther(tx.value);

        console.log('transferAmountInEther', transferAmountInEther)
        const response = await litNodeClient.executeJs({
            ipfsId,
            sessionSigs: this.sessionSigs,
            jsParams: {
                toSignTransaction: toSign,
                transactionAmount: transferAmountInEther, // TODO: 将 tx.value 转换为字符串
                publicKey: this.publicKey,
                // env: process.env.NEXT_PUBLIC_ENV,
                env: 'test',
                // chain: 'sepolia',
                chainType: 'EVM',
                authParams: this.authParams,
                otp: '', // 交换操作通常不需要 OTP，除非超过每日限额
                mfaMethodId,
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
        }

        console.log('lit NodeClient sig:', sig)

        const signedAndSerializedTx = ethers.utils.serializeTransaction(
            tx,
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
            ethers.utils.keccak256(ethers.utils.serializeTransaction(tx))
        )

        const ipfsId = await getPersonalTransactionIpfsId('base58')

        const response = await litNodeClient.executeJs({
            ipfsId, // 不需要MFA的
            sessionSigs: this.sessionSigs,
            jsParams: {
                toSignTransaction: toSign,
                transactionAmount: '0',
                publicKey: this.publicKey,
                // env: process.env.NEXT_PUBLIC_ENV,
                env: 'test',
                // chain: 'sepolia',
                chainType: 'EVM',
                authParams: this.authParams,
                otp: '', // 交换操作通常不需要 OTP，除非超过每日限额
                // mfaMethodId: 'phone-number-test-7c1d1108-9afb-470a-9585-bf57620209e0',
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
            tx,
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
