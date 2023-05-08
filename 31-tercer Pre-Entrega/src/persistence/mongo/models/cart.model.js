import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    productList: [
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Products"
            },
            quantity: {
                Type: Number,
            }
        }
    ],

})


// populate

cartSchema.pre('find', function (next) {
    this.populate('productList.productId')
    next()
})



export const cartModel = mongoose.model('Cart', cartSchema)