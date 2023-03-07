import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import cartRouter from './routes/cart.router.js';
import chatRouter from './routes/chat.router.js';
import productsRouter from './routes/products.router.js';
import {Server} from 'socket.io';
//data base:
import './persistencia/dbConfig.js'


const app = express();
const PORT = process.env.POST || 3000; //variable de entorno, este es el puerto local.

// setup:
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
// setup handlebars:
app.engine('handlebars', handlebars.engine());
app.set('views' , __dirname + '/views');
app.set('view engine' , 'handlebars');
// set up routes
app.use( '/cart' , cartRouter );
app.use( '/chat' , chatRouter );
app.use( '/products' , productsRouter );



const httpServer = app.listen(PORT, ()=>{
    console.log(`Escuchando puerto : ${PORT}`);
})

// websocket:
export const socketServer = new Server(httpServer);

const infoMessages = []; // vuelco mensajes

socketServer.on( 'connection' , (socket) => {
    console.log( `# Conected User: ${ socket.id }` );

    socket.on( 'disconnected' , ( msg ) => {
        console.log( '# Desconnected User.' );
    })

    socket.on( 'newUser' , (usuario) => {
        socket.broadcast.emit( 'broadcast' , usuario); // emite a todos menos al nuevo
    })

    socket.on( 'mensaje' , ( info ) => {
        infoMessages.push( info );
        socketServer.emit( 'chat' , infoMessages)
    })

})
