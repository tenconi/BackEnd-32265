import { Router } from 'express';
import { jwtValidation } from '../middlewares/jwt.middleware.js';
import { isAuthenticated } from '../middlewares/authenticated.middleware.js';

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

router.get('/user/profile', isAuthenticated, (req, res) => { //middleware
  res.render('profile');
});

router.get('/user/error', (req, res) => {
  res.render('errorGral');
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
}) */

router.get('/products/add', (req, res)=>{
  res.render('addProduct')
})

router.get('/chat', (req, res)=>{
  res.render('chat')
})



export default router;
