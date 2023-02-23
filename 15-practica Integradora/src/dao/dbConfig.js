import mongoose from "mongoose";
mongoose.set('strictQuery', false)
const URI = 'mongodb+srv://tenco:Bonetaso16@cluster0.5xmnrmy.mongodb.net/ecommerce?retryWrites=true&w=majority';

mongoose.connect( URI , (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Conectado a Base de Datos');
    }
})