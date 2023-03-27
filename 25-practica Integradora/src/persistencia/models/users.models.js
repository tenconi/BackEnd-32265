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
  age: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    require: true,
  },
  cart: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'carts' }],
  },
});

export const usersModel = mongoose.model('Users', userSchema);
