import express from 'express';
import {__dirname} from './utils.js';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

// import viewsRouter from './routes/views.router.js';
import productsRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Archivos estáticos:
app.use(express.static(__dirname+'/publics'));

// Handlebars:
app.engine('handlebars', handlebars.engine()); // solo para hd o propio
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

// rutas
// app.use("/", viewsRouter);
app.use("/realtimeproducts", productsRouter);
// app.use("/api/cart", cartRouter);

/* app.get('/', (req, res)=>{
    res.render('home')
})
app.get('/realtimeproducts', (req, res)=>{
    res.render('realtimeproducts')
}) */

const httpServer = app.listen(8080,()=>{
    console.log('Listening 8080');
})

//websocket

const socketServer = new Server(httpServer);

socketServer.on('connection',(socket)=>{
    console.log(`Usuario conectado: ${socket.id}`);

    socket.on('disconnect', (mensaje)=>{
        console.log('Usuario desconectado');
    })/* 
    socket.emit('saludo', 'Bienvenido a SOCKET')

    socket.on('respuestaSaludo', (mensaje)=>{
        console.log(mensaje);
    }) */
})