import { BaseOperationContext, Policy, PolicyContextType } from './Policy';
import { dailyWithdrawLimitPolicy } from './DailyWithdrawLimitPolicy';
import { personalWalletMFAUpdatePolicy } from './PersonalWalletMFAUpdatePolicy';
class PolicyEnforcer {
  private policiesMap: Map<string, Policy<any>[]> = new Map();

  constructor() {
    this.policiesMap.set('transaction', [dailyWithdrawLimitPolicy]);
    this.policiesMap.set('personalWalletMFAUpdate', [personalWalletMFAUpdatePolicy]);
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
