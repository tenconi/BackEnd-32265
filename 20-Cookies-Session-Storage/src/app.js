import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';  // guardo la sesion de session por cookie 
import { __dirname } from './utils.js';
// views
import productsRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';
import usersRouter from './routes/users.router.js';
import chatRouter from './routes/chat.router.js';
import viewsRouter from './routes/views.router.js';


const app = express();
const PORT = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use( cookieParser())

// handlebars
app.engine( 'handlebars' , handlebars.engine());
app.set( 'views' , __dirname + '/views');
app.set( 'view engine' , 'handlebars');

// routes
app.use('/' , viewsRouter);
app.use('/products' , productsRouter);
app.use('/cart' , cartRouter);
app.use('/users' , usersRouter);
app.use('/chat' , chatRouter);
// app.use('/views' , viewsRouter);


app.listen(PORT, () => {
    console.log(`Escuchando puerto: ${PORT}`);
})