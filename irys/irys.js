import * as LitJsSdk from "@lit-protocol/lit-node-client";
import fs from "fs";
import { getAuthSig } from "./utils.js";
import { getPublicSessionSigs } from "./sessionsig.js";

// This code will be run on the node - read the bundled Irys code
const getBundledCode = () => {
  try {
    return fs.readFileSync("./bundled.js", "utf8");
  } catch (error) {
    console.error("❌ Error reading bundled.js. Make sure to run the build first!");
    console.error("Run: cd bundleTests/irys && node esbuild.js");
    process.exit(1);
  }
};

const runLitAction = async () => {
  try {
    console.log("🚀 Starting Irys Lit Action test...");
    
    // Get authentication and PKP
    const authSig = await getAuthSig();
    const sessionSigs = await getPublicSessionSigs()
    
    // Initialize Lit Node Client
    const litNodeClient = new LitJsSdk.LitNodeClient({
      alertWhenUnauthorized: false,
      litNetwork: "datil-dev",
      debug: true,
    });

    if (litNodeClient.status !== "ready") {
      await litNodeClient.connect();
    }
    
    // Get the bundled Irys code
    const litActionCode = getBundledCode();
    
    // Execute the Lit Action
    const results = await litNodeClient.executeJs({
      code: litActionCode,
      // authSig,
      sessionSigs,
      jsParams: {
        uploadData: "Hello from Irys + Lit Protocol integration! 🎉"
      },
    });
    
    console.log("📊 Lit Action Results:");
    console.log("Response:", results.response);
    console.log("Signatures:", Object.keys(results.signatures || {}));
    
    // Parse the response
    if (results.response) {
      const responseData = JSON.parse(results.response);
      
      if (responseData.success) {
        console.log("✅ Irys simulation successful!");
        console.log("🔗 Mock Upload URL:", responseData.uploadUrl);
        console.log("📏 Data Size:", responseData.dataSize, "bytes");
        console.log("👤 Signer Address:", responseData.signer);
      } else {
        console.log("❌ Irys simulation failed:", responseData.error);
      }
    }
    
    // Display signature information if available
    if (results.signatures && results.signatures.irysAuth) {
      console.log("🔐 Irys Auth Signature Generated:");
      console.log("Public Key:", results.signatures.irysAuth.publicKey);
      console.log("Signature:", results.signatures.irysAuth.signature.substring(0, 20) + "...");
    }
    
  } catch (error) {
    console.error("❌ Error running Irys Lit Action:", error);
  }
};

runLitAction();
