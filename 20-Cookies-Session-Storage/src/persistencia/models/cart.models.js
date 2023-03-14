import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    productList: [],
})

export const cartModel = mongoose.model('Cart', cartSchema)