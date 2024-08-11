import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const ivLength = 16; // 16 bytes for AES

export function decryptData(encryptedData: string, secret: string): string {
  console.log('Attempting to decrypt:', encryptedData);

  if (!encryptedData.includes(':')) {
    throw new Error('Invalid encrypted email format');
  }

  const [ivHex, encrypted] = encryptedData.split(':');
  console.log('IV (hex):', ivHex);
  console.log('Encrypted part:', encrypted);

  if (ivHex.length !== ivLength * 2) {
    throw new Error(`Invalid IV length in hex: ${ivHex.length} characters (expected ${ivLength * 2})`);
  }

  const iv = Buffer.from(ivHex, 'hex');
  console.log('IV (buffer):', iv);

  if (iv.length !== ivLength) {
    throw new Error(`Invalid initialization vector length: ${iv.length} bytes (expected ${ivLength})`);
  }

  const key = crypto.scryptSync(secret, 'salt', 32);
  console.log('Key (first 5 bytes):', key.slice(0, 5));

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}