import dotenv from 'dotenv';

dotenv.config();

export default {
  Port: process.env.PORT,
  uri_mongo: process.env.MONGO,
};
