import { Router } from 'express';
import { jwtValidation } from '../middlewares/jwt.middleware.js';
import { isAuthenticated } from '../middlewares/authenticated.middleware.js';
import { isAuthorized } from '../middlewares/authorizedRol.middleware.js';

const router = Router();

router.get('/', (req, res) => {
   res.json({message:'home'});
});


// router.get('/', (req, res) => {
//   res.render('home', {req});
// });

// router.get('/user/register', (req, res) => {
//   res.render('register');
// });

// router.get('/user/login', (req, res) => {
//   res.render('login');
// });

// router.get('/user/profile', isAuthenticated, (req, res) => { //middleware: solo ingresa si esta logueado
//   const userData = req.user
//   // console.log(userData)
//   res.render('profile', {userData});
// });

// router.get('/user/error', (req, res) => {
//   res.render('errorGral');
// });

// router.get('/user/errorRegistro', (req, res) => {
//   res.render('errorRegistro');
// });

// router.get('/user/errorLogin', (req, res) => {
//   res.render('errorLogin');
// });

// router.get('/errorAuthorization', (req, res) => {
//   res.render('errorAuthorization');
// });


// /* router.get('/products/all', (req, res)=>{
//   res.render('products')
// }) */

// router.get('/products/add', isAuthorized, (req, res)=>{
//   res.render('addProduct')
// })

// router.get('/chat', (req, res)=>{
//   res.render('chat')
// })



export default router;
