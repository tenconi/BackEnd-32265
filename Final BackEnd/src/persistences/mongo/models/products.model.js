import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  thumbnail: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export const productsModel = mongoose.model('Products', productsSchema);
