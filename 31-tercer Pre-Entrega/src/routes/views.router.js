import { Router } from 'express';
import { jwtValidation } from '../middlewares/jwt.middleware.js';
import { isAuthenticated } from '../middlewares/authenticated.middleware.js';
import { isAuthorized } from '../middlewares/authorized.middleware.js';

import viewControlls from './../controllers/views.controllers.js';
import cartControllers from '../controllers/cart.controllers.js';

const router = Router();

router.get('/', viewControlls.home);

// Usuarios
router.get('/user', viewControlls.user_register);
router.get('/user/register', viewControlls.user_register);
router.get('/user/login', viewControlls.user_login);
router.get('/user/profile', isAuthenticated, viewControlls.user_profile); // ruta con Middleware

// Cart
router.get('/cart/:cid', isAuthenticated, cartControllers.getCart)
//router.get('/cart/:cid/product/:pid', /* isAuthenticated,  */cartControllers.toCart)

// Errores de Usuarios
router.get('/user/error', viewControlls.user_error);
router.get('/user/errorRegistro', viewControlls.user_error_registro);
router.get('/user/errorLogin', viewControlls.user_error_login);
router.get('/user/errorAuthorization', viewControlls.user_error_authorization);

// Productos
router.get('/products/add', isAuthorized, viewControlls.products_add); // ruta con Middleware
// router.get('/products/all', viewControlls.products_all) // ESTA EN PRODUCTOS


// Chat Room
router.get('/chat', viewControlls.chat_room);

export default router;
