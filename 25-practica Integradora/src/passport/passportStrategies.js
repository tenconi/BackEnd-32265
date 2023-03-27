import passport from 'passport'; // passport MAIN
import { usersModel } from '../persistencia/models/users.models.js';
import { Strategy as LocalStrategy } from 'passport-local'; // passport Local
import { hashPassword } from '../utils.js';
import { Strategy as GitHubStrategy } from 'passport-github2'; // passport GitHub


/* estrategia Local*/
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


// GitHub Strategy
passport.use('github', new GitHubStrategy({
    clientID: 'Iv1.b00b007ddaa5058d',
    clientSecret: '98bfce7678703ec24145f9c5553b676f62a7a831',
    callbackURL: 'http://localhost:8080/users/github' //dnd se redirige luego
}, async (accessToken, refreshToken, profile, done) => {
    const user = await usersModel.findOne({ email: profile._json.email }); // chequeo si existen usuarios
    if (!user) { // si no existe, lo creo.
        const newUser = {
            first_name: profile._json.name.split(' ')[0],
            last_name: profile._json.name.split(' ')[1] || ' ',
            email: profile._json.email,
            //age:, //valor x defecto Ó default en el modelo
            password: ' ',
            isGithub: true,
        }
        const userDB = await usersModel.create(newUser);
        done(null, userDB);
    } else {
        done(null, user); // si existe, traigo el que ecnontre
    }
}))




/* funciones para serializar / deserializar */
// Cualquiera sea la ESTRATEGIA     pASSPORT NOS EXIGE ESTAS 2 FUNCIONES: ES PARA SERIALIZAR EL USER Y PODER TRABAJAR CON EL id
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await usersModel.findById(id); //personalizo
    done(null, user);
});


// Git Hub
// App ID: 308659
// Client ID: Iv1.b00b007ddaa5058d
//Client secrets: 98bfce7678703ec24145f9c5553b676f62a7a831