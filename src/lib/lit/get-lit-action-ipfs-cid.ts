import { ethers } from "ethers";
import ipfsOnlyHash from "typestub-ipfs-only-hash";

/**
 * Get the IPFS CID of a litActionCode
 * @param input - The litActionCode to get the CID of
 * @param output - The output format of the CID (base58 or hex)
 * @returns The IPFS CID of the litActionCode
 */
export async function getLitActionIpfsCid({
    input,
    outputFormat
}: {
    input: string,
    outputFormat: "base58" | "hex"
}): Promise<string> {
    const base58Cid = await ipfsOnlyHash.of(input);
    if (outputFormat === "base58") {
        return base58Cid;
    } else {
        return `0x${Buffer.from(
            ethers.utils.base58.decode(
                base58Cid
            )
        ).toString("hex")}`
    }
}