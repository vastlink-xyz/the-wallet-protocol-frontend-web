import axios from 'axios';
import { KeyManagementServiceType } from '@/types/keymanagement';

export interface KeyManagementServiceConfig {
  serviceType: KeyManagementServiceType;
}
abstract class KeyManagementService {
  config: KeyManagementServiceConfig;

  constructor(config: KeyManagementServiceConfig) {
    if (this.constructor === KeyManagementService) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.config = config
  }

  abstract init(): void;

  abstract test(): void;

  abstract signUp({username, idToken}: {username: string, idToken: string}): any;

  abstract signIn({authUsername, idToken}: {authUsername: string, idToken: string}): any;

  abstract signTransaction(): any;
}

export {
  KeyManagementService,
}
