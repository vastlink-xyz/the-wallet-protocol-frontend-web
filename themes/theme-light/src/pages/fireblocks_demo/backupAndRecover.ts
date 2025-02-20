import { apiService } from "@/services/KeyManagementService/FireblocksKeyManagementService/fireblocksInstance";
import { TPassphraseLocation } from "@/services/KeyManagementService/FireblocksKeyManagementService/types";
import { gdriveBackup, gdriveRecover } from "./auth/GoogleDrive";
import { authManager } from "./auth/FirebaseAuthManager";
import { randomPassPhrase } from "@/services/KeyManagementService/FireblocksKeyManagementService/randomPassPhrase";
import { encryptWithPublicKey } from "@/lib/utils";

export const recoverGoogleDrive = async (passphraseId: string) => {
  const token = await authManager.getGoogleDriveCredentials();
  return gdriveRecover(token, passphraseId);
};

const passphraseRecover: (
  location: TPassphraseLocation,
) => Promise<{ passphrase: string; passphraseId: string }> = async (location) => {
  const { passphrases } = await apiService.getPassphraseInfos()

  if (passphrases === null) {
    throw new Error();
  }

  // try to reuse previous
  for (const info of Object.values(passphrases)) {
    if (info.location === location) {
      switch (location) {
        case "GoogleDrive": {
          const passphrase = await recoverGoogleDrive(info.passphraseId);
          return { passphraseId: info.passphraseId, passphrase };
        }
        // case "iCloud": {
        //   if (!cloudkit || !appleSignedIn) {
        //     throw new Error("Sign in with Apple ID required");
        //   }

        //   const passphrase = await cloudkitRecover(cloudkit, info.passphraseId);
        //   return { passphraseId: info.passphraseId, passphrase };
        // }
        default:
          throw new Error(`Unsupported backup location ${location}`);
      }
    }
  }

  throw new Error(`Not found backup location ${location}`);
};


const backupGoogleDrive = async (passphrase: string, passphraseId: string) => {
  const token = await authManager.getGoogleDriveCredentials();
  return gdriveBackup(token, passphrase, passphraseId);
};

const passphrasePersist: (
  location: TPassphraseLocation,
  password: string
) => Promise<{ passphrase: string; passphraseId: string }> = async (location, password) => {
  console.log('persisting passphrase', location)
  const { passphrases } = await apiService.getPassphraseInfos()

  if (passphrases === null) {
    throw new Error();
  }

  try {
    console.log('recovering passphrase', location)
    const recover = await passphraseRecover(location);
    if (recover) {
      console.log('recovered passphrase', recover)
      return recover;
    }
  } catch (e) {
    console.warn(`failed to load previous passphrase, creating new`, e, location);
  }

  // creating new
  // const passphrase = randomPassPhrase();
  const publicKey = import.meta.env.VITE_PUBLIC_KEY_FOR_FIREBLOCKS_MPC;
  const passphrase = await encryptWithPublicKey(publicKey, password)
  console.log('encrypted passphrase', passphrase)
  const passphraseId = crypto.randomUUID();

  switch (location) {
    case "GoogleDrive": {
      console.log('backing up passphrase', passphrase, passphraseId)
      await backupGoogleDrive(passphrase, passphraseId);
      await apiService.createPassphraseInfo(passphraseId, location);
      return { passphraseId, passphrase };
    }
    // case "iCloud": {
    //   if (!cloudkit || !appleSignedIn) {
    //     throw new Error("Apple Sign in required");
    //   }
    //   await cloudkitBackup(cloudkit, passphrase, passphraseId);
    //   await createPassphraseInfo(passphraseId, location);
    //   return { passphraseId, passphrase };
    // }
    default:
      throw new Error(`Unsupported backup location ${location}`);
  }
};

const recoverPassphraseId: (passphraseId: string) => Promise<string> = async (passphraseId) => {
  console.log('recovering passphraseId', passphraseId)
  const { passphrases } = await apiService.getPassphraseInfos()

  if (passphrases === null) {
    throw new Error();
  }

  // try to reuse previous
  for (const info of Object.values(passphrases)) {
    if (info.passphraseId === passphraseId) {
      switch (info.location) {
        case "GoogleDrive": {
          console.log('recovering passphraseId from GoogleDrive', info.passphraseId)
          return await recoverGoogleDrive(info.passphraseId);
        }
        // case "iCloud": {
        //   if (!cloudkit || !appleSignedIn) {
        //     throw new Error("Sign in with Apple ID required");
        //   }

        //   return await cloudkitRecover(cloudkit, info.passphraseId);
        // }
        default:
          throw new Error(`Unsupported backup location ${location}`);
      }
    }
  }

  throw new Error(`Not found backup location ${location} passphraseId ${passphraseId}`);
};

export {
  passphrasePersist,
  recoverPassphraseId,
}
