import { ERC20_TVWT_ABI } from "@/abis/TheVastWalletToken";
import { theTokenListingService } from "@/services/TokenListingService";
import { TokenType } from "@/types/tokens";
import { http, createPublicClient, Address, encodeFunctionData, formatEther, Block } from "viem";

export const erc20Abi = ERC20_TVWT_ABI;

export const trimTrailingZeros = (num: string) => num.replace(/\.?0+$/, '');

export const formatDecimal = (amount: string, decimal=6) => parseFloat(amount).toFixed(decimal)

export const formatNumberWithCommas = (amount: string | number, decimal = 2) => {
  // Convert to number and fix decimal places
  const num = typeof amount === 'string' ? parseFloat(amount) : amount;
  const fixedNum = num.toFixed(decimal);
  
  // Split number into integer and decimal parts
  const [integerPart, decimalPart] = fixedNum.split('.');
  
  // Add commas to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Return formatted number with decimal part if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

export function truncateMiddle(str: string, startChars = 8, endChars = 10, ellipsis = '...') {
  if (str.length <= startChars + endChars) {
    return str;
  }

  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);

  return `${start}${ellipsis}${end}`;
}

export async function getEstimatedGasFeeByToken({
  tokenType,
  transferParams,
  fromAddress,
  defaultGasPrice,
  defaultBlock
}: {
  tokenType: TokenType,
  transferParams: {
    to: Address,
    amount: bigint,
  },
  fromAddress: Address,
  defaultGasPrice?: bigint,
  defaultBlock?: Block
}) {
  try {
    const chain = theTokenListingService.getToken(tokenType).viemChain;
    if (!chain) return null;

    if (theTokenListingService.getToken(tokenType).gasless) {
      return {
        estimatedGas: BigInt(0),
        maxFeePerGas: BigInt(0),
        maxPriorityFeePerGas: BigInt(0),
        estimatedTotalFee: BigInt(0),
        baseFee: BigInt(0),
        gasPrice: BigInt(0),
        feeInTokens: '0',
      };
    }

    const publicClient = createPublicClient({
      chain,
      transport: http()
    });

    // Get contract address from mapping if it's an ERC20 token
    let contractAddress = undefined;
    if (theTokenListingService.isERC20Token(tokenType)) {
      contractAddress = theTokenListingService.getToken(tokenType).contractAddress;
      
      if (!contractAddress) {
        throw new Error('Invalid token contract address');
      }
    }

    // create transaction object
    let transaction;
    if (theTokenListingService.isERC20Token(tokenType)) {
      // ERC20 transfer: construct transfer method call data
      const data = encodeFunctionData({
        abi: erc20Abi,
        functionName: 'transfer',
        args: [transferParams.to, transferParams.amount]
      });

      transaction = {
        to: contractAddress!,
        data,
        value: BigInt(0)
      };
    } else {
      // native token transfer
      transaction = {
        to: transferParams.to,
        value: transferParams.amount
      };
    }

    try {
      // 1. Estimate gas usage
      const estimatedGas = await publicClient.estimateGas({
        ...transaction,
        account: fromAddress,
      });
      
      // 2. Get current gas price information
      const gasPrice = defaultGasPrice || await publicClient.getGasPrice();
      const block = defaultBlock || await publicClient.getBlock();
      const baseFee = block.baseFeePerGas || BigInt(0);
      
      // 3. Calculate gas fee components
      const maxPriorityFeePerGas = gasPrice > baseFee 
        ? gasPrice - baseFee 
        : BigInt(1000000000);
      const maxFeePerGas = baseFee + maxPriorityFeePerGas * BigInt(2);

      // 4. Calculate estimated total transaction fee
      const estimatedTotalFee = estimatedGas * maxFeePerGas;
      
      const feeInTokens = formatDecimal(
        (Number(estimatedTotalFee) / Math.pow(10, 18)).toString()
      );
      
      return {
        estimatedGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        estimatedTotalFee,
        baseFee,
        gasPrice,
        feeInTokens,
      };
    } catch (error) {
      console.error('Gas estimation error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Transaction error:', error);
    throw error;
  }
}

export async function getEstimatedBatchGasFeeByToken(
  tokenType: TokenType,
  transferParamsList: Array<{
    to: Address,
    amount: bigint,
  }>,
  fromAddress: Address
) {
  try {
    // get gas fee for the first transfer
    const firstEstimation = await getEstimatedGasFeeByToken({
      tokenType,
      transferParams: transferParamsList[0],
      fromAddress,
    });

    if (!firstEstimation) return null;

    // use same gasPrice and block info to calculate other transactions
    const estimations = await Promise.all(
      transferParamsList.map(params =>
        getEstimatedGasFeeByToken({
          tokenType,
          transferParams: params,
          fromAddress,
          defaultGasPrice: firstEstimation.gasPrice,
          defaultBlock: { baseFeePerGas: firstEstimation.baseFee } as Block
        })
      )
    );

    // sum up all transactions' gas fee
    const totalEstimatedGas = estimations.reduce(
      (sum, est) => est ? sum + est.estimatedGas : sum,
      BigInt(0)
    );

    const totalEstimatedFee = estimations.reduce(
      (sum, est) => est ? sum + est.estimatedTotalFee : sum,
      BigInt(0)
    );

    const feeInTokens = formatDecimal(
      (Number(totalEstimatedFee) / Math.pow(10, 18)).toString()
    );

    return {
      estimatedGas: totalEstimatedGas,
      maxFeePerGas: firstEstimation.maxFeePerGas,
      maxPriorityFeePerGas: firstEstimation.maxPriorityFeePerGas,
      estimatedTotalFee: totalEstimatedFee,
      baseFee: firstEstimation.baseFee,
      gasPrice: firstEstimation.gasPrice,
      feeInTokens,
      transactionCount: transferParamsList.length
    };

  } catch (error) {
    console.error('Batch transaction gas estimation error:', error);
    throw error;
  }
}
