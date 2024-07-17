import { Web3 } from "web3";
import { LegacyTransaction } from '@ethereumjs/tx';

import { http } from "viem";
import { mainnet, hardhat, localhost, kavaTestnet } from "viem/chains";
import { createPassportClient } from "@0xpass/passport-viem";
import { Passport } from "@0xpass/passport";

class TransactionService {
  constructor() {
    this.web3 = new Web3("http://127.0.0.1:8545/");

    this.privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    // import the Hardhat test account without the use of a wallet
    this.sender = this.web3.eth.accounts.privateKeyToAccount(this.privateKey);

    this.receiver = this.web3.eth.accounts.create();
  }

  async constructTransaction() {
    // used to calculate the transaction's maxFeePerGas
    const block = await this.web3.eth.getBlock();
    const txCount = await this.web3.eth.getTransactionCount(this.sender.address);
    const nonce = txCount;

    const txAsJson = {
      from: this.sender.address,
      to: this.receiver.address,
      value: 10,
      // the following two properties must be included in raw transactions
      maxFeePerGas: block.baseFeePerGas * 2n,
      maxPriorityFeePerGas: 100000,
      gasLimit: 21000,
      nonce: nonce,
      gasPrice: 449244295n, // TODO by JJ: shouldn't be hardcoded
    };
    console.log("tx as JSON", txAsJson);

    const tx = new LegacyTransaction(txAsJson);
    console.log("tx as LegacyTransaction", tx);
    
    return tx;
  }

  async constructTransactionSerialized() {
    const tx = await this.constructTransaction();

    const txSerialized = tx.serialize();
    console.log("txSerialized", txSerialized);

    const txSerializedAsHexString = '0x' + Buffer.from(txSerialized).toString('hex');
    console.log("txSerialized as Hex String", txSerializedAsHexString);
   
    return txSerializedAsHexString;
  }

  async signTransactionSerialized(txSerialized) {
    const tx = LegacyTransaction.fromSerializedTx(txSerialized);
    console.log("tx as LegacyTransaction", tx);

    const txAsJson = tx.toJSON()
    console.log("tx as JSON", txAsJson);

    return await this.signTransaction(txAsJson);
  }

  async signTransaction(transaction) {
    const signedTransaction = await this.web3.eth.accounts.signTransaction(
      transaction,
      this.privateKey
    );
    console.log("signedTransaction", signedTransaction);
    
    return signedTransaction;
  }

  async broadcastTransaction(signedTransaction) {
    const receipt = await this.web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction // the rawTransaction has the signatures already
    );
    console.log("receipt", receipt);

    return receipt;
  }

  async passportSignTransaction(authenticatedHeader) {
    const chain = hardhat; // TODO by JJ: mainnet, localhost and kavaTestnet didn't work, got mismatch error
    const transport = http("http://127.0.0.1:8545/");

    const client = await createPassportClient(
      authenticatedHeader,
      transport,
      chain
    );

    const [account] = await client.getAddresses();
    const transaction = await client.prepareTransactionRequest({
      account: account,
      to: "0x012d55941bb13934207dc6c02183fa72a10ef9c0",
      value: BigInt(10),
      chain: chain,
    });

    client
      .signTransaction(transaction)
      .then((res) => {
        console.log("res", res)
      })
      .catch((err) => {
        console.error("err", err)
      });
  }
}

const theWalletTransactionService = new TransactionService();
Object.freeze(theWalletTransactionService);

export default theWalletTransactionService;