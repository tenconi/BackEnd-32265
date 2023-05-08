import mongoose from 'mongoose';
import config from '../../config.js';

const URI = config._uri_mongo_;

try {
  mongoose.connect(URI);
  console.log('♠ Conectado a la Base de Datos ♠');
} catch (error) {
  console.log(error);
}
