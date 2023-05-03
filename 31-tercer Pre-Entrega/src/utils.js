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
  const token = jwt.sign({ user }, 'secretJWT', { expiresIn: '1h' });
  return token;
};

//  jsonwebtoken: authentication middleware 
export const authToken = (req, res, next) => {
  const autHeader = req.headers.authorization;
  if (!autHeader) return res.status(401).redirect('/errorAuthorization');

  const token = autHeader.split(' ')[1];

  jwt.verify(token, 'secretJWT', (error, credentials) => {
    if (error) return res.status(403).redirect('/errorAuthorization');
    req.user = credentials.user;
    next();
  });
};
