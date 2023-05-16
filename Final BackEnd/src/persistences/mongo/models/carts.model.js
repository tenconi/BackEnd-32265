import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  productsList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
  ],
  total: {
    type: Number,
  },
});

export const ordersModel = mongoose.model('Carts', cartsSchema);
