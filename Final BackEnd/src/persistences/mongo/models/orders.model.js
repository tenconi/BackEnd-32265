import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
  user: {
    type: mongoose.SchemaType.ObjectId,
    ref: 'Users',
  },
  products: [
    {
      type: mongoose.SchemaType.ObjectId,
      ref: 'Products',
    },
  ],
  total: {
    type: Number,
  },
});

export const ordersModel = mongoose.model('Orders', ordersSchema);
