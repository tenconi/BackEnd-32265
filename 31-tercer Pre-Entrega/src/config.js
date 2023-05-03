import dotenv from 'dotenv';

dotenv.config();

export default {
  Port: process.env.PORT,
  uri_mongo: process.env.URLMONGO,
  Persistencia: process.env.PERSISTENCIA || 'FILE',
  sessions_key: process.env.SESSIONS_KEY
};
