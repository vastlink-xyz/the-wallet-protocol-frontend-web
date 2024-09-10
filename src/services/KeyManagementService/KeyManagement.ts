import axios from 'axios';
import { KeyManagementServiceType } from '@/types/keymanagement';

export interface KeyManagementServiceConfig {
  serviceType: KeyManagementServiceType;
  dependencies: any;
}

abstract class KeyManagementService {
  config: KeyManagementServiceConfig;

  constructor(config: KeyManagementServiceConfig) {
    if (this.constructor === KeyManagementService) {
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.config = config
  }

  getDependencyInstance() {
    if (this.config.serviceType === KeyManagementServiceType.PASSPORT) {
      return this.config.dependencies.passport;
    }
    throw new Error(`Unsupported service type: ${this.config.serviceType}`);
  }

  bindAddress() {
    throw new Error('bindAddress method not implemented');
  }

  signUp({username}: {username: string}): any {
    throw new Error('signUp method not implemented');
  }

  signUpSuccess(res: any): boolean {
    throw new Error('signUpSuccess method not implemented');
  }

  signIn({authUsername}: {authUsername: string}) {
    throw new Error('signIn method not implemented');
  }

  signTransaction() {
    throw new Error('signTransaction method not implemented');
  }
}

export {
  KeyManagementService,
}
