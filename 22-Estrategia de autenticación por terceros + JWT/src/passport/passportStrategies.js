// Cualquiera sea la ESTRATEGIA     pASSPORT NOS EXIGE ESTAS 2 FUNCIONES: ES PARA SERIALIZAR EL USER Y PODER TRABAJAR CON EL id
import passport from 'passport';
import { usersModel } from '../persistencia/models/users.models.js';
import { Strategy as LocalStrategy } from 'passport-local';
import { hashPassword } from '../utils.js';


/* estrategias */
passport.use('registro', new LocalStrategy({
    usernameField: 'email', //le indico que suplanta el nombre ususario
    passwordField: 'password', // si este campom se llama contraseña, le indico contraseña
    passReqToCallback: true, // middleware - que nos pase todo lo que venga en reques al cb  le digo true
}, async (req, email, password, done) => {
    //fx de lo que se va a ejecutar cuando se llame esta estrategia
    const user = await usersModel.findOne({ email });
    if (user) {
        return done(null, false);
    } else {
        const hashNewPassword = await hashPassword(password);
        const newUser = { ...req.body, password: hashNewPassword }
        const newUserBD = await usersModel.create(newUser);
        done(null, newUserBD)
    }
}
))




/* funciones para serializar / deserializar */
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usersModel.findById(id); //personalizo
    done(null, user);
    /* User.findById(id, function (err, user) {
      done(err, user);
    }); */
});