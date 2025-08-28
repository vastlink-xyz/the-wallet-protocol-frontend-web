import { ethers } from "ethers";
import { sha256 } from "ethers/lib/utils";
import ipfsOnlyHash from "typestub-ipfs-only-hash";
import { ipfsHelpers } from "ipfs-helpers";

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

/**
 * Convert a hex format IPFS CID to base58 format
 * @param hexCid - The hex format IPFS CID (with or without 0x prefix)
 * @returns The base58 format IPFS CID
 */
export function hexCidToBase58(hexCid: string): string {
    // Remove 0x prefix if present
    const hexWithoutPrefix = hexCid.startsWith('0x') ? hexCid.slice(2) : hexCid;
    
    // Convert hex string to buffer
    const buffer = Buffer.from(hexWithoutPrefix, 'hex');
    
    // Convert buffer to base58
    const base58Cid = ethers.utils.base58.encode(buffer);
    
    return base58Cid;
}

export async function uploadViaPinata(litActionCode: string) {
    const formData = new FormData();

    const file = new File([litActionCode], "Action.txt", {
        type: "text/plain",
    });
    
    formData.append("file", file);
    formData.append("pinataMetadata", JSON.stringify({ name: "Lit-Action" }));
    formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

    const key = process.env.NEXT_PUBLIC_PINATA_JWT;

    const request = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${key}`,
            },
            body: formData,
        }
    );
    
    const response = await request.json();
    return response.IpfsHash;
}

export async function calculateCIDFromString(litActionCode: string) {
    const ipfsHash = await ipfsHelpers.stringToCidV0(litActionCode);
    return ipfsHash
}
