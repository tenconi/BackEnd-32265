import express from 'express';
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import cartRouter from './routes/cart.router.js';
import viewsRouter from './routes/views.router.js';
import userRouter from './routes/user.router.js';
import productsRouter from './routes/products.router.js';

const app = express();
const PORT = 8080;

// middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// routes
app.use('/', viewsRouter);
app.use('/cart', cartRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);

// server
app.listen(PORT, () => {
  console.log(`Escuchando puerto ${PORT}`);
});
