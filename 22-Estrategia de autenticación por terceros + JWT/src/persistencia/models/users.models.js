import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    age: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rol:{
        type: String,
        require: true,
    },
    isGithub: {
        type: Boolean,
        require: true,
        default:false
    }
})

export const usersModel = mongoose.model('Users', userSchema)