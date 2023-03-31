import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const hashData = async (password) => {
  return bcrypt.hash(password, 10);
};

//  bcryp
export const compareHashedData = async (password, passwordBD) => {
  return bcrypt.compare(password, passwordBD); // compare: metodo de bcrypt - arroja true/false
};

//  jsonwebtoken
export const generateToken = (user) => {
  return jwt.sign({ user }, 'secretJWT', {expiresIn: '3h'});
};
