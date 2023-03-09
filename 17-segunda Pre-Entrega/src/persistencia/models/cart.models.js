import mongoose from "mongoose";

const cartSchema = mongoose.Schema ({
        /* idProd:{
            type: String,
            require : true,
        }, */
        products:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products', 
            default: []
        }],
        name:{
            type: String,
            require : true,
        },
        quantity :{
            type: Number,
            require : true,
        }
    }
) 


export const cartModel = mongoose.model( 'Cart' , cartSchema)