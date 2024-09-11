
import { KeyManagementServiceType } from '@/types/keymanagement';
import { Web3authWithMPCKeyManagement } from './Web3authWithMPCKeyManagementService';
import { PassportKeyManagement } from './PassportKeyManagement';

class KeyManagementServiceFactory {
  static getService(serviceType: KeyManagementServiceType) {
    switch (serviceType) {
      case KeyManagementServiceType.PASSPORT:
        return new PassportKeyManagement();
      case KeyManagementServiceType.WEB3AUTH_WITH_MPC:
        return new Web3authWithMPCKeyManagement();
      default:
        throw new Error(`Unsupported service type: ${serviceType}`);
    }
  }
}

const keyManagementServiceType = KeyManagementServiceType.WEB3AUTH_WITH_MPC;

const keyManagementService = KeyManagementServiceFactory.getService(keyManagementServiceType);

export default keyManagementService;
