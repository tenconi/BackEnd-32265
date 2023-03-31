import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { userModel } from '../dao/models/user.model.js';
import { hashData, compareHashedData } from '../utils.js';
import { generateToken } from '../utils.js';
import { jwtValidation } from '../middlewares/jwt.middleware.js';

passport.use(
  'registro',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { first_name, last_name, rol } = req.body;
        if (!first_name || !last_name || !email || !password || !rol) {
          return done(null, false);
        }
        const userDB = await userModel.findOne({ email });
        if (userDB) {
          return done(null, false);
        } else {
          const hashPassword = await hashData(password);
          const newUser = {
            ...req.body,
            password: hashPassword,
            cart: [],
          };
          const newUserDB = await userModel.create(newUser); // creo usuario
          const token = generateToken(newUserDB); //genero el token del obj que le paso
          // console.log('token', req);
          done(null, newUserDB);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'login',
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      try {
        const userDB = await userModel.findOne({ email });
        if (!userDB) {
          return done(null, false);
        }
        const comparePassword = await compareHashedData(
          password,
          userDB.password
        );
        if (!comparePassword) {
          return done(null, false);
        }
        const token = generateToken(userDB); //genero el token del obj que le paso
        console.log(token);
        done(null, userDB);
      } catch (error) {
        done(error);
      }
    }
  )
);

// funciones demandadas
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id); //personalizo
  done(null, user);
});
