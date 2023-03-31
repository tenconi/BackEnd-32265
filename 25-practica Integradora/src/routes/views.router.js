import { Router } from 'express';
import { jwtValidation } from '../middlewares/jwt.middleware.js';

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

router.get('/user/profile', jwtValidation, (req, res) => {
  // console.log(res);
  res.render('profile');
});

router.get('/user/errorRegistro', (req, res) => {
  res.render('errorRegistro');
});

router.get('/user/errorLogin', (req, res) => {
  res.render('errorLogin');
});

router.get('/user/errorAuthorization', (req, res) => {
  res.render('errorAuthorization');
});


/* router.get('/products/all', (req, res)=>{
  res.render('products')
})

router.get('/products/add', (req, res)=>{
  res.render('products')
}) */

export default router;
