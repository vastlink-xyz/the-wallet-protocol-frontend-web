'use client'

import { useState } from 'react'
import { ArrowDownUp, Settings, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'

// 支持的代币列表
const SUPPORTED_TOKENS = [
    {
        symbol: 'BTC',
        name: 'Bitcoin',
        icon: '/cryptocurrency/btc.png',
        network: 'Bitcoin'
    },
    {
        symbol: 'ETH',
        name: 'Ethereum',
        icon: '/cryptocurrency/eth.png',
        network: 'Ethereum'
    },
    // 可以扩展更多代币
]

export default function SwapPage() {
    const [fromToken, setFromToken] = useState(SUPPORTED_TOKENS[0])
    const [toToken, setToToken] = useState(SUPPORTED_TOKENS[1])
    const [fromAmount, setFromAmount] = useState('')
    const [toAmount, setToAmount] = useState('')
    const [exchangeRate, setExchangeRate] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isCalculating, setIsCalculating] = useState(false)

    // 计算目标资产数量
    const calculateToAmount = async (amount: string) => {
        if (!amount || parseFloat(amount) <= 0) {
            setToAmount('')
            setExchangeRate(null)
            return
        }

        setIsCalculating(true)
        try {
            // TODO: 调用 THORChain API 获取实际汇率
            // 这里先用模拟数据
            await new Promise(resolve => setTimeout(resolve, 500)) // 模拟API调用

            let rate = 1
            if (fromToken.symbol === 'BTC' && toToken.symbol === 'ETH') {
                rate = 15.5 // 1 BTC = 15.5 ETH (示例汇率)
            } else if (fromToken.symbol === 'ETH' && toToken.symbol === 'BTC') {
                rate = 0.065 // 1 ETH = 0.065 BTC (示例汇率)
            }

            const calculatedAmount = (parseFloat(amount) * rate).toString()
            setToAmount(calculatedAmount)
            setExchangeRate(rate)
        } catch (error) {
            console.error('Failed to calculate exchange rate:', error)
            setToAmount('')
            setExchangeRate(null)
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

    // 处理交换操作
    const handleSwap = async () => {
        if (!fromAmount || !toAmount || !exchangeRate) {
            alert('请输入有效的交换金额')
            return
        }

        setIsLoading(true)
        try {
            // TODO: 实现 xchainjs + thorchain 交换逻辑
            console.log('Swapping:', fromAmount, fromToken.symbol, 'to', toAmount, toToken.symbol, 'at rate:', exchangeRate)
            await new Promise(resolve => setTimeout(resolve, 2000)) // 模拟交换过程
            alert('交换成功！') // 临时提示，实际应该使用 toast
        } catch (error) {
            console.error('Swap failed:', error)
            alert('交换失败，请重试')
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
                                    value={fromToken.symbol}
                                    onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.symbol === value)
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
                                            <SelectItem key={token.symbol} value={token.symbol}>
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
                            <div className="text-xs text-muted-foreground">
                                余额: 0.00 {fromToken.symbol}
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
                                    value={toToken.symbol}
                                    onValueChange={(value) => {
                                        const token = SUPPORTED_TOKENS.find(t => t.symbol === value)
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
                                            <SelectItem key={token.symbol} value={token.symbol}>
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
                            <div className="text-xs text-muted-foreground">
                                余额: 0.00 {toToken.symbol}
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
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">预计费用</span>
                                    <span>~0.001 ETH</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">最小接收</span>
                                    <span>{(parseFloat(toAmount) * 0.995).toFixed(6)} {toToken.symbol}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">滑点容忍度</span>
                                    <span>0.5%</span>
                                </div>
                            </div>
                        )}

                        {/* 交换按钮 */}
                        <Button
                            onClick={handleSwap}
                            disabled={!fromAmount || !toAmount || !exchangeRate || isLoading || isCalculating}
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
