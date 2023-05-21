import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { UsersModel } from './../persistences/mongo/models/users.model.js';
import { hashData, compareHashedData } from '../utils.js';

passport.use(
  'localReg',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const { name, surname, thumbnail } = req.body;
        if (!name || !surname || !email) {
          return done(null, false);
        }
        const userDB = await UsersModel.findOne({ email });

        if (userDB) {
          return done(null, false);
        } else {
          const hashPass = await hashData(password);
          const newUser = {
            ...req.body,
            password: hashPass,
            thumbnail: 'https://tenco.com.ar/img/iso1920x1080-bn.jpg',
            rol: 'user',
          };
          const newUserDB = await UsersModel.create(newUser);
          done(null, newUserDB);
        }
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
  const user = await UsersModel.findById(id); //personalizo
  done(null, user);
});
