import dotenv from 'dotenv';

dotenv.config();

export default {
  Port: process.env.PORT,
  _uri_mongo_: process.env.URLMONGO,
  _Persistencia_: process.env.PERSISTENCIA || 'FILE',
  sessions_key: process.env.SESSIONS_KEY
};
