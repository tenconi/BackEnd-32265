import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/user/register', (req, res) => {
  res.render('register');
});

router.get('/user/login', (req, res) => {
  res.render('login');
});

router.get('/user/profile', (req, res) => {
  res.render('profile');
});

router.get('/user/errorRegistro', (req, res) => {
  res.render('errorRegistro');
});

router.get('/user/errorLogin', (req, res) => {
  res.render('errorLogin');
});

export default router;
