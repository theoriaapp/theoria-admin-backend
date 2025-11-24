import { Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv } from 'crypto';
import { CONSTANTS } from 'src/config/constants';

@Injectable()
export class CryptoService {

  /**
   * Encrypt the text
   * @param text 
   * @returns 
   */
  async encrypt(text: any) {
    const cipher = createCipheriv(CONSTANTS.CRYPTO_ALGO, CONSTANTS.CRYPTO_SECURE_KEY, CONSTANTS.CRYPTO_INIT_VECTOR);
    let encryptedData = cipher.update(text.toString(), "utf-8", "hex");
    return encryptedData += cipher.final("hex");
  }

  /**
   * Decrypt the text
   * @param text 
   * @returns 
   */
  async decrypt(text: any) {
    const decipher = createDecipheriv(CONSTANTS.CRYPTO_ALGO, CONSTANTS.CRYPTO_SECURE_KEY, CONSTANTS.CRYPTO_INIT_VECTOR);
    let decryptedData = decipher.update(text, "hex", "utf-8");
    return decryptedData += decipher.final("utf8");
  }
}
