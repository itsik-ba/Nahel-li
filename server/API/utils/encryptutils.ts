import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const ivLength = 16; // 16 bytes for AES

export function encryptData(data: string, secret: string): string {
  const iv = crypto.randomBytes(ivLength);
  const key = crypto.scryptSync(secret, 'salt', 32);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const encryptedString = iv.toString('hex') + ':' + encrypted;
  console.log('Encrypt - IV Length:', iv.length);
  console.log('Encrypted Email:', encryptedString);

  return encryptedString;
}
