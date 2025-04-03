import { Button } from '@/components/ui/button';
import { useUserInfo } from '@/hooks/user/useUserInfo';
import { encryptWithPublicKey, hashEncryptedData, log, OneHourMs } from '@/lib/utils';
import keyManagementService from '@/services/KeyManagementService';
import { loadDeviceId, storeDeviceId } from '@/services/KeyManagementService/FireblocksKeyManagementService/deviceId';
import { INewTransactionData, TPassphrases, TRequestDecodedData } from '@/services/KeyManagementService/FireblocksKeyManagementService/types';
import { SigningInProgressError } from '@fireblocks/ncw-js-sdk';
import { useEffect, useState } from 'react';
import { decode, encode } from "js-base64";
import { apiService, initFireblocksNCW } from '@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance';
import { Input } from '@/components/ui/input';
import api from '@/lib/api';
import { TokenType } from '@/types/tokens';
import { TransactionType } from '@/types/transaction';
import { authManager } from './auth/FirebaseAuthManager';
import { gdriveRecover } from './auth/GoogleDrive';
import { passphrasePersist, recoverGoogleDrive, recoverPassphraseId } from './backupAndRecover';
import { signTypedMessage } from './helper';
import { passwordManager } from './passwordManager';
import { useAuth0 } from '@auth0/auth0-react';
import { auth0TokenManager } from '@/lib/utils/auth0TokenManager';

export default function FireblocksDemoPage() {
  const { user, getAccessTokenSilently, loginWithRedirect } = useAuth0();

  const { data: userInfo, isFetched: userInfoFetched } = useUserInfo()
  const [txFee, setTXFee] = useState<"LOW" | "MEDIUM" | "HIGH">('LOW');
  const [txId, setTxId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [qrCodeValue, setQrCodeValue] = useState<string>('')

  const [amount, setAmount] = useState<string>('')
  const [destinationAddress, setDestinationAddress] = useState<string>('')

  // const [password, setPassword] = useState<string>('')

  useEffect(() => {
    // get query params from url
    const searchParams = new URLSearchParams(window.location.search);
    if (userInfoFetched && userInfo) {
      handleCreateTransactionFromSearchParams(searchParams)
    }
  }, [userInfoFetched, userInfo]);

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
  
  const handleInitFireblocks = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    log('deviceid', deviceId)
    if (!deviceId) {
      return
    }
    await keyManagementService.initFireblocksNCWInstance(deviceId)
    setLoading(false)
  }

  const handleClearAllStorage = async () => {
    await keyManagementService.config.fireblocksNCWInstance?.clearAllStorage()
  }

  const handleGetWallets = async () => {
    setLoading(true)
    const data = await apiService.getWallets()
    console.log('wallets', data)
    setLoading(false)
  }

  const handleGenerateMPCKeys = async () => {
    setLoading(true)
    await keyManagementService.generateMPCKeys()
    setLoading(false)
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
  
  const handleAddAssetBTC = async () => {
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
  
  const handleAddAssetETH = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    // const assetId = 'BASECHAIN_ETH_TEST5'
    const assetId = 'ETH_TEST5'
    await apiService.addAsset(deviceId, accountId, assetId);
    const asset = await apiService.getAsset(deviceId, accountId, assetId);
    console.log('asset', asset)
    setLoading(false)
  }
  
  const handleAddAssetVAST = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    const assetId = 'VAST_B724A1Y3_6CZC'
    await apiService.addAsset(deviceId, accountId, assetId);
    const asset = await apiService.getAsset(deviceId, accountId, assetId);
    console.log('asset', asset)
    setLoading(false)
  }
  
  const handleGetAddressBTC = async () => {
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
  
  const handleGetAddressETH = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = 0
    const assetId = 'ETH_TEST5'
    // const assetId = 'BASECHAIN_ETH_TEST5'
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

  const handleCreateTransactionFromSearchParams = async (searchParams: URLSearchParams) => {
    
    const amount = searchParams.get('amount');
    const toAddress = searchParams.get('toAddress');
    const fromAddress = searchParams.get('fromAddress');
    const token = searchParams.get('token');
    const transactionType = searchParams.get('transactionType');
    
    if (!amount || !toAddress) {
      console.log('No amount or toAddress provided')
      return
    }
    
    setLoading(true)
    console.log('Redirected from Auth0 with transaction parameters:', {
      amount,
      toAddress,
      fromAddress,
      token,
      transactionType
    });

    auth0TokenManager.setTokenGetter(() => getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        response_type: 'id_token token',
        client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
        redirect_uri: 'http://localhost:3000/fireblocks_demo',
        scope: 'openid transfer:daily_withdrawal_limit offline_access',
      }
    }));

    try {
      const res = await api.post('/transaction/verify-to-sign', {
        amount: amount,
        toAddress: toAddress,
        fromAddress: fromAddress,
        token: token,
        transactionType: transactionType,
      })
      console.log('res', res)
    } catch(err) {
      console.log('error', err)
    } finally {
      setLoading(false)
    }
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
        fromAddress: userInfo.chainAddresses?.BITCOIN_TEST ?? '',
        toAddress: destinationAddress,
        amount: amount,
        token: TokenType.BTC_TEST,
        transactionType: TransactionType.TRANSFER,
      })
      if (data.needOtp) {
        const queryParams = {
          fromAddress: userInfo.chainAddresses?.BITCOIN_TEST ?? '',
          toAddress: destinationAddress,
          amount: amount,
          token: TokenType.BTC_TEST,
          transactionType: TransactionType.TRANSFER,
        }
        const queryString = new URLSearchParams(queryParams).toString();
        const redirect_uri = `${window.location.origin}/fireblocks_demo?${queryString}`

        loginWithRedirect({
          authorizationParams: {
            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            response_type: 'id_token token',
            client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
            redirect_uri: redirect_uri,
            scope: 'openid transfer:daily_withdrawal_limit offline_access',
          }
        })
        return
      } else if (data.success) {
        setTxId(data.id)
      } else {
        console.log('transaction failed', data)
      }
    } catch(err) {
      console.log('error', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateTestTransaction = async () => {
    setLoading(true)
    if (!userInfoFetched || !userInfo) {
      return
    }
    const deviceId = loadDeviceId(userInfo.sub)
    if (!deviceId) {
      return
    }
    const accountId = '0'
    const assetId = 'VAST_B724A1Y3_6CZC'
    const amount = '1'
    const destinationAddress = '0x58AF9AdeE4B5b913Be1ab18f6647b03c89A35e8e'
    const dataToSend: INewTransactionData = {
      note: `API Transaction by ${deviceId}`,
      accountId: accountId,
      assetId: assetId,
      amount: amount,
      destAddress: destinationAddress,
      feeLevel: 'LOW',
      estimateFee: false,
    };
    const data = await apiService.createTransaction(deviceId, dataToSend)
    log('data', data)
    setLoading(false)
  }

  const handleCreateTypedMessageTransaction = async () => {
    setLoading(true)
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
    setTxId(data.id)
    setLoading(false)
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
    const data = await apiService.getPassphraseInfos()
    console.log('passphrases', data)
    setLoading(false)
  }
  
  const handleBackupWithGoogleDrive = async () => {
    setLoading(true)
    if (!authManager.loggedUser) {
      alert('Please sign in first')
    }
    // if (!password) {
      //   alert('Please enter a password')
      //   setLoading(false)
      //   return
      // }
      if (!userInfoFetched || !userInfo) {
        return
      }
      const deviceId = loadDeviceId(userInfo.sub)
      if (!deviceId) {
        return
      }

    await keyManagementService.initFireblocksNCWInstanceWithPasswordManager(deviceId)
    console.log('initFireblocksNCWInstanceWithPasswordManager called')
    await signTypedMessage({
      userInfoFetched: userInfoFetched,
      userInfo: userInfo,
    })
    const password = passwordManager.getPassword()
    if (!password) {
      alert('No password found')
      return
    }

    const { passphrase, passphraseId } = await passphrasePersist('GoogleDrive', password);
    console.log('fireblocks ncw backupKeys called with', passphrase, passphraseId)
    await keyManagementService.config.fireblocksNCWInstance?.backupKeys(passphrase, passphraseId);
    console.log('backed up with google drive successfully')
    setLoading(false)
  }

  const handleLoginWithGoogle = async () => {
    setLoading(true)
    await authManager.login('GOOGLE')
    setLoading(false)
  }

  const handleRecoverWithGoogleDrive = async () => {
    setLoading(true)
    console.log('recovering keys')
    const backupData = await handleGetLatestBackup()
    const deviceId = backupData?.deviceId
    if (!deviceId) {
      alert('No device id found')
      return
    }

    if (!userInfoFetched || !userInfo) {
      return
    }
    storeDeviceId(deviceId, userInfo.sub)

    await keyManagementService.initFireblocksNCWInstance(deviceId)
    await keyManagementService.config.fireblocksNCWInstance?.recoverKeys(recoverPassphraseId)
    console.log('keys recovered')
    const status = await keyManagementService.config.fireblocksNCWInstance?.getKeysStatus()
    console.log('keys status', status)
    setLoading(false)
  }

  const handleGetLatestBackup = async () => {
    try {
      setLoading(true)
      const data = await apiService.getWallets()
      console.log('wallets', data)
      const backup = await apiService.getLatestBackup(data.wallets[0].walletId)
      console.log('latest backup', backup)
      return backup
    } catch(err) {
      console.log('error', err)
    } finally {
      setLoading(false)
    }
  }

  const handleTest = async () => {
    const publicKey = import.meta.env.VITE_PUBLIC_KEY_FOR_FIREBLOCKS_MPC;
    const encryptedKey = await encryptWithPublicKey(publicKey, '1234');
    console.log('encryptedKey', encryptedKey)

    const res = await api.post('/decrypt', {
      encrypted: encryptedKey
    })
    console.log('res', res)
  }

  const handleRecoverPasswordWithGoogleDrive = async () => {
    setLoading(true)
    const backupData = await handleGetLatestBackup()
    const deviceId = backupData?.deviceId
    if (!deviceId) {
      alert('No device id found')
      return
    }
    const passphrase = await recoverGoogleDrive(backupData.passphraseId)
    console.log('passphrase', passphrase)
    const res = await api.post('/decrypt', {
      encrypted: passphrase
    })
    console.log('res', res)
    setLoading(false)
  }

  return <div>
    <Button disabled={loading} onClick={handleVerifyRegisterByUserSub}>Sign up by user id</Button>
    <Button disabled={loading} onClick={handleSignInByUserSub}>Sign in by user id</Button>
    <Button disabled={loading} onClick={handleInitFireblocks}>Init fireblocks</Button>
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
    <Button disabled={loading} onClick={handleAddAssetBTC}>Add Asset(BTC_TEST)</Button>
    <Button disabled={loading} onClick={handleAddAssetETH}>Add Asset(ETH_TEST5)</Button>
    <Button disabled={loading} onClick={handleAddAssetVAST}>Add Asset(VAST)</Button>
    <hr />
    <Button disabled={loading} onClick={handleGetAddressBTC}>Get Address BTC</Button>
    <Button disabled={loading} onClick={handleGetAddressETH}>Get Address ETH</Button>
    <hr />
    <Button disabled={loading} onClick={handleGetBalance}>Get balance</Button>
    <hr />

    <div className='flex'>
      <Input placeholder='btc amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Input placeholder='destination address' value={destinationAddress} onChange={(e) => setDestinationAddress(e.target.value)} />
      <Input placeholder='transaction id' value={txId} onChange={(e) => setTxId(e.target.value)} />
    </div>
    <Button disabled={loading} onClick={handleCreateTestTransaction}>test Create a transaction</Button>
    <Button disabled={loading} onClick={handleCreateTransaction}>Create a transfer transaction</Button>
    <Button disabled={loading} onClick={handleCreateTypedMessageTransaction}>Create a typed message transaction</Button>
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
    {/* <Input placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
    <Button disabled={loading} onClick={handleGetLatestBackup}>Get latest backup</Button>
    <Button disabled={loading} onClick={handleLoginWithGoogle}>Login with Google</Button>
    <Button disabled={loading} onClick={handleBackupWithGoogleDrive}>Backup wallet with Google Drive</Button>
    <Button disabled={loading} onClick={handleRecoverWithGoogleDrive}>Recover wallet with Google Drive</Button>
    <Button disabled={loading} onClick={handleRecoverPasswordWithGoogleDrive}>Recover password with Google Drive</Button>
    <br />
    <Button disabled={loading} onClick={handleTest}>Test</Button>
    <Button disabled={loading} onClick={handleClearAllStorage}>Clear all storage</Button>
  </div>;
}
