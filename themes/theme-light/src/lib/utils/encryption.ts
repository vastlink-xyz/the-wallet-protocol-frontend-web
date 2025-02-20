export async function encryptWithPublicKey(publicKeyPem: string, data: string) {
  // remove pem header and footer and escape newlines
  const pemHeader = '-----BEGIN PUBLIC KEY-----';
  const pemFooter = '-----END PUBLIC KEY-----';
  const pemContents = publicKeyPem
    .replace(pemHeader, '')
    .replace(pemFooter, '')
    .replace(/\\n/g, '') // handle escaped newlines
    .replace(/\s/g, '');

  // convert base64 encoded public key to binary
  const binaryKey = Uint8Array.from(atob(pemContents), c => c.charCodeAt(0));

  // import public key
  const cryptoKey = await window.crypto.subtle.importKey(
    'spki',
    binaryKey,
    {
      name: 'RSA-OAEP',
      hash: 'SHA-256'
    },
    false,
    ['encrypt']
  );

  // encrypt data
  const encodedData = new TextEncoder().encode(data);
  const encryptedData = await window.crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP'
    },
    cryptoKey,
    encodedData
  );

  // return base64 encoded encrypted data
  return btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
}

/**
 * hash encrypted data
 * @param encryptedBase64 encrypted data in base64
 * @returns hash result (64-bit hexadecimal string)
 */
export async function hashEncryptedData(encryptedBase64: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(encryptedBase64);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
