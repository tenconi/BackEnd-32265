// MODEL
import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
});

export const UsersModel = mongoose.model('Users', UsersSchema);
