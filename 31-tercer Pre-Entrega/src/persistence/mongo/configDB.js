import mongoose from 'mongoose';
import config from '../../config.js';

const URI = config.uri_mongo;

try {
  mongoose.connect(URI);
  console.log('* * * Conectado a la Base de Datos * * *');
} catch (error) {
  console.log(error);
}
