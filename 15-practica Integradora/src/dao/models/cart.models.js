import mongoose from "mongoose";

/* const cartSchema = mongoose.Schema ({
    purchase : {
        type: Array,
        name:{
            type: String,
        },
        id:{
            type: String,
            require : true,
        },
        name:{
            type: String,
            require : true,
        },
        quantity :{
            type: Number,
            require : true,
        }
    }
}) 
 */
const cartSchema = mongoose.Schema ({
        name:{
            type: String,
        },
        id:{
            type: String,
            require : true,
        },
        name:{
            type: String,
            require : true,
        },
        quantity :{
            type: Number,
            require : true,
        }
}) 


export const cartModel = mongoose.model( 'Cart' , cartSchema)