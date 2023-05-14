import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  productList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
      },
      quantity: {
        Type: Number,
      },
    },
  ],
});

// populate

// cartSchema.pre("find",function(next){
//     this.populate("products.productId");
//     next()
// })

export const cartModel = mongoose.model('Cart', cartSchema);
