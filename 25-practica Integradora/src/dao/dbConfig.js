import mongoose from "mongoose";

const URI = 'mongodb+srv://tenco:Bonetaso16@cluster0.5xmnrmy.mongodb.net/ecommerce?retryWrites=true&w=majority'

try {
    mongoose.connect(URI);
    console.log('* * * Conectado a la Base de Datos * * *');

} catch (error) {
    console.log(error);
}