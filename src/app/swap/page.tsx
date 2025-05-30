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
import { fetchEthBalance } from "@/lib/web3/eth"
import { broadcastTransactionByTokenType, getToSignTransactionByTokenType } from "@/lib/web3/transaction"
import { getPersonalTransactionIpfsId } from '@/lib/lit/ipfs-id-env'
import { litNodeClient, getSessionSigsByPkp } from '@/lib/lit'
import { ethers } from 'ethers'
import { toast } from 'react-toastify'

// 支持的代币列表
// 图标从 https://thorchain.org/ 找
// 支持的交易池从：https://runescan.io/zh-CN/pools 找
const SUPPORTED_TOKENS = [
    // {
    //     symbol: 'BTC',
    //     name: 'Bitcoin',
    //     icon: '/cryptocurrency/btc.png',
    //     network: 'Bitcoin',
    //     xchain_asset: 'BTC.BTC',
    //     decimals: 8,
    // },
    {
        symbol: 'ETH',
        name: 'Ethereum',
        icon: '/cryptocurrency/eth.png',
        network: 'Ethereum',
        xchain_asset: 'ETH.ETH',
        decimals: 18,
    },
    {
        symbol: 'USDT',
        name: 'USDT (Ethereum)',
        icon: '/cryptocurrency/usdt.svg',
        network: 'Ethereum',
        xchain_asset: 'ETH.USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7',
        decimals: 6,
    },
    {
        symbol: 'BNB',
        name: 'BNB (BSC)',
        icon: '/cryptocurrency/bnb.svg',
        network: 'BSC',
        xchain_asset: 'BSC.BNB',
        decimals: 18,
    },
    {
        symbol: 'USDT',
        name: 'USDT (BSC)',
        icon: '/cryptocurrency/usdt.svg',
        network: 'BSC',
        xchain_asset: 'BSC.USDT-0X55D398326F99059FF775485246999027B3197955',
        decimals: 6,
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

    const router = useRouter()
    const [authMethod, setAuthMethod] = useState<AuthMethod | null>(null)
    const [authMethodId, setAuthMethodId] = useState<string | null>(null)
    const [email, setEmail] = useState<string | null>(null)
    const [litActionPkp, setLitActionPkp] = useState<IRelayPKP | null>(null)
    const [sessionPkp, setSessionPkp] = useState<IRelayPKP | null>(null)
    const [btcAddress, setBtcAddress] = useState<string | null>(null)
    const [ethAddress, setEthAddress] = useState<string | null>(null)
    const [ethWalletBalance, setEthWalletBalance] = useState<string>('0')
    const [destAddress, setDestAddress] = useState<string>('') // 目标地址输入

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

                    const balance = await fetchEthBalance(userData.addresses?.eth)
                    setEthWalletBalance(balance)
                }
            } catch (error) {
                console.error("Error fetching data from database:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchUserData();
    }, [authMethod]);

    const updateWalletBalance = async (address: string) => {
        try {
            const balance = await fetchEthBalance(address)
            console.log('Fetched ETH wallet balance:', balance)
            setEthWalletBalance(balance)
        } catch (error) {
            console.error('Failed to update wallet balance:', error)
            setEthWalletBalance('0')
        }
    }

    useEffect(() => {
        if (!ethAddress) return
        // 更新以太坊钱包余额
        updateWalletBalance(ethAddress)
    }, [ethAddress])

    // 设置默认目标地址为用户自己的地址
    useEffect(() => {
        if (ethAddress && !destAddress) {
            setDestAddress(ethAddress)
        }
    }, [ethAddress, destAddress])

    // 获取当前选中代币的余额和地址信息
    const getTokenBalanceInfo = (token: typeof SUPPORTED_TOKENS[0]) => {
        // 根据代币的网络和类型返回对应的余额和地址
        // console.log('getTokenBalanceInfo called for token:', token);
        if (token.network === 'Ethereum') {
            return {
                balance: token.symbol === 'ETH' ? parseFloat(ethWalletBalance).toFixed(4) : 'Unknown',
                address: ethAddress || 'N/A',
                hasData: !!ethAddress
            }
        }
        // 这里可以扩展其他网络的余额和地址获取逻辑
        // 比如 BSC、Bitcoin 等
        return {
            balance: 'Unknown',
            address: 'N/A',
            hasData: false
        }
    }

    // 计算目标资产数量
    const calculateToAmount = async (amount: string) => {
        if (!amount || parseFloat(amount) <= 0) {
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
            return
        }        setIsCalculating(true)
        try {
            // 使用 THORChain API 获取实际汇率和估算
            const estimate = await estimateSwap(
                parseFloat(amount),
                fromToken.decimals,
                fromToken.xchain_asset,
                toToken.xchain_asset,
                destAddress || ethAddress || TEMP_ADDRESS
            )

            if (estimate && estimate.txEstimate) {
                console.log('Swap estimate received:', estimate);
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
            }
        } catch (error) {
            console.error('Failed to calculate exchange rate:', error)
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
        } finally {
            setIsCalculating(false)
        }
    }

    // 处理源资产金额变化 (仅更新状态，不触发计算)
    const handleFromAmountChange = (value: string) => {
        setFromAmount(value)
        // 如果输入为空，立即清空结果
        if (!value || parseFloat(value) <= 0) {
            setToAmount('')
            setExchangeRate(null)
            setSwapFees(null)
            setSlippageBps(null)
        }
    }

    // 处理输入框失去焦点时触发计算
    const handleFromAmountBlur = () => {
        if (fromAmount && parseFloat(fromAmount) > 0) {
            calculateToAmount(fromAmount)
        }
    }

    // 交换代币位置
    const handleSwapTokens = () => {
        const temp = fromToken
        setFromToken(toToken)
        setToToken(temp)

        // 重新计算金额
        if (fromAmount) {
            calculateToAmount(fromAmount)
        }
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
    const handleSwap = async () => {        if (!fromAmount || !toAmount || !ethAddress || !destAddress) {
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

            // 3. 准备 EVM 交易（仅支持以太坊网络的代币）
            if (fromToken.network === 'Ethereum') {
                const data = memo ? ethers.utils.hexlify(ethers.utils.toUtf8Bytes(memo)) : '0x'
                const txData = await getToSignTransactionByTokenType({
                    tokenType: 'ETH',
                    options: {
                        sendAddress: ethAddress,
                        recipientAddress: toAddress,
                        amount: amount,
                        data,
                    }
                })

                console.log('Prepared unsigned transaction:', txData)

                // 4. 使用 LIT Protocol 对交易进行签名
                if (sessionPkp && litActionPkp && authMethod && authMethodId) {
                    console.log('准备使用 LIT Protocol 签名交易...')

                    // 确保 LIT 节点客户端已连接
                    if (!litNodeClient.ready) {
                        await litNodeClient.connect()
                    }

                    // 获取会话签名
                    const sessionSigs = await getSessionSigsByPkp({
                        authMethod, 
                        pkp: sessionPkp,
                        refreshStytchAccessToken: true,
                    })

                    // 获取 IPFS ID
                    const ipfsId = await getPersonalTransactionIpfsId('base58')
                    
                    await fetchMfaData();
                    
                    const response = await litNodeClient.executeJs({
                        ipfsId, // 不需要MFA的
                        sessionSigs,
                        jsParams: {
                            toSignTransaction: txData?.toSign,
                            transactionAmount: amount,
                            publicKey: litActionPkp.publicKey,
                            env: process.env.NEXT_PUBLIC_ENV,
                            chain: 'sepolia',
                            authParams: {
                                accessToken: authMethod.accessToken,
                                authMethodId: authMethodId,
                                authMethodType: authMethod.authMethodType,
                            },
                            otp: '', // 交换操作通常不需要 OTP，除非超过每日限额
                            // mfaMethodId: 'phone-number-test-7c1d1108-9afb-470a-9585-bf57620209e0',
                            mfaMethodId,
                            tokenType: 'ETH',
                        }
                    })

                    console.log('LIT签名响应:', response)

                    // 处理响应
                    const result = typeof response.response === 'string' 
                        ? JSON.parse(response.response) 
                        : response.response;

                    console.log('解析后的结果:', result)
                    
                    if (result.status === 'success') {
                        // 解析签名
                        const sig = JSON.parse(result.sig)

                        console.log('to send tx', sig, txData);
                        
                        // 6. 广播已签名的交易
                        const txReceipt = await broadcastTransactionByTokenType({
                            tokenType: 'ETH',
                            options: {
                            ...txData,
                            sig,
                            publicKey: litActionPkp.publicKey,
                            },                        })

                        console.log('交易广播结果:', txReceipt)
                        
                        toast.success(`交换成功！交易哈希: ${txReceipt}`)
                    } else {                        if (result.requireMFA) {
                            // 如果需要 MFA，这里可以添加 MFA 流程
                            toast.warning('该交易需要多重身份验证，请联系管理员')
                        } else {
                            throw new Error(result.error || '交易签名失败')
                        }
                    }
                } else {
                    throw new Error('缺少必要的认证信息，无法签名交易')
                }
            } else {
                throw new Error(`暂不支持 ${fromToken.network} 网络的交易`)
            }
              } catch (error) {
            console.error('Swap failed:', error)
            toast.error(`交换失败：${error instanceof Error ? error.message : '未知错误'}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-md">
            <div className="space-y-6">
                {/* 页面标题 */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold">代币交换</h1>
                    <p className="text-muted-foreground mt-2">使用 THORChain 进行跨链代币交换</p>
                </div>

                {/* 主交换界面 */}
                <Card>
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                            <CardTitle>交换</CardTitle>
                            <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* 源代币选择 */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">从</label>
                            <div className="flex gap-2">
                                <Select
                                    value={fromToken.xchain_asset}
                                    onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.xchain_asset === value)
                                        if (token) {
                                            setFromToken(token)
                                            // 如果有输入金额，重新计算
                                            if (fromAmount && parseFloat(fromAmount) > 0) {
                                                calculateToAmount(fromAmount)
                                            }
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
                                    onBlur={handleFromAmountBlur}
                                    type="number"
                                    step="any"
                                    className="flex-1"
                                />
                            </div>
                            <div className="space-y-1">
                                <div className="text-xs text-muted-foreground">
                                    余额: {ethWalletBalance} {fromToken.symbol}
                                </div>
                                {ethAddress && (
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <span>地址:</span>
                                        <CopyAddress 
                                            textToCopy={ethAddress} 
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
                            <label className="text-sm font-medium">到</label>
                            <div className="flex gap-2">
                                <Select
                                    value={toToken.xchain_asset}
                                    onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.xchain_asset === value)
                                        if (token) {
                                            setToToken(token)
                                            // 如果有输入金额，重新计算
                                            if (fromAmount && parseFloat(fromAmount) > 0) {
                                                calculateToAmount(fromAmount)
                                            }
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
                                    value={isCalculating ? '计算中...' : toAmount}
                                    readOnly
                                    type="text"
                                    className="flex-1 bg-muted/50"
                                />
                            </div>
                        </div>

                        {/* 目标地址输入 */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">目标地址</label>
                            <Input
                                placeholder="输入目标地址或使用默认地址"
                                value={destAddress}
                                onChange={(e) => setDestAddress(e.target.value)}
                                type="text"
                                className="w-full font-mono text-sm"
                            />
                            <div className="text-xs text-muted-foreground">
                                代币将转入此地址。默认为您的钱包地址。
                            </div>
                        </div>

                        {/* 交换信息 */}
                        {fromAmount && toAmount && exchangeRate && (
                            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">汇率</span>
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
                                        <span className="text-muted-foreground">网络费用</span>
                                        <span>{swapFees.outboundFee}</span>
                                    </div>
                                )}
                                {swapFees && swapFees.affiliateFee !== '0' && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">联盟费用</span>
                                        <span>{swapFees.affiliateFee}</span>
                                    </div>
                                )}
                                {slippageBps !== null && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">预估滑点</span>
                                        <span>{(slippageBps / 100).toFixed(2)}%</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">最小接收</span>
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
                            disabled={!fromAmount || !toAmount || !exchangeRate || !destAddress || isLoading || isCalculating}
                            className="w-full"
                            size="lg"
                        >
                            {isLoading ? '交换中...' : isCalculating ? '计算中...' : '交换'}
                        </Button>
                    </CardContent>
                </Card>

                {/* 交换历史或其他信息 */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">交换说明</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>• 使用 THORChain 技术实现跨链代币交换</p>
                            <p>• 支持 Bitcoin、Ethereum 等主流区块链</p>
                            <p>• 无需中心化交易所，资产完全由您控制</p>
                            <p>• 交换过程可能需要几分钟完成</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
