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

/* router.get('/profile', (req, res) => {
});
 */
router.get('/logout', (req, res, next) => {
  req.logout((error)=>{
    if (error) {
      res.redirect('/user/error');
      next();
    } else {
      res.redirect('/user/login')
      next()
    }
  })
});

export default router;
