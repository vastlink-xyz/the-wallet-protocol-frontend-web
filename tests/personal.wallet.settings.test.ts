import { describe, it, expect } from 'vitest';

import { theUser, testConfig } from './fixtures';

import { getPersonalWalletSettings, updatePersonalWalletSettings } from '@/services/personalWalletSettingService';

describe('personal wallet settings tests', async () => {
    it('the user gets his personal wallet settings', async () => {
      const settings = await getPersonalWalletSettings(theUser);
      
      expect(settings!.dailyWithdrawLimits).toBeDefined();
      expect(settings!.securityLayers).toBeDefined();
    });

    it('the user updates daily withdrawal limits', async () => {
        const settings = await getPersonalWalletSettings(theUser);

        settings!.dailyWithdrawLimits.BTC = '0.1';

        const res = await updatePersonalWalletSettings(settings!, theUser);
        
        expect(res!.dailyWithdrawLimits.BTC).toBe('0.1');
    });

    it('the user adds PIN', async () => {
    });

    it('the user updates PIN', async () => {
    });

    it('the user removes PIN', async () => {
    });
});