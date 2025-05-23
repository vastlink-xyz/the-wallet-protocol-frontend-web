import * as bitcoinjs from "bitcoinjs-lib";

export const getBtcAddressByPublicKey = (publicKey: string) => {
  try {
    const pubkeyBuffer = Buffer.from(publicKey.slice(2), "hex")
    const pkpBTCAddress = bitcoinjs.payments.p2pkh({
      pubkey: pubkeyBuffer,
      network: bitcoinjs.networks.testnet,
    }).address

    if (pkpBTCAddress) {
      return pkpBTCAddress
    }
  } catch (error) {
    console.error("Error getting BTC address:", error)
  }
}

export const fetchBtcBalance = async (btcAddress: string) => {
  try {
    // Using BlockCypher API for testnet
    const response = await fetch(`https://api.blockcypher.com/v1/btc/test3/addrs/${btcAddress}/balance`);
    const data = await response.json();
    
    // BlockCypher returns balance in satoshis, converting to BTC (1 BTC = 100,000,000 satoshis)
    const balanceInBtc = data.final_balance / 100000000;
    return balanceInBtc;
  } catch (error) {
    console.error("Error fetching BTC balance:", error);
  }
};