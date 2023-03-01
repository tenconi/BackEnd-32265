import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productsSchema = mongoose.Schema({
    name:{
        type: String,
        require : true,
        unique:true,
    }, 
    description: {
        type: String,
        require : true,
    },
    code:{
        type: String,
        require : true,
        unique:true,
    }, 
    price:{
        type: Number,
        require : true,
    }, 
    status:{
        type: Boolean,
        require : true,
    }, 
    category:{
        type: String,
        require : true,
    }, 
    stock:{
        type: Number,
        require : true,
    },
    thumbnail:{
        type: Array,
        require : true,
    }    
})

productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model( 'Products' , productsSchema)