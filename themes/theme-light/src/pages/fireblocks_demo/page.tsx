import { Button } from '@/components/ui/button';
import { useUserInfo } from '@/hooks/user/useUserInfo';
import { OneHourMs } from '@/lib/utils';
import keyManagementService from '@/services/KeyManagementService';
import { loadDeviceId } from '@/services/KeyManagementService/FireblocksKeyManagementService/deviceId';
import { INewTransactionData, TPassphrases, TRequestDecodedData } from '@/services/KeyManagementService/FireblocksKeyManagementService/types';
import { SigningInProgressError } from '@fireblocks/ncw-js-sdk';
import { useState } from 'react';
import { decode, encode } from "js-base64";
import { apiService } from '@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance';
import { Input } from '@/components/ui/input';
import api from '@/lib/api';
import { TokenType } from '@/types/tokens';
import { TransactionType } from '@/types/transaction';

export default function FireblocksDemoPage() {
  const { data: userInfo, isFetched: userInfoFetched } = useUserInfo()
  const [txFee, setTXFee] = useState<"LOW" | "MEDIUM" | "HIGH">('LOW');
  const [txId, setTxId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [qrCodeValue, setQrCodeValue] = useState<string>('')

  const [amount, setAmount] = useState<string>('')
  const [destinationAddress, setDestinationAddress] = useState<string>('')

  // After successful OTP registration/login and JWT generation,
  // this function assigns deviceId to user's wallet and initializes Fireblocks
  const handleVerifyRegisterByUserSub = async () => {
    setLoading(true)
    await keyManagementService.signUp({
      username: userInfo?.email ?? '',
      sub: userInfo?.sub ?? '',
    })
    setLoading(false)
  }

  const handleSignInByUserSub = async () => {
    setLoading(true)
    await keyManagementService.signIn({
      authUsername: userInfo?.email ?? '',
      sub: userInfo?.sub ?? '',
    })
    setLoading(false)
  }

  const handleGetWallets = async () => {
    setLoading(true)
    const wallets = await apiService.getWallets()
    console.log('wallets', wallets)
    setLoading(false)
  }

  const handleGenerateMPCKeys = async () => {
    setLoading(true)
    await keyManagementService.generateMPCKeys()
    setLoading(false)
  }

  const handleGoogleDriveBackup = async () => {
    
  }

  const handleAssetManagement = async () => {
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accounts = await apiService.getAccounts(deviceId)
    console.log('accounts', accounts)
  }

  const handleAssetList = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const assets = await apiService.getAssets(deviceId, 0)
    console.log('assets', assets)
    setLoading(false)
  }

  const handleSupportedAssets = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const supportedAssets = await apiService.getSupportedAssets(deviceId, 0)
    console.log('supportedAssets', supportedAssets)
    setLoading(false)
  }
  
  const handleAddAsset = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    const assetId = 'BTC_TEST'
    // const assetId = 'ETH_TEST5'
    await apiService.addAsset(deviceId, accountId, assetId);
    const asset = await apiService.getAsset(deviceId, accountId, assetId);
    console.log('asset', asset)
    setLoading(false)
  }
  
  const handleGetAddress = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    const assetId = 'BTC_TEST'
    const address = await apiService.getAddress(deviceId, accountId, assetId);
    console.log('address', address)
    setLoading(false)
  }

  const handleGetBalance = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    const assetId = 'BTC_TEST'
    const balance = await apiService.getBalance(deviceId, accountId, assetId)
    console.log('balance', balance)
    setLoading(false)
  }

  const handleCreateTransaction = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    // const accountId = '0'
    // const assetId = 'BTC_TEST'
    // // const amount = '0.0001'
    // // const destinationAddress = 'tb1q40gflfmq69hypcrwcmgxjvuzrjqnkkyvfxv7fm'
    // const dataToSend: INewTransactionData = {
    //   note: `API Transaction by ${deviceId}`,
    //   accountId: accountId,
    //   assetId: assetId,
    //   amount: amount,
    //   destAddress: destinationAddress,
    //   feeLevel: txFee,
    //   estimateFee: false,
    // };
    // const data = await apiService.createTransaction(deviceId, dataToSend)
    try {
      const data: any = await keyManagementService.signTransaction({
        fromAddress: userInfo.chainAddresses?.BITCOIN ?? '',
        toAddress: destinationAddress,
        amount: amount,
        token: TokenType.BTC,
        transactionType: TransactionType.TRANSFER,
      })
      setTxId(data.id)
      console.log('transaction', data)
    } catch(err) {
      console.log('error', err)
    } finally {
      setLoading(false)
    }
  }

  const handleGetTransaction = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    if (!txId) {
      alert('Please create a transaction first')
      return
    }
    const transaction = await apiService.getTransactionById(deviceId, txId)
    console.log('transaction details', transaction)
    setLoading(false)
  }

  const handleSignTransactionByTxId = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    if (!txId) {
      alert('Please create a transaction first')
      return
    }
    try {
      const result = await keyManagementService.config.fireblocksNCWInstance?.signTransaction(txId)
      console.log('result', result)
    } catch(err) {
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
    } finally {
      setLoading(false)
    }
  }

  const handleGetKeysStatus = async () => {
    setLoading(true)
    const status = await keyManagementService.config.fireblocksNCWInstance?.getKeysStatus()
    console.log('keys status', status)
    setLoading(false)
  }

  const handleJoinExistingDevice = async () => {
    setLoading(true)
    await keyManagementService.config.fireblocksNCWInstance?.requestJoinExistingWallet({
      onRequestId: (requestId) => {
        console.log('requestId', requestId)
        const encodedData = encode(
          `{"email":"${userInfo?.email ?? "not available"}","platform":"Web","requestId":"${requestId}"}`,
        );
        console.log('encodedData', encodedData)
        setQrCodeValue(encodedData)
      },
      onProvisionerFound: () => {
        console.log('onProvisionerFound')
      },
    })
    setLoading(false)
  }

  const handleApproveJoinExistingDevice = async () => {
    setLoading(true)
    const requestData = await prompt("Insert encoded request data");
    if (!requestData) {
      alert('No request data provided')
      return
    }
    const decodedData: TRequestDecodedData = JSON.parse(decode(requestData));
    console.log('decodedData', decodedData)
    await keyManagementService.config.fireblocksNCWInstance?.approveJoinWalletRequest(decodedData.requestId)
    setLoading(false)
  }

  const handleGetPassphrases = async () => {
    setLoading(true)
    const { passphrases } = await apiService.getPassphraseInfos()
    const reduced = passphrases.reduce<TPassphrases>((p, v) => {
      p[v.passphraseId] = v;
      return p;
    }, {});
    console.log('passphrases', reduced)
    // try to reuse previous
    // for (const info of Object.values(passphrases)) {
    //   if (info.location === location) {
    //     switch (location) {
    //       case "GoogleDrive": {
    //         const passphrase = await recoverGoogleDrive(info.passphraseId);
    //         return { passphraseId: info.passphraseId, passphrase };
    //       }
    //       case "iCloud": {
    //         if (!cloudkit || !appleSignedIn) {
    //           throw new Error("Sign in with Apple ID required");
    //         }

    //         const passphrase = await cloudkitRecover(cloudkit, info.passphraseId);
    //         return { passphraseId: info.passphraseId, passphrase };
    //       }
    //       default:
    //         throw new Error(`Unsupported backup location ${location}`);
    //     }
    //   }
    // }

    setLoading(false)
  }

  const handleBackupWithGoogleDrive = async () => {
    setLoading(true)
    // await keyManagementService.config.fireblocksNCWInstance?.backupWallet()
    setLoading(false)
  }


  return <div>
    <Button disabled={loading} onClick={handleVerifyRegisterByUserSub}>Sign up by user id and init fireblocks</Button>
    <Button disabled={loading} onClick={handleSignInByUserSub}>Sign in by user id and init fireblocks</Button>
    <br />
    <Button disabled={loading} onClick={handleGetKeysStatus}>Get keys status</Button>
    <Button disabled={loading} onClick={handleGetWallets}>Get wallets</Button>
    <hr />
    <Button disabled={loading} onClick={handleGenerateMPCKeys}>Generate MPC keys</Button>
    <hr />
    {/* <Button disabled={loading} onClick={handleGoogleDriveBackup}>Google Drive Backup</Button> */}
    <hr />
    <Button disabled={loading} onClick={handleSupportedAssets}>Supported Assets</Button>
    <hr />
    <Button disabled={loading} onClick={handleAssetList}>Asset List</Button>
    <hr />
    <Button disabled={loading} onClick={handleAddAsset}>Add Asset(BTC_TEST)</Button>
    <hr />
    <Button disabled={loading} onClick={handleGetAddress}>Get Address</Button>
    <hr />
    <Button disabled={loading} onClick={handleGetBalance}>Get balance</Button>
    <hr />

    <div className='flex'>
      <Input placeholder='btc amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Input placeholder='destination address' value={destinationAddress} onChange={(e) => setDestinationAddress(e.target.value)} />
    </div>
    <Button disabled={loading} onClick={handleCreateTransaction}>Create transaction</Button>
    {txId && <Button disabled={loading} onClick={handleGetTransaction}>Get transaction</Button>}

    <hr />
    <Button disabled={loading} onClick={handleSignTransactionByTxId}>Sign transaction</Button>
    <hr />
    <Button disabled={loading} onClick={handleJoinExistingDevice}>Join existing device</Button>
    request data: {qrCodeValue}
    <br />
    <Button disabled={loading} onClick={handleApproveJoinExistingDevice}>Approve joining wallet</Button>
    <br />
    <Button disabled={loading} onClick={handleGetPassphrases}>Get Passphrases</Button>
    <br />
    <Button disabled={loading} onClick={handleBackupWithGoogleDrive}>Backup wallet with Google Drive</Button>
    <br />
  </div>;
}
