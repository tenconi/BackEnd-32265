import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  URI_MONGO: process.env.URI_MONGO,
  COOKIE_KEY: process.env.COOKIE_KEY,
  SESSION_KEY: process.env.SESSION_KEY,
  JWT_KEY: process.env.JWT_KEY,
};
