import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import cartRouter from './routes/cart.router.js';
import chatRouter from './routes/chat.router.js';
import productsRouter from './routes/products.router.js';
import {Server} from 'socket.io';
//data base:
import './dao/dbConfig.js'

const app = express();
const PORT = process.env.POST || 3000; //variable de entorno, este es el puerto local.

// setup:
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
// setup handlebars:
app.engine('handlebars', handlebars.engine());
app.set('views' , __dirname + 'views');
app.set('view engine' , 'handlebars');
// set up routes
app.use( '/cart' , cartRouter );
app.use( '/chat' , chatRouter );
app.use( '/products' , productsRouter );




app.listen(PORT, ()=>{
    console.log(`Escuchando puerto : ${PORT}`);
})