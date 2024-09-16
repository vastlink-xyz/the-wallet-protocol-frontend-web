const { Web3 } = require("web3");
const { LegacyTransaction } = require('@ethereumjs/tx');
const { Common } = require('@ethereumjs/common');

const { http } = require("viem");
const { mainnet, hardhat, localhost, kavaTestnet } = require("viem/chains");

const forge = require("node-forge");

class PassportService {
  constructor() {
    
  }

  getAuthenticatedHeaderFromRequest(req) {
    return {
      "X-Encrypted-Key": `${req.headers["x-encrypted-key"]}`,
      "X-Scope-Id": `${req.headers["x-scope-id"]}`,
      "X-Encrypted-User": `${req.headers["x-encrypted-user"]}`,
      "X-Encrypted-Session": `${req.headers["x-encrypted-session"]}`,
    }
  } 

  async aesDecrypt(encryptedText, encryptionKey) {
    const input = forge.util.decode64(encryptedText);
  
    const iv = input.slice(0, 12);
    const tag = input.slice(-16);
    const encrypted = input.slice(12, -16);
  
    const key = forge.util.binary.raw.encode(new Uint8Array(encryptionKey));
    const decipher = forge.cipher.createDecipher("AES-GCM", key);
  
    const ivBuffer = forge.util.createBuffer(iv, "raw");
    const tagBuffer = forge.util.createBuffer(tag, "raw");
  
    decipher.start({ iv: ivBuffer, tag: tagBuffer });
    decipher.update(forge.util.createBuffer(encrypted, "raw"));
    const pass = decipher.finish();
  
    if (pass) {
      return decipher.output.toString();
    } else {
      throw new Error("Decryption failed");
    }
  }
}

const theWalletPassportService = new PassportService();
Object.freeze(theWalletPassportService);

module.exports = theWalletPassportService;