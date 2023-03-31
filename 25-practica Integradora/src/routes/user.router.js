import { Router } from 'express';
import passport from 'passport';


const router = Router();

// registro con passport
router.post(
  '/register',
  passport.authenticate('registro', {
    failureRedirect: '/user/errorRegistro',
    successRedirect: '/user/profile',
    passReqToCallback: true, // middleware - que nos pase todo lo que venga en reques al cb  le digo true
  })
);

router.post(
  '/login',
  passport.authenticate('login', {
    failureRedirect: '/user/errorLogin',
    successRedirect: '/user/profile',
    passReqToCallback: true,
  })
);

router.get('/profile', (req, res) => {
    console.log('aca tamos');
});

router.get('/logout', (req, res) => {
  res.clearCookie('userInfo');

  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/user/login');
    }
  });
  res.redirect('/user/login');
});

export default router;
