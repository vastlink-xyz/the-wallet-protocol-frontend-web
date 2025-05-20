import { BaseOperationContext, Policy, PolicyContextType } from './Policy';
import { personalWalletDailyWithdrawLimitPolicy } from './PersonalWalletDailyWithdrawLimitPolicy';
import { personalWalletMFAUpdatePolicy } from './PersonalWalletMFAUpdatePolicy';
import { personalWalletSettingsUpdatePolicy } from './PersonalWalletSettingsUpdatePolicy';
import { multisigWalletDailyWithdrawLimitPolicy } from './MultisigWalletDailyWithdrawLimitPolicy';

class PolicyEnforcer {
  private policiesMap: Map<string, Policy<any>[]> = new Map();

  constructor() {
    this.policiesMap.set('transaction', [personalWalletDailyWithdrawLimitPolicy]);
    this.policiesMap.set('personalWalletMFAUpdate', [personalWalletMFAUpdatePolicy]);
    this.policiesMap.set('personalWalletSettingsUpdate', [personalWalletSettingsUpdatePolicy]);
    this.policiesMap.set('multisigWalletTransaction', [multisigWalletDailyWithdrawLimitPolicy]);
  }

  /**
   * Check if any policy should trigger MFA
   */
  async checkPolicies<T extends BaseOperationContext>(context: T, contextType: PolicyContextType): Promise<boolean> {
    const policies = this.policiesMap.get(contextType) || [];
    for (const policy of policies) {
      if (await policy.shouldTriggerMFA(context)) {
        return true;
      }
    }
    return false;
  }
}

const policyEnforcer = new PolicyEnforcer();
Object.freeze(policyEnforcer);

export { policyEnforcer };
