// MODEL
import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnail:{
    type: String,
    default: 'https://tenco.com.ar/img/iso1920x1080-bn.jpg',
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orders',
      default: [],
    },
  ],
  rol: {
    type: String,
    required: true,
    default: 'user',
  },
});

export const UsersModel = mongoose.model('Users', UsersSchema);
