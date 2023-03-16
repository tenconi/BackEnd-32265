import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';  // guardo la sesion de session por cookie .
import FileStore from 'session-file-store'; // para guardar la info de sesion en archivo/bbdd.
// views
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import usersRouter from './routes/users.router.js';
import chatRouter from './routes/chat.router.js';
import viewsRouter from './routes/views.router.js';
// conecto a BBDD
import './persistencia/dbConfig.js'
// chat
import {Server} from 'socket.io';


const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser())

// handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// routes
app.use('/', viewsRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter);
// app.use('/views' , viewsRouter);


const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando puerto: ${PORT}`);
})

// websocket:
export const socketServer = new Server(httpServer);

const infoMessages = []; // vuelco mensajes

socketServer.on('connection', (socket) => {
    console.log(`# Conected User: ${socket.id}`);

    socket.on('disconnected', (msg) => {
        console.log('# Desconnected User.');
    })

    socket.on('newUser', (usuario) => {
        socket.broadcast.emit('broadcast', usuario); // emite a todos menos al nuevo
    })

    socket.on('mensaje', (info) => {
        infoMessages.push(info);
        socketServer.emit('chat', infoMessages)
    })

})
