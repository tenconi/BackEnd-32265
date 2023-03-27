import mongoose from 'mongoose';

try {
    mongoose.connect('mongodb+srv://tenco:Bonetaso16@cluster0.5xmnrmy.mongodb.net/ecommerce?retryWrites=true&w=majority');
    console.log('* * * Conectado a Base de Datos');
} catch (error) {
    console.log(error);
}