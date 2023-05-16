import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

// # statics
export const __dirname = dirname(fileURLToPath(import.meta.url));

// # bcrypt
export const hashData = async (data) => {
  return bcrypt.hash(data, 10);
};

export const compareHashedData = async (password, passwordBD) => {
  return bcrypt.compare(password, passwordBD); // compare: metodo de bcrypt - arroja true/false
};
