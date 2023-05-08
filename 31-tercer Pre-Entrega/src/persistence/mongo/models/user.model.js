import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    require: true,
    default: 'user',
  },
  cart: {
    type: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'carts' 
    }],
  },
});

export const usersModel = mongoose.model('Users', userSchema);
