import express from 'express';
import config from './config.js';
import { __dirname } from './utils.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import mongoStore from 'connect-mongo'; // could be FfleStore
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
import  './persistences/mongo/mongoConfig.js'

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config._COOKIE_KEY_)); // * passKey
app.use(express.static(__dirname + '/public'));

// HANDLEBARS
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// SESSION  ~ CONNECT-MONGO
app.use(
  session({
    secret: config._SESSION_KEY_, // * passKey
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: { maxAge: 3600000 }, // 1hs
    store: new mongoStore({
      mongoUrl: config._URI_MONGO_, // save session in BBDD
    }),
  })
);

// ROUTES
app.use('/', viewsRouter);
// app.use('/user', usersRouter);
app.use('/user', usersRouter.getRouter()); // con Clase
// app.use('/cart', cartRouter);
// app.use('/products', productsRouter);

// SERVER
const PORT = config._PORT_;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
