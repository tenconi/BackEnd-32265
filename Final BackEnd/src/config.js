import dotenv from 'dotenv';

dotenv.config();

export default {
  _PORT_: process.env.PORT,
  _URI_MONGO_: process.env.URI_MONGO,
  _COOKIE_KEY_: process.env.COOKIE_KEY,
  _SESSION_KEY_: process.env.SESSION_KEY,
  _JWT_KEY_: process.env.JWT_KEY,
};
