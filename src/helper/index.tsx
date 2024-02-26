import Cookies from 'js-cookie';
import { IToken } from '../model/Token.model';
import { AES, enc } from 'crypto-js';

class Helper {
    keyTk = 'tk';
    key = 'your-secret-key';

    isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    saveToken(token: IToken) {
        const stringEnToken = this.encrypt(token);
        Cookies.set(this.keyTk, stringEnToken);
    }

    getRefreshToken(): string | null {
        const myCookieValue = Cookies.get(this.keyTk);
        if (!myCookieValue) return null;
        const data: IToken = JSON.parse(myCookieValue);
        return data.refreshToken || null;
    }

    getToken(): string | null {
        const myCookieValue = Cookies.get(this.keyTk);
        if (!myCookieValue) return null;
        const strToken = this.decrypt(myCookieValue);
        if (!strToken) return null;
        const data: IToken = JSON.parse(strToken);
        return data.accessToken || null;
    }

    login(token: IToken) {
        this.saveToken(token);
    }

    logout() {
        Cookies.remove(this.keyTk);
    }

    encrypt(data: object): string {
        const stringData = JSON.stringify(data);
        return AES.encrypt(stringData, this.key).toString();
    }

    decrypt(encryptedData: string): string | null {
        try {
            const decrypted = AES.decrypt(encryptedData, this.key).toString(enc.Utf8);
            return decrypted || null;
        } catch (error) {
            console.error('Error during decryption:', error);
            return null;
        }
    }
}

export default new Helper();
