'use client'

import { useState, useEffect } from 'react'
import { ArrowDownUp, Settings, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CopyAddress } from '@/components/ui/CopyAddress'
import Image from 'next/image'
import { estimateSwap } from '@/lib/swap/estimateSwap'
import { useRouter } from 'next/navigation'
import { getAuthMethodFromStorage } from '@/lib/storage/authmethod'
import { AuthMethod, IRelayPKP } from '@lit-protocol/types'
import { getProviderByAuthMethodType } from '@/lib/lit/providers'
import { fetchERC20TokenBalance, fetchEthBalance } from "@/lib/web3/eth"
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from "@/lib/web3/transaction"
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { litNodeClient, getSessionSigsByPkp } from '@/lib/lit'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'
import { fetchBtcBalance } from '@/lib/web3/btc'
import { Wallet } from '@xchainjs/xchain-wallet'
import { ClientKeystore as MyEthClient } from '@/lib/xchain-lit-signer/xchain-lit-signer'
import { defaultEthParams } from '@xchainjs/xchain-ethereum'
import { ThorchainAMM } from '@xchainjs/xchain-thorchain-amm'
import { QuoteSwapParams, ThorchainCache, ThorchainQuery, Thornode, TxDetails } from '@xchainjs/xchain-thorchain-query'
import { assetAmount, assetFromString, assetToBase, CryptoAmount } from '@xchainjs/xchain-util'
import { Midgard, MidgardCache, MidgardQuery } from '@xchainjs/xchain-midgard-query'
import { Network } from '@xchainjs/xchain-client'

// 支持的代币列表
// 图标从 https://thorchain.org/ 找
// 支持的交易池从：https://runescan.io/zh-CN/pools 找
const SUPPORTED_TOKENS = [
    {
        symbol: 'ETH',
        name: 'Ethereum',
        icon: '/cryptocurrency/eth.png',
        network: 'Ethereum',
        xchain_asset: 'ETH.ETH',
        decimals: 18,
        chainType: 'EVM',
    },
    {
        symbol: 'USDT',
        name: 'USDT (Ethereum)',
        icon: '/cryptocurrency/usdt.svg',
        network: 'Ethereum',
        xchain_asset: 'ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7',
        decimals: 6,
        chainType: 'EVM',
    },
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: '/cryptocurrency/btc.png',
        network: 'Bitcoin',
        xchain_asset: 'BTC.BTC',
        decimals: 8,
        chainType: 'UTXO',
    },
];

const TEMP_ADDRESS = '0x7e727520B29773e7F23a8665649197aAf064CeF1'; // 临时目标地址，实际应该用户输入

export default function SwapPage() {
    const [fromToken, setFromToken] = useState(SUPPORTED_TOKENS[0])
    const [toToken, setToToken] = useState(SUPPORTED_TOKENS[1])
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')
    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isCalculating, setIsCalculating] = useState(false)
    const [swapFees, setSwapFees] = useState<{
        outboundFee: string
        affiliateFee: string
    } | null>(null)
    const [slippageBps, setSlippageBps] = useState<number | null>(null)
    const [hasEstimated, setHasEstimated] = useState(false) // 是否已经进行过估算

    const router = useRouter()
    const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
    const [authMethodId, setAuthMethodId] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
    const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null)
    const [btcAddress, setBtcAddress] = useState<string | null>(null)
    const [ethAddress, setEthAddress] = useState<string | null>(null)
    const [ethWalletBalance, setEthWalletBalance] = useState<string>('0')
    const [usdtWalletBalance, setUsdtWalletBalance] = useState<string>('0')
    const [btcWalletBalance, setBtcWalletBalance] = useState<number>(0)
    const [destAddress, setDestAddress] = useState<string>('')// 目标地址输入

    // MFA state
    const [mfaMethodId, setMfaMethodId] = useState<string | null>(null);
    const [mfaPhoneNumber, setMfaPhoneNumber] = useState<string | null>(null);


    // Check if user is logged in
    useEffect(() => {


        const storedAuthMethod = getAuthMethodFromStorage()
        console.log('Stored auth method:', storedAuthMethod)
        if (storedAuthMethod) {
            setAuthMethod(storedAuthMethod)


        } else {
            // Redirect to homepage if not logged in
            router.push('/')
        }
    }, [router])

    useEffect(() => {
        const fetchUserData = async () => {
            if (!authMethod) return
            console.log('in fetchUserData with authMethod:', authMethod)
            try {
                setIsLoading(true)
                // Get user's authMethodId
                const provider = getProviderByAuthMethodType(authMethod.authMethodType)
                const authMethodId = await provider.getAuthMethodId(authMethod)
                setAuthMethodId(authMethodId)

                // Fetch user's information from database API
                const userResponse = await fetch(`/api/user?authMethodId=${authMethodId}`)

                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user information from database')
                }

                const userData = await userResponse.json()
                console.log('Fetched user data:', userData)
                setEmail(userData.email)

                // Use litActionPkp from user data
                if (userData.litActionPkp) {
                    setLitActionPkp(userData.litActionPkp)
                }
                if (userData.sessionPkp) {
                    setSessionPkp(userData.sessionPkp)
                    setBtcAddress(userData.addresses?.btc)
                    setEthAddress(userData.addresses?.eth)

                    // const balance = await fetchEthBalance(userData.addresses?.eth)
                    // setEthWalletBalance(balance)
                }
            } catch (error) {
                console.error("Error fetching data from database:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUserData();
    }, [authMethod]);

    const updateEthWalletBalance = async (address: string) => {
        try {
            const ethBalance = await fetchEthBalance(address)
            console.log('Fetched ETH wallet balance:', ethBalance)
            setEthWalletBalance(ethBalance)

            // fetch usdt balance
            const usdtBalance = await fetchERC20TokenBalance({
                address,
                tokenAddress: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0', // USDT contract address on Ethereum
                decimals: 6
            })
            setUsdtWalletBalance(usdtBalance)
        } catch (error) {
            console.error('Failed to update wallet balance:', error)
            setEthWalletBalance('0')
        }
    }

    const updateBtcWalletBalance = async (address: string) => {
        try {
            const btcBalance = await fetchBtcBalance(address)
            console.log('Fetched BTC wallet balance:', btcBalance)
            setBtcWalletBalance(btcBalance)

        } catch (error) {
            console.error('Failed to update wallet balance:', error)
            setBtcWalletBalance(0)
        }
    }

    useEffect(() => {
        if (!ethAddress) return
        // 更新以太坊钱包余额
        updateEthWalletBalance(ethAddress)
    }, [ethAddress])

    useEffect(() => {
        if (!btcAddress) return
        // 更新比特币钱包余额
        updateBtcWalletBalance(btcAddress)
    }, [btcAddress])
    // 根据目标代币获取用户对应的钱包地址
    const getDefaultAddressByToToken = () => {
        switch (toToken.symbol) {
            case 'ETH':
            case 'USDT':
                return ethAddress
            case 'BTC':
                return btcAddress
            default:
                return null
        }
    }

    // 设置为默认地址
    const handleSetDefaultAddress = () => {
        const defaultAddress = getDefaultAddressByToToken()
        if (defaultAddress) {
            setDestAddress(defaultAddress)
        }
    }
    // 计算目标资产数量
    const calculateToAmount = async (amount: string) => {
        if (!amount || parseFloat(amount) <= 0) {
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
            setHasEstimated(false)
            return
        }
        setIsCalculating(true)
        try {
            // 使用 THORChain API 获取实际汇率和估算
            console.log('Calculating exchange rate for:', amount, fromToken, 'to', toToken)
            const estimate = await estimateSwap(
                parseFloat(amount),
                fromToken.decimals,
                fromToken.xchain_asset,
                toToken.xchain_asset,
                destAddress || ethAddress || TEMP_ADDRESS
            )

            if (estimate && estimate.txEstimate) {
                console.log('Swap estimate received:', estimate, fromToken);
                // 从估算结果中提取目标资产数量
                const netOutputAmount = estimate.txEstimate.netOutput.assetAmount.amount().toNumber()
                const netOutputDecimals = estimate.txEstimate.netOutput.assetAmount.decimal
                const toAssetAmount = netOutputAmount;

                console.log('Net output amount:', netOutputAmount, 'Decimals:', netOutputDecimals, toAssetAmount);
                // 计算汇率
                const rate = toAssetAmount / parseFloat(amount)

                setToAmount(toAssetAmount.toString())
                setExchangeRate(rate)

                // 设置费用信息
                setSwapFees({
                    outboundFee: estimate.txEstimate.totalFees.outboundFee.formatedAssetString(),
                    affiliateFee: estimate.txEstimate.totalFees.affiliateFee.formatedAssetString()
                })

                // 设置滑点信息
                setSlippageBps(estimate.txEstimate.slipBasisPoints)
                setHasEstimated(true)

                console.log('Swap estimate:', {
                    input: amount + ' ' + fromToken.symbol,
                    output: toAssetAmount + ' ' + toToken.symbol,
                    rate: rate,
                    fees: estimate.txEstimate.totalFees,
                    slippage: estimate.txEstimate.slipBasisPoints + ' bps'
                })
            } else {
                console.error('Failed to get swap estimate')
                setToAmount('')
                setExchangeRate(null)
                setSwapFees(null)
                setSlippageBps(null)
                setHasEstimated(false)
            }
        } catch (error) {
            console.error('Failed to calculate exchange rate:', error)
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
            setHasEstimated(false)
        } finally {
            setIsCalculating(false)
        }
    }    // 处理源资产金额变化 (仅更新状态，清空估算结果)
    const handleFromAmountChange = (value: string) => {
        setFromAmount(value)
        // 如果输入为空，立即清空结果
        if (!value || parseFloat(value) <= 0) {
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
            setHasEstimated(false)
        } else {
            // 如果有值但还没估算，清空之前的估算结果
            setHasEstimated(false)
        }
    }

    // 手动触发估算
    const handleEstimateSwap = () => {
        if (fromAmount && parseFloat(fromAmount) > 0) {
            calculateToAmount(fromAmount)
        }
    }

    // 根据代币符号获取对应的余额
    const getBalanceByToken = (token: any) => {
        switch (token.symbol) {
            case 'ETH':
                return ethWalletBalance
            case 'USDT':
                return usdtWalletBalance
            case 'BTC':
                return btcWalletBalance.toString()
            default:
                return '0'
        }
    }

    // 根据代币符号获取对应的地址
    const getAddressByToken = (token: any) => {
        switch (token.symbol) {
            case 'ETH':
            case 'USDT':
                return ethAddress
            case 'BTC':
                return btcAddress
            default:
                return null
        }
    }    // 交换代币位置
    const handleSwapTokens = () => {
        const temp = fromToken
        setFromToken(toToken)
        setToToken(temp)

        // 清空估算结果，需要重新估算
        setToAmount('')
        setExchangeRate(null)
        setSwapFees(null)
        setSlippageBps(null)
        setHasEstimated(false)
    }

    const fetchMfaData = async () => {
        console.log('in fetchMfAData');
        try {
            const response = await fetch('/api/mfa/get-user-phone', {
                headers: {
                    'Authorization': `Bearer ${authMethod?.accessToken}`
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
                setMfaPhoneNumber(phone.phone_number);
                setMfaMethodId(phone.phone_id);
            } else {
                throw new Error('No verified phone number found for your account');
            }
        } catch (error) {
            console.error('Error fetching user phone:', error);
            throw error;
        }
    }    // 处理交换操作
    const handleSwap = async () => {
        if (!fromAmount || !toAmount || !ethAddress || !destAddress) {
            console.log('Swap failed: Missing required fields', fromAmount, toAmount, ethAddress, destAddress)
            toast.error('请输入有效的交换金额和目标地址')
            return
        }

        setIsLoading(true)
        try {
            console.log('Starting swap process:', fromAmount, fromToken.symbol, 'to', toAmount, toToken.symbol, 'destination:', destAddress)

            // 1. 首先获取最新的交换估算信息（包含交易详情）
            const swapEstimate = await estimateSwap(
                parseFloat(fromAmount),
                fromToken.decimals,
                fromToken.xchain_asset,
                toToken.xchain_asset,
                destAddress // 使用用户输入的目标地址
            )

            if (!swapEstimate) {
                throw new Error('无法获取交换估算信息')
            }

            console.log('Swap estimate for transaction:', swapEstimate)

            // 2. 从估算结果中提取交易详情
            const txDetails = swapEstimate
            const toAddress = txDetails.toAddress // THORChain 的入站地址
            const memo = txDetails.memo // THORChain memo
            const amount = fromAmount // 发送金额

            console.log('Transaction details:', {
                toAddress,
                memo,
                amount,
                fromToken: fromToken.symbol
            })

            if (!sessionPkp || !litActionPkp || !authMethod || !ethAddress) {
                return;
            }
            const sessionSigs = await getSessionSigsByPkp({
                authMethod: authMethod!,
                pkp: sessionPkp,
                refreshStytchAccessToken: true,
            })
            const ethTestNetwork = ethers.providers.getNetwork('sepolia')
            const ETH_TESTNET_ETHERS_PROVIDER = new ethers.providers.JsonRpcProvider(
                'https://ethereum-sepolia-rpc.publicnode.com',
                ethTestNetwork,
            )
            const wallet = new Wallet({
                ETH: new MyEthClient({ ...defaultEthParams, 
                    providers: {
                        // TODO: 目前 vastlink 不支持主网，全切到测试网测试
                        [Network.Mainnet]: ETH_TESTNET_ETHERS_PROVIDER,
                        [Network.Testnet]: ETH_TESTNET_ETHERS_PROVIDER,
                        [Network.Stagenet]: ETH_TESTNET_ETHERS_PROVIDER,
                    },
                    sessionSigs: sessionSigs, 
                    publicKey: litActionPkp.publicKey, 
                    chainType: 'EVM', 
                    authParams: {
                        accessToken: authMethod.accessToken,
                        authMethodId: authMethodId,
                        authMethodType: authMethod.authMethodType,
                    },
                    ethAddress,
                }),
            });
            const network = Network.Mainnet;
            const midgardCache = new MidgardCache(new Midgard(network))
            const thorchainCache = new ThorchainCache(new Thornode(network), new MidgardQuery(midgardCache))
            const thorchainQuery = new ThorchainQuery(thorchainCache)

            const thorchainAmm = new ThorchainAMM(thorchainQuery, wallet)
            const fromAsset = assetFromString(fromToken.xchain_asset)!;
            const toAsset = assetFromString(toToken.xchain_asset)!;
            const res = await thorchainAmm.doSwap({
                fromAsset,
                amount: new CryptoAmount(assetToBase(assetAmount(amount, fromToken.decimals)), fromAsset),
                destinationAsset: toAsset,
                destinationAddress: destAddress,
                toleranceBps: 300, //optional
            });
            console.log('Swap transaction result:', res)
            toast.success(`swap success: ${res.hash}`)
        } catch (error) {
            console.error('Swap failed:', error)
            toast.error(`swap failed：${error instanceof Error ? error.message : 'unknown'}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-md">
            <div className="space-y-6">
                {/* 页面标题 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Token Swap</h1>
                    <p className="text-muted-foreground mt-2">Using THORChain for cross-chain token swaps</p>
                </div>

                {/* 主交换界面 */}
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <CardTitle>Swap</CardTitle>
                            <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* 源代币选择 */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">From</label>
                            <div className="flex gap-2">
                                <Select
                                    value={fromToken.xchain_asset} onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.xchain_asset === value)
                                        if (token) {
                                            setFromToken(token)
                                            // 清空估算结果，需要重新估算
                                            setHasEstimated(false)
                                            setToAmount('')
                                            setExchangeRate(null)
                                            setSwapFees(null)
                                            setSlippageBps(null)
                                        }
                                    }}
                                >
                                    <SelectTrigger className="w-32">
                                        <SelectValue>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={fromToken.icon}
                                                    alt={fromToken.symbol}
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full"
                                                />
                                                {fromToken.symbol}
                                            </div>
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SUPPORTED_TOKENS.map((token) => (
                                            <SelectItem key={token.xchain_asset} value={token.xchain_asset}>
                                                <div className="flex items-center gap-2">
                                                    <Image
                                                        src={token.icon}
                                                        alt={token.symbol}
                                                        width={20}
                                                        height={20}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <div className="font-medium">{token.symbol}</div>
                                                        <div className="text-xs text-muted-foreground">{token.name}</div>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Input
                                    placeholder="0.0"
                                    value={fromAmount}
                                    onChange={(e) => handleFromAmountChange(e.target.value)}
                                    type="number"
                                    step="any"
                                    className="flex-1"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs text-muted-foreground">
                                    Balance: {getBalanceByToken(fromToken)} {fromToken.symbol}
                                </div>
                                {getAddressByToken(fromToken) && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <span>Address:</span>
                                        <CopyAddress
                                            textToCopy={getAddressByToken(fromToken)!}
                                            className="text-xs"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 交换按钮 */}
                        <div className="flex justify-center">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleSwapTokens}
                                className="rounded-full"
                            >
                                <ArrowDownUp className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* 目标代币选择 */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">To</label>
                            <div className="flex gap-2">
                                <Select
                                    value={toToken.xchain_asset} onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.xchain_asset === value)
                                        if (token) {
                                            setToToken(token)
                                            // 清空估算结果，需要重新估算
                                            setHasEstimated(false)
                                            setToAmount('')
                                            setExchangeRate(null)
                                            setSwapFees(null)
                                            setSlippageBps(null)
                                        }
                                    }}
                                >
                                    <SelectTrigger className="w-32">
                                        <SelectValue>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={toToken.icon}
                                                    alt={toToken.symbol}
                                                    width={20}
                                                    height={20}
                                                    className="rounded-full"
                                                />
                                                {toToken.symbol}
                                            </div>
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SUPPORTED_TOKENS.map((token) => (
                                            <SelectItem key={token.xchain_asset} value={token.xchain_asset}>
                                                <div className="flex items-center gap-2">
                                                    <Image
                                                        src={token.icon}
                                                        alt={token.symbol}
                                                        width={20}
                                                        height={20}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <div className="font-medium">{token.symbol}</div>
                                                        <div className="text-xs text-muted-foreground">{token.name}</div>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Input
                                    placeholder="0.0"
                                    value={isCalculating ? 'Calculating...' : toAmount}
                                    readOnly
                                    type="text"
                                    className="flex-1 bg-muted/50"
                                />
                            </div>
                        </div>                        {/* 目标地址输入 */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium">To Address</label>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleSetDefaultAddress}
                                    disabled={!getDefaultAddressByToToken()}
                                    className="text-xs h-7"
                                >
                                    Default Address
                                </Button>
                            </div>
                            <Input
                                placeholder="Enter target address"
                                value={destAddress}
                                onChange={(e) => setDestAddress(e.target.value)}
                                type="text"
                                className="w-full font-mono text-sm"
                            />
                            <div className="text-xs text-muted-foreground">
                                The token will be sent to this address. Click "Default Address" to use your wallet address for {toToken.symbol}.
                            </div>                        </div>

                        {/* 估算按钮 */}
                        {fromAmount && parseFloat(fromAmount) > 0 && destAddress && !hasEstimated && (
                            <Button
                                onClick={handleEstimateSwap}
                                disabled={isCalculating}
                                className="w-full"
                                variant="outline"
                                size="lg"
                            >
                                {isCalculating ? 'Calculating...' : 'Estimate Swap'}
                            </Button>
                        )}

                        {/* 交换信息 */}
                        {fromAmount && toAmount && exchangeRate && (
                            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Exchange Rate</span>
                                    <div className="flex items-center gap-2">
                                        <span>1 {fromToken.symbol} = {exchangeRate.toFixed(6)} {toToken.symbol}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6"
                                            onClick={() => calculateToAmount(fromAmount)}
                                            disabled={isCalculating}
                                        >
                                            <RefreshCw className={`h-3 w-3 ${isCalculating ? 'animate-spin' : ''}`} />
                                        </Button>
                                    </div>
                                </div>
                                {swapFees && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Network Fee</span>
                                        <span>{swapFees.outboundFee}</span>
                                    </div>
                                )}
                                {swapFees && swapFees.affiliateFee !== '0' && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Affiliate Fee</span>
                                        <span>{swapFees.affiliateFee}</span>
                                    </div>
                                )}
                                {slippageBps !== null && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Estimated Slippage</span>
                                        <span>{(slippageBps / 100).toFixed(2)}%</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Minimum Received</span>
                                    <span>
                                        {slippageBps !== null
                                            ? (parseFloat(toAmount) * (1 - slippageBps / 10000)).toFixed(6)
                                            : (parseFloat(toAmount) * 0.995).toFixed(6)
                                        } {toToken.symbol}
                                    </span>
                                </div>
                            </div>
                        )}                        {/* 交换按钮 */}
                        <Button
                            onClick={handleSwap}
                            disabled={!fromAmount || !toAmount || !exchangeRate || !destAddress || !hasEstimated || isLoading || isCalculating}
                            className="w-full"
                            size="lg"
                        >
                            {isLoading ? 'Swapping...' : isCalculating ? 'Calculating...' : 'Swap'}
                        </Button>
                    </CardContent>
                </Card>

                {/* 交换历史或其他信息 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Swap Instructions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>• Using THORChain technology for cross-chain token swaps</p>
                            <p>• Supports major blockchains like Bitcoin and Ethereum</p>
                            <p>• No centralized exchange required, you have full control over your assets</p>
                            <p>• The swap process may take a few minutes to complete</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
