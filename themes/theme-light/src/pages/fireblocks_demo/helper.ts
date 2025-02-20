import keyManagementService from "@/services/KeyManagementService";
import { loadDeviceId } from "@/services/KeyManagementService/FireblocksKeyManagementService/deviceId"
import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance"
import { INewTransactionData } from "@/services/KeyManagementService/FireblocksKeyManagementService/types"
import { SigningInProgressError } from "@fireblocks/ncw-js-sdk";
import { passwordManager } from "./passwordManager";

const pollTransactionStatus = async ({deviceId, txId, targetStatus, maxAttempts = 30}: {deviceId: string, txId: string, targetStatus: string, maxAttempts?: number}) => {
  // poll interval
  const POLL_INTERVAL = 2000;
  let attempts = 0;

  return new Promise((resolve, reject) => {
    const poll = async () => {
      try {
        const transaction = await apiService.getTransactionById(deviceId, txId);
        console.log('Polling transaction status:', transaction.status);
        
        if (transaction.status === targetStatus) {
          resolve(transaction);
          return;
        }

        // if max attempts reached, stop polling
        attempts++;
        if (attempts >= maxAttempts) {
          reject(new Error(`Polling timeout after ${maxAttempts} attempts`));
          return;
        }

        // continue polling
        setTimeout(poll, POLL_INTERVAL);
      } catch (error) {
        reject(error);
      }
    };

    // start polling
    poll();
  });
};

export const signTypedMessage = async ({
  userInfoFetched,
  userInfo,
}: {
  userInfoFetched: boolean
  userInfo: any
}) => {
  if (!userInfoFetched || !userInfo) {
    return
  }
  const deviceId = loadDeviceId(userInfo.sub)
  console.log('deviceId', deviceId)
  if (!deviceId) {
    return
  }
  let dataToSend: INewTransactionData = {
    note: `API Transaction by ${deviceId}`,
    accountId: "0",
    assetId: 'BTC_TEST',
  };
  const data = await apiService.createTransaction(deviceId, dataToSend)
  console.log('transaction', data)

  const txId = data.id
  console.log('txId', txId)
  try {
    const completedTx = await pollTransactionStatus({deviceId, txId, targetStatus: 'PENDING_SIGNATURE'});
    console.log('Transaction completed:', completedTx);
  } catch (error) {
    console.error('Transaction polling failed:', error);
  }

  try {
    const result = await keyManagementService.config.fireblocksNCWInstance?.signTransaction(txId)
    console.log('result', result)
  } catch(err) {
    // clear password if signature failed
    passwordManager.clearPassword()
    if (err instanceof SigningInProgressError) {
      if (err.txId === txId) {
        throw err;
      } else {
        console.log('stopping in progress sign transaction')
        await keyManagementService.config.fireblocksNCWInstance?.stopInProgressSignTransaction();
        console.log('stopped in progress sign transaction')
      }
    } else {
      throw err;
    }
  }
}
