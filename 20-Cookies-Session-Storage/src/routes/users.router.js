import { Router } from "express";
import passport from "passport";
import UsersManager from "../persistencia/daos/mongoManager/UsersManager.js";

const router = Router();

const usersManager = new UsersManager(); // instancio

// * * * registro sin passport
router.post("/registro", async (req, res) => {
  const newUser = await usersManager.createUser(req.body);

  if (newUser) {
    res.redirect('/users/login');
  } else {
    res.redirect('/users/errorRegistro');
    // res.send("redirect errorRegistro");
  }
});

// * * * registro con passport
// router.post("/registro", 
//   passport.authenticate('registro', {
//     failureRedirect: '/users/errorRegistro', 
//     successRedirect: '/users/perfil',
//     passReqToCallback: true, // middleware - que nos pase todo lo que venga en reques al cb  le digo true
// }));

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersManager.loginUser(req.body);

  if (user) {
    req.session.email = email;
    req.session.password = password;
    // console.log(user);
    // res.redirect('/users/perfil');
    res.render('perfil', { user });
  } else {
    res.redirect('/users/errorLogin');
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect("/users/login");
    }
  });
  res.redirect("/users/login");
});

/* router.get('/perfil' , (res, req) => {
  req.session()
})
 */

export default router;
