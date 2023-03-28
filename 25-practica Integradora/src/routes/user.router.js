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

router.get('/login', (req, res) => {});

router.get('/login', (req, res) => {});

router.get('/logout', (req, res) => {});

export default router;
