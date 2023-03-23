import { Router } from "express";
import passport from "passport";
import UsersManager from "../persistencia/daos/mongoManager/UsersManager.js";


const router = Router();

const usersManager = new UsersManager(); // instancio

// * * * registro sin passport
// router.post("/registro", async (req, res) => {
//   const newUser = await usersManager.createUser(req.body);

//   if (newUser) {
//     res.redirect('/users/login');
//   } else {
//     res.redirect('/users/errorRegistro');
//     // res.send("redirect errorRegistro");
//   }
// });

// * * * registro con passport
router.post("/registro", 
  passport.authenticate('registro', {
    failureRedirect: '/users/errorRegistro', 
    successRedirect: '/users/perfil',
    passReqToCallback: true, // middleware - que nos pase todo lo que venga en reques al cb  le digo true
}));

// * * * registro con GitHub
router.get('/registroGitHub', passport.authenticate('github', { scope: [ 'user:email' ] }) )// endpoint q viaja a GitHub
router.get('/github', passport.authenticate('github'), (req, res)=>{
  // console.log(req);
  // req.session.email = req.user.email; // si quiero guardar la info del email
  req.session.first_name = req.user.first_name; 
  res.redirect('/users/perfil')
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersManager.loginUser(req.body);
  
  if (user) {
    req.session.email = email;
    req.session.password = password;
    // console.log(user);
    res.cookie('userInfo', user);
    res.redirect('/users/perfil');
    // res.render('perfil', { user });
  } else {
    res.redirect('/users/errorLogin');
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie('userInfo'); // elimino la cookie con los datos de la sesion 
  
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/users/login");
    }
  });
  res.redirect("/users/login");
});

router.get("/perfil", (req , res) => { // * * * middleware de status
  // const datos = req.cookie.userInfo;
    const {usuario} = req.cookies.userInfo;

    /*
     
  if(usuario){
    console.log('hay Datos');
  } else{
    console.log('No hay nada');
  } */
  // console.log(req.session);
  // console.log(req);
  // console.log(usuario.first_name);
})


export default router;
