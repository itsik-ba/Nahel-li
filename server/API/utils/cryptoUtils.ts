import crypto from 'crypto';

// Function to hash the secret to a 32-byte (256-bit) key
function getKey(secret: string): Buffer {
  return crypto.createHash('sha256').update(secret).digest();
}

// Encrypt function
export function encryptEmail(email: string, secret: string): string {
  const key = getKey(secret); // Get the 32-byte key
  const iv = crypto.randomBytes(16); // Generate a random Initialization Vector (IV)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(email, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted; // Include IV with the encrypted data
}

// Decrypt function
export function decryptEmail(encryptedEmail: string, secret: string): string {
  const key = getKey(secret); // Get the 32-byte key
  const parts = encryptedEmail.split(':');
  if (parts.length !== 2) {
    throw new Error('Invalid encrypted email format');
  }
  const iv = Buffer.from(parts[0], 'hex'); // Extract IV from the encrypted data
  const encryptedText = parts[1];
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
