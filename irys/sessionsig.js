import { LIT_ABILITY, LIT_NETWORK } from '@lit-protocol/constants';
import {
  LitRelay,
} from '@lit-protocol/lit-auth-client';
import { LitNodeClient } from '@lit-protocol/lit-node-client';
import { LitPKPResource, LitActionResource } from '@lit-protocol/auth-helpers';

const selectedLitNetwork = LIT_NETWORK.DatilDev;

// Initialize Lit Node Client
export const litNodeClient = new LitNodeClient({
  alertWhenUnauthorized: false,
  litNetwork: selectedLitNetwork,
  debug: true,
});

// Initialize LitRelay
export const litRelay = new LitRelay({
  relayUrl: LitRelay.getRelayUrl(selectedLitNetwork),
  relayApiKey: 'test-api-key',
});

const publicPKPForSessionSigs = {
  "ethAddress" : "0x41676dc41ed254951A8Cc4Daa62A4272476F4367",
  "publicKey" : "0x048658952bc813eb3dd938710720a5df69e9e577271d1cd95f13185ae8a8a7702e19e743640f21f29be407bba092e6f99206ddd1ad894fca2106d4e65ad91bf64a",
  "tokenId" : "0xfb613162407b9d6f7ca793f504437313ab8d0fab6e872ac9f2c4a277a5b6fb0c",
}

export const getPublicSessionSigs = async () => {
  if (!litNodeClient.ready) {
    await litNodeClient.connect();
  }

  const sessionSigs = await litNodeClient.getPkpSessionSigs({
    pkpPublicKey: publicPKPForSessionSigs.publicKey,
    litActionIpfsId: 'QmQ5463UkwGAK5sjD4XaHUWMo5JR5CA6kF3vDGYtN2qy6L',
    // 0x122019b883c6875d633b047dbec1efbdbd380e4170cc580ee3e749787710b9360b05
    jsParams: {},
    resourceAbilityRequests: [
      {
        resource: new LitPKPResource('*'),
        ability: LIT_ABILITY.PKPSigning,
      },
      {
        resource: new LitActionResource('*'),
        ability: LIT_ABILITY.LitActionExecution,
      }
    ],
    // Set expiration time (10 minutes like the example)
    expiration: new Date(Date.now() + 1000 * 60 * 10).toISOString(),
  });

  console.log('sessionSigs', sessionSigs)

  return sessionSigs;
}