import mongoose from 'mongoose';
// import mongoosePaginate from 'mongoose-paginate-v2';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';


const productsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        require: true,
    },
    code: {
        type: String,
        require: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
    },
    category: {
        type: String,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    },
    thumbnail: {
        type: Array,
        require: true,
    }
})

// productsSchema.plugin(mongoosePaginate); // mongoose-paginate-v2
productsSchema.plugin(aggregatePaginate); // mongoose-aggregate-paginate-v2

export const productsModel = mongoose.model('Products', productsSchema)