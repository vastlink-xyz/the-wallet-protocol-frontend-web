(async () => {
    // In Lit Actions, params are available directly as global variables
    // Decrypt data using the provided parameters
    const decryptedData = await Lit.Actions.decryptAndCombine({
      accessControlConditions,
      ciphertext,
      dataToEncryptHash,
      authSig: null, // Use the authSig from the session
      chain: "ethereum",
    });
    
    // Return the decrypted data
    Lit.Actions.setResponse({ response: decryptedData });
  })();