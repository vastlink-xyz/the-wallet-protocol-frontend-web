// This code will be bundled and run inside a Lit Action
// Note: ethers is automatically injected by Lit nodes

// Import Irys SDK (this will be bundled)
import { Uploader } from "@irys/upload";
import { Ethereum } from "@irys/upload-ethereum";

const go = async () => {
  try {
    console.log("🚀 Starting Irys integration in Lit Action");

    // Data to upload (can be passed as jsParam or defined here)
    const dataToUpload = uploadData || `Hello from Lit Action + Irys! at ${new Date().toISOString()}`;
    console.log("Data to upload:", dataToUpload);
    
    console.log("📤 Initializing Irys uploader...");
    
    // Initialize Irys uploader
    const irysPrivateKey = '56501dc23c10184bcdc04ede1f86402296c629bfdb3bbc5f4cb634bc022d0300';
    const irysUploader = await Uploader(Ethereum).withWallet(irysPrivateKey);
    
    console.log("✅ Irys uploader initialized");
    console.log("📊 Irys uploader address:", irysUploader.address);
    
    // Upload data to Irys
    console.log("📤 Uploading to Irys...");
    const receipt = await irysUploader.upload(dataToUpload, {
      tags: [
        { name: "Content-Type", value: "text/plain" },
        { name: "Application", value: "Lit-Action-Irys-Integration" },
        { name: "PKP-Address", value: ethAddress },
        { name: "Upload-Time", value: new Date().toISOString() },
        { name: "Source", value: "Lit-Protocol" }
      ]
    });

    console.log(`✅ Upload successful! Irys ID: ${receipt.id}`);

    // Set the response with upload information
    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: true,
        message: "Data successfully uploaded to Irys permanent storage",
        irysId: receipt.id,
        uploadUrl: `https://gateway.irys.xyz/${receipt.id}`,
        viewUrl: `https://gateway.irys.xyz/${receipt.id}`,
        irysAddress: irysUploader.address,
        pkpAddress: ethAddress,
        dataSize: dataToUpload.length,
        token: irysUploader.token,
        timestamp: new Date().toISOString(),
      })
    });

    console.log("✅ Irys upload completed successfully");
    console.log("🔗 View at:", `https://gateway.irys.xyz/${receipt.id}`);
    
  } catch (error) {
    console.error("❌ Error in Irys Lit Action:", error);
    
    Lit.Actions.setResponse({
      response: JSON.stringify({
        success: false,
        error: error.message,
        errorStack: error.stack,
        timestamp: new Date().toISOString()
      })
    });
  }
};

go();