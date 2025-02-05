import {
  FireblocksNCWFactory,
  IEventsHandler,
  IFireblocksNCW,
  IMessagesHandler,
  TEvent,
  InMemorySecureStorageProvider,
  TMPCAlgorithm,
  IKeyDescriptor,
  IKeyBackupEvent,
  IKeyRecoveryEvent,
  IJoinWalletEvent,
  ConsoleLoggerFactory,
  TEnv,
  getFireblocksNCWInstance,
} from "@fireblocks/ncw-js-sdk";
import { ApiService } from "./apiService";
import { PasswordEncryptedLocalStorage } from "./PasswordEncryptedLocalStorage";

export const apiService = new ApiService(import.meta.env.VITE_VASTLINK_PROTOCAL_API_BASEURL || "")

export const initFireblocksNCW = async (deviceId: string) => {
  let fireblocksNCW: IFireblocksNCW | null = null;

  try {
    const messagesHandler: IMessagesHandler = {
      handleOutgoingMessage: (message: string) => {
        return apiService.sendMessage(deviceId, message);
      },
    };

    const eventsHandler: IEventsHandler = {
      handleEvent: (event: TEvent) => {
        switch (event.type) {
          case "key_descriptor_changed": {
            const keysStatus: Record<TMPCAlgorithm, IKeyDescriptor> = {} as Record<TMPCAlgorithm, IKeyDescriptor>
            keysStatus[event.keyDescriptor.algorithm] = event.keyDescriptor;
            console.log('key_descriptor_changed', keysStatus);
            break;
          }

          case "transaction_signature_changed":
            console.log(`Transaction signature status: ${event.transactionSignature.transactionSignatureStatus}`);
            break;

          case "keys_backup":
            console.log(`Key backup status: ${JSON.stringify((event as IKeyBackupEvent).keysBackup)}`);
            break;

          case "keys_recovery":
            console.log(`Key recover status: ${JSON.stringify((event as IKeyRecoveryEvent).keyDescriptor)}`);
            break;

          case "join_wallet_descriptor":
            console.log(`join wallet event: ${JSON.stringify((event as IJoinWalletEvent).joinWalletDescriptor)}`);
            break;
        }
      },
    };

    const secureStorageProvider = new PasswordEncryptedLocalStorage(deviceId, () => {
      const password = prompt("Enter password", "");
      if (password === null) {
        return Promise.reject(new Error("Rejected by user"));
      }
      return Promise.resolve(password || "");
    });

    const ncwInstance = getFireblocksNCWInstance(deviceId);
    if (ncwInstance) {
      fireblocksNCW = ncwInstance;
    } else {
      fireblocksNCW = await FireblocksNCWFactory({
        env: import.meta.env.VITE_NCW_SDK_ENV as TEnv,
        deviceId,
        messagesHandler,
        eventsHandler,
        secureStorageProvider,
      });
    }

    return fireblocksNCW;
  } catch (error) {
    console.error(error);
  }
}
