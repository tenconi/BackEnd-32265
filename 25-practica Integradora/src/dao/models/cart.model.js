import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    productList: [],

})


// populate

/* cartSchema.pre('find', function (next) {
    this.populate('productList.productId')
    next()
})
 */


export const cartModel = mongoose.model('Cart', cartSchema)