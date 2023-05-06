import mongoose from 'mongoose';
import config from '../../config.js';

let URI = config._URI_MONGO_;

try {
  mongoose.connect(URI);
  console.log('* * * Conectado a la Base de Datos * * *');
} catch (error) {
  console.log(error);
}
