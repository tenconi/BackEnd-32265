import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

export const __dirname = dirname(fileURLToPath(import.meta.url));

// hash password

export const hashPassword = async (password) => {
    return bcrypt.hash(password, 10)
}

export const comparePassword = async (password, passwordBD) => {
    return bcrypt.compare(password, passwordBD); // compare: metodo de bcrypt - arroja true/false
}