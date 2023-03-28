import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'carts' }],
  },
});

export const userModel = mongoose.model('Users', userSchema);
