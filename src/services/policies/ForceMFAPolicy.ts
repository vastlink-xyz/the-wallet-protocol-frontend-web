import { BaseOperationContext, Policy } from './Policy';

// A policy that always forces MFA for any operation
class ForceMFAPolicy extends Policy<BaseOperationContext> {
  constructor() {
    super();
  }

  async shouldTriggerMFA(context: BaseOperationContext): Promise<boolean> {
    // Always return true to force MFA for all operations
    return true;
  }

  getDescription(): string {
    return 'Policy that always forces MFA for any operation.';
  }
}

const forceMFAPolicy = new ForceMFAPolicy();
Object.freeze(forceMFAPolicy);
export { forceMFAPolicy };