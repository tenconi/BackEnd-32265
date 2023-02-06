import express from 'express';
import {__dirname} from './utils.js';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import viewsRouter from './routes/views.router.js';
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Archivos estáticos:
app.use(express.static(__dirname+'/publics'));

// Handlebars:
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname+'/views');

// rutas
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/cart", cartRouter);




const httpServer = app.listen(8080,()=>{
    console.log('Listening 8080');
})

//websocket

export const socketServer = new Server(httpServer);