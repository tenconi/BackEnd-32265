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
app.use(cookieParser(config.COOKIE_KEY)); // * passKey
app.use(express.static(__dirname + '/public'));

// HANDLEBARS
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// SESSION  ~ CONNECT-MONGO
app.use(
  session({
    secret: config.SESSION_KEY, // * passKey
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: { maxAge: 3600000 }, // 1hs
    store: new mongoStore({
      mongoUrl: config.URI_MONGO, // save session in BBDD
    }),
  })
);

// ROUTES
app.use('/', viewsRouter);
app.use('/users', usersRouter);

// SERVER
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
