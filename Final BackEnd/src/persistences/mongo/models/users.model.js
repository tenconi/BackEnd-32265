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
  // cart: [
  //   {
  //     type: mongoose.SchemaType.ObjectID,
  //     ref: 'Orders',
  //   }
  // ],
});

export const UsersModel = mongoose.model('Users', UsersSchema);
