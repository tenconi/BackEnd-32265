import express from 'express';
import config from './config.js';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import cartRouter from './routes/cart.router.js';
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';
import productsRouter from './routes/products.router.js';
// import './dao/dbConfig.js'; // Data Base XXX inicializo de persistencia
import cookieParser from 'cookie-parser';
import passport from 'passport';
import './passport/passportStrategies.js';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import { Server } from 'socket.io'; // chat

const app = express();
const PORT = config.Port;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// const cookieKey = 'cookiePASS';
app.use(cookieParser(/* cookieKey */));

// handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// session / connect-mongo
app.use(
  session({
    secret: 'seccionKey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 }, //seteo las cookies para guardar el sessionId en cookies x ej
    store: new mongoStore({
      // store: para guardar en BBDD
      mongoUrl:
        'mongodb+srv://tenco:Bonetaso16@cluster0.5xmnrmy.mongodb.net/ecommerce?retryWrites=true&w=majority', // dnd se van a guardar las sesiones de los usuarios === configConect
    }),
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', viewsRouter);
app.use('/cart', cartRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

// websockets
export const socketServer = new Server(httpServer);

const infoMessages = []; // vuelco mensajes

socketServer.on('connection', (socket) => {
  console.log(`# Conected User: ${socket.id}`);

  socket.on('disconnected', (msg) => {
    console.log('# Desconnected User.');
  });

  socket.on('newUser', (usuario) => {
    socket.broadcast.emit('broadcast', usuario); // emite a todos menos al nuevo
  });

  socket.on('mensaje', (info) => {
    infoMessages.push(info);
    socketServer.emit('chat', infoMessages);
  });

  socket.on('userFile', (esto) => {
    console.log(esto);
  });
});
