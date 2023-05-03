import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    requiredd: true,
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
      type: mongoose.SchemaType.ObjectID,
      ref: 'Orders',
    },
  ],
});

export const usersModel = mongoose.model('Users', usersSchema);
